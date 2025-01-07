import { Node } from 'acorn';

interface proptreeNodeBase {
  type: 'if' | 'logical' | 'conditional';
  props: string[];
  children: proptreeNode[];
  otherProps?: Record<string, any>;
}

interface proptreeNodeif extends proptreeNodeBase {
  type: 'if';
  paths: {
    true: proptreeNode;
    false: proptreeNode;
  };
}

interface proptreeNodeConditional extends proptreeNodeBase {
  type: 'conditional';
  paths: {
    true: proptreeNode;
    false: proptreeNode;
  };
}

interface proptreeNodeLogical extends proptreeNodeBase {
  type: 'logical';
  paths: {
    left: proptreeNode;
    right: proptreeNode;
  };
}

type proptreeNode =
  | proptreeNodeif
  | proptreeNodeConditional
  | proptreeNodeLogical;

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
