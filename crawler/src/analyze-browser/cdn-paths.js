import getLibInfo from '../../data/index.js';

const cdnTemplate = (libName, version, filename) => {
  return `https://cdnjs.cloudflare.com/ajax/libs/${libName}/${version}/${filename}`;
};

export const getCdnPaths = (libraries) => {
  const versionStrings = {};
  for (const lib of libraries) {
    const libInfo = getLibInfo(lib);
    if (!libInfo) continue;
    versionStrings[lib] = Object.keys(libInfo.versions).reduce(
      (acc, version) => {
        const majorVersionInfo = libInfo.versions[version];
        const fileName = libInfo.filename;

        if (majorVersionInfo.files.includes(fileName))
          return [
            ...acc,
            ...majorVersionInfo.versions.map((v) =>
              cdnTemplate(lib, v, fileName)
            ),
          ];
        return acc; // TODO : 없는 경우도 잘 처리되도록 더 정밀하게 구현..
      },
      []
    );
  }
  return versionStrings;
};
