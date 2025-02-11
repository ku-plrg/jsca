import axios from 'axios';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { getCdnPaths } from '../cdn-paths.js';
import { getHash } from './hasher-bundle.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filename = 'data/libs-hash.json';

const targets = [
  'jquery',
  // 'lodash.js',
  // 'moment.js',
  //   'zepto',
  //   'd3',
  //   'axios',
  //   'angular',
  //   'antd',
  //   'amplifyjs',
  //   'backbone.js',
  //   'bootstrap',
  //   'core-js',
  //   'camanjs',
  //   'dc',
  //   'fastify',
  //   'snap.svg',
  //   'smartcrop',
  //   'save-svg-as-png', // all properties in versions are same :(
  //   'sql.js', // all files in cdnjs are not for browser impl :(
  //   'driver.js',
  //   'kube',
  //   'formjs',
  //   'tocas-ui',
  //   'nprogress',
  //   'nedb',
  //   'underscore.js',
  //   'ionic',
  //   'hammer.js',
  //   'google-closure-library',
];

const allLibs = {};
(async () => {
  if (Object.keys(allLibs).length > 0)
    console.log(`skip ${Object.keys(allLibs).join(', ')}`);
  const libraries = await getCdnPaths(
    targets.filter((t) => !Object.keys(allLibs).includes(t))
  ); // Record<string,{version:string, src:string, idx:number}[]>
  for (const [libName, libVersionInfos] of Object.entries(libraries)) {
    console.log(`Processing ${libName}...`);
    allLibs[libName] = { src: {}, hashes: {}, hashCnt: [] };
    for (const libVersionInfo of libVersionInfos) {
      allLibs[libName].src[libVersionInfo.version] = libVersionInfo.src;
      const response = await axios.get(libVersionInfo.src);
      const file = response.data;
      const hashes = getHash(file, `${libName}@${libVersionInfo.version}`);
      allLibs[libName].hashCnt.push(hashes.length);
      hashes.forEach(([hash, length]) => {
        const prevHash = allLibs[libName].hashes[length]?.[hash];
        if (!prevHash) {
          if (!allLibs[libName].hashes[length])
            allLibs[libName].hashes[length] = {
              [hash]: [[libVersionInfo.idx, libVersionInfo.idx]],
            };
          else
            allLibs[libName].hashes[length][hash] = [
              [libVersionInfo.idx, libVersionInfo.idx],
            ];
        } else if (
          prevHash[prevHash.length - 1][1] ===
          libVersionInfo.idx - 1
        ) {
          allLibs[libName].hashes[length][hash][prevHash.length - 1][1] =
            libVersionInfo.idx;
        } else if (prevHash[prevHash.length - 1][1] < libVersionInfo.idx) {
          allLibs[libName].hashes[length][hash].push([
            libVersionInfo.idx,
            libVersionInfo.idx,
          ]);
        }
      });
    }
  }

  fs.writeFileSync(filename, JSON.stringify(allLibs, null, 2));
})();
