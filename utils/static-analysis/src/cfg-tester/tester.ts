import * as acorn from 'acorn';
import { writeFile } from 'fs/promises';
import cfg, { cfgToDot, generatePNG } from '../abstract/cfg';
import { stringifyCFG } from '../compare/cfg-comparator';

const codeMap = {
  //   test1: `
  //     function a() {
  //   Symbol('JSCA_517_657');
  //   var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
  //   if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
  //     return document;
  //   }
  //   document = doc;
  //   documentElement = document.documentElement;
  //   documentIsHTML = !jQuery.isXMLDoc(document);
  //   matches = documentElement.matches || documentElement.webkitMatchesSelector || documentElement.msMatchesSelector;
  //   if (documentElement.msMatchesSelector && preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
  //     subWindow.addEventListener('unload', unloadHandler);
  //   }
  //   support.getById = assert('');
  //   support.disconnectedMatch = assert('');
  //   support.scope = assert('');
  //   support.cssHas = assert('');
  //   if (support.getById) {
  //     Expr.filter.ID = '';
  //     Expr.find.ID = '';
  //   } else {
  //     Expr.filter.ID = '';
  //     Expr.find.ID = '';
  //   }
  //   Expr.find.TAG = '';
  //   Expr.find.CLASS = '';
  //   rbuggyQSA = [];
  //   assert('');
  //   if (!support.cssHas) {
  //     rbuggyQSA.push(':has');
  //   }
  //   rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join('|'));
  //   sortOrder = '';
  //   return document;
  // }
  // `,
  //   test3: `
  //   function a(){
  //   Symbol('JSCA_517_657');
  //   var c,
  //     S = s ? s.ownerDocument || s : Se;
  //   return (
  //     S == a ||
  //       S.nodeType !== 9 ||
  //       !S.documentElement ||
  //       ((a = S),
  //       (f = a.documentElement),
  //       (l = !i.isXMLDoc(a)),
  //       (h = f.matches || f.webkitMatchesSelector || f.msMatchesSelector),
  //       f.msMatchesSelector &&
  //         Se != a &&
  //         (c = a.defaultView) &&
  //         c.top !== c &&
  //         c.addEventListener('unload', kr),
  //       (k.getById = Oe('')),
  //       (k.disconnectedMatch = Oe('')),
  //       (k.scope = Oe('')),
  //       (k.cssHas = Oe('')),
  //       k.getById
  //         ? ((t.filter.ID = ''), (t.find.ID = ''))
  //         : ((t.filter.ID = ''), (t.find.ID = '')),
  //       (t.find.TAG = ''),
  //       (t.find.CLASS = ''),
  //       (d = []),
  //       Oe(''),
  //       k.cssHas || d.push(':has'),
  //       (d = d.length && new RegExp(d.join('|'))),
  //       (B = '')),
  //     a
  //   );
  // }

  //   `,
  //   test4: `
  //   function a() {
  //   Symbol('JSCA_170_181');
  //   var t, n;
  //   return (
  //     !!(e && '[object Object]' === Se.call(e)) &&
  //     (((t = le(e)), !!!t) ||
  //       ((n = Ae.call(t, 'constructor') && t.constructor),
  //       'function' == typeof n && he.call(n) === ge))
  //   );
  // }
  // `,
  //   test5: `
  // function a() {
  //   Symbol('JSCA_3046_3051');
  //   if (k(_.a&&_.b)
  //   ) {
  //     return jQuery(elem).children('tbody')[0] || elem;
  //   }
  //   return elem;
  // }

  //     `,

  //   test6: `function f(){
  //   return (Symbol('JSCA_58_63'), null == e)
  //     ? e + ''
  //     : (void 0 === e ? 'undefined' : o(e)) === 'object' || 'function' == typeof e
  //     ? f[d.call(e)] || 'object'
  //     : void 0 === e
  //     ? 'undefined'
  //     : o(e);
  // }
  // `,
  //   test7: `function f(){
  //   Symbol('JSCA_58_63');
  //   if (obj == null) {
  //     return obj + '';
  //   }
  //   return typeof obj === 'object' || typeof obj === 'function'
  //     ? class2type[toString.call(obj)] || 'object'
  //     : typeof obj;
  // }
  // `,
  test8: `function f() {
    return (void 0!==o||void 0!==o)?o:void 0
  }`,
  test8_1: `function f() {
    if(o !== undefined || o !== undefined) {
      return o;
    }
    return void 0
  }`,
  test9: `function f(){
    if (data !== undefined) {
      return data;
    }
    if (data !== undefined) {
      return data;
    }
    return;
  }`,
  // test10: `function f() {
  //   return (void 0!==o||void 0!==(_.a,o))?o:void 0
  // }`,
  // test11: `function f(){
  //   if (data !== undefined) {
  //     return data;
  //   }
  //   _.a;
  //   if (data !== undefined) {
  //     return data;
  //   }
  //   return;
  // }`,
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
