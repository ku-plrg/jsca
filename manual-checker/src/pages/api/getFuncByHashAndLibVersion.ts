/* eslint-disable @typescript-eslint/no-unused-vars */
import escodegen from 'escodegen';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

import axios from 'axios';
import { fileURLToPath } from 'url';
import { getHash } from '../../utils/cfg/hasher-bundle';
import { CFGHash } from '../../utils/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { lib, version, hash: targetHash } = req.query;

    const files: string[] = (
      await axios.get(
        `https://api.cdnjs.com/libraries/${lib}/${version}?fields=files`
      )
    ).data.files.filter((file: string) => file.endsWith('.js'));

    const libHashes: CFGHash[] = [];
    for (const file of files) {
      const rawContentUrl = `https://cdnjs.cloudflare.com/ajax/libs/${lib}/${version}/${file}`;
      try {
        const rawContent = await axios.get(rawContentUrl);
        const rawString = rawContent.data;
        libHashes.push(...getHash(rawString));
      } catch (e) {
        console.error('getHash 또는 axios.get에서 에러 발생', rawContentUrl);
      }
    }
    // 여기선 (일단) uniqueness를 보장하지 않음

    const filteredHashes = libHashes
      .filter(([libHash]) => libHash === targetHash)
      .map(([libHash, nodes, body]) => ({
        hash: libHash,
        nodes,
        funcBody: escodegen.generate(body),
      }));

    res.status(200).json({ filteredHashes });
  } catch (error) {
    console.error('API 핸들러 에러:', error);
    res.status(500).json({ error: '서버에서 데이터를 불러올 수 없습니다.' });
  }
}
