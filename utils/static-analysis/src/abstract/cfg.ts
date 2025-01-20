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

type StatementVisitor = {
  [K in acorn.AnyNode['type']]?: (
    node: Extract<acorn.Statement, { type: K }>
  ) => number[];
};

type ExprVisitor = {
  [K in acorn.AnyNode['type']]?: (
    node: Extract<acorn.Expression, { type: K }>
  ) => Subgraph;
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
  };
}

function processStmtVisitor(
  previds: number[],
  state: CFGState,
  node: acorn.Statement
) {
  try {
    const visitor = stmtVisitor(previds, state)[node.type] as (
      _node: Extract<acorn.Statement, { type: typeof node.type }>
    ) => number[];
    return visitor(node);
  } catch (e) {
    throw UnsupportedError(node.type);
  }
}

function processExprVisitor(state: CFGState, node: acorn.Expression) {
  try {
    const visitor = exprVisitor(state)[node.type] as (
      _node: Extract<acorn.Expression, { type: typeof node.type }>
    ) => Subgraph;
    return visitor(node);
  } catch (e) {
    throw UnsupportedError(node.type);
  }
}

function exprVisitor(state: CFGState): ExprVisitor {
  return {
    LogicalExpression(node) {
      const start = createNode(state, { type: 'condition' });
      const testSubgraph = processExprVisitor(state, node.left);
      const consequentSubgraph = processExprVisitor(state, node.right);
      addEdge(state, start, testSubgraph.start);
      if (node.operator === '&&') {
        mergePrev(state, testSubgraph.then, consequentSubgraph.start);
        return {
          start,
          then: [...consequentSubgraph.then],
          else: [...testSubgraph.else, ...consequentSubgraph.else],
        };
      } else {
        mergePrev(state, testSubgraph.else, consequentSubgraph.start);
        return {
          start,
          then: [...testSubgraph.then, ...consequentSubgraph.then],
          else: [...consequentSubgraph.else],
        };
      }
    },
    ConditionalExpression(node) {
      const start = createNode(state, { type: 'condition' });
      const testSubgraph = processExprVisitor(state, node.test);
      addEdge(state, start, testSubgraph.start);

      const consequentSubgraph = processExprVisitor(state, node.consequent);
      mergePrev(state, testSubgraph.then, consequentSubgraph.start);

      const alternateSubgraph = processExprVisitor(state, node.alternate);
      mergePrev(state, testSubgraph.else, alternateSubgraph.start);

      return {
        start,
        then: [...consequentSubgraph.then, ...alternateSubgraph.then],
        else: [...consequentSubgraph.else, ...alternateSubgraph.else],
      };
    },
    SequenceExpression(node) {
      const startPrevId = state.currentId;
      const lastSubgraph = node.expressions.reduce<Subgraph>(
        (prev, expr) => {
          const subgraph = processExprVisitor(state, expr);
          // 선택지 1. merge할 권리는 Stmt에게 준다.
          // return {
          //   ...subgraph,
          //   then: [...prev.then, ...subgraph.then],
          //   else: [...prev.else, ...subgraph.else],
          // };
          // 선택지 2. 여기서 merge하고 마지막 expr이 만든 브랜치만 제대로 준다.
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
      // const newNode: Omit<CFGNodeProp, 'id' | 'next'> = {
      //   type: 'prop',
      //   prop: node.name,
      // };
      // const id = createNode(state, newNode);
      const prevId = state.currentId;
      return { start: prevId, then: [prevId], else: [prevId] };
    },
  };
}

// function removeExitNodes(graph: CFGState): void {
//   // First, identify all exit nodes
//   const exitNodes = Array.from(graph.nodes.entries())
//     .filter(([_, node]) => node.type === 'exit')
//     .map(([id, _]) => id);

//   // For each exit node
//   exitNodes.forEach((exitId) => {
//     const exitNode = graph.nodes.get(exitId);
//     if (!exitNode) return;

//     // Get all parents of the exit node
//     const parentIds = exitNode.prev;

//     // Get all children that have this exit node as a parent
//     const childNodes = Array.from(graph.nodes.values()).filter((node) =>
//       node.prev.includes(exitId)
//     );

//     // For each parent of the exit node
//     parentIds.forEach((parentId) => {
//       // Connect parent directly to all children
//       childNodes.forEach((childNode) => {
//         // Remove the exit node from child's prev list
//         childNode.prev = childNode.prev.filter((id) => id !== exitId);
//         // Add parent as a predecessor if not already present
//         if (!childNode.prev.includes(parentId)) {
//           childNode.prev.push(parentId);
//         }
//       });
//     });

//     // Remove the exit node from the graph
//     graph.nodes.delete(exitId);
//   });
// }

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

  processStmtVisitor([startId], state, ast as acorn.Statement);

  return state;
}

// function generateIR(ast: acorn.Node) {
//   const CFG = generateCFG(ast);
//   const ir = cfgToIR(CFG);
//   return ir;
// }

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
        // if (node.node?.type === 'Literal') {
        //   label += `\\n${(node.node as acorn.Literal).value}`;
        // }
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
  const code = `
function example() {
  if (_.f ? (_.g&&_.h) : (_.i||_.k)) {
    return _.e;
  }
  return ((_.a ? _.b : _.c) || _.d);
  // ((_.a ? _.b : _.c), _.d) ? (_.e&&_.f) : (_.g||_.h);
  // return (_.i,_.j);
}
  `;

  try {
    const ast = acorn.parse(code, { ecmaVersion: 2020 });
    const functionBody = (ast.body[0] as acorn.FunctionDeclaration).body;
    const graph = generateCFG(functionBody);
    console.log(JSON.stringify(Object.fromEntries(graph.nodes), null, 2));
    // console.log(stringifyIRNode(cfgToIR(graph)));
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
      ir: { type: IRInst.EMPTY }, // cfgToIR(graph),
    };
  });
}
export default cfg;
