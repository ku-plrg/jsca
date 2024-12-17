import fs from 'fs';

const getFileStream = (csvFilePath, headers) => {
  const fileExists = fs.existsSync(csvFilePath);

  const writeStream = fs.createWriteStream(csvFilePath, { flags: 'a' });

  const writeHeaders = () => {
    if (!fileExists) {
      writeStream.write(headers);
    }
  };

  const appendCsvRow = (rows) => {
    const [r1, r2, r3, r4] = rows;
    const formattedRow = `${r1},"${r2}","${r3}","${r4}"\n`;
    writeStream.write(formattedRow);
  };

  return { writeHeaders, appendCsvRow };
};

export { getFileStream };
