export const calcScore = (allVersionWithProperties, targetProperties) =>
  allVersionWithProperties
    .map((versionWithProperties) => {
      const allProperties = new Set([
        ...versionWithProperties.directChildren,
        ...targetProperties,
      ]);
      const matches = targetProperties.filter((tp) =>
        versionWithProperties.directChildren.includes(tp)
      );
      return {
        src: versionWithProperties.src,
        // true positives / all
        score: (matches.length / allProperties.size).toFixed(5),
        truePositivesNum: matches.length,
        allNum: allProperties.size,
      };
    })
    .sort((a, b) => b.score - a.score);
