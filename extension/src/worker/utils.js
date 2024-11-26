export const calcScore = (libData, windowProps) => {
  const scores = [];
  for (const name in libData) {
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
      scores.push({
        name,
        version,
        count,
        all: all[version],
        score,
        src: src[version],
      });
    }
  }
  scores.sort((a, b) => b.score - a.score);
  return scores;
};
