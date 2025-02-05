!(function (e, t) {
  Symbol('JSCA_1_13'),
    'object' == typeof module && 'object' == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if ((Symbol('JSCA_4_9'), !e.document))
                throw new Error('jQuery requires a window with a document');
              return t(e);
            })
      : t(e);
})('undefined' != typeof window ? window : this, function (e, t) {
  Symbol('JSCA_13_5862');
  var n = [],
    o = Object.getPrototypeOf,
    r = n.slice,
    i = n.flat
      ? function (e) {
          return Symbol('JSCA_18_20'), n.flat.call(e);
        }
      : function (e) {
          return Symbol('JSCA_20_22'), n.concat.apply([], e);
        },
    l = n.push,
    a = n.indexOf,
    s = {},
    u = s.toString,
    c = s.hasOwnProperty,
    f = c.toString,
    p = f.call(Object),
    d = {},
    S = function (e) {
      return (
        Symbol('JSCA_31_33'),
        'function' == typeof e &&
          'number' != typeof e.nodeType &&
          'function' != typeof e.item
      );
    },
    y = function (e) {
      return Symbol('JSCA_34_36'), null != e && e === e.window;
    },
    _ = e.document,
    m = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function h(e, t, n) {
    Symbol('JSCA_44_57');
    var o,
      r,
      i = (n = n || _).createElement('script');
    if (((i.text = e), t))
      for (o in m)
        (r = t[o] || (t.getAttribute && t.getAttribute(o))) &&
          i.setAttribute(o, r);
    n.head.appendChild(i).parentNode.removeChild(i);
  }
  function b(e) {
    return (
      Symbol('JSCA_58_63'),
      null == e
        ? e + ''
        : 'object' == typeof e || 'function' == typeof e
        ? s[u.call(e)] || 'object'
        : typeof e
    );
  }
  var C = '3.7.1',
    A = /HTML$/i,
    g = function (e, t) {
      return Symbol('JSCA_64_66'), new g.fn.init(e, t);
    };
  function v(e) {
    Symbol('JSCA_295_301');
    var t = !!e && 'length' in e && e.length,
      n = b(e);
    return (
      !S(e) &&
      !y(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && t > 0 && t - 1 in e))
    );
  }
  function J(e, t) {
    return (
      Symbol('JSCA_302_304'),
      e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    );
  }
  (g.fn = g.prototype =
    {
      jquery: C,
      constructor: g,
      length: 0,
      toArray: function () {
        return Symbol('JSCA_71_73'), r.call(this);
      },
      get: function (e) {
        return (
          Symbol('JSCA_74_79'),
          null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
        );
      },
      pushStack: function (e) {
        Symbol('JSCA_80_84');
        var t = g.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return Symbol('JSCA_85_87'), g.each(this, e);
      },
      map: function (e) {
        return (
          Symbol('JSCA_88_92'),
          this.pushStack(
            g.map(this, function (t, n) {
              return Symbol('JSCA_89_91'), e.call(t, n, t);
            })
          )
        );
      },
      slice: function () {
        return Symbol('JSCA_93_95'), this.pushStack(r.apply(this, arguments));
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
            g.grep(this, function (e, t) {
              return Symbol('JSCA_103_105'), (t + 1) % 2;
            })
          )
        );
      },
      odd: function () {
        return (
          Symbol('JSCA_107_111'),
          this.pushStack(
            g.grep(this, function (e, t) {
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
      push: l,
      sort: n.sort,
      splice: n.splice,
    }),
    (g.extend = g.fn.extend =
      function () {
        Symbol('JSCA_123_162');
        var e,
          t,
          n,
          o,
          r,
          i,
          l = arguments[0] || {},
          a = 1,
          s = arguments.length,
          u = !1;
        for (
          'boolean' == typeof l && ((u = l), (l = arguments[a] || {}), a++),
            'object' == typeof l || S(l) || (l = {}),
            a === s && ((l = this), a--);
          a < s;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (o = e[t]),
                '__proto__' !== t &&
                  l !== o &&
                  (u && o && (g.isPlainObject(o) || (r = Array.isArray(o)))
                    ? ((n = l[t]),
                      (i =
                        r && !Array.isArray(n)
                          ? []
                          : r || g.isPlainObject(n)
                          ? n
                          : {}),
                      (r = !1),
                      (l[t] = g.extend(u, i, o)))
                    : void 0 !== o && (l[t] = o));
        return l;
      }),
    g.extend({
      expando: 'jQuery' + (C + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw (Symbol('JSCA_166_168'), new Error(e));
      },
      noop: function () {
        Symbol('JSCA_169_169');
      },
      isPlainObject: function (e) {
        var t, n;
        return (
          Symbol('JSCA_170_181'),
          !(!e || '[object Object]' !== u.call(e)) &&
            (!(t = o(e)) ||
              ('function' ==
                typeof (n = c.call(t, 'constructor') && t.constructor) &&
                f.call(n) === p))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in (Symbol('JSCA_182_188'), e)) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        Symbol('JSCA_189_193'), h(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        Symbol('JSCA_194_211');
        var n,
          o = 0;
        if (v(e))
          for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
        else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
        return e;
      },
      text: function (e) {
        Symbol('JSCA_212_229');
        var t,
          n = '',
          o = 0,
          r = e.nodeType;
        if (!r) for (; (t = e[o++]); ) n += g.text(t);
        return 1 === r || 11 === r
          ? e.textContent
          : 9 === r
          ? e.documentElement.textContent
          : 3 === r || 4 === r
          ? e.nodeValue
          : n;
      },
      makeArray: function (e, t) {
        Symbol('JSCA_230_240');
        var n = t || [];
        return (
          null != e &&
            (v(Object(e))
              ? g.merge(n, 'string' == typeof e ? [e] : e)
              : l.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return Symbol('JSCA_241_243'), null == t ? -1 : a.call(t, e, n);
      },
      isXMLDoc: function (e) {
        Symbol('JSCA_244_247');
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !A.test(t || (n && n.nodeName) || 'HTML');
      },
      merge: function (e, t) {
        Symbol('JSCA_248_255');
        for (var n = +t.length, o = 0, r = e.length; o < n; o++) e[r++] = t[o];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        Symbol('JSCA_256_265');
        for (var o = [], r = 0, i = e.length, l = !n; r < i; r++)
          !t(e[r], r) !== l && o.push(e[r]);
        return o;
      },
      map: function (e, t, n) {
        Symbol('JSCA_266_285');
        var o,
          r,
          l = 0,
          a = [];
        if (v(e))
          for (o = e.length; l < o; l++)
            null != (r = t(e[l], l, n)) && a.push(r);
        else for (l in e) null != (r = t(e[l], l, n)) && a.push(r);
        return i(a);
      },
      guid: 1,
      support: d,
    }),
    'function' == typeof Symbol && (g.fn[Symbol.iterator] = n[Symbol.iterator]),
    g.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        Symbol('JSCA_292_294'), (s['[object ' + t + ']'] = t.toLowerCase());
      }
    );
  var x = n.pop,
    w = n.sort,
    T = n.splice,
    E = '[\\x20\\t\\r\\n\\f]',
    k = new RegExp('^' + E + '+|((?:^|[^\\\\])(?:\\\\.)*)' + E + '+$', 'g');
  g.contains = function (e, t) {
    Symbol('JSCA_310_313');
    var n = t && t.parentNode;
    return (
      e === n ||
      !(
        !n ||
        1 !== n.nodeType ||
        !(e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    );
  };
  var j = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function D(e, t) {
    return (
      Symbol('JSCA_315_323'),
      t
        ? '\0' === e
          ? '�'
          : e.slice(0, -1) +
            '\\' +
            e.charCodeAt(e.length - 1).toString(16) +
            ' '
        : '\\' + e
    );
  }
  g.escapeSelector = function (e) {
    return Symbol('JSCA_324_326'), (e + '').replace(j, D);
  };
  var N = _,
    q = l;
  !(function () {
    Symbol('JSCA_328_1396');
    var t,
      o,
      i,
      l,
      s,
      u,
      f,
      p,
      S,
      y,
      _ = q,
      m = g.expando,
      h = 0,
      b = 0,
      C = ee(),
      A = ee(),
      v = ee(),
      j = ee(),
      D = function (e, t) {
        return Symbol('JSCA_329_334'), e === t && (s = !0), 0;
      },
      L =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      H =
        '(?:\\\\[\\da-fA-F]{1,6}' +
        E +
        '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      O =
        '\\[' +
        E +
        '*(' +
        H +
        ')(?:' +
        E +
        '*([*^$|!~]?=)' +
        E +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        H +
        '))|)' +
        E +
        '*\\]',
      P =
        ':(' +
        H +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        O +
        ')*)|.*)\\)|)',
      M = new RegExp(E + '+', 'g'),
      R = new RegExp('^' + E + '*,' + E + '*'),
      I = new RegExp('^' + E + '*([>+~]|' + E + ')' + E + '*'),
      W = new RegExp(E + '|>'),
      F = new RegExp(P),
      $ = new RegExp('^' + H + '$'),
      B = {
        ID: new RegExp('^#(' + H + ')'),
        CLASS: new RegExp('^\\.(' + H + ')'),
        TAG: new RegExp('^(' + H + '|[*])'),
        ATTR: new RegExp('^' + O),
        PSEUDO: new RegExp('^' + P),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            E +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            E +
            '*(?:([+-]|)' +
            E +
            '*(\\d+)|))' +
            E +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + L + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            E +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            E +
            '*((?:-\\d)?\\d*)' +
            E +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      z = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      U = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      V = /[+~]/,
      G = new RegExp('\\\\[\\da-fA-F]{1,6}' + E + '?|\\\\([^\\r\\n\\f])', 'g'),
      Y = function (e, t) {
        Symbol('JSCA_343_349');
        var n = '0x' + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      Q = function () {
        Symbol('JSCA_349_351'), se();
      },
      K = pe(
        function (e) {
          return Symbol('JSCA_351_353'), !0 === e.disabled && J(e, 'fieldset');
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      _.apply((n = r.call(N.childNodes)), N.childNodes),
        n[N.childNodes.length].nodeType;
    } catch (e) {
      _ = {
        apply: function (e, t) {
          Symbol('JSCA_367_369'), q.apply(e, r.call(t));
        },
        call: function (e) {
          Symbol('JSCA_370_372'), q.apply(e, r.call(arguments, 1));
        },
      };
    }
    function Z(e, t, n, o) {
      Symbol('JSCA_375_443');
      var r,
        i,
        l,
        a,
        s,
        c,
        f,
        y = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        'string' != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
      )
        return n;
      if (!o && (se(t), (t = t || u), p)) {
        if (11 !== h && (s = U.exec(e)))
          if ((r = s[1])) {
            if (9 === h) {
              if (!(l = t.getElementById(r))) return n;
              if (l.id === r) return _.call(n, l), n;
            } else if (
              y &&
              (l = y.getElementById(r)) &&
              Z.contains(t, l) &&
              l.id === r
            )
              return _.call(n, l), n;
          } else {
            if (s[2]) return _.apply(n, t.getElementsByTagName(e)), n;
            if ((r = s[3]) && t.getElementsByClassName)
              return _.apply(n, t.getElementsByClassName(r)), n;
          }
        if (!(j[e + ' '] || (S && S.test(e)))) {
          if (((f = e), (y = t), 1 === h && (W.test(e) || I.test(e)))) {
            for (
              ((y = (V.test(e) && ae(t.parentNode)) || t) == t && d.scope) ||
                ((a = t.getAttribute('id'))
                  ? (a = g.escapeSelector(a))
                  : t.setAttribute('id', (a = m))),
                i = (c = ce(e)).length;
              i--;

            )
              c[i] = (a ? '#' + a : ':scope') + ' ' + fe(c[i]);
            f = c.join(',');
          }
          try {
            return _.apply(n, y.querySelectorAll(f)), n;
          } catch (t) {
            j(e, !0);
          } finally {
            a === m && t.removeAttribute('id');
          }
        }
      }
      return he(e.replace(k, '$1'), t, n, o);
    }
    function ee() {
      Symbol('JSCA_444_453');
      var e = [];
      return function t(n, r) {
        return (
          Symbol('JSCA_446_451'),
          e.push(n + ' ') > o.cacheLength && delete t[e.shift()],
          (t[n + ' '] = r)
        );
      };
    }
    function te(e) {
      return Symbol('JSCA_454_457'), (e[m] = !0), e;
    }
    function ne(e) {
      Symbol('JSCA_458_470');
      var t = u.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function oe(e) {
      return (
        Symbol('JSCA_471_475'),
        function (t) {
          return Symbol('JSCA_472_474'), J(t, 'input') && t.type === e;
        }
      );
    }
    function re(e) {
      return (
        Symbol('JSCA_476_480'),
        function (t) {
          return (
            Symbol('JSCA_477_479'),
            (J(t, 'input') || J(t, 'button')) && t.type === e
          );
        }
      );
    }
    function ie(e) {
      return (
        Symbol('JSCA_481_500'),
        function (t) {
          return (
            Symbol('JSCA_482_499'),
            'form' in t
              ? t.parentNode && !1 === t.disabled
                ? 'label' in t
                  ? 'label' in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && K(t) === e)
                : t.disabled === e
              : 'label' in t && t.disabled === e
          );
        }
      );
    }
    function le(e) {
      return (
        Symbol('JSCA_501_513'),
        te(function (t) {
          return (
            Symbol('JSCA_502_512'),
            (t = +t),
            te(function (n, o) {
              Symbol('JSCA_504_511');
              for (var r, i = e([], n.length, t), l = i.length; l--; )
                n[(r = i[l])] && (n[r] = !(o[r] = n[r]));
            })
          );
        })
      );
    }
    function ae(e) {
      return (
        Symbol('JSCA_514_516'), e && void 0 !== e.getElementsByTagName && e
      );
    }
    function se(e) {
      Symbol('JSCA_517_657');
      var t,
        n = e ? e.ownerDocument || e : N;
      return n != u && 9 === n.nodeType && n.documentElement
        ? ((f = (u = n).documentElement),
          (p = !g.isXMLDoc(u)),
          (y = f.matches || f.webkitMatchesSelector || f.msMatchesSelector),
          f.msMatchesSelector &&
            N != u &&
            (t = u.defaultView) &&
            t.top !== t &&
            t.addEventListener('unload', Q),
          (d.getById = ne(function (e) {
            return (
              Symbol('JSCA_529_532'),
              (f.appendChild(e).id = g.expando),
              !u.getElementsByName || !u.getElementsByName(g.expando).length
            );
          })),
          (d.disconnectedMatch = ne(function (e) {
            return Symbol('JSCA_533_535'), y.call(e, '*');
          })),
          (d.scope = ne(function () {
            return Symbol('JSCA_536_538'), u.querySelectorAll(':scope');
          })),
          (d.cssHas = ne(function () {
            Symbol('JSCA_539_546');
            try {
              return u.querySelector(':has(*,:jqfake)'), !1;
            } catch (e) {
              return !0;
            }
          })),
          d.getById
            ? ((o.filter.ID = function (e) {
                Symbol('JSCA_548_553');
                var t = e.replace(G, Y);
                return function (e) {
                  return Symbol('JSCA_550_552'), e.getAttribute('id') === t;
                };
              }),
              (o.find.ID = function (e, t) {
                if (
                  (Symbol('JSCA_554_559'), void 0 !== t.getElementById && p)
                ) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((o.filter.ID = function (e) {
                Symbol('JSCA_561_567');
                var t = e.replace(G, Y);
                return function (e) {
                  Symbol('JSCA_563_566');
                  var n =
                    void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                  return n && n.value === t;
                };
              }),
              (o.find.ID = function (e, t) {
                if (
                  (Symbol('JSCA_568_587'), void 0 !== t.getElementById && p)
                ) {
                  var n,
                    o,
                    r,
                    i = t.getElementById(e);
                  if (i) {
                    if ((n = i.getAttributeNode('id')) && n.value === e)
                      return [i];
                    for (r = t.getElementsByName(e), o = 0; (i = r[o++]); )
                      if ((n = i.getAttributeNode('id')) && n.value === e)
                        return [i];
                  }
                  return [];
                }
              })),
          (o.find.TAG = function (e, t) {
            return (
              Symbol('JSCA_589_595'),
              void 0 !== t.getElementsByTagName
                ? t.getElementsByTagName(e)
                : t.querySelectorAll(e)
            );
          }),
          (o.find.CLASS = function (e, t) {
            if (
              (Symbol('JSCA_596_600'), void 0 !== t.getElementsByClassName && p)
            )
              return t.getElementsByClassName(e);
          }),
          (S = []),
          ne(function (e) {
            var t;
            Symbol('JSCA_602_630'),
              (f.appendChild(e).innerHTML =
                "<a id='" +
                m +
                "' href='' disabled='disabled'></a><select id='" +
                m +
                "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll('[selected]').length ||
                S.push('\\[' + E + '*(?:value|' + L + ')'),
              e.querySelectorAll('[id~=' + m + '-]').length || S.push('~='),
              e.querySelectorAll('a#' + m + '+*').length || S.push('.#.+[+~]'),
              e.querySelectorAll(':checked').length || S.push(':checked'),
              (t = u.createElement('input')).setAttribute('type', 'hidden'),
              e.appendChild(t).setAttribute('name', 'D'),
              (f.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(':disabled').length &&
                S.push(':enabled', ':disabled'),
              (t = u.createElement('input')).setAttribute('name', ''),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                S.push('\\[' + E + '*name' + E + '*=' + E + '*(?:\'\'|"")');
          }),
          d.cssHas || S.push(':has'),
          (S = S.length && new RegExp(S.join('|'))),
          (D = function (e, t) {
            if ((Symbol('JSCA_635_655'), e === t)) return (s = !0), 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return (
              n ||
              (1 &
                (n =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1) ||
              (!d.sortDetached && t.compareDocumentPosition(e) === n)
                ? e === u || (e.ownerDocument == N && Z.contains(N, e))
                  ? -1
                  : t === u || (t.ownerDocument == N && Z.contains(N, t))
                  ? 1
                  : l
                  ? a.call(l, e) - a.call(l, t)
                  : 0
                : 4 & n
                ? -1
                : 1)
            );
          }),
          u)
        : u;
    }
    for (t in ((Z.matches = function (e, t) {
      return Symbol('JSCA_658_660'), Z(e, null, null, t);
    }),
    (Z.matchesSelector = function (e, t) {
      if (
        (Symbol('JSCA_661_674'), se(e), p && !j[t + ' '] && (!S || !S.test(t)))
      )
        try {
          var n = y.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          j(t, !0);
        }
      return Z(t, u, null, [e]).length > 0;
    }),
    (Z.contains = function (e, t) {
      return (
        Symbol('JSCA_675_680'),
        (e.ownerDocument || e) != u && se(e),
        g.contains(e, t)
      );
    }),
    (Z.attr = function (e, t) {
      Symbol('JSCA_681_690'), (e.ownerDocument || e) != u && se(e);
      var n = o.attrHandle[t.toLowerCase()],
        r = n && c.call(o.attrHandle, t.toLowerCase()) ? n(e, t, !p) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }),
    (Z.error = function (e) {
      throw (
        (Symbol('JSCA_691_693'),
        new Error('Syntax error, unrecognized expression: ' + e))
      );
    }),
    (g.uniqueSort = function (e) {
      Symbol('JSCA_694_711');
      var t,
        n = [],
        o = 0,
        i = 0;
      if (
        ((s = !d.sortStable),
        (l = !d.sortStable && r.call(e, 0)),
        w.call(e, D),
        s)
      ) {
        for (; (t = e[i++]); ) t === e[i] && (o = n.push(i));
        for (; o--; ) T.call(e, n[o], 1);
      }
      return (l = null), e;
    }),
    (g.fn.uniqueSort = function () {
      return (
        Symbol('JSCA_712_714'), this.pushStack(g.uniqueSort(r.apply(this)))
      );
    }),
    (o = g.expr =
      {
        cacheLength: 50,
        createPseudo: te,
        match: B,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              Symbol('JSCA_738_745'),
              (e[1] = e[1].replace(G, Y)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(G, Y)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              Symbol('JSCA_746_758'),
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || Z.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && Z.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            Symbol('JSCA_759_771');
            var t,
              n = !e[6] && e[2];
            return B.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    F.test(n) &&
                    (t = ce(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            Symbol('JSCA_774_781');
            var t = e.replace(G, Y).toLowerCase();
            return '*' === e
              ? function () {
                  return Symbol('JSCA_776_778'), !0;
                }
              : function (e) {
                  return Symbol('JSCA_778_780'), J(e, t);
                };
          },
          CLASS: function (e) {
            Symbol('JSCA_782_787');
            var t = C[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + E + ')' + e + '(' + E + '|$)')) &&
                C(e, function (e) {
                  return (
                    Symbol('JSCA_784_786'),
                    t.test(
                      ('string' == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute('class')) ||
                        ''
                    )
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return (
              Symbol('JSCA_788_821'),
              function (o) {
                Symbol('JSCA_789_820');
                var r = Z.attr(o, e);
                return null == r
                  ? '!=' === t
                  : !t ||
                      ((r += ''),
                      '=' === t
                        ? r === n
                        : '!=' === t
                        ? r !== n
                        : '^=' === t
                        ? n && 0 === r.indexOf(n)
                        : '*=' === t
                        ? n && r.indexOf(n) > -1
                        : '$=' === t
                        ? n && r.slice(-n.length) === n
                        : '~=' === t
                        ? (' ' + r.replace(M, ' ') + ' ').indexOf(n) > -1
                        : '|=' === t &&
                          (r === n || r.slice(0, n.length + 1) === n + '-'));
              }
            );
          },
          CHILD: function (e, t, n, o, r) {
            Symbol('JSCA_822_879');
            var i = 'nth' !== e.slice(0, 3),
              l = 'last' !== e.slice(-4),
              a = 'of-type' === t;
            return 1 === o && 0 === r
              ? function (e) {
                  return Symbol('JSCA_824_826'), !!e.parentNode;
                }
              : function (t, n, s) {
                  Symbol('JSCA_826_878');
                  var u,
                    c,
                    f,
                    p,
                    d,
                    S = i !== l ? 'nextSibling' : 'previousSibling',
                    y = t.parentNode,
                    _ = a && t.nodeName.toLowerCase(),
                    b = !s && !a,
                    C = !1;
                  if (y) {
                    if (i) {
                      for (; S; ) {
                        for (f = t; (f = f[S]); )
                          if (a ? J(f, _) : 1 === f.nodeType) return !1;
                        d = S = 'only' === e && !d && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((d = [l ? y.firstChild : y.lastChild]), l && b)) {
                      for (
                        C =
                          (p =
                            (u = (c = y[m] || (y[m] = {}))[e] || [])[0] === h &&
                            u[1]) && u[2],
                          f = p && y.childNodes[p];
                        (f = (++p && f && f[S]) || (C = p = 0) || d.pop());

                      )
                        if (1 === f.nodeType && ++C && f === t) {
                          c[e] = [h, p, C];
                          break;
                        }
                    } else if (
                      (b &&
                        (C = p =
                          (u = (c = t[m] || (t[m] = {}))[e] || [])[0] === h &&
                          u[1]),
                      !1 === C)
                    )
                      for (
                        ;
                        (f = (++p && f && f[S]) || (C = p = 0) || d.pop()) &&
                        (!(a ? J(f, _) : 1 === f.nodeType) ||
                          !++C ||
                          (b && ((c = f[m] || (f[m] = {}))[e] = [h, C]),
                          f !== t));

                      );
                    return (C -= r) === o || (C % o == 0 && C / o >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            Symbol('JSCA_880_898');
            var n,
              r =
                o.pseudos[e] ||
                o.setFilters[e.toLowerCase()] ||
                Z.error('unsupported pseudo: ' + e);
            return r[m]
              ? r(t)
              : r.length > 1
              ? ((n = [e, e, '', t]),
                o.setFilters.hasOwnProperty(e.toLowerCase())
                  ? te(function (e, n) {
                      Symbol('JSCA_887_893');
                      for (var o, i = r(e, t), l = i.length; l--; )
                        e[(o = a.call(e, i[l]))] = !(n[o] = i[l]);
                    })
                  : function (e) {
                      return Symbol('JSCA_893_895'), r(e, 0, n);
                    })
              : r;
          },
        },
        pseudos: {
          not: te(function (e) {
            Symbol('JSCA_901_916');
            var t = [],
              n = [],
              o = me(e.replace(k, '$1'));
            return o[m]
              ? te(function (e, t, n, r) {
                  Symbol('JSCA_903_910');
                  for (var i, l = o(e, null, r, []), a = e.length; a--; )
                    (i = l[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, r, i) {
                  return (
                    Symbol('JSCA_910_915'),
                    (t[0] = e),
                    o(t, null, i, n),
                    (t[0] = null),
                    !n.pop()
                  );
                };
          }),
          has: te(function (e) {
            return (
              Symbol('JSCA_917_921'),
              function (t) {
                return Symbol('JSCA_918_920'), Z(e, t).length > 0;
              }
            );
          }),
          contains: te(function (e) {
            return (
              Symbol('JSCA_922_927'),
              (e = e.replace(G, Y)),
              function (t) {
                return (
                  Symbol('JSCA_924_926'),
                  (t.textContent || g.text(t)).indexOf(e) > -1
                );
              }
            );
          }),
          lang: te(function (e) {
            return (
              Symbol('JSCA_928_943'),
              $.test(e || '') || Z.error('unsupported lang: ' + e),
              (e = e.replace(G, Y).toLowerCase()),
              function (t) {
                var n;
                Symbol('JSCA_933_942');
                do {
                  if (
                    (n = p
                      ? t.lang
                      : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-')
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            Symbol('JSCA_944_947');
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return Symbol('JSCA_948_950'), e === f;
          },
          focus: function (e) {
            return (
              Symbol('JSCA_951_953'),
              e ===
                (function () {
                  Symbol('JSCA_357_361');
                  try {
                    return u.activeElement;
                  } catch (e) {}
                })() &&
                u.hasFocus() &&
                !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ie(!1),
          disabled: ie(!0),
          checked: function (e) {
            return (
              Symbol('JSCA_956_958'),
              (J(e, 'input') && !!e.checked) || (J(e, 'option') && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              Symbol('JSCA_959_964'),
              e.parentNode && e.parentNode.selectedIndex,
              !0 === e.selected
            );
          },
          empty: function (e) {
            for (Symbol('JSCA_965_972'), e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return Symbol('JSCA_973_975'), !o.pseudos.empty(e);
          },
          header: function (e) {
            return Symbol('JSCA_976_978'), X.test(e.nodeName);
          },
          input: function (e) {
            return Symbol('JSCA_979_981'), z.test(e.nodeName);
          },
          button: function (e) {
            return (
              Symbol('JSCA_982_984'),
              (J(e, 'input') && 'button' === e.type) || J(e, 'button')
            );
          },
          text: function (e) {
            var t;
            return (
              Symbol('JSCA_985_988'),
              J(e, 'input') &&
                'text' === e.type &&
                (null == (t = e.getAttribute('type')) ||
                  'text' === t.toLowerCase())
            );
          },
          first: le(function () {
            return Symbol('JSCA_989_991'), [0];
          }),
          last: le(function (e, t) {
            return Symbol('JSCA_992_994'), [t - 1];
          }),
          eq: le(function (e, t, n) {
            return Symbol('JSCA_995_997'), [n < 0 ? n + t : n];
          }),
          even: le(function (e, t) {
            Symbol('JSCA_998_1004');
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: le(function (e, t) {
            Symbol('JSCA_1005_1011');
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: le(function (e, t, n) {
            var o;
            for (
              Symbol('JSCA_1012_1025'), o = n < 0 ? n + t : n > t ? t : n;
              --o >= 0;

            )
              e.push(o);
            return e;
          }),
          gt: le(function (e, t, n) {
            Symbol('JSCA_1026_1032');
            for (var o = n < 0 ? n + t : n; ++o < t; ) e.push(o);
            return e;
          }),
        },
      }),
    (o.pseudos.nth = o.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      o.pseudos[t] = oe(t);
    for (t in { submit: !0, reset: !0 }) o.pseudos[t] = re(t);
    function ue() {
      Symbol('JSCA_1051_1051');
    }
    function ce(e, t) {
      Symbol('JSCA_1054_1097');
      var n,
        r,
        i,
        l,
        a,
        s,
        u,
        c = A[e + ' '];
      if (c) return t ? 0 : c.slice(0);
      for (a = e, s = [], u = o.preFilter; a; ) {
        for (l in ((n && !(r = R.exec(a))) ||
          (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
        (n = !1),
        (r = I.exec(a)) &&
          ((n = r.shift()),
          i.push({ value: n, type: r[0].replace(k, ' ') }),
          (a = a.slice(n.length))),
        o.filter))
          !(r = B[l].exec(a)) ||
            (u[l] && !(r = u[l](r))) ||
            ((n = r.shift()),
            i.push({ value: n, type: l, matches: r }),
            (a = a.slice(n.length)));
        if (!n) break;
      }
      return t ? a.length : a ? Z.error(e) : A(e, s).slice(0);
    }
    function fe(e) {
      Symbol('JSCA_1098_1104');
      for (var t = 0, n = e.length, o = ''; t < n; t++) o += e[t].value;
      return o;
    }
    function pe(e, t, n) {
      Symbol('JSCA_1105_1143');
      var o = t.dir,
        r = t.next,
        i = r || o,
        l = n && 'parentNode' === i,
        a = b++;
      return t.first
        ? function (t, n, r) {
            for (Symbol('JSCA_1107_1114'); (t = t[o]); )
              if (1 === t.nodeType || l) return e(t, n, r);
            return !1;
          }
        : function (t, n, s) {
            Symbol('JSCA_1114_1142');
            var u,
              c,
              f = [h, a];
            if (s) {
              for (; (t = t[o]); )
                if ((1 === t.nodeType || l) && e(t, n, s)) return !0;
            } else
              for (; (t = t[o]); )
                if (1 === t.nodeType || l)
                  if (((c = t[m] || (t[m] = {})), r && J(t, r))) t = t[o] || t;
                  else {
                    if ((u = c[i]) && u[0] === h && u[1] === a)
                      return (f[2] = u[2]);
                    if (((c[i] = f), (f[2] = e(t, n, s)))) return !0;
                  }
            return !1;
          };
    }
    function de(e) {
      return (
        Symbol('JSCA_1144_1154'),
        e.length > 1
          ? function (t, n, o) {
              Symbol('JSCA_1145_1153');
              for (var r = e.length; r--; ) if (!e[r](t, n, o)) return !1;
              return !0;
            }
          : e[0]
      );
    }
    function Se(e, t, n, o, r) {
      Symbol('JSCA_1162_1175');
      for (var i, l = [], a = 0, s = e.length, u = null != t; a < s; a++)
        (i = e[a]) && ((n && !n(i, o, r)) || (l.push(i), u && t.push(a)));
      return l;
    }
    function ye(e, t, n, o, r, i) {
      return (
        Symbol('JSCA_1176_1229'),
        o && !o[m] && (o = ye(o)),
        r && !r[m] && (r = ye(r, i)),
        te(function (i, l, s, u) {
          Symbol('JSCA_1183_1228');
          var c,
            f,
            p,
            d,
            S = [],
            y = [],
            m = l.length,
            h =
              i ||
              (function (e, t, n) {
                Symbol('JSCA_1155_1161');
                for (var o = 0, r = t.length; o < r; o++) Z(e, t[o], n);
                return n;
              })(t || '*', s.nodeType ? [s] : s, []),
            b = !e || (!i && t) ? h : Se(h, S, e, s, u);
          if (
            (n ? n(b, (d = r || (i ? e : m || o) ? [] : l), s, u) : (d = b), o)
          )
            for (c = Se(d, y), o(c, [], s, u), f = c.length; f--; )
              (p = c[f]) && (d[y[f]] = !(b[y[f]] = p));
          if (i) {
            if (r || e) {
              if (r) {
                for (c = [], f = d.length; f--; )
                  (p = d[f]) && c.push((b[f] = p));
                r(null, (d = []), c, u);
              }
              for (f = d.length; f--; )
                (p = d[f]) &&
                  (c = r ? a.call(i, p) : S[f]) > -1 &&
                  (i[c] = !(l[c] = p));
            }
          } else (d = Se(d === l ? d.splice(m, d.length) : d)), r ? r(null, l, d, u) : _.apply(l, d);
        })
      );
    }
    function _e(e) {
      Symbol('JSCA_1230_1260');
      for (
        var t,
          n,
          r,
          l = e.length,
          s = o.relative[e[0].type],
          u = s || o.relative[' '],
          c = s ? 1 : 0,
          f = pe(
            function (e) {
              return Symbol('JSCA_1231_1233'), e === t;
            },
            u,
            !0
          ),
          p = pe(
            function (e) {
              return Symbol('JSCA_1233_1235'), a.call(t, e) > -1;
            },
            u,
            !0
          ),
          d = [
            function (e, n, o) {
              Symbol('JSCA_1235_1239');
              var r =
                (!s && (o || n != i)) ||
                ((t = n).nodeType ? f(e, n, o) : p(e, n, o));
              return (t = null), r;
            },
          ];
        c < l;
        c++
      )
        if ((n = o.relative[e[c].type])) d = [pe(de(d), n)];
        else {
          if ((n = o.filter[e[c].type].apply(null, e[c].matches))[m]) {
            for (r = ++c; r < l && !o.relative[e[r].type]; r++);
            return ye(
              c > 1 && de(d),
              c > 1 &&
                fe(
                  e
                    .slice(0, c - 1)
                    .concat({ value: ' ' === e[c - 2].type ? '*' : '' })
                ).replace(k, '$1'),
              n,
              c < r && _e(e.slice(c, r)),
              r < l && _e((e = e.slice(r))),
              r < l && fe(e)
            );
          }
          d.push(n);
        }
      return de(d);
    }
    function me(e, t) {
      Symbol('JSCA_1322_1341');
      var n,
        r = [],
        l = [],
        a = v[e + ' '];
      if (!a) {
        for (t || (t = ce(e)), n = t.length; n--; )
          (a = _e(t[n]))[m] ? r.push(a) : l.push(a);
        (a = v(
          e,
          (function (e, t) {
            Symbol('JSCA_1261_1321');
            var n = t.length > 0,
              r = e.length > 0,
              l = function (l, a, s, c, f) {
                Symbol('JSCA_1262_1319');
                var d,
                  S,
                  y,
                  m = 0,
                  b = '0',
                  C = l && [],
                  A = [],
                  v = i,
                  J = l || (r && o.find.TAG('*', f)),
                  w = (h += null == v ? 1 : Math.random() || 0.1),
                  T = J.length;
                for (
                  f && (i = a == u || a || f);
                  b !== T && null != (d = J[b]);
                  b++
                ) {
                  if (r && d) {
                    for (
                      S = 0, a || d.ownerDocument == u || (se(d), (s = !p));
                      (y = e[S++]);

                    )
                      if (y(d, a || u, s)) {
                        _.call(c, d);
                        break;
                      }
                    f && (h = w);
                  }
                  n && ((d = !y && d) && m--, l && C.push(d));
                }
                if (((m += b), n && b !== m)) {
                  for (S = 0; (y = t[S++]); ) y(C, A, a, s);
                  if (l) {
                    if (m > 0) for (; b--; ) C[b] || A[b] || (A[b] = x.call(c));
                    A = Se(A);
                  }
                  _.apply(c, A),
                    f &&
                      !l &&
                      A.length > 0 &&
                      m + t.length > 1 &&
                      g.uniqueSort(c);
                }
                return f && ((h = w), (i = v)), C;
              };
            return n ? te(l) : l;
          })(l, r)
        )),
          (a.selector = e);
      }
      return a;
    }
    function he(e, t, n, r) {
      Symbol('JSCA_1342_1377');
      var i,
        l,
        a,
        s,
        u,
        c = 'function' == typeof e && e,
        f = !r && ce((e = c.selector || e));
      if (((n = n || []), 1 === f.length)) {
        if (
          (l = f[0] = f[0].slice(0)).length > 2 &&
          'ID' === (a = l[0]).type &&
          9 === t.nodeType &&
          p &&
          o.relative[l[1].type]
        ) {
          if (!(t = (o.find.ID(a.matches[0].replace(G, Y), t) || [])[0]))
            return n;
          c && (t = t.parentNode), (e = e.slice(l.shift().value.length));
        }
        for (
          i = B.needsContext.test(e) ? 0 : l.length;
          i-- && ((a = l[i]), !o.relative[(s = a.type)]);

        )
          if (
            (u = o.find[s]) &&
            (r = u(
              a.matches[0].replace(G, Y),
              (V.test(l[0].type) && ae(t.parentNode)) || t
            ))
          ) {
            if ((l.splice(i, 1), !(e = r.length && fe(l))))
              return _.apply(n, r), n;
            break;
          }
      }
      return (
        (c || me(e, f))(
          r,
          t,
          !p,
          n,
          !t || (V.test(e) && ae(t.parentNode)) || t
        ),
        n
      );
    }
    (ue.prototype = o.filters = o.pseudos),
      (o.setFilters = new ue()),
      (d.sortStable = m.split('').sort(D).join('') === m),
      se(),
      (d.sortDetached = ne(function (e) {
        return (
          Symbol('JSCA_1380_1382'),
          1 & e.compareDocumentPosition(u.createElement('fieldset'))
        );
      })),
      (g.find = Z),
      (g.expr[':'] = g.expr.pseudos),
      (g.unique = g.uniqueSort),
      (Z.compile = me),
      (Z.select = he),
      (Z.setDocument = se),
      (Z.tokenize = ce),
      (Z.escape = g.escapeSelector),
      (Z.getText = g.text),
      (Z.isXML = g.isXMLDoc),
      (Z.selectors = g.expr),
      (Z.support = g.support),
      (Z.uniqueSort = g.uniqueSort);
  })();
  var L = function (e, t, n) {
      Symbol('JSCA_1397_1408');
      for (var o = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && g(e).is(n)) break;
          o.push(e);
        }
      return o;
    },
    H = function (e, t) {
      Symbol('JSCA_1409_1417');
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    O = g.expr.match.needsContext,
    P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function M(e, t, n) {
    return (
      Symbol('JSCA_1420_1437'),
      S(t)
        ? g.grep(e, function (e, o) {
            return Symbol('JSCA_1422_1424'), !!t.call(e, o, e) !== n;
          })
        : t.nodeType
        ? g.grep(e, function (e) {
            return Symbol('JSCA_1427_1429'), (e === t) !== n;
          })
        : 'string' != typeof t
        ? g.grep(e, function (e) {
            return Symbol('JSCA_1432_1434'), a.call(t, e) > -1 !== n;
          })
        : g.filter(t, e, n)
    );
  }
  (g.filter = function (e, t, n) {
    Symbol('JSCA_1438_1449');
    var o = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === o.nodeType
        ? g.find.matchesSelector(o, e)
          ? [o]
          : []
        : g.find.matches(
            e,
            g.grep(t, function (e) {
              return Symbol('JSCA_1446_1448'), 1 === e.nodeType;
            })
          )
    );
  }),
    g.fn.extend({
      find: function (e) {
        Symbol('JSCA_1451_1467');
        var t,
          n,
          o = this.length,
          r = this;
        if ('string' != typeof e)
          return this.pushStack(
            g(e).filter(function () {
              for (Symbol('JSCA_1454_1460'), t = 0; t < o; t++)
                if (g.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < o; t++) g.find(e, r[t], n);
        return o > 1 ? g.uniqueSort(n) : n;
      },
      filter: function (e) {
        return Symbol('JSCA_1468_1470'), this.pushStack(M(this, e || [], !1));
      },
      not: function (e) {
        return Symbol('JSCA_1471_1473'), this.pushStack(M(this, e || [], !0));
      },
      is: function (e) {
        return (
          Symbol('JSCA_1474_1476'),
          !!M(this, 'string' == typeof e && O.test(e) ? g(e) : e || [], !1)
            .length
        );
      },
    });
  var R,
    I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((g.fn.init = function (e, t, n) {
    var o, r;
    if ((Symbol('JSCA_1478_1525'), !e)) return this;
    if (((n = n || R), 'string' == typeof e)) {
      if (
        !(o =
          '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : I.exec(e)) ||
        (!o[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (o[1]) {
        if (
          ((t = t instanceof g ? t[0] : t),
          g.merge(
            this,
            g.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : _, !0)
          ),
          P.test(o[1]) && g.isPlainObject(t))
        )
          for (o in t) S(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
        return this;
      }
      return (
        (r = _.getElementById(o[2])) && ((this[0] = r), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : S(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(g)
      : g.makeArray(e, this);
  }).prototype = g.fn),
    (R = g(_));
  var W = /^(?:parents|prev(?:Until|All))/,
    F = { children: !0, contents: !0, next: !0, prev: !0 };
  function $(e, t) {
    for (Symbol('JSCA_1576_1579'); (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  g.fn.extend({
    has: function (e) {
      Symbol('JSCA_1535_1545');
      var t = g(e, this),
        n = t.length;
      return this.filter(function () {
        Symbol('JSCA_1537_1544');
        for (var e = 0; e < n; e++) if (g.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      Symbol('JSCA_1546_1559');
      var n,
        o = 0,
        r = this.length,
        i = [],
        l = 'string' != typeof e && g(e);
      if (!O.test(e))
        for (; o < r; o++)
          for (n = this[o]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (l
                ? l.index(n) > -1
                : 1 === n.nodeType && g.find.matchesSelector(n, e))
            ) {
              i.push(n);
              break;
            }
      return this.pushStack(i.length > 1 ? g.uniqueSort(i) : i);
    },
    index: function (e) {
      return (
        Symbol('JSCA_1560_1568'),
        e
          ? 'string' == typeof e
            ? a.call(g(e), this[0])
            : a.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1
      );
    },
    add: function (e, t) {
      return (
        Symbol('JSCA_1569_1571'),
        this.pushStack(g.uniqueSort(g.merge(this.get(), g(e, t))))
      );
    },
    addBack: function (e) {
      return (
        Symbol('JSCA_1572_1574'),
        this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      );
    },
  }),
    g.each(
      {
        parent: function (e) {
          Symbol('JSCA_1581_1584');
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return Symbol('JSCA_1585_1587'), L(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return Symbol('JSCA_1588_1590'), L(e, 'parentNode', n);
        },
        next: function (e) {
          return Symbol('JSCA_1591_1593'), $(e, 'nextSibling');
        },
        prev: function (e) {
          return Symbol('JSCA_1594_1596'), $(e, 'previousSibling');
        },
        nextAll: function (e) {
          return Symbol('JSCA_1597_1599'), L(e, 'nextSibling');
        },
        prevAll: function (e) {
          return Symbol('JSCA_1600_1602'), L(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return Symbol('JSCA_1603_1605'), L(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return Symbol('JSCA_1606_1608'), L(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return (
            Symbol('JSCA_1609_1611'), H((e.parentNode || {}).firstChild, e)
          );
        },
        children: function (e) {
          return Symbol('JSCA_1612_1614'), H(e.firstChild);
        },
        contents: function (e) {
          return (
            Symbol('JSCA_1615_1623'),
            null != e.contentDocument && o(e.contentDocument)
              ? e.contentDocument
              : (J(e, 'template') && (e = e.content || e),
                g.merge([], e.childNodes))
          );
        },
      },
      function (e, t) {
        Symbol('JSCA_1624_1643'),
          (g.fn[e] = function (n, o) {
            Symbol('JSCA_1625_1642');
            var r = g.map(this, t, n);
            return (
              'Until' !== e.slice(-5) && (o = n),
              o && 'string' == typeof o && (r = g.filter(o, r)),
              this.length > 1 &&
                (F[e] || g.uniqueSort(r), W.test(e) && r.reverse()),
              this.pushStack(r)
            );
          });
      }
    );
  var B = /[^\x20\t\r\n\f]+/g;
  function z(e) {
    return Symbol('JSCA_1761_1763'), e;
  }
  function X(e) {
    throw (Symbol('JSCA_1764_1766'), e);
  }
  function U(e, t, n, o) {
    var r;
    Symbol('JSCA_1767_1780');
    try {
      e && S((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && S((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(o));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (g.Callbacks = function (e) {
    Symbol('JSCA_1652_1760'),
      (e =
        'string' == typeof e
          ? (function (e) {
              Symbol('JSCA_1645_1651');
              var t = {};
              return (
                g.each(e.match(B) || [], function (e, n) {
                  Symbol('JSCA_1647_1649'), (t[n] = !0);
                }),
                t
              );
            })(e)
          : g.extend({}, e));
    var t,
      n,
      o,
      r,
      i = [],
      l = [],
      a = -1,
      s = function () {
        for (
          Symbol('JSCA_1654_1677'), r = r || e.once, o = t = !0;
          l.length;
          a = -1
        )
          for (n = l.shift(); ++a < i.length; )
            !1 === i[a].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((a = i.length), (n = !1));
        e.memory || (n = !1), (t = !1), r && (i = n ? [] : '');
      },
      u = {
        add: function () {
          return (
            Symbol('JSCA_1678_1700'),
            i &&
              (n && !t && ((a = i.length - 1), l.push(n)),
              (function t(n) {
                Symbol('JSCA_1684_1694'),
                  g.each(n, function (n, o) {
                    Symbol('JSCA_1685_1693'),
                      S(o)
                        ? (e.unique && u.has(o)) || i.push(o)
                        : o && o.length && 'string' !== b(o) && t(o);
                  });
              })(arguments),
              n && !t && s()),
            this
          );
        },
        remove: function () {
          return (
            Symbol('JSCA_1701_1712'),
            g.each(arguments, function (e, t) {
              var n;
              for (Symbol('JSCA_1702_1710'); (n = g.inArray(t, i, n)) > -1; )
                i.splice(n, 1), n <= a && a--;
            }),
            this
          );
        },
        has: function (e) {
          return (
            Symbol('JSCA_1713_1715'), e ? g.inArray(e, i) > -1 : i.length > 0
          );
        },
        empty: function () {
          return Symbol('JSCA_1716_1721'), i && (i = []), this;
        },
        disable: function () {
          return Symbol('JSCA_1722_1726'), (r = l = []), (i = n = ''), this;
        },
        disabled: function () {
          return Symbol('JSCA_1727_1729'), !i;
        },
        lock: function () {
          return (
            Symbol('JSCA_1730_1736'), (r = l = []), n || t || (i = n = ''), this
          );
        },
        locked: function () {
          return Symbol('JSCA_1737_1739'), !!r;
        },
        fireWith: function (e, n) {
          return (
            Symbol('JSCA_1740_1750'),
            r ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              l.push(n),
              t || s()),
            this
          );
        },
        fire: function () {
          return Symbol('JSCA_1751_1754'), u.fireWith(this, arguments), this;
        },
        fired: function () {
          return Symbol('JSCA_1755_1757'), !!o;
        },
      };
    return u;
  }),
    g.extend({
      Deferred: function (t) {
        Symbol('JSCA_1782_1897');
        var n = [
            [
              'notify',
              'progress',
              g.Callbacks('memory'),
              g.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              g.Callbacks('once memory'),
              g.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              g.Callbacks('once memory'),
              g.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          o = 'pending',
          r = {
            state: function () {
              return Symbol('JSCA_1784_1786'), o;
            },
            always: function () {
              return (
                Symbol('JSCA_1787_1790'),
                i.done(arguments).fail(arguments),
                this
              );
            },
            catch: function (e) {
              return Symbol('JSCA_1791_1793'), r.then(null, e);
            },
            pipe: function () {
              Symbol('JSCA_1794_1810');
              var e = arguments;
              return g
                .Deferred(function (t) {
                  Symbol('JSCA_1796_1809'),
                    g.each(n, function (n, o) {
                      Symbol('JSCA_1797_1807');
                      var r = S(e[o[4]]) && e[o[4]];
                      i[o[1]](function () {
                        Symbol('JSCA_1799_1806');
                        var e = r && r.apply(this, arguments);
                        e && S(e.promise)
                          ? e
                              .promise()
                              .progress(t.notify)
                              .done(t.resolve)
                              .fail(t.reject)
                          : t[o[0] + 'With'](this, r ? [e] : arguments);
                      });
                    }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, o, r) {
              Symbol('JSCA_1811_1872');
              var i = 0;
              function l(t, n, o, r) {
                return (
                  Symbol('JSCA_1813_1866'),
                  function () {
                    Symbol('JSCA_1814_1865');
                    var a = this,
                      s = arguments,
                      u = function () {
                        var e, u;
                        if ((Symbol('JSCA_1815_1839'), !(t < i))) {
                          if ((e = o.apply(a, s)) === n.promise())
                            throw new TypeError('Thenable self-resolution');
                          (u =
                            e &&
                            ('object' == typeof e || 'function' == typeof e) &&
                            e.then),
                            S(u)
                              ? r
                                ? u.call(e, l(i, n, z, r), l(i, n, X, r))
                                : (i++,
                                  u.call(
                                    e,
                                    l(i, n, z, r),
                                    l(i, n, X, r),
                                    l(i, n, z, n.notifyWith)
                                  ))
                              : (o !== z && ((a = void 0), (s = [e])),
                                (r || n.resolveWith)(a, s));
                        }
                      },
                      c = r
                        ? u
                        : function () {
                            Symbol('JSCA_1839_1854');
                            try {
                              u();
                            } catch (e) {
                              g.Deferred.exceptionHook &&
                                g.Deferred.exceptionHook(e, c.error),
                                t + 1 >= i &&
                                  (o !== X && ((a = void 0), (s = [e])),
                                  n.rejectWith(a, s));
                            }
                          };
                    t
                      ? c()
                      : (g.Deferred.getErrorHook
                          ? (c.error = g.Deferred.getErrorHook())
                          : g.Deferred.getStackHook &&
                            (c.error = g.Deferred.getStackHook()),
                        e.setTimeout(c));
                  }
                );
              }
              return g
                .Deferred(function (e) {
                  Symbol('JSCA_1867_1871'),
                    n[0][3].add(l(0, e, S(r) ? r : z, e.notifyWith)),
                    n[1][3].add(l(0, e, S(t) ? t : z)),
                    n[2][3].add(l(0, e, S(o) ? o : X));
                })
                .promise();
            },
            promise: function (e) {
              return Symbol('JSCA_1873_1875'), null != e ? g.extend(e, r) : r;
            },
          },
          i = {};
        return (
          g.each(n, function (e, t) {
            Symbol('JSCA_1877_1891');
            var l = t[2],
              a = t[5];
            (r[t[1]] = l.add),
              a &&
                l.add(
                  function () {
                    Symbol('JSCA_1881_1883'), (o = a);
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              l.add(t[3].fire),
              (i[t[0]] = function () {
                return (
                  Symbol('JSCA_1886_1889'),
                  i[t[0] + 'With'](this === i ? void 0 : this, arguments),
                  this
                );
              }),
              (i[t[0] + 'With'] = l.fireWith);
          }),
          r.promise(i),
          t && t.call(i, i),
          i
        );
      },
      when: function (e) {
        Symbol('JSCA_1898_1918');
        var t = arguments.length,
          n = t,
          o = Array(n),
          i = r.call(arguments),
          l = g.Deferred(),
          a = function (e) {
            return (
              Symbol('JSCA_1899_1907'),
              function (n) {
                Symbol('JSCA_1900_1906'),
                  (o[e] = this),
                  (i[e] = arguments.length > 1 ? r.call(arguments) : n),
                  --t || l.resolveWith(o, i);
              }
            );
          };
        if (
          t <= 1 &&
          (U(e, l.done(a(n)).resolve, l.reject, !t),
          'pending' === l.state() || S(i[n] && i[n].then))
        )
          return l.then();
        for (; n--; ) U(i[n], a(n), l.reject);
        return l.promise();
      },
    });
  var V = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (g.Deferred.exceptionHook = function (t, n) {
    Symbol('JSCA_1921_1925'),
      e.console &&
        e.console.warn &&
        t &&
        V.test(t.name) &&
        e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
  }),
    (g.readyException = function (t) {
      Symbol('JSCA_1926_1930'),
        e.setTimeout(function () {
          throw (Symbol('JSCA_1927_1929'), t);
        });
    });
  var G = g.Deferred();
  function Y() {
    Symbol('JSCA_1953_1957'),
      _.removeEventListener('DOMContentLoaded', Y),
      e.removeEventListener('load', Y),
      g.ready();
  }
  (g.fn.ready = function (e) {
    return (
      Symbol('JSCA_1932_1937'),
      G.then(e).catch(function (e) {
        Symbol('JSCA_1933_1935'), g.readyException(e);
      }),
      this
    );
  }),
    g.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        Symbol('JSCA_1941_1950'),
          (!0 === e ? --g.readyWait : g.isReady) ||
            ((g.isReady = !0),
            (!0 !== e && --g.readyWait > 0) || G.resolveWith(_, [g]));
      },
    }),
    (g.ready.then = G.then),
    'complete' === _.readyState ||
    ('loading' !== _.readyState && !_.documentElement.doScroll)
      ? e.setTimeout(g.ready)
      : (_.addEventListener('DOMContentLoaded', Y),
        e.addEventListener('load', Y));
  var Q = function (e, t, n, o, r, i, l) {
      Symbol('JSCA_1964_2000');
      var a = 0,
        s = e.length,
        u = null == n;
      if ('object' === b(n))
        for (a in ((r = !0), n)) Q(e, t, a, n[a], !0, i, l);
      else if (
        void 0 !== o &&
        ((r = !0),
        S(o) || (l = !0),
        u &&
          (l
            ? (t.call(e, o), (t = null))
            : ((u = t),
              (t = function (e, t, n) {
                return Symbol('JSCA_1982_1984'), u.call(g(e), n);
              }))),
        t)
      )
        for (; a < s; a++) t(e[a], n, l ? o : o.call(e[a], a, t(e[a], n)));
      return r ? e : u ? t.call(e) : s ? t(e[0], n) : i;
    },
    K = /^-ms-/,
    Z = /-([a-z])/g;
  function ee(e, t) {
    return Symbol('JSCA_2002_2004'), t.toUpperCase();
  }
  function te(e) {
    return Symbol('JSCA_2005_2007'), e.replace(K, 'ms-').replace(Z, ee);
  }
  var ne = function (e) {
    return (
      Symbol('JSCA_2008_2010'),
      1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    );
  };
  function oe() {
    Symbol('JSCA_2011_2013'), (this.expando = g.expando + oe.uid++);
  }
  (oe.uid = 1),
    (oe.prototype = {
      cache: function (e) {
        Symbol('JSCA_2016_2032');
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            ne(e) &&
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
        var o,
          r = this.cache(e);
        if ('string' == typeof t) r[te(t)] = n;
        else for (o in t) r[te(o)] = t[o];
        return r;
      },
      get: function (e, t) {
        return (
          Symbol('JSCA_2044_2046'),
          void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][te(t)]
        );
      },
      access: function (e, t, n) {
        return (
          Symbol('JSCA_2047_2053'),
          void 0 === t || (t && 'string' == typeof t && void 0 === n)
            ? this.get(e, t)
            : (this.set(e, t, n), void 0 !== n ? n : t)
        );
      },
      remove: function (e, t) {
        Symbol('JSCA_2054_2078');
        var n,
          o = e[this.expando];
        if (void 0 !== o) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(te)
              : (t = te(t)) in o
              ? [t]
              : t.match(B) || []).length;
            for (; n--; ) delete o[t[n]];
          }
          (void 0 === t || g.isEmptyObject(o)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        Symbol('JSCA_2079_2082');
        var t = e[this.expando];
        return void 0 !== t && !g.isEmptyObject(t);
      },
    });
  var re = new oe(),
    ie = new oe(),
    le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ae = /[A-Z]/g;
  function se(e, t, n) {
    var o;
    if ((Symbol('JSCA_2105_2120'), void 0 === n && 1 === e.nodeType))
      if (
        ((o = 'data-' + t.replace(ae, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(o)))
      ) {
        try {
          n = (function (e) {
            return (
              Symbol('JSCA_2087_2104'),
              'true' === e ||
                ('false' !== e &&
                  ('null' === e
                    ? null
                    : e === +e + ''
                    ? +e
                    : le.test(e)
                    ? JSON.parse(e)
                    : e))
            );
          })(n);
        } catch (e) {}
        ie.set(e, t, n);
      } else n = void 0;
    return n;
  }
  g.extend({
    hasData: function (e) {
      return Symbol('JSCA_2122_2124'), ie.hasData(e) || re.hasData(e);
    },
    data: function (e, t, n) {
      return Symbol('JSCA_2125_2127'), ie.access(e, t, n);
    },
    removeData: function (e, t) {
      Symbol('JSCA_2128_2130'), ie.remove(e, t);
    },
    _data: function (e, t, n) {
      return Symbol('JSCA_2131_2133'), re.access(e, t, n);
    },
    _removeData: function (e, t) {
      Symbol('JSCA_2134_2136'), re.remove(e, t);
    },
  }),
    g.fn.extend({
      data: function (e, t) {
        Symbol('JSCA_2139_2182');
        var n,
          o,
          r,
          i = this[0],
          l = i && i.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((r = ie.get(i)), 1 === i.nodeType && !re.get(i, 'hasDataAttrs'))
          ) {
            for (n = l.length; n--; )
              l[n] &&
                0 === (o = l[n].name).indexOf('data-') &&
                ((o = te(o.slice(5))), se(i, o, r[o]));
            re.set(i, 'hasDataAttrs', !0);
          }
          return r;
        }
        return 'object' == typeof e
          ? this.each(function () {
              Symbol('JSCA_2161_2163'), ie.set(this, e);
            })
          : Q(
              this,
              function (t) {
                var n;
                if ((Symbol('JSCA_2165_2181'), i && void 0 === t))
                  return void 0 !== (n = ie.get(i, e)) ||
                    void 0 !== (n = se(i, e))
                    ? n
                    : void 0;
                this.each(function () {
                  Symbol('JSCA_2178_2180'), ie.set(this, e, t);
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
            Symbol('JSCA_2184_2186'), ie.remove(this, e);
          })
        );
      },
    }),
    g.extend({
      queue: function (e, t, n) {
        var o;
        if ((Symbol('JSCA_2190_2204'), e))
          return (
            (t = (t || 'fx') + 'queue'),
            (o = re.get(e, t)),
            n &&
              (!o || Array.isArray(n)
                ? (o = re.access(e, t, g.makeArray(n)))
                : o.push(n)),
            o || []
          );
      },
      dequeue: function (e, t) {
        Symbol('JSCA_2205_2224'), (t = t || 'fx');
        var n = g.queue(e, t),
          o = n.length,
          r = n.shift(),
          i = g._queueHooks(e, t);
        'inprogress' === r && ((r = n.shift()), o--),
          r &&
            ('fx' === t && n.unshift('inprogress'),
            delete i.stop,
            r.call(
              e,
              function () {
                Symbol('JSCA_2207_2209'), g.dequeue(e, t);
              },
              i
            )),
          !o && i && i.empty.fire();
      },
      _queueHooks: function (e, t) {
        Symbol('JSCA_2225_2232');
        var n = t + 'queueHooks';
        return (
          re.get(e, n) ||
          re.access(e, n, {
            empty: g.Callbacks('once memory').add(function () {
              Symbol('JSCA_2228_2230'), re.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    g.fn.extend({
      queue: function (e, t) {
        Symbol('JSCA_2235_2252');
        var n = 2;
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? g.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                Symbol('JSCA_2245_2251');
                var n = g.queue(this, e, t);
                g._queueHooks(this, e),
                  'fx' === e && 'inprogress' !== n[0] && g.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return (
          Symbol('JSCA_2253_2257'),
          this.each(function () {
            Symbol('JSCA_2254_2256'), g.dequeue(this, e);
          })
        );
      },
      clearQueue: function (e) {
        return Symbol('JSCA_2258_2260'), this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        Symbol('JSCA_2261_2281');
        var n,
          o = 1,
          r = g.Deferred(),
          i = this,
          l = this.length,
          a = function () {
            Symbol('JSCA_2262_2266'), --o || r.resolveWith(i, [i]);
          };
        for (
          'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
          l--;

        )
          (n = re.get(i[l], e + 'queueHooks')) &&
            n.empty &&
            (o++, n.empty.add(a));
        return a(), r.promise(t);
      },
    });
  var ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ce = new RegExp('^(?:([+-])=|)(' + ue + ')([a-z%]*)$', 'i'),
    fe = ['Top', 'Right', 'Bottom', 'Left'],
    pe = _.documentElement,
    de = function (e) {
      return Symbol('JSCA_2287_2289'), g.contains(e.ownerDocument, e);
    },
    Se = { composed: !0 };
  pe.getRootNode &&
    (de = function (e) {
      return (
        Symbol('JSCA_2293_2295'),
        g.contains(e.ownerDocument, e) || e.getRootNode(Se) === e.ownerDocument
      );
    });
  var ye = function (e, t) {
    return (
      Symbol('JSCA_2297_2300'),
      'none' === (e = t || e).style.display ||
        ('' === e.style.display && de(e) && 'none' === g.css(e, 'display'))
    );
  };
  function _e(e, t, n, o) {
    Symbol('JSCA_2301_2332');
    var r,
      i,
      l = 20,
      a = o
        ? function () {
            return Symbol('JSCA_2302_2304'), o.cur();
          }
        : function () {
            return Symbol('JSCA_2304_2306'), g.css(e, t, '');
          },
      s = a(),
      u = (n && n[3]) || (g.cssNumber[t] ? '' : 'px'),
      c =
        e.nodeType &&
        (g.cssNumber[t] || ('px' !== u && +s)) &&
        ce.exec(g.css(e, t));
    if (c && c[3] !== u) {
      for (s /= 2, u = u || c[3], c = +s || 1; l--; )
        g.style(e, t, c + u),
          (1 - i) * (1 - (i = a() / s || 0.5)) <= 0 && (l = 0),
          (c /= i);
      (c *= 2), g.style(e, t, c + u), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +s || 0),
        (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        o && ((o.unit = u), (o.start = c), (o.end = r))),
      r
    );
  }
  var me = {};
  function he(e) {
    Symbol('JSCA_2334_2347');
    var t,
      n = e.ownerDocument,
      o = e.nodeName,
      r = me[o];
    return (
      r ||
      ((t = n.body.appendChild(n.createElement(o))),
      (r = g.css(t, 'display')),
      t.parentNode.removeChild(t),
      'none' === r && (r = 'block'),
      (me[o] = r),
      r)
    );
  }
  function be(e, t) {
    Symbol('JSCA_2348_2379');
    for (var n, o, r = [], i = 0, l = e.length; i < l; i++)
      (o = e[i]).style &&
        ((n = o.style.display),
        t
          ? ('none' === n &&
              ((r[i] = re.get(o, 'display') || null),
              r[i] || (o.style.display = '')),
            '' === o.style.display && ye(o) && (r[i] = he(o)))
          : 'none' !== n && ((r[i] = 'none'), re.set(o, 'display', n)));
    for (i = 0; i < l; i++) null != r[i] && (e[i].style.display = r[i]);
    return e;
  }
  g.fn.extend({
    show: function () {
      return Symbol('JSCA_2381_2383'), be(this, !0);
    },
    hide: function () {
      return Symbol('JSCA_2384_2386'), be(this);
    },
    toggle: function (e) {
      return (
        Symbol('JSCA_2387_2398'),
        'boolean' == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Symbol('JSCA_2391_2397'),
                ye(this) ? g(this).show() : g(this).hide();
            })
      );
    },
  });
  var Ce = /^(?:checkbox|radio)$/i,
    Ae = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    ge = /^$|^module$|\/(?:java|ecma)script/i;
  !(function () {
    Symbol('JSCA_2403_2414');
    var e = _.createDocumentFragment().appendChild(_.createElement('div')),
      t = _.createElement('input');
    t.setAttribute('type', 'radio'),
      t.setAttribute('checked', 'checked'),
      t.setAttribute('name', 't'),
      e.appendChild(t),
      (d.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = '<textarea>x</textarea>'),
      (d.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
      (e.innerHTML = '<option></option>'),
      (d.option = !!e.lastChild);
  })();
  var ve = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', ''],
  };
  function Je(e, t) {
    var n;
    return (
      Symbol('JSCA_2427_2440'),
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && J(e, t)) ? g.merge([e], n) : n
    );
  }
  function xe(e, t) {
    Symbol('JSCA_2441_2446');
    for (var n = 0, o = e.length; n < o; n++)
      re.set(e[n], 'globalEval', !t || re.get(t[n], 'globalEval'));
  }
  (ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead),
    (ve.th = ve.td),
    d.option ||
      (ve.optgroup = ve.option =
        [1, "<select multiple='multiple'>", '</select>']);
  var we = /<|&#?\w+;/;
  function Te(e, t, n, o, r) {
    Symbol('JSCA_2448_2496');
    for (
      var i,
        l,
        a,
        s,
        u,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        S = e.length;
      d < S;
      d++
    )
      if ((i = e[d]) || 0 === i)
        if ('object' === b(i)) g.merge(p, i.nodeType ? [i] : i);
        else if (we.test(i)) {
          for (
            l = l || f.appendChild(t.createElement('div')),
              a = (Ae.exec(i) || ['', ''])[1].toLowerCase(),
              s = ve[a] || ve._default,
              l.innerHTML = s[1] + g.htmlPrefilter(i) + s[2],
              c = s[0];
            c--;

          )
            l = l.lastChild;
          g.merge(p, l.childNodes), ((l = f.firstChild).textContent = '');
        } else p.push(t.createTextNode(i));
    for (f.textContent = '', d = 0; (i = p[d++]); )
      if (o && g.inArray(i, o) > -1) r && r.push(i);
      else if (
        ((u = de(i)), (l = Je(f.appendChild(i), 'script')), u && xe(l), n)
      )
        for (c = 0; (i = l[c++]); ) ge.test(i.type || '') && n.push(i);
    return f;
  }
  var Ee = /^([^.]*)(?:\.(.+)|)/;
  function ke() {
    return Symbol('JSCA_2498_2500'), !0;
  }
  function je() {
    return Symbol('JSCA_2501_2503'), !1;
  }
  function De(e, t, n, o, r, i) {
    var l, a;
    if ((Symbol('JSCA_2504_2545'), 'object' == typeof t)) {
      for (a in ('string' != typeof n && ((o = o || n), (n = void 0)), t))
        De(e, a, n, o, t[a], i);
      return e;
    }
    if (
      (null == o && null == r
        ? ((r = n), (o = n = void 0))
        : null == r &&
          ('string' == typeof n
            ? ((r = o), (o = void 0))
            : ((r = o), (o = n), (n = void 0))),
      !1 === r)
    )
      r = je;
    else if (!r) return e;
    return (
      1 === i &&
        ((l = r),
        (r = function (e) {
          return Symbol('JSCA_2536_2539'), g().off(e), l.apply(this, arguments);
        }),
        (r.guid = l.guid || (l.guid = g.guid++))),
      e.each(function () {
        Symbol('JSCA_2542_2544'), g.event.add(this, t, r, o, n);
      })
    );
  }
  function Ne(e, t, n) {
    Symbol('JSCA_2790_2824'),
      n
        ? (re.set(e, t, !1),
          g.event.add(e, t, {
            namespace: !1,
            handler: function (e) {
              Symbol('JSCA_2800_2822');
              var n,
                o = re.get(this, t);
              if (1 & e.isTrigger && this[t]) {
                if (o)
                  (g.event.special[t] || {}).delegateType &&
                    e.stopPropagation();
                else if (
                  ((o = r.call(arguments)),
                  re.set(this, t, o),
                  this[t](),
                  (n = re.get(this, t)),
                  re.set(this, t, !1),
                  o !== n)
                )
                  return e.stopImmediatePropagation(), e.preventDefault(), n;
              } else
                o &&
                  (re.set(this, t, g.event.trigger(o[0], o.slice(1), this)),
                  e.stopPropagation(),
                  (e.isImmediatePropagationStopped = ke));
            },
          }))
        : void 0 === re.get(e, t) && g.event.add(e, t, ke);
  }
  (g.event = {
    global: {},
    add: function (e, t, n, o, r) {
      Symbol('JSCA_2548_2616');
      var i,
        l,
        a,
        s,
        u,
        c,
        f,
        p,
        d,
        S,
        y,
        _ = re.get(e);
      if (ne(e))
        for (
          n.handler && ((n = (i = n).handler), (r = i.selector)),
            r && g.find.matchesSelector(pe, r),
            n.guid || (n.guid = g.guid++),
            (s = _.events) || (s = _.events = Object.create(null)),
            (l = _.handle) ||
              (l = _.handle =
                function (t) {
                  return (
                    Symbol('JSCA_2568_2570'),
                    void 0 !== g && g.event.triggered !== t.type
                      ? g.event.dispatch.apply(e, arguments)
                      : void 0
                  );
                }),
            u = (t = (t || '').match(B) || ['']).length;
          u--;

        )
          (d = y = (a = Ee.exec(t[u]) || [])[1]),
            (S = (a[2] || '').split('.').sort()),
            d &&
              ((f = g.event.special[d] || {}),
              (d = (r ? f.delegateType : f.bindType) || d),
              (f = g.event.special[d] || {}),
              (c = g.extend(
                {
                  type: d,
                  origType: y,
                  data: o,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && g.expr.match.needsContext.test(r),
                  namespace: S.join('.'),
                },
                i
              )),
              (p = s[d]) ||
                (((p = s[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, o, S, l)) ||
                  (e.addEventListener && e.addEventListener(d, l))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              r ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (g.event.global[d] = !0));
    },
    remove: function (e, t, n, o, r) {
      Symbol('JSCA_2617_2661');
      var i,
        l,
        a,
        s,
        u,
        c,
        f,
        p,
        d,
        S,
        y,
        _ = re.hasData(e) && re.get(e);
      if (_ && (s = _.events)) {
        for (u = (t = (t || '').match(B) || ['']).length; u--; )
          if (
            ((d = y = (a = Ee.exec(t[u]) || [])[1]),
            (S = (a[2] || '').split('.').sort()),
            d)
          ) {
            for (
              f = g.event.special[d] || {},
                p = s[(d = (o ? f.delegateType : f.bindType) || d)] || [],
                a =
                  a[2] &&
                  new RegExp('(^|\\.)' + S.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                l = i = p.length;
              i--;

            )
              (c = p[i]),
                (!r && y !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (o && o !== c.selector && ('**' !== o || !c.selector)) ||
                  (p.splice(i, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            l &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, S, _.handle)) ||
                g.removeEvent(e, d, _.handle),
              delete s[d]);
          } else for (d in s) g.event.remove(e, d + t[u], n, o, !0);
        g.isEmptyObject(s) && re.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      Symbol('JSCA_2662_2695');
      var t,
        n,
        o,
        r,
        i,
        l,
        a = new Array(arguments.length),
        s = g.event.fix(e),
        u = (re.get(this, 'events') || Object.create(null))[s.type] || [],
        c = g.event.special[s.type] || {};
      for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, s))
      ) {
        for (
          l = g.event.handlers.call(this, s, u), t = 0;
          (r = l[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = r.elem, n = 0;
            (i = r.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace &&
              !1 !== i.namespace &&
              !s.rnamespace.test(i.namespace)) ||
              ((s.handleObj = i),
              (s.data = i.data),
              void 0 !==
                (o = (
                  (g.event.special[i.origType] || {}).handle || i.handler
                ).apply(r.elem, a)) &&
                !1 === (s.result = o) &&
                (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      Symbol('JSCA_2696_2730');
      var n,
        o,
        r,
        i,
        l,
        a = [],
        s = t.delegateCount,
        u = e.target;
      if (s && u.nodeType && !('click' === e.type && e.button >= 1))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ('click' !== e.type || !0 !== u.disabled)) {
            for (i = [], l = {}, n = 0; n < s; n++)
              void 0 === l[(r = (o = t[n]).selector + ' ')] &&
                (l[r] = o.needsContext
                  ? g(r, this).index(u) > -1
                  : g.find(r, this, null, [u]).length),
                l[r] && i.push(o);
            i.length && a.push({ elem: u, handlers: i });
          }
      return (
        (u = this), s < t.length && a.push({ elem: u, handlers: t.slice(s) }), a
      );
    },
    addProp: function (e, t) {
      Symbol('JSCA_2731_2753'),
        Object.defineProperty(g.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: S(t)
            ? function () {
                if ((Symbol('JSCA_2735_2739'), this.originalEvent))
                  return t(this.originalEvent);
              }
            : function () {
                if ((Symbol('JSCA_2739_2743'), this.originalEvent))
                  return this.originalEvent[e];
              },
          set: function (t) {
            Symbol('JSCA_2744_2751'),
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
          },
        });
    },
    fix: function (e) {
      return Symbol('JSCA_2754_2756'), e[g.expando] ? e : new g.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          Symbol('JSCA_2762_2768');
          var t = this || e;
          return (
            Ce.test(t.type) && t.click && J(t, 'input') && Ne(t, 'click', !0),
            !1
          );
        },
        trigger: function (e) {
          Symbol('JSCA_2769_2775');
          var t = this || e;
          return (
            Ce.test(t.type) && t.click && J(t, 'input') && Ne(t, 'click'), !0
          );
        },
        _default: function (e) {
          Symbol('JSCA_2776_2779');
          var t = e.target;
          return (
            (Ce.test(t.type) &&
              t.click &&
              J(t, 'input') &&
              re.get(t, 'click')) ||
            J(t, 'a')
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          Symbol('JSCA_2782_2786'),
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (g.removeEvent = function (e, t, n) {
      Symbol('JSCA_2825_2829'),
        e.removeEventListener && e.removeEventListener(t, n);
    }),
    (g.Event = function (e, t) {
      if ((Symbol('JSCA_2830_2849'), !(this instanceof g.Event)))
        return new g.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? ke
              : je),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && g.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[g.expando] = !0);
    }),
    (g.Event.prototype = {
      constructor: g.Event,
      isDefaultPrevented: je,
      isPropagationStopped: je,
      isImmediatePropagationStopped: je,
      isSimulated: !1,
      preventDefault: function () {
        Symbol('JSCA_2856_2862');
        var e = this.originalEvent;
        (this.isDefaultPrevented = ke),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        Symbol('JSCA_2863_2869');
        var e = this.originalEvent;
        (this.isPropagationStopped = ke),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        Symbol('JSCA_2870_2877');
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = ke),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    g.each(
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
      g.event.addProp
    ),
    g.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      function n(e) {
        if ((Symbol('JSCA_2916_2928'), _.documentMode)) {
          var n = re.get(this, 'handle'),
            o = g.event.fix(e);
          (o.type = 'focusin' === e.type ? 'focus' : 'blur'),
            (o.isSimulated = !0),
            n(e),
            o.target === o.currentTarget && n(o);
        } else g.event.simulate(t, e.target, g.event.fix(e));
      }
      Symbol('JSCA_2915_2992'),
        (g.event.special[e] = {
          setup: function () {
            var o;
            if ((Symbol('JSCA_2930_2942'), Ne(this, e, !0), !_.documentMode))
              return !1;
            (o = re.get(this, t)) || this.addEventListener(t, n),
              re.set(this, t, (o || 0) + 1);
          },
          trigger: function () {
            return Symbol('JSCA_2943_2946'), Ne(this, e), !0;
          },
          teardown: function () {
            var e;
            if ((Symbol('JSCA_2947_2960'), !_.documentMode)) return !1;
            (e = re.get(this, t) - 1)
              ? re.set(this, t, e)
              : (this.removeEventListener(t, n), re.remove(this, t));
          },
          _default: function (t) {
            return Symbol('JSCA_2961_2963'), re.get(t.target, e);
          },
          delegateType: t,
        }),
        (g.event.special[t] = {
          setup: function () {
            Symbol('JSCA_2967_2977');
            var o = this.ownerDocument || this.document || this,
              r = _.documentMode ? this : o,
              i = re.get(r, t);
            i ||
              (_.documentMode
                ? this.addEventListener(t, n)
                : o.addEventListener(e, n, !0)),
              re.set(r, t, (i || 0) + 1);
          },
          teardown: function () {
            Symbol('JSCA_2978_2990');
            var o = this.ownerDocument || this.document || this,
              r = _.documentMode ? this : o,
              i = re.get(r, t) - 1;
            i
              ? re.set(r, t, i)
              : (_.documentMode
                  ? this.removeEventListener(t, n)
                  : o.removeEventListener(e, n, !0),
                re.remove(r, t));
          },
        });
    }),
    g.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, t) {
        Symbol('JSCA_2998_3012'),
          (g.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              Symbol('JSCA_3002_3010');
              var n,
                o = e.relatedTarget,
                r = e.handleObj;
              return (
                (o && (o === this || g.contains(this, o))) ||
                  ((e.type = r.origType),
                  (n = r.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          });
      }
    ),
    g.fn.extend({
      on: function (e, t, n, o) {
        return Symbol('JSCA_3014_3016'), De(this, e, t, n, o);
      },
      one: function (e, t, n, o) {
        return Symbol('JSCA_3017_3019'), De(this, e, t, n, o, 1);
      },
      off: function (e, t, n) {
        var o, r;
        if ((Symbol('JSCA_3020_3043'), e && e.preventDefault && e.handleObj))
          return (
            (o = e.handleObj),
            g(e.delegateTarget).off(
              o.namespace ? o.origType + '.' + o.namespace : o.origType,
              o.selector,
              o.handler
            ),
            this
          );
        if ('object' == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = je),
          this.each(function () {
            Symbol('JSCA_3040_3042'), g.event.remove(this, e, n, t);
          })
        );
      },
    });
  var qe = /<script|<style|<link/i,
    Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
    He = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Oe(e, t) {
    return (
      Symbol('JSCA_3046_3051'),
      (J(e, 'table') &&
        J(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        g(e).children('tbody')[0]) ||
        e
    );
  }
  function Pe(e) {
    return (
      Symbol('JSCA_3052_3055'),
      (e.type = (null !== e.getAttribute('type')) + '/' + e.type),
      e
    );
  }
  function Me(e) {
    return (
      Symbol('JSCA_3056_3063'),
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function Re(e, t) {
    var n, o, r, i, l, a;
    if ((Symbol('JSCA_3064_3086'), 1 === t.nodeType)) {
      if (re.hasData(e) && (a = re.get(e).events))
        for (r in (re.remove(t, 'handle events'), a))
          for (n = 0, o = a[r].length; n < o; n++) g.event.add(t, r, a[r][n]);
      ie.hasData(e) &&
        ((i = ie.access(e)), (l = g.extend({}, i)), ie.set(t, l));
    }
  }
  function Ie(e, t) {
    Symbol('JSCA_3087_3094');
    var n = t.nodeName.toLowerCase();
    'input' === n && Ce.test(e.type)
      ? (t.checked = e.checked)
      : ('input' !== n && 'textarea' !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function We(e, t, n, o) {
    Symbol('JSCA_3095_3147'), (t = i(t));
    var r,
      l,
      a,
      s,
      u,
      c,
      f = 0,
      p = e.length,
      y = p - 1,
      _ = t[0],
      m = S(_);
    if (m || (p > 1 && 'string' == typeof _ && !d.checkClone && Le.test(_)))
      return e.each(function (r) {
        Symbol('JSCA_3099_3105');
        var i = e.eq(r);
        m && (t[0] = _.call(this, r, i.html())), We(i, t, n, o);
      });
    if (
      p &&
      ((l = (r = Te(t, e[0].ownerDocument, !1, e, o)).firstChild),
      1 === r.childNodes.length && (r = l),
      l || o)
    ) {
      for (s = (a = g.map(Je(r, 'script'), Pe)).length; f < p; f++)
        (u = r),
          f !== y &&
            ((u = g.clone(u, !0, !0)), s && g.merge(a, Je(u, 'script'))),
          n.call(e[f], u, f);
      if (s)
        for (c = a[a.length - 1].ownerDocument, g.map(a, Me), f = 0; f < s; f++)
          (u = a[f]),
            ge.test(u.type || '') &&
              !re.access(u, 'globalEval') &&
              g.contains(c, u) &&
              (u.src && 'module' !== (u.type || '').toLowerCase()
                ? g._evalUrl &&
                  !u.noModule &&
                  g._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute('nonce') },
                    c
                  )
                : h(u.textContent.replace(He, ''), u, c));
    }
    return e;
  }
  function Fe(e, t, n) {
    Symbol('JSCA_3148_3162');
    for (var o, r = t ? g.filter(t, e) : e, i = 0; null != (o = r[i]); i++)
      n || 1 !== o.nodeType || g.cleanData(Je(o)),
        o.parentNode &&
          (n && de(o) && xe(Je(o, 'script')), o.parentNode.removeChild(o));
    return e;
  }
  g.extend({
    htmlPrefilter: function (e) {
      return Symbol('JSCA_3164_3166'), e;
    },
    clone: function (e, t, n) {
      Symbol('JSCA_3167_3192');
      var o,
        r,
        i,
        l,
        a = e.cloneNode(!0),
        s = de(e);
      if (
        !(
          d.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          g.isXMLDoc(e)
        )
      )
        for (l = Je(a), o = 0, r = (i = Je(e)).length; o < r; o++)
          Ie(i[o], l[o]);
      if (t)
        if (n)
          for (i = i || Je(e), l = l || Je(a), o = 0, r = i.length; o < r; o++)
            Re(i[o], l[o]);
        else Re(e, a);
      return (
        (l = Je(a, 'script')).length > 0 && xe(l, !s && Je(e, 'script')), a
      );
    },
    cleanData: function (e) {
      Symbol('JSCA_3193_3214');
      for (var t, n, o, r = g.event.special, i = 0; void 0 !== (n = e[i]); i++)
        if (ne(n)) {
          if ((t = n[re.expando])) {
            if (t.events)
              for (o in t.events)
                r[o] ? g.event.remove(n, o) : g.removeEvent(n, o, t.handle);
            n[re.expando] = void 0;
          }
          n[ie.expando] && (n[ie.expando] = void 0);
        }
    },
  }),
    g.fn.extend({
      detach: function (e) {
        return Symbol('JSCA_3217_3219'), Fe(this, e, !0);
      },
      remove: function (e) {
        return Symbol('JSCA_3220_3222'), Fe(this, e);
      },
      text: function (e) {
        return (
          Symbol('JSCA_3223_3231'),
          Q(
            this,
            function (e) {
              return (
                Symbol('JSCA_3224_3230'),
                void 0 === e
                  ? g.text(this)
                  : this.empty().each(function () {
                      Symbol('JSCA_3225_3229'),
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = e);
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
          We(this, arguments, function (e) {
            (Symbol('JSCA_3233_3238'),
            1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType) && Oe(this, e).appendChild(e);
          })
        );
      },
      prepend: function () {
        return (
          Symbol('JSCA_3240_3247'),
          We(this, arguments, function (e) {
            if (
              (Symbol('JSCA_3241_3246'),
              1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType)
            ) {
              var t = Oe(this, e);
              t.insertBefore(e, t.firstChild);
            }
          })
        );
      },
      before: function () {
        return (
          Symbol('JSCA_3248_3254'),
          We(this, arguments, function (e) {
            Symbol('JSCA_3249_3253'),
              this.parentNode && this.parentNode.insertBefore(e, this);
          })
        );
      },
      after: function () {
        return (
          Symbol('JSCA_3255_3261'),
          We(this, arguments, function (e) {
            Symbol('JSCA_3256_3260'),
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
          })
        );
      },
      empty: function () {
        Symbol('JSCA_3262_3271');
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (g.cleanData(Je(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          Symbol('JSCA_3272_3278'),
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return Symbol('JSCA_3275_3277'), g.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return (
          Symbol('JSCA_3279_3302'),
          Q(
            this,
            function (e) {
              Symbol('JSCA_3280_3301');
              var t = this[0] || {},
                n = 0,
                o = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                'string' == typeof e &&
                !qe.test(e) &&
                !ve[(Ae.exec(e) || ['', ''])[1].toLowerCase()]
              ) {
                e = g.htmlPrefilter(e);
                try {
                  for (; n < o; n++)
                    1 === (t = this[n] || {}).nodeType &&
                      (g.cleanData(Je(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
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
        return We(
          this,
          arguments,
          function (t) {
            Symbol('JSCA_3305_3313');
            var n = this.parentNode;
            g.inArray(this, e) < 0 &&
              (g.cleanData(Je(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    g.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, t) {
        Symbol('JSCA_3322_3332'),
          (g.fn[e] = function (e) {
            Symbol('JSCA_3323_3331');
            for (var n, o = [], r = g(e), i = r.length - 1, a = 0; a <= i; a++)
              (n = a === i ? this : this.clone(!0)),
                g(r[a])[t](n),
                l.apply(o, n.get());
            return this.pushStack(o);
          });
      }
    );
  var $e = new RegExp('^(' + ue + ')(?!px)[a-z%]+$', 'i'),
    Be = /^--/,
    ze = function (t) {
      Symbol('JSCA_3335_3341');
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Xe = function (e, t, n) {
      Symbol('JSCA_3342_3353');
      var o,
        r,
        i = {};
      for (r in t) (i[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((o = n.call(e)), t)) e.style[r] = i[r];
      return o;
    },
    Ue = new RegExp(fe.join('|'), 'i');
  function Ve(e, t, n) {
    Symbol('JSCA_3425_3448');
    var o,
      r,
      i,
      l,
      a = Be.test(t),
      s = e.style;
    return (
      (n = n || ze(e)) &&
        ((l = n.getPropertyValue(t) || n[t]),
        a && l && (l = l.replace(k, '$1') || void 0),
        '' !== l || de(e) || (l = g.style(e, t)),
        !d.pixelBoxStyles() &&
          $e.test(l) &&
          Ue.test(t) &&
          ((o = s.width),
          (r = s.minWidth),
          (i = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = l),
          (l = n.width),
          (s.width = o),
          (s.minWidth = r),
          (s.maxWidth = i))),
      void 0 !== l ? l + '' : l
    );
  }
  function Ge(e, t) {
    return (
      Symbol('JSCA_3449_3459'),
      {
        get: function () {
          if ((Symbol('JSCA_3451_3457'), !e()))
            return (this.get = t).apply(this, arguments);
          delete this.get;
        },
      }
    );
  }
  !(function () {
    function t() {
      if ((Symbol('JSCA_3356_3373'), c)) {
        (u.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (c.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          pe.appendChild(u).appendChild(c);
        var t = e.getComputedStyle(c);
        (o = '1%' !== t.top),
          (s = 12 === n(t.marginLeft)),
          (c.style.right = '60%'),
          (l = 36 === n(t.right)),
          (r = 36 === n(t.width)),
          (c.style.position = 'absolute'),
          (i = 12 === n(c.offsetWidth / 3)),
          pe.removeChild(u),
          (c = null);
      }
    }
    function n(e) {
      return Symbol('JSCA_3374_3376'), Math.round(parseFloat(e));
    }
    Symbol('JSCA_3355_3424');
    var o,
      r,
      i,
      l,
      a,
      s,
      u = _.createElement('div'),
      c = _.createElement('div');
    c.style &&
      ((c.style.backgroundClip = 'content-box'),
      (c.cloneNode(!0).style.backgroundClip = ''),
      (d.clearCloneStyle = 'content-box' === c.style.backgroundClip),
      g.extend(d, {
        boxSizingReliable: function () {
          return Symbol('JSCA_3385_3388'), t(), r;
        },
        pixelBoxStyles: function () {
          return Symbol('JSCA_3389_3392'), t(), l;
        },
        pixelPosition: function () {
          return Symbol('JSCA_3393_3396'), t(), o;
        },
        reliableMarginLeft: function () {
          return Symbol('JSCA_3397_3400'), t(), s;
        },
        scrollboxSize: function () {
          return Symbol('JSCA_3401_3404'), t(), i;
        },
        reliableTrDimensions: function () {
          var t, n, o, r;
          return (
            Symbol('JSCA_3405_3422'),
            null == a &&
              ((t = _.createElement('table')),
              (n = _.createElement('tr')),
              (o = _.createElement('div')),
              (t.style.cssText =
                'position:absolute;left:-11111px;border-collapse:separate'),
              (n.style.cssText = 'box-sizing:content-box;border:1px solid'),
              (n.style.height = '1px'),
              (o.style.height = '9px'),
              (o.style.display = 'block'),
              pe.appendChild(t).appendChild(n).appendChild(o),
              (r = e.getComputedStyle(n)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                n.offsetHeight),
              pe.removeChild(t)),
            a
          );
        },
      }));
  })();
  var Ye = ['Webkit', 'Moz', 'ms'],
    Qe = _.createElement('div').style,
    Ke = {};
  function Ze(e) {
    Symbol('JSCA_3470_3479');
    var t = g.cssProps[e] || Ke[e];
    return (
      t ||
      (e in Qe
        ? e
        : (Ke[e] =
            (function (e) {
              Symbol('JSCA_3461_3469');
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = Ye.length;
                n--;

              )
                if ((e = Ye[n] + t) in Qe) return e;
            })(e) || e))
    );
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = { position: 'absolute', visibility: 'hidden', display: 'block' },
    nt = { letterSpacing: '0', fontWeight: '400' };
  function ot(e, t, n) {
    Symbol('JSCA_3488_3491');
    var o = ce.exec(t);
    return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || 'px') : t;
  }
  function rt(e, t, n, o, r, i) {
    Symbol('JSCA_3492_3521');
    var l = 'width' === t ? 1 : 0,
      a = 0,
      s = 0,
      u = 0;
    if (n === (o ? 'border' : 'content')) return 0;
    for (; l < 4; l += 2)
      'margin' === n && (u += g.css(e, n + fe[l], !0, r)),
        o
          ? ('content' === n && (s -= g.css(e, 'padding' + fe[l], !0, r)),
            'margin' !== n &&
              (s -= g.css(e, 'border' + fe[l] + 'Width', !0, r)))
          : ((s += g.css(e, 'padding' + fe[l], !0, r)),
            'padding' !== n
              ? (s += g.css(e, 'border' + fe[l] + 'Width', !0, r))
              : (a += g.css(e, 'border' + fe[l] + 'Width', !0, r)));
    return (
      !o &&
        i >= 0 &&
        (s +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - i - s - a - 0.5
            )
          ) || 0),
      s + u
    );
  }
  function it(e, t, n) {
    Symbol('JSCA_3522_3539');
    var o = ze(e),
      r =
        (!d.boxSizingReliable() || n) &&
        'border-box' === g.css(e, 'boxSizing', !1, o),
      i = r,
      l = Ve(e, t, o),
      a = 'offset' + t[0].toUpperCase() + t.slice(1);
    if ($e.test(l)) {
      if (!n) return l;
      l = 'auto';
    }
    return (
      ((!d.boxSizingReliable() && r) ||
        (!d.reliableTrDimensions() && J(e, 'tr')) ||
        'auto' === l ||
        (!parseFloat(l) && 'inline' === g.css(e, 'display', !1, o))) &&
        e.getClientRects().length &&
        ((r = 'border-box' === g.css(e, 'boxSizing', !1, o)),
        (i = a in e) && (l = e[a])),
      (l = parseFloat(l) || 0) +
        rt(e, t, n || (r ? 'border' : 'content'), i, o, l) +
        'px'
    );
  }
  function lt(e, t, n, o, r) {
    return Symbol('JSCA_3706_3708'), new lt.prototype.init(e, t, n, o, r);
  }
  g.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if ((Symbol('JSCA_3543_3548'), t)) {
            var n = Ve(e, 'opacity');
            return '' === n ? '1' : n;
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
    style: function (e, t, n, o) {
      if (
        (Symbol('JSCA_3581_3618'),
        e && 3 !== e.nodeType && 8 !== e.nodeType && e.style)
      ) {
        var r,
          i,
          l,
          a = te(t),
          s = Be.test(t),
          u = e.style;
        if (
          (s || (t = Ze(a)), (l = g.cssHooks[t] || g.cssHooks[a]), void 0 === n)
        )
          return l && 'get' in l && void 0 !== (r = l.get(e, !1, o)) ? r : u[t];
        'string' === (i = typeof n) &&
          (r = ce.exec(n)) &&
          r[1] &&
          ((n = _e(e, t, r)), (i = 'number')),
          null != n &&
            n == n &&
            ('number' !== i ||
              s ||
              (n += (r && r[3]) || (g.cssNumber[a] ? '' : 'px')),
            d.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (u[t] = 'inherit'),
            (l && 'set' in l && void 0 === (n = l.set(e, n, o))) ||
              (s ? u.setProperty(t, n) : (u[t] = n)));
      }
    },
    css: function (e, t, n, o) {
      Symbol('JSCA_3619_3639');
      var r,
        i,
        l,
        a = te(t);
      return (
        Be.test(t) || (t = Ze(a)),
        (l = g.cssHooks[t] || g.cssHooks[a]) &&
          'get' in l &&
          (r = l.get(e, !0, n)),
        void 0 === r && (r = Ve(e, t, o)),
        'normal' === r && t in nt && (r = nt[t]),
        '' === n || n
          ? ((i = parseFloat(r)), !0 === n || isFinite(i) ? i || 0 : r)
          : r
      );
    },
  }),
    g.each(['height', 'width'], function (e, t) {
      Symbol('JSCA_3641_3662'),
        (g.cssHooks[t] = {
          get: function (e, n, o) {
            if ((Symbol('JSCA_3643_3649'), n))
              return !et.test(g.css(e, 'display')) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? it(e, t, o)
                : Xe(e, tt, function () {
                    return Symbol('JSCA_3645_3647'), it(e, t, o);
                  });
          },
          set: function (e, n, o) {
            Symbol('JSCA_3650_3660');
            var r,
              i = ze(e),
              l = !d.scrollboxSize() && 'absolute' === i.position,
              a = (l || o) && 'border-box' === g.css(e, 'boxSizing', !1, i),
              s = o ? rt(e, t, o, a, i) : 0;
            return (
              a &&
                l &&
                (s -= Math.ceil(
                  e['offset' + t[0].toUpperCase() + t.slice(1)] -
                    parseFloat(i[t]) -
                    rt(e, t, 'border', !1, i) -
                    0.5
                )),
              s &&
                (r = ce.exec(n)) &&
                'px' !== (r[3] || 'px') &&
                ((e.style[t] = n), (n = g.css(e, t))),
              ot(0, n, s)
            );
          },
        });
    }),
    (g.cssHooks.marginLeft = Ge(d.reliableMarginLeft, function (e, t) {
      if ((Symbol('JSCA_3663_3671'), t))
        return (
          (parseFloat(Ve(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Xe(e, { marginLeft: 0 }, function () {
                return Symbol('JSCA_3667_3669'), e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    g.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
      Symbol('JSCA_3676_3689'),
        (g.cssHooks[e + t] = {
          expand: function (n) {
            Symbol('JSCA_3678_3684');
            for (
              var o = 0, r = {}, i = 'string' == typeof n ? n.split(' ') : [n];
              o < 4;
              o++
            )
              r[e + fe[o] + t] = i[o] || i[o - 2] || i[0];
            return r;
          },
        }),
        'margin' !== e && (g.cssHooks[e + t].set = ot);
    }),
    g.fn.extend({
      css: function (e, t) {
        return (
          Symbol('JSCA_3691_3704'),
          Q(
            this,
            function (e, t, n) {
              Symbol('JSCA_3692_3703');
              var o,
                r,
                i = {},
                l = 0;
              if (Array.isArray(t)) {
                for (o = ze(e), r = t.length; l < r; l++)
                  i[t[l]] = g.css(e, t[l], !1, o);
                return i;
              }
              return void 0 !== n ? g.style(e, t, n) : g.css(e, t);
            },
            e,
            t,
            arguments.length > 1
          )
        );
      },
    }),
    (g.Tween = lt),
    (lt.prototype = {
      constructor: lt,
      init: function (e, t, n, o, r, i) {
        Symbol('JSCA_3712_3720'),
          (this.elem = e),
          (this.prop = n),
          (this.easing = r || g.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = o),
          (this.unit = i || (g.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        Symbol('JSCA_3721_3724');
        var e = lt.propHooks[this.prop];
        return e && e.get ? e.get(this) : lt.propHooks._default.get(this);
      },
      run: function (e) {
        Symbol('JSCA_3725_3742');
        var t,
          n = lt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                g.easing[this.easing](
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
          n && n.set ? n.set(this) : lt.propHooks._default.set(this),
          this
        );
      },
    }),
    (lt.prototype.init.prototype = lt.prototype),
    (lt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return (
            Symbol('JSCA_3747_3754'),
            1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (t = g.css(e.elem, e.prop, '')) && 'auto' !== t
              ? t
              : 0
          );
        },
        set: function (e) {
          Symbol('JSCA_3755_3763'),
            g.fx.step[e.prop]
              ? g.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (!g.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : g.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (lt.propHooks.scrollTop = lt.propHooks.scrollLeft =
      {
        set: function (e) {
          Symbol('JSCA_3767_3771'),
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (g.easing = {
      linear: function (e) {
        return Symbol('JSCA_3774_3776'), e;
      },
      swing: function (e) {
        return Symbol('JSCA_3777_3779'), 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (g.fx = lt.prototype.init),
    (g.fx.step = {});
  var at,
    st,
    ut = /^(?:toggle|show|hide)$/,
    ct = /queueHooks$/;
  function ft() {
    Symbol('JSCA_3785_3794'),
      st &&
        (!1 === _.hidden && e.requestAnimationFrame
          ? e.requestAnimationFrame(ft)
          : e.setTimeout(ft, g.fx.interval),
        g.fx.tick());
  }
  function pt() {
    return (
      Symbol('JSCA_3795_3800'),
      e.setTimeout(function () {
        Symbol('JSCA_3796_3798'), (at = void 0);
      }),
      (at = Date.now())
    );
  }
  function dt(e, t) {
    Symbol('JSCA_3801_3814');
    var n,
      o = 0,
      r = { height: e };
    for (t = t ? 1 : 0; o < 4; o += 2 - t)
      r['margin' + (n = fe[o])] = r['padding' + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function St(e, t, n) {
    Symbol('JSCA_3815_3822');
    for (
      var o,
        r = (yt.tweeners[t] || []).concat(yt.tweeners['*']),
        i = 0,
        l = r.length;
      i < l;
      i++
    )
      if ((o = r[i].call(n, t, e))) return o;
  }
  function yt(e, t, n) {
    Symbol('JSCA_3972_4048');
    var o,
      r,
      i = 0,
      l = yt.prefilters.length,
      a = g.Deferred().always(function () {
        Symbol('JSCA_3973_3975'), delete s.elem;
      }),
      s = function () {
        if ((Symbol('JSCA_3975_3992'), r)) return !1;
        for (
          var t = at || pt(),
            n = Math.max(0, u.startTime + u.duration - t),
            o = 1 - (n / u.duration || 0),
            i = 0,
            l = u.tweens.length;
          i < l;
          i++
        )
          u.tweens[i].run(o);
        return (
          a.notifyWith(e, [u, o, n]),
          o < 1 && l
            ? n
            : (l || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
        );
      },
      u = a.promise({
        elem: e,
        props: g.extend({}, t),
        opts: g.extend(!0, { specialEasing: {}, easing: g.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: at || pt(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          Symbol('JSCA_4004_4008');
          var o = g.Tween(
            e,
            u.opts,
            t,
            n,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(o), o;
        },
        stop: function (t) {
          Symbol('JSCA_4009_4025');
          var n = 0,
            o = t ? u.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < o; n++) u.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
              : a.rejectWith(e, [u, t]),
            this
          );
        },
      }),
      c = u.props;
    for (
      !(function (e, t) {
        var n, o, r, i, l;
        for (n in (Symbol('JSCA_3943_3971'), e))
          if (
            ((r = t[(o = te(n))]),
            (i = e[n]),
            Array.isArray(i) && ((r = i[1]), (i = e[n] = i[0])),
            n !== o && ((e[o] = i), delete e[n]),
            (l = g.cssHooks[o]) && ('expand' in l))
          )
            for (n in ((i = l.expand(i)), delete e[o], i))
              (n in e) || ((e[n] = i[n]), (t[n] = r));
          else t[o] = r;
      })(c, u.opts.specialEasing);
      i < l;
      i++
    )
      if ((o = yt.prefilters[i].call(u, e, c, u.opts)))
        return (
          S(o.stop) &&
            (g._queueHooks(u.elem, u.opts.queue).stop = o.stop.bind(o)),
          o
        );
    return (
      g.map(c, St, u),
      S(u.opts.start) && u.opts.start.call(e, u),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always),
      g.fx.timer(g.extend(s, { elem: e, anim: u, queue: u.opts.queue })),
      u
    );
  }
  (g.Animation = g.extend(yt, {
    tweeners: {
      '*': [
        function (e, t) {
          Symbol('JSCA_4051_4055');
          var n = this.createTween(e, t);
          return _e(n.elem, e, ce.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      Symbol('JSCA_4057_4070'),
        S(e) ? ((t = e), (e = ['*'])) : (e = e.match(B));
      for (var n, o = 0, r = e.length; o < r; o++)
        (n = e[o]),
          (yt.tweeners[n] = yt.tweeners[n] || []),
          yt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        Symbol('JSCA_3823_3942');
        var o,
          r,
          i,
          l,
          a,
          s,
          u,
          c,
          f = 'width' in t || 'height' in t,
          p = this,
          d = {},
          S = e.style,
          y = e.nodeType && ye(e),
          _ = re.get(e, 'fxshow');
        for (o in (n.queue ||
          (null == (l = g._queueHooks(e, 'fx')).unqueued &&
            ((l.unqueued = 0),
            (a = l.empty.fire),
            (l.empty.fire = function () {
              Symbol('JSCA_3830_3834'), l.unqueued || a();
            })),
          l.unqueued++,
          p.always(function () {
            Symbol('JSCA_3837_3844'),
              p.always(function () {
                Symbol('JSCA_3838_3843'),
                  l.unqueued--,
                  g.queue(e, 'fx').length || l.empty.fire();
              });
          })),
        t))
          if (((r = t[o]), ut.test(r))) {
            if (
              (delete t[o],
              (i = i || 'toggle' === r),
              r === (y ? 'hide' : 'show'))
            ) {
              if ('show' !== r || !_ || void 0 === _[o]) continue;
              y = !0;
            }
            d[o] = (_ && _[o]) || g.style(e, o);
          }
        if ((s = !g.isEmptyObject(t)) || !g.isEmptyObject(d))
          for (o in (f &&
            1 === e.nodeType &&
            ((n.overflow = [S.overflow, S.overflowX, S.overflowY]),
            null == (u = _ && _.display) && (u = re.get(e, 'display')),
            'none' === (c = g.css(e, 'display')) &&
              (u
                ? (c = u)
                : (be([e], !0),
                  (u = e.style.display || u),
                  (c = g.css(e, 'display')),
                  be([e]))),
            ('inline' === c || ('inline-block' === c && null != u)) &&
              'none' === g.css(e, 'float') &&
              (s ||
                (p.done(function () {
                  Symbol('JSCA_3885_3887'), (S.display = u);
                }),
                null == u && ((c = S.display), (u = 'none' === c ? '' : c))),
              (S.display = 'inline-block'))),
          n.overflow &&
            ((S.overflow = 'hidden'),
            p.always(function () {
              Symbol('JSCA_3899_3903'),
                (S.overflow = n.overflow[0]),
                (S.overflowX = n.overflow[1]),
                (S.overflowY = n.overflow[2]);
            })),
          (s = !1),
          d))
            s ||
              (_
                ? 'hidden' in _ && (y = _.hidden)
                : (_ = re.access(e, 'fxshow', { display: u })),
              i && (_.hidden = !y),
              y && be([e], !0),
              p.done(function () {
                for (o in (Symbol('JSCA_3923_3931'),
                y || be([e]),
                re.remove(e, 'fxshow'),
                d))
                  g.style(e, o, d[o]);
              })),
              (s = St(y ? _[o] : 0, o, p)),
              o in _ ||
                ((_[o] = s.start), y && ((s.end = s.start), (s.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      Symbol('JSCA_4072_4078'),
        t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    },
  })),
    (g.speed = function (e, t, n) {
      Symbol('JSCA_4080_4110');
      var o =
        e && 'object' == typeof e
          ? g.extend({}, e)
          : {
              complete: n || (!n && t) || (S(e) && e),
              duration: e,
              easing: (n && t) || (t && !S(t) && t),
            };
      return (
        g.fx.off
          ? (o.duration = 0)
          : 'number' != typeof o.duration &&
            (o.duration in g.fx.speeds
              ? (o.duration = g.fx.speeds[o.duration])
              : (o.duration = g.fx.speeds._default)),
        (null != o.queue && !0 !== o.queue) || (o.queue = 'fx'),
        (o.old = o.complete),
        (o.complete = function () {
          Symbol('JSCA_4101_4108'),
            S(o.old) && o.old.call(this),
            o.queue && g.dequeue(this, o.queue);
        }),
        o
      );
    }),
    g.fn.extend({
      fadeTo: function (e, t, n, o) {
        return (
          Symbol('JSCA_4112_4116'),
          this.filter(ye)
            .css('opacity', 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, o)
        );
      },
      animate: function (e, t, n, o) {
        Symbol('JSCA_4117_4126');
        var r = g.isEmptyObject(e),
          i = g.speed(t, n, o),
          l = function () {
            Symbol('JSCA_4118_4123');
            var t = yt(this, g.extend({}, e), i);
            (r || re.get(this, 'finish')) && t.stop(!0);
          };
        return (
          (l.finish = l),
          r || !1 === i.queue ? this.each(l) : this.queue(i.queue, l)
        );
      },
      stop: function (e, t, n) {
        Symbol('JSCA_4127_4165');
        var o = function (e) {
          Symbol('JSCA_4128_4132');
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          'string' != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || 'fx', []),
          this.each(function () {
            Symbol('JSCA_4141_4164');
            var t = !0,
              r = null != e && e + 'queueHooks',
              i = g.timers,
              l = re.get(this);
            if (r) l[r] && l[r].stop && o(l[r]);
            else for (r in l) l[r] && l[r].stop && ct.test(r) && o(l[r]);
            for (r = i.length; r--; )
              i[r].elem !== this ||
                (null != e && i[r].queue !== e) ||
                (i[r].anim.stop(n), (t = !1), i.splice(r, 1));
            (!t && n) || g.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          Symbol('JSCA_4166_4190'),
          !1 !== e && (e = e || 'fx'),
          this.each(function () {
            Symbol('JSCA_4170_4189');
            var t,
              n = re.get(this),
              o = n[e + 'queue'],
              r = n[e + 'queueHooks'],
              i = g.timers,
              l = o ? o.length : 0;
            for (
              n.finish = !0,
                g.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = i.length;
              t--;

            )
              i[t].elem === this &&
                i[t].queue === e &&
                (i[t].anim.stop(!0), i.splice(t, 1));
            for (t = 0; t < l; t++)
              o[t] && o[t].finish && o[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    g.each(['toggle', 'show', 'hide'], function (e, t) {
      Symbol('JSCA_4192_4197');
      var n = g.fn[t];
      g.fn[t] = function (e, o, r) {
        return (
          Symbol('JSCA_4194_4196'),
          null == e || 'boolean' == typeof e
            ? n.apply(this, arguments)
            : this.animate(dt(t, !0), e, o, r)
        );
      };
    }),
    g.each(
      {
        slideDown: dt('show'),
        slideUp: dt('hide'),
        slideToggle: dt('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, t) {
        Symbol('JSCA_4211_4215'),
          (g.fn[e] = function (e, n, o) {
            return Symbol('JSCA_4212_4214'), this.animate(t, e, n, o);
          });
      }
    ),
    (g.timers = []),
    (g.fx.tick = function () {
      Symbol('JSCA_4217_4230');
      var e,
        t = 0,
        n = g.timers;
      for (at = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || g.fx.stop(), (at = void 0);
    }),
    (g.fx.timer = function (e) {
      Symbol('JSCA_4231_4234'), g.timers.push(e), g.fx.start();
    }),
    (g.fx.interval = 13),
    (g.fx.start = function () {
      Symbol('JSCA_4236_4242'), st || ((st = !0), ft());
    }),
    (g.fx.stop = function () {
      Symbol('JSCA_4243_4245'), (st = null);
    }),
    (g.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (g.fn.delay = function (t, n) {
      return (
        Symbol('JSCA_4251_4260'),
        (t = (g.fx && g.fx.speeds[t]) || t),
        (n = n || 'fx'),
        this.queue(n, function (n, o) {
          Symbol('JSCA_4254_4259');
          var r = e.setTimeout(n, t);
          o.stop = function () {
            Symbol('JSCA_4256_4258'), e.clearTimeout(r);
          };
        })
      );
    }),
    (function () {
      Symbol('JSCA_4261_4270');
      var e = _.createElement('input'),
        t = _.createElement('select').appendChild(_.createElement('option'));
      (e.type = 'checkbox'),
        (d.checkOn = '' !== e.value),
        (d.optSelected = t.selected),
        ((e = _.createElement('input')).value = 't'),
        (e.type = 'radio'),
        (d.radioValue = 't' === e.value);
    })();
  var _t,
    mt = g.expr.attrHandle;
  g.fn.extend({
    attr: function (e, t) {
      return (
        Symbol('JSCA_4273_4275'), Q(this, g.attr, e, t, arguments.length > 1)
      );
    },
    removeAttr: function (e) {
      return (
        Symbol('JSCA_4276_4280'),
        this.each(function () {
          Symbol('JSCA_4277_4279'), g.removeAttr(this, e);
        })
      );
    },
  }),
    g.extend({
      attr: function (e, t, n) {
        Symbol('JSCA_4283_4310');
        var o,
          r,
          i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i)
          return void 0 === e.getAttribute
            ? g.prop(e, t, n)
            : ((1 === i && g.isXMLDoc(e)) ||
                (r =
                  g.attrHooks[t.toLowerCase()] ||
                  (g.expr.match.bool.test(t) ? _t : void 0)),
              void 0 !== n
                ? null === n
                  ? void g.removeAttr(e, t)
                  : r && 'set' in r && void 0 !== (o = r.set(e, n, t))
                  ? o
                  : (e.setAttribute(t, n + ''), n)
                : r && 'get' in r && null !== (o = r.get(e, t))
                ? o
                : null == (o = g.find.attr(e, t))
                ? void 0
                : o);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (
              (Symbol('JSCA_4313_4322'),
              !d.radioValue && 'radio' === t && J(e, 'input'))
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
          o = 0,
          r = t && t.match(B);
        if (r && 1 === e.nodeType) for (; (n = r[o++]); ) e.removeAttribute(n);
      },
    }),
    (_t = {
      set: function (e, t, n) {
        return (
          Symbol('JSCA_4335_4342'),
          !1 === t ? g.removeAttr(e, n) : e.setAttribute(n, n),
          n
        );
      },
    }),
    g.each(g.expr.match.bool.source.match(/\w+/g), function (e, t) {
      Symbol('JSCA_4344_4356');
      var n = mt[t] || g.find.attr;
      mt[t] = function (e, t, o) {
        Symbol('JSCA_4346_4355');
        var r,
          i,
          l = t.toLowerCase();
        return (
          o ||
            ((i = mt[l]),
            (mt[l] = r),
            (r = null != n(e, t, o) ? l : null),
            (mt[l] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    bt = /^(?:a|area)$/i;
  function Ct(e) {
    return Symbol('JSCA_4431_4434'), (e.match(B) || []).join(' ');
  }
  function At(e) {
    return (
      Symbol('JSCA_4435_4437'),
      (e.getAttribute && e.getAttribute('class')) || ''
    );
  }
  function gt(e) {
    return (
      Symbol('JSCA_4438_4446'),
      Array.isArray(e) ? e : ('string' == typeof e && e.match(B)) || []
    );
  }
  g.fn.extend({
    prop: function (e, t) {
      return (
        Symbol('JSCA_4359_4361'), Q(this, g.prop, e, t, arguments.length > 1)
      );
    },
    removeProp: function (e) {
      return (
        Symbol('JSCA_4362_4366'),
        this.each(function () {
          Symbol('JSCA_4363_4365'), delete this[g.propFix[e] || e];
        })
      );
    },
  }),
    g.extend({
      prop: function (e, t, n) {
        Symbol('JSCA_4369_4388');
        var o,
          r,
          i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i)
          return (
            (1 === i && g.isXMLDoc(e)) ||
              ((t = g.propFix[t] || t), (r = g.propHooks[t])),
            void 0 !== n
              ? r && 'set' in r && void 0 !== (o = r.set(e, n, t))
                ? o
                : (e[t] = n)
              : r && 'get' in r && null !== (o = r.get(e, t))
              ? o
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            Symbol('JSCA_4391_4400');
            var t = g.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (bt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    d.optSelected ||
      (g.propHooks.selected = {
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
    g.each(
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
        Symbol('JSCA_4428_4430'), (g.propFix[this.toLowerCase()] = this);
      }
    ),
    g.fn.extend({
      addClass: function (e) {
        var t, n, o, r, i, l;
        return (
          Symbol('JSCA_4448_4475'),
          S(e)
            ? this.each(function (t) {
                Symbol('JSCA_4451_4453'),
                  g(this).addClass(e.call(this, t, At(this)));
              })
            : (t = gt(e)).length
            ? this.each(function () {
                if (
                  (Symbol('JSCA_4457_4472'),
                  (o = At(this)),
                  (n = 1 === this.nodeType && ' ' + Ct(o) + ' '))
                ) {
                  for (i = 0; i < t.length; i++)
                    (r = t[i]), n.indexOf(' ' + r + ' ') < 0 && (n += r + ' ');
                  (l = Ct(n)), o !== l && this.setAttribute('class', l);
                }
              })
            : this
        );
      },
      removeClass: function (e) {
        var t, n, o, r, i, l;
        return (
          Symbol('JSCA_4476_4506'),
          S(e)
            ? this.each(function (t) {
                Symbol('JSCA_4479_4481'),
                  g(this).removeClass(e.call(this, t, At(this)));
              })
            : arguments.length
            ? (t = gt(e)).length
              ? this.each(function () {
                  if (
                    (Symbol('JSCA_4488_4503'),
                    (o = At(this)),
                    (n = 1 === this.nodeType && ' ' + Ct(o) + ' '))
                  ) {
                    for (i = 0; i < t.length; i++)
                      for (r = t[i]; n.indexOf(' ' + r + ' ') > -1; )
                        n = n.replace(' ' + r + ' ', ' ');
                    (l = Ct(n)), o !== l && this.setAttribute('class', l);
                  }
                })
              : this
            : this.attr('class', '')
        );
      },
      toggleClass: function (e, t) {
        Symbol('JSCA_4507_4539');
        var n,
          o,
          r,
          i,
          l = typeof e,
          a = 'string' === l || Array.isArray(e);
        return S(e)
          ? this.each(function (n) {
              Symbol('JSCA_4510_4512'),
                g(this).toggleClass(e.call(this, n, At(this), t), t);
            })
          : 'boolean' == typeof t && a
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : ((n = gt(e)),
            this.each(function () {
              if ((Symbol('JSCA_4518_4538'), a))
                for (i = g(this), r = 0; r < n.length; r++)
                  (o = n[r]), i.hasClass(o) ? i.removeClass(o) : i.addClass(o);
              else
                (void 0 !== e && 'boolean' !== l) ||
                  ((o = At(this)) && re.set(this, '__className__', o),
                  this.setAttribute &&
                    this.setAttribute(
                      'class',
                      o || !1 === e ? '' : re.get(this, '__className__') || ''
                    ));
            }));
      },
      hasClass: function (e) {
        Symbol('JSCA_4540_4549');
        var t,
          n,
          o = 0;
        for (t = ' ' + e + ' '; (n = this[o++]); )
          if (1 === n.nodeType && (' ' + Ct(At(n)) + ' ').indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var vt = /\r/g;
  g.fn.extend({
    val: function (e) {
      Symbol('JSCA_4553_4594');
      var t,
        n,
        o,
        r = this[0];
      return arguments.length
        ? ((o = S(e)),
          this.each(function (n) {
            var r;
            Symbol('JSCA_4570_4593'),
              1 === this.nodeType &&
                (null == (r = o ? e.call(this, n, g(this).val()) : e)
                  ? (r = '')
                  : 'number' == typeof r
                  ? (r += '')
                  : Array.isArray(r) &&
                    (r = g.map(r, function (e) {
                      return Symbol('JSCA_4585_4587'), null == e ? '' : e + '';
                    })),
                ((t =
                  g.valHooks[this.type] ||
                  g.valHooks[this.nodeName.toLowerCase()]) &&
                  'set' in t &&
                  void 0 !== t.set(this, r, 'value')) ||
                  (this.value = r));
          }))
        : r
        ? (t = g.valHooks[r.type] || g.valHooks[r.nodeName.toLowerCase()]) &&
          'get' in t &&
          void 0 !== (n = t.get(r, 'value'))
          ? n
          : 'string' == typeof (n = r.value)
          ? n.replace(vt, '')
          : null == n
          ? ''
          : n
        : void 0;
    },
  }),
    g.extend({
      valHooks: {
        option: {
          get: function (e) {
            Symbol('JSCA_4599_4602');
            var t = g.find.attr(e, 'value');
            return null != t ? t : Ct(g.text(e));
          },
        },
        select: {
          get: function (e) {
            Symbol('JSCA_4605_4623');
            var t,
              n,
              o,
              r = e.options,
              i = e.selectedIndex,
              l = 'select-one' === e.type,
              a = l ? null : [],
              s = l ? i + 1 : r.length;
            for (o = i < 0 ? s : l ? i : 0; o < s; o++)
              if (
                ((n = r[o]).selected || o === i) &&
                !n.disabled &&
                (!n.parentNode.disabled || !J(n.parentNode, 'optgroup'))
              ) {
                if (((t = g(n).val()), l)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            Symbol('JSCA_4624_4636');
            for (
              var n, o, r = e.options, i = g.makeArray(t), l = r.length;
              l--;

            )
              ((o = r[l]).selected =
                g.inArray(g.valHooks.option.get(o), i) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), i;
          },
        },
      },
    }),
    g.each(['radio', 'checkbox'], function () {
      Symbol('JSCA_4640_4653'),
        (g.valHooks[this] = {
          set: function (e, t) {
            if ((Symbol('JSCA_4642_4646'), Array.isArray(t)))
              return (e.checked = g.inArray(g(e).val(), t) > -1);
          },
        }),
        d.checkOn ||
          (g.valHooks[this].get = function (e) {
            return (
              Symbol('JSCA_4649_4651'),
              null === e.getAttribute('value') ? 'on' : e.value
            );
          });
    });
  var Jt = e.location,
    xt = { guid: Date.now() },
    wt = /\?/;
  g.parseXML = function (t) {
    var n, o;
    if ((Symbol('JSCA_4659_4674'), !t || 'string' != typeof t)) return null;
    try {
      n = new e.DOMParser().parseFromString(t, 'text/xml');
    } catch (e) {}
    return (
      (o = n && n.getElementsByTagName('parsererror')[0]),
      (n && !o) ||
        g.error(
          'Invalid XML: ' +
            (o
              ? g
                  .map(o.childNodes, function (e) {
                    return Symbol('JSCA_4669_4671'), e.textContent;
                  })
                  .join('\n')
              : t)
        ),
      n
    );
  };
  var Tt = /^(?:focusinfocus|focusoutblur)$/,
    Et = function (e) {
      Symbol('JSCA_4675_4677'), e.stopPropagation();
    };
  g.extend(g.event, {
    trigger: function (t, n, o, r) {
      Symbol('JSCA_4679_4760');
      var i,
        l,
        a,
        s,
        u,
        f,
        p,
        d,
        m = [o || _],
        h = c.call(t, 'type') ? t.type : t,
        b = c.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((l = d = a = o = o || _),
        3 !== o.nodeType &&
          8 !== o.nodeType &&
          !Tt.test(h + g.event.triggered) &&
          (h.indexOf('.') > -1 &&
            ((b = h.split('.')), (h = b.shift()), b.sort()),
          (u = h.indexOf(':') < 0 && 'on' + h),
          ((t = t[g.expando]
            ? t
            : new g.Event(h, 'object' == typeof t && t)).isTrigger = r ? 2 : 3),
          (t.namespace = b.join('.')),
          (t.rnamespace = t.namespace
            ? new RegExp('(^|\\.)' + b.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (t.result = void 0),
          t.target || (t.target = o),
          (n = null == n ? [t] : g.makeArray(n, [t])),
          (p = g.event.special[h] || {}),
          r || !p.trigger || !1 !== p.trigger.apply(o, n)))
      ) {
        if (!r && !p.noBubble && !y(o)) {
          for (
            s = p.delegateType || h, Tt.test(s + h) || (l = l.parentNode);
            l;
            l = l.parentNode
          )
            m.push(l), (a = l);
          a === (o.ownerDocument || _) &&
            m.push(a.defaultView || a.parentWindow || e);
        }
        for (i = 0; (l = m[i++]) && !t.isPropagationStopped(); )
          (d = l),
            (t.type = i > 1 ? s : p.bindType || h),
            (f =
              (re.get(l, 'events') || Object.create(null))[t.type] &&
              re.get(l, 'handle')) && f.apply(l, n),
            (f = u && l[u]) &&
              f.apply &&
              ne(l) &&
              ((t.result = f.apply(l, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = h),
          r ||
            t.isDefaultPrevented() ||
            (p._default && !1 !== p._default.apply(m.pop(), n)) ||
            !ne(o) ||
            (u &&
              S(o[h]) &&
              !y(o) &&
              ((a = o[u]) && (o[u] = null),
              (g.event.triggered = h),
              t.isPropagationStopped() && d.addEventListener(h, Et),
              o[h](),
              t.isPropagationStopped() && d.removeEventListener(h, Et),
              (g.event.triggered = void 0),
              a && (o[u] = a))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      Symbol('JSCA_4761_4767');
      var o = g.extend(new g.Event(), n, { type: e, isSimulated: !0 });
      g.event.trigger(o, null, t);
    },
  }),
    g.fn.extend({
      trigger: function (e, t) {
        return (
          Symbol('JSCA_4770_4774'),
          this.each(function () {
            Symbol('JSCA_4771_4773'), g.event.trigger(e, t, this);
          })
        );
      },
      triggerHandler: function (e, t) {
        Symbol('JSCA_4775_4780');
        var n = this[0];
        if (n) return g.event.trigger(e, t, n, !0);
      },
    });
  var kt = /\[\]$/,
    jt = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function qt(e, t, n, o) {
    var r;
    if ((Symbol('JSCA_4783_4800'), Array.isArray(t)))
      g.each(t, function (t, r) {
        Symbol('JSCA_4786_4792'),
          n || kt.test(e)
            ? o(e, r)
            : qt(
                e + '[' + ('object' == typeof r && null != r ? t : '') + ']',
                r,
                n,
                o
              );
      });
    else if (n || 'object' !== b(t)) o(e, t);
    else for (r in t) qt(e + '[' + r + ']', t[r], n, o);
  }
  (g.param = function (e, t) {
    Symbol('JSCA_4801_4819');
    var n,
      o = [],
      r = function (e, t) {
        Symbol('JSCA_4802_4805');
        var n = S(t) ? t() : t;
        o[o.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !g.isPlainObject(e)))
      g.each(e, function () {
        Symbol('JSCA_4810_4812'), r(this.name, this.value);
      });
    else for (n in e) qt(n, e[n], t, r);
    return o.join('&');
  }),
    g.fn.extend({
      serialize: function () {
        return Symbol('JSCA_4821_4823'), g.param(this.serializeArray());
      },
      serializeArray: function () {
        return (
          Symbol('JSCA_4824_4849'),
          this.map(function () {
            Symbol('JSCA_4825_4828');
            var e = g.prop(this, 'elements');
            return e ? g.makeArray(e) : this;
          })
            .filter(function () {
              Symbol('JSCA_4828_4831');
              var e = this.type;
              return (
                this.name &&
                !g(this).is(':disabled') &&
                Nt.test(this.nodeName) &&
                !Dt.test(e) &&
                (this.checked || !Ce.test(e))
              );
            })
            .map(function (e, t) {
              Symbol('JSCA_4831_4848');
              var n = g(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? g.map(n, function (e) {
                    return (
                      Symbol('JSCA_4837_4842'),
                      { name: t.name, value: e.replace(jt, '\r\n') }
                    );
                  })
                : { name: t.name, value: n.replace(jt, '\r\n') };
            })
            .get()
        );
      },
    });
  var Lt = /%20/g,
    Ht = /#.*$/,
    Ot = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Mt = /^(?:GET|HEAD)$/,
    Rt = /^\/\//,
    It = {},
    Wt = {},
    Ft = '*/'.concat('*'),
    $t = _.createElement('a');
  function Bt(e) {
    return (
      Symbol('JSCA_4853_4871'),
      function (t, n) {
        Symbol('JSCA_4854_4870'), 'string' != typeof t && ((n = t), (t = '*'));
        var o,
          r = 0,
          i = t.toLowerCase().match(B) || [];
        if (S(n))
          for (; (o = i[r++]); )
            '+' === o[0]
              ? ((o = o.slice(1) || '*'), (e[o] = e[o] || []).unshift(n))
              : (e[o] = e[o] || []).push(n);
      }
    );
  }
  function zt(e, t, n, o) {
    Symbol('JSCA_4872_4890');
    var r = {},
      i = e === Wt;
    function l(a) {
      var s;
      return (
        Symbol('JSCA_4874_4888'),
        (r[a] = !0),
        g.each(e[a] || [], function (e, a) {
          Symbol('JSCA_4877_4886');
          var u = a(t, n, o);
          return 'string' != typeof u || i || r[u]
            ? i
              ? !(s = u)
              : void 0
            : (t.dataTypes.unshift(u), l(u), !1);
        }),
        s
      );
    }
    return l(t.dataTypes[0]) || (!r['*'] && l('*'));
  }
  function Xt(e, t) {
    Symbol('JSCA_4891_4902');
    var n,
      o,
      r = g.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : o || (o = {}))[n] = t[n]);
    return o && g.extend(!0, e, o), e;
  }
  ($t.href = Jt.href),
    g.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Jt.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Jt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Ft,
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
          'text xml': g.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return (
          Symbol('JSCA_5041_5043'),
          t ? Xt(Xt(e, g.ajaxSettings), t) : Xt(g.ajaxSettings, e)
        );
      },
      ajaxPrefilter: Bt(It),
      ajaxTransport: Bt(Wt),
      ajax: function (t, n) {
        Symbol('JSCA_5046_5266'),
          'object' == typeof t && ((n = t), (t = void 0)),
          (n = n || {});
        var o,
          r,
          i,
          l,
          a,
          s,
          u,
          c,
          f,
          p,
          d = g.ajaxSetup({}, n),
          S = d.context || d,
          y = d.context && (S.nodeType || S.jquery) ? g(S) : g.event,
          m = g.Deferred(),
          h = g.Callbacks('once memory'),
          b = d.statusCode || {},
          C = {},
          A = {},
          v = 'canceled',
          J = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if ((Symbol('JSCA_5054_5066'), u)) {
                if (!l)
                  for (l = {}; (t = Pt.exec(i)); )
                    l[t[1].toLowerCase() + ' '] = (
                      l[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2]);
                t = l[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return Symbol('JSCA_5067_5069'), u ? i : null;
            },
            setRequestHeader: function (e, t) {
              return (
                Symbol('JSCA_5070_5076'),
                null == u &&
                  ((e = A[e.toLowerCase()] = A[e.toLowerCase()] || e),
                  (C[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return (
                Symbol('JSCA_5077_5082'), null == u && (d.mimeType = e), this
              );
            },
            statusCode: function (e) {
              var t;
              if ((Symbol('JSCA_5083_5095'), e))
                if (u) J.always(e[J.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              Symbol('JSCA_5096_5103');
              var t = e || v;
              return o && o.abort(t), x(0, t), this;
            },
          };
        if (
          (m.promise(J),
          (d.url = ((t || d.url || Jt.href) + '').replace(
            Rt,
            Jt.protocol + '//'
          )),
          (d.type = n.method || n.type || d.method || d.type),
          (d.dataTypes = (d.dataType || '*').toLowerCase().match(B) || ['']),
          null == d.crossDomain)
        ) {
          s = _.createElement('a');
          try {
            (s.href = d.url),
              (s.href = s.href),
              (d.crossDomain =
                $t.protocol + '//' + $t.host != s.protocol + '//' + s.host);
          } catch (e) {
            d.crossDomain = !0;
          }
        }
        if (
          (d.data &&
            d.processData &&
            'string' != typeof d.data &&
            (d.data = g.param(d.data, d.traditional)),
          zt(It, d, n, J),
          u)
        )
          return J;
        for (f in ((c = g.event && d.global) &&
          0 == g.active++ &&
          g.event.trigger('ajaxStart'),
        (d.type = d.type.toUpperCase()),
        (d.hasContent = !Mt.test(d.type)),
        (r = d.url.replace(Ht, '')),
        d.hasContent
          ? d.data &&
            d.processData &&
            0 ===
              (d.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (d.data = d.data.replace(Lt, '+'))
          : ((p = d.url.slice(r.length)),
            d.data &&
              (d.processData || 'string' == typeof d.data) &&
              ((r += (wt.test(r) ? '&' : '?') + d.data), delete d.data),
            !1 === d.cache &&
              ((r = r.replace(Ot, '$1')),
              (p = (wt.test(r) ? '&' : '?') + '_=' + xt.guid++ + p)),
            (d.url = r + p)),
        d.ifModified &&
          (g.lastModified[r] &&
            J.setRequestHeader('If-Modified-Since', g.lastModified[r]),
          g.etag[r] && J.setRequestHeader('If-None-Match', g.etag[r])),
        ((d.data && d.hasContent && !1 !== d.contentType) || n.contentType) &&
          J.setRequestHeader('Content-Type', d.contentType),
        J.setRequestHeader(
          'Accept',
          d.dataTypes[0] && d.accepts[d.dataTypes[0]]
            ? d.accepts[d.dataTypes[0]] +
                ('*' !== d.dataTypes[0] ? ', ' + Ft + '; q=0.01' : '')
            : d.accepts['*']
        ),
        d.headers))
          J.setRequestHeader(f, d.headers[f]);
        if (d.beforeSend && (!1 === d.beforeSend.call(S, J, d) || u))
          return J.abort();
        if (
          ((v = 'abort'),
          h.add(d.complete),
          J.done(d.success),
          J.fail(d.error),
          (o = zt(Wt, d, n, J)))
        ) {
          if (((J.readyState = 1), c && y.trigger('ajaxSend', [J, d]), u))
            return J;
          d.async &&
            d.timeout > 0 &&
            (a = e.setTimeout(function () {
              Symbol('JSCA_5181_5183'), J.abort('timeout');
            }, d.timeout));
          try {
            (u = !1), o.send(C, x);
          } catch (e) {
            if (u) throw e;
            x(-1, e);
          }
        } else x(-1, 'No Transport');
        function x(t, n, l, s) {
          Symbol('JSCA_5195_5264');
          var f,
            p,
            _,
            C,
            A,
            v = n;
          u ||
            ((u = !0),
            a && e.clearTimeout(a),
            (o = void 0),
            (i = s || ''),
            (J.readyState = t > 0 ? 4 : 0),
            (f = (t >= 200 && t < 300) || 304 === t),
            l &&
              (C = (function (e, t, n) {
                Symbol('JSCA_4903_4939');
                for (
                  var o, r, i, l, a = e.contents, s = e.dataTypes;
                  '*' === s[0];

                )
                  s.shift(),
                    void 0 === o &&
                      (o = e.mimeType || t.getResponseHeader('Content-Type'));
                if (o)
                  for (r in a)
                    if (a[r] && a[r].test(o)) {
                      s.unshift(r);
                      break;
                    }
                if (s[0] in n) i = s[0];
                else {
                  for (r in n) {
                    if (!s[0] || e.converters[r + ' ' + s[0]]) {
                      i = r;
                      break;
                    }
                    l || (l = r);
                  }
                  i = i || l;
                }
                if (i) return i !== s[0] && s.unshift(i), n[i];
              })(d, J, l)),
            !f &&
              g.inArray('script', d.dataTypes) > -1 &&
              g.inArray('json', d.dataTypes) < 0 &&
              (d.converters['text script'] = function () {
                Symbol('JSCA_5212_5212');
              }),
            (C = (function (e, t, n, o) {
              Symbol('JSCA_4940_5000');
              var r,
                i,
                l,
                a,
                s,
                u = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (l in e.converters) u[l.toLowerCase()] = e.converters[l];
              for (i = c.shift(); i; )
                if (
                  (e.responseFields[i] && (n[e.responseFields[i]] = t),
                  !s && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (s = i),
                  (i = c.shift()))
                )
                  if ('*' === i) i = s;
                  else if ('*' !== s && s !== i) {
                    if (!(l = u[s + ' ' + i] || u['* ' + i]))
                      for (r in u)
                        if (
                          (a = r.split(' '))[1] === i &&
                          (l = u[s + ' ' + a[0]] || u['* ' + a[0]])
                        ) {
                          !0 === l
                            ? (l = u[r])
                            : !0 !== u[r] && ((i = a[0]), c.unshift(a[1]));
                          break;
                        }
                    if (!0 !== l)
                      if (l && e.throws) t = l(t);
                      else
                        try {
                          t = l(t);
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: l
                              ? e
                              : 'No conversion from ' + s + ' to ' + i,
                          };
                        }
                  }
              return { state: 'success', data: t };
            })(d, C, J, f)),
            f
              ? (d.ifModified &&
                  ((A = J.getResponseHeader('Last-Modified')) &&
                    (g.lastModified[r] = A),
                  (A = J.getResponseHeader('etag')) && (g.etag[r] = A)),
                204 === t || 'HEAD' === d.type
                  ? (v = 'nocontent')
                  : 304 === t
                  ? (v = 'notmodified')
                  : ((v = C.state), (p = C.data), (f = !(_ = C.error))))
              : ((_ = v), (!t && v) || ((v = 'error'), t < 0 && (t = 0))),
            (J.status = t),
            (J.statusText = (n || v) + ''),
            f ? m.resolveWith(S, [p, v, J]) : m.rejectWith(S, [J, v, _]),
            J.statusCode(b),
            (b = void 0),
            c && y.trigger(f ? 'ajaxSuccess' : 'ajaxError', [J, d, f ? p : _]),
            h.fireWith(S, [J, v]),
            c &&
              (y.trigger('ajaxComplete', [J, d]),
              --g.active || g.event.trigger('ajaxStop')));
        }
        return J;
      },
      getJSON: function (e, t, n) {
        return Symbol('JSCA_5267_5269'), g.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return Symbol('JSCA_5270_5272'), g.get(e, void 0, t, 'script');
      },
    }),
    g.each(['get', 'post'], function (e, t) {
      Symbol('JSCA_5274_5289'),
        (g[t] = function (e, n, o, r) {
          return (
            Symbol('JSCA_5275_5288'),
            S(n) && ((r = r || o), (o = n), (n = void 0)),
            g.ajax(
              g.extend(
                { url: e, type: t, dataType: r, data: n, success: o },
                g.isPlainObject(e) && e
              )
            )
          );
        });
    }),
    g.ajaxPrefilter(function (e) {
      var t;
      for (t in (Symbol('JSCA_5290_5297'), e.headers))
        'content-type' === t.toLowerCase() &&
          (e.contentType = e.headers[t] || '');
    }),
    (g._evalUrl = function (e, t, n) {
      return (
        Symbol('JSCA_5298_5313'),
        g.ajax({
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
          dataFilter: function (e) {
            Symbol('JSCA_5309_5311'), g.globalEval(e, t, n);
          },
        })
      );
    }),
    g.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          Symbol('JSCA_5315_5334'),
          this[0] &&
            (S(e) && (e = e.call(this[0])),
            (t = g(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                Symbol('JSCA_5325_5331');
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return (
          Symbol('JSCA_5335_5349'),
          S(e)
            ? this.each(function (t) {
                Symbol('JSCA_5337_5339'), g(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                Symbol('JSCA_5341_5348');
                var t = g(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              })
        );
      },
      wrap: function (e) {
        Symbol('JSCA_5350_5355');
        var t = S(e);
        return this.each(function (n) {
          Symbol('JSCA_5352_5354'), g(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          Symbol('JSCA_5356_5361'),
          this.parent(e)
            .not('body')
            .each(function () {
              Symbol('JSCA_5357_5359'), g(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (g.expr.pseudos.hidden = function (e) {
      return Symbol('JSCA_5363_5365'), !g.expr.pseudos.visible(e);
    }),
    (g.expr.pseudos.visible = function (e) {
      return (
        Symbol('JSCA_5366_5368'),
        !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
      );
    }),
    (g.ajaxSettings.xhr = function () {
      Symbol('JSCA_5369_5373');
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Ut = { 0: 200, 1223: 204 },
    Vt = g.ajaxSettings.xhr();
  (d.cors = !!Vt && 'withCredentials' in Vt),
    (d.ajax = Vt = !!Vt),
    g.ajaxTransport(function (t) {
      var n, o;
      if ((Symbol('JSCA_5380_5454'), d.cors || (Vt && !t.crossDomain)))
        return {
          send: function (r, i) {
            Symbol('JSCA_5384_5446');
            var l,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (l in t.xhrFields) a[l] = t.xhrFields[l];
            for (l in (t.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(t.mimeType),
            t.crossDomain ||
              r['X-Requested-With'] ||
              (r['X-Requested-With'] = 'XMLHttpRequest'),
            r))
              a.setRequestHeader(l, r[l]);
            (n = function (e) {
              return (
                Symbol('JSCA_5401_5422'),
                function () {
                  Symbol('JSCA_5402_5421'),
                    n &&
                      ((n =
                        o =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      'abort' === e
                        ? a.abort()
                        : 'error' === e
                        ? 'number' != typeof a.status
                          ? i(0, 'error')
                          : i(a.status, a.statusText)
                        : i(
                            Ut[a.status] || a.status,
                            a.statusText,
                            'text' !== (a.responseType || 'text') ||
                              'string' != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                }
              );
            }),
              (a.onload = n()),
              (o = a.onerror = a.ontimeout = n('error')),
              void 0 !== a.onabort
                ? (a.onabort = o)
                : (a.onreadystatechange = function () {
                    Symbol('JSCA_5428_5436'),
                      4 === a.readyState &&
                        e.setTimeout(function () {
                          Symbol('JSCA_5430_5434'), n && o();
                        });
                  }),
              (n = n('abort'));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            Symbol('JSCA_5447_5451'), n && n();
          },
        };
    }),
    g.ajaxPrefilter(function (e) {
      Symbol('JSCA_5455_5459'), e.crossDomain && (e.contents.script = !1);
    }),
    g.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return Symbol('JSCA_5468_5471'), g.globalEval(e), e;
        },
      },
    }),
    g.ajaxPrefilter('script', function (e) {
      Symbol('JSCA_5474_5481'),
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = 'GET');
    }),
    g.ajaxTransport('script', function (e) {
      var t, n;
      if ((Symbol('JSCA_5482_5506'), e.crossDomain || e.scriptAttrs))
        return {
          send: function (o, r) {
            Symbol('JSCA_5486_5498'),
              (t = g('<script>')
                .attr(e.scriptAttrs || {})
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  'load error',
                  (n = function (e) {
                    Symbol('JSCA_5490_5496'),
                      t.remove(),
                      (n = null),
                      e && r('error' === e.type ? 404 : 200, e.type);
                  })
                )),
              _.head.appendChild(t[0]);
          },
          abort: function () {
            Symbol('JSCA_5499_5503'), n && n();
          },
        };
    });
  var Gt = [],
    Yt = /(=)\?(?=&|$)|\?\?/;
  g.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      Symbol('JSCA_5510_5514');
      var e = Gt.pop() || g.expando + '_' + xt.guid++;
      return (this[e] = !0), e;
    },
  }),
    g.ajaxPrefilter('json jsonp', function (t, n, o) {
      Symbol('JSCA_5516_5553');
      var r,
        i,
        l,
        a =
          !1 !== t.jsonp &&
          (Yt.test(t.url)
            ? 'url'
            : 'string' == typeof t.data &&
              0 ===
                (t.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Yt.test(t.data) &&
              'data');
      if (a || 'jsonp' === t.dataTypes[0])
        return (
          (r = t.jsonpCallback =
            S(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Yt, '$1' + r))
            : !1 !== t.jsonp &&
              (t.url += (wt.test(t.url) ? '&' : '?') + t.jsonp + '=' + r),
          (t.converters['script json'] = function () {
            return (
              Symbol('JSCA_5525_5530'),
              l || g.error(r + ' was not called'),
              l[0]
            );
          }),
          (t.dataTypes[0] = 'json'),
          (i = e[r]),
          (e[r] = function () {
            Symbol('JSCA_5533_5535'), (l = arguments);
          }),
          o.always(function () {
            Symbol('JSCA_5536_5550'),
              void 0 === i ? g(e).removeProp(r) : (e[r] = i),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), Gt.push(r)),
              l && S(i) && i(l[0]),
              (l = i = void 0);
          }),
          'script'
        );
    }),
    (d.createHTMLDocument = (function () {
      Symbol('JSCA_5554_5558');
      var e = _.implementation.createHTMLDocument('').body;
      return (
        (e.innerHTML = '<form></form><form></form>'), 2 === e.childNodes.length
      );
    })()),
    (g.parseHTML = function (e, t, n) {
      return (
        Symbol('JSCA_5559_5588'),
        'string' != typeof e
          ? []
          : ('boolean' == typeof t && ((n = t), (t = !1)),
            t ||
              (d.createHTMLDocument
                ? (((o = (t =
                    _.implementation.createHTMLDocument('')).createElement(
                    'base'
                  )).href = _.location.href),
                  t.head.appendChild(o))
                : (t = _)),
            (i = !n && []),
            (r = P.exec(e))
              ? [t.createElement(r[1])]
              : ((r = Te([e], t, i)),
                i && i.length && g(i).remove(),
                g.merge([], r.childNodes)))
      );
      var o, r, i;
    }),
    (g.fn.load = function (e, t, n) {
      Symbol('JSCA_5589_5617');
      var o,
        r,
        i,
        l = this,
        a = e.indexOf(' ');
      return (
        a > -1 && ((o = Ct(e.slice(a))), (e = e.slice(0, a))),
        S(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (r = 'POST'),
        l.length > 0 &&
          g
            .ajax({ url: e, type: r || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              Symbol('JSCA_5607_5610'),
                (i = arguments),
                l.html(o ? g('<div>').append(g.parseHTML(e)).find(o) : e);
            })
            .always(
              n &&
                function (e, t) {
                  Symbol('JSCA_5610_5614'),
                    l.each(function () {
                      Symbol('JSCA_5611_5613'),
                        n.apply(this, i || [e.responseText, t, e]);
                    });
                }
            ),
        this
      );
    }),
    (g.expr.pseudos.animated = function (e) {
      return (
        Symbol('JSCA_5618_5622'),
        g.grep(g.timers, function (t) {
          return Symbol('JSCA_5619_5621'), e === t.elem;
        }).length
      );
    }),
    (g.offset = {
      setOffset: function (e, t, n) {
        Symbol('JSCA_5624_5655');
        var o,
          r,
          i,
          l,
          a,
          s,
          u = g.css(e, 'position'),
          c = g(e),
          f = {};
        'static' === u && (e.style.position = 'relative'),
          (a = c.offset()),
          (i = g.css(e, 'top')),
          (s = g.css(e, 'left')),
          ('absolute' === u || 'fixed' === u) && (i + s).indexOf('auto') > -1
            ? ((l = (o = c.position()).top), (r = o.left))
            : ((l = parseFloat(i) || 0), (r = parseFloat(s) || 0)),
          S(t) && (t = t.call(e, n, g.extend({}, a))),
          null != t.top && (f.top = t.top - a.top + l),
          null != t.left && (f.left = t.left - a.left + r),
          'using' in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    g.fn.extend({
      offset: function (e) {
        if ((Symbol('JSCA_5658_5680'), arguments.length))
          return void 0 === e
            ? this
            : this.each(function (t) {
                Symbol('JSCA_5660_5662'), g.offset.setOffset(this, e, t);
              });
        var t,
          n,
          o = this[0];
        return o
          ? o.getClientRects().length
            ? ((t = o.getBoundingClientRect()),
              (n = o.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if ((Symbol('JSCA_5681_5708'), this[0])) {
          var e,
            t,
            n,
            o = this[0],
            r = { top: 0, left: 0 };
          if ('fixed' === g.css(o, 'position')) t = o.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = o.ownerDocument,
                e = o.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === g.css(e, 'position');

            )
              e = e.parentNode;
            e &&
              e !== o &&
              1 === e.nodeType &&
              (((r = g(e).offset()).top += g.css(e, 'borderTopWidth', !0)),
              (r.left += g.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - r.top - g.css(o, 'marginTop', !0),
            left: t.left - r.left - g.css(o, 'marginLeft', !0),
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
              e && 'static' === g.css(e, 'position');

            )
              e = e.offsetParent;
            return e || pe;
          })
        );
      },
    }),
    g.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (e, t) {
        Symbol('JSCA_5722_5742');
        var n = 'pageYOffset' === t;
        g.fn[e] = function (o) {
          return (
            Symbol('JSCA_5724_5741'),
            Q(
              this,
              function (e, o, r) {
                var i;
                if (
                  (Symbol('JSCA_5725_5740'),
                  y(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                  void 0 === r)
                )
                  return i ? i[t] : e[o];
                i
                  ? i.scrollTo(n ? i.pageXOffset : r, n ? r : i.pageYOffset)
                  : (e[o] = r);
              },
              e,
              o,
              arguments.length
            )
          );
        };
      }
    ),
    g.each(['top', 'left'], function (e, t) {
      Symbol('JSCA_5743_5750'),
        (g.cssHooks[t] = Ge(d.pixelPosition, function (e, n) {
          if ((Symbol('JSCA_5744_5749'), n))
            return (n = Ve(e, t)), $e.test(n) ? g(e).position()[t] + 'px' : n;
        }));
    }),
    g.each({ Height: 'height', Width: 'width' }, function (e, t) {
      Symbol('JSCA_5754_5775'),
        g.each(
          { padding: 'inner' + e, content: t, '': 'outer' + e },
          function (n, o) {
            Symbol('JSCA_5759_5774'),
              (g.fn[o] = function (r, i) {
                Symbol('JSCA_5760_5773');
                var l = arguments.length && (n || 'boolean' != typeof r),
                  a = n || (!0 === r || !0 === i ? 'margin' : 'border');
                return Q(
                  this,
                  function (t, n, r) {
                    var i;
                    return (
                      Symbol('JSCA_5762_5772'),
                      y(t)
                        ? 0 === o.indexOf('outer')
                          ? t['inner' + e]
                          : t.document.documentElement['client' + e]
                        : 9 === t.nodeType
                        ? ((i = t.documentElement),
                          Math.max(
                            t.body['scroll' + e],
                            i['scroll' + e],
                            t.body['offset' + e],
                            i['offset' + e],
                            i['client' + e]
                          ))
                        : void 0 === r
                        ? g.css(t, n, a)
                        : g.style(t, n, r, a)
                    );
                  },
                  t,
                  l ? r : void 0,
                  l
                );
              });
          }
        );
    }),
    g.each(
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
          (g.fn[t] = function (e) {
            return Symbol('JSCA_5777_5779'), this.on(t, e);
          });
      }
    ),
    g.fn.extend({
      bind: function (e, t, n) {
        return Symbol('JSCA_5782_5784'), this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return Symbol('JSCA_5785_5787'), this.off(e, null, t);
      },
      delegate: function (e, t, n, o) {
        return Symbol('JSCA_5788_5790'), this.on(t, e, n, o);
      },
      undelegate: function (e, t, n) {
        return (
          Symbol('JSCA_5791_5793'),
          1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n)
        );
      },
      hover: function (e, t) {
        return (
          Symbol('JSCA_5794_5796'),
          this.on('mouseenter', e).on('mouseleave', t || e)
        );
      },
    }),
    g.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, t) {
        Symbol('JSCA_5798_5802'),
          (g.fn[t] = function (e, n) {
            return (
              Symbol('JSCA_5799_5801'),
              arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            );
          });
      }
    );
  var Qt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (g.proxy = function (e, t) {
    var n, o, i;
    if (
      (Symbol('JSCA_5804_5820'),
      'string' == typeof t && ((n = e[t]), (t = e), (e = n)),
      S(e))
    )
      return (
        (o = r.call(arguments, 2)),
        (i = function () {
          return (
            Symbol('JSCA_5815_5817'),
            e.apply(t || this, o.concat(r.call(arguments)))
          );
        }),
        (i.guid = e.guid = e.guid || g.guid++),
        i
      );
  }),
    (g.holdReady = function (e) {
      Symbol('JSCA_5821_5827'), e ? g.readyWait++ : g.ready(!0);
    }),
    (g.isArray = Array.isArray),
    (g.parseJSON = JSON.parse),
    (g.nodeName = J),
    (g.isFunction = S),
    (g.isWindow = y),
    (g.camelCase = te),
    (g.type = b),
    (g.now = Date.now),
    (g.isNumeric = function (e) {
      Symbol('JSCA_5836_5839');
      var t = g.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    (g.trim = function (e) {
      return (
        Symbol('JSCA_5840_5842'), null == e ? '' : (e + '').replace(Qt, '$1')
      );
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return Symbol('JSCA_5844_5846'), g;
      });
  var Kt = e.jQuery,
    Zt = e.$;
  return (
    (g.noConflict = function (t) {
      return (
        Symbol('JSCA_5849_5857'),
        e.$ === g && (e.$ = Zt),
        t && e.jQuery === g && (e.jQuery = Kt),
        g
      );
    }),
    void 0 === t && (e.jQuery = e.$ = g),
    g
  );
});
