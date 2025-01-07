import { Node, Pattern } from 'acorn';
import exp from 'constants';

export interface Function {
  name: string;
  params: Pattern[];
  body: Node;
}

export interface Library {
  name: string;
  functions: Function[];
}

export interface AbsFunctionBase {
  name: string;
  type: 'prop' | 'proptree' | 'cfg';
}

export interface proptree extends AbsFunctionBase {
  type: 'proptree';
}
export interface prop extends AbsFunctionBase {
  type: 'prop';
  props: string[];
}
export interface cfg extends AbsFunctionBase {
  type: 'cfg';
}

export type AbsFunction = proptree | prop | cfg;
