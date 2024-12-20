import fs from 'fs';
import path, { dirname } from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import extractTree from './tree-extractor.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SCRIPT_PATH =
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js';
// ex1) https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.core.js
// ex2) ../build-minify-only/build/jquery/1.3.0/babel-minify/jquery.js

const ALL_OUTPUT_PATH = 'output.json';
const FUNC_OUTPUT_PATH = 'output-func.json';

const scriptPath = SCRIPT_PATH.startsWith('http')
  ? SCRIPT_PATH
  : path.join(__dirname, SCRIPT_PATH);

function flattenFunctionNodes(node) {
  const results = [];
  function traverse(node, path = '') {
    if (node.type === 'function' && !node.value.startsWith('Cyclic')) {
      results.push({
        name: `${path}${node.propertyName}`,
        body: node.value,
      });
    }
    if (node.children && Array.isArray(node.children)) {
      for (const child of node.children) {
        traverse(child, `${path}${node.propertyName}.`);
      }
    }
  }
  traverse(node);
  return results;
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--disable-web-security', '--allow-file-access-from-files'],
  });
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/index.html`);
  const result = await extractTree(page, scriptPath);
  browser.close();
  fs.writeFileSync(ALL_OUTPUT_PATH, JSON.stringify(result, null, 2));
  const functions = result.tree
    .reduce((acc, cur) => [...acc, flattenFunctionNodes(cur)], [])
    .flat();
  fs.writeFileSync(FUNC_OUTPUT_PATH, JSON.stringify(functions, null, 2));
})();
