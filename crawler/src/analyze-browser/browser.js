function getTwoDepthVariableTree() {
  const globalVariables = Object.getOwnPropertyNames(window);
  const originalGlobalVariables = JSON.parse(
    window.originalGlobalVariables || '[]'
  );

  const variablesByCdnScripts = globalVariables
    .filter((gv) => !originalGlobalVariables.includes(gv))
    .filter(
      (gv) =>
        gv !== 'originalGlobalVariables' && gv !== 'getTwoDepthVariableTree'
    );

  const tree = {};
  for (const variable of variablesByCdnScripts) {
    tree[variable] = Object.getOwnPropertyNames(window[variable]).filter(
      (gv) =>
        gv !== 'originalGlobalVariables' && gv !== 'getTwoDepthVariableTree'
    );
  }

  const scriptSrc = document.getElementById('dynamic-cdn').src;

  console.log(
    JSON.stringify({
      src: scriptSrc,
      tree,
      directChildrenNum: tree.length,
    })
  );
}
