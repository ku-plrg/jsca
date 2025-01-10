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
  BLOCK,
  SEQ,
  UPDATE_PROP,
  PROP,
  COND,
  FORIN,
  LOOP,
  DO_WHILE,
}

export interface IRNode {
  type: IRInst;
}

export interface EmptyNode extends IRNode {
  type: IRInst.EMPTY;
}

export interface BlockNode extends IRNode {
  type: IRInst.BLOCK;
}

export interface SeqNode extends IRNode {
  type: IRInst.SEQ;
  left: IRNode;
  right: IRNode;
}

export interface UpdatePropNode extends IRNode {
  type: IRInst.UPDATE_PROP;
  left: PropNode;
  right: BlockNode;
}

export interface PropNode extends IRNode {
  type: IRInst.PROP;
  id: string;
  object: BlockNode;
}

export interface CondNode extends IRNode {
  type: IRInst.COND;
  test: BlockNode;
  true: IRNode;
  false: IRNode;
}

export interface ForInNode extends IRNode {
  type: IRInst.FORIN;
  left: BlockNode;
  right: IRNode;
  body: IRNode;
}

export interface LoopNode extends IRNode {
  type: IRInst.LOOP;
  init: EmptyNode;
  test: IRNode;
  update: IRNode;
  body: IRNode;
}

export interface DoWhileNode extends IRNode {
  type: IRInst.DO_WHILE;
  test: IRNode;
  body: IRNode;
}
