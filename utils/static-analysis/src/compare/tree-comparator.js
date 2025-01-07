const hasSameMembers = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return (
    set1.length === set2.length && [...set1].every((value) => set2.has(value))
  );
};
const isEqualObject = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  return keys1.every((key) => obj1[key] === obj2[key]);
};

function compare(tree1, tree2, options) {
  const sortArray = (arr) => [...(arr || [])].sort();

  const compareOtherProps = (t1, t2) => {
    const { literals: l1 = [], ...op1 } = t1.otherProps ?? {};
    const { literals: l2 = [], ...op2 } = t2.otherProps ?? {};
    return hasSameMembers(l1, l2) && isEqualObject(op1, op2);
  };

  const compareProps = (t1, t2) => {
    const props1 = sortArray(t1.props);
    const props2 = sortArray(t2.props);
    if (props1.length !== props2.length) return false;
    return props1.every((prop, i) => prop === props2[i]);
  };

  const getChild = (node) => {
    const paths = node?.paths || {};
    return {
      left: paths.true || paths.left,
      right: paths.false || paths.right,
    };
  };

  const comparePathNodes = (t1, t2) => {
    if (!options.node_type && t1.type !== t2.type) return false;

    // if (t1.type === 'logical' && t1.operator !== t2.operator) return false;

    const { left: left1, right: right1 } = getChild(t1, 'left');
    const { left: left2, right: right2 } = getChild(t2, 'left');

    return options.order
      ? (compareTree(left1, left2) && compareTree(right1, right2)) ||
          (compareTree(left1, right2) && compareTree(right1, left2))
      : compareTree(left1, left2) && compareTree(right1, right2);
  };

  const compareTree = (t1, t2) => {
    if (!t1 || !t2) return t1 === t2;

    if (!compareProps(t1, t2)) return false;

    if (t1.type || t2.type) {
      if (!comparePathNodes(t1, t2)) return false;
    }

    if (options.compare_other_props && !compareOtherProps(t1, t2)) return false;

    const children1 = t1.children || [];
    const children2 = t2.children || [];

    if (children1.length !== children2.length) return false;

    for (let i = 0; i < children1.length; i++) {
      if (!compareTree(children1[i], children2[i])) return false;
    }

    return true;
  };

  return compareTree(tree1, tree2);
}

function functionComparator(functions1, functions2, options) {
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

module.exports = functionComparator;
