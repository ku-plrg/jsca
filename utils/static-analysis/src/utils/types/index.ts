import * as acorn from 'acorn';
import { CFGNode } from './cfg';
import * as IRType from './ir';
import * as PropsTreeType from './propstree';

export interface Function {
  id: string;
  name: string;
  params: acorn.Pattern[];
  body: acorn.AnyNode;
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
  nodes: Map<number, CFGNode>;
}

export type AbsFunction = Propstree | Props | CFG | IR;

export * from './cfg';
export * from './ir';
export * from './misc';
export * from './propstree';
