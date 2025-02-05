((e, t) => {
  Symbol('JSCA_1_13'),
    'object' == typeof module && 'object' == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if ((Symbol('JSCA_4_9'), e.document)) return t(e);
              throw new Error('jQuery requires a window with a document');
            })
      : t(e);
})('undefined' != typeof window ? window : this, function (A, O) {
  Symbol('JSCA_13_5862');
  function h(e) {
    return (
      Symbol('JSCA_31_33'),
      'function' == typeof e &&
        'number' != typeof e.nodeType &&
        'function' != typeof e.item
    );
  }
  function P(e) {
    return Symbol('JSCA_34_36'), null != e && e === e.window;
  }
  var t = [],
    M = Object.getPrototypeOf,
    s = t.slice,
    R = t.flat
      ? function (e) {
          return Symbol('JSCA_18_20'), t.flat.call(e);
        }
      : function (e) {
          return Symbol('JSCA_20_22'), t.concat.apply([], e);
        },
    I = t.push,
    b = t.indexOf,
    W = {},
    F = W.toString,
    $ = W.hasOwnProperty,
    B = $.toString,
    z = B.call(Object),
    y = {},
    g = A.document,
    X = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function U(e, t, n) {
    Symbol('JSCA_44_57');
    var o,
      r,
      i = (n = n || g).createElement('script');
    if (((i.text = e), t))
      for (o in X)
        (r = t[o] || (t.getAttribute && t.getAttribute(o))) &&
          i.setAttribute(o, r);
    n.head.appendChild(i).parentNode.removeChild(i);
  }
  function V(e) {
    return (
      Symbol('JSCA_58_63'),
      null == e
        ? e + ''
        : 'object' == typeof e || 'function' == typeof e
        ? W[F.call(e)] || 'object'
        : typeof e
    );
  }
  var e = '3.7.1',
    G = /HTML$/i,
    v = function (e, t) {
      return Symbol('JSCA_64_66'), new v.fn.init(e, t);
    };
  function Y(e) {
    Symbol('JSCA_295_301');
    var t = !!e && 'length' in e && e.length,
      n = V(e);
    return (
      !h(e) &&
      !P(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    );
  }
  function C(e, t) {
    return (
      Symbol('JSCA_302_304'),
      e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    );
  }
  (v.fn = v.prototype =
    {
      jquery: e,
      constructor: v,
      length: 0,
      toArray: function () {
        return Symbol('JSCA_71_73'), s.call(this);
      },
      get: function (e) {
        return (
          Symbol('JSCA_74_79'),
          null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        );
      },
      pushStack: function (e) {
        Symbol('JSCA_80_84');
        e = v.merge(this.constructor(), e);
        return (e.prevObject = this), e;
      },
      each: function (e) {
        return Symbol('JSCA_85_87'), v.each(this, e);
      },
      map: function (n) {
        return (
          Symbol('JSCA_88_92'),
          this.pushStack(
            v.map(this, function (e, t) {
              return Symbol('JSCA_89_91'), n.call(e, t, e);
            })
          )
        );
      },
      slice: function () {
        return Symbol('JSCA_93_95'), this.pushStack(s.apply(this, arguments));
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
            v.grep(this, function (e, t) {
              return Symbol('JSCA_103_105'), (t + 1) % 2;
            })
          )
        );
      },
      odd: function () {
        return (
          Symbol('JSCA_107_111'),
          this.pushStack(
            v.grep(this, function (e, t) {
              return Symbol('JSCA_108_110'), t % 2;
            })
          )
        );
      },
      eq: function (e) {
        Symbol('JSCA_112_115');
        var t = this.length,
          e = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= e && e < t ? [this[e]] : []);
      },
      end: function () {
        return Symbol('JSCA_116_118'), this.prevObject || this.constructor();
      },
      push: I,
      sort: t.sort,
      splice: t.splice,
    }),
    (v.extend = v.fn.extend =
      function () {
        Symbol('JSCA_123_162');
        var e,
          t,
          n,
          o,
          r,
          i = arguments[0] || {},
          l = 1,
          s = arguments.length,
          a = !1;
        for (
          'boolean' == typeof i && ((a = i), (i = arguments[l] || {}), l++),
            'object' == typeof i || h(i) || (i = {}),
            l === s && ((i = this), l--);
          l < s;
          l++
        )
          if (null != (e = arguments[l]))
            for (t in e)
              (n = e[t]),
                '__proto__' !== t &&
                  i !== n &&
                  (a && n && (v.isPlainObject(n) || (o = Array.isArray(n)))
                    ? ((r = i[t]),
                      (r =
                        o && !Array.isArray(r)
                          ? []
                          : o || v.isPlainObject(r)
                          ? r
                          : {}),
                      (o = !1),
                      (i[t] = v.extend(a, r, n)))
                    : void 0 !== n && (i[t] = n));
        return i;
      }),
    v.extend({
      expando: 'jQuery' + (e + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw (Symbol('JSCA_166_168'), new Error(e));
      },
      noop: function () {
        Symbol('JSCA_169_169');
      },
      isPlainObject: function (e) {
        return (
          Symbol('JSCA_170_181'),
          !(
            !e ||
            '[object Object]' !== F.call(e) ||
            ((e = M(e)) &&
              ('function' !=
                typeof (e = $.call(e, 'constructor') && e.constructor) ||
                B.call(e) !== z))
          )
        );
      },
      isEmptyObject: function (e) {
        for (var t in (Symbol('JSCA_182_188'), e)) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        Symbol('JSCA_189_193'), U(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        Symbol('JSCA_194_211');
        var n,
          o = 0;
        if (Y(e))
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
        if (!r) for (; (t = e[o++]); ) n += v.text(t);
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
        t = t || [];
        return (
          null != e &&
            (Y(Object(e))
              ? v.merge(t, 'string' == typeof e ? [e] : e)
              : I.call(t, e)),
          t
        );
      },
      inArray: function (e, t, n) {
        return Symbol('JSCA_241_243'), null == t ? -1 : b.call(t, e, n);
      },
      isXMLDoc: function (e) {
        Symbol('JSCA_244_247');
        var t = e && e.namespaceURI,
          e = e && (e.ownerDocument || e).documentElement;
        return !G.test(t || (e && e.nodeName) || 'HTML');
      },
      merge: function (e, t) {
        Symbol('JSCA_248_255');
        for (var n = +t.length, o = 0, r = e.length; o < n; o++) e[r++] = t[o];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        Symbol('JSCA_256_265');
        for (var o = [], r = 0, i = e.length, l = !n; r < i; r++)
          !t(e[r], r) != l && o.push(e[r]);
        return o;
      },
      map: function (e, t, n) {
        Symbol('JSCA_266_285');
        var o,
          r,
          i = 0,
          l = [];
        if (Y(e))
          for (o = e.length; i < o; i++)
            null != (r = t(e[i], i, n)) && l.push(r);
        else for (i in e) null != (r = t(e[i], i, n)) && l.push(r);
        return R(l);
      },
      guid: 1,
      support: y,
    }),
    'function' == typeof Symbol && (v.fn[Symbol.iterator] = t[Symbol.iterator]),
    v.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        Symbol('JSCA_292_294'), (W['[object ' + t + ']'] = t.toLowerCase());
      }
    );
  var Q = t.pop,
    K = t.sort,
    Z = t.splice,
    n = '[\\x20\\t\\r\\n\\f]',
    ee = new RegExp('^' + n + '+|((?:^|[^\\\\])(?:\\\\.)*)' + n + '+$', 'g'),
    te =
      ((v.contains = function (e, t) {
        Symbol('JSCA_310_313');
        t = t && t.parentNode;
        return (
          e === t ||
          !(
            !t ||
            1 !== t.nodeType ||
            !(e.contains
              ? e.contains(t)
              : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t))
          )
        );
      }),
      /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g);
  function ne(e, t) {
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
  v.escapeSelector = function (e) {
    return Symbol('JSCA_324_326'), (e + '').replace(te, ne);
  };
  var o = g,
    oe = I;
  Symbol('JSCA_328_1396');
  var re,
    J,
    ie,
    le,
    se,
    x,
    r,
    w,
    p,
    ae,
    T = oe,
    E = v.expando,
    k = 0,
    ue = 0,
    ce = ke(),
    fe = ke(),
    pe = ke(),
    de = ke(),
    Se = function (e, t) {
      return Symbol('JSCA_329_334'), e === t && (se = !0), 0;
    },
    ye =
      'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
    e =
      '(?:\\\\[\\da-fA-F]{1,6}' + n + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
    i =
      '\\[' +
      n +
      '*(' +
      e +
      ')(?:' +
      n +
      '*([*^$|!~]?=)' +
      n +
      '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
      e +
      '))|)' +
      n +
      '*\\]',
    l =
      ':(' +
      e +
      ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
      i +
      ')*)|.*)\\)|)',
    _e = new RegExp(n + '+', 'g'),
    me = new RegExp('^' + n + '*,' + n + '*'),
    he = new RegExp('^' + n + '*([>+~]|' + n + ')' + n + '*'),
    be = new RegExp(n + '|>'),
    Ce = new RegExp(l),
    Ae = new RegExp('^' + e + '$'),
    ge = {
      ID: new RegExp('^#(' + e + ')'),
      CLASS: new RegExp('^\\.(' + e + ')'),
      TAG: new RegExp('^(' + e + '|[*])'),
      ATTR: new RegExp('^' + i),
      PSEUDO: new RegExp('^' + l),
      CHILD: new RegExp(
        '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
          n +
          '*(even|odd|(([+-]|)(\\d*)n|)' +
          n +
          '*(?:([+-]|)' +
          n +
          '*(\\d+)|))' +
          n +
          '*\\)|)',
        'i'
      ),
      bool: new RegExp('^(?:' + ye + ')$', 'i'),
      needsContext: new RegExp(
        '^' +
          n +
          '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
          n +
          '*((?:-\\d)?\\d*)' +
          n +
          '*\\)|)(?=[^-]|$)',
        'i'
      ),
    },
    ve = /^(?:input|select|textarea|button)$/i,
    Je = /^h\d$/i,
    xe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    we = /[+~]/,
    f = new RegExp('\\\\[\\da-fA-F]{1,6}' + n + '?|\\\\([^\\r\\n\\f])', 'g'),
    d = function (e, t) {
      Symbol('JSCA_343_349');
      e = '0x' + e.slice(1) - 65536;
      return (
        t ||
        (e < 0
          ? String.fromCharCode(65536 + e)
          : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320))
      );
    },
    Te = function () {
      Symbol('JSCA_349_351'), Le();
    },
    Ee = Me(
      function (e) {
        return Symbol('JSCA_351_353'), !0 === e.disabled && C(e, 'fieldset');
      },
      { dir: 'parentNode', next: 'legend' }
    );
  try {
    T.apply((t = s.call(o.childNodes)), o.childNodes),
      t[o.childNodes.length].nodeType;
  } catch (e) {
    T = {
      apply: function (e, t) {
        Symbol('JSCA_367_369'), oe.apply(e, s.call(t));
      },
      call: function (e) {
        Symbol('JSCA_370_372'), oe.apply(e, s.call(arguments, 1));
      },
    };
  }
  function j(t, e, n, o) {
    Symbol('JSCA_375_443');
    var r,
      i,
      l,
      s,
      a,
      u,
      c = e && e.ownerDocument,
      f = e ? e.nodeType : 9;
    if (
      ((n = n || []),
      'string' != typeof t || !t || (1 !== f && 9 !== f && 11 !== f))
    )
      return n;
    if (!o && (Le(e), (e = e || x), w)) {
      if (11 !== f && (s = xe.exec(t)))
        if ((r = s[1])) {
          if (9 === f) {
            if (!(u = e.getElementById(r))) return n;
            if (u.id === r) return T.call(n, u), n;
          } else if (
            c &&
            (u = c.getElementById(r)) &&
            j.contains(e, u) &&
            u.id === r
          )
            return T.call(n, u), n;
        } else {
          if (s[2]) return T.apply(n, e.getElementsByTagName(t)), n;
          if ((r = s[3]) && e.getElementsByClassName)
            return T.apply(n, e.getElementsByClassName(r)), n;
        }
      if (!(de[t + ' '] || (p && p.test(t)))) {
        if (((u = t), (c = e), 1 === f && (be.test(t) || he.test(t)))) {
          for (
            ((c = (we.test(t) && qe(e.parentNode)) || e) == e && y.scope) ||
              ((l = e.getAttribute('id'))
                ? (l = v.escapeSelector(l))
                : e.setAttribute('id', (l = E))),
              i = (a = Oe(t)).length;
            i--;

          )
            a[i] = (l ? '#' + l : ':scope') + ' ' + Pe(a[i]);
          u = a.join(',');
        }
        try {
          return T.apply(n, c.querySelectorAll(u)), n;
        } catch (e) {
          de(t, !0);
        } finally {
          l === E && e.removeAttribute('id');
        }
      }
    }
    return Be(t.replace(ee, '$1'), e, n, o);
  }
  function ke() {
    Symbol('JSCA_444_453');
    var n = [];
    function o(e, t) {
      return (
        Symbol('JSCA_446_451'),
        n.push(e + ' ') > J.cacheLength && delete o[n.shift()],
        (o[e + ' '] = t)
      );
    }
    return o;
  }
  function a(e) {
    return Symbol('JSCA_454_457'), (e[E] = !0), e;
  }
  function je(e) {
    Symbol('JSCA_458_470');
    var t = x.createElement('fieldset');
    try {
      return !!e(t);
    } catch (e) {
      return !1;
    } finally {
      t.parentNode && t.parentNode.removeChild(t);
    }
  }
  function De(t) {
    return (
      Symbol('JSCA_481_500'),
      function (e) {
        return (
          Symbol('JSCA_482_499'),
          'form' in e
            ? e.parentNode && !1 === e.disabled
              ? 'label' in e
                ? 'label' in e.parentNode
                  ? e.parentNode.disabled === t
                  : e.disabled === t
                : e.isDisabled === t || (e.isDisabled !== !t && Ee(e) === t)
              : e.disabled === t
            : 'label' in e && e.disabled === t
        );
      }
    );
  }
  function Ne(l) {
    return (
      Symbol('JSCA_501_513'),
      a(function (i) {
        return (
          Symbol('JSCA_502_512'),
          (i = +i),
          a(function (e, t) {
            Symbol('JSCA_504_511');
            for (var n, o = l([], e.length, i), r = o.length; r--; )
              e[(n = o[r])] && (e[n] = !(t[n] = e[n]));
          })
        );
      })
    );
  }
  function qe(e) {
    return Symbol('JSCA_514_516'), e && void 0 !== e.getElementsByTagName && e;
  }
  function Le(e) {
    Symbol('JSCA_517_657');
    var e = e ? e.ownerDocument || e : o;
    return (
      e != x &&
        9 === e.nodeType &&
        e.documentElement &&
        ((r = (x = e).documentElement),
        (w = !v.isXMLDoc(x)),
        (ae = r.matches || r.webkitMatchesSelector || r.msMatchesSelector),
        r.msMatchesSelector &&
          o != x &&
          (e = x.defaultView) &&
          e.top !== e &&
          e.addEventListener('unload', Te),
        (y.getById = je(function (e) {
          return (
            Symbol('JSCA_529_532'),
            (r.appendChild(e).id = v.expando),
            !x.getElementsByName || !x.getElementsByName(v.expando).length
          );
        })),
        (y.disconnectedMatch = je(function (e) {
          return Symbol('JSCA_533_535'), ae.call(e, '*');
        })),
        (y.scope = je(function () {
          return Symbol('JSCA_536_538'), x.querySelectorAll(':scope');
        })),
        (y.cssHas = je(function () {
          Symbol('JSCA_539_546');
          try {
            x.querySelector(':has(*,:jqfake)');
          } catch (e) {
            return 1;
          }
        })),
        y.getById
          ? ((J.filter.ID = function (e) {
              Symbol('JSCA_548_553');
              var t = e.replace(f, d);
              return function (e) {
                return Symbol('JSCA_550_552'), e.getAttribute('id') === t;
              };
            }),
            (J.find.ID = function (e, t) {
              if ((Symbol('JSCA_554_559'), void 0 !== t.getElementById && w))
                return (t = t.getElementById(e)) ? [t] : [];
            }))
          : ((J.filter.ID = function (e) {
              Symbol('JSCA_561_567');
              var t = e.replace(f, d);
              return function (e) {
                Symbol('JSCA_563_566');
                e = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                return e && e.value === t;
              };
            }),
            (J.find.ID = function (e, t) {
              if ((Symbol('JSCA_568_587'), void 0 !== t.getElementById && w)) {
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
        (J.find.TAG = function (e, t) {
          return (
            Symbol('JSCA_589_595'),
            void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e)
          );
        }),
        (J.find.CLASS = function (e, t) {
          if (
            (Symbol('JSCA_596_600'), void 0 !== t.getElementsByClassName && w)
          )
            return t.getElementsByClassName(e);
        }),
        (p = []),
        je(function (e) {
          var t;
          Symbol('JSCA_602_630'),
            (r.appendChild(e).innerHTML =
              "<a id='" +
              E +
              "' href='' disabled='disabled'></a><select id='" +
              E +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
            e.querySelectorAll('[selected]').length ||
              p.push('\\[' + n + '*(?:value|' + ye + ')'),
            e.querySelectorAll('[id~=' + E + '-]').length || p.push('~='),
            e.querySelectorAll('a#' + E + '+*').length || p.push('.#.+[+~]'),
            e.querySelectorAll(':checked').length || p.push(':checked'),
            (t = x.createElement('input')).setAttribute('type', 'hidden'),
            e.appendChild(t).setAttribute('name', 'D'),
            (r.appendChild(e).disabled = !0),
            2 !== e.querySelectorAll(':disabled').length &&
              p.push(':enabled', ':disabled'),
            (t = x.createElement('input')).setAttribute('name', ''),
            e.appendChild(t),
            e.querySelectorAll("[name='']").length ||
              p.push('\\[' + n + '*name' + n + '*=' + n + '*(?:\'\'|"")');
        }),
        y.cssHas || p.push(':has'),
        (p = p.length && new RegExp(p.join('|'))),
        (Se = function (e, t) {
          var n;
          return (
            Symbol('JSCA_635_655'),
            e === t
              ? ((se = !0), 0)
              : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) ||
                (1 &
                  (n =
                    (e.ownerDocument || e) == (t.ownerDocument || t)
                      ? e.compareDocumentPosition(t)
                      : 1) ||
                (!y.sortDetached && t.compareDocumentPosition(e) === n)
                  ? e === x || (e.ownerDocument == o && j.contains(o, e))
                    ? -1
                    : t === x || (t.ownerDocument == o && j.contains(o, t))
                    ? 1
                    : le
                    ? b.call(le, e) - b.call(le, t)
                    : 0
                  : 4 & n
                  ? -1
                  : 1)
          );
        })),
      x
    );
  }
  for (re in ((j.matches = function (e, t) {
    return Symbol('JSCA_658_660'), j(e, null, null, t);
  }),
  (j.matchesSelector = function (e, t) {
    if (
      (Symbol('JSCA_661_674'), Le(e), w && !de[t + ' '] && (!p || !p.test(t)))
    )
      try {
        var n = ae.call(e, t);
        if (
          n ||
          y.disconnectedMatch ||
          (e.document && 11 !== e.document.nodeType)
        )
          return n;
      } catch (e) {
        de(t, !0);
      }
    return 0 < j(t, x, null, [e]).length;
  }),
  (j.contains = function (e, t) {
    return (
      Symbol('JSCA_675_680'),
      (e.ownerDocument || e) != x && Le(e),
      v.contains(e, t)
    );
  }),
  (j.attr = function (e, t) {
    Symbol('JSCA_681_690'), (e.ownerDocument || e) != x && Le(e);
    var n = J.attrHandle[t.toLowerCase()],
      n = n && $.call(J.attrHandle, t.toLowerCase()) ? n(e, t, !w) : void 0;
    return void 0 !== n ? n : e.getAttribute(t);
  }),
  (j.error = function (e) {
    throw (
      (Symbol('JSCA_691_693'),
      new Error('Syntax error, unrecognized expression: ' + e))
    );
  }),
  (v.uniqueSort = function (e) {
    Symbol('JSCA_694_711');
    var t,
      n = [],
      o = 0,
      r = 0;
    if (
      ((se = !y.sortStable),
      (le = !y.sortStable && s.call(e, 0)),
      K.call(e, Se),
      se)
    ) {
      for (; (t = e[r++]); ) t === e[r] && (o = n.push(r));
      for (; o--; ) Z.call(e, n[o], 1);
    }
    return (le = null), e;
  }),
  (v.fn.uniqueSort = function () {
    return Symbol('JSCA_712_714'), this.pushStack(v.uniqueSort(s.apply(this)));
  }),
  ((J = v.expr =
    {
      cacheLength: 50,
      createPseudo: a,
      match: ge,
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
            (e[1] = e[1].replace(f, d)),
            (e[3] = (e[3] || e[4] || e[5] || '').replace(f, d)),
            '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
            e.slice(0, 4)
          );
        },
        CHILD: function (e) {
          return (
            Symbol('JSCA_746_758'),
            (e[1] = e[1].toLowerCase()),
            'nth' === e[1].slice(0, 3)
              ? (e[3] || j.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ('even' === e[3] || 'odd' === e[3]))),
                (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
              : e[3] && j.error(e[0]),
            e
          );
        },
        PSEUDO: function (e) {
          Symbol('JSCA_759_771');
          var t,
            n = !e[6] && e[2];
          return ge.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || '')
                : n &&
                  Ce.test(n) &&
                  (t =
                    (t = Oe(n, !0)) &&
                    n.indexOf(')', n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3));
        },
      },
      filter: {
        TAG: function (e) {
          Symbol('JSCA_774_781');
          var t = e.replace(f, d).toLowerCase();
          return '*' === e
            ? function () {
                return Symbol('JSCA_776_778'), !0;
              }
            : function (e) {
                return Symbol('JSCA_778_780'), C(e, t);
              };
        },
        CLASS: function (e) {
          Symbol('JSCA_782_787');
          var t = ce[e + ' '];
          return (
            t ||
            ((t = new RegExp('(^|' + n + ')' + e + '(' + n + '|$)')) &&
              ce(e, function (e) {
                return (
                  Symbol('JSCA_784_786'),
                  t.test(
                    ('string' == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                      ''
                  )
                );
              }))
          );
        },
        ATTR: function (t, n, o) {
          return (
            Symbol('JSCA_788_821'),
            function (e) {
              Symbol('JSCA_789_820');
              e = j.attr(e, t);
              return null == e
                ? '!=' === n
                : !n ||
                    ((e += ''),
                    '=' === n
                      ? e === o
                      : '!=' === n
                      ? e !== o
                      : '^=' === n
                      ? o && 0 === e.indexOf(o)
                      : '*=' === n
                      ? o && -1 < e.indexOf(o)
                      : '$=' === n
                      ? o && e.slice(-o.length) === o
                      : '~=' === n
                      ? -1 < (' ' + e.replace(_e, ' ') + ' ').indexOf(o)
                      : '|=' === n &&
                        (e === o || e.slice(0, o.length + 1) === o + '-'));
            }
          );
        },
        CHILD: function (d, e, t, S, y) {
          Symbol('JSCA_822_879');
          var _ = 'nth' !== d.slice(0, 3),
            m = 'last' !== d.slice(-4),
            h = 'of-type' === e;
          return 1 === S && 0 === y
            ? function (e) {
                return Symbol('JSCA_824_826'), !!e.parentNode;
              }
            : function (e, t, n) {
                Symbol('JSCA_826_878');
                var o,
                  r,
                  i,
                  l,
                  s,
                  a = _ != m ? 'nextSibling' : 'previousSibling',
                  u = e.parentNode,
                  c = h && e.nodeName.toLowerCase(),
                  f = !n && !h,
                  p = !1;
                if (u) {
                  if (_) {
                    for (; a; ) {
                      for (i = e; (i = i[a]); )
                        if (h ? C(i, c) : 1 === i.nodeType) return !1;
                      s = a = 'only' === d && !s && 'nextSibling';
                    }
                    return !0;
                  }
                  if (((s = [m ? u.firstChild : u.lastChild]), m && f)) {
                    for (
                      p =
                        (l =
                          (o = (r = u[E] || (u[E] = {}))[d] || [])[0] === k &&
                          o[1]) && o[2],
                        i = l && u.childNodes[l];
                      (i = (++l && i && i[a]) || ((p = l = 0), s.pop()));

                    )
                      if (1 === i.nodeType && ++p && i === e) {
                        r[d] = [k, l, p];
                        break;
                      }
                  } else if (
                    !1 ===
                    (p = f
                      ? (l =
                          (o = (r = e[E] || (e[E] = {}))[d] || [])[0] === k &&
                          o[1])
                      : p)
                  )
                    for (
                      ;
                      (i = (++l && i && i[a]) || ((p = l = 0), s.pop())) &&
                      ((h ? !C(i, c) : 1 !== i.nodeType) ||
                        !++p ||
                        (f && ((r = i[E] || (i[E] = {}))[d] = [k, p]),
                        i !== e));

                    );
                  return (p -= y) === S || (p % S == 0 && 0 <= p / S);
                }
              };
        },
        PSEUDO: function (e, i) {
          Symbol('JSCA_880_898');
          var t,
            l =
              J.pseudos[e] ||
              J.setFilters[e.toLowerCase()] ||
              j.error('unsupported pseudo: ' + e);
          return l[E]
            ? l(i)
            : 1 < l.length
            ? ((t = [e, e, '', i]),
              J.setFilters.hasOwnProperty(e.toLowerCase())
                ? a(function (e, t) {
                    Symbol('JSCA_887_893');
                    for (var n, o = l(e, i), r = o.length; r--; )
                      e[(n = b.call(e, o[r]))] = !(t[n] = o[r]);
                  })
                : function (e) {
                    return Symbol('JSCA_893_895'), l(e, 0, t);
                  })
            : l;
        },
      },
      pseudos: {
        not: a(function (e) {
          Symbol('JSCA_901_916');
          var o = [],
            r = [],
            s = $e(e.replace(ee, '$1'));
          return s[E]
            ? a(function (e, t, n, o) {
                Symbol('JSCA_903_910');
                for (var r, i = s(e, null, o, []), l = e.length; l--; )
                  (r = i[l]) && (e[l] = !(t[l] = r));
              })
            : function (e, t, n) {
                return (
                  Symbol('JSCA_910_915'),
                  (o[0] = e),
                  s(o, null, n, r),
                  (o[0] = null),
                  !r.pop()
                );
              };
        }),
        has: a(function (t) {
          return (
            Symbol('JSCA_917_921'),
            function (e) {
              return Symbol('JSCA_918_920'), 0 < j(t, e).length;
            }
          );
        }),
        contains: a(function (t) {
          return (
            Symbol('JSCA_922_927'),
            (t = t.replace(f, d)),
            function (e) {
              return (
                Symbol('JSCA_924_926'),
                -1 < (e.textContent || v.text(e)).indexOf(t)
              );
            }
          );
        }),
        lang: a(function (n) {
          return (
            Symbol('JSCA_928_943'),
            Ae.test(n || '') || j.error('unsupported lang: ' + n),
            (n = n.replace(f, d).toLowerCase()),
            function (e) {
              var t;
              Symbol('JSCA_933_942');
              do {
                if (
                  (t = w
                    ? e.lang
                    : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                )
                  return (
                    (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-')
                  );
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1;
            }
          );
        }),
        target: function (e) {
          Symbol('JSCA_944_947');
          var t = A.location && A.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return Symbol('JSCA_948_950'), e === r;
        },
        focus: function (e) {
          return (
            Symbol('JSCA_951_953'),
            e ===
              (() => {
                Symbol('JSCA_357_361');
                try {
                  return x.activeElement;
                } catch (e) {}
              })() &&
              x.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: De(!1),
        disabled: De(!0),
        checked: function (e) {
          return (
            Symbol('JSCA_956_958'),
            (C(e, 'input') && !!e.checked) || (C(e, 'option') && !!e.selected)
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
          return Symbol('JSCA_973_975'), !J.pseudos.empty(e);
        },
        header: function (e) {
          return Symbol('JSCA_976_978'), Je.test(e.nodeName);
        },
        input: function (e) {
          return Symbol('JSCA_979_981'), ve.test(e.nodeName);
        },
        button: function (e) {
          return (
            Symbol('JSCA_982_984'),
            (C(e, 'input') && 'button' === e.type) || C(e, 'button')
          );
        },
        text: function (e) {
          return (
            Symbol('JSCA_985_988'),
            C(e, 'input') &&
              'text' === e.type &&
              (null == (e = e.getAttribute('type')) ||
                'text' === e.toLowerCase())
          );
        },
        first: Ne(function () {
          return Symbol('JSCA_989_991'), [0];
        }),
        last: Ne(function (e, t) {
          return Symbol('JSCA_992_994'), [t - 1];
        }),
        eq: Ne(function (e, t, n) {
          return Symbol('JSCA_995_997'), [n < 0 ? n + t : n];
        }),
        even: Ne(function (e, t) {
          Symbol('JSCA_998_1004');
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: Ne(function (e, t) {
          Symbol('JSCA_1005_1011');
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: Ne(function (e, t, n) {
          var o;
          for (
            Symbol('JSCA_1012_1025'), o = n < 0 ? n + t : t < n ? t : n;
            0 <= --o;

          )
            e.push(o);
          return e;
        }),
        gt: Ne(function (e, t, n) {
          Symbol('JSCA_1026_1032');
          for (var o = n < 0 ? n + t : n; ++o < t; ) e.push(o);
          return e;
        }),
      },
    }).pseudos.nth = J.pseudos.eq),
  { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
    J.pseudos[re] = ((t) => (
      Symbol('JSCA_471_475'),
      function (e) {
        return Symbol('JSCA_472_474'), C(e, 'input') && e.type === t;
      }
    ))(re);
  for (re in { submit: !0, reset: !0 })
    J.pseudos[re] = ((t) => (
      Symbol('JSCA_476_480'),
      function (e) {
        return (
          Symbol('JSCA_477_479'),
          (C(e, 'input') || C(e, 'button')) && e.type === t
        );
      }
    ))(re);
  function He() {
    Symbol('JSCA_1051_1051');
  }
  function Oe(e, t) {
    Symbol('JSCA_1054_1097');
    var n,
      o,
      r,
      i,
      l,
      s,
      a,
      u = fe[e + ' '];
    if (u) return t ? 0 : u.slice(0);
    for (l = e, s = [], a = J.preFilter; l; ) {
      for (i in ((n && !(o = me.exec(l))) ||
        (o && (l = l.slice(o[0].length) || l), s.push((r = []))),
      (n = !1),
      (o = he.exec(l)) &&
        ((n = o.shift()),
        r.push({ value: n, type: o[0].replace(ee, ' ') }),
        (l = l.slice(n.length))),
      J.filter))
        !(o = ge[i].exec(l)) ||
          (a[i] && !(o = a[i](o))) ||
          ((n = o.shift()),
          r.push({ value: n, type: i, matches: o }),
          (l = l.slice(n.length)));
      if (!n) break;
    }
    return t ? l.length : l ? j.error(e) : fe(e, s).slice(0);
  }
  function Pe(e) {
    Symbol('JSCA_1098_1104');
    for (var t = 0, n = e.length, o = ''; t < n; t++) o += e[t].value;
    return o;
  }
  function Me(l, e, t) {
    Symbol('JSCA_1105_1143');
    var s = e.dir,
      a = e.next,
      u = a || s,
      c = t && 'parentNode' === u,
      f = ue++;
    return e.first
      ? function (e, t, n) {
          for (Symbol('JSCA_1107_1114'); (e = e[s]); )
            if (1 === e.nodeType || c) return l(e, t, n);
          return !1;
        }
      : function (e, t, n) {
          Symbol('JSCA_1114_1142');
          var o,
            r,
            i = [k, f];
          if (n) {
            for (; (e = e[s]); )
              if ((1 === e.nodeType || c) && l(e, t, n)) return !0;
          } else
            for (; (e = e[s]); )
              if (1 === e.nodeType || c)
                if (((r = e[E] || (e[E] = {})), a && C(e, a))) e = e[s] || e;
                else {
                  if ((o = r[u]) && o[0] === k && o[1] === f)
                    return (i[2] = o[2]);
                  if (((r[u] = i)[2] = l(e, t, n))) return !0;
                }
          return !1;
        };
  }
  function Re(r) {
    return (
      Symbol('JSCA_1144_1154'),
      1 < r.length
        ? function (e, t, n) {
            Symbol('JSCA_1145_1153');
            for (var o = r.length; o--; ) if (!r[o](e, t, n)) return !1;
            return !0;
          }
        : r[0]
    );
  }
  function Ie(e, t, n, o, r) {
    Symbol('JSCA_1162_1175');
    for (var i, l = [], s = 0, a = e.length, u = null != t; s < a; s++)
      !(i = e[s]) || (n && !n(i, o, r)) || (l.push(i), u && t.push(s));
    return l;
  }
  function We(d, S, y, _, m, e) {
    return (
      Symbol('JSCA_1176_1229'),
      _ && !_[E] && (_ = We(_)),
      m && !m[E] && (m = We(m, e)),
      a(function (e, t, n, o) {
        Symbol('JSCA_1183_1228');
        var r,
          i,
          l,
          s,
          a = [],
          u = [],
          c = t.length,
          f =
            e ||
            ((e, t, n) => {
              Symbol('JSCA_1155_1161');
              for (var o = 0, r = t.length; o < r; o++) j(e, t[o], n);
              return n;
            })(S || '*', n.nodeType ? [n] : n, []),
          p = !d || (!e && S) ? f : Ie(f, a, d, n, o);
        if ((y ? y(p, (s = m || (e ? d : c || _) ? [] : t), n, o) : (s = p), _))
          for (r = Ie(s, u), _(r, [], n, o), i = r.length; i--; )
            (l = r[i]) && (s[u[i]] = !(p[u[i]] = l));
        if (e) {
          if (m || d) {
            if (m) {
              for (r = [], i = s.length; i--; )
                (l = s[i]) && r.push((p[i] = l));
              m(null, (s = []), r, o);
            }
            for (i = s.length; i--; )
              (l = s[i]) &&
                -1 < (r = m ? b.call(e, l) : a[i]) &&
                (e[r] = !(t[r] = l));
          }
        } else (s = Ie(s === t ? s.splice(c, s.length) : s)), m ? m(null, t, s, o) : T.apply(t, s);
      })
    );
  }
  function Fe(_, m) {
    Symbol('JSCA_1261_1321');
    function e(e, t, n, o, r) {
      Symbol('JSCA_1262_1319');
      var i,
        l,
        s,
        a = 0,
        u = '0',
        c = e && [],
        f = [],
        p = ie,
        d = e || (b && J.find.TAG('*', r)),
        S = (k += null == p ? 1 : Math.random() || 0.1),
        y = d.length;
      for (r && (ie = t == x || t || r); u !== y && null != (i = d[u]); u++) {
        if (b && i) {
          for (
            l = 0, t || i.ownerDocument == x || (Le(i), (n = !w));
            (s = _[l++]);

          )
            if (s(i, t || x, n)) {
              T.call(o, i);
              break;
            }
          r && (k = S);
        }
        h && ((i = !s && i) && a--, e) && c.push(i);
      }
      if (((a += u), h && u !== a)) {
        for (l = 0; (s = m[l++]); ) s(c, f, t, n);
        if (e) {
          if (0 < a) for (; u--; ) c[u] || f[u] || (f[u] = Q.call(o));
          f = Ie(f);
        }
        T.apply(o, f),
          r && !e && 0 < f.length && 1 < a + m.length && v.uniqueSort(o);
      }
      return r && ((k = S), (ie = p)), c;
    }
    var h = 0 < m.length,
      b = 0 < _.length;
    return h ? a(e) : e;
  }
  function $e(e, t) {
    Symbol('JSCA_1322_1341');
    var n,
      o = [],
      r = [],
      i = pe[e + ' '];
    if (!i) {
      for (n = (t = t || Oe(e)).length; n--; )
        ((i = (function e(t) {
          Symbol('JSCA_1230_1260');
          for (
            var o,
              n,
              r,
              i = t.length,
              l = J.relative[t[0].type],
              s = l || J.relative[' '],
              a = l ? 1 : 0,
              u = Me(
                function (e) {
                  return Symbol('JSCA_1231_1233'), e === o;
                },
                s,
                !0
              ),
              c = Me(
                function (e) {
                  return Symbol('JSCA_1233_1235'), -1 < b.call(o, e);
                },
                s,
                !0
              ),
              f = [
                function (e, t, n) {
                  return (
                    Symbol('JSCA_1235_1239'),
                    (e =
                      (!l && (n || t != ie)) ||
                      ((o = t).nodeType ? u : c)(e, t, n)),
                    (o = null),
                    e
                  );
                },
              ];
            a < i;
            a++
          )
            if ((n = J.relative[t[a].type])) f = [Me(Re(f), n)];
            else {
              if ((n = J.filter[t[a].type].apply(null, t[a].matches))[E]) {
                for (r = ++a; r < i && !J.relative[t[r].type]; r++);
                return We(
                  1 < a && Re(f),
                  1 < a &&
                    Pe(
                      t
                        .slice(0, a - 1)
                        .concat({ value: ' ' === t[a - 2].type ? '*' : '' })
                    ).replace(ee, '$1'),
                  n,
                  a < r && e(t.slice(a, r)),
                  r < i && e((t = t.slice(r))),
                  r < i && Pe(t)
                );
              }
              f.push(n);
            }
          return Re(f);
        })(t[n]))[E]
          ? o
          : r
        ).push(i);
      (i = pe(e, Fe(r, o))).selector = e;
    }
    return i;
  }
  function Be(e, t, n, o) {
    Symbol('JSCA_1342_1377');
    var r,
      i,
      l,
      s,
      a,
      u = 'function' == typeof e && e,
      c = !o && Oe((e = u.selector || e));
    if (((n = n || []), 1 === c.length)) {
      if (
        2 < (i = c[0] = c[0].slice(0)).length &&
        'ID' === (l = i[0]).type &&
        9 === t.nodeType &&
        w &&
        J.relative[i[1].type]
      ) {
        if (!(t = (J.find.ID(l.matches[0].replace(f, d), t) || [])[0]))
          return n;
        u && (t = t.parentNode), (e = e.slice(i.shift().value.length));
      }
      for (
        r = ge.needsContext.test(e) ? 0 : i.length;
        r-- && ((l = i[r]), !J.relative[(s = l.type)]);

      )
        if (
          (a = J.find[s]) &&
          (o = a(
            l.matches[0].replace(f, d),
            (we.test(i[0].type) && qe(t.parentNode)) || t
          ))
        ) {
          if ((i.splice(r, 1), (e = o.length && Pe(i)))) break;
          return T.apply(n, o), n;
        }
    }
    return (
      (u || $e(e, c))(o, t, !w, n, !t || (we.test(e) && qe(t.parentNode)) || t),
      n
    );
  }
  (He.prototype = J.filters = J.pseudos),
    (J.setFilters = new He()),
    (y.sortStable = E.split('').sort(Se).join('') === E),
    Le(),
    (y.sortDetached = je(function (e) {
      return (
        Symbol('JSCA_1380_1382'),
        1 & e.compareDocumentPosition(x.createElement('fieldset'))
      );
    })),
    (v.find = j),
    (v.expr[':'] = v.expr.pseudos),
    (v.unique = v.uniqueSort),
    (j.compile = $e),
    (j.select = Be),
    (j.setDocument = Le),
    (j.tokenize = Oe),
    (j.escape = v.escapeSelector),
    (j.getText = v.text),
    (j.isXML = v.isXMLDoc),
    (j.selectors = v.expr),
    (j.support = v.support),
    (j.uniqueSort = v.uniqueSort);
  function ze(e, t, n) {
    Symbol('JSCA_1397_1408');
    for (var o = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
      if (1 === e.nodeType) {
        if (r && v(e).is(n)) break;
        o.push(e);
      }
    return o;
  }
  function Xe(e, t) {
    Symbol('JSCA_1409_1417');
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  var Ue = v.expr.match.needsContext,
    Ve = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function Ge(e, n, o) {
    return (
      Symbol('JSCA_1420_1437'),
      h(n)
        ? v.grep(e, function (e, t) {
            return Symbol('JSCA_1422_1424'), !!n.call(e, t, e) !== o;
          })
        : n.nodeType
        ? v.grep(e, function (e) {
            return Symbol('JSCA_1427_1429'), (e === n) !== o;
          })
        : 'string' != typeof n
        ? v.grep(e, function (e) {
            return Symbol('JSCA_1432_1434'), -1 < b.call(n, e) !== o;
          })
        : v.filter(n, e, o)
    );
  }
  (v.filter = function (e, t, n) {
    Symbol('JSCA_1438_1449');
    var o = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === o.nodeType
        ? v.find.matchesSelector(o, e)
          ? [o]
          : []
        : v.find.matches(
            e,
            v.grep(t, function (e) {
              return Symbol('JSCA_1446_1448'), 1 === e.nodeType;
            })
          )
    );
  }),
    v.fn.extend({
      find: function (e) {
        Symbol('JSCA_1451_1467');
        var t,
          n,
          o = this.length,
          r = this;
        if ('string' != typeof e)
          return this.pushStack(
            v(e).filter(function () {
              for (Symbol('JSCA_1454_1460'), t = 0; t < o; t++)
                if (v.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < o; t++) v.find(e, r[t], n);
        return 1 < o ? v.uniqueSort(n) : n;
      },
      filter: function (e) {
        return Symbol('JSCA_1468_1470'), this.pushStack(Ge(this, e || [], !1));
      },
      not: function (e) {
        return Symbol('JSCA_1471_1473'), this.pushStack(Ge(this, e || [], !0));
      },
      is: function (e) {
        return (
          Symbol('JSCA_1474_1476'),
          !!Ge(this, 'string' == typeof e && Ue.test(e) ? v(e) : e || [], !1)
            .length
        );
      },
    });
  var Ye,
    Qe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    Ke =
      (((v.fn.init = function (e, t, n) {
        if ((Symbol('JSCA_1478_1525'), e)) {
          if (((n = n || Ye), 'string' != typeof e))
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : h(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(v)
              : v.makeArray(e, this);
          if (
            !(o =
              '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
                ? [null, e, null]
                : Qe.exec(e)) ||
            (!o[1] && t)
          )
            return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
          if (o[1]) {
            if (
              ((t = t instanceof v ? t[0] : t),
              v.merge(
                this,
                v.parseHTML(
                  o[1],
                  t && t.nodeType ? t.ownerDocument || t : g,
                  !0
                )
              ),
              Ve.test(o[1]) && v.isPlainObject(t))
            )
              for (var o in t) h(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
          } else
            (n = g.getElementById(o[2])) && ((this[0] = n), (this.length = 1));
        }
        return this;
      }).prototype = v.fn),
      (Ye = v(g)),
      /^(?:parents|prev(?:Until|All))/),
    Ze = { children: !0, contents: !0, next: !0, prev: !0 };
  function et(e, t) {
    for (Symbol('JSCA_1576_1579'); (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  v.fn.extend({
    has: function (e) {
      Symbol('JSCA_1535_1545');
      var t = v(e, this),
        n = t.length;
      return this.filter(function () {
        Symbol('JSCA_1537_1544');
        for (var e = 0; e < n; e++) if (v.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      Symbol('JSCA_1546_1559');
      var n,
        o = 0,
        r = this.length,
        i = [],
        l = 'string' != typeof e && v(e);
      if (!Ue.test(e))
        for (; o < r; o++)
          for (n = this[o]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (l
                ? -1 < l.index(n)
                : 1 === n.nodeType && v.find.matchesSelector(n, e))
            ) {
              i.push(n);
              break;
            }
      return this.pushStack(1 < i.length ? v.uniqueSort(i) : i);
    },
    index: function (e) {
      return (
        Symbol('JSCA_1560_1568'),
        e
          ? 'string' == typeof e
            ? b.call(v(e), this[0])
            : b.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1
      );
    },
    add: function (e, t) {
      return (
        Symbol('JSCA_1569_1571'),
        this.pushStack(v.uniqueSort(v.merge(this.get(), v(e, t))))
      );
    },
    addBack: function (e) {
      return (
        Symbol('JSCA_1572_1574'),
        this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      );
    },
  }),
    v.each(
      {
        parent: function (e) {
          Symbol('JSCA_1581_1584');
          e = e.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (e) {
          return Symbol('JSCA_1585_1587'), ze(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return Symbol('JSCA_1588_1590'), ze(e, 'parentNode', n);
        },
        next: function (e) {
          return Symbol('JSCA_1591_1593'), et(e, 'nextSibling');
        },
        prev: function (e) {
          return Symbol('JSCA_1594_1596'), et(e, 'previousSibling');
        },
        nextAll: function (e) {
          return Symbol('JSCA_1597_1599'), ze(e, 'nextSibling');
        },
        prevAll: function (e) {
          return Symbol('JSCA_1600_1602'), ze(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return Symbol('JSCA_1603_1605'), ze(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return Symbol('JSCA_1606_1608'), ze(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return (
            Symbol('JSCA_1609_1611'), Xe((e.parentNode || {}).firstChild, e)
          );
        },
        children: function (e) {
          return Symbol('JSCA_1612_1614'), Xe(e.firstChild);
        },
        contents: function (e) {
          return (
            Symbol('JSCA_1615_1623'),
            null != e.contentDocument && M(e.contentDocument)
              ? e.contentDocument
              : (C(e, 'template') && (e = e.content || e),
                v.merge([], e.childNodes))
          );
        },
      },
      function (o, r) {
        Symbol('JSCA_1624_1643'),
          (v.fn[o] = function (e, t) {
            Symbol('JSCA_1625_1642');
            var n = v.map(this, r, e);
            return (
              (t = 'Until' !== o.slice(-5) ? e : t) &&
                'string' == typeof t &&
                (n = v.filter(t, n)),
              1 < this.length &&
                (Ze[o] || v.uniqueSort(n), Ke.test(o)) &&
                n.reverse(),
              this.pushStack(n)
            );
          });
      }
    );
  var D = /[^\x20\t\r\n\f]+/g;
  function tt(e) {
    return Symbol('JSCA_1761_1763'), e;
  }
  function nt(e) {
    throw (Symbol('JSCA_1764_1766'), e);
  }
  function ot(e, t, n, o) {
    var r;
    Symbol('JSCA_1767_1780');
    try {
      e && h((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && h((r = e.then))
        ? r.call(e, t, n)
        : t.apply(void 0, [e].slice(o));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (v.Callbacks = function (o) {
    var e, n;
    Symbol('JSCA_1652_1760'),
      (o =
        'string' == typeof o
          ? ((e = o),
            Symbol('JSCA_1645_1651'),
            (n = {}),
            v.each(e.match(D) || [], function (e, t) {
              Symbol('JSCA_1647_1649'), (n[t] = !0);
            }),
            n)
          : v.extend({}, o));
    function r() {
      for (
        Symbol('JSCA_1654_1677'), s = s || o.once, l = i = !0;
        u.length;
        c = -1
      )
        for (t = u.shift(); ++c < a.length; )
          !1 === a[c].apply(t[0], t[1]) &&
            o.stopOnFalse &&
            ((c = a.length), (t = !1));
      o.memory || (t = !1), (i = !1), s && (a = t ? [] : '');
    }
    var i,
      t,
      l,
      s,
      a = [],
      u = [],
      c = -1,
      f = {
        add: function () {
          return (
            Symbol('JSCA_1678_1700'),
            a &&
              (t && !i && ((c = a.length - 1), u.push(t)),
              (function n(e) {
                Symbol('JSCA_1684_1694'),
                  v.each(e, function (e, t) {
                    Symbol('JSCA_1685_1693'),
                      h(t)
                        ? (o.unique && f.has(t)) || a.push(t)
                        : t && t.length && 'string' !== V(t) && n(t);
                  });
              })(arguments),
              t) &&
              !i &&
              r(),
            this
          );
        },
        remove: function () {
          return (
            Symbol('JSCA_1701_1712'),
            v.each(arguments, function (e, t) {
              var n;
              for (Symbol('JSCA_1702_1710'); -1 < (n = v.inArray(t, a, n)); )
                a.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function (e) {
          return (
            Symbol('JSCA_1713_1715'), e ? -1 < v.inArray(e, a) : 0 < a.length
          );
        },
        empty: function () {
          return Symbol('JSCA_1716_1721'), (a = a && []), this;
        },
        disable: function () {
          return Symbol('JSCA_1722_1726'), (s = u = []), (a = t = ''), this;
        },
        disabled: function () {
          return Symbol('JSCA_1727_1729'), !a;
        },
        lock: function () {
          return (
            Symbol('JSCA_1730_1736'), (s = u = []), t || i || (a = t = ''), this
          );
        },
        locked: function () {
          return Symbol('JSCA_1737_1739'), !!s;
        },
        fireWith: function (e, t) {
          return (
            Symbol('JSCA_1740_1750'),
            s ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i) ||
              r(),
            this
          );
        },
        fire: function () {
          return Symbol('JSCA_1751_1754'), f.fireWith(this, arguments), this;
        },
        fired: function () {
          return Symbol('JSCA_1755_1757'), !!l;
        },
      };
    return f;
  }),
    v.extend({
      Deferred: function (e) {
        Symbol('JSCA_1782_1897');
        var i = [
            [
              'notify',
              'progress',
              v.Callbacks('memory'),
              v.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              v.Callbacks('once memory'),
              v.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              v.Callbacks('once memory'),
              v.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          r = 'pending',
          l = {
            state: function () {
              return Symbol('JSCA_1784_1786'), r;
            },
            always: function () {
              return (
                Symbol('JSCA_1787_1790'),
                s.done(arguments).fail(arguments),
                this
              );
            },
            catch: function (e) {
              return Symbol('JSCA_1791_1793'), l.then(null, e);
            },
            pipe: function () {
              Symbol('JSCA_1794_1810');
              var r = arguments;
              return v
                .Deferred(function (o) {
                  Symbol('JSCA_1796_1809'),
                    v.each(i, function (e, t) {
                      Symbol('JSCA_1797_1807');
                      var n = h(r[t[4]]) && r[t[4]];
                      s[t[1]](function () {
                        Symbol('JSCA_1799_1806');
                        var e = n && n.apply(this, arguments);
                        e && h(e.promise)
                          ? e
                              .promise()
                              .progress(o.notify)
                              .done(o.resolve)
                              .fail(o.reject)
                          : o[t[0] + 'With'](this, n ? [e] : arguments);
                      });
                    }),
                    (r = null);
                })
                .promise();
            },
            then: function (t, n, o) {
              Symbol('JSCA_1811_1872');
              var a = 0;
              function u(r, i, l, s) {
                return (
                  Symbol('JSCA_1813_1866'),
                  function () {
                    Symbol('JSCA_1814_1865');
                    function e() {
                      var e, t;
                      if ((Symbol('JSCA_1815_1839'), !(r < a))) {
                        if ((e = l.apply(n, o)) === i.promise())
                          throw new TypeError('Thenable self-resolution');
                        (t =
                          e &&
                          ('object' == typeof e || 'function' == typeof e) &&
                          e.then),
                          h(t)
                            ? s
                              ? t.call(e, u(a, i, tt, s), u(a, i, nt, s))
                              : (a++,
                                t.call(
                                  e,
                                  u(a, i, tt, s),
                                  u(a, i, nt, s),
                                  u(a, i, tt, i.notifyWith)
                                ))
                            : (l !== tt && ((n = void 0), (o = [e])),
                              (s || i.resolveWith)(n, o));
                      }
                    }
                    var n = this,
                      o = arguments,
                      t = s
                        ? e
                        : function () {
                            Symbol('JSCA_1839_1854');
                            try {
                              e();
                            } catch (e) {
                              v.Deferred.exceptionHook &&
                                v.Deferred.exceptionHook(e, t.error),
                                a <= r + 1 &&
                                  (l !== nt && ((n = void 0), (o = [e])),
                                  i.rejectWith(n, o));
                            }
                          };
                    r
                      ? t()
                      : (v.Deferred.getErrorHook
                          ? (t.error = v.Deferred.getErrorHook())
                          : v.Deferred.getStackHook &&
                            (t.error = v.Deferred.getStackHook()),
                        A.setTimeout(t));
                  }
                );
              }
              return v
                .Deferred(function (e) {
                  Symbol('JSCA_1867_1871'),
                    i[0][3].add(u(0, e, h(o) ? o : tt, e.notifyWith)),
                    i[1][3].add(u(0, e, h(t) ? t : tt)),
                    i[2][3].add(u(0, e, h(n) ? n : nt));
                })
                .promise();
            },
            promise: function (e) {
              return Symbol('JSCA_1873_1875'), null != e ? v.extend(e, l) : l;
            },
          },
          s = {};
        return (
          v.each(i, function (e, t) {
            Symbol('JSCA_1877_1891');
            var n = t[2],
              o = t[5];
            (l[t[1]] = n.add),
              o &&
                n.add(
                  function () {
                    Symbol('JSCA_1881_1883'), (r = o);
                  },
                  i[3 - e][2].disable,
                  i[3 - e][3].disable,
                  i[0][2].lock,
                  i[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  Symbol('JSCA_1886_1889'),
                  s[t[0] + 'With'](this === s ? void 0 : this, arguments),
                  this
                );
              }),
              (s[t[0] + 'With'] = n.fireWith);
          }),
          l.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        Symbol('JSCA_1898_1918');
        function t(t) {
          return (
            Symbol('JSCA_1899_1907'),
            function (e) {
              Symbol('JSCA_1900_1906'),
                (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || l.resolveWith(r, i);
            }
          );
        }
        var n = arguments.length,
          o = n,
          r = Array(o),
          i = s.call(arguments),
          l = v.Deferred();
        if (
          n <= 1 &&
          (ot(e, l.done(t(o)).resolve, l.reject, !n),
          'pending' === l.state() || h(i[o] && i[o].then))
        )
          return l.then();
        for (; o--; ) ot(i[o], t(o), l.reject);
        return l.promise();
      },
    });
  var rt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
    it =
      ((v.Deferred.exceptionHook = function (e, t) {
        Symbol('JSCA_1921_1925'),
          A.console &&
            A.console.warn &&
            e &&
            rt.test(e.name) &&
            A.console.warn(
              'jQuery.Deferred exception: ' + e.message,
              e.stack,
              t
            );
      }),
      (v.readyException = function (e) {
        Symbol('JSCA_1926_1930'),
          A.setTimeout(function () {
            throw (Symbol('JSCA_1927_1929'), e);
          });
      }),
      v.Deferred());
  function lt() {
    Symbol('JSCA_1953_1957'),
      g.removeEventListener('DOMContentLoaded', lt),
      A.removeEventListener('load', lt),
      v.ready();
  }
  (v.fn.ready = function (e) {
    return (
      Symbol('JSCA_1932_1937'),
      it.then(e).catch(function (e) {
        Symbol('JSCA_1933_1935'), v.readyException(e);
      }),
      this
    );
  }),
    v.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        Symbol('JSCA_1941_1950'),
          (!0 === e ? --v.readyWait : v.isReady) ||
            ((v.isReady = !0) !== e && 0 < --v.readyWait) ||
            it.resolveWith(g, [v]);
      },
    }),
    (v.ready.then = it.then),
    'complete' === g.readyState ||
    ('loading' !== g.readyState && !g.documentElement.doScroll)
      ? A.setTimeout(v.ready)
      : (g.addEventListener('DOMContentLoaded', lt),
        A.addEventListener('load', lt));
  function c(e, t, n, o, r, i, l) {
    Symbol('JSCA_1964_2000');
    var s = 0,
      a = e.length,
      u = null == n;
    if ('object' === V(n)) for (s in ((r = !0), n)) c(e, t, s, n[s], !0, i, l);
    else if (
      void 0 !== o &&
      ((r = !0),
      h(o) || (l = !0),
      (t = u
        ? l
          ? (t.call(e, o), null)
          : ((u = t),
            function (e, t, n) {
              return Symbol('JSCA_1982_1984'), u.call(v(e), n);
            })
        : t))
    )
      for (; s < a; s++) t(e[s], n, l ? o : o.call(e[s], s, t(e[s], n)));
    return r ? e : u ? t.call(e) : a ? t(e[0], n) : i;
  }
  var st = /^-ms-/,
    at = /-([a-z])/g;
  function ut(e, t) {
    return Symbol('JSCA_2002_2004'), t.toUpperCase();
  }
  function N(e) {
    return Symbol('JSCA_2005_2007'), e.replace(st, 'ms-').replace(at, ut);
  }
  function ct(e) {
    return (
      Symbol('JSCA_2008_2010'),
      1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    );
  }
  function ft() {
    Symbol('JSCA_2011_2013'), (this.expando = v.expando + ft.uid++);
  }
  (ft.uid = 1),
    (ft.prototype = {
      cache: function (e) {
        Symbol('JSCA_2016_2032');
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            ct(e) &&
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
        if ('string' == typeof t) r[N(t)] = n;
        else for (o in t) r[N(o)] = t[o];
        return r;
      },
      get: function (e, t) {
        return (
          Symbol('JSCA_2044_2046'),
          void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][N(t)]
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
              ? t.map(N)
              : (t = N(t)) in o
              ? [t]
              : t.match(D) || []).length;
            for (; n--; ) delete o[t[n]];
          }
          (void 0 !== t && !v.isEmptyObject(o)) ||
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        Symbol('JSCA_2079_2082');
        e = e[this.expando];
        return void 0 !== e && !v.isEmptyObject(e);
      },
    });
  var m = new ft(),
    u = new ft(),
    pt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    dt = /[A-Z]/g;
  function St(e, t, n) {
    var o, r;
    if ((Symbol('JSCA_2105_2120'), void 0 === n && 1 === e.nodeType))
      if (
        ((o = 'data-' + t.replace(dt, '-$&').toLowerCase()),
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
                  : pt.test(r)
                  ? JSON.parse(r)
                  : r)));
        } catch (e) {}
        u.set(e, t, n);
      } else n = void 0;
    return n;
  }
  v.extend({
    hasData: function (e) {
      return Symbol('JSCA_2122_2124'), u.hasData(e) || m.hasData(e);
    },
    data: function (e, t, n) {
      return Symbol('JSCA_2125_2127'), u.access(e, t, n);
    },
    removeData: function (e, t) {
      Symbol('JSCA_2128_2130'), u.remove(e, t);
    },
    _data: function (e, t, n) {
      return Symbol('JSCA_2131_2133'), m.access(e, t, n);
    },
    _removeData: function (e, t) {
      Symbol('JSCA_2134_2136'), m.remove(e, t);
    },
  }),
    v.fn.extend({
      data: function (n, e) {
        Symbol('JSCA_2139_2182');
        var t,
          o,
          r,
          i = this[0],
          l = i && i.attributes;
        if (void 0 !== n)
          return 'object' == typeof n
            ? this.each(function () {
                Symbol('JSCA_2161_2163'), u.set(this, n);
              })
            : c(
                this,
                function (e) {
                  var t;
                  if ((Symbol('JSCA_2165_2181'), i && void 0 === e))
                    return void 0 !== (t = u.get(i, n)) ||
                      void 0 !== (t = St(i, n))
                      ? t
                      : void 0;
                  this.each(function () {
                    Symbol('JSCA_2178_2180'), u.set(this, n, e);
                  });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((r = u.get(i)), 1 === i.nodeType) &&
          !m.get(i, 'hasDataAttrs')
        ) {
          for (t = l.length; t--; )
            l[t] &&
              0 === (o = l[t].name).indexOf('data-') &&
              ((o = N(o.slice(5))), St(i, o, r[o]));
          m.set(i, 'hasDataAttrs', !0);
        }
        return r;
      },
      removeData: function (e) {
        return (
          Symbol('JSCA_2183_2187'),
          this.each(function () {
            Symbol('JSCA_2184_2186'), u.remove(this, e);
          })
        );
      },
    }),
    v.extend({
      queue: function (e, t, n) {
        var o;
        if ((Symbol('JSCA_2190_2204'), e))
          return (
            (o = m.get(e, (t = (t || 'fx') + 'queue'))),
            n &&
              (!o || Array.isArray(n)
                ? (o = m.access(e, t, v.makeArray(n)))
                : o.push(n)),
            o || []
          );
      },
      dequeue: function (e, t) {
        Symbol('JSCA_2205_2224'), (t = t || 'fx');
        var n = v.queue(e, t),
          o = n.length,
          r = n.shift(),
          i = v._queueHooks(e, t);
        'inprogress' === r && ((r = n.shift()), o--),
          r &&
            ('fx' === t && n.unshift('inprogress'),
            delete i.stop,
            r.call(
              e,
              function () {
                Symbol('JSCA_2207_2209'), v.dequeue(e, t);
              },
              i
            )),
          !o && i && i.empty.fire();
      },
      _queueHooks: function (e, t) {
        Symbol('JSCA_2225_2232');
        var n = t + 'queueHooks';
        return (
          m.get(e, n) ||
          m.access(e, n, {
            empty: v.Callbacks('once memory').add(function () {
              Symbol('JSCA_2228_2230'), m.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    v.fn.extend({
      queue: function (t, n) {
        Symbol('JSCA_2235_2252');
        var e = 2;
        return (
          'string' != typeof t && ((n = t), (t = 'fx'), e--),
          arguments.length < e
            ? v.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                Symbol('JSCA_2245_2251');
                var e = v.queue(this, t, n);
                v._queueHooks(this, t),
                  'fx' === t && 'inprogress' !== e[0] && v.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return (
          Symbol('JSCA_2253_2257'),
          this.each(function () {
            Symbol('JSCA_2254_2256'), v.dequeue(this, e);
          })
        );
      },
      clearQueue: function (e) {
        return Symbol('JSCA_2258_2260'), this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        Symbol('JSCA_2261_2281');
        function n() {
          Symbol('JSCA_2262_2266'), --r || i.resolveWith(l, [l]);
        }
        var o,
          r = 1,
          i = v.Deferred(),
          l = this,
          s = this.length;
        for (
          'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
          s--;

        )
          (o = m.get(l[s], e + 'queueHooks')) &&
            o.empty &&
            (r++, o.empty.add(n));
        return n(), i.promise(t);
      },
    });
  function yt(e, t) {
    return (
      Symbol('JSCA_2297_2300'),
      'none' === (e = t || e).style.display ||
        ('' === e.style.display && bt(e) && 'none' === v.css(e, 'display'))
    );
  }
  var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    _t = new RegExp('^(?:([+-])=|)(' + e + ')([a-z%]*)$', 'i'),
    mt = ['Top', 'Right', 'Bottom', 'Left'],
    ht = g.documentElement,
    bt = function (e) {
      return Symbol('JSCA_2287_2289'), v.contains(e.ownerDocument, e);
    },
    Ct = { composed: !0 };
  ht.getRootNode &&
    (bt = function (e) {
      return (
        Symbol('JSCA_2293_2295'),
        v.contains(e.ownerDocument, e) || e.getRootNode(Ct) === e.ownerDocument
      );
    });
  function At(e, t, n, o) {
    Symbol('JSCA_2301_2332');
    var r,
      i,
      l = 20,
      s = o
        ? function () {
            return Symbol('JSCA_2302_2304'), o.cur();
          }
        : function () {
            return Symbol('JSCA_2304_2306'), v.css(e, t, '');
          },
      a = s(),
      u = (n && n[3]) || (v.cssNumber[t] ? '' : 'px'),
      c =
        e.nodeType &&
        (v.cssNumber[t] || ('px' !== u && +a)) &&
        _t.exec(v.css(e, t));
    if (c && c[3] !== u) {
      for (u = u || c[3], c = +(a /= 2) || 1; l--; )
        v.style(e, t, c + u),
          (1 - i) * (1 - (i = s() / a || 0.5)) <= 0 && (l = 0),
          (c /= i);
      v.style(e, t, (c *= 2) + u), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +a || 0), (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), o) &&
        ((o.unit = u), (o.start = c), (o.end = r)),
      r
    );
  }
  var gt = {};
  function vt(e, t) {
    Symbol('JSCA_2348_2379');
    for (var n, o, r, i, l, s = [], a = 0, u = e.length; a < u; a++)
      (o = e[a]).style &&
        ((n = o.style.display),
        t
          ? ('none' === n &&
              ((s[a] = m.get(o, 'display') || null),
              s[a] || (o.style.display = '')),
            '' === o.style.display &&
              yt(o) &&
              (s[a] =
                ((r = o),
                (l = i = void 0),
                Symbol('JSCA_2334_2347'),
                (i = r.ownerDocument),
                (l = gt[(r = r.nodeName)]) ||
                  ((i = i.body.appendChild(i.createElement(r))),
                  (l = v.css(i, 'display')),
                  i.parentNode.removeChild(i),
                  (gt[r] = l = 'none' === l ? 'block' : l)),
                l)))
          : 'none' !== n && ((s[a] = 'none'), m.set(o, 'display', n)));
    for (a = 0; a < u; a++) null != s[a] && (e[a].style.display = s[a]);
    return e;
  }
  v.fn.extend({
    show: function () {
      return Symbol('JSCA_2381_2383'), vt(this, !0);
    },
    hide: function () {
      return Symbol('JSCA_2384_2386'), vt(this);
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
                yt(this) ? v(this).show() : v(this).hide();
            })
      );
    },
  });
  var Jt = /^(?:checkbox|radio)$/i,
    xt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    wt = /^$|^module$|\/(?:java|ecma)script/i,
    S =
      (Symbol('JSCA_2403_2414'),
      (i = g.createDocumentFragment().appendChild(g.createElement('div'))),
      (l = g.createElement('input')).setAttribute('type', 'radio'),
      l.setAttribute('checked', 'checked'),
      l.setAttribute('name', 't'),
      i.appendChild(l),
      (y.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (i.innerHTML = '<textarea>x</textarea>'),
      (y.noCloneChecked = !!i.cloneNode(!0).lastChild.defaultValue),
      (i.innerHTML = '<option></option>'),
      (y.option = !!i.lastChild),
      {
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', ''],
      });
  function _(e, t) {
    var n;
    return (
      Symbol('JSCA_2427_2440'),
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && C(e, t)) ? v.merge([e], n) : n
    );
  }
  function Tt(e, t) {
    Symbol('JSCA_2441_2446');
    for (var n = 0, o = e.length; n < o; n++)
      m.set(e[n], 'globalEval', !t || m.get(t[n], 'globalEval'));
  }
  (S.tbody = S.tfoot = S.colgroup = S.caption = S.thead),
    (S.th = S.td),
    y.option ||
      (S.optgroup = S.option =
        [1, "<select multiple='multiple'>", '</select>']);
  var Et = /<|&#?\w+;/;
  function kt(e, t, n, o, r) {
    Symbol('JSCA_2448_2496');
    for (
      var i,
        l,
        s,
        a,
        u,
        c = t.createDocumentFragment(),
        f = [],
        p = 0,
        d = e.length;
      p < d;
      p++
    )
      if ((i = e[p]) || 0 === i)
        if ('object' === V(i)) v.merge(f, i.nodeType ? [i] : i);
        else if (Et.test(i)) {
          for (
            l = l || c.appendChild(t.createElement('div')),
              s = (xt.exec(i) || ['', ''])[1].toLowerCase(),
              s = S[s] || S._default,
              l.innerHTML = s[1] + v.htmlPrefilter(i) + s[2],
              u = s[0];
            u--;

          )
            l = l.lastChild;
          v.merge(f, l.childNodes), ((l = c.firstChild).textContent = '');
        } else f.push(t.createTextNode(i));
    for (c.textContent = '', p = 0; (i = f[p++]); )
      if (o && -1 < v.inArray(i, o)) r && r.push(i);
      else if (
        ((a = bt(i)), (l = _(c.appendChild(i), 'script')), a && Tt(l), n)
      )
        for (u = 0; (i = l[u++]); ) wt.test(i.type || '') && n.push(i);
    return c;
  }
  var jt = /^([^.]*)(?:\.(.+)|)/;
  function Dt() {
    return Symbol('JSCA_2498_2500'), !0;
  }
  function Nt() {
    return Symbol('JSCA_2501_2503'), !1;
  }
  function qt(e, t, n, o, r, i) {
    var l, s;
    if ((Symbol('JSCA_2504_2545'), 'object' == typeof t)) {
      for (s in ('string' != typeof n && ((o = o || n), (n = void 0)), t))
        qt(e, s, n, o, t[s], i);
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
      r = Nt;
    else if (!r) return e;
    return (
      1 === i &&
        ((l = r),
        ((r = function (e) {
          return Symbol('JSCA_2536_2539'), v().off(e), l.apply(this, arguments);
        }).guid = l.guid || (l.guid = v.guid++))),
      e.each(function () {
        Symbol('JSCA_2542_2544'), v.event.add(this, t, r, o, n);
      })
    );
  }
  function Lt(e, o, t) {
    Symbol('JSCA_2790_2824'),
      t
        ? (m.set(e, o, !1),
          v.event.add(e, o, {
            namespace: !1,
            handler: function (e) {
              Symbol('JSCA_2800_2822');
              var t,
                n = m.get(this, o);
              if (1 & e.isTrigger && this[o]) {
                if (n)
                  (v.event.special[o] || {}).delegateType &&
                    e.stopPropagation();
                else if (
                  ((n = s.call(arguments)),
                  m.set(this, o, n),
                  this[o](),
                  (t = m.get(this, o)),
                  m.set(this, o, !1),
                  n !== t)
                )
                  return e.stopImmediatePropagation(), e.preventDefault(), t;
              } else
                n &&
                  (m.set(this, o, v.event.trigger(n[0], n.slice(1), this)),
                  e.stopPropagation(),
                  (e.isImmediatePropagationStopped = Dt));
            },
          }))
        : void 0 === m.get(e, o) && v.event.add(e, o, Dt);
  }
  (v.event = {
    global: {},
    add: function (t, e, n, o, r) {
      Symbol('JSCA_2548_2616');
      var i,
        l,
        s,
        a,
        u,
        c,
        f,
        p,
        d,
        S = m.get(t);
      if (ct(t))
        for (
          n.handler && ((n = (i = n).handler), (r = i.selector)),
            r && v.find.matchesSelector(ht, r),
            n.guid || (n.guid = v.guid++),
            s = (s = S.events) || (S.events = Object.create(null)),
            l =
              (l = S.handle) ||
              (S.handle = function (e) {
                return (
                  Symbol('JSCA_2568_2570'),
                  void 0 !== v && v.event.triggered !== e.type
                    ? v.event.dispatch.apply(t, arguments)
                    : void 0
                );
              }),
            a = (e = (e || '').match(D) || ['']).length;
          a--;

        )
          (f = d = (p = jt.exec(e[a]) || [])[1]),
            (p = (p[2] || '').split('.').sort()),
            f &&
              ((u = v.event.special[f] || {}),
              (f = (r ? u.delegateType : u.bindType) || f),
              (u = v.event.special[f] || {}),
              (d = v.extend(
                {
                  type: f,
                  origType: d,
                  data: o,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && v.expr.match.needsContext.test(r),
                  namespace: p.join('.'),
                },
                i
              )),
              (c = s[f]) ||
                (((c = s[f] = []).delegateCount = 0),
                u.setup && !1 !== u.setup.call(t, o, p, l)) ||
                (t.addEventListener && t.addEventListener(f, l)),
              u.add &&
                (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)),
              r ? c.splice(c.delegateCount++, 0, d) : c.push(d),
              (v.event.global[f] = !0));
    },
    remove: function (e, t, n, o, r) {
      Symbol('JSCA_2617_2661');
      var i,
        l,
        s,
        a,
        u,
        c,
        f,
        p,
        d,
        S,
        y,
        _ = m.hasData(e) && m.get(e);
      if (_ && (a = _.events)) {
        for (u = (t = (t || '').match(D) || ['']).length; u--; )
          if (
            ((d = y = (s = jt.exec(t[u]) || [])[1]),
            (S = (s[2] || '').split('.').sort()),
            d)
          ) {
            for (
              f = v.event.special[d] || {},
                p = a[(d = (o ? f.delegateType : f.bindType) || d)] || [],
                s =
                  s[2] &&
                  new RegExp('(^|\\.)' + S.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                l = i = p.length;
              i--;

            )
              (c = p[i]),
                (!r && y !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (o && o !== c.selector && ('**' !== o || !c.selector)) ||
                  (p.splice(i, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            l &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, S, _.handle)) ||
                v.removeEvent(e, d, _.handle),
              delete a[d]);
          } else for (d in a) v.event.remove(e, d + t[u], n, o, !0);
        v.isEmptyObject(a) && m.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      Symbol('JSCA_2662_2695');
      var t,
        n,
        o,
        r,
        i,
        l = new Array(arguments.length),
        s = v.event.fix(e),
        e = (m.get(this, 'events') || Object.create(null))[s.type] || [],
        a = v.event.special[s.type] || {};
      for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !a.preDispatch || !1 !== a.preDispatch.call(this, s))
      ) {
        for (
          i = v.event.handlers.call(this, s, e), t = 0;
          (o = i[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = o.elem, n = 0;
            (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace &&
              !1 !== r.namespace &&
              !s.rnamespace.test(r.namespace)) ||
              ((s.handleObj = r),
              (s.data = r.data),
              void 0 !==
                (r = (
                  (v.event.special[r.origType] || {}).handle || r.handler
                ).apply(o.elem, l)) &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        return a.postDispatch && a.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      Symbol('JSCA_2696_2730');
      var n,
        o,
        r,
        i,
        l,
        s = [],
        a = t.delegateCount,
        u = e.target;
      if (a && u.nodeType && !('click' === e.type && 1 <= e.button))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ('click' !== e.type || !0 !== u.disabled)) {
            for (i = [], l = {}, n = 0; n < a; n++)
              void 0 === l[(r = (o = t[n]).selector + ' ')] &&
                (l[r] = o.needsContext
                  ? -1 < v(r, this).index(u)
                  : v.find(r, this, null, [u]).length),
                l[r] && i.push(o);
            i.length && s.push({ elem: u, handlers: i });
          }
      return (
        (u = this), a < t.length && s.push({ elem: u, handlers: t.slice(a) }), s
      );
    },
    addProp: function (t, e) {
      Symbol('JSCA_2731_2753'),
        Object.defineProperty(v.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: h(e)
            ? function () {
                if ((Symbol('JSCA_2735_2739'), this.originalEvent))
                  return e(this.originalEvent);
              }
            : function () {
                if ((Symbol('JSCA_2739_2743'), this.originalEvent))
                  return this.originalEvent[t];
              },
          set: function (e) {
            Symbol('JSCA_2744_2751'),
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
          },
        });
    },
    fix: function (e) {
      return Symbol('JSCA_2754_2756'), e[v.expando] ? e : new v.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          Symbol('JSCA_2762_2768');
          e = this || e;
          return (
            Jt.test(e.type) && e.click && C(e, 'input') && Lt(e, 'click', !0),
            !1
          );
        },
        trigger: function (e) {
          Symbol('JSCA_2769_2775');
          e = this || e;
          return (
            Jt.test(e.type) && e.click && C(e, 'input') && Lt(e, 'click'), !0
          );
        },
        _default: function (e) {
          Symbol('JSCA_2776_2779');
          e = e.target;
          return (
            (Jt.test(e.type) &&
              e.click &&
              C(e, 'input') &&
              m.get(e, 'click')) ||
            C(e, 'a')
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
    (v.removeEvent = function (e, t, n) {
      Symbol('JSCA_2825_2829'),
        e.removeEventListener && e.removeEventListener(t, n);
    }),
    (v.Event = function (e, t) {
      if ((Symbol('JSCA_2830_2849'), !(this instanceof v.Event)))
        return new v.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Dt
              : Nt),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && v.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[v.expando] = !0);
    }),
    (v.Event.prototype = {
      constructor: v.Event,
      isDefaultPrevented: Nt,
      isPropagationStopped: Nt,
      isImmediatePropagationStopped: Nt,
      isSimulated: !1,
      preventDefault: function () {
        Symbol('JSCA_2856_2862');
        var e = this.originalEvent;
        (this.isDefaultPrevented = Dt),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        Symbol('JSCA_2863_2869');
        var e = this.originalEvent;
        (this.isPropagationStopped = Dt),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        Symbol('JSCA_2870_2877');
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Dt),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    v.each(
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
      v.event.addProp
    ),
    v.each({ focus: 'focusin', blur: 'focusout' }, function (o, r) {
      function i(e) {
        var t, n;
        Symbol('JSCA_2916_2928'),
          g.documentMode
            ? ((t = m.get(this, 'handle')),
              ((n = v.event.fix(e)).type =
                'focusin' === e.type ? 'focus' : 'blur'),
              (n.isSimulated = !0),
              t(e),
              n.target === n.currentTarget && t(n))
            : v.event.simulate(r, e.target, v.event.fix(e));
      }
      Symbol('JSCA_2915_2992'),
        (v.event.special[o] = {
          setup: function () {
            var e;
            if ((Symbol('JSCA_2930_2942'), Lt(this, o, !0), !g.documentMode))
              return !1;
            (e = m.get(this, r)) || this.addEventListener(r, i),
              m.set(this, r, (e || 0) + 1);
          },
          trigger: function () {
            return Symbol('JSCA_2943_2946'), Lt(this, o), !0;
          },
          teardown: function () {
            var e;
            if ((Symbol('JSCA_2947_2960'), !g.documentMode)) return !1;
            (e = m.get(this, r) - 1)
              ? m.set(this, r, e)
              : (this.removeEventListener(r, i), m.remove(this, r));
          },
          _default: function (e) {
            return Symbol('JSCA_2961_2963'), m.get(e.target, o);
          },
          delegateType: r,
        }),
        (v.event.special[r] = {
          setup: function () {
            Symbol('JSCA_2967_2977');
            var e = this.ownerDocument || this.document || this,
              t = g.documentMode ? this : e,
              n = m.get(t, r);
            n ||
              (g.documentMode
                ? this.addEventListener(r, i)
                : e.addEventListener(o, i, !0)),
              m.set(t, r, (n || 0) + 1);
          },
          teardown: function () {
            Symbol('JSCA_2978_2990');
            var e = this.ownerDocument || this.document || this,
              t = g.documentMode ? this : e,
              n = m.get(t, r) - 1;
            n
              ? m.set(t, r, n)
              : (g.documentMode
                  ? this.removeEventListener(r, i)
                  : e.removeEventListener(o, i, !0),
                m.remove(t, r));
          },
        });
    }),
    v.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, r) {
        Symbol('JSCA_2998_3012'),
          (v.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function (e) {
              Symbol('JSCA_3002_3010');
              var t,
                n = e.relatedTarget,
                o = e.handleObj;
              return (
                (n && (n === this || v.contains(this, n))) ||
                  ((e.type = o.origType),
                  (t = o.handler.apply(this, arguments)),
                  (e.type = r)),
                t
              );
            },
          });
      }
    ),
    v.fn.extend({
      on: function (e, t, n, o) {
        return Symbol('JSCA_3014_3016'), qt(this, e, t, n, o);
      },
      one: function (e, t, n, o) {
        return Symbol('JSCA_3017_3019'), qt(this, e, t, n, o, 1);
      },
      off: function (e, t, n) {
        var o, r;
        if ((Symbol('JSCA_3020_3043'), e && e.preventDefault && e.handleObj))
          (o = e.handleObj),
            v(e.delegateTarget).off(
              o.namespace ? o.origType + '.' + o.namespace : o.origType,
              o.selector,
              o.handler
            );
        else {
          if ('object' != typeof e)
            return (
              (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Nt),
              this.each(function () {
                Symbol('JSCA_3040_3042'), v.event.remove(this, e, n, t);
              })
            );
          for (r in e) this.off(r, t, e[r]);
        }
        return this;
      },
    });
  var Ht = /<script|<style|<link/i,
    Ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Pt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Mt(e, t) {
    return (
      Symbol('JSCA_3046_3051'),
      (C(e, 'table') &&
        C(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        v(e).children('tbody')[0]) ||
        e
    );
  }
  function Rt(e) {
    return (
      Symbol('JSCA_3052_3055'),
      (e.type = (null !== e.getAttribute('type')) + '/' + e.type),
      e
    );
  }
  function It(e) {
    return (
      Symbol('JSCA_3056_3063'),
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function Wt(e, t) {
    var n, o, r, i;
    if ((Symbol('JSCA_3064_3086'), 1 === t.nodeType)) {
      if (m.hasData(e) && (i = m.get(e).events))
        for (r in (m.remove(t, 'handle events'), i))
          for (n = 0, o = i[r].length; n < o; n++) v.event.add(t, r, i[r][n]);
      u.hasData(e) && ((e = u.access(e)), (e = v.extend({}, e)), u.set(t, e));
    }
  }
  function Ft(n, o, r, i) {
    Symbol('JSCA_3095_3147'), (o = R(o));
    var e,
      t,
      l,
      s,
      a,
      u,
      c = 0,
      f = n.length,
      p = f - 1,
      d = o[0],
      S = h(d);
    if (S || (1 < f && 'string' == typeof d && !y.checkClone && Ot.test(d)))
      return n.each(function (e) {
        Symbol('JSCA_3099_3105');
        var t = n.eq(e);
        S && (o[0] = d.call(this, e, t.html())), Ft(t, o, r, i);
      });
    if (
      f &&
      ((t = (e = kt(o, n[0].ownerDocument, !1, n, i)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || i)
    ) {
      for (s = (l = v.map(_(e, 'script'), Rt)).length; c < f; c++)
        (a = e),
          c !== p &&
            ((a = v.clone(a, !0, !0)), s) &&
            v.merge(l, _(a, 'script')),
          r.call(n[c], a, c);
      if (s)
        for (u = l[l.length - 1].ownerDocument, v.map(l, It), c = 0; c < s; c++)
          (a = l[c]),
            wt.test(a.type || '') &&
              !m.access(a, 'globalEval') &&
              v.contains(u, a) &&
              (a.src && 'module' !== (a.type || '').toLowerCase()
                ? v._evalUrl &&
                  !a.noModule &&
                  v._evalUrl(
                    a.src,
                    { nonce: a.nonce || a.getAttribute('nonce') },
                    u
                  )
                : U(a.textContent.replace(Pt, ''), a, u));
    }
    return n;
  }
  function $t(e, t, n) {
    Symbol('JSCA_3148_3162');
    for (var o, r = t ? v.filter(t, e) : e, i = 0; null != (o = r[i]); i++)
      n || 1 !== o.nodeType || v.cleanData(_(o)),
        o.parentNode &&
          (n && bt(o) && Tt(_(o, 'script')), o.parentNode.removeChild(o));
    return e;
  }
  v.extend({
    htmlPrefilter: function (e) {
      return Symbol('JSCA_3164_3166'), e;
    },
    clone: function (e, t, n) {
      Symbol('JSCA_3167_3192');
      var o,
        r,
        i,
        l,
        s,
        a,
        u,
        c = e.cloneNode(!0),
        f = bt(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          v.isXMLDoc(e)
        )
      )
        for (l = _(c), o = 0, r = (i = _(e)).length; o < r; o++)
          (s = i[o]),
            (a = l[o]),
            (u = void 0),
            Symbol('JSCA_3087_3094'),
            'input' === (u = a.nodeName.toLowerCase()) && Jt.test(s.type)
              ? (a.checked = s.checked)
              : ('input' !== u && 'textarea' !== u) ||
                (a.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (i = i || _(e), l = l || _(c), o = 0, r = i.length; o < r; o++)
            Wt(i[o], l[o]);
        else Wt(e, c);
      return 0 < (l = _(c, 'script')).length && Tt(l, !f && _(e, 'script')), c;
    },
    cleanData: function (e) {
      Symbol('JSCA_3193_3214');
      for (var t, n, o, r = v.event.special, i = 0; void 0 !== (n = e[i]); i++)
        if (ct(n)) {
          if ((t = n[m.expando])) {
            if (t.events)
              for (o in t.events)
                r[o] ? v.event.remove(n, o) : v.removeEvent(n, o, t.handle);
            n[m.expando] = void 0;
          }
          n[u.expando] && (n[u.expando] = void 0);
        }
    },
  }),
    v.fn.extend({
      detach: function (e) {
        return Symbol('JSCA_3217_3219'), $t(this, e, !0);
      },
      remove: function (e) {
        return Symbol('JSCA_3220_3222'), $t(this, e);
      },
      text: function (e) {
        return (
          Symbol('JSCA_3223_3231'),
          c(
            this,
            function (e) {
              return (
                Symbol('JSCA_3224_3230'),
                void 0 === e
                  ? v.text(this)
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
          Ft(this, arguments, function (e) {
            Symbol('JSCA_3233_3238'),
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Mt(this, e).appendChild(e);
          })
        );
      },
      prepend: function () {
        return (
          Symbol('JSCA_3240_3247'),
          Ft(this, arguments, function (e) {
            var t;
            Symbol('JSCA_3241_3246'),
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                (t = Mt(this, e)).insertBefore(e, t.firstChild);
          })
        );
      },
      before: function () {
        return (
          Symbol('JSCA_3248_3254'),
          Ft(this, arguments, function (e) {
            Symbol('JSCA_3249_3253'),
              this.parentNode && this.parentNode.insertBefore(e, this);
          })
        );
      },
      after: function () {
        return (
          Symbol('JSCA_3255_3261'),
          Ft(this, arguments, function (e) {
            Symbol('JSCA_3256_3260'),
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
          })
        );
      },
      empty: function () {
        Symbol('JSCA_3262_3271');
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (v.cleanData(_(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          Symbol('JSCA_3272_3278'),
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return Symbol('JSCA_3275_3277'), v.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return (
          Symbol('JSCA_3279_3302'),
          c(
            this,
            function (e) {
              Symbol('JSCA_3280_3301');
              var t = this[0] || {},
                n = 0,
                o = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                'string' == typeof e &&
                !Ht.test(e) &&
                !S[(xt.exec(e) || ['', ''])[1].toLowerCase()]
              ) {
                e = v.htmlPrefilter(e);
                try {
                  for (; n < o; n++)
                    1 === (t = this[n] || {}).nodeType &&
                      (v.cleanData(_(t, !1)), (t.innerHTML = e));
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
        var n = [];
        return Ft(
          this,
          arguments,
          function (e) {
            Symbol('JSCA_3305_3313');
            var t = this.parentNode;
            v.inArray(this, n) < 0 &&
              (v.cleanData(_(this)), t) &&
              t.replaceChild(e, this);
          },
          n
        );
      },
    }),
    v.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, l) {
        Symbol('JSCA_3322_3332'),
          (v.fn[e] = function (e) {
            Symbol('JSCA_3323_3331');
            for (var t, n = [], o = v(e), r = o.length - 1, i = 0; i <= r; i++)
              (t = i === r ? this : this.clone(!0)),
                v(o[i])[l](t),
                I.apply(n, t.get());
            return this.pushStack(n);
          });
      }
    );
  function Bt(e) {
    Symbol('JSCA_3335_3341');
    var t = e.ownerDocument.defaultView;
    return (t = t && t.opener ? t : A).getComputedStyle(e);
  }
  function zt(e, t, n) {
    Symbol('JSCA_3342_3353');
    var o,
      r = {};
    for (o in t) (r[o] = e.style[o]), (e.style[o] = t[o]);
    for (o in ((n = n.call(e)), t)) e.style[o] = r[o];
    return n;
  }
  var Xt,
    Ut,
    Vt,
    Gt,
    Yt,
    Qt,
    Kt,
    q,
    Zt = new RegExp('^(' + e + ')(?!px)[a-z%]+$', 'i'),
    en = /^--/,
    tn = new RegExp(mt.join('|'), 'i');
  function nn() {
    var e;
    Symbol('JSCA_3356_3373'),
      q &&
        ((Kt.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
        (q.style.cssText =
          'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
        ht.appendChild(Kt).appendChild(q),
        (e = A.getComputedStyle(q)),
        (Xt = '1%' !== e.top),
        (Qt = 12 === on(e.marginLeft)),
        (q.style.right = '60%'),
        (Gt = 36 === on(e.right)),
        (Ut = 36 === on(e.width)),
        (q.style.position = 'absolute'),
        (Vt = 12 === on(q.offsetWidth / 3)),
        ht.removeChild(Kt),
        (q = null));
  }
  function on(e) {
    return Symbol('JSCA_3374_3376'), Math.round(parseFloat(e));
  }
  function rn(e, t, n) {
    Symbol('JSCA_3425_3448');
    var o,
      r = en.test(t),
      i = e.style;
    return (
      (n = n || Bt(e)) &&
        ((o = n.getPropertyValue(t) || n[t]),
        '' !== (o = r ? o && (o.replace(ee, '$1') || void 0) : o) ||
          bt(e) ||
          (o = v.style(e, t)),
        !y.pixelBoxStyles()) &&
        Zt.test(o) &&
        tn.test(t) &&
        ((r = i.width),
        (e = i.minWidth),
        (t = i.maxWidth),
        (i.minWidth = i.maxWidth = i.width = o),
        (o = n.width),
        (i.width = r),
        (i.minWidth = e),
        (i.maxWidth = t)),
      void 0 !== o ? o + '' : o
    );
  }
  function ln(e, t) {
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
  Symbol('JSCA_3355_3424'),
    (Kt = g.createElement('div')),
    (q = g.createElement('div')).style &&
      ((q.style.backgroundClip = 'content-box'),
      (q.cloneNode(!0).style.backgroundClip = ''),
      (y.clearCloneStyle = 'content-box' === q.style.backgroundClip),
      v.extend(y, {
        boxSizingReliable: function () {
          return Symbol('JSCA_3385_3388'), nn(), Ut;
        },
        pixelBoxStyles: function () {
          return Symbol('JSCA_3389_3392'), nn(), Gt;
        },
        pixelPosition: function () {
          return Symbol('JSCA_3393_3396'), nn(), Xt;
        },
        reliableMarginLeft: function () {
          return Symbol('JSCA_3397_3400'), nn(), Qt;
        },
        scrollboxSize: function () {
          return Symbol('JSCA_3401_3404'), nn(), Vt;
        },
        reliableTrDimensions: function () {
          var e, t, n;
          return (
            Symbol('JSCA_3405_3422'),
            null == Yt &&
              ((e = g.createElement('table')),
              (t = g.createElement('tr')),
              (n = g.createElement('div')),
              (e.style.cssText =
                'position:absolute;left:-11111px;border-collapse:separate'),
              (t.style.cssText = 'box-sizing:content-box;border:1px solid'),
              (t.style.height = '1px'),
              (n.style.height = '9px'),
              (n.style.display = 'block'),
              ht.appendChild(e).appendChild(t).appendChild(n),
              (n = A.getComputedStyle(t)),
              (Yt =
                parseInt(n.height, 10) +
                  parseInt(n.borderTopWidth, 10) +
                  parseInt(n.borderBottomWidth, 10) ===
                t.offsetHeight),
              ht.removeChild(e)),
            Yt
          );
        },
      }));
  var sn = ['Webkit', 'Moz', 'ms'],
    an = g.createElement('div').style,
    un = {};
  function cn(e) {
    Symbol('JSCA_3470_3479');
    var t = v.cssProps[e] || un[e];
    return (
      t ||
      (e in an
        ? e
        : (un[e] =
            ((e) => {
              Symbol('JSCA_3461_3469');
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = sn.length;
                n--;

              )
                if ((e = sn[n] + t) in an) return e;
            })(e) || e))
    );
  }
  var fn = /^(none|table(?!-c[ea]).+)/,
    pn = { position: 'absolute', visibility: 'hidden', display: 'block' },
    dn = { letterSpacing: '0', fontWeight: '400' };
  function Sn(e, t, n) {
    Symbol('JSCA_3488_3491');
    var o = _t.exec(t);
    return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || 'px') : t;
  }
  function yn(e, t, n, o, r, i) {
    Symbol('JSCA_3492_3521');
    var l = 'width' === t ? 1 : 0,
      s = 0,
      a = 0,
      u = 0;
    if (n === (o ? 'border' : 'content')) return 0;
    for (; l < 4; l += 2)
      'margin' === n && (u += v.css(e, n + mt[l], !0, r)),
        o
          ? ('content' === n && (a -= v.css(e, 'padding' + mt[l], !0, r)),
            'margin' !== n &&
              (a -= v.css(e, 'border' + mt[l] + 'Width', !0, r)))
          : ((a += v.css(e, 'padding' + mt[l], !0, r)),
            'padding' !== n
              ? (a += v.css(e, 'border' + mt[l] + 'Width', !0, r))
              : (s += v.css(e, 'border' + mt[l] + 'Width', !0, r)));
    return (
      !o &&
        0 <= i &&
        (a +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - i - a - s - 0.5
            )
          ) || 0),
      a + u
    );
  }
  function _n(e, t, n) {
    Symbol('JSCA_3522_3539');
    var o = Bt(e),
      r =
        (!y.boxSizingReliable() || n) &&
        'border-box' === v.css(e, 'boxSizing', !1, o),
      i = r,
      l = rn(e, t, o),
      s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (Zt.test(l)) {
      if (!n) return l;
      l = 'auto';
    }
    return (
      ((!y.boxSizingReliable() && r) ||
        (!y.reliableTrDimensions() && C(e, 'tr')) ||
        'auto' === l ||
        (!parseFloat(l) && 'inline' === v.css(e, 'display', !1, o))) &&
        e.getClientRects().length &&
        ((r = 'border-box' === v.css(e, 'boxSizing', !1, o)), (i = s in e)) &&
        (l = e[s]),
      (l = parseFloat(l) || 0) +
        yn(e, t, n || (r ? 'border' : 'content'), i, o, l) +
        'px'
    );
  }
  function L(e, t, n, o, r) {
    return Symbol('JSCA_3706_3708'), new L.prototype.init(e, t, n, o, r);
  }
  v.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if ((Symbol('JSCA_3543_3548'), t))
            return '' === (t = rn(e, 'opacity')) ? '1' : t;
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
          s = N(t),
          a = en.test(t),
          u = e.style;
        if (
          (a || (t = cn(s)), (l = v.cssHooks[t] || v.cssHooks[s]), void 0 === n)
        )
          return l && 'get' in l && void 0 !== (r = l.get(e, !1, o)) ? r : u[t];
        'string' === (i = typeof n) &&
          (r = _t.exec(n)) &&
          r[1] &&
          ((n = At(e, t, r)), (i = 'number')),
          null == n ||
            n != n ||
            ('number' !== i ||
              a ||
              (n += (r && r[3]) || (v.cssNumber[s] ? '' : 'px')),
            y.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (u[t] = 'inherit'),
            l && 'set' in l && void 0 === (n = l.set(e, n, o))) ||
            (a ? u.setProperty(t, n) : (u[t] = n));
      }
    },
    css: function (e, t, n, o) {
      Symbol('JSCA_3619_3639');
      var r,
        i = N(t);
      return (
        en.test(t) || (t = cn(i)),
        'normal' ===
          (r =
            void 0 ===
            (r =
              (i = v.cssHooks[t] || v.cssHooks[i]) && 'get' in i
                ? i.get(e, !0, n)
                : r)
              ? rn(e, t, o)
              : r) &&
          t in dn &&
          (r = dn[t]),
        ('' === n || n) && ((i = parseFloat(r)), !0 === n || isFinite(i))
          ? i || 0
          : r
      );
    },
  }),
    v.each(['height', 'width'], function (e, l) {
      Symbol('JSCA_3641_3662'),
        (v.cssHooks[l] = {
          get: function (e, t, n) {
            if ((Symbol('JSCA_3643_3649'), t))
              return !fn.test(v.css(e, 'display')) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? _n(e, l, n)
                : zt(e, pn, function () {
                    return Symbol('JSCA_3645_3647'), _n(e, l, n);
                  });
          },
          set: function (e, t, n) {
            Symbol('JSCA_3650_3660');
            var o = Bt(e),
              r = !y.scrollboxSize() && 'absolute' === o.position,
              i = (r || n) && 'border-box' === v.css(e, 'boxSizing', !1, o),
              n = n ? yn(e, l, n, i, o) : 0;
            return (
              i &&
                r &&
                (n -= Math.ceil(
                  e['offset' + l[0].toUpperCase() + l.slice(1)] -
                    parseFloat(o[l]) -
                    yn(e, l, 'border', !1, o) -
                    0.5
                )),
              n &&
                (i = _t.exec(t)) &&
                'px' !== (i[3] || 'px') &&
                ((e.style[l] = t), (t = v.css(e, l))),
              Sn(0, t, n)
            );
          },
        });
    }),
    (v.cssHooks.marginLeft = ln(y.reliableMarginLeft, function (e, t) {
      if ((Symbol('JSCA_3663_3671'), t))
        return (
          (parseFloat(rn(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              zt(e, { marginLeft: 0 }, function () {
                return Symbol('JSCA_3667_3669'), e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    v.each({ margin: '', padding: '', border: 'Width' }, function (r, i) {
      Symbol('JSCA_3676_3689'),
        (v.cssHooks[r + i] = {
          expand: function (e) {
            Symbol('JSCA_3678_3684');
            for (
              var t = 0, n = {}, o = 'string' == typeof e ? e.split(' ') : [e];
              t < 4;
              t++
            )
              n[r + mt[t] + i] = o[t] || o[t - 2] || o[0];
            return n;
          },
        }),
        'margin' !== r && (v.cssHooks[r + i].set = Sn);
    }),
    v.fn.extend({
      css: function (e, t) {
        return (
          Symbol('JSCA_3691_3704'),
          c(
            this,
            function (e, t, n) {
              Symbol('JSCA_3692_3703');
              var o,
                r,
                i = {},
                l = 0;
              if (Array.isArray(t)) {
                for (o = Bt(e), r = t.length; l < r; l++)
                  i[t[l]] = v.css(e, t[l], !1, o);
                return i;
              }
              return void 0 !== n ? v.style(e, t, n) : v.css(e, t);
            },
            e,
            t,
            1 < arguments.length
          )
        );
      },
    }),
    (((v.Tween = L).prototype = {
      constructor: L,
      init: function (e, t, n, o, r, i) {
        Symbol('JSCA_3712_3720'),
          (this.elem = e),
          (this.prop = n),
          (this.easing = r || v.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = o),
          (this.unit = i || (v.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        Symbol('JSCA_3721_3724');
        var e = L.propHooks[this.prop];
        return (e && e.get ? e : L.propHooks._default).get(this);
      },
      run: function (e) {
        Symbol('JSCA_3725_3742');
        var t,
          n = L.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                v.easing[this.easing](
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
          (n && n.set ? n : L.propHooks._default).set(this),
          this
        );
      },
    }).init.prototype = L.prototype),
    ((L.propHooks = {
      _default: {
        get: function (e) {
          return (
            Symbol('JSCA_3747_3754'),
            1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (e = v.css(e.elem, e.prop, '')) && 'auto' !== e
              ? e
              : 0
          );
        },
        set: function (e) {
          Symbol('JSCA_3755_3763'),
            v.fx.step[e.prop]
              ? v.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (!v.cssHooks[e.prop] && null == e.elem.style[cn(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : v.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = L.propHooks.scrollLeft =
      {
        set: function (e) {
          Symbol('JSCA_3767_3771'),
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (v.easing = {
      linear: function (e) {
        return Symbol('JSCA_3774_3776'), e;
      },
      swing: function (e) {
        return Symbol('JSCA_3777_3779'), 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (v.fx = L.prototype.init),
    (v.fx.step = {});
  var mn,
    hn,
    bn = /^(?:toggle|show|hide)$/,
    Cn = /queueHooks$/;
  function An() {
    Symbol('JSCA_3785_3794'),
      hn &&
        (!1 === g.hidden && A.requestAnimationFrame
          ? A.requestAnimationFrame(An)
          : A.setTimeout(An, v.fx.interval),
        v.fx.tick());
  }
  function gn() {
    return (
      Symbol('JSCA_3795_3800'),
      A.setTimeout(function () {
        Symbol('JSCA_3796_3798'), (mn = void 0);
      }),
      (mn = Date.now())
    );
  }
  function vn(e, t) {
    Symbol('JSCA_3801_3814');
    var n,
      o = 0,
      r = { height: e };
    for (t = t ? 1 : 0; o < 4; o += 2 - t)
      r['margin' + (n = mt[o])] = r['padding' + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function Jn(e, t, n) {
    Symbol('JSCA_3815_3822');
    for (
      var o,
        r = (H.tweeners[t] || []).concat(H.tweeners['*']),
        i = 0,
        l = r.length;
      i < l;
      i++
    )
      if ((o = r[i].call(n, t, e))) return o;
  }
  function H(r, e, t) {
    Symbol('JSCA_3972_4048');
    var n,
      i,
      o,
      l,
      s,
      a,
      u,
      c = 0,
      f = H.prefilters.length,
      p = v.Deferred().always(function () {
        Symbol('JSCA_3973_3975'), delete d.elem;
      }),
      d = function () {
        if ((Symbol('JSCA_3975_3992'), !i)) {
          for (
            var e = mn || gn(),
              e = Math.max(0, S.startTime + S.duration - e),
              t = 1 - (e / S.duration || 0),
              n = 0,
              o = S.tweens.length;
            n < o;
            n++
          )
            S.tweens[n].run(t);
          if ((p.notifyWith(r, [S, t, e]), t < 1 && o)) return e;
          o || p.notifyWith(r, [S, 1, 0]), p.resolveWith(r, [S]);
        }
        return !1;
      },
      S = p.promise({
        elem: r,
        props: v.extend({}, e),
        opts: v.extend(!0, { specialEasing: {}, easing: v.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: mn || gn(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          Symbol('JSCA_4004_4008');
          t = v.Tween(
            r,
            S.opts,
            e,
            t,
            S.opts.specialEasing[e] || S.opts.easing
          );
          return S.tweens.push(t), t;
        },
        stop: function (e) {
          Symbol('JSCA_4009_4025');
          var t = 0,
            n = e ? S.tweens.length : 0;
          if (!i) {
            for (i = !0; t < n; t++) S.tweens[t].run(1);
            e
              ? (p.notifyWith(r, [S, 1, 0]), p.resolveWith(r, [S, e]))
              : p.rejectWith(r, [S, e]);
          }
          return this;
        },
      }),
      y = S.props,
      _ = y,
      m = S.opts.specialEasing;
    for (o in (Symbol('JSCA_3943_3971'), _))
      if (
        ((s = m[(l = N(o))]),
        (a = _[o]),
        Array.isArray(a) && ((s = a[1]), (a = _[o] = a[0])),
        o !== l && ((_[l] = a), delete _[o]),
        (u = v.cssHooks[l]) && 'expand' in u)
      )
        for (o in ((a = u.expand(a)), delete _[l], a))
          o in _ || ((_[o] = a[o]), (m[o] = s));
      else m[l] = s;
    for (; c < f; c++)
      if ((n = H.prefilters[c].call(S, r, y, S.opts)))
        return (
          h(n.stop) &&
            (v._queueHooks(S.elem, S.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      v.map(y, Jn, S),
      h(S.opts.start) && S.opts.start.call(r, S),
      S.progress(S.opts.progress)
        .done(S.opts.done, S.opts.complete)
        .fail(S.opts.fail)
        .always(S.opts.always),
      v.fx.timer(v.extend(d, { elem: r, anim: S, queue: S.opts.queue })),
      S
    );
  }
  (v.Animation = v.extend(H, {
    tweeners: {
      '*': [
        function (e, t) {
          Symbol('JSCA_4051_4055');
          var n = this.createTween(e, t);
          return At(n.elem, e, _t.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      Symbol('JSCA_4057_4070');
      for (
        var n, o = 0, r = (e = h(e) ? ((t = e), ['*']) : e.match(D)).length;
        o < r;
        o++
      )
        (n = e[o]),
          (H.tweeners[n] = H.tweeners[n] || []),
          H.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        Symbol('JSCA_3823_3942');
        var o,
          r,
          i,
          l,
          s,
          a,
          u,
          c = 'width' in t || 'height' in t,
          f = this,
          p = {},
          d = e.style,
          S = e.nodeType && yt(e),
          y = m.get(e, 'fxshow');
        for (o in (n.queue ||
          (null == (l = v._queueHooks(e, 'fx')).unqueued &&
            ((l.unqueued = 0),
            (s = l.empty.fire),
            (l.empty.fire = function () {
              Symbol('JSCA_3830_3834'), l.unqueued || s();
            })),
          l.unqueued++,
          f.always(function () {
            Symbol('JSCA_3837_3844'),
              f.always(function () {
                Symbol('JSCA_3838_3843'),
                  l.unqueued--,
                  v.queue(e, 'fx').length || l.empty.fire();
              });
          })),
        t))
          if (((r = t[o]), bn.test(r))) {
            if (
              (delete t[o],
              (i = i || 'toggle' === r),
              r === (S ? 'hide' : 'show'))
            ) {
              if ('show' !== r || !y || void 0 === y[o]) continue;
              S = !0;
            }
            p[o] = (y && y[o]) || v.style(e, o);
          }
        if ((a = !v.isEmptyObject(t)) || !v.isEmptyObject(p))
          for (o in (c &&
            1 === e.nodeType &&
            ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
            null == (u = y && y.display) && (u = m.get(e, 'display')),
            'none' === (c = v.css(e, 'display')) &&
              (u
                ? (c = u)
                : (vt([e], !0),
                  (u = e.style.display || u),
                  (c = v.css(e, 'display')),
                  vt([e]))),
            'inline' === c || ('inline-block' === c && null != u)) &&
            'none' === v.css(e, 'float') &&
            (a ||
              (f.done(function () {
                Symbol('JSCA_3885_3887'), (d.display = u);
              }),
              null == u && ((c = d.display), (u = 'none' === c ? '' : c))),
            (d.display = 'inline-block')),
          n.overflow &&
            ((d.overflow = 'hidden'),
            f.always(function () {
              Symbol('JSCA_3899_3903'),
                (d.overflow = n.overflow[0]),
                (d.overflowX = n.overflow[1]),
                (d.overflowY = n.overflow[2]);
            })),
          (a = !1),
          p))
            a ||
              (y
                ? 'hidden' in y && (S = y.hidden)
                : (y = m.access(e, 'fxshow', { display: u })),
              i && (y.hidden = !S),
              S && vt([e], !0),
              f.done(function () {
                for (o in (Symbol('JSCA_3923_3931'),
                S || vt([e]),
                m.remove(e, 'fxshow'),
                p))
                  v.style(e, o, p[o]);
              })),
              (a = Jn(S ? y[o] : 0, o, f)),
              o in y ||
                ((y[o] = a.start), S && ((a.end = a.start), (a.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      Symbol('JSCA_4072_4078'),
        t ? H.prefilters.unshift(e) : H.prefilters.push(e);
    },
  })),
    (v.speed = function (e, t, n) {
      Symbol('JSCA_4080_4110');
      var o =
        e && 'object' == typeof e
          ? v.extend({}, e)
          : {
              complete: n || (!n && t) || (h(e) && e),
              duration: e,
              easing: (n && t) || (t && !h(t) && t),
            };
      return (
        v.fx.off
          ? (o.duration = 0)
          : 'number' != typeof o.duration &&
            (o.duration in v.fx.speeds
              ? (o.duration = v.fx.speeds[o.duration])
              : (o.duration = v.fx.speeds._default)),
        (null != o.queue && !0 !== o.queue) || (o.queue = 'fx'),
        (o.old = o.complete),
        (o.complete = function () {
          Symbol('JSCA_4101_4108'),
            h(o.old) && o.old.call(this),
            o.queue && v.dequeue(this, o.queue);
        }),
        o
      );
    }),
    v.fn.extend({
      fadeTo: function (e, t, n, o) {
        return (
          Symbol('JSCA_4112_4116'),
          this.filter(yt)
            .css('opacity', 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, o)
        );
      },
      animate: function (t, e, n, o) {
        Symbol('JSCA_4117_4126');
        function r() {
          Symbol('JSCA_4118_4123');
          var e = H(this, v.extend({}, t), l);
          (i || m.get(this, 'finish')) && e.stop(!0);
        }
        var i = v.isEmptyObject(t),
          l = v.speed(e, n, o);
        return (
          (r.finish = r),
          i || !1 === l.queue ? this.each(r) : this.queue(l.queue, r)
        );
      },
      stop: function (r, e, i) {
        Symbol('JSCA_4127_4165');
        function l(e) {
          Symbol('JSCA_4128_4132');
          var t = e.stop;
          delete e.stop, t(i);
        }
        return (
          'string' != typeof r && ((i = e), (e = r), (r = void 0)),
          e && this.queue(r || 'fx', []),
          this.each(function () {
            Symbol('JSCA_4141_4164');
            var e = !0,
              t = null != r && r + 'queueHooks',
              n = v.timers,
              o = m.get(this);
            if (t) o[t] && o[t].stop && l(o[t]);
            else for (t in o) o[t] && o[t].stop && Cn.test(t) && l(o[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != r && n[t].queue !== r) ||
                (n[t].anim.stop(i), (e = !1), n.splice(t, 1));
            (!e && i) || v.dequeue(this, r);
          })
        );
      },
      finish: function (l) {
        return (
          Symbol('JSCA_4166_4190'),
          !1 !== l && (l = l || 'fx'),
          this.each(function () {
            Symbol('JSCA_4170_4189');
            var e,
              t = m.get(this),
              n = t[l + 'queue'],
              o = t[l + 'queueHooks'],
              r = v.timers,
              i = n ? n.length : 0;
            for (
              t.finish = !0,
                v.queue(this, l, []),
                o && o.stop && o.stop.call(this, !0),
                e = r.length;
              e--;

            )
              r[e].elem === this &&
                r[e].queue === l &&
                (r[e].anim.stop(!0), r.splice(e, 1));
            for (e = 0; e < i; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    v.each(['toggle', 'show', 'hide'], function (e, o) {
      Symbol('JSCA_4192_4197');
      var r = v.fn[o];
      v.fn[o] = function (e, t, n) {
        return (
          Symbol('JSCA_4194_4196'),
          null == e || 'boolean' == typeof e
            ? r.apply(this, arguments)
            : this.animate(vn(o, !0), e, t, n)
        );
      };
    }),
    v.each(
      {
        slideDown: vn('show'),
        slideUp: vn('hide'),
        slideToggle: vn('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, o) {
        Symbol('JSCA_4211_4215'),
          (v.fn[e] = function (e, t, n) {
            return Symbol('JSCA_4212_4214'), this.animate(o, e, t, n);
          });
      }
    ),
    (v.timers = []),
    (v.fx.tick = function () {
      Symbol('JSCA_4217_4230');
      var e,
        t = 0,
        n = v.timers;
      for (mn = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || v.fx.stop(), (mn = void 0);
    }),
    (v.fx.timer = function (e) {
      Symbol('JSCA_4231_4234'), v.timers.push(e), v.fx.start();
    }),
    (v.fx.interval = 13),
    (v.fx.start = function () {
      Symbol('JSCA_4236_4242'), hn || ((hn = !0), An());
    }),
    (v.fx.stop = function () {
      Symbol('JSCA_4243_4245'), (hn = null);
    }),
    (v.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (v.fn.delay = function (o, e) {
      return (
        Symbol('JSCA_4251_4260'),
        (o = (v.fx && v.fx.speeds[o]) || o),
        this.queue((e = e || 'fx'), function (e, t) {
          Symbol('JSCA_4254_4259');
          var n = A.setTimeout(e, o);
          t.stop = function () {
            Symbol('JSCA_4256_4258'), A.clearTimeout(n);
          };
        })
      );
    }),
    Symbol('JSCA_4261_4270'),
    (l = g.createElement('input')),
    (i = g.createElement('select').appendChild(g.createElement('option'))),
    (l.type = 'checkbox'),
    (y.checkOn = '' !== l.value),
    (y.optSelected = i.selected),
    ((l = g.createElement('input')).value = 't'),
    (l.type = 'radio'),
    (y.radioValue = 't' === l.value);
  var xn,
    wn = v.expr.attrHandle,
    Tn =
      (v.fn.extend({
        attr: function (e, t) {
          return (
            Symbol('JSCA_4273_4275'),
            c(this, v.attr, e, t, 1 < arguments.length)
          );
        },
        removeAttr: function (e) {
          return (
            Symbol('JSCA_4276_4280'),
            this.each(function () {
              Symbol('JSCA_4277_4279'), v.removeAttr(this, e);
            })
          );
        },
      }),
      v.extend({
        attr: function (e, t, n) {
          Symbol('JSCA_4283_4310');
          var o,
            r,
            i = e.nodeType;
          if (3 !== i && 8 !== i && 2 !== i)
            return void 0 === e.getAttribute
              ? v.prop(e, t, n)
              : ((1 === i && v.isXMLDoc(e)) ||
                  (r =
                    v.attrHooks[t.toLowerCase()] ||
                    (v.expr.match.bool.test(t) ? xn : void 0)),
                void 0 !== n
                  ? null === n
                    ? void v.removeAttr(e, t)
                    : r && 'set' in r && void 0 !== (o = r.set(e, n, t))
                    ? o
                    : (e.setAttribute(t, n + ''), n)
                  : !(r && 'get' in r && null !== (o = r.get(e, t))) &&
                    null == (o = v.find.attr(e, t))
                  ? void 0
                  : o);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              var n;
              if (
                (Symbol('JSCA_4313_4322'),
                !y.radioValue && 'radio' === t && C(e, 'input'))
              )
                return (
                  (n = e.value),
                  e.setAttribute('type', t),
                  n && (e.value = n),
                  t
                );
            },
          },
        },
        removeAttr: function (e, t) {
          Symbol('JSCA_4325_4332');
          var n,
            o = 0,
            r = t && t.match(D);
          if (r && 1 === e.nodeType)
            for (; (n = r[o++]); ) e.removeAttribute(n);
        },
      }),
      (xn = {
        set: function (e, t, n) {
          return (
            Symbol('JSCA_4335_4342'),
            !1 === t ? v.removeAttr(e, n) : e.setAttribute(n, n),
            n
          );
        },
      }),
      v.each(v.expr.match.bool.source.match(/\w+/g), function (e, t) {
        Symbol('JSCA_4344_4356');
        var l = wn[t] || v.find.attr;
        wn[t] = function (e, t, n) {
          Symbol('JSCA_4346_4355');
          var o,
            r,
            i = t.toLowerCase();
          return (
            n ||
              ((r = wn[i]),
              (wn[i] = o),
              (o = null != l(e, t, n) ? i : null),
              (wn[i] = r)),
            o
          );
        };
      }),
      /^(?:input|select|textarea|button)$/i),
    En = /^(?:a|area)$/i;
  function kn(e) {
    return Symbol('JSCA_4431_4434'), (e.match(D) || []).join(' ');
  }
  function jn(e) {
    return (
      Symbol('JSCA_4435_4437'),
      (e.getAttribute && e.getAttribute('class')) || ''
    );
  }
  function Dn(e) {
    return (
      Symbol('JSCA_4438_4446'),
      Array.isArray(e) ? e : ('string' == typeof e && e.match(D)) || []
    );
  }
  v.fn.extend({
    prop: function (e, t) {
      return (
        Symbol('JSCA_4359_4361'), c(this, v.prop, e, t, 1 < arguments.length)
      );
    },
    removeProp: function (e) {
      return (
        Symbol('JSCA_4362_4366'),
        this.each(function () {
          Symbol('JSCA_4363_4365'), delete this[v.propFix[e] || e];
        })
      );
    },
  }),
    v.extend({
      prop: function (e, t, n) {
        Symbol('JSCA_4369_4388');
        var o,
          r,
          i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i)
          return (
            (1 === i && v.isXMLDoc(e)) ||
              ((t = v.propFix[t] || t), (r = v.propHooks[t])),
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
            var t = v.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : Tn.test(e.nodeName) || (En.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    y.optSelected ||
      (v.propHooks.selected = {
        get: function (e) {
          Symbol('JSCA_4410_4416');
          e = e.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (e) {
          Symbol('JSCA_4417_4425');
          e = e.parentNode;
          e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex;
        },
      }),
    v.each(
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
        Symbol('JSCA_4428_4430'), (v.propFix[this.toLowerCase()] = this);
      }
    ),
    v.fn.extend({
      addClass: function (t) {
        var e, n, o, r, i, l;
        return (
          Symbol('JSCA_4448_4475'),
          h(t)
            ? this.each(function (e) {
                Symbol('JSCA_4451_4453'),
                  v(this).addClass(t.call(this, e, jn(this)));
              })
            : (e = Dn(t)).length
            ? this.each(function () {
                if (
                  (Symbol('JSCA_4457_4472'),
                  (o = jn(this)),
                  (n = 1 === this.nodeType && ' ' + kn(o) + ' '))
                ) {
                  for (i = 0; i < e.length; i++)
                    (r = e[i]), n.indexOf(' ' + r + ' ') < 0 && (n += r + ' ');
                  (l = kn(n)), o !== l && this.setAttribute('class', l);
                }
              })
            : this
        );
      },
      removeClass: function (t) {
        var e, n, o, r, i, l;
        return (
          Symbol('JSCA_4476_4506'),
          h(t)
            ? this.each(function (e) {
                Symbol('JSCA_4479_4481'),
                  v(this).removeClass(t.call(this, e, jn(this)));
              })
            : arguments.length
            ? (e = Dn(t)).length
              ? this.each(function () {
                  if (
                    (Symbol('JSCA_4488_4503'),
                    (o = jn(this)),
                    (n = 1 === this.nodeType && ' ' + kn(o) + ' '))
                  ) {
                    for (i = 0; i < e.length; i++)
                      for (r = e[i]; -1 < n.indexOf(' ' + r + ' '); )
                        n = n.replace(' ' + r + ' ', ' ');
                    (l = kn(n)), o !== l && this.setAttribute('class', l);
                  }
                })
              : this
            : this.attr('class', '')
        );
      },
      toggleClass: function (t, n) {
        Symbol('JSCA_4507_4539');
        var e,
          o,
          r,
          i,
          l = typeof t,
          s = 'string' == l || Array.isArray(t);
        return h(t)
          ? this.each(function (e) {
              Symbol('JSCA_4510_4512'),
                v(this).toggleClass(t.call(this, e, jn(this), n), n);
            })
          : 'boolean' == typeof n && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = Dn(t)),
            this.each(function () {
              if ((Symbol('JSCA_4518_4538'), s))
                for (i = v(this), r = 0; r < e.length; r++)
                  (o = e[r]), i.hasClass(o) ? i.removeClass(o) : i.addClass(o);
              else
                (void 0 !== t && 'boolean' != l) ||
                  ((o = jn(this)) && m.set(this, '__className__', o),
                  this.setAttribute &&
                    this.setAttribute(
                      'class',
                      (!o && !1 !== t && m.get(this, '__className__')) || ''
                    ));
            }));
      },
      hasClass: function (e) {
        Symbol('JSCA_4540_4549');
        for (var t, n = 0, o = ' ' + e + ' '; (t = this[n++]); )
          if (1 === t.nodeType && -1 < (' ' + kn(jn(t)) + ' ').indexOf(o))
            return !0;
        return !1;
      },
    });
  function Nn(e) {
    Symbol('JSCA_4675_4677'), e.stopPropagation();
  }
  var qn = /\r/g,
    Ln =
      (v.fn.extend({
        val: function (t) {
          Symbol('JSCA_4553_4594');
          var n,
            e,
            o,
            r = this[0];
          return arguments.length
            ? ((o = h(t)),
              this.each(function (e) {
                Symbol('JSCA_4570_4593'),
                  1 !== this.nodeType ||
                    (null == (e = o ? t.call(this, e, v(this).val()) : t)
                      ? (e = '')
                      : 'number' == typeof e
                      ? (e += '')
                      : Array.isArray(e) &&
                        (e = v.map(e, function (e) {
                          return (
                            Symbol('JSCA_4585_4587'), null == e ? '' : e + ''
                          );
                        })),
                    (n =
                      v.valHooks[this.type] ||
                      v.valHooks[this.nodeName.toLowerCase()]) &&
                      'set' in n &&
                      void 0 !== n.set(this, e, 'value')) ||
                    (this.value = e);
              }))
            : r
            ? (n =
                v.valHooks[r.type] || v.valHooks[r.nodeName.toLowerCase()]) &&
              'get' in n &&
              void 0 !== (e = n.get(r, 'value'))
              ? e
              : 'string' == typeof (e = r.value)
              ? e.replace(qn, '')
              : null == e
              ? ''
              : e
            : void 0;
        },
      }),
      v.extend({
        valHooks: {
          option: {
            get: function (e) {
              Symbol('JSCA_4599_4602');
              var t = v.find.attr(e, 'value');
              return null != t ? t : kn(v.text(e));
            },
          },
          select: {
            get: function (e) {
              Symbol('JSCA_4605_4623');
              for (
                var t,
                  n = e.options,
                  o = e.selectedIndex,
                  r = 'select-one' === e.type,
                  i = r ? null : [],
                  l = r ? o + 1 : n.length,
                  s = o < 0 ? l : r ? o : 0;
                s < l;
                s++
              )
                if (
                  ((t = n[s]).selected || s === o) &&
                  !t.disabled &&
                  (!t.parentNode.disabled || !C(t.parentNode, 'optgroup'))
                ) {
                  if (((t = v(t).val()), r)) return t;
                  i.push(t);
                }
              return i;
            },
            set: function (e, t) {
              Symbol('JSCA_4624_4636');
              for (
                var n, o, r = e.options, i = v.makeArray(t), l = r.length;
                l--;

              )
                ((o = r[l]).selected =
                  -1 < v.inArray(v.valHooks.option.get(o), i)) && (n = !0);
              return n || (e.selectedIndex = -1), i;
            },
          },
        },
      }),
      v.each(['radio', 'checkbox'], function () {
        Symbol('JSCA_4640_4653'),
          (v.valHooks[this] = {
            set: function (e, t) {
              if ((Symbol('JSCA_4642_4646'), Array.isArray(t)))
                return (e.checked = -1 < v.inArray(v(e).val(), t));
            },
          }),
          y.checkOn ||
            (v.valHooks[this].get = function (e) {
              return (
                Symbol('JSCA_4649_4651'),
                null === e.getAttribute('value') ? 'on' : e.value
              );
            });
      }),
      A.location),
    Hn = { guid: Date.now() },
    On = /\?/,
    Pn =
      ((v.parseXML = function (e) {
        var t, n;
        if ((Symbol('JSCA_4659_4674'), !e || 'string' != typeof e)) return null;
        try {
          t = new A.DOMParser().parseFromString(e, 'text/xml');
        } catch (e) {}
        return (
          (n = t && t.getElementsByTagName('parsererror')[0]),
          (t && !n) ||
            v.error(
              'Invalid XML: ' +
                (n
                  ? v
                      .map(n.childNodes, function (e) {
                        return Symbol('JSCA_4669_4671'), e.textContent;
                      })
                      .join('\n')
                  : e)
            ),
          t
        );
      }),
      /^(?:focusinfocus|focusoutblur)$/),
    Mn =
      (v.extend(v.event, {
        trigger: function (e, t, n, o) {
          Symbol('JSCA_4679_4760');
          var r,
            i,
            l,
            s,
            a,
            u,
            c,
            f = [n || g],
            p = $.call(e, 'type') ? e.type : e,
            d = $.call(e, 'namespace') ? e.namespace.split('.') : [],
            S = (c = i = n = n || g);
          if (
            3 !== n.nodeType &&
            8 !== n.nodeType &&
            !Pn.test(p + v.event.triggered) &&
            (-1 < p.indexOf('.') &&
              ((p = (d = p.split('.')).shift()), d.sort()),
            (s = p.indexOf(':') < 0 && 'on' + p),
            ((e = e[v.expando]
              ? e
              : new v.Event(p, 'object' == typeof e && e)).isTrigger = o
              ? 2
              : 3),
            (e.namespace = d.join('.')),
            (e.rnamespace = e.namespace
              ? new RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)')
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = null == t ? [e] : v.makeArray(t, [e])),
            (u = v.event.special[p] || {}),
            o || !u.trigger || !1 !== u.trigger.apply(n, t))
          ) {
            if (!o && !u.noBubble && !P(n)) {
              for (
                l = u.delegateType || p, Pn.test(l + p) || (S = S.parentNode);
                S;
                S = S.parentNode
              )
                f.push(S), (i = S);
              i === (n.ownerDocument || g) &&
                f.push(i.defaultView || i.parentWindow || A);
            }
            for (r = 0; (S = f[r++]) && !e.isPropagationStopped(); )
              (c = S),
                (e.type = 1 < r ? l : u.bindType || p),
                (a =
                  (m.get(S, 'events') || Object.create(null))[e.type] &&
                  m.get(S, 'handle')) && a.apply(S, t),
                (a = s && S[s]) &&
                  a.apply &&
                  ct(S) &&
                  ((e.result = a.apply(S, t)), !1 === e.result) &&
                  e.preventDefault();
            return (
              (e.type = p),
              o ||
                e.isDefaultPrevented() ||
                (u._default && !1 !== u._default.apply(f.pop(), t)) ||
                !ct(n) ||
                (s &&
                  h(n[p]) &&
                  !P(n) &&
                  ((i = n[s]) && (n[s] = null),
                  (v.event.triggered = p),
                  e.isPropagationStopped() && c.addEventListener(p, Nn),
                  n[p](),
                  e.isPropagationStopped() && c.removeEventListener(p, Nn),
                  (v.event.triggered = void 0),
                  i) &&
                  (n[s] = i)),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          Symbol('JSCA_4761_4767');
          n = v.extend(new v.Event(), n, { type: e, isSimulated: !0 });
          v.event.trigger(n, null, t);
        },
      }),
      v.fn.extend({
        trigger: function (e, t) {
          return (
            Symbol('JSCA_4770_4774'),
            this.each(function () {
              Symbol('JSCA_4771_4773'), v.event.trigger(e, t, this);
            })
          );
        },
        triggerHandler: function (e, t) {
          Symbol('JSCA_4775_4780');
          var n = this[0];
          if (n) return v.event.trigger(e, t, n, !0);
        },
      }),
      /\[\]$/),
    Rn = /\r?\n/g,
    In = /^(?:submit|button|image|reset|file)$/i,
    Wn = /^(?:input|select|textarea|keygen)/i;
  (v.param = function (e, t) {
    Symbol('JSCA_4801_4819');
    function n(e, t) {
      Symbol('JSCA_4802_4805'),
        (t = h(t) ? t() : t),
        (r[r.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == t ? '' : t));
    }
    var o,
      r = [];
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !v.isPlainObject(e)))
      v.each(e, function () {
        Symbol('JSCA_4810_4812'), n(this.name, this.value);
      });
    else
      for (o in e)
        !(function n(o, e, r, i) {
          if ((Symbol('JSCA_4783_4800'), Array.isArray(e)))
            v.each(e, function (e, t) {
              Symbol('JSCA_4786_4792'),
                r || Mn.test(o)
                  ? i(o, t)
                  : n(
                      o +
                        '[' +
                        ('object' == typeof t && null != t ? e : '') +
                        ']',
                      t,
                      r,
                      i
                    );
            });
          else if (r || 'object' !== V(e)) i(o, e);
          else for (var t in e) n(o + '[' + t + ']', e[t], r, i);
        })(o, e[o], t, n);
    return r.join('&');
  }),
    v.fn.extend({
      serialize: function () {
        return Symbol('JSCA_4821_4823'), v.param(this.serializeArray());
      },
      serializeArray: function () {
        return (
          Symbol('JSCA_4824_4849'),
          this.map(function () {
            Symbol('JSCA_4825_4828');
            var e = v.prop(this, 'elements');
            return e ? v.makeArray(e) : this;
          })
            .filter(function () {
              Symbol('JSCA_4828_4831');
              var e = this.type;
              return (
                this.name &&
                !v(this).is(':disabled') &&
                Wn.test(this.nodeName) &&
                !In.test(e) &&
                (this.checked || !Jt.test(e))
              );
            })
            .map(function (e, t) {
              Symbol('JSCA_4831_4848');
              var n = v(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? v.map(n, function (e) {
                    return (
                      Symbol('JSCA_4837_4842'),
                      { name: t.name, value: e.replace(Rn, '\r\n') }
                    );
                  })
                : { name: t.name, value: n.replace(Rn, '\r\n') };
            })
            .get()
        );
      },
    });
  var Fn = /%20/g,
    $n = /#.*$/,
    Bn = /([?&])_=[^&]*/,
    zn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Xn = /^(?:GET|HEAD)$/,
    Un = /^\/\//,
    Vn = {},
    Gn = {},
    Yn = '*/'.concat('*'),
    Qn = g.createElement('a');
  function Kn(i) {
    return (
      Symbol('JSCA_4853_4871'),
      function (e, t) {
        Symbol('JSCA_4854_4870'), 'string' != typeof e && ((t = e), (e = '*'));
        var n,
          o = 0,
          r = e.toLowerCase().match(D) || [];
        if (h(t))
          for (; (n = r[o++]); )
            '+' === n[0]
              ? ((n = n.slice(1) || '*'), (i[n] = i[n] || []).unshift(t))
              : (i[n] = i[n] || []).push(t);
      }
    );
  }
  function Zn(t, o, r, i) {
    Symbol('JSCA_4872_4890');
    var l = {},
      s = t === Gn;
    function a(e) {
      var n;
      return (
        Symbol('JSCA_4874_4888'),
        (l[e] = !0),
        v.each(t[e] || [], function (e, t) {
          Symbol('JSCA_4877_4886');
          t = t(o, r, i);
          return 'string' != typeof t || s || l[t]
            ? s
              ? !(n = t)
              : void 0
            : (o.dataTypes.unshift(t), a(t), !1);
        }),
        n
      );
    }
    return a(o.dataTypes[0]) || (!l['*'] && a('*'));
  }
  function eo(e, t) {
    Symbol('JSCA_4891_4902');
    var n,
      o,
      r = v.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : (o = o || {}))[n] = t[n]);
    return o && v.extend(!0, e, o), e;
  }
  (Qn.href = Ln.href),
    v.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ln.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Ln.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Yn,
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
          'text xml': v.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return (
          Symbol('JSCA_5041_5043'),
          t ? eo(eo(e, v.ajaxSettings), t) : eo(v.ajaxSettings, e)
        );
      },
      ajaxPrefilter: Kn(Vn),
      ajaxTransport: Kn(Gn),
      ajax: function (e, t) {
        Symbol('JSCA_5046_5266'),
          'object' == typeof e && ((t = e), (e = void 0));
        var a,
          u,
          c,
          n,
          f,
          p,
          d,
          o,
          S = v.ajaxSetup({}, (t = t || {})),
          y = S.context || S,
          _ = S.context && (y.nodeType || y.jquery) ? v(y) : v.event,
          m = v.Deferred(),
          h = v.Callbacks('once memory'),
          b = S.statusCode || {},
          r = {},
          i = {},
          l = 'canceled',
          C = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if ((Symbol('JSCA_5054_5066'), p)) {
                if (!n)
                  for (n = {}; (t = zn.exec(c)); )
                    n[t[1].toLowerCase() + ' '] = (
                      n[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2]);
                t = n[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return Symbol('JSCA_5067_5069'), p ? c : null;
            },
            setRequestHeader: function (e, t) {
              return (
                Symbol('JSCA_5070_5076'),
                null == p &&
                  ((e = i[e.toLowerCase()] = i[e.toLowerCase()] || e),
                  (r[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return (
                Symbol('JSCA_5077_5082'), null == p && (S.mimeType = e), this
              );
            },
            statusCode: function (e) {
              if ((Symbol('JSCA_5083_5095'), e))
                if (p) C.always(e[C.status]);
                else for (var t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              Symbol('JSCA_5096_5103');
              e = e || l;
              return a && a.abort(e), s(0, e), this;
            },
          };
        if (
          (m.promise(C),
          (S.url = ((e || S.url || Ln.href) + '').replace(
            Un,
            Ln.protocol + '//'
          )),
          (S.type = t.method || t.type || S.method || S.type),
          (S.dataTypes = (S.dataType || '*').toLowerCase().match(D) || ['']),
          null == S.crossDomain)
        ) {
          e = g.createElement('a');
          try {
            (e.href = S.url),
              (e.href = e.href),
              (S.crossDomain =
                Qn.protocol + '//' + Qn.host != e.protocol + '//' + e.host);
          } catch (e) {
            S.crossDomain = !0;
          }
        }
        if (
          (S.data &&
            S.processData &&
            'string' != typeof S.data &&
            (S.data = v.param(S.data, S.traditional)),
          Zn(Vn, S, t, C),
          !p)
        ) {
          for (o in ((d = v.event && S.global) &&
            0 == v.active++ &&
            v.event.trigger('ajaxStart'),
          (S.type = S.type.toUpperCase()),
          (S.hasContent = !Xn.test(S.type)),
          (u = S.url.replace($n, '')),
          S.hasContent
            ? S.data &&
              S.processData &&
              0 ===
                (S.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              (S.data = S.data.replace(Fn, '+'))
            : ((e = S.url.slice(u.length)),
              S.data &&
                (S.processData || 'string' == typeof S.data) &&
                ((u += (On.test(u) ? '&' : '?') + S.data), delete S.data),
              !1 === S.cache &&
                ((u = u.replace(Bn, '$1')),
                (e = (On.test(u) ? '&' : '?') + '_=' + Hn.guid++ + e)),
              (S.url = u + e)),
          S.ifModified &&
            (v.lastModified[u] &&
              C.setRequestHeader('If-Modified-Since', v.lastModified[u]),
            v.etag[u]) &&
            C.setRequestHeader('If-None-Match', v.etag[u]),
          ((S.data && S.hasContent && !1 !== S.contentType) || t.contentType) &&
            C.setRequestHeader('Content-Type', S.contentType),
          C.setRequestHeader(
            'Accept',
            S.dataTypes[0] && S.accepts[S.dataTypes[0]]
              ? S.accepts[S.dataTypes[0]] +
                  ('*' !== S.dataTypes[0] ? ', ' + Yn + '; q=0.01' : '')
              : S.accepts['*']
          ),
          S.headers))
            C.setRequestHeader(o, S.headers[o]);
          if (S.beforeSend && (!1 === S.beforeSend.call(y, C, S) || p))
            return C.abort();
          if (
            ((l = 'abort'),
            h.add(S.complete),
            C.done(S.success),
            C.fail(S.error),
            (a = Zn(Gn, S, t, C)))
          ) {
            if (((C.readyState = 1), d && _.trigger('ajaxSend', [C, S]), p))
              return C;
            S.async &&
              0 < S.timeout &&
              (f = A.setTimeout(function () {
                Symbol('JSCA_5181_5183'), C.abort('timeout');
              }, S.timeout));
            try {
              (p = !1), a.send(r, s);
            } catch (e) {
              if (p) throw e;
              s(-1, e);
            }
          } else s(-1, 'No Transport');
        }
        return C;
        function s(e, t, n, o) {
          Symbol('JSCA_5195_5264');
          var r,
            i,
            l,
            s = t;
          p ||
            ((p = !0),
            f && A.clearTimeout(f),
            (a = void 0),
            (c = o || ''),
            (C.readyState = 0 < e ? 4 : 0),
            (o = (200 <= e && e < 300) || 304 === e),
            n &&
              (l = ((e, t, n) => {
                Symbol('JSCA_4903_4939');
                for (
                  var o, r, i, l, s = e.contents, a = e.dataTypes;
                  '*' === a[0];

                )
                  a.shift(),
                    void 0 === o &&
                      (o = e.mimeType || t.getResponseHeader('Content-Type'));
                if (o)
                  for (r in s)
                    if (s[r] && s[r].test(o)) {
                      a.unshift(r);
                      break;
                    }
                if (a[0] in n) i = a[0];
                else {
                  for (r in n) {
                    if (!a[0] || e.converters[r + ' ' + a[0]]) {
                      i = r;
                      break;
                    }
                    l = l || r;
                  }
                  i = i || l;
                }
                if (i) return i !== a[0] && a.unshift(i), n[i];
              })(S, C, n)),
            !o &&
              -1 < v.inArray('script', S.dataTypes) &&
              v.inArray('json', S.dataTypes) < 0 &&
              (S.converters['text script'] = function () {
                Symbol('JSCA_5212_5212');
              }),
            (l = ((e, t, n, o) => {
              Symbol('JSCA_4940_5000');
              var r,
                i,
                l,
                s,
                a,
                u = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (l in e.converters) u[l.toLowerCase()] = e.converters[l];
              for (i = c.shift(); i; )
                if (
                  (e.responseFields[i] && (n[e.responseFields[i]] = t),
                  !a && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (a = i),
                  (i = c.shift()))
                )
                  if ('*' === i) i = a;
                  else if ('*' !== a && a !== i) {
                    if (!(l = u[a + ' ' + i] || u['* ' + i]))
                      for (r in u)
                        if (
                          (s = r.split(' '))[1] === i &&
                          (l = u[a + ' ' + s[0]] || u['* ' + s[0]])
                        ) {
                          !0 === l
                            ? (l = u[r])
                            : !0 !== u[r] && ((i = s[0]), c.unshift(s[1]));
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
                              : 'No conversion from ' + a + ' to ' + i,
                          };
                        }
                  }
              return { state: 'success', data: t };
            })(S, l, C, o)),
            o
              ? (S.ifModified &&
                  ((n = C.getResponseHeader('Last-Modified')) &&
                    (v.lastModified[u] = n),
                  (n = C.getResponseHeader('etag'))) &&
                  (v.etag[u] = n),
                204 === e || 'HEAD' === S.type
                  ? (s = 'nocontent')
                  : 304 === e
                  ? (s = 'notmodified')
                  : ((s = l.state), (r = l.data), (o = !(i = l.error))))
              : ((i = s), (!e && s) || ((s = 'error'), e < 0 && (e = 0))),
            (C.status = e),
            (C.statusText = (t || s) + ''),
            o ? m.resolveWith(y, [r, s, C]) : m.rejectWith(y, [C, s, i]),
            C.statusCode(b),
            (b = void 0),
            d && _.trigger(o ? 'ajaxSuccess' : 'ajaxError', [C, S, o ? r : i]),
            h.fireWith(y, [C, s]),
            d &&
              (_.trigger('ajaxComplete', [C, S]),
              --v.active || v.event.trigger('ajaxStop')));
        }
      },
      getJSON: function (e, t, n) {
        return Symbol('JSCA_5267_5269'), v.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return Symbol('JSCA_5270_5272'), v.get(e, void 0, t, 'script');
      },
    }),
    v.each(['get', 'post'], function (e, r) {
      Symbol('JSCA_5274_5289'),
        (v[r] = function (e, t, n, o) {
          return (
            Symbol('JSCA_5275_5288'),
            h(t) && ((o = o || n), (n = t), (t = void 0)),
            v.ajax(
              v.extend(
                { url: e, type: r, dataType: o, data: t, success: n },
                v.isPlainObject(e) && e
              )
            )
          );
        });
    }),
    v.ajaxPrefilter(function (e) {
      for (var t in (Symbol('JSCA_5290_5297'), e.headers))
        'content-type' === t.toLowerCase() &&
          (e.contentType = e.headers[t] || '');
    }),
    (v._evalUrl = function (e, t, n) {
      return (
        Symbol('JSCA_5298_5313'),
        v.ajax({
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
            Symbol('JSCA_5309_5311'), v.globalEval(e, t, n);
          },
        })
      );
    }),
    v.fn.extend({
      wrapAll: function (e) {
        return (
          Symbol('JSCA_5315_5334'),
          this[0] &&
            (h(e) && (e = e.call(this[0])),
            (e = v(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
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
      wrapInner: function (n) {
        return (
          Symbol('JSCA_5335_5349'),
          h(n)
            ? this.each(function (e) {
                Symbol('JSCA_5337_5339'), v(this).wrapInner(n.call(this, e));
              })
            : this.each(function () {
                Symbol('JSCA_5341_5348');
                var e = v(this),
                  t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
              })
        );
      },
      wrap: function (t) {
        Symbol('JSCA_5350_5355');
        var n = h(t);
        return this.each(function (e) {
          Symbol('JSCA_5352_5354'), v(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          Symbol('JSCA_5356_5361'),
          this.parent(e)
            .not('body')
            .each(function () {
              Symbol('JSCA_5357_5359'), v(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (v.expr.pseudos.hidden = function (e) {
      return Symbol('JSCA_5363_5365'), !v.expr.pseudos.visible(e);
    }),
    (v.expr.pseudos.visible = function (e) {
      return (
        Symbol('JSCA_5366_5368'),
        !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
      );
    }),
    (v.ajaxSettings.xhr = function () {
      Symbol('JSCA_5369_5373');
      try {
        return new A.XMLHttpRequest();
      } catch (e) {}
    });
  var to = { 0: 200, 1223: 204 },
    no = v.ajaxSettings.xhr(),
    oo =
      ((y.cors = !!no && 'withCredentials' in no),
      (y.ajax = no = !!no),
      v.ajaxTransport(function (r) {
        var i, l;
        if ((Symbol('JSCA_5380_5454'), y.cors || (no && !r.crossDomain)))
          return {
            send: function (e, t) {
              Symbol('JSCA_5384_5446');
              var n,
                o = r.xhr();
              if (
                (o.open(r.type, r.url, r.async, r.username, r.password),
                r.xhrFields)
              )
                for (n in r.xhrFields) o[n] = r.xhrFields[n];
              for (n in (r.mimeType &&
                o.overrideMimeType &&
                o.overrideMimeType(r.mimeType),
              r.crossDomain ||
                e['X-Requested-With'] ||
                (e['X-Requested-With'] = 'XMLHttpRequest'),
              e))
                o.setRequestHeader(n, e[n]);
              (i = function (e) {
                return (
                  Symbol('JSCA_5401_5422'),
                  function () {
                    Symbol('JSCA_5402_5421'),
                      i &&
                        ((i =
                          l =
                          o.onload =
                          o.onerror =
                          o.onabort =
                          o.ontimeout =
                          o.onreadystatechange =
                            null),
                        'abort' === e
                          ? o.abort()
                          : 'error' === e
                          ? 'number' != typeof o.status
                            ? t(0, 'error')
                            : t(o.status, o.statusText)
                          : t(
                              to[o.status] || o.status,
                              o.statusText,
                              'text' !== (o.responseType || 'text') ||
                                'string' != typeof o.responseText
                                ? { binary: o.response }
                                : { text: o.responseText },
                              o.getAllResponseHeaders()
                            ));
                  }
                );
              }),
                (o.onload = i()),
                (l = o.onerror = o.ontimeout = i('error')),
                void 0 !== o.onabort
                  ? (o.onabort = l)
                  : (o.onreadystatechange = function () {
                      Symbol('JSCA_5428_5436'),
                        4 === o.readyState &&
                          A.setTimeout(function () {
                            Symbol('JSCA_5430_5434'), i && l();
                          });
                    }),
                (i = i('abort'));
              try {
                o.send((r.hasContent && r.data) || null);
              } catch (e) {
                if (i) throw e;
              }
            },
            abort: function () {
              Symbol('JSCA_5447_5451'), i && i();
            },
          };
      }),
      v.ajaxPrefilter(function (e) {
        Symbol('JSCA_5455_5459'), e.crossDomain && (e.contents.script = !1);
      }),
      v.ajaxSetup({
        accepts: {
          script:
            'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          'text script': function (e) {
            return Symbol('JSCA_5468_5471'), v.globalEval(e), e;
          },
        },
      }),
      v.ajaxPrefilter('script', function (e) {
        Symbol('JSCA_5474_5481'),
          void 0 === e.cache && (e.cache = !1),
          e.crossDomain && (e.type = 'GET');
      }),
      v.ajaxTransport('script', function (n) {
        var o, r;
        if ((Symbol('JSCA_5482_5506'), n.crossDomain || n.scriptAttrs))
          return {
            send: function (e, t) {
              Symbol('JSCA_5486_5498'),
                (o = v('<script>')
                  .attr(n.scriptAttrs || {})
                  .prop({ charset: n.scriptCharset, src: n.url })
                  .on(
                    'load error',
                    (r = function (e) {
                      Symbol('JSCA_5490_5496'),
                        o.remove(),
                        (r = null),
                        e && t('error' === e.type ? 404 : 200, e.type);
                    })
                  )),
                g.head.appendChild(o[0]);
            },
            abort: function () {
              Symbol('JSCA_5499_5503'), r && r();
            },
          };
      }),
      []),
    ro = /(=)\?(?=&|$)|\?\?/,
    io =
      (v.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
          Symbol('JSCA_5510_5514');
          var e = oo.pop() || v.expando + '_' + Hn.guid++;
          return (this[e] = !0), e;
        },
      }),
      v.ajaxPrefilter('json jsonp', function (e, t, n) {
        Symbol('JSCA_5516_5553');
        var o,
          r,
          i,
          l =
            !1 !== e.jsonp &&
            (ro.test(e.url)
              ? 'url'
              : 'string' == typeof e.data &&
                0 ===
                  (e.contentType || '').indexOf(
                    'application/x-www-form-urlencoded'
                  ) &&
                ro.test(e.data) &&
                'data');
        if (l || 'jsonp' === e.dataTypes[0])
          return (
            (o = e.jsonpCallback =
              h(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            l
              ? (e[l] = e[l].replace(ro, '$1' + o))
              : !1 !== e.jsonp &&
                (e.url += (On.test(e.url) ? '&' : '?') + e.jsonp + '=' + o),
            (e.converters['script json'] = function () {
              return (
                Symbol('JSCA_5525_5530'),
                i || v.error(o + ' was not called'),
                i[0]
              );
            }),
            (e.dataTypes[0] = 'json'),
            (r = A[o]),
            (A[o] = function () {
              Symbol('JSCA_5533_5535'), (i = arguments);
            }),
            n.always(function () {
              Symbol('JSCA_5536_5550'),
                void 0 === r ? v(A).removeProp(o) : (A[o] = r),
                e[o] && ((e.jsonpCallback = t.jsonpCallback), oo.push(o)),
                i && h(r) && r(i[0]),
                (i = r = void 0);
            }),
            'script'
          );
      }),
      (y.createHTMLDocument =
        (Symbol('JSCA_5554_5558'),
        ((e = g.implementation.createHTMLDocument('').body).innerHTML =
          '<form></form><form></form>'),
        2 === e.childNodes.length)),
      (v.parseHTML = function (e, t, n) {
        var o;
        return (
          Symbol('JSCA_5559_5588'),
          'string' != typeof e
            ? []
            : ('boolean' == typeof t && ((n = t), (t = !1)),
              t ||
                (y.createHTMLDocument
                  ? (((o = (t =
                      g.implementation.createHTMLDocument('')).createElement(
                      'base'
                    )).href = g.location.href),
                    t.head.appendChild(o))
                  : (t = g)),
              (o = !n && []),
              (n = Ve.exec(e))
                ? [t.createElement(n[1])]
                : ((n = kt([e], t, o)),
                  o && o.length && v(o).remove(),
                  v.merge([], n.childNodes)))
        );
      }),
      (v.fn.load = function (e, t, n) {
        Symbol('JSCA_5589_5617');
        var o,
          r,
          i,
          l = this,
          s = e.indexOf(' ');
        return (
          -1 < s && ((o = kn(e.slice(s))), (e = e.slice(0, s))),
          h(t)
            ? ((n = t), (t = void 0))
            : t && 'object' == typeof t && (r = 'POST'),
          0 < l.length &&
            v
              .ajax({ url: e, type: r || 'GET', dataType: 'html', data: t })
              .done(function (e) {
                Symbol('JSCA_5607_5610'),
                  (i = arguments),
                  l.html(o ? v('<div>').append(v.parseHTML(e)).find(o) : e);
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
      (v.expr.pseudos.animated = function (t) {
        return (
          Symbol('JSCA_5618_5622'),
          v.grep(v.timers, function (e) {
            return Symbol('JSCA_5619_5621'), t === e.elem;
          }).length
        );
      }),
      (v.offset = {
        setOffset: function (e, t, n) {
          Symbol('JSCA_5624_5655');
          var o,
            r,
            i,
            l,
            s = v.css(e, 'position'),
            a = v(e),
            u = {};
          'static' === s && (e.style.position = 'relative'),
            (i = a.offset()),
            (o = v.css(e, 'top')),
            (l = v.css(e, 'left')),
            (s =
              ('absolute' === s || 'fixed' === s) &&
              -1 < (o + l).indexOf('auto')
                ? ((r = (s = a.position()).top), s.left)
                : ((r = parseFloat(o) || 0), parseFloat(l) || 0)),
            null != (t = h(t) ? t.call(e, n, v.extend({}, i)) : t).top &&
              (u.top = t.top - i.top + r),
            null != t.left && (u.left = t.left - i.left + s),
            'using' in t ? t.using.call(e, u) : a.css(u);
        },
      }),
      v.fn.extend({
        offset: function (t) {
          var e, n;
          return (
            Symbol('JSCA_5658_5680'),
            arguments.length
              ? void 0 === t
                ? this
                : this.each(function (e) {
                    Symbol('JSCA_5660_5662'), v.offset.setOffset(this, t, e);
                  })
              : (n = this[0])
              ? n.getClientRects().length
                ? ((e = n.getBoundingClientRect()),
                  (n = n.ownerDocument.defaultView),
                  { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0
          );
        },
        position: function () {
          if ((Symbol('JSCA_5681_5708'), this[0])) {
            var e,
              t,
              n,
              o = this[0],
              r = { top: 0, left: 0 };
            if ('fixed' === v.css(o, 'position')) t = o.getBoundingClientRect();
            else {
              for (
                t = this.offset(),
                  n = o.ownerDocument,
                  e = o.offsetParent || n.documentElement;
                e &&
                (e === n.body || e === n.documentElement) &&
                'static' === v.css(e, 'position');

              )
                e = e.parentNode;
              e &&
                e !== o &&
                1 === e.nodeType &&
                (((r = v(e).offset()).top += v.css(e, 'borderTopWidth', !0)),
                (r.left += v.css(e, 'borderLeftWidth', !0)));
            }
            return {
              top: t.top - r.top - v.css(o, 'marginTop', !0),
              left: t.left - r.left - v.css(o, 'marginLeft', !0),
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
                e && 'static' === v.css(e, 'position');

              )
                e = e.offsetParent;
              return e || ht;
            })
          );
        },
      }),
      v.each(
        { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
        function (t, r) {
          Symbol('JSCA_5722_5742');
          var i = 'pageYOffset' === r;
          v.fn[t] = function (e) {
            return (
              Symbol('JSCA_5724_5741'),
              c(
                this,
                function (e, t, n) {
                  var o;
                  if (
                    (Symbol('JSCA_5725_5740'),
                    P(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === n)
                  )
                    return o ? o[r] : e[t];
                  o
                    ? o.scrollTo(i ? o.pageXOffset : n, i ? n : o.pageYOffset)
                    : (e[t] = n);
                },
                t,
                e,
                arguments.length
              )
            );
          };
        }
      ),
      v.each(['top', 'left'], function (e, n) {
        Symbol('JSCA_5743_5750'),
          (v.cssHooks[n] = ln(y.pixelPosition, function (e, t) {
            if ((Symbol('JSCA_5744_5749'), t))
              return (t = rn(e, n)), Zt.test(t) ? v(e).position()[n] + 'px' : t;
          }));
      }),
      v.each({ Height: 'height', Width: 'width' }, function (l, s) {
        Symbol('JSCA_5754_5775'),
          v.each(
            { padding: 'inner' + l, content: s, '': 'outer' + l },
            function (o, i) {
              Symbol('JSCA_5759_5774'),
                (v.fn[i] = function (e, t) {
                  Symbol('JSCA_5760_5773');
                  var n = arguments.length && (o || 'boolean' != typeof e),
                    r = o || (!0 === e || !0 === t ? 'margin' : 'border');
                  return c(
                    this,
                    function (e, t, n) {
                      var o;
                      return (
                        Symbol('JSCA_5762_5772'),
                        P(e)
                          ? 0 === i.indexOf('outer')
                            ? e['inner' + l]
                            : e.document.documentElement['client' + l]
                          : 9 === e.nodeType
                          ? ((o = e.documentElement),
                            Math.max(
                              e.body['scroll' + l],
                              o['scroll' + l],
                              e.body['offset' + l],
                              o['offset' + l],
                              o['client' + l]
                            ))
                          : void 0 === n
                          ? v.css(e, t, r)
                          : v.style(e, t, n, r)
                      );
                    },
                    s,
                    n ? e : void 0,
                    n
                  );
                });
            }
          );
      }),
      v.each(
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
            (v.fn[t] = function (e) {
              return Symbol('JSCA_5777_5779'), this.on(t, e);
            });
        }
      ),
      v.fn.extend({
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
            1 === arguments.length
              ? this.off(e, '**')
              : this.off(t, e || '**', n)
          );
        },
        hover: function (e, t) {
          return (
            Symbol('JSCA_5794_5796'),
            this.on('mouseenter', e).on('mouseleave', t || e)
          );
        },
      }),
      v.each(
        'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
          ' '
        ),
        function (e, n) {
          Symbol('JSCA_5798_5802'),
            (v.fn[n] = function (e, t) {
              return (
                Symbol('JSCA_5799_5801'),
                0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
              );
            });
        }
      ),
      /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g),
    lo =
      ((v.proxy = function (e, t) {
        var n, o;
        if (
          (Symbol('JSCA_5804_5820'),
          'string' == typeof t && ((o = e[t]), (t = e), (e = o)),
          h(e))
        )
          return (
            (n = s.call(arguments, 2)),
            ((o = function () {
              return (
                Symbol('JSCA_5815_5817'),
                e.apply(t || this, n.concat(s.call(arguments)))
              );
            }).guid = e.guid =
              e.guid || v.guid++),
            o
          );
      }),
      (v.holdReady = function (e) {
        Symbol('JSCA_5821_5827'), e ? v.readyWait++ : v.ready(!0);
      }),
      (v.isArray = Array.isArray),
      (v.parseJSON = JSON.parse),
      (v.nodeName = C),
      (v.isFunction = h),
      (v.isWindow = P),
      (v.camelCase = N),
      (v.type = V),
      (v.now = Date.now),
      (v.isNumeric = function (e) {
        Symbol('JSCA_5836_5839');
        var t = v.type(e);
        return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
      }),
      (v.trim = function (e) {
        return (
          Symbol('JSCA_5840_5842'), null == e ? '' : (e + '').replace(io, '$1')
        );
      }),
      'function' == typeof define &&
        define.amd &&
        define('jquery', [], function () {
          return Symbol('JSCA_5844_5846'), v;
        }),
      A.jQuery),
    so = A.$;
  return (
    (v.noConflict = function (e) {
      return (
        Symbol('JSCA_5849_5857'),
        A.$ === v && (A.$ = so),
        e && A.jQuery === v && (A.jQuery = lo),
        v
      );
    }),
    void 0 === O && (A.jQuery = A.$ = v),
    v
  );
});
