import { Node } from 'acorn';
import * as escodegen from 'escodegen';

interface CFGNode {
  id: number;
  type: string;
  code: string;
  next: number[];
}

interface CFGState {
  nodes: Map<number, CFGNode>;
  currentId: number;
}

function createNode(state: CFGState, type: string, code: string): number {
  const id = state.currentId++;
  state.nodes.set(id, {
    id,
    type,
    code,
    next: [],
  });
  return id;
}

function addEdge(state: CFGState, from: number, to: number): void {
  const node = state.nodes.get(from);
  if (node && !node.next.includes(to)) {
    node.next.push(to);
  }
}

function getNodeCode(node: Node): string {
  if (node.type === undefined) return '';
  return escodegen.generate(node);
}

function processBlockStatement(
  state: CFGState,
  node: any,
  nextId: number,
  exitId: number
): number {
  let currentId = nextId;

  for (let i = node.body.length - 1; i >= 0; i--) {
    currentId = processNode(state, node.body[i], currentId, exitId);
  }

  return currentId;
}

function processIfStatement(
  state: CFGState,
  node: any,
  nextId: number,
  exitId: number
): number {
  const ifId = createNode(
    state,
    'IfStatement',
    `if (${getNodeCode(node.test)})`
  );

  const consequentEnd = processNode(state, node.consequent, nextId, exitId);
  addEdge(state, ifId, consequentEnd);

  if (node.alternate) {
    const alternateEnd = processNode(state, node.alternate, nextId, exitId);
    addEdge(state, ifId, alternateEnd);
  } else {
    addEdge(state, ifId, nextId);
  }

  return ifId;
}

function processWhileStatement(
  state: CFGState,
  node: any,
  nextId: number,
  exitId: number
): number {
  const whileId = createNode(
    state,
    'WhileStatement',
    `while (${getNodeCode(node.test)})`
  );

  const bodyEnd = processNode(state, node.body, whileId, exitId);
  addEdge(state, whileId, bodyEnd);
  addEdge(state, whileId, nextId);

  return whileId;
}

function processForStatement(
  state: CFGState,
  node: any,
  nextId: number,
  exitId: number
): number {
  const initId = node.init
    ? processNode(state, node.init, nextId, exitId)
    : nextId;
  const forId = createNode(
    state,
    'ForStatement',
    `for (${node.init ? getNodeCode(node.init) : ''}; ${getNodeCode(
      node.test
    )}; ${getNodeCode(node.update)})`
  );

  const bodyEnd = processNode(state, node.body, forId, exitId);
  addEdge(state, forId, bodyEnd);
  addEdge(state, forId, nextId);

  return initId;
}

function processForInStatement(
  state: CFGState,
  node: any,
  nextId: number,
  exitId: number
): number {
  const initId = node.left
    ? processNode(state, node.left, nextId, exitId)
    : nextId;
  const forId = createNode(
    state,
    'ForInStatement',
    `for (${node.left ? getNodeCode(node.left) : ''} in ${getNodeCode(
      node.right
    )})`
  );

  const bodyEnd = processNode(state, node.body, forId, exitId);
  addEdge(state, forId, bodyEnd);
  addEdge(state, bodyEnd, forId);
  addEdge(state, forId, nextId);

  return initId;
}

function processReturnStatement(
  state: CFGState,
  node: any,
  nextId: number,
  exitId: number
): number {
  const returnId = createNode(
    state,
    'ReturnStatement',
    `return ${getNodeCode(node.argument)}`
  );
  addEdge(state, returnId, exitId);
  return returnId;
}

function processLogicalExpression(
  state: CFGState,
  node: any,
  nextId: number,
  exitId: number
): number {
  const logicalId = createNode(
    state,
    'LogicalExpression',
    `${getNodeCode(node.left)} ${node.operator} ${getNodeCode(node.right)}`
  );
  addEdge(state, logicalId, nextId);
  return logicalId;
}

// function processVariableDeclaration(
//   state: CFGState,
//   node: any,
//   nextId: number,
//   exitId: number
// ): number {
//   const variableId = createNode(
//     state,
//     'VariableDeclaration',
//     `${getNodeCode(node.kind)} ${getNodeCode(node.declarations)}`
//   );
//   addEdge(state, variableId, nextId);
//   return variableId;
// }

