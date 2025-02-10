import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import { simple } from 'acorn-walk';
import { Function } from './utils/types';

const MAX_FUNCTION_SIZE = 0;

function stripFunctions(node: acorn.AnyNode): acorn.AnyNode {
  if (!node) return node;

  // Replace function declarations/expressions with empty statements
  if (node.type === 'FunctionDeclaration') {
    return {
      type: 'EmptyStatement',
      start: node.start,
      end: node.end,
      loc: node.loc,
    };
  }
  if (
    node.type === 'FunctionExpression' &&
    JSON.stringify(node.body).toString().length > MAX_FUNCTION_SIZE
  ) {
    return {
      type: 'Literal',
      value: '',
      start: node.start,
      end: node.end,
      loc: node.loc,
    };
  }

  // Recursively process all properties
  Object.keys(node).forEach((key) => {
    // @ts-ignore
    if (typeof node[key] === 'object') {
      // @ts-ignore
      node[key] = stripFunctions(node[key]);
    }
  });

  return node;
}

function getId(node: acorn.Node): string {
  let value: string | undefined;
  simple(node, {
    CallExpression(node: acorn.CallExpression) {
      if (
        node.callee.type === 'Identifier' &&
        node.callee.name === 'Symbol' &&
        node.arguments.length > 0 &&
        node.arguments[0].type === 'Literal' &&
        typeof node.arguments[0].value === 'string'
      ) {
        const symbolValue = node.arguments[0].value;
        if (value === undefined && symbolValue.startsWith('JSCA_')) {
          value = symbolValue;
        }
      }
    },
    TemplateLiteral(node: acorn.TemplateLiteral) {
      const templateValue = node.quasis[0]?.value.raw;
      if (value === undefined && templateValue.startsWith('JSCA_')) {
        value = templateValue;
      }
    },
    Literal(node: acorn.Literal) {
      if (
        value === undefined &&
        typeof node.value === 'string' &&
        node.value.startsWith('JSCA_')
      ) {
        value = node.value;
      }
    },
  });
  return value || '';
}

function extractFunctions(code: string): Function[] {
  let ast: acorn.Node;
  try {
    ast = acorn.parse(code, {
      ecmaVersion: 'latest', // Support the ES6
      sourceType: 'script', // Treat the code as a script (not a module)
      locations: true, // Include location information
      ranges: true, // Include range information
      allowReserved: true, // Allow reserved words
    });
  } catch (e) {
    ast = acorn.parse(code, {
      ecmaVersion: 'latest', // Support the ES6
      sourceType: 'module', // Treat the code as a script (not a module)
      locations: true, // Include location information
      ranges: true, // Include range information
      allowReserved: true, // Allow reserved words
    });
  }

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
    const body = stripFunctions(node.body);
    if (JSON.stringify(body).toString().length < MAX_FUNCTION_SIZE) return;
    const id = getId(body);

    functions.push({
      id,
      name: functionName,
      params: node.params,
      body,
    });
  }

  walk.simple(ast, {
    FunctionDeclaration(node: acorn.Function) {
      if (JSON.stringify(node.body).toString().length > MAX_FUNCTION_SIZE)
        recordFunction(node);
    },
    FunctionExpression(node: acorn.Function) {
      if (JSON.stringify(node.body).toString().length > MAX_FUNCTION_SIZE)
        recordFunction(node);
    },
  });

  return functions;
}

export default extractFunctions;
