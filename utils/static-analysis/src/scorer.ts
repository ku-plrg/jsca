import measureTime from './utils/timer';
import createDotGraph from './utils/graph-visualize';
import { Function, AbsFunction, Library, proptree } from './utils/types';

function FunctionScorer(
  lib1: Library,
  lb2: Library,
  abstraction: (f: Function[]) => AbsFunction[],
  comparison: <T>(f1: T, f2: T) => boolean
): void {
  const proptree1 = measureTime('makePropstree from file1', () =>
    abstraction(lib1.functions)
  );
  const proptree2 = measureTime('makePropstree from file2', () =>
    abstraction(lb2.functions)
  );

  //createDotGraph(proptree, file1);
  //createDotGraph(proptree2, file2);

  const result = measureTime('Comparing functions', () =>
    proptree1.map((f1) => proptree2.map((f2) => comparison(f1, f2)))
  );

  function functionComparator(functions1, functions2) {
    const results = {
      differentTrees1: [],
      differentTrees2: [],
    };

    function makeTreeSet(functions) {
      const propOrderMap = Object.entries(functions).sort(
        (a, b) => +a[0].split('_')[0] - +b[0].split('_')[0]
      );
      const treeSet = new Set();

      propOrderMap.forEach(([name, func]) => {
        treeSet.add({ name, tree: func.proptree });
      });

      return treeSet;
    }

    function findDiff(sourceSet, targetSet, distinguished) {
      const differences = [];
      sourceSet.forEach((source) => {
        let matchCount = 0;
        targetSet.forEach((target) => {
          if (compare(source.tree, target.tree, options)) matchCount++;
        });
        if (matchCount === 0) {
          differences.push(source.name);
        } else if (matchCount === 1) {
          distinguished.push(source.name);
        }
      });
      return differences;
    }

    function findSelfSimilar(treeSet) {
      const selfList = [];
      const trees = Array.from(treeSet);

      trees.forEach((source, sourceIndex) => {
        let hasEqual = false;
        trees.forEach((target, targetIndex) => {
          if (
            sourceIndex !== targetIndex &&
            compare(source.tree, target.tree, options)
          ) {
            hasEqual = true;
          }
        });
        if (!hasEqual) {
          selfList.push(source.name);
        }
      });
      return selfList;
    }

    const treeSet1 = makeTreeSet(functions1);
    const treeSet2 = makeTreeSet(functions2);

    results.differentTrees1 = findDiff(
      treeSet1,
      treeSet2,
      results.distinguished1
    );
    results.differentTrees2 = findDiff(
      treeSet2,
      treeSet1,
      results.distinguished2
    );
    results.self1 = findSelfSimilar(treeSet1);
    results.self2 = findSelfSimilar(treeSet2);
    return results;
  }

  const logLinks = (file, result, options) => {
    if (options.log_limit) {
      console.log('[[HEAD]]');
      result.slice(0, options.log_limit.head).forEach((f) => logLink(file, f));
      console.log('[[TAIL]]');
      result.slice(-options.log_limit.tail).forEach((f) => logLink(file, f));
    } else result.forEach((f) => logLink(file, f));
  };

  const logLink = (foldername, filename) =>
    console.log(
      `logs/functions/${foldername}/${filename}.js\n\tlogs/function-trees/${foldername}/tree_${filename}.png`
    );

  const log_options = {
    log_limit: {
      head: 5,
      tail: 5,
    }, // if not set, log all
  };

  function logResults(filename, results, index) {
    const data = {
      filename,
      different: results[`differentTrees${index}`].length,
      distinguished: results[`distinguished${index}`].length,
      self: results[`self${index}`].length,
    };

    console.log('\n=== Analysis Results ===');
    console.table(data);

    console.log(`\nDetailed Results for ${filename}:`);
    console.log('Different Trees:');
    logLinks(filename, results[`differentTrees${index}`], log_options);

    console.log('Distinguished:');
    logLinks(filename, results[`distinguished${index}`], log_options);
  }

  logResults(file1, result, 1);
  logResults(file2, result, 2);
}

export default FunctionScorer;
