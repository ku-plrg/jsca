import { chunkArray, downloadScripts, processChunks } from './utils.js';

const TARGET_URLS = [
  /* put urls here */
  'bankofamerica.com', // lodash 4.17.21
  'cnbc.com', // lodash 4.17.21
  'ebay.com', // lodash 4.17.21
  'hulu.com', // lodash 4.17.21
  'discord.com', // lodash 4.17.19
  'espn.com', // lodash 4.15.0
  'marriott.com', // lodash 4.17.21
  'mlb.com', // lodash 4.17.20
  'netflix.com', // lodash 4.17.21
  'nih.gov', // lodash 4.17.21
  'roblox.com', // lodash 4.17.21
  'speedtest.net', // lodash 4.17.21
];

const CHUNK_SIZE = 2;

processChunks(
  chunkArray(TARGET_URLS, CHUNK_SIZE),
  downloadScripts,
  (targetUrl) => downloadScripts(targetUrl, false)
);
