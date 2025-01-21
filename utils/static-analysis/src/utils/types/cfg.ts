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
}

export interface CFGNodeProp extends CFGNodeBase {
  type: 'prop';
  prop?: string;
}

export interface CFGNodeEnd extends CFGNodeBase {
  type: 'end';
}

export type CFGNode = CFGNodeStart | CFGNodeLoop | CFGNodeProp | CFGNodeEnd;

export interface CFGState {
  nodes: Map<number, CFGNode>;
  currentId: number;
  loopStack: { break: number[]; continue: number[] }[];
  condList: Array<{ start: number; exit: number }>; //for cfg_to_ir
  endId: number;
}

export interface Subgraph {
  start: number;
  then: number[];
  else: number[];
}
