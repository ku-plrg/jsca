const extractFunctions = require('./function-extractor');
const collectProps = require('./props-collector');
const createDotGraph = require('./graph-visualize');
const logFunctionCode = require('./function-logger');
const functionComparator = require('./function-comparator');
const fs = require('fs');

const file1 = 'jquery_3.7.1.js';
const file2 = 'jquery_3.7.1_min.js';
const code = fs.readFileSync(`./${file1}`, 'utf-8');
const code2 = fs.readFileSync(`./${file2}`, 'utf-8');

const functions = extractFunctions(code).functions;
console.log('function_count:', Object.keys(functions).length);
const functions2 = extractFunctions(code2).functions;
console.log('function_count:', Object.keys(functions2).length);

logFunctionCode(functions, file1);
logFunctionCode(functions2, file2);

const proptree = collectProps(functions);
const proptree2 = collectProps(functions2);

// createDotGraph(proptree, file1);
// createDotGraph(proptree2, file2);

// TODO: add series
const result = functionComparator(proptree, proptree2);
console.log('result1:', result.differentTrees1.length);
console.log(JSON.stringify(result.differentTrees1, null, 2));
console.log('result2:', result.differentTrees2.length);
console.log(JSON.stringify(result.differentTrees2, null, 2));
