export interface CFGNodeBase {
  id: number;
  type: 'start' | 'loop' | 'condition' | 'prop' | 'end';
  prev: number[];
  next: number[];
}

export interface CFGNodeStart extends CFGNodeBase {
  type: 'start';
}

export interface CFGNodeLoop extends CFGNodeBase {
  type: 'loop';
  body: number;
}

export interface CFGNodeCondition extends CFGNodeBase {
  type: 'condition';
  test: number;
  true: number;
  false: number;
}

export interface CFGNodeProp extends CFGNodeBase {
  type: 'prop';
  prop: string;
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
  endId: number;
}
