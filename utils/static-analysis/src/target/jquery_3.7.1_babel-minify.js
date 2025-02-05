(function (e, t) {
  Symbol('JSCA_1_13'),
    'use strict',
    'object' == typeof module && 'object' == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if ((Symbol('JSCA_4_9'), !e.document))
                throw new Error('jQuery requires a window with a document');
              return t(e);
            })
      : t(e);
})('undefined' == typeof window ? this : window, function (e, t) {
  var n = Math.ceil,
    a = Math.max;
  function o(e, t, n) {
    Symbol('JSCA_44_57'), (n = n || ye);
    var a,
      o,
      s = n.createElement('script');
    if (((s.text = e), t))
      for (a in xe)
        (o = t[a] || (t.getAttribute && t.getAttribute(a))),
          o && s.setAttribute(a, o);
    n.head.appendChild(s).parentNode.removeChild(s);
  }
  function s(e) {
    return (
      Symbol('JSCA_58_63'),
      null == e
        ? e + ''
        : 'object' == typeof e || 'function' == typeof e
        ? Ce[Se.call(e)] || 'object'
        : typeof e
    );
  }
  function r(e) {
    Symbol('JSCA_295_301');
    var t = !!e && 'length' in e && e.length,
      n = s(e);
    return (
      !(fe(e) || Je(e)) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    );
  }
  function d(e, t) {
    return (
      Symbol('JSCA_302_304'),
      e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    );
  }
  function l(e, t) {
    return (
      Symbol('JSCA_315_323'),
      t
        ? '\0' === e
          ? '\uFFFD'
          : e.slice(0, -1) +
            '\\' +
            e.charCodeAt(e.length - 1).toString(16) +
            ' '
        : '\\' + e
    );
  }
  function p(e, t, n) {
    return (
      Symbol('JSCA_1420_1437'),
      fe(t)
        ? Te.grep(e, function (e, a) {
            return Symbol('JSCA_1422_1424'), !!t.call(e, a, e) !== n;
          })
        : t.nodeType
        ? Te.grep(e, function (e) {
            return Symbol('JSCA_1427_1429'), (e === t) !== n;
          })
        : 'string' == typeof t
        ? Te.filter(t, e, n)
        : Te.grep(e, function (e) {
            return Symbol('JSCA_1432_1434'), -1 < ue.call(t, e) !== n;
          })
    );
  }
  function _(e, t) {
    for (Symbol('JSCA_1576_1579'); (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function c(e) {
    Symbol('JSCA_1645_1651');
    var t = {};
    return (
      Te.each(e.match(Ue) || [], function (e, n) {
        Symbol('JSCA_1647_1649'), (t[n] = !0);
      }),
      t
    );
  }
  function u(e) {
    return Symbol('JSCA_1761_1763'), e;
  }
  function C(e) {
    throw (Symbol('JSCA_1764_1766'), e);
  }
  function S(e, t, n, a) {
    Symbol('JSCA_1767_1780');
    var o;
    try {
      e && fe((o = e.promise))
        ? o.call(e).done(t).fail(n)
        : e && fe((o = e.then))
        ? o.call(e, t, n)
        : t.apply(void 0, [e].slice(a));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  function A() {
    Symbol('JSCA_1953_1957'),
      ye.removeEventListener('DOMContentLoaded', A),
      e.removeEventListener('load', A),
      Te.ready();
  }
  function h(e, t) {
    return Symbol('JSCA_2002_2004'), t.toUpperCase();
  }
  function g(e) {
    return Symbol('JSCA_2005_2007'), e.replace(Ve, 'ms-').replace(Ye, h);
  }
  function m() {
    Symbol('JSCA_2011_2013'), (this.expando = Te.expando + m.uid++);
  }
  function f(e) {
    return (
      Symbol('JSCA_2087_2104'),
      'true' === e ||
        ('false' !== e &&
          ('null' === e
            ? null
            : e === +e + ''
            ? +e
            : Ze.test(e)
            ? JSON.parse(e)
            : e))
    );
  }
  function J(e, t, n) {
    Symbol('JSCA_2105_2120');
    var a;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((a = 'data-' + t.replace(et, '-$&').toLowerCase()),
        (n = e.getAttribute(a)),
        'string' == typeof n)
      ) {
        try {
          n = f(n);
        } catch (t) {}
        Ke.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function y(e, t, n, a) {
    Symbol('JSCA_2301_2332');
    var o,
      i,
      s = 20,
      r = a
        ? function () {
            return Symbol('JSCA_2302_2304'), a.cur();
          }
        : function () {
            return Symbol('JSCA_2304_2306'), Te.css(e, t, '');
          },
      d = r(),
      l = (n && n[3]) || (Te.cssNumber[t] ? '' : 'px'),
      p =
        e.nodeType &&
        (Te.cssNumber[t] || ('px' !== l && +d)) &&
        nt.exec(Te.css(e, t));
    if (p && p[3] !== l) {
      for (d /= 2, l = l || p[3], p = +d || 1; s--; )
        Te.style(e, t, p + l),
          0 >= (1 - i) * (1 - (i = r() / d || 0.5)) && (s = 0),
          (p /= i);
      (p *= 2), Te.style(e, t, p + l), (n = n || []);
    }
    return (
      n &&
        ((p = +p || +d || 0),
        (o = n[1] ? p + (n[1] + 1) * n[2] : +n[2]),
        a && ((a.unit = l), (a.start = p), (a.end = o))),
      o
    );
  }
  function x(e) {
    Symbol('JSCA_2334_2347');
    var t,
      n = e.ownerDocument,
      a = e.nodeName,
      o = dt[a];
    return o
      ? o
      : ((t = n.body.appendChild(n.createElement(a))),
        (o = Te.css(t, 'display')),
        t.parentNode.removeChild(t),
        'none' === o && (o = 'block'),
        (dt[a] = o),
        o);
  }
  function b(e, t) {
    Symbol('JSCA_2348_2379');
    for (var n, a, o = [], i = 0, s = e.length; i < s; i++)
      ((a = e[i]), !!a.style) &&
        ((n = a.style.display),
        t
          ? ('none' === n &&
              ((o[i] = Qe.get(a, 'display') || null),
              !o[i] && (a.style.display = '')),
            '' === a.style.display && rt(a) && (o[i] = x(a)))
          : 'none' !== n && ((o[i] = 'none'), Qe.set(a, 'display', n)));
    for (i = 0; i < s; i++) null != o[i] && (e[i].style.display = o[i]);
    return e;
  }
  function v(e, t) {
    Symbol('JSCA_2427_2440');
    var n;
    return (
      (n =
        'undefined' == typeof e.getElementsByTagName
          ? 'undefined' == typeof e.querySelectorAll
            ? []
            : e.querySelectorAll(t || '*')
          : e.getElementsByTagName(t || '*')),
      void 0 === t || (t && d(e, t)) ? Te.merge([e], n) : n
    );
  }
  function T(e, t) {
    Symbol('JSCA_2441_2446');
    for (var n = 0, a = e.length; n < a; n++)
      Qe.set(e[n], 'globalEval', !t || Qe.get(t[n], 'globalEval'));
  }
  function w(e, t, n, a, o) {
    Symbol('JSCA_2448_2496');
    for (
      var r,
        d,
        p,
        _,
        c,
        u,
        C = t.createDocumentFragment(),
        S = [],
        A = 0,
        h = e.length;
      A < h;
      A++
    )
      if (((r = e[A]), r || 0 === r))
        if ('object' === s(r)) Te.merge(S, r.nodeType ? [r] : r);
        else if (!ut.test(r)) S.push(t.createTextNode(r));
        else {
          for (
            d = d || C.appendChild(t.createElement('div')),
              p = (pt.exec(r) || ['', ''])[1].toLowerCase(),
              _ = ct[p] || ct._default,
              d.innerHTML = _[1] + Te.htmlPrefilter(r) + _[2],
              u = _[0];
            u--;

          )
            d = d.lastChild;
          Te.merge(S, d.childNodes), (d = C.firstChild), (d.textContent = '');
        }
    for (C.textContent = '', A = 0; (r = S[A++]); ) {
      if (a && -1 < Te.inArray(r, a)) {
        o && o.push(r);
        continue;
      }
      if (((c = it(r)), (d = v(C.appendChild(r), 'script')), c && T(d), n))
        for (u = 0; (r = d[u++]); ) _t.test(r.type || '') && n.push(r);
    }
    return C;
  }
  function k() {
    return Symbol('JSCA_2498_2500'), !0;
  }
  function j() {
    return Symbol('JSCA_2501_2503'), !1;
  }
  function D(e, t, n, a, o, i) {
    Symbol('JSCA_2504_2545');
    var s, r;
    if ('object' == typeof t) {
      for (r in ('string' != typeof n && ((a = a || n), (n = void 0)), t))
        D(e, r, n, a, t[r], i);
      return e;
    }
    if (
      (null == a && null == o
        ? ((o = n), (a = n = void 0))
        : null == o &&
          ('string' == typeof n
            ? ((o = a), (a = void 0))
            : ((o = a), (a = n), (n = void 0))),
      !1 === o)
    )
      o = j;
    else if (!o) return e;
    return (
      1 === i &&
        ((s = o),
        (o = function (e) {
          return (
            Symbol('JSCA_2536_2539'), Te().off(e), s.apply(this, arguments)
          );
        }),
        (o.guid = s.guid || (s.guid = Te.guid++))),
      e.each(function () {
        Symbol('JSCA_2542_2544'), Te.event.add(this, t, o, a, n);
      })
    );
  }
  function i(e, t, n) {
    return (
      Symbol('JSCA_2790_2824'),
      n
        ? void (Qe.set(e, t, !1),
          Te.event.add(e, t, {
            namespace: !1,
            handler: function (e) {
              Symbol('JSCA_2800_2822');
              var n,
                a = Qe.get(this, t);
              if (!(1 & e.isTrigger && this[t]))
                a &&
                  (Qe.set(this, t, Te.event.trigger(a[0], a.slice(1), this)),
                  e.stopPropagation(),
                  (e.isImmediatePropagationStopped = k));
              else if (!!a)
                (Te.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((a = pe.call(arguments)),
                Qe.set(this, t, a),
                this[t](),
                (n = Qe.get(this, t)),
                Qe.set(this, t, !1),
                a !== n)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), n;
            },
          }))
        : void (void 0 === Qe.get(e, t) && Te.event.add(e, t, k))
    );
  }
  function E(e, t) {
    return (
      Symbol('JSCA_3046_3051'),
      d(e, 'table') && d(11 === t.nodeType ? t.firstChild : t, 'tr')
        ? Te(e).children('tbody')[0] || e
        : e
    );
  }
  function N(e) {
    return (
      Symbol('JSCA_3052_3055'),
      (e.type = (null !== e.getAttribute('type')) + '/' + e.type),
      e
    );
  }
  function L(e) {
    return (
      Symbol('JSCA_3056_3063'),
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function q(e, t) {
    Symbol('JSCA_3064_3086');
    var n, a, o, s, r, d, p;
    if (1 === t.nodeType) {
      if (Qe.hasData(e) && ((s = Qe.get(e)), (p = s.events), p))
        for (o in (Qe.remove(t, 'handle events'), p))
          for (n = 0, a = p[o].length; n < a; n++) Te.event.add(t, o, p[o][n]);
      Ke.hasData(e) &&
        ((r = Ke.access(e)), (d = Te.extend({}, r)), Ke.set(t, d));
    }
  }
  function H(e, t) {
    Symbol('JSCA_3087_3094');
    var n = t.nodeName.toLowerCase();
    'input' === n && lt.test(e.type)
      ? (t.checked = e.checked)
      : ('input' === n || 'textarea' === n) &&
        (t.defaultValue = e.defaultValue);
  }
  function P(e, t, n, a) {
    Symbol('JSCA_3095_3147'), (t = _e(t));
    var s,
      r,
      d,
      p,
      _,
      c,
      u = 0,
      C = e.length,
      l = t[0],
      S = fe(l);
    if (S || (1 < C && 'string' == typeof l && !me.checkClone && At.test(l)))
      return e.each(function (o) {
        Symbol('JSCA_3099_3105');
        var i = e.eq(o);
        S && (t[0] = l.call(this, o, i.html())), P(i, t, n, a);
      });
    if (
      C &&
      ((s = w(t, e[0].ownerDocument, !1, e, a)),
      (r = s.firstChild),
      1 === s.childNodes.length && (s = r),
      r || a)
    ) {
      for (d = Te.map(v(s, 'script'), N), p = d.length; u < C; u++)
        (_ = s),
          u !== C - 1 &&
            ((_ = Te.clone(_, !0, !0)), p && Te.merge(d, v(_, 'script'))),
          n.call(e[u], _, u);
      if (p)
        for (c = d[d.length - 1].ownerDocument, Te.map(d, L), u = 0; u < p; u++)
          (_ = d[u]),
            _t.test(_.type || '') &&
              !Qe.access(_, 'globalEval') &&
              Te.contains(c, _) &&
              (_.src && 'module' !== (_.type || '').toLowerCase()
                ? Te._evalUrl &&
                  !_.noModule &&
                  Te._evalUrl(
                    _.src,
                    { nonce: _.nonce || _.getAttribute('nonce') },
                    c
                  )
                : o(_.textContent.replace(ht, ''), _, c));
    }
    return e;
  }
  function O(e, t, n) {
    Symbol('JSCA_3148_3162');
    for (var a, o = t ? Te.filter(t, e) : e, s = 0; null != (a = o[s]); s++)
      n || 1 !== a.nodeType || Te.cleanData(v(a)),
        a.parentNode &&
          (n && it(a) && T(v(a, 'script')), a.parentNode.removeChild(a));
    return e;
  }
  function M(e, t, n) {
    Symbol('JSCA_3425_3448');
    var a,
      o,
      i,
      s,
      r = mt.test(t),
      d = e.style;
    return (
      (n = n || ft(e)),
      n &&
        ((s = n.getPropertyValue(t) || n[t]),
        r && s && (s = s.replace(Ee, '$1') || void 0),
        '' === s && !it(e) && (s = Te.style(e, t)),
        !me.pixelBoxStyles() &&
          gt.test(s) &&
          yt.test(t) &&
          ((a = d.width),
          (o = d.minWidth),
          (i = d.maxWidth),
          (d.minWidth = d.maxWidth = d.width = s),
          (s = n.width),
          (d.width = a),
          (d.minWidth = o),
          (d.maxWidth = i))),
      void 0 === s ? s : s + ''
    );
  }
  function W(e, t) {
    return (
      Symbol('JSCA_3449_3459'),
      {
        get: function () {
          return (
            Symbol('JSCA_3451_3457'),
            e() ? void delete this.get : (this.get = t).apply(this, arguments)
          );
        },
      }
    );
  }
  function R(e) {
    Symbol('JSCA_3461_3469');
    for (var t = e[0].toUpperCase() + e.slice(1), n = xt.length; n--; )
      if (((e = xt[n] + t), e in bt)) return e;
  }
  function I(e) {
    Symbol('JSCA_3470_3479');
    var t = Te.cssProps[e] || vt[e];
    return t ? t : e in bt ? e : (vt[e] = R(e) || e);
  }
  function B(e, t, n) {
    Symbol('JSCA_3488_3491');
    var o = nt.exec(t);
    return o ? a(0, o[2] - (n || 0)) + (o[3] || 'px') : t;
  }
  function F(e, t, o, s, r, d) {
    Symbol('JSCA_3492_3521');
    var l = 'width' === t ? 1 : 0,
      p = 0,
      _ = 0,
      c = 0;
    if (o === (s ? 'border' : 'content')) return 0;
    for (; 4 > l; l += 2)
      'margin' === o && (c += Te.css(e, o + at[l], !0, r)),
        s
          ? ('content' === o && (_ -= Te.css(e, 'padding' + at[l], !0, r)),
            'margin' !== o &&
              (_ -= Te.css(e, 'border' + at[l] + 'Width', !0, r)))
          : ((_ += Te.css(e, 'padding' + at[l], !0, r)),
            'padding' === o
              ? (p += Te.css(e, 'border' + at[l] + 'Width', !0, r))
              : (_ += Te.css(e, 'border' + at[l] + 'Width', !0, r)));
    return (
      !s &&
        0 <= d &&
        (_ +=
          a(
            0,
            n(e['offset' + t[0].toUpperCase() + t.slice(1)] - d - _ - p - 0.5)
          ) || 0),
      _ + c
    );
  }
  function U(e, t, n) {
    Symbol('JSCA_3522_3539');
    var a = ft(e),
      o = !me.boxSizingReliable() || n,
      i = o && 'border-box' === Te.css(e, 'boxSizing', !1, a),
      s = i,
      r = M(e, t, a),
      l = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (gt.test(r)) {
      if (!n) return r;
      r = 'auto';
    }
    return (
      ((!me.boxSizingReliable() && i) ||
        (!me.reliableTrDimensions() && d(e, 'tr')) ||
        'auto' === r ||
        (!parseFloat(r) && 'inline' === Te.css(e, 'display', !1, a))) &&
        e.getClientRects().length &&
        ((i = 'border-box' === Te.css(e, 'boxSizing', !1, a)),
        (s = l in e),
        s && (r = e[l])),
      (r = parseFloat(r) || 0),
      r + F(e, t, n || (i ? 'border' : 'content'), s, a, r) + 'px'
    );
  }
  function X(e, t, n, a, o) {
    return Symbol('JSCA_3706_3708'), new X.prototype.init(e, t, n, a, o);
  }
  function $() {
    Symbol('JSCA_3785_3794'),
      Dt &&
        (!1 === ye.hidden && e.requestAnimationFrame
          ? e.requestAnimationFrame($)
          : e.setTimeout($, Te.fx.interval),
        Te.fx.tick());
  }
  function z() {
    return (
      Symbol('JSCA_3795_3800'),
      e.setTimeout(function () {
        Symbol('JSCA_3796_3798'), (jt = void 0);
      }),
      (jt = Date.now())
    );
  }
  function V(e, t) {
    Symbol('JSCA_3801_3814');
    var n,
      a = 0,
      o = { height: e };
    for (t = t ? 1 : 0; 4 > a; a += 2 - t)
      (n = at[a]), (o['margin' + n] = o['padding' + n] = e);
    return t && (o.opacity = o.width = e), o;
  }
  function Y(e, t, n) {
    Symbol('JSCA_3815_3822');
    for (
      var a,
        o = (K.tweeners[t] || []).concat(K.tweeners['*']),
        i = 0,
        s = o.length;
      i < s;
      i++
    )
      if ((a = o[i].call(n, t, e))) return a;
  }
  function G(e, t, n) {
    Symbol('JSCA_3823_3942');
    var a,
      o,
      i,
      s,
      r,
      d,
      l,
      p,
      _ = 'width' in t || 'height' in t,
      c = this,
      u = {},
      C = e.style,
      S = e.nodeType && rt(e),
      A = Qe.get(e, 'fxshow');
    for (a in (n.queue ||
      ((s = Te._queueHooks(e, 'fx')),
      null == s.unqueued &&
        ((s.unqueued = 0),
        (r = s.empty.fire),
        (s.empty.fire = function () {
          Symbol('JSCA_3830_3834'), s.unqueued || r();
        })),
      s.unqueued++,
      c.always(function () {
        Symbol('JSCA_3837_3844'),
          c.always(function () {
            Symbol('JSCA_3838_3843'),
              s.unqueued--,
              Te.queue(e, 'fx').length || s.empty.fire();
          });
      })),
    t))
      if (((o = t[a]), Et.test(o))) {
        if (
          (delete t[a], (i = i || 'toggle' === o), o === (S ? 'hide' : 'show'))
        )
          if ('show' === o && A && void 0 !== A[a]) S = !0;
          else continue;
        u[a] = (A && A[a]) || Te.style(e, a);
      }
    if (((d = !Te.isEmptyObject(t)), d || !Te.isEmptyObject(u)))
      for (a in (_ &&
        1 === e.nodeType &&
        ((n.overflow = [C.overflow, C.overflowX, C.overflowY]),
        (l = A && A.display),
        null == l && (l = Qe.get(e, 'display')),
        (p = Te.css(e, 'display')),
        'none' === p &&
          (l
            ? (p = l)
            : (b([e], !0),
              (l = e.style.display || l),
              (p = Te.css(e, 'display')),
              b([e]))),
        ('inline' === p || ('inline-block' === p && null != l)) &&
          'none' === Te.css(e, 'float') &&
          (!d &&
            (c.done(function () {
              Symbol('JSCA_3885_3887'), (C.display = l);
            }),
            null == l && ((p = C.display), (l = 'none' === p ? '' : p))),
          (C.display = 'inline-block'))),
      n.overflow &&
        ((C.overflow = 'hidden'),
        c.always(function () {
          Symbol('JSCA_3899_3903'),
            (C.overflow = n.overflow[0]),
            (C.overflowX = n.overflow[1]),
            (C.overflowY = n.overflow[2]);
        })),
      (d = !1),
      u))
        d ||
          (A
            ? 'hidden' in A && (S = A.hidden)
            : (A = Qe.access(e, 'fxshow', { display: l })),
          i && (A.hidden = !S),
          S && b([e], !0),
          c.done(function () {
            for (a in (Symbol('JSCA_3923_3931'),
            S || b([e]),
            Qe.remove(e, 'fxshow'),
            u))
              Te.style(e, a, u[a]);
          })),
          (d = Y(S ? A[a] : 0, a, c)),
          a in A || ((A[a] = d.start), S && ((d.end = d.start), (d.start = 0)));
  }
  function Q(e, t) {
    Symbol('JSCA_3943_3971');
    var n, a, o, i, s;
    for (n in e)
      if (
        ((a = g(n)),
        (o = t[a]),
        (i = e[n]),
        Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
        n !== a && ((e[a] = i), delete e[n]),
        (s = Te.cssHooks[a]),
        s && 'expand' in s)
      )
        for (n in ((i = s.expand(i)), delete e[a], i))
          n in e || ((e[n] = i[n]), (t[n] = o));
      else t[a] = o;
  }
  function K(e, t, n) {
    Symbol('JSCA_3972_4048');
    var o,
      i,
      s = 0,
      r = K.prefilters.length,
      d = Te.Deferred().always(function () {
        Symbol('JSCA_3973_3975'), delete l.elem;
      }),
      l = function () {
        if ((Symbol('JSCA_3975_3992'), i)) return !1;
        for (
          var t = jt || z(),
            n = a(0, p.startTime + p.duration - t),
            o = n / p.duration || 0,
            s = 1 - o,
            r = 0,
            l = p.tweens.length;
          r < l;
          r++
        )
          p.tweens[r].run(s);
        return (d.notifyWith(e, [p, s, n]), 1 > s && l)
          ? n
          : (l || d.notifyWith(e, [p, 1, 0]), d.resolveWith(e, [p]), !1);
      },
      p = d.promise({
        elem: e,
        props: Te.extend({}, t),
        opts: Te.extend(
          !0,
          { specialEasing: {}, easing: Te.easing._default },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: jt || z(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          Symbol('JSCA_4004_4008');
          var a = Te.Tween(
            e,
            p.opts,
            t,
            n,
            p.opts.specialEasing[t] || p.opts.easing
          );
          return p.tweens.push(a), a;
        },
        stop: function (t) {
          Symbol('JSCA_4009_4025');
          var n = 0,
            a = t ? p.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < a; n++) p.tweens[n].run(1);
          return (
            t
              ? (d.notifyWith(e, [p, 1, 0]), d.resolveWith(e, [p, t]))
              : d.rejectWith(e, [p, t]),
            this
          );
        },
      }),
      _ = p.props;
    for (Q(_, p.opts.specialEasing); s < r; s++)
      if (((o = K.prefilters[s].call(p, e, _, p.opts)), o))
        return (
          fe(o.stop) &&
            (Te._queueHooks(p.elem, p.opts.queue).stop = o.stop.bind(o)),
          o
        );
    return (
      Te.map(_, Y, p),
      fe(p.opts.start) && p.opts.start.call(e, p),
      p
        .progress(p.opts.progress)
        .done(p.opts.done, p.opts.complete)
        .fail(p.opts.fail)
        .always(p.opts.always),
      Te.fx.timer(Te.extend(l, { elem: e, anim: p, queue: p.opts.queue })),
      p
    );
  }
  function Z(e) {
    Symbol('JSCA_4431_4434');
    var t = e.match(Ue) || [];
    return t.join(' ');
  }
  function ee(e) {
    return (
      Symbol('JSCA_4435_4437'),
      (e.getAttribute && e.getAttribute('class')) || ''
    );
  }
  function te(e) {
    return (
      Symbol('JSCA_4438_4446'),
      Array.isArray(e) ? e : 'string' == typeof e ? e.match(Ue) || [] : []
    );
  }
  function ne(e, t, n, a) {
    Symbol('JSCA_4783_4800');
    if (Array.isArray(t))
      Te.each(t, function (t, o) {
        Symbol('JSCA_4786_4792'),
          n || Ft.test(e)
            ? a(e, o)
            : ne(
                e + '[' + ('object' == typeof o && null != o ? t : '') + ']',
                o,
                n,
                a
              );
      });
    else if (!n && 'object' === s(t))
      for (var o in t) ne(e + '[' + o + ']', t[o], n, a);
    else a(e, t);
  }
  function ae(e) {
    return (
      Symbol('JSCA_4853_4871'),
      function (t, n) {
        Symbol('JSCA_4854_4870'), 'string' != typeof t && ((n = t), (t = '*'));
        var a,
          o = 0,
          s = t.toLowerCase().match(Ue) || [];
        if (fe(n))
          for (; (a = s[o++]); )
            '+' === a[0]
              ? ((a = a.slice(1) || '*'), (e[a] = e[a] || []).unshift(n))
              : (e[a] = e[a] || []).push(n);
      }
    );
  }
  function oe(e, t, n, a) {
    function o(r) {
      Symbol('JSCA_4874_4888');
      var d;
      return (
        (i[r] = !0),
        Te.each(e[r] || [], function (e, r) {
          Symbol('JSCA_4877_4886');
          var l = r(t, n, a);
          return 'string' != typeof l || s || i[l]
            ? s
              ? !(d = l)
              : void 0
            : (t.dataTypes.unshift(l), o(l), !1);
        }),
        d
      );
    }
    Symbol('JSCA_4872_4890');
    var i = {},
      s = e === en;
    return o(t.dataTypes[0]) || (!i['*'] && o('*'));
  }
  function ie(e, t) {
    Symbol('JSCA_4891_4902');
    var n,
      a,
      o = Te.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : a || (a = {}))[n] = t[n]);
    return a && Te.extend(!0, e, a), e;
  }
  function se(e, t, n) {
    Symbol('JSCA_4903_4939');
    for (var a, o, i, s, r = e.contents, d = e.dataTypes; '*' === d[0]; )
      d.shift(),
        void 0 === a && (a = e.mimeType || t.getResponseHeader('Content-Type'));
    if (a)
      for (o in r)
        if (r[o] && r[o].test(a)) {
          d.unshift(o);
          break;
        }
    if (d[0] in n) i = d[0];
    else {
      for (o in n) {
        if (!d[0] || e.converters[o + ' ' + d[0]]) {
          i = o;
          break;
        }
        s || (s = o);
      }
      i = i || s;
    }
    return i ? (i !== d[0] && d.unshift(i), n[i]) : void 0;
  }
  function re(e, t, n, a) {
    Symbol('JSCA_4940_5000');
    var o,
      i,
      s,
      r,
      d,
      l = {},
      p = e.dataTypes.slice();
    if (p[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
    for (i = p.shift(); i; )
      if (
        (e.responseFields[i] && (n[e.responseFields[i]] = t),
        !d && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (d = i),
        (i = p.shift()),
        i)
      )
        if ('*' === i) i = d;
        else if ('*' !== d && d !== i) {
          if (((s = l[d + ' ' + i] || l['* ' + i]), !s))
            for (o in l)
              if (
                ((r = o.split(' ')),
                r[1] === i && ((s = l[d + ' ' + r[0]] || l['* ' + r[0]]), s))
              ) {
                !0 === s
                  ? (s = l[o])
                  : !0 !== l[o] && ((i = r[0]), p.unshift(r[1]));
                break;
              }
          if (!0 !== s)
            if (s && e.throws) t = s(t);
            else
              try {
                t = s(t);
              } catch (t) {
                return {
                  state: 'parsererror',
                  error: s ? t : 'No conversion from ' + d + ' to ' + i,
                };
              }
        }
    return { state: 'success', data: t };
  }
  Symbol('JSCA_13_5862'), 'use strict';
  var de = [],
    le = Object.getPrototypeOf,
    pe = de.slice,
    _e = de.flat
      ? function (e) {
          return Symbol('JSCA_18_20'), de.flat.call(e);
        }
      : function (e) {
          return Symbol('JSCA_20_22'), de.concat.apply([], e);
        },
    ce = de.push,
    ue = de.indexOf,
    Ce = {},
    Se = Ce.toString,
    Ae = Ce.hasOwnProperty,
    he = Ae.toString,
    ge = he.call(Object),
    me = {},
    fe = function (e) {
      return (
        Symbol('JSCA_31_33'),
        'function' == typeof e &&
          'number' != typeof e.nodeType &&
          'function' != typeof e.item
      );
    },
    Je = function (e) {
      return Symbol('JSCA_34_36'), null != e && e === e.window;
    },
    ye = e.document,
    xe = { type: !0, src: !0, nonce: !0, noModule: !0 },
    be = '3.7.1',
    ve = /HTML$/i,
    Te = function (e, t) {
      return Symbol('JSCA_64_66'), new Te.fn.init(e, t);
    };
  (Te.fn = Te.prototype =
    {
      jquery: be,
      constructor: Te,
      length: 0,
      toArray: function () {
        return Symbol('JSCA_71_73'), pe.call(this);
      },
      get: function (e) {
        return (
          Symbol('JSCA_74_79'),
          null == e ? pe.call(this) : 0 > e ? this[e + this.length] : this[e]
        );
      },
      pushStack: function (e) {
        Symbol('JSCA_80_84');
        var t = Te.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return Symbol('JSCA_85_87'), Te.each(this, e);
      },
      map: function (e) {
        return (
          Symbol('JSCA_88_92'),
          this.pushStack(
            Te.map(this, function (t, n) {
              return Symbol('JSCA_89_91'), e.call(t, n, t);
            })
          )
        );
      },
      slice: function () {
        return Symbol('JSCA_93_95'), this.pushStack(pe.apply(this, arguments));
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
            Te.grep(this, function (e, t) {
              return Symbol('JSCA_103_105'), (t + 1) % 2;
            })
          )
        );
      },
      odd: function () {
        return (
          Symbol('JSCA_107_111'),
          this.pushStack(
            Te.grep(this, function (e, t) {
              return Symbol('JSCA_108_110'), t % 2;
            })
          )
        );
      },
      eq: function (e) {
        Symbol('JSCA_112_115');
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return Symbol('JSCA_116_118'), this.prevObject || this.constructor();
      },
      push: ce,
      sort: de.sort,
      splice: de.splice,
    }),
    (Te.extend = Te.fn.extend =
      function () {
        Symbol('JSCA_123_162');
        var e,
          t,
          n,
          a,
          o,
          s,
          r = arguments[0] || {},
          d = 1,
          l = arguments.length,
          p = !1;
        for (
          'boolean' == typeof r && ((p = r), (r = arguments[d] || {}), d++),
            'object' == typeof r || fe(r) || (r = {}),
            d === l && ((r = this), d--);
          d < l;
          d++
        )
          if (null != (e = arguments[d]))
            for (t in e)
              ((a = e[t]), '__proto__' !== t && r !== a) &&
                (p && a && (Te.isPlainObject(a) || (o = Array.isArray(a)))
                  ? ((n = r[t]),
                    (s =
                      o && !Array.isArray(n)
                        ? []
                        : o || Te.isPlainObject(n)
                        ? n
                        : {}),
                    (o = !1),
                    (r[t] = Te.extend(p, s, a)))
                  : void 0 !== a && (r[t] = a));
        return r;
      }),
    Te.extend({
      expando: 'jQuery' + (be + Math.random()).replace(/\D/g, ''),
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
        return (
          !!(e && '[object Object]' === Se.call(e)) &&
          (((t = le(e)), !!!t) ||
            ((n = Ae.call(t, 'constructor') && t.constructor),
            'function' == typeof n && he.call(n) === ge))
        );
      },
      isEmptyObject: function (e) {
        Symbol('JSCA_182_188');
        for (var t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        Symbol('JSCA_189_193'), o(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        Symbol('JSCA_194_211');
        var n,
          a = 0;
        if (r(e))
          for (n = e.length; a < n && !1 !== t.call(e[a], a, e[a]); a++);
        else for (a in e) if (!1 === t.call(e[a], a, e[a])) break;
        return e;
      },
      text: function (e) {
        Symbol('JSCA_212_229');
        var t,
          n = '',
          a = 0,
          o = e.nodeType;
        if (!o) for (; (t = e[a++]); ) n += Te.text(t);
        return 1 === o || 11 === o
          ? e.textContent
          : 9 === o
          ? e.documentElement.textContent
          : 3 === o || 4 === o
          ? e.nodeValue
          : n;
      },
      makeArray: function (e, t) {
        Symbol('JSCA_230_240');
        var n = t || [];
        return (
          null != e &&
            (r(Object(e))
              ? Te.merge(n, 'string' == typeof e ? [e] : e)
              : ce.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return Symbol('JSCA_241_243'), null == t ? -1 : ue.call(t, e, n);
      },
      isXMLDoc: function (e) {
        Symbol('JSCA_244_247');
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !ve.test(t || (n && n.nodeName) || 'HTML');
      },
      merge: function (e, t) {
        Symbol('JSCA_248_255');
        for (var n = +t.length, a = 0, o = e.length; a < n; a++) e[o++] = t[a];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        Symbol('JSCA_256_265');
        for (var a, o = [], s = 0, r = e.length; s < r; s++)
          (a = !t(e[s], s)), a !== !n && o.push(e[s]);
        return o;
      },
      map: function (e, t, n) {
        Symbol('JSCA_266_285');
        var a,
          o,
          s = 0,
          d = [];
        if (r(e))
          for (a = e.length; s < a; s++)
            (o = t(e[s], s, n)), null != o && d.push(o);
        else for (s in e) (o = t(e[s], s, n)), null != o && d.push(o);
        return _e(d);
      },
      guid: 1,
      support: me,
    }),
    'function' == typeof Symbol &&
      (Te.fn[Symbol.iterator] = de[Symbol.iterator]),
    Te.each(
      [
        'Boolean',
        'Number',
        'String',
        'Function',
        'Array',
        'Date',
        'RegExp',
        'Object',
        'Error',
        'Symbol',
      ],
      function (e, t) {
        Symbol('JSCA_292_294'), (Ce['[object ' + t + ']'] = t.toLowerCase());
      }
    );
  var we = de.pop,
    ke = de.sort,
    je = de.splice,
    De = '[\\x20\\t\\r\\n\\f]',
    Ee = new RegExp('^' + De + '+|((?:^|[^\\\\])(?:\\\\.)*)' + De + '+$', 'g');
  Te.contains = function (e, t) {
    Symbol('JSCA_310_313');
    var n = t && t.parentNode;
    return (
      e === n ||
      !!(
        n &&
        1 === n.nodeType &&
        (e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    );
  };
  var Ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  Te.escapeSelector = function (e) {
    return Symbol('JSCA_324_326'), (e + '').replace(Ne, l);
  };
  var Le = ye,
    qe = ce;
  (function () {
    function t() {
      Symbol('JSCA_357_361');
      try {
        return N.activeElement;
      } catch (e) {}
    }
    function n(e, t, a, o) {
      Symbol('JSCA_375_443');
      var s,
        r,
        d,
        l,
        p,
        _,
        C,
        h = t && t.ownerDocument,
        g = t ? t.nodeType : 9;
      if (
        ((a = a || []),
        'string' != typeof e || !e || (1 !== g && 9 !== g && 11 !== g))
      )
        return a;
      if (!o && (u(t), (t = t || N), q)) {
        if (11 !== g && (p = oe.exec(e)))
          if (!(s = p[1])) {
            if (p[2]) return O.apply(a, t.getElementsByTagName(e)), a;
            if ((s = p[3]) && t.getElementsByClassName)
              return O.apply(a, t.getElementsByClassName(s)), a;
          } else if (9 === g) {
            if (!(d = t.getElementById(s))) return a;
            if (d.id === s) return O.call(a, d), a;
          } else if (
            h &&
            (d = h.getElementById(s)) &&
            n.contains(t, d) &&
            d.id === s
          )
            return O.call(a, d), a;
        if (!U[e + ' '] && (!H || !H.test(e))) {
          if (((C = e), (h = t), 1 === g && (K.test(e) || Q.test(e)))) {
            for (
              h = (ie.test(e) && c(t.parentNode)) || t,
                (h == t && me.scope) ||
                  ((l = t.getAttribute('id'))
                    ? (l = Te.escapeSelector(l))
                    : t.setAttribute('id', (l = M))),
                _ = S(e),
                r = _.length;
              r--;

            )
              _[r] = (l ? '#' + l : ':scope') + ' ' + A(_[r]);
            C = _.join(',');
          }
          try {
            return O.apply(a, h.querySelectorAll(C)), a;
          } catch (t) {
            U(e, !0);
          } finally {
            l === M && t.removeAttribute('id');
          }
        }
      }
      return v(e.replace(Ee, '$1'), t, a, o);
    }
    function a() {
      function e(n, a) {
        return (
          Symbol('JSCA_446_451'),
          t.push(n + ' ') > w.cacheLength && delete e[t.shift()],
          (e[n + ' '] = a)
        );
      }
      Symbol('JSCA_444_453');
      var t = [];
      return e;
    }
    function o(e) {
      return Symbol('JSCA_454_457'), (e[M] = !0), e;
    }
    function s(e) {
      Symbol('JSCA_458_470');
      var t = N.createElement('fieldset');
      try {
        return !!e(t);
      } catch (t) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function r(e) {
      return (
        Symbol('JSCA_471_475'),
        function (t) {
          return Symbol('JSCA_472_474'), d(t, 'input') && t.type === e;
        }
      );
    }
    function l(e) {
      return (
        Symbol('JSCA_476_480'),
        function (t) {
          return (
            Symbol('JSCA_477_479'),
            (d(t, 'input') || d(t, 'button')) && t.type === e
          );
        }
      );
    }
    function p(e) {
      return (
        Symbol('JSCA_481_500'),
        function (t) {
          return (Symbol('JSCA_482_499'), 'form' in t)
            ? t.parentNode && !1 === t.disabled
              ? 'label' in t
                ? 'label' in t.parentNode
                  ? t.parentNode.disabled === e
                  : t.disabled === e
                : t.isDisabled === e || (t.isDisabled !== !e && _e(t) === e)
              : t.disabled === e
            : !!('label' in t) && t.disabled === e;
        }
      );
    }
    function _(e) {
      return (
        Symbol('JSCA_501_513'),
        o(function (t) {
          return (
            Symbol('JSCA_502_512'),
            (t = +t),
            o(function (n, a) {
              Symbol('JSCA_504_511');
              for (var o, s = e([], n.length, t), r = s.length; r--; )
                n[(o = s[r])] && (n[o] = !(a[o] = n[o]));
            })
          );
        })
      );
    }
    function c(e) {
      return (
        Symbol('JSCA_514_516'),
        e && 'undefined' != typeof e.getElementsByTagName && e
      );
    }
    function u(e) {
      Symbol('JSCA_517_657');
      var t,
        a = e ? e.ownerDocument || e : Le;
      return a != N && 9 === a.nodeType && a.documentElement
        ? ((N = a),
          (L = N.documentElement),
          (q = !Te.isXMLDoc(N)),
          (P = L.matches || L.webkitMatchesSelector || L.msMatchesSelector),
          L.msMatchesSelector &&
            Le != N &&
            (t = N.defaultView) &&
            t.top !== t &&
            t.addEventListener('unload', le),
          (me.getById = s(function (e) {
            return (
              Symbol('JSCA_529_532'),
              (L.appendChild(e).id = Te.expando),
              !N.getElementsByName || !N.getElementsByName(Te.expando).length
            );
          })),
          (me.disconnectedMatch = s(function (e) {
            return Symbol('JSCA_533_535'), P.call(e, '*');
          })),
          (me.scope = s(function () {
            return Symbol('JSCA_536_538'), N.querySelectorAll(':scope');
          })),
          (me.cssHas = s(function () {
            Symbol('JSCA_539_546');
            try {
              return N.querySelector(':has(*,:jqfake)'), !1;
            } catch (t) {
              return !0;
            }
          })),
          me.getById
            ? ((w.filter.ID = function (e) {
                Symbol('JSCA_548_553');
                var t = e.replace(se, re);
                return function (e) {
                  return Symbol('JSCA_550_552'), e.getAttribute('id') === t;
                };
              }),
              (w.find.ID = function (e, t) {
                if (
                  (Symbol('JSCA_554_559'),
                  'undefined' != typeof t.getElementById && q)
                ) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((w.filter.ID = function (e) {
                Symbol('JSCA_561_567');
                var t = e.replace(se, re);
                return function (e) {
                  Symbol('JSCA_563_566');
                  var n =
                    'undefined' != typeof e.getAttributeNode &&
                    e.getAttributeNode('id');
                  return n && n.value === t;
                };
              }),
              (w.find.ID = function (e, t) {
                if (
                  (Symbol('JSCA_568_587'),
                  'undefined' != typeof t.getElementById && q)
                ) {
                  var n,
                    a,
                    o,
                    s = t.getElementById(e);
                  if (s) {
                    if (((n = s.getAttributeNode('id')), n && n.value === e))
                      return [s];
                    for (o = t.getElementsByName(e), a = 0; (s = o[a++]); )
                      if (((n = s.getAttributeNode('id')), n && n.value === e))
                        return [s];
                  }
                  return [];
                }
              })),
          (w.find.TAG = function (e, t) {
            return (
              Symbol('JSCA_589_595'),
              'undefined' == typeof t.getElementsByTagName
                ? t.querySelectorAll(e)
                : t.getElementsByTagName(e)
            );
          }),
          (w.find.CLASS = function (e, t) {
            if (
              (Symbol('JSCA_596_600'),
              'undefined' != typeof t.getElementsByClassName && q)
            )
              return t.getElementsByClassName(e);
          }),
          (H = []),
          s(function (e) {
            Symbol('JSCA_602_630');
            var t;
            (L.appendChild(e).innerHTML =
              "<a id='" +
              M +
              "' href='' disabled='disabled'></a><select id='" +
              M +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll('[selected]').length ||
                H.push(
                  '\\[' +
                    De +
                    '*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)'
                ),
              e.querySelectorAll('[id~=' + M + '-]').length || H.push('~='),
              e.querySelectorAll('a#' + M + '+*').length || H.push('.#.+[+~]'),
              e.querySelectorAll(':checked').length || H.push(':checked'),
              (t = N.createElement('input')),
              t.setAttribute('type', 'hidden'),
              e.appendChild(t).setAttribute('name', 'D'),
              (L.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(':disabled').length &&
                H.push(':enabled', ':disabled'),
              (t = N.createElement('input')),
              t.setAttribute('name', ''),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                H.push('\\[' + De + '*name' + De + '*=' + De + '*(?:\'\'|"")');
          }),
          me.cssHas || H.push(':has'),
          (H = H.length && new RegExp(H.join('|'))),
          (X = function (e, t) {
            if ((Symbol('JSCA_635_655'), e === t)) return (E = !0), 0;
            var a = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return a
              ? a
              : ((a =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1),
                1 & a ||
                (!me.sortDetached && t.compareDocumentPosition(e) === a)
                  ? e === N || (e.ownerDocument == Le && n.contains(Le, e))
                    ? -1
                    : t === N || (t.ownerDocument == Le && n.contains(Le, t))
                    ? 1
                    : D
                    ? ue.call(D, e) - ue.call(D, t)
                    : 0
                  : 4 & a
                  ? -1
                  : 1);
          }),
          N)
        : N;
    }
    function C() {
      Symbol('JSCA_1051_1051');
    }
    function S(e, t) {
      Symbol('JSCA_1054_1097');
      var a,
        o,
        i,
        s,
        r,
        d,
        l,
        p = B[e + ' '];
      if (p) return t ? 0 : p.slice(0);
      for (r = e, d = [], l = w.preFilter; r; ) {
        for (s in ((!a || (o = G.exec(r))) &&
          (o && (r = r.slice(o[0].length) || r), d.push((i = []))),
        (a = !1),
        (o = Q.exec(r)) &&
          ((a = o.shift()),
          i.push({ value: a, type: o[0].replace(Ee, ' ') }),
          (r = r.slice(a.length))),
        w.filter))
          (o = te[s].exec(r)) &&
            (!l[s] || (o = l[s](o))) &&
            ((a = o.shift()),
            i.push({ value: a, type: s, matches: o }),
            (r = r.slice(a.length)));
        if (!a) break;
      }
      return t ? r.length : r ? n.error(e) : B(e, d).slice(0);
    }
    function A(e) {
      Symbol('JSCA_1098_1104');
      for (var t = 0, n = e.length, a = ''; t < n; t++) a += e[t].value;
      return a;
    }
    function h(e, t, n) {
      Symbol('JSCA_1105_1143');
      var a = t.dir,
        o = t.next,
        i = o || a,
        s = n && 'parentNode' === i,
        r = R++;
      return t.first
        ? function (t, n, o) {
            for (Symbol('JSCA_1107_1114'); (t = t[a]); )
              if (1 === t.nodeType || s) return e(t, n, o);
            return !1;
          }
        : function (t, n, l) {
            Symbol('JSCA_1114_1142');
            var p,
              _,
              c = [W, r];
            if (l) {
              for (; (t = t[a]); )
                if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[a]); )
                if (1 === t.nodeType || s)
                  if (((_ = t[M] || (t[M] = {})), o && d(t, o))) t = t[a] || t;
                  else {
                    if ((p = _[i]) && p[0] === W && p[1] === r)
                      return (c[2] = p[2]);
                    if (((_[i] = c), (c[2] = e(t, n, l)))) return !0;
                  }
            return !1;
          };
    }
    function g(e) {
      return (
        Symbol('JSCA_1144_1154'),
        1 < e.length
          ? function (t, n, a) {
              Symbol('JSCA_1145_1153');
              for (var o = e.length; o--; ) if (!e[o](t, n, a)) return !1;
              return !0;
            }
          : e[0]
      );
    }
    function m(e, t, a) {
      Symbol('JSCA_1155_1161');
      for (var o = 0, s = t.length; o < s; o++) n(e, t[o], a);
      return a;
    }
    function f(e, t, n, a, o) {
      Symbol('JSCA_1162_1175');
      for (var s, r = [], d = 0, l = e.length, p = null != t; d < l; d++)
        (s = e[d]) && (!n || n(s, a, o)) && (r.push(s), p && t.push(d));
      return r;
    }
    function J(e, t, n, a, s, r) {
      return (
        Symbol('JSCA_1176_1229'),
        a && !a[M] && (a = J(a)),
        s && !s[M] && (s = J(s, r)),
        o(function (o, r, d, l) {
          Symbol('JSCA_1183_1228');
          var p,
            _,
            c,
            u,
            C = [],
            S = [],
            A = r.length,
            h = o || m(t || '*', d.nodeType ? [d] : d, []),
            g = e && (o || !t) ? f(h, C, e, d, l) : h;
          if (
            (n
              ? ((u = s || (o ? e : A || a) ? [] : r), n(g, u, d, l))
              : (u = g),
            a)
          )
            for (p = f(u, S), a(p, [], d, l), _ = p.length; _--; )
              (c = p[_]) && (u[S[_]] = !(g[S[_]] = c));
          if (!o)
            (u = f(u === r ? u.splice(A, u.length) : u)),
              s ? s(null, r, u, l) : O.apply(r, u);
          else if (s || e) {
            if (s) {
              for (p = [], _ = u.length; _--; )
                (c = u[_]) && p.push((g[_] = c));
              s(null, (u = []), p, l);
            }
            for (_ = u.length; _--; )
              (c = u[_]) &&
                -1 < (p = s ? ue.call(o, c) : C[_]) &&
                (o[p] = !(r[p] = c));
          }
        })
      );
    }
    function y(e) {
      Symbol('JSCA_1230_1260');
      for (
        var t,
          n,
          a,
          o = e.length,
          s = w.relative[e[0].type],
          r = s || w.relative[' '],
          d = s ? 1 : 0,
          l = h(
            function (e) {
              return Symbol('JSCA_1231_1233'), e === t;
            },
            r,
            !0
          ),
          p = h(
            function (e) {
              return Symbol('JSCA_1233_1235'), -1 < ue.call(t, e);
            },
            r,
            !0
          ),
          _ = [
            function (e, n, a) {
              Symbol('JSCA_1235_1239');
              var o =
                (!s && (a || n != k)) ||
                ((t = n).nodeType ? l(e, n, a) : p(e, n, a));
              return (t = null), o;
            },
          ];
        d < o;
        d++
      )
        if ((n = w.relative[e[d].type])) _ = [h(g(_), n)];
        else {
          if (((n = w.filter[e[d].type].apply(null, e[d].matches)), n[M])) {
            for (a = ++d; a < o && !w.relative[e[a].type]; a++);
            return J(
              1 < d && g(_),
              1 < d &&
                A(
                  e
                    .slice(0, d - 1)
                    .concat({ value: ' ' === e[d - 2].type ? '*' : '' })
                ).replace(Ee, '$1'),
              n,
              d < a && y(e.slice(d, a)),
              a < o && y((e = e.slice(a))),
              a < o && A(e)
            );
          }
          _.push(n);
        }
      return g(_);
    }
    function x(e, t) {
      Symbol('JSCA_1261_1321');
      var n = 0 < t.length,
        a = 0 < e.length,
        i = function (o, s, r, d, l) {
          Symbol('JSCA_1262_1319');
          var p,
            _,
            c,
            C = 0,
            S = '0',
            A = o && [],
            h = [],
            g = k,
            m = o || (a && w.find.TAG('*', l)),
            J = (W += null == g ? 1 : Math.random() || 0.1),
            y = m.length;
          for (
            l && (k = s == N || s || l);
            S !== y && null != (p = m[S]);
            S++
          ) {
            if (a && p) {
              for (
                _ = 0, s || p.ownerDocument == N || (u(p), (r = !q));
                (c = e[_++]);

              )
                if (c(p, s || N, r)) {
                  O.call(d, p);
                  break;
                }
              l && (W = J);
            }
            n && ((p = !c && p) && C--, o && A.push(p));
          }
          if (((C += S), n && S !== C)) {
            for (_ = 0; (c = t[_++]); ) c(A, h, s, r);
            if (o) {
              if (0 < C) for (; S--; ) A[S] || h[S] || (h[S] = we.call(d));
              h = f(h);
            }
            O.apply(d, h),
              l && !o && 0 < h.length && 1 < C + t.length && Te.uniqueSort(d);
          }
          return l && ((W = J), (k = g)), A;
        };
      return n ? o(i) : i;
    }
    function b(e, t) {
      Symbol('JSCA_1322_1341');
      var n,
        a = [],
        o = [],
        s = F[e + ' '];
      if (!s) {
        for (t || (t = S(e)), n = t.length; n--; )
          (s = y(t[n])), s[M] ? a.push(s) : o.push(s);
        (s = F(e, x(o, a))), (s.selector = e);
      }
      return s;
    }
    function v(e, t, n, a) {
      Symbol('JSCA_1342_1377');
      var o,
        s,
        r,
        d,
        l,
        p = 'function' == typeof e && e,
        _ = !a && S((e = p.selector || e));
      if (((n = n || []), 1 === _.length)) {
        if (
          ((s = _[0] = _[0].slice(0)),
          2 < s.length &&
            'ID' === (r = s[0]).type &&
            9 === t.nodeType &&
            q &&
            w.relative[s[1].type])
        ) {
          if (((t = (w.find.ID(r.matches[0].replace(se, re), t) || [])[0]), !t))
            return n;
          p && (t = t.parentNode), (e = e.slice(s.shift().value.length));
        }
        for (
          o = te.needsContext.test(e) ? 0 : s.length;
          o-- && ((r = s[o]), !w.relative[(d = r.type)]);

        )
          if (
            (l = w.find[d]) &&
            (a = l(
              r.matches[0].replace(se, re),
              (ie.test(s[0].type) && c(t.parentNode)) || t
            ))
          ) {
            if ((s.splice(o, 1), (e = a.length && A(s)), !e))
              return O.apply(n, a), n;
            break;
          }
      }
      return (
        (p || b(e, _))(a, t, !q, n, !t || (ie.test(e) && c(t.parentNode)) || t),
        n
      );
    }
    Symbol('JSCA_328_1396');
    var T,
      w,
      k,
      D,
      E,
      N,
      L,
      q,
      H,
      P,
      O = qe,
      M = Te.expando,
      W = 0,
      R = 0,
      I = a(),
      B = a(),
      F = a(),
      U = a(),
      X = function (e, t) {
        return Symbol('JSCA_329_334'), e === t && (E = !0), 0;
      },
      $ =
        '(?:\\\\[\\da-fA-F]{1,6}' +
        De +
        '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      z =
        '\\[' +
        De +
        '*(' +
        $ +
        ')(?:' +
        De +
        '*([*^$|!~]?=)' +
        De +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        $ +
        '))|)' +
        De +
        '*\\]',
      V =
        ':(' +
        $ +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        z +
        ')*)|.*)\\)|)',
      Y = new RegExp(De + '+', 'g'),
      G = new RegExp('^' + De + '*,' + De + '*'),
      Q = new RegExp('^' + De + '*([>+~]|' + De + ')' + De + '*'),
      K = new RegExp(De + '|>'),
      Z = new RegExp(V),
      ee = new RegExp('^' + $ + '$'),
      te = {
        ID: new RegExp('^#(' + $ + ')'),
        CLASS: new RegExp('^\\.(' + $ + ')'),
        TAG: new RegExp('^(' + $ + '|[*])'),
        ATTR: new RegExp('^' + z),
        PSEUDO: new RegExp('^' + V),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            De +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            De +
            '*(?:([+-]|)' +
            De +
            '*(\\d+)|))' +
            De +
            '*\\)|)',
          'i'
        ),
        bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
        needsContext: new RegExp(
          '^' +
            De +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            De +
            '*((?:-\\d)?\\d*)' +
            De +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      ne = /^(?:input|select|textarea|button)$/i,
      ae = /^h\d$/i,
      oe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ie = /[+~]/,
      se = new RegExp(
        '\\\\[\\da-fA-F]{1,6}' + De + '?|\\\\([^\\r\\n\\f])',
        'g'
      ),
      re = function (e, t) {
        var n = String.fromCharCode;
        Symbol('JSCA_343_349');
        var a = '0x' + e.slice(1) - 65536;
        return t
          ? t
          : 0 > a
          ? n(a + 65536)
          : n(55296 | (a >> 10), 56320 | (1023 & a));
      },
      le = function () {
        Symbol('JSCA_349_351'), u();
      },
      _e = h(
        function (e) {
          return Symbol('JSCA_351_353'), !0 === e.disabled && d(e, 'fieldset');
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      O.apply((de = pe.call(Le.childNodes)), Le.childNodes),
        de[Le.childNodes.length].nodeType;
    } catch (t) {
      O = {
        apply: function (e, t) {
          Symbol('JSCA_367_369'), qe.apply(e, pe.call(t));
        },
        call: function (e) {
          Symbol('JSCA_370_372'), qe.apply(e, pe.call(arguments, 1));
        },
      };
    }
    for (T in ((n.matches = function (e, t) {
      return Symbol('JSCA_658_660'), n(e, null, null, t);
    }),
    (n.matchesSelector = function (e, t) {
      if (
        (Symbol('JSCA_661_674'), u(e), q && !U[t + ' '] && (!H || !H.test(t)))
      )
        try {
          var a = P.call(e, t);
          if (
            a ||
            me.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return a;
        } catch (n) {
          U(t, !0);
        }
      return 0 < n(t, N, null, [e]).length;
    }),
    (n.contains = function (e, t) {
      return (
        Symbol('JSCA_675_680'),
        (e.ownerDocument || e) != N && u(e),
        Te.contains(e, t)
      );
    }),
    (n.attr = function (e, t) {
      Symbol('JSCA_681_690'), (e.ownerDocument || e) != N && u(e);
      var n = w.attrHandle[t.toLowerCase()],
        a = n && Ae.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
      return void 0 === a ? e.getAttribute(t) : a;
    }),
    (n.error = function (e) {
      throw (
        (Symbol('JSCA_691_693'),
        new Error('Syntax error, unrecognized expression: ' + e))
      );
    }),
    (Te.uniqueSort = function (e) {
      Symbol('JSCA_694_711');
      var t,
        n = [],
        a = 0,
        o = 0;
      if (
        ((E = !me.sortStable),
        (D = !me.sortStable && pe.call(e, 0)),
        ke.call(e, X),
        E)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (a = n.push(o));
        for (; a--; ) je.call(e, n[a], 1);
      }
      return (D = null), e;
    }),
    (Te.fn.uniqueSort = function () {
      return (
        Symbol('JSCA_712_714'), this.pushStack(Te.uniqueSort(pe.apply(this)))
      );
    }),
    (w = Te.expr =
      {
        cacheLength: 50,
        createPseudo: o,
        match: te,
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
              (e[1] = e[1].replace(se, re)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(se, re)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              Symbol('JSCA_746_758'),
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (!e[3] && n.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && n.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            Symbol('JSCA_759_771');
            var t,
              n = !e[6] && e[2];
            return te.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    Z.test(n) &&
                    (t = S(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            Symbol('JSCA_774_781');
            var t = e.replace(se, re).toLowerCase();
            return '*' === e
              ? function () {
                  return Symbol('JSCA_776_778'), !0;
                }
              : function (e) {
                  return Symbol('JSCA_778_780'), d(e, t);
                };
          },
          CLASS: function (e) {
            Symbol('JSCA_782_787');
            var t = I[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + De + ')' + e + '(' + De + '|$)')) &&
                I(e, function (e) {
                  return (
                    Symbol('JSCA_784_786'),
                    t.test(
                      ('string' == typeof e.className && e.className) ||
                        ('undefined' != typeof e.getAttribute &&
                          e.getAttribute('class')) ||
                        ''
                    )
                  );
                }))
            );
          },
          ATTR: function (e, t, a) {
            return (
              Symbol('JSCA_788_821'),
              function (o) {
                Symbol('JSCA_789_820');
                var i = n.attr(o, e);
                return null == i
                  ? '!=' === t
                  : !t ||
                      ((i += ''),
                      '=' === t
                        ? i === a
                        : '!=' === t
                        ? i !== a
                        : '^=' === t
                        ? a && 0 === i.indexOf(a)
                        : '*=' === t
                        ? a && -1 < i.indexOf(a)
                        : '$=' === t
                        ? a && i.slice(-a.length) === a
                        : '~=' === t
                        ? -1 < (' ' + i.replace(Y, ' ') + ' ').indexOf(a)
                        : '|=' === t &&
                          (i === a || i.slice(0, a.length + 1) === a + '-'));
              }
            );
          },
          CHILD: function (e, t, n, a, o) {
            Symbol('JSCA_822_879');
            var i = 'nth' !== e.slice(0, 3),
              s = 'last' !== e.slice(-4),
              r = 'of-type' === t;
            return 1 === a && 0 === o
              ? function (e) {
                  return Symbol('JSCA_824_826'), !!e.parentNode;
                }
              : function (t, n, l) {
                  Symbol('JSCA_826_878');
                  var p,
                    _,
                    c,
                    u,
                    C,
                    S = i === s ? 'previousSibling' : 'nextSibling',
                    A = t.parentNode,
                    h = r && t.nodeName.toLowerCase(),
                    g = !l && !r,
                    m = !1;
                  if (A) {
                    if (i) {
                      for (; S; ) {
                        for (c = t; (c = c[S]); )
                          if (r ? d(c, h) : 1 === c.nodeType) return !1;
                        C = S = 'only' === e && !C && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((C = [s ? A.firstChild : A.lastChild]), s && g)) {
                      for (
                        _ = A[M] || (A[M] = {}),
                          p = _[e] || [],
                          u = p[0] === W && p[1],
                          m = u && p[2],
                          c = u && A.childNodes[u];
                        (c = (++u && c && c[S]) || (m = u = 0) || C.pop());

                      )
                        if (1 === c.nodeType && ++m && c === t) {
                          _[e] = [W, u, m];
                          break;
                        }
                    } else if (
                      (g &&
                        ((_ = t[M] || (t[M] = {})),
                        (p = _[e] || []),
                        (u = p[0] === W && p[1]),
                        (m = u)),
                      !1 === m)
                    )
                      for (
                        ;
                        (c = (++u && c && c[S]) || (m = u = 0) || C.pop()) &&
                        !(
                          (r ? d(c, h) : 1 === c.nodeType) &&
                          ++m &&
                          (g && ((_ = c[M] || (c[M] = {})), (_[e] = [W, m])),
                          c === t)
                        );

                      );
                    return (m -= o), m === a || (0 == m % a && 0 <= m / a);
                  }
                };
          },
          PSEUDO: function (e, t) {
            Symbol('JSCA_880_898');
            var a,
              s =
                w.pseudos[e] ||
                w.setFilters[e.toLowerCase()] ||
                n.error('unsupported pseudo: ' + e);
            return s[M]
              ? s(t)
              : 1 < s.length
              ? ((a = [e, e, '', t]),
                w.setFilters.hasOwnProperty(e.toLowerCase())
                  ? o(function (e, n) {
                      Symbol('JSCA_887_893');
                      for (var a, o = s(e, t), r = o.length; r--; )
                        (a = ue.call(e, o[r])), (e[a] = !(n[a] = o[r]));
                    })
                  : function (e) {
                      return Symbol('JSCA_893_895'), s(e, 0, a);
                    })
              : s;
          },
        },
        pseudos: {
          not: o(function (e) {
            Symbol('JSCA_901_916');
            var t = [],
              n = [],
              a = b(e.replace(Ee, '$1'));
            return a[M]
              ? o(function (e, t, n, o) {
                  Symbol('JSCA_903_910');
                  for (var s, r = a(e, null, o, []), d = e.length; d--; )
                    (s = r[d]) && (e[d] = !(t[d] = s));
                })
              : function (e, o, i) {
                  return (
                    Symbol('JSCA_910_915'),
                    (t[0] = e),
                    a(t, null, i, n),
                    (t[0] = null),
                    !n.pop()
                  );
                };
          }),
          has: o(function (e) {
            return (
              Symbol('JSCA_917_921'),
              function (t) {
                return Symbol('JSCA_918_920'), 0 < n(e, t).length;
              }
            );
          }),
          contains: o(function (e) {
            return (
              Symbol('JSCA_922_927'),
              (e = e.replace(se, re)),
              function (t) {
                return (
                  Symbol('JSCA_924_926'),
                  -1 < (t.textContent || Te.text(t)).indexOf(e)
                );
              }
            );
          }),
          lang: o(function (e) {
            return (
              Symbol('JSCA_928_943'),
              ee.test(e || '') || n.error('unsupported lang: ' + e),
              (e = e.replace(se, re).toLowerCase()),
              function (t) {
                Symbol('JSCA_933_942');
                var n;
                do
                  if (
                    (n = q
                      ? t.lang
                      : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                  )
                    return (
                      (n = n.toLowerCase()), n === e || 0 === n.indexOf(e + '-')
                    );
                while ((t = t.parentNode) && 1 === t.nodeType);
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
            return Symbol('JSCA_948_950'), e === L;
          },
          focus: function (e) {
            return (
              Symbol('JSCA_951_953'),
              e === t() && N.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: p(!1),
          disabled: p(!0),
          checked: function (e) {
            return (
              Symbol('JSCA_956_958'),
              (d(e, 'input') && !!e.checked) || (d(e, 'option') && !!e.selected)
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
              if (6 > e.nodeType) return !1;
            return !0;
          },
          parent: function (e) {
            return Symbol('JSCA_973_975'), !w.pseudos.empty(e);
          },
          header: function (e) {
            return Symbol('JSCA_976_978'), ae.test(e.nodeName);
          },
          input: function (e) {
            return Symbol('JSCA_979_981'), ne.test(e.nodeName);
          },
          button: function (e) {
            return (
              Symbol('JSCA_982_984'),
              (d(e, 'input') && 'button' === e.type) || d(e, 'button')
            );
          },
          text: function (e) {
            Symbol('JSCA_985_988');
            var t;
            return (
              d(e, 'input') &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) ||
                'text' === t.toLowerCase())
            );
          },
          first: _(function () {
            return Symbol('JSCA_989_991'), [0];
          }),
          last: _(function (e, t) {
            return Symbol('JSCA_992_994'), [t - 1];
          }),
          eq: _(function (e, t, n) {
            return Symbol('JSCA_995_997'), [0 > n ? n + t : n];
          }),
          even: _(function (e, t) {
            Symbol('JSCA_998_1004');
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: _(function (e, t) {
            Symbol('JSCA_1005_1011');
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: _(function (e, t, n) {
            Symbol('JSCA_1012_1025');
            var a;
            for (a = 0 > n ? n + t : n > t ? t : n; 0 <= --a; ) e.push(a);
            return e;
          }),
          gt: _(function (e, t, n) {
            Symbol('JSCA_1026_1032');
            for (var a = 0 > n ? n + t : n; ++a < t; ) e.push(a);
            return e;
          }),
        },
      }),
    (w.pseudos.nth = w.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      w.pseudos[T] = r(T);
    for (T in { submit: !0, reset: !0 }) w.pseudos[T] = l(T);
    (C.prototype = w.filters = w.pseudos),
      (w.setFilters = new C()),
      (me.sortStable = M.split('').sort(X).join('') === M),
      u(),
      (me.sortDetached = s(function (e) {
        return (
          Symbol('JSCA_1380_1382'),
          1 & e.compareDocumentPosition(N.createElement('fieldset'))
        );
      })),
      (Te.find = n),
      (Te.expr[':'] = Te.expr.pseudos),
      (Te.unique = Te.uniqueSort),
      (n.compile = b),
      (n.select = v),
      (n.setDocument = u),
      (n.tokenize = S),
      (n.escape = Te.escapeSelector),
      (n.getText = Te.text),
      (n.isXML = Te.isXMLDoc),
      (n.selectors = Te.expr),
      (n.support = Te.support),
      (n.uniqueSort = Te.uniqueSort);
  })();
  var He = function (e, t, n) {
      Symbol('JSCA_1397_1408');
      for (var a = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && Te(e).is(n)) break;
          a.push(e);
        }
      return a;
    },
    Pe = function (e, t) {
      Symbol('JSCA_1409_1417');
      for (var a = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && a.push(e);
      return a;
    },
    Oe = Te.expr.match.needsContext,
    Me = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  (Te.filter = function (e, t, n) {
    Symbol('JSCA_1438_1449');
    var a = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === a.nodeType
        ? Te.find.matchesSelector(a, e)
          ? [a]
          : []
        : Te.find.matches(
            e,
            Te.grep(t, function (e) {
              return Symbol('JSCA_1446_1448'), 1 === e.nodeType;
            })
          )
    );
  }),
    Te.fn.extend({
      find: function (e) {
        Symbol('JSCA_1451_1467');
        var t,
          n,
          a = this.length,
          o = this;
        if ('string' != typeof e)
          return this.pushStack(
            Te(e).filter(function () {
              for (Symbol('JSCA_1454_1460'), t = 0; t < a; t++)
                if (Te.contains(o[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < a; t++) Te.find(e, o[t], n);
        return 1 < a ? Te.uniqueSort(n) : n;
      },
      filter: function (e) {
        return Symbol('JSCA_1468_1470'), this.pushStack(p(this, e || [], !1));
      },
      not: function (e) {
        return Symbol('JSCA_1471_1473'), this.pushStack(p(this, e || [], !0));
      },
      is: function (e) {
        return (
          Symbol('JSCA_1474_1476'),
          !!p(this, 'string' == typeof e && Oe.test(e) ? Te(e) : e || [], !1)
            .length
        );
      },
    });
  var We,
    Re = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    Ie = (Te.fn.init = function (e, t, n) {
      Symbol('JSCA_1478_1525');
      var a, o;
      if (!e) return this;
      if (((n = n || We), 'string' == typeof e)) {
        if (
          ((a =
            '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
              ? [null, e, null]
              : Re.exec(e)),
          a && (a[1] || !t))
        ) {
          if (a[1]) {
            if (
              ((t = t instanceof Te ? t[0] : t),
              Te.merge(
                this,
                Te.parseHTML(
                  a[1],
                  t && t.nodeType ? t.ownerDocument || t : ye,
                  !0
                )
              ),
              Me.test(a[1]) && Te.isPlainObject(t))
            )
              for (a in t) fe(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
            return this;
          }
          return (
            (o = ye.getElementById(a[2])),
            o && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : fe(e)
        ? void 0 === n.ready
          ? e(Te)
          : n.ready(e)
        : Te.makeArray(e, this);
    });
  (Ie.prototype = Te.fn), (We = Te(ye));
  var Be = /^(?:parents|prev(?:Until|All))/,
    Fe = { children: !0, contents: !0, next: !0, prev: !0 };
  Te.fn.extend({
    has: function (e) {
      Symbol('JSCA_1535_1545');
      var t = Te(e, this),
        n = t.length;
      return this.filter(function () {
        Symbol('JSCA_1537_1544');
        for (var e = 0; e < n; e++) if (Te.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      Symbol('JSCA_1546_1559');
      var n,
        a = 0,
        o = this.length,
        s = [],
        r = 'string' != typeof e && Te(e);
      if (!Oe.test(e))
        for (; a < o; a++)
          for (n = this[a]; n && n !== t; n = n.parentNode)
            if (
              11 > n.nodeType &&
              (r
                ? -1 < r.index(n)
                : 1 === n.nodeType && Te.find.matchesSelector(n, e))
            ) {
              s.push(n);
              break;
            }
      return this.pushStack(1 < s.length ? Te.uniqueSort(s) : s);
    },
    index: function (e) {
      return (
        Symbol('JSCA_1560_1568'),
        e
          ? 'string' == typeof e
            ? ue.call(Te(e), this[0])
            : ue.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1
      );
    },
    add: function (e, t) {
      return (
        Symbol('JSCA_1569_1571'),
        this.pushStack(Te.uniqueSort(Te.merge(this.get(), Te(e, t))))
      );
    },
    addBack: function (e) {
      return (
        Symbol('JSCA_1572_1574'),
        this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      );
    },
  }),
    Te.each(
      {
        parent: function (e) {
          Symbol('JSCA_1581_1584');
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return Symbol('JSCA_1585_1587'), He(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return Symbol('JSCA_1588_1590'), He(e, 'parentNode', n);
        },
        next: function (e) {
          return Symbol('JSCA_1591_1593'), _(e, 'nextSibling');
        },
        prev: function (e) {
          return Symbol('JSCA_1594_1596'), _(e, 'previousSibling');
        },
        nextAll: function (e) {
          return Symbol('JSCA_1597_1599'), He(e, 'nextSibling');
        },
        prevAll: function (e) {
          return Symbol('JSCA_1600_1602'), He(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return Symbol('JSCA_1603_1605'), He(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return Symbol('JSCA_1606_1608'), He(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return (
            Symbol('JSCA_1609_1611'), Pe((e.parentNode || {}).firstChild, e)
          );
        },
        children: function (e) {
          return Symbol('JSCA_1612_1614'), Pe(e.firstChild);
        },
        contents: function (e) {
          return (Symbol('JSCA_1615_1623'),
          null != e.contentDocument && le(e.contentDocument))
            ? e.contentDocument
            : (d(e, 'template') && (e = e.content || e),
              Te.merge([], e.childNodes));
        },
      },
      function (e, t) {
        Symbol('JSCA_1624_1643'),
          (Te.fn[e] = function (n, a) {
            Symbol('JSCA_1625_1642');
            var o = Te.map(this, t, n);
            return (
              'Until' !== e.slice(-5) && (a = n),
              a && 'string' == typeof a && (o = Te.filter(a, o)),
              1 < this.length &&
                (!Fe[e] && Te.uniqueSort(o), Be.test(e) && o.reverse()),
              this.pushStack(o)
            );
          });
      }
    );
  var Ue = /[^\x20\t\r\n\f]+/g;
  (Te.Callbacks = function (e) {
    Symbol('JSCA_1652_1760'),
      (e = 'string' == typeof e ? c(e) : Te.extend({}, e));
    var t,
      n,
      a,
      o,
      i = [],
      r = [],
      d = -1,
      l = function () {
        for (
          Symbol('JSCA_1654_1677'), o = o || e.once, a = t = !0;
          r.length;
          d = -1
        )
          for (n = r.shift(); ++d < i.length; )
            !1 === i[d].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((d = i.length), (n = !1));
        e.memory || (n = !1), (t = !1), o && (n ? (i = []) : (i = ''));
      },
      p = {
        add: function () {
          return (
            Symbol('JSCA_1678_1700'),
            i &&
              (n && !t && ((d = i.length - 1), r.push(n)),
              (function n(t) {
                Symbol('JSCA_1684_1694'),
                  Te.each(t, function (t, a) {
                    Symbol('JSCA_1685_1693'),
                      fe(a)
                        ? (!e.unique || !p.has(a)) && i.push(a)
                        : a && a.length && 'string' !== s(a) && n(a);
                  });
              })(arguments),
              n && !t && l()),
            this
          );
        },
        remove: function () {
          return (
            Symbol('JSCA_1701_1712'),
            Te.each(arguments, function (e, t) {
              Symbol('JSCA_1702_1710');
              for (var n; -1 < (n = Te.inArray(t, i, n)); )
                i.splice(n, 1), n <= d && d--;
            }),
            this
          );
        },
        has: function (e) {
          return (
            Symbol('JSCA_1713_1715'), e ? -1 < Te.inArray(e, i) : 0 < i.length
          );
        },
        empty: function () {
          return Symbol('JSCA_1716_1721'), i && (i = []), this;
        },
        disable: function () {
          return Symbol('JSCA_1722_1726'), (o = r = []), (i = n = ''), this;
        },
        disabled: function () {
          return Symbol('JSCA_1727_1729'), !i;
        },
        lock: function () {
          return (
            Symbol('JSCA_1730_1736'), (o = r = []), n || t || (i = n = ''), this
          );
        },
        locked: function () {
          return Symbol('JSCA_1737_1739'), !!o;
        },
        fireWith: function (e, n) {
          return (
            Symbol('JSCA_1740_1750'),
            o ||
              ((n = n || []),
              (n = [e, n.slice ? n.slice() : n]),
              r.push(n),
              !t && l()),
            this
          );
        },
        fire: function () {
          return Symbol('JSCA_1751_1754'), p.fireWith(this, arguments), this;
        },
        fired: function () {
          return Symbol('JSCA_1755_1757'), !!a;
        },
      };
    return p;
  }),
    Te.extend({
      Deferred: function (t) {
        Symbol('JSCA_1782_1897');
        var n = [
            [
              'notify',
              'progress',
              Te.Callbacks('memory'),
              Te.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              Te.Callbacks('once memory'),
              Te.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              Te.Callbacks('once memory'),
              Te.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          a = 'pending',
          o = {
            state: function () {
              return Symbol('JSCA_1784_1786'), a;
            },
            always: function () {
              return (
                Symbol('JSCA_1787_1790'),
                s.done(arguments).fail(arguments),
                this
              );
            },
            catch: function (e) {
              return Symbol('JSCA_1791_1793'), o.then(null, e);
            },
            pipe: function () {
              Symbol('JSCA_1794_1810');
              var e = arguments;
              return Te.Deferred(function (t) {
                Symbol('JSCA_1796_1809'),
                  Te.each(n, function (n, a) {
                    Symbol('JSCA_1797_1807');
                    var o = fe(e[a[4]]) && e[a[4]];
                    s[a[1]](function () {
                      Symbol('JSCA_1799_1806');
                      var e = o && o.apply(this, arguments);
                      e && fe(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[a[0] + 'With'](this, o ? [e] : arguments);
                    });
                  }),
                  (e = null);
              }).promise();
            },
            then: function (t, a, o) {
              function i(t, n, a, o) {
                return (
                  Symbol('JSCA_1813_1866'),
                  function () {
                    Symbol('JSCA_1814_1865');
                    var r = this,
                      d = arguments,
                      l = function () {
                        Symbol('JSCA_1815_1839');
                        var e, l;
                        if (!(t < s)) {
                          if (((e = a.apply(r, d)), e === n.promise()))
                            throw new TypeError('Thenable self-resolution');
                          (l =
                            e &&
                            ('object' == typeof e || 'function' == typeof e) &&
                            e.then),
                            fe(l)
                              ? o
                                ? l.call(e, i(s, n, u, o), i(s, n, C, o))
                                : (s++,
                                  l.call(
                                    e,
                                    i(s, n, u, o),
                                    i(s, n, C, o),
                                    i(s, n, u, n.notifyWith)
                                  ))
                              : (a !== u && ((r = void 0), (d = [e])),
                                (o || n.resolveWith)(r, d));
                        }
                      },
                      p = o
                        ? l
                        : function () {
                            Symbol('JSCA_1839_1854');
                            try {
                              l();
                            } catch (o) {
                              Te.Deferred.exceptionHook &&
                                Te.Deferred.exceptionHook(o, p.error),
                                t + 1 >= s &&
                                  (a !== C && ((r = void 0), (d = [o])),
                                  n.rejectWith(r, d));
                            }
                          };
                    t
                      ? p()
                      : (Te.Deferred.getErrorHook
                          ? (p.error = Te.Deferred.getErrorHook())
                          : Te.Deferred.getStackHook &&
                            (p.error = Te.Deferred.getStackHook()),
                        e.setTimeout(p));
                  }
                );
              }
              Symbol('JSCA_1811_1872');
              var s = 0;
              return Te.Deferred(function (e) {
                Symbol('JSCA_1867_1871'),
                  n[0][3].add(i(0, e, fe(o) ? o : u, e.notifyWith)),
                  n[1][3].add(i(0, e, fe(t) ? t : u)),
                  n[2][3].add(i(0, e, fe(a) ? a : C));
              }).promise();
            },
            promise: function (e) {
              return Symbol('JSCA_1873_1875'), null == e ? o : Te.extend(e, o);
            },
          },
          s = {};
        return (
          Te.each(n, function (e, t) {
            Symbol('JSCA_1877_1891');
            var i = t[2],
              r = t[5];
            (o[t[1]] = i.add),
              r &&
                i.add(
                  function () {
                    Symbol('JSCA_1881_1883'), (a = r);
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              i.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  Symbol('JSCA_1886_1889'),
                  s[t[0] + 'With'](this === s ? void 0 : this, arguments),
                  this
                );
              }),
              (s[t[0] + 'With'] = i.fireWith);
          }),
          o.promise(s),
          t && t.call(s, s),
          s
        );
      },
      when: function (e) {
        Symbol('JSCA_1898_1918');
        var t = arguments.length,
          n = t,
          a = Array(n),
          o = pe.call(arguments),
          s = Te.Deferred(),
          r = function (e) {
            return (
              Symbol('JSCA_1899_1907'),
              function (n) {
                Symbol('JSCA_1900_1906'),
                  (a[e] = this),
                  (o[e] = 1 < arguments.length ? pe.call(arguments) : n),
                  --t || s.resolveWith(a, o);
              }
            );
          };
        if (
          1 >= t &&
          (S(e, s.done(r(n)).resolve, s.reject, !t),
          'pending' === s.state() || fe(o[n] && o[n].then))
        )
          return s.then();
        for (; n--; ) S(o[n], r(n), s.reject);
        return s.promise();
      },
    });
  var Xe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (Te.Deferred.exceptionHook = function (t, n) {
    Symbol('JSCA_1921_1925'),
      e.console &&
        e.console.warn &&
        t &&
        Xe.test(t.name) &&
        e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
  }),
    (Te.readyException = function (t) {
      Symbol('JSCA_1926_1930'),
        e.setTimeout(function () {
          throw (Symbol('JSCA_1927_1929'), t);
        });
    });
  var $e = Te.Deferred();
  (Te.fn.ready = function (e) {
    return (
      Symbol('JSCA_1932_1937'),
      $e.then(e).catch(function (e) {
        Symbol('JSCA_1933_1935'), Te.readyException(e);
      }),
      this
    );
  }),
    Te.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (Symbol('JSCA_1941_1950'), !0 === e ? !--Te.readyWait : !Te.isReady) &&
          ((Te.isReady = !0),
          (!0 !== e && 0 < --Te.readyWait) || $e.resolveWith(ye, [Te]));
      },
    }),
    (Te.ready.then = $e.then),
    'complete' !== ye.readyState &&
    ('loading' === ye.readyState || ye.documentElement.doScroll)
      ? (ye.addEventListener('DOMContentLoaded', A),
        e.addEventListener('load', A))
      : e.setTimeout(Te.ready);
  var ze = function (e, t, n, a, o, r, d) {
      Symbol('JSCA_1964_2000');
      var l = 0,
        p = e.length,
        _ = null == n;
      if ('object' === s(n))
        for (l in ((o = !0), n)) ze(e, t, l, n[l], !0, r, d);
      else if (
        void 0 !== a &&
        ((o = !0),
        fe(a) || (d = !0),
        _ &&
          (d
            ? (t.call(e, a), (t = null))
            : ((_ = t),
              (t = function (e, t, n) {
                return Symbol('JSCA_1982_1984'), _.call(Te(e), n);
              }))),
        t)
      )
        for (; l < p; l++) t(e[l], n, d ? a : a.call(e[l], l, t(e[l], n)));
      return o ? e : _ ? t.call(e) : p ? t(e[0], n) : r;
    },
    Ve = /^-ms-/,
    Ye = /-([a-z])/g,
    Ge = function (e) {
      return (
        Symbol('JSCA_2008_2010'),
        1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      );
    };
  (m.uid = 1),
    (m.prototype = {
      cache: function (e) {
        Symbol('JSCA_2016_2032');
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Ge(e) &&
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
        var a,
          o = this.cache(e);
        if ('string' == typeof t) o[g(t)] = n;
        else for (a in t) o[g(a)] = t[a];
        return o;
      },
      get: function (e, t) {
        return (
          Symbol('JSCA_2044_2046'),
          void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][g(t)]
        );
      },
      access: function (e, t, n) {
        return (Symbol('JSCA_2047_2053'),
        void 0 === t || (t && 'string' == typeof t && void 0 === n))
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 === n ? t : n);
      },
      remove: function (e, t) {
        Symbol('JSCA_2054_2078');
        var n,
          a = e[this.expando];
        if (void 0 !== a) {
          if (void 0 !== t)
            for (
              Array.isArray(t)
                ? (t = t.map(g))
                : ((t = g(t)), (t = (t in a) ? [t] : t.match(Ue) || [])),
                n = t.length;
              n--;

            )
              delete a[t[n]];
          (void 0 === t || Te.isEmptyObject(a)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        Symbol('JSCA_2079_2082');
        var t = e[this.expando];
        return void 0 !== t && !Te.isEmptyObject(t);
      },
    });
  var Qe = new m(),
    Ke = new m(),
    Ze = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    et = /[A-Z]/g;
  Te.extend({
    hasData: function (e) {
      return Symbol('JSCA_2122_2124'), Ke.hasData(e) || Qe.hasData(e);
    },
    data: function (e, t, n) {
      return Symbol('JSCA_2125_2127'), Ke.access(e, t, n);
    },
    removeData: function (e, t) {
      Symbol('JSCA_2128_2130'), Ke.remove(e, t);
    },
    _data: function (e, t, n) {
      return Symbol('JSCA_2131_2133'), Qe.access(e, t, n);
    },
    _removeData: function (e, t) {
      Symbol('JSCA_2134_2136'), Qe.remove(e, t);
    },
  }),
    Te.fn.extend({
      data: function (e, t) {
        Symbol('JSCA_2139_2182');
        var n,
          a,
          o,
          s = this[0],
          r = s && s.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((o = Ke.get(s)), 1 === s.nodeType && !Qe.get(s, 'hasDataAttrs'))
          ) {
            for (n = r.length; n--; )
              r[n] &&
                ((a = r[n].name),
                0 === a.indexOf('data-') &&
                  ((a = g(a.slice(5))), J(s, a, o[a])));
            Qe.set(s, 'hasDataAttrs', !0);
          }
          return o;
        }
        return 'object' == typeof e
          ? this.each(function () {
              Symbol('JSCA_2161_2163'), Ke.set(this, e);
            })
          : ze(
              this,
              function (t) {
                Symbol('JSCA_2165_2181');
                var n;
                return s && void 0 === t
                  ? ((n = Ke.get(s, e)), void 0 !== n)
                    ? n
                    : ((n = J(s, e)), void 0 === n ? void 0 : n)
                  : void this.each(function () {
                      Symbol('JSCA_2178_2180'), Ke.set(this, e, t);
                    });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return (
          Symbol('JSCA_2183_2187'),
          this.each(function () {
            Symbol('JSCA_2184_2186'), Ke.remove(this, e);
          })
        );
      },
    }),
    Te.extend({
      queue: function (e, t, n) {
        Symbol('JSCA_2190_2204');
        var a;
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (a = Qe.get(e, t)),
            n &&
              (!a || Array.isArray(n)
                ? (a = Qe.access(e, t, Te.makeArray(n)))
                : a.push(n)),
            a || []
          );
      },
      dequeue: function (e, t) {
        Symbol('JSCA_2205_2224'), (t = t || 'fx');
        var n = Te.queue(e, t),
          a = n.length,
          o = n.shift(),
          i = Te._queueHooks(e, t),
          s = function () {
            Symbol('JSCA_2207_2209'), Te.dequeue(e, t);
          };
        'inprogress' === o && ((o = n.shift()), a--),
          o &&
            ('fx' === t && n.unshift('inprogress'),
            delete i.stop,
            o.call(e, s, i)),
          !a && i && i.empty.fire();
      },
      _queueHooks: function (e, t) {
        Symbol('JSCA_2225_2232');
        var n = t + 'queueHooks';
        return (
          Qe.get(e, n) ||
          Qe.access(e, n, {
            empty: Te.Callbacks('once memory').add(function () {
              Symbol('JSCA_2228_2230'), Qe.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    Te.fn.extend({
      queue: function (e, t) {
        Symbol('JSCA_2235_2252');
        var n = 2;
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? Te.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                Symbol('JSCA_2245_2251');
                var n = Te.queue(this, e, t);
                Te._queueHooks(this, e),
                  'fx' === e && 'inprogress' !== n[0] && Te.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return (
          Symbol('JSCA_2253_2257'),
          this.each(function () {
            Symbol('JSCA_2254_2256'), Te.dequeue(this, e);
          })
        );
      },
      clearQueue: function (e) {
        return Symbol('JSCA_2258_2260'), this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        Symbol('JSCA_2261_2281');
        var n,
          a = 1,
          o = Te.Deferred(),
          s = this,
          r = this.length,
          d = function () {
            Symbol('JSCA_2262_2266'), --a || o.resolveWith(s, [s]);
          };
        for (
          'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
          r--;

        )
          (n = Qe.get(s[r], e + 'queueHooks')),
            n && n.empty && (a++, n.empty.add(d));
        return d(), o.promise(t);
      },
    });
  var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    nt = new RegExp('^(?:([+-])=|)(' + tt + ')([a-z%]*)$', 'i'),
    at = ['Top', 'Right', 'Bottom', 'Left'],
    ot = ye.documentElement,
    it = function (e) {
      return Symbol('JSCA_2287_2289'), Te.contains(e.ownerDocument, e);
    },
    st = { composed: !0 };
  ot.getRootNode &&
    (it = function (e) {
      return (
        Symbol('JSCA_2293_2295'),
        Te.contains(e.ownerDocument, e) || e.getRootNode(st) === e.ownerDocument
      );
    });
  var rt = function (e, t) {
      return (
        Symbol('JSCA_2297_2300'),
        (e = t || e),
        'none' === e.style.display ||
          ('' === e.style.display && it(e) && 'none' === Te.css(e, 'display'))
      );
    },
    dt = {};
  Te.fn.extend({
    show: function () {
      return Symbol('JSCA_2381_2383'), b(this, !0);
    },
    hide: function () {
      return Symbol('JSCA_2384_2386'), b(this);
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
                rt(this) ? Te(this).show() : Te(this).hide();
            })
      );
    },
  });
  var lt = /^(?:checkbox|radio)$/i,
    pt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    _t = /^$|^module$|\/(?:java|ecma)script/i;
  (function () {
    Symbol('JSCA_2403_2414');
    var e = ye.createDocumentFragment(),
      t = e.appendChild(ye.createElement('div')),
      n = ye.createElement('input');
    n.setAttribute('type', 'radio'),
      n.setAttribute('checked', 'checked'),
      n.setAttribute('name', 't'),
      t.appendChild(n),
      (me.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (t.innerHTML = '<textarea>x</textarea>'),
      (me.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
      (t.innerHTML = '<option></option>'),
      (me.option = !!t.lastChild);
  })();
  var ct = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', ''],
  };
  (ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead),
    (ct.th = ct.td),
    me.option ||
      (ct.optgroup = ct.option =
        [1, "<select multiple='multiple'>", '</select>']);
  var ut = /<|&#?\w+;/,
    Ct = /^([^.]*)(?:\.(.+)|)/;
  (Te.event = {
    global: {},
    add: function (n, a, o, i, s) {
      Symbol('JSCA_2548_2616');
      var r,
        d,
        l,
        p,
        _,
        e,
        c,
        u,
        C,
        S,
        A,
        h = Qe.get(n);
      if (Ge(n))
        for (
          o.handler && ((r = o), (o = r.handler), (s = r.selector)),
            s && Te.find.matchesSelector(ot, s),
            o.guid || (o.guid = Te.guid++),
            (p = h.events) || (p = h.events = Object.create(null)),
            (d = h.handle) ||
              (d = h.handle =
                function (t) {
                  return (
                    Symbol('JSCA_2568_2570'),
                    'undefined' != typeof Te && Te.event.triggered !== t.type
                      ? Te.event.dispatch.apply(n, arguments)
                      : void 0
                  );
                }),
            a = (a || '').match(Ue) || [''],
            _ = a.length;
          _--;

        )
          ((l = Ct.exec(a[_]) || []),
          (C = A = l[1]),
          (S = (l[2] || '').split('.').sort()),
          !!C) &&
            ((c = Te.event.special[C] || {}),
            (C = (s ? c.delegateType : c.bindType) || C),
            (c = Te.event.special[C] || {}),
            (e = Te.extend(
              {
                type: C,
                origType: A,
                data: i,
                handler: o,
                guid: o.guid,
                selector: s,
                needsContext: s && Te.expr.match.needsContext.test(s),
                namespace: S.join('.'),
              },
              r
            )),
            (u = p[C]) ||
              ((u = p[C] = []),
              (u.delegateCount = 0),
              (!c.setup || !1 === c.setup.call(n, i, S, d)) &&
                n.addEventListener &&
                n.addEventListener(C, d)),
            c.add &&
              (c.add.call(n, e), !e.handler.guid && (e.handler.guid = o.guid)),
            s ? u.splice(u.delegateCount++, 0, e) : u.push(e),
            (Te.event.global[C] = !0));
    },
    remove: function (e, n, a, o, i) {
      Symbol('JSCA_2617_2661');
      var s,
        r,
        d,
        l,
        p,
        _,
        c,
        u,
        C,
        S,
        A,
        h = Qe.hasData(e) && Qe.get(e);
      if (h && (l = h.events)) {
        for (n = (n || '').match(Ue) || [''], p = n.length; p--; ) {
          if (
            ((d = Ct.exec(n[p]) || []),
            (C = A = d[1]),
            (S = (d[2] || '').split('.').sort()),
            !C)
          ) {
            for (C in l) Te.event.remove(e, C + n[p], a, o, !0);
            continue;
          }
          for (
            c = Te.event.special[C] || {},
              C = (o ? c.delegateType : c.bindType) || C,
              u = l[C] || [],
              d =
                d[2] &&
                new RegExp('(^|\\.)' + S.join('\\.(?:.*\\.|)') + '(\\.|$)'),
              r = s = u.length;
            s--;

          )
            (_ = u[s]),
              (i || A === _.origType) &&
                (!a || a.guid === _.guid) &&
                (!d || d.test(_.namespace)) &&
                (!o || o === _.selector || ('**' === o && _.selector)) &&
                (u.splice(s, 1),
                _.selector && u.delegateCount--,
                c.remove && c.remove.call(e, _));
          r &&
            !u.length &&
            ((!c.teardown || !1 === c.teardown.call(e, S, h.handle)) &&
              Te.removeEvent(e, C, h.handle),
            delete l[C]);
        }
        Te.isEmptyObject(l) && Qe.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      Symbol('JSCA_2662_2695');
      var t,
        n,
        a,
        o,
        s,
        r,
        d = Array(arguments.length),
        l = Te.event.fix(e),
        p = (Qe.get(this, 'events') || Object.create(null))[l.type] || [],
        _ = Te.event.special[l.type] || {};
      for (d[0] = l, t = 1; t < arguments.length; t++) d[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !(_.preDispatch && !1 === _.preDispatch.call(this, l)))
      ) {
        for (
          r = Te.event.handlers.call(this, l, p), t = 0;
          (o = r[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = o.elem, n = 0;
            (s = o.handlers[n++]) && !l.isImmediatePropagationStopped();

          )
            (!l.rnamespace ||
              !1 === s.namespace ||
              l.rnamespace.test(s.namespace)) &&
              ((l.handleObj = s),
              (l.data = s.data),
              (a = (
                (Te.event.special[s.origType] || {}).handle || s.handler
              ).apply(o.elem, d)),
              void 0 !== a &&
                !1 === (l.result = a) &&
                (l.preventDefault(), l.stopPropagation()));
        return _.postDispatch && _.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      Symbol('JSCA_2696_2730');
      var n,
        a,
        o,
        s,
        r,
        d = [],
        l = t.delegateCount,
        p = e.target;
      if (l && p.nodeType && !('click' === e.type && 1 <= e.button))
        for (; p !== this; p = p.parentNode || this)
          if (1 === p.nodeType && ('click' !== e.type || !0 !== p.disabled)) {
            for (s = [], r = {}, n = 0; n < l; n++)
              (a = t[n]),
                (o = a.selector + ' '),
                void 0 === r[o] &&
                  (r[o] = a.needsContext
                    ? -1 < Te(o, this).index(p)
                    : Te.find(o, this, null, [p]).length),
                r[o] && s.push(a);
            s.length && d.push({ elem: p, handlers: s });
          }
      return (
        (p = this), l < t.length && d.push({ elem: p, handlers: t.slice(l) }), d
      );
    },
    addProp: function (e, t) {
      Symbol('JSCA_2731_2753'),
        Object.defineProperty(Te.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: fe(t)
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
      return Symbol('JSCA_2754_2756'), e[Te.expando] ? e : new Te.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          Symbol('JSCA_2762_2768');
          var t = this || e;
          return (
            lt.test(t.type) && t.click && d(t, 'input') && i(t, 'click', !0), !1
          );
        },
        trigger: function (e) {
          Symbol('JSCA_2769_2775');
          var t = this || e;
          return (
            lt.test(t.type) && t.click && d(t, 'input') && i(t, 'click'), !0
          );
        },
        _default: function (e) {
          Symbol('JSCA_2776_2779');
          var t = e.target;
          return (
            (lt.test(t.type) &&
              t.click &&
              d(t, 'input') &&
              Qe.get(t, 'click')) ||
            d(t, 'a')
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
    (Te.removeEvent = function (e, t, n) {
      Symbol('JSCA_2825_2829'),
        e.removeEventListener && e.removeEventListener(t, n);
    }),
    (Te.Event = function (e, t) {
      return (
        Symbol('JSCA_2830_2849'),
        this instanceof Te.Event
          ? void (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? k
                    : j),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
            t && Te.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[Te.expando] = !0))
          : new Te.Event(e, t)
      );
    }),
    (Te.Event.prototype = {
      constructor: Te.Event,
      isDefaultPrevented: j,
      isPropagationStopped: j,
      isImmediatePropagationStopped: j,
      isSimulated: !1,
      preventDefault: function () {
        Symbol('JSCA_2856_2862');
        var t = this.originalEvent;
        (this.isDefaultPrevented = k),
          t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function () {
        Symbol('JSCA_2863_2869');
        var t = this.originalEvent;
        (this.isPropagationStopped = k),
          t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function () {
        Symbol('JSCA_2870_2877');
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = k),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    Te.each(
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
      Te.event.addProp
    ),
    Te.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      function n(e) {
        if ((Symbol('JSCA_2916_2928'), ye.documentMode)) {
          var n = Qe.get(this, 'handle'),
            a = Te.event.fix(e);
          (a.type = 'focusin' === e.type ? 'focus' : 'blur'),
            (a.isSimulated = !0),
            n(e),
            a.target === a.currentTarget && n(a);
        } else Te.event.simulate(t, e.target, Te.event.fix(e));
      }
      Symbol('JSCA_2915_2992'),
        (Te.event.special[e] = {
          setup: function () {
            Symbol('JSCA_2930_2942');
            var a;
            return (
              i(this, e, !0),
              !!ye.documentMode &&
                void ((a = Qe.get(this, t)),
                a || this.addEventListener(t, n),
                Qe.set(this, t, (a || 0) + 1))
            );
          },
          trigger: function () {
            return Symbol('JSCA_2943_2946'), i(this, e), !0;
          },
          teardown: function () {
            Symbol('JSCA_2947_2960');
            var e;
            return (
              !!ye.documentMode &&
              void ((e = Qe.get(this, t) - 1),
              e
                ? Qe.set(this, t, e)
                : (this.removeEventListener(t, n), Qe.remove(this, t)))
            );
          },
          _default: function (t) {
            return Symbol('JSCA_2961_2963'), Qe.get(t.target, e);
          },
          delegateType: t,
        }),
        (Te.event.special[t] = {
          setup: function () {
            Symbol('JSCA_2967_2977');
            var a = this.ownerDocument || this.document || this,
              o = ye.documentMode ? this : a,
              i = Qe.get(o, t);
            i ||
              (ye.documentMode
                ? this.addEventListener(t, n)
                : a.addEventListener(e, n, !0)),
              Qe.set(o, t, (i || 0) + 1);
          },
          teardown: function () {
            Symbol('JSCA_2978_2990');
            var a = this.ownerDocument || this.document || this,
              o = ye.documentMode ? this : a,
              i = Qe.get(o, t) - 1;
            i
              ? Qe.set(o, t, i)
              : (ye.documentMode
                  ? this.removeEventListener(t, n)
                  : a.removeEventListener(e, n, !0),
                Qe.remove(o, t));
          },
        });
    }),
    Te.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, t) {
        Symbol('JSCA_2998_3012'),
          (Te.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              Symbol('JSCA_3002_3010');
              var n,
                a = this,
                o = e.relatedTarget,
                i = e.handleObj;
              return (
                (o && (o === a || Te.contains(a, o))) ||
                  ((e.type = i.origType),
                  (n = i.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          });
      }
    ),
    Te.fn.extend({
      on: function (e, t, n, a) {
        return Symbol('JSCA_3014_3016'), D(this, e, t, n, a);
      },
      one: function (e, t, n, a) {
        return Symbol('JSCA_3017_3019'), D(this, e, t, n, a, 1);
      },
      off: function (e, t, n) {
        Symbol('JSCA_3020_3043');
        var a, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (a = e.handleObj),
            Te(e.delegateTarget).off(
              a.namespace ? a.origType + '.' + a.namespace : a.origType,
              a.selector,
              a.handler
            ),
            this
          );
        if ('object' == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 === t || 'function' == typeof t) && ((n = t), (t = void 0)),
          !1 === n && (n = j),
          this.each(function () {
            Symbol('JSCA_3040_3042'), Te.event.remove(this, e, n, t);
          })
        );
      },
    });
  var St = /<script|<style|<link/i,
    At = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ht = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  Te.extend({
    htmlPrefilter: function (e) {
      return Symbol('JSCA_3164_3166'), e;
    },
    clone: function (e, t, n) {
      Symbol('JSCA_3167_3192');
      var a,
        o,
        s,
        r,
        d = e.cloneNode(!0),
        p = it(e);
      if (
        !me.noCloneChecked &&
        (1 === e.nodeType || 11 === e.nodeType) &&
        !Te.isXMLDoc(e)
      )
        for (r = v(d), s = v(e), a = 0, o = s.length; a < o; a++) H(s[a], r[a]);
      if (t)
        if (n)
          for (s = s || v(e), r = r || v(d), a = 0, o = s.length; a < o; a++)
            q(s[a], r[a]);
        else q(e, d);
      return (
        (r = v(d, 'script')), 0 < r.length && T(r, !p && v(e, 'script')), d
      );
    },
    cleanData: function (e) {
      Symbol('JSCA_3193_3214');
      for (var t, n, a, o = Te.event.special, s = 0; void 0 !== (n = e[s]); s++)
        if (Ge(n)) {
          if ((t = n[Qe.expando])) {
            if (t.events)
              for (a in t.events)
                o[a] ? Te.event.remove(n, a) : Te.removeEvent(n, a, t.handle);
            n[Qe.expando] = void 0;
          }
          n[Ke.expando] && (n[Ke.expando] = void 0);
        }
    },
  }),
    Te.fn.extend({
      detach: function (e) {
        return Symbol('JSCA_3217_3219'), O(this, e, !0);
      },
      remove: function (e) {
        return Symbol('JSCA_3220_3222'), O(this, e);
      },
      text: function (e) {
        return (
          Symbol('JSCA_3223_3231'),
          ze(
            this,
            function (e) {
              return (
                Symbol('JSCA_3224_3230'),
                void 0 === e
                  ? Te.text(this)
                  : this.empty().each(function () {
                      Symbol('JSCA_3225_3229'),
                        (1 === this.nodeType ||
                          11 === this.nodeType ||
                          9 === this.nodeType) &&
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
          P(this, arguments, function (e) {
            if (
              (Symbol('JSCA_3233_3238'),
              1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType)
            ) {
              var t = E(this, e);
              t.appendChild(e);
            }
          })
        );
      },
      prepend: function () {
        return (
          Symbol('JSCA_3240_3247'),
          P(this, arguments, function (e) {
            if (
              (Symbol('JSCA_3241_3246'),
              1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType)
            ) {
              var t = E(this, e);
              t.insertBefore(e, t.firstChild);
            }
          })
        );
      },
      before: function () {
        return (
          Symbol('JSCA_3248_3254'),
          P(this, arguments, function (e) {
            Symbol('JSCA_3249_3253'),
              this.parentNode && this.parentNode.insertBefore(e, this);
          })
        );
      },
      after: function () {
        return (
          Symbol('JSCA_3255_3261'),
          P(this, arguments, function (e) {
            Symbol('JSCA_3256_3260'),
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
          })
        );
      },
      empty: function () {
        Symbol('JSCA_3262_3271');
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (Te.cleanData(v(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          Symbol('JSCA_3272_3278'),
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return Symbol('JSCA_3275_3277'), Te.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return (
          Symbol('JSCA_3279_3302'),
          ze(
            this,
            function (e) {
              Symbol('JSCA_3280_3301');
              var t = this[0] || {},
                n = 0,
                a = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                'string' == typeof e &&
                !St.test(e) &&
                !ct[(pt.exec(e) || ['', ''])[1].toLowerCase()]
              ) {
                e = Te.htmlPrefilter(e);
                try {
                  for (; n < a; n++)
                    (t = this[n] || {}),
                      1 === t.nodeType &&
                        (Te.cleanData(v(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (t) {}
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
        return P(
          this,
          arguments,
          function (t) {
            Symbol('JSCA_3305_3313');
            var n = this.parentNode;
            0 > Te.inArray(this, e) &&
              (Te.cleanData(v(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    Te.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, t) {
        Symbol('JSCA_3322_3332'),
          (Te.fn[e] = function (e) {
            Symbol('JSCA_3323_3331');
            for (var n, a = [], o = Te(e), s = o.length - 1, r = 0; r <= s; r++)
              (n = r === s ? this : this.clone(!0)),
                Te(o[r])[t](n),
                ce.apply(a, n.get());
            return this.pushStack(a);
          });
      }
    );
  var gt = new RegExp('^(' + tt + ')(?!px)[a-z%]+$', 'i'),
    mt = /^--/,
    ft = function (t) {
      Symbol('JSCA_3335_3341');
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Jt = function (e, t, n) {
      Symbol('JSCA_3342_3353');
      var a,
        o,
        i = {};
      for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((a = n.call(e)), t)) e.style[o] = i[o];
      return a;
    },
    yt = new RegExp(at.join('|'), 'i');
  (function () {
    function t() {
      if ((Symbol('JSCA_3356_3373'), !!p)) {
        (l.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (p.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          ot.appendChild(l).appendChild(p);
        var t = e.getComputedStyle(p);
        (a = '1%' !== t.top),
          (d = 12 === n(t.marginLeft)),
          (p.style.right = '60%'),
          (s = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (p.style.position = 'absolute'),
          (i = 12 === n(p.offsetWidth / 3)),
          ot.removeChild(l),
          (p = null);
      }
    }
    function n(e) {
      var t = Math.round;
      return Symbol('JSCA_3374_3376'), t(parseFloat(e));
    }
    Symbol('JSCA_3355_3424');
    var a,
      o,
      i,
      s,
      r,
      d,
      l = ye.createElement('div'),
      p = ye.createElement('div');
    p.style &&
      ((p.style.backgroundClip = 'content-box'),
      (p.cloneNode(!0).style.backgroundClip = ''),
      (me.clearCloneStyle = 'content-box' === p.style.backgroundClip),
      Te.extend(me, {
        boxSizingReliable: function () {
          return Symbol('JSCA_3385_3388'), t(), o;
        },
        pixelBoxStyles: function () {
          return Symbol('JSCA_3389_3392'), t(), s;
        },
        pixelPosition: function () {
          return Symbol('JSCA_3393_3396'), t(), a;
        },
        reliableMarginLeft: function () {
          return Symbol('JSCA_3397_3400'), t(), d;
        },
        scrollboxSize: function () {
          return Symbol('JSCA_3401_3404'), t(), i;
        },
        reliableTrDimensions: function () {
          Symbol('JSCA_3405_3422');
          var t, n, a, o;
          return (
            null == r &&
              ((t = ye.createElement('table')),
              (n = ye.createElement('tr')),
              (a = ye.createElement('div')),
              (t.style.cssText =
                'position:absolute;left:-11111px;border-collapse:separate'),
              (n.style.cssText = 'box-sizing:content-box;border:1px solid'),
              (n.style.height = '1px'),
              (a.style.height = '9px'),
              (a.style.display = 'block'),
              ot.appendChild(t).appendChild(n).appendChild(a),
              (o = e.getComputedStyle(n)),
              (r =
                parseInt(o.height, 10) +
                  parseInt(o.borderTopWidth, 10) +
                  parseInt(o.borderBottomWidth, 10) ===
                n.offsetHeight),
              ot.removeChild(t)),
            r
          );
        },
      }));
  })();
  var xt = ['Webkit', 'Moz', 'ms'],
    bt = ye.createElement('div').style,
    vt = {},
    Tt = /^(none|table(?!-c[ea]).+)/,
    wt = { position: 'absolute', visibility: 'hidden', display: 'block' },
    kt = { letterSpacing: '0', fontWeight: '400' };
  Te.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if ((Symbol('JSCA_3543_3548'), t)) {
            var n = M(e, 'opacity');
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
    style: function (e, t, n, a) {
      if (
        (Symbol('JSCA_3581_3618'),
        e && 3 !== e.nodeType && 8 !== e.nodeType && e.style)
      ) {
        var o,
          i,
          s,
          r = g(t),
          d = mt.test(t),
          l = e.style;
        if (
          (d || (t = I(r)),
          (s = Te.cssHooks[t] || Te.cssHooks[r]),
          void 0 !== n)
        ) {
          if (
            ((i = typeof n),
            'string' === i &&
              (o = nt.exec(n)) &&
              o[1] &&
              ((n = y(e, t, o)), (i = 'number')),
            null == n || n !== n)
          )
            return;
          'number' !== i ||
            d ||
            (n += (o && o[3]) || (Te.cssNumber[r] ? '' : 'px')),
            me.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (l[t] = 'inherit'),
            (s && 'set' in s && void 0 === (n = s.set(e, n, a))) ||
              (d ? l.setProperty(t, n) : (l[t] = n));
        } else
          return s && 'get' in s && void 0 !== (o = s.get(e, !1, a)) ? o : l[t];
      }
    },
    css: function (e, t, n, a) {
      Symbol('JSCA_3619_3639');
      var o,
        i,
        s,
        r = g(t),
        d = mt.test(t);
      return (
        d || (t = I(r)),
        (s = Te.cssHooks[t] || Te.cssHooks[r]),
        s && 'get' in s && (o = s.get(e, !0, n)),
        void 0 === o && (o = M(e, t, a)),
        'normal' === o && t in kt && (o = kt[t]),
        '' === n || n
          ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
          : o
      );
    },
  }),
    Te.each(['height', 'width'], function (e, t) {
      Symbol('JSCA_3641_3662'),
        (Te.cssHooks[t] = {
          get: function (e, n, a) {
            if ((Symbol('JSCA_3643_3649'), n))
              return !Tt.test(Te.css(e, 'display')) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? U(e, t, a)
                : Jt(e, wt, function () {
                    return Symbol('JSCA_3645_3647'), U(e, t, a);
                  });
          },
          set: function (e, a, o) {
            Symbol('JSCA_3650_3660');
            var i,
              s = ft(e),
              r = !me.scrollboxSize() && 'absolute' === s.position,
              d = r || o,
              l = d && 'border-box' === Te.css(e, 'boxSizing', !1, s),
              p = o ? F(e, t, o, l, s) : 0;
            return (
              l &&
                r &&
                (p -= n(
                  e['offset' + t[0].toUpperCase() + t.slice(1)] -
                    parseFloat(s[t]) -
                    F(e, t, 'border', !1, s) -
                    0.5
                )),
              p &&
                (i = nt.exec(a)) &&
                'px' !== (i[3] || 'px') &&
                ((e.style[t] = a), (a = Te.css(e, t))),
              B(e, a, p)
            );
          },
        });
    }),
    (Te.cssHooks.marginLeft = W(me.reliableMarginLeft, function (e, t) {
      if ((Symbol('JSCA_3663_3671'), t))
        return (
          (parseFloat(M(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Jt(e, { marginLeft: 0 }, function () {
                return Symbol('JSCA_3667_3669'), e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    Te.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
      Symbol('JSCA_3676_3689'),
        (Te.cssHooks[e + t] = {
          expand: function (n) {
            Symbol('JSCA_3678_3684');
            for (
              var a = 0, o = {}, s = 'string' == typeof n ? n.split(' ') : [n];
              4 > a;
              a++
            )
              o[e + at[a] + t] = s[a] || s[a - 2] || s[0];
            return o;
          },
        }),
        'margin' !== e && (Te.cssHooks[e + t].set = B);
    }),
    Te.fn.extend({
      css: function (e, t) {
        return (
          Symbol('JSCA_3691_3704'),
          ze(
            this,
            function (e, t, n) {
              Symbol('JSCA_3692_3703');
              var a,
                o,
                s = {},
                r = 0;
              if (Array.isArray(t)) {
                for (a = ft(e), o = t.length; r < o; r++)
                  s[t[r]] = Te.css(e, t[r], !1, a);
                return s;
              }
              return void 0 === n ? Te.css(e, t) : Te.style(e, t, n);
            },
            e,
            t,
            1 < arguments.length
          )
        );
      },
    }),
    (Te.Tween = X),
    (X.prototype = {
      constructor: X,
      init: function (e, t, n, a, o, i) {
        Symbol('JSCA_3712_3720'),
          (this.elem = e),
          (this.prop = n),
          (this.easing = o || Te.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = a),
          (this.unit = i || (Te.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        Symbol('JSCA_3721_3724');
        var e = X.propHooks[this.prop];
        return e && e.get ? e.get(this) : X.propHooks._default.get(this);
      },
      run: function (e) {
        Symbol('JSCA_3725_3742');
        var t,
          n = X.propHooks[this.prop];
        return (
          (this.pos = this.options.duration
            ? (t = Te.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              ))
            : (t = e)),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : X.propHooks._default.set(this),
          this
        );
      },
    }),
    (X.prototype.init.prototype = X.prototype),
    (X.propHooks = {
      _default: {
        get: function (e) {
          Symbol('JSCA_3747_3754');
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : ((t = Te.css(e.elem, e.prop, '')), t && 'auto' !== t ? t : 0);
        },
        set: function (e) {
          Symbol('JSCA_3755_3763'),
            Te.fx.step[e.prop]
              ? Te.fx.step[e.prop](e)
              : 1 === e.elem.nodeType &&
                (Te.cssHooks[e.prop] || null != e.elem.style[I(e.prop)])
              ? Te.style(e.elem, e.prop, e.now + e.unit)
              : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (X.propHooks.scrollTop = X.propHooks.scrollLeft =
      {
        set: function (e) {
          Symbol('JSCA_3767_3771'),
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (Te.easing = {
      linear: function (e) {
        return Symbol('JSCA_3774_3776'), e;
      },
      swing: function (e) {
        var t = Math.cos,
          n = Math.PI;
        return Symbol('JSCA_3777_3779'), 0.5 - t(e * n) / 2;
      },
      _default: 'swing',
    }),
    (Te.fx = X.prototype.init),
    (Te.fx.step = {});
  var jt,
    Dt,
    Et = /^(?:toggle|show|hide)$/,
    Nt = /queueHooks$/;
  (Te.Animation = Te.extend(K, {
    tweeners: {
      '*': [
        function (e, t) {
          Symbol('JSCA_4051_4055');
          var n = this.createTween(e, t);
          return y(n.elem, e, nt.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      Symbol('JSCA_4057_4070'),
        fe(e) ? ((t = e), (e = ['*'])) : (e = e.match(Ue));
      for (var n, a = 0, o = e.length; a < o; a++)
        (n = e[a]),
          (K.tweeners[n] = K.tweeners[n] || []),
          K.tweeners[n].unshift(t);
    },
    prefilters: [G],
    prefilter: function (e, t) {
      Symbol('JSCA_4072_4078'),
        t ? K.prefilters.unshift(e) : K.prefilters.push(e);
    },
  })),
    (Te.speed = function (e, t, n) {
      Symbol('JSCA_4080_4110');
      var a =
        e && 'object' == typeof e
          ? Te.extend({}, e)
          : {
              complete: n || (!n && t) || (fe(e) && e),
              duration: e,
              easing: (n && t) || (t && !fe(t) && t),
            };
      return (
        Te.fx.off
          ? (a.duration = 0)
          : 'number' != typeof a.duration &&
            (a.duration in Te.fx.speeds
              ? (a.duration = Te.fx.speeds[a.duration])
              : (a.duration = Te.fx.speeds._default)),
        (null == a.queue || !0 === a.queue) && (a.queue = 'fx'),
        (a.old = a.complete),
        (a.complete = function () {
          Symbol('JSCA_4101_4108'),
            fe(a.old) && a.old.call(this),
            a.queue && Te.dequeue(this, a.queue);
        }),
        a
      );
    }),
    Te.fn.extend({
      fadeTo: function (e, t, n, a) {
        return (
          Symbol('JSCA_4112_4116'),
          this.filter(rt)
            .css('opacity', 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, a)
        );
      },
      animate: function (e, t, n, a) {
        Symbol('JSCA_4117_4126');
        var o = Te.isEmptyObject(e),
          i = Te.speed(t, n, a),
          s = function () {
            Symbol('JSCA_4118_4123');
            var t = K(this, Te.extend({}, e), i);
            (o || Qe.get(this, 'finish')) && t.stop(!0);
          };
        return (
          (s.finish = s),
          o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
        );
      },
      stop: function (e, t, n) {
        Symbol('JSCA_4127_4165');
        var a = function (e) {
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
              o = null != e && e + 'queueHooks',
              i = Te.timers,
              s = Qe.get(this);
            if (o) s[o] && s[o].stop && a(s[o]);
            else for (o in s) s[o] && s[o].stop && Nt.test(o) && a(s[o]);
            for (o = i.length; o--; )
              i[o].elem === this &&
                (null == e || i[o].queue === e) &&
                (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
            (t || !n) && Te.dequeue(this, e);
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
              n = Qe.get(this),
              a = n[e + 'queue'],
              o = n[e + 'queueHooks'],
              i = Te.timers,
              s = a ? a.length : 0;
            for (
              n.finish = !0,
                Te.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = i.length;
              t--;

            )
              i[t].elem === this &&
                i[t].queue === e &&
                (i[t].anim.stop(!0), i.splice(t, 1));
            for (t = 0; t < s; t++)
              a[t] && a[t].finish && a[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    Te.each(['toggle', 'show', 'hide'], function (e, t) {
      Symbol('JSCA_4192_4197');
      var n = Te.fn[t];
      Te.fn[t] = function (e, a, o) {
        return (
          Symbol('JSCA_4194_4196'),
          null == e || 'boolean' == typeof e
            ? n.apply(this, arguments)
            : this.animate(V(t, !0), e, a, o)
        );
      };
    }),
    Te.each(
      {
        slideDown: V('show'),
        slideUp: V('hide'),
        slideToggle: V('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, t) {
        Symbol('JSCA_4211_4215'),
          (Te.fn[e] = function (e, n, a) {
            return Symbol('JSCA_4212_4214'), this.animate(t, e, n, a);
          });
      }
    ),
    (Te.timers = []),
    (Te.fx.tick = function () {
      Symbol('JSCA_4217_4230');
      var e,
        t = 0,
        n = Te.timers;
      for (jt = Date.now(); t < n.length; t++)
        (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
      n.length || Te.fx.stop(), (jt = void 0);
    }),
    (Te.fx.timer = function (e) {
      Symbol('JSCA_4231_4234'), Te.timers.push(e), Te.fx.start();
    }),
    (Te.fx.interval = 13),
    (Te.fx.start = function () {
      Symbol('JSCA_4236_4242'), Dt || ((Dt = !0), $());
    }),
    (Te.fx.stop = function () {
      Symbol('JSCA_4243_4245'), (Dt = null);
    }),
    (Te.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (Te.fn.delay = function (t, n) {
      return (
        Symbol('JSCA_4251_4260'),
        (t = Te.fx ? Te.fx.speeds[t] || t : t),
        (n = n || 'fx'),
        this.queue(n, function (n, a) {
          Symbol('JSCA_4254_4259');
          var o = e.setTimeout(n, t);
          a.stop = function () {
            Symbol('JSCA_4256_4258'), e.clearTimeout(o);
          };
        })
      );
    }),
    (function () {
      Symbol('JSCA_4261_4270');
      var e = ye.createElement('input'),
        t = ye.createElement('select'),
        n = t.appendChild(ye.createElement('option'));
      (e.type = 'checkbox'),
        (me.checkOn = '' !== e.value),
        (me.optSelected = n.selected),
        (e = ye.createElement('input')),
        (e.value = 't'),
        (e.type = 'radio'),
        (me.radioValue = 't' === e.value);
    })();
  var Lt,
    qt = Te.expr.attrHandle;
  Te.fn.extend({
    attr: function (e, t) {
      return (
        Symbol('JSCA_4273_4275'), ze(this, Te.attr, e, t, 1 < arguments.length)
      );
    },
    removeAttr: function (e) {
      return (
        Symbol('JSCA_4276_4280'),
        this.each(function () {
          Symbol('JSCA_4277_4279'), Te.removeAttr(this, e);
        })
      );
    },
  }),
    Te.extend({
      attr: function (e, t, n) {
        Symbol('JSCA_4283_4310');
        var a,
          o,
          i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i)
          return 'undefined' == typeof e.getAttribute
            ? Te.prop(e, t, n)
            : ((1 === i && Te.isXMLDoc(e)) ||
                (o =
                  Te.attrHooks[t.toLowerCase()] ||
                  (Te.expr.match.bool.test(t) ? Lt : void 0)),
              void 0 !== n)
            ? null === n
              ? void Te.removeAttr(e, t)
              : o && 'set' in o && void 0 !== (a = o.set(e, n, t))
              ? a
              : (e.setAttribute(t, n + ''), n)
            : o && 'get' in o && null !== (a = o.get(e, t))
            ? a
            : ((a = Te.find.attr(e, t)), null == a ? void 0 : a);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (
              (Symbol('JSCA_4313_4322'),
              !me.radioValue && 'radio' === t && d(e, 'input'))
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
          a = 0,
          o = t && t.match(Ue);
        if (o && 1 === e.nodeType) for (; (n = o[a++]); ) e.removeAttribute(n);
      },
    }),
    (Lt = {
      set: function (e, t, n) {
        return (
          Symbol('JSCA_4335_4342'),
          !1 === t ? Te.removeAttr(e, n) : e.setAttribute(n, n),
          n
        );
      },
    }),
    Te.each(Te.expr.match.bool.source.match(/\w+/g), function (e, t) {
      Symbol('JSCA_4344_4356');
      var n = qt[t] || Te.find.attr;
      qt[t] = function (e, t, a) {
        Symbol('JSCA_4346_4355');
        var o,
          i,
          s = t.toLowerCase();
        return (
          a ||
            ((i = qt[s]),
            (qt[s] = o),
            (o = null == n(e, t, a) ? null : s),
            (qt[s] = i)),
          o
        );
      };
    });
  var Ht = /^(?:input|select|textarea|button)$/i,
    Pt = /^(?:a|area)$/i;
  Te.fn.extend({
    prop: function (e, t) {
      return (
        Symbol('JSCA_4359_4361'), ze(this, Te.prop, e, t, 1 < arguments.length)
      );
    },
    removeProp: function (e) {
      return (
        Symbol('JSCA_4362_4366'),
        this.each(function () {
          Symbol('JSCA_4363_4365'), delete this[Te.propFix[e] || e];
        })
      );
    },
  }),
    Te.extend({
      prop: function (e, t, n) {
        Symbol('JSCA_4369_4388');
        var a,
          o,
          i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i)
          return (
            (1 === i && Te.isXMLDoc(e)) ||
              ((t = Te.propFix[t] || t), (o = Te.propHooks[t])),
            void 0 === n
              ? o && 'get' in o && null !== (a = o.get(e, t))
                ? a
                : e[t]
              : o && 'set' in o && void 0 !== (a = o.set(e, n, t))
              ? a
              : (e[t] = n)
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            Symbol('JSCA_4391_4400');
            var t = Te.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : Ht.test(e.nodeName) || (Pt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    me.optSelected ||
      (Te.propHooks.selected = {
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
    Te.each(
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
        Symbol('JSCA_4428_4430'), (Te.propFix[this.toLowerCase()] = this);
      }
    ),
    Te.fn.extend({
      addClass: function (e) {
        Symbol('JSCA_4448_4475');
        var t, n, a, o, s, r;
        return fe(e)
          ? this.each(function (t) {
              Symbol('JSCA_4451_4453'),
                Te(this).addClass(e.call(this, t, ee(this)));
            })
          : ((t = te(e)),
            t.length
              ? this.each(function () {
                  if (
                    (Symbol('JSCA_4457_4472'),
                    (a = ee(this)),
                    (n = 1 === this.nodeType && ' ' + Z(a) + ' '),
                    n)
                  ) {
                    for (s = 0; s < t.length; s++)
                      (o = t[s]),
                        0 > n.indexOf(' ' + o + ' ') && (n += o + ' ');
                    (r = Z(n)), a !== r && this.setAttribute('class', r);
                  }
                })
              : this);
      },
      removeClass: function (e) {
        Symbol('JSCA_4476_4506');
        var t, n, a, o, s, r;
        return fe(e)
          ? this.each(function (t) {
              Symbol('JSCA_4479_4481'),
                Te(this).removeClass(e.call(this, t, ee(this)));
            })
          : arguments.length
          ? ((t = te(e)),
            t.length
              ? this.each(function () {
                  if (
                    (Symbol('JSCA_4488_4503'),
                    (a = ee(this)),
                    (n = 1 === this.nodeType && ' ' + Z(a) + ' '),
                    n)
                  ) {
                    for (s = 0; s < t.length; s++)
                      for (o = t[s]; -1 < n.indexOf(' ' + o + ' '); )
                        n = n.replace(' ' + o + ' ', ' ');
                    (r = Z(n)), a !== r && this.setAttribute('class', r);
                  }
                })
              : this)
          : this.attr('class', '');
      },
      toggleClass: function (e, t) {
        Symbol('JSCA_4507_4539');
        var n,
          a,
          o,
          s,
          r = typeof e,
          d = 'string' == r || Array.isArray(e);
        return fe(e)
          ? this.each(function (n) {
              Symbol('JSCA_4510_4512'),
                Te(this).toggleClass(e.call(this, n, ee(this), t), t);
            })
          : 'boolean' == typeof t && d
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : ((n = te(e)),
            this.each(function () {
              if ((Symbol('JSCA_4518_4538'), d))
                for (s = Te(this), o = 0; o < n.length; o++)
                  (a = n[o]), s.hasClass(a) ? s.removeClass(a) : s.addClass(a);
              else
                (void 0 === e || 'boolean' == r) &&
                  ((a = ee(this)),
                  a && Qe.set(this, '__className__', a),
                  this.setAttribute &&
                    this.setAttribute(
                      'class',
                      a || !1 === e ? '' : Qe.get(this, '__className__') || ''
                    ));
            }));
      },
      hasClass: function (e) {
        Symbol('JSCA_4540_4549');
        var t,
          n,
          a = 0;
        for (t = ' ' + e + ' '; (n = this[a++]); )
          if (1 === n.nodeType && -1 < (' ' + Z(ee(n)) + ' ').indexOf(t))
            return !0;
        return !1;
      },
    });
  var Ot = /\r/g;
  Te.fn.extend({
    val: function (e) {
      Symbol('JSCA_4553_4594');
      var t,
        n,
        a,
        o = this[0];
      return arguments.length
        ? ((a = fe(e)),
          this.each(function (n) {
            Symbol('JSCA_4570_4593');
            var o;
            1 !== this.nodeType ||
              ((o = a ? e.call(this, n, Te(this).val()) : e),
              null == o
                ? (o = '')
                : 'number' == typeof o
                ? (o += '')
                : Array.isArray(o) &&
                  (o = Te.map(o, function (e) {
                    return Symbol('JSCA_4585_4587'), null == e ? '' : e + '';
                  })),
              (t =
                Te.valHooks[this.type] ||
                Te.valHooks[this.nodeName.toLowerCase()]),
              (!t || !('set' in t) || void 0 === t.set(this, o, 'value')) &&
                (this.value = o));
          }))
        : o
        ? ((t = Te.valHooks[o.type] || Te.valHooks[o.nodeName.toLowerCase()]),
          t && 'get' in t && void 0 !== (n = t.get(o, 'value')))
          ? n
          : ((n = o.value),
            'string' == typeof n ? n.replace(Ot, '') : null == n ? '' : n)
        : void 0;
    },
  }),
    Te.extend({
      valHooks: {
        option: {
          get: function (e) {
            Symbol('JSCA_4599_4602');
            var t = Te.find.attr(e, 'value');
            return null == t ? Z(Te.text(e)) : t;
          },
        },
        select: {
          get: function (e) {
            Symbol('JSCA_4605_4623');
            var t,
              n,
              a,
              o = e.options,
              s = e.selectedIndex,
              r = 'select-one' === e.type,
              l = r ? null : [],
              p = r ? s + 1 : o.length;
            for (a = 0 > s ? p : r ? s : 0; a < p; a++)
              if (
                ((n = o[a]),
                (n.selected || a === s) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !d(n.parentNode, 'optgroup')))
              ) {
                if (((t = Te(n).val()), r)) return t;
                l.push(t);
              }
            return l;
          },
          set: function (e, t) {
            Symbol('JSCA_4624_4636');
            for (
              var n, a, o = e.options, s = Te.makeArray(t), r = o.length;
              r--;

            )
              (a = o[r]),
                (a.selected = -1 < Te.inArray(Te.valHooks.option.get(a), s)) &&
                  (n = !0);
            return n || (e.selectedIndex = -1), s;
          },
        },
      },
    }),
    Te.each(['radio', 'checkbox'], function () {
      Symbol('JSCA_4640_4653'),
        (Te.valHooks[this] = {
          set: function (e, t) {
            if ((Symbol('JSCA_4642_4646'), Array.isArray(t)))
              return (e.checked = -1 < Te.inArray(Te(e).val(), t));
          },
        }),
        me.checkOn ||
          (Te.valHooks[this].get = function (e) {
            return (
              Symbol('JSCA_4649_4651'),
              null === e.getAttribute('value') ? 'on' : e.value
            );
          });
    });
  var Mt = e.location,
    Wt = { guid: Date.now() },
    Rt = /\?/;
  Te.parseXML = function (t) {
    Symbol('JSCA_4659_4674');
    var n, a;
    if (!t || 'string' != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, 'text/xml');
    } catch (t) {}
    return (
      (a = n && n.getElementsByTagName('parsererror')[0]),
      (!n || a) &&
        Te.error(
          'Invalid XML: ' +
            (a
              ? Te.map(a.childNodes, function (e) {
                  return Symbol('JSCA_4669_4671'), e.textContent;
                }).join('\n')
              : t)
        ),
      n
    );
  };
  var It = /^(?:focusinfocus|focusoutblur)$/,
    Bt = function (t) {
      Symbol('JSCA_4675_4677'), t.stopPropagation();
    };
  Te.extend(Te.event, {
    trigger: function (t, n, a, o) {
      Symbol('JSCA_4679_4760');
      var s,
        r,
        d,
        l,
        p,
        _,
        c,
        u,
        C = [a || ye],
        S = Ae.call(t, 'type') ? t.type : t,
        A = Ae.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((r = u = d = a = a || ye), 3 !== a.nodeType && 8 !== a.nodeType) &&
        !It.test(S + Te.event.triggered) &&
        (-1 < S.indexOf('.') && ((A = S.split('.')), (S = A.shift()), A.sort()),
        (p = 0 > S.indexOf(':') && 'on' + S),
        (t = t[Te.expando] ? t : new Te.Event(S, 'object' == typeof t && t)),
        (t.isTrigger = o ? 2 : 3),
        (t.namespace = A.join('.')),
        (t.rnamespace = t.namespace
          ? new RegExp('(^|\\.)' + A.join('\\.(?:.*\\.|)') + '(\\.|$)')
          : null),
        (t.result = void 0),
        t.target || (t.target = a),
        (n = null == n ? [t] : Te.makeArray(n, [t])),
        (c = Te.event.special[S] || {}),
        o || !c.trigger || !1 !== c.trigger.apply(a, n))
      ) {
        if (!o && !c.noBubble && !Je(a)) {
          for (
            l = c.delegateType || S, It.test(l + S) || (r = r.parentNode);
            r;
            r = r.parentNode
          )
            C.push(r), (d = r);
          d === (a.ownerDocument || ye) &&
            C.push(d.defaultView || d.parentWindow || e);
        }
        for (s = 0; (r = C[s++]) && !t.isPropagationStopped(); )
          (u = r),
            (t.type = 1 < s ? l : c.bindType || S),
            (_ =
              (Qe.get(r, 'events') || Object.create(null))[t.type] &&
              Qe.get(r, 'handle')),
            _ && _.apply(r, n),
            (_ = p && r[p]),
            _ &&
              _.apply &&
              Ge(r) &&
              ((t.result = _.apply(r, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = S),
          o ||
            t.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(C.pop(), n)) ||
            !Ge(a) ||
            !p ||
            !fe(a[S]) ||
            Je(a) ||
            ((d = a[p]),
            d && (a[p] = null),
            (Te.event.triggered = S),
            t.isPropagationStopped() && u.addEventListener(S, Bt),
            a[S](),
            t.isPropagationStopped() && u.removeEventListener(S, Bt),
            (Te.event.triggered = void 0),
            d && (a[p] = d)),
          t.result
        );
      }
    },
    simulate: function (t, n, a) {
      Symbol('JSCA_4761_4767');
      var o = Te.extend(new Te.Event(), a, { type: t, isSimulated: !0 });
      Te.event.trigger(o, null, n);
    },
  }),
    Te.fn.extend({
      trigger: function (e, t) {
        return (
          Symbol('JSCA_4770_4774'),
          this.each(function () {
            Symbol('JSCA_4771_4773'), Te.event.trigger(e, t, this);
          })
        );
      },
      triggerHandler: function (e, t) {
        Symbol('JSCA_4775_4780');
        var n = this[0];
        if (n) return Te.event.trigger(e, t, n, !0);
      },
    });
  var Ft = /\[\]$/,
    Ut = /\r?\n/g,
    Xt = /^(?:submit|button|image|reset|file)$/i,
    $t = /^(?:input|select|textarea|keygen)/i;
  (Te.param = function (e, t) {
    Symbol('JSCA_4801_4819');
    var n,
      a = [],
      o = function (e, t) {
        Symbol('JSCA_4802_4805');
        var n = fe(t) ? t() : t;
        a[a.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !Te.isPlainObject(e)))
      Te.each(e, function () {
        Symbol('JSCA_4810_4812'), o(this.name, this.value);
      });
    else for (n in e) ne(n, e[n], t, o);
    return a.join('&');
  }),
    Te.fn.extend({
      serialize: function () {
        return Symbol('JSCA_4821_4823'), Te.param(this.serializeArray());
      },
      serializeArray: function () {
        return (
          Symbol('JSCA_4824_4849'),
          this.map(function () {
            Symbol('JSCA_4825_4828');
            var e = Te.prop(this, 'elements');
            return e ? Te.makeArray(e) : this;
          })
            .filter(function () {
              Symbol('JSCA_4828_4831');
              var e = this.type;
              return (
                this.name &&
                !Te(this).is(':disabled') &&
                $t.test(this.nodeName) &&
                !Xt.test(e) &&
                (this.checked || !lt.test(e))
              );
            })
            .map(function (e, t) {
              Symbol('JSCA_4831_4848');
              var n = Te(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? Te.map(n, function (e) {
                    return (
                      Symbol('JSCA_4837_4842'),
                      { name: t.name, value: e.replace(Ut, '\r\n') }
                    );
                  })
                : { name: t.name, value: n.replace(Ut, '\r\n') };
            })
            .get()
        );
      },
    });
  var zt = /%20/g,
    Vt = /#.*$/,
    Yt = /([?&])_=[^&]*/,
    Gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Qt = /^(?:GET|HEAD)$/,
    Kt = /^\/\//,
    Zt = {},
    en = {},
    tn = '*/'.concat('*'),
    nn = ye.createElement('a');
  (nn.href = Mt.href),
    Te.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Mt.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Mt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': '*/*',
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
          'text xml': Te.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return (
          Symbol('JSCA_5041_5043'),
          t ? ie(ie(e, Te.ajaxSettings), t) : ie(Te.ajaxSettings, e)
        );
      },
      ajaxPrefilter: ae(Zt),
      ajaxTransport: ae(en),
      ajax: function (t, n) {
        function a(t, n, a, i) {
          Symbol('JSCA_5195_5264');
          var l,
            _,
            C,
            S,
            J,
            y = n;
          c ||
            ((c = !0),
            p && e.clearTimeout(p),
            (o = void 0),
            (d = i || ''),
            (b.readyState = 0 < t ? 4 : 0),
            (l = (200 <= t && 300 > t) || 304 === t),
            a && (S = se(A, b, a)),
            !l &&
              -1 < Te.inArray('script', A.dataTypes) &&
              0 > Te.inArray('json', A.dataTypes) &&
              (A.converters['text script'] = function () {
                Symbol('JSCA_5212_5212');
              }),
            (S = re(A, S, b, l)),
            l
              ? (A.ifModified &&
                  ((J = b.getResponseHeader('Last-Modified')),
                  J && (Te.lastModified[r] = J),
                  (J = b.getResponseHeader('etag')),
                  J && (Te.etag[r] = J)),
                204 === t || 'HEAD' === A.type
                  ? (y = 'nocontent')
                  : 304 === t
                  ? (y = 'notmodified')
                  : ((y = S.state), (_ = S.data), (C = S.error), (l = !C)))
              : ((C = y), (t || !y) && ((y = 'error'), 0 > t && (t = 0))),
            (b.status = t),
            (b.statusText = (n || y) + ''),
            l ? g.resolveWith(s, [_, y, b]) : g.rejectWith(s, [b, y, C]),
            b.statusCode(f),
            (f = void 0),
            u && h.trigger(l ? 'ajaxSuccess' : 'ajaxError', [b, A, l ? _ : C]),
            m.fireWith(s, [b, y]),
            u &&
              (h.trigger('ajaxComplete', [b, A]),
              !--Te.active && Te.event.trigger('ajaxStop')));
        }
        Symbol('JSCA_5046_5266'),
          'object' == typeof t && ((n = t), (t = void 0)),
          (n = n || {});
        var o,
          r,
          d,
          l,
          p,
          _,
          c,
          u,
          C,
          S,
          A = Te.ajaxSetup({}, n),
          s = A.context || A,
          h = A.context && (s.nodeType || s.jquery) ? Te(s) : Te.event,
          g = Te.Deferred(),
          m = Te.Callbacks('once memory'),
          f = A.statusCode || {},
          J = {},
          y = {},
          x = 'canceled',
          b = {
            readyState: 0,
            getResponseHeader: function (e) {
              Symbol('JSCA_5054_5066');
              var t;
              if (c) {
                if (!l)
                  for (l = {}; (t = Gt.exec(d)); )
                    l[t[1].toLowerCase() + ' '] = (
                      l[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2]);
                t = l[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return Symbol('JSCA_5067_5069'), c ? d : null;
            },
            setRequestHeader: function (e, t) {
              return (
                Symbol('JSCA_5070_5076'),
                null == c &&
                  ((e = y[e.toLowerCase()] = y[e.toLowerCase()] || e),
                  (J[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return (
                Symbol('JSCA_5077_5082'), null == c && (A.mimeType = e), this
              );
            },
            statusCode: function (e) {
              Symbol('JSCA_5083_5095');
              var t;
              if (e)
                if (c) b.always(e[b.status]);
                else for (t in e) f[t] = [f[t], e[t]];
              return this;
            },
            abort: function (e) {
              Symbol('JSCA_5096_5103');
              var t = e || x;
              return o && o.abort(t), a(0, t), this;
            },
          };
        if (
          (g.promise(b),
          (A.url = ((t || A.url || Mt.href) + '').replace(
            Kt,
            Mt.protocol + '//'
          )),
          (A.type = n.method || n.type || A.method || A.type),
          (A.dataTypes = (A.dataType || '*').toLowerCase().match(Ue) || ['']),
          null == A.crossDomain)
        ) {
          _ = ye.createElement('a');
          try {
            (_.href = A.url),
              (_.href = _.href),
              (A.crossDomain =
                nn.protocol + '//' + nn.host != _.protocol + '//' + _.host);
          } catch (t) {
            A.crossDomain = !0;
          }
        }
        if (
          (A.data &&
            A.processData &&
            'string' != typeof A.data &&
            (A.data = Te.param(A.data, A.traditional)),
          oe(Zt, A, n, b),
          c)
        )
          return b;
        for (C in ((u = Te.event && A.global),
        u && 0 == Te.active++ && Te.event.trigger('ajaxStart'),
        (A.type = A.type.toUpperCase()),
        (A.hasContent = !Qt.test(A.type)),
        (r = A.url.replace(Vt, '')),
        A.hasContent
          ? A.data &&
            A.processData &&
            0 ===
              (A.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (A.data = A.data.replace(zt, '+'))
          : ((S = A.url.slice(r.length)),
            A.data &&
              (A.processData || 'string' == typeof A.data) &&
              ((r += (Rt.test(r) ? '&' : '?') + A.data), delete A.data),
            !1 === A.cache &&
              ((r = r.replace(Yt, '$1')),
              (S = (Rt.test(r) ? '&' : '?') + '_=' + Wt.guid++ + S)),
            (A.url = r + S)),
        A.ifModified &&
          (Te.lastModified[r] &&
            b.setRequestHeader('If-Modified-Since', Te.lastModified[r]),
          Te.etag[r] && b.setRequestHeader('If-None-Match', Te.etag[r])),
        ((A.data && A.hasContent && !1 !== A.contentType) || n.contentType) &&
          b.setRequestHeader('Content-Type', A.contentType),
        b.setRequestHeader(
          'Accept',
          A.dataTypes[0] && A.accepts[A.dataTypes[0]]
            ? A.accepts[A.dataTypes[0]] +
                ('*' === A.dataTypes[0] ? '' : ', */*; q=0.01')
            : A.accepts['*']
        ),
        A.headers))
          b.setRequestHeader(C, A.headers[C]);
        if (A.beforeSend && (!1 === A.beforeSend.call(s, b, A) || c))
          return b.abort();
        if (
          ((x = 'abort'),
          m.add(A.complete),
          b.done(A.success),
          b.fail(A.error),
          (o = oe(en, A, n, b)),
          !o)
        )
          a(-1, 'No Transport');
        else {
          if (((b.readyState = 1), u && h.trigger('ajaxSend', [b, A]), c))
            return b;
          A.async &&
            0 < A.timeout &&
            (p = e.setTimeout(function () {
              Symbol('JSCA_5181_5183'), b.abort('timeout');
            }, A.timeout));
          try {
            (c = !1), o.send(J, a);
          } catch (t) {
            if (c) throw t;
            a(-1, t);
          }
        }
        return b;
      },
      getJSON: function (e, t, n) {
        return Symbol('JSCA_5267_5269'), Te.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return Symbol('JSCA_5270_5272'), Te.get(e, void 0, t, 'script');
      },
    }),
    Te.each(['get', 'post'], function (e, t) {
      Symbol('JSCA_5274_5289'),
        (Te[t] = function (e, n, a, o) {
          return (
            Symbol('JSCA_5275_5288'),
            fe(n) && ((o = o || a), (a = n), (n = void 0)),
            Te.ajax(
              Te.extend(
                { url: e, type: t, dataType: o, data: n, success: a },
                Te.isPlainObject(e) && e
              )
            )
          );
        });
    }),
    Te.ajaxPrefilter(function (e) {
      Symbol('JSCA_5290_5297');
      var t;
      for (t in e.headers)
        'content-type' === t.toLowerCase() &&
          (e.contentType = e.headers[t] || '');
    }),
    (Te._evalUrl = function (e, t, n) {
      return (
        Symbol('JSCA_5298_5313'),
        Te.ajax({
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
            Symbol('JSCA_5309_5311'), Te.globalEval(e, t, n);
          },
        })
      );
    }),
    Te.fn.extend({
      wrapAll: function (e) {
        Symbol('JSCA_5315_5334');
        var t;
        return (
          this[0] &&
            (fe(e) && (e = e.call(this[0])),
            (t = Te(e, this[0].ownerDocument).eq(0).clone(!0)),
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
          fe(e)
            ? this.each(function (t) {
                Symbol('JSCA_5337_5339'), Te(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                Symbol('JSCA_5341_5348');
                var t = Te(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              })
        );
      },
      wrap: function (e) {
        Symbol('JSCA_5350_5355');
        var t = fe(e);
        return this.each(function (n) {
          Symbol('JSCA_5352_5354'), Te(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          Symbol('JSCA_5356_5361'),
          this.parent(e)
            .not('body')
            .each(function () {
              Symbol('JSCA_5357_5359'), Te(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (Te.expr.pseudos.hidden = function (e) {
      return Symbol('JSCA_5363_5365'), !Te.expr.pseudos.visible(e);
    }),
    (Te.expr.pseudos.visible = function (e) {
      return (
        Symbol('JSCA_5366_5368'),
        !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
      );
    }),
    (Te.ajaxSettings.xhr = function () {
      Symbol('JSCA_5369_5373');
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    });
  var an = { 0: 200, 1223: 204 },
    on = Te.ajaxSettings.xhr();
  (me.cors = !!on && 'withCredentials' in on),
    (me.ajax = on = !!on),
    Te.ajaxTransport(function (t) {
      Symbol('JSCA_5380_5454');
      var n, a;
      if (me.cors || (on && !t.crossDomain))
        return {
          send: function (o, s) {
            Symbol('JSCA_5384_5446');
            var r,
              d = t.xhr();
            if (
              (d.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (r in t.xhrFields) d[r] = t.xhrFields[r];
            for (r in (t.mimeType &&
              d.overrideMimeType &&
              d.overrideMimeType(t.mimeType),
            t.crossDomain ||
              o['X-Requested-With'] ||
              (o['X-Requested-With'] = 'XMLHttpRequest'),
            o))
              d.setRequestHeader(r, o[r]);
            (n = function (e) {
              return (
                Symbol('JSCA_5401_5422'),
                function () {
                  Symbol('JSCA_5402_5421'),
                    n &&
                      ((n =
                        a =
                        d.onload =
                        d.onerror =
                        d.onabort =
                        d.ontimeout =
                        d.onreadystatechange =
                          null),
                      'abort' === e
                        ? d.abort()
                        : 'error' === e
                        ? 'number' == typeof d.status
                          ? s(d.status, d.statusText)
                          : s(0, 'error')
                        : s(
                            an[d.status] || d.status,
                            d.statusText,
                            'text' !== (d.responseType || 'text') ||
                              'string' != typeof d.responseText
                              ? { binary: d.response }
                              : { text: d.responseText },
                            d.getAllResponseHeaders()
                          ));
                }
              );
            }),
              (d.onload = n()),
              (a = d.onerror = d.ontimeout = n('error')),
              void 0 === d.onabort
                ? (d.onreadystatechange = function () {
                    Symbol('JSCA_5428_5436'),
                      4 === d.readyState &&
                        e.setTimeout(function () {
                          Symbol('JSCA_5430_5434'), n && a();
                        });
                  })
                : (d.onabort = a),
              (n = n('abort'));
            try {
              d.send((t.hasContent && t.data) || null);
            } catch (t) {
              if (n) throw t;
            }
          },
          abort: function () {
            Symbol('JSCA_5447_5451'), n && n();
          },
        };
    }),
    Te.ajaxPrefilter(function (e) {
      Symbol('JSCA_5455_5459'), e.crossDomain && (e.contents.script = !1);
    }),
    Te.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return Symbol('JSCA_5468_5471'), Te.globalEval(e), e;
        },
      },
    }),
    Te.ajaxPrefilter('script', function (e) {
      Symbol('JSCA_5474_5481'),
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = 'GET');
    }),
    Te.ajaxTransport('script', function (e) {
      if ((Symbol('JSCA_5482_5506'), e.crossDomain || e.scriptAttrs)) {
        var t, n;
        return {
          send: function (a, o) {
            Symbol('JSCA_5486_5498'),
              (t = Te('<script>')
                .attr(e.scriptAttrs || {})
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  'load error',
                  (n = function (e) {
                    Symbol('JSCA_5490_5496'),
                      t.remove(),
                      (n = null),
                      e && o('error' === e.type ? 404 : 200, e.type);
                  })
                )),
              ye.head.appendChild(t[0]);
          },
          abort: function () {
            Symbol('JSCA_5499_5503'), n && n();
          },
        };
      }
    });
  var sn = [],
    rn = /(=)\?(?=&|$)|\?\?/;
  Te.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      Symbol('JSCA_5510_5514');
      var e = sn.pop() || Te.expando + '_' + Wt.guid++;
      return (this[e] = !0), e;
    },
  }),
    Te.ajaxPrefilter('json jsonp', function (t, n, a) {
      Symbol('JSCA_5516_5553');
      var o,
        i,
        s,
        r =
          !1 !== t.jsonp &&
          (rn.test(t.url)
            ? 'url'
            : 'string' == typeof t.data &&
              0 ===
                (t.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              rn.test(t.data) &&
              'data');
      if (r || 'jsonp' === t.dataTypes[0])
        return (
          (o = t.jsonpCallback =
            fe(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          r
            ? (t[r] = t[r].replace(rn, '$1' + o))
            : !1 !== t.jsonp &&
              (t.url += (Rt.test(t.url) ? '&' : '?') + t.jsonp + '=' + o),
          (t.converters['script json'] = function () {
            return (
              Symbol('JSCA_5525_5530'),
              s || Te.error(o + ' was not called'),
              s[0]
            );
          }),
          (t.dataTypes[0] = 'json'),
          (i = e[o]),
          (e[o] = function () {
            Symbol('JSCA_5533_5535'), (s = arguments);
          }),
          a.always(function () {
            Symbol('JSCA_5536_5550'),
              void 0 === i ? Te(e).removeProp(o) : (e[o] = i),
              t[o] && ((t.jsonpCallback = n.jsonpCallback), sn.push(o)),
              s && fe(i) && i(s[0]),
              (s = i = void 0);
          }),
          'script'
        );
    }),
    (me.createHTMLDocument = (function () {
      Symbol('JSCA_5554_5558');
      var e = ye.implementation.createHTMLDocument('').body;
      return (
        (e.innerHTML = '<form></form><form></form>'), 2 === e.childNodes.length
      );
    })()),
    (Te.parseHTML = function (e, t, n) {
      if ((Symbol('JSCA_5559_5588'), 'string' != typeof e)) return [];
      'boolean' == typeof t && ((n = t), (t = !1));
      var a, o, i;
      return (t ||
        (me.createHTMLDocument
          ? ((t = ye.implementation.createHTMLDocument('')),
            (a = t.createElement('base')),
            (a.href = ye.location.href),
            t.head.appendChild(a))
          : (t = ye)),
      (o = Me.exec(e)),
      (i = !n && []),
      o)
        ? [t.createElement(o[1])]
        : ((o = w([e], t, i)),
          i && i.length && Te(i).remove(),
          Te.merge([], o.childNodes));
    }),
    (Te.fn.load = function (e, t, n) {
      Symbol('JSCA_5589_5617');
      var a,
        o,
        i,
        s = this,
        r = e.indexOf(' ');
      return (
        -1 < r && ((a = Z(e.slice(r))), (e = e.slice(0, r))),
        fe(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (o = 'POST'),
        0 < s.length &&
          Te.ajax({ url: e, type: o || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              Symbol('JSCA_5607_5610'),
                (i = arguments),
                s.html(a ? Te('<div>').append(Te.parseHTML(e)).find(a) : e);
            })
            .always(
              n &&
                function (e, t) {
                  Symbol('JSCA_5610_5614'),
                    s.each(function () {
                      Symbol('JSCA_5611_5613'),
                        n.apply(this, i || [e.responseText, t, e]);
                    });
                }
            ),
        this
      );
    }),
    (Te.expr.pseudos.animated = function (e) {
      return (
        Symbol('JSCA_5618_5622'),
        Te.grep(Te.timers, function (t) {
          return Symbol('JSCA_5619_5621'), e === t.elem;
        }).length
      );
    }),
    (Te.offset = {
      setOffset: function (e, t, n) {
        Symbol('JSCA_5624_5655');
        var a,
          o,
          i,
          s,
          r,
          d,
          l,
          p = Te.css(e, 'position'),
          _ = Te(e),
          c = {};
        'static' === p && (e.style.position = 'relative'),
          (r = _.offset()),
          (i = Te.css(e, 'top')),
          (d = Te.css(e, 'left')),
          (l =
            ('absolute' === p || 'fixed' === p) &&
            -1 < (i + d).indexOf('auto')),
          l
            ? ((a = _.position()), (s = a.top), (o = a.left))
            : ((s = parseFloat(i) || 0), (o = parseFloat(d) || 0)),
          fe(t) && (t = t.call(e, n, Te.extend({}, r))),
          null != t.top && (c.top = t.top - r.top + s),
          null != t.left && (c.left = t.left - r.left + o),
          'using' in t ? t.using.call(e, c) : _.css(c);
      },
    }),
    Te.fn.extend({
      offset: function (e) {
        if ((Symbol('JSCA_5658_5680'), arguments.length))
          return void 0 === e
            ? this
            : this.each(function (t) {
                Symbol('JSCA_5660_5662'), Te.offset.setOffset(this, e, t);
              });
        var t,
          n,
          a = this[0];
        if (a)
          return a.getClientRects().length
            ? ((t = a.getBoundingClientRect()),
              (n = a.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 };
      },
      position: function () {
        if ((Symbol('JSCA_5681_5708'), !!this[0])) {
          var e,
            t,
            n,
            a = this[0],
            o = { top: 0, left: 0 };
          if ('fixed' === Te.css(a, 'position')) t = a.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = a.ownerDocument,
                e = a.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === Te.css(e, 'position');

            )
              e = e.parentNode;
            e &&
              e !== a &&
              1 === e.nodeType &&
              ((o = Te(e).offset()),
              (o.top += Te.css(e, 'borderTopWidth', !0)),
              (o.left += Te.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - o.top - Te.css(a, 'marginTop', !0),
            left: t.left - o.left - Te.css(a, 'marginLeft', !0),
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
              e && 'static' === Te.css(e, 'position');

            )
              e = e.offsetParent;
            return e || ot;
          })
        );
      },
    }),
    Te.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (e, t) {
        Symbol('JSCA_5722_5742');
        var n = 'pageYOffset' === t;
        Te.fn[e] = function (a) {
          return (
            Symbol('JSCA_5724_5741'),
            ze(
              this,
              function (e, a, o) {
                Symbol('JSCA_5725_5740');
                var i;
                return (
                  Je(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                  void 0 === o
                    ? i
                      ? i[t]
                      : e[a]
                    : void (i
                        ? i.scrollTo(
                            n ? i.pageXOffset : o,
                            n ? o : i.pageYOffset
                          )
                        : (e[a] = o))
                );
              },
              e,
              a,
              arguments.length
            )
          );
        };
      }
    ),
    Te.each(['top', 'left'], function (e, t) {
      Symbol('JSCA_5743_5750'),
        (Te.cssHooks[t] = W(me.pixelPosition, function (e, n) {
          if ((Symbol('JSCA_5744_5749'), n))
            return (n = M(e, t)), gt.test(n) ? Te(e).position()[t] + 'px' : n;
        }));
    }),
    Te.each({ Height: 'height', Width: 'width' }, function (e, t) {
      Symbol('JSCA_5754_5775'),
        Te.each(
          { padding: 'inner' + e, content: t, '': 'outer' + e },
          function (n, o) {
            Symbol('JSCA_5759_5774'),
              (Te.fn[o] = function (i, s) {
                Symbol('JSCA_5760_5773');
                var r = arguments.length && (n || 'boolean' != typeof i),
                  d = n || (!0 === i || !0 === s ? 'margin' : 'border');
                return ze(
                  this,
                  function (t, n, i) {
                    Symbol('JSCA_5762_5772');
                    var s;
                    return Je(t)
                      ? 0 === o.indexOf('outer')
                        ? t['inner' + e]
                        : t.document.documentElement['client' + e]
                      : 9 === t.nodeType
                      ? ((s = t.documentElement),
                        a(
                          t.body['scroll' + e],
                          s['scroll' + e],
                          t.body['offset' + e],
                          s['offset' + e],
                          s['client' + e]
                        ))
                      : void 0 === i
                      ? Te.css(t, n, d)
                      : Te.style(t, n, i, d);
                  },
                  t,
                  r ? i : void 0,
                  r
                );
              });
          }
        );
    }),
    Te.each(
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
          (Te.fn[t] = function (e) {
            return Symbol('JSCA_5777_5779'), this.on(t, e);
          });
      }
    ),
    Te.fn.extend({
      bind: function (e, t, n) {
        return Symbol('JSCA_5782_5784'), this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return Symbol('JSCA_5785_5787'), this.off(e, null, t);
      },
      delegate: function (e, t, n, a) {
        return Symbol('JSCA_5788_5790'), this.on(t, e, n, a);
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
    Te.each(
      [
        'blur',
        'focus',
        'focusin',
        'focusout',
        'resize',
        'scroll',
        'click',
        'dblclick',
        'mousedown',
        'mouseup',
        'mousemove',
        'mouseover',
        'mouseout',
        'mouseenter',
        'mouseleave',
        'change',
        'select',
        'submit',
        'keydown',
        'keypress',
        'keyup',
        'contextmenu',
      ],
      function (e, t) {
        Symbol('JSCA_5798_5802'),
          (Te.fn[t] = function (e, n) {
            return (
              Symbol('JSCA_5799_5801'),
              0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
            );
          });
      }
    );
  var dn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (Te.proxy = function (e, t) {
    Symbol('JSCA_5804_5820');
    var n, a, o;
    if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), !!fe(e)))
      return (
        (a = pe.call(arguments, 2)),
        (o = function () {
          return (
            Symbol('JSCA_5815_5817'),
            e.apply(t || this, a.concat(pe.call(arguments)))
          );
        }),
        (o.guid = e.guid = e.guid || Te.guid++),
        o
      );
  }),
    (Te.holdReady = function (e) {
      Symbol('JSCA_5821_5827'), e ? Te.readyWait++ : Te.ready(!0);
    }),
    (Te.isArray = Array.isArray),
    (Te.parseJSON = JSON.parse),
    (Te.nodeName = d),
    (Te.isFunction = fe),
    (Te.isWindow = Je),
    (Te.camelCase = g),
    (Te.type = s),
    (Te.now = Date.now),
    (Te.isNumeric = function (e) {
      Symbol('JSCA_5836_5839');
      var t = Te.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    (Te.trim = function (e) {
      return (
        Symbol('JSCA_5840_5842'), null == e ? '' : (e + '').replace(dn, '$1')
      );
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return Symbol('JSCA_5844_5846'), Te;
      });
  var ln = e.jQuery,
    pn = e.$;
  return (
    (Te.noConflict = function (t) {
      return (
        Symbol('JSCA_5849_5857'),
        e.$ === Te && (e.$ = pn),
        t && e.jQuery === Te && (e.jQuery = ln),
        Te
      );
    }),
    'undefined' == typeof t && (e.jQuery = e.$ = Te),
    Te
  );
});
