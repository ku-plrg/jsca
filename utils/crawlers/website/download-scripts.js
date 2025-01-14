import axios from 'axios';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { URL } from 'url';
import { logError, truncateFileName } from './utils';

async function downloadFileFallback(url, filePath) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  const content = await page.content();
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
        downloadFileFallback(url, filePath);
        resolve();
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

async function downloadScripts(
  targetUrl,
  headless = true,
  rootFolder = 'data'
) {
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

  const domainFolder = path.join(rootFolder, reachableUrl.host);
  guardFolderSync(domainFolder);

  inlineScripts.forEach((inlineScript, idx) => {
    const filepath = path.join(domainFolder, `browser-script-${idx}.js`);
    fs.writeFileSync(filepath, inlineScript, 'utf8');
  });

  console.log(`Found ${jsFiles.size} JS files. Downloading...`);

  const errorUrls = [];
  for (const fileUrl of jsFiles) {
    try {
      const filePath = truncateFileName(fileUrl.replace(/https?:\/\//, ''));
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
}
