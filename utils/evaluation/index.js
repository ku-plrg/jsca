import puppeteer from 'puppeteer';
import { default as jsca } from './scripts/jsca.js';
import { default as ldc } from './scripts/ldc.js';
import { default as ptdetector } from './scripts/PTdetector.js';
import { getFileStream } from './utils.js';

const callDetectOnBrowser = (targetUrl, detectFunc) =>
  new Promise(async (res) => {
    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
      await page.goto(targetUrl, {
        waitUntil: 'networkidle2',
        timeout: 90000,
      });

      page.on('console', (msg) => {
        const msgText = msg.text();
        if (msgText.startsWith('[') && msgText.endsWith(']')) {
          res(JSON.parse(msgText));
        }
      });

      await page.evaluate((funcString) => {
        const detect = eval(`(${funcString})`);
        detect();
      }, detectFunc);

      await new Promise((res2) => setTimeout(res2, 5000));
      res([]);
    } catch (error) {
      console.error('error:', error);
      res([]);
    } finally {
      await browser.close();
    }
  });

const targetUrls = [
  'https://apple.com',
  'https://att.com',
  'https://bankofamerica.com',
  'https://bbc.com',
  'https://bedbathandbeyond.com',
  'https://bestbuy.com',
  'https://bing.com',
  'https://booking.com',
  'https://ca.gov',
  'https://cambridge.org',
  'https://canva.com',
  'https://capitalone.com',
];

const detectScripts = [
  { name: 'ldc', func: ldc.toString() },
  { name: 'jsca', func: jsca.toString() },
  { name: 'ptdetector', func: ptdetector.toString() },
];

const evaluate = async () => {
  const { writeHeaders, appendCsvRow } = getFileStream(
    'evaluation.csv',
    'target,ldc,ptdetector,jsca\n'
  );
  writeHeaders();
  for (const targetUrl of targetUrls) {
    console.log('targetUrl:', targetUrl);
    const results = {};
    for (const detectScript of detectScripts) {
      try {
        const result = await callDetectOnBrowser(targetUrl, detectScript.func);
        results[detectScript.name] = result;
      } catch (e) {
        console.log('error:', e);
        results[detectScript.name] = [];
      }
    }
    appendCsvRow([targetUrl, results.ldc, results.ptdetector, results.jsca]);
  }
};

evaluate();
