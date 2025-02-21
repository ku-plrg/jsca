import { ESTree, parse } from 'meriyah';
import { walk } from './utils/temp/walker';
import { Function } from './utils/types';

const FUNC_ID = true;
let functions: Function[] = [];

function recordFunction(
  node:
    | ESTree.FunctionDeclaration
    | ESTree.FunctionExpression
    | ESTree.ArrowFunctionExpression
): void {
  if (!node.body) return;
  const body = stripFunctions(node.body);
  if (FUNC_ID) {
    functions.push({
      id: getId(body),
      body,
    });
    return;
  }

  functions.push({
    body,
  });
}

function stripFunctions(node: ESTree.Node): ESTree.Node {
  if (!node) return node;

  if (
    node.type === 'FunctionDeclaration' ||
    node.type === 'FunctionExpression' ||
    node.type === 'ArrowFunctionExpression'
  ) {
    if (!node.body) return node;
    recordFunction(node);

    return node.type === 'FunctionDeclaration'
      ? ({ type: 'EmptyStatement' } as ESTree.EmptyStatement)
      : ({ type: 'Literal', value: '' } as ESTree.Literal);
  }

  // Process all child nodes
  Object.keys(node).forEach((key) => {
    const value = (node as any)[key];
    if (value && typeof value === 'object') {
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          if (value[i] && typeof value[i] === 'object') {
            value[i] = stripFunctions(value[i]);
          }
        }
      } else {
        (node as any)[key] = stripFunctions(value);
      }
    }
  });

  return node;
}

function getId(node: ESTree.Node): string {
  let value: string | undefined;
  walk(node, {
    CallExpression(node: ESTree.Node) {
      if (
        node.type === 'CallExpression' &&
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
    TemplateLiteral(node: ESTree.Node) {
      if (node.type !== 'TemplateLiteral') return;
      const templateValue = node.quasis[0]?.value.raw;
      if (value === undefined && templateValue.startsWith('JSCA_')) {
        value = templateValue;
      }
    },
    Literal(node: ESTree.Node) {
      if (
        node.type === 'Literal' &&
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
  functions = [];
  let ast: ESTree.Program;
  try {
    ast = parse(code, {
      next: true,
      module: false,
    });
  } catch (e) {
    ast = parse(code, {
      next: true,
      module: true,
    });
  }
  stripFunctions(ast);

  return functions;
}

export default extractFunctions;
