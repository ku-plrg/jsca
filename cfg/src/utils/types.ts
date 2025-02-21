import { ESTree } from 'meriyah';

export interface Function {
  id?: string;
  body: ESTree.Node;
}

export type CFGHash = {
  id?: string;
  nodes: number;
  hash: string;
  body: ESTree.Node;
};

export type SubgraphBase = {
  type: 'normal' | 'cond';
  root: CFGNodeBlock;
};

export interface SubgraphNormal extends SubgraphBase {
  type: 'normal';
  next: PrevId[];
}
export interface SubgraphCond extends SubgraphBase {
  type: 'cond';
  truthy: PrevId[];
  falsy: PrevId[];
}

export interface CFG {
  id?: string;
  body: ESTree.Node;
  graph: Map<number, CFGNode>;
  literals: Set<string>;
}

export type CFGNodeBase = {
  id: number;
  type: 'start' | 'exit' | 'exception-exit' | 'block';
};

export interface CFGNodeStart extends CFGNodeBase {
  type: 'start';
  next?: CFGNext;
}

export interface CFGNodeExit extends CFGNodeBase {
  type: 'exit' | 'exception-exit';
}

export interface CFGNodeBlock extends CFGNodeBase {
  type: 'block';
  sequences?: CFGSequence[];
  next?: CFGNext;
  loop?: boolean;
}

export interface CFGSequence {
  type: 'prop' | 'update_prop';
  value: string;
}

export interface CFGJump {
  type: 'jump';
  jump?: number;
}
export interface CFGCond {
  type: 'cond';
  nextThen?: number;
  nextElse?: number;
}

export type CFGNext = CFGJump | CFGCond;
export type CFGNode = CFGNodeStart | CFGNodeExit | CFGNodeBlock;
export type Subgraph = SubgraphNormal | SubgraphCond;

export type PrevId = [number, boolean?];
export interface CFGState {
  currentId: number;
  prevIds: PrevId[];
  nodes: Map<number, CFGNode>;
  loopStack: { break: PrevId[]; continue: PrevId[] }[];
  endId: number;
  exceptionId: number;
  literals: Set<string>;
}
