const { downloadScripts, processChunks, chunkArray } = require('./utils');

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
