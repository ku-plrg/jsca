!(function (t) {
  var e =
    ('object' == typeof self && self.self === self && self) ||
    ('object' == typeof global && global.global === global && global);
  if ('function' == typeof define && define.amd)
    define(['underscore', 'jquery', 'exports'], function (i, n, s) {
      e.Backbone = t(e, s, i, n);
    });
  else if ('undefined' != typeof exports) {
    var i,
      n = require('underscore');
    try {
      i = require('jquery');
    } catch (t) {}
    t(e, exports, n, i);
  } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$);
})(function (t, e, i, n) {
  var s = t.Backbone,
    r = Array.prototype.slice;
  (e.VERSION = '1.6.0'),
    (e.$ = n),
    (e.noConflict = function () {
      return (t.Backbone = s), this;
    }),
    (e.emulateHTTP = !1),
    (e.emulateJSON = !1);
  var o,
    h = (e.Events = {}),
    a = /\s+/,
    u = function (t, e, n, s, r) {
      var o,
        h = 0;
      if (n && 'object' == typeof n) {
        void 0 !== s &&
          'context' in r &&
          void 0 === r.context &&
          (r.context = s);
        for (o = i.keys(n); h < o.length; h++) e = u(t, e, o[h], n[o[h]], r);
      } else if (n && a.test(n))
        for (o = n.split(a); h < o.length; h++) e = t(e, o[h], s, r);
      else e = t(e, n, s, r);
      return e;
    };
  (h.on = function (t, e, i) {
    ((this._events = u(l, this._events || {}, t, e, {
      context: i,
      ctx: this,
      listening: o,
    })),
    o) &&
      (((this._listeners || (this._listeners = {}))[o.id] = o),
      (o.interop = !1));
    return this;
  }),
    (h.listenTo = function (t, e, n) {
      if (!t) return this;
      var s = t._listenId || (t._listenId = i.uniqueId('l')),
        r = this._listeningTo || (this._listeningTo = {}),
        h = (o = r[s]);
      h ||
        (this._listenId || (this._listenId = i.uniqueId('l')),
        (h = o = r[s] = new v(this, t)));
      var a = c(t, e, n, this);
      if (((o = void 0), a)) throw a;
      return h.interop && h.on(e, n), this;
    });
  var l = function (t, e, i, n) {
      if (i) {
        var s = t[e] || (t[e] = []),
          r = n.context,
          o = n.ctx,
          h = n.listening;
        h && h.count++,
          s.push({ callback: i, context: r, ctx: r || o, listening: h });
      }
      return t;
    },
    c = function (t, e, i, n) {
      try {
        t.on(e, i, n);
      } catch (t) {
        return t;
      }
    };
  (h.off = function (t, e, i) {
    return this._events
      ? ((this._events = u(d, this._events, t, e, {
          context: i,
          listeners: this._listeners,
        })),
        this)
      : this;
  }),
    (h.stopListening = function (t, e, n) {
      var s = this._listeningTo;
      if (!s) return this;
      for (var r = t ? [t._listenId] : i.keys(s), o = 0; o < r.length; o++) {
        var h = s[r[o]];
        if (!h) break;
        h.obj.off(e, n, this), h.interop && h.off(e, n);
      }
      return i.isEmpty(s) && (this._listeningTo = void 0), this;
    });
  var d = function (t, e, n, s) {
    if (t) {
      var r,
        o = s.context,
        h = s.listeners,
        a = 0;
      if (e || o || n) {
        for (r = e ? [e] : i.keys(t); a < r.length; a++) {
          var u = t[(e = r[a])];
          if (!u) break;
          for (var l = [], c = 0; c < u.length; c++) {
            var d = u[c];
            if (
              (n && n !== d.callback && n !== d.callback._callback) ||
              (o && o !== d.context)
            )
              l.push(d);
            else {
              var f = d.listening;
              f && f.off(e, n);
            }
          }
          l.length ? (t[e] = l) : delete t[e];
        }
        return t;
      }
      for (r = i.keys(h); a < r.length; a++) h[r[a]].cleanup();
    }
  };
  (h.once = function (t, e, i) {
    var n = u(f, {}, t, e, this.off.bind(this));
    return 'string' == typeof t && null == i && (e = void 0), this.on(n, e, i);
  }),
    (h.listenToOnce = function (t, e, i) {
      var n = u(f, {}, e, i, this.stopListening.bind(this, t));
      return this.listenTo(t, n);
    });
  var f = function (t, e, n, s) {
    if (n) {
      var r = (t[e] = i.once(function () {
        s(e, r), n.apply(this, arguments);
      }));
      r._callback = n;
    }
    return t;
  };
  h.trigger = function (t) {
    if (!this._events) return this;
    for (
      var e = Math.max(0, arguments.length - 1), i = Array(e), n = 0;
      n < e;
      n++
    )
      i[n] = arguments[n + 1];
    return u(p, this._events, t, void 0, i), this;
  };
  var p = function (t, e, i, n) {
      if (t) {
        var s = t[e],
          r = t.all;
        s && r && (r = r.slice()), s && g(s, n), r && g(r, [e].concat(n));
      }
      return t;
    },
    g = function (t, e) {
      var i,
        n = -1,
        s = t.length,
        r = e[0],
        o = e[1],
        h = e[2];
      switch (e.length) {
        case 0:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx);
          return;
        case 1:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r);
          return;
        case 2:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r, o);
          return;
        case 3:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r, o, h);
          return;
        default:
          for (; ++n < s; ) (i = t[n]).callback.apply(i.ctx, e);
          return;
      }
    },
    v = function (t, e) {
      (this.id = t._listenId),
        (this.listener = t),
        (this.obj = e),
        (this.interop = !0),
        (this.count = 0),
        (this._events = void 0);
    };
  (v.prototype.on = h.on),
    (v.prototype.off = function (t, e) {
      var i;
      this.interop
        ? ((this._events = u(d, this._events, t, e, {
            context: void 0,
            listeners: void 0,
          })),
          (i = !this._events))
        : (this.count--, (i = 0 === this.count)),
        i && this.cleanup();
    }),
    (v.prototype.cleanup = function () {
      delete this.listener._listeningTo[this.obj._listenId],
        this.interop || delete this.obj._listeners[this.id];
    }),
    (h.bind = h.on),
    (h.unbind = h.off),
    i.extend(e, h);
  var m = (e.Model = function (t, e) {
    var n = t || {};
    e || (e = {}),
      this.preinitialize.apply(this, arguments),
      (this.cid = i.uniqueId(this.cidPrefix)),
      (this.attributes = {}),
      e.collection && (this.collection = e.collection),
      e.parse && (n = this.parse(n, e) || {});
    var s = i.result(this, 'defaults');
    (n = i.defaults(i.extend({}, s, n), s)),
      this.set(n, e),
      (this.changed = {}),
      this.initialize.apply(this, arguments);
  });
  i.extend(m.prototype, h, {
    changed: null,
    validationError: null,
    idAttribute: 'id',
    cidPrefix: 'c',
    preinitialize: function () {},
    initialize: function () {},
    toJSON: function (t) {
      return i.clone(this.attributes);
    },
    sync: function () {
      return e.sync.apply(this, arguments);
    },
    get: function (t) {
      return this.attributes[t];
    },
    escape: function (t) {
      return i.escape(this.get(t));
    },
    has: function (t) {
      return null != this.get(t);
    },
    matches: function (t) {
      return !!i.iteratee(t, this)(this.attributes);
    },
    set: function (t, e, n) {
      if (null == t) return this;
      var s;
      if (
        ('object' == typeof t ? ((s = t), (n = e)) : ((s = {})[t] = e),
        n || (n = {}),
        !this._validate(s, n))
      )
        return !1;
      var r = n.unset,
        o = n.silent,
        h = [],
        a = this._changing;
      (this._changing = !0),
        a ||
          ((this._previousAttributes = i.clone(this.attributes)),
          (this.changed = {}));
      var u = this.attributes,
        l = this.changed,
        c = this._previousAttributes;
      for (var d in s)
        (e = s[d]),
          i.isEqual(u[d], e) || h.push(d),
          i.isEqual(c[d], e) ? delete l[d] : (l[d] = e),
          r ? delete u[d] : (u[d] = e);
      if (this.idAttribute in s) {
        var f = this.id;
        (this.id = this.get(this.idAttribute)),
          this.trigger('changeId', this, f, n);
      }
      if (!o) {
        h.length && (this._pending = n);
        for (var p = 0; p < h.length; p++)
          this.trigger('change:' + h[p], this, u[h[p]], n);
      }
      if (a) return this;
      if (!o)
        for (; this._pending; )
          (n = this._pending),
            (this._pending = !1),
            this.trigger('change', this, n);
      return (this._pending = !1), (this._changing = !1), this;
    },
    unset: function (t, e) {
      return this.set(t, void 0, i.extend({}, e, { unset: !0 }));
    },
    clear: function (t) {
      var e = {};
      for (var n in this.attributes) e[n] = void 0;
      return this.set(e, i.extend({}, t, { unset: !0 }));
    },
    hasChanged: function (t) {
      return null == t ? !i.isEmpty(this.changed) : i.has(this.changed, t);
    },
    changedAttributes: function (t) {
      if (!t) return !!this.hasChanged() && i.clone(this.changed);
      var e,
        n = this._changing ? this._previousAttributes : this.attributes,
        s = {};
      for (var r in t) {
        var o = t[r];
        i.isEqual(n[r], o) || ((s[r] = o), (e = !0));
      }
      return !!e && s;
    },
    previous: function (t) {
      return null != t && this._previousAttributes
        ? this._previousAttributes[t]
        : null;
    },
    previousAttributes: function () {
      return i.clone(this._previousAttributes);
    },
    fetch: function (t) {
      t = i.extend({ parse: !0 }, t);
      var e = this,
        n = t.success;
      return (
        (t.success = function (i) {
          var s = t.parse ? e.parse(i, t) : i;
          if (!e.set(s, t)) return !1;
          n && n.call(t.context, e, i, t), e.trigger('sync', e, i, t);
        }),
        L(this, t),
        this.sync('read', this, t)
      );
    },
    save: function (t, e, n) {
      var s;
      null == t || 'object' == typeof t
        ? ((s = t), (n = e))
        : ((s = {})[t] = e);
      var r = (n = i.extend({ validate: !0, parse: !0 }, n)).wait;
      if (s && !r) {
        if (!this.set(s, n)) return !1;
      } else if (!this._validate(s, n)) return !1;
      var o = this,
        h = n.success,
        a = this.attributes;
      (n.success = function (t) {
        o.attributes = a;
        var e = n.parse ? o.parse(t, n) : t;
        if ((r && (e = i.extend({}, s, e)), e && !o.set(e, n))) return !1;
        h && h.call(n.context, o, t, n), o.trigger('sync', o, t, n);
      }),
        L(this, n),
        s && r && (this.attributes = i.extend({}, a, s));
      var u = this.isNew() ? 'create' : n.patch ? 'patch' : 'update';
      'patch' !== u || n.attrs || (n.attrs = s);
      var l = this.sync(u, this, n);
      return (this.attributes = a), l;
    },
    destroy: function (t) {
      t = t ? i.clone(t) : {};
      var e = this,
        n = t.success,
        s = t.wait,
        r = function () {
          e.stopListening(), e.trigger('destroy', e, e.collection, t);
        };
      t.success = function (i) {
        s && r(),
          n && n.call(t.context, e, i, t),
          e.isNew() || e.trigger('sync', e, i, t);
      };
      var o = !1;
      return (
        this.isNew()
          ? i.defer(t.success)
          : (L(this, t), (o = this.sync('delete', this, t))),
        s || r(),
        o
      );
    },
    url: function () {
      var t =
        i.result(this, 'urlRoot') || i.result(this.collection, 'url') || J();
      if (this.isNew()) return t;
      var e = this.get(this.idAttribute);
      return t.replace(/[^\/]$/, '$&/') + encodeURIComponent(e);
    },
    parse: function (t, e) {
      return t;
    },
    clone: function () {
      return new this.constructor(this.attributes);
    },
    isNew: function () {
      return !this.has(this.idAttribute);
    },
    isValid: function (t) {
      return this._validate({}, i.extend({}, t, { validate: !0 }));
    },
    _validate: function (t, e) {
      if (!e.validate || !this.validate) return !0;
      t = i.extend({}, this.attributes, t);
      var n = (this.validationError = this.validate(t, e) || null);
      return (
        !n ||
        (this.trigger('invalid', this, n, i.extend(e, { validationError: n })),
        !1)
      );
    },
  });
  var _ = (e.Collection = function (t, e) {
      e || (e = {}),
        this.preinitialize.apply(this, arguments),
        e.model && (this.model = e.model),
        void 0 !== e.comparator && (this.comparator = e.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        t && this.reset(t, i.extend({ silent: !0 }, e));
    }),
    y = { add: !0, remove: !0, merge: !0 },
    b = { add: !0, remove: !1 },
    x = function (t, e, i) {
      i = Math.min(Math.max(i, 0), t.length);
      var n,
        s = Array(t.length - i),
        r = e.length;
      for (n = 0; n < s.length; n++) s[n] = t[n + i];
      for (n = 0; n < r; n++) t[n + i] = e[n];
      for (n = 0; n < s.length; n++) t[n + r + i] = s[n];
    };
  i.extend(_.prototype, h, {
    model: m,
    preinitialize: function () {},
    initialize: function () {},
    toJSON: function (t) {
      return this.map(function (e) {
        return e.toJSON(t);
      });
    },
    sync: function () {
      return e.sync.apply(this, arguments);
    },
    add: function (t, e) {
      return this.set(t, i.extend({ merge: !1 }, e, b));
    },
    remove: function (t, e) {
      e = i.extend({}, e);
      var n = !i.isArray(t);
      t = n ? [t] : t.slice();
      var s = this._removeModels(t, e);
      return (
        !e.silent &&
          s.length &&
          ((e.changes = { added: [], merged: [], removed: s }),
          this.trigger('update', this, e)),
        n ? s[0] : s
      );
    },
    set: function (t, e) {
      if (null != t) {
        (e = i.extend({}, y, e)).parse &&
          !this._isModel(t) &&
          (t = this.parse(t, e) || []);
        var n = !i.isArray(t);
        t = n ? [t] : t.slice();
        var s = e.at;
        null != s && (s = +s),
          s > this.length && (s = this.length),
          s < 0 && (s += this.length + 1);
        var r,
          o,
          h = [],
          a = [],
          u = [],
          l = [],
          c = {},
          d = e.add,
          f = e.merge,
          p = e.remove,
          g = !1,
          v = this.comparator && null == s && !1 !== e.sort,
          m = i.isString(this.comparator) ? this.comparator : null;
        for (o = 0; o < t.length; o++) {
          r = t[o];
          var _ = this.get(r);
          if (_) {
            if (f && r !== _) {
              var b = this._isModel(r) ? r.attributes : r;
              e.parse && (b = _.parse(b, e)),
                _.set(b, e),
                u.push(_),
                v && !g && (g = _.hasChanged(m));
            }
            c[_.cid] || ((c[_.cid] = !0), h.push(_)), (t[o] = _);
          } else
            d &&
              (r = t[o] = this._prepareModel(r, e)) &&
              (a.push(r), this._addReference(r, e), (c[r.cid] = !0), h.push(r));
        }
        if (p) {
          for (o = 0; o < this.length; o++)
            c[(r = this.models[o]).cid] || l.push(r);
          l.length && this._removeModels(l, e);
        }
        var w = !1,
          E = !v && d && p;
        if (
          (h.length && E
            ? ((w =
                this.length !== h.length ||
                i.some(this.models, function (t, e) {
                  return t !== h[e];
                })),
              (this.models.length = 0),
              x(this.models, h, 0),
              (this.length = this.models.length))
            : a.length &&
              (v && (g = !0),
              x(this.models, a, null == s ? this.length : s),
              (this.length = this.models.length)),
          g && this.sort({ silent: !0 }),
          !e.silent)
        ) {
          for (o = 0; o < a.length; o++)
            null != s && (e.index = s + o),
              (r = a[o]).trigger('add', r, this, e);
          (g || w) && this.trigger('sort', this, e),
            (a.length || l.length || u.length) &&
              ((e.changes = { added: a, removed: l, merged: u }),
              this.trigger('update', this, e));
        }
        return n ? t[0] : t;
      }
    },
    reset: function (t, e) {
      e = e ? i.clone(e) : {};
      for (var n = 0; n < this.models.length; n++)
        this._removeReference(this.models[n], e);
      return (
        (e.previousModels = this.models),
        this._reset(),
        (t = this.add(t, i.extend({ silent: !0 }, e))),
        e.silent || this.trigger('reset', this, e),
        t
      );
    },
    push: function (t, e) {
      return this.add(t, i.extend({ at: this.length }, e));
    },
    pop: function (t) {
      var e = this.at(this.length - 1);
      return this.remove(e, t);
    },
    unshift: function (t, e) {
      return this.add(t, i.extend({ at: 0 }, e));
    },
    shift: function (t) {
      var e = this.at(0);
      return this.remove(e, t);
    },
    slice: function () {
      return r.apply(this.models, arguments);
    },
    get: function (t) {
      if (null != t)
        return (
          this._byId[t] ||
          this._byId[
            this.modelId(this._isModel(t) ? t.attributes : t, t.idAttribute)
          ] ||
          (t.cid && this._byId[t.cid])
        );
    },
    has: function (t) {
      return null != this.get(t);
    },
    at: function (t) {
      return t < 0 && (t += this.length), this.models[t];
    },
    where: function (t, e) {
      return this[e ? 'find' : 'filter'](t);
    },
    findWhere: function (t) {
      return this.where(t, !0);
    },
    sort: function (t) {
      var e = this.comparator;
      if (!e) throw new Error('Cannot sort a set without a comparator');
      t || (t = {});
      var n = e.length;
      return (
        i.isFunction(e) && (e = e.bind(this)),
        1 === n || i.isString(e)
          ? (this.models = this.sortBy(e))
          : this.models.sort(e),
        t.silent || this.trigger('sort', this, t),
        this
      );
    },
    pluck: function (t) {
      return this.map(t + '');
    },
    fetch: function (t) {
      var e = (t = i.extend({ parse: !0 }, t)).success,
        n = this;
      return (
        (t.success = function (i) {
          var s = t.reset ? 'reset' : 'set';
          n[s](i, t),
            e && e.call(t.context, n, i, t),
            n.trigger('sync', n, i, t);
        }),
        L(this, t),
        this.sync('read', this, t)
      );
    },
    create: function (t, e) {
      var n = (e = e ? i.clone(e) : {}).wait;
      if (!(t = this._prepareModel(t, e))) return !1;
      n || this.add(t, e);
      var s = this,
        r = e.success;
      return (
        (e.success = function (t, e, i) {
          n && (t.off('error', s._forwardPristineError, s), s.add(t, i)),
            r && r.call(i.context, t, e, i);
        }),
        n && t.once('error', this._forwardPristineError, this),
        t.save(null, e),
        t
      );
    },
    parse: function (t, e) {
      return t;
    },
    clone: function () {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator,
      });
    },
    modelId: function (t, e) {
      return t[e || this.model.prototype.idAttribute || 'id'];
    },
    values: function () {
      return new E(this, S);
    },
    keys: function () {
      return new E(this, I);
    },
    entries: function () {
      return new E(this, k);
    },
    _reset: function () {
      (this.length = 0), (this.models = []), (this._byId = {});
    },
    _prepareModel: function (t, e) {
      return this._isModel(t)
        ? (t.collection || (t.collection = this), t)
        : (((e = e ? i.clone(e) : {}).collection = this),
          (n = this.model.prototype ? new this.model(t, e) : this.model(t, e))
            .validationError
            ? (this.trigger('invalid', this, n.validationError, e), !1)
            : n);
      var n;
    },
    _removeModels: function (t, e) {
      for (var i = [], n = 0; n < t.length; n++) {
        var s = this.get(t[n]);
        if (s) {
          var r = this.indexOf(s);
          this.models.splice(r, 1), this.length--, delete this._byId[s.cid];
          var o = this.modelId(s.attributes, s.idAttribute);
          null != o && delete this._byId[o],
            e.silent || ((e.index = r), s.trigger('remove', s, this, e)),
            i.push(s),
            this._removeReference(s, e);
        }
      }
      return t.length > 0 && !e.silent && delete e.index, i;
    },
    _isModel: function (t) {
      return t instanceof m;
    },
    _addReference: function (t, e) {
      this._byId[t.cid] = t;
      var i = this.modelId(t.attributes, t.idAttribute);
      null != i && (this._byId[i] = t), t.on('all', this._onModelEvent, this);
    },
    _removeReference: function (t, e) {
      delete this._byId[t.cid];
      var i = this.modelId(t.attributes, t.idAttribute);
      null != i && delete this._byId[i],
        this === t.collection && delete t.collection,
        t.off('all', this._onModelEvent, this);
    },
    _onModelEvent: function (t, e, i, n) {
      if (e) {
        if (('add' === t || 'remove' === t) && i !== this) return;
        if (('destroy' === t && this.remove(e, n), 'changeId' === t)) {
          var s = this.modelId(e.previousAttributes(), e.idAttribute),
            r = this.modelId(e.attributes, e.idAttribute);
          null != s && delete this._byId[s], null != r && (this._byId[r] = e);
        }
      }
      this.trigger.apply(this, arguments);
    },
    _forwardPristineError: function (t, e, i) {
      this.has(t) || this._onModelEvent('error', t, e, i);
    },
  });
  var w = 'function' == typeof Symbol && Symbol.iterator;
  w && (_.prototype[w] = _.prototype.values);
  var E = function (t, e) {
      (this._collection = t), (this._kind = e), (this._index = 0);
    },
    S = 1,
    I = 2,
    k = 3;
  w &&
    (E.prototype[w] = function () {
      return this;
    }),
    (E.prototype.next = function () {
      if (this._collection) {
        if (this._index < this._collection.length) {
          var t,
            e = this._collection.at(this._index);
          if ((this._index++, this._kind === S)) t = e;
          else {
            var i = this._collection.modelId(e.attributes, e.idAttribute);
            t = this._kind === I ? i : [i, e];
          }
          return { value: t, done: !1 };
        }
        this._collection = void 0;
      }
      return { value: void 0, done: !0 };
    });
  var A = (e.View = function (t) {
      (this.cid = i.uniqueId('view')),
        this.preinitialize.apply(this, arguments),
        i.extend(this, i.pick(t, T)),
        this._ensureElement(),
        this.initialize.apply(this, arguments);
    }),
    P = /^(\S+)\s*(.*)$/,
    T = [
      'model',
      'collection',
      'el',
      'id',
      'attributes',
      'className',
      'tagName',
      'events',
    ];
  i.extend(A.prototype, h, {
    tagName: 'div',
    $: function (t) {
      return this.$el.find(t);
    },
    preinitialize: function () {},
    initialize: function () {},
    render: function () {
      return this;
    },
    remove: function () {
      return this._removeElement(), this.stopListening(), this;
    },
    _removeElement: function () {
      this.$el.remove();
    },
    setElement: function (t) {
      return (
        this.undelegateEvents(),
        this._setElement(t),
        this.delegateEvents(),
        this
      );
    },
    _setElement: function (t) {
      (this.$el = t instanceof e.$ ? t : e.$(t)), (this.el = this.$el[0]);
    },
    delegateEvents: function (t) {
      if ((t || (t = i.result(this, 'events')), !t)) return this;
      for (var e in (this.undelegateEvents(), t)) {
        var n = t[e];
        if ((i.isFunction(n) || (n = this[n]), n)) {
          var s = e.match(P);
          this.delegate(s[1], s[2], n.bind(this));
        }
      }
      return this;
    },
    delegate: function (t, e, i) {
      return this.$el.on(t + '.delegateEvents' + this.cid, e, i), this;
    },
    undelegateEvents: function () {
      return this.$el && this.$el.off('.delegateEvents' + this.cid), this;
    },
    undelegate: function (t, e, i) {
      return this.$el.off(t + '.delegateEvents' + this.cid, e, i), this;
    },
    _createElement: function (t) {
      return document.createElement(t);
    },
    _ensureElement: function () {
      if (this.el) this.setElement(i.result(this, 'el'));
      else {
        var t = i.extend({}, i.result(this, 'attributes'));
        this.id && (t.id = i.result(this, 'id')),
          this.className && (t.class = i.result(this, 'className')),
          this.setElement(this._createElement(i.result(this, 'tagName'))),
          this._setAttributes(t);
      }
    },
    _setAttributes: function (t) {
      this.$el.attr(t);
    },
  });
  var H = function (t, e, n, s) {
      i.each(n, function (i, n) {
        e[n] &&
          (t.prototype[n] = (function (t, e, i, n) {
            switch (e) {
              case 1:
                return function () {
                  return t[i](this[n]);
                };
              case 2:
                return function (e) {
                  return t[i](this[n], e);
                };
              case 3:
                return function (e, s) {
                  return t[i](this[n], $(e, this), s);
                };
              case 4:
                return function (e, s, r) {
                  return t[i](this[n], $(e, this), s, r);
                };
              default:
                return function () {
                  var e = r.call(arguments);
                  return e.unshift(this[n]), t[i].apply(t, e);
                };
            }
          })(e, i, n, s));
      });
    },
    $ = function (t, e) {
      return i.isFunction(t)
        ? t
        : i.isObject(t) && !e._isModel(t)
        ? C(t)
        : i.isString(t)
        ? function (e) {
            return e.get(t);
          }
        : t;
    },
    C = function (t) {
      var e = i.matches(t);
      return function (t) {
        return e(t.attributes);
      };
    };
  i.each(
    [
      [
        _,
        {
          forEach: 3,
          each: 3,
          map: 3,
          collect: 3,
          reduce: 0,
          foldl: 0,
          inject: 0,
          reduceRight: 0,
          foldr: 0,
          find: 3,
          detect: 3,
          filter: 3,
          select: 3,
          reject: 3,
          every: 3,
          all: 3,
          some: 3,
          any: 3,
          include: 3,
          includes: 3,
          contains: 3,
          invoke: 0,
          max: 3,
          min: 3,
          toArray: 1,
          size: 1,
          first: 3,
          head: 3,
          take: 3,
          initial: 3,
          rest: 3,
          tail: 3,
          drop: 3,
          last: 3,
          without: 0,
          difference: 0,
          indexOf: 3,
          shuffle: 1,
          lastIndexOf: 3,
          isEmpty: 1,
          chain: 1,
          sample: 3,
          partition: 3,
          groupBy: 3,
          countBy: 3,
          sortBy: 3,
          indexBy: 3,
          findIndex: 3,
          findLastIndex: 3,
        },
        'models',
      ],
      [
        m,
        {
          keys: 1,
          values: 1,
          pairs: 1,
          invert: 1,
          pick: 0,
          omit: 0,
          chain: 1,
          isEmpty: 1,
        },
        'attributes',
      ],
    ],
    function (t) {
      var e = t[0],
        n = t[1],
        s = t[2];
      (e.mixin = function (t) {
        var n = i.reduce(
          i.functions(t),
          function (t, e) {
            return (t[e] = 0), t;
          },
          {}
        );
        H(e, t, n, s);
      }),
        H(e, i, n, s);
    }
  ),
    (e.sync = function (t, n, s) {
      var r = R[t];
      i.defaults(s || (s = {}), {
        emulateHTTP: e.emulateHTTP,
        emulateJSON: e.emulateJSON,
      });
      var o = { type: r, dataType: 'json' };
      if (
        (s.url || (o.url = i.result(n, 'url') || J()),
        null != s.data ||
          !n ||
          ('create' !== t && 'update' !== t && 'patch' !== t) ||
          ((o.contentType = 'application/json'),
          (o.data = JSON.stringify(s.attrs || n.toJSON(s)))),
        s.emulateJSON &&
          ((o.contentType = 'application/x-www-form-urlencoded'),
          (o.data = o.data ? { model: o.data } : {})),
        s.emulateHTTP && ('PUT' === r || 'DELETE' === r || 'PATCH' === r))
      ) {
        (o.type = 'POST'), s.emulateJSON && (o.data._method = r);
        var h = s.beforeSend;
        s.beforeSend = function (t) {
          if ((t.setRequestHeader('X-HTTP-Method-Override', r), h))
            return h.apply(this, arguments);
        };
      }
      'GET' === o.type || s.emulateJSON || (o.processData = !1);
      var a = s.error;
      s.error = function (t, e, i) {
        (s.textStatus = e),
          (s.errorThrown = i),
          a && a.call(s.context, t, e, i);
      };
      var u = (s.xhr = e.ajax(i.extend(o, s)));
      return n.trigger('request', n, u, s), u;
    });
  var R = {
    create: 'POST',
    update: 'PUT',
    patch: 'PATCH',
    delete: 'DELETE',
    read: 'GET',
  };
  e.ajax = function () {
    return e.$.ajax.apply(e.$, arguments);
  };
  var M = (e.Router = function (t) {
      t || (t = {}),
        this.preinitialize.apply(this, arguments),
        t.routes && (this.routes = t.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments);
    }),
    N = /\((.*?)\)/g,
    j = /(\(\?)?:\w+/g,
    O = /\*\w+/g,
    U = /[\-{}\[\]+?.,\\\^$|#\s]/g;
  i.extend(M.prototype, h, {
    preinitialize: function () {},
    initialize: function () {},
    route: function (t, n, s) {
      i.isRegExp(t) || (t = this._routeToRegExp(t)),
        i.isFunction(n) && ((s = n), (n = '')),
        s || (s = this[n]);
      var r = this;
      return (
        e.history.route(t, function (i) {
          var o = r._extractParameters(t, i);
          !1 !== r.execute(s, o, n) &&
            (r.trigger.apply(r, ['route:' + n].concat(o)),
            r.trigger('route', n, o),
            e.history.trigger('route', r, n, o));
        }),
        this
      );
    },
    execute: function (t, e, i) {
      t && t.apply(this, e);
    },
    navigate: function (t, i) {
      return e.history.navigate(t, i), this;
    },
    _bindRoutes: function () {
      if (this.routes) {
        this.routes = i.result(this, 'routes');
        for (var t, e = i.keys(this.routes); null != (t = e.pop()); )
          this.route(t, this.routes[t]);
      }
    },
    _routeToRegExp: function (t) {
      return (
        (t = t
          .replace(U, '\\$&')
          .replace(N, '(?:$1)?')
          .replace(j, function (t, e) {
            return e ? t : '([^/?]+)';
          })
          .replace(O, '([^?]*?)')),
        new RegExp('^' + t + '(?:\\?([\\s\\S]*))?$')
      );
    },
    _extractParameters: function (t, e) {
      var n = t.exec(e).slice(1);
      return i.map(n, function (t, e) {
        return e === n.length - 1
          ? t || null
          : t
          ? decodeURIComponent(t)
          : null;
      });
    },
  });
  var z = (e.History = function () {
      (this.handlers = []),
        (this.checkUrl = this.checkUrl.bind(this)),
        'undefined' != typeof window &&
          ((this.location = window.location), (this.history = window.history));
    }),
    q = /^[#\/]|\s+$/g,
    F = /^\/+|\/+$/g,
    B = /#.*$/;
  (z.started = !1),
    i.extend(z.prototype, h, {
      interval: 50,
      atRoot: function () {
        return (
          this.location.pathname.replace(/[^\/]$/, '$&/') === this.root &&
          !this.getSearch()
        );
      },
      matchRoot: function () {
        return (
          this.decodeFragment(this.location.pathname).slice(
            0,
            this.root.length - 1
          ) +
            '/' ===
          this.root
        );
      },
      decodeFragment: function (t) {
        return decodeURI(t.replace(/%25/g, '%2525'));
      },
      getSearch: function () {
        var t = this.location.href.replace(/#.*/, '').match(/\?.+/);
        return t ? t[0] : '';
      },
      getHash: function (t) {
        var e = (t || this).location.href.match(/#(.*)$/);
        return e ? e[1] : '';
      },
      getPath: function () {
        var t = this.decodeFragment(
          this.location.pathname + this.getSearch()
        ).slice(this.root.length - 1);
        return '/' === t.charAt(0) ? t.slice(1) : t;
      },
      getFragment: function (t) {
        return (
          null == t &&
            (t =
              this._usePushState || !this._wantsHashChange
                ? this.getPath()
                : this.getHash()),
          t.replace(q, '')
        );
      },
      start: function (t) {
        if (z.started)
          throw new Error('Backbone.history has already been started');
        if (
          ((z.started = !0),
          (this.options = i.extend({ root: '/' }, this.options, t)),
          (this.root = this.options.root),
          (this._trailingSlash = this.options.trailingSlash),
          (this._wantsHashChange = !1 !== this.options.hashChange),
          (this._hasHashChange =
            'onhashchange' in window &&
            (void 0 === document.documentMode || document.documentMode > 7)),
          (this._useHashChange = this._wantsHashChange && this._hasHashChange),
          (this._wantsPushState = !!this.options.pushState),
          (this._hasPushState = !(!this.history || !this.history.pushState)),
          (this._usePushState = this._wantsPushState && this._hasPushState),
          (this.fragment = this.getFragment()),
          (this.root = ('/' + this.root + '/').replace(F, '/')),
          this._wantsHashChange && this._wantsPushState)
        ) {
          if (!this._hasPushState && !this.atRoot()) {
            var e = this.root.slice(0, -1) || '/';
            return this.location.replace(e + '#' + this.getPath()), !0;
          }
          this._hasPushState &&
            this.atRoot() &&
            this.navigate(this.getHash(), { replace: !0 });
        }
        if (
          !this._hasHashChange &&
          this._wantsHashChange &&
          !this._usePushState
        ) {
          (this.iframe = document.createElement('iframe')),
            (this.iframe.src = 'javascript:0'),
            (this.iframe.style.display = 'none'),
            (this.iframe.tabIndex = -1);
          var n = document.body,
            s = n.insertBefore(this.iframe, n.firstChild).contentWindow;
          s.document.open(),
            s.document.close(),
            (s.location.hash = '#' + this.fragment);
        }
        var r =
          window.addEventListener ||
          function (t, e) {
            return attachEvent('on' + t, e);
          };
        if (
          (this._usePushState
            ? r('popstate', this.checkUrl, !1)
            : this._useHashChange && !this.iframe
            ? r('hashchange', this.checkUrl, !1)
            : this._wantsHashChange &&
              (this._checkUrlInterval = setInterval(
                this.checkUrl,
                this.interval
              )),
          !this.options.silent)
        )
          return this.loadUrl();
      },
      stop: function () {
        var t =
          window.removeEventListener ||
          function (t, e) {
            return detachEvent('on' + t, e);
          };
        this._usePushState
          ? t('popstate', this.checkUrl, !1)
          : this._useHashChange &&
            !this.iframe &&
            t('hashchange', this.checkUrl, !1),
          this.iframe &&
            (document.body.removeChild(this.iframe), (this.iframe = null)),
          this._checkUrlInterval && clearInterval(this._checkUrlInterval),
          (z.started = !1);
      },
      route: function (t, e) {
        this.handlers.unshift({ route: t, callback: e });
      },
      checkUrl: function (t) {
        var e = this.getFragment();
        if (
          (e === this.fragment &&
            this.iframe &&
            (e = this.getHash(this.iframe.contentWindow)),
          e === this.fragment)
        )
          return !this.matchRoot() && this.notfound();
        this.iframe && this.navigate(e), this.loadUrl();
      },
      loadUrl: function (t) {
        return this.matchRoot()
          ? ((t = this.fragment = this.getFragment(t)),
            i.some(this.handlers, function (e) {
              if (e.route.test(t)) return e.callback(t), !0;
            }) || this.notfound())
          : this.notfound();
      },
      notfound: function () {
        return this.trigger('notfound'), !1;
      },
      navigate: function (t, e) {
        if (!z.started) return !1;
        (e && !0 !== e) || (e = { trigger: !!e }),
          (t = this.getFragment(t || ''));
        var i = this.root;
        this._trailingSlash ||
          ('' !== t && '?' !== t.charAt(0)) ||
          (i = i.slice(0, -1) || '/');
        var n = i + t;
        t = t.replace(B, '');
        var s = this.decodeFragment(t);
        if (this.fragment !== s) {
          if (((this.fragment = s), this._usePushState))
            this.history[e.replace ? 'replaceState' : 'pushState'](
              {},
              document.title,
              n
            );
          else {
            if (!this._wantsHashChange) return this.location.assign(n);
            if (
              (this._updateHash(this.location, t, e.replace),
              this.iframe && t !== this.getHash(this.iframe.contentWindow))
            ) {
              var r = this.iframe.contentWindow;
              e.replace || (r.document.open(), r.document.close()),
                this._updateHash(r.location, t, e.replace);
            }
          }
          return e.trigger ? this.loadUrl(t) : void 0;
        }
      },
      _updateHash: function (t, e, i) {
        if (i) {
          var n = t.href.replace(/(javascript:|#).*$/, '');
          t.replace(n + '#' + e);
        } else t.hash = '#' + e;
      },
    }),
    (e.history = new z());
  m.extend =
    _.extend =
    M.extend =
    A.extend =
    z.extend =
      function (t, e) {
        var n,
          s = this;
        return (
          (n =
            t && i.has(t, 'constructor')
              ? t.constructor
              : function () {
                  return s.apply(this, arguments);
                }),
          i.extend(n, s, e),
          (n.prototype = i.create(s.prototype, t)),
          (n.prototype.constructor = n),
          (n.__super__ = s.prototype),
          n
        );
      };
  var J = function () {
      throw new Error('A "url" property or function must be specified');
    },
    L = function (t, e) {
      var i = e.error;
      e.error = function (n) {
        i && i.call(e.context, t, n, e), t.trigger('error', t, n, e);
      };
    };
  return (
    (e._debug = function () {
      return { root: t, _: i };
    }),
    e
  );
});
