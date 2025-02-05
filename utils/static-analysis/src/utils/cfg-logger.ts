import fs from 'fs';
import path from 'path';
import { AbsFunction, CFGNode, Library } from './types';

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

function logCFG<T extends AbsFunction>(absfuncs1: T[], lib1: Library) {
  absfuncs1.forEach((fun) => {
    const logDir = path.join(__dirname, '../logs/cfg/' + lib1.name);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    const id = fun.id;
    const logFile = path.join(logDir, `cfg_log_${id}.txt`);

    try {
      if (fun.type === 'cfg') {
        // Write stringified CFG to file
        const irString = stringifyCFG(fun.nodes);
        fs.writeFileSync(logFile, irString, 'utf8');
      }
    } catch (error) {
      console.error('Failed to write IR log:', error);
    }
  });
}

export default logCFG;
