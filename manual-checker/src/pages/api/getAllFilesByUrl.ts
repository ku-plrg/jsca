import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getAllFiles(dirPath: string, basePath = dirPath): string[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  let result: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relativePath = path.relative(basePath, fullPath);

    if (entry.isFile()) {
      result.push(relativePath);
    } else if (entry.isDirectory()) {
      result = result.concat(getAllFiles(fullPath, basePath));
    }
  }

  return result;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const url = req.query.url;
    if (typeof url !== 'string')
      return res.status(400).json({ error: 'Invalid URL' });
    const basePath = path.join(
      __dirname,
      `../../../../utils/evaluation/data/${url}`
    );
    const files = getAllFiles(basePath);
    res.status(200).json({ files });
  } catch (error) {
    console.error('API 핸들러 에러:', error);
    res.status(500).json({ error: '서버에서 데이터를 불러올 수 없습니다.' });
  }
}
