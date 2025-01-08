import { Node } from 'acorn';
import { simple } from 'acorn-walk';

import { Function, Props } from '../utils/types';

interface Option {
  allow_computed: boolean;
}

const option: Option = {
  allow_computed: true,
};

function collectProps(func: Node): string[] {
  const props: string[] = [];
  simple(func, {
    MemberExpression(node: any) {
      if (node.property?.type === 'Identifier') {
        if (!node.computed) props.push(node.property.name);
      } else if (
        option.allow_computed &&
        (node.property?.type === 'StringLiteral' ||
          node.property?.type === 'Literal')
      ) {
        if (
          typeof node.property.value === 'string' &&
          node.property.value.length > 1
        )
          props.push(node.property.value);
      }
    },
  });
  return props;
}

function props(functions: Function[]): Props[] {
  return functions.map((func) => ({
    id: func.id,
    name: func.name,
    type: 'prop',
    props: collectProps(func.body),
  }));
}

export default props;
