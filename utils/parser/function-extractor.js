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
      const startLine = node.loc.start.line;
      if (!node.id) {
        anonymousCounter++;
        return `${startLine}_anonymous_${anonymousCounter}`;
      }
      return `${startLine}_${node.id.name}`;
    }

    function recordFunction(node) {
      const functionName = getUniqueFunctionName(node);
      functions[functionName] = {
        params: node.params.map((p) => p.name),
        body: node.body,
      };
    }

    walk.simple(ast, {
      FunctionDeclaration(node) {
        recordFunction(node);
      },
      FunctionExpression(node) {
        recordFunction(node);
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
    };
  }
}

module.exports = extractFunctions;
