import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';
import { cfgToDot, generatePNG } from './abstract/cfg';
import logCFG from './utils/cfg-logger';
import LogIR from './utils/ir-logger';
import measureTime from './utils/timer';
import { AbsFunction, Function, Library } from './utils/types';

async function FunctionScorer<T extends AbsFunction>(
  lib1: Library,
  lib2: Library,
  abstraction: (f: Function[]) => T[],
  comparison: (f1: T, f2: T) => boolean,
  logFileName: string
) {
  const absfuncs1 = measureTime(`make abstraction from ${lib1.name}`, () =>
    abstraction(lib1.functions)
  );
  const absfuncs2 = measureTime(`make abstraction from ${lib2.name}`, () =>
    abstraction(lib2.functions)
  );
  if (absfuncs1[0].type === 'ir') {
    // Log IR
    LogIR(absfuncs1, lib1);
    LogIR(absfuncs2, lib2);
  }

  if (absfuncs1[0].type === 'cfg') {
    console.log('compare cfg', lib1.name, lib2.name);
    logCFG(absfuncs1, lib1);
    logCFG(absfuncs2, lib2);

    const dirname1 = `src/logs/cfg_png/${lib1.name}`;
    if (!existsSync(dirname1)) mkdirSync(dirname1, { recursive: true });
    const dirname2 = `src/logs/cfg_png/${lib2.name}`;
    if (!existsSync(dirname2)) mkdirSync(dirname2, { recursive: true });
    await processInChunks(absfuncs1, 50, async (f) => {
      const filename = `${dirname1}/${f.id}`;
      const dot = cfgToDot((f as any).nodes);
      await writeFile(`${filename}.dot`, dot, 'utf8');
      await generatePNG(dot, filename);
    });
    await processInChunks(absfuncs2, 50, async (f) => {
      const filename = `${dirname2}/${f.id}`;
      const dot = cfgToDot((f as any).nodes);
      await writeFile(`${filename}.dot`, dot, 'utf8');
      await generatePNG(dot, filename);
    });
    // for (const f of absfuncs1) {
    //   const filename = `${dirname1}/${f.id}`;
    //   const dot = cfgToDot((f as any).nodes);
    //   await writeFile(`${filename}.dot`, dot, 'utf8');
    //   await generatePNG(dot, filename);
    // }
    // for (const f of absfuncs2) {
    //   const filename = `${dirname2}/${f.id}`;
    //   const dot = cfgToDot((f as any).nodes);
    //   await writeFile(`${filename}.dot`, dot, 'utf8');
    //   await generatePNG(dot, filename);
    // }
  }

  //createDotGraph(propstree, file1);
  //createDotGraph(propstree2, file2);
  function compare(pt1: T[], pt2: T[]) {
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
    const uniquefuncs: { f1Name: string; id: string }[] = [];

    pt1.forEach((f1) => {
      let uniqueMatch = true;
      pt2.forEach((f2) => {
        const logicallySame = comparison(f1, f2);
        const reallySame = f1.id === f2.id;

        if (logicallySame && reallySame)
          truePositives.push({ f1Name: f1.name, f2Name: f2.name, id: f1.id });
        if (logicallySame && !reallySame) {
          falsePositives.push({
            f1Name: f1.name,
            f2Name: f2.name,
            id1: f1.id,
            id2: f2.id,
          });
          uniqueMatch = false;
        }
        if (!logicallySame && reallySame) {
          falseNegatives.push({
            f1Name: f1.name,
            f2Name: f2.name,
            id: f1.id,
          });
          uniqueMatch = false;
        }
        if (!logicallySame && !reallySame)
          trueNegatives.push({
            f1Name: f1.name,
            f2Name: f2.name,
            id1: f1.id,
            id2: f2.id,
          });
      });
      if (uniqueMatch) {
        uniquefuncs.push({ f1Name: f1.name, id: f1.id });
      }
    });
    return {
      truePositives,
      trueNegatives,
      falsePositives,
      falseNegatives,
      uniquefuncs,
    };
  }

  function getScores(pt1: T[], pt2: T[]) {
    const {
      truePositives,
      trueNegatives,
      falsePositives,
      falseNegatives,
      uniquefuncs,
    } = measureTime('compare', () => compare(pt1, pt2));
    const numTP = truePositives.length;
    const numFP = falsePositives.length;
    const numFN = falseNegatives.length;

    const precisionString = `${numTP} / (${numTP} + ${numFP})`;
    const precision = numTP / (numTP + numFP);

    const recallString = `${numTP} / (${numTP} + ${numFN})`;
    const recall = numTP / (numTP + numFN);
    const uniques = uniquefuncs.length;

    return {
      truePositives,
      trueNegatives,
      falsePositives,
      falseNegatives,
      precision,
      precisionString,
      recall,
      recallString,
      uniquefuncs,
      uniques,
    };
  }

  function writeReport(
    score: ReturnType<typeof getScores>,
    l1: string,
    l2: string,
    additionalLog: AbsFunction['type']
  ) {
    const LOG_DIR = '/utils/static-analysis/src/logs/functions';
    const IR_DIR = '/utils/static-analysis/src/logs/ir';
    const CFG_DIR = '/utils/static-analysis/src/logs/cfg';
    const CFG_PNG_DIR = '/utils/static-analysis/src/logs/cfg_png';
    const TEMPLATE = (id: string, name: string, loc: string) =>
      `[${id}(${name})](${LOG_DIR}/${loc}/${name}.js)`;
    const IRTEMPLATE = (id: string, name: string, loc: string) =>
      `[${id}(${name})](${IR_DIR}/${loc}/ir_log_${id}.txt)`;
    const CFGTEMPLATE = (id: string, name: string, loc: string) =>
      `[${id}(${name})](${CFG_DIR}/${loc}/cfg_log_${id}.txt) ![CFG](${CFG_PNG_DIR}/${loc}/${id}.png)`;
    const additionalTemplate =
      additionalLog === 'ir'
        ? IRTEMPLATE
        : additionalLog === 'cfg'
        ? CFGTEMPLATE
        : () => '';

    let mdContent = '';
    mdContent += `## Scores\n|Precision|Recall|TP|TN|FP|FN|\n|---|---|---|---|---|---|\n|${score.precision}|${score.recall}|${score.truePositives.length}|${score.trueNegatives.length}|${score.falsePositives.length}|${score.falseNegatives.length}|\n\n`;

    mdContent += `## False Negatives: ${
      score.falseNegatives.length
    }\n|f1|f2|\n|--|--|\n${score.falseNegatives
      .slice(0, 50)
      .map(
        (fn) =>
          `|${TEMPLATE(fn.id, fn.f1Name, l1)}|${TEMPLATE(
            fn.id,
            fn.f2Name,
            l2
          )}|\n|${additionalTemplate(
            fn.id,
            fn.f1Name,
            l1
          )}|${additionalTemplate(fn.id, fn.f2Name, l2)}|\n|`
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
          )}|\n|${additionalTemplate(
            fn.id1,
            fn.f1Name,
            l1
          )}|${additionalTemplate(fn.id2, fn.f2Name, l2)}|\n|`
      )
      .join('\n')}\n`;
    mdContent += `## Unique Functions: ${
      score.uniques
    }\n|f1|\n|--|\n${score.uniquefuncs
      .slice(0, 20)
      .map((fn) => `|${TEMPLATE(fn.id, fn.f1Name, l1)}|`)
      .join('\n')}\n`;
    const fileDir = './logs/reports';
    const filePath = path.resolve(
      __dirname,
      fileDir,
      `${logFileName}-${l1}-${l2}.md`
    );
    mkdirSync(path.resolve(__dirname, fileDir), { recursive: true });
    writeFileSync(filePath, mdContent, 'utf-8');
  }
  const scores1 = getScores(absfuncs1, absfuncs2);
  // const scores2 = getScores(propstree2, propstree1);

  writeReport(scores1, lib1.name, lib2.name, absfuncs1[0].type);
  // writeReport(scores2, lib2.name, lib1.name);
  console.log('finish compare', lib1.name, lib2.name);
  return scores1;
}

async function processInChunks<T>(
  items: T[],
  chunkSize: number,
  asyncFn: (item: T) => Promise<void>
): Promise<void> {
  function chunkArray(array: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  const chunks = chunkArray(items, chunkSize);

  for (const chunk of chunks) {
    await Promise.all(chunk.map(asyncFn));
  }
}

export default FunctionScorer;
