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
    if (
      window[variable] === undefined ||
      window[variable] === null ||
      typeof window[variable] === 'string' ||
      typeof window[variable] === 'number'
    )
      tree[variable] = [JSON.stringify(window[variable])];
    // ['undefined' or 'null' or string]
    else if (Array.isArray(window[variable]))
      tree[variable] = window[variable].map((v) => {
        if (typeof v === 'object' && v.constructor?.name !== undefined)
          return v.constructor.name;
        else return JSON.stringify(v);
      });
    else
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
