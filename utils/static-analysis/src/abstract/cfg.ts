import * as acorn from 'acorn';
import { exec } from 'child_process';
import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';
import { promisify } from 'util';
import { CFG, CFGNode, CFGState, Function, prevId } from '../utils/types';

let cfgState: CFGState;

const SKIP_BUILTIN: string[] = ['Math', 'String', 'Number', 'Object'];
const IGNORE_TYPEOF = true;

function visit(node: acorn.AnyNode): void {
  switch (node.type) {
    case 'ExpressionStatement':
      visit(node.expression);
      break;
    case 'BlockStatement':
      node.body.forEach(visit);
      break;
    case 'EmptyStatement':
    case 'DebuggerStatement':
    case 'WithStatement':
      break;
    case 'ReturnStatement':
      node.argument && visit(node.argument);
      connect_end();
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
      addCond(node.test);
      let thenprev = condVisitor(node.consequent, true);
      let elseprev = node.alternate
        ? condVisitor(node.alternate, false)
        : cfgState.prevIds.filter(([, context]) => !context);
      cfgState.prevIds = thenprev.concat(elseprev);
      break;
    case 'SwitchStatement':
      break;
    case 'ThrowStatement':
      visit(node.argument);
      connect(cfgState.exceptionId);
      cfgState.prevIds = [];
      break;
    case 'TryStatement':
      visit(node.block);
      node.handler && visit(node.handler);
      node.finalizer && visit(node.finalizer);
      break;
    case 'WhileStatement':
      const whileLoop = addLoop();
      addCond(node.test);
      const whileprevIds = [...cfgState.prevIds];
      cfgState.prevIds = cfgState.prevIds.filter(([, context]) => context);
      const whileLoopstack = loopVisitor(node.body);
      endLoop(whileLoopstack, whileLoop.id, whileprevIds);
      break;
    case 'DoWhileStatement':
      const doLoop = addLoop();
      const doLoopstack = loopVisitor(node.body);
      addCond(node.test);
      const doprevIds = [...cfgState.prevIds];
      cfgState.prevIds = cfgState.prevIds.filter(([, context]) => context);
      endLoop(doLoopstack, doLoop.id, doprevIds);
      break;
    case 'ForStatement':
      node.init && visit(node.init);
      const forLoop = addLoop();
      node.test && addCond(node.test);
      const forprevIds = [...cfgState.prevIds];
      cfgState.prevIds = cfgState.prevIds.filter(([, context]) => context);
      const forLoopstack = loopVisitor(node.body);
      node.update && visit(node.update);
      endLoop(forLoopstack, forLoop.id, forprevIds);
      break;
    case 'ForInStatement':
      visit(node.left);
      let forInLoop;
      if (node.right.type === 'SequenceExpression') {
        const last = node.right.expressions.pop();
        if (!last) throw new Error('Sequence expression is empty');
        node.right.expressions.forEach(visit);
        forInLoop = addLoop();
        addCond(last); // condVisitor를 사용하는게 나을 수 있음
      } else {
        forInLoop = addLoop();
        addCond(node.right);
      }
      const forInprevIds = [...cfgState.prevIds];
      cfgState.prevIds = cfgState.prevIds.filter(([, context]) => context);
      const forInLoopstack = loopVisitor(node.body);
      endLoop(forInLoopstack, forInLoop.id, forInprevIds);
      break;
    case 'ForOfStatement':
    case 'FunctionDeclaration':
      break;
    case 'VariableDeclaration':
      const declarations = node.declarations.filter(
        (decl) => decl.init !== null
      );
      declarations.forEach((decl) => {
        visitExp(decl.init as acorn.Expression);
      });
      break;
    case 'ClassDeclaration':
    case 'Identifier':
      convert_mergeable();
      break;
    case 'Literal':
      // if (typeof node.value === 'string' && !node.value.startsWith('JSCA_')) {
      //   cfgState.literals.push(node.value);
      // }
      // if (node.regex) {
      //   cfgState.literals.push(node.regex.pattern);
      //   cfgState.literals.push(node.regex.flags);
      // }
      convert_mergeable();
      break;
    case 'ThisExpression':
      convert_mergeable();
      break;
    case 'ArrayExpression':
      const elements = node.elements.filter((el) => el !== null);
      elements.forEach(visitExp);
      break;
    case 'ObjectExpression':
      const properties = node.properties.filter(
        (prop) => prop.type === 'Property'
      );
      properties.forEach((prop) => {
        if (prop.key.type === 'Identifier') {
          insertSequence(prop.key.name, 'prop');
        }
        if (prop.key.type === 'Literal' && typeof prop.key.value === 'string') {
          insertSequence(prop.key.value, 'prop');
        }
        visitExp(prop.value);
      });
      break;
    case 'FunctionExpression':
      break;
    case 'UnaryExpression':
      if (node.operator === '!') {
        visit(node.argument);
        convert_context();
      } else visitExp(node.argument);

      break;
    case 'UpdateExpression':
      visitExp(node.argument);
      break;
    case 'BinaryExpression':
      visitExp(node.left);
      visitExp(node.right);
      // if (node.operator === '!==') {
      //   convert_context();
      // }
      break;
    case 'AssignmentExpression':
      visitExp(node.left);
      visitExp(node.right);
      if (
        node.left.type === 'MemberExpression' &&
        node.left.property.type === 'Identifier' &&
        !node.left.computed
      ) {
        insertSequence(node.left.property.name, 'update_prop');
      }
      break;
    case 'LogicalExpression':
      addCond(node.left);
      if (node.operator === '&&') {
        const thenprev = condVisitor(node.right, true);
        const elseprev = cfgState.prevIds.filter(([, context]) => !context);
        cfgState.prevIds = thenprev.concat(elseprev);
      } else {
        const elseprev = condVisitor(node.right, false);
        const thenprev = cfgState.prevIds.filter(([, context]) => context);
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
      visitExp(node.object);
      if (!node.computed && node.property.type === 'Identifier') {
        insertSequence(node.property.name, 'prop');
        visitExp(node.property);
      }
      if (node.computed && node.property.type !== 'Identifier') {
        if (node.property.type === 'Literal') {
          if (typeof node.property.value === 'string')
            insertSequence(node.property.value, 'prop');
        }
        visitExp(node.property);
      }
      break;
    case 'ConditionalExpression':
      if (is_typeof(node)) break;
      addCond(node.test);
      const thencondprev = condVisitor(node.consequent, true);
      const elsecondprev = condVisitor(node.alternate, false);
      cfgState.prevIds = thencondprev.concat(elsecondprev);
      break;
    case 'CallExpression':
      visitExp(node.callee);
      //insertSequence(`callexpr_${node.arguments.length}`, 'prop');
      node.arguments.forEach(visitExp);
      break;
    case 'NewExpression':
      visitExp(node.callee);
      node.arguments.forEach(visitExp);
      break;
    case 'SequenceExpression':
      const last = node.expressions.at(-1);
      if (!last) throw new Error('Sequence expression is empty');
      node.expressions.slice(0, -1).forEach(visitExp);
      visit(last);
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
    prevIds: [[start]],
    nodes: new Map<number, CFGNode>([
      [0, start],
      [-1, { type: 'exit', id: -1 }],
      [-2, { type: 'exception-exit', id: -2 }],
    ]),
    loopStack: [],
    endId: -1,
    exceptionId: -2,
    literals: [],
  };
  visit(node);
  connect_end();
  return cfgState;
}

// utils -------------------------------------------------------------------------------------------

function is_typeof(node: acorn.ConditionalExpression): boolean {
  return (
    node.consequent.type === 'Literal' &&
    node.consequent.value === 'undefined' &&
    node.test.type === 'BinaryExpression' &&
    node.test.operator === '===' &&
    node.test.left.type === 'UnaryExpression' &&
    node.test.left.operator === 'void' &&
    node.test.left.argument.type === 'Literal' &&
    node.test.left.argument.value === 0 &&
    IGNORE_TYPEOF
  );
}

function visitExp(node: acorn.AnyNode) {
  visit(node);
  convert_mergeable();
}
function connect_end() {
  connect(cfgState.endId);
  cfgState.prevIds = [];
}
function convert_mergeable() {
  cfgState.prevIds = cfgState.prevIds.map(([node, context]) => {
    if (node.type === 'condition') {
      return [node, context, true];
    }
    return [node, context];
  });
}
function convert_context() {
  const duplicateIds = cfgState.prevIds
    .map(([node]) => node.id)
    .filter((id, index, array) => array.filter((x) => x === id).length === 2);
  cfgState.prevIds = cfgState.prevIds.map(([node, context, mergeable]) => {
    if (node.type === 'condition') {
      if (duplicateIds.includes(node.id)) {
        return [node, !context, mergeable];
      } else if (!mergeable) {
        return [node, !context, mergeable];
      }
    }
    return [node, context, mergeable];
  });
}
function addCond(node: acorn.AnyNode) {
  visit(node);
  const condition = createNode('condition');
  connect_test(condition.id);
  cfgState.prevIds = [
    ...cfgState.prevIds,
    [condition, true, false],
    [condition, false, false],
  ];
}
function addLoop(): CFGNode {
  const loop = createNode('loop');
  connect(loop.id);
  cfgState.prevIds = [[loop, true]];
  return loop;
}
function condVisitor(node: acorn.AnyNode, context: boolean): prevId[] {
  const prevIds = [...cfgState.prevIds];
  cfgState.prevIds = cfgState.prevIds.filter(([, c]) => c === context);
  visit(node);
  const result = cfgState.prevIds;
  cfgState.prevIds = prevIds;
  return result;
}
function loopVisitor(node: acorn.AnyNode) {
  cfgState.loopStack.push({ break: [], continue: [] });
  visit(node);
  const loop = cfgState.loopStack.pop();
  if (!loop) throw new Error('Loop stack is empty');
  return loop;
}
function endLoop(
  loop: { break: prevId[]; continue: prevId[] },
  id: number,
  prevIds: prevId[]
) {
  cfgState.prevIds = loop.continue.concat(cfgState.prevIds);
  connect(id);
  cfgState.prevIds = loop.break.concat(
    prevIds.filter(([, context]) => !context)
  );
}
function insertSequence(value: string, type: 'prop' | 'update_prop') {
  if (
    cfgState.prevIds.length === 1 &&
    cfgState.prevIds[0][0].type === 'block'
  ) {
    cfgState.prevIds[0][0].sequences?.push({ type, value });
    return;
  }
  const block = createNode('block');
  connect(block.id);
  cfgState.prevIds = [[block]];
  const node = cfgState.nodes.get(block.id);
  if (node && node.type === 'block') {
    node.sequences = [{ type, value }];
  } else throw new Error('Node is not a block');
}

// helper functions -------------------------------------------------------------------------------------------
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
        if (node.then && node.else) throw new Error('Condition has 2 branches');
        if (context) {
          if (node.then) {
            node.else = node.then;
          }
          node.then = to;
        } else {
          if (node.else) {
            node.then = node.else;
          }
          node.else = to;
        }
        break;
      case 'block':
      case 'loop':
      case 'start':
        if (node.next) throw new Error('Node has already been connected');
        node.next = to;
        break;
    }
  });
}
function connect_test(to: number) {
  cfgState.prevIds.forEach(([node, context, mergeable]) => {
    switch (node.type) {
      case 'block':
      case 'loop':
      case 'start':
        if (node.next) throw new Error('Block has already been connected');
        node.next = to;
        cfgState.prevIds = cfgState.prevIds.filter(([n]) => n.id !== node.id);
        break;
      case 'condition':
        if (mergeable) {
          if (node.then && node.else)
            throw new Error('Condition has 2 branches');
          if (context) {
            if (node.then) node.else = node.then;
            node.then = to;
          } else {
            if (node.else) node.then = node.else;
            node.else = to;
          }
          cfgState.prevIds = cfgState.prevIds.filter(
            ([n, c]) => !(n.id === node.id && !c === !context)
          );
        }
        break;
      default:
        break;
    }
  });
}

//-----------------------------------------------------------------------------------------------------
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
        label = `Block ${id}\n${
          node.sequences
            ? node.sequences
                .map((s) =>
                  s.type == 'update_prop' ? `${s.value} = _` : s.value
                )
                .join('\n')
            : ''
        }`;
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

    if (existsSync(tempDotFile)) await execAsync(`rm ${tempDotFile}`);

    console.log(`Successfully generated PNG at ${outputPath}.png`);
  } catch (error: any) {
    console.error('Error generating PNG:');
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
      literals: graph.literals,
    };
  });
}

export default cfg;
