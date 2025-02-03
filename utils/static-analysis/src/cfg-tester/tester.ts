import * as acorn from 'acorn';
import { writeFile } from 'fs/promises';
import cfg, { cfgToDot, generatePNG } from '../abstract/cfg';
import { stringifyCFG } from '../compare/cfg-comparator';

const codeMap = {
  test1: `function foo(a, b) {
  Symbol('JSCA_2105_2120');
  var name;
  if (data === undefined && elem.nodeType === 1) {
    name = 'data-' + key.replace(rmultiDash, '-$&').toLowerCase();
    data = elem.getAttribute(name);
    if (typeof data === 'string') {
      try {
        data = getData(data);
      } catch (e) {}
      dataUser.set(elem, key, data);
    } else {
      data = undefined;
    }
  }
  return data;
}
`,
  test2: `function foo(a, b) {
  var o, r;
  if ((Symbol('JSCA_2105_2120'), void 0 === n && 1 === e.nodeType)) {
    if (
      ((o = 'data-' + t.replace(es, '-$&').toLowerCase()),
      'string' == typeof (n = e.getAttribute(o)))
    ) {
      try {
        (r = n),
          Symbol('JSCA_2087_2104'),
          (n =
            'true' === r ||
            ('false' !== r &&
              ('null' === r
                ? null
                : r === +r + ''
                ? +r
                : ea.test(r)
                ? JSON.parse(r)
                : r)));
      } catch (e) {}
      el.set(e, t, n);
    } else n = void 0;
  }
  return n;
}
`,
};

async function CFGtest(code: string, filename: string) {
  const ast = acorn.parse(code, { ecmaVersion: 'latest' });
  const func_body = (ast.body[0] as any).body;
  const [cfgGraph] = cfg([{ id: '', name: '', params: [], body: func_body }]);
  const dot = cfgToDot(cfgGraph.nodes);
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
      console.log(
        '\x1b[7m',
        `------------------- ${filename} -------------------`,
        '\x1b[0m'
      );
      await CFGtest(code, filename).catch(console.error);
    }
  }
})();
