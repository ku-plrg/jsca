export const calcScore = (allVersionWithProperties, targetProperties) =>
  allVersionWithProperties
    .map((versionWithProperties) => {
      const matches = targetProperties.filter((tp) =>
        versionWithProperties.directChildren.includes(tp)
      );
      return {
        src: versionWithProperties.src,
        // true positives / all
        score: (
          matches.length / versionWithProperties.directChildren.length
        ).toFixed(5),
        truePositivesNum: matches.length,
        allNum: versionWithProperties.directChildren.length,
      };
    })
    .sort((a, b) => b.score - a.score);
