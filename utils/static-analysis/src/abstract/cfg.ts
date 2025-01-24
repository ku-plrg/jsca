import * as acorn from 'acorn';
import { exec } from 'child_process';
import { writeFile } from 'fs/promises';
import { promisify } from 'util';
import {
  CFG,
  CFGArgument,
  CFGNode,
  CFGState,
  Function,
  Subgraph,
} from '../utils/types';

let cfgState: CFGState;

const SKIP_BUILTIN = ['Math', 'String', 'Number'];

function visit(node: acorn.AnyNode): void {
  switch (node.type) {
    case 'ExpressionStatement':
      visit(node.expression);
      break;
    case 'BlockStatement':
      node.body.forEach((body) => {
        visit(body);
      });
      break;
    case 'EmptyStatement':
    case 'DebuggerStatement':
    case 'WithStatement':
      break;
    case 'ReturnStatement':
      node.argument && visit(node.argument);
      mergePrev(cfgState.prevIds, cfgState.endId);
      cfgState.prevIds = [];
      break;
    case 'LabeledStatement':
      break;
    case 'BreakStatement':
      const loop_break = cfgState.loopStack.pop();
      if (!loop_break) return;
      loop_break.break.push(...cfgState.prevIds);
      cfgState.loopStack.push(loop_break);
      cfgState.prevIds = [];
      break;
    case 'ContinueStatement':
      const loop_continue = cfgState.loopStack.pop();
      if (!loop_continue) return;
      loop_continue.continue.push(...cfgState.prevIds);
      cfgState.loopStack.push(loop_continue);
      cfgState.prevIds = [];
      break;
    case 'IfStatement':
      const ifSubgraph = createSubgraph(node.test);
      mergePrev(cfgState.prevIds, ifSubgraph.start);
      cfgState.prevIds = ifSubgraph.then;
      visitWithContext(node.consequent, true);
      let thenPrevids = [...cfgState.prevIds];
      cfgState.prevIds = ifSubgraph.else;
      node.alternate && visitWithContext(node.alternate, false);
      cfgState.prevIds = thenPrevids.concat(cfgState.prevIds);
      break;
    case 'SwitchStatement':
    case 'ThrowStatement':
    case 'TryStatement':
      break;
    case 'WhileStatement':
      newBlock(true);
      const whileSubgraph = createSubgraph(node.test);
      mergePrev(cfgState.prevIds, whileSubgraph.start);
      const whileLoop = loopVisitor(node.body);
      mergePrev(
        whileLoop.continue.concat(cfgState.prevIds),
        whileSubgraph.start
      );
      cfgState.prevIds = whileLoop.break.concat(whileSubgraph.else);
      break;
    case 'DoWhileStatement':
      newBlock(true);
      const doWhileLoop = loopVisitor(node.body);
      const doWhileSubgraph = createSubgraph(node.test);
      mergePrev(cfgState.prevIds, doWhileSubgraph.start);
      mergePrev(
        doWhileLoop.continue.concat(doWhileSubgraph.then),
        doWhileSubgraph.start
      );
      cfgState.prevIds = doWhileLoop.break.concat(doWhileSubgraph.else);
      break;
    case 'ForStatement':
      node.init && visit(node.init);
      newBlock(true);
      const forprevIds = [...cfgState.prevIds];
      let forSubgraph;
      if (node.test) {
        forSubgraph = createSubgraph(node.test);
        mergePrev(cfgState.prevIds, forSubgraph.start);
        cfgState.prevIds = forSubgraph.then;
      }
      const forLoop = loopVisitor(node.body);
      node.update && visit(node.update);
      mergePrev(
        forLoop.continue.concat(cfgState.prevIds),
        forSubgraph?.start ?? forprevIds[0]
      );
      cfgState.prevIds = forLoop.break.concat(forSubgraph?.else ?? []);

      break;

    case 'ForInStatement':
      node.left && visit(node.left);
      visit(node.right);
      newBlock(true);
      const forinprevIds = [...cfgState.prevIds];
      const forInLoop = loopVisitor(node.body);
      mergePrev(forInLoop.continue.concat(cfgState.prevIds), forinprevIds[0]);
      cfgState.prevIds = forInLoop.break.concat(forinprevIds);
      break;
    case 'ForOfStatement':
    case 'FunctionDeclaration':
      break;
    case 'VariableDeclaration':
      const declarations = node.declarations.filter(
        (decl) => decl.init !== null
      );
      declarations.forEach((decl) => {
        visit(decl.init as acorn.Expression);
      });
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
        node.left.property.type === 'Identifier' &&
        !node.left.computed
      ) {
        insertSequence(node.left.property.name, 'update_prop');
      }
      break;
    case 'LogicalExpression':
      const leftSubgraph = createSubgraph(node.left);
      console.log('left subgraph', leftSubgraph);
      if (node.operator === '&&') {
        cfgState.prevIds = leftSubgraph.then;
        visitWithContext(node.right, true);
        cfgState.prevIds = cfgState.prevIds.concat(leftSubgraph.else);
      } else {
        cfgState.prevIds = leftSubgraph.else;
        visitWithContext(node.right, false);
        cfgState.prevIds = cfgState.prevIds.concat(leftSubgraph.then);
      }
      break;
    case 'MemberExpression':
      if (
        node.object.type === 'Identifier' &&
        SKIP_BUILTIN.includes(node.object.name)
      ) {
        break;
      }
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
      const testSubgraph = createSubgraph(node.test);
      cfgState.prevIds = testSubgraph.then;
      visitWithContext(node.consequent, true);
      let thenPrevIds = [...cfgState.prevIds];
      cfgState.prevIds = testSubgraph.else;
      visitWithContext(node.alternate, false);
      cfgState.prevIds = thenPrevIds.concat(cfgState.prevIds); //cfgState.prevIds.concat(consequent);
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

// subgraphVisitor -------------------------------------------------------------------------------------------

function subgraphBuilder(cfgNode: CFGNode, visited = new Set<number>()) {
  console.log('csl', cfgState.subgraph.length);
  const subgraph = cfgState.subgraph.at(-1);
  if (!subgraph) throw new Error('Subgraph is empty');
  if (visited.has(cfgNode.id)) return;
  console.log(
    '[before] subgraph of ',
    cfgNode.id,
    JSON.stringify(subgraph, null, 2)
  );
  visited.add(cfgNode.id);
  cfgNode.nextIds.forEach((nextId) => {
    const nextNode = cfgState.nodes.get(nextId);
    if (!nextNode) throw new Error('Next node is not found');
    switch (nextNode.type) {
      case 'block':
        if (nextNode.nextIds.length === 0) {
          subgraph.then.push(nextId);
          subgraph.else.push(nextId);
        } else {
          subgraphBuilder(nextNode, visited);
        }
        break;
      case 'condition':
        console.log(cfgNode.id, nextNode.id, nextNode.then, nextNode.else);
        if (nextNode.else.length === 0 && nextNode.then.length === 0) {
        } else if (nextNode.then.length === 0) {
          subgraph.then.push(nextId);
        } else if (nextNode.else.length === 0) {
          subgraph.else.push(nextId);
        }

        subgraphBuilder(nextNode, visited);
        break;
      default:
        break;
    }
  });
  cfgState.subgraph.pop();
  cfgState.subgraph.push(subgraph);
  console.log(
    '[after ] subgraph of ',
    cfgNode.id,
    JSON.stringify(subgraph, null, 2)
  );
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
    subgraph: [],
    context: true,
    loopStack: [],
    endId: -1,
    exceptionId: -2,
  };
  visit(node);
  mergePrev(cfgState.prevIds, cfgState.endId);
  return cfgState;
}
// utils -------------------------------------------------------------------------------------------

