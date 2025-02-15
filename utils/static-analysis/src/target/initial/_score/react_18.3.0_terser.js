/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';
'production' !== process.env.NODE_ENV &&
  (function () {
    'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      'function' ==
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Symbol.for('react.element'),
      t = Symbol.for('react.portal'),
      r = Symbol.for('react.fragment'),
      n = Symbol.for('react.strict_mode'),
      o = Symbol.for('react.profiler'),
      a = Symbol.for('react.provider'),
      i = Symbol.for('react.context'),
      u = Symbol.for('react.forward_ref'),
      s = Symbol.for('react.suspense'),
      c = Symbol.for('react.suspense_list'),
      l = Symbol.for('react.memo'),
      f = Symbol.for('react.lazy'),
      p = Symbol.for('react.offscreen'),
      d = Symbol.iterator;
    function y(e) {
      if (null === e || 'object' != typeof e) return null;
      var t = (d && e[d]) || e['@@iterator'];
      return 'function' == typeof t ? t : null;
    }
    var m = { current: null },
      h = { transition: null },
      v = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 },
      g = { current: null },
      b = {},
      _ = null;
    function w(e) {
      _ = e;
    }
    (b.setExtraStackFrame = function (e) {
      _ = e;
    }),
      (b.getCurrentStack = null),
      (b.getStackAddendum = function () {
        var e = '';
        _ && (e += _);
        var t = b.getCurrentStack;
        return t && (e += t() || ''), e;
      });
    var k = {
      ReactCurrentDispatcher: m,
      ReactCurrentBatchConfig: h,
      ReactCurrentOwner: g,
    };
    function O(e) {
      for (
        var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
        n < t;
        n++
      )
        r[n - 1] = arguments[n];
      C('warn', e, r);
    }
    function S(e) {
      for (
        var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
        n < t;
        n++
      )
        r[n - 1] = arguments[n];
      C('error', e, r);
    }
    function C(e, t, r) {
      var n = k.ReactDebugCurrentFrame.getStackAddendum();
      '' !== n && ((t += '%s'), (r = r.concat([n])));
      var o = r.map(function (e) {
        return String(e);
      });
      o.unshift('Warning: ' + t),
        Function.prototype.apply.call(console[e], console, o);
    }
    (k.ReactDebugCurrentFrame = b), (k.ReactCurrentActQueue = v);
    var x = {};
    function R(e, t) {
      var r = e.constructor,
        n = (r && (r.displayName || r.name)) || 'ReactClass',
        o = n + '.' + t;
      x[o] ||
        (S(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          t,
          n
        ),
        (x[o] = !0));
    }
    var E = {
        isMounted: function (e) {
          return !1;
        },
        enqueueForceUpdate: function (e, t, r) {
          R(e, 'forceUpdate');
        },
        enqueueReplaceState: function (e, t, r, n) {
          R(e, 'replaceState');
        },
        enqueueSetState: function (e, t, r, n) {
          R(e, 'setState');
        },
      },
      j = Object.assign,
      P = {};
    function T(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = P),
        (this.updater = r || E);
    }
    Object.freeze(P),
      (T.prototype.isReactComponent = {}),
      (T.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
          throw new Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
          );
        this.updater.enqueueSetState(this, e, t, 'setState');
      }),
      (T.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
      });
    var $ = {
        isMounted: [
          'isMounted',
          'Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.',
        ],
        replaceState: [
          'replaceState',
          'Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).',
        ],
      },
      D = function (e, t) {
        Object.defineProperty(T.prototype, e, {
          get: function () {
            O(
              '%s(...) is deprecated in plain JavaScript React classes. %s',
              t[0],
              t[1]
            );
          },
        });
      };
    for (var L in $) $.hasOwnProperty(L) && D(L, $[L]);
    function I() {}
    function N(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = P),
        (this.updater = r || E);
    }
    I.prototype = T.prototype;
    var F = (N.prototype = new I());
    (F.constructor = N), j(F, T.prototype), (F.isPureReactComponent = !0);
    var A = Array.isArray;
    function M(e) {
      return A(e);
    }
    function V(e) {
      return '' + e;
    }
    function z(e) {
      if (
        (function (e) {
          try {
            return V(e), !1;
          } catch (e) {
            return !0;
          }
        })(e)
      )
        return (
          S(
            'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
            (function (e) {
              return (
                ('function' == typeof Symbol &&
                  Symbol.toStringTag &&
                  e[Symbol.toStringTag]) ||
                e.constructor.name ||
                'Object'
              );
            })(e)
          ),
          V(e)
        );
    }
    function U(e) {
      return e.displayName || 'Context';
    }
    function B(e) {
      if (null == e) return null;
      if (
        ('number' == typeof e.tag &&
          S(
            'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
          ),
        'function' == typeof e)
      )
        return e.displayName || e.name || null;
      if ('string' == typeof e) return e;
      switch (e) {
        case r:
          return 'Fragment';
        case t:
          return 'Portal';
        case o:
          return 'Profiler';
        case n:
          return 'StrictMode';
        case s:
          return 'Suspense';
        case c:
          return 'SuspenseList';
      }
      if ('object' == typeof e)
        switch (e.$$typeof) {
          case i:
            return U(e) + '.Consumer';
          case a:
            return U(e._context) + '.Provider';
          case u:
            return (function (e, t, r) {
              var n = e.displayName;
              if (n) return n;
              var o = t.displayName || t.name || '';
              return '' !== o ? r + '(' + o + ')' : r;
            })(e, e.render, 'ForwardRef');
          case l:
            var p = e.displayName || null;
            return null !== p ? p : B(e.type) || 'Memo';
          case f:
            var d = e,
              y = d._payload,
              m = d._init;
            try {
              return B(m(y));
            } catch (e) {
              return null;
            }
        }
      return null;
    }
    var Y,
      q,
      H,
      W = Object.prototype.hasOwnProperty,
      G = { key: !0, ref: !0, __self: !0, __source: !0 };
    function K(e) {
      if (W.call(e, 'ref')) {
        var t = Object.getOwnPropertyDescriptor(e, 'ref').get;
        if (t && t.isReactWarning) return !1;
      }
      return void 0 !== e.ref;
    }
    function J(e) {
      if (W.call(e, 'key')) {
        var t = Object.getOwnPropertyDescriptor(e, 'key').get;
        if (t && t.isReactWarning) return !1;
      }
      return void 0 !== e.key;
    }
    H = {};
    var X = function (t, r, n, o, a, i, u) {
      var s = {
        $$typeof: e,
        type: t,
        key: r,
        ref: n,
        props: u,
        _owner: i,
        _store: {},
      };
      return (
        Object.defineProperty(s._store, 'validated', {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(s, '_self', {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o,
        }),
        Object.defineProperty(s, '_source', {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a,
        }),
        Object.freeze && (Object.freeze(s.props), Object.freeze(s)),
        s
      );
    };
    function Q(e, t, r) {
      var n,
        o = {},
        a = null,
        i = null,
        u = null,
        s = null;
      if (null != t)
        for (n in (K(t) &&
          ((i = t.ref),
          (function (e) {
            if (
              'string' == typeof e.ref &&
              g.current &&
              e.__self &&
              g.current.stateNode !== e.__self
            ) {
              var t = B(g.current.type);
              H[t] ||
                (S(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  t,
                  e.ref
                ),
                (H[t] = !0));
            }
          })(t)),
        J(t) && (z(t.key), (a = '' + t.key)),
        (u = void 0 === t.__self ? null : t.__self),
        (s = void 0 === t.__source ? null : t.__source),
        t))
          W.call(t, n) && !G.hasOwnProperty(n) && (o[n] = t[n]);
      var c = arguments.length - 2;
      if (1 === c) o.children = r;
      else if (c > 1) {
        for (var l = Array(c), f = 0; f < c; f++) l[f] = arguments[f + 2];
        Object.freeze && Object.freeze(l), (o.children = l);
      }
      if (e && e.defaultProps) {
        var p = e.defaultProps;
        for (n in p) void 0 === o[n] && (o[n] = p[n]);
      }
      if (a || i) {
        var d =
          'function' == typeof e ? e.displayName || e.name || 'Unknown' : e;
        a &&
          (function (e, t) {
            var r = function () {
              Y ||
                ((Y = !0),
                S(
                  '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                  t
                ));
            };
            (r.isReactWarning = !0),
              Object.defineProperty(e, 'key', { get: r, configurable: !0 });
          })(o, d),
          i &&
            (function (e, t) {
              var r = function () {
                q ||
                  ((q = !0),
                  S(
                    '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    t
                  ));
              };
              (r.isReactWarning = !0),
                Object.defineProperty(e, 'ref', { get: r, configurable: !0 });
            })(o, d);
      }
      return X(e, a, i, u, s, g.current, o);
    }
    function Z(e, t, r) {
      if (null == e)
        throw new Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            e +
            '.'
        );
      var n,
        o,
        a = j({}, e.props),
        i = e.key,
        u = e.ref,
        s = e._self,
        c = e._source,
        l = e._owner;
      if (null != t)
        for (n in (K(t) && ((u = t.ref), (l = g.current)),
        J(t) && (z(t.key), (i = '' + t.key)),
        e.type && e.type.defaultProps && (o = e.type.defaultProps),
        t))
          W.call(t, n) &&
            !G.hasOwnProperty(n) &&
            (void 0 === t[n] && void 0 !== o ? (a[n] = o[n]) : (a[n] = t[n]));
      var f = arguments.length - 2;
      if (1 === f) a.children = r;
      else if (f > 1) {
        for (var p = Array(f), d = 0; d < f; d++) p[d] = arguments[d + 2];
        a.children = p;
      }
      return X(e.type, i, u, s, c, l, a);
    }
    function ee(t) {
      return 'object' == typeof t && null !== t && t.$$typeof === e;
    }
    var te = !1,
      re = /\/+/g;
    function ne(e) {
      return e.replace(re, '$&/');
    }
    function oe(e, t) {
      return 'object' == typeof e && null !== e && null != e.key
        ? (z(e.key),
          (r = '' + e.key),
          (n = { '=': '=0', ':': '=2' }),
          '$' +
            r.replace(/[=:]/g, function (e) {
              return n[e];
            }))
        : t.toString(36);
      var r, n;
    }
    function ae(r, n, o, a, i) {
      var u = typeof r;
      ('undefined' !== u && 'boolean' !== u) || (r = null);
      var s,
        c,
        l,
        f = !1;
      if (null === r) f = !0;
      else
        switch (u) {
          case 'string':
          case 'number':
            f = !0;
            break;
          case 'object':
            switch (r.$$typeof) {
              case e:
              case t:
                f = !0;
            }
        }
      if (f) {
        var p = r,
          d = i(p),
          m = '' === a ? '.' + oe(p, 0) : a;
        if (M(d)) {
          var h = '';
          null != m && (h = ne(m) + '/'),
            ae(d, n, h, '', function (e) {
              return e;
            });
        } else
          null != d &&
            (ee(d) &&
              (!d.key || (p && p.key === d.key) || z(d.key),
              (s = d),
              (c =
                o +
                (!d.key || (p && p.key === d.key) ? '' : ne('' + d.key) + '/') +
                m),
              (d = X(s.type, c, s.ref, s._self, s._source, s._owner, s.props))),
            n.push(d));
        return 1;
      }
      var v = 0,
        g = '' === a ? '.' : a + ':';
      if (M(r))
        for (var b = 0; b < r.length; b++)
          v += ae((l = r[b]), n, o, g + oe(l, b), i);
      else {
        var _ = y(r);
        if ('function' == typeof _) {
          var w = r;
          _ === w.entries &&
            (te ||
              O(
                'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
              ),
            (te = !0));
          for (var k, S = _.call(w), C = 0; !(k = S.next()).done; )
            v += ae((l = k.value), n, o, g + oe(l, C++), i);
        } else if ('object' === u) {
          var x = String(r);
          throw new Error(
            'Objects are not valid as a React child (found: ' +
              ('[object Object]' === x
                ? 'object with keys {' + Object.keys(r).join(', ') + '}'
                : x) +
              '). If you meant to render a collection of children, use an array instead.'
          );
        }
      }
      return v;
    }
    function ie(e, t, r) {
      if (null == e) return e;
      var n = [],
        o = 0;
      return (
        ae(e, n, '', '', function (e) {
          return t.call(r, e, o++);
        }),
        n
      );
    }
    var ue;
    function se(e) {
      if (-1 === e._status) {
        var t = (0, e._result)();
        if (
          (t.then(
            function (t) {
              if (0 === e._status || -1 === e._status) {
                var r = e;
                (r._status = 1), (r._result = t);
              }
            },
            function (t) {
              if (0 === e._status || -1 === e._status) {
                var r = e;
                (r._status = 2), (r._result = t);
              }
            }
          ),
          -1 === e._status)
        ) {
          var r = e;
          (r._status = 0), (r._result = t);
        }
      }
      if (1 === e._status) {
        var n = e._result;
        return (
          void 0 === n &&
            S(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
              n
            ),
          'default' in n ||
            S(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
              n
            ),
          n.default
        );
      }
      throw e._result;
    }
    function ce(e) {
      return (
        'string' == typeof e ||
        'function' == typeof e ||
        e === r ||
        e === o ||
        e === n ||
        e === s ||
        e === c ||
        e === p ||
        ('object' == typeof e &&
          null !== e &&
          (e.$$typeof === f ||
            e.$$typeof === l ||
            e.$$typeof === a ||
            e.$$typeof === i ||
            e.$$typeof === u ||
            e.$$typeof === ue ||
            void 0 !== e.getModuleId))
      );
    }
    function le() {
      var e = m.current;
      return (
        null === e &&
          S(
            'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.'
          ),
        e
      );
    }
    ue = Symbol.for('react.module.reference');
    var fe,
      pe,
      de,
      ye,
      me,
      he,
      ve,
      ge = 0;
    function be() {}
    be.__reactDisabledLog = !0;
    var _e,
      we = k.ReactCurrentDispatcher;
    function ke(e, t, r) {
      if (void 0 === _e)
        try {
          throw Error();
        } catch (e) {
          var n = e.stack.trim().match(/\n( *(at )?)/);
          _e = (n && n[1]) || '';
        }
      return '\n' + _e + e;
    }
    var Oe,
      Se = !1,
      Ce = 'function' == typeof WeakMap ? WeakMap : Map;
    function xe(e, t) {
      if (!e || Se) return '';
      var r,
        n = Oe.get(e);
      if (void 0 !== n) return n;
      Se = !0;
      var o,
        a = Error.prepareStackTrace;
      (Error.prepareStackTrace = void 0),
        (o = we.current),
        (we.current = null),
        (function () {
          if (0 === ge) {
            (fe = console.log),
              (pe = console.info),
              (de = console.warn),
              (ye = console.error),
              (me = console.group),
              (he = console.groupCollapsed),
              (ve = console.groupEnd);
            var e = {
              configurable: !0,
              enumerable: !0,
              value: be,
              writable: !0,
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e,
            });
          }
          ge++;
        })();
      try {
        if (t) {
          var i = function () {
            throw Error();
          };
          if (
            (Object.defineProperty(i.prototype, 'props', {
              set: function () {
                throw Error();
              },
            }),
            'object' == typeof Reflect && Reflect.construct)
          ) {
            try {
              Reflect.construct(i, []);
            } catch (e) {
              r = e;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (e) {
              r = e;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (e) {
            r = e;
          }
          e();
        }
      } catch (t) {
        if (t && r && 'string' == typeof t.stack) {
          for (
            var u = t.stack.split('\n'),
              s = r.stack.split('\n'),
              c = u.length - 1,
              l = s.length - 1;
            c >= 1 && l >= 0 && u[c] !== s[l];

          )
            l--;
          for (; c >= 1 && l >= 0; c--, l--)
            if (u[c] !== s[l]) {
              if (1 !== c || 1 !== l)
                do {
                  if ((c--, --l < 0 || u[c] !== s[l])) {
                    var f = '\n' + u[c].replace(' at new ', ' at ');
                    return (
                      e.displayName &&
                        f.includes('<anonymous>') &&
                        (f = f.replace('<anonymous>', e.displayName)),
                      'function' == typeof e && Oe.set(e, f),
                      f
                    );
                  }
                } while (c >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        (Se = !1),
          (we.current = o),
          (function () {
            if (0 == --ge) {
              var e = { configurable: !0, enumerable: !0, writable: !0 };
              Object.defineProperties(console, {
                log: j({}, e, { value: fe }),
                info: j({}, e, { value: pe }),
                warn: j({}, e, { value: de }),
                error: j({}, e, { value: ye }),
                group: j({}, e, { value: me }),
                groupCollapsed: j({}, e, { value: he }),
                groupEnd: j({}, e, { value: ve }),
              });
            }
            ge < 0 &&
              S(
                'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
              );
          })(),
          (Error.prepareStackTrace = a);
      }
      var p = e ? e.displayName || e.name : '',
        d = p ? ke(p) : '';
      return 'function' == typeof e && Oe.set(e, d), d;
    }
    function Re(e, t, r) {
      if (null == e) return '';
      if ('function' == typeof e)
        return xe(
          e,
          (function (e) {
            var t = e.prototype;
            return !(!t || !t.isReactComponent);
          })(e)
        );
      if ('string' == typeof e) return ke(e);
      switch (e) {
        case s:
          return ke('Suspense');
        case c:
          return ke('SuspenseList');
      }
      if ('object' == typeof e)
        switch (e.$$typeof) {
          case u:
            return xe(e.render, !1);
          case l:
            return Re(e.type, t, r);
          case f:
            var n = e,
              o = n._payload,
              a = n._init;
            try {
              return Re(a(o), t, r);
            } catch (e) {}
        }
      return '';
    }
    Oe = new Ce();
    var Ee,
      je = {},
      Pe = k.ReactDebugCurrentFrame;
    function Te(e) {
      if (e) {
        var t = e._owner,
          r = Re(e.type, e._source, t ? t.type : null);
        Pe.setExtraStackFrame(r);
      } else Pe.setExtraStackFrame(null);
    }
    function $e(e) {
      if (e) {
        var t = e._owner;
        w(Re(e.type, e._source, t ? t.type : null));
      } else w(null);
    }
    function De() {
      if (g.current) {
        var e = B(g.current.type);
        if (e) return '\n\nCheck the render method of `' + e + '`.';
      }
      return '';
    }
    Ee = !1;
    var Le = {};
    function Ie(e, t) {
      if (e._store && !e._store.validated && null == e.key) {
        e._store.validated = !0;
        var r = (function (e) {
          var t = De();
          if (!t) {
            var r = 'string' == typeof e ? e : e.displayName || e.name;
            r && (t = '\n\nCheck the top-level render call using <' + r + '>.');
          }
          return t;
        })(t);
        if (!Le[r]) {
          Le[r] = !0;
          var n = '';
          e &&
            e._owner &&
            e._owner !== g.current &&
            (n = ' It was passed a child from ' + B(e._owner.type) + '.'),
            $e(e),
            S(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              r,
              n
            ),
            $e(null);
        }
      }
    }
    function Ne(e, t) {
      if ('object' == typeof e)
        if (M(e))
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            ee(n) && Ie(n, t);
          }
        else if (ee(e)) e._store && (e._store.validated = !0);
        else if (e) {
          var o = y(e);
          if ('function' == typeof o && o !== e.entries)
            for (var a, i = o.call(e); !(a = i.next()).done; )
              ee(a.value) && Ie(a.value, t);
        }
    }
    function Fe(e) {
      var t,
        r = e.type;
      if (null != r && 'string' != typeof r) {
        if ('function' == typeof r) t = r.propTypes;
        else {
          if ('object' != typeof r || (r.$$typeof !== u && r.$$typeof !== l))
            return;
          t = r.propTypes;
        }
        if (t) {
          var n = B(r);
          !(function (e, t, r, n, o) {
            var a = Function.call.bind(W);
            for (var i in e)
              if (a(e, i)) {
                var u = void 0;
                try {
                  if ('function' != typeof e[i]) {
                    var s = Error(
                      (n || 'React class') +
                        ': ' +
                        r +
                        ' type `' +
                        i +
                        '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                        typeof e[i] +
                        '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                    );
                    throw ((s.name = 'Invariant Violation'), s);
                  }
                  u = e[i](
                    t,
                    i,
                    n,
                    r,
                    null,
                    'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                  );
                } catch (e) {
                  u = e;
                }
                !u ||
                  u instanceof Error ||
                  (Te(o),
                  S(
                    '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                    n || 'React class',
                    r,
                    i,
                    typeof u
                  ),
                  Te(null)),
                  u instanceof Error &&
                    !(u.message in je) &&
                    ((je[u.message] = !0),
                    Te(o),
                    S('Failed %s type: %s', r, u.message),
                    Te(null));
              }
          })(t, e.props, 'prop', n, e);
        } else if (void 0 !== r.PropTypes && !Ee) {
          (Ee = !0),
            S(
              'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
              B(r) || 'Unknown'
            );
        }
        'function' != typeof r.getDefaultProps ||
          r.getDefaultProps.isReactClassApproved ||
          S(
            'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
          );
      }
    }
    function Ae(t, n, o) {
      var a,
        i,
        u = ce(t);
      if (!u) {
        var s = '';
        (void 0 === t ||
          ('object' == typeof t &&
            null !== t &&
            0 === Object.keys(t).length)) &&
          (s +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var c,
          l =
            null != (a = n) && void 0 !== (i = a.__source)
              ? '\n\nCheck your code at ' +
                i.fileName.replace(/^.*[\\\/]/, '') +
                ':' +
                i.lineNumber +
                '.'
              : '';
        (s += l || De()),
          null === t
            ? (c = 'null')
            : M(t)
            ? (c = 'array')
            : void 0 !== t && t.$$typeof === e
            ? ((c = '<' + (B(t.type) || 'Unknown') + ' />'),
              (s =
                ' Did you accidentally export a JSX literal instead of a component?'))
            : (c = typeof t),
          S(
            'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            c,
            s
          );
      }
      var f = Q.apply(this, arguments);
      if (null == f) return f;
      if (u) for (var p = 2; p < arguments.length; p++) Ne(arguments[p], t);
      return (
        t === r
          ? (function (e) {
              for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
                var n = t[r];
                if ('children' !== n && 'key' !== n) {
                  $e(e),
                    S(
                      'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                      n
                    ),
                    $e(null);
                  break;
                }
              }
              null !== e.ref &&
                ($e(e),
                S('Invalid attribute `ref` supplied to `React.Fragment`.'),
                $e(null));
            })(f)
          : Fe(f),
        f
      );
    }
    var Me = !1;
    var Ve = !1,
      ze = null;
    var Ue = 0,
      Be = !1;
    function Ye(e) {
      e !== Ue - 1 &&
        S(
          'You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. '
        ),
        (Ue = e);
    }
    function qe(e, t, r) {
      var n = v.current;
      if (null !== n)
        try {
          We(n),
            (function (e) {
              if (null === ze)
                try {
                  var t = ('require' + Math.random()).slice(0, 7),
                    r = module && module[t];
                  ze = r.call(module, 'timers').setImmediate;
                } catch (e) {
                  ze = function (e) {
                    !1 === Ve &&
                      ((Ve = !0),
                      'undefined' == typeof MessageChannel &&
                        S(
                          'This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.'
                        ));
                    var t = new MessageChannel();
                    (t.port1.onmessage = e), t.port2.postMessage(void 0);
                  };
                }
              ze(e);
            })(function () {
              0 === n.length ? ((v.current = null), t(e)) : qe(e, t, r);
            });
        } catch (e) {
          r(e);
        }
      else t(e);
    }
    var He = !1;
    function We(e) {
      if (!He) {
        He = !0;
        var t = 0;
        try {
          for (; t < e.length; t++) {
            var r = e[t];
            do {
              r = r(!0);
            } while (null !== r);
          }
          e.length = 0;
        } catch (r) {
          throw ((e = e.slice(t + 1)), r);
        } finally {
          He = !1;
        }
      }
    }
    var Ge = Ae,
      Ke = function (e, t, r) {
        for (var n = Z.apply(this, arguments), o = 2; o < arguments.length; o++)
          Ne(arguments[o], n.type);
        return Fe(n), n;
      },
      Je = function (e) {
        var t = Ae.bind(null, e);
        return (
          (t.type = e),
          Me ||
            ((Me = !0),
            O(
              'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
            )),
          Object.defineProperty(t, 'type', {
            enumerable: !1,
            get: function () {
              return (
                O(
                  'Factory.type is deprecated. Access the class directly before passing it to createFactory.'
                ),
                Object.defineProperty(this, 'type', { value: e }),
                e
              );
            },
          }),
          t
        );
      },
      Xe = {
        map: ie,
        forEach: function (e, t, r) {
          ie(
            e,
            function () {
              t.apply(this, arguments);
            },
            r
          );
        },
        count: function (e) {
          var t = 0;
          return (
            ie(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            ie(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!ee(e))
            throw new Error(
              'React.Children.only expected to receive a single React element child.'
            );
          return e;
        },
      };
    (exports.Children = Xe),
      (exports.Component = T),
      (exports.Fragment = r),
      (exports.Profiler = o),
      (exports.PureComponent = N),
      (exports.StrictMode = n),
      (exports.Suspense = s),
      (exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = k),
      (exports.cloneElement = Ke),
      (exports.createContext = function (e) {
        var t = {
          $$typeof: i,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        };
        t.Provider = { $$typeof: a, _context: t };
        var r = !1,
          n = !1,
          o = !1,
          u = { $$typeof: i, _context: t };
        return (
          Object.defineProperties(u, {
            Provider: {
              get: function () {
                return (
                  n ||
                    ((n = !0),
                    S(
                      'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?'
                    )),
                  t.Provider
                );
              },
              set: function (e) {
                t.Provider = e;
              },
            },
            _currentValue: {
              get: function () {
                return t._currentValue;
              },
              set: function (e) {
                t._currentValue = e;
              },
            },
            _currentValue2: {
              get: function () {
                return t._currentValue2;
              },
              set: function (e) {
                t._currentValue2 = e;
              },
            },
            _threadCount: {
              get: function () {
                return t._threadCount;
              },
              set: function (e) {
                t._threadCount = e;
              },
            },
            Consumer: {
              get: function () {
                return (
                  r ||
                    ((r = !0),
                    S(
                      'Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
                    )),
                  t.Consumer
                );
              },
            },
            displayName: {
              get: function () {
                return t.displayName;
              },
              set: function (e) {
                o ||
                  (O(
                    "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                    e
                  ),
                  (o = !0));
              },
            },
          }),
          (t.Consumer = u),
          (t._currentRenderer = null),
          (t._currentRenderer2 = null),
          t
        );
      }),
      (exports.createElement = Ge),
      (exports.createFactory = Je),
      (exports.createRef = function () {
        var e = { current: null };
        return Object.seal(e), e;
      }),
      (exports.forwardRef = function (e) {
        null != e && e.$$typeof === l
          ? S(
              'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'
            )
          : 'function' != typeof e
          ? S(
              'forwardRef requires a render function but was given %s.',
              null === e ? 'null' : typeof e
            )
          : 0 !== e.length &&
            2 !== e.length &&
            S(
              'forwardRef render functions accept exactly two parameters: props and ref. %s',
              1 === e.length
                ? 'Did you forget to use the ref parameter?'
                : 'Any additional parameter will be undefined.'
            ),
          null != e &&
            ((null == e.defaultProps && null == e.propTypes) ||
              S(
                'forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
              ));
        var t,
          r = { $$typeof: u, render: e };
        return (
          Object.defineProperty(r, 'displayName', {
            enumerable: !1,
            configurable: !0,
            get: function () {
              return t;
            },
            set: function (r) {
              (t = r), e.name || e.displayName || (e.displayName = r);
            },
          }),
          r
        );
      }),
      (exports.isValidElement = ee),
      (exports.lazy = function (e) {
        var t,
          r,
          n = { $$typeof: f, _payload: { _status: -1, _result: e }, _init: se };
        return (
          Object.defineProperties(n, {
            defaultProps: {
              configurable: !0,
              get: function () {
                return t;
              },
              set: function (e) {
                S(
                  'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
                ),
                  (t = e),
                  Object.defineProperty(n, 'defaultProps', { enumerable: !0 });
              },
            },
            propTypes: {
              configurable: !0,
              get: function () {
                return r;
              },
              set: function (e) {
                S(
                  'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
                ),
                  (r = e),
                  Object.defineProperty(n, 'propTypes', { enumerable: !0 });
              },
            },
          }),
          n
        );
      }),
      (exports.memo = function (e, t) {
        ce(e) ||
          S(
            'memo: The first argument must be a component. Instead received: %s',
            null === e ? 'null' : typeof e
          );
        var r,
          n = { $$typeof: l, type: e, compare: void 0 === t ? null : t };
        return (
          Object.defineProperty(n, 'displayName', {
            enumerable: !1,
            configurable: !0,
            get: function () {
              return r;
            },
            set: function (t) {
              (r = t), e.name || e.displayName || (e.displayName = t);
            },
          }),
          n
        );
      }),
      (exports.startTransition = function (e, t) {
        var r = h.transition;
        h.transition = {};
        var n = h.transition;
        h.transition._updatedFibers = new Set();
        try {
          e();
        } finally {
          if (((h.transition = r), null === r && n._updatedFibers))
            n._updatedFibers.size > 10 &&
              O(
                'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
              ),
              n._updatedFibers.clear();
        }
      }),
      (exports.unstable_act = function (e) {
        var t = Ue;
        Ue++, null === v.current && (v.current = []);
        var r,
          n = v.isBatchingLegacy;
        try {
          if (
            ((v.isBatchingLegacy = !0),
            (r = e()),
            !n && v.didScheduleLegacyUpdate)
          ) {
            var o = v.current;
            null !== o && ((v.didScheduleLegacyUpdate = !1), We(o));
          }
        } catch (e) {
          throw (Ye(t), e);
        } finally {
          v.isBatchingLegacy = n;
        }
        if (null !== r && 'object' == typeof r && 'function' == typeof r.then) {
          var a = r,
            i = !1,
            u = {
              then: function (e, r) {
                (i = !0),
                  a.then(
                    function (n) {
                      Ye(t), 0 === Ue ? qe(n, e, r) : e(n);
                    },
                    function (e) {
                      Ye(t), r(e);
                    }
                  );
              },
            };
          return (
            Be ||
              'undefined' == typeof Promise ||
              Promise.resolve()
                .then(function () {})
                .then(function () {
                  i ||
                    ((Be = !0),
                    S(
                      'You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);'
                    ));
                }),
            u
          );
        }
        var s = r;
        if ((Ye(t), 0 === Ue)) {
          var c = v.current;
          return (
            null !== c && (We(c), (v.current = null)),
            {
              then: function (e, t) {
                null === v.current ? ((v.current = []), qe(s, e, t)) : e(s);
              },
            }
          );
        }
        return {
          then: function (e, t) {
            e(s);
          },
        };
      }),
      (exports.useCallback = function (e, t) {
        return le().useCallback(e, t);
      }),
      (exports.useContext = function (e) {
        var t = le();
        if (void 0 !== e._context) {
          var r = e._context;
          r.Consumer === e
            ? S(
                'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'
              )
            : r.Provider === e &&
              S(
                'Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?'
              );
        }
        return t.useContext(e);
      }),
      (exports.useDebugValue = function (e, t) {
        return le().useDebugValue(e, t);
      }),
      (exports.useDeferredValue = function (e) {
        return le().useDeferredValue(e);
      }),
      (exports.useEffect = function (e, t) {
        return le().useEffect(e, t);
      }),
      (exports.useId = function () {
        return le().useId();
      }),
      (exports.useImperativeHandle = function (e, t, r) {
        return le().useImperativeHandle(e, t, r);
      }),
      (exports.useInsertionEffect = function (e, t) {
        return le().useInsertionEffect(e, t);
      }),
      (exports.useLayoutEffect = function (e, t) {
        return le().useLayoutEffect(e, t);
      }),
      (exports.useMemo = function (e, t) {
        return le().useMemo(e, t);
      }),
      (exports.useReducer = function (e, t, r) {
        return le().useReducer(e, t, r);
      }),
      (exports.useRef = function (e) {
        return le().useRef(e);
      }),
      (exports.useState = function (e) {
        return le().useState(e);
      }),
      (exports.useSyncExternalStore = function (e, t, r) {
        return le().useSyncExternalStore(e, t, r);
      }),
      (exports.useTransition = function () {
        return le().useTransition();
      }),
      (exports.version = '18.3.0'),
      'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        'function' ==
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
