import * as acorn from 'acorn';
import { exec } from 'child_process';
import { writeFile } from 'fs/promises';
import { promisify } from 'util';
import {
  CFGNode,
  CFGNodeProp,
  CFGState,
  Function,
  IR,
  IRInst,
  Subgraph,
} from '../utils/types';

type Stmt = acorn.Statement;
type Expr = acorn.Expression | acorn.Declaration;

type StatementVisitor = {
  [K in acorn.AnyNode['type']]?: (node: Extract<Stmt, { type: K }>) => number[];
};

type ExprVisitor = {
  [K in acorn.AnyNode['type']]?: (node: Extract<Expr, { type: K }>) => Subgraph;
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
      const subgraph = processExprVisitor(state, node.expression);
      mergePrev(state, previds, subgraph.start);
      return [...subgraph.then, ...subgraph.else];
    },
    BlockStatement(node) {
      let prevIds = previds;
      node.body.forEach((stmt) => {
        prevIds = processStmtVisitor(prevIds, state, stmt);
      });
      return prevIds;
    },
    IfStatement(node) {
      const testSubgraph = processExprVisitor(state, node.test);
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
    ReturnStatement(node) {
      let prevIds = [...previds];
      if (node.argument) {
        const argumentSubgraph = processExprVisitor(state, node.argument);
        mergePrev(state, prevIds, argumentSubgraph.start);
        prevIds = [...argumentSubgraph.then, ...argumentSubgraph.else];
      }
      mergePrev(state, prevIds, state.endId);
      return [state.endId];
    },
    EmptyStatement() {
      return previds;
    },
    WhileStatement(node) {
      const loopStart = createNode(state, { type: 'loop' });
      mergePrev(state, previds, loopStart);
      const testSubgraph = processExprVisitor(state, node.test);
      addEdge(state, loopStart, testSubgraph.start);

      state.loopStack.push({ break: [], continue: [] });
      const bodyIds = processStmtVisitor(testSubgraph.then, state, node.body);
      const lastLoopStack = state.loopStack.pop();
      if (lastLoopStack) {
        mergePrev(state, bodyIds, loopStart);
        mergePrev(state, lastLoopStack.continue, loopStart);
        return [...lastLoopStack.break, ...testSubgraph.else];
      }

      return testSubgraph.else;
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
    ForInStatement(node) {
      const loopStart = createNode(state, { type: 'loop' });
      mergePrev(state, previds, loopStart);
      const rightSubgraph = processExprVisitor(state, node.right);
      addEdge(state, loopStart, rightSubgraph.start);

      state.loopStack.push({ break: [], continue: [] });
      const bodyIds = processStmtVisitor(
        [...rightSubgraph.then, ...rightSubgraph.else],
        state,
        node.body
      );
      const lastLoopStack = state.loopStack.pop();
      if (lastLoopStack) {
        mergePrev(state, bodyIds, loopStart);
        mergePrev(state, lastLoopStack.continue, loopStart);
        return [loopStart, ...lastLoopStack.break];
      }
      return [loopStart];
    },
    ForOfStatement(node) {
      const loopStart = createNode(state, { type: 'loop' });
      mergePrev(state, previds, loopStart);
      const rightSubgraph = processExprVisitor(state, node.right);
      addEdge(state, loopStart, rightSubgraph.start);

      state.loopStack.push({ break: [], continue: [] });
      const bodyIds = processStmtVisitor(
        [...rightSubgraph.then, ...rightSubgraph.else],
        state,
        node.body
      );
      const lastLoopStack = state.loopStack.pop();
      if (lastLoopStack) {
        mergePrev(state, bodyIds, loopStart);
        mergePrev(state, lastLoopStack.continue, loopStart);
        return [loopStart, ...lastLoopStack.break];
      }
      return [loopStart];
    },
    ForStatement(node) {
      const loopStart = createNode(state, { type: 'loop' });
      if (node.init && node.init.type !== 'VariableDeclaration') {
        const initSubgraph = processExprVisitor(state, node.init);
        mergePrev(state, previds, initSubgraph.start);
        mergePrev(
          state,
          [...initSubgraph.else, ...initSubgraph.then],
          loopStart
        );
      } else {
        mergePrev(state, previds, loopStart);
      }

      const testToBreakIds = [];
      const testToBodyIds = [];
      if (node.test) {
        const testSubgraph = processExprVisitor(state, node.test);
        testToBreakIds.push(...testSubgraph.else);
        testToBodyIds.push(...testSubgraph.then);
        addEdge(state, loopStart, testSubgraph.start);
      } else {
        testToBodyIds.push(loopStart);
      }

      state.loopStack.push({ break: [], continue: [] });
      const bodyIds = processStmtVisitor(testToBodyIds, state, node.body);

      const updateSubgraph =
        node.update && processExprVisitor(state, node.update);
      if (updateSubgraph) mergePrev(state, bodyIds, updateSubgraph.start);
      const loopLastIds = updateSubgraph
        ? [...updateSubgraph.else, ...updateSubgraph.then]
        : bodyIds;

      const lastLoopStack = state.loopStack.pop();
      if (lastLoopStack) {
        mergePrev(state, loopLastIds, loopStart);
        mergePrev(state, lastLoopStack.continue, loopStart);
        return [...lastLoopStack.break, ...testToBreakIds];
      }
      return testToBreakIds;
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
    throw UnsupportedError(node.type);
  }
}

function processExprVisitor(state: CFGState, node: Expr) {
  try {
    const visitor = exprVisitor(state)[node.type] as (
      _node: Extract<Expr, { type: typeof node.type }>
    ) => Subgraph;
    return visitor(node);
  } catch (e) {
    throw UnsupportedError(node.type);
  }
}

function exprVisitor(state: CFGState): ExprVisitor {
  return {
    LogicalExpression(node) {
      const testSubgraph = processExprVisitor(state, node.left);
      const consequentSubgraph = processExprVisitor(state, node.right);
      if (node.operator === '&&') {
        mergePrev(state, testSubgraph.then, consequentSubgraph.start);
        return {
          start: testSubgraph.start,
          then: [...consequentSubgraph.then],
          else: [...testSubgraph.else, ...consequentSubgraph.else],
        };
      } else {
        mergePrev(state, testSubgraph.else, consequentSubgraph.start);
        return {
          start: testSubgraph.start,
          then: [...testSubgraph.then, ...consequentSubgraph.then],
          else: [...consequentSubgraph.else],
        };
      }
    },
    ConditionalExpression(node) {
      const testSubgraph = processExprVisitor(state, node.test);

      const consequentSubgraph = processExprVisitor(state, node.consequent);
      mergePrev(state, testSubgraph.then, consequentSubgraph.start);

      const alternateSubgraph = processExprVisitor(state, node.alternate);
      mergePrev(state, testSubgraph.else, alternateSubgraph.start);

      return {
        start: testSubgraph.start,
        then: [...consequentSubgraph.then, ...alternateSubgraph.then],
        else: [...consequentSubgraph.else, ...alternateSubgraph.else],
      };
    },
    SequenceExpression(node) {
      const startPrevId = state.currentId;
      const lastSubgraph = node.expressions.reduce<Subgraph>(
        (prev, expr) => {
          const subgraph = processExprVisitor(state, expr);
          mergePrev(state, [...prev.then, ...prev.else], subgraph.start);
          return subgraph;
        },
        { start: startPrevId, then: [], else: [] }
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
          ? {
              start: state.currentId,
              then: [state.currentId],
              else: [state.currentId],
            }
          : processExprVisitor(state, node.object);
      if (!node.computed && node.property.type === 'Identifier') {
        const propertyNode: Omit<CFGNodeProp, 'id' | 'next'> = {
          type: 'prop',
          prop: node.property.name,
        };
        const propertyNodeId = createNode(state, propertyNode);
        mergePrev(state, objectSubgraph.then, propertyNodeId);
        return {
          start: objectSubgraph.start,
          then: [propertyNodeId],
          else: objectSubgraph.else,
        };
      }
      if (
        node.computed &&
        node.property.type !== 'Identifier' &&
        node.property.type !== 'PrivateIdentifier'
      ) {
        const propertySubgraph = processExprVisitor(state, node.property);
        mergePrev(state, objectSubgraph.then, propertySubgraph.start);
        return {
          start: objectSubgraph.start,
          then: [...propertySubgraph.then],
          else: [...propertySubgraph.else, ...objectSubgraph.else],
        };
      }
      return objectSubgraph;
    },
    Identifier(node) {
      const prevId = state.currentId;

      return { start: prevId, then: [prevId], else: [prevId] };
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
      case 'loop':
        label = 'Loop';
        color = '#DDA0DD'; // Plum
        break;
      case 'prop':
        label = `Property\\n${node.prop || ''}`;
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
  // babel-minify (2)
  for (_.a; _.b && _.c;_.d);
  _.e;
}
  `;
  const code3 = `
function example() {
  // original (3)
    for (_.a; _.b;_.d) {
      if (_.c) {
        break;
      }
    }
    _.e;
}
  `;
  const code4 = `
function example() {
  // custom code (4)
  for (_.a; ;_.d) {
    if(_.b || _.c) break;
  }
    _.e;
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
      //console.log(stringifyIRNode(cfgToIR(graph)));
      const dotContent = await cfgToDot(graph);

      await writeFile(`${filename}.dot`, dotContent, 'utf8');

      await generatePNG(dotContent, `${filename}.png`);
    } catch (error) {
      console.error('Error in main:', error);
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
      ir: { type: IRInst.EMPTY }, // cfgToIR(graph),
    };
  });
}
export default cfg;
