import { IR, IRInst, IRNode } from './types';

function flattenSequence(node: IRNode): IRNode[] {
  if (node.type !== IRInst.SEQ) {
    return [node];
  }

  const result: IRNode[] = [];

  const leftFlattened = flattenSequence(node.left);
  result.push(...leftFlattened.filter((n) => n.type !== IRInst.EMPTY));

  const rightFlattened = flattenSequence(node.right);
  result.push(...rightFlattened.filter((n) => n.type !== IRInst.EMPTY));

  return result;
}

function stringifyIRNode(node: IRNode): string {
  switch (node.type) {
    case IRInst.EMPTY:
      return '';

    case IRInst.BLOCK:
      return `_`;
    case IRInst.LITERAL:
      return node.id;

    case IRInst.SEQ:
      const flattened = flattenSequence(node);
      return (
        flattened.map((child) => stringifyIRNode(child)).join(';\n') +
        (flattened.length > 1 ? ';\n' : '')
      );
    case IRInst.UPDATE_PROP:
      const l = stringifyIRNode(node.left);
      const r = stringifyIRNode(node.right);
      return l + ' = ' + r;
    case IRInst.PROP:
      return `${stringifyIRNode(node.object)}.${node.id}`;

    case IRInst.COND:
      const left = stringifyIRNode(node.true);
      const right = stringifyIRNode(node.false);
      const [s1, s2] = left > right ? [left, right] : [right, left];
      return stringifyIRNode(node.test) + ' ? ' + `(${s1})` + ' : ' + `(${s2})`;

    case IRInst.FORIN:
      return [
        'for( ' +
          stringifyIRNode(node.left) +
          'in ' +
          stringifyIRNode(node.right) +
          ') {',
        stringifyIRNode(node.body) + '}',
      ].join('\n');

    case IRInst.LOOP:
      return (
        'for(' +
        stringifyIRNode(node.init) +
        ';' +
        stringifyIRNode(node.test) +
        ';' +
        stringifyIRNode(node.update) +
        ') {\n' +
        stringifyIRNode(node.body) +
        '}'
      );
    case IRInst.DO_WHILE:
      return (
        'do {\n' +
        stringifyIRNode(node.body) +
        '} while(' +
        stringifyIRNode(node.test) +
        ')'
      );
    // default:
    //   throw new Error(`Unknown IR type: ${node.type}`);
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
  //const cleanedOutput = cleanOutput(rawOutput);
  return rawOutput;
}

export { cleanOutput, stringifyIRNode };
export default stringifyIR;
