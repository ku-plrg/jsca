import { measureTime } from './utils';
import { createDotGraph } from './utils/dot';
import { Functions, AbsFunctions } from './utils/types';

function FunctionScorer<T>(
  functions1: Functions,
  functions2: Functions,
  abstraction: (f: Functions) => AbsFunctions,
  comparison: () => T
): void {
  const proptree = measureTime('makePropstree from file1', () =>
    abstraction(functions1)
  );
  const proptree2 = measureTime('makePropstree from file2', () =>
    abstraction(functions2)
  );

  // createDotGraph(proptree, file1);
  //createDotGraph(proptree2, file2);

  const comaparator_options = {
    order: options.order,
    node_type: options.node_type,
    compare_other_props: Boolean(options.operators.length) || options.literals,
  };

  const result = measureTime('Comparing functions', () =>
    comparison(proptree, proptree2, comaparator_options)
  );
  function functionComparator(functions1, functions2) {
    const results = {
      differentTrees1: [],
      differentTrees2: [],
      distinguished1: [],
      distinguished2: [],
      self1: [],
      self2: [],
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
