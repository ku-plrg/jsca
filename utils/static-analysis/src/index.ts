import { readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import abstraction from './abstract';
import comparator from './compare';
import extractFunctions from './function-extractor';
import scorer from './scorer';
import logFunctionCode from './utils/function-logger';
import measureTime from './utils/timer';
import { Function, Library } from './utils/types';

type AbstractionType = 'IR' | 'PropsTree' | 'Props' | 'CFG';
const TARGET_ABSTRACTIONS: AbstractionType[] = ['CFG']; // ['IR', 'Props', 'PropsTree'];

const TARGET_CODES: [string, string][] = [
  ['jquery_3.7.1.js', 'jquery_3.7.1_babel-minify.js'],
  ['jquery_3.7.1.js', 'jquery_3.7.1_esbuild.js'],
  ['jquery_3.7.1.js', 'jquery_3.7.1_swc.js'],
  ['jquery_3.7.1.js', 'jquery_3.7.1_terser.js'],
  ['jquery_3.7.1.js', 'jquery_3.7.1_uglifyjs.js'],
];
/* 하나만 돌리고 싶으면 이 친구를 쓰세요 */
/* 
const TARGET_CODES : [string, string][]= [
  ['jquery_3.7.1.js', 'jquery_3.7.1_babel-minify.js'],
]
*/

function callScorer(f1: string, f2: string, abstractionType: AbstractionType) {
  const filePath1 = join(__dirname, '../target/initial', f1);
  const filePath2 = join(__dirname, '../target/initial', f2);

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
    name: f1,
    functions: extractAndLogFunctions(f1, code),
  };
  const lib2: Library = {
    name: f2,
    functions: extractAndLogFunctions(f2, code2),
  };

  switch (abstractionType) {
    case 'CFG':
      return scorer(lib1, lib2, abstraction.cfg, comparator.cfg, 'CFG');
    case 'IR':
      return scorer(lib1, lib2, abstraction.ir, comparator.ir, 'IR');
    case 'Props':
      return scorer(lib1, lib2, abstraction.props, comparator.props, 'Props');
    case 'PropsTree':
      return scorer(
        lib1,
        lib2,
        abstraction.propstree,
        comparator.propstree,
        'Propstree'
      );
  }
}

TARGET_ABSTRACTIONS.forEach((abstractionType) => {
  const scores = TARGET_CODES.map(([p0, p1]) => ({
    target: p1,
    scores: callScorer(p0, p1, abstractionType),
  }));
  const mdContent = `# Scores for ${abstractionType}\n\n|minifier|precision|recall|TP|TN|FP|FN|\n|-|-|-|-|-|-|-|\n${scores
    .map(
      (score) =>
        `|${score.target}|${score.scores.precision}|${score.scores.recall}|${score.scores.truePositives.length}|${score.scores.trueNegatives.length}|${score.scores.falsePositives.length}|${score.scores.falseNegatives.length}|`
    )
    .join('\n')}`;
  writeFileSync(
    resolve(__dirname, `./logs/reports/scores_${abstractionType}.md`),
    mdContent,
    'utf-8'
  );
});
