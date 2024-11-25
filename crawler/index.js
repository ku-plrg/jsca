import { dirname } from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { jQuery } from './constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const results = [];

(async () => {
  // console.log('| cdn | nodes | children |');
  // console.log('| --- | --- | --- |');

  const libraries = jQuery.versions.map(jQuery.cdnUrlTemplate);

  for (const library of libraries) {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--disable-web-security', '--allow-file-access-from-files'],
    });

    try {
      const page = await browser.newPage();

      await page.goto(`file://${__dirname}/index.html`);

      const result = await new Promise((resolve, reject) => {
        page.on('console', (msg) => {
          const text = msg.text();
          if (text.startsWith('{') && text.endsWith('}')) {
            try {
              const result = JSON.parse(text);
              resolve(result);
            } catch (e) {
              reject(`Failed to parse JSON from console: ${text}`);
            }
          }
        });

        page
          .evaluate((url) => {
            return new Promise((_resolve) => {
              const script = document.createElement('script');
              script.src = url;
              script.id = 'dynamic-cdn';
              script.onload = _resolve;
              document.head.appendChild(script);
            });
          }, library)
          .then(() => {
            page.click('button');
          })
          .catch(reject);
      });

      // console.log(
      //   `| ${result.src} | ${result.directChildrenNum} | ${JSON.stringify(
      //     result.directChildren,
      //   )} |`,
      // );
      results.push(result);
    } catch (e) {
      console.error(`Error processing ${library}:`, e);
    } finally {
      await browser.close();
    }
  }
  console.log(JSON.stringify(results));
})();
