import { Node, Pattern } from 'acorn';
import exp from 'constants';

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
  type: 'prop' | 'propstree' | 'cfg' | 'ir';
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
export interface IR extends AbsFunctionBase {
  type: 'ir';
  ir: IRNode;
}

export type AbsFunction = Propstree | Props | CFG | IR;

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

export enum IRInst {
  EMPTY,
  BLANK,
  SEQ,
  ASSIGN,
  PROP,
  COND,
  FORIN,
  LOOP,
}

export interface IRNode {
  type: IRInst;
  id?: string;
  children?: IRNode[];
}

export interface EmptyNode extends IRNode {
  type: IRInst.EMPTY;
}

export interface BlankNode extends IRNode {
  type: IRInst.BLANK;
}

export interface SeqNode extends IRNode {
  type: IRInst.SEQ;
  children: [IRNode, IRNode];
}

export interface AssignNode extends IRNode {
  type: IRInst.ASSIGN;
  children: [IRNode, IRNode];
}

export interface PropNode extends IRNode {
  type: IRInst.PROP;
  id: string;
  children: [BlankNode];
}

export interface CondNode extends IRNode {
  type: IRInst.COND;
  children: [BlankNode, BlankNode, BlankNode];
}

export interface ForInNode extends IRNode {
  type: IRInst.FORIN;
  children: [IRNode, IRNode];
}
export interface LoopNode extends IRNode {
  type: IRInst.LOOP;
  children: [IRNode, IRNode];
}
