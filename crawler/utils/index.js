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

const getMinorReleaseVersions = async (libraryName) => {
  const versionMap = {};
  const versions = await fetchLibraryVersionInfo(libraryName);
  versions.forEach((version) => {
    const [major, minor, patch] = version.split('.');
    const minorKey = `${major}.${minor}`;
    if (!patch || isNaN(Number(patch))) return;
    if (!versionMap[minorKey] || version < versionMap[minorKey]) {
      versionMap[minorKey] = version;
    }
  });
  return Object.values(versionMap);
};

const handleNoLibraryName = () => {
  console.error('Please provide a library name.');
  console.error(`Usage: node ${scriptName} <library-name>`);
  process.exit(1);
};

(async () => {
  const libraryName = process.argv[2];
  if (!libraryName) handleNoLibraryName();
  const versions = await getMinorReleaseVersions(libraryName);
  console.log(versions);
})();
