import { chunkArray, downloadScripts, processChunks } from './utils.js';

const TARGET_URLS = [
  /* put urls here */
  'https://www.hbomax.com',
];

const CHUNK_SIZE = 2;

processChunks(
  chunkArray(TARGET_URLS, CHUNK_SIZE),
  downloadScripts,
  (targetUrl) => downloadScripts(targetUrl, false)
);
