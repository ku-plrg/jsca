import * as escodegen from 'escodegen';
import * as fs from 'fs';
import * as path from 'path';
import { Function } from './types';

function logFunctionCode(functions: Function[], filename: string): void {
  functions.forEach((func) => {
    try {
      // Generate code for the function node
      const functionCode = escodegen.generate(func.body, {
        format: { indent: { style: '  ' } },
      });
      const outputDir = path.join(__dirname, '../logs/functions', filename);
      fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(
        path.join(outputDir, `${func.name}.js`),
        functionCode,
        'utf-8'
      );
    } catch (e) {
      console.error('error writing func', func.id);
      console.error(e);
    }
  });
}

export default logFunctionCode;
