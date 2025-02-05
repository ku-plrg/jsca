import axios from 'axios';
import { exec } from 'child_process';
import fs from 'fs';
import fsExtra from 'fs-extra';
import path from 'path';
import util from 'util';
import getLibInfo from '../crawlers/cdn/data/index.js';
import injectLiteral from './inject-literal.js';

const TARGET_PACKAGE = 'vue'; // available name in https://cdnjs.com/
const TARGET_MINIFIER = 'terser'; // all | swc | esbuild | uglifyjs | terser | babel-minify
const TARGET_VERSIONS = ['3.5.13']; // undefined for all versions
const INJECT_LITERAL = false;

const execPromise = util.promisify(exec);

const cdnTemplate = (libName, version, filename) => {
  return `https://cdnjs.cloudflare.com/ajax/libs/${libName}/${version}/${filename}`;
};

const fetchAndRunMinifier = async (url, filename) => {
  const res = await axios.get(url).catch((err) => console.error());
  if (!res) {
    console.log(`Failed to fetch ${url}`);
    return { status: 'failed' };
  }
  const script = res.data;
  if (typeof script !== 'string') return { status: 'failed' };

  const fileDir = filename.split('/').slice(0, -1).join('/');
  if (fileDir !== '' && !fs.existsSync(fileDir))
    fs.mkdirSync(fileDir, { recursive: true });

  fs.promises.writeFile(`${filename}`, script);
  if (INJECT_LITERAL) {
    const targetScript = injectLiteral(script);
    fs.promises.unlink(`${filename}`);
    fs.promises.writeFile(`${filename}`, targetScript);
  }
  await execPromise(`npm run build:${TARGET_MINIFIER} --filename=${filename}`);
  return { status: 'success' };
};

const bulkBundle = async () => {
  const packageInfo = getLibInfo(TARGET_PACKAGE);
  if (!packageInfo) {
    throw new Error(`No library info found for ${TARGET_PACKAGE}`);
  }

  const { versions, allFiles } = packageInfo;
  const targetVersions = TARGET_VERSIONS.length ? TARGET_VERSIONS : versions;

  for (const version of targetVersions) {
    try {
      console.log(`Processing ${TARGET_PACKAGE}@${version}...`);

      let errCnt = 0;
      for (const file of allFiles) {
        const res = await fetchAndRunMinifier(
          cdnTemplate(TARGET_PACKAGE, version, file),
          file
        );
        if (res.status === 'failed') errCnt++;
      }
      if (errCnt > allFiles.length / 2) {
        const fetchedAllFiles = await getFilenamesForVersion(
          TARGET_PACKAGE,
          version
        );
        for (const file of fetchedAllFiles) {
          fetchAndRunMinifier(cdnTemplate(TARGET_PACKAGE, version, file), file);
        }
      }

      const distFolder = path.resolve('dist');
      const targetFolder = path.resolve(`build/${TARGET_PACKAGE}/${version}`);

      if (fs.existsSync(distFolder)) {
        await fs.promises.mkdir(targetFolder, { recursive: true });

        const distFiles = await fs.promises.readdir(distFolder);
        for (const distFile of distFiles) {
          const source = path.join(distFolder, distFile);
          const destination = path.join(targetFolder, distFile);

          await fsExtra.move(path.resolve(source), path.join(destination), {
            overwrite: true,
          });
        }
        await fs.promises.mkdir(path.join(targetFolder, 'original'), {
          recursive: true,
        });

        for (const file of allFiles) {
          if (fs.existsSync(path.resolve(file))) {
            await fsExtra.move(
              path.resolve(file),
              path.join(targetFolder, 'original', file),
              { overwrite: true }
            );
          }
        }
      }
    } catch (error) {
      console.error(
        `Error processing ${TARGET_PACKAGE}@${version}: ${error.message}`
      );
    }
  }
};

async function fetchVersionAssets(libName, version) {
  const url = `https://api.cdnjs.com/libraries/${libName}/${version}`;
  const response = await axios.get(url);
  return response.data.files || [];
}

async function getFilenamesForVersion(lib, version) {
  const versionInfo = await fetchVersionAssets(lib, version);
  return versionInfo;
}

bulkBundle();
