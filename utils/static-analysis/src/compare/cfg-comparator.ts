import { sha256 } from 'js-sha256';
import { CFG, CFGNode } from '../utils/types';

const getNodeName = (node: CFGNode | undefined): string => {
  if (!node) return '';
  switch (node.type) {
    case 'block':
      return `${node.id}:${
        node.sequences
          ? node.sequences
              .map((s) => (s.type == 'update_prop' ? `${s.value}=_` : s.value))
              .join(',')
          : ''
      }`;
    default:
      return `${node.id}:${node.type}`;
  }
};

export const stringifyCFG = (nodes: Map<number, CFGNode>): string => {
  const compareStrings: string[] = [];
  nodes.forEach((node, _) => {
    switch (node.type) {
      case 'condition':
        let thennode = node.then ? getNodeName(nodes.get(node.then)) : '';
        let elsenode = node.else ? getNodeName(nodes.get(node.else)) : '';
        [thennode, elsenode] =
          thennode > elsenode ? [elsenode, thennode] : [thennode, elsenode];
        compareStrings.push(`${getNodeName(node)} -> ${thennode + elsenode}`);
        break;

      case 'loop':
      case 'block':
      case 'start':
        compareStrings.push(
          `${getNodeName(node)} -> ${
            node.next ? getNodeName(nodes.get(node.next)) : ''
          }`
        );
        break;
      default:
        break;
    }
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
