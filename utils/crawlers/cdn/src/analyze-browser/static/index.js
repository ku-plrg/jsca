import axios from 'axios';
import fs from 'fs';
import Papa from 'papaparse';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import getLibInfo from '../../../data/index.js';
import { cdnTemplate } from '../cdn-paths.js';
import { getHash } from './hasher-bundle.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filename = join(__dirname, '../../../data/libs-hash.json');

const allLibs = {};
(async () => {
  const csv = fs.readFileSync(join(__dirname, '../ground.csv'), 'utf-8');
  const parsedCSV = Papa.parse(csv, { header: true });
  const libraries = {};
  // const libraries = await getCdnPaths(
  //   targets.filter((t) => !Object.keys(allLibs).includes(t))
  // ); // Record<string,{version:string, src:string, idx:number}[]>
  parsedCSV.data.forEach((data) => {
    const cdnName = data['cdn name'];
    if (cdnName === '') return;
    const lib = getLibInfo(cdnName);
    if (!lib) return;
    libraries[`${cdnName}----${data.file}`] = lib.versions;
  });
  try {
    for (const [libAndFileName, libVersions] of Object.entries(libraries)) {
      let idx = 0;
      const [libName, fileName] = libAndFileName.split('----');
      console.log(`Processing ${libAndFileName} ...`);
      allLibs[libAndFileName] = { versions: [], hashes: {}, hashCnt: [] };
      for (const version of libVersions) {
        try {
          const cdnUrl = cdnTemplate(libName, version, fileName);
          const response = await axios.get(cdnUrl).catch((e) => {
            if (e.response.status === 404) throw new Error(`${cdnUrl} is 404`);
          });
          allLibs[libAndFileName].versions.push(version);
          const file = response.data;
          const hashes = Array.from(
            new Set(
              getHash(file, `${libAndFileName}@${version}`).filter(
                ([_, length]) => length > 5
              )
            )
          );
          allLibs[libAndFileName].hashCnt.push(hashes.length);
          hashes.forEach(([hash, length]) => {
            const prevHash = allLibs[libAndFileName].hashes[length]?.[hash];
            if (!prevHash) {
              if (!allLibs[libAndFileName].hashes[length])
                allLibs[libAndFileName].hashes[length] = {
                  [hash]: [[idx, idx]],
                };
              else allLibs[libAndFileName].hashes[length][hash] = [[idx, idx]];
            } else if (prevHash[prevHash.length - 1][1] === idx - 1) {
              allLibs[libAndFileName].hashes[length][hash][
                prevHash.length - 1
              ][1] = idx;
            } else if (prevHash[prevHash.length - 1][1] < idx) {
              allLibs[libAndFileName].hashes[length][hash].push([idx, idx]);
            }
          });
          idx++;
        } catch (e) {
          console.error('[ERROR]', e.message);
        }
      }
    }
  } catch (e) {
    console.error('error', e.message);
    console.log('write', filename, 'before I die..');
    fs.writeFileSync(filename, JSON.stringify(allLibs, null, 2));
  }
  fs.writeFileSync(filename, JSON.stringify(allLibs, null, 2));
})();
