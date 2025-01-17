import * as acorn from 'acorn';
import { exec } from 'child_process';
import { writeFile } from 'fs/promises';
import { promisify } from 'util';
import { cfgToIR } from '../utils/cfg_to_ir';
import { stringifyIRNode } from '../utils/ir_stringifier';
import { CFGNode, CFGState, Function, IR } from '../utils/types';

type Visitor = {
  [key: string]: <T extends acorn.Node>(node: T) => number[];
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

function mergePrev(state: CFGState, prevIds: number[], exitId: number): void {
  let filteredPrevIds = prevIds
    .filter((id) => state.endId !== id)
    .filter((id) => !state.seqExitIds.includes(id));
  filteredPrevIds.forEach((id) => addEdge(state, id, exitId));
}

function processNode(
  state: CFGState,
  node: acorn.Node,
  prevIds: number[]
): number[] {
  let visitor: Visitor[] = [];
  let handler: (node: acorn.Node) => number[];
  prevIds.forEach((id) => visitor.push(createVisitor(id, state)));
  let nextIds: number[] = [];
  for (let i = 0; i < visitor.length; i++) {
    handler = visitor[i][node.type];
    if (handler) {
      nextIds.push(...handler(node));
    } else {
      return prevIds;
    }
  }
  return nextIds;
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
        [prevId]
      );
    },
    BlockStatement(node: acorn.Node) {
      const blockNode = node as acorn.BlockStatement;
      const statements = blockNode.body;
      if (statements.length === 0) {
        return [prevId];
      }

      const result = statements.reduce<{
        result: number[];
        prevSeqExitId: number;
      }>(
        ({ result, prevSeqExitId }, statement) => {
          let seqExitId = createNode(state, 'seq_exit', null);
          state.seqExitIds.push(seqExitId);
          state.currentseqExitId = seqExitId;
          const newResult = processNode(state, statement, [prevSeqExitId]);
          console.log(newResult, seqExitId, statements[0].type);
          if (newResult.length === 1 && newResult[0] === prevId) {
            seqExitId = prevId;
          } else {
            mergePrev(state, newResult, seqExitId);
          }
          return { result: newResult, prevSeqExitId: seqExitId };
        },
        { result: [prevId], prevSeqExitId: prevId }
      );

      // let seqExitId = createNode(state, 'seq_exit', null);
      // state.currentseqExitId = seqExitId;
      // let result = processNode(state, statements[0], [prevId]);
      // console.log(result, seqExitId, statements[0].type);
      // if (result.length === 1 && result[0] === prevId) {
      //   seqExitId = prevId;
      // } else {
      //   mergePrev(state, result, seqExitId);
      // }
      // for (let i = 1; i < statements.length; i++) {
      //   prevId = seqExitId;
      //   seqExitId = createNode(state, 'seq_exit', null);
      //   state.currentseqExitId = seqExitId;
      //   result = processNode(state, statements[i], [prevId]);
      //   console.log(result, seqExitId, statements[i].type);
      //   if (result.length === 1 && result[0] === seqExitId) {
      //     //seqExitId = prevId;
      //   } else {
      //     mergePrev(state, result, seqExitId);
      //   }
      // }
      return result.result;
    },
    EmptyStatement() {
      return [prevId];
    },
    ReturnStatement(node: acorn.Node) {
      const returnNode = node as acorn.ReturnStatement;
      const argumentNodeId = returnNode.argument
        ? processNode(state, returnNode.argument, [prevId])
        : [prevId];
      argumentNodeId.forEach((id) => addEdge(state, id, state.endId));

      return [state.endId];
    },
    BreakStatement() {
      if (state.loopStack.length === 0) {
        throw new Error('Break outside loop');
      }
      const { exit } = state.loopStack[state.loopStack.length - 1];
      [prevId].forEach((id) => addEdge(state, id, exit));
      return [exit];
    },
    ContinueStatement() {
      if (state.loopStack.length === 0) {
        throw new Error('Continue outside loop');
      }
      const { start } = state.loopStack[state.loopStack.length - 1];
      [prevId].forEach((id) => addEdge(state, id, start));
      return [start];
    },
    IfStatement(node: acorn.Node) {
      const ifNode = node as acorn.IfStatement;

      const testNodeId = processNode(state, ifNode.test, [prevId]);
      const CondNodeId = createNode(state, 'condition', null, testNodeId);

      const consequentNodeId = processNode(state, ifNode.consequent, [
        CondNodeId,
      ]);
      const alternateNodeId =
        ifNode.alternate && processNode(state, ifNode.alternate, [CondNodeId]);
      const prev = [...consequentNodeId];
      if (alternateNodeId) {
        prev.push(...alternateNodeId);
      } else {
        prev.push(state.currentseqExitId);
      }
      return prev;
    },
    SwitchStatement(node: acorn.Node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    WhileStatement(node: acorn.Node) {
      const whileNode = node as acorn.WhileStatement;
      const loopStartId = createNode(state, 'loop', null, [prevId]);
      const testNodeId = processNode(state, whileNode.test, [loopStartId]);
      const condNodeId = createNode(state, 'condition', null, testNodeId);
      const loopExitId = state.currentseqExitId;
      state.loopStack.push({
        start: loopStartId,
        exit: loopExitId,
      });
      state.controlFlowPairs.push({
        entry: loopStartId,
        exit: loopExitId,
      });

      const bodyNodeId = processNode(state, whileNode.body, [condNodeId]);
      bodyNodeId.forEach((id) => addEdge(state, id, loopStartId));

      state.loopStack.pop();

      return [loopExitId];
    },
    DoWhileStatement(node: acorn.Node) {
      const doWhileNode = node as acorn.DoWhileStatement;
      const loopStartId = createNode(state, 'loop', null, [prevId]);
      const loopExitId = state.currentseqExitId;
      state.loopStack.push({
        start: loopStartId,
        exit: loopExitId,
      });
      state.controlFlowPairs.push({
        entry: loopStartId,
        exit: loopExitId,
      });

      const bodyNodeId = processNode(state, doWhileNode.body, [loopStartId]);
      const testNodeIds = processNode(state, doWhileNode.test, bodyNodeId);
      testNodeIds.forEach((testNodeId) => {
        addEdge(state, testNodeId, loopStartId);
        addEdge(state, testNodeId, loopExitId);
      });
      state.loopStack.pop();

      return [loopExitId];
    },
    ForStatement(node) {
      const forNode = node as unknown as acorn.ForStatement;
      let currentId = [prevId];
      if (forNode.init) {
        currentId = processNode(state, forNode.init, currentId);
      }
      const loopStartId = createNode(state, 'loop', null, currentId);
      const loopExitId = state.currentseqExitId;
      state.loopStack.push({
        start: loopStartId,
        exit: loopExitId,
      });
      state.controlFlowPairs.push({
        entry: loopStartId,
        exit: loopExitId,
      });
      let testNodeId = [loopStartId];
      if (forNode.test) {
        testNodeId = processNode(state, forNode.test, [loopStartId]);
        const condNodeId = createNode(state, 'condition', null, testNodeId);
        addEdge(state, condNodeId, loopExitId);
        testNodeId = [condNodeId];
      }

      const bodyNodeId = processNode(state, forNode.body, testNodeId);
      const updateNodeId = forNode.update
        ? processNode(state, forNode.update, bodyNodeId)
        : bodyNodeId;
      updateNodeId.forEach((id) => addEdge(state, id, loopStartId));
      state.loopStack.pop();

      return [loopExitId];
    },
    ForInStatement(node: acorn.Node) {
      const ForInNode = node as acorn.ForInStatement;
      const leftNodeId = processNode(state, ForInNode.left, [prevId]);
      const rightNodeId = processNode(state, ForInNode.right, leftNodeId);
      const loopStartId = createNode(state, 'loop', null, rightNodeId);
      const loopExitId = state.currentseqExitId;
      state.loopStack.push({
        start: loopStartId,
        exit: loopExitId,
      });
      state.controlFlowPairs.push({
        entry: loopStartId,
        exit: loopExitId,
      });
      const bodyNodeId = processNode(state, ForInNode.body, [loopStartId]);
      bodyNodeId.forEach((id) => addEdge(state, id, loopStartId));
      state.loopStack.pop();
      return [loopExitId];
    },
    ForOfStatement(node: acorn.Node) {
      const ForOfNode = node as acorn.ForOfStatement;
      const leftNodeId = processNode(state, ForOfNode.left, [prevId]);
      const rightNodeId = processNode(state, ForOfNode.right, leftNodeId);
      const loopStartId = createNode(state, 'loop', null, rightNodeId);
      const loopExitId = state.currentseqExitId;
      state.loopStack.push({
        start: loopStartId,
        exit: loopExitId,
      });
      state.controlFlowPairs.push({
        entry: loopStartId,
        exit: loopExitId,
      });
      const bodyNodeIds = processNode(state, ForOfNode.body, [loopStartId]);
      addEdge(state, loopStartId, loopExitId); // not sure
      bodyNodeIds.forEach((bodyNodeId) =>
        addEdge(state, bodyNodeId, loopStartId)
      );

      state.loopStack.pop();
      return [loopExitId];
    },
    FunctionDeclaration(node) {
      throw UnsupportedStatementError('FunctionDeclaration');
    },
    VariableDeclaration(node: acorn.Node) {
      const VarDeclNode = node as acorn.VariableDeclaration;
      const decl = VarDeclNode.declarations.filter((decl) => decl.init);
      let currentId = [prevId];
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
      return [prevId];
    },
    Literal(node) {
      return [prevId];
    },
    ThisExpression(node) {
      return [prevId];
    },
    ArrayExpression(node: acorn.Node) {
      const ArrayNode = node as acorn.ArrayExpression;
      let currentId = [prevId];
      ArrayNode.elements.forEach(
        (elem) =>
          (currentId = processNode(state, elem as acorn.Expression, currentId))
      );
      return currentId;
    },
    ObjectExpression(node: acorn.Node) {
      const objectNode = node as acorn.ObjectExpression;
      let currentId = [prevId];
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
      const funcId = processNode(state, FuncNode.body, [prevId]);
      return funcId;
    },
    UnaryExpression(node: acorn.Node) {
      const UnaryNode = node as acorn.UnaryExpression;
      return processNode(state, UnaryNode.argument, [prevId]);
    },
    UpdateExpression(node: acorn.Node) {
      const UpdateNode = node as acorn.UpdateExpression;
      return processNode(state, UpdateNode.argument, [prevId]);
    },
    BinaryExpression(node: acorn.Node) {
      const BinaryNode = node as acorn.BinaryExpression;
      const leftNodeId = processNode(state, BinaryNode.left, [prevId]);
      const rightNodeId = processNode(state, BinaryNode.right, leftNodeId);
      return rightNodeId;
    },
    AssignmentExpression(node: acorn.Node) {
      const AssignmentNode = node as acorn.AssignmentExpression;
      const leftNodeIds = processNode(state, AssignmentNode.left, [prevId]);
      const rightNodeIds = processNode(
        state,
        AssignmentNode.right,
        leftNodeIds
      );
      const assignmentNodeIds = [];
      for (const leftNodeId of leftNodeIds) {
        const left = state.nodes.get(leftNodeId);
        if (left?.type === 'prop') {
          assignmentNodeIds.push(
            createNode(state, 'update_prop', left.node, rightNodeIds)
          );
        }
      }
      return assignmentNodeIds;
    },
    LogicalExpression(node: acorn.Node) {
      const LogicalNode = node as acorn.LogicalExpression;
      const sequenceExitId = createNode(state, 'seq_exit', null);
      state.seqExitIds.push(sequenceExitId);
      const prevseqExitId = state.currentseqExitId;
      state.currentseqExitId = sequenceExitId;
      const testNodeId = processNode(state, LogicalNode.left, [prevId]);
      const CondNodeId = createNode(state, 'condition', null, testNodeId);

      const consequentNodeId = processNode(state, LogicalNode.right, [
        CondNodeId,
      ]);
      const alternateNodeId = [state.currentseqExitId];
      mergePrev(state, [CondNodeId], sequenceExitId);
      state.currentseqExitId = prevseqExitId;
      addEdge(state, sequenceExitId, state.currentseqExitId);
      return [...consequentNodeId];
    },
    MemberExpression(node: acorn.Node) {
      const MemberNode = node as acorn.MemberExpression;
      console.log(
        'MemberExpression',
        MemberNode.property,
        'seqExit',
        state.currentseqExitId,
        'curId',
        state.currentId
      );

      const objectNodeId = processNode(state, MemberNode.object, [prevId]);
      if (!MemberNode.computed && MemberNode.property.type === 'Identifier') {
        const propertyNodeId = createNode(
          state,
          'prop',
          MemberNode.property,
          objectNodeId
        );
        return [propertyNodeId];
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
    ConditionalExpression(node: acorn.Node) {
      const CondNode = node as acorn.ConditionalExpression;

      const testNodeId = processNode(state, CondNode.test, [prevId]);
      const CondNodeId = createNode(state, 'condition', null, testNodeId);

      const consequentNodeId = processNode(state, CondNode.consequent, [
        CondNodeId,
      ]);
      const alternateNodeId =
        CondNode.alternate &&
        processNode(state, CondNode.alternate, [CondNodeId]);
      const prev = [...consequentNodeId];
      if (alternateNodeId) {
        prev.push(...alternateNodeId);
      } else {
        prev.push(CondNodeId);
      }
      return prev;
    },

    CallExpression(node: acorn.Node) {
      const CallNode = node as acorn.CallExpression;
      let currentId = processNode(state, CallNode.callee, [prevId]);
      CallNode.arguments.forEach((argument) => {
        currentId = processNode(state, argument, currentId);
      });
      return currentId;
    },
    NewExpression(node: acorn.Node) {
      const NewNode = node as acorn.NewExpression;
      let currentId = processNode(state, NewNode.callee, [prevId]);
      NewNode.arguments.forEach((argument) => {
        currentId = processNode(state, argument, currentId);
      });
      return currentId;
    },
    SequenceExpression(node: acorn.Node) {
      const SequenceNode = node as acorn.SequenceExpression;
      let currentId = [prevId];
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
  };
}

function removeExitNodes(graph: CFGState): void {
  // First, identify all exit nodes
  const exitNodes = Array.from(graph.nodes.entries()).map(([id, _]) => id);

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
    currentseqExitId: 0,
    seqExitIds: [],
    loopStack: [],
    controlFlowPairs: [],
  };
  const startId = createNode(state, 'start', null);
  createNode(state, 'end', null);

  processNode(state, ast, [startId]);

  return state;
}

async function cfgToDot(graph: CFGState): Promise<string> {
  const nodes = graph.nodes;
  const pairMap = new Map<number, number>(); // node id -> pair number

  // Build pair mapping
  graph.controlFlowPairs.forEach((pair, index) => {
    pairMap.set(pair.entry, index + 1);
    pairMap.set(pair.exit, index + 1);
  });

  let dotString = 'digraph CFG {\n';
  dotString += '  rankdir=TB;\n';
  dotString += '  node [shape=box, style=filled, fontname="Arial"];\n\n';

  // Add nodes
  for (const [id, node] of nodes.entries()) {
    let label = '';
    let color = 'white';
    const pairNum = pairMap.get(id);
    const pairSuffix = pairNum ? `\\nPair ${pairNum}` : '';

    switch (node.type) {
      case 'start':
        label = 'Start' + pairSuffix;
        color = '#90EE90';
        break;
      case 'end':
        label = 'End' + pairSuffix;
        color = '#A9A9A9';
        break;
      case 'condition':
        label = 'Condition' + pairSuffix + '(' + id + ')';
        color = '#87CEEB';
        if (node.node?.type === 'Literal') {
          label += `\\n${(node.node as acorn.Literal).value}`;
        }
        break;
      case 'seq_exit':
        label = 'Seq Exit' + pairSuffix + '(' + id + ')';
        color = '#FFD700';
        break;
      case 'loop':
        label = 'Loop' + pairSuffix + '(' + id + ')';
        color = '#DDA0DD';
        break;
      case 'prop':
        label =
          `Property${pairSuffix}\\n${
            (node.node as acorn.Identifier)?.name || ''
          }` +
          '(' +
          id +
          ')';
        color = pairNum ? `#FFB6C1` : 'white'; // Light pink for paired nodes
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
  const code2 = `
function example(){
 if(_.a&&_.b&&_.c){
  _.d
}
else _.e
}
  `;
  const code3 = `
function example() {
if(_.a||_.b||_.c){
  _.d
}
else _.e

}
  `;
  const code4 = `
function example() {
  Symbol('JSCA_194_211');
  // custom code (4)
  for (_.a; ; _.d) {
    if(_.b && _.c) break;
  }
    return _.e;
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
      console.log(stringifyIRNode(cfgToIR(graph)));
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
