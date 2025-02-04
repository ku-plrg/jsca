import fs, { mkdirSync } from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import extractTree from './tree-extractor.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCRIPT_PATHS = [
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.0/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.0/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.2/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js',
  // 예시:
  // 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.core.js',
  // '../build-minify-only/build/jquery/1.3.0/babel-minify/jquery.js'
];

function getUniqueBaseName(script) {
  let baseName;
  if (script.startsWith('http')) {
    try {
      const urlObj = new URL(script);
      const parts = urlObj.pathname.split('/').filter(Boolean);
      baseName = parts.pop();
      const lastPart = parts[parts.length - 1];
      if (lastPart && /^\d+\.\d+(\.\d+)?$/.test(lastPart)) {
        const ext = path.extname(baseName);
        const nameWithoutExt = path.basename(baseName, ext);
        baseName = `${nameWithoutExt}-${lastPart}${ext}`;
      } else {
        const ext = path.extname(baseName);
        const nameWithoutExt = path.basename(baseName, ext);
        baseName = `${nameWithoutExt}-${urlObj.hostname}${ext}`;
      }
    } catch (err) {
      baseName = 'script';
    }
  } else {
    const normalizedPath = path.normalize(script);
    const parts = normalizedPath.split(path.sep).filter(Boolean);
    baseName = parts.pop();
    const lastPart = parts[parts.length - 1];
    if (lastPart && /^\d+\.\d+(\.\d+)?$/.test(lastPart)) {
      const ext = path.extname(baseName);
      const nameWithoutExt = path.basename(baseName, ext);
      baseName = `${nameWithoutExt}-${lastPart}`;
    } else {
      const ext = path.extname(baseName);
      const nameWithoutExt = path.basename(baseName, ext);
      baseName = `${nameWithoutExt}-local`;
    }
  }
  return baseName;
}

function flattenFunctionNodes(node) {
  const results = [];
  function traverse(node, pathStr = '') {
    if (
      node.type === 'function' &&
      !node.value.startsWith('Cyclic') &&
      !node.value.startsWith('Prototype/Constructor')
    ) {
      results.push({
        name: `${pathStr}${node.propertyName}`,
        body: node.value,
      });
    }
    if (node.children && Array.isArray(node.children)) {
      for (const child of node.children) {
        traverse(child, `${pathStr}${node.propertyName}.`);
      }
    }
  }
  traverse(node);
  return results;
}

(async () => {
  for (const script of SCRIPT_PATHS) {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--disable-web-security', '--allow-file-access-from-files'],
    });
    const page = await browser.newPage();
    await page.goto(`file://${__dirname}/index.html`);
    const scriptPath = script.startsWith('http')
      ? script
      : path.join(__dirname, script);
    const result = await extractTree(page, scriptPath);
    await page.close();
    const baseName = getUniqueBaseName(script);
    const folder = path.join(__dirname, 'dist');
    mkdirSync(folder, { recursive: true });
    //const allOutputPath = path.join(folder, `${baseName}.all.json`);
    const funcOutputPath = path.join(folder, `${baseName}.json`);
    //fs.writeFileSync(allOutputPath, JSON.stringify(result, null, 2));
    const functions = result.tree
      .reduce((acc, cur) => [...acc, flattenFunctionNodes(cur)], [])
      .flat();
    fs.writeFileSync(funcOutputPath, JSON.stringify(functions, null, 2));
    console.log(`Done with ${functions.length} functions for ${script}`);
    await browser.close();
  }
})();
