import { ComparisonResult } from './types';

export const getTotalScores = (results: ComparisonResult[]) => {
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
