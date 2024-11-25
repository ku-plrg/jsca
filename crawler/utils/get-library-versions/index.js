import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const scriptName = path.relative(process.cwd(), __filename);

const fetchLibraryVersionUrlTemplate = (libraryName) =>
  `https://api.cdnjs.com/libraries/${libraryName}?fields=versions`;

const fetchLibraryVersionInfo = async (libraryName) => {
  try {
    const response = await axios.get(
      fetchLibraryVersionUrlTemplate(libraryName)
    );
    const versions = response.data.versions;
    return versions;
  } catch (error) {
    console.error(
      `Error fetching library "${libraryName}" versions: ${error.message}`
    );
    process.exit(1);
  }
};

const filterVersionsByType = (versions, type) => {
  if (!['major', 'minor', 'patch'].includes(type)) {
    console.error('Invalid version type. Use "major", "minor", or "patch".');
    process.exit(1);
  }

  const versionMap = {};
  versions.forEach((version) => {
    const [major, minor, patch] = version.split('.');
    if (
      [major, minor, patch].some((v) => v === undefined || isNaN(Number(v)))
    ) {
      return; // Skip invalid versions (alpha/beta ..)
    }

    if (type === 'major') {
      const majorKey = major;
      if (!versionMap[majorKey] || version < versionMap[majorKey]) {
        // latest version in that major release
        versionMap[majorKey] = version;
      }
    } else if (type === 'minor') {
      const minorKey = `${major}.${minor}`;
      if (!versionMap[minorKey] || version < versionMap[minorKey]) {
        // latest version in that minor release
        versionMap[minorKey] = version;
      }
    } else if (type === 'patch') {
      const patchKey = version; // For patch, we keep all versions (no alpha/beta version)
      versionMap[patchKey] = version;
    }
  });

  return Object.values(versionMap);
};

const handleNoArguments = () => {
  console.error('Please provide the required arguments.');
  console.error(
    `Usage: node ${scriptName} --library-name <library-name> --version-filter <major|minor|patch>`
  );
  process.exit(1);
};

(async () => {
  const args = process.argv.slice(2);
  const libraryNameIndex = args.indexOf('--library-name');
  const versionTypeIndex = args.indexOf('--version-filter');

  if (libraryNameIndex === -1) {
    handleNoArguments();
  }

  const libraryName = args[libraryNameIndex + 1];
  const versionType = args[versionTypeIndex + 1] ?? 'minor';

  if (!libraryName || !versionType) {
    handleNoArguments();
  }

  const versions = await fetchLibraryVersionInfo(libraryName);
  const filteredVersions = filterVersionsByType(versions, versionType);

  console.log(filteredVersions);
})();
