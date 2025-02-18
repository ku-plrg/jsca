import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';
import { cfgToDot, generatePNG } from '../abstract/cfg';
import logCFG from '../utils/cfg-logger';
import LogIR from '../utils/prev-works/ir-logger';
import measureTime from '../utils/timer';
import { AbsFunction, Function, Library } from '../utils/types';
import {
  CompareContext,
  CompareType,
  ComparisonResult,
  UniqueFuncItem,
} from '../utils/types/score';

const GENERATE_PNG = true;

async function log(funcs: { func: AbsFunction[]; lib: Library }[]) {
  if (funcs[0].func[0].type === 'ir') {
    funcs.forEach(({ func, lib }) => LogIR(func, lib));
  }
  if (funcs[0].func[0].type === 'cfg') {
    for (const f of funcs) {
      const { func, lib } = f;
      logCFG(func, lib);
      const dirname = `src/logs/cfg_png/${lib.name}`;
      if (!existsSync(dirname)) mkdirSync(dirname, { recursive: true });
      if (GENERATE_PNG) {
        await processInChunks(func, 50, async (f) => {
          const filename = `${dirname}/${f.id}`;
          const dot = cfgToDot((f as any).nodes);
          try {
            await writeFile(`${filename}.dot`, dot, 'utf8');
            await generatePNG(dot, filename);
          } catch (e: any) {
            console.error(e.message);
          }
        });
      }
    }
  }
}

function filterShortFunctions<T extends AbsFunction>(f: T[]) {
  return f;
  // return f.filter(
  //   (p) =>
  //     !(
  //       p.type === 'cfg' &&
  //       Array.from(p.nodes.values()).reduce((acc, n) => {
  //         if (n.type === 'block') return acc + (n.sequences?.length ?? 1);
  //         return acc + 1;
  //       }, 0) < 5
  //     )
  // );
}

