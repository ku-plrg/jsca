import axios from 'axios';
import { exec } from 'child_process';
import fs from 'fs';
import fsExtra from 'fs-extra';
import path from 'path';
import util from 'util';
import getLibInfo from '../cdn-crawler/data/index.js';
import injectLiteral from './inject-literal.js';

const TARGET_PACKAGE = 'jquery'; // available name in https://cdnjs.com/
const TARGET_MINIFIER = 'all'; // all | swc | esbuild | uglifyjs | terser | babel-minify
const TARGET_VERSIONS = ['3.7.1']; // undefined for all versions
const INJECT_LITERAL = true;

const execPromise = util.promisify(exec);

const cdnTemplate = (libName, version, filename) => {
  return `https://cdnjs.cloudflare.com/ajax/libs/${libName}/${version}/${filename}`;
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

      for (const file of allFiles.filter((f) => !f.includes('/'))) {
        const cdnPath = cdnTemplate(TARGET_PACKAGE, version, file);
        const res = await axios.get(cdnPath).catch((err) => console.error());
        if (!res) continue;
        const script = res.data;
        fs.promises.writeFile(`${file}`, script);
        if (INJECT_LITERAL) {
          const targetScript = injectLiteral(script);
          fs.promises.unlink(`${file}`);
          fs.promises.writeFile(`${file}`, targetScript);
        }
        await execPromise(
          `npm run build:${TARGET_MINIFIER} --filename=${file}`
        );
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

bulkBundle();
