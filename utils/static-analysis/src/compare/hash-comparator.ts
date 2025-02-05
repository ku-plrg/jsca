import { CFGHash } from '../utils/types';

function hash(h1: CFGHash[], h2: CFGHash[]): number {
  const lib_hashset = new Set(
    h1.map((h) => `${h.nodes.size},${h.hash}`) // Create string pairs
  );
  const code_hashset = new Set(
    h2.map((h) => `${h.nodes.size},${h.hash}`) // Create string pairs
  );
  const includes = Array.from(lib_hashset).filter((h) => code_hashset.has(h));
  console.log(includes.length, lib_hashset.size);
  return includes.length / lib_hashset.size;
}
export default hash;