function processNode(
  state: CFGState,
  node: Node,
  nextId: number,
  exitId: number
): number {
  switch (node.type) {
    case 'ExpressionStatement':
      return processNode(state, (node as any).expression, nextId, exitId);
    case 'BlockStatement':
      return processBlockStatement(state, node as any, nextId, exitId);
    case 'EmptyStatement':
      return nextId;
    case 'DebuggerStatement':
      return nextId;
    case 'WithStatement':
    case 'ReturnStatement':
      return processReturnStatement(state, node as any, nextId, exitId);
    case 'LabeledStatement':
    case 'BreakStatement':
    case 'ContinueStatement':
    case 'IfStatement':
      return processIfStatement(state, node as any, nextId, exitId);
    case 'SwitchStatement':
    case 'ThrowStatement':
    case 'TryStatement':
    case 'WhileStatement':
      return processWhileStatement(state, node as any, nextId, exitId);
    case 'DoWhileStatement':
    case 'ForStatement':
      return processForStatement(state, node as any, nextId, exitId);
    case 'ForInStatement':
      return processForInStatement(state, node as any, nextId, exitId);
    case 'ForOfStatement':
    case 'Declaration':
    case 'FunctionDeclaration':
    case 'VariableDeclaration':
    case 'ClassDeclaration':
    case 'Identifier':
    case 'Literal':
    case 'ThisExpression':
    case 'ArrayExpression':
    case 'ObjectExpression':
    case 'FunctionExpression':
    case 'UnaryExpression':
    case 'UpdateExpression':
    case 'BinaryExpression':
    case 'AssignmentExpression':
    case 'LogicalExpression':
    case 'MemberExpression':
    case 'ConditionalExpression':
    case 'CallExpression':
    case 'NewExpression':
    case 'SequenceExpression':
    case 'ArrowFunctionExpression':
    case 'YieldExpression':
    case 'TemplateLiteral':
    case 'TaggedTemplateExpression':
    case 'ClassExpression':
    case 'MetaProperty':
    case 'AwaitExpression':
    case 'ChainExpression':
    case 'ImportExpression':
    case 'ParenthesizedExpression':
    case 'ObjectPattern':
    case 'ArrayPattern':
    case 'RestElement':
    case 'AssignmentPattern':
    default:
      const id = createNode(state, node.type, getNodeCode(node));
      addEdge(state, id, nextId);
      return id;
  }
}

function generateCFG(ast: Node): Map<number, CFGNode> {
  const state: CFGState = {
    nodes: new Map(),
    currentId: 0,
  };

  const exitId = createNode(state, 'Exit', 'exit');

  processNode(state, ast, exitId, exitId);
  return state.nodes;
}

function generateDOT(nodes: Map<number, CFGNode>): string {
  let dot = 'digraph CFG {\n';

  // Add nodes
  nodes.forEach((node) => {
    dot += `  ${node.id} [label="${node.type}\\n${node.code}"]\n`;
  });

  // Add edges
  nodes.forEach((node) => {
    node.next.forEach((nextId) => {
      dot += `  ${node.id} -> ${nextId}\n`;
    });
  });

  dot += '}';
  return dot;
}
function saveDotToPng(dot: string, filename: string): void {
  const fs = require('fs');
  const path = require('path');
  const { execSync } = require('child_process');

  const dotPath = path.join(__dirname, 'dot.dot');
  fs.writeFileSync(dotPath, dot, 'utf-8');
  execSync(`dot -Tpng ${dotPath} -o ${filename}.png`);
}
import * as acorn from 'acorn';

const code = `
function example() {
  doc = doc || document;
  var i, val, script = doc.createElement('script');
  if ((script.text = code),node) {
    for (i in preservedScriptAttributes) {
      val = node[i] || node.getAttribute && node.getAttribute(i);
      if (val) {
        script.setAttribute(i, val);
      }
    }
  }
  doc.head.appendChild(script).parentNode.removeChild(script);
}
`;

const ast = acorn.parse(code, {
  ecmaVersion: 2020,
});
const ast2 = (ast.body[0] as acorn.FunctionDeclaration).body;
const graph = generateCFG(ast2);
const dot = generateDOT(graph);
saveDotToPng(dot, 'cfg');
