import getLibInfo from '../../data/index.js';

const cdnTemplate = (libName, version, filename) => {
  return `https://cdnjs.cloudflare.com/ajax/libs/${libName}/${version}/${filename}`;
};

export const parseCdnPath = (url) => {
  const regex =
    /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/([^/]+)\/([^/]+)\/([^/]+)$/;
  const match = url.match(regex);
  if (!match) throw new Error('Invalid CDN URL format');

  return {
    libName: match[1],
    version: match[2],
    filename: match[3],
  };
};

// (string[]) => Record<string,{version:string, src:string, idx:number}[]>
export const getCdnPaths = (libraries) => {
  const versionStrings = {};
  for (const lib of libraries) {
    const libInfo = getLibInfo(lib);
    if (!libInfo) continue;
    versionStrings[lib] = Object.keys(libInfo.versions).reduce(
      (acc, version) => {
        const prevIdx = acc.at(-1)?.idx ? acc.at(-1).idx + 1 : 0;
        const majorVersionInfo = libInfo.versions[version];
        const fileName = libInfo.filename;

        if (majorVersionInfo.files.includes(fileName))
          return [
            ...acc,
            ...majorVersionInfo.versions.map((v, vIdx) => ({
              version: v,
              src: cdnTemplate(lib, v, fileName),
              idx: prevIdx + vIdx,
            })),
          ];
        return acc; // TODO : 없는 경우도 잘 처리되도록 더 정밀하게 구현..
      },
      []
    );
  }
  return versionStrings;
};
