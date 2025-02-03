export interface PropstreeNodeBase {
  type: 'normal' | 'if' | 'logical' | 'conditional';
  props: string[];
  children: PropstreeNode[];
  otherProps?: Record<string, any>;
}

export interface PropstreeNodeNormal extends PropstreeNodeBase {
  type: 'normal';
}
export interface PropstreeNodeif extends PropstreeNodeBase {
  type: 'if';
  paths: {
    true: PropstreeNode;
    false: PropstreeNode;
  };
}

export interface PropstreeNodeConditional extends PropstreeNodeBase {
  type: 'conditional';
  paths: {
    true: PropstreeNode;
    false: PropstreeNode;
  };
}

export interface PropstreeNodeLogical extends PropstreeNodeBase {
  type: 'logical';
  operator: '&&' | '||' | '??';
  paths: {
    left: PropstreeNode;
    right: PropstreeNode;
  };
}

export type PropstreeNode =
  | PropstreeNodeNormal
  | PropstreeNodeif
  | PropstreeNodeConditional
  | PropstreeNodeLogical;
