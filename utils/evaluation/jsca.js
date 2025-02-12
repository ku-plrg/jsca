import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { getHash } from './hasher-bundle.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TARGET_URLS = [
  'en.wikipedia.org',
  'youtube.com',
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
  'yandex.ru',
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
  'clevelandclinic.org',
  'amazon.co.jp',
  'adobe.com',
  'roblox.com',
  'rakuten.co.jp',
  'amazon.de',
  'bbc.com',
  'github.com',
  'ikea.com',
  'pl.wikipedia.org',
  'zh.wikipedia.org',
  'speedtest.net',
  'uol.com.br',
  'steampowered.com',
  'indiatimes.com',
  'samsung.com',
  'chatgpt.com',
  'yelp.com',
  'healthline.com',
  'tripadvisor.com',
  'tr.wikipedia.org',
  'id.wikipedia.org',
  'primevideo.com',
  'flipkart.com',
  'investing.com',
  'mercadolivre.com.br',
  'cookpad.com',
  'poki.com',
  'booking.com',
  'support.google.com',
  'wise.com',
  'trendyol.com',
  'ar.wikipedia.org',
  'webmd.com',
  '365scores.com',
  'medlineplus.gov',
  'amazon.co.uk',
  'weather.com',
  'accuweather.com',
  'walmart.com',
  'ebay.com',
  'hindustantimes.com',
  'merriam-webster.com',
  'allegro.pl',
  'nfl.com',
  'www.nhs.uk',
  'www.gov.uk',
  'nl.wikipedia.org',
  'moneycontrol.com',
  'allrecipes.com',
  'infobae.com',
  'cambridge.org',
  'amazon.fr',
  'britannica.com',
  'hurriyet.com.tr',
  'finance.yahoo.com',
  'sahibinden.com',
  'etsy.com',
  'nike.com',
  'freepik.com',
  'shopee.co.id',
  'www.gov.br',
  'namu.wiki',
  'wiktionary.org',
  'smallpdf.com',
  'scribd.com',
  'amazon.it',
  'rottentomatoes.com',
  'savefrom.net',
  'medicalnewstoday.com',
  'mail.yahoo.com',
  'gsmarena.com',
  'kompas.com',
  'mercadolibre.com.mx',
  'trustpilot.com',
  'tokopedia.com',
  'tradingview.com',
  'nba.com',
  'byjus.com',
  'milliyet.com.tr',
  'discord.com',
  'hi.wikipedia.org',
  'chromewebstore.google.com',
  'turkiye.gov.tr',
  'deepl.com',
  'cnn.com',
  'homedepot.com',
  'aliexpress.com',
  'mercadolibre.com.ar',
  'msdmanuals.com',
  'vk.com',
  'kumparan.com',
  'softonic.com',
  'skysports.com',
  'xe.com',
  'msn.com',
  'justdial.com',
  'crazygames.com',
  'shutterstock.com',
  '1mg.com',
  'marca.com',
  'amazon.es',
  'uidai.gov.in',
  'alodokter.com',
  'playstation.com',
  'theguardian.com',
  't.me',
  'goal.com',
  'yahoo.com',
  'uk.wikipedia.org',
  'forbes.com',
  'usatoday.com',
  'eksisozluk.com',
  'az24.vn',
  'epfindia.gov.in',
  'target.com',
  'coinmarketcap.com',
  'heylink.me',
  'ndtv.com',
  'rae.es',
  'allocine.fr',
  'liputan6.com',
  'timeanddate.com',
  'telegram.org',
  'conectate.com.do',
  'sarkariresult.com',
  'zara.com',
  'vi.wikipedia.org',
  'ca.wikipedia.org',
  'twitch.tv',
  'istockphoto.com',
  'filmweb.pl',
  'remove.bg',
  'wp.pl',
  'proxysite.com',
  'news18.com',
  'ca.gov',
  'indianexpress.com',
  'hepsiburada.com',
  'tribunnews.com',
  'reverso.net',
  'paypal.com',
  'amazon.com.br',
  'uptodown.com',
  'europa.eu',
  'amazon.com.mx',
  'dailymotion.com',
  'interia.pl',
  'sv.wikipedia.org',
  'fazenda.gov.br',
  'quillbot.com',
  'akakce.com',
  'marmiton.org',
  'sabah.com.tr',
  'groww.in',
  'jagran.com',
  'foxnews.com',
  'nintendo.com',
  'olx.pl',
  'tabelog.com',
  'lequipe.fr',
  'google.com',
  'giallozafferano.it',
  'kinopoisk.ru',
  'zillow.com',
  'memorial.com.tr',
  'genius.com',
  'transfermarkt.com.tr',
  'cnnbrasil.com.br',
  'people.com',
  'mi.com',
  'altibbi.com',
  'shein.com',
  'halodoc.com',
  'uefa.com',
  'sanook.com',
  'leboncoin.fr',
  'investopedia.com',
  'as.com',
  'hm.com',
  'tuasaude.com',
  'pixabay.com',
  'pantip.com',
  'cbssports.com',
  'flashscore.com.br',
  'disneyplus.com',
  'makemytrip.com',
  'usps.com',
  'caixa.gov.br',
  'blibli.com',
  'irs.gov',
  'ap.gov.in',
  'programme-tv.net',
  'sikayetvar.com',
  'ssstik.io',
];

