export const calcScore = (libData, windowProps) => {
  const scores = [];
  for (const name in libData) {
    const { src, tree } = libData[name];
    const versions = Object.keys(src);
    const indexOf = {};
    const matched = {};
    versions.forEach((version, i) => {
      indexOf[version] = i;
      matched[version] = 0;
    });
    let all = 0;
    for (const prop in tree) {
      const subProps = tree[prop];
      all += Object.keys(subProps).length;
      const subWindowProps = new Set(windowProps[prop]);
      for (const sub in subProps) {
        const ranges = subProps[sub];
        const has = subWindowProps.has(sub);
        let delta = 1;
        if (!has) {
          for (const version in matched) matched[version]++;
          delta = -1;
        }
        if (subWindowProps.has(sub)) {
          for (const [fromIndex, toIndex] of ranges) {
            for (let i = fromIndex; i <= toIndex; i++) {
              const version = versions[i];
              matched[version] += delta;
            }
          }
        }
      }
    }
    for (const version in matched) {
      const count = matched[version];
      const score = (count / all).toFixed(5);
      scores.push({ name, version, count, all, score, src: src[version] });
    }
  }
  scores.sort((a, b) => b.score - a.score);
  return scores;
};
