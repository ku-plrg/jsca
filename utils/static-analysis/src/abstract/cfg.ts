import * as acorn from 'acorn';
import { exec } from 'child_process';
import { writeFile } from 'fs/promises';
import { promisify } from 'util';
import {
  CFG,
  CFGNode,
  CFGNodeProp,
  CFGState,
  Function,
  Subgraph,
} from '../utils/types';

type Stmt = acorn.Statement;
type Expr = acorn.Expression | acorn.Declaration;

type StatementVisitor = {
  [K in acorn.AnyNode['type']]?: (node: Extract<Stmt, { type: K }>) => number[];
};

type SubGraphVisitor = {
  [K in acorn.AnyNode['type']]?: (node: Extract<Expr, { type: K }>) => Subgraph;
};

type ExprVisitor = {
  [K in acorn.AnyNode['type']]?: (node: Extract<Expr, { type: K }>) => number[];
};

function createNode(
  state: CFGState,
  node: Omit<CFGNode, 'id' | 'next'>
): number {
  const id = state.currentId;
  state.currentId++;
  const nextIds: number[] = [];
  state.nodes.set(id, {
    id,
    next: nextIds,
    ...node,
  });
  return id;
}

function addEdge(state: CFGState, from: number, to: number): void {
  if (from === to) return;
  const fromNode = state.nodes.get(from);
  const toNode = state.nodes.get(to);
  if (fromNode && toNode) {
    if (!fromNode.next.includes(to)) {
      fromNode.next.push(to);
    }
  }
}

function mergePrev(state: CFGState, prevIds: number[], currentId: number) {
  prevIds
    .filter((id) => id !== state.endId)
    .forEach((prevId) => {
      addEdge(state, prevId, currentId);
    });
}

function UnsupportedError(type: string) {
  const error = new Error(`Unsupported type: ${type}`);
  error.name = 'UnsupportedError';
  return error;
}

