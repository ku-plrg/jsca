import { sha256 } from 'js-sha256';
import { CFG, CFGNode } from '../utils/types';

const getNodeName = (node: CFGNode | undefined): string => {
  return node ? `${node.id}:${node.type}` : '';
};

export const stringifyCFG = (nodes: Map<number, CFGNode>): string => {
  const compareStrings: string[] = [];
  nodes.forEach((node, _) => {
    compareStrings.push(
      `${getNodeName(node)} -> ${node.nextIds.sort().join(',')}`
    );
  });

  return compareStrings.join('\n'); // sort 해야 할까?
};

const toHash = (nodes: Map<number, CFGNode>): string =>
  sha256(stringifyCFG(nodes));

function cfgComparator(f1: CFG, f2: CFG): boolean {
  if (f1.nodes.size !== f2.nodes.size) return false;
  return toHash(f1.nodes) === toHash(f2.nodes);
}

export default cfgComparator;
