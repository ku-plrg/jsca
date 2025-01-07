import { mkdirSync, writeFileSync } from 'fs';
import path from 'path';
import measureTime from './utils/timer';
import { AbsFunction, Function, Library } from './utils/types';

function FunctionScorer<T extends AbsFunction>(
  lib1: Library,
  lib2: Library,
  abstraction: (f: Function[]) => T[],
  comparison: (f1: T, f2: T) => boolean,
  logFileName: string
): void {
  const proptree1 = measureTime('makePropstree from file1', () =>
    abstraction(lib1.functions)
  );
  const proptree2 = measureTime('makePropstree from file2', () =>
    abstraction(lib2.functions)
  );

  //createDotGraph(proptree, file1);
  //createDotGraph(proptree2, file2);
  function getScores(pt1: T[], pt2: T[]) {
    const truePositives: { f1Name: string; f2Name: string; id: string }[] = [];
    const trueNegatives: {
      f1Name: string;
      f2Name: string;
      id1: string;
      id2: string;
    }[] = [];
    const falsePositives: {
      f1Name: string;
      f2Name: string;
      id1: string;
      id2: string;
    }[] = [];
    const falseNegatives: {
      f1Name: string;
      f2Name: string;
      id: string;
    }[] = [];

    pt1.forEach((f1) => {
      pt2.forEach((f2) => {
        const logicallySame = comparison(f1, f2);
        const reallySame = f1.id === f2.id;
        if (logicallySame && reallySame)
          truePositives.push({ f1Name: f1.name, f2Name: f2.name, id: f1.id });
        else if (logicallySame)
          falsePositives.push({
            f1Name: f1.name,
            f2Name: f2.name,
            id1: f1.id,
            id2: f2.id,
          });
        if (reallySame && !logicallySame)
          falseNegatives.push({
            f1Name: f1.name,
            f2Name: f2.name,
            id: f1.id,
          });
        else if (!logicallySame)
          trueNegatives.push({
            f1Name: f1.name,
            f2Name: f2.name,
            id1: f1.id,
            id2: f2.id,
          });
      });
    });

    const numTP = truePositives.length;
    const numFP = falsePositives.length;
    const numFN = falseNegatives.length;

    const precisionString = `${numTP} / (${numTP} + ${numFP})`;
    const precision = numTP / (numTP + numFP);

    const recallString = `${numTP} / (${numTP} + ${numFN})`;
    const recall = numTP / (numTP + numFN);

    return {
      truePositives,
      trueNegatives,
      falsePositives,
      falseNegatives,
      precision,
      precisionString,
      recall,
      recallString,
    };
  }

  function writeReport(
    score: ReturnType<typeof getScores>,
    l1: string,
    l2: string
  ) {
    const LOG_DIR = '/utils/static-analysis/src/logs/functions';
    const TEMPLATE = (id: string, name: string, loc: string) =>
      `[${id}(${name})](${LOG_DIR}/${loc}/${name}.js)`;
    let mdContent = '';
    mdContent += `## Scores\n|Recall|Precision|\n|---|---|\n|${score.recall}|${score.precision}|\n|${score.recallString}|${score.precisionString}|\n\n`;
    mdContent += `|TP|TN|FP|FN|\n|---|---|---|---|\n|${score.truePositives.length}|${score.trueNegatives.length}|${score.falsePositives.length}|${score.falseNegatives.length}|\n`;

    mdContent += `## False Negatives: ${
      score.falseNegatives.length
    }\n|f1|f2|\n|--|--|\n${score.falseNegatives
      .slice(0, 20)
      .map(
        (fn) =>
          `|${TEMPLATE(fn.id, fn.f1Name, l1)}|${TEMPLATE(
            fn.id,
            fn.f2Name,
            l2
          )}|`
      )
      .join('\n')}\n`;

    mdContent += `## False Positives: ${
      score.falsePositives.length
    }\n|f1|f2|\n|--|--|\n${score.falsePositives
      .slice(0, 20)
      .map(
        (fn) =>
          `|${TEMPLATE(fn.id1, fn.f1Name, l1)}|${TEMPLATE(
            fn.id2,
            fn.f2Name,
            l2
          )}|`
      )
      .join('\n')}\n`;

    const fileDir = './src/logs/reports';
    const filePath = path.resolve(fileDir, `${logFileName}-${l1}-${l2}.md`);
    mkdirSync(fileDir, { recursive: true });
    writeFileSync(filePath, mdContent, 'utf-8');
  }
  const scores1 = getScores(proptree1, proptree2);
  const scores2 = getScores(proptree2, proptree1);

  writeReport(scores1, 'jquery_3.7.1_min.js', 'jquery_3.7.1_min_terser.js');
  writeReport(scores2, 'jquery_3.7.1_min_terser.js', 'jquery_3.7.1_min.js');
}

export default FunctionScorer;
