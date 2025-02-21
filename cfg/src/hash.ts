import { rapidhash } from 'rapidhash-js';
import { CFG, CFGHash, CFGNode } from './utils/types';

function toHash(value: string): string {
  return rapidhash(value).toString();
}

function hashNode(
  node: CFGNode,
  state: Map<number, CFGNode>,
  hashMap: Map<number, string>,
  visited: Set<number> = new Set()
): string {
  if (visited.has(node.id)) {
    const loop = state.get(node.id);
    if (loop?.type === 'block') {
      if (loop?.loop) {
        return toHash(hashMap.get(node.id) || `cycle`);
      }
    }
    const hash = hashMap.get(node.id);
    if (!hash) throw new Error(`Unexpected loop detected in CFG: ${node.id}`);
    return toHash(hash);
  }
  visited.add(node.id);

  const hashParts: string[] = [node.type];

  switch (node.type) {
    case 'start':
      if (!node.next) throw new Error('Start node must have a next node');
      if (node.next.type === 'jump') {
        if (!node.next.jump)
          throw new Error('Start node must have a jump node');
        const nextNode = state.get(node.next.jump);
        if (nextNode) {
          hashParts.push(hashNode(nextNode, state, hashMap, visited));
        }
      }
      break;

    case 'block':
      if (node.sequences) {
        hashParts.push(
          node.sequences.map((seq) => `${seq.type}:${seq.value}`).join(',')
        );
      }
      if (!node.next) throw new Error('Block node must have a next node');
      switch (node.next.type) {
        case 'jump':
          if (!node.next.jump)
            throw new Error('Block node must have a jump node');
          const nextNode = state.get(node.next.jump);
          if (nextNode) {
            hashParts.push(hashNode(nextNode, state, hashMap, visited));
          }
          break;
        case 'cond':
          if (!node.next.nextThen || !node.next.nextElse)
            throw new Error('Block node must have a cond node');
          const thenNode = state.get(node.next.nextThen);
          if (thenNode) {
            hashParts.push(hashNode(thenNode, state, hashMap, visited));
          }
          const elseNode = state.get(node.next.nextElse);
          if (elseNode) {
            hashParts.push(hashNode(elseNode, state, hashMap, visited));
          }
          break;
      }
      break;

    case 'exit':
    case 'exception-exit':
      break;
  }
  hashMap.set(node.id, hashParts.join('|'));
  return toHash(hashParts.join('|'));
}

function generateCFGHash(f: CFG): CFGHash {
  const start = f.graph.get(0);

  if (!start) throw new Error('Empty CFG: missing exit node in first graph');
  const lit = [...f.literals].sort().join('|');

  const cfg_hash = hashNode(start, f.graph, new Map());
  const hash = toHash(cfg_hash.concat(lit));
  return { id: f.id, nodes: f.graph.size, hash: hash, body: f.body };
}

function convertHash(c1: CFG[]) {
  const hashes = c1.map(generateCFGHash);
  return hashes;
}

export default convertHash;
