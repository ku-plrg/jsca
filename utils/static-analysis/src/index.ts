import { readFileSync, writeFileSync } from 'fs';
import { libraryChecker } from './lib_checker';
import measureTime from './utils/timer';
import { CFGHash } from './utils/types';

const target = [
  'jquery_3.7.1',
  'lodash_4.17.21',
  'axios_1.7.8',
  'd3_7.9.0',
  'react_18.3.0',
  'underscore_1.13.7',
  'vue_3.5.13',
  'angular_1.8.3',
  'backbone_1.6.0',
  'ember_6.1.0',
];

const target2 = [
  'jquery_3.7.1_terser',
  'lodash_4.17.21_terser',
  'axios_1.7.8_terser',
  'd3_7.9.0_terser',
  'react_18.3.0_terser',
  'underscore_1.13.7_terser',
  'vue_3.5.13_terser',
  'angular_1.8.3_terser',
  'backbone_1.6.0_terser',
  'ember_6.1.0_terser',
];

interface Result {
  Library1: string;
  Library2: string;
  Similarity: string;
}

const results: Result[] = [];
const csvRows: string[] = [];

csvRows.push(['', ...target].join(','));

measureTime('libraryChecker', () => {
  const hashCache: Record<string, CFGHash[]> = {};

  target.forEach((lib) => {
    const file1 = readFileSync(`./target/initial/_score/${lib}.js`, 'utf-8');
    const row: string[] = [lib];
    target2.forEach((lib2) => {
      const file2 = readFileSync(`./target/initial/_score/${lib2}.js`, 'utf-8');
      const similarity =
        (
          libraryChecker(
            file1,
            lib,
            file2,
            hashCache,
            (hash: CFGHash[]) => (hashCache[lib] = hash)
          ) * 100
        ).toFixed(2) + '%';
      row.push(similarity);
      results.push({
        Library1: lib,
        Library2: lib2,
        Similarity: similarity,
      });
    });
    csvRows.push(row.join(','));
  });
});

writeFileSync('similarity_matrix.csv', csvRows.join('\n'));

console.table(results);
