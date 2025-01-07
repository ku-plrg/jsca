import { simple } from 'acorn-walk';
import { Node } from 'acorn';

interface FunctionNode {
  params: any[];
  body: Node;
}

interface Functions {
  [key: string]: FunctionNode;
}

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

function props(
  functions: Functions
): Record<string, { params: any[]; props: string[] }> {
  return Object.entries(functions).reduce((acc, [name, func]) => {
    acc[name] = {
      params: func.params,
      props: collectProps(func.body),
    };
    return acc;
  }, {} as Record<string, { params: any[]; props: string[] }>);
}

export default props;
