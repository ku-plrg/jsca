const escodegen = require('escodegen');
const fs = require('fs');
const path = require('path');

function logFunctionCode(functions, filename) {
  Object.entries(functions).map(([name, func]) => {
    // Generate code for the function node
    const functionCode = escodegen.generate(func.body, {
      format: { indent: { style: '  ' } },
    });
    const outputDir = path.join(__dirname, 'logs', 'functions', filename);
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(path.join(outputDir, `${name}.js`), functionCode, 'utf-8');
  });
}

module.exports = logFunctionCode;
