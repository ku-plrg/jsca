(function (t, n) {
  Symbol('JSCA_1_3');
  typeof exports === 'object' && typeof module !== 'undefined'
    ? n(exports)
    : typeof define === 'function' && define.amd
    ? define(['exports'], n)
    : ((t = typeof globalThis !== 'undefined' ? globalThis : t || self),
      n((t.d3 = t.d3 || {})));
})(this, function (a) {
  Symbol('JSCA_3_15444');
  ('use strict');
  var h = '7.9.0';
  function f(t, n) {
    Symbol('JSCA_6_8');
    return t == null || n == null
      ? NaN
      : t < n
      ? -1
      : t > n
      ? 1
      : t >= n
      ? 0
      : NaN;
  }
  function y(t, n) {
    Symbol('JSCA_9_11');
    return t == null || n == null
      ? NaN
      : n < t
      ? -1
      : n > t
      ? 1
      : n >= t
      ? 0
      : NaN;
  }
  function b(e) {
    Symbol('JSCA_12_52');
    let i, l, a;
    if (e.length !== 2) {
      i = f;
      l = (t, n) => f(e(t), n);
      a = (t, n) => e(t) - n;
    } else {
      i = e === f || e === y ? e : m;
      l = e;
      a = e;
    }
    function u(t, n, e = 0, r = t.length) {
      Symbol('JSCA_23_32');
      if (e < r) {
        if (i(n, n) !== 0) return r;
        do {
          const o = (e + r) >>> 1;
          if (l(t[o], n) < 0) e = o + 1;
          else r = o;
        } while (e < r);
      }
      return e;
    }
    function t(t, n, e = 0, r = t.length) {
      Symbol('JSCA_33_42');
      if (e < r) {
        if (i(n, n) !== 0) return r;
        do {
          const o = (e + r) >>> 1;
          if (l(t[o], n) <= 0) e = o + 1;
          else r = o;
        } while (e < r);
      }
      return e;
    }
    function n(t, n, e = 0, r = t.length) {
      Symbol('JSCA_43_46');
      const o = u(t, n, e, r - 1);
      return o > e && a(t[o - 1], n) > -a(t[o], n) ? o - 1 : o;
    }
    return { left: u, center: n, right: t };
  }
  function m() {
    Symbol('JSCA_53_55');
    return 0;
  }
  function A(t) {
    Symbol('JSCA_56_58');
    return t === null ? NaN : +t;
  }
  function* J(e, r) {
    Symbol('JSCA_59_74');
    if (r === undefined) {
      for (let t of e) {
        if (t != null && (t = +t) >= t) {
          yield t;
        }
      }
    } else {
      let n = -1;
      for (let t of e) {
        if ((t = r(t, ++n, e)) != null && (t = +t) >= t) {
          yield t;
        }
      }
    }
  }
  const v = b(f);
  const x = v.right;
  const w = v.left;
  const M = b(A).center;
  var T = x;
  function k(t, n) {
    Symbol('JSCA_80_91');
    if (!((n = +n) >= 0)) throw new RangeError('invalid r');
    let e = t.length;
    if (!((e = Math.floor(e)) >= 0)) throw new RangeError('invalid length');
    if (!e || !n) return t;
    const r = tt(n);
    const o = t.slice();
    r(t, o, 0, e, 1);
    r(o, t, 0, e, 1);
    r(t, o, 0, e, 1);
    return t;
  }
  const E = W(tt);
  const Y = W(Q);
  function W(f) {
    Symbol('JSCA_94_123');
    return function (t, n, e = n) {
      Symbol('JSCA_95_122');
      if (!((n = +n) >= 0)) throw new RangeError('invalid rx');
      if (!((e = +e) >= 0)) throw new RangeError('invalid ry');
      let { data: r, width: o, height: i } = t;
      if (!((o = Math.floor(o)) >= 0)) throw new RangeError('invalid width');
      if (!((i = Math.floor(i !== undefined ? i : r.length / o)) >= 0))
        throw new RangeError('invalid height');
      if (!o || !i || (!n && !e)) return t;
      const l = n && f(n);
      const a = e && f(e);
      const u = r.slice();
      if (l && a) {
        Z(l, u, r, o, i);
        Z(l, r, u, o, i);
        Z(l, u, r, o, i);
        K(a, r, u, o, i);
        K(a, u, r, o, i);
        K(a, r, u, o, i);
      } else if (l) {
        Z(l, r, u, o, i);
        Z(l, u, r, o, i);
        Z(l, r, u, o, i);
      } else if (a) {
        K(a, r, u, o, i);
        K(a, u, r, o, i);
        K(a, r, u, o, i);
      }
      return t;
    };
  }
  function Z(e, r, o, i, l) {
    Symbol('JSCA_124_128');
    for (let t = 0, n = i * l; t < n; ) {
      e(r, o, t, (t += i), 1);
    }
  }
  function K(e, r, o, i, l) {
    Symbol('JSCA_129_133');
    for (let t = 0, n = i * l; t < i; ++t) {
      e(r, o, t, t + n, i);
    }
  }
  function Q(t) {
    Symbol('JSCA_134_143');
    const i = tt(t);
    return (t, n, e, r, o) => {
      (e <<= 2), (r <<= 2), (o <<= 2);
      i(t, n, e + 0, r + 0, o);
      i(t, n, e + 1, r + 1, o);
      i(t, n, e + 2, r + 2, o);
      i(t, n, e + 3, r + 3, o);
    };
  }
  function tt(t) {
    Symbol('JSCA_144_163');
    const n = Math.floor(t);
    if (n === t) return nt(t);
    const _ = t - n;
    const c = 2 * t + 1;
    return (e, r, o, i, l) => {
      if (!((i -= l) >= o)) return;
      let a = n * r[o];
      const u = l * n;
      const f = u + l;
      for (let t = o, n = o + u; t < n; t += l) {
        a += r[Math.min(i, t)];
      }
      for (let t = o, n = i; t <= n; t += l) {
        a += r[Math.min(i, t + u)];
        e[t] = (a + _ * (r[Math.max(o, t - f)] + r[Math.min(i, t + f)])) / c;
        a -= r[Math.max(o, t - u)];
      }
    };
  }
  function nt(t) {
    Symbol('JSCA_164_179');
    const f = 2 * t + 1;
    return (e, r, o, i, l) => {
      if (!((i -= l) >= o)) return;
      let a = t * r[o];
      const u = l * t;
      for (let t = o, n = o + u; t < n; t += l) {
        a += r[Math.min(i, t)];
      }
      for (let t = o, n = i; t <= n; t += l) {
        a += r[Math.min(i, t + u)];
        e[t] = a / f;
        a -= r[Math.max(o, t - u)];
      }
    };
  }
  function et(e, r) {
    Symbol('JSCA_180_197');
    let o = 0;
    if (r === undefined) {
      for (let t of e) {
        if (t != null && (t = +t) >= t) {
          ++o;
        }
      }
    } else {
      let n = -1;
      for (let t of e) {
        if ((t = r(t, ++n, e)) != null && (t = +t) >= t) {
          ++o;
        }
      }
    }
    return o;
  }
  function rt(t) {
    Symbol('JSCA_198_200');
    return t.length | 0;
  }
  function ot(t) {
    Symbol('JSCA_201_203');
    return !(t > 0);
  }
  function it(t) {
    Symbol('JSCA_204_206');
    return typeof t !== 'object' || 'length' in t ? t : Array.from(t);
  }
  function lt(n) {
    Symbol('JSCA_207_209');
    return (t) => n(...t);
  }
  function at(...e) {
    Symbol('JSCA_210_226');
    const n = typeof e[e.length - 1] === 'function' && lt(e.pop());
    e = e.map(it);
    const r = e.map(rt);
    const o = e.length - 1;
    const i = new Array(o + 1).fill(0);
    const l = [];
    if (o < 0 || r.some(ot)) return l;
    while (true) {
      l.push(i.map((t, n) => e[n][t]));
      let t = o;
      while (++i[t] === r[t]) {
        if (t === 0) return n ? l.map(n) : l;
        i[t--] = 0;
      }
    }
  }
  function ut(n, e) {
    Symbol('JSCA_227_230');
    var r = 0,
      o = 0;
    return Float64Array.from(
      n,
      e === undefined ? (t) => (r += +t || 0) : (t) => (r += +e(t, o++, n) || 0)
    );
  }
  function ft(e, r) {
    Symbol('JSCA_231_255');
    let o = 0;
    let i;
    let l = 0;
    let a = 0;
    if (r === undefined) {
      for (let t of e) {
        if (t != null && (t = +t) >= t) {
          i = t - l;
          l += i / ++o;
          a += i * (t - l);
        }
      }
    } else {
      let n = -1;
      for (let t of e) {
        if ((t = r(t, ++n, e)) != null && (t = +t) >= t) {
          i = t - l;
          l += i / ++o;
          a += i * (t - l);
        }
      }
    }
    if (o > 1) return a / (o - 1);
  }
  function _t(t, n) {
    Symbol('JSCA_256_259');
    const e = ft(t, n);
    return e ? Math.sqrt(e) : e;
  }
  function ct(e, r) {
    Symbol('JSCA_260_288');
    let o;
    let i;
    if (r === undefined) {
      for (const t of e) {
        if (t != null) {
          if (o === undefined) {
            if (t >= t) o = i = t;
          } else {
            if (o > t) o = t;
            if (i < t) i = t;
          }
        }
      }
    } else {
      let n = -1;
      for (let t of e) {
        if ((t = r(t, ++n, e)) != null) {
          if (o === undefined) {
            if (t >= t) o = i = t;
          } else {
            if (o > t) o = t;
            if (i < t) i = t;
          }
        }
      }
    }
    return [o, i];
  }
  class P {
    constructor() {
      Symbol('JSCA_290_293');
      this._partials = new Float64Array(32);
      this._n = 0;
    }
    add(e) {
      Symbol('JSCA_294_305');
      const r = this._partials;
      let o = 0;
      for (let n = 0; n < this._n && n < 32; n++) {
        const t = r[n],
          i = e + t,
          l = Math.abs(e) < Math.abs(t) ? e - (i - t) : t - (i - e);
        if (l) r[o++] = l;
        e = i;
      }
      r[o] = e;
      this._n = o + 1;
      return this;
    }
    valueOf() {
      Symbol('JSCA_306_325');
      const t = this._partials;
      let n = this._n,
        e,
        r,
        o,
        i = 0;
      if (n > 0) {
        i = t[--n];
        while (n > 0) {
          e = i;
          r = t[--n];
          i = e + r;
          o = r - (i - e);
          if (o) break;
        }
        if (n > 0 && ((o < 0 && t[n - 1] < 0) || (o > 0 && t[n - 1] > 0))) {
          r = o * 2;
          e = i + r;
          if (r == e - i) i = e;
        }
      }
      return i;
    }
  }
  function st(e, r) {
    Symbol('JSCA_327_344');
    const o = new P();
    if (r === undefined) {
      for (let t of e) {
        if ((t = +t)) {
          o.add(t);
        }
      }
    } else {
      let n = -1;
      for (let t of e) {
        if ((t = +r(t, ++n, e))) {
          o.add(t);
        }
      }
    }
    return +o;
  }
  function St(n, e) {
    Symbol('JSCA_345_349');
    const r = new P();
    let o = -1;
    return Float64Array.from(
      n,
      e === undefined ? (t) => r.add(+t || 0) : (t) => r.add(+e(t, ++o, n) || 0)
    );
  }
  class ht extends Map {
    constructor(t, n = At) {
      Symbol('JSCA_351_362');
      super();
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: n },
      });
      if (t != null) for (const [n, e] of t) this.set(n, e);
    }
    get(t) {
      Symbol('JSCA_363_365');
      return super.get(bt(this, t));
    }
    has(t) {
      Symbol('JSCA_366_368');
      return super.has(bt(this, t));
    }
    set(t, n) {
      Symbol('JSCA_369_371');
      return super.set(mt(this, t), n);
    }
    delete(t) {
      Symbol('JSCA_372_374');
      return super.delete(dt(this, t));
    }
  }
  class yt extends Set {
    constructor(t, n = At) {
      Symbol('JSCA_377_388');
      super();
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: n },
      });
      if (t != null) for (const e of t) this.add(e);
    }
    has(t) {
      Symbol('JSCA_389_391');
      return super.has(bt(this, t));
    }
    add(t) {
      Symbol('JSCA_392_394');
      return super.add(mt(this, t));
    }
    delete(t) {
      Symbol('JSCA_395_397');
      return super.delete(dt(this, t));
    }
  }
  function bt({ _intern: t, _key: n }, e) {
    Symbol('JSCA_399_402');
    const r = n(e);
    return t.has(r) ? t.get(r) : e;
  }
  function mt({ _intern: t, _key: n }, e) {
    Symbol('JSCA_403_408');
    const r = n(e);
    if (t.has(r)) return t.get(r);
    t.set(r, e);
    return e;
  }
  function dt({ _intern: t, _key: n }, e) {
    Symbol('JSCA_409_416');
    const r = n(e);
    if (t.has(r)) {
      e = t.get(r);
      t.delete(r);
    }
    return e;
  }
  function At(t) {
    Symbol('JSCA_417_419');
    return t !== null && typeof t === 'object' ? t.valueOf() : t;
  }
  function Ct(t) {
    Symbol('JSCA_420_422');
    return t;
  }
  function Jt(t, ...n) {
    Symbol('JSCA_423_425');
    return Nt(t, Ct, Ct, n);
  }
  function pt(t, ...n) {
    Symbol('JSCA_426_428');
    return Nt(t, Array.from, Ct, n);
  }
  function gt(e, r) {
    Symbol('JSCA_429_434');
    for (let t = 1, n = r.length; t < n; ++t) {
      e = e.flatMap((e) => e.pop().map(([t, n]) => [...e, t, n]));
    }
    return e;
  }
  function vt(t, ...n) {
    Symbol('JSCA_435_437');
    return gt(pt(t, ...n), n);
  }
  function xt(t, n, ...e) {
    Symbol('JSCA_438_440');
    return gt(Mt(t, n, ...e), e);
  }
  function wt(t, n, ...e) {
    Symbol('JSCA_441_443');
    return Nt(t, Ct, n, e);
  }
  function Mt(t, n, ...e) {
    Symbol('JSCA_444_446');
    return Nt(t, Array.from, n, e);
  }
  function Tt(t, ...n) {
    Symbol('JSCA_447_449');
    return Nt(t, Ct, Et, n);
  }
  function kt(t, ...n) {
    Symbol('JSCA_450_452');
    return Nt(t, Array.from, Et, n);
  }
  function Et(t) {
    Symbol('JSCA_453_456');
    if (t.length !== 1) throw new Error('duplicate key');
    return t[0];
  }
  function Nt(t, u, f, _) {
    Symbol('JSCA_457_473');
    return (function t(n, e) {
      Symbol('JSCA_458_472');
      if (e >= _.length) return f(n);
      const r = new ht();
      const o = _[e++];
      let i = -1;
      for (const l of n) {
        const a = o(l, ++i, n);
        const t = r.get(a);
        if (t) t.push(l);
        else r.set(a, [l]);
      }
      for (const [a, n] of r) {
        r.set(a, t(n, e));
      }
      return u(r);
    })(t, 0);
  }
  function Pt(n, t) {
    Symbol('JSCA_474_476');
    return Array.from(t, (t) => n[t]);
  }
  function zt(n, ...o) {
    Symbol('JSCA_477_498');
    if (typeof n[Symbol.iterator] !== 'function')
      throw new TypeError('values is not iterable');
    n = Array.from(n);
    let [e] = o;
    if ((e && e.length !== 2) || o.length > 1) {
      const t = Uint32Array.from(n, (t, n) => n);
      if (o.length > 1) {
        o = o.map((t) => n.map(t));
        t.sort((e, r) => {
          for (const n of o) {
            const t = $t(n[e], n[r]);
            if (t) return t;
          }
        });
      } else {
        e = n.map(e);
        t.sort((t, n) => $t(e[t], e[n]));
      }
      return Pt(n, t);
    }
    return n.sort(It(e));
  }
  function It(r = f) {
    Symbol('JSCA_499_507');
    if (r === f) return $t;
    if (typeof r !== 'function')
      throw new TypeError('compare is not a function');
    return (t, n) => {
      const e = r(t, n);
      if (e || e === 0) return e;
      return (r(n, n) === 0) - (r(t, t) === 0);
    };
  }
  function $t(t, n) {
    Symbol('JSCA_508_510');
    return (
      (t == null || !(t >= t)) - (n == null || !(n >= n)) ||
      (t < n ? -1 : t > n ? 1 : 0)
    );
  }
  function Dt(t, o, n) {
    Symbol('JSCA_511_513');
    return (
      o.length !== 2
        ? zt(wt(t, o, n), ([t, n], [e, r]) => f(n, r) || f(t, e))
        : zt(Jt(t, n), ([t, n], [e, r]) => o(n, r) || f(t, e))
    ).map(([t]) => t);
  }
  var Rt = Array.prototype;
  var Ft = Rt.slice;
  function qt(t) {
    Symbol('JSCA_516_518');
    return () => t;
  }
  const Ut = Math.sqrt(50),
    Ot = Math.sqrt(10),
    Bt = Math.sqrt(2);
  function Yt(t, n, e) {
    Symbol('JSCA_520_539');
    const r = (n - t) / Math.max(0, e),
      o = Math.floor(Math.log10(r)),
      i = r / Math.pow(10, o),
      l = i >= Ut ? 10 : i >= Ot ? 5 : i >= Bt ? 2 : 1;
    let a, u, f;
    if (o < 0) {
      f = Math.pow(10, -o) / l;
      a = Math.round(t * f);
      u = Math.round(n * f);
      if (a / f < t) ++a;
      if (u / f > n) --u;
      f = -f;
    } else {
      f = Math.pow(10, o) * l;
      a = Math.round(t / f);
      u = Math.round(n / f);
      if (a * f < t) ++a;
      if (u * f > n) --u;
    }
    if (u < a && 0.5 <= e && e < 2) return Yt(t, n, e * 2);
    return [a, u, f];
  }
  function Lt(t, n, e) {
    Symbol('JSCA_540_553');
    (n = +n), (t = +t), (e = +e);
    if (!(e > 0)) return [];
    if (t === n) return [t];
    const r = n < t,
      [o, i, l] = r ? Yt(n, t, e) : Yt(t, n, e);
    if (!(i >= o)) return [];
    const a = i - o + 1,
      u = new Array(a);
    if (r) {
      if (l < 0) for (let t = 0; t < a; ++t) u[t] = (i - t) / -l;
      else for (let t = 0; t < a; ++t) u[t] = (i - t) * l;
    } else {
      if (l < 0) for (let t = 0; t < a; ++t) u[t] = (o + t) / -l;
      else for (let t = 0; t < a; ++t) u[t] = (o + t) * l;
    }
    return u;
  }
  function jt(t, n, e) {
    Symbol('JSCA_554_557');
    (n = +n), (t = +t), (e = +e);
    return Yt(t, n, e)[2];
  }
  function Ht(t, n, e) {
    Symbol('JSCA_558_562');
    (n = +n), (t = +t), (e = +e);
    const r = n < t,
      o = r ? jt(n, t, e) : jt(t, n, e);
    return (r ? -1 : 1) * (o < 0 ? 1 / -o : o);
  }
  function Xt(n, e, r) {
    Symbol('JSCA_563_578');
    let o;
    while (true) {
      const t = jt(n, e, r);
      if (t === o || t === 0 || !isFinite(t)) {
        return [n, e];
      } else if (t > 0) {
        n = Math.floor(n / t) * t;
        e = Math.ceil(e / t) * t;
      } else if (t < 0) {
        n = Math.ceil(n * t) / t;
        e = Math.floor(e * t) / t;
      }
      o = t;
    }
  }
  function Gt(t) {
    Symbol('JSCA_579_581');
    return Math.max(1, Math.ceil(Math.log(et(t)) / Math.LN2) + 1);
  }
  function Vt() {
    Symbol('JSCA_582_655');
    var m = Ct,
      d = ct,
      A = Gt;
    function n(t) {
      Symbol('JSCA_584_644');
      if (!Array.isArray(t)) t = Array.from(t);
      var n,
        e = t.length,
        r,
        o,
        i = new Array(e);
      for (n = 0; n < e; ++n) {
        i[n] = m(t[n], n, t);
      }
      var l = d(i),
        a = l[0],
        u = l[1],
        f = A(i, a, u);
      if (!Array.isArray(f)) {
        const t = u,
          y = +f;
        if (d === ct) [a, u] = Xt(a, u, y);
        f = Lt(a, u, y);
        if (f[0] <= a) o = jt(a, u, y);
        if (f[f.length - 1] >= u) {
          if (t >= u && d === ct) {
            const o = jt(a, u, y);
            if (isFinite(o)) {
              if (o > 0) {
                u = (Math.floor(u / o) + 1) * o;
              } else if (o < 0) {
                u = (Math.ceil(u * -o) + 1) / -o;
              }
            }
          } else {
            f.pop();
          }
        }
      }
      var _ = f.length,
        c = 0,
        s = _;
      while (f[c] <= a) ++c;
      while (f[s - 1] > u) --s;
      if (c || s < _) (f = f.slice(c, s)), (_ = s - c);
      var S = new Array(_ + 1),
        h;
      for (n = 0; n <= _; ++n) {
        h = S[n] = [];
        h.x0 = n > 0 ? f[n - 1] : a;
        h.x1 = n < _ ? f[n] : u;
      }
      if (isFinite(o)) {
        if (o > 0) {
          for (n = 0; n < e; ++n) {
            if ((r = i[n]) != null && a <= r && r <= u) {
              S[Math.min(_, Math.floor((r - a) / o))].push(t[n]);
            }
          }
        } else if (o < 0) {
          for (n = 0; n < e; ++n) {
            if ((r = i[n]) != null && a <= r && r <= u) {
              const b = Math.floor((a - r) * o);
              S[Math.min(_, b + (f[b] <= r))].push(t[n]);
            }
          }
        }
      } else {
        for (n = 0; n < e; ++n) {
          if ((r = i[n]) != null && a <= r && r <= u) {
            S[T(f, r, 0, _)].push(t[n]);
          }
        }
      }
      return S;
    }
    n.value = function (t) {
      Symbol('JSCA_645_647');
      return arguments.length
        ? ((m = typeof t === 'function' ? t : qt(t)), n)
        : m;
    };
    n.domain = function (t) {
      Symbol('JSCA_648_650');
      return arguments.length
        ? ((d = typeof t === 'function' ? t : qt([t[0], t[1]])), n)
        : d;
    };
    n.thresholds = function (t) {
      Symbol('JSCA_651_653');
      return arguments.length
        ? ((A =
            typeof t === 'function'
              ? t
              : qt(Array.isArray(t) ? Ft.call(t) : t)),
          n)
        : A;
    };
    return n;
  }
  function Wt(e, r) {
    Symbol('JSCA_656_673');
    let o;
    if (r === undefined) {
      for (const t of e) {
        if (t != null && (o < t || (o === undefined && t >= t))) {
          o = t;
        }
      }
    } else {
      let n = -1;
      for (let t of e) {
        if (
          (t = r(t, ++n, e)) != null &&
          (o < t || (o === undefined && t >= t))
        ) {
          o = t;
        }
      }
    }
    return o;
  }
  function Zt(n, e) {
    Symbol('JSCA_674_693');
    let r;
    let o = -1;
    let i = -1;
    if (e === undefined) {
      for (const t of n) {
        ++i;
        if (t != null && (r < t || (r === undefined && t >= t))) {
          (r = t), (o = i);
        }
      }
    } else {
      for (let t of n) {
        if (
          (t = e(t, ++i, n)) != null &&
          (r < t || (r === undefined && t >= t))
        ) {
          (r = t), (o = i);
        }
      }
    }
    return o;
  }
  function Kt(e, r) {
    Symbol('JSCA_694_711');
    let o;
    if (r === undefined) {
      for (const t of e) {
        if (t != null && (o > t || (o === undefined && t >= t))) {
          o = t;
        }
      }
    } else {
      let n = -1;
      for (let t of e) {
        if (
          (t = r(t, ++n, e)) != null &&
          (o > t || (o === undefined && t >= t))
        ) {
          o = t;
        }
      }
    }
    return o;
  }
  function Qt(n, e) {
    Symbol('JSCA_712_731');
    let r;
    let o = -1;
    let i = -1;
    if (e === undefined) {
      for (const t of n) {
        ++i;
        if (t != null && (r > t || (r === undefined && t >= t))) {
          (r = t), (o = i);
        }
      }
    } else {
      for (let t of n) {
        if (
          (t = e(t, ++i, n)) != null &&
          (r > t || (r === undefined && t >= t))
        ) {
          (r = t), (o = i);
        }
      }
    }
    return o;
  }
  function tn(e, r, o = 0, i = Infinity, l) {
    Symbol('JSCA_732_764');
    r = Math.floor(r);
    o = Math.floor(Math.max(0, o));
    i = Math.floor(Math.min(e.length - 1, i));
    if (!(o <= r && r <= i)) return e;
    l = l === undefined ? $t : It(l);
    while (i > o) {
      if (i - o > 600) {
        const u = i - o + 1;
        const t = r - o + 1;
        const f = Math.log(u);
        const n = 0.5 * Math.exp((2 * f) / 3);
        const _ =
          0.5 * Math.sqrt((f * n * (u - n)) / u) * (t - u / 2 < 0 ? -1 : 1);
        const c = Math.max(o, Math.floor(r - (t * n) / u + _));
        const s = Math.min(i, Math.floor(r + ((u - t) * n) / u + _));
        tn(e, r, c, s, l);
      }
      const a = e[r];
      let t = o;
      let n = i;
      nn(e, o, r);
      if (l(e[i], a) > 0) nn(e, o, i);
      while (t < n) {
        nn(e, t, n), ++t, --n;
        while (l(e[t], a) < 0) ++t;
        while (l(e[n], a) > 0) --n;
      }
      if (l(e[o], a) === 0) nn(e, o, n);
      else ++n, nn(e, n, i);
      if (n <= r) o = n + 1;
      if (r <= n) i = n - 1;
    }
    return e;
  }
  function nn(t, n, e) {
    Symbol('JSCA_765_769');
    const r = t[n];
    t[n] = t[e];
    t[e] = r;
  }
  function en(n, e = f) {
    Symbol('JSCA_770_792');
    let r;
    let o = false;
    if (e.length === 1) {
      let t;
      for (const i of n) {
        const l = e(i);
        if (o ? f(l, t) > 0 : f(l, l) === 0) {
          r = i;
          t = l;
          o = true;
        }
      }
    } else {
      for (const l of n) {
        if (o ? e(l, r) > 0 : e(l, l) === 0) {
          r = l;
          o = true;
        }
      }
    }
    return r;
  }
  function rn(t, n, e) {
    Symbol('JSCA_793_800');
    t = Float64Array.from(J(t, e));
    if (!(r = t.length) || isNaN((n = +n))) return;
    if (n <= 0 || r < 2) return Kt(t);
    if (n >= 1) return Wt(t);
    var r,
      o = (r - 1) * n,
      i = Math.floor(o),
      l = Wt(tn(t, i).subarray(0, i + 1)),
      a = Kt(t.subarray(i + 1));
    return l + (a - l) * (o - i);
  }
  function on(t, n, e = A) {
    Symbol('JSCA_801_807');
    if (!(r = t.length) || isNaN((n = +n))) return;
    if (n <= 0 || r < 2) return +e(t[0], 0, t);
    if (n >= 1) return +e(t[r - 1], r - 1, t);
    var r,
      o = (r - 1) * n,
      i = Math.floor(o),
      l = +e(t[i], i, t),
      a = +e(t[i + 1], i + 1, t);
    return l + (a - l) * (o - i);
  }
  function ln(e, t, r = A) {
    Symbol('JSCA_808_817');
    if (isNaN((t = +t))) return;
    o = Float64Array.from(e, (t, n) => A(r(e[n], n, e)));
    if (t <= 0) return Qt(o);
    if (t >= 1) return Zt(o);
    var o,
      n = Uint32Array.from(e, (t, n) => n),
      i = o.length - 1,
      l = Math.floor(i * t);
    tn(n, l, 0, i, (t, n) => $t(o[t], o[n]));
    l = en(n.subarray(0, l + 1), (t) => o[t]);
    return l >= 0 ? l : -1;
  }
  function an(t, n, e) {
    Symbol('JSCA_818_821');
    const r = et(t),
      o = rn(t, 0.75) - rn(t, 0.25);
    return r && o ? Math.ceil((e - n) / (2 * o * Math.pow(r, -1 / 3))) : 1;
  }
  function un(t, n, e) {
    Symbol('JSCA_822_825');
    const r = et(t),
      o = _t(t);
    return r && o ? Math.ceil(((e - n) * Math.cbrt(r)) / (3.49 * o)) : 1;
  }
  function fn(e, r) {
    Symbol('JSCA_826_844');
    let o = 0;
    let i = 0;
    if (r === undefined) {
      for (let t of e) {
        if (t != null && (t = +t) >= t) {
          ++o, (i += t);
        }
      }
    } else {
      let n = -1;
      for (let t of e) {
        if ((t = r(t, ++n, e)) != null && (t = +t) >= t) {
          ++o, (i += t);
        }
      }
    }
    if (o) return i / o;
  }
  function _n(t, n) {
    Symbol('JSCA_845_847');
    return rn(t, 0.5, n);
  }
  function cn(t, n) {
    Symbol('JSCA_848_850');
    return ln(t, 0.5, n);
  }
  function* sn(n) {
    Symbol('JSCA_851_855');
    for (const t of n) {
      yield* t;
    }
  }
  function Sn(t) {
    Symbol('JSCA_856_858');
    return Array.from(sn(t));
  }
  function hn(e, r) {
    Symbol('JSCA_859_884');
    const o = new ht();
    if (r === undefined) {
      for (let t of e) {
        if (t != null && t >= t) {
          o.set(t, (o.get(t) || 0) + 1);
        }
      }
    } else {
      let n = -1;
      for (let t of e) {
        if ((t = r(t, ++n, e)) != null && t >= t) {
          o.set(t, (o.get(t) || 0) + 1);
        }
      }
    }
    let n;
    let i = 0;
    for (const [l, t] of o) {
      if (t > i) {
        i = t;
        n = l;
      }
    }
    return n;
  }
  function yn(t, n = bn) {
    Symbol('JSCA_885_895');
    const e = [];
    let r;
    let o = false;
    for (const i of t) {
      if (o) e.push(n(r, i));
      r = i;
      o = true;
    }
    return e;
  }
  function bn(t, n) {
    Symbol('JSCA_896_898');
    return [t, n];
  }
  function mn(t, n, e) {
    Symbol('JSCA_899_906');
    (t = +t),
      (n = +n),
      (e = (o = arguments.length) < 2 ? ((n = t), (t = 0), 1) : o < 3 ? 1 : +e);
    var r = -1,
      o = Math.max(0, Math.ceil((n - t) / e)) | 0,
      i = new Array(o);
    while (++r < o) {
      i[r] = t + r * e;
    }
    return i;
  }
  function dn(t, e = f) {
    Symbol('JSCA_907_926');
    if (typeof t[Symbol.iterator] !== 'function')
      throw new TypeError('values is not iterable');
    let r = Array.from(t);
    const o = new Float64Array(r.length);
    if (e.length !== 2) (r = r.map(e)), (e = f);
    const i = (t, n) => e(r[t], r[n]);
    let l, a;
    t = Uint32Array.from(r, (t, n) => n);
    t.sort(e === f ? (t, n) => $t(r[t], r[n]) : It(i));
    t.forEach((t, n) => {
      const e = i(t, l === undefined ? t : l);
      if (e >= 0) {
        if (l === undefined || e > 0) (l = t), (a = n);
        o[t] = a;
      } else {
        o[t] = NaN;
      }
    });
    return o;
  }
  function An(n, e = f) {
    Symbol('JSCA_927_949');
    let r;
    let o = false;
    if (e.length === 1) {
      let t;
      for (const i of n) {
        const l = e(i);
        if (o ? f(l, t) < 0 : f(l, l) === 0) {
          r = i;
          t = l;
          o = true;
        }
      }
    } else {
      for (const l of n) {
        if (o ? e(l, r) < 0 : e(l, l) === 0) {
          r = l;
          o = true;
        }
      }
    }
    return r;
  }
  function Cn(t, n = f) {
    Symbol('JSCA_950_963');
    if (n.length === 1) return Qt(t, n);
    let e;
    let r = -1;
    let o = -1;
    for (const i of t) {
      ++o;
      if (r < 0 ? n(i, i) === 0 : n(i, e) < 0) {
        e = i;
        r = o;
      }
    }
    return r;
  }
  function Jn(t, n = f) {
    Symbol('JSCA_964_977');
    if (n.length === 1) return Zt(t, n);
    let e;
    let r = -1;
    let o = -1;
    for (const i of t) {
      ++o;
      if (r < 0 ? n(i, i) === 0 : n(i, e) > 0) {
        e = i;
        r = o;
      }
    }
    return r;
  }
  function pn(t, n) {
    Symbol('JSCA_978_981');
    const e = Cn(t, n);
    return e < 0 ? undefined : e;
  }
  var gn = vn(Math.random);
  function vn(a) {
    Symbol('JSCA_983_993');
    return function t(n, e = 0, r = n.length) {
      Symbol('JSCA_984_992');
      let o = r - (e = +e);
      while (o) {
        const i = (a() * o--) | 0,
          l = n[o + e];
        n[o + e] = n[i + e];
        n[i + e] = l;
      }
      return n;
    };
  }
  function xn(e, r) {
    Symbol('JSCA_994_1011');
    let o = 0;
    if (r === undefined) {
      for (let t of e) {
        if ((t = +t)) {
          o += t;
        }
      }
    } else {
      let n = -1;
      for (let t of e) {
        if ((t = +r(t, ++n, e))) {
          o += t;
        }
      }
    }
    return o;
  }
  function wn(t) {
    Symbol('JSCA_1012_1020');
    if (!(i = t.length)) return [];
    for (var n = -1, e = Kt(t, Mn), r = new Array(e); ++n < e; ) {
      for (var o = -1, i, l = (r[n] = new Array(i)); ++o < i; ) {
        l[o] = t[o][n];
      }
    }
    return r;
  }
  function Mn(t) {
    Symbol('JSCA_1021_1023');
    return t.length;
  }
  function Tn() {
    Symbol('JSCA_1024_1026');
    return wn(arguments);
  }
  function kn(t, n) {
    Symbol('JSCA_1027_1036');
    if (typeof n !== 'function') throw new TypeError('test is not a function');
    let e = -1;
    for (const r of t) {
      if (!n(r, ++e, t)) {
        return false;
      }
    }
    return true;
  }
  function En(t, n) {
    Symbol('JSCA_1037_1046');
    if (typeof n !== 'function') throw new TypeError('test is not a function');
    let e = -1;
    for (const r of t) {
      if (n(r, ++e, t)) {
        return true;
      }
    }
    return false;
  }
  function Nn(t, n) {
    Symbol('JSCA_1047_1057');
    if (typeof n !== 'function') throw new TypeError('test is not a function');
    const e = [];
    let r = -1;
    for (const o of t) {
      if (n(o, ++r, t)) {
        e.push(o);
      }
    }
    return e;
  }
  function Pn(e, r) {
    Symbol('JSCA_1058_1062');
    if (typeof e[Symbol.iterator] !== 'function')
      throw new TypeError('values is not iterable');
    if (typeof r !== 'function')
      throw new TypeError('mapper is not a function');
    return Array.from(e, (t, n) => r(t, n, e));
  }
  function zn(t, n, e) {
    Symbol('JSCA_1063_1076');
    if (typeof n !== 'function')
      throw new TypeError('reducer is not a function');
    const r = t[Symbol.iterator]();
    let o,
      i,
      l = -1;
    if (arguments.length < 3) {
      ({ done: o, value: e } = r.next());
      if (o) return;
      ++l;
    }
    while ((({ done: o, value: i } = r.next()), !o)) {
      e = n(e, i, ++l, t);
    }
    return e;
  }
  function In(t) {
    Symbol('JSCA_1077_1080');
    if (typeof t[Symbol.iterator] !== 'function')
      throw new TypeError('values is not iterable');
    return Array.from(t).reverse();
  }
  function $n(t, ...n) {
    Symbol('JSCA_1081_1089');
    t = new yt(t);
    for (const e of n) {
      for (const r of e) {
        t.delete(r);
      }
    }
    return t;
  }
  function Dn(t, n) {
    Symbol('JSCA_1090_1102');
    const e = n[Symbol.iterator](),
      r = new yt();
    for (const o of t) {
      if (r.has(o)) return false;
      let t, n;
      while (({ value: t, done: n } = e.next())) {
        if (n) break;
        if (Object.is(o, t)) return false;
        r.add(t);
      }
    }
    return true;
  }
  function Rn(t, ...n) {
    Symbol('JSCA_1103_1115');
    t = new yt(t);
    n = n.map(Fn);
    t: for (const e of t) {
      for (const r of n) {
        if (!r.has(e)) {
          t.delete(e);
          continue t;
        }
      }
    }
    return t;
  }
  function Fn(t) {
    Symbol('JSCA_1116_1118');
    return t instanceof yt ? t : new yt(t);
  }
  function qn(t, n) {
    Symbol('JSCA_1119_1133');
    const e = t[Symbol.iterator](),
      r = new Set();
    for (const o of n) {
      const i = Un(o);
      if (r.has(i)) continue;
      let t, n;
      while (({ value: t, done: n } = e.next())) {
        if (n) return false;
        const l = Un(t);
        r.add(l);
        if (Object.is(i, l)) break;
      }
    }
    return true;
  }
  function Un(t) {
    Symbol('JSCA_1134_1136');
    return t !== null && typeof t === 'object' ? t.valueOf() : t;
  }
  function On(t, n) {
    Symbol('JSCA_1137_1139');
    return qn(n, t);
  }
  function Bn(...t) {
    Symbol('JSCA_1140_1148');
    const n = new yt();
    for (const e of t) {
      for (const r of e) {
        n.add(r);
      }
    }
    return n;
  }
  function Yn(t) {
    Symbol('JSCA_1149_1151');
    return t;
  }
  var Ln = 1,
    jn = 2,
    Hn = 3,
    Xn = 4,
    Gn = 1e-6;
  function Vn(t) {
    Symbol('JSCA_1153_1155');
    return 'translate(' + t + ',0)';
  }
  function Wn(t) {
    Symbol('JSCA_1156_1158');
    return 'translate(0,' + t + ')';
  }
  function Zn(n) {
    Symbol('JSCA_1159_1161');
    return (t) => +n(t);
  }
  function Kn(n, e) {
    Symbol('JSCA_1162_1166');
    e = Math.max(0, n.bandwidth() - e * 2) / 2;
    if (n.round()) e = Math.round(e);
    return (t) => +n(t) + e;
  }
  function Qn() {
    Symbol('JSCA_1167_1169');
    return !this.__axis;
  }
  function te(y, b) {
    Symbol('JSCA_1170_1234');
    var m = [],
      d = null,
      A = null,
      C = 6,
      J = 6,
      p = 3,
      g =
        typeof window !== 'undefined' && window.devicePixelRatio > 1 ? 0 : 0.5,
      v = y === Ln || y === Xn ? -1 : 1,
      x = y === Xn || y === jn ? 'x' : 'y',
      w = y === Ln || y === Hn ? Vn : Wn;
    function n(t) {
      Symbol('JSCA_1172_1202');
      var n = d == null ? (b.ticks ? b.ticks.apply(b, m) : b.domain()) : d,
        e = A == null ? (b.tickFormat ? b.tickFormat.apply(b, m) : Yn) : A,
        r = Math.max(C, 0) + p,
        o = b.range(),
        i = +o[0] + g,
        l = +o[o.length - 1] + g,
        a = (b.bandwidth ? Kn : Zn)(b.copy(), g),
        u = t.selection ? t.selection() : t,
        f = u.selectAll('.domain').data([null]),
        _ = u.selectAll('.tick').data(n, b).order(),
        c = _.exit(),
        s = _.enter().append('g').attr('class', 'tick'),
        S = _.select('line'),
        h = _.select('text');
      f = f.merge(
        f
          .enter()
          .insert('path', '.tick')
          .attr('class', 'domain')
          .attr('stroke', 'currentColor')
      );
      _ = _.merge(s);
      S = S.merge(
        s
          .append('line')
          .attr('stroke', 'currentColor')
          .attr(x + '2', v * C)
      );
      h = h.merge(
        s
          .append('text')
          .attr('fill', 'currentColor')
          .attr(x, v * r)
          .attr('dy', y === Ln ? '0em' : y === Hn ? '0.71em' : '0.32em')
      );
      if (t !== u) {
        f = f.transition(t);
        _ = _.transition(t);
        S = S.transition(t);
        h = h.transition(t);
        c = c
          .transition(t)
          .attr('opacity', Gn)
          .attr('transform', function (t) {
            Symbol('JSCA_1183_1185');
            return isFinite((t = a(t)))
              ? w(t + g)
              : this.getAttribute('transform');
          });
        s.attr('opacity', Gn).attr('transform', function (t) {
          Symbol('JSCA_1186_1189');
          var n = this.parentNode.__axis;
          return w((n && isFinite((n = n(t))) ? n : a(t)) + g);
        });
      }
      c.remove();
      f.attr(
        'd',
        y === Xn || y === jn
          ? J
            ? 'M' + v * J + ',' + i + 'H' + g + 'V' + l + 'H' + v * J
            : 'M' + g + ',' + i + 'V' + l
          : J
          ? 'M' + i + ',' + v * J + 'V' + g + 'H' + l + 'V' + v * J
          : 'M' + i + ',' + g + 'H' + l
      );
      _.attr('opacity', 1).attr('transform', function (t) {
        Symbol('JSCA_1193_1195');
        return w(a(t) + g);
      });
      S.attr(x + '2', v * C);
      h.attr(x, v * r).text(e);
      u.filter(Qn)
        .attr('fill', 'none')
        .attr('font-size', 10)
        .attr('font-family', 'sans-serif')
        .attr('text-anchor', y === jn ? 'start' : y === Xn ? 'end' : 'middle');
      u.each(function () {
        Symbol('JSCA_1199_1201');
        this.__axis = a;
      });
    }
    n.scale = function (t) {
      Symbol('JSCA_1203_1205');
      return arguments.length ? ((b = t), n) : b;
    };
    n.ticks = function () {
      Symbol('JSCA_1206_1208');
      return (m = Array.from(arguments)), n;
    };
    n.tickArguments = function (t) {
      Symbol('JSCA_1209_1211');
      return arguments.length
        ? ((m = t == null ? [] : Array.from(t)), n)
        : m.slice();
    };
    n.tickValues = function (t) {
      Symbol('JSCA_1212_1214');
      return arguments.length
        ? ((d = t == null ? null : Array.from(t)), n)
        : d && d.slice();
    };
    n.tickFormat = function (t) {
      Symbol('JSCA_1215_1217');
      return arguments.length ? ((A = t), n) : A;
    };
    n.tickSize = function (t) {
      Symbol('JSCA_1218_1220');
      return arguments.length ? ((C = J = +t), n) : C;
    };
    n.tickSizeInner = function (t) {
      Symbol('JSCA_1221_1223');
      return arguments.length ? ((C = +t), n) : C;
    };
    n.tickSizeOuter = function (t) {
      Symbol('JSCA_1224_1226');
      return arguments.length ? ((J = +t), n) : J;
    };
    n.tickPadding = function (t) {
      Symbol('JSCA_1227_1229');
      return arguments.length ? ((p = +t), n) : p;
    };
    n.offset = function (t) {
      Symbol('JSCA_1230_1232');
      return arguments.length ? ((g = +t), n) : g;
    };
    return n;
  }
  function ne(t) {
    Symbol('JSCA_1235_1237');
    return te(Ln, t);
  }
  function ee(t) {
    Symbol('JSCA_1238_1240');
    return te(jn, t);
  }
  function re(t) {
    Symbol('JSCA_1241_1243');
    return te(Hn, t);
  }
  function oe(t) {
    Symbol('JSCA_1244_1246');
    return te(Xn, t);
  }
  var ie = { value: () => {} };
  function le() {
    Symbol('JSCA_1250_1256');
    for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
      if (!(r = arguments[t] + '') || r in e || /[\s.]/.test(r))
        throw new Error('illegal type: ' + r);
      e[r] = [];
    }
    return new ae(e);
  }
  function ae(t) {
    Symbol('JSCA_1257_1259');
    this._ = t;
  }
  function ue(t, r) {
    Symbol('JSCA_1260_1270');
    return t
      .trim()
      .split(/^|\s+/)
      .map(function (t) {
        Symbol('JSCA_1261_1269');
        var n = '',
          e = t.indexOf('.');
        if (e >= 0) (n = t.slice(e + 1)), (t = t.slice(0, e));
        if (t && !r.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
        return { type: t, name: n };
      });
  }
  ae.prototype = le.prototype = {
    constructor: ae,
    on: function (t, n) {
      Symbol('JSCA_1273_1284');
      var e = this._,
        r = ue(t + '', e),
        o,
        i = -1,
        l = r.length;
      if (arguments.length < 2) {
        while (++i < l)
          if ((o = (t = r[i]).type) && (o = fe(e[o], t.name))) return o;
        return;
      }
      if (n != null && typeof n !== 'function')
        throw new Error('invalid callback: ' + n);
      while (++i < l) {
        if ((o = (t = r[i]).type)) e[o] = _e(e[o], t.name, n);
        else if (n == null) for (o in e) e[o] = _e(e[o], t.name, null);
      }
      return this;
    },
    copy: function () {
      Symbol('JSCA_1285_1289');
      var t = {},
        n = this._;
      for (var e in n) t[e] = n[e].slice();
      return new ae(t);
    },
    call: function (t, n) {
      Symbol('JSCA_1290_1294');
      if ((o = arguments.length - 2) > 0)
        for (var e = new Array(o), r = 0, o, i; r < o; ++r)
          e[r] = arguments[r + 2];
      if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
      for (i = this._[t], r = 0, o = i.length; r < o; ++r)
        i[r].value.apply(n, e);
    },
    apply: function (t, n, e) {
      Symbol('JSCA_1295_1298');
      if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
      for (var r = this._[t], o = 0, i = r.length; o < i; ++o)
        r[o].value.apply(n, e);
    },
  };
  function fe(t, n) {
    Symbol('JSCA_1300_1306');
    for (var e = 0, r = t.length, o; e < r; ++e) {
      if ((o = t[e]).name === n) {
        return o.value;
      }
    }
  }
  function _e(t, n, e) {
    Symbol('JSCA_1307_1319');
    for (var r = 0, o = t.length; r < o; ++r) {
      if (t[r].name === n) {
        (t[r] = ie), (t = t.slice(0, r).concat(t.slice(r + 1)));
        break;
      }
    }
    if (e != null) t.push({ name: n, value: e });
    return t;
  }
  var ce = 'http://www.w3.org/1999/xhtml';
  var se = {
    svg: 'http://www.w3.org/2000/svg',
    xhtml: ce,
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xmlns: 'http://www.w3.org/2000/xmlns/',
  };
  function Se(t) {
    Symbol('JSCA_1328_1335');
    var n = (t += ''),
      e = n.indexOf(':');
    if (e >= 0 && (n = t.slice(0, e)) !== 'xmlns') t = t.slice(e + 1);
    return se.hasOwnProperty(n) ? { space: se[n], local: t } : t;
  }
  function he(e) {
    Symbol('JSCA_1336_1341');
    return function () {
      Symbol('JSCA_1337_1340');
      var t = this.ownerDocument,
        n = this.namespaceURI;
      return n === ce && t.documentElement.namespaceURI === ce
        ? t.createElement(e)
        : t.createElementNS(n, e);
    };
  }
  function ye(t) {
    Symbol('JSCA_1342_1346');
    return function () {
      Symbol('JSCA_1343_1345');
      return this.ownerDocument.createElementNS(t.space, t.local);
    };
  }
  function be(t) {
    Symbol('JSCA_1347_1350');
    var n = Se(t);
    return (n.local ? ye : he)(n);
  }
  function me() {
    Symbol('JSCA_1351_1351');
  }
  function de(t) {
    Symbol('JSCA_1352_1356');
    return t == null
      ? me
      : function () {
          Symbol('JSCA_1353_1355');
          return this.querySelector(t);
        };
  }
  function Ae(t) {
    Symbol('JSCA_1357_1368');
    if (typeof t !== 'function') t = de(t);
    for (
      var n = this._groups, e = n.length, r = new Array(e), o = 0;
      o < e;
      ++o
    ) {
      for (
        var i = n[o], l = i.length, a = (r[o] = new Array(l)), u, f, _ = 0;
        _ < l;
        ++_
      ) {
        if ((u = i[_]) && (f = t.call(u, u.__data__, _, i))) {
          if ('__data__' in u) f.__data__ = u.__data__;
          a[_] = f;
        }
      }
    }
    return new p(r, this._parents);
  }
  function Ce(t) {
    Symbol('JSCA_1369_1371');
    return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
  }
  function Je() {
    Symbol('JSCA_1372_1374');
    return [];
  }
  function pe(t) {
    Symbol('JSCA_1375_1379');
    return t == null
      ? Je
      : function () {
          Symbol('JSCA_1376_1378');
          return this.querySelectorAll(t);
        };
  }
  function ge(t) {
    Symbol('JSCA_1380_1384');
    return function () {
      Symbol('JSCA_1381_1383');
      return Ce(t.apply(this, arguments));
    };
  }
  function ve(t) {
    Symbol('JSCA_1385_1396');
    if (typeof t === 'function') t = ge(t);
    else t = pe(t);
    for (
      var n = this._groups, e = n.length, r = [], o = [], i = 0;
      i < e;
      ++i
    ) {
      for (var l = n[i], a = l.length, u, f = 0; f < a; ++f) {
        if ((u = l[f])) {
          r.push(t.call(u, u.__data__, f, l));
          o.push(u);
        }
      }
    }
    return new p(r, o);
  }
  function xe(t) {
    Symbol('JSCA_1397_1401');
    return function () {
      Symbol('JSCA_1398_1400');
      return this.matches(t);
    };
  }
  function we(n) {
    Symbol('JSCA_1402_1406');
    return function (t) {
      Symbol('JSCA_1403_1405');
      return t.matches(n);
    };
  }
  var Me = Array.prototype.find;
  function Te(t) {
    Symbol('JSCA_1408_1412');
    return function () {
      Symbol('JSCA_1409_1411');
      return Me.call(this.children, t);
    };
  }
  function ke() {
    Symbol('JSCA_1413_1415');
    return this.firstElementChild;
  }
  function Ee(t) {
    Symbol('JSCA_1416_1418');
    return this.select(
      t == null ? ke : Te(typeof t === 'function' ? t : we(t))
    );
  }
  var Ne = Array.prototype.filter;
  function Pe() {
    Symbol('JSCA_1420_1422');
    return Array.from(this.children);
  }
  function ze(t) {
    Symbol('JSCA_1423_1427');
    return function () {
      Symbol('JSCA_1424_1426');
      return Ne.call(this.children, t);
    };
  }
  function Ie(t) {
    Symbol('JSCA_1428_1430');
    return this.selectAll(
      t == null ? Pe : ze(typeof t === 'function' ? t : we(t))
    );
  }
  function $e(t) {
    Symbol('JSCA_1431_1441');
    if (typeof t !== 'function') t = xe(t);
    for (
      var n = this._groups, e = n.length, r = new Array(e), o = 0;
      o < e;
      ++o
    ) {
      for (var i = n[o], l = i.length, a = (r[o] = []), u, f = 0; f < l; ++f) {
        if ((u = i[f]) && t.call(u, u.__data__, f, i)) {
          a.push(u);
        }
      }
    }
    return new p(r, this._parents);
  }
  function De(t) {
    Symbol('JSCA_1442_1444');
    return new Array(t.length);
  }
  function Re() {
    Symbol('JSCA_1445_1447');
    return new p(this._enter || this._groups.map(De), this._parents);
  }
  function Fe(t, n) {
    Symbol('JSCA_1448_1454');
    this.ownerDocument = t.ownerDocument;
    this.namespaceURI = t.namespaceURI;
    this._next = null;
    this._parent = t;
    this.__data__ = n;
  }
  Fe.prototype = {
    constructor: Fe,
    appendChild: function (t) {
      Symbol('JSCA_1457_1459');
      return this._parent.insertBefore(t, this._next);
    },
    insertBefore: function (t, n) {
      Symbol('JSCA_1460_1462');
      return this._parent.insertBefore(t, n);
    },
    querySelector: function (t) {
      Symbol('JSCA_1463_1465');
      return this._parent.querySelector(t);
    },
    querySelectorAll: function (t) {
      Symbol('JSCA_1466_1468');
      return this._parent.querySelectorAll(t);
    },
  };
  function qe(t) {
    Symbol('JSCA_1470_1474');
    return function () {
      Symbol('JSCA_1471_1473');
      return t;
    };
  }
  function Ue(t, n, e, r, o, i) {
    Symbol('JSCA_1475_1490');
    var l = 0,
      a,
      u = n.length,
      f = i.length;
    for (; l < f; ++l) {
      if ((a = n[l])) {
        a.__data__ = i[l];
        r[l] = a;
      } else {
        e[l] = new Fe(t, i[l]);
      }
    }
    for (; l < u; ++l) {
      if ((a = n[l])) {
        o[l] = a;
      }
    }
  }
  function Oe(t, n, e, r, o, i, l) {
    Symbol('JSCA_1491_1518');
    var a,
      u,
      f = new Map(),
      _ = n.length,
      c = i.length,
      s = new Array(_),
      S;
    for (a = 0; a < _; ++a) {
      if ((u = n[a])) {
        s[a] = S = l.call(u, u.__data__, a, n) + '';
        if (f.has(S)) {
          o[a] = u;
        } else {
          f.set(S, u);
        }
      }
    }
    for (a = 0; a < c; ++a) {
      S = l.call(t, i[a], a, i) + '';
      if ((u = f.get(S))) {
        r[a] = u;
        u.__data__ = i[a];
        f.delete(S);
      } else {
        e[a] = new Fe(t, i[a]);
      }
    }
    for (a = 0; a < _; ++a) {
      if ((u = n[a]) && f.get(s[a]) === u) {
        o[a] = u;
      }
    }
  }
  function Be(t) {
    Symbol('JSCA_1519_1521');
    return t.__data__;
  }
  function Ye(t, n) {
    Symbol('JSCA_1522_1541');
    if (!arguments.length) return Array.from(this, Be);
    var e = n ? Oe : Ue,
      r = this._parents,
      o = this._groups;
    if (typeof t !== 'function') t = qe(t);
    for (
      var i = o.length,
        l = new Array(i),
        a = new Array(i),
        u = new Array(i),
        f = 0;
      f < i;
      ++f
    ) {
      var _ = r[f],
        c = o[f],
        s = c.length,
        S = Le(t.call(_, _ && _.__data__, f, r)),
        h = S.length,
        y = (a[f] = new Array(h)),
        b = (l[f] = new Array(h)),
        m = (u[f] = new Array(s));
      e(_, c, y, b, m, S, n);
      for (var d = 0, A = 0, C, J; d < h; ++d) {
        if ((C = y[d])) {
          if (d >= A) A = d + 1;
          while (!(J = b[A]) && ++A < h);
          C._next = J || null;
        }
      }
    }
    l = new p(l, r);
    l._enter = a;
    l._exit = u;
    return l;
  }
  function Le(t) {
    Symbol('JSCA_1542_1544');
    return typeof t === 'object' && 'length' in t ? t : Array.from(t);
  }
  function je() {
    Symbol('JSCA_1545_1547');
    return new p(this._exit || this._groups.map(De), this._parents);
  }
  function He(t, n, e) {
    Symbol('JSCA_1548_1562');
    var r = this.enter(),
      o = this,
      i = this.exit();
    if (typeof t === 'function') {
      r = t(r);
      if (r) r = r.selection();
    } else {
      r = r.append(t + '');
    }
    if (n != null) {
      o = n(o);
      if (o) o = o.selection();
    }
    if (e == null) i.remove();
    else e(i);
    return r && o ? r.merge(o).order() : o;
  }
  function Xe(t) {
    Symbol('JSCA_1563_1576');
    var n = t.selection ? t.selection() : t;
    for (
      var e = this._groups,
        r = n._groups,
        o = e.length,
        i = r.length,
        l = Math.min(o, i),
        a = new Array(o),
        u = 0;
      u < l;
      ++u
    ) {
      for (
        var f = e[u],
          _ = r[u],
          c = f.length,
          s = (a[u] = new Array(c)),
          S,
          h = 0;
        h < c;
        ++h
      ) {
        if ((S = f[h] || _[h])) {
          s[h] = S;
        }
      }
    }
    for (; u < o; ++u) {
      a[u] = e[u];
    }
    return new p(a, this._parents);
  }
  function Ge() {
    Symbol('JSCA_1577_1587');
    for (var t = this._groups, n = -1, e = t.length; ++n < e; ) {
      for (var r = t[n], o = r.length - 1, i = r[o], l; --o >= 0; ) {
        if ((l = r[o])) {
          if (i && l.compareDocumentPosition(i) ^ 4)
            i.parentNode.insertBefore(l, i);
          i = l;
        }
      }
    }
    return this;
  }
  function Ve(e) {
    Symbol('JSCA_1588_1602');
    if (!e) e = We;
    function t(t, n) {
      Symbol('JSCA_1590_1592');
      return t && n ? e(t.__data__, n.__data__) : !t - !n;
    }
    for (
      var n = this._groups, r = n.length, o = new Array(r), i = 0;
      i < r;
      ++i
    ) {
      for (
        var l = n[i], a = l.length, u = (o[i] = new Array(a)), f, _ = 0;
        _ < a;
        ++_
      ) {
        if ((f = l[_])) {
          u[_] = f;
        }
      }
      u.sort(t);
    }
    return new p(o, this._parents).order();
  }
  function We(t, n) {
    Symbol('JSCA_1603_1605');
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }
  function Ze() {
    Symbol('JSCA_1606_1611');
    var t = arguments[0];
    arguments[0] = this;
    t.apply(null, arguments);
    return this;
  }
  function Ke() {
    Symbol('JSCA_1612_1614');
    return Array.from(this);
  }
  function Qe() {
    Symbol('JSCA_1615_1623');
    for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
      for (var r = t[n], o = 0, i = r.length; o < i; ++o) {
        var l = r[o];
        if (l) return l;
      }
    }
    return null;
  }
  function tr() {
    Symbol('JSCA_1624_1628');
    let t = 0;
    for (const n of this) ++t;
    return t;
  }
  function nr() {
    Symbol('JSCA_1629_1631');
    return !this.node();
  }
  function er(t) {
    Symbol('JSCA_1632_1639');
    for (var n = this._groups, e = 0, r = n.length; e < r; ++e) {
      for (var o = n[e], i = 0, l = o.length, a; i < l; ++i) {
        if ((a = o[i])) t.call(a, a.__data__, i, o);
      }
    }
    return this;
  }
  function rr(t) {
    Symbol('JSCA_1640_1644');
    return function () {
      Symbol('JSCA_1641_1643');
      this.removeAttribute(t);
    };
  }
  function or(t) {
    Symbol('JSCA_1645_1649');
    return function () {
      Symbol('JSCA_1646_1648');
      this.removeAttributeNS(t.space, t.local);
    };
  }
  function ir(t, n) {
    Symbol('JSCA_1650_1654');
    return function () {
      Symbol('JSCA_1651_1653');
      this.setAttribute(t, n);
    };
  }
  function lr(t, n) {
    Symbol('JSCA_1655_1659');
    return function () {
      Symbol('JSCA_1656_1658');
      this.setAttributeNS(t.space, t.local, n);
    };
  }
  function ar(n, e) {
    Symbol('JSCA_1660_1665');
    return function () {
      Symbol('JSCA_1661_1664');
      var t = e.apply(this, arguments);
      if (t == null) this.removeAttribute(n);
      else this.setAttribute(n, t);
    };
  }
  function ur(n, e) {
    Symbol('JSCA_1666_1671');
    return function () {
      Symbol('JSCA_1667_1670');
      var t = e.apply(this, arguments);
      if (t == null) this.removeAttributeNS(n.space, n.local);
      else this.setAttributeNS(n.space, n.local, t);
    };
  }
  function fr(t, n) {
    Symbol('JSCA_1672_1679');
    var e = Se(t);
    if (arguments.length < 2) {
      var r = this.node();
      return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
    }
    return this.each(
      (n == null
        ? e.local
          ? or
          : rr
        : typeof n === 'function'
        ? e.local
          ? ur
          : ar
        : e.local
        ? lr
        : ir)(e, n)
    );
  }
  function _r(t) {
    Symbol('JSCA_1680_1682');
    return (
      (t.ownerDocument && t.ownerDocument.defaultView) ||
      (t.document && t) ||
      t.defaultView
    );
  }
  function cr(t) {
    Symbol('JSCA_1683_1687');
    return function () {
      Symbol('JSCA_1684_1686');
      this.style.removeProperty(t);
    };
  }
  function sr(t, n, e) {
    Symbol('JSCA_1688_1692');
    return function () {
      Symbol('JSCA_1689_1691');
      this.style.setProperty(t, n, e);
    };
  }
  function Sr(n, e, r) {
    Symbol('JSCA_1693_1698');
    return function () {
      Symbol('JSCA_1694_1697');
      var t = e.apply(this, arguments);
      if (t == null) this.style.removeProperty(n);
      else this.style.setProperty(n, t, r);
    };
  }
  function hr(t, n, e) {
    Symbol('JSCA_1699_1701');
    return arguments.length > 1
      ? this.each(
          (n == null ? cr : typeof n === 'function' ? Sr : sr)(
            t,
            n,
            e == null ? '' : e
          )
        )
      : yr(this.node(), t);
  }
  function yr(t, n) {
    Symbol('JSCA_1702_1704');
    return (
      t.style.getPropertyValue(n) ||
      _r(t).getComputedStyle(t, null).getPropertyValue(n)
    );
  }
  function br(t) {
    Symbol('JSCA_1705_1709');
    return function () {
      Symbol('JSCA_1706_1708');
      delete this[t];
    };
  }
  function mr(t, n) {
    Symbol('JSCA_1710_1714');
    return function () {
      Symbol('JSCA_1711_1713');
      this[t] = n;
    };
  }
  function dr(n, e) {
    Symbol('JSCA_1715_1720');
    return function () {
      Symbol('JSCA_1716_1719');
      var t = e.apply(this, arguments);
      if (t == null) delete this[n];
      else this[n] = t;
    };
  }
  function Ar(t, n) {
    Symbol('JSCA_1721_1723');
    return arguments.length > 1
      ? this.each((n == null ? br : typeof n === 'function' ? dr : mr)(t, n))
      : this.node()[t];
  }
  function Cr(t) {
    Symbol('JSCA_1724_1726');
    return t.trim().split(/^|\s+/);
  }
  function Jr(t) {
    Symbol('JSCA_1727_1729');
    return t.classList || new pr(t);
  }
  function pr(t) {
    Symbol('JSCA_1730_1733');
    this._node = t;
    this._names = Cr(t.getAttribute('class') || '');
  }
  pr.prototype = {
    add: function (t) {
      Symbol('JSCA_1735_1741');
      var n = this._names.indexOf(t);
      if (n < 0) {
        this._names.push(t);
        this._node.setAttribute('class', this._names.join(' '));
      }
    },
    remove: function (t) {
      Symbol('JSCA_1742_1748');
      var n = this._names.indexOf(t);
      if (n >= 0) {
        this._names.splice(n, 1);
        this._node.setAttribute('class', this._names.join(' '));
      }
    },
    contains: function (t) {
      Symbol('JSCA_1749_1751');
      return this._names.indexOf(t) >= 0;
    },
  };
  function gr(t, n) {
    Symbol('JSCA_1753_1756');
    var e = Jr(t),
      r = -1,
      o = n.length;
    while (++r < o) e.add(n[r]);
  }
  function vr(t, n) {
    Symbol('JSCA_1757_1760');
    var e = Jr(t),
      r = -1,
      o = n.length;
    while (++r < o) e.remove(n[r]);
  }
  function xr(t) {
    Symbol('JSCA_1761_1765');
    return function () {
      Symbol('JSCA_1762_1764');
      gr(this, t);
    };
  }
  function wr(t) {
    Symbol('JSCA_1766_1770');
    return function () {
      Symbol('JSCA_1767_1769');
      vr(this, t);
    };
  }
  function Mr(t, n) {
    Symbol('JSCA_1771_1775');
    return function () {
      Symbol('JSCA_1772_1774');
      (n.apply(this, arguments) ? gr : vr)(this, t);
    };
  }
  function Tr(t, n) {
    Symbol('JSCA_1776_1784');
    var e = Cr(t + '');
    if (arguments.length < 2) {
      var r = Jr(this.node()),
        o = -1,
        i = e.length;
      while (++o < i) if (!r.contains(e[o])) return false;
      return true;
    }
    return this.each((typeof n === 'function' ? Mr : n ? xr : wr)(e, n));
  }
  function kr() {
    Symbol('JSCA_1785_1787');
    this.textContent = '';
  }
  function Er(t) {
    Symbol('JSCA_1788_1792');
    return function () {
      Symbol('JSCA_1789_1791');
      this.textContent = t;
    };
  }
  function Nr(n) {
    Symbol('JSCA_1793_1798');
    return function () {
      Symbol('JSCA_1794_1797');
      var t = n.apply(this, arguments);
      this.textContent = t == null ? '' : t;
    };
  }
  function Pr(t) {
    Symbol('JSCA_1799_1801');
    return arguments.length
      ? this.each(t == null ? kr : (typeof t === 'function' ? Nr : Er)(t))
      : this.node().textContent;
  }
  function zr() {
    Symbol('JSCA_1802_1804');
    this.innerHTML = '';
  }
  function Ir(t) {
    Symbol('JSCA_1805_1809');
    return function () {
      Symbol('JSCA_1806_1808');
      this.innerHTML = t;
    };
  }
  function $r(n) {
    Symbol('JSCA_1810_1815');
    return function () {
      Symbol('JSCA_1811_1814');
      var t = n.apply(this, arguments);
      this.innerHTML = t == null ? '' : t;
    };
  }
  function Dr(t) {
    Symbol('JSCA_1816_1818');
    return arguments.length
      ? this.each(t == null ? zr : (typeof t === 'function' ? $r : Ir)(t))
      : this.node().innerHTML;
  }
  function Rr() {
    Symbol('JSCA_1819_1821');
    if (this.nextSibling) this.parentNode.appendChild(this);
  }
  function Fr() {
    Symbol('JSCA_1822_1824');
    return this.each(Rr);
  }
  function qr() {
    Symbol('JSCA_1825_1827');
    if (this.previousSibling)
      this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function Ur() {
    Symbol('JSCA_1828_1830');
    return this.each(qr);
  }
  function Or(t) {
    Symbol('JSCA_1831_1836');
    var n = typeof t === 'function' ? t : be(t);
    return this.select(function () {
      Symbol('JSCA_1833_1835');
      return this.appendChild(n.apply(this, arguments));
    });
  }
  function Br() {
    Symbol('JSCA_1837_1839');
    return null;
  }
  function Yr(t, n) {
    Symbol('JSCA_1840_1845');
    var e = typeof t === 'function' ? t : be(t),
      r = n == null ? Br : typeof n === 'function' ? n : de(n);
    return this.select(function () {
      Symbol('JSCA_1842_1844');
      return this.insertBefore(
        e.apply(this, arguments),
        r.apply(this, arguments) || null
      );
    });
  }
  function Lr() {
    Symbol('JSCA_1846_1849');
    var t = this.parentNode;
    if (t) t.removeChild(this);
  }
  function jr() {
    Symbol('JSCA_1850_1852');
    return this.each(Lr);
  }
  function Hr() {
    Symbol('JSCA_1853_1856');
    var t = this.cloneNode(false),
      n = this.parentNode;
    return n ? n.insertBefore(t, this.nextSibling) : t;
  }
  function Xr() {
    Symbol('JSCA_1857_1860');
    var t = this.cloneNode(true),
      n = this.parentNode;
    return n ? n.insertBefore(t, this.nextSibling) : t;
  }
  function Gr(t) {
    Symbol('JSCA_1861_1863');
    return this.select(t ? Xr : Hr);
  }
  function Vr(t) {
    Symbol('JSCA_1864_1866');
    return arguments.length
      ? this.property('__data__', t)
      : this.node().__data__;
  }
  function Wr(n) {
    Symbol('JSCA_1867_1871');
    return function (t) {
      Symbol('JSCA_1868_1870');
      n.call(this, t, this.__data__);
    };
  }
  function Zr(t) {
    Symbol('JSCA_1872_1881');
    return t
      .trim()
      .split(/^|\s+/)
      .map(function (t) {
        Symbol('JSCA_1873_1880');
        var n = '',
          e = t.indexOf('.');
        if (e >= 0) (n = t.slice(e + 1)), (t = t.slice(0, e));
        return { type: t, name: n };
      });
  }
  function Kr(i) {
    Symbol('JSCA_1882_1895');
    return function () {
      Symbol('JSCA_1883_1894');
      var t = this.__on;
      if (!t) return;
      for (var n = 0, e = -1, r = t.length, o; n < r; ++n) {
        if (((o = t[n]), (!i.type || o.type === i.type) && o.name === i.name)) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          t[++e] = o;
        }
      }
      if (++e) t.length = e;
      else delete this.__on;
    };
  }
  function Qr(i, l, a) {
    Symbol('JSCA_1896_1917');
    return function () {
      Symbol('JSCA_1897_1916');
      var t = this.__on,
        n,
        e = Wr(l);
      if (t)
        for (var r = 0, o = t.length; r < o; ++r) {
          if ((n = t[r]).type === i.type && n.name === i.name) {
            this.removeEventListener(n.type, n.listener, n.options);
            this.addEventListener(n.type, (n.listener = e), (n.options = a));
            n.value = l;
            return;
          }
        }
      this.addEventListener(i.type, e, a);
      n = { type: i.type, name: i.name, value: l, listener: e, options: a };
      if (!t) this.__on = [n];
      else t.push(n);
    };
  }
  function to(t, n, e) {
    Symbol('JSCA_1918_1934');
    var r = Zr(t + ''),
      o,
      i = r.length,
      l;
    if (arguments.length < 2) {
      var a = this.node().__on;
      if (a)
        for (var u = 0, f = a.length, _; u < f; ++u) {
          for (o = 0, _ = a[u]; o < i; ++o) {
            if ((l = r[o]).type === _.type && l.name === _.name) {
              return _.value;
            }
          }
        }
      return;
    }
    a = n ? Qr : Kr;
    for (o = 0; o < i; ++o) this.each(a(r[o], n, e));
    return this;
  }
  function no(t, n, e) {
    Symbol('JSCA_1935_1944');
    var r = _r(t),
      o = r.CustomEvent;
    if (typeof o === 'function') {
      o = new o(n, e);
    } else {
      o = r.document.createEvent('Event');
      if (e) o.initEvent(n, e.bubbles, e.cancelable), (o.detail = e.detail);
      else o.initEvent(n, false, false);
    }
    t.dispatchEvent(o);
  }
  function eo(t, n) {
    Symbol('JSCA_1945_1949');
    return function () {
      Symbol('JSCA_1946_1948');
      return no(this, t, n);
    };
  }
  function ro(t, n) {
    Symbol('JSCA_1950_1954');
    return function () {
      Symbol('JSCA_1951_1953');
      return no(this, t, n.apply(this, arguments));
    };
  }
  function oo(t, n) {
    Symbol('JSCA_1955_1957');
    return this.each((typeof n === 'function' ? ro : eo)(t, n));
  }
  function* io() {
    Symbol('JSCA_1958_1964');
    for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
      for (var r = t[n], o = 0, i = r.length, l; o < i; ++o) {
        if ((l = r[o])) yield l;
      }
    }
  }
  var lo = [null];
  function p(t, n) {
    Symbol('JSCA_1966_1969');
    this._groups = t;
    this._parents = n;
  }
  function ao() {
    Symbol('JSCA_1970_1972');
    return new p([[document.documentElement]], lo);
  }
  function uo() {
    Symbol('JSCA_1973_1975');
    return this;
  }
  p.prototype = ao.prototype = {
    constructor: p,
    select: Ae,
    selectAll: ve,
    selectChild: Ee,
    selectChildren: Ie,
    filter: $e,
    data: Ye,
    enter: Re,
    exit: je,
    join: He,
    merge: Xe,
    selection: uo,
    order: Ge,
    sort: Ve,
    call: Ze,
    nodes: Ke,
    node: Qe,
    size: tr,
    empty: nr,
    each: er,
    attr: fr,
    style: hr,
    property: Ar,
    classed: Tr,
    text: Pr,
    html: Dr,
    raise: Fr,
    lower: Ur,
    append: Or,
    insert: Yr,
    remove: jr,
    clone: Gr,
    datum: Vr,
    on: to,
    dispatch: oo,
    [Symbol.iterator]: io,
  };
  function L(t) {
    Symbol('JSCA_2014_2016');
    return typeof t === 'string'
      ? new p([[document.querySelector(t)]], [document.documentElement])
      : new p([[t]], lo);
  }
  function fo(t) {
    Symbol('JSCA_2017_2019');
    return L(be(t).call(document.documentElement));
  }
  var _o = 0;
  function co() {
    Symbol('JSCA_2021_2023');
    return new so();
  }
  function so() {
    Symbol('JSCA_2024_2026');
    this._ = '@' + (++_o).toString(36);
  }
  so.prototype = co.prototype = {
    constructor: so,
    get: function (t) {
      Symbol('JSCA_2029_2033');
      var n = this._;
      while (!(n in t)) if (!(t = t.parentNode)) return;
      return t[n];
    },
    set: function (t, n) {
      Symbol('JSCA_2034_2036');
      return (t[this._] = n);
    },
    remove: function (t) {
      Symbol('JSCA_2037_2039');
      return this._ in t && delete t[this._];
    },
    toString: function () {
      Symbol('JSCA_2040_2042');
      return this._;
    },
  };
  function So(t) {
    Symbol('JSCA_2044_2048');
    let n;
    while ((n = t.sourceEvent)) t = n;
    return t;
  }
  function ho(t, n) {
    Symbol('JSCA_2049_2066');
    t = So(t);
    if (n === undefined) n = t.currentTarget;
    if (n) {
      var e = n.ownerSVGElement || n;
      if (e.createSVGPoint) {
        var r = e.createSVGPoint();
        (r.x = t.clientX), (r.y = t.clientY);
        r = r.matrixTransform(n.getScreenCTM().inverse());
        return [r.x, r.y];
      }
      if (n.getBoundingClientRect) {
        var o = n.getBoundingClientRect();
        return [
          t.clientX - o.left - n.clientLeft,
          t.clientY - o.top - n.clientTop,
        ];
      }
    }
    return [t.pageX, t.pageY];
  }
  function yo(t, n) {
    Symbol('JSCA_2067_2074');
    if (t.target) {
      t = So(t);
      if (n === undefined) n = t.currentTarget;
      t = t.touches || [t];
    }
    return Array.from(t, (t) => ho(t, n));
  }
  function bo(t) {
    Symbol('JSCA_2075_2077');
    return typeof t === 'string'
      ? new p([document.querySelectorAll(t)], [document.documentElement])
      : new p([Ce(t)], lo);
  }
  const mo = { passive: false };
  const Ao = { capture: true, passive: false };
  function Co(t) {
    Symbol('JSCA_2085_2087');
    t.stopImmediatePropagation();
  }
  function Jo(t) {
    Symbol('JSCA_2088_2091');
    t.preventDefault();
    t.stopImmediatePropagation();
  }
  function po(t) {
    Symbol('JSCA_2092_2100');
    var n = t.document.documentElement,
      e = L(t).on('dragstart.drag', Jo, Ao);
    if ('onselectstart' in n) {
      e.on('selectstart.drag', Jo, Ao);
    } else {
      n.__noselect = n.style.MozUserSelect;
      n.style.MozUserSelect = 'none';
    }
  }
  function go(t, n) {
    Symbol('JSCA_2101_2115');
    var e = t.document.documentElement,
      r = L(t).on('dragstart.drag', null);
    if (n) {
      r.on('click.drag', Jo, Ao);
      setTimeout(function () {
        Symbol('JSCA_2105_2107');
        r.on('click.drag', null);
      }, 0);
    }
    if ('onselectstart' in e) {
      r.on('selectstart.drag', null);
    } else {
      e.style.MozUserSelect = e.__noselect;
      delete e.__noselect;
    }
  }
  var vo = (t) => () => t;
  function xo(
    t,
    {
      sourceEvent: n,
      subject: e,
      target: r,
      identifier: o,
      active: i,
      x: l,
      y: a,
      dx: u,
      dy: f,
      dispatch: _,
    }
  ) {
    Symbol('JSCA_2117_2173');
    Object.defineProperties(this, {
      type: { value: t, enumerable: true, configurable: true },
      sourceEvent: { value: n, enumerable: true, configurable: true },
      subject: { value: e, enumerable: true, configurable: true },
      target: { value: r, enumerable: true, configurable: true },
      identifier: { value: o, enumerable: true, configurable: true },
      active: { value: i, enumerable: true, configurable: true },
      x: { value: l, enumerable: true, configurable: true },
      y: { value: a, enumerable: true, configurable: true },
      dx: { value: u, enumerable: true, configurable: true },
      dy: { value: f, enumerable: true, configurable: true },
      _: { value: _ },
    });
  }
  xo.prototype.on = function () {
    Symbol('JSCA_2174_2177');
    var t = this._.on.apply(this._, arguments);
    return t === this._ ? this : t;
  };
  function wo(t) {
    Symbol('JSCA_2178_2180');
    return !t.ctrlKey && !t.button;
  }
  function Mo() {
    Symbol('JSCA_2181_2183');
    return this.parentNode;
  }
  function To(t, n) {
    Symbol('JSCA_2184_2189');
    return n == null ? { x: t.x, y: t.y } : n;
  }
  function ko() {
    Symbol('JSCA_2190_2192');
    return navigator.maxTouchPoints || 'ontouchstart' in this;
  }
  function Eo() {
    Symbol('JSCA_2193_2317');
    var a = wo,
      u = Mo,
      e = To,
      n = ko,
      y = {},
      r = le('start', 'drag', 'end'),
      b = 0,
      o,
      i,
      l,
      f,
      _ = 0;
    function m(t) {
      Symbol('JSCA_2195_2197');
      t.on('mousedown.drag', c)
        .filter(n)
        .on('touchstart.drag', h)
        .on('touchmove.drag', d, mo)
        .on('touchend.drag touchcancel.drag', A)
        .style('touch-action', 'none')
        .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
    }
    function c(t, n) {
      Symbol('JSCA_2198_2209');
      if (f || !a.call(this, t, n)) return;
      var e = C(this, u.call(this, t, n), t, n, 'mouse');
      if (!e) return;
      L(t.view).on('mousemove.drag', s, Ao).on('mouseup.drag', S, Ao);
      po(t.view);
      Co(t);
      l = false;
      o = t.clientX;
      i = t.clientY;
      e('start', t);
    }
    function s(t) {
      Symbol('JSCA_2210_2217');
      Jo(t);
      if (!l) {
        var n = t.clientX - o,
          e = t.clientY - i;
        l = n * n + e * e > _;
      }
      y.mouse('drag', t);
    }
    function S(t) {
      Symbol('JSCA_2218_2223');
      L(t.view).on('mousemove.drag mouseup.drag', null);
      go(t.view, l);
      Jo(t);
      y.mouse('end', t);
    }
    function h(t, n) {
      Symbol('JSCA_2224_2233');
      if (!a.call(this, t, n)) return;
      var e = t.changedTouches,
        r = u.call(this, t, n),
        o = e.length,
        i,
        l;
      for (i = 0; i < o; ++i) {
        if ((l = C(this, r, t, n, e[i].identifier, e[i]))) {
          Co(t);
          l('start', t, e[i]);
        }
      }
    }
    function d(t) {
      Symbol('JSCA_2234_2242');
      var n = t.changedTouches,
        e = n.length,
        r,
        o;
      for (r = 0; r < e; ++r) {
        if ((o = y[n[r].identifier])) {
          Jo(t);
          o('drag', t, n[r]);
        }
      }
    }
    function A(t) {
      Symbol('JSCA_2243_2255');
      var n = t.changedTouches,
        e = n.length,
        r,
        o;
      if (f) clearTimeout(f);
      f = setTimeout(function () {
        Symbol('JSCA_2246_2248');
        f = null;
      }, 500);
      for (r = 0; r < e; ++r) {
        if ((o = y[n[r].identifier])) {
          Co(t);
          o('end', t, n[r]);
        }
      }
    }
    function C(l, a, t, u, f, n) {
      Symbol('JSCA_2256_2296');
      var _ = r.copy(),
        c = ho(n || t, a),
        s,
        S,
        h;
      if (
        (h = e.call(
          l,
          new xo('beforestart', {
            sourceEvent: t,
            target: m,
            identifier: f,
            active: b,
            x: c[0],
            y: c[1],
            dx: 0,
            dy: 0,
            dispatch: _,
          }),
          u
        )) == null
      )
        return;
      s = h.x - c[0] || 0;
      S = h.y - c[1] || 0;
      return function t(n, e, r) {
        Symbol('JSCA_2271_2295');
        var o = c,
          i;
        switch (n) {
          case 'start':
            (y[f] = t), (i = b++);
            break;
          case 'end':
            delete y[f], --b;
          case 'drag':
            (c = ho(r || e, a)), (i = b);
            break;
        }
        _.call(
          n,
          l,
          new xo(n, {
            sourceEvent: e,
            subject: h,
            target: m,
            identifier: f,
            active: i,
            x: c[0] + s,
            y: c[1] + S,
            dx: c[0] - o[0],
            dy: c[1] - o[1],
            dispatch: _,
          }),
          u
        );
      };
    }
    m.filter = function (t) {
      Symbol('JSCA_2297_2299');
      return arguments.length
        ? ((a = typeof t === 'function' ? t : vo(!!t)), m)
        : a;
    };
    m.container = function (t) {
      Symbol('JSCA_2300_2302');
      return arguments.length
        ? ((u = typeof t === 'function' ? t : vo(t)), m)
        : u;
    };
    m.subject = function (t) {
      Symbol('JSCA_2303_2305');
      return arguments.length
        ? ((e = typeof t === 'function' ? t : vo(t)), m)
        : e;
    };
    m.touchable = function (t) {
      Symbol('JSCA_2306_2308');
      return arguments.length
        ? ((n = typeof t === 'function' ? t : vo(!!t)), m)
        : n;
    };
    m.on = function () {
      Symbol('JSCA_2309_2312');
      var t = r.on.apply(r, arguments);
      return t === r ? m : t;
    };
    m.clickDistance = function (t) {
      Symbol('JSCA_2313_2315');
      return arguments.length ? ((_ = (t = +t) * t), m) : Math.sqrt(_);
    };
    return m;
  }
  function No(t, n, e) {
    Symbol('JSCA_2318_2321');
    t.prototype = n.prototype = e;
    e.constructor = t;
  }
  function Po(t, n) {
    Symbol('JSCA_2322_2326');
    var e = Object.create(t.prototype);
    for (var r in n) e[r] = n[r];
    return e;
  }
  function zo() {
    Symbol('JSCA_2327_2327');
  }
  var Io = 0.7;
  var $o = 1 / Io;
  var Do = '\\s*([+-]?\\d+)\\s*',
    Ro = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
    Fo = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
    qo = /^#([0-9a-f]{3,8})$/,
    Uo = new RegExp(`^rgb\\(${Do},${Do},${Do}\\)$`),
    Oo = new RegExp(`^rgb\\(${Fo},${Fo},${Fo}\\)$`),
    Bo = new RegExp(`^rgba\\(${Do},${Do},${Do},${Ro}\\)$`),
    Yo = new RegExp(`^rgba\\(${Fo},${Fo},${Fo},${Ro}\\)$`),
    Lo = new RegExp(`^hsl\\(${Ro},${Fo},${Fo}\\)$`),
    jo = new RegExp(`^hsla\\(${Ro},${Fo},${Fo},${Ro}\\)$`);
  var Ho = {
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
  No(zo, Zo, {
    copy(t) {
      Symbol('JSCA_2482_2484');
      return Object.assign(new this.constructor(), this, t);
    },
    displayable() {
      Symbol('JSCA_2485_2487');
      return this.rgb().displayable();
    },
    hex: Xo,
    formatHex: Xo,
    formatHex8: Go,
    formatHsl: Vo,
    formatRgb: Wo,
    toString: Wo,
  });
  function Xo() {
    Symbol('JSCA_2495_2497');
    return this.rgb().formatHex();
  }
  function Go() {
    Symbol('JSCA_2498_2500');
    return this.rgb().formatHex8();
  }
  function Vo() {
    Symbol('JSCA_2501_2503');
    return fi(this).formatHsl();
  }
  function Wo() {
    Symbol('JSCA_2504_2506');
    return this.rgb().formatRgb();
  }
  function Zo(t) {
    Symbol('JSCA_2507_2511');
    var n, e;
    t = (t + '').trim().toLowerCase();
    return (n = qo.exec(t))
      ? ((e = n[1].length),
        (n = parseInt(n[1], 16)),
        e === 6
          ? Ko(n)
          : e === 3
          ? new _(
              ((n >> 8) & 15) | ((n >> 4) & 240),
              ((n >> 4) & 15) | (n & 240),
              ((n & 15) << 4) | (n & 15),
              1
            )
          : e === 8
          ? Qo(
              (n >> 24) & 255,
              (n >> 16) & 255,
              (n >> 8) & 255,
              (n & 255) / 255
            )
          : e === 4
          ? Qo(
              ((n >> 12) & 15) | ((n >> 8) & 240),
              ((n >> 8) & 15) | ((n >> 4) & 240),
              ((n >> 4) & 15) | (n & 240),
              (((n & 15) << 4) | (n & 15)) / 255
            )
          : null)
      : (n = Uo.exec(t))
      ? new _(n[1], n[2], n[3], 1)
      : (n = Oo.exec(t))
      ? new _((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, 1)
      : (n = Bo.exec(t))
      ? Qo(n[1], n[2], n[3], n[4])
      : (n = Yo.exec(t))
      ? Qo((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, n[4])
      : (n = Lo.exec(t))
      ? ui(n[1], n[2] / 100, n[3] / 100, 1)
      : (n = jo.exec(t))
      ? ui(n[1], n[2] / 100, n[3] / 100, n[4])
      : Ho.hasOwnProperty(t)
      ? Ko(Ho[t])
      : t === 'transparent'
      ? new _(NaN, NaN, NaN, 0)
      : null;
  }
  function Ko(t) {
    Symbol('JSCA_2512_2514');
    return new _((t >> 16) & 255, (t >> 8) & 255, t & 255, 1);
  }
  function Qo(t, n, e, r) {
    Symbol('JSCA_2515_2518');
    if (r <= 0) t = n = e = NaN;
    return new _(t, n, e, r);
  }
  function ti(t) {
    Symbol('JSCA_2519_2524');
    if (!(t instanceof zo)) t = Zo(t);
    if (!t) return new _();
    t = t.rgb();
    return new _(t.r, t.g, t.b, t.opacity);
  }
  function ni(t, n, e, r) {
    Symbol('JSCA_2525_2527');
    return arguments.length === 1 ? ti(t) : new _(t, n, e, r == null ? 1 : r);
  }
  function _(t, n, e, r) {
    Symbol('JSCA_2528_2533');
    this.r = +t;
    this.g = +n;
    this.b = +e;
    this.opacity = +r;
  }
  No(
    _,
    ni,
    Po(zo, {
      brighter(t) {
        Symbol('JSCA_2535_2538');
        t = t == null ? $o : Math.pow($o, t);
        return new _(this.r * t, this.g * t, this.b * t, this.opacity);
      },
      darker(t) {
        Symbol('JSCA_2539_2542');
        t = t == null ? Io : Math.pow(Io, t);
        return new _(this.r * t, this.g * t, this.b * t, this.opacity);
      },
      rgb() {
        Symbol('JSCA_2543_2545');
        return this;
      },
      clamp() {
        Symbol('JSCA_2546_2548');
        return new _(li(this.r), li(this.g), li(this.b), ii(this.opacity));
      },
      displayable() {
        Symbol('JSCA_2549_2551');
        return (
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
      hex: ei,
      formatHex: ei,
      formatHex8: ri,
      formatRgb: oi,
      toString: oi,
    })
  );
  function ei() {
    Symbol('JSCA_2558_2560');
    return `#${ai(this.r)}${ai(this.g)}${ai(this.b)}`;
  }
  function ri() {
    Symbol('JSCA_2561_2563');
    return `#${ai(
      this.r
    )}${ai(this.g)}${ai(this.b)}${ai((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function oi() {
    Symbol('JSCA_2564_2567');
    const t = ii(this.opacity);
    return `${
      t === 1 ? 'rgb(' : 'rgba('
    }${li(this.r)}, ${li(this.g)}, ${li(this.b)}${t === 1 ? ')' : `, ${t})`}`;
  }
  function ii(t) {
    Symbol('JSCA_2568_2570');
    return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
  }
  function li(t) {
    Symbol('JSCA_2571_2573');
    return Math.max(0, Math.min(255, Math.round(t) || 0));
  }
  function ai(t) {
    Symbol('JSCA_2574_2577');
    t = li(t);
    return (t < 16 ? '0' : '') + t.toString(16);
  }
  function ui(t, n, e, r) {
    Symbol('JSCA_2578_2581');
    if (r <= 0) t = n = e = NaN;
    else if (e <= 0 || e >= 1) t = n = NaN;
    else if (n <= 0) t = NaN;
    return new ci(t, n, e, r);
  }
  function fi(t) {
    Symbol('JSCA_2582_2597');
    if (t instanceof ci) return new ci(t.h, t.s, t.l, t.opacity);
    if (!(t instanceof zo)) t = Zo(t);
    if (!t) return new ci();
    if (t instanceof ci) return t;
    t = t.rgb();
    var n = t.r / 255,
      e = t.g / 255,
      r = t.b / 255,
      o = Math.min(n, e, r),
      i = Math.max(n, e, r),
      l = NaN,
      a = i - o,
      u = (i + o) / 2;
    if (a) {
      if (n === i) l = (e - r) / a + (e < r) * 6;
      else if (e === i) l = (r - n) / a + 2;
      else l = (n - e) / a + 4;
      a /= u < 0.5 ? i + o : 2 - i - o;
      l *= 60;
    } else {
      a = u > 0 && u < 1 ? 0 : l;
    }
    return new ci(l, a, u, t.opacity);
  }
  function _i(t, n, e, r) {
    Symbol('JSCA_2598_2600');
    return arguments.length === 1 ? fi(t) : new ci(t, n, e, r == null ? 1 : r);
  }
  function ci(t, n, e, r) {
    Symbol('JSCA_2601_2606');
    this.h = +t;
    this.s = +n;
    this.l = +e;
    this.opacity = +r;
  }
  No(
    ci,
    _i,
    Po(zo, {
      brighter(t) {
        Symbol('JSCA_2608_2611');
        t = t == null ? $o : Math.pow($o, t);
        return new ci(this.h, this.s, this.l * t, this.opacity);
      },
      darker(t) {
        Symbol('JSCA_2612_2615');
        t = t == null ? Io : Math.pow(Io, t);
        return new ci(this.h, this.s, this.l * t, this.opacity);
      },
      rgb() {
        Symbol('JSCA_2616_2619');
        var t = (this.h % 360) + (this.h < 0) * 360,
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < 0.5 ? e : 1 - e) * n,
          o = 2 * e - r;
        return new _(
          hi(t >= 240 ? t - 240 : t + 120, o, r),
          hi(t, o, r),
          hi(t < 120 ? t + 240 : t - 120, o, r),
          this.opacity
        );
      },
      clamp() {
        Symbol('JSCA_2620_2622');
        return new ci(si(this.h), Si(this.s), Si(this.l), ii(this.opacity));
      },
      displayable() {
        Symbol('JSCA_2623_2625');
        return (
          ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
          0 <= this.l &&
          this.l <= 1 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      formatHsl() {
        Symbol('JSCA_2626_2629');
        const t = ii(this.opacity);
        return `${t === 1 ? 'hsl(' : 'hsla('}${si(this.h)}, ${
          Si(this.s) * 100
        }%, ${Si(this.l) * 100}%${t === 1 ? ')' : `, ${t})`}`;
      },
    })
  );
  function si(t) {
    Symbol('JSCA_2631_2634');
    t = (t || 0) % 360;
    return t < 0 ? t + 360 : t;
  }
  function Si(t) {
    Symbol('JSCA_2635_2637');
    return Math.max(0, Math.min(1, t || 0));
  }
  function hi(t, n, e) {
    Symbol('JSCA_2638_2640');
    return (
      (t < 60
        ? n + ((e - n) * t) / 60
        : t < 180
        ? e
        : t < 240
        ? n + ((e - n) * (240 - t)) / 60
        : n) * 255
    );
  }
  const yi = Math.PI / 180;
  const bi = 180 / Math.PI;
  const mi = 18,
    di = 0.96422,
    Ai = 1,
    Ci = 0.82521,
    Ji = 4 / 29,
    pi = 6 / 29,
    gi = 3 * pi * pi,
    vi = pi * pi * pi;
  function xi(t) {
    Symbol('JSCA_2644_2654');
    if (t instanceof Ti) return new Ti(t.l, t.a, t.b, t.opacity);
    if (t instanceof Di) return Ri(t);
    if (!(t instanceof _)) t = ti(t);
    var n = Pi(t.r),
      e = Pi(t.g),
      r = Pi(t.b),
      o = ki((0.2225045 * n + 0.7168786 * e + 0.0606169 * r) / Ai),
      i,
      l;
    if (n === e && e === r) i = l = o;
    else {
      i = ki((0.4360747 * n + 0.3850649 * e + 0.1430804 * r) / di);
      l = ki((0.0139322 * n + 0.0971045 * e + 0.7141733 * r) / Ci);
    }
    return new Ti(116 * o - 16, 500 * (i - o), 200 * (o - l), t.opacity);
  }
  function wi(t, n) {
    Symbol('JSCA_2655_2657');
    return new Ti(t, 0, 0, n == null ? 1 : n);
  }
  function Mi(t, n, e, r) {
    Symbol('JSCA_2658_2660');
    return arguments.length === 1 ? xi(t) : new Ti(t, n, e, r == null ? 1 : r);
  }
  function Ti(t, n, e, r) {
    Symbol('JSCA_2661_2666');
    this.l = +t;
    this.a = +n;
    this.b = +e;
    this.opacity = +r;
  }
  No(
    Ti,
    Mi,
    Po(zo, {
      brighter(t) {
        Symbol('JSCA_2668_2670');
        return new Ti(
          this.l + mi * (t == null ? 1 : t),
          this.a,
          this.b,
          this.opacity
        );
      },
      darker(t) {
        Symbol('JSCA_2671_2673');
        return new Ti(
          this.l - mi * (t == null ? 1 : t),
          this.a,
          this.b,
          this.opacity
        );
      },
      rgb() {
        Symbol('JSCA_2674_2680');
        var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;
        n = di * Ei(n);
        t = Ai * Ei(t);
        e = Ci * Ei(e);
        return new _(
          Ni(3.1338561 * n - 1.6168667 * t - 0.4906146 * e),
          Ni(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
          Ni(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
          this.opacity
        );
      },
    })
  );
  function ki(t) {
    Symbol('JSCA_2682_2684');
    return t > vi ? Math.pow(t, 1 / 3) : t / gi + Ji;
  }
  function Ei(t) {
    Symbol('JSCA_2685_2687');
    return t > pi ? t * t * t : gi * (t - Ji);
  }
  function Ni(t) {
    Symbol('JSCA_2688_2690');
    return (
      255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
    );
  }
  function Pi(t) {
    Symbol('JSCA_2691_2693');
    return (t /= 255) <= 0.04045
      ? t / 12.92
      : Math.pow((t + 0.055) / 1.055, 2.4);
  }
  function zi(t) {
    Symbol('JSCA_2694_2700');
    if (t instanceof Di) return new Di(t.h, t.c, t.l, t.opacity);
    if (!(t instanceof Ti)) t = xi(t);
    if (t.a === 0 && t.b === 0)
      return new Di(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
    var n = Math.atan2(t.b, t.a) * bi;
    return new Di(
      n < 0 ? n + 360 : n,
      Math.sqrt(t.a * t.a + t.b * t.b),
      t.l,
      t.opacity
    );
  }
  function Ii(t, n, e, r) {
    Symbol('JSCA_2701_2703');
    return arguments.length === 1 ? zi(t) : new Di(e, n, t, r == null ? 1 : r);
  }
  function $i(t, n, e, r) {
    Symbol('JSCA_2704_2706');
    return arguments.length === 1 ? zi(t) : new Di(t, n, e, r == null ? 1 : r);
  }
  function Di(t, n, e, r) {
    Symbol('JSCA_2707_2712');
    this.h = +t;
    this.c = +n;
    this.l = +e;
    this.opacity = +r;
  }
  function Ri(t) {
    Symbol('JSCA_2713_2717');
    if (isNaN(t.h)) return new Ti(t.l, 0, 0, t.opacity);
    var n = t.h * yi;
    return new Ti(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
  }
  No(
    Di,
    $i,
    Po(zo, {
      brighter(t) {
        Symbol('JSCA_2719_2721');
        return new Di(
          this.h,
          this.c,
          this.l + mi * (t == null ? 1 : t),
          this.opacity
        );
      },
      darker(t) {
        Symbol('JSCA_2722_2724');
        return new Di(
          this.h,
          this.c,
          this.l - mi * (t == null ? 1 : t),
          this.opacity
        );
      },
      rgb() {
        Symbol('JSCA_2725_2727');
        return Ri(this).rgb();
      },
    })
  );
  var Fi = -0.14861,
    qi = +1.78277,
    Ui = -0.29227,
    Oi = -0.90649,
    Bi = +1.97294,
    Yi = Bi * Oi,
    Li = Bi * qi,
    ji = qi * Ui - Oi * Fi;
  function Hi(t) {
    Symbol('JSCA_2730_2735');
    if (t instanceof Gi) return new Gi(t.h, t.s, t.l, t.opacity);
    if (!(t instanceof _)) t = ti(t);
    var n = t.r / 255,
      e = t.g / 255,
      r = t.b / 255,
      o = (ji * r + Yi * n - Li * e) / (ji + Yi - Li),
      i = r - o,
      l = (Bi * (e - o) - Ui * i) / Oi,
      a = Math.sqrt(l * l + i * i) / (Bi * o * (1 - o)),
      u = a ? Math.atan2(l, i) * bi - 120 : NaN;
    return new Gi(u < 0 ? u + 360 : u, a, o, t.opacity);
  }
  function Xi(t, n, e, r) {
    Symbol('JSCA_2736_2738');
    return arguments.length === 1 ? Hi(t) : new Gi(t, n, e, r == null ? 1 : r);
  }
  function Gi(t, n, e, r) {
    Symbol('JSCA_2739_2744');
    this.h = +t;
    this.s = +n;
    this.l = +e;
    this.opacity = +r;
  }
  No(
    Gi,
    Xi,
    Po(zo, {
      brighter(t) {
        Symbol('JSCA_2746_2749');
        t = t == null ? $o : Math.pow($o, t);
        return new Gi(this.h, this.s, this.l * t, this.opacity);
      },
      darker(t) {
        Symbol('JSCA_2750_2753');
        t = t == null ? Io : Math.pow(Io, t);
        return new Gi(this.h, this.s, this.l * t, this.opacity);
      },
      rgb() {
        Symbol('JSCA_2754_2757');
        var t = isNaN(this.h) ? 0 : (this.h + 120) * yi,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          o = Math.sin(t);
        return new _(
          255 * (n + e * (Fi * r + qi * o)),
          255 * (n + e * (Ui * r + Oi * o)),
          255 * (n + e * (Bi * r)),
          this.opacity
        );
      },
    })
  );
  function Vi(t, n, e, r, o) {
    Symbol('JSCA_2759_2762');
    var i = t * t,
      l = i * t;
    return (
      ((1 - 3 * t + 3 * i - l) * n +
        (4 - 6 * i + 3 * l) * e +
        (1 + 3 * t + 3 * i - 3 * l) * r +
        l * o) /
      6
    );
  }
  function Wi(l) {
    Symbol('JSCA_2763_2769');
    var a = l.length - 1;
    return function (t) {
      Symbol('JSCA_2765_2768');
      var n = t <= 0 ? (t = 0) : t >= 1 ? ((t = 1), a - 1) : Math.floor(t * a),
        e = l[n],
        r = l[n + 1],
        o = n > 0 ? l[n - 1] : 2 * e - r,
        i = n < a - 1 ? l[n + 2] : 2 * r - e;
      return Vi((t - n / a) * a, o, e, r, i);
    };
  }
  function Zi(l) {
    Symbol('JSCA_2770_2776');
    var a = l.length;
    return function (t) {
      Symbol('JSCA_2772_2775');
      var n = Math.floor(((t %= 1) < 0 ? ++t : t) * a),
        e = l[(n + a - 1) % a],
        r = l[n % a],
        o = l[(n + 1) % a],
        i = l[(n + 2) % a];
      return Vi((t - n / a) * a, e, r, o, i);
    };
  }
  var Ki = (t) => () => t;
  function Qi(n, e) {
    Symbol('JSCA_2778_2782');
    return function (t) {
      Symbol('JSCA_2779_2781');
      return n + t * e;
    };
  }
  function tl(n, e, r) {
    Symbol('JSCA_2783_2787');
    return (
      (n = Math.pow(n, r)),
      (e = Math.pow(e, r) - n),
      (r = 1 / r),
      function (t) {
        Symbol('JSCA_2784_2786');
        return Math.pow(n + t * e, r);
      }
    );
  }
  function nl(t, n) {
    Symbol('JSCA_2788_2791');
    var e = n - t;
    return e
      ? Qi(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
      : Ki(isNaN(t) ? n : t);
  }
  function el(e) {
    Symbol('JSCA_2792_2796');
    return (e = +e) === 1
      ? u
      : function (t, n) {
          Symbol('JSCA_2793_2795');
          return n - t ? tl(t, n, e) : Ki(isNaN(t) ? n : t);
        };
  }
  function u(t, n) {
    Symbol('JSCA_2797_2800');
    var e = n - t;
    return e ? Qi(t, e) : Ki(isNaN(t) ? n : t);
  }
  var rl = (function t(n) {
    Symbol('JSCA_2801_2815');
    var l = el(n);
    function e(n, t) {
      Symbol('JSCA_2803_2812');
      var e = l((n = ni(n)).r, (t = ni(t)).r),
        r = l(n.g, t.g),
        o = l(n.b, t.b),
        i = u(n.opacity, t.opacity);
      return function (t) {
        Symbol('JSCA_2805_2811');
        n.r = e(t);
        n.g = r(t);
        n.b = o(t);
        n.opacity = i(t);
        return n + '';
      };
    }
    e.gamma = t;
    return e;
  })(1);
  function ol(a) {
    Symbol('JSCA_2816_2836');
    return function (t) {
      Symbol('JSCA_2817_2835');
      var n = t.length,
        e = new Array(n),
        r = new Array(n),
        o = new Array(n),
        i,
        l;
      for (i = 0; i < n; ++i) {
        l = ni(t[i]);
        e[i] = l.r || 0;
        r[i] = l.g || 0;
        o[i] = l.b || 0;
      }
      e = a(e);
      r = a(r);
      o = a(o);
      l.opacity = 1;
      return function (t) {
        Symbol('JSCA_2829_2834');
        l.r = e(t);
        l.g = r(t);
        l.b = o(t);
        return l + '';
      };
    };
  }
  var il = ol(Wi);
  var ll = ol(Zi);
  function al(n, e) {
    Symbol('JSCA_2839_2846');
    if (!e) e = [];
    var r = n ? Math.min(e.length, n.length) : 0,
      o = e.slice(),
      i;
    return function (t) {
      Symbol('JSCA_2842_2845');
      for (i = 0; i < r; ++i) o[i] = n[i] * (1 - t) + e[i] * t;
      return o;
    };
  }
  function ul(t) {
    Symbol('JSCA_2847_2849');
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
  }
  function fl(t, n) {
    Symbol('JSCA_2850_2852');
    return (ul(n) ? al : _l)(t, n);
  }
  function _l(t, n) {
    Symbol('JSCA_2853_2861');
    var e = n ? n.length : 0,
      r = t ? Math.min(e, t.length) : 0,
      o = new Array(r),
      i = new Array(e),
      l;
    for (l = 0; l < r; ++l) o[l] = Al(t[l], n[l]);
    for (; l < e; ++l) i[l] = n[l];
    return function (t) {
      Symbol('JSCA_2857_2860');
      for (l = 0; l < r; ++l) i[l] = o[l](t);
      return i;
    };
  }
  function cl(n, e) {
    Symbol('JSCA_2862_2867');
    var r = new Date();
    return (
      (n = +n),
      (e = +e),
      function (t) {
        Symbol('JSCA_2864_2866');
        return r.setTime(n * (1 - t) + e * t), r;
      }
    );
  }
  function sl(n, e) {
    Symbol('JSCA_2868_2872');
    return (
      (n = +n),
      (e = +e),
      function (t) {
        Symbol('JSCA_2869_2871');
        return n * (1 - t) + e * t;
      }
    );
  }
  function Sl(t, n) {
    Symbol('JSCA_2873_2888');
    var e = {},
      r = {},
      o;
    if (t === null || typeof t !== 'object') t = {};
    if (n === null || typeof n !== 'object') n = {};
    for (o in n) {
      if (o in t) {
        e[o] = Al(t[o], n[o]);
      } else {
        r[o] = n[o];
      }
    }
    return function (t) {
      Symbol('JSCA_2884_2887');
      for (o in e) r[o] = e[o](t);
      return r;
    };
  }
  var hl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    yl = new RegExp(hl.source, 'g');
  function bl(t) {
    Symbol('JSCA_2890_2894');
    return function () {
      Symbol('JSCA_2891_2893');
      return t;
    };
  }
  function ml(n) {
    Symbol('JSCA_2895_2899');
    return function (t) {
      Symbol('JSCA_2896_2898');
      return n(t) + '';
    };
  }
  function dl(t, r) {
    Symbol('JSCA_2900_2927');
    var n = (hl.lastIndex = yl.lastIndex = 0),
      e,
      o,
      i,
      l = -1,
      a = [],
      u = [];
    (t = t + ''), (r = r + '');
    while ((e = hl.exec(t)) && (o = yl.exec(r))) {
      if ((i = o.index) > n) {
        i = r.slice(n, i);
        if (a[l]) a[l] += i;
        else a[++l] = i;
      }
      if ((e = e[0]) === (o = o[0])) {
        if (a[l]) a[l] += o;
        else a[++l] = o;
      } else {
        a[++l] = null;
        u.push({ i: l, x: sl(e, o) });
      }
      n = yl.lastIndex;
    }
    if (n < r.length) {
      i = r.slice(n);
      if (a[l]) a[l] += i;
      else a[++l] = i;
    }
    return a.length < 2
      ? u[0]
        ? ml(u[0].x)
        : bl(r)
      : ((r = u.length),
        function (t) {
          Symbol('JSCA_2923_2926');
          for (var n = 0, e; n < r; ++n) a[(e = u[n]).i] = e.x(t);
          return a.join('');
        });
  }
  function Al(t, n) {
    Symbol('JSCA_2928_2931');
    var e = typeof n,
      r;
    return n == null || e === 'boolean'
      ? Ki(n)
      : (e === 'number'
          ? sl
          : e === 'string'
          ? (r = Zo(n))
            ? ((n = r), rl)
            : dl
          : n instanceof Zo
          ? rl
          : n instanceof Date
          ? cl
          : ul(n)
          ? al
          : Array.isArray(n)
          ? _l
          : (typeof n.valueOf !== 'function' &&
              typeof n.toString !== 'function') ||
            isNaN(n)
          ? Sl
          : sl)(t, n);
  }
  function Cl(n) {
    Symbol('JSCA_2932_2937');
    var e = n.length;
    return function (t) {
      Symbol('JSCA_2934_2936');
      return n[Math.max(0, Math.min(e - 1, Math.floor(t * e)))];
    };
  }
  function Jl(t, n) {
    Symbol('JSCA_2938_2944');
    var e = nl(+t, +n);
    return function (t) {
      Symbol('JSCA_2940_2943');
      var n = e(t);
      return n - 360 * Math.floor(n / 360);
    };
  }
  function pl(n, e) {
    Symbol('JSCA_2945_2949');
    return (
      (n = +n),
      (e = +e),
      function (t) {
        Symbol('JSCA_2946_2948');
        return Math.round(n * (1 - t) + e * t);
      }
    );
  }
  var gl = 180 / Math.PI;
  var vl = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
  function xl(t, n, e, r, o, i) {
    Symbol('JSCA_2959_2973');
    var l, a, u;
    if ((l = Math.sqrt(t * t + n * n))) (t /= l), (n /= l);
    if ((u = t * e + n * r)) (e -= t * u), (r -= n * u);
    if ((a = Math.sqrt(e * e + r * r))) (e /= a), (r /= a), (u /= a);
    if (t * r < n * e) (t = -t), (n = -n), (u = -u), (l = -l);
    return {
      translateX: o,
      translateY: i,
      rotate: Math.atan2(n, t) * gl,
      skewX: Math.atan(u) * gl,
      scaleX: l,
      scaleY: a,
    };
  }
  var wl;
  function Ml(t) {
    Symbol('JSCA_2975_2978');
    const n = new (
      typeof DOMMatrix === 'function' ? DOMMatrix : WebKitCSSMatrix
    )(t + '');
    return n.isIdentity ? vl : xl(n.a, n.b, n.c, n.d, n.e, n.f);
  }
  function Tl(t) {
    Symbol('JSCA_2979_2986');
    if (t == null) return vl;
    if (!wl) wl = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    wl.setAttribute('transform', t);
    if (!(t = wl.transform.baseVal.consolidate())) return vl;
    t = t.matrix;
    return xl(t.a, t.b, t.c, t.d, t.e, t.f);
  }
  function kl(e, a, u, o) {
    Symbol('JSCA_2987_3054');
    function f(t) {
      Symbol('JSCA_2988_2990');
      return t.length ? t.pop() + ' ' : '';
    }
    function r(t, n, e, r, o, i) {
      Symbol('JSCA_2991_3004');
      if (t !== e || n !== r) {
        var l = o.push('translate(', null, a, null, u);
        i.push({ i: l - 4, x: sl(t, e) }, { i: l - 2, x: sl(n, r) });
      } else if (e || r) {
        o.push('translate(' + e + a + r + u);
      }
    }
    function l(t, n, e, r) {
      Symbol('JSCA_3005_3015');
      if (t !== n) {
        if (t - n > 180) n += 360;
        else if (n - t > 180) t += 360;
        r.push({ i: e.push(f(e) + 'rotate(', null, o) - 2, x: sl(t, n) });
      } else if (n) {
        e.push(f(e) + 'rotate(' + n + o);
      }
    }
    function _(t, n, e, r) {
      Symbol('JSCA_3016_3025');
      if (t !== n) {
        r.push({ i: e.push(f(e) + 'skewX(', null, o) - 2, x: sl(t, n) });
      } else if (n) {
        e.push(f(e) + 'skewX(' + n + o);
      }
    }
    function c(t, n, e, r, o, i) {
      Symbol('JSCA_3026_3039');
      if (t !== e || n !== r) {
        var l = o.push(f(o) + 'scale(', null, ',', null, ')');
        i.push({ i: l - 4, x: sl(t, e) }, { i: l - 2, x: sl(n, r) });
      } else if (e !== 1 || r !== 1) {
        o.push(f(o) + 'scale(' + e + ',' + r + ')');
      }
    }
    return function (t, n) {
      Symbol('JSCA_3040_3053');
      var o = [],
        i = [];
      (t = e(t)), (n = e(n));
      r(t.translateX, t.translateY, n.translateX, n.translateY, o, i);
      l(t.rotate, n.rotate, o, i);
      _(t.skewX, n.skewX, o, i);
      c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, o, i);
      t = n = null;
      return function (t) {
        Symbol('JSCA_3048_3052');
        var n = -1,
          e = i.length,
          r;
        while (++n < e) o[(r = i[n]).i] = r.x(t);
        return o.join('');
      };
    };
  }
  var El = kl(Ml, 'px, ', 'px)', 'deg)');
  var Nl = kl(Tl, ', ', ')', ')');
  var Pl = 1e-12;
  function zl(t) {
    Symbol('JSCA_3058_3060');
    return ((t = Math.exp(t)) + 1 / t) / 2;
  }
  function Il(t) {
    Symbol('JSCA_3061_3063');
    return ((t = Math.exp(t)) - 1 / t) / 2;
  }
  function $l(t) {
    Symbol('JSCA_3064_3066');
    return ((t = Math.exp(2 * t)) - 1) / (t + 1);
  }
  var Dl = (function o(d, A, C) {
    Symbol('JSCA_3067_3091');
    function t(t, n) {
      Symbol('JSCA_3068_3085');
      var o = t[0],
        i = t[1],
        l = t[2],
        e = n[0],
        r = n[1],
        a = n[2],
        u = e - o,
        f = r - i,
        _ = u * u + f * f,
        c,
        s;
      if (_ < Pl) {
        s = Math.log(a / l) / d;
        c = function (t) {
          Symbol('JSCA_3072_3074');
          return [o + t * u, i + t * f, l * Math.exp(d * t * s)];
        };
      } else {
        var S = Math.sqrt(_),
          h = (a * a - l * l + C * _) / (2 * l * A * S),
          y = (a * a - l * l - C * _) / (2 * a * A * S),
          b = Math.log(Math.sqrt(h * h + 1) - h),
          m = Math.log(Math.sqrt(y * y + 1) - y);
        s = (m - b) / d;
        c = function (t) {
          Symbol('JSCA_3078_3081');
          var n = t * s,
            e = zl(b),
            r = (l / (A * S)) * (e * $l(d * n + b) - Il(b));
          return [o + r * u, i + r * f, (l * e) / zl(d * n + b)];
        };
      }
      c.duration = (s * 1e3 * d) / Math.SQRT2;
      return c;
    }
    t.rho = function (t) {
      Symbol('JSCA_3086_3089');
      var n = Math.max(0.001, +t),
        e = n * n,
        r = e * e;
      return o(n, e, r);
    };
    return t;
  })(Math.SQRT2, 2, 4);
  function Rl(l) {
    Symbol('JSCA_3092_3103');
    return function (n, t) {
      Symbol('JSCA_3093_3102');
      var e = l((n = _i(n)).h, (t = _i(t)).h),
        r = u(n.s, t.s),
        o = u(n.l, t.l),
        i = u(n.opacity, t.opacity);
      return function (t) {
        Symbol('JSCA_3095_3101');
        n.h = e(t);
        n.s = r(t);
        n.l = o(t);
        n.opacity = i(t);
        return n + '';
      };
    };
  }
  var Fl = Rl(nl);
  var ql = Rl(u);
  function Ul(n, t) {
    Symbol('JSCA_3106_3115');
    var e = u((n = Mi(n)).l, (t = Mi(t)).l),
      r = u(n.a, t.a),
      o = u(n.b, t.b),
      i = u(n.opacity, t.opacity);
    return function (t) {
      Symbol('JSCA_3108_3114');
      n.l = e(t);
      n.a = r(t);
      n.b = o(t);
      n.opacity = i(t);
      return n + '';
    };
  }
  function Ol(l) {
    Symbol('JSCA_3116_3127');
    return function (n, t) {
      Symbol('JSCA_3117_3126');
      var e = l((n = $i(n)).h, (t = $i(t)).h),
        r = u(n.c, t.c),
        o = u(n.l, t.l),
        i = u(n.opacity, t.opacity);
      return function (t) {
        Symbol('JSCA_3119_3125');
        n.h = e(t);
        n.c = r(t);
        n.l = o(t);
        n.opacity = i(t);
        return n + '';
      };
    };
  }
  var Bl = Ol(nl);
  var Yl = Ol(u);
  function Ll(a) {
    Symbol('JSCA_3130_3146');
    return (function t(l) {
      Symbol('JSCA_3131_3145');
      l = +l;
      function n(n, t) {
        Symbol('JSCA_3133_3142');
        var e = a((n = Xi(n)).h, (t = Xi(t)).h),
          r = u(n.s, t.s),
          o = u(n.l, t.l),
          i = u(n.opacity, t.opacity);
        return function (t) {
          Symbol('JSCA_3135_3141');
          n.h = e(t);
          n.s = r(t);
          n.l = o(Math.pow(t, l));
          n.opacity = i(t);
          return n + '';
        };
      }
      n.gamma = t;
      return n;
    })(1);
  }
  var jl = Ll(nl);
  var Hl = Ll(u);
  function Xl(t, n) {
    Symbol('JSCA_3149_3157');
    if (n === undefined) (n = t), (t = Al);
    var e = 0,
      r = n.length - 1,
      o = n[0],
      i = new Array(r < 0 ? 0 : r);
    while (e < r) i[e] = t(o, (o = n[++e]));
    return function (t) {
      Symbol('JSCA_3153_3156');
      var n = Math.max(0, Math.min(r - 1, Math.floor((t *= r))));
      return i[n](t - n);
    };
  }
  function Gl(t, n) {
    Symbol('JSCA_3158_3162');
    var e = new Array(n);
    for (var r = 0; r < n; ++r) e[r] = t(r / (n - 1));
    return e;
  }
  var Vl = 0,
    Wl = 0,
    Zl = 0,
    Kl = 1e3,
    Ql,
    t1,
    n1 = 0,
    e1 = 0,
    r1 = 0,
    o1 =
      typeof performance === 'object' && performance.now ? performance : Date,
    i1 =
      typeof window === 'object' && window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : function (t) {
            Symbol('JSCA_3163_3165');
            setTimeout(t, 17);
          };
  function l1() {
    Symbol('JSCA_3166_3168');
    return e1 || (i1(a1), (e1 = o1.now() + r1));
  }
  function a1() {
    Symbol('JSCA_3169_3171');
    e1 = 0;
  }
  function u1() {
    Symbol('JSCA_3172_3174');
    this._call = this._time = this._next = null;
  }
  u1.prototype = f1.prototype = {
    constructor: u1,
    restart: function (t, n, e) {
      Symbol('JSCA_3177_3187');
      if (typeof t !== 'function')
        throw new TypeError('callback is not a function');
      e = (e == null ? l1() : +e) + (n == null ? 0 : +n);
      if (!this._next && t1 !== this) {
        if (t1) t1._next = this;
        else Ql = this;
        t1 = this;
      }
      this._call = t;
      this._time = e;
      h1();
    },
    stop: function () {
      Symbol('JSCA_3188_3194');
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        h1();
      }
    },
  };
  function f1(t, n, e) {
    Symbol('JSCA_3196_3200');
    var r = new u1();
    r.restart(t, n, e);
    return r;
  }
  function _1() {
    Symbol('JSCA_3201_3210');
    l1();
    ++Vl;
    var t = Ql,
      n;
    while (t) {
      if ((n = e1 - t._time) >= 0) t._call.call(undefined, n);
      t = t._next;
    }
    --Vl;
  }
  function c1() {
    Symbol('JSCA_3211_3221');
    e1 = (n1 = o1.now()) + r1;
    Vl = Wl = 0;
    try {
      _1();
    } finally {
      Vl = 0;
      S1();
      e1 = 0;
    }
  }
  function s1() {
    Symbol('JSCA_3222_3225');
    var t = o1.now(),
      n = t - n1;
    if (n > Kl) (r1 -= n), (n1 = t);
  }
  function S1() {
    Symbol('JSCA_3226_3239');
    var t,
      n = Ql,
      e,
      r = Infinity;
    while (n) {
      if (n._call) {
        if (r > n._time) r = n._time;
        (t = n), (n = n._next);
      } else {
        (e = n._next), (n._next = null);
        n = t ? (t._next = e) : (Ql = e);
      }
    }
    t1 = t;
    h1(r);
  }
  function h1(t) {
    Symbol('JSCA_3240_3251');
    if (Vl) return;
    if (Wl) Wl = clearTimeout(Wl);
    var n = t - e1;
    if (n > 24) {
      if (t < Infinity) Wl = setTimeout(c1, t - o1.now() - r1);
      if (Zl) Zl = clearInterval(Zl);
    } else {
      if (!Zl) (n1 = o1.now()), (Zl = setInterval(s1, Kl));
      (Vl = 1), i1(c1);
    }
  }
  function y1(n, e, t) {
    Symbol('JSCA_3252_3260');
    var r = new u1();
    e = e == null ? 0 : +e;
    r.restart(
      (t) => {
        r.stop();
        n(t + e);
      },
      e,
      t
    );
    return r;
  }
  function b1(t, n, e) {
    Symbol('JSCA_3261_3275');
    var i = new u1(),
      l = n;
    if (n == null) return i.restart(t, n, e), i;
    i._restart = i.restart;
    i.restart = function (e, r, o) {
      Symbol('JSCA_3265_3272');
      (r = +r), (o = o == null ? l1() : +o);
      i._restart(
        function t(n) {
          Symbol('JSCA_3267_3271');
          n += l;
          i._restart(t, (l += r), o);
          e(n);
        },
        r,
        o
      );
    };
    i.restart(t, n, e);
    return i;
  }
  var m1 = le('start', 'end', 'cancel', 'interrupt');
  var d1 = [];
  var A1 = 0;
  var C1 = 1;
  var J1 = 2;
  var p1 = 3;
  var g1 = 4;
  var v1 = 5;
  var x1 = 6;
  function w1(t, n, e, r, o, i) {
    Symbol('JSCA_3285_3301');
    var l = t.__transition;
    if (!l) t.__transition = {};
    else if (e in l) return;
    E1(t, e, {
      name: n,
      index: r,
      group: o,
      on: m1,
      tween: d1,
      time: i.time,
      delay: i.delay,
      duration: i.duration,
      ease: i.ease,
      timer: null,
      state: A1,
    });
  }
  function M1(t, n) {
    Symbol('JSCA_3302_3306');
    var e = k1(t, n);
    if (e.state > A1) throw new Error('too late; already scheduled');
    return e;
  }
  function T1(t, n) {
    Symbol('JSCA_3307_3311');
    var e = k1(t, n);
    if (e.state > p1) throw new Error('too late; already running');
    return e;
  }
  function k1(t, n) {
    Symbol('JSCA_3312_3316');
    var e = t.__transition;
    if (!e || !(e = e[n])) throw new Error('transition not found');
    return e;
  }
  function E1(i, l, a) {
    Symbol('JSCA_3317_3381');
    var u = i.__transition,
      f;
    u[l] = a;
    a.timer = f1(t, 0, a.time);
    function t(t) {
      Symbol('JSCA_3321_3325');
      a.state = C1;
      a.timer.restart(_, a.delay, a.time);
      if (a.delay <= t) _(t - a.delay);
    }
    function _(t) {
      Symbol('JSCA_3326_3363');
      var n, e, r, o;
      if (a.state !== C1) return s();
      for (n in u) {
        o = u[n];
        if (o.name !== a.name) continue;
        if (o.state === p1) return y1(_);
        if (o.state === g1) {
          o.state = x1;
          o.timer.stop();
          o.on.call('interrupt', i, i.__data__, o.index, o.group);
          delete u[n];
        } else if (+n < l) {
          o.state = x1;
          o.timer.stop();
          o.on.call('cancel', i, i.__data__, o.index, o.group);
          delete u[n];
        }
      }
      y1(function () {
        Symbol('JSCA_3345_3351');
        if (a.state === p1) {
          a.state = g1;
          a.timer.restart(c, a.delay, a.time);
          c(t);
        }
      });
      a.state = J1;
      a.on.call('start', i, i.__data__, a.index, a.group);
      if (a.state !== J1) return;
      a.state = p1;
      f = new Array((r = a.tween.length));
      for (n = 0, e = -1; n < r; ++n) {
        if ((o = a.tween[n].value.call(i, i.__data__, a.index, a.group))) {
          f[++e] = o;
        }
      }
      f.length = e + 1;
    }
    function c(t) {
      Symbol('JSCA_3364_3373');
      var n =
          t < a.duration
            ? a.ease.call(null, t / a.duration)
            : (a.timer.restart(s), (a.state = v1), 1),
        e = -1,
        r = f.length;
      while (++e < r) {
        f[e].call(i, n);
      }
      if (a.state === v1) {
        a.on.call('end', i, i.__data__, a.index, a.group);
        s();
      }
    }
    function s() {
      Symbol('JSCA_3374_3380');
      a.state = x1;
      a.timer.stop();
      delete u[l];
      for (var t in u) return;
      delete i.__transition;
    }
  }
  function N1(t, n) {
    Symbol('JSCA_3382_3398');
    var e = t.__transition,
      r,
      o,
      i = true,
      l;
    if (!e) return;
    n = n == null ? null : n + '';
    for (l in e) {
      if ((r = e[l]).name !== n) {
        i = false;
        continue;
      }
      o = r.state > J1 && r.state < v1;
      r.state = x1;
      r.timer.stop();
      r.on.call(o ? 'interrupt' : 'cancel', t, t.__data__, r.index, r.group);
      delete e[l];
    }
    if (i) delete t.__transition;
  }
  function P1(t) {
    Symbol('JSCA_3399_3403');
    return this.each(function () {
      Symbol('JSCA_3400_3402');
      N1(this, t);
    });
  }
  function z1(o, i) {
    Symbol('JSCA_3404_3420');
    var l, a;
    return function () {
      Symbol('JSCA_3406_3419');
      var t = T1(this, o),
        n = t.tween;
      if (n !== l) {
        a = l = n;
        for (var e = 0, r = a.length; e < r; ++e) {
          if (a[e].name === i) {
            a = a.slice();
            a.splice(e, 1);
            break;
          }
        }
      }
      t.tween = a;
    };
  }
  function I1(i, l, a) {
    Symbol('JSCA_3421_3441');
    var u, f;
    if (typeof a !== 'function') throw new Error();
    return function () {
      Symbol('JSCA_3424_3440');
      var t = T1(this, i),
        n = t.tween;
      if (n !== u) {
        f = (u = n).slice();
        for (var e = { name: l, value: a }, r = 0, o = f.length; r < o; ++r) {
          if (f[r].name === l) {
            f[r] = e;
            break;
          }
        }
        if (r === o) f.push(e);
      }
      t.tween = f;
    };
  }
  function $1(t, n) {
    Symbol('JSCA_3442_3455');
    var e = this._id;
    t += '';
    if (arguments.length < 2) {
      var r = k1(this.node(), e).tween;
      for (var o = 0, i = r.length, l; o < i; ++o) {
        if ((l = r[o]).name === t) {
          return l.value;
        }
      }
      return null;
    }
    return this.each((n == null ? z1 : I1)(e, t, n));
  }
  function D1(t, n, e) {
    Symbol('JSCA_3456_3465');
    var r = t._id;
    t.each(function () {
      Symbol('JSCA_3458_3461');
      var t = T1(this, r);
      (t.value || (t.value = {}))[n] = e.apply(this, arguments);
    });
    return function (t) {
      Symbol('JSCA_3462_3464');
      return k1(t, r).value[n];
    };
  }
  function R1(t, n) {
    Symbol('JSCA_3466_3469');
    var e;
    return (
      typeof n === 'number'
        ? sl
        : n instanceof Zo
        ? rl
        : (e = Zo(n))
        ? ((n = e), rl)
        : dl
    )(t, n);
  }
  function F1(t) {
    Symbol('JSCA_3470_3474');
    return function () {
      Symbol('JSCA_3471_3473');
      this.removeAttribute(t);
    };
  }
  function q1(t) {
    Symbol('JSCA_3475_3479');
    return function () {
      Symbol('JSCA_3476_3478');
      this.removeAttributeNS(t.space, t.local);
    };
  }
  function U1(n, e, r) {
    Symbol('JSCA_3480_3486');
    var o,
      i = r + '',
      l;
    return function () {
      Symbol('JSCA_3482_3485');
      var t = this.getAttribute(n);
      return t === i ? null : t === o ? l : (l = e((o = t), r));
    };
  }
  function O1(n, e, r) {
    Symbol('JSCA_3487_3493');
    var o,
      i = r + '',
      l;
    return function () {
      Symbol('JSCA_3489_3492');
      var t = this.getAttributeNS(n.space, n.local);
      return t === i ? null : t === o ? l : (l = e((o = t), r));
    };
  }
  function B1(r, o, i) {
    Symbol('JSCA_3494_3503');
    var l, a, u;
    return function () {
      Symbol('JSCA_3496_3502');
      var t,
        n = i(this),
        e;
      if (n == null) return void this.removeAttribute(r);
      t = this.getAttribute(r);
      e = n + '';
      return t === e
        ? null
        : t === l && e === a
        ? u
        : ((a = e), (u = o((l = t), n)));
    };
  }
  function Y1(r, o, i) {
    Symbol('JSCA_3504_3513');
    var l, a, u;
    return function () {
      Symbol('JSCA_3506_3512');
      var t,
        n = i(this),
        e;
      if (n == null) return void this.removeAttributeNS(r.space, r.local);
      t = this.getAttributeNS(r.space, r.local);
      e = n + '';
      return t === e
        ? null
        : t === l && e === a
        ? u
        : ((a = e), (u = o((l = t), n)));
    };
  }
  function L1(t, n) {
    Symbol('JSCA_3514_3517');
    var e = Se(t),
      r = e === 'transform' ? Nl : R1;
    return this.attrTween(
      t,
      typeof n === 'function'
        ? (e.local ? Y1 : B1)(e, r, D1(this, 'attr.' + t, n))
        : n == null
        ? (e.local ? q1 : F1)(e)
        : (e.local ? O1 : U1)(e, r, n)
    );
  }
  function j1(n, e) {
    Symbol('JSCA_3518_3522');
    return function (t) {
      Symbol('JSCA_3519_3521');
      this.setAttribute(n, e.call(this, t));
    };
  }
  function H1(n, e) {
    Symbol('JSCA_3523_3527');
    return function (t) {
      Symbol('JSCA_3524_3526');
      this.setAttributeNS(n.space, n.local, e.call(this, t));
    };
  }
  function X1(n, e) {
    Symbol('JSCA_3528_3537');
    var r, o;
    function t() {
      Symbol('JSCA_3530_3534');
      var t = e.apply(this, arguments);
      if (t !== o) r = (o = t) && H1(n, t);
      return r;
    }
    t._value = e;
    return t;
  }
  function G1(n, e) {
    Symbol('JSCA_3538_3547');
    var r, o;
    function t() {
      Symbol('JSCA_3540_3544');
      var t = e.apply(this, arguments);
      if (t !== o) r = (o = t) && j1(n, t);
      return r;
    }
    t._value = e;
    return t;
  }
  function V1(t, n) {
    Symbol('JSCA_3548_3555');
    var e = 'attr.' + t;
    if (arguments.length < 2) return (e = this.tween(e)) && e._value;
    if (n == null) return this.tween(e, null);
    if (typeof n !== 'function') throw new Error();
    var r = Se(t);
    return this.tween(e, (r.local ? X1 : G1)(r, n));
  }
  function W1(t, n) {
    Symbol('JSCA_3556_3560');
    return function () {
      Symbol('JSCA_3557_3559');
      M1(this, t).delay = +n.apply(this, arguments);
    };
  }
  function Z1(t, n) {
    Symbol('JSCA_3561_3565');
    return (
      (n = +n),
      function () {
        Symbol('JSCA_3562_3564');
        M1(this, t).delay = n;
      }
    );
  }
  function K1(t) {
    Symbol('JSCA_3566_3569');
    var n = this._id;
    return arguments.length
      ? this.each((typeof t === 'function' ? W1 : Z1)(n, t))
      : k1(this.node(), n).delay;
  }
  function Q1(t, n) {
    Symbol('JSCA_3570_3574');
    return function () {
      Symbol('JSCA_3571_3573');
      T1(this, t).duration = +n.apply(this, arguments);
    };
  }
  function ta(t, n) {
    Symbol('JSCA_3575_3579');
    return (
      (n = +n),
      function () {
        Symbol('JSCA_3576_3578');
        T1(this, t).duration = n;
      }
    );
  }
  function na(t) {
    Symbol('JSCA_3580_3583');
    var n = this._id;
    return arguments.length
      ? this.each((typeof t === 'function' ? Q1 : ta)(n, t))
      : k1(this.node(), n).duration;
  }
  function ea(t, n) {
    Symbol('JSCA_3584_3589');
    if (typeof n !== 'function') throw new Error();
    return function () {
      Symbol('JSCA_3586_3588');
      T1(this, t).ease = n;
    };
  }
  function ra(t) {
    Symbol('JSCA_3590_3593');
    var n = this._id;
    return arguments.length ? this.each(ea(n, t)) : k1(this.node(), n).ease;
  }
  function oa(n, e) {
    Symbol('JSCA_3594_3600');
    return function () {
      Symbol('JSCA_3595_3599');
      var t = e.apply(this, arguments);
      if (typeof t !== 'function') throw new Error();
      T1(this, n).ease = t;
    };
  }
  function ia(t) {
    Symbol('JSCA_3601_3604');
    if (typeof t !== 'function') throw new Error();
    return this.each(oa(this._id, t));
  }
  function la(t) {
    Symbol('JSCA_3605_3615');
    if (typeof t !== 'function') t = xe(t);
    for (
      var n = this._groups, e = n.length, r = new Array(e), o = 0;
      o < e;
      ++o
    ) {
      for (var i = n[o], l = i.length, a = (r[o] = []), u, f = 0; f < l; ++f) {
        if ((u = i[f]) && t.call(u, u.__data__, f, i)) {
          a.push(u);
        }
      }
    }
    return new $a(r, this._parents, this._name, this._id);
  }
  function aa(t) {
    Symbol('JSCA_3616_3629');
    if (t._id !== this._id) throw new Error();
    for (
      var n = this._groups,
        e = t._groups,
        r = n.length,
        o = e.length,
        i = Math.min(r, o),
        l = new Array(r),
        a = 0;
      a < i;
      ++a
    ) {
      for (
        var u = n[a],
          f = e[a],
          _ = u.length,
          c = (l[a] = new Array(_)),
          s,
          S = 0;
        S < _;
        ++S
      ) {
        if ((s = u[S] || f[S])) {
          c[S] = s;
        }
      }
    }
    for (; a < r; ++a) {
      l[a] = n[a];
    }
    return new $a(l, this._parents, this._name, this._id);
  }
  function ua(t) {
    Symbol('JSCA_3630_3636');
    return (t + '')
      .trim()
      .split(/^|\s+/)
      .every(function (t) {
        Symbol('JSCA_3631_3635');
        var n = t.indexOf('.');
        if (n >= 0) t = t.slice(0, n);
        return !t || t === 'start';
      });
  }
  function fa(e, r, o) {
    Symbol('JSCA_3637_3644');
    var i,
      l,
      a = ua(r) ? M1 : T1;
    return function () {
      Symbol('JSCA_3639_3643');
      var t = a(this, e),
        n = t.on;
      if (n !== i) (l = (i = n).copy()).on(r, o);
      t.on = l;
    };
  }
  function _a(t, n) {
    Symbol('JSCA_3645_3648');
    var e = this._id;
    return arguments.length < 2
      ? k1(this.node(), e).on.on(t)
      : this.each(fa(e, t, n));
  }
  function ca(e) {
    Symbol('JSCA_3649_3655');
    return function () {
      Symbol('JSCA_3650_3654');
      var t = this.parentNode;
      for (var n in this.__transition) if (+n !== e) return;
      if (t) t.removeChild(this);
    };
  }
  function sa() {
    Symbol('JSCA_3656_3658');
    return this.on('end.remove', ca(this._id));
  }
  function Sa(t) {
    Symbol('JSCA_3659_3672');
    var n = this._name,
      e = this._id;
    if (typeof t !== 'function') t = de(t);
    for (
      var r = this._groups, o = r.length, i = new Array(o), l = 0;
      l < o;
      ++l
    ) {
      for (
        var a = r[l], u = a.length, f = (i[l] = new Array(u)), _, c, s = 0;
        s < u;
        ++s
      ) {
        if ((_ = a[s]) && (c = t.call(_, _.__data__, s, a))) {
          if ('__data__' in _) c.__data__ = _.__data__;
          f[s] = c;
          w1(f[s], n, e, s, f, k1(_, e));
        }
      }
    }
    return new $a(i, this._parents, n, e);
  }
  function ha(t) {
    Symbol('JSCA_3673_3690');
    var n = this._name,
      e = this._id;
    if (typeof t !== 'function') t = pe(t);
    for (
      var r = this._groups, o = r.length, i = [], l = [], a = 0;
      a < o;
      ++a
    ) {
      for (var u = r[a], f = u.length, _, c = 0; c < f; ++c) {
        if ((_ = u[c])) {
          for (
            var s = t.call(_, _.__data__, c, u),
              S,
              h = k1(_, e),
              y = 0,
              b = s.length;
            y < b;
            ++y
          ) {
            if ((S = s[y])) {
              w1(S, n, e, y, s, h);
            }
          }
          i.push(s);
          l.push(_);
        }
      }
    }
    return new $a(i, l, n, e);
  }
  var ya = ao.prototype.constructor;
  function ba() {
    Symbol('JSCA_3692_3694');
    return new ya(this._groups, this._parents);
  }
  function ma(e, r) {
    Symbol('JSCA_3695_3701');
    var o, i, l;
    return function () {
      Symbol('JSCA_3697_3700');
      var t = yr(this, e),
        n = (this.style.removeProperty(e), yr(this, e));
      return t === n
        ? null
        : t === o && n === i
        ? l
        : (l = r((o = t), (i = n)));
    };
  }
  function da(t) {
    Symbol('JSCA_3702_3706');
    return function () {
      Symbol('JSCA_3703_3705');
      this.style.removeProperty(t);
    };
  }
  function Aa(n, e, r) {
    Symbol('JSCA_3707_3713');
    var o,
      i = r + '',
      l;
    return function () {
      Symbol('JSCA_3709_3712');
      var t = yr(this, n);
      return t === i ? null : t === o ? l : (l = e((o = t), r));
    };
  }
  function Ca(r, o, i) {
    Symbol('JSCA_3714_3721');
    var l, a, u;
    return function () {
      Symbol('JSCA_3716_3720');
      var t = yr(this, r),
        n = i(this),
        e = n + '';
      if (n == null) e = n = (this.style.removeProperty(r), yr(this, r));
      return t === e
        ? null
        : t === l && e === a
        ? u
        : ((a = e), (u = o((l = t), n)));
    };
  }
  function Ja(r, o) {
    Symbol('JSCA_3722_3729');
    var i,
      l,
      a,
      u = 'style.' + o,
      f = 'end.' + u,
      _;
    return function () {
      Symbol('JSCA_3724_3728');
      var t = T1(this, r),
        n = t.on,
        e = t.value[u] == null ? _ || (_ = da(o)) : undefined;
      if (n !== i || a !== e) (l = (i = n).copy()).on(f, (a = e));
      t.on = l;
    };
  }
  function pa(t, n, e) {
    Symbol('JSCA_3730_3733');
    var r = (t += '') === 'transform' ? El : R1;
    return n == null
      ? this.styleTween(t, ma(t, r)).on('end.style.' + t, da(t))
      : typeof n === 'function'
      ? this.styleTween(t, Ca(t, r, D1(this, 'style.' + t, n))).each(
          Ja(this._id, t)
        )
      : this.styleTween(t, Aa(t, r, n), e).on('end.style.' + t, null);
  }
  function ga(n, e, r) {
    Symbol('JSCA_3734_3738');
    return function (t) {
      Symbol('JSCA_3735_3737');
      this.style.setProperty(n, e.call(this, t), r);
    };
  }
  function va(n, e, r) {
    Symbol('JSCA_3739_3748');
    var o, i;
    function t() {
      Symbol('JSCA_3741_3745');
      var t = e.apply(this, arguments);
      if (t !== i) o = (i = t) && ga(n, t, r);
      return o;
    }
    t._value = e;
    return t;
  }
  function xa(t, n, e) {
    Symbol('JSCA_3749_3755');
    var r = 'style.' + (t += '');
    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
    if (n == null) return this.tween(r, null);
    if (typeof n !== 'function') throw new Error();
    return this.tween(r, va(t, n, e == null ? '' : e));
  }
  function wa(t) {
    Symbol('JSCA_3756_3760');
    return function () {
      Symbol('JSCA_3757_3759');
      this.textContent = t;
    };
  }
  function Ma(n) {
    Symbol('JSCA_3761_3766');
    return function () {
      Symbol('JSCA_3762_3765');
      var t = n(this);
      this.textContent = t == null ? '' : t;
    };
  }
  function Ta(t) {
    Symbol('JSCA_3767_3769');
    return this.tween(
      'text',
      typeof t === 'function'
        ? Ma(D1(this, 'text', t))
        : wa(t == null ? '' : t + '')
    );
  }
  function ka(n) {
    Symbol('JSCA_3770_3774');
    return function (t) {
      Symbol('JSCA_3771_3773');
      this.textContent = n.call(this, t);
    };
  }
  function Ea(n) {
    Symbol('JSCA_3775_3784');
    var e, r;
    function t() {
      Symbol('JSCA_3777_3781');
      var t = n.apply(this, arguments);
      if (t !== r) e = (r = t) && ka(t);
      return e;
    }
    t._value = n;
    return t;
  }
  function Na(t) {
    Symbol('JSCA_3785_3791');
    var n = 'text';
    if (arguments.length < 1) return (n = this.tween(n)) && n._value;
    if (t == null) return this.tween(n, null);
    if (typeof t !== 'function') throw new Error();
    return this.tween(n, Ea(t));
  }
  function Pa() {
    Symbol('JSCA_3792_3808');
    var t = this._name,
      n = this._id,
      e = Ra();
    for (var r = this._groups, o = r.length, i = 0; i < o; ++i) {
      for (var l = r[i], a = l.length, u, f = 0; f < a; ++f) {
        if ((u = l[f])) {
          var _ = k1(u, n);
          w1(u, t, e, f, l, {
            time: _.time + _.delay + _.duration,
            delay: 0,
            duration: _.duration,
            ease: _.ease,
          });
        }
      }
    }
    return new $a(r, this._parents, t, e);
  }
  function za() {
    Symbol('JSCA_3809_3831');
    var o,
      i,
      l = this,
      a = l._id,
      u = l.size();
    return new Promise(function (t, n) {
      Symbol('JSCA_3811_3830');
      var e = { value: n },
        r = {
          value: function () {
            Symbol('JSCA_3815_3817');
            if (--u === 0) t();
          },
        };
      l.each(function () {
        Symbol('JSCA_3819_3828');
        var t = T1(this, a),
          n = t.on;
        if (n !== o) {
          i = (o = n).copy();
          i._.cancel.push(e);
          i._.interrupt.push(e);
          i._.end.push(r);
        }
        t.on = i;
      });
      if (u === 0) t();
    });
  }
  var Ia = 0;
  function $a(t, n, e, r) {
    Symbol('JSCA_3833_3838');
    this._groups = t;
    this._parents = n;
    this._name = e;
    this._id = r;
  }
  function Da(t) {
    Symbol('JSCA_3839_3841');
    return ao().transition(t);
  }
  function Ra() {
    Symbol('JSCA_3842_3844');
    return ++Ia;
  }
  var Fa = ao.prototype;
  $a.prototype = Da.prototype = {
    constructor: $a,
    select: Sa,
    selectAll: ha,
    selectChild: Fa.selectChild,
    selectChildren: Fa.selectChildren,
    filter: la,
    merge: aa,
    selection: ba,
    transition: Pa,
    call: Fa.call,
    nodes: Fa.nodes,
    node: Fa.node,
    size: Fa.size,
    empty: Fa.empty,
    each: Fa.each,
    on: _a,
    attr: L1,
    attrTween: V1,
    style: pa,
    styleTween: xa,
    text: Ta,
    textTween: Na,
    remove: sa,
    tween: $1,
    delay: K1,
    duration: na,
    ease: ra,
    easeVarying: ia,
    end: za,
    [Symbol.iterator]: Fa[Symbol.iterator],
  };
  const qa = (t) => +t;
  function Ua(t) {
    Symbol('JSCA_3879_3881');
    return t * t;
  }
  function Oa(t) {
    Symbol('JSCA_3882_3884');
    return t * (2 - t);
  }
  function Ba(t) {
    Symbol('JSCA_3885_3887');
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
  }
  function Ya(t) {
    Symbol('JSCA_3888_3890');
    return t * t * t;
  }
  function La(t) {
    Symbol('JSCA_3891_3893');
    return --t * t * t + 1;
  }
  function ja(t) {
    Symbol('JSCA_3894_3896');
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }
  var Ha = 3;
  var Xa = (function t(n) {
    Symbol('JSCA_3898_3905');
    n = +n;
    function e(t) {
      Symbol('JSCA_3900_3902');
      return Math.pow(t, n);
    }
    e.exponent = t;
    return e;
  })(Ha);
  var Ga = (function t(n) {
    Symbol('JSCA_3906_3913');
    n = +n;
    function e(t) {
      Symbol('JSCA_3908_3910');
      return 1 - Math.pow(1 - t, n);
    }
    e.exponent = t;
    return e;
  })(Ha);
  var Va = (function t(n) {
    Symbol('JSCA_3914_3921');
    n = +n;
    function e(t) {
      Symbol('JSCA_3916_3918');
      return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
    }
    e.exponent = t;
    return e;
  })(Ha);
  var Wa = Math.PI,
    Za = Wa / 2;
  function Ka(t) {
    Symbol('JSCA_3923_3925');
    return +t === 1 ? 1 : 1 - Math.cos(t * Za);
  }
  function Qa(t) {
    Symbol('JSCA_3926_3928');
    return Math.sin(t * Za);
  }
  function tu(t) {
    Symbol('JSCA_3929_3931');
    return (1 - Math.cos(Wa * t)) / 2;
  }
  function nu(t) {
    Symbol('JSCA_3932_3934');
    return (Math.pow(2, -10 * t) - 0.0009765625) * 1.0009775171065494;
  }
  function eu(t) {
    Symbol('JSCA_3935_3937');
    return nu(1 - +t);
  }
  function ru(t) {
    Symbol('JSCA_3938_3940');
    return 1 - nu(t);
  }
  function ou(t) {
    Symbol('JSCA_3941_3943');
    return ((t *= 2) <= 1 ? nu(1 - t) : 2 - nu(t - 1)) / 2;
  }
  function iu(t) {
    Symbol('JSCA_3944_3946');
    return 1 - Math.sqrt(1 - t * t);
  }
  function lu(t) {
    Symbol('JSCA_3947_3949');
    return Math.sqrt(1 - --t * t);
  }
  function au(t) {
    Symbol('JSCA_3950_3952');
    return (
      ((t *= 2) <= 1
        ? 1 - Math.sqrt(1 - t * t)
        : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
    );
  }
  var uu = 4 / 11,
    fu = 6 / 11,
    _u = 8 / 11,
    cu = 3 / 4,
    su = 9 / 11,
    Su = 10 / 11,
    hu = 15 / 16,
    yu = 21 / 22,
    bu = 63 / 64,
    mu = 1 / uu / uu;
  function du(t) {
    Symbol('JSCA_3954_3956');
    return 1 - Au(1 - t);
  }
  function Au(t) {
    Symbol('JSCA_3957_3959');
    return (t = +t) < uu
      ? mu * t * t
      : t < _u
      ? mu * (t -= fu) * t + cu
      : t < Su
      ? mu * (t -= su) * t + hu
      : mu * (t -= yu) * t + bu;
  }
  function Cu(t) {
    Symbol('JSCA_3960_3962');
    return ((t *= 2) <= 1 ? 1 - Au(1 - t) : Au(t - 1) + 1) / 2;
  }
  var Ju = 1.70158;
  var pu = (function t(n) {
    Symbol('JSCA_3964_3971');
    n = +n;
    function e(t) {
      Symbol('JSCA_3966_3968');
      return (t = +t) * t * (n * (t - 1) + t);
    }
    e.overshoot = t;
    return e;
  })(Ju);
  var gu = (function t(n) {
    Symbol('JSCA_3972_3979');
    n = +n;
    function e(t) {
      Symbol('JSCA_3974_3976');
      return --t * t * ((t + 1) * n + t) + 1;
    }
    e.overshoot = t;
    return e;
  })(Ju);
  var vu = (function t(n) {
    Symbol('JSCA_3980_3987');
    n = +n;
    function e(t) {
      Symbol('JSCA_3982_3984');
      return (
        ((t *= 2) < 1
          ? t * t * ((n + 1) * t - n)
          : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
      );
    }
    e.overshoot = t;
    return e;
  })(Ju);
  var xu = 2 * Math.PI,
    wu = 1,
    Mu = 0.3;
  var Tu = (function n(e, r) {
    Symbol('JSCA_3989_4001');
    var o = Math.asin(1 / (e = Math.max(1, e))) * (r /= xu);
    function t(t) {
      Symbol('JSCA_3991_3993');
      return e * nu(-(--t)) * Math.sin((o - t) / r);
    }
    t.amplitude = function (t) {
      Symbol('JSCA_3994_3996');
      return n(t, r * xu);
    };
    t.period = function (t) {
      Symbol('JSCA_3997_3999');
      return n(e, t);
    };
    return t;
  })(wu, Mu);
  var ku = (function n(e, r) {
    Symbol('JSCA_4002_4014');
    var o = Math.asin(1 / (e = Math.max(1, e))) * (r /= xu);
    function t(t) {
      Symbol('JSCA_4004_4006');
      return 1 - e * nu((t = +t)) * Math.sin((t + o) / r);
    }
    t.amplitude = function (t) {
      Symbol('JSCA_4007_4009');
      return n(t, r * xu);
    };
    t.period = function (t) {
      Symbol('JSCA_4010_4012');
      return n(e, t);
    };
    return t;
  })(wu, Mu);
  var Eu = (function n(e, r) {
    Symbol('JSCA_4015_4027');
    var o = Math.asin(1 / (e = Math.max(1, e))) * (r /= xu);
    function t(t) {
      Symbol('JSCA_4017_4019');
      return (
        ((t = t * 2 - 1) < 0
          ? e * nu(-t) * Math.sin((o - t) / r)
          : 2 - e * nu(t) * Math.sin((o + t) / r)) / 2
      );
    }
    t.amplitude = function (t) {
      Symbol('JSCA_4020_4022');
      return n(t, r * xu);
    };
    t.period = function (t) {
      Symbol('JSCA_4023_4025');
      return n(e, t);
    };
    return t;
  })(wu, Mu);
  var Nu = { time: null, delay: 0, duration: 250, ease: ja };
  function Pu(t, n) {
    Symbol('JSCA_4034_4042');
    var e;
    while (!(e = t.__transition) || !(e = e[n])) {
      if (!(t = t.parentNode)) {
        throw new Error(`transition ${n} not found`);
      }
    }
    return e;
  }
  function zu(t) {
    Symbol('JSCA_4043_4058');
    var n, e;
    if (t instanceof $a) {
      (n = t._id), (t = t._name);
    } else {
      (n = Ra()), ((e = Nu).time = l1()), (t = t == null ? null : t + '');
    }
    for (var r = this._groups, o = r.length, i = 0; i < o; ++i) {
      for (var l = r[i], a = l.length, u, f = 0; f < a; ++f) {
        if ((u = l[f])) {
          w1(u, t, n, f, l, e || Pu(u, n));
        }
      }
    }
    return new $a(r, this._parents, t, n);
  }
  ao.prototype.interrupt = P1;
  ao.prototype.transition = zu;
  var Iu = [null];
  function $u(t, n) {
    Symbol('JSCA_4062_4073');
    var e = t.__transition,
      r,
      o;
    if (e) {
      n = n == null ? null : n + '';
      for (o in e) {
        if ((r = e[o]).state > C1 && r.name === n) {
          return new $a([[t]], Iu, n, +o);
        }
      }
    }
    return null;
  }
  var Du = (t) => () => t;
  function Ru(
    t,
    { sourceEvent: n, target: e, selection: r, mode: o, dispatch: i }
  ) {
    Symbol('JSCA_4075_4106');
    Object.defineProperties(this, {
      type: { value: t, enumerable: true, configurable: true },
      sourceEvent: { value: n, enumerable: true, configurable: true },
      target: { value: e, enumerable: true, configurable: true },
      selection: { value: r, enumerable: true, configurable: true },
      mode: { value: o, enumerable: true, configurable: true },
      _: { value: i },
    });
  }
  function Fu(t) {
    Symbol('JSCA_4107_4109');
    t.stopImmediatePropagation();
  }
  function qu(t) {
    Symbol('JSCA_4110_4113');
    t.preventDefault();
    t.stopImmediatePropagation();
  }
  var Uu = { name: 'drag' },
    Ou = { name: 'space' },
    Bu = { name: 'handle' },
    Yu = { name: 'center' };
  const { abs: Lu, max: j, min: H } = Math;
  function ju(t) {
    Symbol('JSCA_4124_4126');
    return [+t[0], +t[1]];
  }
  function Hu(t) {
    Symbol('JSCA_4127_4129');
    return [ju(t[0]), ju(t[1])];
  }
  var Xu = {
    name: 'x',
    handles: ['w', 'e'].map(nf),
    input: function (t, n) {
      Symbol('JSCA_4133_4135');
      return t == null
        ? null
        : [
            [+t[0], n[0][1]],
            [+t[1], n[1][1]],
          ];
    },
    output: function (t) {
      Symbol('JSCA_4136_4138');
      return t && [t[0][0], t[1][0]];
    },
  };
  var Gu = {
    name: 'y',
    handles: ['n', 's'].map(nf),
    input: function (t, n) {
      Symbol('JSCA_4143_4145');
      return t == null
        ? null
        : [
            [n[0][0], +t[0]],
            [n[1][0], +t[1]],
          ];
    },
    output: function (t) {
      Symbol('JSCA_4146_4148');
      return t && [t[0][1], t[1][1]];
    },
  };
  var Vu = {
    name: 'xy',
    handles: ['n', 'w', 'e', 's', 'nw', 'ne', 'sw', 'se'].map(nf),
    input: function (t) {
      Symbol('JSCA_4153_4155');
      return t == null ? null : Hu(t);
    },
    output: function (t) {
      Symbol('JSCA_4156_4158');
      return t;
    },
  };
  var Wu = {
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
  };
  var Zu = { e: 'w', w: 'e', nw: 'ne', ne: 'nw', se: 'sw', sw: 'se' };
  var Ku = { n: 's', s: 'n', nw: 'sw', ne: 'se', se: 'ne', sw: 'nw' };
  var Qu = {
    overlay: +1,
    selection: +1,
    n: null,
    e: +1,
    s: null,
    w: -1,
    nw: -1,
    ne: +1,
    se: +1,
    sw: -1,
  };
  var tf = {
    overlay: +1,
    selection: +1,
    n: -1,
    e: null,
    s: +1,
    w: null,
    nw: -1,
    ne: -1,
    se: +1,
    sw: +1,
  };
  function nf(t) {
    Symbol('JSCA_4212_4216');
    return { type: t };
  }
  function ef(t) {
    Symbol('JSCA_4217_4219');
    return !t.ctrlKey && !t.button;
  }
  function rf() {
    Symbol('JSCA_4220_4227');
    var t = this.ownerSVGElement || this;
    if (t.hasAttribute('viewBox')) {
      t = t.viewBox.baseVal;
      return [
        [t.x, t.y],
        [t.x + t.width, t.y + t.height],
      ];
    }
    return [
      [0, 0],
      [t.width.baseVal.value, t.height.baseVal.value],
    ];
  }
  function of() {
    Symbol('JSCA_4228_4230');
    return navigator.maxTouchPoints || 'ontouchstart' in this;
  }
  function lf(t) {
    Symbol('JSCA_4231_4234');
    while (!t.__brush) if (!(t = t.parentNode)) return;
    return t.__brush;
  }
  function af(t) {
    Symbol('JSCA_4235_4237');
    return t[0][0] === t[1][0] || t[0][1] === t[1][1];
  }
  function uf(t) {
    Symbol('JSCA_4238_4241');
    var n = t.__brush;
    return n ? n.dim.output(n.selection) : null;
  }
  function ff() {
    Symbol('JSCA_4242_4244');
    return sf(Xu);
  }
  function _f() {
    Symbol('JSCA_4245_4247');
    return sf(Gu);
  }
  function cf() {
    Symbol('JSCA_4248_4250');
    return sf(Vu);
  }
  function sf(F) {
    Symbol('JSCA_4251_4587');
    var n = rf,
      q = ef,
      r = of,
      U = true,
      o = le('start', 'brush', 'end'),
      e = 6,
      O;
    function i(t) {
      Symbol('JSCA_4253_4270');
      var n = t
        .property('__brush', _)
        .selectAll('.overlay')
        .data([nf('overlay')]);
      n.enter()
        .append('rect')
        .attr('class', 'overlay')
        .attr('pointer-events', 'all')
        .attr('cursor', Wu.overlay)
        .merge(n)
        .each(function () {
          Symbol('JSCA_4255_4258');
          var t = lf(this).extent;
          L(this)
            .attr('x', t[0][0])
            .attr('y', t[0][1])
            .attr('width', t[1][0] - t[0][0])
            .attr('height', t[1][1] - t[0][1]);
        });
      t.selectAll('.selection')
        .data([nf('selection')])
        .enter()
        .append('rect')
        .attr('class', 'selection')
        .attr('cursor', Wu.selection)
        .attr('fill', '#777')
        .attr('fill-opacity', 0.3)
        .attr('stroke', '#fff')
        .attr('shape-rendering', 'crispEdges');
      var e = t.selectAll('.handle').data(F.handles, function (t) {
        Symbol('JSCA_4260_4262');
        return t.type;
      });
      e.exit().remove();
      e.enter()
        .append('rect')
        .attr('class', function (t) {
          Symbol('JSCA_4264_4266');
          return 'handle handle--' + t.type;
        })
        .attr('cursor', function (t) {
          Symbol('JSCA_4266_4268');
          return Wu[t.type];
        });
      t.each(B)
        .attr('fill', 'none')
        .attr('pointer-events', 'all')
        .on('mousedown.brush', a)
        .filter(r)
        .on('touchstart.brush', a)
        .on('touchmove.brush', u)
        .on('touchend.brush touchcancel.brush', f)
        .style('touch-action', 'none')
        .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
    }
    i.move = function (t, a, i) {
      Symbol('JSCA_4271_4295');
      if (t.tween) {
        t.on('start.brush', function (t) {
          Symbol('JSCA_4273_4275');
          Y(this, arguments).beforestart().start(t);
        })
          .on('interrupt.brush end.brush', function (t) {
            Symbol('JSCA_4275_4277');
            Y(this, arguments).end(t);
          })
          .tween('brush', function () {
            Symbol('JSCA_4277_4285');
            var n = this,
              e = n.__brush,
              r = Y(n, arguments),
              t = e.selection,
              o = F.input(
                typeof a === 'function' ? a.apply(this, arguments) : a,
                e.extent
              ),
              i = Al(t, o);
            function l(t) {
              Symbol('JSCA_4279_4283');
              e.selection = t === 1 && o === null ? null : i(t);
              B.call(n);
              r.brush();
            }
            return t !== null && o !== null ? l : l(1);
          });
      } else {
        t.each(function () {
          Symbol('JSCA_4287_4293');
          var t = this,
            n = arguments,
            e = t.__brush,
            r = F.input(typeof a === 'function' ? a.apply(t, n) : a, e.extent),
            o = Y(t, n).beforestart();
          N1(t);
          e.selection = r === null ? null : r;
          B.call(t);
          o.start(i).brush(i).end(i);
        });
      }
    };
    i.clear = function (t, n) {
      Symbol('JSCA_4296_4298');
      i.move(t, null, n);
    };
    function B() {
      Symbol('JSCA_4299_4315');
      var t = L(this),
        n = lf(this).selection;
      if (n) {
        t.selectAll('.selection')
          .style('display', null)
          .attr('x', n[0][0])
          .attr('y', n[0][1])
          .attr('width', n[1][0] - n[0][0])
          .attr('height', n[1][1] - n[0][1]);
        t.selectAll('.handle')
          .style('display', null)
          .attr('x', function (t) {
            Symbol('JSCA_4303_4305');
            return t.type[t.type.length - 1] === 'e'
              ? n[1][0] - e / 2
              : n[0][0] - e / 2;
          })
          .attr('y', function (t) {
            Symbol('JSCA_4305_4307');
            return t.type[0] === 's' ? n[1][1] - e / 2 : n[0][1] - e / 2;
          })
          .attr('width', function (t) {
            Symbol('JSCA_4307_4309');
            return t.type === 'n' || t.type === 's' ? n[1][0] - n[0][0] + e : e;
          })
          .attr('height', function (t) {
            Symbol('JSCA_4309_4311');
            return t.type === 'e' || t.type === 'w' ? n[1][1] - n[0][1] + e : e;
          });
      } else {
        t.selectAll('.selection,.handle')
          .style('display', 'none')
          .attr('x', null)
          .attr('y', null)
          .attr('width', null)
          .attr('height', null);
      }
    }
    function Y(t, n, e) {
      Symbol('JSCA_4316_4319');
      var r = t.__brush.emitter;
      return r && (!e || !r.clean) ? r : new l(t, n, e);
    }
    function l(t, n, e) {
      Symbol('JSCA_4320_4326');
      this.that = t;
      this.args = n;
      this.state = t.__brush;
      this.active = 0;
      this.clean = e;
    }
    l.prototype = {
      beforestart: function () {
        Symbol('JSCA_4328_4331');
        if (++this.active === 1)
          (this.state.emitter = this), (this.starting = true);
        return this;
      },
      start: function (t, n) {
        Symbol('JSCA_4332_4335');
        if (this.starting) (this.starting = false), this.emit('start', t, n);
        else this.emit('brush', t);
        return this;
      },
      brush: function (t, n) {
        Symbol('JSCA_4336_4339');
        this.emit('brush', t, n);
        return this;
      },
      end: function (t, n) {
        Symbol('JSCA_4340_4343');
        if (--this.active === 0)
          delete this.state.emitter, this.emit('end', t, n);
        return this;
      },
      emit: function (t, n, e) {
        Symbol('JSCA_4344_4353');
        var r = L(this.that).datum();
        o.call(
          t,
          this.that,
          new Ru(t, {
            sourceEvent: n,
            target: i,
            selection: F.output(this.state.selection),
            mode: e,
            dispatch: o,
          }),
          r
        );
      },
    };
    function a(t) {
      Symbol('JSCA_4355_4552');
      if (O && !t.touches) return;
      if (!q.apply(this, arguments)) return;
      var o = this,
        i = t.target.__data__.type,
        l =
          (U && t.metaKey ? (i = 'overlay') : i) === 'selection'
            ? Uu
            : U && t.altKey
            ? Yu
            : Bu,
        a = F === Gu ? null : Qu[i],
        u = F === Xu ? null : tf[i],
        f = lf(o),
        n = f.extent,
        _ = f.selection,
        c = n[0][0],
        s,
        S,
        h = n[0][1],
        y,
        b,
        m = n[1][0],
        d,
        A,
        C = n[1][1],
        J,
        p,
        g = 0,
        v = 0,
        r,
        x = a && u && U && t.shiftKey,
        w,
        M,
        T = Array.from(t.touches || [t], (t) => {
          const n = t.identifier;
          t = ho(t, o);
          t.point0 = t.slice();
          t.identifier = n;
          return t;
        });
      N1(o);
      var k = Y(o, arguments, true).beforestart();
      if (i === 'overlay') {
        if (_) r = true;
        const I = [T[0], T[1] || T[0]];
        f.selection = _ = [
          [
            (s = F === Gu ? c : H(I[0][0], I[1][0])),
            (y = F === Xu ? h : H(I[0][1], I[1][1])),
          ],
          [
            (d = F === Gu ? m : j(I[0][0], I[1][0])),
            (J = F === Xu ? C : j(I[0][1], I[1][1])),
          ],
        ];
        if (T.length > 1) z(t);
      } else {
        s = _[0][0];
        y = _[0][1];
        d = _[1][0];
        J = _[1][1];
      }
      S = s;
      b = y;
      A = d;
      p = J;
      var e = L(o).attr('pointer-events', 'none');
      var E = e.selectAll('.overlay').attr('cursor', Wu[i]);
      if (t.touches) {
        k.moved = P;
        k.ended = $;
      } else {
        var N = L(t.view)
          .on('mousemove.brush', P, true)
          .on('mouseup.brush', $, true);
        if (U) N.on('keydown.brush', D, true).on('keyup.brush', R, true);
        po(t.view);
      }
      B.call(o);
      k.start(t, l.name);
      function P(t) {
        Symbol('JSCA_4394_4406');
        for (const n of t.changedTouches || [t]) {
          for (const e of T)
            if (e.identifier === n.identifier) e.cur = ho(n, o);
        }
        if (x && !w && !M && T.length === 1) {
          const t = T[0];
          if (Lu(t.cur[0] - t[0]) > Lu(t.cur[1] - t[1])) M = true;
          else w = true;
        }
        for (const t of T) if (t.cur) (t[0] = t.cur[0]), (t[1] = t.cur[1]);
        r = true;
        qu(t);
        z(t);
      }
      function z(t) {
        Symbol('JSCA_4407_4458');
        const n = T[0],
          e = n.point0;
        var r;
        g = n[0] - e[0];
        v = n[1] - e[1];
        switch (l) {
          case Ou:
          case Uu: {
            if (a) (g = j(c - s, H(m - d, g))), (S = s + g), (A = d + g);
            if (u) (v = j(h - y, H(C - J, v))), (b = y + v), (p = J + v);
            break;
          }
          case Bu: {
            if (T[1]) {
              if (a)
                (S = j(c, H(m, T[0][0]))), (A = j(c, H(m, T[1][0]))), (a = 1);
              if (u)
                (b = j(h, H(C, T[0][1]))), (p = j(h, H(C, T[1][1]))), (u = 1);
            } else {
              if (a < 0) (g = j(c - s, H(m - s, g))), (S = s + g), (A = d);
              else if (a > 0) (g = j(c - d, H(m - d, g))), (S = s), (A = d + g);
              if (u < 0) (v = j(h - y, H(C - y, v))), (b = y + v), (p = J);
              else if (u > 0) (v = j(h - J, H(C - J, v))), (b = y), (p = J + v);
            }
            break;
          }
          case Yu: {
            if (a) (S = j(c, H(m, s - g * a))), (A = j(c, H(m, d + g * a)));
            if (u) (b = j(h, H(C, y - v * u))), (p = j(h, H(C, J + v * u)));
            break;
          }
        }
        if (A < S) {
          a *= -1;
          (r = s), (s = d), (d = r);
          (r = S), (S = A), (A = r);
          if (i in Zu) E.attr('cursor', Wu[(i = Zu[i])]);
        }
        if (p < b) {
          u *= -1;
          (r = y), (y = J), (J = r);
          (r = b), (b = p), (p = r);
          if (i in Ku) E.attr('cursor', Wu[(i = Ku[i])]);
        }
        if (f.selection) _ = f.selection;
        if (w) (S = _[0][0]), (A = _[1][0]);
        if (M) (b = _[0][1]), (p = _[1][1]);
        if (_[0][0] !== S || _[0][1] !== b || _[1][0] !== A || _[1][1] !== p) {
          f.selection = [
            [S, b],
            [A, p],
          ];
          B.call(o);
          k.brush(t, l.name);
        }
      }
      function $(t) {
        Symbol('JSCA_4459_4476');
        Fu(t);
        if (t.touches) {
          if (t.touches.length) return;
          if (O) clearTimeout(O);
          O = setTimeout(function () {
            Symbol('JSCA_4464_4466');
            O = null;
          }, 500);
        } else {
          go(t.view, r);
          N.on('keydown.brush keyup.brush mousemove.brush mouseup.brush', null);
        }
        e.attr('pointer-events', 'all');
        E.attr('cursor', Wu.overlay);
        if (f.selection) _ = f.selection;
        if (af(_)) (f.selection = null), B.call(o);
        k.end(t, l.name);
      }
      function D(t) {
        Symbol('JSCA_4477_4509');
        switch (t.keyCode) {
          case 16: {
            x = a && u;
            break;
          }
          case 18: {
            if (l === Bu) {
              if (a) (d = A - g * a), (s = S + g * a);
              if (u) (J = p - v * u), (y = b + v * u);
              l = Yu;
              z(t);
            }
            break;
          }
          case 32: {
            if (l === Bu || l === Yu) {
              if (a < 0) d = A - g;
              else if (a > 0) s = S - g;
              if (u < 0) J = p - v;
              else if (u > 0) y = b - v;
              l = Ou;
              E.attr('cursor', Wu.selection);
              z(t);
            }
            break;
          }
          default:
            return;
        }
        qu(t);
      }
      function R(t) {
        Symbol('JSCA_4510_4551');
        switch (t.keyCode) {
          case 16: {
            if (x) {
              w = M = x = false;
              z(t);
            }
            break;
          }
          case 18: {
            if (l === Yu) {
              if (a < 0) d = A;
              else if (a > 0) s = S;
              if (u < 0) J = p;
              else if (u > 0) y = b;
              l = Bu;
              z(t);
            }
            break;
          }
          case 32: {
            if (l === Ou) {
              if (t.altKey) {
                if (a) (d = A - g * a), (s = S + g * a);
                if (u) (J = p - v * u), (y = b + v * u);
                l = Yu;
              } else {
                if (a < 0) d = A;
                else if (a > 0) s = S;
                if (u < 0) J = p;
                else if (u > 0) y = b;
                l = Bu;
              }
              E.attr('cursor', Wu[i]);
              z(t);
            }
            break;
          }
          default:
            return;
        }
        qu(t);
      }
    }
    function u(t) {
      Symbol('JSCA_4553_4555');
      Y(this, arguments).moved(t);
    }
    function f(t) {
      Symbol('JSCA_4556_4558');
      Y(this, arguments).ended(t);
    }
    function _() {
      Symbol('JSCA_4559_4566');
      var t = this.__brush || { selection: null };
      t.extent = Hu(n.apply(this, arguments));
      t.dim = F;
      return t;
    }
    i.extent = function (t) {
      Symbol('JSCA_4567_4569');
      return arguments.length
        ? ((n = typeof t === 'function' ? t : Du(Hu(t))), i)
        : n;
    };
    i.filter = function (t) {
      Symbol('JSCA_4570_4572');
      return arguments.length
        ? ((q = typeof t === 'function' ? t : Du(!!t)), i)
        : q;
    };
    i.touchable = function (t) {
      Symbol('JSCA_4573_4575');
      return arguments.length
        ? ((r = typeof t === 'function' ? t : Du(!!t)), i)
        : r;
    };
    i.handleSize = function (t) {
      Symbol('JSCA_4576_4578');
      return arguments.length ? ((e = +t), i) : e;
    };
    i.keyModifiers = function (t) {
      Symbol('JSCA_4579_4581');
      return arguments.length ? ((U = !!t), i) : U;
    };
    i.on = function () {
      Symbol('JSCA_4582_4585');
      var t = o.on.apply(o, arguments);
      return t === o ? i : t;
    };
    return i;
  }
  var Sf = Math.abs;
  var hf = Math.cos;
  var yf = Math.sin;
  var bf = Math.PI;
  var mf = bf / 2;
  var df = bf * 2;
  var Af = Math.max;
  var Cf = 1e-12;
  function Jf(e, t) {
    Symbol('JSCA_4596_4600');
    return Array.from({ length: t - e }, (t, n) => e + n);
  }
  function pf(e) {
    Symbol('JSCA_4601_4605');
    return function (t, n) {
      Symbol('JSCA_4602_4604');
      return e(
        t.source.value + t.target.value,
        n.source.value + n.target.value
      );
    };
  }
  function gf() {
    Symbol('JSCA_4606_4608');
    return wf(false, false);
  }
  function vf() {
    Symbol('JSCA_4609_4611');
    return wf(false, true);
  }
  function xf() {
    Symbol('JSCA_4612_4614');
    return wf(true, false);
  }
  function wf(S, n) {
    Symbol('JSCA_4615_4730');
    var h = 0,
      y = null,
      b = null,
      m = null;
    function e(r) {
      Symbol('JSCA_4617_4716');
      var o = r.length,
        i = new Array(o),
        t = Jf(0, o),
        e = new Array(o * o),
        l = new Array(o),
        a = 0,
        u;
      r = Float64Array.from(
        { length: o * o },
        n ? (t, n) => r[n % o][(n / o) | 0] : (t, n) => r[(n / o) | 0][n % o]
      );
      for (let e = 0; e < o; ++e) {
        let n = 0;
        for (let t = 0; t < o; ++t) n += r[e * o + t] + S * r[t * o + e];
        a += i[e] = n;
      }
      a = Af(0, df - h * o) / a;
      u = a ? h : df / o;
      {
        let n = 0;
        if (y) t.sort((t, n) => y(i[t], i[n]));
        for (const f of t) {
          const t = n;
          if (S) {
            const _ = Jf(~o + 1, o).filter((t) =>
              t < 0 ? r[~t * o + f] : r[f * o + t]
            );
            if (b)
              _.sort((t, n) =>
                b(
                  t < 0 ? -r[~t * o + f] : r[f * o + t],
                  n < 0 ? -r[~n * o + f] : r[f * o + n]
                )
              );
            for (const c of _) {
              if (c < 0) {
                const t =
                  e[~c * o + f] ||
                  (e[~c * o + f] = { source: null, target: null });
                t.target = {
                  index: f,
                  startAngle: n,
                  endAngle: (n += r[~c * o + f] * a),
                  value: r[~c * o + f],
                };
              } else {
                const t =
                  e[f * o + c] ||
                  (e[f * o + c] = { source: null, target: null });
                t.source = {
                  index: f,
                  startAngle: n,
                  endAngle: (n += r[f * o + c] * a),
                  value: r[f * o + c],
                };
              }
            }
            l[f] = { index: f, startAngle: t, endAngle: n, value: i[f] };
          } else {
            const _ = Jf(0, o).filter((t) => r[f * o + t] || r[t * o + f]);
            if (b) _.sort((t, n) => b(r[f * o + t], r[f * o + n]));
            for (const c of _) {
              let t;
              if (f < c) {
                t =
                  e[f * o + c] ||
                  (e[f * o + c] = { source: null, target: null });
                t.source = {
                  index: f,
                  startAngle: n,
                  endAngle: (n += r[f * o + c] * a),
                  value: r[f * o + c],
                };
              } else {
                t =
                  e[c * o + f] ||
                  (e[c * o + f] = { source: null, target: null });
                t.target = {
                  index: f,
                  startAngle: n,
                  endAngle: (n += r[f * o + c] * a),
                  value: r[f * o + c],
                };
                if (f === c) t.source = t.target;
              }
              if (t.source && t.target && t.source.value < t.target.value) {
                const s = t.source;
                t.source = t.target;
                t.target = s;
              }
            }
            l[f] = { index: f, startAngle: t, endAngle: n, value: i[f] };
          }
          n += u;
        }
      }
      e = Object.values(e);
      e.groups = l;
      return m ? e.sort(m) : e;
    }
    e.padAngle = function (t) {
      Symbol('JSCA_4717_4719');
      return arguments.length ? ((h = Af(0, t)), e) : h;
    };
    e.sortGroups = function (t) {
      Symbol('JSCA_4720_4722');
      return arguments.length ? ((y = t), e) : y;
    };
    e.sortSubgroups = function (t) {
      Symbol('JSCA_4723_4725');
      return arguments.length ? ((b = t), e) : b;
    };
    e.sortChords = function (t) {
      Symbol('JSCA_4726_4728');
      return arguments.length
        ? (t == null ? (m = null) : ((m = pf(t))._ = t), e)
        : m && m._;
    };
    return e;
  }
  const Mf = Math.PI,
    Tf = 2 * Mf,
    kf = 1e-6,
    Ef = Tf - kf;
  function Nf(e) {
    Symbol('JSCA_4732_4737');
    this._ += e[0];
    for (let t = 1, n = e.length; t < n; ++t) {
      this._ += arguments[t] + e[t];
    }
  }
  function Pf(t) {
    Symbol('JSCA_4738_4749');
    let n = Math.floor(t);
    if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
    if (n > 15) return Nf;
    const r = 10 ** n;
    return function (e) {
      Symbol('JSCA_4743_4748');
      this._ += e[0];
      for (let t = 1, n = e.length; t < n; ++t) {
        this._ += Math.round(arguments[t] * r) / r + e[t];
      }
    };
  }
  let zf = class B_ {
    constructor(t) {
      Symbol('JSCA_4751_4755');
      this._x0 = this._y0 = this._x1 = this._y1 = null;
      this._ = '';
      this._append = t == null ? Nf : Pf(t);
    }
    moveTo(t, n) {
      Symbol('JSCA_4756_4758');
      this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
        +n)}`;
    }
    closePath() {
      Symbol('JSCA_4759_4764');
      if (this._x1 !== null) {
        (this._x1 = this._x0), (this._y1 = this._y0);
        this._append`Z`;
      }
    }
    lineTo(t, n) {
      Symbol('JSCA_4765_4767');
      this._append`L${(this._x1 = +t)},${(this._y1 = +n)}`;
    }
    quadraticCurveTo(t, n, e, r) {
      Symbol('JSCA_4768_4770');
      this._append`Q${+t},${+n},${(this._x1 = +e)},${(this._y1 = +r)}`;
    }
    bezierCurveTo(t, n, e, r, o, i) {
      Symbol('JSCA_4771_4773');
      this._append`C${+t},${+n},${+e},${+r},${(this._x1 = +o)},${(this._y1 =
        +i)}`;
    }
    arcTo(f, _, c, s, S) {
      Symbol('JSCA_4774_4789');
      (f = +f), (_ = +_), (c = +c), (s = +s), (S = +S);
      if (S < 0) throw new Error(`negative radius: ${S}`);
      let h = this._x1,
        y = this._y1,
        b = c - f,
        m = s - _,
        d = h - f,
        A = y - _,
        C = d * d + A * A;
      if (this._x1 === null) {
        this._append`M${(this._x1 = f)},${(this._y1 = _)}`;
      } else if (!(C > kf));
      else if (!(Math.abs(A * b - m * d) > kf) || !S) {
        this._append`L${(this._x1 = f)},${(this._y1 = _)}`;
      } else {
        let t = c - h,
          n = s - y,
          e = b * b + m * m,
          r = t * t + n * n,
          o = Math.sqrt(e),
          i = Math.sqrt(C),
          l = S * Math.tan((Mf - Math.acos((e + C - r) / (2 * o * i))) / 2),
          a = l / i,
          u = l / o;
        if (Math.abs(a - 1) > kf) {
          this._append`L${f + a * d},${_ + a * A}`;
        }
        this._append`A${S},${S},0,0,${+(A * t > d * n)},${(this._x1 =
          f + u * b)},${(this._y1 = _ + u * m)}`;
      }
    }
    arc(t, n, e, r, o, i) {
      Symbol('JSCA_4790_4806');
      (t = +t), (n = +n), (e = +e), (i = !!i);
      if (e < 0) throw new Error(`negative radius: ${e}`);
      let l = e * Math.cos(r),
        a = e * Math.sin(r),
        u = t + l,
        f = n + a,
        _ = 1 ^ i,
        c = i ? r - o : o - r;
      if (this._x1 === null) {
        this._append`M${u},${f}`;
      } else if (Math.abs(this._x1 - u) > kf || Math.abs(this._y1 - f) > kf) {
        this._append`L${u},${f}`;
      }
      if (!e) return;
      if (c < 0) c = (c % Tf) + Tf;
      if (c > Ef) {
        this._append`A${e},${e},0,1,${_},${t - l},${
          n - a
        }A${e},${e},0,1,${_},${(this._x1 = u)},${(this._y1 = f)}`;
      } else if (c > kf) {
        this._append`A${e},${e},0,${+(c >= Mf)},${_},${(this._x1 =
          t + e * Math.cos(o))},${(this._y1 = n + e * Math.sin(o))}`;
      }
    }
    rect(t, n, e, r) {
      Symbol('JSCA_4807_4809');
      this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
        +n)}h${(e = +e)}v${+r}h${-e}Z`;
    }
    toString() {
      Symbol('JSCA_4810_4812');
      return this._;
    }
  };
  function If() {
    Symbol('JSCA_4814_4816');
    return new zf();
  }
  If.prototype = zf.prototype;
  function $f(t = 3) {
    Symbol('JSCA_4818_4820');
    return new zf(+t);
  }
  var Df = Array.prototype.slice;
  function Rf(t) {
    Symbol('JSCA_4822_4826');
    return function () {
      Symbol('JSCA_4823_4825');
      return t;
    };
  }
  function Ff(t) {
    Symbol('JSCA_4827_4829');
    return t.source;
  }
  function qf(t) {
    Symbol('JSCA_4830_4832');
    return t.target;
  }
  function Uf(t) {
    Symbol('JSCA_4833_4835');
    return t.radius;
  }
  function Of(t) {
    Symbol('JSCA_4836_4838');
    return t.startAngle;
  }
  function Bf(t) {
    Symbol('JSCA_4839_4841');
    return t.endAngle;
  }
  function Yf() {
    Symbol('JSCA_4842_4844');
    return 0;
  }
  function Lf() {
    Symbol('JSCA_4845_4847');
    return 10;
  }
  function jf(h) {
    Symbol('JSCA_4848_4905');
    var y = Ff,
      b = qf,
      m = Uf,
      d = Uf,
      A = Of,
      C = Bf,
      J = Yf,
      p = null;
    function n() {
      Symbol('JSCA_4850_4873');
      var t,
        n = y.apply(this, arguments),
        e = b.apply(this, arguments),
        r = J.apply(this, arguments) / 2,
        o = Df.call(arguments),
        i = +m.apply(this, ((o[0] = n), o)),
        l = A.apply(this, o) - mf,
        a = C.apply(this, o) - mf,
        u = +d.apply(this, ((o[0] = e), o)),
        f = A.apply(this, o) - mf,
        _ = C.apply(this, o) - mf;
      if (!p) p = t = If();
      if (r > Cf) {
        if (Sf(a - l) > r * 2 + Cf)
          a > l ? ((l += r), (a -= r)) : ((l -= r), (a += r));
        else l = a = (l + a) / 2;
        if (Sf(_ - f) > r * 2 + Cf)
          _ > f ? ((f += r), (_ -= r)) : ((f -= r), (_ += r));
        else f = _ = (f + _) / 2;
      }
      p.moveTo(i * hf(l), i * yf(l));
      p.arc(0, 0, i, l, a);
      if (l !== f || a !== _) {
        if (h) {
          var c = +h.apply(this, arguments),
            s = u - c,
            S = (f + _) / 2;
          p.quadraticCurveTo(0, 0, s * hf(f), s * yf(f));
          p.lineTo(u * hf(S), u * yf(S));
          p.lineTo(s * hf(_), s * yf(_));
        } else {
          p.quadraticCurveTo(0, 0, u * hf(f), u * yf(f));
          p.arc(0, 0, u, f, _);
        }
      }
      p.quadraticCurveTo(0, 0, i * hf(l), i * yf(l));
      p.closePath();
      if (t) return (p = null), t + '' || null;
    }
    if (h)
      n.headRadius = function (t) {
        Symbol('JSCA_4874_4876');
        return arguments.length
          ? ((h = typeof t === 'function' ? t : Rf(+t)), n)
          : h;
      };
    n.radius = function (t) {
      Symbol('JSCA_4877_4879');
      return arguments.length
        ? ((m = d = typeof t === 'function' ? t : Rf(+t)), n)
        : m;
    };
    n.sourceRadius = function (t) {
      Symbol('JSCA_4880_4882');
      return arguments.length
        ? ((m = typeof t === 'function' ? t : Rf(+t)), n)
        : m;
    };
    n.targetRadius = function (t) {
      Symbol('JSCA_4883_4885');
      return arguments.length
        ? ((d = typeof t === 'function' ? t : Rf(+t)), n)
        : d;
    };
    n.startAngle = function (t) {
      Symbol('JSCA_4886_4888');
      return arguments.length
        ? ((A = typeof t === 'function' ? t : Rf(+t)), n)
        : A;
    };
    n.endAngle = function (t) {
      Symbol('JSCA_4889_4891');
      return arguments.length
        ? ((C = typeof t === 'function' ? t : Rf(+t)), n)
        : C;
    };
    n.padAngle = function (t) {
      Symbol('JSCA_4892_4894');
      return arguments.length
        ? ((J = typeof t === 'function' ? t : Rf(+t)), n)
        : J;
    };
    n.source = function (t) {
      Symbol('JSCA_4895_4897');
      return arguments.length ? ((y = t), n) : y;
    };
    n.target = function (t) {
      Symbol('JSCA_4898_4900');
      return arguments.length ? ((b = t), n) : b;
    };
    n.context = function (t) {
      Symbol('JSCA_4901_4903');
      return arguments.length ? ((p = t == null ? null : t), n) : p;
    };
    return n;
  }
  function Hf() {
    Symbol('JSCA_4906_4908');
    return jf();
  }
  function Xf() {
    Symbol('JSCA_4909_4911');
    return jf(Lf);
  }
  var Gf = Array.prototype;
  var Vf = Gf.slice;
  function Wf(t, n) {
    Symbol('JSCA_4914_4916');
    return t - n;
  }
  function Zf(t) {
    Symbol('JSCA_4917_4921');
    var n = 0,
      e = t.length,
      r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1];
    while (++n < e) r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
    return r;
  }
  var Kf = (t) => () => t;
  function Qf(t, n) {
    Symbol('JSCA_4923_4927');
    var e = -1,
      r = n.length,
      o;
    while (++e < r) if ((o = t_(t, n[e]))) return o;
    return 0;
  }
  function t_(t, n) {
    Symbol('JSCA_4928_4936');
    var e = n[0],
      r = n[1],
      o = -1;
    for (var i = 0, l = t.length, a = l - 1; i < l; a = i++) {
      var u = t[i],
        f = u[0],
        _ = u[1],
        c = t[a],
        s = c[0],
        S = c[1];
      if (n_(u, c, n)) return 0;
      if (_ > r !== S > r && e < ((s - f) * (r - _)) / (S - _) + f) o = -o;
    }
    return o;
  }
  function n_(t, n, e) {
    Symbol('JSCA_4937_4940');
    var r;
    return e_(t, n, e) && r_(t[(r = +(t[0] === n[0]))], e[r], n[r]);
  }
  function e_(t, n, e) {
    Symbol('JSCA_4941_4943');
    return (n[0] - t[0]) * (e[1] - t[1]) === (e[0] - t[0]) * (n[1] - t[1]);
  }
  function r_(t, n, e) {
    Symbol('JSCA_4944_4946');
    return (t <= n && n <= e) || (e <= n && n <= t);
  }
  function o_() {
    Symbol('JSCA_4947_4947');
  }
  var i_ = [
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
  function l_() {
    Symbol('JSCA_4949_5092');
    var s = 1,
      S = 1,
      r = Gt,
      i = n;
    function o(n) {
      Symbol('JSCA_4951_4962');
      var t = r(n);
      if (!Array.isArray(t)) {
        const e = ct(n, a_);
        t = Lt(...Xt(e[0], e[1], t), t);
        while (t[t.length - 1] >= e[1]) t.pop();
        while (t[1] < e[0]) t.shift();
      } else {
        t = t.slice().sort(Wf);
      }
      return t.map((t) => l(n, t));
    }
    function l(n, t) {
      Symbol('JSCA_4963_4984');
      const e = t == null ? NaN : +t;
      if (isNaN(e)) throw new Error(`invalid value: ${t}`);
      var o = [],
        r = [];
      a(n, e, function (t) {
        Symbol('JSCA_4967_4970');
        i(t, n, e);
        if (Zf(t) > 0) o.push([t]);
        else r.push(t);
      });
      r.forEach(function (t) {
        Symbol('JSCA_4971_4978');
        for (var n = 0, e = o.length, r; n < e; ++n) {
          if (Qf((r = o[n])[0], t) !== -1) {
            r.push(t);
            return;
          }
        }
      });
      return { type: 'MultiPolygon', value: t, coordinates: o };
    }
    function a(t, n, a) {
      Symbol('JSCA_4985_5063');
      var u = new Array(),
        f = new Array(),
        _,
        c,
        e,
        r,
        o,
        i;
      _ = c = -1;
      r = u_(t[0], n);
      i_[r << 1].forEach(l);
      while (++_ < s - 1) {
        (e = r), (r = u_(t[_ + 1], n));
        i_[e | (r << 1)].forEach(l);
      }
      i_[r << 0].forEach(l);
      while (++c < S - 1) {
        _ = -1;
        r = u_(t[c * s + s], n);
        o = u_(t[c * s], n);
        i_[(r << 1) | (o << 2)].forEach(l);
        while (++_ < s - 1) {
          (e = r), (r = u_(t[c * s + s + _ + 1], n));
          (i = o), (o = u_(t[c * s + _ + 1], n));
          i_[e | (r << 1) | (o << 2) | (i << 3)].forEach(l);
        }
        i_[r | (o << 3)].forEach(l);
      }
      _ = -1;
      o = t[c * s] >= n;
      i_[o << 2].forEach(l);
      while (++_ < s - 1) {
        (i = o), (o = u_(t[c * s + _ + 1], n));
        i_[(o << 2) | (i << 3)].forEach(l);
      }
      i_[o << 3].forEach(l);
      function l(t) {
        Symbol('JSCA_5015_5062');
        var n = [t[0][0] + _, t[0][1] + c],
          e = [t[1][0] + _, t[1][1] + c],
          r = h(n),
          o = h(e),
          i,
          l;
        if ((i = f[r])) {
          if ((l = u[o])) {
            delete f[i.end];
            delete u[l.start];
            if (i === l) {
              i.ring.push(e);
              a(i.ring);
            } else {
              u[i.start] = f[l.end] = {
                start: i.start,
                end: l.end,
                ring: i.ring.concat(l.ring),
              };
            }
          } else {
            delete f[i.end];
            i.ring.push(e);
            f[(i.end = o)] = i;
          }
        } else if ((i = u[o])) {
          if ((l = f[r])) {
            delete u[i.start];
            delete f[l.end];
            if (i === l) {
              i.ring.push(e);
              a(i.ring);
            } else {
              u[l.start] = f[i.end] = {
                start: l.start,
                end: i.end,
                ring: l.ring.concat(i.ring),
              };
            }
          } else {
            delete u[i.start];
            i.ring.unshift(n);
            u[(i.start = r)] = i;
          }
        } else {
          u[r] = f[o] = { start: r, end: o, ring: [n, e] };
        }
      }
    }
    function h(t) {
      Symbol('JSCA_5064_5066');
      return t[0] * 2 + t[1] * (s + 1) * 4;
    }
    function n(t, l, a) {
      Symbol('JSCA_5067_5077');
      t.forEach(function (t) {
        Symbol('JSCA_5068_5076');
        var n = t[0],
          e = t[1],
          r = n | 0,
          o = e | 0,
          i = f_(l[o * s + r]);
        if (n > 0 && n < s && r === n) {
          t[0] = __(n, f_(l[o * s + r - 1]), i, a);
        }
        if (e > 0 && e < S && o === e) {
          t[1] = __(e, f_(l[(o - 1) * s + r]), i, a);
        }
      });
    }
    o.contour = l;
    o.size = function (t) {
      Symbol('JSCA_5079_5084');
      if (!arguments.length) return [s, S];
      var n = Math.floor(t[0]),
        e = Math.floor(t[1]);
      if (!(n >= 0 && e >= 0)) throw new Error('invalid size');
      return (s = n), (S = e), o;
    };
    o.thresholds = function (t) {
      Symbol('JSCA_5085_5087');
      return arguments.length
        ? ((r =
            typeof t === 'function'
              ? t
              : Array.isArray(t)
              ? Kf(Vf.call(t))
              : Kf(t)),
          o)
        : r;
    };
    o.smooth = function (t) {
      Symbol('JSCA_5088_5090');
      return arguments.length ? ((i = t ? n : o_), o) : i === n;
    };
    return o;
  }
  function a_(t) {
    Symbol('JSCA_5093_5095');
    return isFinite(t) ? t : NaN;
  }
  function u_(t, n) {
    Symbol('JSCA_5096_5098');
    return t == null ? false : +t >= n;
  }
  function f_(t) {
    Symbol('JSCA_5099_5101');
    return t == null || isNaN((t = +t)) ? -Infinity : t;
  }
  function __(t, n, e, r) {
    Symbol('JSCA_5102_5107');
    const o = r - n;
    const i = e - n;
    const l = isFinite(o) || isFinite(i) ? o / i : Math.sign(o) / Math.sign(i);
    return isNaN(l) ? t : t + l - 0.5;
  }
  function c_(t) {
    Symbol('JSCA_5108_5110');
    return t[0];
  }
  function s_(t) {
    Symbol('JSCA_5111_5113');
    return t[1];
  }
  function S_() {
    Symbol('JSCA_5114_5116');
    return 1;
  }
  function h_() {
    Symbol('JSCA_5117_5206');
    var s = c_,
      S = s_,
      h = S_,
      r = 960,
      o = 500,
      y = 20,
      b = 2,
      m = y * 3,
      d = (r + m * 2) >> b,
      A = (o + m * 2) >> b,
      i = Kf(20);
    function l(t) {
      Symbol('JSCA_5119_5137');
      var n = new Float32Array(d * A),
        e = Math.pow(2, -b),
        r = -1;
      for (const c of t) {
        var o = (s(c, ++r, t) + m) * e,
          i = (S(c, r, t) + m) * e,
          l = +h(c, r, t);
        if (l && o >= 0 && o < d && i >= 0 && i < A) {
          var a = Math.floor(o),
            u = Math.floor(i),
            f = o - a - 0.5,
            _ = i - u - 0.5;
          n[a + u * d] += (1 - f) * (1 - _) * l;
          n[a + 1 + u * d] += f * (1 - _) * l;
          n[a + 1 + (u + 1) * d] += f * _ * l;
          n[a + (u + 1) * d] += (1 - f) * _ * l;
        }
      }
      E({ data: n, width: d, height: A }, y * e);
      return n;
    }
    function n(t) {
      Symbol('JSCA_5138_5144');
      var n = l(t),
        e = i(n),
        r = Math.pow(2, 2 * b);
      if (!Array.isArray(e)) {
        e = Lt(Number.MIN_VALUE, Wt(n) / r, e);
      }
      return l_()
        .size([d, A])
        .thresholds(e.map((t) => t * r))(n)
        .map((t, n) => ((t.value = +e[n]), a(t)));
    }
    n.contours = function (t) {
      Symbol('JSCA_5145_5156');
      var e = l(t),
        r = l_().size([d, A]),
        o = Math.pow(2, 2 * b),
        n = (t) => {
          t = +t;
          var n = a(r.contour(e, t * o));
          n.value = t;
          return n;
        };
      Object.defineProperty(n, 'max', { get: () => Wt(e) / o });
      return n;
    };
    function a(t) {
      Symbol('JSCA_5157_5160');
      t.coordinates.forEach(e);
      return t;
    }
    function e(t) {
      Symbol('JSCA_5161_5163');
      t.forEach(u);
    }
    function u(t) {
      Symbol('JSCA_5164_5166');
      t.forEach(f);
    }
    function f(t) {
      Symbol('JSCA_5167_5170');
      t[0] = t[0] * Math.pow(2, b) - m;
      t[1] = t[1] * Math.pow(2, b) - m;
    }
    function _() {
      Symbol('JSCA_5171_5176');
      m = y * 3;
      d = (r + m * 2) >> b;
      A = (o + m * 2) >> b;
      return n;
    }
    n.x = function (t) {
      Symbol('JSCA_5177_5179');
      return arguments.length
        ? ((s = typeof t === 'function' ? t : Kf(+t)), n)
        : s;
    };
    n.y = function (t) {
      Symbol('JSCA_5180_5182');
      return arguments.length
        ? ((S = typeof t === 'function' ? t : Kf(+t)), n)
        : S;
    };
    n.weight = function (t) {
      Symbol('JSCA_5183_5185');
      return arguments.length
        ? ((h = typeof t === 'function' ? t : Kf(+t)), n)
        : h;
    };
    n.size = function (t) {
      Symbol('JSCA_5186_5191');
      if (!arguments.length) return [r, o];
      var n = +t[0],
        e = +t[1];
      if (!(n >= 0 && e >= 0)) throw new Error('invalid size');
      return (r = n), (o = e), _();
    };
    n.cellSize = function (t) {
      Symbol('JSCA_5192_5196');
      if (!arguments.length) return 1 << b;
      if (!((t = +t) >= 1)) throw new Error('invalid cell size');
      return (b = Math.floor(Math.log(t) / Math.LN2)), _();
    };
    n.thresholds = function (t) {
      Symbol('JSCA_5197_5199');
      return arguments.length
        ? ((i =
            typeof t === 'function'
              ? t
              : Array.isArray(t)
              ? Kf(Vf.call(t))
              : Kf(t)),
          n)
        : i;
    };
    n.bandwidth = function (t) {
      Symbol('JSCA_5200_5204');
      if (!arguments.length) return Math.sqrt(y * (y + 1));
      if (!((t = +t) >= 0)) throw new Error('invalid bandwidth');
      return (y = (Math.sqrt(4 * t * t + 1) - 1) / 2), _();
    };
    return n;
  }
  const y_ = 11102230246251565e-32;
  const I = 134217729;
  const b_ = (3 + 8 * y_) * y_;
  function m_(t, n, e, r, o) {
    Symbol('JSCA_5210_5280');
    let i, l, a, u;
    let f = n[0];
    let _ = r[0];
    let c = 0;
    let s = 0;
    if (_ > f === _ > -f) {
      i = f;
      f = n[++c];
    } else {
      i = _;
      _ = r[++s];
    }
    let S = 0;
    if (c < t && s < e) {
      if (_ > f === _ > -f) {
        l = f + i;
        a = i - (l - f);
        f = n[++c];
      } else {
        l = _ + i;
        a = i - (l - _);
        _ = r[++s];
      }
      i = l;
      if (a !== 0) {
        o[S++] = a;
      }
      while (c < t && s < e) {
        if (_ > f === _ > -f) {
          l = i + f;
          u = l - i;
          a = i - (l - u) + (f - u);
          f = n[++c];
        } else {
          l = i + _;
          u = l - i;
          a = i - (l - u) + (_ - u);
          _ = r[++s];
        }
        i = l;
        if (a !== 0) {
          o[S++] = a;
        }
      }
    }
    while (c < t) {
      l = i + f;
      u = l - i;
      a = i - (l - u) + (f - u);
      f = n[++c];
      i = l;
      if (a !== 0) {
        o[S++] = a;
      }
    }
    while (s < e) {
      l = i + _;
      u = l - i;
      a = i - (l - u) + (_ - u);
      _ = r[++s];
      i = l;
      if (a !== 0) {
        o[S++] = a;
      }
    }
    if (i !== 0 || S === 0) {
      o[S++] = i;
    }
    return S;
  }
  function d_(n, e) {
    Symbol('JSCA_5281_5285');
    let r = e[0];
    for (let t = 1; t < n; t++) r += e[t];
    return r;
  }
  function A_(t) {
    Symbol('JSCA_5286_5288');
    return new Float64Array(t);
  }
  const C_ = (3 + 16 * y_) * y_;
  const J_ = (2 + 12 * y_) * y_;
  const p_ = (9 + 64 * y_) * y_ * y_;
  const g_ = A_(4);
  const v_ = A_(8);
  const x_ = A_(12);
  const w_ = A_(16);
  const $ = A_(4);
  function M_(t, n, e, r, o, i, l) {
    Symbol('JSCA_5297_5443');
    let a, u, f, _;
    let c, s, S, h, y, b, m, d, A, C, J, p, g, v;
    const x = t - o;
    const w = e - o;
    const M = n - i;
    const T = r - i;
    C = x * T;
    s = I * x;
    S = s - (s - x);
    h = x - S;
    s = I * T;
    y = s - (s - T);
    b = T - y;
    J = h * b - (C - S * y - h * y - S * b);
    p = M * w;
    s = I * M;
    S = s - (s - M);
    h = M - S;
    s = I * w;
    y = s - (s - w);
    b = w - y;
    g = h * b - (p - S * y - h * y - S * b);
    m = J - g;
    c = J - m;
    g_[0] = J - (m + c) + (c - g);
    d = C + m;
    c = d - C;
    A = C - (d - c) + (m - c);
    m = A - p;
    c = A - m;
    g_[1] = A - (m + c) + (c - p);
    v = d + m;
    c = v - d;
    g_[2] = d - (v - c) + (m - c);
    g_[3] = v;
    let k = d_(4, g_);
    let E = J_ * l;
    if (k >= E || -k >= E) {
      return k;
    }
    c = t - x;
    a = t - (x + c) + (c - o);
    c = e - w;
    f = e - (w + c) + (c - o);
    c = n - M;
    u = n - (M + c) + (c - i);
    c = r - T;
    _ = r - (T + c) + (c - i);
    if (a === 0 && u === 0 && f === 0 && _ === 0) {
      return k;
    }
    E = p_ * l + b_ * Math.abs(k);
    k += x * _ + T * a - (M * f + w * u);
    if (k >= E || -k >= E) return k;
    C = a * T;
    s = I * a;
    S = s - (s - a);
    h = a - S;
    s = I * T;
    y = s - (s - T);
    b = T - y;
    J = h * b - (C - S * y - h * y - S * b);
    p = u * w;
    s = I * u;
    S = s - (s - u);
    h = u - S;
    s = I * w;
    y = s - (s - w);
    b = w - y;
    g = h * b - (p - S * y - h * y - S * b);
    m = J - g;
    c = J - m;
    $[0] = J - (m + c) + (c - g);
    d = C + m;
    c = d - C;
    A = C - (d - c) + (m - c);
    m = A - p;
    c = A - m;
    $[1] = A - (m + c) + (c - p);
    v = d + m;
    c = v - d;
    $[2] = d - (v - c) + (m - c);
    $[3] = v;
    const N = m_(4, g_, 4, $, v_);
    C = x * _;
    s = I * x;
    S = s - (s - x);
    h = x - S;
    s = I * _;
    y = s - (s - _);
    b = _ - y;
    J = h * b - (C - S * y - h * y - S * b);
    p = M * f;
    s = I * M;
    S = s - (s - M);
    h = M - S;
    s = I * f;
    y = s - (s - f);
    b = f - y;
    g = h * b - (p - S * y - h * y - S * b);
    m = J - g;
    c = J - m;
    $[0] = J - (m + c) + (c - g);
    d = C + m;
    c = d - C;
    A = C - (d - c) + (m - c);
    m = A - p;
    c = A - m;
    $[1] = A - (m + c) + (c - p);
    v = d + m;
    c = v - d;
    $[2] = d - (v - c) + (m - c);
    $[3] = v;
    const P = m_(N, v_, 4, $, x_);
    C = a * _;
    s = I * a;
    S = s - (s - a);
    h = a - S;
    s = I * _;
    y = s - (s - _);
    b = _ - y;
    J = h * b - (C - S * y - h * y - S * b);
    p = u * f;
    s = I * u;
    S = s - (s - u);
    h = u - S;
    s = I * f;
    y = s - (s - f);
    b = f - y;
    g = h * b - (p - S * y - h * y - S * b);
    m = J - g;
    c = J - m;
    $[0] = J - (m + c) + (c - g);
    d = C + m;
    c = d - C;
    A = C - (d - c) + (m - c);
    m = A - p;
    c = A - m;
    $[1] = A - (m + c) + (c - p);
    v = d + m;
    c = v - d;
    $[2] = d - (v - c) + (m - c);
    $[3] = v;
    const z = m_(P, x_, 4, $, w_);
    return w_[z - 1];
  }
  function T_(t, n, e, r, o, i) {
    Symbol('JSCA_5444_5451');
    const l = (n - i) * (e - o);
    const a = (t - o) * (r - i);
    const u = l - a;
    const f = Math.abs(l + a);
    if (Math.abs(u) >= C_ * f) return u;
    return -M_(t, n, e, r, o, i, f);
  }
  const k_ = Math.pow(2, -52);
  const E_ = new Uint32Array(512);
  class N_ {
    static from(n, e = q_, r = U_) {
      Symbol('JSCA_5455_5464');
      const o = n.length;
      const i = new Float64Array(o * 2);
      for (let t = 0; t < o; t++) {
        const l = n[t];
        i[2 * t] = e(l);
        i[2 * t + 1] = r(l);
      }
      return new N_(i);
    }
    constructor(t) {
      Symbol('JSCA_5465_5480');
      const n = t.length >> 1;
      if (n > 0 && typeof t[0] !== 'number')
        throw new Error('Expected coords to contain numbers.');
      this.coords = t;
      const e = Math.max(2 * n - 5, 0);
      this._triangles = new Uint32Array(e * 3);
      this._halfedges = new Int32Array(e * 3);
      this._hashSize = Math.ceil(Math.sqrt(n));
      this._hullPrev = new Uint32Array(n);
      this._hullNext = new Uint32Array(n);
      this._hullTri = new Uint32Array(n);
      this._hullHash = new Int32Array(this._hashSize);
      this._ids = new Uint32Array(n);
      this._dists = new Float64Array(n);
      this.update();
    }
    update() {
      Symbol('JSCA_5481_5640');
      const {
        coords: _,
        _hullPrev: c,
        _hullNext: s,
        _hullTri: S,
        _hullHash: h,
      } = this;
      const i = _.length >> 1;
      let r = Infinity;
      let o = Infinity;
      let l = -Infinity;
      let a = -Infinity;
      for (let e = 0; e < i; e++) {
        const t = _[2 * e];
        const n = _[2 * e + 1];
        if (t < r) r = t;
        if (n < o) o = n;
        if (t > l) l = t;
        if (n > a) a = n;
        this._ids[e] = e;
      }
      const e = (r + l) / 2;
      const u = (o + a) / 2;
      let y, b, m;
      for (let t = 0, n = Infinity; t < i; t++) {
        const x = z_(e, u, _[2 * t], _[2 * t + 1]);
        if (x < n) {
          y = t;
          n = x;
        }
      }
      const f = _[2 * y];
      const d = _[2 * y + 1];
      for (let t = 0, n = Infinity; t < i; t++) {
        if (t === y) continue;
        const x = z_(f, d, _[2 * t], _[2 * t + 1]);
        if (x < n && x > 0) {
          b = t;
          n = x;
        }
      }
      let A = _[2 * b];
      let C = _[2 * b + 1];
      let n = Infinity;
      for (let t = 0; t < i; t++) {
        if (t === y || t === b) continue;
        const w = $_(f, d, A, C, _[2 * t], _[2 * t + 1]);
        if (w < n) {
          m = t;
          n = w;
        }
      }
      let J = _[2 * m];
      let p = _[2 * m + 1];
      if (n === Infinity) {
        for (let t = 0; t < i; t++) {
          this._dists[t] = _[2 * t] - _[0] || _[2 * t + 1] - _[1];
        }
        R_(this._ids, this._dists, 0, i - 1);
        const r = new Uint32Array(i);
        let o = 0;
        for (let n = 0, e = -Infinity; n < i; n++) {
          const t = this._ids[n];
          const x = this._dists[t];
          if (x > e) {
            r[o++] = t;
            e = x;
          }
        }
        this.hull = r.subarray(0, o);
        this.triangles = new Uint32Array(0);
        this.halfedges = new Uint32Array(0);
        return;
      }
      if (T_(f, d, A, C, J, p) < 0) {
        const M = b;
        const t = A;
        const n = C;
        b = m;
        A = J;
        C = p;
        m = M;
        J = t;
        p = n;
      }
      const g = D_(f, d, A, C, J, p);
      this._cx = g.x;
      this._cy = g.y;
      for (let t = 0; t < i; t++) {
        this._dists[t] = z_(_[2 * t], _[2 * t + 1], g.x, g.y);
      }
      R_(this._ids, this._dists, 0, i - 1);
      this._hullStart = y;
      let v = 3;
      s[y] = c[m] = b;
      s[b] = c[y] = m;
      s[m] = c[b] = y;
      S[y] = 0;
      S[b] = 1;
      S[m] = 2;
      h.fill(-1);
      h[this._hashKey(f, d)] = y;
      h[this._hashKey(A, C)] = b;
      h[this._hashKey(J, p)] = m;
      this.trianglesLen = 0;
      this._addTriangle(y, b, m, -1, -1, -1);
      for (let a = 0, u, f; a < this._ids.length; a++) {
        const M = this._ids[a];
        const e = _[2 * M];
        const r = _[2 * M + 1];
        if (a > 0 && Math.abs(e - u) <= k_ && Math.abs(r - f) <= k_) continue;
        u = e;
        f = r;
        if (M === y || M === b || M === m) continue;
        let o = 0;
        for (let t = 0, n = this._hashKey(e, r); t < this._hashSize; t++) {
          o = h[(n + t) % this._hashSize];
          if (o !== -1 && o !== s[o]) break;
        }
        o = c[o];
        let t = o,
          n;
        while (
          ((n = s[t]),
          T_(e, r, _[2 * t], _[2 * t + 1], _[2 * n], _[2 * n + 1]) >= 0)
        ) {
          t = n;
          if (t === o) {
            t = -1;
            break;
          }
        }
        if (t === -1) continue;
        let i = this._addTriangle(t, M, s[t], -1, -1, S[t]);
        S[M] = this._legalize(i + 2);
        S[t] = i;
        v++;
        let l = s[t];
        while (
          ((n = s[l]),
          T_(e, r, _[2 * l], _[2 * l + 1], _[2 * n], _[2 * n + 1]) < 0)
        ) {
          i = this._addTriangle(l, M, n, S[M], -1, S[l]);
          S[M] = this._legalize(i + 2);
          s[l] = l;
          v--;
          l = n;
        }
        if (t === o) {
          while (
            ((n = c[t]),
            T_(e, r, _[2 * n], _[2 * n + 1], _[2 * t], _[2 * t + 1]) < 0)
          ) {
            i = this._addTriangle(n, M, t, -1, S[t], S[n]);
            this._legalize(i + 2);
            S[n] = i;
            s[t] = t;
            v--;
            t = n;
          }
        }
        this._hullStart = c[M] = t;
        s[t] = c[l] = M;
        s[M] = l;
        h[this._hashKey(e, r)] = M;
        h[this._hashKey(_[2 * t], _[2 * t + 1])] = t;
      }
      this.hull = new Uint32Array(v);
      for (let t = 0, n = this._hullStart; t < v; t++) {
        this.hull[t] = n;
        n = s[n];
      }
      this.triangles = this._triangles.subarray(0, this.trianglesLen);
      this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
    }
    _hashKey(t, n) {
      Symbol('JSCA_5641_5643');
      return (
        Math.floor(P_(t - this._cx, n - this._cy) * this._hashSize) %
        this._hashSize
      );
    }
    _legalize(e) {
      Symbol('JSCA_5644_5692');
      const { _triangles: r, _halfedges: o, coords: i } = this;
      let l = 0;
      let a = 0;
      while (true) {
        const u = o[e];
        const f = e - (e % 3);
        a = f + ((e + 2) % 3);
        if (u === -1) {
          if (l === 0) break;
          e = E_[--l];
          continue;
        }
        const t = u - (u % 3);
        const _ = f + ((e + 1) % 3);
        const c = t + ((u + 2) % 3);
        const n = r[a];
        const s = r[e];
        const S = r[_];
        const h = r[c];
        const y = I_(
          i[2 * n],
          i[2 * n + 1],
          i[2 * s],
          i[2 * s + 1],
          i[2 * S],
          i[2 * S + 1],
          i[2 * h],
          i[2 * h + 1]
        );
        if (y) {
          r[e] = h;
          r[u] = n;
          const b = o[c];
          if (b === -1) {
            let t = this._hullStart;
            do {
              if (this._hullTri[t] === c) {
                this._hullTri[t] = e;
                break;
              }
              t = this._hullPrev[t];
            } while (t !== this._hullStart);
          }
          this._link(e, b);
          this._link(u, o[a]);
          this._link(a, c);
          const m = t + ((u + 1) % 3);
          if (l < E_.length) {
            E_[l++] = m;
          }
        } else {
          if (l === 0) break;
          e = E_[--l];
        }
      }
      return a;
    }
    _link(t, n) {
      Symbol('JSCA_5693_5696');
      this._halfedges[t] = n;
      if (n !== -1) this._halfedges[n] = t;
    }
    _addTriangle(t, n, e, r, o, i) {
      Symbol('JSCA_5697_5707');
      const l = this.trianglesLen;
      this._triangles[l] = t;
      this._triangles[l + 1] = n;
      this._triangles[l + 2] = e;
      this._link(l, r);
      this._link(l + 1, o);
      this._link(l + 2, i);
      this.trianglesLen += 3;
      return l;
    }
  }
  function P_(t, n) {
    Symbol('JSCA_5709_5712');
    const e = t / (Math.abs(t) + Math.abs(n));
    return (n > 0 ? 3 - e : 1 + e) / 4;
  }
  function z_(t, n, e, r) {
    Symbol('JSCA_5713_5717');
    const o = t - e;
    const i = n - r;
    return o * o + i * i;
  }
  function I_(t, n, e, r, o, i, l, a) {
    Symbol('JSCA_5718_5729');
    const u = t - l;
    const f = n - a;
    const _ = e - l;
    const c = r - a;
    const s = o - l;
    const S = i - a;
    const h = u * u + f * f;
    const y = _ * _ + c * c;
    const b = s * s + S * S;
    return u * (c * b - y * S) - f * (_ * b - y * s) + h * (_ * S - c * s) < 0;
  }
  function $_(t, n, e, r, o, i) {
    Symbol('JSCA_5730_5741');
    const l = e - t;
    const a = r - n;
    const u = o - t;
    const f = i - n;
    const _ = l * l + a * a;
    const c = u * u + f * f;
    const s = 0.5 / (l * f - a * u);
    const S = (f * _ - a * c) * s;
    const h = (l * c - u * _) * s;
    return S * S + h * h;
  }
  function D_(t, n, e, r, o, i) {
    Symbol('JSCA_5742_5756');
    const l = e - t;
    const a = r - n;
    const u = o - t;
    const f = i - n;
    const _ = l * l + a * a;
    const c = u * u + f * f;
    const s = 0.5 / (l * f - a * u);
    const S = t + (f * _ - a * c) * s;
    const h = n + (l * c - u * _) * s;
    return { x: S, y: h };
  }
  function R_(r, o, i, l) {
    Symbol('JSCA_5757_5792');
    if (l - i <= 20) {
      for (let n = i + 1; n <= l; n++) {
        const a = r[n];
        const u = o[a];
        let t = n - 1;
        while (t >= i && o[r[t]] > u) r[t + 1] = r[t--];
        r[t + 1] = a;
      }
    } else {
      const t = (i + l) >> 1;
      let n = i + 1;
      let e = l;
      F_(r, t, n);
      if (o[r[i]] > o[r[l]]) F_(r, i, l);
      if (o[r[n]] > o[r[l]]) F_(r, n, l);
      if (o[r[i]] > o[r[n]]) F_(r, i, n);
      const a = r[n];
      const u = o[a];
      while (true) {
        do {
          n++;
        } while (o[r[n]] < u);
        do {
          e--;
        } while (o[r[e]] > u);
        if (e < n) break;
        F_(r, n, e);
      }
      r[i + 1] = r[e];
      r[e] = a;
      if (l - n + 1 >= e - i) {
        R_(r, o, n, l);
        R_(r, o, i, e - 1);
      } else {
        R_(r, o, i, e - 1);
        R_(r, o, n, l);
      }
    }
  }
  function F_(t, n, e) {
    Symbol('JSCA_5793_5797');
    const r = t[n];
    t[n] = t[e];
    t[e] = r;
  }
  function q_(t) {
    Symbol('JSCA_5798_5800');
    return t[0];
  }
  function U_(t) {
    Symbol('JSCA_5801_5803');
    return t[1];
  }
  const O_ = 1e-6;
  class B_ {
    constructor() {
      Symbol('JSCA_5806_5809');
      this._x0 = this._y0 = this._x1 = this._y1 = null;
      this._ = '';
    }
    moveTo(t, n) {
      Symbol('JSCA_5810_5812');
      this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}`;
    }
    closePath() {
      Symbol('JSCA_5813_5818');
      if (this._x1 !== null) {
        (this._x1 = this._x0), (this._y1 = this._y0);
        this._ += 'Z';
      }
    }
    lineTo(t, n) {
      Symbol('JSCA_5819_5821');
      this._ += `L${(this._x1 = +t)},${(this._y1 = +n)}`;
    }
    arc(t, n, e) {
      Symbol('JSCA_5822_5830');
      (t = +t), (n = +n), (e = +e);
      const r = t + e;
      const o = n;
      if (e < 0) throw new Error('negative radius');
      if (this._x1 === null) this._ += `M${r},${o}`;
      else if (Math.abs(this._x1 - r) > O_ || Math.abs(this._y1 - o) > O_)
        this._ += 'L' + r + ',' + o;
      if (!e) return;
      this._ += `A${e},${e},0,1,1,${t - e},${n}A${e},${e},0,1,1,${(this._x1 =
        r)},${(this._y1 = o)}`;
    }
    rect(t, n, e, r) {
      Symbol('JSCA_5831_5833');
      this._ += `M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
        +n)}h${+e}v${+r}h${-e}Z`;
    }
    value() {
      Symbol('JSCA_5834_5836');
      return this._ || null;
    }
  }
  class Y_ {
    constructor() {
      Symbol('JSCA_5839_5841');
      this._ = [];
    }
    moveTo(t, n) {
      Symbol('JSCA_5842_5844');
      this._.push([t, n]);
    }
    closePath() {
      Symbol('JSCA_5845_5847');
      this._.push(this._[0].slice());
    }
    lineTo(t, n) {
      Symbol('JSCA_5848_5850');
      this._.push([t, n]);
    }
    value() {
      Symbol('JSCA_5851_5853');
      return this._.length ? this._ : null;
    }
  }
  class L_ {
    constructor(t, [n, e, r, o] = [0, 0, 960, 500]) {
      Symbol('JSCA_5856_5864');
      if (!((r = +r) >= (n = +n)) || !((o = +o) >= (e = +e)))
        throw new Error('invalid bounds');
      this.delaunay = t;
      this._circumcenters = new Float64Array(t.points.length * 2);
      this.vectors = new Float64Array(t.points.length * 2);
      (this.xmax = r), (this.xmin = n);
      (this.ymax = o), (this.ymin = e);
      this._init();
    }
    update() {
      Symbol('JSCA_5865_5869');
      this.delaunay.update();
      this._init();
      return this;
    }
    _init() {
      Symbol('JSCA_5870_5920');
      const {
        delaunay: { points: a, hull: u, triangles: f },
        vectors: n,
      } = this;
      let _, c;
      const s = (this.circumcenters = this._circumcenters.subarray(
        0,
        (f.length / 3) * 2
      ));
      for (let r = 0, o = 0, t = f.length, i, l; r < t; r += 3, o += 2) {
        const t = f[r] * 2;
        const n = f[r + 1] * 2;
        const e = f[r + 2] * 2;
        const S = a[t];
        const h = a[t + 1];
        const y = a[n];
        const b = a[n + 1];
        const m = a[e];
        const d = a[e + 1];
        const A = y - S;
        const C = b - h;
        const J = m - S;
        const p = d - h;
        const g = (A * p - C * J) * 2;
        if (Math.abs(g) < 1e-9) {
          if (_ === undefined) {
            _ = c = 0;
            for (const t of u) (_ += a[t * 2]), (c += a[t * 2 + 1]);
            (_ /= u.length), (c /= u.length);
          }
          const t = 1e9 * Math.sign((_ - S) * p - (c - h) * J);
          i = (S + m) / 2 - t * p;
          l = (h + d) / 2 + t * J;
        } else {
          const v = 1 / g;
          const x = A * A + C * C;
          const w = J * J + p * p;
          i = S + (p * x - C * w) * v;
          l = h + (A * w - J * x) * v;
        }
        s[o] = i;
        s[o + 1] = l;
      }
      let e = u[u.length - 1];
      let r,
        o = e * 4;
      let i,
        S = a[2 * e];
      let l,
        h = a[2 * e + 1];
      n.fill(0);
      for (let t = 0; t < u.length; ++t) {
        e = u[t];
        (r = o), (i = S), (l = h);
        (o = e * 4), (S = a[2 * e]), (h = a[2 * e + 1]);
        n[r + 2] = n[o] = l - h;
        n[r + 3] = n[o + 1] = S - i;
      }
    }
    render(r) {
      Symbol('JSCA_5921_5947');
      const t = r == null ? (r = new B_()) : undefined;
      const {
        delaunay: { halfedges: e, inedges: o, hull: i },
        circumcenters: l,
        vectors: a,
      } = this;
      if (i.length <= 1) return null;
      for (let t = 0, n = e.length; t < n; ++t) {
        const _ = e[t];
        if (_ < t) continue;
        const c = Math.floor(t / 3) * 2;
        const s = Math.floor(_ / 3) * 2;
        const S = l[c];
        const h = l[c + 1];
        const y = l[s];
        const b = l[s + 1];
        this._renderSegment(S, h, y, b, r);
      }
      let u,
        f = i[i.length - 1];
      for (let e = 0; e < i.length; ++e) {
        (u = f), (f = i[e]);
        const m = Math.floor(o[f] / 3) * 2;
        const t = l[m];
        const n = l[m + 1];
        const d = u * 4;
        const A = this._project(t, n, a[d + 2], a[d + 3]);
        if (A) this._renderSegment(t, n, A[0], A[1], r);
      }
      return t && t.value();
    }
    renderBounds(t) {
      Symbol('JSCA_5948_5952');
      const n = t == null ? (t = new B_()) : undefined;
      t.rect(
        this.xmin,
        this.ymin,
        this.xmax - this.xmin,
        this.ymax - this.ymin
      );
      return n && n.value();
    }
    renderCell(t, n) {
      Symbol('JSCA_5953_5965');
      const e = n == null ? (n = new B_()) : undefined;
      const r = this._clip(t);
      if (r === null || !r.length) return;
      n.moveTo(r[0], r[1]);
      let o = r.length;
      while (r[0] === r[o - 2] && r[1] === r[o - 1] && o > 1) o -= 2;
      for (let t = 2; t < o; t += 2) {
        if (r[t] !== r[t - 2] || r[t + 1] !== r[t - 1])
          n.lineTo(r[t], r[t + 1]);
      }
      n.closePath();
      return e && e.value();
    }
    *cellPolygons() {
      Symbol('JSCA_5966_5972');
      const {
        delaunay: { points: e },
      } = this;
      for (let t = 0, n = e.length / 2; t < n; ++t) {
        const r = this.cellPolygon(t);
        if (r) (r.index = t), yield r;
      }
    }
    cellPolygon(t) {
      Symbol('JSCA_5973_5977');
      const n = new Y_();
      this.renderCell(t, n);
      return n.value();
    }
    _renderSegment(t, n, e, r, o) {
      Symbol('JSCA_5978_5989');
      let i;
      const l = this._regioncode(t, n);
      const a = this._regioncode(e, r);
      if (l === 0 && a === 0) {
        o.moveTo(t, n);
        o.lineTo(e, r);
      } else if ((i = this._clipSegment(t, n, e, r, l, a))) {
        o.moveTo(i[0], i[1]);
        o.lineTo(i[2], i[3]);
      }
    }
    contains(t, n, e) {
      Symbol('JSCA_5990_5993');
      if (((n = +n), n !== n) || ((e = +e), e !== e)) return false;
      return this.delaunay._step(t, n, e) === t;
    }
    *neighbors(t) {
      Symbol('JSCA_5994_6007');
      const o = this._clip(t);
      if (o)
        for (const i of this.delaunay.neighbors(t)) {
          const l = this._clip(i);
          if (l)
            t: for (let e = 0, r = o.length; e < r; e += 2) {
              for (let t = 0, n = l.length; t < n; t += 2) {
                if (
                  o[e] === l[t] &&
                  o[e + 1] === l[t + 1] &&
                  o[(e + 2) % r] === l[(t + n - 2) % n] &&
                  o[(e + 3) % r] === l[(t + n - 1) % n]
                ) {
                  yield i;
                  break t;
                }
              }
            }
        }
    }
    _cell(t) {
      Symbol('JSCA_6008_6022');
      const {
        circumcenters: n,
        delaunay: { inedges: e, halfedges: r, triangles: o },
      } = this;
      const i = e[t];
      if (i === -1) return null;
      const l = [];
      let a = i;
      do {
        const u = Math.floor(a / 3);
        l.push(n[u * 2], n[u * 2 + 1]);
        a = a % 3 === 2 ? a - 2 : a + 1;
        if (o[a] !== t) break;
        a = r[a];
      } while (a !== i && a !== -1);
      return l;
    }
    _clip(t) {
      Symbol('JSCA_6023_6032');
      if (t === 0 && this.delaunay.hull.length === 1) {
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
      }
      const n = this._cell(t);
      if (n === null) return null;
      const { vectors: e } = this;
      const r = t * 4;
      return this._simplify(
        e[r] || e[r + 1]
          ? this._clipInfinite(t, n, e[r], e[r + 1], e[r + 2], e[r + 3])
          : this._clipFinite(t, n)
      );
    }
    _clipFinite(i, n) {
      Symbol('JSCA_6033_6069');
      const e = n.length;
      let l = null;
      let a,
        u,
        f = n[e - 2],
        _ = n[e - 1];
      let c,
        s = this._regioncode(f, _);
      let S,
        h = 0;
      for (let t = 0; t < e; t += 2) {
        (a = f), (u = _), (f = n[t]), (_ = n[t + 1]);
        (c = s), (s = this._regioncode(f, _));
        if (c === 0 && s === 0) {
          (S = h), (h = 0);
          if (l) l.push(f, _);
          else l = [f, _];
        } else {
          let t, n, e, r, o;
          if (c === 0) {
            if ((t = this._clipSegment(a, u, f, _, c, s)) === null) continue;
            [n, e, r, o] = t;
          } else {
            if ((t = this._clipSegment(f, _, a, u, s, c)) === null) continue;
            [r, o, n, e] = t;
            (S = h), (h = this._edgecode(n, e));
            if (S && h) this._edge(i, S, h, l, l.length);
            if (l) l.push(n, e);
            else l = [n, e];
          }
          (S = h), (h = this._edgecode(r, o));
          if (S && h) this._edge(i, S, h, l, l.length);
          if (l) l.push(r, o);
          else l = [r, o];
        }
      }
      if (l) {
        (S = h), (h = this._edgecode(l[0], l[1]));
        if (S && h) this._edge(i, S, h, l, l.length);
      } else if (
        this.contains(
          i,
          (this.xmin + this.xmax) / 2,
          (this.ymin + this.ymax) / 2
        )
      ) {
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
      }
      return l;
    }
    _clipSegment(r, o, i, l, a, u) {
      Symbol('JSCA_6070_6080');
      const f = a < u;
      if (f) [r, o, i, l, a, u] = [i, l, r, o, u, a];
      while (true) {
        if (a === 0 && u === 0) return f ? [i, l, r, o] : [r, o, i, l];
        if (a & u) return null;
        let t,
          n,
          e = a || u;
        if (e & 8)
          (t = r + ((i - r) * (this.ymax - o)) / (l - o)), (n = this.ymax);
        else if (e & 4)
          (t = r + ((i - r) * (this.ymin - o)) / (l - o)), (n = this.ymin);
        else if (e & 2)
          (n = o + ((l - o) * (this.xmax - r)) / (i - r)), (t = this.xmax);
        else (n = o + ((l - o) * (this.xmin - r)) / (i - r)), (t = this.xmin);
        if (a) (r = t), (o = n), (a = this._regioncode(r, o));
        else (i = t), (l = n), (u = this._regioncode(i, l));
      }
    }
    _clipInfinite(o, t, n, e, r, i) {
      Symbol('JSCA_6081_6094');
      let l = Array.from(t),
        a;
      if ((a = this._project(l[0], l[1], n, e))) l.unshift(a[0], a[1]);
      if ((a = this._project(l[l.length - 2], l[l.length - 1], r, i)))
        l.push(a[0], a[1]);
      if ((l = this._clipFinite(o, l))) {
        for (
          let t = 0, n = l.length, e, r = this._edgecode(l[n - 2], l[n - 1]);
          t < n;
          t += 2
        ) {
          (e = r), (r = this._edgecode(l[t], l[t + 1]));
          if (e && r) (t = this._edge(o, e, r, l, t)), (n = l.length);
        }
      } else if (
        this.contains(
          o,
          (this.xmin + this.xmax) / 2,
          (this.ymin + this.ymax) / 2
        )
      ) {
        l = [
          this.xmin,
          this.ymin,
          this.xmax,
          this.ymin,
          this.xmax,
          this.ymax,
          this.xmin,
          this.ymax,
        ];
      }
      return l;
    }
    _edge(e, r, t, o, i) {
      Symbol('JSCA_6095_6129');
      while (r !== t) {
        let t, n;
        switch (r) {
          case 5:
            r = 4;
            continue;
          case 4:
            (r = 6), (t = this.xmax), (n = this.ymin);
            break;
          case 6:
            r = 2;
            continue;
          case 2:
            (r = 10), (t = this.xmax), (n = this.ymax);
            break;
          case 10:
            r = 8;
            continue;
          case 8:
            (r = 9), (t = this.xmin), (n = this.ymax);
            break;
          case 9:
            r = 1;
            continue;
          case 1:
            (r = 5), (t = this.xmin), (n = this.ymin);
            break;
        }
        if ((o[i] !== t || o[i + 1] !== n) && this.contains(e, t, n)) {
          o.splice(i, 0, t, n), (i += 2);
        }
      }
      return i;
    }
    _project(t, n, e, r) {
      Symbol('JSCA_6130_6147');
      let o = Infinity,
        i,
        l,
        a;
      if (r < 0) {
        if (n <= this.ymin) return null;
        if ((i = (this.ymin - n) / r) < o)
          (a = this.ymin), (l = t + (o = i) * e);
      } else if (r > 0) {
        if (n >= this.ymax) return null;
        if ((i = (this.ymax - n) / r) < o)
          (a = this.ymax), (l = t + (o = i) * e);
      }
      if (e > 0) {
        if (t >= this.xmax) return null;
        if ((i = (this.xmax - t) / e) < o)
          (l = this.xmax), (a = n + (o = i) * r);
      } else if (e < 0) {
        if (t <= this.xmin) return null;
        if ((i = (this.xmin - t) / e) < o)
          (l = this.xmin), (a = n + (o = i) * r);
      }
      return [l, a];
    }
    _edgecode(t, n) {
      Symbol('JSCA_6148_6150');
      return (
        (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) |
        (n === this.ymin ? 4 : n === this.ymax ? 8 : 0)
      );
    }
    _regioncode(t, n) {
      Symbol('JSCA_6151_6153');
      return (
        (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) |
        (n < this.ymin ? 4 : n > this.ymax ? 8 : 0)
      );
    }
    _simplify(e) {
      Symbol('JSCA_6154_6165');
      if (e && e.length > 4) {
        for (let n = 0; n < e.length; n += 2) {
          const r = (n + 2) % e.length,
            t = (n + 4) % e.length;
          if (
            (e[n] === e[r] && e[r] === e[t]) ||
            (e[n + 1] === e[r + 1] && e[r + 1] === e[t + 1])
          ) {
            e.splice(r, 2), (n -= 2);
          }
        }
        if (!e.length) e = null;
      }
      return e;
    }
  }
  const j_ = 2 * Math.PI,
    H_ = Math.pow;
  function X_(t) {
    Symbol('JSCA_6168_6170');
    return t[0];
  }
  function G_(t) {
    Symbol('JSCA_6171_6173');
    return t[1];
  }
  function V_(t) {
    Symbol('JSCA_6174_6181');
    const { triangles: o, coords: i } = t;
    for (let r = 0; r < o.length; r += 3) {
      const t = 2 * o[r],
        l = 2 * o[r + 1],
        n = 2 * o[r + 2],
        e =
          (i[n] - i[t]) * (i[l + 1] - i[t + 1]) -
          (i[l] - i[t]) * (i[n + 1] - i[t + 1]);
      if (e > 1e-10) return false;
    }
    return true;
  }
  function W_(t, n, e) {
    Symbol('JSCA_6182_6184');
    return [t + Math.sin(t + n) * e, n + Math.cos(t - n) * e];
  }
  class Z_ {
    static from(t, n = X_, e = G_, r) {
      Symbol('JSCA_6186_6188');
      return new Z_(
        'length' in t ? K_(t, n, e, r) : Float64Array.from(Q_(t, n, e, r))
      );
    }
    constructor(t) {
      Symbol('JSCA_6189_6195');
      this._delaunator = new N_(t);
      this.inedges = new Int32Array(t.length / 2);
      this._hullIndex = new Int32Array(t.length / 2);
      this.points = this._delaunator.coords;
      this._init();
    }
    update() {
      Symbol('JSCA_6196_6200');
      this._delaunator.update();
      this._init();
      return this;
    }
    _init() {
      Symbol('JSCA_6201_6240');
      const t = this._delaunator,
        e = this.points;
      if (t.hull && t.hull.length > 2 && V_(t)) {
        this.collinear = Int32Array.from(
          { length: e.length / 2 },
          (t, n) => n
        ).sort((t, n) => e[2 * t] - e[2 * n] || e[2 * t + 1] - e[2 * n + 1]);
        const n = this.collinear[0],
          u = this.collinear[this.collinear.length - 1],
          t = [e[2 * n], e[2 * n + 1], e[2 * u], e[2 * u + 1]],
          f = 1e-8 * Math.hypot(t[3] - t[1], t[2] - t[0]);
        for (let t = 0, n = e.length / 2; t < n; ++t) {
          const _ = W_(e[2 * t], e[2 * t + 1], f);
          e[2 * t] = _[0];
          e[2 * t + 1] = _[1];
        }
        this._delaunator = new N_(e);
      } else {
        delete this.collinear;
      }
      const r = (this.halfedges = this._delaunator.halfedges);
      const o = (this.hull = this._delaunator.hull);
      const i = (this.triangles = this._delaunator.triangles);
      const l = this.inedges.fill(-1);
      const a = this._hullIndex.fill(-1);
      for (let t = 0, n = r.length; t < n; ++t) {
        const _ = i[t % 3 === 2 ? t - 2 : t + 1];
        if (r[t] === -1 || l[_] === -1) l[_] = t;
      }
      for (let t = 0, n = o.length; t < n; ++t) {
        a[o[t]] = t;
      }
      if (o.length <= 2 && o.length > 0) {
        this.triangles = new Int32Array(3).fill(-1);
        this.halfedges = new Int32Array(3).fill(-1);
        this.triangles[0] = o[0];
        l[o[0]] = 1;
        if (o.length === 2) {
          l[o[1]] = 0;
          this.triangles[1] = o[1];
          this.triangles[2] = o[1];
        }
      }
    }
    voronoi(t) {
      Symbol('JSCA_6241_6243');
      return new L_(this, t);
    }
    *neighbors(t) {
      Symbol('JSCA_6244_6266');
      const {
        inedges: n,
        hull: e,
        _hullIndex: r,
        halfedges: o,
        triangles: i,
        collinear: l,
      } = this;
      if (l) {
        const _ = l.indexOf(t);
        if (_ > 0) yield l[_ - 1];
        if (_ < l.length - 1) yield l[_ + 1];
        return;
      }
      const a = n[t];
      if (a === -1) return;
      let u = a,
        f = -1;
      do {
        yield (f = i[u]);
        u = u % 3 === 2 ? u - 2 : u + 1;
        if (i[u] !== t) return;
        u = o[u];
        if (u === -1) {
          const c = e[(r[t] + 1) % e.length];
          if (c !== f) yield c;
          return;
        }
      } while (u !== a);
    }
    find(t, n, e = 0) {
      Symbol('JSCA_6267_6273');
      if (((t = +t), t !== t) || ((n = +n), n !== n)) return -1;
      const r = e;
      let o;
      while ((o = this._step(e, t, n)) >= 0 && o !== e && o !== r) e = o;
      return o;
    }
    _step(n, e, r) {
      Symbol('JSCA_6274_6297');
      const {
        inedges: t,
        hull: o,
        _hullIndex: i,
        halfedges: l,
        triangles: a,
        points: u,
      } = this;
      if (t[n] === -1 || !u.length) return (n + 1) % (u.length >> 1);
      let f = n;
      let _ = H_(e - u[n * 2], 2) + H_(r - u[n * 2 + 1], 2);
      const c = t[n];
      let s = c;
      do {
        let t = a[s];
        const S = H_(e - u[t * 2], 2) + H_(r - u[t * 2 + 1], 2);
        if (S < _) (_ = S), (f = t);
        s = s % 3 === 2 ? s - 2 : s + 1;
        if (a[s] !== n) break;
        s = l[s];
        if (s === -1) {
          s = o[(i[n] + 1) % o.length];
          if (s !== t) {
            if (H_(e - u[s * 2], 2) + H_(r - u[s * 2 + 1], 2) < _) return s;
          }
          break;
        }
      } while (s !== c);
      return f;
    }
    render(e) {
      Symbol('JSCA_6298_6311');
      const t = e == null ? (e = new B_()) : undefined;
      const { points: r, halfedges: o, triangles: i } = this;
      for (let t = 0, n = o.length; t < n; ++t) {
        const l = o[t];
        if (l < t) continue;
        const a = i[t] * 2;
        const u = i[l] * 2;
        e.moveTo(r[a], r[a + 1]);
        e.lineTo(r[u], r[u + 1]);
      }
      this.renderHull(e);
      return t && t.value();
    }
    renderPoints(r, o) {
      Symbol('JSCA_6312_6323');
      if (o === undefined && (!r || typeof r.moveTo !== 'function'))
        (o = r), (r = null);
      o = o == undefined ? 2 : +o;
      const t = r == null ? (r = new B_()) : undefined;
      const { points: i } = this;
      for (let e = 0, t = i.length; e < t; e += 2) {
        const t = i[e],
          n = i[e + 1];
        r.moveTo(t + o, n);
        r.arc(t, n, o, 0, j_);
      }
      return t && t.value();
    }
    renderHull(n) {
      Symbol('JSCA_6324_6335');
      const t = n == null ? (n = new B_()) : undefined;
      const { hull: e, points: r } = this;
      const o = e[0] * 2,
        i = e.length;
      n.moveTo(r[o], r[o + 1]);
      for (let t = 1; t < i; ++t) {
        const o = 2 * e[t];
        n.lineTo(r[o], r[o + 1]);
      }
      n.closePath();
      return t && t.value();
    }
    hullPolygon() {
      Symbol('JSCA_6336_6340');
      const t = new Y_();
      this.renderHull(t);
      return t.value();
    }
    renderTriangle(t, n) {
      Symbol('JSCA_6341_6352');
      const e = n == null ? (n = new B_()) : undefined;
      const { points: r, triangles: o } = this;
      const i = o[(t *= 3)] * 2;
      const l = o[t + 1] * 2;
      const a = o[t + 2] * 2;
      n.moveTo(r[i], r[i + 1]);
      n.lineTo(r[l], r[l + 1]);
      n.lineTo(r[a], r[a + 1]);
      n.closePath();
      return e && e.value();
    }
    *trianglePolygons() {
      Symbol('JSCA_6353_6358');
      const { triangles: e } = this;
      for (let t = 0, n = e.length / 3; t < n; ++t) {
        yield this.trianglePolygon(t);
      }
    }
    trianglePolygon(t) {
      Symbol('JSCA_6359_6363');
      const n = new Y_();
      this.renderTriangle(t, n);
      return n.value();
    }
  }
  function K_(n, e, r, o) {
    Symbol('JSCA_6365_6374');
    const i = n.length;
    const l = new Float64Array(i * 2);
    for (let t = 0; t < i; ++t) {
      const a = n[t];
      l[t * 2] = e.call(o, a, t, n);
      l[t * 2 + 1] = r.call(o, a, t, n);
    }
    return l;
  }
  function* Q_(t, n, e, r) {
    Symbol('JSCA_6375_6382');
    let o = 0;
    for (const i of t) {
      yield n.call(r, i, o, t);
      yield e.call(r, i, o, t);
      ++o;
    }
  }
  var tc = {},
    nc = {},
    ec = 34,
    rc = 10,
    oc = 13;
  function ic(t) {
    Symbol('JSCA_6384_6388');
    return new Function(
      'd',
      'return {' +
        t
          .map(function (t, n) {
            Symbol('JSCA_6385_6387');
            return JSON.stringify(t) + ': d[' + n + '] || ""';
          })
          .join(',') +
        '}'
    );
  }
  function lc(e, r) {
    Symbol('JSCA_6389_6394');
    var o = ic(e);
    return function (t, n) {
      Symbol('JSCA_6391_6393');
      return r(o(t), n, e);
    };
  }
  function ac(t) {
    Symbol('JSCA_6395_6405');
    var e = Object.create(null),
      r = [];
    t.forEach(function (t) {
      Symbol('JSCA_6397_6403');
      for (var n in t) {
        if (!(n in e)) {
          r.push((e[n] = n));
        }
      }
    });
    return r;
  }
  function uc(t, n) {
    Symbol('JSCA_6406_6409');
    var e = t + '',
      r = e.length;
    return r < n ? new Array(n - r + 1).join(0) + e : e;
  }
  function fc(t) {
    Symbol('JSCA_6410_6412');
    return t < 0 ? '-' + uc(-t, 6) : t > 9999 ? '+' + uc(t, 6) : uc(t, 4);
  }
  function _c(t) {
    Symbol('JSCA_6413_6416');
    var n = t.getUTCHours(),
      e = t.getUTCMinutes(),
      r = t.getUTCSeconds(),
      o = t.getUTCMilliseconds();
    return isNaN(t)
      ? 'Invalid Date'
      : fc(t.getUTCFullYear()) +
          '-' +
          uc(t.getUTCMonth() + 1, 2) +
          '-' +
          uc(t.getUTCDate(), 2) +
          (o
            ? 'T' +
              uc(n, 2) +
              ':' +
              uc(e, 2) +
              ':' +
              uc(r, 2) +
              '.' +
              uc(o, 3) +
              'Z'
            : r
            ? 'T' + uc(n, 2) + ':' + uc(e, 2) + ':' + uc(r, 2) + 'Z'
            : e || n
            ? 'T' + uc(n, 2) + ':' + uc(e, 2) + 'Z'
            : '');
  }
  function cc(r) {
    Symbol('JSCA_6417_6493');
    var n = new RegExp('["' + r + '\n\r]'),
      c = r.charCodeAt(0);
    function t(t, e) {
      Symbol('JSCA_6419_6426');
      var r,
        o,
        n = i(t, function (t, n) {
          Symbol('JSCA_6420_6423');
          if (r) return r(t, n - 1);
          (o = t), (r = e ? lc(t, e) : ic(t));
        });
      n.columns = o || [];
      return n;
    }
    function i(r, t) {
      Symbol('JSCA_6427_6459');
      var n = [],
        o = r.length,
        i = 0,
        e = 0,
        l,
        a = o <= 0,
        u = false;
      if (r.charCodeAt(o - 1) === rc) --o;
      if (r.charCodeAt(o - 1) === oc) --o;
      function f() {
        Symbol('JSCA_6431_6451');
        if (a) return nc;
        if (u) return (u = false), tc;
        var t,
          n = i,
          e;
        if (r.charCodeAt(n) === ec) {
          while (
            (i++ < o && r.charCodeAt(i) !== ec) ||
            r.charCodeAt(++i) === ec
          );
          if ((t = i) >= o) a = true;
          else if ((e = r.charCodeAt(i++)) === rc) u = true;
          else if (e === oc) {
            u = true;
            if (r.charCodeAt(i) === rc) ++i;
          }
          return r.slice(n + 1, t - 1).replace(/""/g, '"');
        }
        while (i < o) {
          if ((e = r.charCodeAt((t = i++))) === rc) u = true;
          else if (e === oc) {
            u = true;
            if (r.charCodeAt(i) === rc) ++i;
          } else if (e !== c) continue;
          return r.slice(n, t);
        }
        return (a = true), r.slice(n, o);
      }
      while ((l = f()) !== nc) {
        var _ = [];
        while (l !== tc && l !== nc) _.push(l), (l = f());
        if (t && (_ = t(_, e++)) == null) continue;
        n.push(_);
      }
      return n;
    }
    function e(t, e) {
      Symbol('JSCA_6460_6466');
      return t.map(function (n) {
        Symbol('JSCA_6461_6465');
        return e
          .map(function (t) {
            Symbol('JSCA_6462_6464');
            return f(n[t]);
          })
          .join(r);
      });
    }
    function o(t, n) {
      Symbol('JSCA_6467_6470');
      if (n == null) n = ac(t);
      return [n.map(f).join(r)].concat(e(t, n)).join('\n');
    }
    function l(t, n) {
      Symbol('JSCA_6471_6474');
      if (n == null) n = ac(t);
      return e(t, n).join('\n');
    }
    function a(t) {
      Symbol('JSCA_6475_6477');
      return t.map(u).join('\n');
    }
    function u(t) {
      Symbol('JSCA_6478_6480');
      return t.map(f).join(r);
    }
    function f(t) {
      Symbol('JSCA_6481_6483');
      return t == null
        ? ''
        : t instanceof Date
        ? _c(t)
        : n.test((t += ''))
        ? '"' + t.replace(/"/g, '""') + '"'
        : t;
    }
    return {
      parse: t,
      parseRows: i,
      format: o,
      formatBody: l,
      formatRows: a,
      formatRow: u,
      formatValue: f,
    };
  }
  var sc = cc(',');
  var Sc = sc.parse;
  var hc = sc.parseRows;
  var yc = sc.format;
  var bc = sc.formatBody;
  var mc = sc.formatRows;
  var dc = sc.formatRow;
  var Ac = sc.formatValue;
  var Cc = cc('\t');
  var Jc = Cc.parse;
  var pc = Cc.parseRows;
  var gc = Cc.format;
  var vc = Cc.formatBody;
  var xc = Cc.formatRows;
  var wc = Cc.formatRow;
  var Mc = Cc.formatValue;
  function Tc(t) {
    Symbol('JSCA_6510_6520');
    for (var n in t) {
      var e = t[n].trim(),
        r,
        o;
      if (!e) e = null;
      else if (e === 'true') e = true;
      else if (e === 'false') e = false;
      else if (e === 'NaN') e = NaN;
      else if (!isNaN((r = +e))) e = r;
      else if (
        (o = e.match(
          /^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/
        ))
      ) {
        if (kc && !!o[4] && !o[7]) e = e.replace(/-/g, '/').replace(/T/, ' ');
        e = new Date(e);
      } else continue;
      t[n] = e;
    }
    return t;
  }
  const kc =
    new Date('2019-01-01T00:00').getHours() ||
    new Date('2019-07-01T00:00').getHours();
  function Ec(t) {
    Symbol('JSCA_6522_6525');
    if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
    return t.blob();
  }
  function Nc(t, n) {
    Symbol('JSCA_6526_6528');
    return fetch(t, n).then(Ec);
  }
  function Pc(t) {
    Symbol('JSCA_6529_6532');
    if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
    return t.arrayBuffer();
  }
  function zc(t, n) {
    Symbol('JSCA_6533_6535');
    return fetch(t, n).then(Pc);
  }
  function Ic(t) {
    Symbol('JSCA_6536_6539');
    if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
    return t.text();
  }
  function $c(t, n) {
    Symbol('JSCA_6540_6542');
    return fetch(t, n).then(Ic);
  }
  function Dc(r) {
    Symbol('JSCA_6543_6550');
    return function (t, n, e) {
      Symbol('JSCA_6544_6549');
      if (arguments.length === 2 && typeof n === 'function')
        (e = n), (n = undefined);
      return $c(t, n).then(function (t) {
        Symbol('JSCA_6546_6548');
        return r(t, e);
      });
    };
  }
  function Rc(t, n, e, r) {
    Symbol('JSCA_6551_6557');
    if (arguments.length === 3 && typeof e === 'function')
      (r = e), (e = undefined);
    var o = cc(t);
    return $c(n, e).then(function (t) {
      Symbol('JSCA_6554_6556');
      return o.parse(t, r);
    });
  }
  var Fc = Dc(Sc);
  var qc = Dc(Jc);
  function Uc(o, i) {
    Symbol('JSCA_6560_6570');
    return new Promise(function (t, n) {
      Symbol('JSCA_6561_6569');
      var e = new Image();
      for (var r in i) e[r] = i[r];
      e.onerror = n;
      e.onload = function () {
        Symbol('JSCA_6565_6567');
        t(e);
      };
      e.src = o;
    });
  }
  function Oc(t) {
    Symbol('JSCA_6571_6575');
    if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
    if (t.status === 204 || t.status === 205) return;
    return t.json();
  }
  function Bc(t, n) {
    Symbol('JSCA_6576_6578');
    return fetch(t, n).then(Oc);
  }
  function Yc(e) {
    Symbol('JSCA_6579_6581');
    return (t, n) =>
      $c(t, n).then((t) => new DOMParser().parseFromString(t, e));
  }
  var Lc = Yc('application/xml');
  var jc = Yc('text/html');
  var Hc = Yc('image/svg+xml');
  function Xc(i, l) {
    Symbol('JSCA_6585_6611');
    var a,
      u = 1;
    if (i == null) i = 0;
    if (l == null) l = 0;
    function n() {
      Symbol('JSCA_6589_6597');
      var t,
        n = a.length,
        e,
        r = 0,
        o = 0;
      for (t = 0; t < n; ++t) {
        (e = a[t]), (r += e.x), (o += e.y);
      }
      for (r = (r / n - i) * u, o = (o / n - l) * u, t = 0; t < n; ++t) {
        (e = a[t]), (e.x -= r), (e.y -= o);
      }
    }
    n.initialize = function (t) {
      Symbol('JSCA_6598_6600');
      a = t;
    };
    n.x = function (t) {
      Symbol('JSCA_6601_6603');
      return arguments.length ? ((i = +t), n) : i;
    };
    n.y = function (t) {
      Symbol('JSCA_6604_6606');
      return arguments.length ? ((l = +t), n) : l;
    };
    n.strength = function (t) {
      Symbol('JSCA_6607_6609');
      return arguments.length ? ((u = +t), n) : u;
    };
    return n;
  }
  function Gc(t) {
    Symbol('JSCA_6612_6615');
    const n = +this._x.call(null, t),
      e = +this._y.call(null, t);
    return Vc(this.cover(n, e), n, e, t);
  }
  function Vc(t, n, e, r) {
    Symbol('JSCA_6616_6636');
    if (isNaN(n) || isNaN(e)) return t;
    var o,
      i = t._root,
      l = { data: r },
      a = t._x0,
      u = t._y0,
      f = t._x1,
      _ = t._y1,
      c,
      s,
      S,
      h,
      y,
      b,
      m,
      d;
    if (!i) return (t._root = l), t;
    while (i.length) {
      if ((y = n >= (c = (a + f) / 2))) a = c;
      else f = c;
      if ((b = e >= (s = (u + _) / 2))) u = s;
      else _ = s;
      if (((o = i), !(i = i[(m = (b << 1) | y)]))) return (o[m] = l), t;
    }
    S = +t._x.call(null, i.data);
    h = +t._y.call(null, i.data);
    if (n === S && e === h)
      return (l.next = i), o ? (o[m] = l) : (t._root = l), t;
    do {
      o = o ? (o[m] = new Array(4)) : (t._root = new Array(4));
      if ((y = n >= (c = (a + f) / 2))) a = c;
      else f = c;
      if ((b = e >= (s = (u + _) / 2))) u = s;
      else _ = s;
    } while ((m = (b << 1) | y) === (d = ((h >= s) << 1) | (S >= c)));
    return (o[d] = i), (o[m] = l), t;
  }
  function Wc(t) {
    Symbol('JSCA_6637_6654');
    var n,
      e,
      r = t.length,
      o,
      i,
      l = new Array(r),
      a = new Array(r),
      u = Infinity,
      f = Infinity,
      _ = -Infinity,
      c = -Infinity;
    for (e = 0; e < r; ++e) {
      if (
        isNaN((o = +this._x.call(null, (n = t[e])))) ||
        isNaN((i = +this._y.call(null, n)))
      )
        continue;
      l[e] = o;
      a[e] = i;
      if (o < u) u = o;
      if (o > _) _ = o;
      if (i < f) f = i;
      if (i > c) c = i;
    }
    if (u > _ || f > c) return this;
    this.cover(u, f).cover(_, c);
    for (e = 0; e < r; ++e) {
      Vc(this, l[e], a[e], t[e]);
    }
    return this;
  }
  function Zc(t, n) {
    Symbol('JSCA_6655_6688');
    if (isNaN((t = +t)) || isNaN((n = +n))) return this;
    var e = this._x0,
      r = this._y0,
      o = this._x1,
      i = this._y1;
    if (isNaN(e)) {
      o = (e = Math.floor(t)) + 1;
      i = (r = Math.floor(n)) + 1;
    } else {
      var l = o - e || 1,
        a = this._root,
        u,
        f;
      while (e > t || t >= o || r > n || n >= i) {
        f = ((n < r) << 1) | (t < e);
        (u = new Array(4)), (u[f] = a), (a = u), (l *= 2);
        switch (f) {
          case 0:
            (o = e + l), (i = r + l);
            break;
          case 1:
            (e = o - l), (i = r + l);
            break;
          case 2:
            (o = e + l), (r = i - l);
            break;
          case 3:
            (e = o - l), (r = i - l);
            break;
        }
      }
      if (this._root && this._root.length) this._root = a;
    }
    this._x0 = e;
    this._y0 = r;
    this._x1 = o;
    this._y1 = i;
    return this;
  }
  function Kc() {
    Symbol('JSCA_6689_6695');
    var n = [];
    this.visit(function (t) {
      Symbol('JSCA_6691_6693');
      if (!t.length)
        do {
          n.push(t.data);
        } while ((t = t.next));
    });
    return n;
  }
  function Qc(t) {
    Symbol('JSCA_6696_6698');
    return arguments.length
      ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
      : isNaN(this._x0)
      ? undefined
      : [
          [this._x0, this._y0],
          [this._x1, this._y1],
        ];
  }
  function g(t, n, e, r, o) {
    Symbol('JSCA_6699_6705');
    this.node = t;
    this.x0 = n;
    this.y0 = e;
    this.x1 = r;
    this.y1 = o;
  }
  function ts(t, n, e) {
    Symbol('JSCA_6706_6735');
    var r,
      o = this._x0,
      i = this._y0,
      l,
      a,
      u,
      f,
      _ = this._x1,
      c = this._y1,
      s = [],
      S = this._root,
      h,
      y;
    if (S) s.push(new g(S, o, i, _, c));
    if (e == null) e = Infinity;
    else {
      (o = t - e), (i = n - e);
      (_ = t + e), (c = n + e);
      e *= e;
    }
    while ((h = s.pop())) {
      if (
        !(S = h.node) ||
        (l = h.x0) > _ ||
        (a = h.y0) > c ||
        (u = h.x1) < o ||
        (f = h.y1) < i
      )
        continue;
      if (S.length) {
        var b = (l + u) / 2,
          m = (a + f) / 2;
        s.push(
          new g(S[3], b, m, u, f),
          new g(S[2], l, m, b, f),
          new g(S[1], b, a, u, m),
          new g(S[0], l, a, b, m)
        );
        if ((y = ((n >= m) << 1) | (t >= b))) {
          h = s[s.length - 1];
          s[s.length - 1] = s[s.length - 1 - y];
          s[s.length - 1 - y] = h;
        }
      } else {
        var d = t - +this._x.call(null, S.data),
          A = n - +this._y.call(null, S.data),
          C = d * d + A * A;
        if (C < e) {
          var J = Math.sqrt((e = C));
          (o = t - J), (i = n - J);
          (_ = t + J), (c = n + J);
          r = S.data;
        }
      }
    }
    return r;
  }
  function ns(t) {
    Symbol('JSCA_6736_6756');
    if (
      isNaN((_ = +this._x.call(null, t))) ||
      isNaN((c = +this._y.call(null, t)))
    )
      return this;
    var n,
      e = this._root,
      r,
      o,
      i,
      l = this._x0,
      a = this._y0,
      u = this._x1,
      f = this._y1,
      _,
      c,
      s,
      S,
      h,
      y,
      b,
      m;
    if (!e) return this;
    if (e.length)
      while (true) {
        if ((h = _ >= (s = (l + u) / 2))) l = s;
        else u = s;
        if ((y = c >= (S = (a + f) / 2))) a = S;
        else f = S;
        if (!((n = e), (e = e[(b = (y << 1) | h)]))) return this;
        if (!e.length) break;
        if (n[(b + 1) & 3] || n[(b + 2) & 3] || n[(b + 3) & 3])
          (r = n), (m = b);
      }
    while (e.data !== t) if (!((o = e), (e = e.next))) return this;
    if ((i = e.next)) delete e.next;
    if (o) return i ? (o.next = i) : delete o.next, this;
    if (!n) return (this._root = i), this;
    i ? (n[b] = i) : delete n[b];
    if (
      (e = n[0] || n[1] || n[2] || n[3]) &&
      e === (n[3] || n[2] || n[1] || n[0]) &&
      !e.length
    ) {
      if (r) r[m] = e;
      else this._root = e;
    }
    return this;
  }
  function es(t) {
    Symbol('JSCA_6757_6760');
    for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
    return this;
  }
  function rs() {
    Symbol('JSCA_6761_6763');
    return this._root;
  }
  function os() {
    Symbol('JSCA_6764_6770');
    var n = 0;
    this.visit(function (t) {
      Symbol('JSCA_6766_6768');
      if (!t.length)
        do {
          ++n;
        } while ((t = t.next));
    });
    return n;
  }
  function is(t) {
    Symbol('JSCA_6771_6784');
    var n = [],
      e,
      r = this._root,
      o,
      i,
      l,
      a,
      u;
    if (r) n.push(new g(r, this._x0, this._y0, this._x1, this._y1));
    while ((e = n.pop())) {
      if (
        !t((r = e.node), (i = e.x0), (l = e.y0), (a = e.x1), (u = e.y1)) &&
        r.length
      ) {
        var f = (i + a) / 2,
          _ = (l + u) / 2;
        if ((o = r[3])) n.push(new g(o, f, _, a, u));
        if ((o = r[2])) n.push(new g(o, i, _, f, u));
        if ((o = r[1])) n.push(new g(o, f, l, a, _));
        if ((o = r[0])) n.push(new g(o, i, l, f, _));
      }
    }
    return this;
  }
  function ls(t) {
    Symbol('JSCA_6785_6803');
    var n = [],
      e = [],
      r;
    if (this._root)
      n.push(new g(this._root, this._x0, this._y0, this._x1, this._y1));
    while ((r = n.pop())) {
      var o = r.node;
      if (o.length) {
        var i,
          l = r.x0,
          a = r.y0,
          u = r.x1,
          f = r.y1,
          _ = (l + u) / 2,
          c = (a + f) / 2;
        if ((i = o[0])) n.push(new g(i, l, a, _, c));
        if ((i = o[1])) n.push(new g(i, _, a, u, c));
        if ((i = o[2])) n.push(new g(i, l, c, _, f));
        if ((i = o[3])) n.push(new g(i, _, c, u, f));
      }
      e.push(r);
    }
    while ((r = e.pop())) {
      t(r.node, r.x0, r.y0, r.x1, r.y1);
    }
    return this;
  }
  function as(t) {
    Symbol('JSCA_6804_6806');
    return t[0];
  }
  function us(t) {
    Symbol('JSCA_6807_6809');
    return arguments.length ? ((this._x = t), this) : this._x;
  }
  function fs(t) {
    Symbol('JSCA_6810_6812');
    return t[1];
  }
  function _s(t) {
    Symbol('JSCA_6813_6815');
    return arguments.length ? ((this._y = t), this) : this._y;
  }
  function cs(t, n, e) {
    Symbol('JSCA_6816_6819');
    var r = new ss(n == null ? as : n, e == null ? fs : e, NaN, NaN, NaN, NaN);
    return t == null ? r : r.addAll(t);
  }
  function ss(t, n, e, r, o, i) {
    Symbol('JSCA_6820_6828');
    this._x = t;
    this._y = n;
    this._x0 = e;
    this._y0 = r;
    this._x1 = o;
    this._y1 = i;
    this._root = undefined;
  }
  function Ss(t) {
    Symbol('JSCA_6829_6837');
    var n = { data: t.data },
      e = n;
    while ((t = t.next)) e = e.next = { data: t.data };
    return n;
  }
  var t = (cs.prototype = ss.prototype);
  t.copy = function () {
    Symbol('JSCA_6839_6858');
    var t = new ss(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      n = this._root,
      e,
      r;
    if (!n) return t;
    if (!n.length) return (t._root = Ss(n)), t;
    e = [{ source: n, target: (t._root = new Array(4)) }];
    while ((n = e.pop())) {
      for (var o = 0; o < 4; ++o) {
        if ((r = n.source[o])) {
          if (r.length)
            e.push({ source: r, target: (n.target[o] = new Array(4)) });
          else n.target[o] = Ss(r);
        }
      }
    }
    return t;
  };
  t.add = Gc;
  t.addAll = Wc;
  t.cover = Zc;
  t.data = Kc;
  t.extent = Qc;
  t.find = ts;
  t.remove = ns;
  t.removeAll = es;
  t.root = rs;
  t.size = os;
  t.visit = is;
  t.visitAfter = ls;
  t.x = us;
  t.y = _s;
  function d(t) {
    Symbol('JSCA_6873_6877');
    return function () {
      Symbol('JSCA_6874_6876');
      return t;
    };
  }
  function hs(t) {
    Symbol('JSCA_6878_6880');
    return (t() - 0.5) * 1e-6;
  }
  function ys(t) {
    Symbol('JSCA_6881_6883');
    return t.x + t.vx;
  }
  function bs(t) {
    Symbol('JSCA_6884_6886');
    return t.y + t.vy;
  }
  function ms(r) {
    Symbol('JSCA_6887_6951');
    var i,
      l,
      b,
      m = 1,
      a = 1;
    if (typeof r !== 'function') r = d(r == null ? 1 : +r);
    function n() {
      Symbol('JSCA_6890_6921');
      var t,
        n = i.length,
        e,
        c,
        s,
        S,
        h,
        y;
      for (var r = 0; r < a; ++r) {
        e = cs(i, ys, bs).visitAfter(u);
        for (t = 0; t < n; ++t) {
          c = i[t];
          (h = l[c.index]), (y = h * h);
          s = c.x + c.vx;
          S = c.y + c.vy;
          e.visit(o);
        }
      }
      function o(t, n, e, r, o) {
        Symbol('JSCA_6902_6920');
        var i = t.data,
          l = t.r,
          a = h + l;
        if (i) {
          if (i.index > c.index) {
            var u = s - i.x - i.vx,
              f = S - i.y - i.vy,
              _ = u * u + f * f;
            if (_ < a * a) {
              if (u === 0) (u = hs(b)), (_ += u * u);
              if (f === 0) (f = hs(b)), (_ += f * f);
              _ = ((a - (_ = Math.sqrt(_))) / _) * m;
              c.vx += (u *= _) * (a = (l *= l) / (y + l));
              c.vy += (f *= _) * a;
              i.vx -= u * (a = 1 - a);
              i.vy -= f * a;
            }
          }
          return;
        }
        return n > s + a || r < s - a || e > S + a || o < S - a;
      }
    }
    function u(t) {
      Symbol('JSCA_6922_6929');
      if (t.data) return (t.r = l[t.data.index]);
      for (var n = (t.r = 0); n < 4; ++n) {
        if (t[n] && t[n].r > t.r) {
          t.r = t[n].r;
        }
      }
    }
    function e() {
      Symbol('JSCA_6930_6935');
      if (!i) return;
      var t,
        n = i.length,
        e;
      l = new Array(n);
      for (t = 0; t < n; ++t) (e = i[t]), (l[e.index] = +r(e, t, i));
    }
    n.initialize = function (t, n) {
      Symbol('JSCA_6936_6940');
      i = t;
      b = n;
      e();
    };
    n.iterations = function (t) {
      Symbol('JSCA_6941_6943');
      return arguments.length ? ((a = +t), n) : a;
    };
    n.strength = function (t) {
      Symbol('JSCA_6944_6946');
      return arguments.length ? ((m = +t), n) : m;
    };
    n.radius = function (t) {
      Symbol('JSCA_6947_6949');
      return arguments.length
        ? ((r = typeof t === 'function' ? t : d(+t)), e(), n)
        : r;
    };
    return n;
  }
  function ds(t) {
    Symbol('JSCA_6952_6954');
    return t.index;
  }
  function As(t, n) {
    Symbol('JSCA_6955_6959');
    var e = t.get(n);
    if (!e) throw new Error('node not found: ' + n);
    return e;
  }
  function Cs(c) {
    Symbol('JSCA_6960_7031');
    var i = ds,
      e = t,
      s,
      r = d(30),
      S,
      l,
      a,
      h,
      y,
      b = 1;
    if (c == null) c = [];
    function t(t) {
      Symbol('JSCA_6963_6965');
      return 1 / Math.min(a[t.source.index], a[t.target.index]);
    }
    function n(t) {
      Symbol('JSCA_6966_6981');
      for (var n = 0, e = c.length; n < b; ++n) {
        for (var r = 0, o, i, l, a, u, f, _; r < e; ++r) {
          (o = c[r]), (i = o.source), (l = o.target);
          a = l.x + l.vx - i.x - i.vx || hs(y);
          u = l.y + l.vy - i.y - i.vy || hs(y);
          f = Math.sqrt(a * a + u * u);
          f = ((f - S[r]) / f) * t * s[r];
          (a *= f), (u *= f);
          l.vx -= a * (_ = h[r]);
          l.vy -= u * _;
          i.vx += a * (_ = 1 - _);
          i.vy += u * _;
        }
      }
    }
    function o() {
      Symbol('JSCA_6982_6997');
      if (!l) return;
      var t,
        n = l.length,
        e = c.length,
        r = new Map(l.map((t, n) => [i(t, n, l), t])),
        o;
      for (t = 0, a = new Array(n); t < e; ++t) {
        (o = c[t]), (o.index = t);
        if (typeof o.source !== 'object') o.source = As(r, o.source);
        if (typeof o.target !== 'object') o.target = As(r, o.target);
        a[o.source.index] = (a[o.source.index] || 0) + 1;
        a[o.target.index] = (a[o.target.index] || 0) + 1;
      }
      for (t = 0, h = new Array(e); t < e; ++t) {
        (o = c[t]),
          (h[t] = a[o.source.index] / (a[o.source.index] + a[o.target.index]));
      }
      (s = new Array(e)), u();
      (S = new Array(e)), f();
    }
    function u() {
      Symbol('JSCA_6998_7003');
      if (!l) return;
      for (var t = 0, n = c.length; t < n; ++t) {
        s[t] = +e(c[t], t, c);
      }
    }
    function f() {
      Symbol('JSCA_7004_7009');
      if (!l) return;
      for (var t = 0, n = c.length; t < n; ++t) {
        S[t] = +r(c[t], t, c);
      }
    }
    n.initialize = function (t, n) {
      Symbol('JSCA_7010_7014');
      l = t;
      y = n;
      o();
    };
    n.links = function (t) {
      Symbol('JSCA_7015_7017');
      return arguments.length ? ((c = t), o(), n) : c;
    };
    n.id = function (t) {
      Symbol('JSCA_7018_7020');
      return arguments.length ? ((i = t), n) : i;
    };
    n.iterations = function (t) {
      Symbol('JSCA_7021_7023');
      return arguments.length ? ((b = +t), n) : b;
    };
    n.strength = function (t) {
      Symbol('JSCA_7024_7026');
      return arguments.length
        ? ((e = typeof t === 'function' ? t : d(+t)), u(), n)
        : e;
    };
    n.distance = function (t) {
      Symbol('JSCA_7027_7029');
      return arguments.length
        ? ((r = typeof t === 'function' ? t : d(+t)), f(), n)
        : r;
    };
    return n;
  }
  const Js = 1664525;
  const ps = 1013904223;
  const gs = 4294967296;
  function vs() {
    Symbol('JSCA_7035_7038');
    let t = 1;
    return () => (t = (Js * t + ps) % gs) / gs;
  }
  function xs(t) {
    Symbol('JSCA_7039_7041');
    return t.x;
  }
  function ws(t) {
    Symbol('JSCA_7042_7044');
    return t.y;
  }
  var Ms = 10,
    Ts = Math.PI * (3 - Math.sqrt(5));
  function ks(_) {
    Symbol('JSCA_7046_7141');
    var i,
      l = 1,
      n = 0.001,
      a = 1 - Math.pow(n, 1 / 300),
      u = 0,
      f = 0.6,
      c = new Map(),
      t = f1(o),
      e = le('tick', 'end'),
      r = vs();
    if (_ == null) _ = [];
    function o() {
      Symbol('JSCA_7049_7056');
      s();
      e.call('tick', i);
      if (l < n) {
        t.stop();
        e.call('end', i);
      }
    }
    function s(t) {
      Symbol('JSCA_7057_7072');
      var n,
        e = _.length,
        r;
      if (t === undefined) t = 1;
      for (var o = 0; o < t; ++o) {
        l += (u - l) * a;
        c.forEach(function (t) {
          Symbol('JSCA_7062_7064');
          t(l);
        });
        for (n = 0; n < e; ++n) {
          r = _[n];
          if (r.fx == null) r.x += r.vx *= f;
          else (r.x = r.fx), (r.vx = 0);
          if (r.fy == null) r.y += r.vy *= f;
          else (r.y = r.fy), (r.vy = 0);
        }
      }
      return i;
    }
    function S() {
      Symbol('JSCA_7073_7087');
      for (var t = 0, n = _.length, e; t < n; ++t) {
        (e = _[t]), (e.index = t);
        if (e.fx != null) e.x = e.fx;
        if (e.fy != null) e.y = e.fy;
        if (isNaN(e.x) || isNaN(e.y)) {
          var r = Ms * Math.sqrt(0.5 + t),
            o = t * Ts;
          e.x = r * Math.cos(o);
          e.y = r * Math.sin(o);
        }
        if (isNaN(e.vx) || isNaN(e.vy)) {
          e.vx = e.vy = 0;
        }
      }
    }
    function h(t) {
      Symbol('JSCA_7088_7091');
      if (t.initialize) t.initialize(_, r);
      return t;
    }
    S();
    return (i = {
      tick: s,
      restart: function () {
        Symbol('JSCA_7095_7097');
        return t.restart(o), i;
      },
      stop: function () {
        Symbol('JSCA_7098_7100');
        return t.stop(), i;
      },
      nodes: function (t) {
        Symbol('JSCA_7101_7103');
        return arguments.length ? ((_ = t), S(), c.forEach(h), i) : _;
      },
      alpha: function (t) {
        Symbol('JSCA_7104_7106');
        return arguments.length ? ((l = +t), i) : l;
      },
      alphaMin: function (t) {
        Symbol('JSCA_7107_7109');
        return arguments.length ? ((n = +t), i) : n;
      },
      alphaDecay: function (t) {
        Symbol('JSCA_7110_7112');
        return arguments.length ? ((a = +t), i) : +a;
      },
      alphaTarget: function (t) {
        Symbol('JSCA_7113_7115');
        return arguments.length ? ((u = +t), i) : u;
      },
      velocityDecay: function (t) {
        Symbol('JSCA_7116_7118');
        return arguments.length ? ((f = 1 - t), i) : 1 - f;
      },
      randomSource: function (t) {
        Symbol('JSCA_7119_7121');
        return arguments.length ? ((r = t), c.forEach(h), i) : r;
      },
      force: function (t, n) {
        Symbol('JSCA_7122_7124');
        return arguments.length > 1
          ? (n == null ? c.delete(t) : c.set(t, h(n)), i)
          : c.get(t);
      },
      find: function (t, n, e) {
        Symbol('JSCA_7125_7136');
        var r = 0,
          o = _.length,
          i,
          l,
          a,
          u,
          f;
        if (e == null) e = Infinity;
        else e *= e;
        for (r = 0; r < o; ++r) {
          u = _[r];
          i = t - u.x;
          l = n - u.y;
          a = i * i + l * l;
          if (a < e) (f = u), (e = a);
        }
        return f;
      },
      on: function (t, n) {
        Symbol('JSCA_7137_7139');
        return arguments.length > 1 ? (e.on(t, n), i) : e.on(t);
      },
    });
  }
  function Es() {
    Symbol('JSCA_7142_7214');
    var o,
      u,
      f,
      _,
      r = d(-30),
      c,
      s = 1,
      S = Infinity,
      h = 0.81;
    function n(t) {
      Symbol('JSCA_7144_7147');
      var n,
        e = o.length,
        r = cs(o, xs, ws).visitAfter(i);
      for (_ = t, n = 0; n < e; ++n) (u = o[n]), r.visit(l);
    }
    function e() {
      Symbol('JSCA_7148_7153');
      if (!o) return;
      var t,
        n = o.length,
        e;
      c = new Array(n);
      for (t = 0; t < n; ++t) (e = o[t]), (c[e.index] = +r(e, t, o));
    }
    function i(t) {
      Symbol('JSCA_7154_7171');
      var n = 0,
        e,
        r,
        o = 0,
        i,
        l,
        a;
      if (t.length) {
        for (i = l = a = 0; a < 4; ++a) {
          if ((e = t[a]) && (r = Math.abs(e.value))) {
            (n += e.value), (o += r), (i += r * e.x), (l += r * e.y);
          }
        }
        t.x = i / o;
        t.y = l / o;
      } else {
        e = t;
        e.x = e.data.x;
        e.y = e.data.y;
        do {
          n += c[e.data.index];
        } while ((e = e.next));
      }
      t.value = n;
    }
    function l(t, n, e, r) {
      Symbol('JSCA_7172_7195');
      if (!t.value) return true;
      var o = t.x - u.x,
        i = t.y - u.y,
        l = r - n,
        a = o * o + i * i;
      if ((l * l) / h < a) {
        if (a < S) {
          if (o === 0) (o = hs(f)), (a += o * o);
          if (i === 0) (i = hs(f)), (a += i * i);
          if (a < s) a = Math.sqrt(s * a);
          u.vx += (o * t.value * _) / a;
          u.vy += (i * t.value * _) / a;
        }
        return true;
      } else if (t.length || a >= S) return;
      if (t.data !== u || t.next) {
        if (o === 0) (o = hs(f)), (a += o * o);
        if (i === 0) (i = hs(f)), (a += i * i);
        if (a < s) a = Math.sqrt(s * a);
      }
      do {
        if (t.data !== u) {
          l = (c[t.data.index] * _) / a;
          u.vx += o * l;
          u.vy += i * l;
        }
      } while ((t = t.next));
    }
    n.initialize = function (t, n) {
      Symbol('JSCA_7196_7200');
      o = t;
      f = n;
      e();
    };
    n.strength = function (t) {
      Symbol('JSCA_7201_7203');
      return arguments.length
        ? ((r = typeof t === 'function' ? t : d(+t)), e(), n)
        : r;
    };
    n.distanceMin = function (t) {
      Symbol('JSCA_7204_7206');
      return arguments.length ? ((s = t * t), n) : Math.sqrt(s);
    };
    n.distanceMax = function (t) {
      Symbol('JSCA_7207_7209');
      return arguments.length ? ((S = t * t), n) : Math.sqrt(S);
    };
    n.theta = function (t) {
      Symbol('JSCA_7210_7212');
      return arguments.length ? ((h = t * t), n) : Math.sqrt(h);
    };
    return n;
  }
  function Ns(e, u, f) {
    Symbol('JSCA_7215_7253');
    var _,
      r = d(0.1),
      c,
      s;
    if (typeof e !== 'function') e = d(+e);
    if (u == null) u = 0;
    if (f == null) f = 0;
    function n(t) {
      Symbol('JSCA_7220_7226');
      for (var n = 0, e = _.length; n < e; ++n) {
        var r = _[n],
          o = r.x - u || 1e-6,
          i = r.y - f || 1e-6,
          l = Math.sqrt(o * o + i * i),
          a = ((s[n] - l) * c[n] * t) / l;
        r.vx += o * a;
        r.vy += i * a;
      }
    }
    function o() {
      Symbol('JSCA_7227_7236');
      if (!_) return;
      var t,
        n = _.length;
      c = new Array(n);
      s = new Array(n);
      for (t = 0; t < n; ++t) {
        s[t] = +e(_[t], t, _);
        c[t] = isNaN(s[t]) ? 0 : +r(_[t], t, _);
      }
    }
    n.initialize = function (t) {
      Symbol('JSCA_7237_7239');
      (_ = t), o();
    };
    n.strength = function (t) {
      Symbol('JSCA_7240_7242');
      return arguments.length
        ? ((r = typeof t === 'function' ? t : d(+t)), o(), n)
        : r;
    };
    n.radius = function (t) {
      Symbol('JSCA_7243_7245');
      return arguments.length
        ? ((e = typeof t === 'function' ? t : d(+t)), o(), n)
        : e;
    };
    n.x = function (t) {
      Symbol('JSCA_7246_7248');
      return arguments.length ? ((u = +t), n) : u;
    };
    n.y = function (t) {
      Symbol('JSCA_7249_7251');
      return arguments.length ? ((f = +t), n) : f;
    };
    return n;
  }
  function Ps(e) {
    Symbol('JSCA_7254_7282');
    var r = d(0.1),
      o,
      i,
      l;
    if (typeof e !== 'function') e = d(e == null ? 0 : +e);
    function n(t) {
      Symbol('JSCA_7257_7261');
      for (var n = 0, e = o.length, r; n < e; ++n) {
        (r = o[n]), (r.vx += (l[n] - r.x) * i[n] * t);
      }
    }
    function a() {
      Symbol('JSCA_7262_7270');
      if (!o) return;
      var t,
        n = o.length;
      i = new Array(n);
      l = new Array(n);
      for (t = 0; t < n; ++t) {
        i[t] = isNaN((l[t] = +e(o[t], t, o))) ? 0 : +r(o[t], t, o);
      }
    }
    n.initialize = function (t) {
      Symbol('JSCA_7271_7274');
      o = t;
      a();
    };
    n.strength = function (t) {
      Symbol('JSCA_7275_7277');
      return arguments.length
        ? ((r = typeof t === 'function' ? t : d(+t)), a(), n)
        : r;
    };
    n.x = function (t) {
      Symbol('JSCA_7278_7280');
      return arguments.length
        ? ((e = typeof t === 'function' ? t : d(+t)), a(), n)
        : e;
    };
    return n;
  }
  function zs(e) {
    Symbol('JSCA_7283_7311');
    var r = d(0.1),
      o,
      i,
      l;
    if (typeof e !== 'function') e = d(e == null ? 0 : +e);
    function n(t) {
      Symbol('JSCA_7286_7290');
      for (var n = 0, e = o.length, r; n < e; ++n) {
        (r = o[n]), (r.vy += (l[n] - r.y) * i[n] * t);
      }
    }
    function a() {
      Symbol('JSCA_7291_7299');
      if (!o) return;
      var t,
        n = o.length;
      i = new Array(n);
      l = new Array(n);
      for (t = 0; t < n; ++t) {
        i[t] = isNaN((l[t] = +e(o[t], t, o))) ? 0 : +r(o[t], t, o);
      }
    }
    n.initialize = function (t) {
      Symbol('JSCA_7300_7303');
      o = t;
      a();
    };
    n.strength = function (t) {
      Symbol('JSCA_7304_7306');
      return arguments.length
        ? ((r = typeof t === 'function' ? t : d(+t)), a(), n)
        : r;
    };
    n.y = function (t) {
      Symbol('JSCA_7307_7309');
      return arguments.length
        ? ((e = typeof t === 'function' ? t : d(+t)), a(), n)
        : e;
    };
    return n;
  }
  function Is(t) {
    Symbol('JSCA_7312_7314');
    return Math.abs((t = Math.round(t))) >= 1e21
      ? t.toLocaleString('en').replace(/,/g, '')
      : t.toString(10);
  }
  function $s(t, n) {
    Symbol('JSCA_7315_7319');
    if (
      (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf('e')) <
      0
    )
      return null;
    var e,
      r = t.slice(0, e);
    return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
  }
  function Ds(t) {
    Symbol('JSCA_7320_7322');
    return (t = $s(Math.abs(t))), t ? t[1] : NaN;
  }
  function Rs(a, u) {
    Symbol('JSCA_7323_7334');
    return function (t, n) {
      Symbol('JSCA_7324_7333');
      var e = t.length,
        r = [],
        o = 0,
        i = a[0],
        l = 0;
      while (e > 0 && i > 0) {
        if (l + i + 1 > n) i = Math.max(1, n - l);
        r.push(t.substring((e -= i), e + i));
        if ((l += i + 1) > n) break;
        i = a[(o = (o + 1) % a.length)];
      }
      return r.reverse().join(u);
    };
  }
  function Fs(n) {
    Symbol('JSCA_7335_7341');
    return function (t) {
      Symbol('JSCA_7336_7340');
      return t.replace(/[0-9]/g, function (t) {
        Symbol('JSCA_7337_7339');
        return n[+t];
      });
    };
  }
  var qs =
    /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function Us(t) {
    Symbol('JSCA_7343_7358');
    if (!(n = qs.exec(t))) throw new Error('invalid format: ' + t);
    var n;
    return new Os({
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
  Us.prototype = Os.prototype;
  function Os(t) {
    Symbol('JSCA_7360_7371');
    this.fill = t.fill === undefined ? ' ' : t.fill + '';
    this.align = t.align === undefined ? '>' : t.align + '';
    this.sign = t.sign === undefined ? '-' : t.sign + '';
    this.symbol = t.symbol === undefined ? '' : t.symbol + '';
    this.zero = !!t.zero;
    this.width = t.width === undefined ? undefined : +t.width;
    this.comma = !!t.comma;
    this.precision = t.precision === undefined ? undefined : +t.precision;
    this.trim = !!t.trim;
    this.type = t.type === undefined ? '' : t.type + '';
  }
  Os.prototype.toString = function () {
    Symbol('JSCA_7372_7374');
    return (
      this.fill +
      this.align +
      this.sign +
      this.symbol +
      (this.zero ? '0' : '') +
      (this.width === undefined ? '' : Math.max(1, this.width | 0)) +
      (this.comma ? ',' : '') +
      (this.precision === undefined
        ? ''
        : '.' + Math.max(0, this.precision | 0)) +
      (this.trim ? '~' : '') +
      this.type
    );
  };
  function Bs(t) {
    Symbol('JSCA_7375_7392');
    t: for (var n = t.length, e = 1, r = -1, o; e < n; ++e) {
      switch (t[e]) {
        case '.':
          r = o = e;
          break;
        case '0':
          if (r === 0) r = e;
          o = e;
          break;
        default:
          if (!+t[e]) break t;
          if (r > 0) r = 0;
          break;
      }
    }
    return r > 0 ? t.slice(0, r) + t.slice(o + 1) : t;
  }
  var Ys;
  function Ls(t, n) {
    Symbol('JSCA_7394_7399');
    var e = $s(t, n);
    if (!e) return t + '';
    var r = e[0],
      o = e[1],
      i = o - (Ys = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1,
      l = r.length;
    return i === l
      ? r
      : i > l
      ? r + new Array(i - l + 1).join('0')
      : i > 0
      ? r.slice(0, i) + '.' + r.slice(i)
      : '0.' + new Array(1 - i).join('0') + $s(t, Math.max(0, n + i - 1))[0];
  }
  function js(t, n) {
    Symbol('JSCA_7400_7405');
    var e = $s(t, n);
    if (!e) return t + '';
    var r = e[0],
      o = e[1];
    return o < 0
      ? '0.' + new Array(-o).join('0') + r
      : r.length > o + 1
      ? r.slice(0, o + 1) + '.' + r.slice(o + 1)
      : r + new Array(o - r.length + 2).join('0');
  }
  var Hs = {
    '%': (t, n) => (t * 100).toFixed(n),
    b: (t) => Math.round(t).toString(2),
    c: (t) => t + '',
    d: Is,
    e: (t, n) => t.toExponential(n),
    f: (t, n) => t.toFixed(n),
    g: (t, n) => t.toPrecision(n),
    o: (t) => Math.round(t).toString(8),
    p: (t, n) => js(t * 100, n),
    r: js,
    s: Ls,
    X: (t) => Math.round(t).toString(16).toUpperCase(),
    x: (t) => Math.round(t).toString(16),
  };
  function Xs(t) {
    Symbol('JSCA_7421_7423');
    return t;
  }
  var Gs = Array.prototype.map,
    Vs = [
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
  function Ws(t) {
    Symbol('JSCA_7425_7493');
    var p =
        t.grouping === undefined || t.thousands === undefined
          ? Xs
          : Rs(Gs.call(t.grouping, Number), t.thousands + ''),
      r = t.currency === undefined ? '' : t.currency[0] + '',
      o = t.currency === undefined ? '' : t.currency[1] + '',
      g = t.decimal === undefined ? '.' : t.decimal + '',
      v = t.numerals === undefined ? Xs : Fs(Gs.call(t.numerals, String)),
      i = t.percent === undefined ? '%' : t.percent + '',
      x = t.minus === undefined ? '−' : t.minus + '',
      w = t.nan === undefined ? 'NaN' : t.nan + '';
    function l(t) {
      Symbol('JSCA_7427_7482');
      t = Us(t);
      var f = t.fill,
        _ = t.align,
        c = t.sign,
        n = t.symbol,
        s = t.zero,
        S = t.width,
        h = t.comma,
        y = t.precision,
        b = t.trim,
        m = t.type;
      if (m === 'n') (h = true), (m = 'g');
      else if (!Hs[m]) y === undefined && (y = 12), (b = true), (m = 'g');
      if (s || (f === '0' && _ === '=')) (s = true), (f = '0'), (_ = '=');
      var d =
          n === '$'
            ? r
            : n === '#' && /[boxX]/.test(m)
            ? '0' + m.toLowerCase()
            : '',
        A = n === '$' ? o : /[%p]/.test(m) ? i : '';
      var C = Hs[m],
        J = /[defgprs%]/.test(m);
      y =
        y === undefined
          ? 6
          : /[gprs]/.test(m)
          ? Math.max(1, Math.min(21, y))
          : Math.max(0, Math.min(20, y));
      function e(t) {
        Symbol('JSCA_7435_7477');
        var n = d,
          e = A,
          r,
          o,
          i;
        if (m === 'c') {
          e = C(t) + e;
          t = '';
        } else {
          t = +t;
          var l = t < 0 || 1 / t < 0;
          t = isNaN(t) ? w : C(Math.abs(t), y);
          if (b) t = Bs(t);
          if (l && +t === 0 && c !== '+') l = false;
          n = (l ? (c === '(' ? c : x) : c === '-' || c === '(' ? '' : c) + n;
          e =
            (m === 's' ? Vs[8 + Ys / 3] : '') + e + (l && c === '(' ? ')' : '');
          if (J) {
            (r = -1), (o = t.length);
            while (++r < o) {
              if (((i = t.charCodeAt(r)), 48 > i || i > 57)) {
                e = (i === 46 ? g + t.slice(r + 1) : t.slice(r)) + e;
                t = t.slice(0, r);
                break;
              }
            }
          }
        }
        if (h && !s) t = p(t, Infinity);
        var a = n.length + t.length + e.length,
          u = a < S ? new Array(S - a + 1).join(f) : '';
        if (h && s)
          (t = p(u + t, u.length ? S - e.length : Infinity)), (u = '');
        switch (_) {
          case '<':
            t = n + t + e + u;
            break;
          case '=':
            t = n + u + t + e;
            break;
          case '^':
            t = u.slice(0, (a = u.length >> 1)) + n + t + e + u.slice(a);
            break;
          default:
            t = u + n + t + e;
            break;
        }
        return v(t);
      }
      e.toString = function () {
        Symbol('JSCA_7478_7480');
        return t + '';
      };
      return e;
    }
    function n(t, n) {
      Symbol('JSCA_7483_7488');
      var e = l(((t = Us(t)), (t.type = 'f'), t)),
        r = Math.max(-8, Math.min(8, Math.floor(Ds(n) / 3))) * 3,
        o = Math.pow(10, -r),
        i = Vs[8 + r / 3];
      return function (t) {
        Symbol('JSCA_7485_7487');
        return e(o * t) + i;
      };
    }
    return { format: l, formatPrefix: n };
  }
  var Zs;
  a.format = void 0;
  a.formatPrefix = void 0;
  Ks({ thousands: ',', grouping: [3], currency: ['$', ''] });
  function Ks(t) {
    Symbol('JSCA_7502_7507');
    Zs = Ws(t);
    a.format = Zs.format;
    a.formatPrefix = Zs.formatPrefix;
    return Zs;
  }
  function Qs(t) {
    Symbol('JSCA_7508_7510');
    return Math.max(0, -Ds(Math.abs(t)));
  }
  function t0(t, n) {
    Symbol('JSCA_7511_7513');
    return Math.max(
      0,
      Math.max(-8, Math.min(8, Math.floor(Ds(n) / 3))) * 3 - Ds(Math.abs(t))
    );
  }
  function n0(t, n) {
    Symbol('JSCA_7514_7517');
    (t = Math.abs(t)), (n = Math.abs(n) - t);
    return Math.max(0, Ds(n) - Ds(t)) + 1;
  }
  var z = 1e-6;
  var e0 = 1e-12;
  var D = Math.PI;
  var R = D / 2;
  var r0 = D / 4;
  var o0 = D * 2;
  var N = 180 / D;
  var F = D / 180;
  var q = Math.abs;
  var i0 = Math.atan;
  var l0 = Math.atan2;
  var U = Math.cos;
  var a0 = Math.ceil;
  var u0 = Math.exp;
  var f0 = Math.hypot;
  var _0 = Math.log;
  var c0 = Math.pow;
  var O = Math.sin;
  var s0 =
    Math.sign ||
    function (t) {
      Symbol('JSCA_7536_7538');
      return t > 0 ? 1 : t < 0 ? -1 : 0;
    };
  var B = Math.sqrt;
  var S0 = Math.tan;
  function h0(t) {
    Symbol('JSCA_7541_7543');
    return t > 1 ? 0 : t < -1 ? D : Math.acos(t);
  }
  function y0(t) {
    Symbol('JSCA_7544_7546');
    return t > 1 ? R : t < -1 ? -R : Math.asin(t);
  }
  function b0(t) {
    Symbol('JSCA_7547_7549');
    return (t = O(t / 2)) * t;
  }
  function e() {
    Symbol('JSCA_7550_7550');
  }
  function m0(t, n) {
    Symbol('JSCA_7551_7555');
    if (t && A0.hasOwnProperty(t.type)) {
      A0[t.type](t, n);
    }
  }
  var d0 = {
    Feature: function (t, n) {
      Symbol('JSCA_7557_7559');
      m0(t.geometry, n);
    },
    FeatureCollection: function (t, n) {
      Symbol('JSCA_7560_7563');
      var e = t.features,
        r = -1,
        o = e.length;
      while (++r < o) m0(e[r].geometry, n);
    },
  };
  var A0 = {
    Sphere: function (t, n) {
      Symbol('JSCA_7566_7568');
      n.sphere();
    },
    Point: function (t, n) {
      Symbol('JSCA_7569_7572');
      t = t.coordinates;
      n.point(t[0], t[1], t[2]);
    },
    MultiPoint: function (t, n) {
      Symbol('JSCA_7573_7576');
      var e = t.coordinates,
        r = -1,
        o = e.length;
      while (++r < o) (t = e[r]), n.point(t[0], t[1], t[2]);
    },
    LineString: function (t, n) {
      Symbol('JSCA_7577_7579');
      C0(t.coordinates, n, 0);
    },
    MultiLineString: function (t, n) {
      Symbol('JSCA_7580_7583');
      var e = t.coordinates,
        r = -1,
        o = e.length;
      while (++r < o) C0(e[r], n, 0);
    },
    Polygon: function (t, n) {
      Symbol('JSCA_7584_7586');
      J0(t.coordinates, n);
    },
    MultiPolygon: function (t, n) {
      Symbol('JSCA_7587_7590');
      var e = t.coordinates,
        r = -1,
        o = e.length;
      while (++r < o) J0(e[r], n);
    },
    GeometryCollection: function (t, n) {
      Symbol('JSCA_7591_7594');
      var e = t.geometries,
        r = -1,
        o = e.length;
      while (++r < o) m0(e[r], n);
    },
  };
  function C0(t, n, e) {
    Symbol('JSCA_7596_7601');
    var r = -1,
      o = t.length - e,
      i;
    n.lineStart();
    while (++r < o) (i = t[r]), n.point(i[0], i[1], i[2]);
    n.lineEnd();
  }
  function J0(t, n) {
    Symbol('JSCA_7602_7607');
    var e = -1,
      r = t.length;
    n.polygonStart();
    while (++e < r) C0(t[e], n, 1);
    n.polygonEnd();
  }
  function p0(t, n) {
    Symbol('JSCA_7608_7614');
    if (t && d0.hasOwnProperty(t.type)) {
      d0[t.type](t, n);
    } else {
      m0(t, n);
    }
  }
  var g0 = new P();
  var v0 = new P(),
    x0,
    w0,
    M0,
    T0,
    k0;
  var E0 = {
    point: e,
    lineStart: e,
    lineEnd: e,
    polygonStart: function () {
      Symbol('JSCA_7621_7625');
      g0 = new P();
      E0.lineStart = N0;
      E0.lineEnd = P0;
    },
    polygonEnd: function () {
      Symbol('JSCA_7626_7630');
      var t = +g0;
      v0.add(t < 0 ? o0 + t : t);
      this.lineStart = this.lineEnd = this.point = e;
    },
    sphere: function () {
      Symbol('JSCA_7631_7633');
      v0.add(o0);
    },
  };
  function N0() {
    Symbol('JSCA_7635_7637');
    E0.point = z0;
  }
  function P0() {
    Symbol('JSCA_7638_7640');
    I0(x0, w0);
  }
  function z0(t, n) {
    Symbol('JSCA_7641_7646');
    E0.point = I0;
    (x0 = t), (w0 = n);
    (t *= F), (n *= F);
    (M0 = t), (T0 = U((n = n / 2 + r0))), (k0 = O(n));
  }
  function I0(t, n) {
    Symbol('JSCA_7647_7653');
    (t *= F), (n *= F);
    n = n / 2 + r0;
    var e = t - M0,
      r = e >= 0 ? 1 : -1,
      o = r * e,
      i = U(n),
      l = O(n),
      a = k0 * l,
      u = T0 * i + a * U(o),
      f = a * r * O(o);
    g0.add(l0(f, u));
    (M0 = t), (T0 = i), (k0 = l);
  }
  function $0(t) {
    Symbol('JSCA_7654_7658');
    v0 = new P();
    p0(t, E0);
    return v0 * 2;
  }
  function D0(t) {
    Symbol('JSCA_7659_7661');
    return [l0(t[1], t[0]), y0(t[2])];
  }
  function R0(t) {
    Symbol('JSCA_7662_7665');
    var n = t[0],
      e = t[1],
      r = U(e);
    return [r * U(n), r * O(n), O(e)];
  }
  function F0(t, n) {
    Symbol('JSCA_7666_7668');
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
  }
  function q0(t, n) {
    Symbol('JSCA_7669_7671');
    return [
      t[1] * n[2] - t[2] * n[1],
      t[2] * n[0] - t[0] * n[2],
      t[0] * n[1] - t[1] * n[0],
    ];
  }
  function U0(t, n) {
    Symbol('JSCA_7672_7674');
    (t[0] += n[0]), (t[1] += n[1]), (t[2] += n[2]);
  }
  function O0(t, n) {
    Symbol('JSCA_7675_7677');
    return [t[0] * n, t[1] * n, t[2] * n];
  }
  function B0(t) {
    Symbol('JSCA_7678_7681');
    var n = B(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
    (t[0] /= n), (t[1] /= n), (t[2] /= n);
  }
  var c, Y0, s, L0, j0, H0, X0, G0, V0, W0, Z0;
  var K0 = {
    point: Q0,
    lineStart: nS,
    lineEnd: eS,
    polygonStart: function () {
      Symbol('JSCA_7687_7693');
      K0.point = rS;
      K0.lineStart = oS;
      K0.lineEnd = iS;
      V0 = new P();
      E0.polygonStart();
    },
    polygonEnd: function () {
      Symbol('JSCA_7694_7701');
      E0.polygonEnd();
      K0.point = Q0;
      K0.lineStart = nS;
      K0.lineEnd = eS;
      if (g0 < 0) (c = -(s = 180)), (Y0 = -(L0 = 90));
      else if (V0 > z) L0 = 90;
      else if (V0 < -z) Y0 = -90;
      (Z0[0] = c), (Z0[1] = s);
    },
    sphere: function () {
      Symbol('JSCA_7702_7704');
      (c = -(s = 180)), (Y0 = -(L0 = 90));
    },
  };
  function Q0(t, n) {
    Symbol('JSCA_7706_7710');
    W0.push((Z0 = [(c = t), (s = t)]));
    if (n < Y0) Y0 = n;
    if (n > L0) L0 = n;
  }
  function tS(t, n) {
    Symbol('JSCA_7711_7752');
    var e = R0([t * F, n * F]);
    if (G0) {
      var r = q0(G0, e),
        o = [r[1], -r[0], 0],
        i = q0(o, r);
      B0(i);
      i = D0(i);
      var l = t - j0,
        a = l > 0 ? 1 : -1,
        u = i[0] * N * a,
        f,
        _ = q(l) > 180;
      if (_ ^ (a * j0 < u && u < a * t)) {
        f = i[1] * N;
        if (f > L0) L0 = f;
      } else if (
        ((u = ((u + 360) % 360) - 180), _ ^ (a * j0 < u && u < a * t))
      ) {
        f = -i[1] * N;
        if (f < Y0) Y0 = f;
      } else {
        if (n < Y0) Y0 = n;
        if (n > L0) L0 = n;
      }
      if (_) {
        if (t < j0) {
          if (lS(c, t) > lS(c, s)) s = t;
        } else {
          if (lS(t, s) > lS(c, s)) c = t;
        }
      } else {
        if (s >= c) {
          if (t < c) c = t;
          if (t > s) s = t;
        } else {
          if (t > j0) {
            if (lS(c, t) > lS(c, s)) s = t;
          } else {
            if (lS(t, s) > lS(c, s)) c = t;
          }
        }
      }
    } else {
      W0.push((Z0 = [(c = t), (s = t)]));
    }
    if (n < Y0) Y0 = n;
    if (n > L0) L0 = n;
    (G0 = e), (j0 = t);
  }
  function nS() {
    Symbol('JSCA_7753_7755');
    K0.point = tS;
  }
  function eS() {
    Symbol('JSCA_7756_7760');
    (Z0[0] = c), (Z0[1] = s);
    K0.point = Q0;
    G0 = null;
  }
  function rS(t, n) {
    Symbol('JSCA_7761_7770');
    if (G0) {
      var e = t - j0;
      V0.add(q(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
    } else {
      (H0 = t), (X0 = n);
    }
    E0.point(t, n);
    tS(t, n);
  }
  function oS() {
    Symbol('JSCA_7771_7773');
    E0.lineStart();
  }
  function iS() {
    Symbol('JSCA_7774_7780');
    rS(H0, X0);
    E0.lineEnd();
    if (q(V0) > z) c = -(s = 180);
    (Z0[0] = c), (Z0[1] = s);
    G0 = null;
  }
  function lS(t, n) {
    Symbol('JSCA_7781_7783');
    return (n -= t) < 0 ? n + 360 : n;
  }
  function aS(t, n) {
    Symbol('JSCA_7784_7786');
    return t[0] - n[0];
  }
  function uS(t, n) {
    Symbol('JSCA_7787_7789');
    return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
  }
  function fS(t) {
    Symbol('JSCA_7790_7813');
    var n, e, r, o, i, l, a;
    L0 = s = -(c = Y0 = Infinity);
    W0 = [];
    p0(t, K0);
    if ((e = W0.length)) {
      W0.sort(aS);
      for (n = 1, r = W0[0], i = [r]; n < e; ++n) {
        o = W0[n];
        if (uS(r, o[0]) || uS(r, o[1])) {
          if (lS(r[0], o[1]) > lS(r[0], r[1])) r[1] = o[1];
          if (lS(o[0], r[1]) > lS(r[0], r[1])) r[0] = o[0];
        } else {
          i.push((r = o));
        }
      }
      for (
        l = -Infinity, e = i.length - 1, n = 0, r = i[e];
        n <= e;
        r = o, ++n
      ) {
        o = i[n];
        if ((a = lS(r[1], o[0])) > l) (l = a), (c = o[0]), (s = r[1]);
      }
    }
    W0 = Z0 = null;
    return c === Infinity || Y0 === Infinity
      ? [
          [NaN, NaN],
          [NaN, NaN],
        ]
      : [
          [c, Y0],
          [s, L0],
        ];
  }
  var _S, cS, sS, SS, hS, yS, bS, mS, dS, AS, CS, JS, pS, gS, vS, xS;
  var wS = {
    sphere: e,
    point: MS,
    lineStart: kS,
    lineEnd: PS,
    polygonStart: function () {
      Symbol('JSCA_7820_7823');
      wS.lineStart = zS;
      wS.lineEnd = IS;
    },
    polygonEnd: function () {
      Symbol('JSCA_7824_7827');
      wS.lineStart = kS;
      wS.lineEnd = PS;
    },
  };
  function MS(t, n) {
    Symbol('JSCA_7829_7833');
    (t *= F), (n *= F);
    var e = U(n);
    TS(e * U(t), e * O(t), O(n));
  }
  function TS(t, n, e) {
    Symbol('JSCA_7834_7839');
    ++_S;
    sS += (t - sS) / _S;
    SS += (n - SS) / _S;
    hS += (e - hS) / _S;
  }
  function kS() {
    Symbol('JSCA_7840_7842');
    wS.point = ES;
  }
  function ES(t, n) {
    Symbol('JSCA_7843_7851');
    (t *= F), (n *= F);
    var e = U(n);
    gS = e * U(t);
    vS = e * O(t);
    xS = O(n);
    wS.point = NS;
    TS(gS, vS, xS);
  }
  function NS(t, n) {
    Symbol('JSCA_7852_7860');
    (t *= F), (n *= F);
    var e = U(n),
      r = e * U(t),
      o = e * O(t),
      i = O(n),
      l = l0(
        B(
          (l = vS * i - xS * o) * l +
            (l = xS * r - gS * i) * l +
            (l = gS * o - vS * r) * l
        ),
        gS * r + vS * o + xS * i
      );
    cS += l;
    yS += l * (gS + (gS = r));
    bS += l * (vS + (vS = o));
    mS += l * (xS + (xS = i));
    TS(gS, vS, xS);
  }
  function PS() {
    Symbol('JSCA_7861_7863');
    wS.point = MS;
  }
  function zS() {
    Symbol('JSCA_7864_7866');
    wS.point = $S;
  }
  function IS() {
    Symbol('JSCA_7867_7870');
    DS(JS, pS);
    wS.point = MS;
  }
  function $S(t, n) {
    Symbol('JSCA_7871_7880');
    (JS = t), (pS = n);
    (t *= F), (n *= F);
    wS.point = DS;
    var e = U(n);
    gS = e * U(t);
    vS = e * O(t);
    xS = O(n);
    TS(gS, vS, xS);
  }
  function DS(t, n) {
    Symbol('JSCA_7881_7892');
    (t *= F), (n *= F);
    var e = U(n),
      r = e * U(t),
      o = e * O(t),
      i = O(n),
      l = vS * i - xS * o,
      a = xS * r - gS * i,
      u = gS * o - vS * r,
      f = f0(l, a, u),
      _ = y0(f),
      c = f && -_ / f;
    dS.add(c * l);
    AS.add(c * a);
    CS.add(c * u);
    cS += _;
    yS += _ * (gS + (gS = r));
    bS += _ * (vS + (vS = o));
    mS += _ * (xS + (xS = i));
    TS(gS, vS, xS);
  }
  function RS(t) {
    Symbol('JSCA_7893_7907');
    _S = cS = sS = SS = hS = yS = bS = mS = 0;
    dS = new P();
    AS = new P();
    CS = new P();
    p0(t, wS);
    var n = +dS,
      e = +AS,
      r = +CS,
      o = f0(n, e, r);
    if (o < e0) {
      (n = yS), (e = bS), (r = mS);
      if (cS < z) (n = sS), (e = SS), (r = hS);
      o = f0(n, e, r);
      if (o < e0) return [NaN, NaN];
    }
    return [l0(e, n) * N, y0(r / o) * N];
  }
  function FS(t) {
    Symbol('JSCA_7908_7912');
    return function () {
      Symbol('JSCA_7909_7911');
      return t;
    };
  }
  function qS(e, r) {
    Symbol('JSCA_7913_7921');
    function t(t, n) {
      Symbol('JSCA_7914_7916');
      return (t = e(t, n)), r(t[0], t[1]);
    }
    if (e.invert && r.invert)
      t.invert = function (t, n) {
        Symbol('JSCA_7917_7919');
        return (t = r.invert(t, n)), t && e.invert(t[0], t[1]);
      };
    return t;
  }
  function US(t, n) {
    Symbol('JSCA_7922_7925');
    if (q(t) > D) t -= Math.round(t / o0) * o0;
    return [t, n];
  }
  US.invert = US;
  function OS(t, n, e) {
    Symbol('JSCA_7927_7929');
    return (t %= o0)
      ? n || e
        ? qS(YS(t), LS(n, e))
        : YS(t)
      : n || e
      ? LS(n, e)
      : US;
  }
  function BS(e) {
    Symbol('JSCA_7930_7936');
    return function (t, n) {
      Symbol('JSCA_7931_7935');
      t += e;
      if (q(t) > D) t -= Math.round(t / o0) * o0;
      return [t, n];
    };
  }
  function YS(t) {
    Symbol('JSCA_7937_7941');
    var n = BS(t);
    n.invert = BS(-t);
    return n;
  }
  function LS(t, n) {
    Symbol('JSCA_7942_7953');
    var a = U(t),
      u = O(t),
      f = U(n),
      _ = O(n);
    function e(t, n) {
      Symbol('JSCA_7944_7947');
      var e = U(n),
        r = U(t) * e,
        o = O(t) * e,
        i = O(n),
        l = i * a + r * u;
      return [l0(o * f - l * _, r * a - i * u), y0(l * f + o * _)];
    }
    e.invert = function (t, n) {
      Symbol('JSCA_7948_7951');
      var e = U(n),
        r = U(t) * e,
        o = O(t) * e,
        i = O(n),
        l = i * f - o * _;
      return [l0(o * f + i * _, r * a + l * u), y0(l * a - r * u)];
    };
    return e;
  }
  function jS(n) {
    Symbol('JSCA_7954_7965');
    n = OS(n[0] * F, n[1] * F, n.length > 2 ? n[2] * F : 0);
    function t(t) {
      Symbol('JSCA_7956_7959');
      t = n(t[0] * F, t[1] * F);
      return (t[0] *= N), (t[1] *= N), t;
    }
    t.invert = function (t) {
      Symbol('JSCA_7960_7963');
      t = n.invert(t[0] * F, t[1] * F);
      return (t[0] *= N), (t[1] *= N), t;
    };
    return t;
  }
  function HS(t, n, e, r, o, i) {
    Symbol('JSCA_7966_7981');
    if (!e) return;
    var l = U(n),
      a = O(n),
      u = r * e;
    if (o == null) {
      o = n + r * o0;
      i = n - u / 2;
    } else {
      o = XS(l, o);
      i = XS(l, i);
      if (r > 0 ? o < i : o > i) o += r * o0;
    }
    for (var f, _ = o; r > 0 ? _ > i : _ < i; _ -= u) {
      f = D0([l, -a * U(_), -a * O(_)]);
      t.point(f[0], f[1]);
    }
  }
  function XS(t, n) {
    Symbol('JSCA_7982_7987');
    (n = R0(n)), (n[0] -= t);
    B0(n);
    var e = h0(-n[1]);
    return ((-n[2] < 0 ? -e : e) + o0 - z) % o0;
  }
  function GS() {
    Symbol('JSCA_7988_8018');
    var r = FS([0, 0]),
      o = FS(90),
      i = FS(2),
      l,
      a,
      u = { point: t };
    function t(t, n) {
      Symbol('JSCA_7992_7995');
      l.push((t = a(t, n)));
      (t[0] *= N), (t[1] *= N);
    }
    function n() {
      Symbol('JSCA_7996_8007');
      var t = r.apply(this, arguments),
        n = o.apply(this, arguments) * F,
        e = i.apply(this, arguments) * F;
      l = [];
      a = OS(-t[0] * F, -t[1] * F, 0).invert;
      HS(u, n, e, 1);
      t = { type: 'Polygon', coordinates: [l] };
      l = a = null;
      return t;
    }
    n.center = function (t) {
      Symbol('JSCA_8008_8010');
      return arguments.length
        ? ((r = typeof t === 'function' ? t : FS([+t[0], +t[1]])), n)
        : r;
    };
    n.radius = function (t) {
      Symbol('JSCA_8011_8013');
      return arguments.length
        ? ((o = typeof t === 'function' ? t : FS(+t)), n)
        : o;
    };
    n.precision = function (t) {
      Symbol('JSCA_8014_8016');
      return arguments.length
        ? ((i = typeof t === 'function' ? t : FS(+t)), n)
        : i;
    };
    return n;
  }
  function VS() {
    Symbol('JSCA_8019_8039');
    var n = [],
      r;
    return {
      point: function (t, n, e) {
        Symbol('JSCA_8022_8024');
        r.push([t, n, e]);
      },
      lineStart: function () {
        Symbol('JSCA_8025_8027');
        n.push((r = []));
      },
      lineEnd: e,
      rejoin: function () {
        Symbol('JSCA_8029_8031');
        if (n.length > 1) n.push(n.pop().concat(n.shift()));
      },
      result: function () {
        Symbol('JSCA_8032_8037');
        var t = n;
        n = [];
        r = null;
        return t;
      },
    };
  }
  function WS(t, n) {
    Symbol('JSCA_8040_8042');
    return q(t[0] - n[0]) < z && q(t[1] - n[1]) < z;
  }
  function ZS(t, n, e, r) {
    Symbol('JSCA_8043_8050');
    this.x = t;
    this.z = n;
    this.o = e;
    this.e = r;
    this.v = false;
    this.n = this.p = null;
  }
  function KS(t, n, e, r, i) {
    Symbol('JSCA_8051_8107');
    var l = [],
      a = [],
      u,
      o;
    t.forEach(function (t) {
      Symbol('JSCA_8053_8069');
      if ((n = t.length - 1) <= 0) return;
      var n,
        e = t[0],
        r = t[n],
        o;
      if (WS(e, r)) {
        if (!e[2] && !r[2]) {
          i.lineStart();
          for (u = 0; u < n; ++u) i.point((e = t[u])[0], e[1]);
          i.lineEnd();
          return;
        }
        r[0] += 2 * z;
      }
      l.push((o = new ZS(e, t, null, true)));
      a.push((o.o = new ZS(e, null, o, false)));
      l.push((o = new ZS(r, t, null, false)));
      a.push((o.o = new ZS(r, null, o, true)));
    });
    if (!l.length) return;
    a.sort(n);
    QS(l);
    QS(a);
    for (u = 0, o = a.length; u < o; ++u) {
      a[u].e = e = !e;
    }
    var f = l[0],
      _,
      c;
    while (1) {
      var s = f,
        S = true;
      while (s.v) if ((s = s.n) === f) return;
      _ = s.z;
      i.lineStart();
      do {
        s.v = s.o.v = true;
        if (s.e) {
          if (S) {
            for (u = 0, o = _.length; u < o; ++u) i.point((c = _[u])[0], c[1]);
          } else {
            r(s.x, s.n.x, 1, i);
          }
          s = s.n;
        } else {
          if (S) {
            _ = s.p.z;
            for (u = _.length - 1; u >= 0; --u) i.point((c = _[u])[0], c[1]);
          } else {
            r(s.x, s.p.x, -1, i);
          }
          s = s.p;
        }
        s = s.o;
        _ = s.z;
        S = !S;
      } while (!s.v);
      i.lineEnd();
    }
  }
  function QS(t) {
    Symbol('JSCA_8108_8118');
    if (!(n = t.length)) return;
    var n,
      e = 0,
      r = t[0],
      o;
    while (++e < n) {
      r.n = o = t[e];
      o.p = r;
      r = o;
    }
    r.n = o = t[0];
    o.p = r;
  }
  function th(t) {
    Symbol('JSCA_8119_8121');
    return q(t[0]) <= D ? t[0] : s0(t[0]) * (((q(t[0]) + D) % o0) - D);
  }
  function nh(t, n) {
    Symbol('JSCA_8122_8146');
    var e = th(n),
      r = n[1],
      o = O(r),
      i = [O(e), -U(e), 0],
      l = 0,
      a = 0;
    var u = new P();
    if (o === 1) r = R + z;
    else if (o === -1) r = -R - z;
    for (var f = 0, _ = t.length; f < _; ++f) {
      if (!(s = (c = t[f]).length)) continue;
      var c,
        s,
        S = c[s - 1],
        h = th(S),
        y = S[1] / 2 + r0,
        b = O(y),
        m = U(y);
      for (var d = 0; d < s; ++d, h = C, b = p, m = g, S = A) {
        var A = c[d],
          C = th(A),
          J = A[1] / 2 + r0,
          p = O(J),
          g = U(J),
          v = C - h,
          x = v >= 0 ? 1 : -1,
          w = x * v,
          M = w > D,
          T = b * p;
        u.add(l0(T * x * O(w), m * g + T * U(w)));
        l += M ? v + x * o0 : v;
        if (M ^ (h >= e) ^ (C >= e)) {
          var k = q0(R0(S), R0(A));
          B0(k);
          var E = q0(i, k);
          B0(E);
          var N = (M ^ (v >= 0) ? -1 : 1) * y0(E[2]);
          if (r > N || (r === N && (k[0] || k[1]))) {
            a += M ^ (v >= 0) ? 1 : -1;
          }
        }
      }
    }
    return (l < -z || (l < z && u < -e0)) ^ (a & 1);
  }
  function eh(b, m, d, A) {
    Symbol('JSCA_8147_8232');
    return function (a) {
      Symbol('JSCA_8148_8231');
      var e = m(a),
        u = VS(),
        f = m(u),
        _ = false,
        c,
        s,
        S;
      var n = {
        point: r,
        lineStart: o,
        lineEnd: i,
        polygonStart: function () {
          Symbol('JSCA_8154_8160');
          n.point = h;
          n.lineStart = l;
          n.lineEnd = y;
          s = [];
          c = [];
        },
        polygonEnd: function () {
          Symbol('JSCA_8161_8178');
          n.point = r;
          n.lineStart = o;
          n.lineEnd = i;
          s = Sn(s);
          var t = nh(c, A);
          if (s.length) {
            if (!_) a.polygonStart(), (_ = true);
            KS(s, oh, t, d, a);
          } else if (t) {
            if (!_) a.polygonStart(), (_ = true);
            a.lineStart();
            d(null, null, 1, a);
            a.lineEnd();
          }
          if (_) a.polygonEnd(), (_ = false);
          s = c = null;
        },
        sphere: function () {
          Symbol('JSCA_8179_8185');
          a.polygonStart();
          a.lineStart();
          d(null, null, 1, a);
          a.lineEnd();
          a.polygonEnd();
        },
      };
      function r(t, n) {
        Symbol('JSCA_8187_8189');
        if (b(t, n)) a.point(t, n);
      }
      function t(t, n) {
        Symbol('JSCA_8190_8192');
        e.point(t, n);
      }
      function o() {
        Symbol('JSCA_8193_8196');
        n.point = t;
        e.lineStart();
      }
      function i() {
        Symbol('JSCA_8197_8200');
        n.point = r;
        e.lineEnd();
      }
      function h(t, n) {
        Symbol('JSCA_8201_8204');
        S.push([t, n]);
        f.point(t, n);
      }
      function l() {
        Symbol('JSCA_8205_8208');
        f.lineStart();
        S = [];
      }
      function y() {
        Symbol('JSCA_8209_8229');
        h(S[0][0], S[0][1]);
        f.lineEnd();
        var t = f.clean(),
          n = u.result(),
          e,
          r = n.length,
          o,
          i,
          l;
        S.pop();
        c.push(S);
        S = null;
        if (!r) return;
        if (t & 1) {
          i = n[0];
          if ((o = i.length - 1) > 0) {
            if (!_) a.polygonStart(), (_ = true);
            a.lineStart();
            for (e = 0; e < o; ++e) a.point((l = i[e])[0], l[1]);
            a.lineEnd();
          }
          return;
        }
        if (r > 1 && t & 2) n.push(n.pop().concat(n.shift()));
        s.push(n.filter(rh));
      }
      return n;
    };
  }
  function rh(t) {
    Symbol('JSCA_8233_8235');
    return t.length > 1;
  }
  function oh(t, n) {
    Symbol('JSCA_8236_8238');
    return (
      ((t = t.x)[0] < 0 ? t[1] - R - z : R - t[1]) -
      ((n = n.x)[0] < 0 ? n[1] - R - z : R - n[1])
    );
  }
  var ih = eh(
    function () {
      Symbol('JSCA_8239_8241');
      return true;
    },
    lh,
    uh,
    [-D, -R]
  );
  function lh(o) {
    Symbol('JSCA_8242_8280');
    var i = NaN,
      l = NaN,
      a = NaN,
      u;
    return {
      lineStart: function () {
        Symbol('JSCA_8245_8248');
        o.lineStart();
        u = 1;
      },
      point: function (t, n) {
        Symbol('JSCA_8249_8271');
        var e = t > 0 ? D : -D,
          r = q(t - i);
        if (q(r - D) < z) {
          o.point(i, (l = (l + n) / 2 > 0 ? R : -R));
          o.point(a, l);
          o.lineEnd();
          o.lineStart();
          o.point(e, l);
          o.point(t, l);
          u = 0;
        } else if (a !== e && r >= D) {
          if (q(i - a) < z) i -= a * z;
          if (q(t - e) < z) t -= e * z;
          l = ah(i, l, t, n);
          o.point(a, l);
          o.lineEnd();
          o.lineStart();
          o.point(e, l);
          u = 0;
        }
        o.point((i = t), (l = n));
        a = e;
      },
      lineEnd: function () {
        Symbol('JSCA_8272_8275');
        o.lineEnd();
        i = l = NaN;
      },
      clean: function () {
        Symbol('JSCA_8276_8278');
        return 2 - u;
      },
    };
  }
  function ah(t, n, e, r) {
    Symbol('JSCA_8281_8284');
    var o,
      i,
      l = O(t - e);
    return q(l) > z
      ? i0((O(n) * (i = U(r)) * O(e) - O(r) * (o = U(n)) * O(t)) / (o * i * l))
      : (n + r) / 2;
  }
  function uh(t, n, e, r) {
    Symbol('JSCA_8285_8307');
    var o;
    if (t == null) {
      o = e * R;
      r.point(-D, o);
      r.point(0, o);
      r.point(D, o);
      r.point(D, 0);
      r.point(D, -o);
      r.point(0, -o);
      r.point(-D, -o);
      r.point(-D, 0);
      r.point(-D, o);
    } else if (q(t[0] - n[0]) > z) {
      var i = t[0] < n[0] ? D : -D;
      o = (e * i) / 2;
      r.point(-i, o);
      r.point(0, o);
      r.point(i, o);
    } else {
      r.point(n[0], n[1]);
    }
  }
  function fh(o) {
    Symbol('JSCA_8308_8402');
    var E = U(o),
      i = 2 * F,
      S = E > 0,
      h = q(E) > z;
    function t(t, n, e, r) {
      Symbol('JSCA_8310_8312');
      HS(r, o, i, e, t, n);
    }
    function y(t, n) {
      Symbol('JSCA_8313_8315');
      return U(t) * U(n) > E;
    }
    function n(a) {
      Symbol('JSCA_8316_8372');
      var u, f, _, c, s;
      return {
        lineStart: function () {
          Symbol('JSCA_8319_8322');
          c = _ = false;
          s = 1;
        },
        point: function (t, n) {
          Symbol('JSCA_8323_8363');
          var e = [t, n],
            r,
            o = y(t, n),
            i = S ? (o ? 0 : m(t, n)) : o ? m(t + (t < 0 ? D : -D), n) : 0;
          if (!u && (c = _ = o)) a.lineStart();
          if (o !== _) {
            r = b(u, e);
            if (!r || WS(u, r) || WS(e, r)) e[2] = 1;
          }
          if (o !== _) {
            s = 0;
            if (o) {
              a.lineStart();
              r = b(e, u);
              a.point(r[0], r[1]);
            } else {
              r = b(u, e);
              a.point(r[0], r[1], 2);
              a.lineEnd();
            }
            u = r;
          } else if (h && u && S ^ o) {
            var l;
            if (!(i & f) && (l = b(e, u, true))) {
              s = 0;
              if (S) {
                a.lineStart();
                a.point(l[0][0], l[0][1]);
                a.point(l[1][0], l[1][1]);
                a.lineEnd();
              } else {
                a.point(l[1][0], l[1][1]);
                a.lineEnd();
                a.lineStart();
                a.point(l[0][0], l[0][1], 3);
              }
            }
          }
          if (o && (!u || !WS(u, e))) {
            a.point(e[0], e[1]);
          }
          (u = e), (_ = o), (f = i);
        },
        lineEnd: function () {
          Symbol('JSCA_8364_8367');
          if (_) a.lineEnd();
          u = null;
        },
        clean: function () {
          Symbol('JSCA_8368_8370');
          return s | ((c && _) << 1);
        },
      };
    }
    function b(t, n, e) {
      Symbol('JSCA_8373_8394');
      var r = R0(t),
        o = R0(n);
      var i = [1, 0, 0],
        l = q0(r, o),
        a = F0(l, l),
        u = l[0],
        f = a - u * u;
      if (!f) return !e && t;
      var _ = (E * a) / f,
        c = (-E * u) / f,
        s = q0(i, l),
        S = O0(i, _),
        h = O0(l, c);
      U0(S, h);
      var y = s,
        b = F0(S, y),
        m = F0(y, y),
        d = b * b - m * (F0(S, S) - 1);
      if (d < 0) return;
      var A = B(d),
        C = O0(y, (-b - A) / m);
      U0(C, S);
      C = D0(C);
      if (!e) return C;
      var J = t[0],
        p = n[0],
        g = t[1],
        v = n[1],
        x;
      if (p < J) (x = J), (J = p), (p = x);
      var w = p - J,
        M = q(w - D) < z,
        T = M || w < z;
      if (!M && v < g) (x = g), (g = v), (v = x);
      if (
        T
          ? M
            ? (g + v > 0) ^ (C[1] < (q(C[0] - J) < z ? g : v))
            : g <= C[1] && C[1] <= v
          : (w > D) ^ (J <= C[0] && C[0] <= p)
      ) {
        var k = O0(y, (-b + A) / m);
        U0(k, S);
        return [C, D0(k)];
      }
    }
    function m(t, n) {
      Symbol('JSCA_8395_8400');
      var e = S ? o : D - o,
        r = 0;
      if (t < -e) r |= 1;
      else if (t > e) r |= 2;
      if (n < -e) r |= 4;
      else if (n > e) r |= 8;
      return r;
    }
    return eh(y, n, t, S ? [0, -o] : [-D, o - D]);
  }
  function _h(t, n, e, r, o, i) {
    Symbol('JSCA_8403_8448');
    var l = t[0],
      a = t[1],
      u = n[0],
      f = n[1],
      _ = 0,
      c = 1,
      s = u - l,
      S = f - a,
      h;
    h = e - l;
    if (!s && h > 0) return;
    h /= s;
    if (s < 0) {
      if (h < _) return;
      if (h < c) c = h;
    } else if (s > 0) {
      if (h > c) return;
      if (h > _) _ = h;
    }
    h = o - l;
    if (!s && h < 0) return;
    h /= s;
    if (s < 0) {
      if (h > c) return;
      if (h > _) _ = h;
    } else if (s > 0) {
      if (h < _) return;
      if (h < c) c = h;
    }
    h = r - a;
    if (!S && h > 0) return;
    h /= S;
    if (S < 0) {
      if (h < _) return;
      if (h < c) c = h;
    } else if (S > 0) {
      if (h > c) return;
      if (h > _) _ = h;
    }
    h = i - a;
    if (!S && h < 0) return;
    h /= S;
    if (S < 0) {
      if (h > c) return;
      if (h > _) _ = h;
    } else if (S > 0) {
      if (h < _) return;
      if (h < c) c = h;
    }
    if (_ > 0) (t[0] = l + _ * s), (t[1] = a + _ * S);
    if (c < 1) (n[0] = l + c * s), (n[1] = a + c * S);
    return true;
  }
  var ch = 1e9,
    sh = -ch;
  function Sh(p, g, v, x) {
    Symbol('JSCA_8450_8565');
    function w(t, n) {
      Symbol('JSCA_8451_8453');
      return p <= t && t <= v && g <= n && n <= x;
    }
    function M(t, n, e, r) {
      Symbol('JSCA_8454_8461');
      var o = 0,
        i = 0;
      if (
        t == null ||
        (o = l(t, e)) !== (i = l(n, e)) ||
        (a(t, n) < 0) ^ (e > 0)
      ) {
        do {
          r.point(o === 0 || o === 3 ? p : v, o > 1 ? x : g);
        } while ((o = (o + e + 4) % 4) !== i);
      } else {
        r.point(n[0], n[1]);
      }
    }
    function l(t, n) {
      Symbol('JSCA_8462_8464');
      return q(t[0] - p) < z
        ? n > 0
          ? 0
          : 3
        : q(t[0] - v) < z
        ? n > 0
          ? 2
          : 1
        : q(t[1] - g) < z
        ? n > 0
          ? 1
          : 0
        : n > 0
        ? 3
        : 2;
    }
    function T(t, n) {
      Symbol('JSCA_8465_8467');
      return a(t.x, n.x);
    }
    function a(t, n) {
      Symbol('JSCA_8468_8471');
      var e = l(t, 1),
        r = l(n, 1);
      return e !== r
        ? e - r
        : e === 0
        ? n[1] - t[1]
        : e === 1
        ? t[0] - n[0]
        : e === 2
        ? t[1] - n[1]
        : n[0] - t[0];
    }
    return function (r) {
      Symbol('JSCA_8472_8564');
      var i = r,
        t = VS(),
        o,
        c,
        l,
        a,
        u,
        f,
        _,
        s,
        S,
        h,
        y;
      var n = {
        point: e,
        lineStart: A,
        lineEnd: C,
        polygonStart: m,
        polygonEnd: d,
      };
      function e(t, n) {
        Symbol('JSCA_8481_8483');
        if (w(t, n)) i.point(t, n);
      }
      function b() {
        Symbol('JSCA_8484_8497');
        var t = 0;
        for (var n = 0, e = c.length; n < e; ++n) {
          for (
            var r = c[n],
              o = 1,
              i = r.length,
              l = r[0],
              a,
              u,
              f = l[0],
              _ = l[1];
            o < i;
            ++o
          ) {
            (a = f), (u = _), (l = r[o]), (f = l[0]), (_ = l[1]);
            if (u <= x) {
              if (_ > x && (f - a) * (x - u) > (_ - u) * (p - a)) ++t;
            } else {
              if (_ <= x && (f - a) * (x - u) < (_ - u) * (p - a)) --t;
            }
          }
        }
        return t;
      }
      function m() {
        Symbol('JSCA_8498_8500');
        (i = t), (o = []), (c = []), (y = true);
      }
      function d() {
        Symbol('JSCA_8501_8516');
        var t = b(),
          n = y && t,
          e = (o = Sn(o)).length;
        if (n || e) {
          r.polygonStart();
          if (n) {
            r.lineStart();
            M(null, null, 1, r);
            r.lineEnd();
          }
          if (e) {
            KS(o, T, t, M, r);
          }
          r.polygonEnd();
        }
        (i = r), (o = c = l = null);
      }
      function A() {
        Symbol('JSCA_8517_8523');
        n.point = J;
        if (c) c.push((l = []));
        h = true;
        S = false;
        _ = s = NaN;
      }
      function C() {
        Symbol('JSCA_8524_8532');
        if (o) {
          J(a, u);
          if (f && S) t.rejoin();
          o.push(t.result());
        }
        n.point = e;
        if (S) i.lineEnd();
      }
      function J(t, n) {
        Symbol('JSCA_8533_8562');
        var e = w(t, n);
        if (c) l.push([t, n]);
        if (h) {
          (a = t), (u = n), (f = e);
          h = false;
          if (e) {
            i.lineStart();
            i.point(t, n);
          }
        } else {
          if (e && S) i.point(t, n);
          else {
            var r = [
                (_ = Math.max(sh, Math.min(ch, _))),
                (s = Math.max(sh, Math.min(ch, s))),
              ],
              o = [
                (t = Math.max(sh, Math.min(ch, t))),
                (n = Math.max(sh, Math.min(ch, n))),
              ];
            if (_h(r, o, p, g, v, x)) {
              if (!S) {
                i.lineStart();
                i.point(r[0], r[1]);
              }
              i.point(o[0], o[1]);
              if (!e) i.lineEnd();
              y = false;
            } else if (e) {
              i.lineStart();
              i.point(t, n);
              y = false;
            }
          }
        }
        (_ = t), (s = n), (S = e);
      }
      return n;
    };
  }
  function hh() {
    Symbol('JSCA_8566_8576');
    var n = 0,
      e = 0,
      r = 960,
      o = 500,
      i,
      l,
      a;
    return (a = {
      stream: function (t) {
        Symbol('JSCA_8569_8571');
        return i && l === t ? i : (i = Sh(n, e, r, o)((l = t)));
      },
      extent: function (t) {
        Symbol('JSCA_8572_8574');
        return arguments.length
          ? ((n = +t[0][0]),
            (e = +t[0][1]),
            (r = +t[1][0]),
            (o = +t[1][1]),
            (i = l = null),
            a)
          : [
              [n, e],
              [r, o],
            ];
      },
    });
  }
  var yh, bh, mh, dh;
  var Ah = {
    sphere: e,
    point: e,
    lineStart: Ch,
    lineEnd: e,
    polygonStart: e,
    polygonEnd: e,
  };
  function Ch() {
    Symbol('JSCA_8586_8589');
    Ah.point = ph;
    Ah.lineEnd = Jh;
  }
  function Jh() {
    Symbol('JSCA_8590_8592');
    Ah.point = Ah.lineEnd = e;
  }
  function ph(t, n) {
    Symbol('JSCA_8593_8597');
    (t *= F), (n *= F);
    (bh = t), (mh = O(n)), (dh = U(n));
    Ah.point = gh;
  }
  function gh(t, n) {
    Symbol('JSCA_8598_8603');
    (t *= F), (n *= F);
    var e = O(n),
      r = U(n),
      o = q(t - bh),
      i = U(o),
      l = O(o),
      a = r * l,
      u = dh * e - mh * r * i,
      f = mh * e + dh * r * i;
    yh.add(l0(B(a * a + u * u), f));
    (bh = t), (mh = e), (dh = r);
  }
  function vh(t) {
    Symbol('JSCA_8604_8608');
    yh = new P();
    p0(t, Ah);
    return +yh;
  }
  var xh = [null, null],
    wh = { type: 'LineString', coordinates: xh };
  function Mh(t, n) {
    Symbol('JSCA_8613_8617');
    xh[0] = t;
    xh[1] = n;
    return vh(wh);
  }
  var Th = {
    Feature: function (t, n) {
      Symbol('JSCA_8619_8621');
      return Eh(t.geometry, n);
    },
    FeatureCollection: function (t, n) {
      Symbol('JSCA_8622_8626');
      var e = t.features,
        r = -1,
        o = e.length;
      while (++r < o) if (Eh(e[r].geometry, n)) return true;
      return false;
    },
  };
  var kh = {
    Sphere: function () {
      Symbol('JSCA_8629_8631');
      return true;
    },
    Point: function (t, n) {
      Symbol('JSCA_8632_8634');
      return Nh(t.coordinates, n);
    },
    MultiPoint: function (t, n) {
      Symbol('JSCA_8635_8639');
      var e = t.coordinates,
        r = -1,
        o = e.length;
      while (++r < o) if (Nh(e[r], n)) return true;
      return false;
    },
    LineString: function (t, n) {
      Symbol('JSCA_8640_8642');
      return Ph(t.coordinates, n);
    },
    MultiLineString: function (t, n) {
      Symbol('JSCA_8643_8647');
      var e = t.coordinates,
        r = -1,
        o = e.length;
      while (++r < o) if (Ph(e[r], n)) return true;
      return false;
    },
    Polygon: function (t, n) {
      Symbol('JSCA_8648_8650');
      return zh(t.coordinates, n);
    },
    MultiPolygon: function (t, n) {
      Symbol('JSCA_8651_8655');
      var e = t.coordinates,
        r = -1,
        o = e.length;
      while (++r < o) if (zh(e[r], n)) return true;
      return false;
    },
    GeometryCollection: function (t, n) {
      Symbol('JSCA_8656_8660');
      var e = t.geometries,
        r = -1,
        o = e.length;
      while (++r < o) if (Eh(e[r], n)) return true;
      return false;
    },
  };
  function Eh(t, n) {
    Symbol('JSCA_8662_8664');
    return t && kh.hasOwnProperty(t.type) ? kh[t.type](t, n) : false;
  }
  function Nh(t, n) {
    Symbol('JSCA_8665_8667');
    return Mh(t, n) === 0;
  }
  function Ph(t, n) {
    Symbol('JSCA_8668_8680');
    var e, r, o;
    for (var i = 0, l = t.length; i < l; i++) {
      r = Mh(t[i], n);
      if (r === 0) return true;
      if (i > 0) {
        o = Mh(t[i], t[i - 1]);
        if (
          o > 0 &&
          e <= o &&
          r <= o &&
          (e + r - o) * (1 - Math.pow((e - r) / o, 2)) < e0 * o
        )
          return true;
      }
      e = r;
    }
    return false;
  }
  function zh(t, n) {
    Symbol('JSCA_8681_8683');
    return !!nh(t.map(Ih), $h(n));
  }
  function Ih(t) {
    Symbol('JSCA_8684_8686');
    return (t = t.map($h)), t.pop(), t;
  }
  function $h(t) {
    Symbol('JSCA_8687_8689');
    return [t[0] * F, t[1] * F];
  }
  function Dh(t, n) {
    Symbol('JSCA_8690_8692');
    return (t && Th.hasOwnProperty(t.type) ? Th[t.type] : Eh)(t, n);
  }
  function Rh(t, n, e) {
    Symbol('JSCA_8693_8700');
    var r = mn(t, n - z, e).concat(n);
    return function (n) {
      Symbol('JSCA_8695_8699');
      return r.map(function (t) {
        Symbol('JSCA_8696_8698');
        return [n, t];
      });
    };
  }
  function Fh(t, n, e) {
    Symbol('JSCA_8701_8708');
    var r = mn(t, n - z, e).concat(n);
    return function (n) {
      Symbol('JSCA_8703_8707');
      return r.map(function (t) {
        Symbol('JSCA_8704_8706');
        return [t, n];
      });
    };
  }
  function qh() {
    Symbol('JSCA_8709_8782');
    var n,
      e,
      r,
      o,
      i,
      l,
      a,
      u,
      f = 10,
      _ = f,
      c = 90,
      s = 360,
      S,
      h,
      y,
      b,
      m = 2.5;
    function d() {
      Symbol('JSCA_8711_8716');
      return { type: 'MultiLineString', coordinates: t() };
    }
    function t() {
      Symbol('JSCA_8717_8723');
      return mn(a0(o / c) * c, r, c)
        .map(y)
        .concat(mn(a0(u / s) * s, a, s).map(b))
        .concat(
          mn(a0(e / f) * f, n, f)
            .filter(function (t) {
              Symbol('JSCA_8718_8720');
              return q(t % c) > z;
            })
            .map(S)
        )
        .concat(
          mn(a0(l / _) * _, i, _)
            .filter(function (t) {
              Symbol('JSCA_8720_8722');
              return q(t % s) > z;
            })
            .map(h)
        );
    }
    d.lines = function () {
      Symbol('JSCA_8724_8731');
      return t().map(function (t) {
        Symbol('JSCA_8725_8730');
        return { type: 'LineString', coordinates: t };
      });
    };
    d.outline = function () {
      Symbol('JSCA_8732_8737');
      return {
        type: 'Polygon',
        coordinates: [
          y(o).concat(
            b(a).slice(1),
            y(r).reverse().slice(1),
            b(u).reverse().slice(1)
          ),
        ],
      };
    };
    d.extent = function (t) {
      Symbol('JSCA_8738_8741');
      if (!arguments.length) return d.extentMinor();
      return d.extentMajor(t).extentMinor(t);
    };
    d.extentMajor = function (t) {
      Symbol('JSCA_8742_8749');
      if (!arguments.length)
        return [
          [o, u],
          [r, a],
        ];
      (o = +t[0][0]), (r = +t[1][0]);
      (u = +t[0][1]), (a = +t[1][1]);
      if (o > r) (t = o), (o = r), (r = t);
      if (u > a) (t = u), (u = a), (a = t);
      return d.precision(m);
    };
    d.extentMinor = function (t) {
      Symbol('JSCA_8750_8757');
      if (!arguments.length)
        return [
          [e, l],
          [n, i],
        ];
      (e = +t[0][0]), (n = +t[1][0]);
      (l = +t[0][1]), (i = +t[1][1]);
      if (e > n) (t = e), (e = n), (n = t);
      if (l > i) (t = l), (l = i), (i = t);
      return d.precision(m);
    };
    d.step = function (t) {
      Symbol('JSCA_8758_8761');
      if (!arguments.length) return d.stepMinor();
      return d.stepMajor(t).stepMinor(t);
    };
    d.stepMajor = function (t) {
      Symbol('JSCA_8762_8766');
      if (!arguments.length) return [c, s];
      (c = +t[0]), (s = +t[1]);
      return d;
    };
    d.stepMinor = function (t) {
      Symbol('JSCA_8767_8771');
      if (!arguments.length) return [f, _];
      (f = +t[0]), (_ = +t[1]);
      return d;
    };
    d.precision = function (t) {
      Symbol('JSCA_8772_8780');
      if (!arguments.length) return m;
      m = +t;
      S = Rh(l, i, 90);
      h = Fh(e, n, m);
      y = Rh(u, a, 90);
      b = Fh(o, r, m);
      return d;
    };
    return d
      .extentMajor([
        [-180, -90 + z],
        [180, 90 - z],
      ])
      .extentMinor([
        [-180, -80 - z],
        [180, 80 + z],
      ]);
  }
  function Uh() {
    Symbol('JSCA_8783_8785');
    return qh()();
  }
  function Oh(t, n) {
    Symbol('JSCA_8786_8796');
    var e = t[0] * F,
      r = t[1] * F,
      o = n[0] * F,
      i = n[1] * F,
      l = U(r),
      a = O(r),
      u = U(i),
      f = O(i),
      _ = l * U(e),
      c = l * O(e),
      s = u * U(o),
      S = u * O(o),
      h = 2 * y0(B(b0(i - r) + l * u * b0(o - e))),
      y = O(h);
    var b = h
      ? function (t) {
          Symbol('JSCA_8788_8791');
          var n = O((t *= h)) / y,
            e = O(h - t) / y,
            r = e * _ + n * s,
            o = e * c + n * S,
            i = e * a + n * f;
          return [l0(o, r) * N, l0(i, B(r * r + o * o)) * N];
        }
      : function () {
          Symbol('JSCA_8791_8793');
          return [e * N, r * N];
        };
    b.distance = h;
    return b;
  }
  var Bh = (t) => t;
  var Yh = new P(),
    Lh = new P(),
    jh,
    Hh,
    Xh,
    Gh;
  var Vh = {
    point: e,
    lineStart: e,
    lineEnd: e,
    polygonStart: function () {
      Symbol('JSCA_8803_8806');
      Vh.lineStart = Wh;
      Vh.lineEnd = Qh;
    },
    polygonEnd: function () {
      Symbol('JSCA_8807_8811');
      Vh.lineStart = Vh.lineEnd = Vh.point = e;
      Yh.add(q(Lh));
      Lh = new P();
    },
    result: function () {
      Symbol('JSCA_8812_8816');
      var t = Yh / 2;
      Yh = new P();
      return t;
    },
  };
  function Wh() {
    Symbol('JSCA_8818_8820');
    Vh.point = Zh;
  }
  function Zh(t, n) {
    Symbol('JSCA_8821_8824');
    Vh.point = Kh;
    (jh = Xh = t), (Hh = Gh = n);
  }
  function Kh(t, n) {
    Symbol('JSCA_8825_8828');
    Lh.add(Gh * t - Xh * n);
    (Xh = t), (Gh = n);
  }
  function Qh() {
    Symbol('JSCA_8829_8831');
    Kh(jh, Hh);
  }
  var t2 = Vh;
  var n2 = Infinity,
    e2 = n2,
    r2 = -n2,
    o2 = r2;
  var i2 = {
    point: l2,
    lineStart: e,
    lineEnd: e,
    polygonStart: e,
    polygonEnd: e,
    result: function () {
      Symbol('JSCA_8840_8844');
      var t = [
        [n2, e2],
        [r2, o2],
      ];
      r2 = o2 = -(e2 = n2 = Infinity);
      return t;
    },
  };
  function l2(t, n) {
    Symbol('JSCA_8846_8851');
    if (t < n2) n2 = t;
    if (t > r2) r2 = t;
    if (n < e2) e2 = n;
    if (n > o2) o2 = n;
  }
  var a2 = i2;
  var u2 = 0,
    f2 = 0,
    _2 = 0,
    c2 = 0,
    s2 = 0,
    S2 = 0,
    h2 = 0,
    y2 = 0,
    b2 = 0,
    m2,
    d2,
    A2,
    C2;
  var J2 = {
    point: p2,
    lineStart: g2,
    lineEnd: w2,
    polygonStart: function () {
      Symbol('JSCA_8858_8861');
      J2.lineStart = M2;
      J2.lineEnd = T2;
    },
    polygonEnd: function () {
      Symbol('JSCA_8862_8866');
      J2.point = p2;
      J2.lineStart = g2;
      J2.lineEnd = w2;
    },
    result: function () {
      Symbol('JSCA_8867_8871');
      var t = b2
        ? [h2 / b2, y2 / b2]
        : S2
        ? [c2 / S2, s2 / S2]
        : _2
        ? [u2 / _2, f2 / _2]
        : [NaN, NaN];
      u2 = f2 = _2 = c2 = s2 = S2 = h2 = y2 = b2 = 0;
      return t;
    },
  };
  function p2(t, n) {
    Symbol('JSCA_8873_8877');
    u2 += t;
    f2 += n;
    ++_2;
  }
  function g2() {
    Symbol('JSCA_8878_8880');
    J2.point = v2;
  }
  function v2(t, n) {
    Symbol('JSCA_8881_8884');
    J2.point = x2;
    p2((A2 = t), (C2 = n));
  }
  function x2(t, n) {
    Symbol('JSCA_8885_8891');
    var e = t - A2,
      r = n - C2,
      o = B(e * e + r * r);
    c2 += (o * (A2 + t)) / 2;
    s2 += (o * (C2 + n)) / 2;
    S2 += o;
    p2((A2 = t), (C2 = n));
  }
  function w2() {
    Symbol('JSCA_8892_8894');
    J2.point = p2;
  }
  function M2() {
    Symbol('JSCA_8895_8897');
    J2.point = k2;
  }
  function T2() {
    Symbol('JSCA_8898_8900');
    E2(m2, d2);
  }
  function k2(t, n) {
    Symbol('JSCA_8901_8904');
    J2.point = E2;
    p2((m2 = A2 = t), (d2 = C2 = n));
  }
  function E2(t, n) {
    Symbol('JSCA_8905_8915');
    var e = t - A2,
      r = n - C2,
      o = B(e * e + r * r);
    c2 += (o * (A2 + t)) / 2;
    s2 += (o * (C2 + n)) / 2;
    S2 += o;
    o = C2 * t - A2 * n;
    h2 += o * (A2 + t);
    y2 += o * (C2 + n);
    b2 += o * 3;
    p2((A2 = t), (C2 = n));
  }
  var N2 = J2;
  function P2(t) {
    Symbol('JSCA_8917_8919');
    this._context = t;
  }
  P2.prototype = {
    _radius: 4.5,
    pointRadius: function (t) {
      Symbol('JSCA_8922_8924');
      return (this._radius = t), this;
    },
    polygonStart: function () {
      Symbol('JSCA_8925_8927');
      this._line = 0;
    },
    polygonEnd: function () {
      Symbol('JSCA_8928_8930');
      this._line = NaN;
    },
    lineStart: function () {
      Symbol('JSCA_8931_8933');
      this._point = 0;
    },
    lineEnd: function () {
      Symbol('JSCA_8934_8937');
      if (this._line === 0) this._context.closePath();
      this._point = NaN;
    },
    point: function (t, n) {
      Symbol('JSCA_8938_8958');
      switch (this._point) {
        case 0: {
          this._context.moveTo(t, n);
          this._point = 1;
          break;
        }
        case 1: {
          this._context.lineTo(t, n);
          break;
        }
        default: {
          this._context.moveTo(t + this._radius, n);
          this._context.arc(t, n, this._radius, 0, o0);
          break;
        }
      }
    },
    result: e,
  };
  var z2 = new P(),
    I2,
    $2,
    D2,
    R2,
    F2;
  var q2 = {
    point: e,
    lineStart: function () {
      Symbol('JSCA_8964_8966');
      q2.point = U2;
    },
    lineEnd: function () {
      Symbol('JSCA_8967_8970');
      if (I2) O2($2, D2);
      q2.point = e;
    },
    polygonStart: function () {
      Symbol('JSCA_8971_8973');
      I2 = true;
    },
    polygonEnd: function () {
      Symbol('JSCA_8974_8976');
      I2 = null;
    },
    result: function () {
      Symbol('JSCA_8977_8981');
      var t = +z2;
      z2 = new P();
      return t;
    },
  };
  function U2(t, n) {
    Symbol('JSCA_8983_8986');
    q2.point = O2;
    ($2 = R2 = t), (D2 = F2 = n);
  }
  function O2(t, n) {
    Symbol('JSCA_8987_8991');
    (R2 -= t), (F2 -= n);
    z2.add(B(R2 * R2 + F2 * F2));
    (R2 = t), (F2 = n);
  }
  var B2 = q2;
  let Y2, L2, j2, H2;
  class X2 {
    constructor(t) {
      Symbol('JSCA_8995_8999');
      this._append = t == null ? G2 : V2(t);
      this._radius = 4.5;
      this._ = '';
    }
    pointRadius(t) {
      Symbol('JSCA_9000_9003');
      this._radius = +t;
      return this;
    }
    polygonStart() {
      Symbol('JSCA_9004_9006');
      this._line = 0;
    }
    polygonEnd() {
      Symbol('JSCA_9007_9009');
      this._line = NaN;
    }
    lineStart() {
      Symbol('JSCA_9010_9012');
      this._point = 0;
    }
    lineEnd() {
      Symbol('JSCA_9013_9016');
      if (this._line === 0) this._ += 'Z';
      this._point = NaN;
    }
    point(t, n) {
      Symbol('JSCA_9017_9047');
      switch (this._point) {
        case 0: {
          this._append`M${t},${n}`;
          this._point = 1;
          break;
        }
        case 1: {
          this._append`L${t},${n}`;
          break;
        }
        default: {
          this._append`M${t},${n}`;
          if (this._radius !== j2 || this._append !== L2) {
            const e = this._radius;
            const t = this._;
            this._ = '';
            this._append`m0,${e}a${e},${e} 0 1,1 0,${
              -2 * e
            }a${e},${e} 0 1,1 0,${2 * e}z`;
            j2 = e;
            L2 = this._append;
            H2 = this._;
            this._ = t;
          }
          this._ += H2;
          break;
        }
      }
    }
    result() {
      Symbol('JSCA_9048_9052');
      const t = this._;
      this._ = '';
      return t.length ? t : null;
    }
  }
  function G2(t) {
    Symbol('JSCA_9054_9060');
    let n = 1;
    this._ += t[0];
    for (const e = t.length; n < e; ++n) {
      this._ += arguments[n] + t[n];
    }
  }
  function V2(t) {
    Symbol('JSCA_9061_9077');
    const n = Math.floor(t);
    if (!(n >= 0)) throw new RangeError(`invalid digits: ${t}`);
    if (n > 15) return G2;
    if (n !== Y2) {
      const o = 10 ** n;
      Y2 = n;
      L2 = function t(n) {
        Symbol('JSCA_9068_9074');
        let e = 1;
        this._ += n[0];
        for (const r = n.length; e < r; ++e) {
          this._ += Math.round(arguments[e] * o) / o + n[e];
        }
      };
    }
    return L2;
  }
  function W2(n, e) {
    Symbol('JSCA_9078_9130');
    let r = 3,
      o = 4.5,
      i,
      l;
    function a(t) {
      Symbol('JSCA_9080_9086');
      if (t) {
        if (typeof o === 'function') l.pointRadius(+o.apply(this, arguments));
        p0(t, i(l));
      }
      return l.result();
    }
    a.area = function (t) {
      Symbol('JSCA_9087_9090');
      p0(t, i(t2));
      return t2.result();
    };
    a.measure = function (t) {
      Symbol('JSCA_9091_9094');
      p0(t, i(B2));
      return B2.result();
    };
    a.bounds = function (t) {
      Symbol('JSCA_9095_9098');
      p0(t, i(a2));
      return a2.result();
    };
    a.centroid = function (t) {
      Symbol('JSCA_9099_9102');
      p0(t, i(N2));
      return N2.result();
    };
    a.projection = function (t) {
      Symbol('JSCA_9103_9107');
      if (!arguments.length) return n;
      i = t == null ? ((n = null), Bh) : (n = t).stream;
      return a;
    };
    a.context = function (t) {
      Symbol('JSCA_9108_9113');
      if (!arguments.length) return e;
      l = t == null ? ((e = null), new X2(r)) : new P2((e = t));
      if (typeof o !== 'function') l.pointRadius(o);
      return a;
    };
    a.pointRadius = function (t) {
      Symbol('JSCA_9114_9118');
      if (!arguments.length) return o;
      o = typeof t === 'function' ? t : (l.pointRadius(+t), +t);
      return a;
    };
    a.digits = function (t) {
      Symbol('JSCA_9119_9128');
      if (!arguments.length) return r;
      if (t == null) r = null;
      else {
        const n = Math.floor(t);
        if (!(n >= 0)) throw new RangeError(`invalid digits: ${t}`);
        r = n;
      }
      if (e === null) l = new X2(r);
      return a;
    };
    return a.projection(n).digits(r).context(e);
  }
  function Z2(t) {
    Symbol('JSCA_9131_9135');
    return { stream: K2(t) };
  }
  function K2(r) {
    Symbol('JSCA_9136_9143');
    return function (t) {
      Symbol('JSCA_9137_9142');
      var n = new Q2();
      for (var e in r) n[e] = r[e];
      n.stream = t;
      return n;
    };
  }
  function Q2() {
    Symbol('JSCA_9144_9144');
  }
  Q2.prototype = {
    constructor: Q2,
    point: function (t, n) {
      Symbol('JSCA_9147_9149');
      this.stream.point(t, n);
    },
    sphere: function () {
      Symbol('JSCA_9150_9152');
      this.stream.sphere();
    },
    lineStart: function () {
      Symbol('JSCA_9153_9155');
      this.stream.lineStart();
    },
    lineEnd: function () {
      Symbol('JSCA_9156_9158');
      this.stream.lineEnd();
    },
    polygonStart: function () {
      Symbol('JSCA_9159_9161');
      this.stream.polygonStart();
    },
    polygonEnd: function () {
      Symbol('JSCA_9162_9164');
      this.stream.polygonEnd();
    },
  };
  function ty(t, n, e) {
    Symbol('JSCA_9166_9174');
    var r = t.clipExtent && t.clipExtent();
    t.scale(150).translate([0, 0]);
    if (r != null) t.clipExtent(null);
    p0(e, t.stream(a2));
    n(a2.result());
    if (r != null) t.clipExtent(r);
    return t;
  }
  function ny(l, a, t) {
    Symbol('JSCA_9175_9180');
    return ty(
      l,
      function (t) {
        Symbol('JSCA_9176_9179');
        var n = a[1][0] - a[0][0],
          e = a[1][1] - a[0][1],
          r = Math.min(n / (t[1][0] - t[0][0]), e / (t[1][1] - t[0][1])),
          o = +a[0][0] + (n - r * (t[1][0] + t[0][0])) / 2,
          i = +a[0][1] + (e - r * (t[1][1] + t[0][1])) / 2;
        l.scale(150 * r).translate([o, i]);
      },
      t
    );
  }
  function ey(t, n, e) {
    Symbol('JSCA_9181_9183');
    return ny(t, [[0, 0], n], e);
  }
  function ry(i, l, t) {
    Symbol('JSCA_9184_9189');
    return ty(
      i,
      function (t) {
        Symbol('JSCA_9185_9188');
        var n = +l,
          e = n / (t[1][0] - t[0][0]),
          r = (n - e * (t[1][0] + t[0][0])) / 2,
          o = -e * t[0][1];
        i.scale(150 * e).translate([r, o]);
      },
      t
    );
  }
  function oy(i, l, t) {
    Symbol('JSCA_9190_9195');
    return ty(
      i,
      function (t) {
        Symbol('JSCA_9191_9194');
        var n = +l,
          e = n / (t[1][1] - t[0][1]),
          r = -e * t[0][0],
          o = (n - e * (t[1][1] + t[0][1])) / 2;
        i.scale(150 * e).translate([r, o]);
      },
      t
    );
  }
  var iy = 16,
    ly = U(30 * F);
  function ay(t, n) {
    Symbol('JSCA_9197_9199');
    return +n ? fy(t, n) : uy(t);
  }
  function uy(e) {
    Symbol('JSCA_9200_9207');
    return K2({
      point: function (t, n) {
        Symbol('JSCA_9202_9205');
        t = e(t, n);
        this.stream.point(t[0], t[1]);
      },
    });
  }
  function fy(k, E) {
    Symbol('JSCA_9208_9269');
    function N(t, n, e, r, o, i, l, a, u, f, _, c, s, S) {
      Symbol('JSCA_9209_9219');
      var h = l - t,
        y = a - n,
        b = h * h + y * y;
      if (b > 4 * E && s--) {
        var m = r + f,
          d = o + _,
          A = i + c,
          C = B(m * m + d * d + A * A),
          J = y0((A /= C)),
          p = q(q(A) - 1) < z || q(e - u) < z ? (e + u) / 2 : l0(d, m),
          g = k(p, J),
          v = g[0],
          x = g[1],
          w = v - t,
          M = x - n,
          T = y * w - h * M;
        if (
          (T * T) / b > E ||
          q((h * w + y * M) / b - 0.5) > 0.3 ||
          r * f + o * _ + i * c < ly
        ) {
          N(t, n, e, r, o, i, v, x, p, (m /= C), (d /= C), A, s, S);
          S.point(v, x);
          N(v, x, p, m, d, A, l, a, u, f, _, c, s, S);
        }
      }
    }
    return function (o) {
      Symbol('JSCA_9220_9268');
      var e, r, i, l, a, u, f, _, c, s, S, h;
      var y = {
        point: t,
        lineStart: n,
        lineEnd: m,
        polygonStart: function () {
          Symbol('JSCA_9226_9229');
          o.polygonStart();
          y.lineStart = d;
        },
        polygonEnd: function () {
          Symbol('JSCA_9230_9233');
          o.polygonEnd();
          y.lineStart = n;
        },
      };
      function t(t, n) {
        Symbol('JSCA_9235_9238');
        t = k(t, n);
        o.point(t[0], t[1]);
      }
      function n() {
        Symbol('JSCA_9239_9243');
        _ = NaN;
        y.point = b;
        o.lineStart();
      }
      function b(t, n) {
        Symbol('JSCA_9244_9248');
        var e = R0([t, n]),
          r = k(t, n);
        N(
          _,
          c,
          f,
          s,
          S,
          h,
          (_ = r[0]),
          (c = r[1]),
          (f = t),
          (s = e[0]),
          (S = e[1]),
          (h = e[2]),
          iy,
          o
        );
        o.point(_, c);
      }
      function m() {
        Symbol('JSCA_9249_9252');
        y.point = t;
        o.lineEnd();
      }
      function d() {
        Symbol('JSCA_9253_9257');
        n();
        y.point = A;
        y.lineEnd = C;
      }
      function A(t, n) {
        Symbol('JSCA_9258_9261');
        b((e = t), n), (r = _), (i = c), (l = s), (a = S), (u = h);
        y.point = b;
      }
      function C() {
        Symbol('JSCA_9262_9266');
        N(_, c, f, s, S, h, r, i, e, l, a, u, iy, o);
        y.lineEnd = m;
        m();
      }
      return y;
    };
  }
  var _y = K2({
    point: function (t, n) {
      Symbol('JSCA_9271_9273');
      this.stream.point(t * F, n * F);
    },
  });
  function cy(r) {
    Symbol('JSCA_9275_9282');
    return K2({
      point: function (t, n) {
        Symbol('JSCA_9277_9280');
        var e = r(t, n);
        return this.stream.point(e[0], e[1]);
      },
    });
  }
  function sy(e, r, o, i, l) {
    Symbol('JSCA_9283_9293');
    function t(t, n) {
      Symbol('JSCA_9284_9288');
      t *= i;
      n *= l;
      return [r + e * t, o - e * n];
    }
    t.invert = function (t, n) {
      Symbol('JSCA_9289_9291');
      return [((t - r) / e) * i, ((o - n) / e) * l];
    };
    return t;
  }
  function Sy(t, e, r, o, i, n) {
    Symbol('JSCA_9294_9306');
    if (!n) return sy(t, e, r, o, i);
    var l = U(n),
      a = O(n),
      u = l * t,
      f = a * t,
      _ = l / t,
      c = a / t,
      s = (a * r - l * e) / t,
      S = (a * e + l * r) / t;
    function h(t, n) {
      Symbol('JSCA_9297_9301');
      t *= o;
      n *= i;
      return [u * t - f * n + e, r - f * t - u * n];
    }
    h.invert = function (t, n) {
      Symbol('JSCA_9302_9304');
      return [o * (_ * t - c * n + s), i * (S - c * t - _ * n)];
    };
    return h;
  }
  function hy(t) {
    Symbol('JSCA_9307_9311');
    return yy(function () {
      Symbol('JSCA_9308_9310');
      return t;
    })();
  }
  function yy(t) {
    Symbol('JSCA_9312_9389');
    var e,
      r = 150,
      o = 480,
      i = 250,
      l = 0,
      a = 0,
      u = 0,
      f = 0,
      _ = 0,
      c,
      s = 0,
      S = 1,
      h = 1,
      n = null,
      y = ih,
      b = null,
      m,
      d,
      A,
      C = Bh,
      J = 0.5,
      p,
      g,
      v,
      x,
      w;
    function M(t) {
      Symbol('JSCA_9314_9316');
      return v(t[0] * F, t[1] * F);
    }
    function T(t) {
      Symbol('JSCA_9317_9320');
      t = v.invert(t[0], t[1]);
      return t && [t[0] * N, t[1] * N];
    }
    M.stream = function (t) {
      Symbol('JSCA_9321_9323');
      return x && w === t ? x : (x = _y(cy(c)(y(p(C((w = t)))))));
    };
    M.preclip = function (t) {
      Symbol('JSCA_9324_9326');
      return arguments.length ? ((y = t), (n = undefined), E()) : y;
    };
    M.postclip = function (t) {
      Symbol('JSCA_9327_9329');
      return arguments.length ? ((C = t), (b = m = d = A = null), E()) : C;
    };
    M.clipAngle = function (t) {
      Symbol('JSCA_9330_9332');
      return arguments.length
        ? ((y = +t ? fh((n = t * F)) : ((n = null), ih)), E())
        : n * N;
    };
    M.clipExtent = function (t) {
      Symbol('JSCA_9333_9335');
      return arguments.length
        ? ((C =
            t == null
              ? ((b = m = d = A = null), Bh)
              : Sh(
                  (b = +t[0][0]),
                  (m = +t[0][1]),
                  (d = +t[1][0]),
                  (A = +t[1][1])
                )),
          E())
        : b == null
        ? null
        : [
            [b, m],
            [d, A],
          ];
    };
    M.scale = function (t) {
      Symbol('JSCA_9336_9338');
      return arguments.length ? ((r = +t), k()) : r;
    };
    M.translate = function (t) {
      Symbol('JSCA_9339_9341');
      return arguments.length ? ((o = +t[0]), (i = +t[1]), k()) : [o, i];
    };
    M.center = function (t) {
      Symbol('JSCA_9342_9344');
      return arguments.length
        ? ((l = (t[0] % 360) * F), (a = (t[1] % 360) * F), k())
        : [l * N, a * N];
    };
    M.rotate = function (t) {
      Symbol('JSCA_9345_9347');
      return arguments.length
        ? ((u = (t[0] % 360) * F),
          (f = (t[1] % 360) * F),
          (_ = t.length > 2 ? (t[2] % 360) * F : 0),
          k())
        : [u * N, f * N, _ * N];
    };
    M.angle = function (t) {
      Symbol('JSCA_9348_9350');
      return arguments.length ? ((s = (t % 360) * F), k()) : s * N;
    };
    M.reflectX = function (t) {
      Symbol('JSCA_9351_9353');
      return arguments.length ? ((S = t ? -1 : 1), k()) : S < 0;
    };
    M.reflectY = function (t) {
      Symbol('JSCA_9354_9356');
      return arguments.length ? ((h = t ? -1 : 1), k()) : h < 0;
    };
    M.precision = function (t) {
      Symbol('JSCA_9357_9359');
      return arguments.length ? ((p = ay(g, (J = t * t))), E()) : B(J);
    };
    M.fitExtent = function (t, n) {
      Symbol('JSCA_9360_9362');
      return ny(M, t, n);
    };
    M.fitSize = function (t, n) {
      Symbol('JSCA_9363_9365');
      return ey(M, t, n);
    };
    M.fitWidth = function (t, n) {
      Symbol('JSCA_9366_9368');
      return ry(M, t, n);
    };
    M.fitHeight = function (t, n) {
      Symbol('JSCA_9369_9371');
      return oy(M, t, n);
    };
    function k() {
      Symbol('JSCA_9372_9379');
      var t = Sy(r, 0, 0, S, h, s).apply(null, e(l, a)),
        n = Sy(r, o - t[0], i - t[1], S, h, s);
      c = OS(u, f, _);
      g = qS(e, n);
      v = qS(c, g);
      p = ay(g, J);
      return E();
    }
    function E() {
      Symbol('JSCA_9380_9383');
      x = w = null;
      return M;
    }
    return function () {
      Symbol('JSCA_9384_9388');
      e = t.apply(this, arguments);
      M.invert = e.invert && T;
      return k();
    };
  }
  function by(t) {
    Symbol('JSCA_9390_9396');
    var n = 0,
      e = D / 3,
      r = yy(t),
      o = r(n, e);
    o.parallels = function (t) {
      Symbol('JSCA_9392_9394');
      return arguments.length
        ? r((n = t[0] * F), (e = t[1] * F))
        : [n * N, e * N];
    };
    return o;
  }
  function my(t) {
    Symbol('JSCA_9397_9406');
    var e = U(t);
    function n(t, n) {
      Symbol('JSCA_9399_9401');
      return [t * e, O(n) / e];
    }
    n.invert = function (t, n) {
      Symbol('JSCA_9402_9404');
      return [t / e, y0(n * e)];
    };
    return n;
  }
  function dy(t, n) {
    Symbol('JSCA_9407_9421');
    var e = O(t),
      o = (e + O(n)) / 2;
    if (q(o) < z) return my(t);
    var i = 1 + e * (2 * o - e),
      l = B(i) / o;
    function r(t, n) {
      Symbol('JSCA_9411_9414');
      var e = B(i - 2 * o * O(n)) / o;
      return [e * O((t *= o)), l - e * U(t)];
    }
    r.invert = function (t, n) {
      Symbol('JSCA_9415_9419');
      var e = l - n,
        r = l0(t, q(e)) * s0(e);
      if (e * o < 0) r -= D * s0(t) * s0(e);
      return [r / o, y0((i - (t * t + e * e) * o * o) / (2 * o))];
    };
    return r;
  }
  function Ay() {
    Symbol('JSCA_9422_9424');
    return by(dy).scale(155.424).center([0, 33.6442]);
  }
  function Cy() {
    Symbol('JSCA_9425_9427');
    return Ay()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
  }
  function Jy(r) {
    Symbol('JSCA_9428_9456');
    var o = r.length;
    return {
      point: function (t, n) {
        Symbol('JSCA_9431_9434');
        var e = -1;
        while (++e < o) r[e].point(t, n);
      },
      sphere: function () {
        Symbol('JSCA_9435_9438');
        var t = -1;
        while (++t < o) r[t].sphere();
      },
      lineStart: function () {
        Symbol('JSCA_9439_9442');
        var t = -1;
        while (++t < o) r[t].lineStart();
      },
      lineEnd: function () {
        Symbol('JSCA_9443_9446');
        var t = -1;
        while (++t < o) r[t].lineEnd();
      },
      polygonStart: function () {
        Symbol('JSCA_9447_9450');
        var t = -1;
        while (++t < o) r[t].polygonStart();
      },
      polygonEnd: function () {
        Symbol('JSCA_9451_9454');
        var t = -1;
        while (++t < o) r[t].polygonEnd();
      },
    };
  }
  function py() {
    Symbol('JSCA_9457_9509');
    var n,
      e,
      i = Cy(),
      o,
      l = Ay().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
      a,
      u = Ay().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
      f,
      r,
      _ = {
        point: function (t, n) {
          Symbol('JSCA_9459_9461');
          r = [t, n];
        },
      };
    function c(t) {
      Symbol('JSCA_9463_9466');
      var n = t[0],
        e = t[1];
      return (
        (r = null),
        (o.point(n, e), r) || (a.point(n, e), r) || (f.point(n, e), r)
      );
    }
    c.invert = function (t) {
      Symbol('JSCA_9467_9470');
      var n = i.scale(),
        e = i.translate(),
        r = (t[0] - e[0]) / n,
        o = (t[1] - e[1]) / n;
      return (
        o >= 0.12 && o < 0.234 && r >= -0.425 && r < -0.214
          ? l
          : o >= 0.166 && o < 0.234 && r >= -0.214 && r < -0.115
          ? u
          : i
      ).invert(t);
    };
    c.stream = function (t) {
      Symbol('JSCA_9471_9473');
      return n && e === t
        ? n
        : (n = Jy([i.stream((e = t)), l.stream(t), u.stream(t)]));
    };
    c.precision = function (t) {
      Symbol('JSCA_9474_9478');
      if (!arguments.length) return i.precision();
      i.precision(t), l.precision(t), u.precision(t);
      return s();
    };
    c.scale = function (t) {
      Symbol('JSCA_9479_9483');
      if (!arguments.length) return i.scale();
      i.scale(t), l.scale(t * 0.35), u.scale(t);
      return c.translate(i.translate());
    };
    c.translate = function (t) {
      Symbol('JSCA_9484_9491');
      if (!arguments.length) return i.translate();
      var n = i.scale(),
        e = +t[0],
        r = +t[1];
      o = i
        .translate(t)
        .clipExtent([
          [e - 0.455 * n, r - 0.238 * n],
          [e + 0.455 * n, r + 0.238 * n],
        ])
        .stream(_);
      a = l
        .translate([e - 0.307 * n, r + 0.201 * n])
        .clipExtent([
          [e - 0.425 * n + z, r + 0.12 * n + z],
          [e - 0.214 * n - z, r + 0.234 * n - z],
        ])
        .stream(_);
      f = u
        .translate([e - 0.205 * n, r + 0.212 * n])
        .clipExtent([
          [e - 0.214 * n + z, r + 0.166 * n + z],
          [e - 0.115 * n - z, r + 0.234 * n - z],
        ])
        .stream(_);
      return s();
    };
    c.fitExtent = function (t, n) {
      Symbol('JSCA_9492_9494');
      return ny(c, t, n);
    };
    c.fitSize = function (t, n) {
      Symbol('JSCA_9495_9497');
      return ey(c, t, n);
    };
    c.fitWidth = function (t, n) {
      Symbol('JSCA_9498_9500');
      return ry(c, t, n);
    };
    c.fitHeight = function (t, n) {
      Symbol('JSCA_9501_9503');
      return oy(c, t, n);
    };
    function s() {
      Symbol('JSCA_9504_9507');
      n = e = null;
      return c;
    }
    return c.scale(1070);
  }
  function gy(i) {
    Symbol('JSCA_9510_9516');
    return function (t, n) {
      Symbol('JSCA_9511_9515');
      var e = U(t),
        r = U(n),
        o = i(e * r);
      if (o === Infinity) return [2, 0];
      return [o * r * O(t), o * O(n)];
    };
  }
  function vy(l) {
    Symbol('JSCA_9517_9522');
    return function (t, n) {
      Symbol('JSCA_9518_9521');
      var e = B(t * t + n * n),
        r = l(e),
        o = O(r),
        i = U(r);
      return [l0(t * o, e * i), y0(e && (n * o) / e)];
    };
  }
  var xy = gy(function (t) {
    Symbol('JSCA_9523_9525');
    return B(2 / (1 + t));
  });
  xy.invert = vy(function (t) {
    Symbol('JSCA_9526_9528');
    return 2 * y0(t / 2);
  });
  function wy() {
    Symbol('JSCA_9529_9531');
    return hy(xy)
      .scale(124.75)
      .clipAngle(180 - 0.001);
  }
  var My = gy(function (t) {
    Symbol('JSCA_9532_9534');
    return (t = h0(t)) && t / O(t);
  });
  My.invert = vy(function (t) {
    Symbol('JSCA_9535_9537');
    return t;
  });
  function Ty() {
    Symbol('JSCA_9538_9540');
    return hy(My)
      .scale(79.4188)
      .clipAngle(180 - 0.001);
  }
  function ky(t, n) {
    Symbol('JSCA_9541_9543');
    return [t, _0(S0((R + n) / 2))];
  }
  ky.invert = function (t, n) {
    Symbol('JSCA_9544_9546');
    return [t, 2 * i0(u0(n)) - R];
  };
  function Ey() {
    Symbol('JSCA_9547_9549');
    return Ny(ky).scale(961 / o0);
  }
  function Ny(e) {
    Symbol('JSCA_9550_9569');
    var r = hy(e),
      n = r.center,
      o = r.scale,
      i = r.translate,
      l = r.clipExtent,
      a = null,
      u,
      f,
      _;
    r.scale = function (t) {
      Symbol('JSCA_9552_9554');
      return arguments.length ? (o(t), c()) : o();
    };
    r.translate = function (t) {
      Symbol('JSCA_9555_9557');
      return arguments.length ? (i(t), c()) : i();
    };
    r.center = function (t) {
      Symbol('JSCA_9558_9560');
      return arguments.length ? (n(t), c()) : n();
    };
    r.clipExtent = function (t) {
      Symbol('JSCA_9561_9563');
      return arguments.length
        ? (t == null
            ? (a = u = f = _ = null)
            : ((a = +t[0][0]), (u = +t[0][1]), (f = +t[1][0]), (_ = +t[1][1])),
          c())
        : a == null
        ? null
        : [
            [a, u],
            [f, _],
          ];
    };
    function c() {
      Symbol('JSCA_9564_9567');
      var t = D * o(),
        n = r(jS(r.rotate()).invert([0, 0]));
      return l(
        a == null
          ? [
              [n[0] - t, n[1] - t],
              [n[0] + t, n[1] + t],
            ]
          : e === ky
          ? [
              [Math.max(n[0] - t, a), u],
              [Math.min(n[0] + t, f), _],
            ]
          : [
              [a, Math.max(n[1] - t, u)],
              [f, Math.min(n[1] + t, _)],
            ]
      );
    }
    return c();
  }
  function Py(t) {
    Symbol('JSCA_9570_9572');
    return S0((R + t) / 2);
  }
  function zy(t, n) {
    Symbol('JSCA_9573_9591');
    var e = U(t),
      i = t === n ? O(t) : _0(e / U(n)) / _0(Py(n) / Py(t)),
      l = (e * c0(Py(t), i)) / i;
    if (!i) return ky;
    function r(t, n) {
      Symbol('JSCA_9576_9584');
      if (l > 0) {
        if (n < -R + z) n = -R + z;
      } else {
        if (n > R - z) n = R - z;
      }
      var e = l / c0(Py(n), i);
      return [e * O(i * t), l - e * U(i * t)];
    }
    r.invert = function (t, n) {
      Symbol('JSCA_9585_9589');
      var e = l - n,
        r = s0(i) * B(t * t + e * e),
        o = l0(t, q(e)) * s0(e);
      if (e * i < 0) o -= D * s0(t) * s0(e);
      return [o / i, 2 * i0(c0(l / r, 1 / i)) - R];
    };
    return r;
  }
  function Iy() {
    Symbol('JSCA_9592_9594');
    return by(zy).scale(109.5).parallels([30, 30]);
  }
  function $y(t, n) {
    Symbol('JSCA_9595_9597');
    return [t, n];
  }
  $y.invert = $y;
  function Dy() {
    Symbol('JSCA_9599_9601');
    return hy($y).scale(152.63);
  }
  function Ry(t, n) {
    Symbol('JSCA_9602_9615');
    var e = U(t),
      o = t === n ? O(t) : (e - U(n)) / (n - t),
      i = e / o + t;
    if (q(o) < z) return $y;
    function r(t, n) {
      Symbol('JSCA_9605_9608');
      var e = i - n,
        r = o * t;
      return [e * O(r), i - e * U(r)];
    }
    r.invert = function (t, n) {
      Symbol('JSCA_9609_9613');
      var e = i - n,
        r = l0(t, q(e)) * s0(e);
      if (e * o < 0) r -= D * s0(t) * s0(e);
      return [r / o, i - s0(o) * B(t * t + e * e)];
    };
    return r;
  }
  function Fy() {
    Symbol('JSCA_9616_9618');
    return by(Ry).scale(131.154).center([0, 13.9389]);
  }
  var qy = 1.340264,
    Uy = -0.081106,
    Oy = 893e-6,
    By = 0.003796,
    Yy = B(3) / 2,
    Ly = 12;
  function jy(t, n) {
    Symbol('JSCA_9620_9623');
    var e = y0(Yy * O(n)),
      r = e * e,
      o = r * r * r;
    return [
      (t * U(e)) / (Yy * (qy + 3 * Uy * r + o * (7 * Oy + 9 * By * r))),
      e * (qy + Uy * r + o * (Oy + By * r)),
    ];
  }
  jy.invert = function (t, n) {
    Symbol('JSCA_9624_9633');
    var e = n,
      r = e * e,
      o = r * r * r;
    for (var i = 0, l, a, u; i < Ly; ++i) {
      a = e * (qy + Uy * r + o * (Oy + By * r)) - n;
      u = qy + 3 * Uy * r + o * (7 * Oy + 9 * By * r);
      (e -= l = a / u), (r = e * e), (o = r * r * r);
      if (q(l) < e0) break;
    }
    return [
      (Yy * t * (qy + 3 * Uy * r + o * (7 * Oy + 9 * By * r))) / U(e),
      y0(O(e) / Yy),
    ];
  };
  function Hy() {
    Symbol('JSCA_9634_9636');
    return hy(jy).scale(177.158);
  }
  function Xy(t, n) {
    Symbol('JSCA_9637_9640');
    var e = U(n),
      r = U(t) * e;
    return [(e * O(t)) / r, O(n) / r];
  }
  Xy.invert = vy(i0);
  function Gy() {
    Symbol('JSCA_9642_9644');
    return hy(Xy).scale(144.049).clipAngle(60);
  }
  function Vy() {
    Symbol('JSCA_9645_9713');
    var n = 1,
      o = 0,
      i = 0,
      e = 1,
      r = 1,
      l = 0,
      a,
      u,
      f = null,
      _,
      c,
      s,
      S = 1,
      h = 1,
      y = K2({
        point: function (t, n) {
          Symbol('JSCA_9647_9650');
          var e = C([t, n]);
          this.stream.point(e[0], e[1]);
        },
      }),
      b = Bh,
      m,
      d;
    function A() {
      Symbol('JSCA_9652_9657');
      S = n * e;
      h = n * r;
      m = d = null;
      return C;
    }
    function C(t) {
      Symbol('JSCA_9658_9666');
      var n = t[0] * S,
        e = t[1] * h;
      if (l) {
        var r = e * a - n * u;
        n = n * a + e * u;
        e = r;
      }
      return [n + o, e + i];
    }
    C.invert = function (t) {
      Symbol('JSCA_9667_9675');
      var n = t[0] - o,
        e = t[1] - i;
      if (l) {
        var r = e * a + n * u;
        n = n * a - e * u;
        e = r;
      }
      return [n / S, e / h];
    };
    C.stream = function (t) {
      Symbol('JSCA_9676_9678');
      return m && d === t ? m : (m = y(b((d = t))));
    };
    C.postclip = function (t) {
      Symbol('JSCA_9679_9681');
      return arguments.length ? ((b = t), (f = _ = c = s = null), A()) : b;
    };
    C.clipExtent = function (t) {
      Symbol('JSCA_9682_9684');
      return arguments.length
        ? ((b =
            t == null
              ? ((f = _ = c = s = null), Bh)
              : Sh(
                  (f = +t[0][0]),
                  (_ = +t[0][1]),
                  (c = +t[1][0]),
                  (s = +t[1][1])
                )),
          A())
        : f == null
        ? null
        : [
            [f, _],
            [c, s],
          ];
    };
    C.scale = function (t) {
      Symbol('JSCA_9685_9687');
      return arguments.length ? ((n = +t), A()) : n;
    };
    C.translate = function (t) {
      Symbol('JSCA_9688_9690');
      return arguments.length ? ((o = +t[0]), (i = +t[1]), A()) : [o, i];
    };
    C.angle = function (t) {
      Symbol('JSCA_9691_9693');
      return arguments.length
        ? ((l = (t % 360) * F), (u = O(l)), (a = U(l)), A())
        : l * N;
    };
    C.reflectX = function (t) {
      Symbol('JSCA_9694_9696');
      return arguments.length ? ((e = t ? -1 : 1), A()) : e < 0;
    };
    C.reflectY = function (t) {
      Symbol('JSCA_9697_9699');
      return arguments.length ? ((r = t ? -1 : 1), A()) : r < 0;
    };
    C.fitExtent = function (t, n) {
      Symbol('JSCA_9700_9702');
      return ny(C, t, n);
    };
    C.fitSize = function (t, n) {
      Symbol('JSCA_9703_9705');
      return ey(C, t, n);
    };
    C.fitWidth = function (t, n) {
      Symbol('JSCA_9706_9708');
      return ry(C, t, n);
    };
    C.fitHeight = function (t, n) {
      Symbol('JSCA_9709_9711');
      return oy(C, t, n);
    };
    return C;
  }
  function Wy(t, n) {
    Symbol('JSCA_9714_9717');
    var e = n * n,
      r = e * e;
    return [
      t *
        (0.8707 -
          0.131979 * e +
          r * (-0.013791 + r * (0.003971 * e - 0.001529 * r))),
      n *
        (1.007226 +
          e * (0.015085 + r * (-0.044475 + 0.028874 * e - 0.005916 * r))),
    ];
  }
  Wy.invert = function (t, n) {
    Symbol('JSCA_9718_9725');
    var e = n,
      r = 25,
      o;
    do {
      var i = e * e,
        l = i * i;
      e -= o =
        (e *
          (1.007226 +
            i * (0.015085 + l * (-0.044475 + 0.028874 * i - 0.005916 * l))) -
          n) /
        (1.007226 +
          i *
            (0.015085 * 3 +
              l * (-0.044475 * 7 + 0.028874 * 9 * i - 0.005916 * 11 * l)));
    } while (q(o) > z && --r > 0);
    return [
      t /
        (0.8707 +
          (i = e * e) *
            (-0.131979 +
              i * (-0.013791 + i * i * i * (0.003971 - 0.001529 * i)))),
      e,
    ];
  };
  function Zy() {
    Symbol('JSCA_9726_9728');
    return hy(Wy).scale(175.295);
  }
  function Ky(t, n) {
    Symbol('JSCA_9729_9731');
    return [U(n) * O(t), O(n)];
  }
  Ky.invert = vy(y0);
  function Qy() {
    Symbol('JSCA_9733_9735');
    return hy(Ky)
      .scale(249.5)
      .clipAngle(90 + z);
  }
  function tb(t, n) {
    Symbol('JSCA_9736_9739');
    var e = U(n),
      r = 1 + U(t) * e;
    return [(e * O(t)) / r, O(n) / r];
  }
  tb.invert = vy(function (t) {
    Symbol('JSCA_9740_9742');
    return 2 * i0(t);
  });
  function nb() {
    Symbol('JSCA_9743_9745');
    return hy(tb).scale(250).clipAngle(142);
  }
  function eb(t, n) {
    Symbol('JSCA_9746_9748');
    return [_0(S0((R + n) / 2)), -t];
  }
  eb.invert = function (t, n) {
    Symbol('JSCA_9749_9751');
    return [-n, 2 * i0(u0(t)) - R];
  };
  function rb() {
    Symbol('JSCA_9752_9761');
    var t = Ny(eb),
      n = t.center,
      e = t.rotate;
    t.center = function (t) {
      Symbol('JSCA_9754_9756');
      return arguments.length ? n([-t[1], t[0]]) : ((t = n()), [t[1], -t[0]]);
    };
    t.rotate = function (t) {
      Symbol('JSCA_9757_9759');
      return arguments.length
        ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90])
        : ((t = e()), [t[0], t[1], t[2] - 90]);
    };
    return e([0, 0, 90]).scale(159.155);
  }
  function ob(t, n) {
    Symbol('JSCA_9762_9764');
    return t.parent === n.parent ? 1 : 2;
  }
  function ib(t) {
    Symbol('JSCA_9765_9767');
    return t.reduce(lb, 0) / t.length;
  }
  function lb(t, n) {
    Symbol('JSCA_9768_9770');
    return t + n.x;
  }
  function ab(t) {
    Symbol('JSCA_9771_9773');
    return 1 + t.reduce(ub, 0);
  }
  function ub(t, n) {
    Symbol('JSCA_9774_9776');
    return Math.max(t, n.y);
  }
  function fb(t) {
    Symbol('JSCA_9777_9781');
    var n;
    while ((n = t.children)) t = n[0];
    return t;
  }
  function _b(t) {
    Symbol('JSCA_9782_9786');
    var n;
    while ((n = t.children)) t = n[n.length - 1];
    return t;
  }
  function cb() {
    Symbol('JSCA_9787_9821');
    var a = ob,
      u = 1,
      f = 1,
      _ = false;
    function n(n) {
      Symbol('JSCA_9789_9810');
      var e,
        r = 0;
      n.eachAfter(function (t) {
        Symbol('JSCA_9791_9801');
        var n = t.children;
        if (n) {
          t.x = ib(n);
          t.y = ab(n);
        } else {
          t.x = e ? (r += a(t, e)) : 0;
          t.y = 0;
          e = t;
        }
      });
      var t = fb(n),
        o = _b(n),
        i = t.x - a(t, o) / 2,
        l = o.x + a(o, t) / 2;
      return n.eachAfter(
        _
          ? function (t) {
              Symbol('JSCA_9803_9806');
              t.x = (t.x - n.x) * u;
              t.y = (n.y - t.y) * f;
            }
          : function (t) {
              Symbol('JSCA_9806_9809');
              t.x = ((t.x - i) / (l - i)) * u;
              t.y = (1 - (n.y ? t.y / n.y : 1)) * f;
            }
      );
    }
    n.separation = function (t) {
      Symbol('JSCA_9811_9813');
      return arguments.length ? ((a = t), n) : a;
    };
    n.size = function (t) {
      Symbol('JSCA_9814_9816');
      return arguments.length
        ? ((_ = false), (u = +t[0]), (f = +t[1]), n)
        : _
        ? null
        : [u, f];
    };
    n.nodeSize = function (t) {
      Symbol('JSCA_9817_9819');
      return arguments.length
        ? ((_ = true), (u = +t[0]), (f = +t[1]), n)
        : _
        ? [u, f]
        : null;
    };
    return n;
  }
  function sb(t) {
    Symbol('JSCA_9822_9826');
    var n = 0,
      e = t.children,
      r = e && e.length;
    if (!r) n = 1;
    else while (--r >= 0) n += e[r].value;
    t.value = n;
  }
  function Sb() {
    Symbol('JSCA_9827_9829');
    return this.eachAfter(sb);
  }
  function hb(t, n) {
    Symbol('JSCA_9830_9836');
    let e = -1;
    for (const r of this) {
      t.call(n, r, ++e, this);
    }
    return this;
  }
  function yb(t, n) {
    Symbol('JSCA_9837_9848');
    var e = this,
      r = [e],
      o,
      i,
      l = -1;
    while ((e = r.pop())) {
      t.call(n, e, ++l, this);
      if ((o = e.children)) {
        for (i = o.length - 1; i >= 0; --i) {
          r.push(o[i]);
        }
      }
    }
    return this;
  }
  function bb(t, n) {
    Symbol('JSCA_9849_9863');
    var e = this,
      r = [e],
      o = [],
      i,
      l,
      a,
      u = -1;
    while ((e = r.pop())) {
      o.push(e);
      if ((i = e.children)) {
        for (l = 0, a = i.length; l < a; ++l) {
          r.push(i[l]);
        }
      }
    }
    while ((e = o.pop())) {
      t.call(n, e, ++u, this);
    }
    return this;
  }
  function mb(t, n) {
    Symbol('JSCA_9864_9871');
    let e = -1;
    for (const r of this) {
      if (t.call(n, r, ++e, this)) {
        return r;
      }
    }
  }
  function db(o) {
    Symbol('JSCA_9872_9878');
    return this.eachAfter(function (t) {
      Symbol('JSCA_9873_9877');
      var n = +o(t.data) || 0,
        e = t.children,
        r = e && e.length;
      while (--r >= 0) n += e[r].value;
      t.value = n;
    });
  }
  function Ab(n) {
    Symbol('JSCA_9879_9885');
    return this.eachBefore(function (t) {
      Symbol('JSCA_9880_9884');
      if (t.children) {
        t.children.sort(n);
      }
    });
  }
  function Cb(t) {
    Symbol('JSCA_9886_9898');
    var n = this,
      e = Jb(n, t),
      r = [n];
    while (n !== e) {
      n = n.parent;
      r.push(n);
    }
    var o = r.length;
    while (t !== e) {
      r.splice(o, 0, t);
      t = t.parent;
    }
    return r;
  }
  function Jb(t, n) {
    Symbol('JSCA_9899_9910');
    if (t === n) return t;
    var e = t.ancestors(),
      r = n.ancestors(),
      o = null;
    t = e.pop();
    n = r.pop();
    while (t === n) {
      o = t;
      t = e.pop();
      n = r.pop();
    }
    return o;
  }
  function pb() {
    Symbol('JSCA_9911_9917');
    var t = this,
      n = [t];
    while ((t = t.parent)) {
      n.push(t);
    }
    return n;
  }
  function gb() {
    Symbol('JSCA_9918_9920');
    return Array.from(this);
  }
  function vb() {
    Symbol('JSCA_9921_9929');
    var n = [];
    this.eachBefore(function (t) {
      Symbol('JSCA_9923_9927');
      if (!t.children) {
        n.push(t);
      }
    });
    return n;
  }
  function xb() {
    Symbol('JSCA_9930_9941');
    var n = this,
      e = [];
    n.each(function (t) {
      Symbol('JSCA_9932_9939');
      if (t !== n) {
        e.push({ source: t.parent, target: t });
      }
    });
    return e;
  }
  function* wb() {
    Symbol('JSCA_9942_9955');
    var t = this,
      n,
      e = [t],
      r,
      o,
      i;
    do {
      (n = e.reverse()), (e = []);
      while ((t = n.pop())) {
        yield t;
        if ((r = t.children)) {
          for (o = 0, i = r.length; o < i; ++o) {
            e.push(r[o]);
          }
        }
      }
    } while (e.length);
  }
  function Mb(t, n) {
    Symbol('JSCA_9956_9975');
    if (t instanceof Map) {
      t = [undefined, t];
      if (n === undefined) n = Eb;
    } else if (n === undefined) {
      n = kb;
    }
    var e = new zb(t),
      r,
      o = [e],
      i,
      l,
      a,
      u;
    while ((r = o.pop())) {
      if ((l = n(r.data)) && (u = (l = Array.from(l)).length)) {
        r.children = l;
        for (a = u - 1; a >= 0; --a) {
          o.push((i = l[a] = new zb(l[a])));
          i.parent = r;
          i.depth = r.depth + 1;
        }
      }
    }
    return e.eachBefore(Pb);
  }
  function Tb() {
    Symbol('JSCA_9976_9978');
    return Mb(this).eachBefore(Nb);
  }
  function kb(t) {
    Symbol('JSCA_9979_9981');
    return t.children;
  }
  function Eb(t) {
    Symbol('JSCA_9982_9984');
    return Array.isArray(t) ? t[1] : null;
  }
  function Nb(t) {
    Symbol('JSCA_9985_9988');
    if (t.data.value !== undefined) t.value = t.data.value;
    t.data = t.data.data;
  }
  function Pb(t) {
    Symbol('JSCA_9989_9992');
    var n = 0;
    do {
      t.height = n;
    } while ((t = t.parent) && t.height < ++n);
  }
  function zb(t) {
    Symbol('JSCA_9993_9997');
    this.data = t;
    this.depth = this.height = 0;
    this.parent = null;
  }
  zb.prototype = Mb.prototype = {
    constructor: zb,
    count: Sb,
    each: hb,
    eachAfter: bb,
    eachBefore: yb,
    find: mb,
    sum: db,
    sort: Ab,
    path: Cb,
    ancestors: pb,
    descendants: gb,
    leaves: vb,
    links: xb,
    copy: Tb,
    [Symbol.iterator]: wb,
  };
  function Ib(t) {
    Symbol('JSCA_10015_10017');
    return t == null ? null : $b(t);
  }
  function $b(t) {
    Symbol('JSCA_10018_10021');
    if (typeof t !== 'function') throw new Error();
    return t;
  }
  function Db() {
    Symbol('JSCA_10022_10024');
    return 0;
  }
  function Rb(t) {
    Symbol('JSCA_10025_10029');
    return function () {
      Symbol('JSCA_10026_10028');
      return t;
    };
  }
  const Fb = 1664525;
  const qb = 1013904223;
  const Ub = 4294967296;
  function Ob() {
    Symbol('JSCA_10033_10036');
    let t = 1;
    return () => (t = (Fb * t + qb) % Ub) / Ub;
  }
  function Bb(t) {
    Symbol('JSCA_10037_10039');
    return typeof t === 'object' && 'length' in t ? t : Array.from(t);
  }
  function Yb(t, n) {
    Symbol('JSCA_10040_10049');
    let e = t.length,
      r,
      o;
    while (e) {
      o = (n() * e--) | 0;
      r = t[e];
      t[e] = t[o];
      t[o] = r;
    }
    return t;
  }
  function Lb(t) {
    Symbol('JSCA_10050_10052');
    return jb(t, Ob());
  }
  function jb(t, n) {
    Symbol('JSCA_10053_10060');
    var e = 0,
      r = (t = Yb(Array.from(t), n)).length,
      o = [],
      i,
      l;
    while (e < r) {
      i = t[e];
      if (l && Gb(l, i)) ++e;
      else (l = Wb((o = Hb(o, i)))), (e = 0);
    }
    return l;
  }
  function Hb(t, n) {
    Symbol('JSCA_10061_10077');
    var e, r;
    if (Vb(n, t)) return [n];
    for (e = 0; e < t.length; ++e) {
      if (Xb(n, t[e]) && Vb(Kb(t[e], n), t)) {
        return [t[e], n];
      }
    }
    for (e = 0; e < t.length - 1; ++e) {
      for (r = e + 1; r < t.length; ++r) {
        if (
          Xb(Kb(t[e], t[r]), n) &&
          Xb(Kb(t[e], n), t[r]) &&
          Xb(Kb(t[r], n), t[e]) &&
          Vb(Qb(t[e], t[r], n), t)
        ) {
          return [t[e], t[r], n];
        }
      }
    }
    throw new Error();
  }
  function Xb(t, n) {
    Symbol('JSCA_10078_10081');
    var e = t.r - n.r,
      r = n.x - t.x,
      o = n.y - t.y;
    return e < 0 || e * e < r * r + o * o;
  }
  function Gb(t, n) {
    Symbol('JSCA_10082_10085');
    var e = t.r - n.r + Math.max(t.r, n.r, 1) * 1e-9,
      r = n.x - t.x,
      o = n.y - t.y;
    return e > 0 && e * e > r * r + o * o;
  }
  function Vb(t, n) {
    Symbol('JSCA_10086_10093');
    for (var e = 0; e < n.length; ++e) {
      if (!Gb(t, n[e])) {
        return false;
      }
    }
    return true;
  }
  function Wb(t) {
    Symbol('JSCA_10094_10103');
    switch (t.length) {
      case 1:
        return Zb(t[0]);
      case 2:
        return Kb(t[0], t[1]);
      case 3:
        return Qb(t[0], t[1], t[2]);
    }
  }
  function Zb(t) {
    Symbol('JSCA_10104_10110');
    return { x: t.x, y: t.y, r: t.r };
  }
  function Kb(t, n) {
    Symbol('JSCA_10111_10118');
    var e = t.x,
      r = t.y,
      o = t.r,
      i = n.x,
      l = n.y,
      a = n.r,
      u = i - e,
      f = l - r,
      _ = a - o,
      c = Math.sqrt(u * u + f * f);
    return {
      x: (e + i + (u / c) * _) / 2,
      y: (r + l + (f / c) * _) / 2,
      r: (c + o + a) / 2,
    };
  }
  function Qb(t, n, e) {
    Symbol('JSCA_10119_10126');
    var r = t.x,
      o = t.y,
      i = t.r,
      l = n.x,
      a = n.y,
      u = n.r,
      f = e.x,
      _ = e.y,
      c = e.r,
      s = r - l,
      S = r - f,
      h = o - a,
      y = o - _,
      b = u - i,
      m = c - i,
      d = r * r + o * o - i * i,
      A = d - l * l - a * a + u * u,
      C = d - f * f - _ * _ + c * c,
      J = S * h - s * y,
      p = (h * C - y * A) / (J * 2) - r,
      g = (y * b - h * m) / J,
      v = (S * A - s * C) / (J * 2) - o,
      x = (s * m - S * b) / J,
      w = g * g + x * x - 1,
      M = 2 * (i + p * g + v * x),
      T = p * p + v * v - i * i,
      k = -(Math.abs(w) > 1e-6
        ? (M + Math.sqrt(M * M - 4 * w * T)) / (2 * w)
        : T / M);
    return { x: r + p + g * k, y: o + v + x * k, r: k };
  }
  function tm(t, n, e) {
    Symbol('JSCA_10127_10147');
    var r = t.x - n.x,
      o,
      i,
      l = t.y - n.y,
      a,
      u,
      f = r * r + l * l;
    if (f) {
      (i = n.r + e.r), (i *= i);
      (u = t.r + e.r), (u *= u);
      if (i > u) {
        o = (f + u - i) / (2 * f);
        a = Math.sqrt(Math.max(0, u / f - o * o));
        e.x = t.x - o * r - a * l;
        e.y = t.y - o * l + a * r;
      } else {
        o = (f + i - u) / (2 * f);
        a = Math.sqrt(Math.max(0, i / f - o * o));
        e.x = n.x + o * r - a * l;
        e.y = n.y + o * l + a * r;
      }
    } else {
      e.x = n.x + e.r;
      e.y = n.y;
    }
  }
  function nm(t, n) {
    Symbol('JSCA_10148_10151');
    var e = t.r + n.r - 1e-6,
      r = n.x - t.x,
      o = n.y - t.y;
    return e > 0 && e * e > r * r + o * o;
  }
  function em(t) {
    Symbol('JSCA_10152_10155');
    var n = t._,
      e = t.next._,
      r = n.r + e.r,
      o = (n.x * e.r + e.x * n.r) / r,
      i = (n.y * e.r + e.y * n.r) / r;
    return o * o + i * i;
  }
  function rm(t) {
    Symbol('JSCA_10156_10160');
    this._ = t;
    this.next = null;
    this.previous = null;
  }
  function om(t, n) {
    Symbol('JSCA_10161_10205');
    if (!(i = (t = Bb(t)).length)) return 0;
    var e, r, o, i, l, a, u, f, _, c, s;
    (e = t[0]), (e.x = 0), (e.y = 0);
    if (!(i > 1)) return e.r;
    (r = t[1]), (e.x = -r.r), (r.x = e.r), (r.y = 0);
    if (!(i > 2)) return e.r + r.r;
    tm(r, e, (o = t[2]));
    (e = new rm(e)), (r = new rm(r)), (o = new rm(o));
    e.next = o.previous = r;
    r.next = e.previous = o;
    o.next = r.previous = e;
    t: for (u = 3; u < i; ++u) {
      tm(e._, r._, (o = t[u])), (o = new rm(o));
      (f = r.next), (_ = e.previous), (c = r._.r), (s = e._.r);
      do {
        if (c <= s) {
          if (nm(f._, o._)) {
            (r = f), (e.next = r), (r.previous = e), --u;
            continue t;
          }
          (c += f._.r), (f = f.next);
        } else {
          if (nm(_._, o._)) {
            (e = _), (e.next = r), (r.previous = e), --u;
            continue t;
          }
          (s += _._.r), (_ = _.previous);
        }
      } while (f !== _.next);
      (o.previous = e), (o.next = r), (e.next = r.previous = r = o);
      l = em(e);
      while ((o = o.next) !== r) {
        if ((a = em(o)) < l) {
          (e = o), (l = a);
        }
      }
      r = e.next;
    }
    (e = [r._]), (o = r);
    while ((o = o.next) !== r) e.push(o._);
    o = jb(e, n);
    for (u = 0; u < i; ++u) (e = t[u]), (e.x -= o.x), (e.y -= o.y);
    return o.r;
  }
  function im(t) {
    Symbol('JSCA_10206_10209');
    om(t, Ob());
    return t;
  }
  function lm(t) {
    Symbol('JSCA_10210_10212');
    return Math.sqrt(t.value);
  }
  function am() {
    Symbol('JSCA_10213_10235');
    var e = null,
      r = 1,
      o = 1,
      i = Db;
    function n(t) {
      Symbol('JSCA_10215_10224');
      const n = Ob();
      (t.x = r / 2), (t.y = o / 2);
      if (e) {
        t.eachBefore(um(e)).eachAfter(fm(i, 0.5, n)).eachBefore(_m(1));
      } else {
        t.eachBefore(um(lm))
          .eachAfter(fm(Db, 1, n))
          .eachAfter(fm(i, t.r / Math.min(r, o), n))
          .eachBefore(_m(Math.min(r, o) / (2 * t.r)));
      }
      return t;
    }
    n.radius = function (t) {
      Symbol('JSCA_10225_10227');
      return arguments.length ? ((e = Ib(t)), n) : e;
    };
    n.size = function (t) {
      Symbol('JSCA_10228_10230');
      return arguments.length ? ((r = +t[0]), (o = +t[1]), n) : [r, o];
    };
    n.padding = function (t) {
      Symbol('JSCA_10231_10233');
      return arguments.length
        ? ((i = typeof t === 'function' ? t : Rb(+t)), n)
        : i;
    };
    return n;
  }
  function um(n) {
    Symbol('JSCA_10236_10242');
    return function (t) {
      Symbol('JSCA_10237_10241');
      if (!t.children) {
        t.r = Math.max(0, +n(t) || 0);
      }
    };
  }
  function fm(l, a, u) {
    Symbol('JSCA_10243_10253');
    return function (t) {
      Symbol('JSCA_10244_10252');
      if ((n = t.children)) {
        var n,
          e,
          r = n.length,
          o = l(t) * a || 0,
          i;
        if (o) for (e = 0; e < r; ++e) n[e].r += o;
        i = om(n, u);
        if (o) for (e = 0; e < r; ++e) n[e].r -= o;
        t.r = i + o;
      }
    };
  }
  function _m(e) {
    Symbol('JSCA_10254_10263');
    return function (t) {
      Symbol('JSCA_10255_10262');
      var n = t.parent;
      t.r *= e;
      if (n) {
        t.x = n.x + e * t.x;
        t.y = n.y + e * t.y;
      }
    };
  }
  function cm(t) {
    Symbol('JSCA_10264_10269');
    t.x0 = Math.round(t.x0);
    t.y0 = Math.round(t.y0);
    t.x1 = Math.round(t.x1);
    t.y1 = Math.round(t.y1);
  }
  function sm(t, n, e, r, o) {
    Symbol('JSCA_10270_10276');
    var i = t.children,
      l,
      a = -1,
      u = i.length,
      f = t.value && (r - n) / t.value;
    while (++a < u) {
      (l = i[a]), (l.y0 = e), (l.y1 = o);
      (l.x0 = n), (l.x1 = n += l.value * f);
    }
  }
  function Sm() {
    Symbol('JSCA_10277_10312');
    var e = 1,
      r = 1,
      a = 0,
      o = false;
    function n(t) {
      Symbol('JSCA_10279_10287');
      var n = t.height + 1;
      t.x0 = t.y0 = a;
      t.x1 = e;
      t.y1 = r / n;
      t.eachBefore(i(r, n));
      if (o) t.eachBefore(cm);
      return t;
    }
    function i(i, l) {
      Symbol('JSCA_10288_10301');
      return function (t) {
        Symbol('JSCA_10289_10300');
        if (t.children) {
          sm(t, t.x0, (i * (t.depth + 1)) / l, t.x1, (i * (t.depth + 2)) / l);
        }
        var n = t.x0,
          e = t.y0,
          r = t.x1 - a,
          o = t.y1 - a;
        if (r < n) n = r = (n + r) / 2;
        if (o < e) e = o = (e + o) / 2;
        t.x0 = n;
        t.y0 = e;
        t.x1 = r;
        t.y1 = o;
      };
    }
    n.round = function (t) {
      Symbol('JSCA_10302_10304');
      return arguments.length ? ((o = !!t), n) : o;
    };
    n.size = function (t) {
      Symbol('JSCA_10305_10307');
      return arguments.length ? ((e = +t[0]), (r = +t[1]), n) : [e, r];
    };
    n.padding = function (t) {
      Symbol('JSCA_10308_10310');
      return arguments.length ? ((a = +t), n) : a;
    };
    return n;
  }
  var hm = { depth: -1 },
    ym = {},
    bm = {};
  function mm(t) {
    Symbol('JSCA_10316_10318');
    return t.id;
  }
  function dm(t) {
    Symbol('JSCA_10319_10321');
    return t.parentId;
  }
  function Am() {
    Symbol('JSCA_10322_10394');
    var b = mm,
      m = dm,
      d;
    function n(e) {
      Symbol('JSCA_10324_10383');
      var n = Array.from(e),
        t = b,
        r = m,
        o,
        i,
        l,
        a,
        u,
        f,
        _,
        c,
        s = new Map();
      if (d != null) {
        const S = n.map((t, n) => Cm(d(t, n, e)));
        const h = S.map(Jm);
        const y = new Set(S).add('');
        for (const l of h) {
          if (!y.has(l)) {
            y.add(l);
            S.push(l);
            h.push(Jm(l));
            n.push(bm);
          }
        }
        t = (t, n) => S[n];
        r = (t, n) => h[n];
      }
      for (l = 0, o = n.length; l < o; ++l) {
        (i = n[l]), (f = n[l] = new zb(i));
        if ((_ = t(i, l, e)) != null && (_ += '')) {
          c = f.id = _;
          s.set(c, s.has(c) ? ym : f);
        }
        if ((_ = r(i, l, e)) != null && (_ += '')) {
          f.parent = _;
        }
      }
      for (l = 0; l < o; ++l) {
        f = n[l];
        if ((_ = f.parent)) {
          u = s.get(_);
          if (!u) throw new Error('missing: ' + _);
          if (u === ym) throw new Error('ambiguous: ' + _);
          if (u.children) u.children.push(f);
          else u.children = [f];
          f.parent = u;
        } else {
          if (a) throw new Error('multiple roots');
          a = f;
        }
      }
      if (!a) throw new Error('no root');
      if (d != null) {
        while (a.data === bm && a.children.length === 1) {
          (a = a.children[0]), --o;
        }
        for (let t = n.length - 1; t >= 0; --t) {
          f = n[t];
          if (f.data !== bm) break;
          f.data = null;
        }
      }
      a.parent = hm;
      a.eachBefore(function (t) {
        Symbol('JSCA_10376_10379');
        t.depth = t.parent.depth + 1;
        --o;
      }).eachBefore(Pb);
      a.parent = null;
      if (o > 0) throw new Error('cycle');
      return a;
    }
    n.id = function (t) {
      Symbol('JSCA_10384_10386');
      return arguments.length ? ((b = Ib(t)), n) : b;
    };
    n.parentId = function (t) {
      Symbol('JSCA_10387_10389');
      return arguments.length ? ((m = Ib(t)), n) : m;
    };
    n.path = function (t) {
      Symbol('JSCA_10390_10392');
      return arguments.length ? ((d = Ib(t)), n) : d;
    };
    return n;
  }
  function Cm(t) {
    Symbol('JSCA_10395_10400');
    t = `${t}`;
    let n = t.length;
    if (pm(t, n - 1) && !pm(t, n - 2)) t = t.slice(0, -1);
    return t[0] === '/' ? t : `/${t}`;
  }
  function Jm(t) {
    Symbol('JSCA_10401_10406');
    let n = t.length;
    if (n < 2) return '';
    while (--n > 1) if (pm(t, n)) break;
    return t.slice(0, n);
  }
  function pm(n, e) {
    Symbol('JSCA_10407_10414');
    if (n[e] === '/') {
      let t = 0;
      while (e > 0 && n[--e] === '\\') ++t;
      if ((t & 1) === 0) return true;
    }
    return false;
  }
  function gm(t, n) {
    Symbol('JSCA_10415_10417');
    return t.parent === n.parent ? 1 : 2;
  }
  function vm(t) {
    Symbol('JSCA_10418_10421');
    var n = t.children;
    return n ? n[0] : t.t;
  }
  function xm(t) {
    Symbol('JSCA_10422_10425');
    var n = t.children;
    return n ? n[n.length - 1] : t.t;
  }
  function wm(t, n, e) {
    Symbol('JSCA_10426_10433');
    var r = e / (n.i - t.i);
    n.c -= r;
    n.s += e;
    t.c += r;
    n.z += e;
    n.m += e;
  }
  function Mm(t) {
    Symbol('JSCA_10434_10442');
    var n = 0,
      e = 0,
      r = t.children,
      o = r.length,
      i;
    while (--o >= 0) {
      i = r[o];
      i.z += n;
      i.m += n;
      n += i.s + (e += i.c);
    }
  }
  function Tm(t, n, e) {
    Symbol('JSCA_10443_10445');
    return t.a.parent === n.parent ? t.a : e;
  }
  function km(t, n) {
    Symbol('JSCA_10446_10458');
    this._ = t;
    this.parent = null;
    this.children = null;
    this.A = null;
    this.a = this;
    this.z = 0;
    this.m = 0;
    this.c = 0;
    this.s = 0;
    this.t = null;
    this.i = n;
  }
  km.prototype = Object.create(zb.prototype);
  function Em(t) {
    Symbol('JSCA_10460_10473');
    var n = new km(t, 0),
      e,
      r = [n],
      o,
      i,
      l,
      a;
    while ((e = r.pop())) {
      if ((i = e._.children)) {
        e.children = new Array((a = i.length));
        for (l = a - 1; l >= 0; --l) {
          r.push((o = e.children[l] = new km(i[l], l)));
          o.parent = e;
        }
      }
    }
    (n.parent = new km(null, 0)).children = [n];
    return n;
  }
  function Nm() {
    Symbol('JSCA_10474_10559');
    var s = gm,
      f = 1,
      _ = 1,
      c = null;
    function n(t) {
      Symbol('JSCA_10476_10494');
      var n = Em(t);
      n.eachAfter(S), (n.parent.m = -n.z);
      n.eachBefore(h);
      if (c) t.eachBefore(y);
      else {
        var e = t,
          r = t,
          o = t;
        t.eachBefore(function (t) {
          Symbol('JSCA_10482_10486');
          if (t.x < e.x) e = t;
          if (t.x > r.x) r = t;
          if (t.depth > o.depth) o = t;
        });
        var i = e === r ? 1 : s(e, r) / 2,
          l = i - e.x,
          a = f / (r.x + i + l),
          u = _ / (o.depth || 1);
        t.eachBefore(function (t) {
          Symbol('JSCA_10488_10491');
          t.x = (t.x + l) * a;
          t.y = t.depth * u;
        });
      }
      return t;
    }
    function S(t) {
      Symbol('JSCA_10495_10510');
      var n = t.children,
        e = t.parent.children,
        r = t.i ? e[t.i - 1] : null;
      if (n) {
        Mm(t);
        var o = (n[0].z + n[n.length - 1].z) / 2;
        if (r) {
          t.z = r.z + s(t._, r._);
          t.m = t.z - o;
        } else {
          t.z = o;
        }
      } else if (r) {
        t.z = r.z + s(t._, r._);
      }
      t.parent.A = i(t, r, t.parent.A || e[0]);
    }
    function h(t) {
      Symbol('JSCA_10511_10514');
      t._.x = t.z + t.parent.m;
      t.m += t.parent.m;
    }
    function i(t, n, e) {
      Symbol('JSCA_10515_10544');
      if (n) {
        var r = t,
          o = t,
          i = n,
          l = r.parent.children[0],
          a = r.m,
          u = o.m,
          f = i.m,
          _ = l.m,
          c;
        while (((i = xm(i)), (r = vm(r)), i && r)) {
          l = vm(l);
          o = xm(o);
          o.a = t;
          c = i.z + f - r.z - a + s(i._, r._);
          if (c > 0) {
            wm(Tm(i, t, e), t, c);
            a += c;
            u += c;
          }
          f += i.m;
          a += r.m;
          _ += l.m;
          u += o.m;
        }
        if (i && !xm(o)) {
          o.t = i;
          o.m += f - u;
        }
        if (r && !vm(l)) {
          l.t = r;
          l.m += a - _;
          e = t;
        }
      }
      return e;
    }
    function y(t) {
      Symbol('JSCA_10545_10548');
      t.x *= f;
      t.y = t.depth * _;
    }
    n.separation = function (t) {
      Symbol('JSCA_10549_10551');
      return arguments.length ? ((s = t), n) : s;
    };
    n.size = function (t) {
      Symbol('JSCA_10552_10554');
      return arguments.length
        ? ((c = false), (f = +t[0]), (_ = +t[1]), n)
        : c
        ? null
        : [f, _];
    };
    n.nodeSize = function (t) {
      Symbol('JSCA_10555_10557');
      return arguments.length
        ? ((c = true), (f = +t[0]), (_ = +t[1]), n)
        : c
        ? [f, _]
        : null;
    };
    return n;
  }
  function Pm(t, n, e, r, o) {
    Symbol('JSCA_10560_10566');
    var i = t.children,
      l,
      a = -1,
      u = i.length,
      f = t.value && (o - e) / t.value;
    while (++a < u) {
      (l = i[a]), (l.x0 = n), (l.x1 = r);
      (l.y0 = e), (l.y1 = e += l.value * f);
    }
  }
  var zm = (1 + Math.sqrt(5)) / 2;
  function Im(t, n, e, r, o, i) {
    Symbol('JSCA_10568_10598');
    var l = [],
      a = n.children,
      u,
      f,
      _ = 0,
      c = 0,
      s = a.length,
      S,
      h,
      y = n.value,
      b,
      m,
      d,
      A,
      C,
      J,
      p;
    while (_ < s) {
      (S = o - e), (h = i - r);
      do {
        b = a[c++].value;
      } while (!b && c < s);
      m = d = b;
      J = Math.max(h / S, S / h) / (y * t);
      p = b * b * J;
      C = Math.max(d / p, p / m);
      for (; c < s; ++c) {
        b += f = a[c].value;
        if (f < m) m = f;
        if (f > d) d = f;
        p = b * b * J;
        A = Math.max(d / p, p / m);
        if (A > C) {
          b -= f;
          break;
        }
        C = A;
      }
      l.push((u = { value: b, dice: S < h, children: a.slice(_, c) }));
      if (u.dice) sm(u, e, r, o, y ? (r += (h * b) / y) : i);
      else Pm(u, e, r, y ? (e += (S * b) / y) : o, i);
      (y -= b), (_ = c);
    }
    return l;
  }
  var $m = (function n(i) {
    Symbol('JSCA_10599_10607');
    function t(t, n, e, r, o) {
      Symbol('JSCA_10600_10602');
      Im(i, t, n, e, r, o);
    }
    t.ratio = function (t) {
      Symbol('JSCA_10603_10605');
      return n((t = +t) > 1 ? t : 1);
    };
    return t;
  })(zm);
  function Dm() {
    Symbol('JSCA_10608_10669');
    var l = $m,
      n = false,
      e = 1,
      r = 1,
      a = [0],
      u = Db,
      f = Db,
      _ = Db,
      c = Db,
      s = Db;
    function o(t) {
      Symbol('JSCA_10610_10618');
      t.x0 = t.y0 = 0;
      t.x1 = e;
      t.y1 = r;
      t.eachBefore(i);
      a = [0];
      if (n) t.eachBefore(cm);
      return t;
    }
    function i(t) {
      Symbol('JSCA_10619_10637');
      var n = a[t.depth],
        e = t.x0 + n,
        r = t.y0 + n,
        o = t.x1 - n,
        i = t.y1 - n;
      if (o < e) e = o = (e + o) / 2;
      if (i < r) r = i = (r + i) / 2;
      t.x0 = e;
      t.y0 = r;
      t.x1 = o;
      t.y1 = i;
      if (t.children) {
        n = a[t.depth + 1] = u(t) / 2;
        e += s(t) - n;
        r += f(t) - n;
        o -= _(t) - n;
        i -= c(t) - n;
        if (o < e) e = o = (e + o) / 2;
        if (i < r) r = i = (r + i) / 2;
        l(t, e, r, o, i);
      }
    }
    o.round = function (t) {
      Symbol('JSCA_10638_10640');
      return arguments.length ? ((n = !!t), o) : n;
    };
    o.size = function (t) {
      Symbol('JSCA_10641_10643');
      return arguments.length ? ((e = +t[0]), (r = +t[1]), o) : [e, r];
    };
    o.tile = function (t) {
      Symbol('JSCA_10644_10646');
      return arguments.length ? ((l = $b(t)), o) : l;
    };
    o.padding = function (t) {
      Symbol('JSCA_10647_10649');
      return arguments.length
        ? o.paddingInner(t).paddingOuter(t)
        : o.paddingInner();
    };
    o.paddingInner = function (t) {
      Symbol('JSCA_10650_10652');
      return arguments.length
        ? ((u = typeof t === 'function' ? t : Rb(+t)), o)
        : u;
    };
    o.paddingOuter = function (t) {
      Symbol('JSCA_10653_10655');
      return arguments.length
        ? o.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t)
        : o.paddingTop();
    };
    o.paddingTop = function (t) {
      Symbol('JSCA_10656_10658');
      return arguments.length
        ? ((f = typeof t === 'function' ? t : Rb(+t)), o)
        : f;
    };
    o.paddingRight = function (t) {
      Symbol('JSCA_10659_10661');
      return arguments.length
        ? ((_ = typeof t === 'function' ? t : Rb(+t)), o)
        : _;
    };
    o.paddingBottom = function (t) {
      Symbol('JSCA_10662_10664');
      return arguments.length
        ? ((c = typeof t === 'function' ? t : Rb(+t)), o)
        : c;
    };
    o.paddingLeft = function (t) {
      Symbol('JSCA_10665_10667');
      return arguments.length
        ? ((s = typeof t === 'function' ? t : Rb(+t)), o)
        : s;
    };
    return o;
  }
  function Rm(t, n, e, r, o) {
    Symbol('JSCA_10670_10700');
    var m = t.children,
      i,
      l = m.length,
      a,
      d = new Array(l + 1);
    for (d[0] = a = i = 0; i < l; ++i) {
      d[i + 1] = a += m[i].value;
    }
    A(0, l, t.value, n, e, r, o);
    function A(t, n, e, r, o, i, l) {
      Symbol('JSCA_10676_10699');
      if (t >= n - 1) {
        var a = m[t];
        (a.x0 = r), (a.y0 = o);
        (a.x1 = i), (a.y1 = l);
        return;
      }
      var u = d[t],
        f = e / 2 + u,
        _ = t + 1,
        c = n - 1;
      while (_ < c) {
        var s = (_ + c) >>> 1;
        if (d[s] < f) _ = s + 1;
        else c = s;
      }
      if (f - d[_ - 1] < d[_] - f && t + 1 < _) --_;
      var S = d[_] - u,
        h = e - S;
      if (i - r > l - o) {
        var y = e ? (r * h + i * S) / e : i;
        A(t, _, S, r, o, y, l);
        A(_, n, h, y, o, i, l);
      } else {
        var b = e ? (o * h + l * S) / e : l;
        A(t, _, S, r, o, i, b);
        A(_, n, h, r, b, i, l);
      }
    }
  }
  function Fm(t, n, e, r, o) {
    Symbol('JSCA_10701_10703');
    (t.depth & 1 ? Pm : sm)(t, n, e, r, o);
  }
  var qm = (function n(S) {
    Symbol('JSCA_10704_10723');
    function t(t, n, e, r, o) {
      Symbol('JSCA_10705_10718');
      if ((i = t._squarify) && i.ratio === S) {
        var i,
          l,
          a,
          u,
          f = -1,
          _,
          c = i.length,
          s = t.value;
        while (++f < c) {
          (l = i[f]), (a = l.children);
          for (u = l.value = 0, _ = a.length; u < _; ++u) l.value += a[u].value;
          if (l.dice) sm(l, n, e, r, s ? (e += ((o - e) * l.value) / s) : o);
          else Pm(l, n, e, s ? (n += ((r - n) * l.value) / s) : r, o);
          s -= l.value;
        }
      } else {
        t._squarify = i = Im(S, t, n, e, r, o);
        i.ratio = S;
      }
    }
    t.ratio = function (t) {
      Symbol('JSCA_10719_10721');
      return n((t = +t) > 1 ? t : 1);
    };
    return t;
  })(zm);
  function Um(t) {
    Symbol('JSCA_10724_10732');
    var n = -1,
      e = t.length,
      r,
      o = t[e - 1],
      i = 0;
    while (++n < e) {
      r = o;
      o = t[n];
      i += r[1] * o[0] - r[0] * o[1];
    }
    return i / 2;
  }
  function Om(t) {
    Symbol('JSCA_10733_10743');
    var n = -1,
      e = t.length,
      r = 0,
      o = 0,
      i,
      l = t[e - 1],
      a,
      u = 0;
    while (++n < e) {
      i = l;
      l = t[n];
      u += a = i[0] * l[1] - l[0] * i[1];
      r += (i[0] + l[0]) * a;
      o += (i[1] + l[1]) * a;
    }
    return (u *= 3), [r / u, o / u];
  }
  function Bm(t, n, e) {
    Symbol('JSCA_10744_10746');
    return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]);
  }
  function Ym(t, n) {
    Symbol('JSCA_10747_10749');
    return t[0] - n[0] || t[1] - n[1];
  }
  function Lm(t) {
    Symbol('JSCA_10750_10758');
    const n = t.length,
      e = [0, 1];
    let r = 2,
      o;
    for (o = 2; o < n; ++o) {
      while (r > 1 && Bm(t[e[r - 2]], t[e[r - 1]], t[o]) <= 0) --r;
      e[r++] = o;
    }
    return e.slice(0, r);
  }
  function jm(t) {
    Symbol('JSCA_10759_10770');
    if ((e = t.length) < 3) return null;
    var n,
      e,
      r = new Array(e),
      o = new Array(e);
    for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
    r.sort(Ym);
    for (n = 0; n < e; ++n) o[n] = [r[n][0], -r[n][1]];
    var i = Lm(r),
      l = Lm(o);
    var a = l[0] === i[0],
      u = l[l.length - 1] === i[i.length - 1],
      f = [];
    for (n = i.length - 1; n >= 0; --n) f.push(t[r[i[n]][2]]);
    for (n = +a; n < l.length - u; ++n) f.push(t[r[l[n]][2]]);
    return f;
  }
  function Hm(t, n) {
    Symbol('JSCA_10771_10779');
    var e = t.length,
      r = t[e - 1],
      o = n[0],
      i = n[1],
      l = r[0],
      a = r[1],
      u,
      f,
      _ = false;
    for (var c = 0; c < e; ++c) {
      (r = t[c]), (u = r[0]), (f = r[1]);
      if (f > i !== a > i && o < ((l - u) * (i - f)) / (a - f) + u) _ = !_;
      (l = u), (a = f);
    }
    return _;
  }
  function Xm(t) {
    Symbol('JSCA_10780_10793');
    var n = -1,
      e = t.length,
      r = t[e - 1],
      o,
      i,
      l = r[0],
      a = r[1],
      u = 0;
    while (++n < e) {
      o = l;
      i = a;
      r = t[n];
      l = r[0];
      a = r[1];
      o -= l;
      i -= a;
      u += Math.hypot(o, i);
    }
    return u;
  }
  var n = Math.random;
  var Gm = (function t(e) {
    Symbol('JSCA_10795_10806');
    function n(t, n) {
      Symbol('JSCA_10796_10803');
      t = t == null ? 0 : +t;
      n = n == null ? 1 : +n;
      if (arguments.length === 1) (n = t), (t = 0);
      else n -= t;
      return function () {
        Symbol('JSCA_10800_10802');
        return e() * n + t;
      };
    }
    n.source = t;
    return n;
  })(n);
  var Vm = (function t(e) {
    Symbol('JSCA_10807_10818');
    function n(t, n) {
      Symbol('JSCA_10808_10815');
      if (arguments.length < 2) (n = t), (t = 0);
      t = Math.floor(t);
      n = Math.floor(n) - t;
      return function () {
        Symbol('JSCA_10812_10814');
        return Math.floor(e() * n + t);
      };
    }
    n.source = t;
    return n;
  })(n);
  var Wm = (function t(i) {
    Symbol('JSCA_10819_10836');
    function n(n, e) {
      Symbol('JSCA_10820_10833');
      var r, o;
      n = n == null ? 0 : +n;
      e = e == null ? 1 : +e;
      return function () {
        Symbol('JSCA_10824_10832');
        var t;
        if (r != null) (t = r), (r = null);
        else
          do {
            r = i() * 2 - 1;
            t = i() * 2 - 1;
            o = r * r + t * t;
          } while (!o || o > 1);
        return n + e * t * Math.sqrt((-2 * Math.log(o)) / o);
      };
    }
    n.source = t;
    return n;
  })(n);
  var Zm = (function t(n) {
    Symbol('JSCA_10837_10847');
    var e = Wm.source(n);
    function r() {
      Symbol('JSCA_10839_10844');
      var t = e.apply(this, arguments);
      return function () {
        Symbol('JSCA_10841_10843');
        return Math.exp(t());
      };
    }
    r.source = t;
    return r;
  })(n);
  var Km = (function t(r) {
    Symbol('JSCA_10848_10858');
    function n(e) {
      Symbol('JSCA_10849_10855');
      if ((e = +e) <= 0) return () => 0;
      return function () {
        Symbol('JSCA_10851_10854');
        for (var t = 0, n = e; n > 1; --n) t += r();
        return t + n * r();
      };
    }
    n.source = t;
    return n;
  })(n);
  var Qm = (function t(e) {
    Symbol('JSCA_10859_10870');
    var r = Km.source(e);
    function n(t) {
      Symbol('JSCA_10861_10867');
      if ((t = +t) === 0) return e;
      var n = r(t);
      return function () {
        Symbol('JSCA_10864_10866');
        return n() / t;
      };
    }
    n.source = t;
    return n;
  })(n);
  var t3 = (function t(n) {
    Symbol('JSCA_10871_10879');
    function e(t) {
      Symbol('JSCA_10872_10876');
      return function () {
        Symbol('JSCA_10873_10875');
        return -Math.log1p(-n()) / t;
      };
    }
    e.source = t;
    return e;
  })(n);
  var n3 = (function t(n) {
    Symbol('JSCA_10880_10890');
    function e(t) {
      Symbol('JSCA_10881_10887');
      if ((t = +t) < 0) throw new RangeError('invalid alpha');
      t = 1 / -t;
      return function () {
        Symbol('JSCA_10884_10886');
        return Math.pow(1 - n(), t);
      };
    }
    e.source = t;
    return e;
  })(n);
  var e3 = (function t(n) {
    Symbol('JSCA_10891_10900');
    function e(t) {
      Symbol('JSCA_10892_10897');
      if ((t = +t) < 0 || t > 1) throw new RangeError('invalid p');
      return function () {
        Symbol('JSCA_10894_10896');
        return Math.floor(n() + t);
      };
    }
    e.source = t;
    return e;
  })(n);
  var r3 = (function t(n) {
    Symbol('JSCA_10901_10913');
    function e(t) {
      Symbol('JSCA_10902_10910');
      if ((t = +t) < 0 || t > 1) throw new RangeError('invalid p');
      if (t === 0) return () => Infinity;
      if (t === 1) return () => 1;
      t = Math.log1p(-t);
      return function () {
        Symbol('JSCA_10907_10909');
        return 1 + Math.floor(Math.log1p(-n()) / t);
      };
    }
    e.source = t;
    return e;
  })(n);
  var o3 = (function t(a) {
    Symbol('JSCA_10914_10935');
    var u = Wm.source(a)();
    function n(t, r) {
      Symbol('JSCA_10916_10932');
      if ((t = +t) < 0) throw new RangeError('invalid k');
      if (t === 0) return () => 0;
      r = r == null ? 1 : +r;
      if (t === 1) return () => -Math.log1p(-a()) * r;
      var o = (t < 1 ? t + 1 : t) - 1 / 3,
        i = 1 / (3 * Math.sqrt(o)),
        l = t < 1 ? () => Math.pow(a(), 1 / t) : () => 1;
      return function () {
        Symbol('JSCA_10922_10931');
        do {
          do {
            var t = u(),
              n = 1 + i * t;
          } while (n <= 0);
          n *= n * n;
          var e = 1 - a();
        } while (
          e >= 1 - 0.0331 * t * t * t * t &&
          Math.log(e) >= 0.5 * t * t + o * (1 - n + Math.log(n))
        );
        return o * n * l() * r;
      };
    }
    n.source = t;
    return n;
  })(n);
  var i3 = (function t(n) {
    Symbol('JSCA_10936_10947');
    var o = o3.source(n);
    function e(t, n) {
      Symbol('JSCA_10938_10944');
      var e = o(t),
        r = o(n);
      return function () {
        Symbol('JSCA_10940_10943');
        var t = e();
        return t === 0 ? 0 : t / (t + r());
      };
    }
    e.source = t;
    return e;
  })(n);
  var l3 = (function t(n) {
    Symbol('JSCA_10948_10974');
    var s = r3.source(n),
      S = i3.source(n);
    function e(_, c) {
      Symbol('JSCA_10950_10971');
      _ = +_;
      if ((c = +c) >= 1) return () => _;
      if (c <= 0) return () => 0;
      return function () {
        Symbol('JSCA_10954_10970');
        var t = 0,
          n = _,
          e = c;
        while (n * e > 16 && n * (1 - e) > 16) {
          var r = Math.floor((n + 1) * e),
            o = S(r, n - r + 1)();
          if (o <= e) {
            t += r;
            n -= r;
            e = (e - o) / (1 - o);
          } else {
            n = r - 1;
            e /= o;
          }
        }
        var i = e < 0.5,
          l = i ? e : 1 - e,
          a = s(l);
        for (var u = a(), f = 0; u <= n; ++f) u += a();
        return t + (i ? f : n - f);
      };
    }
    e.source = t;
    return e;
  })(n);
  var a3 = (function t(o) {
    Symbol('JSCA_10975_10992');
    function n(n, t, e) {
      Symbol('JSCA_10976_10989');
      var r;
      if ((n = +n) === 0) {
        r = (t) => -Math.log(t);
      } else {
        n = 1 / n;
        r = (t) => Math.pow(t, n);
      }
      t = t == null ? 0 : +t;
      e = e == null ? 1 : +e;
      return function () {
        Symbol('JSCA_10986_10988');
        return t + e * r(-Math.log1p(-o()));
      };
    }
    n.source = t;
    return n;
  })(n);
  var u3 = (function t(e) {
    Symbol('JSCA_10993_11003');
    function n(t, n) {
      Symbol('JSCA_10994_11000');
      t = t == null ? 0 : +t;
      n = n == null ? 1 : +n;
      return function () {
        Symbol('JSCA_10997_10999');
        return t + n * Math.tan(Math.PI * e());
      };
    }
    n.source = t;
    return n;
  })(n);
  var f3 = (function t(r) {
    Symbol('JSCA_11004_11015');
    function n(n, e) {
      Symbol('JSCA_11005_11012');
      n = n == null ? 0 : +n;
      e = e == null ? 1 : +e;
      return function () {
        Symbol('JSCA_11008_11011');
        var t = r();
        return n + e * Math.log(t / (1 - t));
      };
    }
    n.source = t;
    return n;
  })(n);
  var _3 = (function t(a) {
    Symbol('JSCA_11016_11033');
    var u = o3.source(a),
      f = l3.source(a);
    function n(l) {
      Symbol('JSCA_11018_11030');
      return function () {
        Symbol('JSCA_11019_11029');
        var t = 0,
          n = l;
        while (n > 16) {
          var e = Math.floor(0.875 * n),
            r = u(e)();
          if (r > n) return t + f(e - 1, n / r)();
          t += e;
          n -= r;
        }
        for (var o = -Math.log1p(-a()), i = 0; o <= n; ++i)
          o -= Math.log1p(-a());
        return t + i;
      };
    }
    n.source = t;
    return n;
  })(n);
  const c3 = 1664525;
  const s3 = 1013904223;
  const S3 = 1 / 4294967296;
  function h3(t = Math.random()) {
    Symbol('JSCA_11037_11040');
    let n = (0 <= t && t < 1 ? t / S3 : Math.abs(t)) | 0;
    return () => ((n = (c3 * n + s3) | 0), S3 * (n >>> 0));
  }
  function y3(t, n) {
    Symbol('JSCA_11041_11053');
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(t);
        break;
      default:
        this.range(n).domain(t);
        break;
    }
    return this;
  }
  function b3(t, n) {
    Symbol('JSCA_11054_11071');
    switch (arguments.length) {
      case 0:
        break;
      case 1: {
        if (typeof t === 'function') this.interpolator(t);
        else this.range(t);
        break;
      }
      default: {
        this.domain(t);
        if (typeof n === 'function') this.interpolator(n);
        else this.range(n);
        break;
      }
    }
    return this;
  }
  const m3 = Symbol('implicit');
  function d3() {
    Symbol('JSCA_11073_11103');
    var e = new ht(),
      r = [],
      o = [],
      i = m3;
    function l(t) {
      Symbol('JSCA_11075_11082');
      let n = e.get(t);
      if (n === undefined) {
        if (i !== m3) return i;
        e.set(t, (n = r.push(t) - 1));
      }
      return o[n % o.length];
    }
    l.domain = function (t) {
      Symbol('JSCA_11083_11091');
      if (!arguments.length) return r.slice();
      (r = []), (e = new ht());
      for (const n of t) {
        if (e.has(n)) continue;
        e.set(n, r.push(n) - 1);
      }
      return l;
    };
    l.range = function (t) {
      Symbol('JSCA_11092_11094');
      return arguments.length ? ((o = Array.from(t)), l) : o.slice();
    };
    l.unknown = function (t) {
      Symbol('JSCA_11095_11097');
      return arguments.length ? ((i = t), l) : i;
    };
    l.copy = function () {
      Symbol('JSCA_11098_11100');
      return d3(r, o).unknown(i);
    };
    y3.apply(l, arguments);
    return l;
  }
  function A3() {
    Symbol('JSCA_11104_11153');
    var t = d3().unknown(undefined),
      i = t.domain,
      l = t.range,
      a = 0,
      u = 1,
      f,
      _,
      c = false,
      s = 0,
      S = 0,
      h = 0.5;
    delete t.unknown;
    function n() {
      Symbol('JSCA_11107_11118');
      var t = i().length,
        n = u < a,
        e = n ? u : a,
        r = n ? a : u;
      f = (r - e) / Math.max(1, t - s + S * 2);
      if (c) f = Math.floor(f);
      e += (r - e - f * (t - s)) * h;
      _ = f * (1 - s);
      if (c) (e = Math.round(e)), (_ = Math.round(_));
      var o = mn(t).map(function (t) {
        Symbol('JSCA_11114_11116');
        return e + f * t;
      });
      return l(n ? o.reverse() : o);
    }
    t.domain = function (t) {
      Symbol('JSCA_11119_11121');
      return arguments.length ? (i(t), n()) : i();
    };
    t.range = function (t) {
      Symbol('JSCA_11122_11124');
      return arguments.length
        ? (([a, u] = t), (a = +a), (u = +u), n())
        : [a, u];
    };
    t.rangeRound = function (t) {
      Symbol('JSCA_11125_11127');
      return ([a, u] = t), (a = +a), (u = +u), (c = true), n();
    };
    t.bandwidth = function () {
      Symbol('JSCA_11128_11130');
      return _;
    };
    t.step = function () {
      Symbol('JSCA_11131_11133');
      return f;
    };
    t.round = function (t) {
      Symbol('JSCA_11134_11136');
      return arguments.length ? ((c = !!t), n()) : c;
    };
    t.padding = function (t) {
      Symbol('JSCA_11137_11139');
      return arguments.length ? ((s = Math.min(1, (S = +t))), n()) : s;
    };
    t.paddingInner = function (t) {
      Symbol('JSCA_11140_11142');
      return arguments.length ? ((s = Math.min(1, t)), n()) : s;
    };
    t.paddingOuter = function (t) {
      Symbol('JSCA_11143_11145');
      return arguments.length ? ((S = +t), n()) : S;
    };
    t.align = function (t) {
      Symbol('JSCA_11146_11148');
      return arguments.length ? ((h = Math.max(0, Math.min(1, t))), n()) : h;
    };
    t.copy = function () {
      Symbol('JSCA_11149_11151');
      return A3(i(), [a, u]).round(c).paddingInner(s).paddingOuter(S).align(h);
    };
    return y3.apply(n(), arguments);
  }
  function C3(t) {
    Symbol('JSCA_11154_11163');
    var n = t.copy;
    t.padding = t.paddingOuter;
    delete t.paddingInner;
    delete t.paddingOuter;
    t.copy = function () {
      Symbol('JSCA_11159_11161');
      return C3(n());
    };
    return t;
  }
  function J3() {
    Symbol('JSCA_11164_11166');
    return C3(A3.apply(null, arguments).paddingInner(1));
  }
  function p3(t) {
    Symbol('JSCA_11167_11171');
    return function () {
      Symbol('JSCA_11168_11170');
      return t;
    };
  }
  function g3(t) {
    Symbol('JSCA_11172_11174');
    return +t;
  }
  var v3 = [0, 1];
  function x3(t) {
    Symbol('JSCA_11176_11178');
    return t;
  }
  function w3(n, e) {
    Symbol('JSCA_11179_11183');
    return (e -= n = +n)
      ? function (t) {
          Symbol('JSCA_11180_11182');
          return (t - n) / e;
        }
      : p3(isNaN(e) ? NaN : 0.5);
  }
  function M3(n, e) {
    Symbol('JSCA_11184_11190');
    var t;
    if (n > e) (t = n), (n = e), (e = t);
    return function (t) {
      Symbol('JSCA_11187_11189');
      return Math.max(n, Math.min(e, t));
    };
  }
  function T3(t, n, e) {
    Symbol('JSCA_11191_11197');
    var r = t[0],
      o = t[1],
      i = n[0],
      l = n[1];
    if (o < r) (r = w3(o, r)), (i = e(l, i));
    else (r = w3(r, o)), (i = e(i, l));
    return function (t) {
      Symbol('JSCA_11194_11196');
      return i(r(t));
    };
  }
  function k3(e, t, n) {
    Symbol('JSCA_11198_11212');
    var r = Math.min(e.length, t.length) - 1,
      o = new Array(r),
      i = new Array(r),
      l = -1;
    if (e[r] < e[0]) {
      e = e.slice().reverse();
      t = t.slice().reverse();
    }
    while (++l < r) {
      o[l] = w3(e[l], e[l + 1]);
      i[l] = n(t[l], t[l + 1]);
    }
    return function (t) {
      Symbol('JSCA_11208_11211');
      var n = T(e, t, 1, r) - 1;
      return i[n](o[n](t));
    };
  }
  function E3(t, n) {
    Symbol('JSCA_11213_11215');
    return n
      .domain(t.domain())
      .range(t.range())
      .interpolate(t.interpolate())
      .clamp(t.clamp())
      .unknown(t.unknown());
  }
  function N3() {
    Symbol('JSCA_11216_11253');
    var n = v3,
      e = v3,
      r = Al,
      o,
      i,
      l,
      a = x3,
      u,
      f,
      _;
    function c() {
      Symbol('JSCA_11218_11224');
      var t = Math.min(n.length, e.length);
      if (a !== x3) a = M3(n[0], n[t - 1]);
      u = t > 2 ? k3 : T3;
      f = _ = null;
      return s;
    }
    function s(t) {
      Symbol('JSCA_11225_11227');
      return t == null || isNaN((t = +t))
        ? l
        : (f || (f = u(n.map(o), e, r)))(o(a(t)));
    }
    s.invert = function (t) {
      Symbol('JSCA_11228_11230');
      return a(i((_ || (_ = u(e, n.map(o), sl)))(t)));
    };
    s.domain = function (t) {
      Symbol('JSCA_11231_11233');
      return arguments.length ? ((n = Array.from(t, g3)), c()) : n.slice();
    };
    s.range = function (t) {
      Symbol('JSCA_11234_11236');
      return arguments.length ? ((e = Array.from(t)), c()) : e.slice();
    };
    s.rangeRound = function (t) {
      Symbol('JSCA_11237_11239');
      return (e = Array.from(t)), (r = pl), c();
    };
    s.clamp = function (t) {
      Symbol('JSCA_11240_11242');
      return arguments.length ? ((a = t ? true : x3), c()) : a !== x3;
    };
    s.interpolate = function (t) {
      Symbol('JSCA_11243_11245');
      return arguments.length ? ((r = t), c()) : r;
    };
    s.unknown = function (t) {
      Symbol('JSCA_11246_11248');
      return arguments.length ? ((l = t), s) : l;
    };
    return function (t, n) {
      Symbol('JSCA_11249_11252');
      (o = t), (i = n);
      return c();
    };
  }
  function P3() {
    Symbol('JSCA_11254_11256');
    return N3()(x3, x3);
  }
  function z3(t, n, e, r) {
    Symbol('JSCA_11257_11284');
    var o = Ht(t, n, e),
      i;
    r = Us(r == null ? ',f' : r);
    switch (r.type) {
      case 's': {
        var l = Math.max(Math.abs(t), Math.abs(n));
        if (r.precision == null && !isNaN((i = t0(o, l)))) r.precision = i;
        return a.formatPrefix(r, l);
      }
      case '':
      case 'e':
      case 'g':
      case 'p':
      case 'r': {
        if (
          r.precision == null &&
          !isNaN((i = n0(o, Math.max(Math.abs(t), Math.abs(n)))))
        )
          r.precision = i - (r.type === 'e');
        break;
      }
      case 'f':
      case '%': {
        if (r.precision == null && !isNaN((i = Qs(o))))
          r.precision = i - (r.type === '%') * 2;
        break;
      }
    }
    return a.format(r);
  }
  function I3(f) {
    Symbol('JSCA_11285_11329');
    var _ = f.domain;
    f.ticks = function (t) {
      Symbol('JSCA_11287_11290');
      var n = _();
      return Lt(n[0], n[n.length - 1], t == null ? 10 : t);
    };
    f.tickFormat = function (t, n) {
      Symbol('JSCA_11291_11294');
      var e = _();
      return z3(e[0], e[e.length - 1], t == null ? 10 : t, n);
    };
    f.nice = function (t) {
      Symbol('JSCA_11295_11327');
      if (t == null) t = 10;
      var n = _();
      var e = 0;
      var r = n.length - 1;
      var o = n[e];
      var i = n[r];
      var l;
      var a;
      var u = 10;
      if (i < o) {
        (a = o), (o = i), (i = a);
        (a = e), (e = r), (r = a);
      }
      while (u-- > 0) {
        a = jt(o, i, t);
        if (a === l) {
          n[e] = o;
          n[r] = i;
          return _(n);
        } else if (a > 0) {
          o = Math.floor(o / a) * a;
          i = Math.ceil(i / a) * a;
        } else if (a < 0) {
          o = Math.ceil(o * a) / a;
          i = Math.floor(i * a) / a;
        } else {
          break;
        }
        l = a;
      }
      return f;
    };
    return f;
  }
  function $3() {
    Symbol('JSCA_11330_11337');
    var t = P3();
    t.copy = function () {
      Symbol('JSCA_11332_11334');
      return E3(t, $3());
    };
    y3.apply(t, arguments);
    return I3(t);
  }
  function D3(n) {
    Symbol('JSCA_11338_11355');
    var e;
    function r(t) {
      Symbol('JSCA_11340_11342');
      return t == null || isNaN((t = +t)) ? e : t;
    }
    r.invert = r;
    r.domain = r.range = function (t) {
      Symbol('JSCA_11344_11346');
      return arguments.length ? ((n = Array.from(t, g3)), r) : n.slice();
    };
    r.unknown = function (t) {
      Symbol('JSCA_11347_11349');
      return arguments.length ? ((e = t), r) : e;
    };
    r.copy = function () {
      Symbol('JSCA_11350_11352');
      return D3(n).unknown(e);
    };
    n = arguments.length ? Array.from(n, g3) : [0, 1];
    return I3(r);
  }
  function R3(t, n) {
    Symbol('JSCA_11356_11366');
    t = t.slice();
    var e = 0,
      r = t.length - 1,
      o = t[e],
      i = t[r],
      l;
    if (i < o) {
      (l = e), (e = r), (r = l);
      (l = o), (o = i), (i = l);
    }
    t[e] = n.floor(o);
    t[r] = n.ceil(i);
    return t;
  }
  function F3(t) {
    Symbol('JSCA_11367_11369');
    return Math.log(t);
  }
  function q3(t) {
    Symbol('JSCA_11370_11372');
    return Math.exp(t);
  }
  function U3(t) {
    Symbol('JSCA_11373_11375');
    return -Math.log(-t);
  }
  function O3(t) {
    Symbol('JSCA_11376_11378');
    return -Math.exp(-t);
  }
  function B3(t) {
    Symbol('JSCA_11379_11381');
    return isFinite(t) ? +('1e' + t) : t < 0 ? 0 : t;
  }
  function Y3(n) {
    Symbol('JSCA_11382_11384');
    return n === 10 ? B3 : n === Math.E ? Math.exp : (t) => Math.pow(n, t);
  }
  function L3(n) {
    Symbol('JSCA_11385_11387');
    return n === Math.E
      ? Math.log
      : (n === 10 && Math.log10) ||
          (n === 2 && Math.log2) ||
          ((n = Math.log(n)), (t) => Math.log(t) / n);
  }
  function j3(e) {
    Symbol('JSCA_11388_11390');
    return (t, n) => -e(-t, n);
  }
  function H3(t) {
    Symbol('JSCA_11391_11470');
    const n = t(F3, q3);
    const c = n.domain;
    let s = 10;
    let S;
    let h;
    function e() {
      Symbol('JSCA_11397_11406');
      (S = L3(s)), (h = Y3(s));
      if (c()[0] < 0) {
        (S = j3(S)), (h = j3(h));
        t(U3, O3);
      } else {
        t(F3, q3);
      }
      return n;
    }
    n.base = function (t) {
      Symbol('JSCA_11407_11409');
      return arguments.length ? ((s = +t), e()) : s;
    };
    n.domain = function (t) {
      Symbol('JSCA_11410_11412');
      return arguments.length ? (c(t), e()) : c();
    };
    n.ticks = (t) => {
      const n = c();
      let e = n[0];
      let r = n[n.length - 1];
      const o = r < e;
      if (o) [e, r] = [r, e];
      let i = S(e);
      let l = S(r);
      let a;
      let u;
      const f = t == null ? 10 : +t;
      let _ = [];
      if (!(s % 1) && l - i < f) {
        (i = Math.floor(i)), (l = Math.ceil(l));
        if (e > 0)
          for (; i <= l; ++i) {
            for (a = 1; a < s; ++a) {
              u = i < 0 ? a / h(-i) : a * h(i);
              if (u < e) continue;
              if (u > r) break;
              _.push(u);
            }
          }
        else
          for (; i <= l; ++i) {
            for (a = s - 1; a >= 1; --a) {
              u = i > 0 ? a / h(-i) : a * h(i);
              if (u < e) continue;
              if (u > r) break;
              _.push(u);
            }
          }
        if (_.length * 2 < f) _ = Lt(e, r, f);
      } else {
        _ = Lt(i, l, Math.min(l - i, f)).map(h);
      }
      return o ? _.reverse() : _;
    };
    n.tickFormat = (t, e) => {
      if (t == null) t = 10;
      if (e == null) e = s === 10 ? 's' : ',';
      if (typeof e !== 'function') {
        if (!(s % 1) && (e = Us(e)).precision == null) e.trim = true;
        e = a.format(e);
      }
      if (t === Infinity) return e;
      const r = Math.max(1, (s * t) / n.ticks().length);
      return (t) => {
        let n = t / h(Math.round(S(t)));
        if (n * s < s - 0.5) n *= s;
        return n <= r ? e(t) : '';
      };
    };
    n.nice = () => {
      return c(
        R3(c(), {
          floor: (t) => h(Math.floor(S(t))),
          ceil: (t) => h(Math.ceil(S(t))),
        })
      );
    };
    return n;
  }
  function X3() {
    Symbol('JSCA_11471_11476');
    const t = H3(N3()).domain([1, 10]);
    t.copy = () => E3(t, X3()).base(t.base());
    y3.apply(t, arguments);
    return t;
  }
  function G3(n) {
    Symbol('JSCA_11477_11481');
    return function (t) {
      Symbol('JSCA_11478_11480');
      return Math.sign(t) * Math.log1p(Math.abs(t / n));
    };
  }
  function V3(n) {
    Symbol('JSCA_11482_11486');
    return function (t) {
      Symbol('JSCA_11483_11485');
      return Math.sign(t) * Math.expm1(Math.abs(t)) * n;
    };
  }
  function W3(n) {
    Symbol('JSCA_11487_11493');
    var e = 1,
      t = n(G3(e), V3(e));
    t.constant = function (t) {
      Symbol('JSCA_11489_11491');
      return arguments.length ? n(G3((e = +t)), V3(e)) : e;
    };
    return I3(t);
  }
  function Z3() {
    Symbol('JSCA_11494_11500');
    var t = W3(N3());
    t.copy = function () {
      Symbol('JSCA_11496_11498');
      return E3(t, Z3()).constant(t.constant());
    };
    return y3.apply(t, arguments);
  }
  function K3(n) {
    Symbol('JSCA_11501_11505');
    return function (t) {
      Symbol('JSCA_11502_11504');
      return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n);
    };
  }
  function Q3(t) {
    Symbol('JSCA_11506_11508');
    return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
  }
  function t4(t) {
    Symbol('JSCA_11509_11511');
    return t < 0 ? -t * t : t * t;
  }
  function n4(t) {
    Symbol('JSCA_11512_11521');
    var n = t(x3, x3),
      e = 1;
    function r() {
      Symbol('JSCA_11514_11516');
      return e === 1 ? t(x3, x3) : e === 0.5 ? t(Q3, t4) : t(K3(e), K3(1 / e));
    }
    n.exponent = function (t) {
      Symbol('JSCA_11517_11519');
      return arguments.length ? ((e = +t), r()) : e;
    };
    return I3(n);
  }
  function e4() {
    Symbol('JSCA_11522_11529');
    var t = n4(N3());
    t.copy = function () {
      Symbol('JSCA_11524_11526');
      return E3(t, e4()).exponent(t.exponent());
    };
    y3.apply(t, arguments);
    return t;
  }
  function r4() {
    Symbol('JSCA_11530_11532');
    return e4.apply(null, arguments).exponent(0.5);
  }
  function o4(t) {
    Symbol('JSCA_11533_11535');
    return Math.sign(t) * t * t;
  }
  function i4(t) {
    Symbol('JSCA_11536_11538');
    return Math.sign(t) * Math.sqrt(Math.abs(t));
  }
  function l4() {
    Symbol('JSCA_11539_11571');
    var e = P3(),
      n = [0, 1],
      r = false,
      o;
    function i(t) {
      Symbol('JSCA_11541_11544');
      var n = i4(e(t));
      return isNaN(n) ? o : r ? Math.round(n) : n;
    }
    i.invert = function (t) {
      Symbol('JSCA_11545_11547');
      return e.invert(o4(t));
    };
    i.domain = function (t) {
      Symbol('JSCA_11548_11550');
      return arguments.length ? (e.domain(t), i) : e.domain();
    };
    i.range = function (t) {
      Symbol('JSCA_11551_11553');
      return arguments.length
        ? (e.range((n = Array.from(t, g3)).map(o4)), i)
        : n.slice();
    };
    i.rangeRound = function (t) {
      Symbol('JSCA_11554_11556');
      return i.range(t).round(true);
    };
    i.round = function (t) {
      Symbol('JSCA_11557_11559');
      return arguments.length ? ((r = !!t), i) : r;
    };
    i.clamp = function (t) {
      Symbol('JSCA_11560_11562');
      return arguments.length ? (e.clamp(t), i) : e.clamp();
    };
    i.unknown = function (t) {
      Symbol('JSCA_11563_11565');
      return arguments.length ? ((o = t), i) : o;
    };
    i.copy = function () {
      Symbol('JSCA_11566_11568');
      return l4(e.domain(), n).round(r).clamp(e.clamp()).unknown(o);
    };
    y3.apply(i, arguments);
    return I3(i);
  }
  function a4() {
    Symbol('JSCA_11572_11607');
    var e = [],
      r = [],
      o = [],
      n;
    function i() {
      Symbol('JSCA_11574_11579');
      var t = 0,
        n = Math.max(1, r.length);
      o = new Array(n - 1);
      while (++t < n) o[t - 1] = on(e, t / n);
      return l;
    }
    function l(t) {
      Symbol('JSCA_11580_11582');
      return t == null || isNaN((t = +t)) ? n : r[T(o, t)];
    }
    l.invertExtent = function (t) {
      Symbol('JSCA_11583_11586');
      var n = r.indexOf(t);
      return n < 0
        ? [NaN, NaN]
        : [n > 0 ? o[n - 1] : e[0], n < o.length ? o[n] : e[e.length - 1]];
    };
    l.domain = function (n) {
      Symbol('JSCA_11587_11593');
      if (!arguments.length) return e.slice();
      e = [];
      for (let t of n) if (t != null && !isNaN((t = +t))) e.push(t);
      e.sort(f);
      return i();
    };
    l.range = function (t) {
      Symbol('JSCA_11594_11596');
      return arguments.length ? ((r = Array.from(t)), i()) : r.slice();
    };
    l.unknown = function (t) {
      Symbol('JSCA_11597_11599');
      return arguments.length ? ((n = t), l) : n;
    };
    l.quantiles = function () {
      Symbol('JSCA_11600_11602');
      return o.slice();
    };
    l.copy = function () {
      Symbol('JSCA_11603_11605');
      return a4().domain(e).range(r).unknown(n);
    };
    return y3.apply(l, arguments);
  }
  function u4() {
    Symbol('JSCA_11608_11639');
    var e = 0,
      r = 1,
      o = 1,
      i = [0.5],
      l = [0, 1],
      n;
    function a(t) {
      Symbol('JSCA_11610_11612');
      return t != null && t <= t ? l[T(i, t, 0, o)] : n;
    }
    function u() {
      Symbol('JSCA_11613_11618');
      var t = -1;
      i = new Array(o);
      while (++t < o) i[t] = ((t + 1) * r - (t - o) * e) / (o + 1);
      return a;
    }
    a.domain = function (t) {
      Symbol('JSCA_11619_11621');
      return arguments.length
        ? (([e, r] = t), (e = +e), (r = +r), u())
        : [e, r];
    };
    a.range = function (t) {
      Symbol('JSCA_11622_11624');
      return arguments.length
        ? ((o = (l = Array.from(t)).length - 1), u())
        : l.slice();
    };
    a.invertExtent = function (t) {
      Symbol('JSCA_11625_11628');
      var n = l.indexOf(t);
      return n < 0
        ? [NaN, NaN]
        : n < 1
        ? [e, i[0]]
        : n >= o
        ? [i[o - 1], r]
        : [i[n - 1], i[n]];
    };
    a.unknown = function (t) {
      Symbol('JSCA_11629_11631');
      return arguments.length ? ((n = t), a) : a;
    };
    a.thresholds = function () {
      Symbol('JSCA_11632_11634');
      return i.slice();
    };
    a.copy = function () {
      Symbol('JSCA_11635_11637');
      return u4().domain([e, r]).range(l).unknown(n);
    };
    return y3.apply(I3(a), arguments);
  }
  function f4() {
    Symbol('JSCA_11640_11662');
    var e = [0.5],
      r = [0, 1],
      n,
      o = 1;
    function i(t) {
      Symbol('JSCA_11642_11644');
      return t != null && t <= t ? r[T(e, t, 0, o)] : n;
    }
    i.domain = function (t) {
      Symbol('JSCA_11645_11647');
      return arguments.length
        ? ((e = Array.from(t)), (o = Math.min(e.length, r.length - 1)), i)
        : e.slice();
    };
    i.range = function (t) {
      Symbol('JSCA_11648_11650');
      return arguments.length
        ? ((r = Array.from(t)), (o = Math.min(e.length, r.length - 1)), i)
        : r.slice();
    };
    i.invertExtent = function (t) {
      Symbol('JSCA_11651_11654');
      var n = r.indexOf(t);
      return [e[n - 1], e[n]];
    };
    i.unknown = function (t) {
      Symbol('JSCA_11655_11657');
      return arguments.length ? ((n = t), i) : n;
    };
    i.copy = function () {
      Symbol('JSCA_11658_11660');
      return f4().domain(e).range(r).unknown(n);
    };
    return y3.apply(i, arguments);
  }
  const _4 = new Date(),
    c4 = new Date();
  function o(i, l, e, r) {
    Symbol('JSCA_11664_11715');
    function a(t) {
      Symbol('JSCA_11665_11667');
      return i((t = arguments.length === 0 ? new Date() : new Date(+t))), t;
    }
    a.floor = (t) => {
      return i((t = new Date(+t))), t;
    };
    a.ceil = (t) => {
      return i((t = new Date(t - 1))), l(t, 1), i(t), t;
    };
    a.round = (t) => {
      const n = a(t),
        e = a.ceil(t);
      return t - n < e - t ? n : e;
    };
    a.offset = (t, n) => {
      return l((t = new Date(+t)), n == null ? 1 : Math.floor(n)), t;
    };
    a.range = (t, n, e) => {
      const r = [];
      t = a.ceil(t);
      e = e == null ? 1 : Math.floor(e);
      if (!(t < n) || !(e > 0)) return r;
      let o;
      do {
        r.push((o = new Date(+t))), l(t, e), i(t);
      } while (o < t && t < n);
      return r;
    };
    a.filter = (e) => {
      return o(
        (t) => {
          if (t >= t) while ((i(t), !e(t))) t.setTime(t - 1);
        },
        (t, n) => {
          if (t >= t) {
            if (n < 0)
              while (++n <= 0) {
                while ((l(t, -1), !e(t))) {}
              }
            else
              while (--n >= 0) {
                while ((l(t, +1), !e(t))) {}
              }
          }
        }
      );
    };
    if (e) {
      a.count = (t, n) => {
        _4.setTime(+t), c4.setTime(+n);
        i(_4), i(c4);
        return Math.floor(e(_4, c4));
      };
      a.every = (n) => {
        n = Math.floor(n);
        return !isFinite(n) || !(n > 0)
          ? null
          : !(n > 1)
          ? a
          : a.filter(
              r ? (t) => r(t) % n === 0 : (t) => a.count(0, t) % n === 0
            );
      };
    }
    return a;
  }
  const s4 = o(
    () => {},
    (t, n) => {
      t.setTime(+t + n);
    },
    (t, n) => {
      return n - t;
    }
  );
  s4.every = (e) => {
    e = Math.floor(e);
    if (!isFinite(e) || !(e > 0)) return null;
    if (!(e > 1)) return s4;
    return o(
      (t) => {
        t.setTime(Math.floor(t / e) * e);
      },
      (t, n) => {
        t.setTime(+t + n * e);
      },
      (t, n) => {
        return (n - t) / e;
      }
    );
  };
  const S4 = s4.range;
  const h4 = 1e3;
  const y4 = h4 * 60;
  const b4 = y4 * 60;
  const m4 = b4 * 24;
  const d4 = m4 * 7;
  const A4 = m4 * 30;
  const C4 = m4 * 365;
  const J4 = o(
    (t) => {
      t.setTime(t - t.getMilliseconds());
    },
    (t, n) => {
      t.setTime(+t + n * h4);
    },
    (t, n) => {
      return (n - t) / h4;
    },
    (t) => {
      return t.getUTCSeconds();
    }
  );
  const p4 = J4.range;
  const g4 = o(
    (t) => {
      t.setTime(t - t.getMilliseconds() - t.getSeconds() * h4);
    },
    (t, n) => {
      t.setTime(+t + n * y4);
    },
    (t, n) => {
      return (n - t) / y4;
    },
    (t) => {
      return t.getMinutes();
    }
  );
  const v4 = g4.range;
  const x4 = o(
    (t) => {
      t.setUTCSeconds(0, 0);
    },
    (t, n) => {
      t.setTime(+t + n * y4);
    },
    (t, n) => {
      return (n - t) / y4;
    },
    (t) => {
      return t.getUTCMinutes();
    }
  );
  const w4 = x4.range;
  const M4 = o(
    (t) => {
      t.setTime(
        t - t.getMilliseconds() - t.getSeconds() * h4 - t.getMinutes() * y4
      );
    },
    (t, n) => {
      t.setTime(+t + n * b4);
    },
    (t, n) => {
      return (n - t) / b4;
    },
    (t) => {
      return t.getHours();
    }
  );
  const T4 = M4.range;
  const k4 = o(
    (t) => {
      t.setUTCMinutes(0, 0, 0);
    },
    (t, n) => {
      t.setTime(+t + n * b4);
    },
    (t, n) => {
      return (n - t) / b4;
    },
    (t) => {
      return t.getUTCHours();
    }
  );
  const E4 = k4.range;
  const N4 = o(
    (t) => t.setHours(0, 0, 0, 0),
    (t, n) => t.setDate(t.getDate() + n),
    (t, n) =>
      (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * y4) / m4,
    (t) => t.getDate() - 1
  );
  const P4 = N4.range;
  const z4 = o(
    (t) => {
      t.setUTCHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setUTCDate(t.getUTCDate() + n);
    },
    (t, n) => {
      return (n - t) / m4;
    },
    (t) => {
      return t.getUTCDate() - 1;
    }
  );
  const I4 = z4.range;
  const $4 = o(
    (t) => {
      t.setUTCHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setUTCDate(t.getUTCDate() + n);
    },
    (t, n) => {
      return (n - t) / m4;
    },
    (t) => {
      return Math.floor(t / m4);
    }
  );
  const D4 = $4.range;
  function R4(n) {
    Symbol('JSCA_11813_11822');
    return o(
      (t) => {
        t.setDate(t.getDate() - ((t.getDay() + 7 - n) % 7));
        t.setHours(0, 0, 0, 0);
      },
      (t, n) => {
        t.setDate(t.getDate() + n * 7);
      },
      (t, n) => {
        return (
          (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * y4) / d4
        );
      }
    );
  }
  const F4 = R4(0);
  const q4 = R4(1);
  const U4 = R4(2);
  const O4 = R4(3);
  const B4 = R4(4);
  const Y4 = R4(5);
  const L4 = R4(6);
  const j4 = F4.range;
  const H4 = q4.range;
  const X4 = U4.range;
  const G4 = O4.range;
  const V4 = B4.range;
  const W4 = Y4.range;
  const Z4 = L4.range;
  function K4(n) {
    Symbol('JSCA_11837_11846');
    return o(
      (t) => {
        t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - n) % 7));
        t.setUTCHours(0, 0, 0, 0);
      },
      (t, n) => {
        t.setUTCDate(t.getUTCDate() + n * 7);
      },
      (t, n) => {
        return (n - t) / d4;
      }
    );
  }
  const Q4 = K4(0);
  const t6 = K4(1);
  const n6 = K4(2);
  const e6 = K4(3);
  const r6 = K4(4);
  const o6 = K4(5);
  const i6 = K4(6);
  const l6 = Q4.range;
  const a6 = t6.range;
  const u6 = n6.range;
  const f6 = e6.range;
  const _6 = r6.range;
  const c6 = o6.range;
  const s6 = i6.range;
  const S6 = o(
    (t) => {
      t.setDate(1);
      t.setHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setMonth(t.getMonth() + n);
    },
    (t, n) => {
      return (
        n.getMonth() - t.getMonth() + (n.getFullYear() - t.getFullYear()) * 12
      );
    },
    (t) => {
      return t.getMonth();
    }
  );
  const h6 = S6.range;
  const y6 = o(
    (t) => {
      t.setUTCDate(1);
      t.setUTCHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setUTCMonth(t.getUTCMonth() + n);
    },
    (t, n) => {
      return (
        n.getUTCMonth() -
        t.getUTCMonth() +
        (n.getUTCFullYear() - t.getUTCFullYear()) * 12
      );
    },
    (t) => {
      return t.getUTCMonth();
    }
  );
  const b6 = y6.range;
  const m6 = o(
    (t) => {
      t.setMonth(0, 1);
      t.setHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setFullYear(t.getFullYear() + n);
    },
    (t, n) => {
      return n.getFullYear() - t.getFullYear();
    },
    (t) => {
      return t.getFullYear();
    }
  );
  m6.every = (e) => {
    return !isFinite((e = Math.floor(e))) || !(e > 0)
      ? null
      : o(
          (t) => {
            t.setFullYear(Math.floor(t.getFullYear() / e) * e);
            t.setMonth(0, 1);
            t.setHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setFullYear(t.getFullYear() + n * e);
          }
        );
  };
  const d6 = m6.range;
  const A6 = o(
    (t) => {
      t.setUTCMonth(0, 1);
      t.setUTCHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setUTCFullYear(t.getUTCFullYear() + n);
    },
    (t, n) => {
      return n.getUTCFullYear() - t.getUTCFullYear();
    },
    (t) => {
      return t.getUTCFullYear();
    }
  );
  A6.every = (e) => {
    return !isFinite((e = Math.floor(e))) || !(e > 0)
      ? null
      : o(
          (t) => {
            t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e);
            t.setUTCMonth(0, 1);
            t.setUTCHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setUTCFullYear(t.getUTCFullYear() + n * e);
          }
        );
  };
  const C6 = A6.range;
  function J6(a, t, n, e, r, o) {
    Symbol('JSCA_11923_11941');
    const u = [
      [J4, 1, h4],
      [J4, 5, 5 * h4],
      [J4, 15, 15 * h4],
      [J4, 30, 30 * h4],
      [o, 1, y4],
      [o, 5, 5 * y4],
      [o, 15, 15 * y4],
      [o, 30, 30 * y4],
      [r, 1, b4],
      [r, 3, 3 * b4],
      [r, 6, 6 * b4],
      [r, 12, 12 * b4],
      [e, 1, m4],
      [e, 2, 2 * m4],
      [n, 1, d4],
      [t, 1, A4],
      [t, 3, 3 * A4],
      [a, 1, C4],
    ];
    function i(t, n, e) {
      Symbol('JSCA_11925_11931');
      const r = n < t;
      if (r) [t, n] = [n, t];
      const o = e && typeof e.range === 'function' ? e : l(t, n, e);
      const i = o ? o.range(t, +n + 1) : [];
      return r ? i.reverse() : i;
    }
    function l(t, n, e) {
      Symbol('JSCA_11932_11939');
      const r = Math.abs(n - t) / e;
      const o = b(([, , t]) => t).right(u, r);
      if (o === u.length) return a.every(Ht(t / C4, n / C4, e));
      if (o === 0) return s4.every(Math.max(Ht(t, n, e), 1));
      const [i, l] = u[r / u[o - 1][2] < u[o][2] / r ? o - 1 : o];
      return i.every(l);
    }
    return [i, l];
  }
  const [p6, g6] = J6(A6, y6, Q4, $4, k4, x4);
  const [v6, x6] = J6(m6, S6, F4, N4, M4, g4);
  function w6(t) {
    Symbol('JSCA_11944_11951');
    if (0 <= t.y && t.y < 100) {
      var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
      n.setFullYear(t.y);
      return n;
    }
    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }
  function M6(t) {
    Symbol('JSCA_11952_11959');
    if (0 <= t.y && t.y < 100) {
      var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
      n.setUTCFullYear(t.y);
      return n;
    }
    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }
  function T6(t, n, e) {
    Symbol('JSCA_11960_11970');
    return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
  }
  function k6(t) {
    Symbol('JSCA_11971_12250');
    var r = t.dateTime,
      o = t.date,
      i = t.time,
      n = t.periods,
      e = t.days,
      l = t.shortDays,
      a = t.months,
      u = t.shortMonths;
    var f = I6(n),
      _ = $6(n),
      c = I6(e),
      s = $6(e),
      S = I6(l),
      h = $6(l),
      y = I6(a),
      b = $6(a),
      m = I6(u),
      d = $6(u);
    var A = {
      a: z,
      A: I,
      b: $,
      B: D,
      c: null,
      d: ed,
      e: ed,
      f: ad,
      g: dd,
      G: Cd,
      H: rd,
      I: od,
      j: id,
      L: ld,
      m: ud,
      M: fd,
      p: R,
      q: F,
      Q: Yd,
      s: Ld,
      S: _d,
      u: cd,
      U: sd,
      V: hd,
      w: yd,
      W: bd,
      x: null,
      X: null,
      y: md,
      Y: Ad,
      Z: Jd,
      '%': Bd,
    };
    var C = {
      a: q,
      A: U,
      b: O,
      B: B,
      c: null,
      d: pd,
      e: pd,
      f: Md,
      g: Fd,
      G: Ud,
      H: gd,
      I: vd,
      j: xd,
      L: wd,
      m: Td,
      M: kd,
      p: Y,
      q: L,
      Q: Yd,
      s: Ld,
      S: Ed,
      u: Nd,
      U: Pd,
      V: Id,
      w: $d,
      W: Dd,
      x: null,
      X: null,
      y: Rd,
      Y: qd,
      Z: Od,
      '%': Bd,
    };
    var J = {
      a: w,
      A: M,
      b: T,
      B: k,
      c: E,
      d: H6,
      e: H6,
      f: K6,
      g: B6,
      G: O6,
      H: G6,
      I: G6,
      j: X6,
      L: Z6,
      m: j6,
      M: V6,
      p: x,
      q: L6,
      Q: td,
      s: nd,
      S: W6,
      u: R6,
      U: F6,
      V: q6,
      w: D6,
      W: U6,
      x: N,
      X: P,
      y: B6,
      Y: O6,
      Z: Y6,
      '%': Q6,
    };
    A.x = p(o, A);
    A.X = p(i, A);
    A.c = p(r, A);
    C.x = p(o, C);
    C.X = p(i, C);
    C.c = p(r, C);
    function p(u, f) {
      Symbol('JSCA_12082_12098');
      return function (t) {
        Symbol('JSCA_12083_12097');
        var n = [],
          e = -1,
          r = 0,
          o = u.length,
          i,
          l,
          a;
        if (!(t instanceof Date)) t = new Date(+t);
        while (++e < o) {
          if (u.charCodeAt(e) === 37) {
            n.push(u.slice(r, e));
            if ((l = E6[(i = u.charAt(++e))]) != null) i = u.charAt(++e);
            else l = i === 'e' ? ' ' : '0';
            if ((a = f[i])) i = a(t, l);
            n.push(i);
            r = e + 1;
          }
        }
        n.push(u.slice(r, e));
        return n.join('');
      };
    }
    function g(i, l) {
      Symbol('JSCA_12099_12139');
      return function (t) {
        Symbol('JSCA_12100_12138');
        var n = T6(1900, undefined, 1),
          e = v(n, i, (t += ''), 0),
          r,
          o;
        if (e != t.length) return null;
        if ('Q' in n) return new Date(n.Q);
        if ('s' in n) return new Date(n.s * 1e3 + ('L' in n ? n.L : 0));
        if (l && !('Z' in n)) n.Z = 0;
        if ('p' in n) n.H = (n.H % 12) + n.p * 12;
        if (n.m === undefined) n.m = 'q' in n ? n.q : 0;
        if ('V' in n) {
          if (n.V < 1 || n.V > 53) return null;
          if (!('w' in n)) n.w = 1;
          if ('Z' in n) {
            (r = M6(T6(n.y, 0, 1))), (o = r.getUTCDay());
            r = o > 4 || o === 0 ? t6.ceil(r) : t6(r);
            r = z4.offset(r, (n.V - 1) * 7);
            n.y = r.getUTCFullYear();
            n.m = r.getUTCMonth();
            n.d = r.getUTCDate() + ((n.w + 6) % 7);
          } else {
            (r = w6(T6(n.y, 0, 1))), (o = r.getDay());
            r = o > 4 || o === 0 ? q4.ceil(r) : q4(r);
            r = N4.offset(r, (n.V - 1) * 7);
            n.y = r.getFullYear();
            n.m = r.getMonth();
            n.d = r.getDate() + ((n.w + 6) % 7);
          }
        } else if ('W' in n || 'U' in n) {
          if (!('w' in n)) n.w = 'u' in n ? n.u % 7 : 'W' in n ? 1 : 0;
          o =
            'Z' in n
              ? M6(T6(n.y, 0, 1)).getUTCDay()
              : w6(T6(n.y, 0, 1)).getDay();
          n.m = 0;
          n.d =
            'W' in n
              ? ((n.w + 6) % 7) + n.W * 7 - ((o + 5) % 7)
              : n.w + n.U * 7 - ((o + 6) % 7);
        }
        if ('Z' in n) {
          n.H += (n.Z / 100) | 0;
          n.M += n.Z % 100;
          return M6(n);
        }
        return w6(n);
      };
    }
    function v(t, n, e, r) {
      Symbol('JSCA_12140_12154');
      var o = 0,
        i = n.length,
        l = e.length,
        a,
        u;
      while (o < i) {
        if (r >= l) return -1;
        a = n.charCodeAt(o++);
        if (a === 37) {
          a = n.charAt(o++);
          u = J[a in E6 ? n.charAt(o++) : a];
          if (!u || (r = u(t, e, r)) < 0) return -1;
        } else if (a != e.charCodeAt(r++)) {
          return -1;
        }
      }
      return r;
    }
    function x(t, n, e) {
      Symbol('JSCA_12155_12158');
      var r = f.exec(n.slice(e));
      return r ? ((t.p = _.get(r[0].toLowerCase())), e + r[0].length) : -1;
    }
    function w(t, n, e) {
      Symbol('JSCA_12159_12162');
      var r = S.exec(n.slice(e));
      return r ? ((t.w = h.get(r[0].toLowerCase())), e + r[0].length) : -1;
    }
    function M(t, n, e) {
      Symbol('JSCA_12163_12166');
      var r = c.exec(n.slice(e));
      return r ? ((t.w = s.get(r[0].toLowerCase())), e + r[0].length) : -1;
    }
    function T(t, n, e) {
      Symbol('JSCA_12167_12170');
      var r = m.exec(n.slice(e));
      return r ? ((t.m = d.get(r[0].toLowerCase())), e + r[0].length) : -1;
    }
    function k(t, n, e) {
      Symbol('JSCA_12171_12174');
      var r = y.exec(n.slice(e));
      return r ? ((t.m = b.get(r[0].toLowerCase())), e + r[0].length) : -1;
    }
    function E(t, n, e) {
      Symbol('JSCA_12175_12177');
      return v(t, r, n, e);
    }
    function N(t, n, e) {
      Symbol('JSCA_12178_12180');
      return v(t, o, n, e);
    }
    function P(t, n, e) {
      Symbol('JSCA_12181_12183');
      return v(t, i, n, e);
    }
    function z(t) {
      Symbol('JSCA_12184_12186');
      return l[t.getDay()];
    }
    function I(t) {
      Symbol('JSCA_12187_12189');
      return e[t.getDay()];
    }
    function $(t) {
      Symbol('JSCA_12190_12192');
      return u[t.getMonth()];
    }
    function D(t) {
      Symbol('JSCA_12193_12195');
      return a[t.getMonth()];
    }
    function R(t) {
      Symbol('JSCA_12196_12198');
      return n[+(t.getHours() >= 12)];
    }
    function F(t) {
      Symbol('JSCA_12199_12201');
      return 1 + ~~(t.getMonth() / 3);
    }
    function q(t) {
      Symbol('JSCA_12202_12204');
      return l[t.getUTCDay()];
    }
    function U(t) {
      Symbol('JSCA_12205_12207');
      return e[t.getUTCDay()];
    }
    function O(t) {
      Symbol('JSCA_12208_12210');
      return u[t.getUTCMonth()];
    }
    function B(t) {
      Symbol('JSCA_12211_12213');
      return a[t.getUTCMonth()];
    }
    function Y(t) {
      Symbol('JSCA_12214_12216');
      return n[+(t.getUTCHours() >= 12)];
    }
    function L(t) {
      Symbol('JSCA_12217_12219');
      return 1 + ~~(t.getUTCMonth() / 3);
    }
    return {
      format: function (t) {
        Symbol('JSCA_12221_12227');
        var n = p((t += ''), A);
        n.toString = function () {
          Symbol('JSCA_12223_12225');
          return t;
        };
        return n;
      },
      parse: function (t) {
        Symbol('JSCA_12228_12234');
        var n = g((t += ''), false);
        n.toString = function () {
          Symbol('JSCA_12230_12232');
          return t;
        };
        return n;
      },
      utcFormat: function (t) {
        Symbol('JSCA_12235_12241');
        var n = p((t += ''), C);
        n.toString = function () {
          Symbol('JSCA_12237_12239');
          return t;
        };
        return n;
      },
      utcParse: function (t) {
        Symbol('JSCA_12242_12248');
        var n = g((t += ''), true);
        n.toString = function () {
          Symbol('JSCA_12244_12246');
          return t;
        };
        return n;
      },
    };
  }
  var E6 = { '-': '', _: ' ', 0: '0' },
    i = /^\s*\d+/,
    N6 = /^%/,
    P6 = /[\\^$*+?|[\]().{}]/g;
  function r(t, n, e) {
    Symbol('JSCA_12256_12259');
    var r = t < 0 ? '-' : '',
      o = (r ? -t : t) + '',
      i = o.length;
    return r + (i < e ? new Array(e - i + 1).join(n) + o : o);
  }
  function z6(t) {
    Symbol('JSCA_12260_12262');
    return t.replace(P6, '\\$&');
  }
  function I6(t) {
    Symbol('JSCA_12263_12265');
    return new RegExp('^(?:' + t.map(z6).join('|') + ')', 'i');
  }
  function $6(t) {
    Symbol('JSCA_12266_12268');
    return new Map(t.map((t, n) => [t.toLowerCase(), n]));
  }
  function D6(t, n, e) {
    Symbol('JSCA_12269_12272');
    var r = i.exec(n.slice(e, e + 1));
    return r ? ((t.w = +r[0]), e + r[0].length) : -1;
  }
  function R6(t, n, e) {
    Symbol('JSCA_12273_12276');
    var r = i.exec(n.slice(e, e + 1));
    return r ? ((t.u = +r[0]), e + r[0].length) : -1;
  }
  function F6(t, n, e) {
    Symbol('JSCA_12277_12280');
    var r = i.exec(n.slice(e, e + 2));
    return r ? ((t.U = +r[0]), e + r[0].length) : -1;
  }
  function q6(t, n, e) {
    Symbol('JSCA_12281_12284');
    var r = i.exec(n.slice(e, e + 2));
    return r ? ((t.V = +r[0]), e + r[0].length) : -1;
  }
  function U6(t, n, e) {
    Symbol('JSCA_12285_12288');
    var r = i.exec(n.slice(e, e + 2));
    return r ? ((t.W = +r[0]), e + r[0].length) : -1;
  }
  function O6(t, n, e) {
    Symbol('JSCA_12289_12292');
    var r = i.exec(n.slice(e, e + 4));
    return r ? ((t.y = +r[0]), e + r[0].length) : -1;
  }
  function B6(t, n, e) {
    Symbol('JSCA_12293_12296');
    var r = i.exec(n.slice(e, e + 2));
    return r
      ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
      : -1;
  }
  function Y6(t, n, e) {
    Symbol('JSCA_12297_12300');
    var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
    return r
      ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), e + r[0].length)
      : -1;
  }
  function L6(t, n, e) {
    Symbol('JSCA_12301_12304');
    var r = i.exec(n.slice(e, e + 1));
    return r ? ((t.q = r[0] * 3 - 3), e + r[0].length) : -1;
  }
  function j6(t, n, e) {
    Symbol('JSCA_12305_12308');
    var r = i.exec(n.slice(e, e + 2));
    return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
  }
  function H6(t, n, e) {
    Symbol('JSCA_12309_12312');
    var r = i.exec(n.slice(e, e + 2));
    return r ? ((t.d = +r[0]), e + r[0].length) : -1;
  }
  function X6(t, n, e) {
    Symbol('JSCA_12313_12316');
    var r = i.exec(n.slice(e, e + 3));
    return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
  }
  function G6(t, n, e) {
    Symbol('JSCA_12317_12320');
    var r = i.exec(n.slice(e, e + 2));
    return r ? ((t.H = +r[0]), e + r[0].length) : -1;
  }
  function V6(t, n, e) {
    Symbol('JSCA_12321_12324');
    var r = i.exec(n.slice(e, e + 2));
    return r ? ((t.M = +r[0]), e + r[0].length) : -1;
  }
  function W6(t, n, e) {
    Symbol('JSCA_12325_12328');
    var r = i.exec(n.slice(e, e + 2));
    return r ? ((t.S = +r[0]), e + r[0].length) : -1;
  }
  function Z6(t, n, e) {
    Symbol('JSCA_12329_12332');
    var r = i.exec(n.slice(e, e + 3));
    return r ? ((t.L = +r[0]), e + r[0].length) : -1;
  }
  function K6(t, n, e) {
    Symbol('JSCA_12333_12336');
    var r = i.exec(n.slice(e, e + 6));
    return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
  }
  function Q6(t, n, e) {
    Symbol('JSCA_12337_12340');
    var r = N6.exec(n.slice(e, e + 1));
    return r ? e + r[0].length : -1;
  }
  function td(t, n, e) {
    Symbol('JSCA_12341_12344');
    var r = i.exec(n.slice(e));
    return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
  }
  function nd(t, n, e) {
    Symbol('JSCA_12345_12348');
    var r = i.exec(n.slice(e));
    return r ? ((t.s = +r[0]), e + r[0].length) : -1;
  }
  function ed(t, n) {
    Symbol('JSCA_12349_12351');
    return r(t.getDate(), n, 2);
  }
  function rd(t, n) {
    Symbol('JSCA_12352_12354');
    return r(t.getHours(), n, 2);
  }
  function od(t, n) {
    Symbol('JSCA_12355_12357');
    return r(t.getHours() % 12 || 12, n, 2);
  }
  function id(t, n) {
    Symbol('JSCA_12358_12360');
    return r(1 + N4.count(m6(t), t), n, 3);
  }
  function ld(t, n) {
    Symbol('JSCA_12361_12363');
    return r(t.getMilliseconds(), n, 3);
  }
  function ad(t, n) {
    Symbol('JSCA_12364_12366');
    return ld(t, n) + '000';
  }
  function ud(t, n) {
    Symbol('JSCA_12367_12369');
    return r(t.getMonth() + 1, n, 2);
  }
  function fd(t, n) {
    Symbol('JSCA_12370_12372');
    return r(t.getMinutes(), n, 2);
  }
  function _d(t, n) {
    Symbol('JSCA_12373_12375');
    return r(t.getSeconds(), n, 2);
  }
  function cd(t) {
    Symbol('JSCA_12376_12379');
    var n = t.getDay();
    return n === 0 ? 7 : n;
  }
  function sd(t, n) {
    Symbol('JSCA_12380_12382');
    return r(F4.count(m6(t) - 1, t), n, 2);
  }
  function Sd(t) {
    Symbol('JSCA_12383_12386');
    var n = t.getDay();
    return n >= 4 || n === 0 ? B4(t) : B4.ceil(t);
  }
  function hd(t, n) {
    Symbol('JSCA_12387_12390');
    t = Sd(t);
    return r(B4.count(m6(t), t) + (m6(t).getDay() === 4), n, 2);
  }
  function yd(t) {
    Symbol('JSCA_12391_12393');
    return t.getDay();
  }
  function bd(t, n) {
    Symbol('JSCA_12394_12396');
    return r(q4.count(m6(t) - 1, t), n, 2);
  }
  function md(t, n) {
    Symbol('JSCA_12397_12399');
    return r(t.getFullYear() % 100, n, 2);
  }
  function dd(t, n) {
    Symbol('JSCA_12400_12403');
    t = Sd(t);
    return r(t.getFullYear() % 100, n, 2);
  }
  function Ad(t, n) {
    Symbol('JSCA_12404_12406');
    return r(t.getFullYear() % 1e4, n, 4);
  }
  function Cd(t, n) {
    Symbol('JSCA_12407_12411');
    var e = t.getDay();
    t = e >= 4 || e === 0 ? B4(t) : B4.ceil(t);
    return r(t.getFullYear() % 1e4, n, 4);
  }
  function Jd(t) {
    Symbol('JSCA_12412_12415');
    var n = t.getTimezoneOffset();
    return (
      (n > 0 ? '-' : ((n *= -1), '+')) +
      r((n / 60) | 0, '0', 2) +
      r(n % 60, '0', 2)
    );
  }
  function pd(t, n) {
    Symbol('JSCA_12416_12418');
    return r(t.getUTCDate(), n, 2);
  }
  function gd(t, n) {
    Symbol('JSCA_12419_12421');
    return r(t.getUTCHours(), n, 2);
  }
  function vd(t, n) {
    Symbol('JSCA_12422_12424');
    return r(t.getUTCHours() % 12 || 12, n, 2);
  }
  function xd(t, n) {
    Symbol('JSCA_12425_12427');
    return r(1 + z4.count(A6(t), t), n, 3);
  }
  function wd(t, n) {
    Symbol('JSCA_12428_12430');
    return r(t.getUTCMilliseconds(), n, 3);
  }
  function Md(t, n) {
    Symbol('JSCA_12431_12433');
    return wd(t, n) + '000';
  }
  function Td(t, n) {
    Symbol('JSCA_12434_12436');
    return r(t.getUTCMonth() + 1, n, 2);
  }
  function kd(t, n) {
    Symbol('JSCA_12437_12439');
    return r(t.getUTCMinutes(), n, 2);
  }
  function Ed(t, n) {
    Symbol('JSCA_12440_12442');
    return r(t.getUTCSeconds(), n, 2);
  }
  function Nd(t) {
    Symbol('JSCA_12443_12446');
    var n = t.getUTCDay();
    return n === 0 ? 7 : n;
  }
  function Pd(t, n) {
    Symbol('JSCA_12447_12449');
    return r(Q4.count(A6(t) - 1, t), n, 2);
  }
  function zd(t) {
    Symbol('JSCA_12450_12453');
    var n = t.getUTCDay();
    return n >= 4 || n === 0 ? r6(t) : r6.ceil(t);
  }
  function Id(t, n) {
    Symbol('JSCA_12454_12457');
    t = zd(t);
    return r(r6.count(A6(t), t) + (A6(t).getUTCDay() === 4), n, 2);
  }
  function $d(t) {
    Symbol('JSCA_12458_12460');
    return t.getUTCDay();
  }
  function Dd(t, n) {
    Symbol('JSCA_12461_12463');
    return r(t6.count(A6(t) - 1, t), n, 2);
  }
  function Rd(t, n) {
    Symbol('JSCA_12464_12466');
    return r(t.getUTCFullYear() % 100, n, 2);
  }
  function Fd(t, n) {
    Symbol('JSCA_12467_12470');
    t = zd(t);
    return r(t.getUTCFullYear() % 100, n, 2);
  }
  function qd(t, n) {
    Symbol('JSCA_12471_12473');
    return r(t.getUTCFullYear() % 1e4, n, 4);
  }
  function Ud(t, n) {
    Symbol('JSCA_12474_12478');
    var e = t.getUTCDay();
    t = e >= 4 || e === 0 ? r6(t) : r6.ceil(t);
    return r(t.getUTCFullYear() % 1e4, n, 4);
  }
  function Od() {
    Symbol('JSCA_12479_12481');
    return '+0000';
  }
  function Bd() {
    Symbol('JSCA_12482_12484');
    return '%';
  }
  function Yd(t) {
    Symbol('JSCA_12485_12487');
    return +t;
  }
  function Ld(t) {
    Symbol('JSCA_12488_12490');
    return Math.floor(+t / 1e3);
  }
  var jd;
  a.timeFormat = void 0;
  a.timeParse = void 0;
  a.utcFormat = void 0;
  a.utcParse = void 0;
  Hd({
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
  function Hd(t) {
    Symbol('JSCA_12506_12513');
    jd = k6(t);
    a.timeFormat = jd.format;
    a.timeParse = jd.parse;
    a.utcFormat = jd.utcFormat;
    a.utcParse = jd.utcParse;
    return jd;
  }
  var Xd = '%Y-%m-%dT%H:%M:%S.%LZ';
  function Gd(t) {
    Symbol('JSCA_12515_12517');
    return t.toISOString();
  }
  var Vd = Date.prototype.toISOString ? Gd : a.utcFormat(Xd);
  var Wd = Vd;
  function Zd(t) {
    Symbol('JSCA_12520_12523');
    var n = new Date(t);
    return isNaN(n) ? null : n;
  }
  var Kd = +new Date('2000-01-01T00:00:00.000Z') ? Zd : a.utcParse(Xd);
  var Qd = Kd;
  function t7(t) {
    Symbol('JSCA_12526_12528');
    return new Date(t);
  }
  function n7(t) {
    Symbol('JSCA_12529_12531');
    return t instanceof Date ? +t : +new Date(+t);
  }
  function e7(e, r, n, o, i, l, a, u, f, _) {
    Symbol('JSCA_12532_12560');
    var c = P3(),
      s = c.invert,
      S = c.domain;
    var h = _('.%L'),
      y = _(':%S'),
      b = _('%I:%M'),
      m = _('%I %p'),
      d = _('%a %d'),
      A = _('%b %d'),
      C = _('%B'),
      J = _('%Y');
    function p(t) {
      Symbol('JSCA_12535_12537');
      return (
        f(t) < t
          ? h
          : u(t) < t
          ? y
          : a(t) < t
          ? b
          : l(t) < t
          ? m
          : o(t) < t
          ? i(t) < t
            ? d
            : A
          : n(t) < t
          ? C
          : J
      )(t);
    }
    c.invert = function (t) {
      Symbol('JSCA_12538_12540');
      return new Date(s(t));
    };
    c.domain = function (t) {
      Symbol('JSCA_12541_12543');
      return arguments.length ? S(Array.from(t, n7)) : S().map(t7);
    };
    c.ticks = function (t) {
      Symbol('JSCA_12544_12547');
      var n = S();
      return e(n[0], n[n.length - 1], t == null ? 10 : t);
    };
    c.tickFormat = function (t, n) {
      Symbol('JSCA_12548_12550');
      return n == null ? p : _(n);
    };
    c.nice = function (t) {
      Symbol('JSCA_12551_12555');
      var n = S();
      if (!t || typeof t.range !== 'function')
        t = r(n[0], n[n.length - 1], t == null ? 10 : t);
      return t ? S(R3(n, t)) : c;
    };
    c.copy = function () {
      Symbol('JSCA_12556_12558');
      return E3(c, e7(e, r, n, o, i, l, a, u, f, _));
    };
    return c;
  }
  function r7() {
    Symbol('JSCA_12561_12563');
    return y3.apply(
      e7(v6, x6, m6, S6, F4, N4, M4, g4, J4, a.timeFormat).domain([
        new Date(2e3, 0, 1),
        new Date(2e3, 0, 2),
      ]),
      arguments
    );
  }
  function o7() {
    Symbol('JSCA_12564_12566');
    return y3.apply(
      e7(p6, g6, A6, y6, Q4, z4, k4, x4, J4, a.utcFormat).domain([
        Date.UTC(2e3, 0, 1),
        Date.UTC(2e3, 0, 2),
      ]),
      arguments
    );
  }
  function i7() {
    Symbol('JSCA_12567_12596');
    var n = 0,
      e = 1,
      r,
      o,
      i,
      l,
      a = x3,
      u = false,
      f;
    function _(t) {
      Symbol('JSCA_12569_12571');
      return t == null || isNaN((t = +t))
        ? f
        : a(
            i === 0
              ? 0.5
              : ((t = (l(t) - r) * i), u ? Math.max(0, Math.min(1, t)) : t)
          );
    }
    _.domain = function (t) {
      Symbol('JSCA_12572_12574');
      return arguments.length
        ? (([n, e] = t),
          (r = l((n = +n))),
          (o = l((e = +e))),
          (i = r === o ? 0 : 1 / (o - r)),
          _)
        : [n, e];
    };
    _.clamp = function (t) {
      Symbol('JSCA_12575_12577');
      return arguments.length ? ((u = !!t), _) : u;
    };
    _.interpolator = function (t) {
      Symbol('JSCA_12578_12580');
      return arguments.length ? ((a = t), _) : a;
    };
    function t(r) {
      Symbol('JSCA_12581_12586');
      return function (t) {
        Symbol('JSCA_12582_12585');
        var n, e;
        return arguments.length
          ? (([n, e] = t), (a = r(n, e)), _)
          : [a(0), a(1)];
      };
    }
    _.range = t(Al);
    _.rangeRound = t(pl);
    _.unknown = function (t) {
      Symbol('JSCA_12589_12591');
      return arguments.length ? ((f = t), _) : f;
    };
    return function (t) {
      Symbol('JSCA_12592_12595');
      (l = t), (r = t(n)), (o = t(e)), (i = r === o ? 0 : 1 / (o - r));
      return _;
    };
  }
  function l7(t, n) {
    Symbol('JSCA_12597_12599');
    return n
      .domain(t.domain())
      .interpolator(t.interpolator())
      .clamp(t.clamp())
      .unknown(t.unknown());
  }
  function a7() {
    Symbol('JSCA_12600_12606');
    var t = I3(i7()(x3));
    t.copy = function () {
      Symbol('JSCA_12602_12604');
      return l7(t, a7());
    };
    return b3.apply(t, arguments);
  }
  function u7() {
    Symbol('JSCA_12607_12613');
    var t = H3(i7()).domain([1, 10]);
    t.copy = function () {
      Symbol('JSCA_12609_12611');
      return l7(t, u7()).base(t.base());
    };
    return b3.apply(t, arguments);
  }
  function f7() {
    Symbol('JSCA_12614_12620');
    var t = W3(i7());
    t.copy = function () {
      Symbol('JSCA_12616_12618');
      return l7(t, f7()).constant(t.constant());
    };
    return b3.apply(t, arguments);
  }
  function _7() {
    Symbol('JSCA_12621_12627');
    var t = n4(i7());
    t.copy = function () {
      Symbol('JSCA_12623_12625');
      return l7(t, _7()).exponent(t.exponent());
    };
    return b3.apply(t, arguments);
  }
  function c7() {
    Symbol('JSCA_12628_12630');
    return _7.apply(null, arguments).exponent(0.5);
  }
  function s7() {
    Symbol('JSCA_12631_12658');
    var r = [],
      e = x3;
    function o(t) {
      Symbol('JSCA_12633_12635');
      if (t != null && !isNaN((t = +t)))
        return e((T(r, t, 1) - 1) / (r.length - 1));
    }
    o.domain = function (n) {
      Symbol('JSCA_12636_12642');
      if (!arguments.length) return r.slice();
      r = [];
      for (let t of n) if (t != null && !isNaN((t = +t))) r.push(t);
      r.sort(f);
      return o;
    };
    o.interpolator = function (t) {
      Symbol('JSCA_12643_12645');
      return arguments.length ? ((e = t), o) : e;
    };
    o.range = function () {
      Symbol('JSCA_12646_12648');
      return r.map((t, n) => e(n / (r.length - 1)));
    };
    o.quantiles = function (e) {
      Symbol('JSCA_12649_12653');
      return Array.from({ length: e + 1 }, (t, n) => rn(r, n / e));
    };
    o.copy = function () {
      Symbol('JSCA_12654_12656');
      return s7(e).domain(r);
    };
    return b3.apply(o, arguments);
  }
  function S7() {
    Symbol('JSCA_12659_12688');
    var n = 0,
      e = 0.5,
      r = 1,
      o = 1,
      i,
      l,
      a,
      u,
      f,
      _ = x3,
      c,
      s = false,
      S;
    function h(t) {
      Symbol('JSCA_12661_12663');
      return isNaN((t = +t))
        ? S
        : ((t = 0.5 + ((t = +c(t)) - l) * (o * t < o * l ? u : f)),
          _(s ? Math.max(0, Math.min(1, t)) : t));
    }
    h.domain = function (t) {
      Symbol('JSCA_12664_12666');
      return arguments.length
        ? (([n, e, r] = t),
          (i = c((n = +n))),
          (l = c((e = +e))),
          (a = c((r = +r))),
          (u = i === l ? 0 : 0.5 / (l - i)),
          (f = l === a ? 0 : 0.5 / (a - l)),
          (o = l < i ? -1 : 1),
          h)
        : [n, e, r];
    };
    h.clamp = function (t) {
      Symbol('JSCA_12667_12669');
      return arguments.length ? ((s = !!t), h) : s;
    };
    h.interpolator = function (t) {
      Symbol('JSCA_12670_12672');
      return arguments.length ? ((_ = t), h) : _;
    };
    function t(o) {
      Symbol('JSCA_12673_12678');
      return function (t) {
        Symbol('JSCA_12674_12677');
        var n, e, r;
        return arguments.length
          ? (([n, e, r] = t), (_ = Xl(o, [n, e, r])), h)
          : [_(0), _(0.5), _(1)];
      };
    }
    h.range = t(Al);
    h.rangeRound = t(pl);
    h.unknown = function (t) {
      Symbol('JSCA_12681_12683');
      return arguments.length ? ((S = t), h) : S;
    };
    return function (t) {
      Symbol('JSCA_12684_12687');
      (c = t),
        (i = t(n)),
        (l = t(e)),
        (a = t(r)),
        (u = i === l ? 0 : 0.5 / (l - i)),
        (f = l === a ? 0 : 0.5 / (a - l)),
        (o = l < i ? -1 : 1);
      return h;
    };
  }
  function h7() {
    Symbol('JSCA_12689_12695');
    var t = I3(S7()(x3));
    t.copy = function () {
      Symbol('JSCA_12691_12693');
      return l7(t, h7());
    };
    return b3.apply(t, arguments);
  }
  function y7() {
    Symbol('JSCA_12696_12702');
    var t = H3(S7()).domain([0.1, 1, 10]);
    t.copy = function () {
      Symbol('JSCA_12698_12700');
      return l7(t, y7()).base(t.base());
    };
    return b3.apply(t, arguments);
  }
  function b7() {
    Symbol('JSCA_12703_12709');
    var t = W3(S7());
    t.copy = function () {
      Symbol('JSCA_12705_12707');
      return l7(t, b7()).constant(t.constant());
    };
    return b3.apply(t, arguments);
  }
  function m7() {
    Symbol('JSCA_12710_12716');
    var t = n4(S7());
    t.copy = function () {
      Symbol('JSCA_12712_12714');
      return l7(t, m7()).exponent(t.exponent());
    };
    return b3.apply(t, arguments);
  }
  function d7() {
    Symbol('JSCA_12717_12719');
    return m7.apply(null, arguments).exponent(0.5);
  }
  function l(t) {
    Symbol('JSCA_12720_12724');
    var n = (t.length / 6) | 0,
      e = new Array(n),
      r = 0;
    while (r < n) e[r] = '#' + t.slice(r * 6, ++r * 6);
    return e;
  }
  var A7 = l('1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf');
  var C7 = l('7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666');
  var J7 = l('1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666');
  var p7 = l('4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0');
  var g7 = l(
    'a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928'
  );
  var v7 = l('fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2');
  var x7 = l('b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc');
  var w7 = l('e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999');
  var M7 = l('66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3');
  var T7 = l(
    '8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f'
  );
  var k7 = l('4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab');
  var S = (t) => il(t[t.length - 1]);
  var E7 = new Array(3)
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
    .map(l);
  var N7 = S(E7);
  var P7 = new Array(3)
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
    .map(l);
  var z7 = S(P7);
  var I7 = new Array(3)
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
    .map(l);
  var $7 = S(I7);
  var D7 = new Array(3)
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
    .map(l);
  var R7 = S(D7);
  var F7 = new Array(3)
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
    .map(l);
  var q7 = S(F7);
  var U7 = new Array(3)
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
    .map(l);
  var O7 = S(U7);
  var B7 = new Array(3)
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
    .map(l);
  var Y7 = S(B7);
  var L7 = new Array(3)
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
    .map(l);
  var j7 = S(L7);
  var H7 = new Array(3)
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
    .map(l);
  var X7 = S(H7);
  var G7 = new Array(3)
    .concat(
      'e5f5f999d8c92ca25f',
      'edf8fbb2e2e266c2a4238b45',
      'edf8fbb2e2e266c2a42ca25f006d2c',
      'edf8fbccece699d8c966c2a42ca25f006d2c',
      'edf8fbccece699d8c966c2a441ae76238b45005824',
      'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824',
      'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b'
    )
    .map(l);
  var V7 = S(G7);
  var W7 = new Array(3)
    .concat(
      'e0ecf49ebcda8856a7',
      'edf8fbb3cde38c96c688419d',
      'edf8fbb3cde38c96c68856a7810f7c',
      'edf8fbbfd3e69ebcda8c96c68856a7810f7c',
      'edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b',
      'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b',
      'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b'
    )
    .map(l);
  var Z7 = S(W7);
  var K7 = new Array(3)
    .concat(
      'e0f3dba8ddb543a2ca',
      'f0f9e8bae4bc7bccc42b8cbe',
      'f0f9e8bae4bc7bccc443a2ca0868ac',
      'f0f9e8ccebc5a8ddb57bccc443a2ca0868ac',
      'f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e',
      'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e',
      'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081'
    )
    .map(l);
  var Q7 = S(K7);
  var t8 = new Array(3)
    .concat(
      'fee8c8fdbb84e34a33',
      'fef0d9fdcc8afc8d59d7301f',
      'fef0d9fdcc8afc8d59e34a33b30000',
      'fef0d9fdd49efdbb84fc8d59e34a33b30000',
      'fef0d9fdd49efdbb84fc8d59ef6548d7301f990000',
      'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000',
      'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000'
    )
    .map(l);
  var n8 = S(t8);
  var e8 = new Array(3)
    .concat(
      'ece2f0a6bddb1c9099',
      'f6eff7bdc9e167a9cf02818a',
      'f6eff7bdc9e167a9cf1c9099016c59',
      'f6eff7d0d1e6a6bddb67a9cf1c9099016c59',
      'f6eff7d0d1e6a6bddb67a9cf3690c002818a016450',
      'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450',
      'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636'
    )
    .map(l);
  var r8 = S(e8);
  var o8 = new Array(3)
    .concat(
      'ece7f2a6bddb2b8cbe',
      'f1eef6bdc9e174a9cf0570b0',
      'f1eef6bdc9e174a9cf2b8cbe045a8d',
      'f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d',
      'f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b',
      'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b',
      'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858'
    )
    .map(l);
  var i8 = S(o8);
  var l8 = new Array(3)
    .concat(
      'e7e1efc994c7dd1c77',
      'f1eef6d7b5d8df65b0ce1256',
      'f1eef6d7b5d8df65b0dd1c77980043',
      'f1eef6d4b9dac994c7df65b0dd1c77980043',
      'f1eef6d4b9dac994c7df65b0e7298ace125691003f',
      'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f',
      'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f'
    )
    .map(l);
  var a8 = S(l8);
  var u8 = new Array(3)
    .concat(
      'fde0ddfa9fb5c51b8a',
      'feebe2fbb4b9f768a1ae017e',
      'feebe2fbb4b9f768a1c51b8a7a0177',
      'feebe2fcc5c0fa9fb5f768a1c51b8a7a0177',
      'feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177',
      'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177',
      'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a'
    )
    .map(l);
  var f8 = S(u8);
  var _8 = new Array(3)
    .concat(
      'edf8b17fcdbb2c7fb8',
      'ffffcca1dab441b6c4225ea8',
      'ffffcca1dab441b6c42c7fb8253494',
      'ffffccc7e9b47fcdbb41b6c42c7fb8253494',
      'ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84',
      'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84',
      'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58'
    )
    .map(l);
  var c8 = S(_8);
  var s8 = new Array(3)
    .concat(
      'f7fcb9addd8e31a354',
      'ffffccc2e69978c679238443',
      'ffffccc2e69978c67931a354006837',
      'ffffccd9f0a3addd8e78c67931a354006837',
      'ffffccd9f0a3addd8e78c67941ab5d238443005a32',
      'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32',
      'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529'
    )
    .map(l);
  var S8 = S(s8);
  var h8 = new Array(3)
    .concat(
      'fff7bcfec44fd95f0e',
      'ffffd4fed98efe9929cc4c02',
      'ffffd4fed98efe9929d95f0e993404',
      'ffffd4fee391fec44ffe9929d95f0e993404',
      'ffffd4fee391fec44ffe9929ec7014cc4c028c2d04',
      'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04',
      'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506'
    )
    .map(l);
  var y8 = S(h8);
  var b8 = new Array(3)
    .concat(
      'ffeda0feb24cf03b20',
      'ffffb2fecc5cfd8d3ce31a1c',
      'ffffb2fecc5cfd8d3cf03b20bd0026',
      'ffffb2fed976feb24cfd8d3cf03b20bd0026',
      'ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026',
      'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026',
      'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026'
    )
    .map(l);
  var m8 = S(b8);
  var d8 = new Array(3)
    .concat(
      'deebf79ecae13182bd',
      'eff3ffbdd7e76baed62171b5',
      'eff3ffbdd7e76baed63182bd08519c',
      'eff3ffc6dbef9ecae16baed63182bd08519c',
      'eff3ffc6dbef9ecae16baed64292c62171b5084594',
      'f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594',
      'f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b'
    )
    .map(l);
  var A8 = S(d8);
  var C8 = new Array(3)
    .concat(
      'e5f5e0a1d99b31a354',
      'edf8e9bae4b374c476238b45',
      'edf8e9bae4b374c47631a354006d2c',
      'edf8e9c7e9c0a1d99b74c47631a354006d2c',
      'edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32',
      'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32',
      'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b'
    )
    .map(l);
  var J8 = S(C8);
  var p8 = new Array(3)
    .concat(
      'f0f0f0bdbdbd636363',
      'f7f7f7cccccc969696525252',
      'f7f7f7cccccc969696636363252525',
      'f7f7f7d9d9d9bdbdbd969696636363252525',
      'f7f7f7d9d9d9bdbdbd969696737373525252252525',
      'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525',
      'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000'
    )
    .map(l);
  var g8 = S(p8);
  var v8 = new Array(3)
    .concat(
      'efedf5bcbddc756bb1',
      'f2f0f7cbc9e29e9ac86a51a3',
      'f2f0f7cbc9e29e9ac8756bb154278f',
      'f2f0f7dadaebbcbddc9e9ac8756bb154278f',
      'f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486',
      'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486',
      'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d'
    )
    .map(l);
  var x8 = S(v8);
  var w8 = new Array(3)
    .concat(
      'fee0d2fc9272de2d26',
      'fee5d9fcae91fb6a4acb181d',
      'fee5d9fcae91fb6a4ade2d26a50f15',
      'fee5d9fcbba1fc9272fb6a4ade2d26a50f15',
      'fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d',
      'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d',
      'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d'
    )
    .map(l);
  var M8 = S(w8);
  var T8 = new Array(3)
    .concat(
      'fee6cefdae6be6550d',
      'feeddefdbe85fd8d3cd94701',
      'feeddefdbe85fd8d3ce6550da63603',
      'feeddefdd0a2fdae6bfd8d3ce6550da63603',
      'feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04',
      'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04',
      'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704'
    )
    .map(l);
  var k8 = S(T8);
  function E8(t) {
    Symbol('JSCA_12791_12794');
    t = Math.max(0, Math.min(1, t));
    return (
      'rgb(' +
      Math.max(
        0,
        Math.min(
          255,
          Math.round(
            -4.54 -
              t *
                (35.34 -
                  t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))
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
                (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))
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
                  t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))
          )
        )
      ) +
      ')'
    );
  }
  var N8 = Hl(Xi(300, 0.5, 0), Xi(-240, 0.5, 1));
  var P8 = Hl(Xi(-100, 0.75, 0.35), Xi(80, 1.5, 0.8));
  var z8 = Hl(Xi(260, 0.75, 0.35), Xi(80, 1.5, 0.8));
  var I8 = Xi();
  function $8(t) {
    Symbol('JSCA_12799_12806');
    if (t < 0 || t > 1) t -= Math.floor(t);
    var n = Math.abs(t - 0.5);
    I8.h = 360 * t - 100;
    I8.s = 1.5 - 1.5 * n;
    I8.l = 0.8 - 0.9 * n;
    return I8 + '';
  }
  var D8 = ni(),
    R8 = Math.PI / 3,
    F8 = (Math.PI * 2) / 3;
  function q8(t) {
    Symbol('JSCA_12808_12815');
    var n;
    t = (0.5 - t) * Math.PI;
    D8.r = 255 * (n = Math.sin(t)) * n;
    D8.g = 255 * (n = Math.sin(t + R8)) * n;
    D8.b = 255 * (n = Math.sin(t + F8)) * n;
    return D8 + '';
  }
  function U8(t) {
    Symbol('JSCA_12816_12819');
    t = Math.max(0, Math.min(1, t));
    return (
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
                    (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))
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
                  t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))
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
                  t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))
          )
        )
      ) +
      ')'
    );
  }
  function O8(n) {
    Symbol('JSCA_12820_12825');
    var e = n.length;
    return function (t) {
      Symbol('JSCA_12822_12824');
      return n[Math.max(0, Math.min(e - 1, Math.floor(t * e)))];
    };
  }
  var B8 = O8(
    l(
      '44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725'
    )
  );
  var Y8 = O8(
    l(
      '00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf'
    )
  );
  var L8 = O8(
    l(
      '00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4'
    )
  );
  var j8 = O8(
    l(
      '0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921'
    )
  );
  function C(n) {
    Symbol('JSCA_12830_12834');
    return function t() {
      Symbol('JSCA_12831_12833');
      return n;
    };
  }
  const H8 = Math.abs;
  const X = Math.atan2;
  const X8 = Math.cos;
  const G8 = Math.max;
  const V8 = Math.min;
  const W8 = Math.sin;
  const G = Math.sqrt;
  const V = 1e-12;
  const Z8 = Math.PI;
  const K8 = Z8 / 2;
  const Q8 = 2 * Z8;
  function t5(t) {
    Symbol('JSCA_12846_12848');
    return t > 1 ? 0 : t < -1 ? Z8 : Math.acos(t);
  }
  function n5(t) {
    Symbol('JSCA_12849_12851');
    return t >= 1 ? K8 : t <= -1 ? -K8 : Math.asin(t);
  }
  function e5(e) {
    Symbol('JSCA_12852_12866');
    let r = 3;
    e.digits = function (t) {
      Symbol('JSCA_12854_12864');
      if (!arguments.length) return r;
      if (t == null) {
        r = null;
      } else {
        const n = Math.floor(t);
        if (!(n >= 0)) throw new RangeError(`invalid digits: ${t}`);
        r = n;
      }
      return e;
    };
    return () => new zf(r);
  }
  function r5(t) {
    Symbol('JSCA_12867_12869');
    return t.innerRadius;
  }
  function o5(t) {
    Symbol('JSCA_12870_12872');
    return t.outerRadius;
  }
  function i5(t) {
    Symbol('JSCA_12873_12875');
    return t.startAngle;
  }
  function l5(t) {
    Symbol('JSCA_12876_12878');
    return t.endAngle;
  }
  function a5(t) {
    Symbol('JSCA_12879_12881');
    return t && t.padAngle;
  }
  function u5(t, n, e, r, o, i, l, a) {
    Symbol('JSCA_12882_12887');
    var u = e - t,
      f = r - n,
      _ = l - o,
      c = a - i,
      s = c * u - _ * f;
    if (s * s < V) return;
    s = (_ * (n - i) - c * (t - o)) / s;
    return [t + s * u, n + s * f];
  }
  function f5(t, n, e, r, o, i, l) {
    Symbol('JSCA_12888_12899');
    var a = t - e,
      u = n - r,
      f = (l ? i : -i) / G(a * a + u * u),
      _ = f * u,
      c = -f * a,
      s = t + _,
      S = n + c,
      h = e + _,
      y = r + c,
      b = (s + h) / 2,
      m = (S + y) / 2,
      d = h - s,
      A = y - S,
      C = d * d + A * A,
      J = o - i,
      p = s * y - h * S,
      g = (A < 0 ? -1 : 1) * G(G8(0, J * J * C - p * p)),
      v = (p * A - d * g) / C,
      x = (-p * d - A * g) / C,
      w = (p * A + d * g) / C,
      M = (-p * d + A * g) / C,
      T = v - b,
      k = x - m,
      E = w - b,
      N = M - m;
    if (T * T + k * k > E * E + N * N) (v = w), (x = M);
    return {
      cx: v,
      cy: x,
      x01: -_,
      y01: -c,
      x11: v * (o / J - 1),
      y11: x * (o / J - 1),
    };
  }
  function _5() {
    Symbol('JSCA_12900_12986');
    var F = r5,
      q = o5,
      U = C(0),
      O = null,
      B = i5,
      Y = l5,
      L = a5,
      j = null,
      H = e5(n);
    function n() {
      Symbol('JSCA_12902_12956');
      var t,
        $,
        n = +F.apply(this, arguments),
        e = +q.apply(this, arguments),
        r = B.apply(this, arguments) - K8,
        o = Y.apply(this, arguments) - K8,
        i = H8(o - r),
        l = o > r;
      if (!j) j = t = H();
      if (e < n) ($ = e), (e = n), (n = $);
      if (!(e > V)) j.moveTo(0, 0);
      else if (i > Q8 - V) {
        j.moveTo(e * X8(r), e * W8(r));
        j.arc(0, 0, e, r, o, !l);
        if (n > V) {
          j.moveTo(n * X8(o), n * W8(o));
          j.arc(0, 0, n, o, r, l);
        }
      } else {
        var a = r,
          u = o,
          f = r,
          _ = o,
          c = i,
          s = i,
          S = L.apply(this, arguments) / 2,
          h = S > V && (O ? +O.apply(this, arguments) : G(n * n + e * e)),
          y = V8(H8(e - n) / 2, +U.apply(this, arguments)),
          b = y,
          m = y,
          d,
          A;
        if (h > V) {
          var C = n5((h / n) * W8(S)),
            J = n5((h / e) * W8(S));
          if ((c -= C * 2) > V) (C *= l ? 1 : -1), (f += C), (_ -= C);
          else (c = 0), (f = _ = (r + o) / 2);
          if ((s -= J * 2) > V) (J *= l ? 1 : -1), (a += J), (u -= J);
          else (s = 0), (a = u = (r + o) / 2);
        }
        var p = e * X8(a),
          g = e * W8(a),
          v = n * X8(_),
          x = n * W8(_);
        if (y > V) {
          var w = e * X8(u),
            M = e * W8(u),
            T = n * X8(f),
            k = n * W8(f),
            E;
          if (i < Z8) {
            if ((E = u5(p, g, T, k, w, M, v, x))) {
              var N = p - E[0],
                P = g - E[1],
                z = w - E[0],
                I = M - E[1],
                D =
                  1 /
                  W8(
                    t5(
                      (N * z + P * I) / (G(N * N + P * P) * G(z * z + I * I))
                    ) / 2
                  ),
                R = G(E[0] * E[0] + E[1] * E[1]);
              b = V8(y, (n - R) / (D - 1));
              m = V8(y, (e - R) / (D + 1));
            } else {
              b = m = 0;
            }
          }
        }
        if (!(s > V)) j.moveTo(p, g);
        else if (m > V) {
          d = f5(T, k, p, g, e, m, l);
          A = f5(w, M, v, x, e, m, l);
          j.moveTo(d.cx + d.x01, d.cy + d.y01);
          if (m < y) j.arc(d.cx, d.cy, m, X(d.y01, d.x01), X(A.y01, A.x01), !l);
          else {
            j.arc(d.cx, d.cy, m, X(d.y01, d.x01), X(d.y11, d.x11), !l);
            j.arc(
              0,
              0,
              e,
              X(d.cy + d.y11, d.cx + d.x11),
              X(A.cy + A.y11, A.cx + A.x11),
              !l
            );
            j.arc(A.cx, A.cy, m, X(A.y11, A.x11), X(A.y01, A.x01), !l);
          }
        } else j.moveTo(p, g), j.arc(0, 0, e, a, u, !l);
        if (!(n > V) || !(c > V)) j.lineTo(v, x);
        else if (b > V) {
          d = f5(v, x, w, M, n, -b, l);
          A = f5(p, g, T, k, n, -b, l);
          j.lineTo(d.cx + d.x01, d.cy + d.y01);
          if (b < y) j.arc(d.cx, d.cy, b, X(d.y01, d.x01), X(A.y01, A.x01), !l);
          else {
            j.arc(d.cx, d.cy, b, X(d.y01, d.x01), X(d.y11, d.x11), !l);
            j.arc(
              0,
              0,
              n,
              X(d.cy + d.y11, d.cx + d.x11),
              X(A.cy + A.y11, A.cx + A.x11),
              l
            );
            j.arc(A.cx, A.cy, b, X(A.y11, A.x11), X(A.y01, A.x01), !l);
          }
        } else j.arc(0, 0, n, _, f, l);
      }
      j.closePath();
      if (t) return (j = null), t + '' || null;
    }
    n.centroid = function () {
      Symbol('JSCA_12957_12960');
      var t = (+F.apply(this, arguments) + +q.apply(this, arguments)) / 2,
        n =
          (+B.apply(this, arguments) + +Y.apply(this, arguments)) / 2 - Z8 / 2;
      return [X8(n) * t, W8(n) * t];
    };
    n.innerRadius = function (t) {
      Symbol('JSCA_12961_12963');
      return arguments.length
        ? ((F = typeof t === 'function' ? t : C(+t)), n)
        : F;
    };
    n.outerRadius = function (t) {
      Symbol('JSCA_12964_12966');
      return arguments.length
        ? ((q = typeof t === 'function' ? t : C(+t)), n)
        : q;
    };
    n.cornerRadius = function (t) {
      Symbol('JSCA_12967_12969');
      return arguments.length
        ? ((U = typeof t === 'function' ? t : C(+t)), n)
        : U;
    };
    n.padRadius = function (t) {
      Symbol('JSCA_12970_12972');
      return arguments.length
        ? ((O = t == null ? null : typeof t === 'function' ? t : C(+t)), n)
        : O;
    };
    n.startAngle = function (t) {
      Symbol('JSCA_12973_12975');
      return arguments.length
        ? ((B = typeof t === 'function' ? t : C(+t)), n)
        : B;
    };
    n.endAngle = function (t) {
      Symbol('JSCA_12976_12978');
      return arguments.length
        ? ((Y = typeof t === 'function' ? t : C(+t)), n)
        : Y;
    };
    n.padAngle = function (t) {
      Symbol('JSCA_12979_12981');
      return arguments.length
        ? ((L = typeof t === 'function' ? t : C(+t)), n)
        : L;
    };
    n.context = function (t) {
      Symbol('JSCA_12982_12984');
      return arguments.length ? ((j = t == null ? null : t), n) : j;
    };
    return n;
  }
  var c5 = Array.prototype.slice;
  function s5(t) {
    Symbol('JSCA_12988_12990');
    return typeof t === 'object' && 'length' in t ? t : Array.from(t);
  }
  function S5(t) {
    Symbol('JSCA_12991_12993');
    this._context = t;
  }
  S5.prototype = {
    areaStart: function () {
      Symbol('JSCA_12995_12997');
      this._line = 0;
    },
    areaEnd: function () {
      Symbol('JSCA_12998_13000');
      this._line = NaN;
    },
    lineStart: function () {
      Symbol('JSCA_13001_13003');
      this._point = 0;
    },
    lineEnd: function () {
      Symbol('JSCA_13004_13007');
      if (this._line || (this._line !== 0 && this._point === 1))
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (t, n) {
      Symbol('JSCA_13008_13021');
      (t = +t), (n = +n);
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(t, n);
          break;
      }
    },
  };
  function h5(t) {
    Symbol('JSCA_13023_13025');
    return new S5(t);
  }
  function y5(t) {
    Symbol('JSCA_13026_13028');
    return t[0];
  }
  function b5(t) {
    Symbol('JSCA_13029_13031');
    return t[1];
  }
  function m5(l, a) {
    Symbol('JSCA_13032_13063');
    var u = C(true),
      f = null,
      _ = h5,
      c = null,
      s = e5(n);
    l = typeof l === 'function' ? l : l === undefined ? y5 : C(l);
    a = typeof a === 'function' ? a : a === undefined ? b5 : C(a);
    function n(t) {
      Symbol('JSCA_13036_13046');
      var n,
        e = (t = s5(t)).length,
        r,
        o = false,
        i;
      if (f == null) c = _((i = s()));
      for (n = 0; n <= e; ++n) {
        if (!(n < e && u((r = t[n]), n, t)) === o) {
          if ((o = !o)) c.lineStart();
          else c.lineEnd();
        }
        if (o) c.point(+l(r, n, t), +a(r, n, t));
      }
      if (i) return (c = null), i + '' || null;
    }
    n.x = function (t) {
      Symbol('JSCA_13047_13049');
      return arguments.length
        ? ((l = typeof t === 'function' ? t : C(+t)), n)
        : l;
    };
    n.y = function (t) {
      Symbol('JSCA_13050_13052');
      return arguments.length
        ? ((a = typeof t === 'function' ? t : C(+t)), n)
        : a;
    };
    n.defined = function (t) {
      Symbol('JSCA_13053_13055');
      return arguments.length
        ? ((u = typeof t === 'function' ? t : C(!!t)), n)
        : u;
    };
    n.curve = function (t) {
      Symbol('JSCA_13056_13058');
      return arguments.length ? ((_ = t), f != null && (c = _(f)), n) : _;
    };
    n.context = function (t) {
      Symbol('JSCA_13059_13061');
      return arguments.length
        ? (t == null ? (f = c = null) : (c = _((f = t))), n)
        : f;
    };
    return n;
  }
  function d5(_, c, s) {
    Symbol('JSCA_13064_13135');
    var S = null,
      h = C(true),
      y = null,
      b = h5,
      m = null,
      d = e5(n);
    _ = typeof _ === 'function' ? _ : _ === undefined ? y5 : C(+_);
    c = typeof c === 'function' ? c : c === undefined ? C(0) : C(+c);
    s = typeof s === 'function' ? s : s === undefined ? b5 : C(+s);
    function n(t) {
      Symbol('JSCA_13069_13094');
      var n,
        e,
        r,
        o = (t = s5(t)).length,
        i,
        l = false,
        a,
        u = new Array(o),
        f = new Array(o);
      if (y == null) m = b((a = d()));
      for (n = 0; n <= o; ++n) {
        if (!(n < o && h((i = t[n]), n, t)) === l) {
          if ((l = !l)) {
            e = n;
            m.areaStart();
            m.lineStart();
          } else {
            m.lineEnd();
            m.lineStart();
            for (r = n - 1; r >= e; --r) {
              m.point(u[r], f[r]);
            }
            m.lineEnd();
            m.areaEnd();
          }
        }
        if (l) {
          (u[n] = +_(i, n, t)), (f[n] = +c(i, n, t));
          m.point(S ? +S(i, n, t) : u[n], s ? +s(i, n, t) : f[n]);
        }
      }
      if (a) return (m = null), a + '' || null;
    }
    function t() {
      Symbol('JSCA_13095_13097');
      return m5().defined(h).curve(b).context(y);
    }
    n.x = function (t) {
      Symbol('JSCA_13098_13100');
      return arguments.length
        ? ((_ = typeof t === 'function' ? t : C(+t)), (S = null), n)
        : _;
    };
    n.x0 = function (t) {
      Symbol('JSCA_13101_13103');
      return arguments.length
        ? ((_ = typeof t === 'function' ? t : C(+t)), n)
        : _;
    };
    n.x1 = function (t) {
      Symbol('JSCA_13104_13106');
      return arguments.length
        ? ((S = t == null ? null : typeof t === 'function' ? t : C(+t)), n)
        : S;
    };
    n.y = function (t) {
      Symbol('JSCA_13107_13109');
      return arguments.length
        ? ((c = typeof t === 'function' ? t : C(+t)), (s = null), n)
        : c;
    };
    n.y0 = function (t) {
      Symbol('JSCA_13110_13112');
      return arguments.length
        ? ((c = typeof t === 'function' ? t : C(+t)), n)
        : c;
    };
    n.y1 = function (t) {
      Symbol('JSCA_13113_13115');
      return arguments.length
        ? ((s = t == null ? null : typeof t === 'function' ? t : C(+t)), n)
        : s;
    };
    n.lineX0 = n.lineY0 = function () {
      Symbol('JSCA_13116_13118');
      return t().x(_).y(c);
    };
    n.lineY1 = function () {
      Symbol('JSCA_13119_13121');
      return t().x(_).y(s);
    };
    n.lineX1 = function () {
      Symbol('JSCA_13122_13124');
      return t().x(S).y(c);
    };
    n.defined = function (t) {
      Symbol('JSCA_13125_13127');
      return arguments.length
        ? ((h = typeof t === 'function' ? t : C(!!t)), n)
        : h;
    };
    n.curve = function (t) {
      Symbol('JSCA_13128_13130');
      return arguments.length ? ((b = t), y != null && (m = b(y)), n) : b;
    };
    n.context = function (t) {
      Symbol('JSCA_13131_13133');
      return arguments.length
        ? (t == null ? (y = m = null) : (m = b((y = t))), n)
        : y;
    };
    return n;
  }
  function A5(t, n) {
    Symbol('JSCA_13136_13138');
    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }
  function C5(t) {
    Symbol('JSCA_13139_13141');
    return t;
  }
  function J5() {
    Symbol('JSCA_13142_13187');
    var h = C5,
      y = A5,
      b = null,
      m = C(0),
      d = C(Q8),
      A = C(0);
    function n(e) {
      Symbol('JSCA_13144_13167');
      var t,
        n = (e = s5(e)).length,
        r,
        o,
        i = 0,
        l = new Array(n),
        a = new Array(n),
        u = +m.apply(this, arguments),
        f = Math.min(Q8, Math.max(-Q8, d.apply(this, arguments) - u)),
        _,
        c = Math.min(Math.abs(f) / n, A.apply(this, arguments)),
        s = c * (f < 0 ? -1 : 1),
        S;
      for (t = 0; t < n; ++t) {
        if ((S = a[(l[t] = t)] = +h(e[t], t, e)) > 0) {
          i += S;
        }
      }
      if (y != null)
        l.sort(function (t, n) {
          Symbol('JSCA_13151_13153');
          return y(a[t], a[n]);
        });
      else if (b != null)
        l.sort(function (t, n) {
          Symbol('JSCA_13153_13155');
          return b(e[t], e[n]);
        });
      for (t = 0, o = i ? (f - n * s) / i : 0; t < n; ++t, u = _) {
        (r = l[t]),
          (S = a[r]),
          (_ = u + (S > 0 ? S * o : 0) + s),
          (a[r] = {
            data: e[r],
            index: t,
            value: S,
            startAngle: u,
            endAngle: _,
            padAngle: c,
          });
      }
      return a;
    }
    n.value = function (t) {
      Symbol('JSCA_13168_13170');
      return arguments.length
        ? ((h = typeof t === 'function' ? t : C(+t)), n)
        : h;
    };
    n.sortValues = function (t) {
      Symbol('JSCA_13171_13173');
      return arguments.length ? ((y = t), (b = null), n) : y;
    };
    n.sort = function (t) {
      Symbol('JSCA_13174_13176');
      return arguments.length ? ((b = t), (y = null), n) : b;
    };
    n.startAngle = function (t) {
      Symbol('JSCA_13177_13179');
      return arguments.length
        ? ((m = typeof t === 'function' ? t : C(+t)), n)
        : m;
    };
    n.endAngle = function (t) {
      Symbol('JSCA_13180_13182');
      return arguments.length
        ? ((d = typeof t === 'function' ? t : C(+t)), n)
        : d;
    };
    n.padAngle = function (t) {
      Symbol('JSCA_13183_13185');
      return arguments.length
        ? ((A = typeof t === 'function' ? t : C(+t)), n)
        : A;
    };
    return n;
  }
  var p5 = v5(h5);
  function g5(t) {
    Symbol('JSCA_13189_13191');
    this._curve = t;
  }
  g5.prototype = {
    areaStart: function () {
      Symbol('JSCA_13193_13195');
      this._curve.areaStart();
    },
    areaEnd: function () {
      Symbol('JSCA_13196_13198');
      this._curve.areaEnd();
    },
    lineStart: function () {
      Symbol('JSCA_13199_13201');
      this._curve.lineStart();
    },
    lineEnd: function () {
      Symbol('JSCA_13202_13204');
      this._curve.lineEnd();
    },
    point: function (t, n) {
      Symbol('JSCA_13205_13207');
      this._curve.point(n * Math.sin(t), n * -Math.cos(t));
    },
  };
  function v5(n) {
    Symbol('JSCA_13209_13215');
    function t(t) {
      Symbol('JSCA_13210_13212');
      return new g5(n(t));
    }
    t._curve = n;
    return t;
  }
  function x5(t) {
    Symbol('JSCA_13216_13224');
    var n = t.curve;
    (t.angle = t.x), delete t.x;
    (t.radius = t.y), delete t.y;
    t.curve = function (t) {
      Symbol('JSCA_13220_13222');
      return arguments.length ? n(v5(t)) : n()._curve;
    };
    return t;
  }
  function w5() {
    Symbol('JSCA_13225_13227');
    return x5(m5().curve(p5));
  }
  function M5() {
    Symbol('JSCA_13228_13252');
    var t = d5().curve(p5),
      n = t.curve,
      e = t.lineX0,
      r = t.lineX1,
      o = t.lineY0,
      i = t.lineY1;
    (t.angle = t.x), delete t.x;
    (t.startAngle = t.x0), delete t.x0;
    (t.endAngle = t.x1), delete t.x1;
    (t.radius = t.y), delete t.y;
    (t.innerRadius = t.y0), delete t.y0;
    (t.outerRadius = t.y1), delete t.y1;
    (t.lineStartAngle = function () {
      Symbol('JSCA_13236_13238');
      return x5(e());
    }),
      delete t.lineX0;
    (t.lineEndAngle = function () {
      Symbol('JSCA_13239_13241');
      return x5(r());
    }),
      delete t.lineX1;
    (t.lineInnerRadius = function () {
      Symbol('JSCA_13242_13244');
      return x5(o());
    }),
      delete t.lineY0;
    (t.lineOuterRadius = function () {
      Symbol('JSCA_13245_13247');
      return x5(i());
    }),
      delete t.lineY1;
    t.curve = function (t) {
      Symbol('JSCA_13248_13250');
      return arguments.length ? n(v5(t)) : n()._curve;
    };
    return t;
  }
  function T5(t, n) {
    Symbol('JSCA_13253_13255');
    return [(n = +n) * Math.cos((t -= Math.PI / 2)), n * Math.sin(t)];
  }
  class k5 {
    constructor(t, n) {
      Symbol('JSCA_13257_13260');
      this._context = t;
      this._x = n;
    }
    areaStart() {
      Symbol('JSCA_13261_13263');
      this._line = 0;
    }
    areaEnd() {
      Symbol('JSCA_13264_13266');
      this._line = NaN;
    }
    lineStart() {
      Symbol('JSCA_13267_13269');
      this._point = 0;
    }
    lineEnd() {
      Symbol('JSCA_13270_13273');
      if (this._line || (this._line !== 0 && this._point === 1))
        this._context.closePath();
      this._line = 1 - this._line;
    }
    point(t, n) {
      Symbol('JSCA_13274_13292');
      (t = +t), (n = +n);
      switch (this._point) {
        case 0: {
          this._point = 1;
          if (this._line) this._context.lineTo(t, n);
          else this._context.moveTo(t, n);
          break;
        }
        case 1:
          this._point = 2;
        default: {
          if (this._x)
            this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              n,
              t,
              n
            );
          else
            this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + n) / 2),
              t,
              this._y0,
              t,
              n
            );
          break;
        }
      }
      (this._x0 = t), (this._y0 = n);
    }
  }
  class E5 {
    constructor(t) {
      Symbol('JSCA_13295_13297');
      this._context = t;
    }
    lineStart() {
      Symbol('JSCA_13298_13300');
      this._point = 0;
    }
    lineEnd() {
      Symbol('JSCA_13301_13301');
    }
    point(n, e) {
      Symbol('JSCA_13302_13315');
      (n = +n), (e = +e);
      if (this._point === 0) {
        this._point = 1;
      } else {
        const t = T5(this._x0, this._y0);
        const r = T5(this._x0, (this._y0 = (this._y0 + e) / 2));
        const o = T5(n, this._y0);
        const i = T5(n, e);
        this._context.moveTo(...t);
        this._context.bezierCurveTo(...r, ...o, ...i);
      }
      (this._x0 = n), (this._y0 = e);
    }
  }
  function N5(t) {
    Symbol('JSCA_13317_13319');
    return new k5(t, true);
  }
  function P5(t) {
    Symbol('JSCA_13320_13322');
    return new k5(t, false);
  }
  function z5(t) {
    Symbol('JSCA_13323_13325');
    return new E5(t);
  }
  function I5(t) {
    Symbol('JSCA_13326_13328');
    return t.source;
  }
  function $5(t) {
    Symbol('JSCA_13329_13331');
    return t.target;
  }
  function D5(o) {
    Symbol('JSCA_13332_13362');
    let i = I5,
      l = $5,
      a = y5,
      u = b5,
      f = null,
      _ = null,
      c = e5(n);
    function n() {
      Symbol('JSCA_13334_13345');
      let t;
      const n = c5.call(arguments);
      const e = i.apply(this, n);
      const r = l.apply(this, n);
      if (f == null) _ = o((t = c()));
      _.lineStart();
      (n[0] = e), _.point(+a.apply(this, n), +u.apply(this, n));
      (n[0] = r), _.point(+a.apply(this, n), +u.apply(this, n));
      _.lineEnd();
      if (t) return (_ = null), t + '' || null;
    }
    n.source = function (t) {
      Symbol('JSCA_13346_13348');
      return arguments.length ? ((i = t), n) : i;
    };
    n.target = function (t) {
      Symbol('JSCA_13349_13351');
      return arguments.length ? ((l = t), n) : l;
    };
    n.x = function (t) {
      Symbol('JSCA_13352_13354');
      return arguments.length
        ? ((a = typeof t === 'function' ? t : C(+t)), n)
        : a;
    };
    n.y = function (t) {
      Symbol('JSCA_13355_13357');
      return arguments.length
        ? ((u = typeof t === 'function' ? t : C(+t)), n)
        : u;
    };
    n.context = function (t) {
      Symbol('JSCA_13358_13360');
      return arguments.length
        ? (t == null ? (f = _ = null) : (_ = o((f = t))), n)
        : f;
    };
    return n;
  }
  function R5() {
    Symbol('JSCA_13363_13365');
    return D5(N5);
  }
  function F5() {
    Symbol('JSCA_13366_13368');
    return D5(P5);
  }
  function q5() {
    Symbol('JSCA_13369_13374');
    const t = D5(z5);
    (t.angle = t.x), delete t.x;
    (t.radius = t.y), delete t.y;
    return t;
  }
  const U5 = G(3);
  var O5 = {
    draw(t, n) {
      Symbol('JSCA_13377_13387');
      const e = G(n + V8(n / 28, 0.75)) * 0.59436;
      const r = e / 2;
      const o = r * U5;
      t.moveTo(0, e);
      t.lineTo(0, -e);
      t.moveTo(-o, -r);
      t.lineTo(o, r);
      t.moveTo(-o, r);
      t.lineTo(o, -r);
    },
  };
  var B5 = {
    draw(t, n) {
      Symbol('JSCA_13390_13394');
      const e = G(n / Z8);
      t.moveTo(e, 0);
      t.arc(0, 0, e, 0, Q8);
    },
  };
  var Y5 = {
    draw(t, n) {
      Symbol('JSCA_13397_13412');
      const e = G(n / 5) / 2;
      t.moveTo(-3 * e, -e);
      t.lineTo(-e, -e);
      t.lineTo(-e, -3 * e);
      t.lineTo(e, -3 * e);
      t.lineTo(e, -e);
      t.lineTo(3 * e, -e);
      t.lineTo(3 * e, e);
      t.lineTo(e, e);
      t.lineTo(e, 3 * e);
      t.lineTo(-e, 3 * e);
      t.lineTo(-e, e);
      t.lineTo(-3 * e, e);
      t.closePath();
    },
  };
  const L5 = G(1 / 3);
  const j5 = L5 * 2;
  var H5 = {
    draw(t, n) {
      Symbol('JSCA_13417_13425');
      const e = G(n / j5);
      const r = e * L5;
      t.moveTo(0, -e);
      t.lineTo(r, 0);
      t.lineTo(0, e);
      t.lineTo(-r, 0);
      t.closePath();
    },
  };
  var X5 = {
    draw(t, n) {
      Symbol('JSCA_13428_13435');
      const e = G(n) * 0.62625;
      t.moveTo(0, -e);
      t.lineTo(e, 0);
      t.lineTo(0, e);
      t.lineTo(-e, 0);
      t.closePath();
    },
  };
  var G5 = {
    draw(t, n) {
      Symbol('JSCA_13438_13444');
      const e = G(n - V8(n / 7, 2)) * 0.87559;
      t.moveTo(-e, 0);
      t.lineTo(e, 0);
      t.moveTo(0, e);
      t.lineTo(0, -e);
    },
  };
  var V5 = {
    draw(t, n) {
      Symbol('JSCA_13447_13451');
      const e = G(n);
      const r = -e / 2;
      t.rect(r, r, e, e);
    },
  };
  var W5 = {
    draw(t, n) {
      Symbol('JSCA_13454_13461');
      const e = G(n) * 0.4431;
      t.moveTo(e, e);
      t.lineTo(e, -e);
      t.lineTo(-e, -e);
      t.lineTo(-e, e);
      t.closePath();
    },
  };
  const Z5 = 0.8908130915292852;
  const K5 = W8(Z8 / 10) / W8((7 * Z8) / 10);
  const Q5 = W8(Q8 / 10) * K5;
  const t9 = -X8(Q8 / 10) * K5;
  var n9 = {
    draw(o, t) {
      Symbol('JSCA_13468_13482');
      const i = G(t * Z5);
      const l = Q5 * i;
      const a = t9 * i;
      o.moveTo(0, -i);
      o.lineTo(l, a);
      for (let r = 1; r < 5; ++r) {
        const t = (Q8 * r) / 5;
        const n = X8(t);
        const e = W8(t);
        o.lineTo(e * i, -n * i);
        o.lineTo(n * l - e * a, e * l + n * a);
      }
      o.closePath();
    },
  };
  const e9 = G(3);
  var r9 = {
    draw(t, n) {
      Symbol('JSCA_13486_13492');
      const e = -G(n / (e9 * 3));
      t.moveTo(0, e * 2);
      t.lineTo(-e9 * e, -e);
      t.lineTo(e9 * e, -e);
      t.closePath();
    },
  };
  const o9 = G(3);
  var i9 = {
    draw(t, n) {
      Symbol('JSCA_13496_13504');
      const e = G(n) * 0.6824;
      const r = e / 2;
      const o = (e * o9) / 2;
      t.moveTo(0, -e);
      t.lineTo(o, r);
      t.lineTo(-o, r);
      t.closePath();
    },
  };
  const l9 = -0.5;
  const a9 = G(3) / 2;
  const u9 = 1 / G(12);
  const f9 = (u9 / 2 + 1) * 3;
  var _9 = {
    draw(t, n) {
      Symbol('JSCA_13511_13526');
      const e = G(n / f9);
      const r = e / 2,
        o = e * u9;
      const i = r,
        l = e * u9 + e;
      const a = -i,
        u = l;
      t.moveTo(r, o);
      t.lineTo(i, l);
      t.lineTo(a, u);
      t.lineTo(l9 * r - a9 * o, a9 * r + l9 * o);
      t.lineTo(l9 * i - a9 * l, a9 * i + l9 * l);
      t.lineTo(l9 * a - a9 * u, a9 * a + l9 * u);
      t.lineTo(l9 * r + a9 * o, l9 * o - a9 * r);
      t.lineTo(l9 * i + a9 * l, l9 * l - a9 * i);
      t.lineTo(l9 * a + a9 * u, l9 * u - a9 * a);
      t.closePath();
    },
  };
  var c9 = {
    draw(t, n) {
      Symbol('JSCA_13529_13535');
      const e = G(n - V8(n / 6, 1.7)) * 0.6189;
      t.moveTo(-e, -e);
      t.lineTo(e, e);
      t.moveTo(-e, e);
      t.lineTo(e, -e);
    },
  };
  const s9 = [B5, Y5, H5, V5, n9, r9, _9];
  const S9 = [B5, G5, c9, i9, O5, W5, X5];
  function h9(n, e) {
    Symbol('JSCA_13539_13559');
    let r = null,
      o = e5(i);
    n = typeof n === 'function' ? n : C(n || B5);
    e = typeof e === 'function' ? e : C(e === undefined ? 64 : +e);
    function i() {
      Symbol('JSCA_13543_13548');
      let t;
      if (!r) r = t = o();
      n.apply(this, arguments).draw(r, +e.apply(this, arguments));
      if (t) return (r = null), t + '' || null;
    }
    i.type = function (t) {
      Symbol('JSCA_13549_13551');
      return arguments.length
        ? ((n = typeof t === 'function' ? t : C(t)), i)
        : n;
    };
    i.size = function (t) {
      Symbol('JSCA_13552_13554');
      return arguments.length
        ? ((e = typeof t === 'function' ? t : C(+t)), i)
        : e;
    };
    i.context = function (t) {
      Symbol('JSCA_13555_13557');
      return arguments.length ? ((r = t == null ? null : t), i) : r;
    };
    return i;
  }
  function y9() {
    Symbol('JSCA_13560_13560');
  }
  function b9(t, n, e) {
    Symbol('JSCA_13561_13563');
    t._context.bezierCurveTo(
      (2 * t._x0 + t._x1) / 3,
      (2 * t._y0 + t._y1) / 3,
      (t._x0 + 2 * t._x1) / 3,
      (t._y0 + 2 * t._y1) / 3,
      (t._x0 + 4 * t._x1 + n) / 6,
      (t._y0 + 4 * t._y1 + e) / 6
    );
  }
  function m9(t) {
    Symbol('JSCA_13564_13566');
    this._context = t;
  }
  m9.prototype = {
    areaStart: function () {
      Symbol('JSCA_13568_13570');
      this._line = 0;
    },
    areaEnd: function () {
      Symbol('JSCA_13571_13573');
      this._line = NaN;
    },
    lineStart: function () {
      Symbol('JSCA_13574_13577');
      this._x0 = this._x1 = this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      Symbol('JSCA_13578_13588');
      switch (this._point) {
        case 3:
          b9(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
      }
      if (this._line || (this._line !== 0 && this._point === 1))
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (t, n) {
      Symbol('JSCA_13589_13608');
      (t = +t), (n = +n);
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6
          );
        default:
          b9(this, t, n);
          break;
      }
      (this._x0 = this._x1), (this._x1 = t);
      (this._y0 = this._y1), (this._y1 = n);
    },
  };
  function d9(t) {
    Symbol('JSCA_13610_13612');
    return new m9(t);
  }
  function A9(t) {
    Symbol('JSCA_13613_13615');
    this._context = t;
  }
  A9.prototype = {
    areaStart: y9,
    areaEnd: y9,
    lineStart: function () {
      Symbol('JSCA_13619_13622');
      this._x0 =
        this._x1 =
        this._x2 =
        this._x3 =
        this._x4 =
        this._y0 =
        this._y1 =
        this._y2 =
        this._y3 =
        this._y4 =
          NaN;
      this._point = 0;
    },
    lineEnd: function () {
      Symbol('JSCA_13623_13646');
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x2, this._y2);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.moveTo(
            (this._x2 + 2 * this._x3) / 3,
            (this._y2 + 2 * this._y3) / 3
          );
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3
          );
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x2, this._y2);
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          break;
        }
      }
    },
    point: function (t, n) {
      Symbol('JSCA_13647_13669');
      (t = +t), (n = +n);
      switch (this._point) {
        case 0:
          this._point = 1;
          (this._x2 = t), (this._y2 = n);
          break;
        case 1:
          this._point = 2;
          (this._x3 = t), (this._y3 = n);
          break;
        case 2:
          this._point = 3;
          (this._x4 = t), (this._y4 = n);
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + t) / 6,
            (this._y0 + 4 * this._y1 + n) / 6
          );
          break;
        default:
          b9(this, t, n);
          break;
      }
      (this._x0 = this._x1), (this._x1 = t);
      (this._y0 = this._y1), (this._y1 = n);
    },
  };
  function C9(t) {
    Symbol('JSCA_13671_13673');
    return new A9(t);
  }
  function J9(t) {
    Symbol('JSCA_13674_13676');
    this._context = t;
  }
  J9.prototype = {
    areaStart: function () {
      Symbol('JSCA_13678_13680');
      this._line = 0;
    },
    areaEnd: function () {
      Symbol('JSCA_13681_13683');
      this._line = NaN;
    },
    lineStart: function () {
      Symbol('JSCA_13684_13687');
      this._x0 = this._x1 = this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      Symbol('JSCA_13688_13691');
      if (this._line || (this._line !== 0 && this._point === 3))
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (t, n) {
      Symbol('JSCA_13692_13714');
      (t = +t), (n = +n);
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var e = (this._x0 + 4 * this._x1 + t) / 6,
            r = (this._y0 + 4 * this._y1 + n) / 6;
          this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
          break;
        case 3:
          this._point = 4;
        default:
          b9(this, t, n);
          break;
      }
      (this._x0 = this._x1), (this._x1 = t);
      (this._y0 = this._y1), (this._y1 = n);
    },
  };
  function p9(t) {
    Symbol('JSCA_13716_13718');
    return new J9(t);
  }
  function g9(t, n) {
    Symbol('JSCA_13719_13722');
    this._basis = new m9(t);
    this._beta = n;
  }
  g9.prototype = {
    lineStart: function () {
      Symbol('JSCA_13724_13728');
      this._x = [];
      this._y = [];
      this._basis.lineStart();
    },
    lineEnd: function () {
      Symbol('JSCA_13729_13740');
      var t = this._x,
        n = this._y,
        e = t.length - 1;
      if (e > 0) {
        var r = t[0],
          o = n[0],
          i = t[e] - r,
          l = n[e] - o,
          a = -1,
          u;
        while (++a <= e) {
          u = a / e;
          this._basis.point(
            this._beta * t[a] + (1 - this._beta) * (r + u * i),
            this._beta * n[a] + (1 - this._beta) * (o + u * l)
          );
        }
      }
      this._x = this._y = null;
      this._basis.lineEnd();
    },
    point: function (t, n) {
      Symbol('JSCA_13741_13744');
      this._x.push(+t);
      this._y.push(+n);
    },
  };
  var v9 = (function n(e) {
    Symbol('JSCA_13746_13754');
    function t(t) {
      Symbol('JSCA_13747_13749');
      return e === 1 ? new m9(t) : new g9(t, e);
    }
    t.beta = function (t) {
      Symbol('JSCA_13750_13752');
      return n(+t);
    };
    return t;
  })(0.85);
  function x9(t, n, e) {
    Symbol('JSCA_13755_13757');
    t._context.bezierCurveTo(
      t._x1 + t._k * (t._x2 - t._x0),
      t._y1 + t._k * (t._y2 - t._y0),
      t._x2 + t._k * (t._x1 - n),
      t._y2 + t._k * (t._y1 - e),
      t._x2,
      t._y2
    );
  }
  function w9(t, n) {
    Symbol('JSCA_13758_13761');
    this._context = t;
    this._k = (1 - n) / 6;
  }
  w9.prototype = {
    areaStart: function () {
      Symbol('JSCA_13763_13765');
      this._line = 0;
    },
    areaEnd: function () {
      Symbol('JSCA_13766_13768');
      this._line = NaN;
    },
    lineStart: function () {
      Symbol('JSCA_13769_13772');
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      Symbol('JSCA_13773_13784');
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          x9(this, this._x1, this._y1);
          break;
      }
      if (this._line || (this._line !== 0 && this._point === 1))
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (t, n) {
      Symbol('JSCA_13785_13804');
      (t = +t), (n = +n);
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
          (this._x1 = t), (this._y1 = n);
          break;
        case 2:
          this._point = 3;
        default:
          x9(this, t, n);
          break;
      }
      (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
      (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
    },
  };
  var M9 = (function n(e) {
    Symbol('JSCA_13806_13814');
    function t(t) {
      Symbol('JSCA_13807_13809');
      return new w9(t, e);
    }
    t.tension = function (t) {
      Symbol('JSCA_13810_13812');
      return n(+t);
    };
    return t;
  })(0);
  function T9(t, n) {
    Symbol('JSCA_13815_13818');
    this._context = t;
    this._k = (1 - n) / 6;
  }
  T9.prototype = {
    areaStart: y9,
    areaEnd: y9,
    lineStart: function () {
      Symbol('JSCA_13822_13825');
      this._x0 =
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
          NaN;
      this._point = 0;
    },
    lineEnd: function () {
      Symbol('JSCA_13826_13848');
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function (t, n) {
      Symbol('JSCA_13849_13870');
      (t = +t), (n = +n);
      switch (this._point) {
        case 0:
          this._point = 1;
          (this._x3 = t), (this._y3 = n);
          break;
        case 1:
          this._point = 2;
          this._context.moveTo((this._x4 = t), (this._y4 = n));
          break;
        case 2:
          this._point = 3;
          (this._x5 = t), (this._y5 = n);
          break;
        default:
          x9(this, t, n);
          break;
      }
      (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
      (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
    },
  };
  var k9 = (function n(e) {
    Symbol('JSCA_13872_13880');
    function t(t) {
      Symbol('JSCA_13873_13875');
      return new T9(t, e);
    }
    t.tension = function (t) {
      Symbol('JSCA_13876_13878');
      return n(+t);
    };
    return t;
  })(0);
  function E9(t, n) {
    Symbol('JSCA_13881_13884');
    this._context = t;
    this._k = (1 - n) / 6;
  }
  E9.prototype = {
    areaStart: function () {
      Symbol('JSCA_13886_13888');
      this._line = 0;
    },
    areaEnd: function () {
      Symbol('JSCA_13889_13891');
      this._line = NaN;
    },
    lineStart: function () {
      Symbol('JSCA_13892_13895');
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      Symbol('JSCA_13896_13899');
      if (this._line || (this._line !== 0 && this._point === 3))
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (t, n) {
      Symbol('JSCA_13900_13921');
      (t = +t), (n = +n);
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._line
            ? this._context.lineTo(this._x2, this._y2)
            : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          x9(this, t, n);
          break;
      }
      (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
      (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
    },
  };
  var N9 = (function n(e) {
    Symbol('JSCA_13923_13931');
    function t(t) {
      Symbol('JSCA_13924_13926');
      return new E9(t, e);
    }
    t.tension = function (t) {
      Symbol('JSCA_13927_13929');
      return n(+t);
    };
    return t;
  })(0);
  function P9(t, n, e) {
    Symbol('JSCA_13932_13945');
    var r = t._x1,
      o = t._y1,
      i = t._x2,
      l = t._y2;
    if (t._l01_a > V) {
      var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
        u = 3 * t._l01_a * (t._l01_a + t._l12_a);
      r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / u;
      o = (o * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / u;
    }
    if (t._l23_a > V) {
      var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
        _ = 3 * t._l23_a * (t._l23_a + t._l12_a);
      i = (i * f + t._x1 * t._l23_2a - n * t._l12_2a) / _;
      l = (l * f + t._y1 * t._l23_2a - e * t._l12_2a) / _;
    }
    t._context.bezierCurveTo(r, o, i, l, t._x2, t._y2);
  }
  function z9(t, n) {
    Symbol('JSCA_13946_13949');
    this._context = t;
    this._alpha = n;
  }
  z9.prototype = {
    areaStart: function () {
      Symbol('JSCA_13951_13953');
      this._line = 0;
    },
    areaEnd: function () {
      Symbol('JSCA_13954_13956');
      this._line = NaN;
    },
    lineStart: function () {
      Symbol('JSCA_13957_13960');
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._l01_a =
        this._l12_a =
        this._l23_a =
        this._l01_2a =
        this._l12_2a =
        this._l23_2a =
        this._point =
          0;
    },
    lineEnd: function () {
      Symbol('JSCA_13961_13972');
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          this.point(this._x2, this._y2);
          break;
      }
      if (this._line || (this._line !== 0 && this._point === 1))
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (t, n) {
      Symbol('JSCA_13973_13997');
      (t = +t), (n = +n);
      if (this._point) {
        var e = this._x2 - t,
          r = this._y2 - n;
        this._l23_a = Math.sqrt(
          (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
        );
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
        default:
          P9(this, t, n);
          break;
      }
      (this._l01_a = this._l12_a), (this._l12_a = this._l23_a);
      (this._l01_2a = this._l12_2a), (this._l12_2a = this._l23_2a);
      (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
      (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
    },
  };
  var I9 = (function n(e) {
    Symbol('JSCA_13999_14007');
    function t(t) {
      Symbol('JSCA_14000_14002');
      return e ? new z9(t, e) : new w9(t, 0);
    }
    t.alpha = function (t) {
      Symbol('JSCA_14003_14005');
      return n(+t);
    };
    return t;
  })(0.5);
  function $9(t, n) {
    Symbol('JSCA_14008_14011');
    this._context = t;
    this._alpha = n;
  }
  $9.prototype = {
    areaStart: y9,
    areaEnd: y9,
    lineStart: function () {
      Symbol('JSCA_14015_14018');
      this._x0 =
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
          NaN;
      this._l01_a =
        this._l12_a =
        this._l23_a =
        this._l01_2a =
        this._l12_2a =
        this._l23_2a =
        this._point =
          0;
    },
    lineEnd: function () {
      Symbol('JSCA_14019_14041');
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function (t, n) {
      Symbol('JSCA_14042_14069');
      (t = +t), (n = +n);
      if (this._point) {
        var e = this._x2 - t,
          r = this._y2 - n;
        this._l23_a = Math.sqrt(
          (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
        );
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          (this._x3 = t), (this._y3 = n);
          break;
        case 1:
          this._point = 2;
          this._context.moveTo((this._x4 = t), (this._y4 = n));
          break;
        case 2:
          this._point = 3;
          (this._x5 = t), (this._y5 = n);
          break;
        default:
          P9(this, t, n);
          break;
      }
      (this._l01_a = this._l12_a), (this._l12_a = this._l23_a);
      (this._l01_2a = this._l12_2a), (this._l12_2a = this._l23_2a);
      (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
      (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
    },
  };
  var D9 = (function n(e) {
    Symbol('JSCA_14071_14079');
    function t(t) {
      Symbol('JSCA_14072_14074');
      return e ? new $9(t, e) : new T9(t, 0);
    }
    t.alpha = function (t) {
      Symbol('JSCA_14075_14077');
      return n(+t);
    };
    return t;
  })(0.5);
  function R9(t, n) {
    Symbol('JSCA_14080_14083');
    this._context = t;
    this._alpha = n;
  }
  R9.prototype = {
    areaStart: function () {
      Symbol('JSCA_14085_14087');
      this._line = 0;
    },
    areaEnd: function () {
      Symbol('JSCA_14088_14090');
      this._line = NaN;
    },
    lineStart: function () {
      Symbol('JSCA_14091_14094');
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._l01_a =
        this._l12_a =
        this._l23_a =
        this._l01_2a =
        this._l12_2a =
        this._l23_2a =
        this._point =
          0;
    },
    lineEnd: function () {
      Symbol('JSCA_14095_14098');
      if (this._line || (this._line !== 0 && this._point === 3))
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (t, n) {
      Symbol('JSCA_14099_14126');
      (t = +t), (n = +n);
      if (this._point) {
        var e = this._x2 - t,
          r = this._y2 - n;
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
          this._point = 3;
          this._line
            ? this._context.lineTo(this._x2, this._y2)
            : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          P9(this, t, n);
          break;
      }
      (this._l01_a = this._l12_a), (this._l12_a = this._l23_a);
      (this._l01_2a = this._l12_2a), (this._l12_2a = this._l23_2a);
      (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = t);
      (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = n);
    },
  };
  var F9 = (function n(e) {
    Symbol('JSCA_14128_14136');
    function t(t) {
      Symbol('JSCA_14129_14131');
      return e ? new R9(t, e) : new E9(t, 0);
    }
    t.alpha = function (t) {
      Symbol('JSCA_14132_14134');
      return n(+t);
    };
    return t;
  })(0.5);
  function q9(t) {
    Symbol('JSCA_14137_14139');
    this._context = t;
  }
  q9.prototype = {
    areaStart: y9,
    areaEnd: y9,
    lineStart: function () {
      Symbol('JSCA_14143_14145');
      this._point = 0;
    },
    lineEnd: function () {
      Symbol('JSCA_14146_14148');
      if (this._point) this._context.closePath();
    },
    point: function (t, n) {
      Symbol('JSCA_14149_14152');
      (t = +t), (n = +n);
      if (this._point) this._context.lineTo(t, n);
      else (this._point = 1), this._context.moveTo(t, n);
    },
  };
  function U9(t) {
    Symbol('JSCA_14154_14156');
    return new q9(t);
  }
  function O9(t) {
    Symbol('JSCA_14157_14159');
    return t < 0 ? -1 : 1;
  }
  function B9(t, n, e) {
    Symbol('JSCA_14160_14163');
    var r = t._x1 - t._x0,
      o = n - t._x1,
      i = (t._y1 - t._y0) / (r || (o < 0 && -0)),
      l = (e - t._y1) / (o || (r < 0 && -0)),
      a = (i * o + l * r) / (r + o);
    return (
      (O9(i) + O9(l)) * Math.min(Math.abs(i), Math.abs(l), 0.5 * Math.abs(a)) ||
      0
    );
  }
  function Y9(t, n) {
    Symbol('JSCA_14164_14167');
    var e = t._x1 - t._x0;
    return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
  }
  function L9(t, n, e) {
    Symbol('JSCA_14168_14171');
    var r = t._x0,
      o = t._y0,
      i = t._x1,
      l = t._y1,
      a = (i - r) / 3;
    t._context.bezierCurveTo(r + a, o + a * n, i - a, l - a * e, i, l);
  }
  function j9(t) {
    Symbol('JSCA_14172_14174');
    this._context = t;
  }
  j9.prototype = {
    areaStart: function () {
      Symbol('JSCA_14176_14178');
      this._line = 0;
    },
    areaEnd: function () {
      Symbol('JSCA_14179_14181');
      this._line = NaN;
    },
    lineStart: function () {
      Symbol('JSCA_14182_14185');
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      Symbol('JSCA_14186_14197');
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          L9(this, this._t0, Y9(this, this._t0));
          break;
      }
      if (this._line || (this._line !== 0 && this._point === 1))
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function (t, n) {
      Symbol('JSCA_14198_14221');
      var e = NaN;
      (t = +t), (n = +n);
      if (t === this._x1 && n === this._y1) return;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          L9(this, Y9(this, (e = B9(this, t, n))), e);
          break;
        default:
          L9(this, this._t0, (e = B9(this, t, n)));
          break;
      }
      (this._x0 = this._x1), (this._x1 = t);
      (this._y0 = this._y1), (this._y1 = n);
      this._t0 = e;
    },
  };
  function H9(t) {
    Symbol('JSCA_14223_14225');
    this._context = new X9(t);
  }
  (H9.prototype = Object.create(j9.prototype)).point = function (t, n) {
    Symbol('JSCA_14226_14228');
    j9.prototype.point.call(this, n, t);
  };
  function X9(t) {
    Symbol('JSCA_14229_14231');
    this._context = t;
  }
  X9.prototype = {
    moveTo: function (t, n) {
      Symbol('JSCA_14233_14235');
      this._context.moveTo(n, t);
    },
    closePath: function () {
      Symbol('JSCA_14236_14238');
      this._context.closePath();
    },
    lineTo: function (t, n) {
      Symbol('JSCA_14239_14241');
      this._context.lineTo(n, t);
    },
    bezierCurveTo: function (t, n, e, r, o, i) {
      Symbol('JSCA_14242_14244');
      this._context.bezierCurveTo(n, t, r, e, i, o);
    },
  };
  function G9(t) {
    Symbol('JSCA_14246_14248');
    return new j9(t);
  }
  function V9(t) {
    Symbol('JSCA_14249_14251');
    return new H9(t);
  }
  function W9(t) {
    Symbol('JSCA_14252_14254');
    this._context = t;
  }
  W9.prototype = {
    areaStart: function () {
      Symbol('JSCA_14256_14258');
      this._line = 0;
    },
    areaEnd: function () {
      Symbol('JSCA_14259_14261');
      this._line = NaN;
    },
    lineStart: function () {
      Symbol('JSCA_14262_14265');
      this._x = [];
      this._y = [];
    },
    lineEnd: function () {
      Symbol('JSCA_14266_14282');
      var t = this._x,
        n = this._y,
        e = t.length;
      if (e) {
        this._line
          ? this._context.lineTo(t[0], n[0])
          : this._context.moveTo(t[0], n[0]);
        if (e === 2) {
          this._context.lineTo(t[1], n[1]);
        } else {
          var r = Z9(t),
            o = Z9(n);
          for (var i = 0, l = 1; l < e; ++i, ++l) {
            this._context.bezierCurveTo(
              r[0][i],
              o[0][i],
              r[1][i],
              o[1][i],
              t[l],
              n[l]
            );
          }
        }
      }
      if (this._line || (this._line !== 0 && e === 1))
        this._context.closePath();
      this._line = 1 - this._line;
      this._x = this._y = null;
    },
    point: function (t, n) {
      Symbol('JSCA_14283_14286');
      this._x.push(+t);
      this._y.push(+n);
    },
  };
  function Z9(t) {
    Symbol('JSCA_14288_14299');
    var n,
      e = t.length - 1,
      r,
      o = new Array(e),
      i = new Array(e),
      l = new Array(e);
    (o[0] = 0), (i[0] = 2), (l[0] = t[0] + 2 * t[1]);
    for (n = 1; n < e - 1; ++n)
      (o[n] = 1), (i[n] = 4), (l[n] = 4 * t[n] + 2 * t[n + 1]);
    (o[e - 1] = 2), (i[e - 1] = 7), (l[e - 1] = 8 * t[e - 1] + t[e]);
    for (n = 1; n < e; ++n)
      (r = o[n] / i[n - 1]), (i[n] -= r), (l[n] -= r * l[n - 1]);
    o[e - 1] = l[e - 1] / i[e - 1];
    for (n = e - 2; n >= 0; --n) o[n] = (l[n] - o[n + 1]) / i[n];
    i[e - 1] = (t[e] + o[e - 1]) / 2;
    for (n = 0; n < e - 1; ++n) i[n] = 2 * t[n + 1] - o[n + 1];
    return [o, i];
  }
  function K9(t) {
    Symbol('JSCA_14300_14302');
    return new W9(t);
  }
  function Q9(t, n) {
    Symbol('JSCA_14303_14306');
    this._context = t;
    this._t = n;
  }
  Q9.prototype = {
    areaStart: function () {
      Symbol('JSCA_14308_14310');
      this._line = 0;
    },
    areaEnd: function () {
      Symbol('JSCA_14311_14313');
      this._line = NaN;
    },
    lineStart: function () {
      Symbol('JSCA_14314_14317');
      this._x = this._y = NaN;
      this._point = 0;
    },
    lineEnd: function () {
      Symbol('JSCA_14318_14322');
      if (0 < this._t && this._t < 1 && this._point === 2)
        this._context.lineTo(this._x, this._y);
      if (this._line || (this._line !== 0 && this._point === 1))
        this._context.closePath();
      if (this._line >= 0)
        (this._t = 1 - this._t), (this._line = 1 - this._line);
    },
    point: function (t, n) {
      Symbol('JSCA_14323_14346');
      (t = +t), (n = +n);
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
        default: {
          if (this._t <= 0) {
            this._context.lineTo(this._x, n);
            this._context.lineTo(t, n);
          } else {
            var e = this._x * (1 - this._t) + t * this._t;
            this._context.lineTo(e, this._y);
            this._context.lineTo(e, n);
          }
          break;
        }
      }
      (this._x = t), (this._y = n);
    },
  };
  function tA(t) {
    Symbol('JSCA_14348_14350');
    return new Q9(t, 0.5);
  }
  function nA(t) {
    Symbol('JSCA_14351_14353');
    return new Q9(t, 0);
  }
  function eA(t) {
    Symbol('JSCA_14354_14356');
    return new Q9(t, 1);
  }
  function rA(t, n) {
    Symbol('JSCA_14357_14365');
    if (!((l = t.length) > 1)) return;
    for (var e = 1, r, o, i = t[n[0]], l, a = i.length; e < l; ++e) {
      (o = i), (i = t[n[e]]);
      for (r = 0; r < a; ++r) {
        i[r][1] += i[r][0] = isNaN(o[r][1]) ? o[r][0] : o[r][1];
      }
    }
  }
  function oA(t) {
    Symbol('JSCA_14366_14370');
    var n = t.length,
      e = new Array(n);
    while (--n >= 0) e[n] = n;
    return e;
  }
  function iA(t, n) {
    Symbol('JSCA_14371_14373');
    return t[n];
  }
  function lA(t) {
    Symbol('JSCA_14374_14378');
    const n = [];
    n.key = t;
    return n;
  }
  function aA() {
    Symbol('JSCA_14379_14407');
    var a = C([]),
      u = oA,
      f = rA,
      _ = iA;
    function n(t) {
      Symbol('JSCA_14381_14393');
      var n = Array.from(a.apply(this, arguments), lA),
        e,
        r = n.length,
        o = -1,
        i;
      for (const l of t) {
        for (e = 0, ++o; e < r; ++e) {
          (n[e][o] = [0, +_(l, n[e].key, o, t)]).data = l;
        }
      }
      for (e = 0, i = s5(u(n)); e < r; ++e) {
        n[i[e]].index = e;
      }
      f(n, i);
      return n;
    }
    n.keys = function (t) {
      Symbol('JSCA_14394_14396');
      return arguments.length
        ? ((a = typeof t === 'function' ? t : C(Array.from(t))), n)
        : a;
    };
    n.value = function (t) {
      Symbol('JSCA_14397_14399');
      return arguments.length
        ? ((_ = typeof t === 'function' ? t : C(+t)), n)
        : _;
    };
    n.order = function (t) {
      Symbol('JSCA_14400_14402');
      return arguments.length
        ? ((u =
            t == null ? oA : typeof t === 'function' ? t : C(Array.from(t))),
          n)
        : u;
    };
    n.offset = function (t) {
      Symbol('JSCA_14403_14405');
      return arguments.length ? ((f = t == null ? rA : t), n) : f;
    };
    return n;
  }
  function uA(t, n) {
    Symbol('JSCA_14408_14415');
    if (!((r = t.length) > 0)) return;
    for (var e, r, o = 0, i = t[0].length, l; o < i; ++o) {
      for (l = e = 0; e < r; ++e) l += t[e][o][1] || 0;
      if (l) for (e = 0; e < r; ++e) t[e][o][1] /= l;
    }
    rA(t, n);
  }
  function fA(t, n) {
    Symbol('JSCA_14416_14429');
    if (!((u = t.length) > 0)) return;
    for (var e, r = 0, o, i, l, a, u, f = t[n[0]].length; r < f; ++r) {
      for (l = a = 0, e = 0; e < u; ++e) {
        if ((i = (o = t[n[e]][r])[1] - o[0]) > 0) {
          (o[0] = l), (o[1] = l += i);
        } else if (i < 0) {
          (o[1] = a), (o[0] = a += i);
        } else {
          (o[0] = 0), (o[1] = i);
        }
      }
    }
  }
  function _A(t, n) {
    Symbol('JSCA_14430_14437');
    if (!((o = t.length) > 0)) return;
    for (var e = 0, r = t[n[0]], o, i = r.length; e < i; ++e) {
      for (var l = 0, a = 0; l < o; ++l) a += t[l][e][1] || 0;
      r[e][1] += r[e][0] = -a / 2;
    }
    rA(t, n);
  }
  function cA(t, n) {
    Symbol('JSCA_14438_14454');
    if (!((l = t.length) > 0) || !((i = (o = t[n[0]]).length) > 0)) return;
    for (var e = 0, r = 1, o, i, l; r < i; ++r) {
      for (var a = 0, u = 0, f = 0; a < l; ++a) {
        var _ = t[n[a]],
          c = _[r][1] || 0,
          s = _[r - 1][1] || 0,
          S = (c - s) / 2;
        for (var h = 0; h < a; ++h) {
          var y = t[n[h]],
            b = y[r][1] || 0,
            m = y[r - 1][1] || 0;
          S += b - m;
        }
        (u += c), (f += S * c);
      }
      o[r - 1][1] += o[r - 1][0] = e;
      if (u) e -= f / u;
    }
    o[r - 1][1] += o[r - 1][0] = e;
    rA(t, n);
  }
  function sA(t) {
    Symbol('JSCA_14455_14460');
    var e = t.map(SA);
    return oA(t).sort(function (t, n) {
      Symbol('JSCA_14457_14459');
      return e[t] - e[n];
    });
  }
  function SA(t) {
    Symbol('JSCA_14461_14465');
    var n = -1,
      e = 0,
      r = t.length,
      o,
      i = -Infinity;
    while (++n < r) if ((o = +t[n][1]) > i) (i = o), (e = n);
    return e;
  }
  function hA(t) {
    Symbol('JSCA_14466_14471');
    var e = t.map(yA);
    return oA(t).sort(function (t, n) {
      Symbol('JSCA_14468_14470');
      return e[t] - e[n];
    });
  }
  function yA(t) {
    Symbol('JSCA_14472_14476');
    var n = 0,
      e = -1,
      r = t.length,
      o;
    while (++e < r) if ((o = +t[e][1])) n += o;
    return n;
  }
  function bA(t) {
    Symbol('JSCA_14477_14479');
    return hA(t).reverse();
  }
  function mA(t) {
    Symbol('JSCA_14480_14493');
    var n = t.length,
      e,
      r,
      o = t.map(yA),
      i = sA(t),
      l = 0,
      a = 0,
      u = [],
      f = [];
    for (e = 0; e < n; ++e) {
      r = i[e];
      if (l < a) {
        l += o[r];
        u.push(r);
      } else {
        a += o[r];
        f.push(r);
      }
    }
    return f.reverse().concat(u);
  }
  function dA(t) {
    Symbol('JSCA_14494_14496');
    return oA(t).reverse();
  }
  var AA = (t) => () => t;
  function CA(t, { sourceEvent: n, target: e, transform: r, dispatch: o }) {
    Symbol('JSCA_14498_14524');
    Object.defineProperties(this, {
      type: { value: t, enumerable: true, configurable: true },
      sourceEvent: { value: n, enumerable: true, configurable: true },
      target: { value: e, enumerable: true, configurable: true },
      transform: { value: r, enumerable: true, configurable: true },
      _: { value: o },
    });
  }
  function JA(t, n, e) {
    Symbol('JSCA_14525_14529');
    this.k = t;
    this.x = n;
    this.y = e;
  }
  JA.prototype = {
    constructor: JA,
    scale: function (t) {
      Symbol('JSCA_14532_14534');
      return t === 1 ? this : new JA(this.k * t, this.x, this.y);
    },
    translate: function (t, n) {
      Symbol('JSCA_14535_14537');
      return (t === 0) & (n === 0)
        ? this
        : new JA(this.k, this.x + this.k * t, this.y + this.k * n);
    },
    apply: function (t) {
      Symbol('JSCA_14538_14540');
      return [t[0] * this.k + this.x, t[1] * this.k + this.y];
    },
    applyX: function (t) {
      Symbol('JSCA_14541_14543');
      return t * this.k + this.x;
    },
    applyY: function (t) {
      Symbol('JSCA_14544_14546');
      return t * this.k + this.y;
    },
    invert: function (t) {
      Symbol('JSCA_14547_14549');
      return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
    },
    invertX: function (t) {
      Symbol('JSCA_14550_14552');
      return (t - this.x) / this.k;
    },
    invertY: function (t) {
      Symbol('JSCA_14553_14555');
      return (t - this.y) / this.k;
    },
    rescaleX: function (t) {
      Symbol('JSCA_14556_14558');
      return t
        .copy()
        .domain(t.range().map(this.invertX, this).map(t.invert, t));
    },
    rescaleY: function (t) {
      Symbol('JSCA_14559_14561');
      return t
        .copy()
        .domain(t.range().map(this.invertY, this).map(t.invert, t));
    },
    toString: function () {
      Symbol('JSCA_14562_14564');
      return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
    },
  };
  var pA = new JA(1, 0, 0);
  gA.prototype = JA.prototype;
  function gA(t) {
    Symbol('JSCA_14568_14571');
    while (!t.__zoom) if (!(t = t.parentNode)) return pA;
    return t.__zoom;
  }
  function vA(t) {
    Symbol('JSCA_14572_14574');
    t.stopImmediatePropagation();
  }
  function xA(t) {
    Symbol('JSCA_14575_14578');
    t.preventDefault();
    t.stopImmediatePropagation();
  }
  function wA(t) {
    Symbol('JSCA_14579_14581');
    return (!t.ctrlKey || t.type === 'wheel') && !t.button;
  }
  function MA() {
    Symbol('JSCA_14582_14593');
    var t = this;
    if (t instanceof SVGElement) {
      t = t.ownerSVGElement || t;
      if (t.hasAttribute('viewBox')) {
        t = t.viewBox.baseVal;
        return [
          [t.x, t.y],
          [t.x + t.width, t.y + t.height],
        ];
      }
      return [
        [0, 0],
        [t.width.baseVal.value, t.height.baseVal.value],
      ];
    }
    return [
      [0, 0],
      [t.clientWidth, t.clientHeight],
    ];
  }
  function TA() {
    Symbol('JSCA_14594_14596');
    return this.__zoom || pA;
  }
  function kA(t) {
    Symbol('JSCA_14597_14599');
    return (
      -t.deltaY *
      (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 0.002) *
      (t.ctrlKey ? 10 : 1)
    );
  }
  function EA() {
    Symbol('JSCA_14600_14602');
    return navigator.maxTouchPoints || 'ontouchstart' in this;
  }
  function NA(t, n, e) {
    Symbol('JSCA_14603_14606');
    var r = t.invertX(n[0][0]) - e[0][0],
      o = t.invertX(n[1][0]) - e[1][0],
      i = t.invertY(n[0][1]) - e[0][1],
      l = t.invertY(n[1][1]) - e[1][1];
    return t.translate(
      o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
      l > i ? (i + l) / 2 : Math.min(0, i) || Math.max(0, l)
    );
  }
  function PA() {
    Symbol('JSCA_14607_14871');
    var _ = wA,
      s = MA,
      y = NA,
      a = kA,
      n = EA,
      u = [0, Infinity],
      b = [
        [-Infinity, -Infinity],
        [Infinity, Infinity],
      ],
      f = 250,
      S = Dl,
      e = le('start', 'zoom', 'end'),
      c,
      h,
      m,
      d = 500,
      A = 150,
      C = 0,
      J = 10;
    function p(t) {
      Symbol('JSCA_14609_14613');
      t.property('__zoom', TA)
        .on('wheel.zoom', o, { passive: false })
        .on('mousedown.zoom', i)
        .on('dblclick.zoom', l)
        .filter(n)
        .on('touchstart.zoom', T)
        .on('touchmove.zoom', k)
        .on('touchend.zoom touchcancel.zoom', E)
        .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
    }
    p.transform = function (t, n, e, r) {
      Symbol('JSCA_14614_14624');
      var o = t.selection ? t.selection() : t;
      o.property('__zoom', TA);
      if (t !== o) {
        w(t, n, e, r);
      } else {
        o.interrupt().each(function () {
          Symbol('JSCA_14620_14622');
          M(this, arguments)
            .event(r)
            .start()
            .zoom(null, typeof n === 'function' ? n.apply(this, arguments) : n)
            .end();
        });
      }
    };
    p.scaleBy = function (t, e, n, r) {
      Symbol('JSCA_14625_14630');
      p.scaleTo(
        t,
        function () {
          Symbol('JSCA_14626_14629');
          var t = this.__zoom.k,
            n = typeof e === 'function' ? e.apply(this, arguments) : e;
          return t * n;
        },
        n,
        r
      );
    };
    p.scaleTo = function (t, i, l, n) {
      Symbol('JSCA_14631_14636');
      p.transform(
        t,
        function () {
          Symbol('JSCA_14632_14635');
          var t = s.apply(this, arguments),
            n = this.__zoom,
            e =
              l == null
                ? x(t)
                : typeof l === 'function'
                ? l.apply(this, arguments)
                : l,
            r = n.invert(e),
            o = typeof i === 'function' ? i.apply(this, arguments) : i;
          return y(v(g(n, o), e, r), t, b);
        },
        l,
        n
      );
    };
    p.translateBy = function (t, n, e, r) {
      Symbol('JSCA_14637_14641');
      p.transform(
        t,
        function () {
          Symbol('JSCA_14638_14640');
          return y(
            this.__zoom.translate(
              typeof n === 'function' ? n.apply(this, arguments) : n,
              typeof e === 'function' ? e.apply(this, arguments) : e
            ),
            s.apply(this, arguments),
            b
          );
        },
        null,
        r
      );
    };
    p.translateTo = function (t, r, o, i, n) {
      Symbol('JSCA_14642_14647');
      p.transform(
        t,
        function () {
          Symbol('JSCA_14643_14646');
          var t = s.apply(this, arguments),
            n = this.__zoom,
            e =
              i == null
                ? x(t)
                : typeof i === 'function'
                ? i.apply(this, arguments)
                : i;
          return y(
            pA
              .translate(e[0], e[1])
              .scale(n.k)
              .translate(
                typeof r === 'function' ? -r.apply(this, arguments) : -r,
                typeof o === 'function' ? -o.apply(this, arguments) : -o
              ),
            t,
            b
          );
        },
        i,
        n
      );
    };
    function g(t, n) {
      Symbol('JSCA_14648_14651');
      n = Math.max(u[0], Math.min(u[1], n));
      return n === t.k ? t : new JA(n, t.x, t.y);
    }
    function v(t, n, e) {
      Symbol('JSCA_14652_14655');
      var r = n[0] - e[0] * t.k,
        o = n[1] - e[1] * t.k;
      return r === t.x && o === t.y ? t : new JA(t.k, r, o);
    }
    function x(t) {
      Symbol('JSCA_14656_14658');
      return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
    }
    function w(t, f, _, c) {
      Symbol('JSCA_14659_14674');
      t.on('start.zoom', function () {
        Symbol('JSCA_14660_14662');
        M(this, arguments).event(c).start();
      })
        .on('interrupt.zoom end.zoom', function () {
          Symbol('JSCA_14662_14664');
          M(this, arguments).event(c).end();
        })
        .tween('zoom', function () {
          Symbol('JSCA_14664_14673');
          var t = this,
            n = arguments,
            r = M(t, n).event(c),
            e = s.apply(t, n),
            o = _ == null ? x(e) : typeof _ === 'function' ? _.apply(t, n) : _,
            i = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
            l = t.__zoom,
            a = typeof f === 'function' ? f.apply(t, n) : f,
            u = S(l.invert(o).concat(i / l.k), a.invert(o).concat(i / a.k));
          return function (t) {
            Symbol('JSCA_14666_14672');
            if (t === 1) t = a;
            else {
              var n = u(t),
                e = i / n[2];
              t = new JA(e, o[0] - n[0] * e, o[1] - n[1] * e);
            }
            r.zoom(null, t);
          };
        });
    }
    function M(t, n, e) {
      Symbol('JSCA_14675_14677');
      return (!e && t.__zooming) || new r(t, n);
    }
    function r(t, n) {
      Symbol('JSCA_14678_14685');
      this.that = t;
      this.args = n;
      this.active = 0;
      this.sourceEvent = null;
      this.extent = s.apply(t, n);
      this.taps = 0;
    }
    r.prototype = {
      event: function (t) {
        Symbol('JSCA_14687_14690');
        if (t) this.sourceEvent = t;
        return this;
      },
      start: function () {
        Symbol('JSCA_14691_14697');
        if (++this.active === 1) {
          this.that.__zooming = this;
          this.emit('start');
        }
        return this;
      },
      zoom: function (t, n) {
        Symbol('JSCA_14698_14705');
        if (this.mouse && t !== 'mouse')
          this.mouse[1] = n.invert(this.mouse[0]);
        if (this.touch0 && t !== 'touch')
          this.touch0[1] = n.invert(this.touch0[0]);
        if (this.touch1 && t !== 'touch')
          this.touch1[1] = n.invert(this.touch1[0]);
        this.that.__zoom = n;
        this.emit('zoom');
        return this;
      },
      end: function () {
        Symbol('JSCA_14706_14712');
        if (--this.active === 0) {
          delete this.that.__zooming;
          this.emit('end');
        }
        return this;
      },
      emit: function (t) {
        Symbol('JSCA_14713_14722');
        var n = L(this.that).datum();
        e.call(
          t,
          this.that,
          new CA(t, {
            sourceEvent: this.sourceEvent,
            target: p,
            type: t,
            transform: this.that.__zoom,
            dispatch: e,
          }),
          n
        );
      },
    };
    function o(t, ...n) {
      Symbol('JSCA_14724_14744');
      if (!_.apply(this, arguments)) return;
      var e = M(this, n).event(t),
        r = this.__zoom,
        o = Math.max(
          u[0],
          Math.min(u[1], r.k * Math.pow(2, a.apply(this, arguments)))
        ),
        i = ho(t);
      if (e.wheel) {
        if (e.mouse[0][0] !== i[0] || e.mouse[0][1] !== i[1]) {
          e.mouse[1] = r.invert((e.mouse[0] = i));
        }
        clearTimeout(e.wheel);
      } else if (r.k === o) return;
      else {
        e.mouse = [i, r.invert(i)];
        N1(this);
        e.start();
      }
      xA(t);
      e.wheel = setTimeout(l, A);
      e.zoom('mouse', y(v(g(r, o), e.mouse[0], e.mouse[1]), e.extent, b));
      function l() {
        Symbol('JSCA_14740_14743');
        e.wheel = null;
        e.end();
      }
    }
    function i(t, ...n) {
      Symbol('JSCA_14745_14767');
      if (m || !_.apply(this, arguments)) return;
      var r = t.currentTarget,
        o = M(this, n, true).event(t),
        e = L(t.view).on('mousemove.zoom', u, true).on('mouseup.zoom', f, true),
        i = ho(t, r),
        l = t.clientX,
        a = t.clientY;
      po(t.view);
      vA(t);
      o.mouse = [i, this.__zoom.invert(i)];
      N1(this);
      o.start();
      function u(t) {
        Symbol('JSCA_14753_14760');
        xA(t);
        if (!o.moved) {
          var n = t.clientX - l,
            e = t.clientY - a;
          o.moved = n * n + e * e > C;
        }
        o.event(t).zoom(
          'mouse',
          y(v(o.that.__zoom, (o.mouse[0] = ho(t, r)), o.mouse[1]), o.extent, b)
        );
      }
      function f(t) {
        Symbol('JSCA_14761_14766');
        e.on('mousemove.zoom mouseup.zoom', null);
        go(t.view, o.moved);
        xA(t);
        o.event(t).end();
      }
    }
    function l(t, ...n) {
      Symbol('JSCA_14768_14773');
      if (!_.apply(this, arguments)) return;
      var e = this.__zoom,
        r = ho(t.changedTouches ? t.changedTouches[0] : t, this),
        o = e.invert(r),
        i = e.k * (t.shiftKey ? 0.5 : 2),
        l = y(v(g(e, i), r, o), s.apply(this, n), b);
      xA(t);
      if (f > 0) L(this).transition().duration(f).call(w, l, r, t);
      else L(this).call(p.transform, l, r, t);
    }
    function T(t, ...n) {
      Symbol('JSCA_14774_14791');
      if (!_.apply(this, arguments)) return;
      var e = t.touches,
        r = e.length,
        o = M(this, n, t.changedTouches.length === r).event(t),
        i,
        l,
        a,
        u;
      vA(t);
      for (l = 0; l < r; ++l) {
        (a = e[l]), (u = ho(a, this));
        u = [u, this.__zoom.invert(u), a.identifier];
        if (!o.touch0) (o.touch0 = u), (i = true), (o.taps = 1 + !!c);
        else if (!o.touch1 && o.touch0[2] !== u[2])
          (o.touch1 = u), (o.taps = 0);
      }
      if (c) c = clearTimeout(c);
      if (i) {
        if (o.taps < 2)
          (h = u[0]),
            (c = setTimeout(function () {
              Symbol('JSCA_14785_14787');
              c = null;
            }, d));
        N1(this);
        o.start();
      }
    }
    function k(t, ...n) {
      Symbol('JSCA_14792_14808');
      if (!this.__zooming) return;
      var e = M(this, n).event(t),
        r = t.changedTouches,
        o = r.length,
        i,
        l,
        a,
        u;
      xA(t);
      for (i = 0; i < o; ++i) {
        (l = r[i]), (a = ho(l, this));
        if (e.touch0 && e.touch0[2] === l.identifier) e.touch0[0] = a;
        else if (e.touch1 && e.touch1[2] === l.identifier) e.touch1[0] = a;
      }
      l = e.that.__zoom;
      if (e.touch1) {
        var f = e.touch0[0],
          _ = e.touch0[1],
          c = e.touch1[0],
          s = e.touch1[1],
          S = (S = c[0] - f[0]) * S + (S = c[1] - f[1]) * S,
          h = (h = s[0] - _[0]) * h + (h = s[1] - _[1]) * h;
        l = g(l, Math.sqrt(S / h));
        a = [(f[0] + c[0]) / 2, (f[1] + c[1]) / 2];
        u = [(_[0] + s[0]) / 2, (_[1] + s[1]) / 2];
      } else if (e.touch0) (a = e.touch0[0]), (u = e.touch0[1]);
      else return;
      e.zoom('touch', y(v(l, a, u), e.extent, b));
    }
    function E(t, ...n) {
      Symbol('JSCA_14809_14832');
      if (!this.__zooming) return;
      var e = M(this, n).event(t),
        r = t.changedTouches,
        o = r.length,
        i,
        l;
      vA(t);
      if (m) clearTimeout(m);
      m = setTimeout(function () {
        Symbol('JSCA_14814_14816');
        m = null;
      }, d);
      for (i = 0; i < o; ++i) {
        l = r[i];
        if (e.touch0 && e.touch0[2] === l.identifier) delete e.touch0;
        else if (e.touch1 && e.touch1[2] === l.identifier) delete e.touch1;
      }
      if (e.touch1 && !e.touch0) (e.touch0 = e.touch1), delete e.touch1;
      if (e.touch0) e.touch0[1] = this.__zoom.invert(e.touch0[0]);
      else {
        e.end();
        if (e.taps === 2) {
          l = ho(l, this);
          if (Math.hypot(h[0] - l[0], h[1] - l[1]) < J) {
            var a = L(this).on('dblclick.zoom');
            if (a) a.apply(this, arguments);
          }
        }
      }
    }
    p.wheelDelta = function (t) {
      Symbol('JSCA_14833_14835');
      return arguments.length
        ? ((a = typeof t === 'function' ? t : AA(+t)), p)
        : a;
    };
    p.filter = function (t) {
      Symbol('JSCA_14836_14838');
      return arguments.length
        ? ((_ = typeof t === 'function' ? t : AA(!!t)), p)
        : _;
    };
    p.touchable = function (t) {
      Symbol('JSCA_14839_14841');
      return arguments.length
        ? ((n = typeof t === 'function' ? t : AA(!!t)), p)
        : n;
    };
    p.extent = function (t) {
      Symbol('JSCA_14842_14844');
      return arguments.length
        ? ((s =
            typeof t === 'function'
              ? t
              : AA([
                  [+t[0][0], +t[0][1]],
                  [+t[1][0], +t[1][1]],
                ])),
          p)
        : s;
    };
    p.scaleExtent = function (t) {
      Symbol('JSCA_14845_14847');
      return arguments.length
        ? ((u[0] = +t[0]), (u[1] = +t[1]), p)
        : [u[0], u[1]];
    };
    p.translateExtent = function (t) {
      Symbol('JSCA_14848_14850');
      return arguments.length
        ? ((b[0][0] = +t[0][0]),
          (b[1][0] = +t[1][0]),
          (b[0][1] = +t[0][1]),
          (b[1][1] = +t[1][1]),
          p)
        : [
            [b[0][0], b[0][1]],
            [b[1][0], b[1][1]],
          ];
    };
    p.constrain = function (t) {
      Symbol('JSCA_14851_14853');
      return arguments.length ? ((y = t), p) : y;
    };
    p.duration = function (t) {
      Symbol('JSCA_14854_14856');
      return arguments.length ? ((f = +t), p) : f;
    };
    p.interpolate = function (t) {
      Symbol('JSCA_14857_14859');
      return arguments.length ? ((S = t), p) : S;
    };
    p.on = function () {
      Symbol('JSCA_14860_14863');
      var t = e.on.apply(e, arguments);
      return t === e ? p : t;
    };
    p.clickDistance = function (t) {
      Symbol('JSCA_14864_14866');
      return arguments.length ? ((C = (t = +t) * t), p) : Math.sqrt(C);
    };
    p.tapDistance = function (t) {
      Symbol('JSCA_14867_14869');
      return arguments.length ? ((J = +t), p) : J;
    };
    return p;
  }
  a.Adder = P;
  a.Delaunay = Z_;
  a.FormatSpecifier = Os;
  a.InternMap = ht;
  a.InternSet = yt;
  a.Node = zb;
  a.Path = zf;
  a.Voronoi = L_;
  a.ZoomTransform = JA;
  a.active = $u;
  a.arc = _5;
  a.area = d5;
  a.areaRadial = M5;
  a.ascending = f;
  a.autoType = Tc;
  a.axisBottom = re;
  a.axisLeft = oe;
  a.axisRight = ee;
  a.axisTop = ne;
  a.bin = Vt;
  a.bisect = T;
  a.bisectCenter = M;
  a.bisectLeft = w;
  a.bisectRight = x;
  a.bisector = b;
  a.blob = Nc;
  a.blur = k;
  a.blur2 = E;
  a.blurImage = Y;
  a.brush = cf;
  a.brushSelection = uf;
  a.brushX = ff;
  a.brushY = _f;
  a.buffer = zc;
  a.chord = gf;
  a.chordDirected = xf;
  a.chordTranspose = vf;
  a.cluster = cb;
  a.color = Zo;
  a.contourDensity = h_;
  a.contours = l_;
  a.count = et;
  a.create = fo;
  a.creator = be;
  a.cross = at;
  a.csv = Fc;
  a.csvFormat = yc;
  a.csvFormatBody = bc;
  a.csvFormatRow = dc;
  a.csvFormatRows = mc;
  a.csvFormatValue = Ac;
  a.csvParse = Sc;
  a.csvParseRows = hc;
  a.cubehelix = Xi;
  a.cumsum = ut;
  a.curveBasis = d9;
  a.curveBasisClosed = C9;
  a.curveBasisOpen = p9;
  a.curveBumpX = N5;
  a.curveBumpY = P5;
  a.curveBundle = v9;
  a.curveCardinal = M9;
  a.curveCardinalClosed = k9;
  a.curveCardinalOpen = N9;
  a.curveCatmullRom = I9;
  a.curveCatmullRomClosed = D9;
  a.curveCatmullRomOpen = F9;
  a.curveLinear = h5;
  a.curveLinearClosed = U9;
  a.curveMonotoneX = G9;
  a.curveMonotoneY = V9;
  a.curveNatural = K9;
  a.curveStep = tA;
  a.curveStepAfter = eA;
  a.curveStepBefore = nA;
  a.descending = y;
  a.deviation = _t;
  a.difference = $n;
  a.disjoint = Dn;
  a.dispatch = le;
  a.drag = Eo;
  a.dragDisable = po;
  a.dragEnable = go;
  a.dsv = Rc;
  a.dsvFormat = cc;
  a.easeBack = vu;
  a.easeBackIn = pu;
  a.easeBackInOut = vu;
  a.easeBackOut = gu;
  a.easeBounce = Au;
  a.easeBounceIn = du;
  a.easeBounceInOut = Cu;
  a.easeBounceOut = Au;
  a.easeCircle = au;
  a.easeCircleIn = iu;
  a.easeCircleInOut = au;
  a.easeCircleOut = lu;
  a.easeCubic = ja;
  a.easeCubicIn = Ya;
  a.easeCubicInOut = ja;
  a.easeCubicOut = La;
  a.easeElastic = ku;
  a.easeElasticIn = Tu;
  a.easeElasticInOut = Eu;
  a.easeElasticOut = ku;
  a.easeExp = ou;
  a.easeExpIn = eu;
  a.easeExpInOut = ou;
  a.easeExpOut = ru;
  a.easeLinear = qa;
  a.easePoly = Va;
  a.easePolyIn = Xa;
  a.easePolyInOut = Va;
  a.easePolyOut = Ga;
  a.easeQuad = Ba;
  a.easeQuadIn = Ua;
  a.easeQuadInOut = Ba;
  a.easeQuadOut = Oa;
  a.easeSin = tu;
  a.easeSinIn = Ka;
  a.easeSinInOut = tu;
  a.easeSinOut = Qa;
  a.every = kn;
  a.extent = ct;
  a.fcumsum = St;
  a.filter = Nn;
  a.flatGroup = vt;
  a.flatRollup = xt;
  a.forceCenter = Xc;
  a.forceCollide = ms;
  a.forceLink = Cs;
  a.forceManyBody = Es;
  a.forceRadial = Ns;
  a.forceSimulation = ks;
  a.forceX = Ps;
  a.forceY = zs;
  a.formatDefaultLocale = Ks;
  a.formatLocale = Ws;
  a.formatSpecifier = Us;
  a.fsum = st;
  a.geoAlbers = Cy;
  a.geoAlbersUsa = py;
  a.geoArea = $0;
  a.geoAzimuthalEqualArea = wy;
  a.geoAzimuthalEqualAreaRaw = xy;
  a.geoAzimuthalEquidistant = Ty;
  a.geoAzimuthalEquidistantRaw = My;
  a.geoBounds = fS;
  a.geoCentroid = RS;
  a.geoCircle = GS;
  a.geoClipAntimeridian = ih;
  a.geoClipCircle = fh;
  a.geoClipExtent = hh;
  a.geoClipRectangle = Sh;
  a.geoConicConformal = Iy;
  a.geoConicConformalRaw = zy;
  a.geoConicEqualArea = Ay;
  a.geoConicEqualAreaRaw = dy;
  a.geoConicEquidistant = Fy;
  a.geoConicEquidistantRaw = Ry;
  a.geoContains = Dh;
  a.geoDistance = Mh;
  a.geoEqualEarth = Hy;
  a.geoEqualEarthRaw = jy;
  a.geoEquirectangular = Dy;
  a.geoEquirectangularRaw = $y;
  a.geoGnomonic = Gy;
  a.geoGnomonicRaw = Xy;
  a.geoGraticule = qh;
  a.geoGraticule10 = Uh;
  a.geoIdentity = Vy;
  a.geoInterpolate = Oh;
  a.geoLength = vh;
  a.geoMercator = Ey;
  a.geoMercatorRaw = ky;
  a.geoNaturalEarth1 = Zy;
  a.geoNaturalEarth1Raw = Wy;
  a.geoOrthographic = Qy;
  a.geoOrthographicRaw = Ky;
  a.geoPath = W2;
  a.geoProjection = hy;
  a.geoProjectionMutator = yy;
  a.geoRotation = jS;
  a.geoStereographic = nb;
  a.geoStereographicRaw = tb;
  a.geoStream = p0;
  a.geoTransform = Z2;
  a.geoTransverseMercator = rb;
  a.geoTransverseMercatorRaw = eb;
  a.gray = wi;
  a.greatest = en;
  a.greatestIndex = Jn;
  a.group = Jt;
  a.groupSort = Dt;
  a.groups = pt;
  a.hcl = $i;
  a.hierarchy = Mb;
  a.histogram = Vt;
  a.hsl = _i;
  a.html = jc;
  a.image = Uc;
  a.index = Tt;
  a.indexes = kt;
  a.interpolate = Al;
  a.interpolateArray = fl;
  a.interpolateBasis = Wi;
  a.interpolateBasisClosed = Zi;
  a.interpolateBlues = A8;
  a.interpolateBrBG = N7;
  a.interpolateBuGn = V7;
  a.interpolateBuPu = Z7;
  a.interpolateCividis = E8;
  a.interpolateCool = z8;
  a.interpolateCubehelix = jl;
  a.interpolateCubehelixDefault = N8;
  a.interpolateCubehelixLong = Hl;
  a.interpolateDate = cl;
  a.interpolateDiscrete = Cl;
  a.interpolateGnBu = Q7;
  a.interpolateGreens = J8;
  a.interpolateGreys = g8;
  a.interpolateHcl = Bl;
  a.interpolateHclLong = Yl;
  a.interpolateHsl = Fl;
  a.interpolateHslLong = ql;
  a.interpolateHue = Jl;
  a.interpolateInferno = L8;
  a.interpolateLab = Ul;
  a.interpolateMagma = Y8;
  a.interpolateNumber = sl;
  a.interpolateNumberArray = al;
  a.interpolateObject = Sl;
  a.interpolateOrRd = n8;
  a.interpolateOranges = k8;
  a.interpolatePRGn = z7;
  a.interpolatePiYG = $7;
  a.interpolatePlasma = j8;
  a.interpolatePuBu = i8;
  a.interpolatePuBuGn = r8;
  a.interpolatePuOr = R7;
  a.interpolatePuRd = a8;
  a.interpolatePurples = x8;
  a.interpolateRainbow = $8;
  a.interpolateRdBu = q7;
  a.interpolateRdGy = O7;
  a.interpolateRdPu = f8;
  a.interpolateRdYlBu = Y7;
  a.interpolateRdYlGn = j7;
  a.interpolateReds = M8;
  a.interpolateRgb = rl;
  a.interpolateRgbBasis = il;
  a.interpolateRgbBasisClosed = ll;
  a.interpolateRound = pl;
  a.interpolateSinebow = q8;
  a.interpolateSpectral = X7;
  a.interpolateString = dl;
  a.interpolateTransformCss = El;
  a.interpolateTransformSvg = Nl;
  a.interpolateTurbo = U8;
  a.interpolateViridis = B8;
  a.interpolateWarm = P8;
  a.interpolateYlGn = S8;
  a.interpolateYlGnBu = c8;
  a.interpolateYlOrBr = y8;
  a.interpolateYlOrRd = m8;
  a.interpolateZoom = Dl;
  a.interrupt = N1;
  a.intersection = Rn;
  a.interval = b1;
  a.isoFormat = Wd;
  a.isoParse = Qd;
  a.json = Bc;
  a.lab = Mi;
  a.lch = Ii;
  a.least = An;
  a.leastIndex = Cn;
  a.line = m5;
  a.lineRadial = w5;
  a.link = D5;
  a.linkHorizontal = R5;
  a.linkRadial = q5;
  a.linkVertical = F5;
  a.local = co;
  a.map = Pn;
  a.matcher = xe;
  a.max = Wt;
  a.maxIndex = Zt;
  a.mean = fn;
  a.median = _n;
  a.medianIndex = cn;
  a.merge = Sn;
  a.min = Kt;
  a.minIndex = Qt;
  a.mode = hn;
  a.namespace = Se;
  a.namespaces = se;
  a.nice = Xt;
  a.now = l1;
  a.pack = am;
  a.packEnclose = Lb;
  a.packSiblings = im;
  a.pairs = yn;
  a.partition = Sm;
  a.path = If;
  a.pathRound = $f;
  a.permute = Pt;
  a.pie = J5;
  a.piecewise = Xl;
  a.pointRadial = T5;
  a.pointer = ho;
  a.pointers = yo;
  a.polygonArea = Um;
  a.polygonCentroid = Om;
  a.polygonContains = Hm;
  a.polygonHull = jm;
  a.polygonLength = Xm;
  a.precisionFixed = Qs;
  a.precisionPrefix = t0;
  a.precisionRound = n0;
  a.quadtree = cs;
  a.quantile = rn;
  a.quantileIndex = ln;
  a.quantileSorted = on;
  a.quantize = Gl;
  a.quickselect = tn;
  a.radialArea = M5;
  a.radialLine = w5;
  a.randomBates = Qm;
  a.randomBernoulli = e3;
  a.randomBeta = i3;
  a.randomBinomial = l3;
  a.randomCauchy = u3;
  a.randomExponential = t3;
  a.randomGamma = o3;
  a.randomGeometric = r3;
  a.randomInt = Vm;
  a.randomIrwinHall = Km;
  a.randomLcg = h3;
  a.randomLogNormal = Zm;
  a.randomLogistic = f3;
  a.randomNormal = Wm;
  a.randomPareto = n3;
  a.randomPoisson = _3;
  a.randomUniform = Gm;
  a.randomWeibull = a3;
  a.range = mn;
  a.rank = dn;
  a.reduce = zn;
  a.reverse = In;
  a.rgb = ni;
  a.ribbon = Hf;
  a.ribbonArrow = Xf;
  a.rollup = wt;
  a.rollups = Mt;
  a.scaleBand = A3;
  a.scaleDiverging = h7;
  a.scaleDivergingLog = y7;
  a.scaleDivergingPow = m7;
  a.scaleDivergingSqrt = d7;
  a.scaleDivergingSymlog = b7;
  a.scaleIdentity = D3;
  a.scaleImplicit = m3;
  a.scaleLinear = $3;
  a.scaleLog = X3;
  a.scaleOrdinal = d3;
  a.scalePoint = J3;
  a.scalePow = e4;
  a.scaleQuantile = a4;
  a.scaleQuantize = u4;
  a.scaleRadial = l4;
  a.scaleSequential = a7;
  a.scaleSequentialLog = u7;
  a.scaleSequentialPow = _7;
  a.scaleSequentialQuantile = s7;
  a.scaleSequentialSqrt = c7;
  a.scaleSequentialSymlog = f7;
  a.scaleSqrt = r4;
  a.scaleSymlog = Z3;
  a.scaleThreshold = f4;
  a.scaleTime = r7;
  a.scaleUtc = o7;
  a.scan = pn;
  a.schemeAccent = C7;
  a.schemeBlues = d8;
  a.schemeBrBG = E7;
  a.schemeBuGn = G7;
  a.schemeBuPu = W7;
  a.schemeCategory10 = A7;
  a.schemeDark2 = J7;
  a.schemeGnBu = K7;
  a.schemeGreens = C8;
  a.schemeGreys = p8;
  a.schemeObservable10 = p7;
  a.schemeOrRd = t8;
  a.schemeOranges = T8;
  a.schemePRGn = P7;
  a.schemePaired = g7;
  a.schemePastel1 = v7;
  a.schemePastel2 = x7;
  a.schemePiYG = I7;
  a.schemePuBu = o8;
  a.schemePuBuGn = e8;
  a.schemePuOr = D7;
  a.schemePuRd = l8;
  a.schemePurples = v8;
  a.schemeRdBu = F7;
  a.schemeRdGy = U7;
  a.schemeRdPu = u8;
  a.schemeRdYlBu = B7;
  a.schemeRdYlGn = L7;
  a.schemeReds = w8;
  a.schemeSet1 = w7;
  a.schemeSet2 = M7;
  a.schemeSet3 = T7;
  a.schemeSpectral = H7;
  a.schemeTableau10 = k7;
  a.schemeYlGn = s8;
  a.schemeYlGnBu = _8;
  a.schemeYlOrBr = h8;
  a.schemeYlOrRd = b8;
  a.select = L;
  a.selectAll = bo;
  a.selection = ao;
  a.selector = de;
  a.selectorAll = pe;
  a.shuffle = gn;
  a.shuffler = vn;
  a.some = En;
  a.sort = zt;
  a.stack = aA;
  a.stackOffsetDiverging = fA;
  a.stackOffsetExpand = uA;
  a.stackOffsetNone = rA;
  a.stackOffsetSilhouette = _A;
  a.stackOffsetWiggle = cA;
  a.stackOrderAppearance = sA;
  a.stackOrderAscending = hA;
  a.stackOrderDescending = bA;
  a.stackOrderInsideOut = mA;
  a.stackOrderNone = oA;
  a.stackOrderReverse = dA;
  a.stratify = Am;
  a.style = yr;
  a.subset = On;
  a.sum = xn;
  a.superset = qn;
  a.svg = Hc;
  a.symbol = h9;
  a.symbolAsterisk = O5;
  a.symbolCircle = B5;
  a.symbolCross = Y5;
  a.symbolDiamond = H5;
  a.symbolDiamond2 = X5;
  a.symbolPlus = G5;
  a.symbolSquare = V5;
  a.symbolSquare2 = W5;
  a.symbolStar = n9;
  a.symbolTimes = c9;
  a.symbolTriangle = r9;
  a.symbolTriangle2 = i9;
  a.symbolWye = _9;
  a.symbolX = c9;
  a.symbols = s9;
  a.symbolsFill = s9;
  a.symbolsStroke = S9;
  a.text = $c;
  a.thresholdFreedmanDiaconis = an;
  a.thresholdScott = un;
  a.thresholdSturges = Gt;
  a.tickFormat = z3;
  a.tickIncrement = jt;
  a.tickStep = Ht;
  a.ticks = Lt;
  a.timeDay = N4;
  a.timeDays = P4;
  a.timeFormatDefaultLocale = Hd;
  a.timeFormatLocale = k6;
  a.timeFriday = Y4;
  a.timeFridays = W4;
  a.timeHour = M4;
  a.timeHours = T4;
  a.timeInterval = o;
  a.timeMillisecond = s4;
  a.timeMilliseconds = S4;
  a.timeMinute = g4;
  a.timeMinutes = v4;
  a.timeMonday = q4;
  a.timeMondays = H4;
  a.timeMonth = S6;
  a.timeMonths = h6;
  a.timeSaturday = L4;
  a.timeSaturdays = Z4;
  a.timeSecond = J4;
  a.timeSeconds = p4;
  a.timeSunday = F4;
  a.timeSundays = j4;
  a.timeThursday = B4;
  a.timeThursdays = V4;
  a.timeTickInterval = x6;
  a.timeTicks = v6;
  a.timeTuesday = U4;
  a.timeTuesdays = X4;
  a.timeWednesday = O4;
  a.timeWednesdays = G4;
  a.timeWeek = F4;
  a.timeWeeks = j4;
  a.timeYear = m6;
  a.timeYears = d6;
  a.timeout = y1;
  a.timer = f1;
  a.timerFlush = _1;
  a.transition = Da;
  a.transpose = wn;
  a.tree = Nm;
  a.treemap = Dm;
  a.treemapBinary = Rm;
  a.treemapDice = sm;
  a.treemapResquarify = qm;
  a.treemapSlice = Pm;
  a.treemapSliceDice = Fm;
  a.treemapSquarify = $m;
  a.tsv = qc;
  a.tsvFormat = gc;
  a.tsvFormatBody = vc;
  a.tsvFormatRow = wc;
  a.tsvFormatRows = xc;
  a.tsvFormatValue = Mc;
  a.tsvParse = Jc;
  a.tsvParseRows = pc;
  a.union = Bn;
  a.unixDay = $4;
  a.unixDays = D4;
  a.utcDay = z4;
  a.utcDays = I4;
  a.utcFriday = o6;
  a.utcFridays = c6;
  a.utcHour = k4;
  a.utcHours = E4;
  a.utcMillisecond = s4;
  a.utcMilliseconds = S4;
  a.utcMinute = x4;
  a.utcMinutes = w4;
  a.utcMonday = t6;
  a.utcMondays = a6;
  a.utcMonth = y6;
  a.utcMonths = b6;
  a.utcSaturday = i6;
  a.utcSaturdays = s6;
  a.utcSecond = J4;
  a.utcSeconds = p4;
  a.utcSunday = Q4;
  a.utcSundays = l6;
  a.utcThursday = r6;
  a.utcThursdays = _6;
  a.utcTickInterval = g6;
  a.utcTicks = p6;
  a.utcTuesday = n6;
  a.utcTuesdays = u6;
  a.utcWednesday = e6;
  a.utcWednesdays = f6;
  a.utcWeek = Q4;
  a.utcWeeks = l6;
  a.utcYear = A6;
  a.utcYears = C6;
  a.variance = ft;
  a.version = h;
  a.window = _r;
  a.xml = Lc;
  a.zip = Tn;
  a.zoom = PA;
  a.zoomIdentity = pA;
  a.zoomTransform = gA;
});
