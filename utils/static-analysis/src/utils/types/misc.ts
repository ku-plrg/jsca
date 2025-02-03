export type NegativeItem = {
  f1Name: string;
  f2Name: string;
  id1: string;
  id2: string;
};
export type PositiveItem = {
  f1Name: string;
  f2Name: string;
  id: string;
};
export type UniqueFuncItem = {
  f1Name: string;
  id: string;
};
export type Score = {
  tp: PositiveItem[];
  tn: NegativeItem[];
  fp: NegativeItem[];
  fn: PositiveItem[];
  uniquefuncs: UniqueFuncItem[];
  precision: number;
  recall: number;
};

export type Time = {
  abs1: number;
  abs2: number;
  compare: number;
};

export type ComparisonResult = {
  score: Score;
  times: Time;
};
