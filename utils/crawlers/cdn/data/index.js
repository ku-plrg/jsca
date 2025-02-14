import libInfoA from './lib-info/a.json' with { type: 'json' };
import libInfoB from './lib-info/b.json' with { type: 'json' };
import libInfoC from './lib-info/c.json' with { type: 'json' };
import libInfoD from './lib-info/d.json' with { type: 'json' };
import libInfoE from './lib-info/e.json' with { type: 'json' };
import libInfoF from './lib-info/f.json' with { type: 'json' };
import libInfoG from './lib-info/g.json' with { type: 'json' };
import libInfoH from './lib-info/h.json' with { type: 'json' };
import libInfoI from './lib-info/i.json' with { type: 'json' };
import libInfoJ from './lib-info/j.json' with { type: 'json' };
import libInfoK from './lib-info/k.json' with { type: 'json' };
import libInfoL from './lib-info/l.json' with { type: 'json' };
import libInfoM from './lib-info/m.json' with { type: 'json' };
import libInfoN from './lib-info/n.json' with { type: 'json' };
import libInfoO from './lib-info/o.json' with { type: 'json' };
import libInfoOther from './lib-info/other.json' with { type: 'json' };
import libInfoP from './lib-info/p.json' with { type: 'json' };
import libInfoQ from './lib-info/q.json' with { type: 'json' };
import libInfoR from './lib-info/r.json' with { type: 'json' };
import libInfoS from './lib-info/s.json' with { type: 'json' };
import libInfoT from './lib-info/t.json' with { type: 'json' };
import libInfoU from './lib-info/u.json' with { type: 'json' };
import libInfoV from './lib-info/v.json' with { type: 'json' };
import libInfoW from './lib-info/w.json' with { type: 'json' };
import libInfoX from './lib-info/x.json' with { type: 'json' };
import libInfoY from './lib-info/y.json' with { type: 'json' };
import libInfoZ from './lib-info/z.json' with { type: 'json' };

const libInfoDict = {
  a: libInfoA,
  b: libInfoB,
  c: libInfoC,
  d: libInfoD,
  e: libInfoE,
  f: libInfoF,
  g: libInfoG,
  h: libInfoH,
  i: libInfoI,
  j: libInfoJ,
  k: libInfoK,
  l: libInfoL,
  m: libInfoM,
  n: libInfoN,
  o: libInfoO,
  p: libInfoP,
  q: libInfoQ,
  r: libInfoR,
  s: libInfoS,
  t: libInfoT,
  u: libInfoU,
  v: libInfoV,
  w: libInfoW,
  x: libInfoX,
  y: libInfoY,
  z: libInfoZ,
  other: libInfoOther,
};

const getLibInfo = (libName) => {
  const firstLetter = libName[0].toLowerCase();
  if (libInfoDict[firstLetter]) return libInfoDict[firstLetter][libName]; // a-z
  return libInfoDict.other[libName]; // other
};

export default getLibInfo;
