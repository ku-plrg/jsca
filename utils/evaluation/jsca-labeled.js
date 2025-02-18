import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { getHash } from './hasher-bundle.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TARGET_URLS = [
   'youtube.com',
  'en.wikipedia.org',
  'instagram.com',
  'facebook.com',
  'reddit.com',
  'whatsapp.com',
  'pinterest.com',
  'play.google.com',
  'apple.com',
  'imdb.com',
  'amazon.com',
  'es.wikipedia.org',
  'tiktok.com',
  'microsoft.com',
  'x.com',
  'de.wikipedia.org',
  'twitter.com',
  'fr.wikipedia.org',
  'fandom.com',
  'canva.com',
  'ja.wikipedia.org',
  'netflix.com',
  'yahoo.co.jp',
  'translate.google.com',
  'espn.com',
  'openai.com',
  'it.wikipedia.org',
  'globo.com',
  'linkedin.com',
  'nytimes.com',
  'ru.wikipedia.org',
  //'yandex.ru',
  'spotify.com',
  'espncricinfo.com',
  'mayoclinic.org',
  'cricbuzz.com',
  'quora.com',
  'pt.wikipedia.org',
  'indeed.com',
  'amazon.in',
  'ilovepdf.com',
  'bbc.co.uk',
  'nih.gov',
  'detik.com',
  // 'clevelandclinic.org',
  // 'amazon.co.jp',
  // 'adobe.com',
  // 'roblox.com',
  // 'rakuten.co.jp',
  // 'amazon.de',
  // 'bbc.com',
  // 'github.com',
  // 'ikea.com',
  // 'pl.wikipedia.org',
  // 'zh.wikipedia.org',
  // 'speedtest.net',
  // 'uol.com.br',
  // 'steampowered.com',
  // 'indiatimes.com',
  // 'samsung.com',
  // 'chatgpt.com',
  // 'yelp.com',
  // 'healthline.com',
  // 'tripadvisor.com',
  // 'tr.wikipedia.org',
  // 'id.wikipedia.org',
  // 'primevideo.com',
  // 'flipkart.com',
  // 'investing.com',
  // 'mercadolivre.com.br',
  // 'cookpad.com',
  // 'poki.com',
  // 'booking.com',
  // 'support.google.com',
  // 'wise.com',
  // 'trendyol.com',
  // 'ar.wikipedia.org',
  // 'webmd.com',
  // '365scores.com',
  // 'medlineplus.gov',
  // 'amazon.co.uk',
  // 'weather.com',
  // 'accuweather.com',
  // 'walmart.com',
  // 'ebay.com',
  // 'hindustantimes.com',
  // 'merriam-webster.com',
  // 'allegro.pl',
  // 'nfl.com',
  // 'www.nhs.uk',
  // 'www.gov.uk',
  // 'nl.wikipedia.org',
  // 'moneycontrol.com',
  // 'allrecipes.com',
  // 'infobae.com',
  // 'cambridge.org',
  // 'amazon.fr',
  // 'britannica.com',
  // 'hurriyet.com.tr',
  // 'finance.yahoo.com',
  // 'sahibinden.com',
];

const dirPath = path.join(__dirname, './data');

function getAllFiles(dirPath, basePath = dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  let result = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.relative(basePath, fullPath);

    if (entry.isFile()) {
      result.push(relativePath);
    } else if (entry.isDirectory()) {
      result = result.concat(getAllFiles(fullPath, basePath));
    }
  }

  return result;
}

const allLibs = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../crawlers/cdn/data/libs-2.json'),
    'utf-8'
  )
);

const allHashes = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, '../crawlers/cdn/data/hash-2.json'),
      'utf-8'
    )
  );

const getMaxIdxs = (arr) => {
  const maxVal = Math.max(...arr);
  return arr.reduce((maxIdxs, val, idx) => {
    if (val === maxVal) {
      maxIdxs.push(idx);
    }
    return maxIdxs;
  }, []);
};

const determineType=(matches) => {
    if(Object.keys(matches).length === 1) { // type 2: only one library!
        if(Object.values(matches)[0].length === 1) {
            const [[[vFrom,vTo]]] = Object.values(matches);
            if(vFrom===vTo) return 3 // type 3: only one version!
          }
        return 2;
    }
    return 1; // type 1: others..
}

const findLibInfo=(lIdx, vIdx) => {
    const [libName,libInfo] = Object.entries(allLibs).find(([libName,libInfo]) => libInfo.id.toString() === lIdx);
    if(!vIdx) return libName
    return [libName, libInfo.versions[vIdx]];
}

const evaluate = async (url) => {
  console.time(`evaluation-${url}`);
  console.time(`loading_and_abstraction-${url}`);
  const allFiles = getAllFiles(path.join(dirPath, url));
  const libHashes = allFiles.flatMap((file) => {
    const filePath = path.join(dirPath, url, file);
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      return getHash(content, filePath);
    } catch (e) {
      console.log('error in ', filePath);
      return [];
    }
  });
  const uniqueHashes = Array.from(
    new Map(libHashes.map((hash) => [hash[0], hash])).values()
  );
  console.timeEnd(`loading_and_abstraction-${url}`);

  console.time(`compare-${url}`);
  const type3Libs = [ ]
  const type2Libs = new Set()
  const type1Libs = {};
  uniqueHashes.forEach(([hash, length]) => {
    if(length<10) return; // too short
    if(!allHashes[length]?.[hash]) return; // no match
    const matches = allHashes[length][hash];
    const type = determineType(matches);
    switch(type) {
        case 3:
            const [[lIdx, [[vIdx,_]]]] = Object.entries(matches);
            if(type3Libs.filter(t3l=>t3l.lIdx === lIdx && t3l.vIdx === vIdx && t3l.length === length ).length ===0 ) {
              const [libName, version] = findLibInfo(lIdx, vIdx);
              type3Libs.push({lIdx, vIdx, length,libName,version});}
            break;
        case 2:
            const [[lIdxx, vIdxes]] = Object.entries(matches);
            const libName = findLibInfo(lIdxx, );
            type2Libs.add({libName,vIdxes});
        case 1:

        default: break;
    }
  })
  console.timeEnd(`compare-${url}`);
  console.timeEnd(`evaluation-${url}`);
  
  return {type3Libs:type3Libs.map(t3l=>({ length:t3l.length, libName:t3l.libName,version:t3l.version })),type2Libs:[...type2Libs]};
};

const evaluateAll = async () => {
  const results = {};
  for (const url of TARGET_URLS) {
    results[url] = await evaluate(url);
  }

  fs.writeFileSync(
    path.join(__dirname, 'results-labeled-3.json'),
    JSON.stringify(results, null, 2)
  );

//   let csv = '';

//   // Create CSV rows
//   Object.entries(results).forEach(([url, libraries]) => {
//     const row = [url];

//     Object.entries(libraries).forEach(([lib, data]) => {
//       row.push(
//         `"(${lib}.${data.maxVersion},${(data.maxScore * 100).toFixed(2)}%)"`
//       );
//     });

//     csv += row.join(',') + '\n';
//   });

//   // Save CSV file
//   fs.writeFileSync(path.join(__dirname, 'results.csv'), csv, 'utf-8');
};

evaluateAll();
