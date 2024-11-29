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

const fetchAndCheckValidCdnScript = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const scriptContent = response.data;
      const isNodeScript =
        scriptContent.includes(`require('fs')`) ||
        scriptContent.includes(`require("fs")`);
      return !isNodeScript;
    }
  } catch {
    return false;
  }
  return false;
};

// (string[]) => Record<string,{version:string, src:string, idx:number}[]>
export const getCdnPaths = async (libraries) => {
  const versionStrings = {};

  await Promise.all(
    libraries.map(async (lib) => {
      const libInfo = getLibInfo(lib);
      if (!libInfo) return;

      const promises = libInfo.versions.map(async (version) => {
        const fileName = libInfo.filename;

        if (fileName.endsWith('.js')) {
          try {
            const isValidCdnScript = await fetchAndCheckValidCdnScript(
              cdnTemplate(lib, version, fileName)
            );
            if (isValidCdnScript)
              return {
                version,
                src: cdnTemplate(lib, version, fileName),
              };
          } catch (error) {}
        }

        try {
          const versionInfo = await fetchVersionAssets(lib, version);
          const heuristicFileName =
            versionInfo.find((f) => f.includes(`${lib}.js`)) ??
            versionInfo.find((f) => f.includes(`${lib}.min.js`)) ??
            versionInfo.find((f) => f.endsWith('.js'));
          if (!heuristicFileName) return null;
          const isValidCdnScript = await fetchAndCheckValidCdnScript(
            cdnTemplate(lib, version, heuristicFileName)
          );
          if (isValidCdnScript)
            return {
              version,
              src: cdnTemplate(lib, version, heuristicFileName),
            };
        } catch (error) {}

        return null;
      });

      const resolvedVersions = (await Promise.all(promises))
        .filter(Boolean)
        .map((v, idx) => ({ ...v, idx }));
      versionStrings[lib] = resolvedVersions;
    })
  );

  return versionStrings;
};