const dirPath = path.join(__dirname, './data');

function getDirectDirs(dirPath) {
  return fs
    .readdirSync(dirPath)
    .filter((file) => fs.statSync(path.join(dirPath, file)).isDirectory());
}

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

const libHashes = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../crawlers/cdn/data/libs-hash.json'),
    'utf-8'
  )
);

const getMaxIdx = (arr) =>
  arr.reduce((maxIdx, val, idx, arr) => (val > arr[maxIdx] ? idx : maxIdx), 0);

const evaluate = async (url) => {
  console.time(`evaluation-${url}`);
  console.time(`loading_and_abstraction-${url}`);
  const allFiles = getAllFiles(path.join(dirPath, url));
  const hashes = allFiles.flatMap((file) => {
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
    new Map(hashes.map((hash) => [hash[0], hash])).values()
  );
  console.timeEnd(`loading_and_abstraction-${url}`);

  console.time(`compare-${url}`);
  const libVersions = {};
  Object.entries(libHashes).forEach(
    ([lib, { versions, hashes, hashCnt: libHashCnt }]) => {
      const matches = Array(versions.length).fill(0);
      let detected = false;
      uniqueHashes.forEach(([hash, length]) => {
        if (hashes[length] && hashes[length][hash]) {
          if (!detected) detected = true;
          hashes[length][hash].forEach(([start, end]) => {
            for (let i = start; i <= end; i++) {
              matches[i]++;
            }
          });
        }
      });
      const scores = matches.map((m, idx) => m / libHashCnt[idx]);
      const maxIdx = getMaxIdx(scores);
      if (detected && scores[maxIdx] > 0.35) {
        const maxVersion = versions[maxIdx];
        libVersions[lib] = { scores, maxVersion };
      }
    }
  );
  console.timeEnd(`compare-${url}`);
  console.timeEnd(`evaluation-${url}`);
  return libVersions;
};

const evaluateAll = async () => {
  const results = {};
  for (const url of TARGET_URLS) {
    results[url] = await evaluate(url);
  }

  // Save JSON results
  console.log(results);
  fs.writeFileSync(
    path.join(__dirname, 'results.json'),
    JSON.stringify(results, null, 2)
  );

  let csv = '';

  // Create CSV rows
  Object.entries(results).forEach(([url, libraries]) => {
    const row = [url];

    Object.entries(libraries).forEach(([lib, data]) => {
      const fileName = lib.split('----')[1]; // Get only the file name after ----
      const score = (Math.max(...data.scores) * 100).toFixed(2);
      row.push(`(${fileName}.${data.maxVersion},${score})`);
    });

    csv += row.join(',') + '\n';
  });

  // Save CSV file
  fs.writeFileSync(path.join(__dirname, 'results.csv'), csv, 'utf-8');
};

evaluateAll();
