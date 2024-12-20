function getFullDepthVariableTree() {
  const magicWords = ['cache', 'globalThis', 'this', 'window'];
  const globalVariables = Object.getOwnPropertyNames(window);
  const originalGlobalVariables = JSON.parse(
    window.originalGlobalVariables || '[]'
  );
  const blackLists = [...magicWords, ...originalGlobalVariables];

  function traverse(variablePath, name) {
    console.log(variablePath, name);
    const variable = variablePath
      .split('.')
      .reduce((acc, key) => acc[key], window);
    if (
      variable === null ||
      variable === undefined ||
      typeof variable === 'string' ||
      typeof variable === 'number' ||
      typeof variable === 'boolean'
    ) {
      return {
        propertyName: name,
        type: typeof variable,
        value: variable,
        children: [],
      };
    }

    if (variablePath.split('.').slice(0, -1).includes(name)) {
      return {
        propertyName: name,
        type: typeof variable,
        value: 'Cyclic reference detected',
        children: [],
      };
    }

    if (typeof variable === 'object' || typeof variable === 'function') {
      console.log('<div>start collect children:', variablePath);
      const children = Array.isArray(variable)
        ? variable
            .filter((v) => !blackLists.includes(v))
            .map((_, idx) => traverse(`${variablePath}.${idx}`, `[${idx}]`))
        : Object.getOwnPropertyNames(variable)
            .filter((v) => !blackLists.includes(v))
            .map((key) => traverse(`${variablePath}.${key}`, key));

      console.log('children finished!', variablePath, '</div>');
      return {
        propertyName: name,
        type: Array.isArray(variable)
          ? 'array'
          : typeof variable === 'function'
          ? 'function'
          : 'object',
        value:
          typeof variable === 'object'
            ? JSON.stringify(variable)
            : variable.toString(),
        children,
      };
    }
    console.log('hi');
    return {
      propertyName: name,
      type: typeof variable,
      value: variable,
      children: [],
    };
  }

  const variablesByScripts = globalVariables.filter(
    (gv) =>
      !blackLists.includes(gv) &&
      gv !== 'originalGlobalVariables' &&
      gv !== 'getFullDepthVariableTree'
  );

  console.log('vbs', JSON.stringify(variablesByScripts));

  const tree = variablesByScripts.map((variable) =>
    traverse(`${variable}`, variable)
  );

  console.log(
    JSON.stringify(
      {
        tree,
        directChildrenNum: variablesByScripts.length,
      },
      null,
      2
    )
  );
}
