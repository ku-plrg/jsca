import exp from 'constants';

export interface CFGNodeBase {
  id: number;
  type: 'start' | 'loop' | 'condition' | 'prop' | 'end';
  next: number[];
}

export interface CFGNodeStart extends CFGNodeBase {
  type: 'start';
}

export interface CFGNodeLoop extends CFGNodeBase {
  type: 'loop';
  body?: number;
}

export interface CFGNodeCondition extends CFGNodeBase {
  type: 'condition';
  then?: number;
  else?: number;
}

export interface CFGNodeProp extends CFGNodeBase {
  type: 'prop';
  prop?: string;
}

export interface CFGNodeEnd extends CFGNodeBase {
  type: 'end';
}

export type CFGNode =
  | CFGNodeStart
  | CFGNodeLoop
  | CFGNodeCondition
  | CFGNodeProp
  | CFGNodeEnd;

export interface CFGState {
  nodes: Map<number, CFGNode>;
  currentId: number;
  loopStack: Array<{ start: number; exit: number }>;
  condList: Array<{ start: number; exit: number }>; //for cfg_to_ir
  endId: number;
}

export interface Subgraph {
  start: number;
  then: number[];
  else: number[];
}
