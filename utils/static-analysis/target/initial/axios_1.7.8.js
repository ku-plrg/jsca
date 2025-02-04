(function (global, factory) {
  Symbol('JSCA_1_3');
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      (global.axios = factory()));
})(this, function () {
  Symbol('JSCA_3_3263');
  ('use strict');
  function _AsyncGenerator(e) {
    Symbol('JSCA_5_55');
    var r, t;
    function resume(r, t) {
      Symbol('JSCA_7_23');
      try {
        var n = e[r](t),
          o = n.value,
          u = o instanceof _OverloadYield;
        Promise.resolve(u ? o.v : o).then(
          function (t) {
            Symbol('JSCA_10_17');
            if (u) {
              var i = 'return' === r ? 'return' : 'next';
              if (!o.k || t.done) return resume(i, t);
              t = e[i](t).value;
            }
            settle(n.done ? 'return' : 'normal', t);
          },
          function (e) {
            Symbol('JSCA_17_19');
            resume('throw', e);
          }
        );
      } catch (e) {
        settle('throw', e);
      }
    }
    function settle(e, n) {
      Symbol('JSCA_24_42');
      switch (e) {
        case 'return':
          r.resolve({
            value: n,
            done: !0,
          });
          break;
        case 'throw':
          r.reject(n);
          break;
        default:
          r.resolve({
            value: n,
            done: !1,
          });
      }
      (r = r.next) ? resume(r.key, r.arg) : (t = null);
    }
    (this._invoke = function (e, n) {
      Symbol('JSCA_43_54');
      return new Promise(function (o, u) {
        Symbol('JSCA_44_53');
        var i = {
          key: e,
          arg: n,
          resolve: o,
          reject: u,
          next: null,
        };
        t ? (t = t.next = i) : ((r = t = i), resume(e, n));
      });
    }),
      'function' != typeof e.return && (this.return = void 0);
  }
  (_AsyncGenerator.prototype[
    ('function' == typeof Symbol && Symbol.asyncIterator) || '@@asyncIterator'
  ] = function () {
    Symbol('JSCA_56_58');
    return this;
  }),
    (_AsyncGenerator.prototype.next = function (e) {
      Symbol('JSCA_58_60');
      return this._invoke('next', e);
    }),
    (_AsyncGenerator.prototype.throw = function (e) {
      Symbol('JSCA_60_62');
      return this._invoke('throw', e);
    }),
    (_AsyncGenerator.prototype.return = function (e) {
      Symbol('JSCA_62_64');
      return this._invoke('return', e);
    });
  function _OverloadYield(t, e) {
    Symbol('JSCA_65_67');
    (this.v = t), (this.k = e);
  }
  function _asyncGeneratorDelegate(t) {
    Symbol('JSCA_68_88');
    var e = {},
      n = !1;
    function pump(e, r) {
      Symbol('JSCA_70_77');
      return (
        (n = !0),
        (r = new Promise(function (n) {
          Symbol('JSCA_71_73');
          n(t[e](r));
        })),
        {
          done: !1,
          value: new _OverloadYield(r, 1),
        }
      );
    }
    return (
      (e[('undefined' != typeof Symbol && Symbol.iterator) || '@@iterator'] =
        function () {
          Symbol('JSCA_78_80');
          return this;
        }),
      (e.next = function (t) {
        Symbol('JSCA_80_82');
        return n ? ((n = !1), t) : pump('next', t);
      }),
      'function' == typeof t.throw &&
        (e.throw = function (t) {
          Symbol('JSCA_82_85');
          if (n) throw ((n = !1), t);
          return pump('throw', t);
        }),
      'function' == typeof t.return &&
        (e.return = function (t) {
          Symbol('JSCA_85_87');
          return n ? ((n = !1), t) : pump('return', t);
        }),
      e
    );
  }
  function _asyncIterator(r) {
    Symbol('JSCA_89_97');
    var n,
      t,
      o,
      e = 2;
    for (
      'undefined' != typeof Symbol &&
      ((t = Symbol.asyncIterator), (o = Symbol.iterator));
      e--;

    ) {
      if (t && null != (n = r[t])) return n.call(r);
      if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
      (t = '@@asyncIterator'), (o = '@@iterator');
    }
    throw new TypeError('Object is not async iterable');
  }
  function AsyncFromSyncIterator(r) {
    Symbol('JSCA_98_129');
    function AsyncFromSyncIteratorContinuation(r) {
      Symbol('JSCA_99_108');
      if (Object(r) !== r)
        return Promise.reject(new TypeError(r + ' is not an object.'));
      var n = r.done;
      return Promise.resolve(r.value).then(function (r) {
        Symbol('JSCA_102_107');
        return {
          value: r,
          done: n,
        };
      });
    }
    return (
      (AsyncFromSyncIterator = function (r) {
        Symbol('JSCA_109_111');
        (this.s = r), (this.n = r.next);
      }),
      (AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function () {
          Symbol('JSCA_114_116');
          return AsyncFromSyncIteratorContinuation(
            this.n.apply(this.s, arguments)
          );
        },
        return: function (r) {
          Symbol('JSCA_117_123');
          var n = this.s.return;
          return void 0 === n
            ? Promise.resolve({
                value: r,
                done: !0,
              })
            : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
        },
        throw: function (r) {
          Symbol('JSCA_124_127');
          var n = this.s.return;
          return void 0 === n
            ? Promise.reject(r)
            : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
        },
      }),
      new AsyncFromSyncIterator(r)
    );
  }
  function _awaitAsyncGenerator(e) {
    Symbol('JSCA_130_132');
    return new _OverloadYield(e, 0);
  }
  function _iterableToArrayLimit(r, l) {
    Symbol('JSCA_133_153');
    var t =
      null == r
        ? null
        : ('undefined' != typeof Symbol && r[Symbol.iterator]) ||
          r['@@iterator'];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (((i = (t = t.call(r)).next), 0 === l)) {
          if (Object(t) !== t) return;
          f = !1;
        } else
          for (
            ;
            !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
            f = !0
          );
      } catch (r) {
        (o = !0), (n = r);
      } finally {
        try {
          if (!f && null != t.return && ((u = t.return()), Object(u) !== u))
            return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    Symbol('JSCA_154_163');
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r &&
        (o = o.filter(function (r) {
          Symbol('JSCA_158_160');
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })),
        t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    Symbol('JSCA_164_174');
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2
        ? ownKeys(Object(t), !0).forEach(function (r) {
            Symbol('JSCA_167_169');
            _defineProperty(e, r, t[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys(Object(t)).forEach(function (r) {
            Symbol('JSCA_169_171');
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
          });
    }
    return e;
  }
  function _regeneratorRuntime() {
    Symbol('JSCA_175_454');
    _regeneratorRuntime = function () {
      Symbol('JSCA_176_178');
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (t, e, r) {
          Symbol('JSCA_179_181');
          t[e] = r.value;
        },
      i = 'function' == typeof Symbol ? Symbol : {},
      a = i.iterator || '@@iterator',
      c = i.asyncIterator || '@@asyncIterator',
      u = i.toStringTag || '@@toStringTag';
    function define(t, e, r) {
      Symbol('JSCA_182_189');
      return (
        Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        t[e]
      );
    }
    try {
      define({}, '');
    } catch (t) {
      define = function (t, e, r) {
        Symbol('JSCA_193_195');
        return (t[e] = r);
      };
    }
    function wrap(t, e, r, n) {
      Symbol('JSCA_197_202');
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return (
        o(a, '_invoke', {
          value: makeInvokeMethod(t, r, c),
        }),
        a
      );
    }
    function tryCatch(t, e, r) {
      Symbol('JSCA_203_215');
      try {
        return {
          type: 'normal',
          arg: t.call(e, r),
        };
      } catch (t) {
        return {
          type: 'throw',
          arg: t,
        };
      }
    }
    e.wrap = wrap;
    var h = 'suspendedStart',
      l = 'suspendedYield',
      f = 'executing',
      s = 'completed',
      y = {};
    function Generator() {
      Symbol('JSCA_218_218');
    }
    function GeneratorFunction() {
      Symbol('JSCA_219_219');
    }
    function GeneratorFunctionPrototype() {
      Symbol('JSCA_220_220');
    }
    var p = {};
    define(p, a, function () {
      Symbol('JSCA_222_224');
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g =
      (GeneratorFunctionPrototype.prototype =
      Generator.prototype =
        Object.create(p));
    function defineIteratorMethods(t) {
      Symbol('JSCA_228_234');
      ['next', 'throw', 'return'].forEach(function (e) {
        Symbol('JSCA_229_233');
        define(t, e, function (t) {
          Symbol('JSCA_230_232');
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      Symbol('JSCA_235_263');
      function invoke(r, o, i, a) {
        Symbol('JSCA_236_251');
        var c = tryCatch(t[r], t, o);
        if ('throw' !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && 'object' == typeof h && n.call(h, '__await')
            ? e.resolve(h.__await).then(
                function (t) {
                  Symbol('JSCA_240_242');
                  invoke('next', t, i, a);
                },
                function (t) {
                  Symbol('JSCA_242_244');
                  invoke('throw', t, i, a);
                }
              )
            : e.resolve(h).then(
                function (t) {
                  Symbol('JSCA_244_246');
                  (u.value = t), i(u);
                },
                function (t) {
                  Symbol('JSCA_246_248');
                  return invoke('throw', t, i, a);
                }
              );
        }
        a(c.arg);
      }
      var r;
      o(this, '_invoke', {
        value: function (t, n) {
          Symbol('JSCA_254_261');
          function callInvokeWithMethodAndArg() {
            Symbol('JSCA_255_259');
            return new e(function (e, r) {
              Symbol('JSCA_256_258');
              invoke(t, n, e, r);
            });
          }
          return (r = r
            ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
            : callInvokeWithMethodAndArg());
        },
      });
    }
    function makeInvokeMethod(e, r, n) {
      Symbol('JSCA_264_300');
      var o = h;
      return function (i, a) {
        Symbol('JSCA_266_299');
        if (o === f) throw new Error('Generator is already running');
        if (o === s) {
          if ('throw' === i) throw a;
          return {
            value: t,
            done: !0,
          };
        }
        for (n.method = i, n.arg = a; ; ) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg;
          else if ('throw' === n.method) {
            if (o === h) throw ((o = s), n.arg);
            n.dispatchException(n.arg);
          } else 'return' === n.method && n.abrupt('return', n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ('normal' === p.type) {
            if (((o = n.done ? s : l), p.arg === y)) continue;
            return {
              value: p.arg,
              done: n.done,
            };
          }
          'throw' === p.type &&
            ((o = s), (n.method = 'throw'), (n.arg = p.arg));
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      Symbol('JSCA_301_308');
      var n = r.method,
        o = e.iterator[n];
      if (o === t)
        return (
          (r.delegate = null),
          ('throw' === n &&
            e.iterator.return &&
            ((r.method = 'return'),
            (r.arg = t),
            maybeInvokeDelegate(e, r),
            'throw' === r.method)) ||
            ('return' !== n &&
              ((r.method = 'throw'),
              (r.arg = new TypeError(
                "The iterator does not provide a '" + n + "' method"
              )))),
          y
        );
      var i = tryCatch(o, e.iterator, r.arg);
      if ('throw' === i.type)
        return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
      var a = i.arg;
      return a
        ? a.done
          ? ((r[e.resultName] = a.value),
            (r.next = e.nextLoc),
            'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
            (r.delegate = null),
            y)
          : a
        : ((r.method = 'throw'),
          (r.arg = new TypeError('iterator result is not an object')),
          (r.delegate = null),
          y);
    }
    function pushTryEntry(t) {
      Symbol('JSCA_309_314');
      var e = {
        tryLoc: t[0],
      };
      1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      Symbol('JSCA_315_318');
      var e = t.completion || {};
      (e.type = 'normal'), delete e.arg, (t.completion = e);
    }
    function Context(t) {
      Symbol('JSCA_319_323');
      (this.tryEntries = [
        {
          tryLoc: 'root',
        },
      ]),
        t.forEach(pushTryEntry, this),
        this.reset(!0);
    }
    function values(e) {
      Symbol('JSCA_324_338');
      if (e || '' === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ('function' == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              Symbol('JSCA_330_333');
              for (; ++o < e.length; )
                if (n.call(e, o))
                  return (next.value = e[o]), (next.done = !1), next;
              return (next.value = t), (next.done = !0), next;
            };
          return (i.next = i);
        }
      }
      throw new TypeError(typeof e + ' is not iterable');
    }
    return (
      (GeneratorFunction.prototype = GeneratorFunctionPrototype),
      o(g, 'constructor', {
        value: GeneratorFunctionPrototype,
        configurable: !0,
      }),
      o(GeneratorFunctionPrototype, 'constructor', {
        value: GeneratorFunction,
        configurable: !0,
      }),
      (GeneratorFunction.displayName = define(
        GeneratorFunctionPrototype,
        u,
        'GeneratorFunction'
      )),
      (e.isGeneratorFunction = function (t) {
        Symbol('JSCA_345_348');
        var e = 'function' == typeof t && t.constructor;
        return (
          !!e &&
          (e === GeneratorFunction ||
            'GeneratorFunction' === (e.displayName || e.name))
        );
      }),
      (e.mark = function (t) {
        Symbol('JSCA_348_350');
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
            : ((t.__proto__ = GeneratorFunctionPrototype),
              define(t, u, 'GeneratorFunction')),
          (t.prototype = Object.create(g)),
          t
        );
      }),
      (e.awrap = function (t) {
        Symbol('JSCA_350_354');
        return {
          __await: t,
        };
      }),
      defineIteratorMethods(AsyncIterator.prototype),
      define(AsyncIterator.prototype, c, function () {
        Symbol('JSCA_354_356');
        return this;
      }),
      (e.AsyncIterator = AsyncIterator),
      (e.async = function (t, r, n, o, i) {
        Symbol('JSCA_356_362');
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r)
          ? a
          : a.next().then(function (t) {
              Symbol('JSCA_359_361');
              return t.done ? t.value : a.next();
            });
      }),
      defineIteratorMethods(g),
      define(g, u, 'Generator'),
      define(g, a, function () {
        Symbol('JSCA_362_364');
        return this;
      }),
      define(g, 'toString', function () {
        Symbol('JSCA_364_366');
        return '[object Generator]';
      }),
      (e.keys = function (t) {
        Symbol('JSCA_366_376');
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return (
          r.reverse(),
          function next() {
            Symbol('JSCA_369_375');
            for (; r.length; ) {
              var t = r.pop();
              if (t in e) return (next.value = t), (next.done = !1), next;
            }
            return (next.done = !0), next;
          }
        );
      }),
      (e.values = values),
      (Context.prototype = {
        constructor: Context,
        reset: function (e) {
          Symbol('JSCA_378_380');
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(resetTryEntry),
            !e)
          )
            for (var r in this)
              't' === r.charAt(0) &&
                n.call(this, r) &&
                !isNaN(+r.slice(1)) &&
                (this[r] = t);
        },
        stop: function () {
          Symbol('JSCA_381_386');
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ('throw' === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          Symbol('JSCA_387_409');
          if (this.done) throw e;
          var r = this;
          function handle(n, o) {
            Symbol('JSCA_390_392');
            return (
              (a.type = 'throw'),
              (a.arg = e),
              (r.next = n),
              o && ((r.method = 'next'), (r.arg = t)),
              !!o
            );
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o],
              a = i.completion;
            if ('root' === i.tryLoc) return handle('end');
            if (i.tryLoc <= this.prev) {
              var c = n.call(i, 'catchLoc'),
                u = n.call(i, 'finallyLoc');
              if (c && u) {
                if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
              } else if (c) {
                if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              } else {
                if (!u)
                  throw new Error('try statement without catch or finally');
                if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          Symbol('JSCA_410_421');
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (
              o.tryLoc <= this.prev &&
              n.call(o, 'finallyLoc') &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break;
            }
          }
          i &&
            ('break' === t || 'continue' === t) &&
            i.tryLoc <= e &&
            e <= i.finallyLoc &&
            (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = t),
            (a.arg = e),
            i
              ? ((this.method = 'next'), (this.next = i.finallyLoc), y)
              : this.complete(a)
          );
        },
        complete: function (t, e) {
          Symbol('JSCA_422_425');
          if ('throw' === t.type) throw t.arg;
          return (
            'break' === t.type || 'continue' === t.type
              ? (this.next = t.arg)
              : 'return' === t.type
              ? ((this.rval = this.arg = t.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : 'normal' === t.type && e && (this.next = e),
            y
          );
        },
        finish: function (t) {
          Symbol('JSCA_426_431');
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t)
              return (
                this.complete(r.completion, r.afterLoc), resetTryEntry(r), y
              );
          }
        },
        catch: function (t) {
          Symbol('JSCA_432_445');
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ('throw' === n.type) {
                var o = n.arg;
                resetTryEntry(r);
              }
              return o;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (e, r, n) {
          Symbol('JSCA_446_452');
          return (
            (this.delegate = {
              iterator: values(e),
              resultName: r,
              nextLoc: n,
            }),
            'next' === this.method && (this.arg = t),
            y
          );
        },
      }),
      e
    );
  }
  function _toPrimitive(t, r) {
    Symbol('JSCA_455_464');
    if ('object' != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || 'default');
      if ('object' != typeof i) return i;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    Symbol('JSCA_465_468');
    var i = _toPrimitive(t, 'string');
    return 'symbol' == typeof i ? i : String(i);
  }
  function _typeof(o) {
    Symbol('JSCA_469_476');
    ('@babel/helpers - typeof');
    return (
      (_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (o) {
              Symbol('JSCA_471_473');
              return typeof o;
            }
          : function (o) {
              Symbol('JSCA_473_475');
              return o &&
                'function' == typeof Symbol &&
                o.constructor === Symbol &&
                o !== Symbol.prototype
                ? 'symbol'
                : typeof o;
            }),
      _typeof(o)
    );
  }
  function _wrapAsyncGenerator(fn) {
    Symbol('JSCA_477_481');
    return function () {
      Symbol('JSCA_478_480');
      return new _AsyncGenerator(fn.apply(this, arguments));
    };
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    Symbol('JSCA_482_495');
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    Symbol('JSCA_496_510');
    return function () {
      Symbol('JSCA_497_509');
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        Symbol('JSCA_499_508');
        var gen = fn.apply(self, args);
        function _next(value) {
          Symbol('JSCA_501_503');
          asyncGeneratorStep(
            gen,
            resolve,
            reject,
            _next,
            _throw,
            'next',
            value
          );
        }
        function _throw(err) {
          Symbol('JSCA_504_506');
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    Symbol('JSCA_511_515');
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }
  function _defineProperties(target, props) {
    Symbol('JSCA_516_524');
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    Symbol('JSCA_525_532');
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', {
      writable: false,
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    Symbol('JSCA_533_546');
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i) {
    Symbol('JSCA_547_549');
    return (
      _arrayWithHoles(arr) ||
      _iterableToArrayLimit(arr, i) ||
      _unsupportedIterableToArray(arr, i) ||
      _nonIterableRest()
    );
  }
  function _toArray(arr) {
    Symbol('JSCA_550_552');
    return (
      _arrayWithHoles(arr) ||
      _iterableToArray(arr) ||
      _unsupportedIterableToArray(arr) ||
      _nonIterableRest()
    );
  }
  function _toConsumableArray(arr) {
    Symbol('JSCA_553_555');
    return (
      _arrayWithoutHoles(arr) ||
      _iterableToArray(arr) ||
      _unsupportedIterableToArray(arr) ||
      _nonIterableSpread()
    );
  }
  function _arrayWithoutHoles(arr) {
    Symbol('JSCA_556_558');
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    Symbol('JSCA_559_561');
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    Symbol('JSCA_562_564');
    if (
      (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
      iter['@@iterator'] != null
    )
      return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    Symbol('JSCA_565_572');
    if (!o) return;
    if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === 'Object' && o.constructor) n = o.constructor.name;
    if (n === 'Map' || n === 'Set') return Array.from(o);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    Symbol('JSCA_573_577');
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    Symbol('JSCA_578_580');
    throw new TypeError(
      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  function _nonIterableRest() {
    Symbol('JSCA_581_583');
    throw new TypeError(
      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    Symbol('JSCA_584_632');
    var it =
      (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
    if (!it) {
      if (
        Array.isArray(o) ||
        (it = _unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === 'number')
      ) {
        if (it) o = it;
        var i = 0;
        var F = function () {
          Symbol('JSCA_590_590');
        };
        return {
          s: F,
          n: function () {
            Symbol('JSCA_593_601');
            if (i >= o.length)
              return {
                done: true,
              };
            return {
              done: false,
              value: o[i++],
            };
          },
          e: function (e) {
            Symbol('JSCA_602_604');
            throw e;
          },
          f: F,
        };
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        Symbol('JSCA_612_614');
        it = it.call(o);
      },
      n: function () {
        Symbol('JSCA_615_619');
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        Symbol('JSCA_620_623');
        didErr = true;
        err = e;
      },
      f: function () {
        Symbol('JSCA_624_630');
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      },
    };
  }
  function bind(fn, thisArg) {
    Symbol('JSCA_633_637');
    return function wrap() {
      Symbol('JSCA_634_636');
      return fn.apply(thisArg, arguments);
    };
  }
  var toString = Object.prototype.toString;
  var getPrototypeOf = Object.getPrototypeOf;
  var kindOf = (function (cache) {
    Symbol('JSCA_640_645');
    return function (thing) {
      Symbol('JSCA_641_644');
      var str = toString.call(thing);
      return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    };
  })(Object.create(null));
  var kindOfTest = function kindOfTest(type) {
    Symbol('JSCA_646_651');
    type = type.toLowerCase();
    return function (thing) {
      Symbol('JSCA_648_650');
      return kindOf(thing) === type;
    };
  };
  var typeOfTest = function typeOfTest(type) {
    Symbol('JSCA_652_656');
    return function (thing) {
      Symbol('JSCA_653_655');
      return _typeof(thing) === type;
    };
  };
  var isArray = Array.isArray;
  var isUndefined = typeOfTest('undefined');
  function isBuffer(val) {
    Symbol('JSCA_659_661');
    return (
      val !== null &&
      !isUndefined(val) &&
      val.constructor !== null &&
      !isUndefined(val.constructor) &&
      isFunction(val.constructor.isBuffer) &&
      val.constructor.isBuffer(val)
    );
  }
  var isArrayBuffer = kindOfTest('ArrayBuffer');
  function isArrayBufferView(val) {
    Symbol('JSCA_663_671');
    var result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  var isString = typeOfTest('string');
  var isFunction = typeOfTest('function');
  var isNumber = typeOfTest('number');
  var isObject = function isObject(thing) {
    Symbol('JSCA_675_677');
    return thing !== null && _typeof(thing) === 'object';
  };
  var isBoolean = function isBoolean(thing) {
    Symbol('JSCA_678_680');
    return thing === true || thing === false;
  };
  var isPlainObject = function isPlainObject(val) {
    Symbol('JSCA_681_687');
    if (kindOf(val) !== 'object') {
      return false;
    }
    var prototype = getPrototypeOf(val);
    return (
      (prototype === null ||
        prototype === Object.prototype ||
        Object.getPrototypeOf(prototype) === null) &&
      !(Symbol.toStringTag in val) &&
      !(Symbol.iterator in val)
    );
  };
  var isDate = kindOfTest('Date');
  var isFile = kindOfTest('File');
  var isBlob = kindOfTest('Blob');
  var isFileList = kindOfTest('FileList');
  var isStream = function isStream(val) {
    Symbol('JSCA_692_694');
    return isObject(val) && isFunction(val.pipe);
  };
  var isFormData = function isFormData(thing) {
    Symbol('JSCA_695_698');
    var kind;
    return (
      thing &&
      ((typeof FormData === 'function' && thing instanceof FormData) ||
        (isFunction(thing.append) &&
          ((kind = kindOf(thing)) === 'formdata' ||
            (kind === 'object' &&
              isFunction(thing.toString) &&
              thing.toString() === '[object FormData]'))))
    );
  };
  var isURLSearchParams = kindOfTest('URLSearchParams');
  var _map = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
      kindOfTest
    ),
    _map2 = _slicedToArray(_map, 4),
    isReadableStream = _map2[0],
    isRequest = _map2[1],
    isResponse = _map2[2],
    isHeaders = _map2[3];
  var trim = function trim(str) {
    Symbol('JSCA_701_703');
    return str.trim
      ? str.trim()
      : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
  function forEach(obj, fn) {
    Symbol('JSCA_704_727');
    var _ref =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$allOwnKeys = _ref.allOwnKeys,
      allOwnKeys = _ref$allOwnKeys === void 0 ? false : _ref$allOwnKeys;
    if (obj === null || typeof obj === 'undefined') {
      return;
    }
    var i;
    var l;
    if (_typeof(obj) !== 'object') {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      var keys = allOwnKeys
        ? Object.getOwnPropertyNames(obj)
        : Object.keys(obj);
      var len = keys.length;
      var key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    Symbol('JSCA_728_740');
    key = key.toLowerCase();
    var keys = Object.keys(obj);
    var i = keys.length;
    var _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  var _global = (function () {
    Symbol('JSCA_741_744');
    if (typeof globalThis !== 'undefined') return globalThis;
    return typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : global;
  })();
  var isContextDefined = function isContextDefined(context) {
    Symbol('JSCA_745_747');
    return !isUndefined(context) && context !== _global;
  };
  function merge() {
    Symbol('JSCA_748_767');
    var _ref2 = (isContextDefined(this) && this) || {},
      caseless = _ref2.caseless;
    var result = {};
    var assignValue = function assignValue(val, key) {
      Symbol('JSCA_751_762');
      var targetKey = (caseless && findKey(result, key)) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (var i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  var extend = function extend(a, b, thisArg) {
    Symbol('JSCA_768_780');
    var _ref3 =
        arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      allOwnKeys = _ref3.allOwnKeys;
    forEach(
      b,
      function (val, key) {
        Symbol('JSCA_770_776');
        if (thisArg && isFunction(val)) {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      },
      {
        allOwnKeys: allOwnKeys,
      }
    );
    return a;
  };
  var stripBOM = function stripBOM(content) {
    Symbol('JSCA_781_786');
    if (content.charCodeAt(0) === 0xfeff) {
      content = content.slice(1);
    }
    return content;
  };
  var inherits = function inherits(
    constructor,
    superConstructor,
    props,
    descriptors
  ) {
    Symbol('JSCA_787_794');
    constructor.prototype = Object.create(
      superConstructor.prototype,
      descriptors
    );
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, 'super', {
      value: superConstructor.prototype,
    });
    props && Object.assign(constructor.prototype, props);
  };
  var toFlatObject = function toFlatObject(
    sourceObj,
    destObj,
    filter,
    propFilter
  ) {
    Symbol('JSCA_795_815');
    var props;
    var i;
    var prop;
    var merged = {};
    destObj = destObj || {};
    if (sourceObj == null) return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if (
          (!propFilter || propFilter(prop, sourceObj, destObj)) &&
          !merged[prop]
        ) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter !== false && getPrototypeOf(sourceObj);
    } while (
      sourceObj &&
      (!filter || filter(sourceObj, destObj)) &&
      sourceObj !== Object.prototype
    );
    return destObj;
  };
  var endsWith = function endsWith(str, searchString, position) {
    Symbol('JSCA_816_824');
    str = String(str);
    if (position === undefined || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    var lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  var toArray = function toArray(thing) {
    Symbol('JSCA_825_835');
    if (!thing) return null;
    if (isArray(thing)) return thing;
    var i = thing.length;
    if (!isNumber(i)) return null;
    var arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };
  var isTypedArray = (function (TypedArray) {
    Symbol('JSCA_836_840');
    return function (thing) {
      Symbol('JSCA_837_839');
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));
  var forEachEntry = function forEachEntry(obj, fn) {
    Symbol('JSCA_841_849');
    var generator = obj && obj[Symbol.iterator];
    var iterator = generator.call(obj);
    var result;
    while ((result = iterator.next()) && !result.done) {
      var pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  var matchAll = function matchAll(regExp, str) {
    Symbol('JSCA_850_857');
    var matches;
    var arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  var isHTMLForm = kindOfTest('HTMLFormElement');
  var toCamelCase = function toCamelCase(str) {
    Symbol('JSCA_859_863');
    return str
      .toLowerCase()
      .replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        Symbol('JSCA_860_862');
        return p1.toUpperCase() + p2;
      });
  };
  var hasOwnProperty = (function (_ref4) {
    Symbol('JSCA_864_869');
    var hasOwnProperty = _ref4.hasOwnProperty;
    return function (obj, prop) {
      Symbol('JSCA_866_868');
      return hasOwnProperty.call(obj, prop);
    };
  })(Object.prototype);
  var isRegExp = kindOfTest('RegExp');
  var reduceDescriptors = function reduceDescriptors(obj, reducer) {
    Symbol('JSCA_871_881');
    var descriptors = Object.getOwnPropertyDescriptors(obj);
    var reducedDescriptors = {};
    forEach(descriptors, function (descriptor, name) {
      Symbol('JSCA_874_879');
      var ret;
      if ((ret = reducer(descriptor, name, obj)) !== false) {
        reducedDescriptors[name] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  var freezeMethods = function freezeMethods(obj) {
    Symbol('JSCA_882_900');
    reduceDescriptors(obj, function (descriptor, name) {
      Symbol('JSCA_883_899');
      if (
        isFunction(obj) &&
        ['arguments', 'caller', 'callee'].indexOf(name) !== -1
      ) {
        return false;
      }
      var value = obj[name];
      if (!isFunction(value)) return;
      descriptor.enumerable = false;
      if ('writable' in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = function () {
          Symbol('JSCA_895_897');
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  var toObjectSet = function toObjectSet(arrayOrString, delimiter) {
    Symbol('JSCA_901_910');
    var obj = {};
    var define = function define(arr) {
      Symbol('JSCA_903_907');
      arr.forEach(function (value) {
        Symbol('JSCA_904_906');
        obj[value] = true;
      });
    };
    isArray(arrayOrString)
      ? define(arrayOrString)
      : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop = function noop() {
    Symbol('JSCA_911_911');
  };
  var toFiniteNumber = function toFiniteNumber(value, defaultValue) {
    Symbol('JSCA_912_914');
    return value != null && Number.isFinite((value = +value))
      ? value
      : defaultValue;
  };
  var ALPHA = 'abcdefghijklmnopqrstuvwxyz';
  var DIGIT = '0123456789';
  var ALPHABET = {
    DIGIT: DIGIT,
    ALPHA: ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT,
  };
  var generateString = function generateString() {
    Symbol('JSCA_922_931');
    var size =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
    var alphabet =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : ALPHABET.ALPHA_DIGIT;
    var str = '';
    var length = alphabet.length;
    while (size--) {
      str += alphabet[(Math.random() * length) | 0];
    }
    return str;
  };
  function isSpecCompliantForm(thing) {
    Symbol('JSCA_932_934');
    return !!(
      thing &&
      isFunction(thing.append) &&
      thing[Symbol.toStringTag] === 'FormData' &&
      thing[Symbol.iterator]
    );
  }
  var toJSONObject = function toJSONObject(obj) {
    Symbol('JSCA_935_956');
    var stack = new Array(10);
    var visit = function visit(source, i) {
      Symbol('JSCA_937_954');
      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!('toJSON' in source)) {
          stack[i] = source;
          var target = isArray(source) ? [] : {};
          forEach(source, function (value, key) {
            Symbol('JSCA_945_948');
            var reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = undefined;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  var isAsyncFn = kindOfTest('AsyncFunction');
  var isThenable = function isThenable(thing) {
    Symbol('JSCA_958_960');
    return (
      thing &&
      (isObject(thing) || isFunction(thing)) &&
      isFunction(thing.then) &&
      isFunction(thing['catch'])
    );
  };
  var _setImmediate = (function (setImmediateSupported, postMessageSupported) {
    Symbol('JSCA_961_979');
    if (setImmediateSupported) {
      return setImmediate;
    }
    return postMessageSupported
      ? (function (token, callbacks) {
          Symbol('JSCA_965_976');
          _global.addEventListener(
            'message',
            function (_ref5) {
              Symbol('JSCA_966_971');
              var source = _ref5.source,
                data = _ref5.data;
              if (source === _global && data === token) {
                callbacks.length && callbacks.shift()();
              }
            },
            false
          );
          return function (cb) {
            Symbol('JSCA_972_975');
            callbacks.push(cb);
            _global.postMessage(token, '*');
          };
        })('axios@'.concat(Math.random()), [])
      : function (cb) {
          Symbol('JSCA_976_978');
          return setTimeout(cb);
        };
  })(typeof setImmediate === 'function', isFunction(_global.postMessage));
  var asap =
    typeof queueMicrotask !== 'undefined'
      ? queueMicrotask.bind(_global)
      : (typeof process !== 'undefined' && process.nextTick) || _setImmediate;
  var utils$1 = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isBoolean: isBoolean,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isReadableStream: isReadableStream,
    isRequest: isRequest,
    isResponse: isResponse,
    isHeaders: isHeaders,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isRegExp: isRegExp,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isTypedArray: isTypedArray,
    isFileList: isFileList,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM,
    inherits: inherits,
    toFlatObject: toFlatObject,
    kindOf: kindOf,
    kindOfTest: kindOfTest,
    endsWith: endsWith,
    toArray: toArray,
    forEachEntry: forEachEntry,
    matchAll: matchAll,
    isHTMLForm: isHTMLForm,
    hasOwnProperty: hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors: reduceDescriptors,
    freezeMethods: freezeMethods,
    toObjectSet: toObjectSet,
    toCamelCase: toCamelCase,
    noop: noop,
    toFiniteNumber: toFiniteNumber,
    findKey: findKey,
    global: _global,
    isContextDefined: isContextDefined,
    ALPHABET: ALPHABET,
    generateString: generateString,
    isSpecCompliantForm: isSpecCompliantForm,
    toJSONObject: toJSONObject,
    isAsyncFn: isAsyncFn,
    isThenable: isThenable,
    setImmediate: _setImmediate,
    asap: asap,
  };
  function AxiosError(message, code, config, request, response) {
    Symbol('JSCA_1040_1056');
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = 'AxiosError';
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
      this.response = response;
      this.status = response.status ? response.status : null;
    }
  }
  utils$1.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      Symbol('JSCA_1058_1072');
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: utils$1.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    },
  });
  var prototype$1 = AxiosError.prototype;
  var descriptors = {};
  [
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL',
  ].forEach(function (code) {
    Symbol('JSCA_1076_1080');
    descriptors[code] = {
      value: code,
    };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype$1, 'isAxiosError', {
    value: true,
  });
  AxiosError.from = function (
    error,
    code,
    config,
    request,
    response,
    customProps
  ) {
    Symbol('JSCA_1085_1097');
    var axiosError = Object.create(prototype$1);
    utils$1.toFlatObject(
      error,
      axiosError,
      function filter(obj) {
        Symbol('JSCA_1087_1089');
        return obj !== Error.prototype;
      },
      function (prop) {
        Symbol('JSCA_1089_1091');
        return prop !== 'isAxiosError';
      }
    );
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  var httpAdapter = null;
  function isVisitable(thing) {
    Symbol('JSCA_1099_1101');
    return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
  }
  function removeBrackets(key) {
    Symbol('JSCA_1102_1104');
    return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    Symbol('JSCA_1105_1111');
    if (!path) return key;
    return path
      .concat(key)
      .map(function each(token, i) {
        Symbol('JSCA_1107_1110');
        token = removeBrackets(token);
        return !dots && i ? '[' + token + ']' : token;
      })
      .join(dots ? '.' : '');
  }
  function isFlatArray(arr) {
    Symbol('JSCA_1112_1114');
    return utils$1.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils$1.toFlatObject(
    utils$1,
    {},
    null,
    function filter(prop) {
      Symbol('JSCA_1115_1117');
      return /^is[A-Z]/.test(prop);
    }
  );
  function toFormData(obj, formData, options) {
    Symbol('JSCA_1118_1197');
    if (!utils$1.isObject(obj)) {
      throw new TypeError('target must be an object');
    }
    formData = formData || new FormData();
    options = utils$1.toFlatObject(
      options,
      {
        metaTokens: true,
        dots: false,
        indexes: false,
      },
      false,
      function defined(option, source) {
        Symbol('JSCA_1127_1129');
        return !utils$1.isUndefined(source[option]);
      }
    );
    var metaTokens = options.metaTokens;
    var visitor = options.visitor || defaultVisitor;
    var dots = options.dots;
    var indexes = options.indexes;
    var _Blob = options.Blob || (typeof Blob !== 'undefined' && Blob);
    var useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
    if (!utils$1.isFunction(visitor)) {
      throw new TypeError('visitor must be a function');
    }
    function convertValue(value) {
      Symbol('JSCA_1139_1151');
      if (value === null) return '';
      if (utils$1.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils$1.isBlob(value)) {
        throw new AxiosError('Blob is not supported. Use a Buffer instead.');
      }
      if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
        return useBlob && typeof Blob === 'function'
          ? new Blob([value])
          : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      Symbol('JSCA_1152_1171');
      var arr = value;
      if (value && !path && _typeof(value) === 'object') {
        if (utils$1.endsWith(key, '{}')) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (
          (utils$1.isArray(value) && isFlatArray(value)) ||
          ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) &&
            (arr = utils$1.toArray(value)))
        ) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            Symbol('JSCA_1160_1162');
            !(utils$1.isUndefined(el) || el === null) &&
              formData.append(
                indexes === true
                  ? renderKey([key], index, dots)
                  : indexes === null
                  ? key
                  : key + '[]',
                convertValue(el)
              );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    var stack = [];
    var exposedHelpers = Object.assign(predicates, {
      defaultVisitor: defaultVisitor,
      convertValue: convertValue,
      isVisitable: isVisitable,
    });
    function build(value, path) {
      Symbol('JSCA_1178_1191');
      if (utils$1.isUndefined(value)) return;
      if (stack.indexOf(value) !== -1) {
        throw Error('Circular reference detected in ' + path.join('.'));
      }
      stack.push(value);
      utils$1.forEach(value, function each(el, key) {
        Symbol('JSCA_1184_1189');
        var result =
          !(utils$1.isUndefined(el) || el === null) &&
          visitor.call(
            formData,
            el,
            utils$1.isString(key) ? key.trim() : key,
            path,
            exposedHelpers
          );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils$1.isObject(obj)) {
      throw new TypeError('data must be an object');
    }
    build(obj);
    return formData;
  }
  function encode$1(str) {
    Symbol('JSCA_1198_1211');
    var charMap = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\x00',
    };
    return encodeURIComponent(str).replace(
      /[!'()~]|%20|%00/g,
      function replacer(match) {
        Symbol('JSCA_1208_1210');
        return charMap[match];
      }
    );
  }
  function AxiosURLSearchParams(params, options) {
    Symbol('JSCA_1212_1215');
    this._pairs = [];
    params && toFormData(params, this, options);
  }
  var prototype = AxiosURLSearchParams.prototype;
  prototype.append = function append(name, value) {
    Symbol('JSCA_1217_1219');
    this._pairs.push([name, value]);
  };
  prototype.toString = function toString(encoder) {
    Symbol('JSCA_1220_1227');
    var _encode = encoder
      ? function (value) {
          Symbol('JSCA_1221_1223');
          return encoder.call(this, value, encode$1);
        }
      : encode$1;
    return this._pairs
      .map(function each(pair) {
        Symbol('JSCA_1224_1226');
        return _encode(pair[0]) + '=' + _encode(pair[1]);
      }, '')
      .join('&');
  };
  function encode(val) {
    Symbol('JSCA_1228_1230');
    return encodeURIComponent(val)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }
  function buildURL(url, params, options) {
    Symbol('JSCA_1231_1256');
    if (!params) {
      return url;
    }
    var _encode = (options && options.encode) || encode;
    if (utils$1.isFunction(options)) {
      options = {
        serialize: options,
      };
    }
    var serializeFn = options && options.serialize;
    var serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils$1.isURLSearchParams(params)
        ? params.toString()
        : new AxiosURLSearchParams(params, options).toString(_encode);
    }
    if (serializedParams) {
      var hashmarkIndex = url.indexOf('#');
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
  }
  var InterceptorManager = (function () {
    Symbol('JSCA_1257_1298');
    function InterceptorManager() {
      Symbol('JSCA_1258_1261');
      _classCallCheck(this, InterceptorManager);
      this.handlers = [];
    }
    _createClass(InterceptorManager, [
      {
        key: 'use',
        value: function use(fulfilled, rejected, options) {
          Symbol('JSCA_1264_1272');
          this.handlers.push({
            fulfilled: fulfilled,
            rejected: rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null,
          });
          return this.handlers.length - 1;
        },
      },
      {
        key: 'eject',
        value: function eject(id) {
          Symbol('JSCA_1275_1279');
          if (this.handlers[id]) {
            this.handlers[id] = null;
          }
        },
      },
      {
        key: 'clear',
        value: function clear() {
          Symbol('JSCA_1282_1286');
          if (this.handlers) {
            this.handlers = [];
          }
        },
      },
      {
        key: 'forEach',
        value: function forEach(fn) {
          Symbol('JSCA_1289_1295');
          utils$1.forEach(this.handlers, function forEachHandler(h) {
            Symbol('JSCA_1290_1294');
            if (h !== null) {
              fn(h);
            }
          });
        },
      },
    ]);
    return InterceptorManager;
  })();
  var InterceptorManager$1 = InterceptorManager;
  var transitionalDefaults = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false,
  };
  var URLSearchParams$1 =
    typeof URLSearchParams !== 'undefined'
      ? URLSearchParams
      : AxiosURLSearchParams;
  var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;
  var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;
  var platform$1 = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams$1,
      FormData: FormData$1,
      Blob: Blob$1,
    },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  };
  var hasBrowserEnv =
    typeof window !== 'undefined' && typeof document !== 'undefined';
  var _navigator =
    ((typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) ===
      'object' &&
      navigator) ||
    undefined;
  var hasStandardBrowserEnv =
    hasBrowserEnv &&
    (!_navigator ||
      ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);
  var hasStandardBrowserWebWorkerEnv = (function () {
    Symbol('JSCA_1320_1322');
    return (
      typeof WorkerGlobalScope !== 'undefined' &&
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts === 'function'
    );
  })();
  var origin = (hasBrowserEnv && window.location.href) || 'http://localhost';
  var utils = Object.freeze({
    __proto__: null,
    hasBrowserEnv: hasBrowserEnv,
    hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
    hasStandardBrowserEnv: hasStandardBrowserEnv,
    navigator: _navigator,
    origin: origin,
  });
  var platform = _objectSpread2(_objectSpread2({}, utils), platform$1);
  function toURLEncodedForm(data, options) {
    Symbol('JSCA_1333_1343');
    return toFormData(
      data,
      new platform.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function visitor(value, key, path, helpers) {
            Symbol('JSCA_1335_1341');
            if (platform.isNode && utils$1.isBuffer(value)) {
              this.append(key, value.toString('base64'));
              return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
          },
        },
        options
      )
    );
  }
  function parsePropPath(name) {
    Symbol('JSCA_1344_1348');
    return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(function (match) {
      Symbol('JSCA_1345_1347');
      return match[0] === '[]' ? '' : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    Symbol('JSCA_1349_1360');
    var obj = {};
    var keys = Object.keys(arr);
    var i;
    var len = keys.length;
    var key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    Symbol('JSCA_1361_1393');
    function buildPath(path, value, target, index) {
      Symbol('JSCA_1362_1384');
      var name = path[index++];
      if (name === '__proto__') return true;
      var isNumericKey = Number.isFinite(+name);
      var isLast = index >= path.length;
      name = !name && utils$1.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils$1.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils$1.isObject(target[name])) {
        target[name] = [];
      }
      var result = buildPath(path, value, target[name], index);
      if (result && utils$1.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
      var obj = {};
      utils$1.forEachEntry(formData, function (name, value) {
        Symbol('JSCA_1387_1389');
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  function stringifySafely(rawValue, parser, encoder) {
    Symbol('JSCA_1394_1406');
    if (utils$1.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils$1.trim(rawValue);
      } catch (e) {
        if (e.name !== 'SyntaxError') {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitionalDefaults,
    adapter: ['xhr', 'http', 'fetch'],
    transformRequest: [
      function transformRequest(data, headers) {
        Symbol('JSCA_1410_1448');
        var contentType = headers.getContentType() || '';
        var hasJSONContentType = contentType.indexOf('application/json') > -1;
        var isObjectPayload = utils$1.isObject(data);
        if (isObjectPayload && utils$1.isHTMLForm(data)) {
          data = new FormData(data);
        }
        var isFormData = utils$1.isFormData(data);
        if (isFormData) {
          return hasJSONContentType
            ? JSON.stringify(formDataToJSON(data))
            : data;
        }
        if (
          utils$1.isArrayBuffer(data) ||
          utils$1.isBuffer(data) ||
          utils$1.isStream(data) ||
          utils$1.isFile(data) ||
          utils$1.isBlob(data) ||
          utils$1.isReadableStream(data)
        ) {
          return data;
        }
        if (utils$1.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils$1.isURLSearchParams(data)) {
          headers.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            false
          );
          return data.toString();
        }
        var isFileList;
        if (isObjectPayload) {
          if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
            return toURLEncodedForm(data, this.formSerializer).toString();
          }
          if (
            (isFileList = utils$1.isFileList(data)) ||
            contentType.indexOf('multipart/form-data') > -1
          ) {
            var _FormData = this.env && this.env.FormData;
            return toFormData(
              isFileList
                ? {
                    'files[]': data,
                  }
                : data,
              _FormData && new _FormData(),
              this.formSerializer
            );
          }
        }
        if (isObjectPayload || hasJSONContentType) {
          headers.setContentType('application/json', false);
          return stringifySafely(data);
        }
        return data;
      },
    ],
    transformResponse: [
      function transformResponse(data) {
        Symbol('JSCA_1449_1471');
        var transitional = this.transitional || defaults.transitional;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var JSONRequested = this.responseType === 'json';
        if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
          return data;
        }
        if (
          data &&
          utils$1.isString(data) &&
          ((forcedJSONParsing && !this.responseType) || JSONRequested)
        ) {
          var silentJSONParsing =
            transitional && transitional.silentJSONParsing;
          var strictJSONParsing = !silentJSONParsing && JSONRequested;
          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === 'SyntaxError') {
                throw AxiosError.from(
                  e,
                  AxiosError.ERR_BAD_RESPONSE,
                  this,
                  null,
                  this.response
                );
              }
              throw e;
            }
          }
        }
        return data;
      },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform.classes.FormData,
      Blob: platform.classes.Blob,
    },
    validateStatus: function validateStatus(status) {
      Symbol('JSCA_1481_1483');
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': undefined,
      },
    },
  };
  utils$1.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch'],
    function (method) {
      Symbol('JSCA_1491_1493');
      defaults.headers[method] = {};
    }
  );
  var defaults$1 = defaults;
  var ignoreDuplicateOf = utils$1.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]);
  var parseHeaders = function (rawHeaders) {
    Symbol('JSCA_1496_1519');
    var parsed = {};
    var key;
    var val;
    var i;
    rawHeaders &&
      rawHeaders.split('\n').forEach(function parser(line) {
        Symbol('JSCA_1501_1517');
        i = line.indexOf(':');
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
          return;
        }
        if (key === 'set-cookie') {
          if (parsed[key]) {
            parsed[key].push(val);
          } else {
            parsed[key] = [val];
          }
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
      });
    return parsed;
  };
  var $internals = Symbol('internals');
  function normalizeHeader(header) {
    Symbol('JSCA_1521_1523');
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    Symbol('JSCA_1524_1529');
    if (value === false || value == null) {
      return value;
    }
    return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    Symbol('JSCA_1530_1538');
    var tokens = Object.create(null);
    var tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    var match;
    while ((match = tokensRE.exec(str))) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  var isValidHeaderName = function isValidHeaderName(str) {
    Symbol('JSCA_1539_1541');
    return /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  };
  function matchHeaderValue(
    context,
    value,
    header,
    filter,
    isHeaderNameFilter
  ) {
    Symbol('JSCA_1542_1556');
    if (utils$1.isFunction(filter)) {
      return filter.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils$1.isString(value)) return;
    if (utils$1.isString(filter)) {
      return value.indexOf(filter) !== -1;
    }
    if (utils$1.isRegExp(filter)) {
      return filter.test(value);
    }
  }
  function formatHeader(header) {
    Symbol('JSCA_1557_1561');
    return header
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, function (w, _char, str) {
        Symbol('JSCA_1558_1560');
        return _char.toUpperCase() + str;
      });
  }
  function buildAccessors(obj, header) {
    Symbol('JSCA_1562_1572');
    var accessorName = utils$1.toCamelCase(' ' + header);
    ['get', 'set', 'has'].forEach(function (methodName) {
      Symbol('JSCA_1564_1571');
      Object.defineProperty(obj, methodName + accessorName, {
        value: function value(arg1, arg2, arg3) {
          Symbol('JSCA_1566_1568');
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true,
      });
    });
  }
  var AxiosHeaders = (function (_Symbol$iterator, _Symbol$toStringTag) {
    Symbol('JSCA_1573_1783');
    function AxiosHeaders(headers) {
      Symbol('JSCA_1574_1577');
      _classCallCheck(this, AxiosHeaders);
      headers && this.set(headers);
    }
    _createClass(
      AxiosHeaders,
      [
        {
          key: 'set',
          value: function set(header, valueOrRewrite, rewrite) {
            Symbol('JSCA_1580_1617');
            var self = this;
            function setHeader(_value, _header, _rewrite) {
              Symbol('JSCA_1582_1591');
              var lHeader = normalizeHeader(_header);
              if (!lHeader) {
                throw new Error('header name must be a non-empty string');
              }
              var key = utils$1.findKey(self, lHeader);
              if (
                !key ||
                self[key] === undefined ||
                _rewrite === true ||
                (_rewrite === undefined && self[key] !== false)
              ) {
                self[key || _header] = normalizeValue(_value);
              }
            }
            var setHeaders = function setHeaders(headers, _rewrite) {
              Symbol('JSCA_1592_1596');
              return utils$1.forEach(headers, function (_value, _header) {
                Symbol('JSCA_1593_1595');
                return setHeader(_value, _header, _rewrite);
              });
            };
            if (
              utils$1.isPlainObject(header) ||
              header instanceof this.constructor
            ) {
              setHeaders(header, valueOrRewrite);
            } else if (
              utils$1.isString(header) &&
              (header = header.trim()) &&
              !isValidHeaderName(header)
            ) {
              setHeaders(parseHeaders(header), valueOrRewrite);
            } else if (utils$1.isHeaders(header)) {
              var _iterator = _createForOfIteratorHelper(header.entries()),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  var _step$value = _slicedToArray(_step.value, 2),
                    key = _step$value[0],
                    value = _step$value[1];
                  setHeader(value, key, rewrite);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else {
              header != null && setHeader(valueOrRewrite, header, rewrite);
            }
            return this;
          },
        },
        {
          key: 'get',
          value: function get(header, parser) {
            Symbol('JSCA_1620_1641');
            header = normalizeHeader(header);
            if (header) {
              var key = utils$1.findKey(this, header);
              if (key) {
                var value = this[key];
                if (!parser) {
                  return value;
                }
                if (parser === true) {
                  return parseTokens(value);
                }
                if (utils$1.isFunction(parser)) {
                  return parser.call(this, value, key);
                }
                if (utils$1.isRegExp(parser)) {
                  return parser.exec(value);
                }
                throw new TypeError('parser must be boolean|regexp|function');
              }
            }
          },
        },
        {
          key: 'has',
          value: function has(header, matcher) {
            Symbol('JSCA_1644_1651');
            header = normalizeHeader(header);
            if (header) {
              var key = utils$1.findKey(this, header);
              return !!(
                key &&
                this[key] !== undefined &&
                (!matcher || matchHeaderValue(this, this[key], key, matcher))
              );
            }
            return false;
          },
        },
        {
          key: 'delete',
          value: function _delete(header, matcher) {
            Symbol('JSCA_1654_1673');
            var self = this;
            var deleted = false;
            function deleteHeader(_header) {
              Symbol('JSCA_1657_1666');
              _header = normalizeHeader(_header);
              if (_header) {
                var key = utils$1.findKey(self, _header);
                if (
                  key &&
                  (!matcher || matchHeaderValue(self, self[key], key, matcher))
                ) {
                  delete self[key];
                  deleted = true;
                }
              }
            }
            if (utils$1.isArray(header)) {
              header.forEach(deleteHeader);
            } else {
              deleteHeader(header);
            }
            return deleted;
          },
        },
        {
          key: 'clear',
          value: function clear(matcher) {
            Symbol('JSCA_1676_1688');
            var keys = Object.keys(this);
            var i = keys.length;
            var deleted = false;
            while (i--) {
              var key = keys[i];
              if (
                !matcher ||
                matchHeaderValue(this, this[key], key, matcher, true)
              ) {
                delete this[key];
                deleted = true;
              }
            }
            return deleted;
          },
        },
        {
          key: 'normalize',
          value: function normalize(format) {
            Symbol('JSCA_1691_1709');
            var self = this;
            var headers = {};
            utils$1.forEach(this, function (value, header) {
              Symbol('JSCA_1694_1707');
              var key = utils$1.findKey(headers, header);
              if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
              }
              var normalized = format
                ? formatHeader(header)
                : String(header).trim();
              if (normalized !== header) {
                delete self[header];
              }
              self[normalized] = normalizeValue(value);
              headers[normalized] = true;
            });
            return this;
          },
        },
        {
          key: 'concat',
          value: function concat() {
            Symbol('JSCA_1712_1718');
            var _this$constructor;
            for (
              var _len = arguments.length, targets = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              targets[_key] = arguments[_key];
            }
            return (_this$constructor = this.constructor).concat.apply(
              _this$constructor,
              [this].concat(targets)
            );
          },
        },
        {
          key: 'toJSON',
          value: function toJSON(asStrings) {
            Symbol('JSCA_1721_1727');
            var obj = Object.create(null);
            utils$1.forEach(this, function (value, header) {
              Symbol('JSCA_1723_1725');
              value != null &&
                value !== false &&
                (obj[header] =
                  asStrings && utils$1.isArray(value)
                    ? value.join(', ')
                    : value);
            });
            return obj;
          },
        },
        {
          key: _Symbol$iterator,
          value: function value() {
            Symbol('JSCA_1730_1732');
            return Object.entries(this.toJSON())[Symbol.iterator]();
          },
        },
        {
          key: 'toString',
          value: function toString() {
            Symbol('JSCA_1735_1740');
            return Object.entries(this.toJSON())
              .map(function (_ref) {
                Symbol('JSCA_1736_1739');
                var _ref2 = _slicedToArray(_ref, 2),
                  header = _ref2[0],
                  value = _ref2[1];
                return header + ': ' + value;
              })
              .join('\n');
          },
        },
        {
          key: _Symbol$toStringTag,
          get: function get() {
            Symbol('JSCA_1743_1745');
            return 'AxiosHeaders';
          },
        },
      ],
      [
        {
          key: 'from',
          value: function from(thing) {
            Symbol('JSCA_1748_1750');
            return thing instanceof this ? thing : new this(thing);
          },
        },
        {
          key: 'concat',
          value: function concat(first) {
            Symbol('JSCA_1753_1762');
            var computed = new this(first);
            for (
              var _len2 = arguments.length,
                targets = new Array(_len2 > 1 ? _len2 - 1 : 0),
                _key2 = 1;
              _key2 < _len2;
              _key2++
            ) {
              targets[_key2 - 1] = arguments[_key2];
            }
            targets.forEach(function (target) {
              Symbol('JSCA_1758_1760');
              return computed.set(target);
            });
            return computed;
          },
        },
        {
          key: 'accessor',
          value: function accessor(header) {
            Symbol('JSCA_1765_1780');
            var internals =
              (this[$internals] =
              this[$internals] =
                {
                  accessors: {},
                });
            var accessors = internals.accessors;
            var prototype = this.prototype;
            function defineAccessor(_header) {
              Symbol('JSCA_1771_1777');
              var lHeader = normalizeHeader(_header);
              if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
              }
            }
            utils$1.isArray(header)
              ? header.forEach(defineAccessor)
              : defineAccessor(header);
            return this;
          },
        },
      ]
    );
    return AxiosHeaders;
  })(Symbol.iterator, Symbol.toStringTag);
  AxiosHeaders.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization',
  ]);
  utils$1.reduceDescriptors(AxiosHeaders.prototype, function (_ref3, key) {
    Symbol('JSCA_1785_1796');
    var value = _ref3.value;
    var mapped = key[0].toUpperCase() + key.slice(1);
    return {
      get: function get() {
        Symbol('JSCA_1789_1791');
        return value;
      },
      set: function set(headerValue) {
        Symbol('JSCA_1792_1794');
        this[mapped] = headerValue;
      },
    };
  });
  utils$1.freezeMethods(AxiosHeaders);
  var AxiosHeaders$1 = AxiosHeaders;
  function transformData(fns, response) {
    Symbol('JSCA_1799_1809');
    var config = this || defaults$1;
    var context = response || config;
    var headers = AxiosHeaders$1.from(context.headers);
    var data = context.data;
    utils$1.forEach(fns, function transform(fn) {
      Symbol('JSCA_1804_1806');
      data = fn.call(
        config,
        data,
        headers.normalize(),
        response ? response.status : undefined
      );
    });
    headers.normalize();
    return data;
  }
  function isCancel(value) {
    Symbol('JSCA_1810_1812');
    return !!(value && value.__CANCEL__);
  }
  function CanceledError(message, config, request) {
    Symbol('JSCA_1813_1816');
    AxiosError.call(
      this,
      message == null ? 'canceled' : message,
      AxiosError.ERR_CANCELED,
      config,
      request
    );
    this.name = 'CanceledError';
  }
  utils$1.inherits(CanceledError, AxiosError, {
    __CANCEL__: true,
  });
  function settle(resolve, reject, response) {
    Symbol('JSCA_1820_1827');
    var validateStatus = response.config.validateStatus;
    if (
      !response.status ||
      !validateStatus ||
      validateStatus(response.status)
    ) {
      resolve(response);
    } else {
      reject(
        new AxiosError(
          'Request failed with status code ' + response.status,
          [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][
            Math.floor(response.status / 100) - 4
          ],
          response.config,
          response.request,
          response
        )
      );
    }
  }
  function parseProtocol(url) {
    Symbol('JSCA_1828_1831');
    var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return (match && match[1]) || '';
  }
  function speedometer(samplesCount, min) {
    Symbol('JSCA_1832_1864');
    samplesCount = samplesCount || 10;
    var bytes = new Array(samplesCount);
    var timestamps = new Array(samplesCount);
    var head = 0;
    var tail = 0;
    var firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
      Symbol('JSCA_1840_1863');
      var now = Date.now();
      var startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      var i = tail;
      var bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      var passed = startedAt && now - startedAt;
      return passed ? Math.round((bytesCount * 1000) / passed) : undefined;
    };
  }
  function throttle(fn, freq) {
    Symbol('JSCA_1865_1902');
    var timestamp = 0;
    var threshold = 1000 / freq;
    var lastArgs;
    var timer;
    var invoke = function invoke(args) {
      Symbol('JSCA_1870_1879');
      var now =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : Date.now();
      timestamp = now;
      lastArgs = null;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(null, args);
    };
    var throttled = function throttled() {
      Symbol('JSCA_1880_1897');
      var now = Date.now();
      var passed = now - timestamp;
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }
      if (passed >= threshold) {
        invoke(args, now);
      } else {
        lastArgs = args;
        if (!timer) {
          timer = setTimeout(function () {
            Symbol('JSCA_1891_1894');
            timer = null;
            invoke(lastArgs);
          }, threshold - passed);
        }
      }
    };
    var flush = function flush() {
      Symbol('JSCA_1898_1900');
      return lastArgs && invoke(lastArgs);
    };
    return [throttled, flush];
  }
  var progressEventReducer = function progressEventReducer(
    listener,
    isDownloadStream
  ) {
    Symbol('JSCA_1903_1926');
    var freq =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    var bytesNotified = 0;
    var _speedometer = speedometer(50, 250);
    return throttle(function (e) {
      Symbol('JSCA_1907_1925');
      var loaded = e.loaded;
      var total = e.lengthComputable ? e.total : undefined;
      var progressBytes = loaded - bytesNotified;
      var rate = _speedometer(progressBytes);
      var inRange = loaded <= total;
      bytesNotified = loaded;
      var data = _defineProperty(
        {
          loaded: loaded,
          total: total,
          progress: total ? loaded / total : undefined,
          bytes: progressBytes,
          rate: rate ? rate : undefined,
          estimated:
            rate && total && inRange ? (total - loaded) / rate : undefined,
          event: e,
          lengthComputable: total != null,
        },
        isDownloadStream ? 'download' : 'upload',
        true
      );
      listener(data);
    }, freq);
  };
  var progressEventDecorator = function progressEventDecorator(
    total,
    throttled
  ) {
    Symbol('JSCA_1927_1936');
    var lengthComputable = total != null;
    return [
      function (loaded) {
        Symbol('JSCA_1929_1935');
        return throttled[0]({
          lengthComputable: lengthComputable,
          total: total,
          loaded: loaded,
        });
      },
      throttled[1],
    ];
  };
  var asyncDecorator = function asyncDecorator(fn) {
    Symbol('JSCA_1937_1946');
    return function () {
      Symbol('JSCA_1938_1945');
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }
      return utils$1.asap(function () {
        Symbol('JSCA_1942_1944');
        return fn.apply(void 0, args);
      });
    };
  };
  var isURLSameOrigin = platform.hasStandardBrowserEnv
    ? (function (origin, isMSIE) {
        Symbol('JSCA_1947_1952');
        return function (url) {
          Symbol('JSCA_1948_1951');
          url = new URL(url, platform.origin);
          return (
            origin.protocol === url.protocol &&
            origin.host === url.host &&
            (isMSIE || origin.port === url.port)
          );
        };
      })(
        new URL(platform.origin),
        platform.navigator &&
          /(msie|trident)/i.test(platform.navigator.userAgent)
      )
    : function () {
        Symbol('JSCA_1952_1954');
        return true;
      };
  var cookies = platform.hasStandardBrowserEnv
    ? {
        write: function write(name, value, expires, path, domain, secure) {
          Symbol('JSCA_1956_1963');
          var cookie = [name + '=' + encodeURIComponent(value)];
          utils$1.isNumber(expires) &&
            cookie.push('expires=' + new Date(expires).toGMTString());
          utils$1.isString(path) && cookie.push('path=' + path);
          utils$1.isString(domain) && cookie.push('domain=' + domain);
          secure === true && cookie.push('secure');
          document.cookie = cookie.join('; ');
        },
        read: function read(name) {
          Symbol('JSCA_1964_1967');
          var match = document.cookie.match(
            new RegExp('(^|;\\s*)(' + name + ')=([^;]*)')
          );
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          Symbol('JSCA_1968_1970');
          this.write(name, '', Date.now() - 86400000);
        },
      }
    : {
        write: function write() {
          Symbol('JSCA_1972_1972');
        },
        read: function read() {
          Symbol('JSCA_1973_1975');
          return null;
        },
        remove: function remove() {
          Symbol('JSCA_1976_1976');
        },
      };
  function isAbsoluteURL(url) {
    Symbol('JSCA_1978_1980');
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }
  function combineURLs(baseURL, relativeURL) {
    Symbol('JSCA_1981_1983');
    return relativeURL
      ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
      : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    Symbol('JSCA_1984_1989');
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  var headersToObject = function headersToObject(thing) {
    Symbol('JSCA_1990_1992');
    return thing instanceof AxiosHeaders$1 ? _objectSpread2({}, thing) : thing;
  };
  function mergeConfig(config1, config2) {
    Symbol('JSCA_1993_2073');
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source, prop, caseless) {
      Symbol('JSCA_1996_2007');
      if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
        return utils$1.merge.call(
          {
            caseless: caseless,
          },
          target,
          source
        );
      } else if (utils$1.isPlainObject(source)) {
        return utils$1.merge({}, source);
      } else if (utils$1.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, prop, caseless) {
      Symbol('JSCA_2008_2014');
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(a, b, prop, caseless);
      } else if (!utils$1.isUndefined(a)) {
        return getMergedValue(undefined, a, prop, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      Symbol('JSCA_2015_2019');
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(undefined, b);
      }
    }
    function defaultToConfig2(a, b) {
      Symbol('JSCA_2020_2026');
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(undefined, b);
      } else if (!utils$1.isUndefined(a)) {
        return getMergedValue(undefined, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      Symbol('JSCA_2027_2033');
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(undefined, a);
      }
    }
    var mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: function headers(a, b, prop) {
        Symbol('JSCA_2063_2065');
        return mergeDeepProperties(
          headersToObject(a),
          headersToObject(b),
          prop,
          true
        );
      },
    };
    utils$1.forEach(
      Object.keys(Object.assign({}, config1, config2)),
      function computeConfigValue(prop) {
        Symbol('JSCA_2067_2071');
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(config1[prop], config2[prop], prop);
        (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) ||
          (config[prop] = configValue);
      }
    );
    return config;
  }
  var resolveConfig = function (config) {
    Symbol('JSCA_2074_2103');
    var newConfig = mergeConfig({}, config);
    var data = newConfig.data,
      withXSRFToken = newConfig.withXSRFToken,
      xsrfHeaderName = newConfig.xsrfHeaderName,
      xsrfCookieName = newConfig.xsrfCookieName,
      headers = newConfig.headers,
      auth = newConfig.auth;
    newConfig.headers = headers = AxiosHeaders$1.from(headers);
    newConfig.url = buildURL(
      buildFullPath(newConfig.baseURL, newConfig.url),
      config.params,
      config.paramsSerializer
    );
    if (auth) {
      headers.set(
        'Authorization',
        'Basic ' +
          btoa(
            (auth.username || '') +
              ':' +
              (auth.password ? unescape(encodeURIComponent(auth.password)) : '')
          )
      );
    }
    var contentType;
    if (utils$1.isFormData(data)) {
      if (
        platform.hasStandardBrowserEnv ||
        platform.hasStandardBrowserWebWorkerEnv
      ) {
        headers.setContentType(undefined);
      } else if ((contentType = headers.getContentType()) !== false) {
        var _ref = contentType
            ? contentType
                .split(';')
                .map(function (token) {
                  Symbol('JSCA_2087_2089');
                  return token.trim();
                })
                .filter(Boolean)
            : [],
          _ref2 = _toArray(_ref),
          type = _ref2[0],
          tokens = _ref2.slice(1);
        headers.setContentType(
          [type || 'multipart/form-data']
            .concat(_toConsumableArray(tokens))
            .join('; ')
        );
      }
    }
    if (platform.hasStandardBrowserEnv) {
      withXSRFToken &&
        utils$1.isFunction(withXSRFToken) &&
        (withXSRFToken = withXSRFToken(newConfig));
      if (
        withXSRFToken ||
        (withXSRFToken !== false && isURLSameOrigin(newConfig.url))
      ) {
        var xsrfValue =
          xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
        if (xsrfValue) {
          headers.set(xsrfHeaderName, xsrfValue);
        }
      }
    }
    return newConfig;
  };
  var isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
  var xhrAdapter =
    isXHRAdapterSupported &&
    function (config) {
      Symbol('JSCA_2105_2227');
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        Symbol('JSCA_2106_2226');
        var _config = resolveConfig(config);
        var requestData = _config.data;
        var requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
        var responseType = _config.responseType,
          onUploadProgress = _config.onUploadProgress,
          onDownloadProgress = _config.onDownloadProgress;
        var onCanceled;
        var uploadThrottled, downloadThrottled;
        var flushUpload, flushDownload;
        function done() {
          Symbol('JSCA_2114_2119');
          flushUpload && flushUpload();
          flushDownload && flushDownload();
          _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
          _config.signal &&
            _config.signal.removeEventListener('abort', onCanceled);
        }
        var request = new XMLHttpRequest();
        request.open(_config.method.toUpperCase(), _config.url, true);
        request.timeout = _config.timeout;
        function onloadend() {
          Symbol('JSCA_2123_2145');
          if (!request) {
            return;
          }
          var responseHeaders = AxiosHeaders$1.from(
            'getAllResponseHeaders' in request &&
              request.getAllResponseHeaders()
          );
          var responseData =
            !responseType || responseType === 'text' || responseType === 'json'
              ? request.responseText
              : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config: config,
            request: request,
          };
          settle(
            function _resolve(value) {
              Symbol('JSCA_2137_2140');
              resolve(value);
              done();
            },
            function _reject(err) {
              Symbol('JSCA_2140_2143');
              reject(err);
              done();
            },
            response
          );
          request = null;
        }
        if ('onloadend' in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            Symbol('JSCA_2149_2157');
            if (!request || request.readyState !== 4) {
              return;
            }
            if (
              request.status === 0 &&
              !(
                request.responseURL &&
                request.responseURL.indexOf('file:') === 0
              )
            ) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request.onabort = function handleAbort() {
          Symbol('JSCA_2159_2165');
          if (!request) {
            return;
          }
          reject(
            new AxiosError(
              'Request aborted',
              AxiosError.ECONNABORTED,
              config,
              request
            )
          );
          request = null;
        };
        request.onerror = function handleError() {
          Symbol('JSCA_2166_2169');
          reject(
            new AxiosError(
              'Network Error',
              AxiosError.ERR_NETWORK,
              config,
              request
            )
          );
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          Symbol('JSCA_2170_2178');
          var timeoutErrorMessage = _config.timeout
            ? 'timeout of ' + _config.timeout + 'ms exceeded'
            : 'timeout exceeded';
          var transitional = _config.transitional || transitionalDefaults;
          if (_config.timeoutErrorMessage) {
            timeoutErrorMessage = _config.timeoutErrorMessage;
          }
          reject(
            new AxiosError(
              timeoutErrorMessage,
              transitional.clarifyTimeoutError
                ? AxiosError.ETIMEDOUT
                : AxiosError.ECONNABORTED,
              config,
              request
            )
          );
          request = null;
        };
        requestData === undefined && requestHeaders.setContentType(null);
        if ('setRequestHeader' in request) {
          utils$1.forEach(
            requestHeaders.toJSON(),
            function setRequestHeader(val, key) {
              Symbol('JSCA_2181_2183');
              request.setRequestHeader(key, val);
            }
          );
        }
        if (!utils$1.isUndefined(_config.withCredentials)) {
          request.withCredentials = !!_config.withCredentials;
        }
        if (responseType && responseType !== 'json') {
          request.responseType = _config.responseType;
        }
        if (onDownloadProgress) {
          var _progressEventReducer = progressEventReducer(
            onDownloadProgress,
            true
          );
          var _progressEventReducer2 = _slicedToArray(_progressEventReducer, 2);
          downloadThrottled = _progressEventReducer2[0];
          flushDownload = _progressEventReducer2[1];
          request.addEventListener('progress', downloadThrottled);
        }
        if (onUploadProgress && request.upload) {
          var _progressEventReducer3 = progressEventReducer(onUploadProgress);
          var _progressEventReducer4 = _slicedToArray(
            _progressEventReducer3,
            2
          );
          uploadThrottled = _progressEventReducer4[0];
          flushUpload = _progressEventReducer4[1];
          request.upload.addEventListener('progress', uploadThrottled);
          request.upload.addEventListener('loadend', flushUpload);
        }
        if (_config.cancelToken || _config.signal) {
          onCanceled = function onCanceled(cancel) {
            Symbol('JSCA_2207_2214');
            if (!request) {
              return;
            }
            reject(
              !cancel || cancel.type
                ? new CanceledError(null, config, request)
                : cancel
            );
            request.abort();
            request = null;
          };
          _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
          if (_config.signal) {
            _config.signal.aborted
              ? onCanceled()
              : _config.signal.addEventListener('abort', onCanceled);
          }
        }
        var protocol = parseProtocol(_config.url);
        if (protocol && platform.protocols.indexOf(protocol) === -1) {
          reject(
            new AxiosError(
              'Unsupported protocol ' + protocol + ':',
              AxiosError.ERR_BAD_REQUEST,
              config
            )
          );
          return;
        }
        request.send(requestData || null);
      });
    };
  var composeSignals = function composeSignals(signals, timeout) {
    Symbol('JSCA_2228_2264');
    var _signals = (signals = signals ? signals.filter(Boolean) : []),
      length = _signals.length;
    if (timeout || length) {
      var controller = new AbortController();
      var aborted;
      var onabort = function onabort(reason) {
        Symbol('JSCA_2233_2240');
        if (!aborted) {
          aborted = true;
          unsubscribe();
          var err = reason instanceof Error ? reason : this.reason;
          controller.abort(
            err instanceof AxiosError
              ? err
              : new CanceledError(err instanceof Error ? err.message : err)
          );
        }
      };
      var timer =
        timeout &&
        setTimeout(function () {
          Symbol('JSCA_2241_2244');
          timer = null;
          onabort(
            new AxiosError(
              'timeout '.concat(timeout, ' of ms exceeded'),
              AxiosError.ETIMEDOUT
            )
          );
        }, timeout);
      var unsubscribe = function unsubscribe() {
        Symbol('JSCA_2245_2254');
        if (signals) {
          timer && clearTimeout(timer);
          timer = null;
          signals.forEach(function (signal) {
            Symbol('JSCA_2249_2251');
            signal.unsubscribe
              ? signal.unsubscribe(onabort)
              : signal.removeEventListener('abort', onabort);
          });
          signals = null;
        }
      };
      signals.forEach(function (signal) {
        Symbol('JSCA_2255_2257');
        return signal.addEventListener('abort', onabort);
      });
      var signal = controller.signal;
      signal.unsubscribe = function () {
        Symbol('JSCA_2259_2261');
        return utils$1.asap(unsubscribe);
      };
      return signal;
    }
  };
  var composeSignals$1 = composeSignals;
  var streamChunk = _regeneratorRuntime().mark(function streamChunk(
    chunk,
    chunkSize
  ) {
    Symbol('JSCA_2266_2299');
    var len, pos, end;
    return _regeneratorRuntime().wrap(function streamChunk$(_context) {
      Symbol('JSCA_2268_2298');
      while (1)
        switch ((_context.prev = _context.next)) {
          case 0:
            len = chunk.byteLength;
            if (!(!chunkSize || len < chunkSize)) {
              _context.next = 5;
              break;
            }
            _context.next = 4;
            return chunk;
          case 4:
            return _context.abrupt('return');
          case 5:
            pos = 0;
          case 6:
            if (!(pos < len)) {
              _context.next = 13;
              break;
            }
            end = pos + chunkSize;
            _context.next = 10;
            return chunk.slice(pos, end);
          case 10:
            pos = end;
            _context.next = 6;
            break;
          case 13:
          case 'end':
            return _context.stop();
        }
    }, streamChunk);
  });
  var readBytes = (function () {
    Symbol('JSCA_2300_2361');
    var _ref = _wrapAsyncGenerator(
      _regeneratorRuntime().mark(function _callee(iterable, chunkSize) {
        Symbol('JSCA_2301_2357');
        var _iteratorAbruptCompletion,
          _didIteratorError,
          _iteratorError,
          _iterator,
          _step,
          chunk;
        return _regeneratorRuntime().wrap(
          function _callee$(_context2) {
            Symbol('JSCA_2303_2356');
            while (1)
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _iteratorAbruptCompletion = false;
                  _didIteratorError = false;
                  _context2.prev = 2;
                  _iterator = _asyncIterator(readStream(iterable));
                case 4:
                  _context2.next = 6;
                  return _awaitAsyncGenerator(_iterator.next());
                case 6:
                  if (
                    !(_iteratorAbruptCompletion = !(_step = _context2.sent)
                      .done)
                  ) {
                    _context2.next = 12;
                    break;
                  }
                  chunk = _step.value;
                  return _context2.delegateYield(
                    _asyncGeneratorDelegate(
                      _asyncIterator(streamChunk(chunk, chunkSize))
                    ),
                    't0',
                    9
                  );
                case 9:
                  _iteratorAbruptCompletion = false;
                  _context2.next = 4;
                  break;
                case 12:
                  _context2.next = 18;
                  break;
                case 14:
                  _context2.prev = 14;
                  _context2.t1 = _context2['catch'](2);
                  _didIteratorError = true;
                  _iteratorError = _context2.t1;
                case 18:
                  _context2.prev = 18;
                  _context2.prev = 19;
                  if (
                    !(_iteratorAbruptCompletion && _iterator['return'] != null)
                  ) {
                    _context2.next = 23;
                    break;
                  }
                  _context2.next = 23;
                  return _awaitAsyncGenerator(_iterator['return']());
                case 23:
                  _context2.prev = 23;
                  if (!_didIteratorError) {
                    _context2.next = 26;
                    break;
                  }
                  throw _iteratorError;
                case 26:
                  return _context2.finish(23);
                case 27:
                  return _context2.finish(18);
                case 28:
                case 'end':
                  return _context2.stop();
              }
          },
          _callee,
          null,
          [
            [2, 14, 18, 28],
            [19, , 23, 27],
          ]
        );
      })
    );
    return function readBytes(_x, _x2) {
      Symbol('JSCA_2358_2360');
      return _ref.apply(this, arguments);
    };
  })();
  var readStream = (function () {
    Symbol('JSCA_2362_2411');
    var _ref2 = _wrapAsyncGenerator(
      _regeneratorRuntime().mark(function _callee2(stream) {
        Symbol('JSCA_2363_2407');
        var reader, _yield$_awaitAsyncGen, done, value;
        return _regeneratorRuntime().wrap(
          function _callee2$(_context3) {
            Symbol('JSCA_2365_2406');
            while (1)
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  if (!stream[Symbol.asyncIterator]) {
                    _context3.next = 3;
                    break;
                  }
                  return _context3.delegateYield(
                    _asyncGeneratorDelegate(_asyncIterator(stream)),
                    't0',
                    2
                  );
                case 2:
                  return _context3.abrupt('return');
                case 3:
                  reader = stream.getReader();
                  _context3.prev = 4;
                case 5:
                  _context3.next = 7;
                  return _awaitAsyncGenerator(reader.read());
                case 7:
                  _yield$_awaitAsyncGen = _context3.sent;
                  done = _yield$_awaitAsyncGen.done;
                  value = _yield$_awaitAsyncGen.value;
                  if (!done) {
                    _context3.next = 12;
                    break;
                  }
                  return _context3.abrupt('break', 16);
                case 12:
                  _context3.next = 14;
                  return value;
                case 14:
                  _context3.next = 5;
                  break;
                case 16:
                  _context3.prev = 16;
                  _context3.next = 19;
                  return _awaitAsyncGenerator(reader.cancel());
                case 19:
                  return _context3.finish(16);
                case 20:
                case 'end':
                  return _context3.stop();
              }
          },
          _callee2,
          null,
          [[4, , 16, 20]]
        );
      })
    );
    return function readStream(_x3) {
      Symbol('JSCA_2408_2410');
      return _ref2.apply(this, arguments);
    };
  })();
  var trackStream = function trackStream(
    stream,
    chunkSize,
    onProgress,
    onFinish
  ) {
    Symbol('JSCA_2412_2471');
    var iterator = readBytes(stream, chunkSize);
    var bytes = 0;
    var done;
    var _onFinish = function _onFinish(e) {
      Symbol('JSCA_2416_2421');
      if (!done) {
        done = true;
        onFinish && onFinish(e);
      }
    };
    return new ReadableStream(
      {
        pull: function pull(controller) {
          Symbol('JSCA_2423_2463');
          return _asyncToGenerator(
            _regeneratorRuntime().mark(function _callee3() {
              Symbol('JSCA_2424_2462');
              var _yield$iterator$next, _done, value, len, loadedBytes;
              return _regeneratorRuntime().wrap(
                function _callee3$(_context4) {
                  Symbol('JSCA_2426_2461');
                  while (1)
                    switch ((_context4.prev = _context4.next)) {
                      case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return iterator.next();
                      case 3:
                        _yield$iterator$next = _context4.sent;
                        _done = _yield$iterator$next.done;
                        value = _yield$iterator$next.value;
                        if (!_done) {
                          _context4.next = 10;
                          break;
                        }
                        _onFinish();
                        controller.close();
                        return _context4.abrupt('return');
                      case 10:
                        len = value.byteLength;
                        if (onProgress) {
                          loadedBytes = bytes += len;
                          onProgress(loadedBytes);
                        }
                        controller.enqueue(new Uint8Array(value));
                        _context4.next = 19;
                        break;
                      case 15:
                        _context4.prev = 15;
                        _context4.t0 = _context4['catch'](0);
                        _onFinish(_context4.t0);
                        throw _context4.t0;
                      case 19:
                      case 'end':
                        return _context4.stop();
                    }
                },
                _callee3,
                null,
                [[0, 15]]
              );
            })
          )();
        },
        cancel: function cancel(reason) {
          Symbol('JSCA_2464_2467');
          _onFinish(reason);
          return iterator['return']();
        },
      },
      {
        highWaterMark: 2,
      }
    );
  };
  var isFetchSupported =
    typeof fetch === 'function' &&
    typeof Request === 'function' &&
    typeof Response === 'function';
  var isReadableStreamSupported =
    isFetchSupported && typeof ReadableStream === 'function';
  var encodeText =
    isFetchSupported &&
    (typeof TextEncoder === 'function'
      ? (function (encoder) {
          Symbol('JSCA_2474_2478');
          return function (str) {
            Symbol('JSCA_2475_2477');
            return encoder.encode(str);
          };
        })(new TextEncoder())
      : (function () {
          Symbol('JSCA_2478_2498');
          var _ref = _asyncToGenerator(
            _regeneratorRuntime().mark(function _callee(str) {
              Symbol('JSCA_2479_2494');
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                Symbol('JSCA_2480_2493');
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.t0 = Uint8Array;
                      _context.next = 3;
                      return new Response(str).arrayBuffer();
                    case 3:
                      _context.t1 = _context.sent;
                      return _context.abrupt(
                        'return',
                        new _context.t0(_context.t1)
                      );
                    case 5:
                    case 'end':
                      return _context.stop();
                  }
              }, _callee);
            })
          );
          return function (_x) {
            Symbol('JSCA_2495_2497');
            return _ref.apply(this, arguments);
          };
        })());
  var test = function test(fn) {
    Symbol('JSCA_2499_2508');
    try {
      for (
        var _len = arguments.length,
          args = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        args[_key - 1] = arguments[_key];
      }
      return !!fn.apply(void 0, args);
    } catch (e) {
      return false;
    }
  };
  var supportsRequestStream =
    isReadableStreamSupported &&
    test(function () {
      Symbol('JSCA_2509_2520');
      var duplexAccessed = false;
      var hasContentType = new Request(platform.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          Symbol('JSCA_2514_2517');
          duplexAccessed = true;
          return 'half';
        },
      }).headers.has('Content-Type');
      return duplexAccessed && !hasContentType;
    });
  var DEFAULT_CHUNK_SIZE = 64 * 1024;
  var supportsResponseStream =
    isReadableStreamSupported &&
    test(function () {
      Symbol('JSCA_2522_2524');
      return utils$1.isReadableStream(new Response('').body);
    });
  var resolvers = {
    stream:
      supportsResponseStream &&
      function (res) {
        Symbol('JSCA_2526_2528');
        return res.body;
      },
  };
  isFetchSupported &&
    (function (res) {
      Symbol('JSCA_2530_2538');
      ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(function (
        type
      ) {
        Symbol('JSCA_2531_2537');
        !resolvers[type] &&
          (resolvers[type] = utils$1.isFunction(res[type])
            ? function (res) {
                Symbol('JSCA_2532_2534');
                return res[type]();
              }
            : function (_, config) {
                Symbol('JSCA_2534_2536');
                throw new AxiosError(
                  "Response type '".concat(type, "' is not supported"),
                  AxiosError.ERR_NOT_SUPPORT,
                  config
                );
              });
      });
    })(new Response());
  var getBodyLength = (function () {
    Symbol('JSCA_2539_2596');
    var _ref2 = _asyncToGenerator(
      _regeneratorRuntime().mark(function _callee2(body) {
        Symbol('JSCA_2540_2592');
        var _request;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          Symbol('JSCA_2542_2591');
          while (1)
            switch ((_context2.prev = _context2.next)) {
              case 0:
                if (!(body == null)) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt('return', 0);
              case 2:
                if (!utils$1.isBlob(body)) {
                  _context2.next = 4;
                  break;
                }
                return _context2.abrupt('return', body.size);
              case 4:
                if (!utils$1.isSpecCompliantForm(body)) {
                  _context2.next = 9;
                  break;
                }
                _request = new Request(platform.origin, {
                  method: 'POST',
                  body: body,
                });
                _context2.next = 8;
                return _request.arrayBuffer();
              case 8:
                return _context2.abrupt('return', _context2.sent.byteLength);
              case 9:
                if (
                  !(
                    utils$1.isArrayBufferView(body) ||
                    utils$1.isArrayBuffer(body)
                  )
                ) {
                  _context2.next = 11;
                  break;
                }
                return _context2.abrupt('return', body.byteLength);
              case 11:
                if (utils$1.isURLSearchParams(body)) {
                  body = body + '';
                }
                if (!utils$1.isString(body)) {
                  _context2.next = 16;
                  break;
                }
                _context2.next = 15;
                return encodeText(body);
              case 15:
                return _context2.abrupt('return', _context2.sent.byteLength);
              case 16:
              case 'end':
                return _context2.stop();
            }
        }, _callee2);
      })
    );
    return function getBodyLength(_x2) {
      Symbol('JSCA_2593_2595');
      return _ref2.apply(this, arguments);
    };
  })();
  var resolveBodyLength = (function () {
    Symbol('JSCA_2597_2614');
    var _ref3 = _asyncToGenerator(
      _regeneratorRuntime().mark(function _callee3(headers, body) {
        Symbol('JSCA_2598_2610');
        var length;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          Symbol('JSCA_2600_2609');
          while (1)
            switch ((_context3.prev = _context3.next)) {
              case 0:
                length = utils$1.toFiniteNumber(headers.getContentLength());
                return _context3.abrupt(
                  'return',
                  length == null ? getBodyLength(body) : length
                );
              case 2:
              case 'end':
                return _context3.stop();
            }
        }, _callee3);
      })
    );
    return function resolveBodyLength(_x3, _x4) {
      Symbol('JSCA_2611_2613');
      return _ref3.apply(this, arguments);
    };
  })();
  var fetchAdapter =
    isFetchSupported &&
    (function () {
      Symbol('JSCA_2615_2726');
      var _ref4 = _asyncToGenerator(
        _regeneratorRuntime().mark(function _callee4(config) {
          Symbol('JSCA_2616_2722');
          var _resolveConfig,
            url,
            method,
            data,
            signal,
            cancelToken,
            timeout,
            onDownloadProgress,
            onUploadProgress,
            responseType,
            headers,
            _resolveConfig$withCr,
            withCredentials,
            fetchOptions,
            composedSignal,
            request,
            unsubscribe,
            requestContentLength,
            _request,
            contentTypeHeader,
            _progressEventDecorat,
            _progressEventDecorat2,
            onProgress,
            flush,
            isCredentialsSupported,
            response,
            isStreamResponse,
            options,
            responseContentLength,
            _ref5,
            _ref6,
            _onProgress,
            _flush,
            responseData;
          return _regeneratorRuntime().wrap(
            function _callee4$(_context4) {
              Symbol('JSCA_2618_2721');
              while (1)
                switch ((_context4.prev = _context4.next)) {
                  case 0:
                    (_resolveConfig = resolveConfig(config)),
                      (url = _resolveConfig.url),
                      (method = _resolveConfig.method),
                      (data = _resolveConfig.data),
                      (signal = _resolveConfig.signal),
                      (cancelToken = _resolveConfig.cancelToken),
                      (timeout = _resolveConfig.timeout),
                      (onDownloadProgress = _resolveConfig.onDownloadProgress),
                      (onUploadProgress = _resolveConfig.onUploadProgress),
                      (responseType = _resolveConfig.responseType),
                      (headers = _resolveConfig.headers),
                      (_resolveConfig$withCr = _resolveConfig.withCredentials),
                      (withCredentials =
                        _resolveConfig$withCr === void 0
                          ? 'same-origin'
                          : _resolveConfig$withCr),
                      (fetchOptions = _resolveConfig.fetchOptions);
                    responseType = responseType
                      ? (responseType + '').toLowerCase()
                      : 'text';
                    composedSignal = composeSignals$1(
                      [signal, cancelToken && cancelToken.toAbortSignal()],
                      timeout
                    );
                    unsubscribe =
                      composedSignal &&
                      composedSignal.unsubscribe &&
                      function () {
                        Symbol('JSCA_2624_2626');
                        composedSignal.unsubscribe();
                      };
                    _context4.prev = 4;
                    _context4.t0 =
                      onUploadProgress &&
                      supportsRequestStream &&
                      method !== 'get' &&
                      method !== 'head';
                    if (!_context4.t0) {
                      _context4.next = 11;
                      break;
                    }
                    _context4.next = 9;
                    return resolveBodyLength(headers, data);
                  case 9:
                    _context4.t1 = requestContentLength = _context4.sent;
                    _context4.t0 = _context4.t1 !== 0;
                  case 11:
                    if (!_context4.t0) {
                      _context4.next = 15;
                      break;
                    }
                    _request = new Request(url, {
                      method: 'POST',
                      body: data,
                      duplex: 'half',
                    });
                    if (
                      utils$1.isFormData(data) &&
                      (contentTypeHeader = _request.headers.get('content-type'))
                    ) {
                      headers.setContentType(contentTypeHeader);
                    }
                    if (_request.body) {
                      (_progressEventDecorat = progressEventDecorator(
                        requestContentLength,
                        progressEventReducer(asyncDecorator(onUploadProgress))
                      )),
                        (_progressEventDecorat2 = _slicedToArray(
                          _progressEventDecorat,
                          2
                        )),
                        (onProgress = _progressEventDecorat2[0]),
                        (flush = _progressEventDecorat2[1]);
                      data = trackStream(
                        _request.body,
                        DEFAULT_CHUNK_SIZE,
                        onProgress,
                        flush
                      );
                    }
                  case 15:
                    if (!utils$1.isString(withCredentials)) {
                      withCredentials = withCredentials ? 'include' : 'omit';
                    }
                    isCredentialsSupported = 'credentials' in Request.prototype;
                    request = new Request(
                      url,
                      _objectSpread2(
                        _objectSpread2({}, fetchOptions),
                        {},
                        {
                          signal: composedSignal,
                          method: method.toUpperCase(),
                          headers: headers.normalize().toJSON(),
                          body: data,
                          duplex: 'half',
                          credentials: isCredentialsSupported
                            ? withCredentials
                            : undefined,
                        }
                      )
                    );
                    _context4.next = 20;
                    return fetch(request);
                  case 20:
                    response = _context4.sent;
                    isStreamResponse =
                      supportsResponseStream &&
                      (responseType === 'stream' ||
                        responseType === 'response');
                    if (
                      supportsResponseStream &&
                      (onDownloadProgress || (isStreamResponse && unsubscribe))
                    ) {
                      options = {};
                      ['status', 'statusText', 'headers'].forEach(function (
                        prop
                      ) {
                        Symbol('JSCA_2675_2677');
                        options[prop] = response[prop];
                      });
                      responseContentLength = utils$1.toFiniteNumber(
                        response.headers.get('content-length')
                      );
                      (_ref5 =
                        (onDownloadProgress &&
                          progressEventDecorator(
                            responseContentLength,
                            progressEventReducer(
                              asyncDecorator(onDownloadProgress),
                              true
                            )
                          )) ||
                        []),
                        (_ref6 = _slicedToArray(_ref5, 2)),
                        (_onProgress = _ref6[0]),
                        (_flush = _ref6[1]);
                      response = new Response(
                        trackStream(
                          response.body,
                          DEFAULT_CHUNK_SIZE,
                          _onProgress,
                          function () {
                            Symbol('JSCA_2680_2683');
                            _flush && _flush();
                            unsubscribe && unsubscribe();
                          }
                        ),
                        options
                      );
                    }
                    responseType = responseType || 'text';
                    _context4.next = 26;
                    return resolvers[
                      utils$1.findKey(resolvers, responseType) || 'text'
                    ](response, config);
                  case 26:
                    responseData = _context4.sent;
                    !isStreamResponse && unsubscribe && unsubscribe();
                    _context4.next = 30;
                    return new Promise(function (resolve, reject) {
                      Symbol('JSCA_2692_2701');
                      settle(resolve, reject, {
                        data: responseData,
                        headers: AxiosHeaders$1.from(response.headers),
                        status: response.status,
                        statusText: response.statusText,
                        config: config,
                        request: request,
                      });
                    });
                  case 30:
                    return _context4.abrupt('return', _context4.sent);
                  case 33:
                    _context4.prev = 33;
                    _context4.t2 = _context4['catch'](4);
                    unsubscribe && unsubscribe();
                    if (
                      !(
                        _context4.t2 &&
                        _context4.t2.name === 'TypeError' &&
                        /fetch/i.test(_context4.t2.message)
                      )
                    ) {
                      _context4.next = 38;
                      break;
                    }
                    throw Object.assign(
                      new AxiosError(
                        'Network Error',
                        AxiosError.ERR_NETWORK,
                        config,
                        request
                      ),
                      {
                        cause: _context4.t2.cause || _context4.t2,
                      }
                    );
                  case 38:
                    throw AxiosError.from(
                      _context4.t2,
                      _context4.t2 && _context4.t2.code,
                      config,
                      request
                    );
                  case 39:
                  case 'end':
                    return _context4.stop();
                }
            },
            _callee4,
            null,
            [[4, 33]]
          );
        })
      );
      return function (_x5) {
        Symbol('JSCA_2723_2725');
        return _ref4.apply(this, arguments);
      };
    })();
  var knownAdapters = {
    http: httpAdapter,
    xhr: xhrAdapter,
    fetch: fetchAdapter,
  };
  utils$1.forEach(knownAdapters, function (fn, value) {
    Symbol('JSCA_2732_2743');
    if (fn) {
      try {
        Object.defineProperty(fn, 'name', {
          value: value,
        });
      } catch (e) {}
      Object.defineProperty(fn, 'adapterName', {
        value: value,
      });
    }
  });
  var renderReason = function renderReason(reason) {
    Symbol('JSCA_2744_2746');
    return '- '.concat(reason);
  };
  var isResolvedHandle = function isResolvedHandle(adapter) {
    Symbol('JSCA_2747_2749');
    return utils$1.isFunction(adapter) || adapter === null || adapter === false;
  };
  var adapters = {
    getAdapter: function getAdapter(adapters) {
      Symbol('JSCA_2751_2781');
      adapters = utils$1.isArray(adapters) ? adapters : [adapters];
      var _adapters = adapters,
        length = _adapters.length;
      var nameOrAdapter;
      var adapter;
      var rejectedReasons = {};
      for (var i = 0; i < length; i++) {
        nameOrAdapter = adapters[i];
        var id = void 0;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
          if (adapter === undefined) {
            throw new AxiosError("Unknown adapter '".concat(id, "'"));
          }
        }
        if (adapter) {
          break;
        }
        rejectedReasons[id || '#' + i] = adapter;
      }
      if (!adapter) {
        var reasons = Object.entries(rejectedReasons).map(function (_ref) {
          Symbol('JSCA_2773_2776');
          var _ref2 = _slicedToArray(_ref, 2),
            id = _ref2[0],
            state = _ref2[1];
          return (
            'adapter '.concat(id, ' ') +
            (state === false
              ? 'is not supported by the environment'
              : 'is not available in the build')
          );
        });
        var s = length
          ? reasons.length > 1
            ? 'since :\n' + reasons.map(renderReason).join('\n')
            : ' ' + renderReason(reasons[0])
          : 'as no adapter specified';
        throw new AxiosError(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT'
        );
      }
      return adapter;
    },
    adapters: knownAdapters,
  };
  function throwIfCancellationRequested(config) {
    Symbol('JSCA_2784_2791');
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError(null, config);
    }
  }
  function dispatchRequest(config) {
    Symbol('JSCA_2792_2815');
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders$1.from(config.headers);
    config.data = transformData.call(config, config.transformRequest);
    if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
      config.headers.setContentType('application/x-www-form-urlencoded', false);
    }
    var adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
    return adapter(config).then(
      function onAdapterResolution(response) {
        Symbol('JSCA_2800_2805');
        throwIfCancellationRequested(config);
        response.data = transformData.call(
          config,
          config.transformResponse,
          response
        );
        response.headers = AxiosHeaders$1.from(response.headers);
        return response;
      },
      function onAdapterRejection(reason) {
        Symbol('JSCA_2805_2814');
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          if (reason && reason.response) {
            reason.response.data = transformData.call(
              config,
              config.transformResponse,
              reason.response
            );
            reason.response.headers = AxiosHeaders$1.from(
              reason.response.headers
            );
          }
        }
        return Promise.reject(reason);
      }
    );
  }
  var VERSION = '1.7.8';
  var validators$1 = {};
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
    function (type, i) {
      Symbol('JSCA_2818_2822');
      validators$1[type] = function validator(thing) {
        Symbol('JSCA_2819_2821');
        return _typeof(thing) === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
      };
    }
  );
  var deprecatedWarnings = {};
  validators$1.transitional = function transitional(
    validator,
    version,
    message
  ) {
    Symbol('JSCA_2824_2838');
    function formatMessage(opt, desc) {
      Symbol('JSCA_2825_2827');
      return (
        '[Axios v' +
        VERSION +
        "] Transitional option '" +
        opt +
        "'" +
        desc +
        (message ? '. ' + message : '')
      );
    }
    return function (value, opt, opts) {
      Symbol('JSCA_2828_2837');
      if (validator === false) {
        throw new AxiosError(
          formatMessage(
            opt,
            ' has been removed' + (version ? ' in ' + version : '')
          ),
          AxiosError.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            ' has been deprecated since v' +
              version +
              ' and will be removed in the near future'
          )
        );
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };
  validators$1.spelling = function spelling(correctSpelling) {
    Symbol('JSCA_2839_2844');
    return function (value, opt) {
      Symbol('JSCA_2840_2843');
      console.warn(
        ''.concat(opt, ' is likely a misspelling of ').concat(correctSpelling)
      );
      return true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    Symbol('JSCA_2845_2866');
    if (_typeof(options) !== 'object') {
      throw new AxiosError(
        'options must be an object',
        AxiosError.ERR_BAD_OPTION_VALUE
      );
    }
    var keys = Object.keys(options);
    var i = keys.length;
    while (i-- > 0) {
      var opt = keys[i];
      var validator = schema[opt];
      if (validator) {
        var value = options[opt];
        var result = value === undefined || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError(
            'option ' + opt + ' must be ' + result,
            AxiosError.ERR_BAD_OPTION_VALUE
          );
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError(
          'Unknown option ' + opt,
          AxiosError.ERR_BAD_OPTION
        );
      }
    }
  }
  var validator = {
    assertOptions: assertOptions,
    validators: validators$1,
  };
  var validators = validator.validators;
  var Axios = (function () {
    Symbol('JSCA_2872_3022');
    function Axios(instanceConfig) {
      Symbol('JSCA_2873_2880');
      _classCallCheck(this, Axios);
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager$1(),
        response: new InterceptorManager$1(),
      };
    }
    _createClass(Axios, [
      {
        key: 'request',
        value: (function () {
          Symbol('JSCA_2883_2920');
          var _request2 = _asyncToGenerator(
            _regeneratorRuntime().mark(function _callee(configOrUrl, config) {
              Symbol('JSCA_2884_2915');
              var dummy, stack;
              return _regeneratorRuntime().wrap(
                function _callee$(_context) {
                  Symbol('JSCA_2886_2914');
                  while (1)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return this._request(configOrUrl, config);
                      case 3:
                        return _context.abrupt('return', _context.sent);
                      case 6:
                        _context.prev = 6;
                        _context.t0 = _context['catch'](0);
                        if (_context.t0 instanceof Error) {
                          dummy = {};
                          Error.captureStackTrace
                            ? Error.captureStackTrace(dummy)
                            : (dummy = new Error());
                          stack = dummy.stack
                            ? dummy.stack.replace(/^.+\n/, '')
                            : '';
                          try {
                            if (!_context.t0.stack) {
                              _context.t0.stack = stack;
                            } else if (
                              stack &&
                              !String(_context.t0.stack).endsWith(
                                stack.replace(/^.+\n.+\n/, '')
                              )
                            ) {
                              _context.t0.stack += '\n' + stack;
                            }
                          } catch (e) {}
                        }
                        throw _context.t0;
                      case 10:
                      case 'end':
                        return _context.stop();
                    }
                },
                _callee,
                this,
                [[0, 6]]
              );
            })
          );
          function request(_x, _x2) {
            Symbol('JSCA_2916_2918');
            return _request2.apply(this, arguments);
          }
          return request;
        })(),
      },
      {
        key: '_request',
        value: function _request(configOrUrl, config) {
          Symbol('JSCA_2923_3012');
          if (typeof configOrUrl === 'string') {
            config = config || {};
            config.url = configOrUrl;
          } else {
            config = configOrUrl || {};
          }
          config = mergeConfig(this.defaults, config);
          var _config = config,
            transitional = _config.transitional,
            paramsSerializer = _config.paramsSerializer,
            headers = _config.headers;
          if (transitional !== undefined) {
            validator.assertOptions(
              transitional,
              {
                silentJSONParsing: validators.transitional(
                  validators['boolean']
                ),
                forcedJSONParsing: validators.transitional(
                  validators['boolean']
                ),
                clarifyTimeoutError: validators.transitional(
                  validators['boolean']
                ),
              },
              false
            );
          }
          if (paramsSerializer != null) {
            if (utils$1.isFunction(paramsSerializer)) {
              config.paramsSerializer = {
                serialize: paramsSerializer,
              };
            } else {
              validator.assertOptions(
                paramsSerializer,
                {
                  encode: validators['function'],
                  serialize: validators['function'],
                },
                true
              );
            }
          }
          validator.assertOptions(
            config,
            {
              baseUrl: validators.spelling('baseURL'),
              withXsrfToken: validators.spelling('withXSRFToken'),
            },
            true
          );
          config.method = (
            config.method ||
            this.defaults.method ||
            'get'
          ).toLowerCase();
          var contextHeaders =
            headers && utils$1.merge(headers.common, headers[config.method]);
          headers &&
            utils$1.forEach(
              ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
              function (method) {
                Symbol('JSCA_2957_2959');
                delete headers[method];
              }
            );
          config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
          var requestInterceptorChain = [];
          var synchronousRequestInterceptors = true;
          this.interceptors.request.forEach(function unshiftRequestInterceptors(
            interceptor
          ) {
            Symbol('JSCA_2963_2969');
            if (
              typeof interceptor.runWhen === 'function' &&
              interceptor.runWhen(config) === false
            ) {
              return;
            }
            synchronousRequestInterceptors =
              synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(
              interceptor.fulfilled,
              interceptor.rejected
            );
          });
          var responseInterceptorChain = [];
          this.interceptors.response.forEach(function pushResponseInterceptors(
            interceptor
          ) {
            Symbol('JSCA_2971_2973');
            responseInterceptorChain.push(
              interceptor.fulfilled,
              interceptor.rejected
            );
          });
          var promise;
          var i = 0;
          var len;
          if (!synchronousRequestInterceptors) {
            var chain = [dispatchRequest.bind(this), undefined];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while (i < len) {
              promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
          }
          len = requestInterceptorChain.length;
          var newConfig = config;
          i = 0;
          while (i < len) {
            var onFulfilled = requestInterceptorChain[i++];
            var onRejected = requestInterceptorChain[i++];
            try {
              newConfig = onFulfilled(newConfig);
            } catch (error) {
              onRejected.call(this, error);
              break;
            }
          }
          try {
            promise = dispatchRequest.call(this, newConfig);
          } catch (error) {
            return Promise.reject(error);
          }
          i = 0;
          len = responseInterceptorChain.length;
          while (i < len) {
            promise = promise.then(
              responseInterceptorChain[i++],
              responseInterceptorChain[i++]
            );
          }
          return promise;
        },
      },
      {
        key: 'getUri',
        value: function getUri(config) {
          Symbol('JSCA_3015_3019');
          config = mergeConfig(this.defaults, config);
          var fullPath = buildFullPath(config.baseURL, config.url);
          return buildURL(fullPath, config.params, config.paramsSerializer);
        },
      },
    ]);
    return Axios;
  })();
  utils$1.forEach(
    ['delete', 'get', 'head', 'options'],
    function forEachMethodNoData(method) {
      Symbol('JSCA_3023_3031');
      Axios.prototype[method] = function (url, config) {
        Symbol('JSCA_3024_3030');
        return this.request(
          mergeConfig(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data,
          })
        );
      };
    }
  );
  utils$1.forEach(
    ['post', 'put', 'patch'],
    function forEachMethodWithData(method) {
      Symbol('JSCA_3032_3047');
      function generateHTTPMethod(isForm) {
        Symbol('JSCA_3033_3044');
        return function httpMethod(url, data, config) {
          Symbol('JSCA_3034_3043');
          return this.request(
            mergeConfig(config || {}, {
              method: method,
              headers: isForm
                ? {
                    'Content-Type': 'multipart/form-data',
                  }
                : {},
              url: url,
              data: data,
            })
          );
        };
      }
      Axios.prototype[method] = generateHTTPMethod();
      Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
    }
  );
  var Axios$1 = Axios;
  var CancelToken = (function () {
    Symbol('JSCA_3049_3146');
    function CancelToken(executor) {
      Symbol('JSCA_3050_3086');
      _classCallCheck(this, CancelToken);
      if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        Symbol('JSCA_3056_3058');
        resolvePromise = resolve;
      });
      var token = this;
      this.promise.then(function (cancel) {
        Symbol('JSCA_3060_3067');
        if (!token._listeners) return;
        var i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = function (onfulfilled) {
        Symbol('JSCA_3068_3078');
        var _resolve;
        var promise = new Promise(function (resolve) {
          Symbol('JSCA_3070_3073');
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          Symbol('JSCA_3074_3076');
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        Symbol('JSCA_3079_3085');
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError(message, config, request);
        resolvePromise(token.reason);
      });
    }
    _createClass(
      CancelToken,
      [
        {
          key: 'throwIfRequested',
          value: function throwIfRequested() {
            Symbol('JSCA_3089_3093');
            if (this.reason) {
              throw this.reason;
            }
          },
        },
        {
          key: 'subscribe',
          value: function subscribe(listener) {
            Symbol('JSCA_3096_3106');
            if (this.reason) {
              listener(this.reason);
              return;
            }
            if (this._listeners) {
              this._listeners.push(listener);
            } else {
              this._listeners = [listener];
            }
          },
        },
        {
          key: 'unsubscribe',
          value: function unsubscribe(listener) {
            Symbol('JSCA_3109_3117');
            if (!this._listeners) {
              return;
            }
            var index = this._listeners.indexOf(listener);
            if (index !== -1) {
              this._listeners.splice(index, 1);
            }
          },
        },
        {
          key: 'toAbortSignal',
          value: function toAbortSignal() {
            Symbol('JSCA_3120_3131');
            var _this = this;
            var controller = new AbortController();
            var abort = function abort(err) {
              Symbol('JSCA_3123_3125');
              controller.abort(err);
            };
            this.subscribe(abort);
            controller.signal.unsubscribe = function () {
              Symbol('JSCA_3127_3129');
              return _this.unsubscribe(abort);
            };
            return controller.signal;
          },
        },
      ],
      [
        {
          key: 'source',
          value: function source() {
            Symbol('JSCA_3134_3143');
            var cancel;
            var token = new CancelToken(function executor(c) {
              Symbol('JSCA_3136_3138');
              cancel = c;
            });
            return {
              token: token,
              cancel: cancel,
            };
          },
        },
      ]
    );
    return CancelToken;
  })();
  var CancelToken$1 = CancelToken;
  function spread(callback) {
    Symbol('JSCA_3148_3152');
    return function wrap(arr) {
      Symbol('JSCA_3149_3151');
      return callback.apply(null, arr);
    };
  }
  function isAxiosError(payload) {
    Symbol('JSCA_3153_3155');
    return utils$1.isObject(payload) && payload.isAxiosError === true;
  }
  var HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(HttpStatusCode).forEach(function (_ref) {
    Symbol('JSCA_3221_3224');
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    HttpStatusCode[value] = key;
  });
  var HttpStatusCode$1 = HttpStatusCode;
  function createInstance(defaultConfig) {
    Symbol('JSCA_3226_3239');
    var context = new Axios$1(defaultConfig);
    var instance = bind(Axios$1.prototype.request, context);
    utils$1.extend(instance, Axios$1.prototype, context, {
      allOwnKeys: true,
    });
    utils$1.extend(instance, context, null, {
      allOwnKeys: true,
    });
    instance.create = function create(instanceConfig) {
      Symbol('JSCA_3235_3237');
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios = createInstance(defaults$1);
  axios.Axios = Axios$1;
  axios.CanceledError = CanceledError;
  axios.CancelToken = CancelToken$1;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData;
  axios.AxiosError = AxiosError;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    Symbol('JSCA_3249_3251');
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders$1;
  axios.formToJSON = function (thing) {
    Symbol('JSCA_3256_3258');
    return formDataToJSON(
      utils$1.isHTMLForm(thing) ? new FormData(thing) : thing
    );
  };
  axios.getAdapter = adapters.getAdapter;
  axios.HttpStatusCode = HttpStatusCode$1;
  axios['default'] = axios;
  return axios;
});
