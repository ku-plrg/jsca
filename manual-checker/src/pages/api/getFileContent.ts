import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const url = req.query.url;
    const filePath = req.query.path;
    if (typeof url !== 'string' || typeof filePath !== 'string')
      return res.status(400).json({ error: 'Invalid URL or path' });
    const basePath = path.join(
      __dirname,
      `../../../../utils/evaluation/data/${url}`,
      decodeURIComponent(filePath)
    );
    const fileContent = await fs.promises.readFile(basePath, 'utf-8');
    res.status(200).json({ fileContent });
  } catch (error) {
    console.error('API 핸들러 에러:', error);
    res.status(500).json({ error: '서버에서 데이터를 불러올 수 없습니다.' });
  }
}
