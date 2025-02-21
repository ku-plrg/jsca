import { exec } from 'child_process';
import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';
import { ESTree, parse } from 'meriyah';
import { RegExpLiteral } from 'meriyah/dist/src/estree';
import { promisify } from 'util';
import {
  CFG,
  CFGNode,
  CFGNodeBlock,
  CFGState,
  Function,
  PrevId,
  Subgraph,
  SubgraphCond,
  SubgraphNormal,
} from './utils/types';

let cfgState: CFGState;

const SKIP_BUILTIN: string[] = ['Math', 'String', 'Number', 'Object'];
const IGNORE_TYPEOF = true;
const WHILE_TRUE = true;

function visit(node: ESTree.Node): void {
  switch (node.type) {
    case 'ExpressionStatement':
      mergeSubgraph(createNormalSubgraph(node.expression));
      break;
    case 'BlockStatement':
      node.body.forEach(visit);
      break;
    case 'EmptyStatement':
    case 'DebuggerStatement':
    case 'WithStatement':
      break;
    case 'ReturnStatement':
      node.argument && mergeSubgraph(createNormalSubgraph(node.argument));
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
      const ifSubgraph = createCondSubgraph(node.test);
      connect(ifSubgraph.root.id);
      cfgState.prevIds = ifSubgraph.truthy;
      visit(node.consequent);
      const thenprev = cfgState.prevIds;
      cfgState.prevIds = ifSubgraph.falsy;
      node.alternate && visit(node.alternate);
      cfgState.prevIds = cfgState.prevIds.concat(thenprev);
      break;
    case 'SwitchStatement':
      break;
    case 'ThrowStatement':
      mergeSubgraph(createNormalSubgraph(node.argument));
      connect(cfgState.exceptionId);
      cfgState.prevIds = [];
      break;
    case 'TryStatement':
      visit(node.block);
      node.handler && visit(node.handler.body);
      node.finalizer && visit(node.finalizer);
      break;
    case 'WhileStatement':
      const whileLoop = addLoop();
      const testSubgraph = createCondSubgraph(node.test);
      connect(testSubgraph.root.id, [[whileLoop.id]]);
      const whileprevIds = [...cfgState.prevIds];
      cfgState.prevIds = testSubgraph.truthy;
      //cfgState.prevIds = cfgState.prevIds.filter(([, context]) => context);
      const whileLoopstack = loopVisitor(node.body);
      endLoop(whileLoopstack, whileLoop.id, whileprevIds);
      break;
    case 'DoWhileStatement':
      break;
    case 'ForStatement':
      node.init &&
        node.init.type !== 'VariableDeclaration' &&
        createNormalSubgraph(node.init);
      node.init && node.init.type === 'VariableDeclaration' && visit(node.init);
      const forLoop = addLoop();
      node.test && createCondSubgraph(node.test);
      const forprevIds = [...cfgState.prevIds];
      cfgState.prevIds = cfgState.prevIds.filter(([, context]) => context);
      const forLoopstack = loopVisitor(node.body);
      node.update && createNormalSubgraph(node.update);
      endLoop(forLoopstack, forLoop.id, forprevIds);
      break;
    case 'ForInStatement':
    case 'ForOfStatement':
    case 'FunctionDeclaration':
    case 'VariableDeclaration':
    case 'ClassDeclaration':
      break;
    case 'Identifier':
    case 'Literal':
    case 'ThisExpression':
    case 'ArrayExpression':
    case 'ObjectExpression':
    case 'FunctionExpression':
    case 'UnaryExpression':
    case 'UpdateExpression':
    case 'AssignmentExpression':
    case 'LogicalExpression':
    case 'MemberExpression':
    case 'ConditionalExpression':
    case 'CallExpression':
    case 'NewExpression':
    case 'SequenceExpression':
      mergeSubgraph(createNormalSubgraph(node));
      break;
    default:
      Object.keys(node).forEach((key) => {
        const value = (node as any)[key];
        if (value && typeof value === 'object') {
          if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
              if (value[i] && typeof value[i] === 'object') {
                visit(value[i]);
              }
            }
          } else {
            visit(value);
          }
        }
      });
      break;
  }
}

