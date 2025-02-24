/* eslint-disable @typescript-eslint/no-unused-vars */
import escodegen from 'escodegen';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { getHash } from '../../utils/cfg/hasher-bundle.js';

import { fileURLToPath } from 'url';
import { CFGHash, Type2Match, Type3Match } from '../../utils/types.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const determineType = (matches: Record<string, [number, number][]>) => {
  if (Object.keys(matches).length === 1) {
    // type 2: only one library!
    if (Object.values(matches)[0].length === 1) {
      const [[[vFrom, vTo]]] = Object.values(matches);
      if (vFrom === vTo) return 3; // type 3: only one version!
    }
    return 2;
  }
  return 1; // type 1: others..
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const url = req.query.url;
    const filePath = req.query.filePath;
    if (typeof url !== 'string' || typeof filePath !== 'string') {
      return res.status(400).json({ error: 'Invalid URL or path' });
    }

    const libHashes: Record<
      string,
      Record<string, Record<string, [number, number][]>>
    > = JSON.parse(
      await fs.promises.readFile(
        path.join(__dirname, '../../../../utils/crawlers/cdn/data/hash-2.json'),
        'utf-8'
      )
    );

    const libInfos: Record<
      string,
      { id: number; versions: string[]; hashCnt: number[] }
    > = JSON.parse(
      await fs.promises.readFile(
        path.join(__dirname, '../../../../utils/crawlers/cdn/data/libs-2.json'),
        'utf-8'
      )
    );

    const fileContentPath = path.join(
      __dirname,
      `../../../../utils/evaluation/data/${url}`,
      decodeURIComponent(filePath)
    );
    let fileContent;
    try {
      fileContent = await fs.promises.readFile(fileContentPath, 'utf-8');
    } catch (error) {
      throw new Error(`File not found : ${fileContentPath}`);
    }

    const findLibInfo = (
      lIdx: string,
      vIdx: number[]
    ): [string, string[]] | undefined => {
      const lib = Object.entries(libInfos).find(
        ([_, libInfo]) => libInfo.id.toString() === lIdx
      );
      if (!lib) return undefined;
      const versions = [];
      for (const idx of vIdx) {
        versions.push(lib[1].versions[idx]);
      }
      return [lib[0], versions];
    };

    const fileHashes: CFGHash[] = [];
    try {
      fileHashes.push(...getHash(fileContent));
    } catch (e) {
      throw new Error(`CFGHash Abstraction Error, maybe parsing..`);
    }

    const type3Libs: Type3Match[] = [];
    const type2Libs: Type2Match[] = [];

    fileHashes.forEach(([hash, nodes, body]) => {
      if (nodes < 10) return;
      if (!libHashes[nodes]?.[hash]) return;
      const matches = libHashes[nodes][hash];
      const type = determineType(matches);
      switch (type) {
        case 3:
          const [[lIdx, [[vIdx]]]] = Object.entries(matches);
          if (
            type3Libs.filter(
              (t3l) =>
                t3l.lIdx === lIdx && t3l.vIdx === vIdx && t3l.length === length
            ).length === 0
          ) {
            const libInfo = findLibInfo(lIdx, [vIdx]);
            if (!libInfo) return;
            const [libName, [version]] = libInfo;
            type3Libs.push({
              lIdx,
              vIdx,
              length: nodes,
              libName,
              version,
              hash: hash,
              func: escodegen.generate(body),
            });
          }
          break;
        case 2:
          const [[lIdxx, vIdxes]] = Object.entries(matches);
          const libInfo = findLibInfo(lIdxx, vIdxes.flat());
          if (!libInfo) return;
          const [libName, versions] = libInfo;
          type2Libs.push({
            libName,
            versions,
            hash: hash,
            func: escodegen.generate(body),
          });
        case 1:
        default:
          break;
      }
    });

    res.status(200).json({ fileContent, type3Libs, type2Libs });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res
      .status(500)
      .json({ error: '서버에서 데이터를 불러올 수 없습니다.', message });
  }
}
