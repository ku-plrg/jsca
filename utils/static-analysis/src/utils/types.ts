import { Node, Pattern } from 'acorn';

export interface Functions {
  [key: string]: {
    params: Pattern[];
    body: Node;
  };
}

export interface AbsFunctions {
  [key: string]: {
    abs: any;
  };
}
