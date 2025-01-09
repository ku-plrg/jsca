import { IRNode, IR, IRInst } from './types';

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
      if (node.children[0].type === none && node.children[1].type === none) {
        return ``;
      }
      if (node.children[0].type === none) {
        return stringifyIRNode(node.children[1], indent);
      }
      if (node.children[1].type === none) {
        return stringifyIRNode(node.children[0], indent);
      }
      return [
        stringifyIRNode(node.children[0], indent + 1) + ';',
        stringifyIRNode(node.children[1], indent + 1),
      ].join('\n');

    case IRInst.ASSIGN:
      if (!node.children || node.children.length !== 2) {
        throw new Error('ASSIGN node must have exactly 2 children');
      }
      if (node.children[0].type === none && node.children[1].type === none) {
        return ``;
      }
      if (node.children[0].type === none) {
        return '_ = ' + stringifyIRNode(node.children[1], indent);
      }
      if (node.children[1].type === none) {
        return stringifyIRNode(node.children[0], indent) + ' = _';
      }
      return [
        stringifyIRNode(node.children[0], indent + 1) +
          ' = ' +
          stringifyIRNode(node.children[1], indent + 1),
      ].join('\n');

    case IRInst.PROP:
      if (!node.children) {
        throw new Error('PROP node must have exactly 1 child');
      }
      return [
        `${stringifyIRNode(node.children[0], indent + 1)}.${node.id}`,
      ].join('\n');

    case IRInst.COND:
      if (!node.children || node.children.length !== 3) {
        throw new Error('COND node must have exactly 3 children');
      }
      return [
        stringifyIRNode(node.children[0], indent + 1) +
          ' ? ' +
          stringifyIRNode(node.children[1], indent + 1) +
          ' : ' +
          stringifyIRNode(node.children[2], indent + 1),
      ].join('\n');

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
      return [
        'while' + stringifyIRNode(node.children[0], indent + 1) + ' {',
        stringifyIRNode(node.children[1], indent + 1),
        '}',
      ].join('\n');

    default:
      throw new Error(`Unknown IR type: ${node.type}`);
  }
}

export function stringifyIR(ir: IR): string {
  return stringifyIRNode(ir.ir) + ';';
}
