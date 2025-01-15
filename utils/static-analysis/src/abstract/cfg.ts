import * as acorn from 'acorn';

interface CFGNode {
  id: number;
  type: 'start' | 'loop' | 'condition' | 'prop' | 'update_prop' | 'exit';
  node: acorn.Node | null;
  prev: number[];
}

interface CFGState {
  nodes: Map<number, CFGNode>;
  currentId: number;
}

type Visitor = {
  [key: string]: <T extends acorn.Node>(node: T) => number;
};

function createNode(
  state: CFGState,
  type: CFGNode['type'],
  node: acorn.Node | null
): number {
  const id = state.currentId;
  state.currentId++;
  state.nodes.set(id, {
    id,
    type,
    node,
    prev: [],
  });
  return id;
}

function addEdge(state: CFGState, from: number, to: number): void {
  const toNode = state.nodes.get(to);
  if (toNode && !toNode.prev.includes(from)) {
    toNode.prev.push(from);
  }
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
  node: acorn.IfStatement,
  nextId: number,
  exitId: number
): number {
  const ifId = createNode(state, 'condition', null);
  const testId = processNode(state, node.test, nextId, exitId);
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

function mergePrev(state: CFGState, prevIds: number[], exitIds: number[]): number {
  prevIds.filter(id=>!exitIds.includes(id)).forEach((prevId) => {
    addEdge(state, prevId,state.currentId);
  });

  return state.currentId;
}

function processNode(state:CFGState, node: acorn.Node, prevIds: number[], exitIds: number[]): number {

     // merge
  const mergedPrevId= prevIds.length>1? mergePrev(state, prevIds, exitIds): prevIds[0];
  const visitor = createVisitor([mergedPrevId], exitIds, state);
  const handler = visitor[node.type];
  try {
    if (!handler) {
      console.error(`Unsupported node type: ${node.type}`);
      return mergedPrevId;
    }

    return handler(node);
  } catch (e) {
    return mergedPrevId;
  }
}

function createVisitor(prevIds: number[], exitIds: number[],state:CFGState): Visitor {
  return {
    ExpressionStatement(node): number {
      return processNode(state, node, prevIds, exitIds);
    },
    BlockStatement(node) {
     return processBlockStatement(state, node as any, nextId, exitId);},
    EmptyStatement(node){
      return prevIds[0]
    },
    DebuggerStatement(node){
     return prevIds[0];},
    WithStatement(node:acorn.Node){
      return prevIds[0];},
    ReturnStatement(node:acorn.ReturnStatement){
      return processReturnStatement(state, node , nextId, exitId);
    },
    LabeledStatement(){
      return prevIds[0];},
    BreakStatement(){
      return prevIds[0];},
    ContinueStatement(){
      return prevIds[0];},
    IfStatement(node:acorn.IfStatement){
    return  processIfStatement(state, node as any, nextId, exitId);},
    SwitchStatement(node:acorn.Node){
      return prevIds[0];},
    ThrowStatement(node:acorn.Node){
      return prevIds[0];},
    TryStatement(node:acorn.Node){
      return prevIds[0];},
    WhileStatement:
      processWhileStatement(state, node as any, nextId, exitId);
    DoWhileStatement(node:acorn.Node){
      return prevIds[0];},
    ForStatement:
      processForStatement(state, node as any, nextId, exitId);
    ForInStatement:
      processForInStatement(state, node as any, nextId, exitId);
    ForOfStatement(node:acorn.Node){
      return prevIds[0];},
    Declaration(node:acorn.Node){
      return prevIds[0];},
    FunctionDeclaration(node:acorn.Node){
      return prevIds[0];},
    VariableDeclaration(node:acorn.Node){
      return prevIds[0];},
    ClassDeclaration(node:acorn.Node){
      return prevIds[0];},
    Identifier(node:acorn.Node){
      return prevIds[0];},
    Literal(node:acorn.Node){
      return prevIds[0];},
    ThisExpression(node:acorn.Node){
      return prevIds[0];},
    ArrayExpression(node:acorn.Node){
      return prevIds[0];},
    ObjectExpression(node:acorn.Node){
      return prevIds[0];},
    FunctionExpression(node:acorn.Node){
      return prevIds[0];},
    UnaryExpression(node:acorn.Node){
      return prevIds[0];},
    UpdateExpression(node:acorn.Node){
      return prevIds[0];},
    BinaryExpression(node:acorn.Node){
      return prevIds[0];},
    AssignmentExpression(node:acorn.Node){
      return prevIds[0];},
    LogicalExpression(node:acorn.Node){
      return prevIds[0];},
    MemberExpression(node:acorn.Node){
      return prevIds[0];},
    ConditionalExpression(node:acorn.Node){
      return prevIds[0];},
    CallExpression(node:acorn.Node){
      return prevIds[0];},
    NewExpression(node:acorn.Node){
      return prevIds[0];},
    SequenceExpression:
      const sequenceNode = node as acorn.SequenceExpression;
      const leftId = processNode(
        state,
        sequenceNode.expressions[0],
        prevIds,
        exitIds
      );
      processNode(state, sequenceNode.expressions[1], [leftId], exitIds);
    ArrowFunctionExpression:
    YieldExpression:
    TemplateLiteral:
    TaggedTemplateExpression:
    ClassExpression:
    MetaProperty:
    AwaitExpression:
    ChainExpression:
    ImportExpression:
    ParenthesizedExpression:
    ObjectPattern:
    ArrayPattern:
    RestElement:
    AssignmentPattern:
    // default:
    //   const id = createNode(state, node.type, getNodeCode(node));
    //   addEdge(state, id, nextId);
    //   return id;
  }
}


function generateCFG(ast: Node): Map<number, CFGNode> {
  const state: CFGState = {
    nodes: new Map(),
    currentId: 0,
  };
  const startId = createNode(state, 'start', null);
  const exitId = createNode(state, 'exit', null);

  processNode(state, ast,[startId] , [exitId]);
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
