import fs from 'fs';
import {
  fetchAllLibs,
  fetchLibInfo,
  fetchVersionAssets,
} from './fetch-cdn-api.js';
import { groupByMajorRelease, sortVersions } from './versions.js';

async function main(libraryNames) {
  const allLibs = libraryNames ?? (await fetchAllLibs());
  console.log('Total Libs Size: ', allLibs.length);

  const groups = { other: [] };
  for (let i = 97; i <= 122; i++) {
    // a-z
    groups[String.fromCharCode(i)] = [];
  }

  for (const name of allLibs) {
    const firstLetter = name[0].toLowerCase();
    if (groups[firstLetter]) {
      groups[firstLetter].push(name);
    } else {
      groups.other.push(name);
    }
  }
  const errorLibs = [];

  const promises = Object.entries(groups).map(async ([key, libs]) => {
    const groupData = {};

    for (const lib of libs) {
      try {
        const libData = await fetchLibInfo(lib);
        const allFiles = new Set();
        const versionGroup = groupByMajorRelease(libData.versions);
        for (const majorVersion of Object.keys(versionGroup)) {
          const files = await fetchVersionAssets(
            lib,
            versionGroup[majorVersion]?.at(-1)
          );

          files
            .filter((f) => f.endsWith('.js'))
            .forEach(allFiles.add, allFiles);
        }

        if (
          Array.from(allFiles).filter((f) => f.endsWith('.js')).length === 0
        ) {
          errorLibs.push({
            libName: lib,
            reason: 'no js files available',
          });
        } else {
          groupData[lib] = {
            ...libData,
            versions: sortVersions(libData.versions),
            allFiles: Array.from(allFiles),
          };
        }
      } catch (e) {
        errorLibs.push({
          libName: lib,
          reason: 'network error',
          message: JSON.stringify(e),
        });
      }
    }

    const filename = `data/lib-info/${key}.json`;
    fs.writeFileSync(filename, JSON.stringify(groupData, null, 2));
    console.log(`Saved data for group ${key} in ${filename}`);
  });

  await Promise.all(promises);

  console.log(
    'All data saved, except',
    errorLibs.map((e) => e.libName)
  );
  fs.writeFileSync('data/error-libs.json', JSON.stringify(errorLibs, null, 2));
}

main().catch((err) => {
  console.error('Error occurred:', err);
});
