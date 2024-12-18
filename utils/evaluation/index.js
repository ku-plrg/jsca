import puppeteer from 'puppeteer';
import { default as jsca } from './scripts/jsca.js';
import { default as ldc } from './scripts/ldc.js';
import { default as ptdetector } from './scripts/PTdetector.js';
import { getFileStream } from './utils.js';

const callDetectOnBrowser = (targetUrl, detectFunc) =>
  new Promise(async (res) => {
    const browser = await puppeteer.launch();
    try {
      let completed = false;
      const page = await browser.newPage();
      await page.goto(targetUrl, {
        waitUntil: 'networkidle2',
        timeout: 120000,
      });

      page.on('console', (msg) => {
        const msgText = msg.text();
        if (msgText.startsWith('[') && msgText.endsWith(']')) {
          completed = true;
          res(JSON.parse(msgText));
        }
      });

      await page.evaluate((funcString) => {
        const detect = eval(`(${funcString})`);
        detect();
      }, detectFunc);

      await new Promise((res2) => setTimeout(res2, 5000));
      if (!completed) res([]);
    } catch (error) {
      console.error('error:', error);
      res([]);
    } finally {
      await browser.close();
    }
  });

const targetUrls = [
  'https://akc.org',
  'https://aliexpress.com',
  'https://amazon.com',
  'https://amazon.in',
  'https://amctheatres.com',
  'https://apartments.com',
  'https://apple.com',
  'https://as.com',
  'https://att.com',
  'https://bankofamerica.com',
  'https://bbc.com',
  'https://bedbathandbeyond.com',
  'https://bestbuy.com',
  'https://bing.com',
  'https://booking.com',
  'https://ca.gov',
  'https://cambridge.org',
  'https://canva.com',
  'https://capitalone.com',
  'https://carmax.com',
  'https://cbssports.com',
  'https://cdc.gov',
  'https://chase.com',
  'https://chatgpt.com/',
  'https://claude.ai/new',
  'https://cnbc.com',
  'https://cnn.com',
  'https://craigslist.org',
  'https://dailymail.co.uk',
  'https://dailymotion.com',
  'https://dickssportinggoods.com',
  'https://discord.com',
  'https://disney.com',
  'https://disneyplus.com',
  'https://doordash.com',
  'https://duckduckgo.com',
  'https://ebay.com',
  'https://ecosia.org',
  'https://espn.com',
  'https://etsy.com',
  'https://facebook.com',
  'https://fandango.com',
  'https://fedex.com',
  'https://flipkart.com',
  'https://forbes.com',
  'https://ford.com',
  'https://foxnews.com',
  'https://foxsports.com',
  'https://giphy.com',
  'https://github.com',
  'https://google.com',
  'https://hbomax.com',
  'https://hulu.com',
  'https://ikea.com',
  'https://imdb.com',
  'https://indeed.com',
  'https://instagram.com',
  'https://instructure.com',
  'https://irs.gov',
  'https://istockphoto.com',
  'https://kayak.com',
  'https://kohls.com',
  'https://line.me',
  'https://linkedin.com',
  'https://live.com',
  'https://macys.com',
  'https://marca.com',
  'https://marketwatch.com',
  'https://marriott.com',
  'https://max.com',
  'https://mayoclinic.org',
  'https://medlineplus.gov',
  'https://merriam-webster.com',
  'https://microsoft.com',
  'https://mlb.com',
  'https://msn.com',
  'https://naver.com/',
  'https://ncaa.com',
  'https://netflix.com',
  'https://nfl.com',
  'https://nhl.com',
  'https://nih.gov',
  'https://noaa.gov',
  'https://npr.org',
  'https://nps.gov',
  'https://ny.gov',
  'https://nypost.com',
  'https://nytimes.com',
  'https://office.com',
  'https://onlyfans.com',
  'https://openai.com',
  'https://outlook.com',
  'https://ozon.ru',
  'https://paypal.com',
  'https://people.com',
  'https://pinterest.com',
  'https://pornhub.com',
  'https://primevideo.com',
  'https://quora.com',
  'https://rakuten.co.jp',
  'https://reddit.com',
  'https://roblox.com',
  'https://rottentomatoes.com',
  'https://speedtest.net',
  'https://spotify.com',
  'https://state.gov',
  'https://study.com',
  'https://taboola.com',
  'https://telegram.org',
  'https://temu.com',
  'https://theguardian.com',
  'https://themoviedb.org',
  'https://toyota.com',
  'https://tradingview.com',
  'https://twitch.tv',
  'https://uol.com.br',
  'https://ups.com',
  'https://usatoday.com',
  'https://usps.com',
  'https://walgreens.com',
  'https://walmart.com',
  'https://washingtonpost.com',
  'https://weather.com',
  'https://whatsapp.com',
  'https://wikipedia.org',
  'https://wildberries.ru',
  'https://x.com',
  'https://xbox.com',
  'https://xnxx.com',
  'https://xvideos.com',
  'https://ya.ru',
  'https://yahoo.co.jp',
  'https://yahoo.com',
  'https://youtube.com',
  'https://zillow.com',
  'https://zoom.us',
];

const detectScripts = [
  { name: 'ldc', func: ldc.toString() },
  { name: 'jsca', func: jsca.toString() },
  { name: 'ptdetector', func: ptdetector.toString() },
];

const evaluate = async () => {
  const { writeHeaders, appendCsvRow } = getFileStream(
    'evaluation.csv',
    'target,ldc,ptdetector,jsca\n'
  );
  writeHeaders();
  for (const targetUrl of targetUrls) {
    console.log('targetUrl:', targetUrl);
    const results = {};
    for (const detectScript of detectScripts) {
      try {
        const result = await callDetectOnBrowser(targetUrl, detectScript.func);
        results[detectScript.name] = result;
      } catch (e) {
        console.log('error:', e);
        results[detectScript.name] = [];
      }
    }
    appendCsvRow([targetUrl, results.ldc, results.ptdetector, results.jsca]);
  }
};

evaluate();
