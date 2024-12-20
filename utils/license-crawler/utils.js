const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'error-log.txt');

function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

async function processChunks(chunks, asyncFunc, asyncFuncFallback) {
  for (const chunk of chunks) {
    await Promise.all(
      chunk.map((url) =>
        asyncFunc(url).catch((err1) => {
          asyncFuncFallback(url).catch((err2) => {
            logError(`Error processing URL "${url}": ${err2.message || err2}`);
            return null;
          });
        })
      )
    );
  }
}

function logError(msg) {
  console.error(msg);
  fs.appendFile(logFilePath, msg + '\n', (fsErr) => {
    if (fsErr) console.error('Failed to write to log file:', fsErr);
  });
}

const fileExtension = '.js';

function getFilesRecursively(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFilesRecursively(fullPath, fileList);
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

// To prevent `ENAMETOOLONG`

const MAX_LENGTH = 230;

function truncateFileName(fileName) {
  const ext = fileName.endsWith('.js') ? '.js' : '';
  const baseName = fileName.slice(0, -ext.length - 1);

  if (baseName.length > MAX_LENGTH - ext.length)
    return baseName.slice(0, MAX_LENGTH - ext.length) + ext;

  return fileName;
}

module.exports = {
  chunkArray,
  processChunks,
  logError,
  getFilesRecursively,
  truncateFileName,
};
