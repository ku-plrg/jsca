import { readFileSync } from 'fs';
import { libraryChecker } from './lib_checker';
const filename1 = './target/jquery_3.7.1.js';
const filename2 = './target/lodash_4.17.21.js';
const lib1 = readFileSync(filename1, 'utf-8');
const lib2 = readFileSync(filename2, 'utf-8');
console.log(libraryChecker(lib1, lib2) * 100);
