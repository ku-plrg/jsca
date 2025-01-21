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
  [key: string]: <T extends acorn.Node>(node: T) => number[];
};

type SubGraphVisitor = {
  [key: string]: <T extends acorn.Node>(node: T) => Subgraph;
};

type ExprVisitor = {
  [key: string]: <T extends acorn.Node>(node: T) => number[];
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
      const exprNode = node as unknown as acorn.ExpressionStatement;
      const expr = processExprVisitor(previds, state, exprNode.expression);
      if (expr) return expr;
      return previds;
    },
    BlockStatement(node) {
      const blockNode = node as unknown as acorn.BlockStatement;
      let prevIds = previds;
      if (blockNode.body.length === 0) return prevIds;
      blockNode.body.forEach((stmt) => {
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
      const returnNode = node as unknown as acorn.ReturnStatement;
      let prevIds = [...previds];
      if (returnNode.argument) {
        const argument = processExprVisitor(
          prevIds,
          state,
          returnNode.argument
        );
        if (argument) prevIds = argument;
      }
      mergePrev(state, prevIds, state.endId);
      return [];
    },
    LabeledStatement() {
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
      const ifNode = node as unknown as acorn.IfStatement;
      const testSubgraph = addCondnode(
        processSubGraphVisitor([state.currentId], state, ifNode.test),
        state
      );
      mergePrev(state, previds, testSubgraph.start);
      const consequentNodeId = processStmtVisitor(
        testSubgraph.then,
        state,
        ifNode.consequent
      );
      const nextIds = [...consequentNodeId];
      if (ifNode.alternate) {
        nextIds.push(
          ...processStmtVisitor(testSubgraph.else, state, ifNode.alternate)
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
      const whileNode = node as unknown as acorn.WhileStatement;
      const loopStart = createNode(state, { type: 'loop' });
      mergePrev(state, previds, loopStart);
      const testSubgraph = addCondnode(
        processSubGraphVisitor([state.currentId], state, whileNode.test),
        state
      );

      addEdge(state, loopStart, testSubgraph.start);

      state.loopStack.push({ break: [], continue: [] });
      const bodyIds = processStmtVisitor(
        testSubgraph.then,
        state,
        whileNode.body
      );
      const lastLoopStack = state.loopStack.pop();
      if (!lastLoopStack) throw new Error('Empty loop stack');

      mergePrev(state, bodyIds, loopStart);
      mergePrev(state, lastLoopStack.continue, loopStart);
      return [...lastLoopStack.break, ...testSubgraph.else];
    },
    DoWhileStatement(node) {
      const doWhileNode = node as unknown as acorn.DoWhileStatement;
      const loopStart = createNode(state, { type: 'loop' });
      mergePrev(state, previds, loopStart);

      state.loopStack.push({ break: [], continue: [] });
      const bodyIds = processStmtVisitor([loopStart], state, doWhileNode.body);
      const lastLoopStack = state.loopStack.pop();
      if (!lastLoopStack) throw new Error('Empty loop stack');
      const testSubgraph = addCondnode(
        processSubGraphVisitor([state.currentId], state, doWhileNode.test),
        state
      );
      mergePrev(state, bodyIds, testSubgraph.start);
      mergePrev(state, lastLoopStack.continue, loopStart);
      mergePrev(state, testSubgraph.then, loopStart);
      return [...lastLoopStack.break, ...testSubgraph.else];
    },
    ForStatement(node) {
      const forNode = node as unknown as acorn.ForStatement;

      const loopStart = createNode(state, { type: 'loop' });
      if (forNode.init) {
        const init = processExprVisitor(previds, state, forNode.init);
        mergePrev(state, init ?? previds, loopStart);
      } else {
        mergePrev(state, previds, loopStart);
      }

      const testToBreakIds = [];
      const testToBodyIds = [];
      if (forNode.test) {
        const testSubgraph = addCondnode(
          processSubGraphVisitor([state.currentId], state, forNode.test),
          state
        );
        testToBreakIds.push(...testSubgraph.else);
        testToBodyIds.push(...testSubgraph.then);
        addEdge(state, loopStart, testSubgraph.start);
      } else {
        testToBodyIds.push(loopStart);
      }

      state.loopStack.push({ break: [], continue: [] });
      const bodyIds = processStmtVisitor(testToBodyIds, state, forNode.body);

      const updateSubgraph =
        forNode.update && processExprVisitor(bodyIds, state, forNode.update);
      const loopLastIds = updateSubgraph ?? bodyIds;

      const lastLoopStack = state.loopStack.pop();
      if (!lastLoopStack) throw new Error('Empty loop stack');
      mergePrev(state, loopLastIds, loopStart);
      mergePrev(state, lastLoopStack.continue, loopStart);
      return [...lastLoopStack.break, ...testToBreakIds];
    },
    ForInStatement(node) {
      const forInNode = node as unknown as acorn.ForInStatement;
      const loopStart = createNode(state, { type: 'loop' });
      let left;
      if (forInNode.left.type === 'VariableDeclaration') {
        left = processExprVisitor(previds, state, forInNode.left);
      }
      const right = processExprVisitor(left ?? previds, state, forInNode.right);
      if (right) mergePrev(state, right, loopStart);

      state.loopStack.push({ break: [], continue: [] });
      const bodyIds = processStmtVisitor([loopStart], state, forInNode.body);
      const lastLoopStack = state.loopStack.pop();
      if (!lastLoopStack) throw new Error('Empty loop stack');
      mergePrev(state, bodyIds, loopStart);
      mergePrev(state, lastLoopStack.continue, loopStart);
      return [...lastLoopStack.break, loopStart];
    },
    // ForOfStatement(node: acorn.ForOfStatement) {
    //   const loopStart = createNode(state, { type: 'loop' });
    //   let left;
    //   if (node.left.type === 'VariableDeclaration') {
    //     left = processExprVisitor(previds, state, node.left);
    //   }
    //   const right = processExprVisitor(left ?? previds, state, node.right);
    //   if (right) mergePrev(state, right, loopStart);

    //   state.loopStack.push({ break: [], continue: [] });
    //   const bodyIds = processStmtVisitor([loopStart], state, node.body);
    //   const lastLoopStack = state.loopStack.pop();
    //   if (!lastLoopStack) throw new Error('Empty loop stack');
    //   mergePrev(state, bodyIds, loopStart);
    //   mergePrev(state, lastLoopStack.continue, loopStart);
    //   return [...lastLoopStack.break, loopStart];
    // },
  };
}
function processStmtVisitor(
  previds: number[],
  state: CFGState,
  node: acorn.Node
) {
  try {
    const visitor = stmtVisitor(previds, state)[node.type] as (
      _node: Extract<acorn.Node, { type: typeof node.type }>
    ) => number[];
    if (!visitor) return previds;
    return visitor(node);
  } catch (e) {
    throw UnsupportedError(node.type);
  }
}

function processSubGraphVisitor(
  prevIds: number[],
  state: CFGState,
  node: acorn.Node
) {
  try {
    const visitor = subgraphVisitor(prevIds, state)[node.type] as (
      _node: Extract<acorn.Node, { type: typeof node.type }>
    ) => Subgraph;
    const result = visitor(node);
    if (!result)
      return { start: state.currentId, then: prevIds, else: prevIds };
    return result;
  } catch (e) {
    throw UnsupportedError(node.type);
  }
}

function addCondnode(subgraph: Subgraph, state: CFGState) {
  const condNode = createNode(state, { type: 'condition' });
  const thenElseNodes = subgraph.then.filter((id) =>
    subgraph.else.includes(id)
  );
  if (state.nodes.get(thenElseNodes[0])?.type !== 'condition') {
    //todo: check if the first node is a condition node
  }

  thenElseNodes.forEach((id) => addEdge(state, id, condNode));
  subgraph.then = subgraph.then.filter((id) => !thenElseNodes.includes(id));
  subgraph.else = subgraph.else.filter((id) => !thenElseNodes.includes(id));
  subgraph.then.push(condNode);
  subgraph.else.push(condNode);
  return subgraph;
}
function processExprVisitor(
  prevIds: number[],
  state: CFGState,
  node: acorn.Node
) {
  try {
    const visitor = exprVisitor(prevIds, state)[node.type] as (
      _node: Extract<acorn.Node, { type: typeof node.type }>
    ) => number[];
    const result = visitor(node);
    if (result.includes(state.currentId)) return undefined;
    if (!result) return prevIds;
    return result;
  } catch (e) {
    throw UnsupportedError(node.type);
  }
}

function exprVisitor(previds: number[], state: CFGState): ExprVisitor {
  return {
    VariableDeclaration(node) {
      const varNode = node as unknown as acorn.VariableDeclaration;
      let startPrevId = previds;
      const decls = varNode.declarations.filter((decl) => decl.init);
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
      const arrayNode = node as unknown as acorn.ArrayExpression;
      const elements = arrayNode.elements.filter(
        (elem) => elem !== null && elem.type !== 'SpreadElement'
      );
      if (elements.length === 0) return previds;

      let elemID = processExprVisitor(previds, state, elements[0]) ?? previds;
      for (let i = 1; i < elements.length; i++) {
        elemID = processExprVisitor(elemID, state, elements[i]) ?? elemID;
      }
      return elemID;
    },
    FunctionExpression(node) {
      throw UnsupportedError('FunctionExpression');
    },
    UnaryExpression(node) {
      const unaryNode = node as unknown as acorn.UnaryExpression;
      return processExprVisitor(previds, state, unaryNode.argument) ?? previds;
    },
    UpdateExpression(node) {
      const updateNode = node as unknown as acorn.UpdateExpression;
      return processExprVisitor(previds, state, updateNode.argument) ?? previds;
    },
    BinaryExpression(node) {
      const binaryNode = node as unknown as acorn.BinaryExpression;
      if (binaryNode.left.type === 'PrivateIdentifier') return previds;

      const left =
        processExprVisitor(previds, state, binaryNode.left) ?? previds;
      const right = processExprVisitor(left, state, binaryNode.right);
      return [...(right ?? previds)];
    },
    AssignmentExpression(node) {
      const assignNode = node as unknown as acorn.AssignmentExpression;
      if (assignNode.left.type !== 'MemberExpression') return previds;
      const left =
        processExprVisitor(previds, state, assignNode.left as Expr) ?? previds;
      const right = processExprVisitor(left, state, assignNode.right);
      const propNode = state.nodes.get(left[0]);
      if (left && propNode?.type === 'prop') {
        const updateProp: Omit<CFGNodeProp, 'id' | 'next'> = {
          type: 'prop',
          prop: '_.' + propNode.prop + ' = _',
        };
        const updatePropNode = createNode(state, updateProp);
        mergePrev(state, right ?? previds, updatePropNode);
        return [updatePropNode];
      }
      return [...(right ?? previds)];
    },
    LogicalExpression(node) {
      const logicalNode = node as unknown as acorn.LogicalExpression;
      const left = processExprVisitor(previds, state, logicalNode.left);
      const condId = createNode(state, { type: 'condition' });
      mergePrev(state, left ?? previds, condId);
      const right = processExprVisitor([condId], state, logicalNode.right);
      return [...(right ?? [condId]), condId];
    },
    ConditionalExpression(node) {
      const condNode = node as unknown as acorn.ConditionalExpression;
      const test = processExprVisitor(previds, state, condNode.test);
      const condId = createNode(state, { type: 'condition' });
      mergePrev(state, test ?? previds, condId);
      const consequent = processExprVisitor(
        [condId],
        state,
        condNode.consequent
      );
      const alternate = processExprVisitor([condId], state, condNode.alternate);
      return [...(consequent ?? [condId]), ...(alternate ?? [condId])];
    },
    MemberExpression(node) {
      const memberNode = node as unknown as acorn.MemberExpression;
      if (memberNode.object.type === 'Super') return previds;
      const object = processExprVisitor(previds, state, memberNode.object);
      if (!memberNode.computed && memberNode.property.type === 'Identifier') {
        const propertyNode: Omit<CFGNodeProp, 'id' | 'next'> = {
          type: 'prop',
          prop: memberNode.property.name,
        };
        const propertyNodeId = createNode(state, propertyNode);
        mergePrev(state, object ?? previds, propertyNodeId);
        return [propertyNodeId];
      }
      if (
        memberNode.computed &&
        memberNode.property.type !== 'Identifier' &&
        memberNode.property.type !== 'PrivateIdentifier'
      ) {
        const property = processExprVisitor(
          object ?? previds,
          state,
          memberNode.property
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
  };
}

function subgraphVisitor(previds: number[], state: CFGState): SubGraphVisitor {
  return {
    VariableDeclaration(node) {
      const varNode = node as unknown as acorn.VariableDeclaration;
      const decls = varNode.declarations.filter((decl) => decl.init);
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
      let start = startPrevId;
      for (let i = 1; i < decls.length; i++) {
        start = declSubgraph.start;
        if (!decls[i].init) continue;
        declSubgraph = processSubGraphVisitor(
          [...declSubgraph.then, ...declSubgraph.else],
          state,
          decls[i].init as Expr
        );
        mergePrev(state, [...declSubgraph.then, ...declSubgraph.else], start);
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
      const arrayNode = node as unknown as acorn.ArrayExpression;
      const prevId = state.currentId;
      const elements = arrayNode.elements.filter(
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
      let start = startPrevId;
      for (let i = 1; i < elements.length; i++) {
        start = arraySubgraph.start;
        arraySubgraph = processSubGraphVisitor(
          [...arraySubgraph.then, ...arraySubgraph.else],
          state,
          elements[i]
        );
        mergePrev(state, arraySubgraph.then, start);
      }
      return {
        start: startPrevId,
        then: [...arraySubgraph.then],
        else: [...arraySubgraph.else],
      };
    },
    UnaryExpression(node) {
      const unaryNode = node as unknown as acorn.UnaryExpression;
      return processSubGraphVisitor(previds, state, unaryNode.argument);
    },
    UpdateExpression(node) {
      const updateNode = node as unknown as acorn.UpdateExpression;
      return processSubGraphVisitor(previds, state, updateNode.argument);
    },
    BinaryExpression(node) {
      const binaryNode = node as unknown as acorn.BinaryExpression;
      if (binaryNode.left.type === 'PrivateIdentifier')
        return {
          start: state.currentId,
          then: previds,
          else: previds,
        };
      const leftSubgraph = processSubGraphVisitor(
        previds,
        state,
        binaryNode.left as Expr
      );
      const rightSubgraph = processSubGraphVisitor(
        previds,
        state,
        binaryNode.right
      );
      mergePrev(state, leftSubgraph.then, rightSubgraph.start);
      return {
        start: leftSubgraph.start,
        then: [...rightSubgraph.then],
        else: [...rightSubgraph.else],
      };
    },
    AssignmentExpression(node) {
      const assignNode = node as unknown as acorn.AssignmentExpression;
      if (assignNode.left.type !== 'MemberExpression')
        return { start: state.currentId, then: previds, else: previds };
      const leftSubgraph = processSubGraphVisitor(
        previds,
        state,
        assignNode.left
      );
      const rightSubgraph = processSubGraphVisitor(
        previds,
        state,
        assignNode.right
      );
      mergePrev(state, leftSubgraph.then, rightSubgraph.start);
      return {
        start: leftSubgraph.start,
        then: [...rightSubgraph.then],
        else: [...rightSubgraph.else],
      };
    },
    LogicalExpression(node) {
      const logicalNode = node as unknown as acorn.LogicalExpression;
      const testSubgraph = addCondnode(
        processSubGraphVisitor(previds, state, logicalNode.left),
        state
      );

      if (logicalNode.operator === '&&') {
        const consequentSubgraph = processSubGraphVisitor(
          testSubgraph.then,
          state,
          logicalNode.right
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
          logicalNode.right
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
      const condNode = node as unknown as acorn.ConditionalExpression;
      const testSubgraph = addCondnode(
        processSubGraphVisitor(previds, state, condNode.test),
        state
      );

      const consequentSubgraph = processSubGraphVisitor(
        testSubgraph.then,
        state,
        condNode.consequent
      );
      mergePrev(state, testSubgraph.then, consequentSubgraph.start);

      const alternateSubgraph = processSubGraphVisitor(
        testSubgraph.else,
        state,
        condNode.alternate
      );
      mergePrev(state, testSubgraph.else, alternateSubgraph.start);

      return {
        start: testSubgraph.start,
        then: [...consequentSubgraph.then, ...alternateSubgraph.then],
        else: [...consequentSubgraph.else, ...alternateSubgraph.else],
      };
    },
    SequenceExpression(node) {
      const seqNode = node as unknown as acorn.SequenceExpression;
      const startPrevId = previds[0]; // ??
      const lastSubgraph = seqNode.expressions.reduce<Subgraph>(
        (prev, expr) => {
          const subgraph = processSubGraphVisitor(
            [...prev.then, ...prev.else],
            state,
            expr
          );
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
      const memberNode = node as unknown as acorn.MemberExpression;
      const objectSubgraph =
        memberNode.object.type === 'Super'
          ? { start: state.currentId, then: previds, else: previds }
          : processSubGraphVisitor(previds, state, memberNode.object);
      if (!memberNode.computed && memberNode.property.type === 'Identifier') {
        const propertyNode: Omit<CFGNodeProp, 'id' | 'next'> = {
          type: 'prop',
          prop: memberNode.property.name,
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
        memberNode.computed &&
        memberNode.property.type !== 'Identifier' &&
        memberNode.property.type !== 'PrivateIdentifier'
      ) {
        const propertySubgraph = processSubGraphVisitor(
          [...objectSubgraph.then, ...objectSubgraph.else],
          state,
          memberNode.property
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

function generateCFG(ast: acorn.Node): CFGState {
  const state: CFGState = {
    nodes: new Map(),
    currentId: 0,
    loopStack: [],
    condList: [],
    endId: 1,
  };
  const startId = createNode(state, { type: 'start' });
  createNode(state, { type: 'end' });
  processStmtVisitor([startId], state, ast as acorn.BlockStatement);

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
  Symbol('JSCA_44_57');
  doc = doc || document;
  var i, val, script = doc.createElement('script');
  script.text = code;
  if (node) {
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
  const code3 = `
function example() {
  Symbol('JSCA_44_57'), n = n || ye;
  var a, o, s = n.createElement('script');
  if (s.text = e, t)
    for (a in xe)
      o = t[a] || t.getAttribute && t.getAttribute(a), o && s.setAttribute(a, o);
  n.head.appendChild(s).parentNode.removeChild(s);
}
  `;
  const code4 = `
function example() {
  Symbol('JSCA_2205_2224'), (t = t || 'fx');
  var n = v.queue(e, t),
    o = n.length,
    r = n.shift(),
    i = v._queueHooks(e, t);
  'inprogress' === r && ((r = n.shift()), o--),
    r && ('fx' === t && n.unshift('inprogress'), delete i.stop, r.call(e, i)),
    !o && i && i.empty.fire();
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
    try {
      const ast = func.body;
      const graph = generateCFG(ast);
      return {
        id: func.id,
        name: func.name,
        type: 'cfg',
        nodes: graph.nodes,
      };
    } catch (error) {
      console.error(`Error processing function ${func.name}:`, error);
      return {
        id: func.id,
        name: func.name,
        type: 'cfg',
        nodes: new Map(),
      };
    }
  });
}

export default cfg;