function createNode(type: 'condition' | 'block'): number {
  const id = cfgState.currentId++;
  const nextIds: number[] = [];
  if (type === 'condition') {
    cfgState.nodes.set(id, {
      type: 'condition',
      id,
      then: [],
      else: [],
      nextIds,
    });
  } else {
    cfgState.nodes.set(id, {
      type: 'block',
      id,
      nextIds,
      sequences: [],
    });
  }
  return id;
}
function addEdge(from: number, to: number): void {
  console.log('addEdge', from, '->', to);
  if (from === to) return;
  const fromNode = cfgState.nodes.get(from);
  const toNode = cfgState.nodes.get(to);
  if (fromNode && toNode) {
    if (!fromNode.nextIds.includes(to)) {
      fromNode.nextIds.push(to);
    }
    if (fromNode.type === 'condition') {
      if (cfgState.context) {
        fromNode.then.push(to);
      } else {
        fromNode.else.push(to);
      }
    }
  }
}

function mergePrev(prevIds: number[], currentId: number) {
  prevIds.forEach((prevId) => {
    addEdge(prevId, currentId);
  });
}
function newBlock(loop = false) {
  const create =
    loop ||
    !(
      cfgState.prevIds.length === 1 &&
      cfgState.nodes.get(cfgState.prevIds[0])?.type === 'block'
    );
  if (create) {
    const nodeId = createNode('block');
    mergePrev(cfgState.prevIds, nodeId);
    cfgState.prevIds = [nodeId];
  }
}

