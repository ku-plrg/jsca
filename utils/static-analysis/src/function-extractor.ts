import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import { Function } from './utils/types';

function stripFunctions(node: acorn.Node): acorn.Node {
  if (!node) return node;

  // Replace function declarations/expressions with empty statements
  if (
    node.type === 'FunctionDeclaration' ||
    node.type === 'FunctionExpression'
  ) {
    return {
      type: 'EmptyStatement',
      start: node.start,
      end: node.end,
      loc: node.loc,
    };
  }

  return node;
}

function extractFunctions(code: string): Function[] {
  const ast: acorn.Node = acorn.parse(code, {
    ecmaVersion: 'latest', // Support the ES6
    sourceType: 'script', // Treat the code as a script (not a module)
    locations: true, // Include location information
    ranges: true, // Include range information
    allowReserved: true, // Allow reserved words
  });

  const functions: Function[] = [];
  let anonymousCounter: number = 0;

  function getUniqueFunctionName(node: acorn.Function): string {
    const startLine = node.loc?.start.line;
    if (!node.id) {
      anonymousCounter++;
      return `${startLine}_anonymous_${anonymousCounter}`;
    }
    return `${startLine}_${node.id.name}`;
  }

  function recordFunction(node: acorn.Function): void {
    const functionName = getUniqueFunctionName(node);
    functions.push({
      name: functionName,
      params: node.params,
      body: stripFunctions(node.body),
    });
  }

  walk.simple(ast, {
    FunctionDeclaration(node: acorn.Function) {
      recordFunction(node);
    },
    FunctionExpression(node: acorn.Function) {
      recordFunction(node);
    },
  });

  return functions;
}

export default extractFunctions;
