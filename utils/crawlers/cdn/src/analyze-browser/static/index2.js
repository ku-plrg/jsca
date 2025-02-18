import axios from 'axios';
import fs, { readFileSync } from 'fs';
import Papa from 'papaparse';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import getLibInfo from '../../../data/index.js';
import { cdnTemplate } from '../cdn-paths.js';
import { getHash } from './hasher-bundle.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const hashFilename = join(__dirname, '../../../data/hash-2.json');
const libFilename = join(__dirname, '../../../data/libs-2.json');
const allLibsFileVersionsJson = JSON.parse(readFileSync(join(__dirname, '../../../data/all-libs-file-versions.json'), 'utf-8'));

const parseVersionString = (version) => {
  const [major, minor, patch = '0'] = version.split('.');
  const [patchVersion, patchSuffix = '0'] = patch.split('-');
  return [
    parseInt(major),
    parseInt(minor),
    parseInt(patchVersion),
    patchSuffix,
  ];
};

const allLibs = {};
const allHashes = {};

(async () => {
  console.time('index2')
  const csv = fs.readFileSync(join(__dirname, '../ground.csv'), 'utf-8');
  const parsedCSV = Papa.parse(csv, { header: true });
  const libraries = {};
  parsedCSV.data.forEach((data) => {
    const cdnName = data['cdn name'];
    if (cdnName === '') return;
    const lib = getLibInfo(cdnName);
    if (!lib) return;
    if (!libraries[cdnName])
      libraries[cdnName] = {
        files: [data.file],
        versions: lib.versions.filter(
          (v) => parseVersionString(v)[3] === '0' // no pre-release versions
        ),
      };
    else libraries[cdnName].files.push(data.file);
  });
  try {
    let libIdx = 0;
    for (const [libName, { files, versions }] of Object.entries(libraries)) {
      let versionIdx = 0;
      console.log(`Processing ${libName} ...`);
      allLibs[libName] = { id: libIdx, versions: [], hashCnt: [] };
      for (const version of versions) {
        const hashes = [];
        for (const fileName of files) {
          try {
            if(!allLibsFileVersionsJson[`${libName}----${fileName}`]?.includes(version)) continue
            const cdnUrl = cdnTemplate(libName, version, fileName);
            const response = await axios.get(cdnUrl).catch((e) => {
              if (e.response.status === 404)
                throw new Error(`${cdnUrl} is 404`);
            });
            hashes.push(
              ...getHash(response.data, `${libName}/${fileName}@${version}`)
            );
          } catch (e) {
            console.error('[ERROR]', e.message);
          }
        }
        const uniqueHashes = Array.from(
          new Map(hashes.map((hash) => [hash[0], hash])).values()
        );
        if (uniqueHashes.length === 0) continue;
        allLibs[libName].versions.push(version);
        allLibs[libName].hashCnt.push(uniqueHashes.length);
        uniqueHashes.forEach(([hash, length]) => {
          if (allHashes[length]) {
            if (allHashes[length][hash]) {
              if (allHashes[length][hash][libIdx]) {
                const prevHash = allHashes[length][hash][libIdx];
                if (prevHash[prevHash.length - 1][1] === versionIdx - 1)
                  allHashes[length][hash][libIdx][prevHash.length - 1][1] =
                    versionIdx;
                else
                  allHashes[length][hash][libIdx].push([
                    versionIdx,
                    versionIdx,
                  ]);
              } else {
                allHashes[length][hash][libIdx] = [[versionIdx, versionIdx]];
              }
            } else {
              allHashes[length][hash] = {
                [libIdx]: [[versionIdx, versionIdx]],
              };
            }
          } else {
            allHashes[length] = {
              [hash]: {
                [libIdx]: [[versionIdx, versionIdx]],
              },
            };
          }
        });
        versionIdx++;
      }
      libIdx++;
    }
  } catch (e) {
    console.error('error', e.message);
    console.log('write', hashFilename, 'before I die..');
    console.log('write', libFilename, 'before I die..');
    fs.writeFileSync(hashFilename, JSON.stringify(allHashes, null, 2));
    fs.writeFileSync(libFilename, JSON.stringify(allLibs, null, 2));
  }
  fs.writeFileSync(hashFilename, JSON.stringify(allHashes, null, 2));
  fs.writeFileSync(libFilename, JSON.stringify(allLibs, null, 2));
  console.timeEnd('index2')
})();