function stripCond(): Subgraph {
  const subgraph = cfgState.subgraph.pop();
  if (!subgraph) throw new Error('Subgraph is empty');
  if (subgraph.then.length === 0) subgraph.then.push(subgraph.start);
  if (subgraph.else.length === 0) subgraph.else.push(subgraph.start);
  const condNode = createNode('condition');
  const thenElseNodes = subgraph.then.filter((id) =>
    subgraph.else.includes(id)
  );
  console.log('strip cond will call addEdge with subgraph', subgraph);
  thenElseNodes.forEach((id) => addEdge(id, condNode));
  console.log('strip cond addEdge finished');
  subgraph.then = subgraph.then.filter((id) => !thenElseNodes.includes(id));
  subgraph.else = subgraph.else.filter((id) => !thenElseNodes.includes(id));
  subgraph.then.push(condNode);
  subgraph.else.push(condNode);
  return subgraph;
}

function createSubgraph(node: acorn.Expression): Subgraph {
  console.log(
    'create subgraph of ',
    node.type,
    (node as any).property?.name ?? ''
  );
  const prevIds = [...cfgState.prevIds];
  newBlock();
  const subgraphprevIds = [...cfgState.prevIds];
  cfgState.subgraph.push({
    start: subgraphprevIds[0],
    then: [],
    else: [],
  });
  //console.log('cfgstate before visit', cfgState);
  visit(node);
  //console.log('cfgstate after visit', cfgState);
  const subgraphstart = cfgState.nodes.get(subgraphprevIds[0]);
  if (!subgraphstart) throw new Error('No subgraph start');
  subgraphBuilder(subgraphstart);
  const subgraph = stripCond();
  cfgState.prevIds = prevIds;
  console.log(
    'finish creating subgraph of ',
    node.type,
    (node as any).property?.name ?? '',
    subgraph
  );
  return subgraph;
}
function visitWithContext(node: acorn.AnyNode, context: boolean) {
  const prevContext = cfgState.context;
  cfgState.context = context;
  visit(node);
  cfgState.context = prevContext;
}
function loopVisitor(node: acorn.AnyNode) {
  cfgState.loopStack.push({ break: [], continue: [] });
  visit(node);
  const loop = cfgState.loopStack.pop();
  if (!loop) throw new Error('Loop stack is empty');
  return loop;
}
function insertSequence(value: string, type: 'prop' | 'update_prop') {
  newBlock();
  const nodeId = cfgState.prevIds[0];
  const node = cfgState.nodes.get(nodeId);
  if (node && node.type === 'block') {
    node.sequences.push({ type: type, value });
  } else throw new Error('Node is not a block');
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

export function cfgToDot(nodes: Map<number, CFGNode>): string {
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
      case 'condition':
        label = `Condition ${id}`;
        color = '#FFD700'; // Gold
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

export async function generatePNG(
  dotContent: string,
  outputPath: string
): Promise<void> {
  try {
    const tempDotFile = `${outputPath}_temp.dot`;
    await writeFile(tempDotFile, dotContent, 'utf8');

    const execAsync = promisify(exec);
    await execAsync(`dot -Tpng ${tempDotFile} -o ${outputPath}.png`);

    await execAsync(`rm ${tempDotFile}`);

    console.log(`Successfully generated PNG at ${outputPath}.png`);
  } catch (error) {
    console.error('Error generating PNG:', error);
    throw error;
  }
}

// Example usage
async function main() {
  const code2 = `
function example() {
  Symbol('JSCA_194_211');
  // babel-minify (2)
  for (_.a; _.b && _.c; _.d);
}
  `;
  const code3 = `
function example() {
  Symbol('JSCA_194_211');
  // original (3)
    for (_.a; _.b; _.d) {
      if (_.c) {
        break;
      }
    }
}
  `;
  const code4 = `
function example() {
  Symbol('JSCA_194_211');
  // custom code (4)
  for (_.a; ; _.d) {
    if(_.b || _.c) break;
  }
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
      const dotContent = cfgToDot(graph.nodes);

      await writeFile(`${filename}.dot`, dotContent, 'utf8');

      await generatePNG(dotContent, `${filename}`);
    } catch (error) {
      console.error('Error in main:', error);
    }
  }
}

if (require.main === module) {
  main().catch(console.error);
}

function cfg(functions: Function[]): CFG[] {
  return functions.map((func) => {
    const ast = func.body;
    const graph = extractCFG(ast);

    return {
      id: func.id,
      name: func.name,
      type: 'cfg',
      nodes: graph.nodes,
    };
  });
}

export default cfg;
