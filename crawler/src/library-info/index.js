import fs from 'fs';
import {
  fetchAllLibs,
  fetchLibInfo,
  fetchVersionAssets,
} from './fetch-cdn-api.js';
import { groupByMajorRelease } from './versions.js';

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
        const resultVersionGroup = {};
        const versionGroup = groupByMajorRelease(libData.versions);
        for (const majorVersion of Object.keys(versionGroup)) {
          const files = await fetchVersionAssets(
            lib,
            versionGroup[majorVersion][0]
          );
          resultVersionGroup[majorVersion] = {
            versions: versionGroup[majorVersion],
            files,
          };
        }

        groupData[lib] = {
          ...libData,
          versions: resultVersionGroup,
        };
      } catch (e) {
        errorLibs.push(lib);
      }
    }

    const filename = `data/lib-info/${key}.json`;
    fs.writeFileSync(filename, JSON.stringify(groupData, null, 2));
    console.log(`Saved data for group ${key} in ${filename}`);
  });

  await Promise.all(promises);

  console.log('All data saved.');
  console.log(errorLibs);
}

main().catch((err) => {
  console.error('Error occurred:', err);
});
