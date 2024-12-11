import libInfoA from './lib-info/a.json' assert { type: 'json' };
import libInfoB from './lib-info/b.json' assert { type: 'json' };
import libInfoC from './lib-info/c.json' assert { type: 'json' };
import libInfoD from './lib-info/d.json' assert { type: 'json' };
import libInfoE from './lib-info/e.json' assert { type: 'json' };
import libInfoF from './lib-info/f.json' assert { type: 'json' };
import libInfoG from './lib-info/g.json' assert { type: 'json' };
import libInfoH from './lib-info/h.json' assert { type: 'json' };
import libInfoI from './lib-info/i.json' assert { type: 'json' };
import libInfoJ from './lib-info/j.json' assert { type: 'json' };
import libInfoK from './lib-info/k.json' assert { type: 'json' };
import libInfoL from './lib-info/l.json' assert { type: 'json' };
import libInfoM from './lib-info/m.json' assert { type: 'json' };
import libInfoN from './lib-info/n.json' assert { type: 'json' };
import libInfoO from './lib-info/o.json' assert { type: 'json' };
import libInfoOther from './lib-info/other.json' assert { type: 'json' };
import libInfoP from './lib-info/p.json' assert { type: 'json' };
import libInfoQ from './lib-info/q.json' assert { type: 'json' };
import libInfoR from './lib-info/r.json' assert { type: 'json' };
import libInfoS from './lib-info/s.json' assert { type: 'json' };
import libInfoT from './lib-info/t.json' assert { type: 'json' };
import libInfoU from './lib-info/u.json' assert { type: 'json' };
import libInfoV from './lib-info/v.json' assert { type: 'json' };
import libInfoW from './lib-info/w.json' assert { type: 'json' };
import libInfoX from './lib-info/x.json' assert { type: 'json' };
import libInfoY from './lib-info/y.json' assert { type: 'json' };
import libInfoZ from './lib-info/z.json' assert { type: 'json' };

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
