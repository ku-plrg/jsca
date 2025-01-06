const extractFunctions = require('./function-extractor');
const collectProps = require('./props-collector');
const createDotGraph = require('./graph-visualize');
const logFunctionCode = require('./function-logger');
const functionComparator = require('./function-comparator');
const fs = require('fs');

function measureTime(label, fn) {
  const start = process.hrtime();
  const result = fn();
  const diff = process.hrtime(start);
  console.log(`${label} took ${diff[0]}s ${diff[1] / 1000000}ms`);
  return result;
}

const file1 = 'jquery_3.7.1.js';
const file2 = 'jquery_3.7.1_min.js';
const code = fs.readFileSync(`./${file1}`, 'utf-8');
const code2 = fs.readFileSync(`./${file2}`, 'utf-8');

const options = {
  early_return: true,
  if_condition: true,
  order: true,
  node_type: true,
  operators: [],
  literals: false,
};
const functions = measureTime(
  `Extracting functions from ${file1}`,
  () => extractFunctions(code).functions
);
console.log('function_count:', Object.keys(functions).length);
const functions2 = measureTime(
  `Extracting functions from ${file2}`,
  () => extractFunctions(code2).functions
);
console.log('function_count:', Object.keys(functions2).length);

logFunctionCode(functions, file1);
logFunctionCode(functions2, file2);

const collecter_options = {
  early_return: options.early_return,
  if_condition: options.if_condition,
  operators: options.operators,
  literals: options.literals,
};
const proptree = measureTime(`makePropstree from ${file1}`, () =>
  collectProps(functions, collecter_options)
);
const proptree2 = measureTime(`makePropstree from ${file2}`, () =>
  collectProps(functions2, collecter_options)
);

// createDotGraph(proptree, file1);
// createDotGraph(proptree2, file2);

const comaparator_options = {
  order: options.order,
  node_type: options.node_type,
  compare_other_props: Boolean(options.operators.length) || options.literals,
};

const result = measureTime('Comparing functions', () =>
  functionComparator(proptree, proptree2, comaparator_options)
);

const logLinks = (file, result, options) => {
  if (options.log_limit) {
    console.log('[[HEAD]]');
    result.slice(0, options.log_limit.head).forEach((f) => logLink(file, f));
    console.log('[[TAIL]]');
    result.slice(-options.log_limit.tail).forEach((f) => logLink(file, f));
  } else result.forEach((f) => logLink(file, f));
};

const logLink = (foldername, filename) =>
  console.log(
    `logs/functions/${foldername}/${filename}.js\n\tlogs/function-trees/${foldername}/tree_${filename}.png`
  );

const log_options = {
  log_limit: {
    head: 5,
    tail: 5,
  }, // if not set, log all
};

function logResults(filename, results, index) {
  const data = {
    filename,
    different: results[`differentTrees${index}`].length,
    distinguished: results[`distinguished${index}`].length,
    self: results[`self${index}`].length,
  };

  console.log('\n=== Analysis Results ===');
  console.table(data);

  console.log(`\nDetailed Results for ${filename}:`);
  console.log('Different Trees:');
  logLinks(filename, results[`differentTrees${index}`], log_options);

  console.log('Distinguished:');
  logLinks(filename, results[`distinguished${index}`], log_options);
}

logResults(file1, result, 1);
logResults(file2, result, 2);
