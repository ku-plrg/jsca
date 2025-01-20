import { Node, Pattern } from 'acorn';
import * as CFGType from './cfg';
import * as IRType from './ir';
import * as PropsTreeType from './propstree';

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

export interface IR extends AbsFunctionBase {
  type: 'ir';
  ir: IRType.IRNode;
}

export interface Propstree extends AbsFunctionBase {
  type: 'propstree';
  tree: PropsTreeType.PropstreeNode;
}

export interface Props extends AbsFunctionBase {
  type: 'prop';
  props: string[];
}

export interface CFG extends AbsFunctionBase {
  type: 'cfg';
}

export type AbsFunction = Propstree | Props | CFG | IR;

export { CFGType, IRType, PropsTreeType };
