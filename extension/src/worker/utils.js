export const calcScore = (libData, windowProps) => {
  const allScores = [];
  for (const name in libData) {
    const scores = [];
    const { src, tree } = libData[name];
    const versions = Object.keys(src);
    const all = {};
    const matched = {};
    versions.forEach((version, i) => {
      all[version] = 0;
      matched[version] = 0;
    });
    for (const prop in tree) {
      const subProps = tree[prop];
      const subWindowProps = new Set(windowProps[prop]);
      for (const sub in subProps) {
        const ranges = subProps[sub];
        for (const [fromIndex, toIndex] of ranges) {
          for (let i = fromIndex; i <= toIndex; i++) {
            const version = versions[i];
            all[version] += 1;
            if (subWindowProps.has(sub)) {
              matched[version] += 1;
            }
          }
        }
      }
    }

    for (const version in matched) {
      const count = matched[version];
      const score = (count / all[version]).toFixed(5);
      if (score > 0) {
        scores.push({
          version,
          count,
          all: all[version],
          score,
          src: src[version],
          name,
        });
      }
    }

    allScores.push({
      libName: name,
      detected: scores.length > 0,
      versions: scores.sort((a, b) => {
        if (a.score !== b.score) return b.score - a.score;
        else return b.count - a.count;
      }),
    });
  }

  return allScores;
};

export const getTargetProperties = (libData) =>
  Object.values(libData).reduce(
    (acc, { tree }) => [...acc, ...Object.keys(tree)],
    []
  );
