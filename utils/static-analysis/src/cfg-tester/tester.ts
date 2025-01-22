import * as acorn from 'acorn';
import { writeFile } from 'fs/promises';
import cfg, { cfgToDot, generatePNG } from '../abstract/cfg';
import { stringifyCFG } from '../compare/cfg-comparator';

const code = `
    function a() {
        if(a||_.b) c;
        else _.d;
    }
`;

const FILE_NAME = 'test';

async function CFGtest(code: string) {
  const ast = acorn.parse(code, { ecmaVersion: 'latest' });
  const func_body = (ast.body[0] as any).body;
  const [cfgGraph] = cfg([{ id: '', name: '', params: [], body: func_body }]);
  const dot = await cfgToDot(cfgGraph.nodes);
  await writeFile(`${FILE_NAME}.dot`, dot, 'utf-8');
  await generatePNG(dot, `${FILE_NAME}.png`);
  console.log('CFG generated ', `${FILE_NAME}.dot`, `${FILE_NAME}.png`);
  const cfgString = stringifyCFG(cfgGraph.nodes);
  await writeFile(`${FILE_NAME}.txt`, cfgString, 'utf-8');
  console.log(cfgString);
}

if (require.main === module) {
  CFGtest(code).catch(console.error);
}
