import axios from 'axios';
import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import getLibInfo from '../../../data/index.js';
import { cdnTemplate } from '../cdn-paths.js';
import { getHash } from './hasher-bundle.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filename = join(__dirname, '../../../data/all-libs-hash.json');

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

const API_TEMPLATE = (libName, version) =>
  `https://api.cdnjs.com/libraries/${libName}/${version}?fields=files`;

const LIB_CNT = 200;
const chunkArray = (array, size) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
};

const libsFileVersionsFilePath = join(
  __dirname,
  '../../../data/all-libs-file-versions.json'
);
const getAllLibWithVersionFileInfo = async () => {
  if (fs.existsSync(libsFileVersionsFilePath)) {
    console.log('Using cached data from:', libsFileVersionsFilePath);
    return JSON.parse(fs.readFileSync(libsFileVersionsFilePath, 'utf-8'));
  }

  const allLibNamesPath = fs.readFileSync(
    join(__dirname, '../../../data/libs.json')
  );
  const allLibNames = JSON.parse(allLibNamesPath).splice(0, LIB_CNT);
  const libs = {};

  for (const libName of allLibNames) {
    try {
      const lib = getLibInfo(libName);
      if (!lib) continue;

      const patchReleases = lib.versions.filter(
        (v) => parseVersionString(v)[3] === '0' // no pre-release versions
      );

      console.log(libName, `${patchReleases.length} versions`);
      const chunks = chunkArray(patchReleases, 5);
      for (const chunk of chunks) {
        console.log('Fetching versions', chunk.join(','));
        const requests = chunk.map((version) =>
          axios.get(API_TEMPLATE(libName, version)).then((res) => ({
            version,
            files: res.data.files.filter((f) => f.endsWith('.js')),
          }))
        );
        try {
          const results = await Promise.all(requests);
          results.forEach(({ version, files }) => {
            files.forEach((file) => {
              const key = `${libName}----${file}`;
              if (libs[key]) libs[key].push(version);
              else libs[key] = [version];
            });
          });
        } catch (error) {
          console.error('Error fetching versions for', libName, error);
        }
      }
    } catch (e) {
      console.error('Error in', libName, e);
    }
  }

  fs.writeFileSync(libsFileVersionsFilePath, JSON.stringify(libs, null, 2));
  console.log('Data saved to:', libsFileVersionsFilePath);

  return libs;
};

const allLibs = {};
(async () => {
  const libWithVersionFileInfo = await getAllLibWithVersionFileInfo();
  try {
    for (const [libAndFileName, libVersions] of Object.entries(
      libWithVersionFileInfo
    )) {
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
          const file = response.data;
          const hashes = getHash(file, `${libAndFileName}@${version}`);
          if(hashes.length < 20) continue;
          
          allLibs[libAndFileName].versions.push(version);
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
          if (idx % 5 === 0)
            fs.writeFileSync(filename, JSON.stringify(allLibs, null, 2));
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
