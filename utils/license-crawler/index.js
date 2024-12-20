const fs = require('fs');
const { analyzeFile } = require('./utils');

const DATA_DIR_PATH = '../website-crawler/data';

fs.readdir(DATA_DIR_PATH, (err, files) => {
  if (err) {
    console.error('Failed to read directory:', err);
    return;
  }

  files.forEach((file) => {
    analyzeFile(`${DATA_DIR_PATH}/${file}`);
  });
});
