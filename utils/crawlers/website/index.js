import { getTrancoData } from './constants.js';
import { chunkArray, downloadScripts, processChunks } from './utils.js';

const CHUNK_SIZE = 2;

const TARGET = getTrancoData();
console.log(TARGET);

processChunks(chunkArray(TARGET, CHUNK_SIZE), downloadScripts, (targetUrl) =>
  downloadScripts(targetUrl, false)
);
