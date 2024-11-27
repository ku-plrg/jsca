import axios from 'axios';
import getLibInfo from '../../data/index.js';
import { fetchVersionAssets } from '../library-info/fetch-cdn-api.js';

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
export const getCdnPaths = async (libraries) => {
  const versionStrings = {};

  await Promise.all(
    libraries.map(async (lib) => {
      const libInfo = getLibInfo(lib);
      if (!libInfo) return;

      const promises = libInfo.versions.map(async (version, idx) => {
        const fileName = libInfo.filename;

        try {
          const isValidFileName = await axios.get(
            cdnTemplate(lib, version, fileName)
          );

          if (isValidFileName.status === 200) {
            return {
              version,
              src: cdnTemplate(lib, version, fileName),
              idx,
            };
          }
        } catch (error) {}

        try {
          const versionInfo = await fetchVersionAssets(lib, version);
          const heuristicFileName = versionInfo.find((f) => f.endsWith('.js'));
          if (heuristicFileName) {
            return {
              version,
              src: cdnTemplate(lib, version, heuristicFileName),
              idx,
            };
          }
        } catch (error) {}

        return null;
      });

      const resolvedVersions = (await Promise.all(promises)).filter(Boolean);
      versionStrings[lib] = resolvedVersions;
    })
  );

  return versionStrings;
};