function stmtVisitor(previds: number[], state: CFGState): StatementVisitor {
  return {
    ExpressionStatement(node) {
      const expr = processExprVisitor(previds, state, node.expression);
      if (expr) return expr;
      return previds;
    },
    BlockStatement(node) {
      let prevIds = previds;
      node.body.forEach((stmt) => {
        prevIds = processStmtVisitor(prevIds, state, stmt);
      });
      return prevIds;
    },
    EmptyStatement() {
      return previds;
    },
    DebuggerStatement() {
      throw UnsupportedError('DebuggerStatement');
    },
    WithStatement() {
      throw UnsupportedError('WithStatement');
    },
    ReturnStatement(node) {
      let prevIds = [...previds];
      if (node.argument) {
        const argument = processExprVisitor(prevIds, state, node.argument);
        if (argument) prevIds = argument;
      }
      mergePrev(state, prevIds, state.endId);
      return [];
    },
    LabeledStatement(node) {
      throw UnsupportedError('LabeledStatement');
    },
    BreakStatement(node) {
      const lastLoopStack = state.loopStack.pop();
      if (!lastLoopStack) return previds;
      lastLoopStack.break.push(...previds);
      state.loopStack.push(lastLoopStack);
      return [];
    },
    ContinueStatement(node) {
      const lastLoopStack = state.loopStack.pop();
      if (!lastLoopStack) return previds;
      lastLoopStack.continue.push(...previds);
      state.loopStack.push(lastLoopStack);
      return [];
    },
    IfStatement(node) {
      const testSubgraph = addCondnode(
        processSubGraphVisitor([state.currentId], state, node.test),
        state
      );
      mergePrev(state, previds, testSubgraph.start);
      const consequentNodeId = processStmtVisitor(
        testSubgraph.then,
        state,
        node.consequent
      );
      const nextIds = [...consequentNodeId];
      if (node.alternate) {
        nextIds.push(
          ...processStmtVisitor(testSubgraph.else, state, node.alternate)
        );
      } else {
        nextIds.push(...testSubgraph.else);
      }
      return nextIds;
    },
    SwitchStatement(node) {
      throw UnsupportedError('switchStatement');
    },
    WhileStatement(node) {
      const loopStart = createNode(state, { type: 'loop' });
      mergePrev(state, previds, loopStart);
      const testSubgraph = addCondnode(
        processSubGraphVisitor([state.currentId], state, node.test),
        state
      );

      addEdge(state, loopStart, testSubgraph.start);

      state.loopStack.push({ break: [], continue: [] });
      const bodyIds = processStmtVisitor(testSubgraph.then, state, node.body);
      const lastLoopStack = state.loopStack.pop();
      if (!lastLoopStack) throw new Error('Empty loop stack');

      mergePrev(state, bodyIds, loopStart);
      mergePrev(state, lastLoopStack.continue, loopStart);
      return [...lastLoopStack.break, ...testSubgraph.else];
    },
    DoWhileStatement(node) {
      const loopStart = createNode(state, { type: 'loop' });
      mergePrev(state, previds, loopStart);

      state.loopStack.push({ break: [], continue: [] });
      const bodyIds = processStmtVisitor([loopStart], state, node.body);
      const lastLoopStack = state.loopStack.pop();
      if (!lastLoopStack) throw new Error('Empty loop stack');
      const testSubgraph = addCondnode(
        processSubGraphVisitor([state.currentId], state, node.test),
        state
      );
      mergePrev(state, bodyIds, testSubgraph.start);
      mergePrev(state, lastLoopStack.continue, loopStart);
      mergePrev(state, testSubgraph.then, loopStart);
      return [...lastLoopStack.break, ...testSubgraph.else];
    },
    ForStatement(node) {
      const loopStart = createNode(state, { type: 'loop' });
      if (node.init) {
        const init = processExprVisitor(previds, state, node.init);
        mergePrev(state, init ?? previds, loopStart);
      } else {
        mergePrev(state, previds, loopStart);
      }

      const testToBreakIds = [];
      const testToBodyIds = [];
      if (node.test) {
        const testSubgraph = addCondnode(
          processSubGraphVisitor([state.currentId], state, node.test),
          state
        );
        testToBreakIds.push(...testSubgraph.else);
        testToBodyIds.push(...testSubgraph.then);
        addEdge(state, loopStart, testSubgraph.start);
      } else {
        testToBodyIds.push(loopStart);
      }

      state.loopStack.push({ break: [], continue: [] });
      const bodyIds = processStmtVisitor(testToBodyIds, state, node.body);

      const updateSubgraph =
        node.update && processExprVisitor(bodyIds, state, node.update);
      const loopLastIds = updateSubgraph ?? bodyIds;

      const lastLoopStack = state.loopStack.pop();
      if (!lastLoopStack) throw new Error('Empty loop stack');
      mergePrev(state, loopLastIds, loopStart);
      mergePrev(state, lastLoopStack.continue, loopStart);
      return [...lastLoopStack.break, ...testToBreakIds];
    },
    ForInStatement(node) {
      const loopStart = createNode(state, { type: 'loop' });
      let left;
      if (node.left.type === 'VariableDeclaration') {
        left = processExprVisitor(previds, state, node.left);
      }
      const right = processExprVisitor(left ?? previds, state, node.right);
      if (right) mergePrev(state, right, loopStart);

      state.loopStack.push({ break: [], continue: [] });
      const bodyIds = processStmtVisitor([loopStart], state, node.body);
      const lastLoopStack = state.loopStack.pop();
      if (!lastLoopStack) throw new Error('Empty loop stack');
      mergePrev(state, bodyIds, loopStart);
      mergePrev(state, lastLoopStack.continue, loopStart);
      return [...lastLoopStack.break, loopStart];
    },
    ForOfStatement(node) {
      const loopStart = createNode(state, { type: 'loop' });
      let left;
      if (node.left.type === 'VariableDeclaration') {
        left = processExprVisitor(previds, state, node.left);
      }
      const right = processExprVisitor(left ?? previds, state, node.right);
      if (right) mergePrev(state, right, loopStart);

      state.loopStack.push({ break: [], continue: [] });
      const bodyIds = processStmtVisitor([loopStart], state, node.body);
      const lastLoopStack = state.loopStack.pop();
      if (!lastLoopStack) throw new Error('Empty loop stack');
      mergePrev(state, bodyIds, loopStart);
      mergePrev(state, lastLoopStack.continue, loopStart);
      return [...lastLoopStack.break, loopStart];
    },
    TryStatement(node) {
      const blockIds = processStmtVisitor(previds, state, node.block);
      const handlerIds = node.handler
        ? processStmtVisitor(blockIds, state, node.handler.body)
        : blockIds;
      const finalizerIds = node.finalizer
        ? processStmtVisitor(handlerIds, state, node.finalizer)
        : handlerIds;
      return finalizerIds;
    },
    ThrowStatement(node) {
      const argument = processExprVisitor(previds, state, node.argument);
      mergePrev(state, argument ?? previds, state.endId);
      return [];
    },
    VariableDeclaration(node) {
      return processExprVisitor(previds, state, node) ?? previds;
    },
  };
}
function processStmtVisitor(previds: number[], state: CFGState, node: Stmt) {
  try {
    const visitor = stmtVisitor(previds, state)[node.type] as (
      _node: Extract<Stmt, { type: typeof node.type }>
    ) => number[];
    return visitor(node);
  } catch (e) {
    console.error('Error at processStmtVisitor', node.type);
    console.error(
      '\t' +
        (typeof e === 'object' && e !== null && 'message' in e ? e.message : e)
    );
    return previds;
  }
}

