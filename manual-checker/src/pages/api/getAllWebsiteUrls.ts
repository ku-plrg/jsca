import { statSync } from 'fs';
import { readdir } from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getDirectDirs(dirPath: string) {
  console.log(dirPath);
  try {
    const files = await readdir(dirPath);
    return files.filter((file) =>
      statSync(path.join(dirPath, file)).isDirectory()
    );
  } catch (error) {
    console.error('디렉토리를 읽을 수 없음:', error);
    return [];
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const basePath = path.join(__dirname, '../../../../utils/evaluation/data');
    const urls = await getDirectDirs(basePath);
    res.status(200).json({ urls });
  } catch (error) {
    console.error('API 핸들러 에러:', error);
    res.status(500).json({ error: '서버에서 데이터를 불러올 수 없습니다.' });
  }
}
