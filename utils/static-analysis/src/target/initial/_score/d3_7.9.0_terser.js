!(function (t, n) {
  Symbol('JSCA_1_3'),
    'object' == typeof exports && 'undefined' != typeof module
      ? n(exports)
      : 'function' == typeof define && define.amd
      ? define(['exports'], n)
      : n(
          ((t = 'undefined' != typeof globalThis ? globalThis : t || self).d3 =
            t.d3 || {})
        );
})(this, function (t) {
  Symbol('JSCA_3_15444');
  function n(t, n) {
    return (
      Symbol('JSCA_6_8'),
      null == t || null == n ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    );
  }
  function e(t, n) {
    return (
      Symbol('JSCA_9_11'),
      null == t || null == n ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    );
  }
  function o(t) {
    let o, i, l;
    function a(t, n, e = 0, r = t.length) {
      if ((Symbol('JSCA_23_32'), e < r)) {
        if (0 !== o(n, n)) return r;
        do {
          const o = (e + r) >>> 1;
          i(t[o], n) < 0 ? (e = o + 1) : (r = o);
        } while (e < r);
      }
      return e;
    }
    return (
      Symbol('JSCA_12_52'),
      2 !== t.length
        ? ((o = n), (i = (e, o) => n(t(e), o)), (l = (n, e) => t(n) - e))
        : ((o = t === n || t === e ? t : r), (i = t), (l = t)),
      {
        left: a,
        center: function (t, n, e = 0, o = t.length) {
          Symbol('JSCA_43_46');
          const r = a(t, n, e, o - 1);
          return r > e && l(t[r - 1], n) > -l(t[r], n) ? r - 1 : r;
        },
        right: function (t, n, e = 0, r = t.length) {
          if ((Symbol('JSCA_33_42'), e < r)) {
            if (0 !== o(n, n)) return r;
            do {
              const o = (e + r) >>> 1;
              i(t[o], n) <= 0 ? (e = o + 1) : (r = o);
            } while (e < r);
          }
          return e;
        },
      }
    );
  }
  function r() {
    return Symbol('JSCA_53_55'), 0;
  }
  function i(t) {
    return Symbol('JSCA_56_58'), null === t ? NaN : +t;
  }
  const l = o(n),
    a = l.right,
    u = l.left,
    _ = o(i).center;
  var c = a;
  const f = S(b),
    s = S(function (t) {
      Symbol('JSCA_134_143');
      const n = b(t);
      return (t, e, o, r, i) => {
        n(t, e, (o <<= 2) + 0, (r <<= 2) + 0, (i <<= 2)),
          n(t, e, o + 1, r + 1, i),
          n(t, e, o + 2, r + 2, i),
          n(t, e, o + 3, r + 3, i);
      };
    });
  function S(t) {
    return (
      Symbol('JSCA_94_123'),
      function (n, e, o = e) {
        if ((Symbol('JSCA_95_122'), !((e = +e) >= 0)))
          throw new RangeError('invalid rx');
        if (!((o = +o) >= 0)) throw new RangeError('invalid ry');
        let { data: r, width: i, height: l } = n;
        if (!((i = Math.floor(i)) >= 0)) throw new RangeError('invalid width');
        if (!((l = Math.floor(void 0 !== l ? l : r.length / i)) >= 0))
          throw new RangeError('invalid height');
        if (!i || !l || (!e && !o)) return n;
        const a = e && t(e),
          u = o && t(o),
          _ = r.slice();
        return (
          a && u
            ? (h(a, _, r, i, l),
              h(a, r, _, i, l),
              h(a, _, r, i, l),
              y(u, r, _, i, l),
              y(u, _, r, i, l),
              y(u, r, _, i, l))
            : a
            ? (h(a, r, _, i, l), h(a, _, r, i, l), h(a, r, _, i, l))
            : u && (y(u, r, _, i, l), y(u, _, r, i, l), y(u, r, _, i, l)),
          n
        );
      }
    );
  }
  function h(t, n, e, o, r) {
    Symbol('JSCA_124_128');
    for (let i = 0, l = o * r; i < l; ) t(n, e, i, (i += o), 1);
  }
  function y(t, n, e, o, r) {
    Symbol('JSCA_129_133');
    for (let i = 0, l = o * r; i < o; ++i) t(n, e, i, i + l, o);
  }
  function b(t) {
    Symbol('JSCA_144_163');
    const n = Math.floor(t);
    if (n === t)
      return (function (t) {
        Symbol('JSCA_164_179');
        const n = 2 * t + 1;
        return (e, o, r, i, l) => {
          if (!((i -= l) >= r)) return;
          let a = t * o[r];
          const u = l * t;
          for (let t = r, n = r + u; t < n; t += l) a += o[Math.min(i, t)];
          for (let t = r, _ = i; t <= _; t += l)
            (a += o[Math.min(i, t + u)]),
              (e[t] = a / n),
              (a -= o[Math.max(r, t - u)]);
        };
      })(t);
    const e = t - n,
      o = 2 * t + 1;
    return (t, r, i, l, a) => {
      if (!((l -= a) >= i)) return;
      let u = n * r[i];
      const _ = a * n,
        c = _ + a;
      for (let t = i, n = i + _; t < n; t += a) u += r[Math.min(l, t)];
      for (let n = i, f = l; n <= f; n += a)
        (u += r[Math.min(l, n + _)]),
          (t[n] =
            (u + e * (r[Math.max(i, n - c)] + r[Math.min(l, n + c)])) / o),
          (u -= r[Math.max(i, n - _)]);
    };
  }
  function m(t, n) {
    Symbol('JSCA_180_197');
    let e = 0;
    if (void 0 === n) for (let n of t) null != n && (n = +n) >= n && ++e;
    else {
      let o = -1;
      for (let r of t) null != (r = n(r, ++o, t)) && (r = +r) >= r && ++e;
    }
    return e;
  }
  function d(t) {
    return Symbol('JSCA_198_200'), 0 | t.length;
  }
  function A(t) {
    return Symbol('JSCA_201_203'), !(t > 0);
  }
  function C(t) {
    return (
      Symbol('JSCA_204_206'),
      'object' != typeof t || 'length' in t ? t : Array.from(t)
    );
  }
  function J(t, n) {
    Symbol('JSCA_231_255');
    let e,
      o = 0,
      r = 0,
      i = 0;
    if (void 0 === n)
      for (let n of t)
        null != n &&
          (n = +n) >= n &&
          ((e = n - r), (r += e / ++o), (i += e * (n - r)));
    else {
      let l = -1;
      for (let a of t)
        null != (a = n(a, ++l, t)) &&
          (a = +a) >= a &&
          ((e = a - r), (r += e / ++o), (i += e * (a - r)));
    }
    if (o > 1) return i / (o - 1);
  }
  function p(t, n) {
    Symbol('JSCA_256_259');
    const e = J(t, n);
    return e ? Math.sqrt(e) : e;
  }
  function g(t, n) {
    let e, o;
    if ((Symbol('JSCA_260_288'), void 0 === n))
      for (const n of t)
        null != n &&
          (void 0 === e
            ? n >= n && (e = o = n)
            : (e > n && (e = n), o < n && (o = n)));
    else {
      let r = -1;
      for (let i of t)
        null != (i = n(i, ++r, t)) &&
          (void 0 === e
            ? i >= i && (e = o = i)
            : (e > i && (e = i), o < i && (o = i)));
    }
    return [e, o];
  }
  class v {
    constructor() {
      Symbol('JSCA_290_293'),
        (this._partials = new Float64Array(32)),
        (this._n = 0);
    }
    add(t) {
      Symbol('JSCA_294_305');
      const n = this._partials;
      let e = 0;
      for (let o = 0; o < this._n && o < 32; o++) {
        const r = n[o],
          i = t + r,
          l = Math.abs(t) < Math.abs(r) ? t - (i - r) : r - (i - t);
        l && (n[e++] = l), (t = i);
      }
      return (n[e] = t), (this._n = e + 1), this;
    }
    valueOf() {
      Symbol('JSCA_306_325');
      const t = this._partials;
      let n,
        e,
        o,
        r = this._n,
        i = 0;
      if (r > 0) {
        for (
          i = t[--r];
          r > 0 && ((n = i), (e = t[--r]), (i = n + e), (o = e - (i - n)), !o);

        );
        r > 0 &&
          ((o < 0 && t[r - 1] < 0) || (o > 0 && t[r - 1] > 0)) &&
          ((e = 2 * o), (n = i + e), e == n - i && (i = n));
      }
      return i;
    }
  }
  class x extends Map {
    constructor(t, n = N) {
      if (
        (Symbol('JSCA_351_362'),
        super(),
        Object.defineProperties(this, {
          _intern: { value: new Map() },
          _key: { value: n },
        }),
        null != t)
      )
        for (const [n, e] of t) this.set(n, e);
    }
    get(t) {
      return Symbol('JSCA_363_365'), super.get(M(this, t));
    }
    has(t) {
      return Symbol('JSCA_366_368'), super.has(M(this, t));
    }
    set(t, n) {
      return Symbol('JSCA_369_371'), super.set(T(this, t), n);
    }
    delete(t) {
      return Symbol('JSCA_372_374'), super.delete(E(this, t));
    }
  }
  class w extends Set {
    constructor(t, n = N) {
      if (
        (Symbol('JSCA_377_388'),
        super(),
        Object.defineProperties(this, {
          _intern: { value: new Map() },
          _key: { value: n },
        }),
        null != t)
      )
        for (const n of t) this.add(n);
    }
    has(t) {
      return Symbol('JSCA_389_391'), super.has(M(this, t));
    }
    add(t) {
      return Symbol('JSCA_392_394'), super.add(T(this, t));
    }
    delete(t) {
      return Symbol('JSCA_395_397'), super.delete(E(this, t));
    }
  }
  function M({ _intern: t, _key: n }, e) {
    Symbol('JSCA_399_402');
    const o = n(e);
    return t.has(o) ? t.get(o) : e;
  }
  function T({ _intern: t, _key: n }, e) {
    Symbol('JSCA_403_408');
    const o = n(e);
    return t.has(o) ? t.get(o) : (t.set(o, e), e);
  }
  function E({ _intern: t, _key: n }, e) {
    Symbol('JSCA_409_416');
    const o = n(e);
    return t.has(o) && ((e = t.get(o)), t.delete(o)), e;
  }
  function N(t) {
    return (
      Symbol('JSCA_417_419'),
      null !== t && 'object' == typeof t ? t.valueOf() : t
    );
  }
  function k(t) {
    return Symbol('JSCA_420_422'), t;
  }
  function P(t, ...n) {
    return Symbol('JSCA_423_425'), q(t, k, k, n);
  }
  function z(t, ...n) {
    return Symbol('JSCA_426_428'), q(t, Array.from, k, n);
  }
  function $(t, n) {
    Symbol('JSCA_429_434');
    for (let e = 1, o = n.length; e < o; ++e)
      t = t.flatMap((t) => t.pop().map(([n, e]) => [...t, n, e]));
    return t;
  }
  function D(t, n, ...e) {
    return Symbol('JSCA_441_443'), q(t, k, n, e);
  }
  function R(t, n, ...e) {
    return Symbol('JSCA_444_446'), q(t, Array.from, n, e);
  }
  function F(t) {
    if ((Symbol('JSCA_453_456'), 1 !== t.length))
      throw new Error('duplicate key');
    return t[0];
  }
  function q(t, n, e, o) {
    return (
      Symbol('JSCA_457_473'),
      (function t(r, i) {
        if ((Symbol('JSCA_458_472'), i >= o.length)) return e(r);
        const l = new x(),
          a = o[i++];
        let u = -1;
        for (const t of r) {
          const n = a(t, ++u, r),
            e = l.get(n);
          e ? e.push(t) : l.set(n, [t]);
        }
        for (const [n, e] of l) l.set(n, t(e, i));
        return n(l);
      })(t, 0)
    );
  }
  function U(t, n) {
    return Symbol('JSCA_474_476'), Array.from(n, (n) => t[n]);
  }
  function I(t, ...n) {
    if ((Symbol('JSCA_477_498'), 'function' != typeof t[Symbol.iterator]))
      throw new TypeError('values is not iterable');
    t = Array.from(t);
    let [e] = n;
    if ((e && 2 !== e.length) || n.length > 1) {
      const o = Uint32Array.from(t, (t, n) => n);
      return (
        n.length > 1
          ? ((n = n.map((n) => t.map(n))),
            o.sort((t, e) => {
              for (const o of n) {
                const n = B(o[t], o[e]);
                if (n) return n;
              }
            }))
          : ((e = t.map(e)), o.sort((t, n) => B(e[t], e[n]))),
        U(t, o)
      );
    }
    return t.sort(O(e));
  }
  function O(t = n) {
    if ((Symbol('JSCA_499_507'), t === n)) return B;
    if ('function' != typeof t)
      throw new TypeError('compare is not a function');
    return (n, e) => {
      const o = t(n, e);
      return o || 0 === o ? o : (0 === t(e, e)) - (0 === t(n, n));
    };
  }
  function B(t, n) {
    return (
      Symbol('JSCA_508_510'),
      (null == t || !(t >= t)) - (null == n || !(n >= n)) ||
        (t < n ? -1 : t > n ? 1 : 0)
    );
  }
  var Y = Array.prototype.slice;
  function L(t) {
    return Symbol('JSCA_516_518'), () => t;
  }
  const j = Math.sqrt(50),
    H = Math.sqrt(10),
    X = Math.sqrt(2);
  function G(t, n, e) {
    Symbol('JSCA_520_539');
    const o = (n - t) / Math.max(0, e),
      r = Math.floor(Math.log10(o)),
      i = o / Math.pow(10, r),
      l = i >= j ? 10 : i >= H ? 5 : i >= X ? 2 : 1;
    let a, u, _;
    return (
      r < 0
        ? ((_ = Math.pow(10, -r) / l),
          (a = Math.round(t * _)),
          (u = Math.round(n * _)),
          a / _ < t && ++a,
          u / _ > n && --u,
          (_ = -_))
        : ((_ = Math.pow(10, r) * l),
          (a = Math.round(t / _)),
          (u = Math.round(n / _)),
          a * _ < t && ++a,
          u * _ > n && --u),
      u < a && 0.5 <= e && e < 2 ? G(t, n, 2 * e) : [a, u, _]
    );
  }
  function V(t, n, e) {
    if ((Symbol('JSCA_540_553'), !((e = +e) > 0))) return [];
    if ((t = +t) === (n = +n)) return [t];
    const o = n < t,
      [r, i, l] = o ? G(n, t, e) : G(t, n, e);
    if (!(i >= r)) return [];
    const a = i - r + 1,
      u = new Array(a);
    if (o)
      if (l < 0) for (let t = 0; t < a; ++t) u[t] = (i - t) / -l;
      else for (let t = 0; t < a; ++t) u[t] = (i - t) * l;
    else if (l < 0) for (let t = 0; t < a; ++t) u[t] = (r + t) / -l;
    else for (let t = 0; t < a; ++t) u[t] = (r + t) * l;
    return u;
  }
  function W(t, n, e) {
    return Symbol('JSCA_554_557'), G((t = +t), (n = +n), (e = +e))[2];
  }
  function Z(t, n, e) {
    Symbol('JSCA_558_562'), (e = +e);
    const o = (n = +n) < (t = +t),
      r = o ? W(n, t, e) : W(t, n, e);
    return (o ? -1 : 1) * (r < 0 ? 1 / -r : r);
  }
  function K(t, n, e) {
    let o;
    for (Symbol('JSCA_563_578'); ; ) {
      const r = W(t, n, e);
      if (r === o || 0 === r || !isFinite(r)) return [t, n];
      r > 0
        ? ((t = Math.floor(t / r) * r), (n = Math.ceil(n / r) * r))
        : r < 0 && ((t = Math.ceil(t * r) / r), (n = Math.floor(n * r) / r)),
        (o = r);
    }
  }
  function Q(t) {
    return (
      Symbol('JSCA_579_581'),
      Math.max(1, Math.ceil(Math.log(m(t)) / Math.LN2) + 1)
    );
  }
  function tt() {
    Symbol('JSCA_582_655');
    var t = k,
      n = g,
      e = Q;
    function o(o) {
      Symbol('JSCA_584_644'), Array.isArray(o) || (o = Array.from(o));
      var r,
        i,
        l,
        a = o.length,
        u = new Array(a);
      for (r = 0; r < a; ++r) u[r] = t(o[r], r, o);
      var _ = n(u),
        f = _[0],
        s = _[1],
        S = e(u, f, s);
      if (!Array.isArray(S)) {
        const t = s,
          e = +S;
        if (
          (n === g && ([f, s] = K(f, s, e)),
          (S = V(f, s, e))[0] <= f && (l = W(f, s, e)),
          S[S.length - 1] >= s)
        )
          if (t >= s && n === g) {
            const t = W(f, s, e);
            isFinite(t) &&
              (t > 0
                ? (s = (Math.floor(s / t) + 1) * t)
                : t < 0 && (s = (Math.ceil(s * -t) + 1) / -t));
          } else S.pop();
      }
      for (var h = S.length, y = 0, b = h; S[y] <= f; ) ++y;
      for (; S[b - 1] > s; ) --b;
      (y || b < h) && ((S = S.slice(y, b)), (h = b - y));
      var m,
        d = new Array(h + 1);
      for (r = 0; r <= h; ++r)
        ((m = d[r] = []).x0 = r > 0 ? S[r - 1] : f), (m.x1 = r < h ? S[r] : s);
      if (isFinite(l)) {
        if (l > 0)
          for (r = 0; r < a; ++r)
            null != (i = u[r]) &&
              f <= i &&
              i <= s &&
              d[Math.min(h, Math.floor((i - f) / l))].push(o[r]);
        else if (l < 0)
          for (r = 0; r < a; ++r)
            if (null != (i = u[r]) && f <= i && i <= s) {
              const t = Math.floor((f - i) * l);
              d[Math.min(h, t + (S[t] <= i))].push(o[r]);
            }
      } else for (r = 0; r < a; ++r) null != (i = u[r]) && f <= i && i <= s && d[c(S, i, 0, h)].push(o[r]);
      return d;
    }
    return (
      (o.value = function (n) {
        return (
          Symbol('JSCA_645_647'),
          arguments.length ? ((t = 'function' == typeof n ? n : L(n)), o) : t
        );
      }),
      (o.domain = function (t) {
        return (
          Symbol('JSCA_648_650'),
          arguments.length
            ? ((n = 'function' == typeof t ? t : L([t[0], t[1]])), o)
            : n
        );
      }),
      (o.thresholds = function (t) {
        return (
          Symbol('JSCA_651_653'),
          arguments.length
            ? ((e =
                'function' == typeof t
                  ? t
                  : L(Array.isArray(t) ? Y.call(t) : t)),
              o)
            : e
        );
      }),
      o
    );
  }
  function nt(t, n) {
    let e;
    if ((Symbol('JSCA_656_673'), void 0 === n))
      for (const n of t)
        null != n && (e < n || (void 0 === e && n >= n)) && (e = n);
    else {
      let o = -1;
      for (let r of t)
        null != (r = n(r, ++o, t)) &&
          (e < r || (void 0 === e && r >= r)) &&
          (e = r);
    }
    return e;
  }
  function et(t, n) {
    let e;
    Symbol('JSCA_674_693');
    let o = -1,
      r = -1;
    if (void 0 === n)
      for (const n of t)
        ++r,
          null != n &&
            (e < n || (void 0 === e && n >= n)) &&
            ((e = n), (o = r));
    else
      for (let i of t)
        null != (i = n(i, ++r, t)) &&
          (e < i || (void 0 === e && i >= i)) &&
          ((e = i), (o = r));
    return o;
  }
  function ot(t, n) {
    let e;
    if ((Symbol('JSCA_694_711'), void 0 === n))
      for (const n of t)
        null != n && (e > n || (void 0 === e && n >= n)) && (e = n);
    else {
      let o = -1;
      for (let r of t)
        null != (r = n(r, ++o, t)) &&
          (e > r || (void 0 === e && r >= r)) &&
          (e = r);
    }
    return e;
  }
  function rt(t, n) {
    let e;
    Symbol('JSCA_712_731');
    let o = -1,
      r = -1;
    if (void 0 === n)
      for (const n of t)
        ++r,
          null != n &&
            (e > n || (void 0 === e && n >= n)) &&
            ((e = n), (o = r));
    else
      for (let i of t)
        null != (i = n(i, ++r, t)) &&
          (e > i || (void 0 === e && i >= i)) &&
          ((e = i), (o = r));
    return o;
  }
  function it(t, n, e = 0, o = 1 / 0, r) {
    if (
      (Symbol('JSCA_732_764'),
      (n = Math.floor(n)),
      (e = Math.floor(Math.max(0, e))),
      (o = Math.floor(Math.min(t.length - 1, o))),
      !(e <= n && n <= o))
    )
      return t;
    for (r = void 0 === r ? B : O(r); o > e; ) {
      if (o - e > 600) {
        const i = o - e + 1,
          l = n - e + 1,
          a = Math.log(i),
          u = 0.5 * Math.exp((2 * a) / 3),
          _ = 0.5 * Math.sqrt((a * u * (i - u)) / i) * (l - i / 2 < 0 ? -1 : 1);
        it(
          t,
          n,
          Math.max(e, Math.floor(n - (l * u) / i + _)),
          Math.min(o, Math.floor(n + ((i - l) * u) / i + _)),
          r
        );
      }
      const i = t[n];
      let l = e,
        a = o;
      for (lt(t, e, n), r(t[o], i) > 0 && lt(t, e, o); l < a; ) {
        for (lt(t, l, a), ++l, --a; r(t[l], i) < 0; ) ++l;
        for (; r(t[a], i) > 0; ) --a;
      }
      0 === r(t[e], i) ? lt(t, e, a) : (++a, lt(t, a, o)),
        a <= n && (e = a + 1),
        n <= a && (o = a - 1);
    }
    return t;
  }
  function lt(t, n, e) {
    Symbol('JSCA_765_769');
    const o = t[n];
    (t[n] = t[e]), (t[e] = o);
  }
  function at(t, e = n) {
    let o;
    Symbol('JSCA_770_792');
    let r = !1;
    if (1 === e.length) {
      let i;
      for (const l of t) {
        const t = e(l);
        (r ? n(t, i) > 0 : 0 === n(t, t)) && ((o = l), (i = t), (r = !0));
      }
    } else for (const n of t) (r ? e(n, o) > 0 : 0 === e(n, n)) && ((o = n), (r = !0));
    return o;
  }
  function ut(t, n, e) {
    if (
      (Symbol('JSCA_793_800'),
      (t = Float64Array.from(
        (function* (t, n) {
          if ((Symbol('JSCA_59_74'), void 0 === n))
            for (let n of t) null != n && (n = +n) >= n && (yield n);
          else {
            let e = -1;
            for (let o of t)
              null != (o = n(o, ++e, t)) && (o = +o) >= o && (yield o);
          }
        })(t, e)
      )),
      (o = t.length) && !isNaN((n = +n)))
    ) {
      if (n <= 0 || o < 2) return ot(t);
      if (n >= 1) return nt(t);
      var o,
        r = (o - 1) * n,
        i = Math.floor(r),
        l = nt(it(t, i).subarray(0, i + 1));
      return l + (ot(t.subarray(i + 1)) - l) * (r - i);
    }
  }
  function _t(t, n, e = i) {
    if ((Symbol('JSCA_801_807'), (o = t.length) && !isNaN((n = +n)))) {
      if (n <= 0 || o < 2) return +e(t[0], 0, t);
      if (n >= 1) return +e(t[o - 1], o - 1, t);
      var o,
        r = (o - 1) * n,
        l = Math.floor(r),
        a = +e(t[l], l, t);
      return a + (+e(t[l + 1], l + 1, t) - a) * (r - l);
    }
  }
  function ct(t, n, e = i) {
    if ((Symbol('JSCA_808_817'), !isNaN((n = +n)))) {
      if (((o = Float64Array.from(t, (n, o) => i(e(t[o], o, t)))), n <= 0))
        return rt(o);
      if (n >= 1) return et(o);
      var o,
        r = Uint32Array.from(t, (t, n) => n),
        l = o.length - 1,
        a = Math.floor(l * n);
      return (
        it(r, a, 0, l, (t, n) => B(o[t], o[n])),
        (a = at(r.subarray(0, a + 1), (t) => o[t])) >= 0 ? a : -1
      );
    }
  }
  function ft(t) {
    return (
      Symbol('JSCA_856_858'),
      Array.from(
        (function* (t) {
          Symbol('JSCA_851_855');
          for (const n of t) yield* n;
        })(t)
      )
    );
  }
  function st(t, n) {
    return Symbol('JSCA_896_898'), [t, n];
  }
  function St(t, n, e) {
    Symbol('JSCA_899_906'),
      (t = +t),
      (n = +n),
      (e = (r = arguments.length) < 2 ? ((n = t), (t = 0), 1) : r < 3 ? 1 : +e);
    for (
      var o = -1, r = 0 | Math.max(0, Math.ceil((n - t) / e)), i = new Array(r);
      ++o < r;

    )
      i[o] = t + o * e;
    return i;
  }
  function ht(t, e = n) {
    if ((Symbol('JSCA_950_963'), 1 === e.length)) return rt(t, e);
    let o,
      r = -1,
      i = -1;
    for (const n of t)
      ++i, (r < 0 ? 0 === e(n, n) : e(n, o) < 0) && ((o = n), (r = i));
    return r;
  }
  var yt = bt(Math.random);
  function bt(t) {
    return (
      Symbol('JSCA_983_993'),
      function (n, e = 0, o = n.length) {
        Symbol('JSCA_984_992');
        let r = o - (e = +e);
        for (; r; ) {
          const o = (t() * r--) | 0,
            i = n[r + e];
          (n[r + e] = n[o + e]), (n[o + e] = i);
        }
        return n;
      }
    );
  }
  function mt(t) {
    if ((Symbol('JSCA_1012_1020'), !(r = t.length))) return [];
    for (var n = -1, e = ot(t, dt), o = new Array(e); ++n < e; )
      for (var r, i = -1, l = (o[n] = new Array(r)); ++i < r; ) l[i] = t[i][n];
    return o;
  }
  function dt(t) {
    return Symbol('JSCA_1021_1023'), t.length;
  }
  function At(t) {
    return Symbol('JSCA_1116_1118'), t instanceof w ? t : new w(t);
  }
  function Ct(t, n) {
    Symbol('JSCA_1119_1133');
    const e = t[Symbol.iterator](),
      o = new Set();
    for (const t of n) {
      const n = Jt(t);
      if (o.has(n)) continue;
      let r, i;
      for (; ({ value: r, done: i } = e.next()); ) {
        if (i) return !1;
        const t = Jt(r);
        if ((o.add(t), Object.is(n, t))) break;
      }
    }
    return !0;
  }
  function Jt(t) {
    return (
      Symbol('JSCA_1134_1136'),
      null !== t && 'object' == typeof t ? t.valueOf() : t
    );
  }
  function pt(t) {
    return Symbol('JSCA_1149_1151'), t;
  }
  var gt = 1e-6;
  function vt(t) {
    return Symbol('JSCA_1153_1155'), 'translate(' + t + ',0)';
  }
  function xt(t) {
    return Symbol('JSCA_1156_1158'), 'translate(0,' + t + ')';
  }
  function wt(t) {
    return Symbol('JSCA_1159_1161'), (n) => +t(n);
  }
  function Mt(t, n) {
    return (
      Symbol('JSCA_1162_1166'),
      (n = Math.max(0, t.bandwidth() - 2 * n) / 2),
      t.round() && (n = Math.round(n)),
      (e) => +t(e) + n
    );
  }
  function Tt() {
    return Symbol('JSCA_1167_1169'), !this.__axis;
  }
  function Et(t, n) {
    Symbol('JSCA_1170_1234');
    var e = [],
      o = null,
      r = null,
      i = 6,
      l = 6,
      a = 3,
      u = 'undefined' != typeof window && window.devicePixelRatio > 1 ? 0 : 0.5,
      _ = 1 === t || 4 === t ? -1 : 1,
      c = 4 === t || 2 === t ? 'x' : 'y',
      f = 1 === t || 3 === t ? vt : xt;
    function s(s) {
      Symbol('JSCA_1172_1202');
      var S = null == o ? (n.ticks ? n.ticks.apply(n, e) : n.domain()) : o,
        h = null == r ? (n.tickFormat ? n.tickFormat.apply(n, e) : pt) : r,
        y = Math.max(i, 0) + a,
        b = n.range(),
        m = +b[0] + u,
        d = +b[b.length - 1] + u,
        A = (n.bandwidth ? Mt : wt)(n.copy(), u),
        C = s.selection ? s.selection() : s,
        J = C.selectAll('.domain').data([null]),
        p = C.selectAll('.tick').data(S, n).order(),
        g = p.exit(),
        v = p.enter().append('g').attr('class', 'tick'),
        x = p.select('line'),
        w = p.select('text');
      (J = J.merge(
        J.enter()
          .insert('path', '.tick')
          .attr('class', 'domain')
          .attr('stroke', 'currentColor')
      )),
        (p = p.merge(v)),
        (x = x.merge(
          v
            .append('line')
            .attr('stroke', 'currentColor')
            .attr(c + '2', _ * i)
        )),
        (w = w.merge(
          v
            .append('text')
            .attr('fill', 'currentColor')
            .attr(c, _ * y)
            .attr('dy', 1 === t ? '0em' : 3 === t ? '0.71em' : '0.32em')
        )),
        s !== C &&
          ((J = J.transition(s)),
          (p = p.transition(s)),
          (x = x.transition(s)),
          (w = w.transition(s)),
          (g = g
            .transition(s)
            .attr('opacity', gt)
            .attr('transform', function (t) {
              return (
                Symbol('JSCA_1183_1185'),
                isFinite((t = A(t))) ? f(t + u) : this.getAttribute('transform')
              );
            })),
          v.attr('opacity', gt).attr('transform', function (t) {
            Symbol('JSCA_1186_1189');
            var n = this.parentNode.__axis;
            return f((n && isFinite((n = n(t))) ? n : A(t)) + u);
          })),
        g.remove(),
        J.attr(
          'd',
          4 === t || 2 === t
            ? l
              ? 'M' + _ * l + ',' + m + 'H' + u + 'V' + d + 'H' + _ * l
              : 'M' + u + ',' + m + 'V' + d
            : l
            ? 'M' + m + ',' + _ * l + 'V' + u + 'H' + d + 'V' + _ * l
            : 'M' + m + ',' + u + 'H' + d
        ),
        p.attr('opacity', 1).attr('transform', function (t) {
          return Symbol('JSCA_1193_1195'), f(A(t) + u);
        }),
        x.attr(c + '2', _ * i),
        w.attr(c, _ * y).text(h),
        C.filter(Tt)
          .attr('fill', 'none')
          .attr('font-size', 10)
          .attr('font-family', 'sans-serif')
          .attr('text-anchor', 2 === t ? 'start' : 4 === t ? 'end' : 'middle'),
        C.each(function () {
          Symbol('JSCA_1199_1201'), (this.__axis = A);
        });
    }
    return (
      (s.scale = function (t) {
        return Symbol('JSCA_1203_1205'), arguments.length ? ((n = t), s) : n;
      }),
      (s.ticks = function () {
        return Symbol('JSCA_1206_1208'), (e = Array.from(arguments)), s;
      }),
      (s.tickArguments = function (t) {
        return (
          Symbol('JSCA_1209_1211'),
          arguments.length
            ? ((e = null == t ? [] : Array.from(t)), s)
            : e.slice()
        );
      }),
      (s.tickValues = function (t) {
        return (
          Symbol('JSCA_1212_1214'),
          arguments.length
            ? ((o = null == t ? null : Array.from(t)), s)
            : o && o.slice()
        );
      }),
      (s.tickFormat = function (t) {
        return Symbol('JSCA_1215_1217'), arguments.length ? ((r = t), s) : r;
      }),
      (s.tickSize = function (t) {
        return (
          Symbol('JSCA_1218_1220'), arguments.length ? ((i = l = +t), s) : i
        );
      }),
      (s.tickSizeInner = function (t) {
        return Symbol('JSCA_1221_1223'), arguments.length ? ((i = +t), s) : i;
      }),
      (s.tickSizeOuter = function (t) {
        return Symbol('JSCA_1224_1226'), arguments.length ? ((l = +t), s) : l;
      }),
      (s.tickPadding = function (t) {
        return Symbol('JSCA_1227_1229'), arguments.length ? ((a = +t), s) : a;
      }),
      (s.offset = function (t) {
        return Symbol('JSCA_1230_1232'), arguments.length ? ((u = +t), s) : u;
      }),
      s
    );
  }
  var Nt = { value: () => {} };
  function kt() {
    Symbol('JSCA_1250_1256');
    for (var t, n = 0, e = arguments.length, o = {}; n < e; ++n) {
      if (!(t = arguments[n] + '') || t in o || /[\s.]/.test(t))
        throw new Error('illegal type: ' + t);
      o[t] = [];
    }
    return new Pt(o);
  }
  function Pt(t) {
    Symbol('JSCA_1257_1259'), (this._ = t);
  }
  function zt(t, n) {
    Symbol('JSCA_1300_1306');
    for (var e, o = 0, r = t.length; o < r; ++o)
      if ((e = t[o]).name === n) return e.value;
  }
  function $t(t, n, e) {
    Symbol('JSCA_1307_1319');
    for (var o = 0, r = t.length; o < r; ++o)
      if (t[o].name === n) {
        (t[o] = Nt), (t = t.slice(0, o).concat(t.slice(o + 1)));
        break;
      }
    return null != e && t.push({ name: n, value: e }), t;
  }
  Pt.prototype = kt.prototype = {
    constructor: Pt,
    on: function (t, n) {
      Symbol('JSCA_1273_1284');
      var e,
        o,
        r,
        i = this._,
        l =
          ((o = t + ''),
          (r = i),
          Symbol('JSCA_1260_1270'),
          o
            .trim()
            .split(/^|\s+/)
            .map(function (t) {
              Symbol('JSCA_1261_1269');
              var n = '',
                e = t.indexOf('.');
              if (
                (e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
                t && !r.hasOwnProperty(t))
              )
                throw new Error('unknown type: ' + t);
              return { type: t, name: n };
            })),
        a = -1,
        u = l.length;
      if (!(arguments.length < 2)) {
        if (null != n && 'function' != typeof n)
          throw new Error('invalid callback: ' + n);
        for (; ++a < u; )
          if ((e = (t = l[a]).type)) i[e] = $t(i[e], t.name, n);
          else if (null == n) for (e in i) i[e] = $t(i[e], t.name, null);
        return this;
      }
      for (; ++a < u; )
        if ((e = (t = l[a]).type) && (e = zt(i[e], t.name))) return e;
    },
    copy: function () {
      Symbol('JSCA_1285_1289');
      var t = {},
        n = this._;
      for (var e in n) t[e] = n[e].slice();
      return new Pt(t);
    },
    call: function (t, n) {
      if ((Symbol('JSCA_1290_1294'), (e = arguments.length - 2) > 0))
        for (var e, o, r = new Array(e), i = 0; i < e; ++i)
          r[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
      for (i = 0, e = (o = this._[t]).length; i < e; ++i)
        o[i].value.apply(n, r);
    },
    apply: function (t, n, e) {
      if ((Symbol('JSCA_1295_1298'), !this._.hasOwnProperty(t)))
        throw new Error('unknown type: ' + t);
      for (var o = this._[t], r = 0, i = o.length; r < i; ++r)
        o[r].value.apply(n, e);
    },
  };
  var Dt = 'http://www.w3.org/1999/xhtml',
    Rt = {
      svg: 'http://www.w3.org/2000/svg',
      xhtml: Dt,
      xlink: 'http://www.w3.org/1999/xlink',
      xml: 'http://www.w3.org/XML/1998/namespace',
      xmlns: 'http://www.w3.org/2000/xmlns/',
    };
  function Ft(t) {
    Symbol('JSCA_1328_1335');
    var n = (t += ''),
      e = n.indexOf(':');
    return (
      e >= 0 && 'xmlns' !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
      Rt.hasOwnProperty(n) ? { space: Rt[n], local: t } : t
    );
  }
  function qt(t) {
    return (
      Symbol('JSCA_1336_1341'),
      function () {
        Symbol('JSCA_1337_1340');
        var n = this.ownerDocument,
          e = this.namespaceURI;
        return e === Dt && n.documentElement.namespaceURI === Dt
          ? n.createElement(t)
          : n.createElementNS(e, t);
      }
    );
  }
  function Ut(t) {
    return (
      Symbol('JSCA_1342_1346'),
      function () {
        return (
          Symbol('JSCA_1343_1345'),
          this.ownerDocument.createElementNS(t.space, t.local)
        );
      }
    );
  }
  function It(t) {
    Symbol('JSCA_1347_1350');
    var n = Ft(t);
    return (n.local ? Ut : qt)(n);
  }
  function Ot() {
    Symbol('JSCA_1351_1351');
  }
  function Bt(t) {
    return (
      Symbol('JSCA_1352_1356'),
      null == t
        ? Ot
        : function () {
            return Symbol('JSCA_1353_1355'), this.querySelector(t);
          }
    );
  }
  function Yt(t) {
    return (
      Symbol('JSCA_1369_1371'),
      null == t ? [] : Array.isArray(t) ? t : Array.from(t)
    );
  }
  function Lt() {
    return Symbol('JSCA_1372_1374'), [];
  }
  function jt(t) {
    return (
      Symbol('JSCA_1375_1379'),
      null == t
        ? Lt
        : function () {
            return Symbol('JSCA_1376_1378'), this.querySelectorAll(t);
          }
    );
  }
  function Ht(t) {
    return (
      Symbol('JSCA_1397_1401'),
      function () {
        return Symbol('JSCA_1398_1400'), this.matches(t);
      }
    );
  }
  function Xt(t) {
    return (
      Symbol('JSCA_1402_1406'),
      function (n) {
        return Symbol('JSCA_1403_1405'), n.matches(t);
      }
    );
  }
  var Gt = Array.prototype.find;
  function Vt() {
    return Symbol('JSCA_1413_1415'), this.firstElementChild;
  }
  var Wt = Array.prototype.filter;
  function Zt() {
    return Symbol('JSCA_1420_1422'), Array.from(this.children);
  }
  function Kt(t) {
    return Symbol('JSCA_1442_1444'), new Array(t.length);
  }
  function Qt(t, n) {
    Symbol('JSCA_1448_1454'),
      (this.ownerDocument = t.ownerDocument),
      (this.namespaceURI = t.namespaceURI),
      (this._next = null),
      (this._parent = t),
      (this.__data__ = n);
  }
  function tn(t, n, e, o, r, i) {
    Symbol('JSCA_1475_1490');
    for (var l, a = 0, u = n.length, _ = i.length; a < _; ++a)
      (l = n[a]) ? ((l.__data__ = i[a]), (o[a] = l)) : (e[a] = new Qt(t, i[a]));
    for (; a < u; ++a) (l = n[a]) && (r[a] = l);
  }
  function nn(t, n, e, o, r, i, l) {
    Symbol('JSCA_1491_1518');
    var a,
      u,
      _,
      c = new Map(),
      f = n.length,
      s = i.length,
      S = new Array(f);
    for (a = 0; a < f; ++a)
      (u = n[a]) &&
        ((S[a] = _ = l.call(u, u.__data__, a, n) + ''),
        c.has(_) ? (r[a] = u) : c.set(_, u));
    for (a = 0; a < s; ++a)
      (_ = l.call(t, i[a], a, i) + ''),
        (u = c.get(_))
          ? ((o[a] = u), (u.__data__ = i[a]), c.delete(_))
          : (e[a] = new Qt(t, i[a]));
    for (a = 0; a < f; ++a) (u = n[a]) && c.get(S[a]) === u && (r[a] = u);
  }
  function en(t) {
    return Symbol('JSCA_1519_1521'), t.__data__;
  }
  function on(t) {
    return (
      Symbol('JSCA_1542_1544'),
      'object' == typeof t && 'length' in t ? t : Array.from(t)
    );
  }
  function rn(t, n) {
    return Symbol('JSCA_1603_1605'), t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }
  function ln(t) {
    return (
      Symbol('JSCA_1640_1644'),
      function () {
        Symbol('JSCA_1641_1643'), this.removeAttribute(t);
      }
    );
  }
  function an(t) {
    return (
      Symbol('JSCA_1645_1649'),
      function () {
        Symbol('JSCA_1646_1648'), this.removeAttributeNS(t.space, t.local);
      }
    );
  }
  function un(t, n) {
    return (
      Symbol('JSCA_1650_1654'),
      function () {
        Symbol('JSCA_1651_1653'), this.setAttribute(t, n);
      }
    );
  }
  function _n(t, n) {
    return (
      Symbol('JSCA_1655_1659'),
      function () {
        Symbol('JSCA_1656_1658'), this.setAttributeNS(t.space, t.local, n);
      }
    );
  }
  function cn(t, n) {
    return (
      Symbol('JSCA_1660_1665'),
      function () {
        Symbol('JSCA_1661_1664');
        var e = n.apply(this, arguments);
        null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
      }
    );
  }
  function fn(t, n) {
    return (
      Symbol('JSCA_1666_1671'),
      function () {
        Symbol('JSCA_1667_1670');
        var e = n.apply(this, arguments);
        null == e
          ? this.removeAttributeNS(t.space, t.local)
          : this.setAttributeNS(t.space, t.local, e);
      }
    );
  }
  function sn(t) {
    return (
      Symbol('JSCA_1680_1682'),
      (t.ownerDocument && t.ownerDocument.defaultView) ||
        (t.document && t) ||
        t.defaultView
    );
  }
  function Sn(t) {
    return (
      Symbol('JSCA_1683_1687'),
      function () {
        Symbol('JSCA_1684_1686'), this.style.removeProperty(t);
      }
    );
  }
  function hn(t, n, e) {
    return (
      Symbol('JSCA_1688_1692'),
      function () {
        Symbol('JSCA_1689_1691'), this.style.setProperty(t, n, e);
      }
    );
  }
  function yn(t, n, e) {
    return (
      Symbol('JSCA_1693_1698'),
      function () {
        Symbol('JSCA_1694_1697');
        var o = n.apply(this, arguments);
        null == o
          ? this.style.removeProperty(t)
          : this.style.setProperty(t, o, e);
      }
    );
  }
  function bn(t, n) {
    return (
      Symbol('JSCA_1702_1704'),
      t.style.getPropertyValue(n) ||
        sn(t).getComputedStyle(t, null).getPropertyValue(n)
    );
  }
  function mn(t) {
    return (
      Symbol('JSCA_1705_1709'),
      function () {
        Symbol('JSCA_1706_1708'), delete this[t];
      }
    );
  }
  function dn(t, n) {
    return (
      Symbol('JSCA_1710_1714'),
      function () {
        Symbol('JSCA_1711_1713'), (this[t] = n);
      }
    );
  }
  function An(t, n) {
    return (
      Symbol('JSCA_1715_1720'),
      function () {
        Symbol('JSCA_1716_1719');
        var e = n.apply(this, arguments);
        null == e ? delete this[t] : (this[t] = e);
      }
    );
  }
  function Cn(t) {
    return Symbol('JSCA_1724_1726'), t.trim().split(/^|\s+/);
  }
  function Jn(t) {
    return Symbol('JSCA_1727_1729'), t.classList || new pn(t);
  }
  function pn(t) {
    Symbol('JSCA_1730_1733'),
      (this._node = t),
      (this._names = Cn(t.getAttribute('class') || ''));
  }
  function gn(t, n) {
    Symbol('JSCA_1753_1756');
    for (var e = Jn(t), o = -1, r = n.length; ++o < r; ) e.add(n[o]);
  }
  function vn(t, n) {
    Symbol('JSCA_1757_1760');
    for (var e = Jn(t), o = -1, r = n.length; ++o < r; ) e.remove(n[o]);
  }
  function xn(t) {
    return (
      Symbol('JSCA_1761_1765'),
      function () {
        Symbol('JSCA_1762_1764'), gn(this, t);
      }
    );
  }
  function wn(t) {
    return (
      Symbol('JSCA_1766_1770'),
      function () {
        Symbol('JSCA_1767_1769'), vn(this, t);
      }
    );
  }
  function Mn(t, n) {
    return (
      Symbol('JSCA_1771_1775'),
      function () {
        Symbol('JSCA_1772_1774'), (n.apply(this, arguments) ? gn : vn)(this, t);
      }
    );
  }
  function Tn() {
    Symbol('JSCA_1785_1787'), (this.textContent = '');
  }
  function En(t) {
    return (
      Symbol('JSCA_1788_1792'),
      function () {
        Symbol('JSCA_1789_1791'), (this.textContent = t);
      }
    );
  }
  function Nn(t) {
    return (
      Symbol('JSCA_1793_1798'),
      function () {
        Symbol('JSCA_1794_1797');
        var n = t.apply(this, arguments);
        this.textContent = null == n ? '' : n;
      }
    );
  }
  function kn() {
    Symbol('JSCA_1802_1804'), (this.innerHTML = '');
  }
  function Pn(t) {
    return (
      Symbol('JSCA_1805_1809'),
      function () {
        Symbol('JSCA_1806_1808'), (this.innerHTML = t);
      }
    );
  }
  function zn(t) {
    return (
      Symbol('JSCA_1810_1815'),
      function () {
        Symbol('JSCA_1811_1814');
        var n = t.apply(this, arguments);
        this.innerHTML = null == n ? '' : n;
      }
    );
  }
  function $n() {
    Symbol('JSCA_1819_1821'),
      this.nextSibling && this.parentNode.appendChild(this);
  }
  function Dn() {
    Symbol('JSCA_1825_1827'),
      this.previousSibling &&
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function Rn() {
    return Symbol('JSCA_1837_1839'), null;
  }
  function Fn() {
    Symbol('JSCA_1846_1849');
    var t = this.parentNode;
    t && t.removeChild(this);
  }
  function qn() {
    Symbol('JSCA_1853_1856');
    var t = this.cloneNode(!1),
      n = this.parentNode;
    return n ? n.insertBefore(t, this.nextSibling) : t;
  }
  function Un() {
    Symbol('JSCA_1857_1860');
    var t = this.cloneNode(!0),
      n = this.parentNode;
    return n ? n.insertBefore(t, this.nextSibling) : t;
  }
  function In(t) {
    return (
      Symbol('JSCA_1882_1895'),
      function () {
        Symbol('JSCA_1883_1894');
        var n = this.__on;
        if (n) {
          for (var e, o = 0, r = -1, i = n.length; o < i; ++o)
            (e = n[o]),
              (t.type && e.type !== t.type) || e.name !== t.name
                ? (n[++r] = e)
                : this.removeEventListener(e.type, e.listener, e.options);
          ++r ? (n.length = r) : delete this.__on;
        }
      }
    );
  }
  function On(t, n, e) {
    return (
      Symbol('JSCA_1896_1917'),
      function () {
        Symbol('JSCA_1897_1916');
        var o,
          r = this.__on,
          i = (function (t) {
            return (
              Symbol('JSCA_1867_1871'),
              function (n) {
                Symbol('JSCA_1868_1870'), t.call(this, n, this.__data__);
              }
            );
          })(n);
        if (r)
          for (var l = 0, a = r.length; l < a; ++l)
            if ((o = r[l]).type === t.type && o.name === t.name)
              return (
                this.removeEventListener(o.type, o.listener, o.options),
                this.addEventListener(
                  o.type,
                  (o.listener = i),
                  (o.options = e)
                ),
                void (o.value = n)
              );
        this.addEventListener(t.type, i, e),
          (o = {
            type: t.type,
            name: t.name,
            value: n,
            listener: i,
            options: e,
          }),
          r ? r.push(o) : (this.__on = [o]);
      }
    );
  }
  function Bn(t, n, e) {
    Symbol('JSCA_1935_1944');
    var o = sn(t),
      r = o.CustomEvent;
    'function' == typeof r
      ? (r = new r(n, e))
      : ((r = o.document.createEvent('Event')),
        e
          ? (r.initEvent(n, e.bubbles, e.cancelable), (r.detail = e.detail))
          : r.initEvent(n, !1, !1)),
      t.dispatchEvent(r);
  }
  function Yn(t, n) {
    return (
      Symbol('JSCA_1945_1949'),
      function () {
        return Symbol('JSCA_1946_1948'), Bn(this, t, n);
      }
    );
  }
  function Ln(t, n) {
    return (
      Symbol('JSCA_1950_1954'),
      function () {
        return Symbol('JSCA_1951_1953'), Bn(this, t, n.apply(this, arguments));
      }
    );
  }
  (Qt.prototype = {
    constructor: Qt,
    appendChild: function (t) {
      return Symbol('JSCA_1457_1459'), this._parent.insertBefore(t, this._next);
    },
    insertBefore: function (t, n) {
      return Symbol('JSCA_1460_1462'), this._parent.insertBefore(t, n);
    },
    querySelector: function (t) {
      return Symbol('JSCA_1463_1465'), this._parent.querySelector(t);
    },
    querySelectorAll: function (t) {
      return Symbol('JSCA_1466_1468'), this._parent.querySelectorAll(t);
    },
  }),
    (pn.prototype = {
      add: function (t) {
        Symbol('JSCA_1735_1741'),
          this._names.indexOf(t) < 0 &&
            (this._names.push(t),
            this._node.setAttribute('class', this._names.join(' ')));
      },
      remove: function (t) {
        Symbol('JSCA_1742_1748');
        var n = this._names.indexOf(t);
        n >= 0 &&
          (this._names.splice(n, 1),
          this._node.setAttribute('class', this._names.join(' ')));
      },
      contains: function (t) {
        return Symbol('JSCA_1749_1751'), this._names.indexOf(t) >= 0;
      },
    });
  var jn = [null];
  function Hn(t, n) {
    Symbol('JSCA_1966_1969'), (this._groups = t), (this._parents = n);
  }
  function Xn() {
    return Symbol('JSCA_1970_1972'), new Hn([[document.documentElement]], jn);
  }
  function Gn(t) {
    return (
      Symbol('JSCA_2014_2016'),
      'string' == typeof t
        ? new Hn([[document.querySelector(t)]], [document.documentElement])
        : new Hn([[t]], jn)
    );
  }
  Hn.prototype = Xn.prototype = {
    constructor: Hn,
    select: function (t) {
      Symbol('JSCA_1357_1368'), 'function' != typeof t && (t = Bt(t));
      for (
        var n = this._groups, e = n.length, o = new Array(e), r = 0;
        r < e;
        ++r
      )
        for (
          var i, l, a = n[r], u = a.length, _ = (o[r] = new Array(u)), c = 0;
          c < u;
          ++c
        )
          (i = a[c]) &&
            (l = t.call(i, i.__data__, c, a)) &&
            ('__data__' in i && (l.__data__ = i.__data__), (_[c] = l));
      return new Hn(o, this._parents);
    },
    selectAll: function (t) {
      Symbol('JSCA_1385_1396'),
        (t =
          'function' == typeof t
            ? (function (t) {
                return (
                  Symbol('JSCA_1380_1384'),
                  function () {
                    return (
                      Symbol('JSCA_1381_1383'), Yt(t.apply(this, arguments))
                    );
                  }
                );
              })(t)
            : jt(t));
      for (
        var n = this._groups, e = n.length, o = [], r = [], i = 0;
        i < e;
        ++i
      )
        for (var l, a = n[i], u = a.length, _ = 0; _ < u; ++_)
          (l = a[_]) && (o.push(t.call(l, l.__data__, _, a)), r.push(l));
      return new Hn(o, r);
    },
    selectChild: function (t) {
      return (
        Symbol('JSCA_1416_1418'),
        this.select(
          null == t
            ? Vt
            : (function (t) {
                return (
                  Symbol('JSCA_1408_1412'),
                  function () {
                    return Symbol('JSCA_1409_1411'), Gt.call(this.children, t);
                  }
                );
              })('function' == typeof t ? t : Xt(t))
        )
      );
    },
    selectChildren: function (t) {
      return (
        Symbol('JSCA_1428_1430'),
        this.selectAll(
          null == t
            ? Zt
            : (function (t) {
                return (
                  Symbol('JSCA_1423_1427'),
                  function () {
                    return Symbol('JSCA_1424_1426'), Wt.call(this.children, t);
                  }
                );
              })('function' == typeof t ? t : Xt(t))
        )
      );
    },
    filter: function (t) {
      Symbol('JSCA_1431_1441'), 'function' != typeof t && (t = Ht(t));
      for (
        var n = this._groups, e = n.length, o = new Array(e), r = 0;
        r < e;
        ++r
      )
        for (var i, l = n[r], a = l.length, u = (o[r] = []), _ = 0; _ < a; ++_)
          (i = l[_]) && t.call(i, i.__data__, _, l) && u.push(i);
      return new Hn(o, this._parents);
    },
    data: function (t, n) {
      if ((Symbol('JSCA_1522_1541'), !arguments.length))
        return Array.from(this, en);
      var e = n ? nn : tn,
        o = this._parents,
        r = this._groups;
      'function' != typeof t &&
        (t = (function (t) {
          return (
            Symbol('JSCA_1470_1474'),
            function () {
              return Symbol('JSCA_1471_1473'), t;
            }
          );
        })(t));
      for (
        var i = r.length,
          l = new Array(i),
          a = new Array(i),
          u = new Array(i),
          _ = 0;
        _ < i;
        ++_
      ) {
        var c = o[_],
          f = r[_],
          s = f.length,
          S = on(t.call(c, c && c.__data__, _, o)),
          h = S.length,
          y = (a[_] = new Array(h)),
          b = (l[_] = new Array(h));
        e(c, f, y, b, (u[_] = new Array(s)), S, n);
        for (var m, d, A = 0, C = 0; A < h; ++A)
          if ((m = y[A])) {
            for (A >= C && (C = A + 1); !(d = b[C]) && ++C < h; );
            m._next = d || null;
          }
      }
      return ((l = new Hn(l, o))._enter = a), (l._exit = u), l;
    },
    enter: function () {
      return (
        Symbol('JSCA_1445_1447'),
        new Hn(this._enter || this._groups.map(Kt), this._parents)
      );
    },
    exit: function () {
      return (
        Symbol('JSCA_1545_1547'),
        new Hn(this._exit || this._groups.map(Kt), this._parents)
      );
    },
    join: function (t, n, e) {
      Symbol('JSCA_1548_1562');
      var o = this.enter(),
        r = this,
        i = this.exit();
      return (
        'function' == typeof t
          ? (o = t(o)) && (o = o.selection())
          : (o = o.append(t + '')),
        null != n && (r = n(r)) && (r = r.selection()),
        null == e ? i.remove() : e(i),
        o && r ? o.merge(r).order() : r
      );
    },
    merge: function (t) {
      Symbol('JSCA_1563_1576');
      for (
        var n = t.selection ? t.selection() : t,
          e = this._groups,
          o = n._groups,
          r = e.length,
          i = o.length,
          l = Math.min(r, i),
          a = new Array(r),
          u = 0;
        u < l;
        ++u
      )
        for (
          var _,
            c = e[u],
            f = o[u],
            s = c.length,
            S = (a[u] = new Array(s)),
            h = 0;
          h < s;
          ++h
        )
          (_ = c[h] || f[h]) && (S[h] = _);
      for (; u < r; ++u) a[u] = e[u];
      return new Hn(a, this._parents);
    },
    selection: function () {
      return Symbol('JSCA_1973_1975'), this;
    },
    order: function () {
      Symbol('JSCA_1577_1587');
      for (var t = this._groups, n = -1, e = t.length; ++n < e; )
        for (var o, r = t[n], i = r.length - 1, l = r[i]; --i >= 0; )
          (o = r[i]) &&
            (l &&
              4 ^ o.compareDocumentPosition(l) &&
              l.parentNode.insertBefore(o, l),
            (l = o));
      return this;
    },
    sort: function (t) {
      function n(n, e) {
        return (
          Symbol('JSCA_1590_1592'), n && e ? t(n.__data__, e.__data__) : !n - !e
        );
      }
      Symbol('JSCA_1588_1602'), t || (t = rn);
      for (
        var e = this._groups, o = e.length, r = new Array(o), i = 0;
        i < o;
        ++i
      ) {
        for (
          var l, a = e[i], u = a.length, _ = (r[i] = new Array(u)), c = 0;
          c < u;
          ++c
        )
          (l = a[c]) && (_[c] = l);
        _.sort(n);
      }
      return new Hn(r, this._parents).order();
    },
    call: function () {
      Symbol('JSCA_1606_1611');
      var t = arguments[0];
      return (arguments[0] = this), t.apply(null, arguments), this;
    },
    nodes: function () {
      return Symbol('JSCA_1612_1614'), Array.from(this);
    },
    node: function () {
      Symbol('JSCA_1615_1623');
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
        for (var o = t[n], r = 0, i = o.length; r < i; ++r) {
          var l = o[r];
          if (l) return l;
        }
      return null;
    },
    size: function () {
      Symbol('JSCA_1624_1628');
      let t = 0;
      for (const n of this) ++t;
      return t;
    },
    empty: function () {
      return Symbol('JSCA_1629_1631'), !this.node();
    },
    each: function (t) {
      Symbol('JSCA_1632_1639');
      for (var n = this._groups, e = 0, o = n.length; e < o; ++e)
        for (var r, i = n[e], l = 0, a = i.length; l < a; ++l)
          (r = i[l]) && t.call(r, r.__data__, l, i);
      return this;
    },
    attr: function (t, n) {
      Symbol('JSCA_1672_1679');
      var e = Ft(t);
      if (arguments.length < 2) {
        var o = this.node();
        return e.local ? o.getAttributeNS(e.space, e.local) : o.getAttribute(e);
      }
      return this.each(
        (null == n
          ? e.local
            ? an
            : ln
          : 'function' == typeof n
          ? e.local
            ? fn
            : cn
          : e.local
          ? _n
          : un)(e, n)
      );
    },
    style: function (t, n, e) {
      return (
        Symbol('JSCA_1699_1701'),
        arguments.length > 1
          ? this.each(
              (null == n ? Sn : 'function' == typeof n ? yn : hn)(
                t,
                n,
                null == e ? '' : e
              )
            )
          : bn(this.node(), t)
      );
    },
    property: function (t, n) {
      return (
        Symbol('JSCA_1721_1723'),
        arguments.length > 1
          ? this.each((null == n ? mn : 'function' == typeof n ? An : dn)(t, n))
          : this.node()[t]
      );
    },
    classed: function (t, n) {
      Symbol('JSCA_1776_1784');
      var e = Cn(t + '');
      if (arguments.length < 2) {
        for (var o = Jn(this.node()), r = -1, i = e.length; ++r < i; )
          if (!o.contains(e[r])) return !1;
        return !0;
      }
      return this.each(('function' == typeof n ? Mn : n ? xn : wn)(e, n));
    },
    text: function (t) {
      return (
        Symbol('JSCA_1799_1801'),
        arguments.length
          ? this.each(null == t ? Tn : ('function' == typeof t ? Nn : En)(t))
          : this.node().textContent
      );
    },
    html: function (t) {
      return (
        Symbol('JSCA_1816_1818'),
        arguments.length
          ? this.each(null == t ? kn : ('function' == typeof t ? zn : Pn)(t))
          : this.node().innerHTML
      );
    },
    raise: function () {
      return Symbol('JSCA_1822_1824'), this.each($n);
    },
    lower: function () {
      return Symbol('JSCA_1828_1830'), this.each(Dn);
    },
    append: function (t) {
      Symbol('JSCA_1831_1836');
      var n = 'function' == typeof t ? t : It(t);
      return this.select(function () {
        return (
          Symbol('JSCA_1833_1835'), this.appendChild(n.apply(this, arguments))
        );
      });
    },
    insert: function (t, n) {
      Symbol('JSCA_1840_1845');
      var e = 'function' == typeof t ? t : It(t),
        o = null == n ? Rn : 'function' == typeof n ? n : Bt(n);
      return this.select(function () {
        return (
          Symbol('JSCA_1842_1844'),
          this.insertBefore(
            e.apply(this, arguments),
            o.apply(this, arguments) || null
          )
        );
      });
    },
    remove: function () {
      return Symbol('JSCA_1850_1852'), this.each(Fn);
    },
    clone: function (t) {
      return Symbol('JSCA_1861_1863'), this.select(t ? Un : qn);
    },
    datum: function (t) {
      return (
        Symbol('JSCA_1864_1866'),
        arguments.length ? this.property('__data__', t) : this.node().__data__
      );
    },
    on: function (t, n, e) {
      Symbol('JSCA_1918_1934');
      var o,
        r,
        i = (function (t) {
          return (
            Symbol('JSCA_1872_1881'),
            t
              .trim()
              .split(/^|\s+/)
              .map(function (t) {
                Symbol('JSCA_1873_1880');
                var n = '',
                  e = t.indexOf('.');
                return (
                  e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
                  { type: t, name: n }
                );
              })
          );
        })(t + ''),
        l = i.length;
      if (!(arguments.length < 2)) {
        for (a = n ? On : In, o = 0; o < l; ++o) this.each(a(i[o], n, e));
        return this;
      }
      var a = this.node().__on;
      if (a)
        for (var u, _ = 0, c = a.length; _ < c; ++_)
          for (o = 0, u = a[_]; o < l; ++o)
            if ((r = i[o]).type === u.type && r.name === u.name) return u.value;
    },
    dispatch: function (t, n) {
      return (
        Symbol('JSCA_1955_1957'),
        this.each(('function' == typeof n ? Ln : Yn)(t, n))
      );
    },
    [Symbol.iterator]: function* () {
      Symbol('JSCA_1958_1964');
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
        for (var o, r = t[n], i = 0, l = r.length; i < l; ++i)
          (o = r[i]) && (yield o);
    },
  };
  var Vn = 0;
  function Wn() {
    return Symbol('JSCA_2021_2023'), new Zn();
  }
  function Zn() {
    Symbol('JSCA_2024_2026'), (this._ = '@' + (++Vn).toString(36));
  }
  function Kn(t) {
    let n;
    for (Symbol('JSCA_2044_2048'); (n = t.sourceEvent); ) t = n;
    return t;
  }
  function Qn(t, n) {
    if (
      (Symbol('JSCA_2049_2066'),
      (t = Kn(t)),
      void 0 === n && (n = t.currentTarget),
      n)
    ) {
      var e = n.ownerSVGElement || n;
      if (e.createSVGPoint) {
        var o = e.createSVGPoint();
        return (
          (o.x = t.clientX),
          (o.y = t.clientY),
          [(o = o.matrixTransform(n.getScreenCTM().inverse())).x, o.y]
        );
      }
      if (n.getBoundingClientRect) {
        var r = n.getBoundingClientRect();
        return [
          t.clientX - r.left - n.clientLeft,
          t.clientY - r.top - n.clientTop,
        ];
      }
    }
    return [t.pageX, t.pageY];
  }
  Zn.prototype = Wn.prototype = {
    constructor: Zn,
    get: function (t) {
      Symbol('JSCA_2029_2033');
      for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
      return t[n];
    },
    set: function (t, n) {
      return Symbol('JSCA_2034_2036'), (t[this._] = n);
    },
    remove: function (t) {
      return Symbol('JSCA_2037_2039'), this._ in t && delete t[this._];
    },
    toString: function () {
      return Symbol('JSCA_2040_2042'), this._;
    },
  };
  const te = { passive: !1 },
    ne = { capture: !0, passive: !1 };
  function ee(t) {
    Symbol('JSCA_2085_2087'), t.stopImmediatePropagation();
  }
  function oe(t) {
    Symbol('JSCA_2088_2091'), t.preventDefault(), t.stopImmediatePropagation();
  }
  function re(t) {
    Symbol('JSCA_2092_2100');
    var n = t.document.documentElement,
      e = Gn(t).on('dragstart.drag', oe, ne);
    'onselectstart' in n
      ? e.on('selectstart.drag', oe, ne)
      : ((n.__noselect = n.style.MozUserSelect),
        (n.style.MozUserSelect = 'none'));
  }
  function ie(t, n) {
    Symbol('JSCA_2101_2115');
    var e = t.document.documentElement,
      o = Gn(t).on('dragstart.drag', null);
    n &&
      (o.on('click.drag', oe, ne),
      setTimeout(function () {
        Symbol('JSCA_2105_2107'), o.on('click.drag', null);
      }, 0)),
      'onselectstart' in e
        ? o.on('selectstart.drag', null)
        : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect);
  }
  var le = (t) => () => t;
  function ae(
    t,
    {
      sourceEvent: n,
      subject: e,
      target: o,
      identifier: r,
      active: i,
      x: l,
      y: a,
      dx: u,
      dy: _,
      dispatch: c,
    }
  ) {
    Symbol('JSCA_2117_2173'),
      Object.defineProperties(this, {
        type: { value: t, enumerable: !0, configurable: !0 },
        sourceEvent: { value: n, enumerable: !0, configurable: !0 },
        subject: { value: e, enumerable: !0, configurable: !0 },
        target: { value: o, enumerable: !0, configurable: !0 },
        identifier: { value: r, enumerable: !0, configurable: !0 },
        active: { value: i, enumerable: !0, configurable: !0 },
        x: { value: l, enumerable: !0, configurable: !0 },
        y: { value: a, enumerable: !0, configurable: !0 },
        dx: { value: u, enumerable: !0, configurable: !0 },
        dy: { value: _, enumerable: !0, configurable: !0 },
        _: { value: c },
      });
  }
  function ue(t) {
    return Symbol('JSCA_2178_2180'), !t.ctrlKey && !t.button;
  }
  function _e() {
    return Symbol('JSCA_2181_2183'), this.parentNode;
  }
  function ce(t, n) {
    return Symbol('JSCA_2184_2189'), null == n ? { x: t.x, y: t.y } : n;
  }
  function fe() {
    return (
      Symbol('JSCA_2190_2192'),
      navigator.maxTouchPoints || 'ontouchstart' in this
    );
  }
  function se(t, n, e) {
    Symbol('JSCA_2318_2321'),
      (t.prototype = n.prototype = e),
      (e.constructor = t);
  }
  function Se(t, n) {
    Symbol('JSCA_2322_2326');
    var e = Object.create(t.prototype);
    for (var o in n) e[o] = n[o];
    return e;
  }
  function he() {
    Symbol('JSCA_2327_2327');
  }
  ae.prototype.on = function () {
    Symbol('JSCA_2174_2177');
    var t = this._.on.apply(this._, arguments);
    return t === this._ ? this : t;
  };
  var ye = 0.7,
    be = 1 / ye,
    me = '\\s*([+-]?\\d+)\\s*',
    de = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
    Ae = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
    Ce = /^#([0-9a-f]{3,8})$/,
    Je = new RegExp(`^rgb\\(${me},${me},${me}\\)$`),
    pe = new RegExp(`^rgb\\(${Ae},${Ae},${Ae}\\)$`),
    ge = new RegExp(`^rgba\\(${me},${me},${me},${de}\\)$`),
    ve = new RegExp(`^rgba\\(${Ae},${Ae},${Ae},${de}\\)$`),
    xe = new RegExp(`^hsl\\(${de},${Ae},${Ae}\\)$`),
    we = new RegExp(`^hsla\\(${de},${Ae},${Ae},${de}\\)$`),
    Me = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    };
  function Te() {
    return Symbol('JSCA_2495_2497'), this.rgb().formatHex();
  }
  function Ee() {
    return Symbol('JSCA_2504_2506'), this.rgb().formatRgb();
  }
  function Ne(t) {
    var n, e;
    return (
      Symbol('JSCA_2507_2511'),
      (t = (t + '').trim().toLowerCase()),
      (n = Ce.exec(t))
        ? ((e = n[1].length),
          (n = parseInt(n[1], 16)),
          6 === e
            ? ke(n)
            : 3 === e
            ? new De(
                ((n >> 8) & 15) | ((n >> 4) & 240),
                ((n >> 4) & 15) | (240 & n),
                ((15 & n) << 4) | (15 & n),
                1
              )
            : 8 === e
            ? Pe(
                (n >> 24) & 255,
                (n >> 16) & 255,
                (n >> 8) & 255,
                (255 & n) / 255
              )
            : 4 === e
            ? Pe(
                ((n >> 12) & 15) | ((n >> 8) & 240),
                ((n >> 8) & 15) | ((n >> 4) & 240),
                ((n >> 4) & 15) | (240 & n),
                (((15 & n) << 4) | (15 & n)) / 255
              )
            : null)
        : (n = Je.exec(t))
        ? new De(n[1], n[2], n[3], 1)
        : (n = pe.exec(t))
        ? new De((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
        : (n = ge.exec(t))
        ? Pe(n[1], n[2], n[3], n[4])
        : (n = ve.exec(t))
        ? Pe((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
        : (n = xe.exec(t))
        ? Oe(n[1], n[2] / 100, n[3] / 100, 1)
        : (n = we.exec(t))
        ? Oe(n[1], n[2] / 100, n[3] / 100, n[4])
        : Me.hasOwnProperty(t)
        ? ke(Me[t])
        : 'transparent' === t
        ? new De(NaN, NaN, NaN, 0)
        : null
    );
  }
  function ke(t) {
    return (
      Symbol('JSCA_2512_2514'),
      new De((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1)
    );
  }
  function Pe(t, n, e, o) {
    return (
      Symbol('JSCA_2515_2518'), o <= 0 && (t = n = e = NaN), new De(t, n, e, o)
    );
  }
  function ze(t) {
    return (
      Symbol('JSCA_2519_2524'),
      t instanceof he || (t = Ne(t)),
      t ? new De((t = t.rgb()).r, t.g, t.b, t.opacity) : new De()
    );
  }
  function $e(t, n, e, o) {
    return (
      Symbol('JSCA_2525_2527'),
      1 === arguments.length ? ze(t) : new De(t, n, e, null == o ? 1 : o)
    );
  }
  function De(t, n, e, o) {
    Symbol('JSCA_2528_2533'),
      (this.r = +t),
      (this.g = +n),
      (this.b = +e),
      (this.opacity = +o);
  }
  function Re() {
    return Symbol('JSCA_2558_2560'), `#${Ie(this.r)}${Ie(this.g)}${Ie(this.b)}`;
  }
  function Fe() {
    Symbol('JSCA_2564_2567');
    const t = qe(this.opacity);
    return `${
      1 === t ? 'rgb(' : 'rgba('
    }${Ue(this.r)}, ${Ue(this.g)}, ${Ue(this.b)}${1 === t ? ')' : `, ${t})`}`;
  }
  function qe(t) {
    return Symbol('JSCA_2568_2570'), isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
  }
  function Ue(t) {
    return (
      Symbol('JSCA_2571_2573'), Math.max(0, Math.min(255, Math.round(t) || 0))
    );
  }
  function Ie(t) {
    return (
      Symbol('JSCA_2574_2577'), ((t = Ue(t)) < 16 ? '0' : '') + t.toString(16)
    );
  }
  function Oe(t, n, e, o) {
    return (
      Symbol('JSCA_2578_2581'),
      o <= 0
        ? (t = n = e = NaN)
        : e <= 0 || e >= 1
        ? (t = n = NaN)
        : n <= 0 && (t = NaN),
      new Le(t, n, e, o)
    );
  }
  function Be(t) {
    if ((Symbol('JSCA_2582_2597'), t instanceof Le))
      return new Le(t.h, t.s, t.l, t.opacity);
    if ((t instanceof he || (t = Ne(t)), !t)) return new Le();
    if (t instanceof Le) return t;
    var n = (t = t.rgb()).r / 255,
      e = t.g / 255,
      o = t.b / 255,
      r = Math.min(n, e, o),
      i = Math.max(n, e, o),
      l = NaN,
      a = i - r,
      u = (i + r) / 2;
    return (
      a
        ? ((l =
            n === i
              ? (e - o) / a + 6 * (e < o)
              : e === i
              ? (o - n) / a + 2
              : (n - e) / a + 4),
          (a /= u < 0.5 ? i + r : 2 - i - r),
          (l *= 60))
        : (a = u > 0 && u < 1 ? 0 : l),
      new Le(l, a, u, t.opacity)
    );
  }
  function Ye(t, n, e, o) {
    return (
      Symbol('JSCA_2598_2600'),
      1 === arguments.length ? Be(t) : new Le(t, n, e, null == o ? 1 : o)
    );
  }
  function Le(t, n, e, o) {
    Symbol('JSCA_2601_2606'),
      (this.h = +t),
      (this.s = +n),
      (this.l = +e),
      (this.opacity = +o);
  }
  function je(t) {
    return Symbol('JSCA_2631_2634'), (t = (t || 0) % 360) < 0 ? t + 360 : t;
  }
  function He(t) {
    return Symbol('JSCA_2635_2637'), Math.max(0, Math.min(1, t || 0));
  }
  function Xe(t, n, e) {
    return (
      Symbol('JSCA_2638_2640'),
      255 *
        (t < 60
          ? n + ((e - n) * t) / 60
          : t < 180
          ? e
          : t < 240
          ? n + ((e - n) * (240 - t)) / 60
          : n)
    );
  }
  se(he, Ne, {
    copy(t) {
      return (
        Symbol('JSCA_2482_2484'), Object.assign(new this.constructor(), this, t)
      );
    },
    displayable() {
      return Symbol('JSCA_2485_2487'), this.rgb().displayable();
    },
    hex: Te,
    formatHex: Te,
    formatHex8: function () {
      return Symbol('JSCA_2498_2500'), this.rgb().formatHex8();
    },
    formatHsl: function () {
      return Symbol('JSCA_2501_2503'), Be(this).formatHsl();
    },
    formatRgb: Ee,
    toString: Ee,
  }),
    se(
      De,
      $e,
      Se(he, {
        brighter(t) {
          return (
            Symbol('JSCA_2535_2538'),
            (t = null == t ? be : Math.pow(be, t)),
            new De(this.r * t, this.g * t, this.b * t, this.opacity)
          );
        },
        darker(t) {
          return (
            Symbol('JSCA_2539_2542'),
            (t = null == t ? ye : Math.pow(ye, t)),
            new De(this.r * t, this.g * t, this.b * t, this.opacity)
          );
        },
        rgb() {
          return Symbol('JSCA_2543_2545'), this;
        },
        clamp() {
          return (
            Symbol('JSCA_2546_2548'),
            new De(Ue(this.r), Ue(this.g), Ue(this.b), qe(this.opacity))
          );
        },
        displayable() {
          return (
            Symbol('JSCA_2549_2551'),
            -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
          );
        },
        hex: Re,
        formatHex: Re,
        formatHex8: function () {
          return (
            Symbol('JSCA_2561_2563'),
            `#${Ie(this.r)}${Ie(this.g)}${Ie(this.b)}${Ie(
              255 * (isNaN(this.opacity) ? 1 : this.opacity)
            )}`
          );
        },
        formatRgb: Fe,
        toString: Fe,
      })
    ),
    se(
      Le,
      Ye,
      Se(he, {
        brighter(t) {
          return (
            Symbol('JSCA_2608_2611'),
            (t = null == t ? be : Math.pow(be, t)),
            new Le(this.h, this.s, this.l * t, this.opacity)
          );
        },
        darker(t) {
          return (
            Symbol('JSCA_2612_2615'),
            (t = null == t ? ye : Math.pow(ye, t)),
            new Le(this.h, this.s, this.l * t, this.opacity)
          );
        },
        rgb() {
          Symbol('JSCA_2616_2619');
          var t = (this.h % 360) + 360 * (this.h < 0),
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            e = this.l,
            o = e + (e < 0.5 ? e : 1 - e) * n,
            r = 2 * e - o;
          return new De(
            Xe(t >= 240 ? t - 240 : t + 120, r, o),
            Xe(t, r, o),
            Xe(t < 120 ? t + 240 : t - 120, r, o),
            this.opacity
          );
        },
        clamp() {
          return (
            Symbol('JSCA_2620_2622'),
            new Le(je(this.h), He(this.s), He(this.l), qe(this.opacity))
          );
        },
        displayable() {
          return (
            Symbol('JSCA_2623_2625'),
            ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
          );
        },
        formatHsl() {
          Symbol('JSCA_2626_2629');
          const t = qe(this.opacity);
          return `${1 === t ? 'hsl(' : 'hsla('}${je(this.h)}, ${
            100 * He(this.s)
          }%, ${100 * He(this.l)}%${1 === t ? ')' : `, ${t})`}`;
        },
      })
    );
  const Ge = Math.PI / 180,
    Ve = 180 / Math.PI,
    We = 0.96422,
    Ze = 0.82521,
    Ke = 4 / 29,
    Qe = 6 / 29,
    to = 3 * Qe * Qe,
    no = Qe * Qe * Qe;
  function eo(t) {
    if ((Symbol('JSCA_2644_2654'), t instanceof ro))
      return new ro(t.l, t.a, t.b, t.opacity);
    if (t instanceof fo) return so(t);
    t instanceof De || (t = ze(t));
    var n,
      e,
      o = uo(t.r),
      r = uo(t.g),
      i = uo(t.b),
      l = io((0.2225045 * o + 0.7168786 * r + 0.0606169 * i) / 1);
    return (
      o === r && r === i
        ? (n = e = l)
        : ((n = io((0.4360747 * o + 0.3850649 * r + 0.1430804 * i) / We)),
          (e = io((0.0139322 * o + 0.0971045 * r + 0.7141733 * i) / Ze))),
      new ro(116 * l - 16, 500 * (n - l), 200 * (l - e), t.opacity)
    );
  }
  function oo(t, n, e, o) {
    return (
      Symbol('JSCA_2658_2660'),
      1 === arguments.length ? eo(t) : new ro(t, n, e, null == o ? 1 : o)
    );
  }
  function ro(t, n, e, o) {
    Symbol('JSCA_2661_2666'),
      (this.l = +t),
      (this.a = +n),
      (this.b = +e),
      (this.opacity = +o);
  }
  function io(t) {
    return Symbol('JSCA_2682_2684'), t > no ? Math.pow(t, 1 / 3) : t / to + Ke;
  }
  function lo(t) {
    return Symbol('JSCA_2685_2687'), t > Qe ? t * t * t : to * (t - Ke);
  }
  function ao(t) {
    return (
      Symbol('JSCA_2688_2690'),
      255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
    );
  }
  function uo(t) {
    return (
      Symbol('JSCA_2691_2693'),
      (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)
    );
  }
  function _o(t) {
    if ((Symbol('JSCA_2694_2700'), t instanceof fo))
      return new fo(t.h, t.c, t.l, t.opacity);
    if ((t instanceof ro || (t = eo(t)), 0 === t.a && 0 === t.b))
      return new fo(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
    var n = Math.atan2(t.b, t.a) * Ve;
    return new fo(
      n < 0 ? n + 360 : n,
      Math.sqrt(t.a * t.a + t.b * t.b),
      t.l,
      t.opacity
    );
  }
  function co(t, n, e, o) {
    return (
      Symbol('JSCA_2704_2706'),
      1 === arguments.length ? _o(t) : new fo(t, n, e, null == o ? 1 : o)
    );
  }
  function fo(t, n, e, o) {
    Symbol('JSCA_2707_2712'),
      (this.h = +t),
      (this.c = +n),
      (this.l = +e),
      (this.opacity = +o);
  }
  function so(t) {
    if ((Symbol('JSCA_2713_2717'), isNaN(t.h)))
      return new ro(t.l, 0, 0, t.opacity);
    var n = t.h * Ge;
    return new ro(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
  }
  se(
    ro,
    oo,
    Se(he, {
      brighter(t) {
        return (
          Symbol('JSCA_2668_2670'),
          new ro(
            this.l + 18 * (null == t ? 1 : t),
            this.a,
            this.b,
            this.opacity
          )
        );
      },
      darker(t) {
        return (
          Symbol('JSCA_2671_2673'),
          new ro(
            this.l - 18 * (null == t ? 1 : t),
            this.a,
            this.b,
            this.opacity
          )
        );
      },
      rgb() {
        Symbol('JSCA_2674_2680');
        var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;
        return new De(
          ao(
            3.1338561 * (n = We * lo(n)) -
              1.6168667 * (t = 1 * lo(t)) -
              0.4906146 * (e = Ze * lo(e))
          ),
          ao(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
          ao(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
          this.opacity
        );
      },
    })
  ),
    se(
      fo,
      co,
      Se(he, {
        brighter(t) {
          return (
            Symbol('JSCA_2719_2721'),
            new fo(
              this.h,
              this.c,
              this.l + 18 * (null == t ? 1 : t),
              this.opacity
            )
          );
        },
        darker(t) {
          return (
            Symbol('JSCA_2722_2724'),
            new fo(
              this.h,
              this.c,
              this.l - 18 * (null == t ? 1 : t),
              this.opacity
            )
          );
        },
        rgb() {
          return Symbol('JSCA_2725_2727'), so(this).rgb();
        },
      })
    );
  var So = -0.14861,
    ho = 1.78277,
    yo = -0.29227,
    bo = -0.90649,
    mo = 1.97294,
    Ao = mo * bo,
    Co = mo * ho,
    Jo = ho * yo - bo * So;
  function po(t, n, e, o) {
    return (
      Symbol('JSCA_2736_2738'),
      1 === arguments.length
        ? (function (t) {
            if ((Symbol('JSCA_2730_2735'), t instanceof go))
              return new go(t.h, t.s, t.l, t.opacity);
            t instanceof De || (t = ze(t));
            var n = t.r / 255,
              e = t.g / 255,
              o = t.b / 255,
              r = (Jo * o + Ao * n - Co * e) / (Jo + Ao - Co),
              i = o - r,
              l = (mo * (e - r) - yo * i) / bo,
              a = Math.sqrt(l * l + i * i) / (mo * r * (1 - r)),
              u = a ? Math.atan2(l, i) * Ve - 120 : NaN;
            return new go(u < 0 ? u + 360 : u, a, r, t.opacity);
          })(t)
        : new go(t, n, e, null == o ? 1 : o)
    );
  }
  function go(t, n, e, o) {
    Symbol('JSCA_2739_2744'),
      (this.h = +t),
      (this.s = +n),
      (this.l = +e),
      (this.opacity = +o);
  }
  function vo(t, n, e, o, r) {
    Symbol('JSCA_2759_2762');
    var i = t * t,
      l = i * t;
    return (
      ((1 - 3 * t + 3 * i - l) * n +
        (4 - 6 * i + 3 * l) * e +
        (1 + 3 * t + 3 * i - 3 * l) * o +
        l * r) /
      6
    );
  }
  function xo(t) {
    Symbol('JSCA_2763_2769');
    var n = t.length - 1;
    return function (e) {
      Symbol('JSCA_2765_2768');
      var o = e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
        r = t[o],
        i = t[o + 1],
        l = o > 0 ? t[o - 1] : 2 * r - i,
        a = o < n - 1 ? t[o + 2] : 2 * i - r;
      return vo((e - o / n) * n, l, r, i, a);
    };
  }
  function wo(t) {
    Symbol('JSCA_2770_2776');
    var n = t.length;
    return function (e) {
      Symbol('JSCA_2772_2775');
      var o = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
        r = t[(o + n - 1) % n],
        i = t[o % n],
        l = t[(o + 1) % n],
        a = t[(o + 2) % n];
      return vo((e - o / n) * n, r, i, l, a);
    };
  }
  se(
    go,
    po,
    Se(he, {
      brighter(t) {
        return (
          Symbol('JSCA_2746_2749'),
          (t = null == t ? be : Math.pow(be, t)),
          new go(this.h, this.s, this.l * t, this.opacity)
        );
      },
      darker(t) {
        return (
          Symbol('JSCA_2750_2753'),
          (t = null == t ? ye : Math.pow(ye, t)),
          new go(this.h, this.s, this.l * t, this.opacity)
        );
      },
      rgb() {
        Symbol('JSCA_2754_2757');
        var t = isNaN(this.h) ? 0 : (this.h + 120) * Ge,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          o = Math.cos(t),
          r = Math.sin(t);
        return new De(
          255 * (n + e * (So * o + ho * r)),
          255 * (n + e * (yo * o + bo * r)),
          255 * (n + e * (mo * o)),
          this.opacity
        );
      },
    })
  );
  var Mo = (t) => () => t;
  function To(t, n) {
    return (
      Symbol('JSCA_2778_2782'),
      function (e) {
        return Symbol('JSCA_2779_2781'), t + e * n;
      }
    );
  }
  function Eo(t, n) {
    Symbol('JSCA_2788_2791');
    var e = n - t;
    return e
      ? To(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
      : Mo(isNaN(t) ? n : t);
  }
  function No(t) {
    return (
      Symbol('JSCA_2792_2796'),
      1 == (t = +t)
        ? ko
        : function (n, e) {
            return (
              Symbol('JSCA_2793_2795'),
              e - n
                ? (function (t, n, e) {
                    return (
                      Symbol('JSCA_2783_2787'),
                      (t = Math.pow(t, e)),
                      (n = Math.pow(n, e) - t),
                      (e = 1 / e),
                      function (o) {
                        return Symbol('JSCA_2784_2786'), Math.pow(t + o * n, e);
                      }
                    );
                  })(n, e, t)
                : Mo(isNaN(n) ? e : n)
            );
          }
    );
  }
  function ko(t, n) {
    Symbol('JSCA_2797_2800');
    var e = n - t;
    return e ? To(t, e) : Mo(isNaN(t) ? n : t);
  }
  var Po = (function t(n) {
    Symbol('JSCA_2801_2815');
    var e = No(n);
    function o(t, n) {
      Symbol('JSCA_2803_2812');
      var o = e((t = $e(t)).r, (n = $e(n)).r),
        r = e(t.g, n.g),
        i = e(t.b, n.b),
        l = ko(t.opacity, n.opacity);
      return function (n) {
        return (
          Symbol('JSCA_2805_2811'),
          (t.r = o(n)),
          (t.g = r(n)),
          (t.b = i(n)),
          (t.opacity = l(n)),
          t + ''
        );
      };
    }
    return (o.gamma = t), o;
  })(1);
  function zo(t) {
    return (
      Symbol('JSCA_2816_2836'),
      function (n) {
        Symbol('JSCA_2817_2835');
        var e,
          o,
          r = n.length,
          i = new Array(r),
          l = new Array(r),
          a = new Array(r);
        for (e = 0; e < r; ++e)
          (o = $e(n[e])),
            (i[e] = o.r || 0),
            (l[e] = o.g || 0),
            (a[e] = o.b || 0);
        return (
          (i = t(i)),
          (l = t(l)),
          (a = t(a)),
          (o.opacity = 1),
          function (t) {
            return (
              Symbol('JSCA_2829_2834'),
              (o.r = i(t)),
              (o.g = l(t)),
              (o.b = a(t)),
              o + ''
            );
          }
        );
      }
    );
  }
  var $o = zo(xo),
    Do = zo(wo);
  function Ro(t, n) {
    Symbol('JSCA_2839_2846'), n || (n = []);
    var e,
      o = t ? Math.min(n.length, t.length) : 0,
      r = n.slice();
    return function (i) {
      for (Symbol('JSCA_2842_2845'), e = 0; e < o; ++e)
        r[e] = t[e] * (1 - i) + n[e] * i;
      return r;
    };
  }
  function Fo(t) {
    return (
      Symbol('JSCA_2847_2849'),
      ArrayBuffer.isView(t) && !(t instanceof DataView)
    );
  }
  function qo(t, n) {
    Symbol('JSCA_2853_2861');
    var e,
      o = n ? n.length : 0,
      r = t ? Math.min(o, t.length) : 0,
      i = new Array(r),
      l = new Array(o);
    for (e = 0; e < r; ++e) i[e] = jo(t[e], n[e]);
    for (; e < o; ++e) l[e] = n[e];
    return function (t) {
      for (Symbol('JSCA_2857_2860'), e = 0; e < r; ++e) l[e] = i[e](t);
      return l;
    };
  }
  function Uo(t, n) {
    Symbol('JSCA_2862_2867');
    var e = new Date();
    return (
      (t = +t),
      (n = +n),
      function (o) {
        return Symbol('JSCA_2864_2866'), e.setTime(t * (1 - o) + n * o), e;
      }
    );
  }
  function Io(t, n) {
    return (
      Symbol('JSCA_2868_2872'),
      (t = +t),
      (n = +n),
      function (e) {
        return Symbol('JSCA_2869_2871'), t * (1 - e) + n * e;
      }
    );
  }
  function Oo(t, n) {
    Symbol('JSCA_2873_2888');
    var e,
      o = {},
      r = {};
    for (e in ((null !== t && 'object' == typeof t) || (t = {}),
    (null !== n && 'object' == typeof n) || (n = {}),
    n))
      e in t ? (o[e] = jo(t[e], n[e])) : (r[e] = n[e]);
    return function (t) {
      for (e in (Symbol('JSCA_2884_2887'), o)) r[e] = o[e](t);
      return r;
    };
  }
  var Bo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    Yo = new RegExp(Bo.source, 'g');
  function Lo(t, n) {
    Symbol('JSCA_2900_2927');
    var e,
      o,
      r,
      i = (Bo.lastIndex = Yo.lastIndex = 0),
      l = -1,
      a = [],
      u = [];
    for (t += '', n += ''; (e = Bo.exec(t)) && (o = Yo.exec(n)); )
      (r = o.index) > i &&
        ((r = n.slice(i, r)), a[l] ? (a[l] += r) : (a[++l] = r)),
        (e = e[0]) === (o = o[0])
          ? a[l]
            ? (a[l] += o)
            : (a[++l] = o)
          : ((a[++l] = null), u.push({ i: l, x: Io(e, o) })),
        (i = Yo.lastIndex);
    return (
      i < n.length && ((r = n.slice(i)), a[l] ? (a[l] += r) : (a[++l] = r)),
      a.length < 2
        ? u[0]
          ? (function (t) {
              return (
                Symbol('JSCA_2895_2899'),
                function (n) {
                  return Symbol('JSCA_2896_2898'), t(n) + '';
                }
              );
            })(u[0].x)
          : (function (t) {
              return (
                Symbol('JSCA_2890_2894'),
                function () {
                  return Symbol('JSCA_2891_2893'), t;
                }
              );
            })(n)
        : ((n = u.length),
          function (t) {
            Symbol('JSCA_2923_2926');
            for (var e, o = 0; o < n; ++o) a[(e = u[o]).i] = e.x(t);
            return a.join('');
          })
    );
  }
  function jo(t, n) {
    Symbol('JSCA_2928_2931');
    var e,
      o = typeof n;
    return null == n || 'boolean' === o
      ? Mo(n)
      : ('number' === o
          ? Io
          : 'string' === o
          ? (e = Ne(n))
            ? ((n = e), Po)
            : Lo
          : n instanceof Ne
          ? Po
          : n instanceof Date
          ? Uo
          : Fo(n)
          ? Ro
          : Array.isArray(n)
          ? qo
          : ('function' != typeof n.valueOf &&
              'function' != typeof n.toString) ||
            isNaN(n)
          ? Oo
          : Io)(t, n);
  }
  function Ho(t, n) {
    return (
      Symbol('JSCA_2945_2949'),
      (t = +t),
      (n = +n),
      function (e) {
        return Symbol('JSCA_2946_2948'), Math.round(t * (1 - e) + n * e);
      }
    );
  }
  var Xo,
    Go = 180 / Math.PI,
    Vo = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1,
    };
  function Wo(t, n, e, o, r, i) {
    var l, a, u;
    return (
      Symbol('JSCA_2959_2973'),
      (l = Math.sqrt(t * t + n * n)) && ((t /= l), (n /= l)),
      (u = t * e + n * o) && ((e -= t * u), (o -= n * u)),
      (a = Math.sqrt(e * e + o * o)) && ((e /= a), (o /= a), (u /= a)),
      t * o < n * e && ((t = -t), (n = -n), (u = -u), (l = -l)),
      {
        translateX: r,
        translateY: i,
        rotate: Math.atan2(n, t) * Go,
        skewX: Math.atan(u) * Go,
        scaleX: l,
        scaleY: a,
      }
    );
  }
  function Zo(t, n, e, o) {
    function r(t) {
      return Symbol('JSCA_2988_2990'), t.length ? t.pop() + ' ' : '';
    }
    return (
      Symbol('JSCA_2987_3054'),
      function (i, l) {
        Symbol('JSCA_3040_3053');
        var a = [],
          u = [];
        return (
          (i = t(i)),
          (l = t(l)),
          (function (t, o, r, i, l, a) {
            if ((Symbol('JSCA_2991_3004'), t !== r || o !== i)) {
              var u = l.push('translate(', null, n, null, e);
              a.push({ i: u - 4, x: Io(t, r) }, { i: u - 2, x: Io(o, i) });
            } else (r || i) && l.push('translate(' + r + n + i + e);
          })(i.translateX, i.translateY, l.translateX, l.translateY, a, u),
          (function (t, n, e, i) {
            Symbol('JSCA_3005_3015'),
              t !== n
                ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
                  i.push({
                    i: e.push(r(e) + 'rotate(', null, o) - 2,
                    x: Io(t, n),
                  }))
                : n && e.push(r(e) + 'rotate(' + n + o);
          })(i.rotate, l.rotate, a, u),
          (function (t, n, e, i) {
            Symbol('JSCA_3016_3025'),
              t !== n
                ? i.push({
                    i: e.push(r(e) + 'skewX(', null, o) - 2,
                    x: Io(t, n),
                  })
                : n && e.push(r(e) + 'skewX(' + n + o);
          })(i.skewX, l.skewX, a, u),
          (function (t, n, e, o, i, l) {
            if ((Symbol('JSCA_3026_3039'), t !== e || n !== o)) {
              var a = i.push(r(i) + 'scale(', null, ',', null, ')');
              l.push({ i: a - 4, x: Io(t, e) }, { i: a - 2, x: Io(n, o) });
            } else
              (1 === e && 1 === o) ||
                i.push(r(i) + 'scale(' + e + ',' + o + ')');
          })(i.scaleX, i.scaleY, l.scaleX, l.scaleY, a, u),
          (i = l = null),
          function (t) {
            Symbol('JSCA_3048_3052');
            for (var n, e = -1, o = u.length; ++e < o; )
              a[(n = u[e]).i] = n.x(t);
            return a.join('');
          }
        );
      }
    );
  }
  var Ko = Zo(
      function (t) {
        Symbol('JSCA_2975_2978');
        const n = new (
          'function' == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
        )(t + '');
        return n.isIdentity ? Vo : Wo(n.a, n.b, n.c, n.d, n.e, n.f);
      },
      'px, ',
      'px)',
      'deg)'
    ),
    Qo = Zo(
      function (t) {
        return (
          Symbol('JSCA_2979_2986'),
          null == t
            ? Vo
            : (Xo ||
                (Xo = document.createElementNS(
                  'http://www.w3.org/2000/svg',
                  'g'
                )),
              Xo.setAttribute('transform', t),
              (t = Xo.transform.baseVal.consolidate())
                ? Wo((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
                : Vo)
        );
      },
      ', ',
      ')',
      ')'
    );
  function tr(t) {
    return Symbol('JSCA_3058_3060'), ((t = Math.exp(t)) + 1 / t) / 2;
  }
  var nr = (function t(n, e, o) {
    function r(t, r) {
      Symbol('JSCA_3068_3085');
      var i,
        l,
        a = t[0],
        u = t[1],
        _ = t[2],
        c = r[0],
        f = r[1],
        s = r[2],
        S = c - a,
        h = f - u,
        y = S * S + h * h;
      if (y < 1e-12)
        (l = Math.log(s / _) / n),
          (i = function (t) {
            return (
              Symbol('JSCA_3072_3074'),
              [a + t * S, u + t * h, _ * Math.exp(n * t * l)]
            );
          });
      else {
        var b = Math.sqrt(y),
          m = (s * s - _ * _ + o * y) / (2 * _ * e * b),
          d = (s * s - _ * _ - o * y) / (2 * s * e * b),
          A = Math.log(Math.sqrt(m * m + 1) - m),
          C = Math.log(Math.sqrt(d * d + 1) - d);
        (l = (C - A) / n),
          (i = function (t) {
            Symbol('JSCA_3078_3081');
            var o = t * l,
              r = tr(A),
              i =
                (_ / (e * b)) *
                (r *
                  (function (t) {
                    return (
                      Symbol('JSCA_3064_3066'),
                      ((t = Math.exp(2 * t)) - 1) / (t + 1)
                    );
                  })(n * o + A) -
                  (function (t) {
                    return (
                      Symbol('JSCA_3061_3063'), ((t = Math.exp(t)) - 1 / t) / 2
                    );
                  })(A));
            return [a + i * S, u + i * h, (_ * r) / tr(n * o + A)];
          });
      }
      return (i.duration = (1e3 * l * n) / Math.SQRT2), i;
    }
    return (
      Symbol('JSCA_3067_3091'),
      (r.rho = function (n) {
        Symbol('JSCA_3086_3089');
        var e = Math.max(0.001, +n),
          o = e * e;
        return t(e, o, o * o);
      }),
      r
    );
  })(Math.SQRT2, 2, 4);
  function er(t) {
    return (
      Symbol('JSCA_3092_3103'),
      function (n, e) {
        Symbol('JSCA_3093_3102');
        var o = t((n = Ye(n)).h, (e = Ye(e)).h),
          r = ko(n.s, e.s),
          i = ko(n.l, e.l),
          l = ko(n.opacity, e.opacity);
        return function (t) {
          return (
            Symbol('JSCA_3095_3101'),
            (n.h = o(t)),
            (n.s = r(t)),
            (n.l = i(t)),
            (n.opacity = l(t)),
            n + ''
          );
        };
      }
    );
  }
  var or = er(Eo),
    rr = er(ko);
  function ir(t) {
    return (
      Symbol('JSCA_3116_3127'),
      function (n, e) {
        Symbol('JSCA_3117_3126');
        var o = t((n = co(n)).h, (e = co(e)).h),
          r = ko(n.c, e.c),
          i = ko(n.l, e.l),
          l = ko(n.opacity, e.opacity);
        return function (t) {
          return (
            Symbol('JSCA_3119_3125'),
            (n.h = o(t)),
            (n.c = r(t)),
            (n.l = i(t)),
            (n.opacity = l(t)),
            n + ''
          );
        };
      }
    );
  }
  var lr = ir(Eo),
    ar = ir(ko);
  function ur(t) {
    return (
      Symbol('JSCA_3130_3146'),
      (function n(e) {
        function o(n, o) {
          Symbol('JSCA_3133_3142');
          var r = t((n = po(n)).h, (o = po(o)).h),
            i = ko(n.s, o.s),
            l = ko(n.l, o.l),
            a = ko(n.opacity, o.opacity);
          return function (t) {
            return (
              Symbol('JSCA_3135_3141'),
              (n.h = r(t)),
              (n.s = i(t)),
              (n.l = l(Math.pow(t, e))),
              (n.opacity = a(t)),
              n + ''
            );
          };
        }
        return Symbol('JSCA_3131_3145'), (e = +e), (o.gamma = n), o;
      })(1)
    );
  }
  var _r = ur(Eo),
    cr = ur(ko);
  function fr(t, n) {
    Symbol('JSCA_3149_3157'), void 0 === n && ((n = t), (t = jo));
    for (
      var e = 0, o = n.length - 1, r = n[0], i = new Array(o < 0 ? 0 : o);
      e < o;

    )
      i[e] = t(r, (r = n[++e]));
    return function (t) {
      Symbol('JSCA_3153_3156');
      var n = Math.max(0, Math.min(o - 1, Math.floor((t *= o))));
      return i[n](t - n);
    };
  }
  var sr,
    Sr,
    hr = 0,
    yr = 0,
    br = 0,
    mr = 0,
    dr = 0,
    Ar = 0,
    Cr = 'object' == typeof performance && performance.now ? performance : Date,
    Jr =
      'object' == typeof window && window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : function (t) {
            Symbol('JSCA_3163_3165'), setTimeout(t, 17);
          };
  function pr() {
    return Symbol('JSCA_3166_3168'), dr || (Jr(gr), (dr = Cr.now() + Ar));
  }
  function gr() {
    Symbol('JSCA_3169_3171'), (dr = 0);
  }
  function vr() {
    Symbol('JSCA_3172_3174'), (this._call = this._time = this._next = null);
  }
  function xr(t, n, e) {
    Symbol('JSCA_3196_3200');
    var o = new vr();
    return o.restart(t, n, e), o;
  }
  function wr() {
    Symbol('JSCA_3201_3210'), pr(), ++hr;
    for (var t, n = sr; n; )
      (t = dr - n._time) >= 0 && n._call.call(void 0, t), (n = n._next);
    --hr;
  }
  function Mr() {
    Symbol('JSCA_3211_3221'), (dr = (mr = Cr.now()) + Ar), (hr = yr = 0);
    try {
      wr();
    } finally {
      (hr = 0),
        (function () {
          Symbol('JSCA_3226_3239');
          var t,
            n,
            e = sr,
            o = 1 / 0;
          for (; e; )
            e._call
              ? (o > e._time && (o = e._time), (t = e), (e = e._next))
              : ((n = e._next),
                (e._next = null),
                (e = t ? (t._next = n) : (sr = n)));
          (Sr = t), Er(o);
        })(),
        (dr = 0);
    }
  }
  function Tr() {
    Symbol('JSCA_3222_3225');
    var t = Cr.now(),
      n = t - mr;
    n > 1e3 && ((Ar -= n), (mr = t));
  }
  function Er(t) {
    (Symbol('JSCA_3240_3251'), hr) ||
      (yr && (yr = clearTimeout(yr)),
      t - dr > 24
        ? (t < 1 / 0 && (yr = setTimeout(Mr, t - Cr.now() - Ar)),
          br && (br = clearInterval(br)))
        : (br || ((mr = Cr.now()), (br = setInterval(Tr, 1e3))),
          (hr = 1),
          Jr(Mr)));
  }
  function Nr(t, n, e) {
    Symbol('JSCA_3252_3260');
    var o = new vr();
    return (
      (n = null == n ? 0 : +n),
      o.restart(
        (e) => {
          o.stop(), t(e + n);
        },
        n,
        e
      ),
      o
    );
  }
  vr.prototype = xr.prototype = {
    constructor: vr,
    restart: function (t, n, e) {
      if ((Symbol('JSCA_3177_3187'), 'function' != typeof t))
        throw new TypeError('callback is not a function');
      (e = (null == e ? pr() : +e) + (null == n ? 0 : +n)),
        this._next ||
          Sr === this ||
          (Sr ? (Sr._next = this) : (sr = this), (Sr = this)),
        (this._call = t),
        (this._time = e),
        Er();
    },
    stop: function () {
      Symbol('JSCA_3188_3194'),
        this._call && ((this._call = null), (this._time = 1 / 0), Er());
    },
  };
  var kr = kt('start', 'end', 'cancel', 'interrupt'),
    Pr = [];
  function zr(t, n, e, o, r, i) {
    Symbol('JSCA_3285_3301');
    var l = t.__transition;
    if (l) {
      if (e in l) return;
    } else t.__transition = {};
    !(function (t, n, e) {
      Symbol('JSCA_3317_3381');
      var o,
        r = t.__transition;
      function i(t) {
        Symbol('JSCA_3321_3325'),
          (e.state = 1),
          e.timer.restart(l, e.delay, e.time),
          e.delay <= t && l(t - e.delay);
      }
      function l(i) {
        var _, c, f, s;
        if ((Symbol('JSCA_3326_3363'), 1 !== e.state)) return u();
        for (_ in r)
          if ((s = r[_]).name === e.name) {
            if (3 === s.state) return Nr(l);
            4 === s.state
              ? ((s.state = 6),
                s.timer.stop(),
                s.on.call('interrupt', t, t.__data__, s.index, s.group),
                delete r[_])
              : +_ < n &&
                ((s.state = 6),
                s.timer.stop(),
                s.on.call('cancel', t, t.__data__, s.index, s.group),
                delete r[_]);
          }
        if (
          (Nr(function () {
            Symbol('JSCA_3345_3351'),
              3 === e.state &&
                ((e.state = 4), e.timer.restart(a, e.delay, e.time), a(i));
          }),
          (e.state = 2),
          e.on.call('start', t, t.__data__, e.index, e.group),
          2 === e.state)
        ) {
          for (
            e.state = 3, o = new Array((f = e.tween.length)), _ = 0, c = -1;
            _ < f;
            ++_
          )
            (s = e.tween[_].value.call(t, t.__data__, e.index, e.group)) &&
              (o[++c] = s);
          o.length = c + 1;
        }
      }
      function a(n) {
        Symbol('JSCA_3364_3373');
        for (
          var r =
              n < e.duration
                ? e.ease.call(null, n / e.duration)
                : (e.timer.restart(u), (e.state = 5), 1),
            i = -1,
            l = o.length;
          ++i < l;

        )
          o[i].call(t, r);
        5 === e.state &&
          (e.on.call('end', t, t.__data__, e.index, e.group), u());
      }
      function u() {
        for (var o in (Symbol('JSCA_3374_3380'),
        (e.state = 6),
        e.timer.stop(),
        delete r[n],
        r))
          return;
        delete t.__transition;
      }
      (r[n] = e), (e.timer = xr(i, 0, e.time));
    })(t, e, {
      name: n,
      index: o,
      group: r,
      on: kr,
      tween: Pr,
      time: i.time,
      delay: i.delay,
      duration: i.duration,
      ease: i.ease,
      timer: null,
      state: 0,
    });
  }
  function $r(t, n) {
    Symbol('JSCA_3302_3306');
    var e = Rr(t, n);
    if (e.state > 0) throw new Error('too late; already scheduled');
    return e;
  }
  function Dr(t, n) {
    Symbol('JSCA_3307_3311');
    var e = Rr(t, n);
    if (e.state > 3) throw new Error('too late; already running');
    return e;
  }
  function Rr(t, n) {
    Symbol('JSCA_3312_3316');
    var e = t.__transition;
    if (!e || !(e = e[n])) throw new Error('transition not found');
    return e;
  }
  function Fr(t, n) {
    Symbol('JSCA_3382_3398');
    var e,
      o,
      r,
      i = t.__transition,
      l = !0;
    if (i) {
      for (r in ((n = null == n ? null : n + ''), i))
        (e = i[r]).name === n
          ? ((o = e.state > 2 && e.state < 5),
            (e.state = 6),
            e.timer.stop(),
            e.on.call(
              o ? 'interrupt' : 'cancel',
              t,
              t.__data__,
              e.index,
              e.group
            ),
            delete i[r])
          : (l = !1);
      l && delete t.__transition;
    }
  }
  function qr(t, n) {
    var e, o;
    return (
      Symbol('JSCA_3404_3420'),
      function () {
        Symbol('JSCA_3406_3419');
        var r = Dr(this, t),
          i = r.tween;
        if (i !== e)
          for (var l = 0, a = (o = e = i).length; l < a; ++l)
            if (o[l].name === n) {
              (o = o.slice()).splice(l, 1);
              break;
            }
        r.tween = o;
      }
    );
  }
  function Ur(t, n, e) {
    var o, r;
    if ((Symbol('JSCA_3421_3441'), 'function' != typeof e)) throw new Error();
    return function () {
      Symbol('JSCA_3424_3440');
      var i = Dr(this, t),
        l = i.tween;
      if (l !== o) {
        r = (o = l).slice();
        for (var a = { name: n, value: e }, u = 0, _ = r.length; u < _; ++u)
          if (r[u].name === n) {
            r[u] = a;
            break;
          }
        u === _ && r.push(a);
      }
      i.tween = r;
    };
  }
  function Ir(t, n, e) {
    Symbol('JSCA_3456_3465');
    var o = t._id;
    return (
      t.each(function () {
        Symbol('JSCA_3458_3461');
        var t = Dr(this, o);
        (t.value || (t.value = {}))[n] = e.apply(this, arguments);
      }),
      function (t) {
        return Symbol('JSCA_3462_3464'), Rr(t, o).value[n];
      }
    );
  }
  function Or(t, n) {
    var e;
    return (
      Symbol('JSCA_3466_3469'),
      ('number' == typeof n
        ? Io
        : n instanceof Ne
        ? Po
        : (e = Ne(n))
        ? ((n = e), Po)
        : Lo)(t, n)
    );
  }
  function Br(t) {
    return (
      Symbol('JSCA_3470_3474'),
      function () {
        Symbol('JSCA_3471_3473'), this.removeAttribute(t);
      }
    );
  }
  function Yr(t) {
    return (
      Symbol('JSCA_3475_3479'),
      function () {
        Symbol('JSCA_3476_3478'), this.removeAttributeNS(t.space, t.local);
      }
    );
  }
  function Lr(t, n, e) {
    Symbol('JSCA_3480_3486');
    var o,
      r,
      i = e + '';
    return function () {
      Symbol('JSCA_3482_3485');
      var l = this.getAttribute(t);
      return l === i ? null : l === o ? r : (r = n((o = l), e));
    };
  }
  function jr(t, n, e) {
    Symbol('JSCA_3487_3493');
    var o,
      r,
      i = e + '';
    return function () {
      Symbol('JSCA_3489_3492');
      var l = this.getAttributeNS(t.space, t.local);
      return l === i ? null : l === o ? r : (r = n((o = l), e));
    };
  }
  function Hr(t, n, e) {
    var o, r, i;
    return (
      Symbol('JSCA_3494_3503'),
      function () {
        Symbol('JSCA_3496_3502');
        var l,
          a,
          u = e(this);
        if (null != u)
          return (l = this.getAttribute(t)) === (a = u + '')
            ? null
            : l === o && a === r
            ? i
            : ((r = a), (i = n((o = l), u)));
        this.removeAttribute(t);
      }
    );
  }
  function Xr(t, n, e) {
    var o, r, i;
    return (
      Symbol('JSCA_3504_3513'),
      function () {
        Symbol('JSCA_3506_3512');
        var l,
          a,
          u = e(this);
        if (null != u)
          return (l = this.getAttributeNS(t.space, t.local)) === (a = u + '')
            ? null
            : l === o && a === r
            ? i
            : ((r = a), (i = n((o = l), u)));
        this.removeAttributeNS(t.space, t.local);
      }
    );
  }
  function Gr(t, n) {
    var e, o;
    function r() {
      Symbol('JSCA_3530_3534');
      var r = n.apply(this, arguments);
      return (
        r !== o &&
          (e =
            (o = r) &&
            (function (t, n) {
              return (
                Symbol('JSCA_3523_3527'),
                function (e) {
                  Symbol('JSCA_3524_3526'),
                    this.setAttributeNS(t.space, t.local, n.call(this, e));
                }
              );
            })(t, r)),
        e
      );
    }
    return Symbol('JSCA_3528_3537'), (r._value = n), r;
  }
  function Vr(t, n) {
    var e, o;
    function r() {
      Symbol('JSCA_3540_3544');
      var r = n.apply(this, arguments);
      return (
        r !== o &&
          (e =
            (o = r) &&
            (function (t, n) {
              return (
                Symbol('JSCA_3518_3522'),
                function (e) {
                  Symbol('JSCA_3519_3521'),
                    this.setAttribute(t, n.call(this, e));
                }
              );
            })(t, r)),
        e
      );
    }
    return Symbol('JSCA_3538_3547'), (r._value = n), r;
  }
  function Wr(t, n) {
    return (
      Symbol('JSCA_3556_3560'),
      function () {
        Symbol('JSCA_3557_3559'),
          ($r(this, t).delay = +n.apply(this, arguments));
      }
    );
  }
  function Zr(t, n) {
    return (
      Symbol('JSCA_3561_3565'),
      (n = +n),
      function () {
        Symbol('JSCA_3562_3564'), ($r(this, t).delay = n);
      }
    );
  }
  function Kr(t, n) {
    return (
      Symbol('JSCA_3570_3574'),
      function () {
        Symbol('JSCA_3571_3573'),
          (Dr(this, t).duration = +n.apply(this, arguments));
      }
    );
  }
  function Qr(t, n) {
    return (
      Symbol('JSCA_3575_3579'),
      (n = +n),
      function () {
        Symbol('JSCA_3576_3578'), (Dr(this, t).duration = n);
      }
    );
  }
  function ti(t, n, e) {
    Symbol('JSCA_3637_3644');
    var o,
      r,
      i = (function (t) {
        return (
          Symbol('JSCA_3630_3636'),
          (t + '')
            .trim()
            .split(/^|\s+/)
            .every(function (t) {
              Symbol('JSCA_3631_3635');
              var n = t.indexOf('.');
              return n >= 0 && (t = t.slice(0, n)), !t || 'start' === t;
            })
        );
      })(n)
        ? $r
        : Dr;
    return function () {
      Symbol('JSCA_3639_3643');
      var l = i(this, t),
        a = l.on;
      a !== o && (r = (o = a).copy()).on(n, e), (l.on = r);
    };
  }
  var ni = Xn.prototype.constructor;
  function ei(t) {
    return (
      Symbol('JSCA_3702_3706'),
      function () {
        Symbol('JSCA_3703_3705'), this.style.removeProperty(t);
      }
    );
  }
  function oi(t, n, e) {
    var o, r;
    function i() {
      Symbol('JSCA_3741_3745');
      var i = n.apply(this, arguments);
      return (
        i !== r &&
          (o =
            (r = i) &&
            (function (t, n, e) {
              return (
                Symbol('JSCA_3734_3738'),
                function (o) {
                  Symbol('JSCA_3735_3737'),
                    this.style.setProperty(t, n.call(this, o), e);
                }
              );
            })(t, i, e)),
        o
      );
    }
    return Symbol('JSCA_3739_3748'), (i._value = n), i;
  }
  function ri(t) {
    var n, e;
    function o() {
      Symbol('JSCA_3777_3781');
      var o = t.apply(this, arguments);
      return (
        o !== e &&
          (n =
            (e = o) &&
            (function (t) {
              return (
                Symbol('JSCA_3770_3774'),
                function (n) {
                  Symbol('JSCA_3771_3773'),
                    (this.textContent = t.call(this, n));
                }
              );
            })(o)),
        n
      );
    }
    return Symbol('JSCA_3775_3784'), (o._value = t), o;
  }
  var ii = 0;
  function li(t, n, e, o) {
    Symbol('JSCA_3833_3838'),
      (this._groups = t),
      (this._parents = n),
      (this._name = e),
      (this._id = o);
  }
  function ai(t) {
    return Symbol('JSCA_3839_3841'), Xn().transition(t);
  }
  function ui() {
    return Symbol('JSCA_3842_3844'), ++ii;
  }
  var _i = Xn.prototype;
  li.prototype = ai.prototype = {
    constructor: li,
    select: function (t) {
      Symbol('JSCA_3659_3672');
      var n = this._name,
        e = this._id;
      'function' != typeof t && (t = Bt(t));
      for (
        var o = this._groups, r = o.length, i = new Array(r), l = 0;
        l < r;
        ++l
      )
        for (
          var a, u, _ = o[l], c = _.length, f = (i[l] = new Array(c)), s = 0;
          s < c;
          ++s
        )
          (a = _[s]) &&
            (u = t.call(a, a.__data__, s, _)) &&
            ('__data__' in a && (u.__data__ = a.__data__),
            (f[s] = u),
            zr(f[s], n, e, s, f, Rr(a, e)));
      return new li(i, this._parents, n, e);
    },
    selectAll: function (t) {
      Symbol('JSCA_3673_3690');
      var n = this._name,
        e = this._id;
      'function' != typeof t && (t = jt(t));
      for (
        var o = this._groups, r = o.length, i = [], l = [], a = 0;
        a < r;
        ++a
      )
        for (var u, _ = o[a], c = _.length, f = 0; f < c; ++f)
          if ((u = _[f])) {
            for (
              var s,
                S = t.call(u, u.__data__, f, _),
                h = Rr(u, e),
                y = 0,
                b = S.length;
              y < b;
              ++y
            )
              (s = S[y]) && zr(s, n, e, y, S, h);
            i.push(S), l.push(u);
          }
      return new li(i, l, n, e);
    },
    selectChild: _i.selectChild,
    selectChildren: _i.selectChildren,
    filter: function (t) {
      Symbol('JSCA_3605_3615'), 'function' != typeof t && (t = Ht(t));
      for (
        var n = this._groups, e = n.length, o = new Array(e), r = 0;
        r < e;
        ++r
      )
        for (var i, l = n[r], a = l.length, u = (o[r] = []), _ = 0; _ < a; ++_)
          (i = l[_]) && t.call(i, i.__data__, _, l) && u.push(i);
      return new li(o, this._parents, this._name, this._id);
    },
    merge: function (t) {
      if ((Symbol('JSCA_3616_3629'), t._id !== this._id)) throw new Error();
      for (
        var n = this._groups,
          e = t._groups,
          o = n.length,
          r = e.length,
          i = Math.min(o, r),
          l = new Array(o),
          a = 0;
        a < i;
        ++a
      )
        for (
          var u,
            _ = n[a],
            c = e[a],
            f = _.length,
            s = (l[a] = new Array(f)),
            S = 0;
          S < f;
          ++S
        )
          (u = _[S] || c[S]) && (s[S] = u);
      for (; a < o; ++a) l[a] = n[a];
      return new li(l, this._parents, this._name, this._id);
    },
    selection: function () {
      return Symbol('JSCA_3692_3694'), new ni(this._groups, this._parents);
    },
    transition: function () {
      Symbol('JSCA_3792_3808');
      for (
        var t = this._name,
          n = this._id,
          e = ui(),
          o = this._groups,
          r = o.length,
          i = 0;
        i < r;
        ++i
      )
        for (var l, a = o[i], u = a.length, _ = 0; _ < u; ++_)
          if ((l = a[_])) {
            var c = Rr(l, n);
            zr(l, t, e, _, a, {
              time: c.time + c.delay + c.duration,
              delay: 0,
              duration: c.duration,
              ease: c.ease,
            });
          }
      return new li(o, this._parents, t, e);
    },
    call: _i.call,
    nodes: _i.nodes,
    node: _i.node,
    size: _i.size,
    empty: _i.empty,
    each: _i.each,
    on: function (t, n) {
      Symbol('JSCA_3645_3648');
      var e = this._id;
      return arguments.length < 2
        ? Rr(this.node(), e).on.on(t)
        : this.each(ti(e, t, n));
    },
    attr: function (t, n) {
      Symbol('JSCA_3514_3517');
      var e = Ft(t),
        o = 'transform' === e ? Qo : Or;
      return this.attrTween(
        t,
        'function' == typeof n
          ? (e.local ? Xr : Hr)(e, o, Ir(this, 'attr.' + t, n))
          : null == n
          ? (e.local ? Yr : Br)(e)
          : (e.local ? jr : Lr)(e, o, n)
      );
    },
    attrTween: function (t, n) {
      Symbol('JSCA_3548_3555');
      var e = 'attr.' + t;
      if (arguments.length < 2) return (e = this.tween(e)) && e._value;
      if (null == n) return this.tween(e, null);
      if ('function' != typeof n) throw new Error();
      var o = Ft(t);
      return this.tween(e, (o.local ? Gr : Vr)(o, n));
    },
    style: function (t, n, e) {
      Symbol('JSCA_3730_3733');
      var o = 'transform' == (t += '') ? Ko : Or;
      return null == n
        ? this.styleTween(
            t,
            (function (t, n) {
              var e, o, r;
              return (
                Symbol('JSCA_3695_3701'),
                function () {
                  Symbol('JSCA_3697_3700');
                  var i = bn(this, t),
                    l = (this.style.removeProperty(t), bn(this, t));
                  return i === l
                    ? null
                    : i === e && l === o
                    ? r
                    : (r = n((e = i), (o = l)));
                }
              );
            })(t, o)
          ).on('end.style.' + t, ei(t))
        : 'function' == typeof n
        ? this.styleTween(
            t,
            (function (t, n, e) {
              var o, r, i;
              return (
                Symbol('JSCA_3714_3721'),
                function () {
                  Symbol('JSCA_3716_3720');
                  var l = bn(this, t),
                    a = e(this),
                    u = a + '';
                  return (
                    null == a &&
                      (this.style.removeProperty(t), (u = a = bn(this, t))),
                    l === u
                      ? null
                      : l === o && u === r
                      ? i
                      : ((r = u), (i = n((o = l), a)))
                  );
                }
              );
            })(t, o, Ir(this, 'style.' + t, n))
          ).each(
            (function (t, n) {
              Symbol('JSCA_3722_3729');
              var e,
                o,
                r,
                i,
                l = 'style.' + n,
                a = 'end.' + l;
              return function () {
                Symbol('JSCA_3724_3728');
                var u = Dr(this, t),
                  _ = u.on,
                  c = null == u.value[l] ? i || (i = ei(n)) : void 0;
                (_ === e && r === c) || (o = (e = _).copy()).on(a, (r = c)),
                  (u.on = o);
              };
            })(this._id, t)
          )
        : this.styleTween(
            t,
            (function (t, n, e) {
              Symbol('JSCA_3707_3713');
              var o,
                r,
                i = e + '';
              return function () {
                Symbol('JSCA_3709_3712');
                var l = bn(this, t);
                return l === i ? null : l === o ? r : (r = n((o = l), e));
              };
            })(t, o, n),
            e
          ).on('end.style.' + t, null);
    },
    styleTween: function (t, n, e) {
      Symbol('JSCA_3749_3755');
      var o = 'style.' + (t += '');
      if (arguments.length < 2) return (o = this.tween(o)) && o._value;
      if (null == n) return this.tween(o, null);
      if ('function' != typeof n) throw new Error();
      return this.tween(o, oi(t, n, null == e ? '' : e));
    },
    text: function (t) {
      return (
        Symbol('JSCA_3767_3769'),
        this.tween(
          'text',
          'function' == typeof t
            ? (function (t) {
                return (
                  Symbol('JSCA_3761_3766'),
                  function () {
                    Symbol('JSCA_3762_3765');
                    var n = t(this);
                    this.textContent = null == n ? '' : n;
                  }
                );
              })(Ir(this, 'text', t))
            : (function (t) {
                return (
                  Symbol('JSCA_3756_3760'),
                  function () {
                    Symbol('JSCA_3757_3759'), (this.textContent = t);
                  }
                );
              })(null == t ? '' : t + '')
        )
      );
    },
    textTween: function (t) {
      Symbol('JSCA_3785_3791');
      var n = 'text';
      if (arguments.length < 1) return (n = this.tween(n)) && n._value;
      if (null == t) return this.tween(n, null);
      if ('function' != typeof t) throw new Error();
      return this.tween(n, ri(t));
    },
    remove: function () {
      return (
        Symbol('JSCA_3656_3658'),
        this.on(
          'end.remove',
          (function (t) {
            return (
              Symbol('JSCA_3649_3655'),
              function () {
                Symbol('JSCA_3650_3654');
                var n = this.parentNode;
                for (var e in this.__transition) if (+e !== t) return;
                n && n.removeChild(this);
              }
            );
          })(this._id)
        )
      );
    },
    tween: function (t, n) {
      Symbol('JSCA_3442_3455');
      var e = this._id;
      if (((t += ''), arguments.length < 2)) {
        for (
          var o, r = Rr(this.node(), e).tween, i = 0, l = r.length;
          i < l;
          ++i
        )
          if ((o = r[i]).name === t) return o.value;
        return null;
      }
      return this.each((null == n ? qr : Ur)(e, t, n));
    },
    delay: function (t) {
      Symbol('JSCA_3566_3569');
      var n = this._id;
      return arguments.length
        ? this.each(('function' == typeof t ? Wr : Zr)(n, t))
        : Rr(this.node(), n).delay;
    },
    duration: function (t) {
      Symbol('JSCA_3580_3583');
      var n = this._id;
      return arguments.length
        ? this.each(('function' == typeof t ? Kr : Qr)(n, t))
        : Rr(this.node(), n).duration;
    },
    ease: function (t) {
      Symbol('JSCA_3590_3593');
      var n = this._id;
      return arguments.length
        ? this.each(
            (function (t, n) {
              if ((Symbol('JSCA_3584_3589'), 'function' != typeof n))
                throw new Error();
              return function () {
                Symbol('JSCA_3586_3588'), (Dr(this, t).ease = n);
              };
            })(n, t)
          )
        : Rr(this.node(), n).ease;
    },
    easeVarying: function (t) {
      if ((Symbol('JSCA_3601_3604'), 'function' != typeof t)) throw new Error();
      return this.each(
        (function (t, n) {
          return (
            Symbol('JSCA_3594_3600'),
            function () {
              Symbol('JSCA_3595_3599');
              var e = n.apply(this, arguments);
              if ('function' != typeof e) throw new Error();
              Dr(this, t).ease = e;
            }
          );
        })(this._id, t)
      );
    },
    end: function () {
      Symbol('JSCA_3809_3831');
      var t,
        n,
        e = this,
        o = e._id,
        r = e.size();
      return new Promise(function (i, l) {
        Symbol('JSCA_3811_3830');
        var a = { value: l },
          u = {
            value: function () {
              Symbol('JSCA_3815_3817'), 0 == --r && i();
            },
          };
        e.each(function () {
          Symbol('JSCA_3819_3828');
          var e = Dr(this, o),
            r = e.on;
          r !== t &&
            ((n = (t = r).copy())._.cancel.push(a),
            n._.interrupt.push(a),
            n._.end.push(u)),
            (e.on = n);
        }),
          0 === r && i();
      });
    },
    [Symbol.iterator]: _i[Symbol.iterator],
  };
  function ci(t) {
    return (
      Symbol('JSCA_3885_3887'), ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
    );
  }
  function fi(t) {
    return (
      Symbol('JSCA_3894_3896'),
      ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
    );
  }
  var si = (function t(n) {
      function e(t) {
        return Symbol('JSCA_3900_3902'), Math.pow(t, n);
      }
      return Symbol('JSCA_3898_3905'), (n = +n), (e.exponent = t), e;
    })(3),
    Si = (function t(n) {
      function e(t) {
        return Symbol('JSCA_3908_3910'), 1 - Math.pow(1 - t, n);
      }
      return Symbol('JSCA_3906_3913'), (n = +n), (e.exponent = t), e;
    })(3),
    hi = (function t(n) {
      function e(t) {
        return (
          Symbol('JSCA_3916_3918'),
          ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
        );
      }
      return Symbol('JSCA_3914_3921'), (n = +n), (e.exponent = t), e;
    })(3),
    yi = Math.PI,
    bi = yi / 2;
  function mi(t) {
    return Symbol('JSCA_3929_3931'), (1 - Math.cos(yi * t)) / 2;
  }
  function di(t) {
    return (
      Symbol('JSCA_3932_3934'),
      1.0009775171065494 * (Math.pow(2, -10 * t) - 0.0009765625)
    );
  }
  function Ai(t) {
    return (
      Symbol('JSCA_3941_3943'), ((t *= 2) <= 1 ? di(1 - t) : 2 - di(t - 1)) / 2
    );
  }
  function Ci(t) {
    return (
      Symbol('JSCA_3950_3952'),
      ((t *= 2) <= 1
        ? 1 - Math.sqrt(1 - t * t)
        : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
    );
  }
  var Ji = 4 / 11,
    pi = 6 / 11,
    gi = 8 / 11,
    vi = 9 / 11,
    xi = 10 / 11,
    wi = 21 / 22,
    Mi = 7.5625;
  function Ti(t) {
    return (
      Symbol('JSCA_3957_3959'),
      (t = +t) < Ji
        ? Mi * t * t
        : t < gi
        ? Mi * (t -= pi) * t + 0.75
        : t < xi
        ? Mi * (t -= vi) * t + 0.9375
        : Mi * (t -= wi) * t + 0.984375
    );
  }
  var Ei = 1.70158,
    Ni = (function t(n) {
      function e(t) {
        return Symbol('JSCA_3966_3968'), (t = +t) * t * (n * (t - 1) + t);
      }
      return Symbol('JSCA_3964_3971'), (n = +n), (e.overshoot = t), e;
    })(Ei),
    ki = (function t(n) {
      function e(t) {
        return Symbol('JSCA_3974_3976'), --t * t * ((t + 1) * n + t) + 1;
      }
      return Symbol('JSCA_3972_3979'), (n = +n), (e.overshoot = t), e;
    })(Ei),
    Pi = (function t(n) {
      function e(t) {
        return (
          Symbol('JSCA_3982_3984'),
          ((t *= 2) < 1
            ? t * t * ((n + 1) * t - n)
            : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
        );
      }
      return Symbol('JSCA_3980_3987'), (n = +n), (e.overshoot = t), e;
    })(Ei),
    zi = 2 * Math.PI,
    $i = (function t(n, e) {
      Symbol('JSCA_3989_4001');
      var o = Math.asin(1 / (n = Math.max(1, n))) * (e /= zi);
      function r(t) {
        return Symbol('JSCA_3991_3993'), n * di(-(--t)) * Math.sin((o - t) / e);
      }
      return (
        (r.amplitude = function (n) {
          return Symbol('JSCA_3994_3996'), t(n, e * zi);
        }),
        (r.period = function (e) {
          return Symbol('JSCA_3997_3999'), t(n, e);
        }),
        r
      );
    })(1, 0.3),
    Di = (function t(n, e) {
      Symbol('JSCA_4002_4014');
      var o = Math.asin(1 / (n = Math.max(1, n))) * (e /= zi);
      function r(t) {
        return (
          Symbol('JSCA_4004_4006'), 1 - n * di((t = +t)) * Math.sin((t + o) / e)
        );
      }
      return (
        (r.amplitude = function (n) {
          return Symbol('JSCA_4007_4009'), t(n, e * zi);
        }),
        (r.period = function (e) {
          return Symbol('JSCA_4010_4012'), t(n, e);
        }),
        r
      );
    })(1, 0.3),
    Ri = (function t(n, e) {
      Symbol('JSCA_4015_4027');
      var o = Math.asin(1 / (n = Math.max(1, n))) * (e /= zi);
      function r(t) {
        return (
          Symbol('JSCA_4017_4019'),
          ((t = 2 * t - 1) < 0
            ? n * di(-t) * Math.sin((o - t) / e)
            : 2 - n * di(t) * Math.sin((o + t) / e)) / 2
        );
      }
      return (
        (r.amplitude = function (n) {
          return Symbol('JSCA_4020_4022'), t(n, e * zi);
        }),
        (r.period = function (e) {
          return Symbol('JSCA_4023_4025'), t(n, e);
        }),
        r
      );
    })(1, 0.3),
    Fi = { time: null, delay: 0, duration: 250, ease: fi };
  function qi(t, n) {
    var e;
    for (Symbol('JSCA_4034_4042'); !(e = t.__transition) || !(e = e[n]); )
      if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
    return e;
  }
  (Xn.prototype.interrupt = function (t) {
    return (
      Symbol('JSCA_3399_3403'),
      this.each(function () {
        Symbol('JSCA_3400_3402'), Fr(this, t);
      })
    );
  }),
    (Xn.prototype.transition = function (t) {
      var n, e;
      Symbol('JSCA_4043_4058'),
        t instanceof li
          ? ((n = t._id), (t = t._name))
          : ((n = ui()),
            ((e = Fi).time = pr()),
            (t = null == t ? null : t + ''));
      for (var o = this._groups, r = o.length, i = 0; i < r; ++i)
        for (var l, a = o[i], u = a.length, _ = 0; _ < u; ++_)
          (l = a[_]) && zr(l, t, n, _, a, e || qi(l, n));
      return new li(o, this._parents, t, n);
    });
  var Ui = [null];
  var Ii = (t) => () => t;
  function Oi(
    t,
    { sourceEvent: n, target: e, selection: o, mode: r, dispatch: i }
  ) {
    Symbol('JSCA_4075_4106'),
      Object.defineProperties(this, {
        type: { value: t, enumerable: !0, configurable: !0 },
        sourceEvent: { value: n, enumerable: !0, configurable: !0 },
        target: { value: e, enumerable: !0, configurable: !0 },
        selection: { value: o, enumerable: !0, configurable: !0 },
        mode: { value: r, enumerable: !0, configurable: !0 },
        _: { value: i },
      });
  }
  function Bi(t) {
    Symbol('JSCA_4110_4113'), t.preventDefault(), t.stopImmediatePropagation();
  }
  var Yi = { name: 'drag' },
    Li = { name: 'space' },
    ji = { name: 'handle' },
    Hi = { name: 'center' };
  const { abs: Xi, max: Gi, min: Vi } = Math;
  function Wi(t) {
    return Symbol('JSCA_4124_4126'), [+t[0], +t[1]];
  }
  function Zi(t) {
    return Symbol('JSCA_4127_4129'), [Wi(t[0]), Wi(t[1])];
  }
  var Ki = {
      name: 'x',
      handles: ['w', 'e'].map(ll),
      input: function (t, n) {
        return (
          Symbol('JSCA_4133_4135'),
          null == t
            ? null
            : [
                [+t[0], n[0][1]],
                [+t[1], n[1][1]],
              ]
        );
      },
      output: function (t) {
        return Symbol('JSCA_4136_4138'), t && [t[0][0], t[1][0]];
      },
    },
    Qi = {
      name: 'y',
      handles: ['n', 's'].map(ll),
      input: function (t, n) {
        return (
          Symbol('JSCA_4143_4145'),
          null == t
            ? null
            : [
                [n[0][0], +t[0]],
                [n[1][0], +t[1]],
              ]
        );
      },
      output: function (t) {
        return Symbol('JSCA_4146_4148'), t && [t[0][1], t[1][1]];
      },
    },
    tl = {
      name: 'xy',
      handles: ['n', 'w', 'e', 's', 'nw', 'ne', 'sw', 'se'].map(ll),
      input: function (t) {
        return Symbol('JSCA_4153_4155'), null == t ? null : Zi(t);
      },
      output: function (t) {
        return Symbol('JSCA_4156_4158'), t;
      },
    },
    nl = {
      overlay: 'crosshair',
      selection: 'move',
      n: 'ns-resize',
      e: 'ew-resize',
      s: 'ns-resize',
      w: 'ew-resize',
      nw: 'nwse-resize',
      ne: 'nesw-resize',
      se: 'nwse-resize',
      sw: 'nesw-resize',
    },
    el = { e: 'w', w: 'e', nw: 'ne', ne: 'nw', se: 'sw', sw: 'se' },
    ol = { n: 's', s: 'n', nw: 'sw', ne: 'se', se: 'ne', sw: 'nw' },
    rl = {
      overlay: 1,
      selection: 1,
      n: null,
      e: 1,
      s: null,
      w: -1,
      nw: -1,
      ne: 1,
      se: 1,
      sw: -1,
    },
    il = {
      overlay: 1,
      selection: 1,
      n: -1,
      e: null,
      s: 1,
      w: null,
      nw: -1,
      ne: -1,
      se: 1,
      sw: 1,
    };
  function ll(t) {
    return Symbol('JSCA_4212_4216'), { type: t };
  }
  function al(t) {
    return Symbol('JSCA_4217_4219'), !t.ctrlKey && !t.button;
  }
  function ul() {
    Symbol('JSCA_4220_4227');
    var t = this.ownerSVGElement || this;
    return t.hasAttribute('viewBox')
      ? [
          [(t = t.viewBox.baseVal).x, t.y],
          [t.x + t.width, t.y + t.height],
        ]
      : [
          [0, 0],
          [t.width.baseVal.value, t.height.baseVal.value],
        ];
  }
  function _l() {
    return (
      Symbol('JSCA_4228_4230'),
      navigator.maxTouchPoints || 'ontouchstart' in this
    );
  }
  function cl(t) {
    for (Symbol('JSCA_4231_4234'); !t.__brush; )
      if (!(t = t.parentNode)) return;
    return t.__brush;
  }
  function fl(t) {
    Symbol('JSCA_4251_4587');
    var n,
      e = ul,
      o = al,
      r = _l,
      i = !0,
      l = kt('start', 'brush', 'end'),
      a = 6;
    function u(n) {
      Symbol('JSCA_4253_4270');
      var e = n
        .property('__brush', y)
        .selectAll('.overlay')
        .data([ll('overlay')]);
      e
        .enter()
        .append('rect')
        .attr('class', 'overlay')
        .attr('pointer-events', 'all')
        .attr('cursor', nl.overlay)
        .merge(e)
        .each(function () {
          Symbol('JSCA_4255_4258');
          var t = cl(this).extent;
          Gn(this)
            .attr('x', t[0][0])
            .attr('y', t[0][1])
            .attr('width', t[1][0] - t[0][0])
            .attr('height', t[1][1] - t[0][1]);
        }),
        n
          .selectAll('.selection')
          .data([ll('selection')])
          .enter()
          .append('rect')
          .attr('class', 'selection')
          .attr('cursor', nl.selection)
          .attr('fill', '#777')
          .attr('fill-opacity', 0.3)
          .attr('stroke', '#fff')
          .attr('shape-rendering', 'crispEdges');
      var o = n.selectAll('.handle').data(t.handles, function (t) {
        return Symbol('JSCA_4260_4262'), t.type;
      });
      o.exit().remove(),
        o
          .enter()
          .append('rect')
          .attr('class', function (t) {
            return Symbol('JSCA_4264_4266'), 'handle handle--' + t.type;
          })
          .attr('cursor', function (t) {
            return Symbol('JSCA_4266_4268'), nl[t.type];
          }),
        n
          .each(_)
          .attr('fill', 'none')
          .attr('pointer-events', 'all')
          .on('mousedown.brush', s)
          .filter(r)
          .on('touchstart.brush', s)
          .on('touchmove.brush', S)
          .on('touchend.brush touchcancel.brush', h)
          .style('touch-action', 'none')
          .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
    }
    function _() {
      Symbol('JSCA_4299_4315');
      var t = Gn(this),
        n = cl(this).selection;
      n
        ? (t
            .selectAll('.selection')
            .style('display', null)
            .attr('x', n[0][0])
            .attr('y', n[0][1])
            .attr('width', n[1][0] - n[0][0])
            .attr('height', n[1][1] - n[0][1]),
          t
            .selectAll('.handle')
            .style('display', null)
            .attr('x', function (t) {
              return (
                Symbol('JSCA_4303_4305'),
                'e' === t.type[t.type.length - 1]
                  ? n[1][0] - a / 2
                  : n[0][0] - a / 2
              );
            })
            .attr('y', function (t) {
              return (
                Symbol('JSCA_4305_4307'),
                's' === t.type[0] ? n[1][1] - a / 2 : n[0][1] - a / 2
              );
            })
            .attr('width', function (t) {
              return (
                Symbol('JSCA_4307_4309'),
                'n' === t.type || 's' === t.type ? n[1][0] - n[0][0] + a : a
              );
            })
            .attr('height', function (t) {
              return (
                Symbol('JSCA_4309_4311'),
                'e' === t.type || 'w' === t.type ? n[1][1] - n[0][1] + a : a
              );
            }))
        : t
            .selectAll('.selection,.handle')
            .style('display', 'none')
            .attr('x', null)
            .attr('y', null)
            .attr('width', null)
            .attr('height', null);
    }
    function c(t, n, e) {
      Symbol('JSCA_4316_4319');
      var o = t.__brush.emitter;
      return !o || (e && o.clean) ? new f(t, n, e) : o;
    }
    function f(t, n, e) {
      Symbol('JSCA_4320_4326'),
        (this.that = t),
        (this.args = n),
        (this.state = t.__brush),
        (this.active = 0),
        (this.clean = e);
    }
    function s(e) {
      if (
        (Symbol('JSCA_4355_4552'),
        (!n || e.touches) && o.apply(this, arguments))
      ) {
        var r,
          l,
          a,
          u,
          f,
          s,
          S,
          h,
          y,
          b,
          m,
          d = this,
          A = e.target.__data__.type,
          C =
            'selection' === (i && e.metaKey ? (A = 'overlay') : A)
              ? Yi
              : i && e.altKey
              ? Hi
              : ji,
          J = t === Qi ? null : rl[A],
          p = t === Ki ? null : il[A],
          g = cl(d),
          v = g.extent,
          x = g.selection,
          w = v[0][0],
          M = v[0][1],
          T = v[1][0],
          E = v[1][1],
          N = 0,
          k = 0,
          P = J && p && i && e.shiftKey,
          z = Array.from(e.touches || [e], (t) => {
            const n = t.identifier;
            return ((t = Qn(t, d)).point0 = t.slice()), (t.identifier = n), t;
          });
        Fr(d);
        var $ = c(d, arguments, !0).beforestart();
        if ('overlay' === A) {
          x && (y = !0);
          const n = [z[0], z[1] || z[0]];
          (g.selection = x =
            [
              [
                (r = t === Qi ? w : Vi(n[0][0], n[1][0])),
                (a = t === Ki ? M : Vi(n[0][1], n[1][1])),
              ],
              [
                (f = t === Qi ? T : Gi(n[0][0], n[1][0])),
                (S = t === Ki ? E : Gi(n[0][1], n[1][1])),
              ],
            ]),
            z.length > 1 && U(e);
        } else (r = x[0][0]), (a = x[0][1]), (f = x[1][0]), (S = x[1][1]);
        (l = r), (u = a), (s = f), (h = S);
        var D = Gn(d).attr('pointer-events', 'none'),
          R = D.selectAll('.overlay').attr('cursor', nl[A]);
        if (e.touches) ($.moved = q), ($.ended = I);
        else {
          var F = Gn(e.view)
            .on('mousemove.brush', q, !0)
            .on('mouseup.brush', I, !0);
          i &&
            F.on(
              'keydown.brush',
              function (t) {
                switch ((Symbol('JSCA_4477_4509'), t.keyCode)) {
                  case 16:
                    P = J && p;
                    break;
                  case 18:
                    C === ji &&
                      (J && ((f = s - N * J), (r = l + N * J)),
                      p && ((S = h - k * p), (a = u + k * p)),
                      (C = Hi),
                      U(t));
                    break;
                  case 32:
                    (C !== ji && C !== Hi) ||
                      (J < 0 ? (f = s - N) : J > 0 && (r = l - N),
                      p < 0 ? (S = h - k) : p > 0 && (a = u - k),
                      (C = Li),
                      R.attr('cursor', nl.selection),
                      U(t));
                    break;
                  default:
                    return;
                }
                Bi(t);
              },
              !0
            ).on(
              'keyup.brush',
              function (t) {
                switch ((Symbol('JSCA_4510_4551'), t.keyCode)) {
                  case 16:
                    P && ((b = m = P = !1), U(t));
                    break;
                  case 18:
                    C === Hi &&
                      (J < 0 ? (f = s) : J > 0 && (r = l),
                      p < 0 ? (S = h) : p > 0 && (a = u),
                      (C = ji),
                      U(t));
                    break;
                  case 32:
                    C === Li &&
                      (t.altKey
                        ? (J && ((f = s - N * J), (r = l + N * J)),
                          p && ((S = h - k * p), (a = u + k * p)),
                          (C = Hi))
                        : (J < 0 ? (f = s) : J > 0 && (r = l),
                          p < 0 ? (S = h) : p > 0 && (a = u),
                          (C = ji)),
                      R.attr('cursor', nl[A]),
                      U(t));
                    break;
                  default:
                    return;
                }
                Bi(t);
              },
              !0
            ),
            re(e.view);
        }
        _.call(d), $.start(e, C.name);
      }
      function q(t) {
        Symbol('JSCA_4394_4406');
        for (const n of t.changedTouches || [t])
          for (const t of z)
            t.identifier === n.identifier && (t.cur = Qn(n, d));
        if (P && !b && !m && 1 === z.length) {
          const t = z[0];
          Xi(t.cur[0] - t[0]) > Xi(t.cur[1] - t[1]) ? (m = !0) : (b = !0);
        }
        for (const t of z) t.cur && ((t[0] = t.cur[0]), (t[1] = t.cur[1]));
        (y = !0), Bi(t), U(t);
      }
      function U(t) {
        Symbol('JSCA_4407_4458');
        const n = z[0],
          e = n.point0;
        var o;
        switch (((N = n[0] - e[0]), (k = n[1] - e[1]), C)) {
          case Li:
          case Yi:
            J && ((N = Gi(w - r, Vi(T - f, N))), (l = r + N), (s = f + N)),
              p && ((k = Gi(M - a, Vi(E - S, k))), (u = a + k), (h = S + k));
            break;
          case ji:
            z[1]
              ? (J &&
                  ((l = Gi(w, Vi(T, z[0][0]))),
                  (s = Gi(w, Vi(T, z[1][0]))),
                  (J = 1)),
                p &&
                  ((u = Gi(M, Vi(E, z[0][1]))),
                  (h = Gi(M, Vi(E, z[1][1]))),
                  (p = 1)))
              : (J < 0
                  ? ((N = Gi(w - r, Vi(T - r, N))), (l = r + N), (s = f))
                  : J > 0 &&
                    ((N = Gi(w - f, Vi(T - f, N))), (l = r), (s = f + N)),
                p < 0
                  ? ((k = Gi(M - a, Vi(E - a, k))), (u = a + k), (h = S))
                  : p > 0 &&
                    ((k = Gi(M - S, Vi(E - S, k))), (u = a), (h = S + k)));
            break;
          case Hi:
            J && ((l = Gi(w, Vi(T, r - N * J))), (s = Gi(w, Vi(T, f + N * J)))),
              p &&
                ((u = Gi(M, Vi(E, a - k * p))), (h = Gi(M, Vi(E, S + k * p))));
        }
        s < l &&
          ((J *= -1),
          (o = r),
          (r = f),
          (f = o),
          (o = l),
          (l = s),
          (s = o),
          A in el && R.attr('cursor', nl[(A = el[A])])),
          h < u &&
            ((p *= -1),
            (o = a),
            (a = S),
            (S = o),
            (o = u),
            (u = h),
            (h = o),
            A in ol && R.attr('cursor', nl[(A = ol[A])])),
          g.selection && (x = g.selection),
          b && ((l = x[0][0]), (s = x[1][0])),
          m && ((u = x[0][1]), (h = x[1][1])),
          (x[0][0] === l && x[0][1] === u && x[1][0] === s && x[1][1] === h) ||
            ((g.selection = [
              [l, u],
              [s, h],
            ]),
            _.call(d),
            $.brush(t, C.name));
      }
      function I(t) {
        if (
          (Symbol('JSCA_4459_4476'),
          (function (t) {
            Symbol('JSCA_4107_4109'), t.stopImmediatePropagation();
          })(t),
          t.touches)
        ) {
          if (t.touches.length) return;
          n && clearTimeout(n),
            (n = setTimeout(function () {
              Symbol('JSCA_4464_4466'), (n = null);
            }, 500));
        } else
          ie(t.view, y),
            F.on(
              'keydown.brush keyup.brush mousemove.brush mouseup.brush',
              null
            );
        D.attr('pointer-events', 'all'),
          R.attr('cursor', nl.overlay),
          g.selection && (x = g.selection),
          (function (t) {
            return (
              Symbol('JSCA_4235_4237'),
              t[0][0] === t[1][0] || t[0][1] === t[1][1]
            );
          })(x) && ((g.selection = null), _.call(d)),
          $.end(t, C.name);
      }
    }
    function S(t) {
      Symbol('JSCA_4553_4555'), c(this, arguments).moved(t);
    }
    function h(t) {
      Symbol('JSCA_4556_4558'), c(this, arguments).ended(t);
    }
    function y() {
      Symbol('JSCA_4559_4566');
      var n = this.__brush || { selection: null };
      return (n.extent = Zi(e.apply(this, arguments))), (n.dim = t), n;
    }
    return (
      (u.move = function (n, e, o) {
        Symbol('JSCA_4271_4295'),
          n.tween
            ? n
                .on('start.brush', function (t) {
                  Symbol('JSCA_4273_4275'),
                    c(this, arguments).beforestart().start(t);
                })
                .on('interrupt.brush end.brush', function (t) {
                  Symbol('JSCA_4275_4277'), c(this, arguments).end(t);
                })
                .tween('brush', function () {
                  Symbol('JSCA_4277_4285');
                  var n = this,
                    o = n.__brush,
                    r = c(n, arguments),
                    i = o.selection,
                    l = t.input(
                      'function' == typeof e ? e.apply(this, arguments) : e,
                      o.extent
                    ),
                    a = jo(i, l);
                  function u(t) {
                    Symbol('JSCA_4279_4283'),
                      (o.selection = 1 === t && null === l ? null : a(t)),
                      _.call(n),
                      r.brush();
                  }
                  return null !== i && null !== l ? u : u(1);
                })
            : n.each(function () {
                Symbol('JSCA_4287_4293');
                var n = this,
                  r = arguments,
                  i = n.__brush,
                  l = t.input(
                    'function' == typeof e ? e.apply(n, r) : e,
                    i.extent
                  ),
                  a = c(n, r).beforestart();
                Fr(n),
                  (i.selection = null === l ? null : l),
                  _.call(n),
                  a.start(o).brush(o).end(o);
              });
      }),
      (u.clear = function (t, n) {
        Symbol('JSCA_4296_4298'), u.move(t, null, n);
      }),
      (f.prototype = {
        beforestart: function () {
          return (
            Symbol('JSCA_4328_4331'),
            1 == ++this.active &&
              ((this.state.emitter = this), (this.starting = !0)),
            this
          );
        },
        start: function (t, n) {
          return (
            Symbol('JSCA_4332_4335'),
            this.starting
              ? ((this.starting = !1), this.emit('start', t, n))
              : this.emit('brush', t),
            this
          );
        },
        brush: function (t, n) {
          return Symbol('JSCA_4336_4339'), this.emit('brush', t, n), this;
        },
        end: function (t, n) {
          return (
            Symbol('JSCA_4340_4343'),
            0 == --this.active &&
              (delete this.state.emitter, this.emit('end', t, n)),
            this
          );
        },
        emit: function (n, e, o) {
          Symbol('JSCA_4344_4353');
          var r = Gn(this.that).datum();
          l.call(
            n,
            this.that,
            new Oi(n, {
              sourceEvent: e,
              target: u,
              selection: t.output(this.state.selection),
              mode: o,
              dispatch: l,
            }),
            r
          );
        },
      }),
      (u.extent = function (t) {
        return (
          Symbol('JSCA_4567_4569'),
          arguments.length
            ? ((e = 'function' == typeof t ? t : Ii(Zi(t))), u)
            : e
        );
      }),
      (u.filter = function (t) {
        return (
          Symbol('JSCA_4570_4572'),
          arguments.length ? ((o = 'function' == typeof t ? t : Ii(!!t)), u) : o
        );
      }),
      (u.touchable = function (t) {
        return (
          Symbol('JSCA_4573_4575'),
          arguments.length ? ((r = 'function' == typeof t ? t : Ii(!!t)), u) : r
        );
      }),
      (u.handleSize = function (t) {
        return Symbol('JSCA_4576_4578'), arguments.length ? ((a = +t), u) : a;
      }),
      (u.keyModifiers = function (t) {
        return Symbol('JSCA_4579_4581'), arguments.length ? ((i = !!t), u) : i;
      }),
      (u.on = function () {
        Symbol('JSCA_4582_4585');
        var t = l.on.apply(l, arguments);
        return t === l ? u : t;
      }),
      u
    );
  }
  var sl = Math.abs,
    Sl = Math.cos,
    hl = Math.sin,
    yl = Math.PI,
    bl = yl / 2,
    ml = 2 * yl,
    dl = Math.max,
    Al = 1e-12;
  function Cl(t, n) {
    return (
      Symbol('JSCA_4596_4600'), Array.from({ length: n - t }, (n, e) => t + e)
    );
  }
  function Jl(t, n) {
    Symbol('JSCA_4615_4730');
    var e = 0,
      o = null,
      r = null,
      i = null;
    function l(l) {
      Symbol('JSCA_4617_4716');
      var a,
        u = l.length,
        _ = new Array(u),
        c = Cl(0, u),
        f = new Array(u * u),
        s = new Array(u),
        S = 0;
      l = Float64Array.from(
        { length: u * u },
        n ? (t, n) => l[n % u][(n / u) | 0] : (t, n) => l[(n / u) | 0][n % u]
      );
      for (let n = 0; n < u; ++n) {
        let e = 0;
        for (let o = 0; o < u; ++o) e += l[n * u + o] + t * l[o * u + n];
        S += _[n] = e;
      }
      a = (S = dl(0, ml - e * u) / S) ? e : ml / u;
      {
        let n = 0;
        o && c.sort((t, n) => o(_[t], _[n]));
        for (const e of c) {
          const o = n;
          if (t) {
            const t = Cl(1 + ~u, u).filter((t) =>
              t < 0 ? l[~t * u + e] : l[e * u + t]
            );
            r &&
              t.sort((t, n) =>
                r(
                  t < 0 ? -l[~t * u + e] : l[e * u + t],
                  n < 0 ? -l[~n * u + e] : l[e * u + n]
                )
              );
            for (const o of t)
              if (o < 0) {
                (
                  f[~o * u + e] ||
                  (f[~o * u + e] = { source: null, target: null })
                ).target = {
                  index: e,
                  startAngle: n,
                  endAngle: (n += l[~o * u + e] * S),
                  value: l[~o * u + e],
                };
              } else {
                (
                  f[e * u + o] ||
                  (f[e * u + o] = { source: null, target: null })
                ).source = {
                  index: e,
                  startAngle: n,
                  endAngle: (n += l[e * u + o] * S),
                  value: l[e * u + o],
                };
              }
            s[e] = { index: e, startAngle: o, endAngle: n, value: _[e] };
          } else {
            const t = Cl(0, u).filter((t) => l[e * u + t] || l[t * u + e]);
            r && t.sort((t, n) => r(l[e * u + t], l[e * u + n]));
            for (const o of t) {
              let t;
              if (
                (e < o
                  ? ((t =
                      f[e * u + o] ||
                      (f[e * u + o] = { source: null, target: null })),
                    (t.source = {
                      index: e,
                      startAngle: n,
                      endAngle: (n += l[e * u + o] * S),
                      value: l[e * u + o],
                    }))
                  : ((t =
                      f[o * u + e] ||
                      (f[o * u + e] = { source: null, target: null })),
                    (t.target = {
                      index: e,
                      startAngle: n,
                      endAngle: (n += l[e * u + o] * S),
                      value: l[e * u + o],
                    }),
                    e === o && (t.source = t.target)),
                t.source && t.target && t.source.value < t.target.value)
              ) {
                const n = t.source;
                (t.source = t.target), (t.target = n);
              }
            }
            s[e] = { index: e, startAngle: o, endAngle: n, value: _[e] };
          }
          n += a;
        }
      }
      return ((f = Object.values(f)).groups = s), i ? f.sort(i) : f;
    }
    return (
      (l.padAngle = function (t) {
        return (
          Symbol('JSCA_4717_4719'), arguments.length ? ((e = dl(0, t)), l) : e
        );
      }),
      (l.sortGroups = function (t) {
        return Symbol('JSCA_4720_4722'), arguments.length ? ((o = t), l) : o;
      }),
      (l.sortSubgroups = function (t) {
        return Symbol('JSCA_4723_4725'), arguments.length ? ((r = t), l) : r;
      }),
      (l.sortChords = function (t) {
        return (
          Symbol('JSCA_4726_4728'),
          arguments.length
            ? (null == t
                ? (i = null)
                : (((n = t),
                  Symbol('JSCA_4601_4605'),
                  (i = function (t, e) {
                    return (
                      Symbol('JSCA_4602_4604'),
                      n(
                        t.source.value + t.target.value,
                        e.source.value + e.target.value
                      )
                    );
                  }))._ = t),
              l)
            : i && i._
        );
      }),
      l
    );
  }
  const pl = Math.PI,
    gl = 2 * pl,
    vl = 1e-6,
    xl = gl - vl;
  function wl(t) {
    Symbol('JSCA_4732_4737'), (this._ += t[0]);
    for (let n = 1, e = t.length; n < e; ++n) this._ += arguments[n] + t[n];
  }
  let Ml = class {
    constructor(t) {
      Symbol('JSCA_4751_4755'),
        (this._x0 = this._y0 = this._x1 = this._y1 = null),
        (this._ = ''),
        (this._append =
          null == t
            ? wl
            : (function (t) {
                Symbol('JSCA_4738_4749');
                let n = Math.floor(t);
                if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
                if (n > 15) return wl;
                const e = 10 ** n;
                return function (t) {
                  Symbol('JSCA_4743_4748'), (this._ += t[0]);
                  for (let n = 1, o = t.length; n < o; ++n)
                    this._ += Math.round(arguments[n] * e) / e + t[n];
                };
              })(t));
    }
    moveTo(t, n) {
      Symbol('JSCA_4756_4758'),
        this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
          +n)}`;
    }
    closePath() {
      Symbol('JSCA_4759_4764'),
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
    }
    lineTo(t, n) {
      Symbol('JSCA_4765_4767'),
        this._append`L${(this._x1 = +t)},${(this._y1 = +n)}`;
    }
    quadraticCurveTo(t, n, e, o) {
      Symbol('JSCA_4768_4770'),
        this._append`Q${+t},${+n},${(this._x1 = +e)},${(this._y1 = +o)}`;
    }
    bezierCurveTo(t, n, e, o, r, i) {
      Symbol('JSCA_4771_4773'),
        this._append`C${+t},${+n},${+e},${+o},${(this._x1 = +r)},${(this._y1 =
          +i)}`;
    }
    arcTo(t, n, e, o, r) {
      if (
        (Symbol('JSCA_4774_4789'),
        (t = +t),
        (n = +n),
        (e = +e),
        (o = +o),
        (r = +r) < 0)
      )
        throw new Error(`negative radius: ${r}`);
      let i = this._x1,
        l = this._y1,
        a = e - t,
        u = o - n,
        _ = i - t,
        c = l - n,
        f = _ * _ + c * c;
      if (null === this._x1) this._append`M${(this._x1 = t)},${(this._y1 = n)}`;
      else if (f > vl)
        if (Math.abs(c * a - u * _) > vl && r) {
          let s = e - i,
            S = o - l,
            h = a * a + u * u,
            y = s * s + S * S,
            b = Math.sqrt(h),
            m = Math.sqrt(f),
            d = r * Math.tan((pl - Math.acos((h + f - y) / (2 * b * m))) / 2),
            A = d / m,
            C = d / b;
          Math.abs(A - 1) > vl && this._append`L${t + A * _},${n + A * c}`,
            this._append`A${r},${r},0,0,${+(c * s > _ * S)},${(this._x1 =
              t + C * a)},${(this._y1 = n + C * u)}`;
        } else this._append`L${(this._x1 = t)},${(this._y1 = n)}`;
      else;
    }
    arc(t, n, e, o, r, i) {
      if (
        (Symbol('JSCA_4790_4806'), (t = +t), (n = +n), (i = !!i), (e = +e) < 0)
      )
        throw new Error(`negative radius: ${e}`);
      let l = e * Math.cos(o),
        a = e * Math.sin(o),
        u = t + l,
        _ = n + a,
        c = 1 ^ i,
        f = i ? o - r : r - o;
      null === this._x1
        ? this._append`M${u},${_}`
        : (Math.abs(this._x1 - u) > vl || Math.abs(this._y1 - _) > vl) &&
          this._append`L${u},${_}`,
        e &&
          (f < 0 && (f = (f % gl) + gl),
          f > xl
            ? this._append`A${e},${e},0,1,${c},${t - l},${
                n - a
              }A${e},${e},0,1,${c},${(this._x1 = u)},${(this._y1 = _)}`
            : f > vl &&
              this._append`A${e},${e},0,${+(f >= pl)},${c},${(this._x1 =
                t + e * Math.cos(r))},${(this._y1 = n + e * Math.sin(r))}`);
    }
    rect(t, n, e, o) {
      Symbol('JSCA_4807_4809'),
        this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
          +n)}h${(e = +e)}v${+o}h${-e}Z`;
    }
    toString() {
      return Symbol('JSCA_4810_4812'), this._;
    }
  };
  function Tl() {
    return Symbol('JSCA_4814_4816'), new Ml();
  }
  Tl.prototype = Ml.prototype;
  var El = Array.prototype.slice;
  function Nl(t) {
    return (
      Symbol('JSCA_4822_4826'),
      function () {
        return Symbol('JSCA_4823_4825'), t;
      }
    );
  }
  function kl(t) {
    return Symbol('JSCA_4827_4829'), t.source;
  }
  function Pl(t) {
    return Symbol('JSCA_4830_4832'), t.target;
  }
  function zl(t) {
    return Symbol('JSCA_4833_4835'), t.radius;
  }
  function $l(t) {
    return Symbol('JSCA_4836_4838'), t.startAngle;
  }
  function Dl(t) {
    return Symbol('JSCA_4839_4841'), t.endAngle;
  }
  function Rl() {
    return Symbol('JSCA_4842_4844'), 0;
  }
  function Fl() {
    return Symbol('JSCA_4845_4847'), 10;
  }
  function ql(t) {
    Symbol('JSCA_4848_4905');
    var n = kl,
      e = Pl,
      o = zl,
      r = zl,
      i = $l,
      l = Dl,
      a = Rl,
      u = null;
    function _() {
      Symbol('JSCA_4850_4873');
      var _,
        c = n.apply(this, arguments),
        f = e.apply(this, arguments),
        s = a.apply(this, arguments) / 2,
        S = El.call(arguments),
        h = +o.apply(this, ((S[0] = c), S)),
        y = i.apply(this, S) - bl,
        b = l.apply(this, S) - bl,
        m = +r.apply(this, ((S[0] = f), S)),
        d = i.apply(this, S) - bl,
        A = l.apply(this, S) - bl;
      if (
        (u || (u = _ = Tl()),
        s > Al &&
          (sl(b - y) > 2 * s + Al
            ? b > y
              ? ((y += s), (b -= s))
              : ((y -= s), (b += s))
            : (y = b = (y + b) / 2),
          sl(A - d) > 2 * s + Al
            ? A > d
              ? ((d += s), (A -= s))
              : ((d -= s), (A += s))
            : (d = A = (d + A) / 2)),
        u.moveTo(h * Sl(y), h * hl(y)),
        u.arc(0, 0, h, y, b),
        y !== d || b !== A)
      )
        if (t) {
          var C = m - +t.apply(this, arguments),
            J = (d + A) / 2;
          u.quadraticCurveTo(0, 0, C * Sl(d), C * hl(d)),
            u.lineTo(m * Sl(J), m * hl(J)),
            u.lineTo(C * Sl(A), C * hl(A));
        } else
          u.quadraticCurveTo(0, 0, m * Sl(d), m * hl(d)), u.arc(0, 0, m, d, A);
      if ((u.quadraticCurveTo(0, 0, h * Sl(y), h * hl(y)), u.closePath(), _))
        return (u = null), _ + '' || null;
    }
    return (
      t &&
        (_.headRadius = function (n) {
          return (
            Symbol('JSCA_4874_4876'),
            arguments.length
              ? ((t = 'function' == typeof n ? n : Nl(+n)), _)
              : t
          );
        }),
      (_.radius = function (t) {
        return (
          Symbol('JSCA_4877_4879'),
          arguments.length
            ? ((o = r = 'function' == typeof t ? t : Nl(+t)), _)
            : o
        );
      }),
      (_.sourceRadius = function (t) {
        return (
          Symbol('JSCA_4880_4882'),
          arguments.length ? ((o = 'function' == typeof t ? t : Nl(+t)), _) : o
        );
      }),
      (_.targetRadius = function (t) {
        return (
          Symbol('JSCA_4883_4885'),
          arguments.length ? ((r = 'function' == typeof t ? t : Nl(+t)), _) : r
        );
      }),
      (_.startAngle = function (t) {
        return (
          Symbol('JSCA_4886_4888'),
          arguments.length ? ((i = 'function' == typeof t ? t : Nl(+t)), _) : i
        );
      }),
      (_.endAngle = function (t) {
        return (
          Symbol('JSCA_4889_4891'),
          arguments.length ? ((l = 'function' == typeof t ? t : Nl(+t)), _) : l
        );
      }),
      (_.padAngle = function (t) {
        return (
          Symbol('JSCA_4892_4894'),
          arguments.length ? ((a = 'function' == typeof t ? t : Nl(+t)), _) : a
        );
      }),
      (_.source = function (t) {
        return Symbol('JSCA_4895_4897'), arguments.length ? ((n = t), _) : n;
      }),
      (_.target = function (t) {
        return Symbol('JSCA_4898_4900'), arguments.length ? ((e = t), _) : e;
      }),
      (_.context = function (t) {
        return (
          Symbol('JSCA_4901_4903'),
          arguments.length ? ((u = null == t ? null : t), _) : u
        );
      }),
      _
    );
  }
  var Ul = Array.prototype.slice;
  function Il(t, n) {
    return Symbol('JSCA_4914_4916'), t - n;
  }
  var Ol = (t) => () => t;
  function Bl(t, n) {
    Symbol('JSCA_4923_4927');
    for (var e, o = -1, r = n.length; ++o < r; )
      if ((e = Yl(t, n[o]))) return e;
    return 0;
  }
  function Yl(t, n) {
    Symbol('JSCA_4928_4936');
    for (
      var e = n[0], o = n[1], r = -1, i = 0, l = t.length, a = l - 1;
      i < l;
      a = i++
    ) {
      var u = t[i],
        _ = u[0],
        c = u[1],
        f = t[a],
        s = f[0],
        S = f[1];
      if (Ll(u, f, n)) return 0;
      c > o != S > o && e < ((s - _) * (o - c)) / (S - c) + _ && (r = -r);
    }
    return r;
  }
  function Ll(t, n, e) {
    var o, r, i, l;
    return (
      Symbol('JSCA_4937_4940'),
      (function (t, n, e) {
        return (
          Symbol('JSCA_4941_4943'),
          (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1])
        );
      })(t, n, e) &&
        ((r = t[(o = +(t[0] === n[0]))]),
        (i = e[o]),
        (l = n[o]),
        Symbol('JSCA_4944_4946'),
        (r <= i && i <= l) || (l <= i && i <= r))
    );
  }
  function jl() {
    Symbol('JSCA_4947_4947');
  }
  var Hl = [
    [],
    [
      [
        [1, 1.5],
        [0.5, 1],
      ],
    ],
    [
      [
        [1.5, 1],
        [1, 1.5],
      ],
    ],
    [
      [
        [1.5, 1],
        [0.5, 1],
      ],
    ],
    [
      [
        [1, 0.5],
        [1.5, 1],
      ],
    ],
    [
      [
        [1, 1.5],
        [0.5, 1],
      ],
      [
        [1, 0.5],
        [1.5, 1],
      ],
    ],
    [
      [
        [1, 0.5],
        [1, 1.5],
      ],
    ],
    [
      [
        [1, 0.5],
        [0.5, 1],
      ],
    ],
    [
      [
        [0.5, 1],
        [1, 0.5],
      ],
    ],
    [
      [
        [1, 1.5],
        [1, 0.5],
      ],
    ],
    [
      [
        [0.5, 1],
        [1, 0.5],
      ],
      [
        [1.5, 1],
        [1, 1.5],
      ],
    ],
    [
      [
        [1.5, 1],
        [1, 0.5],
      ],
    ],
    [
      [
        [0.5, 1],
        [1.5, 1],
      ],
    ],
    [
      [
        [1, 1.5],
        [1.5, 1],
      ],
    ],
    [
      [
        [0.5, 1],
        [1, 1.5],
      ],
    ],
    [],
  ];
  function Xl() {
    Symbol('JSCA_4949_5092');
    var t = 1,
      n = 1,
      e = Q,
      o = a;
    function r(t) {
      Symbol('JSCA_4951_4962');
      var n = e(t);
      if (Array.isArray(n)) n = n.slice().sort(Il);
      else {
        const e = g(t, Gl);
        for (n = V(...K(e[0], e[1], n), n); n[n.length - 1] >= e[1]; ) n.pop();
        for (; n[1] < e[0]; ) n.shift();
      }
      return n.map((n) => i(t, n));
    }
    function i(e, r) {
      Symbol('JSCA_4963_4984');
      const i = null == r ? NaN : +r;
      if (isNaN(i)) throw new Error(`invalid value: ${r}`);
      var a = [],
        u = [];
      return (
        (function (e, o, r) {
          Symbol('JSCA_4985_5063');
          var i,
            a,
            u,
            _,
            c,
            f,
            s = new Array(),
            S = new Array();
          (i = a = -1), (_ = Vl(e[0], o)), Hl[_ << 1].forEach(h);
          for (; ++i < t - 1; )
            (u = _), (_ = Vl(e[i + 1], o)), Hl[u | (_ << 1)].forEach(h);
          Hl[_ | 0].forEach(h);
          for (; ++a < n - 1; ) {
            for (
              i = -1,
                _ = Vl(e[a * t + t], o),
                c = Vl(e[a * t], o),
                Hl[(_ << 1) | (c << 2)].forEach(h);
              ++i < t - 1;

            )
              (u = _),
                (_ = Vl(e[a * t + t + i + 1], o)),
                (f = c),
                (c = Vl(e[a * t + i + 1], o)),
                Hl[u | (_ << 1) | (c << 2) | (f << 3)].forEach(h);
            Hl[_ | (c << 3)].forEach(h);
          }
          (i = -1), (c = e[a * t] >= o), Hl[c << 2].forEach(h);
          for (; ++i < t - 1; )
            (f = c),
              (c = Vl(e[a * t + i + 1], o)),
              Hl[(c << 2) | (f << 3)].forEach(h);
          function h(t) {
            Symbol('JSCA_5015_5062');
            var n,
              e,
              o = [t[0][0] + i, t[0][1] + a],
              u = [t[1][0] + i, t[1][1] + a],
              _ = l(o),
              c = l(u);
            (n = S[_])
              ? (e = s[c])
                ? (delete S[n.end],
                  delete s[e.start],
                  n === e
                    ? (n.ring.push(u), r(n.ring))
                    : (s[n.start] = S[e.end] =
                        {
                          start: n.start,
                          end: e.end,
                          ring: n.ring.concat(e.ring),
                        }))
                : (delete S[n.end], n.ring.push(u), (S[(n.end = c)] = n))
              : (n = s[c])
              ? (e = S[_])
                ? (delete s[n.start],
                  delete S[e.end],
                  n === e
                    ? (n.ring.push(u), r(n.ring))
                    : (s[e.start] = S[n.end] =
                        {
                          start: e.start,
                          end: n.end,
                          ring: e.ring.concat(n.ring),
                        }))
                : (delete s[n.start], n.ring.unshift(o), (s[(n.start = _)] = n))
              : (s[_] = S[c] = { start: _, end: c, ring: [o, u] });
          }
          Hl[c << 3].forEach(h);
        })(e, i, function (t) {
          Symbol('JSCA_4967_4970'),
            o(t, e, i),
            (function (t) {
              Symbol('JSCA_4917_4921');
              for (
                var n = 0,
                  e = t.length,
                  o = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1];
                ++n < e;

              )
                o += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
              return o;
            })(t) > 0
              ? a.push([t])
              : u.push(t);
        }),
        u.forEach(function (t) {
          Symbol('JSCA_4971_4978');
          for (var n, e = 0, o = a.length; e < o; ++e)
            if (-1 !== Bl((n = a[e])[0], t)) return void n.push(t);
        }),
        { type: 'MultiPolygon', value: r, coordinates: a }
      );
    }
    function l(n) {
      return Symbol('JSCA_5064_5066'), 2 * n[0] + n[1] * (t + 1) * 4;
    }
    function a(e, o, r) {
      Symbol('JSCA_5067_5077'),
        e.forEach(function (e) {
          Symbol('JSCA_5068_5076');
          var i = e[0],
            l = e[1],
            a = 0 | i,
            u = 0 | l,
            _ = Wl(o[u * t + a]);
          i > 0 &&
            i < t &&
            a === i &&
            (e[0] = Zl(i, Wl(o[u * t + a - 1]), _, r)),
            l > 0 &&
              l < n &&
              u === l &&
              (e[1] = Zl(l, Wl(o[(u - 1) * t + a]), _, r));
        });
    }
    return (
      (r.contour = i),
      (r.size = function (e) {
        if ((Symbol('JSCA_5079_5084'), !arguments.length)) return [t, n];
        var o = Math.floor(e[0]),
          i = Math.floor(e[1]);
        if (!(o >= 0 && i >= 0)) throw new Error('invalid size');
        return (t = o), (n = i), r;
      }),
      (r.thresholds = function (t) {
        return (
          Symbol('JSCA_5085_5087'),
          arguments.length
            ? ((e =
                'function' == typeof t
                  ? t
                  : Array.isArray(t)
                  ? Ol(Ul.call(t))
                  : Ol(t)),
              r)
            : e
        );
      }),
      (r.smooth = function (t) {
        return (
          Symbol('JSCA_5088_5090'),
          arguments.length ? ((o = t ? a : jl), r) : o === a
        );
      }),
      r
    );
  }
  function Gl(t) {
    return Symbol('JSCA_5093_5095'), isFinite(t) ? t : NaN;
  }
  function Vl(t, n) {
    return Symbol('JSCA_5096_5098'), null != t && +t >= n;
  }
  function Wl(t) {
    return Symbol('JSCA_5099_5101'), null == t || isNaN((t = +t)) ? -1 / 0 : t;
  }
  function Zl(t, n, e, o) {
    Symbol('JSCA_5102_5107');
    const r = o - n,
      i = e - n,
      l = isFinite(r) || isFinite(i) ? r / i : Math.sign(r) / Math.sign(i);
    return isNaN(l) ? t : t + l - 0.5;
  }
  function Kl(t) {
    return Symbol('JSCA_5108_5110'), t[0];
  }
  function Ql(t) {
    return Symbol('JSCA_5111_5113'), t[1];
  }
  function ta() {
    return Symbol('JSCA_5114_5116'), 1;
  }
  const na = 134217729;
  function ea(t, n, e, o, r) {
    let i, l, a, u;
    Symbol('JSCA_5210_5280');
    let _ = n[0],
      c = o[0],
      f = 0,
      s = 0;
    c > _ == c > -_ ? ((i = _), (_ = n[++f])) : ((i = c), (c = o[++s]));
    let S = 0;
    if (f < t && s < e)
      for (
        c > _ == c > -_
          ? ((l = _ + i), (a = i - (l - _)), (_ = n[++f]))
          : ((l = c + i), (a = i - (l - c)), (c = o[++s])),
          i = l,
          0 !== a && (r[S++] = a);
        f < t && s < e;

      )
        c > _ == c > -_
          ? ((l = i + _),
            (u = l - i),
            (a = i - (l - u) + (_ - u)),
            (_ = n[++f]))
          : ((l = i + c),
            (u = l - i),
            (a = i - (l - u) + (c - u)),
            (c = o[++s])),
          (i = l),
          0 !== a && (r[S++] = a);
    for (; f < t; )
      (l = i + _),
        (u = l - i),
        (a = i - (l - u) + (_ - u)),
        (_ = n[++f]),
        (i = l),
        0 !== a && (r[S++] = a);
    for (; s < e; )
      (l = i + c),
        (u = l - i),
        (a = i - (l - u) + (c - u)),
        (c = o[++s]),
        (i = l),
        0 !== a && (r[S++] = a);
    return (0 === i && 0 !== S) || (r[S++] = i), S;
  }
  function oa(t) {
    return Symbol('JSCA_5286_5288'), new Float64Array(t);
  }
  const ra = oa(4),
    ia = oa(8),
    la = oa(12),
    aa = oa(16),
    ua = oa(4);
  function _a(t, n, e, o, r, i, l) {
    let a, u, _, c, f, s, S, h, y, b, m, d, A, C, J, p, g, v;
    Symbol('JSCA_5297_5443');
    const x = t - r,
      w = e - r,
      M = n - i,
      T = o - i;
    (C = x * T),
      (s = na * x),
      (S = s - (s - x)),
      (h = x - S),
      (s = na * T),
      (y = s - (s - T)),
      (b = T - y),
      (J = h * b - (C - S * y - h * y - S * b)),
      (p = M * w),
      (s = na * M),
      (S = s - (s - M)),
      (h = M - S),
      (s = na * w),
      (y = s - (s - w)),
      (b = w - y),
      (g = h * b - (p - S * y - h * y - S * b)),
      (m = J - g),
      (f = J - m),
      (ra[0] = J - (m + f) + (f - g)),
      (d = C + m),
      (f = d - C),
      (A = C - (d - f) + (m - f)),
      (m = A - p),
      (f = A - m),
      (ra[1] = A - (m + f) + (f - p)),
      (v = d + m),
      (f = v - d),
      (ra[2] = d - (v - f) + (m - f)),
      (ra[3] = v);
    let E = (function (t, n) {
        Symbol('JSCA_5281_5285');
        let e = n[0];
        for (let o = 1; o < t; o++) e += n[o];
        return e;
      })(4, ra),
      N = 22204460492503146e-32 * l;
    if (E >= N || -E >= N) return E;
    if (
      ((f = t - x),
      (a = t - (x + f) + (f - r)),
      (f = e - w),
      (_ = e - (w + f) + (f - r)),
      (f = n - M),
      (u = n - (M + f) + (f - i)),
      (f = o - T),
      (c = o - (T + f) + (f - i)),
      0 === a && 0 === u && 0 === _ && 0 === c)
    )
      return E;
    if (
      ((N = 11093356479670487e-47 * l + 33306690738754706e-32 * Math.abs(E)),
      (E += x * c + T * a - (M * _ + w * u)),
      E >= N || -E >= N)
    )
      return E;
    (C = a * T),
      (s = na * a),
      (S = s - (s - a)),
      (h = a - S),
      (s = na * T),
      (y = s - (s - T)),
      (b = T - y),
      (J = h * b - (C - S * y - h * y - S * b)),
      (p = u * w),
      (s = na * u),
      (S = s - (s - u)),
      (h = u - S),
      (s = na * w),
      (y = s - (s - w)),
      (b = w - y),
      (g = h * b - (p - S * y - h * y - S * b)),
      (m = J - g),
      (f = J - m),
      (ua[0] = J - (m + f) + (f - g)),
      (d = C + m),
      (f = d - C),
      (A = C - (d - f) + (m - f)),
      (m = A - p),
      (f = A - m),
      (ua[1] = A - (m + f) + (f - p)),
      (v = d + m),
      (f = v - d),
      (ua[2] = d - (v - f) + (m - f)),
      (ua[3] = v);
    const k = ea(4, ra, 4, ua, ia);
    (C = x * c),
      (s = na * x),
      (S = s - (s - x)),
      (h = x - S),
      (s = na * c),
      (y = s - (s - c)),
      (b = c - y),
      (J = h * b - (C - S * y - h * y - S * b)),
      (p = M * _),
      (s = na * M),
      (S = s - (s - M)),
      (h = M - S),
      (s = na * _),
      (y = s - (s - _)),
      (b = _ - y),
      (g = h * b - (p - S * y - h * y - S * b)),
      (m = J - g),
      (f = J - m),
      (ua[0] = J - (m + f) + (f - g)),
      (d = C + m),
      (f = d - C),
      (A = C - (d - f) + (m - f)),
      (m = A - p),
      (f = A - m),
      (ua[1] = A - (m + f) + (f - p)),
      (v = d + m),
      (f = v - d),
      (ua[2] = d - (v - f) + (m - f)),
      (ua[3] = v);
    const P = ea(k, ia, 4, ua, la);
    (C = a * c),
      (s = na * a),
      (S = s - (s - a)),
      (h = a - S),
      (s = na * c),
      (y = s - (s - c)),
      (b = c - y),
      (J = h * b - (C - S * y - h * y - S * b)),
      (p = u * _),
      (s = na * u),
      (S = s - (s - u)),
      (h = u - S),
      (s = na * _),
      (y = s - (s - _)),
      (b = _ - y),
      (g = h * b - (p - S * y - h * y - S * b)),
      (m = J - g),
      (f = J - m),
      (ua[0] = J - (m + f) + (f - g)),
      (d = C + m),
      (f = d - C),
      (A = C - (d - f) + (m - f)),
      (m = A - p),
      (f = A - m),
      (ua[1] = A - (m + f) + (f - p)),
      (v = d + m),
      (f = v - d),
      (ua[2] = d - (v - f) + (m - f)),
      (ua[3] = v);
    const z = ea(P, la, 4, ua, aa);
    return aa[z - 1];
  }
  function ca(t, n, e, o, r, i) {
    Symbol('JSCA_5444_5451');
    const l = (n - i) * (e - r),
      a = (t - r) * (o - i),
      u = l - a,
      _ = Math.abs(l + a);
    return Math.abs(u) >= 33306690738754716e-32 * _
      ? u
      : -_a(t, n, e, o, r, i, _);
  }
  const fa = Math.pow(2, -52),
    sa = new Uint32Array(512);
  class Sa {
    static from(t, n = Aa, e = Ca) {
      Symbol('JSCA_5455_5464');
      const o = t.length,
        r = new Float64Array(2 * o);
      for (let i = 0; i < o; i++) {
        const o = t[i];
        (r[2 * i] = n(o)), (r[2 * i + 1] = e(o));
      }
      return new Sa(r);
    }
    constructor(t) {
      Symbol('JSCA_5465_5480');
      const n = t.length >> 1;
      if (n > 0 && 'number' != typeof t[0])
        throw new Error('Expected coords to contain numbers.');
      this.coords = t;
      const e = Math.max(2 * n - 5, 0);
      (this._triangles = new Uint32Array(3 * e)),
        (this._halfedges = new Int32Array(3 * e)),
        (this._hashSize = Math.ceil(Math.sqrt(n))),
        (this._hullPrev = new Uint32Array(n)),
        (this._hullNext = new Uint32Array(n)),
        (this._hullTri = new Uint32Array(n)),
        (this._hullHash = new Int32Array(this._hashSize)),
        (this._ids = new Uint32Array(n)),
        (this._dists = new Float64Array(n)),
        this.update();
    }
    update() {
      Symbol('JSCA_5481_5640');
      const {
          coords: t,
          _hullPrev: n,
          _hullNext: e,
          _hullTri: o,
          _hullHash: r,
        } = this,
        i = t.length >> 1;
      let l = 1 / 0,
        a = 1 / 0,
        u = -1 / 0,
        _ = -1 / 0;
      for (let n = 0; n < i; n++) {
        const e = t[2 * n],
          o = t[2 * n + 1];
        e < l && (l = e),
          o < a && (a = o),
          e > u && (u = e),
          o > _ && (_ = o),
          (this._ids[n] = n);
      }
      const c = (l + u) / 2,
        f = (a + _) / 2;
      let s, S, h;
      for (let n = 0, e = 1 / 0; n < i; n++) {
        const o = ha(c, f, t[2 * n], t[2 * n + 1]);
        o < e && ((s = n), (e = o));
      }
      const y = t[2 * s],
        b = t[2 * s + 1];
      for (let n = 0, e = 1 / 0; n < i; n++) {
        if (n === s) continue;
        const o = ha(y, b, t[2 * n], t[2 * n + 1]);
        o < e && o > 0 && ((S = n), (e = o));
      }
      let m = t[2 * S],
        d = t[2 * S + 1],
        A = 1 / 0;
      for (let n = 0; n < i; n++) {
        if (n === s || n === S) continue;
        const e = ba(y, b, m, d, t[2 * n], t[2 * n + 1]);
        e < A && ((h = n), (A = e));
      }
      let C = t[2 * h],
        J = t[2 * h + 1];
      if (A === 1 / 0) {
        for (let n = 0; n < i; n++)
          this._dists[n] = t[2 * n] - t[0] || t[2 * n + 1] - t[1];
        ma(this._ids, this._dists, 0, i - 1);
        const n = new Uint32Array(i);
        let e = 0;
        for (let t = 0, o = -1 / 0; t < i; t++) {
          const r = this._ids[t],
            i = this._dists[r];
          i > o && ((n[e++] = r), (o = i));
        }
        return (
          (this.hull = n.subarray(0, e)),
          (this.triangles = new Uint32Array(0)),
          void (this.halfedges = new Uint32Array(0))
        );
      }
      if (ca(y, b, m, d, C, J) < 0) {
        const t = S,
          n = m,
          e = d;
        (S = h), (m = C), (d = J), (h = t), (C = n), (J = e);
      }
      const p = (function (t, n, e, o, r, i) {
        Symbol('JSCA_5742_5756');
        const l = e - t,
          a = o - n,
          u = r - t,
          _ = i - n,
          c = l * l + a * a,
          f = u * u + _ * _,
          s = 0.5 / (l * _ - a * u),
          S = t + (_ * c - a * f) * s,
          h = n + (l * f - u * c) * s;
        return { x: S, y: h };
      })(y, b, m, d, C, J);
      (this._cx = p.x), (this._cy = p.y);
      for (let n = 0; n < i; n++)
        this._dists[n] = ha(t[2 * n], t[2 * n + 1], p.x, p.y);
      ma(this._ids, this._dists, 0, i - 1), (this._hullStart = s);
      let g = 3;
      (e[s] = n[h] = S),
        (e[S] = n[s] = h),
        (e[h] = n[S] = s),
        (o[s] = 0),
        (o[S] = 1),
        (o[h] = 2),
        r.fill(-1),
        (r[this._hashKey(y, b)] = s),
        (r[this._hashKey(m, d)] = S),
        (r[this._hashKey(C, J)] = h),
        (this.trianglesLen = 0),
        this._addTriangle(s, S, h, -1, -1, -1);
      for (let i, l, a = 0; a < this._ids.length; a++) {
        const u = this._ids[a],
          _ = t[2 * u],
          c = t[2 * u + 1];
        if (a > 0 && Math.abs(_ - i) <= fa && Math.abs(c - l) <= fa) continue;
        if (((i = _), (l = c), u === s || u === S || u === h)) continue;
        let f = 0;
        for (
          let t = 0, n = this._hashKey(_, c);
          t < this._hashSize &&
          ((f = r[(n + t) % this._hashSize]), -1 === f || f === e[f]);
          t++
        );
        f = n[f];
        let y,
          b = f;
        for (
          ;
          (y = e[b]),
            ca(_, c, t[2 * b], t[2 * b + 1], t[2 * y], t[2 * y + 1]) >= 0;

        )
          if (((b = y), b === f)) {
            b = -1;
            break;
          }
        if (-1 === b) continue;
        let m = this._addTriangle(b, u, e[b], -1, -1, o[b]);
        (o[u] = this._legalize(m + 2)), (o[b] = m), g++;
        let d = e[b];
        for (
          ;
          (y = e[d]),
            ca(_, c, t[2 * d], t[2 * d + 1], t[2 * y], t[2 * y + 1]) < 0;

        )
          (m = this._addTriangle(d, u, y, o[u], -1, o[d])),
            (o[u] = this._legalize(m + 2)),
            (e[d] = d),
            g--,
            (d = y);
        if (b === f)
          for (
            ;
            (y = n[b]),
              ca(_, c, t[2 * y], t[2 * y + 1], t[2 * b], t[2 * b + 1]) < 0;

          )
            (m = this._addTriangle(y, u, b, -1, o[b], o[y])),
              this._legalize(m + 2),
              (o[y] = m),
              (e[b] = b),
              g--,
              (b = y);
        (this._hullStart = n[u] = b),
          (e[b] = n[d] = u),
          (e[u] = d),
          (r[this._hashKey(_, c)] = u),
          (r[this._hashKey(t[2 * b], t[2 * b + 1])] = b);
      }
      this.hull = new Uint32Array(g);
      for (let t = 0, n = this._hullStart; t < g; t++)
        (this.hull[t] = n), (n = e[n]);
      (this.triangles = this._triangles.subarray(0, this.trianglesLen)),
        (this.halfedges = this._halfedges.subarray(0, this.trianglesLen));
    }
    _hashKey(t, n) {
      return (
        Symbol('JSCA_5641_5643'),
        Math.floor(
          (function (t, n) {
            Symbol('JSCA_5709_5712');
            const e = t / (Math.abs(t) + Math.abs(n));
            return (n > 0 ? 3 - e : 1 + e) / 4;
          })(t - this._cx, n - this._cy) * this._hashSize
        ) % this._hashSize
      );
    }
    _legalize(t) {
      Symbol('JSCA_5644_5692');
      const { _triangles: n, _halfedges: e, coords: o } = this;
      let r = 0,
        i = 0;
      for (;;) {
        const l = e[t],
          a = t - (t % 3);
        if (((i = a + ((t + 2) % 3)), -1 === l)) {
          if (0 === r) break;
          t = sa[--r];
          continue;
        }
        const u = l - (l % 3),
          _ = a + ((t + 1) % 3),
          c = u + ((l + 2) % 3),
          f = n[i],
          s = n[t],
          S = n[_],
          h = n[c];
        if (
          ya(
            o[2 * f],
            o[2 * f + 1],
            o[2 * s],
            o[2 * s + 1],
            o[2 * S],
            o[2 * S + 1],
            o[2 * h],
            o[2 * h + 1]
          )
        ) {
          (n[t] = h), (n[l] = f);
          const o = e[c];
          if (-1 === o) {
            let n = this._hullStart;
            do {
              if (this._hullTri[n] === c) {
                this._hullTri[n] = t;
                break;
              }
              n = this._hullPrev[n];
            } while (n !== this._hullStart);
          }
          this._link(t, o), this._link(l, e[i]), this._link(i, c);
          const a = u + ((l + 1) % 3);
          r < sa.length && (sa[r++] = a);
        } else {
          if (0 === r) break;
          t = sa[--r];
        }
      }
      return i;
    }
    _link(t, n) {
      Symbol('JSCA_5693_5696'),
        (this._halfedges[t] = n),
        -1 !== n && (this._halfedges[n] = t);
    }
    _addTriangle(t, n, e, o, r, i) {
      Symbol('JSCA_5697_5707');
      const l = this.trianglesLen;
      return (
        (this._triangles[l] = t),
        (this._triangles[l + 1] = n),
        (this._triangles[l + 2] = e),
        this._link(l, o),
        this._link(l + 1, r),
        this._link(l + 2, i),
        (this.trianglesLen += 3),
        l
      );
    }
  }
  function ha(t, n, e, o) {
    Symbol('JSCA_5713_5717');
    const r = t - e,
      i = n - o;
    return r * r + i * i;
  }
  function ya(t, n, e, o, r, i, l, a) {
    Symbol('JSCA_5718_5729');
    const u = t - l,
      _ = n - a,
      c = e - l,
      f = o - a,
      s = r - l,
      S = i - a,
      h = c * c + f * f,
      y = s * s + S * S;
    return (
      u * (f * y - h * S) -
        _ * (c * y - h * s) +
        (u * u + _ * _) * (c * S - f * s) <
      0
    );
  }
  function ba(t, n, e, o, r, i) {
    Symbol('JSCA_5730_5741');
    const l = e - t,
      a = o - n,
      u = r - t,
      _ = i - n,
      c = l * l + a * a,
      f = u * u + _ * _,
      s = 0.5 / (l * _ - a * u),
      S = (_ * c - a * f) * s,
      h = (l * f - u * c) * s;
    return S * S + h * h;
  }
  function ma(t, n, e, o) {
    if ((Symbol('JSCA_5757_5792'), o - e <= 20))
      for (let r = e + 1; r <= o; r++) {
        const o = t[r],
          i = n[o];
        let l = r - 1;
        for (; l >= e && n[t[l]] > i; ) t[l + 1] = t[l--];
        t[l + 1] = o;
      }
    else {
      let r = e + 1,
        i = o;
      da(t, (e + o) >> 1, r),
        n[t[e]] > n[t[o]] && da(t, e, o),
        n[t[r]] > n[t[o]] && da(t, r, o),
        n[t[e]] > n[t[r]] && da(t, e, r);
      const l = t[r],
        a = n[l];
      for (;;) {
        do {
          r++;
        } while (n[t[r]] < a);
        do {
          i--;
        } while (n[t[i]] > a);
        if (i < r) break;
        da(t, r, i);
      }
      (t[e + 1] = t[i]),
        (t[i] = l),
        o - r + 1 >= i - e
          ? (ma(t, n, r, o), ma(t, n, e, i - 1))
          : (ma(t, n, e, i - 1), ma(t, n, r, o));
    }
  }
  function da(t, n, e) {
    Symbol('JSCA_5793_5797');
    const o = t[n];
    (t[n] = t[e]), (t[e] = o);
  }
  function Aa(t) {
    return Symbol('JSCA_5798_5800'), t[0];
  }
  function Ca(t) {
    return Symbol('JSCA_5801_5803'), t[1];
  }
  const Ja = 1e-6;
  class pa {
    constructor() {
      Symbol('JSCA_5806_5809'),
        (this._x0 = this._y0 = this._x1 = this._y1 = null),
        (this._ = '');
    }
    moveTo(t, n) {
      Symbol('JSCA_5810_5812'),
        (this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
          +n)}`);
    }
    closePath() {
      Symbol('JSCA_5813_5818'),
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += 'Z'));
    }
    lineTo(t, n) {
      Symbol('JSCA_5819_5821'),
        (this._ += `L${(this._x1 = +t)},${(this._y1 = +n)}`);
    }
    arc(t, n, e) {
      Symbol('JSCA_5822_5830');
      const o = (t = +t) + (e = +e),
        r = (n = +n);
      if (e < 0) throw new Error('negative radius');
      null === this._x1
        ? (this._ += `M${o},${r}`)
        : (Math.abs(this._x1 - o) > Ja || Math.abs(this._y1 - r) > Ja) &&
          (this._ += 'L' + o + ',' + r),
        e &&
          (this._ += `A${e},${e},0,1,1,${
            t - e
          },${n}A${e},${e},0,1,1,${(this._x1 = o)},${(this._y1 = r)}`);
    }
    rect(t, n, e, o) {
      Symbol('JSCA_5831_5833'),
        (this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
          +n)}h${+e}v${+o}h${-e}Z`);
    }
    value() {
      return Symbol('JSCA_5834_5836'), this._ || null;
    }
  }
  class ga {
    constructor() {
      Symbol('JSCA_5839_5841'), (this._ = []);
    }
    moveTo(t, n) {
      Symbol('JSCA_5842_5844'), this._.push([t, n]);
    }
    closePath() {
      Symbol('JSCA_5845_5847'), this._.push(this._[0].slice());
    }
    lineTo(t, n) {
      Symbol('JSCA_5848_5850'), this._.push([t, n]);
    }
    value() {
      return Symbol('JSCA_5851_5853'), this._.length ? this._ : null;
    }
  }
  class va {
    constructor(t, [n, e, o, r] = [0, 0, 960, 500]) {
      if (
        (Symbol('JSCA_5856_5864'),
        !((o = +o) >= (n = +n) && (r = +r) >= (e = +e)))
      )
        throw new Error('invalid bounds');
      (this.delaunay = t),
        (this._circumcenters = new Float64Array(2 * t.points.length)),
        (this.vectors = new Float64Array(2 * t.points.length)),
        (this.xmax = o),
        (this.xmin = n),
        (this.ymax = r),
        (this.ymin = e),
        this._init();
    }
    update() {
      return (
        Symbol('JSCA_5865_5869'), this.delaunay.update(), this._init(), this
      );
    }
    _init() {
      Symbol('JSCA_5870_5920');
      const {
        delaunay: { points: t, hull: n, triangles: e },
        vectors: o,
      } = this;
      let r, i;
      const l = (this.circumcenters = this._circumcenters.subarray(
        0,
        (e.length / 3) * 2
      ));
      for (let o, a, u = 0, _ = 0, c = e.length; u < c; u += 3, _ += 2) {
        const c = 2 * e[u],
          f = 2 * e[u + 1],
          s = 2 * e[u + 2],
          S = t[c],
          h = t[c + 1],
          y = t[f],
          b = t[f + 1],
          m = t[s],
          d = t[s + 1],
          A = y - S,
          C = b - h,
          J = m - S,
          p = d - h,
          g = 2 * (A * p - C * J);
        if (Math.abs(g) < 1e-9) {
          if (void 0 === r) {
            r = i = 0;
            for (const e of n) (r += t[2 * e]), (i += t[2 * e + 1]);
            (r /= n.length), (i /= n.length);
          }
          const e = 1e9 * Math.sign((r - S) * p - (i - h) * J);
          (o = (S + m) / 2 - e * p), (a = (h + d) / 2 + e * J);
        } else {
          const t = 1 / g,
            n = A * A + C * C,
            e = J * J + p * p;
          (o = S + (p * n - C * e) * t), (a = h + (A * e - J * n) * t);
        }
        (l[_] = o), (l[_ + 1] = a);
      }
      let a,
        u,
        _,
        c = n[n.length - 1],
        f = 4 * c,
        s = t[2 * c],
        S = t[2 * c + 1];
      o.fill(0);
      for (let e = 0; e < n.length; ++e)
        (c = n[e]),
          (a = f),
          (u = s),
          (_ = S),
          (f = 4 * c),
          (s = t[2 * c]),
          (S = t[2 * c + 1]),
          (o[a + 2] = o[f] = _ - S),
          (o[a + 3] = o[f + 1] = s - u);
    }
    render(t) {
      Symbol('JSCA_5921_5947');
      const n = null == t ? (t = new pa()) : void 0,
        {
          delaunay: { halfedges: e, inedges: o, hull: r },
          circumcenters: i,
          vectors: l,
        } = this;
      if (r.length <= 1) return null;
      for (let n = 0, o = e.length; n < o; ++n) {
        const o = e[n];
        if (o < n) continue;
        const r = 2 * Math.floor(n / 3),
          l = 2 * Math.floor(o / 3),
          a = i[r],
          u = i[r + 1],
          _ = i[l],
          c = i[l + 1];
        this._renderSegment(a, u, _, c, t);
      }
      let a,
        u = r[r.length - 1];
      for (let n = 0; n < r.length; ++n) {
        (a = u), (u = r[n]);
        const e = 2 * Math.floor(o[u] / 3),
          _ = i[e],
          c = i[e + 1],
          f = 4 * a,
          s = this._project(_, c, l[f + 2], l[f + 3]);
        s && this._renderSegment(_, c, s[0], s[1], t);
      }
      return n && n.value();
    }
    renderBounds(t) {
      Symbol('JSCA_5948_5952');
      const n = null == t ? (t = new pa()) : void 0;
      return (
        t.rect(
          this.xmin,
          this.ymin,
          this.xmax - this.xmin,
          this.ymax - this.ymin
        ),
        n && n.value()
      );
    }
    renderCell(t, n) {
      Symbol('JSCA_5953_5965');
      const e = null == n ? (n = new pa()) : void 0,
        o = this._clip(t);
      if (null === o || !o.length) return;
      n.moveTo(o[0], o[1]);
      let r = o.length;
      for (; o[0] === o[r - 2] && o[1] === o[r - 1] && r > 1; ) r -= 2;
      for (let t = 2; t < r; t += 2)
        (o[t] === o[t - 2] && o[t + 1] === o[t - 1]) ||
          n.lineTo(o[t], o[t + 1]);
      return n.closePath(), e && e.value();
    }
    *cellPolygons() {
      Symbol('JSCA_5966_5972');
      const {
        delaunay: { points: t },
      } = this;
      for (let n = 0, e = t.length / 2; n < e; ++n) {
        const t = this.cellPolygon(n);
        t && ((t.index = n), yield t);
      }
    }
    cellPolygon(t) {
      Symbol('JSCA_5973_5977');
      const n = new ga();
      return this.renderCell(t, n), n.value();
    }
    _renderSegment(t, n, e, o, r) {
      let i;
      Symbol('JSCA_5978_5989');
      const l = this._regioncode(t, n),
        a = this._regioncode(e, o);
      0 === l && 0 === a
        ? (r.moveTo(t, n), r.lineTo(e, o))
        : (i = this._clipSegment(t, n, e, o, l, a)) &&
          (r.moveTo(i[0], i[1]), r.lineTo(i[2], i[3]));
    }
    contains(t, n, e) {
      return (
        Symbol('JSCA_5990_5993'),
        (n = +n) == n && (e = +e) == e && this.delaunay._step(t, n, e) === t
      );
    }
    *neighbors(t) {
      Symbol('JSCA_5994_6007');
      const n = this._clip(t);
      if (n)
        for (const e of this.delaunay.neighbors(t)) {
          const t = this._clip(e);
          if (t)
            t: for (let o = 0, r = n.length; o < r; o += 2)
              for (let i = 0, l = t.length; i < l; i += 2)
                if (
                  n[o] === t[i] &&
                  n[o + 1] === t[i + 1] &&
                  n[(o + 2) % r] === t[(i + l - 2) % l] &&
                  n[(o + 3) % r] === t[(i + l - 1) % l]
                ) {
                  yield e;
                  break t;
                }
        }
    }
    _cell(t) {
      Symbol('JSCA_6008_6022');
      const {
          circumcenters: n,
          delaunay: { inedges: e, halfedges: o, triangles: r },
        } = this,
        i = e[t];
      if (-1 === i) return null;
      const l = [];
      let a = i;
      do {
        const e = Math.floor(a / 3);
        if (
          (l.push(n[2 * e], n[2 * e + 1]),
          (a = a % 3 == 2 ? a - 2 : a + 1),
          r[a] !== t)
        )
          break;
        a = o[a];
      } while (a !== i && -1 !== a);
      return l;
    }
    _clip(t) {
      if (
        (Symbol('JSCA_6023_6032'), 0 === t && 1 === this.delaunay.hull.length)
      )
        return [
          this.xmax,
          this.ymin,
          this.xmax,
          this.ymax,
          this.xmin,
          this.ymax,
          this.xmin,
          this.ymin,
        ];
      const n = this._cell(t);
      if (null === n) return null;
      const { vectors: e } = this,
        o = 4 * t;
      return this._simplify(
        e[o] || e[o + 1]
          ? this._clipInfinite(t, n, e[o], e[o + 1], e[o + 2], e[o + 3])
          : this._clipFinite(t, n)
      );
    }
    _clipFinite(t, n) {
      Symbol('JSCA_6033_6069');
      const e = n.length;
      let o,
        r,
        i,
        l,
        a = null,
        u = n[e - 2],
        _ = n[e - 1],
        c = this._regioncode(u, _),
        f = 0;
      for (let s = 0; s < e; s += 2)
        if (
          ((o = u),
          (r = _),
          (u = n[s]),
          (_ = n[s + 1]),
          (i = c),
          (c = this._regioncode(u, _)),
          0 === i && 0 === c)
        )
          (l = f), (f = 0), a ? a.push(u, _) : (a = [u, _]);
        else {
          let n, e, s, S, h;
          if (0 === i) {
            if (null === (n = this._clipSegment(o, r, u, _, i, c))) continue;
            [e, s, S, h] = n;
          } else {
            if (null === (n = this._clipSegment(u, _, o, r, c, i))) continue;
            ([S, h, e, s] = n),
              (l = f),
              (f = this._edgecode(e, s)),
              l && f && this._edge(t, l, f, a, a.length),
              a ? a.push(e, s) : (a = [e, s]);
          }
          (l = f),
            (f = this._edgecode(S, h)),
            l && f && this._edge(t, l, f, a, a.length),
            a ? a.push(S, h) : (a = [S, h]);
        }
      if (a)
        (l = f),
          (f = this._edgecode(a[0], a[1])),
          l && f && this._edge(t, l, f, a, a.length);
      else if (
        this.contains(
          t,
          (this.xmin + this.xmax) / 2,
          (this.ymin + this.ymax) / 2
        )
      )
        return [
          this.xmax,
          this.ymin,
          this.xmax,
          this.ymax,
          this.xmin,
          this.ymax,
          this.xmin,
          this.ymin,
        ];
      return a;
    }
    _clipSegment(t, n, e, o, r, i) {
      Symbol('JSCA_6070_6080');
      const l = r < i;
      for (l && ([t, n, e, o, r, i] = [e, o, t, n, i, r]); ; ) {
        if (0 === r && 0 === i) return l ? [e, o, t, n] : [t, n, e, o];
        if (r & i) return null;
        let a,
          u,
          _ = r || i;
        8 & _
          ? ((a = t + ((e - t) * (this.ymax - n)) / (o - n)), (u = this.ymax))
          : 4 & _
          ? ((a = t + ((e - t) * (this.ymin - n)) / (o - n)), (u = this.ymin))
          : 2 & _
          ? ((u = n + ((o - n) * (this.xmax - t)) / (e - t)), (a = this.xmax))
          : ((u = n + ((o - n) * (this.xmin - t)) / (e - t)), (a = this.xmin)),
          r
            ? ((t = a), (n = u), (r = this._regioncode(t, n)))
            : ((e = a), (o = u), (i = this._regioncode(e, o)));
      }
    }
    _clipInfinite(t, n, e, o, r, i) {
      Symbol('JSCA_6081_6094');
      let l,
        a = Array.from(n);
      if (
        ((l = this._project(a[0], a[1], e, o)) && a.unshift(l[0], l[1]),
        (l = this._project(a[a.length - 2], a[a.length - 1], r, i)) &&
          a.push(l[0], l[1]),
        (a = this._clipFinite(t, a)))
      )
        for (
          let n, e = 0, o = a.length, r = this._edgecode(a[o - 2], a[o - 1]);
          e < o;
          e += 2
        )
          (n = r),
            (r = this._edgecode(a[e], a[e + 1])),
            n && r && ((e = this._edge(t, n, r, a, e)), (o = a.length));
      else
        this.contains(
          t,
          (this.xmin + this.xmax) / 2,
          (this.ymin + this.ymax) / 2
        ) &&
          (a = [
            this.xmin,
            this.ymin,
            this.xmax,
            this.ymin,
            this.xmax,
            this.ymax,
            this.xmin,
            this.ymax,
          ]);
      return a;
    }
    _edge(t, n, e, o, r) {
      for (Symbol('JSCA_6095_6129'); n !== e; ) {
        let e, i;
        switch (n) {
          case 5:
            n = 4;
            continue;
          case 4:
            (n = 6), (e = this.xmax), (i = this.ymin);
            break;
          case 6:
            n = 2;
            continue;
          case 2:
            (n = 10), (e = this.xmax), (i = this.ymax);
            break;
          case 10:
            n = 8;
            continue;
          case 8:
            (n = 9), (e = this.xmin), (i = this.ymax);
            break;
          case 9:
            n = 1;
            continue;
          case 1:
            (n = 5), (e = this.xmin), (i = this.ymin);
        }
        (o[r] === e && o[r + 1] === i) ||
          !this.contains(t, e, i) ||
          (o.splice(r, 0, e, i), (r += 2));
      }
      return r;
    }
    _project(t, n, e, o) {
      Symbol('JSCA_6130_6147');
      let r,
        i,
        l,
        a = 1 / 0;
      if (o < 0) {
        if (n <= this.ymin) return null;
        (r = (this.ymin - n) / o) < a &&
          ((l = this.ymin), (i = t + (a = r) * e));
      } else if (o > 0) {
        if (n >= this.ymax) return null;
        (r = (this.ymax - n) / o) < a &&
          ((l = this.ymax), (i = t + (a = r) * e));
      }
      if (e > 0) {
        if (t >= this.xmax) return null;
        (r = (this.xmax - t) / e) < a &&
          ((i = this.xmax), (l = n + (a = r) * o));
      } else if (e < 0) {
        if (t <= this.xmin) return null;
        (r = (this.xmin - t) / e) < a &&
          ((i = this.xmin), (l = n + (a = r) * o));
      }
      return [i, l];
    }
    _edgecode(t, n) {
      return (
        Symbol('JSCA_6148_6150'),
        (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) |
          (n === this.ymin ? 4 : n === this.ymax ? 8 : 0)
      );
    }
    _regioncode(t, n) {
      return (
        Symbol('JSCA_6151_6153'),
        (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) |
          (n < this.ymin ? 4 : n > this.ymax ? 8 : 0)
      );
    }
    _simplify(t) {
      if ((Symbol('JSCA_6154_6165'), t && t.length > 4)) {
        for (let n = 0; n < t.length; n += 2) {
          const e = (n + 2) % t.length,
            o = (n + 4) % t.length;
          ((t[n] === t[e] && t[e] === t[o]) ||
            (t[n + 1] === t[e + 1] && t[e + 1] === t[o + 1])) &&
            (t.splice(e, 2), (n -= 2));
        }
        t.length || (t = null);
      }
      return t;
    }
  }
  const xa = 2 * Math.PI,
    wa = Math.pow;
  function Ma(t) {
    return Symbol('JSCA_6168_6170'), t[0];
  }
  function Ta(t) {
    return Symbol('JSCA_6171_6173'), t[1];
  }
  function Ea(t, n, e) {
    return (
      Symbol('JSCA_6182_6184'),
      [t + Math.sin(t + n) * e, n + Math.cos(t - n) * e]
    );
  }
  class Na {
    static from(t, n = Ma, e = Ta, o) {
      return (
        Symbol('JSCA_6186_6188'),
        new Na(
          'length' in t
            ? (function (t, n, e, o) {
                Symbol('JSCA_6365_6374');
                const r = t.length,
                  i = new Float64Array(2 * r);
                for (let l = 0; l < r; ++l) {
                  const r = t[l];
                  (i[2 * l] = n.call(o, r, l, t)),
                    (i[2 * l + 1] = e.call(o, r, l, t));
                }
                return i;
              })(t, n, e, o)
            : Float64Array.from(
                (function* (t, n, e, o) {
                  Symbol('JSCA_6375_6382');
                  let r = 0;
                  for (const i of t)
                    yield n.call(o, i, r, t), yield e.call(o, i, r, t), ++r;
                })(t, n, e, o)
              )
        )
      );
    }
    constructor(t) {
      Symbol('JSCA_6189_6195'),
        (this._delaunator = new Sa(t)),
        (this.inedges = new Int32Array(t.length / 2)),
        (this._hullIndex = new Int32Array(t.length / 2)),
        (this.points = this._delaunator.coords),
        this._init();
    }
    update() {
      return (
        Symbol('JSCA_6196_6200'), this._delaunator.update(), this._init(), this
      );
    }
    _init() {
      Symbol('JSCA_6201_6240');
      const t = this._delaunator,
        n = this.points;
      if (
        t.hull &&
        t.hull.length > 2 &&
        (function (t) {
          Symbol('JSCA_6174_6181');
          const { triangles: n, coords: e } = t;
          for (let t = 0; t < n.length; t += 3) {
            const o = 2 * n[t],
              r = 2 * n[t + 1],
              i = 2 * n[t + 2];
            if (
              (e[i] - e[o]) * (e[r + 1] - e[o + 1]) -
                (e[r] - e[o]) * (e[i + 1] - e[o + 1]) >
              1e-10
            )
              return !1;
          }
          return !0;
        })(t)
      ) {
        this.collinear = Int32Array.from(
          { length: n.length / 2 },
          (t, n) => n
        ).sort((t, e) => n[2 * t] - n[2 * e] || n[2 * t + 1] - n[2 * e + 1]);
        const t = this.collinear[0],
          e = this.collinear[this.collinear.length - 1],
          o = [n[2 * t], n[2 * t + 1], n[2 * e], n[2 * e + 1]],
          r = 1e-8 * Math.hypot(o[3] - o[1], o[2] - o[0]);
        for (let t = 0, e = n.length / 2; t < e; ++t) {
          const e = Ea(n[2 * t], n[2 * t + 1], r);
          (n[2 * t] = e[0]), (n[2 * t + 1] = e[1]);
        }
        this._delaunator = new Sa(n);
      } else delete this.collinear;
      const e = (this.halfedges = this._delaunator.halfedges),
        o = (this.hull = this._delaunator.hull),
        r = (this.triangles = this._delaunator.triangles),
        i = this.inedges.fill(-1),
        l = this._hullIndex.fill(-1);
      for (let t = 0, n = e.length; t < n; ++t) {
        const n = r[t % 3 == 2 ? t - 2 : t + 1];
        (-1 !== e[t] && -1 !== i[n]) || (i[n] = t);
      }
      for (let t = 0, n = o.length; t < n; ++t) l[o[t]] = t;
      o.length <= 2 &&
        o.length > 0 &&
        ((this.triangles = new Int32Array(3).fill(-1)),
        (this.halfedges = new Int32Array(3).fill(-1)),
        (this.triangles[0] = o[0]),
        (i[o[0]] = 1),
        2 === o.length &&
          ((i[o[1]] = 0),
          (this.triangles[1] = o[1]),
          (this.triangles[2] = o[1])));
    }
    voronoi(t) {
      return Symbol('JSCA_6241_6243'), new va(this, t);
    }
    *neighbors(t) {
      Symbol('JSCA_6244_6266');
      const {
        inedges: n,
        hull: e,
        _hullIndex: o,
        halfedges: r,
        triangles: i,
        collinear: l,
      } = this;
      if (l) {
        const n = l.indexOf(t);
        return (
          n > 0 && (yield l[n - 1]), void (n < l.length - 1 && (yield l[n + 1]))
        );
      }
      const a = n[t];
      if (-1 === a) return;
      let u = a,
        _ = -1;
      do {
        if ((yield (_ = i[u]), (u = u % 3 == 2 ? u - 2 : u + 1), i[u] !== t))
          return;
        if (((u = r[u]), -1 === u)) {
          const n = e[(o[t] + 1) % e.length];
          return void (n !== _ && (yield n));
        }
      } while (u !== a);
    }
    find(t, n, e = 0) {
      if ((Symbol('JSCA_6267_6273'), (t = +t) != t || (n = +n) != n)) return -1;
      const o = e;
      let r;
      for (; (r = this._step(e, t, n)) >= 0 && r !== e && r !== o; ) e = r;
      return r;
    }
    _step(t, n, e) {
      Symbol('JSCA_6274_6297');
      const {
        inedges: o,
        hull: r,
        _hullIndex: i,
        halfedges: l,
        triangles: a,
        points: u,
      } = this;
      if (-1 === o[t] || !u.length) return (t + 1) % (u.length >> 1);
      let _ = t,
        c = wa(n - u[2 * t], 2) + wa(e - u[2 * t + 1], 2);
      const f = o[t];
      let s = f;
      do {
        let o = a[s];
        const f = wa(n - u[2 * o], 2) + wa(e - u[2 * o + 1], 2);
        if (
          (f < c && ((c = f), (_ = o)),
          (s = s % 3 == 2 ? s - 2 : s + 1),
          a[s] !== t)
        )
          break;
        if (((s = l[s]), -1 === s)) {
          if (
            ((s = r[(i[t] + 1) % r.length]),
            s !== o && wa(n - u[2 * s], 2) + wa(e - u[2 * s + 1], 2) < c)
          )
            return s;
          break;
        }
      } while (s !== f);
      return _;
    }
    render(t) {
      Symbol('JSCA_6298_6311');
      const n = null == t ? (t = new pa()) : void 0,
        { points: e, halfedges: o, triangles: r } = this;
      for (let n = 0, i = o.length; n < i; ++n) {
        const i = o[n];
        if (i < n) continue;
        const l = 2 * r[n],
          a = 2 * r[i];
        t.moveTo(e[l], e[l + 1]), t.lineTo(e[a], e[a + 1]);
      }
      return this.renderHull(t), n && n.value();
    }
    renderPoints(t, n) {
      Symbol('JSCA_6312_6323'),
        void 0 !== n ||
          (t && 'function' == typeof t.moveTo) ||
          ((n = t), (t = null)),
        (n = null == n ? 2 : +n);
      const e = null == t ? (t = new pa()) : void 0,
        { points: o } = this;
      for (let e = 0, r = o.length; e < r; e += 2) {
        const r = o[e],
          i = o[e + 1];
        t.moveTo(r + n, i), t.arc(r, i, n, 0, xa);
      }
      return e && e.value();
    }
    renderHull(t) {
      Symbol('JSCA_6324_6335');
      const n = null == t ? (t = new pa()) : void 0,
        { hull: e, points: o } = this,
        r = 2 * e[0],
        i = e.length;
      t.moveTo(o[r], o[r + 1]);
      for (let n = 1; n < i; ++n) {
        const r = 2 * e[n];
        t.lineTo(o[r], o[r + 1]);
      }
      return t.closePath(), n && n.value();
    }
    hullPolygon() {
      Symbol('JSCA_6336_6340');
      const t = new ga();
      return this.renderHull(t), t.value();
    }
    renderTriangle(t, n) {
      Symbol('JSCA_6341_6352');
      const e = null == n ? (n = new pa()) : void 0,
        { points: o, triangles: r } = this,
        i = 2 * r[(t *= 3)],
        l = 2 * r[t + 1],
        a = 2 * r[t + 2];
      return (
        n.moveTo(o[i], o[i + 1]),
        n.lineTo(o[l], o[l + 1]),
        n.lineTo(o[a], o[a + 1]),
        n.closePath(),
        e && e.value()
      );
    }
    *trianglePolygons() {
      Symbol('JSCA_6353_6358');
      const { triangles: t } = this;
      for (let n = 0, e = t.length / 3; n < e; ++n)
        yield this.trianglePolygon(n);
    }
    trianglePolygon(t) {
      Symbol('JSCA_6359_6363');
      const n = new ga();
      return this.renderTriangle(t, n), n.value();
    }
  }
  var ka = {},
    Pa = {};
  function za(t) {
    return (
      Symbol('JSCA_6384_6388'),
      new Function(
        'd',
        'return {' +
          t
            .map(function (t, n) {
              return (
                Symbol('JSCA_6385_6387'),
                JSON.stringify(t) + ': d[' + n + '] || ""'
              );
            })
            .join(',') +
          '}'
      )
    );
  }
  function $a(t) {
    Symbol('JSCA_6395_6405');
    var n = Object.create(null),
      e = [];
    return (
      t.forEach(function (t) {
        for (var o in (Symbol('JSCA_6397_6403'), t))
          o in n || e.push((n[o] = o));
      }),
      e
    );
  }
  function Da(t, n) {
    Symbol('JSCA_6406_6409');
    var e = t + '',
      o = e.length;
    return o < n ? new Array(n - o + 1).join(0) + e : e;
  }
  function Ra(t) {
    Symbol('JSCA_6413_6416');
    var n,
      e = t.getUTCHours(),
      o = t.getUTCMinutes(),
      r = t.getUTCSeconds(),
      i = t.getUTCMilliseconds();
    return isNaN(t)
      ? 'Invalid Date'
      : ((n = t.getUTCFullYear()),
        Symbol('JSCA_6410_6412'),
        (n < 0 ? '-' + Da(-n, 6) : n > 9999 ? '+' + Da(n, 6) : Da(n, 4)) +
          '-' +
          Da(t.getUTCMonth() + 1, 2) +
          '-' +
          Da(t.getUTCDate(), 2) +
          (i
            ? 'T' +
              Da(e, 2) +
              ':' +
              Da(o, 2) +
              ':' +
              Da(r, 2) +
              '.' +
              Da(i, 3) +
              'Z'
            : r
            ? 'T' + Da(e, 2) + ':' + Da(o, 2) + ':' + Da(r, 2) + 'Z'
            : o || e
            ? 'T' + Da(e, 2) + ':' + Da(o, 2) + 'Z'
            : ''));
  }
  function Fa(t) {
    Symbol('JSCA_6417_6493');
    var n = new RegExp('["' + t + '\n\r]'),
      e = t.charCodeAt(0);
    function o(t, n) {
      Symbol('JSCA_6427_6459');
      var o,
        r = [],
        i = t.length,
        l = 0,
        a = 0,
        u = i <= 0,
        _ = !1;
      function c() {
        if ((Symbol('JSCA_6431_6451'), u)) return Pa;
        if (_) return (_ = !1), ka;
        var n,
          o,
          r = l;
        if (34 === t.charCodeAt(r)) {
          for (
            ;
            (l++ < i && 34 !== t.charCodeAt(l)) || 34 === t.charCodeAt(++l);

          );
          return (
            (n = l) >= i
              ? (u = !0)
              : 10 === (o = t.charCodeAt(l++))
              ? (_ = !0)
              : 13 === o && ((_ = !0), 10 === t.charCodeAt(l) && ++l),
            t.slice(r + 1, n - 1).replace(/""/g, '"')
          );
        }
        for (; l < i; ) {
          if (10 === (o = t.charCodeAt((n = l++)))) _ = !0;
          else if (13 === o) (_ = !0), 10 === t.charCodeAt(l) && ++l;
          else if (o !== e) continue;
          return t.slice(r, n);
        }
        return (u = !0), t.slice(r, i);
      }
      for (
        10 === t.charCodeAt(i - 1) && --i, 13 === t.charCodeAt(i - 1) && --i;
        (o = c()) !== Pa;

      ) {
        for (var f = []; o !== ka && o !== Pa; ) f.push(o), (o = c());
        (n && null == (f = n(f, a++))) || r.push(f);
      }
      return r;
    }
    function r(n, e) {
      return (
        Symbol('JSCA_6460_6466'),
        n.map(function (n) {
          return (
            Symbol('JSCA_6461_6465'),
            e
              .map(function (t) {
                return Symbol('JSCA_6462_6464'), l(n[t]);
              })
              .join(t)
          );
        })
      );
    }
    function i(n) {
      return Symbol('JSCA_6478_6480'), n.map(l).join(t);
    }
    function l(t) {
      return (
        Symbol('JSCA_6481_6483'),
        null == t
          ? ''
          : t instanceof Date
          ? Ra(t)
          : n.test((t += ''))
          ? '"' + t.replace(/"/g, '""') + '"'
          : t
      );
    }
    return {
      parse: function (t, n) {
        Symbol('JSCA_6419_6426');
        var e,
          r,
          i = o(t, function (t, o) {
            if ((Symbol('JSCA_6420_6423'), e)) return e(t, o - 1);
            (r = t),
              (e = n
                ? (function (t, n) {
                    Symbol('JSCA_6389_6394');
                    var e = za(t);
                    return function (o, r) {
                      return Symbol('JSCA_6391_6393'), n(e(o), r, t);
                    };
                  })(t, n)
                : za(t));
          });
        return (i.columns = r || []), i;
      },
      parseRows: o,
      format: function (n, e) {
        return (
          Symbol('JSCA_6467_6470'),
          null == e && (e = $a(n)),
          [e.map(l).join(t)].concat(r(n, e)).join('\n')
        );
      },
      formatBody: function (t, n) {
        return (
          Symbol('JSCA_6471_6474'), null == n && (n = $a(t)), r(t, n).join('\n')
        );
      },
      formatRows: function (t) {
        return Symbol('JSCA_6475_6477'), t.map(i).join('\n');
      },
      formatRow: i,
      formatValue: l,
    };
  }
  var qa = Fa(','),
    Ua = qa.parse,
    Ia = qa.parseRows,
    Oa = qa.format,
    Ba = qa.formatBody,
    Ya = qa.formatRows,
    La = qa.formatRow,
    ja = qa.formatValue,
    Ha = Fa('\t'),
    Xa = Ha.parse,
    Ga = Ha.parseRows,
    Va = Ha.format,
    Wa = Ha.formatBody,
    Za = Ha.formatRows,
    Ka = Ha.formatRow,
    Qa = Ha.formatValue;
  const tu =
    new Date('2019-01-01T00:00').getHours() ||
    new Date('2019-07-01T00:00').getHours();
  function nu(t) {
    if ((Symbol('JSCA_6522_6525'), !t.ok))
      throw new Error(t.status + ' ' + t.statusText);
    return t.blob();
  }
  function eu(t) {
    if ((Symbol('JSCA_6529_6532'), !t.ok))
      throw new Error(t.status + ' ' + t.statusText);
    return t.arrayBuffer();
  }
  function ou(t) {
    if ((Symbol('JSCA_6536_6539'), !t.ok))
      throw new Error(t.status + ' ' + t.statusText);
    return t.text();
  }
  function ru(t, n) {
    return Symbol('JSCA_6540_6542'), fetch(t, n).then(ou);
  }
  function iu(t) {
    return (
      Symbol('JSCA_6543_6550'),
      function (n, e, o) {
        return (
          Symbol('JSCA_6544_6549'),
          2 === arguments.length &&
            'function' == typeof e &&
            ((o = e), (e = void 0)),
          ru(n, e).then(function (n) {
            return Symbol('JSCA_6546_6548'), t(n, o);
          })
        );
      }
    );
  }
  var lu = iu(Ua),
    au = iu(Xa);
  function uu(t) {
    if ((Symbol('JSCA_6571_6575'), !t.ok))
      throw new Error(t.status + ' ' + t.statusText);
    if (204 !== t.status && 205 !== t.status) return t.json();
  }
  function _u(t) {
    return (
      Symbol('JSCA_6579_6581'),
      (n, e) => ru(n, e).then((n) => new DOMParser().parseFromString(n, t))
    );
  }
  var cu = _u('application/xml'),
    fu = _u('text/html'),
    su = _u('image/svg+xml');
  function Su(t, n, e, o) {
    if ((Symbol('JSCA_6616_6636'), isNaN(n) || isNaN(e))) return t;
    var r,
      i,
      l,
      a,
      u,
      _,
      c,
      f,
      s,
      S = t._root,
      h = { data: o },
      y = t._x0,
      b = t._y0,
      m = t._x1,
      d = t._y1;
    if (!S) return (t._root = h), t;
    for (; S.length; )
      if (
        ((_ = n >= (i = (y + m) / 2)) ? (y = i) : (m = i),
        (c = e >= (l = (b + d) / 2)) ? (b = l) : (d = l),
        (r = S),
        !(S = S[(f = (c << 1) | _)]))
      )
        return (r[f] = h), t;
    if (
      ((a = +t._x.call(null, S.data)),
      (u = +t._y.call(null, S.data)),
      n === a && e === u)
    )
      return (h.next = S), r ? (r[f] = h) : (t._root = h), t;
    do {
      (r = r ? (r[f] = new Array(4)) : (t._root = new Array(4))),
        (_ = n >= (i = (y + m) / 2)) ? (y = i) : (m = i),
        (c = e >= (l = (b + d) / 2)) ? (b = l) : (d = l);
    } while ((f = (c << 1) | _) == (s = ((u >= l) << 1) | (a >= i)));
    return (r[s] = S), (r[f] = h), t;
  }
  function hu(t, n, e, o, r) {
    Symbol('JSCA_6699_6705'),
      (this.node = t),
      (this.x0 = n),
      (this.y0 = e),
      (this.x1 = o),
      (this.y1 = r);
  }
  function yu(t) {
    return Symbol('JSCA_6804_6806'), t[0];
  }
  function bu(t) {
    return Symbol('JSCA_6810_6812'), t[1];
  }
  function mu(t, n, e) {
    Symbol('JSCA_6816_6819');
    var o = new du(null == n ? yu : n, null == e ? bu : e, NaN, NaN, NaN, NaN);
    return null == t ? o : o.addAll(t);
  }
  function du(t, n, e, o, r, i) {
    Symbol('JSCA_6820_6828'),
      (this._x = t),
      (this._y = n),
      (this._x0 = e),
      (this._y0 = o),
      (this._x1 = r),
      (this._y1 = i),
      (this._root = void 0);
  }
  function Au(t) {
    Symbol('JSCA_6829_6837');
    for (var n = { data: t.data }, e = n; (t = t.next); )
      e = e.next = { data: t.data };
    return n;
  }
  var Cu = (mu.prototype = du.prototype);
  function Ju(t) {
    return (
      Symbol('JSCA_6873_6877'),
      function () {
        return Symbol('JSCA_6874_6876'), t;
      }
    );
  }
  function pu(t) {
    return Symbol('JSCA_6878_6880'), 1e-6 * (t() - 0.5);
  }
  function gu(t) {
    return Symbol('JSCA_6881_6883'), t.x + t.vx;
  }
  function vu(t) {
    return Symbol('JSCA_6884_6886'), t.y + t.vy;
  }
  function xu(t) {
    return Symbol('JSCA_6952_6954'), t.index;
  }
  function wu(t, n) {
    Symbol('JSCA_6955_6959');
    var e = t.get(n);
    if (!e) throw new Error('node not found: ' + n);
    return e;
  }
  (Cu.copy = function () {
    Symbol('JSCA_6839_6858');
    var t,
      n,
      e = new du(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      o = this._root;
    if (!o) return e;
    if (!o.length) return (e._root = Au(o)), e;
    for (t = [{ source: o, target: (e._root = new Array(4)) }]; (o = t.pop()); )
      for (var r = 0; r < 4; ++r)
        (n = o.source[r]) &&
          (n.length
            ? t.push({ source: n, target: (o.target[r] = new Array(4)) })
            : (o.target[r] = Au(n)));
    return e;
  }),
    (Cu.add = function (t) {
      Symbol('JSCA_6612_6615');
      const n = +this._x.call(null, t),
        e = +this._y.call(null, t);
      return Su(this.cover(n, e), n, e, t);
    }),
    (Cu.addAll = function (t) {
      Symbol('JSCA_6637_6654');
      var n,
        e,
        o,
        r,
        i = t.length,
        l = new Array(i),
        a = new Array(i),
        u = 1 / 0,
        _ = 1 / 0,
        c = -1 / 0,
        f = -1 / 0;
      for (e = 0; e < i; ++e)
        isNaN((o = +this._x.call(null, (n = t[e])))) ||
          isNaN((r = +this._y.call(null, n))) ||
          ((l[e] = o),
          (a[e] = r),
          o < u && (u = o),
          o > c && (c = o),
          r < _ && (_ = r),
          r > f && (f = r));
      if (u > c || _ > f) return this;
      for (this.cover(u, _).cover(c, f), e = 0; e < i; ++e)
        Su(this, l[e], a[e], t[e]);
      return this;
    }),
    (Cu.cover = function (t, n) {
      if ((Symbol('JSCA_6655_6688'), isNaN((t = +t)) || isNaN((n = +n))))
        return this;
      var e = this._x0,
        o = this._y0,
        r = this._x1,
        i = this._y1;
      if (isNaN(e))
        (r = (e = Math.floor(t)) + 1), (i = (o = Math.floor(n)) + 1);
      else {
        for (
          var l, a, u = r - e || 1, _ = this._root;
          e > t || t >= r || o > n || n >= i;

        )
          switch (
            ((a = ((n < o) << 1) | (t < e)),
            ((l = new Array(4))[a] = _),
            (_ = l),
            (u *= 2),
            a)
          ) {
            case 0:
              (r = e + u), (i = o + u);
              break;
            case 1:
              (e = r - u), (i = o + u);
              break;
            case 2:
              (r = e + u), (o = i - u);
              break;
            case 3:
              (e = r - u), (o = i - u);
          }
        this._root && this._root.length && (this._root = _);
      }
      return (
        (this._x0 = e), (this._y0 = o), (this._x1 = r), (this._y1 = i), this
      );
    }),
    (Cu.data = function () {
      Symbol('JSCA_6689_6695');
      var t = [];
      return (
        this.visit(function (n) {
          if ((Symbol('JSCA_6691_6693'), !n.length))
            do {
              t.push(n.data);
            } while ((n = n.next));
        }),
        t
      );
    }),
    (Cu.extent = function (t) {
      return (
        Symbol('JSCA_6696_6698'),
        arguments.length
          ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
          : isNaN(this._x0)
          ? void 0
          : [
              [this._x0, this._y0],
              [this._x1, this._y1],
            ]
      );
    }),
    (Cu.find = function (t, n, e) {
      Symbol('JSCA_6706_6735');
      var o,
        r,
        i,
        l,
        a,
        u,
        _,
        c = this._x0,
        f = this._y0,
        s = this._x1,
        S = this._y1,
        h = [],
        y = this._root;
      for (
        y && h.push(new hu(y, c, f, s, S)),
          null == e
            ? (e = 1 / 0)
            : ((c = t - e), (f = n - e), (s = t + e), (S = n + e), (e *= e));
        (u = h.pop());

      )
        if (
          !(
            !(y = u.node) ||
            (r = u.x0) > s ||
            (i = u.y0) > S ||
            (l = u.x1) < c ||
            (a = u.y1) < f
          )
        )
          if (y.length) {
            var b = (r + l) / 2,
              m = (i + a) / 2;
            h.push(
              new hu(y[3], b, m, l, a),
              new hu(y[2], r, m, b, a),
              new hu(y[1], b, i, l, m),
              new hu(y[0], r, i, b, m)
            ),
              (_ = ((n >= m) << 1) | (t >= b)) &&
                ((u = h[h.length - 1]),
                (h[h.length - 1] = h[h.length - 1 - _]),
                (h[h.length - 1 - _] = u));
          } else {
            var d = t - +this._x.call(null, y.data),
              A = n - +this._y.call(null, y.data),
              C = d * d + A * A;
            if (C < e) {
              var J = Math.sqrt((e = C));
              (c = t - J), (f = n - J), (s = t + J), (S = n + J), (o = y.data);
            }
          }
      return o;
    }),
    (Cu.remove = function (t) {
      if (
        (Symbol('JSCA_6736_6756'),
        isNaN((i = +this._x.call(null, t))) ||
          isNaN((l = +this._y.call(null, t))))
      )
        return this;
      var n,
        e,
        o,
        r,
        i,
        l,
        a,
        u,
        _,
        c,
        f,
        s,
        S = this._root,
        h = this._x0,
        y = this._y0,
        b = this._x1,
        m = this._y1;
      if (!S) return this;
      if (S.length)
        for (;;) {
          if (
            ((_ = i >= (a = (h + b) / 2)) ? (h = a) : (b = a),
            (c = l >= (u = (y + m) / 2)) ? (y = u) : (m = u),
            (n = S),
            !(S = S[(f = (c << 1) | _)]))
          )
            return this;
          if (!S.length) break;
          (n[(f + 1) & 3] || n[(f + 2) & 3] || n[(f + 3) & 3]) &&
            ((e = n), (s = f));
        }
      for (; S.data !== t; ) if (((o = S), !(S = S.next))) return this;
      return (
        (r = S.next) && delete S.next,
        o
          ? (r ? (o.next = r) : delete o.next, this)
          : n
          ? (r ? (n[f] = r) : delete n[f],
            (S = n[0] || n[1] || n[2] || n[3]) &&
              S === (n[3] || n[2] || n[1] || n[0]) &&
              !S.length &&
              (e ? (e[s] = S) : (this._root = S)),
            this)
          : ((this._root = r), this)
      );
    }),
    (Cu.removeAll = function (t) {
      Symbol('JSCA_6757_6760');
      for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
      return this;
    }),
    (Cu.root = function () {
      return Symbol('JSCA_6761_6763'), this._root;
    }),
    (Cu.size = function () {
      Symbol('JSCA_6764_6770');
      var t = 0;
      return (
        this.visit(function (n) {
          if ((Symbol('JSCA_6766_6768'), !n.length))
            do {
              ++t;
            } while ((n = n.next));
        }),
        t
      );
    }),
    (Cu.visit = function (t) {
      Symbol('JSCA_6771_6784');
      var n,
        e,
        o,
        r,
        i,
        l,
        a = [],
        u = this._root;
      for (
        u && a.push(new hu(u, this._x0, this._y0, this._x1, this._y1));
        (n = a.pop());

      )
        if (
          !t((u = n.node), (o = n.x0), (r = n.y0), (i = n.x1), (l = n.y1)) &&
          u.length
        ) {
          var _ = (o + i) / 2,
            c = (r + l) / 2;
          (e = u[3]) && a.push(new hu(e, _, c, i, l)),
            (e = u[2]) && a.push(new hu(e, o, c, _, l)),
            (e = u[1]) && a.push(new hu(e, _, r, i, c)),
            (e = u[0]) && a.push(new hu(e, o, r, _, c));
        }
      return this;
    }),
    (Cu.visitAfter = function (t) {
      Symbol('JSCA_6785_6803');
      var n,
        e = [],
        o = [];
      for (
        this._root &&
        e.push(new hu(this._root, this._x0, this._y0, this._x1, this._y1));
        (n = e.pop());

      ) {
        var r = n.node;
        if (r.length) {
          var i,
            l = n.x0,
            a = n.y0,
            u = n.x1,
            _ = n.y1,
            c = (l + u) / 2,
            f = (a + _) / 2;
          (i = r[0]) && e.push(new hu(i, l, a, c, f)),
            (i = r[1]) && e.push(new hu(i, c, a, u, f)),
            (i = r[2]) && e.push(new hu(i, l, f, c, _)),
            (i = r[3]) && e.push(new hu(i, c, f, u, _));
        }
        o.push(n);
      }
      for (; (n = o.pop()); ) t(n.node, n.x0, n.y0, n.x1, n.y1);
      return this;
    }),
    (Cu.x = function (t) {
      return (
        Symbol('JSCA_6807_6809'),
        arguments.length ? ((this._x = t), this) : this._x
      );
    }),
    (Cu.y = function (t) {
      return (
        Symbol('JSCA_6813_6815'),
        arguments.length ? ((this._y = t), this) : this._y
      );
    });
  const Mu = 4294967296;
  function Tu(t) {
    return Symbol('JSCA_7039_7041'), t.x;
  }
  function Eu(t) {
    return Symbol('JSCA_7042_7044'), t.y;
  }
  var Nu = Math.PI * (3 - Math.sqrt(5));
  function ku(t, n) {
    if (
      (Symbol('JSCA_7315_7319'),
      (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf('e')) <
        0)
    )
      return null;
    var e,
      o = t.slice(0, e);
    return [o.length > 1 ? o[0] + o.slice(2) : o, +t.slice(e + 1)];
  }
  function Pu(t) {
    return Symbol('JSCA_7320_7322'), (t = ku(Math.abs(t))) ? t[1] : NaN;
  }
  var zu,
    $u =
      /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function Du(t) {
    if ((Symbol('JSCA_7343_7358'), !(n = $u.exec(t))))
      throw new Error('invalid format: ' + t);
    var n;
    return new Ru({
      fill: n[1],
      align: n[2],
      sign: n[3],
      symbol: n[4],
      zero: n[5],
      width: n[6],
      comma: n[7],
      precision: n[8] && n[8].slice(1),
      trim: n[9],
      type: n[10],
    });
  }
  function Ru(t) {
    Symbol('JSCA_7360_7371'),
      (this.fill = void 0 === t.fill ? ' ' : t.fill + ''),
      (this.align = void 0 === t.align ? '>' : t.align + ''),
      (this.sign = void 0 === t.sign ? '-' : t.sign + ''),
      (this.symbol = void 0 === t.symbol ? '' : t.symbol + ''),
      (this.zero = !!t.zero),
      (this.width = void 0 === t.width ? void 0 : +t.width),
      (this.comma = !!t.comma),
      (this.precision = void 0 === t.precision ? void 0 : +t.precision),
      (this.trim = !!t.trim),
      (this.type = void 0 === t.type ? '' : t.type + '');
  }
  function Fu(t, n) {
    Symbol('JSCA_7400_7405');
    var e = ku(t, n);
    if (!e) return t + '';
    var o = e[0],
      r = e[1];
    return r < 0
      ? '0.' + new Array(-r).join('0') + o
      : o.length > r + 1
      ? o.slice(0, r + 1) + '.' + o.slice(r + 1)
      : o + new Array(r - o.length + 2).join('0');
  }
  (Du.prototype = Ru.prototype),
    (Ru.prototype.toString = function () {
      return (
        Symbol('JSCA_7372_7374'),
        this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? '0' : '') +
          (void 0 === this.width ? '' : Math.max(1, 0 | this.width)) +
          (this.comma ? ',' : '') +
          (void 0 === this.precision
            ? ''
            : '.' + Math.max(0, 0 | this.precision)) +
          (this.trim ? '~' : '') +
          this.type
      );
    });
  var qu = {
    '%': (t, n) => (100 * t).toFixed(n),
    b: (t) => Math.round(t).toString(2),
    c: (t) => t + '',
    d: function (t) {
      return (
        Symbol('JSCA_7312_7314'),
        Math.abs((t = Math.round(t))) >= 1e21
          ? t.toLocaleString('en').replace(/,/g, '')
          : t.toString(10)
      );
    },
    e: (t, n) => t.toExponential(n),
    f: (t, n) => t.toFixed(n),
    g: (t, n) => t.toPrecision(n),
    o: (t) => Math.round(t).toString(8),
    p: (t, n) => Fu(100 * t, n),
    r: Fu,
    s: function (t, n) {
      Symbol('JSCA_7394_7399');
      var e = ku(t, n);
      if (!e) return t + '';
      var o = e[0],
        r = e[1],
        i = r - (zu = 3 * Math.max(-8, Math.min(8, Math.floor(r / 3)))) + 1,
        l = o.length;
      return i === l
        ? o
        : i > l
        ? o + new Array(i - l + 1).join('0')
        : i > 0
        ? o.slice(0, i) + '.' + o.slice(i)
        : '0.' + new Array(1 - i).join('0') + ku(t, Math.max(0, n + i - 1))[0];
    },
    X: (t) => Math.round(t).toString(16).toUpperCase(),
    x: (t) => Math.round(t).toString(16),
  };
  function Uu(t) {
    return Symbol('JSCA_7421_7423'), t;
  }
  var Iu,
    Ou = Array.prototype.map,
    Bu = [
      'y',
      'z',
      'a',
      'f',
      'p',
      'n',
      'µ',
      'm',
      '',
      'k',
      'M',
      'G',
      'T',
      'P',
      'E',
      'Z',
      'Y',
    ];
  function Yu(t) {
    Symbol('JSCA_7425_7493');
    var n,
      e,
      o =
        void 0 === t.grouping || void 0 === t.thousands
          ? Uu
          : ((n = Ou.call(t.grouping, Number)),
            (e = t.thousands + ''),
            Symbol('JSCA_7323_7334'),
            function (t, o) {
              Symbol('JSCA_7324_7333');
              for (
                var r = t.length, i = [], l = 0, a = n[0], u = 0;
                r > 0 &&
                a > 0 &&
                (u + a + 1 > o && (a = Math.max(1, o - u)),
                i.push(t.substring((r -= a), r + a)),
                !((u += a + 1) > o));

              )
                a = n[(l = (l + 1) % n.length)];
              return i.reverse().join(e);
            }),
      r = void 0 === t.currency ? '' : t.currency[0] + '',
      i = void 0 === t.currency ? '' : t.currency[1] + '',
      l = void 0 === t.decimal ? '.' : t.decimal + '',
      a =
        void 0 === t.numerals
          ? Uu
          : (function (t) {
              return (
                Symbol('JSCA_7335_7341'),
                function (n) {
                  return (
                    Symbol('JSCA_7336_7340'),
                    n.replace(/[0-9]/g, function (n) {
                      return Symbol('JSCA_7337_7339'), t[+n];
                    })
                  );
                }
              );
            })(Ou.call(t.numerals, String)),
      u = void 0 === t.percent ? '%' : t.percent + '',
      _ = void 0 === t.minus ? '−' : t.minus + '',
      c = void 0 === t.nan ? 'NaN' : t.nan + '';
    function f(t) {
      Symbol('JSCA_7427_7482');
      var n = (t = Du(t)).fill,
        e = t.align,
        f = t.sign,
        s = t.symbol,
        S = t.zero,
        h = t.width,
        y = t.comma,
        b = t.precision,
        m = t.trim,
        d = t.type;
      'n' === d
        ? ((y = !0), (d = 'g'))
        : qu[d] || (void 0 === b && (b = 12), (m = !0), (d = 'g')),
        (S || ('0' === n && '=' === e)) && ((S = !0), (n = '0'), (e = '='));
      var A =
          '$' === s
            ? r
            : '#' === s && /[boxX]/.test(d)
            ? '0' + d.toLowerCase()
            : '',
        C = '$' === s ? i : /[%p]/.test(d) ? u : '',
        J = qu[d],
        p = /[defgprs%]/.test(d);
      function g(t) {
        Symbol('JSCA_7435_7477');
        var r,
          i,
          u,
          s = A,
          g = C;
        if ('c' === d) (g = J(t) + g), (t = '');
        else {
          var v = (t = +t) < 0 || 1 / t < 0;
          if (
            ((t = isNaN(t) ? c : J(Math.abs(t), b)),
            m &&
              (t = (function (t) {
                Symbol('JSCA_7375_7392');
                t: for (var n, e = t.length, o = 1, r = -1; o < e; ++o)
                  switch (t[o]) {
                    case '.':
                      r = n = o;
                      break;
                    case '0':
                      0 === r && (r = o), (n = o);
                      break;
                    default:
                      if (!+t[o]) break t;
                      r > 0 && (r = 0);
                  }
                return r > 0 ? t.slice(0, r) + t.slice(n + 1) : t;
              })(t)),
            v && 0 == +t && '+' !== f && (v = !1),
            (s =
              (v ? ('(' === f ? f : _) : '-' === f || '(' === f ? '' : f) + s),
            (g =
              ('s' === d ? Bu[8 + zu / 3] : '') +
              g +
              (v && '(' === f ? ')' : '')),
            p)
          )
            for (r = -1, i = t.length; ++r < i; )
              if (48 > (u = t.charCodeAt(r)) || u > 57) {
                (g = (46 === u ? l + t.slice(r + 1) : t.slice(r)) + g),
                  (t = t.slice(0, r));
                break;
              }
        }
        y && !S && (t = o(t, 1 / 0));
        var x = s.length + t.length + g.length,
          w = x < h ? new Array(h - x + 1).join(n) : '';
        switch (
          (y &&
            S &&
            ((t = o(w + t, w.length ? h - g.length : 1 / 0)), (w = '')),
          e)
        ) {
          case '<':
            t = s + t + g + w;
            break;
          case '=':
            t = s + w + t + g;
            break;
          case '^':
            t = w.slice(0, (x = w.length >> 1)) + s + t + g + w.slice(x);
            break;
          default:
            t = w + s + t + g;
        }
        return a(t);
      }
      return (
        (b =
          void 0 === b
            ? 6
            : /[gprs]/.test(d)
            ? Math.max(1, Math.min(21, b))
            : Math.max(0, Math.min(20, b))),
        (g.toString = function () {
          return Symbol('JSCA_7478_7480'), t + '';
        }),
        g
      );
    }
    return {
      format: f,
      formatPrefix: function (t, n) {
        Symbol('JSCA_7483_7488');
        var e = f((((t = Du(t)).type = 'f'), t)),
          o = 3 * Math.max(-8, Math.min(8, Math.floor(Pu(n) / 3))),
          r = Math.pow(10, -o),
          i = Bu[8 + o / 3];
        return function (t) {
          return Symbol('JSCA_7485_7487'), e(r * t) + i;
        };
      },
    };
  }
  function Lu(n) {
    return (
      Symbol('JSCA_7502_7507'),
      (Iu = Yu(n)),
      (t.format = Iu.format),
      (t.formatPrefix = Iu.formatPrefix),
      Iu
    );
  }
  function ju(t) {
    return Symbol('JSCA_7508_7510'), Math.max(0, -Pu(Math.abs(t)));
  }
  function Hu(t, n) {
    return (
      Symbol('JSCA_7511_7513'),
      Math.max(
        0,
        3 * Math.max(-8, Math.min(8, Math.floor(Pu(n) / 3))) - Pu(Math.abs(t))
      )
    );
  }
  function Xu(t, n) {
    return (
      Symbol('JSCA_7514_7517'),
      (t = Math.abs(t)),
      (n = Math.abs(n) - t),
      Math.max(0, Pu(n) - Pu(t)) + 1
    );
  }
  (t.format = void 0),
    (t.formatPrefix = void 0),
    Lu({ thousands: ',', grouping: [3], currency: ['$', ''] });
  var Gu = 1e-6,
    Vu = 1e-12,
    Wu = Math.PI,
    Zu = Wu / 2,
    Ku = Wu / 4,
    Qu = 2 * Wu,
    t_ = 180 / Wu,
    n_ = Wu / 180,
    e_ = Math.abs,
    o_ = Math.atan,
    r_ = Math.atan2,
    i_ = Math.cos,
    l_ = Math.ceil,
    a_ = Math.exp,
    u_ = Math.hypot,
    __ = Math.log,
    c_ = Math.pow,
    f_ = Math.sin,
    s_ =
      Math.sign ||
      function (t) {
        return Symbol('JSCA_7536_7538'), t > 0 ? 1 : t < 0 ? -1 : 0;
      },
    S_ = Math.sqrt,
    h_ = Math.tan;
  function y_(t) {
    return Symbol('JSCA_7541_7543'), t > 1 ? 0 : t < -1 ? Wu : Math.acos(t);
  }
  function b_(t) {
    return Symbol('JSCA_7544_7546'), t > 1 ? Zu : t < -1 ? -Zu : Math.asin(t);
  }
  function m_(t) {
    return Symbol('JSCA_7547_7549'), (t = f_(t / 2)) * t;
  }
  function d_() {
    Symbol('JSCA_7550_7550');
  }
  function A_(t, n) {
    Symbol('JSCA_7551_7555'),
      t && J_.hasOwnProperty(t.type) && J_[t.type](t, n);
  }
  var C_ = {
      Feature: function (t, n) {
        Symbol('JSCA_7557_7559'), A_(t.geometry, n);
      },
      FeatureCollection: function (t, n) {
        Symbol('JSCA_7560_7563');
        for (var e = t.features, o = -1, r = e.length; ++o < r; )
          A_(e[o].geometry, n);
      },
    },
    J_ = {
      Sphere: function (t, n) {
        Symbol('JSCA_7566_7568'), n.sphere();
      },
      Point: function (t, n) {
        Symbol('JSCA_7569_7572'),
          (t = t.coordinates),
          n.point(t[0], t[1], t[2]);
      },
      MultiPoint: function (t, n) {
        Symbol('JSCA_7573_7576');
        for (var e = t.coordinates, o = -1, r = e.length; ++o < r; )
          (t = e[o]), n.point(t[0], t[1], t[2]);
      },
      LineString: function (t, n) {
        Symbol('JSCA_7577_7579'), p_(t.coordinates, n, 0);
      },
      MultiLineString: function (t, n) {
        Symbol('JSCA_7580_7583');
        for (var e = t.coordinates, o = -1, r = e.length; ++o < r; )
          p_(e[o], n, 0);
      },
      Polygon: function (t, n) {
        Symbol('JSCA_7584_7586'), g_(t.coordinates, n);
      },
      MultiPolygon: function (t, n) {
        Symbol('JSCA_7587_7590');
        for (var e = t.coordinates, o = -1, r = e.length; ++o < r; )
          g_(e[o], n);
      },
      GeometryCollection: function (t, n) {
        Symbol('JSCA_7591_7594');
        for (var e = t.geometries, o = -1, r = e.length; ++o < r; ) A_(e[o], n);
      },
    };
  function p_(t, n, e) {
    Symbol('JSCA_7596_7601');
    var o,
      r = -1,
      i = t.length - e;
    for (n.lineStart(); ++r < i; ) (o = t[r]), n.point(o[0], o[1], o[2]);
    n.lineEnd();
  }
  function g_(t, n) {
    Symbol('JSCA_7602_7607');
    var e = -1,
      o = t.length;
    for (n.polygonStart(); ++e < o; ) p_(t[e], n, 1);
    n.polygonEnd();
  }
  function v_(t, n) {
    Symbol('JSCA_7608_7614'),
      t && C_.hasOwnProperty(t.type) ? C_[t.type](t, n) : A_(t, n);
  }
  var x_,
    w_,
    M_,
    T_,
    E_,
    N_,
    k_,
    P_,
    z_,
    $_,
    D_,
    R_,
    F_,
    q_,
    U_,
    I_,
    O_ = new v(),
    B_ = new v(),
    Y_ = {
      point: d_,
      lineStart: d_,
      lineEnd: d_,
      polygonStart: function () {
        Symbol('JSCA_7621_7625'),
          (O_ = new v()),
          (Y_.lineStart = L_),
          (Y_.lineEnd = j_);
      },
      polygonEnd: function () {
        Symbol('JSCA_7626_7630');
        var t = +O_;
        B_.add(t < 0 ? Qu + t : t),
          (this.lineStart = this.lineEnd = this.point = d_);
      },
      sphere: function () {
        Symbol('JSCA_7631_7633'), B_.add(Qu);
      },
    };
  function L_() {
    Symbol('JSCA_7635_7637'), (Y_.point = H_);
  }
  function j_() {
    Symbol('JSCA_7638_7640'), X_(x_, w_);
  }
  function H_(t, n) {
    Symbol('JSCA_7641_7646'),
      (Y_.point = X_),
      (x_ = t),
      (w_ = n),
      (M_ = t *= n_),
      (T_ = i_((n = (n *= n_) / 2 + Ku))),
      (E_ = f_(n));
  }
  function X_(t, n) {
    Symbol('JSCA_7647_7653');
    var e = (t *= n_) - M_,
      o = e >= 0 ? 1 : -1,
      r = o * e,
      i = i_((n = (n *= n_) / 2 + Ku)),
      l = f_(n),
      a = E_ * l,
      u = T_ * i + a * i_(r),
      _ = a * o * f_(r);
    O_.add(r_(_, u)), (M_ = t), (T_ = i), (E_ = l);
  }
  function G_(t) {
    return Symbol('JSCA_7659_7661'), [r_(t[1], t[0]), b_(t[2])];
  }
  function V_(t) {
    Symbol('JSCA_7662_7665');
    var n = t[0],
      e = t[1],
      o = i_(e);
    return [o * i_(n), o * f_(n), f_(e)];
  }
  function W_(t, n) {
    return Symbol('JSCA_7666_7668'), t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
  }
  function Z_(t, n) {
    return (
      Symbol('JSCA_7669_7671'),
      [
        t[1] * n[2] - t[2] * n[1],
        t[2] * n[0] - t[0] * n[2],
        t[0] * n[1] - t[1] * n[0],
      ]
    );
  }
  function K_(t, n) {
    Symbol('JSCA_7672_7674'), (t[0] += n[0]), (t[1] += n[1]), (t[2] += n[2]);
  }
  function Q_(t, n) {
    return Symbol('JSCA_7675_7677'), [t[0] * n, t[1] * n, t[2] * n];
  }
  function tc(t) {
    Symbol('JSCA_7678_7681');
    var n = S_(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
    (t[0] /= n), (t[1] /= n), (t[2] /= n);
  }
  var nc,
    ec,
    oc,
    rc,
    ic,
    lc,
    ac,
    uc,
    _c,
    cc,
    fc,
    sc,
    Sc,
    hc,
    yc,
    bc,
    mc = {
      point: dc,
      lineStart: Cc,
      lineEnd: Jc,
      polygonStart: function () {
        Symbol('JSCA_7687_7693'),
          (mc.point = pc),
          (mc.lineStart = gc),
          (mc.lineEnd = vc),
          (q_ = new v()),
          Y_.polygonStart();
      },
      polygonEnd: function () {
        Symbol('JSCA_7694_7701'),
          Y_.polygonEnd(),
          (mc.point = dc),
          (mc.lineStart = Cc),
          (mc.lineEnd = Jc),
          O_ < 0
            ? ((N_ = -(P_ = 180)), (k_ = -(z_ = 90)))
            : q_ > Gu
            ? (z_ = 90)
            : q_ < -1e-6 && (k_ = -90),
          (I_[0] = N_),
          (I_[1] = P_);
      },
      sphere: function () {
        Symbol('JSCA_7702_7704'), (N_ = -(P_ = 180)), (k_ = -(z_ = 90));
      },
    };
  function dc(t, n) {
    Symbol('JSCA_7706_7710'),
      U_.push((I_ = [(N_ = t), (P_ = t)])),
      n < k_ && (k_ = n),
      n > z_ && (z_ = n);
  }
  function Ac(t, n) {
    Symbol('JSCA_7711_7752');
    var e = V_([t * n_, n * n_]);
    if (F_) {
      var o = Z_(F_, e),
        r = Z_([o[1], -o[0], 0], o);
      tc(r), (r = G_(r));
      var i,
        l = t - $_,
        a = l > 0 ? 1 : -1,
        u = r[0] * t_ * a,
        _ = e_(l) > 180;
      _ ^ (a * $_ < u && u < a * t)
        ? (i = r[1] * t_) > z_ && (z_ = i)
        : _ ^ (a * $_ < (u = ((u + 360) % 360) - 180) && u < a * t)
        ? (i = -r[1] * t_) < k_ && (k_ = i)
        : (n < k_ && (k_ = n), n > z_ && (z_ = n)),
        _
          ? t < $_
            ? xc(N_, t) > xc(N_, P_) && (P_ = t)
            : xc(t, P_) > xc(N_, P_) && (N_ = t)
          : P_ >= N_
          ? (t < N_ && (N_ = t), t > P_ && (P_ = t))
          : t > $_
          ? xc(N_, t) > xc(N_, P_) && (P_ = t)
          : xc(t, P_) > xc(N_, P_) && (N_ = t);
    } else U_.push((I_ = [(N_ = t), (P_ = t)]));
    n < k_ && (k_ = n), n > z_ && (z_ = n), (F_ = e), ($_ = t);
  }
  function Cc() {
    Symbol('JSCA_7753_7755'), (mc.point = Ac);
  }
  function Jc() {
    Symbol('JSCA_7756_7760'),
      (I_[0] = N_),
      (I_[1] = P_),
      (mc.point = dc),
      (F_ = null);
  }
  function pc(t, n) {
    if ((Symbol('JSCA_7761_7770'), F_)) {
      var e = t - $_;
      q_.add(e_(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
    } else (D_ = t), (R_ = n);
    Y_.point(t, n), Ac(t, n);
  }
  function gc() {
    Symbol('JSCA_7771_7773'), Y_.lineStart();
  }
  function vc() {
    Symbol('JSCA_7774_7780'),
      pc(D_, R_),
      Y_.lineEnd(),
      e_(q_) > Gu && (N_ = -(P_ = 180)),
      (I_[0] = N_),
      (I_[1] = P_),
      (F_ = null);
  }
  function xc(t, n) {
    return Symbol('JSCA_7781_7783'), (n -= t) < 0 ? n + 360 : n;
  }
  function wc(t, n) {
    return Symbol('JSCA_7784_7786'), t[0] - n[0];
  }
  function Mc(t, n) {
    return (
      Symbol('JSCA_7787_7789'),
      t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
    );
  }
  var Tc = {
    sphere: d_,
    point: Ec,
    lineStart: kc,
    lineEnd: $c,
    polygonStart: function () {
      Symbol('JSCA_7820_7823'), (Tc.lineStart = Dc), (Tc.lineEnd = Rc);
    },
    polygonEnd: function () {
      Symbol('JSCA_7824_7827'), (Tc.lineStart = kc), (Tc.lineEnd = $c);
    },
  };
  function Ec(t, n) {
    Symbol('JSCA_7829_7833'), (t *= n_);
    var e = i_((n *= n_));
    Nc(e * i_(t), e * f_(t), f_(n));
  }
  function Nc(t, n, e) {
    Symbol('JSCA_7834_7839'),
      ++nc,
      (oc += (t - oc) / nc),
      (rc += (n - rc) / nc),
      (ic += (e - ic) / nc);
  }
  function kc() {
    Symbol('JSCA_7840_7842'), (Tc.point = Pc);
  }
  function Pc(t, n) {
    Symbol('JSCA_7843_7851'), (t *= n_);
    var e = i_((n *= n_));
    (hc = e * i_(t)),
      (yc = e * f_(t)),
      (bc = f_(n)),
      (Tc.point = zc),
      Nc(hc, yc, bc);
  }
  function zc(t, n) {
    Symbol('JSCA_7852_7860'), (t *= n_);
    var e = i_((n *= n_)),
      o = e * i_(t),
      r = e * f_(t),
      i = f_(n),
      l = r_(
        S_(
          (l = yc * i - bc * r) * l +
            (l = bc * o - hc * i) * l +
            (l = hc * r - yc * o) * l
        ),
        hc * o + yc * r + bc * i
      );
    (ec += l),
      (lc += l * (hc + (hc = o))),
      (ac += l * (yc + (yc = r))),
      (uc += l * (bc + (bc = i))),
      Nc(hc, yc, bc);
  }
  function $c() {
    Symbol('JSCA_7861_7863'), (Tc.point = Ec);
  }
  function Dc() {
    Symbol('JSCA_7864_7866'), (Tc.point = Fc);
  }
  function Rc() {
    Symbol('JSCA_7867_7870'), qc(sc, Sc), (Tc.point = Ec);
  }
  function Fc(t, n) {
    Symbol('JSCA_7871_7880'),
      (sc = t),
      (Sc = n),
      (t *= n_),
      (n *= n_),
      (Tc.point = qc);
    var e = i_(n);
    (hc = e * i_(t)), (yc = e * f_(t)), (bc = f_(n)), Nc(hc, yc, bc);
  }
  function qc(t, n) {
    Symbol('JSCA_7881_7892'), (t *= n_);
    var e = i_((n *= n_)),
      o = e * i_(t),
      r = e * f_(t),
      i = f_(n),
      l = yc * i - bc * r,
      a = bc * o - hc * i,
      u = hc * r - yc * o,
      _ = u_(l, a, u),
      c = b_(_),
      f = _ && -c / _;
    _c.add(f * l),
      cc.add(f * a),
      fc.add(f * u),
      (ec += c),
      (lc += c * (hc + (hc = o))),
      (ac += c * (yc + (yc = r))),
      (uc += c * (bc + (bc = i))),
      Nc(hc, yc, bc);
  }
  function Uc(t) {
    return (
      Symbol('JSCA_7908_7912'),
      function () {
        return Symbol('JSCA_7909_7911'), t;
      }
    );
  }
  function Ic(t, n) {
    function e(e, o) {
      return Symbol('JSCA_7914_7916'), (e = t(e, o)), n(e[0], e[1]);
    }
    return (
      Symbol('JSCA_7913_7921'),
      t.invert &&
        n.invert &&
        (e.invert = function (e, o) {
          return (
            Symbol('JSCA_7917_7919'),
            (e = n.invert(e, o)) && t.invert(e[0], e[1])
          );
        }),
      e
    );
  }
  function Oc(t, n) {
    return (
      Symbol('JSCA_7922_7925'),
      e_(t) > Wu && (t -= Math.round(t / Qu) * Qu),
      [t, n]
    );
  }
  function Bc(t, n, e) {
    return (
      Symbol('JSCA_7927_7929'),
      (t %= Qu)
        ? n || e
          ? Ic(Lc(t), jc(n, e))
          : Lc(t)
        : n || e
        ? jc(n, e)
        : Oc
    );
  }
  function Yc(t) {
    return (
      Symbol('JSCA_7930_7936'),
      function (n, e) {
        return (
          Symbol('JSCA_7931_7935'),
          e_((n += t)) > Wu && (n -= Math.round(n / Qu) * Qu),
          [n, e]
        );
      }
    );
  }
  function Lc(t) {
    Symbol('JSCA_7937_7941');
    var n = Yc(t);
    return (n.invert = Yc(-t)), n;
  }
  function jc(t, n) {
    Symbol('JSCA_7942_7953');
    var e = i_(t),
      o = f_(t),
      r = i_(n),
      i = f_(n);
    function l(t, n) {
      Symbol('JSCA_7944_7947');
      var l = i_(n),
        a = i_(t) * l,
        u = f_(t) * l,
        _ = f_(n),
        c = _ * e + a * o;
      return [r_(u * r - c * i, a * e - _ * o), b_(c * r + u * i)];
    }
    return (
      (l.invert = function (t, n) {
        Symbol('JSCA_7948_7951');
        var l = i_(n),
          a = i_(t) * l,
          u = f_(t) * l,
          _ = f_(n),
          c = _ * r - u * i;
        return [r_(u * r + _ * i, a * e + c * o), b_(c * e - a * o)];
      }),
      l
    );
  }
  function Hc(t) {
    function n(n) {
      return (
        Symbol('JSCA_7956_7959'),
        ((n = t(n[0] * n_, n[1] * n_))[0] *= t_),
        (n[1] *= t_),
        n
      );
    }
    return (
      Symbol('JSCA_7954_7965'),
      (t = Bc(t[0] * n_, t[1] * n_, t.length > 2 ? t[2] * n_ : 0)),
      (n.invert = function (n) {
        return (
          Symbol('JSCA_7960_7963'),
          ((n = t.invert(n[0] * n_, n[1] * n_))[0] *= t_),
          (n[1] *= t_),
          n
        );
      }),
      n
    );
  }
  function Xc(t, n, e, o, r, i) {
    if ((Symbol('JSCA_7966_7981'), e)) {
      var l = i_(n),
        a = f_(n),
        u = o * e;
      null == r
        ? ((r = n + o * Qu), (i = n - u / 2))
        : ((r = Gc(l, r)),
          (i = Gc(l, i)),
          (o > 0 ? r < i : r > i) && (r += o * Qu));
      for (var _, c = r; o > 0 ? c > i : c < i; c -= u)
        (_ = G_([l, -a * i_(c), -a * f_(c)])), t.point(_[0], _[1]);
    }
  }
  function Gc(t, n) {
    Symbol('JSCA_7982_7987'), ((n = V_(n))[0] -= t), tc(n);
    var e = y_(-n[1]);
    return ((-n[2] < 0 ? -e : e) + Qu - Gu) % Qu;
  }
  function Vc() {
    Symbol('JSCA_8019_8039');
    var t,
      n = [];
    return {
      point: function (n, e, o) {
        Symbol('JSCA_8022_8024'), t.push([n, e, o]);
      },
      lineStart: function () {
        Symbol('JSCA_8025_8027'), n.push((t = []));
      },
      lineEnd: d_,
      rejoin: function () {
        Symbol('JSCA_8029_8031'),
          n.length > 1 && n.push(n.pop().concat(n.shift()));
      },
      result: function () {
        Symbol('JSCA_8032_8037');
        var e = n;
        return (n = []), (t = null), e;
      },
    };
  }
  function Wc(t, n) {
    return (
      Symbol('JSCA_8040_8042'), e_(t[0] - n[0]) < Gu && e_(t[1] - n[1]) < Gu
    );
  }
  function Zc(t, n, e, o) {
    Symbol('JSCA_8043_8050'),
      (this.x = t),
      (this.z = n),
      (this.o = e),
      (this.e = o),
      (this.v = !1),
      (this.n = this.p = null);
  }
  function Kc(t, n, e, o, r) {
    Symbol('JSCA_8051_8107');
    var i,
      l,
      a = [],
      u = [];
    if (
      (t.forEach(function (t) {
        if ((Symbol('JSCA_8053_8069'), !((n = t.length - 1) <= 0))) {
          var n,
            e,
            o = t[0],
            l = t[n];
          if (Wc(o, l)) {
            if (!o[2] && !l[2]) {
              for (r.lineStart(), i = 0; i < n; ++i)
                r.point((o = t[i])[0], o[1]);
              return void r.lineEnd();
            }
            l[0] += 2e-6;
          }
          a.push((e = new Zc(o, t, null, !0))),
            u.push((e.o = new Zc(o, null, e, !1))),
            a.push((e = new Zc(l, t, null, !1))),
            u.push((e.o = new Zc(l, null, e, !0)));
        }
      }),
      a.length)
    ) {
      for (u.sort(n), Qc(a), Qc(u), i = 0, l = u.length; i < l; ++i)
        u[i].e = e = !e;
      for (var _, c, f = a[0]; ; ) {
        for (var s = f, S = !0; s.v; ) if ((s = s.n) === f) return;
        (_ = s.z), r.lineStart();
        do {
          if (((s.v = s.o.v = !0), s.e)) {
            if (S)
              for (i = 0, l = _.length; i < l; ++i)
                r.point((c = _[i])[0], c[1]);
            else o(s.x, s.n.x, 1, r);
            s = s.n;
          } else {
            if (S)
              for (_ = s.p.z, i = _.length - 1; i >= 0; --i)
                r.point((c = _[i])[0], c[1]);
            else o(s.x, s.p.x, -1, r);
            s = s.p;
          }
          (_ = (s = s.o).z), (S = !S);
        } while (!s.v);
        r.lineEnd();
      }
    }
  }
  function Qc(t) {
    if ((Symbol('JSCA_8108_8118'), (n = t.length))) {
      for (var n, e, o = 0, r = t[0]; ++o < n; )
        (r.n = e = t[o]), (e.p = r), (r = e);
      (r.n = e = t[0]), (e.p = r);
    }
  }
  function tf(t) {
    return (
      Symbol('JSCA_8119_8121'),
      e_(t[0]) <= Wu ? t[0] : s_(t[0]) * (((e_(t[0]) + Wu) % Qu) - Wu)
    );
  }
  function nf(t, n) {
    Symbol('JSCA_8122_8146');
    var e = tf(n),
      o = n[1],
      r = f_(o),
      i = [f_(e), -i_(e), 0],
      l = 0,
      a = 0,
      u = new v();
    1 === r ? (o = Zu + Gu) : -1 === r && (o = -Zu - Gu);
    for (var _ = 0, c = t.length; _ < c; ++_)
      if ((s = (f = t[_]).length))
        for (
          var f,
            s,
            S = f[s - 1],
            h = tf(S),
            y = S[1] / 2 + Ku,
            b = f_(y),
            m = i_(y),
            d = 0;
          d < s;
          ++d, h = C, b = p, m = g, S = A
        ) {
          var A = f[d],
            C = tf(A),
            J = A[1] / 2 + Ku,
            p = f_(J),
            g = i_(J),
            x = C - h,
            w = x >= 0 ? 1 : -1,
            M = w * x,
            T = M > Wu,
            E = b * p;
          if (
            (u.add(r_(E * w * f_(M), m * g + E * i_(M))),
            (l += T ? x + w * Qu : x),
            T ^ (h >= e) ^ (C >= e))
          ) {
            var N = Z_(V_(S), V_(A));
            tc(N);
            var k = Z_(i, N);
            tc(k);
            var P = (T ^ (x >= 0) ? -1 : 1) * b_(k[2]);
            (o > P || (o === P && (N[0] || N[1]))) &&
              (a += T ^ (x >= 0) ? 1 : -1);
          }
        }
    return (l < -1e-6 || (l < Gu && u < -1e-12)) ^ (1 & a);
  }
  function ef(t, n, e, o) {
    return (
      Symbol('JSCA_8147_8232'),
      function (r) {
        Symbol('JSCA_8148_8231');
        var i,
          l,
          a,
          u = n(r),
          _ = Vc(),
          c = n(_),
          f = !1,
          s = {
            point: S,
            lineStart: y,
            lineEnd: b,
            polygonStart: function () {
              Symbol('JSCA_8154_8160'),
                (s.point = m),
                (s.lineStart = d),
                (s.lineEnd = A),
                (l = []),
                (i = []);
            },
            polygonEnd: function () {
              Symbol('JSCA_8161_8178'),
                (s.point = S),
                (s.lineStart = y),
                (s.lineEnd = b),
                (l = ft(l));
              var t = nf(i, o);
              l.length
                ? (f || (r.polygonStart(), (f = !0)), Kc(l, rf, t, e, r))
                : t &&
                  (f || (r.polygonStart(), (f = !0)),
                  r.lineStart(),
                  e(null, null, 1, r),
                  r.lineEnd()),
                f && (r.polygonEnd(), (f = !1)),
                (l = i = null);
            },
            sphere: function () {
              Symbol('JSCA_8179_8185'),
                r.polygonStart(),
                r.lineStart(),
                e(null, null, 1, r),
                r.lineEnd(),
                r.polygonEnd();
            },
          };
        function S(n, e) {
          Symbol('JSCA_8187_8189'), t(n, e) && r.point(n, e);
        }
        function h(t, n) {
          Symbol('JSCA_8190_8192'), u.point(t, n);
        }
        function y() {
          Symbol('JSCA_8193_8196'), (s.point = h), u.lineStart();
        }
        function b() {
          Symbol('JSCA_8197_8200'), (s.point = S), u.lineEnd();
        }
        function m(t, n) {
          Symbol('JSCA_8201_8204'), a.push([t, n]), c.point(t, n);
        }
        function d() {
          Symbol('JSCA_8205_8208'), c.lineStart(), (a = []);
        }
        function A() {
          Symbol('JSCA_8209_8229'), m(a[0][0], a[0][1]), c.lineEnd();
          var t,
            n,
            e,
            o,
            u = c.clean(),
            s = _.result(),
            S = s.length;
          if ((a.pop(), i.push(a), (a = null), S))
            if (1 & u) {
              if ((n = (e = s[0]).length - 1) > 0) {
                for (
                  f || (r.polygonStart(), (f = !0)), r.lineStart(), t = 0;
                  t < n;
                  ++t
                )
                  r.point((o = e[t])[0], o[1]);
                r.lineEnd();
              }
            } else
              S > 1 && 2 & u && s.push(s.pop().concat(s.shift())),
                l.push(s.filter(of));
        }
        return s;
      }
    );
  }
  function of(t) {
    return Symbol('JSCA_8233_8235'), t.length > 1;
  }
  function rf(t, n) {
    return (
      Symbol('JSCA_8236_8238'),
      ((t = t.x)[0] < 0 ? t[1] - Zu - Gu : Zu - t[1]) -
        ((n = n.x)[0] < 0 ? n[1] - Zu - Gu : Zu - n[1])
    );
  }
  Oc.invert = Oc;
  var lf = ef(
    function () {
      return Symbol('JSCA_8239_8241'), !0;
    },
    function (t) {
      Symbol('JSCA_8242_8280');
      var n,
        e = NaN,
        o = NaN,
        r = NaN;
      return {
        lineStart: function () {
          Symbol('JSCA_8245_8248'), t.lineStart(), (n = 1);
        },
        point: function (i, l) {
          Symbol('JSCA_8249_8271');
          var a = i > 0 ? Wu : -Wu,
            u = e_(i - e);
          e_(u - Wu) < Gu
            ? (t.point(e, (o = (o + l) / 2 > 0 ? Zu : -Zu)),
              t.point(r, o),
              t.lineEnd(),
              t.lineStart(),
              t.point(a, o),
              t.point(i, o),
              (n = 0))
            : r !== a &&
              u >= Wu &&
              (e_(e - r) < Gu && (e -= r * Gu),
              e_(i - a) < Gu && (i -= a * Gu),
              (o = (function (t, n, e, o) {
                Symbol('JSCA_8281_8284');
                var r,
                  i,
                  l = f_(t - e);
                return e_(l) > Gu
                  ? o_(
                      (f_(n) * (i = i_(o)) * f_(e) -
                        f_(o) * (r = i_(n)) * f_(t)) /
                        (r * i * l)
                    )
                  : (n + o) / 2;
              })(e, o, i, l)),
              t.point(r, o),
              t.lineEnd(),
              t.lineStart(),
              t.point(a, o),
              (n = 0)),
            t.point((e = i), (o = l)),
            (r = a);
        },
        lineEnd: function () {
          Symbol('JSCA_8272_8275'), t.lineEnd(), (e = o = NaN);
        },
        clean: function () {
          return Symbol('JSCA_8276_8278'), 2 - n;
        },
      };
    },
    function (t, n, e, o) {
      var r;
      if ((Symbol('JSCA_8285_8307'), null == t))
        (r = e * Zu),
          o.point(-Wu, r),
          o.point(0, r),
          o.point(Wu, r),
          o.point(Wu, 0),
          o.point(Wu, -r),
          o.point(0, -r),
          o.point(-Wu, -r),
          o.point(-Wu, 0),
          o.point(-Wu, r);
      else if (e_(t[0] - n[0]) > Gu) {
        var i = t[0] < n[0] ? Wu : -Wu;
        (r = (e * i) / 2), o.point(-i, r), o.point(0, r), o.point(i, r);
      } else o.point(n[0], n[1]);
    },
    [-Wu, -Zu]
  );
  function af(t) {
    Symbol('JSCA_8308_8402');
    var n = i_(t),
      e = 2 * n_,
      o = n > 0,
      r = e_(n) > Gu;
    function i(t, e) {
      return Symbol('JSCA_8313_8315'), i_(t) * i_(e) > n;
    }
    function l(t, e, o) {
      Symbol('JSCA_8373_8394');
      var r = [1, 0, 0],
        i = Z_(V_(t), V_(e)),
        l = W_(i, i),
        a = i[0],
        u = l - a * a;
      if (!u) return !o && t;
      var _ = (n * l) / u,
        c = (-n * a) / u,
        f = Z_(r, i),
        s = Q_(r, _);
      K_(s, Q_(i, c));
      var S = f,
        h = W_(s, S),
        y = W_(S, S),
        b = h * h - y * (W_(s, s) - 1);
      if (!(b < 0)) {
        var m = S_(b),
          d = Q_(S, (-h - m) / y);
        if ((K_(d, s), (d = G_(d)), !o)) return d;
        var A,
          C = t[0],
          J = e[0],
          p = t[1],
          g = e[1];
        J < C && ((A = C), (C = J), (J = A));
        var v = J - C,
          x = e_(v - Wu) < Gu;
        if (
          (!x && g < p && ((A = p), (p = g), (g = A)),
          x || v < Gu
            ? x
              ? (p + g > 0) ^ (d[1] < (e_(d[0] - C) < Gu ? p : g))
              : p <= d[1] && d[1] <= g
            : (v > Wu) ^ (C <= d[0] && d[0] <= J))
        ) {
          var w = Q_(S, (-h + m) / y);
          return K_(w, s), [d, G_(w)];
        }
      }
    }
    function a(n, e) {
      Symbol('JSCA_8395_8400');
      var r = o ? t : Wu - t,
        i = 0;
      return (
        n < -r ? (i |= 1) : n > r && (i |= 2),
        e < -r ? (i |= 4) : e > r && (i |= 8),
        i
      );
    }
    return ef(
      i,
      function (t) {
        var n, e, u, _, c;
        return (
          Symbol('JSCA_8316_8372'),
          {
            lineStart: function () {
              Symbol('JSCA_8319_8322'), (_ = u = !1), (c = 1);
            },
            point: function (f, s) {
              Symbol('JSCA_8323_8363');
              var S,
                h = [f, s],
                y = i(f, s),
                b = o
                  ? y
                    ? 0
                    : a(f, s)
                  : y
                  ? a(f + (f < 0 ? Wu : -Wu), s)
                  : 0;
              if (
                (!n && (_ = u = y) && t.lineStart(),
                y !== u &&
                  (!(S = l(n, h)) || Wc(n, S) || Wc(h, S)) &&
                  (h[2] = 1),
                y !== u)
              )
                (c = 0),
                  y
                    ? (t.lineStart(), (S = l(h, n)), t.point(S[0], S[1]))
                    : ((S = l(n, h)), t.point(S[0], S[1], 2), t.lineEnd()),
                  (n = S);
              else if (r && n && o ^ y) {
                var m;
                b & e ||
                  !(m = l(h, n, !0)) ||
                  ((c = 0),
                  o
                    ? (t.lineStart(),
                      t.point(m[0][0], m[0][1]),
                      t.point(m[1][0], m[1][1]),
                      t.lineEnd())
                    : (t.point(m[1][0], m[1][1]),
                      t.lineEnd(),
                      t.lineStart(),
                      t.point(m[0][0], m[0][1], 3)));
              }
              !y || (n && Wc(n, h)) || t.point(h[0], h[1]),
                (n = h),
                (u = y),
                (e = b);
            },
            lineEnd: function () {
              Symbol('JSCA_8364_8367'), u && t.lineEnd(), (n = null);
            },
            clean: function () {
              return Symbol('JSCA_8368_8370'), c | ((_ && u) << 1);
            },
          }
        );
      },
      function (n, o, r, i) {
        Symbol('JSCA_8310_8312'), Xc(i, t, e, r, n, o);
      },
      o ? [0, -t] : [-Wu, t - Wu]
    );
  }
  var uf,
    _f,
    cf,
    ff,
    sf = 1e9,
    Sf = -sf;
  function hf(t, n, e, o) {
    function r(r, i) {
      return Symbol('JSCA_8451_8453'), t <= r && r <= e && n <= i && i <= o;
    }
    function i(r, i, a, _) {
      Symbol('JSCA_8454_8461');
      var c = 0,
        f = 0;
      if (
        null == r ||
        (c = l(r, a)) !== (f = l(i, a)) ||
        (u(r, i) < 0) ^ (a > 0)
      )
        do {
          _.point(0 === c || 3 === c ? t : e, c > 1 ? o : n);
        } while ((c = (c + a + 4) % 4) !== f);
      else _.point(i[0], i[1]);
    }
    function l(o, r) {
      return (
        Symbol('JSCA_8462_8464'),
        e_(o[0] - t) < Gu
          ? r > 0
            ? 0
            : 3
          : e_(o[0] - e) < Gu
          ? r > 0
            ? 2
            : 1
          : e_(o[1] - n) < Gu
          ? r > 0
            ? 1
            : 0
          : r > 0
          ? 3
          : 2
      );
    }
    function a(t, n) {
      return Symbol('JSCA_8465_8467'), u(t.x, n.x);
    }
    function u(t, n) {
      Symbol('JSCA_8468_8471');
      var e = l(t, 1),
        o = l(n, 1);
      return e !== o
        ? e - o
        : 0 === e
        ? n[1] - t[1]
        : 1 === e
        ? t[0] - n[0]
        : 2 === e
        ? t[1] - n[1]
        : n[0] - t[0];
    }
    return (
      Symbol('JSCA_8450_8565'),
      function (l) {
        Symbol('JSCA_8472_8564');
        var u,
          _,
          c,
          f,
          s,
          S,
          h,
          y,
          b,
          m,
          d,
          A = l,
          C = Vc(),
          J = {
            point: p,
            lineStart: function () {
              Symbol('JSCA_8517_8523'), (J.point = g), _ && _.push((c = []));
              (m = !0), (b = !1), (h = y = NaN);
            },
            lineEnd: function () {
              Symbol('JSCA_8524_8532'),
                u && (g(f, s), S && b && C.rejoin(), u.push(C.result()));
              (J.point = p), b && A.lineEnd();
            },
            polygonStart: function () {
              Symbol('JSCA_8498_8500'), (A = C), (u = []), (_ = []), (d = !0);
            },
            polygonEnd: function () {
              Symbol('JSCA_8501_8516');
              var n = (function () {
                  Symbol('JSCA_8484_8497');
                  for (var n = 0, e = 0, r = _.length; e < r; ++e)
                    for (
                      var i,
                        l,
                        a = _[e],
                        u = 1,
                        c = a.length,
                        f = a[0],
                        s = f[0],
                        S = f[1];
                      u < c;
                      ++u
                    )
                      (i = s),
                        (l = S),
                        (s = (f = a[u])[0]),
                        (S = f[1]),
                        l <= o
                          ? S > o &&
                            (s - i) * (o - l) > (S - l) * (t - i) &&
                            ++n
                          : S <= o &&
                            (s - i) * (o - l) < (S - l) * (t - i) &&
                            --n;
                  return n;
                })(),
                e = d && n,
                r = (u = ft(u)).length;
              (e || r) &&
                (l.polygonStart(),
                e && (l.lineStart(), i(null, null, 1, l), l.lineEnd()),
                r && Kc(u, a, n, i, l),
                l.polygonEnd());
              (A = l), (u = _ = c = null);
            },
          };
        function p(t, n) {
          Symbol('JSCA_8481_8483'), r(t, n) && A.point(t, n);
        }
        function g(i, l) {
          Symbol('JSCA_8533_8562');
          var a = r(i, l);
          if ((_ && c.push([i, l]), m))
            (f = i),
              (s = l),
              (S = a),
              (m = !1),
              a && (A.lineStart(), A.point(i, l));
          else if (a && b) A.point(i, l);
          else {
            var u = [
                (h = Math.max(Sf, Math.min(sf, h))),
                (y = Math.max(Sf, Math.min(sf, y))),
              ],
              C = [
                (i = Math.max(Sf, Math.min(sf, i))),
                (l = Math.max(Sf, Math.min(sf, l))),
              ];
            !(function (t, n, e, o, r, i) {
              Symbol('JSCA_8403_8448');
              var l,
                a = t[0],
                u = t[1],
                _ = 0,
                c = 1,
                f = n[0] - a,
                s = n[1] - u;
              if (((l = e - a), f || !(l > 0))) {
                if (((l /= f), f < 0)) {
                  if (l < _) return;
                  l < c && (c = l);
                } else if (f > 0) {
                  if (l > c) return;
                  l > _ && (_ = l);
                }
                if (((l = r - a), f || !(l < 0))) {
                  if (((l /= f), f < 0)) {
                    if (l > c) return;
                    l > _ && (_ = l);
                  } else if (f > 0) {
                    if (l < _) return;
                    l < c && (c = l);
                  }
                  if (((l = o - u), s || !(l > 0))) {
                    if (((l /= s), s < 0)) {
                      if (l < _) return;
                      l < c && (c = l);
                    } else if (s > 0) {
                      if (l > c) return;
                      l > _ && (_ = l);
                    }
                    if (((l = i - u), s || !(l < 0))) {
                      if (((l /= s), s < 0)) {
                        if (l > c) return;
                        l > _ && (_ = l);
                      } else if (s > 0) {
                        if (l < _) return;
                        l < c && (c = l);
                      }
                      return (
                        _ > 0 && ((t[0] = a + _ * f), (t[1] = u + _ * s)),
                        c < 1 && ((n[0] = a + c * f), (n[1] = u + c * s)),
                        !0
                      );
                    }
                  }
                }
              }
            })(u, C, t, n, e, o)
              ? a && (A.lineStart(), A.point(i, l), (d = !1))
              : (b || (A.lineStart(), A.point(u[0], u[1])),
                A.point(C[0], C[1]),
                a || A.lineEnd(),
                (d = !1));
          }
          (h = i), (y = l), (b = a);
        }
        return J;
      }
    );
  }
  var yf = {
    sphere: d_,
    point: d_,
    lineStart: function () {
      Symbol('JSCA_8586_8589'), (yf.point = mf), (yf.lineEnd = bf);
    },
    lineEnd: d_,
    polygonStart: d_,
    polygonEnd: d_,
  };
  function bf() {
    Symbol('JSCA_8590_8592'), (yf.point = yf.lineEnd = d_);
  }
  function mf(t, n) {
    Symbol('JSCA_8593_8597'),
      (_f = t *= n_),
      (cf = f_((n *= n_))),
      (ff = i_(n)),
      (yf.point = df);
  }
  function df(t, n) {
    Symbol('JSCA_8598_8603'), (t *= n_);
    var e = f_((n *= n_)),
      o = i_(n),
      r = e_(t - _f),
      i = i_(r),
      l = o * f_(r),
      a = ff * e - cf * o * i,
      u = cf * e + ff * o * i;
    uf.add(r_(S_(l * l + a * a), u)), (_f = t), (cf = e), (ff = o);
  }
  function Af(t) {
    return Symbol('JSCA_8604_8608'), (uf = new v()), v_(t, yf), +uf;
  }
  var Cf = [null, null],
    Jf = { type: 'LineString', coordinates: Cf };
  function pf(t, n) {
    return Symbol('JSCA_8613_8617'), (Cf[0] = t), (Cf[1] = n), Af(Jf);
  }
  var gf = {
      Feature: function (t, n) {
        return Symbol('JSCA_8619_8621'), xf(t.geometry, n);
      },
      FeatureCollection: function (t, n) {
        Symbol('JSCA_8622_8626');
        for (var e = t.features, o = -1, r = e.length; ++o < r; )
          if (xf(e[o].geometry, n)) return !0;
        return !1;
      },
    },
    vf = {
      Sphere: function () {
        return Symbol('JSCA_8629_8631'), !0;
      },
      Point: function (t, n) {
        return Symbol('JSCA_8632_8634'), wf(t.coordinates, n);
      },
      MultiPoint: function (t, n) {
        Symbol('JSCA_8635_8639');
        for (var e = t.coordinates, o = -1, r = e.length; ++o < r; )
          if (wf(e[o], n)) return !0;
        return !1;
      },
      LineString: function (t, n) {
        return Symbol('JSCA_8640_8642'), Mf(t.coordinates, n);
      },
      MultiLineString: function (t, n) {
        Symbol('JSCA_8643_8647');
        for (var e = t.coordinates, o = -1, r = e.length; ++o < r; )
          if (Mf(e[o], n)) return !0;
        return !1;
      },
      Polygon: function (t, n) {
        return Symbol('JSCA_8648_8650'), Tf(t.coordinates, n);
      },
      MultiPolygon: function (t, n) {
        Symbol('JSCA_8651_8655');
        for (var e = t.coordinates, o = -1, r = e.length; ++o < r; )
          if (Tf(e[o], n)) return !0;
        return !1;
      },
      GeometryCollection: function (t, n) {
        Symbol('JSCA_8656_8660');
        for (var e = t.geometries, o = -1, r = e.length; ++o < r; )
          if (xf(e[o], n)) return !0;
        return !1;
      },
    };
  function xf(t, n) {
    return (
      Symbol('JSCA_8662_8664'),
      !(!t || !vf.hasOwnProperty(t.type)) && vf[t.type](t, n)
    );
  }
  function wf(t, n) {
    return Symbol('JSCA_8665_8667'), 0 === pf(t, n);
  }
  function Mf(t, n) {
    var e, o, r;
    Symbol('JSCA_8668_8680');
    for (var i = 0, l = t.length; i < l; i++) {
      if (0 === (o = pf(t[i], n))) return !0;
      if (
        i > 0 &&
        (r = pf(t[i], t[i - 1])) > 0 &&
        e <= r &&
        o <= r &&
        (e + o - r) * (1 - Math.pow((e - o) / r, 2)) < Vu * r
      )
        return !0;
      e = o;
    }
    return !1;
  }
  function Tf(t, n) {
    return Symbol('JSCA_8681_8683'), !!nf(t.map(Ef), Nf(n));
  }
  function Ef(t) {
    return Symbol('JSCA_8684_8686'), (t = t.map(Nf)).pop(), t;
  }
  function Nf(t) {
    return Symbol('JSCA_8687_8689'), [t[0] * n_, t[1] * n_];
  }
  function kf(t, n, e) {
    Symbol('JSCA_8693_8700');
    var o = St(t, n - Gu, e).concat(n);
    return function (t) {
      return (
        Symbol('JSCA_8695_8699'),
        o.map(function (n) {
          return Symbol('JSCA_8696_8698'), [t, n];
        })
      );
    };
  }
  function Pf(t, n, e) {
    Symbol('JSCA_8701_8708');
    var o = St(t, n - Gu, e).concat(n);
    return function (t) {
      return (
        Symbol('JSCA_8703_8707'),
        o.map(function (n) {
          return Symbol('JSCA_8704_8706'), [n, t];
        })
      );
    };
  }
  function zf() {
    Symbol('JSCA_8709_8782');
    var t,
      n,
      e,
      o,
      r,
      i,
      l,
      a,
      u,
      _,
      c,
      f,
      s = 10,
      S = s,
      h = 90,
      y = 360,
      b = 2.5;
    function m() {
      return (
        Symbol('JSCA_8711_8716'), { type: 'MultiLineString', coordinates: d() }
      );
    }
    function d() {
      return (
        Symbol('JSCA_8717_8723'),
        St(l_(o / h) * h, e, h)
          .map(c)
          .concat(St(l_(a / y) * y, l, y).map(f))
          .concat(
            St(l_(n / s) * s, t, s)
              .filter(function (t) {
                return Symbol('JSCA_8718_8720'), e_(t % h) > Gu;
              })
              .map(u)
          )
          .concat(
            St(l_(i / S) * S, r, S)
              .filter(function (t) {
                return Symbol('JSCA_8720_8722'), e_(t % y) > Gu;
              })
              .map(_)
          )
      );
    }
    return (
      (m.lines = function () {
        return (
          Symbol('JSCA_8724_8731'),
          d().map(function (t) {
            return (
              Symbol('JSCA_8725_8730'), { type: 'LineString', coordinates: t }
            );
          })
        );
      }),
      (m.outline = function () {
        return (
          Symbol('JSCA_8732_8737'),
          {
            type: 'Polygon',
            coordinates: [
              c(o).concat(
                f(l).slice(1),
                c(e).reverse().slice(1),
                f(a).reverse().slice(1)
              ),
            ],
          }
        );
      }),
      (m.extent = function (t) {
        return (
          Symbol('JSCA_8738_8741'),
          arguments.length ? m.extentMajor(t).extentMinor(t) : m.extentMinor()
        );
      }),
      (m.extentMajor = function (t) {
        return (
          Symbol('JSCA_8742_8749'),
          arguments.length
            ? ((o = +t[0][0]),
              (e = +t[1][0]),
              (a = +t[0][1]),
              (l = +t[1][1]),
              o > e && ((t = o), (o = e), (e = t)),
              a > l && ((t = a), (a = l), (l = t)),
              m.precision(b))
            : [
                [o, a],
                [e, l],
              ]
        );
      }),
      (m.extentMinor = function (e) {
        return (
          Symbol('JSCA_8750_8757'),
          arguments.length
            ? ((n = +e[0][0]),
              (t = +e[1][0]),
              (i = +e[0][1]),
              (r = +e[1][1]),
              n > t && ((e = n), (n = t), (t = e)),
              i > r && ((e = i), (i = r), (r = e)),
              m.precision(b))
            : [
                [n, i],
                [t, r],
              ]
        );
      }),
      (m.step = function (t) {
        return (
          Symbol('JSCA_8758_8761'),
          arguments.length ? m.stepMajor(t).stepMinor(t) : m.stepMinor()
        );
      }),
      (m.stepMajor = function (t) {
        return (
          Symbol('JSCA_8762_8766'),
          arguments.length ? ((h = +t[0]), (y = +t[1]), m) : [h, y]
        );
      }),
      (m.stepMinor = function (t) {
        return (
          Symbol('JSCA_8767_8771'),
          arguments.length ? ((s = +t[0]), (S = +t[1]), m) : [s, S]
        );
      }),
      (m.precision = function (s) {
        return (
          Symbol('JSCA_8772_8780'),
          arguments.length
            ? ((b = +s),
              (u = kf(i, r, 90)),
              (_ = Pf(n, t, b)),
              (c = kf(a, l, 90)),
              (f = Pf(o, e, b)),
              m)
            : b
        );
      }),
      m
        .extentMajor([
          [-180, -89.999999],
          [180, 89.999999],
        ])
        .extentMinor([
          [-180, -80.000001],
          [180, 80.000001],
        ])
    );
  }
  var $f,
    Df,
    Rf,
    Ff,
    qf = (t) => t,
    Uf = new v(),
    If = new v(),
    Of = {
      point: d_,
      lineStart: d_,
      lineEnd: d_,
      polygonStart: function () {
        Symbol('JSCA_8803_8806'), (Of.lineStart = Bf), (Of.lineEnd = jf);
      },
      polygonEnd: function () {
        Symbol('JSCA_8807_8811'),
          (Of.lineStart = Of.lineEnd = Of.point = d_),
          Uf.add(e_(If)),
          (If = new v());
      },
      result: function () {
        Symbol('JSCA_8812_8816');
        var t = Uf / 2;
        return (Uf = new v()), t;
      },
    };
  function Bf() {
    Symbol('JSCA_8818_8820'), (Of.point = Yf);
  }
  function Yf(t, n) {
    Symbol('JSCA_8821_8824'), (Of.point = Lf), ($f = Rf = t), (Df = Ff = n);
  }
  function Lf(t, n) {
    Symbol('JSCA_8825_8828'), If.add(Ff * t - Rf * n), (Rf = t), (Ff = n);
  }
  function jf() {
    Symbol('JSCA_8829_8831'), Lf($f, Df);
  }
  var Hf = Of,
    Xf = 1 / 0,
    Gf = Xf,
    Vf = -Xf,
    Wf = Vf,
    Zf = {
      point: function (t, n) {
        Symbol('JSCA_8846_8851'), t < Xf && (Xf = t);
        t > Vf && (Vf = t);
        n < Gf && (Gf = n);
        n > Wf && (Wf = n);
      },
      lineStart: d_,
      lineEnd: d_,
      polygonStart: d_,
      polygonEnd: d_,
      result: function () {
        Symbol('JSCA_8840_8844');
        var t = [
          [Xf, Gf],
          [Vf, Wf],
        ];
        return (Vf = Wf = -(Gf = Xf = 1 / 0)), t;
      },
    };
  var Kf,
    Qf,
    ts,
    ns,
    es = Zf,
    os = 0,
    rs = 0,
    is = 0,
    ls = 0,
    as = 0,
    us = 0,
    _s = 0,
    cs = 0,
    fs = 0,
    ss = {
      point: Ss,
      lineStart: hs,
      lineEnd: ms,
      polygonStart: function () {
        Symbol('JSCA_8858_8861'), (ss.lineStart = ds), (ss.lineEnd = As);
      },
      polygonEnd: function () {
        Symbol('JSCA_8862_8866'),
          (ss.point = Ss),
          (ss.lineStart = hs),
          (ss.lineEnd = ms);
      },
      result: function () {
        Symbol('JSCA_8867_8871');
        var t = fs
          ? [_s / fs, cs / fs]
          : us
          ? [ls / us, as / us]
          : is
          ? [os / is, rs / is]
          : [NaN, NaN];
        return (os = rs = is = ls = as = us = _s = cs = fs = 0), t;
      },
    };
  function Ss(t, n) {
    Symbol('JSCA_8873_8877'), (os += t), (rs += n), ++is;
  }
  function hs() {
    Symbol('JSCA_8878_8880'), (ss.point = ys);
  }
  function ys(t, n) {
    Symbol('JSCA_8881_8884'), (ss.point = bs), Ss((ts = t), (ns = n));
  }
  function bs(t, n) {
    Symbol('JSCA_8885_8891');
    var e = t - ts,
      o = n - ns,
      r = S_(e * e + o * o);
    (ls += (r * (ts + t)) / 2),
      (as += (r * (ns + n)) / 2),
      (us += r),
      Ss((ts = t), (ns = n));
  }
  function ms() {
    Symbol('JSCA_8892_8894'), (ss.point = Ss);
  }
  function ds() {
    Symbol('JSCA_8895_8897'), (ss.point = Cs);
  }
  function As() {
    Symbol('JSCA_8898_8900'), Js(Kf, Qf);
  }
  function Cs(t, n) {
    Symbol('JSCA_8901_8904'), (ss.point = Js), Ss((Kf = ts = t), (Qf = ns = n));
  }
  function Js(t, n) {
    Symbol('JSCA_8905_8915');
    var e = t - ts,
      o = n - ns,
      r = S_(e * e + o * o);
    (ls += (r * (ts + t)) / 2),
      (as += (r * (ns + n)) / 2),
      (us += r),
      (_s += (r = ns * t - ts * n) * (ts + t)),
      (cs += r * (ns + n)),
      (fs += 3 * r),
      Ss((ts = t), (ns = n));
  }
  var ps = ss;
  function gs(t) {
    Symbol('JSCA_8917_8919'), (this._context = t);
  }
  gs.prototype = {
    _radius: 4.5,
    pointRadius: function (t) {
      return Symbol('JSCA_8922_8924'), (this._radius = t), this;
    },
    polygonStart: function () {
      Symbol('JSCA_8925_8927'), (this._line = 0);
    },
    polygonEnd: function () {
      Symbol('JSCA_8928_8930'), (this._line = NaN);
    },
    lineStart: function () {
      Symbol('JSCA_8931_8933'), (this._point = 0);
    },
    lineEnd: function () {
      Symbol('JSCA_8934_8937'),
        0 === this._line && this._context.closePath(),
        (this._point = NaN);
    },
    point: function (t, n) {
      switch ((Symbol('JSCA_8938_8958'), this._point)) {
        case 0:
          this._context.moveTo(t, n), (this._point = 1);
          break;
        case 1:
          this._context.lineTo(t, n);
          break;
        default:
          this._context.moveTo(t + this._radius, n),
            this._context.arc(t, n, this._radius, 0, Qu);
      }
    },
    result: d_,
  };
  var vs,
    xs,
    ws,
    Ms,
    Ts,
    Es = new v(),
    Ns = {
      point: d_,
      lineStart: function () {
        Symbol('JSCA_8964_8966'), (Ns.point = ks);
      },
      lineEnd: function () {
        Symbol('JSCA_8967_8970'), vs && Ps(xs, ws), (Ns.point = d_);
      },
      polygonStart: function () {
        Symbol('JSCA_8971_8973'), (vs = !0);
      },
      polygonEnd: function () {
        Symbol('JSCA_8974_8976'), (vs = null);
      },
      result: function () {
        Symbol('JSCA_8977_8981');
        var t = +Es;
        return (Es = new v()), t;
      },
    };
  function ks(t, n) {
    Symbol('JSCA_8983_8986'), (Ns.point = Ps), (xs = Ms = t), (ws = Ts = n);
  }
  function Ps(t, n) {
    Symbol('JSCA_8987_8991'),
      (Ms -= t),
      (Ts -= n),
      Es.add(S_(Ms * Ms + Ts * Ts)),
      (Ms = t),
      (Ts = n);
  }
  var zs = Ns;
  let $s, Ds, Rs, Fs;
  class qs {
    constructor(t) {
      Symbol('JSCA_8995_8999'),
        (this._append =
          null == t
            ? Us
            : (function (t) {
                Symbol('JSCA_9061_9077');
                const n = Math.floor(t);
                if (!(n >= 0)) throw new RangeError(`invalid digits: ${t}`);
                if (n > 15) return Us;
                if (n !== $s) {
                  const t = 10 ** n;
                  ($s = n),
                    (Ds = function (n) {
                      Symbol('JSCA_9068_9074');
                      let e = 1;
                      this._ += n[0];
                      for (const o = n.length; e < o; ++e)
                        this._ += Math.round(arguments[e] * t) / t + n[e];
                    });
                }
                return Ds;
              })(t)),
        (this._radius = 4.5),
        (this._ = '');
    }
    pointRadius(t) {
      return Symbol('JSCA_9000_9003'), (this._radius = +t), this;
    }
    polygonStart() {
      Symbol('JSCA_9004_9006'), (this._line = 0);
    }
    polygonEnd() {
      Symbol('JSCA_9007_9009'), (this._line = NaN);
    }
    lineStart() {
      Symbol('JSCA_9010_9012'), (this._point = 0);
    }
    lineEnd() {
      Symbol('JSCA_9013_9016'),
        0 === this._line && (this._ += 'Z'),
        (this._point = NaN);
    }
    point(t, n) {
      switch ((Symbol('JSCA_9017_9047'), this._point)) {
        case 0:
          this._append`M${t},${n}`, (this._point = 1);
          break;
        case 1:
          this._append`L${t},${n}`;
          break;
        default:
          if (
            (this._append`M${t},${n}`,
            this._radius !== Rs || this._append !== Ds)
          ) {
            const t = this._radius,
              n = this._;
            (this._ = ''),
              this._append`m0,${t}a${t},${t} 0 1,1 0,${
                -2 * t
              }a${t},${t} 0 1,1 0,${2 * t}z`,
              (Rs = t),
              (Ds = this._append),
              (Fs = this._),
              (this._ = n);
          }
          this._ += Fs;
      }
    }
    result() {
      Symbol('JSCA_9048_9052');
      const t = this._;
      return (this._ = ''), t.length ? t : null;
    }
  }
  function Us(t) {
    Symbol('JSCA_9054_9060');
    let n = 1;
    this._ += t[0];
    for (const e = t.length; n < e; ++n) this._ += arguments[n] + t[n];
  }
  function Is(t) {
    return (
      Symbol('JSCA_9136_9143'),
      function (n) {
        Symbol('JSCA_9137_9142');
        var e = new Os();
        for (var o in t) e[o] = t[o];
        return (e.stream = n), e;
      }
    );
  }
  function Os() {
    Symbol('JSCA_9144_9144');
  }
  function Bs(t, n, e) {
    Symbol('JSCA_9166_9174');
    var o = t.clipExtent && t.clipExtent();
    return (
      t.scale(150).translate([0, 0]),
      null != o && t.clipExtent(null),
      v_(e, t.stream(es)),
      n(es.result()),
      null != o && t.clipExtent(o),
      t
    );
  }
  function Ys(t, n, e) {
    return (
      Symbol('JSCA_9175_9180'),
      Bs(
        t,
        function (e) {
          Symbol('JSCA_9176_9179');
          var o = n[1][0] - n[0][0],
            r = n[1][1] - n[0][1],
            i = Math.min(o / (e[1][0] - e[0][0]), r / (e[1][1] - e[0][1])),
            l = +n[0][0] + (o - i * (e[1][0] + e[0][0])) / 2,
            a = +n[0][1] + (r - i * (e[1][1] + e[0][1])) / 2;
          t.scale(150 * i).translate([l, a]);
        },
        e
      )
    );
  }
  function Ls(t, n, e) {
    return Symbol('JSCA_9181_9183'), Ys(t, [[0, 0], n], e);
  }
  function js(t, n, e) {
    return (
      Symbol('JSCA_9184_9189'),
      Bs(
        t,
        function (e) {
          Symbol('JSCA_9185_9188');
          var o = +n,
            r = o / (e[1][0] - e[0][0]),
            i = (o - r * (e[1][0] + e[0][0])) / 2,
            l = -r * e[0][1];
          t.scale(150 * r).translate([i, l]);
        },
        e
      )
    );
  }
  function Hs(t, n, e) {
    return (
      Symbol('JSCA_9190_9195'),
      Bs(
        t,
        function (e) {
          Symbol('JSCA_9191_9194');
          var o = +n,
            r = o / (e[1][1] - e[0][1]),
            i = -r * e[0][0],
            l = (o - r * (e[1][1] + e[0][1])) / 2;
          t.scale(150 * r).translate([i, l]);
        },
        e
      )
    );
  }
  Os.prototype = {
    constructor: Os,
    point: function (t, n) {
      Symbol('JSCA_9147_9149'), this.stream.point(t, n);
    },
    sphere: function () {
      Symbol('JSCA_9150_9152'), this.stream.sphere();
    },
    lineStart: function () {
      Symbol('JSCA_9153_9155'), this.stream.lineStart();
    },
    lineEnd: function () {
      Symbol('JSCA_9156_9158'), this.stream.lineEnd();
    },
    polygonStart: function () {
      Symbol('JSCA_9159_9161'), this.stream.polygonStart();
    },
    polygonEnd: function () {
      Symbol('JSCA_9162_9164'), this.stream.polygonEnd();
    },
  };
  var Xs = i_(30 * n_);
  function Gs(t, n) {
    return (
      Symbol('JSCA_9197_9199'),
      +n
        ? (function (t, n) {
            function e(o, r, i, l, a, u, _, c, f, s, S, h, y, b) {
              Symbol('JSCA_9209_9219');
              var m = _ - o,
                d = c - r,
                A = m * m + d * d;
              if (A > 4 * n && y--) {
                var C = l + s,
                  J = a + S,
                  p = u + h,
                  g = S_(C * C + J * J + p * p),
                  v = b_((p /= g)),
                  x =
                    e_(e_(p) - 1) < Gu || e_(i - f) < Gu
                      ? (i + f) / 2
                      : r_(J, C),
                  w = t(x, v),
                  M = w[0],
                  T = w[1],
                  E = M - o,
                  N = T - r,
                  k = d * E - m * N;
                ((k * k) / A > n ||
                  e_((m * E + d * N) / A - 0.5) > 0.3 ||
                  l * s + a * S + u * h < Xs) &&
                  (e(o, r, i, l, a, u, M, T, x, (C /= g), (J /= g), p, y, b),
                  b.point(M, T),
                  e(M, T, x, C, J, p, _, c, f, s, S, h, y, b));
              }
            }
            return (
              Symbol('JSCA_9208_9269'),
              function (n) {
                var o, r, i, l, a, u, _, c, f, s, S, h;
                Symbol('JSCA_9220_9268');
                var y = {
                  point: b,
                  lineStart: m,
                  lineEnd: A,
                  polygonStart: function () {
                    Symbol('JSCA_9226_9229'),
                      n.polygonStart(),
                      (y.lineStart = C);
                  },
                  polygonEnd: function () {
                    Symbol('JSCA_9230_9233'), n.polygonEnd(), (y.lineStart = m);
                  },
                };
                function b(e, o) {
                  Symbol('JSCA_9235_9238'), (e = t(e, o)), n.point(e[0], e[1]);
                }
                function m() {
                  Symbol('JSCA_9239_9243'),
                    (c = NaN),
                    (y.point = d),
                    n.lineStart();
                }
                function d(o, r) {
                  Symbol('JSCA_9244_9248');
                  var i = V_([o, r]),
                    l = t(o, r);
                  e(
                    c,
                    f,
                    _,
                    s,
                    S,
                    h,
                    (c = l[0]),
                    (f = l[1]),
                    (_ = o),
                    (s = i[0]),
                    (S = i[1]),
                    (h = i[2]),
                    16,
                    n
                  ),
                    n.point(c, f);
                }
                function A() {
                  Symbol('JSCA_9249_9252'), (y.point = b), n.lineEnd();
                }
                function C() {
                  Symbol('JSCA_9253_9257'), m(), (y.point = J), (y.lineEnd = p);
                }
                function J(t, n) {
                  Symbol('JSCA_9258_9261'),
                    d((o = t), n),
                    (r = c),
                    (i = f),
                    (l = s),
                    (a = S),
                    (u = h),
                    (y.point = d);
                }
                function p() {
                  Symbol('JSCA_9262_9266'),
                    e(c, f, _, s, S, h, r, i, o, l, a, u, 16, n),
                    (y.lineEnd = A),
                    A();
                }
                return y;
              }
            );
          })(t, n)
        : (function (t) {
            return (
              Symbol('JSCA_9200_9207'),
              Is({
                point: function (n, e) {
                  Symbol('JSCA_9202_9205'),
                    (n = t(n, e)),
                    this.stream.point(n[0], n[1]);
                },
              })
            );
          })(t)
    );
  }
  var Vs = Is({
    point: function (t, n) {
      Symbol('JSCA_9271_9273'), this.stream.point(t * n_, n * n_);
    },
  });
  function Ws(t, n, e, o, r, i) {
    if ((Symbol('JSCA_9294_9306'), !i))
      return (function (t, n, e, o, r) {
        function i(i, l) {
          return Symbol('JSCA_9284_9288'), [n + t * (i *= o), e - t * (l *= r)];
        }
        return (
          Symbol('JSCA_9283_9293'),
          (i.invert = function (i, l) {
            return (
              Symbol('JSCA_9289_9291'), [((i - n) / t) * o, ((e - l) / t) * r]
            );
          }),
          i
        );
      })(t, n, e, o, r);
    var l = i_(i),
      a = f_(i),
      u = l * t,
      _ = a * t,
      c = l / t,
      f = a / t,
      s = (a * e - l * n) / t,
      S = (a * n + l * e) / t;
    function h(t, i) {
      return (
        Symbol('JSCA_9297_9301'),
        [u * (t *= o) - _ * (i *= r) + n, e - _ * t - u * i]
      );
    }
    return (
      (h.invert = function (t, n) {
        return (
          Symbol('JSCA_9302_9304'),
          [o * (c * t - f * n + s), r * (S - f * t - c * n)]
        );
      }),
      h
    );
  }
  function Zs(t) {
    return (
      Symbol('JSCA_9307_9311'),
      Ks(function () {
        return Symbol('JSCA_9308_9310'), t;
      })()
    );
  }
  function Ks(t) {
    Symbol('JSCA_9312_9389');
    var n,
      e,
      o,
      r,
      i,
      l,
      a,
      u,
      _,
      c,
      f = 150,
      s = 480,
      S = 250,
      h = 0,
      y = 0,
      b = 0,
      m = 0,
      d = 0,
      A = 0,
      C = 1,
      J = 1,
      p = null,
      g = lf,
      v = null,
      x = qf,
      w = 0.5;
    function M(t) {
      return Symbol('JSCA_9314_9316'), u(t[0] * n_, t[1] * n_);
    }
    function T(t) {
      return (
        Symbol('JSCA_9317_9320'),
        (t = u.invert(t[0], t[1])) && [t[0] * t_, t[1] * t_]
      );
    }
    function E() {
      Symbol('JSCA_9372_9379');
      var t = Ws(f, 0, 0, C, J, A).apply(null, n(h, y)),
        o = Ws(f, s - t[0], S - t[1], C, J, A);
      return (
        (e = Bc(b, m, d)), (a = Ic(n, o)), (u = Ic(e, a)), (l = Gs(a, w)), N()
      );
    }
    function N() {
      return Symbol('JSCA_9380_9383'), (_ = c = null), M;
    }
    return (
      (M.stream = function (t) {
        return (
          Symbol('JSCA_9321_9323'),
          _ && c === t
            ? _
            : (_ = Vs(
                (function (t) {
                  return (
                    Symbol('JSCA_9275_9282'),
                    Is({
                      point: function (n, e) {
                        Symbol('JSCA_9277_9280');
                        var o = t(n, e);
                        return this.stream.point(o[0], o[1]);
                      },
                    })
                  );
                })(e)(g(l(x((c = t)))))
              ))
        );
      }),
      (M.preclip = function (t) {
        return (
          Symbol('JSCA_9324_9326'),
          arguments.length ? ((g = t), (p = void 0), N()) : g
        );
      }),
      (M.postclip = function (t) {
        return (
          Symbol('JSCA_9327_9329'),
          arguments.length ? ((x = t), (v = o = r = i = null), N()) : x
        );
      }),
      (M.clipAngle = function (t) {
        return (
          Symbol('JSCA_9330_9332'),
          arguments.length
            ? ((g = +t ? af((p = t * n_)) : ((p = null), lf)), N())
            : p * t_
        );
      }),
      (M.clipExtent = function (t) {
        return (
          Symbol('JSCA_9333_9335'),
          arguments.length
            ? ((x =
                null == t
                  ? ((v = o = r = i = null), qf)
                  : hf(
                      (v = +t[0][0]),
                      (o = +t[0][1]),
                      (r = +t[1][0]),
                      (i = +t[1][1])
                    )),
              N())
            : null == v
            ? null
            : [
                [v, o],
                [r, i],
              ]
        );
      }),
      (M.scale = function (t) {
        return Symbol('JSCA_9336_9338'), arguments.length ? ((f = +t), E()) : f;
      }),
      (M.translate = function (t) {
        return (
          Symbol('JSCA_9339_9341'),
          arguments.length ? ((s = +t[0]), (S = +t[1]), E()) : [s, S]
        );
      }),
      (M.center = function (t) {
        return (
          Symbol('JSCA_9342_9344'),
          arguments.length
            ? ((h = (t[0] % 360) * n_), (y = (t[1] % 360) * n_), E())
            : [h * t_, y * t_]
        );
      }),
      (M.rotate = function (t) {
        return (
          Symbol('JSCA_9345_9347'),
          arguments.length
            ? ((b = (t[0] % 360) * n_),
              (m = (t[1] % 360) * n_),
              (d = t.length > 2 ? (t[2] % 360) * n_ : 0),
              E())
            : [b * t_, m * t_, d * t_]
        );
      }),
      (M.angle = function (t) {
        return (
          Symbol('JSCA_9348_9350'),
          arguments.length ? ((A = (t % 360) * n_), E()) : A * t_
        );
      }),
      (M.reflectX = function (t) {
        return (
          Symbol('JSCA_9351_9353'),
          arguments.length ? ((C = t ? -1 : 1), E()) : C < 0
        );
      }),
      (M.reflectY = function (t) {
        return (
          Symbol('JSCA_9354_9356'),
          arguments.length ? ((J = t ? -1 : 1), E()) : J < 0
        );
      }),
      (M.precision = function (t) {
        return (
          Symbol('JSCA_9357_9359'),
          arguments.length ? ((l = Gs(a, (w = t * t))), N()) : S_(w)
        );
      }),
      (M.fitExtent = function (t, n) {
        return Symbol('JSCA_9360_9362'), Ys(M, t, n);
      }),
      (M.fitSize = function (t, n) {
        return Symbol('JSCA_9363_9365'), Ls(M, t, n);
      }),
      (M.fitWidth = function (t, n) {
        return Symbol('JSCA_9366_9368'), js(M, t, n);
      }),
      (M.fitHeight = function (t, n) {
        return Symbol('JSCA_9369_9371'), Hs(M, t, n);
      }),
      function () {
        return (
          Symbol('JSCA_9384_9388'),
          (n = t.apply(this, arguments)),
          (M.invert = n.invert && T),
          E()
        );
      }
    );
  }
  function Qs(t) {
    Symbol('JSCA_9390_9396');
    var n = 0,
      e = Wu / 3,
      o = Ks(t),
      r = o(n, e);
    return (
      (r.parallels = function (t) {
        return (
          Symbol('JSCA_9392_9394'),
          arguments.length
            ? o((n = t[0] * n_), (e = t[1] * n_))
            : [n * t_, e * t_]
        );
      }),
      r
    );
  }
  function tS(t, n) {
    Symbol('JSCA_9407_9421');
    var e = f_(t),
      o = (e + f_(n)) / 2;
    if (e_(o) < Gu)
      return (function (t) {
        Symbol('JSCA_9397_9406');
        var n = i_(t);
        function e(t, e) {
          return Symbol('JSCA_9399_9401'), [t * n, f_(e) / n];
        }
        return (
          (e.invert = function (t, e) {
            return Symbol('JSCA_9402_9404'), [t / n, b_(e * n)];
          }),
          e
        );
      })(t);
    var r = 1 + e * (2 * o - e),
      i = S_(r) / o;
    function l(t, n) {
      Symbol('JSCA_9411_9414');
      var e = S_(r - 2 * o * f_(n)) / o;
      return [e * f_((t *= o)), i - e * i_(t)];
    }
    return (
      (l.invert = function (t, n) {
        Symbol('JSCA_9415_9419');
        var e = i - n,
          l = r_(t, e_(e)) * s_(e);
        return (
          e * o < 0 && (l -= Wu * s_(t) * s_(e)),
          [l / o, b_((r - (t * t + e * e) * o * o) / (2 * o))]
        );
      }),
      l
    );
  }
  function nS() {
    return Symbol('JSCA_9422_9424'), Qs(tS).scale(155.424).center([0, 33.6442]);
  }
  function eS() {
    return (
      Symbol('JSCA_9425_9427'),
      nS()
        .parallels([29.5, 45.5])
        .scale(1070)
        .translate([480, 250])
        .rotate([96, 0])
        .center([-0.6, 38.7])
    );
  }
  function oS(t) {
    return (
      Symbol('JSCA_9510_9516'),
      function (n, e) {
        Symbol('JSCA_9511_9515');
        var o = i_(n),
          r = i_(e),
          i = t(o * r);
        return i === 1 / 0 ? [2, 0] : [i * r * f_(n), i * f_(e)];
      }
    );
  }
  function rS(t) {
    return (
      Symbol('JSCA_9517_9522'),
      function (n, e) {
        Symbol('JSCA_9518_9521');
        var o = S_(n * n + e * e),
          r = t(o),
          i = f_(r),
          l = i_(r);
        return [r_(n * i, o * l), b_(o && (e * i) / o)];
      }
    );
  }
  var iS = oS(function (t) {
    return Symbol('JSCA_9523_9525'), S_(2 / (1 + t));
  });
  iS.invert = rS(function (t) {
    return Symbol('JSCA_9526_9528'), 2 * b_(t / 2);
  });
  var lS = oS(function (t) {
    return Symbol('JSCA_9532_9534'), (t = y_(t)) && t / f_(t);
  });
  function aS(t, n) {
    return Symbol('JSCA_9541_9543'), [t, __(h_((Zu + n) / 2))];
  }
  function uS(t) {
    Symbol('JSCA_9550_9569');
    var n,
      e,
      o,
      r = Zs(t),
      i = r.center,
      l = r.scale,
      a = r.translate,
      u = r.clipExtent,
      _ = null;
    function c() {
      Symbol('JSCA_9564_9567');
      var i = Wu * l(),
        a = r(Hc(r.rotate()).invert([0, 0]));
      return u(
        null == _
          ? [
              [a[0] - i, a[1] - i],
              [a[0] + i, a[1] + i],
            ]
          : t === aS
          ? [
              [Math.max(a[0] - i, _), n],
              [Math.min(a[0] + i, e), o],
            ]
          : [
              [_, Math.max(a[1] - i, n)],
              [e, Math.min(a[1] + i, o)],
            ]
      );
    }
    return (
      (r.scale = function (t) {
        return Symbol('JSCA_9552_9554'), arguments.length ? (l(t), c()) : l();
      }),
      (r.translate = function (t) {
        return Symbol('JSCA_9555_9557'), arguments.length ? (a(t), c()) : a();
      }),
      (r.center = function (t) {
        return Symbol('JSCA_9558_9560'), arguments.length ? (i(t), c()) : i();
      }),
      (r.clipExtent = function (t) {
        return (
          Symbol('JSCA_9561_9563'),
          arguments.length
            ? (null == t
                ? (_ = n = e = o = null)
                : ((_ = +t[0][0]),
                  (n = +t[0][1]),
                  (e = +t[1][0]),
                  (o = +t[1][1])),
              c())
            : null == _
            ? null
            : [
                [_, n],
                [e, o],
              ]
        );
      }),
      c()
    );
  }
  function _S(t) {
    return Symbol('JSCA_9570_9572'), h_((Zu + t) / 2);
  }
  function cS(t, n) {
    Symbol('JSCA_9573_9591');
    var e = i_(t),
      o = t === n ? f_(t) : __(e / i_(n)) / __(_S(n) / _S(t)),
      r = (e * c_(_S(t), o)) / o;
    if (!o) return aS;
    function i(t, n) {
      Symbol('JSCA_9576_9584'),
        r > 0 ? n < -Zu + Gu && (n = -Zu + Gu) : n > Zu - Gu && (n = Zu - Gu);
      var e = r / c_(_S(n), o);
      return [e * f_(o * t), r - e * i_(o * t)];
    }
    return (
      (i.invert = function (t, n) {
        Symbol('JSCA_9585_9589');
        var e = r - n,
          i = s_(o) * S_(t * t + e * e),
          l = r_(t, e_(e)) * s_(e);
        return (
          e * o < 0 && (l -= Wu * s_(t) * s_(e)),
          [l / o, 2 * o_(c_(r / i, 1 / o)) - Zu]
        );
      }),
      i
    );
  }
  function fS(t, n) {
    return Symbol('JSCA_9595_9597'), [t, n];
  }
  function sS(t, n) {
    Symbol('JSCA_9602_9615');
    var e = i_(t),
      o = t === n ? f_(t) : (e - i_(n)) / (n - t),
      r = e / o + t;
    if (e_(o) < Gu) return fS;
    function i(t, n) {
      Symbol('JSCA_9605_9608');
      var e = r - n,
        i = o * t;
      return [e * f_(i), r - e * i_(i)];
    }
    return (
      (i.invert = function (t, n) {
        Symbol('JSCA_9609_9613');
        var e = r - n,
          i = r_(t, e_(e)) * s_(e);
        return (
          e * o < 0 && (i -= Wu * s_(t) * s_(e)),
          [i / o, r - s_(o) * S_(t * t + e * e)]
        );
      }),
      i
    );
  }
  (lS.invert = rS(function (t) {
    return Symbol('JSCA_9535_9537'), t;
  })),
    (aS.invert = function (t, n) {
      return Symbol('JSCA_9544_9546'), [t, 2 * o_(a_(n)) - Zu];
    }),
    (fS.invert = fS);
  var SS = 1.340264,
    hS = -0.081106,
    yS = 893e-6,
    bS = 0.003796,
    mS = S_(3) / 2;
  function dS(t, n) {
    Symbol('JSCA_9620_9623');
    var e = b_(mS * f_(n)),
      o = e * e,
      r = o * o * o;
    return [
      (t * i_(e)) / (mS * (SS + 3 * hS * o + r * (7 * yS + 9 * bS * o))),
      e * (SS + hS * o + r * (yS + bS * o)),
    ];
  }
  function AS(t, n) {
    Symbol('JSCA_9637_9640');
    var e = i_(n),
      o = i_(t) * e;
    return [(e * f_(t)) / o, f_(n) / o];
  }
  function CS(t, n) {
    Symbol('JSCA_9714_9717');
    var e = n * n,
      o = e * e;
    return [
      t *
        (0.8707 -
          0.131979 * e +
          o * (o * (0.003971 * e - 0.001529 * o) - 0.013791)),
      n *
        (1.007226 +
          e * (0.015085 + o * (0.028874 * e - 0.044475 - 0.005916 * o))),
    ];
  }
  function JS(t, n) {
    return Symbol('JSCA_9729_9731'), [i_(n) * f_(t), f_(n)];
  }
  function pS(t, n) {
    Symbol('JSCA_9736_9739');
    var e = i_(n),
      o = 1 + i_(t) * e;
    return [(e * f_(t)) / o, f_(n) / o];
  }
  function gS(t, n) {
    return Symbol('JSCA_9746_9748'), [__(h_((Zu + n) / 2)), -t];
  }
  function vS(t, n) {
    return Symbol('JSCA_9762_9764'), t.parent === n.parent ? 1 : 2;
  }
  function xS(t, n) {
    return Symbol('JSCA_9768_9770'), t + n.x;
  }
  function wS(t, n) {
    return Symbol('JSCA_9774_9776'), Math.max(t, n.y);
  }
  function MS(t) {
    Symbol('JSCA_9822_9826');
    var n = 0,
      e = t.children,
      o = e && e.length;
    if (o) for (; --o >= 0; ) n += e[o].value;
    else n = 1;
    t.value = n;
  }
  function TS(t, n) {
    Symbol('JSCA_9956_9975'),
      t instanceof Map
        ? ((t = [void 0, t]), void 0 === n && (n = NS))
        : void 0 === n && (n = ES);
    for (var e, o, r, i, l, a = new zS(t), u = [a]; (e = u.pop()); )
      if ((r = n(e.data)) && (l = (r = Array.from(r)).length))
        for (e.children = r, i = l - 1; i >= 0; --i)
          u.push((o = r[i] = new zS(r[i]))),
            (o.parent = e),
            (o.depth = e.depth + 1);
    return a.eachBefore(PS);
  }
  function ES(t) {
    return Symbol('JSCA_9979_9981'), t.children;
  }
  function NS(t) {
    return Symbol('JSCA_9982_9984'), Array.isArray(t) ? t[1] : null;
  }
  function kS(t) {
    Symbol('JSCA_9985_9988'),
      void 0 !== t.data.value && (t.value = t.data.value),
      (t.data = t.data.data);
  }
  function PS(t) {
    Symbol('JSCA_9989_9992');
    var n = 0;
    do {
      t.height = n;
    } while ((t = t.parent) && t.height < ++n);
  }
  function zS(t) {
    Symbol('JSCA_9993_9997'),
      (this.data = t),
      (this.depth = this.height = 0),
      (this.parent = null);
  }
  function $S(t) {
    return Symbol('JSCA_10015_10017'), null == t ? null : DS(t);
  }
  function DS(t) {
    if ((Symbol('JSCA_10018_10021'), 'function' != typeof t)) throw new Error();
    return t;
  }
  function RS() {
    return Symbol('JSCA_10022_10024'), 0;
  }
  function FS(t) {
    return (
      Symbol('JSCA_10025_10029'),
      function () {
        return Symbol('JSCA_10026_10028'), t;
      }
    );
  }
  (dS.invert = function (t, n) {
    Symbol('JSCA_9624_9633');
    for (
      var e, o = n, r = o * o, i = r * r * r, l = 0;
      l < 12 &&
      ((i =
        (r =
          (o -= e =
            (o * (SS + hS * r + i * (yS + bS * r)) - n) /
            (SS + 3 * hS * r + i * (7 * yS + 9 * bS * r))) * o) *
        r *
        r),
      !(e_(e) < Vu));
      ++l
    );
    return [
      (mS * t * (SS + 3 * hS * r + i * (7 * yS + 9 * bS * r))) / i_(o),
      b_(f_(o) / mS),
    ];
  }),
    (AS.invert = rS(o_)),
    (CS.invert = function (t, n) {
      Symbol('JSCA_9718_9725');
      var e,
        o = n,
        r = 25;
      do {
        var i = o * o,
          l = i * i;
        o -= e =
          (o *
            (1.007226 +
              i * (0.015085 + l * (0.028874 * i - 0.044475 - 0.005916 * l))) -
            n) /
          (1.007226 +
            i * (0.045255 + l * (0.259866 * i - 0.311325 - 0.005916 * 11 * l)));
      } while (e_(e) > Gu && --r > 0);
      return [
        t /
          (0.8707 +
            (i = o * o) *
              (i * (i * i * i * (0.003971 - 0.001529 * i) - 0.013791) -
                0.131979)),
        o,
      ];
    }),
    (JS.invert = rS(b_)),
    (pS.invert = rS(function (t) {
      return Symbol('JSCA_9740_9742'), 2 * o_(t);
    })),
    (gS.invert = function (t, n) {
      return Symbol('JSCA_9749_9751'), [-n, 2 * o_(a_(t)) - Zu];
    }),
    (zS.prototype = TS.prototype =
      {
        constructor: zS,
        count: function () {
          return Symbol('JSCA_9827_9829'), this.eachAfter(MS);
        },
        each: function (t, n) {
          Symbol('JSCA_9830_9836');
          let e = -1;
          for (const o of this) t.call(n, o, ++e, this);
          return this;
        },
        eachAfter: function (t, n) {
          Symbol('JSCA_9849_9863');
          for (var e, o, r, i = this, l = [i], a = [], u = -1; (i = l.pop()); )
            if ((a.push(i), (e = i.children)))
              for (o = 0, r = e.length; o < r; ++o) l.push(e[o]);
          for (; (i = a.pop()); ) t.call(n, i, ++u, this);
          return this;
        },
        eachBefore: function (t, n) {
          Symbol('JSCA_9837_9848');
          for (var e, o, r = this, i = [r], l = -1; (r = i.pop()); )
            if ((t.call(n, r, ++l, this), (e = r.children)))
              for (o = e.length - 1; o >= 0; --o) i.push(e[o]);
          return this;
        },
        find: function (t, n) {
          Symbol('JSCA_9864_9871');
          let e = -1;
          for (const o of this) if (t.call(n, o, ++e, this)) return o;
        },
        sum: function (t) {
          return (
            Symbol('JSCA_9872_9878'),
            this.eachAfter(function (n) {
              Symbol('JSCA_9873_9877');
              for (
                var e = +t(n.data) || 0, o = n.children, r = o && o.length;
                --r >= 0;

              )
                e += o[r].value;
              n.value = e;
            })
          );
        },
        sort: function (t) {
          return (
            Symbol('JSCA_9879_9885'),
            this.eachBefore(function (n) {
              Symbol('JSCA_9880_9884'), n.children && n.children.sort(t);
            })
          );
        },
        path: function (t) {
          Symbol('JSCA_9886_9898');
          for (
            var n = this,
              e = (function (t, n) {
                if ((Symbol('JSCA_9899_9910'), t === n)) return t;
                var e = t.ancestors(),
                  o = n.ancestors(),
                  r = null;
                (t = e.pop()), (n = o.pop());
                for (; t === n; ) (r = t), (t = e.pop()), (n = o.pop());
                return r;
              })(n, t),
              o = [n];
            n !== e;

          )
            (n = n.parent), o.push(n);
          for (var r = o.length; t !== e; ) o.splice(r, 0, t), (t = t.parent);
          return o;
        },
        ancestors: function () {
          Symbol('JSCA_9911_9917');
          for (var t = this, n = [t]; (t = t.parent); ) n.push(t);
          return n;
        },
        descendants: function () {
          return Symbol('JSCA_9918_9920'), Array.from(this);
        },
        leaves: function () {
          Symbol('JSCA_9921_9929');
          var t = [];
          return (
            this.eachBefore(function (n) {
              Symbol('JSCA_9923_9927'), n.children || t.push(n);
            }),
            t
          );
        },
        links: function () {
          Symbol('JSCA_9930_9941');
          var t = this,
            n = [];
          return (
            t.each(function (e) {
              Symbol('JSCA_9932_9939'),
                e !== t && n.push({ source: e.parent, target: e });
            }),
            n
          );
        },
        copy: function () {
          return Symbol('JSCA_9976_9978'), TS(this).eachBefore(kS);
        },
        [Symbol.iterator]: function* () {
          Symbol('JSCA_9942_9955');
          var t,
            n,
            e,
            o,
            r = this,
            i = [r];
          do {
            for (t = i.reverse(), i = []; (r = t.pop()); )
              if ((yield r, (n = r.children)))
                for (e = 0, o = n.length; e < o; ++e) i.push(n[e]);
          } while (i.length);
        },
      });
  const qS = 4294967296;
  function US() {
    Symbol('JSCA_10033_10036');
    let t = 1;
    return () => (t = (1664525 * t + 1013904223) % qS) / qS;
  }
  function IS(t, n) {
    Symbol('JSCA_10053_10060');
    for (
      var e,
        o,
        r = 0,
        i = (t = (function (t, n) {
          Symbol('JSCA_10040_10049');
          let e,
            o,
            r = t.length;
          for (; r; )
            (o = (n() * r--) | 0), (e = t[r]), (t[r] = t[o]), (t[o] = e);
          return t;
        })(Array.from(t), n)).length,
        l = [];
      r < i;

    )
      (e = t[r]), o && YS(o, e) ? ++r : ((o = jS((l = OS(l, e)))), (r = 0));
    return o;
  }
  function OS(t, n) {
    var e, o;
    if ((Symbol('JSCA_10061_10077'), LS(n, t))) return [n];
    for (e = 0; e < t.length; ++e)
      if (BS(n, t[e]) && LS(HS(t[e], n), t)) return [t[e], n];
    for (e = 0; e < t.length - 1; ++e)
      for (o = e + 1; o < t.length; ++o)
        if (
          BS(HS(t[e], t[o]), n) &&
          BS(HS(t[e], n), t[o]) &&
          BS(HS(t[o], n), t[e]) &&
          LS(XS(t[e], t[o], n), t)
        )
          return [t[e], t[o], n];
    throw new Error();
  }
  function BS(t, n) {
    Symbol('JSCA_10078_10081');
    var e = t.r - n.r,
      o = n.x - t.x,
      r = n.y - t.y;
    return e < 0 || e * e < o * o + r * r;
  }
  function YS(t, n) {
    Symbol('JSCA_10082_10085');
    var e = t.r - n.r + 1e-9 * Math.max(t.r, n.r, 1),
      o = n.x - t.x,
      r = n.y - t.y;
    return e > 0 && e * e > o * o + r * r;
  }
  function LS(t, n) {
    Symbol('JSCA_10086_10093');
    for (var e = 0; e < n.length; ++e) if (!YS(t, n[e])) return !1;
    return !0;
  }
  function jS(t) {
    switch ((Symbol('JSCA_10094_10103'), t.length)) {
      case 1:
        return (function (t) {
          return Symbol('JSCA_10104_10110'), { x: t.x, y: t.y, r: t.r };
        })(t[0]);
      case 2:
        return HS(t[0], t[1]);
      case 3:
        return XS(t[0], t[1], t[2]);
    }
  }
  function HS(t, n) {
    Symbol('JSCA_10111_10118');
    var e = t.x,
      o = t.y,
      r = t.r,
      i = n.x,
      l = n.y,
      a = n.r,
      u = i - e,
      _ = l - o,
      c = a - r,
      f = Math.sqrt(u * u + _ * _);
    return {
      x: (e + i + (u / f) * c) / 2,
      y: (o + l + (_ / f) * c) / 2,
      r: (f + r + a) / 2,
    };
  }
  function XS(t, n, e) {
    Symbol('JSCA_10119_10126');
    var o = t.x,
      r = t.y,
      i = t.r,
      l = n.x,
      a = n.y,
      u = n.r,
      _ = e.x,
      c = e.y,
      f = e.r,
      s = o - l,
      S = o - _,
      h = r - a,
      y = r - c,
      b = u - i,
      m = f - i,
      d = o * o + r * r - i * i,
      A = d - l * l - a * a + u * u,
      C = d - _ * _ - c * c + f * f,
      J = S * h - s * y,
      p = (h * C - y * A) / (2 * J) - o,
      g = (y * b - h * m) / J,
      v = (S * A - s * C) / (2 * J) - r,
      x = (s * m - S * b) / J,
      w = g * g + x * x - 1,
      M = 2 * (i + p * g + v * x),
      T = p * p + v * v - i * i,
      E = -(Math.abs(w) > 1e-6
        ? (M + Math.sqrt(M * M - 4 * w * T)) / (2 * w)
        : T / M);
    return { x: o + p + g * E, y: r + v + x * E, r: E };
  }
  function GS(t, n, e) {
    Symbol('JSCA_10127_10147');
    var o,
      r,
      i,
      l,
      a = t.x - n.x,
      u = t.y - n.y,
      _ = a * a + u * u;
    _
      ? ((r = n.r + e.r),
        (r *= r),
        (l = t.r + e.r),
        r > (l *= l)
          ? ((o = (_ + l - r) / (2 * _)),
            (i = Math.sqrt(Math.max(0, l / _ - o * o))),
            (e.x = t.x - o * a - i * u),
            (e.y = t.y - o * u + i * a))
          : ((o = (_ + r - l) / (2 * _)),
            (i = Math.sqrt(Math.max(0, r / _ - o * o))),
            (e.x = n.x + o * a - i * u),
            (e.y = n.y + o * u + i * a)))
      : ((e.x = n.x + e.r), (e.y = n.y));
  }
  function VS(t, n) {
    Symbol('JSCA_10148_10151');
    var e = t.r + n.r - 1e-6,
      o = n.x - t.x,
      r = n.y - t.y;
    return e > 0 && e * e > o * o + r * r;
  }
  function WS(t) {
    Symbol('JSCA_10152_10155');
    var n = t._,
      e = t.next._,
      o = n.r + e.r,
      r = (n.x * e.r + e.x * n.r) / o,
      i = (n.y * e.r + e.y * n.r) / o;
    return r * r + i * i;
  }
  function ZS(t) {
    Symbol('JSCA_10156_10160'),
      (this._ = t),
      (this.next = null),
      (this.previous = null);
  }
  function KS(t, n) {
    if (
      (Symbol('JSCA_10161_10205'),
      !(i = (t = (function (t) {
        return (
          Symbol('JSCA_10037_10039'),
          'object' == typeof t && 'length' in t ? t : Array.from(t)
        );
      })(t)).length))
    )
      return 0;
    var e, o, r, i, l, a, u, _, c, f, s;
    if ((((e = t[0]).x = 0), (e.y = 0), !(i > 1))) return e.r;
    if (((o = t[1]), (e.x = -o.r), (o.x = e.r), (o.y = 0), !(i > 2)))
      return e.r + o.r;
    GS(o, e, (r = t[2])),
      (e = new ZS(e)),
      (o = new ZS(o)),
      (r = new ZS(r)),
      (e.next = r.previous = o),
      (o.next = e.previous = r),
      (r.next = o.previous = e);
    t: for (u = 3; u < i; ++u) {
      GS(e._, o._, (r = t[u])),
        (r = new ZS(r)),
        (_ = o.next),
        (c = e.previous),
        (f = o._.r),
        (s = e._.r);
      do {
        if (f <= s) {
          if (VS(_._, r._)) {
            (o = _), (e.next = o), (o.previous = e), --u;
            continue t;
          }
          (f += _._.r), (_ = _.next);
        } else {
          if (VS(c._, r._)) {
            ((e = c).next = o), (o.previous = e), --u;
            continue t;
          }
          (s += c._.r), (c = c.previous);
        }
      } while (_ !== c.next);
      for (
        r.previous = e, r.next = o, e.next = o.previous = o = r, l = WS(e);
        (r = r.next) !== o;

      )
        (a = WS(r)) < l && ((e = r), (l = a));
      o = e.next;
    }
    for (e = [o._], r = o; (r = r.next) !== o; ) e.push(r._);
    for (r = IS(e, n), u = 0; u < i; ++u) ((e = t[u]).x -= r.x), (e.y -= r.y);
    return r.r;
  }
  function QS(t) {
    return Symbol('JSCA_10210_10212'), Math.sqrt(t.value);
  }
  function th(t) {
    return (
      Symbol('JSCA_10236_10242'),
      function (n) {
        Symbol('JSCA_10237_10241'),
          n.children || (n.r = Math.max(0, +t(n) || 0));
      }
    );
  }
  function nh(t, n, e) {
    return (
      Symbol('JSCA_10243_10253'),
      function (o) {
        if ((Symbol('JSCA_10244_10252'), (r = o.children))) {
          var r,
            i,
            l,
            a = r.length,
            u = t(o) * n || 0;
          if (u) for (i = 0; i < a; ++i) r[i].r += u;
          if (((l = KS(r, e)), u)) for (i = 0; i < a; ++i) r[i].r -= u;
          o.r = l + u;
        }
      }
    );
  }
  function eh(t) {
    return (
      Symbol('JSCA_10254_10263'),
      function (n) {
        Symbol('JSCA_10255_10262');
        var e = n.parent;
        (n.r *= t), e && ((n.x = e.x + t * n.x), (n.y = e.y + t * n.y));
      }
    );
  }
  function oh(t) {
    Symbol('JSCA_10264_10269'),
      (t.x0 = Math.round(t.x0)),
      (t.y0 = Math.round(t.y0)),
      (t.x1 = Math.round(t.x1)),
      (t.y1 = Math.round(t.y1));
  }
  function rh(t, n, e, o, r) {
    Symbol('JSCA_10270_10276');
    for (
      var i,
        l = t.children,
        a = -1,
        u = l.length,
        _ = t.value && (o - n) / t.value;
      ++a < u;

    )
      ((i = l[a]).y0 = e), (i.y1 = r), (i.x0 = n), (i.x1 = n += i.value * _);
  }
  var ih = { depth: -1 },
    lh = {},
    ah = {};
  function uh(t) {
    return Symbol('JSCA_10316_10318'), t.id;
  }
  function _h(t) {
    return Symbol('JSCA_10319_10321'), t.parentId;
  }
  function ch(t) {
    Symbol('JSCA_10401_10406');
    let n = t.length;
    if (n < 2) return '';
    for (; --n > 1 && !fh(t, n); );
    return t.slice(0, n);
  }
  function fh(t, n) {
    if ((Symbol('JSCA_10407_10414'), '/' === t[n])) {
      let e = 0;
      for (; n > 0 && '\\' === t[--n]; ) ++e;
      if (!(1 & e)) return !0;
    }
    return !1;
  }
  function sh(t, n) {
    return Symbol('JSCA_10415_10417'), t.parent === n.parent ? 1 : 2;
  }
  function Sh(t) {
    Symbol('JSCA_10418_10421');
    var n = t.children;
    return n ? n[0] : t.t;
  }
  function hh(t) {
    Symbol('JSCA_10422_10425');
    var n = t.children;
    return n ? n[n.length - 1] : t.t;
  }
  function yh(t, n, e) {
    Symbol('JSCA_10426_10433');
    var o = e / (n.i - t.i);
    (n.c -= o), (n.s += e), (t.c += o), (n.z += e), (n.m += e);
  }
  function bh(t, n, e) {
    return Symbol('JSCA_10443_10445'), t.a.parent === n.parent ? t.a : e;
  }
  function mh(t, n) {
    Symbol('JSCA_10446_10458'),
      (this._ = t),
      (this.parent = null),
      (this.children = null),
      (this.A = null),
      (this.a = this),
      (this.z = 0),
      (this.m = 0),
      (this.c = 0),
      (this.s = 0),
      (this.t = null),
      (this.i = n);
  }
  function dh(t, n, e, o, r) {
    Symbol('JSCA_10560_10566');
    for (
      var i,
        l = t.children,
        a = -1,
        u = l.length,
        _ = t.value && (r - e) / t.value;
      ++a < u;

    )
      ((i = l[a]).x0 = n), (i.x1 = o), (i.y0 = e), (i.y1 = e += i.value * _);
  }
  mh.prototype = Object.create(zS.prototype);
  var Ah = (1 + Math.sqrt(5)) / 2;
  function Ch(t, n, e, o, r, i) {
    Symbol('JSCA_10568_10598');
    for (
      var l,
        a,
        u,
        _,
        c,
        f,
        s,
        S,
        h,
        y,
        b,
        m = [],
        d = n.children,
        A = 0,
        C = 0,
        J = d.length,
        p = n.value;
      A < J;

    ) {
      (u = r - e), (_ = i - o);
      do {
        c = d[C++].value;
      } while (!c && C < J);
      for (
        f = s = c,
          b = c * c * (y = Math.max(_ / u, u / _) / (p * t)),
          h = Math.max(s / b, b / f);
        C < J;
        ++C
      ) {
        if (
          ((c += a = d[C].value),
          a < f && (f = a),
          a > s && (s = a),
          (b = c * c * y),
          (S = Math.max(s / b, b / f)) > h)
        ) {
          c -= a;
          break;
        }
        h = S;
      }
      m.push((l = { value: c, dice: u < _, children: d.slice(A, C) })),
        l.dice
          ? rh(l, e, o, r, p ? (o += (_ * c) / p) : i)
          : dh(l, e, o, p ? (e += (u * c) / p) : r, i),
        (p -= c),
        (A = C);
    }
    return m;
  }
  var Jh = (function t(n) {
    function e(t, e, o, r, i) {
      Symbol('JSCA_10600_10602'), Ch(n, t, e, o, r, i);
    }
    return (
      Symbol('JSCA_10599_10607'),
      (e.ratio = function (n) {
        return Symbol('JSCA_10603_10605'), t((n = +n) > 1 ? n : 1);
      }),
      e
    );
  })(Ah);
  var ph = (function t(n) {
    function e(t, e, o, r, i) {
      if ((Symbol('JSCA_10705_10718'), (l = t._squarify) && l.ratio === n))
        for (var l, a, u, _, c, f = -1, s = l.length, S = t.value; ++f < s; ) {
          for (
            u = (a = l[f]).children, _ = a.value = 0, c = u.length;
            _ < c;
            ++_
          )
            a.value += u[_].value;
          a.dice
            ? rh(a, e, o, r, S ? (o += ((i - o) * a.value) / S) : i)
            : dh(a, e, o, S ? (e += ((r - e) * a.value) / S) : r, i),
            (S -= a.value);
        }
      else (t._squarify = l = Ch(n, t, e, o, r, i)), (l.ratio = n);
    }
    return (
      Symbol('JSCA_10704_10723'),
      (e.ratio = function (n) {
        return Symbol('JSCA_10719_10721'), t((n = +n) > 1 ? n : 1);
      }),
      e
    );
  })(Ah);
  function gh(t, n, e) {
    return (
      Symbol('JSCA_10744_10746'),
      (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
    );
  }
  function vh(t, n) {
    return Symbol('JSCA_10747_10749'), t[0] - n[0] || t[1] - n[1];
  }
  function xh(t) {
    Symbol('JSCA_10750_10758');
    const n = t.length,
      e = [0, 1];
    let o,
      r = 2;
    for (o = 2; o < n; ++o) {
      for (; r > 1 && gh(t[e[r - 2]], t[e[r - 1]], t[o]) <= 0; ) --r;
      e[r++] = o;
    }
    return e.slice(0, r);
  }
  var wh = Math.random,
    Mh = (function t(n) {
      function e(t, e) {
        return (
          Symbol('JSCA_10796_10803'),
          (t = null == t ? 0 : +t),
          (e = null == e ? 1 : +e),
          1 === arguments.length ? ((e = t), (t = 0)) : (e -= t),
          function () {
            return Symbol('JSCA_10800_10802'), n() * e + t;
          }
        );
      }
      return Symbol('JSCA_10795_10806'), (e.source = t), e;
    })(wh),
    Th = (function t(n) {
      function e(t, e) {
        return (
          Symbol('JSCA_10808_10815'),
          arguments.length < 2 && ((e = t), (t = 0)),
          (t = Math.floor(t)),
          (e = Math.floor(e) - t),
          function () {
            return Symbol('JSCA_10812_10814'), Math.floor(n() * e + t);
          }
        );
      }
      return Symbol('JSCA_10807_10818'), (e.source = t), e;
    })(wh),
    Eh = (function t(n) {
      function e(t, e) {
        var o, r;
        return (
          Symbol('JSCA_10820_10833'),
          (t = null == t ? 0 : +t),
          (e = null == e ? 1 : +e),
          function () {
            var i;
            if ((Symbol('JSCA_10824_10832'), null != o)) (i = o), (o = null);
            else
              do {
                (o = 2 * n() - 1), (i = 2 * n() - 1), (r = o * o + i * i);
              } while (!r || r > 1);
            return t + e * i * Math.sqrt((-2 * Math.log(r)) / r);
          }
        );
      }
      return Symbol('JSCA_10819_10836'), (e.source = t), e;
    })(wh),
    Nh = (function t(n) {
      Symbol('JSCA_10837_10847');
      var e = Eh.source(n);
      function o() {
        Symbol('JSCA_10839_10844');
        var t = e.apply(this, arguments);
        return function () {
          return Symbol('JSCA_10841_10843'), Math.exp(t());
        };
      }
      return (o.source = t), o;
    })(wh),
    kh = (function t(n) {
      function e(t) {
        return (
          Symbol('JSCA_10849_10855'),
          (t = +t) <= 0
            ? () => 0
            : function () {
                Symbol('JSCA_10851_10854');
                for (var e = 0, o = t; o > 1; --o) e += n();
                return e + o * n();
              }
        );
      }
      return Symbol('JSCA_10848_10858'), (e.source = t), e;
    })(wh),
    Ph = (function t(n) {
      Symbol('JSCA_10859_10870');
      var e = kh.source(n);
      function o(t) {
        if ((Symbol('JSCA_10861_10867'), 0 == (t = +t))) return n;
        var o = e(t);
        return function () {
          return Symbol('JSCA_10864_10866'), o() / t;
        };
      }
      return (o.source = t), o;
    })(wh),
    zh = (function t(n) {
      function e(t) {
        return (
          Symbol('JSCA_10872_10876'),
          function () {
            return Symbol('JSCA_10873_10875'), -Math.log1p(-n()) / t;
          }
        );
      }
      return Symbol('JSCA_10871_10879'), (e.source = t), e;
    })(wh),
    $h = (function t(n) {
      function e(t) {
        if ((Symbol('JSCA_10881_10887'), (t = +t) < 0))
          throw new RangeError('invalid alpha');
        return (
          (t = 1 / -t),
          function () {
            return Symbol('JSCA_10884_10886'), Math.pow(1 - n(), t);
          }
        );
      }
      return Symbol('JSCA_10880_10890'), (e.source = t), e;
    })(wh),
    Dh = (function t(n) {
      function e(t) {
        if ((Symbol('JSCA_10892_10897'), (t = +t) < 0 || t > 1))
          throw new RangeError('invalid p');
        return function () {
          return Symbol('JSCA_10894_10896'), Math.floor(n() + t);
        };
      }
      return Symbol('JSCA_10891_10900'), (e.source = t), e;
    })(wh),
    Rh = (function t(n) {
      function e(t) {
        if ((Symbol('JSCA_10902_10910'), (t = +t) < 0 || t > 1))
          throw new RangeError('invalid p');
        return 0 === t
          ? () => 1 / 0
          : 1 === t
          ? () => 1
          : ((t = Math.log1p(-t)),
            function () {
              return (
                Symbol('JSCA_10907_10909'), 1 + Math.floor(Math.log1p(-n()) / t)
              );
            });
      }
      return Symbol('JSCA_10901_10913'), (e.source = t), e;
    })(wh),
    Fh = (function t(n) {
      Symbol('JSCA_10914_10935');
      var e = Eh.source(n)();
      function o(t, o) {
        if ((Symbol('JSCA_10916_10932'), (t = +t) < 0))
          throw new RangeError('invalid k');
        if (0 === t) return () => 0;
        if (((o = null == o ? 1 : +o), 1 === t))
          return () => -Math.log1p(-n()) * o;
        var r = (t < 1 ? t + 1 : t) - 1 / 3,
          i = 1 / (3 * Math.sqrt(r)),
          l = t < 1 ? () => Math.pow(n(), 1 / t) : () => 1;
        return function () {
          Symbol('JSCA_10922_10931');
          do {
            do {
              var t = e(),
                a = 1 + i * t;
            } while (a <= 0);
            a *= a * a;
            var u = 1 - n();
          } while (
            u >= 1 - 0.0331 * t * t * t * t &&
            Math.log(u) >= 0.5 * t * t + r * (1 - a + Math.log(a))
          );
          return r * a * l() * o;
        };
      }
      return (o.source = t), o;
    })(wh),
    qh = (function t(n) {
      Symbol('JSCA_10936_10947');
      var e = Fh.source(n);
      function o(t, n) {
        Symbol('JSCA_10938_10944');
        var o = e(t),
          r = e(n);
        return function () {
          Symbol('JSCA_10940_10943');
          var t = o();
          return 0 === t ? 0 : t / (t + r());
        };
      }
      return (o.source = t), o;
    })(wh),
    Uh = (function t(n) {
      Symbol('JSCA_10948_10974');
      var e = Rh.source(n),
        o = qh.source(n);
      function r(t, n) {
        return (
          Symbol('JSCA_10950_10971'),
          (t = +t),
          (n = +n) >= 1
            ? () => t
            : n <= 0
            ? () => 0
            : function () {
                Symbol('JSCA_10954_10970');
                for (
                  var r = 0, i = t, l = n;
                  i * l > 16 && i * (1 - l) > 16;

                ) {
                  var a = Math.floor((i + 1) * l),
                    u = o(a, i - a + 1)();
                  u <= l
                    ? ((r += a), (i -= a), (l = (l - u) / (1 - u)))
                    : ((i = a - 1), (l /= u));
                }
                for (
                  var _ = l < 0.5, c = e(_ ? l : 1 - l), f = c(), s = 0;
                  f <= i;
                  ++s
                )
                  f += c();
                return r + (_ ? s : i - s);
              }
        );
      }
      return (r.source = t), r;
    })(wh),
    Ih = (function t(n) {
      function e(t, e, o) {
        var r;
        return (
          Symbol('JSCA_10976_10989'),
          0 == (t = +t)
            ? (r = (t) => -Math.log(t))
            : ((t = 1 / t), (r = (n) => Math.pow(n, t))),
          (e = null == e ? 0 : +e),
          (o = null == o ? 1 : +o),
          function () {
            return Symbol('JSCA_10986_10988'), e + o * r(-Math.log1p(-n()));
          }
        );
      }
      return Symbol('JSCA_10975_10992'), (e.source = t), e;
    })(wh),
    Oh = (function t(n) {
      function e(t, e) {
        return (
          Symbol('JSCA_10994_11000'),
          (t = null == t ? 0 : +t),
          (e = null == e ? 1 : +e),
          function () {
            return Symbol('JSCA_10997_10999'), t + e * Math.tan(Math.PI * n());
          }
        );
      }
      return Symbol('JSCA_10993_11003'), (e.source = t), e;
    })(wh),
    Bh = (function t(n) {
      function e(t, e) {
        return (
          Symbol('JSCA_11005_11012'),
          (t = null == t ? 0 : +t),
          (e = null == e ? 1 : +e),
          function () {
            Symbol('JSCA_11008_11011');
            var o = n();
            return t + e * Math.log(o / (1 - o));
          }
        );
      }
      return Symbol('JSCA_11004_11015'), (e.source = t), e;
    })(wh),
    Yh = (function t(n) {
      Symbol('JSCA_11016_11033');
      var e = Fh.source(n),
        o = Uh.source(n);
      function r(t) {
        return (
          Symbol('JSCA_11018_11030'),
          function () {
            Symbol('JSCA_11019_11029');
            for (var r = 0, i = t; i > 16; ) {
              var l = Math.floor(0.875 * i),
                a = e(l)();
              if (a > i) return r + o(l - 1, i / a)();
              (r += l), (i -= a);
            }
            for (var u = -Math.log1p(-n()), _ = 0; u <= i; ++_)
              u -= Math.log1p(-n());
            return r + _;
          }
        );
      }
      return (r.source = t), r;
    })(wh);
  const Lh = 1 / 4294967296;
  function jh(t, n) {
    switch ((Symbol('JSCA_11041_11053'), arguments.length)) {
      case 0:
        break;
      case 1:
        this.range(t);
        break;
      default:
        this.range(n).domain(t);
    }
    return this;
  }
  function Hh(t, n) {
    switch ((Symbol('JSCA_11054_11071'), arguments.length)) {
      case 0:
        break;
      case 1:
        'function' == typeof t ? this.interpolator(t) : this.range(t);
        break;
      default:
        this.domain(t),
          'function' == typeof n ? this.interpolator(n) : this.range(n);
    }
    return this;
  }
  const Xh = Symbol('implicit');
  function Gh() {
    Symbol('JSCA_11073_11103');
    var t = new x(),
      n = [],
      e = [],
      o = Xh;
    function r(r) {
      Symbol('JSCA_11075_11082');
      let i = t.get(r);
      if (void 0 === i) {
        if (o !== Xh) return o;
        t.set(r, (i = n.push(r) - 1));
      }
      return e[i % e.length];
    }
    return (
      (r.domain = function (e) {
        if ((Symbol('JSCA_11083_11091'), !arguments.length)) return n.slice();
        (n = []), (t = new x());
        for (const o of e) t.has(o) || t.set(o, n.push(o) - 1);
        return r;
      }),
      (r.range = function (t) {
        return (
          Symbol('JSCA_11092_11094'),
          arguments.length ? ((e = Array.from(t)), r) : e.slice()
        );
      }),
      (r.unknown = function (t) {
        return Symbol('JSCA_11095_11097'), arguments.length ? ((o = t), r) : o;
      }),
      (r.copy = function () {
        return Symbol('JSCA_11098_11100'), Gh(n, e).unknown(o);
      }),
      jh.apply(r, arguments),
      r
    );
  }
  function Vh() {
    Symbol('JSCA_11104_11153');
    var t,
      n,
      e = Gh().unknown(void 0),
      o = e.domain,
      r = e.range,
      i = 0,
      l = 1,
      a = !1,
      u = 0,
      _ = 0,
      c = 0.5;
    function f() {
      Symbol('JSCA_11107_11118');
      var e = o().length,
        f = l < i,
        s = f ? l : i,
        S = f ? i : l;
      (t = (S - s) / Math.max(1, e - u + 2 * _)),
        a && (t = Math.floor(t)),
        (s += (S - s - t * (e - u)) * c),
        (n = t * (1 - u)),
        a && ((s = Math.round(s)), (n = Math.round(n)));
      var h = St(e).map(function (n) {
        return Symbol('JSCA_11114_11116'), s + t * n;
      });
      return r(f ? h.reverse() : h);
    }
    return (
      delete e.unknown,
      (e.domain = function (t) {
        return Symbol('JSCA_11119_11121'), arguments.length ? (o(t), f()) : o();
      }),
      (e.range = function (t) {
        return (
          Symbol('JSCA_11122_11124'),
          arguments.length ? (([i, l] = t), (i = +i), (l = +l), f()) : [i, l]
        );
      }),
      (e.rangeRound = function (t) {
        return (
          Symbol('JSCA_11125_11127'),
          ([i, l] = t),
          (i = +i),
          (l = +l),
          (a = !0),
          f()
        );
      }),
      (e.bandwidth = function () {
        return Symbol('JSCA_11128_11130'), n;
      }),
      (e.step = function () {
        return Symbol('JSCA_11131_11133'), t;
      }),
      (e.round = function (t) {
        return (
          Symbol('JSCA_11134_11136'), arguments.length ? ((a = !!t), f()) : a
        );
      }),
      (e.padding = function (t) {
        return (
          Symbol('JSCA_11137_11139'),
          arguments.length ? ((u = Math.min(1, (_ = +t))), f()) : u
        );
      }),
      (e.paddingInner = function (t) {
        return (
          Symbol('JSCA_11140_11142'),
          arguments.length ? ((u = Math.min(1, t)), f()) : u
        );
      }),
      (e.paddingOuter = function (t) {
        return (
          Symbol('JSCA_11143_11145'), arguments.length ? ((_ = +t), f()) : _
        );
      }),
      (e.align = function (t) {
        return (
          Symbol('JSCA_11146_11148'),
          arguments.length ? ((c = Math.max(0, Math.min(1, t))), f()) : c
        );
      }),
      (e.copy = function () {
        return (
          Symbol('JSCA_11149_11151'),
          Vh(o(), [i, l]).round(a).paddingInner(u).paddingOuter(_).align(c)
        );
      }),
      jh.apply(f(), arguments)
    );
  }
  function Wh(t) {
    Symbol('JSCA_11154_11163');
    var n = t.copy;
    return (
      (t.padding = t.paddingOuter),
      delete t.paddingInner,
      delete t.paddingOuter,
      (t.copy = function () {
        return Symbol('JSCA_11159_11161'), Wh(n());
      }),
      t
    );
  }
  function Zh(t) {
    return Symbol('JSCA_11172_11174'), +t;
  }
  var Kh = [0, 1];
  function Qh(t) {
    return Symbol('JSCA_11176_11178'), t;
  }
  function ty(t, n) {
    return (
      Symbol('JSCA_11179_11183'),
      (n -= t = +t)
        ? function (e) {
            return Symbol('JSCA_11180_11182'), (e - t) / n;
          }
        : (function (t) {
            return (
              Symbol('JSCA_11167_11171'),
              function () {
                return Symbol('JSCA_11168_11170'), t;
              }
            );
          })(isNaN(n) ? NaN : 0.5)
    );
  }
  function ny(t, n, e) {
    Symbol('JSCA_11191_11197');
    var o = t[0],
      r = t[1],
      i = n[0],
      l = n[1];
    return (
      r < o ? ((o = ty(r, o)), (i = e(l, i))) : ((o = ty(o, r)), (i = e(i, l))),
      function (t) {
        return Symbol('JSCA_11194_11196'), i(o(t));
      }
    );
  }
  function ey(t, n, e) {
    Symbol('JSCA_11198_11212');
    var o = Math.min(t.length, n.length) - 1,
      r = new Array(o),
      i = new Array(o),
      l = -1;
    for (
      t[o] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
      ++l < o;

    )
      (r[l] = ty(t[l], t[l + 1])), (i[l] = e(n[l], n[l + 1]));
    return function (n) {
      Symbol('JSCA_11208_11211');
      var e = c(t, n, 1, o) - 1;
      return i[e](r[e](n));
    };
  }
  function oy(t, n) {
    return (
      Symbol('JSCA_11213_11215'),
      n
        .domain(t.domain())
        .range(t.range())
        .interpolate(t.interpolate())
        .clamp(t.clamp())
        .unknown(t.unknown())
    );
  }
  function ry() {
    Symbol('JSCA_11216_11253');
    var t,
      n,
      e,
      o,
      r,
      i,
      l = Kh,
      a = Kh,
      u = jo,
      _ = Qh;
    function c() {
      Symbol('JSCA_11218_11224');
      var t = Math.min(l.length, a.length);
      return (
        _ !== Qh &&
          (_ = (function (t, n) {
            var e;
            return (
              Symbol('JSCA_11184_11190'),
              t > n && ((e = t), (t = n), (n = e)),
              function (e) {
                return Symbol('JSCA_11187_11189'), Math.max(t, Math.min(n, e));
              }
            );
          })(l[0], l[t - 1])),
        (o = t > 2 ? ey : ny),
        (r = i = null),
        f
      );
    }
    function f(n) {
      return (
        Symbol('JSCA_11225_11227'),
        null == n || isNaN((n = +n))
          ? e
          : (r || (r = o(l.map(t), a, u)))(t(_(n)))
      );
    }
    return (
      (f.invert = function (e) {
        return (
          Symbol('JSCA_11228_11230'), _(n((i || (i = o(a, l.map(t), Io)))(e)))
        );
      }),
      (f.domain = function (t) {
        return (
          Symbol('JSCA_11231_11233'),
          arguments.length ? ((l = Array.from(t, Zh)), c()) : l.slice()
        );
      }),
      (f.range = function (t) {
        return (
          Symbol('JSCA_11234_11236'),
          arguments.length ? ((a = Array.from(t)), c()) : a.slice()
        );
      }),
      (f.rangeRound = function (t) {
        return Symbol('JSCA_11237_11239'), (a = Array.from(t)), (u = Ho), c();
      }),
      (f.clamp = function (t) {
        return (
          Symbol('JSCA_11240_11242'),
          arguments.length ? ((_ = !!t || Qh), c()) : _ !== Qh
        );
      }),
      (f.interpolate = function (t) {
        return (
          Symbol('JSCA_11243_11245'), arguments.length ? ((u = t), c()) : u
        );
      }),
      (f.unknown = function (t) {
        return Symbol('JSCA_11246_11248'), arguments.length ? ((e = t), f) : e;
      }),
      function (e, o) {
        return Symbol('JSCA_11249_11252'), (t = e), (n = o), c();
      }
    );
  }
  function iy() {
    return Symbol('JSCA_11254_11256'), ry()(Qh, Qh);
  }
  function ly(n, e, o, r) {
    Symbol('JSCA_11257_11284');
    var i,
      l = Z(n, e, o);
    switch ((r = Du(null == r ? ',f' : r)).type) {
      case 's':
        var a = Math.max(Math.abs(n), Math.abs(e));
        return (
          null != r.precision || isNaN((i = Hu(l, a))) || (r.precision = i),
          t.formatPrefix(r, a)
        );
      case '':
      case 'e':
      case 'g':
      case 'p':
      case 'r':
        null != r.precision ||
          isNaN((i = Xu(l, Math.max(Math.abs(n), Math.abs(e))))) ||
          (r.precision = i - ('e' === r.type));
        break;
      case 'f':
      case '%':
        null != r.precision ||
          isNaN((i = ju(l))) ||
          (r.precision = i - 2 * ('%' === r.type));
    }
    return t.format(r);
  }
  function ay(t) {
    Symbol('JSCA_11285_11329');
    var n = t.domain;
    return (
      (t.ticks = function (t) {
        Symbol('JSCA_11287_11290');
        var e = n();
        return V(e[0], e[e.length - 1], null == t ? 10 : t);
      }),
      (t.tickFormat = function (t, e) {
        Symbol('JSCA_11291_11294');
        var o = n();
        return ly(o[0], o[o.length - 1], null == t ? 10 : t, e);
      }),
      (t.nice = function (e) {
        Symbol('JSCA_11295_11327'), null == e && (e = 10);
        var o,
          r,
          i = n(),
          l = 0,
          a = i.length - 1,
          u = i[l],
          _ = i[a],
          c = 10;
        for (
          _ < u && ((r = u), (u = _), (_ = r), (r = l), (l = a), (a = r));
          c-- > 0;

        ) {
          if ((r = W(u, _, e)) === o) return (i[l] = u), (i[a] = _), n(i);
          if (r > 0) (u = Math.floor(u / r) * r), (_ = Math.ceil(_ / r) * r);
          else {
            if (!(r < 0)) break;
            (u = Math.ceil(u * r) / r), (_ = Math.floor(_ * r) / r);
          }
          o = r;
        }
        return t;
      }),
      t
    );
  }
  function uy(t, n) {
    Symbol('JSCA_11356_11366');
    var e,
      o = 0,
      r = (t = t.slice()).length - 1,
      i = t[o],
      l = t[r];
    return (
      l < i && ((e = o), (o = r), (r = e), (e = i), (i = l), (l = e)),
      (t[o] = n.floor(i)),
      (t[r] = n.ceil(l)),
      t
    );
  }
  function _y(t) {
    return Symbol('JSCA_11367_11369'), Math.log(t);
  }
  function cy(t) {
    return Symbol('JSCA_11370_11372'), Math.exp(t);
  }
  function fy(t) {
    return Symbol('JSCA_11373_11375'), -Math.log(-t);
  }
  function sy(t) {
    return Symbol('JSCA_11376_11378'), -Math.exp(-t);
  }
  function Sy(t) {
    return (
      Symbol('JSCA_11379_11381'), isFinite(t) ? +('1e' + t) : t < 0 ? 0 : t
    );
  }
  function hy(t) {
    return Symbol('JSCA_11388_11390'), (n, e) => -t(-n, e);
  }
  function yy(n) {
    Symbol('JSCA_11391_11470');
    const e = n(_y, cy),
      o = e.domain;
    let r,
      i,
      l = 10;
    function a() {
      return (
        Symbol('JSCA_11397_11406'),
        (r = (function (t) {
          return (
            Symbol('JSCA_11385_11387'),
            t === Math.E
              ? Math.log
              : (10 === t && Math.log10) ||
                (2 === t && Math.log2) ||
                ((t = Math.log(t)), (n) => Math.log(n) / t)
          );
        })(l)),
        (i = (function (t) {
          return (
            Symbol('JSCA_11382_11384'),
            10 === t ? Sy : t === Math.E ? Math.exp : (n) => Math.pow(t, n)
          );
        })(l)),
        o()[0] < 0 ? ((r = hy(r)), (i = hy(i)), n(fy, sy)) : n(_y, cy),
        e
      );
    }
    return (
      (e.base = function (t) {
        return (
          Symbol('JSCA_11407_11409'), arguments.length ? ((l = +t), a()) : l
        );
      }),
      (e.domain = function (t) {
        return Symbol('JSCA_11410_11412'), arguments.length ? (o(t), a()) : o();
      }),
      (e.ticks = (t) => {
        const n = o();
        let e = n[0],
          a = n[n.length - 1];
        const u = a < e;
        u && ([e, a] = [a, e]);
        let _,
          c,
          f = r(e),
          s = r(a);
        const S = null == t ? 10 : +t;
        let h = [];
        if (!(l % 1) && s - f < S) {
          if (((f = Math.floor(f)), (s = Math.ceil(s)), e > 0)) {
            for (; f <= s; ++f)
              for (_ = 1; _ < l; ++_)
                if (((c = f < 0 ? _ / i(-f) : _ * i(f)), !(c < e))) {
                  if (c > a) break;
                  h.push(c);
                }
          } else
            for (; f <= s; ++f)
              for (_ = l - 1; _ >= 1; --_)
                if (((c = f > 0 ? _ / i(-f) : _ * i(f)), !(c < e))) {
                  if (c > a) break;
                  h.push(c);
                }
          2 * h.length < S && (h = V(e, a, S));
        } else h = V(f, s, Math.min(s - f, S)).map(i);
        return u ? h.reverse() : h;
      }),
      (e.tickFormat = (n, o) => {
        if (
          (null == n && (n = 10),
          null == o && (o = 10 === l ? 's' : ','),
          'function' != typeof o &&
            (l % 1 || null != (o = Du(o)).precision || (o.trim = !0),
            (o = t.format(o))),
          n === 1 / 0)
        )
          return o;
        const a = Math.max(1, (l * n) / e.ticks().length);
        return (t) => {
          let n = t / i(Math.round(r(t)));
          return n * l < l - 0.5 && (n *= l), n <= a ? o(t) : '';
        };
      }),
      (e.nice = () =>
        o(
          uy(o(), {
            floor: (t) => i(Math.floor(r(t))),
            ceil: (t) => i(Math.ceil(r(t))),
          })
        )),
      e
    );
  }
  function by(t) {
    return (
      Symbol('JSCA_11477_11481'),
      function (n) {
        return (
          Symbol('JSCA_11478_11480'), Math.sign(n) * Math.log1p(Math.abs(n / t))
        );
      }
    );
  }
  function my(t) {
    return (
      Symbol('JSCA_11482_11486'),
      function (n) {
        return (
          Symbol('JSCA_11483_11485'), Math.sign(n) * Math.expm1(Math.abs(n)) * t
        );
      }
    );
  }
  function dy(t) {
    Symbol('JSCA_11487_11493');
    var n = 1,
      e = t(by(n), my(n));
    return (
      (e.constant = function (e) {
        return (
          Symbol('JSCA_11489_11491'),
          arguments.length ? t(by((n = +e)), my(n)) : n
        );
      }),
      ay(e)
    );
  }
  function Ay(t) {
    return (
      Symbol('JSCA_11501_11505'),
      function (n) {
        return (
          Symbol('JSCA_11502_11504'), n < 0 ? -Math.pow(-n, t) : Math.pow(n, t)
        );
      }
    );
  }
  function Cy(t) {
    return Symbol('JSCA_11506_11508'), t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
  }
  function Jy(t) {
    return Symbol('JSCA_11509_11511'), t < 0 ? -t * t : t * t;
  }
  function py(t) {
    Symbol('JSCA_11512_11521');
    var n = t(Qh, Qh),
      e = 1;
    return (
      (n.exponent = function (n) {
        return (
          Symbol('JSCA_11517_11519'),
          arguments.length
            ? ((e = +n),
              Symbol('JSCA_11514_11516'),
              1 === e ? t(Qh, Qh) : 0.5 === e ? t(Cy, Jy) : t(Ay(e), Ay(1 / e)))
            : e
        );
      }),
      ay(n)
    );
  }
  function gy() {
    Symbol('JSCA_11522_11529');
    var t = py(ry());
    return (
      (t.copy = function () {
        return Symbol('JSCA_11524_11526'), oy(t, gy()).exponent(t.exponent());
      }),
      jh.apply(t, arguments),
      t
    );
  }
  function vy(t) {
    return Symbol('JSCA_11533_11535'), Math.sign(t) * t * t;
  }
  const xy = new Date(),
    wy = new Date();
  function My(t, n, e, o) {
    function r(n) {
      return (
        Symbol('JSCA_11665_11667'),
        t((n = 0 === arguments.length ? new Date() : new Date(+n))),
        n
      );
    }
    return (
      Symbol('JSCA_11664_11715'),
      (r.floor = (n) => (t((n = new Date(+n))), n)),
      (r.ceil = (e) => (t((e = new Date(e - 1))), n(e, 1), t(e), e)),
      (r.round = (t) => {
        const n = r(t),
          e = r.ceil(t);
        return t - n < e - t ? n : e;
      }),
      (r.offset = (t, e) => (
        n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t
      )),
      (r.range = (e, o, i) => {
        const l = [];
        if (
          ((e = r.ceil(e)),
          (i = null == i ? 1 : Math.floor(i)),
          !(e < o && i > 0))
        )
          return l;
        let a;
        do {
          l.push((a = new Date(+e))), n(e, i), t(e);
        } while (a < e && e < o);
        return l;
      }),
      (r.filter = (e) =>
        My(
          (n) => {
            if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
          },
          (t, o) => {
            if (t >= t)
              if (o < 0) for (; ++o <= 0; ) for (; n(t, -1), !e(t); );
              else for (; --o >= 0; ) for (; n(t, 1), !e(t); );
          }
        )),
      e &&
        ((r.count = (n, o) => (
          xy.setTime(+n), wy.setTime(+o), t(xy), t(wy), Math.floor(e(xy, wy))
        )),
        (r.every = (t) => (
          (t = Math.floor(t)),
          isFinite(t) && t > 0
            ? t > 1
              ? r.filter(
                  o ? (n) => o(n) % t == 0 : (n) => r.count(0, n) % t == 0
                )
              : r
            : null
        ))),
      r
    );
  }
  const Ty = My(
    () => {},
    (t, n) => {
      t.setTime(+t + n);
    },
    (t, n) => n - t
  );
  Ty.every = (t) => (
    (t = Math.floor(t)),
    isFinite(t) && t > 0
      ? t > 1
        ? My(
            (n) => {
              n.setTime(Math.floor(n / t) * t);
            },
            (n, e) => {
              n.setTime(+n + e * t);
            },
            (n, e) => (e - n) / t
          )
        : Ty
      : null
  );
  const Ey = Ty.range,
    Ny = 1e3,
    ky = 6e4,
    Py = 36e5,
    zy = 864e5,
    $y = 6048e5,
    Dy = 2592e6,
    Ry = 31536e6,
    Fy = My(
      (t) => {
        t.setTime(t - t.getMilliseconds());
      },
      (t, n) => {
        t.setTime(+t + n * Ny);
      },
      (t, n) => (n - t) / Ny,
      (t) => t.getUTCSeconds()
    ),
    qy = Fy.range,
    Uy = My(
      (t) => {
        t.setTime(t - t.getMilliseconds() - t.getSeconds() * Ny);
      },
      (t, n) => {
        t.setTime(+t + n * ky);
      },
      (t, n) => (n - t) / ky,
      (t) => t.getMinutes()
    ),
    Iy = Uy.range,
    Oy = My(
      (t) => {
        t.setUTCSeconds(0, 0);
      },
      (t, n) => {
        t.setTime(+t + n * ky);
      },
      (t, n) => (n - t) / ky,
      (t) => t.getUTCMinutes()
    ),
    By = Oy.range,
    Yy = My(
      (t) => {
        t.setTime(
          t - t.getMilliseconds() - t.getSeconds() * Ny - t.getMinutes() * ky
        );
      },
      (t, n) => {
        t.setTime(+t + n * Py);
      },
      (t, n) => (n - t) / Py,
      (t) => t.getHours()
    ),
    Ly = Yy.range,
    jy = My(
      (t) => {
        t.setUTCMinutes(0, 0, 0);
      },
      (t, n) => {
        t.setTime(+t + n * Py);
      },
      (t, n) => (n - t) / Py,
      (t) => t.getUTCHours()
    ),
    Hy = jy.range,
    Xy = My(
      (t) => t.setHours(0, 0, 0, 0),
      (t, n) => t.setDate(t.getDate() + n),
      (t, n) =>
        (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ky) / zy,
      (t) => t.getDate() - 1
    ),
    Gy = Xy.range,
    Vy = My(
      (t) => {
        t.setUTCHours(0, 0, 0, 0);
      },
      (t, n) => {
        t.setUTCDate(t.getUTCDate() + n);
      },
      (t, n) => (n - t) / zy,
      (t) => t.getUTCDate() - 1
    ),
    Wy = Vy.range,
    Zy = My(
      (t) => {
        t.setUTCHours(0, 0, 0, 0);
      },
      (t, n) => {
        t.setUTCDate(t.getUTCDate() + n);
      },
      (t, n) => (n - t) / zy,
      (t) => Math.floor(t / zy)
    ),
    Ky = Zy.range;
  function Qy(t) {
    return (
      Symbol('JSCA_11813_11822'),
      My(
        (n) => {
          n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
            n.setHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setDate(t.getDate() + 7 * n);
        },
        (t, n) =>
          (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ky) / $y
      )
    );
  }
  const tb = Qy(0),
    nb = Qy(1),
    eb = Qy(2),
    ob = Qy(3),
    rb = Qy(4),
    ib = Qy(5),
    lb = Qy(6),
    ab = tb.range,
    ub = nb.range,
    _b = eb.range,
    cb = ob.range,
    fb = rb.range,
    sb = ib.range,
    Sb = lb.range;
  function hb(t) {
    return (
      Symbol('JSCA_11837_11846'),
      My(
        (n) => {
          n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)),
            n.setUTCHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setUTCDate(t.getUTCDate() + 7 * n);
        },
        (t, n) => (n - t) / $y
      )
    );
  }
  const yb = hb(0),
    bb = hb(1),
    mb = hb(2),
    db = hb(3),
    Ab = hb(4),
    Cb = hb(5),
    Jb = hb(6),
    pb = yb.range,
    gb = bb.range,
    vb = mb.range,
    xb = db.range,
    wb = Ab.range,
    Mb = Cb.range,
    Tb = Jb.range,
    Eb = My(
      (t) => {
        t.setDate(1), t.setHours(0, 0, 0, 0);
      },
      (t, n) => {
        t.setMonth(t.getMonth() + n);
      },
      (t, n) =>
        n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear()),
      (t) => t.getMonth()
    ),
    Nb = Eb.range,
    kb = My(
      (t) => {
        t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
      },
      (t, n) => {
        t.setUTCMonth(t.getUTCMonth() + n);
      },
      (t, n) =>
        n.getUTCMonth() -
        t.getUTCMonth() +
        12 * (n.getUTCFullYear() - t.getUTCFullYear()),
      (t) => t.getUTCMonth()
    ),
    Pb = kb.range,
    zb = My(
      (t) => {
        t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
      },
      (t, n) => {
        t.setFullYear(t.getFullYear() + n);
      },
      (t, n) => n.getFullYear() - t.getFullYear(),
      (t) => t.getFullYear()
    );
  zb.every = (t) =>
    isFinite((t = Math.floor(t))) && t > 0
      ? My(
          (n) => {
            n.setFullYear(Math.floor(n.getFullYear() / t) * t),
              n.setMonth(0, 1),
              n.setHours(0, 0, 0, 0);
          },
          (n, e) => {
            n.setFullYear(n.getFullYear() + e * t);
          }
        )
      : null;
  const $b = zb.range,
    Db = My(
      (t) => {
        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
      },
      (t, n) => {
        t.setUTCFullYear(t.getUTCFullYear() + n);
      },
      (t, n) => n.getUTCFullYear() - t.getUTCFullYear(),
      (t) => t.getUTCFullYear()
    );
  Db.every = (t) =>
    isFinite((t = Math.floor(t))) && t > 0
      ? My(
          (n) => {
            n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
              n.setUTCMonth(0, 1),
              n.setUTCHours(0, 0, 0, 0);
          },
          (n, e) => {
            n.setUTCFullYear(n.getUTCFullYear() + e * t);
          }
        )
      : null;
  const Rb = Db.range;
  function Fb(t, n, e, r, i, l) {
    Symbol('JSCA_11923_11941');
    const a = [
      [Fy, 1, Ny],
      [Fy, 5, 5e3],
      [Fy, 15, 15e3],
      [Fy, 30, 3e4],
      [l, 1, ky],
      [l, 5, 3e5],
      [l, 15, 9e5],
      [l, 30, 18e5],
      [i, 1, Py],
      [i, 3, 108e5],
      [i, 6, 216e5],
      [i, 12, 432e5],
      [r, 1, zy],
      [r, 2, 1728e5],
      [e, 1, $y],
      [n, 1, Dy],
      [n, 3, 7776e6],
      [t, 1, Ry],
    ];
    function u(n, e, r) {
      Symbol('JSCA_11932_11939');
      const i = Math.abs(e - n) / r,
        l = o(([, , t]) => t).right(a, i);
      if (l === a.length) return t.every(Z(n / Ry, e / Ry, r));
      if (0 === l) return Ty.every(Math.max(Z(n, e, r), 1));
      const [u, _] = a[i / a[l - 1][2] < a[l][2] / i ? l - 1 : l];
      return u.every(_);
    }
    return [
      function (t, n, e) {
        Symbol('JSCA_11925_11931');
        const o = n < t;
        o && ([t, n] = [n, t]);
        const r = e && 'function' == typeof e.range ? e : u(t, n, e),
          i = r ? r.range(t, +n + 1) : [];
        return o ? i.reverse() : i;
      },
      u,
    ];
  }
  const [qb, Ub] = Fb(Db, kb, yb, Zy, jy, Oy),
    [Ib, Ob] = Fb(zb, Eb, tb, Xy, Yy, Uy);
  function Bb(t) {
    if ((Symbol('JSCA_11944_11951'), 0 <= t.y && t.y < 100)) {
      var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
      return n.setFullYear(t.y), n;
    }
    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }
  function Yb(t) {
    if ((Symbol('JSCA_11952_11959'), 0 <= t.y && t.y < 100)) {
      var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
      return n.setUTCFullYear(t.y), n;
    }
    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }
  function Lb(t, n, e) {
    return (
      Symbol('JSCA_11960_11970'), { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 }
    );
  }
  function jb(t) {
    Symbol('JSCA_11971_12250');
    var n = t.dateTime,
      e = t.date,
      o = t.time,
      r = t.periods,
      i = t.days,
      l = t.shortDays,
      a = t.months,
      u = t.shortMonths,
      _ = Qb(r),
      c = tm(r),
      f = Qb(i),
      s = tm(i),
      S = Qb(l),
      h = tm(l),
      y = Qb(a),
      b = tm(a),
      m = Qb(u),
      d = tm(u),
      A = {
        a: function (t) {
          return Symbol('JSCA_12184_12186'), l[t.getDay()];
        },
        A: function (t) {
          return Symbol('JSCA_12187_12189'), i[t.getDay()];
        },
        b: function (t) {
          return Symbol('JSCA_12190_12192'), u[t.getMonth()];
        },
        B: function (t) {
          return Symbol('JSCA_12193_12195'), a[t.getMonth()];
        },
        c: null,
        d: Jm,
        e: Jm,
        f: wm,
        g: Fm,
        G: Um,
        H: pm,
        I: gm,
        j: vm,
        L: xm,
        m: Mm,
        M: Tm,
        p: function (t) {
          return Symbol('JSCA_12196_12198'), r[+(t.getHours() >= 12)];
        },
        q: function (t) {
          return Symbol('JSCA_12199_12201'), 1 + ~~(t.getMonth() / 3);
        },
        Q: ud,
        s: _d,
        S: Em,
        u: Nm,
        U: km,
        V: zm,
        w: $m,
        W: Dm,
        x: null,
        X: null,
        y: Rm,
        Y: qm,
        Z: Im,
        '%': ad,
      },
      C = {
        a: function (t) {
          return Symbol('JSCA_12202_12204'), l[t.getUTCDay()];
        },
        A: function (t) {
          return Symbol('JSCA_12205_12207'), i[t.getUTCDay()];
        },
        b: function (t) {
          return Symbol('JSCA_12208_12210'), u[t.getUTCMonth()];
        },
        B: function (t) {
          return Symbol('JSCA_12211_12213'), a[t.getUTCMonth()];
        },
        c: null,
        d: Om,
        e: Om,
        f: Hm,
        g: od,
        G: id,
        H: Bm,
        I: Ym,
        j: Lm,
        L: jm,
        m: Xm,
        M: Gm,
        p: function (t) {
          return Symbol('JSCA_12214_12216'), r[+(t.getUTCHours() >= 12)];
        },
        q: function (t) {
          return Symbol('JSCA_12217_12219'), 1 + ~~(t.getUTCMonth() / 3);
        },
        Q: ud,
        s: _d,
        S: Vm,
        u: Wm,
        U: Zm,
        V: Qm,
        w: td,
        W: nd,
        x: null,
        X: null,
        y: ed,
        Y: rd,
        Z: ld,
        '%': ad,
      },
      J = {
        a: function (t, n, e) {
          Symbol('JSCA_12159_12162');
          var o = S.exec(n.slice(e));
          return o ? ((t.w = h.get(o[0].toLowerCase())), e + o[0].length) : -1;
        },
        A: function (t, n, e) {
          Symbol('JSCA_12163_12166');
          var o = f.exec(n.slice(e));
          return o ? ((t.w = s.get(o[0].toLowerCase())), e + o[0].length) : -1;
        },
        b: function (t, n, e) {
          Symbol('JSCA_12167_12170');
          var o = m.exec(n.slice(e));
          return o ? ((t.m = d.get(o[0].toLowerCase())), e + o[0].length) : -1;
        },
        B: function (t, n, e) {
          Symbol('JSCA_12171_12174');
          var o = y.exec(n.slice(e));
          return o ? ((t.m = b.get(o[0].toLowerCase())), e + o[0].length) : -1;
        },
        c: function (t, e, o) {
          return Symbol('JSCA_12175_12177'), v(t, n, e, o);
        },
        d: fm,
        e: fm,
        f: mm,
        g: am,
        G: lm,
        H: Sm,
        I: Sm,
        j: sm,
        L: bm,
        m: cm,
        M: hm,
        p: function (t, n, e) {
          Symbol('JSCA_12155_12158');
          var o = _.exec(n.slice(e));
          return o ? ((t.p = c.get(o[0].toLowerCase())), e + o[0].length) : -1;
        },
        q: _m,
        Q: Am,
        s: Cm,
        S: ym,
        u: em,
        U: om,
        V: rm,
        w: nm,
        W: im,
        x: function (t, n, o) {
          return Symbol('JSCA_12178_12180'), v(t, e, n, o);
        },
        X: function (t, n, e) {
          return Symbol('JSCA_12181_12183'), v(t, o, n, e);
        },
        y: am,
        Y: lm,
        Z: um,
        '%': dm,
      };
    function p(t, n) {
      return (
        Symbol('JSCA_12082_12098'),
        function (e) {
          Symbol('JSCA_12083_12097');
          var o,
            r,
            i,
            l = [],
            a = -1,
            u = 0,
            _ = t.length;
          for (e instanceof Date || (e = new Date(+e)); ++a < _; )
            37 === t.charCodeAt(a) &&
              (l.push(t.slice(u, a)),
              null != (r = Xb[(o = t.charAt(++a))])
                ? (o = t.charAt(++a))
                : (r = 'e' === o ? ' ' : '0'),
              (i = n[o]) && (o = i(e, r)),
              l.push(o),
              (u = a + 1));
          return l.push(t.slice(u, a)), l.join('');
        }
      );
    }
    function g(t, n) {
      return (
        Symbol('JSCA_12099_12139'),
        function (e) {
          Symbol('JSCA_12100_12138');
          var o,
            r,
            i = Lb(1900, void 0, 1);
          if (v(i, t, (e += ''), 0) != e.length) return null;
          if ('Q' in i) return new Date(i.Q);
          if ('s' in i) return new Date(1e3 * i.s + ('L' in i ? i.L : 0));
          if (
            (n && !('Z' in i) && (i.Z = 0),
            'p' in i && (i.H = (i.H % 12) + 12 * i.p),
            void 0 === i.m && (i.m = 'q' in i ? i.q : 0),
            'V' in i)
          ) {
            if (i.V < 1 || i.V > 53) return null;
            'w' in i || (i.w = 1),
              'Z' in i
                ? ((r = (o = Yb(Lb(i.y, 0, 1))).getUTCDay()),
                  (o = r > 4 || 0 === r ? bb.ceil(o) : bb(o)),
                  (o = Vy.offset(o, 7 * (i.V - 1))),
                  (i.y = o.getUTCFullYear()),
                  (i.m = o.getUTCMonth()),
                  (i.d = o.getUTCDate() + ((i.w + 6) % 7)))
                : ((r = (o = Bb(Lb(i.y, 0, 1))).getDay()),
                  (o = r > 4 || 0 === r ? nb.ceil(o) : nb(o)),
                  (o = Xy.offset(o, 7 * (i.V - 1))),
                  (i.y = o.getFullYear()),
                  (i.m = o.getMonth()),
                  (i.d = o.getDate() + ((i.w + 6) % 7)));
          } else
            ('W' in i || 'U' in i) &&
              ('w' in i || (i.w = 'u' in i ? i.u % 7 : 'W' in i ? 1 : 0),
              (r =
                'Z' in i
                  ? Yb(Lb(i.y, 0, 1)).getUTCDay()
                  : Bb(Lb(i.y, 0, 1)).getDay()),
              (i.m = 0),
              (i.d =
                'W' in i
                  ? ((i.w + 6) % 7) + 7 * i.W - ((r + 5) % 7)
                  : i.w + 7 * i.U - ((r + 6) % 7)));
          return 'Z' in i
            ? ((i.H += (i.Z / 100) | 0), (i.M += i.Z % 100), Yb(i))
            : Bb(i);
        }
      );
    }
    function v(t, n, e, o) {
      Symbol('JSCA_12140_12154');
      for (var r, i, l = 0, a = n.length, u = e.length; l < a; ) {
        if (o >= u) return -1;
        if (37 === (r = n.charCodeAt(l++))) {
          if (
            ((r = n.charAt(l++)),
            !(i = J[r in Xb ? n.charAt(l++) : r]) || (o = i(t, e, o)) < 0)
          )
            return -1;
        } else if (r != e.charCodeAt(o++)) return -1;
      }
      return o;
    }
    return (
      (A.x = p(e, A)),
      (A.X = p(o, A)),
      (A.c = p(n, A)),
      (C.x = p(e, C)),
      (C.X = p(o, C)),
      (C.c = p(n, C)),
      {
        format: function (t) {
          Symbol('JSCA_12221_12227');
          var n = p((t += ''), A);
          return (
            (n.toString = function () {
              return Symbol('JSCA_12223_12225'), t;
            }),
            n
          );
        },
        parse: function (t) {
          Symbol('JSCA_12228_12234');
          var n = g((t += ''), !1);
          return (
            (n.toString = function () {
              return Symbol('JSCA_12230_12232'), t;
            }),
            n
          );
        },
        utcFormat: function (t) {
          Symbol('JSCA_12235_12241');
          var n = p((t += ''), C);
          return (
            (n.toString = function () {
              return Symbol('JSCA_12237_12239'), t;
            }),
            n
          );
        },
        utcParse: function (t) {
          Symbol('JSCA_12242_12248');
          var n = g((t += ''), !0);
          return (
            (n.toString = function () {
              return Symbol('JSCA_12244_12246'), t;
            }),
            n
          );
        },
      }
    );
  }
  var Hb,
    Xb = { '-': '', _: ' ', 0: '0' },
    Gb = /^\s*\d+/,
    Vb = /^%/,
    Wb = /[\\^$*+?|[\]().{}]/g;
  function Zb(t, n, e) {
    Symbol('JSCA_12256_12259');
    var o = t < 0 ? '-' : '',
      r = (o ? -t : t) + '',
      i = r.length;
    return o + (i < e ? new Array(e - i + 1).join(n) + r : r);
  }
  function Kb(t) {
    return Symbol('JSCA_12260_12262'), t.replace(Wb, '\\$&');
  }
  function Qb(t) {
    return (
      Symbol('JSCA_12263_12265'),
      new RegExp('^(?:' + t.map(Kb).join('|') + ')', 'i')
    );
  }
  function tm(t) {
    return (
      Symbol('JSCA_12266_12268'), new Map(t.map((t, n) => [t.toLowerCase(), n]))
    );
  }
  function nm(t, n, e) {
    Symbol('JSCA_12269_12272');
    var o = Gb.exec(n.slice(e, e + 1));
    return o ? ((t.w = +o[0]), e + o[0].length) : -1;
  }
  function em(t, n, e) {
    Symbol('JSCA_12273_12276');
    var o = Gb.exec(n.slice(e, e + 1));
    return o ? ((t.u = +o[0]), e + o[0].length) : -1;
  }
  function om(t, n, e) {
    Symbol('JSCA_12277_12280');
    var o = Gb.exec(n.slice(e, e + 2));
    return o ? ((t.U = +o[0]), e + o[0].length) : -1;
  }
  function rm(t, n, e) {
    Symbol('JSCA_12281_12284');
    var o = Gb.exec(n.slice(e, e + 2));
    return o ? ((t.V = +o[0]), e + o[0].length) : -1;
  }
  function im(t, n, e) {
    Symbol('JSCA_12285_12288');
    var o = Gb.exec(n.slice(e, e + 2));
    return o ? ((t.W = +o[0]), e + o[0].length) : -1;
  }
  function lm(t, n, e) {
    Symbol('JSCA_12289_12292');
    var o = Gb.exec(n.slice(e, e + 4));
    return o ? ((t.y = +o[0]), e + o[0].length) : -1;
  }
  function am(t, n, e) {
    Symbol('JSCA_12293_12296');
    var o = Gb.exec(n.slice(e, e + 2));
    return o
      ? ((t.y = +o[0] + (+o[0] > 68 ? 1900 : 2e3)), e + o[0].length)
      : -1;
  }
  function um(t, n, e) {
    Symbol('JSCA_12297_12300');
    var o = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
    return o
      ? ((t.Z = o[1] ? 0 : -(o[2] + (o[3] || '00'))), e + o[0].length)
      : -1;
  }
  function _m(t, n, e) {
    Symbol('JSCA_12301_12304');
    var o = Gb.exec(n.slice(e, e + 1));
    return o ? ((t.q = 3 * o[0] - 3), e + o[0].length) : -1;
  }
  function cm(t, n, e) {
    Symbol('JSCA_12305_12308');
    var o = Gb.exec(n.slice(e, e + 2));
    return o ? ((t.m = o[0] - 1), e + o[0].length) : -1;
  }
  function fm(t, n, e) {
    Symbol('JSCA_12309_12312');
    var o = Gb.exec(n.slice(e, e + 2));
    return o ? ((t.d = +o[0]), e + o[0].length) : -1;
  }
  function sm(t, n, e) {
    Symbol('JSCA_12313_12316');
    var o = Gb.exec(n.slice(e, e + 3));
    return o ? ((t.m = 0), (t.d = +o[0]), e + o[0].length) : -1;
  }
  function Sm(t, n, e) {
    Symbol('JSCA_12317_12320');
    var o = Gb.exec(n.slice(e, e + 2));
    return o ? ((t.H = +o[0]), e + o[0].length) : -1;
  }
  function hm(t, n, e) {
    Symbol('JSCA_12321_12324');
    var o = Gb.exec(n.slice(e, e + 2));
    return o ? ((t.M = +o[0]), e + o[0].length) : -1;
  }
  function ym(t, n, e) {
    Symbol('JSCA_12325_12328');
    var o = Gb.exec(n.slice(e, e + 2));
    return o ? ((t.S = +o[0]), e + o[0].length) : -1;
  }
  function bm(t, n, e) {
    Symbol('JSCA_12329_12332');
    var o = Gb.exec(n.slice(e, e + 3));
    return o ? ((t.L = +o[0]), e + o[0].length) : -1;
  }
  function mm(t, n, e) {
    Symbol('JSCA_12333_12336');
    var o = Gb.exec(n.slice(e, e + 6));
    return o ? ((t.L = Math.floor(o[0] / 1e3)), e + o[0].length) : -1;
  }
  function dm(t, n, e) {
    Symbol('JSCA_12337_12340');
    var o = Vb.exec(n.slice(e, e + 1));
    return o ? e + o[0].length : -1;
  }
  function Am(t, n, e) {
    Symbol('JSCA_12341_12344');
    var o = Gb.exec(n.slice(e));
    return o ? ((t.Q = +o[0]), e + o[0].length) : -1;
  }
  function Cm(t, n, e) {
    Symbol('JSCA_12345_12348');
    var o = Gb.exec(n.slice(e));
    return o ? ((t.s = +o[0]), e + o[0].length) : -1;
  }
  function Jm(t, n) {
    return Symbol('JSCA_12349_12351'), Zb(t.getDate(), n, 2);
  }
  function pm(t, n) {
    return Symbol('JSCA_12352_12354'), Zb(t.getHours(), n, 2);
  }
  function gm(t, n) {
    return Symbol('JSCA_12355_12357'), Zb(t.getHours() % 12 || 12, n, 2);
  }
  function vm(t, n) {
    return Symbol('JSCA_12358_12360'), Zb(1 + Xy.count(zb(t), t), n, 3);
  }
  function xm(t, n) {
    return Symbol('JSCA_12361_12363'), Zb(t.getMilliseconds(), n, 3);
  }
  function wm(t, n) {
    return Symbol('JSCA_12364_12366'), xm(t, n) + '000';
  }
  function Mm(t, n) {
    return Symbol('JSCA_12367_12369'), Zb(t.getMonth() + 1, n, 2);
  }
  function Tm(t, n) {
    return Symbol('JSCA_12370_12372'), Zb(t.getMinutes(), n, 2);
  }
  function Em(t, n) {
    return Symbol('JSCA_12373_12375'), Zb(t.getSeconds(), n, 2);
  }
  function Nm(t) {
    Symbol('JSCA_12376_12379');
    var n = t.getDay();
    return 0 === n ? 7 : n;
  }
  function km(t, n) {
    return Symbol('JSCA_12380_12382'), Zb(tb.count(zb(t) - 1, t), n, 2);
  }
  function Pm(t) {
    Symbol('JSCA_12383_12386');
    var n = t.getDay();
    return n >= 4 || 0 === n ? rb(t) : rb.ceil(t);
  }
  function zm(t, n) {
    return (
      Symbol('JSCA_12387_12390'),
      (t = Pm(t)),
      Zb(rb.count(zb(t), t) + (4 === zb(t).getDay()), n, 2)
    );
  }
  function $m(t) {
    return Symbol('JSCA_12391_12393'), t.getDay();
  }
  function Dm(t, n) {
    return Symbol('JSCA_12394_12396'), Zb(nb.count(zb(t) - 1, t), n, 2);
  }
  function Rm(t, n) {
    return Symbol('JSCA_12397_12399'), Zb(t.getFullYear() % 100, n, 2);
  }
  function Fm(t, n) {
    return (
      Symbol('JSCA_12400_12403'), Zb((t = Pm(t)).getFullYear() % 100, n, 2)
    );
  }
  function qm(t, n) {
    return Symbol('JSCA_12404_12406'), Zb(t.getFullYear() % 1e4, n, 4);
  }
  function Um(t, n) {
    Symbol('JSCA_12407_12411');
    var e = t.getDay();
    return Zb(
      (t = e >= 4 || 0 === e ? rb(t) : rb.ceil(t)).getFullYear() % 1e4,
      n,
      4
    );
  }
  function Im(t) {
    Symbol('JSCA_12412_12415');
    var n = t.getTimezoneOffset();
    return (
      (n > 0 ? '-' : ((n *= -1), '+')) +
      Zb((n / 60) | 0, '0', 2) +
      Zb(n % 60, '0', 2)
    );
  }
  function Om(t, n) {
    return Symbol('JSCA_12416_12418'), Zb(t.getUTCDate(), n, 2);
  }
  function Bm(t, n) {
    return Symbol('JSCA_12419_12421'), Zb(t.getUTCHours(), n, 2);
  }
  function Ym(t, n) {
    return Symbol('JSCA_12422_12424'), Zb(t.getUTCHours() % 12 || 12, n, 2);
  }
  function Lm(t, n) {
    return Symbol('JSCA_12425_12427'), Zb(1 + Vy.count(Db(t), t), n, 3);
  }
  function jm(t, n) {
    return Symbol('JSCA_12428_12430'), Zb(t.getUTCMilliseconds(), n, 3);
  }
  function Hm(t, n) {
    return Symbol('JSCA_12431_12433'), jm(t, n) + '000';
  }
  function Xm(t, n) {
    return Symbol('JSCA_12434_12436'), Zb(t.getUTCMonth() + 1, n, 2);
  }
  function Gm(t, n) {
    return Symbol('JSCA_12437_12439'), Zb(t.getUTCMinutes(), n, 2);
  }
  function Vm(t, n) {
    return Symbol('JSCA_12440_12442'), Zb(t.getUTCSeconds(), n, 2);
  }
  function Wm(t) {
    Symbol('JSCA_12443_12446');
    var n = t.getUTCDay();
    return 0 === n ? 7 : n;
  }
  function Zm(t, n) {
    return Symbol('JSCA_12447_12449'), Zb(yb.count(Db(t) - 1, t), n, 2);
  }
  function Km(t) {
    Symbol('JSCA_12450_12453');
    var n = t.getUTCDay();
    return n >= 4 || 0 === n ? Ab(t) : Ab.ceil(t);
  }
  function Qm(t, n) {
    return (
      Symbol('JSCA_12454_12457'),
      (t = Km(t)),
      Zb(Ab.count(Db(t), t) + (4 === Db(t).getUTCDay()), n, 2)
    );
  }
  function td(t) {
    return Symbol('JSCA_12458_12460'), t.getUTCDay();
  }
  function nd(t, n) {
    return Symbol('JSCA_12461_12463'), Zb(bb.count(Db(t) - 1, t), n, 2);
  }
  function ed(t, n) {
    return Symbol('JSCA_12464_12466'), Zb(t.getUTCFullYear() % 100, n, 2);
  }
  function od(t, n) {
    return (
      Symbol('JSCA_12467_12470'), Zb((t = Km(t)).getUTCFullYear() % 100, n, 2)
    );
  }
  function rd(t, n) {
    return Symbol('JSCA_12471_12473'), Zb(t.getUTCFullYear() % 1e4, n, 4);
  }
  function id(t, n) {
    Symbol('JSCA_12474_12478');
    var e = t.getUTCDay();
    return Zb(
      (t = e >= 4 || 0 === e ? Ab(t) : Ab.ceil(t)).getUTCFullYear() % 1e4,
      n,
      4
    );
  }
  function ld() {
    return Symbol('JSCA_12479_12481'), '+0000';
  }
  function ad() {
    return Symbol('JSCA_12482_12484'), '%';
  }
  function ud(t) {
    return Symbol('JSCA_12485_12487'), +t;
  }
  function _d(t) {
    return Symbol('JSCA_12488_12490'), Math.floor(+t / 1e3);
  }
  function cd(n) {
    return (
      Symbol('JSCA_12506_12513'),
      (Hb = jb(n)),
      (t.timeFormat = Hb.format),
      (t.timeParse = Hb.parse),
      (t.utcFormat = Hb.utcFormat),
      (t.utcParse = Hb.utcParse),
      Hb
    );
  }
  (t.timeFormat = void 0),
    (t.timeParse = void 0),
    (t.utcFormat = void 0),
    (t.utcParse = void 0),
    cd({
      dateTime: '%x, %X',
      date: '%-m/%-d/%Y',
      time: '%-I:%M:%S %p',
      periods: ['AM', 'PM'],
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      shortMonths: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    });
  var fd = '%Y-%m-%dT%H:%M:%S.%LZ';
  var sd = Date.prototype.toISOString
      ? function (t) {
          return Symbol('JSCA_12515_12517'), t.toISOString();
        }
      : t.utcFormat(fd),
    Sd = sd;
  var hd = +new Date('2000-01-01T00:00:00.000Z')
      ? function (t) {
          Symbol('JSCA_12520_12523');
          var n = new Date(t);
          return isNaN(n) ? null : n;
        }
      : t.utcParse(fd),
    yd = hd;
  function bd(t) {
    return Symbol('JSCA_12526_12528'), new Date(t);
  }
  function md(t) {
    return Symbol('JSCA_12529_12531'), t instanceof Date ? +t : +new Date(+t);
  }
  function dd(t, n, e, o, r, i, l, a, u, _) {
    Symbol('JSCA_12532_12560');
    var c = iy(),
      f = c.invert,
      s = c.domain,
      S = _('.%L'),
      h = _(':%S'),
      y = _('%I:%M'),
      b = _('%I %p'),
      m = _('%a %d'),
      d = _('%b %d'),
      A = _('%B'),
      C = _('%Y');
    function J(t) {
      return (
        Symbol('JSCA_12535_12537'),
        (u(t) < t
          ? S
          : a(t) < t
          ? h
          : l(t) < t
          ? y
          : i(t) < t
          ? b
          : o(t) < t
          ? r(t) < t
            ? m
            : d
          : e(t) < t
          ? A
          : C)(t)
      );
    }
    return (
      (c.invert = function (t) {
        return Symbol('JSCA_12538_12540'), new Date(f(t));
      }),
      (c.domain = function (t) {
        return (
          Symbol('JSCA_12541_12543'),
          arguments.length ? s(Array.from(t, md)) : s().map(bd)
        );
      }),
      (c.ticks = function (n) {
        Symbol('JSCA_12544_12547');
        var e = s();
        return t(e[0], e[e.length - 1], null == n ? 10 : n);
      }),
      (c.tickFormat = function (t, n) {
        return Symbol('JSCA_12548_12550'), null == n ? J : _(n);
      }),
      (c.nice = function (t) {
        Symbol('JSCA_12551_12555');
        var e = s();
        return (
          (t && 'function' == typeof t.range) ||
            (t = n(e[0], e[e.length - 1], null == t ? 10 : t)),
          t ? s(uy(e, t)) : c
        );
      }),
      (c.copy = function () {
        return (
          Symbol('JSCA_12556_12558'), oy(c, dd(t, n, e, o, r, i, l, a, u, _))
        );
      }),
      c
    );
  }
  function Ad() {
    Symbol('JSCA_12567_12596');
    var t,
      n,
      e,
      o,
      r,
      i = 0,
      l = 1,
      a = Qh,
      u = !1;
    function _(n) {
      return (
        Symbol('JSCA_12569_12571'),
        null == n || isNaN((n = +n))
          ? r
          : a(
              0 === e
                ? 0.5
                : ((n = (o(n) - t) * e), u ? Math.max(0, Math.min(1, n)) : n)
            )
      );
    }
    function c(t) {
      return (
        Symbol('JSCA_12581_12586'),
        function (n) {
          var e, o;
          return (
            Symbol('JSCA_12582_12585'),
            arguments.length ? (([e, o] = n), (a = t(e, o)), _) : [a(0), a(1)]
          );
        }
      );
    }
    return (
      (_.domain = function (r) {
        return (
          Symbol('JSCA_12572_12574'),
          arguments.length
            ? (([i, l] = r),
              (t = o((i = +i))),
              (n = o((l = +l))),
              (e = t === n ? 0 : 1 / (n - t)),
              _)
            : [i, l]
        );
      }),
      (_.clamp = function (t) {
        return (
          Symbol('JSCA_12575_12577'), arguments.length ? ((u = !!t), _) : u
        );
      }),
      (_.interpolator = function (t) {
        return Symbol('JSCA_12578_12580'), arguments.length ? ((a = t), _) : a;
      }),
      (_.range = c(jo)),
      (_.rangeRound = c(Ho)),
      (_.unknown = function (t) {
        return Symbol('JSCA_12589_12591'), arguments.length ? ((r = t), _) : r;
      }),
      function (r) {
        return (
          Symbol('JSCA_12592_12595'),
          (o = r),
          (t = r(i)),
          (n = r(l)),
          (e = t === n ? 0 : 1 / (n - t)),
          _
        );
      }
    );
  }
  function Cd(t, n) {
    return (
      Symbol('JSCA_12597_12599'),
      n
        .domain(t.domain())
        .interpolator(t.interpolator())
        .clamp(t.clamp())
        .unknown(t.unknown())
    );
  }
  function Jd() {
    Symbol('JSCA_12621_12627');
    var t = py(Ad());
    return (
      (t.copy = function () {
        return Symbol('JSCA_12623_12625'), Cd(t, Jd()).exponent(t.exponent());
      }),
      Hh.apply(t, arguments)
    );
  }
  function pd() {
    Symbol('JSCA_12659_12688');
    var t,
      n,
      e,
      o,
      r,
      i,
      l,
      a = 0,
      u = 0.5,
      _ = 1,
      c = 1,
      f = Qh,
      s = !1;
    function S(t) {
      return (
        Symbol('JSCA_12661_12663'),
        isNaN((t = +t))
          ? l
          : ((t = 0.5 + ((t = +i(t)) - n) * (c * t < c * n ? o : r)),
            f(s ? Math.max(0, Math.min(1, t)) : t))
      );
    }
    function h(t) {
      return (
        Symbol('JSCA_12673_12678'),
        function (n) {
          var e, o, r;
          return (
            Symbol('JSCA_12674_12677'),
            arguments.length
              ? (([e, o, r] = n), (f = fr(t, [e, o, r])), S)
              : [f(0), f(0.5), f(1)]
          );
        }
      );
    }
    return (
      (S.domain = function (l) {
        return (
          Symbol('JSCA_12664_12666'),
          arguments.length
            ? (([a, u, _] = l),
              (t = i((a = +a))),
              (n = i((u = +u))),
              (e = i((_ = +_))),
              (o = t === n ? 0 : 0.5 / (n - t)),
              (r = n === e ? 0 : 0.5 / (e - n)),
              (c = n < t ? -1 : 1),
              S)
            : [a, u, _]
        );
      }),
      (S.clamp = function (t) {
        return (
          Symbol('JSCA_12667_12669'), arguments.length ? ((s = !!t), S) : s
        );
      }),
      (S.interpolator = function (t) {
        return Symbol('JSCA_12670_12672'), arguments.length ? ((f = t), S) : f;
      }),
      (S.range = h(jo)),
      (S.rangeRound = h(Ho)),
      (S.unknown = function (t) {
        return Symbol('JSCA_12681_12683'), arguments.length ? ((l = t), S) : l;
      }),
      function (l) {
        return (
          Symbol('JSCA_12684_12687'),
          (i = l),
          (t = l(a)),
          (n = l(u)),
          (e = l(_)),
          (o = t === n ? 0 : 0.5 / (n - t)),
          (r = n === e ? 0 : 0.5 / (e - n)),
          (c = n < t ? -1 : 1),
          S
        );
      }
    );
  }
  function gd() {
    Symbol('JSCA_12710_12716');
    var t = py(pd());
    return (
      (t.copy = function () {
        return Symbol('JSCA_12712_12714'), Cd(t, gd()).exponent(t.exponent());
      }),
      Hh.apply(t, arguments)
    );
  }
  function vd(t) {
    Symbol('JSCA_12720_12724');
    for (var n = (t.length / 6) | 0, e = new Array(n), o = 0; o < n; )
      e[o] = '#' + t.slice(6 * o, 6 * ++o);
    return e;
  }
  var xd = vd('1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf'),
    wd = vd('7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666'),
    Md = vd('1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666'),
    Td = vd('4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0'),
    Ed = vd(
      'a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928'
    ),
    Nd = vd('fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2'),
    kd = vd('b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc'),
    Pd = vd('e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999'),
    zd = vd('66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3'),
    $d = vd(
      '8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f'
    ),
    Dd = vd('4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab'),
    Rd = (t) => $o(t[t.length - 1]),
    Fd = new Array(3)
      .concat(
        'd8b365f5f5f55ab4ac',
        'a6611adfc27d80cdc1018571',
        'a6611adfc27df5f5f580cdc1018571',
        '8c510ad8b365f6e8c3c7eae55ab4ac01665e',
        '8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e',
        '8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e',
        '8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e',
        '5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30',
        '5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30'
      )
      .map(vd),
    qd = Rd(Fd),
    Ud = new Array(3)
      .concat(
        'af8dc3f7f7f77fbf7b',
        '7b3294c2a5cfa6dba0008837',
        '7b3294c2a5cff7f7f7a6dba0008837',
        '762a83af8dc3e7d4e8d9f0d37fbf7b1b7837',
        '762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837',
        '762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837',
        '762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837',
        '40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b',
        '40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b'
      )
      .map(vd),
    Id = Rd(Ud),
    Od = new Array(3)
      .concat(
        'e9a3c9f7f7f7a1d76a',
        'd01c8bf1b6dab8e1864dac26',
        'd01c8bf1b6daf7f7f7b8e1864dac26',
        'c51b7de9a3c9fde0efe6f5d0a1d76a4d9221',
        'c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221',
        'c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221',
        'c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221',
        '8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419',
        '8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419'
      )
      .map(vd),
    Bd = Rd(Od),
    Yd = new Array(3)
      .concat(
        '998ec3f7f7f7f1a340',
        '5e3c99b2abd2fdb863e66101',
        '5e3c99b2abd2f7f7f7fdb863e66101',
        '542788998ec3d8daebfee0b6f1a340b35806',
        '542788998ec3d8daebf7f7f7fee0b6f1a340b35806',
        '5427888073acb2abd2d8daebfee0b6fdb863e08214b35806',
        '5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806',
        '2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08',
        '2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08'
      )
      .map(vd),
    Ld = Rd(Yd),
    jd = new Array(3)
      .concat(
        'ef8a62f7f7f767a9cf',
        'ca0020f4a58292c5de0571b0',
        'ca0020f4a582f7f7f792c5de0571b0',
        'b2182bef8a62fddbc7d1e5f067a9cf2166ac',
        'b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac',
        'b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac',
        'b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac',
        '67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061',
        '67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061'
      )
      .map(vd),
    Hd = Rd(jd),
    Xd = new Array(3)
      .concat(
        'ef8a62ffffff999999',
        'ca0020f4a582bababa404040',
        'ca0020f4a582ffffffbababa404040',
        'b2182bef8a62fddbc7e0e0e09999994d4d4d',
        'b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d',
        'b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d',
        'b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d',
        '67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a',
        '67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a'
      )
      .map(vd),
    Gd = Rd(Xd),
    Vd = new Array(3)
      .concat(
        'fc8d59ffffbf91bfdb',
        'd7191cfdae61abd9e92c7bb6',
        'd7191cfdae61ffffbfabd9e92c7bb6',
        'd73027fc8d59fee090e0f3f891bfdb4575b4',
        'd73027fc8d59fee090ffffbfe0f3f891bfdb4575b4',
        'd73027f46d43fdae61fee090e0f3f8abd9e974add14575b4',
        'd73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4',
        'a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695',
        'a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695'
      )
      .map(vd),
    Wd = Rd(Vd),
    Zd = new Array(3)
      .concat(
        'fc8d59ffffbf91cf60',
        'd7191cfdae61a6d96a1a9641',
        'd7191cfdae61ffffbfa6d96a1a9641',
        'd73027fc8d59fee08bd9ef8b91cf601a9850',
        'd73027fc8d59fee08bffffbfd9ef8b91cf601a9850',
        'd73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850',
        'd73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850',
        'a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837',
        'a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837'
      )
      .map(vd),
    Kd = Rd(Zd),
    Qd = new Array(3)
      .concat(
        'fc8d59ffffbf99d594',
        'd7191cfdae61abdda42b83ba',
        'd7191cfdae61ffffbfabdda42b83ba',
        'd53e4ffc8d59fee08be6f59899d5943288bd',
        'd53e4ffc8d59fee08bffffbfe6f59899d5943288bd',
        'd53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd',
        'd53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd',
        '9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2',
        '9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2'
      )
      .map(vd),
    tA = Rd(Qd),
    nA = new Array(3)
      .concat(
        'e5f5f999d8c92ca25f',
        'edf8fbb2e2e266c2a4238b45',
        'edf8fbb2e2e266c2a42ca25f006d2c',
        'edf8fbccece699d8c966c2a42ca25f006d2c',
        'edf8fbccece699d8c966c2a441ae76238b45005824',
        'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824',
        'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b'
      )
      .map(vd),
    eA = Rd(nA),
    oA = new Array(3)
      .concat(
        'e0ecf49ebcda8856a7',
        'edf8fbb3cde38c96c688419d',
        'edf8fbb3cde38c96c68856a7810f7c',
        'edf8fbbfd3e69ebcda8c96c68856a7810f7c',
        'edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b',
        'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b',
        'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b'
      )
      .map(vd),
    rA = Rd(oA),
    iA = new Array(3)
      .concat(
        'e0f3dba8ddb543a2ca',
        'f0f9e8bae4bc7bccc42b8cbe',
        'f0f9e8bae4bc7bccc443a2ca0868ac',
        'f0f9e8ccebc5a8ddb57bccc443a2ca0868ac',
        'f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e',
        'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e',
        'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081'
      )
      .map(vd),
    lA = Rd(iA),
    aA = new Array(3)
      .concat(
        'fee8c8fdbb84e34a33',
        'fef0d9fdcc8afc8d59d7301f',
        'fef0d9fdcc8afc8d59e34a33b30000',
        'fef0d9fdd49efdbb84fc8d59e34a33b30000',
        'fef0d9fdd49efdbb84fc8d59ef6548d7301f990000',
        'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000',
        'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000'
      )
      .map(vd),
    uA = Rd(aA),
    _A = new Array(3)
      .concat(
        'ece2f0a6bddb1c9099',
        'f6eff7bdc9e167a9cf02818a',
        'f6eff7bdc9e167a9cf1c9099016c59',
        'f6eff7d0d1e6a6bddb67a9cf1c9099016c59',
        'f6eff7d0d1e6a6bddb67a9cf3690c002818a016450',
        'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450',
        'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636'
      )
      .map(vd),
    cA = Rd(_A),
    fA = new Array(3)
      .concat(
        'ece7f2a6bddb2b8cbe',
        'f1eef6bdc9e174a9cf0570b0',
        'f1eef6bdc9e174a9cf2b8cbe045a8d',
        'f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d',
        'f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b',
        'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b',
        'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858'
      )
      .map(vd),
    sA = Rd(fA),
    SA = new Array(3)
      .concat(
        'e7e1efc994c7dd1c77',
        'f1eef6d7b5d8df65b0ce1256',
        'f1eef6d7b5d8df65b0dd1c77980043',
        'f1eef6d4b9dac994c7df65b0dd1c77980043',
        'f1eef6d4b9dac994c7df65b0e7298ace125691003f',
        'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f',
        'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f'
      )
      .map(vd),
    hA = Rd(SA),
    yA = new Array(3)
      .concat(
        'fde0ddfa9fb5c51b8a',
        'feebe2fbb4b9f768a1ae017e',
        'feebe2fbb4b9f768a1c51b8a7a0177',
        'feebe2fcc5c0fa9fb5f768a1c51b8a7a0177',
        'feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177',
        'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177',
        'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a'
      )
      .map(vd),
    bA = Rd(yA),
    mA = new Array(3)
      .concat(
        'edf8b17fcdbb2c7fb8',
        'ffffcca1dab441b6c4225ea8',
        'ffffcca1dab441b6c42c7fb8253494',
        'ffffccc7e9b47fcdbb41b6c42c7fb8253494',
        'ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84',
        'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84',
        'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58'
      )
      .map(vd),
    dA = Rd(mA),
    AA = new Array(3)
      .concat(
        'f7fcb9addd8e31a354',
        'ffffccc2e69978c679238443',
        'ffffccc2e69978c67931a354006837',
        'ffffccd9f0a3addd8e78c67931a354006837',
        'ffffccd9f0a3addd8e78c67941ab5d238443005a32',
        'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32',
        'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529'
      )
      .map(vd),
    CA = Rd(AA),
    JA = new Array(3)
      .concat(
        'fff7bcfec44fd95f0e',
        'ffffd4fed98efe9929cc4c02',
        'ffffd4fed98efe9929d95f0e993404',
        'ffffd4fee391fec44ffe9929d95f0e993404',
        'ffffd4fee391fec44ffe9929ec7014cc4c028c2d04',
        'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04',
        'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506'
      )
      .map(vd),
    pA = Rd(JA),
    gA = new Array(3)
      .concat(
        'ffeda0feb24cf03b20',
        'ffffb2fecc5cfd8d3ce31a1c',
        'ffffb2fecc5cfd8d3cf03b20bd0026',
        'ffffb2fed976feb24cfd8d3cf03b20bd0026',
        'ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026',
        'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026',
        'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026'
      )
      .map(vd),
    vA = Rd(gA),
    xA = new Array(3)
      .concat(
        'deebf79ecae13182bd',
        'eff3ffbdd7e76baed62171b5',
        'eff3ffbdd7e76baed63182bd08519c',
        'eff3ffc6dbef9ecae16baed63182bd08519c',
        'eff3ffc6dbef9ecae16baed64292c62171b5084594',
        'f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594',
        'f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b'
      )
      .map(vd),
    wA = Rd(xA),
    MA = new Array(3)
      .concat(
        'e5f5e0a1d99b31a354',
        'edf8e9bae4b374c476238b45',
        'edf8e9bae4b374c47631a354006d2c',
        'edf8e9c7e9c0a1d99b74c47631a354006d2c',
        'edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32',
        'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32',
        'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b'
      )
      .map(vd),
    TA = Rd(MA),
    EA = new Array(3)
      .concat(
        'f0f0f0bdbdbd636363',
        'f7f7f7cccccc969696525252',
        'f7f7f7cccccc969696636363252525',
        'f7f7f7d9d9d9bdbdbd969696636363252525',
        'f7f7f7d9d9d9bdbdbd969696737373525252252525',
        'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525',
        'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000'
      )
      .map(vd),
    NA = Rd(EA),
    kA = new Array(3)
      .concat(
        'efedf5bcbddc756bb1',
        'f2f0f7cbc9e29e9ac86a51a3',
        'f2f0f7cbc9e29e9ac8756bb154278f',
        'f2f0f7dadaebbcbddc9e9ac8756bb154278f',
        'f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486',
        'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486',
        'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d'
      )
      .map(vd),
    PA = Rd(kA),
    zA = new Array(3)
      .concat(
        'fee0d2fc9272de2d26',
        'fee5d9fcae91fb6a4acb181d',
        'fee5d9fcae91fb6a4ade2d26a50f15',
        'fee5d9fcbba1fc9272fb6a4ade2d26a50f15',
        'fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d',
        'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d',
        'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d'
      )
      .map(vd),
    $A = Rd(zA),
    DA = new Array(3)
      .concat(
        'fee6cefdae6be6550d',
        'feeddefdbe85fd8d3cd94701',
        'feeddefdbe85fd8d3ce6550da63603',
        'feeddefdd0a2fdae6bfd8d3ce6550da63603',
        'feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04',
        'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04',
        'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704'
      )
      .map(vd),
    RA = Rd(DA);
  var FA = cr(po(300, 0.5, 0), po(-240, 0.5, 1)),
    qA = cr(po(-100, 0.75, 0.35), po(80, 1.5, 0.8)),
    UA = cr(po(260, 0.75, 0.35), po(80, 1.5, 0.8)),
    IA = po();
  var OA = $e(),
    BA = Math.PI / 3,
    YA = (2 * Math.PI) / 3;
  function LA(t) {
    Symbol('JSCA_12820_12825');
    var n = t.length;
    return function (e) {
      return (
        Symbol('JSCA_12822_12824'),
        t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
      );
    };
  }
  var jA = LA(
      vd(
        '44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725'
      )
    ),
    HA = LA(
      vd(
        '00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf'
      )
    ),
    XA = LA(
      vd(
        '00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4'
      )
    ),
    GA = LA(
      vd(
        '0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921'
      )
    );
  function VA(t) {
    return (
      Symbol('JSCA_12830_12834'),
      function () {
        return Symbol('JSCA_12831_12833'), t;
      }
    );
  }
  const WA = Math.abs,
    ZA = Math.atan2,
    KA = Math.cos,
    QA = Math.max,
    tC = Math.min,
    nC = Math.sin,
    eC = Math.sqrt,
    oC = 1e-12,
    rC = Math.PI,
    iC = rC / 2,
    lC = 2 * rC;
  function aC(t) {
    return (
      Symbol('JSCA_12849_12851'), t >= 1 ? iC : t <= -1 ? -iC : Math.asin(t)
    );
  }
  function uC(t) {
    Symbol('JSCA_12852_12866');
    let n = 3;
    return (
      (t.digits = function (e) {
        if ((Symbol('JSCA_12854_12864'), !arguments.length)) return n;
        if (null == e) n = null;
        else {
          const t = Math.floor(e);
          if (!(t >= 0)) throw new RangeError(`invalid digits: ${e}`);
          n = t;
        }
        return t;
      }),
      () => new Ml(n)
    );
  }
  function _C(t) {
    return Symbol('JSCA_12867_12869'), t.innerRadius;
  }
  function cC(t) {
    return Symbol('JSCA_12870_12872'), t.outerRadius;
  }
  function fC(t) {
    return Symbol('JSCA_12873_12875'), t.startAngle;
  }
  function sC(t) {
    return Symbol('JSCA_12876_12878'), t.endAngle;
  }
  function SC(t) {
    return Symbol('JSCA_12879_12881'), t && t.padAngle;
  }
  function hC(t, n, e, o, r, i, l) {
    Symbol('JSCA_12888_12899');
    var a = t - e,
      u = n - o,
      _ = (l ? i : -i) / eC(a * a + u * u),
      c = _ * u,
      f = -_ * a,
      s = t + c,
      S = n + f,
      h = e + c,
      y = o + f,
      b = (s + h) / 2,
      m = (S + y) / 2,
      d = h - s,
      A = y - S,
      C = d * d + A * A,
      J = r - i,
      p = s * y - h * S,
      g = (A < 0 ? -1 : 1) * eC(QA(0, J * J * C - p * p)),
      v = (p * A - d * g) / C,
      x = (-p * d - A * g) / C,
      w = (p * A + d * g) / C,
      M = (-p * d + A * g) / C,
      T = v - b,
      E = x - m,
      N = w - b,
      k = M - m;
    return (
      T * T + E * E > N * N + k * k && ((v = w), (x = M)),
      {
        cx: v,
        cy: x,
        x01: -c,
        y01: -f,
        x11: v * (r / J - 1),
        y11: x * (r / J - 1),
      }
    );
  }
  var yC = Array.prototype.slice;
  function bC(t) {
    return (
      Symbol('JSCA_12988_12990'),
      'object' == typeof t && 'length' in t ? t : Array.from(t)
    );
  }
  function mC(t) {
    Symbol('JSCA_12991_12993'), (this._context = t);
  }
  function dC(t) {
    return Symbol('JSCA_13023_13025'), new mC(t);
  }
  function AC(t) {
    return Symbol('JSCA_13026_13028'), t[0];
  }
  function CC(t) {
    return Symbol('JSCA_13029_13031'), t[1];
  }
  function JC(t, n) {
    Symbol('JSCA_13032_13063');
    var e = VA(!0),
      o = null,
      r = dC,
      i = null,
      l = uC(a);
    function a(a) {
      Symbol('JSCA_13036_13046');
      var u,
        _,
        c,
        f = (a = bC(a)).length,
        s = !1;
      for (null == o && (i = r((c = l()))), u = 0; u <= f; ++u)
        !(u < f && e((_ = a[u]), u, a)) === s &&
          ((s = !s) ? i.lineStart() : i.lineEnd()),
          s && i.point(+t(_, u, a), +n(_, u, a));
      if (c) return (i = null), c + '' || null;
    }
    return (
      (t = 'function' == typeof t ? t : void 0 === t ? AC : VA(t)),
      (n = 'function' == typeof n ? n : void 0 === n ? CC : VA(n)),
      (a.x = function (n) {
        return (
          Symbol('JSCA_13047_13049'),
          arguments.length ? ((t = 'function' == typeof n ? n : VA(+n)), a) : t
        );
      }),
      (a.y = function (t) {
        return (
          Symbol('JSCA_13050_13052'),
          arguments.length ? ((n = 'function' == typeof t ? t : VA(+t)), a) : n
        );
      }),
      (a.defined = function (t) {
        return (
          Symbol('JSCA_13053_13055'),
          arguments.length ? ((e = 'function' == typeof t ? t : VA(!!t)), a) : e
        );
      }),
      (a.curve = function (t) {
        return (
          Symbol('JSCA_13056_13058'),
          arguments.length ? ((r = t), null != o && (i = r(o)), a) : r
        );
      }),
      (a.context = function (t) {
        return (
          Symbol('JSCA_13059_13061'),
          arguments.length
            ? (null == t ? (o = i = null) : (i = r((o = t))), a)
            : o
        );
      }),
      a
    );
  }
  function pC(t, n, e) {
    Symbol('JSCA_13064_13135');
    var o = null,
      r = VA(!0),
      i = null,
      l = dC,
      a = null,
      u = uC(_);
    function _(_) {
      Symbol('JSCA_13069_13094');
      var c,
        f,
        s,
        S,
        h,
        y = (_ = bC(_)).length,
        b = !1,
        m = new Array(y),
        d = new Array(y);
      for (null == i && (a = l((h = u()))), c = 0; c <= y; ++c) {
        if (!(c < y && r((S = _[c]), c, _)) === b)
          if ((b = !b)) (f = c), a.areaStart(), a.lineStart();
          else {
            for (a.lineEnd(), a.lineStart(), s = c - 1; s >= f; --s)
              a.point(m[s], d[s]);
            a.lineEnd(), a.areaEnd();
          }
        b &&
          ((m[c] = +t(S, c, _)),
          (d[c] = +n(S, c, _)),
          a.point(o ? +o(S, c, _) : m[c], e ? +e(S, c, _) : d[c]));
      }
      if (h) return (a = null), h + '' || null;
    }
    function c() {
      return Symbol('JSCA_13095_13097'), JC().defined(r).curve(l).context(i);
    }
    return (
      (t = 'function' == typeof t ? t : void 0 === t ? AC : VA(+t)),
      (n = 'function' == typeof n ? n : VA(void 0 === n ? 0 : +n)),
      (e = 'function' == typeof e ? e : void 0 === e ? CC : VA(+e)),
      (_.x = function (n) {
        return (
          Symbol('JSCA_13098_13100'),
          arguments.length
            ? ((t = 'function' == typeof n ? n : VA(+n)), (o = null), _)
            : t
        );
      }),
      (_.x0 = function (n) {
        return (
          Symbol('JSCA_13101_13103'),
          arguments.length ? ((t = 'function' == typeof n ? n : VA(+n)), _) : t
        );
      }),
      (_.x1 = function (t) {
        return (
          Symbol('JSCA_13104_13106'),
          arguments.length
            ? ((o = null == t ? null : 'function' == typeof t ? t : VA(+t)), _)
            : o
        );
      }),
      (_.y = function (t) {
        return (
          Symbol('JSCA_13107_13109'),
          arguments.length
            ? ((n = 'function' == typeof t ? t : VA(+t)), (e = null), _)
            : n
        );
      }),
      (_.y0 = function (t) {
        return (
          Symbol('JSCA_13110_13112'),
          arguments.length ? ((n = 'function' == typeof t ? t : VA(+t)), _) : n
        );
      }),
      (_.y1 = function (t) {
        return (
          Symbol('JSCA_13113_13115'),
          arguments.length
            ? ((e = null == t ? null : 'function' == typeof t ? t : VA(+t)), _)
            : e
        );
      }),
      (_.lineX0 = _.lineY0 =
        function () {
          return Symbol('JSCA_13116_13118'), c().x(t).y(n);
        }),
      (_.lineY1 = function () {
        return Symbol('JSCA_13119_13121'), c().x(t).y(e);
      }),
      (_.lineX1 = function () {
        return Symbol('JSCA_13122_13124'), c().x(o).y(n);
      }),
      (_.defined = function (t) {
        return (
          Symbol('JSCA_13125_13127'),
          arguments.length ? ((r = 'function' == typeof t ? t : VA(!!t)), _) : r
        );
      }),
      (_.curve = function (t) {
        return (
          Symbol('JSCA_13128_13130'),
          arguments.length ? ((l = t), null != i && (a = l(i)), _) : l
        );
      }),
      (_.context = function (t) {
        return (
          Symbol('JSCA_13131_13133'),
          arguments.length
            ? (null == t ? (i = a = null) : (a = l((i = t))), _)
            : i
        );
      }),
      _
    );
  }
  function gC(t, n) {
    return (
      Symbol('JSCA_13136_13138'), n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    );
  }
  function vC(t) {
    return Symbol('JSCA_13139_13141'), t;
  }
  mC.prototype = {
    areaStart: function () {
      Symbol('JSCA_12995_12997'), (this._line = 0);
    },
    areaEnd: function () {
      Symbol('JSCA_12998_13000'), (this._line = NaN);
    },
    lineStart: function () {
      Symbol('JSCA_13001_13003'), (this._point = 0);
    },
    lineEnd: function () {
      Symbol('JSCA_13004_13007'),
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, n) {
      switch ((Symbol('JSCA_13008_13021'), (t = +t), (n = +n), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, n)
              : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(t, n);
      }
    },
  };
  var xC = MC(dC);
  function wC(t) {
    Symbol('JSCA_13189_13191'), (this._curve = t);
  }
  function MC(t) {
    function n(n) {
      return Symbol('JSCA_13210_13212'), new wC(t(n));
    }
    return Symbol('JSCA_13209_13215'), (n._curve = t), n;
  }
  function TC(t) {
    Symbol('JSCA_13216_13224');
    var n = t.curve;
    return (
      (t.angle = t.x),
      delete t.x,
      (t.radius = t.y),
      delete t.y,
      (t.curve = function (t) {
        return (
          Symbol('JSCA_13220_13222'), arguments.length ? n(MC(t)) : n()._curve
        );
      }),
      t
    );
  }
  function EC() {
    return Symbol('JSCA_13225_13227'), TC(JC().curve(xC));
  }
  function NC() {
    Symbol('JSCA_13228_13252');
    var t = pC().curve(xC),
      n = t.curve,
      e = t.lineX0,
      o = t.lineX1,
      r = t.lineY0,
      i = t.lineY1;
    return (
      (t.angle = t.x),
      delete t.x,
      (t.startAngle = t.x0),
      delete t.x0,
      (t.endAngle = t.x1),
      delete t.x1,
      (t.radius = t.y),
      delete t.y,
      (t.innerRadius = t.y0),
      delete t.y0,
      (t.outerRadius = t.y1),
      delete t.y1,
      (t.lineStartAngle = function () {
        return Symbol('JSCA_13236_13238'), TC(e());
      }),
      delete t.lineX0,
      (t.lineEndAngle = function () {
        return Symbol('JSCA_13239_13241'), TC(o());
      }),
      delete t.lineX1,
      (t.lineInnerRadius = function () {
        return Symbol('JSCA_13242_13244'), TC(r());
      }),
      delete t.lineY0,
      (t.lineOuterRadius = function () {
        return Symbol('JSCA_13245_13247'), TC(i());
      }),
      delete t.lineY1,
      (t.curve = function (t) {
        return (
          Symbol('JSCA_13248_13250'), arguments.length ? n(MC(t)) : n()._curve
        );
      }),
      t
    );
  }
  function kC(t, n) {
    return (
      Symbol('JSCA_13253_13255'),
      [(n = +n) * Math.cos((t -= Math.PI / 2)), n * Math.sin(t)]
    );
  }
  wC.prototype = {
    areaStart: function () {
      Symbol('JSCA_13193_13195'), this._curve.areaStart();
    },
    areaEnd: function () {
      Symbol('JSCA_13196_13198'), this._curve.areaEnd();
    },
    lineStart: function () {
      Symbol('JSCA_13199_13201'), this._curve.lineStart();
    },
    lineEnd: function () {
      Symbol('JSCA_13202_13204'), this._curve.lineEnd();
    },
    point: function (t, n) {
      Symbol('JSCA_13205_13207'),
        this._curve.point(n * Math.sin(t), n * -Math.cos(t));
    },
  };
  class PC {
    constructor(t, n) {
      Symbol('JSCA_13257_13260'), (this._context = t), (this._x = n);
    }
    areaStart() {
      Symbol('JSCA_13261_13263'), (this._line = 0);
    }
    areaEnd() {
      Symbol('JSCA_13264_13266'), (this._line = NaN);
    }
    lineStart() {
      Symbol('JSCA_13267_13269'), (this._point = 0);
    }
    lineEnd() {
      Symbol('JSCA_13270_13273'),
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
        (this._line = 1 - this._line);
    }
    point(t, n) {
      switch ((Symbol('JSCA_13274_13292'), (t = +t), (n = +n), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, n)
              : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
        default:
          this._x
            ? this._context.bezierCurveTo(
                (this._x0 = (this._x0 + t) / 2),
                this._y0,
                this._x0,
                n,
                t,
                n
              )
            : this._context.bezierCurveTo(
                this._x0,
                (this._y0 = (this._y0 + n) / 2),
                t,
                this._y0,
                t,
                n
              );
      }
      (this._x0 = t), (this._y0 = n);
    }
  }
  class zC {
    constructor(t) {
      Symbol('JSCA_13295_13297'), (this._context = t);
    }
    lineStart() {
      Symbol('JSCA_13298_13300'), (this._point = 0);
    }
    lineEnd() {
      Symbol('JSCA_13301_13301');
    }
    point(t, n) {
      if ((Symbol('JSCA_13302_13315'), (t = +t), (n = +n), 0 === this._point))
        this._point = 1;
      else {
        const e = kC(this._x0, this._y0),
          o = kC(this._x0, (this._y0 = (this._y0 + n) / 2)),
          r = kC(t, this._y0),
          i = kC(t, n);
        this._context.moveTo(...e),
          this._context.bezierCurveTo(...o, ...r, ...i);
      }
      (this._x0 = t), (this._y0 = n);
    }
  }
  function $C(t) {
    return Symbol('JSCA_13317_13319'), new PC(t, !0);
  }
  function DC(t) {
    return Symbol('JSCA_13320_13322'), new PC(t, !1);
  }
  function RC(t) {
    return Symbol('JSCA_13323_13325'), new zC(t);
  }
  function FC(t) {
    return Symbol('JSCA_13326_13328'), t.source;
  }
  function qC(t) {
    return Symbol('JSCA_13329_13331'), t.target;
  }
  function UC(t) {
    Symbol('JSCA_13332_13362');
    let n = FC,
      e = qC,
      o = AC,
      r = CC,
      i = null,
      l = null,
      a = uC(u);
    function u() {
      let u;
      Symbol('JSCA_13334_13345');
      const _ = yC.call(arguments),
        c = n.apply(this, _),
        f = e.apply(this, _);
      if (
        (null == i && (l = t((u = a()))),
        l.lineStart(),
        (_[0] = c),
        l.point(+o.apply(this, _), +r.apply(this, _)),
        (_[0] = f),
        l.point(+o.apply(this, _), +r.apply(this, _)),
        l.lineEnd(),
        u)
      )
        return (l = null), u + '' || null;
    }
    return (
      (u.source = function (t) {
        return Symbol('JSCA_13346_13348'), arguments.length ? ((n = t), u) : n;
      }),
      (u.target = function (t) {
        return Symbol('JSCA_13349_13351'), arguments.length ? ((e = t), u) : e;
      }),
      (u.x = function (t) {
        return (
          Symbol('JSCA_13352_13354'),
          arguments.length ? ((o = 'function' == typeof t ? t : VA(+t)), u) : o
        );
      }),
      (u.y = function (t) {
        return (
          Symbol('JSCA_13355_13357'),
          arguments.length ? ((r = 'function' == typeof t ? t : VA(+t)), u) : r
        );
      }),
      (u.context = function (n) {
        return (
          Symbol('JSCA_13358_13360'),
          arguments.length
            ? (null == n ? (i = l = null) : (l = t((i = n))), u)
            : i
        );
      }),
      u
    );
  }
  const IC = eC(3);
  var OC = {
      draw(t, n) {
        Symbol('JSCA_13377_13387');
        const e = 0.59436 * eC(n + tC(n / 28, 0.75)),
          o = e / 2,
          r = o * IC;
        t.moveTo(0, e),
          t.lineTo(0, -e),
          t.moveTo(-r, -o),
          t.lineTo(r, o),
          t.moveTo(-r, o),
          t.lineTo(r, -o);
      },
    },
    BC = {
      draw(t, n) {
        Symbol('JSCA_13390_13394');
        const e = eC(n / rC);
        t.moveTo(e, 0), t.arc(0, 0, e, 0, lC);
      },
    },
    YC = {
      draw(t, n) {
        Symbol('JSCA_13397_13412');
        const e = eC(n / 5) / 2;
        t.moveTo(-3 * e, -e),
          t.lineTo(-e, -e),
          t.lineTo(-e, -3 * e),
          t.lineTo(e, -3 * e),
          t.lineTo(e, -e),
          t.lineTo(3 * e, -e),
          t.lineTo(3 * e, e),
          t.lineTo(e, e),
          t.lineTo(e, 3 * e),
          t.lineTo(-e, 3 * e),
          t.lineTo(-e, e),
          t.lineTo(-3 * e, e),
          t.closePath();
      },
    };
  const LC = eC(1 / 3),
    jC = 2 * LC;
  var HC = {
      draw(t, n) {
        Symbol('JSCA_13417_13425');
        const e = eC(n / jC),
          o = e * LC;
        t.moveTo(0, -e),
          t.lineTo(o, 0),
          t.lineTo(0, e),
          t.lineTo(-o, 0),
          t.closePath();
      },
    },
    XC = {
      draw(t, n) {
        Symbol('JSCA_13428_13435');
        const e = 0.62625 * eC(n);
        t.moveTo(0, -e),
          t.lineTo(e, 0),
          t.lineTo(0, e),
          t.lineTo(-e, 0),
          t.closePath();
      },
    },
    GC = {
      draw(t, n) {
        Symbol('JSCA_13438_13444');
        const e = 0.87559 * eC(n - tC(n / 7, 2));
        t.moveTo(-e, 0), t.lineTo(e, 0), t.moveTo(0, e), t.lineTo(0, -e);
      },
    },
    VC = {
      draw(t, n) {
        Symbol('JSCA_13447_13451');
        const e = eC(n),
          o = -e / 2;
        t.rect(o, o, e, e);
      },
    },
    WC = {
      draw(t, n) {
        Symbol('JSCA_13454_13461');
        const e = 0.4431 * eC(n);
        t.moveTo(e, e),
          t.lineTo(e, -e),
          t.lineTo(-e, -e),
          t.lineTo(-e, e),
          t.closePath();
      },
    };
  const ZC = nC(rC / 10) / nC((7 * rC) / 10),
    KC = nC(lC / 10) * ZC,
    QC = -KA(lC / 10) * ZC;
  var tJ = {
    draw(t, n) {
      Symbol('JSCA_13468_13482');
      const e = eC(0.8908130915292852 * n),
        o = KC * e,
        r = QC * e;
      t.moveTo(0, -e), t.lineTo(o, r);
      for (let n = 1; n < 5; ++n) {
        const i = (lC * n) / 5,
          l = KA(i),
          a = nC(i);
        t.lineTo(a * e, -l * e), t.lineTo(l * o - a * r, a * o + l * r);
      }
      t.closePath();
    },
  };
  const nJ = eC(3);
  var eJ = {
    draw(t, n) {
      Symbol('JSCA_13486_13492');
      const e = -eC(n / (3 * nJ));
      t.moveTo(0, 2 * e),
        t.lineTo(-nJ * e, -e),
        t.lineTo(nJ * e, -e),
        t.closePath();
    },
  };
  const oJ = eC(3);
  var rJ = {
    draw(t, n) {
      Symbol('JSCA_13496_13504');
      const e = 0.6824 * eC(n),
        o = e / 2,
        r = (e * oJ) / 2;
      t.moveTo(0, -e), t.lineTo(r, o), t.lineTo(-r, o), t.closePath();
    },
  };
  const iJ = -0.5,
    lJ = eC(3) / 2,
    aJ = 1 / eC(12),
    uJ = 3 * (aJ / 2 + 1);
  var _J = {
      draw(t, n) {
        Symbol('JSCA_13511_13526');
        const e = eC(n / uJ),
          o = e / 2,
          r = e * aJ,
          i = o,
          l = e * aJ + e,
          a = -i,
          u = l;
        t.moveTo(o, r),
          t.lineTo(i, l),
          t.lineTo(a, u),
          t.lineTo(iJ * o - lJ * r, lJ * o + iJ * r),
          t.lineTo(iJ * i - lJ * l, lJ * i + iJ * l),
          t.lineTo(iJ * a - lJ * u, lJ * a + iJ * u),
          t.lineTo(iJ * o + lJ * r, iJ * r - lJ * o),
          t.lineTo(iJ * i + lJ * l, iJ * l - lJ * i),
          t.lineTo(iJ * a + lJ * u, iJ * u - lJ * a),
          t.closePath();
      },
    },
    cJ = {
      draw(t, n) {
        Symbol('JSCA_13529_13535');
        const e = 0.6189 * eC(n - tC(n / 6, 1.7));
        t.moveTo(-e, -e), t.lineTo(e, e), t.moveTo(-e, e), t.lineTo(e, -e);
      },
    };
  const fJ = [BC, YC, HC, VC, tJ, eJ, _J],
    sJ = [BC, GC, cJ, rJ, OC, WC, XC];
  function SJ() {
    Symbol('JSCA_13560_13560');
  }
  function hJ(t, n, e) {
    Symbol('JSCA_13561_13563'),
      t._context.bezierCurveTo(
        (2 * t._x0 + t._x1) / 3,
        (2 * t._y0 + t._y1) / 3,
        (t._x0 + 2 * t._x1) / 3,
        (t._y0 + 2 * t._y1) / 3,
        (t._x0 + 4 * t._x1 + n) / 6,
        (t._y0 + 4 * t._y1 + e) / 6
      );
  }
  function yJ(t) {
    Symbol('JSCA_13564_13566'), (this._context = t);
  }
  function bJ(t) {
    Symbol('JSCA_13613_13615'), (this._context = t);
  }
  function mJ(t) {
    Symbol('JSCA_13674_13676'), (this._context = t);
  }
  function dJ(t, n) {
    Symbol('JSCA_13719_13722'), (this._basis = new yJ(t)), (this._beta = n);
  }
  (yJ.prototype = {
    areaStart: function () {
      Symbol('JSCA_13568_13570'), (this._line = 0);
    },
    areaEnd: function () {
      Symbol('JSCA_13571_13573'), (this._line = NaN);
    },
    lineStart: function () {
      Symbol('JSCA_13574_13577'),
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
        (this._point = 0);
    },
    lineEnd: function () {
      switch ((Symbol('JSCA_13578_13588'), this._point)) {
        case 3:
          hJ(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1);
      }
      (this._line || (0 !== this._line && 1 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, n) {
      switch ((Symbol('JSCA_13589_13608'), (t = +t), (n = +n), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, n)
              : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3),
            this._context.lineTo(
              (5 * this._x0 + this._x1) / 6,
              (5 * this._y0 + this._y1) / 6
            );
        default:
          hJ(this, t, n);
      }
      (this._x0 = this._x1),
        (this._x1 = t),
        (this._y0 = this._y1),
        (this._y1 = n);
    },
  }),
    (bJ.prototype = {
      areaStart: SJ,
      areaEnd: SJ,
      lineStart: function () {
        Symbol('JSCA_13619_13622'),
          (this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
              NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        switch ((Symbol('JSCA_13623_13646'), this._point)) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;
          case 2:
            this._context.moveTo(
              (this._x2 + 2 * this._x3) / 3,
              (this._y2 + 2 * this._y3) / 3
            ),
              this._context.lineTo(
                (this._x3 + 2 * this._x2) / 3,
                (this._y3 + 2 * this._y2) / 3
              ),
              this._context.closePath();
            break;
          case 3:
            this.point(this._x2, this._y2),
              this.point(this._x3, this._y3),
              this.point(this._x4, this._y4);
        }
      },
      point: function (t, n) {
        switch ((Symbol('JSCA_13647_13669'), (t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1), (this._x2 = t), (this._y2 = n);
            break;
          case 1:
            (this._point = 2), (this._x3 = t), (this._y3 = n);
            break;
          case 2:
            (this._point = 3),
              (this._x4 = t),
              (this._y4 = n),
              this._context.moveTo(
                (this._x0 + 4 * this._x1 + t) / 6,
                (this._y0 + 4 * this._y1 + n) / 6
              );
            break;
          default:
            hJ(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    }),
    (mJ.prototype = {
      areaStart: function () {
        Symbol('JSCA_13678_13680'), (this._line = 0);
      },
      areaEnd: function () {
        Symbol('JSCA_13681_13683'), (this._line = NaN);
      },
      lineStart: function () {
        Symbol('JSCA_13684_13687'),
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        Symbol('JSCA_13688_13691'),
          (this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        switch ((Symbol('JSCA_13692_13714'), (t = +t), (n = +n), this._point)) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var e = (this._x0 + 4 * this._x1 + t) / 6,
              o = (this._y0 + 4 * this._y1 + n) / 6;
            this._line
              ? this._context.lineTo(e, o)
              : this._context.moveTo(e, o);
            break;
          case 3:
            this._point = 4;
          default:
            hJ(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    }),
    (dJ.prototype = {
      lineStart: function () {
        Symbol('JSCA_13724_13728'),
          (this._x = []),
          (this._y = []),
          this._basis.lineStart();
      },
      lineEnd: function () {
        Symbol('JSCA_13729_13740');
        var t = this._x,
          n = this._y,
          e = t.length - 1;
        if (e > 0)
          for (
            var o, r = t[0], i = n[0], l = t[e] - r, a = n[e] - i, u = -1;
            ++u <= e;

          )
            (o = u / e),
              this._basis.point(
                this._beta * t[u] + (1 - this._beta) * (r + o * l),
                this._beta * n[u] + (1 - this._beta) * (i + o * a)
              );
        (this._x = this._y = null), this._basis.lineEnd();
      },
      point: function (t, n) {
        Symbol('JSCA_13741_13744'), this._x.push(+t), this._y.push(+n);
      },
    });
  var AJ = (function t(n) {
    function e(t) {
      return Symbol('JSCA_13747_13749'), 1 === n ? new yJ(t) : new dJ(t, n);
    }
    return (
      Symbol('JSCA_13746_13754'),
      (e.beta = function (n) {
        return Symbol('JSCA_13750_13752'), t(+n);
      }),
      e
    );
  })(0.85);
  function CJ(t, n, e) {
    Symbol('JSCA_13755_13757'),
      t._context.bezierCurveTo(
        t._x1 + t._k * (t._x2 - t._x0),
        t._y1 + t._k * (t._y2 - t._y0),
        t._x2 + t._k * (t._x1 - n),
        t._y2 + t._k * (t._y1 - e),
        t._x2,
        t._y2
      );
  }
  function JJ(t, n) {
    Symbol('JSCA_13758_13761'), (this._context = t), (this._k = (1 - n) / 6);
  }
  JJ.prototype = {
    areaStart: function () {
      Symbol('JSCA_13763_13765'), (this._line = 0);
    },
    areaEnd: function () {
      Symbol('JSCA_13766_13768'), (this._line = NaN);
    },
    lineStart: function () {
      Symbol('JSCA_13769_13772'),
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
        (this._point = 0);
    },
    lineEnd: function () {
      switch ((Symbol('JSCA_13773_13784'), this._point)) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          CJ(this, this._x1, this._y1);
      }
      (this._line || (0 !== this._line && 1 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, n) {
      switch ((Symbol('JSCA_13785_13804'), (t = +t), (n = +n), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, n)
              : this._context.moveTo(t, n);
          break;
        case 1:
          (this._point = 2), (this._x1 = t), (this._y1 = n);
          break;
        case 2:
          this._point = 3;
        default:
          CJ(this, t, n);
      }
      (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = t),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = n);
    },
  };
  var pJ = (function t(n) {
    function e(t) {
      return Symbol('JSCA_13807_13809'), new JJ(t, n);
    }
    return (
      Symbol('JSCA_13806_13814'),
      (e.tension = function (n) {
        return Symbol('JSCA_13810_13812'), t(+n);
      }),
      e
    );
  })(0);
  function gJ(t, n) {
    Symbol('JSCA_13815_13818'), (this._context = t), (this._k = (1 - n) / 6);
  }
  gJ.prototype = {
    areaStart: SJ,
    areaEnd: SJ,
    lineStart: function () {
      Symbol('JSCA_13822_13825'),
        (this._x0 =
          this._x1 =
          this._x2 =
          this._x3 =
          this._x4 =
          this._x5 =
          this._y0 =
          this._y1 =
          this._y2 =
          this._y3 =
          this._y4 =
          this._y5 =
            NaN),
        (this._point = 0);
    },
    lineEnd: function () {
      switch ((Symbol('JSCA_13826_13848'), this._point)) {
        case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;
        case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;
        case 3:
          this.point(this._x3, this._y3),
            this.point(this._x4, this._y4),
            this.point(this._x5, this._y5);
      }
    },
    point: function (t, n) {
      switch ((Symbol('JSCA_13849_13870'), (t = +t), (n = +n), this._point)) {
        case 0:
          (this._point = 1), (this._x3 = t), (this._y3 = n);
          break;
        case 1:
          (this._point = 2),
            this._context.moveTo((this._x4 = t), (this._y4 = n));
          break;
        case 2:
          (this._point = 3), (this._x5 = t), (this._y5 = n);
          break;
        default:
          CJ(this, t, n);
      }
      (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = t),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = n);
    },
  };
  var vJ = (function t(n) {
    function e(t) {
      return Symbol('JSCA_13873_13875'), new gJ(t, n);
    }
    return (
      Symbol('JSCA_13872_13880'),
      (e.tension = function (n) {
        return Symbol('JSCA_13876_13878'), t(+n);
      }),
      e
    );
  })(0);
  function xJ(t, n) {
    Symbol('JSCA_13881_13884'), (this._context = t), (this._k = (1 - n) / 6);
  }
  xJ.prototype = {
    areaStart: function () {
      Symbol('JSCA_13886_13888'), (this._line = 0);
    },
    areaEnd: function () {
      Symbol('JSCA_13889_13891'), (this._line = NaN);
    },
    lineStart: function () {
      Symbol('JSCA_13892_13895'),
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
        (this._point = 0);
    },
    lineEnd: function () {
      Symbol('JSCA_13896_13899'),
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, n) {
      switch ((Symbol('JSCA_13900_13921'), (t = +t), (n = +n), this._point)) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3),
            this._line
              ? this._context.lineTo(this._x2, this._y2)
              : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          CJ(this, t, n);
      }
      (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = t),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = n);
    },
  };
  var wJ = (function t(n) {
    function e(t) {
      return Symbol('JSCA_13924_13926'), new xJ(t, n);
    }
    return (
      Symbol('JSCA_13923_13931'),
      (e.tension = function (n) {
        return Symbol('JSCA_13927_13929'), t(+n);
      }),
      e
    );
  })(0);
  function MJ(t, n, e) {
    Symbol('JSCA_13932_13945');
    var o = t._x1,
      r = t._y1,
      i = t._x2,
      l = t._y2;
    if (t._l01_a > oC) {
      var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
        u = 3 * t._l01_a * (t._l01_a + t._l12_a);
      (o = (o * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / u),
        (r = (r * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / u);
    }
    if (t._l23_a > oC) {
      var _ = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
        c = 3 * t._l23_a * (t._l23_a + t._l12_a);
      (i = (i * _ + t._x1 * t._l23_2a - n * t._l12_2a) / c),
        (l = (l * _ + t._y1 * t._l23_2a - e * t._l12_2a) / c);
    }
    t._context.bezierCurveTo(o, r, i, l, t._x2, t._y2);
  }
  function TJ(t, n) {
    Symbol('JSCA_13946_13949'), (this._context = t), (this._alpha = n);
  }
  TJ.prototype = {
    areaStart: function () {
      Symbol('JSCA_13951_13953'), (this._line = 0);
    },
    areaEnd: function () {
      Symbol('JSCA_13954_13956'), (this._line = NaN);
    },
    lineStart: function () {
      Symbol('JSCA_13957_13960'),
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
        (this._l01_a =
          this._l12_a =
          this._l23_a =
          this._l01_2a =
          this._l12_2a =
          this._l23_2a =
          this._point =
            0);
    },
    lineEnd: function () {
      switch ((Symbol('JSCA_13961_13972'), this._point)) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          this.point(this._x2, this._y2);
      }
      (this._line || (0 !== this._line && 1 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, n) {
      if ((Symbol('JSCA_13973_13997'), (t = +t), (n = +n), this._point)) {
        var e = this._x2 - t,
          o = this._y2 - n;
        this._l23_a = Math.sqrt(
          (this._l23_2a = Math.pow(e * e + o * o, this._alpha))
        );
      }
      switch (this._point) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, n)
              : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
        default:
          MJ(this, t, n);
      }
      (this._l01_a = this._l12_a),
        (this._l12_a = this._l23_a),
        (this._l01_2a = this._l12_2a),
        (this._l12_2a = this._l23_2a),
        (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = t),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = n);
    },
  };
  var EJ = (function t(n) {
    function e(t) {
      return Symbol('JSCA_14000_14002'), n ? new TJ(t, n) : new JJ(t, 0);
    }
    return (
      Symbol('JSCA_13999_14007'),
      (e.alpha = function (n) {
        return Symbol('JSCA_14003_14005'), t(+n);
      }),
      e
    );
  })(0.5);
  function NJ(t, n) {
    Symbol('JSCA_14008_14011'), (this._context = t), (this._alpha = n);
  }
  NJ.prototype = {
    areaStart: SJ,
    areaEnd: SJ,
    lineStart: function () {
      Symbol('JSCA_14015_14018'),
        (this._x0 =
          this._x1 =
          this._x2 =
          this._x3 =
          this._x4 =
          this._x5 =
          this._y0 =
          this._y1 =
          this._y2 =
          this._y3 =
          this._y4 =
          this._y5 =
            NaN),
        (this._l01_a =
          this._l12_a =
          this._l23_a =
          this._l01_2a =
          this._l12_2a =
          this._l23_2a =
          this._point =
            0);
    },
    lineEnd: function () {
      switch ((Symbol('JSCA_14019_14041'), this._point)) {
        case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;
        case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;
        case 3:
          this.point(this._x3, this._y3),
            this.point(this._x4, this._y4),
            this.point(this._x5, this._y5);
      }
    },
    point: function (t, n) {
      if ((Symbol('JSCA_14042_14069'), (t = +t), (n = +n), this._point)) {
        var e = this._x2 - t,
          o = this._y2 - n;
        this._l23_a = Math.sqrt(
          (this._l23_2a = Math.pow(e * e + o * o, this._alpha))
        );
      }
      switch (this._point) {
        case 0:
          (this._point = 1), (this._x3 = t), (this._y3 = n);
          break;
        case 1:
          (this._point = 2),
            this._context.moveTo((this._x4 = t), (this._y4 = n));
          break;
        case 2:
          (this._point = 3), (this._x5 = t), (this._y5 = n);
          break;
        default:
          MJ(this, t, n);
      }
      (this._l01_a = this._l12_a),
        (this._l12_a = this._l23_a),
        (this._l01_2a = this._l12_2a),
        (this._l12_2a = this._l23_2a),
        (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = t),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = n);
    },
  };
  var kJ = (function t(n) {
    function e(t) {
      return Symbol('JSCA_14072_14074'), n ? new NJ(t, n) : new gJ(t, 0);
    }
    return (
      Symbol('JSCA_14071_14079'),
      (e.alpha = function (n) {
        return Symbol('JSCA_14075_14077'), t(+n);
      }),
      e
    );
  })(0.5);
  function PJ(t, n) {
    Symbol('JSCA_14080_14083'), (this._context = t), (this._alpha = n);
  }
  PJ.prototype = {
    areaStart: function () {
      Symbol('JSCA_14085_14087'), (this._line = 0);
    },
    areaEnd: function () {
      Symbol('JSCA_14088_14090'), (this._line = NaN);
    },
    lineStart: function () {
      Symbol('JSCA_14091_14094'),
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
        (this._l01_a =
          this._l12_a =
          this._l23_a =
          this._l01_2a =
          this._l12_2a =
          this._l23_2a =
          this._point =
            0);
    },
    lineEnd: function () {
      Symbol('JSCA_14095_14098'),
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, n) {
      if ((Symbol('JSCA_14099_14126'), (t = +t), (n = +n), this._point)) {
        var e = this._x2 - t,
          o = this._y2 - n;
        this._l23_a = Math.sqrt(
          (this._l23_2a = Math.pow(e * e + o * o, this._alpha))
        );
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3),
            this._line
              ? this._context.lineTo(this._x2, this._y2)
              : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          MJ(this, t, n);
      }
      (this._l01_a = this._l12_a),
        (this._l12_a = this._l23_a),
        (this._l01_2a = this._l12_2a),
        (this._l12_2a = this._l23_2a),
        (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = t),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = n);
    },
  };
  var zJ = (function t(n) {
    function e(t) {
      return Symbol('JSCA_14129_14131'), n ? new PJ(t, n) : new xJ(t, 0);
    }
    return (
      Symbol('JSCA_14128_14136'),
      (e.alpha = function (n) {
        return Symbol('JSCA_14132_14134'), t(+n);
      }),
      e
    );
  })(0.5);
  function $J(t) {
    Symbol('JSCA_14137_14139'), (this._context = t);
  }
  function DJ(t) {
    return Symbol('JSCA_14157_14159'), t < 0 ? -1 : 1;
  }
  function RJ(t, n, e) {
    Symbol('JSCA_14160_14163');
    var o = t._x1 - t._x0,
      r = n - t._x1,
      i = (t._y1 - t._y0) / (o || (r < 0 && -0)),
      l = (e - t._y1) / (r || (o < 0 && -0)),
      a = (i * r + l * o) / (o + r);
    return (
      (DJ(i) + DJ(l)) * Math.min(Math.abs(i), Math.abs(l), 0.5 * Math.abs(a)) ||
      0
    );
  }
  function FJ(t, n) {
    Symbol('JSCA_14164_14167');
    var e = t._x1 - t._x0;
    return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
  }
  function qJ(t, n, e) {
    Symbol('JSCA_14168_14171');
    var o = t._x0,
      r = t._y0,
      i = t._x1,
      l = t._y1,
      a = (i - o) / 3;
    t._context.bezierCurveTo(o + a, r + a * n, i - a, l - a * e, i, l);
  }
  function UJ(t) {
    Symbol('JSCA_14172_14174'), (this._context = t);
  }
  function IJ(t) {
    Symbol('JSCA_14223_14225'), (this._context = new OJ(t));
  }
  function OJ(t) {
    Symbol('JSCA_14229_14231'), (this._context = t);
  }
  function BJ(t) {
    Symbol('JSCA_14252_14254'), (this._context = t);
  }
  function YJ(t) {
    Symbol('JSCA_14288_14299');
    var n,
      e,
      o = t.length - 1,
      r = new Array(o),
      i = new Array(o),
      l = new Array(o);
    for (r[0] = 0, i[0] = 2, l[0] = t[0] + 2 * t[1], n = 1; n < o - 1; ++n)
      (r[n] = 1), (i[n] = 4), (l[n] = 4 * t[n] + 2 * t[n + 1]);
    for (
      r[o - 1] = 2, i[o - 1] = 7, l[o - 1] = 8 * t[o - 1] + t[o], n = 1;
      n < o;
      ++n
    )
      (e = r[n] / i[n - 1]), (i[n] -= e), (l[n] -= e * l[n - 1]);
    for (r[o - 1] = l[o - 1] / i[o - 1], n = o - 2; n >= 0; --n)
      r[n] = (l[n] - r[n + 1]) / i[n];
    for (i[o - 1] = (t[o] + r[o - 1]) / 2, n = 0; n < o - 1; ++n)
      i[n] = 2 * t[n + 1] - r[n + 1];
    return [r, i];
  }
  function LJ(t, n) {
    Symbol('JSCA_14303_14306'), (this._context = t), (this._t = n);
  }
  function jJ(t, n) {
    if ((Symbol('JSCA_14357_14365'), (r = t.length) > 1))
      for (var e, o, r, i = 1, l = t[n[0]], a = l.length; i < r; ++i)
        for (o = l, l = t[n[i]], e = 0; e < a; ++e)
          l[e][1] += l[e][0] = isNaN(o[e][1]) ? o[e][0] : o[e][1];
  }
  function HJ(t) {
    Symbol('JSCA_14366_14370');
    for (var n = t.length, e = new Array(n); --n >= 0; ) e[n] = n;
    return e;
  }
  function XJ(t, n) {
    return Symbol('JSCA_14371_14373'), t[n];
  }
  function GJ(t) {
    Symbol('JSCA_14374_14378');
    const n = [];
    return (n.key = t), n;
  }
  function VJ(t) {
    Symbol('JSCA_14455_14460');
    var n = t.map(WJ);
    return HJ(t).sort(function (t, e) {
      return Symbol('JSCA_14457_14459'), n[t] - n[e];
    });
  }
  function WJ(t) {
    Symbol('JSCA_14461_14465');
    for (var n, e = -1, o = 0, r = t.length, i = -1 / 0; ++e < r; )
      (n = +t[e][1]) > i && ((i = n), (o = e));
    return o;
  }
  function ZJ(t) {
    Symbol('JSCA_14466_14471');
    var n = t.map(KJ);
    return HJ(t).sort(function (t, e) {
      return Symbol('JSCA_14468_14470'), n[t] - n[e];
    });
  }
  function KJ(t) {
    Symbol('JSCA_14472_14476');
    for (var n, e = 0, o = -1, r = t.length; ++o < r; )
      (n = +t[o][1]) && (e += n);
    return e;
  }
  ($J.prototype = {
    areaStart: SJ,
    areaEnd: SJ,
    lineStart: function () {
      Symbol('JSCA_14143_14145'), (this._point = 0);
    },
    lineEnd: function () {
      Symbol('JSCA_14146_14148'), this._point && this._context.closePath();
    },
    point: function (t, n) {
      Symbol('JSCA_14149_14152'),
        (t = +t),
        (n = +n),
        this._point
          ? this._context.lineTo(t, n)
          : ((this._point = 1), this._context.moveTo(t, n));
    },
  }),
    (UJ.prototype = {
      areaStart: function () {
        Symbol('JSCA_14176_14178'), (this._line = 0);
      },
      areaEnd: function () {
        Symbol('JSCA_14179_14181'), (this._line = NaN);
      },
      lineStart: function () {
        Symbol('JSCA_14182_14185'),
          (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        switch ((Symbol('JSCA_14186_14197'), this._point)) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            qJ(this, this._t0, FJ(this, this._t0));
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        Symbol('JSCA_14198_14221');
        var e = NaN;
        if (((n = +n), (t = +t) !== this._x1 || n !== this._y1)) {
          switch (this._point) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3), qJ(this, FJ(this, (e = RJ(this, t, n))), e);
              break;
            default:
              qJ(this, this._t0, (e = RJ(this, t, n)));
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n),
            (this._t0 = e);
        }
      },
    }),
    ((IJ.prototype = Object.create(UJ.prototype)).point = function (t, n) {
      Symbol('JSCA_14226_14228'), UJ.prototype.point.call(this, n, t);
    }),
    (OJ.prototype = {
      moveTo: function (t, n) {
        Symbol('JSCA_14233_14235'), this._context.moveTo(n, t);
      },
      closePath: function () {
        Symbol('JSCA_14236_14238'), this._context.closePath();
      },
      lineTo: function (t, n) {
        Symbol('JSCA_14239_14241'), this._context.lineTo(n, t);
      },
      bezierCurveTo: function (t, n, e, o, r, i) {
        Symbol('JSCA_14242_14244'),
          this._context.bezierCurveTo(n, t, o, e, i, r);
      },
    }),
    (BJ.prototype = {
      areaStart: function () {
        Symbol('JSCA_14256_14258'), (this._line = 0);
      },
      areaEnd: function () {
        Symbol('JSCA_14259_14261'), (this._line = NaN);
      },
      lineStart: function () {
        Symbol('JSCA_14262_14265'), (this._x = []), (this._y = []);
      },
      lineEnd: function () {
        Symbol('JSCA_14266_14282');
        var t = this._x,
          n = this._y,
          e = t.length;
        if (e)
          if (
            (this._line
              ? this._context.lineTo(t[0], n[0])
              : this._context.moveTo(t[0], n[0]),
            2 === e)
          )
            this._context.lineTo(t[1], n[1]);
          else
            for (var o = YJ(t), r = YJ(n), i = 0, l = 1; l < e; ++i, ++l)
              this._context.bezierCurveTo(
                o[0][i],
                r[0][i],
                o[1][i],
                r[1][i],
                t[l],
                n[l]
              );
        (this._line || (0 !== this._line && 1 === e)) &&
          this._context.closePath(),
          (this._line = 1 - this._line),
          (this._x = this._y = null);
      },
      point: function (t, n) {
        Symbol('JSCA_14283_14286'), this._x.push(+t), this._y.push(+n);
      },
    }),
    (LJ.prototype = {
      areaStart: function () {
        Symbol('JSCA_14308_14310'), (this._line = 0);
      },
      areaEnd: function () {
        Symbol('JSCA_14311_14313'), (this._line = NaN);
      },
      lineStart: function () {
        Symbol('JSCA_14314_14317'),
          (this._x = this._y = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        Symbol('JSCA_14318_14322'),
          0 < this._t &&
            this._t < 1 &&
            2 === this._point &&
            this._context.lineTo(this._x, this._y),
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
          this._line >= 0 &&
            ((this._t = 1 - this._t), (this._line = 1 - this._line));
      },
      point: function (t, n) {
        switch ((Symbol('JSCA_14323_14346'), (t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0)
              this._context.lineTo(this._x, n), this._context.lineTo(t, n);
            else {
              var e = this._x * (1 - this._t) + t * this._t;
              this._context.lineTo(e, this._y), this._context.lineTo(e, n);
            }
        }
        (this._x = t), (this._y = n);
      },
    });
  var QJ = (t) => () => t;
  function tp(t, { sourceEvent: n, target: e, transform: o, dispatch: r }) {
    Symbol('JSCA_14498_14524'),
      Object.defineProperties(this, {
        type: { value: t, enumerable: !0, configurable: !0 },
        sourceEvent: { value: n, enumerable: !0, configurable: !0 },
        target: { value: e, enumerable: !0, configurable: !0 },
        transform: { value: o, enumerable: !0, configurable: !0 },
        _: { value: r },
      });
  }
  function np(t, n, e) {
    Symbol('JSCA_14525_14529'), (this.k = t), (this.x = n), (this.y = e);
  }
  np.prototype = {
    constructor: np,
    scale: function (t) {
      return (
        Symbol('JSCA_14532_14534'),
        1 === t ? this : new np(this.k * t, this.x, this.y)
      );
    },
    translate: function (t, n) {
      return (
        Symbol('JSCA_14535_14537'),
        (0 === t) & (0 === n)
          ? this
          : new np(this.k, this.x + this.k * t, this.y + this.k * n)
      );
    },
    apply: function (t) {
      return (
        Symbol('JSCA_14538_14540'),
        [t[0] * this.k + this.x, t[1] * this.k + this.y]
      );
    },
    applyX: function (t) {
      return Symbol('JSCA_14541_14543'), t * this.k + this.x;
    },
    applyY: function (t) {
      return Symbol('JSCA_14544_14546'), t * this.k + this.y;
    },
    invert: function (t) {
      return (
        Symbol('JSCA_14547_14549'),
        [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
      );
    },
    invertX: function (t) {
      return Symbol('JSCA_14550_14552'), (t - this.x) / this.k;
    },
    invertY: function (t) {
      return Symbol('JSCA_14553_14555'), (t - this.y) / this.k;
    },
    rescaleX: function (t) {
      return (
        Symbol('JSCA_14556_14558'),
        t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
      );
    },
    rescaleY: function (t) {
      return (
        Symbol('JSCA_14559_14561'),
        t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
      );
    },
    toString: function () {
      return (
        Symbol('JSCA_14562_14564'),
        'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')'
      );
    },
  };
  var ep = new np(1, 0, 0);
  function op(t) {
    for (Symbol('JSCA_14568_14571'); !t.__zoom; )
      if (!(t = t.parentNode)) return ep;
    return t.__zoom;
  }
  function rp(t) {
    Symbol('JSCA_14572_14574'), t.stopImmediatePropagation();
  }
  function ip(t) {
    Symbol('JSCA_14575_14578'),
      t.preventDefault(),
      t.stopImmediatePropagation();
  }
  function lp(t) {
    return (
      Symbol('JSCA_14579_14581'),
      !((t.ctrlKey && 'wheel' !== t.type) || t.button)
    );
  }
  function ap() {
    Symbol('JSCA_14582_14593');
    var t = this;
    return t instanceof SVGElement
      ? (t = t.ownerSVGElement || t).hasAttribute('viewBox')
        ? [
            [(t = t.viewBox.baseVal).x, t.y],
            [t.x + t.width, t.y + t.height],
          ]
        : [
            [0, 0],
            [t.width.baseVal.value, t.height.baseVal.value],
          ]
      : [
          [0, 0],
          [t.clientWidth, t.clientHeight],
        ];
  }
  function up() {
    return Symbol('JSCA_14594_14596'), this.__zoom || ep;
  }
  function _p(t) {
    return (
      Symbol('JSCA_14597_14599'),
      -t.deltaY *
        (1 === t.deltaMode ? 0.05 : t.deltaMode ? 1 : 0.002) *
        (t.ctrlKey ? 10 : 1)
    );
  }
  function cp() {
    return (
      Symbol('JSCA_14600_14602'),
      navigator.maxTouchPoints || 'ontouchstart' in this
    );
  }
  function fp(t, n, e) {
    Symbol('JSCA_14603_14606');
    var o = t.invertX(n[0][0]) - e[0][0],
      r = t.invertX(n[1][0]) - e[1][0],
      i = t.invertY(n[0][1]) - e[0][1],
      l = t.invertY(n[1][1]) - e[1][1];
    return t.translate(
      r > o ? (o + r) / 2 : Math.min(0, o) || Math.max(0, r),
      l > i ? (i + l) / 2 : Math.min(0, i) || Math.max(0, l)
    );
  }
  (op.prototype = np.prototype),
    (t.Adder = v),
    (t.Delaunay = Na),
    (t.FormatSpecifier = Ru),
    (t.InternMap = x),
    (t.InternSet = w),
    (t.Node = zS),
    (t.Path = Ml),
    (t.Voronoi = va),
    (t.ZoomTransform = np),
    (t.active = function (t, n) {
      Symbol('JSCA_4062_4073');
      var e,
        o,
        r = t.__transition;
      if (r)
        for (o in ((n = null == n ? null : n + ''), r))
          if ((e = r[o]).state > 1 && e.name === n)
            return new li([[t]], Ui, n, +o);
      return null;
    }),
    (t.arc = function () {
      Symbol('JSCA_12900_12986');
      var t = _C,
        n = cC,
        e = VA(0),
        o = null,
        r = fC,
        i = sC,
        l = SC,
        a = null,
        u = uC(_);
      function _() {
        Symbol('JSCA_12902_12956');
        var _,
          c,
          f = +t.apply(this, arguments),
          s = +n.apply(this, arguments),
          S = r.apply(this, arguments) - iC,
          h = i.apply(this, arguments) - iC,
          y = WA(h - S),
          b = h > S;
        if ((a || (a = _ = u()), s < f && ((c = s), (s = f), (f = c)), s > oC))
          if (y > lC - oC)
            a.moveTo(s * KA(S), s * nC(S)),
              a.arc(0, 0, s, S, h, !b),
              f > oC &&
                (a.moveTo(f * KA(h), f * nC(h)), a.arc(0, 0, f, h, S, b));
          else {
            var m,
              d,
              A = S,
              C = h,
              J = S,
              p = h,
              g = y,
              v = y,
              x = l.apply(this, arguments) / 2,
              w = x > oC && (o ? +o.apply(this, arguments) : eC(f * f + s * s)),
              M = tC(WA(s - f) / 2, +e.apply(this, arguments)),
              T = M,
              E = M;
            if (w > oC) {
              var N = aC((w / f) * nC(x)),
                k = aC((w / s) * nC(x));
              (g -= 2 * N) > oC
                ? ((J += N *= b ? 1 : -1), (p -= N))
                : ((g = 0), (J = p = (S + h) / 2)),
                (v -= 2 * k) > oC
                  ? ((A += k *= b ? 1 : -1), (C -= k))
                  : ((v = 0), (A = C = (S + h) / 2));
            }
            var P = s * KA(A),
              z = s * nC(A),
              $ = f * KA(p),
              D = f * nC(p);
            if (M > oC) {
              var R,
                F = s * KA(C),
                q = s * nC(C),
                U = f * KA(J),
                I = f * nC(J);
              if (y < rC)
                if (
                  (R = (function (t, n, e, o, r, i, l, a) {
                    Symbol('JSCA_12882_12887');
                    var u = e - t,
                      _ = o - n,
                      c = l - r,
                      f = a - i,
                      s = f * u - c * _;
                    if (!(s * s < oC))
                      return [
                        t + (s = (c * (n - i) - f * (t - r)) / s) * u,
                        n + s * _,
                      ];
                  })(P, z, U, I, F, q, $, D))
                ) {
                  var O = P - R[0],
                    B = z - R[1],
                    Y = F - R[0],
                    L = q - R[1],
                    j =
                      1 /
                      nC(
                        (function (t) {
                          return (
                            Symbol('JSCA_12846_12848'),
                            t > 1 ? 0 : t < -1 ? rC : Math.acos(t)
                          );
                        })(
                          (O * Y + B * L) /
                            (eC(O * O + B * B) * eC(Y * Y + L * L))
                        ) / 2
                      ),
                    H = eC(R[0] * R[0] + R[1] * R[1]);
                  (T = tC(M, (f - H) / (j - 1))),
                    (E = tC(M, (s - H) / (j + 1)));
                } else T = E = 0;
            }
            v > oC
              ? E > oC
                ? ((m = hC(U, I, P, z, s, E, b)),
                  (d = hC(F, q, $, D, s, E, b)),
                  a.moveTo(m.cx + m.x01, m.cy + m.y01),
                  E < M
                    ? a.arc(
                        m.cx,
                        m.cy,
                        E,
                        ZA(m.y01, m.x01),
                        ZA(d.y01, d.x01),
                        !b
                      )
                    : (a.arc(
                        m.cx,
                        m.cy,
                        E,
                        ZA(m.y01, m.x01),
                        ZA(m.y11, m.x11),
                        !b
                      ),
                      a.arc(
                        0,
                        0,
                        s,
                        ZA(m.cy + m.y11, m.cx + m.x11),
                        ZA(d.cy + d.y11, d.cx + d.x11),
                        !b
                      ),
                      a.arc(
                        d.cx,
                        d.cy,
                        E,
                        ZA(d.y11, d.x11),
                        ZA(d.y01, d.x01),
                        !b
                      )))
                : (a.moveTo(P, z), a.arc(0, 0, s, A, C, !b))
              : a.moveTo(P, z),
              f > oC && g > oC
                ? T > oC
                  ? ((m = hC($, D, F, q, f, -T, b)),
                    (d = hC(P, z, U, I, f, -T, b)),
                    a.lineTo(m.cx + m.x01, m.cy + m.y01),
                    T < M
                      ? a.arc(
                          m.cx,
                          m.cy,
                          T,
                          ZA(m.y01, m.x01),
                          ZA(d.y01, d.x01),
                          !b
                        )
                      : (a.arc(
                          m.cx,
                          m.cy,
                          T,
                          ZA(m.y01, m.x01),
                          ZA(m.y11, m.x11),
                          !b
                        ),
                        a.arc(
                          0,
                          0,
                          f,
                          ZA(m.cy + m.y11, m.cx + m.x11),
                          ZA(d.cy + d.y11, d.cx + d.x11),
                          b
                        ),
                        a.arc(
                          d.cx,
                          d.cy,
                          T,
                          ZA(d.y11, d.x11),
                          ZA(d.y01, d.x01),
                          !b
                        )))
                  : a.arc(0, 0, f, p, J, b)
                : a.lineTo($, D);
          }
        else a.moveTo(0, 0);
        if ((a.closePath(), _)) return (a = null), _ + '' || null;
      }
      return (
        (_.centroid = function () {
          Symbol('JSCA_12957_12960');
          var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
            o =
              (+r.apply(this, arguments) + +i.apply(this, arguments)) / 2 -
              rC / 2;
          return [KA(o) * e, nC(o) * e];
        }),
        (_.innerRadius = function (n) {
          return (
            Symbol('JSCA_12961_12963'),
            arguments.length
              ? ((t = 'function' == typeof n ? n : VA(+n)), _)
              : t
          );
        }),
        (_.outerRadius = function (t) {
          return (
            Symbol('JSCA_12964_12966'),
            arguments.length
              ? ((n = 'function' == typeof t ? t : VA(+t)), _)
              : n
          );
        }),
        (_.cornerRadius = function (t) {
          return (
            Symbol('JSCA_12967_12969'),
            arguments.length
              ? ((e = 'function' == typeof t ? t : VA(+t)), _)
              : e
          );
        }),
        (_.padRadius = function (t) {
          return (
            Symbol('JSCA_12970_12972'),
            arguments.length
              ? ((o = null == t ? null : 'function' == typeof t ? t : VA(+t)),
                _)
              : o
          );
        }),
        (_.startAngle = function (t) {
          return (
            Symbol('JSCA_12973_12975'),
            arguments.length
              ? ((r = 'function' == typeof t ? t : VA(+t)), _)
              : r
          );
        }),
        (_.endAngle = function (t) {
          return (
            Symbol('JSCA_12976_12978'),
            arguments.length
              ? ((i = 'function' == typeof t ? t : VA(+t)), _)
              : i
          );
        }),
        (_.padAngle = function (t) {
          return (
            Symbol('JSCA_12979_12981'),
            arguments.length
              ? ((l = 'function' == typeof t ? t : VA(+t)), _)
              : l
          );
        }),
        (_.context = function (t) {
          return (
            Symbol('JSCA_12982_12984'),
            arguments.length ? ((a = null == t ? null : t), _) : a
          );
        }),
        _
      );
    }),
    (t.area = pC),
    (t.areaRadial = NC),
    (t.ascending = n),
    (t.autoType = function (t) {
      for (var n in (Symbol('JSCA_6510_6520'), t)) {
        var e,
          o,
          r = t[n].trim();
        if (r)
          if ('true' === r) r = !0;
          else if ('false' === r) r = !1;
          else if ('NaN' === r) r = NaN;
          else if (isNaN((e = +r))) {
            if (
              !(o = r.match(
                /^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/
              ))
            )
              continue;
            tu && o[4] && !o[7] && (r = r.replace(/-/g, '/').replace(/T/, ' ')),
              (r = new Date(r));
          } else r = e;
        else r = null;
        t[n] = r;
      }
      return t;
    }),
    (t.axisBottom = function (t) {
      return Symbol('JSCA_1241_1243'), Et(3, t);
    }),
    (t.axisLeft = function (t) {
      return Symbol('JSCA_1244_1246'), Et(4, t);
    }),
    (t.axisRight = function (t) {
      return Symbol('JSCA_1238_1240'), Et(2, t);
    }),
    (t.axisTop = function (t) {
      return Symbol('JSCA_1235_1237'), Et(1, t);
    }),
    (t.bin = tt),
    (t.bisect = c),
    (t.bisectCenter = _),
    (t.bisectLeft = u),
    (t.bisectRight = a),
    (t.bisector = o),
    (t.blob = function (t, n) {
      return Symbol('JSCA_6526_6528'), fetch(t, n).then(nu);
    }),
    (t.blur = function (t, n) {
      if ((Symbol('JSCA_80_91'), !((n = +n) >= 0)))
        throw new RangeError('invalid r');
      let e = t.length;
      if (!((e = Math.floor(e)) >= 0)) throw new RangeError('invalid length');
      if (!e || !n) return t;
      const o = b(n),
        r = t.slice();
      return o(t, r, 0, e, 1), o(r, t, 0, e, 1), o(t, r, 0, e, 1), t;
    }),
    (t.blur2 = f),
    (t.blurImage = s),
    (t.brush = function () {
      return Symbol('JSCA_4248_4250'), fl(tl);
    }),
    (t.brushSelection = function (t) {
      Symbol('JSCA_4238_4241');
      var n = t.__brush;
      return n ? n.dim.output(n.selection) : null;
    }),
    (t.brushX = function () {
      return Symbol('JSCA_4242_4244'), fl(Ki);
    }),
    (t.brushY = function () {
      return Symbol('JSCA_4245_4247'), fl(Qi);
    }),
    (t.buffer = function (t, n) {
      return Symbol('JSCA_6533_6535'), fetch(t, n).then(eu);
    }),
    (t.chord = function () {
      return Symbol('JSCA_4606_4608'), Jl(!1, !1);
    }),
    (t.chordDirected = function () {
      return Symbol('JSCA_4612_4614'), Jl(!0, !1);
    }),
    (t.chordTranspose = function () {
      return Symbol('JSCA_4609_4611'), Jl(!1, !0);
    }),
    (t.cluster = function () {
      Symbol('JSCA_9787_9821');
      var t = vS,
        n = 1,
        e = 1,
        o = !1;
      function r(r) {
        Symbol('JSCA_9789_9810');
        var i,
          l = 0;
        r.eachAfter(function (n) {
          Symbol('JSCA_9791_9801');
          var e = n.children;
          e
            ? ((n.x = (function (t) {
                return Symbol('JSCA_9765_9767'), t.reduce(xS, 0) / t.length;
              })(e)),
              (n.y = (function (t) {
                return Symbol('JSCA_9771_9773'), 1 + t.reduce(wS, 0);
              })(e)))
            : ((n.x = i ? (l += t(n, i)) : 0), (n.y = 0), (i = n));
        });
        var a = (function (t) {
            var n;
            for (Symbol('JSCA_9777_9781'); (n = t.children); ) t = n[0];
            return t;
          })(r),
          u = (function (t) {
            var n;
            for (Symbol('JSCA_9782_9786'); (n = t.children); )
              t = n[n.length - 1];
            return t;
          })(r),
          _ = a.x - t(a, u) / 2,
          c = u.x + t(u, a) / 2;
        return r.eachAfter(
          o
            ? function (t) {
                Symbol('JSCA_9803_9806'),
                  (t.x = (t.x - r.x) * n),
                  (t.y = (r.y - t.y) * e);
              }
            : function (t) {
                Symbol('JSCA_9806_9809'),
                  (t.x = ((t.x - _) / (c - _)) * n),
                  (t.y = (1 - (r.y ? t.y / r.y : 1)) * e);
              }
        );
      }
      return (
        (r.separation = function (n) {
          return Symbol('JSCA_9811_9813'), arguments.length ? ((t = n), r) : t;
        }),
        (r.size = function (t) {
          return (
            Symbol('JSCA_9814_9816'),
            arguments.length
              ? ((o = !1), (n = +t[0]), (e = +t[1]), r)
              : o
              ? null
              : [n, e]
          );
        }),
        (r.nodeSize = function (t) {
          return (
            Symbol('JSCA_9817_9819'),
            arguments.length
              ? ((o = !0), (n = +t[0]), (e = +t[1]), r)
              : o
              ? [n, e]
              : null
          );
        }),
        r
      );
    }),
    (t.color = Ne),
    (t.contourDensity = function () {
      Symbol('JSCA_5117_5206');
      var t = Kl,
        n = Ql,
        e = ta,
        o = 960,
        r = 500,
        i = 20,
        l = 2,
        a = 3 * i,
        u = (o + 2 * a) >> l,
        _ = (r + 2 * a) >> l,
        c = Ol(20);
      function s(o) {
        Symbol('JSCA_5119_5137');
        var r = new Float32Array(u * _),
          c = Math.pow(2, -l),
          s = -1;
        for (const i of o) {
          var S = (t(i, ++s, o) + a) * c,
            h = (n(i, s, o) + a) * c,
            y = +e(i, s, o);
          if (y && S >= 0 && S < u && h >= 0 && h < _) {
            var b = Math.floor(S),
              m = Math.floor(h),
              d = S - b - 0.5,
              A = h - m - 0.5;
            (r[b + m * u] += (1 - d) * (1 - A) * y),
              (r[b + 1 + m * u] += d * (1 - A) * y),
              (r[b + 1 + (m + 1) * u] += d * A * y),
              (r[b + (m + 1) * u] += (1 - d) * A * y);
          }
        }
        return f({ data: r, width: u, height: _ }, i * c), r;
      }
      function S(t) {
        Symbol('JSCA_5138_5144');
        var n = s(t),
          e = c(n),
          o = Math.pow(2, 2 * l);
        return (
          Array.isArray(e) || (e = V(Number.MIN_VALUE, nt(n) / o, e)),
          Xl()
            .size([u, _])
            .thresholds(e.map((t) => t * o))(n)
            .map((t, n) => ((t.value = +e[n]), h(t)))
        );
      }
      function h(t) {
        return Symbol('JSCA_5157_5160'), t.coordinates.forEach(y), t;
      }
      function y(t) {
        Symbol('JSCA_5161_5163'), t.forEach(b);
      }
      function b(t) {
        Symbol('JSCA_5164_5166'), t.forEach(m);
      }
      function m(t) {
        Symbol('JSCA_5167_5170'),
          (t[0] = t[0] * Math.pow(2, l) - a),
          (t[1] = t[1] * Math.pow(2, l) - a);
      }
      function d() {
        return (
          Symbol('JSCA_5171_5176'),
          (u = (o + 2 * (a = 3 * i)) >> l),
          (_ = (r + 2 * a) >> l),
          S
        );
      }
      return (
        (S.contours = function (t) {
          Symbol('JSCA_5145_5156');
          var n = s(t),
            e = Xl().size([u, _]),
            o = Math.pow(2, 2 * l),
            r = (t) => {
              t = +t;
              var r = h(e.contour(n, t * o));
              return (r.value = t), r;
            };
          return Object.defineProperty(r, 'max', { get: () => nt(n) / o }), r;
        }),
        (S.x = function (n) {
          return (
            Symbol('JSCA_5177_5179'),
            arguments.length
              ? ((t = 'function' == typeof n ? n : Ol(+n)), S)
              : t
          );
        }),
        (S.y = function (t) {
          return (
            Symbol('JSCA_5180_5182'),
            arguments.length
              ? ((n = 'function' == typeof t ? t : Ol(+t)), S)
              : n
          );
        }),
        (S.weight = function (t) {
          return (
            Symbol('JSCA_5183_5185'),
            arguments.length
              ? ((e = 'function' == typeof t ? t : Ol(+t)), S)
              : e
          );
        }),
        (S.size = function (t) {
          if ((Symbol('JSCA_5186_5191'), !arguments.length)) return [o, r];
          var n = +t[0],
            e = +t[1];
          if (!(n >= 0 && e >= 0)) throw new Error('invalid size');
          return (o = n), (r = e), d();
        }),
        (S.cellSize = function (t) {
          if ((Symbol('JSCA_5192_5196'), !arguments.length)) return 1 << l;
          if (!((t = +t) >= 1)) throw new Error('invalid cell size');
          return (l = Math.floor(Math.log(t) / Math.LN2)), d();
        }),
        (S.thresholds = function (t) {
          return (
            Symbol('JSCA_5197_5199'),
            arguments.length
              ? ((c =
                  'function' == typeof t
                    ? t
                    : Array.isArray(t)
                    ? Ol(Ul.call(t))
                    : Ol(t)),
                S)
              : c
          );
        }),
        (S.bandwidth = function (t) {
          if ((Symbol('JSCA_5200_5204'), !arguments.length))
            return Math.sqrt(i * (i + 1));
          if (!((t = +t) >= 0)) throw new Error('invalid bandwidth');
          return (i = (Math.sqrt(4 * t * t + 1) - 1) / 2), d();
        }),
        S
      );
    }),
    (t.contours = Xl),
    (t.count = m),
    (t.create = function (t) {
      return Symbol('JSCA_2017_2019'), Gn(It(t).call(document.documentElement));
    }),
    (t.creator = It),
    (t.cross = function (...t) {
      Symbol('JSCA_210_226');
      const n =
          'function' == typeof t[t.length - 1] &&
          (function (t) {
            return Symbol('JSCA_207_209'), (n) => t(...n);
          })(t.pop()),
        e = (t = t.map(C)).map(d),
        o = t.length - 1,
        r = new Array(o + 1).fill(0),
        i = [];
      if (o < 0 || e.some(A)) return i;
      for (;;) {
        i.push(r.map((n, e) => t[e][n]));
        let l = o;
        for (; ++r[l] === e[l]; ) {
          if (0 === l) return n ? i.map(n) : i;
          r[l--] = 0;
        }
      }
    }),
    (t.csv = lu),
    (t.csvFormat = Oa),
    (t.csvFormatBody = Ba),
    (t.csvFormatRow = La),
    (t.csvFormatRows = Ya),
    (t.csvFormatValue = ja),
    (t.csvParse = Ua),
    (t.csvParseRows = Ia),
    (t.cubehelix = po),
    (t.cumsum = function (t, n) {
      Symbol('JSCA_227_230');
      var e = 0,
        o = 0;
      return Float64Array.from(
        t,
        void 0 === n ? (t) => (e += +t || 0) : (r) => (e += +n(r, o++, t) || 0)
      );
    }),
    (t.curveBasis = function (t) {
      return Symbol('JSCA_13610_13612'), new yJ(t);
    }),
    (t.curveBasisClosed = function (t) {
      return Symbol('JSCA_13671_13673'), new bJ(t);
    }),
    (t.curveBasisOpen = function (t) {
      return Symbol('JSCA_13716_13718'), new mJ(t);
    }),
    (t.curveBumpX = $C),
    (t.curveBumpY = DC),
    (t.curveBundle = AJ),
    (t.curveCardinal = pJ),
    (t.curveCardinalClosed = vJ),
    (t.curveCardinalOpen = wJ),
    (t.curveCatmullRom = EJ),
    (t.curveCatmullRomClosed = kJ),
    (t.curveCatmullRomOpen = zJ),
    (t.curveLinear = dC),
    (t.curveLinearClosed = function (t) {
      return Symbol('JSCA_14154_14156'), new $J(t);
    }),
    (t.curveMonotoneX = function (t) {
      return Symbol('JSCA_14246_14248'), new UJ(t);
    }),
    (t.curveMonotoneY = function (t) {
      return Symbol('JSCA_14249_14251'), new IJ(t);
    }),
    (t.curveNatural = function (t) {
      return Symbol('JSCA_14300_14302'), new BJ(t);
    }),
    (t.curveStep = function (t) {
      return Symbol('JSCA_14348_14350'), new LJ(t, 0.5);
    }),
    (t.curveStepAfter = function (t) {
      return Symbol('JSCA_14354_14356'), new LJ(t, 1);
    }),
    (t.curveStepBefore = function (t) {
      return Symbol('JSCA_14351_14353'), new LJ(t, 0);
    }),
    (t.descending = e),
    (t.deviation = p),
    (t.difference = function (t, ...n) {
      Symbol('JSCA_1081_1089'), (t = new w(t));
      for (const e of n) for (const n of e) t.delete(n);
      return t;
    }),
    (t.disjoint = function (t, n) {
      Symbol('JSCA_1090_1102');
      const e = n[Symbol.iterator](),
        o = new w();
      for (const n of t) {
        if (o.has(n)) return !1;
        let t, r;
        for (; ({ value: t, done: r } = e.next()) && !r; ) {
          if (Object.is(n, t)) return !1;
          o.add(t);
        }
      }
      return !0;
    }),
    (t.dispatch = kt),
    (t.drag = function () {
      Symbol('JSCA_2193_2317');
      var t,
        n,
        e,
        o,
        r = ue,
        i = _e,
        l = ce,
        a = fe,
        u = {},
        _ = kt('start', 'drag', 'end'),
        c = 0,
        f = 0;
      function s(t) {
        Symbol('JSCA_2195_2197'),
          t
            .on('mousedown.drag', S)
            .filter(a)
            .on('touchstart.drag', b)
            .on('touchmove.drag', m, te)
            .on('touchend.drag touchcancel.drag', d)
            .style('touch-action', 'none')
            .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
      }
      function S(l, a) {
        if ((Symbol('JSCA_2198_2209'), !o && r.call(this, l, a))) {
          var u = A(this, i.call(this, l, a), l, a, 'mouse');
          u &&
            (Gn(l.view).on('mousemove.drag', h, ne).on('mouseup.drag', y, ne),
            re(l.view),
            ee(l),
            (e = !1),
            (t = l.clientX),
            (n = l.clientY),
            u('start', l));
        }
      }
      function h(o) {
        if ((Symbol('JSCA_2210_2217'), oe(o), !e)) {
          var r = o.clientX - t,
            i = o.clientY - n;
          e = r * r + i * i > f;
        }
        u.mouse('drag', o);
      }
      function y(t) {
        Symbol('JSCA_2218_2223'),
          Gn(t.view).on('mousemove.drag mouseup.drag', null),
          ie(t.view, e),
          oe(t),
          u.mouse('end', t);
      }
      function b(t, n) {
        if ((Symbol('JSCA_2224_2233'), r.call(this, t, n))) {
          var e,
            o,
            l = t.changedTouches,
            a = i.call(this, t, n),
            u = l.length;
          for (e = 0; e < u; ++e)
            (o = A(this, a, t, n, l[e].identifier, l[e])) &&
              (ee(t), o('start', t, l[e]));
        }
      }
      function m(t) {
        Symbol('JSCA_2234_2242');
        var n,
          e,
          o = t.changedTouches,
          r = o.length;
        for (n = 0; n < r; ++n)
          (e = u[o[n].identifier]) && (oe(t), e('drag', t, o[n]));
      }
      function d(t) {
        Symbol('JSCA_2243_2255');
        var n,
          e,
          r = t.changedTouches,
          i = r.length;
        for (
          o && clearTimeout(o),
            o = setTimeout(function () {
              Symbol('JSCA_2246_2248'), (o = null);
            }, 500),
            n = 0;
          n < i;
          ++n
        )
          (e = u[r[n].identifier]) && (ee(t), e('end', t, r[n]));
      }
      function A(t, n, e, o, r, i) {
        Symbol('JSCA_2256_2296');
        var a,
          f,
          S,
          h = _.copy(),
          y = Qn(i || e, n);
        if (
          null !=
          (S = l.call(
            t,
            new ae('beforestart', {
              sourceEvent: e,
              target: s,
              identifier: r,
              active: c,
              x: y[0],
              y: y[1],
              dx: 0,
              dy: 0,
              dispatch: h,
            }),
            o
          ))
        )
          return (
            (a = S.x - y[0] || 0),
            (f = S.y - y[1] || 0),
            function e(i, l, _) {
              Symbol('JSCA_2271_2295');
              var b,
                m = y;
              switch (i) {
                case 'start':
                  (u[r] = e), (b = c++);
                  break;
                case 'end':
                  delete u[r], --c;
                case 'drag':
                  (y = Qn(_ || l, n)), (b = c);
              }
              h.call(
                i,
                t,
                new ae(i, {
                  sourceEvent: l,
                  subject: S,
                  target: s,
                  identifier: r,
                  active: b,
                  x: y[0] + a,
                  y: y[1] + f,
                  dx: y[0] - m[0],
                  dy: y[1] - m[1],
                  dispatch: h,
                }),
                o
              );
            }
          );
      }
      return (
        (s.filter = function (t) {
          return (
            Symbol('JSCA_2297_2299'),
            arguments.length
              ? ((r = 'function' == typeof t ? t : le(!!t)), s)
              : r
          );
        }),
        (s.container = function (t) {
          return (
            Symbol('JSCA_2300_2302'),
            arguments.length ? ((i = 'function' == typeof t ? t : le(t)), s) : i
          );
        }),
        (s.subject = function (t) {
          return (
            Symbol('JSCA_2303_2305'),
            arguments.length ? ((l = 'function' == typeof t ? t : le(t)), s) : l
          );
        }),
        (s.touchable = function (t) {
          return (
            Symbol('JSCA_2306_2308'),
            arguments.length
              ? ((a = 'function' == typeof t ? t : le(!!t)), s)
              : a
          );
        }),
        (s.on = function () {
          Symbol('JSCA_2309_2312');
          var t = _.on.apply(_, arguments);
          return t === _ ? s : t;
        }),
        (s.clickDistance = function (t) {
          return (
            Symbol('JSCA_2313_2315'),
            arguments.length ? ((f = (t = +t) * t), s) : Math.sqrt(f)
          );
        }),
        s
      );
    }),
    (t.dragDisable = re),
    (t.dragEnable = ie),
    (t.dsv = function (t, n, e, o) {
      Symbol('JSCA_6551_6557'),
        3 === arguments.length &&
          'function' == typeof e &&
          ((o = e), (e = void 0));
      var r = Fa(t);
      return ru(n, e).then(function (t) {
        return Symbol('JSCA_6554_6556'), r.parse(t, o);
      });
    }),
    (t.dsvFormat = Fa),
    (t.easeBack = Pi),
    (t.easeBackIn = Ni),
    (t.easeBackInOut = Pi),
    (t.easeBackOut = ki),
    (t.easeBounce = Ti),
    (t.easeBounceIn = function (t) {
      return Symbol('JSCA_3954_3956'), 1 - Ti(1 - t);
    }),
    (t.easeBounceInOut = function (t) {
      return (
        Symbol('JSCA_3960_3962'),
        ((t *= 2) <= 1 ? 1 - Ti(1 - t) : Ti(t - 1) + 1) / 2
      );
    }),
    (t.easeBounceOut = Ti),
    (t.easeCircle = Ci),
    (t.easeCircleIn = function (t) {
      return Symbol('JSCA_3944_3946'), 1 - Math.sqrt(1 - t * t);
    }),
    (t.easeCircleInOut = Ci),
    (t.easeCircleOut = function (t) {
      return Symbol('JSCA_3947_3949'), Math.sqrt(1 - --t * t);
    }),
    (t.easeCubic = fi),
    (t.easeCubicIn = function (t) {
      return Symbol('JSCA_3888_3890'), t * t * t;
    }),
    (t.easeCubicInOut = fi),
    (t.easeCubicOut = function (t) {
      return Symbol('JSCA_3891_3893'), --t * t * t + 1;
    }),
    (t.easeElastic = Di),
    (t.easeElasticIn = $i),
    (t.easeElasticInOut = Ri),
    (t.easeElasticOut = Di),
    (t.easeExp = Ai),
    (t.easeExpIn = function (t) {
      return Symbol('JSCA_3935_3937'), di(1 - +t);
    }),
    (t.easeExpInOut = Ai),
    (t.easeExpOut = function (t) {
      return Symbol('JSCA_3938_3940'), 1 - di(t);
    }),
    (t.easeLinear = (t) => +t),
    (t.easePoly = hi),
    (t.easePolyIn = si),
    (t.easePolyInOut = hi),
    (t.easePolyOut = Si),
    (t.easeQuad = ci),
    (t.easeQuadIn = function (t) {
      return Symbol('JSCA_3879_3881'), t * t;
    }),
    (t.easeQuadInOut = ci),
    (t.easeQuadOut = function (t) {
      return Symbol('JSCA_3882_3884'), t * (2 - t);
    }),
    (t.easeSin = mi),
    (t.easeSinIn = function (t) {
      return Symbol('JSCA_3923_3925'), 1 == +t ? 1 : 1 - Math.cos(t * bi);
    }),
    (t.easeSinInOut = mi),
    (t.easeSinOut = function (t) {
      return Symbol('JSCA_3926_3928'), Math.sin(t * bi);
    }),
    (t.every = function (t, n) {
      if ((Symbol('JSCA_1027_1036'), 'function' != typeof n))
        throw new TypeError('test is not a function');
      let e = -1;
      for (const o of t) if (!n(o, ++e, t)) return !1;
      return !0;
    }),
    (t.extent = g),
    (t.fcumsum = function (t, n) {
      Symbol('JSCA_345_349');
      const e = new v();
      let o = -1;
      return Float64Array.from(
        t,
        void 0 === n ? (t) => e.add(+t || 0) : (r) => e.add(+n(r, ++o, t) || 0)
      );
    }),
    (t.filter = function (t, n) {
      if ((Symbol('JSCA_1047_1057'), 'function' != typeof n))
        throw new TypeError('test is not a function');
      const e = [];
      let o = -1;
      for (const r of t) n(r, ++o, t) && e.push(r);
      return e;
    }),
    (t.flatGroup = function (t, ...n) {
      return Symbol('JSCA_435_437'), $(z(t, ...n), n);
    }),
    (t.flatRollup = function (t, n, ...e) {
      return Symbol('JSCA_438_440'), $(R(t, n, ...e), e);
    }),
    (t.forceCenter = function (t, n) {
      Symbol('JSCA_6585_6611');
      var e,
        o = 1;
      function r() {
        Symbol('JSCA_6589_6597');
        var r,
          i,
          l = e.length,
          a = 0,
          u = 0;
        for (r = 0; r < l; ++r) (a += (i = e[r]).x), (u += i.y);
        for (a = (a / l - t) * o, u = (u / l - n) * o, r = 0; r < l; ++r)
          ((i = e[r]).x -= a), (i.y -= u);
      }
      return (
        null == t && (t = 0),
        null == n && (n = 0),
        (r.initialize = function (t) {
          Symbol('JSCA_6598_6600'), (e = t);
        }),
        (r.x = function (n) {
          return Symbol('JSCA_6601_6603'), arguments.length ? ((t = +n), r) : t;
        }),
        (r.y = function (t) {
          return Symbol('JSCA_6604_6606'), arguments.length ? ((n = +t), r) : n;
        }),
        (r.strength = function (t) {
          return Symbol('JSCA_6607_6609'), arguments.length ? ((o = +t), r) : o;
        }),
        r
      );
    }),
    (t.forceCollide = function (t) {
      Symbol('JSCA_6887_6951');
      var n,
        e,
        o,
        r = 1,
        i = 1;
      function l() {
        Symbol('JSCA_6890_6921');
        for (var t, l, u, _, c, f, s, S = n.length, h = 0; h < i; ++h)
          for (l = mu(n, gu, vu).visitAfter(a), t = 0; t < S; ++t)
            (u = n[t]),
              (f = e[u.index]),
              (s = f * f),
              (_ = u.x + u.vx),
              (c = u.y + u.vy),
              l.visit(y);
        function y(t, n, e, i, l) {
          Symbol('JSCA_6902_6920');
          var a = t.data,
            S = t.r,
            h = f + S;
          if (!a) return n > _ + h || i < _ - h || e > c + h || l < c - h;
          if (a.index > u.index) {
            var y = _ - a.x - a.vx,
              b = c - a.y - a.vy,
              m = y * y + b * b;
            m < h * h &&
              (0 === y && (m += (y = pu(o)) * y),
              0 === b && (m += (b = pu(o)) * b),
              (m = ((h - (m = Math.sqrt(m))) / m) * r),
              (u.vx += (y *= m) * (h = (S *= S) / (s + S))),
              (u.vy += (b *= m) * h),
              (a.vx -= y * (h = 1 - h)),
              (a.vy -= b * h));
          }
        }
      }
      function a(t) {
        if ((Symbol('JSCA_6922_6929'), t.data)) return (t.r = e[t.data.index]);
        for (var n = (t.r = 0); n < 4; ++n)
          t[n] && t[n].r > t.r && (t.r = t[n].r);
      }
      function u() {
        if ((Symbol('JSCA_6930_6935'), n)) {
          var o,
            r,
            i = n.length;
          for (e = new Array(i), o = 0; o < i; ++o)
            (r = n[o]), (e[r.index] = +t(r, o, n));
        }
      }
      return (
        'function' != typeof t && (t = Ju(null == t ? 1 : +t)),
        (l.initialize = function (t, e) {
          Symbol('JSCA_6936_6940'), (n = t), (o = e), u();
        }),
        (l.iterations = function (t) {
          return Symbol('JSCA_6941_6943'), arguments.length ? ((i = +t), l) : i;
        }),
        (l.strength = function (t) {
          return Symbol('JSCA_6944_6946'), arguments.length ? ((r = +t), l) : r;
        }),
        (l.radius = function (n) {
          return (
            Symbol('JSCA_6947_6949'),
            arguments.length
              ? ((t = 'function' == typeof n ? n : Ju(+n)), u(), l)
              : t
          );
        }),
        l
      );
    }),
    (t.forceLink = function (t) {
      Symbol('JSCA_6960_7031');
      var n,
        e,
        o,
        r,
        i,
        l,
        a = xu,
        u = function (t) {
          return (
            Symbol('JSCA_6963_6965'),
            1 / Math.min(r[t.source.index], r[t.target.index])
          );
        },
        _ = Ju(30),
        c = 1;
      function f(o) {
        Symbol('JSCA_6966_6981');
        for (var r = 0, a = t.length; r < c; ++r)
          for (var u, _, f, s, S, h, y, b = 0; b < a; ++b)
            (_ = (u = t[b]).source),
              (s = (f = u.target).x + f.vx - _.x - _.vx || pu(l)),
              (S = f.y + f.vy - _.y - _.vy || pu(l)),
              (s *= h =
                (((h = Math.sqrt(s * s + S * S)) - e[b]) / h) * o * n[b]),
              (S *= h),
              (f.vx -= s * (y = i[b])),
              (f.vy -= S * y),
              (_.vx += s * (y = 1 - y)),
              (_.vy += S * y);
      }
      function s() {
        if ((Symbol('JSCA_6982_6997'), o)) {
          var l,
            u,
            _ = o.length,
            c = t.length,
            f = new Map(o.map((t, n) => [a(t, n, o), t]));
          for (l = 0, r = new Array(_); l < c; ++l)
            ((u = t[l]).index = l),
              'object' != typeof u.source && (u.source = wu(f, u.source)),
              'object' != typeof u.target && (u.target = wu(f, u.target)),
              (r[u.source.index] = (r[u.source.index] || 0) + 1),
              (r[u.target.index] = (r[u.target.index] || 0) + 1);
          for (l = 0, i = new Array(c); l < c; ++l)
            (u = t[l]),
              (i[l] =
                r[u.source.index] / (r[u.source.index] + r[u.target.index]));
          (n = new Array(c)), S(), (e = new Array(c)), h();
        }
      }
      function S() {
        if ((Symbol('JSCA_6998_7003'), o))
          for (var e = 0, r = t.length; e < r; ++e) n[e] = +u(t[e], e, t);
      }
      function h() {
        if ((Symbol('JSCA_7004_7009'), o))
          for (var n = 0, r = t.length; n < r; ++n) e[n] = +_(t[n], n, t);
      }
      return (
        null == t && (t = []),
        (f.initialize = function (t, n) {
          Symbol('JSCA_7010_7014'), (o = t), (l = n), s();
        }),
        (f.links = function (n) {
          return (
            Symbol('JSCA_7015_7017'), arguments.length ? ((t = n), s(), f) : t
          );
        }),
        (f.id = function (t) {
          return Symbol('JSCA_7018_7020'), arguments.length ? ((a = t), f) : a;
        }),
        (f.iterations = function (t) {
          return Symbol('JSCA_7021_7023'), arguments.length ? ((c = +t), f) : c;
        }),
        (f.strength = function (t) {
          return (
            Symbol('JSCA_7024_7026'),
            arguments.length
              ? ((u = 'function' == typeof t ? t : Ju(+t)), S(), f)
              : u
          );
        }),
        (f.distance = function (t) {
          return (
            Symbol('JSCA_7027_7029'),
            arguments.length
              ? ((_ = 'function' == typeof t ? t : Ju(+t)), h(), f)
              : _
          );
        }),
        f
      );
    }),
    (t.forceManyBody = function () {
      Symbol('JSCA_7142_7214');
      var t,
        n,
        e,
        o,
        r,
        i = Ju(-30),
        l = 1,
        a = 1 / 0,
        u = 0.81;
      function _(e) {
        Symbol('JSCA_7144_7147');
        var r,
          i = t.length,
          l = mu(t, Tu, Eu).visitAfter(f);
        for (o = e, r = 0; r < i; ++r) (n = t[r]), l.visit(s);
      }
      function c() {
        if ((Symbol('JSCA_7148_7153'), t)) {
          var n,
            e,
            o = t.length;
          for (r = new Array(o), n = 0; n < o; ++n)
            (e = t[n]), (r[e.index] = +i(e, n, t));
        }
      }
      function f(t) {
        Symbol('JSCA_7154_7171');
        var n,
          e,
          o,
          i,
          l,
          a = 0,
          u = 0;
        if (t.length) {
          for (o = i = l = 0; l < 4; ++l)
            (n = t[l]) &&
              (e = Math.abs(n.value)) &&
              ((a += n.value), (u += e), (o += e * n.x), (i += e * n.y));
          (t.x = o / u), (t.y = i / u);
        } else {
          ((n = t).x = n.data.x), (n.y = n.data.y);
          do {
            a += r[n.data.index];
          } while ((n = n.next));
        }
        t.value = a;
      }
      function s(t, i, _, c) {
        if ((Symbol('JSCA_7172_7195'), !t.value)) return !0;
        var f = t.x - n.x,
          s = t.y - n.y,
          S = c - i,
          h = f * f + s * s;
        if ((S * S) / u < h)
          return (
            h < a &&
              (0 === f && (h += (f = pu(e)) * f),
              0 === s && (h += (s = pu(e)) * s),
              h < l && (h = Math.sqrt(l * h)),
              (n.vx += (f * t.value * o) / h),
              (n.vy += (s * t.value * o) / h)),
            !0
          );
        if (!(t.length || h >= a)) {
          (t.data !== n || t.next) &&
            (0 === f && (h += (f = pu(e)) * f),
            0 === s && (h += (s = pu(e)) * s),
            h < l && (h = Math.sqrt(l * h)));
          do {
            t.data !== n &&
              ((S = (r[t.data.index] * o) / h),
              (n.vx += f * S),
              (n.vy += s * S));
          } while ((t = t.next));
        }
      }
      return (
        (_.initialize = function (n, o) {
          Symbol('JSCA_7196_7200'), (t = n), (e = o), c();
        }),
        (_.strength = function (t) {
          return (
            Symbol('JSCA_7201_7203'),
            arguments.length
              ? ((i = 'function' == typeof t ? t : Ju(+t)), c(), _)
              : i
          );
        }),
        (_.distanceMin = function (t) {
          return (
            Symbol('JSCA_7204_7206'),
            arguments.length ? ((l = t * t), _) : Math.sqrt(l)
          );
        }),
        (_.distanceMax = function (t) {
          return (
            Symbol('JSCA_7207_7209'),
            arguments.length ? ((a = t * t), _) : Math.sqrt(a)
          );
        }),
        (_.theta = function (t) {
          return (
            Symbol('JSCA_7210_7212'),
            arguments.length ? ((u = t * t), _) : Math.sqrt(u)
          );
        }),
        _
      );
    }),
    (t.forceRadial = function (t, n, e) {
      Symbol('JSCA_7215_7253');
      var o,
        r,
        i,
        l = Ju(0.1);
      function a(t) {
        Symbol('JSCA_7220_7226');
        for (var l = 0, a = o.length; l < a; ++l) {
          var u = o[l],
            _ = u.x - n || 1e-6,
            c = u.y - e || 1e-6,
            f = Math.sqrt(_ * _ + c * c),
            s = ((i[l] - f) * r[l] * t) / f;
          (u.vx += _ * s), (u.vy += c * s);
        }
      }
      function u() {
        if ((Symbol('JSCA_7227_7236'), o)) {
          var n,
            e = o.length;
          for (r = new Array(e), i = new Array(e), n = 0; n < e; ++n)
            (i[n] = +t(o[n], n, o)), (r[n] = isNaN(i[n]) ? 0 : +l(o[n], n, o));
        }
      }
      return (
        'function' != typeof t && (t = Ju(+t)),
        null == n && (n = 0),
        null == e && (e = 0),
        (a.initialize = function (t) {
          Symbol('JSCA_7237_7239'), (o = t), u();
        }),
        (a.strength = function (t) {
          return (
            Symbol('JSCA_7240_7242'),
            arguments.length
              ? ((l = 'function' == typeof t ? t : Ju(+t)), u(), a)
              : l
          );
        }),
        (a.radius = function (n) {
          return (
            Symbol('JSCA_7243_7245'),
            arguments.length
              ? ((t = 'function' == typeof n ? n : Ju(+n)), u(), a)
              : t
          );
        }),
        (a.x = function (t) {
          return Symbol('JSCA_7246_7248'), arguments.length ? ((n = +t), a) : n;
        }),
        (a.y = function (t) {
          return Symbol('JSCA_7249_7251'), arguments.length ? ((e = +t), a) : e;
        }),
        a
      );
    }),
    (t.forceSimulation = function (t) {
      Symbol('JSCA_7046_7141');
      var n,
        e = 1,
        o = 0.001,
        r = 1 - Math.pow(o, 1 / 300),
        i = 0,
        l = 0.6,
        a = new Map(),
        u = xr(f),
        _ = kt('tick', 'end'),
        c = (function () {
          Symbol('JSCA_7035_7038');
          let t = 1;
          return () => (t = (1664525 * t + 1013904223) % Mu) / Mu;
        })();
      function f() {
        Symbol('JSCA_7049_7056'),
          s(),
          _.call('tick', n),
          e < o && (u.stop(), _.call('end', n));
      }
      function s(o) {
        Symbol('JSCA_7057_7072');
        var u,
          _,
          c = t.length;
        void 0 === o && (o = 1);
        for (var f = 0; f < o; ++f)
          for (
            e += (i - e) * r,
              a.forEach(function (t) {
                Symbol('JSCA_7062_7064'), t(e);
              }),
              u = 0;
            u < c;
            ++u
          )
            null == (_ = t[u]).fx
              ? (_.x += _.vx *= l)
              : ((_.x = _.fx), (_.vx = 0)),
              null == _.fy ? (_.y += _.vy *= l) : ((_.y = _.fy), (_.vy = 0));
        return n;
      }
      function S() {
        Symbol('JSCA_7073_7087');
        for (var n, e = 0, o = t.length; e < o; ++e) {
          if (
            (((n = t[e]).index = e),
            null != n.fx && (n.x = n.fx),
            null != n.fy && (n.y = n.fy),
            isNaN(n.x) || isNaN(n.y))
          ) {
            var r = 10 * Math.sqrt(0.5 + e),
              i = e * Nu;
            (n.x = r * Math.cos(i)), (n.y = r * Math.sin(i));
          }
          (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
        }
      }
      function h(n) {
        return Symbol('JSCA_7088_7091'), n.initialize && n.initialize(t, c), n;
      }
      return (
        null == t && (t = []),
        S(),
        (n = {
          tick: s,
          restart: function () {
            return Symbol('JSCA_7095_7097'), u.restart(f), n;
          },
          stop: function () {
            return Symbol('JSCA_7098_7100'), u.stop(), n;
          },
          nodes: function (e) {
            return (
              Symbol('JSCA_7101_7103'),
              arguments.length ? ((t = e), S(), a.forEach(h), n) : t
            );
          },
          alpha: function (t) {
            return (
              Symbol('JSCA_7104_7106'), arguments.length ? ((e = +t), n) : e
            );
          },
          alphaMin: function (t) {
            return (
              Symbol('JSCA_7107_7109'), arguments.length ? ((o = +t), n) : o
            );
          },
          alphaDecay: function (t) {
            return (
              Symbol('JSCA_7110_7112'), arguments.length ? ((r = +t), n) : +r
            );
          },
          alphaTarget: function (t) {
            return (
              Symbol('JSCA_7113_7115'), arguments.length ? ((i = +t), n) : i
            );
          },
          velocityDecay: function (t) {
            return (
              Symbol('JSCA_7116_7118'),
              arguments.length ? ((l = 1 - t), n) : 1 - l
            );
          },
          randomSource: function (t) {
            return (
              Symbol('JSCA_7119_7121'),
              arguments.length ? ((c = t), a.forEach(h), n) : c
            );
          },
          force: function (t, e) {
            return (
              Symbol('JSCA_7122_7124'),
              arguments.length > 1
                ? (null == e ? a.delete(t) : a.set(t, h(e)), n)
                : a.get(t)
            );
          },
          find: function (n, e, o) {
            Symbol('JSCA_7125_7136');
            var r,
              i,
              l,
              a,
              u,
              _ = 0,
              c = t.length;
            for (null == o ? (o = 1 / 0) : (o *= o), _ = 0; _ < c; ++_)
              (l = (r = n - (a = t[_]).x) * r + (i = e - a.y) * i) < o &&
                ((u = a), (o = l));
            return u;
          },
          on: function (t, e) {
            return (
              Symbol('JSCA_7137_7139'),
              arguments.length > 1 ? (_.on(t, e), n) : _.on(t)
            );
          },
        })
      );
    }),
    (t.forceX = function (t) {
      Symbol('JSCA_7254_7282');
      var n,
        e,
        o,
        r = Ju(0.1);
      function i(t) {
        Symbol('JSCA_7257_7261');
        for (var r, i = 0, l = n.length; i < l; ++i)
          (r = n[i]).vx += (o[i] - r.x) * e[i] * t;
      }
      function l() {
        if ((Symbol('JSCA_7262_7270'), n)) {
          var i,
            l = n.length;
          for (e = new Array(l), o = new Array(l), i = 0; i < l; ++i)
            e[i] = isNaN((o[i] = +t(n[i], i, n))) ? 0 : +r(n[i], i, n);
        }
      }
      return (
        'function' != typeof t && (t = Ju(null == t ? 0 : +t)),
        (i.initialize = function (t) {
          Symbol('JSCA_7271_7274'), (n = t), l();
        }),
        (i.strength = function (t) {
          return (
            Symbol('JSCA_7275_7277'),
            arguments.length
              ? ((r = 'function' == typeof t ? t : Ju(+t)), l(), i)
              : r
          );
        }),
        (i.x = function (n) {
          return (
            Symbol('JSCA_7278_7280'),
            arguments.length
              ? ((t = 'function' == typeof n ? n : Ju(+n)), l(), i)
              : t
          );
        }),
        i
      );
    }),
    (t.forceY = function (t) {
      Symbol('JSCA_7283_7311');
      var n,
        e,
        o,
        r = Ju(0.1);
      function i(t) {
        Symbol('JSCA_7286_7290');
        for (var r, i = 0, l = n.length; i < l; ++i)
          (r = n[i]).vy += (o[i] - r.y) * e[i] * t;
      }
      function l() {
        if ((Symbol('JSCA_7291_7299'), n)) {
          var i,
            l = n.length;
          for (e = new Array(l), o = new Array(l), i = 0; i < l; ++i)
            e[i] = isNaN((o[i] = +t(n[i], i, n))) ? 0 : +r(n[i], i, n);
        }
      }
      return (
        'function' != typeof t && (t = Ju(null == t ? 0 : +t)),
        (i.initialize = function (t) {
          Symbol('JSCA_7300_7303'), (n = t), l();
        }),
        (i.strength = function (t) {
          return (
            Symbol('JSCA_7304_7306'),
            arguments.length
              ? ((r = 'function' == typeof t ? t : Ju(+t)), l(), i)
              : r
          );
        }),
        (i.y = function (n) {
          return (
            Symbol('JSCA_7307_7309'),
            arguments.length
              ? ((t = 'function' == typeof n ? n : Ju(+n)), l(), i)
              : t
          );
        }),
        i
      );
    }),
    (t.formatDefaultLocale = Lu),
    (t.formatLocale = Yu),
    (t.formatSpecifier = Du),
    (t.fsum = function (t, n) {
      Symbol('JSCA_327_344');
      const e = new v();
      if (void 0 === n) for (let n of t) (n = +n) && e.add(n);
      else {
        let o = -1;
        for (let r of t) (r = +n(r, ++o, t)) && e.add(r);
      }
      return +e;
    }),
    (t.geoAlbers = eS),
    (t.geoAlbersUsa = function () {
      Symbol('JSCA_9457_9509');
      var t,
        n,
        e,
        o,
        r,
        i,
        l = eS(),
        a = nS().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
        u = nS().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
        _ = {
          point: function (t, n) {
            Symbol('JSCA_9459_9461'), (i = [t, n]);
          },
        };
      function c(t) {
        Symbol('JSCA_9463_9466');
        var n = t[0],
          l = t[1];
        return (
          (i = null),
          e.point(n, l),
          i || (o.point(n, l), i) || (r.point(n, l), i)
        );
      }
      function f() {
        return Symbol('JSCA_9504_9507'), (t = n = null), c;
      }
      return (
        (c.invert = function (t) {
          Symbol('JSCA_9467_9470');
          var n = l.scale(),
            e = l.translate(),
            o = (t[0] - e[0]) / n,
            r = (t[1] - e[1]) / n;
          return (
            r >= 0.12 && r < 0.234 && o >= -0.425 && o < -0.214
              ? a
              : r >= 0.166 && r < 0.234 && o >= -0.214 && o < -0.115
              ? u
              : l
          ).invert(t);
        }),
        (c.stream = function (e) {
          return (
            Symbol('JSCA_9471_9473'),
            t && n === e
              ? t
              : (t = (function (t) {
                  Symbol('JSCA_9428_9456');
                  var n = t.length;
                  return {
                    point: function (e, o) {
                      Symbol('JSCA_9431_9434');
                      for (var r = -1; ++r < n; ) t[r].point(e, o);
                    },
                    sphere: function () {
                      Symbol('JSCA_9435_9438');
                      for (var e = -1; ++e < n; ) t[e].sphere();
                    },
                    lineStart: function () {
                      Symbol('JSCA_9439_9442');
                      for (var e = -1; ++e < n; ) t[e].lineStart();
                    },
                    lineEnd: function () {
                      Symbol('JSCA_9443_9446');
                      for (var e = -1; ++e < n; ) t[e].lineEnd();
                    },
                    polygonStart: function () {
                      Symbol('JSCA_9447_9450');
                      for (var e = -1; ++e < n; ) t[e].polygonStart();
                    },
                    polygonEnd: function () {
                      Symbol('JSCA_9451_9454');
                      for (var e = -1; ++e < n; ) t[e].polygonEnd();
                    },
                  };
                })([l.stream((n = e)), a.stream(e), u.stream(e)]))
          );
        }),
        (c.precision = function (t) {
          return (
            Symbol('JSCA_9474_9478'),
            arguments.length
              ? (l.precision(t), a.precision(t), u.precision(t), f())
              : l.precision()
          );
        }),
        (c.scale = function (t) {
          return (
            Symbol('JSCA_9479_9483'),
            arguments.length
              ? (l.scale(t),
                a.scale(0.35 * t),
                u.scale(t),
                c.translate(l.translate()))
              : l.scale()
          );
        }),
        (c.translate = function (t) {
          if ((Symbol('JSCA_9484_9491'), !arguments.length))
            return l.translate();
          var n = l.scale(),
            i = +t[0],
            c = +t[1];
          return (
            (e = l
              .translate(t)
              .clipExtent([
                [i - 0.455 * n, c - 0.238 * n],
                [i + 0.455 * n, c + 0.238 * n],
              ])
              .stream(_)),
            (o = a
              .translate([i - 0.307 * n, c + 0.201 * n])
              .clipExtent([
                [i - 0.425 * n + Gu, c + 0.12 * n + Gu],
                [i - 0.214 * n - Gu, c + 0.234 * n - Gu],
              ])
              .stream(_)),
            (r = u
              .translate([i - 0.205 * n, c + 0.212 * n])
              .clipExtent([
                [i - 0.214 * n + Gu, c + 0.166 * n + Gu],
                [i - 0.115 * n - Gu, c + 0.234 * n - Gu],
              ])
              .stream(_)),
            f()
          );
        }),
        (c.fitExtent = function (t, n) {
          return Symbol('JSCA_9492_9494'), Ys(c, t, n);
        }),
        (c.fitSize = function (t, n) {
          return Symbol('JSCA_9495_9497'), Ls(c, t, n);
        }),
        (c.fitWidth = function (t, n) {
          return Symbol('JSCA_9498_9500'), js(c, t, n);
        }),
        (c.fitHeight = function (t, n) {
          return Symbol('JSCA_9501_9503'), Hs(c, t, n);
        }),
        c.scale(1070)
      );
    }),
    (t.geoArea = function (t) {
      return Symbol('JSCA_7654_7658'), (B_ = new v()), v_(t, Y_), 2 * B_;
    }),
    (t.geoAzimuthalEqualArea = function () {
      return Symbol('JSCA_9529_9531'), Zs(iS).scale(124.75).clipAngle(179.999);
    }),
    (t.geoAzimuthalEqualAreaRaw = iS),
    (t.geoAzimuthalEquidistant = function () {
      return Symbol('JSCA_9538_9540'), Zs(lS).scale(79.4188).clipAngle(179.999);
    }),
    (t.geoAzimuthalEquidistantRaw = lS),
    (t.geoBounds = function (t) {
      var n, e, o, r, i, l, a;
      if (
        (Symbol('JSCA_7790_7813'),
        (z_ = P_ = -(N_ = k_ = 1 / 0)),
        (U_ = []),
        v_(t, mc),
        (e = U_.length))
      ) {
        for (U_.sort(wc), n = 1, i = [(o = U_[0])]; n < e; ++n)
          Mc(o, (r = U_[n])[0]) || Mc(o, r[1])
            ? (xc(o[0], r[1]) > xc(o[0], o[1]) && (o[1] = r[1]),
              xc(r[0], o[1]) > xc(o[0], o[1]) && (o[0] = r[0]))
            : i.push((o = r));
        for (l = -1 / 0, n = 0, o = i[(e = i.length - 1)]; n <= e; o = r, ++n)
          (r = i[n]),
            (a = xc(o[1], r[0])) > l && ((l = a), (N_ = r[0]), (P_ = o[1]));
      }
      return (
        (U_ = I_ = null),
        N_ === 1 / 0 || k_ === 1 / 0
          ? [
              [NaN, NaN],
              [NaN, NaN],
            ]
          : [
              [N_, k_],
              [P_, z_],
            ]
      );
    }),
    (t.geoCentroid = function (t) {
      Symbol('JSCA_7893_7907'),
        (nc = ec = oc = rc = ic = lc = ac = uc = 0),
        (_c = new v()),
        (cc = new v()),
        (fc = new v()),
        v_(t, Tc);
      var n = +_c,
        e = +cc,
        o = +fc,
        r = u_(n, e, o);
      return r < Vu &&
        ((n = lc),
        (e = ac),
        (o = uc),
        ec < Gu && ((n = oc), (e = rc), (o = ic)),
        (r = u_(n, e, o)) < Vu)
        ? [NaN, NaN]
        : [r_(e, n) * t_, b_(o / r) * t_];
    }),
    (t.geoCircle = function () {
      Symbol('JSCA_7988_8018');
      var t,
        n,
        e = Uc([0, 0]),
        o = Uc(90),
        r = Uc(2),
        i = {
          point: function (e, o) {
            Symbol('JSCA_7992_7995'),
              t.push((e = n(e, o))),
              (e[0] *= t_),
              (e[1] *= t_);
          },
        };
      function l() {
        Symbol('JSCA_7996_8007');
        var l = e.apply(this, arguments),
          a = o.apply(this, arguments) * n_,
          u = r.apply(this, arguments) * n_;
        return (
          (t = []),
          (n = Bc(-l[0] * n_, -l[1] * n_, 0).invert),
          Xc(i, a, u, 1),
          (l = { type: 'Polygon', coordinates: [t] }),
          (t = n = null),
          l
        );
      }
      return (
        (l.center = function (t) {
          return (
            Symbol('JSCA_8008_8010'),
            arguments.length
              ? ((e = 'function' == typeof t ? t : Uc([+t[0], +t[1]])), l)
              : e
          );
        }),
        (l.radius = function (t) {
          return (
            Symbol('JSCA_8011_8013'),
            arguments.length
              ? ((o = 'function' == typeof t ? t : Uc(+t)), l)
              : o
          );
        }),
        (l.precision = function (t) {
          return (
            Symbol('JSCA_8014_8016'),
            arguments.length
              ? ((r = 'function' == typeof t ? t : Uc(+t)), l)
              : r
          );
        }),
        l
      );
    }),
    (t.geoClipAntimeridian = lf),
    (t.geoClipCircle = af),
    (t.geoClipExtent = function () {
      Symbol('JSCA_8566_8576');
      var t,
        n,
        e,
        o = 0,
        r = 0,
        i = 960,
        l = 500;
      return (e = {
        stream: function (e) {
          return (
            Symbol('JSCA_8569_8571'),
            t && n === e ? t : (t = hf(o, r, i, l)((n = e)))
          );
        },
        extent: function (a) {
          return (
            Symbol('JSCA_8572_8574'),
            arguments.length
              ? ((o = +a[0][0]),
                (r = +a[0][1]),
                (i = +a[1][0]),
                (l = +a[1][1]),
                (t = n = null),
                e)
              : [
                  [o, r],
                  [i, l],
                ]
          );
        },
      });
    }),
    (t.geoClipRectangle = hf),
    (t.geoConicConformal = function () {
      return Symbol('JSCA_9592_9594'), Qs(cS).scale(109.5).parallels([30, 30]);
    }),
    (t.geoConicConformalRaw = cS),
    (t.geoConicEqualArea = nS),
    (t.geoConicEqualAreaRaw = tS),
    (t.geoConicEquidistant = function () {
      return (
        Symbol('JSCA_9616_9618'), Qs(sS).scale(131.154).center([0, 13.9389])
      );
    }),
    (t.geoConicEquidistantRaw = sS),
    (t.geoContains = function (t, n) {
      return (
        Symbol('JSCA_8690_8692'),
        (t && gf.hasOwnProperty(t.type) ? gf[t.type] : xf)(t, n)
      );
    }),
    (t.geoDistance = pf),
    (t.geoEqualEarth = function () {
      return Symbol('JSCA_9634_9636'), Zs(dS).scale(177.158);
    }),
    (t.geoEqualEarthRaw = dS),
    (t.geoEquirectangular = function () {
      return Symbol('JSCA_9599_9601'), Zs(fS).scale(152.63);
    }),
    (t.geoEquirectangularRaw = fS),
    (t.geoGnomonic = function () {
      return Symbol('JSCA_9642_9644'), Zs(AS).scale(144.049).clipAngle(60);
    }),
    (t.geoGnomonicRaw = AS),
    (t.geoGraticule = zf),
    (t.geoGraticule10 = function () {
      return Symbol('JSCA_8783_8785'), zf()();
    }),
    (t.geoIdentity = function () {
      Symbol('JSCA_9645_9713');
      var t,
        n,
        e,
        o,
        r,
        i,
        l,
        a = 1,
        u = 0,
        _ = 0,
        c = 1,
        f = 1,
        s = 0,
        S = null,
        h = 1,
        y = 1,
        b = Is({
          point: function (t, n) {
            Symbol('JSCA_9647_9650');
            var e = A([t, n]);
            this.stream.point(e[0], e[1]);
          },
        }),
        m = qf;
      function d() {
        return (
          Symbol('JSCA_9652_9657'), (h = a * c), (y = a * f), (i = l = null), A
        );
      }
      function A(e) {
        Symbol('JSCA_9658_9666');
        var o = e[0] * h,
          r = e[1] * y;
        if (s) {
          var i = r * t - o * n;
          (o = o * t + r * n), (r = i);
        }
        return [o + u, r + _];
      }
      return (
        (A.invert = function (e) {
          Symbol('JSCA_9667_9675');
          var o = e[0] - u,
            r = e[1] - _;
          if (s) {
            var i = r * t + o * n;
            (o = o * t - r * n), (r = i);
          }
          return [o / h, r / y];
        }),
        (A.stream = function (t) {
          return (
            Symbol('JSCA_9676_9678'), i && l === t ? i : (i = b(m((l = t))))
          );
        }),
        (A.postclip = function (t) {
          return (
            Symbol('JSCA_9679_9681'),
            arguments.length ? ((m = t), (S = e = o = r = null), d()) : m
          );
        }),
        (A.clipExtent = function (t) {
          return (
            Symbol('JSCA_9682_9684'),
            arguments.length
              ? ((m =
                  null == t
                    ? ((S = e = o = r = null), qf)
                    : hf(
                        (S = +t[0][0]),
                        (e = +t[0][1]),
                        (o = +t[1][0]),
                        (r = +t[1][1])
                      )),
                d())
              : null == S
              ? null
              : [
                  [S, e],
                  [o, r],
                ]
          );
        }),
        (A.scale = function (t) {
          return (
            Symbol('JSCA_9685_9687'), arguments.length ? ((a = +t), d()) : a
          );
        }),
        (A.translate = function (t) {
          return (
            Symbol('JSCA_9688_9690'),
            arguments.length ? ((u = +t[0]), (_ = +t[1]), d()) : [u, _]
          );
        }),
        (A.angle = function (e) {
          return (
            Symbol('JSCA_9691_9693'),
            arguments.length
              ? ((n = f_((s = (e % 360) * n_))), (t = i_(s)), d())
              : s * t_
          );
        }),
        (A.reflectX = function (t) {
          return (
            Symbol('JSCA_9694_9696'),
            arguments.length ? ((c = t ? -1 : 1), d()) : c < 0
          );
        }),
        (A.reflectY = function (t) {
          return (
            Symbol('JSCA_9697_9699'),
            arguments.length ? ((f = t ? -1 : 1), d()) : f < 0
          );
        }),
        (A.fitExtent = function (t, n) {
          return Symbol('JSCA_9700_9702'), Ys(A, t, n);
        }),
        (A.fitSize = function (t, n) {
          return Symbol('JSCA_9703_9705'), Ls(A, t, n);
        }),
        (A.fitWidth = function (t, n) {
          return Symbol('JSCA_9706_9708'), js(A, t, n);
        }),
        (A.fitHeight = function (t, n) {
          return Symbol('JSCA_9709_9711'), Hs(A, t, n);
        }),
        A
      );
    }),
    (t.geoInterpolate = function (t, n) {
      Symbol('JSCA_8786_8796');
      var e = t[0] * n_,
        o = t[1] * n_,
        r = n[0] * n_,
        i = n[1] * n_,
        l = i_(o),
        a = f_(o),
        u = i_(i),
        _ = f_(i),
        c = l * i_(e),
        f = l * f_(e),
        s = u * i_(r),
        S = u * f_(r),
        h = 2 * b_(S_(m_(i - o) + l * u * m_(r - e))),
        y = f_(h),
        b = h
          ? function (t) {
              Symbol('JSCA_8788_8791');
              var n = f_((t *= h)) / y,
                e = f_(h - t) / y,
                o = e * c + n * s,
                r = e * f + n * S,
                i = e * a + n * _;
              return [r_(r, o) * t_, r_(i, S_(o * o + r * r)) * t_];
            }
          : function () {
              return Symbol('JSCA_8791_8793'), [e * t_, o * t_];
            };
      return (b.distance = h), b;
    }),
    (t.geoLength = Af),
    (t.geoMercator = function () {
      return Symbol('JSCA_9547_9549'), uS(aS).scale(961 / Qu);
    }),
    (t.geoMercatorRaw = aS),
    (t.geoNaturalEarth1 = function () {
      return Symbol('JSCA_9726_9728'), Zs(CS).scale(175.295);
    }),
    (t.geoNaturalEarth1Raw = CS),
    (t.geoOrthographic = function () {
      return Symbol('JSCA_9733_9735'), Zs(JS).scale(249.5).clipAngle(90.000001);
    }),
    (t.geoOrthographicRaw = JS),
    (t.geoPath = function (t, n) {
      Symbol('JSCA_9078_9130');
      let e,
        o,
        r = 3,
        i = 4.5;
      function l(t) {
        return (
          Symbol('JSCA_9080_9086'),
          t &&
            ('function' == typeof i && o.pointRadius(+i.apply(this, arguments)),
            v_(t, e(o))),
          o.result()
        );
      }
      return (
        (l.area = function (t) {
          return Symbol('JSCA_9087_9090'), v_(t, e(Hf)), Hf.result();
        }),
        (l.measure = function (t) {
          return Symbol('JSCA_9091_9094'), v_(t, e(zs)), zs.result();
        }),
        (l.bounds = function (t) {
          return Symbol('JSCA_9095_9098'), v_(t, e(es)), es.result();
        }),
        (l.centroid = function (t) {
          return Symbol('JSCA_9099_9102'), v_(t, e(ps)), ps.result();
        }),
        (l.projection = function (n) {
          return (
            Symbol('JSCA_9103_9107'),
            arguments.length
              ? ((e = null == n ? ((t = null), qf) : (t = n).stream), l)
              : t
          );
        }),
        (l.context = function (t) {
          return (
            Symbol('JSCA_9108_9113'),
            arguments.length
              ? ((o = null == t ? ((n = null), new qs(r)) : new gs((n = t))),
                'function' != typeof i && o.pointRadius(i),
                l)
              : n
          );
        }),
        (l.pointRadius = function (t) {
          return (
            Symbol('JSCA_9114_9118'),
            arguments.length
              ? ((i = 'function' == typeof t ? t : (o.pointRadius(+t), +t)), l)
              : i
          );
        }),
        (l.digits = function (t) {
          if ((Symbol('JSCA_9119_9128'), !arguments.length)) return r;
          if (null == t) r = null;
          else {
            const n = Math.floor(t);
            if (!(n >= 0)) throw new RangeError(`invalid digits: ${t}`);
            r = n;
          }
          return null === n && (o = new qs(r)), l;
        }),
        l.projection(t).digits(r).context(n)
      );
    }),
    (t.geoProjection = Zs),
    (t.geoProjectionMutator = Ks),
    (t.geoRotation = Hc),
    (t.geoStereographic = function () {
      return Symbol('JSCA_9743_9745'), Zs(pS).scale(250).clipAngle(142);
    }),
    (t.geoStereographicRaw = pS),
    (t.geoStream = v_),
    (t.geoTransform = function (t) {
      return Symbol('JSCA_9131_9135'), { stream: Is(t) };
    }),
    (t.geoTransverseMercator = function () {
      Symbol('JSCA_9752_9761');
      var t = uS(gS),
        n = t.center,
        e = t.rotate;
      return (
        (t.center = function (t) {
          return (
            Symbol('JSCA_9754_9756'),
            arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]]
          );
        }),
        (t.rotate = function (t) {
          return (
            Symbol('JSCA_9757_9759'),
            arguments.length
              ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90])
              : [(t = e())[0], t[1], t[2] - 90]
          );
        }),
        e([0, 0, 90]).scale(159.155)
      );
    }),
    (t.geoTransverseMercatorRaw = gS),
    (t.gray = function (t, n) {
      return Symbol('JSCA_2655_2657'), new ro(t, 0, 0, null == n ? 1 : n);
    }),
    (t.greatest = at),
    (t.greatestIndex = function (t, e = n) {
      if ((Symbol('JSCA_964_977'), 1 === e.length)) return et(t, e);
      let o,
        r = -1,
        i = -1;
      for (const n of t)
        ++i, (r < 0 ? 0 === e(n, n) : e(n, o) > 0) && ((o = n), (r = i));
      return r;
    }),
    (t.group = P),
    (t.groupSort = function (t, e, o) {
      return (
        Symbol('JSCA_511_513'),
        (2 !== e.length
          ? I(D(t, e, o), ([t, e], [o, r]) => n(e, r) || n(t, o))
          : I(P(t, o), ([t, o], [r, i]) => e(o, i) || n(t, r))
        ).map(([t]) => t)
      );
    }),
    (t.groups = z),
    (t.hcl = co),
    (t.hierarchy = TS),
    (t.histogram = tt),
    (t.hsl = Ye),
    (t.html = fu),
    (t.image = function (t, n) {
      return (
        Symbol('JSCA_6560_6570'),
        new Promise(function (e, o) {
          Symbol('JSCA_6561_6569');
          var r = new Image();
          for (var i in n) r[i] = n[i];
          (r.onerror = o),
            (r.onload = function () {
              Symbol('JSCA_6565_6567'), e(r);
            }),
            (r.src = t);
        })
      );
    }),
    (t.index = function (t, ...n) {
      return Symbol('JSCA_447_449'), q(t, k, F, n);
    }),
    (t.indexes = function (t, ...n) {
      return Symbol('JSCA_450_452'), q(t, Array.from, F, n);
    }),
    (t.interpolate = jo),
    (t.interpolateArray = function (t, n) {
      return Symbol('JSCA_2850_2852'), (Fo(n) ? Ro : qo)(t, n);
    }),
    (t.interpolateBasis = xo),
    (t.interpolateBasisClosed = wo),
    (t.interpolateBlues = wA),
    (t.interpolateBrBG = qd),
    (t.interpolateBuGn = eA),
    (t.interpolateBuPu = rA),
    (t.interpolateCividis = function (t) {
      return (
        Symbol('JSCA_12791_12794'),
        (t = Math.max(0, Math.min(1, t))),
        'rgb(' +
          Math.max(
            0,
            Math.min(
              255,
              Math.round(
                -4.54 -
                  t *
                    (35.34 -
                      t *
                        (2381.73 - t * (6402.7 - t * (7024.72 - 2710.57 * t))))
              )
            )
          ) +
          ', ' +
          Math.max(
            0,
            Math.min(
              255,
              Math.round(
                32.49 +
                  t *
                    (170.73 +
                      t * (52.82 - t * (131.46 - t * (176.58 - 67.37 * t))))
              )
            )
          ) +
          ', ' +
          Math.max(
            0,
            Math.min(
              255,
              Math.round(
                81.24 +
                  t *
                    (442.36 -
                      t *
                        (2482.43 - t * (6167.24 - t * (6614.94 - 2475.67 * t))))
              )
            )
          ) +
          ')'
      );
    }),
    (t.interpolateCool = UA),
    (t.interpolateCubehelix = _r),
    (t.interpolateCubehelixDefault = FA),
    (t.interpolateCubehelixLong = cr),
    (t.interpolateDate = Uo),
    (t.interpolateDiscrete = function (t) {
      Symbol('JSCA_2932_2937');
      var n = t.length;
      return function (e) {
        return (
          Symbol('JSCA_2934_2936'),
          t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
        );
      };
    }),
    (t.interpolateGnBu = lA),
    (t.interpolateGreens = TA),
    (t.interpolateGreys = NA),
    (t.interpolateHcl = lr),
    (t.interpolateHclLong = ar),
    (t.interpolateHsl = or),
    (t.interpolateHslLong = rr),
    (t.interpolateHue = function (t, n) {
      Symbol('JSCA_2938_2944');
      var e = Eo(+t, +n);
      return function (t) {
        Symbol('JSCA_2940_2943');
        var n = e(t);
        return n - 360 * Math.floor(n / 360);
      };
    }),
    (t.interpolateInferno = XA),
    (t.interpolateLab = function (t, n) {
      Symbol('JSCA_3106_3115');
      var e = ko((t = oo(t)).l, (n = oo(n)).l),
        o = ko(t.a, n.a),
        r = ko(t.b, n.b),
        i = ko(t.opacity, n.opacity);
      return function (n) {
        return (
          Symbol('JSCA_3108_3114'),
          (t.l = e(n)),
          (t.a = o(n)),
          (t.b = r(n)),
          (t.opacity = i(n)),
          t + ''
        );
      };
    }),
    (t.interpolateMagma = HA),
    (t.interpolateNumber = Io),
    (t.interpolateNumberArray = Ro),
    (t.interpolateObject = Oo),
    (t.interpolateOrRd = uA),
    (t.interpolateOranges = RA),
    (t.interpolatePRGn = Id),
    (t.interpolatePiYG = Bd),
    (t.interpolatePlasma = GA),
    (t.interpolatePuBu = sA),
    (t.interpolatePuBuGn = cA),
    (t.interpolatePuOr = Ld),
    (t.interpolatePuRd = hA),
    (t.interpolatePurples = PA),
    (t.interpolateRainbow = function (t) {
      Symbol('JSCA_12799_12806'), (t < 0 || t > 1) && (t -= Math.floor(t));
      var n = Math.abs(t - 0.5);
      return (
        (IA.h = 360 * t - 100),
        (IA.s = 1.5 - 1.5 * n),
        (IA.l = 0.8 - 0.9 * n),
        IA + ''
      );
    }),
    (t.interpolateRdBu = Hd),
    (t.interpolateRdGy = Gd),
    (t.interpolateRdPu = bA),
    (t.interpolateRdYlBu = Wd),
    (t.interpolateRdYlGn = Kd),
    (t.interpolateReds = $A),
    (t.interpolateRgb = Po),
    (t.interpolateRgbBasis = $o),
    (t.interpolateRgbBasisClosed = Do),
    (t.interpolateRound = Ho),
    (t.interpolateSinebow = function (t) {
      var n;
      return (
        Symbol('JSCA_12808_12815'),
        (t = (0.5 - t) * Math.PI),
        (OA.r = 255 * (n = Math.sin(t)) * n),
        (OA.g = 255 * (n = Math.sin(t + BA)) * n),
        (OA.b = 255 * (n = Math.sin(t + YA)) * n),
        OA + ''
      );
    }),
    (t.interpolateSpectral = tA),
    (t.interpolateString = Lo),
    (t.interpolateTransformCss = Ko),
    (t.interpolateTransformSvg = Qo),
    (t.interpolateTurbo = function (t) {
      return (
        Symbol('JSCA_12816_12819'),
        (t = Math.max(0, Math.min(1, t))),
        'rgb(' +
          Math.max(
            0,
            Math.min(
              255,
              Math.round(
                34.61 +
                  t *
                    (1172.33 -
                      t *
                        (10793.56 -
                          t * (33300.12 - t * (38394.49 - 14825.05 * t))))
              )
            )
          ) +
          ', ' +
          Math.max(
            0,
            Math.min(
              255,
              Math.round(
                23.31 +
                  t *
                    (557.33 +
                      t *
                        (1225.33 - t * (3574.96 - t * (1073.77 + 707.56 * t))))
              )
            )
          ) +
          ', ' +
          Math.max(
            0,
            Math.min(
              255,
              Math.round(
                27.2 +
                  t *
                    (3211.1 -
                      t *
                        (15327.97 - t * (27814 - t * (22569.18 - 6838.66 * t))))
              )
            )
          ) +
          ')'
      );
    }),
    (t.interpolateViridis = jA),
    (t.interpolateWarm = qA),
    (t.interpolateYlGn = CA),
    (t.interpolateYlGnBu = dA),
    (t.interpolateYlOrBr = pA),
    (t.interpolateYlOrRd = vA),
    (t.interpolateZoom = nr),
    (t.interrupt = Fr),
    (t.intersection = function (t, ...n) {
      Symbol('JSCA_1103_1115'), (t = new w(t)), (n = n.map(At));
      t: for (const e of t)
        for (const o of n)
          if (!o.has(e)) {
            t.delete(e);
            continue t;
          }
      return t;
    }),
    (t.interval = function (t, n, e) {
      Symbol('JSCA_3261_3275');
      var o = new vr(),
        r = n;
      return null == n
        ? (o.restart(t, n, e), o)
        : ((o._restart = o.restart),
          (o.restart = function (t, n, e) {
            Symbol('JSCA_3265_3272'),
              (n = +n),
              (e = null == e ? pr() : +e),
              o._restart(
                function i(l) {
                  Symbol('JSCA_3267_3271'),
                    (l += r),
                    o._restart(i, (r += n), e),
                    t(l);
                },
                n,
                e
              );
          }),
          o.restart(t, n, e),
          o);
    }),
    (t.isoFormat = Sd),
    (t.isoParse = yd),
    (t.json = function (t, n) {
      return Symbol('JSCA_6576_6578'), fetch(t, n).then(uu);
    }),
    (t.lab = oo),
    (t.lch = function (t, n, e, o) {
      return (
        Symbol('JSCA_2701_2703'),
        1 === arguments.length ? _o(t) : new fo(e, n, t, null == o ? 1 : o)
      );
    }),
    (t.least = function (t, e = n) {
      let o;
      Symbol('JSCA_927_949');
      let r = !1;
      if (1 === e.length) {
        let i;
        for (const l of t) {
          const t = e(l);
          (r ? n(t, i) < 0 : 0 === n(t, t)) && ((o = l), (i = t), (r = !0));
        }
      } else
        for (const n of t)
          (r ? e(n, o) < 0 : 0 === e(n, n)) && ((o = n), (r = !0));
      return o;
    }),
    (t.leastIndex = ht),
    (t.line = JC),
    (t.lineRadial = EC),
    (t.link = UC),
    (t.linkHorizontal = function () {
      return Symbol('JSCA_13363_13365'), UC($C);
    }),
    (t.linkRadial = function () {
      Symbol('JSCA_13369_13374');
      const t = UC(RC);
      return (t.angle = t.x), delete t.x, (t.radius = t.y), delete t.y, t;
    }),
    (t.linkVertical = function () {
      return Symbol('JSCA_13366_13368'), UC(DC);
    }),
    (t.local = Wn),
    (t.map = function (t, n) {
      if ((Symbol('JSCA_1058_1062'), 'function' != typeof t[Symbol.iterator]))
        throw new TypeError('values is not iterable');
      if ('function' != typeof n)
        throw new TypeError('mapper is not a function');
      return Array.from(t, (e, o) => n(e, o, t));
    }),
    (t.matcher = Ht),
    (t.max = nt),
    (t.maxIndex = et),
    (t.mean = function (t, n) {
      Symbol('JSCA_826_844');
      let e = 0,
        o = 0;
      if (void 0 === n)
        for (let n of t) null != n && (n = +n) >= n && (++e, (o += n));
      else {
        let r = -1;
        for (let i of t)
          null != (i = n(i, ++r, t)) && (i = +i) >= i && (++e, (o += i));
      }
      if (e) return o / e;
    }),
    (t.median = function (t, n) {
      return Symbol('JSCA_845_847'), ut(t, 0.5, n);
    }),
    (t.medianIndex = function (t, n) {
      return Symbol('JSCA_848_850'), ct(t, 0.5, n);
    }),
    (t.merge = ft),
    (t.min = ot),
    (t.minIndex = rt),
    (t.mode = function (t, n) {
      Symbol('JSCA_859_884');
      const e = new x();
      if (void 0 === n)
        for (let n of t) null != n && n >= n && e.set(n, (e.get(n) || 0) + 1);
      else {
        let o = -1;
        for (let r of t)
          null != (r = n(r, ++o, t)) && r >= r && e.set(r, (e.get(r) || 0) + 1);
      }
      let o,
        r = 0;
      for (const [t, n] of e) n > r && ((r = n), (o = t));
      return o;
    }),
    (t.namespace = Ft),
    (t.namespaces = Rt),
    (t.nice = K),
    (t.now = pr),
    (t.pack = function () {
      Symbol('JSCA_10213_10235');
      var t = null,
        n = 1,
        e = 1,
        o = RS;
      function r(r) {
        Symbol('JSCA_10215_10224');
        const i = US();
        return (
          (r.x = n / 2),
          (r.y = e / 2),
          t
            ? r.eachBefore(th(t)).eachAfter(nh(o, 0.5, i)).eachBefore(eh(1))
            : r
                .eachBefore(th(QS))
                .eachAfter(nh(RS, 1, i))
                .eachAfter(nh(o, r.r / Math.min(n, e), i))
                .eachBefore(eh(Math.min(n, e) / (2 * r.r))),
          r
        );
      }
      return (
        (r.radius = function (n) {
          return (
            Symbol('JSCA_10225_10227'), arguments.length ? ((t = $S(n)), r) : t
          );
        }),
        (r.size = function (t) {
          return (
            Symbol('JSCA_10228_10230'),
            arguments.length ? ((n = +t[0]), (e = +t[1]), r) : [n, e]
          );
        }),
        (r.padding = function (t) {
          return (
            Symbol('JSCA_10231_10233'),
            arguments.length
              ? ((o = 'function' == typeof t ? t : FS(+t)), r)
              : o
          );
        }),
        r
      );
    }),
    (t.packEnclose = function (t) {
      return Symbol('JSCA_10050_10052'), IS(t, US());
    }),
    (t.packSiblings = function (t) {
      return Symbol('JSCA_10206_10209'), KS(t, US()), t;
    }),
    (t.pairs = function (t, n = st) {
      Symbol('JSCA_885_895');
      const e = [];
      let o,
        r = !1;
      for (const i of t) r && e.push(n(o, i)), (o = i), (r = !0);
      return e;
    }),
    (t.partition = function () {
      Symbol('JSCA_10277_10312');
      var t = 1,
        n = 1,
        e = 0,
        o = !1;
      function r(r) {
        Symbol('JSCA_10279_10287');
        var i = r.height + 1;
        return (
          (r.x0 = r.y0 = e),
          (r.x1 = t),
          (r.y1 = n / i),
          r.eachBefore(
            (function (t, n) {
              return (
                Symbol('JSCA_10288_10301'),
                function (o) {
                  Symbol('JSCA_10289_10300'),
                    o.children &&
                      rh(
                        o,
                        o.x0,
                        (t * (o.depth + 1)) / n,
                        o.x1,
                        (t * (o.depth + 2)) / n
                      );
                  var r = o.x0,
                    i = o.y0,
                    l = o.x1 - e,
                    a = o.y1 - e;
                  l < r && (r = l = (r + l) / 2),
                    a < i && (i = a = (i + a) / 2),
                    (o.x0 = r),
                    (o.y0 = i),
                    (o.x1 = l),
                    (o.y1 = a);
                }
              );
            })(n, i)
          ),
          o && r.eachBefore(oh),
          r
        );
      }
      return (
        (r.round = function (t) {
          return (
            Symbol('JSCA_10302_10304'), arguments.length ? ((o = !!t), r) : o
          );
        }),
        (r.size = function (e) {
          return (
            Symbol('JSCA_10305_10307'),
            arguments.length ? ((t = +e[0]), (n = +e[1]), r) : [t, n]
          );
        }),
        (r.padding = function (t) {
          return (
            Symbol('JSCA_10308_10310'), arguments.length ? ((e = +t), r) : e
          );
        }),
        r
      );
    }),
    (t.path = Tl),
    (t.pathRound = function (t = 3) {
      return Symbol('JSCA_4818_4820'), new Ml(+t);
    }),
    (t.permute = U),
    (t.pie = function () {
      Symbol('JSCA_13142_13187');
      var t = vC,
        n = gC,
        e = null,
        o = VA(0),
        r = VA(lC),
        i = VA(0);
      function l(l) {
        Symbol('JSCA_13144_13167');
        var a,
          u,
          _,
          c,
          f,
          s = (l = bC(l)).length,
          S = 0,
          h = new Array(s),
          y = new Array(s),
          b = +o.apply(this, arguments),
          m = Math.min(lC, Math.max(-lC, r.apply(this, arguments) - b)),
          d = Math.min(Math.abs(m) / s, i.apply(this, arguments)),
          A = d * (m < 0 ? -1 : 1);
        for (a = 0; a < s; ++a)
          (f = y[(h[a] = a)] = +t(l[a], a, l)) > 0 && (S += f);
        for (
          null != n
            ? h.sort(function (t, e) {
                return Symbol('JSCA_13151_13153'), n(y[t], y[e]);
              })
            : null != e &&
              h.sort(function (t, n) {
                return Symbol('JSCA_13153_13155'), e(l[t], l[n]);
              }),
            a = 0,
            _ = S ? (m - s * A) / S : 0;
          a < s;
          ++a, b = c
        )
          (u = h[a]),
            (c = b + ((f = y[u]) > 0 ? f * _ : 0) + A),
            (y[u] = {
              data: l[u],
              index: a,
              value: f,
              startAngle: b,
              endAngle: c,
              padAngle: d,
            });
        return y;
      }
      return (
        (l.value = function (n) {
          return (
            Symbol('JSCA_13168_13170'),
            arguments.length
              ? ((t = 'function' == typeof n ? n : VA(+n)), l)
              : t
          );
        }),
        (l.sortValues = function (t) {
          return (
            Symbol('JSCA_13171_13173'),
            arguments.length ? ((n = t), (e = null), l) : n
          );
        }),
        (l.sort = function (t) {
          return (
            Symbol('JSCA_13174_13176'),
            arguments.length ? ((e = t), (n = null), l) : e
          );
        }),
        (l.startAngle = function (t) {
          return (
            Symbol('JSCA_13177_13179'),
            arguments.length
              ? ((o = 'function' == typeof t ? t : VA(+t)), l)
              : o
          );
        }),
        (l.endAngle = function (t) {
          return (
            Symbol('JSCA_13180_13182'),
            arguments.length
              ? ((r = 'function' == typeof t ? t : VA(+t)), l)
              : r
          );
        }),
        (l.padAngle = function (t) {
          return (
            Symbol('JSCA_13183_13185'),
            arguments.length
              ? ((i = 'function' == typeof t ? t : VA(+t)), l)
              : i
          );
        }),
        l
      );
    }),
    (t.piecewise = fr),
    (t.pointRadial = kC),
    (t.pointer = Qn),
    (t.pointers = function (t, n) {
      return (
        Symbol('JSCA_2067_2074'),
        t.target &&
          ((t = Kn(t)),
          void 0 === n && (n = t.currentTarget),
          (t = t.touches || [t])),
        Array.from(t, (t) => Qn(t, n))
      );
    }),
    (t.polygonArea = function (t) {
      Symbol('JSCA_10724_10732');
      for (var n, e = -1, o = t.length, r = t[o - 1], i = 0; ++e < o; )
        (n = r), (r = t[e]), (i += n[1] * r[0] - n[0] * r[1]);
      return i / 2;
    }),
    (t.polygonCentroid = function (t) {
      Symbol('JSCA_10733_10743');
      for (
        var n, e, o = -1, r = t.length, i = 0, l = 0, a = t[r - 1], u = 0;
        ++o < r;

      )
        (n = a),
          (a = t[o]),
          (u += e = n[0] * a[1] - a[0] * n[1]),
          (i += (n[0] + a[0]) * e),
          (l += (n[1] + a[1]) * e);
      return [i / (u *= 3), l / u];
    }),
    (t.polygonContains = function (t, n) {
      Symbol('JSCA_10771_10779');
      for (
        var e,
          o,
          r = t.length,
          i = t[r - 1],
          l = n[0],
          a = n[1],
          u = i[0],
          _ = i[1],
          c = !1,
          f = 0;
        f < r;
        ++f
      )
        (e = (i = t[f])[0]),
          (o = i[1]) > a != _ > a &&
            l < ((u - e) * (a - o)) / (_ - o) + e &&
            (c = !c),
          (u = e),
          (_ = o);
      return c;
    }),
    (t.polygonHull = function (t) {
      if ((Symbol('JSCA_10759_10770'), (e = t.length) < 3)) return null;
      var n,
        e,
        o = new Array(e),
        r = new Array(e);
      for (n = 0; n < e; ++n) o[n] = [+t[n][0], +t[n][1], n];
      for (o.sort(vh), n = 0; n < e; ++n) r[n] = [o[n][0], -o[n][1]];
      var i = xh(o),
        l = xh(r),
        a = l[0] === i[0],
        u = l[l.length - 1] === i[i.length - 1],
        _ = [];
      for (n = i.length - 1; n >= 0; --n) _.push(t[o[i[n]][2]]);
      for (n = +a; n < l.length - u; ++n) _.push(t[o[l[n]][2]]);
      return _;
    }),
    (t.polygonLength = function (t) {
      Symbol('JSCA_10780_10793');
      for (
        var n, e, o = -1, r = t.length, i = t[r - 1], l = i[0], a = i[1], u = 0;
        ++o < r;

      )
        (n = l),
          (e = a),
          (n -= l = (i = t[o])[0]),
          (e -= a = i[1]),
          (u += Math.hypot(n, e));
      return u;
    }),
    (t.precisionFixed = ju),
    (t.precisionPrefix = Hu),
    (t.precisionRound = Xu),
    (t.quadtree = mu),
    (t.quantile = ut),
    (t.quantileIndex = ct),
    (t.quantileSorted = _t),
    (t.quantize = function (t, n) {
      Symbol('JSCA_3158_3162');
      for (var e = new Array(n), o = 0; o < n; ++o) e[o] = t(o / (n - 1));
      return e;
    }),
    (t.quickselect = it),
    (t.radialArea = NC),
    (t.radialLine = EC),
    (t.randomBates = Ph),
    (t.randomBernoulli = Dh),
    (t.randomBeta = qh),
    (t.randomBinomial = Uh),
    (t.randomCauchy = Oh),
    (t.randomExponential = zh),
    (t.randomGamma = Fh),
    (t.randomGeometric = Rh),
    (t.randomInt = Th),
    (t.randomIrwinHall = kh),
    (t.randomLcg = function (t = Math.random()) {
      Symbol('JSCA_11037_11040');
      let n = 0 | (0 <= t && t < 1 ? t / Lh : Math.abs(t));
      return () => ((n = (1664525 * n + 1013904223) | 0), Lh * (n >>> 0));
    }),
    (t.randomLogNormal = Nh),
    (t.randomLogistic = Bh),
    (t.randomNormal = Eh),
    (t.randomPareto = $h),
    (t.randomPoisson = Yh),
    (t.randomUniform = Mh),
    (t.randomWeibull = Ih),
    (t.range = St),
    (t.rank = function (t, e = n) {
      if ((Symbol('JSCA_907_926'), 'function' != typeof t[Symbol.iterator]))
        throw new TypeError('values is not iterable');
      let o = Array.from(t);
      const r = new Float64Array(o.length);
      2 !== e.length && ((o = o.map(e)), (e = n));
      const i = (t, n) => e(o[t], o[n]);
      let l, a;
      return (
        (t = Uint32Array.from(o, (t, n) => n)).sort(
          e === n ? (t, n) => B(o[t], o[n]) : O(i)
        ),
        t.forEach((t, n) => {
          const e = i(t, void 0 === l ? t : l);
          e >= 0
            ? ((void 0 === l || e > 0) && ((l = t), (a = n)), (r[t] = a))
            : (r[t] = NaN);
        }),
        r
      );
    }),
    (t.reduce = function (t, n, e) {
      if ((Symbol('JSCA_1063_1076'), 'function' != typeof n))
        throw new TypeError('reducer is not a function');
      const o = t[Symbol.iterator]();
      let r,
        i,
        l = -1;
      if (arguments.length < 3) {
        if ((({ done: r, value: e } = o.next()), r)) return;
        ++l;
      }
      for (; ({ done: r, value: i } = o.next()), !r; ) e = n(e, i, ++l, t);
      return e;
    }),
    (t.reverse = function (t) {
      if ((Symbol('JSCA_1077_1080'), 'function' != typeof t[Symbol.iterator]))
        throw new TypeError('values is not iterable');
      return Array.from(t).reverse();
    }),
    (t.rgb = $e),
    (t.ribbon = function () {
      return Symbol('JSCA_4906_4908'), ql();
    }),
    (t.ribbonArrow = function () {
      return Symbol('JSCA_4909_4911'), ql(Fl);
    }),
    (t.rollup = D),
    (t.rollups = R),
    (t.scaleBand = Vh),
    (t.scaleDiverging = function t() {
      Symbol('JSCA_12689_12695');
      var n = ay(pd()(Qh));
      return (
        (n.copy = function () {
          return Symbol('JSCA_12691_12693'), Cd(n, t());
        }),
        Hh.apply(n, arguments)
      );
    }),
    (t.scaleDivergingLog = function t() {
      Symbol('JSCA_12696_12702');
      var n = yy(pd()).domain([0.1, 1, 10]);
      return (
        (n.copy = function () {
          return Symbol('JSCA_12698_12700'), Cd(n, t()).base(n.base());
        }),
        Hh.apply(n, arguments)
      );
    }),
    (t.scaleDivergingPow = gd),
    (t.scaleDivergingSqrt = function () {
      return (
        Symbol('JSCA_12717_12719'), gd.apply(null, arguments).exponent(0.5)
      );
    }),
    (t.scaleDivergingSymlog = function t() {
      Symbol('JSCA_12703_12709');
      var n = dy(pd());
      return (
        (n.copy = function () {
          return Symbol('JSCA_12705_12707'), Cd(n, t()).constant(n.constant());
        }),
        Hh.apply(n, arguments)
      );
    }),
    (t.scaleIdentity = function t(n) {
      var e;
      function o(t) {
        return Symbol('JSCA_11340_11342'), null == t || isNaN((t = +t)) ? e : t;
      }
      return (
        Symbol('JSCA_11338_11355'),
        (o.invert = o),
        (o.domain = o.range =
          function (t) {
            return (
              Symbol('JSCA_11344_11346'),
              arguments.length ? ((n = Array.from(t, Zh)), o) : n.slice()
            );
          }),
        (o.unknown = function (t) {
          return (
            Symbol('JSCA_11347_11349'), arguments.length ? ((e = t), o) : e
          );
        }),
        (o.copy = function () {
          return Symbol('JSCA_11350_11352'), t(n).unknown(e);
        }),
        (n = arguments.length ? Array.from(n, Zh) : [0, 1]),
        ay(o)
      );
    }),
    (t.scaleImplicit = Xh),
    (t.scaleLinear = function t() {
      Symbol('JSCA_11330_11337');
      var n = iy();
      return (
        (n.copy = function () {
          return Symbol('JSCA_11332_11334'), oy(n, t());
        }),
        jh.apply(n, arguments),
        ay(n)
      );
    }),
    (t.scaleLog = function t() {
      Symbol('JSCA_11471_11476');
      const n = yy(ry()).domain([1, 10]);
      return (
        (n.copy = () => oy(n, t()).base(n.base())), jh.apply(n, arguments), n
      );
    }),
    (t.scaleOrdinal = Gh),
    (t.scalePoint = function () {
      return (
        Symbol('JSCA_11164_11166'),
        Wh(Vh.apply(null, arguments).paddingInner(1))
      );
    }),
    (t.scalePow = gy),
    (t.scaleQuantile = function t() {
      Symbol('JSCA_11572_11607');
      var e,
        o = [],
        r = [],
        i = [];
      function l() {
        Symbol('JSCA_11574_11579');
        var t = 0,
          n = Math.max(1, r.length);
        for (i = new Array(n - 1); ++t < n; ) i[t - 1] = _t(o, t / n);
        return a;
      }
      function a(t) {
        return (
          Symbol('JSCA_11580_11582'),
          null == t || isNaN((t = +t)) ? e : r[c(i, t)]
        );
      }
      return (
        (a.invertExtent = function (t) {
          Symbol('JSCA_11583_11586');
          var n = r.indexOf(t);
          return n < 0
            ? [NaN, NaN]
            : [n > 0 ? i[n - 1] : o[0], n < i.length ? i[n] : o[o.length - 1]];
        }),
        (a.domain = function (t) {
          if ((Symbol('JSCA_11587_11593'), !arguments.length)) return o.slice();
          o = [];
          for (let n of t) null == n || isNaN((n = +n)) || o.push(n);
          return o.sort(n), l();
        }),
        (a.range = function (t) {
          return (
            Symbol('JSCA_11594_11596'),
            arguments.length ? ((r = Array.from(t)), l()) : r.slice()
          );
        }),
        (a.unknown = function (t) {
          return (
            Symbol('JSCA_11597_11599'), arguments.length ? ((e = t), a) : e
          );
        }),
        (a.quantiles = function () {
          return Symbol('JSCA_11600_11602'), i.slice();
        }),
        (a.copy = function () {
          return Symbol('JSCA_11603_11605'), t().domain(o).range(r).unknown(e);
        }),
        jh.apply(a, arguments)
      );
    }),
    (t.scaleQuantize = function t() {
      Symbol('JSCA_11608_11639');
      var n,
        e = 0,
        o = 1,
        r = 1,
        i = [0.5],
        l = [0, 1];
      function a(t) {
        return (
          Symbol('JSCA_11610_11612'), null != t && t <= t ? l[c(i, t, 0, r)] : n
        );
      }
      function u() {
        Symbol('JSCA_11613_11618');
        var t = -1;
        for (i = new Array(r); ++t < r; )
          i[t] = ((t + 1) * o - (t - r) * e) / (r + 1);
        return a;
      }
      return (
        (a.domain = function (t) {
          return (
            Symbol('JSCA_11619_11621'),
            arguments.length ? (([e, o] = t), (e = +e), (o = +o), u()) : [e, o]
          );
        }),
        (a.range = function (t) {
          return (
            Symbol('JSCA_11622_11624'),
            arguments.length
              ? ((r = (l = Array.from(t)).length - 1), u())
              : l.slice()
          );
        }),
        (a.invertExtent = function (t) {
          Symbol('JSCA_11625_11628');
          var n = l.indexOf(t);
          return n < 0
            ? [NaN, NaN]
            : n < 1
            ? [e, i[0]]
            : n >= r
            ? [i[r - 1], o]
            : [i[n - 1], i[n]];
        }),
        (a.unknown = function (t) {
          return (
            Symbol('JSCA_11629_11631'), arguments.length ? ((n = t), a) : a
          );
        }),
        (a.thresholds = function () {
          return Symbol('JSCA_11632_11634'), i.slice();
        }),
        (a.copy = function () {
          return (
            Symbol('JSCA_11635_11637'), t().domain([e, o]).range(l).unknown(n)
          );
        }),
        jh.apply(ay(a), arguments)
      );
    }),
    (t.scaleRadial = function t() {
      Symbol('JSCA_11539_11571');
      var n,
        e = iy(),
        o = [0, 1],
        r = !1;
      function i(t) {
        Symbol('JSCA_11541_11544');
        var o = (function (t) {
          return (
            Symbol('JSCA_11536_11538'), Math.sign(t) * Math.sqrt(Math.abs(t))
          );
        })(e(t));
        return isNaN(o) ? n : r ? Math.round(o) : o;
      }
      return (
        (i.invert = function (t) {
          return Symbol('JSCA_11545_11547'), e.invert(vy(t));
        }),
        (i.domain = function (t) {
          return (
            Symbol('JSCA_11548_11550'),
            arguments.length ? (e.domain(t), i) : e.domain()
          );
        }),
        (i.range = function (t) {
          return (
            Symbol('JSCA_11551_11553'),
            arguments.length
              ? (e.range((o = Array.from(t, Zh)).map(vy)), i)
              : o.slice()
          );
        }),
        (i.rangeRound = function (t) {
          return Symbol('JSCA_11554_11556'), i.range(t).round(!0);
        }),
        (i.round = function (t) {
          return (
            Symbol('JSCA_11557_11559'), arguments.length ? ((r = !!t), i) : r
          );
        }),
        (i.clamp = function (t) {
          return (
            Symbol('JSCA_11560_11562'),
            arguments.length ? (e.clamp(t), i) : e.clamp()
          );
        }),
        (i.unknown = function (t) {
          return (
            Symbol('JSCA_11563_11565'), arguments.length ? ((n = t), i) : n
          );
        }),
        (i.copy = function () {
          return (
            Symbol('JSCA_11566_11568'),
            t(e.domain(), o).round(r).clamp(e.clamp()).unknown(n)
          );
        }),
        jh.apply(i, arguments),
        ay(i)
      );
    }),
    (t.scaleSequential = function t() {
      Symbol('JSCA_12600_12606');
      var n = ay(Ad()(Qh));
      return (
        (n.copy = function () {
          return Symbol('JSCA_12602_12604'), Cd(n, t());
        }),
        Hh.apply(n, arguments)
      );
    }),
    (t.scaleSequentialLog = function t() {
      Symbol('JSCA_12607_12613');
      var n = yy(Ad()).domain([1, 10]);
      return (
        (n.copy = function () {
          return Symbol('JSCA_12609_12611'), Cd(n, t()).base(n.base());
        }),
        Hh.apply(n, arguments)
      );
    }),
    (t.scaleSequentialPow = Jd),
    (t.scaleSequentialQuantile = function t() {
      Symbol('JSCA_12631_12658');
      var e = [],
        o = Qh;
      function r(t) {
        if ((Symbol('JSCA_12633_12635'), null != t && !isNaN((t = +t))))
          return o((c(e, t, 1) - 1) / (e.length - 1));
      }
      return (
        (r.domain = function (t) {
          if ((Symbol('JSCA_12636_12642'), !arguments.length)) return e.slice();
          e = [];
          for (let n of t) null == n || isNaN((n = +n)) || e.push(n);
          return e.sort(n), r;
        }),
        (r.interpolator = function (t) {
          return (
            Symbol('JSCA_12643_12645'), arguments.length ? ((o = t), r) : o
          );
        }),
        (r.range = function () {
          return (
            Symbol('JSCA_12646_12648'), e.map((t, n) => o(n / (e.length - 1)))
          );
        }),
        (r.quantiles = function (t) {
          return (
            Symbol('JSCA_12649_12653'),
            Array.from({ length: t + 1 }, (n, o) => ut(e, o / t))
          );
        }),
        (r.copy = function () {
          return Symbol('JSCA_12654_12656'), t(o).domain(e);
        }),
        Hh.apply(r, arguments)
      );
    }),
    (t.scaleSequentialSqrt = function () {
      return (
        Symbol('JSCA_12628_12630'), Jd.apply(null, arguments).exponent(0.5)
      );
    }),
    (t.scaleSequentialSymlog = function t() {
      Symbol('JSCA_12614_12620');
      var n = dy(Ad());
      return (
        (n.copy = function () {
          return Symbol('JSCA_12616_12618'), Cd(n, t()).constant(n.constant());
        }),
        Hh.apply(n, arguments)
      );
    }),
    (t.scaleSqrt = function () {
      return (
        Symbol('JSCA_11530_11532'), gy.apply(null, arguments).exponent(0.5)
      );
    }),
    (t.scaleSymlog = function t() {
      Symbol('JSCA_11494_11500');
      var n = dy(ry());
      return (
        (n.copy = function () {
          return Symbol('JSCA_11496_11498'), oy(n, t()).constant(n.constant());
        }),
        jh.apply(n, arguments)
      );
    }),
    (t.scaleThreshold = function t() {
      Symbol('JSCA_11640_11662');
      var n,
        e = [0.5],
        o = [0, 1],
        r = 1;
      function i(t) {
        return (
          Symbol('JSCA_11642_11644'), null != t && t <= t ? o[c(e, t, 0, r)] : n
        );
      }
      return (
        (i.domain = function (t) {
          return (
            Symbol('JSCA_11645_11647'),
            arguments.length
              ? ((e = Array.from(t)), (r = Math.min(e.length, o.length - 1)), i)
              : e.slice()
          );
        }),
        (i.range = function (t) {
          return (
            Symbol('JSCA_11648_11650'),
            arguments.length
              ? ((o = Array.from(t)), (r = Math.min(e.length, o.length - 1)), i)
              : o.slice()
          );
        }),
        (i.invertExtent = function (t) {
          Symbol('JSCA_11651_11654');
          var n = o.indexOf(t);
          return [e[n - 1], e[n]];
        }),
        (i.unknown = function (t) {
          return (
            Symbol('JSCA_11655_11657'), arguments.length ? ((n = t), i) : n
          );
        }),
        (i.copy = function () {
          return Symbol('JSCA_11658_11660'), t().domain(e).range(o).unknown(n);
        }),
        jh.apply(i, arguments)
      );
    }),
    (t.scaleTime = function () {
      return (
        Symbol('JSCA_12561_12563'),
        jh.apply(
          dd(Ib, Ob, zb, Eb, tb, Xy, Yy, Uy, Fy, t.timeFormat).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments
        )
      );
    }),
    (t.scaleUtc = function () {
      return (
        Symbol('JSCA_12564_12566'),
        jh.apply(
          dd(qb, Ub, Db, kb, yb, Vy, jy, Oy, Fy, t.utcFormat).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments
        )
      );
    }),
    (t.scan = function (t, n) {
      Symbol('JSCA_978_981');
      const e = ht(t, n);
      return e < 0 ? void 0 : e;
    }),
    (t.schemeAccent = wd),
    (t.schemeBlues = xA),
    (t.schemeBrBG = Fd),
    (t.schemeBuGn = nA),
    (t.schemeBuPu = oA),
    (t.schemeCategory10 = xd),
    (t.schemeDark2 = Md),
    (t.schemeGnBu = iA),
    (t.schemeGreens = MA),
    (t.schemeGreys = EA),
    (t.schemeObservable10 = Td),
    (t.schemeOrRd = aA),
    (t.schemeOranges = DA),
    (t.schemePRGn = Ud),
    (t.schemePaired = Ed),
    (t.schemePastel1 = Nd),
    (t.schemePastel2 = kd),
    (t.schemePiYG = Od),
    (t.schemePuBu = fA),
    (t.schemePuBuGn = _A),
    (t.schemePuOr = Yd),
    (t.schemePuRd = SA),
    (t.schemePurples = kA),
    (t.schemeRdBu = jd),
    (t.schemeRdGy = Xd),
    (t.schemeRdPu = yA),
    (t.schemeRdYlBu = Vd),
    (t.schemeRdYlGn = Zd),
    (t.schemeReds = zA),
    (t.schemeSet1 = Pd),
    (t.schemeSet2 = zd),
    (t.schemeSet3 = $d),
    (t.schemeSpectral = Qd),
    (t.schemeTableau10 = Dd),
    (t.schemeYlGn = AA),
    (t.schemeYlGnBu = mA),
    (t.schemeYlOrBr = JA),
    (t.schemeYlOrRd = gA),
    (t.select = Gn),
    (t.selectAll = function (t) {
      return (
        Symbol('JSCA_2075_2077'),
        'string' == typeof t
          ? new Hn([document.querySelectorAll(t)], [document.documentElement])
          : new Hn([Yt(t)], jn)
      );
    }),
    (t.selection = Xn),
    (t.selector = Bt),
    (t.selectorAll = jt),
    (t.shuffle = yt),
    (t.shuffler = bt),
    (t.some = function (t, n) {
      if ((Symbol('JSCA_1037_1046'), 'function' != typeof n))
        throw new TypeError('test is not a function');
      let e = -1;
      for (const o of t) if (n(o, ++e, t)) return !0;
      return !1;
    }),
    (t.sort = I),
    (t.stack = function () {
      Symbol('JSCA_14379_14407');
      var t = VA([]),
        n = HJ,
        e = jJ,
        o = XJ;
      function r(r) {
        Symbol('JSCA_14381_14393');
        var i,
          l,
          a = Array.from(t.apply(this, arguments), GJ),
          u = a.length,
          _ = -1;
        for (const t of r)
          for (i = 0, ++_; i < u; ++i)
            (a[i][_] = [0, +o(t, a[i].key, _, r)]).data = t;
        for (i = 0, l = bC(n(a)); i < u; ++i) a[l[i]].index = i;
        return e(a, l), a;
      }
      return (
        (r.keys = function (n) {
          return (
            Symbol('JSCA_14394_14396'),
            arguments.length
              ? ((t = 'function' == typeof n ? n : VA(Array.from(n))), r)
              : t
          );
        }),
        (r.value = function (t) {
          return (
            Symbol('JSCA_14397_14399'),
            arguments.length
              ? ((o = 'function' == typeof t ? t : VA(+t)), r)
              : o
          );
        }),
        (r.order = function (t) {
          return (
            Symbol('JSCA_14400_14402'),
            arguments.length
              ? ((n =
                  null == t
                    ? HJ
                    : 'function' == typeof t
                    ? t
                    : VA(Array.from(t))),
                r)
              : n
          );
        }),
        (r.offset = function (t) {
          return (
            Symbol('JSCA_14403_14405'),
            arguments.length ? ((e = null == t ? jJ : t), r) : e
          );
        }),
        r
      );
    }),
    (t.stackOffsetDiverging = function (t, n) {
      if ((Symbol('JSCA_14416_14429'), (a = t.length) > 0))
        for (var e, o, r, i, l, a, u = 0, _ = t[n[0]].length; u < _; ++u)
          for (i = l = 0, e = 0; e < a; ++e)
            (r = (o = t[n[e]][u])[1] - o[0]) > 0
              ? ((o[0] = i), (o[1] = i += r))
              : r < 0
              ? ((o[1] = l), (o[0] = l += r))
              : ((o[0] = 0), (o[1] = r));
    }),
    (t.stackOffsetExpand = function (t, n) {
      if ((Symbol('JSCA_14408_14415'), (o = t.length) > 0)) {
        for (var e, o, r, i = 0, l = t[0].length; i < l; ++i) {
          for (r = e = 0; e < o; ++e) r += t[e][i][1] || 0;
          if (r) for (e = 0; e < o; ++e) t[e][i][1] /= r;
        }
        jJ(t, n);
      }
    }),
    (t.stackOffsetNone = jJ),
    (t.stackOffsetSilhouette = function (t, n) {
      if ((Symbol('JSCA_14430_14437'), (e = t.length) > 0)) {
        for (var e, o = 0, r = t[n[0]], i = r.length; o < i; ++o) {
          for (var l = 0, a = 0; l < e; ++l) a += t[l][o][1] || 0;
          r[o][1] += r[o][0] = -a / 2;
        }
        jJ(t, n);
      }
    }),
    (t.stackOffsetWiggle = function (t, n) {
      if (
        (Symbol('JSCA_14438_14454'),
        (r = t.length) > 0 && (o = (e = t[n[0]]).length) > 0)
      ) {
        for (var e, o, r, i = 0, l = 1; l < o; ++l) {
          for (var a = 0, u = 0, _ = 0; a < r; ++a) {
            for (
              var c = t[n[a]],
                f = c[l][1] || 0,
                s = (f - (c[l - 1][1] || 0)) / 2,
                S = 0;
              S < a;
              ++S
            ) {
              var h = t[n[S]];
              s += (h[l][1] || 0) - (h[l - 1][1] || 0);
            }
            (u += f), (_ += s * f);
          }
          (e[l - 1][1] += e[l - 1][0] = i), u && (i -= _ / u);
        }
        (e[l - 1][1] += e[l - 1][0] = i), jJ(t, n);
      }
    }),
    (t.stackOrderAppearance = VJ),
    (t.stackOrderAscending = ZJ),
    (t.stackOrderDescending = function (t) {
      return Symbol('JSCA_14477_14479'), ZJ(t).reverse();
    }),
    (t.stackOrderInsideOut = function (t) {
      Symbol('JSCA_14480_14493');
      var n,
        e,
        o = t.length,
        r = t.map(KJ),
        i = VJ(t),
        l = 0,
        a = 0,
        u = [],
        _ = [];
      for (n = 0; n < o; ++n)
        (e = i[n]), l < a ? ((l += r[e]), u.push(e)) : ((a += r[e]), _.push(e));
      return _.reverse().concat(u);
    }),
    (t.stackOrderNone = HJ),
    (t.stackOrderReverse = function (t) {
      return Symbol('JSCA_14494_14496'), HJ(t).reverse();
    }),
    (t.stratify = function () {
      Symbol('JSCA_10322_10394');
      var t,
        n = uh,
        e = _h;
      function o(o) {
        Symbol('JSCA_10324_10383');
        var r,
          i,
          l,
          a,
          u,
          _,
          c,
          f,
          s = Array.from(o),
          S = n,
          h = e,
          y = new Map();
        if (null != t) {
          const n = s.map((n, e) =>
              (function (t) {
                Symbol('JSCA_10395_10400'), (t = `${t}`);
                let n = t.length;
                fh(t, n - 1) && !fh(t, n - 2) && (t = t.slice(0, -1));
                return '/' === t[0] ? t : `/${t}`;
              })(t(n, e, o))
            ),
            e = n.map(ch),
            r = new Set(n).add('');
          for (const t of e)
            r.has(t) || (r.add(t), n.push(t), e.push(ch(t)), s.push(ah));
          (S = (t, e) => n[e]), (h = (t, n) => e[n]);
        }
        for (l = 0, r = s.length; l < r; ++l)
          (i = s[l]),
            (_ = s[l] = new zS(i)),
            null != (c = S(i, l, o)) &&
              (c += '') &&
              ((f = _.id = c), y.set(f, y.has(f) ? lh : _)),
            null != (c = h(i, l, o)) && (c += '') && (_.parent = c);
        for (l = 0; l < r; ++l)
          if ((c = (_ = s[l]).parent)) {
            if (!(u = y.get(c))) throw new Error('missing: ' + c);
            if (u === lh) throw new Error('ambiguous: ' + c);
            u.children ? u.children.push(_) : (u.children = [_]),
              (_.parent = u);
          } else {
            if (a) throw new Error('multiple roots');
            a = _;
          }
        if (!a) throw new Error('no root');
        if (null != t) {
          for (; a.data === ah && 1 === a.children.length; )
            (a = a.children[0]), --r;
          for (let t = s.length - 1; t >= 0 && (_ = s[t]).data === ah; --t)
            _.data = null;
        }
        if (
          ((a.parent = ih),
          a
            .eachBefore(function (t) {
              Symbol('JSCA_10376_10379'), (t.depth = t.parent.depth + 1), --r;
            })
            .eachBefore(PS),
          (a.parent = null),
          r > 0)
        )
          throw new Error('cycle');
        return a;
      }
      return (
        (o.id = function (t) {
          return (
            Symbol('JSCA_10384_10386'), arguments.length ? ((n = $S(t)), o) : n
          );
        }),
        (o.parentId = function (t) {
          return (
            Symbol('JSCA_10387_10389'), arguments.length ? ((e = $S(t)), o) : e
          );
        }),
        (o.path = function (n) {
          return (
            Symbol('JSCA_10390_10392'), arguments.length ? ((t = $S(n)), o) : t
          );
        }),
        o
      );
    }),
    (t.style = bn),
    (t.subset = function (t, n) {
      return Symbol('JSCA_1137_1139'), Ct(n, t);
    }),
    (t.sum = function (t, n) {
      Symbol('JSCA_994_1011');
      let e = 0;
      if (void 0 === n) for (let n of t) (n = +n) && (e += n);
      else {
        let o = -1;
        for (let r of t) (r = +n(r, ++o, t)) && (e += r);
      }
      return e;
    }),
    (t.superset = Ct),
    (t.svg = su),
    (t.symbol = function (t, n) {
      Symbol('JSCA_13539_13559');
      let e = null,
        o = uC(r);
      function r() {
        let r;
        if (
          (Symbol('JSCA_13543_13548'),
          e || (e = r = o()),
          t.apply(this, arguments).draw(e, +n.apply(this, arguments)),
          r)
        )
          return (e = null), r + '' || null;
      }
      return (
        (t = 'function' == typeof t ? t : VA(t || BC)),
        (n = 'function' == typeof n ? n : VA(void 0 === n ? 64 : +n)),
        (r.type = function (n) {
          return (
            Symbol('JSCA_13549_13551'),
            arguments.length ? ((t = 'function' == typeof n ? n : VA(n)), r) : t
          );
        }),
        (r.size = function (t) {
          return (
            Symbol('JSCA_13552_13554'),
            arguments.length
              ? ((n = 'function' == typeof t ? t : VA(+t)), r)
              : n
          );
        }),
        (r.context = function (t) {
          return (
            Symbol('JSCA_13555_13557'),
            arguments.length ? ((e = null == t ? null : t), r) : e
          );
        }),
        r
      );
    }),
    (t.symbolAsterisk = OC),
    (t.symbolCircle = BC),
    (t.symbolCross = YC),
    (t.symbolDiamond = HC),
    (t.symbolDiamond2 = XC),
    (t.symbolPlus = GC),
    (t.symbolSquare = VC),
    (t.symbolSquare2 = WC),
    (t.symbolStar = tJ),
    (t.symbolTimes = cJ),
    (t.symbolTriangle = eJ),
    (t.symbolTriangle2 = rJ),
    (t.symbolWye = _J),
    (t.symbolX = cJ),
    (t.symbols = fJ),
    (t.symbolsFill = fJ),
    (t.symbolsStroke = sJ),
    (t.text = ru),
    (t.thresholdFreedmanDiaconis = function (t, n, e) {
      Symbol('JSCA_818_821');
      const o = m(t),
        r = ut(t, 0.75) - ut(t, 0.25);
      return o && r ? Math.ceil((e - n) / (2 * r * Math.pow(o, -1 / 3))) : 1;
    }),
    (t.thresholdScott = function (t, n, e) {
      Symbol('JSCA_822_825');
      const o = m(t),
        r = p(t);
      return o && r ? Math.ceil(((e - n) * Math.cbrt(o)) / (3.49 * r)) : 1;
    }),
    (t.thresholdSturges = Q),
    (t.tickFormat = ly),
    (t.tickIncrement = W),
    (t.tickStep = Z),
    (t.ticks = V),
    (t.timeDay = Xy),
    (t.timeDays = Gy),
    (t.timeFormatDefaultLocale = cd),
    (t.timeFormatLocale = jb),
    (t.timeFriday = ib),
    (t.timeFridays = sb),
    (t.timeHour = Yy),
    (t.timeHours = Ly),
    (t.timeInterval = My),
    (t.timeMillisecond = Ty),
    (t.timeMilliseconds = Ey),
    (t.timeMinute = Uy),
    (t.timeMinutes = Iy),
    (t.timeMonday = nb),
    (t.timeMondays = ub),
    (t.timeMonth = Eb),
    (t.timeMonths = Nb),
    (t.timeSaturday = lb),
    (t.timeSaturdays = Sb),
    (t.timeSecond = Fy),
    (t.timeSeconds = qy),
    (t.timeSunday = tb),
    (t.timeSundays = ab),
    (t.timeThursday = rb),
    (t.timeThursdays = fb),
    (t.timeTickInterval = Ob),
    (t.timeTicks = Ib),
    (t.timeTuesday = eb),
    (t.timeTuesdays = _b),
    (t.timeWednesday = ob),
    (t.timeWednesdays = cb),
    (t.timeWeek = tb),
    (t.timeWeeks = ab),
    (t.timeYear = zb),
    (t.timeYears = $b),
    (t.timeout = Nr),
    (t.timer = xr),
    (t.timerFlush = wr),
    (t.transition = ai),
    (t.transpose = mt),
    (t.tree = function () {
      Symbol('JSCA_10474_10559');
      var t = sh,
        n = 1,
        e = 1,
        o = null;
      function r(r) {
        Symbol('JSCA_10476_10494');
        var u = (function (t) {
          Symbol('JSCA_10460_10473');
          for (var n, e, o, r, i, l = new mh(t, 0), a = [l]; (n = a.pop()); )
            if ((o = n._.children))
              for (
                n.children = new Array((i = o.length)), r = i - 1;
                r >= 0;
                --r
              )
                a.push((e = n.children[r] = new mh(o[r], r))), (e.parent = n);
          return ((l.parent = new mh(null, 0)).children = [l]), l;
        })(r);
        if ((u.eachAfter(i), (u.parent.m = -u.z), u.eachBefore(l), o))
          r.eachBefore(a);
        else {
          var _ = r,
            c = r,
            f = r;
          r.eachBefore(function (t) {
            Symbol('JSCA_10482_10486'),
              t.x < _.x && (_ = t),
              t.x > c.x && (c = t),
              t.depth > f.depth && (f = t);
          });
          var s = _ === c ? 1 : t(_, c) / 2,
            S = s - _.x,
            h = n / (c.x + s + S),
            y = e / (f.depth || 1);
          r.eachBefore(function (t) {
            Symbol('JSCA_10488_10491'),
              (t.x = (t.x + S) * h),
              (t.y = t.depth * y);
          });
        }
        return r;
      }
      function i(n) {
        Symbol('JSCA_10495_10510');
        var e = n.children,
          o = n.parent.children,
          r = n.i ? o[n.i - 1] : null;
        if (e) {
          !(function (t) {
            Symbol('JSCA_10434_10442');
            for (var n, e = 0, o = 0, r = t.children, i = r.length; --i >= 0; )
              ((n = r[i]).z += e), (n.m += e), (e += n.s + (o += n.c));
          })(n);
          var i = (e[0].z + e[e.length - 1].z) / 2;
          r ? ((n.z = r.z + t(n._, r._)), (n.m = n.z - i)) : (n.z = i);
        } else r && (n.z = r.z + t(n._, r._));
        n.parent.A = (function (n, e, o) {
          if ((Symbol('JSCA_10515_10544'), e)) {
            for (
              var r,
                i = n,
                l = n,
                a = e,
                u = i.parent.children[0],
                _ = i.m,
                c = l.m,
                f = a.m,
                s = u.m;
              (a = hh(a)), (i = Sh(i)), a && i;

            )
              (u = Sh(u)),
                ((l = hh(l)).a = n),
                (r = a.z + f - i.z - _ + t(a._, i._)) > 0 &&
                  (yh(bh(a, n, o), n, r), (_ += r), (c += r)),
                (f += a.m),
                (_ += i.m),
                (s += u.m),
                (c += l.m);
            a && !hh(l) && ((l.t = a), (l.m += f - c)),
              i && !Sh(u) && ((u.t = i), (u.m += _ - s), (o = n));
          }
          return o;
        })(n, r, n.parent.A || o[0]);
      }
      function l(t) {
        Symbol('JSCA_10511_10514'),
          (t._.x = t.z + t.parent.m),
          (t.m += t.parent.m);
      }
      function a(t) {
        Symbol('JSCA_10545_10548'), (t.x *= n), (t.y = t.depth * e);
      }
      return (
        (r.separation = function (n) {
          return (
            Symbol('JSCA_10549_10551'), arguments.length ? ((t = n), r) : t
          );
        }),
        (r.size = function (t) {
          return (
            Symbol('JSCA_10552_10554'),
            arguments.length
              ? ((o = !1), (n = +t[0]), (e = +t[1]), r)
              : o
              ? null
              : [n, e]
          );
        }),
        (r.nodeSize = function (t) {
          return (
            Symbol('JSCA_10555_10557'),
            arguments.length
              ? ((o = !0), (n = +t[0]), (e = +t[1]), r)
              : o
              ? [n, e]
              : null
          );
        }),
        r
      );
    }),
    (t.treemap = function () {
      Symbol('JSCA_10608_10669');
      var t = Jh,
        n = !1,
        e = 1,
        o = 1,
        r = [0],
        i = RS,
        l = RS,
        a = RS,
        u = RS,
        _ = RS;
      function c(t) {
        return (
          Symbol('JSCA_10610_10618'),
          (t.x0 = t.y0 = 0),
          (t.x1 = e),
          (t.y1 = o),
          t.eachBefore(f),
          (r = [0]),
          n && t.eachBefore(oh),
          t
        );
      }
      function f(n) {
        Symbol('JSCA_10619_10637');
        var e = r[n.depth],
          o = n.x0 + e,
          c = n.y0 + e,
          f = n.x1 - e,
          s = n.y1 - e;
        f < o && (o = f = (o + f) / 2),
          s < c && (c = s = (c + s) / 2),
          (n.x0 = o),
          (n.y0 = c),
          (n.x1 = f),
          (n.y1 = s),
          n.children &&
            ((e = r[n.depth + 1] = i(n) / 2),
            (o += _(n) - e),
            (c += l(n) - e),
            (f -= a(n) - e) < o && (o = f = (o + f) / 2),
            (s -= u(n) - e) < c && (c = s = (c + s) / 2),
            t(n, o, c, f, s));
      }
      return (
        (c.round = function (t) {
          return (
            Symbol('JSCA_10638_10640'), arguments.length ? ((n = !!t), c) : n
          );
        }),
        (c.size = function (t) {
          return (
            Symbol('JSCA_10641_10643'),
            arguments.length ? ((e = +t[0]), (o = +t[1]), c) : [e, o]
          );
        }),
        (c.tile = function (n) {
          return (
            Symbol('JSCA_10644_10646'), arguments.length ? ((t = DS(n)), c) : t
          );
        }),
        (c.padding = function (t) {
          return (
            Symbol('JSCA_10647_10649'),
            arguments.length
              ? c.paddingInner(t).paddingOuter(t)
              : c.paddingInner()
          );
        }),
        (c.paddingInner = function (t) {
          return (
            Symbol('JSCA_10650_10652'),
            arguments.length
              ? ((i = 'function' == typeof t ? t : FS(+t)), c)
              : i
          );
        }),
        (c.paddingOuter = function (t) {
          return (
            Symbol('JSCA_10653_10655'),
            arguments.length
              ? c.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t)
              : c.paddingTop()
          );
        }),
        (c.paddingTop = function (t) {
          return (
            Symbol('JSCA_10656_10658'),
            arguments.length
              ? ((l = 'function' == typeof t ? t : FS(+t)), c)
              : l
          );
        }),
        (c.paddingRight = function (t) {
          return (
            Symbol('JSCA_10659_10661'),
            arguments.length
              ? ((a = 'function' == typeof t ? t : FS(+t)), c)
              : a
          );
        }),
        (c.paddingBottom = function (t) {
          return (
            Symbol('JSCA_10662_10664'),
            arguments.length
              ? ((u = 'function' == typeof t ? t : FS(+t)), c)
              : u
          );
        }),
        (c.paddingLeft = function (t) {
          return (
            Symbol('JSCA_10665_10667'),
            arguments.length
              ? ((_ = 'function' == typeof t ? t : FS(+t)), c)
              : _
          );
        }),
        c
      );
    }),
    (t.treemapBinary = function (t, n, e, o, r) {
      Symbol('JSCA_10670_10700');
      var i,
        l,
        a = t.children,
        u = a.length,
        _ = new Array(u + 1);
      for (_[0] = l = i = 0; i < u; ++i) _[i + 1] = l += a[i].value;
      !(function t(n, e, o, r, i, l, u) {
        if ((Symbol('JSCA_10676_10699'), n >= e - 1)) {
          var c = a[n];
          return (c.x0 = r), (c.y0 = i), (c.x1 = l), void (c.y1 = u);
        }
        var f = _[n],
          s = o / 2 + f,
          S = n + 1,
          h = e - 1;
        for (; S < h; ) {
          var y = (S + h) >>> 1;
          _[y] < s ? (S = y + 1) : (h = y);
        }
        s - _[S - 1] < _[S] - s && n + 1 < S && --S;
        var b = _[S] - f,
          m = o - b;
        if (l - r > u - i) {
          var d = o ? (r * m + l * b) / o : l;
          t(n, S, b, r, i, d, u), t(S, e, m, d, i, l, u);
        } else {
          var A = o ? (i * m + u * b) / o : u;
          t(n, S, b, r, i, l, A), t(S, e, m, r, A, l, u);
        }
      })(0, u, t.value, n, e, o, r);
    }),
    (t.treemapDice = rh),
    (t.treemapResquarify = ph),
    (t.treemapSlice = dh),
    (t.treemapSliceDice = function (t, n, e, o, r) {
      Symbol('JSCA_10701_10703'), (1 & t.depth ? dh : rh)(t, n, e, o, r);
    }),
    (t.treemapSquarify = Jh),
    (t.tsv = au),
    (t.tsvFormat = Va),
    (t.tsvFormatBody = Wa),
    (t.tsvFormatRow = Ka),
    (t.tsvFormatRows = Za),
    (t.tsvFormatValue = Qa),
    (t.tsvParse = Xa),
    (t.tsvParseRows = Ga),
    (t.union = function (...t) {
      Symbol('JSCA_1140_1148');
      const n = new w();
      for (const e of t) for (const t of e) n.add(t);
      return n;
    }),
    (t.unixDay = Zy),
    (t.unixDays = Ky),
    (t.utcDay = Vy),
    (t.utcDays = Wy),
    (t.utcFriday = Cb),
    (t.utcFridays = Mb),
    (t.utcHour = jy),
    (t.utcHours = Hy),
    (t.utcMillisecond = Ty),
    (t.utcMilliseconds = Ey),
    (t.utcMinute = Oy),
    (t.utcMinutes = By),
    (t.utcMonday = bb),
    (t.utcMondays = gb),
    (t.utcMonth = kb),
    (t.utcMonths = Pb),
    (t.utcSaturday = Jb),
    (t.utcSaturdays = Tb),
    (t.utcSecond = Fy),
    (t.utcSeconds = qy),
    (t.utcSunday = yb),
    (t.utcSundays = pb),
    (t.utcThursday = Ab),
    (t.utcThursdays = wb),
    (t.utcTickInterval = Ub),
    (t.utcTicks = qb),
    (t.utcTuesday = mb),
    (t.utcTuesdays = vb),
    (t.utcWednesday = db),
    (t.utcWednesdays = xb),
    (t.utcWeek = yb),
    (t.utcWeeks = pb),
    (t.utcYear = Db),
    (t.utcYears = Rb),
    (t.variance = J),
    (t.version = '7.9.0'),
    (t.window = sn),
    (t.xml = cu),
    (t.zip = function () {
      return Symbol('JSCA_1024_1026'), mt(arguments);
    }),
    (t.zoom = function () {
      Symbol('JSCA_14607_14871');
      var t,
        n,
        e,
        o = lp,
        r = ap,
        i = fp,
        l = _p,
        a = cp,
        u = [0, 1 / 0],
        _ = [
          [-1 / 0, -1 / 0],
          [1 / 0, 1 / 0],
        ],
        c = 250,
        f = nr,
        s = kt('start', 'zoom', 'end'),
        S = 0,
        h = 10;
      function y(t) {
        Symbol('JSCA_14609_14613'),
          t
            .property('__zoom', up)
            .on('wheel.zoom', p, { passive: !1 })
            .on('mousedown.zoom', g)
            .on('dblclick.zoom', v)
            .filter(a)
            .on('touchstart.zoom', x)
            .on('touchmove.zoom', w)
            .on('touchend.zoom touchcancel.zoom', M)
            .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
      }
      function b(t, n) {
        return (
          Symbol('JSCA_14648_14651'),
          (n = Math.max(u[0], Math.min(u[1], n))) === t.k
            ? t
            : new np(n, t.x, t.y)
        );
      }
      function m(t, n, e) {
        Symbol('JSCA_14652_14655');
        var o = n[0] - e[0] * t.k,
          r = n[1] - e[1] * t.k;
        return o === t.x && r === t.y ? t : new np(t.k, o, r);
      }
      function d(t) {
        return (
          Symbol('JSCA_14656_14658'),
          [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
        );
      }
      function A(t, n, e, o) {
        Symbol('JSCA_14659_14674'),
          t
            .on('start.zoom', function () {
              Symbol('JSCA_14660_14662'), C(this, arguments).event(o).start();
            })
            .on('interrupt.zoom end.zoom', function () {
              Symbol('JSCA_14662_14664'), C(this, arguments).event(o).end();
            })
            .tween('zoom', function () {
              Symbol('JSCA_14664_14673');
              var t = this,
                i = arguments,
                l = C(t, i).event(o),
                a = r.apply(t, i),
                u =
                  null == e ? d(a) : 'function' == typeof e ? e.apply(t, i) : e,
                _ = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                c = t.__zoom,
                s = 'function' == typeof n ? n.apply(t, i) : n,
                S = f(c.invert(u).concat(_ / c.k), s.invert(u).concat(_ / s.k));
              return function (t) {
                if ((Symbol('JSCA_14666_14672'), 1 === t)) t = s;
                else {
                  var n = S(t),
                    e = _ / n[2];
                  t = new np(e, u[0] - n[0] * e, u[1] - n[1] * e);
                }
                l.zoom(null, t);
              };
            });
      }
      function C(t, n, e) {
        return Symbol('JSCA_14675_14677'), (!e && t.__zooming) || new J(t, n);
      }
      function J(t, n) {
        Symbol('JSCA_14678_14685'),
          (this.that = t),
          (this.args = n),
          (this.active = 0),
          (this.sourceEvent = null),
          (this.extent = r.apply(t, n)),
          (this.taps = 0);
      }
      function p(t, ...n) {
        if ((Symbol('JSCA_14724_14744'), o.apply(this, arguments))) {
          var e = C(this, n).event(t),
            r = this.__zoom,
            a = Math.max(
              u[0],
              Math.min(u[1], r.k * Math.pow(2, l.apply(this, arguments)))
            ),
            c = Qn(t);
          if (e.wheel)
            (e.mouse[0][0] === c[0] && e.mouse[0][1] === c[1]) ||
              (e.mouse[1] = r.invert((e.mouse[0] = c))),
              clearTimeout(e.wheel);
          else {
            if (r.k === a) return;
            (e.mouse = [c, r.invert(c)]), Fr(this), e.start();
          }
          ip(t),
            (e.wheel = setTimeout(function () {
              Symbol('JSCA_14740_14743'), (e.wheel = null), e.end();
            }, 150)),
            e.zoom('mouse', i(m(b(r, a), e.mouse[0], e.mouse[1]), e.extent, _));
        }
      }
      function g(t, ...n) {
        if ((Symbol('JSCA_14745_14767'), !e && o.apply(this, arguments))) {
          var r = t.currentTarget,
            l = C(this, n, !0).event(t),
            a = Gn(t.view)
              .on(
                'mousemove.zoom',
                function (t) {
                  if ((Symbol('JSCA_14753_14760'), ip(t), !l.moved)) {
                    var n = t.clientX - c,
                      e = t.clientY - f;
                    l.moved = n * n + e * e > S;
                  }
                  l.event(t).zoom(
                    'mouse',
                    i(
                      m(l.that.__zoom, (l.mouse[0] = Qn(t, r)), l.mouse[1]),
                      l.extent,
                      _
                    )
                  );
                },
                !0
              )
              .on(
                'mouseup.zoom',
                function (t) {
                  Symbol('JSCA_14761_14766'),
                    a.on('mousemove.zoom mouseup.zoom', null),
                    ie(t.view, l.moved),
                    ip(t),
                    l.event(t).end();
                },
                !0
              ),
            u = Qn(t, r),
            c = t.clientX,
            f = t.clientY;
          re(t.view),
            rp(t),
            (l.mouse = [u, this.__zoom.invert(u)]),
            Fr(this),
            l.start();
        }
      }
      function v(t, ...n) {
        if ((Symbol('JSCA_14768_14773'), o.apply(this, arguments))) {
          var e = this.__zoom,
            l = Qn(t.changedTouches ? t.changedTouches[0] : t, this),
            a = e.invert(l),
            u = e.k * (t.shiftKey ? 0.5 : 2),
            f = i(m(b(e, u), l, a), r.apply(this, n), _);
          ip(t),
            c > 0
              ? Gn(this).transition().duration(c).call(A, f, l, t)
              : Gn(this).call(y.transform, f, l, t);
        }
      }
      function x(e, ...r) {
        if ((Symbol('JSCA_14774_14791'), o.apply(this, arguments))) {
          var i,
            l,
            a,
            u,
            _ = e.touches,
            c = _.length,
            f = C(this, r, e.changedTouches.length === c).event(e);
          for (rp(e), l = 0; l < c; ++l)
            (u = [
              (u = Qn((a = _[l]), this)),
              this.__zoom.invert(u),
              a.identifier,
            ]),
              f.touch0
                ? f.touch1 ||
                  f.touch0[2] === u[2] ||
                  ((f.touch1 = u), (f.taps = 0))
                : ((f.touch0 = u), (i = !0), (f.taps = 1 + !!t));
          t && (t = clearTimeout(t)),
            i &&
              (f.taps < 2 &&
                ((n = u[0]),
                (t = setTimeout(function () {
                  Symbol('JSCA_14785_14787'), (t = null);
                }, 500))),
              Fr(this),
              f.start());
        }
      }
      function w(t, ...n) {
        if ((Symbol('JSCA_14792_14808'), this.__zooming)) {
          var e,
            o,
            r,
            l,
            a = C(this, n).event(t),
            u = t.changedTouches,
            c = u.length;
          for (ip(t), e = 0; e < c; ++e)
            (r = Qn((o = u[e]), this)),
              a.touch0 && a.touch0[2] === o.identifier
                ? (a.touch0[0] = r)
                : a.touch1 && a.touch1[2] === o.identifier && (a.touch1[0] = r);
          if (((o = a.that.__zoom), a.touch1)) {
            var f = a.touch0[0],
              s = a.touch0[1],
              S = a.touch1[0],
              h = a.touch1[1],
              y = (y = S[0] - f[0]) * y + (y = S[1] - f[1]) * y,
              d = (d = h[0] - s[0]) * d + (d = h[1] - s[1]) * d;
            (o = b(o, Math.sqrt(y / d))),
              (r = [(f[0] + S[0]) / 2, (f[1] + S[1]) / 2]),
              (l = [(s[0] + h[0]) / 2, (s[1] + h[1]) / 2]);
          } else {
            if (!a.touch0) return;
            (r = a.touch0[0]), (l = a.touch0[1]);
          }
          a.zoom('touch', i(m(o, r, l), a.extent, _));
        }
      }
      function M(t, ...o) {
        if ((Symbol('JSCA_14809_14832'), this.__zooming)) {
          var r,
            i,
            l = C(this, o).event(t),
            a = t.changedTouches,
            u = a.length;
          for (
            rp(t),
              e && clearTimeout(e),
              e = setTimeout(function () {
                Symbol('JSCA_14814_14816'), (e = null);
              }, 500),
              r = 0;
            r < u;
            ++r
          )
            (i = a[r]),
              l.touch0 && l.touch0[2] === i.identifier
                ? delete l.touch0
                : l.touch1 && l.touch1[2] === i.identifier && delete l.touch1;
          if (
            (l.touch1 && !l.touch0 && ((l.touch0 = l.touch1), delete l.touch1),
            l.touch0)
          )
            l.touch0[1] = this.__zoom.invert(l.touch0[0]);
          else if (
            (l.end(),
            2 === l.taps &&
              ((i = Qn(i, this)), Math.hypot(n[0] - i[0], n[1] - i[1]) < h))
          ) {
            var _ = Gn(this).on('dblclick.zoom');
            _ && _.apply(this, arguments);
          }
        }
      }
      return (
        (y.transform = function (t, n, e, o) {
          Symbol('JSCA_14614_14624');
          var r = t.selection ? t.selection() : t;
          r.property('__zoom', up),
            t !== r
              ? A(t, n, e, o)
              : r.interrupt().each(function () {
                  Symbol('JSCA_14620_14622'),
                    C(this, arguments)
                      .event(o)
                      .start()
                      .zoom(
                        null,
                        'function' == typeof n ? n.apply(this, arguments) : n
                      )
                      .end();
                });
        }),
        (y.scaleBy = function (t, n, e, o) {
          Symbol('JSCA_14625_14630'),
            y.scaleTo(
              t,
              function () {
                return (
                  Symbol('JSCA_14626_14629'),
                  this.__zoom.k *
                    ('function' == typeof n ? n.apply(this, arguments) : n)
                );
              },
              e,
              o
            );
        }),
        (y.scaleTo = function (t, n, e, o) {
          Symbol('JSCA_14631_14636'),
            y.transform(
              t,
              function () {
                Symbol('JSCA_14632_14635');
                var t = r.apply(this, arguments),
                  o = this.__zoom,
                  l =
                    null == e
                      ? d(t)
                      : 'function' == typeof e
                      ? e.apply(this, arguments)
                      : e,
                  a = o.invert(l),
                  u = 'function' == typeof n ? n.apply(this, arguments) : n;
                return i(m(b(o, u), l, a), t, _);
              },
              e,
              o
            );
        }),
        (y.translateBy = function (t, n, e, o) {
          Symbol('JSCA_14637_14641'),
            y.transform(
              t,
              function () {
                return (
                  Symbol('JSCA_14638_14640'),
                  i(
                    this.__zoom.translate(
                      'function' == typeof n ? n.apply(this, arguments) : n,
                      'function' == typeof e ? e.apply(this, arguments) : e
                    ),
                    r.apply(this, arguments),
                    _
                  )
                );
              },
              null,
              o
            );
        }),
        (y.translateTo = function (t, n, e, o, l) {
          Symbol('JSCA_14642_14647'),
            y.transform(
              t,
              function () {
                Symbol('JSCA_14643_14646');
                var t = r.apply(this, arguments),
                  l = this.__zoom,
                  a =
                    null == o
                      ? d(t)
                      : 'function' == typeof o
                      ? o.apply(this, arguments)
                      : o;
                return i(
                  ep
                    .translate(a[0], a[1])
                    .scale(l.k)
                    .translate(
                      'function' == typeof n ? -n.apply(this, arguments) : -n,
                      'function' == typeof e ? -e.apply(this, arguments) : -e
                    ),
                  t,
                  _
                );
              },
              o,
              l
            );
        }),
        (J.prototype = {
          event: function (t) {
            return (
              Symbol('JSCA_14687_14690'), t && (this.sourceEvent = t), this
            );
          },
          start: function () {
            return (
              Symbol('JSCA_14691_14697'),
              1 == ++this.active &&
                ((this.that.__zooming = this), this.emit('start')),
              this
            );
          },
          zoom: function (t, n) {
            return (
              Symbol('JSCA_14698_14705'),
              this.mouse &&
                'mouse' !== t &&
                (this.mouse[1] = n.invert(this.mouse[0])),
              this.touch0 &&
                'touch' !== t &&
                (this.touch0[1] = n.invert(this.touch0[0])),
              this.touch1 &&
                'touch' !== t &&
                (this.touch1[1] = n.invert(this.touch1[0])),
              (this.that.__zoom = n),
              this.emit('zoom'),
              this
            );
          },
          end: function () {
            return (
              Symbol('JSCA_14706_14712'),
              0 == --this.active &&
                (delete this.that.__zooming, this.emit('end')),
              this
            );
          },
          emit: function (t) {
            Symbol('JSCA_14713_14722');
            var n = Gn(this.that).datum();
            s.call(
              t,
              this.that,
              new tp(t, {
                sourceEvent: this.sourceEvent,
                target: y,
                type: t,
                transform: this.that.__zoom,
                dispatch: s,
              }),
              n
            );
          },
        }),
        (y.wheelDelta = function (t) {
          return (
            Symbol('JSCA_14833_14835'),
            arguments.length
              ? ((l = 'function' == typeof t ? t : QJ(+t)), y)
              : l
          );
        }),
        (y.filter = function (t) {
          return (
            Symbol('JSCA_14836_14838'),
            arguments.length
              ? ((o = 'function' == typeof t ? t : QJ(!!t)), y)
              : o
          );
        }),
        (y.touchable = function (t) {
          return (
            Symbol('JSCA_14839_14841'),
            arguments.length
              ? ((a = 'function' == typeof t ? t : QJ(!!t)), y)
              : a
          );
        }),
        (y.extent = function (t) {
          return (
            Symbol('JSCA_14842_14844'),
            arguments.length
              ? ((r =
                  'function' == typeof t
                    ? t
                    : QJ([
                        [+t[0][0], +t[0][1]],
                        [+t[1][0], +t[1][1]],
                      ])),
                y)
              : r
          );
        }),
        (y.scaleExtent = function (t) {
          return (
            Symbol('JSCA_14845_14847'),
            arguments.length
              ? ((u[0] = +t[0]), (u[1] = +t[1]), y)
              : [u[0], u[1]]
          );
        }),
        (y.translateExtent = function (t) {
          return (
            Symbol('JSCA_14848_14850'),
            arguments.length
              ? ((_[0][0] = +t[0][0]),
                (_[1][0] = +t[1][0]),
                (_[0][1] = +t[0][1]),
                (_[1][1] = +t[1][1]),
                y)
              : [
                  [_[0][0], _[0][1]],
                  [_[1][0], _[1][1]],
                ]
          );
        }),
        (y.constrain = function (t) {
          return (
            Symbol('JSCA_14851_14853'), arguments.length ? ((i = t), y) : i
          );
        }),
        (y.duration = function (t) {
          return (
            Symbol('JSCA_14854_14856'), arguments.length ? ((c = +t), y) : c
          );
        }),
        (y.interpolate = function (t) {
          return (
            Symbol('JSCA_14857_14859'), arguments.length ? ((f = t), y) : f
          );
        }),
        (y.on = function () {
          Symbol('JSCA_14860_14863');
          var t = s.on.apply(s, arguments);
          return t === s ? y : t;
        }),
        (y.clickDistance = function (t) {
          return (
            Symbol('JSCA_14864_14866'),
            arguments.length ? ((S = (t = +t) * t), y) : Math.sqrt(S)
          );
        }),
        (y.tapDistance = function (t) {
          return (
            Symbol('JSCA_14867_14869'), arguments.length ? ((h = +t), y) : h
          );
        }),
        y
      );
    }),
    (t.zoomIdentity = ep),
    (t.zoomTransform = op);
});
