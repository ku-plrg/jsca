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

async function processChunks(chunks, asyncFunc) {
  for (const chunk of chunks) {
    await Promise.all(
      chunk.map((url) =>
        asyncFunc(url).catch((err) => {
          const errorMessage = `Error processing URL "${url}": ${
            err.message || err
          }`;
          logError(errorMessage);

          return null;
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
    } else if (fullPath.endsWith(fileExtension)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const MAX_LENGTH = 255;

// To prevent `ENAMETOOLONG`
function truncateFileName(fileName) {
  const fileExtension = path.extname(fileName);
  const baseName = path.basename(fileName, fileExtension);

  if (baseName.length > MAX_LENGTH - fileExtension.length) {
    return baseName.slice(0, MAX_LENGTH - fileExtension.length) + fileExtension;
  }

  return fileName;
}

module.exports = {
  chunkArray,
  processChunks,
  logError,
  getFilesRecursively,
  truncateFileName,
};