async function FunctionScorer<T extends AbsFunction>(
  lib1: Library,
  lib2: Library,
  abstraction: (f: Function[]) => T[],
  comparison: (f1: T, f2: T) => boolean,
  compareType: CompareType,
  logFileName: string
): Promise<ComparisonResult<T>> {
  const { value: absfuncs1, ms: t1 } = measureTime(
    `make abstraction from ${lib1.name}`,
    () => abstraction(lib1.functions)
  );
  const { value: absfuncs2, ms: t2 } = measureTime(
    `make abstraction from ${lib2.name}`,
    () => abstraction(lib2.functions)
  );

  await log([
    { func: absfuncs1, lib: lib1 },
    { func: absfuncs2, lib: lib2 },
  ]);

  const { getCompareTargets } = compareContext<T>(compareType);

  function compare(pt1: T[], pt2: T[]) {
    const tp: [T, T][] = [];
    const tn: [T, T][] = [];
    const fp: [T, T][] = [];
    const fn: [T, T][] = [];
    const uniquefuncs: UniqueFuncItem[] = [];

    filterShortFunctions(pt1).forEach((f1) => {
      let uniqueMatch = true;
      const compareTargets = getCompareTargets(f1, filterShortFunctions(pt2));
      compareTargets.forEach((f2) => {
        const logicallySame = comparison(f1, f2);
        const reallySame = f1.id === f2.id;

        if (logicallySame && reallySame) tp.push([f1, f2]);
        if (logicallySame && !reallySame) {
          fp.push([f1, f2]);
          uniqueMatch = false;
        }
        if (!logicallySame && reallySame) {
          fn.push([f1, f2]);
          uniqueMatch = false;
        }
        if (!logicallySame && !reallySame) tn.push([f1, f2]);
      });
      if (uniqueMatch) {
        uniquefuncs.push({ fName: f1.name, id: f1.id });
      }
    });
    return {
      tp,
      tn,
      fp,
      fn,
      uniquefuncs,
    };
  }

  function toPercent(num: number) {
    return parseFloat((num * 100).toFixed(3));
  }
  function getScores(pt1: T[], pt2: T[]): ComparisonResult<T> {
    const {
      value: { tp, tn, fp, fn, uniquefuncs },
      ms,
    } = measureTime('compare', () => compare(pt1, pt2));
    const numTP = tp.length;
    const numFP = fp.length;
    const numFN = fn.length;

    const precision = toPercent(numTP / (numTP + numFP));
    const recall = toPercent(numTP / (numTP + numFN));

    return {
      score: {
        tp,
        tn,
        fp,
        fn,
        precision,
        recall,
        uniquefuncs,
      },
      times: {
        abs1: t1,
        abs2: t2,
        compare: ms,
      },
    };
  }

  function writeReport(
    result: ComparisonResult<T>,
    l1: string,
    l2: string,
    additionalLog: AbsFunction['type']
  ) {
    const { score, times } = result;
    const LOG_DIR = '/utils/static-analysis/src/logs/functions';
    const IR_DIR = '/utils/static-analysis/src/logs/ir';
    const CFG_DIR = '/utils/static-analysis/src/logs/cfg';
    const CFG_PNG_DIR = '/utils/static-analysis/src/logs/cfg_png';
    const TEMPLATE = (id: string, name: string, loc: string) =>
      `[${
        id.length > 40 ? '' : id
      }(\`${name}\`)](${LOG_DIR}/${loc}/${name}.js)`;
    const IRTEMPLATE = (id: string, name: string, loc: string) =>
      `[${
        id.length > 40 ? '' : id
      }(\`${name}\`)](${IR_DIR}/${loc}/ir_log_${id}.txt)`;
    const CFGTEMPLATE = (id: string, name: string, loc: string) =>
      `[${
        id.length > 40 ? '' : id
      }(\`${name}\`)](${CFG_DIR}/${loc}/cfg_log_${id}.txt) ![CFG](${CFG_PNG_DIR}/${loc}/${id}.png)`;
    const additionalTemplate =
      additionalLog === 'ir'
        ? IRTEMPLATE
        : additionalLog === 'cfg'
        ? CFGTEMPLATE
        : () => '';

    let mdContent = '';
    mdContent += `## Scores\n|Precision|Recall|TP|TN|FP|FN|\n|---|---|---|---|---|---|\n|${score.precision}|${score.recall}|${score.tp.length}|${score.tn.length}|${score.fp.length}|${score.fn.length}|\n\n`;

    function eachMdSection<T extends AbsFunction>(value: [T, T][]) {
      return `${value.length}\n|f1|f2|\n|--|--|\n${value
        .slice(0, 20)
        .map(
          ([f1, f2]) =>
            `|${TEMPLATE(f1.id, f1.name, l1)}|${TEMPLATE(
              f2.id,
              f2.name,
              l2
            )}|\n|${additionalTemplate(
              f1.id,
              f1.name,
              l1
            )}|${additionalTemplate(f2.id, f2.name, l2)}|\n|`
        )
        .join('\n')}\n`;
    }
    mdContent += `## True Negatives: ${eachMdSection(score.tn)}`;
    mdContent += `## False Negatives: ${eachMdSection(score.fn)}`;
    mdContent += `## False Positives: ${eachMdSection(score.fp)}`;
    mdContent += `## Unique Functions: ${
      score.uniquefuncs.length
    }\n|f1|\n|--|\n${score.uniquefuncs
      .slice(0, 20)
      .map((fn) => `|${TEMPLATE(fn.id, fn.fName, l1)}|`)
      .join('\n')}\n`;
    const fileDir = 'src/logs/reports';
    const filePath = path.join(fileDir, `${logFileName}-${l1}-${l2}.md`);
    mkdirSync(path.resolve(__dirname, fileDir), { recursive: true });
    writeFileSync(filePath, mdContent, 'utf-8');
    console.log('finish compare', lib1.name, lib2.name, filePath);
  }
  const scores1 = getScores(absfuncs1, absfuncs2);
  // const scores2 = getScores(propstree2, propstree1);

  writeReport(scores1, lib1.name, lib2.name, absfuncs1[0].type);
  // writeReport(scores2, lib2.name, lib1.name);

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

function compareContext<T extends AbsFunction>(
  compareType: CompareType
): CompareContext<T> {
  switch (compareType) {
    case 'intra':
      return {
        getCompareTargets: (_: T, comparees: T[]) => comparees,
      };
    case 'inter':
      return {
        getCompareTargets: (comparer: T, comparees: T[]) =>
          comparees.filter((c) => c.name === comparer.name),
      };
  }
}

export default FunctionScorer;
