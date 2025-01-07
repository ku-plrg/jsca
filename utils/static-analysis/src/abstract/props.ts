import { simple } from 'acorn-walk';
import { Node } from 'acorn';

import { Function, props } from '../utils/types';
function collectProps(func: Node): string[] {
  const props: string[] = [];
  simple(func, {
    MemberExpression(node: any) {
      if (!node.computed && node.property?.type === 'Identifier') {
        props.push(node.property.name);
      }
    },
  });

  return props;
}

function props(functions: Function[]): props[] {
  return functions.map((func) => ({
    name: func.name,
    type: 'prop',
    props: collectProps(func.body),
  }));
}

export default props;
