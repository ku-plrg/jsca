import exp from 'constants';

export type CFGNodeBase = {
  id: number;
  type: 'start' | 'exit' | 'exception-exit' | 'block' | 'condition';
  nextIds: number[];
};

export interface CFGNodeStart extends CFGNodeBase {
  type: 'start';
}

export interface CFGNodeExit extends CFGNodeBase {
  type: 'exit';
}

export interface CFGNodeExceptionExit extends CFGNodeBase {
  type: 'exception-exit';
}
export interface CFGNodeCondition extends CFGNodeBase {
  type: 'condition';
}

export interface CFGNodeBlock extends CFGNodeBase {
  type: 'block';
  sequences: CFGSequence[];
}

export interface CFGSequence {
  type: 'prop' | 'update_prop';
  value: string;
}

export type CFGNode =
  | CFGNodeStart
  | CFGNodeExit
  | CFGNodeExceptionExit
  | CFGNodeCondition
  | CFGNodeBlock;

export interface CFGState {
  currentId: number;
  prevIds: number[];
  nodes: Map<number, CFGNode>;
  loopStack: { break: number[]; continue: number[] }[];
  subgraph: Subgraph;
  endId: number;
  exceptionId: number;
}

export interface Subgraph {
  start: number;
  then: number[];
  else: number[];
}

export type CFGBuilderInstType =
  | 'insert_block'
  | 'insert_prop'
  | 'insert_update_prop'
  | 'update_previds'
  | 'update_subgraph';

export interface CFGBuilderInst {
  type: CFGBuilderInstType;
}

export interface InsertBlock extends CFGBuilderInst {
  type: 'insert_block';
}

export interface InsertProp extends CFGBuilderInst {
  type: 'insert_prop';
  value: string;
}

export interface InsertUpdateProp extends CFGBuilderInst {
  type: 'insert_update_prop';
  value: string;
}

export interface UpdatePrevids extends CFGBuilderInst {
  type: 'update_previds';
  previds: number[];
}

export interface UpdateSubgraph extends CFGBuilderInst {
  type: 'update_subgraph';
  start: number;
  then: number[];
  afterThen: () => void;
  else: number[];
  afterElse: () => void;
}

export type CFGArgument =
  | InsertBlock
  | InsertProp
  | InsertUpdateProp
  | UpdatePrevids
  | UpdateSubgraph;
