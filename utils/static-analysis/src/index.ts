import { readFileSync } from 'fs';
import { join } from 'path';
import abstraction from './abstract';
import comparator from './compare';
import extractFunctions from './function-extractor';
import scorer from './scorer';
import logFunctionCode from './utils/function-logger';
import measureTime from './utils/timer';
import { Function, Library, Props, Propstree } from './utils/types';
import propstree from './abstract/propstree';

const file1: string = 'jquery_3.7.1_min.js';
const file2: string = 'jquery_3.7.1_min_terser.js';

const filePath1 = join(__dirname, '../target', file1);
const filePath2 = join(__dirname, '../target', file2);

const code: string = readFileSync(filePath1, 'utf-8');
const code2: string = readFileSync(filePath2, 'utf-8');

function extractAndLogFunctions(file: string, code: string): Function[] {
  return measureTime(`Extracting functions from ${file}`, () => {
    const extractedFunctions: Function[] = extractFunctions(code);
    console.log(
      `function_count for ${file}:`,
      Object.keys(extractedFunctions).length
    );
    logFunctionCode(extractedFunctions, file);
    return extractedFunctions;
  });
}
const lib1: Library = {
  name: 'file1',
  functions: extractAndLogFunctions(file1, code),
};
const lib2: Library = {
  name: 'file2',
  functions: extractAndLogFunctions(file2, code2),
};

scorer<Propstree>(
  lib1,
  lib2,
  abstraction.propstree,
  comparator.propstree,
  'Propstree'
);
scorer<Props>(lib1, lib2, abstraction.props, comparator.props, 'Props');
