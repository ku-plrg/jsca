function compare(tree1, tree2) {
  const sortArray = (arr) => [...(arr || [])].sort();

  const compareProps = (t1, t2) => {
    const props1 = sortArray(t1.props);
    const props2 = sortArray(t2.props);
    if (props1.length !== props2.length) return false;
    return props1.every((prop, i) => prop === props2[i]);
  };

  const comparePathNodes = (t1, t2) => {
    if (t1.type !== t2.type) return false;

    // if (t1.type === 'logical' && t1.operator !== t2.operator) return false;

    if (t1.type === 'if' || t1.type === 'conditional') {
      return (
        compareTree(t1.paths.true, t2.paths.true) &&
        compareTree(t1.paths.false, t2.paths.false)
      );
    } else if (t1.type === 'logical') {
      return (
        compareTree(t1.paths.left, t2.paths.left) &&
        compareTree(t1.paths.right, t2.paths.right)
      );
    }

    return true;
  };

  const compareTree = (t1, t2) => {
    if (!t1 || !t2) return t1 === t2;

    if (!compareProps(t1, t2)) return false;

    if (t1.type || t2.type) {
      if (!comparePathNodes(t1, t2)) return false;
    }

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

module.exports = compare;
function functionComparator(functions1, functions2) {
  const results = { differentTrees1: [], differentTrees2: [] };

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

  function findDiff(sourceSet, targetSet) {
    const differences = [];
    sourceSet.forEach((source) => {
      let hasMatch = false;
      targetSet.forEach((target) => {
        if (compare(source.tree, target.tree)) hasMatch = true;
      });
      if (!hasMatch) differences.push(source.name);
    });
    return differences;
  }

  const treeSet1 = makeTreeSet(functions1);
  const treeSet2 = makeTreeSet(functions2);

  results.differentTrees1 = findDiff(treeSet1, treeSet2);
  results.differentTrees2 = findDiff(treeSet2, treeSet1);
  return results;
}

module.exports = functionComparator;