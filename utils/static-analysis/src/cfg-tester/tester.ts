import * as acorn from 'acorn';
import { writeFile } from 'fs/promises';
import cfg, { cfgToDot, generatePNG } from '../abstract/cfg';
import { stringifyCFG } from '../compare/cfg-comparator';

const codeMap = {
  test1: `
    function a() {
      if (x) {
        if (y) {
          return true;
        }
      }
      _.a;
    }
`,
  test2: `
    function a() {
      if (x && y) return !0;
      _.a;
    }
`,
};

async function CFGtest(code: string, filename: string) {
  const ast = acorn.parse(code, { ecmaVersion: 'latest' });
  const func_body = (ast.body[0] as any).body;
  const [cfgGraph] = cfg([{ id: '', name: '', params: [], body: func_body }]);
  const dot = await cfgToDot(cfgGraph.nodes);
  await writeFile(`${filename}.dot`, dot, 'utf-8');
  await generatePNG(dot, `${filename}`);
  console.log('CFG generated ', `${filename}.dot`, `${filename}.png`);
  const cfgString = stringifyCFG(cfgGraph.nodes);
  await writeFile(`${filename}.txt`, cfgString, 'utf-8');
  //console.log(cfgString);
}

(async () => {
  if (require.main === module) {
    for (const [filename, code] of Object.entries(codeMap)) {
      console.log('-------------------', filename, '-------------------');
      await CFGtest(code, filename).catch(console.error);
    }
  }
})();