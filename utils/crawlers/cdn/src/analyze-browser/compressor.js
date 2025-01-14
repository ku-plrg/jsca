export const getCompressedTree = (prevTree, newTree, idx) => {
  const newSubTree = { ...prevTree };

  Object.entries(newTree).forEach(([base, children]) => {
    if (!newSubTree[base] && children.length > 0) {
      newSubTree[base] = {};
    }
    for (const child of children) {
      const prevVersionRange = newSubTree[base][child];
      if (!prevVersionRange || !Array.isArray(prevVersionRange)) {
        // 이 버전에서 새로 생긴 property
        newSubTree[base][child] = [[idx, idx]];
      } else {
        // at(0) : from, at(1): to
        const latestAdjacentVersionIdx = prevVersionRange.at(-1).at(1);
        if (idx - 1 === latestAdjacentVersionIdx) {
          // 이전 버전과 연속된 버전
          newSubTree[base][child] = [
            ...newSubTree[base][child].slice(0, -1),
            [prevVersionRange.at(-1).at(0), idx],
          ];
        } else {
          newSubTree[base][child] = [...newSubTree[base][child], [idx, idx]];
        }
      }
    }
  });

  return newSubTree;
};
