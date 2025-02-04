import { AbsFunction, CFG, Function, IR, Props, Propstree } from '.';

export type UniqueFuncItem = {
  fName: string;
  id: string;
};
export type Score<T extends AbsFunction> = {
  tp: [T, T][];
  tn: [T, T][];
  fp: [T, T][];
  fn: [T, T][];
  uniquefuncs: UniqueFuncItem[];
  precision: number;
  recall: number;
};

export type Time = {
  abs1: number;
  abs2: number;
  compare: number;
};

export type ComparisonResult<T extends AbsFunction> = {
  score: Score<T>;
  times: Time;
};

export type RawFunction = {
  name: string;
  type: 'js' | 'json';
  path: string;
};

export type ScorerEntry<T extends AbsFunction> = {
  abstraction: (f: Function[]) => T[];
  comparator: (f1: T, f2: T) => boolean;
};

export type AbsType = 'IR' | 'PropsTree' | 'Props' | 'CFG';

export type AbsMapping = {
  CFG: CFG;
  IR: IR;
  Props: Props;
  PropsTree: Propstree;
};

export type ScorerParams = {
  [K in AbsType]: ScorerEntry<AbsMapping[K]>;
};

export type CompareType = 'inter' | 'intra';

export type CompareContext<T extends AbsFunction> = {
  getCompareTargets: (comparer: T, comparees: T[]) => T[];
};

export type ComparePair = {
  codes: [RawFunction, RawFunction][];
  compareType: CompareType;
};
