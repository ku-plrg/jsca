import { IRNode, IR, IRInst } from './types';

function flattenSequence(node: IRNode): IRNode[] {
  if (node.type !== IRInst.SEQ) {
    return [node];
  }

  if (!node.children || node.children.length !== 2) {
    throw new Error('SEQ node must have exactly 2 children');
  }

  const result: IRNode[] = [];

  const leftFlattened = flattenSequence(node.children[0]);
  result.push(...leftFlattened);

  const rightFlattened = flattenSequence(node.children[1]);
  result.push(...rightFlattened);

  return result;
}

function stringifyIRNode(node: IRNode, indent: number = 0): string {
  const none = IRInst.EMPTY;

  switch (node.type) {
    case IRInst.EMPTY:
      return ``;

    case IRInst.BLANK:
      return `_`;

    case IRInst.SEQ:
      if (!node.children || node.children.length !== 2) {
        throw new Error('SEQ node must have exactly 2 children');
      }
      const flattened = flattenSequence(node);
      return (
        flattened.map((child) => stringifyIRNode(child, indent)).join(';\n') +
        ';\n'
      );
    case IRInst.ASSIGN:
      if (!node.children || node.children.length !== 2) {
        throw new Error('ASSIGN node must have exactly 2 children');
      }
      return (
        stringifyIRNode(node.children[0], indent + 1) +
        ' = ' +
        stringifyIRNode(node.children[1], indent + 1)
      );

    case IRInst.PROP:
      if (!node.children) {
        throw new Error('PROP node must have exactly 1 child');
      }
      return `${stringifyIRNode(node.children[0], indent + 1)}.${node.id}`;

    case IRInst.COND:
      if (!node.children || node.children.length !== 3) {
        throw new Error('COND node must have exactly 3 children');
      }
      return (
        stringifyIRNode(node.children[0], indent + 1) +
        ' ? ' +
        stringifyIRNode(node.children[1], indent + 1) +
        ' : ' +
        stringifyIRNode(node.children[2], indent + 1)
      );

    case IRInst.FORIN:
      if (!node.children || node.children.length !== 3) {
        throw new Error('FORIN node must have exactly 3 children');
      }
      return [
        'for( ' +
          stringifyIRNode(node.children[0], indent + 1) +
          'in ' +
          stringifyIRNode(node.children[1], indent + 1) +
          ') {',
        stringifyIRNode(node.children[2], indent + 1),
        '}',
      ].join('\n');

    case IRInst.LOOP:
      if (!node.children || node.children.length !== 2) {
        throw new Error('LOOP node must have exactly 2 children');
      }
      return (
        'while' +
        stringifyIRNode(node.children[0], indent + 1) +
        ' {\n' +
        stringifyIRNode(node.children[1], indent + 1) +
        '\n}'
      );

    default:
      throw new Error(`Unknown IR type: ${node.type}`);
  }
}

function cleanOutput(output: string): string {
  return output
    .split('\n')
    .filter((line) => line.trim() !== '' && line.trim() !== ';')
    .join('\n')
    .trim();
}
function stringifyIR(ir: IR): string {
  const rawOutput = stringifyIRNode(ir.ir);
  const cleanedOutput = cleanOutput(rawOutput);
  return cleanedOutput;
}
export { stringifyIRNode };
export default stringifyIR;
