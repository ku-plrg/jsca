import { readFileSync } from 'fs';
import cfg from './cfg';
import extractFunctions from './function';
import convertHash from './hash';
import measuretime from './time';
import { CFGHash } from './utils/types';

const code1 = readFileSync('./score/jquery_3.7.1.js', 'utf-8');
const code2 = readFileSync('./score/jquery_3.7.1_terser.js', 'utf-8');

function getHash(raw: string): CFGHash[] {
  const functions = measuretime('extractFunctions', () =>
    extractFunctions(raw)
  );
  const cfgs = measuretime('makeCFG', () => cfg(functions.value));
  const hash = measuretime('hashCFG', () => convertHash(cfgs.value));
  return hash.value;
}

const hash1 = getHash(code1);
const hash2 = getHash(code2);

function calculateSimilarity(hash1: CFGHash[], hash2: CFGHash[]) {
  const TP: CFGHash[] = [];
  const FP = [];
  const FN: CFGHash[] = [];
  const TN = [];
  console.log('hash1:', hash1.length);
  console.log('hash2:', hash2.length);
  hash1.forEach((h1) => {
    hash2.forEach((h2) => {
      if (!h1.id) {
        throw new Error('id is undefined');
      }
      const logicallySame = h1.hash === h2.hash;
      const reallysame = h1.id === h2.id;
      if (logicallySame && reallysame) {
        TP.push(h1);
      }
      if (logicallySame && !reallysame) {
        FP.push(h1);
      }
      if (!logicallySame && reallysame) {
        FN.push(h1);
      }
      if (!logicallySame && !reallysame) {
        TN.push(h1);
      }
    });
  });
  console.log('TP:', FN.length);
}

calculateSimilarity(hash1, hash2);