function processSubGraphVisitor(
  prevIds: number[],
  state: CFGState,
  node: Expr
) {
  try {
    const visitor = subgraphVisitor(prevIds, state)[node.type] as (
      _node: Extract<Expr, { type: typeof node.type }>
    ) => Subgraph;
    const result = visitor(node);
    return result;
  } catch (e) {
    console.error('Error at processSubgraphVisitor', node.type);
    console.error(
      '\t' +
        (typeof e === 'object' && e !== null && 'message' in e ? e.message : e)
    );
    return { start: state.currentId, then: prevIds, else: prevIds };
  }
}

function addCondnode(subgraph: Subgraph, state: CFGState) {
  const condNode = createNode(state, { type: 'condition' });
  const thenElseNodes = subgraph.then.filter((id) =>
    subgraph.else.includes(id)
  );
  thenElseNodes.forEach((id) => addEdge(state, id, condNode));
  subgraph.then = subgraph.then.filter((id) => !thenElseNodes.includes(id));
  subgraph.else = subgraph.else.filter((id) => !thenElseNodes.includes(id));
  subgraph.then.push(condNode);
  subgraph.else.push(condNode);
  return subgraph;
}
function processExprVisitor(prevIds: number[], state: CFGState, node: Expr) {
  try {
    const visitor = exprVisitor(prevIds, state)[node.type] as (
      _node: Extract<Expr, { type: typeof node.type }>
    ) => number[];
    const result = visitor(node);
    if (result.includes(state.currentId)) return undefined;
    return result;
  } catch (e) {
    console.error('Error at processExprVisitor', node.type);
    console.error(
      '\t' +
        (typeof e === 'object' && e !== null && 'message' in e ? e.message : e)
    );
    return undefined;
  }
}

