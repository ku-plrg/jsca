import { CFGHash } from '../utils/types';

function hash(h1: CFGHash[], h2: CFGHash[]): number {
  const lib_hashset = new Map(h1.map((h) => [`${h.hash}`, h.nodes.size]));
  const code_hashset = new Map(h2.map((h) => [`${h.hash}`, h.nodes.size]));
  let weightedIncludes = 0;
  let totalWeight = 0;

  lib_hashset.forEach((size, hash) => {
    totalWeight += size;
    if (code_hashset.has(hash)) {
      weightedIncludes += size;
    }
  });

  return weightedIncludes / totalWeight;
}

export default hash;
