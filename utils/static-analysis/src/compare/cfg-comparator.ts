import { sha256 } from 'js-sha256';
import { CFG, CFGNode } from '../utils/types';

const getNodeName = (node: CFGNode | undefined): string =>
  node ? (node.type === 'prop' ? node.prop ?? '' : node.type) : '';

const toHash = (nodes: Map<number, CFGNode>): string => {
  const compareStrings: string[] = [];
  nodes.forEach((node, _) => {
    compareStrings.push(
      `${getNodeName(node)} -> ${node.next
        .map((id) => getNodeName(nodes.get(id)))
        .sort()
        .join(',')}`
    );
  });
  const hash = sha256(compareStrings.sort().join('\n'));
  return hash;
};

function cfgComparator(f1: CFG, f2: CFG): boolean {
  if (f1.nodes.size !== f2.nodes.size) return false;
  return toHash(f1.nodes) === toHash(f2.nodes);
}

export default cfgComparator;
