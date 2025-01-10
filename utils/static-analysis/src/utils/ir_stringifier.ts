import { IR, IRInst, IRNode } from './types';

function flattenSequence(node: IRNode): IRNode[] {
  if (node.type !== IRInst.SEQ) {
    return [node];
  }

  const result: IRNode[] = [];

  const leftFlattened = flattenSequence(node.left);
  result.push(...leftFlattened);

  const rightFlattened = flattenSequence(node.right);
  result.push(...rightFlattened);

  return result;
}

function stringifyIRNode(node: IRNode, indent: number = 0): string {
  switch (node.type) {
    case IRInst.EMPTY:
      return ``;

    case IRInst.BLOCK:
      return `_`;

    case IRInst.SEQ:
      const flattened = flattenSequence(node);
      return (
        flattened.map((child) => stringifyIRNode(child, indent)).join(';\n') +
        ';\n'
      );
    case IRInst.UPDATE_PROP:
      return (
        stringifyIRNode(node.left, indent + 1) +
        ' = ' +
        stringifyIRNode(node.right, indent + 1)
      );

    case IRInst.PROP:
      return `${stringifyIRNode(node.object, indent + 1)}.${node.id}`;

    case IRInst.COND:
      const left = stringifyIRNode(node.true, indent + 1);
      const right = stringifyIRNode(node.false, indent + 1);
      const [s1, s2] = left > right ? [left, right] : [right, left];
      return (
        stringifyIRNode(node.test, indent + 1) +
        ' ? ' +
        `(${s1})` +
        ' : ' +
        `(${s2})`
      );

    case IRInst.FORIN:
      return [
        'for( ' +
          stringifyIRNode(node.left, indent + 1) +
          'in ' +
          stringifyIRNode(node.right, indent + 1) +
          ') {',
        stringifyIRNode(node.body, indent + 1),
        '}',
      ].join('\n');

    case IRInst.LOOP:
      return (
        'for(' +
        stringifyIRNode(node.init, indent + 1) +
        +';' +
        stringifyIRNode(node.test, indent + 1) +
        +';' +
        stringifyIRNode(node.update, indent + 1) +
        ') {\n' +
        stringifyIRNode(node.body, indent + 1) +
        '\n}'
      );

    default:
      throw new Error(`Unknown IR type: ${node.type}`);
  }
}

function cleanOutput(output: string): string {
  return output
    .split('\n')
    .filter(
      (line) =>
        line.trim() !== '' && line.trim() !== ';' && line.trim() !== '= ;'
    )
    .join('\n')
    .trim();
}

function stringifyIR(ir: IR): string {
  const rawOutput = stringifyIRNode(ir.ir);
  const cleanedOutput = cleanOutput(rawOutput);
  return cleanedOutput;
}

export { cleanOutput, stringifyIRNode };
export default stringifyIR;