function createNormalSubgraph(node: ESTree.Expression): SubgraphNormal {
  switch (node.type) {
    case 'Identifier':
      return emptysubgrpah('normal') as SubgraphNormal;
    case 'Literal':
      // if (typeof node.value === 'string' && !node.value.startsWith('JSCA_')) {
      //   cfgState.literals.push(node.value);
      // }

      if ('regex' in node && 'pattern' in (node.regex as any)) {
        cfgState.literals.add(
          (node as RegExpLiteral).regex.pattern +
            (node as RegExpLiteral).regex.flags
        );
      }
      return emptysubgrpah('normal') as SubgraphNormal;

    case 'ThisExpression':
      return emptysubgrpah('normal') as SubgraphNormal;

    case 'ArrayExpression':
      const elements = node.elements.filter((el) => el !== null);
      elements.forEach(createNormalSubgraph);
      break;
    case 'ObjectExpression':
      break;
    case 'FunctionExpression':
      break;
    case 'UnaryExpression':
      if (node.operator === '!') {
        const Unarysubgraph = createCondSubgraph(node.argument);
        return {
          type: 'normal',
          root: Unarysubgraph.root,
          next: Unarysubgraph.truthy.concat(Unarysubgraph.falsy),
        };
      } else return createNormalSubgraph(node.argument);
    case 'UpdateExpression':
      return createNormalSubgraph(node.argument);
    case 'BinaryExpression':
      break;
    case 'AssignmentExpression':
      createNormalSubgraph(node.left);
      createNormalSubgraph(node.right);
      if (
        node.left.type === 'MemberExpression' &&
        node.left.property.type === 'Identifier' &&
        !node.left.computed
      ) {
        // insertSequence(node.left.property.name, 'update_prop',
      }
      break;
    case 'LogicalExpression':
      const LogicalSubgraph = createCondSubgraph(node.left);
      if (node.operator === '&&' || node.operator === '??') {
        return retrunNormalSubgraph(
          node.right,
          LogicalSubgraph.root,
          LogicalSubgraph.truthy,
          LogicalSubgraph.falsy
        );
      } else {
        return retrunNormalSubgraph(
          node.right,
          LogicalSubgraph.root,
          LogicalSubgraph.falsy,
          LogicalSubgraph.truthy
        );
      }
    case 'MemberExpression':
      if (
        node.object.type === 'Identifier' &&
        SKIP_BUILTIN.includes(node.object.name)
      ) {
        break;
      }
      const objectSubgraph = createNormalSubgraph(node.object);
      if (!node.computed && node.property.type === 'Identifier') {
        insertSequence(node.property.name, 'prop', objectSubgraph.next);
        return retrunNormalSubgraph(
          node.property,
          objectSubgraph.root,
          objectSubgraph.next
        );
      }
      if (node.computed && node.property.type !== 'Identifier') {
        if (node.property.type === 'Literal') {
          if (typeof node.property.value === 'string') {
            insertSequence(node.property.value, 'prop', objectSubgraph.next);
          }
        }
        if (node.property.type !== 'PrivateIdentifier') {
          return retrunNormalSubgraph(
            node.property,
            objectSubgraph.root,
            objectSubgraph.next
          );
        }
      }

      return emptysubgrpah('normal') as SubgraphNormal;

    case 'ConditionalExpression':
      const testSubgraph = createCondSubgraph(node.test);
      const consequentSubgraph = createNormalSubgraph(node.consequent);
      const alternateSubgraph = createNormalSubgraph(node.alternate);
      const isConsSubgraphEmpty = isSubgraphEmpty(consequentSubgraph);
      const isAltSubgraphEmpty = isSubgraphEmpty(alternateSubgraph);
      if (isConsSubgraphEmpty && isAltSubgraphEmpty) {
        return {
          type: 'normal',
          root: testSubgraph.root,
          next: testSubgraph.truthy.concat(testSubgraph.falsy),
        };
      } else if (isConsSubgraphEmpty) {
        connect(alternateSubgraph.root.id, testSubgraph.falsy);
        return {
          type: 'normal',
          root: testSubgraph.root,
          next: testSubgraph.truthy.concat(alternateSubgraph.next),
        };
      } else if (isAltSubgraphEmpty) {
        connect(consequentSubgraph.root.id, testSubgraph.truthy);
        return {
          type: 'normal',
          root: testSubgraph.root,
          next: testSubgraph.falsy.concat(consequentSubgraph.next),
        };
      } else {
        connect(consequentSubgraph.root.id, testSubgraph.truthy);
        connect(alternateSubgraph.root.id, testSubgraph.falsy);
        return {
          type: 'normal',
          root: testSubgraph.root,
          next: consequentSubgraph.next.concat(alternateSubgraph.next),
        };
      }
    case 'CallExpression':
      createNormalSubgraph(node.callee);
      //insertSequence(`callexpr_${node.arguments.length}`, 'prop');
      node.arguments.forEach(createNormalSubgraph);
      break;
    case 'NewExpression':
      createNormalSubgraph(node.callee);
      node.arguments.forEach(createNormalSubgraph);
      break;
    case 'SequenceExpression':
    // const last = node.expressions.at(-1);
    // if (!last) throw new Error('Sequence expression is empty');
    // let firstRoot: number;
    // node.expressions.slice(0, -1).forEach((expr) => {
    //   const ns = createNormalSubgraph(expr);
    //   if (firstRoot === undefined) firstRoot = ns.root;
    //   connect(ns.root);
    // });
    // visit(last);
    // return {
    //   type: 'normal',
    //   root: firstRoot,
    //   next: new Set([[0]]),
    // };
    default:
      Object.keys(node).forEach((key) => {
        const value = (node as any)[key];
        if (value && typeof value === 'object') {
          if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
              if (value[i] && typeof value[i] === 'object') {
                visit(value[i]);
              }
            }
          } else {
            visit(value);
          }
        }
      });
      break;
  }
  return emptysubgrpah('normal') as SubgraphNormal;
}

