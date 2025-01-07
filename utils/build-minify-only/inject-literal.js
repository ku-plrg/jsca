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

        // Create a TemplateLiteral node
        const templateLiteral = {
          type: 'TemplateLiteral',
          quasis: [
            {
              type: 'TemplateElement',
              value: {
                raw: `JSCA_${startLine}`,
                cooked: `JSCA_${startLine}`,
              },
              tail: true,
            },
          ],
          expressions: [],
        };

        // Insert the TemplateLiteral at the top of the body
        const newNode = {
          type: 'ExpressionStatement',
          expression: templateLiteral,
        };

        node.body.body.unshift(newNode);
      }
    },
  });

  // Generate the modified code
  const modifiedCode = generate(formattedAst, {
    comments: true, // Preserve comments
  });
  return modifiedCode;
};

export default injectLiteral;
