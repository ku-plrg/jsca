import cfg from './abstract/cfg';
import compareHash from './compare/hash-comparator';
import extractFunctions from './function-extractor';
import convertHash from './utils/cfg_to_hash';
import measureTime from './utils/timer';
import { CFGHash } from './utils/types';

function getHash(raw: string, logStr: string) {
  const { value: functions, ms: parseMS } = measureTime(
    `extractFunctions in ${logStr}`,
    () => extractFunctions(raw)
  );
  const { value: cfgs, ms: abstMS } = measureTime(`makeCFG in ${logStr}`, () =>
    cfg(functions)
  );
  const { value: hash, ms: hashMS } = measureTime(`hashCFG in ${logStr}`, () =>
    convertHash(cfgs)
  );
  return {
    hash,
    parseMS,
    abstMS: abstMS + hashMS,
  };
}

function libraryChecker(
  lib: string,
  libName: string,
  code: string,
  cache: Record<string, CFGHash[]>,
  cacheLib: (hash: CFGHash[]) => void
): number {
  const libHash = cache[libName] || getHash(lib, 'library');
  if (!cache[libName]) cacheLib(libHash);
  const codeHash = getHash(code, 'code').hash;

  const result = measureTime('compare', () => compareHash(libHash, codeHash));

  return result.value;
}

export { getHash, libraryChecker };