function createCondSubgraph(node: ESTree.Expression): SubgraphCond {
  switch (node.type) {
    case 'Identifier':
      return emptysubgrpah('cond') as SubgraphCond;
    case 'Literal':
      // if (typeof node.value === 'string' && !node.value.startsWith('JSCA_')) {
      //   cfgState.literals.push(node.value);
      // }
      // if (node.regex) {
      //   cfgState.literals.push(node.regex.pattern);
      //   cfgState.literals.push(node.regex.flags);
      // }
      return emptysubgrpah('cond') as SubgraphCond;
    case 'ThisExpression':
      break;
    case 'ArrayExpression':
      const elements = node.elements.filter((el) => el !== null);
      elements.forEach(createNormalSubgraph);
      break;
    case 'ObjectExpression':
      const properties = node.properties.filter(
        (prop) => prop.type === 'Property'
      );
      properties.forEach((prop) => {
        if (prop.key.type === 'Identifier') {
          // insertSequence(prop.key.name, 'prop');
        }
        if (prop.key.type === 'Literal' && typeof prop.key.value === 'string') {
          // insertSequence(prop.key.value, 'prop');
        }
        visit(prop.value);
      });
      break;
    case 'FunctionExpression':
      break;
    case 'UnaryExpression':
      if (node.operator === '!') {
        const unarySubgraph = createCondSubgraph(node.argument);
        return {
          type: 'cond',
          root: unarySubgraph.root,
          truthy: unarySubgraph.falsy,
          falsy: unarySubgraph.truthy,
        };
      } else return createCondSubgraph(node.argument);
    case 'UpdateExpression':
    case 'BinaryExpression':
      break;
    case 'AssignmentExpression':
      createNormalSubgraph(node.left);
      createNormalSubgraph(node.right);
      if (
        node.left.type === 'MemberExpression' &&
        node.left.property.type === 'Identifier' &&
        !node.left.computed
      ) {
        // insertSequence(node.left.property.name, 'update_prop');
      }
      break;
    case 'LogicalExpression':
      const LogicalSubgraph = createCondSubgraph(node.left);
      const rightSubgraph = createCondSubgraph(node.right);
      if (node.operator === '&&' || node.operator === '??') {
        connect(rightSubgraph.root.id, LogicalSubgraph.truthy);
        return {
          type: 'cond',
          root: LogicalSubgraph.root,
          truthy: rightSubgraph.truthy,
          falsy: LogicalSubgraph.falsy.concat(rightSubgraph.falsy),
        };
      } else {
        connect(rightSubgraph.root.id, LogicalSubgraph.falsy);
        return {
          type: 'cond',
          root: LogicalSubgraph.root,
          truthy: LogicalSubgraph.truthy.concat(rightSubgraph.truthy),
          falsy: rightSubgraph.falsy,
        };
      }
    case 'MemberExpression':
      if (
        node.object.type === 'Identifier' &&
        SKIP_BUILTIN.includes(node.object.name)
      ) {
        break;
      }
      const objectSubgraph = createNormalSubgraph(node.object);
      if (!node.computed && node.property.type === 'Identifier') {
        insertSequence(node.property.name, 'prop', objectSubgraph.next);
        return returnCondSubgraph(
          node.property,
          objectSubgraph.root,
          objectSubgraph.next
        );
      }
      if (node.computed && node.property.type !== 'Identifier') {
        if (
          node.property.type === 'Literal' &&
          typeof node.property.value === 'string'
        ) {
          insertSequence(node.property.value, 'prop', objectSubgraph.next);
        }
        if (node.property.type !== 'PrivateIdentifier') {
          return returnCondSubgraph(
            node.property,
            objectSubgraph.root,
            objectSubgraph.next
          );
        }
      }
      return emptysubgrpah('cond') as SubgraphCond;

    case 'ConditionalExpression':
      const testSubgraph = createCondSubgraph(node.test);
      const consequentSubgraph = createCondSubgraph(node.consequent);
      const alternateSubgraph = createCondSubgraph(node.alternate);

      connect(consequentSubgraph.root.id, testSubgraph.truthy);
      connect(alternateSubgraph.root.id, testSubgraph.falsy);
      return {
        type: 'cond',
        root: testSubgraph.root,
        truthy: consequentSubgraph.truthy.concat(alternateSubgraph.truthy),
        falsy: alternateSubgraph.falsy.concat(consequentSubgraph.falsy),
      };

    case 'CallExpression':
      createNormalSubgraph(node.callee);
      //insertSequence(`callexpr_${node.arguments.length}`, 'prop');
      node.arguments.forEach(createNormalSubgraph);
      break;
    case 'NewExpression':
      createNormalSubgraph(node.callee);
      node.arguments.forEach(createNormalSubgraph);
      break;
    case 'SequenceExpression':
      const last = node.expressions.at(-1);
      if (!last) throw new Error('Sequence expression is empty');
      node.expressions.slice(0, -1).forEach(createNormalSubgraph);
      return createCondSubgraph(last);
    default:
      Object.keys(node).forEach((key) => {
        const value = (node as any)[key];
        if (value && typeof value === 'object') {
          if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
              if (value[i] && typeof value[i] === 'object') {
                visit(value[i]);
              }
            }
          } else {
            visit(value);
          }
        }
      });
      break;
  }
  return emptysubgrpah('cond') as SubgraphCond;
}

