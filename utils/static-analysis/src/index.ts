import { DYNAMIC_PAIR, scorerParams } from './constants';
import scorer from './scorer';
import { rawFunctionToLibrary, writeReport } from './utils/misc';
import {
  AbsMapping,
  AbsType,
  CompareType,
  Library,
  RawFunction,
} from './utils/types';

const TARGET_PAIR = DYNAMIC_PAIR;
const { codes, compareType } = TARGET_PAIR;
const TARGET_ABS: AbsType[] = [
  // 'IR',
  // 'Props',
  // 'PropsTree',
  'CFG',
];

function callScorer<K extends AbsType>(
  f1: RawFunction,
  f2: RawFunction,
  absType: K,
  compareType: CompareType
) {
  const lib1: Library = rawFunctionToLibrary(f1);
  const lib2: Library = rawFunctionToLibrary(f2);

  const { abstraction, comparator } = scorerParams[absType];
  return scorer<AbsMapping[K]>(
    lib1,
    lib2,
    abstraction,
    comparator,
    compareType,
    absType
  );
}

TARGET_ABS.forEach(async (absType) => {
  const scores = [];
  for (const [p0, p1] of codes) {
    const score = await callScorer(p0, p1, absType, compareType);
    scores.push({ target: p1.name, scores: score });
  }
  writeReport(scores, absType);
});
