import { CFGState, CFGNode } from './types';
import { IRInst, IRNode } from './types';

interface ConversionState {
  visited: Set<number>;
  currentNode: number | null;
}

function createEmptyNode(): IRNode {
  return { type: IRInst.EMPTY };
}

function createSeqNode(left: IRNode, right: IRNode): IRNode {
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

    case 'condition':
      irNode = processCondition(cfg, node, successors, state);
      break;

    case 'loop':
      irNode = processLoop(cfg, node, successors, state);
      break;

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
      irNode = createEmptyNode();
  }

  if (successors.length > 0 && irNode.type === IRInst.EMPTY) {
    const successorNode = processSuccessors(cfg, successors, state);
    if (successorNode.type !== IRInst.EMPTY) {
      irNode = successorNode;
    }
  }

  return irNode;
}

function processCondition(
  cfg: CFGState,
  node: CFGNode,
  successors: number[],
  state: ConversionState
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
  return {
    type: IRInst.COND,
    test: { type: IRInst.BLOCK },
    true: trueIR,
    false: falseIR,
  };
}
//TODO : is order of bodyIR correct?
function processLoop(
  cfg: CFGState,
  node: CFGNode,
  successors: number[],
  state: ConversionState
): IRNode {
  const bodySuccessor = successors.filter((s) => {
    const node = cfg.nodes.get(s);
    return node && node.type !== 'exit';
  });

  if (!bodySuccessor) {
    return createEmptyNode();
  }

  const bodyIR = bodySuccessor.map((body) => processNode(cfg, body, state));
  const bodySeq = bodyIR.reduce(
    (acc, ir) => createSeqNode(acc, ir),
    createEmptyNode()
  );
  return {
    type: IRInst.LOOP,
    body: bodySeq,
  };
}

function processSuccessors(
  cfg: CFGState,
  successors: number[],
  state: ConversionState
): IRNode {
  if (successors.length === 0) {
    return createEmptyNode();
  }

  let result = processNode(cfg, successors[0], state);
  for (let i = 1; i < successors.length; i++) {
    const nextIR = processNode(cfg, successors[i], state);
    if (nextIR.type !== IRInst.EMPTY) {
      result = createSeqNode(result, nextIR);
    }
  }

  return result;
}

function getSuccessors(cfg: CFGState, nodeId: number): number[] {
  return Array.from(cfg.nodes.entries())
    .filter(([_, node]) => node.prev.includes(nodeId))
    .map(([id, _]) => id);
}
