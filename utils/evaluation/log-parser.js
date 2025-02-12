import fs from 'fs';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function parseLogFile(filePath) {
  const logData = fs.readFileSync(filePath, 'utf8');
  const lines = logData.split('\n');

  const results = {};

  lines.forEach((line) => {
    const match = line.match(
      /(loading_and_abstraction|compare|evaluation)-([\w.-]+):\s([\d.]+\w+)/
    );
    if (match) {
      const [, type, url, time] = match;
      if (!results[url]) results[url] = {};
      results[url][type] = time;
    }
  });

  return results;
}

function generateMarkdownTable(results) {
  let mdTable = '| url | loading_and_abstraction | compare | evaluation |\n';
  mdTable += '|-|-|-|-|\n';

  Object.entries(results).forEach(([url, times]) => {
    mdTable += `| ${url} | ${times.loading_and_abstraction || '-'} | ${
      times.compare || '-'
    } | ${times.evaluation || '-'} |\n`;
  });

  return mdTable;
}

const logFilePath = path.join(__dirname, './log.txt');
const parsedResults = parseLogFile(logFilePath);
const markdownTable = generateMarkdownTable(parsedResults);

console.log(markdownTable);
fs.writeFileSync(path.join(__dirname, 'times.md'), markdownTable);
