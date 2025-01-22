import * as acorn from 'acorn';
import { CFGState, CFGArgument, Subgraph } from '../utils/types';
import { writeFile } from 'fs/promises';
import { exec } from 'child_process';
import { promisify } from 'util';
import { start } from 'repl';
import { stat } from 'fs';

let cfgState: CFGState;

function visit(node: acorn.AnyNode): void {
  switch (node.type) {
    case 'ExpressionStatement':
      visit(node.expression);
      break;
    case 'BlockStatement':
      node.body.forEach((body) => {
        newBlock();
        visit(body);
      });
      break;
    case 'EmptyStatement':
    case 'DebuggerStatement':
    case 'WithStatement':
      break;
    case 'ReturnStatement':
      const returnprevIds = cfgState.prevIds;
      node.argument && visit(node.argument);
      mergePrev(cfgState.prevIds, cfgState.endId);
      cfgState.prevIds = cfgState.prevIds.filter(
        (id) => !returnprevIds.includes(id)
      );
      break;
    case 'LabeledStatement':
      break;
    case 'BreakStatement':
      const breakprevIds = cfgState.prevIds;
      const loop_break = cfgState.loopStack.pop();
      if (!loop_break) return;
      loop_break.break.push(...breakprevIds);
      cfgState.loopStack.push(loop_break);
      cfgState.prevIds = cfgState.prevIds.filter(
        (id) => !breakprevIds.includes(id)
      );
      break;

    case 'ContinueStatement':
      const continueprevIds = cfgState.prevIds;
      const loop_continue = cfgState.loopStack.pop();
      if (!loop_continue) return;
      loop_continue.continue.push(...continueprevIds);
      cfgState.loopStack.push(loop_continue);
      cfgState.prevIds = cfgState.prevIds.filter(
        (id) => !continueprevIds.includes(id)
      );
      break;
    case 'IfStatement':
      const ifSubgraph = createSubgraph(node.test);
      cfgState.prevIds = ifSubgraph.then;
      condVisitor(node.consequent);
      let thenPrevids = cfgState.prevIds;
      cfgState.prevIds = ifSubgraph.else;
      node.alternate && condVisitor(node.alternate);
      cfgState.prevIds = thenPrevids.concat(cfgState.prevIds);
      break;
    case 'SwitchStatement':
    case 'ThrowStatement':
    case 'TryStatement':
      break;
    case 'WhileStatement':
      const whileSubgraph = createSubgraph(node.test);
      cfgState.prevIds = whileSubgraph.then;
      const whileLoop = loopVisitor(node.body);
      mergePrev(
        whileLoop.continue.concat(cfgState.prevIds),
        whileSubgraph.start
      );
      cfgState.prevIds = whileLoop.break.concat(whileSubgraph.else);
      break;
    case 'DoWhileStatement':
      const doWhileLoop = loopVisitor(node.body);
      const dowhileSubgraph = createSubgraph(node.test);
      mergePrev(
        doWhileLoop.continue.concat(dowhileSubgraph.then),
        dowhileSubgraph.start
      );
      cfgState.prevIds = doWhileLoop.break.concat(dowhileSubgraph.else);
      break;
    case 'ForStatement':
      node.init && visit(node.init);
      if (node.test) {
        const forSubgraph = createSubgraph(node.test);
        cfgState.prevIds = forSubgraph.then;
        const forLoop = loopVisitor(node.body);
        node.update && visit(node.update);
        mergePrev(forLoop.continue.concat(cfgState.prevIds), forSubgraph.start);
        cfgState.prevIds = forLoop.break.concat(forSubgraph.else);
      } else {
        const forprevIds = cfgState.prevIds;
        const forLoop = loopVisitor(node.body);
        node.update && visit(node.update);
        mergePrev(forLoop.continue, forprevIds[0]);
        cfgState.prevIds = forLoop.break;
      }
      break;

    case 'ForInStatement':
    case 'ForOfStatement':
    case 'FunctionDeclaration':
      break;
    case 'VariableDeclaration':
      node.declarations.forEach(visit);
      break;
    case 'ClassDeclaration':
    case 'Identifier':
    case 'Literal':
    case 'ThisExpression':
      break;
    case 'ArrayExpression':
      const elements = node.elements.filter((el) => el !== null);
      elements.forEach(visit);
      break;
    case 'ObjectExpression':
      node.properties.forEach(visit);
      break;
    case 'FunctionExpression':
      break;
    case 'UnaryExpression':
      visit(node.argument);
      break;
    case 'UpdateExpression':
      visit(node.argument);
      break;
    case 'BinaryExpression':
      visit(node.left);
      visit(node.right);
      break;
    case 'AssignmentExpression':
      visit(node.left);
      visit(node.right);
      if (
        node.left.type === 'MemberExpression' &&
        node.left.property.type === 'Identifier'
      ) {
        insertSequence(node.left.property.name, 'update_prop');
      }
      break;
    case 'LogicalExpression':
      visit(node.left);
      const logicalprevIds = cfgState.prevIds;
      condVisitor(node.right);
      cfgState.prevIds = cfgState.prevIds.concat(logicalprevIds);
      break;
    case 'MemberExpression':
      visit(node.object);
      if (!node.computed && node.property.type === 'Identifier') {
        insertSequence(node.property.name, 'prop');
        visit(node.property);
      }
      if (node.computed && node.property.type !== 'Identifier') {
        visit(node.property);
      }
      break;
    case 'ConditionalExpression':
      visit(node.test);
      condVisitor(node.consequent);
      condVisitor(node.alternate);
      break;
    case 'CallExpression':
      visit(node.callee);
      node.arguments.forEach(visit);
      break;
    case 'NewExpression':
      visit(node.callee);
      node.arguments.forEach(visit);
      break;
    case 'SequenceExpression':
      node.expressions.forEach(visit);
      break;
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
      break;
    default:
      break;
  }
}
function subgraphVisitor(expr: acorn.AnyNode): void {
  switch (expr.type) {
    case 'Identifier':
    case 'Literal':
    case 'ThisExpression':
    case 'ArrayExpression':
    case 'ObjectExpression':
    case 'FunctionExpression':
      break;
    case 'UnaryExpression':
      // const unarySubgraph = getSubgraph(cfgState);
      // subgraphVisitor(expr.argument);
      // cfgState.subgraphstack.push({
      //   start: unarySubgraph.start,
      //   then: unarySubgraph.then,
      //   else: unarySubgraph.else,
      // });
      break;
    case 'UpdateExpression':
      subgraphVisitor(expr.argument);
      break;
    case 'BinaryExpression':
      subgraphVisitor(expr.left);
      subgraphVisitor(expr.right);
      break;
    case 'AssignmentExpression':
      subgraphVisitor(expr.left);
      subgraphVisitor(expr.right);
      break;
    case 'LogicalExpression':
      subgraphVisitor(expr.left);
      subgraphVisitor(expr.right);
      break;
    case 'MemberExpression':
      subgraphVisitor(expr.object);
      expr.computed && subgraphVisitor(expr.property);
      break;
    case 'ConditionalExpression':
      subgraphVisitor(expr.test);
      subgraphVisitor(expr.consequent);
      subgraphVisitor(expr.alternate);
      break;
    case 'CallExpression':
      subgraphVisitor(expr.callee);
      expr.arguments.forEach(subgraphVisitor);
      break;
    case 'NewExpression':
      subgraphVisitor(expr.callee);
      expr.arguments.forEach(subgraphVisitor);
      break;
    case 'SequenceExpression':
      expr.expressions.forEach(subgraphVisitor);
      break;
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
      break;
    default:
  }
}