function extractCFG(node: ESTree.Node): CFGState {
  cfgState = {
    currentId: 1,
    prevIds: [[0]],
    nodes: new Map<number, CFGNode>([
      [0, { id: 0, type: 'start' }],
      [-1, { id: -1, type: 'exit' }],
      [-2, { id: -2, type: 'exception-exit' }],
    ]),
    loopStack: [],
    endId: -1,
    exceptionId: -2,
    literals: new Set<string>(),
  };
  visit(node);
  connect_end();
  return cfgState;
}

// utils -------------------------------------------------------------------------------------------

function makeNormalSubraph(root: CFGNodeBlock, next: PrevId[]): SubgraphNormal {
  return {
    type: 'normal',
    root,
    next,
  };
}
function makeCondSubgraph(root: CFGNodeBlock, next: PrevId[]): SubgraphCond {
  return {
    type: 'cond',
    root,
    truthy: next.map(([id]) => [id, true]),
    falsy: next.map(([id]) => [id, false]),
  };
}

function retrunNormalSubgraph(
  node: ESTree.Expression,
  root: CFGNodeBlock,
  next: PrevId[],
  defaultnext?: PrevId[]
): SubgraphNormal {
  const subgraph = createNormalSubgraph(node);
  if (isSubgraphEmpty(subgraph)) {
    return makeNormalSubraph(root, next.concat(defaultnext || []));
  }
  connect(subgraph.root.id, next);
  return makeNormalSubraph(root, subgraph.next.concat(defaultnext || []));
}

