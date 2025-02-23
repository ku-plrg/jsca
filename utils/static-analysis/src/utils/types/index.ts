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
  func: acorn.AnyNode;
  nodes: Map<number, CFGNode>;
  literals: string[];
}

export type AbsFunction = Propstree | Props | CFG | IR;

export type CFGHash = {
  nodes: Map<number, CFGNode>;
  hash: string;
  func: acorn.AnyNode;
};

export * from './cfg';
export * from './ir';
export * from './propstree';
export * from './score';