function extractCFG(node: acorn.AnyNode): CFGState {
  cfgState = {
    currentId: 2,
    prevIds: [1],
    nodes: new Map([
      [1, { type: 'block', id: 1, nextIds: [], sequences: [] }],
      [0, { type: 'start', id: 0, nextIds: [1] }],
      [-1, { type: 'exit', id: -1, nextIds: [] }],
      [-2, { type: 'exception-exit', id: -2, nextIds: [] }],
    ]),
    subgraph: { start: 0, then: [0], else: [0] },
    loopStack: [],
    endId: -1,
    exceptionId: -2,
  };
  visit(node);
  mergePrev(cfgState.prevIds, cfgState.endId);
  return cfgState;
}
// utils -------------------------------------------------------------------------------------------

function createNode(): number {
  const id = cfgState.currentId++;
  const nextIds: number[] = [];
  cfgState.nodes.set(id, {
    type: 'block',
    id,
    nextIds,
    sequences: [],
  });
  return id;
}
function addEdge(from: number, to: number): void {
  if (from === to) return;
  const fromNode = cfgState.nodes.get(from);
  const toNode = cfgState.nodes.get(to);
  if (fromNode && toNode) {
    if (!fromNode.nextIds.includes(to)) {
      fromNode.nextIds.push(to);
    }
  }
}

