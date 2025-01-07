import { Node, Pattern } from 'acorn';

export interface Function {
  name: string;
  params: Pattern[];
  body: Node;
}

export interface Library {
  name: string;
  functions: Function[];
}

export interface AbsFunctionBase {
  name: string;
  type: 'prop' | 'proptree' | 'cfg';
}

export interface proptree extends AbsFunctionBase {
  type: 'proptree';
  tree: proptreeNode;
}
export interface prop extends AbsFunctionBase {
  type: 'prop';
  props: string[];
}
export interface cfg extends AbsFunctionBase {
  type: 'cfg';
}

export type AbsFunction = proptree | prop | cfg;

export interface proptreeNodeBase {
  type: 'normal' | 'if' | 'logical' | 'conditional';
  props: string[];
  children: proptreeNode[];
  otherProps?: Record<string, any>;
}

export interface proptreeNodeNormal extends proptreeNodeBase {
  type: 'normal';
}
export interface proptreeNodeif extends proptreeNodeBase {
  type: 'if';
  paths: {
    true: proptreeNode;
    false: proptreeNode;
  };
}

export interface proptreeNodeConditional extends proptreeNodeBase {
  type: 'conditional';
  paths: {
    true: proptreeNode;
    false: proptreeNode;
  };
}

export interface proptreeNodeLogical extends proptreeNodeBase {
  type: 'logical';
  operator: '&&' | '||' | '??';
  paths: {
    left: proptreeNode;
    right: proptreeNode;
  };
}

export type proptreeNode =
  | proptreeNodeNormal
  | proptreeNodeif
  | proptreeNodeConditional
  | proptreeNodeLogical;
