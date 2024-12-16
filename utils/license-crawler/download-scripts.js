const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { logError, truncateFileName } = require('./utils');

const TARGET_URLS = [
  /* put urls here */
  'www.youtube.com',
];

const CHUNK_SIZE = 2;

processChunks(chunkArray(TARGET_URLS, CHUNK_SIZE), downloadScripts);

async function downloadScripts(targetUrl, rootFolder = 'data') {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const jsFiles = new Set();

  await page.setRequestInterception(true);
  page.on('request', (request) => {
    const requestUrl = request.url();
    if (request.resourceType() === 'script') {
      jsFiles.add(requestUrl);
    }
    request.continue();
  });

  console.log(`Navigating to ${targetUrl}`);
  await page.goto(targetUrl, { waitUntil: 'networkidle0' });

  const preloadScripts = await page.evaluate(() => {
    const links = [
      ...document.querySelectorAll('link[rel="preload"][as="script"]'),
      ...document.querySelectorAll('link[rel="modulepreload"]'),
    ];
    return links.map((link) => link.href);
  });

  preloadScripts.forEach((scriptUrl) => jsFiles.add(scriptUrl));

  const parsedUrl = url.parse(targetUrl);
  const domainFolder = path.join(rootFolder, parsedUrl.hostname);

  if (!fs.existsSync(domainFolder)) {
    fs.mkdirSync(domainFolder, { recursive: true });
  }

  console.log(`Found ${jsFiles.size} JS files. Downloading...`);

  for (const fileUrl of jsFiles) {
    try {
      const response = await page.goto(fileUrl);
      const filePath = truncateFileName(
        fileUrl.replace(/https?:\/\//, '').split(/[?#]/)[0]
      );
      const fullFilePath = path.join(domainFolder, filePath);

      const folderPath = path.dirname(fullFilePath);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }

      const buffer = await response.buffer();
      fs.writeFileSync(fullFilePath, buffer);
      console.log(`Saved: ${fullFilePath}`);
    } catch (error) {
      const errorMessage = `Failed to download: ${fileUrl} - ${error.message}\n`;
      logError(errorMessage);
    }
  }

  await browser.close();
  console.log(`All JS files saved to ${domainFolder}`);
}
