import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { analyzeFile } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DATA_DIR_PATH = path.join(__dirname, '../website/data');

fs.readdir(DATA_DIR_PATH, (err, files) => {
  if (err) {
    console.error('Failed to read directory:', err);
    return;
  }

  files.forEach((file) => {
    analyzeFile(`${DATA_DIR_PATH}/${file}`);
  });
});
