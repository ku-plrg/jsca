import * as acorn from 'acorn';
import { exec } from 'child_process';
import { writeFile } from 'fs/promises';
import { promisify } from 'util';
import { cfgToIR } from '../utils/cfg_to_ir';
import { stringifyIRNode } from '../utils/ir_stringifier';
import { Function, IR } from '../utils/types';
import { CFGNode, CFGState } from '../utils/types/cfg';

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
  const fromNode = state.nodes.get(from);
  const toNode = state.nodes.get(to);
  if (fromNode && toNode) {
    if (!toNode.prev.includes(from)) {
      toNode.prev.push(from);
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

function processNode(
  state: CFGState,
  node: acorn.Node,
  prevId: number
): number {
  // merge
  const visitor = createVisitor(prevId, state);
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

function createVisitor(prevId: number, state: CFGState): Visitor {
  return {
    ExpressionStatement(node: acorn.Node) {
      return processNode(
        state,
        (node as acorn.ExpressionStatement).expression,
        prevId
      );
    },
    BlockStatement(node: acorn.Node) {
      const blockNode = node as acorn.BlockStatement;
      const statements = blockNode.body;
      if (statements.length === 0) {
        return prevId;
      }
      let result: number = processNode(state, statements[0], prevId);
      for (let i = 1; i < statements.length; i++) {
        result = processNode(state, statements[i], result);
      }
      return result;
    },
    EmptyStatement() {
      return prevId;
    },
    DebuggerStatement() {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    WithStatement() {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    ReturnStatement(node: acorn.Node) {
      const returnNode = node as acorn.ReturnStatement;
      const argumentNodeId = returnNode.argument
        ? processNode(state, returnNode.argument, prevId)
        : prevId;
      addEdge(state, argumentNodeId, state.endId);

      return state.endId;
    },
    LabeledStatement() {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    BreakStatement() {
      if (state.loopStack.length === 0) {
        throw new Error('Break outside loop');
      }
      const { exit } = state.loopStack[state.loopStack.length - 1];
      addEdge(state, prevId, exit);
      return prevId;
    },
    ContinueStatement() {
      if (state.loopStack.length === 0) {
        throw new Error('Continue outside loop');
      }
      const { start } = state.loopStack[state.loopStack.length - 1];
      addEdge(state, prevId, start);
      return start;
    },
    IfStatement(node: acorn.Node) {
      const ifNode = node as acorn.IfStatement;

      const testNodeId = processNode(state, ifNode.test, prevId);
      const ifNodeId = createNode(state, 'condition', null, [testNodeId]);

      const consequentNodeId = processNode(state, ifNode.consequent, ifNodeId);
      const alternateNodeId =
        ifNode.alternate && processNode(state, ifNode.alternate, ifNodeId);

      const ifExitNodeId = createNode(state, 'exit', null);
      const prevIds = [consequentNodeId];
      if (alternateNodeId) {
        prevIds.push(alternateNodeId);
        mergePrev(state, prevIds, ifExitNodeId);
      } else {
        [consequentNodeId, ifNodeId]
          .filter((id) => id !== state.endId)
          .forEach((id) => {
            addEdge(state, id, ifExitNodeId);
          });
      }

      return ifExitNodeId;
    },
    SwitchStatement(node: acorn.Node) {
      const switchNode = node as acorn.SwitchStatement;
      const discriminantNodeId = processNode(
        state,
        switchNode.discriminant,
        prevId
      );
      const switchStartNodeId = createNode(state, 'condition', null, [
        discriminantNodeId,
      ]);
      const switchExitNodeId = createNode(state, 'exit', null);

      state.loopStack.push({
        // loop가 아니긴 함..
        start: switchStartNodeId,
        exit: switchExitNodeId,
      });

      const prevIds: number[] = [];
      switchNode.cases.forEach((caseNode) => {
        // default case -> caseNode === null
        const testNodeId = caseNode.test
          ? processNode(state, caseNode.test, switchStartNodeId)
          : switchStartNodeId;
        const caseTestNodeId = createNode(state, 'condition', null, [
          testNodeId,
        ]);
        // todo : 엄밀하게 하려면 caseBodyNodeId와 연결해야 함. 그런데 caseBodyNodeId가 없을 때도 있다..
        prevIds.forEach((id) => addEdge(state, id, caseTestNodeId));
        let caseBodyNodeId = caseTestNodeId;
        caseNode.consequent.forEach((statement) => {
          caseBodyNodeId = processNode(state, statement, caseBodyNodeId);
        });
        const closedNodeIds = state.nodes.get(switchExitNodeId)?.prev ?? [];
        if (
          !closedNodeIds.includes(caseBodyNodeId) &&
          state.endId !== caseBodyNodeId
        ) {
          prevIds.push(caseBodyNodeId);
        } else {
          prevIds.length = 0;
        }
      });

      state.loopStack.pop();

      return switchExitNodeId;
    },
    ThrowStatement() {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    TryStatement() {
      // todo
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    WhileStatement(node: acorn.Node) {
      const whileNode = node as acorn.WhileStatement;
      const loopStartId = createNode(state, 'loop', null, [prevId]);
      const loopExitId = createNode(state, 'exit', null);
      const testNodeId = processNode(state, whileNode.test, loopStartId);
      const condNodeId = createNode(state, 'condition', null, [testNodeId]);
      addEdge(state, condNodeId, loopExitId);
      state.loopStack.push({
        start: loopStartId,
        exit: loopExitId,
      });

      const bodyNodeId = processNode(state, whileNode.body, condNodeId);
      addEdge(state, bodyNodeId, loopStartId);

      state.loopStack.pop();

      return loopExitId;
    },
    DoWhileStatement(node: acorn.Node) {
      const doWhileNode = node as acorn.DoWhileStatement;
      const loopStartId = createNode(state, 'loop', null, [prevId]);
      const loopExitId = createNode(state, 'exit', null);
      state.loopStack.push({
        start: loopStartId,
        exit: loopExitId,
      });

      const bodyNodeId = processNode(state, doWhileNode.body, loopStartId);
      const testNodeId = processNode(state, doWhileNode.test, bodyNodeId);
      addEdge(state, testNodeId, loopStartId);
      addEdge(state, testNodeId, loopExitId);

      state.loopStack.pop();

      return loopExitId;
    },
    ForStatement(node) {
      const forNode = node as unknown as acorn.ForStatement;
      let currentId = prevId;
      // node.init.type === 'SequenceExpression' ??
      if (forNode.init) {
        currentId = processNode(state, forNode.init, currentId);
      }

      const loopStartId = createNode(state, 'loop', null, [currentId]);
      const testNodeId = forNode.test
        ? processNode(state, forNode.test, loopStartId)
        : loopStartId;
      const condNodeId = createNode(state, 'condition', null, [testNodeId]);
      const loopExitId = createNode(state, 'exit', null);
      addEdge(state, condNodeId, loopExitId);

      state.loopStack.push({
        start: loopStartId,
        exit: loopExitId,
      });
      const bodyNodeId = processNode(state, forNode.body, condNodeId);
      const updateNodeId = forNode.update
        ? processNode(state, forNode.update, bodyNodeId)
        : bodyNodeId;
      addEdge(state, updateNodeId, loopStartId);
      state.loopStack.pop();

      return loopExitId;
    },
    ForInStatement(node: acorn.Node) {
      const ForInNode = node as acorn.ForInStatement;
      const leftNodeId = processNode(state, ForInNode.left, prevId);
      const rightNodeId = processNode(state, ForInNode.right, leftNodeId);
      const loopStartId = createNode(state, 'loop', null, [rightNodeId]);
      const loopExitId = createNode(state, 'exit', null);
      state.loopStack.push({
        start: loopStartId,
        exit: loopExitId,
      });
      const bodyNodeId = processNode(state, ForInNode.body, loopStartId);
      addEdge(state, loopStartId, loopExitId);
      addEdge(state, bodyNodeId, loopStartId);
      state.loopStack.pop();
      return loopExitId;
    },
    ForOfStatement(node: acorn.Node) {
      const ForOfNode = node as acorn.ForOfStatement;
      const leftNodeId = processNode(state, ForOfNode.left, prevId);
      const rightNodeId = processNode(state, ForOfNode.right, leftNodeId);
      const loopStartId = createNode(state, 'loop', null, [rightNodeId]);
      const loopExitId = createNode(state, 'exit', null);
      state.loopStack.push({
        start: loopStartId,
        exit: loopExitId,
      });
      const bodyNodeId = processNode(state, ForOfNode.body, loopStartId);
      addEdge(state, loopStartId, loopExitId); // not sure
      addEdge(state, bodyNodeId, loopStartId);
      state.loopStack.pop();
      return loopExitId;
    },
    FunctionDeclaration(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    VariableDeclaration(node: acorn.Node) {
      const VarDeclNode = node as acorn.VariableDeclaration;
      const decl = VarDeclNode.declarations.filter((decl) => decl.init);
      let currentId = prevId;
      decl.forEach(
        (decl) =>
          (currentId = processNode(
            state,
            decl.init as acorn.Expression,
            currentId
          ))
      );
      return currentId;
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
      return prevId;
    },
    ArrayExpression(node: acorn.Node) {
      const ArrayNode = node as acorn.ArrayExpression;
      let currentId = prevId;
      ArrayNode.elements.forEach(
        (elem) =>
          (currentId = processNode(state, elem as acorn.Expression, currentId))
      );
      return currentId;
    },
    ObjectExpression(node: acorn.Node) {
      const objectNode = node as acorn.ObjectExpression;
      let currentId = prevId;
      objectNode.properties.forEach((prop) => {
        if (prop.type === 'SpreadElement') {
          currentId = processNode(state, prop.argument, currentId);
        } else {
          currentId = processNode(state, prop.value, currentId);
        }
      });
      return currentId;
    },
    FunctionExpression(node: acorn.Node) {
      const FuncNode = node as acorn.FunctionExpression;
      const funcId = processNode(state, FuncNode.body, prevId);
      return funcId;
    },
    UnaryExpression(node: acorn.Node) {
      const UnaryNode = node as acorn.UnaryExpression;
      return processNode(state, UnaryNode.argument, prevId);
    },
    UpdateExpression(node: acorn.Node) {
      const UpdateNode = node as acorn.UpdateExpression;
      return processNode(state, UpdateNode.argument, prevId);
    },
    BinaryExpression(node: acorn.Node) {
      const BinaryNode = node as acorn.BinaryExpression;
      const leftNodeId = processNode(state, BinaryNode.left, prevId);
      const rightNodeId = processNode(state, BinaryNode.right, leftNodeId);
      return rightNodeId;
    },
    AssignmentExpression(node: acorn.Node) {
      const AssignmentNode = node as acorn.AssignmentExpression;
      const leftNodeId = processNode(state, AssignmentNode.left, prevId);
      const rightNodeId = processNode(state, AssignmentNode.right, leftNodeId);
      const left = state.nodes.get(leftNodeId);
      if (left?.type === 'prop') {
        return createNode(state, 'update_prop', left.node, [rightNodeId]);
      }
      return rightNodeId;
    },
    LogicalExpression(node) {
      const LogicalNode = node as unknown as acorn.LogicalExpression;

      const leftNodeId = processNode(state, LogicalNode.left, prevId);
      const CondNodeId = createNode(state, 'condition', null, [leftNodeId]);

      const rightNodeId = processNode(state, LogicalNode.right, CondNodeId);

      const condExitNodeId = createNode(state, 'exit', null);
      addEdge(state, CondNodeId, condExitNodeId);
      addEdge(state, rightNodeId, condExitNodeId);

      return condExitNodeId;
    },
    MemberExpression(node: acorn.Node) {
      const MemberNode = node as acorn.MemberExpression;
      const objectNodeId = processNode(state, MemberNode.object, prevId);
      if (!MemberNode.computed && MemberNode.property.type === 'Identifier') {
        const propertyNodeId = createNode(state, 'prop', MemberNode.property, [
          objectNodeId,
        ]);
        return propertyNodeId;
      }
      if (MemberNode.computed && MemberNode.property.type !== 'Identifier') {
        const propertyNodeId = processNode(
          state,
          MemberNode.property,
          objectNodeId
        );
        return propertyNodeId;
      }
      return objectNodeId;
    },
    ConditionalExpression(node) {
      const CondNode = node as unknown as acorn.ConditionalExpression;

      const testNodeId = processNode(state, CondNode.test, prevId);
      const CondNodeId = createNode(state, 'condition', null, [testNodeId]);

      const consequentNodeId = processNode(
        state,
        CondNode.consequent,
        CondNodeId
      );
      const alternateNodeId = processNode(
        state,
        CondNode.alternate,
        CondNodeId
      );

      const condExitNodeId = createNode(state, 'exit', null);
      addEdge(state, consequentNodeId, condExitNodeId);
      addEdge(state, alternateNodeId, condExitNodeId);

      return condExitNodeId;
    },
    CallExpression(node: acorn.Node) {
      const CallNode = node as acorn.CallExpression;
      let currentId = processNode(state, CallNode.callee, prevId);
      CallNode.arguments.forEach((argument) => {
        currentId = processNode(state, argument, currentId);
      });
      return currentId;
    },
    NewExpression(node: acorn.Node) {
      const NewNode = node as acorn.NewExpression;
      let currentId = processNode(state, NewNode.callee, prevId);
      NewNode.arguments.forEach((argument) => {
        currentId = processNode(state, argument, currentId);
      });
      return currentId;
    },
    SequenceExpression(node: acorn.Node) {
      const SequenceNode = node as acorn.SequenceExpression;
      let currentId = prevId;
      SequenceNode.expressions.forEach((expression) => {
        currentId = processNode(state, expression, currentId);
      });
      return currentId;
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

function removeExitNodes(graph: CFGState): void {
  // First, identify all exit nodes
  const exitNodes = Array.from(graph.nodes.entries())
    .filter(([_, node]) => node.type === 'exit')
    .map(([id, _]) => id);

  // For each exit node
  exitNodes.forEach((exitId) => {
    const exitNode = graph.nodes.get(exitId);
    if (!exitNode) return;

    // Get all parents of the exit node
    const parentIds = exitNode.prev;

    // Get all children that have this exit node as a parent
    const childNodes = Array.from(graph.nodes.values()).filter((node) =>
      node.prev.includes(exitId)
    );

    // For each parent of the exit node
    parentIds.forEach((parentId) => {
      // Connect parent directly to all children
      childNodes.forEach((childNode) => {
        // Remove the exit node from child's prev list
        childNode.prev = childNode.prev.filter((id) => id !== exitId);
        // Add parent as a predecessor if not already present
        if (!childNode.prev.includes(parentId)) {
          childNode.prev.push(parentId);
        }
      });
    });

    // Remove the exit node from the graph
    graph.nodes.delete(exitId);
  });
}

function generateCFG(ast: acorn.Node): CFGState {
  const state: CFGState = {
    nodes: new Map(),
    currentId: 0,
    endId: 1,
    loopStack: [],
  };
  const startId = createNode(state, 'start', null);
  createNode(state, 'end', null);

  processNode(state, ast, startId);
  removeExitNodes(state);

  return state;
}

function generateIR(ast: acorn.Node) {
  const CFG = generateCFG(ast);
  const ir = cfgToIR(CFG);
  return ir;
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
        label = 'Condition';
        color = '#87CEEB'; // Light blue
        if (node.node?.type === 'Literal') {
          label += `\\n${(node.node as acorn.Literal).value}`;
        }
        break;
      case 'loop':
        label = 'Loop';
        color = '#DDA0DD'; // Plum
        break;
      case 'prop':
        label = `Property\\n${(node.node as acorn.Identifier)?.name || ''}`;
        break;
      case 'update_prop':
        label = `Update\\n${(node.node as acorn.Identifier)?.name || ''}`;
        break;
      default:
        if (node.node?.type) {
          label = node.node.type;
          if (node.node.type === 'ReturnStatement') {
            const returnNode = node.node as acorn.ReturnStatement;
            if (returnNode.argument?.type === 'Literal') {
              label += `\\n${(returnNode.argument as acorn.Literal).value}`;
            }
          }
        } else {
          label = node.type;
        }
    }

    dotString += `  node${id} [label="${label}", fillcolor="${color}"];\n`;
  }

  dotString += '\n  // Edges\n';

  // Add edges
  for (const [id, node] of nodes.entries()) {
    for (const prevId of node.prev) {
      dotString += `  node${prevId} -> node${id} [color="#666666"];\n`;
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
  const code = `
function example() {
  Symbol('JSCA_194_211');
  var n, a = 0;
  if (r(e))
    for (n = e.length; a < n && !1 !== t.call(e[a], a, e[a]); a++);
  else
    for (a in e)
      if (!1 === t.call(e[a], a, e[a]))
        break;
  return e;
}

  `;

  try {
    const ast = acorn.parse(code, { ecmaVersion: 2020 });
    const functionBody = (ast.body[0] as acorn.FunctionDeclaration).body;
    const graph = generateCFG(functionBody);
    console.log(stringifyIRNode(cfgToIR(graph)));
    const dotContent = await cfgToDot(graph);

    await writeFile('cfg.dot', dotContent, 'utf8');

    await generatePNG(dotContent, 'cfg.png');
  } catch (error) {
    console.error('Error in main:', error);
  }
}
if (require.main === module) {
  main().catch(console.error);
}

function cfg(functions: Function[]): IR[] {
  return functions.map((func) => {
    const ast = func.body;
    const graph = generateCFG(ast);
    return {
      id: func.id,
      name: func.name,
      type: 'ir',
      ir: cfgToIR(graph),
    };
  });
}
export default cfg;
