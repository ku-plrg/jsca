const acorn = require('acorn');
const walk = require('acorn-walk');

function extractFunctions(code) {
  try {
    const ast = acorn.parse(code, {
      ecmaVersion: '2015', // Support the ES6
      sourceType: 'script', // Treat the code as a script (not a module)
      locations: true, // Include location information
      ranges: true, // Include range information
      onComment: false, // Don't include comments
      allowReserved: true, // Allow reserved words
    });

    const functions = {};

    let anonymousCounter = 0;
    function getUniqueFunctionName(node) {
      // For null/anonymous functions
      if (!node.id) {
        anonymousCounter++;
        return `anonymous_${anonymousCounter}`;
      }

      // For existing names
      let baseName = node.id.name;
      let uniqueName = baseName;
      let counter = 1;

      while (uniqueName in functions) {
        uniqueName = `${baseName}_${counter}`;
        counter++;
      }

      return uniqueName;
    }

    walk.simple(ast, {
      FunctionDeclaration(node) {
        const functionName = getUniqueFunctionName(node);
        functions[functionName] = {
          name: functionName,
          params: node.params.map((p) => p.name),
          location: node.loc,
          body: node.body,
        };
      },
    });

    walk.simple(ast, {
      FunctionExpression(node) {
        const functionName = getUniqueFunctionName(node);
        functions[functionName] = {
          name: functionName,
          params: node.params.map((p) => p.name),
          location: node.loc,
          body: node.body,
        };
      },
    });
    return {
      success: true,
      functions,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      location: error.loc,
    };
  }
}

module.exports = extractFunctions;
