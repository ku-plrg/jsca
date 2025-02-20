import axios from 'axios';
import fs from 'fs';
import path, { dirname } from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logFilePath = path.join(__dirname, 'error-log.txt');

function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

async function processChunks(chunks, asyncFunc, asyncFuncFallback) {
  for (const chunk of chunks) {
    await Promise.all(
      chunk.map((url) =>
        asyncFunc(url).catch((err1) => {
          asyncFuncFallback(url).catch((err2) => {
            logError(`Error processing URL "${url}": ${err2.message || err2}`);
            return null;
          });
        })
      )
    );
  }
}

function logError(msg) {
  console.error(msg);
  fs.appendFile(logFilePath, msg + '\n', (fsErr) => {
    if (fsErr) console.error('Failed to write to log file:', fsErr);
  });
}

// To prevent `ENAMETOOLONG`

const MAX_LENGTH = 230;

function truncateFileName(fileName) {
  if (fileName.endsWith('/')) fileName = fileName.slice(0, -1);
  const ext = fileName.endsWith('.js') ? '.js' : '';
  const baseName = fileName.slice(0, -ext.length - 1);

  if (baseName.length > MAX_LENGTH - ext.length)
    return baseName.slice(0, MAX_LENGTH - ext.length) + ext;

  return fileName;
}

async function downloadFileFallback(url, filePath) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { ignoreHTTPSErrors: true });
  const content = await page.evaluate(() => document.body.innerText);
  await browser.close();
  fs.writeFileSync(filePath, content, 'utf8');
}

async function downloadFile(url, filePath) {
  return new Promise((resolve) => {
    console.log(`Downloading: ${url}`);
    axios({
      method: 'get',
      url,
      responseType: 'stream',
      timeout: 5000, // 5 seconds
    })
      .then((response) => {
        if (response.status < 400) {
          const file = fs.createWriteStream(filePath);
          response.data.pipe(file);
          file.on('finish', () => {
            file.close(() => {
              console.log(`Saved: ${filePath}`);
              resolve();
            });
          });
          file.on('error', (err) => {
            fs.unlinkSync(filePath);
            throw new Error(err);
          });
        } else throw new Error(`[${response.status}] ${response.statusText}`);
      })
      .catch((err) => {
        downloadFileFallback(url, filePath)
          .then(() => resolve())
          .catch((err2) => {
            logError(
              `Error downloading file "${url}": ${err2.message || err2}`
            );
            resolve();
          });
      });
  });
}

async function interceptRequests(page, jsFiles) {
  await page.setRequestInterception(true);
  page.on('request', (request) => {
    const requestUrl = request.url();
    if (request.resourceType() === 'script') {
      jsFiles.add(requestUrl);
    }
    request.continue();
  });
}

function getPreloadScripts(page) {
  return page.evaluate(() => {
    const links = [
      ...document.querySelectorAll('link[rel="preload"][as="script"]'),
      ...document.querySelectorAll('link[rel="modulepreload"]'),
    ];
    return links.map((link) => link.href);
  });
}

function getInlineScripts(page) {
  return page.evaluate(() => {
    const scriptElements = Array.from(document.querySelectorAll('script'));
    return scriptElements
      .filter((script) => !script.src && script.textContent.trim())
      .map((script) => script.textContent);
  });
}

function guardFolderSync(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function encodeFileNameOnly(path) {
  const parts = path.split('/');
  const fileName = encodeURIComponent(parts.pop());
  return [...parts, fileName].join('/');
}

async function downloadScripts(
  targetUrl,
  headless = true,
  rootFolder = 'data'
) {
  console.time(`Download-${targetUrl}`);
  const browser = await puppeteer.launch({ headless });
  const page = await browser.newPage();

  const jsFiles = new Set();

  await interceptRequests(page, jsFiles);

  const reachableUrl = new URL(
    targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`
  );
  await page.goto(reachableUrl, { waitUntil: 'networkidle2', timeout: 90000 });

  const preloadScripts = await getPreloadScripts(page);
  preloadScripts.forEach((scriptUrl) => jsFiles.add(scriptUrl));

  const inlineScripts = await getInlineScripts(page);
  await browser.close();

  const domainFolder = path.join(__dirname, rootFolder, reachableUrl.host);
  guardFolderSync(domainFolder);

  inlineScripts.forEach((inlineScript, idx) => {
    const filepath = path.join(domainFolder, `browser-script-${idx}.js`);
    fs.writeFileSync(filepath, inlineScript, 'utf8');
  });

  console.log(`Found ${jsFiles.size} JS files. Downloading...`);

  const errorUrls = [];
  for (const fileUrl of jsFiles) {
    try {
      const filePath = truncateFileName(
        encodeFileNameOnly(fileUrl.replace(/https?:\/\//, ''))
      );
      const fullFilePath = path.join(domainFolder, filePath);
      guardFolderSync(path.dirname(fullFilePath));
      await downloadFile(fileUrl, fullFilePath);
    } catch (error) {
      const errorMessage = `Failed to download: ${fileUrl} - ${error}\n`;
      logError(errorMessage);
      errorUrls.push(fileUrl);
    }
  }

  console.log(`All JS files saved to ${domainFolder}`);
  if (errorUrls.length > 0)
    console.log(
      `However, there were errors downloading the following ${
        errorUrls.length
      } files:\n
          -${errorUrls.join('\n-')}`
    );
  console.timeEnd(`Download-${targetUrl}`);
}

export { chunkArray, downloadScripts, processChunks };