function exprVisitor(previds: number[], state: CFGState): ExprVisitor {
  return {
    EmptyStatement(node) {
      return previds;
    },
    VariableDeclaration(node) {
      let startPrevId = previds;
      const decls = node.declarations.filter((decl) => decl.init);
      if (decls.length === 0) {
        return startPrevId;
      }
      let decl = decls[0].init
        ? processExprVisitor(startPrevId, state, decls[0].init) ?? startPrevId
        : startPrevId;
      for (let i = 1; i < decls.length; i++) {
        if (!decls[i].init) continue;
        decl = processExprVisitor(decl, state, decls[i].init as Expr) ?? decl;
      }
      return decl;
    },
    Identifier(node) {
      return previds;
    },
    Literal(node) {
      return previds;
    },
    ThisExpression(node) {
      return previds;
    },
    ArrayExpression(node) {
      const elements = node.elements.filter(
        (elem) => elem !== null && elem.type !== 'SpreadElement'
      );
      if (elements.length === 0) return previds;

      let elemID = processExprVisitor(previds, state, elements[0]) ?? previds;
      for (let i = 1; i < elements.length; i++) {
        elemID = processExprVisitor(elemID, state, elements[i]) ?? elemID;
      }
      return elemID;
    },
    ObjectExpression(node) {
      return previds;
    },
    FunctionExpression(node) {
      throw UnsupportedError('FunctionExpression');
    },
    UnaryExpression(node) {
      return processExprVisitor(previds, state, node.argument) ?? previds;
    },
    UpdateExpression(node) {
      return processExprVisitor(previds, state, node.argument) ?? previds;
    },
    BinaryExpression(node) {
      if (node.left.type === 'PrivateIdentifier')
        throw UnsupportedError('PrivateIdentifier');

      const left = processExprVisitor(previds, state, node.left);
      const right = processExprVisitor(previds, state, node.right);
      return [...(left ?? previds), ...(right ?? previds)];
    },
    LogicalExpression(node) {
      const left = processExprVisitor(previds, state, node.left);
      const condId = createNode(state, { type: 'condition' });
      mergePrev(state, left ?? previds, condId);
      const right = processExprVisitor([condId], state, node.right);
      return [...(right ?? [condId]), condId];
    },
    ConditionalExpression(node) {
      const test = processExprVisitor(previds, state, node.test);
      const condId = createNode(state, { type: 'condition' });
      mergePrev(state, test ?? previds, condId);
      const consequent = processExprVisitor([condId], state, node.consequent);
      const alternate = processExprVisitor([condId], state, node.alternate);
      return [...(consequent ?? [condId]), ...(alternate ?? [condId])];
    },
    AssignmentExpression(node) {
      if (node.left.type !== 'MemberExpression') return previds;
      const left =
        processExprVisitor(previds, state, node.left as Expr) ?? previds;
      const right = processExprVisitor(left, state, node.right) ?? left;
      const propNode = state.nodes.get(left[0]);
      if (left && propNode?.type === 'prop') {
        const updateProp: Omit<CFGNodeProp, 'id' | 'next'> = {
          type: 'prop',
          prop: '_.' + propNode.prop + ' = _',
        };
        const updatePropNode = createNode(state, updateProp);
        mergePrev(state, right, updatePropNode);
        return [updatePropNode];
      }
      return [...(right ?? previds)];
    },
    MemberExpression(node) {
      if (node.object.type === 'Super') throw UnsupportedError('Super');
      const object = processExprVisitor(previds, state, node.object);
      if (!node.computed && node.property.type === 'Identifier') {
        const propertyNode: Omit<CFGNodeProp, 'id' | 'next'> = {
          type: 'prop',
          prop: node.property.name,
        };
        const propertyNodeId = createNode(state, propertyNode);
        mergePrev(state, object ?? previds, propertyNodeId);
        return [propertyNodeId];
      }
      if (
        node.computed &&
        node.property.type !== 'Identifier' &&
        node.property.type !== 'PrivateIdentifier'
      ) {
        const property = processExprVisitor(
          object ?? previds,
          state,
          node.property
        );
        return property ?? previds;
      }
      return object ?? previds;
    },
    CallExpression(node) {
      const callNode = node as unknown as acorn.CallExpression;
      if (callNode.callee.type === 'Super') throw UnsupportedError('Super');
      const callee = processExprVisitor(previds, state, callNode.callee);
      let args = callee ?? previds;
      for (const arg of callNode.arguments) {
        if (arg.type === 'SpreadElement') continue;
        args = processExprVisitor(args, state, arg) ?? args;
      }
      return args;
    },
    NewExpression(node) {
      const newNode = node as unknown as acorn.NewExpression;
      const callee = processExprVisitor(previds, state, newNode.callee);
      let args = callee ?? previds;
      for (const arg of newNode.arguments) {
        if (arg.type === 'SpreadElement') continue;
        args = processExprVisitor(args, state, arg) ?? args;
      }
      return args;
    },
    SequenceExpression(node) {
      const seqNode = node as unknown as acorn.SequenceExpression;
      let prevIds = previds;
      for (const expr of seqNode.expressions) {
        prevIds = processExprVisitor(prevIds, state, expr) ?? prevIds;
      }
      return prevIds;
    },
    TemplateLiteral(node) {
      return previds;
    },
  };
}

