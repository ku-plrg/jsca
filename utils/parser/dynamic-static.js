const fs = require('fs');
const acorn = require('acorn');
const walk = require('acorn-walk');
const collectProps = require('./props-collector');
const createDotGraph = require('./graph-visualize');
const logFunctionCode = require('./function-logger');

const FILE_PATH = 'dynamic-functions';
const MAX_DEPTH = 3;

(() => {
  const funcJSON = fs.readFileSync(
    '../dynamic-analysis/output-func.json',
    // you should generate this file by running `node index.js` in the dynamic-analysis folder
    'utf-8'
  );

  const functions = {};

  JSON.parse(funcJSON).forEach((func) => {
    const { name, body } = func;
    try {
      if (body.includes('[native code]')) return;
      if (name.split('.').length > MAX_DEPTH) return;
      if (name.includes('prototype')) return;
      function recordFunction(node) {
        functions[name] = {
          params: node.params.map((p) => p.name),
          body: node.body,
        };
      }
      const ast = acorn.parse(`(${body})`, {
        ecmaVersion: 'latest',
        sourceType: 'script',
        locations: true,
        ranges: true,
        onComment: false,
        allowReserved: true,
      });
      walk.simple(ast, {
        FunctionDeclaration(node) {
          recordFunction(node);
        },
        FunctionExpression(node) {
          recordFunction(node);
        },
      });
    } catch (error) {
      console.log('Error:', error);
      console.log('Error Function:', name);
    }
  });
  logFunctionCode(functions, FILE_PATH);
  const ptree = collectProps(functions);
  createDotGraph(ptree, FILE_PATH);
})();
