import cliProgress from 'cli-progress';
import fs from 'fs';
import { dirname } from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import prevAllTrees from '../../data/allTree.json' assert { type: 'json' };
import { getCdnPaths } from './cdn-paths.js';
import { getCompressedTree } from './compressor.js';
import extractTree from './tree-extractor.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const allTrees = prevAllTrees;

const targets = [
  'jquery',
  'lodash.js',
  'moment.js',
  'zepto',
  'd3',
  'axios',
  'angular',
  'antd',
  'amplifyjs',
  'backbone.js',
  'bootstrap',
  'core-js',
  'camanjs',
  'dc',
  'fastify',
  'snap.svg',
  'smartcrop',
  'save-svg-as-png', // all properties in versions are same :(
  'sql.js', // all files in cdnjs are not for browser impl :(
  'driver.js',
  'kube',
  'formjs',
  'tocas-ui',
  'nprogress',
  'nedb',
  'underscore.js',
  'ionic',
  'hammer.js',
  'google-closure-library',
];

const filename = `data/allTree.json`;

(async () => {
  if (Object.keys(allTrees).length > 0)
    console.log(`skip ${Object.keys(allTrees).join(', ')}`);
  const libraries = await getCdnPaths(
    targets.filter((t) => !Object.keys(allTrees).includes(t))
  ); // Record<string,{version:string, src:string, idx:number}[]>
  for (const [libName, libVersionInfos] of Object.entries(libraries)) {
    console.log(`Processing ${libName}...`);
    const progressBar = new cliProgress.SingleBar(
      {},
      cliProgress.Presets.shades_classic
    );
    progressBar.start(libVersionInfos.length, 0);

    allTrees[libName] = { src: {}, tree: {} };
    for (const libVersionInfo of libVersionInfos) {
      allTrees[libName].src[libVersionInfo.version] = libVersionInfo.src;
      // library: {version:string, src:string, idx:number}
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--disable-web-security', '--allow-file-access-from-files'],
      });

      try {
        const page = await browser.newPage();
        await page.goto(`file://${__dirname}/index.html`);
        const result = await extractTree(page, libVersionInfo.src);
        // result: {src:string, tree: Record<string,string[]>, directChildrenNum:number}
        allTrees[libName].tree = getCompressedTree(
          allTrees[libName].tree,
          result.tree,
          libVersionInfo.idx
        );
        progressBar.update(libVersionInfo.idx + 1);
      } catch (e) {
        console.error(`Error processing ${libVersionInfo.src}:`, e);
      } finally {
        await browser.close();
      }
    }
    progressBar.stop();
  }

  fs.writeFileSync(filename, JSON.stringify(allTrees, null, 2));
})();