function mergePrev(prevIds: number[], currentId: number) {
  prevIds.forEach((prevId) => {
    addEdge(prevId, currentId);
  });
}
function newBlock() {
  if (cfgState.prevIds.length !== 1) {
    const nodeId = createNode();
    mergePrev(cfgState.prevIds, nodeId);
    cfgState.prevIds = [nodeId];
  }
}
function createSubgraph(node: acorn.Expression): Subgraph {
  const prevIds = cfgState.prevIds;
  newBlock();
  cfgState.prevIds = [cfgState.prevIds[0]];
  subgraphVisitor(node);
  cfgState.prevIds = prevIds;
  const subgraph = cfgState.subgraph;
  mergePrev(cfgState.prevIds, subgraph.start);
  return subgraph;
}

function condVisitor(node: acorn.AnyNode) {
  const nodeId = createNode();
  mergePrev(cfgState.prevIds, nodeId);
  cfgState.prevIds = [nodeId];
  visit(node);
}

function loopVisitor(node: acorn.AnyNode) {
  cfgState.loopStack.push({ break: [], continue: [] });
  visit(node);
  const loop = cfgState.loopStack.pop();
  if (!loop) throw new Error('Loop stack is empty');
  return loop;
}
function insertSequence(value: string, type: 'prop' | 'update_prop') {
  const nodeId = cfgState.prevIds[0];
  const node = cfgState.nodes.get(nodeId);
  if (node && node.type === 'block') {
    node.sequences.push({ type: type, value });
  }
}
//-----------------------------------------------------------------------------------------------------
function cfgBuilder(argument: CFGArgument) {
  switch (argument.type) {
    case 'insert_block':
      break;
    case 'insert_prop':
      break;
    case 'insert_update_prop':
      break;
    case 'update_previds':
      break;
    case 'update_subgraph':
      break;
  }
}
async function cfgToDot(graph: CFGState): Promise<string> {
  const nodes = graph.nodes;
  let dotString = 'digraph CFG {\n';
  dotString += '  rankdir=TB;\n';
  dotString += '  node [shape=box, style=filled, fontname="Arial"];\n\n';

  // Add nodes
  for (const [id, node] of nodes.entries()) {
    let label = '';
    let color = 'white'; // Default color
    const newId = id + 2;
    switch (node.type) {
      case 'start':
        label = 'Start';
        color = '#90EE90'; // Light green
        break;
      case 'exit':
        label = 'Exit';
        color = '#A9A9A9'; // dark grey
        break;
      case 'exception-exit':
        label = 'Exception Exit';
        color = '#FF6347'; // Tomato
        break;
      case 'block':
        label = `Block ${id}\n${node.sequences.map((s) => s.value).join('\n')}`;
        break;
      default:
    }

    dotString += `  node${newId} [label="${label}", fillcolor="${color}"];\n`;
  }

  dotString += '\n  // Edges\n';

  // Add edges
  for (const [id, node] of nodes.entries()) {
    for (const nextId of node.nextIds) {
      dotString += `  node${id + 2} -> node${nextId + 2} [color="#666666"];\n`;
    }
  }

  dotString += '}\n';
  return dotString;
}

async function generatePNG(
  dotContent: string,
  outputPath: string
): Promise<void> {
  try {
    const tempDotFile = 'temp_graph.dot';
    await writeFile(tempDotFile, dotContent, 'utf8');

    const execAsync = promisify(exec);
    await execAsync(`dot -Tpng ${tempDotFile} -o ${outputPath}`);

    await execAsync(`rm ${tempDotFile}`);

    console.log(`Successfully generated PNG at ${outputPath}`);
  } catch (error) {
    console.error('Error generating PNG:', error);
    throw error;
  }
}

// Example usage
async function main() {
  const code2 = `
function example() {
if(a) {b};
c;
d;
e;
}
  `;
  const code3 = `
function example() {
if(a) {} else if(b){}else c;
}
  `;
  const code4 = `
function example() {
if(a){}else if(b){}else if(c){}else d;
}
  `;

  for await (const c of [
    [code2, 'cfg2'],
    [code3, 'cfg3'],
    [code4, 'cfg4'],
  ]) {
    const [code, filename] = c;
    try {
      const ast = acorn.parse(code, { ecmaVersion: 2020 });
      const functionBody = (ast.body[0] as acorn.FunctionDeclaration).body;
      const graph = extractCFG(functionBody);
      const dotContent = await cfgToDot(graph);

      await writeFile(`${filename}.dot`, dotContent, 'utf8');

      await generatePNG(dotContent, `${filename}.png`);
    } catch (error) {
      console.error('Error in main:', error);
    }
  }
}

if (require.main === module) {
  main().catch(console.error);
}
