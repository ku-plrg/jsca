import extractFunctions from './function-extractor';
import abstraction from './abstract';
import { readFileSync } from 'fs';
import logFunctionCode from './utils/function-logger';
import comparator from './compare';
import scorer from './scorer';
import measureTime from './utils/timer';
import { Functions } from './utils/types';

const file1: string = 'jquery_3.7.1_min.js';
const file2: string = 'lodash_4.17.21_min.js';
const code: string = readFileSync(`../target/${file1}`, 'utf-8');
const code2: string = readFileSync(`../target/${file2}`, 'utf-8');

function extractAndLogFunctions(file: string, code: string): Functions {
  return measureTime(`Extracting functions from ${file}`, () => {
    const extractedFunctions: Functions = extractFunctions(code);
    console.log(
      `function_count for ${file}:`,
      Object.keys(extractedFunctions).length
    );
    logFunctionCode(extractedFunctions, file);
    return extractedFunctions;
  });
}

const functions1: Functions = extractAndLogFunctions(file1, code);
const functions2: Functions = extractAndLogFunctions(file2, code2);

scorer(
  functions1,
  functions2,
  abstraction.propstree,
  comparator.functionComparator
);
