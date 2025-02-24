import * as acorn from 'acorn';

type Type3Match = {
  lIdx: string;
  vIdx: number;
  length: number;
  libName: string;
  version: string;
  hash: string;
  func: string;
};

type Type2Match = {
  libName: string;
  versions: string[];
  hash: string;
  func: string;
};

type CFGHash = [string, number, acorn.AnyNode];

export type { CFGHash, Type2Match, Type3Match };
