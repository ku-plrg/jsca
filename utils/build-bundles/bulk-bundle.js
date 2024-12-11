import { exec } from 'child_process';
import fs from 'fs';
import fetch from 'npm-registry-fetch';
import path from 'path';
import util from 'util';

const TARGET_PACKAGE = 'is-number';

const execPromise = util.promisify(exec);

const getVersions = async (packageName) => {
  const data = await fetch.json(`/${packageName}`);
  return Object.keys(data.versions);
};

const bulkBundle = async () => {
  const versions = await getVersions(TARGET_PACKAGE);

  for (const version of versions) {
    try {
      console.log(`Processing ${TARGET_PACKAGE}@${version}...`);

      await execPromise(`npm install ${TARGET_PACKAGE}@${version}`);
      console.log(`Installed ${TARGET_PACKAGE}@${version}`);

      await execPromise('npm run build:all');
      console.log(`Build completed for ${TARGET_PACKAGE}@${version}`);

      const distFolder = path.resolve('dist');
      const targetFolder = path.resolve(`build/${TARGET_PACKAGE}/${version}`);

      if (fs.existsSync(distFolder)) {
        await fs.promises.mkdir(targetFolder, { recursive: true });

        const files = await fs.promises.readdir(distFolder);
        for (const file of files) {
          const source = path.join(distFolder, file);
          const destination = path.join(targetFolder, file);

          await fs.promises.rename(source, destination);
        }
      }

      console.log(`Copied build files to ${targetFolder}`);
    } catch (error) {
      console.error(
        `Error processing ${TARGET_PACKAGE}@${version}: ${error.message}`
      );
    }
  }
};

bulkBundle();
