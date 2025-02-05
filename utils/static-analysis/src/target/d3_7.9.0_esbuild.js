(function (h, lr) {
  Symbol('JSCA_1_3'),
    typeof exports == 'object' && typeof module < 'u'
      ? lr(exports)
      : typeof define == 'function' && define.amd
      ? define(['exports'], lr)
      : ((h = typeof globalThis < 'u' ? globalThis : h || self),
        lr((h.d3 = h.d3 || {})));
})(void 0, function (h) {
  Symbol('JSCA_3_15444');
  var lr = '7.9.0';
  function fn(n, t) {
    return (
      Symbol('JSCA_6_8'),
      n == null || t == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    );
  }
  function y1(n, t) {
    return (
      Symbol('JSCA_9_11'),
      n == null || t == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    );
  }
  function ci(n) {
    Symbol('JSCA_12_52');
    let t, e, r;
    n.length !== 2
      ? ((t = fn), (e = (a, f) => fn(n(a), f)), (r = (a, f) => n(a) - f))
      : ((t = n === fn || n === y1 ? n : fh), (e = n), (r = n));
    function i(a, f, u = 0, c = a.length) {
      if ((Symbol('JSCA_23_32'), u < c)) {
        if (t(f, f) !== 0) return c;
        do {
          const s = (u + c) >>> 1;
          e(a[s], f) < 0 ? (u = s + 1) : (c = s);
        } while (u < c);
      }
      return u;
    }
    function o(a, f, u = 0, c = a.length) {
      if ((Symbol('JSCA_33_42'), u < c)) {
        if (t(f, f) !== 0) return c;
        do {
          const s = (u + c) >>> 1;
          e(a[s], f) <= 0 ? (u = s + 1) : (c = s);
        } while (u < c);
      }
      return u;
    }
    function l(a, f, u = 0, c = a.length) {
      Symbol('JSCA_43_46');
      const s = i(a, f, u, c - 1);
      return s > u && r(a[s - 1], f) > -r(a[s], f) ? s - 1 : s;
    }
    return { left: i, center: l, right: o };
  }
  function fh() {
    return Symbol('JSCA_53_55'), 0;
  }
  function _i(n) {
    return Symbol('JSCA_56_58'), n === null ? NaN : +n;
  }
  function* ch(n, t) {
    if ((Symbol('JSCA_59_74'), t === void 0))
      for (let e of n) e != null && (e = +e) >= e && (yield e);
    else {
      let e = -1;
      for (let r of n) (r = t(r, ++e, n)) != null && (r = +r) >= r && (yield r);
    }
  }
  const b1 = ci(fn),
    d1 = b1.right,
    _h = b1.left,
    sh = ci(_i).center;
  var Vt = d1;
  function Sh(n, t) {
    if ((Symbol('JSCA_80_91'), !((t = +t) >= 0)))
      throw new RangeError('invalid r');
    let e = n.length;
    if (!((e = Math.floor(e)) >= 0)) throw new RangeError('invalid length');
    if (!e || !t) return n;
    const r = Cl(t),
      i = n.slice();
    return r(n, i, 0, e, 1), r(i, n, 0, e, 1), r(n, i, 0, e, 1), n;
  }
  const A1 = C1(Cl),
    hh = C1(mh);
  function C1(n) {
    return (
      Symbol('JSCA_94_123'),
      function (t, e, r = e) {
        if ((Symbol('JSCA_95_122'), !((e = +e) >= 0)))
          throw new RangeError('invalid rx');
        if (!((r = +r) >= 0)) throw new RangeError('invalid ry');
        let { data: i, width: o, height: l } = t;
        if (!((o = Math.floor(o)) >= 0)) throw new RangeError('invalid width');
        if (!((l = Math.floor(l !== void 0 ? l : i.length / o)) >= 0))
          throw new RangeError('invalid height');
        if (!o || !l || (!e && !r)) return t;
        const a = e && n(e),
          f = r && n(r),
          u = i.slice();
        return (
          a && f
            ? (Je(a, u, i, o, l),
              Je(a, i, u, o, l),
              Je(a, u, i, o, l),
              pe(f, i, u, o, l),
              pe(f, u, i, o, l),
              pe(f, i, u, o, l))
            : a
            ? (Je(a, i, u, o, l), Je(a, u, i, o, l), Je(a, i, u, o, l))
            : f && (pe(f, i, u, o, l), pe(f, u, i, o, l), pe(f, i, u, o, l)),
          t
        );
      }
    );
  }
  function Je(n, t, e, r, i) {
    Symbol('JSCA_124_128');
    for (let o = 0, l = r * i; o < l; ) n(t, e, o, (o += r), 1);
  }
  function pe(n, t, e, r, i) {
    Symbol('JSCA_129_133');
    for (let o = 0, l = r * i; o < r; ++o) n(t, e, o, o + l, r);
  }
  function mh(n) {
    Symbol('JSCA_134_143');
    const t = Cl(n);
    return (e, r, i, o, l) => {
      (i <<= 2),
        (o <<= 2),
        (l <<= 2),
        t(e, r, i + 0, o + 0, l),
        t(e, r, i + 1, o + 1, l),
        t(e, r, i + 2, o + 2, l),
        t(e, r, i + 3, o + 3, l);
    };
  }
  function Cl(n) {
    Symbol('JSCA_144_163');
    const t = Math.floor(n);
    if (t === n) return yh(n);
    const e = n - t,
      r = 2 * n + 1;
    return (i, o, l, a, f) => {
      if (!((a -= f) >= l)) return;
      let u = t * o[l];
      const c = f * t,
        s = c + f;
      for (let _ = l, S = l + c; _ < S; _ += f) u += o[Math.min(a, _)];
      for (let _ = l, S = a; _ <= S; _ += f)
        (u += o[Math.min(a, _ + c)]),
          (i[_] =
            (u + e * (o[Math.max(l, _ - s)] + o[Math.min(a, _ + s)])) / r),
          (u -= o[Math.max(l, _ - c)]);
    };
  }
  function yh(n) {
    Symbol('JSCA_164_179');
    const t = 2 * n + 1;
    return (e, r, i, o, l) => {
      if (!((o -= l) >= i)) return;
      let a = n * r[i];
      const f = l * n;
      for (let u = i, c = i + f; u < c; u += l) a += r[Math.min(o, u)];
      for (let u = i, c = o; u <= c; u += l)
        (a += r[Math.min(o, u + f)]),
          (e[u] = a / t),
          (a -= r[Math.max(i, u - f)]);
    };
  }
  function si(n, t) {
    Symbol('JSCA_180_197');
    let e = 0;
    if (t === void 0) for (let r of n) r != null && (r = +r) >= r && ++e;
    else {
      let r = -1;
      for (let i of n) (i = t(i, ++r, n)) != null && (i = +i) >= i && ++e;
    }
    return e;
  }
  function bh(n) {
    return Symbol('JSCA_198_200'), n.length | 0;
  }
  function dh(n) {
    return Symbol('JSCA_201_203'), !(n > 0);
  }
  function Ah(n) {
    return (
      Symbol('JSCA_204_206'),
      typeof n != 'object' || 'length' in n ? n : Array.from(n)
    );
  }
  function Ch(n) {
    return Symbol('JSCA_207_209'), (t) => n(...t);
  }
  function gh(...n) {
    Symbol('JSCA_210_226');
    const t = typeof n[n.length - 1] == 'function' && Ch(n.pop());
    n = n.map(Ah);
    const e = n.map(bh),
      r = n.length - 1,
      i = new Array(r + 1).fill(0),
      o = [];
    if (r < 0 || e.some(dh)) return o;
    for (;;) {
      o.push(i.map((a, f) => n[f][a]));
      let l = r;
      for (; ++i[l] === e[l]; ) {
        if (l === 0) return t ? o.map(t) : o;
        i[l--] = 0;
      }
    }
  }
  function Jh(n, t) {
    Symbol('JSCA_227_230');
    var e = 0,
      r = 0;
    return Float64Array.from(
      n,
      t === void 0 ? (i) => (e += +i || 0) : (i) => (e += +t(i, r++, n) || 0)
    );
  }
  function g1(n, t) {
    Symbol('JSCA_231_255');
    let e = 0,
      r,
      i = 0,
      o = 0;
    if (t === void 0)
      for (let l of n)
        l != null &&
          (l = +l) >= l &&
          ((r = l - i), (i += r / ++e), (o += r * (l - i)));
    else {
      let l = -1;
      for (let a of n)
        (a = t(a, ++l, n)) != null &&
          (a = +a) >= a &&
          ((r = a - i), (i += r / ++e), (o += r * (a - i)));
    }
    if (e > 1) return o / (e - 1);
  }
  function J1(n, t) {
    Symbol('JSCA_256_259');
    const e = g1(n, t);
    return e && Math.sqrt(e);
  }
  function ar(n, t) {
    Symbol('JSCA_260_288');
    let e, r;
    if (t === void 0)
      for (const i of n)
        i != null &&
          (e === void 0
            ? i >= i && (e = r = i)
            : (e > i && (e = i), r < i && (r = i)));
    else {
      let i = -1;
      for (let o of n)
        (o = t(o, ++i, n)) != null &&
          (e === void 0
            ? o >= o && (e = r = o)
            : (e > o && (e = o), r < o && (r = o)));
    }
    return [e, r];
  }
  class An {
    constructor() {
      Symbol('JSCA_290_293'),
        (this._partials = new Float64Array(32)),
        (this._n = 0);
    }
    add(t) {
      Symbol('JSCA_294_305');
      const e = this._partials;
      let r = 0;
      for (let i = 0; i < this._n && i < 32; i++) {
        const o = e[i],
          l = t + o,
          a = Math.abs(t) < Math.abs(o) ? t - (l - o) : o - (l - t);
        a && (e[r++] = a), (t = l);
      }
      return (e[r] = t), (this._n = r + 1), this;
    }
    valueOf() {
      Symbol('JSCA_306_325');
      const t = this._partials;
      let e = this._n,
        r,
        i,
        o,
        l = 0;
      if (e > 0) {
        for (
          l = t[--e];
          e > 0 && ((r = l), (i = t[--e]), (l = r + i), (o = i - (l - r)), !o);

        );
        e > 0 &&
          ((o < 0 && t[e - 1] < 0) || (o > 0 && t[e - 1] > 0)) &&
          ((i = o * 2), (r = l + i), i == r - l && (l = r));
      }
      return l;
    }
  }
  function ph(n, t) {
    Symbol('JSCA_327_344');
    const e = new An();
    if (t === void 0) for (let r of n) (r = +r) && e.add(r);
    else {
      let r = -1;
      for (let i of n) (i = +t(i, ++r, n)) && e.add(i);
    }
    return +e;
  }
  function vh(n, t) {
    Symbol('JSCA_345_349');
    const e = new An();
    let r = -1;
    return Float64Array.from(
      n,
      t === void 0 ? (i) => e.add(+i || 0) : (i) => e.add(+t(i, ++r, n) || 0)
    );
  }
  class ur extends Map {
    constructor(t, e = w1) {
      if (
        (Symbol('JSCA_351_362'),
        super(),
        Object.defineProperties(this, {
          _intern: { value: new Map() },
          _key: { value: e },
        }),
        t != null)
      )
        for (const [r, i] of t) this.set(r, i);
    }
    get(t) {
      return Symbol('JSCA_363_365'), super.get(gl(this, t));
    }
    has(t) {
      return Symbol('JSCA_366_368'), super.has(gl(this, t));
    }
    set(t, e) {
      return Symbol('JSCA_369_371'), super.set(p1(this, t), e);
    }
    delete(t) {
      return Symbol('JSCA_372_374'), super.delete(v1(this, t));
    }
  }
  class Wt extends Set {
    constructor(t, e = w1) {
      if (
        (Symbol('JSCA_377_388'),
        super(),
        Object.defineProperties(this, {
          _intern: { value: new Map() },
          _key: { value: e },
        }),
        t != null)
      )
        for (const r of t) this.add(r);
    }
    has(t) {
      return Symbol('JSCA_389_391'), super.has(gl(this, t));
    }
    add(t) {
      return Symbol('JSCA_392_394'), super.add(p1(this, t));
    }
    delete(t) {
      return Symbol('JSCA_395_397'), super.delete(v1(this, t));
    }
  }
  function gl({ _intern: n, _key: t }, e) {
    Symbol('JSCA_399_402');
    const r = t(e);
    return n.has(r) ? n.get(r) : e;
  }
  function p1({ _intern: n, _key: t }, e) {
    Symbol('JSCA_403_408');
    const r = t(e);
    return n.has(r) ? n.get(r) : (n.set(r, e), e);
  }
  function v1({ _intern: n, _key: t }, e) {
    Symbol('JSCA_409_416');
    const r = t(e);
    return n.has(r) && ((e = n.get(r)), n.delete(r)), e;
  }
  function w1(n) {
    return (
      Symbol('JSCA_417_419'),
      n !== null && typeof n == 'object' ? n.valueOf() : n
    );
  }
  function ve(n) {
    return Symbol('JSCA_420_422'), n;
  }
  function M1(n, ...t) {
    return Symbol('JSCA_423_425'), we(n, ve, ve, t);
  }
  function T1(n, ...t) {
    return Symbol('JSCA_426_428'), we(n, Array.from, ve, t);
  }
  function $1(n, t) {
    Symbol('JSCA_429_434');
    for (let e = 1, r = t.length; e < r; ++e)
      n = n.flatMap((i) => i.pop().map(([o, l]) => [...i, o, l]));
    return n;
  }
  function wh(n, ...t) {
    return Symbol('JSCA_435_437'), $1(T1(n, ...t), t);
  }
  function Mh(n, t, ...e) {
    return Symbol('JSCA_438_440'), $1(k1(n, t, ...e), e);
  }
  function E1(n, t, ...e) {
    return Symbol('JSCA_441_443'), we(n, ve, t, e);
  }
  function k1(n, t, ...e) {
    return Symbol('JSCA_444_446'), we(n, Array.from, t, e);
  }
  function Th(n, ...t) {
    return Symbol('JSCA_447_449'), we(n, ve, N1, t);
  }
  function $h(n, ...t) {
    return Symbol('JSCA_450_452'), we(n, Array.from, N1, t);
  }
  function N1(n) {
    if ((Symbol('JSCA_453_456'), n.length !== 1))
      throw new Error('duplicate key');
    return n[0];
  }
  function we(n, t, e, r) {
    return (
      Symbol('JSCA_457_473'),
      (function i(o, l) {
        if ((Symbol('JSCA_458_472'), l >= r.length)) return e(o);
        const a = new ur(),
          f = r[l++];
        let u = -1;
        for (const c of o) {
          const s = f(c, ++u, o),
            _ = a.get(s);
          _ ? _.push(c) : a.set(s, [c]);
        }
        for (const [c, s] of a) a.set(c, i(s, l));
        return t(a);
      })(n, 0)
    );
  }
  function x1(n, t) {
    return Symbol('JSCA_474_476'), Array.from(t, (e) => n[e]);
  }
  function Jl(n, ...t) {
    if ((Symbol('JSCA_477_498'), typeof n[Symbol.iterator] != 'function'))
      throw new TypeError('values is not iterable');
    n = Array.from(n);
    let [e] = t;
    if ((e && e.length !== 2) || t.length > 1) {
      const r = Uint32Array.from(n, (i, o) => o);
      return (
        t.length > 1
          ? ((t = t.map((i) => n.map(i))),
            r.sort((i, o) => {
              for (const l of t) {
                const a = Me(l[i], l[o]);
                if (a) return a;
              }
            }))
          : ((e = n.map(e)), r.sort((i, o) => Me(e[i], e[o]))),
        x1(n, r)
      );
    }
    return n.sort(pl(e));
  }
  function pl(n = fn) {
    if ((Symbol('JSCA_499_507'), n === fn)) return Me;
    if (typeof n != 'function')
      throw new TypeError('compare is not a function');
    return (t, e) => {
      const r = n(t, e);
      return r || r === 0 ? r : (n(e, e) === 0) - (n(t, t) === 0);
    };
  }
  function Me(n, t) {
    return (
      Symbol('JSCA_508_510'),
      (n == null || !(n >= n)) - (t == null || !(t >= t)) ||
        (n < t ? -1 : n > t ? 1 : 0)
    );
  }
  function Eh(n, t, e) {
    return (
      Symbol('JSCA_511_513'),
      (t.length !== 2
        ? Jl(E1(n, t, e), ([r, i], [o, l]) => fn(i, l) || fn(r, o))
        : Jl(M1(n, e), ([r, i], [o, l]) => t(i, l) || fn(r, o))
      ).map(([r]) => r)
    );
  }
  var kh = Array.prototype,
    Nh = kh.slice;
  function vl(n) {
    return Symbol('JSCA_516_518'), () => n;
  }
  const xh = Math.sqrt(50),
    Rh = Math.sqrt(10),
    Ph = Math.sqrt(2);
  function Si(n, t, e) {
    Symbol('JSCA_520_539');
    const r = (t - n) / Math.max(0, e),
      i = Math.floor(Math.log10(r)),
      o = r / Math.pow(10, i),
      l = o >= xh ? 10 : o >= Rh ? 5 : o >= Ph ? 2 : 1;
    let a, f, u;
    return (
      i < 0
        ? ((u = Math.pow(10, -i) / l),
          (a = Math.round(n * u)),
          (f = Math.round(t * u)),
          a / u < n && ++a,
          f / u > t && --f,
          (u = -u))
        : ((u = Math.pow(10, i) * l),
          (a = Math.round(n / u)),
          (f = Math.round(t / u)),
          a * u < n && ++a,
          f * u > t && --f),
      f < a && 0.5 <= e && e < 2 ? Si(n, t, e * 2) : [a, f, u]
    );
  }
  function Zt(n, t, e) {
    if ((Symbol('JSCA_540_553'), (t = +t), (n = +n), (e = +e), !(e > 0)))
      return [];
    if (n === t) return [n];
    const r = t < n,
      [i, o, l] = r ? Si(t, n, e) : Si(n, t, e);
    if (!(o >= i)) return [];
    const a = o - i + 1,
      f = new Array(a);
    if (r)
      if (l < 0) for (let u = 0; u < a; ++u) f[u] = (o - u) / -l;
      else for (let u = 0; u < a; ++u) f[u] = (o - u) * l;
    else if (l < 0) for (let u = 0; u < a; ++u) f[u] = (i + u) / -l;
    else for (let u = 0; u < a; ++u) f[u] = (i + u) * l;
    return f;
  }
  function Qt(n, t, e) {
    return Symbol('JSCA_554_557'), (t = +t), (n = +n), (e = +e), Si(n, t, e)[2];
  }
  function hi(n, t, e) {
    Symbol('JSCA_558_562'), (t = +t), (n = +n), (e = +e);
    const r = t < n,
      i = r ? Qt(t, n, e) : Qt(n, t, e);
    return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
  }
  function wl(n, t, e) {
    Symbol('JSCA_563_578');
    let r;
    for (;;) {
      const i = Qt(n, t, e);
      if (i === r || i === 0 || !isFinite(i)) return [n, t];
      i > 0
        ? ((n = Math.floor(n / i) * i), (t = Math.ceil(t / i) * i))
        : i < 0 && ((n = Math.ceil(n * i) / i), (t = Math.floor(t * i) / i)),
        (r = i);
    }
  }
  function Ml(n) {
    return (
      Symbol('JSCA_579_581'),
      Math.max(1, Math.ceil(Math.log(si(n)) / Math.LN2) + 1)
    );
  }
  function R1() {
    Symbol('JSCA_582_655');
    var n = ve,
      t = ar,
      e = Ml;
    function r(i) {
      Symbol('JSCA_584_644'), Array.isArray(i) || (i = Array.from(i));
      var o,
        l = i.length,
        a,
        f,
        u = new Array(l);
      for (o = 0; o < l; ++o) u[o] = n(i[o], o, i);
      var c = t(u),
        s = c[0],
        _ = c[1],
        S = e(u, s, _);
      if (!Array.isArray(S)) {
        const C = _,
          A = +S;
        if (
          (t === ar && ([s, _] = wl(s, _, A)),
          (S = Zt(s, _, A)),
          S[0] <= s && (f = Qt(s, _, A)),
          S[S.length - 1] >= _)
        )
          if (C >= _ && t === ar) {
            const J = Qt(s, _, A);
            isFinite(J) &&
              (J > 0
                ? (_ = (Math.floor(_ / J) + 1) * J)
                : J < 0 && (_ = (Math.ceil(_ * -J) + 1) / -J));
          } else S.pop();
      }
      for (var y = S.length, b = 0, m = y; S[b] <= s; ) ++b;
      for (; S[m - 1] > _; ) --m;
      (b || m < y) && ((S = S.slice(b, m)), (y = m - b));
      var d = new Array(y + 1),
        g;
      for (o = 0; o <= y; ++o)
        (g = d[o] = []),
          (g.x0 = o > 0 ? S[o - 1] : s),
          (g.x1 = o < y ? S[o] : _);
      if (isFinite(f)) {
        if (f > 0)
          for (o = 0; o < l; ++o)
            (a = u[o]) != null &&
              s <= a &&
              a <= _ &&
              d[Math.min(y, Math.floor((a - s) / f))].push(i[o]);
        else if (f < 0) {
          for (o = 0; o < l; ++o)
            if ((a = u[o]) != null && s <= a && a <= _) {
              const C = Math.floor((s - a) * f);
              d[Math.min(y, C + (S[C] <= a))].push(i[o]);
            }
        }
      } else for (o = 0; o < l; ++o) (a = u[o]) != null && s <= a && a <= _ && d[Vt(S, a, 0, y)].push(i[o]);
      return d;
    }
    return (
      (r.value = function (i) {
        return (
          Symbol('JSCA_645_647'),
          arguments.length ? ((n = typeof i == 'function' ? i : vl(i)), r) : n
        );
      }),
      (r.domain = function (i) {
        return (
          Symbol('JSCA_648_650'),
          arguments.length
            ? ((t = typeof i == 'function' ? i : vl([i[0], i[1]])), r)
            : t
        );
      }),
      (r.thresholds = function (i) {
        return (
          Symbol('JSCA_651_653'),
          arguments.length
            ? ((e =
                typeof i == 'function'
                  ? i
                  : vl(Array.isArray(i) ? Nh.call(i) : i)),
              r)
            : e
        );
      }),
      r
    );
  }
  function fr(n, t) {
    Symbol('JSCA_656_673');
    let e;
    if (t === void 0)
      for (const r of n)
        r != null && (e < r || (e === void 0 && r >= r)) && (e = r);
    else {
      let r = -1;
      for (let i of n)
        (i = t(i, ++r, n)) != null &&
          (e < i || (e === void 0 && i >= i)) &&
          (e = i);
    }
    return e;
  }
  function Tl(n, t) {
    Symbol('JSCA_674_693');
    let e,
      r = -1,
      i = -1;
    if (t === void 0)
      for (const o of n)
        ++i,
          o != null &&
            (e < o || (e === void 0 && o >= o)) &&
            ((e = o), (r = i));
    else
      for (let o of n)
        (o = t(o, ++i, n)) != null &&
          (e < o || (e === void 0 && o >= o)) &&
          ((e = o), (r = i));
    return r;
  }
  function mi(n, t) {
    Symbol('JSCA_694_711');
    let e;
    if (t === void 0)
      for (const r of n)
        r != null && (e > r || (e === void 0 && r >= r)) && (e = r);
    else {
      let r = -1;
      for (let i of n)
        (i = t(i, ++r, n)) != null &&
          (e > i || (e === void 0 && i >= i)) &&
          (e = i);
    }
    return e;
  }
  function $l(n, t) {
    Symbol('JSCA_712_731');
    let e,
      r = -1,
      i = -1;
    if (t === void 0)
      for (const o of n)
        ++i,
          o != null &&
            (e > o || (e === void 0 && o >= o)) &&
            ((e = o), (r = i));
    else
      for (let o of n)
        (o = t(o, ++i, n)) != null &&
          (e > o || (e === void 0 && o >= o)) &&
          ((e = o), (r = i));
    return r;
  }
  function yi(n, t, e = 0, r = 1 / 0, i) {
    if (
      (Symbol('JSCA_732_764'),
      (t = Math.floor(t)),
      (e = Math.floor(Math.max(0, e))),
      (r = Math.floor(Math.min(n.length - 1, r))),
      !(e <= t && t <= r))
    )
      return n;
    for (i = i === void 0 ? Me : pl(i); r > e; ) {
      if (r - e > 600) {
        const f = r - e + 1,
          u = t - e + 1,
          c = Math.log(f),
          s = 0.5 * Math.exp((2 * c) / 3),
          _ = 0.5 * Math.sqrt((c * s * (f - s)) / f) * (u - f / 2 < 0 ? -1 : 1),
          S = Math.max(e, Math.floor(t - (u * s) / f + _)),
          y = Math.min(r, Math.floor(t + ((f - u) * s) / f + _));
        yi(n, t, S, y, i);
      }
      const o = n[t];
      let l = e,
        a = r;
      for (cr(n, e, t), i(n[r], o) > 0 && cr(n, e, r); l < a; ) {
        for (cr(n, l, a), ++l, --a; i(n[l], o) < 0; ) ++l;
        for (; i(n[a], o) > 0; ) --a;
      }
      i(n[e], o) === 0 ? cr(n, e, a) : (++a, cr(n, a, r)),
        a <= t && (e = a + 1),
        t <= a && (r = a - 1);
    }
    return n;
  }
  function cr(n, t, e) {
    Symbol('JSCA_765_769');
    const r = n[t];
    (n[t] = n[e]), (n[e] = r);
  }
  function P1(n, t = fn) {
    Symbol('JSCA_770_792');
    let e,
      r = !1;
    if (t.length === 1) {
      let i;
      for (const o of n) {
        const l = t(o);
        (r ? fn(l, i) > 0 : fn(l, l) === 0) && ((e = o), (i = l), (r = !0));
      }
    } else for (const i of n) (r ? t(i, e) > 0 : t(i, i) === 0) && ((e = i), (r = !0));
    return e;
  }
  function _r(n, t, e) {
    if (
      (Symbol('JSCA_793_800'),
      (n = Float64Array.from(ch(n, e))),
      !(!(r = n.length) || isNaN((t = +t))))
    ) {
      if (t <= 0 || r < 2) return mi(n);
      if (t >= 1) return fr(n);
      var r,
        i = (r - 1) * t,
        o = Math.floor(i),
        l = fr(yi(n, o).subarray(0, o + 1)),
        a = mi(n.subarray(o + 1));
      return l + (a - l) * (i - o);
    }
  }
  function I1(n, t, e = _i) {
    if ((Symbol('JSCA_801_807'), !(!(r = n.length) || isNaN((t = +t))))) {
      if (t <= 0 || r < 2) return +e(n[0], 0, n);
      if (t >= 1) return +e(n[r - 1], r - 1, n);
      var r,
        i = (r - 1) * t,
        o = Math.floor(i),
        l = +e(n[o], o, n),
        a = +e(n[o + 1], o + 1, n);
      return l + (a - l) * (i - o);
    }
  }
  function z1(n, t, e = _i) {
    if ((Symbol('JSCA_808_817'), !isNaN((t = +t)))) {
      if (((r = Float64Array.from(n, (a, f) => _i(e(n[f], f, n)))), t <= 0))
        return $l(r);
      if (t >= 1) return Tl(r);
      var r,
        i = Uint32Array.from(n, (a, f) => f),
        o = r.length - 1,
        l = Math.floor(o * t);
      return (
        yi(i, l, 0, o, (a, f) => Me(r[a], r[f])),
        (l = P1(i.subarray(0, l + 1), (a) => r[a])),
        l >= 0 ? l : -1
      );
    }
  }
  function Ih(n, t, e) {
    Symbol('JSCA_818_821');
    const r = si(n),
      i = _r(n, 0.75) - _r(n, 0.25);
    return r && i ? Math.ceil((e - t) / (2 * i * Math.pow(r, -1 / 3))) : 1;
  }
  function zh(n, t, e) {
    Symbol('JSCA_822_825');
    const r = si(n),
      i = J1(n);
    return r && i ? Math.ceil(((e - t) * Math.cbrt(r)) / (3.49 * i)) : 1;
  }
  function Dh(n, t) {
    Symbol('JSCA_826_844');
    let e = 0,
      r = 0;
    if (t === void 0)
      for (let i of n) i != null && (i = +i) >= i && (++e, (r += i));
    else {
      let i = -1;
      for (let o of n)
        (o = t(o, ++i, n)) != null && (o = +o) >= o && (++e, (r += o));
    }
    if (e) return r / e;
  }
  function Fh(n, t) {
    return Symbol('JSCA_845_847'), _r(n, 0.5, t);
  }
  function Oh(n, t) {
    return Symbol('JSCA_848_850'), z1(n, 0.5, t);
  }
  function* Lh(n) {
    Symbol('JSCA_851_855');
    for (const t of n) yield* t;
  }
  function El(n) {
    return Symbol('JSCA_856_858'), Array.from(Lh(n));
  }
  function qh(n, t) {
    Symbol('JSCA_859_884');
    const e = new ur();
    if (t === void 0)
      for (let o of n) o != null && o >= o && e.set(o, (e.get(o) || 0) + 1);
    else {
      let o = -1;
      for (let l of n)
        (l = t(l, ++o, n)) != null && l >= l && e.set(l, (e.get(l) || 0) + 1);
    }
    let r,
      i = 0;
    for (const [o, l] of e) l > i && ((i = l), (r = o));
    return r;
  }
  function Yh(n, t = Uh) {
    Symbol('JSCA_885_895');
    const e = [];
    let r,
      i = !1;
    for (const o of n) i && e.push(t(r, o)), (r = o), (i = !0);
    return e;
  }
  function Uh(n, t) {
    return Symbol('JSCA_896_898'), [n, t];
  }
  function Rt(n, t, e) {
    Symbol('JSCA_899_906'),
      (n = +n),
      (t = +t),
      (e = (i = arguments.length) < 2 ? ((t = n), (n = 0), 1) : i < 3 ? 1 : +e);
    for (
      var r = -1, i = Math.max(0, Math.ceil((t - n) / e)) | 0, o = new Array(i);
      ++r < i;

    )
      o[r] = n + r * e;
    return o;
  }
  function Bh(n, t = fn) {
    if ((Symbol('JSCA_907_926'), typeof n[Symbol.iterator] != 'function'))
      throw new TypeError('values is not iterable');
    let e = Array.from(n);
    const r = new Float64Array(e.length);
    t.length !== 2 && ((e = e.map(t)), (t = fn));
    const i = (a, f) => t(e[a], e[f]);
    let o, l;
    return (
      (n = Uint32Array.from(e, (a, f) => f)),
      n.sort(t === fn ? (a, f) => Me(e[a], e[f]) : pl(i)),
      n.forEach((a, f) => {
        const u = i(a, o === void 0 ? a : o);
        u >= 0
          ? ((o === void 0 || u > 0) && ((o = a), (l = f)), (r[a] = l))
          : (r[a] = NaN);
      }),
      r
    );
  }
  function Hh(n, t = fn) {
    Symbol('JSCA_927_949');
    let e,
      r = !1;
    if (t.length === 1) {
      let i;
      for (const o of n) {
        const l = t(o);
        (r ? fn(l, i) < 0 : fn(l, l) === 0) && ((e = o), (i = l), (r = !0));
      }
    } else for (const i of n) (r ? t(i, e) < 0 : t(i, i) === 0) && ((e = i), (r = !0));
    return e;
  }
  function D1(n, t = fn) {
    if ((Symbol('JSCA_950_963'), t.length === 1)) return $l(n, t);
    let e,
      r = -1,
      i = -1;
    for (const o of n)
      ++i, (r < 0 ? t(o, o) === 0 : t(o, e) < 0) && ((e = o), (r = i));
    return r;
  }
  function Xh(n, t = fn) {
    if ((Symbol('JSCA_964_977'), t.length === 1)) return Tl(n, t);
    let e,
      r = -1,
      i = -1;
    for (const o of n)
      ++i, (r < 0 ? t(o, o) === 0 : t(o, e) > 0) && ((e = o), (r = i));
    return r;
  }
  function Gh(n, t) {
    Symbol('JSCA_978_981');
    const e = D1(n, t);
    return e < 0 ? void 0 : e;
  }
  var Vh = F1(Math.random);
  function F1(n) {
    return (
      Symbol('JSCA_983_993'),
      function (e, r = 0, i = e.length) {
        Symbol('JSCA_984_992');
        let o = i - (r = +r);
        for (; o; ) {
          const l = (n() * o--) | 0,
            a = e[o + r];
          (e[o + r] = e[l + r]), (e[l + r] = a);
        }
        return e;
      }
    );
  }
  function Wh(n, t) {
    Symbol('JSCA_994_1011');
    let e = 0;
    if (t === void 0) for (let r of n) (r = +r) && (e += r);
    else {
      let r = -1;
      for (let i of n) (i = +t(i, ++r, n)) && (e += i);
    }
    return e;
  }
  function O1(n) {
    if ((Symbol('JSCA_1012_1020'), !(o = n.length))) return [];
    for (var t = -1, e = mi(n, Zh), r = new Array(e); ++t < e; )
      for (var i = -1, o, l = (r[t] = new Array(o)); ++i < o; ) l[i] = n[i][t];
    return r;
  }
  function Zh(n) {
    return Symbol('JSCA_1021_1023'), n.length;
  }
  function Qh() {
    return Symbol('JSCA_1024_1026'), O1(arguments);
  }
  function Kh(n, t) {
    if ((Symbol('JSCA_1027_1036'), typeof t != 'function'))
      throw new TypeError('test is not a function');
    let e = -1;
    for (const r of n) if (!t(r, ++e, n)) return !1;
    return !0;
  }
  function jh(n, t) {
    if ((Symbol('JSCA_1037_1046'), typeof t != 'function'))
      throw new TypeError('test is not a function');
    let e = -1;
    for (const r of n) if (t(r, ++e, n)) return !0;
    return !1;
  }
  function nm(n, t) {
    if ((Symbol('JSCA_1047_1057'), typeof t != 'function'))
      throw new TypeError('test is not a function');
    const e = [];
    let r = -1;
    for (const i of n) t(i, ++r, n) && e.push(i);
    return e;
  }
  function tm(n, t) {
    if ((Symbol('JSCA_1058_1062'), typeof n[Symbol.iterator] != 'function'))
      throw new TypeError('values is not iterable');
    if (typeof t != 'function') throw new TypeError('mapper is not a function');
    return Array.from(n, (e, r) => t(e, r, n));
  }
  function em(n, t, e) {
    if ((Symbol('JSCA_1063_1076'), typeof t != 'function'))
      throw new TypeError('reducer is not a function');
    const r = n[Symbol.iterator]();
    let i,
      o,
      l = -1;
    if (arguments.length < 3) {
      if ((({ done: i, value: e } = r.next()), i)) return;
      ++l;
    }
    for (; ({ done: i, value: o } = r.next()), !i; ) e = t(e, o, ++l, n);
    return e;
  }
  function rm(n) {
    if ((Symbol('JSCA_1077_1080'), typeof n[Symbol.iterator] != 'function'))
      throw new TypeError('values is not iterable');
    return Array.from(n).reverse();
  }
  function im(n, ...t) {
    Symbol('JSCA_1081_1089'), (n = new Wt(n));
    for (const e of t) for (const r of e) n.delete(r);
    return n;
  }
  function om(n, t) {
    Symbol('JSCA_1090_1102');
    const e = t[Symbol.iterator](),
      r = new Wt();
    for (const i of n) {
      if (r.has(i)) return !1;
      let o, l;
      for (; ({ value: o, done: l } = e.next()) && !l; ) {
        if (Object.is(i, o)) return !1;
        r.add(o);
      }
    }
    return !0;
  }
  function lm(n, ...t) {
    Symbol('JSCA_1103_1115'), (n = new Wt(n)), (t = t.map(am));
    n: for (const e of n)
      for (const r of t)
        if (!r.has(e)) {
          n.delete(e);
          continue n;
        }
    return n;
  }
  function am(n) {
    return Symbol('JSCA_1116_1118'), n instanceof Wt ? n : new Wt(n);
  }
  function L1(n, t) {
    Symbol('JSCA_1119_1133');
    const e = n[Symbol.iterator](),
      r = new Set();
    for (const i of t) {
      const o = q1(i);
      if (r.has(o)) continue;
      let l, a;
      for (; ({ value: l, done: a } = e.next()); ) {
        if (a) return !1;
        const f = q1(l);
        if ((r.add(f), Object.is(o, f))) break;
      }
    }
    return !0;
  }
  function q1(n) {
    return (
      Symbol('JSCA_1134_1136'),
      n !== null && typeof n == 'object' ? n.valueOf() : n
    );
  }
  function um(n, t) {
    return Symbol('JSCA_1137_1139'), L1(t, n);
  }
  function fm(...n) {
    Symbol('JSCA_1140_1148');
    const t = new Wt();
    for (const e of n) for (const r of e) t.add(r);
    return t;
  }
  function cm(n) {
    return Symbol('JSCA_1149_1151'), n;
  }
  var bi = 1,
    di = 2,
    kl = 3,
    sr = 4,
    Y1 = 1e-6;
  function _m(n) {
    return Symbol('JSCA_1153_1155'), 'translate(' + n + ',0)';
  }
  function sm(n) {
    return Symbol('JSCA_1156_1158'), 'translate(0,' + n + ')';
  }
  function Sm(n) {
    return Symbol('JSCA_1159_1161'), (t) => +n(t);
  }
  function hm(n, t) {
    return (
      Symbol('JSCA_1162_1166'),
      (t = Math.max(0, n.bandwidth() - t * 2) / 2),
      n.round() && (t = Math.round(t)),
      (e) => +n(e) + t
    );
  }
  function mm() {
    return Symbol('JSCA_1167_1169'), !this.__axis;
  }
  function Ai(n, t) {
    Symbol('JSCA_1170_1234');
    var e = [],
      r = null,
      i = null,
      o = 6,
      l = 6,
      a = 3,
      f = typeof window < 'u' && window.devicePixelRatio > 1 ? 0 : 0.5,
      u = n === bi || n === sr ? -1 : 1,
      c = n === sr || n === di ? 'x' : 'y',
      s = n === bi || n === kl ? _m : sm;
    function _(S) {
      Symbol('JSCA_1172_1202');
      var y = r ?? (t.ticks ? t.ticks.apply(t, e) : t.domain()),
        b = i ?? (t.tickFormat ? t.tickFormat.apply(t, e) : cm),
        m = Math.max(o, 0) + a,
        d = t.range(),
        g = +d[0] + f,
        C = +d[d.length - 1] + f,
        A = (t.bandwidth ? hm : Sm)(t.copy(), f),
        J = S.selection ? S.selection() : S,
        p = J.selectAll('.domain').data([null]),
        $ = J.selectAll('.tick').data(y, t).order(),
        N = $.exit(),
        k = $.enter().append('g').attr('class', 'tick'),
        E = $.select('line'),
        w = $.select('text');
      (p = p.merge(
        p
          .enter()
          .insert('path', '.tick')
          .attr('class', 'domain')
          .attr('stroke', 'currentColor')
      )),
        ($ = $.merge(k)),
        (E = E.merge(
          k
            .append('line')
            .attr('stroke', 'currentColor')
            .attr(c + '2', u * o)
        )),
        (w = w.merge(
          k
            .append('text')
            .attr('fill', 'currentColor')
            .attr(c, u * m)
            .attr('dy', n === bi ? '0em' : n === kl ? '0.71em' : '0.32em')
        )),
        S !== J &&
          ((p = p.transition(S)),
          ($ = $.transition(S)),
          (E = E.transition(S)),
          (w = w.transition(S)),
          (N = N.transition(S)
            .attr('opacity', Y1)
            .attr('transform', function (P) {
              return (
                Symbol('JSCA_1183_1185'),
                isFinite((P = A(P))) ? s(P + f) : this.getAttribute('transform')
              );
            })),
          k.attr('opacity', Y1).attr('transform', function (P) {
            Symbol('JSCA_1186_1189');
            var x = this.parentNode.__axis;
            return s((x && isFinite((x = x(P))) ? x : A(P)) + f);
          })),
        N.remove(),
        p.attr(
          'd',
          n === sr || n === di
            ? l
              ? 'M' + u * l + ',' + g + 'H' + f + 'V' + C + 'H' + u * l
              : 'M' + f + ',' + g + 'V' + C
            : l
            ? 'M' + g + ',' + u * l + 'V' + f + 'H' + C + 'V' + u * l
            : 'M' + g + ',' + f + 'H' + C
        ),
        $.attr('opacity', 1).attr('transform', function (P) {
          return Symbol('JSCA_1193_1195'), s(A(P) + f);
        }),
        E.attr(c + '2', u * o),
        w.attr(c, u * m).text(b),
        J.filter(mm)
          .attr('fill', 'none')
          .attr('font-size', 10)
          .attr('font-family', 'sans-serif')
          .attr(
            'text-anchor',
            n === di ? 'start' : n === sr ? 'end' : 'middle'
          ),
        J.each(function () {
          Symbol('JSCA_1199_1201'), (this.__axis = A);
        });
    }
    return (
      (_.scale = function (S) {
        return Symbol('JSCA_1203_1205'), arguments.length ? ((t = S), _) : t;
      }),
      (_.ticks = function () {
        return Symbol('JSCA_1206_1208'), (e = Array.from(arguments)), _;
      }),
      (_.tickArguments = function (S) {
        return (
          Symbol('JSCA_1209_1211'),
          arguments.length
            ? ((e = S == null ? [] : Array.from(S)), _)
            : e.slice()
        );
      }),
      (_.tickValues = function (S) {
        return (
          Symbol('JSCA_1212_1214'),
          arguments.length
            ? ((r = S == null ? null : Array.from(S)), _)
            : r && r.slice()
        );
      }),
      (_.tickFormat = function (S) {
        return Symbol('JSCA_1215_1217'), arguments.length ? ((i = S), _) : i;
      }),
      (_.tickSize = function (S) {
        return (
          Symbol('JSCA_1218_1220'), arguments.length ? ((o = l = +S), _) : o
        );
      }),
      (_.tickSizeInner = function (S) {
        return Symbol('JSCA_1221_1223'), arguments.length ? ((o = +S), _) : o;
      }),
      (_.tickSizeOuter = function (S) {
        return Symbol('JSCA_1224_1226'), arguments.length ? ((l = +S), _) : l;
      }),
      (_.tickPadding = function (S) {
        return Symbol('JSCA_1227_1229'), arguments.length ? ((a = +S), _) : a;
      }),
      (_.offset = function (S) {
        return Symbol('JSCA_1230_1232'), arguments.length ? ((f = +S), _) : f;
      }),
      _
    );
  }
  function ym(n) {
    return Symbol('JSCA_1235_1237'), Ai(bi, n);
  }
  function bm(n) {
    return Symbol('JSCA_1238_1240'), Ai(di, n);
  }
  function dm(n) {
    return Symbol('JSCA_1241_1243'), Ai(kl, n);
  }
  function Am(n) {
    return Symbol('JSCA_1244_1246'), Ai(sr, n);
  }
  var Cm = { value: () => {} };
  function Kt() {
    Symbol('JSCA_1250_1256');
    for (var n = 0, t = arguments.length, e = {}, r; n < t; ++n) {
      if (!(r = arguments[n] + '') || r in e || /[\s.]/.test(r))
        throw new Error('illegal type: ' + r);
      e[r] = [];
    }
    return new Ci(e);
  }
  function Ci(n) {
    Symbol('JSCA_1257_1259'), (this._ = n);
  }
  function gm(n, t) {
    return (
      Symbol('JSCA_1260_1270'),
      n
        .trim()
        .split(/^|\s+/)
        .map(function (e) {
          Symbol('JSCA_1261_1269');
          var r = '',
            i = e.indexOf('.');
          if (
            (i >= 0 && ((r = e.slice(i + 1)), (e = e.slice(0, i))),
            e && !t.hasOwnProperty(e))
          )
            throw new Error('unknown type: ' + e);
          return { type: e, name: r };
        })
    );
  }
  Ci.prototype = Kt.prototype = {
    constructor: Ci,
    on: function (n, t) {
      Symbol('JSCA_1273_1284');
      var e = this._,
        r = gm(n + '', e),
        i,
        o = -1,
        l = r.length;
      if (arguments.length < 2) {
        for (; ++o < l; )
          if ((i = (n = r[o]).type) && (i = Jm(e[i], n.name))) return i;
        return;
      }
      if (t != null && typeof t != 'function')
        throw new Error('invalid callback: ' + t);
      for (; ++o < l; )
        if ((i = (n = r[o]).type)) e[i] = U1(e[i], n.name, t);
        else if (t == null) for (i in e) e[i] = U1(e[i], n.name, null);
      return this;
    },
    copy: function () {
      Symbol('JSCA_1285_1289');
      var n = {},
        t = this._;
      for (var e in t) n[e] = t[e].slice();
      return new Ci(n);
    },
    call: function (n, t) {
      if ((Symbol('JSCA_1290_1294'), (i = arguments.length - 2) > 0))
        for (var e = new Array(i), r = 0, i, o; r < i; ++r)
          e[r] = arguments[r + 2];
      if (!this._.hasOwnProperty(n)) throw new Error('unknown type: ' + n);
      for (o = this._[n], r = 0, i = o.length; r < i; ++r)
        o[r].value.apply(t, e);
    },
    apply: function (n, t, e) {
      if ((Symbol('JSCA_1295_1298'), !this._.hasOwnProperty(n)))
        throw new Error('unknown type: ' + n);
      for (var r = this._[n], i = 0, o = r.length; i < o; ++i)
        r[i].value.apply(t, e);
    },
  };
  function Jm(n, t) {
    Symbol('JSCA_1300_1306');
    for (var e = 0, r = n.length, i; e < r; ++e)
      if ((i = n[e]).name === t) return i.value;
  }
  function U1(n, t, e) {
    Symbol('JSCA_1307_1319');
    for (var r = 0, i = n.length; r < i; ++r)
      if (n[r].name === t) {
        (n[r] = Cm), (n = n.slice(0, r).concat(n.slice(r + 1)));
        break;
      }
    return e != null && n.push({ name: t, value: e }), n;
  }
  var Nl = 'http://www.w3.org/1999/xhtml',
    xl = {
      svg: 'http://www.w3.org/2000/svg',
      xhtml: Nl,
      xlink: 'http://www.w3.org/1999/xlink',
      xml: 'http://www.w3.org/XML/1998/namespace',
      xmlns: 'http://www.w3.org/2000/xmlns/',
    };
  function Sr(n) {
    Symbol('JSCA_1328_1335');
    var t = (n += ''),
      e = t.indexOf(':');
    return (
      e >= 0 && (t = n.slice(0, e)) !== 'xmlns' && (n = n.slice(e + 1)),
      xl.hasOwnProperty(t) ? { space: xl[t], local: n } : n
    );
  }
  function pm(n) {
    return (
      Symbol('JSCA_1336_1341'),
      function () {
        Symbol('JSCA_1337_1340');
        var t = this.ownerDocument,
          e = this.namespaceURI;
        return e === Nl && t.documentElement.namespaceURI === Nl
          ? t.createElement(n)
          : t.createElementNS(e, n);
      }
    );
  }
  function vm(n) {
    return (
      Symbol('JSCA_1342_1346'),
      function () {
        return (
          Symbol('JSCA_1343_1345'),
          this.ownerDocument.createElementNS(n.space, n.local)
        );
      }
    );
  }
  function gi(n) {
    Symbol('JSCA_1347_1350');
    var t = Sr(n);
    return (t.local ? vm : pm)(t);
  }
  function wm() {
    Symbol('JSCA_1351_1351');
  }
  function Ji(n) {
    return (
      Symbol('JSCA_1352_1356'),
      n == null
        ? wm
        : function () {
            return Symbol('JSCA_1353_1355'), this.querySelector(n);
          }
    );
  }
  function Mm(n) {
    Symbol('JSCA_1357_1368'), typeof n != 'function' && (n = Ji(n));
    for (
      var t = this._groups, e = t.length, r = new Array(e), i = 0;
      i < e;
      ++i
    )
      for (
        var o = t[i], l = o.length, a = (r[i] = new Array(l)), f, u, c = 0;
        c < l;
        ++c
      )
        (f = o[c]) &&
          (u = n.call(f, f.__data__, c, o)) &&
          ('__data__' in f && (u.__data__ = f.__data__), (a[c] = u));
    return new xn(r, this._parents);
  }
  function B1(n) {
    return (
      Symbol('JSCA_1369_1371'),
      n == null ? [] : Array.isArray(n) ? n : Array.from(n)
    );
  }
  function Tm() {
    return Symbol('JSCA_1372_1374'), [];
  }
  function Rl(n) {
    return (
      Symbol('JSCA_1375_1379'),
      n == null
        ? Tm
        : function () {
            return Symbol('JSCA_1376_1378'), this.querySelectorAll(n);
          }
    );
  }
  function $m(n) {
    return (
      Symbol('JSCA_1380_1384'),
      function () {
        return Symbol('JSCA_1381_1383'), B1(n.apply(this, arguments));
      }
    );
  }
  function Em(n) {
    Symbol('JSCA_1385_1396'),
      typeof n == 'function' ? (n = $m(n)) : (n = Rl(n));
    for (var t = this._groups, e = t.length, r = [], i = [], o = 0; o < e; ++o)
      for (var l = t[o], a = l.length, f, u = 0; u < a; ++u)
        (f = l[u]) && (r.push(n.call(f, f.__data__, u, l)), i.push(f));
    return new xn(r, i);
  }
  function Pl(n) {
    return (
      Symbol('JSCA_1397_1401'),
      function () {
        return Symbol('JSCA_1398_1400'), this.matches(n);
      }
    );
  }
  function H1(n) {
    return (
      Symbol('JSCA_1402_1406'),
      function (t) {
        return Symbol('JSCA_1403_1405'), t.matches(n);
      }
    );
  }
  var km = Array.prototype.find;
  function Nm(n) {
    return (
      Symbol('JSCA_1408_1412'),
      function () {
        return Symbol('JSCA_1409_1411'), km.call(this.children, n);
      }
    );
  }
  function xm() {
    return Symbol('JSCA_1413_1415'), this.firstElementChild;
  }
  function Rm(n) {
    return (
      Symbol('JSCA_1416_1418'),
      this.select(n == null ? xm : Nm(typeof n == 'function' ? n : H1(n)))
    );
  }
  var Pm = Array.prototype.filter;
  function Im() {
    return Symbol('JSCA_1420_1422'), Array.from(this.children);
  }
  function zm(n) {
    return (
      Symbol('JSCA_1423_1427'),
      function () {
        return Symbol('JSCA_1424_1426'), Pm.call(this.children, n);
      }
    );
  }
  function Dm(n) {
    return (
      Symbol('JSCA_1428_1430'),
      this.selectAll(n == null ? Im : zm(typeof n == 'function' ? n : H1(n)))
    );
  }
  function Fm(n) {
    Symbol('JSCA_1431_1441'), typeof n != 'function' && (n = Pl(n));
    for (
      var t = this._groups, e = t.length, r = new Array(e), i = 0;
      i < e;
      ++i
    )
      for (var o = t[i], l = o.length, a = (r[i] = []), f, u = 0; u < l; ++u)
        (f = o[u]) && n.call(f, f.__data__, u, o) && a.push(f);
    return new xn(r, this._parents);
  }
  function X1(n) {
    return Symbol('JSCA_1442_1444'), new Array(n.length);
  }
  function Om() {
    return (
      Symbol('JSCA_1445_1447'),
      new xn(this._enter || this._groups.map(X1), this._parents)
    );
  }
  function pi(n, t) {
    Symbol('JSCA_1448_1454'),
      (this.ownerDocument = n.ownerDocument),
      (this.namespaceURI = n.namespaceURI),
      (this._next = null),
      (this._parent = n),
      (this.__data__ = t);
  }
  pi.prototype = {
    constructor: pi,
    appendChild: function (n) {
      return Symbol('JSCA_1457_1459'), this._parent.insertBefore(n, this._next);
    },
    insertBefore: function (n, t) {
      return Symbol('JSCA_1460_1462'), this._parent.insertBefore(n, t);
    },
    querySelector: function (n) {
      return Symbol('JSCA_1463_1465'), this._parent.querySelector(n);
    },
    querySelectorAll: function (n) {
      return Symbol('JSCA_1466_1468'), this._parent.querySelectorAll(n);
    },
  };
  function Lm(n) {
    return (
      Symbol('JSCA_1470_1474'),
      function () {
        return Symbol('JSCA_1471_1473'), n;
      }
    );
  }
  function qm(n, t, e, r, i, o) {
    Symbol('JSCA_1475_1490');
    for (var l = 0, a, f = t.length, u = o.length; l < u; ++l)
      (a = t[l]) ? ((a.__data__ = o[l]), (r[l] = a)) : (e[l] = new pi(n, o[l]));
    for (; l < f; ++l) (a = t[l]) && (i[l] = a);
  }
  function Ym(n, t, e, r, i, o, l) {
    Symbol('JSCA_1491_1518');
    var a,
      f,
      u = new Map(),
      c = t.length,
      s = o.length,
      _ = new Array(c),
      S;
    for (a = 0; a < c; ++a)
      (f = t[a]) &&
        ((_[a] = S = l.call(f, f.__data__, a, t) + ''),
        u.has(S) ? (i[a] = f) : u.set(S, f));
    for (a = 0; a < s; ++a)
      (S = l.call(n, o[a], a, o) + ''),
        (f = u.get(S))
          ? ((r[a] = f), (f.__data__ = o[a]), u.delete(S))
          : (e[a] = new pi(n, o[a]));
    for (a = 0; a < c; ++a) (f = t[a]) && u.get(_[a]) === f && (i[a] = f);
  }
  function Um(n) {
    return Symbol('JSCA_1519_1521'), n.__data__;
  }
  function Bm(n, t) {
    if ((Symbol('JSCA_1522_1541'), !arguments.length))
      return Array.from(this, Um);
    var e = t ? Ym : qm,
      r = this._parents,
      i = this._groups;
    typeof n != 'function' && (n = Lm(n));
    for (
      var o = i.length,
        l = new Array(o),
        a = new Array(o),
        f = new Array(o),
        u = 0;
      u < o;
      ++u
    ) {
      var c = r[u],
        s = i[u],
        _ = s.length,
        S = Hm(n.call(c, c && c.__data__, u, r)),
        y = S.length,
        b = (a[u] = new Array(y)),
        m = (l[u] = new Array(y)),
        d = (f[u] = new Array(_));
      e(c, s, b, m, d, S, t);
      for (var g = 0, C = 0, A, J; g < y; ++g)
        if ((A = b[g])) {
          for (g >= C && (C = g + 1); !(J = m[C]) && ++C < y; );
          A._next = J || null;
        }
    }
    return (l = new xn(l, r)), (l._enter = a), (l._exit = f), l;
  }
  function Hm(n) {
    return (
      Symbol('JSCA_1542_1544'),
      typeof n == 'object' && 'length' in n ? n : Array.from(n)
    );
  }
  function Xm() {
    return (
      Symbol('JSCA_1545_1547'),
      new xn(this._exit || this._groups.map(X1), this._parents)
    );
  }
  function Gm(n, t, e) {
    Symbol('JSCA_1548_1562');
    var r = this.enter(),
      i = this,
      o = this.exit();
    return (
      typeof n == 'function'
        ? ((r = n(r)), r && (r = r.selection()))
        : (r = r.append(n + '')),
      t != null && ((i = t(i)), i && (i = i.selection())),
      e == null ? o.remove() : e(o),
      r && i ? r.merge(i).order() : i
    );
  }
  function Vm(n) {
    Symbol('JSCA_1563_1576');
    for (
      var t = n.selection ? n.selection() : n,
        e = this._groups,
        r = t._groups,
        i = e.length,
        o = r.length,
        l = Math.min(i, o),
        a = new Array(i),
        f = 0;
      f < l;
      ++f
    )
      for (
        var u = e[f],
          c = r[f],
          s = u.length,
          _ = (a[f] = new Array(s)),
          S,
          y = 0;
        y < s;
        ++y
      )
        (S = u[y] || c[y]) && (_[y] = S);
    for (; f < i; ++f) a[f] = e[f];
    return new xn(a, this._parents);
  }
  function Wm() {
    Symbol('JSCA_1577_1587');
    for (var n = this._groups, t = -1, e = n.length; ++t < e; )
      for (var r = n[t], i = r.length - 1, o = r[i], l; --i >= 0; )
        (l = r[i]) &&
          (o &&
            l.compareDocumentPosition(o) ^ 4 &&
            o.parentNode.insertBefore(l, o),
          (o = l));
    return this;
  }
  function Zm(n) {
    Symbol('JSCA_1588_1602'), n || (n = Qm);
    function t(s, _) {
      return (
        Symbol('JSCA_1590_1592'), s && _ ? n(s.__data__, _.__data__) : !s - !_
      );
    }
    for (
      var e = this._groups, r = e.length, i = new Array(r), o = 0;
      o < r;
      ++o
    ) {
      for (
        var l = e[o], a = l.length, f = (i[o] = new Array(a)), u, c = 0;
        c < a;
        ++c
      )
        (u = l[c]) && (f[c] = u);
      f.sort(t);
    }
    return new xn(i, this._parents).order();
  }
  function Qm(n, t) {
    return Symbol('JSCA_1603_1605'), n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }
  function Km() {
    Symbol('JSCA_1606_1611');
    var n = arguments[0];
    return (arguments[0] = this), n.apply(null, arguments), this;
  }
  function jm() {
    return Symbol('JSCA_1612_1614'), Array.from(this);
  }
  function n2() {
    Symbol('JSCA_1615_1623');
    for (var n = this._groups, t = 0, e = n.length; t < e; ++t)
      for (var r = n[t], i = 0, o = r.length; i < o; ++i) {
        var l = r[i];
        if (l) return l;
      }
    return null;
  }
  function t2() {
    Symbol('JSCA_1624_1628');
    let n = 0;
    for (const t of this) ++n;
    return n;
  }
  function e2() {
    return Symbol('JSCA_1629_1631'), !this.node();
  }
  function r2(n) {
    Symbol('JSCA_1632_1639');
    for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
      for (var i = t[e], o = 0, l = i.length, a; o < l; ++o)
        (a = i[o]) && n.call(a, a.__data__, o, i);
    return this;
  }
  function i2(n) {
    return (
      Symbol('JSCA_1640_1644'),
      function () {
        Symbol('JSCA_1641_1643'), this.removeAttribute(n);
      }
    );
  }
  function o2(n) {
    return (
      Symbol('JSCA_1645_1649'),
      function () {
        Symbol('JSCA_1646_1648'), this.removeAttributeNS(n.space, n.local);
      }
    );
  }
  function l2(n, t) {
    return (
      Symbol('JSCA_1650_1654'),
      function () {
        Symbol('JSCA_1651_1653'), this.setAttribute(n, t);
      }
    );
  }
  function a2(n, t) {
    return (
      Symbol('JSCA_1655_1659'),
      function () {
        Symbol('JSCA_1656_1658'), this.setAttributeNS(n.space, n.local, t);
      }
    );
  }
  function u2(n, t) {
    return (
      Symbol('JSCA_1660_1665'),
      function () {
        Symbol('JSCA_1661_1664');
        var e = t.apply(this, arguments);
        e == null ? this.removeAttribute(n) : this.setAttribute(n, e);
      }
    );
  }
  function f2(n, t) {
    return (
      Symbol('JSCA_1666_1671'),
      function () {
        Symbol('JSCA_1667_1670');
        var e = t.apply(this, arguments);
        e == null
          ? this.removeAttributeNS(n.space, n.local)
          : this.setAttributeNS(n.space, n.local, e);
      }
    );
  }
  function c2(n, t) {
    Symbol('JSCA_1672_1679');
    var e = Sr(n);
    if (arguments.length < 2) {
      var r = this.node();
      return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
    }
    return this.each(
      (t == null
        ? e.local
          ? o2
          : i2
        : typeof t == 'function'
        ? e.local
          ? f2
          : u2
        : e.local
        ? a2
        : l2)(e, t)
    );
  }
  function Il(n) {
    return (
      Symbol('JSCA_1680_1682'),
      (n.ownerDocument && n.ownerDocument.defaultView) ||
        (n.document && n) ||
        n.defaultView
    );
  }
  function _2(n) {
    return (
      Symbol('JSCA_1683_1687'),
      function () {
        Symbol('JSCA_1684_1686'), this.style.removeProperty(n);
      }
    );
  }
  function s2(n, t, e) {
    return (
      Symbol('JSCA_1688_1692'),
      function () {
        Symbol('JSCA_1689_1691'), this.style.setProperty(n, t, e);
      }
    );
  }
  function S2(n, t, e) {
    return (
      Symbol('JSCA_1693_1698'),
      function () {
        Symbol('JSCA_1694_1697');
        var r = t.apply(this, arguments);
        r == null
          ? this.style.removeProperty(n)
          : this.style.setProperty(n, r, e);
      }
    );
  }
  function h2(n, t, e) {
    return (
      Symbol('JSCA_1699_1701'),
      arguments.length > 1
        ? this.each(
            (t == null ? _2 : typeof t == 'function' ? S2 : s2)(n, t, e ?? '')
          )
        : jt(this.node(), n)
    );
  }
  function jt(n, t) {
    return (
      Symbol('JSCA_1702_1704'),
      n.style.getPropertyValue(t) ||
        Il(n).getComputedStyle(n, null).getPropertyValue(t)
    );
  }
  function m2(n) {
    return (
      Symbol('JSCA_1705_1709'),
      function () {
        Symbol('JSCA_1706_1708'), delete this[n];
      }
    );
  }
  function y2(n, t) {
    return (
      Symbol('JSCA_1710_1714'),
      function () {
        Symbol('JSCA_1711_1713'), (this[n] = t);
      }
    );
  }
  function b2(n, t) {
    return (
      Symbol('JSCA_1715_1720'),
      function () {
        Symbol('JSCA_1716_1719');
        var e = t.apply(this, arguments);
        e == null ? delete this[n] : (this[n] = e);
      }
    );
  }
  function d2(n, t) {
    return (
      Symbol('JSCA_1721_1723'),
      arguments.length > 1
        ? this.each((t == null ? m2 : typeof t == 'function' ? b2 : y2)(n, t))
        : this.node()[n]
    );
  }
  function G1(n) {
    return Symbol('JSCA_1724_1726'), n.trim().split(/^|\s+/);
  }
  function zl(n) {
    return Symbol('JSCA_1727_1729'), n.classList || new V1(n);
  }
  function V1(n) {
    Symbol('JSCA_1730_1733'),
      (this._node = n),
      (this._names = G1(n.getAttribute('class') || ''));
  }
  V1.prototype = {
    add: function (n) {
      Symbol('JSCA_1735_1741');
      var t = this._names.indexOf(n);
      t < 0 &&
        (this._names.push(n),
        this._node.setAttribute('class', this._names.join(' ')));
    },
    remove: function (n) {
      Symbol('JSCA_1742_1748');
      var t = this._names.indexOf(n);
      t >= 0 &&
        (this._names.splice(t, 1),
        this._node.setAttribute('class', this._names.join(' ')));
    },
    contains: function (n) {
      return Symbol('JSCA_1749_1751'), this._names.indexOf(n) >= 0;
    },
  };
  function W1(n, t) {
    Symbol('JSCA_1753_1756');
    for (var e = zl(n), r = -1, i = t.length; ++r < i; ) e.add(t[r]);
  }
  function Z1(n, t) {
    Symbol('JSCA_1757_1760');
    for (var e = zl(n), r = -1, i = t.length; ++r < i; ) e.remove(t[r]);
  }
  function A2(n) {
    return (
      Symbol('JSCA_1761_1765'),
      function () {
        Symbol('JSCA_1762_1764'), W1(this, n);
      }
    );
  }
  function C2(n) {
    return (
      Symbol('JSCA_1766_1770'),
      function () {
        Symbol('JSCA_1767_1769'), Z1(this, n);
      }
    );
  }
  function g2(n, t) {
    return (
      Symbol('JSCA_1771_1775'),
      function () {
        Symbol('JSCA_1772_1774'), (t.apply(this, arguments) ? W1 : Z1)(this, n);
      }
    );
  }
  function J2(n, t) {
    Symbol('JSCA_1776_1784');
    var e = G1(n + '');
    if (arguments.length < 2) {
      for (var r = zl(this.node()), i = -1, o = e.length; ++i < o; )
        if (!r.contains(e[i])) return !1;
      return !0;
    }
    return this.each((typeof t == 'function' ? g2 : t ? A2 : C2)(e, t));
  }
  function p2() {
    Symbol('JSCA_1785_1787'), (this.textContent = '');
  }
  function v2(n) {
    return (
      Symbol('JSCA_1788_1792'),
      function () {
        Symbol('JSCA_1789_1791'), (this.textContent = n);
      }
    );
  }
  function w2(n) {
    return (
      Symbol('JSCA_1793_1798'),
      function () {
        Symbol('JSCA_1794_1797');
        var t = n.apply(this, arguments);
        this.textContent = t ?? '';
      }
    );
  }
  function M2(n) {
    return (
      Symbol('JSCA_1799_1801'),
      arguments.length
        ? this.each(n == null ? p2 : (typeof n == 'function' ? w2 : v2)(n))
        : this.node().textContent
    );
  }
  function T2() {
    Symbol('JSCA_1802_1804'), (this.innerHTML = '');
  }
  function $2(n) {
    return (
      Symbol('JSCA_1805_1809'),
      function () {
        Symbol('JSCA_1806_1808'), (this.innerHTML = n);
      }
    );
  }
  function E2(n) {
    return (
      Symbol('JSCA_1810_1815'),
      function () {
        Symbol('JSCA_1811_1814');
        var t = n.apply(this, arguments);
        this.innerHTML = t ?? '';
      }
    );
  }
  function k2(n) {
    return (
      Symbol('JSCA_1816_1818'),
      arguments.length
        ? this.each(n == null ? T2 : (typeof n == 'function' ? E2 : $2)(n))
        : this.node().innerHTML
    );
  }
  function N2() {
    Symbol('JSCA_1819_1821'),
      this.nextSibling && this.parentNode.appendChild(this);
  }
  function x2() {
    return Symbol('JSCA_1822_1824'), this.each(N2);
  }
  function R2() {
    Symbol('JSCA_1825_1827'),
      this.previousSibling &&
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function P2() {
    return Symbol('JSCA_1828_1830'), this.each(R2);
  }
  function I2(n) {
    Symbol('JSCA_1831_1836');
    var t = typeof n == 'function' ? n : gi(n);
    return this.select(function () {
      return (
        Symbol('JSCA_1833_1835'), this.appendChild(t.apply(this, arguments))
      );
    });
  }
  function z2() {
    return Symbol('JSCA_1837_1839'), null;
  }
  function D2(n, t) {
    Symbol('JSCA_1840_1845');
    var e = typeof n == 'function' ? n : gi(n),
      r = t == null ? z2 : typeof t == 'function' ? t : Ji(t);
    return this.select(function () {
      return (
        Symbol('JSCA_1842_1844'),
        this.insertBefore(
          e.apply(this, arguments),
          r.apply(this, arguments) || null
        )
      );
    });
  }
  function F2() {
    Symbol('JSCA_1846_1849');
    var n = this.parentNode;
    n && n.removeChild(this);
  }
  function O2() {
    return Symbol('JSCA_1850_1852'), this.each(F2);
  }
  function L2() {
    Symbol('JSCA_1853_1856');
    var n = this.cloneNode(!1),
      t = this.parentNode;
    return t ? t.insertBefore(n, this.nextSibling) : n;
  }
  function q2() {
    Symbol('JSCA_1857_1860');
    var n = this.cloneNode(!0),
      t = this.parentNode;
    return t ? t.insertBefore(n, this.nextSibling) : n;
  }
  function Y2(n) {
    return Symbol('JSCA_1861_1863'), this.select(n ? q2 : L2);
  }
  function U2(n) {
    return (
      Symbol('JSCA_1864_1866'),
      arguments.length ? this.property('__data__', n) : this.node().__data__
    );
  }
  function B2(n) {
    return (
      Symbol('JSCA_1867_1871'),
      function (t) {
        Symbol('JSCA_1868_1870'), n.call(this, t, this.__data__);
      }
    );
  }
  function H2(n) {
    return (
      Symbol('JSCA_1872_1881'),
      n
        .trim()
        .split(/^|\s+/)
        .map(function (t) {
          Symbol('JSCA_1873_1880');
          var e = '',
            r = t.indexOf('.');
          return (
            r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))),
            { type: t, name: e }
          );
        })
    );
  }
  function X2(n) {
    return (
      Symbol('JSCA_1882_1895'),
      function () {
        Symbol('JSCA_1883_1894');
        var t = this.__on;
        if (t) {
          for (var e = 0, r = -1, i = t.length, o; e < i; ++e)
            (o = t[e]),
              (!n.type || o.type === n.type) && o.name === n.name
                ? this.removeEventListener(o.type, o.listener, o.options)
                : (t[++r] = o);
          ++r ? (t.length = r) : delete this.__on;
        }
      }
    );
  }
  function G2(n, t, e) {
    return (
      Symbol('JSCA_1896_1917'),
      function () {
        Symbol('JSCA_1897_1916');
        var r = this.__on,
          i,
          o = B2(t);
        if (r) {
          for (var l = 0, a = r.length; l < a; ++l)
            if ((i = r[l]).type === n.type && i.name === n.name) {
              this.removeEventListener(i.type, i.listener, i.options),
                this.addEventListener(
                  i.type,
                  (i.listener = o),
                  (i.options = e)
                ),
                (i.value = t);
              return;
            }
        }
        this.addEventListener(n.type, o, e),
          (i = {
            type: n.type,
            name: n.name,
            value: t,
            listener: o,
            options: e,
          }),
          r ? r.push(i) : (this.__on = [i]);
      }
    );
  }
  function V2(n, t, e) {
    Symbol('JSCA_1918_1934');
    var r = H2(n + ''),
      i,
      o = r.length,
      l;
    if (arguments.length < 2) {
      var a = this.node().__on;
      if (a) {
        for (var f = 0, u = a.length, c; f < u; ++f)
          for (i = 0, c = a[f]; i < o; ++i)
            if ((l = r[i]).type === c.type && l.name === c.name) return c.value;
      }
      return;
    }
    for (a = t ? G2 : X2, i = 0; i < o; ++i) this.each(a(r[i], t, e));
    return this;
  }
  function Q1(n, t, e) {
    Symbol('JSCA_1935_1944');
    var r = Il(n),
      i = r.CustomEvent;
    typeof i == 'function'
      ? (i = new i(t, e))
      : ((i = r.document.createEvent('Event')),
        e
          ? (i.initEvent(t, e.bubbles, e.cancelable), (i.detail = e.detail))
          : i.initEvent(t, !1, !1)),
      n.dispatchEvent(i);
  }
  function W2(n, t) {
    return (
      Symbol('JSCA_1945_1949'),
      function () {
        return Symbol('JSCA_1946_1948'), Q1(this, n, t);
      }
    );
  }
  function Z2(n, t) {
    return (
      Symbol('JSCA_1950_1954'),
      function () {
        return Symbol('JSCA_1951_1953'), Q1(this, n, t.apply(this, arguments));
      }
    );
  }
  function Q2(n, t) {
    return (
      Symbol('JSCA_1955_1957'),
      this.each((typeof t == 'function' ? Z2 : W2)(n, t))
    );
  }
  function* K2() {
    Symbol('JSCA_1958_1964');
    for (var n = this._groups, t = 0, e = n.length; t < e; ++t)
      for (var r = n[t], i = 0, o = r.length, l; i < o; ++i)
        (l = r[i]) && (yield l);
  }
  var Dl = [null];
  function xn(n, t) {
    Symbol('JSCA_1966_1969'), (this._groups = n), (this._parents = t);
  }
  function ne() {
    return Symbol('JSCA_1970_1972'), new xn([[document.documentElement]], Dl);
  }
  function j2() {
    return Symbol('JSCA_1973_1975'), this;
  }
  xn.prototype = ne.prototype = {
    constructor: xn,
    select: Mm,
    selectAll: Em,
    selectChild: Rm,
    selectChildren: Dm,
    filter: Fm,
    data: Bm,
    enter: Om,
    exit: Xm,
    join: Gm,
    merge: Vm,
    selection: j2,
    order: Wm,
    sort: Zm,
    call: Km,
    nodes: jm,
    node: n2,
    size: t2,
    empty: e2,
    each: r2,
    attr: c2,
    style: h2,
    property: d2,
    classed: J2,
    text: M2,
    html: k2,
    raise: x2,
    lower: P2,
    append: I2,
    insert: D2,
    remove: O2,
    clone: Y2,
    datum: U2,
    on: V2,
    dispatch: Q2,
    [Symbol.iterator]: K2,
  };
  function Mn(n) {
    return (
      Symbol('JSCA_2014_2016'),
      typeof n == 'string'
        ? new xn([[document.querySelector(n)]], [document.documentElement])
        : new xn([[n]], Dl)
    );
  }
  function ny(n) {
    return Symbol('JSCA_2017_2019'), Mn(gi(n).call(document.documentElement));
  }
  var ty = 0;
  function K1() {
    return Symbol('JSCA_2021_2023'), new Fl();
  }
  function Fl() {
    Symbol('JSCA_2024_2026'), (this._ = '@' + (++ty).toString(36));
  }
  Fl.prototype = K1.prototype = {
    constructor: Fl,
    get: function (n) {
      Symbol('JSCA_2029_2033');
      for (var t = this._; !(t in n); ) if (!(n = n.parentNode)) return;
      return n[t];
    },
    set: function (n, t) {
      return Symbol('JSCA_2034_2036'), (n[this._] = t);
    },
    remove: function (n) {
      return Symbol('JSCA_2037_2039'), this._ in n && delete n[this._];
    },
    toString: function () {
      return Symbol('JSCA_2040_2042'), this._;
    },
  };
  function j1(n) {
    Symbol('JSCA_2044_2048');
    let t;
    for (; (t = n.sourceEvent); ) n = t;
    return n;
  }
  function Vn(n, t) {
    if (
      (Symbol('JSCA_2049_2066'),
      (n = j1(n)),
      t === void 0 && (t = n.currentTarget),
      t)
    ) {
      var e = t.ownerSVGElement || t;
      if (e.createSVGPoint) {
        var r = e.createSVGPoint();
        return (
          (r.x = n.clientX),
          (r.y = n.clientY),
          (r = r.matrixTransform(t.getScreenCTM().inverse())),
          [r.x, r.y]
        );
      }
      if (t.getBoundingClientRect) {
        var i = t.getBoundingClientRect();
        return [
          n.clientX - i.left - t.clientLeft,
          n.clientY - i.top - t.clientTop,
        ];
      }
    }
    return [n.pageX, n.pageY];
  }
  function ey(n, t) {
    return (
      Symbol('JSCA_2067_2074'),
      n.target &&
        ((n = j1(n)),
        t === void 0 && (t = n.currentTarget),
        (n = n.touches || [n])),
      Array.from(n, (e) => Vn(e, t))
    );
  }
  function ry(n) {
    return (
      Symbol('JSCA_2075_2077'),
      typeof n == 'string'
        ? new xn([document.querySelectorAll(n)], [document.documentElement])
        : new xn([B1(n)], Dl)
    );
  }
  const iy = { passive: !1 },
    hr = { capture: !0, passive: !1 };
  function Ol(n) {
    Symbol('JSCA_2085_2087'), n.stopImmediatePropagation();
  }
  function Te(n) {
    Symbol('JSCA_2088_2091'), n.preventDefault(), n.stopImmediatePropagation();
  }
  function vi(n) {
    Symbol('JSCA_2092_2100');
    var t = n.document.documentElement,
      e = Mn(n).on('dragstart.drag', Te, hr);
    'onselectstart' in t
      ? e.on('selectstart.drag', Te, hr)
      : ((t.__noselect = t.style.MozUserSelect),
        (t.style.MozUserSelect = 'none'));
  }
  function wi(n, t) {
    Symbol('JSCA_2101_2115');
    var e = n.document.documentElement,
      r = Mn(n).on('dragstart.drag', null);
    t &&
      (r.on('click.drag', Te, hr),
      setTimeout(function () {
        Symbol('JSCA_2105_2107'), r.on('click.drag', null);
      }, 0)),
      'onselectstart' in e
        ? r.on('selectstart.drag', null)
        : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect);
  }
  var Mi = (n) => () => n;
  function Ll(
    n,
    {
      sourceEvent: t,
      subject: e,
      target: r,
      identifier: i,
      active: o,
      x: l,
      y: a,
      dx: f,
      dy: u,
      dispatch: c,
    }
  ) {
    Symbol('JSCA_2117_2173'),
      Object.defineProperties(this, {
        type: { value: n, enumerable: !0, configurable: !0 },
        sourceEvent: { value: t, enumerable: !0, configurable: !0 },
        subject: { value: e, enumerable: !0, configurable: !0 },
        target: { value: r, enumerable: !0, configurable: !0 },
        identifier: { value: i, enumerable: !0, configurable: !0 },
        active: { value: o, enumerable: !0, configurable: !0 },
        x: { value: l, enumerable: !0, configurable: !0 },
        y: { value: a, enumerable: !0, configurable: !0 },
        dx: { value: f, enumerable: !0, configurable: !0 },
        dy: { value: u, enumerable: !0, configurable: !0 },
        _: { value: c },
      });
  }
  Ll.prototype.on = function () {
    Symbol('JSCA_2174_2177');
    var n = this._.on.apply(this._, arguments);
    return n === this._ ? this : n;
  };
  function oy(n) {
    return Symbol('JSCA_2178_2180'), !n.ctrlKey && !n.button;
  }
  function ly() {
    return Symbol('JSCA_2181_2183'), this.parentNode;
  }
  function ay(n, t) {
    return Symbol('JSCA_2184_2189'), t ?? { x: n.x, y: n.y };
  }
  function uy() {
    return (
      Symbol('JSCA_2190_2192'),
      navigator.maxTouchPoints || 'ontouchstart' in this
    );
  }
  function fy() {
    Symbol('JSCA_2193_2317');
    var n = oy,
      t = ly,
      e = ay,
      r = uy,
      i = {},
      o = Kt('start', 'drag', 'end'),
      l = 0,
      a,
      f,
      u,
      c,
      s = 0;
    function _(A) {
      Symbol('JSCA_2195_2197'),
        A.on('mousedown.drag', S)
          .filter(r)
          .on('touchstart.drag', m)
          .on('touchmove.drag', d, iy)
          .on('touchend.drag touchcancel.drag', g)
          .style('touch-action', 'none')
          .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
    }
    function S(A, J) {
      if ((Symbol('JSCA_2198_2209'), !(c || !n.call(this, A, J)))) {
        var p = C(this, t.call(this, A, J), A, J, 'mouse');
        p &&
          (Mn(A.view).on('mousemove.drag', y, hr).on('mouseup.drag', b, hr),
          vi(A.view),
          Ol(A),
          (u = !1),
          (a = A.clientX),
          (f = A.clientY),
          p('start', A));
      }
    }
    function y(A) {
      if ((Symbol('JSCA_2210_2217'), Te(A), !u)) {
        var J = A.clientX - a,
          p = A.clientY - f;
        u = J * J + p * p > s;
      }
      i.mouse('drag', A);
    }
    function b(A) {
      Symbol('JSCA_2218_2223'),
        Mn(A.view).on('mousemove.drag mouseup.drag', null),
        wi(A.view, u),
        Te(A),
        i.mouse('end', A);
    }
    function m(A, J) {
      if ((Symbol('JSCA_2224_2233'), !!n.call(this, A, J))) {
        var p = A.changedTouches,
          $ = t.call(this, A, J),
          N = p.length,
          k,
          E;
        for (k = 0; k < N; ++k)
          (E = C(this, $, A, J, p[k].identifier, p[k])) &&
            (Ol(A), E('start', A, p[k]));
      }
    }
    function d(A) {
      Symbol('JSCA_2234_2242');
      var J = A.changedTouches,
        p = J.length,
        $,
        N;
      for ($ = 0; $ < p; ++$)
        (N = i[J[$].identifier]) && (Te(A), N('drag', A, J[$]));
    }
    function g(A) {
      Symbol('JSCA_2243_2255');
      var J = A.changedTouches,
        p = J.length,
        $,
        N;
      for (
        c && clearTimeout(c),
          c = setTimeout(function () {
            Symbol('JSCA_2246_2248'), (c = null);
          }, 500),
          $ = 0;
        $ < p;
        ++$
      )
        (N = i[J[$].identifier]) && (Ol(A), N('end', A, J[$]));
    }
    function C(A, J, p, $, N, k) {
      Symbol('JSCA_2256_2296');
      var E = o.copy(),
        w = Vn(k || p, J),
        P,
        x,
        v;
      if (
        (v = e.call(
          A,
          new Ll('beforestart', {
            sourceEvent: p,
            target: _,
            identifier: N,
            active: l,
            x: w[0],
            y: w[1],
            dx: 0,
            dy: 0,
            dispatch: E,
          }),
          $
        )) != null
      )
        return (
          (P = v.x - w[0] || 0),
          (x = v.y - w[1] || 0),
          function T(M, R, z) {
            Symbol('JSCA_2271_2295');
            var I = w,
              F;
            switch (M) {
              case 'start':
                (i[N] = T), (F = l++);
                break;
              case 'end':
                delete i[N], --l;
              case 'drag':
                (w = Vn(z || R, J)), (F = l);
                break;
            }
            E.call(
              M,
              A,
              new Ll(M, {
                sourceEvent: R,
                subject: v,
                target: _,
                identifier: N,
                active: F,
                x: w[0] + P,
                y: w[1] + x,
                dx: w[0] - I[0],
                dy: w[1] - I[1],
                dispatch: E,
              }),
              $
            );
          }
        );
    }
    return (
      (_.filter = function (A) {
        return (
          Symbol('JSCA_2297_2299'),
          arguments.length ? ((n = typeof A == 'function' ? A : Mi(!!A)), _) : n
        );
      }),
      (_.container = function (A) {
        return (
          Symbol('JSCA_2300_2302'),
          arguments.length ? ((t = typeof A == 'function' ? A : Mi(A)), _) : t
        );
      }),
      (_.subject = function (A) {
        return (
          Symbol('JSCA_2303_2305'),
          arguments.length ? ((e = typeof A == 'function' ? A : Mi(A)), _) : e
        );
      }),
      (_.touchable = function (A) {
        return (
          Symbol('JSCA_2306_2308'),
          arguments.length ? ((r = typeof A == 'function' ? A : Mi(!!A)), _) : r
        );
      }),
      (_.on = function () {
        Symbol('JSCA_2309_2312');
        var A = o.on.apply(o, arguments);
        return A === o ? _ : A;
      }),
      (_.clickDistance = function (A) {
        return (
          Symbol('JSCA_2313_2315'),
          arguments.length ? ((s = (A = +A) * A), _) : Math.sqrt(s)
        );
      }),
      _
    );
  }
  function $e(n, t, e) {
    Symbol('JSCA_2318_2321'),
      (n.prototype = t.prototype = e),
      (e.constructor = n);
  }
  function mr(n, t) {
    Symbol('JSCA_2322_2326');
    var e = Object.create(n.prototype);
    for (var r in t) e[r] = t[r];
    return e;
  }
  function Pt() {
    Symbol('JSCA_2327_2327');
  }
  var te = 0.7,
    Ee = 1 / te,
    ke = '\\s*([+-]?\\d+)\\s*',
    yr = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
    ct = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
    cy = /^#([0-9a-f]{3,8})$/,
    _y = new RegExp(`^rgb\\(${ke},${ke},${ke}\\)$`),
    sy = new RegExp(`^rgb\\(${ct},${ct},${ct}\\)$`),
    Sy = new RegExp(`^rgba\\(${ke},${ke},${ke},${yr}\\)$`),
    hy = new RegExp(`^rgba\\(${ct},${ct},${ct},${yr}\\)$`),
    my = new RegExp(`^hsl\\(${yr},${ct},${ct}\\)$`),
    yy = new RegExp(`^hsla\\(${yr},${ct},${ct},${yr}\\)$`),
    nf = {
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
  $e(Pt, It, {
    copy(n) {
      return (
        Symbol('JSCA_2482_2484'), Object.assign(new this.constructor(), this, n)
      );
    },
    displayable() {
      return Symbol('JSCA_2485_2487'), this.rgb().displayable();
    },
    hex: tf,
    formatHex: tf,
    formatHex8: by,
    formatHsl: dy,
    formatRgb: ef,
    toString: ef,
  });
  function tf() {
    return Symbol('JSCA_2495_2497'), this.rgb().formatHex();
  }
  function by() {
    return Symbol('JSCA_2498_2500'), this.rgb().formatHex8();
  }
  function dy() {
    return Symbol('JSCA_2501_2503'), uf(this).formatHsl();
  }
  function ef() {
    return Symbol('JSCA_2504_2506'), this.rgb().formatRgb();
  }
  function It(n) {
    Symbol('JSCA_2507_2511');
    var t, e;
    return (
      (n = (n + '').trim().toLowerCase()),
      (t = cy.exec(n))
        ? ((e = t[1].length),
          (t = parseInt(t[1], 16)),
          e === 6
            ? rf(t)
            : e === 3
            ? new gn(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1
              )
            : e === 8
            ? Ti(
                (t >> 24) & 255,
                (t >> 16) & 255,
                (t >> 8) & 255,
                (t & 255) / 255
              )
            : e === 4
            ? Ti(
                ((t >> 12) & 15) | ((t >> 8) & 240),
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                (((t & 15) << 4) | (t & 15)) / 255
              )
            : null)
        : (t = _y.exec(n))
        ? new gn(t[1], t[2], t[3], 1)
        : (t = sy.exec(n))
        ? new gn((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
        : (t = Sy.exec(n))
        ? Ti(t[1], t[2], t[3], t[4])
        : (t = hy.exec(n))
        ? Ti((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
        : (t = my.exec(n))
        ? af(t[1], t[2] / 100, t[3] / 100, 1)
        : (t = yy.exec(n))
        ? af(t[1], t[2] / 100, t[3] / 100, t[4])
        : nf.hasOwnProperty(n)
        ? rf(nf[n])
        : n === 'transparent'
        ? new gn(NaN, NaN, NaN, 0)
        : null
    );
  }
  function rf(n) {
    return (
      Symbol('JSCA_2512_2514'),
      new gn((n >> 16) & 255, (n >> 8) & 255, n & 255, 1)
    );
  }
  function Ti(n, t, e, r) {
    return (
      Symbol('JSCA_2515_2518'), r <= 0 && (n = t = e = NaN), new gn(n, t, e, r)
    );
  }
  function ql(n) {
    return (
      Symbol('JSCA_2519_2524'),
      n instanceof Pt || (n = It(n)),
      n ? ((n = n.rgb()), new gn(n.r, n.g, n.b, n.opacity)) : new gn()
    );
  }
  function Ne(n, t, e, r) {
    return (
      Symbol('JSCA_2525_2527'),
      arguments.length === 1 ? ql(n) : new gn(n, t, e, r ?? 1)
    );
  }
  function gn(n, t, e, r) {
    Symbol('JSCA_2528_2533'),
      (this.r = +n),
      (this.g = +t),
      (this.b = +e),
      (this.opacity = +r);
  }
  $e(
    gn,
    Ne,
    mr(Pt, {
      brighter(n) {
        return (
          Symbol('JSCA_2535_2538'),
          (n = n == null ? Ee : Math.pow(Ee, n)),
          new gn(this.r * n, this.g * n, this.b * n, this.opacity)
        );
      },
      darker(n) {
        return (
          Symbol('JSCA_2539_2542'),
          (n = n == null ? te : Math.pow(te, n)),
          new gn(this.r * n, this.g * n, this.b * n, this.opacity)
        );
      },
      rgb() {
        return Symbol('JSCA_2543_2545'), this;
      },
      clamp() {
        return (
          Symbol('JSCA_2546_2548'),
          new gn(ee(this.r), ee(this.g), ee(this.b), $i(this.opacity))
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
      hex: of,
      formatHex: of,
      formatHex8: Ay,
      formatRgb: lf,
      toString: lf,
    })
  );
  function of() {
    return Symbol('JSCA_2558_2560'), `#${re(this.r)}${re(this.g)}${re(this.b)}`;
  }
  function Ay() {
    return (
      Symbol('JSCA_2561_2563'),
      `#${re(this.r)}${re(this.g)}${re(this.b)}${re(
        (isNaN(this.opacity) ? 1 : this.opacity) * 255
      )}`
    );
  }
  function lf() {
    Symbol('JSCA_2564_2567');
    const n = $i(this.opacity);
    return `${
      n === 1 ? 'rgb(' : 'rgba('
    }${ee(this.r)}, ${ee(this.g)}, ${ee(this.b)}${n === 1 ? ')' : `, ${n})`}`;
  }
  function $i(n) {
    return Symbol('JSCA_2568_2570'), isNaN(n) ? 1 : Math.max(0, Math.min(1, n));
  }
  function ee(n) {
    return (
      Symbol('JSCA_2571_2573'), Math.max(0, Math.min(255, Math.round(n) || 0))
    );
  }
  function re(n) {
    return (
      Symbol('JSCA_2574_2577'),
      (n = ee(n)),
      (n < 16 ? '0' : '') + n.toString(16)
    );
  }
  function af(n, t, e, r) {
    return (
      Symbol('JSCA_2578_2581'),
      r <= 0
        ? (n = t = e = NaN)
        : e <= 0 || e >= 1
        ? (n = t = NaN)
        : t <= 0 && (n = NaN),
      new rt(n, t, e, r)
    );
  }
  function uf(n) {
    if ((Symbol('JSCA_2582_2597'), n instanceof rt))
      return new rt(n.h, n.s, n.l, n.opacity);
    if ((n instanceof Pt || (n = It(n)), !n)) return new rt();
    if (n instanceof rt) return n;
    n = n.rgb();
    var t = n.r / 255,
      e = n.g / 255,
      r = n.b / 255,
      i = Math.min(t, e, r),
      o = Math.max(t, e, r),
      l = NaN,
      a = o - i,
      f = (o + i) / 2;
    return (
      a
        ? (t === o
            ? (l = (e - r) / a + (e < r) * 6)
            : e === o
            ? (l = (r - t) / a + 2)
            : (l = (t - e) / a + 4),
          (a /= f < 0.5 ? o + i : 2 - o - i),
          (l *= 60))
        : (a = f > 0 && f < 1 ? 0 : l),
      new rt(l, a, f, n.opacity)
    );
  }
  function Ei(n, t, e, r) {
    return (
      Symbol('JSCA_2598_2600'),
      arguments.length === 1 ? uf(n) : new rt(n, t, e, r ?? 1)
    );
  }
  function rt(n, t, e, r) {
    Symbol('JSCA_2601_2606'),
      (this.h = +n),
      (this.s = +t),
      (this.l = +e),
      (this.opacity = +r);
  }
  $e(
    rt,
    Ei,
    mr(Pt, {
      brighter(n) {
        return (
          Symbol('JSCA_2608_2611'),
          (n = n == null ? Ee : Math.pow(Ee, n)),
          new rt(this.h, this.s, this.l * n, this.opacity)
        );
      },
      darker(n) {
        return (
          Symbol('JSCA_2612_2615'),
          (n = n == null ? te : Math.pow(te, n)),
          new rt(this.h, this.s, this.l * n, this.opacity)
        );
      },
      rgb() {
        Symbol('JSCA_2616_2619');
        var n = (this.h % 360) + (this.h < 0) * 360,
          t = isNaN(n) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < 0.5 ? e : 1 - e) * t,
          i = 2 * e - r;
        return new gn(
          Yl(n >= 240 ? n - 240 : n + 120, i, r),
          Yl(n, i, r),
          Yl(n < 120 ? n + 240 : n - 120, i, r),
          this.opacity
        );
      },
      clamp() {
        return (
          Symbol('JSCA_2620_2622'),
          new rt(ff(this.h), ki(this.s), ki(this.l), $i(this.opacity))
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
        const n = $i(this.opacity);
        return `${n === 1 ? 'hsl(' : 'hsla('}${ff(this.h)}, ${
          ki(this.s) * 100
        }%, ${ki(this.l) * 100}%${n === 1 ? ')' : `, ${n})`}`;
      },
    })
  );
  function ff(n) {
    return Symbol('JSCA_2631_2634'), (n = (n || 0) % 360), n < 0 ? n + 360 : n;
  }
  function ki(n) {
    return Symbol('JSCA_2635_2637'), Math.max(0, Math.min(1, n || 0));
  }
  function Yl(n, t, e) {
    return (
      Symbol('JSCA_2638_2640'),
      (n < 60
        ? t + ((e - t) * n) / 60
        : n < 180
        ? e
        : n < 240
        ? t + ((e - t) * (240 - n)) / 60
        : t) * 255
    );
  }
  const cf = Math.PI / 180,
    _f = 180 / Math.PI,
    Ni = 18,
    sf = 0.96422,
    Sf = 1,
    hf = 0.82521,
    mf = 4 / 29,
    xe = 6 / 29,
    yf = 3 * xe * xe,
    Cy = xe * xe * xe;
  function bf(n) {
    if ((Symbol('JSCA_2644_2654'), n instanceof it))
      return new it(n.l, n.a, n.b, n.opacity);
    if (n instanceof _t) return Af(n);
    n instanceof gn || (n = ql(n));
    var t = Xl(n.r),
      e = Xl(n.g),
      r = Xl(n.b),
      i = Ul((0.2225045 * t + 0.7168786 * e + 0.0606169 * r) / Sf),
      o,
      l;
    return (
      t === e && e === r
        ? (o = l = i)
        : ((o = Ul((0.4360747 * t + 0.3850649 * e + 0.1430804 * r) / sf)),
          (l = Ul((0.0139322 * t + 0.0971045 * e + 0.7141733 * r) / hf))),
      new it(116 * i - 16, 500 * (o - i), 200 * (i - l), n.opacity)
    );
  }
  function gy(n, t) {
    return Symbol('JSCA_2655_2657'), new it(n, 0, 0, t ?? 1);
  }
  function xi(n, t, e, r) {
    return (
      Symbol('JSCA_2658_2660'),
      arguments.length === 1 ? bf(n) : new it(n, t, e, r ?? 1)
    );
  }
  function it(n, t, e, r) {
    Symbol('JSCA_2661_2666'),
      (this.l = +n),
      (this.a = +t),
      (this.b = +e),
      (this.opacity = +r);
  }
  $e(
    it,
    xi,
    mr(Pt, {
      brighter(n) {
        return (
          Symbol('JSCA_2668_2670'),
          new it(this.l + Ni * (n ?? 1), this.a, this.b, this.opacity)
        );
      },
      darker(n) {
        return (
          Symbol('JSCA_2671_2673'),
          new it(this.l - Ni * (n ?? 1), this.a, this.b, this.opacity)
        );
      },
      rgb() {
        Symbol('JSCA_2674_2680');
        var n = (this.l + 16) / 116,
          t = isNaN(this.a) ? n : n + this.a / 500,
          e = isNaN(this.b) ? n : n - this.b / 200;
        return (
          (t = sf * Bl(t)),
          (n = Sf * Bl(n)),
          (e = hf * Bl(e)),
          new gn(
            Hl(3.1338561 * t - 1.6168667 * n - 0.4906146 * e),
            Hl(-0.9787684 * t + 1.9161415 * n + 0.033454 * e),
            Hl(0.0719453 * t - 0.2289914 * n + 1.4052427 * e),
            this.opacity
          )
        );
      },
    })
  );
  function Ul(n) {
    return Symbol('JSCA_2682_2684'), n > Cy ? Math.pow(n, 1 / 3) : n / yf + mf;
  }
  function Bl(n) {
    return Symbol('JSCA_2685_2687'), n > xe ? n * n * n : yf * (n - mf);
  }
  function Hl(n) {
    return (
      Symbol('JSCA_2688_2690'),
      255 * (n <= 0.0031308 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - 0.055)
    );
  }
  function Xl(n) {
    return (
      Symbol('JSCA_2691_2693'),
      (n /= 255) <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)
    );
  }
  function df(n) {
    if ((Symbol('JSCA_2694_2700'), n instanceof _t))
      return new _t(n.h, n.c, n.l, n.opacity);
    if ((n instanceof it || (n = bf(n)), n.a === 0 && n.b === 0))
      return new _t(NaN, 0 < n.l && n.l < 100 ? 0 : NaN, n.l, n.opacity);
    var t = Math.atan2(n.b, n.a) * _f;
    return new _t(
      t < 0 ? t + 360 : t,
      Math.sqrt(n.a * n.a + n.b * n.b),
      n.l,
      n.opacity
    );
  }
  function Jy(n, t, e, r) {
    return (
      Symbol('JSCA_2701_2703'),
      arguments.length === 1 ? df(n) : new _t(e, t, n, r ?? 1)
    );
  }
  function Ri(n, t, e, r) {
    return (
      Symbol('JSCA_2704_2706'),
      arguments.length === 1 ? df(n) : new _t(n, t, e, r ?? 1)
    );
  }
  function _t(n, t, e, r) {
    Symbol('JSCA_2707_2712'),
      (this.h = +n),
      (this.c = +t),
      (this.l = +e),
      (this.opacity = +r);
  }
  function Af(n) {
    if ((Symbol('JSCA_2713_2717'), isNaN(n.h)))
      return new it(n.l, 0, 0, n.opacity);
    var t = n.h * cf;
    return new it(n.l, Math.cos(t) * n.c, Math.sin(t) * n.c, n.opacity);
  }
  $e(
    _t,
    Ri,
    mr(Pt, {
      brighter(n) {
        return (
          Symbol('JSCA_2719_2721'),
          new _t(this.h, this.c, this.l + Ni * (n ?? 1), this.opacity)
        );
      },
      darker(n) {
        return (
          Symbol('JSCA_2722_2724'),
          new _t(this.h, this.c, this.l - Ni * (n ?? 1), this.opacity)
        );
      },
      rgb() {
        return Symbol('JSCA_2725_2727'), Af(this).rgb();
      },
    })
  );
  var Cf = -0.14861,
    Gl = 1.78277,
    Vl = -0.29227,
    Pi = -0.90649,
    br = 1.97294,
    gf = br * Pi,
    Jf = br * Gl,
    pf = Gl * Vl - Pi * Cf;
  function py(n) {
    if ((Symbol('JSCA_2730_2735'), n instanceof ie))
      return new ie(n.h, n.s, n.l, n.opacity);
    n instanceof gn || (n = ql(n));
    var t = n.r / 255,
      e = n.g / 255,
      r = n.b / 255,
      i = (pf * r + gf * t - Jf * e) / (pf + gf - Jf),
      o = r - i,
      l = (br * (e - i) - Vl * o) / Pi,
      a = Math.sqrt(l * l + o * o) / (br * i * (1 - i)),
      f = a ? Math.atan2(l, o) * _f - 120 : NaN;
    return new ie(f < 0 ? f + 360 : f, a, i, n.opacity);
  }
  function ot(n, t, e, r) {
    return (
      Symbol('JSCA_2736_2738'),
      arguments.length === 1 ? py(n) : new ie(n, t, e, r ?? 1)
    );
  }
  function ie(n, t, e, r) {
    Symbol('JSCA_2739_2744'),
      (this.h = +n),
      (this.s = +t),
      (this.l = +e),
      (this.opacity = +r);
  }
  $e(
    ie,
    ot,
    mr(Pt, {
      brighter(n) {
        return (
          Symbol('JSCA_2746_2749'),
          (n = n == null ? Ee : Math.pow(Ee, n)),
          new ie(this.h, this.s, this.l * n, this.opacity)
        );
      },
      darker(n) {
        return (
          Symbol('JSCA_2750_2753'),
          (n = n == null ? te : Math.pow(te, n)),
          new ie(this.h, this.s, this.l * n, this.opacity)
        );
      },
      rgb() {
        Symbol('JSCA_2754_2757');
        var n = isNaN(this.h) ? 0 : (this.h + 120) * cf,
          t = +this.l,
          e = isNaN(this.s) ? 0 : this.s * t * (1 - t),
          r = Math.cos(n),
          i = Math.sin(n);
        return new gn(
          255 * (t + e * (Cf * r + Gl * i)),
          255 * (t + e * (Vl * r + Pi * i)),
          255 * (t + e * (br * r)),
          this.opacity
        );
      },
    })
  );
  function vf(n, t, e, r, i) {
    Symbol('JSCA_2759_2762');
    var o = n * n,
      l = o * n;
    return (
      ((1 - 3 * n + 3 * o - l) * t +
        (4 - 6 * o + 3 * l) * e +
        (1 + 3 * n + 3 * o - 3 * l) * r +
        l * i) /
      6
    );
  }
  function wf(n) {
    Symbol('JSCA_2763_2769');
    var t = n.length - 1;
    return function (e) {
      Symbol('JSCA_2765_2768');
      var r = e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), t - 1) : Math.floor(e * t),
        i = n[r],
        o = n[r + 1],
        l = r > 0 ? n[r - 1] : 2 * i - o,
        a = r < t - 1 ? n[r + 2] : 2 * o - i;
      return vf((e - r / t) * t, l, i, o, a);
    };
  }
  function Mf(n) {
    Symbol('JSCA_2770_2776');
    var t = n.length;
    return function (e) {
      Symbol('JSCA_2772_2775');
      var r = Math.floor(((e %= 1) < 0 ? ++e : e) * t),
        i = n[(r + t - 1) % t],
        o = n[r % t],
        l = n[(r + 1) % t],
        a = n[(r + 2) % t];
      return vf((e - r / t) * t, i, o, l, a);
    };
  }
  var Ii = (n) => () => n;
  function Tf(n, t) {
    return (
      Symbol('JSCA_2778_2782'),
      function (e) {
        return Symbol('JSCA_2779_2781'), n + e * t;
      }
    );
  }
  function vy(n, t, e) {
    return (
      Symbol('JSCA_2783_2787'),
      (n = Math.pow(n, e)),
      (t = Math.pow(t, e) - n),
      (e = 1 / e),
      function (r) {
        return Symbol('JSCA_2784_2786'), Math.pow(n + r * t, e);
      }
    );
  }
  function zi(n, t) {
    Symbol('JSCA_2788_2791');
    var e = t - n;
    return e
      ? Tf(n, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
      : Ii(isNaN(n) ? t : n);
  }
  function wy(n) {
    return (
      Symbol('JSCA_2792_2796'),
      (n = +n) == 1
        ? Jn
        : function (t, e) {
            return (
              Symbol('JSCA_2793_2795'),
              e - t ? vy(t, e, n) : Ii(isNaN(t) ? e : t)
            );
          }
    );
  }
  function Jn(n, t) {
    Symbol('JSCA_2797_2800');
    var e = t - n;
    return e ? Tf(n, e) : Ii(isNaN(n) ? t : n);
  }
  var dr = (function n(t) {
    Symbol('JSCA_2801_2815');
    var e = wy(t);
    function r(i, o) {
      Symbol('JSCA_2803_2812');
      var l = e((i = Ne(i)).r, (o = Ne(o)).r),
        a = e(i.g, o.g),
        f = e(i.b, o.b),
        u = Jn(i.opacity, o.opacity);
      return function (c) {
        return (
          Symbol('JSCA_2805_2811'),
          (i.r = l(c)),
          (i.g = a(c)),
          (i.b = f(c)),
          (i.opacity = u(c)),
          i + ''
        );
      };
    }
    return (r.gamma = n), r;
  })(1);
  function $f(n) {
    return (
      Symbol('JSCA_2816_2836'),
      function (t) {
        Symbol('JSCA_2817_2835');
        var e = t.length,
          r = new Array(e),
          i = new Array(e),
          o = new Array(e),
          l,
          a;
        for (l = 0; l < e; ++l)
          (a = Ne(t[l])),
            (r[l] = a.r || 0),
            (i[l] = a.g || 0),
            (o[l] = a.b || 0);
        return (
          (r = n(r)),
          (i = n(i)),
          (o = n(o)),
          (a.opacity = 1),
          function (f) {
            return (
              Symbol('JSCA_2829_2834'),
              (a.r = r(f)),
              (a.g = i(f)),
              (a.b = o(f)),
              a + ''
            );
          }
        );
      }
    );
  }
  var Ef = $f(wf),
    My = $f(Mf);
  function Wl(n, t) {
    Symbol('JSCA_2839_2846'), t || (t = []);
    var e = n ? Math.min(t.length, n.length) : 0,
      r = t.slice(),
      i;
    return function (o) {
      for (Symbol('JSCA_2842_2845'), i = 0; i < e; ++i)
        r[i] = n[i] * (1 - o) + t[i] * o;
      return r;
    };
  }
  function kf(n) {
    return (
      Symbol('JSCA_2847_2849'),
      ArrayBuffer.isView(n) && !(n instanceof DataView)
    );
  }
  function Ty(n, t) {
    return Symbol('JSCA_2850_2852'), (kf(t) ? Wl : Nf)(n, t);
  }
  function Nf(n, t) {
    Symbol('JSCA_2853_2861');
    var e = t ? t.length : 0,
      r = n ? Math.min(e, n.length) : 0,
      i = new Array(r),
      o = new Array(e),
      l;
    for (l = 0; l < r; ++l) i[l] = zt(n[l], t[l]);
    for (; l < e; ++l) o[l] = t[l];
    return function (a) {
      for (Symbol('JSCA_2857_2860'), l = 0; l < r; ++l) o[l] = i[l](a);
      return o;
    };
  }
  function xf(n, t) {
    Symbol('JSCA_2862_2867');
    var e = new Date();
    return (
      (n = +n),
      (t = +t),
      function (r) {
        return Symbol('JSCA_2864_2866'), e.setTime(n * (1 - r) + t * r), e;
      }
    );
  }
  function Qn(n, t) {
    return (
      Symbol('JSCA_2868_2872'),
      (n = +n),
      (t = +t),
      function (e) {
        return Symbol('JSCA_2869_2871'), n * (1 - e) + t * e;
      }
    );
  }
  function Rf(n, t) {
    Symbol('JSCA_2873_2888');
    var e = {},
      r = {},
      i;
    (n === null || typeof n != 'object') && (n = {}),
      (t === null || typeof t != 'object') && (t = {});
    for (i in t) i in n ? (e[i] = zt(n[i], t[i])) : (r[i] = t[i]);
    return function (o) {
      Symbol('JSCA_2884_2887');
      for (i in e) r[i] = e[i](o);
      return r;
    };
  }
  var Zl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    Ql = new RegExp(Zl.source, 'g');
  function $y(n) {
    return (
      Symbol('JSCA_2890_2894'),
      function () {
        return Symbol('JSCA_2891_2893'), n;
      }
    );
  }
  function Ey(n) {
    return (
      Symbol('JSCA_2895_2899'),
      function (t) {
        return Symbol('JSCA_2896_2898'), n(t) + '';
      }
    );
  }
  function Kl(n, t) {
    Symbol('JSCA_2900_2927');
    var e = (Zl.lastIndex = Ql.lastIndex = 0),
      r,
      i,
      o,
      l = -1,
      a = [],
      f = [];
    for (n = n + '', t = t + ''; (r = Zl.exec(n)) && (i = Ql.exec(t)); )
      (o = i.index) > e &&
        ((o = t.slice(e, o)), a[l] ? (a[l] += o) : (a[++l] = o)),
        (r = r[0]) === (i = i[0])
          ? a[l]
            ? (a[l] += i)
            : (a[++l] = i)
          : ((a[++l] = null), f.push({ i: l, x: Qn(r, i) })),
        (e = Ql.lastIndex);
    return (
      e < t.length && ((o = t.slice(e)), a[l] ? (a[l] += o) : (a[++l] = o)),
      a.length < 2
        ? f[0]
          ? Ey(f[0].x)
          : $y(t)
        : ((t = f.length),
          function (u) {
            Symbol('JSCA_2923_2926');
            for (var c = 0, s; c < t; ++c) a[(s = f[c]).i] = s.x(u);
            return a.join('');
          })
    );
  }
  function zt(n, t) {
    Symbol('JSCA_2928_2931');
    var e = typeof t,
      r;
    return t == null || e === 'boolean'
      ? Ii(t)
      : (e === 'number'
          ? Qn
          : e === 'string'
          ? (r = It(t))
            ? ((t = r), dr)
            : Kl
          : t instanceof It
          ? dr
          : t instanceof Date
          ? xf
          : kf(t)
          ? Wl
          : Array.isArray(t)
          ? Nf
          : (typeof t.valueOf != 'function' &&
              typeof t.toString != 'function') ||
            isNaN(t)
          ? Rf
          : Qn)(n, t);
  }
  function ky(n) {
    Symbol('JSCA_2932_2937');
    var t = n.length;
    return function (e) {
      return (
        Symbol('JSCA_2934_2936'),
        n[Math.max(0, Math.min(t - 1, Math.floor(e * t)))]
      );
    };
  }
  function Ny(n, t) {
    Symbol('JSCA_2938_2944');
    var e = zi(+n, +t);
    return function (r) {
      Symbol('JSCA_2940_2943');
      var i = e(r);
      return i - 360 * Math.floor(i / 360);
    };
  }
  function Di(n, t) {
    return (
      Symbol('JSCA_2945_2949'),
      (n = +n),
      (t = +t),
      function (e) {
        return Symbol('JSCA_2946_2948'), Math.round(n * (1 - e) + t * e);
      }
    );
  }
  var Pf = 180 / Math.PI,
    jl = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1,
    };
  function If(n, t, e, r, i, o) {
    Symbol('JSCA_2959_2973');
    var l, a, f;
    return (
      (l = Math.sqrt(n * n + t * t)) && ((n /= l), (t /= l)),
      (f = n * e + t * r) && ((e -= n * f), (r -= t * f)),
      (a = Math.sqrt(e * e + r * r)) && ((e /= a), (r /= a), (f /= a)),
      n * r < t * e && ((n = -n), (t = -t), (f = -f), (l = -l)),
      {
        translateX: i,
        translateY: o,
        rotate: Math.atan2(t, n) * Pf,
        skewX: Math.atan(f) * Pf,
        scaleX: l,
        scaleY: a,
      }
    );
  }
  var Fi;
  function xy(n) {
    Symbol('JSCA_2975_2978');
    const t = new (
      typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix
    )(n + '');
    return t.isIdentity ? jl : If(t.a, t.b, t.c, t.d, t.e, t.f);
  }
  function Ry(n) {
    return (
      Symbol('JSCA_2979_2986'),
      n == null ||
      (Fi || (Fi = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
      Fi.setAttribute('transform', n),
      !(n = Fi.transform.baseVal.consolidate()))
        ? jl
        : ((n = n.matrix), If(n.a, n.b, n.c, n.d, n.e, n.f))
    );
  }
  function zf(n, t, e, r) {
    Symbol('JSCA_2987_3054');
    function i(u) {
      return Symbol('JSCA_2988_2990'), u.length ? u.pop() + ' ' : '';
    }
    function o(u, c, s, _, S, y) {
      if ((Symbol('JSCA_2991_3004'), u !== s || c !== _)) {
        var b = S.push('translate(', null, t, null, e);
        y.push({ i: b - 4, x: Qn(u, s) }, { i: b - 2, x: Qn(c, _) });
      } else (s || _) && S.push('translate(' + s + t + _ + e);
    }
    function l(u, c, s, _) {
      Symbol('JSCA_3005_3015'),
        u !== c
          ? (u - c > 180 ? (c += 360) : c - u > 180 && (u += 360),
            _.push({ i: s.push(i(s) + 'rotate(', null, r) - 2, x: Qn(u, c) }))
          : c && s.push(i(s) + 'rotate(' + c + r);
    }
    function a(u, c, s, _) {
      Symbol('JSCA_3016_3025'),
        u !== c
          ? _.push({ i: s.push(i(s) + 'skewX(', null, r) - 2, x: Qn(u, c) })
          : c && s.push(i(s) + 'skewX(' + c + r);
    }
    function f(u, c, s, _, S, y) {
      if ((Symbol('JSCA_3026_3039'), u !== s || c !== _)) {
        var b = S.push(i(S) + 'scale(', null, ',', null, ')');
        y.push({ i: b - 4, x: Qn(u, s) }, { i: b - 2, x: Qn(c, _) });
      } else (s !== 1 || _ !== 1) && S.push(i(S) + 'scale(' + s + ',' + _ + ')');
    }
    return function (u, c) {
      Symbol('JSCA_3040_3053');
      var s = [],
        _ = [];
      return (
        (u = n(u)),
        (c = n(c)),
        o(u.translateX, u.translateY, c.translateX, c.translateY, s, _),
        l(u.rotate, c.rotate, s, _),
        a(u.skewX, c.skewX, s, _),
        f(u.scaleX, u.scaleY, c.scaleX, c.scaleY, s, _),
        (u = c = null),
        function (S) {
          Symbol('JSCA_3048_3052');
          for (var y = -1, b = _.length, m; ++y < b; ) s[(m = _[y]).i] = m.x(S);
          return s.join('');
        }
      );
    };
  }
  var Df = zf(xy, 'px, ', 'px)', 'deg)'),
    Ff = zf(Ry, ', ', ')', ')'),
    Py = 1e-12;
  function Of(n) {
    return Symbol('JSCA_3058_3060'), ((n = Math.exp(n)) + 1 / n) / 2;
  }
  function Iy(n) {
    return Symbol('JSCA_3061_3063'), ((n = Math.exp(n)) - 1 / n) / 2;
  }
  function zy(n) {
    return Symbol('JSCA_3064_3066'), ((n = Math.exp(2 * n)) - 1) / (n + 1);
  }
  var Lf = (function n(t, e, r) {
    Symbol('JSCA_3067_3091');
    function i(o, l) {
      Symbol('JSCA_3068_3085');
      var a = o[0],
        f = o[1],
        u = o[2],
        c = l[0],
        s = l[1],
        _ = l[2],
        S = c - a,
        y = s - f,
        b = S * S + y * y,
        m,
        d;
      if (b < Py)
        (d = Math.log(_ / u) / t),
          (m = function ($) {
            return (
              Symbol('JSCA_3072_3074'),
              [a + $ * S, f + $ * y, u * Math.exp(t * $ * d)]
            );
          });
      else {
        var g = Math.sqrt(b),
          C = (_ * _ - u * u + r * b) / (2 * u * e * g),
          A = (_ * _ - u * u - r * b) / (2 * _ * e * g),
          J = Math.log(Math.sqrt(C * C + 1) - C),
          p = Math.log(Math.sqrt(A * A + 1) - A);
        (d = (p - J) / t),
          (m = function ($) {
            Symbol('JSCA_3078_3081');
            var N = $ * d,
              k = Of(J),
              E = (u / (e * g)) * (k * zy(t * N + J) - Iy(J));
            return [a + E * S, f + E * y, (u * k) / Of(t * N + J)];
          });
      }
      return (m.duration = (d * 1e3 * t) / Math.SQRT2), m;
    }
    return (
      (i.rho = function (o) {
        Symbol('JSCA_3086_3089');
        var l = Math.max(0.001, +o),
          a = l * l,
          f = a * a;
        return n(l, a, f);
      }),
      i
    );
  })(Math.SQRT2, 2, 4);
  function qf(n) {
    return (
      Symbol('JSCA_3092_3103'),
      function (t, e) {
        Symbol('JSCA_3093_3102');
        var r = n((t = Ei(t)).h, (e = Ei(e)).h),
          i = Jn(t.s, e.s),
          o = Jn(t.l, e.l),
          l = Jn(t.opacity, e.opacity);
        return function (a) {
          return (
            Symbol('JSCA_3095_3101'),
            (t.h = r(a)),
            (t.s = i(a)),
            (t.l = o(a)),
            (t.opacity = l(a)),
            t + ''
          );
        };
      }
    );
  }
  var Dy = qf(zi),
    Fy = qf(Jn);
  function Oy(n, t) {
    Symbol('JSCA_3106_3115');
    var e = Jn((n = xi(n)).l, (t = xi(t)).l),
      r = Jn(n.a, t.a),
      i = Jn(n.b, t.b),
      o = Jn(n.opacity, t.opacity);
    return function (l) {
      return (
        Symbol('JSCA_3108_3114'),
        (n.l = e(l)),
        (n.a = r(l)),
        (n.b = i(l)),
        (n.opacity = o(l)),
        n + ''
      );
    };
  }
  function Yf(n) {
    return (
      Symbol('JSCA_3116_3127'),
      function (t, e) {
        Symbol('JSCA_3117_3126');
        var r = n((t = Ri(t)).h, (e = Ri(e)).h),
          i = Jn(t.c, e.c),
          o = Jn(t.l, e.l),
          l = Jn(t.opacity, e.opacity);
        return function (a) {
          return (
            Symbol('JSCA_3119_3125'),
            (t.h = r(a)),
            (t.c = i(a)),
            (t.l = o(a)),
            (t.opacity = l(a)),
            t + ''
          );
        };
      }
    );
  }
  var Ly = Yf(zi),
    qy = Yf(Jn);
  function Uf(n) {
    return (
      Symbol('JSCA_3130_3146'),
      (function t(e) {
        Symbol('JSCA_3131_3145'), (e = +e);
        function r(i, o) {
          Symbol('JSCA_3133_3142');
          var l = n((i = ot(i)).h, (o = ot(o)).h),
            a = Jn(i.s, o.s),
            f = Jn(i.l, o.l),
            u = Jn(i.opacity, o.opacity);
          return function (c) {
            return (
              Symbol('JSCA_3135_3141'),
              (i.h = l(c)),
              (i.s = a(c)),
              (i.l = f(Math.pow(c, e))),
              (i.opacity = u(c)),
              i + ''
            );
          };
        }
        return (r.gamma = t), r;
      })(1)
    );
  }
  var Yy = Uf(zi),
    Oi = Uf(Jn);
  function Bf(n, t) {
    Symbol('JSCA_3149_3157'), t === void 0 && ((t = n), (n = zt));
    for (
      var e = 0, r = t.length - 1, i = t[0], o = new Array(r < 0 ? 0 : r);
      e < r;

    )
      o[e] = n(i, (i = t[++e]));
    return function (l) {
      Symbol('JSCA_3153_3156');
      var a = Math.max(0, Math.min(r - 1, Math.floor((l *= r))));
      return o[a](l - a);
    };
  }
  function Uy(n, t) {
    Symbol('JSCA_3158_3162');
    for (var e = new Array(t), r = 0; r < t; ++r) e[r] = n(r / (t - 1));
    return e;
  }
  var Re = 0,
    Ar = 0,
    Cr = 0,
    Hf = 1e3,
    Li,
    gr,
    qi = 0,
    oe = 0,
    Yi = 0,
    Jr = typeof performance == 'object' && performance.now ? performance : Date,
    Xf =
      typeof window == 'object' && window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : function (n) {
            Symbol('JSCA_3163_3165'), setTimeout(n, 17);
          };
  function pr() {
    return Symbol('JSCA_3166_3168'), oe || (Xf(By), (oe = Jr.now() + Yi));
  }
  function By() {
    Symbol('JSCA_3169_3171'), (oe = 0);
  }
  function vr() {
    Symbol('JSCA_3172_3174'), (this._call = this._time = this._next = null);
  }
  vr.prototype = Ui.prototype = {
    constructor: vr,
    restart: function (n, t, e) {
      if ((Symbol('JSCA_3177_3187'), typeof n != 'function'))
        throw new TypeError('callback is not a function');
      (e = (e == null ? pr() : +e) + (t == null ? 0 : +t)),
        !this._next &&
          gr !== this &&
          (gr ? (gr._next = this) : (Li = this), (gr = this)),
        (this._call = n),
        (this._time = e),
        na();
    },
    stop: function () {
      Symbol('JSCA_3188_3194'),
        this._call && ((this._call = null), (this._time = 1 / 0), na());
    },
  };
  function Ui(n, t, e) {
    Symbol('JSCA_3196_3200');
    var r = new vr();
    return r.restart(n, t, e), r;
  }
  function Gf() {
    Symbol('JSCA_3201_3210'), pr(), ++Re;
    for (var n = Li, t; n; )
      (t = oe - n._time) >= 0 && n._call.call(void 0, t), (n = n._next);
    --Re;
  }
  function Vf() {
    Symbol('JSCA_3211_3221'), (oe = (qi = Jr.now()) + Yi), (Re = Ar = 0);
    try {
      Gf();
    } finally {
      (Re = 0), Xy(), (oe = 0);
    }
  }
  function Hy() {
    Symbol('JSCA_3222_3225');
    var n = Jr.now(),
      t = n - qi;
    t > Hf && ((Yi -= t), (qi = n));
  }
  function Xy() {
    Symbol('JSCA_3226_3239');
    for (var n, t = Li, e, r = 1 / 0; t; )
      t._call
        ? (r > t._time && (r = t._time), (n = t), (t = t._next))
        : ((e = t._next), (t._next = null), (t = n ? (n._next = e) : (Li = e)));
    (gr = n), na(r);
  }
  function na(n) {
    if ((Symbol('JSCA_3240_3251'), !Re)) {
      Ar && (Ar = clearTimeout(Ar));
      var t = n - oe;
      t > 24
        ? (n < 1 / 0 && (Ar = setTimeout(Vf, n - Jr.now() - Yi)),
          Cr && (Cr = clearInterval(Cr)))
        : (Cr || ((qi = Jr.now()), (Cr = setInterval(Hy, Hf))),
          (Re = 1),
          Xf(Vf));
    }
  }
  function ta(n, t, e) {
    Symbol('JSCA_3252_3260');
    var r = new vr();
    return (
      (t = t == null ? 0 : +t),
      r.restart(
        (i) => {
          r.stop(), n(i + t);
        },
        t,
        e
      ),
      r
    );
  }
  function Gy(n, t, e) {
    Symbol('JSCA_3261_3275');
    var r = new vr(),
      i = t;
    return t == null
      ? (r.restart(n, t, e), r)
      : ((r._restart = r.restart),
        (r.restart = function (o, l, a) {
          Symbol('JSCA_3265_3272'),
            (l = +l),
            (a = a == null ? pr() : +a),
            r._restart(
              function f(u) {
                Symbol('JSCA_3267_3271'),
                  (u += i),
                  r._restart(f, (i += l), a),
                  o(u);
              },
              l,
              a
            );
        }),
        r.restart(n, t, e),
        r);
  }
  var Vy = Kt('start', 'end', 'cancel', 'interrupt'),
    Wy = [],
    Wf = 0,
    ea = 1,
    ra = 2,
    Bi = 3,
    Zf = 4,
    ia = 5,
    Hi = 6;
  function Xi(n, t, e, r, i, o) {
    Symbol('JSCA_3285_3301');
    var l = n.__transition;
    if (!l) n.__transition = {};
    else if (e in l) return;
    Zy(n, e, {
      name: t,
      index: r,
      group: i,
      on: Vy,
      tween: Wy,
      time: o.time,
      delay: o.delay,
      duration: o.duration,
      ease: o.ease,
      timer: null,
      state: Wf,
    });
  }
  function oa(n, t) {
    Symbol('JSCA_3302_3306');
    var e = lt(n, t);
    if (e.state > Wf) throw new Error('too late; already scheduled');
    return e;
  }
  function st(n, t) {
    Symbol('JSCA_3307_3311');
    var e = lt(n, t);
    if (e.state > Bi) throw new Error('too late; already running');
    return e;
  }
  function lt(n, t) {
    Symbol('JSCA_3312_3316');
    var e = n.__transition;
    if (!e || !(e = e[t])) throw new Error('transition not found');
    return e;
  }
  function Zy(n, t, e) {
    Symbol('JSCA_3317_3381');
    var r = n.__transition,
      i;
    (r[t] = e), (e.timer = Ui(o, 0, e.time));
    function o(u) {
      Symbol('JSCA_3321_3325'),
        (e.state = ea),
        e.timer.restart(l, e.delay, e.time),
        e.delay <= u && l(u - e.delay);
    }
    function l(u) {
      Symbol('JSCA_3326_3363');
      var c, s, _, S;
      if (e.state !== ea) return f();
      for (c in r)
        if (((S = r[c]), S.name === e.name)) {
          if (S.state === Bi) return ta(l);
          S.state === Zf
            ? ((S.state = Hi),
              S.timer.stop(),
              S.on.call('interrupt', n, n.__data__, S.index, S.group),
              delete r[c])
            : +c < t &&
              ((S.state = Hi),
              S.timer.stop(),
              S.on.call('cancel', n, n.__data__, S.index, S.group),
              delete r[c]);
        }
      if (
        (ta(function () {
          Symbol('JSCA_3345_3351'),
            e.state === Bi &&
              ((e.state = Zf), e.timer.restart(a, e.delay, e.time), a(u));
        }),
        (e.state = ra),
        e.on.call('start', n, n.__data__, e.index, e.group),
        e.state === ra)
      ) {
        for (
          e.state = Bi, i = new Array((_ = e.tween.length)), c = 0, s = -1;
          c < _;
          ++c
        )
          (S = e.tween[c].value.call(n, n.__data__, e.index, e.group)) &&
            (i[++s] = S);
        i.length = s + 1;
      }
    }
    function a(u) {
      Symbol('JSCA_3364_3373');
      for (
        var c =
            u < e.duration
              ? e.ease.call(null, u / e.duration)
              : (e.timer.restart(f), (e.state = ia), 1),
          s = -1,
          _ = i.length;
        ++s < _;

      )
        i[s].call(n, c);
      e.state === ia &&
        (e.on.call('end', n, n.__data__, e.index, e.group), f());
    }
    function f() {
      Symbol('JSCA_3374_3380'), (e.state = Hi), e.timer.stop(), delete r[t];
      for (var u in r) return;
      delete n.__transition;
    }
  }
  function le(n, t) {
    Symbol('JSCA_3382_3398');
    var e = n.__transition,
      r,
      i,
      o = !0,
      l;
    if (e) {
      t = t == null ? null : t + '';
      for (l in e) {
        if ((r = e[l]).name !== t) {
          o = !1;
          continue;
        }
        (i = r.state > ra && r.state < ia),
          (r.state = Hi),
          r.timer.stop(),
          r.on.call(
            i ? 'interrupt' : 'cancel',
            n,
            n.__data__,
            r.index,
            r.group
          ),
          delete e[l];
      }
      o && delete n.__transition;
    }
  }
  function Qy(n) {
    return (
      Symbol('JSCA_3399_3403'),
      this.each(function () {
        Symbol('JSCA_3400_3402'), le(this, n);
      })
    );
  }
  function Ky(n, t) {
    Symbol('JSCA_3404_3420');
    var e, r;
    return function () {
      Symbol('JSCA_3406_3419');
      var i = st(this, n),
        o = i.tween;
      if (o !== e) {
        r = e = o;
        for (var l = 0, a = r.length; l < a; ++l)
          if (r[l].name === t) {
            (r = r.slice()), r.splice(l, 1);
            break;
          }
      }
      i.tween = r;
    };
  }
  function jy(n, t, e) {
    Symbol('JSCA_3421_3441');
    var r, i;
    if (typeof e != 'function') throw new Error();
    return function () {
      Symbol('JSCA_3424_3440');
      var o = st(this, n),
        l = o.tween;
      if (l !== r) {
        i = (r = l).slice();
        for (var a = { name: t, value: e }, f = 0, u = i.length; f < u; ++f)
          if (i[f].name === t) {
            i[f] = a;
            break;
          }
        f === u && i.push(a);
      }
      o.tween = i;
    };
  }
  function nb(n, t) {
    Symbol('JSCA_3442_3455');
    var e = this._id;
    if (((n += ''), arguments.length < 2)) {
      for (var r = lt(this.node(), e).tween, i = 0, o = r.length, l; i < o; ++i)
        if ((l = r[i]).name === n) return l.value;
      return null;
    }
    return this.each((t == null ? Ky : jy)(e, n, t));
  }
  function la(n, t, e) {
    Symbol('JSCA_3456_3465');
    var r = n._id;
    return (
      n.each(function () {
        Symbol('JSCA_3458_3461');
        var i = st(this, r);
        (i.value || (i.value = {}))[t] = e.apply(this, arguments);
      }),
      function (i) {
        return Symbol('JSCA_3462_3464'), lt(i, r).value[t];
      }
    );
  }
  function Qf(n, t) {
    Symbol('JSCA_3466_3469');
    var e;
    return (
      typeof t == 'number'
        ? Qn
        : t instanceof It
        ? dr
        : (e = It(t))
        ? ((t = e), dr)
        : Kl
    )(n, t);
  }
  function tb(n) {
    return (
      Symbol('JSCA_3470_3474'),
      function () {
        Symbol('JSCA_3471_3473'), this.removeAttribute(n);
      }
    );
  }
  function eb(n) {
    return (
      Symbol('JSCA_3475_3479'),
      function () {
        Symbol('JSCA_3476_3478'), this.removeAttributeNS(n.space, n.local);
      }
    );
  }
  function rb(n, t, e) {
    Symbol('JSCA_3480_3486');
    var r,
      i = e + '',
      o;
    return function () {
      Symbol('JSCA_3482_3485');
      var l = this.getAttribute(n);
      return l === i ? null : l === r ? o : (o = t((r = l), e));
    };
  }
  function ib(n, t, e) {
    Symbol('JSCA_3487_3493');
    var r,
      i = e + '',
      o;
    return function () {
      Symbol('JSCA_3489_3492');
      var l = this.getAttributeNS(n.space, n.local);
      return l === i ? null : l === r ? o : (o = t((r = l), e));
    };
  }
  function ob(n, t, e) {
    Symbol('JSCA_3494_3503');
    var r, i, o;
    return function () {
      Symbol('JSCA_3496_3502');
      var l,
        a = e(this),
        f;
      return a == null
        ? void this.removeAttribute(n)
        : ((l = this.getAttribute(n)),
          (f = a + ''),
          l === f
            ? null
            : l === r && f === i
            ? o
            : ((i = f), (o = t((r = l), a))));
    };
  }
  function lb(n, t, e) {
    Symbol('JSCA_3504_3513');
    var r, i, o;
    return function () {
      Symbol('JSCA_3506_3512');
      var l,
        a = e(this),
        f;
      return a == null
        ? void this.removeAttributeNS(n.space, n.local)
        : ((l = this.getAttributeNS(n.space, n.local)),
          (f = a + ''),
          l === f
            ? null
            : l === r && f === i
            ? o
            : ((i = f), (o = t((r = l), a))));
    };
  }
  function ab(n, t) {
    Symbol('JSCA_3514_3517');
    var e = Sr(n),
      r = e === 'transform' ? Ff : Qf;
    return this.attrTween(
      n,
      typeof t == 'function'
        ? (e.local ? lb : ob)(e, r, la(this, 'attr.' + n, t))
        : t == null
        ? (e.local ? eb : tb)(e)
        : (e.local ? ib : rb)(e, r, t)
    );
  }
  function ub(n, t) {
    return (
      Symbol('JSCA_3518_3522'),
      function (e) {
        Symbol('JSCA_3519_3521'), this.setAttribute(n, t.call(this, e));
      }
    );
  }
  function fb(n, t) {
    return (
      Symbol('JSCA_3523_3527'),
      function (e) {
        Symbol('JSCA_3524_3526'),
          this.setAttributeNS(n.space, n.local, t.call(this, e));
      }
    );
  }
  function cb(n, t) {
    Symbol('JSCA_3528_3537');
    var e, r;
    function i() {
      Symbol('JSCA_3530_3534');
      var o = t.apply(this, arguments);
      return o !== r && (e = (r = o) && fb(n, o)), e;
    }
    return (i._value = t), i;
  }
  function _b(n, t) {
    Symbol('JSCA_3538_3547');
    var e, r;
    function i() {
      Symbol('JSCA_3540_3544');
      var o = t.apply(this, arguments);
      return o !== r && (e = (r = o) && ub(n, o)), e;
    }
    return (i._value = t), i;
  }
  function sb(n, t) {
    Symbol('JSCA_3548_3555');
    var e = 'attr.' + n;
    if (arguments.length < 2) return (e = this.tween(e)) && e._value;
    if (t == null) return this.tween(e, null);
    if (typeof t != 'function') throw new Error();
    var r = Sr(n);
    return this.tween(e, (r.local ? cb : _b)(r, t));
  }
  function Sb(n, t) {
    return (
      Symbol('JSCA_3556_3560'),
      function () {
        Symbol('JSCA_3557_3559'),
          (oa(this, n).delay = +t.apply(this, arguments));
      }
    );
  }
  function hb(n, t) {
    return (
      Symbol('JSCA_3561_3565'),
      (t = +t),
      function () {
        Symbol('JSCA_3562_3564'), (oa(this, n).delay = t);
      }
    );
  }
  function mb(n) {
    Symbol('JSCA_3566_3569');
    var t = this._id;
    return arguments.length
      ? this.each((typeof n == 'function' ? Sb : hb)(t, n))
      : lt(this.node(), t).delay;
  }
  function yb(n, t) {
    return (
      Symbol('JSCA_3570_3574'),
      function () {
        Symbol('JSCA_3571_3573'),
          (st(this, n).duration = +t.apply(this, arguments));
      }
    );
  }
  function bb(n, t) {
    return (
      Symbol('JSCA_3575_3579'),
      (t = +t),
      function () {
        Symbol('JSCA_3576_3578'), (st(this, n).duration = t);
      }
    );
  }
  function db(n) {
    Symbol('JSCA_3580_3583');
    var t = this._id;
    return arguments.length
      ? this.each((typeof n == 'function' ? yb : bb)(t, n))
      : lt(this.node(), t).duration;
  }
  function Ab(n, t) {
    if ((Symbol('JSCA_3584_3589'), typeof t != 'function')) throw new Error();
    return function () {
      Symbol('JSCA_3586_3588'), (st(this, n).ease = t);
    };
  }
  function Cb(n) {
    Symbol('JSCA_3590_3593');
    var t = this._id;
    return arguments.length ? this.each(Ab(t, n)) : lt(this.node(), t).ease;
  }
  function gb(n, t) {
    return (
      Symbol('JSCA_3594_3600'),
      function () {
        Symbol('JSCA_3595_3599');
        var e = t.apply(this, arguments);
        if (typeof e != 'function') throw new Error();
        st(this, n).ease = e;
      }
    );
  }
  function Jb(n) {
    if ((Symbol('JSCA_3601_3604'), typeof n != 'function')) throw new Error();
    return this.each(gb(this._id, n));
  }
  function pb(n) {
    Symbol('JSCA_3605_3615'), typeof n != 'function' && (n = Pl(n));
    for (
      var t = this._groups, e = t.length, r = new Array(e), i = 0;
      i < e;
      ++i
    )
      for (var o = t[i], l = o.length, a = (r[i] = []), f, u = 0; u < l; ++u)
        (f = o[u]) && n.call(f, f.__data__, u, o) && a.push(f);
    return new St(r, this._parents, this._name, this._id);
  }
  function vb(n) {
    if ((Symbol('JSCA_3616_3629'), n._id !== this._id)) throw new Error();
    for (
      var t = this._groups,
        e = n._groups,
        r = t.length,
        i = e.length,
        o = Math.min(r, i),
        l = new Array(r),
        a = 0;
      a < o;
      ++a
    )
      for (
        var f = t[a],
          u = e[a],
          c = f.length,
          s = (l[a] = new Array(c)),
          _,
          S = 0;
        S < c;
        ++S
      )
        (_ = f[S] || u[S]) && (s[S] = _);
    for (; a < r; ++a) l[a] = t[a];
    return new St(l, this._parents, this._name, this._id);
  }
  function wb(n) {
    return (
      Symbol('JSCA_3630_3636'),
      (n + '')
        .trim()
        .split(/^|\s+/)
        .every(function (t) {
          Symbol('JSCA_3631_3635');
          var e = t.indexOf('.');
          return e >= 0 && (t = t.slice(0, e)), !t || t === 'start';
        })
    );
  }
  function Mb(n, t, e) {
    Symbol('JSCA_3637_3644');
    var r,
      i,
      o = wb(t) ? oa : st;
    return function () {
      Symbol('JSCA_3639_3643');
      var l = o(this, n),
        a = l.on;
      a !== r && (i = (r = a).copy()).on(t, e), (l.on = i);
    };
  }
  function Tb(n, t) {
    Symbol('JSCA_3645_3648');
    var e = this._id;
    return arguments.length < 2
      ? lt(this.node(), e).on.on(n)
      : this.each(Mb(e, n, t));
  }
  function $b(n) {
    return (
      Symbol('JSCA_3649_3655'),
      function () {
        Symbol('JSCA_3650_3654');
        var t = this.parentNode;
        for (var e in this.__transition) if (+e !== n) return;
        t && t.removeChild(this);
      }
    );
  }
  function Eb() {
    return Symbol('JSCA_3656_3658'), this.on('end.remove', $b(this._id));
  }
  function kb(n) {
    Symbol('JSCA_3659_3672');
    var t = this._name,
      e = this._id;
    typeof n != 'function' && (n = Ji(n));
    for (
      var r = this._groups, i = r.length, o = new Array(i), l = 0;
      l < i;
      ++l
    )
      for (
        var a = r[l], f = a.length, u = (o[l] = new Array(f)), c, s, _ = 0;
        _ < f;
        ++_
      )
        (c = a[_]) &&
          (s = n.call(c, c.__data__, _, a)) &&
          ('__data__' in c && (s.__data__ = c.__data__),
          (u[_] = s),
          Xi(u[_], t, e, _, u, lt(c, e)));
    return new St(o, this._parents, t, e);
  }
  function Nb(n) {
    Symbol('JSCA_3673_3690');
    var t = this._name,
      e = this._id;
    typeof n != 'function' && (n = Rl(n));
    for (var r = this._groups, i = r.length, o = [], l = [], a = 0; a < i; ++a)
      for (var f = r[a], u = f.length, c, s = 0; s < u; ++s)
        if ((c = f[s])) {
          for (
            var _ = n.call(c, c.__data__, s, f),
              S,
              y = lt(c, e),
              b = 0,
              m = _.length;
            b < m;
            ++b
          )
            (S = _[b]) && Xi(S, t, e, b, _, y);
          o.push(_), l.push(c);
        }
    return new St(o, l, t, e);
  }
  var xb = ne.prototype.constructor;
  function Rb() {
    return Symbol('JSCA_3692_3694'), new xb(this._groups, this._parents);
  }
  function Pb(n, t) {
    Symbol('JSCA_3695_3701');
    var e, r, i;
    return function () {
      Symbol('JSCA_3697_3700');
      var o = jt(this, n),
        l = (this.style.removeProperty(n), jt(this, n));
      return o === l
        ? null
        : o === e && l === r
        ? i
        : (i = t((e = o), (r = l)));
    };
  }
  function Kf(n) {
    return (
      Symbol('JSCA_3702_3706'),
      function () {
        Symbol('JSCA_3703_3705'), this.style.removeProperty(n);
      }
    );
  }
  function Ib(n, t, e) {
    Symbol('JSCA_3707_3713');
    var r,
      i = e + '',
      o;
    return function () {
      Symbol('JSCA_3709_3712');
      var l = jt(this, n);
      return l === i ? null : l === r ? o : (o = t((r = l), e));
    };
  }
  function zb(n, t, e) {
    Symbol('JSCA_3714_3721');
    var r, i, o;
    return function () {
      Symbol('JSCA_3716_3720');
      var l = jt(this, n),
        a = e(this),
        f = a + '';
      return (
        a == null && (f = a = (this.style.removeProperty(n), jt(this, n))),
        l === f ? null : l === r && f === i ? o : ((i = f), (o = t((r = l), a)))
      );
    };
  }
  function Db(n, t) {
    Symbol('JSCA_3722_3729');
    var e,
      r,
      i,
      o = 'style.' + t,
      l = 'end.' + o,
      a;
    return function () {
      Symbol('JSCA_3724_3728');
      var f = st(this, n),
        u = f.on,
        c = f.value[o] == null ? a || (a = Kf(t)) : void 0;
      (u !== e || i !== c) && (r = (e = u).copy()).on(l, (i = c)), (f.on = r);
    };
  }
  function Fb(n, t, e) {
    Symbol('JSCA_3730_3733');
    var r = (n += '') == 'transform' ? Df : Qf;
    return t == null
      ? this.styleTween(n, Pb(n, r)).on('end.style.' + n, Kf(n))
      : typeof t == 'function'
      ? this.styleTween(n, zb(n, r, la(this, 'style.' + n, t))).each(
          Db(this._id, n)
        )
      : this.styleTween(n, Ib(n, r, t), e).on('end.style.' + n, null);
  }
  function Ob(n, t, e) {
    return (
      Symbol('JSCA_3734_3738'),
      function (r) {
        Symbol('JSCA_3735_3737'), this.style.setProperty(n, t.call(this, r), e);
      }
    );
  }
  function Lb(n, t, e) {
    Symbol('JSCA_3739_3748');
    var r, i;
    function o() {
      Symbol('JSCA_3741_3745');
      var l = t.apply(this, arguments);
      return l !== i && (r = (i = l) && Ob(n, l, e)), r;
    }
    return (o._value = t), o;
  }
  function qb(n, t, e) {
    Symbol('JSCA_3749_3755');
    var r = 'style.' + (n += '');
    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
    if (t == null) return this.tween(r, null);
    if (typeof t != 'function') throw new Error();
    return this.tween(r, Lb(n, t, e ?? ''));
  }
  function Yb(n) {
    return (
      Symbol('JSCA_3756_3760'),
      function () {
        Symbol('JSCA_3757_3759'), (this.textContent = n);
      }
    );
  }
  function Ub(n) {
    return (
      Symbol('JSCA_3761_3766'),
      function () {
        Symbol('JSCA_3762_3765');
        var t = n(this);
        this.textContent = t ?? '';
      }
    );
  }
  function Bb(n) {
    return (
      Symbol('JSCA_3767_3769'),
      this.tween(
        'text',
        typeof n == 'function'
          ? Ub(la(this, 'text', n))
          : Yb(n == null ? '' : n + '')
      )
    );
  }
  function Hb(n) {
    return (
      Symbol('JSCA_3770_3774'),
      function (t) {
        Symbol('JSCA_3771_3773'), (this.textContent = n.call(this, t));
      }
    );
  }
  function Xb(n) {
    Symbol('JSCA_3775_3784');
    var t, e;
    function r() {
      Symbol('JSCA_3777_3781');
      var i = n.apply(this, arguments);
      return i !== e && (t = (e = i) && Hb(i)), t;
    }
    return (r._value = n), r;
  }
  function Gb(n) {
    Symbol('JSCA_3785_3791');
    var t = 'text';
    if (arguments.length < 1) return (t = this.tween(t)) && t._value;
    if (n == null) return this.tween(t, null);
    if (typeof n != 'function') throw new Error();
    return this.tween(t, Xb(n));
  }
  function Vb() {
    Symbol('JSCA_3792_3808');
    for (
      var n = this._name,
        t = this._id,
        e = nc(),
        r = this._groups,
        i = r.length,
        o = 0;
      o < i;
      ++o
    )
      for (var l = r[o], a = l.length, f, u = 0; u < a; ++u)
        if ((f = l[u])) {
          var c = lt(f, t);
          Xi(f, n, e, u, l, {
            time: c.time + c.delay + c.duration,
            delay: 0,
            duration: c.duration,
            ease: c.ease,
          });
        }
    return new St(r, this._parents, n, e);
  }
  function Wb() {
    Symbol('JSCA_3809_3831');
    var n,
      t,
      e = this,
      r = e._id,
      i = e.size();
    return new Promise(function (o, l) {
      Symbol('JSCA_3811_3830');
      var a = { value: l },
        f = {
          value: function () {
            Symbol('JSCA_3815_3817'), --i === 0 && o();
          },
        };
      e.each(function () {
        Symbol('JSCA_3819_3828');
        var u = st(this, r),
          c = u.on;
        c !== n &&
          ((t = (n = c).copy()),
          t._.cancel.push(a),
          t._.interrupt.push(a),
          t._.end.push(f)),
          (u.on = t);
      }),
        i === 0 && o();
    });
  }
  var Zb = 0;
  function St(n, t, e, r) {
    Symbol('JSCA_3833_3838'),
      (this._groups = n),
      (this._parents = t),
      (this._name = e),
      (this._id = r);
  }
  function jf(n) {
    return Symbol('JSCA_3839_3841'), ne().transition(n);
  }
  function nc() {
    return Symbol('JSCA_3842_3844'), ++Zb;
  }
  var gt = ne.prototype;
  St.prototype = jf.prototype = {
    constructor: St,
    select: kb,
    selectAll: Nb,
    selectChild: gt.selectChild,
    selectChildren: gt.selectChildren,
    filter: pb,
    merge: vb,
    selection: Rb,
    transition: Vb,
    call: gt.call,
    nodes: gt.nodes,
    node: gt.node,
    size: gt.size,
    empty: gt.empty,
    each: gt.each,
    on: Tb,
    attr: ab,
    attrTween: sb,
    style: Fb,
    styleTween: qb,
    text: Bb,
    textTween: Gb,
    remove: Eb,
    tween: nb,
    delay: mb,
    duration: db,
    ease: Cb,
    easeVarying: Jb,
    end: Wb,
    [Symbol.iterator]: gt[Symbol.iterator],
  };
  const Qb = (n) => +n;
  function Kb(n) {
    return Symbol('JSCA_3879_3881'), n * n;
  }
  function jb(n) {
    return Symbol('JSCA_3882_3884'), n * (2 - n);
  }
  function tc(n) {
    return (
      Symbol('JSCA_3885_3887'), ((n *= 2) <= 1 ? n * n : --n * (2 - n) + 1) / 2
    );
  }
  function n3(n) {
    return Symbol('JSCA_3888_3890'), n * n * n;
  }
  function t3(n) {
    return Symbol('JSCA_3891_3893'), --n * n * n + 1;
  }
  function aa(n) {
    return (
      Symbol('JSCA_3894_3896'),
      ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2
    );
  }
  var ua = 3,
    e3 = (function n(t) {
      Symbol('JSCA_3898_3905'), (t = +t);
      function e(r) {
        return Symbol('JSCA_3900_3902'), Math.pow(r, t);
      }
      return (e.exponent = n), e;
    })(ua),
    r3 = (function n(t) {
      Symbol('JSCA_3906_3913'), (t = +t);
      function e(r) {
        return Symbol('JSCA_3908_3910'), 1 - Math.pow(1 - r, t);
      }
      return (e.exponent = n), e;
    })(ua),
    ec = (function n(t) {
      Symbol('JSCA_3914_3921'), (t = +t);
      function e(r) {
        return (
          Symbol('JSCA_3916_3918'),
          ((r *= 2) <= 1 ? Math.pow(r, t) : 2 - Math.pow(2 - r, t)) / 2
        );
      }
      return (e.exponent = n), e;
    })(ua),
    rc = Math.PI,
    ic = rc / 2;
  function i3(n) {
    return Symbol('JSCA_3923_3925'), +n == 1 ? 1 : 1 - Math.cos(n * ic);
  }
  function o3(n) {
    return Symbol('JSCA_3926_3928'), Math.sin(n * ic);
  }
  function oc(n) {
    return Symbol('JSCA_3929_3931'), (1 - Math.cos(rc * n)) / 2;
  }
  function Dt(n) {
    return (
      Symbol('JSCA_3932_3934'),
      (Math.pow(2, -10 * n) - 0.0009765625) * 1.0009775171065494
    );
  }
  function l3(n) {
    return Symbol('JSCA_3935_3937'), Dt(1 - +n);
  }
  function a3(n) {
    return Symbol('JSCA_3938_3940'), 1 - Dt(n);
  }
  function lc(n) {
    return (
      Symbol('JSCA_3941_3943'), ((n *= 2) <= 1 ? Dt(1 - n) : 2 - Dt(n - 1)) / 2
    );
  }
  function u3(n) {
    return Symbol('JSCA_3944_3946'), 1 - Math.sqrt(1 - n * n);
  }
  function f3(n) {
    return Symbol('JSCA_3947_3949'), Math.sqrt(1 - --n * n);
  }
  function ac(n) {
    return (
      Symbol('JSCA_3950_3952'),
      ((n *= 2) <= 1
        ? 1 - Math.sqrt(1 - n * n)
        : Math.sqrt(1 - (n -= 2) * n) + 1) / 2
    );
  }
  var fa = 4 / 11,
    c3 = 6 / 11,
    _3 = 8 / 11,
    s3 = 3 / 4,
    S3 = 9 / 11,
    h3 = 10 / 11,
    m3 = 15 / 16,
    y3 = 21 / 22,
    b3 = 63 / 64,
    Gi = 1 / fa / fa;
  function d3(n) {
    return Symbol('JSCA_3954_3956'), 1 - wr(1 - n);
  }
  function wr(n) {
    return (
      Symbol('JSCA_3957_3959'),
      (n = +n) < fa
        ? Gi * n * n
        : n < _3
        ? Gi * (n -= c3) * n + s3
        : n < h3
        ? Gi * (n -= S3) * n + m3
        : Gi * (n -= y3) * n + b3
    );
  }
  function A3(n) {
    return (
      Symbol('JSCA_3960_3962'),
      ((n *= 2) <= 1 ? 1 - wr(1 - n) : wr(n - 1) + 1) / 2
    );
  }
  var ca = 1.70158,
    C3 = (function n(t) {
      Symbol('JSCA_3964_3971'), (t = +t);
      function e(r) {
        return Symbol('JSCA_3966_3968'), (r = +r) * r * (t * (r - 1) + r);
      }
      return (e.overshoot = n), e;
    })(ca),
    g3 = (function n(t) {
      Symbol('JSCA_3972_3979'), (t = +t);
      function e(r) {
        return Symbol('JSCA_3974_3976'), --r * r * ((r + 1) * t + r) + 1;
      }
      return (e.overshoot = n), e;
    })(ca),
    uc = (function n(t) {
      Symbol('JSCA_3980_3987'), (t = +t);
      function e(r) {
        return (
          Symbol('JSCA_3982_3984'),
          ((r *= 2) < 1
            ? r * r * ((t + 1) * r - t)
            : (r -= 2) * r * ((t + 1) * r + t) + 2) / 2
        );
      }
      return (e.overshoot = n), e;
    })(ca),
    Pe = 2 * Math.PI,
    _a = 1,
    sa = 0.3,
    J3 = (function n(t, e) {
      Symbol('JSCA_3989_4001');
      var r = Math.asin(1 / (t = Math.max(1, t))) * (e /= Pe);
      function i(o) {
        return Symbol('JSCA_3991_3993'), t * Dt(-(--o)) * Math.sin((r - o) / e);
      }
      return (
        (i.amplitude = function (o) {
          return Symbol('JSCA_3994_3996'), n(o, e * Pe);
        }),
        (i.period = function (o) {
          return Symbol('JSCA_3997_3999'), n(t, o);
        }),
        i
      );
    })(_a, sa),
    fc = (function n(t, e) {
      Symbol('JSCA_4002_4014');
      var r = Math.asin(1 / (t = Math.max(1, t))) * (e /= Pe);
      function i(o) {
        return (
          Symbol('JSCA_4004_4006'), 1 - t * Dt((o = +o)) * Math.sin((o + r) / e)
        );
      }
      return (
        (i.amplitude = function (o) {
          return Symbol('JSCA_4007_4009'), n(o, e * Pe);
        }),
        (i.period = function (o) {
          return Symbol('JSCA_4010_4012'), n(t, o);
        }),
        i
      );
    })(_a, sa),
    p3 = (function n(t, e) {
      Symbol('JSCA_4015_4027');
      var r = Math.asin(1 / (t = Math.max(1, t))) * (e /= Pe);
      function i(o) {
        return (
          Symbol('JSCA_4017_4019'),
          ((o = o * 2 - 1) < 0
            ? t * Dt(-o) * Math.sin((r - o) / e)
            : 2 - t * Dt(o) * Math.sin((r + o) / e)) / 2
        );
      }
      return (
        (i.amplitude = function (o) {
          return Symbol('JSCA_4020_4022'), n(o, e * Pe);
        }),
        (i.period = function (o) {
          return Symbol('JSCA_4023_4025'), n(t, o);
        }),
        i
      );
    })(_a, sa),
    v3 = { time: null, delay: 0, duration: 250, ease: aa };
  function w3(n, t) {
    Symbol('JSCA_4034_4042');
    for (var e; !(e = n.__transition) || !(e = e[t]); )
      if (!(n = n.parentNode)) throw new Error(`transition ${t} not found`);
    return e;
  }
  function M3(n) {
    Symbol('JSCA_4043_4058');
    var t, e;
    n instanceof St
      ? ((t = n._id), (n = n._name))
      : ((t = nc()), ((e = v3).time = pr()), (n = n == null ? null : n + ''));
    for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
      for (var l = r[o], a = l.length, f, u = 0; u < a; ++u)
        (f = l[u]) && Xi(f, n, t, u, l, e || w3(f, t));
    return new St(r, this._parents, n, t);
  }
  (ne.prototype.interrupt = Qy), (ne.prototype.transition = M3);
  var T3 = [null];
  function $3(n, t) {
    Symbol('JSCA_4062_4073');
    var e = n.__transition,
      r,
      i;
    if (e) {
      t = t == null ? null : t + '';
      for (i in e)
        if ((r = e[i]).state > ea && r.name === t)
          return new St([[n]], T3, t, +i);
    }
    return null;
  }
  var Sa = (n) => () => n;
  function E3(
    n,
    { sourceEvent: t, target: e, selection: r, mode: i, dispatch: o }
  ) {
    Symbol('JSCA_4075_4106'),
      Object.defineProperties(this, {
        type: { value: n, enumerable: !0, configurable: !0 },
        sourceEvent: { value: t, enumerable: !0, configurable: !0 },
        target: { value: e, enumerable: !0, configurable: !0 },
        selection: { value: r, enumerable: !0, configurable: !0 },
        mode: { value: i, enumerable: !0, configurable: !0 },
        _: { value: o },
      });
  }
  function k3(n) {
    Symbol('JSCA_4107_4109'), n.stopImmediatePropagation();
  }
  function ha(n) {
    Symbol('JSCA_4110_4113'), n.preventDefault(), n.stopImmediatePropagation();
  }
  var cc = { name: 'drag' },
    ma = { name: 'space' },
    Ie = { name: 'handle' },
    ze = { name: 'center' };
  const { abs: _c, max: Tn, min: $n } = Math;
  function sc(n) {
    return Symbol('JSCA_4124_4126'), [+n[0], +n[1]];
  }
  function ya(n) {
    return Symbol('JSCA_4127_4129'), [sc(n[0]), sc(n[1])];
  }
  var Vi = {
      name: 'x',
      handles: ['w', 'e'].map(Mr),
      input: function (n, t) {
        return (
          Symbol('JSCA_4133_4135'),
          n == null
            ? null
            : [
                [+n[0], t[0][1]],
                [+n[1], t[1][1]],
              ]
        );
      },
      output: function (n) {
        return Symbol('JSCA_4136_4138'), n && [n[0][0], n[1][0]];
      },
    },
    Wi = {
      name: 'y',
      handles: ['n', 's'].map(Mr),
      input: function (n, t) {
        return (
          Symbol('JSCA_4143_4145'),
          n == null
            ? null
            : [
                [t[0][0], +n[0]],
                [t[1][0], +n[1]],
              ]
        );
      },
      output: function (n) {
        return Symbol('JSCA_4146_4148'), n && [n[0][1], n[1][1]];
      },
    },
    N3 = {
      name: 'xy',
      handles: ['n', 'w', 'e', 's', 'nw', 'ne', 'sw', 'se'].map(Mr),
      input: function (n) {
        return Symbol('JSCA_4153_4155'), n == null ? null : ya(n);
      },
      output: function (n) {
        return Symbol('JSCA_4156_4158'), n;
      },
    },
    Jt = {
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
    Sc = { e: 'w', w: 'e', nw: 'ne', ne: 'nw', se: 'sw', sw: 'se' },
    hc = { n: 's', s: 'n', nw: 'sw', ne: 'se', se: 'ne', sw: 'nw' },
    x3 = {
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
    R3 = {
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
  function Mr(n) {
    return Symbol('JSCA_4212_4216'), { type: n };
  }
  function P3(n) {
    return Symbol('JSCA_4217_4219'), !n.ctrlKey && !n.button;
  }
  function I3() {
    Symbol('JSCA_4220_4227');
    var n = this.ownerSVGElement || this;
    return n.hasAttribute('viewBox')
      ? ((n = n.viewBox.baseVal),
        [
          [n.x, n.y],
          [n.x + n.width, n.y + n.height],
        ])
      : [
          [0, 0],
          [n.width.baseVal.value, n.height.baseVal.value],
        ];
  }
  function z3() {
    return (
      Symbol('JSCA_4228_4230'),
      navigator.maxTouchPoints || 'ontouchstart' in this
    );
  }
  function ba(n) {
    for (Symbol('JSCA_4231_4234'); !n.__brush; )
      if (!(n = n.parentNode)) return;
    return n.__brush;
  }
  function D3(n) {
    return Symbol('JSCA_4235_4237'), n[0][0] === n[1][0] || n[0][1] === n[1][1];
  }
  function F3(n) {
    Symbol('JSCA_4238_4241');
    var t = n.__brush;
    return t ? t.dim.output(t.selection) : null;
  }
  function O3() {
    return Symbol('JSCA_4242_4244'), da(Vi);
  }
  function L3() {
    return Symbol('JSCA_4245_4247'), da(Wi);
  }
  function q3() {
    return Symbol('JSCA_4248_4250'), da(N3);
  }
  function da(n) {
    Symbol('JSCA_4251_4587');
    var t = I3,
      e = P3,
      r = z3,
      i = !0,
      o = Kt('start', 'brush', 'end'),
      l = 6,
      a;
    function f(m) {
      Symbol('JSCA_4253_4270');
      var d = m
        .property('__brush', b)
        .selectAll('.overlay')
        .data([Mr('overlay')]);
      d
        .enter()
        .append('rect')
        .attr('class', 'overlay')
        .attr('pointer-events', 'all')
        .attr('cursor', Jt.overlay)
        .merge(d)
        .each(function () {
          Symbol('JSCA_4255_4258');
          var C = ba(this).extent;
          Mn(this)
            .attr('x', C[0][0])
            .attr('y', C[0][1])
            .attr('width', C[1][0] - C[0][0])
            .attr('height', C[1][1] - C[0][1]);
        }),
        m
          .selectAll('.selection')
          .data([Mr('selection')])
          .enter()
          .append('rect')
          .attr('class', 'selection')
          .attr('cursor', Jt.selection)
          .attr('fill', '#777')
          .attr('fill-opacity', 0.3)
          .attr('stroke', '#fff')
          .attr('shape-rendering', 'crispEdges');
      var g = m.selectAll('.handle').data(n.handles, function (C) {
        return Symbol('JSCA_4260_4262'), C.type;
      });
      g.exit().remove(),
        g
          .enter()
          .append('rect')
          .attr('class', function (C) {
            return Symbol('JSCA_4264_4266'), 'handle handle--' + C.type;
          })
          .attr('cursor', function (C) {
            return Symbol('JSCA_4266_4268'), Jt[C.type];
          }),
        m
          .each(u)
          .attr('fill', 'none')
          .attr('pointer-events', 'all')
          .on('mousedown.brush', _)
          .filter(r)
          .on('touchstart.brush', _)
          .on('touchmove.brush', S)
          .on('touchend.brush touchcancel.brush', y)
          .style('touch-action', 'none')
          .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
    }
    (f.move = function (m, d, g) {
      Symbol('JSCA_4271_4295'),
        m.tween
          ? m
              .on('start.brush', function (C) {
                Symbol('JSCA_4273_4275'),
                  c(this, arguments).beforestart().start(C);
              })
              .on('interrupt.brush end.brush', function (C) {
                Symbol('JSCA_4275_4277'), c(this, arguments).end(C);
              })
              .tween('brush', function () {
                Symbol('JSCA_4277_4285');
                var C = this,
                  A = C.__brush,
                  J = c(C, arguments),
                  p = A.selection,
                  $ = n.input(
                    typeof d == 'function' ? d.apply(this, arguments) : d,
                    A.extent
                  ),
                  N = zt(p, $);
                function k(E) {
                  Symbol('JSCA_4279_4283'),
                    (A.selection = E === 1 && $ === null ? null : N(E)),
                    u.call(C),
                    J.brush();
                }
                return p !== null && $ !== null ? k : k(1);
              })
          : m.each(function () {
              Symbol('JSCA_4287_4293');
              var C = this,
                A = arguments,
                J = C.__brush,
                p = n.input(
                  typeof d == 'function' ? d.apply(C, A) : d,
                  J.extent
                ),
                $ = c(C, A).beforestart();
              le(C),
                (J.selection = p === null ? null : p),
                u.call(C),
                $.start(g).brush(g).end(g);
            });
    }),
      (f.clear = function (m, d) {
        Symbol('JSCA_4296_4298'), f.move(m, null, d);
      });
    function u() {
      Symbol('JSCA_4299_4315');
      var m = Mn(this),
        d = ba(this).selection;
      d
        ? (m
            .selectAll('.selection')
            .style('display', null)
            .attr('x', d[0][0])
            .attr('y', d[0][1])
            .attr('width', d[1][0] - d[0][0])
            .attr('height', d[1][1] - d[0][1]),
          m
            .selectAll('.handle')
            .style('display', null)
            .attr('x', function (g) {
              return (
                Symbol('JSCA_4303_4305'),
                g.type[g.type.length - 1] === 'e'
                  ? d[1][0] - l / 2
                  : d[0][0] - l / 2
              );
            })
            .attr('y', function (g) {
              return (
                Symbol('JSCA_4305_4307'),
                g.type[0] === 's' ? d[1][1] - l / 2 : d[0][1] - l / 2
              );
            })
            .attr('width', function (g) {
              return (
                Symbol('JSCA_4307_4309'),
                g.type === 'n' || g.type === 's' ? d[1][0] - d[0][0] + l : l
              );
            })
            .attr('height', function (g) {
              return (
                Symbol('JSCA_4309_4311'),
                g.type === 'e' || g.type === 'w' ? d[1][1] - d[0][1] + l : l
              );
            }))
        : m
            .selectAll('.selection,.handle')
            .style('display', 'none')
            .attr('x', null)
            .attr('y', null)
            .attr('width', null)
            .attr('height', null);
    }
    function c(m, d, g) {
      Symbol('JSCA_4316_4319');
      var C = m.__brush.emitter;
      return C && (!g || !C.clean) ? C : new s(m, d, g);
    }
    function s(m, d, g) {
      Symbol('JSCA_4320_4326'),
        (this.that = m),
        (this.args = d),
        (this.state = m.__brush),
        (this.active = 0),
        (this.clean = g);
    }
    s.prototype = {
      beforestart: function () {
        return (
          Symbol('JSCA_4328_4331'),
          ++this.active === 1 &&
            ((this.state.emitter = this), (this.starting = !0)),
          this
        );
      },
      start: function (m, d) {
        return (
          Symbol('JSCA_4332_4335'),
          this.starting
            ? ((this.starting = !1), this.emit('start', m, d))
            : this.emit('brush', m),
          this
        );
      },
      brush: function (m, d) {
        return Symbol('JSCA_4336_4339'), this.emit('brush', m, d), this;
      },
      end: function (m, d) {
        return (
          Symbol('JSCA_4340_4343'),
          --this.active === 0 &&
            (delete this.state.emitter, this.emit('end', m, d)),
          this
        );
      },
      emit: function (m, d, g) {
        Symbol('JSCA_4344_4353');
        var C = Mn(this.that).datum();
        o.call(
          m,
          this.that,
          new E3(m, {
            sourceEvent: d,
            target: f,
            selection: n.output(this.state.selection),
            mode: g,
            dispatch: o,
          }),
          C
        );
      },
    };
    function _(m) {
      if (
        (Symbol('JSCA_4355_4552'),
        (a && !m.touches) || !e.apply(this, arguments))
      )
        return;
      var d = this,
        g = m.target.__data__.type,
        C =
          (i && m.metaKey ? (g = 'overlay') : g) === 'selection'
            ? cc
            : i && m.altKey
            ? ze
            : Ie,
        A = n === Wi ? null : x3[g],
        J = n === Vi ? null : R3[g],
        p = ba(d),
        $ = p.extent,
        N = p.selection,
        k = $[0][0],
        E,
        w,
        P = $[0][1],
        x,
        v,
        T = $[1][0],
        M,
        R,
        z = $[1][1],
        I,
        F,
        q = 0,
        U = 0,
        rn,
        nn = A && J && i && m.shiftKey,
        j,
        dn,
        en = Array.from(m.touches || [m], (X) => {
          const mn = X.identifier;
          return (X = Vn(X, d)), (X.point0 = X.slice()), (X.identifier = mn), X;
        });
      le(d);
      var yn = c(d, arguments, !0).beforestart();
      if (g === 'overlay') {
        N && (rn = !0);
        const X = [en[0], en[1] || en[0]];
        (p.selection = N =
          [
            [
              (E = n === Wi ? k : $n(X[0][0], X[1][0])),
              (x = n === Vi ? P : $n(X[0][1], X[1][1])),
            ],
            [
              (M = n === Wi ? T : Tn(X[0][0], X[1][0])),
              (I = n === Vi ? z : Tn(X[0][1], X[1][1])),
            ],
          ]),
          en.length > 1 && hn(m);
      } else (E = N[0][0]), (x = N[0][1]), (M = N[1][0]), (I = N[1][1]);
      (w = E), (v = x), (R = M), (F = I);
      var O = Mn(d).attr('pointer-events', 'none'),
        G = O.selectAll('.overlay').attr('cursor', Jt[g]);
      if (m.touches) (yn.moved = D), (yn.ended = on);
      else {
        var Q = Mn(m.view)
          .on('mousemove.brush', D, !0)
          .on('mouseup.brush', on, !0);
        i && Q.on('keydown.brush', Un, !0).on('keyup.brush', Bn, !0),
          vi(m.view);
      }
      u.call(d), yn.start(m, C.name);
      function D(X) {
        Symbol('JSCA_4394_4406');
        for (const mn of X.changedTouches || [X])
          for (const fi of en)
            fi.identifier === mn.identifier && (fi.cur = Vn(mn, d));
        if (nn && !j && !dn && en.length === 1) {
          const mn = en[0];
          _c(mn.cur[0] - mn[0]) > _c(mn.cur[1] - mn[1]) ? (dn = !0) : (j = !0);
        }
        for (const mn of en)
          mn.cur && ((mn[0] = mn.cur[0]), (mn[1] = mn.cur[1]));
        (rn = !0), ha(X), hn(X);
      }
      function hn(X) {
        Symbol('JSCA_4407_4458');
        const mn = en[0],
          fi = mn.point0;
        var Gt;
        switch (((q = mn[0] - fi[0]), (U = mn[1] - fi[1]), C)) {
          case ma:
          case cc: {
            A && ((q = Tn(k - E, $n(T - M, q))), (w = E + q), (R = M + q)),
              J && ((U = Tn(P - x, $n(z - I, U))), (v = x + U), (F = I + U));
            break;
          }
          case Ie: {
            en[1]
              ? (A &&
                  ((w = Tn(k, $n(T, en[0][0]))),
                  (R = Tn(k, $n(T, en[1][0]))),
                  (A = 1)),
                J &&
                  ((v = Tn(P, $n(z, en[0][1]))),
                  (F = Tn(P, $n(z, en[1][1]))),
                  (J = 1)))
              : (A < 0
                  ? ((q = Tn(k - E, $n(T - E, q))), (w = E + q), (R = M))
                  : A > 0 &&
                    ((q = Tn(k - M, $n(T - M, q))), (w = E), (R = M + q)),
                J < 0
                  ? ((U = Tn(P - x, $n(z - x, U))), (v = x + U), (F = I))
                  : J > 0 &&
                    ((U = Tn(P - I, $n(z - I, U))), (v = x), (F = I + U)));
            break;
          }
          case ze: {
            A && ((w = Tn(k, $n(T, E - q * A))), (R = Tn(k, $n(T, M + q * A)))),
              J &&
                ((v = Tn(P, $n(z, x - U * J))), (F = Tn(P, $n(z, I + U * J))));
            break;
          }
        }
        R < w &&
          ((A *= -1),
          (Gt = E),
          (E = M),
          (M = Gt),
          (Gt = w),
          (w = R),
          (R = Gt),
          g in Sc && G.attr('cursor', Jt[(g = Sc[g])])),
          F < v &&
            ((J *= -1),
            (Gt = x),
            (x = I),
            (I = Gt),
            (Gt = v),
            (v = F),
            (F = Gt),
            g in hc && G.attr('cursor', Jt[(g = hc[g])])),
          p.selection && (N = p.selection),
          j && ((w = N[0][0]), (R = N[1][0])),
          dn && ((v = N[0][1]), (F = N[1][1])),
          (N[0][0] !== w || N[0][1] !== v || N[1][0] !== R || N[1][1] !== F) &&
            ((p.selection = [
              [w, v],
              [R, F],
            ]),
            u.call(d),
            yn.brush(X, C.name));
      }
      function on(X) {
        if ((Symbol('JSCA_4459_4476'), k3(X), X.touches)) {
          if (X.touches.length) return;
          a && clearTimeout(a),
            (a = setTimeout(function () {
              Symbol('JSCA_4464_4466'), (a = null);
            }, 500));
        } else
          wi(X.view, rn),
            Q.on(
              'keydown.brush keyup.brush mousemove.brush mouseup.brush',
              null
            );
        O.attr('pointer-events', 'all'),
          G.attr('cursor', Jt.overlay),
          p.selection && (N = p.selection),
          D3(N) && ((p.selection = null), u.call(d)),
          yn.end(X, C.name);
      }
      function Un(X) {
        switch ((Symbol('JSCA_4477_4509'), X.keyCode)) {
          case 16: {
            nn = A && J;
            break;
          }
          case 18: {
            C === Ie &&
              (A && ((M = R - q * A), (E = w + q * A)),
              J && ((I = F - U * J), (x = v + U * J)),
              (C = ze),
              hn(X));
            break;
          }
          case 32: {
            (C === Ie || C === ze) &&
              (A < 0 ? (M = R - q) : A > 0 && (E = w - q),
              J < 0 ? (I = F - U) : J > 0 && (x = v - U),
              (C = ma),
              G.attr('cursor', Jt.selection),
              hn(X));
            break;
          }
          default:
            return;
        }
        ha(X);
      }
      function Bn(X) {
        switch ((Symbol('JSCA_4510_4551'), X.keyCode)) {
          case 16: {
            nn && ((j = dn = nn = !1), hn(X));
            break;
          }
          case 18: {
            C === ze &&
              (A < 0 ? (M = R) : A > 0 && (E = w),
              J < 0 ? (I = F) : J > 0 && (x = v),
              (C = Ie),
              hn(X));
            break;
          }
          case 32: {
            C === ma &&
              (X.altKey
                ? (A && ((M = R - q * A), (E = w + q * A)),
                  J && ((I = F - U * J), (x = v + U * J)),
                  (C = ze))
                : (A < 0 ? (M = R) : A > 0 && (E = w),
                  J < 0 ? (I = F) : J > 0 && (x = v),
                  (C = Ie)),
              G.attr('cursor', Jt[g]),
              hn(X));
            break;
          }
          default:
            return;
        }
        ha(X);
      }
    }
    function S(m) {
      Symbol('JSCA_4553_4555'), c(this, arguments).moved(m);
    }
    function y(m) {
      Symbol('JSCA_4556_4558'), c(this, arguments).ended(m);
    }
    function b() {
      Symbol('JSCA_4559_4566');
      var m = this.__brush || { selection: null };
      return (m.extent = ya(t.apply(this, arguments))), (m.dim = n), m;
    }
    return (
      (f.extent = function (m) {
        return (
          Symbol('JSCA_4567_4569'),
          arguments.length
            ? ((t = typeof m == 'function' ? m : Sa(ya(m))), f)
            : t
        );
      }),
      (f.filter = function (m) {
        return (
          Symbol('JSCA_4570_4572'),
          arguments.length ? ((e = typeof m == 'function' ? m : Sa(!!m)), f) : e
        );
      }),
      (f.touchable = function (m) {
        return (
          Symbol('JSCA_4573_4575'),
          arguments.length ? ((r = typeof m == 'function' ? m : Sa(!!m)), f) : r
        );
      }),
      (f.handleSize = function (m) {
        return Symbol('JSCA_4576_4578'), arguments.length ? ((l = +m), f) : l;
      }),
      (f.keyModifiers = function (m) {
        return Symbol('JSCA_4579_4581'), arguments.length ? ((i = !!m), f) : i;
      }),
      (f.on = function () {
        Symbol('JSCA_4582_4585');
        var m = o.on.apply(o, arguments);
        return m === o ? f : m;
      }),
      f
    );
  }
  var mc = Math.abs,
    De = Math.cos,
    Fe = Math.sin,
    yc = Math.PI,
    Zi = yc / 2,
    bc = yc * 2,
    dc = Math.max,
    Aa = 1e-12;
  function Ca(n, t) {
    return (
      Symbol('JSCA_4596_4600'), Array.from({ length: t - n }, (e, r) => n + r)
    );
  }
  function Y3(n) {
    return (
      Symbol('JSCA_4601_4605'),
      function (t, e) {
        return (
          Symbol('JSCA_4602_4604'),
          n(t.source.value + t.target.value, e.source.value + e.target.value)
        );
      }
    );
  }
  function U3() {
    return Symbol('JSCA_4606_4608'), ga(!1, !1);
  }
  function B3() {
    return Symbol('JSCA_4609_4611'), ga(!1, !0);
  }
  function H3() {
    return Symbol('JSCA_4612_4614'), ga(!0, !1);
  }
  function ga(n, t) {
    Symbol('JSCA_4615_4730');
    var e = 0,
      r = null,
      i = null,
      o = null;
    function l(a) {
      Symbol('JSCA_4617_4716');
      var f = a.length,
        u = new Array(f),
        c = Ca(0, f),
        s = new Array(f * f),
        _ = new Array(f),
        S = 0,
        y;
      a = Float64Array.from(
        { length: f * f },
        t ? (b, m) => a[m % f][(m / f) | 0] : (b, m) => a[(m / f) | 0][m % f]
      );
      for (let b = 0; b < f; ++b) {
        let m = 0;
        for (let d = 0; d < f; ++d) m += a[b * f + d] + n * a[d * f + b];
        S += u[b] = m;
      }
      (S = dc(0, bc - e * f) / S), (y = S ? e : bc / f);
      {
        let b = 0;
        r && c.sort((m, d) => r(u[m], u[d]));
        for (const m of c) {
          const d = b;
          if (n) {
            const g = Ca(~f + 1, f).filter((C) =>
              C < 0 ? a[~C * f + m] : a[m * f + C]
            );
            i &&
              g.sort((C, A) =>
                i(
                  C < 0 ? -a[~C * f + m] : a[m * f + C],
                  A < 0 ? -a[~A * f + m] : a[m * f + A]
                )
              );
            for (const C of g)
              if (C < 0) {
                const A =
                  s[~C * f + m] ||
                  (s[~C * f + m] = { source: null, target: null });
                A.target = {
                  index: m,
                  startAngle: b,
                  endAngle: (b += a[~C * f + m] * S),
                  value: a[~C * f + m],
                };
              } else {
                const A =
                  s[m * f + C] ||
                  (s[m * f + C] = { source: null, target: null });
                A.source = {
                  index: m,
                  startAngle: b,
                  endAngle: (b += a[m * f + C] * S),
                  value: a[m * f + C],
                };
              }
            _[m] = { index: m, startAngle: d, endAngle: b, value: u[m] };
          } else {
            const g = Ca(0, f).filter((C) => a[m * f + C] || a[C * f + m]);
            i && g.sort((C, A) => i(a[m * f + C], a[m * f + A]));
            for (const C of g) {
              let A;
              if (
                (m < C
                  ? ((A =
                      s[m * f + C] ||
                      (s[m * f + C] = { source: null, target: null })),
                    (A.source = {
                      index: m,
                      startAngle: b,
                      endAngle: (b += a[m * f + C] * S),
                      value: a[m * f + C],
                    }))
                  : ((A =
                      s[C * f + m] ||
                      (s[C * f + m] = { source: null, target: null })),
                    (A.target = {
                      index: m,
                      startAngle: b,
                      endAngle: (b += a[m * f + C] * S),
                      value: a[m * f + C],
                    }),
                    m === C && (A.source = A.target)),
                A.source && A.target && A.source.value < A.target.value)
              ) {
                const J = A.source;
                (A.source = A.target), (A.target = J);
              }
            }
            _[m] = { index: m, startAngle: d, endAngle: b, value: u[m] };
          }
          b += y;
        }
      }
      return (s = Object.values(s)), (s.groups = _), o ? s.sort(o) : s;
    }
    return (
      (l.padAngle = function (a) {
        return (
          Symbol('JSCA_4717_4719'), arguments.length ? ((e = dc(0, a)), l) : e
        );
      }),
      (l.sortGroups = function (a) {
        return Symbol('JSCA_4720_4722'), arguments.length ? ((r = a), l) : r;
      }),
      (l.sortSubgroups = function (a) {
        return Symbol('JSCA_4723_4725'), arguments.length ? ((i = a), l) : i;
      }),
      (l.sortChords = function (a) {
        return (
          Symbol('JSCA_4726_4728'),
          arguments.length
            ? (a == null ? (o = null) : ((o = Y3(a))._ = a), l)
            : o && o._
        );
      }),
      l
    );
  }
  const Ja = Math.PI,
    pa = 2 * Ja,
    ae = 1e-6,
    X3 = pa - ae;
  function Ac(n) {
    Symbol('JSCA_4732_4737'), (this._ += n[0]);
    for (let t = 1, e = n.length; t < e; ++t) this._ += arguments[t] + n[t];
  }
  function G3(n) {
    Symbol('JSCA_4738_4749');
    let t = Math.floor(n);
    if (!(t >= 0)) throw new Error(`invalid digits: ${n}`);
    if (t > 15) return Ac;
    const e = 10 ** t;
    return function (r) {
      Symbol('JSCA_4743_4748'), (this._ += r[0]);
      for (let i = 1, o = r.length; i < o; ++i)
        this._ += Math.round(arguments[i] * e) / e + r[i];
    };
  }
  let Tr = class {
    constructor(t) {
      Symbol('JSCA_4751_4755'),
        (this._x0 = this._y0 = this._x1 = this._y1 = null),
        (this._ = ''),
        (this._append = t == null ? Ac : G3(t));
    }
    moveTo(t, e) {
      Symbol('JSCA_4756_4758'),
        this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
          +e)}`;
    }
    closePath() {
      Symbol('JSCA_4759_4764'),
        this._x1 !== null &&
          ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
    }
    lineTo(t, e) {
      Symbol('JSCA_4765_4767'),
        this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
    }
    quadraticCurveTo(t, e, r, i) {
      Symbol('JSCA_4768_4770'),
        this._append`Q${+t},${+e},${(this._x1 = +r)},${(this._y1 = +i)}`;
    }
    bezierCurveTo(t, e, r, i, o, l) {
      Symbol('JSCA_4771_4773'),
        this._append`C${+t},${+e},${+r},${+i},${(this._x1 = +o)},${(this._y1 =
          +l)}`;
    }
    arcTo(t, e, r, i, o) {
      if (
        (Symbol('JSCA_4774_4789'),
        (t = +t),
        (e = +e),
        (r = +r),
        (i = +i),
        (o = +o),
        o < 0)
      )
        throw new Error(`negative radius: ${o}`);
      let l = this._x1,
        a = this._y1,
        f = r - t,
        u = i - e,
        c = l - t,
        s = a - e,
        _ = c * c + s * s;
      if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
      else if (_ > ae)
        if (!(Math.abs(s * f - u * c) > ae) || !o)
          this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
        else {
          let S = r - l,
            y = i - a,
            b = f * f + u * u,
            m = S * S + y * y,
            d = Math.sqrt(b),
            g = Math.sqrt(_),
            C = o * Math.tan((Ja - Math.acos((b + _ - m) / (2 * d * g))) / 2),
            A = C / g,
            J = C / d;
          Math.abs(A - 1) > ae && this._append`L${t + A * c},${e + A * s}`,
            this._append`A${o},${o},0,0,${+(s * S > c * y)},${(this._x1 =
              t + J * f)},${(this._y1 = e + J * u)}`;
        }
    }
    arc(t, e, r, i, o, l) {
      if (
        (Symbol('JSCA_4790_4806'),
        (t = +t),
        (e = +e),
        (r = +r),
        (l = !!l),
        r < 0)
      )
        throw new Error(`negative radius: ${r}`);
      let a = r * Math.cos(i),
        f = r * Math.sin(i),
        u = t + a,
        c = e + f,
        s = 1 ^ l,
        _ = l ? i - o : o - i;
      this._x1 === null
        ? this._append`M${u},${c}`
        : (Math.abs(this._x1 - u) > ae || Math.abs(this._y1 - c) > ae) &&
          this._append`L${u},${c}`,
        r &&
          (_ < 0 && (_ = (_ % pa) + pa),
          _ > X3
            ? this._append`A${r},${r},0,1,${s},${t - a},${
                e - f
              }A${r},${r},0,1,${s},${(this._x1 = u)},${(this._y1 = c)}`
            : _ > ae &&
              this._append`A${r},${r},0,${+(_ >= Ja)},${s},${(this._x1 =
                t + r * Math.cos(o))},${(this._y1 = e + r * Math.sin(o))}`);
    }
    rect(t, e, r, i) {
      Symbol('JSCA_4807_4809'),
        this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
          +e)}h${(r = +r)}v${+i}h${-r}Z`;
    }
    toString() {
      return Symbol('JSCA_4810_4812'), this._;
    }
  };
  function va() {
    return Symbol('JSCA_4814_4816'), new Tr();
  }
  va.prototype = Tr.prototype;
  function V3(n = 3) {
    return Symbol('JSCA_4818_4820'), new Tr(+n);
  }
  var W3 = Array.prototype.slice;
  function ue(n) {
    return (
      Symbol('JSCA_4822_4826'),
      function () {
        return Symbol('JSCA_4823_4825'), n;
      }
    );
  }
  function Z3(n) {
    return Symbol('JSCA_4827_4829'), n.source;
  }
  function Q3(n) {
    return Symbol('JSCA_4830_4832'), n.target;
  }
  function Cc(n) {
    return Symbol('JSCA_4833_4835'), n.radius;
  }
  function K3(n) {
    return Symbol('JSCA_4836_4838'), n.startAngle;
  }
  function j3(n) {
    return Symbol('JSCA_4839_4841'), n.endAngle;
  }
  function nd() {
    return Symbol('JSCA_4842_4844'), 0;
  }
  function td() {
    return Symbol('JSCA_4845_4847'), 10;
  }
  function gc(n) {
    Symbol('JSCA_4848_4905');
    var t = Z3,
      e = Q3,
      r = Cc,
      i = Cc,
      o = K3,
      l = j3,
      a = nd,
      f = null;
    function u() {
      Symbol('JSCA_4850_4873');
      var c,
        s = t.apply(this, arguments),
        _ = e.apply(this, arguments),
        S = a.apply(this, arguments) / 2,
        y = W3.call(arguments),
        b = +r.apply(this, ((y[0] = s), y)),
        m = o.apply(this, y) - Zi,
        d = l.apply(this, y) - Zi,
        g = +i.apply(this, ((y[0] = _), y)),
        C = o.apply(this, y) - Zi,
        A = l.apply(this, y) - Zi;
      if (
        (f || (f = c = va()),
        S > Aa &&
          (mc(d - m) > S * 2 + Aa
            ? d > m
              ? ((m += S), (d -= S))
              : ((m -= S), (d += S))
            : (m = d = (m + d) / 2),
          mc(A - C) > S * 2 + Aa
            ? A > C
              ? ((C += S), (A -= S))
              : ((C -= S), (A += S))
            : (C = A = (C + A) / 2)),
        f.moveTo(b * De(m), b * Fe(m)),
        f.arc(0, 0, b, m, d),
        m !== C || d !== A)
      )
        if (n) {
          var J = +n.apply(this, arguments),
            p = g - J,
            $ = (C + A) / 2;
          f.quadraticCurveTo(0, 0, p * De(C), p * Fe(C)),
            f.lineTo(g * De($), g * Fe($)),
            f.lineTo(p * De(A), p * Fe(A));
        } else
          f.quadraticCurveTo(0, 0, g * De(C), g * Fe(C)), f.arc(0, 0, g, C, A);
      if ((f.quadraticCurveTo(0, 0, b * De(m), b * Fe(m)), f.closePath(), c))
        return (f = null), c + '' || null;
    }
    return (
      n &&
        (u.headRadius = function (c) {
          return (
            Symbol('JSCA_4874_4876'),
            arguments.length
              ? ((n = typeof c == 'function' ? c : ue(+c)), u)
              : n
          );
        }),
      (u.radius = function (c) {
        return (
          Symbol('JSCA_4877_4879'),
          arguments.length
            ? ((r = i = typeof c == 'function' ? c : ue(+c)), u)
            : r
        );
      }),
      (u.sourceRadius = function (c) {
        return (
          Symbol('JSCA_4880_4882'),
          arguments.length ? ((r = typeof c == 'function' ? c : ue(+c)), u) : r
        );
      }),
      (u.targetRadius = function (c) {
        return (
          Symbol('JSCA_4883_4885'),
          arguments.length ? ((i = typeof c == 'function' ? c : ue(+c)), u) : i
        );
      }),
      (u.startAngle = function (c) {
        return (
          Symbol('JSCA_4886_4888'),
          arguments.length ? ((o = typeof c == 'function' ? c : ue(+c)), u) : o
        );
      }),
      (u.endAngle = function (c) {
        return (
          Symbol('JSCA_4889_4891'),
          arguments.length ? ((l = typeof c == 'function' ? c : ue(+c)), u) : l
        );
      }),
      (u.padAngle = function (c) {
        return (
          Symbol('JSCA_4892_4894'),
          arguments.length ? ((a = typeof c == 'function' ? c : ue(+c)), u) : a
        );
      }),
      (u.source = function (c) {
        return Symbol('JSCA_4895_4897'), arguments.length ? ((t = c), u) : t;
      }),
      (u.target = function (c) {
        return Symbol('JSCA_4898_4900'), arguments.length ? ((e = c), u) : e;
      }),
      (u.context = function (c) {
        return (
          Symbol('JSCA_4901_4903'), arguments.length ? ((f = c ?? null), u) : f
        );
      }),
      u
    );
  }
  function ed() {
    return Symbol('JSCA_4906_4908'), gc();
  }
  function rd() {
    return Symbol('JSCA_4909_4911'), gc(td);
  }
  var id = Array.prototype,
    Jc = id.slice;
  function od(n, t) {
    return Symbol('JSCA_4914_4916'), n - t;
  }
  function ld(n) {
    Symbol('JSCA_4917_4921');
    for (
      var t = 0,
        e = n.length,
        r = n[e - 1][1] * n[0][0] - n[e - 1][0] * n[0][1];
      ++t < e;

    )
      r += n[t - 1][1] * n[t][0] - n[t - 1][0] * n[t][1];
    return r;
  }
  var Ft = (n) => () => n;
  function ad(n, t) {
    Symbol('JSCA_4923_4927');
    for (var e = -1, r = t.length, i; ++e < r; )
      if ((i = ud(n, t[e]))) return i;
    return 0;
  }
  function ud(n, t) {
    Symbol('JSCA_4928_4936');
    for (
      var e = t[0], r = t[1], i = -1, o = 0, l = n.length, a = l - 1;
      o < l;
      a = o++
    ) {
      var f = n[o],
        u = f[0],
        c = f[1],
        s = n[a],
        _ = s[0],
        S = s[1];
      if (fd(f, s, t)) return 0;
      c > r != S > r && e < ((_ - u) * (r - c)) / (S - c) + u && (i = -i);
    }
    return i;
  }
  function fd(n, t, e) {
    Symbol('JSCA_4937_4940');
    var r;
    return cd(n, t, e) && _d(n[(r = +(n[0] === t[0]))], e[r], t[r]);
  }
  function cd(n, t, e) {
    return (
      Symbol('JSCA_4941_4943'),
      (t[0] - n[0]) * (e[1] - n[1]) === (e[0] - n[0]) * (t[1] - n[1])
    );
  }
  function _d(n, t, e) {
    return Symbol('JSCA_4944_4946'), (n <= t && t <= e) || (e <= t && t <= n);
  }
  function sd() {
    Symbol('JSCA_4947_4947');
  }
  var pt = [
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
  function wa() {
    Symbol('JSCA_4949_5092');
    var n = 1,
      t = 1,
      e = Ml,
      r = f;
    function i(u) {
      Symbol('JSCA_4951_4962');
      var c = e(u);
      if (Array.isArray(c)) c = c.slice().sort(od);
      else {
        const s = ar(u, Sd);
        for (c = Zt(...wl(s[0], s[1], c), c); c[c.length - 1] >= s[1]; )
          c.pop();
        for (; c[1] < s[0]; ) c.shift();
      }
      return c.map((s) => o(u, s));
    }
    function o(u, c) {
      Symbol('JSCA_4963_4984');
      const s = c == null ? NaN : +c;
      if (isNaN(s)) throw new Error(`invalid value: ${c}`);
      var _ = [],
        S = [];
      return (
        l(u, s, function (y) {
          Symbol('JSCA_4967_4970'),
            r(y, u, s),
            ld(y) > 0 ? _.push([y]) : S.push(y);
        }),
        S.forEach(function (y) {
          Symbol('JSCA_4971_4978');
          for (var b = 0, m = _.length, d; b < m; ++b)
            if (ad((d = _[b])[0], y) !== -1) {
              d.push(y);
              return;
            }
        }),
        { type: 'MultiPolygon', value: c, coordinates: _ }
      );
    }
    function l(u, c, s) {
      Symbol('JSCA_4985_5063');
      var _ = new Array(),
        S = new Array(),
        y,
        b,
        m,
        d,
        g,
        C;
      for (y = b = -1, d = fe(u[0], c), pt[d << 1].forEach(A); ++y < n - 1; )
        (m = d), (d = fe(u[y + 1], c)), pt[m | (d << 1)].forEach(A);
      for (pt[d << 0].forEach(A); ++b < t - 1; ) {
        for (
          y = -1,
            d = fe(u[b * n + n], c),
            g = fe(u[b * n], c),
            pt[(d << 1) | (g << 2)].forEach(A);
          ++y < n - 1;

        )
          (m = d),
            (d = fe(u[b * n + n + y + 1], c)),
            (C = g),
            (g = fe(u[b * n + y + 1], c)),
            pt[m | (d << 1) | (g << 2) | (C << 3)].forEach(A);
        pt[d | (g << 3)].forEach(A);
      }
      for (y = -1, g = u[b * n] >= c, pt[g << 2].forEach(A); ++y < n - 1; )
        (C = g),
          (g = fe(u[b * n + y + 1], c)),
          pt[(g << 2) | (C << 3)].forEach(A);
      pt[g << 3].forEach(A);
      function A(J) {
        Symbol('JSCA_5015_5062');
        var p = [J[0][0] + y, J[0][1] + b],
          $ = [J[1][0] + y, J[1][1] + b],
          N = a(p),
          k = a($),
          E,
          w;
        (E = S[N])
          ? (w = _[k])
            ? (delete S[E.end],
              delete _[w.start],
              E === w
                ? (E.ring.push($), s(E.ring))
                : (_[E.start] = S[w.end] =
                    {
                      start: E.start,
                      end: w.end,
                      ring: E.ring.concat(w.ring),
                    }))
            : (delete S[E.end], E.ring.push($), (S[(E.end = k)] = E))
          : (E = _[k])
          ? (w = S[N])
            ? (delete _[E.start],
              delete S[w.end],
              E === w
                ? (E.ring.push($), s(E.ring))
                : (_[w.start] = S[E.end] =
                    {
                      start: w.start,
                      end: E.end,
                      ring: w.ring.concat(E.ring),
                    }))
            : (delete _[E.start], E.ring.unshift(p), (_[(E.start = N)] = E))
          : (_[N] = S[k] = { start: N, end: k, ring: [p, $] });
      }
    }
    function a(u) {
      return Symbol('JSCA_5064_5066'), u[0] * 2 + u[1] * (n + 1) * 4;
    }
    function f(u, c, s) {
      Symbol('JSCA_5067_5077'),
        u.forEach(function (_) {
          Symbol('JSCA_5068_5076');
          var S = _[0],
            y = _[1],
            b = S | 0,
            m = y | 0,
            d = Ma(c[m * n + b]);
          S > 0 &&
            S < n &&
            b === S &&
            (_[0] = pc(S, Ma(c[m * n + b - 1]), d, s)),
            y > 0 &&
              y < t &&
              m === y &&
              (_[1] = pc(y, Ma(c[(m - 1) * n + b]), d, s));
        });
    }
    return (
      (i.contour = o),
      (i.size = function (u) {
        if ((Symbol('JSCA_5079_5084'), !arguments.length)) return [n, t];
        var c = Math.floor(u[0]),
          s = Math.floor(u[1]);
        if (!(c >= 0 && s >= 0)) throw new Error('invalid size');
        return (n = c), (t = s), i;
      }),
      (i.thresholds = function (u) {
        return (
          Symbol('JSCA_5085_5087'),
          arguments.length
            ? ((e =
                typeof u == 'function'
                  ? u
                  : Array.isArray(u)
                  ? Ft(Jc.call(u))
                  : Ft(u)),
              i)
            : e
        );
      }),
      (i.smooth = function (u) {
        return (
          Symbol('JSCA_5088_5090'),
          arguments.length ? ((r = u ? f : sd), i) : r === f
        );
      }),
      i
    );
  }
  function Sd(n) {
    return Symbol('JSCA_5093_5095'), isFinite(n) ? n : NaN;
  }
  function fe(n, t) {
    return Symbol('JSCA_5096_5098'), n == null ? !1 : +n >= t;
  }
  function Ma(n) {
    return Symbol('JSCA_5099_5101'), n == null || isNaN((n = +n)) ? -1 / 0 : n;
  }
  function pc(n, t, e, r) {
    Symbol('JSCA_5102_5107');
    const i = r - t,
      o = e - t,
      l = isFinite(i) || isFinite(o) ? i / o : Math.sign(i) / Math.sign(o);
    return isNaN(l) ? n : n + l - 0.5;
  }
  function hd(n) {
    return Symbol('JSCA_5108_5110'), n[0];
  }
  function md(n) {
    return Symbol('JSCA_5111_5113'), n[1];
  }
  function yd() {
    return Symbol('JSCA_5114_5116'), 1;
  }
  function bd() {
    Symbol('JSCA_5117_5206');
    var n = hd,
      t = md,
      e = yd,
      r = 960,
      i = 500,
      o = 20,
      l = 2,
      a = o * 3,
      f = (r + a * 2) >> l,
      u = (i + a * 2) >> l,
      c = Ft(20);
    function s(g) {
      Symbol('JSCA_5119_5137');
      var C = new Float32Array(f * u),
        A = Math.pow(2, -l),
        J = -1;
      for (const x of g) {
        var p = (n(x, ++J, g) + a) * A,
          $ = (t(x, J, g) + a) * A,
          N = +e(x, J, g);
        if (N && p >= 0 && p < f && $ >= 0 && $ < u) {
          var k = Math.floor(p),
            E = Math.floor($),
            w = p - k - 0.5,
            P = $ - E - 0.5;
          (C[k + E * f] += (1 - w) * (1 - P) * N),
            (C[k + 1 + E * f] += w * (1 - P) * N),
            (C[k + 1 + (E + 1) * f] += w * P * N),
            (C[k + (E + 1) * f] += (1 - w) * P * N);
        }
      }
      return A1({ data: C, width: f, height: u }, o * A), C;
    }
    function _(g) {
      Symbol('JSCA_5138_5144');
      var C = s(g),
        A = c(C),
        J = Math.pow(2, 2 * l);
      return (
        Array.isArray(A) || (A = Zt(Number.MIN_VALUE, fr(C) / J, A)),
        wa()
          .size([f, u])
          .thresholds(A.map((p) => p * J))(C)
          .map((p, $) => ((p.value = +A[$]), S(p)))
      );
    }
    _.contours = function (g) {
      Symbol('JSCA_5145_5156');
      var C = s(g),
        A = wa().size([f, u]),
        J = Math.pow(2, 2 * l),
        p = ($) => {
          $ = +$;
          var N = S(A.contour(C, $ * J));
          return (N.value = $), N;
        };
      return Object.defineProperty(p, 'max', { get: () => fr(C) / J }), p;
    };
    function S(g) {
      return Symbol('JSCA_5157_5160'), g.coordinates.forEach(y), g;
    }
    function y(g) {
      Symbol('JSCA_5161_5163'), g.forEach(b);
    }
    function b(g) {
      Symbol('JSCA_5164_5166'), g.forEach(m);
    }
    function m(g) {
      Symbol('JSCA_5167_5170'),
        (g[0] = g[0] * Math.pow(2, l) - a),
        (g[1] = g[1] * Math.pow(2, l) - a);
    }
    function d() {
      return (
        Symbol('JSCA_5171_5176'),
        (a = o * 3),
        (f = (r + a * 2) >> l),
        (u = (i + a * 2) >> l),
        _
      );
    }
    return (
      (_.x = function (g) {
        return (
          Symbol('JSCA_5177_5179'),
          arguments.length ? ((n = typeof g == 'function' ? g : Ft(+g)), _) : n
        );
      }),
      (_.y = function (g) {
        return (
          Symbol('JSCA_5180_5182'),
          arguments.length ? ((t = typeof g == 'function' ? g : Ft(+g)), _) : t
        );
      }),
      (_.weight = function (g) {
        return (
          Symbol('JSCA_5183_5185'),
          arguments.length ? ((e = typeof g == 'function' ? g : Ft(+g)), _) : e
        );
      }),
      (_.size = function (g) {
        if ((Symbol('JSCA_5186_5191'), !arguments.length)) return [r, i];
        var C = +g[0],
          A = +g[1];
        if (!(C >= 0 && A >= 0)) throw new Error('invalid size');
        return (r = C), (i = A), d();
      }),
      (_.cellSize = function (g) {
        if ((Symbol('JSCA_5192_5196'), !arguments.length)) return 1 << l;
        if (!((g = +g) >= 1)) throw new Error('invalid cell size');
        return (l = Math.floor(Math.log(g) / Math.LN2)), d();
      }),
      (_.thresholds = function (g) {
        return (
          Symbol('JSCA_5197_5199'),
          arguments.length
            ? ((c =
                typeof g == 'function'
                  ? g
                  : Array.isArray(g)
                  ? Ft(Jc.call(g))
                  : Ft(g)),
              _)
            : c
        );
      }),
      (_.bandwidth = function (g) {
        if ((Symbol('JSCA_5200_5204'), !arguments.length))
          return Math.sqrt(o * (o + 1));
        if (!((g = +g) >= 0)) throw new Error('invalid bandwidth');
        return (o = (Math.sqrt(4 * g * g + 1) - 1) / 2), d();
      }),
      _
    );
  }
  const vt = 11102230246251565e-32,
    En = 134217729,
    dd = (3 + 8 * vt) * vt;
  function Ta(n, t, e, r, i) {
    Symbol('JSCA_5210_5280');
    let o,
      l,
      a,
      f,
      u = t[0],
      c = r[0],
      s = 0,
      _ = 0;
    c > u == c > -u ? ((o = u), (u = t[++s])) : ((o = c), (c = r[++_]));
    let S = 0;
    if (s < n && _ < e)
      for (
        c > u == c > -u
          ? ((l = u + o), (a = o - (l - u)), (u = t[++s]))
          : ((l = c + o), (a = o - (l - c)), (c = r[++_])),
          o = l,
          a !== 0 && (i[S++] = a);
        s < n && _ < e;

      )
        c > u == c > -u
          ? ((l = o + u),
            (f = l - o),
            (a = o - (l - f) + (u - f)),
            (u = t[++s]))
          : ((l = o + c),
            (f = l - o),
            (a = o - (l - f) + (c - f)),
            (c = r[++_])),
          (o = l),
          a !== 0 && (i[S++] = a);
    for (; s < n; )
      (l = o + u),
        (f = l - o),
        (a = o - (l - f) + (u - f)),
        (u = t[++s]),
        (o = l),
        a !== 0 && (i[S++] = a);
    for (; _ < e; )
      (l = o + c),
        (f = l - o),
        (a = o - (l - f) + (c - f)),
        (c = r[++_]),
        (o = l),
        a !== 0 && (i[S++] = a);
    return (o !== 0 || S === 0) && (i[S++] = o), S;
  }
  function Ad(n, t) {
    Symbol('JSCA_5281_5285');
    let e = t[0];
    for (let r = 1; r < n; r++) e += t[r];
    return e;
  }
  function $r(n) {
    return Symbol('JSCA_5286_5288'), new Float64Array(n);
  }
  const Cd = (3 + 16 * vt) * vt,
    gd = (2 + 12 * vt) * vt,
    Jd = (9 + 64 * vt) * vt * vt,
    Oe = $r(4),
    vc = $r(8),
    wc = $r(12),
    Mc = $r(16),
    Rn = $r(4);
  function pd(n, t, e, r, i, o, l) {
    Symbol('JSCA_5297_5443');
    let a, f, u, c, s, _, S, y, b, m, d, g, C, A, J, p, $, N;
    const k = n - i,
      E = e - i,
      w = t - o,
      P = r - o;
    (A = k * P),
      (_ = En * k),
      (S = _ - (_ - k)),
      (y = k - S),
      (_ = En * P),
      (b = _ - (_ - P)),
      (m = P - b),
      (J = y * m - (A - S * b - y * b - S * m)),
      (p = w * E),
      (_ = En * w),
      (S = _ - (_ - w)),
      (y = w - S),
      (_ = En * E),
      (b = _ - (_ - E)),
      (m = E - b),
      ($ = y * m - (p - S * b - y * b - S * m)),
      (d = J - $),
      (s = J - d),
      (Oe[0] = J - (d + s) + (s - $)),
      (g = A + d),
      (s = g - A),
      (C = A - (g - s) + (d - s)),
      (d = C - p),
      (s = C - d),
      (Oe[1] = C - (d + s) + (s - p)),
      (N = g + d),
      (s = N - g),
      (Oe[2] = g - (N - s) + (d - s)),
      (Oe[3] = N);
    let x = Ad(4, Oe),
      v = gd * l;
    if (
      x >= v ||
      -x >= v ||
      ((s = n - k),
      (a = n - (k + s) + (s - i)),
      (s = e - E),
      (u = e - (E + s) + (s - i)),
      (s = t - w),
      (f = t - (w + s) + (s - o)),
      (s = r - P),
      (c = r - (P + s) + (s - o)),
      a === 0 && f === 0 && u === 0 && c === 0) ||
      ((v = Jd * l + dd * Math.abs(x)),
      (x += k * c + P * a - (w * u + E * f)),
      x >= v || -x >= v)
    )
      return x;
    (A = a * P),
      (_ = En * a),
      (S = _ - (_ - a)),
      (y = a - S),
      (_ = En * P),
      (b = _ - (_ - P)),
      (m = P - b),
      (J = y * m - (A - S * b - y * b - S * m)),
      (p = f * E),
      (_ = En * f),
      (S = _ - (_ - f)),
      (y = f - S),
      (_ = En * E),
      (b = _ - (_ - E)),
      (m = E - b),
      ($ = y * m - (p - S * b - y * b - S * m)),
      (d = J - $),
      (s = J - d),
      (Rn[0] = J - (d + s) + (s - $)),
      (g = A + d),
      (s = g - A),
      (C = A - (g - s) + (d - s)),
      (d = C - p),
      (s = C - d),
      (Rn[1] = C - (d + s) + (s - p)),
      (N = g + d),
      (s = N - g),
      (Rn[2] = g - (N - s) + (d - s)),
      (Rn[3] = N);
    const T = Ta(4, Oe, 4, Rn, vc);
    (A = k * c),
      (_ = En * k),
      (S = _ - (_ - k)),
      (y = k - S),
      (_ = En * c),
      (b = _ - (_ - c)),
      (m = c - b),
      (J = y * m - (A - S * b - y * b - S * m)),
      (p = w * u),
      (_ = En * w),
      (S = _ - (_ - w)),
      (y = w - S),
      (_ = En * u),
      (b = _ - (_ - u)),
      (m = u - b),
      ($ = y * m - (p - S * b - y * b - S * m)),
      (d = J - $),
      (s = J - d),
      (Rn[0] = J - (d + s) + (s - $)),
      (g = A + d),
      (s = g - A),
      (C = A - (g - s) + (d - s)),
      (d = C - p),
      (s = C - d),
      (Rn[1] = C - (d + s) + (s - p)),
      (N = g + d),
      (s = N - g),
      (Rn[2] = g - (N - s) + (d - s)),
      (Rn[3] = N);
    const M = Ta(T, vc, 4, Rn, wc);
    (A = a * c),
      (_ = En * a),
      (S = _ - (_ - a)),
      (y = a - S),
      (_ = En * c),
      (b = _ - (_ - c)),
      (m = c - b),
      (J = y * m - (A - S * b - y * b - S * m)),
      (p = f * u),
      (_ = En * f),
      (S = _ - (_ - f)),
      (y = f - S),
      (_ = En * u),
      (b = _ - (_ - u)),
      (m = u - b),
      ($ = y * m - (p - S * b - y * b - S * m)),
      (d = J - $),
      (s = J - d),
      (Rn[0] = J - (d + s) + (s - $)),
      (g = A + d),
      (s = g - A),
      (C = A - (g - s) + (d - s)),
      (d = C - p),
      (s = C - d),
      (Rn[1] = C - (d + s) + (s - p)),
      (N = g + d),
      (s = N - g),
      (Rn[2] = g - (N - s) + (d - s)),
      (Rn[3] = N);
    const R = Ta(M, wc, 4, Rn, Mc);
    return Mc[R - 1];
  }
  function Qi(n, t, e, r, i, o) {
    Symbol('JSCA_5444_5451');
    const l = (t - o) * (e - i),
      a = (n - i) * (r - o),
      f = l - a,
      u = Math.abs(l + a);
    return Math.abs(f) >= Cd * u ? f : -pd(n, t, e, r, i, o, u);
  }
  const Tc = Math.pow(2, -52),
    Ki = new Uint32Array(512);
  class ji {
    static from(t, e = $d, r = Ed) {
      Symbol('JSCA_5455_5464');
      const i = t.length,
        o = new Float64Array(i * 2);
      for (let l = 0; l < i; l++) {
        const a = t[l];
        (o[2 * l] = e(a)), (o[2 * l + 1] = r(a));
      }
      return new ji(o);
    }
    constructor(t) {
      Symbol('JSCA_5465_5480');
      const e = t.length >> 1;
      if (e > 0 && typeof t[0] != 'number')
        throw new Error('Expected coords to contain numbers.');
      this.coords = t;
      const r = Math.max(2 * e - 5, 0);
      (this._triangles = new Uint32Array(r * 3)),
        (this._halfedges = new Int32Array(r * 3)),
        (this._hashSize = Math.ceil(Math.sqrt(e))),
        (this._hullPrev = new Uint32Array(e)),
        (this._hullNext = new Uint32Array(e)),
        (this._hullTri = new Uint32Array(e)),
        (this._hullHash = new Int32Array(this._hashSize)),
        (this._ids = new Uint32Array(e)),
        (this._dists = new Float64Array(e)),
        this.update();
    }
    update() {
      Symbol('JSCA_5481_5640');
      const {
          coords: t,
          _hullPrev: e,
          _hullNext: r,
          _hullTri: i,
          _hullHash: o,
        } = this,
        l = t.length >> 1;
      let a = 1 / 0,
        f = 1 / 0,
        u = -1 / 0,
        c = -1 / 0;
      for (let k = 0; k < l; k++) {
        const E = t[2 * k],
          w = t[2 * k + 1];
        E < a && (a = E),
          w < f && (f = w),
          E > u && (u = E),
          w > c && (c = w),
          (this._ids[k] = k);
      }
      const s = (a + u) / 2,
        _ = (f + c) / 2;
      let S, y, b;
      for (let k = 0, E = 1 / 0; k < l; k++) {
        const w = $a(s, _, t[2 * k], t[2 * k + 1]);
        w < E && ((S = k), (E = w));
      }
      const m = t[2 * S],
        d = t[2 * S + 1];
      for (let k = 0, E = 1 / 0; k < l; k++) {
        if (k === S) continue;
        const w = $a(m, d, t[2 * k], t[2 * k + 1]);
        w < E && w > 0 && ((y = k), (E = w));
      }
      let g = t[2 * y],
        C = t[2 * y + 1],
        A = 1 / 0;
      for (let k = 0; k < l; k++) {
        if (k === S || k === y) continue;
        const E = Md(m, d, g, C, t[2 * k], t[2 * k + 1]);
        E < A && ((b = k), (A = E));
      }
      let J = t[2 * b],
        p = t[2 * b + 1];
      if (A === 1 / 0) {
        for (let w = 0; w < l; w++)
          this._dists[w] = t[2 * w] - t[0] || t[2 * w + 1] - t[1];
        Le(this._ids, this._dists, 0, l - 1);
        const k = new Uint32Array(l);
        let E = 0;
        for (let w = 0, P = -1 / 0; w < l; w++) {
          const x = this._ids[w],
            v = this._dists[x];
          v > P && ((k[E++] = x), (P = v));
        }
        (this.hull = k.subarray(0, E)),
          (this.triangles = new Uint32Array(0)),
          (this.halfedges = new Uint32Array(0));
        return;
      }
      if (Qi(m, d, g, C, J, p) < 0) {
        const k = y,
          E = g,
          w = C;
        (y = b), (g = J), (C = p), (b = k), (J = E), (p = w);
      }
      const $ = Td(m, d, g, C, J, p);
      (this._cx = $.x), (this._cy = $.y);
      for (let k = 0; k < l; k++)
        this._dists[k] = $a(t[2 * k], t[2 * k + 1], $.x, $.y);
      Le(this._ids, this._dists, 0, l - 1), (this._hullStart = S);
      let N = 3;
      (r[S] = e[b] = y),
        (r[y] = e[S] = b),
        (r[b] = e[y] = S),
        (i[S] = 0),
        (i[y] = 1),
        (i[b] = 2),
        o.fill(-1),
        (o[this._hashKey(m, d)] = S),
        (o[this._hashKey(g, C)] = y),
        (o[this._hashKey(J, p)] = b),
        (this.trianglesLen = 0),
        this._addTriangle(S, y, b, -1, -1, -1);
      for (let k = 0, E, w; k < this._ids.length; k++) {
        const P = this._ids[k],
          x = t[2 * P],
          v = t[2 * P + 1];
        if (
          (k > 0 && Math.abs(x - E) <= Tc && Math.abs(v - w) <= Tc) ||
          ((E = x), (w = v), P === S || P === y || P === b)
        )
          continue;
        let T = 0;
        for (
          let F = 0, q = this._hashKey(x, v);
          F < this._hashSize &&
          ((T = o[(q + F) % this._hashSize]), !(T !== -1 && T !== r[T]));
          F++
        );
        T = e[T];
        let M = T,
          R;
        for (
          ;
          (R = r[M]),
            Qi(x, v, t[2 * M], t[2 * M + 1], t[2 * R], t[2 * R + 1]) >= 0;

        )
          if (((M = R), M === T)) {
            M = -1;
            break;
          }
        if (M === -1) continue;
        let z = this._addTriangle(M, P, r[M], -1, -1, i[M]);
        (i[P] = this._legalize(z + 2)), (i[M] = z), N++;
        let I = r[M];
        for (
          ;
          (R = r[I]),
            Qi(x, v, t[2 * I], t[2 * I + 1], t[2 * R], t[2 * R + 1]) < 0;

        )
          (z = this._addTriangle(I, P, R, i[P], -1, i[I])),
            (i[P] = this._legalize(z + 2)),
            (r[I] = I),
            N--,
            (I = R);
        if (M === T)
          for (
            ;
            (R = e[M]),
              Qi(x, v, t[2 * R], t[2 * R + 1], t[2 * M], t[2 * M + 1]) < 0;

          )
            (z = this._addTriangle(R, P, M, -1, i[M], i[R])),
              this._legalize(z + 2),
              (i[R] = z),
              (r[M] = M),
              N--,
              (M = R);
        (this._hullStart = e[P] = M),
          (r[M] = e[I] = P),
          (r[P] = I),
          (o[this._hashKey(x, v)] = P),
          (o[this._hashKey(t[2 * M], t[2 * M + 1])] = M);
      }
      this.hull = new Uint32Array(N);
      for (let k = 0, E = this._hullStart; k < N; k++)
        (this.hull[k] = E), (E = r[E]);
      (this.triangles = this._triangles.subarray(0, this.trianglesLen)),
        (this.halfedges = this._halfedges.subarray(0, this.trianglesLen));
    }
    _hashKey(t, e) {
      return (
        Symbol('JSCA_5641_5643'),
        Math.floor(vd(t - this._cx, e - this._cy) * this._hashSize) %
          this._hashSize
      );
    }
    _legalize(t) {
      Symbol('JSCA_5644_5692');
      const { _triangles: e, _halfedges: r, coords: i } = this;
      let o = 0,
        l = 0;
      for (;;) {
        const a = r[t],
          f = t - (t % 3);
        if (((l = f + ((t + 2) % 3)), a === -1)) {
          if (o === 0) break;
          t = Ki[--o];
          continue;
        }
        const u = a - (a % 3),
          c = f + ((t + 1) % 3),
          s = u + ((a + 2) % 3),
          _ = e[l],
          S = e[t],
          y = e[c],
          b = e[s];
        if (
          wd(
            i[2 * _],
            i[2 * _ + 1],
            i[2 * S],
            i[2 * S + 1],
            i[2 * y],
            i[2 * y + 1],
            i[2 * b],
            i[2 * b + 1]
          )
        ) {
          (e[t] = b), (e[a] = _);
          const d = r[s];
          if (d === -1) {
            let C = this._hullStart;
            do {
              if (this._hullTri[C] === s) {
                this._hullTri[C] = t;
                break;
              }
              C = this._hullPrev[C];
            } while (C !== this._hullStart);
          }
          this._link(t, d), this._link(a, r[l]), this._link(l, s);
          const g = u + ((a + 1) % 3);
          o < Ki.length && (Ki[o++] = g);
        } else {
          if (o === 0) break;
          t = Ki[--o];
        }
      }
      return l;
    }
    _link(t, e) {
      Symbol('JSCA_5693_5696'),
        (this._halfedges[t] = e),
        e !== -1 && (this._halfedges[e] = t);
    }
    _addTriangle(t, e, r, i, o, l) {
      Symbol('JSCA_5697_5707');
      const a = this.trianglesLen;
      return (
        (this._triangles[a] = t),
        (this._triangles[a + 1] = e),
        (this._triangles[a + 2] = r),
        this._link(a, i),
        this._link(a + 1, o),
        this._link(a + 2, l),
        (this.trianglesLen += 3),
        a
      );
    }
  }
  function vd(n, t) {
    Symbol('JSCA_5709_5712');
    const e = n / (Math.abs(n) + Math.abs(t));
    return (t > 0 ? 3 - e : 1 + e) / 4;
  }
  function $a(n, t, e, r) {
    Symbol('JSCA_5713_5717');
    const i = n - e,
      o = t - r;
    return i * i + o * o;
  }
  function wd(n, t, e, r, i, o, l, a) {
    Symbol('JSCA_5718_5729');
    const f = n - l,
      u = t - a,
      c = e - l,
      s = r - a,
      _ = i - l,
      S = o - a,
      y = f * f + u * u,
      b = c * c + s * s,
      m = _ * _ + S * S;
    return f * (s * m - b * S) - u * (c * m - b * _) + y * (c * S - s * _) < 0;
  }
  function Md(n, t, e, r, i, o) {
    Symbol('JSCA_5730_5741');
    const l = e - n,
      a = r - t,
      f = i - n,
      u = o - t,
      c = l * l + a * a,
      s = f * f + u * u,
      _ = 0.5 / (l * u - a * f),
      S = (u * c - a * s) * _,
      y = (l * s - f * c) * _;
    return S * S + y * y;
  }
  function Td(n, t, e, r, i, o) {
    Symbol('JSCA_5742_5756');
    const l = e - n,
      a = r - t,
      f = i - n,
      u = o - t,
      c = l * l + a * a,
      s = f * f + u * u,
      _ = 0.5 / (l * u - a * f),
      S = n + (u * c - a * s) * _,
      y = t + (l * s - f * c) * _;
    return { x: S, y };
  }
  function Le(n, t, e, r) {
    if ((Symbol('JSCA_5757_5792'), r - e <= 20))
      for (let i = e + 1; i <= r; i++) {
        const o = n[i],
          l = t[o];
        let a = i - 1;
        for (; a >= e && t[n[a]] > l; ) n[a + 1] = n[a--];
        n[a + 1] = o;
      }
    else {
      const i = (e + r) >> 1;
      let o = e + 1,
        l = r;
      Er(n, i, o),
        t[n[e]] > t[n[r]] && Er(n, e, r),
        t[n[o]] > t[n[r]] && Er(n, o, r),
        t[n[e]] > t[n[o]] && Er(n, e, o);
      const a = n[o],
        f = t[a];
      for (;;) {
        do o++;
        while (t[n[o]] < f);
        do l--;
        while (t[n[l]] > f);
        if (l < o) break;
        Er(n, o, l);
      }
      (n[e + 1] = n[l]),
        (n[l] = a),
        r - o + 1 >= l - e
          ? (Le(n, t, o, r), Le(n, t, e, l - 1))
          : (Le(n, t, e, l - 1), Le(n, t, o, r));
    }
  }
  function Er(n, t, e) {
    Symbol('JSCA_5793_5797');
    const r = n[t];
    (n[t] = n[e]), (n[e] = r);
  }
  function $d(n) {
    return Symbol('JSCA_5798_5800'), n[0];
  }
  function Ed(n) {
    return Symbol('JSCA_5801_5803'), n[1];
  }
  const $c = 1e-6;
  class ce {
    constructor() {
      Symbol('JSCA_5806_5809'),
        (this._x0 = this._y0 = this._x1 = this._y1 = null),
        (this._ = '');
    }
    moveTo(t, e) {
      Symbol('JSCA_5810_5812'),
        (this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
          +e)}`);
    }
    closePath() {
      Symbol('JSCA_5813_5818'),
        this._x1 !== null &&
          ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += 'Z'));
    }
    lineTo(t, e) {
      Symbol('JSCA_5819_5821'),
        (this._ += `L${(this._x1 = +t)},${(this._y1 = +e)}`);
    }
    arc(t, e, r) {
      Symbol('JSCA_5822_5830'), (t = +t), (e = +e), (r = +r);
      const i = t + r,
        o = e;
      if (r < 0) throw new Error('negative radius');
      this._x1 === null
        ? (this._ += `M${i},${o}`)
        : (Math.abs(this._x1 - i) > $c || Math.abs(this._y1 - o) > $c) &&
          (this._ += 'L' + i + ',' + o),
        r &&
          (this._ += `A${r},${r},0,1,1,${
            t - r
          },${e}A${r},${r},0,1,1,${(this._x1 = i)},${(this._y1 = o)}`);
    }
    rect(t, e, r, i) {
      Symbol('JSCA_5831_5833'),
        (this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
          +e)}h${+r}v${+i}h${-r}Z`);
    }
    value() {
      return Symbol('JSCA_5834_5836'), this._ || null;
    }
  }
  class Ea {
    constructor() {
      Symbol('JSCA_5839_5841'), (this._ = []);
    }
    moveTo(t, e) {
      Symbol('JSCA_5842_5844'), this._.push([t, e]);
    }
    closePath() {
      Symbol('JSCA_5845_5847'), this._.push(this._[0].slice());
    }
    lineTo(t, e) {
      Symbol('JSCA_5848_5850'), this._.push([t, e]);
    }
    value() {
      return Symbol('JSCA_5851_5853'), this._.length ? this._ : null;
    }
  }
  class Ec {
    constructor(t, [e, r, i, o] = [0, 0, 960, 500]) {
      if (
        (Symbol('JSCA_5856_5864'),
        !((i = +i) >= (e = +e)) || !((o = +o) >= (r = +r)))
      )
        throw new Error('invalid bounds');
      (this.delaunay = t),
        (this._circumcenters = new Float64Array(t.points.length * 2)),
        (this.vectors = new Float64Array(t.points.length * 2)),
        (this.xmax = i),
        (this.xmin = e),
        (this.ymax = o),
        (this.ymin = r),
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
        delaunay: { points: t, hull: e, triangles: r },
        vectors: i,
      } = this;
      let o, l;
      const a = (this.circumcenters = this._circumcenters.subarray(
        0,
        (r.length / 3) * 2
      ));
      for (let b = 0, m = 0, d = r.length, g, C; b < d; b += 3, m += 2) {
        const A = r[b] * 2,
          J = r[b + 1] * 2,
          p = r[b + 2] * 2,
          $ = t[A],
          N = t[A + 1],
          k = t[J],
          E = t[J + 1],
          w = t[p],
          P = t[p + 1],
          x = k - $,
          v = E - N,
          T = w - $,
          M = P - N,
          R = (x * M - v * T) * 2;
        if (Math.abs(R) < 1e-9) {
          if (o === void 0) {
            o = l = 0;
            for (const I of e) (o += t[I * 2]), (l += t[I * 2 + 1]);
            (o /= e.length), (l /= e.length);
          }
          const z = 1e9 * Math.sign((o - $) * M - (l - N) * T);
          (g = ($ + w) / 2 - z * M), (C = (N + P) / 2 + z * T);
        } else {
          const z = 1 / R,
            I = x * x + v * v,
            F = T * T + M * M;
          (g = $ + (M * I - v * F) * z), (C = N + (x * F - T * I) * z);
        }
        (a[m] = g), (a[m + 1] = C);
      }
      let f = e[e.length - 1],
        u,
        c = f * 4,
        s,
        _ = t[2 * f],
        S,
        y = t[2 * f + 1];
      i.fill(0);
      for (let b = 0; b < e.length; ++b)
        (f = e[b]),
          (u = c),
          (s = _),
          (S = y),
          (c = f * 4),
          (_ = t[2 * f]),
          (y = t[2 * f + 1]),
          (i[u + 2] = i[c] = S - y),
          (i[u + 3] = i[c + 1] = _ - s);
    }
    render(t) {
      Symbol('JSCA_5921_5947');
      const e = t == null ? (t = new ce()) : void 0,
        {
          delaunay: { halfedges: r, inedges: i, hull: o },
          circumcenters: l,
          vectors: a,
        } = this;
      if (o.length <= 1) return null;
      for (let c = 0, s = r.length; c < s; ++c) {
        const _ = r[c];
        if (_ < c) continue;
        const S = Math.floor(c / 3) * 2,
          y = Math.floor(_ / 3) * 2,
          b = l[S],
          m = l[S + 1],
          d = l[y],
          g = l[y + 1];
        this._renderSegment(b, m, d, g, t);
      }
      let f,
        u = o[o.length - 1];
      for (let c = 0; c < o.length; ++c) {
        (f = u), (u = o[c]);
        const s = Math.floor(i[u] / 3) * 2,
          _ = l[s],
          S = l[s + 1],
          y = f * 4,
          b = this._project(_, S, a[y + 2], a[y + 3]);
        b && this._renderSegment(_, S, b[0], b[1], t);
      }
      return e && e.value();
    }
    renderBounds(t) {
      Symbol('JSCA_5948_5952');
      const e = t == null ? (t = new ce()) : void 0;
      return (
        t.rect(
          this.xmin,
          this.ymin,
          this.xmax - this.xmin,
          this.ymax - this.ymin
        ),
        e && e.value()
      );
    }
    renderCell(t, e) {
      Symbol('JSCA_5953_5965');
      const r = e == null ? (e = new ce()) : void 0,
        i = this._clip(t);
      if (i === null || !i.length) return;
      e.moveTo(i[0], i[1]);
      let o = i.length;
      for (; i[0] === i[o - 2] && i[1] === i[o - 1] && o > 1; ) o -= 2;
      for (let l = 2; l < o; l += 2)
        (i[l] !== i[l - 2] || i[l + 1] !== i[l - 1]) &&
          e.lineTo(i[l], i[l + 1]);
      return e.closePath(), r && r.value();
    }
    *cellPolygons() {
      Symbol('JSCA_5966_5972');
      const {
        delaunay: { points: t },
      } = this;
      for (let e = 0, r = t.length / 2; e < r; ++e) {
        const i = this.cellPolygon(e);
        i && ((i.index = e), yield i);
      }
    }
    cellPolygon(t) {
      Symbol('JSCA_5973_5977');
      const e = new Ea();
      return this.renderCell(t, e), e.value();
    }
    _renderSegment(t, e, r, i, o) {
      Symbol('JSCA_5978_5989');
      let l;
      const a = this._regioncode(t, e),
        f = this._regioncode(r, i);
      a === 0 && f === 0
        ? (o.moveTo(t, e), o.lineTo(r, i))
        : (l = this._clipSegment(t, e, r, i, a, f)) &&
          (o.moveTo(l[0], l[1]), o.lineTo(l[2], l[3]));
    }
    contains(t, e, r) {
      return (
        Symbol('JSCA_5990_5993'),
        (e = +e),
        e !== e || ((r = +r), r !== r) ? !1 : this.delaunay._step(t, e, r) === t
      );
    }
    *neighbors(t) {
      Symbol('JSCA_5994_6007');
      const e = this._clip(t);
      if (e)
        for (const r of this.delaunay.neighbors(t)) {
          const i = this._clip(r);
          if (i) {
            n: for (let o = 0, l = e.length; o < l; o += 2)
              for (let a = 0, f = i.length; a < f; a += 2)
                if (
                  e[o] === i[a] &&
                  e[o + 1] === i[a + 1] &&
                  e[(o + 2) % l] === i[(a + f - 2) % f] &&
                  e[(o + 3) % l] === i[(a + f - 1) % f]
                ) {
                  yield r;
                  break n;
                }
          }
        }
    }
    _cell(t) {
      Symbol('JSCA_6008_6022');
      const {
          circumcenters: e,
          delaunay: { inedges: r, halfedges: i, triangles: o },
        } = this,
        l = r[t];
      if (l === -1) return null;
      const a = [];
      let f = l;
      do {
        const u = Math.floor(f / 3);
        if (
          (a.push(e[u * 2], e[u * 2 + 1]),
          (f = f % 3 === 2 ? f - 2 : f + 1),
          o[f] !== t)
        )
          break;
        f = i[f];
      } while (f !== l && f !== -1);
      return a;
    }
    _clip(t) {
      if (
        (Symbol('JSCA_6023_6032'), t === 0 && this.delaunay.hull.length === 1)
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
      const e = this._cell(t);
      if (e === null) return null;
      const { vectors: r } = this,
        i = t * 4;
      return this._simplify(
        r[i] || r[i + 1]
          ? this._clipInfinite(t, e, r[i], r[i + 1], r[i + 2], r[i + 3])
          : this._clipFinite(t, e)
      );
    }
    _clipFinite(t, e) {
      Symbol('JSCA_6033_6069');
      const r = e.length;
      let i = null,
        o,
        l,
        a = e[r - 2],
        f = e[r - 1],
        u,
        c = this._regioncode(a, f),
        s,
        _ = 0;
      for (let S = 0; S < r; S += 2)
        if (
          ((o = a),
          (l = f),
          (a = e[S]),
          (f = e[S + 1]),
          (u = c),
          (c = this._regioncode(a, f)),
          u === 0 && c === 0)
        )
          (s = _), (_ = 0), i ? i.push(a, f) : (i = [a, f]);
        else {
          let y, b, m, d, g;
          if (u === 0) {
            if ((y = this._clipSegment(o, l, a, f, u, c)) === null) continue;
            [b, m, d, g] = y;
          } else {
            if ((y = this._clipSegment(a, f, o, l, c, u)) === null) continue;
            ([d, g, b, m] = y),
              (s = _),
              (_ = this._edgecode(b, m)),
              s && _ && this._edge(t, s, _, i, i.length),
              i ? i.push(b, m) : (i = [b, m]);
          }
          (s = _),
            (_ = this._edgecode(d, g)),
            s && _ && this._edge(t, s, _, i, i.length),
            i ? i.push(d, g) : (i = [d, g]);
        }
      if (i)
        (s = _),
          (_ = this._edgecode(i[0], i[1])),
          s && _ && this._edge(t, s, _, i, i.length);
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
      return i;
    }
    _clipSegment(t, e, r, i, o, l) {
      Symbol('JSCA_6070_6080');
      const a = o < l;
      for (a && ([t, e, r, i, o, l] = [r, i, t, e, l, o]); ; ) {
        if (o === 0 && l === 0) return a ? [r, i, t, e] : [t, e, r, i];
        if (o & l) return null;
        let f,
          u,
          c = o || l;
        c & 8
          ? ((f = t + ((r - t) * (this.ymax - e)) / (i - e)), (u = this.ymax))
          : c & 4
          ? ((f = t + ((r - t) * (this.ymin - e)) / (i - e)), (u = this.ymin))
          : c & 2
          ? ((u = e + ((i - e) * (this.xmax - t)) / (r - t)), (f = this.xmax))
          : ((u = e + ((i - e) * (this.xmin - t)) / (r - t)), (f = this.xmin)),
          o
            ? ((t = f), (e = u), (o = this._regioncode(t, e)))
            : ((r = f), (i = u), (l = this._regioncode(r, i)));
      }
    }
    _clipInfinite(t, e, r, i, o, l) {
      Symbol('JSCA_6081_6094');
      let a = Array.from(e),
        f;
      if (
        ((f = this._project(a[0], a[1], r, i)) && a.unshift(f[0], f[1]),
        (f = this._project(a[a.length - 2], a[a.length - 1], o, l)) &&
          a.push(f[0], f[1]),
        (a = this._clipFinite(t, a)))
      )
        for (
          let u = 0, c = a.length, s, _ = this._edgecode(a[c - 2], a[c - 1]);
          u < c;
          u += 2
        )
          (s = _),
            (_ = this._edgecode(a[u], a[u + 1])),
            s && _ && ((u = this._edge(t, s, _, a, u)), (c = a.length));
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
    _edge(t, e, r, i, o) {
      for (Symbol('JSCA_6095_6129'); e !== r; ) {
        let l, a;
        switch (e) {
          case 5:
            e = 4;
            continue;
          case 4:
            (e = 6), (l = this.xmax), (a = this.ymin);
            break;
          case 6:
            e = 2;
            continue;
          case 2:
            (e = 10), (l = this.xmax), (a = this.ymax);
            break;
          case 10:
            e = 8;
            continue;
          case 8:
            (e = 9), (l = this.xmin), (a = this.ymax);
            break;
          case 9:
            e = 1;
            continue;
          case 1:
            (e = 5), (l = this.xmin), (a = this.ymin);
            break;
        }
        (i[o] !== l || i[o + 1] !== a) &&
          this.contains(t, l, a) &&
          (i.splice(o, 0, l, a), (o += 2));
      }
      return o;
    }
    _project(t, e, r, i) {
      Symbol('JSCA_6130_6147');
      let o = 1 / 0,
        l,
        a,
        f;
      if (i < 0) {
        if (e <= this.ymin) return null;
        (l = (this.ymin - e) / i) < o &&
          ((f = this.ymin), (a = t + (o = l) * r));
      } else if (i > 0) {
        if (e >= this.ymax) return null;
        (l = (this.ymax - e) / i) < o &&
          ((f = this.ymax), (a = t + (o = l) * r));
      }
      if (r > 0) {
        if (t >= this.xmax) return null;
        (l = (this.xmax - t) / r) < o &&
          ((a = this.xmax), (f = e + (o = l) * i));
      } else if (r < 0) {
        if (t <= this.xmin) return null;
        (l = (this.xmin - t) / r) < o &&
          ((a = this.xmin), (f = e + (o = l) * i));
      }
      return [a, f];
    }
    _edgecode(t, e) {
      return (
        Symbol('JSCA_6148_6150'),
        (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) |
          (e === this.ymin ? 4 : e === this.ymax ? 8 : 0)
      );
    }
    _regioncode(t, e) {
      return (
        Symbol('JSCA_6151_6153'),
        (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) |
          (e < this.ymin ? 4 : e > this.ymax ? 8 : 0)
      );
    }
    _simplify(t) {
      if ((Symbol('JSCA_6154_6165'), t && t.length > 4)) {
        for (let e = 0; e < t.length; e += 2) {
          const r = (e + 2) % t.length,
            i = (e + 4) % t.length;
          ((t[e] === t[r] && t[r] === t[i]) ||
            (t[e + 1] === t[r + 1] && t[r + 1] === t[i + 1])) &&
            (t.splice(r, 2), (e -= 2));
        }
        t.length || (t = null);
      }
      return t;
    }
  }
  const kd = 2 * Math.PI,
    qe = Math.pow;
  function Nd(n) {
    return Symbol('JSCA_6168_6170'), n[0];
  }
  function xd(n) {
    return Symbol('JSCA_6171_6173'), n[1];
  }
  function Rd(n) {
    Symbol('JSCA_6174_6181');
    const { triangles: t, coords: e } = n;
    for (let r = 0; r < t.length; r += 3) {
      const i = 2 * t[r],
        o = 2 * t[r + 1],
        l = 2 * t[r + 2];
      if (
        (e[l] - e[i]) * (e[o + 1] - e[i + 1]) -
          (e[o] - e[i]) * (e[l + 1] - e[i + 1]) >
        1e-10
      )
        return !1;
    }
    return !0;
  }
  function Pd(n, t, e) {
    return (
      Symbol('JSCA_6182_6184'),
      [n + Math.sin(n + t) * e, t + Math.cos(n - t) * e]
    );
  }
  class ka {
    static from(t, e = Nd, r = xd, i) {
      return (
        Symbol('JSCA_6186_6188'),
        new ka(
          'length' in t ? Id(t, e, r, i) : Float64Array.from(zd(t, e, r, i))
        )
      );
    }
    constructor(t) {
      Symbol('JSCA_6189_6195'),
        (this._delaunator = new ji(t)),
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
        e = this.points;
      if (t.hull && t.hull.length > 2 && Rd(t)) {
        this.collinear = Int32Array.from(
          { length: e.length / 2 },
          (_, S) => S
        ).sort((_, S) => e[2 * _] - e[2 * S] || e[2 * _ + 1] - e[2 * S + 1]);
        const f = this.collinear[0],
          u = this.collinear[this.collinear.length - 1],
          c = [e[2 * f], e[2 * f + 1], e[2 * u], e[2 * u + 1]],
          s = 1e-8 * Math.hypot(c[3] - c[1], c[2] - c[0]);
        for (let _ = 0, S = e.length / 2; _ < S; ++_) {
          const y = Pd(e[2 * _], e[2 * _ + 1], s);
          (e[2 * _] = y[0]), (e[2 * _ + 1] = y[1]);
        }
        this._delaunator = new ji(e);
      } else delete this.collinear;
      const r = (this.halfedges = this._delaunator.halfedges),
        i = (this.hull = this._delaunator.hull),
        o = (this.triangles = this._delaunator.triangles),
        l = this.inedges.fill(-1),
        a = this._hullIndex.fill(-1);
      for (let f = 0, u = r.length; f < u; ++f) {
        const c = o[f % 3 === 2 ? f - 2 : f + 1];
        (r[f] === -1 || l[c] === -1) && (l[c] = f);
      }
      for (let f = 0, u = i.length; f < u; ++f) a[i[f]] = f;
      i.length <= 2 &&
        i.length > 0 &&
        ((this.triangles = new Int32Array(3).fill(-1)),
        (this.halfedges = new Int32Array(3).fill(-1)),
        (this.triangles[0] = i[0]),
        (l[i[0]] = 1),
        i.length === 2 &&
          ((l[i[1]] = 0),
          (this.triangles[1] = i[1]),
          (this.triangles[2] = i[1])));
    }
    voronoi(t) {
      return Symbol('JSCA_6241_6243'), new Ec(this, t);
    }
    *neighbors(t) {
      Symbol('JSCA_6244_6266');
      const {
        inedges: e,
        hull: r,
        _hullIndex: i,
        halfedges: o,
        triangles: l,
        collinear: a,
      } = this;
      if (a) {
        const s = a.indexOf(t);
        s > 0 && (yield a[s - 1]), s < a.length - 1 && (yield a[s + 1]);
        return;
      }
      const f = e[t];
      if (f === -1) return;
      let u = f,
        c = -1;
      do {
        if ((yield (c = l[u]), (u = u % 3 === 2 ? u - 2 : u + 1), l[u] !== t))
          return;
        if (((u = o[u]), u === -1)) {
          const s = r[(i[t] + 1) % r.length];
          s !== c && (yield s);
          return;
        }
      } while (u !== f);
    }
    find(t, e, r = 0) {
      if ((Symbol('JSCA_6267_6273'), (t = +t), t !== t || ((e = +e), e !== e)))
        return -1;
      const i = r;
      let o;
      for (; (o = this._step(r, t, e)) >= 0 && o !== r && o !== i; ) r = o;
      return o;
    }
    _step(t, e, r) {
      Symbol('JSCA_6274_6297');
      const {
        inedges: i,
        hull: o,
        _hullIndex: l,
        halfedges: a,
        triangles: f,
        points: u,
      } = this;
      if (i[t] === -1 || !u.length) return (t + 1) % (u.length >> 1);
      let c = t,
        s = qe(e - u[t * 2], 2) + qe(r - u[t * 2 + 1], 2);
      const _ = i[t];
      let S = _;
      do {
        let y = f[S];
        const b = qe(e - u[y * 2], 2) + qe(r - u[y * 2 + 1], 2);
        if (
          (b < s && ((s = b), (c = y)),
          (S = S % 3 === 2 ? S - 2 : S + 1),
          f[S] !== t)
        )
          break;
        if (((S = a[S]), S === -1)) {
          if (
            ((S = o[(l[t] + 1) % o.length]),
            S !== y && qe(e - u[S * 2], 2) + qe(r - u[S * 2 + 1], 2) < s)
          )
            return S;
          break;
        }
      } while (S !== _);
      return c;
    }
    render(t) {
      Symbol('JSCA_6298_6311');
      const e = t == null ? (t = new ce()) : void 0,
        { points: r, halfedges: i, triangles: o } = this;
      for (let l = 0, a = i.length; l < a; ++l) {
        const f = i[l];
        if (f < l) continue;
        const u = o[l] * 2,
          c = o[f] * 2;
        t.moveTo(r[u], r[u + 1]), t.lineTo(r[c], r[c + 1]);
      }
      return this.renderHull(t), e && e.value();
    }
    renderPoints(t, e) {
      Symbol('JSCA_6312_6323'),
        e === void 0 &&
          (!t || typeof t.moveTo != 'function') &&
          ((e = t), (t = null)),
        (e = e == null ? 2 : +e);
      const r = t == null ? (t = new ce()) : void 0,
        { points: i } = this;
      for (let o = 0, l = i.length; o < l; o += 2) {
        const a = i[o],
          f = i[o + 1];
        t.moveTo(a + e, f), t.arc(a, f, e, 0, kd);
      }
      return r && r.value();
    }
    renderHull(t) {
      Symbol('JSCA_6324_6335');
      const e = t == null ? (t = new ce()) : void 0,
        { hull: r, points: i } = this,
        o = r[0] * 2,
        l = r.length;
      t.moveTo(i[o], i[o + 1]);
      for (let a = 1; a < l; ++a) {
        const f = 2 * r[a];
        t.lineTo(i[f], i[f + 1]);
      }
      return t.closePath(), e && e.value();
    }
    hullPolygon() {
      Symbol('JSCA_6336_6340');
      const t = new Ea();
      return this.renderHull(t), t.value();
    }
    renderTriangle(t, e) {
      Symbol('JSCA_6341_6352');
      const r = e == null ? (e = new ce()) : void 0,
        { points: i, triangles: o } = this,
        l = o[(t *= 3)] * 2,
        a = o[t + 1] * 2,
        f = o[t + 2] * 2;
      return (
        e.moveTo(i[l], i[l + 1]),
        e.lineTo(i[a], i[a + 1]),
        e.lineTo(i[f], i[f + 1]),
        e.closePath(),
        r && r.value()
      );
    }
    *trianglePolygons() {
      Symbol('JSCA_6353_6358');
      const { triangles: t } = this;
      for (let e = 0, r = t.length / 3; e < r; ++e)
        yield this.trianglePolygon(e);
    }
    trianglePolygon(t) {
      Symbol('JSCA_6359_6363');
      const e = new Ea();
      return this.renderTriangle(t, e), e.value();
    }
  }
  function Id(n, t, e, r) {
    Symbol('JSCA_6365_6374');
    const i = n.length,
      o = new Float64Array(i * 2);
    for (let l = 0; l < i; ++l) {
      const a = n[l];
      (o[l * 2] = t.call(r, a, l, n)), (o[l * 2 + 1] = e.call(r, a, l, n));
    }
    return o;
  }
  function* zd(n, t, e, r) {
    Symbol('JSCA_6375_6382');
    let i = 0;
    for (const o of n) yield t.call(r, o, i, n), yield e.call(r, o, i, n), ++i;
  }
  var kc = {},
    Na = {},
    xa = 34,
    kr = 10,
    Ra = 13;
  function Nc(n) {
    return (
      Symbol('JSCA_6384_6388'),
      new Function(
        'd',
        'return {' +
          n
            .map(function (t, e) {
              return (
                Symbol('JSCA_6385_6387'),
                JSON.stringify(t) + ': d[' + e + '] || ""'
              );
            })
            .join(',') +
          '}'
      )
    );
  }
  function Dd(n, t) {
    Symbol('JSCA_6389_6394');
    var e = Nc(n);
    return function (r, i) {
      return Symbol('JSCA_6391_6393'), t(e(r), i, n);
    };
  }
  function xc(n) {
    Symbol('JSCA_6395_6405');
    var t = Object.create(null),
      e = [];
    return (
      n.forEach(function (r) {
        Symbol('JSCA_6397_6403');
        for (var i in r) i in t || e.push((t[i] = i));
      }),
      e
    );
  }
  function Hn(n, t) {
    Symbol('JSCA_6406_6409');
    var e = n + '',
      r = e.length;
    return r < t ? new Array(t - r + 1).join(0) + e : e;
  }
  function Fd(n) {
    return (
      Symbol('JSCA_6410_6412'),
      n < 0 ? '-' + Hn(-n, 6) : n > 9999 ? '+' + Hn(n, 6) : Hn(n, 4)
    );
  }
  function Od(n) {
    Symbol('JSCA_6413_6416');
    var t = n.getUTCHours(),
      e = n.getUTCMinutes(),
      r = n.getUTCSeconds(),
      i = n.getUTCMilliseconds();
    return isNaN(n)
      ? 'Invalid Date'
      : Fd(n.getUTCFullYear()) +
          '-' +
          Hn(n.getUTCMonth() + 1, 2) +
          '-' +
          Hn(n.getUTCDate(), 2) +
          (i
            ? 'T' +
              Hn(t, 2) +
              ':' +
              Hn(e, 2) +
              ':' +
              Hn(r, 2) +
              '.' +
              Hn(i, 3) +
              'Z'
            : r
            ? 'T' + Hn(t, 2) + ':' + Hn(e, 2) + ':' + Hn(r, 2) + 'Z'
            : e || t
            ? 'T' + Hn(t, 2) + ':' + Hn(e, 2) + 'Z'
            : '');
  }
  function no(n) {
    Symbol('JSCA_6417_6493');
    var t = new RegExp(
        '["' +
          n +
          `
\r]`
      ),
      e = n.charCodeAt(0);
    function r(s, _) {
      Symbol('JSCA_6419_6426');
      var S,
        y,
        b = i(s, function (m, d) {
          if ((Symbol('JSCA_6420_6423'), S)) return S(m, d - 1);
          (y = m), (S = _ ? Dd(m, _) : Nc(m));
        });
      return (b.columns = y || []), b;
    }
    function i(s, _) {
      Symbol('JSCA_6427_6459');
      var S = [],
        y = s.length,
        b = 0,
        m = 0,
        d,
        g = y <= 0,
        C = !1;
      s.charCodeAt(y - 1) === kr && --y, s.charCodeAt(y - 1) === Ra && --y;
      function A() {
        if ((Symbol('JSCA_6431_6451'), g)) return Na;
        if (C) return (C = !1), kc;
        var p,
          $ = b,
          N;
        if (s.charCodeAt($) === xa) {
          for (
            ;
            (b++ < y && s.charCodeAt(b) !== xa) || s.charCodeAt(++b) === xa;

          );
          return (
            (p = b) >= y
              ? (g = !0)
              : (N = s.charCodeAt(b++)) === kr
              ? (C = !0)
              : N === Ra && ((C = !0), s.charCodeAt(b) === kr && ++b),
            s.slice($ + 1, p - 1).replace(/""/g, '"')
          );
        }
        for (; b < y; ) {
          if ((N = s.charCodeAt((p = b++))) === kr) C = !0;
          else if (N === Ra) (C = !0), s.charCodeAt(b) === kr && ++b;
          else if (N !== e) continue;
          return s.slice($, p);
        }
        return (g = !0), s.slice($, y);
      }
      for (; (d = A()) !== Na; ) {
        for (var J = []; d !== kc && d !== Na; ) J.push(d), (d = A());
        (_ && (J = _(J, m++)) == null) || S.push(J);
      }
      return S;
    }
    function o(s, _) {
      return (
        Symbol('JSCA_6460_6466'),
        s.map(function (S) {
          return (
            Symbol('JSCA_6461_6465'),
            _.map(function (y) {
              return Symbol('JSCA_6462_6464'), c(S[y]);
            }).join(n)
          );
        })
      );
    }
    function l(s, _) {
      return (
        Symbol('JSCA_6467_6470'),
        _ == null && (_ = xc(s)),
        [_.map(c).join(n)].concat(o(s, _)).join(`
`)
      );
    }
    function a(s, _) {
      return (
        Symbol('JSCA_6471_6474'),
        _ == null && (_ = xc(s)),
        o(s, _).join(`
`)
      );
    }
    function f(s) {
      return (
        Symbol('JSCA_6475_6477'),
        s.map(u).join(`
`)
      );
    }
    function u(s) {
      return Symbol('JSCA_6478_6480'), s.map(c).join(n);
    }
    function c(s) {
      return (
        Symbol('JSCA_6481_6483'),
        s == null
          ? ''
          : s instanceof Date
          ? Od(s)
          : t.test((s += ''))
          ? '"' + s.replace(/"/g, '""') + '"'
          : s
      );
    }
    return {
      parse: r,
      parseRows: i,
      format: l,
      formatBody: a,
      formatRows: f,
      formatRow: u,
      formatValue: c,
    };
  }
  var _e = no(','),
    Rc = _e.parse,
    Ld = _e.parseRows,
    qd = _e.format,
    Yd = _e.formatBody,
    Ud = _e.formatRows,
    Bd = _e.formatRow,
    Hd = _e.formatValue,
    se = no('	'),
    Pc = se.parse,
    Xd = se.parseRows,
    Gd = se.format,
    Vd = se.formatBody,
    Wd = se.formatRows,
    Zd = se.formatRow,
    Qd = se.formatValue;
  function Kd(n) {
    Symbol('JSCA_6510_6520');
    for (var t in n) {
      var e = n[t].trim(),
        r,
        i;
      if (!e) e = null;
      else if (e === 'true') e = !0;
      else if (e === 'false') e = !1;
      else if (e === 'NaN') e = NaN;
      else if (!isNaN((r = +e))) e = r;
      else if (
        (i = e.match(
          /^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/
        ))
      )
        jd && i[4] && !i[7] && (e = e.replace(/-/g, '/').replace(/T/, ' ')),
          (e = new Date(e));
      else continue;
      n[t] = e;
    }
    return n;
  }
  const jd =
    new Date('2019-01-01T00:00').getHours() ||
    new Date('2019-07-01T00:00').getHours();
  function n4(n) {
    if ((Symbol('JSCA_6522_6525'), !n.ok))
      throw new Error(n.status + ' ' + n.statusText);
    return n.blob();
  }
  function t4(n, t) {
    return Symbol('JSCA_6526_6528'), fetch(n, t).then(n4);
  }
  function e4(n) {
    if ((Symbol('JSCA_6529_6532'), !n.ok))
      throw new Error(n.status + ' ' + n.statusText);
    return n.arrayBuffer();
  }
  function r4(n, t) {
    return Symbol('JSCA_6533_6535'), fetch(n, t).then(e4);
  }
  function i4(n) {
    if ((Symbol('JSCA_6536_6539'), !n.ok))
      throw new Error(n.status + ' ' + n.statusText);
    return n.text();
  }
  function to(n, t) {
    return Symbol('JSCA_6540_6542'), fetch(n, t).then(i4);
  }
  function Ic(n) {
    return (
      Symbol('JSCA_6543_6550'),
      function (t, e, r) {
        return (
          Symbol('JSCA_6544_6549'),
          arguments.length === 2 &&
            typeof e == 'function' &&
            ((r = e), (e = void 0)),
          to(t, e).then(function (i) {
            return Symbol('JSCA_6546_6548'), n(i, r);
          })
        );
      }
    );
  }
  function o4(n, t, e, r) {
    Symbol('JSCA_6551_6557'),
      arguments.length === 3 &&
        typeof e == 'function' &&
        ((r = e), (e = void 0));
    var i = no(n);
    return to(t, e).then(function (o) {
      return Symbol('JSCA_6554_6556'), i.parse(o, r);
    });
  }
  var l4 = Ic(Rc),
    a4 = Ic(Pc);
  function u4(n, t) {
    return (
      Symbol('JSCA_6560_6570'),
      new Promise(function (e, r) {
        Symbol('JSCA_6561_6569');
        var i = new Image();
        for (var o in t) i[o] = t[o];
        (i.onerror = r),
          (i.onload = function () {
            Symbol('JSCA_6565_6567'), e(i);
          }),
          (i.src = n);
      })
    );
  }
  function f4(n) {
    if ((Symbol('JSCA_6571_6575'), !n.ok))
      throw new Error(n.status + ' ' + n.statusText);
    if (!(n.status === 204 || n.status === 205)) return n.json();
  }
  function c4(n, t) {
    return Symbol('JSCA_6576_6578'), fetch(n, t).then(f4);
  }
  function Pa(n) {
    return (
      Symbol('JSCA_6579_6581'),
      (t, e) => to(t, e).then((r) => new DOMParser().parseFromString(r, n))
    );
  }
  var _4 = Pa('application/xml'),
    s4 = Pa('text/html'),
    S4 = Pa('image/svg+xml');
  function h4(n, t) {
    Symbol('JSCA_6585_6611');
    var e,
      r = 1;
    n == null && (n = 0), t == null && (t = 0);
    function i() {
      Symbol('JSCA_6589_6597');
      var o,
        l = e.length,
        a,
        f = 0,
        u = 0;
      for (o = 0; o < l; ++o) (a = e[o]), (f += a.x), (u += a.y);
      for (f = (f / l - n) * r, u = (u / l - t) * r, o = 0; o < l; ++o)
        (a = e[o]), (a.x -= f), (a.y -= u);
    }
    return (
      (i.initialize = function (o) {
        Symbol('JSCA_6598_6600'), (e = o);
      }),
      (i.x = function (o) {
        return Symbol('JSCA_6601_6603'), arguments.length ? ((n = +o), i) : n;
      }),
      (i.y = function (o) {
        return Symbol('JSCA_6604_6606'), arguments.length ? ((t = +o), i) : t;
      }),
      (i.strength = function (o) {
        return Symbol('JSCA_6607_6609'), arguments.length ? ((r = +o), i) : r;
      }),
      i
    );
  }
  function m4(n) {
    Symbol('JSCA_6612_6615');
    const t = +this._x.call(null, n),
      e = +this._y.call(null, n);
    return zc(this.cover(t, e), t, e, n);
  }
  function zc(n, t, e, r) {
    if ((Symbol('JSCA_6616_6636'), isNaN(t) || isNaN(e))) return n;
    var i,
      o = n._root,
      l = { data: r },
      a = n._x0,
      f = n._y0,
      u = n._x1,
      c = n._y1,
      s,
      _,
      S,
      y,
      b,
      m,
      d,
      g;
    if (!o) return (n._root = l), n;
    for (; o.length; )
      if (
        ((b = t >= (s = (a + u) / 2)) ? (a = s) : (u = s),
        (m = e >= (_ = (f + c) / 2)) ? (f = _) : (c = _),
        (i = o),
        !(o = o[(d = (m << 1) | b)]))
      )
        return (i[d] = l), n;
    if (
      ((S = +n._x.call(null, o.data)),
      (y = +n._y.call(null, o.data)),
      t === S && e === y)
    )
      return (l.next = o), i ? (i[d] = l) : (n._root = l), n;
    do
      (i = i ? (i[d] = new Array(4)) : (n._root = new Array(4))),
        (b = t >= (s = (a + u) / 2)) ? (a = s) : (u = s),
        (m = e >= (_ = (f + c) / 2)) ? (f = _) : (c = _);
    while ((d = (m << 1) | b) === (g = ((y >= _) << 1) | (S >= s)));
    return (i[g] = o), (i[d] = l), n;
  }
  function y4(n) {
    Symbol('JSCA_6637_6654');
    var t,
      e,
      r = n.length,
      i,
      o,
      l = new Array(r),
      a = new Array(r),
      f = 1 / 0,
      u = 1 / 0,
      c = -1 / 0,
      s = -1 / 0;
    for (e = 0; e < r; ++e)
      isNaN((i = +this._x.call(null, (t = n[e])))) ||
        isNaN((o = +this._y.call(null, t))) ||
        ((l[e] = i),
        (a[e] = o),
        i < f && (f = i),
        i > c && (c = i),
        o < u && (u = o),
        o > s && (s = o));
    if (f > c || u > s) return this;
    for (this.cover(f, u).cover(c, s), e = 0; e < r; ++e)
      zc(this, l[e], a[e], n[e]);
    return this;
  }
  function b4(n, t) {
    if ((Symbol('JSCA_6655_6688'), isNaN((n = +n)) || isNaN((t = +t))))
      return this;
    var e = this._x0,
      r = this._y0,
      i = this._x1,
      o = this._y1;
    if (isNaN(e)) (i = (e = Math.floor(n)) + 1), (o = (r = Math.floor(t)) + 1);
    else {
      for (
        var l = i - e || 1, a = this._root, f, u;
        e > n || n >= i || r > t || t >= o;

      )
        switch (
          ((u = ((t < r) << 1) | (n < e)),
          (f = new Array(4)),
          (f[u] = a),
          (a = f),
          (l *= 2),
          u)
        ) {
          case 0:
            (i = e + l), (o = r + l);
            break;
          case 1:
            (e = i - l), (o = r + l);
            break;
          case 2:
            (i = e + l), (r = o - l);
            break;
          case 3:
            (e = i - l), (r = o - l);
            break;
        }
      this._root && this._root.length && (this._root = a);
    }
    return (this._x0 = e), (this._y0 = r), (this._x1 = i), (this._y1 = o), this;
  }
  function d4() {
    Symbol('JSCA_6689_6695');
    var n = [];
    return (
      this.visit(function (t) {
        if ((Symbol('JSCA_6691_6693'), !t.length))
          do n.push(t.data);
          while ((t = t.next));
      }),
      n
    );
  }
  function A4(n) {
    return (
      Symbol('JSCA_6696_6698'),
      arguments.length
        ? this.cover(+n[0][0], +n[0][1]).cover(+n[1][0], +n[1][1])
        : isNaN(this._x0)
        ? void 0
        : [
            [this._x0, this._y0],
            [this._x1, this._y1],
          ]
    );
  }
  function Pn(n, t, e, r, i) {
    Symbol('JSCA_6699_6705'),
      (this.node = n),
      (this.x0 = t),
      (this.y0 = e),
      (this.x1 = r),
      (this.y1 = i);
  }
  function C4(n, t, e) {
    Symbol('JSCA_6706_6735');
    var r,
      i = this._x0,
      o = this._y0,
      l,
      a,
      f,
      u,
      c = this._x1,
      s = this._y1,
      _ = [],
      S = this._root,
      y,
      b;
    for (
      S && _.push(new Pn(S, i, o, c, s)),
        e == null
          ? (e = 1 / 0)
          : ((i = n - e), (o = t - e), (c = n + e), (s = t + e), (e *= e));
      (y = _.pop());

    )
      if (
        !(
          !(S = y.node) ||
          (l = y.x0) > c ||
          (a = y.y0) > s ||
          (f = y.x1) < i ||
          (u = y.y1) < o
        )
      )
        if (S.length) {
          var m = (l + f) / 2,
            d = (a + u) / 2;
          _.push(
            new Pn(S[3], m, d, f, u),
            new Pn(S[2], l, d, m, u),
            new Pn(S[1], m, a, f, d),
            new Pn(S[0], l, a, m, d)
          ),
            (b = ((t >= d) << 1) | (n >= m)) &&
              ((y = _[_.length - 1]),
              (_[_.length - 1] = _[_.length - 1 - b]),
              (_[_.length - 1 - b] = y));
        } else {
          var g = n - +this._x.call(null, S.data),
            C = t - +this._y.call(null, S.data),
            A = g * g + C * C;
          if (A < e) {
            var J = Math.sqrt((e = A));
            (i = n - J), (o = t - J), (c = n + J), (s = t + J), (r = S.data);
          }
        }
    return r;
  }
  function g4(n) {
    if (
      (Symbol('JSCA_6736_6756'),
      isNaN((c = +this._x.call(null, n))) ||
        isNaN((s = +this._y.call(null, n))))
    )
      return this;
    var t,
      e = this._root,
      r,
      i,
      o,
      l = this._x0,
      a = this._y0,
      f = this._x1,
      u = this._y1,
      c,
      s,
      _,
      S,
      y,
      b,
      m,
      d;
    if (!e) return this;
    if (e.length)
      for (;;) {
        if (
          ((y = c >= (_ = (l + f) / 2)) ? (l = _) : (f = _),
          (b = s >= (S = (a + u) / 2)) ? (a = S) : (u = S),
          (t = e),
          !(e = e[(m = (b << 1) | y)]))
        )
          return this;
        if (!e.length) break;
        (t[(m + 1) & 3] || t[(m + 2) & 3] || t[(m + 3) & 3]) &&
          ((r = t), (d = m));
      }
    for (; e.data !== n; ) if (((i = e), !(e = e.next))) return this;
    return (
      (o = e.next) && delete e.next,
      i
        ? (o ? (i.next = o) : delete i.next, this)
        : t
        ? (o ? (t[m] = o) : delete t[m],
          (e = t[0] || t[1] || t[2] || t[3]) &&
            e === (t[3] || t[2] || t[1] || t[0]) &&
            !e.length &&
            (r ? (r[d] = e) : (this._root = e)),
          this)
        : ((this._root = o), this)
    );
  }
  function J4(n) {
    Symbol('JSCA_6757_6760');
    for (var t = 0, e = n.length; t < e; ++t) this.remove(n[t]);
    return this;
  }
  function p4() {
    return Symbol('JSCA_6761_6763'), this._root;
  }
  function v4() {
    Symbol('JSCA_6764_6770');
    var n = 0;
    return (
      this.visit(function (t) {
        if ((Symbol('JSCA_6766_6768'), !t.length))
          do ++n;
          while ((t = t.next));
      }),
      n
    );
  }
  function w4(n) {
    Symbol('JSCA_6771_6784');
    var t = [],
      e,
      r = this._root,
      i,
      o,
      l,
      a,
      f;
    for (
      r && t.push(new Pn(r, this._x0, this._y0, this._x1, this._y1));
      (e = t.pop());

    )
      if (
        !n((r = e.node), (o = e.x0), (l = e.y0), (a = e.x1), (f = e.y1)) &&
        r.length
      ) {
        var u = (o + a) / 2,
          c = (l + f) / 2;
        (i = r[3]) && t.push(new Pn(i, u, c, a, f)),
          (i = r[2]) && t.push(new Pn(i, o, c, u, f)),
          (i = r[1]) && t.push(new Pn(i, u, l, a, c)),
          (i = r[0]) && t.push(new Pn(i, o, l, u, c));
      }
    return this;
  }
  function M4(n) {
    Symbol('JSCA_6785_6803');
    var t = [],
      e = [],
      r;
    for (
      this._root &&
      t.push(new Pn(this._root, this._x0, this._y0, this._x1, this._y1));
      (r = t.pop());

    ) {
      var i = r.node;
      if (i.length) {
        var o,
          l = r.x0,
          a = r.y0,
          f = r.x1,
          u = r.y1,
          c = (l + f) / 2,
          s = (a + u) / 2;
        (o = i[0]) && t.push(new Pn(o, l, a, c, s)),
          (o = i[1]) && t.push(new Pn(o, c, a, f, s)),
          (o = i[2]) && t.push(new Pn(o, l, s, c, u)),
          (o = i[3]) && t.push(new Pn(o, c, s, f, u));
      }
      e.push(r);
    }
    for (; (r = e.pop()); ) n(r.node, r.x0, r.y0, r.x1, r.y1);
    return this;
  }
  function T4(n) {
    return Symbol('JSCA_6804_6806'), n[0];
  }
  function $4(n) {
    return (
      Symbol('JSCA_6807_6809'),
      arguments.length ? ((this._x = n), this) : this._x
    );
  }
  function E4(n) {
    return Symbol('JSCA_6810_6812'), n[1];
  }
  function k4(n) {
    return (
      Symbol('JSCA_6813_6815'),
      arguments.length ? ((this._y = n), this) : this._y
    );
  }
  function eo(n, t, e) {
    Symbol('JSCA_6816_6819');
    var r = new Ia(t ?? T4, e ?? E4, NaN, NaN, NaN, NaN);
    return n == null ? r : r.addAll(n);
  }
  function Ia(n, t, e, r, i, o) {
    Symbol('JSCA_6820_6828'),
      (this._x = n),
      (this._y = t),
      (this._x0 = e),
      (this._y0 = r),
      (this._x1 = i),
      (this._y1 = o),
      (this._root = void 0);
  }
  function Dc(n) {
    Symbol('JSCA_6829_6837');
    for (var t = { data: n.data }, e = t; (n = n.next); )
      e = e.next = { data: n.data };
    return t;
  }
  var In = (eo.prototype = Ia.prototype);
  (In.copy = function () {
    Symbol('JSCA_6839_6858');
    var n = new Ia(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      t = this._root,
      e,
      r;
    if (!t) return n;
    if (!t.length) return (n._root = Dc(t)), n;
    for (e = [{ source: t, target: (n._root = new Array(4)) }]; (t = e.pop()); )
      for (var i = 0; i < 4; ++i)
        (r = t.source[i]) &&
          (r.length
            ? e.push({ source: r, target: (t.target[i] = new Array(4)) })
            : (t.target[i] = Dc(r)));
    return n;
  }),
    (In.add = m4),
    (In.addAll = y4),
    (In.cover = b4),
    (In.data = d4),
    (In.extent = A4),
    (In.find = C4),
    (In.remove = g4),
    (In.removeAll = J4),
    (In.root = p4),
    (In.size = v4),
    (In.visit = w4),
    (In.visitAfter = M4),
    (In.x = $4),
    (In.y = k4);
  function Cn(n) {
    return (
      Symbol('JSCA_6873_6877'),
      function () {
        return Symbol('JSCA_6874_6876'), n;
      }
    );
  }
  function Ot(n) {
    return Symbol('JSCA_6878_6880'), (n() - 0.5) * 1e-6;
  }
  function N4(n) {
    return Symbol('JSCA_6881_6883'), n.x + n.vx;
  }
  function x4(n) {
    return Symbol('JSCA_6884_6886'), n.y + n.vy;
  }
  function R4(n) {
    Symbol('JSCA_6887_6951');
    var t,
      e,
      r,
      i = 1,
      o = 1;
    typeof n != 'function' && (n = Cn(n == null ? 1 : +n));
    function l() {
      Symbol('JSCA_6890_6921');
      for (var u, c = t.length, s, _, S, y, b, m, d = 0; d < o; ++d)
        for (s = eo(t, N4, x4).visitAfter(a), u = 0; u < c; ++u)
          (_ = t[u]),
            (b = e[_.index]),
            (m = b * b),
            (S = _.x + _.vx),
            (y = _.y + _.vy),
            s.visit(g);
      function g(C, A, J, p, $) {
        Symbol('JSCA_6902_6920');
        var N = C.data,
          k = C.r,
          E = b + k;
        if (N) {
          if (N.index > _.index) {
            var w = S - N.x - N.vx,
              P = y - N.y - N.vy,
              x = w * w + P * P;
            x < E * E &&
              (w === 0 && ((w = Ot(r)), (x += w * w)),
              P === 0 && ((P = Ot(r)), (x += P * P)),
              (x = ((E - (x = Math.sqrt(x))) / x) * i),
              (_.vx += (w *= x) * (E = (k *= k) / (m + k))),
              (_.vy += (P *= x) * E),
              (N.vx -= w * (E = 1 - E)),
              (N.vy -= P * E));
          }
          return;
        }
        return A > S + E || p < S - E || J > y + E || $ < y - E;
      }
    }
    function a(u) {
      if ((Symbol('JSCA_6922_6929'), u.data)) return (u.r = e[u.data.index]);
      for (var c = (u.r = 0); c < 4; ++c)
        u[c] && u[c].r > u.r && (u.r = u[c].r);
    }
    function f() {
      if ((Symbol('JSCA_6930_6935'), !!t)) {
        var u,
          c = t.length,
          s;
        for (e = new Array(c), u = 0; u < c; ++u)
          (s = t[u]), (e[s.index] = +n(s, u, t));
      }
    }
    return (
      (l.initialize = function (u, c) {
        Symbol('JSCA_6936_6940'), (t = u), (r = c), f();
      }),
      (l.iterations = function (u) {
        return Symbol('JSCA_6941_6943'), arguments.length ? ((o = +u), l) : o;
      }),
      (l.strength = function (u) {
        return Symbol('JSCA_6944_6946'), arguments.length ? ((i = +u), l) : i;
      }),
      (l.radius = function (u) {
        return (
          Symbol('JSCA_6947_6949'),
          arguments.length
            ? ((n = typeof u == 'function' ? u : Cn(+u)), f(), l)
            : n
        );
      }),
      l
    );
  }
  function P4(n) {
    return Symbol('JSCA_6952_6954'), n.index;
  }
  function Fc(n, t) {
    Symbol('JSCA_6955_6959');
    var e = n.get(t);
    if (!e) throw new Error('node not found: ' + t);
    return e;
  }
  function I4(n) {
    Symbol('JSCA_6960_7031');
    var t = P4,
      e = s,
      r,
      i = Cn(30),
      o,
      l,
      a,
      f,
      u,
      c = 1;
    n == null && (n = []);
    function s(m) {
      return (
        Symbol('JSCA_6963_6965'),
        1 / Math.min(a[m.source.index], a[m.target.index])
      );
    }
    function _(m) {
      Symbol('JSCA_6966_6981');
      for (var d = 0, g = n.length; d < c; ++d)
        for (var C = 0, A, J, p, $, N, k, E; C < g; ++C)
          (A = n[C]),
            (J = A.source),
            (p = A.target),
            ($ = p.x + p.vx - J.x - J.vx || Ot(u)),
            (N = p.y + p.vy - J.y - J.vy || Ot(u)),
            (k = Math.sqrt($ * $ + N * N)),
            (k = ((k - o[C]) / k) * m * r[C]),
            ($ *= k),
            (N *= k),
            (p.vx -= $ * (E = f[C])),
            (p.vy -= N * E),
            (J.vx += $ * (E = 1 - E)),
            (J.vy += N * E);
    }
    function S() {
      if ((Symbol('JSCA_6982_6997'), !!l)) {
        var m,
          d = l.length,
          g = n.length,
          C = new Map(l.map((J, p) => [t(J, p, l), J])),
          A;
        for (m = 0, a = new Array(d); m < g; ++m)
          (A = n[m]),
            (A.index = m),
            typeof A.source != 'object' && (A.source = Fc(C, A.source)),
            typeof A.target != 'object' && (A.target = Fc(C, A.target)),
            (a[A.source.index] = (a[A.source.index] || 0) + 1),
            (a[A.target.index] = (a[A.target.index] || 0) + 1);
        for (m = 0, f = new Array(g); m < g; ++m)
          (A = n[m]),
            (f[m] =
              a[A.source.index] / (a[A.source.index] + a[A.target.index]));
        (r = new Array(g)), y(), (o = new Array(g)), b();
      }
    }
    function y() {
      if ((Symbol('JSCA_6998_7003'), !!l))
        for (var m = 0, d = n.length; m < d; ++m) r[m] = +e(n[m], m, n);
    }
    function b() {
      if ((Symbol('JSCA_7004_7009'), !!l))
        for (var m = 0, d = n.length; m < d; ++m) o[m] = +i(n[m], m, n);
    }
    return (
      (_.initialize = function (m, d) {
        Symbol('JSCA_7010_7014'), (l = m), (u = d), S();
      }),
      (_.links = function (m) {
        return (
          Symbol('JSCA_7015_7017'), arguments.length ? ((n = m), S(), _) : n
        );
      }),
      (_.id = function (m) {
        return Symbol('JSCA_7018_7020'), arguments.length ? ((t = m), _) : t;
      }),
      (_.iterations = function (m) {
        return Symbol('JSCA_7021_7023'), arguments.length ? ((c = +m), _) : c;
      }),
      (_.strength = function (m) {
        return (
          Symbol('JSCA_7024_7026'),
          arguments.length
            ? ((e = typeof m == 'function' ? m : Cn(+m)), y(), _)
            : e
        );
      }),
      (_.distance = function (m) {
        return (
          Symbol('JSCA_7027_7029'),
          arguments.length
            ? ((i = typeof m == 'function' ? m : Cn(+m)), b(), _)
            : i
        );
      }),
      _
    );
  }
  const z4 = 1664525,
    D4 = 1013904223,
    Oc = 4294967296;
  function F4() {
    Symbol('JSCA_7035_7038');
    let n = 1;
    return () => (n = (z4 * n + D4) % Oc) / Oc;
  }
  function O4(n) {
    return Symbol('JSCA_7039_7041'), n.x;
  }
  function L4(n) {
    return Symbol('JSCA_7042_7044'), n.y;
  }
  var q4 = 10,
    Y4 = Math.PI * (3 - Math.sqrt(5));
  function U4(n) {
    Symbol('JSCA_7046_7141');
    var t,
      e = 1,
      r = 0.001,
      i = 1 - Math.pow(r, 1 / 300),
      o = 0,
      l = 0.6,
      a = new Map(),
      f = Ui(s),
      u = Kt('tick', 'end'),
      c = F4();
    n == null && (n = []);
    function s() {
      Symbol('JSCA_7049_7056'),
        _(),
        u.call('tick', t),
        e < r && (f.stop(), u.call('end', t));
    }
    function _(b) {
      Symbol('JSCA_7057_7072');
      var m,
        d = n.length,
        g;
      b === void 0 && (b = 1);
      for (var C = 0; C < b; ++C)
        for (
          e += (o - e) * i,
            a.forEach(function (A) {
              Symbol('JSCA_7062_7064'), A(e);
            }),
            m = 0;
          m < d;
          ++m
        )
          (g = n[m]),
            g.fx == null ? (g.x += g.vx *= l) : ((g.x = g.fx), (g.vx = 0)),
            g.fy == null ? (g.y += g.vy *= l) : ((g.y = g.fy), (g.vy = 0));
      return t;
    }
    function S() {
      Symbol('JSCA_7073_7087');
      for (var b = 0, m = n.length, d; b < m; ++b) {
        if (
          ((d = n[b]),
          (d.index = b),
          d.fx != null && (d.x = d.fx),
          d.fy != null && (d.y = d.fy),
          isNaN(d.x) || isNaN(d.y))
        ) {
          var g = q4 * Math.sqrt(0.5 + b),
            C = b * Y4;
          (d.x = g * Math.cos(C)), (d.y = g * Math.sin(C));
        }
        (isNaN(d.vx) || isNaN(d.vy)) && (d.vx = d.vy = 0);
      }
    }
    function y(b) {
      return Symbol('JSCA_7088_7091'), b.initialize && b.initialize(n, c), b;
    }
    return (
      S(),
      (t = {
        tick: _,
        restart: function () {
          return Symbol('JSCA_7095_7097'), f.restart(s), t;
        },
        stop: function () {
          return Symbol('JSCA_7098_7100'), f.stop(), t;
        },
        nodes: function (b) {
          return (
            Symbol('JSCA_7101_7103'),
            arguments.length ? ((n = b), S(), a.forEach(y), t) : n
          );
        },
        alpha: function (b) {
          return Symbol('JSCA_7104_7106'), arguments.length ? ((e = +b), t) : e;
        },
        alphaMin: function (b) {
          return Symbol('JSCA_7107_7109'), arguments.length ? ((r = +b), t) : r;
        },
        alphaDecay: function (b) {
          return (
            Symbol('JSCA_7110_7112'), arguments.length ? ((i = +b), t) : +i
          );
        },
        alphaTarget: function (b) {
          return Symbol('JSCA_7113_7115'), arguments.length ? ((o = +b), t) : o;
        },
        velocityDecay: function (b) {
          return (
            Symbol('JSCA_7116_7118'),
            arguments.length ? ((l = 1 - b), t) : 1 - l
          );
        },
        randomSource: function (b) {
          return (
            Symbol('JSCA_7119_7121'),
            arguments.length ? ((c = b), a.forEach(y), t) : c
          );
        },
        force: function (b, m) {
          return (
            Symbol('JSCA_7122_7124'),
            arguments.length > 1
              ? (m == null ? a.delete(b) : a.set(b, y(m)), t)
              : a.get(b)
          );
        },
        find: function (b, m, d) {
          Symbol('JSCA_7125_7136');
          var g = 0,
            C = n.length,
            A,
            J,
            p,
            $,
            N;
          for (d == null ? (d = 1 / 0) : (d *= d), g = 0; g < C; ++g)
            ($ = n[g]),
              (A = b - $.x),
              (J = m - $.y),
              (p = A * A + J * J),
              p < d && ((N = $), (d = p));
          return N;
        },
        on: function (b, m) {
          return (
            Symbol('JSCA_7137_7139'),
            arguments.length > 1 ? (u.on(b, m), t) : u.on(b)
          );
        },
      })
    );
  }
  function B4() {
    Symbol('JSCA_7142_7214');
    var n,
      t,
      e,
      r,
      i = Cn(-30),
      o,
      l = 1,
      a = 1 / 0,
      f = 0.81;
    function u(S) {
      Symbol('JSCA_7144_7147');
      var y,
        b = n.length,
        m = eo(n, O4, L4).visitAfter(s);
      for (r = S, y = 0; y < b; ++y) (t = n[y]), m.visit(_);
    }
    function c() {
      if ((Symbol('JSCA_7148_7153'), !!n)) {
        var S,
          y = n.length,
          b;
        for (o = new Array(y), S = 0; S < y; ++S)
          (b = n[S]), (o[b.index] = +i(b, S, n));
      }
    }
    function s(S) {
      Symbol('JSCA_7154_7171');
      var y = 0,
        b,
        m,
        d = 0,
        g,
        C,
        A;
      if (S.length) {
        for (g = C = A = 0; A < 4; ++A)
          (b = S[A]) &&
            (m = Math.abs(b.value)) &&
            ((y += b.value), (d += m), (g += m * b.x), (C += m * b.y));
        (S.x = g / d), (S.y = C / d);
      } else {
        (b = S), (b.x = b.data.x), (b.y = b.data.y);
        do y += o[b.data.index];
        while ((b = b.next));
      }
      S.value = y;
    }
    function _(S, y, b, m) {
      if ((Symbol('JSCA_7172_7195'), !S.value)) return !0;
      var d = S.x - t.x,
        g = S.y - t.y,
        C = m - y,
        A = d * d + g * g;
      if ((C * C) / f < A)
        return (
          A < a &&
            (d === 0 && ((d = Ot(e)), (A += d * d)),
            g === 0 && ((g = Ot(e)), (A += g * g)),
            A < l && (A = Math.sqrt(l * A)),
            (t.vx += (d * S.value * r) / A),
            (t.vy += (g * S.value * r) / A)),
          !0
        );
      if (S.length || A >= a) return;
      (S.data !== t || S.next) &&
        (d === 0 && ((d = Ot(e)), (A += d * d)),
        g === 0 && ((g = Ot(e)), (A += g * g)),
        A < l && (A = Math.sqrt(l * A)));
      do
        S.data !== t &&
          ((C = (o[S.data.index] * r) / A), (t.vx += d * C), (t.vy += g * C));
      while ((S = S.next));
    }
    return (
      (u.initialize = function (S, y) {
        Symbol('JSCA_7196_7200'), (n = S), (e = y), c();
      }),
      (u.strength = function (S) {
        return (
          Symbol('JSCA_7201_7203'),
          arguments.length
            ? ((i = typeof S == 'function' ? S : Cn(+S)), c(), u)
            : i
        );
      }),
      (u.distanceMin = function (S) {
        return (
          Symbol('JSCA_7204_7206'),
          arguments.length ? ((l = S * S), u) : Math.sqrt(l)
        );
      }),
      (u.distanceMax = function (S) {
        return (
          Symbol('JSCA_7207_7209'),
          arguments.length ? ((a = S * S), u) : Math.sqrt(a)
        );
      }),
      (u.theta = function (S) {
        return (
          Symbol('JSCA_7210_7212'),
          arguments.length ? ((f = S * S), u) : Math.sqrt(f)
        );
      }),
      u
    );
  }
  function H4(n, t, e) {
    Symbol('JSCA_7215_7253');
    var r,
      i = Cn(0.1),
      o,
      l;
    typeof n != 'function' && (n = Cn(+n)),
      t == null && (t = 0),
      e == null && (e = 0);
    function a(u) {
      Symbol('JSCA_7220_7226');
      for (var c = 0, s = r.length; c < s; ++c) {
        var _ = r[c],
          S = _.x - t || 1e-6,
          y = _.y - e || 1e-6,
          b = Math.sqrt(S * S + y * y),
          m = ((l[c] - b) * o[c] * u) / b;
        (_.vx += S * m), (_.vy += y * m);
      }
    }
    function f() {
      if ((Symbol('JSCA_7227_7236'), !!r)) {
        var u,
          c = r.length;
        for (o = new Array(c), l = new Array(c), u = 0; u < c; ++u)
          (l[u] = +n(r[u], u, r)), (o[u] = isNaN(l[u]) ? 0 : +i(r[u], u, r));
      }
    }
    return (
      (a.initialize = function (u) {
        Symbol('JSCA_7237_7239'), (r = u), f();
      }),
      (a.strength = function (u) {
        return (
          Symbol('JSCA_7240_7242'),
          arguments.length
            ? ((i = typeof u == 'function' ? u : Cn(+u)), f(), a)
            : i
        );
      }),
      (a.radius = function (u) {
        return (
          Symbol('JSCA_7243_7245'),
          arguments.length
            ? ((n = typeof u == 'function' ? u : Cn(+u)), f(), a)
            : n
        );
      }),
      (a.x = function (u) {
        return Symbol('JSCA_7246_7248'), arguments.length ? ((t = +u), a) : t;
      }),
      (a.y = function (u) {
        return Symbol('JSCA_7249_7251'), arguments.length ? ((e = +u), a) : e;
      }),
      a
    );
  }
  function X4(n) {
    Symbol('JSCA_7254_7282');
    var t = Cn(0.1),
      e,
      r,
      i;
    typeof n != 'function' && (n = Cn(n == null ? 0 : +n));
    function o(a) {
      Symbol('JSCA_7257_7261');
      for (var f = 0, u = e.length, c; f < u; ++f)
        (c = e[f]), (c.vx += (i[f] - c.x) * r[f] * a);
    }
    function l() {
      if ((Symbol('JSCA_7262_7270'), !!e)) {
        var a,
          f = e.length;
        for (r = new Array(f), i = new Array(f), a = 0; a < f; ++a)
          r[a] = isNaN((i[a] = +n(e[a], a, e))) ? 0 : +t(e[a], a, e);
      }
    }
    return (
      (o.initialize = function (a) {
        Symbol('JSCA_7271_7274'), (e = a), l();
      }),
      (o.strength = function (a) {
        return (
          Symbol('JSCA_7275_7277'),
          arguments.length
            ? ((t = typeof a == 'function' ? a : Cn(+a)), l(), o)
            : t
        );
      }),
      (o.x = function (a) {
        return (
          Symbol('JSCA_7278_7280'),
          arguments.length
            ? ((n = typeof a == 'function' ? a : Cn(+a)), l(), o)
            : n
        );
      }),
      o
    );
  }
  function G4(n) {
    Symbol('JSCA_7283_7311');
    var t = Cn(0.1),
      e,
      r,
      i;
    typeof n != 'function' && (n = Cn(n == null ? 0 : +n));
    function o(a) {
      Symbol('JSCA_7286_7290');
      for (var f = 0, u = e.length, c; f < u; ++f)
        (c = e[f]), (c.vy += (i[f] - c.y) * r[f] * a);
    }
    function l() {
      if ((Symbol('JSCA_7291_7299'), !!e)) {
        var a,
          f = e.length;
        for (r = new Array(f), i = new Array(f), a = 0; a < f; ++a)
          r[a] = isNaN((i[a] = +n(e[a], a, e))) ? 0 : +t(e[a], a, e);
      }
    }
    return (
      (o.initialize = function (a) {
        Symbol('JSCA_7300_7303'), (e = a), l();
      }),
      (o.strength = function (a) {
        return (
          Symbol('JSCA_7304_7306'),
          arguments.length
            ? ((t = typeof a == 'function' ? a : Cn(+a)), l(), o)
            : t
        );
      }),
      (o.y = function (a) {
        return (
          Symbol('JSCA_7307_7309'),
          arguments.length
            ? ((n = typeof a == 'function' ? a : Cn(+a)), l(), o)
            : n
        );
      }),
      o
    );
  }
  function V4(n) {
    return (
      Symbol('JSCA_7312_7314'),
      Math.abs((n = Math.round(n))) >= 1e21
        ? n.toLocaleString('en').replace(/,/g, '')
        : n.toString(10)
    );
  }
  function ro(n, t) {
    if (
      (Symbol('JSCA_7315_7319'),
      (e = (n = t ? n.toExponential(t - 1) : n.toExponential()).indexOf('e')) <
        0)
    )
      return null;
    var e,
      r = n.slice(0, e);
    return [r.length > 1 ? r[0] + r.slice(2) : r, +n.slice(e + 1)];
  }
  function Ye(n) {
    return Symbol('JSCA_7320_7322'), (n = ro(Math.abs(n))), n ? n[1] : NaN;
  }
  function W4(n, t) {
    return (
      Symbol('JSCA_7323_7334'),
      function (e, r) {
        Symbol('JSCA_7324_7333');
        for (
          var i = e.length, o = [], l = 0, a = n[0], f = 0;
          i > 0 &&
          a > 0 &&
          (f + a + 1 > r && (a = Math.max(1, r - f)),
          o.push(e.substring((i -= a), i + a)),
          !((f += a + 1) > r));

        )
          a = n[(l = (l + 1) % n.length)];
        return o.reverse().join(t);
      }
    );
  }
  function Z4(n) {
    return (
      Symbol('JSCA_7335_7341'),
      function (t) {
        return (
          Symbol('JSCA_7336_7340'),
          t.replace(/[0-9]/g, function (e) {
            return Symbol('JSCA_7337_7339'), n[+e];
          })
        );
      }
    );
  }
  var Q4 =
    /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function Ue(n) {
    if ((Symbol('JSCA_7343_7358'), !(t = Q4.exec(n))))
      throw new Error('invalid format: ' + n);
    var t;
    return new io({
      fill: t[1],
      align: t[2],
      sign: t[3],
      symbol: t[4],
      zero: t[5],
      width: t[6],
      comma: t[7],
      precision: t[8] && t[8].slice(1),
      trim: t[9],
      type: t[10],
    });
  }
  Ue.prototype = io.prototype;
  function io(n) {
    Symbol('JSCA_7360_7371'),
      (this.fill = n.fill === void 0 ? ' ' : n.fill + ''),
      (this.align = n.align === void 0 ? '>' : n.align + ''),
      (this.sign = n.sign === void 0 ? '-' : n.sign + ''),
      (this.symbol = n.symbol === void 0 ? '' : n.symbol + ''),
      (this.zero = !!n.zero),
      (this.width = n.width === void 0 ? void 0 : +n.width),
      (this.comma = !!n.comma),
      (this.precision = n.precision === void 0 ? void 0 : +n.precision),
      (this.trim = !!n.trim),
      (this.type = n.type === void 0 ? '' : n.type + '');
  }
  io.prototype.toString = function () {
    return (
      Symbol('JSCA_7372_7374'),
      this.fill +
        this.align +
        this.sign +
        this.symbol +
        (this.zero ? '0' : '') +
        (this.width === void 0 ? '' : Math.max(1, this.width | 0)) +
        (this.comma ? ',' : '') +
        (this.precision === void 0
          ? ''
          : '.' + Math.max(0, this.precision | 0)) +
        (this.trim ? '~' : '') +
        this.type
    );
  };
  function K4(n) {
    Symbol('JSCA_7375_7392');
    n: for (var t = n.length, e = 1, r = -1, i; e < t; ++e)
      switch (n[e]) {
        case '.':
          r = i = e;
          break;
        case '0':
          r === 0 && (r = e), (i = e);
          break;
        default:
          if (!+n[e]) break n;
          r > 0 && (r = 0);
          break;
      }
    return r > 0 ? n.slice(0, r) + n.slice(i + 1) : n;
  }
  var Lc;
  function j4(n, t) {
    Symbol('JSCA_7394_7399');
    var e = ro(n, t);
    if (!e) return n + '';
    var r = e[0],
      i = e[1],
      o = i - (Lc = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
      l = r.length;
    return o === l
      ? r
      : o > l
      ? r + new Array(o - l + 1).join('0')
      : o > 0
      ? r.slice(0, o) + '.' + r.slice(o)
      : '0.' + new Array(1 - o).join('0') + ro(n, Math.max(0, t + o - 1))[0];
  }
  function qc(n, t) {
    Symbol('JSCA_7400_7405');
    var e = ro(n, t);
    if (!e) return n + '';
    var r = e[0],
      i = e[1];
    return i < 0
      ? '0.' + new Array(-i).join('0') + r
      : r.length > i + 1
      ? r.slice(0, i + 1) + '.' + r.slice(i + 1)
      : r + new Array(i - r.length + 2).join('0');
  }
  var Yc = {
    '%': (n, t) => (n * 100).toFixed(t),
    b: (n) => Math.round(n).toString(2),
    c: (n) => n + '',
    d: V4,
    e: (n, t) => n.toExponential(t),
    f: (n, t) => n.toFixed(t),
    g: (n, t) => n.toPrecision(t),
    o: (n) => Math.round(n).toString(8),
    p: (n, t) => qc(n * 100, t),
    r: qc,
    s: j4,
    X: (n) => Math.round(n).toString(16).toUpperCase(),
    x: (n) => Math.round(n).toString(16),
  };
  function Uc(n) {
    return Symbol('JSCA_7421_7423'), n;
  }
  var Bc = Array.prototype.map,
    Hc = [
      'y',
      'z',
      'a',
      'f',
      'p',
      'n',
      '\xB5',
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
  function Xc(n) {
    Symbol('JSCA_7425_7493');
    var t =
        n.grouping === void 0 || n.thousands === void 0
          ? Uc
          : W4(Bc.call(n.grouping, Number), n.thousands + ''),
      e = n.currency === void 0 ? '' : n.currency[0] + '',
      r = n.currency === void 0 ? '' : n.currency[1] + '',
      i = n.decimal === void 0 ? '.' : n.decimal + '',
      o = n.numerals === void 0 ? Uc : Z4(Bc.call(n.numerals, String)),
      l = n.percent === void 0 ? '%' : n.percent + '',
      a = n.minus === void 0 ? '\u2212' : n.minus + '',
      f = n.nan === void 0 ? 'NaN' : n.nan + '';
    function u(s) {
      Symbol('JSCA_7427_7482'), (s = Ue(s));
      var _ = s.fill,
        S = s.align,
        y = s.sign,
        b = s.symbol,
        m = s.zero,
        d = s.width,
        g = s.comma,
        C = s.precision,
        A = s.trim,
        J = s.type;
      J === 'n'
        ? ((g = !0), (J = 'g'))
        : Yc[J] || (C === void 0 && (C = 12), (A = !0), (J = 'g')),
        (m || (_ === '0' && S === '=')) && ((m = !0), (_ = '0'), (S = '='));
      var p =
          b === '$'
            ? e
            : b === '#' && /[boxX]/.test(J)
            ? '0' + J.toLowerCase()
            : '',
        $ = b === '$' ? r : /[%p]/.test(J) ? l : '',
        N = Yc[J],
        k = /[defgprs%]/.test(J);
      C =
        C === void 0
          ? 6
          : /[gprs]/.test(J)
          ? Math.max(1, Math.min(21, C))
          : Math.max(0, Math.min(20, C));
      function E(w) {
        Symbol('JSCA_7435_7477');
        var P = p,
          x = $,
          v,
          T,
          M;
        if (J === 'c') (x = N(w) + x), (w = '');
        else {
          w = +w;
          var R = w < 0 || 1 / w < 0;
          if (
            ((w = isNaN(w) ? f : N(Math.abs(w), C)),
            A && (w = K4(w)),
            R && +w == 0 && y !== '+' && (R = !1),
            (P =
              (R ? (y === '(' ? y : a) : y === '-' || y === '(' ? '' : y) + P),
            (x =
              (J === 's' ? Hc[8 + Lc / 3] : '') +
              x +
              (R && y === '(' ? ')' : '')),
            k)
          ) {
            for (v = -1, T = w.length; ++v < T; )
              if (((M = w.charCodeAt(v)), 48 > M || M > 57)) {
                (x = (M === 46 ? i + w.slice(v + 1) : w.slice(v)) + x),
                  (w = w.slice(0, v));
                break;
              }
          }
        }
        g && !m && (w = t(w, 1 / 0));
        var z = P.length + w.length + x.length,
          I = z < d ? new Array(d - z + 1).join(_) : '';
        switch (
          (g &&
            m &&
            ((w = t(I + w, I.length ? d - x.length : 1 / 0)), (I = '')),
          S)
        ) {
          case '<':
            w = P + w + x + I;
            break;
          case '=':
            w = P + I + w + x;
            break;
          case '^':
            w = I.slice(0, (z = I.length >> 1)) + P + w + x + I.slice(z);
            break;
          default:
            w = I + P + w + x;
            break;
        }
        return o(w);
      }
      return (
        (E.toString = function () {
          return Symbol('JSCA_7478_7480'), s + '';
        }),
        E
      );
    }
    function c(s, _) {
      Symbol('JSCA_7483_7488');
      var S = u(((s = Ue(s)), (s.type = 'f'), s)),
        y = Math.max(-8, Math.min(8, Math.floor(Ye(_) / 3))) * 3,
        b = Math.pow(10, -y),
        m = Hc[8 + y / 3];
      return function (d) {
        return Symbol('JSCA_7485_7487'), S(b * d) + m;
      };
    }
    return { format: u, formatPrefix: c };
  }
  var oo;
  (h.format = void 0),
    (h.formatPrefix = void 0),
    Gc({ thousands: ',', grouping: [3], currency: ['$', ''] });
  function Gc(n) {
    return (
      Symbol('JSCA_7502_7507'),
      (oo = Xc(n)),
      (h.format = oo.format),
      (h.formatPrefix = oo.formatPrefix),
      oo
    );
  }
  function Vc(n) {
    return Symbol('JSCA_7508_7510'), Math.max(0, -Ye(Math.abs(n)));
  }
  function Wc(n, t) {
    return (
      Symbol('JSCA_7511_7513'),
      Math.max(
        0,
        Math.max(-8, Math.min(8, Math.floor(Ye(t) / 3))) * 3 - Ye(Math.abs(n))
      )
    );
  }
  function Zc(n, t) {
    return (
      Symbol('JSCA_7514_7517'),
      (n = Math.abs(n)),
      (t = Math.abs(t) - n),
      Math.max(0, Ye(t) - Ye(n)) + 1
    );
  }
  var B = 1e-6,
    Nr = 1e-12,
    Z = Math.PI,
    sn = Z / 2,
    lo = Z / 4,
    zn = Z * 2,
    ln = 180 / Z,
    H = Z / 180,
    K = Math.abs,
    Be = Math.atan,
    Dn = Math.atan2,
    Y = Math.cos,
    ao = Math.ceil,
    Qc = Math.exp,
    za = Math.hypot,
    uo = Math.log,
    Da = Math.pow,
    L = Math.sin,
    Kn =
      Math.sign ||
      function (n) {
        return Symbol('JSCA_7536_7538'), n > 0 ? 1 : n < 0 ? -1 : 0;
      },
    pn = Math.sqrt,
    Fa = Math.tan;
  function Kc(n) {
    return Symbol('JSCA_7541_7543'), n > 1 ? 0 : n < -1 ? Z : Math.acos(n);
  }
  function Fn(n) {
    return Symbol('JSCA_7544_7546'), n > 1 ? sn : n < -1 ? -sn : Math.asin(n);
  }
  function jc(n) {
    return Symbol('JSCA_7547_7549'), (n = L(n / 2)) * n;
  }
  function cn() {
    Symbol('JSCA_7550_7550');
  }
  function fo(n, t) {
    Symbol('JSCA_7551_7555'),
      n && t_.hasOwnProperty(n.type) && t_[n.type](n, t);
  }
  var n_ = {
      Feature: function (n, t) {
        Symbol('JSCA_7557_7559'), fo(n.geometry, t);
      },
      FeatureCollection: function (n, t) {
        Symbol('JSCA_7560_7563');
        for (var e = n.features, r = -1, i = e.length; ++r < i; )
          fo(e[r].geometry, t);
      },
    },
    t_ = {
      Sphere: function (n, t) {
        Symbol('JSCA_7566_7568'), t.sphere();
      },
      Point: function (n, t) {
        Symbol('JSCA_7569_7572'),
          (n = n.coordinates),
          t.point(n[0], n[1], n[2]);
      },
      MultiPoint: function (n, t) {
        Symbol('JSCA_7573_7576');
        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
          (n = e[r]), t.point(n[0], n[1], n[2]);
      },
      LineString: function (n, t) {
        Symbol('JSCA_7577_7579'), Oa(n.coordinates, t, 0);
      },
      MultiLineString: function (n, t) {
        Symbol('JSCA_7580_7583');
        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
          Oa(e[r], t, 0);
      },
      Polygon: function (n, t) {
        Symbol('JSCA_7584_7586'), e_(n.coordinates, t);
      },
      MultiPolygon: function (n, t) {
        Symbol('JSCA_7587_7590');
        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
          e_(e[r], t);
      },
      GeometryCollection: function (n, t) {
        Symbol('JSCA_7591_7594');
        for (var e = n.geometries, r = -1, i = e.length; ++r < i; ) fo(e[r], t);
      },
    };
  function Oa(n, t, e) {
    Symbol('JSCA_7596_7601');
    var r = -1,
      i = n.length - e,
      o;
    for (t.lineStart(); ++r < i; ) (o = n[r]), t.point(o[0], o[1], o[2]);
    t.lineEnd();
  }
  function e_(n, t) {
    Symbol('JSCA_7602_7607');
    var e = -1,
      r = n.length;
    for (t.polygonStart(); ++e < r; ) Oa(n[e], t, 1);
    t.polygonEnd();
  }
  function at(n, t) {
    Symbol('JSCA_7608_7614'),
      n && n_.hasOwnProperty(n.type) ? n_[n.type](n, t) : fo(n, t);
  }
  var co = new An(),
    _o = new An(),
    r_,
    i_,
    La,
    qa,
    Ya,
    ht = {
      point: cn,
      lineStart: cn,
      lineEnd: cn,
      polygonStart: function () {
        Symbol('JSCA_7621_7625'),
          (co = new An()),
          (ht.lineStart = n6),
          (ht.lineEnd = t6);
      },
      polygonEnd: function () {
        Symbol('JSCA_7626_7630');
        var n = +co;
        _o.add(n < 0 ? zn + n : n),
          (this.lineStart = this.lineEnd = this.point = cn);
      },
      sphere: function () {
        Symbol('JSCA_7631_7633'), _o.add(zn);
      },
    };
  function n6() {
    Symbol('JSCA_7635_7637'), (ht.point = e6);
  }
  function t6() {
    Symbol('JSCA_7638_7640'), o_(r_, i_);
  }
  function e6(n, t) {
    Symbol('JSCA_7641_7646'),
      (ht.point = o_),
      (r_ = n),
      (i_ = t),
      (n *= H),
      (t *= H),
      (La = n),
      (qa = Y((t = t / 2 + lo))),
      (Ya = L(t));
  }
  function o_(n, t) {
    Symbol('JSCA_7647_7653'), (n *= H), (t *= H), (t = t / 2 + lo);
    var e = n - La,
      r = e >= 0 ? 1 : -1,
      i = r * e,
      o = Y(t),
      l = L(t),
      a = Ya * l,
      f = qa * o + a * Y(i),
      u = a * r * L(i);
    co.add(Dn(u, f)), (La = n), (qa = o), (Ya = l);
  }
  function r6(n) {
    return Symbol('JSCA_7654_7658'), (_o = new An()), at(n, ht), _o * 2;
  }
  function so(n) {
    return Symbol('JSCA_7659_7661'), [Dn(n[1], n[0]), Fn(n[2])];
  }
  function Se(n) {
    Symbol('JSCA_7662_7665');
    var t = n[0],
      e = n[1],
      r = Y(e);
    return [r * Y(t), r * L(t), L(e)];
  }
  function So(n, t) {
    return Symbol('JSCA_7666_7668'), n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
  }
  function He(n, t) {
    return (
      Symbol('JSCA_7669_7671'),
      [
        n[1] * t[2] - n[2] * t[1],
        n[2] * t[0] - n[0] * t[2],
        n[0] * t[1] - n[1] * t[0],
      ]
    );
  }
  function Ua(n, t) {
    Symbol('JSCA_7672_7674'), (n[0] += t[0]), (n[1] += t[1]), (n[2] += t[2]);
  }
  function ho(n, t) {
    return Symbol('JSCA_7675_7677'), [n[0] * t, n[1] * t, n[2] * t];
  }
  function mo(n) {
    Symbol('JSCA_7678_7681');
    var t = pn(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
    (n[0] /= t), (n[1] /= t), (n[2] /= t);
  }
  var _n,
    Xn,
    Sn,
    Wn,
    he,
    l_,
    a_,
    Xe,
    xr,
    Lt,
    wt,
    Mt = {
      point: Ba,
      lineStart: f_,
      lineEnd: c_,
      polygonStart: function () {
        Symbol('JSCA_7687_7693'),
          (Mt.point = __),
          (Mt.lineStart = i6),
          (Mt.lineEnd = o6),
          (xr = new An()),
          ht.polygonStart();
      },
      polygonEnd: function () {
        Symbol('JSCA_7694_7701'),
          ht.polygonEnd(),
          (Mt.point = Ba),
          (Mt.lineStart = f_),
          (Mt.lineEnd = c_),
          co < 0
            ? ((_n = -(Sn = 180)), (Xn = -(Wn = 90)))
            : xr > B
            ? (Wn = 90)
            : xr < -B && (Xn = -90),
          (wt[0] = _n),
          (wt[1] = Sn);
      },
      sphere: function () {
        Symbol('JSCA_7702_7704'), (_n = -(Sn = 180)), (Xn = -(Wn = 90));
      },
    };
  function Ba(n, t) {
    Symbol('JSCA_7706_7710'),
      Lt.push((wt = [(_n = n), (Sn = n)])),
      t < Xn && (Xn = t),
      t > Wn && (Wn = t);
  }
  function u_(n, t) {
    Symbol('JSCA_7711_7752');
    var e = Se([n * H, t * H]);
    if (Xe) {
      var r = He(Xe, e),
        i = [r[1], -r[0], 0],
        o = He(i, r);
      mo(o), (o = so(o));
      var l = n - he,
        a = l > 0 ? 1 : -1,
        f = o[0] * ln * a,
        u,
        c = K(l) > 180;
      c ^ (a * he < f && f < a * n)
        ? ((u = o[1] * ln), u > Wn && (Wn = u))
        : ((f = ((f + 360) % 360) - 180),
          c ^ (a * he < f && f < a * n)
            ? ((u = -o[1] * ln), u < Xn && (Xn = u))
            : (t < Xn && (Xn = t), t > Wn && (Wn = t))),
        c
          ? n < he
            ? Zn(_n, n) > Zn(_n, Sn) && (Sn = n)
            : Zn(n, Sn) > Zn(_n, Sn) && (_n = n)
          : Sn >= _n
          ? (n < _n && (_n = n), n > Sn && (Sn = n))
          : n > he
          ? Zn(_n, n) > Zn(_n, Sn) && (Sn = n)
          : Zn(n, Sn) > Zn(_n, Sn) && (_n = n);
    } else Lt.push((wt = [(_n = n), (Sn = n)]));
    t < Xn && (Xn = t), t > Wn && (Wn = t), (Xe = e), (he = n);
  }
  function f_() {
    Symbol('JSCA_7753_7755'), (Mt.point = u_);
  }
  function c_() {
    Symbol('JSCA_7756_7760'),
      (wt[0] = _n),
      (wt[1] = Sn),
      (Mt.point = Ba),
      (Xe = null);
  }
  function __(n, t) {
    if ((Symbol('JSCA_7761_7770'), Xe)) {
      var e = n - he;
      xr.add(K(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
    } else (l_ = n), (a_ = t);
    ht.point(n, t), u_(n, t);
  }
  function i6() {
    Symbol('JSCA_7771_7773'), ht.lineStart();
  }
  function o6() {
    Symbol('JSCA_7774_7780'),
      __(l_, a_),
      ht.lineEnd(),
      K(xr) > B && (_n = -(Sn = 180)),
      (wt[0] = _n),
      (wt[1] = Sn),
      (Xe = null);
  }
  function Zn(n, t) {
    return Symbol('JSCA_7781_7783'), (t -= n) < 0 ? t + 360 : t;
  }
  function l6(n, t) {
    return Symbol('JSCA_7784_7786'), n[0] - t[0];
  }
  function s_(n, t) {
    return (
      Symbol('JSCA_7787_7789'),
      n[0] <= n[1] ? n[0] <= t && t <= n[1] : t < n[0] || n[1] < t
    );
  }
  function a6(n) {
    Symbol('JSCA_7790_7813');
    var t, e, r, i, o, l, a;
    if (
      ((Wn = Sn = -(_n = Xn = 1 / 0)), (Lt = []), at(n, Mt), (e = Lt.length))
    ) {
      for (Lt.sort(l6), t = 1, r = Lt[0], o = [r]; t < e; ++t)
        (i = Lt[t]),
          s_(r, i[0]) || s_(r, i[1])
            ? (Zn(r[0], i[1]) > Zn(r[0], r[1]) && (r[1] = i[1]),
              Zn(i[0], r[1]) > Zn(r[0], r[1]) && (r[0] = i[0]))
            : o.push((r = i));
      for (l = -1 / 0, e = o.length - 1, t = 0, r = o[e]; t <= e; r = i, ++t)
        (i = o[t]),
          (a = Zn(r[1], i[0])) > l && ((l = a), (_n = i[0]), (Sn = r[1]));
    }
    return (
      (Lt = wt = null),
      _n === 1 / 0 || Xn === 1 / 0
        ? [
            [NaN, NaN],
            [NaN, NaN],
          ]
        : [
            [_n, Xn],
            [Sn, Wn],
          ]
    );
  }
  var Rr,
    yo,
    bo,
    Ao,
    Co,
    go,
    Jo,
    po,
    Ha,
    Xa,
    Ga,
    S_,
    h_,
    On,
    Ln,
    qn,
    ut = {
      sphere: cn,
      point: Va,
      lineStart: m_,
      lineEnd: y_,
      polygonStart: function () {
        Symbol('JSCA_7820_7823'), (ut.lineStart = c6), (ut.lineEnd = _6);
      },
      polygonEnd: function () {
        Symbol('JSCA_7824_7827'), (ut.lineStart = m_), (ut.lineEnd = y_);
      },
    };
  function Va(n, t) {
    Symbol('JSCA_7829_7833'), (n *= H), (t *= H);
    var e = Y(t);
    Pr(e * Y(n), e * L(n), L(t));
  }
  function Pr(n, t, e) {
    Symbol('JSCA_7834_7839'),
      ++Rr,
      (bo += (n - bo) / Rr),
      (Ao += (t - Ao) / Rr),
      (Co += (e - Co) / Rr);
  }
  function m_() {
    Symbol('JSCA_7840_7842'), (ut.point = u6);
  }
  function u6(n, t) {
    Symbol('JSCA_7843_7851'), (n *= H), (t *= H);
    var e = Y(t);
    (On = e * Y(n)),
      (Ln = e * L(n)),
      (qn = L(t)),
      (ut.point = f6),
      Pr(On, Ln, qn);
  }
  function f6(n, t) {
    Symbol('JSCA_7852_7860'), (n *= H), (t *= H);
    var e = Y(t),
      r = e * Y(n),
      i = e * L(n),
      o = L(t),
      l = Dn(
        pn(
          (l = Ln * o - qn * i) * l +
            (l = qn * r - On * o) * l +
            (l = On * i - Ln * r) * l
        ),
        On * r + Ln * i + qn * o
      );
    (yo += l),
      (go += l * (On + (On = r))),
      (Jo += l * (Ln + (Ln = i))),
      (po += l * (qn + (qn = o))),
      Pr(On, Ln, qn);
  }
  function y_() {
    Symbol('JSCA_7861_7863'), (ut.point = Va);
  }
  function c6() {
    Symbol('JSCA_7864_7866'), (ut.point = s6);
  }
  function _6() {
    Symbol('JSCA_7867_7870'), b_(S_, h_), (ut.point = Va);
  }
  function s6(n, t) {
    Symbol('JSCA_7871_7880'),
      (S_ = n),
      (h_ = t),
      (n *= H),
      (t *= H),
      (ut.point = b_);
    var e = Y(t);
    (On = e * Y(n)), (Ln = e * L(n)), (qn = L(t)), Pr(On, Ln, qn);
  }
  function b_(n, t) {
    Symbol('JSCA_7881_7892'), (n *= H), (t *= H);
    var e = Y(t),
      r = e * Y(n),
      i = e * L(n),
      o = L(t),
      l = Ln * o - qn * i,
      a = qn * r - On * o,
      f = On * i - Ln * r,
      u = za(l, a, f),
      c = Fn(u),
      s = u && -c / u;
    Ha.add(s * l),
      Xa.add(s * a),
      Ga.add(s * f),
      (yo += c),
      (go += c * (On + (On = r))),
      (Jo += c * (Ln + (Ln = i))),
      (po += c * (qn + (qn = o))),
      Pr(On, Ln, qn);
  }
  function S6(n) {
    Symbol('JSCA_7893_7907'),
      (Rr = yo = bo = Ao = Co = go = Jo = po = 0),
      (Ha = new An()),
      (Xa = new An()),
      (Ga = new An()),
      at(n, ut);
    var t = +Ha,
      e = +Xa,
      r = +Ga,
      i = za(t, e, r);
    return i < Nr &&
      ((t = go),
      (e = Jo),
      (r = po),
      yo < B && ((t = bo), (e = Ao), (r = Co)),
      (i = za(t, e, r)),
      i < Nr)
      ? [NaN, NaN]
      : [Dn(e, t) * ln, Fn(r / i) * ln];
  }
  function Ge(n) {
    return (
      Symbol('JSCA_7908_7912'),
      function () {
        return Symbol('JSCA_7909_7911'), n;
      }
    );
  }
  function Wa(n, t) {
    Symbol('JSCA_7913_7921');
    function e(r, i) {
      return Symbol('JSCA_7914_7916'), (r = n(r, i)), t(r[0], r[1]);
    }
    return (
      n.invert &&
        t.invert &&
        (e.invert = function (r, i) {
          return (
            Symbol('JSCA_7917_7919'),
            (r = t.invert(r, i)),
            r && n.invert(r[0], r[1])
          );
        }),
      e
    );
  }
  function Za(n, t) {
    return (
      Symbol('JSCA_7922_7925'),
      K(n) > Z && (n -= Math.round(n / zn) * zn),
      [n, t]
    );
  }
  Za.invert = Za;
  function Qa(n, t, e) {
    return (
      Symbol('JSCA_7927_7929'),
      (n %= zn)
        ? t || e
          ? Wa(A_(n), C_(t, e))
          : A_(n)
        : t || e
        ? C_(t, e)
        : Za
    );
  }
  function d_(n) {
    return (
      Symbol('JSCA_7930_7936'),
      function (t, e) {
        return (
          Symbol('JSCA_7931_7935'),
          (t += n),
          K(t) > Z && (t -= Math.round(t / zn) * zn),
          [t, e]
        );
      }
    );
  }
  function A_(n) {
    Symbol('JSCA_7937_7941');
    var t = d_(n);
    return (t.invert = d_(-n)), t;
  }
  function C_(n, t) {
    Symbol('JSCA_7942_7953');
    var e = Y(n),
      r = L(n),
      i = Y(t),
      o = L(t);
    function l(a, f) {
      Symbol('JSCA_7944_7947');
      var u = Y(f),
        c = Y(a) * u,
        s = L(a) * u,
        _ = L(f),
        S = _ * e + c * r;
      return [Dn(s * i - S * o, c * e - _ * r), Fn(S * i + s * o)];
    }
    return (
      (l.invert = function (a, f) {
        Symbol('JSCA_7948_7951');
        var u = Y(f),
          c = Y(a) * u,
          s = L(a) * u,
          _ = L(f),
          S = _ * i - s * o;
        return [Dn(s * i + _ * o, c * e + S * r), Fn(S * e - c * r)];
      }),
      l
    );
  }
  function g_(n) {
    Symbol('JSCA_7954_7965'),
      (n = Qa(n[0] * H, n[1] * H, n.length > 2 ? n[2] * H : 0));
    function t(e) {
      return (
        Symbol('JSCA_7956_7959'),
        (e = n(e[0] * H, e[1] * H)),
        (e[0] *= ln),
        (e[1] *= ln),
        e
      );
    }
    return (
      (t.invert = function (e) {
        return (
          Symbol('JSCA_7960_7963'),
          (e = n.invert(e[0] * H, e[1] * H)),
          (e[0] *= ln),
          (e[1] *= ln),
          e
        );
      }),
      t
    );
  }
  function J_(n, t, e, r, i, o) {
    if ((Symbol('JSCA_7966_7981'), !!e)) {
      var l = Y(t),
        a = L(t),
        f = r * e;
      i == null
        ? ((i = t + r * zn), (o = t - f / 2))
        : ((i = p_(l, i)),
          (o = p_(l, o)),
          (r > 0 ? i < o : i > o) && (i += r * zn));
      for (var u, c = i; r > 0 ? c > o : c < o; c -= f)
        (u = so([l, -a * Y(c), -a * L(c)])), n.point(u[0], u[1]);
    }
  }
  function p_(n, t) {
    Symbol('JSCA_7982_7987'), (t = Se(t)), (t[0] -= n), mo(t);
    var e = Kc(-t[1]);
    return ((-t[2] < 0 ? -e : e) + zn - B) % zn;
  }
  function h6() {
    Symbol('JSCA_7988_8018');
    var n = Ge([0, 0]),
      t = Ge(90),
      e = Ge(2),
      r,
      i,
      o = { point: l };
    function l(f, u) {
      Symbol('JSCA_7992_7995'),
        r.push((f = i(f, u))),
        (f[0] *= ln),
        (f[1] *= ln);
    }
    function a() {
      Symbol('JSCA_7996_8007');
      var f = n.apply(this, arguments),
        u = t.apply(this, arguments) * H,
        c = e.apply(this, arguments) * H;
      return (
        (r = []),
        (i = Qa(-f[0] * H, -f[1] * H, 0).invert),
        J_(o, u, c, 1),
        (f = { type: 'Polygon', coordinates: [r] }),
        (r = i = null),
        f
      );
    }
    return (
      (a.center = function (f) {
        return (
          Symbol('JSCA_8008_8010'),
          arguments.length
            ? ((n = typeof f == 'function' ? f : Ge([+f[0], +f[1]])), a)
            : n
        );
      }),
      (a.radius = function (f) {
        return (
          Symbol('JSCA_8011_8013'),
          arguments.length ? ((t = typeof f == 'function' ? f : Ge(+f)), a) : t
        );
      }),
      (a.precision = function (f) {
        return (
          Symbol('JSCA_8014_8016'),
          arguments.length ? ((e = typeof f == 'function' ? f : Ge(+f)), a) : e
        );
      }),
      a
    );
  }
  function v_() {
    Symbol('JSCA_8019_8039');
    var n = [],
      t;
    return {
      point: function (e, r, i) {
        Symbol('JSCA_8022_8024'), t.push([e, r, i]);
      },
      lineStart: function () {
        Symbol('JSCA_8025_8027'), n.push((t = []));
      },
      lineEnd: cn,
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
  function vo(n, t) {
    return Symbol('JSCA_8040_8042'), K(n[0] - t[0]) < B && K(n[1] - t[1]) < B;
  }
  function wo(n, t, e, r) {
    Symbol('JSCA_8043_8050'),
      (this.x = n),
      (this.z = t),
      (this.o = e),
      (this.e = r),
      (this.v = !1),
      (this.n = this.p = null);
  }
  function w_(n, t, e, r, i) {
    Symbol('JSCA_8051_8107');
    var o = [],
      l = [],
      a,
      f;
    if (
      (n.forEach(function (y) {
        if ((Symbol('JSCA_8053_8069'), !((b = y.length - 1) <= 0))) {
          var b,
            m = y[0],
            d = y[b],
            g;
          if (vo(m, d)) {
            if (!m[2] && !d[2]) {
              for (i.lineStart(), a = 0; a < b; ++a)
                i.point((m = y[a])[0], m[1]);
              i.lineEnd();
              return;
            }
            d[0] += 2 * B;
          }
          o.push((g = new wo(m, y, null, !0))),
            l.push((g.o = new wo(m, null, g, !1))),
            o.push((g = new wo(d, y, null, !1))),
            l.push((g.o = new wo(d, null, g, !0)));
        }
      }),
      !!o.length)
    ) {
      for (l.sort(t), M_(o), M_(l), a = 0, f = l.length; a < f; ++a)
        l[a].e = e = !e;
      for (var u = o[0], c, s; ; ) {
        for (var _ = u, S = !0; _.v; ) if ((_ = _.n) === u) return;
        (c = _.z), i.lineStart();
        do {
          if (((_.v = _.o.v = !0), _.e)) {
            if (S)
              for (a = 0, f = c.length; a < f; ++a)
                i.point((s = c[a])[0], s[1]);
            else r(_.x, _.n.x, 1, i);
            _ = _.n;
          } else {
            if (S)
              for (c = _.p.z, a = c.length - 1; a >= 0; --a)
                i.point((s = c[a])[0], s[1]);
            else r(_.x, _.p.x, -1, i);
            _ = _.p;
          }
          (_ = _.o), (c = _.z), (S = !S);
        } while (!_.v);
        i.lineEnd();
      }
    }
  }
  function M_(n) {
    if ((Symbol('JSCA_8108_8118'), !!(t = n.length))) {
      for (var t, e = 0, r = n[0], i; ++e < t; )
        (r.n = i = n[e]), (i.p = r), (r = i);
      (r.n = i = n[0]), (i.p = r);
    }
  }
  function Ka(n) {
    return (
      Symbol('JSCA_8119_8121'),
      K(n[0]) <= Z ? n[0] : Kn(n[0]) * (((K(n[0]) + Z) % zn) - Z)
    );
  }
  function T_(n, t) {
    Symbol('JSCA_8122_8146');
    var e = Ka(t),
      r = t[1],
      i = L(r),
      o = [L(e), -Y(e), 0],
      l = 0,
      a = 0,
      f = new An();
    i === 1 ? (r = sn + B) : i === -1 && (r = -sn - B);
    for (var u = 0, c = n.length; u < c; ++u)
      if ((_ = (s = n[u]).length))
        for (
          var s,
            _,
            S = s[_ - 1],
            y = Ka(S),
            b = S[1] / 2 + lo,
            m = L(b),
            d = Y(b),
            g = 0;
          g < _;
          ++g, y = A, m = p, d = $, S = C
        ) {
          var C = s[g],
            A = Ka(C),
            J = C[1] / 2 + lo,
            p = L(J),
            $ = Y(J),
            N = A - y,
            k = N >= 0 ? 1 : -1,
            E = k * N,
            w = E > Z,
            P = m * p;
          if (
            (f.add(Dn(P * k * L(E), d * $ + P * Y(E))),
            (l += w ? N + k * zn : N),
            w ^ (y >= e) ^ (A >= e))
          ) {
            var x = He(Se(S), Se(C));
            mo(x);
            var v = He(o, x);
            mo(v);
            var T = (w ^ (N >= 0) ? -1 : 1) * Fn(v[2]);
            (r > T || (r === T && (x[0] || x[1]))) &&
              (a += w ^ (N >= 0) ? 1 : -1);
          }
        }
    return (l < -B || (l < B && f < -Nr)) ^ (a & 1);
  }
  function $_(n, t, e, r) {
    return (
      Symbol('JSCA_8147_8232'),
      function (i) {
        Symbol('JSCA_8148_8231');
        var o = t(i),
          l = v_(),
          a = t(l),
          f = !1,
          u,
          c,
          s,
          _ = {
            point: S,
            lineStart: b,
            lineEnd: m,
            polygonStart: function () {
              Symbol('JSCA_8154_8160'),
                (_.point = d),
                (_.lineStart = g),
                (_.lineEnd = C),
                (c = []),
                (u = []);
            },
            polygonEnd: function () {
              Symbol('JSCA_8161_8178'),
                (_.point = S),
                (_.lineStart = b),
                (_.lineEnd = m),
                (c = El(c));
              var A = T_(u, r);
              c.length
                ? (f || (i.polygonStart(), (f = !0)), w_(c, y6, A, e, i))
                : A &&
                  (f || (i.polygonStart(), (f = !0)),
                  i.lineStart(),
                  e(null, null, 1, i),
                  i.lineEnd()),
                f && (i.polygonEnd(), (f = !1)),
                (c = u = null);
            },
            sphere: function () {
              Symbol('JSCA_8179_8185'),
                i.polygonStart(),
                i.lineStart(),
                e(null, null, 1, i),
                i.lineEnd(),
                i.polygonEnd();
            },
          };
        function S(A, J) {
          Symbol('JSCA_8187_8189'), n(A, J) && i.point(A, J);
        }
        function y(A, J) {
          Symbol('JSCA_8190_8192'), o.point(A, J);
        }
        function b() {
          Symbol('JSCA_8193_8196'), (_.point = y), o.lineStart();
        }
        function m() {
          Symbol('JSCA_8197_8200'), (_.point = S), o.lineEnd();
        }
        function d(A, J) {
          Symbol('JSCA_8201_8204'), s.push([A, J]), a.point(A, J);
        }
        function g() {
          Symbol('JSCA_8205_8208'), a.lineStart(), (s = []);
        }
        function C() {
          Symbol('JSCA_8209_8229'), d(s[0][0], s[0][1]), a.lineEnd();
          var A = a.clean(),
            J = l.result(),
            p,
            $ = J.length,
            N,
            k,
            E;
          if ((s.pop(), u.push(s), (s = null), !!$)) {
            if (A & 1) {
              if (((k = J[0]), (N = k.length - 1) > 0)) {
                for (
                  f || (i.polygonStart(), (f = !0)), i.lineStart(), p = 0;
                  p < N;
                  ++p
                )
                  i.point((E = k[p])[0], E[1]);
                i.lineEnd();
              }
              return;
            }
            $ > 1 && A & 2 && J.push(J.pop().concat(J.shift())),
              c.push(J.filter(m6));
          }
        }
        return _;
      }
    );
  }
  function m6(n) {
    return Symbol('JSCA_8233_8235'), n.length > 1;
  }
  function y6(n, t) {
    return (
      Symbol('JSCA_8236_8238'),
      ((n = n.x)[0] < 0 ? n[1] - sn - B : sn - n[1]) -
        ((t = t.x)[0] < 0 ? t[1] - sn - B : sn - t[1])
    );
  }
  var ja = $_(
    function () {
      return Symbol('JSCA_8239_8241'), !0;
    },
    b6,
    A6,
    [-Z, -sn]
  );
  function b6(n) {
    Symbol('JSCA_8242_8280');
    var t = NaN,
      e = NaN,
      r = NaN,
      i;
    return {
      lineStart: function () {
        Symbol('JSCA_8245_8248'), n.lineStart(), (i = 1);
      },
      point: function (o, l) {
        Symbol('JSCA_8249_8271');
        var a = o > 0 ? Z : -Z,
          f = K(o - t);
        K(f - Z) < B
          ? (n.point(t, (e = (e + l) / 2 > 0 ? sn : -sn)),
            n.point(r, e),
            n.lineEnd(),
            n.lineStart(),
            n.point(a, e),
            n.point(o, e),
            (i = 0))
          : r !== a &&
            f >= Z &&
            (K(t - r) < B && (t -= r * B),
            K(o - a) < B && (o -= a * B),
            (e = d6(t, e, o, l)),
            n.point(r, e),
            n.lineEnd(),
            n.lineStart(),
            n.point(a, e),
            (i = 0)),
          n.point((t = o), (e = l)),
          (r = a);
      },
      lineEnd: function () {
        Symbol('JSCA_8272_8275'), n.lineEnd(), (t = e = NaN);
      },
      clean: function () {
        return Symbol('JSCA_8276_8278'), 2 - i;
      },
    };
  }
  function d6(n, t, e, r) {
    Symbol('JSCA_8281_8284');
    var i,
      o,
      l = L(n - e);
    return K(l) > B
      ? Be((L(t) * (o = Y(r)) * L(e) - L(r) * (i = Y(t)) * L(n)) / (i * o * l))
      : (t + r) / 2;
  }
  function A6(n, t, e, r) {
    Symbol('JSCA_8285_8307');
    var i;
    if (n == null)
      (i = e * sn),
        r.point(-Z, i),
        r.point(0, i),
        r.point(Z, i),
        r.point(Z, 0),
        r.point(Z, -i),
        r.point(0, -i),
        r.point(-Z, -i),
        r.point(-Z, 0),
        r.point(-Z, i);
    else if (K(n[0] - t[0]) > B) {
      var o = n[0] < t[0] ? Z : -Z;
      (i = (e * o) / 2), r.point(-o, i), r.point(0, i), r.point(o, i);
    } else r.point(t[0], t[1]);
  }
  function E_(n) {
    Symbol('JSCA_8308_8402');
    var t = Y(n),
      e = 2 * H,
      r = t > 0,
      i = K(t) > B;
    function o(c, s, _, S) {
      Symbol('JSCA_8310_8312'), J_(S, n, e, _, c, s);
    }
    function l(c, s) {
      return Symbol('JSCA_8313_8315'), Y(c) * Y(s) > t;
    }
    function a(c) {
      Symbol('JSCA_8316_8372');
      var s, _, S, y, b;
      return {
        lineStart: function () {
          Symbol('JSCA_8319_8322'), (y = S = !1), (b = 1);
        },
        point: function (m, d) {
          Symbol('JSCA_8323_8363');
          var g = [m, d],
            C,
            A = l(m, d),
            J = r ? (A ? 0 : u(m, d)) : A ? u(m + (m < 0 ? Z : -Z), d) : 0;
          if (
            (!s && (y = S = A) && c.lineStart(),
            A !== S &&
              ((C = f(s, g)), (!C || vo(s, C) || vo(g, C)) && (g[2] = 1)),
            A !== S)
          )
            (b = 0),
              A
                ? (c.lineStart(), (C = f(g, s)), c.point(C[0], C[1]))
                : ((C = f(s, g)), c.point(C[0], C[1], 2), c.lineEnd()),
              (s = C);
          else if (i && s && r ^ A) {
            var p;
            !(J & _) &&
              (p = f(g, s, !0)) &&
              ((b = 0),
              r
                ? (c.lineStart(),
                  c.point(p[0][0], p[0][1]),
                  c.point(p[1][0], p[1][1]),
                  c.lineEnd())
                : (c.point(p[1][0], p[1][1]),
                  c.lineEnd(),
                  c.lineStart(),
                  c.point(p[0][0], p[0][1], 3)));
          }
          A && (!s || !vo(s, g)) && c.point(g[0], g[1]),
            (s = g),
            (S = A),
            (_ = J);
        },
        lineEnd: function () {
          Symbol('JSCA_8364_8367'), S && c.lineEnd(), (s = null);
        },
        clean: function () {
          return Symbol('JSCA_8368_8370'), b | ((y && S) << 1);
        },
      };
    }
    function f(c, s, _) {
      Symbol('JSCA_8373_8394');
      var S = Se(c),
        y = Se(s),
        b = [1, 0, 0],
        m = He(S, y),
        d = So(m, m),
        g = m[0],
        C = d - g * g;
      if (!C) return !_ && c;
      var A = (t * d) / C,
        J = (-t * g) / C,
        p = He(b, m),
        $ = ho(b, A),
        N = ho(m, J);
      Ua($, N);
      var k = p,
        E = So($, k),
        w = So(k, k),
        P = E * E - w * (So($, $) - 1);
      if (!(P < 0)) {
        var x = pn(P),
          v = ho(k, (-E - x) / w);
        if ((Ua(v, $), (v = so(v)), !_)) return v;
        var T = c[0],
          M = s[0],
          R = c[1],
          z = s[1],
          I;
        M < T && ((I = T), (T = M), (M = I));
        var F = M - T,
          q = K(F - Z) < B,
          U = q || F < B;
        if (
          (!q && z < R && ((I = R), (R = z), (z = I)),
          U
            ? q
              ? (R + z > 0) ^ (v[1] < (K(v[0] - T) < B ? R : z))
              : R <= v[1] && v[1] <= z
            : (F > Z) ^ (T <= v[0] && v[0] <= M))
        ) {
          var rn = ho(k, (-E + x) / w);
          return Ua(rn, $), [v, so(rn)];
        }
      }
    }
    function u(c, s) {
      Symbol('JSCA_8395_8400');
      var _ = r ? n : Z - n,
        S = 0;
      return (
        c < -_ ? (S |= 1) : c > _ && (S |= 2),
        s < -_ ? (S |= 4) : s > _ && (S |= 8),
        S
      );
    }
    return $_(l, a, o, r ? [0, -n] : [-Z, n - Z]);
  }
  function C6(n, t, e, r, i, o) {
    Symbol('JSCA_8403_8448');
    var l = n[0],
      a = n[1],
      f = t[0],
      u = t[1],
      c = 0,
      s = 1,
      _ = f - l,
      S = u - a,
      y;
    if (((y = e - l), !(!_ && y > 0))) {
      if (((y /= _), _ < 0)) {
        if (y < c) return;
        y < s && (s = y);
      } else if (_ > 0) {
        if (y > s) return;
        y > c && (c = y);
      }
      if (((y = i - l), !(!_ && y < 0))) {
        if (((y /= _), _ < 0)) {
          if (y > s) return;
          y > c && (c = y);
        } else if (_ > 0) {
          if (y < c) return;
          y < s && (s = y);
        }
        if (((y = r - a), !(!S && y > 0))) {
          if (((y /= S), S < 0)) {
            if (y < c) return;
            y < s && (s = y);
          } else if (S > 0) {
            if (y > s) return;
            y > c && (c = y);
          }
          if (((y = o - a), !(!S && y < 0))) {
            if (((y /= S), S < 0)) {
              if (y > s) return;
              y > c && (c = y);
            } else if (S > 0) {
              if (y < c) return;
              y < s && (s = y);
            }
            return (
              c > 0 && ((n[0] = l + c * _), (n[1] = a + c * S)),
              s < 1 && ((t[0] = l + s * _), (t[1] = a + s * S)),
              !0
            );
          }
        }
      }
    }
  }
  var Ir = 1e9,
    Mo = -Ir;
  function To(n, t, e, r) {
    Symbol('JSCA_8450_8565');
    function i(u, c) {
      return Symbol('JSCA_8451_8453'), n <= u && u <= e && t <= c && c <= r;
    }
    function o(u, c, s, _) {
      Symbol('JSCA_8454_8461');
      var S = 0,
        y = 0;
      if (
        u == null ||
        (S = l(u, s)) !== (y = l(c, s)) ||
        (f(u, c) < 0) ^ (s > 0)
      )
        do _.point(S === 0 || S === 3 ? n : e, S > 1 ? r : t);
        while ((S = (S + s + 4) % 4) !== y);
      else _.point(c[0], c[1]);
    }
    function l(u, c) {
      return (
        Symbol('JSCA_8462_8464'),
        K(u[0] - n) < B
          ? c > 0
            ? 0
            : 3
          : K(u[0] - e) < B
          ? c > 0
            ? 2
            : 1
          : K(u[1] - t) < B
          ? c > 0
            ? 1
            : 0
          : c > 0
          ? 3
          : 2
      );
    }
    function a(u, c) {
      return Symbol('JSCA_8465_8467'), f(u.x, c.x);
    }
    function f(u, c) {
      Symbol('JSCA_8468_8471');
      var s = l(u, 1),
        _ = l(c, 1);
      return s !== _
        ? s - _
        : s === 0
        ? c[1] - u[1]
        : s === 1
        ? u[0] - c[0]
        : s === 2
        ? u[1] - c[1]
        : c[0] - u[0];
    }
    return function (u) {
      Symbol('JSCA_8472_8564');
      var c = u,
        s = v_(),
        _,
        S,
        y,
        b,
        m,
        d,
        g,
        C,
        A,
        J,
        p,
        $ = {
          point: N,
          lineStart: P,
          lineEnd: x,
          polygonStart: E,
          polygonEnd: w,
        };
      function N(T, M) {
        Symbol('JSCA_8481_8483'), i(T, M) && c.point(T, M);
      }
      function k() {
        Symbol('JSCA_8484_8497');
        for (var T = 0, M = 0, R = S.length; M < R; ++M)
          for (
            var z = S[M],
              I = 1,
              F = z.length,
              q = z[0],
              U,
              rn,
              nn = q[0],
              j = q[1];
            I < F;
            ++I
          )
            (U = nn),
              (rn = j),
              (q = z[I]),
              (nn = q[0]),
              (j = q[1]),
              rn <= r
                ? j > r && (nn - U) * (r - rn) > (j - rn) * (n - U) && ++T
                : j <= r && (nn - U) * (r - rn) < (j - rn) * (n - U) && --T;
        return T;
      }
      function E() {
        Symbol('JSCA_8498_8500'), (c = s), (_ = []), (S = []), (p = !0);
      }
      function w() {
        Symbol('JSCA_8501_8516');
        var T = k(),
          M = p && T,
          R = (_ = El(_)).length;
        (M || R) &&
          (u.polygonStart(),
          M && (u.lineStart(), o(null, null, 1, u), u.lineEnd()),
          R && w_(_, a, T, o, u),
          u.polygonEnd()),
          (c = u),
          (_ = S = y = null);
      }
      function P() {
        Symbol('JSCA_8517_8523'),
          ($.point = v),
          S && S.push((y = [])),
          (J = !0),
          (A = !1),
          (g = C = NaN);
      }
      function x() {
        Symbol('JSCA_8524_8532'),
          _ && (v(b, m), d && A && s.rejoin(), _.push(s.result())),
          ($.point = N),
          A && c.lineEnd();
      }
      function v(T, M) {
        Symbol('JSCA_8533_8562');
        var R = i(T, M);
        if ((S && y.push([T, M]), J))
          (b = T),
            (m = M),
            (d = R),
            (J = !1),
            R && (c.lineStart(), c.point(T, M));
        else if (R && A) c.point(T, M);
        else {
          var z = [
              (g = Math.max(Mo, Math.min(Ir, g))),
              (C = Math.max(Mo, Math.min(Ir, C))),
            ],
            I = [
              (T = Math.max(Mo, Math.min(Ir, T))),
              (M = Math.max(Mo, Math.min(Ir, M))),
            ];
          C6(z, I, n, t, e, r)
            ? (A || (c.lineStart(), c.point(z[0], z[1])),
              c.point(I[0], I[1]),
              R || c.lineEnd(),
              (p = !1))
            : R && (c.lineStart(), c.point(T, M), (p = !1));
        }
        (g = T), (C = M), (A = R);
      }
      return $;
    };
  }
  function g6() {
    Symbol('JSCA_8566_8576');
    var n = 0,
      t = 0,
      e = 960,
      r = 500,
      i,
      o,
      l;
    return (l = {
      stream: function (a) {
        return (
          Symbol('JSCA_8569_8571'),
          i && o === a ? i : (i = To(n, t, e, r)((o = a)))
        );
      },
      extent: function (a) {
        return (
          Symbol('JSCA_8572_8574'),
          arguments.length
            ? ((n = +a[0][0]),
              (t = +a[0][1]),
              (e = +a[1][0]),
              (r = +a[1][1]),
              (i = o = null),
              l)
            : [
                [n, t],
                [e, r],
              ]
        );
      },
    });
  }
  var nu,
    tu,
    $o,
    Eo,
    Ve = {
      sphere: cn,
      point: cn,
      lineStart: J6,
      lineEnd: cn,
      polygonStart: cn,
      polygonEnd: cn,
    };
  function J6() {
    Symbol('JSCA_8586_8589'), (Ve.point = v6), (Ve.lineEnd = p6);
  }
  function p6() {
    Symbol('JSCA_8590_8592'), (Ve.point = Ve.lineEnd = cn);
  }
  function v6(n, t) {
    Symbol('JSCA_8593_8597'),
      (n *= H),
      (t *= H),
      (tu = n),
      ($o = L(t)),
      (Eo = Y(t)),
      (Ve.point = w6);
  }
  function w6(n, t) {
    Symbol('JSCA_8598_8603'), (n *= H), (t *= H);
    var e = L(t),
      r = Y(t),
      i = K(n - tu),
      o = Y(i),
      l = L(i),
      a = r * l,
      f = Eo * e - $o * r * o,
      u = $o * e + Eo * r * o;
    nu.add(Dn(pn(a * a + f * f), u)), (tu = n), ($o = e), (Eo = r);
  }
  function k_(n) {
    return Symbol('JSCA_8604_8608'), (nu = new An()), at(n, Ve), +nu;
  }
  var eu = [null, null],
    M6 = { type: 'LineString', coordinates: eu };
  function ko(n, t) {
    return Symbol('JSCA_8613_8617'), (eu[0] = n), (eu[1] = t), k_(M6);
  }
  var N_ = {
      Feature: function (n, t) {
        return Symbol('JSCA_8619_8621'), No(n.geometry, t);
      },
      FeatureCollection: function (n, t) {
        Symbol('JSCA_8622_8626');
        for (var e = n.features, r = -1, i = e.length; ++r < i; )
          if (No(e[r].geometry, t)) return !0;
        return !1;
      },
    },
    x_ = {
      Sphere: function () {
        return Symbol('JSCA_8629_8631'), !0;
      },
      Point: function (n, t) {
        return Symbol('JSCA_8632_8634'), R_(n.coordinates, t);
      },
      MultiPoint: function (n, t) {
        Symbol('JSCA_8635_8639');
        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
          if (R_(e[r], t)) return !0;
        return !1;
      },
      LineString: function (n, t) {
        return Symbol('JSCA_8640_8642'), P_(n.coordinates, t);
      },
      MultiLineString: function (n, t) {
        Symbol('JSCA_8643_8647');
        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
          if (P_(e[r], t)) return !0;
        return !1;
      },
      Polygon: function (n, t) {
        return Symbol('JSCA_8648_8650'), I_(n.coordinates, t);
      },
      MultiPolygon: function (n, t) {
        Symbol('JSCA_8651_8655');
        for (var e = n.coordinates, r = -1, i = e.length; ++r < i; )
          if (I_(e[r], t)) return !0;
        return !1;
      },
      GeometryCollection: function (n, t) {
        Symbol('JSCA_8656_8660');
        for (var e = n.geometries, r = -1, i = e.length; ++r < i; )
          if (No(e[r], t)) return !0;
        return !1;
      },
    };
  function No(n, t) {
    return (
      Symbol('JSCA_8662_8664'),
      n && x_.hasOwnProperty(n.type) ? x_[n.type](n, t) : !1
    );
  }
  function R_(n, t) {
    return Symbol('JSCA_8665_8667'), ko(n, t) === 0;
  }
  function P_(n, t) {
    Symbol('JSCA_8668_8680');
    for (var e, r, i, o = 0, l = n.length; o < l; o++) {
      if (
        ((r = ko(n[o], t)),
        r === 0 ||
          (o > 0 &&
            ((i = ko(n[o], n[o - 1])),
            i > 0 &&
              e <= i &&
              r <= i &&
              (e + r - i) * (1 - Math.pow((e - r) / i, 2)) < Nr * i)))
      )
        return !0;
      e = r;
    }
    return !1;
  }
  function I_(n, t) {
    return Symbol('JSCA_8681_8683'), !!T_(n.map(T6), z_(t));
  }
  function T6(n) {
    return Symbol('JSCA_8684_8686'), (n = n.map(z_)), n.pop(), n;
  }
  function z_(n) {
    return Symbol('JSCA_8687_8689'), [n[0] * H, n[1] * H];
  }
  function $6(n, t) {
    return (
      Symbol('JSCA_8690_8692'),
      (n && N_.hasOwnProperty(n.type) ? N_[n.type] : No)(n, t)
    );
  }
  function D_(n, t, e) {
    Symbol('JSCA_8693_8700');
    var r = Rt(n, t - B, e).concat(t);
    return function (i) {
      return (
        Symbol('JSCA_8695_8699'),
        r.map(function (o) {
          return Symbol('JSCA_8696_8698'), [i, o];
        })
      );
    };
  }
  function F_(n, t, e) {
    Symbol('JSCA_8701_8708');
    var r = Rt(n, t - B, e).concat(t);
    return function (i) {
      return (
        Symbol('JSCA_8703_8707'),
        r.map(function (o) {
          return Symbol('JSCA_8704_8706'), [o, i];
        })
      );
    };
  }
  function O_() {
    Symbol('JSCA_8709_8782');
    var n,
      t,
      e,
      r,
      i,
      o,
      l,
      a,
      f = 10,
      u = f,
      c = 90,
      s = 360,
      _,
      S,
      y,
      b,
      m = 2.5;
    function d() {
      return (
        Symbol('JSCA_8711_8716'), { type: 'MultiLineString', coordinates: g() }
      );
    }
    function g() {
      return (
        Symbol('JSCA_8717_8723'),
        Rt(ao(r / c) * c, e, c)
          .map(y)
          .concat(Rt(ao(a / s) * s, l, s).map(b))
          .concat(
            Rt(ao(t / f) * f, n, f)
              .filter(function (C) {
                return Symbol('JSCA_8718_8720'), K(C % c) > B;
              })
              .map(_)
          )
          .concat(
            Rt(ao(o / u) * u, i, u)
              .filter(function (C) {
                return Symbol('JSCA_8720_8722'), K(C % s) > B;
              })
              .map(S)
          )
      );
    }
    return (
      (d.lines = function () {
        return (
          Symbol('JSCA_8724_8731'),
          g().map(function (C) {
            return (
              Symbol('JSCA_8725_8730'), { type: 'LineString', coordinates: C }
            );
          })
        );
      }),
      (d.outline = function () {
        return (
          Symbol('JSCA_8732_8737'),
          {
            type: 'Polygon',
            coordinates: [
              y(r).concat(
                b(l).slice(1),
                y(e).reverse().slice(1),
                b(a).reverse().slice(1)
              ),
            ],
          }
        );
      }),
      (d.extent = function (C) {
        return (
          Symbol('JSCA_8738_8741'),
          arguments.length ? d.extentMajor(C).extentMinor(C) : d.extentMinor()
        );
      }),
      (d.extentMajor = function (C) {
        return (
          Symbol('JSCA_8742_8749'),
          arguments.length
            ? ((r = +C[0][0]),
              (e = +C[1][0]),
              (a = +C[0][1]),
              (l = +C[1][1]),
              r > e && ((C = r), (r = e), (e = C)),
              a > l && ((C = a), (a = l), (l = C)),
              d.precision(m))
            : [
                [r, a],
                [e, l],
              ]
        );
      }),
      (d.extentMinor = function (C) {
        return (
          Symbol('JSCA_8750_8757'),
          arguments.length
            ? ((t = +C[0][0]),
              (n = +C[1][0]),
              (o = +C[0][1]),
              (i = +C[1][1]),
              t > n && ((C = t), (t = n), (n = C)),
              o > i && ((C = o), (o = i), (i = C)),
              d.precision(m))
            : [
                [t, o],
                [n, i],
              ]
        );
      }),
      (d.step = function (C) {
        return (
          Symbol('JSCA_8758_8761'),
          arguments.length ? d.stepMajor(C).stepMinor(C) : d.stepMinor()
        );
      }),
      (d.stepMajor = function (C) {
        return (
          Symbol('JSCA_8762_8766'),
          arguments.length ? ((c = +C[0]), (s = +C[1]), d) : [c, s]
        );
      }),
      (d.stepMinor = function (C) {
        return (
          Symbol('JSCA_8767_8771'),
          arguments.length ? ((f = +C[0]), (u = +C[1]), d) : [f, u]
        );
      }),
      (d.precision = function (C) {
        return (
          Symbol('JSCA_8772_8780'),
          arguments.length
            ? ((m = +C),
              (_ = D_(o, i, 90)),
              (S = F_(t, n, m)),
              (y = D_(a, l, 90)),
              (b = F_(r, e, m)),
              d)
            : m
        );
      }),
      d
        .extentMajor([
          [-180, -90 + B],
          [180, 90 - B],
        ])
        .extentMinor([
          [-180, -80 - B],
          [180, 80 + B],
        ])
    );
  }
  function E6() {
    return Symbol('JSCA_8783_8785'), O_()();
  }
  function k6(n, t) {
    Symbol('JSCA_8786_8796');
    var e = n[0] * H,
      r = n[1] * H,
      i = t[0] * H,
      o = t[1] * H,
      l = Y(r),
      a = L(r),
      f = Y(o),
      u = L(o),
      c = l * Y(e),
      s = l * L(e),
      _ = f * Y(i),
      S = f * L(i),
      y = 2 * Fn(pn(jc(o - r) + l * f * jc(i - e))),
      b = L(y),
      m = y
        ? function (d) {
            Symbol('JSCA_8788_8791');
            var g = L((d *= y)) / b,
              C = L(y - d) / b,
              A = C * c + g * _,
              J = C * s + g * S,
              p = C * a + g * u;
            return [Dn(J, A) * ln, Dn(p, pn(A * A + J * J)) * ln];
          }
        : function () {
            return Symbol('JSCA_8791_8793'), [e * ln, r * ln];
          };
    return (m.distance = y), m;
  }
  var zr = (n) => n,
    ru = new An(),
    iu = new An(),
    L_,
    q_,
    ou,
    lu,
    qt = {
      point: cn,
      lineStart: cn,
      lineEnd: cn,
      polygonStart: function () {
        Symbol('JSCA_8803_8806'), (qt.lineStart = N6), (qt.lineEnd = R6);
      },
      polygonEnd: function () {
        Symbol('JSCA_8807_8811'),
          (qt.lineStart = qt.lineEnd = qt.point = cn),
          ru.add(K(iu)),
          (iu = new An());
      },
      result: function () {
        Symbol('JSCA_8812_8816');
        var n = ru / 2;
        return (ru = new An()), n;
      },
    };
  function N6() {
    Symbol('JSCA_8818_8820'), (qt.point = x6);
  }
  function x6(n, t) {
    Symbol('JSCA_8821_8824'), (qt.point = Y_), (L_ = ou = n), (q_ = lu = t);
  }
  function Y_(n, t) {
    Symbol('JSCA_8825_8828'), iu.add(lu * n - ou * t), (ou = n), (lu = t);
  }
  function R6() {
    Symbol('JSCA_8829_8831'), Y_(L_, q_);
  }
  var U_ = qt,
    We = 1 / 0,
    xo = We,
    Dr = -We,
    Ro = Dr,
    P6 = {
      point: I6,
      lineStart: cn,
      lineEnd: cn,
      polygonStart: cn,
      polygonEnd: cn,
      result: function () {
        Symbol('JSCA_8840_8844');
        var n = [
          [We, xo],
          [Dr, Ro],
        ];
        return (Dr = Ro = -(xo = We = 1 / 0)), n;
      },
    };
  function I6(n, t) {
    Symbol('JSCA_8846_8851'),
      n < We && (We = n),
      n > Dr && (Dr = n),
      t < xo && (xo = t),
      t > Ro && (Ro = t);
  }
  var Po = P6,
    au = 0,
    uu = 0,
    Fr = 0,
    Io = 0,
    zo = 0,
    Ze = 0,
    fu = 0,
    cu = 0,
    Or = 0,
    B_,
    H_,
    mt,
    yt,
    ft = {
      point: me,
      lineStart: X_,
      lineEnd: G_,
      polygonStart: function () {
        Symbol('JSCA_8858_8861'), (ft.lineStart = F6), (ft.lineEnd = O6);
      },
      polygonEnd: function () {
        Symbol('JSCA_8862_8866'),
          (ft.point = me),
          (ft.lineStart = X_),
          (ft.lineEnd = G_);
      },
      result: function () {
        Symbol('JSCA_8867_8871');
        var n = Or
          ? [fu / Or, cu / Or]
          : Ze
          ? [Io / Ze, zo / Ze]
          : Fr
          ? [au / Fr, uu / Fr]
          : [NaN, NaN];
        return (au = uu = Fr = Io = zo = Ze = fu = cu = Or = 0), n;
      },
    };
  function me(n, t) {
    Symbol('JSCA_8873_8877'), (au += n), (uu += t), ++Fr;
  }
  function X_() {
    Symbol('JSCA_8878_8880'), (ft.point = z6);
  }
  function z6(n, t) {
    Symbol('JSCA_8881_8884'), (ft.point = D6), me((mt = n), (yt = t));
  }
  function D6(n, t) {
    Symbol('JSCA_8885_8891');
    var e = n - mt,
      r = t - yt,
      i = pn(e * e + r * r);
    (Io += (i * (mt + n)) / 2),
      (zo += (i * (yt + t)) / 2),
      (Ze += i),
      me((mt = n), (yt = t));
  }
  function G_() {
    Symbol('JSCA_8892_8894'), (ft.point = me);
  }
  function F6() {
    Symbol('JSCA_8895_8897'), (ft.point = L6);
  }
  function O6() {
    Symbol('JSCA_8898_8900'), V_(B_, H_);
  }
  function L6(n, t) {
    Symbol('JSCA_8901_8904'), (ft.point = V_), me((B_ = mt = n), (H_ = yt = t));
  }
  function V_(n, t) {
    Symbol('JSCA_8905_8915');
    var e = n - mt,
      r = t - yt,
      i = pn(e * e + r * r);
    (Io += (i * (mt + n)) / 2),
      (zo += (i * (yt + t)) / 2),
      (Ze += i),
      (i = yt * n - mt * t),
      (fu += i * (mt + n)),
      (cu += i * (yt + t)),
      (Or += i * 3),
      me((mt = n), (yt = t));
  }
  var W_ = ft;
  function Z_(n) {
    Symbol('JSCA_8917_8919'), (this._context = n);
  }
  Z_.prototype = {
    _radius: 4.5,
    pointRadius: function (n) {
      return Symbol('JSCA_8922_8924'), (this._radius = n), this;
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
        this._line === 0 && this._context.closePath(),
        (this._point = NaN);
    },
    point: function (n, t) {
      switch ((Symbol('JSCA_8938_8958'), this._point)) {
        case 0: {
          this._context.moveTo(n, t), (this._point = 1);
          break;
        }
        case 1: {
          this._context.lineTo(n, t);
          break;
        }
        default: {
          this._context.moveTo(n + this._radius, t),
            this._context.arc(n, t, this._radius, 0, zn);
          break;
        }
      }
    },
    result: cn,
  };
  var _u = new An(),
    su,
    Q_,
    K_,
    Lr,
    qr,
    Do = {
      point: cn,
      lineStart: function () {
        Symbol('JSCA_8964_8966'), (Do.point = q6);
      },
      lineEnd: function () {
        Symbol('JSCA_8967_8970'), su && j_(Q_, K_), (Do.point = cn);
      },
      polygonStart: function () {
        Symbol('JSCA_8971_8973'), (su = !0);
      },
      polygonEnd: function () {
        Symbol('JSCA_8974_8976'), (su = null);
      },
      result: function () {
        Symbol('JSCA_8977_8981');
        var n = +_u;
        return (_u = new An()), n;
      },
    };
  function q6(n, t) {
    Symbol('JSCA_8983_8986'), (Do.point = j_), (Q_ = Lr = n), (K_ = qr = t);
  }
  function j_(n, t) {
    Symbol('JSCA_8987_8991'),
      (Lr -= n),
      (qr -= t),
      _u.add(pn(Lr * Lr + qr * qr)),
      (Lr = n),
      (qr = t);
  }
  var n0 = Do;
  let t0, Fo, e0, r0;
  class i0 {
    constructor(t) {
      Symbol('JSCA_8995_8999'),
        (this._append = t == null ? o0 : Y6(t)),
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
        this._line === 0 && (this._ += 'Z'),
        (this._point = NaN);
    }
    point(t, e) {
      switch ((Symbol('JSCA_9017_9047'), this._point)) {
        case 0: {
          this._append`M${t},${e}`, (this._point = 1);
          break;
        }
        case 1: {
          this._append`L${t},${e}`;
          break;
        }
        default: {
          if (
            (this._append`M${t},${e}`,
            this._radius !== e0 || this._append !== Fo)
          ) {
            const r = this._radius,
              i = this._;
            (this._ = ''),
              this._append`m0,${r}a${r},${r} 0 1,1 0,${
                -2 * r
              }a${r},${r} 0 1,1 0,${2 * r}z`,
              (e0 = r),
              (Fo = this._append),
              (r0 = this._),
              (this._ = i);
          }
          this._ += r0;
          break;
        }
      }
    }
    result() {
      Symbol('JSCA_9048_9052');
      const t = this._;
      return (this._ = ''), t.length ? t : null;
    }
  }
  function o0(n) {
    Symbol('JSCA_9054_9060');
    let t = 1;
    this._ += n[0];
    for (const e = n.length; t < e; ++t) this._ += arguments[t] + n[t];
  }
  function Y6(n) {
    Symbol('JSCA_9061_9077');
    const t = Math.floor(n);
    if (!(t >= 0)) throw new RangeError(`invalid digits: ${n}`);
    if (t > 15) return o0;
    if (t !== t0) {
      const e = 10 ** t;
      (t0 = t),
        (Fo = function (i) {
          Symbol('JSCA_9068_9074');
          let o = 1;
          this._ += i[0];
          for (const l = i.length; o < l; ++o)
            this._ += Math.round(arguments[o] * e) / e + i[o];
        });
    }
    return Fo;
  }
  function U6(n, t) {
    Symbol('JSCA_9078_9130');
    let e = 3,
      r = 4.5,
      i,
      o;
    function l(a) {
      return (
        Symbol('JSCA_9080_9086'),
        a &&
          (typeof r == 'function' && o.pointRadius(+r.apply(this, arguments)),
          at(a, i(o))),
        o.result()
      );
    }
    return (
      (l.area = function (a) {
        return Symbol('JSCA_9087_9090'), at(a, i(U_)), U_.result();
      }),
      (l.measure = function (a) {
        return Symbol('JSCA_9091_9094'), at(a, i(n0)), n0.result();
      }),
      (l.bounds = function (a) {
        return Symbol('JSCA_9095_9098'), at(a, i(Po)), Po.result();
      }),
      (l.centroid = function (a) {
        return Symbol('JSCA_9099_9102'), at(a, i(W_)), W_.result();
      }),
      (l.projection = function (a) {
        return (
          Symbol('JSCA_9103_9107'),
          arguments.length
            ? ((i = a == null ? ((n = null), zr) : (n = a).stream), l)
            : n
        );
      }),
      (l.context = function (a) {
        return (
          Symbol('JSCA_9108_9113'),
          arguments.length
            ? ((o = a == null ? ((t = null), new i0(e)) : new Z_((t = a))),
              typeof r != 'function' && o.pointRadius(r),
              l)
            : t
        );
      }),
      (l.pointRadius = function (a) {
        return (
          Symbol('JSCA_9114_9118'),
          arguments.length
            ? ((r = typeof a == 'function' ? a : (o.pointRadius(+a), +a)), l)
            : r
        );
      }),
      (l.digits = function (a) {
        if ((Symbol('JSCA_9119_9128'), !arguments.length)) return e;
        if (a == null) e = null;
        else {
          const f = Math.floor(a);
          if (!(f >= 0)) throw new RangeError(`invalid digits: ${a}`);
          e = f;
        }
        return t === null && (o = new i0(e)), l;
      }),
      l.projection(n).digits(e).context(t)
    );
  }
  function B6(n) {
    return Symbol('JSCA_9131_9135'), { stream: Yr(n) };
  }
  function Yr(n) {
    return (
      Symbol('JSCA_9136_9143'),
      function (t) {
        Symbol('JSCA_9137_9142');
        var e = new Su();
        for (var r in n) e[r] = n[r];
        return (e.stream = t), e;
      }
    );
  }
  function Su() {
    Symbol('JSCA_9144_9144');
  }
  Su.prototype = {
    constructor: Su,
    point: function (n, t) {
      Symbol('JSCA_9147_9149'), this.stream.point(n, t);
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
  function hu(n, t, e) {
    Symbol('JSCA_9166_9174');
    var r = n.clipExtent && n.clipExtent();
    return (
      n.scale(150).translate([0, 0]),
      r != null && n.clipExtent(null),
      at(e, n.stream(Po)),
      t(Po.result()),
      r != null && n.clipExtent(r),
      n
    );
  }
  function Oo(n, t, e) {
    return (
      Symbol('JSCA_9175_9180'),
      hu(
        n,
        function (r) {
          Symbol('JSCA_9176_9179');
          var i = t[1][0] - t[0][0],
            o = t[1][1] - t[0][1],
            l = Math.min(i / (r[1][0] - r[0][0]), o / (r[1][1] - r[0][1])),
            a = +t[0][0] + (i - l * (r[1][0] + r[0][0])) / 2,
            f = +t[0][1] + (o - l * (r[1][1] + r[0][1])) / 2;
          n.scale(150 * l).translate([a, f]);
        },
        e
      )
    );
  }
  function mu(n, t, e) {
    return Symbol('JSCA_9181_9183'), Oo(n, [[0, 0], t], e);
  }
  function yu(n, t, e) {
    return (
      Symbol('JSCA_9184_9189'),
      hu(
        n,
        function (r) {
          Symbol('JSCA_9185_9188');
          var i = +t,
            o = i / (r[1][0] - r[0][0]),
            l = (i - o * (r[1][0] + r[0][0])) / 2,
            a = -o * r[0][1];
          n.scale(150 * o).translate([l, a]);
        },
        e
      )
    );
  }
  function bu(n, t, e) {
    return (
      Symbol('JSCA_9190_9195'),
      hu(
        n,
        function (r) {
          Symbol('JSCA_9191_9194');
          var i = +t,
            o = i / (r[1][1] - r[0][1]),
            l = -o * r[0][0],
            a = (i - o * (r[1][1] + r[0][1])) / 2;
          n.scale(150 * o).translate([l, a]);
        },
        e
      )
    );
  }
  var l0 = 16,
    H6 = Y(30 * H);
  function a0(n, t) {
    return Symbol('JSCA_9197_9199'), +t ? G6(n, t) : X6(n);
  }
  function X6(n) {
    return (
      Symbol('JSCA_9200_9207'),
      Yr({
        point: function (t, e) {
          Symbol('JSCA_9202_9205'),
            (t = n(t, e)),
            this.stream.point(t[0], t[1]);
        },
      })
    );
  }
  function G6(n, t) {
    Symbol('JSCA_9208_9269');
    function e(r, i, o, l, a, f, u, c, s, _, S, y, b, m) {
      Symbol('JSCA_9209_9219');
      var d = u - r,
        g = c - i,
        C = d * d + g * g;
      if (C > 4 * t && b--) {
        var A = l + _,
          J = a + S,
          p = f + y,
          $ = pn(A * A + J * J + p * p),
          N = Fn((p /= $)),
          k = K(K(p) - 1) < B || K(o - s) < B ? (o + s) / 2 : Dn(J, A),
          E = n(k, N),
          w = E[0],
          P = E[1],
          x = w - r,
          v = P - i,
          T = g * x - d * v;
        ((T * T) / C > t ||
          K((d * x + g * v) / C - 0.5) > 0.3 ||
          l * _ + a * S + f * y < H6) &&
          (e(r, i, o, l, a, f, w, P, k, (A /= $), (J /= $), p, b, m),
          m.point(w, P),
          e(w, P, k, A, J, p, u, c, s, _, S, y, b, m));
      }
    }
    return function (r) {
      Symbol('JSCA_9220_9268');
      var i,
        o,
        l,
        a,
        f,
        u,
        c,
        s,
        _,
        S,
        y,
        b,
        m = {
          point: d,
          lineStart: g,
          lineEnd: A,
          polygonStart: function () {
            Symbol('JSCA_9226_9229'), r.polygonStart(), (m.lineStart = J);
          },
          polygonEnd: function () {
            Symbol('JSCA_9230_9233'), r.polygonEnd(), (m.lineStart = g);
          },
        };
      function d(N, k) {
        Symbol('JSCA_9235_9238'), (N = n(N, k)), r.point(N[0], N[1]);
      }
      function g() {
        Symbol('JSCA_9239_9243'), (s = NaN), (m.point = C), r.lineStart();
      }
      function C(N, k) {
        Symbol('JSCA_9244_9248');
        var E = Se([N, k]),
          w = n(N, k);
        e(
          s,
          _,
          c,
          S,
          y,
          b,
          (s = w[0]),
          (_ = w[1]),
          (c = N),
          (S = E[0]),
          (y = E[1]),
          (b = E[2]),
          l0,
          r
        ),
          r.point(s, _);
      }
      function A() {
        Symbol('JSCA_9249_9252'), (m.point = d), r.lineEnd();
      }
      function J() {
        Symbol('JSCA_9253_9257'), g(), (m.point = p), (m.lineEnd = $);
      }
      function p(N, k) {
        Symbol('JSCA_9258_9261'),
          C((i = N), k),
          (o = s),
          (l = _),
          (a = S),
          (f = y),
          (u = b),
          (m.point = C);
      }
      function $() {
        Symbol('JSCA_9262_9266'),
          e(s, _, c, S, y, b, o, l, i, a, f, u, l0, r),
          (m.lineEnd = A),
          A();
      }
      return m;
    };
  }
  var V6 = Yr({
    point: function (n, t) {
      Symbol('JSCA_9271_9273'), this.stream.point(n * H, t * H);
    },
  });
  function W6(n) {
    return (
      Symbol('JSCA_9275_9282'),
      Yr({
        point: function (t, e) {
          Symbol('JSCA_9277_9280');
          var r = n(t, e);
          return this.stream.point(r[0], r[1]);
        },
      })
    );
  }
  function Z6(n, t, e, r, i) {
    Symbol('JSCA_9283_9293');
    function o(l, a) {
      return (
        Symbol('JSCA_9284_9288'), (l *= r), (a *= i), [t + n * l, e - n * a]
      );
    }
    return (
      (o.invert = function (l, a) {
        return Symbol('JSCA_9289_9291'), [((l - t) / n) * r, ((e - a) / n) * i];
      }),
      o
    );
  }
  function u0(n, t, e, r, i, o) {
    if ((Symbol('JSCA_9294_9306'), !o)) return Z6(n, t, e, r, i);
    var l = Y(o),
      a = L(o),
      f = l * n,
      u = a * n,
      c = l / n,
      s = a / n,
      _ = (a * e - l * t) / n,
      S = (a * t + l * e) / n;
    function y(b, m) {
      return (
        Symbol('JSCA_9297_9301'),
        (b *= r),
        (m *= i),
        [f * b - u * m + t, e - u * b - f * m]
      );
    }
    return (
      (y.invert = function (b, m) {
        return (
          Symbol('JSCA_9302_9304'),
          [r * (c * b - s * m + _), i * (S - s * b - c * m)]
        );
      }),
      y
    );
  }
  function bt(n) {
    return (
      Symbol('JSCA_9307_9311'),
      du(function () {
        return Symbol('JSCA_9308_9310'), n;
      })()
    );
  }
  function du(n) {
    Symbol('JSCA_9312_9389');
    var t,
      e = 150,
      r = 480,
      i = 250,
      o = 0,
      l = 0,
      a = 0,
      f = 0,
      u = 0,
      c,
      s = 0,
      _ = 1,
      S = 1,
      y = null,
      b = ja,
      m = null,
      d,
      g,
      C,
      A = zr,
      J = 0.5,
      p,
      $,
      N,
      k,
      E;
    function w(T) {
      return Symbol('JSCA_9314_9316'), N(T[0] * H, T[1] * H);
    }
    function P(T) {
      return (
        Symbol('JSCA_9317_9320'),
        (T = N.invert(T[0], T[1])),
        T && [T[0] * ln, T[1] * ln]
      );
    }
    (w.stream = function (T) {
      return (
        Symbol('JSCA_9321_9323'),
        k && E === T ? k : (k = V6(W6(c)(b(p(A((E = T)))))))
      );
    }),
      (w.preclip = function (T) {
        return (
          Symbol('JSCA_9324_9326'),
          arguments.length ? ((b = T), (y = void 0), v()) : b
        );
      }),
      (w.postclip = function (T) {
        return (
          Symbol('JSCA_9327_9329'),
          arguments.length ? ((A = T), (m = d = g = C = null), v()) : A
        );
      }),
      (w.clipAngle = function (T) {
        return (
          Symbol('JSCA_9330_9332'),
          arguments.length
            ? ((b = +T ? E_((y = T * H)) : ((y = null), ja)), v())
            : y * ln
        );
      }),
      (w.clipExtent = function (T) {
        return (
          Symbol('JSCA_9333_9335'),
          arguments.length
            ? ((A =
                T == null
                  ? ((m = d = g = C = null), zr)
                  : To(
                      (m = +T[0][0]),
                      (d = +T[0][1]),
                      (g = +T[1][0]),
                      (C = +T[1][1])
                    )),
              v())
            : m == null
            ? null
            : [
                [m, d],
                [g, C],
              ]
        );
      }),
      (w.scale = function (T) {
        return Symbol('JSCA_9336_9338'), arguments.length ? ((e = +T), x()) : e;
      }),
      (w.translate = function (T) {
        return (
          Symbol('JSCA_9339_9341'),
          arguments.length ? ((r = +T[0]), (i = +T[1]), x()) : [r, i]
        );
      }),
      (w.center = function (T) {
        return (
          Symbol('JSCA_9342_9344'),
          arguments.length
            ? ((o = (T[0] % 360) * H), (l = (T[1] % 360) * H), x())
            : [o * ln, l * ln]
        );
      }),
      (w.rotate = function (T) {
        return (
          Symbol('JSCA_9345_9347'),
          arguments.length
            ? ((a = (T[0] % 360) * H),
              (f = (T[1] % 360) * H),
              (u = T.length > 2 ? (T[2] % 360) * H : 0),
              x())
            : [a * ln, f * ln, u * ln]
        );
      }),
      (w.angle = function (T) {
        return (
          Symbol('JSCA_9348_9350'),
          arguments.length ? ((s = (T % 360) * H), x()) : s * ln
        );
      }),
      (w.reflectX = function (T) {
        return (
          Symbol('JSCA_9351_9353'),
          arguments.length ? ((_ = T ? -1 : 1), x()) : _ < 0
        );
      }),
      (w.reflectY = function (T) {
        return (
          Symbol('JSCA_9354_9356'),
          arguments.length ? ((S = T ? -1 : 1), x()) : S < 0
        );
      }),
      (w.precision = function (T) {
        return (
          Symbol('JSCA_9357_9359'),
          arguments.length ? ((p = a0($, (J = T * T))), v()) : pn(J)
        );
      }),
      (w.fitExtent = function (T, M) {
        return Symbol('JSCA_9360_9362'), Oo(w, T, M);
      }),
      (w.fitSize = function (T, M) {
        return Symbol('JSCA_9363_9365'), mu(w, T, M);
      }),
      (w.fitWidth = function (T, M) {
        return Symbol('JSCA_9366_9368'), yu(w, T, M);
      }),
      (w.fitHeight = function (T, M) {
        return Symbol('JSCA_9369_9371'), bu(w, T, M);
      });
    function x() {
      Symbol('JSCA_9372_9379');
      var T = u0(e, 0, 0, _, S, s).apply(null, t(o, l)),
        M = u0(e, r - T[0], i - T[1], _, S, s);
      return (
        (c = Qa(a, f, u)), ($ = Wa(t, M)), (N = Wa(c, $)), (p = a0($, J)), v()
      );
    }
    function v() {
      return Symbol('JSCA_9380_9383'), (k = E = null), w;
    }
    return function () {
      return (
        Symbol('JSCA_9384_9388'),
        (t = n.apply(this, arguments)),
        (w.invert = t.invert && P),
        x()
      );
    };
  }
  function Au(n) {
    Symbol('JSCA_9390_9396');
    var t = 0,
      e = Z / 3,
      r = du(n),
      i = r(t, e);
    return (
      (i.parallels = function (o) {
        return (
          Symbol('JSCA_9392_9394'),
          arguments.length
            ? r((t = o[0] * H), (e = o[1] * H))
            : [t * ln, e * ln]
        );
      }),
      i
    );
  }
  function Q6(n) {
    Symbol('JSCA_9397_9406');
    var t = Y(n);
    function e(r, i) {
      return Symbol('JSCA_9399_9401'), [r * t, L(i) / t];
    }
    return (
      (e.invert = function (r, i) {
        return Symbol('JSCA_9402_9404'), [r / t, Fn(i * t)];
      }),
      e
    );
  }
  function f0(n, t) {
    Symbol('JSCA_9407_9421');
    var e = L(n),
      r = (e + L(t)) / 2;
    if (K(r) < B) return Q6(n);
    var i = 1 + e * (2 * r - e),
      o = pn(i) / r;
    function l(a, f) {
      Symbol('JSCA_9411_9414');
      var u = pn(i - 2 * r * L(f)) / r;
      return [u * L((a *= r)), o - u * Y(a)];
    }
    return (
      (l.invert = function (a, f) {
        Symbol('JSCA_9415_9419');
        var u = o - f,
          c = Dn(a, K(u)) * Kn(u);
        return (
          u * r < 0 && (c -= Z * Kn(a) * Kn(u)),
          [c / r, Fn((i - (a * a + u * u) * r * r) / (2 * r))]
        );
      }),
      l
    );
  }
  function Lo() {
    return Symbol('JSCA_9422_9424'), Au(f0).scale(155.424).center([0, 33.6442]);
  }
  function c0() {
    return (
      Symbol('JSCA_9425_9427'),
      Lo()
        .parallels([29.5, 45.5])
        .scale(1070)
        .translate([480, 250])
        .rotate([96, 0])
        .center([-0.6, 38.7])
    );
  }
  function K6(n) {
    Symbol('JSCA_9428_9456');
    var t = n.length;
    return {
      point: function (e, r) {
        Symbol('JSCA_9431_9434');
        for (var i = -1; ++i < t; ) n[i].point(e, r);
      },
      sphere: function () {
        Symbol('JSCA_9435_9438');
        for (var e = -1; ++e < t; ) n[e].sphere();
      },
      lineStart: function () {
        Symbol('JSCA_9439_9442');
        for (var e = -1; ++e < t; ) n[e].lineStart();
      },
      lineEnd: function () {
        Symbol('JSCA_9443_9446');
        for (var e = -1; ++e < t; ) n[e].lineEnd();
      },
      polygonStart: function () {
        Symbol('JSCA_9447_9450');
        for (var e = -1; ++e < t; ) n[e].polygonStart();
      },
      polygonEnd: function () {
        Symbol('JSCA_9451_9454');
        for (var e = -1; ++e < t; ) n[e].polygonEnd();
      },
    };
  }
  function j6() {
    Symbol('JSCA_9457_9509');
    var n,
      t,
      e = c0(),
      r,
      i = Lo().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
      o,
      l = Lo().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
      a,
      f,
      u = {
        point: function (_, S) {
          Symbol('JSCA_9459_9461'), (f = [_, S]);
        },
      };
    function c(_) {
      Symbol('JSCA_9463_9466');
      var S = _[0],
        y = _[1];
      return (
        (f = null), r.point(S, y), f || (o.point(S, y), f) || (a.point(S, y), f)
      );
    }
    (c.invert = function (_) {
      Symbol('JSCA_9467_9470');
      var S = e.scale(),
        y = e.translate(),
        b = (_[0] - y[0]) / S,
        m = (_[1] - y[1]) / S;
      return (
        m >= 0.12 && m < 0.234 && b >= -0.425 && b < -0.214
          ? i
          : m >= 0.166 && m < 0.234 && b >= -0.214 && b < -0.115
          ? l
          : e
      ).invert(_);
    }),
      (c.stream = function (_) {
        return (
          Symbol('JSCA_9471_9473'),
          n && t === _
            ? n
            : (n = K6([e.stream((t = _)), i.stream(_), l.stream(_)]))
        );
      }),
      (c.precision = function (_) {
        return (
          Symbol('JSCA_9474_9478'),
          arguments.length
            ? (e.precision(_), i.precision(_), l.precision(_), s())
            : e.precision()
        );
      }),
      (c.scale = function (_) {
        return (
          Symbol('JSCA_9479_9483'),
          arguments.length
            ? (e.scale(_),
              i.scale(_ * 0.35),
              l.scale(_),
              c.translate(e.translate()))
            : e.scale()
        );
      }),
      (c.translate = function (_) {
        if ((Symbol('JSCA_9484_9491'), !arguments.length)) return e.translate();
        var S = e.scale(),
          y = +_[0],
          b = +_[1];
        return (
          (r = e
            .translate(_)
            .clipExtent([
              [y - 0.455 * S, b - 0.238 * S],
              [y + 0.455 * S, b + 0.238 * S],
            ])
            .stream(u)),
          (o = i
            .translate([y - 0.307 * S, b + 0.201 * S])
            .clipExtent([
              [y - 0.425 * S + B, b + 0.12 * S + B],
              [y - 0.214 * S - B, b + 0.234 * S - B],
            ])
            .stream(u)),
          (a = l
            .translate([y - 0.205 * S, b + 0.212 * S])
            .clipExtent([
              [y - 0.214 * S + B, b + 0.166 * S + B],
              [y - 0.115 * S - B, b + 0.234 * S - B],
            ])
            .stream(u)),
          s()
        );
      }),
      (c.fitExtent = function (_, S) {
        return Symbol('JSCA_9492_9494'), Oo(c, _, S);
      }),
      (c.fitSize = function (_, S) {
        return Symbol('JSCA_9495_9497'), mu(c, _, S);
      }),
      (c.fitWidth = function (_, S) {
        return Symbol('JSCA_9498_9500'), yu(c, _, S);
      }),
      (c.fitHeight = function (_, S) {
        return Symbol('JSCA_9501_9503'), bu(c, _, S);
      });
    function s() {
      return Symbol('JSCA_9504_9507'), (n = t = null), c;
    }
    return c.scale(1070);
  }
  function _0(n) {
    return (
      Symbol('JSCA_9510_9516'),
      function (t, e) {
        Symbol('JSCA_9511_9515');
        var r = Y(t),
          i = Y(e),
          o = n(r * i);
        return o === 1 / 0 ? [2, 0] : [o * i * L(t), o * L(e)];
      }
    );
  }
  function Ur(n) {
    return (
      Symbol('JSCA_9517_9522'),
      function (t, e) {
        Symbol('JSCA_9518_9521');
        var r = pn(t * t + e * e),
          i = n(r),
          o = L(i),
          l = Y(i);
        return [Dn(t * o, r * l), Fn(r && (e * o) / r)];
      }
    );
  }
  var Cu = _0(function (n) {
    return Symbol('JSCA_9523_9525'), pn(2 / (1 + n));
  });
  Cu.invert = Ur(function (n) {
    return Symbol('JSCA_9526_9528'), 2 * Fn(n / 2);
  });
  function n8() {
    return (
      Symbol('JSCA_9529_9531'),
      bt(Cu)
        .scale(124.75)
        .clipAngle(180 - 0.001)
    );
  }
  var gu = _0(function (n) {
    return Symbol('JSCA_9532_9534'), (n = Kc(n)) && n / L(n);
  });
  gu.invert = Ur(function (n) {
    return Symbol('JSCA_9535_9537'), n;
  });
  function t8() {
    return (
      Symbol('JSCA_9538_9540'),
      bt(gu)
        .scale(79.4188)
        .clipAngle(180 - 0.001)
    );
  }
  function Br(n, t) {
    return Symbol('JSCA_9541_9543'), [n, uo(Fa((sn + t) / 2))];
  }
  Br.invert = function (n, t) {
    return Symbol('JSCA_9544_9546'), [n, 2 * Be(Qc(t)) - sn];
  };
  function e8() {
    return Symbol('JSCA_9547_9549'), s0(Br).scale(961 / zn);
  }
  function s0(n) {
    Symbol('JSCA_9550_9569');
    var t = bt(n),
      e = t.center,
      r = t.scale,
      i = t.translate,
      o = t.clipExtent,
      l = null,
      a,
      f,
      u;
    (t.scale = function (s) {
      return Symbol('JSCA_9552_9554'), arguments.length ? (r(s), c()) : r();
    }),
      (t.translate = function (s) {
        return Symbol('JSCA_9555_9557'), arguments.length ? (i(s), c()) : i();
      }),
      (t.center = function (s) {
        return Symbol('JSCA_9558_9560'), arguments.length ? (e(s), c()) : e();
      }),
      (t.clipExtent = function (s) {
        return (
          Symbol('JSCA_9561_9563'),
          arguments.length
            ? (s == null
                ? (l = a = f = u = null)
                : ((l = +s[0][0]),
                  (a = +s[0][1]),
                  (f = +s[1][0]),
                  (u = +s[1][1])),
              c())
            : l == null
            ? null
            : [
                [l, a],
                [f, u],
              ]
        );
      });
    function c() {
      Symbol('JSCA_9564_9567');
      var s = Z * r(),
        _ = t(g_(t.rotate()).invert([0, 0]));
      return o(
        l == null
          ? [
              [_[0] - s, _[1] - s],
              [_[0] + s, _[1] + s],
            ]
          : n === Br
          ? [
              [Math.max(_[0] - s, l), a],
              [Math.min(_[0] + s, f), u],
            ]
          : [
              [l, Math.max(_[1] - s, a)],
              [f, Math.min(_[1] + s, u)],
            ]
      );
    }
    return c();
  }
  function qo(n) {
    return Symbol('JSCA_9570_9572'), Fa((sn + n) / 2);
  }
  function S0(n, t) {
    Symbol('JSCA_9573_9591');
    var e = Y(n),
      r = n === t ? L(n) : uo(e / Y(t)) / uo(qo(t) / qo(n)),
      i = (e * Da(qo(n), r)) / r;
    if (!r) return Br;
    function o(l, a) {
      Symbol('JSCA_9576_9584'),
        i > 0 ? a < -sn + B && (a = -sn + B) : a > sn - B && (a = sn - B);
      var f = i / Da(qo(a), r);
      return [f * L(r * l), i - f * Y(r * l)];
    }
    return (
      (o.invert = function (l, a) {
        Symbol('JSCA_9585_9589');
        var f = i - a,
          u = Kn(r) * pn(l * l + f * f),
          c = Dn(l, K(f)) * Kn(f);
        return (
          f * r < 0 && (c -= Z * Kn(l) * Kn(f)),
          [c / r, 2 * Be(Da(i / u, 1 / r)) - sn]
        );
      }),
      o
    );
  }
  function r8() {
    return Symbol('JSCA_9592_9594'), Au(S0).scale(109.5).parallels([30, 30]);
  }
  function Hr(n, t) {
    return Symbol('JSCA_9595_9597'), [n, t];
  }
  Hr.invert = Hr;
  function i8() {
    return Symbol('JSCA_9599_9601'), bt(Hr).scale(152.63);
  }
  function h0(n, t) {
    Symbol('JSCA_9602_9615');
    var e = Y(n),
      r = n === t ? L(n) : (e - Y(t)) / (t - n),
      i = e / r + n;
    if (K(r) < B) return Hr;
    function o(l, a) {
      Symbol('JSCA_9605_9608');
      var f = i - a,
        u = r * l;
      return [f * L(u), i - f * Y(u)];
    }
    return (
      (o.invert = function (l, a) {
        Symbol('JSCA_9609_9613');
        var f = i - a,
          u = Dn(l, K(f)) * Kn(f);
        return (
          f * r < 0 && (u -= Z * Kn(l) * Kn(f)),
          [u / r, i - Kn(r) * pn(l * l + f * f)]
        );
      }),
      o
    );
  }
  function o8() {
    return Symbol('JSCA_9616_9618'), Au(h0).scale(131.154).center([0, 13.9389]);
  }
  var Xr = 1.340264,
    Gr = -0.081106,
    Vr = 893e-6,
    Wr = 0.003796,
    Yo = pn(3) / 2,
    l8 = 12;
  function Ju(n, t) {
    Symbol('JSCA_9620_9623');
    var e = Fn(Yo * L(t)),
      r = e * e,
      i = r * r * r;
    return [
      (n * Y(e)) / (Yo * (Xr + 3 * Gr * r + i * (7 * Vr + 9 * Wr * r))),
      e * (Xr + Gr * r + i * (Vr + Wr * r)),
    ];
  }
  Ju.invert = function (n, t) {
    Symbol('JSCA_9624_9633');
    for (
      var e = t, r = e * e, i = r * r * r, o = 0, l, a, f;
      o < l8 &&
      ((a = e * (Xr + Gr * r + i * (Vr + Wr * r)) - t),
      (f = Xr + 3 * Gr * r + i * (7 * Vr + 9 * Wr * r)),
      (e -= l = a / f),
      (r = e * e),
      (i = r * r * r),
      !(K(l) < Nr));
      ++o
    );
    return [
      (Yo * n * (Xr + 3 * Gr * r + i * (7 * Vr + 9 * Wr * r))) / Y(e),
      Fn(L(e) / Yo),
    ];
  };
  function a8() {
    return Symbol('JSCA_9634_9636'), bt(Ju).scale(177.158);
  }
  function pu(n, t) {
    Symbol('JSCA_9637_9640');
    var e = Y(t),
      r = Y(n) * e;
    return [(e * L(n)) / r, L(t) / r];
  }
  pu.invert = Ur(Be);
  function u8() {
    return Symbol('JSCA_9642_9644'), bt(pu).scale(144.049).clipAngle(60);
  }
  function f8() {
    Symbol('JSCA_9645_9713');
    var n = 1,
      t = 0,
      e = 0,
      r = 1,
      i = 1,
      o = 0,
      l,
      a,
      f = null,
      u,
      c,
      s,
      _ = 1,
      S = 1,
      y = Yr({
        point: function (A, J) {
          Symbol('JSCA_9647_9650');
          var p = C([A, J]);
          this.stream.point(p[0], p[1]);
        },
      }),
      b = zr,
      m,
      d;
    function g() {
      return (
        Symbol('JSCA_9652_9657'), (_ = n * r), (S = n * i), (m = d = null), C
      );
    }
    function C(A) {
      Symbol('JSCA_9658_9666');
      var J = A[0] * _,
        p = A[1] * S;
      if (o) {
        var $ = p * l - J * a;
        (J = J * l + p * a), (p = $);
      }
      return [J + t, p + e];
    }
    return (
      (C.invert = function (A) {
        Symbol('JSCA_9667_9675');
        var J = A[0] - t,
          p = A[1] - e;
        if (o) {
          var $ = p * l + J * a;
          (J = J * l - p * a), (p = $);
        }
        return [J / _, p / S];
      }),
      (C.stream = function (A) {
        return Symbol('JSCA_9676_9678'), m && d === A ? m : (m = y(b((d = A))));
      }),
      (C.postclip = function (A) {
        return (
          Symbol('JSCA_9679_9681'),
          arguments.length ? ((b = A), (f = u = c = s = null), g()) : b
        );
      }),
      (C.clipExtent = function (A) {
        return (
          Symbol('JSCA_9682_9684'),
          arguments.length
            ? ((b =
                A == null
                  ? ((f = u = c = s = null), zr)
                  : To(
                      (f = +A[0][0]),
                      (u = +A[0][1]),
                      (c = +A[1][0]),
                      (s = +A[1][1])
                    )),
              g())
            : f == null
            ? null
            : [
                [f, u],
                [c, s],
              ]
        );
      }),
      (C.scale = function (A) {
        return Symbol('JSCA_9685_9687'), arguments.length ? ((n = +A), g()) : n;
      }),
      (C.translate = function (A) {
        return (
          Symbol('JSCA_9688_9690'),
          arguments.length ? ((t = +A[0]), (e = +A[1]), g()) : [t, e]
        );
      }),
      (C.angle = function (A) {
        return (
          Symbol('JSCA_9691_9693'),
          arguments.length
            ? ((o = (A % 360) * H), (a = L(o)), (l = Y(o)), g())
            : o * ln
        );
      }),
      (C.reflectX = function (A) {
        return (
          Symbol('JSCA_9694_9696'),
          arguments.length ? ((r = A ? -1 : 1), g()) : r < 0
        );
      }),
      (C.reflectY = function (A) {
        return (
          Symbol('JSCA_9697_9699'),
          arguments.length ? ((i = A ? -1 : 1), g()) : i < 0
        );
      }),
      (C.fitExtent = function (A, J) {
        return Symbol('JSCA_9700_9702'), Oo(C, A, J);
      }),
      (C.fitSize = function (A, J) {
        return Symbol('JSCA_9703_9705'), mu(C, A, J);
      }),
      (C.fitWidth = function (A, J) {
        return Symbol('JSCA_9706_9708'), yu(C, A, J);
      }),
      (C.fitHeight = function (A, J) {
        return Symbol('JSCA_9709_9711'), bu(C, A, J);
      }),
      C
    );
  }
  function vu(n, t) {
    Symbol('JSCA_9714_9717');
    var e = t * t,
      r = e * e;
    return [
      n *
        (0.8707 -
          0.131979 * e +
          r * (-0.013791 + r * (0.003971 * e - 0.001529 * r))),
      t *
        (1.007226 +
          e * (0.015085 + r * (-0.044475 + 0.028874 * e - 0.005916 * r))),
    ];
  }
  vu.invert = function (n, t) {
    Symbol('JSCA_9718_9725');
    var e = t,
      r = 25,
      i;
    do {
      var o = e * e,
        l = o * o;
      e -= i =
        (e *
          (1.007226 +
            o * (0.015085 + l * (-0.044475 + 0.028874 * o - 0.005916 * l))) -
          t) /
        (1.007226 +
          o *
            (0.015085 * 3 +
              l * (-0.044475 * 7 + 0.028874 * 9 * o - 0.005916 * 11 * l)));
    } while (K(i) > B && --r > 0);
    return [
      n /
        (0.8707 +
          (o = e * e) *
            (-0.131979 +
              o * (-0.013791 + o * o * o * (0.003971 - 0.001529 * o)))),
      e,
    ];
  };
  function c8() {
    return Symbol('JSCA_9726_9728'), bt(vu).scale(175.295);
  }
  function wu(n, t) {
    return Symbol('JSCA_9729_9731'), [Y(t) * L(n), L(t)];
  }
  wu.invert = Ur(Fn);
  function _8() {
    return (
      Symbol('JSCA_9733_9735'),
      bt(wu)
        .scale(249.5)
        .clipAngle(90 + B)
    );
  }
  function Mu(n, t) {
    Symbol('JSCA_9736_9739');
    var e = Y(t),
      r = 1 + Y(n) * e;
    return [(e * L(n)) / r, L(t) / r];
  }
  Mu.invert = Ur(function (n) {
    return Symbol('JSCA_9740_9742'), 2 * Be(n);
  });
  function s8() {
    return Symbol('JSCA_9743_9745'), bt(Mu).scale(250).clipAngle(142);
  }
  function Tu(n, t) {
    return Symbol('JSCA_9746_9748'), [uo(Fa((sn + t) / 2)), -n];
  }
  Tu.invert = function (n, t) {
    return Symbol('JSCA_9749_9751'), [-t, 2 * Be(Qc(n)) - sn];
  };
  function S8() {
    Symbol('JSCA_9752_9761');
    var n = s0(Tu),
      t = n.center,
      e = n.rotate;
    return (
      (n.center = function (r) {
        return (
          Symbol('JSCA_9754_9756'),
          arguments.length ? t([-r[1], r[0]]) : ((r = t()), [r[1], -r[0]])
        );
      }),
      (n.rotate = function (r) {
        return (
          Symbol('JSCA_9757_9759'),
          arguments.length
            ? e([r[0], r[1], r.length > 2 ? r[2] + 90 : 90])
            : ((r = e()), [r[0], r[1], r[2] - 90])
        );
      }),
      e([0, 0, 90]).scale(159.155)
    );
  }
  function h8(n, t) {
    return Symbol('JSCA_9762_9764'), n.parent === t.parent ? 1 : 2;
  }
  function m8(n) {
    return Symbol('JSCA_9765_9767'), n.reduce(y8, 0) / n.length;
  }
  function y8(n, t) {
    return Symbol('JSCA_9768_9770'), n + t.x;
  }
  function b8(n) {
    return Symbol('JSCA_9771_9773'), 1 + n.reduce(d8, 0);
  }
  function d8(n, t) {
    return Symbol('JSCA_9774_9776'), Math.max(n, t.y);
  }
  function A8(n) {
    Symbol('JSCA_9777_9781');
    for (var t; (t = n.children); ) n = t[0];
    return n;
  }
  function C8(n) {
    Symbol('JSCA_9782_9786');
    for (var t; (t = n.children); ) n = t[t.length - 1];
    return n;
  }
  function g8() {
    Symbol('JSCA_9787_9821');
    var n = h8,
      t = 1,
      e = 1,
      r = !1;
    function i(o) {
      Symbol('JSCA_9789_9810');
      var l,
        a = 0;
      o.eachAfter(function (_) {
        Symbol('JSCA_9791_9801');
        var S = _.children;
        S
          ? ((_.x = m8(S)), (_.y = b8(S)))
          : ((_.x = l ? (a += n(_, l)) : 0), (_.y = 0), (l = _));
      });
      var f = A8(o),
        u = C8(o),
        c = f.x - n(f, u) / 2,
        s = u.x + n(u, f) / 2;
      return o.eachAfter(
        r
          ? function (_) {
              Symbol('JSCA_9803_9806'),
                (_.x = (_.x - o.x) * t),
                (_.y = (o.y - _.y) * e);
            }
          : function (_) {
              Symbol('JSCA_9806_9809'),
                (_.x = ((_.x - c) / (s - c)) * t),
                (_.y = (1 - (o.y ? _.y / o.y : 1)) * e);
            }
      );
    }
    return (
      (i.separation = function (o) {
        return Symbol('JSCA_9811_9813'), arguments.length ? ((n = o), i) : n;
      }),
      (i.size = function (o) {
        return (
          Symbol('JSCA_9814_9816'),
          arguments.length
            ? ((r = !1), (t = +o[0]), (e = +o[1]), i)
            : r
            ? null
            : [t, e]
        );
      }),
      (i.nodeSize = function (o) {
        return (
          Symbol('JSCA_9817_9819'),
          arguments.length
            ? ((r = !0), (t = +o[0]), (e = +o[1]), i)
            : r
            ? [t, e]
            : null
        );
      }),
      i
    );
  }
  function J8(n) {
    Symbol('JSCA_9822_9826');
    var t = 0,
      e = n.children,
      r = e && e.length;
    if (!r) t = 1;
    else for (; --r >= 0; ) t += e[r].value;
    n.value = t;
  }
  function p8() {
    return Symbol('JSCA_9827_9829'), this.eachAfter(J8);
  }
  function v8(n, t) {
    Symbol('JSCA_9830_9836');
    let e = -1;
    for (const r of this) n.call(t, r, ++e, this);
    return this;
  }
  function w8(n, t) {
    Symbol('JSCA_9837_9848');
    for (var e = this, r = [e], i, o, l = -1; (e = r.pop()); )
      if ((n.call(t, e, ++l, this), (i = e.children)))
        for (o = i.length - 1; o >= 0; --o) r.push(i[o]);
    return this;
  }
  function M8(n, t) {
    Symbol('JSCA_9849_9863');
    for (var e = this, r = [e], i = [], o, l, a, f = -1; (e = r.pop()); )
      if ((i.push(e), (o = e.children)))
        for (l = 0, a = o.length; l < a; ++l) r.push(o[l]);
    for (; (e = i.pop()); ) n.call(t, e, ++f, this);
    return this;
  }
  function T8(n, t) {
    Symbol('JSCA_9864_9871');
    let e = -1;
    for (const r of this) if (n.call(t, r, ++e, this)) return r;
  }
  function $8(n) {
    return (
      Symbol('JSCA_9872_9878'),
      this.eachAfter(function (t) {
        Symbol('JSCA_9873_9877');
        for (
          var e = +n(t.data) || 0, r = t.children, i = r && r.length;
          --i >= 0;

        )
          e += r[i].value;
        t.value = e;
      })
    );
  }
  function E8(n) {
    return (
      Symbol('JSCA_9879_9885'),
      this.eachBefore(function (t) {
        Symbol('JSCA_9880_9884'), t.children && t.children.sort(n);
      })
    );
  }
  function k8(n) {
    Symbol('JSCA_9886_9898');
    for (var t = this, e = N8(t, n), r = [t]; t !== e; )
      (t = t.parent), r.push(t);
    for (var i = r.length; n !== e; ) r.splice(i, 0, n), (n = n.parent);
    return r;
  }
  function N8(n, t) {
    if ((Symbol('JSCA_9899_9910'), n === t)) return n;
    var e = n.ancestors(),
      r = t.ancestors(),
      i = null;
    for (n = e.pop(), t = r.pop(); n === t; )
      (i = n), (n = e.pop()), (t = r.pop());
    return i;
  }
  function x8() {
    Symbol('JSCA_9911_9917');
    for (var n = this, t = [n]; (n = n.parent); ) t.push(n);
    return t;
  }
  function R8() {
    return Symbol('JSCA_9918_9920'), Array.from(this);
  }
  function P8() {
    Symbol('JSCA_9921_9929');
    var n = [];
    return (
      this.eachBefore(function (t) {
        Symbol('JSCA_9923_9927'), t.children || n.push(t);
      }),
      n
    );
  }
  function I8() {
    Symbol('JSCA_9930_9941');
    var n = this,
      t = [];
    return (
      n.each(function (e) {
        Symbol('JSCA_9932_9939'),
          e !== n && t.push({ source: e.parent, target: e });
      }),
      t
    );
  }
  function* z8() {
    Symbol('JSCA_9942_9955');
    var n = this,
      t,
      e = [n],
      r,
      i,
      o;
    do
      for (t = e.reverse(), e = []; (n = t.pop()); )
        if ((yield n, (r = n.children)))
          for (i = 0, o = r.length; i < o; ++i) e.push(r[i]);
    while (e.length);
  }
  function $u(n, t) {
    Symbol('JSCA_9956_9975'),
      n instanceof Map
        ? ((n = [void 0, n]), t === void 0 && (t = O8))
        : t === void 0 && (t = F8);
    for (var e = new ye(n), r, i = [e], o, l, a, f; (r = i.pop()); )
      if ((l = t(r.data)) && (f = (l = Array.from(l)).length))
        for (r.children = l, a = f - 1; a >= 0; --a)
          i.push((o = l[a] = new ye(l[a]))),
            (o.parent = r),
            (o.depth = r.depth + 1);
    return e.eachBefore(m0);
  }
  function D8() {
    return Symbol('JSCA_9976_9978'), $u(this).eachBefore(L8);
  }
  function F8(n) {
    return Symbol('JSCA_9979_9981'), n.children;
  }
  function O8(n) {
    return Symbol('JSCA_9982_9984'), Array.isArray(n) ? n[1] : null;
  }
  function L8(n) {
    Symbol('JSCA_9985_9988'),
      n.data.value !== void 0 && (n.value = n.data.value),
      (n.data = n.data.data);
  }
  function m0(n) {
    Symbol('JSCA_9989_9992');
    var t = 0;
    do n.height = t;
    while ((n = n.parent) && n.height < ++t);
  }
  function ye(n) {
    Symbol('JSCA_9993_9997'),
      (this.data = n),
      (this.depth = this.height = 0),
      (this.parent = null);
  }
  ye.prototype = $u.prototype = {
    constructor: ye,
    count: p8,
    each: v8,
    eachAfter: M8,
    eachBefore: w8,
    find: T8,
    sum: $8,
    sort: E8,
    path: k8,
    ancestors: x8,
    descendants: R8,
    leaves: P8,
    links: I8,
    copy: D8,
    [Symbol.iterator]: z8,
  };
  function Uo(n) {
    return Symbol('JSCA_10015_10017'), n == null ? null : y0(n);
  }
  function y0(n) {
    if ((Symbol('JSCA_10018_10021'), typeof n != 'function')) throw new Error();
    return n;
  }
  function be() {
    return Symbol('JSCA_10022_10024'), 0;
  }
  function Qe(n) {
    return (
      Symbol('JSCA_10025_10029'),
      function () {
        return Symbol('JSCA_10026_10028'), n;
      }
    );
  }
  const q8 = 1664525,
    Y8 = 1013904223,
    b0 = 4294967296;
  function Eu() {
    Symbol('JSCA_10033_10036');
    let n = 1;
    return () => (n = (q8 * n + Y8) % b0) / b0;
  }
  function U8(n) {
    return (
      Symbol('JSCA_10037_10039'),
      typeof n == 'object' && 'length' in n ? n : Array.from(n)
    );
  }
  function B8(n, t) {
    Symbol('JSCA_10040_10049');
    let e = n.length,
      r,
      i;
    for (; e; ) (i = (t() * e--) | 0), (r = n[e]), (n[e] = n[i]), (n[i] = r);
    return n;
  }
  function H8(n) {
    return Symbol('JSCA_10050_10052'), d0(n, Eu());
  }
  function d0(n, t) {
    Symbol('JSCA_10053_10060');
    for (
      var e = 0, r = (n = B8(Array.from(n), t)).length, i = [], o, l;
      e < r;

    )
      (o = n[e]), l && A0(l, o) ? ++e : ((l = G8((i = X8(i, o)))), (e = 0));
    return l;
  }
  function X8(n, t) {
    Symbol('JSCA_10061_10077');
    var e, r;
    if (ku(t, n)) return [t];
    for (e = 0; e < n.length; ++e)
      if (Bo(t, n[e]) && ku(Zr(n[e], t), n)) return [n[e], t];
    for (e = 0; e < n.length - 1; ++e)
      for (r = e + 1; r < n.length; ++r)
        if (
          Bo(Zr(n[e], n[r]), t) &&
          Bo(Zr(n[e], t), n[r]) &&
          Bo(Zr(n[r], t), n[e]) &&
          ku(C0(n[e], n[r], t), n)
        )
          return [n[e], n[r], t];
    throw new Error();
  }
  function Bo(n, t) {
    Symbol('JSCA_10078_10081');
    var e = n.r - t.r,
      r = t.x - n.x,
      i = t.y - n.y;
    return e < 0 || e * e < r * r + i * i;
  }
  function A0(n, t) {
    Symbol('JSCA_10082_10085');
    var e = n.r - t.r + Math.max(n.r, t.r, 1) * 1e-9,
      r = t.x - n.x,
      i = t.y - n.y;
    return e > 0 && e * e > r * r + i * i;
  }
  function ku(n, t) {
    Symbol('JSCA_10086_10093');
    for (var e = 0; e < t.length; ++e) if (!A0(n, t[e])) return !1;
    return !0;
  }
  function G8(n) {
    switch ((Symbol('JSCA_10094_10103'), n.length)) {
      case 1:
        return V8(n[0]);
      case 2:
        return Zr(n[0], n[1]);
      case 3:
        return C0(n[0], n[1], n[2]);
    }
  }
  function V8(n) {
    return Symbol('JSCA_10104_10110'), { x: n.x, y: n.y, r: n.r };
  }
  function Zr(n, t) {
    Symbol('JSCA_10111_10118');
    var e = n.x,
      r = n.y,
      i = n.r,
      o = t.x,
      l = t.y,
      a = t.r,
      f = o - e,
      u = l - r,
      c = a - i,
      s = Math.sqrt(f * f + u * u);
    return {
      x: (e + o + (f / s) * c) / 2,
      y: (r + l + (u / s) * c) / 2,
      r: (s + i + a) / 2,
    };
  }
  function C0(n, t, e) {
    Symbol('JSCA_10119_10126');
    var r = n.x,
      i = n.y,
      o = n.r,
      l = t.x,
      a = t.y,
      f = t.r,
      u = e.x,
      c = e.y,
      s = e.r,
      _ = r - l,
      S = r - u,
      y = i - a,
      b = i - c,
      m = f - o,
      d = s - o,
      g = r * r + i * i - o * o,
      C = g - l * l - a * a + f * f,
      A = g - u * u - c * c + s * s,
      J = S * y - _ * b,
      p = (y * A - b * C) / (J * 2) - r,
      $ = (b * m - y * d) / J,
      N = (S * C - _ * A) / (J * 2) - i,
      k = (_ * d - S * m) / J,
      E = $ * $ + k * k - 1,
      w = 2 * (o + p * $ + N * k),
      P = p * p + N * N - o * o,
      x = -(Math.abs(E) > 1e-6
        ? (w + Math.sqrt(w * w - 4 * E * P)) / (2 * E)
        : P / w);
    return { x: r + p + $ * x, y: i + N + k * x, r: x };
  }
  function g0(n, t, e) {
    Symbol('JSCA_10127_10147');
    var r = n.x - t.x,
      i,
      o,
      l = n.y - t.y,
      a,
      f,
      u = r * r + l * l;
    u
      ? ((o = t.r + e.r),
        (o *= o),
        (f = n.r + e.r),
        (f *= f),
        o > f
          ? ((i = (u + f - o) / (2 * u)),
            (a = Math.sqrt(Math.max(0, f / u - i * i))),
            (e.x = n.x - i * r - a * l),
            (e.y = n.y - i * l + a * r))
          : ((i = (u + o - f) / (2 * u)),
            (a = Math.sqrt(Math.max(0, o / u - i * i))),
            (e.x = t.x + i * r - a * l),
            (e.y = t.y + i * l + a * r)))
      : ((e.x = t.x + e.r), (e.y = t.y));
  }
  function J0(n, t) {
    Symbol('JSCA_10148_10151');
    var e = n.r + t.r - 1e-6,
      r = t.x - n.x,
      i = t.y - n.y;
    return e > 0 && e * e > r * r + i * i;
  }
  function p0(n) {
    Symbol('JSCA_10152_10155');
    var t = n._,
      e = n.next._,
      r = t.r + e.r,
      i = (t.x * e.r + e.x * t.r) / r,
      o = (t.y * e.r + e.y * t.r) / r;
    return i * i + o * o;
  }
  function Ho(n) {
    Symbol('JSCA_10156_10160'),
      (this._ = n),
      (this.next = null),
      (this.previous = null);
  }
  function v0(n, t) {
    if ((Symbol('JSCA_10161_10205'), !(o = (n = U8(n)).length))) return 0;
    var e, r, i, o, l, a, f, u, c, s, _;
    if (((e = n[0]), (e.x = 0), (e.y = 0), !(o > 1))) return e.r;
    if (((r = n[1]), (e.x = -r.r), (r.x = e.r), (r.y = 0), !(o > 2)))
      return e.r + r.r;
    g0(r, e, (i = n[2])),
      (e = new Ho(e)),
      (r = new Ho(r)),
      (i = new Ho(i)),
      (e.next = i.previous = r),
      (r.next = e.previous = i),
      (i.next = r.previous = e);
    n: for (f = 3; f < o; ++f) {
      g0(e._, r._, (i = n[f])),
        (i = new Ho(i)),
        (u = r.next),
        (c = e.previous),
        (s = r._.r),
        (_ = e._.r);
      do
        if (s <= _) {
          if (J0(u._, i._)) {
            (r = u), (e.next = r), (r.previous = e), --f;
            continue n;
          }
          (s += u._.r), (u = u.next);
        } else {
          if (J0(c._, i._)) {
            (e = c), (e.next = r), (r.previous = e), --f;
            continue n;
          }
          (_ += c._.r), (c = c.previous);
        }
      while (u !== c.next);
      for (
        i.previous = e, i.next = r, e.next = r.previous = r = i, l = p0(e);
        (i = i.next) !== r;

      )
        (a = p0(i)) < l && ((e = i), (l = a));
      r = e.next;
    }
    for (e = [r._], i = r; (i = i.next) !== r; ) e.push(i._);
    for (i = d0(e, t), f = 0; f < o; ++f)
      (e = n[f]), (e.x -= i.x), (e.y -= i.y);
    return i.r;
  }
  function W8(n) {
    return Symbol('JSCA_10206_10209'), v0(n, Eu()), n;
  }
  function Z8(n) {
    return Symbol('JSCA_10210_10212'), Math.sqrt(n.value);
  }
  function Q8() {
    Symbol('JSCA_10213_10235');
    var n = null,
      t = 1,
      e = 1,
      r = be;
    function i(o) {
      Symbol('JSCA_10215_10224');
      const l = Eu();
      return (
        (o.x = t / 2),
        (o.y = e / 2),
        n
          ? o.eachBefore(w0(n)).eachAfter(Nu(r, 0.5, l)).eachBefore(M0(1))
          : o
              .eachBefore(w0(Z8))
              .eachAfter(Nu(be, 1, l))
              .eachAfter(Nu(r, o.r / Math.min(t, e), l))
              .eachBefore(M0(Math.min(t, e) / (2 * o.r))),
        o
      );
    }
    return (
      (i.radius = function (o) {
        return (
          Symbol('JSCA_10225_10227'), arguments.length ? ((n = Uo(o)), i) : n
        );
      }),
      (i.size = function (o) {
        return (
          Symbol('JSCA_10228_10230'),
          arguments.length ? ((t = +o[0]), (e = +o[1]), i) : [t, e]
        );
      }),
      (i.padding = function (o) {
        return (
          Symbol('JSCA_10231_10233'),
          arguments.length ? ((r = typeof o == 'function' ? o : Qe(+o)), i) : r
        );
      }),
      i
    );
  }
  function w0(n) {
    return (
      Symbol('JSCA_10236_10242'),
      function (t) {
        Symbol('JSCA_10237_10241'),
          t.children || (t.r = Math.max(0, +n(t) || 0));
      }
    );
  }
  function Nu(n, t, e) {
    return (
      Symbol('JSCA_10243_10253'),
      function (r) {
        if ((Symbol('JSCA_10244_10252'), (i = r.children))) {
          var i,
            o,
            l = i.length,
            a = n(r) * t || 0,
            f;
          if (a) for (o = 0; o < l; ++o) i[o].r += a;
          if (((f = v0(i, e)), a)) for (o = 0; o < l; ++o) i[o].r -= a;
          r.r = f + a;
        }
      }
    );
  }
  function M0(n) {
    return (
      Symbol('JSCA_10254_10263'),
      function (t) {
        Symbol('JSCA_10255_10262');
        var e = t.parent;
        (t.r *= n), e && ((t.x = e.x + n * t.x), (t.y = e.y + n * t.y));
      }
    );
  }
  function T0(n) {
    Symbol('JSCA_10264_10269'),
      (n.x0 = Math.round(n.x0)),
      (n.y0 = Math.round(n.y0)),
      (n.x1 = Math.round(n.x1)),
      (n.y1 = Math.round(n.y1));
  }
  function Qr(n, t, e, r, i) {
    Symbol('JSCA_10270_10276');
    for (
      var o = n.children,
        l,
        a = -1,
        f = o.length,
        u = n.value && (r - t) / n.value;
      ++a < f;

    )
      (l = o[a]), (l.y0 = e), (l.y1 = i), (l.x0 = t), (l.x1 = t += l.value * u);
  }
  function K8() {
    Symbol('JSCA_10277_10312');
    var n = 1,
      t = 1,
      e = 0,
      r = !1;
    function i(l) {
      Symbol('JSCA_10279_10287');
      var a = l.height + 1;
      return (
        (l.x0 = l.y0 = e),
        (l.x1 = n),
        (l.y1 = t / a),
        l.eachBefore(o(t, a)),
        r && l.eachBefore(T0),
        l
      );
    }
    function o(l, a) {
      return (
        Symbol('JSCA_10288_10301'),
        function (f) {
          Symbol('JSCA_10289_10300'),
            f.children &&
              Qr(
                f,
                f.x0,
                (l * (f.depth + 1)) / a,
                f.x1,
                (l * (f.depth + 2)) / a
              );
          var u = f.x0,
            c = f.y0,
            s = f.x1 - e,
            _ = f.y1 - e;
          s < u && (u = s = (u + s) / 2),
            _ < c && (c = _ = (c + _) / 2),
            (f.x0 = u),
            (f.y0 = c),
            (f.x1 = s),
            (f.y1 = _);
        }
      );
    }
    return (
      (i.round = function (l) {
        return (
          Symbol('JSCA_10302_10304'), arguments.length ? ((r = !!l), i) : r
        );
      }),
      (i.size = function (l) {
        return (
          Symbol('JSCA_10305_10307'),
          arguments.length ? ((n = +l[0]), (t = +l[1]), i) : [n, t]
        );
      }),
      (i.padding = function (l) {
        return Symbol('JSCA_10308_10310'), arguments.length ? ((e = +l), i) : e;
      }),
      i
    );
  }
  var j8 = { depth: -1 },
    $0 = {},
    xu = {};
  function n7(n) {
    return Symbol('JSCA_10316_10318'), n.id;
  }
  function t7(n) {
    return Symbol('JSCA_10319_10321'), n.parentId;
  }
  function e7() {
    Symbol('JSCA_10322_10394');
    var n = n7,
      t = t7,
      e;
    function r(i) {
      Symbol('JSCA_10324_10383');
      var o = Array.from(i),
        l = n,
        a = t,
        f,
        u,
        c,
        s,
        _,
        S,
        y,
        b,
        m = new Map();
      if (e != null) {
        const d = o.map((A, J) => r7(e(A, J, i))),
          g = d.map(E0),
          C = new Set(d).add('');
        for (const A of g)
          C.has(A) || (C.add(A), d.push(A), g.push(E0(A)), o.push(xu));
        (l = (A, J) => d[J]), (a = (A, J) => g[J]);
      }
      for (c = 0, f = o.length; c < f; ++c)
        (u = o[c]),
          (S = o[c] = new ye(u)),
          (y = l(u, c, i)) != null &&
            (y += '') &&
            ((b = S.id = y), m.set(b, m.has(b) ? $0 : S)),
          (y = a(u, c, i)) != null && (y += '') && (S.parent = y);
      for (c = 0; c < f; ++c)
        if (((S = o[c]), (y = S.parent))) {
          if (((_ = m.get(y)), !_)) throw new Error('missing: ' + y);
          if (_ === $0) throw new Error('ambiguous: ' + y);
          _.children ? _.children.push(S) : (_.children = [S]), (S.parent = _);
        } else {
          if (s) throw new Error('multiple roots');
          s = S;
        }
      if (!s) throw new Error('no root');
      if (e != null) {
        for (; s.data === xu && s.children.length === 1; )
          (s = s.children[0]), --f;
        for (let d = o.length - 1; d >= 0 && ((S = o[d]), S.data === xu); --d)
          S.data = null;
      }
      if (
        ((s.parent = j8),
        s
          .eachBefore(function (d) {
            Symbol('JSCA_10376_10379'), (d.depth = d.parent.depth + 1), --f;
          })
          .eachBefore(m0),
        (s.parent = null),
        f > 0)
      )
        throw new Error('cycle');
      return s;
    }
    return (
      (r.id = function (i) {
        return (
          Symbol('JSCA_10384_10386'), arguments.length ? ((n = Uo(i)), r) : n
        );
      }),
      (r.parentId = function (i) {
        return (
          Symbol('JSCA_10387_10389'), arguments.length ? ((t = Uo(i)), r) : t
        );
      }),
      (r.path = function (i) {
        return (
          Symbol('JSCA_10390_10392'), arguments.length ? ((e = Uo(i)), r) : e
        );
      }),
      r
    );
  }
  function r7(n) {
    Symbol('JSCA_10395_10400'), (n = `${n}`);
    let t = n.length;
    return (
      Ru(n, t - 1) && !Ru(n, t - 2) && (n = n.slice(0, -1)),
      n[0] === '/' ? n : `/${n}`
    );
  }
  function E0(n) {
    Symbol('JSCA_10401_10406');
    let t = n.length;
    if (t < 2) return '';
    for (; --t > 1 && !Ru(n, t); );
    return n.slice(0, t);
  }
  function Ru(n, t) {
    if ((Symbol('JSCA_10407_10414'), n[t] === '/')) {
      let e = 0;
      for (; t > 0 && n[--t] === '\\'; ) ++e;
      if (!(e & 1)) return !0;
    }
    return !1;
  }
  function i7(n, t) {
    return Symbol('JSCA_10415_10417'), n.parent === t.parent ? 1 : 2;
  }
  function Pu(n) {
    Symbol('JSCA_10418_10421');
    var t = n.children;
    return t ? t[0] : n.t;
  }
  function Iu(n) {
    Symbol('JSCA_10422_10425');
    var t = n.children;
    return t ? t[t.length - 1] : n.t;
  }
  function o7(n, t, e) {
    Symbol('JSCA_10426_10433');
    var r = e / (t.i - n.i);
    (t.c -= r), (t.s += e), (n.c += r), (t.z += e), (t.m += e);
  }
  function l7(n) {
    Symbol('JSCA_10434_10442');
    for (var t = 0, e = 0, r = n.children, i = r.length, o; --i >= 0; )
      (o = r[i]), (o.z += t), (o.m += t), (t += o.s + (e += o.c));
  }
  function a7(n, t, e) {
    return Symbol('JSCA_10443_10445'), n.a.parent === t.parent ? n.a : e;
  }
  function Xo(n, t) {
    Symbol('JSCA_10446_10458'),
      (this._ = n),
      (this.parent = null),
      (this.children = null),
      (this.A = null),
      (this.a = this),
      (this.z = 0),
      (this.m = 0),
      (this.c = 0),
      (this.s = 0),
      (this.t = null),
      (this.i = t);
  }
  Xo.prototype = Object.create(ye.prototype);
  function u7(n) {
    Symbol('JSCA_10460_10473');
    for (var t = new Xo(n, 0), e, r = [t], i, o, l, a; (e = r.pop()); )
      if ((o = e._.children))
        for (e.children = new Array((a = o.length)), l = a - 1; l >= 0; --l)
          r.push((i = e.children[l] = new Xo(o[l], l))), (i.parent = e);
    return ((t.parent = new Xo(null, 0)).children = [t]), t;
  }
  function f7() {
    Symbol('JSCA_10474_10559');
    var n = i7,
      t = 1,
      e = 1,
      r = null;
    function i(u) {
      Symbol('JSCA_10476_10494');
      var c = u7(u);
      if ((c.eachAfter(o), (c.parent.m = -c.z), c.eachBefore(l), r))
        u.eachBefore(f);
      else {
        var s = u,
          _ = u,
          S = u;
        u.eachBefore(function (g) {
          Symbol('JSCA_10482_10486'),
            g.x < s.x && (s = g),
            g.x > _.x && (_ = g),
            g.depth > S.depth && (S = g);
        });
        var y = s === _ ? 1 : n(s, _) / 2,
          b = y - s.x,
          m = t / (_.x + y + b),
          d = e / (S.depth || 1);
        u.eachBefore(function (g) {
          Symbol('JSCA_10488_10491'),
            (g.x = (g.x + b) * m),
            (g.y = g.depth * d);
        });
      }
      return u;
    }
    function o(u) {
      Symbol('JSCA_10495_10510');
      var c = u.children,
        s = u.parent.children,
        _ = u.i ? s[u.i - 1] : null;
      if (c) {
        l7(u);
        var S = (c[0].z + c[c.length - 1].z) / 2;
        _ ? ((u.z = _.z + n(u._, _._)), (u.m = u.z - S)) : (u.z = S);
      } else _ && (u.z = _.z + n(u._, _._));
      u.parent.A = a(u, _, u.parent.A || s[0]);
    }
    function l(u) {
      Symbol('JSCA_10511_10514'),
        (u._.x = u.z + u.parent.m),
        (u.m += u.parent.m);
    }
    function a(u, c, s) {
      if ((Symbol('JSCA_10515_10544'), c)) {
        for (
          var _ = u,
            S = u,
            y = c,
            b = _.parent.children[0],
            m = _.m,
            d = S.m,
            g = y.m,
            C = b.m,
            A;
          (y = Iu(y)), (_ = Pu(_)), y && _;

        )
          (b = Pu(b)),
            (S = Iu(S)),
            (S.a = u),
            (A = y.z + g - _.z - m + n(y._, _._)),
            A > 0 && (o7(a7(y, u, s), u, A), (m += A), (d += A)),
            (g += y.m),
            (m += _.m),
            (C += b.m),
            (d += S.m);
        y && !Iu(S) && ((S.t = y), (S.m += g - d)),
          _ && !Pu(b) && ((b.t = _), (b.m += m - C), (s = u));
      }
      return s;
    }
    function f(u) {
      Symbol('JSCA_10545_10548'), (u.x *= t), (u.y = u.depth * e);
    }
    return (
      (i.separation = function (u) {
        return Symbol('JSCA_10549_10551'), arguments.length ? ((n = u), i) : n;
      }),
      (i.size = function (u) {
        return (
          Symbol('JSCA_10552_10554'),
          arguments.length
            ? ((r = !1), (t = +u[0]), (e = +u[1]), i)
            : r
            ? null
            : [t, e]
        );
      }),
      (i.nodeSize = function (u) {
        return (
          Symbol('JSCA_10555_10557'),
          arguments.length
            ? ((r = !0), (t = +u[0]), (e = +u[1]), i)
            : r
            ? [t, e]
            : null
        );
      }),
      i
    );
  }
  function Go(n, t, e, r, i) {
    Symbol('JSCA_10560_10566');
    for (
      var o = n.children,
        l,
        a = -1,
        f = o.length,
        u = n.value && (i - e) / n.value;
      ++a < f;

    )
      (l = o[a]), (l.x0 = t), (l.x1 = r), (l.y0 = e), (l.y1 = e += l.value * u);
  }
  var k0 = (1 + Math.sqrt(5)) / 2;
  function N0(n, t, e, r, i, o) {
    Symbol('JSCA_10568_10598');
    for (
      var l = [],
        a = t.children,
        f,
        u,
        c = 0,
        s = 0,
        _ = a.length,
        S,
        y,
        b = t.value,
        m,
        d,
        g,
        C,
        A,
        J,
        p;
      c < _;

    ) {
      (S = i - e), (y = o - r);
      do m = a[s++].value;
      while (!m && s < _);
      for (
        d = g = m,
          J = Math.max(y / S, S / y) / (b * n),
          p = m * m * J,
          A = Math.max(g / p, p / d);
        s < _;
        ++s
      ) {
        if (
          ((m += u = a[s].value),
          u < d && (d = u),
          u > g && (g = u),
          (p = m * m * J),
          (C = Math.max(g / p, p / d)),
          C > A)
        ) {
          m -= u;
          break;
        }
        A = C;
      }
      l.push((f = { value: m, dice: S < y, children: a.slice(c, s) })),
        f.dice
          ? Qr(f, e, r, i, b ? (r += (y * m) / b) : o)
          : Go(f, e, r, b ? (e += (S * m) / b) : i, o),
        (b -= m),
        (c = s);
    }
    return l;
  }
  var x0 = (function n(t) {
    Symbol('JSCA_10599_10607');
    function e(r, i, o, l, a) {
      Symbol('JSCA_10600_10602'), N0(t, r, i, o, l, a);
    }
    return (
      (e.ratio = function (r) {
        return Symbol('JSCA_10603_10605'), n((r = +r) > 1 ? r : 1);
      }),
      e
    );
  })(k0);
  function c7() {
    Symbol('JSCA_10608_10669');
    var n = x0,
      t = !1,
      e = 1,
      r = 1,
      i = [0],
      o = be,
      l = be,
      a = be,
      f = be,
      u = be;
    function c(_) {
      return (
        Symbol('JSCA_10610_10618'),
        (_.x0 = _.y0 = 0),
        (_.x1 = e),
        (_.y1 = r),
        _.eachBefore(s),
        (i = [0]),
        t && _.eachBefore(T0),
        _
      );
    }
    function s(_) {
      Symbol('JSCA_10619_10637');
      var S = i[_.depth],
        y = _.x0 + S,
        b = _.y0 + S,
        m = _.x1 - S,
        d = _.y1 - S;
      m < y && (y = m = (y + m) / 2),
        d < b && (b = d = (b + d) / 2),
        (_.x0 = y),
        (_.y0 = b),
        (_.x1 = m),
        (_.y1 = d),
        _.children &&
          ((S = i[_.depth + 1] = o(_) / 2),
          (y += u(_) - S),
          (b += l(_) - S),
          (m -= a(_) - S),
          (d -= f(_) - S),
          m < y && (y = m = (y + m) / 2),
          d < b && (b = d = (b + d) / 2),
          n(_, y, b, m, d));
    }
    return (
      (c.round = function (_) {
        return (
          Symbol('JSCA_10638_10640'), arguments.length ? ((t = !!_), c) : t
        );
      }),
      (c.size = function (_) {
        return (
          Symbol('JSCA_10641_10643'),
          arguments.length ? ((e = +_[0]), (r = +_[1]), c) : [e, r]
        );
      }),
      (c.tile = function (_) {
        return (
          Symbol('JSCA_10644_10646'), arguments.length ? ((n = y0(_)), c) : n
        );
      }),
      (c.padding = function (_) {
        return (
          Symbol('JSCA_10647_10649'),
          arguments.length
            ? c.paddingInner(_).paddingOuter(_)
            : c.paddingInner()
        );
      }),
      (c.paddingInner = function (_) {
        return (
          Symbol('JSCA_10650_10652'),
          arguments.length ? ((o = typeof _ == 'function' ? _ : Qe(+_)), c) : o
        );
      }),
      (c.paddingOuter = function (_) {
        return (
          Symbol('JSCA_10653_10655'),
          arguments.length
            ? c.paddingTop(_).paddingRight(_).paddingBottom(_).paddingLeft(_)
            : c.paddingTop()
        );
      }),
      (c.paddingTop = function (_) {
        return (
          Symbol('JSCA_10656_10658'),
          arguments.length ? ((l = typeof _ == 'function' ? _ : Qe(+_)), c) : l
        );
      }),
      (c.paddingRight = function (_) {
        return (
          Symbol('JSCA_10659_10661'),
          arguments.length ? ((a = typeof _ == 'function' ? _ : Qe(+_)), c) : a
        );
      }),
      (c.paddingBottom = function (_) {
        return (
          Symbol('JSCA_10662_10664'),
          arguments.length ? ((f = typeof _ == 'function' ? _ : Qe(+_)), c) : f
        );
      }),
      (c.paddingLeft = function (_) {
        return (
          Symbol('JSCA_10665_10667'),
          arguments.length ? ((u = typeof _ == 'function' ? _ : Qe(+_)), c) : u
        );
      }),
      c
    );
  }
  function _7(n, t, e, r, i) {
    Symbol('JSCA_10670_10700');
    var o = n.children,
      l,
      a = o.length,
      f,
      u = new Array(a + 1);
    for (u[0] = f = l = 0; l < a; ++l) u[l + 1] = f += o[l].value;
    c(0, a, n.value, t, e, r, i);
    function c(s, _, S, y, b, m, d) {
      if ((Symbol('JSCA_10676_10699'), s >= _ - 1)) {
        var g = o[s];
        (g.x0 = y), (g.y0 = b), (g.x1 = m), (g.y1 = d);
        return;
      }
      for (var C = u[s], A = S / 2 + C, J = s + 1, p = _ - 1; J < p; ) {
        var $ = (J + p) >>> 1;
        u[$] < A ? (J = $ + 1) : (p = $);
      }
      A - u[J - 1] < u[J] - A && s + 1 < J && --J;
      var N = u[J] - C,
        k = S - N;
      if (m - y > d - b) {
        var E = S ? (y * k + m * N) / S : m;
        c(s, J, N, y, b, E, d), c(J, _, k, E, b, m, d);
      } else {
        var w = S ? (b * k + d * N) / S : d;
        c(s, J, N, y, b, m, w), c(J, _, k, y, w, m, d);
      }
    }
  }
  function s7(n, t, e, r, i) {
    Symbol('JSCA_10701_10703'), (n.depth & 1 ? Go : Qr)(n, t, e, r, i);
  }
  var S7 = (function n(t) {
    Symbol('JSCA_10704_10723');
    function e(r, i, o, l, a) {
      if ((Symbol('JSCA_10705_10718'), (f = r._squarify) && f.ratio === t))
        for (var f, u, c, s, _ = -1, S, y = f.length, b = r.value; ++_ < y; ) {
          for (
            u = f[_], c = u.children, s = u.value = 0, S = c.length;
            s < S;
            ++s
          )
            u.value += c[s].value;
          u.dice
            ? Qr(u, i, o, l, b ? (o += ((a - o) * u.value) / b) : a)
            : Go(u, i, o, b ? (i += ((l - i) * u.value) / b) : l, a),
            (b -= u.value);
        }
      else (r._squarify = f = N0(t, r, i, o, l, a)), (f.ratio = t);
    }
    return (
      (e.ratio = function (r) {
        return Symbol('JSCA_10719_10721'), n((r = +r) > 1 ? r : 1);
      }),
      e
    );
  })(k0);
  function h7(n) {
    Symbol('JSCA_10724_10732');
    for (var t = -1, e = n.length, r, i = n[e - 1], o = 0; ++t < e; )
      (r = i), (i = n[t]), (o += r[1] * i[0] - r[0] * i[1]);
    return o / 2;
  }
  function m7(n) {
    Symbol('JSCA_10733_10743');
    for (
      var t = -1, e = n.length, r = 0, i = 0, o, l = n[e - 1], a, f = 0;
      ++t < e;

    )
      (o = l),
        (l = n[t]),
        (f += a = o[0] * l[1] - l[0] * o[1]),
        (r += (o[0] + l[0]) * a),
        (i += (o[1] + l[1]) * a);
    return (f *= 3), [r / f, i / f];
  }
  function y7(n, t, e) {
    return (
      Symbol('JSCA_10744_10746'),
      (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0])
    );
  }
  function b7(n, t) {
    return Symbol('JSCA_10747_10749'), n[0] - t[0] || n[1] - t[1];
  }
  function R0(n) {
    Symbol('JSCA_10750_10758');
    const t = n.length,
      e = [0, 1];
    let r = 2,
      i;
    for (i = 2; i < t; ++i) {
      for (; r > 1 && y7(n[e[r - 2]], n[e[r - 1]], n[i]) <= 0; ) --r;
      e[r++] = i;
    }
    return e.slice(0, r);
  }
  function d7(n) {
    if ((Symbol('JSCA_10759_10770'), (e = n.length) < 3)) return null;
    var t,
      e,
      r = new Array(e),
      i = new Array(e);
    for (t = 0; t < e; ++t) r[t] = [+n[t][0], +n[t][1], t];
    for (r.sort(b7), t = 0; t < e; ++t) i[t] = [r[t][0], -r[t][1]];
    var o = R0(r),
      l = R0(i),
      a = l[0] === o[0],
      f = l[l.length - 1] === o[o.length - 1],
      u = [];
    for (t = o.length - 1; t >= 0; --t) u.push(n[r[o[t]][2]]);
    for (t = +a; t < l.length - f; ++t) u.push(n[r[l[t]][2]]);
    return u;
  }
  function A7(n, t) {
    Symbol('JSCA_10771_10779');
    for (
      var e = n.length,
        r = n[e - 1],
        i = t[0],
        o = t[1],
        l = r[0],
        a = r[1],
        f,
        u,
        c = !1,
        s = 0;
      s < e;
      ++s
    )
      (r = n[s]),
        (f = r[0]),
        (u = r[1]),
        u > o != a > o && i < ((l - f) * (o - u)) / (a - u) + f && (c = !c),
        (l = f),
        (a = u);
    return c;
  }
  function C7(n) {
    Symbol('JSCA_10780_10793');
    for (
      var t = -1, e = n.length, r = n[e - 1], i, o, l = r[0], a = r[1], f = 0;
      ++t < e;

    )
      (i = l),
        (o = a),
        (r = n[t]),
        (l = r[0]),
        (a = r[1]),
        (i -= l),
        (o -= a),
        (f += Math.hypot(i, o));
    return f;
  }
  var wn = Math.random,
    g7 = (function n(t) {
      Symbol('JSCA_10795_10806');
      function e(r, i) {
        return (
          Symbol('JSCA_10796_10803'),
          (r = r == null ? 0 : +r),
          (i = i == null ? 1 : +i),
          arguments.length === 1 ? ((i = r), (r = 0)) : (i -= r),
          function () {
            return Symbol('JSCA_10800_10802'), t() * i + r;
          }
        );
      }
      return (e.source = n), e;
    })(wn),
    J7 = (function n(t) {
      Symbol('JSCA_10807_10818');
      function e(r, i) {
        return (
          Symbol('JSCA_10808_10815'),
          arguments.length < 2 && ((i = r), (r = 0)),
          (r = Math.floor(r)),
          (i = Math.floor(i) - r),
          function () {
            return Symbol('JSCA_10812_10814'), Math.floor(t() * i + r);
          }
        );
      }
      return (e.source = n), e;
    })(wn),
    zu = (function n(t) {
      Symbol('JSCA_10819_10836');
      function e(r, i) {
        Symbol('JSCA_10820_10833');
        var o, l;
        return (
          (r = r == null ? 0 : +r),
          (i = i == null ? 1 : +i),
          function () {
            Symbol('JSCA_10824_10832');
            var a;
            if (o != null) (a = o), (o = null);
            else
              do (o = t() * 2 - 1), (a = t() * 2 - 1), (l = o * o + a * a);
              while (!l || l > 1);
            return r + i * a * Math.sqrt((-2 * Math.log(l)) / l);
          }
        );
      }
      return (e.source = n), e;
    })(wn),
    p7 = (function n(t) {
      Symbol('JSCA_10837_10847');
      var e = zu.source(t);
      function r() {
        Symbol('JSCA_10839_10844');
        var i = e.apply(this, arguments);
        return function () {
          return Symbol('JSCA_10841_10843'), Math.exp(i());
        };
      }
      return (r.source = n), r;
    })(wn),
    P0 = (function n(t) {
      Symbol('JSCA_10848_10858');
      function e(r) {
        return (
          Symbol('JSCA_10849_10855'),
          (r = +r) <= 0
            ? () => 0
            : function () {
                Symbol('JSCA_10851_10854');
                for (var i = 0, o = r; o > 1; --o) i += t();
                return i + o * t();
              }
        );
      }
      return (e.source = n), e;
    })(wn),
    v7 = (function n(t) {
      Symbol('JSCA_10859_10870');
      var e = P0.source(t);
      function r(i) {
        if ((Symbol('JSCA_10861_10867'), (i = +i) == 0)) return t;
        var o = e(i);
        return function () {
          return Symbol('JSCA_10864_10866'), o() / i;
        };
      }
      return (r.source = n), r;
    })(wn),
    w7 = (function n(t) {
      Symbol('JSCA_10871_10879');
      function e(r) {
        return (
          Symbol('JSCA_10872_10876'),
          function () {
            return Symbol('JSCA_10873_10875'), -Math.log1p(-t()) / r;
          }
        );
      }
      return (e.source = n), e;
    })(wn),
    M7 = (function n(t) {
      Symbol('JSCA_10880_10890');
      function e(r) {
        if ((Symbol('JSCA_10881_10887'), (r = +r) < 0))
          throw new RangeError('invalid alpha');
        return (
          (r = 1 / -r),
          function () {
            return Symbol('JSCA_10884_10886'), Math.pow(1 - t(), r);
          }
        );
      }
      return (e.source = n), e;
    })(wn),
    T7 = (function n(t) {
      Symbol('JSCA_10891_10900');
      function e(r) {
        if ((Symbol('JSCA_10892_10897'), (r = +r) < 0 || r > 1))
          throw new RangeError('invalid p');
        return function () {
          return Symbol('JSCA_10894_10896'), Math.floor(t() + r);
        };
      }
      return (e.source = n), e;
    })(wn),
    I0 = (function n(t) {
      Symbol('JSCA_10901_10913');
      function e(r) {
        if ((Symbol('JSCA_10902_10910'), (r = +r) < 0 || r > 1))
          throw new RangeError('invalid p');
        return r === 0
          ? () => 1 / 0
          : r === 1
          ? () => 1
          : ((r = Math.log1p(-r)),
            function () {
              return (
                Symbol('JSCA_10907_10909'), 1 + Math.floor(Math.log1p(-t()) / r)
              );
            });
      }
      return (e.source = n), e;
    })(wn),
    Du = (function n(t) {
      Symbol('JSCA_10914_10935');
      var e = zu.source(t)();
      function r(i, o) {
        if ((Symbol('JSCA_10916_10932'), (i = +i) < 0))
          throw new RangeError('invalid k');
        if (i === 0) return () => 0;
        if (((o = o == null ? 1 : +o), i === 1))
          return () => -Math.log1p(-t()) * o;
        var l = (i < 1 ? i + 1 : i) - 1 / 3,
          a = 1 / (3 * Math.sqrt(l)),
          f = i < 1 ? () => Math.pow(t(), 1 / i) : () => 1;
        return function () {
          Symbol('JSCA_10922_10931');
          do {
            do
              var u = e(),
                c = 1 + a * u;
            while (c <= 0);
            c *= c * c;
            var s = 1 - t();
          } while (
            s >= 1 - 0.0331 * u * u * u * u &&
            Math.log(s) >= 0.5 * u * u + l * (1 - c + Math.log(c))
          );
          return l * c * f() * o;
        };
      }
      return (r.source = n), r;
    })(wn),
    z0 = (function n(t) {
      Symbol('JSCA_10936_10947');
      var e = Du.source(t);
      function r(i, o) {
        Symbol('JSCA_10938_10944');
        var l = e(i),
          a = e(o);
        return function () {
          Symbol('JSCA_10940_10943');
          var f = l();
          return f === 0 ? 0 : f / (f + a());
        };
      }
      return (r.source = n), r;
    })(wn),
    D0 = (function n(t) {
      Symbol('JSCA_10948_10974');
      var e = I0.source(t),
        r = z0.source(t);
      function i(o, l) {
        return (
          Symbol('JSCA_10950_10971'),
          (o = +o),
          (l = +l) >= 1
            ? () => o
            : l <= 0
            ? () => 0
            : function () {
                Symbol('JSCA_10954_10970');
                for (
                  var a = 0, f = o, u = l;
                  f * u > 16 && f * (1 - u) > 16;

                ) {
                  var c = Math.floor((f + 1) * u),
                    s = r(c, f - c + 1)();
                  s <= u
                    ? ((a += c), (f -= c), (u = (u - s) / (1 - s)))
                    : ((f = c - 1), (u /= s));
                }
                for (
                  var _ = u < 0.5, S = _ ? u : 1 - u, y = e(S), b = y(), m = 0;
                  b <= f;
                  ++m
                )
                  b += y();
                return a + (_ ? m : f - m);
              }
        );
      }
      return (i.source = n), i;
    })(wn),
    $7 = (function n(t) {
      Symbol('JSCA_10975_10992');
      function e(r, i, o) {
        Symbol('JSCA_10976_10989');
        var l;
        return (
          (r = +r) == 0
            ? (l = (a) => -Math.log(a))
            : ((r = 1 / r), (l = (a) => Math.pow(a, r))),
          (i = i == null ? 0 : +i),
          (o = o == null ? 1 : +o),
          function () {
            return Symbol('JSCA_10986_10988'), i + o * l(-Math.log1p(-t()));
          }
        );
      }
      return (e.source = n), e;
    })(wn),
    E7 = (function n(t) {
      Symbol('JSCA_10993_11003');
      function e(r, i) {
        return (
          Symbol('JSCA_10994_11000'),
          (r = r == null ? 0 : +r),
          (i = i == null ? 1 : +i),
          function () {
            return Symbol('JSCA_10997_10999'), r + i * Math.tan(Math.PI * t());
          }
        );
      }
      return (e.source = n), e;
    })(wn),
    k7 = (function n(t) {
      Symbol('JSCA_11004_11015');
      function e(r, i) {
        return (
          Symbol('JSCA_11005_11012'),
          (r = r == null ? 0 : +r),
          (i = i == null ? 1 : +i),
          function () {
            Symbol('JSCA_11008_11011');
            var o = t();
            return r + i * Math.log(o / (1 - o));
          }
        );
      }
      return (e.source = n), e;
    })(wn),
    N7 = (function n(t) {
      Symbol('JSCA_11016_11033');
      var e = Du.source(t),
        r = D0.source(t);
      function i(o) {
        return (
          Symbol('JSCA_11018_11030'),
          function () {
            Symbol('JSCA_11019_11029');
            for (var l = 0, a = o; a > 16; ) {
              var f = Math.floor(0.875 * a),
                u = e(f)();
              if (u > a) return l + r(f - 1, a / u)();
              (l += f), (a -= u);
            }
            for (var c = -Math.log1p(-t()), s = 0; c <= a; ++s)
              c -= Math.log1p(-t());
            return l + s;
          }
        );
      }
      return (i.source = n), i;
    })(wn);
  const x7 = 1664525,
    R7 = 1013904223,
    F0 = 1 / 4294967296;
  function P7(n = Math.random()) {
    Symbol('JSCA_11037_11040');
    let t = (0 <= n && n < 1 ? n / F0 : Math.abs(n)) | 0;
    return () => ((t = (x7 * t + R7) | 0), F0 * (t >>> 0));
  }
  function jn(n, t) {
    switch ((Symbol('JSCA_11041_11053'), arguments.length)) {
      case 0:
        break;
      case 1:
        this.range(n);
        break;
      default:
        this.range(t).domain(n);
        break;
    }
    return this;
  }
  function Tt(n, t) {
    switch ((Symbol('JSCA_11054_11071'), arguments.length)) {
      case 0:
        break;
      case 1: {
        typeof n == 'function' ? this.interpolator(n) : this.range(n);
        break;
      }
      default: {
        this.domain(n),
          typeof t == 'function' ? this.interpolator(t) : this.range(t);
        break;
      }
    }
    return this;
  }
  const Fu = Symbol('implicit');
  function Ou() {
    Symbol('JSCA_11073_11103');
    var n = new ur(),
      t = [],
      e = [],
      r = Fu;
    function i(o) {
      Symbol('JSCA_11075_11082');
      let l = n.get(o);
      if (l === void 0) {
        if (r !== Fu) return r;
        n.set(o, (l = t.push(o) - 1));
      }
      return e[l % e.length];
    }
    return (
      (i.domain = function (o) {
        if ((Symbol('JSCA_11083_11091'), !arguments.length)) return t.slice();
        (t = []), (n = new ur());
        for (const l of o) n.has(l) || n.set(l, t.push(l) - 1);
        return i;
      }),
      (i.range = function (o) {
        return (
          Symbol('JSCA_11092_11094'),
          arguments.length ? ((e = Array.from(o)), i) : e.slice()
        );
      }),
      (i.unknown = function (o) {
        return Symbol('JSCA_11095_11097'), arguments.length ? ((r = o), i) : r;
      }),
      (i.copy = function () {
        return Symbol('JSCA_11098_11100'), Ou(t, e).unknown(r);
      }),
      jn.apply(i, arguments),
      i
    );
  }
  function Lu() {
    Symbol('JSCA_11104_11153');
    var n = Ou().unknown(void 0),
      t = n.domain,
      e = n.range,
      r = 0,
      i = 1,
      o,
      l,
      a = !1,
      f = 0,
      u = 0,
      c = 0.5;
    delete n.unknown;
    function s() {
      Symbol('JSCA_11107_11118');
      var _ = t().length,
        S = i < r,
        y = S ? i : r,
        b = S ? r : i;
      (o = (b - y) / Math.max(1, _ - f + u * 2)),
        a && (o = Math.floor(o)),
        (y += (b - y - o * (_ - f)) * c),
        (l = o * (1 - f)),
        a && ((y = Math.round(y)), (l = Math.round(l)));
      var m = Rt(_).map(function (d) {
        return Symbol('JSCA_11114_11116'), y + o * d;
      });
      return e(S ? m.reverse() : m);
    }
    return (
      (n.domain = function (_) {
        return Symbol('JSCA_11119_11121'), arguments.length ? (t(_), s()) : t();
      }),
      (n.range = function (_) {
        return (
          Symbol('JSCA_11122_11124'),
          arguments.length ? (([r, i] = _), (r = +r), (i = +i), s()) : [r, i]
        );
      }),
      (n.rangeRound = function (_) {
        return (
          Symbol('JSCA_11125_11127'),
          ([r, i] = _),
          (r = +r),
          (i = +i),
          (a = !0),
          s()
        );
      }),
      (n.bandwidth = function () {
        return Symbol('JSCA_11128_11130'), l;
      }),
      (n.step = function () {
        return Symbol('JSCA_11131_11133'), o;
      }),
      (n.round = function (_) {
        return (
          Symbol('JSCA_11134_11136'), arguments.length ? ((a = !!_), s()) : a
        );
      }),
      (n.padding = function (_) {
        return (
          Symbol('JSCA_11137_11139'),
          arguments.length ? ((f = Math.min(1, (u = +_))), s()) : f
        );
      }),
      (n.paddingInner = function (_) {
        return (
          Symbol('JSCA_11140_11142'),
          arguments.length ? ((f = Math.min(1, _)), s()) : f
        );
      }),
      (n.paddingOuter = function (_) {
        return (
          Symbol('JSCA_11143_11145'), arguments.length ? ((u = +_), s()) : u
        );
      }),
      (n.align = function (_) {
        return (
          Symbol('JSCA_11146_11148'),
          arguments.length ? ((c = Math.max(0, Math.min(1, _))), s()) : c
        );
      }),
      (n.copy = function () {
        return (
          Symbol('JSCA_11149_11151'),
          Lu(t(), [r, i]).round(a).paddingInner(f).paddingOuter(u).align(c)
        );
      }),
      jn.apply(s(), arguments)
    );
  }
  function O0(n) {
    Symbol('JSCA_11154_11163');
    var t = n.copy;
    return (
      (n.padding = n.paddingOuter),
      delete n.paddingInner,
      delete n.paddingOuter,
      (n.copy = function () {
        return Symbol('JSCA_11159_11161'), O0(t());
      }),
      n
    );
  }
  function I7() {
    return (
      Symbol('JSCA_11164_11166'), O0(Lu.apply(null, arguments).paddingInner(1))
    );
  }
  function z7(n) {
    return (
      Symbol('JSCA_11167_11171'),
      function () {
        return Symbol('JSCA_11168_11170'), n;
      }
    );
  }
  function Vo(n) {
    return Symbol('JSCA_11172_11174'), +n;
  }
  var L0 = [0, 1];
  function Yn(n) {
    return Symbol('JSCA_11176_11178'), n;
  }
  function qu(n, t) {
    return (
      Symbol('JSCA_11179_11183'),
      (t -= n = +n)
        ? function (e) {
            return Symbol('JSCA_11180_11182'), (e - n) / t;
          }
        : z7(isNaN(t) ? NaN : 0.5)
    );
  }
  function D7(n, t) {
    Symbol('JSCA_11184_11190');
    var e;
    return (
      n > t && ((e = n), (n = t), (t = e)),
      function (r) {
        return Symbol('JSCA_11187_11189'), Math.max(n, Math.min(t, r));
      }
    );
  }
  function F7(n, t, e) {
    Symbol('JSCA_11191_11197');
    var r = n[0],
      i = n[1],
      o = t[0],
      l = t[1];
    return (
      i < r ? ((r = qu(i, r)), (o = e(l, o))) : ((r = qu(r, i)), (o = e(o, l))),
      function (a) {
        return Symbol('JSCA_11194_11196'), o(r(a));
      }
    );
  }
  function O7(n, t, e) {
    Symbol('JSCA_11198_11212');
    var r = Math.min(n.length, t.length) - 1,
      i = new Array(r),
      o = new Array(r),
      l = -1;
    for (
      n[r] < n[0] && ((n = n.slice().reverse()), (t = t.slice().reverse()));
      ++l < r;

    )
      (i[l] = qu(n[l], n[l + 1])), (o[l] = e(t[l], t[l + 1]));
    return function (a) {
      Symbol('JSCA_11208_11211');
      var f = Vt(n, a, 1, r) - 1;
      return o[f](i[f](a));
    };
  }
  function Kr(n, t) {
    return (
      Symbol('JSCA_11213_11215'),
      t
        .domain(n.domain())
        .range(n.range())
        .interpolate(n.interpolate())
        .clamp(n.clamp())
        .unknown(n.unknown())
    );
  }
  function Wo() {
    Symbol('JSCA_11216_11253');
    var n = L0,
      t = L0,
      e = zt,
      r,
      i,
      o,
      l = Yn,
      a,
      f,
      u;
    function c() {
      Symbol('JSCA_11218_11224');
      var _ = Math.min(n.length, t.length);
      return (
        l !== Yn && (l = D7(n[0], n[_ - 1])),
        (a = _ > 2 ? O7 : F7),
        (f = u = null),
        s
      );
    }
    function s(_) {
      return (
        Symbol('JSCA_11225_11227'),
        _ == null || isNaN((_ = +_))
          ? o
          : (f || (f = a(n.map(r), t, e)))(r(l(_)))
      );
    }
    return (
      (s.invert = function (_) {
        return (
          Symbol('JSCA_11228_11230'), l(i((u || (u = a(t, n.map(r), Qn)))(_)))
        );
      }),
      (s.domain = function (_) {
        return (
          Symbol('JSCA_11231_11233'),
          arguments.length ? ((n = Array.from(_, Vo)), c()) : n.slice()
        );
      }),
      (s.range = function (_) {
        return (
          Symbol('JSCA_11234_11236'),
          arguments.length ? ((t = Array.from(_)), c()) : t.slice()
        );
      }),
      (s.rangeRound = function (_) {
        return Symbol('JSCA_11237_11239'), (t = Array.from(_)), (e = Di), c();
      }),
      (s.clamp = function (_) {
        return (
          Symbol('JSCA_11240_11242'),
          arguments.length ? ((l = _ ? !0 : Yn), c()) : l !== Yn
        );
      }),
      (s.interpolate = function (_) {
        return (
          Symbol('JSCA_11243_11245'), arguments.length ? ((e = _), c()) : e
        );
      }),
      (s.unknown = function (_) {
        return Symbol('JSCA_11246_11248'), arguments.length ? ((o = _), s) : o;
      }),
      function (_, S) {
        return Symbol('JSCA_11249_11252'), (r = _), (i = S), c();
      }
    );
  }
  function Yu() {
    return Symbol('JSCA_11254_11256'), Wo()(Yn, Yn);
  }
  function q0(n, t, e, r) {
    Symbol('JSCA_11257_11284');
    var i = hi(n, t, e),
      o;
    switch (((r = Ue(r ?? ',f')), r.type)) {
      case 's': {
        var l = Math.max(Math.abs(n), Math.abs(t));
        return (
          r.precision == null && !isNaN((o = Wc(i, l))) && (r.precision = o),
          h.formatPrefix(r, l)
        );
      }
      case '':
      case 'e':
      case 'g':
      case 'p':
      case 'r': {
        r.precision == null &&
          !isNaN((o = Zc(i, Math.max(Math.abs(n), Math.abs(t))))) &&
          (r.precision = o - (r.type === 'e'));
        break;
      }
      case 'f':
      case '%': {
        r.precision == null &&
          !isNaN((o = Vc(i))) &&
          (r.precision = o - (r.type === '%') * 2);
        break;
      }
    }
    return h.format(r);
  }
  function Yt(n) {
    Symbol('JSCA_11285_11329');
    var t = n.domain;
    return (
      (n.ticks = function (e) {
        Symbol('JSCA_11287_11290');
        var r = t();
        return Zt(r[0], r[r.length - 1], e ?? 10);
      }),
      (n.tickFormat = function (e, r) {
        Symbol('JSCA_11291_11294');
        var i = t();
        return q0(i[0], i[i.length - 1], e ?? 10, r);
      }),
      (n.nice = function (e) {
        Symbol('JSCA_11295_11327'), e == null && (e = 10);
        var r = t(),
          i = 0,
          o = r.length - 1,
          l = r[i],
          a = r[o],
          f,
          u,
          c = 10;
        for (
          a < l && ((u = l), (l = a), (a = u), (u = i), (i = o), (o = u));
          c-- > 0;

        ) {
          if (((u = Qt(l, a, e)), u === f)) return (r[i] = l), (r[o] = a), t(r);
          if (u > 0) (l = Math.floor(l / u) * u), (a = Math.ceil(a / u) * u);
          else if (u < 0)
            (l = Math.ceil(l * u) / u), (a = Math.floor(a * u) / u);
          else break;
          f = u;
        }
        return n;
      }),
      n
    );
  }
  function Y0() {
    Symbol('JSCA_11330_11337');
    var n = Yu();
    return (
      (n.copy = function () {
        return Symbol('JSCA_11332_11334'), Kr(n, Y0());
      }),
      jn.apply(n, arguments),
      Yt(n)
    );
  }
  function U0(n) {
    Symbol('JSCA_11338_11355');
    var t;
    function e(r) {
      return Symbol('JSCA_11340_11342'), r == null || isNaN((r = +r)) ? t : r;
    }
    return (
      (e.invert = e),
      (e.domain = e.range =
        function (r) {
          return (
            Symbol('JSCA_11344_11346'),
            arguments.length ? ((n = Array.from(r, Vo)), e) : n.slice()
          );
        }),
      (e.unknown = function (r) {
        return Symbol('JSCA_11347_11349'), arguments.length ? ((t = r), e) : t;
      }),
      (e.copy = function () {
        return Symbol('JSCA_11350_11352'), U0(n).unknown(t);
      }),
      (n = arguments.length ? Array.from(n, Vo) : [0, 1]),
      Yt(e)
    );
  }
  function B0(n, t) {
    Symbol('JSCA_11356_11366'), (n = n.slice());
    var e = 0,
      r = n.length - 1,
      i = n[e],
      o = n[r],
      l;
    return (
      o < i && ((l = e), (e = r), (r = l), (l = i), (i = o), (o = l)),
      (n[e] = t.floor(i)),
      (n[r] = t.ceil(o)),
      n
    );
  }
  function H0(n) {
    return Symbol('JSCA_11367_11369'), Math.log(n);
  }
  function X0(n) {
    return Symbol('JSCA_11370_11372'), Math.exp(n);
  }
  function L7(n) {
    return Symbol('JSCA_11373_11375'), -Math.log(-n);
  }
  function q7(n) {
    return Symbol('JSCA_11376_11378'), -Math.exp(-n);
  }
  function Y7(n) {
    return (
      Symbol('JSCA_11379_11381'), isFinite(n) ? +('1e' + n) : n < 0 ? 0 : n
    );
  }
  function U7(n) {
    return (
      Symbol('JSCA_11382_11384'),
      n === 10 ? Y7 : n === Math.E ? Math.exp : (t) => Math.pow(n, t)
    );
  }
  function B7(n) {
    return (
      Symbol('JSCA_11385_11387'),
      n === Math.E
        ? Math.log
        : (n === 10 && Math.log10) ||
          (n === 2 && Math.log2) ||
          ((n = Math.log(n)), (t) => Math.log(t) / n)
    );
  }
  function G0(n) {
    return Symbol('JSCA_11388_11390'), (t, e) => -n(-t, e);
  }
  function Uu(n) {
    Symbol('JSCA_11391_11470');
    const t = n(H0, X0),
      e = t.domain;
    let r = 10,
      i,
      o;
    function l() {
      return (
        Symbol('JSCA_11397_11406'),
        (i = B7(r)),
        (o = U7(r)),
        e()[0] < 0 ? ((i = G0(i)), (o = G0(o)), n(L7, q7)) : n(H0, X0),
        t
      );
    }
    return (
      (t.base = function (a) {
        return (
          Symbol('JSCA_11407_11409'), arguments.length ? ((r = +a), l()) : r
        );
      }),
      (t.domain = function (a) {
        return Symbol('JSCA_11410_11412'), arguments.length ? (e(a), l()) : e();
      }),
      (t.ticks = (a) => {
        const f = e();
        let u = f[0],
          c = f[f.length - 1];
        const s = c < u;
        s && ([u, c] = [c, u]);
        let _ = i(u),
          S = i(c),
          y,
          b;
        const m = a == null ? 10 : +a;
        let d = [];
        if (!(r % 1) && S - _ < m) {
          if (((_ = Math.floor(_)), (S = Math.ceil(S)), u > 0)) {
            for (; _ <= S; ++_)
              for (y = 1; y < r; ++y)
                if (((b = _ < 0 ? y / o(-_) : y * o(_)), !(b < u))) {
                  if (b > c) break;
                  d.push(b);
                }
          } else
            for (; _ <= S; ++_)
              for (y = r - 1; y >= 1; --y)
                if (((b = _ > 0 ? y / o(-_) : y * o(_)), !(b < u))) {
                  if (b > c) break;
                  d.push(b);
                }
          d.length * 2 < m && (d = Zt(u, c, m));
        } else d = Zt(_, S, Math.min(S - _, m)).map(o);
        return s ? d.reverse() : d;
      }),
      (t.tickFormat = (a, f) => {
        if (
          (a == null && (a = 10),
          f == null && (f = r === 10 ? 's' : ','),
          typeof f != 'function' &&
            (!(r % 1) && (f = Ue(f)).precision == null && (f.trim = !0),
            (f = h.format(f))),
          a === 1 / 0)
        )
          return f;
        const u = Math.max(1, (r * a) / t.ticks().length);
        return (c) => {
          let s = c / o(Math.round(i(c)));
          return s * r < r - 0.5 && (s *= r), s <= u ? f(c) : '';
        };
      }),
      (t.nice = () =>
        e(
          B0(e(), {
            floor: (a) => o(Math.floor(i(a))),
            ceil: (a) => o(Math.ceil(i(a))),
          })
        )),
      t
    );
  }
  function V0() {
    Symbol('JSCA_11471_11476');
    const n = Uu(Wo()).domain([1, 10]);
    return (
      (n.copy = () => Kr(n, V0()).base(n.base())), jn.apply(n, arguments), n
    );
  }
  function W0(n) {
    return (
      Symbol('JSCA_11477_11481'),
      function (t) {
        return (
          Symbol('JSCA_11478_11480'), Math.sign(t) * Math.log1p(Math.abs(t / n))
        );
      }
    );
  }
  function Z0(n) {
    return (
      Symbol('JSCA_11482_11486'),
      function (t) {
        return (
          Symbol('JSCA_11483_11485'), Math.sign(t) * Math.expm1(Math.abs(t)) * n
        );
      }
    );
  }
  function Bu(n) {
    Symbol('JSCA_11487_11493');
    var t = 1,
      e = n(W0(t), Z0(t));
    return (
      (e.constant = function (r) {
        return (
          Symbol('JSCA_11489_11491'),
          arguments.length ? n(W0((t = +r)), Z0(t)) : t
        );
      }),
      Yt(e)
    );
  }
  function Q0() {
    Symbol('JSCA_11494_11500');
    var n = Bu(Wo());
    return (
      (n.copy = function () {
        return Symbol('JSCA_11496_11498'), Kr(n, Q0()).constant(n.constant());
      }),
      jn.apply(n, arguments)
    );
  }
  function K0(n) {
    return (
      Symbol('JSCA_11501_11505'),
      function (t) {
        return (
          Symbol('JSCA_11502_11504'), t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
        );
      }
    );
  }
  function H7(n) {
    return Symbol('JSCA_11506_11508'), n < 0 ? -Math.sqrt(-n) : Math.sqrt(n);
  }
  function X7(n) {
    return Symbol('JSCA_11509_11511'), n < 0 ? -n * n : n * n;
  }
  function Hu(n) {
    Symbol('JSCA_11512_11521');
    var t = n(Yn, Yn),
      e = 1;
    function r() {
      return (
        Symbol('JSCA_11514_11516'),
        e === 1 ? n(Yn, Yn) : e === 0.5 ? n(H7, X7) : n(K0(e), K0(1 / e))
      );
    }
    return (
      (t.exponent = function (i) {
        return (
          Symbol('JSCA_11517_11519'), arguments.length ? ((e = +i), r()) : e
        );
      }),
      Yt(t)
    );
  }
  function Xu() {
    Symbol('JSCA_11522_11529');
    var n = Hu(Wo());
    return (
      (n.copy = function () {
        return Symbol('JSCA_11524_11526'), Kr(n, Xu()).exponent(n.exponent());
      }),
      jn.apply(n, arguments),
      n
    );
  }
  function G7() {
    return Symbol('JSCA_11530_11532'), Xu.apply(null, arguments).exponent(0.5);
  }
  function j0(n) {
    return Symbol('JSCA_11533_11535'), Math.sign(n) * n * n;
  }
  function V7(n) {
    return Symbol('JSCA_11536_11538'), Math.sign(n) * Math.sqrt(Math.abs(n));
  }
  function ns() {
    Symbol('JSCA_11539_11571');
    var n = Yu(),
      t = [0, 1],
      e = !1,
      r;
    function i(o) {
      Symbol('JSCA_11541_11544');
      var l = V7(n(o));
      return isNaN(l) ? r : e ? Math.round(l) : l;
    }
    return (
      (i.invert = function (o) {
        return Symbol('JSCA_11545_11547'), n.invert(j0(o));
      }),
      (i.domain = function (o) {
        return (
          Symbol('JSCA_11548_11550'),
          arguments.length ? (n.domain(o), i) : n.domain()
        );
      }),
      (i.range = function (o) {
        return (
          Symbol('JSCA_11551_11553'),
          arguments.length
            ? (n.range((t = Array.from(o, Vo)).map(j0)), i)
            : t.slice()
        );
      }),
      (i.rangeRound = function (o) {
        return Symbol('JSCA_11554_11556'), i.range(o).round(!0);
      }),
      (i.round = function (o) {
        return (
          Symbol('JSCA_11557_11559'), arguments.length ? ((e = !!o), i) : e
        );
      }),
      (i.clamp = function (o) {
        return (
          Symbol('JSCA_11560_11562'),
          arguments.length ? (n.clamp(o), i) : n.clamp()
        );
      }),
      (i.unknown = function (o) {
        return Symbol('JSCA_11563_11565'), arguments.length ? ((r = o), i) : r;
      }),
      (i.copy = function () {
        return (
          Symbol('JSCA_11566_11568'),
          ns(n.domain(), t).round(e).clamp(n.clamp()).unknown(r)
        );
      }),
      jn.apply(i, arguments),
      Yt(i)
    );
  }
  function ts() {
    Symbol('JSCA_11572_11607');
    var n = [],
      t = [],
      e = [],
      r;
    function i() {
      Symbol('JSCA_11574_11579');
      var l = 0,
        a = Math.max(1, t.length);
      for (e = new Array(a - 1); ++l < a; ) e[l - 1] = I1(n, l / a);
      return o;
    }
    function o(l) {
      return (
        Symbol('JSCA_11580_11582'),
        l == null || isNaN((l = +l)) ? r : t[Vt(e, l)]
      );
    }
    return (
      (o.invertExtent = function (l) {
        Symbol('JSCA_11583_11586');
        var a = t.indexOf(l);
        return a < 0
          ? [NaN, NaN]
          : [a > 0 ? e[a - 1] : n[0], a < e.length ? e[a] : n[n.length - 1]];
      }),
      (o.domain = function (l) {
        if ((Symbol('JSCA_11587_11593'), !arguments.length)) return n.slice();
        n = [];
        for (let a of l) a != null && !isNaN((a = +a)) && n.push(a);
        return n.sort(fn), i();
      }),
      (o.range = function (l) {
        return (
          Symbol('JSCA_11594_11596'),
          arguments.length ? ((t = Array.from(l)), i()) : t.slice()
        );
      }),
      (o.unknown = function (l) {
        return Symbol('JSCA_11597_11599'), arguments.length ? ((r = l), o) : r;
      }),
      (o.quantiles = function () {
        return Symbol('JSCA_11600_11602'), e.slice();
      }),
      (o.copy = function () {
        return Symbol('JSCA_11603_11605'), ts().domain(n).range(t).unknown(r);
      }),
      jn.apply(o, arguments)
    );
  }
  function es() {
    Symbol('JSCA_11608_11639');
    var n = 0,
      t = 1,
      e = 1,
      r = [0.5],
      i = [0, 1],
      o;
    function l(f) {
      return (
        Symbol('JSCA_11610_11612'), f != null && f <= f ? i[Vt(r, f, 0, e)] : o
      );
    }
    function a() {
      Symbol('JSCA_11613_11618');
      var f = -1;
      for (r = new Array(e); ++f < e; )
        r[f] = ((f + 1) * t - (f - e) * n) / (e + 1);
      return l;
    }
    return (
      (l.domain = function (f) {
        return (
          Symbol('JSCA_11619_11621'),
          arguments.length ? (([n, t] = f), (n = +n), (t = +t), a()) : [n, t]
        );
      }),
      (l.range = function (f) {
        return (
          Symbol('JSCA_11622_11624'),
          arguments.length
            ? ((e = (i = Array.from(f)).length - 1), a())
            : i.slice()
        );
      }),
      (l.invertExtent = function (f) {
        Symbol('JSCA_11625_11628');
        var u = i.indexOf(f);
        return u < 0
          ? [NaN, NaN]
          : u < 1
          ? [n, r[0]]
          : u >= e
          ? [r[e - 1], t]
          : [r[u - 1], r[u]];
      }),
      (l.unknown = function (f) {
        return Symbol('JSCA_11629_11631'), arguments.length && (o = f), l;
      }),
      (l.thresholds = function () {
        return Symbol('JSCA_11632_11634'), r.slice();
      }),
      (l.copy = function () {
        return (
          Symbol('JSCA_11635_11637'), es().domain([n, t]).range(i).unknown(o)
        );
      }),
      jn.apply(Yt(l), arguments)
    );
  }
  function rs() {
    Symbol('JSCA_11640_11662');
    var n = [0.5],
      t = [0, 1],
      e,
      r = 1;
    function i(o) {
      return (
        Symbol('JSCA_11642_11644'), o != null && o <= o ? t[Vt(n, o, 0, r)] : e
      );
    }
    return (
      (i.domain = function (o) {
        return (
          Symbol('JSCA_11645_11647'),
          arguments.length
            ? ((n = Array.from(o)), (r = Math.min(n.length, t.length - 1)), i)
            : n.slice()
        );
      }),
      (i.range = function (o) {
        return (
          Symbol('JSCA_11648_11650'),
          arguments.length
            ? ((t = Array.from(o)), (r = Math.min(n.length, t.length - 1)), i)
            : t.slice()
        );
      }),
      (i.invertExtent = function (o) {
        Symbol('JSCA_11651_11654');
        var l = t.indexOf(o);
        return [n[l - 1], n[l]];
      }),
      (i.unknown = function (o) {
        return Symbol('JSCA_11655_11657'), arguments.length ? ((e = o), i) : e;
      }),
      (i.copy = function () {
        return Symbol('JSCA_11658_11660'), rs().domain(n).range(t).unknown(e);
      }),
      jn.apply(i, arguments)
    );
  }
  const Gu = new Date(),
    Vu = new Date();
  function bn(n, t, e, r) {
    Symbol('JSCA_11664_11715');
    function i(o) {
      return (
        Symbol('JSCA_11665_11667'),
        n((o = arguments.length === 0 ? new Date() : new Date(+o))),
        o
      );
    }
    return (
      (i.floor = (o) => (n((o = new Date(+o))), o)),
      (i.ceil = (o) => (n((o = new Date(o - 1))), t(o, 1), n(o), o)),
      (i.round = (o) => {
        const l = i(o),
          a = i.ceil(o);
        return o - l < a - o ? l : a;
      }),
      (i.offset = (o, l) => (
        t((o = new Date(+o)), l == null ? 1 : Math.floor(l)), o
      )),
      (i.range = (o, l, a) => {
        const f = [];
        if (
          ((o = i.ceil(o)),
          (a = a == null ? 1 : Math.floor(a)),
          !(o < l) || !(a > 0))
        )
          return f;
        let u;
        do f.push((u = new Date(+o))), t(o, a), n(o);
        while (u < o && o < l);
        return f;
      }),
      (i.filter = (o) =>
        bn(
          (l) => {
            if (l >= l) for (; n(l), !o(l); ) l.setTime(l - 1);
          },
          (l, a) => {
            if (l >= l)
              if (a < 0) for (; ++a <= 0; ) for (; t(l, -1), !o(l); );
              else for (; --a >= 0; ) for (; t(l, 1), !o(l); );
          }
        )),
      e &&
        ((i.count = (o, l) => (
          Gu.setTime(+o), Vu.setTime(+l), n(Gu), n(Vu), Math.floor(e(Gu, Vu))
        )),
        (i.every = (o) => (
          (o = Math.floor(o)),
          !isFinite(o) || !(o > 0)
            ? null
            : o > 1
            ? i.filter(
                r ? (l) => r(l) % o === 0 : (l) => i.count(0, l) % o === 0
              )
            : i
        ))),
      i
    );
  }
  const Ke = bn(
    () => {},
    (n, t) => {
      n.setTime(+n + t);
    },
    (n, t) => t - n
  );
  Ke.every = (n) => (
    (n = Math.floor(n)),
    !isFinite(n) || !(n > 0)
      ? null
      : n > 1
      ? bn(
          (t) => {
            t.setTime(Math.floor(t / n) * n);
          },
          (t, e) => {
            t.setTime(+t + e * n);
          },
          (t, e) => (e - t) / n
        )
      : Ke
  );
  const is = Ke.range,
    $t = 1e3,
    nt = $t * 60,
    Et = nt * 60,
    kt = Et * 24,
    Wu = kt * 7,
    os = kt * 30,
    Zu = kt * 365,
    Nt = bn(
      (n) => {
        n.setTime(n - n.getMilliseconds());
      },
      (n, t) => {
        n.setTime(+n + t * $t);
      },
      (n, t) => (t - n) / $t,
      (n) => n.getUTCSeconds()
    ),
    ls = Nt.range,
    Zo = bn(
      (n) => {
        n.setTime(n - n.getMilliseconds() - n.getSeconds() * $t);
      },
      (n, t) => {
        n.setTime(+n + t * nt);
      },
      (n, t) => (t - n) / nt,
      (n) => n.getMinutes()
    ),
    W7 = Zo.range,
    Qo = bn(
      (n) => {
        n.setUTCSeconds(0, 0);
      },
      (n, t) => {
        n.setTime(+n + t * nt);
      },
      (n, t) => (t - n) / nt,
      (n) => n.getUTCMinutes()
    ),
    Z7 = Qo.range,
    Ko = bn(
      (n) => {
        n.setTime(
          n - n.getMilliseconds() - n.getSeconds() * $t - n.getMinutes() * nt
        );
      },
      (n, t) => {
        n.setTime(+n + t * Et);
      },
      (n, t) => (t - n) / Et,
      (n) => n.getHours()
    ),
    Q7 = Ko.range,
    jo = bn(
      (n) => {
        n.setUTCMinutes(0, 0, 0);
      },
      (n, t) => {
        n.setTime(+n + t * Et);
      },
      (n, t) => (t - n) / Et,
      (n) => n.getUTCHours()
    ),
    K7 = jo.range,
    je = bn(
      (n) => n.setHours(0, 0, 0, 0),
      (n, t) => n.setDate(n.getDate() + t),
      (n, t) =>
        (t - n - (t.getTimezoneOffset() - n.getTimezoneOffset()) * nt) / kt,
      (n) => n.getDate() - 1
    ),
    j7 = je.range,
    jr = bn(
      (n) => {
        n.setUTCHours(0, 0, 0, 0);
      },
      (n, t) => {
        n.setUTCDate(n.getUTCDate() + t);
      },
      (n, t) => (t - n) / kt,
      (n) => n.getUTCDate() - 1
    ),
    nA = jr.range,
    Qu = bn(
      (n) => {
        n.setUTCHours(0, 0, 0, 0);
      },
      (n, t) => {
        n.setUTCDate(n.getUTCDate() + t);
      },
      (n, t) => (t - n) / kt,
      (n) => Math.floor(n / kt)
    ),
    tA = Qu.range;
  function de(n) {
    return (
      Symbol('JSCA_11813_11822'),
      bn(
        (t) => {
          t.setDate(t.getDate() - ((t.getDay() + 7 - n) % 7)),
            t.setHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setDate(t.getDate() + e * 7);
        },
        (t, e) =>
          (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * nt) / Wu
      )
    );
  }
  const nr = de(0),
    ni = de(1),
    as = de(2),
    us = de(3),
    Ae = de(4),
    fs = de(5),
    cs = de(6),
    _s = nr.range,
    eA = ni.range,
    rA = as.range,
    iA = us.range,
    oA = Ae.range,
    lA = fs.range,
    aA = cs.range;
  function Ce(n) {
    return (
      Symbol('JSCA_11837_11846'),
      bn(
        (t) => {
          t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - n) % 7)),
            t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCDate(t.getUTCDate() + e * 7);
        },
        (t, e) => (e - t) / Wu
      )
    );
  }
  const tr = Ce(0),
    ti = Ce(1),
    ss = Ce(2),
    Ss = Ce(3),
    ge = Ce(4),
    hs = Ce(5),
    ms = Ce(6),
    ys = tr.range,
    uA = ti.range,
    fA = ss.range,
    cA = Ss.range,
    _A = ge.range,
    sA = hs.range,
    SA = ms.range,
    nl = bn(
      (n) => {
        n.setDate(1), n.setHours(0, 0, 0, 0);
      },
      (n, t) => {
        n.setMonth(n.getMonth() + t);
      },
      (n, t) =>
        t.getMonth() - n.getMonth() + (t.getFullYear() - n.getFullYear()) * 12,
      (n) => n.getMonth()
    ),
    hA = nl.range,
    tl = bn(
      (n) => {
        n.setUTCDate(1), n.setUTCHours(0, 0, 0, 0);
      },
      (n, t) => {
        n.setUTCMonth(n.getUTCMonth() + t);
      },
      (n, t) =>
        t.getUTCMonth() -
        n.getUTCMonth() +
        (t.getUTCFullYear() - n.getUTCFullYear()) * 12,
      (n) => n.getUTCMonth()
    ),
    mA = tl.range,
    dt = bn(
      (n) => {
        n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
      },
      (n, t) => {
        n.setFullYear(n.getFullYear() + t);
      },
      (n, t) => t.getFullYear() - n.getFullYear(),
      (n) => n.getFullYear()
    );
  dt.every = (n) =>
    !isFinite((n = Math.floor(n))) || !(n > 0)
      ? null
      : bn(
          (t) => {
            t.setFullYear(Math.floor(t.getFullYear() / n) * n),
              t.setMonth(0, 1),
              t.setHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setFullYear(t.getFullYear() + e * n);
          }
        );
  const yA = dt.range,
    At = bn(
      (n) => {
        n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
      },
      (n, t) => {
        n.setUTCFullYear(n.getUTCFullYear() + t);
      },
      (n, t) => t.getUTCFullYear() - n.getUTCFullYear(),
      (n) => n.getUTCFullYear()
    );
  At.every = (n) =>
    !isFinite((n = Math.floor(n))) || !(n > 0)
      ? null
      : bn(
          (t) => {
            t.setUTCFullYear(Math.floor(t.getUTCFullYear() / n) * n),
              t.setUTCMonth(0, 1),
              t.setUTCHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setUTCFullYear(t.getUTCFullYear() + e * n);
          }
        );
  const bA = At.range;
  function bs(n, t, e, r, i, o) {
    Symbol('JSCA_11923_11941');
    const l = [
      [Nt, 1, $t],
      [Nt, 5, 5 * $t],
      [Nt, 15, 15 * $t],
      [Nt, 30, 30 * $t],
      [o, 1, nt],
      [o, 5, 5 * nt],
      [o, 15, 15 * nt],
      [o, 30, 30 * nt],
      [i, 1, Et],
      [i, 3, 3 * Et],
      [i, 6, 6 * Et],
      [i, 12, 12 * Et],
      [r, 1, kt],
      [r, 2, 2 * kt],
      [e, 1, Wu],
      [t, 1, os],
      [t, 3, 3 * os],
      [n, 1, Zu],
    ];
    function a(u, c, s) {
      Symbol('JSCA_11925_11931');
      const _ = c < u;
      _ && ([u, c] = [c, u]);
      const S = s && typeof s.range == 'function' ? s : f(u, c, s),
        y = S ? S.range(u, +c + 1) : [];
      return _ ? y.reverse() : y;
    }
    function f(u, c, s) {
      Symbol('JSCA_11932_11939');
      const _ = Math.abs(c - u) / s,
        S = ci(([, , m]) => m).right(l, _);
      if (S === l.length) return n.every(hi(u / Zu, c / Zu, s));
      if (S === 0) return Ke.every(Math.max(hi(u, c, s), 1));
      const [y, b] = l[_ / l[S - 1][2] < l[S][2] / _ ? S - 1 : S];
      return y.every(b);
    }
    return [a, f];
  }
  const [ds, As] = bs(At, tl, tr, Qu, jo, Qo),
    [Cs, gs] = bs(dt, nl, nr, je, Ko, Zo);
  function Ku(n) {
    if ((Symbol('JSCA_11944_11951'), 0 <= n.y && n.y < 100)) {
      var t = new Date(-1, n.m, n.d, n.H, n.M, n.S, n.L);
      return t.setFullYear(n.y), t;
    }
    return new Date(n.y, n.m, n.d, n.H, n.M, n.S, n.L);
  }
  function ju(n) {
    if ((Symbol('JSCA_11952_11959'), 0 <= n.y && n.y < 100)) {
      var t = new Date(Date.UTC(-1, n.m, n.d, n.H, n.M, n.S, n.L));
      return t.setUTCFullYear(n.y), t;
    }
    return new Date(Date.UTC(n.y, n.m, n.d, n.H, n.M, n.S, n.L));
  }
  function ei(n, t, e) {
    return (
      Symbol('JSCA_11960_11970'), { y: n, m: t, d: e, H: 0, M: 0, S: 0, L: 0 }
    );
  }
  function Js(n) {
    Symbol('JSCA_11971_12250');
    var t = n.dateTime,
      e = n.date,
      r = n.time,
      i = n.periods,
      o = n.days,
      l = n.shortDays,
      a = n.months,
      f = n.shortMonths,
      u = ri(i),
      c = ii(i),
      s = ri(o),
      _ = ii(o),
      S = ri(l),
      y = ii(l),
      b = ri(a),
      m = ii(a),
      d = ri(f),
      g = ii(f),
      C = {
        a: R,
        A: z,
        b: I,
        B: F,
        c: null,
        d: $s,
        e: $s,
        f: LA,
        g: ZA,
        G: KA,
        H: DA,
        I: FA,
        j: OA,
        L: Es,
        m: qA,
        M: YA,
        p: q,
        q: U,
        Q: Is,
        s: zs,
        S: UA,
        u: BA,
        U: HA,
        V: XA,
        w: GA,
        W: VA,
        x: null,
        X: null,
        y: WA,
        Y: QA,
        Z: jA,
        '%': Ps,
      },
      A = {
        a: rn,
        A: nn,
        b: j,
        B: dn,
        c: null,
        d: Ns,
        e: Ns,
        f: r9,
        g: S9,
        G: m9,
        H: n9,
        I: t9,
        j: e9,
        L: xs,
        m: i9,
        M: o9,
        p: en,
        q: yn,
        Q: Is,
        s: zs,
        S: l9,
        u: a9,
        U: u9,
        V: f9,
        w: c9,
        W: _9,
        x: null,
        X: null,
        y: s9,
        Y: h9,
        Z: y9,
        '%': Ps,
      },
      J = {
        a: E,
        A: w,
        b: P,
        B: x,
        c: v,
        d: Ms,
        e: Ms,
        f: RA,
        g: ws,
        G: vs,
        H: Ts,
        I: Ts,
        j: EA,
        L: xA,
        m: $A,
        M: kA,
        p: k,
        q: TA,
        Q: IA,
        s: zA,
        S: NA,
        u: JA,
        U: pA,
        V: vA,
        w: gA,
        W: wA,
        x: T,
        X: M,
        y: ws,
        Y: vs,
        Z: MA,
        '%': PA,
      };
    (C.x = p(e, C)),
      (C.X = p(r, C)),
      (C.c = p(t, C)),
      (A.x = p(e, A)),
      (A.X = p(r, A)),
      (A.c = p(t, A));
    function p(O, G) {
      return (
        Symbol('JSCA_12082_12098'),
        function (Q) {
          Symbol('JSCA_12083_12097');
          var D = [],
            hn = -1,
            on = 0,
            Un = O.length,
            Bn,
            X,
            mn;
          for (Q instanceof Date || (Q = new Date(+Q)); ++hn < Un; )
            O.charCodeAt(hn) === 37 &&
              (D.push(O.slice(on, hn)),
              (X = ps[(Bn = O.charAt(++hn))]) != null
                ? (Bn = O.charAt(++hn))
                : (X = Bn === 'e' ? ' ' : '0'),
              (mn = G[Bn]) && (Bn = mn(Q, X)),
              D.push(Bn),
              (on = hn + 1));
          return D.push(O.slice(on, hn)), D.join('');
        }
      );
    }
    function $(O, G) {
      return (
        Symbol('JSCA_12099_12139'),
        function (Q) {
          Symbol('JSCA_12100_12138');
          var D = ei(1900, void 0, 1),
            hn = N(D, O, (Q += ''), 0),
            on,
            Un;
          if (hn != Q.length) return null;
          if ('Q' in D) return new Date(D.Q);
          if ('s' in D) return new Date(D.s * 1e3 + ('L' in D ? D.L : 0));
          if (
            (G && !('Z' in D) && (D.Z = 0),
            'p' in D && (D.H = (D.H % 12) + D.p * 12),
            D.m === void 0 && (D.m = 'q' in D ? D.q : 0),
            'V' in D)
          ) {
            if (D.V < 1 || D.V > 53) return null;
            'w' in D || (D.w = 1),
              'Z' in D
                ? ((on = ju(ei(D.y, 0, 1))),
                  (Un = on.getUTCDay()),
                  (on = Un > 4 || Un === 0 ? ti.ceil(on) : ti(on)),
                  (on = jr.offset(on, (D.V - 1) * 7)),
                  (D.y = on.getUTCFullYear()),
                  (D.m = on.getUTCMonth()),
                  (D.d = on.getUTCDate() + ((D.w + 6) % 7)))
                : ((on = Ku(ei(D.y, 0, 1))),
                  (Un = on.getDay()),
                  (on = Un > 4 || Un === 0 ? ni.ceil(on) : ni(on)),
                  (on = je.offset(on, (D.V - 1) * 7)),
                  (D.y = on.getFullYear()),
                  (D.m = on.getMonth()),
                  (D.d = on.getDate() + ((D.w + 6) % 7)));
          } else
            ('W' in D || 'U' in D) &&
              ('w' in D || (D.w = 'u' in D ? D.u % 7 : 'W' in D ? 1 : 0),
              (Un =
                'Z' in D
                  ? ju(ei(D.y, 0, 1)).getUTCDay()
                  : Ku(ei(D.y, 0, 1)).getDay()),
              (D.m = 0),
              (D.d =
                'W' in D
                  ? ((D.w + 6) % 7) + D.W * 7 - ((Un + 5) % 7)
                  : D.w + D.U * 7 - ((Un + 6) % 7)));
          return 'Z' in D
            ? ((D.H += (D.Z / 100) | 0), (D.M += D.Z % 100), ju(D))
            : Ku(D);
        }
      );
    }
    function N(O, G, Q, D) {
      Symbol('JSCA_12140_12154');
      for (var hn = 0, on = G.length, Un = Q.length, Bn, X; hn < on; ) {
        if (D >= Un) return -1;
        if (((Bn = G.charCodeAt(hn++)), Bn === 37)) {
          if (
            ((Bn = G.charAt(hn++)),
            (X = J[Bn in ps ? G.charAt(hn++) : Bn]),
            !X || (D = X(O, Q, D)) < 0)
          )
            return -1;
        } else if (Bn != Q.charCodeAt(D++)) return -1;
      }
      return D;
    }
    function k(O, G, Q) {
      Symbol('JSCA_12155_12158');
      var D = u.exec(G.slice(Q));
      return D ? ((O.p = c.get(D[0].toLowerCase())), Q + D[0].length) : -1;
    }
    function E(O, G, Q) {
      Symbol('JSCA_12159_12162');
      var D = S.exec(G.slice(Q));
      return D ? ((O.w = y.get(D[0].toLowerCase())), Q + D[0].length) : -1;
    }
    function w(O, G, Q) {
      Symbol('JSCA_12163_12166');
      var D = s.exec(G.slice(Q));
      return D ? ((O.w = _.get(D[0].toLowerCase())), Q + D[0].length) : -1;
    }
    function P(O, G, Q) {
      Symbol('JSCA_12167_12170');
      var D = d.exec(G.slice(Q));
      return D ? ((O.m = g.get(D[0].toLowerCase())), Q + D[0].length) : -1;
    }
    function x(O, G, Q) {
      Symbol('JSCA_12171_12174');
      var D = b.exec(G.slice(Q));
      return D ? ((O.m = m.get(D[0].toLowerCase())), Q + D[0].length) : -1;
    }
    function v(O, G, Q) {
      return Symbol('JSCA_12175_12177'), N(O, t, G, Q);
    }
    function T(O, G, Q) {
      return Symbol('JSCA_12178_12180'), N(O, e, G, Q);
    }
    function M(O, G, Q) {
      return Symbol('JSCA_12181_12183'), N(O, r, G, Q);
    }
    function R(O) {
      return Symbol('JSCA_12184_12186'), l[O.getDay()];
    }
    function z(O) {
      return Symbol('JSCA_12187_12189'), o[O.getDay()];
    }
    function I(O) {
      return Symbol('JSCA_12190_12192'), f[O.getMonth()];
    }
    function F(O) {
      return Symbol('JSCA_12193_12195'), a[O.getMonth()];
    }
    function q(O) {
      return Symbol('JSCA_12196_12198'), i[+(O.getHours() >= 12)];
    }
    function U(O) {
      return Symbol('JSCA_12199_12201'), 1 + ~~(O.getMonth() / 3);
    }
    function rn(O) {
      return Symbol('JSCA_12202_12204'), l[O.getUTCDay()];
    }
    function nn(O) {
      return Symbol('JSCA_12205_12207'), o[O.getUTCDay()];
    }
    function j(O) {
      return Symbol('JSCA_12208_12210'), f[O.getUTCMonth()];
    }
    function dn(O) {
      return Symbol('JSCA_12211_12213'), a[O.getUTCMonth()];
    }
    function en(O) {
      return Symbol('JSCA_12214_12216'), i[+(O.getUTCHours() >= 12)];
    }
    function yn(O) {
      return Symbol('JSCA_12217_12219'), 1 + ~~(O.getUTCMonth() / 3);
    }
    return {
      format: function (O) {
        Symbol('JSCA_12221_12227');
        var G = p((O += ''), C);
        return (
          (G.toString = function () {
            return Symbol('JSCA_12223_12225'), O;
          }),
          G
        );
      },
      parse: function (O) {
        Symbol('JSCA_12228_12234');
        var G = $((O += ''), !1);
        return (
          (G.toString = function () {
            return Symbol('JSCA_12230_12232'), O;
          }),
          G
        );
      },
      utcFormat: function (O) {
        Symbol('JSCA_12235_12241');
        var G = p((O += ''), A);
        return (
          (G.toString = function () {
            return Symbol('JSCA_12237_12239'), O;
          }),
          G
        );
      },
      utcParse: function (O) {
        Symbol('JSCA_12242_12248');
        var G = $((O += ''), !0);
        return (
          (G.toString = function () {
            return Symbol('JSCA_12244_12246'), O;
          }),
          G
        );
      },
    };
  }
  var ps = { '-': '', _: ' ', 0: '0' },
    vn = /^\s*\d+/,
    dA = /^%/,
    AA = /[\\^$*+?|[\]().{}]/g;
  function tn(n, t, e) {
    Symbol('JSCA_12256_12259');
    var r = n < 0 ? '-' : '',
      i = (r ? -n : n) + '',
      o = i.length;
    return r + (o < e ? new Array(e - o + 1).join(t) + i : i);
  }
  function CA(n) {
    return Symbol('JSCA_12260_12262'), n.replace(AA, '\\$&');
  }
  function ri(n) {
    return (
      Symbol('JSCA_12263_12265'),
      new RegExp('^(?:' + n.map(CA).join('|') + ')', 'i')
    );
  }
  function ii(n) {
    return (
      Symbol('JSCA_12266_12268'), new Map(n.map((t, e) => [t.toLowerCase(), e]))
    );
  }
  function gA(n, t, e) {
    Symbol('JSCA_12269_12272');
    var r = vn.exec(t.slice(e, e + 1));
    return r ? ((n.w = +r[0]), e + r[0].length) : -1;
  }
  function JA(n, t, e) {
    Symbol('JSCA_12273_12276');
    var r = vn.exec(t.slice(e, e + 1));
    return r ? ((n.u = +r[0]), e + r[0].length) : -1;
  }
  function pA(n, t, e) {
    Symbol('JSCA_12277_12280');
    var r = vn.exec(t.slice(e, e + 2));
    return r ? ((n.U = +r[0]), e + r[0].length) : -1;
  }
  function vA(n, t, e) {
    Symbol('JSCA_12281_12284');
    var r = vn.exec(t.slice(e, e + 2));
    return r ? ((n.V = +r[0]), e + r[0].length) : -1;
  }
  function wA(n, t, e) {
    Symbol('JSCA_12285_12288');
    var r = vn.exec(t.slice(e, e + 2));
    return r ? ((n.W = +r[0]), e + r[0].length) : -1;
  }
  function vs(n, t, e) {
    Symbol('JSCA_12289_12292');
    var r = vn.exec(t.slice(e, e + 4));
    return r ? ((n.y = +r[0]), e + r[0].length) : -1;
  }
  function ws(n, t, e) {
    Symbol('JSCA_12293_12296');
    var r = vn.exec(t.slice(e, e + 2));
    return r
      ? ((n.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
      : -1;
  }
  function MA(n, t, e) {
    Symbol('JSCA_12297_12300');
    var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(e, e + 6));
    return r
      ? ((n.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), e + r[0].length)
      : -1;
  }
  function TA(n, t, e) {
    Symbol('JSCA_12301_12304');
    var r = vn.exec(t.slice(e, e + 1));
    return r ? ((n.q = r[0] * 3 - 3), e + r[0].length) : -1;
  }
  function $A(n, t, e) {
    Symbol('JSCA_12305_12308');
    var r = vn.exec(t.slice(e, e + 2));
    return r ? ((n.m = r[0] - 1), e + r[0].length) : -1;
  }
  function Ms(n, t, e) {
    Symbol('JSCA_12309_12312');
    var r = vn.exec(t.slice(e, e + 2));
    return r ? ((n.d = +r[0]), e + r[0].length) : -1;
  }
  function EA(n, t, e) {
    Symbol('JSCA_12313_12316');
    var r = vn.exec(t.slice(e, e + 3));
    return r ? ((n.m = 0), (n.d = +r[0]), e + r[0].length) : -1;
  }
  function Ts(n, t, e) {
    Symbol('JSCA_12317_12320');
    var r = vn.exec(t.slice(e, e + 2));
    return r ? ((n.H = +r[0]), e + r[0].length) : -1;
  }
  function kA(n, t, e) {
    Symbol('JSCA_12321_12324');
    var r = vn.exec(t.slice(e, e + 2));
    return r ? ((n.M = +r[0]), e + r[0].length) : -1;
  }
  function NA(n, t, e) {
    Symbol('JSCA_12325_12328');
    var r = vn.exec(t.slice(e, e + 2));
    return r ? ((n.S = +r[0]), e + r[0].length) : -1;
  }
  function xA(n, t, e) {
    Symbol('JSCA_12329_12332');
    var r = vn.exec(t.slice(e, e + 3));
    return r ? ((n.L = +r[0]), e + r[0].length) : -1;
  }
  function RA(n, t, e) {
    Symbol('JSCA_12333_12336');
    var r = vn.exec(t.slice(e, e + 6));
    return r ? ((n.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
  }
  function PA(n, t, e) {
    Symbol('JSCA_12337_12340');
    var r = dA.exec(t.slice(e, e + 1));
    return r ? e + r[0].length : -1;
  }
  function IA(n, t, e) {
    Symbol('JSCA_12341_12344');
    var r = vn.exec(t.slice(e));
    return r ? ((n.Q = +r[0]), e + r[0].length) : -1;
  }
  function zA(n, t, e) {
    Symbol('JSCA_12345_12348');
    var r = vn.exec(t.slice(e));
    return r ? ((n.s = +r[0]), e + r[0].length) : -1;
  }
  function $s(n, t) {
    return Symbol('JSCA_12349_12351'), tn(n.getDate(), t, 2);
  }
  function DA(n, t) {
    return Symbol('JSCA_12352_12354'), tn(n.getHours(), t, 2);
  }
  function FA(n, t) {
    return Symbol('JSCA_12355_12357'), tn(n.getHours() % 12 || 12, t, 2);
  }
  function OA(n, t) {
    return Symbol('JSCA_12358_12360'), tn(1 + je.count(dt(n), n), t, 3);
  }
  function Es(n, t) {
    return Symbol('JSCA_12361_12363'), tn(n.getMilliseconds(), t, 3);
  }
  function LA(n, t) {
    return Symbol('JSCA_12364_12366'), Es(n, t) + '000';
  }
  function qA(n, t) {
    return Symbol('JSCA_12367_12369'), tn(n.getMonth() + 1, t, 2);
  }
  function YA(n, t) {
    return Symbol('JSCA_12370_12372'), tn(n.getMinutes(), t, 2);
  }
  function UA(n, t) {
    return Symbol('JSCA_12373_12375'), tn(n.getSeconds(), t, 2);
  }
  function BA(n) {
    Symbol('JSCA_12376_12379');
    var t = n.getDay();
    return t === 0 ? 7 : t;
  }
  function HA(n, t) {
    return Symbol('JSCA_12380_12382'), tn(nr.count(dt(n) - 1, n), t, 2);
  }
  function ks(n) {
    Symbol('JSCA_12383_12386');
    var t = n.getDay();
    return t >= 4 || t === 0 ? Ae(n) : Ae.ceil(n);
  }
  function XA(n, t) {
    return (
      Symbol('JSCA_12387_12390'),
      (n = ks(n)),
      tn(Ae.count(dt(n), n) + (dt(n).getDay() === 4), t, 2)
    );
  }
  function GA(n) {
    return Symbol('JSCA_12391_12393'), n.getDay();
  }
  function VA(n, t) {
    return Symbol('JSCA_12394_12396'), tn(ni.count(dt(n) - 1, n), t, 2);
  }
  function WA(n, t) {
    return Symbol('JSCA_12397_12399'), tn(n.getFullYear() % 100, t, 2);
  }
  function ZA(n, t) {
    return (
      Symbol('JSCA_12400_12403'), (n = ks(n)), tn(n.getFullYear() % 100, t, 2)
    );
  }
  function QA(n, t) {
    return Symbol('JSCA_12404_12406'), tn(n.getFullYear() % 1e4, t, 4);
  }
  function KA(n, t) {
    Symbol('JSCA_12407_12411');
    var e = n.getDay();
    return (
      (n = e >= 4 || e === 0 ? Ae(n) : Ae.ceil(n)),
      tn(n.getFullYear() % 1e4, t, 4)
    );
  }
  function jA(n) {
    Symbol('JSCA_12412_12415');
    var t = n.getTimezoneOffset();
    return (
      (t > 0 ? '-' : ((t *= -1), '+')) +
      tn((t / 60) | 0, '0', 2) +
      tn(t % 60, '0', 2)
    );
  }
  function Ns(n, t) {
    return Symbol('JSCA_12416_12418'), tn(n.getUTCDate(), t, 2);
  }
  function n9(n, t) {
    return Symbol('JSCA_12419_12421'), tn(n.getUTCHours(), t, 2);
  }
  function t9(n, t) {
    return Symbol('JSCA_12422_12424'), tn(n.getUTCHours() % 12 || 12, t, 2);
  }
  function e9(n, t) {
    return Symbol('JSCA_12425_12427'), tn(1 + jr.count(At(n), n), t, 3);
  }
  function xs(n, t) {
    return Symbol('JSCA_12428_12430'), tn(n.getUTCMilliseconds(), t, 3);
  }
  function r9(n, t) {
    return Symbol('JSCA_12431_12433'), xs(n, t) + '000';
  }
  function i9(n, t) {
    return Symbol('JSCA_12434_12436'), tn(n.getUTCMonth() + 1, t, 2);
  }
  function o9(n, t) {
    return Symbol('JSCA_12437_12439'), tn(n.getUTCMinutes(), t, 2);
  }
  function l9(n, t) {
    return Symbol('JSCA_12440_12442'), tn(n.getUTCSeconds(), t, 2);
  }
  function a9(n) {
    Symbol('JSCA_12443_12446');
    var t = n.getUTCDay();
    return t === 0 ? 7 : t;
  }
  function u9(n, t) {
    return Symbol('JSCA_12447_12449'), tn(tr.count(At(n) - 1, n), t, 2);
  }
  function Rs(n) {
    Symbol('JSCA_12450_12453');
    var t = n.getUTCDay();
    return t >= 4 || t === 0 ? ge(n) : ge.ceil(n);
  }
  function f9(n, t) {
    return (
      Symbol('JSCA_12454_12457'),
      (n = Rs(n)),
      tn(ge.count(At(n), n) + (At(n).getUTCDay() === 4), t, 2)
    );
  }
  function c9(n) {
    return Symbol('JSCA_12458_12460'), n.getUTCDay();
  }
  function _9(n, t) {
    return Symbol('JSCA_12461_12463'), tn(ti.count(At(n) - 1, n), t, 2);
  }
  function s9(n, t) {
    return Symbol('JSCA_12464_12466'), tn(n.getUTCFullYear() % 100, t, 2);
  }
  function S9(n, t) {
    return (
      Symbol('JSCA_12467_12470'),
      (n = Rs(n)),
      tn(n.getUTCFullYear() % 100, t, 2)
    );
  }
  function h9(n, t) {
    return Symbol('JSCA_12471_12473'), tn(n.getUTCFullYear() % 1e4, t, 4);
  }
  function m9(n, t) {
    Symbol('JSCA_12474_12478');
    var e = n.getUTCDay();
    return (
      (n = e >= 4 || e === 0 ? ge(n) : ge.ceil(n)),
      tn(n.getUTCFullYear() % 1e4, t, 4)
    );
  }
  function y9() {
    return Symbol('JSCA_12479_12481'), '+0000';
  }
  function Ps() {
    return Symbol('JSCA_12482_12484'), '%';
  }
  function Is(n) {
    return Symbol('JSCA_12485_12487'), +n;
  }
  function zs(n) {
    return Symbol('JSCA_12488_12490'), Math.floor(+n / 1e3);
  }
  var er;
  (h.timeFormat = void 0),
    (h.timeParse = void 0),
    (h.utcFormat = void 0),
    (h.utcParse = void 0),
    Ds({
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
  function Ds(n) {
    return (
      Symbol('JSCA_12506_12513'),
      (er = Js(n)),
      (h.timeFormat = er.format),
      (h.timeParse = er.parse),
      (h.utcFormat = er.utcFormat),
      (h.utcParse = er.utcParse),
      er
    );
  }
  var Fs = '%Y-%m-%dT%H:%M:%S.%LZ';
  function b9(n) {
    return Symbol('JSCA_12515_12517'), n.toISOString();
  }
  var d9 = Date.prototype.toISOString ? b9 : h.utcFormat(Fs),
    A9 = d9;
  function C9(n) {
    Symbol('JSCA_12520_12523');
    var t = new Date(n);
    return isNaN(t) ? null : t;
  }
  var g9 = +new Date('2000-01-01T00:00:00.000Z') ? C9 : h.utcParse(Fs),
    J9 = g9;
  function p9(n) {
    return Symbol('JSCA_12526_12528'), new Date(n);
  }
  function v9(n) {
    return Symbol('JSCA_12529_12531'), n instanceof Date ? +n : +new Date(+n);
  }
  function n1(n, t, e, r, i, o, l, a, f, u) {
    Symbol('JSCA_12532_12560');
    var c = Yu(),
      s = c.invert,
      _ = c.domain,
      S = u('.%L'),
      y = u(':%S'),
      b = u('%I:%M'),
      m = u('%I %p'),
      d = u('%a %d'),
      g = u('%b %d'),
      C = u('%B'),
      A = u('%Y');
    function J(p) {
      return (
        Symbol('JSCA_12535_12537'),
        (f(p) < p
          ? S
          : a(p) < p
          ? y
          : l(p) < p
          ? b
          : o(p) < p
          ? m
          : r(p) < p
          ? i(p) < p
            ? d
            : g
          : e(p) < p
          ? C
          : A)(p)
      );
    }
    return (
      (c.invert = function (p) {
        return Symbol('JSCA_12538_12540'), new Date(s(p));
      }),
      (c.domain = function (p) {
        return (
          Symbol('JSCA_12541_12543'),
          arguments.length ? _(Array.from(p, v9)) : _().map(p9)
        );
      }),
      (c.ticks = function (p) {
        Symbol('JSCA_12544_12547');
        var $ = _();
        return n($[0], $[$.length - 1], p ?? 10);
      }),
      (c.tickFormat = function (p, $) {
        return Symbol('JSCA_12548_12550'), $ == null ? J : u($);
      }),
      (c.nice = function (p) {
        Symbol('JSCA_12551_12555');
        var $ = _();
        return (
          (!p || typeof p.range != 'function') &&
            (p = t($[0], $[$.length - 1], p ?? 10)),
          p ? _(B0($, p)) : c
        );
      }),
      (c.copy = function () {
        return (
          Symbol('JSCA_12556_12558'), Kr(c, n1(n, t, e, r, i, o, l, a, f, u))
        );
      }),
      c
    );
  }
  function w9() {
    return (
      Symbol('JSCA_12561_12563'),
      jn.apply(
        n1(Cs, gs, dt, nl, nr, je, Ko, Zo, Nt, h.timeFormat).domain([
          new Date(2e3, 0, 1),
          new Date(2e3, 0, 2),
        ]),
        arguments
      )
    );
  }
  function M9() {
    return (
      Symbol('JSCA_12564_12566'),
      jn.apply(
        n1(ds, As, At, tl, tr, jr, jo, Qo, Nt, h.utcFormat).domain([
          Date.UTC(2e3, 0, 1),
          Date.UTC(2e3, 0, 2),
        ]),
        arguments
      )
    );
  }
  function el() {
    Symbol('JSCA_12567_12596');
    var n = 0,
      t = 1,
      e,
      r,
      i,
      o,
      l = Yn,
      a = !1,
      f;
    function u(s) {
      return (
        Symbol('JSCA_12569_12571'),
        s == null || isNaN((s = +s))
          ? f
          : l(
              i === 0
                ? 0.5
                : ((s = (o(s) - e) * i), a ? Math.max(0, Math.min(1, s)) : s)
            )
      );
    }
    (u.domain = function (s) {
      return (
        Symbol('JSCA_12572_12574'),
        arguments.length
          ? (([n, t] = s),
            (e = o((n = +n))),
            (r = o((t = +t))),
            (i = e === r ? 0 : 1 / (r - e)),
            u)
          : [n, t]
      );
    }),
      (u.clamp = function (s) {
        return (
          Symbol('JSCA_12575_12577'), arguments.length ? ((a = !!s), u) : a
        );
      }),
      (u.interpolator = function (s) {
        return Symbol('JSCA_12578_12580'), arguments.length ? ((l = s), u) : l;
      });
    function c(s) {
      return (
        Symbol('JSCA_12581_12586'),
        function (_) {
          Symbol('JSCA_12582_12585');
          var S, y;
          return arguments.length
            ? (([S, y] = _), (l = s(S, y)), u)
            : [l(0), l(1)];
        }
      );
    }
    return (
      (u.range = c(zt)),
      (u.rangeRound = c(Di)),
      (u.unknown = function (s) {
        return Symbol('JSCA_12589_12591'), arguments.length ? ((f = s), u) : f;
      }),
      function (s) {
        return (
          Symbol('JSCA_12592_12595'),
          (o = s),
          (e = s(n)),
          (r = s(t)),
          (i = e === r ? 0 : 1 / (r - e)),
          u
        );
      }
    );
  }
  function Ut(n, t) {
    return (
      Symbol('JSCA_12597_12599'),
      t
        .domain(n.domain())
        .interpolator(n.interpolator())
        .clamp(n.clamp())
        .unknown(n.unknown())
    );
  }
  function Os() {
    Symbol('JSCA_12600_12606');
    var n = Yt(el()(Yn));
    return (
      (n.copy = function () {
        return Symbol('JSCA_12602_12604'), Ut(n, Os());
      }),
      Tt.apply(n, arguments)
    );
  }
  function Ls() {
    Symbol('JSCA_12607_12613');
    var n = Uu(el()).domain([1, 10]);
    return (
      (n.copy = function () {
        return Symbol('JSCA_12609_12611'), Ut(n, Ls()).base(n.base());
      }),
      Tt.apply(n, arguments)
    );
  }
  function qs() {
    Symbol('JSCA_12614_12620');
    var n = Bu(el());
    return (
      (n.copy = function () {
        return Symbol('JSCA_12616_12618'), Ut(n, qs()).constant(n.constant());
      }),
      Tt.apply(n, arguments)
    );
  }
  function t1() {
    Symbol('JSCA_12621_12627');
    var n = Hu(el());
    return (
      (n.copy = function () {
        return Symbol('JSCA_12623_12625'), Ut(n, t1()).exponent(n.exponent());
      }),
      Tt.apply(n, arguments)
    );
  }
  function T9() {
    return Symbol('JSCA_12628_12630'), t1.apply(null, arguments).exponent(0.5);
  }
  function Ys() {
    Symbol('JSCA_12631_12658');
    var n = [],
      t = Yn;
    function e(r) {
      if ((Symbol('JSCA_12633_12635'), r != null && !isNaN((r = +r))))
        return t((Vt(n, r, 1) - 1) / (n.length - 1));
    }
    return (
      (e.domain = function (r) {
        if ((Symbol('JSCA_12636_12642'), !arguments.length)) return n.slice();
        n = [];
        for (let i of r) i != null && !isNaN((i = +i)) && n.push(i);
        return n.sort(fn), e;
      }),
      (e.interpolator = function (r) {
        return Symbol('JSCA_12643_12645'), arguments.length ? ((t = r), e) : t;
      }),
      (e.range = function () {
        return (
          Symbol('JSCA_12646_12648'), n.map((r, i) => t(i / (n.length - 1)))
        );
      }),
      (e.quantiles = function (r) {
        return (
          Symbol('JSCA_12649_12653'),
          Array.from({ length: r + 1 }, (i, o) => _r(n, o / r))
        );
      }),
      (e.copy = function () {
        return Symbol('JSCA_12654_12656'), Ys(t).domain(n);
      }),
      Tt.apply(e, arguments)
    );
  }
  function rl() {
    Symbol('JSCA_12659_12688');
    var n = 0,
      t = 0.5,
      e = 1,
      r = 1,
      i,
      o,
      l,
      a,
      f,
      u = Yn,
      c,
      s = !1,
      _;
    function S(b) {
      return (
        Symbol('JSCA_12661_12663'),
        isNaN((b = +b))
          ? _
          : ((b = 0.5 + ((b = +c(b)) - o) * (r * b < r * o ? a : f)),
            u(s ? Math.max(0, Math.min(1, b)) : b))
      );
    }
    (S.domain = function (b) {
      return (
        Symbol('JSCA_12664_12666'),
        arguments.length
          ? (([n, t, e] = b),
            (i = c((n = +n))),
            (o = c((t = +t))),
            (l = c((e = +e))),
            (a = i === o ? 0 : 0.5 / (o - i)),
            (f = o === l ? 0 : 0.5 / (l - o)),
            (r = o < i ? -1 : 1),
            S)
          : [n, t, e]
      );
    }),
      (S.clamp = function (b) {
        return (
          Symbol('JSCA_12667_12669'), arguments.length ? ((s = !!b), S) : s
        );
      }),
      (S.interpolator = function (b) {
        return Symbol('JSCA_12670_12672'), arguments.length ? ((u = b), S) : u;
      });
    function y(b) {
      return (
        Symbol('JSCA_12673_12678'),
        function (m) {
          Symbol('JSCA_12674_12677');
          var d, g, C;
          return arguments.length
            ? (([d, g, C] = m), (u = Bf(b, [d, g, C])), S)
            : [u(0), u(0.5), u(1)];
        }
      );
    }
    return (
      (S.range = y(zt)),
      (S.rangeRound = y(Di)),
      (S.unknown = function (b) {
        return Symbol('JSCA_12681_12683'), arguments.length ? ((_ = b), S) : _;
      }),
      function (b) {
        return (
          Symbol('JSCA_12684_12687'),
          (c = b),
          (i = b(n)),
          (o = b(t)),
          (l = b(e)),
          (a = i === o ? 0 : 0.5 / (o - i)),
          (f = o === l ? 0 : 0.5 / (l - o)),
          (r = o < i ? -1 : 1),
          S
        );
      }
    );
  }
  function Us() {
    Symbol('JSCA_12689_12695');
    var n = Yt(rl()(Yn));
    return (
      (n.copy = function () {
        return Symbol('JSCA_12691_12693'), Ut(n, Us());
      }),
      Tt.apply(n, arguments)
    );
  }
  function Bs() {
    Symbol('JSCA_12696_12702');
    var n = Uu(rl()).domain([0.1, 1, 10]);
    return (
      (n.copy = function () {
        return Symbol('JSCA_12698_12700'), Ut(n, Bs()).base(n.base());
      }),
      Tt.apply(n, arguments)
    );
  }
  function Hs() {
    Symbol('JSCA_12703_12709');
    var n = Bu(rl());
    return (
      (n.copy = function () {
        return Symbol('JSCA_12705_12707'), Ut(n, Hs()).constant(n.constant());
      }),
      Tt.apply(n, arguments)
    );
  }
  function e1() {
    Symbol('JSCA_12710_12716');
    var n = Hu(rl());
    return (
      (n.copy = function () {
        return Symbol('JSCA_12712_12714'), Ut(n, e1()).exponent(n.exponent());
      }),
      Tt.apply(n, arguments)
    );
  }
  function $9() {
    return Symbol('JSCA_12717_12719'), e1.apply(null, arguments).exponent(0.5);
  }
  function W(n) {
    Symbol('JSCA_12720_12724');
    for (var t = (n.length / 6) | 0, e = new Array(t), r = 0; r < t; )
      e[r] = '#' + n.slice(r * 6, ++r * 6);
    return e;
  }
  var E9 = W('1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf'),
    k9 = W('7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666'),
    N9 = W('1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666'),
    x9 = W('4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0'),
    R9 = W(
      'a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928'
    ),
    P9 = W('fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2'),
    I9 = W('b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc'),
    z9 = W('e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999'),
    D9 = W('66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3'),
    F9 = W(
      '8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f'
    ),
    O9 = W('4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab'),
    an = (n) => Ef(n[n.length - 1]),
    Xs = new Array(3)
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
      .map(W),
    L9 = an(Xs),
    Gs = new Array(3)
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
      .map(W),
    q9 = an(Gs),
    Vs = new Array(3)
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
      .map(W),
    Y9 = an(Vs),
    Ws = new Array(3)
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
      .map(W),
    U9 = an(Ws),
    Zs = new Array(3)
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
      .map(W),
    B9 = an(Zs),
    Qs = new Array(3)
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
      .map(W),
    H9 = an(Qs),
    Ks = new Array(3)
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
      .map(W),
    X9 = an(Ks),
    js = new Array(3)
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
      .map(W),
    G9 = an(js),
    nS = new Array(3)
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
      .map(W),
    V9 = an(nS),
    tS = new Array(3)
      .concat(
        'e5f5f999d8c92ca25f',
        'edf8fbb2e2e266c2a4238b45',
        'edf8fbb2e2e266c2a42ca25f006d2c',
        'edf8fbccece699d8c966c2a42ca25f006d2c',
        'edf8fbccece699d8c966c2a441ae76238b45005824',
        'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824',
        'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b'
      )
      .map(W),
    W9 = an(tS),
    eS = new Array(3)
      .concat(
        'e0ecf49ebcda8856a7',
        'edf8fbb3cde38c96c688419d',
        'edf8fbb3cde38c96c68856a7810f7c',
        'edf8fbbfd3e69ebcda8c96c68856a7810f7c',
        'edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b',
        'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b',
        'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b'
      )
      .map(W),
    Z9 = an(eS),
    rS = new Array(3)
      .concat(
        'e0f3dba8ddb543a2ca',
        'f0f9e8bae4bc7bccc42b8cbe',
        'f0f9e8bae4bc7bccc443a2ca0868ac',
        'f0f9e8ccebc5a8ddb57bccc443a2ca0868ac',
        'f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e',
        'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e',
        'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081'
      )
      .map(W),
    Q9 = an(rS),
    iS = new Array(3)
      .concat(
        'fee8c8fdbb84e34a33',
        'fef0d9fdcc8afc8d59d7301f',
        'fef0d9fdcc8afc8d59e34a33b30000',
        'fef0d9fdd49efdbb84fc8d59e34a33b30000',
        'fef0d9fdd49efdbb84fc8d59ef6548d7301f990000',
        'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000',
        'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000'
      )
      .map(W),
    K9 = an(iS),
    oS = new Array(3)
      .concat(
        'ece2f0a6bddb1c9099',
        'f6eff7bdc9e167a9cf02818a',
        'f6eff7bdc9e167a9cf1c9099016c59',
        'f6eff7d0d1e6a6bddb67a9cf1c9099016c59',
        'f6eff7d0d1e6a6bddb67a9cf3690c002818a016450',
        'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450',
        'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636'
      )
      .map(W),
    j9 = an(oS),
    lS = new Array(3)
      .concat(
        'ece7f2a6bddb2b8cbe',
        'f1eef6bdc9e174a9cf0570b0',
        'f1eef6bdc9e174a9cf2b8cbe045a8d',
        'f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d',
        'f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b',
        'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b',
        'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858'
      )
      .map(W),
    n5 = an(lS),
    aS = new Array(3)
      .concat(
        'e7e1efc994c7dd1c77',
        'f1eef6d7b5d8df65b0ce1256',
        'f1eef6d7b5d8df65b0dd1c77980043',
        'f1eef6d4b9dac994c7df65b0dd1c77980043',
        'f1eef6d4b9dac994c7df65b0e7298ace125691003f',
        'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f',
        'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f'
      )
      .map(W),
    t5 = an(aS),
    uS = new Array(3)
      .concat(
        'fde0ddfa9fb5c51b8a',
        'feebe2fbb4b9f768a1ae017e',
        'feebe2fbb4b9f768a1c51b8a7a0177',
        'feebe2fcc5c0fa9fb5f768a1c51b8a7a0177',
        'feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177',
        'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177',
        'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a'
      )
      .map(W),
    e5 = an(uS),
    fS = new Array(3)
      .concat(
        'edf8b17fcdbb2c7fb8',
        'ffffcca1dab441b6c4225ea8',
        'ffffcca1dab441b6c42c7fb8253494',
        'ffffccc7e9b47fcdbb41b6c42c7fb8253494',
        'ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84',
        'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84',
        'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58'
      )
      .map(W),
    r5 = an(fS),
    cS = new Array(3)
      .concat(
        'f7fcb9addd8e31a354',
        'ffffccc2e69978c679238443',
        'ffffccc2e69978c67931a354006837',
        'ffffccd9f0a3addd8e78c67931a354006837',
        'ffffccd9f0a3addd8e78c67941ab5d238443005a32',
        'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32',
        'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529'
      )
      .map(W),
    i5 = an(cS),
    _S = new Array(3)
      .concat(
        'fff7bcfec44fd95f0e',
        'ffffd4fed98efe9929cc4c02',
        'ffffd4fed98efe9929d95f0e993404',
        'ffffd4fee391fec44ffe9929d95f0e993404',
        'ffffd4fee391fec44ffe9929ec7014cc4c028c2d04',
        'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04',
        'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506'
      )
      .map(W),
    o5 = an(_S),
    sS = new Array(3)
      .concat(
        'ffeda0feb24cf03b20',
        'ffffb2fecc5cfd8d3ce31a1c',
        'ffffb2fecc5cfd8d3cf03b20bd0026',
        'ffffb2fed976feb24cfd8d3cf03b20bd0026',
        'ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026',
        'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026',
        'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026'
      )
      .map(W),
    l5 = an(sS),
    SS = new Array(3)
      .concat(
        'deebf79ecae13182bd',
        'eff3ffbdd7e76baed62171b5',
        'eff3ffbdd7e76baed63182bd08519c',
        'eff3ffc6dbef9ecae16baed63182bd08519c',
        'eff3ffc6dbef9ecae16baed64292c62171b5084594',
        'f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594',
        'f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b'
      )
      .map(W),
    a5 = an(SS),
    hS = new Array(3)
      .concat(
        'e5f5e0a1d99b31a354',
        'edf8e9bae4b374c476238b45',
        'edf8e9bae4b374c47631a354006d2c',
        'edf8e9c7e9c0a1d99b74c47631a354006d2c',
        'edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32',
        'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32',
        'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b'
      )
      .map(W),
    u5 = an(hS),
    mS = new Array(3)
      .concat(
        'f0f0f0bdbdbd636363',
        'f7f7f7cccccc969696525252',
        'f7f7f7cccccc969696636363252525',
        'f7f7f7d9d9d9bdbdbd969696636363252525',
        'f7f7f7d9d9d9bdbdbd969696737373525252252525',
        'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525',
        'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000'
      )
      .map(W),
    f5 = an(mS),
    yS = new Array(3)
      .concat(
        'efedf5bcbddc756bb1',
        'f2f0f7cbc9e29e9ac86a51a3',
        'f2f0f7cbc9e29e9ac8756bb154278f',
        'f2f0f7dadaebbcbddc9e9ac8756bb154278f',
        'f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486',
        'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486',
        'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d'
      )
      .map(W),
    c5 = an(yS),
    bS = new Array(3)
      .concat(
        'fee0d2fc9272de2d26',
        'fee5d9fcae91fb6a4acb181d',
        'fee5d9fcae91fb6a4ade2d26a50f15',
        'fee5d9fcbba1fc9272fb6a4ade2d26a50f15',
        'fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d',
        'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d',
        'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d'
      )
      .map(W),
    _5 = an(bS),
    dS = new Array(3)
      .concat(
        'fee6cefdae6be6550d',
        'feeddefdbe85fd8d3cd94701',
        'feeddefdbe85fd8d3ce6550da63603',
        'feeddefdd0a2fdae6bfd8d3ce6550da63603',
        'feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04',
        'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04',
        'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704'
      )
      .map(W),
    s5 = an(dS);
  function S5(n) {
    return (
      Symbol('JSCA_12791_12794'),
      (n = Math.max(0, Math.min(1, n))),
      'rgb(' +
        Math.max(
          0,
          Math.min(
            255,
            Math.round(
              -4.54 -
                n *
                  (35.34 -
                    n * (2381.73 - n * (6402.7 - n * (7024.72 - n * 2710.57))))
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
                n *
                  (170.73 +
                    n * (52.82 - n * (131.46 - n * (176.58 - n * 67.37))))
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
                n *
                  (442.36 -
                    n * (2482.43 - n * (6167.24 - n * (6614.94 - n * 2475.67))))
            )
          )
        ) +
        ')'
    );
  }
  var h5 = Oi(ot(300, 0.5, 0), ot(-240, 0.5, 1)),
    m5 = Oi(ot(-100, 0.75, 0.35), ot(80, 1.5, 0.8)),
    y5 = Oi(ot(260, 0.75, 0.35), ot(80, 1.5, 0.8)),
    il = ot();
  function b5(n) {
    Symbol('JSCA_12799_12806'), (n < 0 || n > 1) && (n -= Math.floor(n));
    var t = Math.abs(n - 0.5);
    return (
      (il.h = 360 * n - 100),
      (il.s = 1.5 - 1.5 * t),
      (il.l = 0.8 - 0.9 * t),
      il + ''
    );
  }
  var ol = Ne(),
    d5 = Math.PI / 3,
    A5 = (Math.PI * 2) / 3;
  function C5(n) {
    Symbol('JSCA_12808_12815');
    var t;
    return (
      (n = (0.5 - n) * Math.PI),
      (ol.r = 255 * (t = Math.sin(n)) * t),
      (ol.g = 255 * (t = Math.sin(n + d5)) * t),
      (ol.b = 255 * (t = Math.sin(n + A5)) * t),
      ol + ''
    );
  }
  function g5(n) {
    return (
      Symbol('JSCA_12816_12819'),
      (n = Math.max(0, Math.min(1, n))),
      'rgb(' +
        Math.max(
          0,
          Math.min(
            255,
            Math.round(
              34.61 +
                n *
                  (1172.33 -
                    n *
                      (10793.56 -
                        n * (33300.12 - n * (38394.49 - n * 14825.05))))
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
                n *
                  (557.33 +
                    n * (1225.33 - n * (3574.96 - n * (1073.77 + n * 707.56))))
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
                n *
                  (3211.1 -
                    n * (15327.97 - n * (27814 - n * (22569.18 - n * 6838.66))))
            )
          )
        ) +
        ')'
    );
  }
  function ll(n) {
    Symbol('JSCA_12820_12825');
    var t = n.length;
    return function (e) {
      return (
        Symbol('JSCA_12822_12824'),
        n[Math.max(0, Math.min(t - 1, Math.floor(e * t)))]
      );
    };
  }
  var J5 = ll(
      W(
        '44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725'
      )
    ),
    p5 = ll(
      W(
        '00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf'
      )
    ),
    v5 = ll(
      W(
        '00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4'
      )
    ),
    w5 = ll(
      W(
        '0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921'
      )
    );
  function V(n) {
    return (
      Symbol('JSCA_12830_12834'),
      function () {
        return Symbol('JSCA_12831_12833'), n;
      }
    );
  }
  const AS = Math.abs,
    kn = Math.atan2,
    xt = Math.cos,
    M5 = Math.max,
    rr = Math.min,
    Gn = Math.sin,
    un = Math.sqrt,
    Nn = 1e-12,
    Bt = Math.PI,
    al = Bt / 2,
    Ht = 2 * Bt;
  function T5(n) {
    return Symbol('JSCA_12846_12848'), n > 1 ? 0 : n < -1 ? Bt : Math.acos(n);
  }
  function CS(n) {
    return (
      Symbol('JSCA_12849_12851'), n >= 1 ? al : n <= -1 ? -al : Math.asin(n)
    );
  }
  function oi(n) {
    Symbol('JSCA_12852_12866');
    let t = 3;
    return (
      (n.digits = function (e) {
        if ((Symbol('JSCA_12854_12864'), !arguments.length)) return t;
        if (e == null) t = null;
        else {
          const r = Math.floor(e);
          if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
          t = r;
        }
        return n;
      }),
      () => new Tr(t)
    );
  }
  function $5(n) {
    return Symbol('JSCA_12867_12869'), n.innerRadius;
  }
  function E5(n) {
    return Symbol('JSCA_12870_12872'), n.outerRadius;
  }
  function k5(n) {
    return Symbol('JSCA_12873_12875'), n.startAngle;
  }
  function N5(n) {
    return Symbol('JSCA_12876_12878'), n.endAngle;
  }
  function x5(n) {
    return Symbol('JSCA_12879_12881'), n && n.padAngle;
  }
  function R5(n, t, e, r, i, o, l, a) {
    Symbol('JSCA_12882_12887');
    var f = e - n,
      u = r - t,
      c = l - i,
      s = a - o,
      _ = s * f - c * u;
    if (!(_ * _ < Nn))
      return (_ = (c * (t - o) - s * (n - i)) / _), [n + _ * f, t + _ * u];
  }
  function ul(n, t, e, r, i, o, l) {
    Symbol('JSCA_12888_12899');
    var a = n - e,
      f = t - r,
      u = (l ? o : -o) / un(a * a + f * f),
      c = u * f,
      s = -u * a,
      _ = n + c,
      S = t + s,
      y = e + c,
      b = r + s,
      m = (_ + y) / 2,
      d = (S + b) / 2,
      g = y - _,
      C = b - S,
      A = g * g + C * C,
      J = i - o,
      p = _ * b - y * S,
      $ = (C < 0 ? -1 : 1) * un(M5(0, J * J * A - p * p)),
      N = (p * C - g * $) / A,
      k = (-p * g - C * $) / A,
      E = (p * C + g * $) / A,
      w = (-p * g + C * $) / A,
      P = N - m,
      x = k - d,
      v = E - m,
      T = w - d;
    return (
      P * P + x * x > v * v + T * T && ((N = E), (k = w)),
      {
        cx: N,
        cy: k,
        x01: -c,
        y01: -s,
        x11: N * (i / J - 1),
        y11: k * (i / J - 1),
      }
    );
  }
  function P5() {
    Symbol('JSCA_12900_12986');
    var n = $5,
      t = E5,
      e = V(0),
      r = null,
      i = k5,
      o = N5,
      l = x5,
      a = null,
      f = oi(u);
    function u() {
      Symbol('JSCA_12902_12956');
      var c,
        s,
        _ = +n.apply(this, arguments),
        S = +t.apply(this, arguments),
        y = i.apply(this, arguments) - al,
        b = o.apply(this, arguments) - al,
        m = AS(b - y),
        d = b > y;
      if ((a || (a = c = f()), S < _ && ((s = S), (S = _), (_ = s)), !(S > Nn)))
        a.moveTo(0, 0);
      else if (m > Ht - Nn)
        a.moveTo(S * xt(y), S * Gn(y)),
          a.arc(0, 0, S, y, b, !d),
          _ > Nn && (a.moveTo(_ * xt(b), _ * Gn(b)), a.arc(0, 0, _, b, y, d));
      else {
        var g = y,
          C = b,
          A = y,
          J = b,
          p = m,
          $ = m,
          N = l.apply(this, arguments) / 2,
          k = N > Nn && (r ? +r.apply(this, arguments) : un(_ * _ + S * S)),
          E = rr(AS(S - _) / 2, +e.apply(this, arguments)),
          w = E,
          P = E,
          x,
          v;
        if (k > Nn) {
          var T = CS((k / _) * Gn(N)),
            M = CS((k / S) * Gn(N));
          (p -= T * 2) > Nn
            ? ((T *= d ? 1 : -1), (A += T), (J -= T))
            : ((p = 0), (A = J = (y + b) / 2)),
            ($ -= M * 2) > Nn
              ? ((M *= d ? 1 : -1), (g += M), (C -= M))
              : (($ = 0), (g = C = (y + b) / 2));
        }
        var R = S * xt(g),
          z = S * Gn(g),
          I = _ * xt(J),
          F = _ * Gn(J);
        if (E > Nn) {
          var q = S * xt(C),
            U = S * Gn(C),
            rn = _ * xt(A),
            nn = _ * Gn(A),
            j;
          if (m < Bt)
            if ((j = R5(R, z, rn, nn, q, U, I, F))) {
              var dn = R - j[0],
                en = z - j[1],
                yn = q - j[0],
                O = U - j[1],
                G =
                  1 /
                  Gn(
                    T5(
                      (dn * yn + en * O) /
                        (un(dn * dn + en * en) * un(yn * yn + O * O))
                    ) / 2
                  ),
                Q = un(j[0] * j[0] + j[1] * j[1]);
              (w = rr(E, (_ - Q) / (G - 1))), (P = rr(E, (S - Q) / (G + 1)));
            } else w = P = 0;
        }
        $ > Nn
          ? P > Nn
            ? ((x = ul(rn, nn, R, z, S, P, d)),
              (v = ul(q, U, I, F, S, P, d)),
              a.moveTo(x.cx + x.x01, x.cy + x.y01),
              P < E
                ? a.arc(x.cx, x.cy, P, kn(x.y01, x.x01), kn(v.y01, v.x01), !d)
                : (a.arc(x.cx, x.cy, P, kn(x.y01, x.x01), kn(x.y11, x.x11), !d),
                  a.arc(
                    0,
                    0,
                    S,
                    kn(x.cy + x.y11, x.cx + x.x11),
                    kn(v.cy + v.y11, v.cx + v.x11),
                    !d
                  ),
                  a.arc(v.cx, v.cy, P, kn(v.y11, v.x11), kn(v.y01, v.x01), !d)))
            : (a.moveTo(R, z), a.arc(0, 0, S, g, C, !d))
          : a.moveTo(R, z),
          !(_ > Nn) || !(p > Nn)
            ? a.lineTo(I, F)
            : w > Nn
            ? ((x = ul(I, F, q, U, _, -w, d)),
              (v = ul(R, z, rn, nn, _, -w, d)),
              a.lineTo(x.cx + x.x01, x.cy + x.y01),
              w < E
                ? a.arc(x.cx, x.cy, w, kn(x.y01, x.x01), kn(v.y01, v.x01), !d)
                : (a.arc(x.cx, x.cy, w, kn(x.y01, x.x01), kn(x.y11, x.x11), !d),
                  a.arc(
                    0,
                    0,
                    _,
                    kn(x.cy + x.y11, x.cx + x.x11),
                    kn(v.cy + v.y11, v.cx + v.x11),
                    d
                  ),
                  a.arc(v.cx, v.cy, w, kn(v.y11, v.x11), kn(v.y01, v.x01), !d)))
            : a.arc(0, 0, _, J, A, d);
      }
      if ((a.closePath(), c)) return (a = null), c + '' || null;
    }
    return (
      (u.centroid = function () {
        Symbol('JSCA_12957_12960');
        var c = (+n.apply(this, arguments) + +t.apply(this, arguments)) / 2,
          s =
            (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 -
            Bt / 2;
        return [xt(s) * c, Gn(s) * c];
      }),
      (u.innerRadius = function (c) {
        return (
          Symbol('JSCA_12961_12963'),
          arguments.length ? ((n = typeof c == 'function' ? c : V(+c)), u) : n
        );
      }),
      (u.outerRadius = function (c) {
        return (
          Symbol('JSCA_12964_12966'),
          arguments.length ? ((t = typeof c == 'function' ? c : V(+c)), u) : t
        );
      }),
      (u.cornerRadius = function (c) {
        return (
          Symbol('JSCA_12967_12969'),
          arguments.length ? ((e = typeof c == 'function' ? c : V(+c)), u) : e
        );
      }),
      (u.padRadius = function (c) {
        return (
          Symbol('JSCA_12970_12972'),
          arguments.length
            ? ((r = c == null ? null : typeof c == 'function' ? c : V(+c)), u)
            : r
        );
      }),
      (u.startAngle = function (c) {
        return (
          Symbol('JSCA_12973_12975'),
          arguments.length ? ((i = typeof c == 'function' ? c : V(+c)), u) : i
        );
      }),
      (u.endAngle = function (c) {
        return (
          Symbol('JSCA_12976_12978'),
          arguments.length ? ((o = typeof c == 'function' ? c : V(+c)), u) : o
        );
      }),
      (u.padAngle = function (c) {
        return (
          Symbol('JSCA_12979_12981'),
          arguments.length ? ((l = typeof c == 'function' ? c : V(+c)), u) : l
        );
      }),
      (u.context = function (c) {
        return (
          Symbol('JSCA_12982_12984'),
          arguments.length ? ((a = c ?? null), u) : a
        );
      }),
      u
    );
  }
  var I5 = Array.prototype.slice;
  function fl(n) {
    return (
      Symbol('JSCA_12988_12990'),
      typeof n == 'object' && 'length' in n ? n : Array.from(n)
    );
  }
  function gS(n) {
    Symbol('JSCA_12991_12993'), (this._context = n);
  }
  gS.prototype = {
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
        (this._line || (this._line !== 0 && this._point === 1)) &&
          this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (n, t) {
      switch ((Symbol('JSCA_13008_13021'), (n = +n), (t = +t), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(n, t)
              : this._context.moveTo(n, t);
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(n, t);
          break;
      }
    },
  };
  function cl(n) {
    return Symbol('JSCA_13023_13025'), new gS(n);
  }
  function r1(n) {
    return Symbol('JSCA_13026_13028'), n[0];
  }
  function i1(n) {
    return Symbol('JSCA_13029_13031'), n[1];
  }
  function o1(n, t) {
    Symbol('JSCA_13032_13063');
    var e = V(!0),
      r = null,
      i = cl,
      o = null,
      l = oi(a);
    (n = typeof n == 'function' ? n : n === void 0 ? r1 : V(n)),
      (t = typeof t == 'function' ? t : t === void 0 ? i1 : V(t));
    function a(f) {
      Symbol('JSCA_13036_13046');
      var u,
        c = (f = fl(f)).length,
        s,
        _ = !1,
        S;
      for (r == null && (o = i((S = l()))), u = 0; u <= c; ++u)
        !(u < c && e((s = f[u]), u, f)) === _ &&
          ((_ = !_) ? o.lineStart() : o.lineEnd()),
          _ && o.point(+n(s, u, f), +t(s, u, f));
      if (S) return (o = null), S + '' || null;
    }
    return (
      (a.x = function (f) {
        return (
          Symbol('JSCA_13047_13049'),
          arguments.length ? ((n = typeof f == 'function' ? f : V(+f)), a) : n
        );
      }),
      (a.y = function (f) {
        return (
          Symbol('JSCA_13050_13052'),
          arguments.length ? ((t = typeof f == 'function' ? f : V(+f)), a) : t
        );
      }),
      (a.defined = function (f) {
        return (
          Symbol('JSCA_13053_13055'),
          arguments.length ? ((e = typeof f == 'function' ? f : V(!!f)), a) : e
        );
      }),
      (a.curve = function (f) {
        return (
          Symbol('JSCA_13056_13058'),
          arguments.length ? ((i = f), r != null && (o = i(r)), a) : i
        );
      }),
      (a.context = function (f) {
        return (
          Symbol('JSCA_13059_13061'),
          arguments.length
            ? (f == null ? (r = o = null) : (o = i((r = f))), a)
            : r
        );
      }),
      a
    );
  }
  function JS(n, t, e) {
    Symbol('JSCA_13064_13135');
    var r = null,
      i = V(!0),
      o = null,
      l = cl,
      a = null,
      f = oi(u);
    (n = typeof n == 'function' ? n : n === void 0 ? r1 : V(+n)),
      (t = typeof t == 'function' ? t : V(t === void 0 ? 0 : +t)),
      (e = typeof e == 'function' ? e : e === void 0 ? i1 : V(+e));
    function u(s) {
      Symbol('JSCA_13069_13094');
      var _,
        S,
        y,
        b = (s = fl(s)).length,
        m,
        d = !1,
        g,
        C = new Array(b),
        A = new Array(b);
      for (o == null && (a = l((g = f()))), _ = 0; _ <= b; ++_) {
        if (!(_ < b && i((m = s[_]), _, s)) === d)
          if ((d = !d)) (S = _), a.areaStart(), a.lineStart();
          else {
            for (a.lineEnd(), a.lineStart(), y = _ - 1; y >= S; --y)
              a.point(C[y], A[y]);
            a.lineEnd(), a.areaEnd();
          }
        d &&
          ((C[_] = +n(m, _, s)),
          (A[_] = +t(m, _, s)),
          a.point(r ? +r(m, _, s) : C[_], e ? +e(m, _, s) : A[_]));
      }
      if (g) return (a = null), g + '' || null;
    }
    function c() {
      return Symbol('JSCA_13095_13097'), o1().defined(i).curve(l).context(o);
    }
    return (
      (u.x = function (s) {
        return (
          Symbol('JSCA_13098_13100'),
          arguments.length
            ? ((n = typeof s == 'function' ? s : V(+s)), (r = null), u)
            : n
        );
      }),
      (u.x0 = function (s) {
        return (
          Symbol('JSCA_13101_13103'),
          arguments.length ? ((n = typeof s == 'function' ? s : V(+s)), u) : n
        );
      }),
      (u.x1 = function (s) {
        return (
          Symbol('JSCA_13104_13106'),
          arguments.length
            ? ((r = s == null ? null : typeof s == 'function' ? s : V(+s)), u)
            : r
        );
      }),
      (u.y = function (s) {
        return (
          Symbol('JSCA_13107_13109'),
          arguments.length
            ? ((t = typeof s == 'function' ? s : V(+s)), (e = null), u)
            : t
        );
      }),
      (u.y0 = function (s) {
        return (
          Symbol('JSCA_13110_13112'),
          arguments.length ? ((t = typeof s == 'function' ? s : V(+s)), u) : t
        );
      }),
      (u.y1 = function (s) {
        return (
          Symbol('JSCA_13113_13115'),
          arguments.length
            ? ((e = s == null ? null : typeof s == 'function' ? s : V(+s)), u)
            : e
        );
      }),
      (u.lineX0 = u.lineY0 =
        function () {
          return Symbol('JSCA_13116_13118'), c().x(n).y(t);
        }),
      (u.lineY1 = function () {
        return Symbol('JSCA_13119_13121'), c().x(n).y(e);
      }),
      (u.lineX1 = function () {
        return Symbol('JSCA_13122_13124'), c().x(r).y(t);
      }),
      (u.defined = function (s) {
        return (
          Symbol('JSCA_13125_13127'),
          arguments.length ? ((i = typeof s == 'function' ? s : V(!!s)), u) : i
        );
      }),
      (u.curve = function (s) {
        return (
          Symbol('JSCA_13128_13130'),
          arguments.length ? ((l = s), o != null && (a = l(o)), u) : l
        );
      }),
      (u.context = function (s) {
        return (
          Symbol('JSCA_13131_13133'),
          arguments.length
            ? (s == null ? (o = a = null) : (a = l((o = s))), u)
            : o
        );
      }),
      u
    );
  }
  function z5(n, t) {
    return (
      Symbol('JSCA_13136_13138'), t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    );
  }
  function D5(n) {
    return Symbol('JSCA_13139_13141'), n;
  }
  function F5() {
    Symbol('JSCA_13142_13187');
    var n = D5,
      t = z5,
      e = null,
      r = V(0),
      i = V(Ht),
      o = V(0);
    function l(a) {
      Symbol('JSCA_13144_13167');
      var f,
        u = (a = fl(a)).length,
        c,
        s,
        _ = 0,
        S = new Array(u),
        y = new Array(u),
        b = +r.apply(this, arguments),
        m = Math.min(Ht, Math.max(-Ht, i.apply(this, arguments) - b)),
        d,
        g = Math.min(Math.abs(m) / u, o.apply(this, arguments)),
        C = g * (m < 0 ? -1 : 1),
        A;
      for (f = 0; f < u; ++f)
        (A = y[(S[f] = f)] = +n(a[f], f, a)) > 0 && (_ += A);
      for (
        t != null
          ? S.sort(function (J, p) {
              return Symbol('JSCA_13151_13153'), t(y[J], y[p]);
            })
          : e != null &&
            S.sort(function (J, p) {
              return Symbol('JSCA_13153_13155'), e(a[J], a[p]);
            }),
          f = 0,
          s = _ ? (m - u * C) / _ : 0;
        f < u;
        ++f, b = d
      )
        (c = S[f]),
          (A = y[c]),
          (d = b + (A > 0 ? A * s : 0) + C),
          (y[c] = {
            data: a[c],
            index: f,
            value: A,
            startAngle: b,
            endAngle: d,
            padAngle: g,
          });
      return y;
    }
    return (
      (l.value = function (a) {
        return (
          Symbol('JSCA_13168_13170'),
          arguments.length ? ((n = typeof a == 'function' ? a : V(+a)), l) : n
        );
      }),
      (l.sortValues = function (a) {
        return (
          Symbol('JSCA_13171_13173'),
          arguments.length ? ((t = a), (e = null), l) : t
        );
      }),
      (l.sort = function (a) {
        return (
          Symbol('JSCA_13174_13176'),
          arguments.length ? ((e = a), (t = null), l) : e
        );
      }),
      (l.startAngle = function (a) {
        return (
          Symbol('JSCA_13177_13179'),
          arguments.length ? ((r = typeof a == 'function' ? a : V(+a)), l) : r
        );
      }),
      (l.endAngle = function (a) {
        return (
          Symbol('JSCA_13180_13182'),
          arguments.length ? ((i = typeof a == 'function' ? a : V(+a)), l) : i
        );
      }),
      (l.padAngle = function (a) {
        return (
          Symbol('JSCA_13183_13185'),
          arguments.length ? ((o = typeof a == 'function' ? a : V(+a)), l) : o
        );
      }),
      l
    );
  }
  var pS = l1(cl);
  function vS(n) {
    Symbol('JSCA_13189_13191'), (this._curve = n);
  }
  vS.prototype = {
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
    point: function (n, t) {
      Symbol('JSCA_13205_13207'),
        this._curve.point(t * Math.sin(n), t * -Math.cos(n));
    },
  };
  function l1(n) {
    Symbol('JSCA_13209_13215');
    function t(e) {
      return Symbol('JSCA_13210_13212'), new vS(n(e));
    }
    return (t._curve = n), t;
  }
  function li(n) {
    Symbol('JSCA_13216_13224');
    var t = n.curve;
    return (
      (n.angle = n.x),
      delete n.x,
      (n.radius = n.y),
      delete n.y,
      (n.curve = function (e) {
        return (
          Symbol('JSCA_13220_13222'), arguments.length ? t(l1(e)) : t()._curve
        );
      }),
      n
    );
  }
  function wS() {
    return Symbol('JSCA_13225_13227'), li(o1().curve(pS));
  }
  function MS() {
    Symbol('JSCA_13228_13252');
    var n = JS().curve(pS),
      t = n.curve,
      e = n.lineX0,
      r = n.lineX1,
      i = n.lineY0,
      o = n.lineY1;
    return (
      (n.angle = n.x),
      delete n.x,
      (n.startAngle = n.x0),
      delete n.x0,
      (n.endAngle = n.x1),
      delete n.x1,
      (n.radius = n.y),
      delete n.y,
      (n.innerRadius = n.y0),
      delete n.y0,
      (n.outerRadius = n.y1),
      delete n.y1,
      (n.lineStartAngle = function () {
        return Symbol('JSCA_13236_13238'), li(e());
      }),
      delete n.lineX0,
      (n.lineEndAngle = function () {
        return Symbol('JSCA_13239_13241'), li(r());
      }),
      delete n.lineX1,
      (n.lineInnerRadius = function () {
        return Symbol('JSCA_13242_13244'), li(i());
      }),
      delete n.lineY0,
      (n.lineOuterRadius = function () {
        return Symbol('JSCA_13245_13247'), li(o());
      }),
      delete n.lineY1,
      (n.curve = function (l) {
        return (
          Symbol('JSCA_13248_13250'), arguments.length ? t(l1(l)) : t()._curve
        );
      }),
      n
    );
  }
  function ai(n, t) {
    return (
      Symbol('JSCA_13253_13255'),
      [(t = +t) * Math.cos((n -= Math.PI / 2)), t * Math.sin(n)]
    );
  }
  class TS {
    constructor(t, e) {
      Symbol('JSCA_13257_13260'), (this._context = t), (this._x = e);
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
        (this._line || (this._line !== 0 && this._point === 1)) &&
          this._context.closePath(),
        (this._line = 1 - this._line);
    }
    point(t, e) {
      switch ((Symbol('JSCA_13274_13292'), (t = +t), (e = +e), this._point)) {
        case 0: {
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, e)
              : this._context.moveTo(t, e);
          break;
        }
        case 1:
          this._point = 2;
        default: {
          this._x
            ? this._context.bezierCurveTo(
                (this._x0 = (this._x0 + t) / 2),
                this._y0,
                this._x0,
                e,
                t,
                e
              )
            : this._context.bezierCurveTo(
                this._x0,
                (this._y0 = (this._y0 + e) / 2),
                t,
                this._y0,
                t,
                e
              );
          break;
        }
      }
      (this._x0 = t), (this._y0 = e);
    }
  }
  class O5 {
    constructor(t) {
      Symbol('JSCA_13295_13297'), (this._context = t);
    }
    lineStart() {
      Symbol('JSCA_13298_13300'), (this._point = 0);
    }
    lineEnd() {
      Symbol('JSCA_13301_13301');
    }
    point(t, e) {
      if ((Symbol('JSCA_13302_13315'), (t = +t), (e = +e), this._point === 0))
        this._point = 1;
      else {
        const r = ai(this._x0, this._y0),
          i = ai(this._x0, (this._y0 = (this._y0 + e) / 2)),
          o = ai(t, this._y0),
          l = ai(t, e);
        this._context.moveTo(...r),
          this._context.bezierCurveTo(...i, ...o, ...l);
      }
      (this._x0 = t), (this._y0 = e);
    }
  }
  function $S(n) {
    return Symbol('JSCA_13317_13319'), new TS(n, !0);
  }
  function ES(n) {
    return Symbol('JSCA_13320_13322'), new TS(n, !1);
  }
  function L5(n) {
    return Symbol('JSCA_13323_13325'), new O5(n);
  }
  function q5(n) {
    return Symbol('JSCA_13326_13328'), n.source;
  }
  function Y5(n) {
    return Symbol('JSCA_13329_13331'), n.target;
  }
  function _l(n) {
    Symbol('JSCA_13332_13362');
    let t = q5,
      e = Y5,
      r = r1,
      i = i1,
      o = null,
      l = null,
      a = oi(f);
    function f() {
      Symbol('JSCA_13334_13345');
      let u;
      const c = I5.call(arguments),
        s = t.apply(this, c),
        _ = e.apply(this, c);
      if (
        (o == null && (l = n((u = a()))),
        l.lineStart(),
        (c[0] = s),
        l.point(+r.apply(this, c), +i.apply(this, c)),
        (c[0] = _),
        l.point(+r.apply(this, c), +i.apply(this, c)),
        l.lineEnd(),
        u)
      )
        return (l = null), u + '' || null;
    }
    return (
      (f.source = function (u) {
        return Symbol('JSCA_13346_13348'), arguments.length ? ((t = u), f) : t;
      }),
      (f.target = function (u) {
        return Symbol('JSCA_13349_13351'), arguments.length ? ((e = u), f) : e;
      }),
      (f.x = function (u) {
        return (
          Symbol('JSCA_13352_13354'),
          arguments.length ? ((r = typeof u == 'function' ? u : V(+u)), f) : r
        );
      }),
      (f.y = function (u) {
        return (
          Symbol('JSCA_13355_13357'),
          arguments.length ? ((i = typeof u == 'function' ? u : V(+u)), f) : i
        );
      }),
      (f.context = function (u) {
        return (
          Symbol('JSCA_13358_13360'),
          arguments.length
            ? (u == null ? (o = l = null) : (l = n((o = u))), f)
            : o
        );
      }),
      f
    );
  }
  function U5() {
    return Symbol('JSCA_13363_13365'), _l($S);
  }
  function B5() {
    return Symbol('JSCA_13366_13368'), _l(ES);
  }
  function H5() {
    Symbol('JSCA_13369_13374');
    const n = _l(L5);
    return (n.angle = n.x), delete n.x, (n.radius = n.y), delete n.y, n;
  }
  const X5 = un(3);
  var kS = {
      draw(n, t) {
        Symbol('JSCA_13377_13387');
        const e = un(t + rr(t / 28, 0.75)) * 0.59436,
          r = e / 2,
          i = r * X5;
        n.moveTo(0, e),
          n.lineTo(0, -e),
          n.moveTo(-i, -r),
          n.lineTo(i, r),
          n.moveTo(-i, r),
          n.lineTo(i, -r);
      },
    },
    sl = {
      draw(n, t) {
        Symbol('JSCA_13390_13394');
        const e = un(t / Bt);
        n.moveTo(e, 0), n.arc(0, 0, e, 0, Ht);
      },
    },
    NS = {
      draw(n, t) {
        Symbol('JSCA_13397_13412');
        const e = un(t / 5) / 2;
        n.moveTo(-3 * e, -e),
          n.lineTo(-e, -e),
          n.lineTo(-e, -3 * e),
          n.lineTo(e, -3 * e),
          n.lineTo(e, -e),
          n.lineTo(3 * e, -e),
          n.lineTo(3 * e, e),
          n.lineTo(e, e),
          n.lineTo(e, 3 * e),
          n.lineTo(-e, 3 * e),
          n.lineTo(-e, e),
          n.lineTo(-3 * e, e),
          n.closePath();
      },
    };
  const xS = un(1 / 3),
    G5 = xS * 2;
  var RS = {
      draw(n, t) {
        Symbol('JSCA_13417_13425');
        const e = un(t / G5),
          r = e * xS;
        n.moveTo(0, -e),
          n.lineTo(r, 0),
          n.lineTo(0, e),
          n.lineTo(-r, 0),
          n.closePath();
      },
    },
    PS = {
      draw(n, t) {
        Symbol('JSCA_13428_13435');
        const e = un(t) * 0.62625;
        n.moveTo(0, -e),
          n.lineTo(e, 0),
          n.lineTo(0, e),
          n.lineTo(-e, 0),
          n.closePath();
      },
    },
    IS = {
      draw(n, t) {
        Symbol('JSCA_13438_13444');
        const e = un(t - rr(t / 7, 2)) * 0.87559;
        n.moveTo(-e, 0), n.lineTo(e, 0), n.moveTo(0, e), n.lineTo(0, -e);
      },
    },
    zS = {
      draw(n, t) {
        Symbol('JSCA_13447_13451');
        const e = un(t),
          r = -e / 2;
        n.rect(r, r, e, e);
      },
    },
    DS = {
      draw(n, t) {
        Symbol('JSCA_13454_13461');
        const e = un(t) * 0.4431;
        n.moveTo(e, e),
          n.lineTo(e, -e),
          n.lineTo(-e, -e),
          n.lineTo(-e, e),
          n.closePath();
      },
    };
  const V5 = 0.8908130915292852,
    FS = Gn(Bt / 10) / Gn((7 * Bt) / 10),
    W5 = Gn(Ht / 10) * FS,
    Z5 = -xt(Ht / 10) * FS;
  var OS = {
    draw(n, t) {
      Symbol('JSCA_13468_13482');
      const e = un(t * V5),
        r = W5 * e,
        i = Z5 * e;
      n.moveTo(0, -e), n.lineTo(r, i);
      for (let o = 1; o < 5; ++o) {
        const l = (Ht * o) / 5,
          a = xt(l),
          f = Gn(l);
        n.lineTo(f * e, -a * e), n.lineTo(a * r - f * i, f * r + a * i);
      }
      n.closePath();
    },
  };
  const a1 = un(3);
  var LS = {
    draw(n, t) {
      Symbol('JSCA_13486_13492');
      const e = -un(t / (a1 * 3));
      n.moveTo(0, e * 2),
        n.lineTo(-a1 * e, -e),
        n.lineTo(a1 * e, -e),
        n.closePath();
    },
  };
  const Q5 = un(3);
  var qS = {
    draw(n, t) {
      Symbol('JSCA_13496_13504');
      const e = un(t) * 0.6824,
        r = e / 2,
        i = (e * Q5) / 2;
      n.moveTo(0, -e), n.lineTo(i, r), n.lineTo(-i, r), n.closePath();
    },
  };
  const tt = -0.5,
    et = un(3) / 2,
    u1 = 1 / un(12),
    K5 = (u1 / 2 + 1) * 3;
  var YS = {
      draw(n, t) {
        Symbol('JSCA_13511_13526');
        const e = un(t / K5),
          r = e / 2,
          i = e * u1,
          o = r,
          l = e * u1 + e,
          a = -o,
          f = l;
        n.moveTo(r, i),
          n.lineTo(o, l),
          n.lineTo(a, f),
          n.lineTo(tt * r - et * i, et * r + tt * i),
          n.lineTo(tt * o - et * l, et * o + tt * l),
          n.lineTo(tt * a - et * f, et * a + tt * f),
          n.lineTo(tt * r + et * i, tt * i - et * r),
          n.lineTo(tt * o + et * l, tt * l - et * o),
          n.lineTo(tt * a + et * f, tt * f - et * a),
          n.closePath();
      },
    },
    f1 = {
      draw(n, t) {
        Symbol('JSCA_13529_13535');
        const e = un(t - rr(t / 6, 1.7)) * 0.6189;
        n.moveTo(-e, -e), n.lineTo(e, e), n.moveTo(-e, e), n.lineTo(e, -e);
      },
    };
  const US = [sl, NS, RS, zS, OS, LS, YS],
    j5 = [sl, IS, f1, qS, kS, DS, PS];
  function nC(n, t) {
    Symbol('JSCA_13539_13559');
    let e = null,
      r = oi(i);
    (n = typeof n == 'function' ? n : V(n || sl)),
      (t = typeof t == 'function' ? t : V(t === void 0 ? 64 : +t));
    function i() {
      Symbol('JSCA_13543_13548');
      let o;
      if (
        (e || (e = o = r()),
        n.apply(this, arguments).draw(e, +t.apply(this, arguments)),
        o)
      )
        return (e = null), o + '' || null;
    }
    return (
      (i.type = function (o) {
        return (
          Symbol('JSCA_13549_13551'),
          arguments.length ? ((n = typeof o == 'function' ? o : V(o)), i) : n
        );
      }),
      (i.size = function (o) {
        return (
          Symbol('JSCA_13552_13554'),
          arguments.length ? ((t = typeof o == 'function' ? o : V(+o)), i) : t
        );
      }),
      (i.context = function (o) {
        return (
          Symbol('JSCA_13555_13557'),
          arguments.length ? ((e = o ?? null), i) : e
        );
      }),
      i
    );
  }
  function Xt() {
    Symbol('JSCA_13560_13560');
  }
  function Sl(n, t, e) {
    Symbol('JSCA_13561_13563'),
      n._context.bezierCurveTo(
        (2 * n._x0 + n._x1) / 3,
        (2 * n._y0 + n._y1) / 3,
        (n._x0 + 2 * n._x1) / 3,
        (n._y0 + 2 * n._y1) / 3,
        (n._x0 + 4 * n._x1 + t) / 6,
        (n._y0 + 4 * n._y1 + e) / 6
      );
  }
  function hl(n) {
    Symbol('JSCA_13564_13566'), (this._context = n);
  }
  hl.prototype = {
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
          Sl(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
      }
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (n, t) {
      switch ((Symbol('JSCA_13589_13608'), (n = +n), (t = +t), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(n, t)
              : this._context.moveTo(n, t);
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
          Sl(this, n, t);
          break;
      }
      (this._x0 = this._x1),
        (this._x1 = n),
        (this._y0 = this._y1),
        (this._y1 = t);
    },
  };
  function tC(n) {
    return Symbol('JSCA_13610_13612'), new hl(n);
  }
  function BS(n) {
    Symbol('JSCA_13613_13615'), (this._context = n);
  }
  BS.prototype = {
    areaStart: Xt,
    areaEnd: Xt,
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
        case 1: {
          this._context.moveTo(this._x2, this._y2), this._context.closePath();
          break;
        }
        case 2: {
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
        }
        case 3: {
          this.point(this._x2, this._y2),
            this.point(this._x3, this._y3),
            this.point(this._x4, this._y4);
          break;
        }
      }
    },
    point: function (n, t) {
      switch ((Symbol('JSCA_13647_13669'), (n = +n), (t = +t), this._point)) {
        case 0:
          (this._point = 1), (this._x2 = n), (this._y2 = t);
          break;
        case 1:
          (this._point = 2), (this._x3 = n), (this._y3 = t);
          break;
        case 2:
          (this._point = 3),
            (this._x4 = n),
            (this._y4 = t),
            this._context.moveTo(
              (this._x0 + 4 * this._x1 + n) / 6,
              (this._y0 + 4 * this._y1 + t) / 6
            );
          break;
        default:
          Sl(this, n, t);
          break;
      }
      (this._x0 = this._x1),
        (this._x1 = n),
        (this._y0 = this._y1),
        (this._y1 = t);
    },
  };
  function eC(n) {
    return Symbol('JSCA_13671_13673'), new BS(n);
  }
  function HS(n) {
    Symbol('JSCA_13674_13676'), (this._context = n);
  }
  HS.prototype = {
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
        (this._line || (this._line !== 0 && this._point === 3)) &&
          this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (n, t) {
      switch ((Symbol('JSCA_13692_13714'), (n = +n), (t = +t), this._point)) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var e = (this._x0 + 4 * this._x1 + n) / 6,
            r = (this._y0 + 4 * this._y1 + t) / 6;
          this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
          break;
        case 3:
          this._point = 4;
        default:
          Sl(this, n, t);
          break;
      }
      (this._x0 = this._x1),
        (this._x1 = n),
        (this._y0 = this._y1),
        (this._y1 = t);
    },
  };
  function rC(n) {
    return Symbol('JSCA_13716_13718'), new HS(n);
  }
  function XS(n, t) {
    Symbol('JSCA_13719_13722'), (this._basis = new hl(n)), (this._beta = t);
  }
  XS.prototype = {
    lineStart: function () {
      Symbol('JSCA_13724_13728'),
        (this._x = []),
        (this._y = []),
        this._basis.lineStart();
    },
    lineEnd: function () {
      Symbol('JSCA_13729_13740');
      var n = this._x,
        t = this._y,
        e = n.length - 1;
      if (e > 0)
        for (
          var r = n[0], i = t[0], o = n[e] - r, l = t[e] - i, a = -1, f;
          ++a <= e;

        )
          (f = a / e),
            this._basis.point(
              this._beta * n[a] + (1 - this._beta) * (r + f * o),
              this._beta * t[a] + (1 - this._beta) * (i + f * l)
            );
      (this._x = this._y = null), this._basis.lineEnd();
    },
    point: function (n, t) {
      Symbol('JSCA_13741_13744'), this._x.push(+n), this._y.push(+t);
    },
  };
  var iC = (function n(t) {
    Symbol('JSCA_13746_13754');
    function e(r) {
      return Symbol('JSCA_13747_13749'), t === 1 ? new hl(r) : new XS(r, t);
    }
    return (
      (e.beta = function (r) {
        return Symbol('JSCA_13750_13752'), n(+r);
      }),
      e
    );
  })(0.85);
  function ml(n, t, e) {
    Symbol('JSCA_13755_13757'),
      n._context.bezierCurveTo(
        n._x1 + n._k * (n._x2 - n._x0),
        n._y1 + n._k * (n._y2 - n._y0),
        n._x2 + n._k * (n._x1 - t),
        n._y2 + n._k * (n._y1 - e),
        n._x2,
        n._y2
      );
  }
  function c1(n, t) {
    Symbol('JSCA_13758_13761'), (this._context = n), (this._k = (1 - t) / 6);
  }
  c1.prototype = {
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
          ml(this, this._x1, this._y1);
          break;
      }
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (n, t) {
      switch ((Symbol('JSCA_13785_13804'), (n = +n), (t = +t), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(n, t)
              : this._context.moveTo(n, t);
          break;
        case 1:
          (this._point = 2), (this._x1 = n), (this._y1 = t);
          break;
        case 2:
          this._point = 3;
        default:
          ml(this, n, t);
          break;
      }
      (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = n),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = t);
    },
  };
  var oC = (function n(t) {
    Symbol('JSCA_13806_13814');
    function e(r) {
      return Symbol('JSCA_13807_13809'), new c1(r, t);
    }
    return (
      (e.tension = function (r) {
        return Symbol('JSCA_13810_13812'), n(+r);
      }),
      e
    );
  })(0);
  function _1(n, t) {
    Symbol('JSCA_13815_13818'), (this._context = n), (this._k = (1 - t) / 6);
  }
  _1.prototype = {
    areaStart: Xt,
    areaEnd: Xt,
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
        case 1: {
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3),
            this.point(this._x4, this._y4),
            this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function (n, t) {
      switch ((Symbol('JSCA_13849_13870'), (n = +n), (t = +t), this._point)) {
        case 0:
          (this._point = 1), (this._x3 = n), (this._y3 = t);
          break;
        case 1:
          (this._point = 2),
            this._context.moveTo((this._x4 = n), (this._y4 = t));
          break;
        case 2:
          (this._point = 3), (this._x5 = n), (this._y5 = t);
          break;
        default:
          ml(this, n, t);
          break;
      }
      (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = n),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = t);
    },
  };
  var lC = (function n(t) {
    Symbol('JSCA_13872_13880');
    function e(r) {
      return Symbol('JSCA_13873_13875'), new _1(r, t);
    }
    return (
      (e.tension = function (r) {
        return Symbol('JSCA_13876_13878'), n(+r);
      }),
      e
    );
  })(0);
  function s1(n, t) {
    Symbol('JSCA_13881_13884'), (this._context = n), (this._k = (1 - t) / 6);
  }
  s1.prototype = {
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
        (this._line || (this._line !== 0 && this._point === 3)) &&
          this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (n, t) {
      switch ((Symbol('JSCA_13900_13921'), (n = +n), (t = +t), this._point)) {
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
          ml(this, n, t);
          break;
      }
      (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = n),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = t);
    },
  };
  var aC = (function n(t) {
    Symbol('JSCA_13923_13931');
    function e(r) {
      return Symbol('JSCA_13924_13926'), new s1(r, t);
    }
    return (
      (e.tension = function (r) {
        return Symbol('JSCA_13927_13929'), n(+r);
      }),
      e
    );
  })(0);
  function S1(n, t, e) {
    Symbol('JSCA_13932_13945');
    var r = n._x1,
      i = n._y1,
      o = n._x2,
      l = n._y2;
    if (n._l01_a > Nn) {
      var a = 2 * n._l01_2a + 3 * n._l01_a * n._l12_a + n._l12_2a,
        f = 3 * n._l01_a * (n._l01_a + n._l12_a);
      (r = (r * a - n._x0 * n._l12_2a + n._x2 * n._l01_2a) / f),
        (i = (i * a - n._y0 * n._l12_2a + n._y2 * n._l01_2a) / f);
    }
    if (n._l23_a > Nn) {
      var u = 2 * n._l23_2a + 3 * n._l23_a * n._l12_a + n._l12_2a,
        c = 3 * n._l23_a * (n._l23_a + n._l12_a);
      (o = (o * u + n._x1 * n._l23_2a - t * n._l12_2a) / c),
        (l = (l * u + n._y1 * n._l23_2a - e * n._l12_2a) / c);
    }
    n._context.bezierCurveTo(r, i, o, l, n._x2, n._y2);
  }
  function GS(n, t) {
    Symbol('JSCA_13946_13949'), (this._context = n), (this._alpha = t);
  }
  GS.prototype = {
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
          break;
      }
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (n, t) {
      if ((Symbol('JSCA_13973_13997'), (n = +n), (t = +t), this._point)) {
        var e = this._x2 - n,
          r = this._y2 - t;
        this._l23_a = Math.sqrt(
          (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
        );
      }
      switch (this._point) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(n, t)
              : this._context.moveTo(n, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
        default:
          S1(this, n, t);
          break;
      }
      (this._l01_a = this._l12_a),
        (this._l12_a = this._l23_a),
        (this._l01_2a = this._l12_2a),
        (this._l12_2a = this._l23_2a),
        (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = n),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = t);
    },
  };
  var uC = (function n(t) {
    Symbol('JSCA_13999_14007');
    function e(r) {
      return Symbol('JSCA_14000_14002'), t ? new GS(r, t) : new c1(r, 0);
    }
    return (
      (e.alpha = function (r) {
        return Symbol('JSCA_14003_14005'), n(+r);
      }),
      e
    );
  })(0.5);
  function VS(n, t) {
    Symbol('JSCA_14008_14011'), (this._context = n), (this._alpha = t);
  }
  VS.prototype = {
    areaStart: Xt,
    areaEnd: Xt,
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
        case 1: {
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3),
            this.point(this._x4, this._y4),
            this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function (n, t) {
      if ((Symbol('JSCA_14042_14069'), (n = +n), (t = +t), this._point)) {
        var e = this._x2 - n,
          r = this._y2 - t;
        this._l23_a = Math.sqrt(
          (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
        );
      }
      switch (this._point) {
        case 0:
          (this._point = 1), (this._x3 = n), (this._y3 = t);
          break;
        case 1:
          (this._point = 2),
            this._context.moveTo((this._x4 = n), (this._y4 = t));
          break;
        case 2:
          (this._point = 3), (this._x5 = n), (this._y5 = t);
          break;
        default:
          S1(this, n, t);
          break;
      }
      (this._l01_a = this._l12_a),
        (this._l12_a = this._l23_a),
        (this._l01_2a = this._l12_2a),
        (this._l12_2a = this._l23_2a),
        (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = n),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = t);
    },
  };
  var fC = (function n(t) {
    Symbol('JSCA_14071_14079');
    function e(r) {
      return Symbol('JSCA_14072_14074'), t ? new VS(r, t) : new _1(r, 0);
    }
    return (
      (e.alpha = function (r) {
        return Symbol('JSCA_14075_14077'), n(+r);
      }),
      e
    );
  })(0.5);
  function WS(n, t) {
    Symbol('JSCA_14080_14083'), (this._context = n), (this._alpha = t);
  }
  WS.prototype = {
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
        (this._line || (this._line !== 0 && this._point === 3)) &&
          this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (n, t) {
      if ((Symbol('JSCA_14099_14126'), (n = +n), (t = +t), this._point)) {
        var e = this._x2 - n,
          r = this._y2 - t;
        this._l23_a = Math.sqrt(
          (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
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
          S1(this, n, t);
          break;
      }
      (this._l01_a = this._l12_a),
        (this._l12_a = this._l23_a),
        (this._l01_2a = this._l12_2a),
        (this._l12_2a = this._l23_2a),
        (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = n),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = t);
    },
  };
  var cC = (function n(t) {
    Symbol('JSCA_14128_14136');
    function e(r) {
      return Symbol('JSCA_14129_14131'), t ? new WS(r, t) : new s1(r, 0);
    }
    return (
      (e.alpha = function (r) {
        return Symbol('JSCA_14132_14134'), n(+r);
      }),
      e
    );
  })(0.5);
  function ZS(n) {
    Symbol('JSCA_14137_14139'), (this._context = n);
  }
  ZS.prototype = {
    areaStart: Xt,
    areaEnd: Xt,
    lineStart: function () {
      Symbol('JSCA_14143_14145'), (this._point = 0);
    },
    lineEnd: function () {
      Symbol('JSCA_14146_14148'), this._point && this._context.closePath();
    },
    point: function (n, t) {
      Symbol('JSCA_14149_14152'),
        (n = +n),
        (t = +t),
        this._point
          ? this._context.lineTo(n, t)
          : ((this._point = 1), this._context.moveTo(n, t));
    },
  };
  function _C(n) {
    return Symbol('JSCA_14154_14156'), new ZS(n);
  }
  function QS(n) {
    return Symbol('JSCA_14157_14159'), n < 0 ? -1 : 1;
  }
  function KS(n, t, e) {
    Symbol('JSCA_14160_14163');
    var r = n._x1 - n._x0,
      i = t - n._x1,
      o = (n._y1 - n._y0) / (r || (i < 0 && -0)),
      l = (e - n._y1) / (i || (r < 0 && -0)),
      a = (o * i + l * r) / (r + i);
    return (
      (QS(o) + QS(l)) * Math.min(Math.abs(o), Math.abs(l), 0.5 * Math.abs(a)) ||
      0
    );
  }
  function jS(n, t) {
    Symbol('JSCA_14164_14167');
    var e = n._x1 - n._x0;
    return e ? ((3 * (n._y1 - n._y0)) / e - t) / 2 : t;
  }
  function h1(n, t, e) {
    Symbol('JSCA_14168_14171');
    var r = n._x0,
      i = n._y0,
      o = n._x1,
      l = n._y1,
      a = (o - r) / 3;
    n._context.bezierCurveTo(r + a, i + a * t, o - a, l - a * e, o, l);
  }
  function yl(n) {
    Symbol('JSCA_14172_14174'), (this._context = n);
  }
  yl.prototype = {
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
          h1(this, this._t0, jS(this, this._t0));
          break;
      }
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (n, t) {
      Symbol('JSCA_14198_14221');
      var e = NaN;
      if (((n = +n), (t = +t), !(n === this._x1 && t === this._y1))) {
        switch (this._point) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(n, t)
                : this._context.moveTo(n, t);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3), h1(this, jS(this, (e = KS(this, n, t))), e);
            break;
          default:
            h1(this, this._t0, (e = KS(this, n, t)));
            break;
        }
        (this._x0 = this._x1),
          (this._x1 = n),
          (this._y0 = this._y1),
          (this._y1 = t),
          (this._t0 = e);
      }
    },
  };
  function nh(n) {
    Symbol('JSCA_14223_14225'), (this._context = new th(n));
  }
  (nh.prototype = Object.create(yl.prototype)).point = function (n, t) {
    Symbol('JSCA_14226_14228'), yl.prototype.point.call(this, t, n);
  };
  function th(n) {
    Symbol('JSCA_14229_14231'), (this._context = n);
  }
  th.prototype = {
    moveTo: function (n, t) {
      Symbol('JSCA_14233_14235'), this._context.moveTo(t, n);
    },
    closePath: function () {
      Symbol('JSCA_14236_14238'), this._context.closePath();
    },
    lineTo: function (n, t) {
      Symbol('JSCA_14239_14241'), this._context.lineTo(t, n);
    },
    bezierCurveTo: function (n, t, e, r, i, o) {
      Symbol('JSCA_14242_14244'), this._context.bezierCurveTo(t, n, r, e, o, i);
    },
  };
  function sC(n) {
    return Symbol('JSCA_14246_14248'), new yl(n);
  }
  function SC(n) {
    return Symbol('JSCA_14249_14251'), new nh(n);
  }
  function eh(n) {
    Symbol('JSCA_14252_14254'), (this._context = n);
  }
  eh.prototype = {
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
      var n = this._x,
        t = this._y,
        e = n.length;
      if (e)
        if (
          (this._line
            ? this._context.lineTo(n[0], t[0])
            : this._context.moveTo(n[0], t[0]),
          e === 2)
        )
          this._context.lineTo(n[1], t[1]);
        else
          for (var r = rh(n), i = rh(t), o = 0, l = 1; l < e; ++o, ++l)
            this._context.bezierCurveTo(
              r[0][o],
              i[0][o],
              r[1][o],
              i[1][o],
              n[l],
              t[l]
            );
      (this._line || (this._line !== 0 && e === 1)) &&
        this._context.closePath(),
        (this._line = 1 - this._line),
        (this._x = this._y = null);
    },
    point: function (n, t) {
      Symbol('JSCA_14283_14286'), this._x.push(+n), this._y.push(+t);
    },
  };
  function rh(n) {
    Symbol('JSCA_14288_14299');
    var t,
      e = n.length - 1,
      r,
      i = new Array(e),
      o = new Array(e),
      l = new Array(e);
    for (i[0] = 0, o[0] = 2, l[0] = n[0] + 2 * n[1], t = 1; t < e - 1; ++t)
      (i[t] = 1), (o[t] = 4), (l[t] = 4 * n[t] + 2 * n[t + 1]);
    for (
      i[e - 1] = 2, o[e - 1] = 7, l[e - 1] = 8 * n[e - 1] + n[e], t = 1;
      t < e;
      ++t
    )
      (r = i[t] / o[t - 1]), (o[t] -= r), (l[t] -= r * l[t - 1]);
    for (i[e - 1] = l[e - 1] / o[e - 1], t = e - 2; t >= 0; --t)
      i[t] = (l[t] - i[t + 1]) / o[t];
    for (o[e - 1] = (n[e] + i[e - 1]) / 2, t = 0; t < e - 1; ++t)
      o[t] = 2 * n[t + 1] - i[t + 1];
    return [i, o];
  }
  function hC(n) {
    return Symbol('JSCA_14300_14302'), new eh(n);
  }
  function bl(n, t) {
    Symbol('JSCA_14303_14306'), (this._context = n), (this._t = t);
  }
  bl.prototype = {
    areaStart: function () {
      Symbol('JSCA_14308_14310'), (this._line = 0);
    },
    areaEnd: function () {
      Symbol('JSCA_14311_14313'), (this._line = NaN);
    },
    lineStart: function () {
      Symbol('JSCA_14314_14317'), (this._x = this._y = NaN), (this._point = 0);
    },
    lineEnd: function () {
      Symbol('JSCA_14318_14322'),
        0 < this._t &&
          this._t < 1 &&
          this._point === 2 &&
          this._context.lineTo(this._x, this._y),
        (this._line || (this._line !== 0 && this._point === 1)) &&
          this._context.closePath(),
        this._line >= 0 &&
          ((this._t = 1 - this._t), (this._line = 1 - this._line));
    },
    point: function (n, t) {
      switch ((Symbol('JSCA_14323_14346'), (n = +n), (t = +t), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(n, t)
              : this._context.moveTo(n, t);
          break;
        case 1:
          this._point = 2;
        default: {
          if (this._t <= 0)
            this._context.lineTo(this._x, t), this._context.lineTo(n, t);
          else {
            var e = this._x * (1 - this._t) + n * this._t;
            this._context.lineTo(e, this._y), this._context.lineTo(e, t);
          }
          break;
        }
      }
      (this._x = n), (this._y = t);
    },
  };
  function mC(n) {
    return Symbol('JSCA_14348_14350'), new bl(n, 0.5);
  }
  function yC(n) {
    return Symbol('JSCA_14351_14353'), new bl(n, 0);
  }
  function bC(n) {
    return Symbol('JSCA_14354_14356'), new bl(n, 1);
  }
  function ir(n, t) {
    if ((Symbol('JSCA_14357_14365'), (l = n.length) > 1))
      for (var e = 1, r, i, o = n[t[0]], l, a = o.length; e < l; ++e)
        for (i = o, o = n[t[e]], r = 0; r < a; ++r)
          o[r][1] += o[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
  }
  function or(n) {
    Symbol('JSCA_14366_14370');
    for (var t = n.length, e = new Array(t); --t >= 0; ) e[t] = t;
    return e;
  }
  function dC(n, t) {
    return Symbol('JSCA_14371_14373'), n[t];
  }
  function AC(n) {
    Symbol('JSCA_14374_14378');
    const t = [];
    return (t.key = n), t;
  }
  function CC() {
    Symbol('JSCA_14379_14407');
    var n = V([]),
      t = or,
      e = ir,
      r = dC;
    function i(o) {
      Symbol('JSCA_14381_14393');
      var l = Array.from(n.apply(this, arguments), AC),
        a,
        f = l.length,
        u = -1,
        c;
      for (const s of o)
        for (a = 0, ++u; a < f; ++a)
          (l[a][u] = [0, +r(s, l[a].key, u, o)]).data = s;
      for (a = 0, c = fl(t(l)); a < f; ++a) l[c[a]].index = a;
      return e(l, c), l;
    }
    return (
      (i.keys = function (o) {
        return (
          Symbol('JSCA_14394_14396'),
          arguments.length
            ? ((n = typeof o == 'function' ? o : V(Array.from(o))), i)
            : n
        );
      }),
      (i.value = function (o) {
        return (
          Symbol('JSCA_14397_14399'),
          arguments.length ? ((r = typeof o == 'function' ? o : V(+o)), i) : r
        );
      }),
      (i.order = function (o) {
        return (
          Symbol('JSCA_14400_14402'),
          arguments.length
            ? ((t =
                o == null ? or : typeof o == 'function' ? o : V(Array.from(o))),
              i)
            : t
        );
      }),
      (i.offset = function (o) {
        return (
          Symbol('JSCA_14403_14405'), arguments.length ? ((e = o ?? ir), i) : e
        );
      }),
      i
    );
  }
  function gC(n, t) {
    if ((Symbol('JSCA_14408_14415'), (r = n.length) > 0)) {
      for (var e, r, i = 0, o = n[0].length, l; i < o; ++i) {
        for (l = e = 0; e < r; ++e) l += n[e][i][1] || 0;
        if (l) for (e = 0; e < r; ++e) n[e][i][1] /= l;
      }
      ir(n, t);
    }
  }
  function JC(n, t) {
    if ((Symbol('JSCA_14416_14429'), (f = n.length) > 0))
      for (var e, r = 0, i, o, l, a, f, u = n[t[0]].length; r < u; ++r)
        for (l = a = 0, e = 0; e < f; ++e)
          (o = (i = n[t[e]][r])[1] - i[0]) > 0
            ? ((i[0] = l), (i[1] = l += o))
            : o < 0
            ? ((i[1] = a), (i[0] = a += o))
            : ((i[0] = 0), (i[1] = o));
  }
  function pC(n, t) {
    if ((Symbol('JSCA_14430_14437'), (i = n.length) > 0)) {
      for (var e = 0, r = n[t[0]], i, o = r.length; e < o; ++e) {
        for (var l = 0, a = 0; l < i; ++l) a += n[l][e][1] || 0;
        r[e][1] += r[e][0] = -a / 2;
      }
      ir(n, t);
    }
  }
  function vC(n, t) {
    if (
      (Symbol('JSCA_14438_14454'),
      !(!((l = n.length) > 0) || !((o = (i = n[t[0]]).length) > 0)))
    ) {
      for (var e = 0, r = 1, i, o, l; r < o; ++r) {
        for (var a = 0, f = 0, u = 0; a < l; ++a) {
          for (
            var c = n[t[a]],
              s = c[r][1] || 0,
              _ = c[r - 1][1] || 0,
              S = (s - _) / 2,
              y = 0;
            y < a;
            ++y
          ) {
            var b = n[t[y]],
              m = b[r][1] || 0,
              d = b[r - 1][1] || 0;
            S += m - d;
          }
          (f += s), (u += S * s);
        }
        (i[r - 1][1] += i[r - 1][0] = e), f && (e -= u / f);
      }
      (i[r - 1][1] += i[r - 1][0] = e), ir(n, t);
    }
  }
  function ih(n) {
    Symbol('JSCA_14455_14460');
    var t = n.map(wC);
    return or(n).sort(function (e, r) {
      return Symbol('JSCA_14457_14459'), t[e] - t[r];
    });
  }
  function wC(n) {
    Symbol('JSCA_14461_14465');
    for (var t = -1, e = 0, r = n.length, i, o = -1 / 0; ++t < r; )
      (i = +n[t][1]) > o && ((o = i), (e = t));
    return e;
  }
  function oh(n) {
    Symbol('JSCA_14466_14471');
    var t = n.map(lh);
    return or(n).sort(function (e, r) {
      return Symbol('JSCA_14468_14470'), t[e] - t[r];
    });
  }
  function lh(n) {
    Symbol('JSCA_14472_14476');
    for (var t = 0, e = -1, r = n.length, i; ++e < r; )
      (i = +n[e][1]) && (t += i);
    return t;
  }
  function MC(n) {
    return Symbol('JSCA_14477_14479'), oh(n).reverse();
  }
  function TC(n) {
    Symbol('JSCA_14480_14493');
    var t = n.length,
      e,
      r,
      i = n.map(lh),
      o = ih(n),
      l = 0,
      a = 0,
      f = [],
      u = [];
    for (e = 0; e < t; ++e)
      (r = o[e]), l < a ? ((l += i[r]), f.push(r)) : ((a += i[r]), u.push(r));
    return u.reverse().concat(f);
  }
  function $C(n) {
    return Symbol('JSCA_14494_14496'), or(n).reverse();
  }
  var dl = (n) => () => n;
  function EC(n, { sourceEvent: t, target: e, transform: r, dispatch: i }) {
    Symbol('JSCA_14498_14524'),
      Object.defineProperties(this, {
        type: { value: n, enumerable: !0, configurable: !0 },
        sourceEvent: { value: t, enumerable: !0, configurable: !0 },
        target: { value: e, enumerable: !0, configurable: !0 },
        transform: { value: r, enumerable: !0, configurable: !0 },
        _: { value: i },
      });
  }
  function Ct(n, t, e) {
    Symbol('JSCA_14525_14529'), (this.k = n), (this.x = t), (this.y = e);
  }
  Ct.prototype = {
    constructor: Ct,
    scale: function (n) {
      return (
        Symbol('JSCA_14532_14534'),
        n === 1 ? this : new Ct(this.k * n, this.x, this.y)
      );
    },
    translate: function (n, t) {
      return (
        Symbol('JSCA_14535_14537'),
        (n === 0) & (t === 0)
          ? this
          : new Ct(this.k, this.x + this.k * n, this.y + this.k * t)
      );
    },
    apply: function (n) {
      return (
        Symbol('JSCA_14538_14540'),
        [n[0] * this.k + this.x, n[1] * this.k + this.y]
      );
    },
    applyX: function (n) {
      return Symbol('JSCA_14541_14543'), n * this.k + this.x;
    },
    applyY: function (n) {
      return Symbol('JSCA_14544_14546'), n * this.k + this.y;
    },
    invert: function (n) {
      return (
        Symbol('JSCA_14547_14549'),
        [(n[0] - this.x) / this.k, (n[1] - this.y) / this.k]
      );
    },
    invertX: function (n) {
      return Symbol('JSCA_14550_14552'), (n - this.x) / this.k;
    },
    invertY: function (n) {
      return Symbol('JSCA_14553_14555'), (n - this.y) / this.k;
    },
    rescaleX: function (n) {
      return (
        Symbol('JSCA_14556_14558'),
        n.copy().domain(n.range().map(this.invertX, this).map(n.invert, n))
      );
    },
    rescaleY: function (n) {
      return (
        Symbol('JSCA_14559_14561'),
        n.copy().domain(n.range().map(this.invertY, this).map(n.invert, n))
      );
    },
    toString: function () {
      return (
        Symbol('JSCA_14562_14564'),
        'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')'
      );
    },
  };
  var Al = new Ct(1, 0, 0);
  ah.prototype = Ct.prototype;
  function ah(n) {
    for (Symbol('JSCA_14568_14571'); !n.__zoom; )
      if (!(n = n.parentNode)) return Al;
    return n.__zoom;
  }
  function m1(n) {
    Symbol('JSCA_14572_14574'), n.stopImmediatePropagation();
  }
  function ui(n) {
    Symbol('JSCA_14575_14578'),
      n.preventDefault(),
      n.stopImmediatePropagation();
  }
  function kC(n) {
    return (
      Symbol('JSCA_14579_14581'),
      (!n.ctrlKey || n.type === 'wheel') && !n.button
    );
  }
  function NC() {
    Symbol('JSCA_14582_14593');
    var n = this;
    return n instanceof SVGElement
      ? ((n = n.ownerSVGElement || n),
        n.hasAttribute('viewBox')
          ? ((n = n.viewBox.baseVal),
            [
              [n.x, n.y],
              [n.x + n.width, n.y + n.height],
            ])
          : [
              [0, 0],
              [n.width.baseVal.value, n.height.baseVal.value],
            ])
      : [
          [0, 0],
          [n.clientWidth, n.clientHeight],
        ];
  }
  function uh() {
    return Symbol('JSCA_14594_14596'), this.__zoom || Al;
  }
  function xC(n) {
    return (
      Symbol('JSCA_14597_14599'),
      -n.deltaY *
        (n.deltaMode === 1 ? 0.05 : n.deltaMode ? 1 : 0.002) *
        (n.ctrlKey ? 10 : 1)
    );
  }
  function RC() {
    return (
      Symbol('JSCA_14600_14602'),
      navigator.maxTouchPoints || 'ontouchstart' in this
    );
  }
  function PC(n, t, e) {
    Symbol('JSCA_14603_14606');
    var r = n.invertX(t[0][0]) - e[0][0],
      i = n.invertX(t[1][0]) - e[1][0],
      o = n.invertY(t[0][1]) - e[0][1],
      l = n.invertY(t[1][1]) - e[1][1];
    return n.translate(
      i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
      l > o ? (o + l) / 2 : Math.min(0, o) || Math.max(0, l)
    );
  }
  function IC() {
    Symbol('JSCA_14607_14871');
    var n = kC,
      t = NC,
      e = PC,
      r = xC,
      i = RC,
      o = [0, 1 / 0],
      l = [
        [-1 / 0, -1 / 0],
        [1 / 0, 1 / 0],
      ],
      a = 250,
      f = Lf,
      u = Kt('start', 'zoom', 'end'),
      c,
      s,
      _,
      S = 500,
      y = 150,
      b = 0,
      m = 10;
    function d(v) {
      Symbol('JSCA_14609_14613'),
        v
          .property('__zoom', uh)
          .on('wheel.zoom', N, { passive: !1 })
          .on('mousedown.zoom', k)
          .on('dblclick.zoom', E)
          .filter(i)
          .on('touchstart.zoom', w)
          .on('touchmove.zoom', P)
          .on('touchend.zoom touchcancel.zoom', x)
          .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
    }
    (d.transform = function (v, T, M, R) {
      Symbol('JSCA_14614_14624');
      var z = v.selection ? v.selection() : v;
      z.property('__zoom', uh),
        v !== z
          ? J(v, T, M, R)
          : z.interrupt().each(function () {
              Symbol('JSCA_14620_14622'),
                p(this, arguments)
                  .event(R)
                  .start()
                  .zoom(
                    null,
                    typeof T == 'function' ? T.apply(this, arguments) : T
                  )
                  .end();
            });
    }),
      (d.scaleBy = function (v, T, M, R) {
        Symbol('JSCA_14625_14630'),
          d.scaleTo(
            v,
            function () {
              Symbol('JSCA_14626_14629');
              var z = this.__zoom.k,
                I = typeof T == 'function' ? T.apply(this, arguments) : T;
              return z * I;
            },
            M,
            R
          );
      }),
      (d.scaleTo = function (v, T, M, R) {
        Symbol('JSCA_14631_14636'),
          d.transform(
            v,
            function () {
              Symbol('JSCA_14632_14635');
              var z = t.apply(this, arguments),
                I = this.__zoom,
                F =
                  M == null
                    ? A(z)
                    : typeof M == 'function'
                    ? M.apply(this, arguments)
                    : M,
                q = I.invert(F),
                U = typeof T == 'function' ? T.apply(this, arguments) : T;
              return e(C(g(I, U), F, q), z, l);
            },
            M,
            R
          );
      }),
      (d.translateBy = function (v, T, M, R) {
        Symbol('JSCA_14637_14641'),
          d.transform(
            v,
            function () {
              return (
                Symbol('JSCA_14638_14640'),
                e(
                  this.__zoom.translate(
                    typeof T == 'function' ? T.apply(this, arguments) : T,
                    typeof M == 'function' ? M.apply(this, arguments) : M
                  ),
                  t.apply(this, arguments),
                  l
                )
              );
            },
            null,
            R
          );
      }),
      (d.translateTo = function (v, T, M, R, z) {
        Symbol('JSCA_14642_14647'),
          d.transform(
            v,
            function () {
              Symbol('JSCA_14643_14646');
              var I = t.apply(this, arguments),
                F = this.__zoom,
                q =
                  R == null
                    ? A(I)
                    : typeof R == 'function'
                    ? R.apply(this, arguments)
                    : R;
              return e(
                Al.translate(q[0], q[1])
                  .scale(F.k)
                  .translate(
                    typeof T == 'function' ? -T.apply(this, arguments) : -T,
                    typeof M == 'function' ? -M.apply(this, arguments) : -M
                  ),
                I,
                l
              );
            },
            R,
            z
          );
      });
    function g(v, T) {
      return (
        Symbol('JSCA_14648_14651'),
        (T = Math.max(o[0], Math.min(o[1], T))),
        T === v.k ? v : new Ct(T, v.x, v.y)
      );
    }
    function C(v, T, M) {
      Symbol('JSCA_14652_14655');
      var R = T[0] - M[0] * v.k,
        z = T[1] - M[1] * v.k;
      return R === v.x && z === v.y ? v : new Ct(v.k, R, z);
    }
    function A(v) {
      return (
        Symbol('JSCA_14656_14658'),
        [(+v[0][0] + +v[1][0]) / 2, (+v[0][1] + +v[1][1]) / 2]
      );
    }
    function J(v, T, M, R) {
      Symbol('JSCA_14659_14674'),
        v
          .on('start.zoom', function () {
            Symbol('JSCA_14660_14662'), p(this, arguments).event(R).start();
          })
          .on('interrupt.zoom end.zoom', function () {
            Symbol('JSCA_14662_14664'), p(this, arguments).event(R).end();
          })
          .tween('zoom', function () {
            Symbol('JSCA_14664_14673');
            var z = this,
              I = arguments,
              F = p(z, I).event(R),
              q = t.apply(z, I),
              U = M == null ? A(q) : typeof M == 'function' ? M.apply(z, I) : M,
              rn = Math.max(q[1][0] - q[0][0], q[1][1] - q[0][1]),
              nn = z.__zoom,
              j = typeof T == 'function' ? T.apply(z, I) : T,
              dn = f(
                nn.invert(U).concat(rn / nn.k),
                j.invert(U).concat(rn / j.k)
              );
            return function (en) {
              if ((Symbol('JSCA_14666_14672'), en === 1)) en = j;
              else {
                var yn = dn(en),
                  O = rn / yn[2];
                en = new Ct(O, U[0] - yn[0] * O, U[1] - yn[1] * O);
              }
              F.zoom(null, en);
            };
          });
    }
    function p(v, T, M) {
      return Symbol('JSCA_14675_14677'), (!M && v.__zooming) || new $(v, T);
    }
    function $(v, T) {
      Symbol('JSCA_14678_14685'),
        (this.that = v),
        (this.args = T),
        (this.active = 0),
        (this.sourceEvent = null),
        (this.extent = t.apply(v, T)),
        (this.taps = 0);
    }
    $.prototype = {
      event: function (v) {
        return Symbol('JSCA_14687_14690'), v && (this.sourceEvent = v), this;
      },
      start: function () {
        return (
          Symbol('JSCA_14691_14697'),
          ++this.active === 1 &&
            ((this.that.__zooming = this), this.emit('start')),
          this
        );
      },
      zoom: function (v, T) {
        return (
          Symbol('JSCA_14698_14705'),
          this.mouse &&
            v !== 'mouse' &&
            (this.mouse[1] = T.invert(this.mouse[0])),
          this.touch0 &&
            v !== 'touch' &&
            (this.touch0[1] = T.invert(this.touch0[0])),
          this.touch1 &&
            v !== 'touch' &&
            (this.touch1[1] = T.invert(this.touch1[0])),
          (this.that.__zoom = T),
          this.emit('zoom'),
          this
        );
      },
      end: function () {
        return (
          Symbol('JSCA_14706_14712'),
          --this.active === 0 && (delete this.that.__zooming, this.emit('end')),
          this
        );
      },
      emit: function (v) {
        Symbol('JSCA_14713_14722');
        var T = Mn(this.that).datum();
        u.call(
          v,
          this.that,
          new EC(v, {
            sourceEvent: this.sourceEvent,
            target: d,
            type: v,
            transform: this.that.__zoom,
            dispatch: u,
          }),
          T
        );
      },
    };
    function N(v, ...T) {
      if ((Symbol('JSCA_14724_14744'), !n.apply(this, arguments))) return;
      var M = p(this, T).event(v),
        R = this.__zoom,
        z = Math.max(
          o[0],
          Math.min(o[1], R.k * Math.pow(2, r.apply(this, arguments)))
        ),
        I = Vn(v);
      if (M.wheel)
        (M.mouse[0][0] !== I[0] || M.mouse[0][1] !== I[1]) &&
          (M.mouse[1] = R.invert((M.mouse[0] = I))),
          clearTimeout(M.wheel);
      else {
        if (R.k === z) return;
        (M.mouse = [I, R.invert(I)]), le(this), M.start();
      }
      ui(v),
        (M.wheel = setTimeout(F, y)),
        M.zoom('mouse', e(C(g(R, z), M.mouse[0], M.mouse[1]), M.extent, l));
      function F() {
        Symbol('JSCA_14740_14743'), (M.wheel = null), M.end();
      }
    }
    function k(v, ...T) {
      if ((Symbol('JSCA_14745_14767'), _ || !n.apply(this, arguments))) return;
      var M = v.currentTarget,
        R = p(this, T, !0).event(v),
        z = Mn(v.view).on('mousemove.zoom', U, !0).on('mouseup.zoom', rn, !0),
        I = Vn(v, M),
        F = v.clientX,
        q = v.clientY;
      vi(v.view),
        m1(v),
        (R.mouse = [I, this.__zoom.invert(I)]),
        le(this),
        R.start();
      function U(nn) {
        if ((Symbol('JSCA_14753_14760'), ui(nn), !R.moved)) {
          var j = nn.clientX - F,
            dn = nn.clientY - q;
          R.moved = j * j + dn * dn > b;
        }
        R.event(nn).zoom(
          'mouse',
          e(C(R.that.__zoom, (R.mouse[0] = Vn(nn, M)), R.mouse[1]), R.extent, l)
        );
      }
      function rn(nn) {
        Symbol('JSCA_14761_14766'),
          z.on('mousemove.zoom mouseup.zoom', null),
          wi(nn.view, R.moved),
          ui(nn),
          R.event(nn).end();
      }
    }
    function E(v, ...T) {
      if ((Symbol('JSCA_14768_14773'), !!n.apply(this, arguments))) {
        var M = this.__zoom,
          R = Vn(v.changedTouches ? v.changedTouches[0] : v, this),
          z = M.invert(R),
          I = M.k * (v.shiftKey ? 0.5 : 2),
          F = e(C(g(M, I), R, z), t.apply(this, T), l);
        ui(v),
          a > 0
            ? Mn(this).transition().duration(a).call(J, F, R, v)
            : Mn(this).call(d.transform, F, R, v);
      }
    }
    function w(v, ...T) {
      if ((Symbol('JSCA_14774_14791'), !!n.apply(this, arguments))) {
        var M = v.touches,
          R = M.length,
          z = p(this, T, v.changedTouches.length === R).event(v),
          I,
          F,
          q,
          U;
        for (m1(v), F = 0; F < R; ++F)
          (q = M[F]),
            (U = Vn(q, this)),
            (U = [U, this.__zoom.invert(U), q.identifier]),
            z.touch0
              ? !z.touch1 &&
                z.touch0[2] !== U[2] &&
                ((z.touch1 = U), (z.taps = 0))
              : ((z.touch0 = U), (I = !0), (z.taps = 1 + !!c));
        c && (c = clearTimeout(c)),
          I &&
            (z.taps < 2 &&
              ((s = U[0]),
              (c = setTimeout(function () {
                Symbol('JSCA_14785_14787'), (c = null);
              }, S))),
            le(this),
            z.start());
      }
    }
    function P(v, ...T) {
      if ((Symbol('JSCA_14792_14808'), !!this.__zooming)) {
        var M = p(this, T).event(v),
          R = v.changedTouches,
          z = R.length,
          I,
          F,
          q,
          U;
        for (ui(v), I = 0; I < z; ++I)
          (F = R[I]),
            (q = Vn(F, this)),
            M.touch0 && M.touch0[2] === F.identifier
              ? (M.touch0[0] = q)
              : M.touch1 && M.touch1[2] === F.identifier && (M.touch1[0] = q);
        if (((F = M.that.__zoom), M.touch1)) {
          var rn = M.touch0[0],
            nn = M.touch0[1],
            j = M.touch1[0],
            dn = M.touch1[1],
            en = (en = j[0] - rn[0]) * en + (en = j[1] - rn[1]) * en,
            yn = (yn = dn[0] - nn[0]) * yn + (yn = dn[1] - nn[1]) * yn;
          (F = g(F, Math.sqrt(en / yn))),
            (q = [(rn[0] + j[0]) / 2, (rn[1] + j[1]) / 2]),
            (U = [(nn[0] + dn[0]) / 2, (nn[1] + dn[1]) / 2]);
        } else if (M.touch0) (q = M.touch0[0]), (U = M.touch0[1]);
        else return;
        M.zoom('touch', e(C(F, q, U), M.extent, l));
      }
    }
    function x(v, ...T) {
      if ((Symbol('JSCA_14809_14832'), !!this.__zooming)) {
        var M = p(this, T).event(v),
          R = v.changedTouches,
          z = R.length,
          I,
          F;
        for (
          m1(v),
            _ && clearTimeout(_),
            _ = setTimeout(function () {
              Symbol('JSCA_14814_14816'), (_ = null);
            }, S),
            I = 0;
          I < z;
          ++I
        )
          (F = R[I]),
            M.touch0 && M.touch0[2] === F.identifier
              ? delete M.touch0
              : M.touch1 && M.touch1[2] === F.identifier && delete M.touch1;
        if (
          (M.touch1 && !M.touch0 && ((M.touch0 = M.touch1), delete M.touch1),
          M.touch0)
        )
          M.touch0[1] = this.__zoom.invert(M.touch0[0]);
        else if (
          (M.end(),
          M.taps === 2 &&
            ((F = Vn(F, this)), Math.hypot(s[0] - F[0], s[1] - F[1]) < m))
        ) {
          var q = Mn(this).on('dblclick.zoom');
          q && q.apply(this, arguments);
        }
      }
    }
    return (
      (d.wheelDelta = function (v) {
        return (
          Symbol('JSCA_14833_14835'),
          arguments.length ? ((r = typeof v == 'function' ? v : dl(+v)), d) : r
        );
      }),
      (d.filter = function (v) {
        return (
          Symbol('JSCA_14836_14838'),
          arguments.length ? ((n = typeof v == 'function' ? v : dl(!!v)), d) : n
        );
      }),
      (d.touchable = function (v) {
        return (
          Symbol('JSCA_14839_14841'),
          arguments.length ? ((i = typeof v == 'function' ? v : dl(!!v)), d) : i
        );
      }),
      (d.extent = function (v) {
        return (
          Symbol('JSCA_14842_14844'),
          arguments.length
            ? ((t =
                typeof v == 'function'
                  ? v
                  : dl([
                      [+v[0][0], +v[0][1]],
                      [+v[1][0], +v[1][1]],
                    ])),
              d)
            : t
        );
      }),
      (d.scaleExtent = function (v) {
        return (
          Symbol('JSCA_14845_14847'),
          arguments.length ? ((o[0] = +v[0]), (o[1] = +v[1]), d) : [o[0], o[1]]
        );
      }),
      (d.translateExtent = function (v) {
        return (
          Symbol('JSCA_14848_14850'),
          arguments.length
            ? ((l[0][0] = +v[0][0]),
              (l[1][0] = +v[1][0]),
              (l[0][1] = +v[0][1]),
              (l[1][1] = +v[1][1]),
              d)
            : [
                [l[0][0], l[0][1]],
                [l[1][0], l[1][1]],
              ]
        );
      }),
      (d.constrain = function (v) {
        return Symbol('JSCA_14851_14853'), arguments.length ? ((e = v), d) : e;
      }),
      (d.duration = function (v) {
        return Symbol('JSCA_14854_14856'), arguments.length ? ((a = +v), d) : a;
      }),
      (d.interpolate = function (v) {
        return Symbol('JSCA_14857_14859'), arguments.length ? ((f = v), d) : f;
      }),
      (d.on = function () {
        Symbol('JSCA_14860_14863');
        var v = u.on.apply(u, arguments);
        return v === u ? d : v;
      }),
      (d.clickDistance = function (v) {
        return (
          Symbol('JSCA_14864_14866'),
          arguments.length ? ((b = (v = +v) * v), d) : Math.sqrt(b)
        );
      }),
      (d.tapDistance = function (v) {
        return Symbol('JSCA_14867_14869'), arguments.length ? ((m = +v), d) : m;
      }),
      d
    );
  }
  (h.Adder = An),
    (h.Delaunay = ka),
    (h.FormatSpecifier = io),
    (h.InternMap = ur),
    (h.InternSet = Wt),
    (h.Node = ye),
    (h.Path = Tr),
    (h.Voronoi = Ec),
    (h.ZoomTransform = Ct),
    (h.active = $3),
    (h.arc = P5),
    (h.area = JS),
    (h.areaRadial = MS),
    (h.ascending = fn),
    (h.autoType = Kd),
    (h.axisBottom = dm),
    (h.axisLeft = Am),
    (h.axisRight = bm),
    (h.axisTop = ym),
    (h.bin = R1),
    (h.bisect = Vt),
    (h.bisectCenter = sh),
    (h.bisectLeft = _h),
    (h.bisectRight = d1),
    (h.bisector = ci),
    (h.blob = t4),
    (h.blur = Sh),
    (h.blur2 = A1),
    (h.blurImage = hh),
    (h.brush = q3),
    (h.brushSelection = F3),
    (h.brushX = O3),
    (h.brushY = L3),
    (h.buffer = r4),
    (h.chord = U3),
    (h.chordDirected = H3),
    (h.chordTranspose = B3),
    (h.cluster = g8),
    (h.color = It),
    (h.contourDensity = bd),
    (h.contours = wa),
    (h.count = si),
    (h.create = ny),
    (h.creator = gi),
    (h.cross = gh),
    (h.csv = l4),
    (h.csvFormat = qd),
    (h.csvFormatBody = Yd),
    (h.csvFormatRow = Bd),
    (h.csvFormatRows = Ud),
    (h.csvFormatValue = Hd),
    (h.csvParse = Rc),
    (h.csvParseRows = Ld),
    (h.cubehelix = ot),
    (h.cumsum = Jh),
    (h.curveBasis = tC),
    (h.curveBasisClosed = eC),
    (h.curveBasisOpen = rC),
    (h.curveBumpX = $S),
    (h.curveBumpY = ES),
    (h.curveBundle = iC),
    (h.curveCardinal = oC),
    (h.curveCardinalClosed = lC),
    (h.curveCardinalOpen = aC),
    (h.curveCatmullRom = uC),
    (h.curveCatmullRomClosed = fC),
    (h.curveCatmullRomOpen = cC),
    (h.curveLinear = cl),
    (h.curveLinearClosed = _C),
    (h.curveMonotoneX = sC),
    (h.curveMonotoneY = SC),
    (h.curveNatural = hC),
    (h.curveStep = mC),
    (h.curveStepAfter = bC),
    (h.curveStepBefore = yC),
    (h.descending = y1),
    (h.deviation = J1),
    (h.difference = im),
    (h.disjoint = om),
    (h.dispatch = Kt),
    (h.drag = fy),
    (h.dragDisable = vi),
    (h.dragEnable = wi),
    (h.dsv = o4),
    (h.dsvFormat = no),
    (h.easeBack = uc),
    (h.easeBackIn = C3),
    (h.easeBackInOut = uc),
    (h.easeBackOut = g3),
    (h.easeBounce = wr),
    (h.easeBounceIn = d3),
    (h.easeBounceInOut = A3),
    (h.easeBounceOut = wr),
    (h.easeCircle = ac),
    (h.easeCircleIn = u3),
    (h.easeCircleInOut = ac),
    (h.easeCircleOut = f3),
    (h.easeCubic = aa),
    (h.easeCubicIn = n3),
    (h.easeCubicInOut = aa),
    (h.easeCubicOut = t3),
    (h.easeElastic = fc),
    (h.easeElasticIn = J3),
    (h.easeElasticInOut = p3),
    (h.easeElasticOut = fc),
    (h.easeExp = lc),
    (h.easeExpIn = l3),
    (h.easeExpInOut = lc),
    (h.easeExpOut = a3),
    (h.easeLinear = Qb),
    (h.easePoly = ec),
    (h.easePolyIn = e3),
    (h.easePolyInOut = ec),
    (h.easePolyOut = r3),
    (h.easeQuad = tc),
    (h.easeQuadIn = Kb),
    (h.easeQuadInOut = tc),
    (h.easeQuadOut = jb),
    (h.easeSin = oc),
    (h.easeSinIn = i3),
    (h.easeSinInOut = oc),
    (h.easeSinOut = o3),
    (h.every = Kh),
    (h.extent = ar),
    (h.fcumsum = vh),
    (h.filter = nm),
    (h.flatGroup = wh),
    (h.flatRollup = Mh),
    (h.forceCenter = h4),
    (h.forceCollide = R4),
    (h.forceLink = I4),
    (h.forceManyBody = B4),
    (h.forceRadial = H4),
    (h.forceSimulation = U4),
    (h.forceX = X4),
    (h.forceY = G4),
    (h.formatDefaultLocale = Gc),
    (h.formatLocale = Xc),
    (h.formatSpecifier = Ue),
    (h.fsum = ph),
    (h.geoAlbers = c0),
    (h.geoAlbersUsa = j6),
    (h.geoArea = r6),
    (h.geoAzimuthalEqualArea = n8),
    (h.geoAzimuthalEqualAreaRaw = Cu),
    (h.geoAzimuthalEquidistant = t8),
    (h.geoAzimuthalEquidistantRaw = gu),
    (h.geoBounds = a6),
    (h.geoCentroid = S6),
    (h.geoCircle = h6),
    (h.geoClipAntimeridian = ja),
    (h.geoClipCircle = E_),
    (h.geoClipExtent = g6),
    (h.geoClipRectangle = To),
    (h.geoConicConformal = r8),
    (h.geoConicConformalRaw = S0),
    (h.geoConicEqualArea = Lo),
    (h.geoConicEqualAreaRaw = f0),
    (h.geoConicEquidistant = o8),
    (h.geoConicEquidistantRaw = h0),
    (h.geoContains = $6),
    (h.geoDistance = ko),
    (h.geoEqualEarth = a8),
    (h.geoEqualEarthRaw = Ju),
    (h.geoEquirectangular = i8),
    (h.geoEquirectangularRaw = Hr),
    (h.geoGnomonic = u8),
    (h.geoGnomonicRaw = pu),
    (h.geoGraticule = O_),
    (h.geoGraticule10 = E6),
    (h.geoIdentity = f8),
    (h.geoInterpolate = k6),
    (h.geoLength = k_),
    (h.geoMercator = e8),
    (h.geoMercatorRaw = Br),
    (h.geoNaturalEarth1 = c8),
    (h.geoNaturalEarth1Raw = vu),
    (h.geoOrthographic = _8),
    (h.geoOrthographicRaw = wu),
    (h.geoPath = U6),
    (h.geoProjection = bt),
    (h.geoProjectionMutator = du),
    (h.geoRotation = g_),
    (h.geoStereographic = s8),
    (h.geoStereographicRaw = Mu),
    (h.geoStream = at),
    (h.geoTransform = B6),
    (h.geoTransverseMercator = S8),
    (h.geoTransverseMercatorRaw = Tu),
    (h.gray = gy),
    (h.greatest = P1),
    (h.greatestIndex = Xh),
    (h.group = M1),
    (h.groupSort = Eh),
    (h.groups = T1),
    (h.hcl = Ri),
    (h.hierarchy = $u),
    (h.histogram = R1),
    (h.hsl = Ei),
    (h.html = s4),
    (h.image = u4),
    (h.index = Th),
    (h.indexes = $h),
    (h.interpolate = zt),
    (h.interpolateArray = Ty),
    (h.interpolateBasis = wf),
    (h.interpolateBasisClosed = Mf),
    (h.interpolateBlues = a5),
    (h.interpolateBrBG = L9),
    (h.interpolateBuGn = W9),
    (h.interpolateBuPu = Z9),
    (h.interpolateCividis = S5),
    (h.interpolateCool = y5),
    (h.interpolateCubehelix = Yy),
    (h.interpolateCubehelixDefault = h5),
    (h.interpolateCubehelixLong = Oi),
    (h.interpolateDate = xf),
    (h.interpolateDiscrete = ky),
    (h.interpolateGnBu = Q9),
    (h.interpolateGreens = u5),
    (h.interpolateGreys = f5),
    (h.interpolateHcl = Ly),
    (h.interpolateHclLong = qy),
    (h.interpolateHsl = Dy),
    (h.interpolateHslLong = Fy),
    (h.interpolateHue = Ny),
    (h.interpolateInferno = v5),
    (h.interpolateLab = Oy),
    (h.interpolateMagma = p5),
    (h.interpolateNumber = Qn),
    (h.interpolateNumberArray = Wl),
    (h.interpolateObject = Rf),
    (h.interpolateOrRd = K9),
    (h.interpolateOranges = s5),
    (h.interpolatePRGn = q9),
    (h.interpolatePiYG = Y9),
    (h.interpolatePlasma = w5),
    (h.interpolatePuBu = n5),
    (h.interpolatePuBuGn = j9),
    (h.interpolatePuOr = U9),
    (h.interpolatePuRd = t5),
    (h.interpolatePurples = c5),
    (h.interpolateRainbow = b5),
    (h.interpolateRdBu = B9),
    (h.interpolateRdGy = H9),
    (h.interpolateRdPu = e5),
    (h.interpolateRdYlBu = X9),
    (h.interpolateRdYlGn = G9),
    (h.interpolateReds = _5),
    (h.interpolateRgb = dr),
    (h.interpolateRgbBasis = Ef),
    (h.interpolateRgbBasisClosed = My),
    (h.interpolateRound = Di),
    (h.interpolateSinebow = C5),
    (h.interpolateSpectral = V9),
    (h.interpolateString = Kl),
    (h.interpolateTransformCss = Df),
    (h.interpolateTransformSvg = Ff),
    (h.interpolateTurbo = g5),
    (h.interpolateViridis = J5),
    (h.interpolateWarm = m5),
    (h.interpolateYlGn = i5),
    (h.interpolateYlGnBu = r5),
    (h.interpolateYlOrBr = o5),
    (h.interpolateYlOrRd = l5),
    (h.interpolateZoom = Lf),
    (h.interrupt = le),
    (h.intersection = lm),
    (h.interval = Gy),
    (h.isoFormat = A9),
    (h.isoParse = J9),
    (h.json = c4),
    (h.lab = xi),
    (h.lch = Jy),
    (h.least = Hh),
    (h.leastIndex = D1),
    (h.line = o1),
    (h.lineRadial = wS),
    (h.link = _l),
    (h.linkHorizontal = U5),
    (h.linkRadial = H5),
    (h.linkVertical = B5),
    (h.local = K1),
    (h.map = tm),
    (h.matcher = Pl),
    (h.max = fr),
    (h.maxIndex = Tl),
    (h.mean = Dh),
    (h.median = Fh),
    (h.medianIndex = Oh),
    (h.merge = El),
    (h.min = mi),
    (h.minIndex = $l),
    (h.mode = qh),
    (h.namespace = Sr),
    (h.namespaces = xl),
    (h.nice = wl),
    (h.now = pr),
    (h.pack = Q8),
    (h.packEnclose = H8),
    (h.packSiblings = W8),
    (h.pairs = Yh),
    (h.partition = K8),
    (h.path = va),
    (h.pathRound = V3),
    (h.permute = x1),
    (h.pie = F5),
    (h.piecewise = Bf),
    (h.pointRadial = ai),
    (h.pointer = Vn),
    (h.pointers = ey),
    (h.polygonArea = h7),
    (h.polygonCentroid = m7),
    (h.polygonContains = A7),
    (h.polygonHull = d7),
    (h.polygonLength = C7),
    (h.precisionFixed = Vc),
    (h.precisionPrefix = Wc),
    (h.precisionRound = Zc),
    (h.quadtree = eo),
    (h.quantile = _r),
    (h.quantileIndex = z1),
    (h.quantileSorted = I1),
    (h.quantize = Uy),
    (h.quickselect = yi),
    (h.radialArea = MS),
    (h.radialLine = wS),
    (h.randomBates = v7),
    (h.randomBernoulli = T7),
    (h.randomBeta = z0),
    (h.randomBinomial = D0),
    (h.randomCauchy = E7),
    (h.randomExponential = w7),
    (h.randomGamma = Du),
    (h.randomGeometric = I0),
    (h.randomInt = J7),
    (h.randomIrwinHall = P0),
    (h.randomLcg = P7),
    (h.randomLogNormal = p7),
    (h.randomLogistic = k7),
    (h.randomNormal = zu),
    (h.randomPareto = M7),
    (h.randomPoisson = N7),
    (h.randomUniform = g7),
    (h.randomWeibull = $7),
    (h.range = Rt),
    (h.rank = Bh),
    (h.reduce = em),
    (h.reverse = rm),
    (h.rgb = Ne),
    (h.ribbon = ed),
    (h.ribbonArrow = rd),
    (h.rollup = E1),
    (h.rollups = k1),
    (h.scaleBand = Lu),
    (h.scaleDiverging = Us),
    (h.scaleDivergingLog = Bs),
    (h.scaleDivergingPow = e1),
    (h.scaleDivergingSqrt = $9),
    (h.scaleDivergingSymlog = Hs),
    (h.scaleIdentity = U0),
    (h.scaleImplicit = Fu),
    (h.scaleLinear = Y0),
    (h.scaleLog = V0),
    (h.scaleOrdinal = Ou),
    (h.scalePoint = I7),
    (h.scalePow = Xu),
    (h.scaleQuantile = ts),
    (h.scaleQuantize = es),
    (h.scaleRadial = ns),
    (h.scaleSequential = Os),
    (h.scaleSequentialLog = Ls),
    (h.scaleSequentialPow = t1),
    (h.scaleSequentialQuantile = Ys),
    (h.scaleSequentialSqrt = T9),
    (h.scaleSequentialSymlog = qs),
    (h.scaleSqrt = G7),
    (h.scaleSymlog = Q0),
    (h.scaleThreshold = rs),
    (h.scaleTime = w9),
    (h.scaleUtc = M9),
    (h.scan = Gh),
    (h.schemeAccent = k9),
    (h.schemeBlues = SS),
    (h.schemeBrBG = Xs),
    (h.schemeBuGn = tS),
    (h.schemeBuPu = eS),
    (h.schemeCategory10 = E9),
    (h.schemeDark2 = N9),
    (h.schemeGnBu = rS),
    (h.schemeGreens = hS),
    (h.schemeGreys = mS),
    (h.schemeObservable10 = x9),
    (h.schemeOrRd = iS),
    (h.schemeOranges = dS),
    (h.schemePRGn = Gs),
    (h.schemePaired = R9),
    (h.schemePastel1 = P9),
    (h.schemePastel2 = I9),
    (h.schemePiYG = Vs),
    (h.schemePuBu = lS),
    (h.schemePuBuGn = oS),
    (h.schemePuOr = Ws),
    (h.schemePuRd = aS),
    (h.schemePurples = yS),
    (h.schemeRdBu = Zs),
    (h.schemeRdGy = Qs),
    (h.schemeRdPu = uS),
    (h.schemeRdYlBu = Ks),
    (h.schemeRdYlGn = js),
    (h.schemeReds = bS),
    (h.schemeSet1 = z9),
    (h.schemeSet2 = D9),
    (h.schemeSet3 = F9),
    (h.schemeSpectral = nS),
    (h.schemeTableau10 = O9),
    (h.schemeYlGn = cS),
    (h.schemeYlGnBu = fS),
    (h.schemeYlOrBr = _S),
    (h.schemeYlOrRd = sS),
    (h.select = Mn),
    (h.selectAll = ry),
    (h.selection = ne),
    (h.selector = Ji),
    (h.selectorAll = Rl),
    (h.shuffle = Vh),
    (h.shuffler = F1),
    (h.some = jh),
    (h.sort = Jl),
    (h.stack = CC),
    (h.stackOffsetDiverging = JC),
    (h.stackOffsetExpand = gC),
    (h.stackOffsetNone = ir),
    (h.stackOffsetSilhouette = pC),
    (h.stackOffsetWiggle = vC),
    (h.stackOrderAppearance = ih),
    (h.stackOrderAscending = oh),
    (h.stackOrderDescending = MC),
    (h.stackOrderInsideOut = TC),
    (h.stackOrderNone = or),
    (h.stackOrderReverse = $C),
    (h.stratify = e7),
    (h.style = jt),
    (h.subset = um),
    (h.sum = Wh),
    (h.superset = L1),
    (h.svg = S4),
    (h.symbol = nC),
    (h.symbolAsterisk = kS),
    (h.symbolCircle = sl),
    (h.symbolCross = NS),
    (h.symbolDiamond = RS),
    (h.symbolDiamond2 = PS),
    (h.symbolPlus = IS),
    (h.symbolSquare = zS),
    (h.symbolSquare2 = DS),
    (h.symbolStar = OS),
    (h.symbolTimes = f1),
    (h.symbolTriangle = LS),
    (h.symbolTriangle2 = qS),
    (h.symbolWye = YS),
    (h.symbolX = f1),
    (h.symbols = US),
    (h.symbolsFill = US),
    (h.symbolsStroke = j5),
    (h.text = to),
    (h.thresholdFreedmanDiaconis = Ih),
    (h.thresholdScott = zh),
    (h.thresholdSturges = Ml),
    (h.tickFormat = q0),
    (h.tickIncrement = Qt),
    (h.tickStep = hi),
    (h.ticks = Zt),
    (h.timeDay = je),
    (h.timeDays = j7),
    (h.timeFormatDefaultLocale = Ds),
    (h.timeFormatLocale = Js),
    (h.timeFriday = fs),
    (h.timeFridays = lA),
    (h.timeHour = Ko),
    (h.timeHours = Q7),
    (h.timeInterval = bn),
    (h.timeMillisecond = Ke),
    (h.timeMilliseconds = is),
    (h.timeMinute = Zo),
    (h.timeMinutes = W7),
    (h.timeMonday = ni),
    (h.timeMondays = eA),
    (h.timeMonth = nl),
    (h.timeMonths = hA),
    (h.timeSaturday = cs),
    (h.timeSaturdays = aA),
    (h.timeSecond = Nt),
    (h.timeSeconds = ls),
    (h.timeSunday = nr),
    (h.timeSundays = _s),
    (h.timeThursday = Ae),
    (h.timeThursdays = oA),
    (h.timeTickInterval = gs),
    (h.timeTicks = Cs),
    (h.timeTuesday = as),
    (h.timeTuesdays = rA),
    (h.timeWednesday = us),
    (h.timeWednesdays = iA),
    (h.timeWeek = nr),
    (h.timeWeeks = _s),
    (h.timeYear = dt),
    (h.timeYears = yA),
    (h.timeout = ta),
    (h.timer = Ui),
    (h.timerFlush = Gf),
    (h.transition = jf),
    (h.transpose = O1),
    (h.tree = f7),
    (h.treemap = c7),
    (h.treemapBinary = _7),
    (h.treemapDice = Qr),
    (h.treemapResquarify = S7),
    (h.treemapSlice = Go),
    (h.treemapSliceDice = s7),
    (h.treemapSquarify = x0),
    (h.tsv = a4),
    (h.tsvFormat = Gd),
    (h.tsvFormatBody = Vd),
    (h.tsvFormatRow = Zd),
    (h.tsvFormatRows = Wd),
    (h.tsvFormatValue = Qd),
    (h.tsvParse = Pc),
    (h.tsvParseRows = Xd),
    (h.union = fm),
    (h.unixDay = Qu),
    (h.unixDays = tA),
    (h.utcDay = jr),
    (h.utcDays = nA),
    (h.utcFriday = hs),
    (h.utcFridays = sA),
    (h.utcHour = jo),
    (h.utcHours = K7),
    (h.utcMillisecond = Ke),
    (h.utcMilliseconds = is),
    (h.utcMinute = Qo),
    (h.utcMinutes = Z7),
    (h.utcMonday = ti),
    (h.utcMondays = uA),
    (h.utcMonth = tl),
    (h.utcMonths = mA),
    (h.utcSaturday = ms),
    (h.utcSaturdays = SA),
    (h.utcSecond = Nt),
    (h.utcSeconds = ls),
    (h.utcSunday = tr),
    (h.utcSundays = ys),
    (h.utcThursday = ge),
    (h.utcThursdays = _A),
    (h.utcTickInterval = As),
    (h.utcTicks = ds),
    (h.utcTuesday = ss),
    (h.utcTuesdays = fA),
    (h.utcWednesday = Ss),
    (h.utcWednesdays = cA),
    (h.utcWeek = tr),
    (h.utcWeeks = ys),
    (h.utcYear = At),
    (h.utcYears = bA),
    (h.variance = g1),
    (h.version = lr),
    (h.window = Il),
    (h.xml = _4),
    (h.zip = Qh),
    (h.zoom = IC),
    (h.zoomIdentity = Al),
    (h.zoomTransform = ah);
});
