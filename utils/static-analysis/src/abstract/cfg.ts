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
  prevId,
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
      console.log('ReturnStatement', cfgState.prevIds);
      connect(cfgState.endId);
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
      addCondition(node.test);
      let thenprev = visitWithContext(node.consequent, true);
      let elseprev = node.alternate
        ? visitWithContext(node.alternate, false)
        : cfgState.prevIds.filter(([, context]) => !context);
      cfgState.prevIds = thenprev.concat(elseprev);
      break;
    case 'SwitchStatement':
    case 'ThrowStatement':
    case 'TryStatement':
      break;
    case 'WhileStatement':
      const whileLoop = addLoop();
      addCondition(node.test);
      let whileprevIds = [...cfgState.prevIds];
      cfgState.prevIds = cfgState.prevIds.filter(([, context]) => context);
      const whileLoopstack = loopVisitor(node.body);
      cfgState.prevIds = whileLoopstack.continue.concat(cfgState.prevIds);
      connect(whileLoop.id);
      cfgState.prevIds = whileLoopstack.break.concat(
        whileprevIds.filter(([, context]) => !context)
      );
      break;
    case 'DoWhileStatement':
      const doLoop = addLoop();
      const doLoopstack = loopVisitor(node.body);
      addCondition(node.test);
      const doprevIds = [...cfgState.prevIds];
      cfgState.prevIds = cfgState.prevIds.filter(([, context]) => context);
      cfgState.prevIds = doLoopstack.continue.concat(cfgState.prevIds);
      connect(doLoop.id);
      cfgState.prevIds = doLoopstack.break.concat(
        doprevIds.filter(([, context]) => !context)
      );
      break;
    case 'ForStatement':
      node.init && visit(node.init);
      const forLoop = addLoop();
      node.test && addCondition(node.test);
      let forprevIds = [...cfgState.prevIds];
      cfgState.prevIds = cfgState.prevIds.filter(([, context]) => context);
      const forLoopstack = loopVisitor(node.body);
      node.update && visit(node.update);
      cfgState.prevIds = forLoopstack.continue.concat(cfgState.prevIds);
      connect(forLoop.id);
      cfgState.prevIds = forLoopstack.break.concat(
        forprevIds.filter(([, context]) => !context)
      );
      break;

    case 'ForInStatement':
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
      addCondition(node.left);
      if (node.operator === '&&') {
        const thenprev = visitWithContext(node.right, true);
        const elseprev = cfgState.prevIds.filter(([, context]) => !context);
        cfgState.prevIds = thenprev.concat(elseprev);
      } else {
        const thenprev = cfgState.prevIds.filter(([, context]) => context);
        const elseprev = visitWithContext(node.right, false);
        cfgState.prevIds = thenprev.concat(elseprev);
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
      addCondition(node.test);
      const thencondprev = visitWithContext(node.consequent, true);
      const elsecondprev = visitWithContext(node.alternate, false);
      cfgState.prevIds = thencondprev.concat(elsecondprev);
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

function extractCFG(node: acorn.AnyNode): CFGState {
  const start: CFGNode = { id: 0, type: 'start' };
  cfgState = {
    currentId: 1,
    prevIds: [[start, true]],
    nodes: new Map<number, CFGNode>([
      [0, start],
      [-1, { type: 'exit', id: -1 }],
      [-2, { type: 'exception-exit', id: -2 }],
    ]),
    context: true,
    loopStack: [],
    endId: -1,
    exceptionId: -2,
  };
  visit(node);
  connect(cfgState.endId);
  return cfgState;
}
// utils -------------------------------------------------------------------------------------------

function createNode(
  type: 'start' | 'exit' | 'exception-exit' | 'condition' | 'block' | 'loop'
): CFGNode {
  const id = cfgState.currentId++;
  const node: CFGNode = {
    type: type,
    id,
  };
  cfgState.nodes.set(id, node);
  return node;
}

function connect(to: number) {
  cfgState.prevIds.forEach(([node, context]) => {
    switch (node.type) {
      case 'condition':
        if (context) node.then = to;
        else node.else = to;
        break;
      case 'block':
      case 'loop':
      case 'start':
        if (node.next !== undefined)
          throw new Error('Node has already been connected');
        node.next = to;
        break;
    }
  });
}
function connect_test(to: number) {
  cfgState.prevIds.forEach(([node]) => {
    switch (node.type) {
      case 'block':
      case 'loop':
      case 'start':
        if (node.next) throw new Error('Block has already been connected');
        node.next = to;
        cfgState.prevIds = cfgState.prevIds.filter(([n]) => n.id !== node.id);
        break;
      default:
        break;
    }
  });
}

function addCondition(node: acorn.AnyNode) {
  visit(node);
  const condition = createNode('condition');
  connect_test(condition.id);
  cfgState.prevIds = [
    ...cfgState.prevIds,
    [condition, true],
    [condition, false],
  ];
}
function addLoop(): CFGNode {
  const loop = createNode('loop');
  connect_test(loop.id);
  cfgState.prevIds = [[loop, true]];
  return loop;
}
function visitWithContext(node: acorn.AnyNode, context: boolean): prevId[] {
  const stateBackup = {
    prevIds: [...cfgState.prevIds],
    context: cfgState.context,
  };

  cfgState.prevIds = cfgState.prevIds.filter(([, c]) => c === context);
  cfgState.context = context;

  visit(node);
  const result = cfgState.prevIds;
  cfgState.prevIds = stateBackup.prevIds;
  cfgState.context = stateBackup.context;
  return result;
}
function loopVisitor(node: acorn.AnyNode) {
  cfgState.loopStack.push({ break: [], continue: [] });
  visit(node);
  const loop = cfgState.loopStack.pop();
  if (!loop) throw new Error('Loop stack is empty');
  return loop;
}
function insertSequence(value: string, type: 'prop' | 'update_prop') {
  const block = createNode('block');
  connect(block.id);
  cfgState.prevIds = [[block, true]];
  const node = cfgState.nodes.get(block.id);
  if (node && node.type === 'block') {
    if (!node.sequences) node.sequences = [];
    node.sequences.push({ type, value });
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
      case 'loop':
        label = `Loop ${id}`;
        color = '#87CEFA'; // Light sky blue
        break;
      case 'condition':
        label = `Condition ${id}`;
        color = '#FFD700'; // Gold
        break;
      case 'block':
        label = `Block ${id}\n${node.sequences
          ?.map((s) => s.value)
          .join('\n')}`;
        break;
      default:
    }

    dotString += `  node${newId} [label="${label}", fillcolor="${color}"];\n`;
  }

  dotString += '\n  // Edges\n';

  // Add edges
  for (const [id, node] of nodes.entries()) {
    const newId = id + 2;
    switch (node.type) {
      case 'start':
        if (node.next !== undefined) {
          dotString += `  node${newId} -> node${node.next + 2};\n`;
        }
        break;
      case 'exit':
      case 'exception-exit':
        break;
      case 'loop':
        if (node.next !== undefined) {
          dotString += `  node${newId} -> node${node.next + 2};\n`;
        }
        break;
      case 'condition':
        if (node.then !== undefined) {
          dotString += `  node${newId} -> node${
            node.then + 2
          } [label="true"];\n`;
        }
        if (node.else !== undefined) {
          dotString += `  node${newId} -> node${
            node.else + 2
          } [label="false"];\n`;
        }
        break;
      case 'block':
        if (node.next !== undefined) {
          dotString += `  node${newId} -> node${node.next + 2};\n`;
        }
        break;
      case 'loop':
        if (node.next !== undefined) {
          dotString += `  node${newId} -> node${node.next + 2};\n`;
        }
        break;
      default:
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
