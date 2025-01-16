import { CFGState, ControlFlowPair } from './types';
import { IRInst, IRNode } from './types';

interface ConversionState {
  visited: Set<number>;
  currentNode: number | null;
}

function createEmptyNode(): IRNode {
  return { type: IRInst.EMPTY };
}

function createSeqNode(left: IRNode, right: IRNode): IRNode {
  if (left.type === IRInst.EMPTY) return right;
  if (right.type === IRInst.EMPTY) return left;
  return {
    type: IRInst.SEQ,
    left,
    right,
  };
}

export function cfgToIR(cfg: CFGState): IRNode {
  const state: ConversionState = {
    visited: new Set(),
    currentNode: null,
  };

  const startNode = Array.from(cfg.nodes.values()).find(
    (node) => node.type === 'start'
  );
  if (!startNode) {
    return createEmptyNode();
  }

  return processNode(cfg, startNode.id, state);
}

function processNode(
  cfg: CFGState,
  nodeId: number,
  state: ConversionState
): IRNode {
  // Handle cycles and already visited nodes
  if (state.visited.has(nodeId)) {
    return createEmptyNode();
  }
  state.visited.add(nodeId);

  const node = cfg.nodes.get(nodeId);
  if (!node) {
    return createEmptyNode();
  }
  const isExitNode = Array.from(cfg.controlFlowPairs.values()).some(
    (pair) => pair.exit === nodeId
  );
  if (isExitNode) {
    return createEmptyNode();
  }

  // Get successor nodes
  const successors = getSuccessors(cfg, nodeId);
  let irNode: IRNode;
  switch (node.type) {
    case 'start':
      irNode = processSuccessors(cfg, successors, state);
      break;

    case 'end':
      irNode = createEmptyNode();
      break;

    case 'condition': {
      const pair = cfg.controlFlowPairs.find((pair) => pair.entry === nodeId);
      irNode = processCondition(cfg, successors, state, pair);
      break;
    }

    case 'loop': {
      const pair = cfg.controlFlowPairs.find((pair) => pair.entry === nodeId);
      if (!pair) {
        throw new Error('Control flow pair not found');
      }
      irNode = processLoop(cfg, successors, state, pair);
      break;
    }
    case 'prop':
      irNode = createSeqNode(
        {
          type: IRInst.PROP,
          id: (node.node as any)?.name || '',
          object: { type: IRInst.BLOCK },
        },
        processSuccessors(cfg, successors, state)
      );
      break;

    case 'update_prop':
      irNode = createSeqNode(
        {
          type: IRInst.UPDATE_PROP,
          left: {
            type: IRInst.PROP,
            id: (node.node as any)?.name || '',
            object: { type: IRInst.BLOCK },
          },
          right: { type: IRInst.BLOCK },
        },
        processSuccessors(cfg, successors, state)
      );
      break;

    default:
      irNode = processSuccessors(cfg, successors, state);
  }
  return irNode;
}

function processCondition(
  cfg: CFGState,
  successors: number[],
  state: ConversionState,
  pair: ControlFlowPair | undefined
): IRNode {
  const [trueBranch, falseBranch] = successors.filter((s) => {
    const node = cfg.nodes.get(s);
    return node && node.type !== 'end';
  });
  if (!trueBranch && !falseBranch) {
    return createEmptyNode();
  }

  const truenode = processNode(cfg, trueBranch, state);
  const falsenode = processNode(cfg, falseBranch, state);
  const [trueIR, falseIR] =
    truenode > falsenode ? [truenode, falsenode] : [falsenode, truenode];
  const condIR = {
    type: IRInst.COND,
    test: { type: IRInst.BLOCK },
    true: trueIR,
    false: falseIR,
  };
  if (pair !== undefined) {
    const exitNode = cfg.nodes.get(pair.exit);
    if (!exitNode) return createEmptyNode();

    const afterExitSuccessors = getSuccessors(cfg, pair.exit);
    const afterExitIR = processSuccessors(cfg, afterExitSuccessors, state);
    return createSeqNode(condIR as IRNode, afterExitIR);
  }
  return condIR as IRNode;
}
//TODO : is order of bodyIR correct?
function processLoop(
  cfg: CFGState,
  successors: number[],
  state: ConversionState,
  pair: ControlFlowPair
): IRNode {
  const bodySuccessors = successors.filter((s) => s !== pair.exit);
  if (bodySuccessors.length === 0) {
    return createEmptyNode();
  }

  const bodyIRs = bodySuccessors.map((s) => processNode(cfg, s, state));
  const bodySeq = bodyIRs.reduce(
    (acc, ir) => createSeqNode(acc, ir),
    createEmptyNode()
  );

  const loopIR = {
    type: IRInst.LOOP,
    body: bodySeq,
  };

  // Get the successors after the exit node
  const exitNode = cfg.nodes.get(pair.exit);
  if (!exitNode) return loopIR as IRNode;

  const afterExitSuccessors = getSuccessors(cfg, pair.exit);
  const afterExitIR = processSuccessors(cfg, afterExitSuccessors, state);

  // Combine loop IR with the code after exit
  return createSeqNode(loopIR as IRNode, afterExitIR);
}

function processSuccessors(
  cfg: CFGState,
  successors: number[],
  state: ConversionState
): IRNode {
  if (successors.length === 0) {
    return createEmptyNode();
  }

  let result = createEmptyNode();
  for (const successor of successors) {
    const nextIR = processNode(cfg, successor, state);
    result = createSeqNode(result, nextIR);
  }

  return result;
}

function getSuccessors(cfg: CFGState, nodeId: number): number[] {
  return Array.from(cfg.nodes.entries())
    .filter(([_, node]) => node.prev.includes(nodeId))
    .map(([id, _]) => id);
}
