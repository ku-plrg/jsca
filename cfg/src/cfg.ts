import { exec } from 'child_process';
import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';
import { ESTree, parse } from 'meriyah';
import { RegExpLiteral } from 'meriyah/dist/src/estree';
import { promisify } from 'util';
import {
  CFG,
  CFGNode,
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
      connect(ifSubgraph.root);
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
      // const whileLoop = addLoop();
      // addCond(node.test);
      // const whileprevIds = [...cfgState.prevIds];
      // cfgState.prevIds = cfgState.prevIds.filter(([, context]) => context);
      // const whileLoopstack = loopVisitor(node.body);
      // endLoop(whileLoopstack, whileLoop.id, whileprevIds);
      break;
    case 'DoWhileStatement':
      break;
    case 'ForStatement':
      // node.init &&
      //   node.init.type !== 'VariableDeclaration' &&
      //   createNormalSubgraph(node.init);
      // node.init && node.init.type === 'VariableDeclaration' && visit(node.init);
      // const forLoop = addLoop();
      // node.test && addCond(node.test);
      // const forprevIds = [...cfgState.prevIds];
      // cfgState.prevIds = cfgState.prevIds.filter(([, context]) => context);
      // const forLoopstack = loopVisitor(node.body);
      // node.update && createNormalSubgraph(node.update);
      // endLoop(forLoopstack, forLoop.id, forprevIds);
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
          next: new Set([...Unarysubgraph.falsy, ...Unarysubgraph.truthy]),
        };
      } else visitWithmerge(node.argument);
    case 'UpdateExpression':
      visitWithmerge(node.argument);
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
      let rightSubgraph: SubgraphNormal;
      if (node.operator === '&&' || node.operator === '??') {
        rightSubgraph = createNormalSubgraph(node.right);
        if (isSubgraphEmpty(rightSubgraph)) {
          return {
            type: 'normal',
            root: LogicalSubgraph.root,
            next: new Set([
              ...LogicalSubgraph.truthy,
              ...LogicalSubgraph.falsy,
            ]),
          };
        }
        connect(rightSubgraph.root, LogicalSubgraph.truthy);
        LogicalSubgraph.falsy.forEach((prevId) =>
          rightSubgraph.next.add(prevId)
        );
        return {
          type: 'normal',
          root: LogicalSubgraph.root,
          next: rightSubgraph.next,
        };
      } else {
        rightSubgraph = createNormalSubgraph(node.right);
        connect(rightSubgraph.root, LogicalSubgraph.falsy);
        LogicalSubgraph.truthy.forEach((prevId) =>
          rightSubgraph.next.add(prevId)
        );
        return {
          type: 'normal',
          root: LogicalSubgraph.root,
          next: rightSubgraph.next,
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
      let membersubgraph;
      if (!node.computed && node.property.type === 'Identifier') {
        insertSequence(node.property.name, 'prop', [...objectSubgraph.next]);
        membersubgraph = createNormalSubgraph(node.property);
        if (isSubgraphEmpty(membersubgraph)) {
          return {
            type: 'normal',
            root: objectSubgraph.root,
            next: objectSubgraph.next,
          };
        }
        connect(membersubgraph.root, [...objectSubgraph.next]);
        return {
          type: 'normal',
          root: objectSubgraph.root,
          next: membersubgraph.next,
        };
      }
      if (node.computed && node.property.type !== 'Identifier') {
        if (node.property.type === 'Literal') {
          if (typeof node.property.value === 'string') {
            insertSequence(node.property.value, 'prop', [
              ...objectSubgraph.next,
            ]);
          }
        }
        if (node.property.type !== 'PrivateIdentifier') {
          membersubgraph = createNormalSubgraph(node.property);
          connect(membersubgraph.root, [...objectSubgraph.next]);
          return {
            type: 'normal',
            root: objectSubgraph.root,
            next: membersubgraph.next,
          };
        }
      }

      return emptysubgrpah('normal') as SubgraphNormal;

    case 'ConditionalExpression':
      // if (is_typeof(node)) break;
      // const LogicalSubgraph = createCondSubgraph(node.left);
      // connect(LogicalSubgraph.root);
      // let rightSubgraph: SubgraphNormal;
      // if (node.operator === '&&' || node.operator === '??') {
      //   cfgState.prevIds = LogicalSubgraph.truthy;
      //   rightSubgraph = createNormalSubgraph(node.right);
      //   mergeSubgraph(rightSubgraph);
      //   LogicalSubgraph.falsy.forEach((prevId) =>
      //     rightSubgraph.next.add(prevId)
      //   );
      //   return {
      //     type: 'normal',
      //     root: LogicalSubgraph.root,
      //     next: rightSubgraph.next,
      //   };
      // } else {
      //   cfgState.prevIds = LogicalSubgraph.falsy;
      //   rightSubgraph = createNormalSubgraph(node.right);
      //   mergeSubgraph(rightSubgraph);
      //   LogicalSubgraph.truthy.forEach((prevId) =>
      //     rightSubgraph.next.add(prevId)
      //   );
      //   return {
      //     type: 'normal',
      //     root: LogicalSubgraph.root,
      //     next: rightSubgraph.next,
      //   };
      // }
      break;
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
      visit(last);
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
  return {
    type: 'normal',
    root: 0,
    next: new Set([[0]]),
  };
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
      connect(LogicalSubgraph.root);
      let rightSubgraph: SubgraphNormal;
      if (node.operator === '&&' || node.operator === '??') {
        rightSubgraph = createNormalSubgraph(node.right);
        mergeSubgraph(rightSubgraph);
        return {
          type: 'cond',
          root: LogicalSubgraph.root,
          truthy: [...rightSubgraph.next],
          falsy: LogicalSubgraph.falsy,
        };
      } else {
        rightSubgraph = createNormalSubgraph(node.right);
        mergeSubgraph(rightSubgraph);
        LogicalSubgraph.truthy.forEach((prevId) =>
          rightSubgraph.next.add(prevId)
        );
        return {
          type: 'cond',
          root: LogicalSubgraph.root,
          truthy: LogicalSubgraph.truthy,
          falsy: [...rightSubgraph.next],
        };
      }
    case 'MemberExpression':
      if (
        node.object.type === 'Identifier' &&
        SKIP_BUILTIN.includes(node.object.name)
      ) {
        break;
      }
      let membersubgraph;
      const objectSubgraph = createNormalSubgraph(node.object);
      if (!node.computed && node.property.type === 'Identifier') {
        insertSequence(node.property.name, 'prop', [...objectSubgraph.next]);
        membersubgraph = createNormalSubgraph(node.property);
        if (isSubgraphEmpty(membersubgraph)) {
          return {
            type: 'cond',
            root: objectSubgraph.root,
            truthy: [...objectSubgraph.next].map((id) => [id[0], true]),
            falsy: [...objectSubgraph.next].map((id) => [id[0], false]),
          };
        }
        connect(membersubgraph.root, [...objectSubgraph.next]);
        return {
          type: 'cond',
          root: objectSubgraph.root,
          truthy: [...membersubgraph.next].map((id) => [id[0], true]),
          falsy: [...membersubgraph.next].map((id) => [id[0], false]),
        };
      }
      if (node.computed && node.property.type !== 'Identifier') {
        if (node.property.type === 'Literal') {
          if (typeof node.property.value === 'string')
            insertSequence(node.property.value, 'prop', [
              ...objectSubgraph.next,
            ]);
        }
        if (node.property.type !== 'PrivateIdentifier') {
          membersubgraph = createNormalSubgraph(node.property);
          connect(membersubgraph.root, [...objectSubgraph.next]);
          return {
            type: 'cond',
            root: objectSubgraph.root,
            truthy: [...membersubgraph.next],
            falsy: [...membersubgraph.next],
          };
        }
      }
      return emptysubgrpah('cond') as SubgraphCond;

    case 'ConditionalExpression':
      break;
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
      visit(last);
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
  return {
    type: 'cond',
    root: 0,
    truthy: [[0]],
    falsy: [[0]],
  };
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

function emptysubgrpah(type: string): Subgraph {
  convert_mergeable();
  const node = createNode();
  if (type === 'normal') {
    return {
      type: 'normal',
      root: node.id,
      next: new Set([[node.id]]),
    };
  }
  return {
    type: 'cond',
    root: node.id,
    truthy: [[node.id, true]],
    falsy: [[node.id, false]],
  };
}

function isSubgraphEmpty(subgraph: SubgraphNormal): boolean {
  return subgraph.next.size === 1 && [...subgraph.next][0][0] === subgraph.root;
}
function visitWithmerge(node: ESTree.Expression) {
  const Subgraph = createNormalSubgraph(node);
  convert_mergeable();
  return Subgraph;
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

function mergeSubgraph(subgraph: Subgraph): void {
  console.log('mergeSubgraph', subgraph);
  console.log('cfgState.prevIds', cfgState.prevIds);
  switch (subgraph.type) {
    case 'normal':
      const nextArray = Array.from(subgraph.next);
      connect(subgraph.root);
      cfgState.prevIds = nextArray;
      break;
    case 'cond':
      throw new Error('Not reachable');
  }
}

function connect_end() {
  connect(cfgState.endId);
  cfgState.prevIds = [];
}

function convert_mergeable() {
  cfgState.prevIds = cfgState.prevIds.map(([node, context, mergeable]) => {
    if (mergeable === false) {
      return [node, context, true];
    }
    return [node, context, mergeable];
  });
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
  const node = cfgState.nodes.get(block.id);
  if (node && node.type === 'block') {
    node.sequences = [{ type, value }];
  } else throw new Error('Node is not a block');
}

// helper functions -------------------------------------------------------------------------------------------
function createNode(): CFGNode {
  const id = cfgState.currentId++;

  const node: CFGNode = {
    id: id,
    type: 'block',
  };
  cfgState.nodes.set(id, node);
  return node;
}
function connect(to: number, from: PrevId[] = cfgState.prevIds) {
  const hastruecontext = from.some(([, context]) => context === true);
  const hasfalsecontext = from.some(([, context]) => context === false);
  const hasAllContexts = hastruecontext && hasfalsecontext;
  from.forEach(([id, context]) => {
    const node = cfgState.nodes.get(id);
    if (!node) throw new Error('Node not found');
    switch (node.type) {
      case 'block':
        if (context === undefined) {
          node.next = { type: 'jump', jump: to };
        } else {
          if (hasAllContexts) {
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
  const code2 = `
function example() {
 _.a && b
 _.d
}
  `;
  const code3 = `
function example() {
  if (_.a) {
    b;
  } 
  _.d
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
