import { dirname } from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { getCdnPaths } from './cdn-paths.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const results = [];

(async () => {
  const libraries = getCdnPaths(['jquery']);

  // todo : apply this for loop for all libraries
  for (const library of libraries.jquery) {
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
          .evaluate(
            ({ library }) => {
              return new Promise((_resolve) => {
                window.originalGlobalVariables = JSON.stringify(
                  Object.getOwnPropertyNames(window)
                );
                const script = document.createElement('script');
                script.src = library;
                script.id = 'dynamic-cdn';
                script.onload = _resolve;
                document.head.appendChild(script);
              });
            },
            { library }
          )
          .then(() => {
            page.click('button');
          })
          .catch(reject);
      });

      results.push(result);
    } catch (e) {
      console.error(`Error processing ${library}:`, e);
    } finally {
      await browser.close();
    }
  }
  console.log(JSON.stringify(results));
})();
