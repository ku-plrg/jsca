import fs from 'fs';
import {
  fetchAllLibs,
  fetchLibVersions,
} from './helper.js';

async function main() {
  const allLibs = await fetchAllLibs();
  const names = allLibs.results.map(lib => lib.name).sort();
  const allData = {};
  for (const name of names) {
    const libData = await fetchLibVersions(name);
    allData[name] = libData;
    console.log(libData);
  }
  fs.writeFileSync('data.json', JSON.stringify(allData, null, 2));
}

main();
