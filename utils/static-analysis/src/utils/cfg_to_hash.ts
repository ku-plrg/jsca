import { createHash } from 'crypto';
import { CFG, CFGHash, CFGNode } from '../utils/types';

function toHash(value: string): string {
  return createHash('sha256').update(value).digest('hex');
}

function hashNode(
  node: CFGNode,
  state: Map<number, CFGNode>,
  hashMap: Map<number, string>,
  visited: Set<number> = new Set()
): string {
  if (visited.has(node.id)) {
    switch (node.type) {
      case 'loop':
        return toHash(hashMap.get(node.id) || `cycle`);
      default:
        const hash = hashMap.get(node.id);
        if (!hash)
          throw new Error(`Unexpected loop detected in CFG: ${node.id}`);

        return toHash(hash);
    }
  }
  visited.add(node.id);

  const hashParts: string[] = [node.type];

  switch (node.type) {
    case 'start':
      if (!node.next) throw new Error('Start node must have a next node');
      const nextNode = state.get(node.next);
      if (nextNode) {
        hashParts.push(hashNode(nextNode, state, hashMap, visited));
      }
      break;

    case 'condition': {
      if (!node.then) throw new Error('Condition node must have a then node');
      const thenBranch = state.get(node.then);
      if (!thenBranch) throw new Error('Missing then branch in condition node');

      if (!node.else) throw new Error('Condition node must have an else node');
      const elseBranch = state.get(node.else);
      if (!elseBranch) throw new Error('Missing else branch in condition node');

      const thenHash = hashNode(thenBranch, state, hashMap, visited);
      const elseHash = hashNode(elseBranch, state, hashMap, visited);

      if (thenHash > elseHash) {
        hashParts.push(`${thenHash}`, `${elseHash}`);
      } else {
        hashParts.push(`${elseHash}`, `${thenHash}`);
      }
      break;
    }

    case 'block':
      if (node.sequences) {
        hashParts.push(
          node.sequences.map((seq) => `${seq.type}:${seq.value}`).join(',')
        );
      }
      if (!node.next) throw new Error('Block node must have a next node');
      const blockNext = state.get(node.next);
      if (blockNext) {
        hashParts.push(hashNode(blockNext, state, hashMap, visited));
      }
      break;

    case 'loop':
      if (!node.next) throw new Error('Loop node must have a next node');
      const loopNext = state.get(node.next);
      if (loopNext) {
        hashParts.push(hashNode(loopNext, state, hashMap, visited));
      }
      break;

    case 'exit':
    case 'exception-exit':
      break;
  }
  hashMap.set(node.id, hashParts.join('|'));
  return createHash('sha256').update(hashParts.join('|')).digest('hex');
}

function generateCFGHash(f: CFG): CFGHash {
  const start = f.nodes.get(0);

  if (!start) throw new Error('Empty CFG: missing exit node in first graph');

  const cfg_hash = hashNode(start, f.nodes, new Map());
  const hash = toHash(cfg_hash.concat(f.literals.join('|')));
  return { nodes: f.nodes, hash: hash, func: f.func };
}

function convertHash(c1: CFG[]) {
  const hashes = c1.map(generateCFGHash);
  return hashes;
}

export default convertHash;
