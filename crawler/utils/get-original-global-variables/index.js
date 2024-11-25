import { dirname } from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
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
        if (text.startsWith('[') && text.endsWith(']')) {
          try {
            const res = JSON.parse(text);
            resolve(res);
          } catch (e) {
            reject(`Failed to parse JSON from console: ${text}`);
          }
        }
      });
      setTimeout(() => page.click('button'), 10);
    });
    console.log(JSON.stringify(result));
  } catch (e) {
    console.error(`Error processing ${library}:`, e);
  } finally {
    await browser.close();
  }
})();
