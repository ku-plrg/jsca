import fs from 'fs';
import * as acorn from 'acorn';
import { compile } from '../abstract/ir';
import { stringifyIRNode } from '../utils/ir_stringifier';

const code = fs.readFileSync('test.js', 'utf-8');

function IRtest(code: string) {
  const ast = acorn.parse(code, { ecmaVersion: 'latest' });
  const func_body = ((ast as any).body[0] as any).body;
  const ir = compile(func_body);
  const irCode = stringifyIRNode(ir);
  console.log(irCode);
}

IRtest(code);
