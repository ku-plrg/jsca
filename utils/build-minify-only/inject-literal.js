import { parse } from 'acorn';
import { generate } from 'astring';
import estraverse from 'estraverse';

const parserOptions = {
  ecmaVersion: 'latest',
  sourceType: 'script', // Treat the code as a script (not a module)
  locations: true, // Include location information
  ranges: true, // Include range information
  allowReserved: true, // Allow reserved words
};

const injectLiteral = (code) => {
  const ast = parse(code, parserOptions);
  const formattedCode = generate(ast);
  const formattedAst = parse(formattedCode, parserOptions);

  estraverse.replace(formattedAst, {
    enter(node) {
      if (
        node.type === 'FunctionDeclaration' ||
        node.type === 'FunctionExpression'
      ) {
        const startLine = node.loc.start.line;
        const endLine = node.loc.end.line;

        // Create a CallExpression for Symbol
        const callExpression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: 'Symbol',
          },
          arguments: [
            {
              type: 'Literal',
              value: `JSCA_${startLine}_${endLine}`,
            },
          ],
        };

        // Insert the Symbol creation call as a statement
        const expressionStatement = {
          type: 'ExpressionStatement',
          expression: callExpression,
        };

        node.body.body.unshift(expressionStatement);
      }
    },
  });

  // Generate the modified code
  const modifiedCode = generate(formattedAst);

  return modifiedCode;
};

export default injectLiteral;
