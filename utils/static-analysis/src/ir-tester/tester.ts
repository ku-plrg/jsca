import * as acorn from 'acorn';
import fs from 'fs';
import { compile } from '../abstract/ir';
import { cleanOutput, stringifyIRNode } from '../utils/ir_stringifier';

const code = fs.readFileSync('test.js', 'utf-8');

function IRtest(code: string) {
  const ast = acorn.parse(code, { ecmaVersion: 'latest' });
  const func_body = (ast.body[0] as any).body;
  const ir = compile(func_body);
  const irCode = stringifyIRNode(ir);
  const cleaned = cleanOutput(irCode);
  console.log(cleaned);
}

IRtest(code);
