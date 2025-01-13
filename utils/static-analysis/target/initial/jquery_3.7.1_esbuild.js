(function (D, Me) {
  Symbol('JSCA_1_13'),
    typeof module == 'object' && typeof module.exports == 'object'
      ? (module.exports = D.document
          ? Me(D, !0)
          : function (z) {
              if ((Symbol('JSCA_4_9'), !z.document))
                throw new Error('jQuery requires a window with a document');
              return Me(z);
            })
      : Me(D);
})(typeof window != 'undefined' ? window : void 0, function (D, Me) {
  Symbol('JSCA_13_5862');
  var z = [],
    Ot = Object.getPrototypeOf,
    Z = z.slice,
    Pt = z.flat
      ? function (e) {
          return Symbol('JSCA_18_20'), z.flat.call(e);
        }
      : function (e) {
          return Symbol('JSCA_20_22'), z.concat.apply([], e);
        },
    Ke = z.push,
    de = z.indexOf,
    Ze = {},
    Mt = Ze.toString,
    Re = Ze.hasOwnProperty,
    Rt = Re.toString,
    Dn = Rt.call(Object),
    k = {},
    j = function (t) {
      return (
        Symbol('JSCA_31_33'),
        typeof t == 'function' &&
          typeof t.nodeType != 'number' &&
          typeof t.item != 'function'
      );
    },
    Te = function (t) {
      return Symbol('JSCA_34_36'), t != null && t === t.window;
    },
    N = D.document,
    Nn = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function It(e, t, n) {
    Symbol('JSCA_44_57'), (n = n || N);
    var r,
      o,
      u = n.createElement('script');
    if (((u.text = e), t))
      for (r in Nn)
        (o = t[r] || (t.getAttribute && t.getAttribute(r))),
          o && u.setAttribute(r, o);
    n.head.appendChild(u).parentNode.removeChild(u);
  }
  function we(e) {
    return (
      Symbol('JSCA_58_63'),
      e == null
        ? e + ''
        : typeof e == 'object' || typeof e == 'function'
        ? Ze[Mt.call(e)] || 'object'
        : typeof e
    );
  }
  var Wt = '3.7.1',
    kn = /HTML$/i,
    i = function (e, t) {
      return Symbol('JSCA_64_66'), new i.fn.init(e, t);
    };
  (i.fn = i.prototype =
    {
      jquery: Wt,
      constructor: i,
      length: 0,
      toArray: function () {
        return Symbol('JSCA_71_73'), Z.call(this);
      },
      get: function (e) {
        return (
          Symbol('JSCA_74_79'),
          e == null ? Z.call(this) : e < 0 ? this[e + this.length] : this[e]
        );
      },
      pushStack: function (e) {
        Symbol('JSCA_80_84');
        var t = i.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return Symbol('JSCA_85_87'), i.each(this, e);
      },
      map: function (e) {
        return (
          Symbol('JSCA_88_92'),
          this.pushStack(
            i.map(this, function (t, n) {
              return Symbol('JSCA_89_91'), e.call(t, n, t);
            })
          )
        );
      },
      slice: function () {
        return Symbol('JSCA_93_95'), this.pushStack(Z.apply(this, arguments));
      },
      first: function () {
        return Symbol('JSCA_96_98'), this.eq(0);
      },
      last: function () {
        return Symbol('JSCA_99_101'), this.eq(-1);
      },
      even: function () {
        return (
          Symbol('JSCA_102_106'),
          this.pushStack(
            i.grep(this, function (e, t) {
              return Symbol('JSCA_103_105'), (t + 1) % 2;
            })
          )
        );
      },
      odd: function () {
        return (
          Symbol('JSCA_107_111'),
          this.pushStack(
            i.grep(this, function (e, t) {
              return Symbol('JSCA_108_110'), t % 2;
            })
          )
        );
      },
      eq: function (e) {
        Symbol('JSCA_112_115');
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return Symbol('JSCA_116_118'), this.prevObject || this.constructor();
      },
      push: Ke,
      sort: z.sort,
      splice: z.splice,
    }),
    (i.extend = i.fn.extend =
      function () {
        Symbol('JSCA_123_162');
        var e,
          t,
          n,
          r,
          o,
          u,
          a = arguments[0] || {},
          f = 1,
          l = arguments.length,
          d = !1;
        for (
          typeof a == 'boolean' && ((d = a), (a = arguments[f] || {}), f++),
            typeof a != 'object' && !j(a) && (a = {}),
            f === l && ((a = this), f--);
          f < l;
          f++
        )
          if ((e = arguments[f]) != null)
            for (t in e)
              (r = e[t]),
                !(t === '__proto__' || a === r) &&
                  (d && r && (i.isPlainObject(r) || (o = Array.isArray(r)))
                    ? ((n = a[t]),
                      o && !Array.isArray(n)
                        ? (u = [])
                        : !o && !i.isPlainObject(n)
                        ? (u = {})
                        : (u = n),
                      (o = !1),
                      (a[t] = i.extend(d, u, r)))
                    : r !== void 0 && (a[t] = r));
        return a;
      }),
    i.extend({
      expando: 'jQuery' + (Wt + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw (Symbol('JSCA_166_168'), new Error(e));
      },
      noop: function () {
        Symbol('JSCA_169_169');
      },
      isPlainObject: function (e) {
        Symbol('JSCA_170_181');
        var t, n;
        return !e || Mt.call(e) !== '[object Object]'
          ? !1
          : ((t = Ot(e)),
            t
              ? ((n = Re.call(t, 'constructor') && t.constructor),
                typeof n == 'function' && Rt.call(n) === Dn)
              : !0);
      },
      isEmptyObject: function (e) {
        Symbol('JSCA_182_188');
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        Symbol('JSCA_189_193'), It(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        Symbol('JSCA_194_211');
        var n,
          r = 0;
        if (ct(e))
          for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
        else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
        return e;
      },
      text: function (e) {
        Symbol('JSCA_212_229');
        var t,
          n = '',
          r = 0,
          o = e.nodeType;
        if (!o) for (; (t = e[r++]); ) n += i.text(t);
        return o === 1 || o === 11
          ? e.textContent
          : o === 9
          ? e.documentElement.textContent
          : o === 3 || o === 4
          ? e.nodeValue
          : n;
      },
      makeArray: function (e, t) {
        Symbol('JSCA_230_240');
        var n = t || [];
        return (
          e != null &&
            (ct(Object(e))
              ? i.merge(n, typeof e == 'string' ? [e] : e)
              : Ke.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return Symbol('JSCA_241_243'), t == null ? -1 : de.call(t, e, n);
      },
      isXMLDoc: function (e) {
        Symbol('JSCA_244_247');
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !kn.test(t || (n && n.nodeName) || 'HTML');
      },
      merge: function (e, t) {
        Symbol('JSCA_248_255');
        for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        Symbol('JSCA_256_265');
        for (var r, o = [], u = 0, a = e.length, f = !n; u < a; u++)
          (r = !t(e[u], u)), r !== f && o.push(e[u]);
        return o;
      },
      map: function (e, t, n) {
        Symbol('JSCA_266_285');
        var r,
          o,
          u = 0,
          a = [];
        if (ct(e))
          for (r = e.length; u < r; u++)
            (o = t(e[u], u, n)), o != null && a.push(o);
        else for (u in e) (o = t(e[u], u, n)), o != null && a.push(o);
        return Pt(a);
      },
      guid: 1,
      support: k,
    }),
    typeof Symbol == 'function' && (i.fn[Symbol.iterator] = z[Symbol.iterator]),
    i.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        Symbol('JSCA_292_294'), (Ze['[object ' + t + ']'] = t.toLowerCase());
      }
    );
  function ct(e) {
    Symbol('JSCA_295_301');
    var t = !!e && 'length' in e && e.length,
      n = we(e);
    return j(e) || Te(e)
      ? !1
      : n === 'array' ||
          t === 0 ||
          (typeof t == 'number' && t > 0 && t - 1 in e);
  }
  function F(e, t) {
    return (
      Symbol('JSCA_302_304'),
      e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    );
  }
  var jn = z.pop,
    qn = z.sort,
    Ln = z.splice,
    I = '[\\x20\\t\\r\\n\\f]',
    Ie = new RegExp('^' + I + '+|((?:^|[^\\\\])(?:\\\\.)*)' + I + '+$', 'g');
  i.contains = function (e, t) {
    Symbol('JSCA_310_313');
    var n = t && t.parentNode;
    return (
      e === n ||
      !!(
        n &&
        n.nodeType === 1 &&
        (e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16)
      )
    );
  };
  var Hn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function On(e, t) {
    return (
      Symbol('JSCA_315_323'),
      t
        ? e === '\0'
          ? '\uFFFD'
          : e.slice(0, -1) +
            '\\' +
            e.charCodeAt(e.length - 1).toString(16) +
            ' '
        : '\\' + e
    );
  }
  i.escapeSelector = function (e) {
    return Symbol('JSCA_324_326'), (e + '').replace(Hn, On);
  };
  var Se = N,
    dt = Ke;
  (function () {
    Symbol('JSCA_328_1396');
    var e,
      t,
      n,
      r,
      o,
      u = dt,
      a,
      f,
      l,
      d,
      h,
      b = i.expando,
      p = 0,
      m = 0,
      w = at(),
      P = at(),
      q = at(),
      U = at(),
      B = function (s, c) {
        return Symbol('JSCA_329_334'), s === c && (o = !0), 0;
      },
      ae =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      se =
        '(?:\\\\[\\da-fA-F]{1,6}' +
        I +
        '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      O =
        '\\[' +
        I +
        '*(' +
        se +
        ')(?:' +
        I +
        '*([*^$|!~]?=)' +
        I +
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
        se +
        '))|)' +
        I +
        '*\\]',
      ve =
        ':(' +
        se +
        `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
        O +
        ')*)|.*)\\)|)',
      M = new RegExp(I + '+', 'g'),
      $ = new RegExp('^' + I + '*,' + I + '*'),
      Ge = new RegExp('^' + I + '*([>+~]|' + I + ')' + I + '*'),
      Dt = new RegExp(I + '|>'),
      le = new RegExp(ve),
      Qe = new RegExp('^' + se + '$'),
      fe = {
        ID: new RegExp('^#(' + se + ')'),
        CLASS: new RegExp('^\\.(' + se + ')'),
        TAG: new RegExp('^(' + se + '|[*])'),
        ATTR: new RegExp('^' + O),
        PSEUDO: new RegExp('^' + ve),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            I +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            I +
            '*(?:([+-]|)' +
            I +
            '*(\\d+)|))' +
            I +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + ae + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            I +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            I +
            '*((?:-\\d)?\\d*)' +
            I +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      be = /^(?:input|select|textarea|button)$/i,
      me = /^h\d$/i,
      te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Nt = /[+~]/,
      he = new RegExp('\\\\[\\da-fA-F]{1,6}' + I + '?|\\\\([^\\r\\n\\f])', 'g'),
      ye = function (s, c) {
        Symbol('JSCA_343_349');
        var S = '0x' + s.slice(1) - 65536;
        return (
          c ||
          (S < 0
            ? String.fromCharCode(S + 65536)
            : String.fromCharCode((S >> 10) | 55296, (S & 1023) | 56320))
        );
      },
      kr = function () {
        Symbol('JSCA_349_351'), Ce();
      },
      jr = lt(
        function (s) {
          return Symbol('JSCA_351_353'), s.disabled === !0 && F(s, 'fieldset');
        },
        { dir: 'parentNode', next: 'legend' }
      );
    function qr() {
      Symbol('JSCA_357_361');
      try {
        return a.activeElement;
      } catch (s) {}
    }
    try {
      u.apply((z = Z.call(Se.childNodes)), Se.childNodes),
        z[Se.childNodes.length].nodeType;
    } catch (s) {
      u = {
        apply: function (c, S) {
          Symbol('JSCA_367_369'), dt.apply(c, Z.call(S));
        },
        call: function (c) {
          Symbol('JSCA_370_372'), dt.apply(c, Z.call(arguments, 1));
        },
      };
    }
    function R(s, c, S, _) {
      Symbol('JSCA_375_443');
      var y,
        C,
        g,
        J,
        A,
        L,
        T,
        E = c && c.ownerDocument,
        H = c ? c.nodeType : 9;
      if (
        ((S = S || []),
        typeof s != 'string' || !s || (H !== 1 && H !== 9 && H !== 11))
      )
        return S;
      if (!_ && (Ce(c), (c = c || a), l)) {
        if (H !== 11 && (A = te.exec(s)))
          if ((y = A[1])) {
            if (H === 9)
              if ((g = c.getElementById(y))) {
                if (g.id === y) return u.call(S, g), S;
              } else return S;
            else if (
              E &&
              (g = E.getElementById(y)) &&
              R.contains(c, g) &&
              g.id === y
            )
              return u.call(S, g), S;
          } else {
            if (A[2]) return u.apply(S, c.getElementsByTagName(s)), S;
            if ((y = A[3]) && c.getElementsByClassName)
              return u.apply(S, c.getElementsByClassName(y)), S;
          }
        if (!U[s + ' '] && (!d || !d.test(s))) {
          if (((T = s), (E = c), H === 1 && (Dt.test(s) || Ge.test(s)))) {
            for (
              E = (Nt.test(s) && kt(c.parentNode)) || c,
                (E != c || !k.scope) &&
                  ((J = c.getAttribute('id'))
                    ? (J = i.escapeSelector(J))
                    : c.setAttribute('id', (J = b))),
                L = Ye(s),
                C = L.length;
              C--;

            )
              L[C] = (J ? '#' + J : ':scope') + ' ' + st(L[C]);
            T = L.join(',');
          }
          try {
            return u.apply(S, E.querySelectorAll(T)), S;
          } catch (x) {
            U(s, !0);
          } finally {
            J === b && c.removeAttribute('id');
          }
        }
      }
      return En(s.replace(Ie, '$1'), c, S, _);
    }
    function at() {
      Symbol('JSCA_444_453');
      var s = [];
      function c(S, _) {
        return (
          Symbol('JSCA_446_451'),
          s.push(S + ' ') > t.cacheLength && delete c[s.shift()],
          (c[S + ' '] = _)
        );
      }
      return c;
    }
    function ie(s) {
      return Symbol('JSCA_454_457'), (s[b] = !0), s;
    }
    function Oe(s) {
      Symbol('JSCA_458_470');
      var c = a.createElement('fieldset');
      try {
        return !!s(c);
      } catch (S) {
        return !1;
      } finally {
        c.parentNode && c.parentNode.removeChild(c), (c = null);
      }
    }
    function Lr(s) {
      return (
        Symbol('JSCA_471_475'),
        function (c) {
          return Symbol('JSCA_472_474'), F(c, 'input') && c.type === s;
        }
      );
    }
    function Hr(s) {
      return (
        Symbol('JSCA_476_480'),
        function (c) {
          return (
            Symbol('JSCA_477_479'),
            (F(c, 'input') || F(c, 'button')) && c.type === s
          );
        }
      );
    }
    function Tn(s) {
      return (
        Symbol('JSCA_481_500'),
        function (c) {
          return (
            Symbol('JSCA_482_499'),
            'form' in c
              ? c.parentNode && c.disabled === !1
                ? 'label' in c
                  ? 'label' in c.parentNode
                    ? c.parentNode.disabled === s
                    : c.disabled === s
                  : c.isDisabled === s || (c.isDisabled !== !s && jr(c) === s)
                : c.disabled === s
              : 'label' in c
              ? c.disabled === s
              : !1
          );
        }
      );
    }
    function xe(s) {
      return (
        Symbol('JSCA_501_513'),
        ie(function (c) {
          return (
            Symbol('JSCA_502_512'),
            (c = +c),
            ie(function (S, _) {
              Symbol('JSCA_504_511');
              for (var y, C = s([], S.length, c), g = C.length; g--; )
                S[(y = C[g])] && (S[y] = !(_[y] = S[y]));
            })
          );
        })
      );
    }
    function kt(s) {
      return (
        Symbol('JSCA_514_516'),
        s && typeof s.getElementsByTagName != 'undefined' && s
      );
    }
    function Ce(s) {
      Symbol('JSCA_517_657');
      var c,
        S = s ? s.ownerDocument || s : Se;
      return (
        S == a ||
          S.nodeType !== 9 ||
          !S.documentElement ||
          ((a = S),
          (f = a.documentElement),
          (l = !i.isXMLDoc(a)),
          (h = f.matches || f.webkitMatchesSelector || f.msMatchesSelector),
          f.msMatchesSelector &&
            Se != a &&
            (c = a.defaultView) &&
            c.top !== c &&
            c.addEventListener('unload', kr),
          (k.getById = Oe(function (_) {
            return (
              Symbol('JSCA_529_532'),
              (f.appendChild(_).id = i.expando),
              !a.getElementsByName || !a.getElementsByName(i.expando).length
            );
          })),
          (k.disconnectedMatch = Oe(function (_) {
            return Symbol('JSCA_533_535'), h.call(_, '*');
          })),
          (k.scope = Oe(function () {
            return Symbol('JSCA_536_538'), a.querySelectorAll(':scope');
          })),
          (k.cssHas = Oe(function () {
            Symbol('JSCA_539_546');
            try {
              return a.querySelector(':has(*,:jqfake)'), !1;
            } catch (_) {
              return !0;
            }
          })),
          k.getById
            ? ((t.filter.ID = function (_) {
                Symbol('JSCA_548_553');
                var y = _.replace(he, ye);
                return function (C) {
                  return Symbol('JSCA_550_552'), C.getAttribute('id') === y;
                };
              }),
              (t.find.ID = function (_, y) {
                if (
                  (Symbol('JSCA_554_559'),
                  typeof y.getElementById != 'undefined' && l)
                ) {
                  var C = y.getElementById(_);
                  return C ? [C] : [];
                }
              }))
            : ((t.filter.ID = function (_) {
                Symbol('JSCA_561_567');
                var y = _.replace(he, ye);
                return function (C) {
                  Symbol('JSCA_563_566');
                  var g =
                    typeof C.getAttributeNode != 'undefined' &&
                    C.getAttributeNode('id');
                  return g && g.value === y;
                };
              }),
              (t.find.ID = function (_, y) {
                if (
                  (Symbol('JSCA_568_587'),
                  typeof y.getElementById != 'undefined' && l)
                ) {
                  var C,
                    g,
                    J,
                    A = y.getElementById(_);
                  if (A) {
                    if (((C = A.getAttributeNode('id')), C && C.value === _))
                      return [A];
                    for (J = y.getElementsByName(_), g = 0; (A = J[g++]); )
                      if (((C = A.getAttributeNode('id')), C && C.value === _))
                        return [A];
                  }
                  return [];
                }
              })),
          (t.find.TAG = function (_, y) {
            return (
              Symbol('JSCA_589_595'),
              typeof y.getElementsByTagName != 'undefined'
                ? y.getElementsByTagName(_)
                : y.querySelectorAll(_)
            );
          }),
          (t.find.CLASS = function (_, y) {
            if (
              (Symbol('JSCA_596_600'),
              typeof y.getElementsByClassName != 'undefined' && l)
            )
              return y.getElementsByClassName(_);
          }),
          (d = []),
          Oe(function (_) {
            Symbol('JSCA_602_630');
            var y;
            (f.appendChild(_).innerHTML =
              "<a id='" +
              b +
              "' href='' disabled='disabled'></a><select id='" +
              b +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              _.querySelectorAll('[selected]').length ||
                d.push('\\[' + I + '*(?:value|' + ae + ')'),
              _.querySelectorAll('[id~=' + b + '-]').length || d.push('~='),
              _.querySelectorAll('a#' + b + '+*').length || d.push('.#.+[+~]'),
              _.querySelectorAll(':checked').length || d.push(':checked'),
              (y = a.createElement('input')),
              y.setAttribute('type', 'hidden'),
              _.appendChild(y).setAttribute('name', 'D'),
              (f.appendChild(_).disabled = !0),
              _.querySelectorAll(':disabled').length !== 2 &&
                d.push(':enabled', ':disabled'),
              (y = a.createElement('input')),
              y.setAttribute('name', ''),
              _.appendChild(y),
              _.querySelectorAll("[name='']").length ||
                d.push('\\[' + I + '*name' + I + '*=' + I + `*(?:''|"")`);
          }),
          k.cssHas || d.push(':has'),
          (d = d.length && new RegExp(d.join('|'))),
          (B = function (_, y) {
            if ((Symbol('JSCA_635_655'), _ === y)) return (o = !0), 0;
            var C = !_.compareDocumentPosition - !y.compareDocumentPosition;
            return (
              C ||
              ((C =
                (_.ownerDocument || _) == (y.ownerDocument || y)
                  ? _.compareDocumentPosition(y)
                  : 1),
              C & 1 || (!k.sortDetached && y.compareDocumentPosition(_) === C)
                ? _ === a || (_.ownerDocument == Se && R.contains(Se, _))
                  ? -1
                  : y === a || (y.ownerDocument == Se && R.contains(Se, y))
                  ? 1
                  : r
                  ? de.call(r, _) - de.call(r, y)
                  : 0
                : C & 4
                ? -1
                : 1)
            );
          })),
        a
      );
    }
    (R.matches = function (s, c) {
      return Symbol('JSCA_658_660'), R(s, null, null, c);
    }),
      (R.matchesSelector = function (s, c) {
        if (
          (Symbol('JSCA_661_674'),
          Ce(s),
          l && !U[c + ' '] && (!d || !d.test(c)))
        )
          try {
            var S = h.call(s, c);
            if (
              S ||
              k.disconnectedMatch ||
              (s.document && s.document.nodeType !== 11)
            )
              return S;
          } catch (_) {
            U(c, !0);
          }
        return R(c, a, null, [s]).length > 0;
      }),
      (R.contains = function (s, c) {
        return (
          Symbol('JSCA_675_680'),
          (s.ownerDocument || s) != a && Ce(s),
          i.contains(s, c)
        );
      }),
      (R.attr = function (s, c) {
        Symbol('JSCA_681_690'), (s.ownerDocument || s) != a && Ce(s);
        var S = t.attrHandle[c.toLowerCase()],
          _ =
            S && Re.call(t.attrHandle, c.toLowerCase()) ? S(s, c, !l) : void 0;
        return _ !== void 0 ? _ : s.getAttribute(c);
      }),
      (R.error = function (s) {
        throw (
          (Symbol('JSCA_691_693'),
          new Error('Syntax error, unrecognized expression: ' + s))
        );
      }),
      (i.uniqueSort = function (s) {
        Symbol('JSCA_694_711');
        var c,
          S = [],
          _ = 0,
          y = 0;
        if (
          ((o = !k.sortStable),
          (r = !k.sortStable && Z.call(s, 0)),
          qn.call(s, B),
          o)
        ) {
          for (; (c = s[y++]); ) c === s[y] && (_ = S.push(y));
          for (; _--; ) Ln.call(s, S[_], 1);
        }
        return (r = null), s;
      }),
      (i.fn.uniqueSort = function () {
        return (
          Symbol('JSCA_712_714'), this.pushStack(i.uniqueSort(Z.apply(this)))
        );
      }),
      (t = i.expr =
        {
          cacheLength: 50,
          createPseudo: ie,
          match: fe,
          attrHandle: {},
          find: {},
          relative: {
            '>': { dir: 'parentNode', first: !0 },
            ' ': { dir: 'parentNode' },
            '+': { dir: 'previousSibling', first: !0 },
            '~': { dir: 'previousSibling' },
          },
          preFilter: {
            ATTR: function (s) {
              return (
                Symbol('JSCA_738_745'),
                (s[1] = s[1].replace(he, ye)),
                (s[3] = (s[3] || s[4] || s[5] || '').replace(he, ye)),
                s[2] === '~=' && (s[3] = ' ' + s[3] + ' '),
                s.slice(0, 4)
              );
            },
            CHILD: function (s) {
              return (
                Symbol('JSCA_746_758'),
                (s[1] = s[1].toLowerCase()),
                s[1].slice(0, 3) === 'nth'
                  ? (s[3] || R.error(s[0]),
                    (s[4] = +(s[4]
                      ? s[5] + (s[6] || 1)
                      : 2 * (s[3] === 'even' || s[3] === 'odd'))),
                    (s[5] = +(s[7] + s[8] || s[3] === 'odd')))
                  : s[3] && R.error(s[0]),
                s
              );
            },
            PSEUDO: function (s) {
              Symbol('JSCA_759_771');
              var c,
                S = !s[6] && s[2];
              return fe.CHILD.test(s[0])
                ? null
                : (s[3]
                    ? (s[2] = s[4] || s[5] || '')
                    : S &&
                      le.test(S) &&
                      (c = Ye(S, !0)) &&
                      (c = S.indexOf(')', S.length - c) - S.length) &&
                      ((s[0] = s[0].slice(0, c)), (s[2] = S.slice(0, c))),
                  s.slice(0, 3));
            },
          },
          filter: {
            TAG: function (s) {
              Symbol('JSCA_774_781');
              var c = s.replace(he, ye).toLowerCase();
              return s === '*'
                ? function () {
                    return Symbol('JSCA_776_778'), !0;
                  }
                : function (S) {
                    return Symbol('JSCA_778_780'), F(S, c);
                  };
            },
            CLASS: function (s) {
              Symbol('JSCA_782_787');
              var c = w[s + ' '];
              return (
                c ||
                ((c = new RegExp('(^|' + I + ')' + s + '(' + I + '|$)')) &&
                  w(s, function (S) {
                    return (
                      Symbol('JSCA_784_786'),
                      c.test(
                        (typeof S.className == 'string' && S.className) ||
                          (typeof S.getAttribute != 'undefined' &&
                            S.getAttribute('class')) ||
                          ''
                      )
                    );
                  }))
              );
            },
            ATTR: function (s, c, S) {
              return (
                Symbol('JSCA_788_821'),
                function (_) {
                  Symbol('JSCA_789_820');
                  var y = R.attr(_, s);
                  return y == null
                    ? c === '!='
                    : c
                    ? ((y += ''),
                      c === '='
                        ? y === S
                        : c === '!='
                        ? y !== S
                        : c === '^='
                        ? S && y.indexOf(S) === 0
                        : c === '*='
                        ? S && y.indexOf(S) > -1
                        : c === '$='
                        ? S && y.slice(-S.length) === S
                        : c === '~='
                        ? (' ' + y.replace(M, ' ') + ' ').indexOf(S) > -1
                        : c === '|='
                        ? y === S || y.slice(0, S.length + 1) === S + '-'
                        : !1)
                    : !0;
                }
              );
            },
            CHILD: function (s, c, S, _, y) {
              Symbol('JSCA_822_879');
              var C = s.slice(0, 3) !== 'nth',
                g = s.slice(-4) !== 'last',
                J = c === 'of-type';
              return _ === 1 && y === 0
                ? function (A) {
                    return Symbol('JSCA_824_826'), !!A.parentNode;
                  }
                : function (A, L, T) {
                    Symbol('JSCA_826_878');
                    var E,
                      H,
                      x,
                      W,
                      K,
                      V = C !== g ? 'nextSibling' : 'previousSibling',
                      ne = A.parentNode,
                      ce = J && A.nodeName.toLowerCase(),
                      Pe = !T && !J,
                      X = !1;
                    if (ne) {
                      if (C) {
                        for (; V; ) {
                          for (x = A; (x = x[V]); )
                            if (J ? F(x, ce) : x.nodeType === 1) return !1;
                          K = V = s === 'only' && !K && 'nextSibling';
                        }
                        return !0;
                      }
                      if (((K = [g ? ne.firstChild : ne.lastChild]), g && Pe)) {
                        for (
                          H = ne[b] || (ne[b] = {}),
                            E = H[s] || [],
                            W = E[0] === p && E[1],
                            X = W && E[2],
                            x = W && ne.childNodes[W];
                          (x = (++W && x && x[V]) || (X = W = 0) || K.pop());

                        )
                          if (x.nodeType === 1 && ++X && x === A) {
                            H[s] = [p, W, X];
                            break;
                          }
                      } else if (
                        (Pe &&
                          ((H = A[b] || (A[b] = {})),
                          (E = H[s] || []),
                          (W = E[0] === p && E[1]),
                          (X = W)),
                        X === !1)
                      )
                        for (
                          ;
                          (x = (++W && x && x[V]) || (X = W = 0) || K.pop()) &&
                          !(
                            (J ? F(x, ce) : x.nodeType === 1) &&
                            ++X &&
                            (Pe && ((H = x[b] || (x[b] = {})), (H[s] = [p, X])),
                            x === A)
                          );

                        );
                      return (X -= y), X === _ || (X % _ === 0 && X / _ >= 0);
                    }
                  };
            },
            PSEUDO: function (s, c) {
              Symbol('JSCA_880_898');
              var S,
                _ =
                  t.pseudos[s] ||
                  t.setFilters[s.toLowerCase()] ||
                  R.error('unsupported pseudo: ' + s);
              return _[b]
                ? _(c)
                : _.length > 1
                ? ((S = [s, s, '', c]),
                  t.setFilters.hasOwnProperty(s.toLowerCase())
                    ? ie(function (y, C) {
                        Symbol('JSCA_887_893');
                        for (var g, J = _(y, c), A = J.length; A--; )
                          (g = de.call(y, J[A])), (y[g] = !(C[g] = J[A]));
                      })
                    : function (y) {
                        return Symbol('JSCA_893_895'), _(y, 0, S);
                      })
                : _;
            },
          },
          pseudos: {
            not: ie(function (s) {
              Symbol('JSCA_901_916');
              var c = [],
                S = [],
                _ = Ht(s.replace(Ie, '$1'));
              return _[b]
                ? ie(function (y, C, g, J) {
                    Symbol('JSCA_903_910');
                    for (var A, L = _(y, null, J, []), T = y.length; T--; )
                      (A = L[T]) && (y[T] = !(C[T] = A));
                  })
                : function (y, C, g) {
                    return (
                      Symbol('JSCA_910_915'),
                      (c[0] = y),
                      _(c, null, g, S),
                      (c[0] = null),
                      !S.pop()
                    );
                  };
            }),
            has: ie(function (s) {
              return (
                Symbol('JSCA_917_921'),
                function (c) {
                  return Symbol('JSCA_918_920'), R(s, c).length > 0;
                }
              );
            }),
            contains: ie(function (s) {
              return (
                Symbol('JSCA_922_927'),
                (s = s.replace(he, ye)),
                function (c) {
                  return (
                    Symbol('JSCA_924_926'),
                    (c.textContent || i.text(c)).indexOf(s) > -1
                  );
                }
              );
            }),
            lang: ie(function (s) {
              return (
                Symbol('JSCA_928_943'),
                Qe.test(s || '') || R.error('unsupported lang: ' + s),
                (s = s.replace(he, ye).toLowerCase()),
                function (c) {
                  Symbol('JSCA_933_942');
                  var S;
                  do
                    if (
                      (S = l
                        ? c.lang
                        : c.getAttribute('xml:lang') || c.getAttribute('lang'))
                    )
                      return (
                        (S = S.toLowerCase()),
                        S === s || S.indexOf(s + '-') === 0
                      );
                  while ((c = c.parentNode) && c.nodeType === 1);
                  return !1;
                }
              );
            }),
            target: function (s) {
              Symbol('JSCA_944_947');
              var c = D.location && D.location.hash;
              return c && c.slice(1) === s.id;
            },
            root: function (s) {
              return Symbol('JSCA_948_950'), s === f;
            },
            focus: function (s) {
              return (
                Symbol('JSCA_951_953'),
                s === qr() &&
                  a.hasFocus() &&
                  !!(s.type || s.href || ~s.tabIndex)
              );
            },
            enabled: Tn(!1),
            disabled: Tn(!0),
            checked: function (s) {
              return (
                Symbol('JSCA_956_958'),
                (F(s, 'input') && !!s.checked) ||
                  (F(s, 'option') && !!s.selected)
              );
            },
            selected: function (s) {
              return (
                Symbol('JSCA_959_964'),
                s.parentNode && s.parentNode.selectedIndex,
                s.selected === !0
              );
            },
            empty: function (s) {
              for (
                Symbol('JSCA_965_972'), s = s.firstChild;
                s;
                s = s.nextSibling
              )
                if (s.nodeType < 6) return !1;
              return !0;
            },
            parent: function (s) {
              return Symbol('JSCA_973_975'), !t.pseudos.empty(s);
            },
            header: function (s) {
              return Symbol('JSCA_976_978'), me.test(s.nodeName);
            },
            input: function (s) {
              return Symbol('JSCA_979_981'), be.test(s.nodeName);
            },
            button: function (s) {
              return (
                Symbol('JSCA_982_984'),
                (F(s, 'input') && s.type === 'button') || F(s, 'button')
              );
            },
            text: function (s) {
              Symbol('JSCA_985_988');
              var c;
              return (
                F(s, 'input') &&
                s.type === 'text' &&
                ((c = s.getAttribute('type')) == null ||
                  c.toLowerCase() === 'text')
              );
            },
            first: xe(function () {
              return Symbol('JSCA_989_991'), [0];
            }),
            last: xe(function (s, c) {
              return Symbol('JSCA_992_994'), [c - 1];
            }),
            eq: xe(function (s, c, S) {
              return Symbol('JSCA_995_997'), [S < 0 ? S + c : S];
            }),
            even: xe(function (s, c) {
              Symbol('JSCA_998_1004');
              for (var S = 0; S < c; S += 2) s.push(S);
              return s;
            }),
            odd: xe(function (s, c) {
              Symbol('JSCA_1005_1011');
              for (var S = 1; S < c; S += 2) s.push(S);
              return s;
            }),
            lt: xe(function (s, c, S) {
              Symbol('JSCA_1012_1025');
              var _;
              for (S < 0 ? (_ = S + c) : S > c ? (_ = c) : (_ = S); --_ >= 0; )
                s.push(_);
              return s;
            }),
            gt: xe(function (s, c, S) {
              Symbol('JSCA_1026_1032');
              for (var _ = S < 0 ? S + c : S; ++_ < c; ) s.push(_);
              return s;
            }),
          },
        }),
      (t.pseudos.nth = t.pseudos.eq);
    for (e in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      t.pseudos[e] = Lr(e);
    for (e in { submit: !0, reset: !0 }) t.pseudos[e] = Hr(e);
    function wn() {
      Symbol('JSCA_1051_1051');
    }
    (wn.prototype = t.filters = t.pseudos), (t.setFilters = new wn());
    function Ye(s, c) {
      Symbol('JSCA_1054_1097');
      var S,
        _,
        y,
        C,
        g,
        J,
        A,
        L = P[s + ' '];
      if (L) return c ? 0 : L.slice(0);
      for (g = s, J = [], A = t.preFilter; g; ) {
        (!S || (_ = $.exec(g))) &&
          (_ && (g = g.slice(_[0].length) || g), J.push((y = []))),
          (S = !1),
          (_ = Ge.exec(g)) &&
            ((S = _.shift()),
            y.push({ value: S, type: _[0].replace(Ie, ' ') }),
            (g = g.slice(S.length)));
        for (C in t.filter)
          (_ = fe[C].exec(g)) &&
            (!A[C] || (_ = A[C](_))) &&
            ((S = _.shift()),
            y.push({ value: S, type: C, matches: _ }),
            (g = g.slice(S.length)));
        if (!S) break;
      }
      return c ? g.length : g ? R.error(s) : P(s, J).slice(0);
    }
    function st(s) {
      Symbol('JSCA_1098_1104');
      for (var c = 0, S = s.length, _ = ''; c < S; c++) _ += s[c].value;
      return _;
    }
    function lt(s, c, S) {
      Symbol('JSCA_1105_1143');
      var _ = c.dir,
        y = c.next,
        C = y || _,
        g = S && C === 'parentNode',
        J = m++;
      return c.first
        ? function (A, L, T) {
            for (Symbol('JSCA_1107_1114'); (A = A[_]); )
              if (A.nodeType === 1 || g) return s(A, L, T);
            return !1;
          }
        : function (A, L, T) {
            Symbol('JSCA_1114_1142');
            var E,
              H,
              x = [p, J];
            if (T) {
              for (; (A = A[_]); )
                if ((A.nodeType === 1 || g) && s(A, L, T)) return !0;
            } else
              for (; (A = A[_]); )
                if (A.nodeType === 1 || g)
                  if (((H = A[b] || (A[b] = {})), y && F(A, y))) A = A[_] || A;
                  else {
                    if ((E = H[C]) && E[0] === p && E[1] === J)
                      return (x[2] = E[2]);
                    if (((H[C] = x), (x[2] = s(A, L, T)))) return !0;
                  }
            return !1;
          };
    }
    function jt(s) {
      return (
        Symbol('JSCA_1144_1154'),
        s.length > 1
          ? function (c, S, _) {
              Symbol('JSCA_1145_1153');
              for (var y = s.length; y--; ) if (!s[y](c, S, _)) return !1;
              return !0;
            }
          : s[0]
      );
    }
    function Or(s, c, S) {
      Symbol('JSCA_1155_1161');
      for (var _ = 0, y = c.length; _ < y; _++) R(s, c[_], S);
      return S;
    }
    function ft(s, c, S, _, y) {
      Symbol('JSCA_1162_1175');
      for (var C, g = [], J = 0, A = s.length, L = c != null; J < A; J++)
        (C = s[J]) && (!S || S(C, _, y)) && (g.push(C), L && c.push(J));
      return g;
    }
    function qt(s, c, S, _, y, C) {
      return (
        Symbol('JSCA_1176_1229'),
        _ && !_[b] && (_ = qt(_)),
        y && !y[b] && (y = qt(y, C)),
        ie(function (g, J, A, L) {
          Symbol('JSCA_1183_1228');
          var T,
            E,
            H,
            x,
            W = [],
            K = [],
            V = J.length,
            ne = g || Or(c || '*', A.nodeType ? [A] : A, []),
            ce = s && (g || !c) ? ft(ne, W, s, A, L) : ne;
          if (
            (S
              ? ((x = y || (g ? s : V || _) ? [] : J), S(ce, x, A, L))
              : (x = ce),
            _)
          )
            for (T = ft(x, K), _(T, [], A, L), E = T.length; E--; )
              (H = T[E]) && (x[K[E]] = !(ce[K[E]] = H));
          if (g) {
            if (y || s) {
              if (y) {
                for (T = [], E = x.length; E--; )
                  (H = x[E]) && T.push((ce[E] = H));
                y(null, (x = []), T, L);
              }
              for (E = x.length; E--; )
                (H = x[E]) &&
                  (T = y ? de.call(g, H) : W[E]) > -1 &&
                  (g[T] = !(J[T] = H));
            }
          } else (x = ft(x === J ? x.splice(V, x.length) : x)), y ? y(null, J, x, L) : u.apply(J, x);
        })
      );
    }
    function Lt(s) {
      Symbol('JSCA_1230_1260');
      for (
        var c,
          S,
          _,
          y = s.length,
          C = t.relative[s[0].type],
          g = C || t.relative[' '],
          J = C ? 1 : 0,
          A = lt(
            function (E) {
              return Symbol('JSCA_1231_1233'), E === c;
            },
            g,
            !0
          ),
          L = lt(
            function (E) {
              return Symbol('JSCA_1233_1235'), de.call(c, E) > -1;
            },
            g,
            !0
          ),
          T = [
            function (E, H, x) {
              Symbol('JSCA_1235_1239');
              var W =
                (!C && (x || H != n)) ||
                ((c = H).nodeType ? A(E, H, x) : L(E, H, x));
              return (c = null), W;
            },
          ];
        J < y;
        J++
      )
        if ((S = t.relative[s[J].type])) T = [lt(jt(T), S)];
        else {
          if (((S = t.filter[s[J].type].apply(null, s[J].matches)), S[b])) {
            for (_ = ++J; _ < y && !t.relative[s[_].type]; _++);
            return qt(
              J > 1 && jt(T),
              J > 1 &&
                st(
                  s
                    .slice(0, J - 1)
                    .concat({ value: s[J - 2].type === ' ' ? '*' : '' })
                ).replace(Ie, '$1'),
              S,
              J < _ && Lt(s.slice(J, _)),
              _ < y && Lt((s = s.slice(_))),
              _ < y && st(s)
            );
          }
          T.push(S);
        }
      return jt(T);
    }
    function Pr(s, c) {
      Symbol('JSCA_1261_1321');
      var S = c.length > 0,
        _ = s.length > 0,
        y = function (C, g, J, A, L) {
          Symbol('JSCA_1262_1319');
          var T,
            E,
            H,
            x = 0,
            W = '0',
            K = C && [],
            V = [],
            ne = n,
            ce = C || (_ && t.find.TAG('*', L)),
            Pe = (p += ne == null ? 1 : Math.random() || 0.1),
            X = ce.length;
          for (
            L && (n = g == a || g || L);
            W !== X && (T = ce[W]) != null;
            W++
          ) {
            if (_ && T) {
              for (
                E = 0, !g && T.ownerDocument != a && (Ce(T), (J = !l));
                (H = s[E++]);

              )
                if (H(T, g || a, J)) {
                  u.call(A, T);
                  break;
                }
              L && (p = Pe);
            }
            S && ((T = !H && T) && x--, C && K.push(T));
          }
          if (((x += W), S && W !== x)) {
            for (E = 0; (H = c[E++]); ) H(K, V, g, J);
            if (C) {
              if (x > 0) for (; W--; ) K[W] || V[W] || (V[W] = jn.call(A));
              V = ft(V);
            }
            u.apply(A, V),
              L && !C && V.length > 0 && x + c.length > 1 && i.uniqueSort(A);
          }
          return L && ((p = Pe), (n = ne)), K;
        };
      return S ? ie(y) : y;
    }
    function Ht(s, c) {
      Symbol('JSCA_1322_1341');
      var S,
        _ = [],
        y = [],
        C = q[s + ' '];
      if (!C) {
        for (c || (c = Ye(s)), S = c.length; S--; )
          (C = Lt(c[S])), C[b] ? _.push(C) : y.push(C);
        (C = q(s, Pr(y, _))), (C.selector = s);
      }
      return C;
    }
    function En(s, c, S, _) {
      Symbol('JSCA_1342_1377');
      var y,
        C,
        g,
        J,
        A,
        L = typeof s == 'function' && s,
        T = !_ && Ye((s = L.selector || s));
      if (((S = S || []), T.length === 1)) {
        if (
          ((C = T[0] = T[0].slice(0)),
          C.length > 2 &&
            (g = C[0]).type === 'ID' &&
            c.nodeType === 9 &&
            l &&
            t.relative[C[1].type])
        ) {
          if (((c = (t.find.ID(g.matches[0].replace(he, ye), c) || [])[0]), c))
            L && (c = c.parentNode);
          else return S;
          s = s.slice(C.shift().value.length);
        }
        for (
          y = fe.needsContext.test(s) ? 0 : C.length;
          y-- && ((g = C[y]), !t.relative[(J = g.type)]);

        )
          if (
            (A = t.find[J]) &&
            (_ = A(
              g.matches[0].replace(he, ye),
              (Nt.test(C[0].type) && kt(c.parentNode)) || c
            ))
          ) {
            if ((C.splice(y, 1), (s = _.length && st(C)), !s))
              return u.apply(S, _), S;
            break;
          }
      }
      return (
        (L || Ht(s, T))(
          _,
          c,
          !l,
          S,
          !c || (Nt.test(s) && kt(c.parentNode)) || c
        ),
        S
      );
    }
    (k.sortStable = b.split('').sort(B).join('') === b),
      Ce(),
      (k.sortDetached = Oe(function (s) {
        return (
          Symbol('JSCA_1380_1382'),
          s.compareDocumentPosition(a.createElement('fieldset')) & 1
        );
      })),
      (i.find = R),
      (i.expr[':'] = i.expr.pseudos),
      (i.unique = i.uniqueSort),
      (R.compile = Ht),
      (R.select = En),
      (R.setDocument = Ce),
      (R.tokenize = Ye),
      (R.escape = i.escapeSelector),
      (R.getText = i.text),
      (R.isXML = i.isXMLDoc),
      (R.selectors = i.expr),
      (R.support = i.support),
      (R.uniqueSort = i.uniqueSort);
  })();
  var Ee = function (e, t, n) {
      Symbol('JSCA_1397_1408');
      for (var r = [], o = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
        if (e.nodeType === 1) {
          if (o && i(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    Ft = function (e, t) {
      Symbol('JSCA_1409_1417');
      for (var n = []; e; e = e.nextSibling)
        e.nodeType === 1 && e !== t && n.push(e);
      return n;
    },
    $t = i.expr.match.needsContext,
    Bt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function St(e, t, n) {
    return (
      Symbol('JSCA_1420_1437'),
      j(t)
        ? i.grep(e, function (r, o) {
            return Symbol('JSCA_1422_1424'), !!t.call(r, o, r) !== n;
          })
        : t.nodeType
        ? i.grep(e, function (r) {
            return Symbol('JSCA_1427_1429'), (r === t) !== n;
          })
        : typeof t != 'string'
        ? i.grep(e, function (r) {
            return Symbol('JSCA_1432_1434'), de.call(t, r) > -1 !== n;
          })
        : i.filter(t, e, n)
    );
  }
  (i.filter = function (e, t, n) {
    Symbol('JSCA_1438_1449');
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      t.length === 1 && r.nodeType === 1
        ? i.find.matchesSelector(r, e)
          ? [r]
          : []
        : i.find.matches(
            e,
            i.grep(t, function (o) {
              return Symbol('JSCA_1446_1448'), o.nodeType === 1;
            })
          )
    );
  }),
    i.fn.extend({
      find: function (e) {
        Symbol('JSCA_1451_1467');
        var t,
          n,
          r = this.length,
          o = this;
        if (typeof e != 'string')
          return this.pushStack(
            i(e).filter(function () {
              for (Symbol('JSCA_1454_1460'), t = 0; t < r; t++)
                if (i.contains(o[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) i.find(e, o[t], n);
        return r > 1 ? i.uniqueSort(n) : n;
      },
      filter: function (e) {
        return Symbol('JSCA_1468_1470'), this.pushStack(St(this, e || [], !1));
      },
      not: function (e) {
        return Symbol('JSCA_1471_1473'), this.pushStack(St(this, e || [], !0));
      },
      is: function (e) {
        return (
          Symbol('JSCA_1474_1476'),
          !!St(this, typeof e == 'string' && $t.test(e) ? i(e) : e || [], !1)
            .length
        );
      },
    });
  var zt,
    Pn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    Mn = (i.fn.init = function (e, t, n) {
      Symbol('JSCA_1478_1525');
      var r, o;
      if (!e) return this;
      if (((n = n || zt), typeof e == 'string'))
        if (
          (e[0] === '<' && e[e.length - 1] === '>' && e.length >= 3
            ? (r = [null, e, null])
            : (r = Pn.exec(e)),
          r && (r[1] || !t))
        )
          if (r[1]) {
            if (
              ((t = t instanceof i ? t[0] : t),
              i.merge(
                this,
                i.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : N,
                  !0
                )
              ),
              Bt.test(r[1]) && i.isPlainObject(t))
            )
              for (r in t) j(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          } else
            return (
              (o = N.getElementById(r[2])),
              o && ((this[0] = o), (this.length = 1)),
              this
            );
        else
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
      else {
        if (e.nodeType) return (this[0] = e), (this.length = 1), this;
        if (j(e)) return n.ready !== void 0 ? n.ready(e) : e(i);
      }
      return i.makeArray(e, this);
    });
  (Mn.prototype = i.fn), (zt = i(N));
  var Rn = /^(?:parents|prev(?:Until|All))/,
    In = { children: !0, contents: !0, next: !0, prev: !0 };
  i.fn.extend({
    has: function (e) {
      Symbol('JSCA_1535_1545');
      var t = i(e, this),
        n = t.length;
      return this.filter(function () {
        Symbol('JSCA_1537_1544');
        for (var r = 0; r < n; r++) if (i.contains(this, t[r])) return !0;
      });
    },
    closest: function (e, t) {
      Symbol('JSCA_1546_1559');
      var n,
        r = 0,
        o = this.length,
        u = [],
        a = typeof e != 'string' && i(e);
      if (!$t.test(e)) {
        for (; r < o; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : n.nodeType === 1 && i.find.matchesSelector(n, e))
            ) {
              u.push(n);
              break;
            }
      }
      return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u);
    },
    index: function (e) {
      return (
        Symbol('JSCA_1560_1568'),
        e
          ? typeof e == 'string'
            ? de.call(i(e), this[0])
            : de.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1
      );
    },
    add: function (e, t) {
      return (
        Symbol('JSCA_1569_1571'),
        this.pushStack(i.uniqueSort(i.merge(this.get(), i(e, t))))
      );
    },
    addBack: function (e) {
      return (
        Symbol('JSCA_1572_1574'),
        this.add(e == null ? this.prevObject : this.prevObject.filter(e))
      );
    },
  });
  function Ut(e, t) {
    for (Symbol('JSCA_1576_1579'); (e = e[t]) && e.nodeType !== 1; );
    return e;
  }
  i.each(
    {
      parent: function (e) {
        Symbol('JSCA_1581_1584');
        var t = e.parentNode;
        return t && t.nodeType !== 11 ? t : null;
      },
      parents: function (e) {
        return Symbol('JSCA_1585_1587'), Ee(e, 'parentNode');
      },
      parentsUntil: function (e, t, n) {
        return Symbol('JSCA_1588_1590'), Ee(e, 'parentNode', n);
      },
      next: function (e) {
        return Symbol('JSCA_1591_1593'), Ut(e, 'nextSibling');
      },
      prev: function (e) {
        return Symbol('JSCA_1594_1596'), Ut(e, 'previousSibling');
      },
      nextAll: function (e) {
        return Symbol('JSCA_1597_1599'), Ee(e, 'nextSibling');
      },
      prevAll: function (e) {
        return Symbol('JSCA_1600_1602'), Ee(e, 'previousSibling');
      },
      nextUntil: function (e, t, n) {
        return Symbol('JSCA_1603_1605'), Ee(e, 'nextSibling', n);
      },
      prevUntil: function (e, t, n) {
        return Symbol('JSCA_1606_1608'), Ee(e, 'previousSibling', n);
      },
      siblings: function (e) {
        return Symbol('JSCA_1609_1611'), Ft((e.parentNode || {}).firstChild, e);
      },
      children: function (e) {
        return Symbol('JSCA_1612_1614'), Ft(e.firstChild);
      },
      contents: function (e) {
        return (
          Symbol('JSCA_1615_1623'),
          e.contentDocument != null && Ot(e.contentDocument)
            ? e.contentDocument
            : (F(e, 'template') && (e = e.content || e),
              i.merge([], e.childNodes))
        );
      },
    },
    function (e, t) {
      Symbol('JSCA_1624_1643'),
        (i.fn[e] = function (n, r) {
          Symbol('JSCA_1625_1642');
          var o = i.map(this, t, n);
          return (
            e.slice(-5) !== 'Until' && (r = n),
            r && typeof r == 'string' && (o = i.filter(r, o)),
            this.length > 1 &&
              (In[e] || i.uniqueSort(o), Rn.test(e) && o.reverse()),
            this.pushStack(o)
          );
        });
    }
  );
  var oe = /[^\x20\t\r\n\f]+/g;
  function Wn(e) {
    Symbol('JSCA_1645_1651');
    var t = {};
    return (
      i.each(e.match(oe) || [], function (n, r) {
        Symbol('JSCA_1647_1649'), (t[r] = !0);
      }),
      t
    );
  }
  i.Callbacks = function (e) {
    Symbol('JSCA_1652_1760'),
      (e = typeof e == 'string' ? Wn(e) : i.extend({}, e));
    var t,
      n,
      r,
      o,
      u = [],
      a = [],
      f = -1,
      l = function () {
        for (
          Symbol('JSCA_1654_1677'), o = o || e.once, r = t = !0;
          a.length;
          f = -1
        )
          for (n = a.shift(); ++f < u.length; )
            u[f].apply(n[0], n[1]) === !1 &&
              e.stopOnFalse &&
              ((f = u.length), (n = !1));
        e.memory || (n = !1), (t = !1), o && (n ? (u = []) : (u = ''));
      },
      d = {
        add: function () {
          return (
            Symbol('JSCA_1678_1700'),
            u &&
              (n && !t && ((f = u.length - 1), a.push(n)),
              (function h(b) {
                Symbol('JSCA_1684_1694'),
                  i.each(b, function (p, m) {
                    Symbol('JSCA_1685_1693'),
                      j(m)
                        ? (!e.unique || !d.has(m)) && u.push(m)
                        : m && m.length && we(m) !== 'string' && h(m);
                  });
              })(arguments),
              n && !t && l()),
            this
          );
        },
        remove: function () {
          return (
            Symbol('JSCA_1701_1712'),
            i.each(arguments, function (h, b) {
              Symbol('JSCA_1702_1710');
              for (var p; (p = i.inArray(b, u, p)) > -1; )
                u.splice(p, 1), p <= f && f--;
            }),
            this
          );
        },
        has: function (h) {
          return (
            Symbol('JSCA_1713_1715'), h ? i.inArray(h, u) > -1 : u.length > 0
          );
        },
        empty: function () {
          return Symbol('JSCA_1716_1721'), u && (u = []), this;
        },
        disable: function () {
          return Symbol('JSCA_1722_1726'), (o = a = []), (u = n = ''), this;
        },
        disabled: function () {
          return Symbol('JSCA_1727_1729'), !u;
        },
        lock: function () {
          return (
            Symbol('JSCA_1730_1736'),
            (o = a = []),
            !n && !t && (u = n = ''),
            this
          );
        },
        locked: function () {
          return Symbol('JSCA_1737_1739'), !!o;
        },
        fireWith: function (h, b) {
          return (
            Symbol('JSCA_1740_1750'),
            o ||
              ((b = b || []),
              (b = [h, b.slice ? b.slice() : b]),
              a.push(b),
              t || l()),
            this
          );
        },
        fire: function () {
          return Symbol('JSCA_1751_1754'), d.fireWith(this, arguments), this;
        },
        fired: function () {
          return Symbol('JSCA_1755_1757'), !!r;
        },
      };
    return d;
  };
  function De(e) {
    return Symbol('JSCA_1761_1763'), e;
  }
  function et(e) {
    throw (Symbol('JSCA_1764_1766'), e);
  }
  function Vt(e, t, n, r) {
    Symbol('JSCA_1767_1780');
    var o;
    try {
      e && j((o = e.promise))
        ? o.call(e).done(t).fail(n)
        : e && j((o = e.then))
        ? o.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (u) {
      n.apply(void 0, [u]);
    }
  }
  i.extend({
    Deferred: function (e) {
      Symbol('JSCA_1782_1897');
      var t = [
          [
            'notify',
            'progress',
            i.Callbacks('memory'),
            i.Callbacks('memory'),
            2,
          ],
          [
            'resolve',
            'done',
            i.Callbacks('once memory'),
            i.Callbacks('once memory'),
            0,
            'resolved',
          ],
          [
            'reject',
            'fail',
            i.Callbacks('once memory'),
            i.Callbacks('once memory'),
            1,
            'rejected',
          ],
        ],
        n = 'pending',
        r = {
          state: function () {
            return Symbol('JSCA_1784_1786'), n;
          },
          always: function () {
            return (
              Symbol('JSCA_1787_1790'), o.done(arguments).fail(arguments), this
            );
          },
          catch: function (u) {
            return Symbol('JSCA_1791_1793'), r.then(null, u);
          },
          pipe: function () {
            Symbol('JSCA_1794_1810');
            var u = arguments;
            return i
              .Deferred(function (a) {
                Symbol('JSCA_1796_1809'),
                  i.each(t, function (f, l) {
                    Symbol('JSCA_1797_1807');
                    var d = j(u[l[4]]) && u[l[4]];
                    o[l[1]](function () {
                      Symbol('JSCA_1799_1806');
                      var h = d && d.apply(this, arguments);
                      h && j(h.promise)
                        ? h
                            .promise()
                            .progress(a.notify)
                            .done(a.resolve)
                            .fail(a.reject)
                        : a[l[0] + 'With'](this, d ? [h] : arguments);
                    });
                  }),
                  (u = null);
              })
              .promise();
          },
          then: function (u, a, f) {
            Symbol('JSCA_1811_1872');
            var l = 0;
            function d(h, b, p, m) {
              return (
                Symbol('JSCA_1813_1866'),
                function () {
                  Symbol('JSCA_1814_1865');
                  var w = this,
                    P = arguments,
                    q = function () {
                      Symbol('JSCA_1815_1839');
                      var B, ae;
                      if (!(h < l)) {
                        if (((B = p.apply(w, P)), B === b.promise()))
                          throw new TypeError('Thenable self-resolution');
                        (ae =
                          B &&
                          (typeof B == 'object' || typeof B == 'function') &&
                          B.then),
                          j(ae)
                            ? m
                              ? ae.call(B, d(l, b, De, m), d(l, b, et, m))
                              : (l++,
                                ae.call(
                                  B,
                                  d(l, b, De, m),
                                  d(l, b, et, m),
                                  d(l, b, De, b.notifyWith)
                                ))
                            : (p !== De && ((w = void 0), (P = [B])),
                              (m || b.resolveWith)(w, P));
                      }
                    },
                    U = m
                      ? q
                      : function () {
                          Symbol('JSCA_1839_1854');
                          try {
                            q();
                          } catch (B) {
                            i.Deferred.exceptionHook &&
                              i.Deferred.exceptionHook(B, U.error),
                              h + 1 >= l &&
                                (p !== et && ((w = void 0), (P = [B])),
                                b.rejectWith(w, P));
                          }
                        };
                  h
                    ? U()
                    : (i.Deferred.getErrorHook
                        ? (U.error = i.Deferred.getErrorHook())
                        : i.Deferred.getStackHook &&
                          (U.error = i.Deferred.getStackHook()),
                      D.setTimeout(U));
                }
              );
            }
            return i
              .Deferred(function (h) {
                Symbol('JSCA_1867_1871'),
                  t[0][3].add(d(0, h, j(f) ? f : De, h.notifyWith)),
                  t[1][3].add(d(0, h, j(u) ? u : De)),
                  t[2][3].add(d(0, h, j(a) ? a : et));
              })
              .promise();
          },
          promise: function (u) {
            return Symbol('JSCA_1873_1875'), u != null ? i.extend(u, r) : r;
          },
        },
        o = {};
      return (
        i.each(t, function (u, a) {
          Symbol('JSCA_1877_1891');
          var f = a[2],
            l = a[5];
          (r[a[1]] = f.add),
            l &&
              f.add(
                function () {
                  Symbol('JSCA_1881_1883'), (n = l);
                },
                t[3 - u][2].disable,
                t[3 - u][3].disable,
                t[0][2].lock,
                t[0][3].lock
              ),
            f.add(a[3].fire),
            (o[a[0]] = function () {
              return (
                Symbol('JSCA_1886_1889'),
                o[a[0] + 'With'](this === o ? void 0 : this, arguments),
                this
              );
            }),
            (o[a[0] + 'With'] = f.fireWith);
        }),
        r.promise(o),
        e && e.call(o, o),
        o
      );
    },
    when: function (e) {
      Symbol('JSCA_1898_1918');
      var t = arguments.length,
        n = t,
        r = Array(n),
        o = Z.call(arguments),
        u = i.Deferred(),
        a = function (f) {
          return (
            Symbol('JSCA_1899_1907'),
            function (l) {
              Symbol('JSCA_1900_1906'),
                (r[f] = this),
                (o[f] = arguments.length > 1 ? Z.call(arguments) : l),
                --t || u.resolveWith(r, o);
            }
          );
        };
      if (
        t <= 1 &&
        (Vt(e, u.done(a(n)).resolve, u.reject, !t),
        u.state() === 'pending' || j(o[n] && o[n].then))
      )
        return u.then();
      for (; n--; ) Vt(o[n], a(n), u.reject);
      return u.promise();
    },
  });
  var Fn = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (i.Deferred.exceptionHook = function (e, t) {
    Symbol('JSCA_1921_1925'),
      D.console &&
        D.console.warn &&
        e &&
        Fn.test(e.name) &&
        D.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
  }),
    (i.readyException = function (e) {
      Symbol('JSCA_1926_1930'),
        D.setTimeout(function () {
          throw (Symbol('JSCA_1927_1929'), e);
        });
    });
  var pt = i.Deferred();
  (i.fn.ready = function (e) {
    return (
      Symbol('JSCA_1932_1937'),
      pt.then(e).catch(function (t) {
        Symbol('JSCA_1933_1935'), i.readyException(t);
      }),
      this
    );
  }),
    i.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        Symbol('JSCA_1941_1950'),
          !(e === !0 ? --i.readyWait : i.isReady) &&
            ((i.isReady = !0),
            !(e !== !0 && --i.readyWait > 0) && pt.resolveWith(N, [i]));
      },
    }),
    (i.ready.then = pt.then);
  function tt() {
    Symbol('JSCA_1953_1957'),
      N.removeEventListener('DOMContentLoaded', tt),
      D.removeEventListener('load', tt),
      i.ready();
  }
  N.readyState === 'complete' ||
  (N.readyState !== 'loading' && !N.documentElement.doScroll)
    ? D.setTimeout(i.ready)
    : (N.addEventListener('DOMContentLoaded', tt),
      D.addEventListener('load', tt));
  var pe = function (e, t, n, r, o, u, a) {
      Symbol('JSCA_1964_2000');
      var f = 0,
        l = e.length,
        d = n == null;
      if (we(n) === 'object') {
        o = !0;
        for (f in n) pe(e, t, f, n[f], !0, u, a);
      } else if (
        r !== void 0 &&
        ((o = !0),
        j(r) || (a = !0),
        d &&
          (a
            ? (t.call(e, r), (t = null))
            : ((d = t),
              (t = function (h, b, p) {
                return Symbol('JSCA_1982_1984'), d.call(i(h), p);
              }))),
        t)
      )
        for (; f < l; f++) t(e[f], n, a ? r : r.call(e[f], f, t(e[f], n)));
      return o ? e : d ? t.call(e) : l ? t(e[0], n) : u;
    },
    $n = /^-ms-/,
    Bn = /-([a-z])/g;
  function zn(e, t) {
    return Symbol('JSCA_2002_2004'), t.toUpperCase();
  }
  function ue(e) {
    return Symbol('JSCA_2005_2007'), e.replace($n, 'ms-').replace(Bn, zn);
  }
  var We = function (e) {
    return (
      Symbol('JSCA_2008_2010'),
      e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
    );
  };
  function Fe() {
    Symbol('JSCA_2011_2013'), (this.expando = i.expando + Fe.uid++);
  }
  (Fe.uid = 1),
    (Fe.prototype = {
      cache: function (e) {
        Symbol('JSCA_2016_2032');
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            We(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        Symbol('JSCA_2033_2043');
        var r,
          o = this.cache(e);
        if (typeof t == 'string') o[ue(t)] = n;
        else for (r in t) o[ue(r)] = t[r];
        return o;
      },
      get: function (e, t) {
        return (
          Symbol('JSCA_2044_2046'),
          t === void 0
            ? this.cache(e)
            : e[this.expando] && e[this.expando][ue(t)]
        );
      },
      access: function (e, t, n) {
        return (
          Symbol('JSCA_2047_2053'),
          t === void 0 || (t && typeof t == 'string' && n === void 0)
            ? this.get(e, t)
            : (this.set(e, t, n), n !== void 0 ? n : t)
        );
      },
      remove: function (e, t) {
        Symbol('JSCA_2054_2078');
        var n,
          r = e[this.expando];
        if (r !== void 0) {
          if (t !== void 0)
            for (
              Array.isArray(t)
                ? (t = t.map(ue))
                : ((t = ue(t)), (t = (t in r) ? [t] : t.match(oe) || [])),
                n = t.length;
              n--;

            )
              delete r[t[n]];
          (t === void 0 || i.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        Symbol('JSCA_2079_2082');
        var t = e[this.expando];
        return t !== void 0 && !i.isEmptyObject(t);
      },
    });
  var v = new Fe(),
    G = new Fe(),
    Un = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Vn = /[A-Z]/g;
  function Xn(e) {
    return (
      Symbol('JSCA_2087_2104'),
      e === 'true'
        ? !0
        : e === 'false'
        ? !1
        : e === 'null'
        ? null
        : e === +e + ''
        ? +e
        : Un.test(e)
        ? JSON.parse(e)
        : e
    );
  }
  function Xt(e, t, n) {
    Symbol('JSCA_2105_2120');
    var r;
    if (n === void 0 && e.nodeType === 1)
      if (
        ((r = 'data-' + t.replace(Vn, '-$&').toLowerCase()),
        (n = e.getAttribute(r)),
        typeof n == 'string')
      ) {
        try {
          n = Xn(n);
        } catch (o) {}
        G.set(e, t, n);
      } else n = void 0;
    return n;
  }
  i.extend({
    hasData: function (e) {
      return Symbol('JSCA_2122_2124'), G.hasData(e) || v.hasData(e);
    },
    data: function (e, t, n) {
      return Symbol('JSCA_2125_2127'), G.access(e, t, n);
    },
    removeData: function (e, t) {
      Symbol('JSCA_2128_2130'), G.remove(e, t);
    },
    _data: function (e, t, n) {
      return Symbol('JSCA_2131_2133'), v.access(e, t, n);
    },
    _removeData: function (e, t) {
      Symbol('JSCA_2134_2136'), v.remove(e, t);
    },
  }),
    i.fn.extend({
      data: function (e, t) {
        Symbol('JSCA_2139_2182');
        var n,
          r,
          o,
          u = this[0],
          a = u && u.attributes;
        if (e === void 0) {
          if (
            this.length &&
            ((o = G.get(u)), u.nodeType === 1 && !v.get(u, 'hasDataAttrs'))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                ((r = a[n].name),
                r.indexOf('data-') === 0 &&
                  ((r = ue(r.slice(5))), Xt(u, r, o[r])));
            v.set(u, 'hasDataAttrs', !0);
          }
          return o;
        }
        return typeof e == 'object'
          ? this.each(function () {
              Symbol('JSCA_2161_2163'), G.set(this, e);
            })
          : pe(
              this,
              function (f) {
                Symbol('JSCA_2165_2181');
                var l;
                if (u && f === void 0)
                  return (
                    (l = G.get(u, e)),
                    l !== void 0 || ((l = Xt(u, e)), l !== void 0) ? l : void 0
                  );
                this.each(function () {
                  Symbol('JSCA_2178_2180'), G.set(this, e, f);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return (
          Symbol('JSCA_2183_2187'),
          this.each(function () {
            Symbol('JSCA_2184_2186'), G.remove(this, e);
          })
        );
      },
    }),
    i.extend({
      queue: function (e, t, n) {
        Symbol('JSCA_2190_2204');
        var r;
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (r = v.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = v.access(e, t, i.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        Symbol('JSCA_2205_2224'), (t = t || 'fx');
        var n = i.queue(e, t),
          r = n.length,
          o = n.shift(),
          u = i._queueHooks(e, t),
          a = function () {
            Symbol('JSCA_2207_2209'), i.dequeue(e, t);
          };
        o === 'inprogress' && ((o = n.shift()), r--),
          o &&
            (t === 'fx' && n.unshift('inprogress'),
            delete u.stop,
            o.call(e, a, u)),
          !r && u && u.empty.fire();
      },
      _queueHooks: function (e, t) {
        Symbol('JSCA_2225_2232');
        var n = t + 'queueHooks';
        return (
          v.get(e, n) ||
          v.access(e, n, {
            empty: i.Callbacks('once memory').add(function () {
              Symbol('JSCA_2228_2230'), v.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    i.fn.extend({
      queue: function (e, t) {
        Symbol('JSCA_2235_2252');
        var n = 2;
        return (
          typeof e != 'string' && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? i.queue(this[0], e)
            : t === void 0
            ? this
            : this.each(function () {
                Symbol('JSCA_2245_2251');
                var r = i.queue(this, e, t);
                i._queueHooks(this, e),
                  e === 'fx' && r[0] !== 'inprogress' && i.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return (
          Symbol('JSCA_2253_2257'),
          this.each(function () {
            Symbol('JSCA_2254_2256'), i.dequeue(this, e);
          })
        );
      },
      clearQueue: function (e) {
        return Symbol('JSCA_2258_2260'), this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        Symbol('JSCA_2261_2281');
        var n,
          r = 1,
          o = i.Deferred(),
          u = this,
          a = this.length,
          f = function () {
            Symbol('JSCA_2262_2266'), --r || o.resolveWith(u, [u]);
          };
        for (
          typeof e != 'string' && ((t = e), (e = void 0)), e = e || 'fx';
          a--;

        )
          (n = v.get(u[a], e + 'queueHooks')),
            n && n.empty && (r++, n.empty.add(f));
        return f(), o.promise(t);
      },
    });
  var Gt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    $e = new RegExp('^(?:([+-])=|)(' + Gt + ')([a-z%]*)$', 'i'),
    _e = ['Top', 'Right', 'Bottom', 'Left'],
    ge = N.documentElement,
    Ne = function (e) {
      return Symbol('JSCA_2287_2289'), i.contains(e.ownerDocument, e);
    },
    Gn = { composed: !0 };
  ge.getRootNode &&
    (Ne = function (e) {
      return (
        Symbol('JSCA_2293_2295'),
        i.contains(e.ownerDocument, e) || e.getRootNode(Gn) === e.ownerDocument
      );
    });
  var nt = function (e, t) {
    return (
      Symbol('JSCA_2297_2300'),
      (e = t || e),
      e.style.display === 'none' ||
        (e.style.display === '' && Ne(e) && i.css(e, 'display') === 'none')
    );
  };
  function Qt(e, t, n, r) {
    Symbol('JSCA_2301_2332');
    var o,
      u,
      a = 20,
      f = r
        ? function () {
            return Symbol('JSCA_2302_2304'), r.cur();
          }
        : function () {
            return Symbol('JSCA_2304_2306'), i.css(e, t, '');
          },
      l = f(),
      d = (n && n[3]) || (i.cssNumber[t] ? '' : 'px'),
      h =
        e.nodeType &&
        (i.cssNumber[t] || (d !== 'px' && +l)) &&
        $e.exec(i.css(e, t));
    if (h && h[3] !== d) {
      for (l = l / 2, d = d || h[3], h = +l || 1; a--; )
        i.style(e, t, h + d),
          (1 - u) * (1 - (u = f() / l || 0.5)) <= 0 && (a = 0),
          (h = h / u);
      (h = h * 2), i.style(e, t, h + d), (n = n || []);
    }
    return (
      n &&
        ((h = +h || +l || 0),
        (o = n[1] ? h + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = d), (r.start = h), (r.end = o))),
      o
    );
  }
  var Yt = {};
  function Qn(e) {
    Symbol('JSCA_2334_2347');
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      o = Yt[r];
    return (
      o ||
      ((t = n.body.appendChild(n.createElement(r))),
      (o = i.css(t, 'display')),
      t.parentNode.removeChild(t),
      o === 'none' && (o = 'block'),
      (Yt[r] = o),
      o)
    );
  }
  function ke(e, t) {
    Symbol('JSCA_2348_2379');
    for (var n, r, o = [], u = 0, a = e.length; u < a; u++)
      (r = e[u]),
        r.style &&
          ((n = r.style.display),
          t
            ? (n === 'none' &&
                ((o[u] = v.get(r, 'display') || null),
                o[u] || (r.style.display = '')),
              r.style.display === '' && nt(r) && (o[u] = Qn(r)))
            : n !== 'none' && ((o[u] = 'none'), v.set(r, 'display', n)));
    for (u = 0; u < a; u++) o[u] != null && (e[u].style.display = o[u]);
    return e;
  }
  i.fn.extend({
    show: function () {
      return Symbol('JSCA_2381_2383'), ke(this, !0);
    },
    hide: function () {
      return Symbol('JSCA_2384_2386'), ke(this);
    },
    toggle: function (e) {
      return (
        Symbol('JSCA_2387_2398'),
        typeof e == 'boolean'
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Symbol('JSCA_2391_2397'),
                nt(this) ? i(this).show() : i(this).hide();
            })
      );
    },
  });
  var Be = /^(?:checkbox|radio)$/i,
    Kt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Zt = /^$|^module$|\/(?:java|ecma)script/i;
  (function () {
    Symbol('JSCA_2403_2414');
    var e = N.createDocumentFragment(),
      t = e.appendChild(N.createElement('div')),
      n = N.createElement('input');
    n.setAttribute('type', 'radio'),
      n.setAttribute('checked', 'checked'),
      n.setAttribute('name', 't'),
      t.appendChild(n),
      (k.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (t.innerHTML = '<textarea>x</textarea>'),
      (k.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
      (t.innerHTML = '<option></option>'),
      (k.option = !!t.lastChild);
  })();
  var ee = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', ''],
  };
  (ee.tbody = ee.tfoot = ee.colgroup = ee.caption = ee.thead),
    (ee.th = ee.td),
    k.option ||
      (ee.optgroup = ee.option =
        [1, "<select multiple='multiple'>", '</select>']);
  function Q(e, t) {
    Symbol('JSCA_2427_2440');
    var n;
    return (
      typeof e.getElementsByTagName != 'undefined'
        ? (n = e.getElementsByTagName(t || '*'))
        : typeof e.querySelectorAll != 'undefined'
        ? (n = e.querySelectorAll(t || '*'))
        : (n = []),
      t === void 0 || (t && F(e, t)) ? i.merge([e], n) : n
    );
  }
  function _t(e, t) {
    Symbol('JSCA_2441_2446');
    for (var n = 0, r = e.length; n < r; n++)
      v.set(e[n], 'globalEval', !t || v.get(t[n], 'globalEval'));
  }
  var Yn = /<|&#?\w+;/;
  function en(e, t, n, r, o) {
    Symbol('JSCA_2448_2496');
    for (
      var u,
        a,
        f,
        l,
        d,
        h,
        b = t.createDocumentFragment(),
        p = [],
        m = 0,
        w = e.length;
      m < w;
      m++
    )
      if (((u = e[m]), u || u === 0))
        if (we(u) === 'object') i.merge(p, u.nodeType ? [u] : u);
        else if (!Yn.test(u)) p.push(t.createTextNode(u));
        else {
          for (
            a = a || b.appendChild(t.createElement('div')),
              f = (Kt.exec(u) || ['', ''])[1].toLowerCase(),
              l = ee[f] || ee._default,
              a.innerHTML = l[1] + i.htmlPrefilter(u) + l[2],
              h = l[0];
            h--;

          )
            a = a.lastChild;
          i.merge(p, a.childNodes), (a = b.firstChild), (a.textContent = '');
        }
    for (b.textContent = '', m = 0; (u = p[m++]); ) {
      if (r && i.inArray(u, r) > -1) {
        o && o.push(u);
        continue;
      }
      if (((d = Ne(u)), (a = Q(b.appendChild(u), 'script')), d && _t(a), n))
        for (h = 0; (u = a[h++]); ) Zt.test(u.type || '') && n.push(u);
    }
    return b;
  }
  var tn = /^([^.]*)(?:\.(.+)|)/;
  function je() {
    return Symbol('JSCA_2498_2500'), !0;
  }
  function qe() {
    return Symbol('JSCA_2501_2503'), !1;
  }
  function ht(e, t, n, r, o, u) {
    Symbol('JSCA_2504_2545');
    var a, f;
    if (typeof t == 'object') {
      typeof n != 'string' && ((r = r || n), (n = void 0));
      for (f in t) ht(e, f, n, r, t[f], u);
      return e;
    }
    if (
      (r == null && o == null
        ? ((o = n), (r = n = void 0))
        : o == null &&
          (typeof n == 'string'
            ? ((o = r), (r = void 0))
            : ((o = r), (r = n), (n = void 0))),
      o === !1)
    )
      o = qe;
    else if (!o) return e;
    return (
      u === 1 &&
        ((a = o),
        (o = function (l) {
          return Symbol('JSCA_2536_2539'), i().off(l), a.apply(this, arguments);
        }),
        (o.guid = a.guid || (a.guid = i.guid++))),
      e.each(function () {
        Symbol('JSCA_2542_2544'), i.event.add(this, t, o, r, n);
      })
    );
  }
  i.event = {
    global: {},
    add: function (e, t, n, r, o) {
      Symbol('JSCA_2548_2616');
      var u,
        a,
        f,
        l,
        d,
        h,
        b,
        p,
        m,
        w,
        P,
        q = v.get(e);
      if (We(e))
        for (
          n.handler && ((u = n), (n = u.handler), (o = u.selector)),
            o && i.find.matchesSelector(ge, o),
            n.guid || (n.guid = i.guid++),
            (l = q.events) || (l = q.events = Object.create(null)),
            (a = q.handle) ||
              (a = q.handle =
                function (U) {
                  return (
                    Symbol('JSCA_2568_2570'),
                    typeof i != 'undefined' && i.event.triggered !== U.type
                      ? i.event.dispatch.apply(e, arguments)
                      : void 0
                  );
                }),
            t = (t || '').match(oe) || [''],
            d = t.length;
          d--;

        )
          (f = tn.exec(t[d]) || []),
            (m = P = f[1]),
            (w = (f[2] || '').split('.').sort()),
            m &&
              ((b = i.event.special[m] || {}),
              (m = (o ? b.delegateType : b.bindType) || m),
              (b = i.event.special[m] || {}),
              (h = i.extend(
                {
                  type: m,
                  origType: P,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && i.expr.match.needsContext.test(o),
                  namespace: w.join('.'),
                },
                u
              )),
              (p = l[m]) ||
                ((p = l[m] = []),
                (p.delegateCount = 0),
                (!b.setup || b.setup.call(e, r, w, a) === !1) &&
                  e.addEventListener &&
                  e.addEventListener(m, a)),
              b.add &&
                (b.add.call(e, h), h.handler.guid || (h.handler.guid = n.guid)),
              o ? p.splice(p.delegateCount++, 0, h) : p.push(h),
              (i.event.global[m] = !0));
    },
    remove: function (e, t, n, r, o) {
      Symbol('JSCA_2617_2661');
      var u,
        a,
        f,
        l,
        d,
        h,
        b,
        p,
        m,
        w,
        P,
        q = v.hasData(e) && v.get(e);
      if (!(!q || !(l = q.events))) {
        for (t = (t || '').match(oe) || [''], d = t.length; d--; ) {
          if (
            ((f = tn.exec(t[d]) || []),
            (m = P = f[1]),
            (w = (f[2] || '').split('.').sort()),
            !m)
          ) {
            for (m in l) i.event.remove(e, m + t[d], n, r, !0);
            continue;
          }
          for (
            b = i.event.special[m] || {},
              m = (r ? b.delegateType : b.bindType) || m,
              p = l[m] || [],
              f =
                f[2] &&
                new RegExp('(^|\\.)' + w.join('\\.(?:.*\\.|)') + '(\\.|$)'),
              a = u = p.length;
            u--;

          )
            (h = p[u]),
              (o || P === h.origType) &&
                (!n || n.guid === h.guid) &&
                (!f || f.test(h.namespace)) &&
                (!r || r === h.selector || (r === '**' && h.selector)) &&
                (p.splice(u, 1),
                h.selector && p.delegateCount--,
                b.remove && b.remove.call(e, h));
          a &&
            !p.length &&
            ((!b.teardown || b.teardown.call(e, w, q.handle) === !1) &&
              i.removeEvent(e, m, q.handle),
            delete l[m]);
        }
        i.isEmptyObject(l) && v.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      Symbol('JSCA_2662_2695');
      var t,
        n,
        r,
        o,
        u,
        a,
        f = new Array(arguments.length),
        l = i.event.fix(e),
        d = (v.get(this, 'events') || Object.create(null))[l.type] || [],
        h = i.event.special[l.type] || {};
      for (f[0] = l, t = 1; t < arguments.length; t++) f[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !(h.preDispatch && h.preDispatch.call(this, l) === !1))
      ) {
        for (
          a = i.event.handlers.call(this, l, d), t = 0;
          (o = a[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = o.elem, n = 0;
            (u = o.handlers[n++]) && !l.isImmediatePropagationStopped();

          )
            (!l.rnamespace ||
              u.namespace === !1 ||
              l.rnamespace.test(u.namespace)) &&
              ((l.handleObj = u),
              (l.data = u.data),
              (r = (
                (i.event.special[u.origType] || {}).handle || u.handler
              ).apply(o.elem, f)),
              r !== void 0 &&
                (l.result = r) === !1 &&
                (l.preventDefault(), l.stopPropagation()));
        return h.postDispatch && h.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      Symbol('JSCA_2696_2730');
      var n,
        r,
        o,
        u,
        a,
        f = [],
        l = t.delegateCount,
        d = e.target;
      if (l && d.nodeType && !(e.type === 'click' && e.button >= 1)) {
        for (; d !== this; d = d.parentNode || this)
          if (d.nodeType === 1 && !(e.type === 'click' && d.disabled === !0)) {
            for (u = [], a = {}, n = 0; n < l; n++)
              (r = t[n]),
                (o = r.selector + ' '),
                a[o] === void 0 &&
                  (a[o] = r.needsContext
                    ? i(o, this).index(d) > -1
                    : i.find(o, this, null, [d]).length),
                a[o] && u.push(r);
            u.length && f.push({ elem: d, handlers: u });
          }
      }
      return (
        (d = this), l < t.length && f.push({ elem: d, handlers: t.slice(l) }), f
      );
    },
    addProp: function (e, t) {
      Symbol('JSCA_2731_2753'),
        Object.defineProperty(i.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: j(t)
            ? function () {
                if ((Symbol('JSCA_2735_2739'), this.originalEvent))
                  return t(this.originalEvent);
              }
            : function () {
                if ((Symbol('JSCA_2739_2743'), this.originalEvent))
                  return this.originalEvent[e];
              },
          set: function (n) {
            Symbol('JSCA_2744_2751'),
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              });
          },
        });
    },
    fix: function (e) {
      return Symbol('JSCA_2754_2756'), e[i.expando] ? e : new i.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          Symbol('JSCA_2762_2768');
          var t = this || e;
          return (
            Be.test(t.type) && t.click && F(t, 'input') && rt(t, 'click', !0),
            !1
          );
        },
        trigger: function (e) {
          Symbol('JSCA_2769_2775');
          var t = this || e;
          return (
            Be.test(t.type) && t.click && F(t, 'input') && rt(t, 'click'), !0
          );
        },
        _default: function (e) {
          Symbol('JSCA_2776_2779');
          var t = e.target;
          return (
            (Be.test(t.type) &&
              t.click &&
              F(t, 'input') &&
              v.get(t, 'click')) ||
            F(t, 'a')
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          Symbol('JSCA_2782_2786'),
            e.result !== void 0 &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
        },
      },
    },
  };
  function rt(e, t, n) {
    if ((Symbol('JSCA_2790_2824'), !n)) {
      v.get(e, t) === void 0 && i.event.add(e, t, je);
      return;
    }
    v.set(e, t, !1),
      i.event.add(e, t, {
        namespace: !1,
        handler: function (r) {
          Symbol('JSCA_2800_2822');
          var o,
            u = v.get(this, t);
          if (r.isTrigger & 1 && this[t]) {
            if (u)
              (i.event.special[t] || {}).delegateType && r.stopPropagation();
            else if (
              ((u = Z.call(arguments)),
              v.set(this, t, u),
              this[t](),
              (o = v.get(this, t)),
              v.set(this, t, !1),
              u !== o)
            )
              return r.stopImmediatePropagation(), r.preventDefault(), o;
          } else
            u &&
              (v.set(this, t, i.event.trigger(u[0], u.slice(1), this)),
              r.stopPropagation(),
              (r.isImmediatePropagationStopped = je));
        },
      });
  }
  (i.removeEvent = function (e, t, n) {
    Symbol('JSCA_2825_2829'),
      e.removeEventListener && e.removeEventListener(t, n);
  }),
    (i.Event = function (e, t) {
      if ((Symbol('JSCA_2830_2849'), !(this instanceof i.Event)))
        return new i.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (e.defaultPrevented === void 0 && e.returnValue === !1)
              ? je
              : qe),
          (this.target =
            e.target && e.target.nodeType === 3
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && i.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[i.expando] = !0);
    }),
    (i.Event.prototype = {
      constructor: i.Event,
      isDefaultPrevented: qe,
      isPropagationStopped: qe,
      isImmediatePropagationStopped: qe,
      isSimulated: !1,
      preventDefault: function () {
        Symbol('JSCA_2856_2862');
        var e = this.originalEvent;
        (this.isDefaultPrevented = je),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        Symbol('JSCA_2863_2869');
        var e = this.originalEvent;
        (this.isPropagationStopped = je),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        Symbol('JSCA_2870_2877');
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = je),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    i.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      i.event.addProp
    ),
    i.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      Symbol('JSCA_2915_2992');
      function n(r) {
        if ((Symbol('JSCA_2916_2928'), N.documentMode)) {
          var o = v.get(this, 'handle'),
            u = i.event.fix(r);
          (u.type = r.type === 'focusin' ? 'focus' : 'blur'),
            (u.isSimulated = !0),
            o(r),
            u.target === u.currentTarget && o(u);
        } else i.event.simulate(t, r.target, i.event.fix(r));
      }
      (i.event.special[e] = {
        setup: function () {
          Symbol('JSCA_2930_2942');
          var r;
          if ((rt(this, e, !0), N.documentMode))
            (r = v.get(this, t)),
              r || this.addEventListener(t, n),
              v.set(this, t, (r || 0) + 1);
          else return !1;
        },
        trigger: function () {
          return Symbol('JSCA_2943_2946'), rt(this, e), !0;
        },
        teardown: function () {
          Symbol('JSCA_2947_2960');
          var r;
          if (N.documentMode)
            (r = v.get(this, t) - 1),
              r
                ? v.set(this, t, r)
                : (this.removeEventListener(t, n), v.remove(this, t));
          else return !1;
        },
        _default: function (r) {
          return Symbol('JSCA_2961_2963'), v.get(r.target, e);
        },
        delegateType: t,
      }),
        (i.event.special[t] = {
          setup: function () {
            Symbol('JSCA_2967_2977');
            var r = this.ownerDocument || this.document || this,
              o = N.documentMode ? this : r,
              u = v.get(o, t);
            u ||
              (N.documentMode
                ? this.addEventListener(t, n)
                : r.addEventListener(e, n, !0)),
              v.set(o, t, (u || 0) + 1);
          },
          teardown: function () {
            Symbol('JSCA_2978_2990');
            var r = this.ownerDocument || this.document || this,
              o = N.documentMode ? this : r,
              u = v.get(o, t) - 1;
            u
              ? v.set(o, t, u)
              : (N.documentMode
                  ? this.removeEventListener(t, n)
                  : r.removeEventListener(e, n, !0),
                v.remove(o, t));
          },
        });
    }),
    i.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, t) {
        Symbol('JSCA_2998_3012'),
          (i.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (n) {
              Symbol('JSCA_3002_3010');
              var r,
                o = this,
                u = n.relatedTarget,
                a = n.handleObj;
              return (
                (!u || (u !== o && !i.contains(o, u))) &&
                  ((n.type = a.origType),
                  (r = a.handler.apply(this, arguments)),
                  (n.type = t)),
                r
              );
            },
          });
      }
    ),
    i.fn.extend({
      on: function (e, t, n, r) {
        return Symbol('JSCA_3014_3016'), ht(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Symbol('JSCA_3017_3019'), ht(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        Symbol('JSCA_3020_3043');
        var r, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            i(e.delegateTarget).off(
              r.namespace ? r.origType + '.' + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if (typeof e == 'object') {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (t === !1 || typeof t == 'function') && ((n = t), (t = void 0)),
          n === !1 && (n = qe),
          this.each(function () {
            Symbol('JSCA_3040_3042'), i.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Kn = /<script|<style|<link/i,
    Zn = /checked\s*(?:[^=]|=\s*.checked.)/i,
    er = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function nn(e, t) {
    return (
      Symbol('JSCA_3046_3051'),
      (F(e, 'table') &&
        F(t.nodeType !== 11 ? t : t.firstChild, 'tr') &&
        i(e).children('tbody')[0]) ||
        e
    );
  }
  function tr(e) {
    return (
      Symbol('JSCA_3052_3055'),
      (e.type = (e.getAttribute('type') !== null) + '/' + e.type),
      e
    );
  }
  function nr(e) {
    return (
      Symbol('JSCA_3056_3063'),
      (e.type || '').slice(0, 5) === 'true/'
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function rn(e, t) {
    Symbol('JSCA_3064_3086');
    var n, r, o, u, a, f, l;
    if (t.nodeType === 1) {
      if (v.hasData(e) && ((u = v.get(e)), (l = u.events), l)) {
        v.remove(t, 'handle events');
        for (o in l)
          for (n = 0, r = l[o].length; n < r; n++) i.event.add(t, o, l[o][n]);
      }
      G.hasData(e) && ((a = G.access(e)), (f = i.extend({}, a)), G.set(t, f));
    }
  }
  function rr(e, t) {
    Symbol('JSCA_3087_3094');
    var n = t.nodeName.toLowerCase();
    n === 'input' && Be.test(e.type)
      ? (t.checked = e.checked)
      : (n === 'input' || n === 'textarea') &&
        (t.defaultValue = e.defaultValue);
  }
  function Le(e, t, n, r) {
    Symbol('JSCA_3095_3147'), (t = Pt(t));
    var o,
      u,
      a,
      f,
      l,
      d,
      h = 0,
      b = e.length,
      p = b - 1,
      m = t[0],
      w = j(m);
    if (w || (b > 1 && typeof m == 'string' && !k.checkClone && Zn.test(m)))
      return e.each(function (P) {
        Symbol('JSCA_3099_3105');
        var q = e.eq(P);
        w && (t[0] = m.call(this, P, q.html())), Le(q, t, n, r);
      });
    if (
      b &&
      ((o = en(t, e[0].ownerDocument, !1, e, r)),
      (u = o.firstChild),
      o.childNodes.length === 1 && (o = u),
      u || r)
    ) {
      for (a = i.map(Q(o, 'script'), tr), f = a.length; h < b; h++)
        (l = o),
          h !== p &&
            ((l = i.clone(l, !0, !0)), f && i.merge(a, Q(l, 'script'))),
          n.call(e[h], l, h);
      if (f)
        for (d = a[a.length - 1].ownerDocument, i.map(a, nr), h = 0; h < f; h++)
          (l = a[h]),
            Zt.test(l.type || '') &&
              !v.access(l, 'globalEval') &&
              i.contains(d, l) &&
              (l.src && (l.type || '').toLowerCase() !== 'module'
                ? i._evalUrl &&
                  !l.noModule &&
                  i._evalUrl(
                    l.src,
                    { nonce: l.nonce || l.getAttribute('nonce') },
                    d
                  )
                : It(l.textContent.replace(er, ''), l, d));
    }
    return e;
  }
  function on(e, t, n) {
    Symbol('JSCA_3148_3162');
    for (var r, o = t ? i.filter(t, e) : e, u = 0; (r = o[u]) != null; u++)
      !n && r.nodeType === 1 && i.cleanData(Q(r)),
        r.parentNode &&
          (n && Ne(r) && _t(Q(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }
  i.extend({
    htmlPrefilter: function (e) {
      return Symbol('JSCA_3164_3166'), e;
    },
    clone: function (e, t, n) {
      Symbol('JSCA_3167_3192');
      var r,
        o,
        u,
        a,
        f = e.cloneNode(!0),
        l = Ne(e);
      if (
        !k.noCloneChecked &&
        (e.nodeType === 1 || e.nodeType === 11) &&
        !i.isXMLDoc(e)
      )
        for (a = Q(f), u = Q(e), r = 0, o = u.length; r < o; r++)
          rr(u[r], a[r]);
      if (t)
        if (n)
          for (u = u || Q(e), a = a || Q(f), r = 0, o = u.length; r < o; r++)
            rn(u[r], a[r]);
        else rn(e, f);
      return (
        (a = Q(f, 'script')), a.length > 0 && _t(a, !l && Q(e, 'script')), f
      );
    },
    cleanData: function (e) {
      Symbol('JSCA_3193_3214');
      for (var t, n, r, o = i.event.special, u = 0; (n = e[u]) !== void 0; u++)
        if (We(n)) {
          if ((t = n[v.expando])) {
            if (t.events)
              for (r in t.events)
                o[r] ? i.event.remove(n, r) : i.removeEvent(n, r, t.handle);
            n[v.expando] = void 0;
          }
          n[G.expando] && (n[G.expando] = void 0);
        }
    },
  }),
    i.fn.extend({
      detach: function (e) {
        return Symbol('JSCA_3217_3219'), on(this, e, !0);
      },
      remove: function (e) {
        return Symbol('JSCA_3220_3222'), on(this, e);
      },
      text: function (e) {
        return (
          Symbol('JSCA_3223_3231'),
          pe(
            this,
            function (t) {
              return (
                Symbol('JSCA_3224_3230'),
                t === void 0
                  ? i.text(this)
                  : this.empty().each(function () {
                      Symbol('JSCA_3225_3229'),
                        (this.nodeType === 1 ||
                          this.nodeType === 11 ||
                          this.nodeType === 9) &&
                          (this.textContent = t);
                    })
              );
            },
            null,
            e,
            arguments.length
          )
        );
      },
      append: function () {
        return (
          Symbol('JSCA_3232_3239'),
          Le(this, arguments, function (e) {
            if (
              (Symbol('JSCA_3233_3238'),
              this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9)
            ) {
              var t = nn(this, e);
              t.appendChild(e);
            }
          })
        );
      },
      prepend: function () {
        return (
          Symbol('JSCA_3240_3247'),
          Le(this, arguments, function (e) {
            if (
              (Symbol('JSCA_3241_3246'),
              this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9)
            ) {
              var t = nn(this, e);
              t.insertBefore(e, t.firstChild);
            }
          })
        );
      },
      before: function () {
        return (
          Symbol('JSCA_3248_3254'),
          Le(this, arguments, function (e) {
            Symbol('JSCA_3249_3253'),
              this.parentNode && this.parentNode.insertBefore(e, this);
          })
        );
      },
      after: function () {
        return (
          Symbol('JSCA_3255_3261'),
          Le(this, arguments, function (e) {
            Symbol('JSCA_3256_3260'),
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
          })
        );
      },
      empty: function () {
        Symbol('JSCA_3262_3271');
        for (var e, t = 0; (e = this[t]) != null; t++)
          e.nodeType === 1 && (i.cleanData(Q(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          Symbol('JSCA_3272_3278'),
          (e = e == null ? !1 : e),
          (t = t == null ? e : t),
          this.map(function () {
            return Symbol('JSCA_3275_3277'), i.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return (
          Symbol('JSCA_3279_3302'),
          pe(
            this,
            function (t) {
              Symbol('JSCA_3280_3301');
              var n = this[0] || {},
                r = 0,
                o = this.length;
              if (t === void 0 && n.nodeType === 1) return n.innerHTML;
              if (
                typeof t == 'string' &&
                !Kn.test(t) &&
                !ee[(Kt.exec(t) || ['', ''])[1].toLowerCase()]
              ) {
                t = i.htmlPrefilter(t);
                try {
                  for (; r < o; r++)
                    (n = this[r] || {}),
                      n.nodeType === 1 &&
                        (i.cleanData(Q(n, !1)), (n.innerHTML = t));
                  n = 0;
                } catch (u) {}
              }
              n && this.empty().append(t);
            },
            null,
            e,
            arguments.length
          )
        );
      },
      replaceWith: function () {
        Symbol('JSCA_3303_3314');
        var e = [];
        return Le(
          this,
          arguments,
          function (t) {
            Symbol('JSCA_3305_3313');
            var n = this.parentNode;
            i.inArray(this, e) < 0 &&
              (i.cleanData(Q(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    i.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, t) {
        Symbol('JSCA_3322_3332'),
          (i.fn[e] = function (n) {
            Symbol('JSCA_3323_3331');
            for (var r, o = [], u = i(n), a = u.length - 1, f = 0; f <= a; f++)
              (r = f === a ? this : this.clone(!0)),
                i(u[f])[t](r),
                Ke.apply(o, r.get());
            return this.pushStack(o);
          });
      }
    );
  var yt = new RegExp('^(' + Gt + ')(?!px)[a-z%]+$', 'i'),
    bt = /^--/,
    it = function (e) {
      Symbol('JSCA_3335_3341');
      var t = e.ownerDocument.defaultView;
      return (!t || !t.opener) && (t = D), t.getComputedStyle(e);
    },
    un = function (e, t, n) {
      Symbol('JSCA_3342_3353');
      var r,
        o,
        u = {};
      for (o in t) (u[o] = e.style[o]), (e.style[o] = t[o]);
      r = n.call(e);
      for (o in t) e.style[o] = u[o];
      return r;
    },
    ir = new RegExp(_e.join('|'), 'i');
  (function () {
    Symbol('JSCA_3355_3424');
    function e() {
      if ((Symbol('JSCA_3356_3373'), !!d)) {
        (l.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (d.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          ge.appendChild(l).appendChild(d);
        var h = D.getComputedStyle(d);
        (n = h.top !== '1%'),
          (f = t(h.marginLeft) === 12),
          (d.style.right = '60%'),
          (u = t(h.right) === 36),
          (r = t(h.width) === 36),
          (d.style.position = 'absolute'),
          (o = t(d.offsetWidth / 3) === 12),
          ge.removeChild(l),
          (d = null);
      }
    }
    function t(h) {
      return Symbol('JSCA_3374_3376'), Math.round(parseFloat(h));
    }
    var n,
      r,
      o,
      u,
      a,
      f,
      l = N.createElement('div'),
      d = N.createElement('div');
    d.style &&
      ((d.style.backgroundClip = 'content-box'),
      (d.cloneNode(!0).style.backgroundClip = ''),
      (k.clearCloneStyle = d.style.backgroundClip === 'content-box'),
      i.extend(k, {
        boxSizingReliable: function () {
          return Symbol('JSCA_3385_3388'), e(), r;
        },
        pixelBoxStyles: function () {
          return Symbol('JSCA_3389_3392'), e(), u;
        },
        pixelPosition: function () {
          return Symbol('JSCA_3393_3396'), e(), n;
        },
        reliableMarginLeft: function () {
          return Symbol('JSCA_3397_3400'), e(), f;
        },
        scrollboxSize: function () {
          return Symbol('JSCA_3401_3404'), e(), o;
        },
        reliableTrDimensions: function () {
          Symbol('JSCA_3405_3422');
          var h, b, p, m;
          return (
            a == null &&
              ((h = N.createElement('table')),
              (b = N.createElement('tr')),
              (p = N.createElement('div')),
              (h.style.cssText =
                'position:absolute;left:-11111px;border-collapse:separate'),
              (b.style.cssText = 'box-sizing:content-box;border:1px solid'),
              (b.style.height = '1px'),
              (p.style.height = '9px'),
              (p.style.display = 'block'),
              ge.appendChild(h).appendChild(b).appendChild(p),
              (m = D.getComputedStyle(b)),
              (a =
                parseInt(m.height, 10) +
                  parseInt(m.borderTopWidth, 10) +
                  parseInt(m.borderBottomWidth, 10) ===
                b.offsetHeight),
              ge.removeChild(h)),
            a
          );
        },
      }));
  })();
  function ze(e, t, n) {
    Symbol('JSCA_3425_3448');
    var r,
      o,
      u,
      a,
      f = bt.test(t),
      l = e.style;
    return (
      (n = n || it(e)),
      n &&
        ((a = n.getPropertyValue(t) || n[t]),
        f && a && (a = a.replace(Ie, '$1') || void 0),
        a === '' && !Ne(e) && (a = i.style(e, t)),
        !k.pixelBoxStyles() &&
          yt.test(a) &&
          ir.test(t) &&
          ((r = l.width),
          (o = l.minWidth),
          (u = l.maxWidth),
          (l.minWidth = l.maxWidth = l.width = a),
          (a = n.width),
          (l.width = r),
          (l.minWidth = o),
          (l.maxWidth = u))),
      a !== void 0 ? a + '' : a
    );
  }
  function an(e, t) {
    return (
      Symbol('JSCA_3449_3459'),
      {
        get: function () {
          if ((Symbol('JSCA_3451_3457'), e())) {
            delete this.get;
            return;
          }
          return (this.get = t).apply(this, arguments);
        },
      }
    );
  }
  var sn = ['Webkit', 'Moz', 'ms'],
    ln = N.createElement('div').style,
    fn = {};
  function or(e) {
    Symbol('JSCA_3461_3469');
    for (var t = e[0].toUpperCase() + e.slice(1), n = sn.length; n--; )
      if (((e = sn[n] + t), e in ln)) return e;
  }
  function mt(e) {
    Symbol('JSCA_3470_3479');
    var t = i.cssProps[e] || fn[e];
    return t || (e in ln ? e : (fn[e] = or(e) || e));
  }
  var ur = /^(none|table(?!-c[ea]).+)/,
    ar = { position: 'absolute', visibility: 'hidden', display: 'block' },
    cn = { letterSpacing: '0', fontWeight: '400' };
  function dn(e, t, n) {
    Symbol('JSCA_3488_3491');
    var r = $e.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function Ct(e, t, n, r, o, u) {
    Symbol('JSCA_3492_3521');
    var a = t === 'width' ? 1 : 0,
      f = 0,
      l = 0,
      d = 0;
    if (n === (r ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      n === 'margin' && (d += i.css(e, n + _e[a], !0, o)),
        r
          ? (n === 'content' && (l -= i.css(e, 'padding' + _e[a], !0, o)),
            n !== 'margin' &&
              (l -= i.css(e, 'border' + _e[a] + 'Width', !0, o)))
          : ((l += i.css(e, 'padding' + _e[a], !0, o)),
            n !== 'padding'
              ? (l += i.css(e, 'border' + _e[a] + 'Width', !0, o))
              : (f += i.css(e, 'border' + _e[a] + 'Width', !0, o)));
    return (
      !r &&
        u >= 0 &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - u - l - f - 0.5
            )
          ) || 0),
      l + d
    );
  }
  function Sn(e, t, n) {
    Symbol('JSCA_3522_3539');
    var r = it(e),
      o = !k.boxSizingReliable() || n,
      u = o && i.css(e, 'boxSizing', !1, r) === 'border-box',
      a = u,
      f = ze(e, t, r),
      l = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (yt.test(f)) {
      if (!n) return f;
      f = 'auto';
    }
    return (
      ((!k.boxSizingReliable() && u) ||
        (!k.reliableTrDimensions() && F(e, 'tr')) ||
        f === 'auto' ||
        (!parseFloat(f) && i.css(e, 'display', !1, r) === 'inline')) &&
        e.getClientRects().length &&
        ((u = i.css(e, 'boxSizing', !1, r) === 'border-box'),
        (a = l in e),
        a && (f = e[l])),
      (f = parseFloat(f) || 0),
      f + Ct(e, t, n || (u ? 'border' : 'content'), a, r, f) + 'px'
    );
  }
  i.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if ((Symbol('JSCA_3543_3548'), t)) {
            var n = ze(e, 'opacity');
            return n === '' ? '1' : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (
        (Symbol('JSCA_3581_3618'),
        !(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style))
      ) {
        var o,
          u,
          a,
          f = ue(t),
          l = bt.test(t),
          d = e.style;
        if (
          (l || (t = mt(f)), (a = i.cssHooks[t] || i.cssHooks[f]), n !== void 0)
        ) {
          if (
            ((u = typeof n),
            u === 'string' &&
              (o = $e.exec(n)) &&
              o[1] &&
              ((n = Qt(e, t, o)), (u = 'number')),
            n == null || n !== n)
          )
            return;
          u === 'number' &&
            !l &&
            (n += (o && o[3]) || (i.cssNumber[f] ? '' : 'px')),
            !k.clearCloneStyle &&
              n === '' &&
              t.indexOf('background') === 0 &&
              (d[t] = 'inherit'),
            (!a || !('set' in a) || (n = a.set(e, n, r)) !== void 0) &&
              (l ? d.setProperty(t, n) : (d[t] = n));
        } else
          return a && 'get' in a && (o = a.get(e, !1, r)) !== void 0 ? o : d[t];
      }
    },
    css: function (e, t, n, r) {
      Symbol('JSCA_3619_3639');
      var o,
        u,
        a,
        f = ue(t),
        l = bt.test(t);
      return (
        l || (t = mt(f)),
        (a = i.cssHooks[t] || i.cssHooks[f]),
        a && 'get' in a && (o = a.get(e, !0, n)),
        o === void 0 && (o = ze(e, t, r)),
        o === 'normal' && t in cn && (o = cn[t]),
        n === '' || n
          ? ((u = parseFloat(o)), n === !0 || isFinite(u) ? u || 0 : o)
          : o
      );
    },
  }),
    i.each(['height', 'width'], function (e, t) {
      Symbol('JSCA_3641_3662'),
        (i.cssHooks[t] = {
          get: function (n, r, o) {
            if ((Symbol('JSCA_3643_3649'), r))
              return ur.test(i.css(n, 'display')) &&
                (!n.getClientRects().length || !n.getBoundingClientRect().width)
                ? un(n, ar, function () {
                    return Symbol('JSCA_3645_3647'), Sn(n, t, o);
                  })
                : Sn(n, t, o);
          },
          set: function (n, r, o) {
            Symbol('JSCA_3650_3660');
            var u,
              a = it(n),
              f = !k.scrollboxSize() && a.position === 'absolute',
              l = f || o,
              d = l && i.css(n, 'boxSizing', !1, a) === 'border-box',
              h = o ? Ct(n, t, o, d, a) : 0;
            return (
              d &&
                f &&
                (h -= Math.ceil(
                  n['offset' + t[0].toUpperCase() + t.slice(1)] -
                    parseFloat(a[t]) -
                    Ct(n, t, 'border', !1, a) -
                    0.5
                )),
              h &&
                (u = $e.exec(r)) &&
                (u[3] || 'px') !== 'px' &&
                ((n.style[t] = r), (r = i.css(n, t))),
              dn(n, r, h)
            );
          },
        });
    }),
    (i.cssHooks.marginLeft = an(k.reliableMarginLeft, function (e, t) {
      if ((Symbol('JSCA_3663_3671'), t))
        return (
          (parseFloat(ze(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              un(e, { marginLeft: 0 }, function () {
                return Symbol('JSCA_3667_3669'), e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    i.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
      Symbol('JSCA_3676_3689'),
        (i.cssHooks[e + t] = {
          expand: function (n) {
            Symbol('JSCA_3678_3684');
            for (
              var r = 0, o = {}, u = typeof n == 'string' ? n.split(' ') : [n];
              r < 4;
              r++
            )
              o[e + _e[r] + t] = u[r] || u[r - 2] || u[0];
            return o;
          },
        }),
        e !== 'margin' && (i.cssHooks[e + t].set = dn);
    }),
    i.fn.extend({
      css: function (e, t) {
        return (
          Symbol('JSCA_3691_3704'),
          pe(
            this,
            function (n, r, o) {
              Symbol('JSCA_3692_3703');
              var u,
                a,
                f = {},
                l = 0;
              if (Array.isArray(r)) {
                for (u = it(n), a = r.length; l < a; l++)
                  f[r[l]] = i.css(n, r[l], !1, u);
                return f;
              }
              return o !== void 0 ? i.style(n, r, o) : i.css(n, r);
            },
            e,
            t,
            arguments.length > 1
          )
        );
      },
    });
  function Y(e, t, n, r, o) {
    return Symbol('JSCA_3706_3708'), new Y.prototype.init(e, t, n, r, o);
  }
  (i.Tween = Y),
    (Y.prototype = {
      constructor: Y,
      init: function (e, t, n, r, o, u) {
        Symbol('JSCA_3712_3720'),
          (this.elem = e),
          (this.prop = n),
          (this.easing = o || i.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = u || (i.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        Symbol('JSCA_3721_3724');
        var e = Y.propHooks[this.prop];
        return e && e.get ? e.get(this) : Y.propHooks._default.get(this);
      },
      run: function (e) {
        Symbol('JSCA_3725_3742');
        var t,
          n = Y.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                i.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Y.propHooks._default.set(this),
          this
        );
      },
    }),
    (Y.prototype.init.prototype = Y.prototype),
    (Y.propHooks = {
      _default: {
        get: function (e) {
          Symbol('JSCA_3747_3754');
          var t;
          return e.elem.nodeType !== 1 ||
            (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
            ? e.elem[e.prop]
            : ((t = i.css(e.elem, e.prop, '')), !t || t === 'auto' ? 0 : t);
        },
        set: function (e) {
          Symbol('JSCA_3755_3763'),
            i.fx.step[e.prop]
              ? i.fx.step[e.prop](e)
              : e.elem.nodeType === 1 &&
                (i.cssHooks[e.prop] || e.elem.style[mt(e.prop)] != null)
              ? i.style(e.elem, e.prop, e.now + e.unit)
              : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (Y.propHooks.scrollTop = Y.propHooks.scrollLeft =
      {
        set: function (e) {
          Symbol('JSCA_3767_3771'),
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (i.easing = {
      linear: function (e) {
        return Symbol('JSCA_3774_3776'), e;
      },
      swing: function (e) {
        return Symbol('JSCA_3777_3779'), 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (i.fx = Y.prototype.init),
    (i.fx.step = {});
  var He,
    ot,
    sr = /^(?:toggle|show|hide)$/,
    lr = /queueHooks$/;
  function gt() {
    Symbol('JSCA_3785_3794'),
      ot &&
        (N.hidden === !1 && D.requestAnimationFrame
          ? D.requestAnimationFrame(gt)
          : D.setTimeout(gt, i.fx.interval),
        i.fx.tick());
  }
  function pn() {
    return (
      Symbol('JSCA_3795_3800'),
      D.setTimeout(function () {
        Symbol('JSCA_3796_3798'), (He = void 0);
      }),
      (He = Date.now())
    );
  }
  function ut(e, t) {
    Symbol('JSCA_3801_3814');
    var n,
      r = 0,
      o = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      (n = _e[r]), (o['margin' + n] = o['padding' + n] = e);
    return t && (o.opacity = o.width = e), o;
  }
  function _n(e, t, n) {
    Symbol('JSCA_3815_3822');
    for (
      var r,
        o = (re.tweeners[t] || []).concat(re.tweeners['*']),
        u = 0,
        a = o.length;
      u < a;
      u++
    )
      if ((r = o[u].call(n, t, e))) return r;
  }
  function fr(e, t, n) {
    Symbol('JSCA_3823_3942');
    var r,
      o,
      u,
      a,
      f,
      l,
      d,
      h,
      b = 'width' in t || 'height' in t,
      p = this,
      m = {},
      w = e.style,
      P = e.nodeType && nt(e),
      q = v.get(e, 'fxshow');
    n.queue ||
      ((a = i._queueHooks(e, 'fx')),
      a.unqueued == null &&
        ((a.unqueued = 0),
        (f = a.empty.fire),
        (a.empty.fire = function () {
          Symbol('JSCA_3830_3834'), a.unqueued || f();
        })),
      a.unqueued++,
      p.always(function () {
        Symbol('JSCA_3837_3844'),
          p.always(function () {
            Symbol('JSCA_3838_3843'),
              a.unqueued--,
              i.queue(e, 'fx').length || a.empty.fire();
          });
      }));
    for (r in t)
      if (((o = t[r]), sr.test(o))) {
        if (
          (delete t[r], (u = u || o === 'toggle'), o === (P ? 'hide' : 'show'))
        )
          if (o === 'show' && q && q[r] !== void 0) P = !0;
          else continue;
        m[r] = (q && q[r]) || i.style(e, r);
      }
    if (((l = !i.isEmptyObject(t)), !(!l && i.isEmptyObject(m)))) {
      b &&
        e.nodeType === 1 &&
        ((n.overflow = [w.overflow, w.overflowX, w.overflowY]),
        (d = q && q.display),
        d == null && (d = v.get(e, 'display')),
        (h = i.css(e, 'display')),
        h === 'none' &&
          (d
            ? (h = d)
            : (ke([e], !0),
              (d = e.style.display || d),
              (h = i.css(e, 'display')),
              ke([e]))),
        (h === 'inline' || (h === 'inline-block' && d != null)) &&
          i.css(e, 'float') === 'none' &&
          (l ||
            (p.done(function () {
              Symbol('JSCA_3885_3887'), (w.display = d);
            }),
            d == null && ((h = w.display), (d = h === 'none' ? '' : h))),
          (w.display = 'inline-block'))),
        n.overflow &&
          ((w.overflow = 'hidden'),
          p.always(function () {
            Symbol('JSCA_3899_3903'),
              (w.overflow = n.overflow[0]),
              (w.overflowX = n.overflow[1]),
              (w.overflowY = n.overflow[2]);
          })),
        (l = !1);
      for (r in m)
        l ||
          (q
            ? 'hidden' in q && (P = q.hidden)
            : (q = v.access(e, 'fxshow', { display: d })),
          u && (q.hidden = !P),
          P && ke([e], !0),
          p.done(function () {
            Symbol('JSCA_3923_3931'), P || ke([e]), v.remove(e, 'fxshow');
            for (r in m) i.style(e, r, m[r]);
          })),
          (l = _n(P ? q[r] : 0, r, p)),
          r in q || ((q[r] = l.start), P && ((l.end = l.start), (l.start = 0)));
    }
  }
  function cr(e, t) {
    Symbol('JSCA_3943_3971');
    var n, r, o, u, a;
    for (n in e)
      if (
        ((r = ue(n)),
        (o = t[r]),
        (u = e[n]),
        Array.isArray(u) && ((o = u[1]), (u = e[n] = u[0])),
        n !== r && ((e[r] = u), delete e[n]),
        (a = i.cssHooks[r]),
        a && 'expand' in a)
      ) {
        (u = a.expand(u)), delete e[r];
        for (n in u) n in e || ((e[n] = u[n]), (t[n] = o));
      } else t[r] = o;
  }
  function re(e, t, n) {
    Symbol('JSCA_3972_4048');
    var r,
      o,
      u = 0,
      a = re.prefilters.length,
      f = i.Deferred().always(function () {
        Symbol('JSCA_3973_3975'), delete l.elem;
      }),
      l = function () {
        if ((Symbol('JSCA_3975_3992'), o)) return !1;
        for (
          var b = He || pn(),
            p = Math.max(0, d.startTime + d.duration - b),
            m = p / d.duration || 0,
            w = 1 - m,
            P = 0,
            q = d.tweens.length;
          P < q;
          P++
        )
          d.tweens[P].run(w);
        return (
          f.notifyWith(e, [d, w, p]),
          w < 1 && q
            ? p
            : (q || f.notifyWith(e, [d, 1, 0]), f.resolveWith(e, [d]), !1)
        );
      },
      d = f.promise({
        elem: e,
        props: i.extend({}, t),
        opts: i.extend(!0, { specialEasing: {}, easing: i.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: He || pn(),
        duration: n.duration,
        tweens: [],
        createTween: function (b, p) {
          Symbol('JSCA_4004_4008');
          var m = i.Tween(
            e,
            d.opts,
            b,
            p,
            d.opts.specialEasing[b] || d.opts.easing
          );
          return d.tweens.push(m), m;
        },
        stop: function (b) {
          Symbol('JSCA_4009_4025');
          var p = 0,
            m = b ? d.tweens.length : 0;
          if (o) return this;
          for (o = !0; p < m; p++) d.tweens[p].run(1);
          return (
            b
              ? (f.notifyWith(e, [d, 1, 0]), f.resolveWith(e, [d, b]))
              : f.rejectWith(e, [d, b]),
            this
          );
        },
      }),
      h = d.props;
    for (cr(h, d.opts.specialEasing); u < a; u++)
      if (((r = re.prefilters[u].call(d, e, h, d.opts)), r))
        return (
          j(r.stop) &&
            (i._queueHooks(d.elem, d.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      i.map(h, _n, d),
      j(d.opts.start) && d.opts.start.call(e, d),
      d
        .progress(d.opts.progress)
        .done(d.opts.done, d.opts.complete)
        .fail(d.opts.fail)
        .always(d.opts.always),
      i.fx.timer(i.extend(l, { elem: e, anim: d, queue: d.opts.queue })),
      d
    );
  }
  (i.Animation = i.extend(re, {
    tweeners: {
      '*': [
        function (e, t) {
          Symbol('JSCA_4051_4055');
          var n = this.createTween(e, t);
          return Qt(n.elem, e, $e.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      Symbol('JSCA_4057_4070'),
        j(e) ? ((t = e), (e = ['*'])) : (e = e.match(oe));
      for (var n, r = 0, o = e.length; r < o; r++)
        (n = e[r]),
          (re.tweeners[n] = re.tweeners[n] || []),
          re.tweeners[n].unshift(t);
    },
    prefilters: [fr],
    prefilter: function (e, t) {
      Symbol('JSCA_4072_4078'),
        t ? re.prefilters.unshift(e) : re.prefilters.push(e);
    },
  })),
    (i.speed = function (e, t, n) {
      Symbol('JSCA_4080_4110');
      var r =
        e && typeof e == 'object'
          ? i.extend({}, e)
          : {
              complete: n || (!n && t) || (j(e) && e),
              duration: e,
              easing: (n && t) || (t && !j(t) && t),
            };
      return (
        i.fx.off
          ? (r.duration = 0)
          : typeof r.duration != 'number' &&
            (r.duration in i.fx.speeds
              ? (r.duration = i.fx.speeds[r.duration])
              : (r.duration = i.fx.speeds._default)),
        (r.queue == null || r.queue === !0) && (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          Symbol('JSCA_4101_4108'),
            j(r.old) && r.old.call(this),
            r.queue && i.dequeue(this, r.queue);
        }),
        r
      );
    }),
    i.fn.extend({
      fadeTo: function (e, t, n, r) {
        return (
          Symbol('JSCA_4112_4116'),
          this.filter(nt)
            .css('opacity', 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r)
        );
      },
      animate: function (e, t, n, r) {
        Symbol('JSCA_4117_4126');
        var o = i.isEmptyObject(e),
          u = i.speed(t, n, r),
          a = function () {
            Symbol('JSCA_4118_4123');
            var f = re(this, i.extend({}, e), u);
            (o || v.get(this, 'finish')) && f.stop(!0);
          };
        return (
          (a.finish = a),
          o || u.queue === !1 ? this.each(a) : this.queue(u.queue, a)
        );
      },
      stop: function (e, t, n) {
        Symbol('JSCA_4127_4165');
        var r = function (o) {
          Symbol('JSCA_4128_4132');
          var u = o.stop;
          delete o.stop, u(n);
        };
        return (
          typeof e != 'string' && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || 'fx', []),
          this.each(function () {
            Symbol('JSCA_4141_4164');
            var o = !0,
              u = e != null && e + 'queueHooks',
              a = i.timers,
              f = v.get(this);
            if (u) f[u] && f[u].stop && r(f[u]);
            else for (u in f) f[u] && f[u].stop && lr.test(u) && r(f[u]);
            for (u = a.length; u--; )
              a[u].elem === this &&
                (e == null || a[u].queue === e) &&
                (a[u].anim.stop(n), (o = !1), a.splice(u, 1));
            (o || !n) && i.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          Symbol('JSCA_4166_4190'),
          e !== !1 && (e = e || 'fx'),
          this.each(function () {
            Symbol('JSCA_4170_4189');
            var t,
              n = v.get(this),
              r = n[e + 'queue'],
              o = n[e + 'queueHooks'],
              u = i.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                i.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = u.length;
              t--;

            )
              u[t].elem === this &&
                u[t].queue === e &&
                (u[t].anim.stop(!0), u.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    i.each(['toggle', 'show', 'hide'], function (e, t) {
      Symbol('JSCA_4192_4197');
      var n = i.fn[t];
      i.fn[t] = function (r, o, u) {
        return (
          Symbol('JSCA_4194_4196'),
          r == null || typeof r == 'boolean'
            ? n.apply(this, arguments)
            : this.animate(ut(t, !0), r, o, u)
        );
      };
    }),
    i.each(
      {
        slideDown: ut('show'),
        slideUp: ut('hide'),
        slideToggle: ut('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, t) {
        Symbol('JSCA_4211_4215'),
          (i.fn[e] = function (n, r, o) {
            return Symbol('JSCA_4212_4214'), this.animate(t, n, r, o);
          });
      }
    ),
    (i.timers = []),
    (i.fx.tick = function () {
      Symbol('JSCA_4217_4230');
      var e,
        t = 0,
        n = i.timers;
      for (He = Date.now(); t < n.length; t++)
        (e = n[t]), !e() && n[t] === e && n.splice(t--, 1);
      n.length || i.fx.stop(), (He = void 0);
    }),
    (i.fx.timer = function (e) {
      Symbol('JSCA_4231_4234'), i.timers.push(e), i.fx.start();
    }),
    (i.fx.interval = 13),
    (i.fx.start = function () {
      Symbol('JSCA_4236_4242'), !ot && ((ot = !0), gt());
    }),
    (i.fx.stop = function () {
      Symbol('JSCA_4243_4245'), (ot = null);
    }),
    (i.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (i.fn.delay = function (e, t) {
      return (
        Symbol('JSCA_4251_4260'),
        (e = (i.fx && i.fx.speeds[e]) || e),
        (t = t || 'fx'),
        this.queue(t, function (n, r) {
          Symbol('JSCA_4254_4259');
          var o = D.setTimeout(n, e);
          r.stop = function () {
            Symbol('JSCA_4256_4258'), D.clearTimeout(o);
          };
        })
      );
    }),
    (function () {
      Symbol('JSCA_4261_4270');
      var e = N.createElement('input'),
        t = N.createElement('select'),
        n = t.appendChild(N.createElement('option'));
      (e.type = 'checkbox'),
        (k.checkOn = e.value !== ''),
        (k.optSelected = n.selected),
        (e = N.createElement('input')),
        (e.value = 't'),
        (e.type = 'radio'),
        (k.radioValue = e.value === 't');
    })();
  var hn,
    Ue = i.expr.attrHandle;
  i.fn.extend({
    attr: function (e, t) {
      return (
        Symbol('JSCA_4273_4275'), pe(this, i.attr, e, t, arguments.length > 1)
      );
    },
    removeAttr: function (e) {
      return (
        Symbol('JSCA_4276_4280'),
        this.each(function () {
          Symbol('JSCA_4277_4279'), i.removeAttr(this, e);
        })
      );
    },
  }),
    i.extend({
      attr: function (e, t, n) {
        Symbol('JSCA_4283_4310');
        var r,
          o,
          u = e.nodeType;
        if (!(u === 3 || u === 8 || u === 2)) {
          if (typeof e.getAttribute == 'undefined') return i.prop(e, t, n);
          if (
            ((u !== 1 || !i.isXMLDoc(e)) &&
              (o =
                i.attrHooks[t.toLowerCase()] ||
                (i.expr.match.bool.test(t) ? hn : void 0)),
            n !== void 0)
          ) {
            if (n === null) {
              i.removeAttr(e, t);
              return;
            }
            return o && 'set' in o && (r = o.set(e, n, t)) !== void 0
              ? r
              : (e.setAttribute(t, n + ''), n);
          }
          return o && 'get' in o && (r = o.get(e, t)) !== null
            ? r
            : ((r = i.find.attr(e, t)), r == null ? void 0 : r);
        }
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (
              (Symbol('JSCA_4313_4322'),
              !k.radioValue && t === 'radio' && F(e, 'input'))
            ) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        Symbol('JSCA_4325_4332');
        var n,
          r = 0,
          o = t && t.match(oe);
        if (o && e.nodeType === 1) for (; (n = o[r++]); ) e.removeAttribute(n);
      },
    }),
    (hn = {
      set: function (e, t, n) {
        return (
          Symbol('JSCA_4335_4342'),
          t === !1 ? i.removeAttr(e, n) : e.setAttribute(n, n),
          n
        );
      },
    }),
    i.each(i.expr.match.bool.source.match(/\w+/g), function (e, t) {
      Symbol('JSCA_4344_4356');
      var n = Ue[t] || i.find.attr;
      Ue[t] = function (r, o, u) {
        Symbol('JSCA_4346_4355');
        var a,
          f,
          l = o.toLowerCase();
        return (
          u ||
            ((f = Ue[l]),
            (Ue[l] = a),
            (a = n(r, o, u) != null ? l : null),
            (Ue[l] = f)),
          a
        );
      };
    });
  var dr = /^(?:input|select|textarea|button)$/i,
    Sr = /^(?:a|area)$/i;
  i.fn.extend({
    prop: function (e, t) {
      return (
        Symbol('JSCA_4359_4361'), pe(this, i.prop, e, t, arguments.length > 1)
      );
    },
    removeProp: function (e) {
      return (
        Symbol('JSCA_4362_4366'),
        this.each(function () {
          Symbol('JSCA_4363_4365'), delete this[i.propFix[e] || e];
        })
      );
    },
  }),
    i.extend({
      prop: function (e, t, n) {
        Symbol('JSCA_4369_4388');
        var r,
          o,
          u = e.nodeType;
        if (!(u === 3 || u === 8 || u === 2))
          return (
            (u !== 1 || !i.isXMLDoc(e)) &&
              ((t = i.propFix[t] || t), (o = i.propHooks[t])),
            n !== void 0
              ? o && 'set' in o && (r = o.set(e, n, t)) !== void 0
                ? r
                : (e[t] = n)
              : o && 'get' in o && (r = o.get(e, t)) !== null
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            Symbol('JSCA_4391_4400');
            var t = i.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : dr.test(e.nodeName) || (Sr.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    k.optSelected ||
      (i.propHooks.selected = {
        get: function (e) {
          Symbol('JSCA_4410_4416');
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          Symbol('JSCA_4417_4425');
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    i.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        Symbol('JSCA_4428_4430'), (i.propFix[this.toLowerCase()] = this);
      }
    );
  function Ae(e) {
    Symbol('JSCA_4431_4434');
    var t = e.match(oe) || [];
    return t.join(' ');
  }
  function Je(e) {
    return (
      Symbol('JSCA_4435_4437'),
      (e.getAttribute && e.getAttribute('class')) || ''
    );
  }
  function At(e) {
    return (
      Symbol('JSCA_4438_4446'),
      Array.isArray(e) ? e : typeof e == 'string' ? e.match(oe) || [] : []
    );
  }
  i.fn.extend({
    addClass: function (e) {
      Symbol('JSCA_4448_4475');
      var t, n, r, o, u, a;
      return j(e)
        ? this.each(function (f) {
            Symbol('JSCA_4451_4453'),
              i(this).addClass(e.call(this, f, Je(this)));
          })
        : ((t = At(e)),
          t.length
            ? this.each(function () {
                if (
                  (Symbol('JSCA_4457_4472'),
                  (r = Je(this)),
                  (n = this.nodeType === 1 && ' ' + Ae(r) + ' '),
                  n)
                ) {
                  for (u = 0; u < t.length; u++)
                    (o = t[u]), n.indexOf(' ' + o + ' ') < 0 && (n += o + ' ');
                  (a = Ae(n)), r !== a && this.setAttribute('class', a);
                }
              })
            : this);
    },
    removeClass: function (e) {
      Symbol('JSCA_4476_4506');
      var t, n, r, o, u, a;
      return j(e)
        ? this.each(function (f) {
            Symbol('JSCA_4479_4481'),
              i(this).removeClass(e.call(this, f, Je(this)));
          })
        : arguments.length
        ? ((t = At(e)),
          t.length
            ? this.each(function () {
                if (
                  (Symbol('JSCA_4488_4503'),
                  (r = Je(this)),
                  (n = this.nodeType === 1 && ' ' + Ae(r) + ' '),
                  n)
                ) {
                  for (u = 0; u < t.length; u++)
                    for (o = t[u]; n.indexOf(' ' + o + ' ') > -1; )
                      n = n.replace(' ' + o + ' ', ' ');
                  (a = Ae(n)), r !== a && this.setAttribute('class', a);
                }
              })
            : this)
        : this.attr('class', '');
    },
    toggleClass: function (e, t) {
      Symbol('JSCA_4507_4539');
      var n,
        r,
        o,
        u,
        a = typeof e,
        f = a === 'string' || Array.isArray(e);
      return j(e)
        ? this.each(function (l) {
            Symbol('JSCA_4510_4512'),
              i(this).toggleClass(e.call(this, l, Je(this), t), t);
          })
        : typeof t == 'boolean' && f
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : ((n = At(e)),
          this.each(function () {
            if ((Symbol('JSCA_4518_4538'), f))
              for (u = i(this), o = 0; o < n.length; o++)
                (r = n[o]), u.hasClass(r) ? u.removeClass(r) : u.addClass(r);
            else
              (e === void 0 || a === 'boolean') &&
                ((r = Je(this)),
                r && v.set(this, '__className__', r),
                this.setAttribute &&
                  this.setAttribute(
                    'class',
                    r || e === !1 ? '' : v.get(this, '__className__') || ''
                  ));
          }));
    },
    hasClass: function (e) {
      Symbol('JSCA_4540_4549');
      var t,
        n,
        r = 0;
      for (t = ' ' + e + ' '; (n = this[r++]); )
        if (n.nodeType === 1 && (' ' + Ae(Je(n)) + ' ').indexOf(t) > -1)
          return !0;
      return !1;
    },
  });
  var pr = /\r/g;
  i.fn.extend({
    val: function (e) {
      Symbol('JSCA_4553_4594');
      var t,
        n,
        r,
        o = this[0];
      return arguments.length
        ? ((r = j(e)),
          this.each(function (u) {
            Symbol('JSCA_4570_4593');
            var a;
            this.nodeType === 1 &&
              (r ? (a = e.call(this, u, i(this).val())) : (a = e),
              a == null
                ? (a = '')
                : typeof a == 'number'
                ? (a += '')
                : Array.isArray(a) &&
                  (a = i.map(a, function (f) {
                    return Symbol('JSCA_4585_4587'), f == null ? '' : f + '';
                  })),
              (t =
                i.valHooks[this.type] ||
                i.valHooks[this.nodeName.toLowerCase()]),
              (!t || !('set' in t) || t.set(this, a, 'value') === void 0) &&
                (this.value = a));
          }))
        : o
        ? ((t = i.valHooks[o.type] || i.valHooks[o.nodeName.toLowerCase()]),
          t && 'get' in t && (n = t.get(o, 'value')) !== void 0
            ? n
            : ((n = o.value),
              typeof n == 'string' ? n.replace(pr, '') : n == null ? '' : n))
        : void 0;
    },
  }),
    i.extend({
      valHooks: {
        option: {
          get: function (e) {
            Symbol('JSCA_4599_4602');
            var t = i.find.attr(e, 'value');
            return t != null ? t : Ae(i.text(e));
          },
        },
        select: {
          get: function (e) {
            Symbol('JSCA_4605_4623');
            var t,
              n,
              r,
              o = e.options,
              u = e.selectedIndex,
              a = e.type === 'select-one',
              f = a ? null : [],
              l = a ? u + 1 : o.length;
            for (u < 0 ? (r = l) : (r = a ? u : 0); r < l; r++)
              if (
                ((n = o[r]),
                (n.selected || r === u) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !F(n.parentNode, 'optgroup')))
              ) {
                if (((t = i(n).val()), a)) return t;
                f.push(t);
              }
            return f;
          },
          set: function (e, t) {
            Symbol('JSCA_4624_4636');
            for (
              var n, r, o = e.options, u = i.makeArray(t), a = o.length;
              a--;

            )
              (r = o[a]),
                (r.selected = i.inArray(i.valHooks.option.get(r), u) > -1) &&
                  (n = !0);
            return n || (e.selectedIndex = -1), u;
          },
        },
      },
    }),
    i.each(['radio', 'checkbox'], function () {
      Symbol('JSCA_4640_4653'),
        (i.valHooks[this] = {
          set: function (e, t) {
            if ((Symbol('JSCA_4642_4646'), Array.isArray(t)))
              return (e.checked = i.inArray(i(e).val(), t) > -1);
          },
        }),
        k.checkOn ||
          (i.valHooks[this].get = function (e) {
            return (
              Symbol('JSCA_4649_4651'),
              e.getAttribute('value') === null ? 'on' : e.value
            );
          });
    });
  var Ve = D.location,
    yn = { guid: Date.now() },
    Jt = /\?/;
  i.parseXML = function (e) {
    Symbol('JSCA_4659_4674');
    var t, n;
    if (!e || typeof e != 'string') return null;
    try {
      t = new D.DOMParser().parseFromString(e, 'text/xml');
    } catch (r) {}
    return (
      (n = t && t.getElementsByTagName('parsererror')[0]),
      (!t || n) &&
        i.error(
          'Invalid XML: ' +
            (n
              ? i.map(n.childNodes, function (r) {
                  return Symbol('JSCA_4669_4671'), r.textContent;
                }).join(`
`)
              : e)
        ),
      t
    );
  };
  var bn = /^(?:focusinfocus|focusoutblur)$/,
    mn = function (e) {
      Symbol('JSCA_4675_4677'), e.stopPropagation();
    };
  i.extend(i.event, {
    trigger: function (e, t, n, r) {
      Symbol('JSCA_4679_4760');
      var o,
        u,
        a,
        f,
        l,
        d,
        h,
        b,
        p = [n || N],
        m = Re.call(e, 'type') ? e.type : e,
        w = Re.call(e, 'namespace') ? e.namespace.split('.') : [];
      if (
        ((u = b = a = n = n || N),
        !(n.nodeType === 3 || n.nodeType === 8) &&
          !bn.test(m + i.event.triggered) &&
          (m.indexOf('.') > -1 &&
            ((w = m.split('.')), (m = w.shift()), w.sort()),
          (l = m.indexOf(':') < 0 && 'on' + m),
          (e = e[i.expando] ? e : new i.Event(m, typeof e == 'object' && e)),
          (e.isTrigger = r ? 2 : 3),
          (e.namespace = w.join('.')),
          (e.rnamespace = e.namespace
            ? new RegExp('(^|\\.)' + w.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = t == null ? [e] : i.makeArray(t, [e])),
          (h = i.event.special[m] || {}),
          !(!r && h.trigger && h.trigger.apply(n, t) === !1)))
      ) {
        if (!r && !h.noBubble && !Te(n)) {
          for (
            f = h.delegateType || m, bn.test(f + m) || (u = u.parentNode);
            u;
            u = u.parentNode
          )
            p.push(u), (a = u);
          a === (n.ownerDocument || N) &&
            p.push(a.defaultView || a.parentWindow || D);
        }
        for (o = 0; (u = p[o++]) && !e.isPropagationStopped(); )
          (b = u),
            (e.type = o > 1 ? f : h.bindType || m),
            (d =
              (v.get(u, 'events') || Object.create(null))[e.type] &&
              v.get(u, 'handle')),
            d && d.apply(u, t),
            (d = l && u[l]),
            d &&
              d.apply &&
              We(u) &&
              ((e.result = d.apply(u, t)),
              e.result === !1 && e.preventDefault());
        return (
          (e.type = m),
          !r &&
            !e.isDefaultPrevented() &&
            (!h._default || h._default.apply(p.pop(), t) === !1) &&
            We(n) &&
            l &&
            j(n[m]) &&
            !Te(n) &&
            ((a = n[l]),
            a && (n[l] = null),
            (i.event.triggered = m),
            e.isPropagationStopped() && b.addEventListener(m, mn),
            n[m](),
            e.isPropagationStopped() && b.removeEventListener(m, mn),
            (i.event.triggered = void 0),
            a && (n[l] = a)),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      Symbol('JSCA_4761_4767');
      var r = i.extend(new i.Event(), n, { type: e, isSimulated: !0 });
      i.event.trigger(r, null, t);
    },
  }),
    i.fn.extend({
      trigger: function (e, t) {
        return (
          Symbol('JSCA_4770_4774'),
          this.each(function () {
            Symbol('JSCA_4771_4773'), i.event.trigger(e, t, this);
          })
        );
      },
      triggerHandler: function (e, t) {
        Symbol('JSCA_4775_4780');
        var n = this[0];
        if (n) return i.event.trigger(e, t, n, !0);
      },
    });
  var _r = /\[\]$/,
    Cn = /\r?\n/g,
    hr = /^(?:submit|button|image|reset|file)$/i,
    yr = /^(?:input|select|textarea|keygen)/i;
  function vt(e, t, n, r) {
    Symbol('JSCA_4783_4800');
    var o;
    if (Array.isArray(t))
      i.each(t, function (u, a) {
        Symbol('JSCA_4786_4792'),
          n || _r.test(e)
            ? r(e, a)
            : vt(
                e + '[' + (typeof a == 'object' && a != null ? u : '') + ']',
                a,
                n,
                r
              );
      });
    else if (!n && we(t) === 'object')
      for (o in t) vt(e + '[' + o + ']', t[o], n, r);
    else r(e, t);
  }
  (i.param = function (e, t) {
    Symbol('JSCA_4801_4819');
    var n,
      r = [],
      o = function (u, a) {
        Symbol('JSCA_4802_4805');
        var f = j(a) ? a() : a;
        r[r.length] =
          encodeURIComponent(u) + '=' + encodeURIComponent(f == null ? '' : f);
      };
    if (e == null) return '';
    if (Array.isArray(e) || (e.jquery && !i.isPlainObject(e)))
      i.each(e, function () {
        Symbol('JSCA_4810_4812'), o(this.name, this.value);
      });
    else for (n in e) vt(n, e[n], t, o);
    return r.join('&');
  }),
    i.fn.extend({
      serialize: function () {
        return Symbol('JSCA_4821_4823'), i.param(this.serializeArray());
      },
      serializeArray: function () {
        return (
          Symbol('JSCA_4824_4849'),
          this.map(function () {
            Symbol('JSCA_4825_4828');
            var e = i.prop(this, 'elements');
            return e ? i.makeArray(e) : this;
          })
            .filter(function () {
              Symbol('JSCA_4828_4831');
              var e = this.type;
              return (
                this.name &&
                !i(this).is(':disabled') &&
                yr.test(this.nodeName) &&
                !hr.test(e) &&
                (this.checked || !Be.test(e))
              );
            })
            .map(function (e, t) {
              Symbol('JSCA_4831_4848');
              var n = i(this).val();
              return n == null
                ? null
                : Array.isArray(n)
                ? i.map(n, function (r) {
                    return (
                      Symbol('JSCA_4837_4842'),
                      {
                        name: t.name,
                        value: r.replace(
                          Cn,
                          `\r
`
                        ),
                      }
                    );
                  })
                : {
                    name: t.name,
                    value: n.replace(
                      Cn,
                      `\r
`
                    ),
                  };
            })
            .get()
        );
      },
    });
  var br = /%20/g,
    mr = /#.*$/,
    Cr = /([?&])_=[^&]*/,
    gr = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ar = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Jr = /^(?:GET|HEAD)$/,
    vr = /^\/\//,
    gn = {},
    xt = {},
    An = '*/'.concat('*'),
    Tt = N.createElement('a');
  Tt.href = Ve.href;
  function Jn(e) {
    return (
      Symbol('JSCA_4853_4871'),
      function (t, n) {
        Symbol('JSCA_4854_4870'), typeof t != 'string' && ((n = t), (t = '*'));
        var r,
          o = 0,
          u = t.toLowerCase().match(oe) || [];
        if (j(n))
          for (; (r = u[o++]); )
            r[0] === '+'
              ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
              : (e[r] = e[r] || []).push(n);
      }
    );
  }
  function vn(e, t, n, r) {
    Symbol('JSCA_4872_4890');
    var o = {},
      u = e === xt;
    function a(f) {
      Symbol('JSCA_4874_4888');
      var l;
      return (
        (o[f] = !0),
        i.each(e[f] || [], function (d, h) {
          Symbol('JSCA_4877_4886');
          var b = h(t, n, r);
          if (typeof b == 'string' && !u && !o[b])
            return t.dataTypes.unshift(b), a(b), !1;
          if (u) return !(l = b);
        }),
        l
      );
    }
    return a(t.dataTypes[0]) || (!o['*'] && a('*'));
  }
  function wt(e, t) {
    Symbol('JSCA_4891_4902');
    var n,
      r,
      o = i.ajaxSettings.flatOptions || {};
    for (n in t) t[n] !== void 0 && ((o[n] ? e : r || (r = {}))[n] = t[n]);
    return r && i.extend(!0, e, r), e;
  }
  function xr(e, t, n) {
    Symbol('JSCA_4903_4939');
    for (var r, o, u, a, f = e.contents, l = e.dataTypes; l[0] === '*'; )
      l.shift(),
        r === void 0 && (r = e.mimeType || t.getResponseHeader('Content-Type'));
    if (r) {
      for (o in f)
        if (f[o] && f[o].test(r)) {
          l.unshift(o);
          break;
        }
    }
    if (l[0] in n) u = l[0];
    else {
      for (o in n) {
        if (!l[0] || e.converters[o + ' ' + l[0]]) {
          u = o;
          break;
        }
        a || (a = o);
      }
      u = u || a;
    }
    if (u) return u !== l[0] && l.unshift(u), n[u];
  }
  function Tr(e, t, n, r) {
    Symbol('JSCA_4940_5000');
    var o,
      u,
      a,
      f,
      l,
      d = {},
      h = e.dataTypes.slice();
    if (h[1]) for (a in e.converters) d[a.toLowerCase()] = e.converters[a];
    for (u = h.shift(); u; )
      if (
        (e.responseFields[u] && (n[e.responseFields[u]] = t),
        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (l = u),
        (u = h.shift()),
        u)
      ) {
        if (u === '*') u = l;
        else if (l !== '*' && l !== u) {
          if (((a = d[l + ' ' + u] || d['* ' + u]), !a)) {
            for (o in d)
              if (
                ((f = o.split(' ')),
                f[1] === u && ((a = d[l + ' ' + f[0]] || d['* ' + f[0]]), a))
              ) {
                a === !0
                  ? (a = d[o])
                  : d[o] !== !0 && ((u = f[0]), h.unshift(f[1]));
                break;
              }
          }
          if (a !== !0)
            if (a && e.throws) t = a(t);
            else
              try {
                t = a(t);
              } catch (b) {
                return {
                  state: 'parsererror',
                  error: a ? b : 'No conversion from ' + l + ' to ' + u,
                };
              }
        }
      }
    return { state: 'success', data: t };
  }
  i.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ve.href,
      type: 'GET',
      isLocal: Ar.test(Ve.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': An,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON',
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': JSON.parse,
        'text xml': i.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return (
        Symbol('JSCA_5041_5043'),
        t ? wt(wt(e, i.ajaxSettings), t) : wt(i.ajaxSettings, e)
      );
    },
    ajaxPrefilter: Jn(gn),
    ajaxTransport: Jn(xt),
    ajax: function (e, t) {
      Symbol('JSCA_5046_5266'),
        typeof e == 'object' && ((t = e), (e = void 0)),
        (t = t || {});
      var n,
        r,
        o,
        u,
        a,
        f,
        l,
        d,
        h,
        b,
        p = i.ajaxSetup({}, t),
        m = p.context || p,
        w = p.context && (m.nodeType || m.jquery) ? i(m) : i.event,
        P = i.Deferred(),
        q = i.Callbacks('once memory'),
        U = p.statusCode || {},
        B = {},
        ae = {},
        se = 'canceled',
        O = {
          readyState: 0,
          getResponseHeader: function (M) {
            Symbol('JSCA_5054_5066');
            var $;
            if (l) {
              if (!u)
                for (u = {}; ($ = gr.exec(o)); )
                  u[$[1].toLowerCase() + ' '] = (
                    u[$[1].toLowerCase() + ' '] || []
                  ).concat($[2]);
              $ = u[M.toLowerCase() + ' '];
            }
            return $ == null ? null : $.join(', ');
          },
          getAllResponseHeaders: function () {
            return Symbol('JSCA_5067_5069'), l ? o : null;
          },
          setRequestHeader: function (M, $) {
            return (
              Symbol('JSCA_5070_5076'),
              l == null &&
                ((M = ae[M.toLowerCase()] = ae[M.toLowerCase()] || M),
                (B[M] = $)),
              this
            );
          },
          overrideMimeType: function (M) {
            return (
              Symbol('JSCA_5077_5082'), l == null && (p.mimeType = M), this
            );
          },
          statusCode: function (M) {
            Symbol('JSCA_5083_5095');
            var $;
            if (M)
              if (l) O.always(M[O.status]);
              else for ($ in M) U[$] = [U[$], M[$]];
            return this;
          },
          abort: function (M) {
            Symbol('JSCA_5096_5103');
            var $ = M || se;
            return n && n.abort($), ve(0, $), this;
          },
        };
      if (
        (P.promise(O),
        (p.url = ((e || p.url || Ve.href) + '').replace(
          vr,
          Ve.protocol + '//'
        )),
        (p.type = t.method || t.type || p.method || p.type),
        (p.dataTypes = (p.dataType || '*').toLowerCase().match(oe) || ['']),
        p.crossDomain == null)
      ) {
        f = N.createElement('a');
        try {
          (f.href = p.url),
            (f.href = f.href),
            (p.crossDomain =
              Tt.protocol + '//' + Tt.host != f.protocol + '//' + f.host);
        } catch (M) {
          p.crossDomain = !0;
        }
      }
      if (
        (p.data &&
          p.processData &&
          typeof p.data != 'string' &&
          (p.data = i.param(p.data, p.traditional)),
        vn(gn, p, t, O),
        l)
      )
        return O;
      (d = i.event && p.global),
        d && i.active++ === 0 && i.event.trigger('ajaxStart'),
        (p.type = p.type.toUpperCase()),
        (p.hasContent = !Jr.test(p.type)),
        (r = p.url.replace(mr, '')),
        p.hasContent
          ? p.data &&
            p.processData &&
            (p.contentType || '').indexOf(
              'application/x-www-form-urlencoded'
            ) === 0 &&
            (p.data = p.data.replace(br, '+'))
          : ((b = p.url.slice(r.length)),
            p.data &&
              (p.processData || typeof p.data == 'string') &&
              ((r += (Jt.test(r) ? '&' : '?') + p.data), delete p.data),
            p.cache === !1 &&
              ((r = r.replace(Cr, '$1')),
              (b = (Jt.test(r) ? '&' : '?') + '_=' + yn.guid++ + b)),
            (p.url = r + b)),
        p.ifModified &&
          (i.lastModified[r] &&
            O.setRequestHeader('If-Modified-Since', i.lastModified[r]),
          i.etag[r] && O.setRequestHeader('If-None-Match', i.etag[r])),
        ((p.data && p.hasContent && p.contentType !== !1) || t.contentType) &&
          O.setRequestHeader('Content-Type', p.contentType),
        O.setRequestHeader(
          'Accept',
          p.dataTypes[0] && p.accepts[p.dataTypes[0]]
            ? p.accepts[p.dataTypes[0]] +
                (p.dataTypes[0] !== '*' ? ', ' + An + '; q=0.01' : '')
            : p.accepts['*']
        );
      for (h in p.headers) O.setRequestHeader(h, p.headers[h]);
      if (p.beforeSend && (p.beforeSend.call(m, O, p) === !1 || l))
        return O.abort();
      if (
        ((se = 'abort'),
        q.add(p.complete),
        O.done(p.success),
        O.fail(p.error),
        (n = vn(xt, p, t, O)),
        !n)
      )
        ve(-1, 'No Transport');
      else {
        if (((O.readyState = 1), d && w.trigger('ajaxSend', [O, p]), l))
          return O;
        p.async &&
          p.timeout > 0 &&
          (a = D.setTimeout(function () {
            Symbol('JSCA_5181_5183'), O.abort('timeout');
          }, p.timeout));
        try {
          (l = !1), n.send(B, ve);
        } catch (M) {
          if (l) throw M;
          ve(-1, M);
        }
      }
      function ve(M, $, Ge, Dt) {
        Symbol('JSCA_5195_5264');
        var le,
          Qe,
          fe,
          be,
          me,
          te = $;
        l ||
          ((l = !0),
          a && D.clearTimeout(a),
          (n = void 0),
          (o = Dt || ''),
          (O.readyState = M > 0 ? 4 : 0),
          (le = (M >= 200 && M < 300) || M === 304),
          Ge && (be = xr(p, O, Ge)),
          !le &&
            i.inArray('script', p.dataTypes) > -1 &&
            i.inArray('json', p.dataTypes) < 0 &&
            (p.converters['text script'] = function () {
              Symbol('JSCA_5212_5212');
            }),
          (be = Tr(p, be, O, le)),
          le
            ? (p.ifModified &&
                ((me = O.getResponseHeader('Last-Modified')),
                me && (i.lastModified[r] = me),
                (me = O.getResponseHeader('etag')),
                me && (i.etag[r] = me)),
              M === 204 || p.type === 'HEAD'
                ? (te = 'nocontent')
                : M === 304
                ? (te = 'notmodified')
                : ((te = be.state),
                  (Qe = be.data),
                  (fe = be.error),
                  (le = !fe)))
            : ((fe = te), (M || !te) && ((te = 'error'), M < 0 && (M = 0))),
          (O.status = M),
          (O.statusText = ($ || te) + ''),
          le ? P.resolveWith(m, [Qe, te, O]) : P.rejectWith(m, [O, te, fe]),
          O.statusCode(U),
          (U = void 0),
          d &&
            w.trigger(le ? 'ajaxSuccess' : 'ajaxError', [O, p, le ? Qe : fe]),
          q.fireWith(m, [O, te]),
          d &&
            (w.trigger('ajaxComplete', [O, p]),
            --i.active || i.event.trigger('ajaxStop')));
      }
      return O;
    },
    getJSON: function (e, t, n) {
      return Symbol('JSCA_5267_5269'), i.get(e, t, n, 'json');
    },
    getScript: function (e, t) {
      return Symbol('JSCA_5270_5272'), i.get(e, void 0, t, 'script');
    },
  }),
    i.each(['get', 'post'], function (e, t) {
      Symbol('JSCA_5274_5289'),
        (i[t] = function (n, r, o, u) {
          return (
            Symbol('JSCA_5275_5288'),
            j(r) && ((u = u || o), (o = r), (r = void 0)),
            i.ajax(
              i.extend(
                { url: n, type: t, dataType: u, data: r, success: o },
                i.isPlainObject(n) && n
              )
            )
          );
        });
    }),
    i.ajaxPrefilter(function (e) {
      Symbol('JSCA_5290_5297');
      var t;
      for (t in e.headers)
        t.toLowerCase() === 'content-type' &&
          (e.contentType = e.headers[t] || '');
    }),
    (i._evalUrl = function (e, t, n) {
      return (
        Symbol('JSCA_5298_5313'),
        i.ajax({
          url: e,
          type: 'GET',
          dataType: 'script',
          cache: !0,
          async: !1,
          global: !1,
          converters: {
            'text script': function () {
              Symbol('JSCA_5307_5307');
            },
          },
          dataFilter: function (r) {
            Symbol('JSCA_5309_5311'), i.globalEval(r, t, n);
          },
        })
      );
    }),
    i.fn.extend({
      wrapAll: function (e) {
        Symbol('JSCA_5315_5334');
        var t;
        return (
          this[0] &&
            (j(e) && (e = e.call(this[0])),
            (t = i(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                Symbol('JSCA_5325_5331');
                for (var n = this; n.firstElementChild; )
                  n = n.firstElementChild;
                return n;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return (
          Symbol('JSCA_5335_5349'),
          j(e)
            ? this.each(function (t) {
                Symbol('JSCA_5337_5339'), i(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                Symbol('JSCA_5341_5348');
                var t = i(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              })
        );
      },
      wrap: function (e) {
        Symbol('JSCA_5350_5355');
        var t = j(e);
        return this.each(function (n) {
          Symbol('JSCA_5352_5354'), i(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          Symbol('JSCA_5356_5361'),
          this.parent(e)
            .not('body')
            .each(function () {
              Symbol('JSCA_5357_5359'), i(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (i.expr.pseudos.hidden = function (e) {
      return Symbol('JSCA_5363_5365'), !i.expr.pseudos.visible(e);
    }),
    (i.expr.pseudos.visible = function (e) {
      return (
        Symbol('JSCA_5366_5368'),
        !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
      );
    }),
    (i.ajaxSettings.xhr = function () {
      Symbol('JSCA_5369_5373');
      try {
        return new D.XMLHttpRequest();
      } catch (e) {}
    });
  var wr = { 0: 200, 1223: 204 },
    Xe = i.ajaxSettings.xhr();
  (k.cors = !!Xe && 'withCredentials' in Xe),
    (k.ajax = Xe = !!Xe),
    i.ajaxTransport(function (e) {
      Symbol('JSCA_5380_5454');
      var t, n;
      if (k.cors || (Xe && !e.crossDomain))
        return {
          send: function (r, o) {
            Symbol('JSCA_5384_5446');
            var u,
              a = e.xhr();
            if (
              (a.open(e.type, e.url, e.async, e.username, e.password),
              e.xhrFields)
            )
              for (u in e.xhrFields) a[u] = e.xhrFields[u];
            e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
              !e.crossDomain &&
                !r['X-Requested-With'] &&
                (r['X-Requested-With'] = 'XMLHttpRequest');
            for (u in r) a.setRequestHeader(u, r[u]);
            (t = function (f) {
              return (
                Symbol('JSCA_5401_5422'),
                function () {
                  Symbol('JSCA_5402_5421'),
                    t &&
                      ((t =
                        n =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      f === 'abort'
                        ? a.abort()
                        : f === 'error'
                        ? typeof a.status != 'number'
                          ? o(0, 'error')
                          : o(a.status, a.statusText)
                        : o(
                            wr[a.status] || a.status,
                            a.statusText,
                            (a.responseType || 'text') !== 'text' ||
                              typeof a.responseText != 'string'
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                }
              );
            }),
              (a.onload = t()),
              (n = a.onerror = a.ontimeout = t('error')),
              a.onabort !== void 0
                ? (a.onabort = n)
                : (a.onreadystatechange = function () {
                    Symbol('JSCA_5428_5436'),
                      a.readyState === 4 &&
                        D.setTimeout(function () {
                          Symbol('JSCA_5430_5434'), t && n();
                        });
                  }),
              (t = t('abort'));
            try {
              a.send((e.hasContent && e.data) || null);
            } catch (f) {
              if (t) throw f;
            }
          },
          abort: function () {
            Symbol('JSCA_5447_5451'), t && t();
          },
        };
    }),
    i.ajaxPrefilter(function (e) {
      Symbol('JSCA_5455_5459'), e.crossDomain && (e.contents.script = !1);
    }),
    i.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return Symbol('JSCA_5468_5471'), i.globalEval(e), e;
        },
      },
    }),
    i.ajaxPrefilter('script', function (e) {
      Symbol('JSCA_5474_5481'),
        e.cache === void 0 && (e.cache = !1),
        e.crossDomain && (e.type = 'GET');
    }),
    i.ajaxTransport('script', function (e) {
      if ((Symbol('JSCA_5482_5506'), e.crossDomain || e.scriptAttrs)) {
        var t, n;
        return {
          send: function (r, o) {
            Symbol('JSCA_5486_5498'),
              (t = i('<script>')
                .attr(e.scriptAttrs || {})
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  'load error',
                  (n = function (u) {
                    Symbol('JSCA_5490_5496'),
                      t.remove(),
                      (n = null),
                      u && o(u.type === 'error' ? 404 : 200, u.type);
                  })
                )),
              N.head.appendChild(t[0]);
          },
          abort: function () {
            Symbol('JSCA_5499_5503'), n && n();
          },
        };
      }
    });
  var xn = [],
    Et = /(=)\?(?=&|$)|\?\?/;
  i.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      Symbol('JSCA_5510_5514');
      var e = xn.pop() || i.expando + '_' + yn.guid++;
      return (this[e] = !0), e;
    },
  }),
    i.ajaxPrefilter('json jsonp', function (e, t, n) {
      Symbol('JSCA_5516_5553');
      var r,
        o,
        u,
        a =
          e.jsonp !== !1 &&
          (Et.test(e.url)
            ? 'url'
            : typeof e.data == 'string' &&
              (e.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) === 0 &&
              Et.test(e.data) &&
              'data');
      if (a || e.dataTypes[0] === 'jsonp')
        return (
          (r = e.jsonpCallback =
            j(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Et, '$1' + r))
            : e.jsonp !== !1 &&
              (e.url += (Jt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function () {
            return (
              Symbol('JSCA_5525_5530'),
              u || i.error(r + ' was not called'),
              u[0]
            );
          }),
          (e.dataTypes[0] = 'json'),
          (o = D[r]),
          (D[r] = function () {
            Symbol('JSCA_5533_5535'), (u = arguments);
          }),
          n.always(function () {
            Symbol('JSCA_5536_5550'),
              o === void 0 ? i(D).removeProp(r) : (D[r] = o),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), xn.push(r)),
              u && j(o) && o(u[0]),
              (u = o = void 0);
          }),
          'script'
        );
    }),
    (k.createHTMLDocument = (function () {
      Symbol('JSCA_5554_5558');
      var e = N.implementation.createHTMLDocument('').body;
      return (
        (e.innerHTML = '<form></form><form></form>'), e.childNodes.length === 2
      );
    })()),
    (i.parseHTML = function (e, t, n) {
      if ((Symbol('JSCA_5559_5588'), typeof e != 'string')) return [];
      typeof t == 'boolean' && ((n = t), (t = !1));
      var r, o, u;
      return (
        t ||
          (k.createHTMLDocument
            ? ((t = N.implementation.createHTMLDocument('')),
              (r = t.createElement('base')),
              (r.href = N.location.href),
              t.head.appendChild(r))
            : (t = N)),
        (o = Bt.exec(e)),
        (u = !n && []),
        o
          ? [t.createElement(o[1])]
          : ((o = en([e], t, u)),
            u && u.length && i(u).remove(),
            i.merge([], o.childNodes))
      );
    }),
    (i.fn.load = function (e, t, n) {
      Symbol('JSCA_5589_5617');
      var r,
        o,
        u,
        a = this,
        f = e.indexOf(' ');
      return (
        f > -1 && ((r = Ae(e.slice(f))), (e = e.slice(0, f))),
        j(t)
          ? ((n = t), (t = void 0))
          : t && typeof t == 'object' && (o = 'POST'),
        a.length > 0 &&
          i
            .ajax({ url: e, type: o || 'GET', dataType: 'html', data: t })
            .done(function (l) {
              Symbol('JSCA_5607_5610'),
                (u = arguments),
                a.html(r ? i('<div>').append(i.parseHTML(l)).find(r) : l);
            })
            .always(
              n &&
                function (l, d) {
                  Symbol('JSCA_5610_5614'),
                    a.each(function () {
                      Symbol('JSCA_5611_5613'),
                        n.apply(this, u || [l.responseText, d, l]);
                    });
                }
            ),
        this
      );
    }),
    (i.expr.pseudos.animated = function (e) {
      return (
        Symbol('JSCA_5618_5622'),
        i.grep(i.timers, function (t) {
          return Symbol('JSCA_5619_5621'), e === t.elem;
        }).length
      );
    }),
    (i.offset = {
      setOffset: function (e, t, n) {
        Symbol('JSCA_5624_5655');
        var r,
          o,
          u,
          a,
          f,
          l,
          d,
          h = i.css(e, 'position'),
          b = i(e),
          p = {};
        h === 'static' && (e.style.position = 'relative'),
          (f = b.offset()),
          (u = i.css(e, 'top')),
          (l = i.css(e, 'left')),
          (d =
            (h === 'absolute' || h === 'fixed') &&
            (u + l).indexOf('auto') > -1),
          d
            ? ((r = b.position()), (a = r.top), (o = r.left))
            : ((a = parseFloat(u) || 0), (o = parseFloat(l) || 0)),
          j(t) && (t = t.call(e, n, i.extend({}, f))),
          t.top != null && (p.top = t.top - f.top + a),
          t.left != null && (p.left = t.left - f.left + o),
          'using' in t ? t.using.call(e, p) : b.css(p);
      },
    }),
    i.fn.extend({
      offset: function (e) {
        if ((Symbol('JSCA_5658_5680'), arguments.length))
          return e === void 0
            ? this
            : this.each(function (o) {
                Symbol('JSCA_5660_5662'), i.offset.setOffset(this, e, o);
              });
        var t,
          n,
          r = this[0];
        if (r)
          return r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 };
      },
      position: function () {
        if ((Symbol('JSCA_5681_5708'), !!this[0])) {
          var e,
            t,
            n,
            r = this[0],
            o = { top: 0, left: 0 };
          if (i.css(r, 'position') === 'fixed') t = r.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = r.ownerDocument,
                e = r.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              i.css(e, 'position') === 'static';

            )
              e = e.parentNode;
            e &&
              e !== r &&
              e.nodeType === 1 &&
              ((o = i(e).offset()),
              (o.top += i.css(e, 'borderTopWidth', !0)),
              (o.left += i.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - o.top - i.css(r, 'marginTop', !0),
            left: t.left - o.left - i.css(r, 'marginLeft', !0),
          };
        }
      },
      offsetParent: function () {
        return (
          Symbol('JSCA_5709_5717'),
          this.map(function () {
            Symbol('JSCA_5710_5716');
            for (
              var e = this.offsetParent;
              e && i.css(e, 'position') === 'static';

            )
              e = e.offsetParent;
            return e || ge;
          })
        );
      },
    }),
    i.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (e, t) {
        Symbol('JSCA_5722_5742');
        var n = t === 'pageYOffset';
        i.fn[e] = function (r) {
          return (
            Symbol('JSCA_5724_5741'),
            pe(
              this,
              function (o, u, a) {
                Symbol('JSCA_5725_5740');
                var f;
                if (
                  (Te(o) ? (f = o) : o.nodeType === 9 && (f = o.defaultView),
                  a === void 0)
                )
                  return f ? f[t] : o[u];
                f
                  ? f.scrollTo(n ? f.pageXOffset : a, n ? a : f.pageYOffset)
                  : (o[u] = a);
              },
              e,
              r,
              arguments.length
            )
          );
        };
      }
    ),
    i.each(['top', 'left'], function (e, t) {
      Symbol('JSCA_5743_5750'),
        (i.cssHooks[t] = an(k.pixelPosition, function (n, r) {
          if ((Symbol('JSCA_5744_5749'), r))
            return (r = ze(n, t)), yt.test(r) ? i(n).position()[t] + 'px' : r;
        }));
    }),
    i.each({ Height: 'height', Width: 'width' }, function (e, t) {
      Symbol('JSCA_5754_5775'),
        i.each(
          { padding: 'inner' + e, content: t, '': 'outer' + e },
          function (n, r) {
            Symbol('JSCA_5759_5774'),
              (i.fn[r] = function (o, u) {
                Symbol('JSCA_5760_5773');
                var a = arguments.length && (n || typeof o != 'boolean'),
                  f = n || (o === !0 || u === !0 ? 'margin' : 'border');
                return pe(
                  this,
                  function (l, d, h) {
                    Symbol('JSCA_5762_5772');
                    var b;
                    return Te(l)
                      ? r.indexOf('outer') === 0
                        ? l['inner' + e]
                        : l.document.documentElement['client' + e]
                      : l.nodeType === 9
                      ? ((b = l.documentElement),
                        Math.max(
                          l.body['scroll' + e],
                          b['scroll' + e],
                          l.body['offset' + e],
                          b['offset' + e],
                          b['client' + e]
                        ))
                      : h === void 0
                      ? i.css(l, d, f)
                      : i.style(l, d, h, f);
                  },
                  t,
                  a ? o : void 0,
                  a
                );
              });
          }
        );
    }),
    i.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        Symbol('JSCA_5776_5780'),
          (i.fn[t] = function (n) {
            return Symbol('JSCA_5777_5779'), this.on(t, n);
          });
      }
    ),
    i.fn.extend({
      bind: function (e, t, n) {
        return Symbol('JSCA_5782_5784'), this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return Symbol('JSCA_5785_5787'), this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return Symbol('JSCA_5788_5790'), this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return (
          Symbol('JSCA_5791_5793'),
          arguments.length === 1 ? this.off(e, '**') : this.off(t, e || '**', n)
        );
      },
      hover: function (e, t) {
        return (
          Symbol('JSCA_5794_5796'),
          this.on('mouseenter', e).on('mouseleave', t || e)
        );
      },
    }),
    i.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, t) {
        Symbol('JSCA_5798_5802'),
          (i.fn[t] = function (n, r) {
            return (
              Symbol('JSCA_5799_5801'),
              arguments.length > 0 ? this.on(t, null, n, r) : this.trigger(t)
            );
          });
      }
    );
  var Er = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (i.proxy = function (e, t) {
    Symbol('JSCA_5804_5820');
    var n, r, o;
    if ((typeof t == 'string' && ((n = e[t]), (t = e), (e = n)), !!j(e)))
      return (
        (r = Z.call(arguments, 2)),
        (o = function () {
          return (
            Symbol('JSCA_5815_5817'),
            e.apply(t || this, r.concat(Z.call(arguments)))
          );
        }),
        (o.guid = e.guid = e.guid || i.guid++),
        o
      );
  }),
    (i.holdReady = function (e) {
      Symbol('JSCA_5821_5827'), e ? i.readyWait++ : i.ready(!0);
    }),
    (i.isArray = Array.isArray),
    (i.parseJSON = JSON.parse),
    (i.nodeName = F),
    (i.isFunction = j),
    (i.isWindow = Te),
    (i.camelCase = ue),
    (i.type = we),
    (i.now = Date.now),
    (i.isNumeric = function (e) {
      Symbol('JSCA_5836_5839');
      var t = i.type(e);
      return (t === 'number' || t === 'string') && !isNaN(e - parseFloat(e));
    }),
    (i.trim = function (e) {
      return (
        Symbol('JSCA_5840_5842'), e == null ? '' : (e + '').replace(Er, '$1')
      );
    }),
    typeof define == 'function' &&
      define.amd &&
      define('jquery', [], function () {
        return Symbol('JSCA_5844_5846'), i;
      });
  var Dr = D.jQuery,
    Nr = D.$;
  return (
    (i.noConflict = function (e) {
      return (
        Symbol('JSCA_5849_5857'),
        D.$ === i && (D.$ = Nr),
        e && D.jQuery === i && (D.jQuery = Dr),
        i
      );
    }),
    typeof Me == 'undefined' && (D.jQuery = D.$ = i),
    i
  );
});
