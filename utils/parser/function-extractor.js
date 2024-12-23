const fs = require('fs');
const acorn = require('acorn');
const walk = require('acorn-walk');

const testCode = fs.readFileSync('test.js', 'utf-8');

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
    // Object to store analysis results
    const analysis = {
      functions: {},
      anonymousCounter: 0,
    };

    function getUniqueFunctionName(node) {
      // For null/anonymous functions
      if (!node.id) {
        analysis.anonymousCounter++;
        return `anonymous_${analysis.anonymousCounter}`;
      }

      // For existing names
      let baseName = node.id.name;
      let uniqueName = baseName;
      let counter = 1;

      while (uniqueName in analysis.functions) {
        uniqueName = `${baseName}_${counter}`;
        counter++;
      }

      return uniqueName;
    }

    walk.simple(ast, {
      FunctionDeclaration(node) {
        const functionName = getUniqueFunctionName(node);
        analysis.functions[functionName] = {
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
        analysis.functions[functionName] = {
          name: functionName,
          params: node.params.map((p) => p.name),
          location: node.loc,
          body: node.body,
        };
      },
    });
    return analysis;
  } catch (error) {
    return {
      success: false,
      error: error.message,
      location: error.loc,
    };
  }
}

function analyzeJSFile(code) {
  const result = extractFunctions(code);

  const analysis = result;

  console.log('\nFunctions:', Object.keys(analysis.functions).length);

  Object.entries(analysis.functions).forEach(([name, fn]) => {
    console.log(`\n📎 Function: ${name}(${fn.params.join(', ')})`);
    console.log(
      '  Location:',
      `Line ${fn.location.start.line}-${fn.location.end.line}`
    );
  });
}

analyzeJSFile(testCode);
