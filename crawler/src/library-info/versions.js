const parseVersionString = (version) => {
  const [major, minor, patch = '0'] = version.split('.');
  const [patchVersion, patchSuffix = '0'] = patch.split('-');
  return [
    parseInt(major),
    parseInt(minor),
    parseInt(patchVersion),
    patchSuffix,
  ];
};

const compareVersions = (versionA, versionB) => {
  const [majorA, minorA, patchA, patchSuffixA] = parseVersionString(versionA);
  const [majorB, minorB, patchB, patchSuffixB] = parseVersionString(versionB);

  if (majorA !== majorB) return majorA - majorB;
  if (minorA !== minorB) return minorA - minorB;
  if (patchA !== patchB) return patchA - patchB;

  // 'alpha1' < 'alpha2' < 'beta1' < 'beta2' < 'rc1' < ... < '' < '1' < '2' < ...
  const isNumberA = !isNaN(parseInt(patchSuffixA));
  const isNumberB = !isNaN(parseInt(patchSuffixB));
  if (isNumberA && isNumberB)
    return parseInt(patchSuffixA) - parseInt(patchSuffixB);
  if (isNumberA || isNumberB) return isNumberA ? 1 : -1;
  return patchSuffixA.localeCompare(patchSuffixB);
};

export const sortVersions = (versions) => versions.sort(compareVersions);

export const groupByMajorRelease = (versions) => {
  const groupedVersions = versions.reduce((acc, version) => {
    const [major] = parseVersionString(version);
    if (!acc[major]) {
      acc[major] = [version];
    } else {
      acc[major].push(version);
    }
    return acc;
  }, {});

  const sortedVersions = {};
  for (const key in groupedVersions) {
    sortedVersions[key] = sortVersions(groupedVersions[key]);
  }
  return sortedVersions;
};
