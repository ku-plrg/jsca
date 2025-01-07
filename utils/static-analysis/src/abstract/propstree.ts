import { Node } from 'acorn';

interface FunctionNode {
  params: any[];
  body: Node;
}

interface Functions {
  [key: string]: FunctionNode;
}

function makePropstree(func: Node): any {
  // Implementation of makePropstree
}

function propstree(
  functions: Functions,
  options: Options
): Record<string, { params: any[]; proptree: any }> {
  return Object.entries(functions).reduce((acc, [name, func]) => {
    acc[name] = {
      params: func.params,
      proptree: makePropstree(func.body, options),
    };
    return acc;
  }, {} as Record<string, { params: any[]; proptree: any }>);
}

function incValue(obj: Record<string, number>, key: string): void {
  if (obj[key]) {
    obj[key] += 1;
  } else {
    obj[key] = 1;
  }
}

export default propstree;
