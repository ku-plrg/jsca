export enum IRInst {
  EMPTY,
  BLOCK,
  SEQ,
  UPDATE_PROP,
  PROP,
  LITERAL,
  COND,
  FORIN,
  LOOP,
  DO_WHILE,
}

export interface IRNodeBase {
  type: IRInst;
}

export interface EmptyNode extends IRNodeBase {
  type: IRInst.EMPTY;
}

export interface BlockNode extends IRNodeBase {
  type: IRInst.BLOCK;
}

export interface SeqNode extends IRNodeBase {
  type: IRInst.SEQ;
  left: IRNode;
  right: IRNode;
}

export interface UpdatePropNode extends IRNodeBase {
  type: IRInst.UPDATE_PROP;
  left: PropNode;
  right: BlockNode;
}

export interface PropNode extends IRNodeBase {
  type: IRInst.PROP;
  id: string;
  object: BlockNode;
}

export interface LiteralNode extends IRNodeBase {
  type: IRInst.LITERAL;
  id: string;
}
export interface CondNode extends IRNodeBase {
  type: IRInst.COND;
  test: BlockNode;
  true: IRNode;
  false: IRNode;
}

export interface ForInNode extends IRNodeBase {
  type: IRInst.FORIN;
  left: BlockNode;
  right: IRNode;
  body: IRNode;
}

export interface LoopNode extends IRNodeBase {
  type: IRInst.LOOP;
  body: IRNode;
}

export interface DoWhileNode extends IRNodeBase {
  type: IRInst.DO_WHILE;
  test: IRNode;
  body: IRNode;
}

export type IRNode =
  | EmptyNode
  | BlockNode
  | SeqNode
  | UpdatePropNode
  | LiteralNode
  | PropNode
  | CondNode
  | ForInNode
  | LoopNode
  | DoWhileNode;
