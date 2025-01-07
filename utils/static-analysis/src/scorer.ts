import measureTime from './utils/timer';
import { AbsFunction, Function, Library } from './utils/types';

function FunctionScorer<T extends AbsFunction>(
  lib1: Library,
  lib2: Library,
  abstraction: (f: Function[]) => T[],
  comparison: (f1: T, f2: T) => boolean
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
    const falsePositives: {
      f1Name: string;
      f2Name: string;
      id1: string;
      id2: string;
    }[] = [];
    const falseNegatives: {
      f1Name: string;
      f2Name: string;
      id1: string;
      id2: string;
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
            id1: f1.id,
            id2: f2.id,
          });
      });
    });

    const numTP = truePositives.length;
    const numFP = falsePositives.length;

    const numFN = falseNegatives.length;
    console.log(falseNegatives);

    const precisionString = `${numTP} / (${numTP} + ${numFP})`;
    const precision = numTP / (numTP + numFP);

    const recallString = `${numTP} / (${numTP} + ${numFN})`;
    const recall = numTP / (numTP + numFN);

    console.table({
      precisionString,
      precision,
      recallString,
      recall,
    });
    return {
      truePositives,
      falsePositives,
      precision,
      precisionString,
      recall,
      recallString,
    };
  }
  const scores1 = getScores(proptree1, proptree2);
  const scores2 = getScores(proptree2, proptree1);
  console.log('scores1', scores1.precision);
  console.log('scores2', scores2.precision);
}

export default FunctionScorer;
