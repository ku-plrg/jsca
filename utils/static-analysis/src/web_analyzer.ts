import fs from 'fs';
import path from 'path';
import compareHash from './compare/hash-comparator';
import { getHash } from './lib_checker';
import measureTime from './utils/timer';

const dirPath = path.join(__dirname, '../../crawlers/website/data');
const target: string[] = [
  // 'bankofamerica.com', // lodash 4.17.21
  // 'cnbc.com', // lodash 4.17.21
  // 'ebay.com', // lodash 4.17.21
  // 'hulu.com', // lodash 4.17.21
  // 'discord.com', // lodash 4.17.19
  // 'espn.com', // lodash 4.15.0
  // 'marriott.com', // lodash 4.17.21
  // 'mlb.com', // lodash 4.17.20
  // 'netflix.com', // lodash 4.17.21
  // 'nih.gov', // lodash 4.17.21
  // 'roblox.com', // lodash 4.17.21
  // 'speedtest.net', // lodash 4.17.21
  'gobstones.github.io',
];
const libs = [
  'tween' /*'lodash_4.15.0_min', 'lodash_4.17.19_min', 'lodash_4.17.21_min'*/,
];

function getDirectDirs(dirPath: string) {
  return fs
    .readdirSync(dirPath)
    .filter((file) => fs.statSync(path.join(dirPath, file)).isDirectory());
}

function getAllFiles(dirPath: string, basePath = dirPath): string[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  let result: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.relative(basePath, fullPath);

    if (entry.isFile()) {
      result.push(relativePath);
    } else if (entry.isDirectory()) {
      result = result.concat(getAllFiles(fullPath, basePath));
    }
  }

  return result;
}

const MAX_LENGTH = 25;
const FILE_TEMPLATE = (file: string, dir: string) =>
  `<a href='file://${path.join(dirPath, dir, file)}'>${
    file.length >= MAX_LENGTH ? '...' : ''
  }${file.slice(-1 * MAX_LENGTH)}</a>`;

const SCORE_TEMPLATE = (score: number) => `${(score * 100).toFixed(2)}%`;

function main() {
  let md = '';

  const libHashes = libs.map((lib) => {
    const libPath = path.join(__dirname, `./target/initial/_score/${lib}.js`);
    const rawLib = fs.readFileSync(libPath, 'utf-8');
    return getHash(rawLib, 'library').hash;
  });

  getDirectDirs(dirPath)
    .filter((dir) => target.includes(dir))
    .forEach((dir) => {
      md += `## ${dir}\n`;
      let table = `| File | ${libs.join(
        '|'
      )} | Size | Parse-T | Abs-T | Comp-T |\n|${Array(libs.length + 5)
        .fill('-')
        .join('|')}|\n`;
      const files = getAllFiles(path.join(dirPath, dir));
      const fileContents = files.map((file) => {
        const filePath = path.join(dirPath, dir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const stat = fs.statSync(filePath);
        return { filename: file, content, size: stat.size };
      });
      const matches: { lib: string; code: string; score: number }[] = [];
      let totalAbsT = 0,
        totalCompT = 0,
        totalParseT = 0;
      const { ms } = measureTime(`compare ${dir}`, () => {
        fileContents.forEach(({ filename, content, size }) => {
          try {
            table += `| ${FILE_TEMPLATE(filename, dir)} | `;
            const {
              hash: fileHash,
              parseMS,
              abstMS,
            } = getHash(content, 'code');
            totalParseT += parseMS;
            totalAbsT += abstMS;
            const { ms: compMs } = measureTime(`compare ${filename}`, () =>
              libHashes.forEach((libHash, lbiIdx) => {
                const score = compareHash(libHash, fileHash);
                table += `${SCORE_TEMPLATE(score)} | `;
                if (score > 0.5)
                  matches.push({
                    lib: libs[lbiIdx],
                    code: filename,
                    score: score,
                  });
              })
            );
            totalCompT += compMs;
            table += ` ${size}byte | ${parseMS}ms | ${abstMS}ms | ${compMs}ms |\n`;
          } catch (e) {
            console.log(e);
            table += '\n';
          }
        });
      });

      md += `Time: ${ms}ms\n`;
      md += `|Parse Time|Abstraction Time|Compare Time|\n|-|-|-|\n|${totalParseT}ms|${totalAbsT}ms|${totalCompT}ms|\n`;
      const matchTable = `| Library | File | Similarity |\n|-|-|-|\n${matches
        .sort((a, b) => b.score - a.score)
        .map(
          ({ lib, code, score }) =>
            `| ${lib} | ${FILE_TEMPLATE(code, dir)} | ${SCORE_TEMPLATE(
              score
            )} | `
        )
        .join('\n')}`;
      md += '### Matches\n' + matchTable + '\n\n';
      md += '### All Scores\n' + table + '\n\n';
    });

  fs.writeFileSync('./scores2.md', md);
}

main();
