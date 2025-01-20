import * as acorn from 'acorn';
import { exec } from 'child_process';
import { writeFile } from 'fs/promises';
import { promisify } from 'util';
import { cfgToIR } from '../utils/cfg_to_ir';
import { stringifyIRNode } from '../utils/ir_stringifier';
import { Function, IR } from '../utils/types';
import { CFGNode, CFGState, Subgraph } from '../utils/types/cfg';

type StatementVisitor = {
  [key: string]: <T extends acorn.Statement>(node: T) => number[];
};
type ExprVisitor = {
  [key: string]: <T extends acorn.Expression>(node: T) => Subgraph;
};
function createNode(
  state: CFGState,
  info:
    | {
        type: 'loop';
        rest?: { body: number };
      }
    | {
        type: 'condition';
        rest?: { then: number; else: number };
      }
    | {
        type: 'prop';
        rest?: { prop: string };
      }
    | {
        type: 'start' | 'end';
        rest?: {};
      }
): number {
  const id = state.currentId;
  state.currentId++;
  const nextIds: number[] = [];
  state.nodes.set(id, {
    id,
    type: info.type,
    next: nextIds,
    ...(info.rest ?? {}),
  });
  return id;
}

function addEdge(state: CFGState, from: number, to: number): void {
  const fromNode = state.nodes.get(from);
  const toNode = state.nodes.get(to);
  if (fromNode && toNode) {
    if (!fromNode.next.includes(to)) {
      fromNode.next.push(to);
    }
  }
}

function mergePrev(state: CFGState, prevIds: number[], currentId: number) {
  prevIds.forEach((prevId) => {
    addEdge(state, prevId, currentId);
  });
}

function UnsupportedStatementError(statement: string) {
  const error = new Error(`Unsupported statement type: ${statement}`);
  error.name = 'UnsupportedStatementError';
  return error;
}

function stmtVisitor(previds: number[], state: CFGState): StatementVisitor {
  return {
    ExpressionStatement(node) {
      const exprNode = node as unknown as acorn.ExpressionStatement;
      const subgraph = exprVisitor(state).Expression(exprNode.expression);
      mergePrev(state, previds, subgraph.start);
      return [...subgraph.then, ...subgraph.else];
    },
    BlockStatement(node) {
      const blockNode = node as unknown as acorn.BlockStatement;
      let prevIds = previds;
      blockNode.body.forEach((stmt) => {
        prevIds = stmtVisitor(previds, state)[stmt.type](stmt);
      });
      return prevIds;
    },
    IfStatement(node) {
      const ifNode = node as unknown as acorn.IfStatement;
      const testSubgraph = exprVisitor(state).Expression(ifNode.test);
      mergePrev(state, previds, testSubgraph.start);
      const consequentNodeId = stmtVisitor(testSubgraph.then, state).Block(
        ifNode.consequent
      );
      const nextIds = [...consequentNodeId];
      if (ifNode.alternate) {
        nextIds.push(
          ...stmtVisitor(testSubgraph.else, state).Block(ifNode.alternate)
        );
      } else {
        nextIds.push(...testSubgraph.else);
      }
      return nextIds;
    },
  };
}
function exprVisitor(state: CFGState): ExprVisitor {
  return {
    LogicalExpression(node) {
      const logicalNode = node as unknown as acorn.LogicalExpression;
      const testSubgraph = exprVisitor(state).Expression(logicalNode.left);
      const consequentSubgraph = exprVisitor(state).Expression(
        logicalNode.right
      );
      const start = createNode(state, { type: 'condition' });
      if (logicalNode.operator === '&&') {
        addEdge(state, ...testSubgraph.then, start);
        return {
          start,
          then: [...consequentSubgraph.then],
          else: [...testSubgraph.else],
        };
      }
      return {
        start,
        then: [...testSubgraph.then],
        else: [...consequentSubgraph.else],
      };
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
function processNode(stae: CFGState, node: acorn.Node, prevIds: number[]) {
  stmtVisitor(prevIds, stae)[node.type](node as acorn.Statement);
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

  processNode(state, ast, [startId]);

  return state;
}

// function generateIR(ast: acorn.Node) {
//   const CFG = generateCFG(ast);
//   const ir = cfgToIR(CFG);
//   return ir;
// }

// async function cfgToDot(graph: CFGState): Promise<string> {
//   const nodes = graph.nodes;
//   let dotString = 'digraph CFG {\n';
//   dotString += '  rankdir=TB;\n';
//   dotString += '  node [shape=box, style=filled, fontname="Arial"];\n\n';

//   // Add nodes
//   for (const [id, node] of nodes.entries()) {
//     let label = '';
//     let color = 'white'; // Default color

//     switch (node.type) {
//       case 'start':
//         label = 'Start';
//         color = '#90EE90'; // Light green
//         break;
//       case 'end':
//         label = 'End';
//         color = '#A9A9A9'; // dark grey
//         break;
//       case 'condition':
//         label = 'Condition';
//         color = '#87CEEB'; // Light blue
//         if (node.node?.type === 'Literal') {
//           label += `\\n${(node.node as acorn.Literal).value}`;
//         }
//         break;
//       case 'loop':
//         label = 'Loop';
//         color = '#DDA0DD'; // Plum
//         break;
//       case 'prop':
//         label = `Property\\n${(node.node as acorn.Identifier)?.name || ''}`;
//         break;
//       case 'update_prop':
//         label = `Update\\n${(node.node as acorn.Identifier)?.name || ''}`;
//         break;
//       default:
//         if (node.node?.type) {
//           label = node.node.type;
//           if (node.node.type === 'ReturnStatement') {
//             const returnNode = node.node as acorn.ReturnStatement;
//             if (returnNode.argument?.type === 'Literal') {
//               label += `\\n${(returnNode.argument as acorn.Literal).value}`;
//             }
//           }
//         } else {
//           label = node.type;
//         }
//     }

//     dotString += `  node${id} [label="${label}", fillcolor="${color}"];\n`;
//   }

//   dotString += '\n  // Edges\n';

//   // Add edges
//   for (const [id, node] of nodes.entries()) {
//     for (const prevId of node.prev) {
//       dotString += `  node${prevId} -> node${id} [color="#666666"];\n`;
//     }
//   }

//   dotString += '}\n';
//   return dotString;
// }

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
