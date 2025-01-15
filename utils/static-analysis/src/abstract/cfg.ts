import * as acorn from 'acorn';

interface CFGNode {
  id: number;
  type: 'start' | 'loop' | 'condition' | 'prop' | 'update_prop' | 'exit';
  node: acorn.Node | null;
  prev: number[];
}

interface CFGState {
  nodes: Map<number, CFGNode>;
  currentId: number;
}

type Visitor = {
  [key: string]: <T extends acorn.Node>(node: T) => number;
};

function createNode(
  state: CFGState,
  type: CFGNode['type'],
  node: acorn.Node | null,
  prevIds: number[] = []
): number {
  const id = state.currentId;
  state.currentId++;
  state.nodes.set(id, {
    id,
    type,
    node,
    prev: prevIds,
  });
  return id;
}

function addEdge(state: CFGState, from: number, to: number): void {
  const toNode = state.nodes.get(to);
  if (toNode && !toNode.prev.includes(from)) {
    console.log('toNode Id', toNode.id);
    toNode.prev.push(from);
  }
}

function mergePrev(
  state: CFGState,
  prevIds: number[],
  exitIds: number[],
  currentId: number
) {
  prevIds
    .filter((id) => !exitIds.includes(id))
    .forEach((prevId) => {
      addEdge(state, prevId, currentId);
    });
}

function processNode(
  state: CFGState,
  node: acorn.Node,
  prevId: number,
  exitIds: number[]
): number {
  // merge
  const visitor = createVisitor(prevId, exitIds, state);
  const handler = visitor[node.type];
  try {
    if (!handler) {
      console.error(`Unsupported node type: ${node.type}`);
      return prevId;
    }
    return handler(node);
  } catch (e) {
    return prevId;
  }
}

function UnsupportedStatementError(statement: string) {
  const error = new Error(`Unsupported statement type: ${statement}`);
  error.name = 'UnsupportedStatementError';
  return error;
}

function createVisitor(
  prevId: number,
  exitIds: number[],
  state: CFGState
): Visitor {
  return {
    ExpressionStatement(node) {
      return processNode(
        state,
        (node as unknown as acorn.ExpressionStatement).expression,
        prevId,
        exitIds
      );
    },
    BlockStatement(node) {
      const blockNode = node as unknown as acorn.BlockStatement;
      const statements = blockNode.body;
      if (statements.length === 0) {
        return prevId;
      }
      let result: number = processNode(state, statements[0], prevId, exitIds);
      for (let i = 1; i < statements.length; i++) {
        result = processNode(state, statements[i], result, exitIds);
      }
      return result;
    },
    EmptyStatement(node) {
      return prevId;
    },
    DebuggerStatement(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    WithStatement(node: acorn.Node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ReturnStatement(node) {
      const returnNode = node as unknown as acorn.ReturnStatement;
      const argumentNodeId = returnNode.argument
        ? processNode(state, returnNode.argument, prevId, exitIds)
        : prevId;
      addEdge(state, argumentNodeId, exitIds[0]);

      return exitIds[0];
    },
    LabeledStatement() {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    BreakStatement() {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ContinueStatement() {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    IfStatement(node) {
      const ifNode = node as unknown as acorn.IfStatement;

      const testNodeId = processNode(state, ifNode.test, prevId, exitIds);
      const ifNodeId = createNode(state, 'condition', null, [testNodeId]);

      const consequentNodeId = processNode(
        state,
        ifNode.consequent,
        ifNodeId,
        exitIds
      );
      const alternateNodeId =
        ifNode.alternate &&
        processNode(state, ifNode.alternate, ifNodeId, exitIds);

      const ifExitNodeId = createNode(state, 'exit', null);
      mergePrev(
        state,
        alternateNodeId
          ? [consequentNodeId, alternateNodeId]
          : [consequentNodeId],
        exitIds,
        ifExitNodeId
      );

      return ifExitNodeId;
    },
    SwitchStatement(node: acorn.Node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ThrowStatement(node: acorn.Node) {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    TryStatement(node: acorn.Node) {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    WhileStatement(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    DoWhileStatement(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ForStatement(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ForInStatement(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ForOfStatement(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    FunctionDeclaration(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    VariableDeclaration(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ClassDeclaration(node) {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    Identifier(node) {
      return prevId;
    },
    Literal(node) {
      return prevId;
    },
    ThisExpression(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ArrayExpression(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ObjectExpression(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    FunctionExpression(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    UnaryExpression(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    UpdateExpression(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    BinaryExpression(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    AssignmentExpression(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    LogicalExpression(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    MemberExpression(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ConditionalExpression(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    CallExpression(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    NewExpression(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    SequenceExpression(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ArrowFunctionExpression(node: acorn.Node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    YieldExpression(node: acorn.Node) {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    TemplateLiteral(node: acorn.Node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    TaggedTemplateExpression(node: acorn.Node) {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ClassExpression(node: acorn.Node) {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    MetaProperty(node: acorn.Node) {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    AwaitExpression(node: acorn.Node) {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ChainExpression(node: acorn.Node) {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ImportExpression(node: acorn.Node) {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ParenthesizedExpression(node: acorn.Node) {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ObjectPattern(node: acorn.Node) {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ArrayPattern(node: acorn.Node) {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    RestElement(node: acorn.Node) {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    AssignmentPattern(node: acorn.Node) {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
  };
}

function generateCFG(ast: acorn.Node): CFGState {
  const state: CFGState = {
    nodes: new Map(),
    currentId: 0,
  };
  const startId = createNode(state, 'start', null);
  const exitId = createNode(state, 'exit', null);

  processNode(state, ast, startId, [exitId]);

  return state;
}

const code = `
function example() {
  if(true) {
  return 'a';
  } else {
   return 'b';
  };
  return 'c';
}
`;

const ast = acorn.parse(code, {
  ecmaVersion: 2020,
});
const ast2 = (ast.body[0] as acorn.FunctionDeclaration).body;
const graph = generateCFG(ast2);
console.log(JSON.stringify(Object.fromEntries(graph.nodes), null, 2));
