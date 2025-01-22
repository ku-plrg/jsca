import * as acorn from 'acorn';
import { CFG, CFGState, CFGArgument, Subgraph } from '../utils/types';
import { writeFile } from 'fs/promises';
import { exec } from 'child_process';
import { promisify } from 'util';
import { stat } from 'fs';

let cfgState: CFGState;

function visit(node: acorn.AnyNode): void {
  switch (node.type) {
    case 'ExpressionStatement':
      visit(node.expression);
      break;
    case 'BlockStatement':
      node.body.forEach((body) => {
        newBlock(cfgState);
        visit(body);
      });

      break;
    case 'EmptyStatement':
      break;
    case 'DebuggerStatement':
      break;
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
    case 'BreakStatement':
    case 'ContinueStatement':
      break;
    case 'IfStatement':
      const ifprevIds = cfgState.prevIds;
      subgraphVisitor(node.test);
      const subgraph = cfgState.subgraphstack.pop();
      if (!subgraph) return;
      mergePrev(ifprevIds, subgraph.start);
      cfgState.prevIds = subgraph.then;
      newCondBlock(cfgState);
      node.consequent && visit(node.consequent);
      let thenPrevids = cfgState.prevIds;
      cfgState.prevIds = subgraph.else;
      newCondBlock(cfgState);
      node.alternate && visit(node.alternate);
      cfgState.prevIds = thenPrevids.concat(cfgState.prevIds);
      break;
    case 'SwitchStatement':
    case 'ThrowStatement':
    case 'TryStatement':
      break;
    case 'WhileStatement':
      subgraphVisitor(node.test);
      visit(node.body);
      break;
    case 'DoWhileStatement':
      visit(node.body);
      subgraphVisitor(node.test);
      break;
    case 'ForStatement':
      node.init && visit(node.init);
      node.test && subgraphVisitor(node.test);
      node.update && visit(node.update);
      visit(node.body);
    case 'ForInStatement':
    case 'ForOfStatement':
    case 'FunctionDeclaration':
      break;
    case 'VariableDeclaration':
      node.declarations.forEach(visit);
      break;
    case 'ClassDeclaration':
      break;
    case 'Identifier':
      if (cfgState.prevIds.length === 1) {
        const _node = cfgState.nodes.get(cfgState.prevIds[0]);
        if (!_node || _node.type !== 'block') return;
        cfgState.nodes.set(cfgState.prevIds[0], {
          ..._node,
          sequences: [
            ..._node.sequences,
            { type: 'prop', value: `literal ${node.name}` },
          ],
        });
      } else {
        const nodeId = createNode(cfgState);
        mergePrev(cfgState.prevIds, nodeId);
        cfgState.nodes.set(nodeId, {
          type: 'block',
          id: nodeId,
          nextIds: [],
          sequences: [{ type: 'prop', value: 'literal' }],
        });
      }
      break;
    case 'Literal':
    case 'ThisExpression':
    case 'ArrayExpression':
    case 'ObjectExpression':
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
      break;
    case 'LogicalExpression':
      visit(node.left);
      visit(node.right);
      break;
    case 'MemberExpression':
      // visit(node.object);
      // if (node.computed && node.property.type === 'Identifier') {

      //   visit(node.property);
      // }
      // if (!node.computed && node.property.type !== 'Identifier') {
      //   visit(node.property);
      // }
      visit(node.object);
      visit(node.property);
      break;
    case 'ConditionalExpression':
      visit(node.test);
      visit(node.consequent);
      visit(node.alternate);
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
      if (cfgState.prevIds.length === 1) {
        const node = cfgState.nodes.get(cfgState.prevIds[0]);
        if (!node || node.type !== 'block') return;
        cfgState.nodes.set(cfgState.prevIds[0], {
          ...node,
          sequences: [
            ...node.sequences,
            { type: 'prop', value: `literal ${expr.name}` },
          ],
        });
        cfgState.subgraphstack.push({
          start: node.id,
          then: [node.id],
          else: [node.id],
        });
      } else {
        const nodeId = createNode(cfgState);
        mergePrev(cfgState.prevIds, nodeId);
        cfgState.nodes.set(nodeId, {
          type: 'block',
          id: nodeId,
          nextIds: [],
          sequences: [{ type: 'prop', value: 'literal' }],
        });
        cfgState.subgraphstack.push({
          start: nodeId,
          then: [nodeId],
          else: [nodeId],
        });
      }
      break;
    case 'Literal':
      break;
    case 'ThisExpression':
    case 'ArrayExpression':
    case 'ObjectExpression':
    case 'FunctionExpression':
      break;
    case 'UnaryExpression':
      subgraphVisitor(expr.argument);
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
    subgraphstack: [],
    loopStack: [],
    endId: -1,
    exceptionId: -2,
  };
  visit(node);
  mergePrev(cfgState.prevIds, cfgState.endId);
  return cfgState;
}
// utils -------------------------------------------------------------------------------------------

function createNode(state: CFGState): number {
  const id = state.currentId++;
  const nextIds: number[] = [];
  state.nodes.set(id, {
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
function newBlock(state: CFGState) {
  if (state.prevIds.length !== 1) {
    const nodeId = createNode(state);
    mergePrev(state.prevIds, nodeId);
    state.prevIds = [nodeId];
  }
}
function newCondBlock(state: CFGState) {
  const nodeId = createNode(state);
  mergePrev(state.prevIds, nodeId);
  state.prevIds = [nodeId];
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
        label = `Block ${id} ${node.sequences.map((s) => s.value).join('/')}`;
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
if(a) {} else return b;
c
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
