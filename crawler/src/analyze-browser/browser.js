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

  const directChildren = variablesByCdnScripts.map((variable) => {
    return {
      [variable]: Object.getOwnPropertyNames(window[variable]),
    };
    // TODO : function body나 object property도 저장하도록 수정
    // console.log(variable, Object.getOwnPropertyNames(window[variable]));
    // return {
    //   [variable]: Object.getOwnPropertyNames(window[variable]).map((pn) => {
    //     return {
    //       name: pn,
    //       value:
    //         typeof window[variable][pn] === 'object'
    //           ? JSON.stringify(window[variable][pn])
    //           : window[variable][pn].toLocaleString(),
    //     };
    //   }),
    // };
  });

  const scriptSrc = document.getElementById('dynamic-cdn').src;

  console.log(
    JSON.stringify({
      src: scriptSrc,
      directChildren,
      directChildrenNum: directChildren.length,
    })
  );
}
