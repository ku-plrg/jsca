import cfg from './abstract/cfg';
import compareHash from './compare/hash-comparator';
import extractFunctions from './function-extractor';
import convertHash from './utils/cfg_to_hash';
import measureTime from './utils/timer';

function libraryChecker(lib: string, code: string): number {
  const libFunctions = measureTime('extractFunctions in library', () =>
    extractFunctions(lib)
  );
  const codeFunctions = measureTime('extractFunctions in code', () =>
    extractFunctions(code)
  );
  console.log('libFunctions', libFunctions.value.length);
  console.log('codeFunctions', codeFunctions.value.length);
  const libCFG = measureTime('makeCFG in library', () =>
    cfg(libFunctions.value)
  );
  const codeCFG = measureTime('makeCFG in code', () =>
    cfg(codeFunctions.value)
  );
  const libHash = measureTime('hashCFG in library', () =>
    convertHash(libCFG.value)
  );
  const codeHash = measureTime('hashCFG in code', () =>
    convertHash(codeCFG.value)
  );
  const result = measureTime('compare', () =>
    compareHash(libHash.value, codeHash.value)
  );

  return result.value;
}

export { libraryChecker };