function subgraphVisitor(previds: number[], state: CFGState): SubGraphVisitor {
  return {
    VariableDeclaration(node) {
      const decls = node.declarations.filter((decl) => decl.init);
      if (decls.length === 0) {
        return { start: state.currentId, then: previds, else: previds };
      }
      let declSubgraph = decls[0].init
        ? processSubGraphVisitor(previds, state, decls[0].init)
        : {
            start: state.currentId,
            then: previds,
            else: previds,
          };
      const startPrevId = declSubgraph.start;
      let next = [...declSubgraph.then, ...declSubgraph.else];
      for (let i = 1; i < decls.length; i++) {
        if (!decls[i].init) continue;
        declSubgraph = processSubGraphVisitor(
          next,
          state,
          decls[i].init as Expr
        );
        mergePrev(state, next, declSubgraph.start);
        next = [...declSubgraph.then, ...declSubgraph.else];
      }

      return {
        start: startPrevId,
        then: [...declSubgraph.then],
        else: [...declSubgraph.else],
      };
    },
    Identifier(node) {
      const prevId = state.currentId; // ??
      return { start: prevId, then: previds, else: previds };
    },
    Literal(node) {
      const prevId = state.currentId;
      return { start: prevId, then: previds, else: previds };
    },
    ThisExpression(node) {
      const prevId = state.currentId;
      return { start: prevId, then: previds, else: previds };
    },
    ArrayExpression(node) {
      const prevId = state.currentId;
      const elements = node.elements.filter(
        (elem) => elem !== null && elem.type !== 'SpreadElement'
      );
      if (elements.length === 0) {
        return {
          start: prevId,
          then: previds,
          else: previds,
        };
      }
      let arraySubgraph = processSubGraphVisitor(previds, state, elements[0]);
      const startPrevId = arraySubgraph.start;
      let next = [...arraySubgraph.then, ...arraySubgraph.else];
      for (let i = 1; i < elements.length; i++) {
        arraySubgraph = processSubGraphVisitor(next, state, elements[i]);
        mergePrev(state, next, arraySubgraph.start);
        next = [...arraySubgraph.then, ...arraySubgraph.else];
      }
      return {
        start: startPrevId,
        then: [...arraySubgraph.then],
        else: [...arraySubgraph.else],
      };
    },
    ObjectExpression(node) {
      const prevId = state.currentId;
      return { start: prevId, then: previds, else: previds };
    },
    FunctionExpression(node) {
      throw UnsupportedError('FunctionExpression');
    },
    UnaryExpression(node) {
      return processSubGraphVisitor(previds, state, node.argument);
    },
    UpdateExpression(node) {
      return processSubGraphVisitor(previds, state, node.argument);
    },
    BinaryExpression(node) {
      if (node.left.type === 'PrivateIdentifier')
        throw UnsupportedError('PrivateIdentifier');

      const leftSubgraph = processSubGraphVisitor(previds, state, node.left);
      const rightSubgraph = processSubGraphVisitor(previds, state, node.right);
      mergePrev(state, [...leftSubgraph.then], rightSubgraph.start);
      return {
        start: leftSubgraph.start,
        then: [...rightSubgraph.then],
        else: [...rightSubgraph.else, ...leftSubgraph.else],
      };
    },
    AssignmentExpression(node) {
      if (node.left.type !== 'MemberExpression')
        return { start: state.currentId, then: previds, else: previds };
      const leftSubgraph = processSubGraphVisitor(previds, state, node.left);
      const rightSubgraph = processSubGraphVisitor(previds, state, node.right);
      mergePrev(
        state,
        [...leftSubgraph.then, ...leftSubgraph.else],
        rightSubgraph.start
      );
      const propNode = state.nodes.get([...leftSubgraph.then][0]);
      if (propNode?.type === 'prop') {
        const updateProp: Omit<CFGNodeProp, 'id' | 'next'> = {
          type: 'prop',
          prop: '_.' + propNode.prop + ' = _',
        };
        const updatePropNode = createNode(state, updateProp);
        mergePrev(
          state,
          [...rightSubgraph.then, ...rightSubgraph.else],
          updatePropNode
        );
        return {
          start: leftSubgraph.start,
          then: [updatePropNode],
          else: [updatePropNode],
        };
      }
      return {
        start: leftSubgraph.start,
        then: [...rightSubgraph.then],
        else: [...rightSubgraph.else],
      };
    },
    LogicalExpression(node) {
      const testSubgraph = addCondnode(
        processSubGraphVisitor(previds, state, node.left),
        state
      );

      if (node.operator === '&&') {
        const consequentSubgraph = processSubGraphVisitor(
          testSubgraph.then,
          state,
          node.right
        );
        mergePrev(state, testSubgraph.then, consequentSubgraph.start);
        return {
          start: testSubgraph.start,
          then: [...consequentSubgraph.then],
          else: [...testSubgraph.else, ...consequentSubgraph.else],
        };
      } else {
        const consequentSubgraph = processSubGraphVisitor(
          testSubgraph.else,
          state,
          node.right
        );
        mergePrev(state, testSubgraph.else, consequentSubgraph.start);
        return {
          start: testSubgraph.start,
          then: [...testSubgraph.then, ...consequentSubgraph.then],
          else: [...consequentSubgraph.else],
        };
      }
    },
    ConditionalExpression(node) {
      const testSubgraph = addCondnode(
        processSubGraphVisitor(previds, state, node.test),
        state
      );

      const consequentSubgraph = processSubGraphVisitor(
        testSubgraph.then,
        state,
        node.consequent
      );
      mergePrev(state, testSubgraph.then, consequentSubgraph.start);

      const alternateSubgraph = processSubGraphVisitor(
        testSubgraph.else,
        state,
        node.alternate
      );
      mergePrev(state, testSubgraph.else, alternateSubgraph.start);

      return {
        start: testSubgraph.start,
        then: [...consequentSubgraph.then, ...alternateSubgraph.then],
        else: [...consequentSubgraph.else, ...alternateSubgraph.else],
      };
    },
    SequenceExpression(node) {
      const startPrevId = previds[0]; // ??
      const elseIds = [];
      const lastSubgraph = node.expressions.reduce<Subgraph>(
        (prev, expr) => {
          elseIds.push(...prev.else);
          const subgraph = processSubGraphVisitor([...prev.then], state, expr);
          mergePrev(state, [...prev.then, ...prev.else], subgraph.start);
          return subgraph;
        },
        { start: startPrevId, then: previds, else: previds }
      );
      return {
        start: startPrevId,
        then: lastSubgraph.then,
        else: lastSubgraph.else,
      };
    },
    MemberExpression(node) {
      const objectSubgraph =
        node.object.type === 'Super'
          ? { start: state.currentId, then: previds, else: previds }
          : processSubGraphVisitor(previds, state, node.object);
      if (!node.computed && node.property.type === 'Identifier') {
        const propertyNode: Omit<CFGNodeProp, 'id' | 'next'> = {
          type: 'prop',
          prop: node.property.name,
        };
        const propertyNodeId = createNode(state, propertyNode);
        mergePrev(
          state,
          [...objectSubgraph.then, ...objectSubgraph.else],
          propertyNodeId
        );
        return {
          start:
            objectSubgraph.start === state.currentId
              ? propertyNodeId
              : objectSubgraph.start,
          then: [propertyNodeId],
          else: [propertyNodeId],
        };
      }
      if (
        node.computed &&
        node.property.type !== 'Identifier' &&
        node.property.type !== 'PrivateIdentifier'
      ) {
        const propertySubgraph = processSubGraphVisitor(
          [...objectSubgraph.then, ...objectSubgraph.else],
          state,
          node.property
        );
        mergePrev(
          state,
          [...objectSubgraph.then, ...objectSubgraph.else],
          propertySubgraph.start
        );
        return {
          start: objectSubgraph.start,
          then: [...propertySubgraph.then],
          else: [...propertySubgraph.else],
        };
      }
      return objectSubgraph;
    },
    CallExpression(node) {
      const callNode = node as unknown as acorn.CallExpression;
      const calleeSubgraph =
        callNode.callee.type === 'Super'
          ? { start: state.currentId, then: previds, else: previds }
          : processSubGraphVisitor(previds, state, callNode.callee);
      let argsSubgraph = calleeSubgraph;
      for (const arg of callNode.arguments) {
        if (arg.type === 'SpreadElement') continue;
        argsSubgraph = processSubGraphVisitor(
          [...argsSubgraph.then, ...argsSubgraph.else],
          state,
          arg
        );
      }
      return {
        start: calleeSubgraph.start,
        then: [...argsSubgraph.then],
        else: [...argsSubgraph.else],
      };
    },
    NewExpression(node) {
      const newNode = node as unknown as acorn.NewExpression;
      const calleeSubgraph = processSubGraphVisitor(
        previds,
        state,
        newNode.callee
      );
      let argsSubgraph = calleeSubgraph;
      for (const arg of newNode.arguments) {
        if (arg.type === 'SpreadElement') continue;
        argsSubgraph = processSubGraphVisitor(
          [...argsSubgraph.then, ...argsSubgraph.else],
          state,
          arg
        );
      }
      return {
        start: calleeSubgraph.start,
        then: [...argsSubgraph.then],
        else: [...argsSubgraph.else],
      };
    },
  };
}