function returnCondSubgraph(
  node: ESTree.Expression,
  root: CFGNodeBlock,
  next: PrevId[]
): SubgraphCond {
  const subgraph = createNormalSubgraph(node);
  if (isSubgraphEmpty(subgraph)) {
    return makeCondSubgraph(root, next);
  }
  connect(subgraph.root.id, next);
  return makeCondSubgraph(root, subgraph.next);
}

function emptysubgrpah(type: string): Subgraph {
  const node = createNode();
  if (type === 'normal') {
    return {
      type: 'normal',
      root: node,
      next: [[node.id]],
    };
  }
  return {
    type: 'cond',
    root: node,
    truthy: [[node.id, true]],
    falsy: [[node.id, false]],
  };
}

function isSubgraphEmpty(subgraph: SubgraphNormal): boolean {
  return (
    subgraph.next.length === 1 &&
    subgraph.next[0][0] === subgraph.root.id &&
    !subgraph.root.sequences
  );
}

function is_typeof(node: ESTree.ConditionalExpression): boolean {
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

function mergeSubgraph(subgraph: SubgraphNormal): void {
  if (isSubgraphEmpty(subgraph)) return;
  switch (subgraph.type) {
    case 'normal':
      connect(subgraph.root.id);
      cfgState.prevIds = subgraph.next;
      break;
  }
}
function connect_end() {
  connect(cfgState.endId);
  cfgState.prevIds = [];
}

function addLoop(): CFGNode {
  const loop = createNode();
  connect(loop.id);
  cfgState.prevIds = [[loop.id]];
  return loop;
}

function loopVisitor(node: ESTree.Node) {
  cfgState.loopStack.push({ break: [], continue: [] });
  visit(node);
  const loop = cfgState.loopStack.pop();
  if (!loop) throw new Error('Loop stack is empty');
  return loop;
}
function endLoop(
  loop: { break: PrevId[]; continue: PrevId[] },
  id: number,
  prevIds: PrevId[]
) {
  cfgState.prevIds = loop.continue.concat(cfgState.prevIds);
  connect(id);
  cfgState.prevIds = loop.break.concat(
    prevIds.filter(([, context]) => !context)
  );
}
function insertSequence(
  value: string,
  type: 'prop' | 'update_prop',
  prev: PrevId[]
) {
  const prevNode = cfgState.nodes.get(prev[0][0]);
  if (
    prev.length === 1 &&
    prevNode?.type === 'block' &&
    prevNode?.next === undefined
  ) {
    prevNode.sequences = prevNode.sequences || [];
    prevNode.sequences.push({ type, value });
    return;
  }
  const block = createNode();
  connect(block.id, prev);
  block.sequences = [{ type, value }];
}

// helper functions -------------------------------------------------------------------------------------------
function createNode(): CFGNodeBlock {
  const id = cfgState.currentId++;

  const node: CFGNode = {
    id: id,
    type: 'block',
  };
  cfgState.nodes.set(id, node);
  return node;
}
function connect(to: number, from: PrevId[] = cfgState.prevIds) {
  from.forEach(([id, context]) => {
    const node = cfgState.nodes.get(id);
    if (!node) throw new Error('Node not found');
    switch (node.type) {
      case 'block':
        if (context === undefined) {
          node.next = { type: 'jump', jump: to };
        } else {
          node.next = {
            type: 'cond',
            nextThen:
              context === true
                ? to
                : node.next?.type === 'cond'
                ? node.next.nextThen
                : undefined,
            nextElse:
              context === false
                ? to
                : node.next?.type === 'cond'
                ? node.next.nextElse
                : undefined,
          };
        }
        break;
      case 'start':
        node.next = { type: 'jump', jump: to };
        break;
    }
  });
}
//-----------------------------------------------------------------------------------------------------
export function cfgToDot(nodes: Map<number, CFGNode>): string {
  const dot = ['digraph G {', '  rankdir=TB;', '  node [shape=box];'];

  for (const [id, node] of nodes) {
    switch (node.type) {
      case 'start':
        dot.push(
          `  ${id} [label="start", shape=ellipse, style=filled, color=lightgreen];`
        );
        if (node.next?.type === 'jump')
          dot.push(`  ${id} -> ${node.next.jump};`);
        break;
      case 'exit':
        dot.push(
          `  ${id} [label="exit", shape=ellipse, style=filled, color=lightgray];`
        );
        break;
      case 'exception-exit':
        dot.push(
          `  ${id} [label="exception-exit", shape=ellipse,style=filled, color=pink];`
        );
        break;
      case 'block':
        if (!node.next) continue;
        if (node.sequences) {
          const sequences = node.sequences.map((sequence) => {
            switch (sequence.type) {
              case 'prop':
                return `_.${sequence.value}`;
              case 'update_prop':
                return `${sequence.value} = _`;
            }
          });
          dot.push(`  ${id} [label="${id}: ${sequences.join(' ')}"];`);
        } else {
          dot.push(`  ${id} [label=""];`);
        }
        if (node.next) {
          if (node.next.type === 'jump') {
            dot.push(`  ${id} -> ${node.next.jump};`);
          } else {
            dot.push(`  ${id} -> ${node.next.nextThen} [color="lightgreen"];`);
            dot.push(`  ${id} -> ${node.next.nextElse} [color="lightcoral"];`);
          }
        }
        break;
    }
  }

  dot.push('}');
  return dot.join('\n');
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
  const code0 = `
  function example() {
   ((!_.a||_.x ? _.y : _.z) && _.b) ? _.c : _.d;
  }`;
  const code1 = `
  function example() {
    if (!(!_.a||_.x ? _.y : _.z) || !_.b) {
      _.d;
    } else _.c;
  }`;
  const code2 = `
  function example() {
   (!(!_.a||_.x ? _.y : _.z) || !_.b) ? _.d : _.c;
  }`;

  const code3 = `
function example() {
  if (_.a) {
    b;
  }
  _.d
}`;
  const code4 = `
function example() {
 a && _.b
 _.d
}`;
  const code5 = `
function example() {
  if (a) {
    _.b;
  }
  _.d}
  `;

  for await (const c of [
    [code0, 'cfg0'],
    [code1, 'cfg1'],
    [code2, 'cfg2'],
    [code3, 'cfg3'],
    [code4, 'cfg4'],
    [code5, 'cfg5'],
  ]) {
    const [code, filename] = c;
    try {
      const ast = parse(code);
      const functionBody = (ast.body[0] as ESTree.FunctionDeclaration).body;
      if (!functionBody) throw new Error('Function body not found');
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
      graph: graph.nodes,
      literals: graph.literals,
    };
  });
}

export default cfg;
