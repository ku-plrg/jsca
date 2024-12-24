const extractFunctions = require('./function-extractor');
const collectProps = require('./props-collector');
const fs = require('fs');

const code = fs.readFileSync('./test.js', 'utf-8');

const functions = extractFunctions(code).functions;
const proptree = Object.fromEntries(
  Object.entries(functions).map(([name, func]) => [name, collectProps(func)])
);
