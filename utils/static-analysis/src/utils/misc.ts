import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import * as escodegen from 'escodegen';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { sha256 } from 'js-sha256';
import { resolve } from 'path';
import extractFunctions from '../function-extractor';
import logFunctionCode from './function-logger';
import measureTime from './timer';
import {
  AbsFunction,
  AbsType,
  ComparisonResult,
  Function,
  Library,
  RawFunction,
} from './types';

export const getTotalScores = <T extends AbsFunction>(
  results: ComparisonResult<T>[]
) => {
  const totalScore = results.reduce(
    (acc, { score: curScore, times: curTime }) => {
      return {
        tp: acc.tp + curScore.tp.length,
        tn: acc.tn + curScore.tn.length,
        fp: acc.fp + curScore.fp.length,
        fn: acc.fn + curScore.fn.length,
        absT: acc.absT + curTime.abs2,
        compT: acc.compT + curTime.compare,
      };
    },
    { tp: 0, tn: 0, fp: 0, fn: 0, absT: 0, compT: 0 }
  );
  const recall = totalScore.tp / (totalScore.tp + totalScore.fn);
  const precision = totalScore.tp / (totalScore.tp + totalScore.fp);
  const meanAbsT = totalScore.absT / results.length;
  const meanCompT = totalScore.compT / results.length;
  return {
    ...totalScore,
    precision,
    recall,
    meanAbsT,
    meanCompT,
  };
};

export const getMdContent = <T extends AbsFunction>(
  absType: string,
  scores: { target: string; scores: ComparisonResult<T> }[]
) => {
  const totalScore = getTotalScores(scores.map((s) => s.scores));

  const mdContent = `# Scores for ${absType}\n\n|minifier|abs-time|comp-time|precision|recall|TP|TN|FP|FN|\n|-|-|-|-|-|-|-|-|-|\n${scores
    .map(
      ({ target, scores: { score, times } }) =>
        `|${target}|${times.abs2}|${times.compare}|${score.precision}|${score.recall}|${score.tp.length}|${score.tn.length}|${score.fp.length}|${score.fn.length}|`
    )
    .join('\n')}\n|Total|${totalScore.absT}|${totalScore.compT}|${
    totalScore.precision
  }|${totalScore.recall}|${totalScore.tp}|${totalScore.tn}|${totalScore.fp}|${
    totalScore.fn
  }|\n||${totalScore.meanAbsT}|${totalScore.meanCompT}||||||\n`;

  return mdContent;
};

function extractAndLogFunctions(file: string, code: string): Function[] {
  return measureTime(`Extracting functions from ${file}`, () => {
    const extractedFunctions: Function[] = extractFunctions(code);
    console.log(
      `function_count for ${file}:`,
      Object.keys(extractedFunctions).length
    );
    logFunctionCode(extractedFunctions, file);
    return extractedFunctions;
  }).value;
}

const MAX_DEPTH = 3;
function jsonToFunctions(file: string, rawFile: any): Function[] {
  const funcJSON = JSON.parse(rawFile);
  const functions: Function[] = [];

  funcJSON.forEach((func: { name: string; body: string }) => {
    const { name, body } = func;
    let recorded = false;
    try {
      if (body.includes('[native code]')) return;
      if (name.split('.').length > MAX_DEPTH) return;
      if (name.includes('prototype')) return;
      function recordFunction(node: acorn.Function) {
        functions.push({
          id: sha256(escodegen.generate(node.body)),
          name: name,
          params: node.params,
          body: node.body,
        });
        recorded = true;
      }
      const ast = acorn.parse(`(${body})`, {
        ecmaVersion: 'latest',
        sourceType: 'script',
        locations: true,
        ranges: true,
        allowReserved: true,
      });
      walk.simple(ast, {
        FunctionDeclaration(node) {
          if (!recorded) recordFunction(node);
        },
        FunctionExpression(node) {
          if (!recorded) recordFunction(node);
        },
      });
    } catch (error) {
      console.log('Error:', error);
      console.log('Error Function:', name);
    }
  });
  console.log('function length: ', functions.length);
  logFunctionCode(functions, file);
  return functions;
}

export const getFunctions = (rawFunc: RawFunction) => {
  const rawFile = readFileSync(rawFunc.path, 'utf-8');
  switch (rawFunc.type) {
    case 'js':
      return extractAndLogFunctions(rawFunc.name, rawFile);
    case 'json':
      return jsonToFunctions(rawFunc.name, rawFile);
  }
};

export const writeReport = <T extends AbsFunction>(
  scores: { target: string; scores: ComparisonResult<T> }[],
  absType: AbsType
) => {
  const mdContent = getMdContent(absType, scores);
  mkdirSync(resolve(__dirname, '../logs/reports'), { recursive: true });
  const filePath = resolve(__dirname, `../logs/reports/scores_${absType}.md`);
  writeFileSync(filePath, mdContent, 'utf-8');
  console.log(`Scores for ${absType} saved at `, filePath);
};

export const rawFunctionToLibrary = (f: RawFunction): Library => {
  return {
    name: f.name,
    functions: getFunctions(f),
  };
};
