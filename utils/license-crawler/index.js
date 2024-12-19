const fs = require('fs');
const { getFilesRecursively } = require('./utils');

function extractLicenseComments(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const commentRegex = /\/\*(?:.|\n)*?\*\//g;
  const licenseRegex = /(license|copyright)/i;

  const comments = fileContent.match(commentRegex) || [];
  return comments.filter(
    (comment) =>
      licenseRegex.test(comment.toLowerCase()) && comment.length < 500
  );
}

function analyzeFile(targetDirectory) {
  const allJsFiles = getFilesRecursively(targetDirectory);
  const result = {};

  allJsFiles.forEach((filePath) => {
    const licenseComments = extractLicenseComments(filePath);
    if (licenseComments.length > 0) {
      result[filePath] = [...new Set(licenseComments)];
    }
  });

  result['all'] = [
    ...new Set(
      Object.keys(result).flatMap((key) =>
        result[key].flatMap((v) => v.split('\n'))
      )
    ),
  ];

  const resultFolder = 'results';
  fs.mkdirSync(resultFolder, { recursive: true });

  fs.writeFileSync(
    `${resultFolder}/${targetDirectory.split('/').at(-1)}.json`,
    JSON.stringify(result, null, 2)
  );
}

fs.readdir('data', (err, files) => {
  if (err) {
    console.error('Failed to read directory:', err);
    return;
  }

  files.forEach((file) => {
    analyzeFile(`data/${file}`);
  });
});
