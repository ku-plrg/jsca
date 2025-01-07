import { Node, Pattern } from 'acorn';

export interface Function {
  id: string;
  name: string;
  params: Pattern[];
  body: Node;
}

export interface Library {
  name: string;
  functions: Function[];
}

export interface AbsFunctionBase {
  id: string;
  name: string;
  type: 'prop' | 'propstree' | 'cfg';
}

export interface Propstree extends AbsFunctionBase {
  type: 'propstree';
  tree: PropstreeNode;
}
export interface Props extends AbsFunctionBase {
  type: 'prop';
  props: string[];
}
export interface CFG extends AbsFunctionBase {
  type: 'cfg';
}

export type AbsFunction = Propstree | Props | CFG;

export interface PropstreeNodeBase {
  type: 'normal' | 'if' | 'logical' | 'conditional';
  props: string[];
  children: PropstreeNode[];
  otherProps?: Record<string, any>;
}

export interface PropstreeNodeNormal extends PropstreeNodeBase {
  type: 'normal';
}
export interface PropstreeNodeif extends PropstreeNodeBase {
  type: 'if';
  paths: {
    true: PropstreeNode;
    false: PropstreeNode;
  };
}

export interface PropstreeNodeConditional extends PropstreeNodeBase {
  type: 'conditional';
  paths: {
    true: PropstreeNode;
    false: PropstreeNode;
  };
}

export interface PropstreeNodeLogical extends PropstreeNodeBase {
  type: 'logical';
  operator: '&&' | '||' | '??';
  paths: {
    left: PropstreeNode;
    right: PropstreeNode;
  };
}

export type PropstreeNode =
  | PropstreeNodeNormal
  | PropstreeNodeif
  | PropstreeNodeConditional
  | PropstreeNodeLogical;
