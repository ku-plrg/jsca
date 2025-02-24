import { exec } from 'child_process';
import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';
import { ESTree, parse } from 'meriyah';
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
      const whileSubgraph =
        (!WHILE_TRUE ||
          node.test.type !== 'Literal' ||
          node.test.value !== 1) &&
        createCondSubgraph(node.test);
      whileSubgraph &&
        (connect(whileSubgraph.root.id),
        (cfgState.prevIds = whileSubgraph.truthy));
      const whileLoopstack = loopVisitor(node.body);
      endLoop(
        whileLoopstack,
        whileLoop.id,
        whileSubgraph ? whileSubgraph.falsy : []
      );
      break;
    case 'DoWhileStatement':
      const doLoop = addLoop();
      const doLoopstack = loopVisitor(node.body);
      const doSubgraph = createCondSubgraph(node.test);
      connect(doSubgraph.root.id);
      cfgState.prevIds = doSubgraph.truthy;
      endLoop(doLoopstack, doLoop.id, doSubgraph.falsy);
      break;
    case 'ForStatement':
      const initSubgraph =
        !!node.init &&
        node.init.type !== 'VariableDeclaration' &&
        createNormalSubgraph(node.init);
      node.init && node.init.type === 'VariableDeclaration' && visit(node.init);
      initSubgraph &&
        (connect(initSubgraph?.root.id),
        (cfgState.prevIds = initSubgraph?.next));
      const forLoop = addLoop();
      const forSubgraph = node.test && createCondSubgraph(node.test);
      forSubgraph &&
        (connect(forSubgraph.root.id), (cfgState.prevIds = forSubgraph.truthy));
      const forLoopstack = loopVisitor(node.body);
      const updateSubgraph = node.update && createNormalSubgraph(node.update);
      updateSubgraph &&
        (connect(updateSubgraph.root.id),
        (cfgState.prevIds = updateSubgraph.next));
      endLoop(forLoopstack, forLoop.id, forSubgraph?.falsy || []);
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
      Object.entries(node).forEach(([key, value]) => {
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
      return emptySubgraph('normal');
    case 'Literal':
      // if (typeof node.value === 'string' && !node.value.startsWith('JSCA_')) {
      //   cfgState.literals.push(node.value);
      // }
      if (isRegexpLiteral(node)) {
        cfgState.literals.add(node.regex.pattern + node.regex.flags);
      }
      return emptySubgraph('normal');

    case 'ThisExpression':
      return emptySubgraph('normal');

    case 'ArrayExpression': {
      const elements = node.elements.filter((el) => el !== null);
      if (elements.length === 0) {
        return emptySubgraph('normal');
      }
      for (const ele of elements) {
        const subgraph = createNormalSubgraph(ele);
        if (!isSubgraphEmpty(subgraph)) {
          return elements
            .slice(elements.indexOf(ele) + 1)
            .reduce(
              (prevSubgraph, expression) =>
                returnNormalSubgraph(
                  expression,
                  prevSubgraph.root,
                  prevSubgraph.next
                ),
              subgraph
            );
        }
      }
      return emptySubgraph('normal');
    }
    case 'ObjectExpression': {
      const properties = node.properties
        .filter((prop) => prop.type === 'Property')
        .filter(
          (prop) =>
            !['AssignmentPattern', 'ObjectPattern', 'ArrayPattern'].includes(
              prop.value.type
            )
        );
      if (properties.length === 0) return emptySubgraph('normal');

      for (const prop of properties) {
        const subgraph = createNormalSubgraph(prop.value as ESTree.Expression);
        if (!isSubgraphEmpty(subgraph)) {
          return properties
            .slice(properties.indexOf(prop) + 1)
            .reduce((prevSubgraph, currentProp) => {
              let sequence = null;
              if (currentProp.key.type === 'Identifier') {
                sequence = insertSequence(
                  currentProp.key.name,
                  'prop',
                  prevSubgraph.next
                );
              } else if (
                currentProp.key.type === 'Literal' &&
                typeof currentProp.key.value === 'string'
              ) {
                sequence = insertSequence(
                  currentProp.key.value,
                  'prop',
                  prevSubgraph.next
                );
              }

              return returnNormalSubgraph(
                currentProp.value as ESTree.Expression,
                prevSubgraph.root,
                sequence ?? prevSubgraph.next
              );
            }, subgraph);
        }
      }

      return emptySubgraph('normal');
    }

    case 'FunctionExpression':
      break;
    case 'UnaryExpression':
      return createNormalSubgraph(node.argument);
    case 'UpdateExpression':
      return createNormalSubgraph(node.argument);
    case 'BinaryExpression': {
      let { left, right } = node;
      if (left.type === 'PrivateIdentifier') {
        left = { type: 'Literal', value: left.name };
      }
      const leftSubgraph = createNormalSubgraph(left);
      const rightSubgraph = isSubgraphEmpty(leftSubgraph)
        ? createNormalSubgraph(right)
        : returnNormalSubgraph(right, leftSubgraph.root, leftSubgraph.next);
      return rightSubgraph;
    }
    case 'AssignmentExpression': {
      const { left, right } = node;
      const leftSubgraph = createNormalSubgraph(left);
      const isLeftEmpty = isSubgraphEmpty(leftSubgraph);
      const rightSubgraph = isLeftEmpty
        ? createNormalSubgraph(right)
        : returnNormalSubgraph(right, leftSubgraph.root, leftSubgraph.next);
      const sequence =
        left.type === 'MemberExpression' &&
        left.property.type === 'Identifier' &&
        !left.computed
          ? insertSequence(
              left.property.name,
              'update_prop',
              rightSubgraph.next
            )
          : null;

      return {
        type: 'normal',
        root: isLeftEmpty ? rightSubgraph.root : leftSubgraph.root,
        next: sequence ?? rightSubgraph.next,
      };
    }
    case 'LogicalExpression':
      const LogicalSubgraph = createCondSubgraph(node.left);
      if (node.operator === '&&' || node.operator === '??') {
        return returnNormalSubgraph(
          node.right,
          LogicalSubgraph.root,
          LogicalSubgraph.truthy,
          LogicalSubgraph.falsy
        );
      } else {
        return returnNormalSubgraph(
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
        return emptySubgraph('normal');
      }
      const objectSubgraph = createNormalSubgraph(node.object);
      let msequence;
      if (!node.computed && node.property.type === 'Identifier') {
        msequence = insertSequence(
          node.property.name,
          'prop',
          objectSubgraph.next
        );
        const isEmpty = isSubgraphEmpty(objectSubgraph);
        if (!isEmpty) {
          return returnNormalSubgraph(
            node.property,
            objectSubgraph.root,
            msequence ?? objectSubgraph.next
          );
        } else {
          return createNormalSubgraph(node.property);
        }
      }
      if (node.computed && node.property.type !== 'Identifier') {
        if (node.property.type === 'Literal') {
          if (typeof node.property.value === 'string') {
            msequence = insertSequence(
              node.property.value,
              'prop',
              objectSubgraph.next
            );
          }
        }
        if (node.property.type !== 'PrivateIdentifier') {
          const isEmpty = isSubgraphEmpty(objectSubgraph);
          if (!isEmpty) {
            return returnNormalSubgraph(
              node.property,
              objectSubgraph.root,
              msequence ?? objectSubgraph.next
            );
          } else {
            return createNormalSubgraph(node.property);
          }
        }
      }
      return emptySubgraph('normal');
    case 'ConditionalExpression': {
      if (is_typeof(node)) {
        return emptySubgraph('normal');
      }

      const testSubgraph = createCondSubgraph(node.test);
      const consequentSubgraph = createNormalSubgraph(node.consequent);
      const alternateSubgraph = createNormalSubgraph(node.alternate);
      const getNext = (
        subgraph: SubgraphNormal,
        testBranch: PrevId[]
      ): PrevId[] => (isSubgraphEmpty(subgraph) ? testBranch : subgraph.next);
      if (!isSubgraphEmpty(consequentSubgraph))
        connect(consequentSubgraph.root.id, testSubgraph.truthy);
      if (!isSubgraphEmpty(alternateSubgraph))
        connect(alternateSubgraph.root.id, testSubgraph.falsy);
      return {
        type: 'normal',
        root: testSubgraph.root,
        next: getNext(consequentSubgraph, testSubgraph.truthy).concat(
          getNext(alternateSubgraph, testSubgraph.falsy)
        ),
      };
    }
    case 'CallExpression':
    case 'NewExpression': {
      const allExpressions = [node.callee, ...node.arguments];
      for (const expr of allExpressions) {
        const subgraph = createNormalSubgraph(expr);
        if (!isSubgraphEmpty(subgraph)) {
          return allExpressions
            .slice(allExpressions.indexOf(expr) + 1)
            .reduce(
              (prevSubgraph, expression) =>
                returnNormalSubgraph(
                  expression,
                  prevSubgraph.root,
                  prevSubgraph.next
                ),
              subgraph
            );
        }
      }
      return emptySubgraph('normal');
    }
    case 'SequenceExpression': {
      for (const expr of node.expressions) {
        const subgraph = createNormalSubgraph(expr);
        if (!isSubgraphEmpty(subgraph)) {
          return node.expressions
            .slice(node.expressions.indexOf(expr) + 1)
            .reduce(
              (prevSubgraph, expression) =>
                returnNormalSubgraph(
                  expression,
                  prevSubgraph.root,
                  prevSubgraph.next
                ),
              subgraph
            );
        }
      }
      return emptySubgraph('normal');
    }
  }
  return emptySubgraph('normal');
}

function createCondSubgraph(node: ESTree.Expression): SubgraphCond {
  switch (node.type) {
    case 'Identifier':
      return emptySubgraph('cond');
    case 'Literal':
      // if (typeof node.value === 'string' && !node.value.startsWith('JSCA_')) {
      //   cfgState.literals.push(node.value);
      // }
      if (isRegexpLiteral(node)) {
        cfgState.literals.add(node.regex.pattern + node.regex.flags);
      }
      return emptySubgraph('cond');
    case 'ThisExpression':
      break;
    case 'ArrayExpression': {
      const elements = node.elements.filter((el) => el !== null);

      if (elements.length === 0) return emptySubgraph('cond');

      for (const el of elements) {
        const subgraph = createNormalSubgraph(el);
        if (!isSubgraphEmpty(subgraph)) {
          const finalSubgraph = elements
            .slice(elements.indexOf(el) + 1)
            .reduce(
              (prevSubgraph, expression) =>
                returnNormalSubgraph(
                  expression,
                  prevSubgraph.root,
                  prevSubgraph.next
                ),
              subgraph
            );

          return {
            type: 'cond',
            root: subgraph.root,
            truthy: normalToCond(finalSubgraph.next, true),
            falsy: normalToCond(finalSubgraph.next, false),
          };
        }
      }
      return emptySubgraph('cond');
    }
    case 'ObjectExpression': {
      const properties = node.properties
        .filter((prop) => prop.type === 'Property')
        .filter(
          (prop) =>
            !['AssignmentPattern', 'ObjectPattern', 'ArrayPattern'].includes(
              prop.value.type
            )
        );
      if (properties.length === 0) return emptySubgraph('cond');

      for (const prop of properties) {
        const subgraph = createNormalSubgraph(prop.value as ESTree.Expression);
        if (!isSubgraphEmpty(subgraph)) {
          const finalSubgraph = properties
            .slice(properties.indexOf(prop) + 1)
            .reduce((prevSubgraph, currentProp) => {
              let sequence = null;
              if (currentProp.key.type === 'Identifier') {
                sequence = insertSequence(
                  currentProp.key.name,
                  'prop',
                  prevSubgraph.next
                );
              } else if (
                currentProp.key.type === 'Literal' &&
                typeof currentProp.key.value === 'string'
              ) {
                sequence = insertSequence(
                  currentProp.key.value,
                  'prop',
                  prevSubgraph.next
                );
              }
              return returnNormalSubgraph(
                currentProp.value as ESTree.Expression,
                prevSubgraph.root,
                sequence ?? prevSubgraph.next
              );
            }, subgraph);

          return {
            type: 'cond',
            root: subgraph.root,
            truthy: normalToCond(finalSubgraph.next, true),
            falsy: normalToCond(finalSubgraph.next, false),
          };
        }
      }

      return emptySubgraph('cond');
    }

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
      return createCondSubgraph(node.argument);
    case 'BinaryExpression': {
      let { left, right } = node;
      if (left.type === 'PrivateIdentifier') {
        left = { type: 'Literal', value: left.name };
      }
      const leftSubgraph = createNormalSubgraph(left);
      const isEmpty = isSubgraphEmpty(leftSubgraph);
      const rightSubgraph = isEmpty
        ? createNormalSubgraph(right)
        : returnNormalSubgraph(right, leftSubgraph.root, leftSubgraph.next);
      if (
        node.operator === '!=' ||
        node.operator === '!==' ||
        node.operator === '>' ||
        node.operator === '<'
      ) {
        return {
          type: 'cond',
          root: isEmpty ? rightSubgraph.root : leftSubgraph.root,
          truthy: normalToCond(rightSubgraph.next, false),
          falsy: normalToCond(rightSubgraph.next, true),
        };
      } else {
        return {
          type: 'cond',
          root: isEmpty ? rightSubgraph.root : leftSubgraph.root,
          truthy: normalToCond(rightSubgraph.next, true),
          falsy: normalToCond(rightSubgraph.next, false),
        };
      }
    }
    case 'AssignmentExpression': {
      const leftSubgraph = createNormalSubgraph(node.left);
      const isEmpty = isSubgraphEmpty(leftSubgraph);
      const rightSubgraph = isEmpty
        ? createNormalSubgraph(node.right)
        : returnNormalSubgraph(
            node.right,
            leftSubgraph.root,
            leftSubgraph.next
          );
      const sequence =
        node.left.type === 'MemberExpression' &&
        node.left.property.type === 'Identifier' &&
        !node.left.computed
          ? insertSequence(
              node.left.property.name,
              'update_prop',
              rightSubgraph.next
            )
          : null;
      const next = sequence ?? rightSubgraph.next;
      return {
        type: 'cond',
        root: isEmpty ? rightSubgraph.root : leftSubgraph.root,
        truthy: normalToCond(next, true),
        falsy: normalToCond(next, false),
      };
    }
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
      let sequence;
      const objectSubgraph = createNormalSubgraph(node.object);
      if (!node.computed && node.property.type === 'Identifier') {
        sequence = insertSequence(
          node.property.name,
          'prop',
          objectSubgraph.next
        );
        return returnCondSubgraph(
          node.property,
          objectSubgraph.root,
          sequence ?? objectSubgraph.next
        );
      }
      if (node.computed && node.property.type !== 'Identifier') {
        if (
          node.property.type === 'Literal' &&
          typeof node.property.value === 'string'
        ) {
          sequence = insertSequence(
            node.property.value,
            'prop',
            objectSubgraph.next
          );
        }
        if (node.property.type !== 'PrivateIdentifier') {
          return returnCondSubgraph(
            node.property,
            objectSubgraph.root,
            sequence ?? objectSubgraph.next
          );
        }
      }
      return emptySubgraph('cond');

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
    case 'NewExpression': {
      const allExpressions = [node.callee, ...node.arguments];
      for (const expr of allExpressions) {
        const subgraph = createNormalSubgraph(expr);
        if (!isSubgraphEmpty(subgraph)) {
          const finalSubgraph = allExpressions
            .slice(allExpressions.indexOf(expr) + 1)
            .reduce((prevSubgraph, expression) => {
              return returnNormalSubgraph(
                expression,
                prevSubgraph.root,
                prevSubgraph.next
              );
            }, subgraph);
          return {
            type: 'cond',
            root: subgraph.root,
            truthy: normalToCond(finalSubgraph.next, true),
            falsy: normalToCond(finalSubgraph.next, false),
          };
        }
      }
      return emptySubgraph('cond');
    }

    case 'SequenceExpression': {
      for (const expr of node.expressions.slice(0, -1)) {
        const subgraph = createNormalSubgraph(expr);
        if (!isSubgraphEmpty(subgraph)) {
          const finalSubgraph = node.expressions
            .slice(node.expressions.indexOf(expr) + 1, -1)
            .reduce(
              (prevSubgraph, currExpr) =>
                returnNormalSubgraph(
                  currExpr,
                  prevSubgraph.root,
                  prevSubgraph.next
                ),
              subgraph
            );
          const lastSubgraph = createCondSubgraph(node.expressions.at(-1)!);
          if (!isSubgraphEmpty(finalSubgraph))
            connect(lastSubgraph.root.id, finalSubgraph.next);
          return {
            type: 'cond',
            root: finalSubgraph.root,
            truthy: lastSubgraph.truthy,
            falsy: lastSubgraph.falsy,
          };
        }
      }
      return createCondSubgraph(node.expressions.at(-1)!);
    }
  }
  return emptySubgraph('cond');
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

function returnNormalSubgraph(
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

function normalToCond(next: PrevId[], context: boolean): PrevId[] {
  return next
    .map(([id, ctx]): PrevId => [id, ctx === undefined ? context : ctx])
    .filter(([id, ctx]) => ctx === context);
}

function emptySubgraph(type: 'normal'): SubgraphNormal;
function emptySubgraph(type: 'cond'): SubgraphCond;
function emptySubgraph(type: 'normal' | 'cond'): Subgraph {
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
  const loop = createNode(true);
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
  cfgState.prevIds = loop.break.concat(prevIds);
}
function insertSequence(
  value: string,
  type: 'prop' | 'update_prop',
  prev: PrevId[]
): PrevId[] {
  const prevNode = cfgState.nodes.get(prev[0][0]);
  if (
    prev.length === 1 &&
    prevNode?.type === 'block' &&
    prevNode?.next === undefined
  ) {
    prevNode.sequences = prevNode.sequences || [];
    prevNode.sequences.push({ type, value });
    return prev;
  }
  const block = createNode();
  connect(block.id, prev);
  block.sequences = [{ type, value }];
  return [[block.id]];
}

// helper functions -------------------------------------------------------------------------------------------
function createNode(loop?: boolean): CFGNodeBlock {
  const id = cfgState.currentId++;

  const node: CFGNode = {
    id: id,
    type: 'block',
    loop: loop,
  };
  cfgState.nodes.set(id, node);
  return node;
}
function connect(to: number, from: PrevId[] = cfgState.prevIds): void {
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

function isRegexpLiteral(node: ESTree.Literal): node is ESTree.RegExpLiteral {
  return 'regex' in node;
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
          dot.push(`  ${id} [label="${id}\n ${sequences.join('\n')}"];`);
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
  const code0 = `function a(id, context) {
          Symbol('JSCA_568_587');
          if (elem) {
            node = elem.getAttributeNode('id');
            if (node && node.value === id) {
              return [elem];
            }
            elems = context.getElementsByName(id);
            i = 0;
            while ((elem = elems[i++])) {
              node = elem.getAttributeNode('id');
              if (node && node.value === id) {
                return [elem];
              }
            }
          }
          return [];
        };`;
  const code1 = `function a(e, t) {
                  Symbol('JSCA_568_587');
                  if (i) {
                    if ((n = i.getAttributeNode('id')) && n.value === e)
                      return [i];
                    for (r = t.getElementsByName(e), o = 0; (i = r[o++]); )
                      if ((n = i.getAttributeNode('id')) && n.value === e)
                        return [i];
                  }
                  return [];
              }`;
  const code2 = `
  function aa(seed, matches) {
                  Symbol('JSCA_887_893');
                  var idx,
                    matched = fn(seed, argument),
                    i = matched.length;
                  while (i--) {
                    idx = indexOf.call(seed, matched[i]);
                    seed[idx] = !(matches[idx] = matched[i]);
                  }
                }`;
  const code3 = `
function aa(e, n) {
                      Symbol('JSCA_887_893');
                      for (var o, i = r(e, t), l = i.length; l--; )
                        e[(a.call(e, i[l]))];
                    }`;

  for await (const c of [
    [code0, 'cfg0'],
    [code1, 'cfg1'],
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
      body: func.body,
      graph: graph.nodes,
      literals: graph.literals,
    };
  });
}

export default cfg;