function generateCFG(ast: acorn.AnyNode): CFGState {
  const state: CFGState = {
    nodes: new Map(),
    currentId: 0,
    loopStack: [],
    condList: [],
    endId: 1,
  };
  const startId = createNode(state, { type: 'start' });
  createNode(state, { type: 'end' });

  processStmtVisitor([startId], state, ast as Stmt);

  return state;
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

    switch (node.type) {
      case 'start':
        label = 'Start';
        color = '#90EE90'; // Light green
        break;
      case 'end':
        label = 'End';
        color = '#A9A9A9'; // dark grey
        break;
      case 'condition':
        label = 'Condition' + id;
        color = '#FFA07A'; // Light salmon
        break;
      case 'loop':
        label = 'Loop';
        color = '#DDA0DD'; // Plum
        break;
      case 'prop':
        label = `Property\\n${node.prop || ''}` + id;
        break;
      // case 'update_prop':
      //   label = `Update\\n${(node.node as acorn.Identifier)?.name || ''}`;
      //   break;
      default:
      // if (node.node?.type) {
      //   label = node.node.type;
      //   if (node.node.type === 'ReturnStatement') {
      //     const returnNode = node.node as acorn.ReturnStatement;
      //     if (returnNode.argument?.type === 'Literal') {
      //       label += `\\n${(returnNode.argument as acorn.Literal).value}`;
      //     }
      //   }
      // } else {
      //   label = node.type;
      // }
    }

    dotString += `  node${id} [label="${label}", fillcolor="${color}"];\n`;
  }

  dotString += '\n  // Edges\n';

  // Add edges
  for (const [id, node] of nodes.entries()) {
    for (const nextId of node.next) {
      dotString += `  node${id} -> node${nextId} [color="#666666"];\n`;
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
  Symbol('JSCA_170_181');
  var proto, Ctor;
  if (!obj || toString.call(obj) !== '[object Object]') {
    return false;
  }
  proto = getProto(obj);
  if (!proto) {
    return true;
  }
  Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString;
}
  `;
  const code3 = `
function example() {
  Symbol('JSCA_170_181');
  var t, n;
  return (
    !!(e && '[object Object]' === Se.call(e)) &&
    (((t = le(e)), !!!t) ||
      ((n = Ae.call(t, 'constructor') && t.constructor),
      'function' == typeof n && he.call(n) === ge))
  );
}

  `;
  const code4 = `
function example() {
  Symbol('JSCA_1_13'), 'use strict', 'object' == typeof module && 'object' == typeof module.exports ? module.exports = e.document ? t(e, !0) : '' : t(e);
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
      const graph = generateCFG(functionBody);
      // console.log(stringifyIRNode(cfgToIR(graph)));
      // removeExitNodes(graph);
      const dotContent = await cfgToDot(graph);

      await writeFile(`${filename}.dot`, dotContent, 'utf8');

      await generatePNG(dotContent, `${filename}.png`);
    } catch (error) {
      //console.error('Error in main:', error);
    }
  }
}

if (require.main === module) {
  main().catch(console.error);
}

function cfg(functions: Function[]): CFG[] {
  return functions.map((func) => {
    const ast = func.body;
    const graph = generateCFG(ast);
    return {
      id: func.id,
      name: func.name,
      type: 'cfg',
      nodes: graph.nodes,
    };
  });
}

export default cfg;
