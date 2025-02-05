export type CFGNodeBase = {
  id: number;
  type: 'start' | 'exit' | 'exception-exit' | 'block' | 'condition' | 'loop';
};

export interface CFGNodeStart extends CFGNodeBase {
  type: 'start';
  next?: number;
}

export interface CFGNodeExit extends CFGNodeBase {
  type: 'exit' | 'exception-exit';
}

export interface CFGNodeCondition extends CFGNodeBase {
  type: 'condition';
  then?: number;
  else?: number;
}
export interface CFGNodeLoop extends CFGNodeBase {
  type: 'loop';
  next?: number;
}

export interface CFGNodeBlock extends CFGNodeBase {
  type: 'block';
  sequences?: CFGSequence[];
  next?: number;
}

export interface CFGSequence {
  type: 'prop' | 'update_prop';
  value: string;
}

export type CFGNode =
  | CFGNodeStart
  | CFGNodeExit
  | CFGNodeCondition
  | CFGNodeBlock
  | CFGNodeLoop;

export type prevId = [CFGNode, boolean?, boolean?];
export interface CFGState {
  currentId: number;
  prevIds: prevId[];
  nodes: Map<number, CFGNode>;
  loopStack: { break: prevId[]; continue: prevId[] }[];
  endId: number;
  exceptionId: number;
  literals: string[];
}

export type CFGBuilderInstType =
  | 'insert_block'
  | 'insert_prop'
  | 'insert_update_prop'
  | 'update_previds'
  | 'update_subgraph';
