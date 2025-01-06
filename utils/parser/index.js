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

const options = {
  early_return: true,
  if_condition: true,
  order: true,
  node_type: true,
  operators: ['+', '-', '*', '/', '%', '>', '<', '>=', '<='],
  literals: true,
  compare_other_props: true,
};

const functions = extractFunctions(code).functions;
console.log('function_count:', Object.keys(functions).length);
const functions2 = extractFunctions(code2).functions;
console.log('function_count:', Object.keys(functions2).length);

logFunctionCode(functions, file1);
logFunctionCode(functions2, file2);

const collecter_options = {
  early_return: options.early_return,
  if_condition: options.if_condition,
  operators: options.operators,
  literals: options.literals,
};

const proptree = collectProps(functions, collecter_options);
const proptree2 = collectProps(functions2, collecter_options);

// createDotGraph(proptree, file1);
// createDotGraph(proptree2, file2);

const comaparator_options = {
  order: options.order,
  node_type: options.node_type,
  compare_other_props: options.compare_other_props,
};
// TODO: add series
const result = functionComparator(proptree, proptree2, comaparator_options);
console.log(
  `result_${file1}:`,
  result.differentTrees1.length,
  result.distinguished1.length,
  result.self1.length
);
console.log(JSON.stringify(result.differentTrees1, null, 2));
console.log(JSON.stringify(result.distinguished1, null, 2));
console.log(
  `result_${file2}:`,
  result.differentTrees2.length,
  result.distinguished2.length,
  result.self2.length
);
console.log(JSON.stringify(result.differentTrees2, null, 2));
console.log(JSON.stringify(result.distinguished2, null, 2));
