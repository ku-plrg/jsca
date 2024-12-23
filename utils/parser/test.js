/*!
 * jQuery JavaScript Library v1.3
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-01-13 12:50:31 -0500 (Tue, 13 Jan 2009)
 * Revision: 6104
 */ (function () {
  var e = Math.max;
  function t(e, t) {
    t.src
      ? f.ajax({ url: t.src, async: !1, dataType: 'script' })
      : f.globalEval(t.text || t.textContent || t.innerHTML || ''),
      t.parentNode && t.parentNode.removeChild(t);
  }
  function a() {
    return +new Date();
  }
  function i(e, t) {
    return (e[0] && parseInt(f.curCSS(e[0], t, !0), 10)) || 0;
  }
  function d() {
    return !1;
  }
  function o() {
    return !0;
  }
  function l(e) {
    var t = RegExp('(^|\\.)' + e.type + '(\\.|$)'),
      n = !0,
      a = [];
    return (
      f.each(f.data(this, 'events').live || [], function (n, i) {
        if (t.test(i.type)) {
          var d = f(e.target).closest(i.data)[0];
          d && a.push({ elem: d, fn: i });
        }
      }),
      f.each(a, function () {
        e.isImmediatePropagationStopped() ||
          !1 !== this.fn.call(this.elem, e, this.fn.data) ||
          (n = !1);
      }),
      n
    );
  }
  function r(e, t) {
    return ['live', e, t.replace(/\./g, '`').replace(/ /g, '|')].join('.');
  }
  function s() {
    E ||
      ((E = !0),
      document.addEventListener
        ? document.addEventListener(
            'DOMContentLoaded',
            function () {
              document.removeEventListener(
                'DOMContentLoaded',
                arguments.callee,
                !1
              ),
                f.ready();
            },
            !1
          )
        : document.attachEvent &&
          (document.attachEvent('onreadystatechange', function () {
            'complete' === document.readyState &&
              (document.detachEvent('onreadystatechange', arguments.callee),
              f.ready());
          }),
          document.documentElement.doScroll &&
            !c.frameElement &&
            (function () {
              if (!f.isReady) {
                try {
                  document.documentElement.doScroll('left');
                } catch (e) {
                  return void setTimeout(arguments.callee, 0);
                }
                f.ready();
              }
            })()),
      f.event.add(c, 'load', f.ready));
  }
  function p(e, t) {
    var n = {};
    return (
      f.each(L.concat.apply([], L.slice(0, t)), function () {
        n[this] = e;
      }),
      n
    );
  }
  var c = this,
    u = c.jQuery,
    m = c.$,
    f =
      (c.jQuery =
      c.$ =
        function (e, t) {
          return new f.fn.init(e, t);
        }),
    h = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,
    y = /^.[^:#\[\.,]*$/;
  (f.fn = f.prototype =
    {
      init: function (e, t) {
        if (((e = e || document), e.nodeType))
          return (this[0] = e), (this.length = 1), (this.context = e), this;
        if ('string' == typeof e) {
          var n = h.exec(e);
          if (!(n && (n[1] || !t))) return f(t).find(e);
          if (n[1]) e = f.clean([n[1]], t);
          else {
            var a = document.getElementById(n[3]);
            if (a) {
              if (a.id != n[3]) return f().find(e);
              var i = f(a);
              return (i.context = document), (i.selector = e), i;
            }
            e = [];
          }
        } else if (f.isFunction(e)) return f(document).ready(e);
        return (
          e.selector &&
            e.context &&
            ((this.selector = e.selector), (this.context = e.context)),
          this.setArray(f.makeArray(e))
        );
      },
      selector: '',
      jquery: '1.3',
      size: function () {
        return this.length;
      },
      get: function (e) {
        return e === void 0 ? f.makeArray(this) : this[e];
      },
      pushStack: function (e, t, n) {
        var a = f(e);
        return (
          (a.prevObject = this),
          (a.context = this.context),
          'find' === t
            ? (a.selector = this.selector + (this.selector ? ' ' : '') + n)
            : t && (a.selector = this.selector + '.' + t + '(' + n + ')'),
          a
        );
      },
      setArray: function (e) {
        return (this.length = 0), Array.prototype.push.apply(this, e), this;
      },
      each: function (e, t) {
        return f.each(this, e, t);
      },
      index: function (e) {
        return f.inArray(e && e.jquery ? e[0] : e, this);
      },
      attr: function (e, t, n) {
        var a = e;
        if ('string' == typeof e) {
          if (void 0 === t) return this[0] && f[n || 'attr'](this[0], e);
          (a = {}), (a[e] = t);
        }
        return this.each(function (t) {
          for (e in a)
            f.attr(n ? this.style : this, e, f.prop(this, a[e], n, t, e));
        });
      },
      css: function (e, t) {
        return (
          ('width' == e || 'height' == e) && 0 > parseFloat(t) && (t = void 0),
          this.attr(e, t, 'curCSS')
        );
      },
      text: function (e) {
        if ('object' != typeof e && null != e)
          return this.empty().append(
            ((this[0] && this[0].ownerDocument) || document).createTextNode(e)
          );
        var t = '';
        return (
          f.each(e || this, function () {
            f.each(this.childNodes, function () {
              8 != this.nodeType &&
                (t += 1 == this.nodeType ? f.fn.text([this]) : this.nodeValue);
            });
          }),
          t
        );
      },
      wrapAll: function (e) {
        if (this[0]) {
          var t = f(e, this[0].ownerDocument).clone();
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstChild; ) e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return this.each(function () {
          f(this).contents().wrapAll(e);
        });
      },
      wrap: function (e) {
        return this.each(function () {
          f(this).wrapAll(e);
        });
      },
      append: function () {
        return this.domManip(arguments, !0, function (e) {
          1 == this.nodeType && this.appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (e) {
          1 == this.nodeType && this.insertBefore(e, this.firstChild);
        });
      },
      before: function () {
        return this.domManip(arguments, !1, function (e) {
          this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, !1, function (e) {
          this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      end: function () {
        return this.prevObject || f([]);
      },
      push: [].push,
      find: function (e) {
        if (1 === this.length && !/,/.test(e)) {
          var t = this.pushStack([], 'find', e);
          return (t.length = 0), f.find(e, this[0], t), t;
        }
        var n = f.map(this, function (t) {
          return f.find(e, t);
        });
        return this.pushStack(
          /[^+>] [^+>]/.test(e) ? f.unique(n) : n,
          'find',
          e
        );
      },
      clone: function (e) {
        var t = this.map(function () {
            if (!f.support.noCloneEvent && !f.isXMLDoc(this)) {
              var e = this.cloneNode(!0),
                t = document.createElement('div');
              return t.appendChild(e), f.clean([t.innerHTML])[0];
            }
            return this.cloneNode(!0);
          }),
          n = t
            .find('*')
            .andSelf()
            .each(function () {
              void 0 !== this[T] && (this[T] = null);
            });
        return (
          !0 === e &&
            this.find('*')
              .andSelf()
              .each(function (e) {
                if (3 != this.nodeType) {
                  var t = f.data(this, 'events');
                  for (var a in t)
                    for (var i in t[a])
                      f.event.add(n[e], a, t[a][i], t[a][i].data);
                }
              }),
          t
        );
      },
      filter: function (e) {
        return this.pushStack(
          (f.isFunction(e) &&
            f.grep(this, function (t, n) {
              return e.call(t, n);
            })) ||
            f.multiFilter(
              e,
              f.grep(this, function (e) {
                return 1 === e.nodeType;
              })
            ),
          'filter',
          e
        );
      },
      closest: function (e) {
        var t = f.expr.match.POS.test(e) ? f(e) : null;
        return this.map(function () {
          for (var n = this; n && n.ownerDocument; ) {
            if (t ? -1 < t.index(n) : f(n).is(e)) return n;
            n = n.parentNode;
          }
        });
      },
      not: function (e) {
        if ('string' == typeof e) {
          if (y.test(e))
            return this.pushStack(f.multiFilter(e, this, !0), 'not', e);
          e = f.multiFilter(e, this);
        }
        var t = e.length && e[e.length - 1] !== void 0 && !e.nodeType;
        return this.filter(function () {
          return t ? 0 > f.inArray(this, e) : this != e;
        });
      },
      add: function (e) {
        return this.pushStack(
          f.unique(
            f.merge(this.get(), 'string' == typeof e ? f(e) : f.makeArray(e))
          )
        );
      },
      is: function (e) {
        return !!e && 0 < f.multiFilter(e, this).length;
      },
      hasClass: function (e) {
        return !!e && this.is('.' + e);
      },
      val: function (e) {
        if (void 0 === e) {
          var t = this[0];
          if (t) {
            if (f.nodeName(t, 'option'))
              return (t.attributes.value || {}).specified ? t.value : t.text;
            if (f.nodeName(t, 'select')) {
              var n = t.selectedIndex,
                a = [],
                d = t.options,
                o = 'select-one' == t.type;
              if (0 > n) return null;
              for (var l, r = o ? n : 0, s = o ? n + 1 : d.length; r < s; r++)
                if (((l = d[r]), l.selected)) {
                  if (((e = f(l).val()), o)) return e;
                  a.push(e);
                }
              return a;
            }
            return (t.value || '').replace(/\r/g, '');
          }
          return;
        }
        return (
          'number' == typeof e && (e += ''),
          this.each(function () {
            if (1 == this.nodeType)
              if (f.isArray(e) && /radio|checkbox/.test(this.type))
                this.checked =
                  0 <= f.inArray(this.value, e) || 0 <= f.inArray(this.name, e);
              else if (f.nodeName(this, 'select')) {
                var t = f.makeArray(e);
                f('option', this).each(function () {
                  this.selected =
                    0 <= f.inArray(this.value, t) ||
                    0 <= f.inArray(this.text, t);
                }),
                  t.length || (this.selectedIndex = -1);
              } else this.value = e;
          })
        );
      },
      html: function (e) {
        return e === void 0
          ? this[0]
            ? this[0].innerHTML
            : null
          : this.empty().append(e);
      },
      replaceWith: function (e) {
        return this.after(e).remove();
      },
      eq: function (e) {
        return this.slice(e, +e + 1);
      },
      slice: function () {
        return this.pushStack(
          Array.prototype.slice.apply(this, arguments),
          'slice',
          Array.prototype.slice.call(arguments).join(',')
        );
      },
      map: function (e) {
        return this.pushStack(
          f.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      andSelf: function () {
        return this.add(this.prevObject);
      },
      domManip: function (e, n, a) {
        function d(e, t) {
          return n && f.nodeName(e, 'table') && f.nodeName(t, 'tr')
            ? e.getElementsByTagName('tbody')[0] ||
                e.appendChild(e.ownerDocument.createElement('tbody'))
            : e;
        }
        if (this[0]) {
          var o = (this[0].ownerDocument || this[0]).createDocumentFragment(),
            r = f.clean(e, this[0].ownerDocument || this[0], o),
            s = o.firstChild,
            p = 1 < this.length ? o.cloneNode(!0) : o;
          if (s)
            for (var c = 0, u = this.length; c < u; c++)
              a.call(d(this[c], s), 0 < c ? p.cloneNode(!0) : o);
          r && f.each(r, t);
        }
        return this;
      },
    }),
    (f.fn.init.prototype = f.fn),
    (f.extend = f.fn.extend =
      function () {
        var e,
          t = arguments[0] || {},
          n = 1,
          a = arguments.length,
          d = !1;
        for (
          'boolean' == typeof t && ((d = t), (t = arguments[1] || {}), (n = 2)),
            'object' == typeof t || f.isFunction(t) || (t = {}),
            a == n && ((t = this), --n);
          n < a;
          n++
        )
          if (null != (e = arguments[n]))
            for (var o in e) {
              var l = t[o],
                r = e[o];
              t !== r &&
                (d && r && 'object' == typeof r && !r.nodeType
                  ? (t[o] = f.extend(d, l || (null == r.length ? {} : []), r))
                  : void 0 !== r && (t[o] = r));
            }
        return t;
      });
  var g = /z-?index|font-?weight|opacity|zoom|line-?height/i,
    v = document.defaultView || {},
    x = Object.prototype.toString;
  f.extend({
    noConflict: function (e) {
      return (c.$ = m), e && (c.jQuery = u), f;
    },
    isFunction: function (e) {
      return '[object Function]' === x.call(e);
    },
    isArray: function (e) {
      return '[object Array]' === x.call(e);
    },
    isXMLDoc: function (e) {
      return (
        (e.documentElement && !e.body) ||
        (e.tagName && e.ownerDocument && !e.ownerDocument.body)
      );
    },
    globalEval: function (e) {
      if (((e = f.trim(e)), e)) {
        var t =
            document.getElementsByTagName('head')[0] ||
            document.documentElement,
          n = document.createElement('script');
        (n.type = 'text/javascript'),
          f.support.scriptEval
            ? n.appendChild(document.createTextNode(e))
            : (n.text = e),
          t.insertBefore(n, t.firstChild),
          t.removeChild(n);
      }
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toUpperCase() == t.toUpperCase();
    },
    each: function (e, t, n) {
      var a,
        d = 0,
        o = e.length;
      if (n) {
        if (void 0 === o) {
          for (a in e) if (!1 === t.apply(e[a], n)) break;
        } else for (; d < o && !1 !== t.apply(e[d++], n); );
      } else if (void 0 === o) {
        for (a in e) if (!1 === t.call(e[a], a, e[a])) break;
      } else for (var l = e[0]; d < o && !1 !== t.call(l, d, l); l = e[++d]);
      return e;
    },
    prop: function (e, t, n, a, i) {
      return (
        f.isFunction(t) && (t = t.call(e, a)),
        'number' != typeof t || 'curCSS' != n || g.test(i) ? t : t + 'px'
      );
    },
    className: {
      add: function (e, t) {
        f.each((t || '').split(/\s+/), function (t, n) {
          1 != e.nodeType ||
            f.className.has(e.className, n) ||
            (e.className += (e.className ? ' ' : '') + n);
        });
      },
      remove: function (e, t) {
        1 == e.nodeType &&
          (e.className =
            t === void 0
              ? ''
              : f
                  .grep(e.className.split(/\s+/), function (e) {
                    return !f.className.has(t, e);
                  })
                  .join(' '));
      },
      has: function (e, t) {
        return -1 < f.inArray(t, (e.className || e).toString().split(/\s+/));
      },
    },
    swap: function (e, t, n) {
      var a = {};
      for (var i in t) (a[i] = e.style[i]), (e.style[i] = t[i]);
      for (var i in (n.call(e), t)) e.style[i] = a[i];
    },
    css: function (t, n, a) {
      if ('width' == n || 'height' == n) {
        function a() {
          var e = Math.round;
          i = 'width' == n ? t.offsetWidth : t.offsetHeight;
          var a = 0,
            o = 0;
          f.each(d, function () {
            (a += parseFloat(f.curCSS(t, 'padding' + this, !0)) || 0),
              (o +=
                parseFloat(f.curCSS(t, 'border' + this + 'Width', !0)) || 0);
          }),
            (i -= e(a + o));
        }
        var i,
          d = 'width' == n ? ['Left', 'Right'] : ['Top', 'Bottom'];
        return (
          f(t).is(':visible')
            ? a()
            : f.swap(
                t,
                {
                  position: 'absolute',
                  visibility: 'hidden',
                  display: 'block',
                },
                a
              ),
          e(0, i)
        );
      }
      return f.curCSS(t, n, a);
    },
    curCSS: function (e, t, n) {
      var a,
        i = e.style;
      if ('opacity' == t && !f.support.opacity)
        return (a = f.attr(i, 'opacity')), '' == a ? '1' : a;
      if ((t.match(/float/i) && (t = w), !n && i && i[t])) a = i[t];
      else if (v.getComputedStyle) {
        t.match(/float/i) && (t = 'float'),
          (t = t.replace(/([A-Z])/g, '-$1').toLowerCase());
        var d = v.getComputedStyle(e, null);
        d && (a = d.getPropertyValue(t)),
          'opacity' == t && '' == a && (a = '1');
      } else if (e.currentStyle) {
        var o = t.replace(/\-(\w)/g, function (e, t) {
          return t.toUpperCase();
        });
        if (
          ((a = e.currentStyle[t] || e.currentStyle[o]),
          !/^\d+(px)?$/i.test(a) && /^\d/.test(a))
        ) {
          var l = i.left,
            r = e.runtimeStyle.left;
          (e.runtimeStyle.left = e.currentStyle.left),
            (i.left = a || 0),
            (a = i.pixelLeft + 'px'),
            (i.left = l),
            (e.runtimeStyle.left = r);
        }
      }
      return a;
    },
    clean: function (e, t, n) {
      if (
        ((t = t || document),
        'undefined' == typeof t.createElement &&
          (t = t.ownerDocument || (t[0] && t[0].ownerDocument) || document),
        !n && 1 === e.length && 'string' == typeof e[0])
      ) {
        var a = /^<(\w+)\s*\/?>$/.exec(e[0]);
        if (a) return [t.createElement(a[1])];
      }
      var d = [],
        o = [],
        l = t.createElement('div');
      if (
        (f.each(e, function (e, n) {
          if (('number' == typeof n && (n += ''), !!n)) {
            if ('string' == typeof n) {
              n = n.replace(/(<(\w+)[^>]*?)\/>/g, function (e, t, n) {
                return n.match(
                  /^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i
                )
                  ? e
                  : t + '></' + n + '>';
              });
              var a = f.trim(n).toLowerCase(),
                i = (!a.indexOf('<opt') && [
                  1,
                  "<select multiple='multiple'>",
                  '</select>',
                ]) ||
                  (!a.indexOf('<leg') && [1, '<fieldset>', '</fieldset>']) ||
                  (a.match(/^<(thead|tbody|tfoot|colg|cap)/) && [
                    1,
                    '<table>',
                    '</table>',
                  ]) ||
                  (!a.indexOf('<tr') && [
                    2,
                    '<table><tbody>',
                    '</tbody></table>',
                  ]) ||
                  ((!a.indexOf('<td') || !a.indexOf('<th')) && [
                    3,
                    '<table><tbody><tr>',
                    '</tr></tbody></table>',
                  ]) ||
                  (!a.indexOf('<col') && [
                    2,
                    '<table><tbody></tbody><colgroup>',
                    '</colgroup></table>',
                  ]) ||
                  (!f.support.htmlSerialize && [1, 'div<div>', '</div>']) || [
                    0,
                    '',
                    '',
                  ];
              for (l.innerHTML = i[1] + n + i[2]; i[0]--; ) l = l.lastChild;
              if (!f.support.tbody)
                for (
                  var o =
                      !a.indexOf('<table') && 0 > a.indexOf('<tbody')
                        ? l.firstChild && l.firstChild.childNodes
                        : '<table>' == i[1] && 0 > a.indexOf('<tbody')
                        ? l.childNodes
                        : [],
                    r = o.length - 1;
                  0 <= r;
                  --r
                )
                  f.nodeName(o[r], 'tbody') &&
                    !o[r].childNodes.length &&
                    o[r].parentNode.removeChild(o[r]);
              !f.support.leadingWhitespace &&
                /^\s/.test(n) &&
                l.insertBefore(
                  t.createTextNode(n.match(/^\s*/)[0]),
                  l.firstChild
                ),
                (n = f.makeArray(l.childNodes));
            }
            n.nodeType ? d.push(n) : (d = f.merge(d, n));
          }
        }),
        n)
      ) {
        for (var r = 0; d[r]; r++)
          f.nodeName(d[r], 'script') &&
          (!d[r].type || 'text/javascript' === d[r].type.toLowerCase())
            ? o.push(d[r].parentNode ? d[r].parentNode.removeChild(d[r]) : d[r])
            : (1 === d[r].nodeType &&
                d.splice.apply(
                  d,
                  [r + 1, 0].concat(
                    f.makeArray(d[r].getElementsByTagName('script'))
                  )
                ),
              n.appendChild(d[r]));
        return o;
      }
      return d;
    },
    attr: function (e, t, n) {
      if (e && 3 != e.nodeType && 8 != e.nodeType) {
        var a = !f.isXMLDoc(e),
          i = void 0 !== n;
        if (((t = (a && f.props[t]) || t), e.tagName)) {
          var d = /href|src|style/.test(t);
          if (
            ('selected' == t && e.parentNode && e.parentNode.selectedIndex,
            t in e && a && !d)
          ) {
            if (i) {
              if ('type' == t && f.nodeName(e, 'input') && e.parentNode)
                throw "type property can't be changed";
              e[t] = n;
            }
            if (f.nodeName(e, 'form') && e.getAttributeNode(t))
              return e.getAttributeNode(t).nodeValue;
            if ('tabIndex' == t) {
              var o = e.getAttributeNode('tabIndex');
              return o && o.specified
                ? o.value
                : e.nodeName.match(
                    /^(a|area|button|input|object|select|textarea)$/i
                  )
                ? 0
                : void 0;
            }
            return e[t];
          }
          if (!f.support.style && a && 'style' == t)
            return f.attr(e.style, 'cssText', n);
          i && e.setAttribute(t, '' + n);
          var l =
            !f.support.hrefNormalized && a && d
              ? e.getAttribute(t, 2)
              : e.getAttribute(t);
          return null === l ? void 0 : l;
        }
        return f.support.opacity || 'opacity' != t
          ? ((t = t.replace(/-([a-z])/gi, function (e, t) {
              return t.toUpperCase();
            })),
            i && (e[t] = n),
            e[t])
          : (i &&
              ((e.zoom = 1),
              (e.filter =
                (e.filter || '').replace(/alpha\([^)]*\)/, '') +
                ('NaN' == parseInt(n) + ''
                  ? ''
                  : 'alpha(opacity=' + 100 * n + ')'))),
            e.filter && 0 <= e.filter.indexOf('opacity=')
              ? parseFloat(e.filter.match(/opacity=([^)]*)/)[1]) / 100 + ''
              : '');
      }
    },
    trim: function (e) {
      return (e || '').replace(/^\s+|\s+$/g, '');
    },
    makeArray: function (e) {
      var t = [];
      if (null != e) {
        var n = e.length;
        if (
          null == n ||
          'string' == typeof e ||
          f.isFunction(e) ||
          e.setInterval
        )
          t[0] = e;
        else for (; n; ) t[--n] = e[n];
      }
      return t;
    },
    inArray: function (e, t) {
      for (var n = 0, a = t.length; n < a; n++) if (t[n] === e) return n;
      return -1;
    },
    merge: function (e, t) {
      var n,
        a = 0,
        d = e.length;
      if (!f.support.getAll)
        for (; null != (n = t[a++]); ) 8 != n.nodeType && (e[d++] = n);
      else for (; null != (n = t[a++]); ) e[d++] = n;
      return e;
    },
    unique: function (t) {
      var n = [],
        a = {};
      try {
        for (var d, e = 0, o = t.length; e < o; e++)
          (d = f.data(t[e])), a[d] || ((a[d] = !0), n.push(t[e]));
      } catch (a) {
        n = t;
      }
      return n;
    },
    grep: function (e, t, n) {
      for (var a = [], d = 0, o = e.length; d < o; d++)
        !n != !t(e[d], d) && a.push(e[d]);
      return a;
    },
    map: function (e, t) {
      for (var n, a = [], d = 0, o = e.length; d < o; d++)
        (n = t(e[d], d)), null != n && (a[a.length] = n);
      return a.concat.apply([], a);
    },
  });
  var b = navigator.userAgent.toLowerCase();
  (f.browser = {
    version: (b.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
    safari: /webkit/.test(b),
    opera: /opera/.test(b),
    msie: /msie/.test(b) && !/opera/.test(b),
    mozilla: /mozilla/.test(b) && !/(compatible|webkit)/.test(b),
  }),
    f.each(
      {
        parent: function (e) {
          return e.parentNode;
        },
        parents: function (e) {
          return f.dir(e, 'parentNode');
        },
        next: function (e) {
          return f.nth(e, 2, 'nextSibling');
        },
        prev: function (e) {
          return f.nth(e, 2, 'previousSibling');
        },
        nextAll: function (e) {
          return f.dir(e, 'nextSibling');
        },
        prevAll: function (e) {
          return f.dir(e, 'previousSibling');
        },
        siblings: function (e) {
          return f.sibling(e.parentNode.firstChild, e);
        },
        children: function (e) {
          return f.sibling(e.firstChild);
        },
        contents: function (e) {
          return f.nodeName(e, 'iframe')
            ? e.contentDocument || e.contentWindow.document
            : f.makeArray(e.childNodes);
        },
      },
      function (e, t) {
        f.fn[e] = function (n) {
          var a = f.map(this, t);
          return (
            n && 'string' == typeof n && (a = f.multiFilter(n, a)),
            this.pushStack(f.unique(a), e, n)
          );
        };
      }
    ),
    f.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, t) {
        f.fn[e] = function () {
          var e = arguments;
          return this.each(function () {
            for (var n = 0, a = e.length; n < a; n++) f(e[n])[t](this);
          });
        };
      }
    ),
    f.each(
      {
        removeAttr: function (e) {
          f.attr(this, e, ''), 1 == this.nodeType && this.removeAttribute(e);
        },
        addClass: function (e) {
          f.className.add(this, e);
        },
        removeClass: function (e) {
          f.className.remove(this, e);
        },
        toggleClass: function (e, t) {
          'boolean' != typeof t && (t = !f.className.has(this, e)),
            f.className[t ? 'add' : 'remove'](this, e);
        },
        remove: function (e) {
          (!e || f.filter(e, [this]).length) &&
            (f('*', this)
              .add([this])
              .each(function () {
                f.event.remove(this), f.removeData(this);
              }),
            this.parentNode && this.parentNode.removeChild(this));
        },
        empty: function () {
          for (f('>*', this).remove(); this.firstChild; )
            this.removeChild(this.firstChild);
        },
      },
      function (e, t) {
        f.fn[e] = function () {
          return this.each(t, arguments);
        };
      }
    );
  var T = 'jQuery' + a(),
    N = 0,
    S = {};
  f.extend({
    cache: {},
    data: function (e, t, n) {
      e = e == c ? S : e;
      var a = e[T];
      return (
        a || (a = e[T] = ++N),
        t && !f.cache[a] && (f.cache[a] = {}),
        void 0 !== n && (f.cache[a][t] = n),
        t ? f.cache[a][t] : a
      );
    },
    removeData: function (t, n) {
      t = t == c ? S : t;
      var a = t[T];
      if (!n) {
        try {
          delete t[T];
        } catch (n) {
          t.removeAttribute && t.removeAttribute(T);
        }
        delete f.cache[a];
      } else if (f.cache[a]) {
        for (n in (delete f.cache[a][n], (n = ''), f.cache[a])) break;
        n || f.removeData(t);
      }
    },
    queue: function (e, t, n) {
      if (e) {
        t = (t || 'fx') + 'queue';
        var a = f.data(e, t);
        !a || f.isArray(n)
          ? (a = f.data(e, t, f.makeArray(n)))
          : n && a.push(n);
      }
      return a;
    },
    dequeue: function (e, t) {
      var n = f.queue(e, t),
        a = n.shift();
      (t && 'fx' !== t) || (a = n[0]), a !== void 0 && a.call(e);
    },
  }),
    f.fn.extend({
      data: function (e, t) {
        var n = e.split('.');
        if (((n[1] = n[1] ? '.' + n[1] : ''), void 0 === t)) {
          var a = this.triggerHandler('getData' + n[1] + '!', [n[0]]);
          return (
            void 0 === a && this.length && (a = f.data(this[0], e)),
            void 0 === a && n[1] ? this.data(n[0]) : a
          );
        }
        return this.trigger('setData' + n[1] + '!', [n[0], t]).each(
          function () {
            f.data(this, e, t);
          }
        );
      },
      removeData: function (e) {
        return this.each(function () {
          f.removeData(this, e);
        });
      },
      queue: function (e, t) {
        return (
          'string' != typeof e && ((t = e), (e = 'fx')),
          void 0 === t
            ? f.queue(this[0], e)
            : this.each(function () {
                var n = f.queue(this, e, t);
                'fx' == e && 1 == n.length && n[0].call(this);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          f.dequeue(this, e);
        });
      },
    }),
    (function () {
      function e(e, t, n, a, d, o) {
        for (var r, s = 0, p = a.length; s < p; s++)
          if (((r = a[s]), r)) {
            r = r[e];
            for (var l, c = !1; r && r.nodeType; ) {
              if (((l = r[n]), l)) {
                c = a[l];
                break;
              }
              if ((1 !== r.nodeType || o || (r[n] = s), r.nodeName === t)) {
                c = r;
                break;
              }
              r = r[e];
            }
            a[s] = c;
          }
      }
      function t(e, t, n, a, d, r) {
        for (var s, p = 0, c = a.length; p < c; p++)
          if (((s = a[p]), s)) {
            s = s[e];
            for (var l = !1; s && s.nodeType; ) {
              if (s[n]) {
                l = a[s[n]];
                break;
              }
              if (1 === s.nodeType)
                if ((r || (s[n] = p), 'string' != typeof t)) {
                  if (s === t) {
                    l = !0;
                    break;
                  }
                } else if (0 < o.filter(t, [s]).length) {
                  l = s;
                  break;
                }
              s = s[e];
            }
            a[p] = l;
          }
      }
      var n =
          /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|[^[\]]+)+\]|\\.|[^ >+~,(\[]+)+|[>+~])(\s*,\s*)?/g,
        a = 0,
        d = Object.prototype.toString,
        o = function (e, t, a, s) {
          if (
            ((a = a || []),
            (t = t || document),
            1 !== t.nodeType && 9 !== t.nodeType)
          )
            return [];
          if (!e || 'string' != typeof e) return a;
          var f,
            h,
            y,
            g,
            v = [],
            x = !0;
          for (n.lastIndex = 0; null !== (f = n.exec(e)); )
            if ((v.push(f[1]), f[2])) {
              g = RegExp.rightContext;
              break;
            }
          if (!(1 < v.length && r.match.POS.exec(e))) {
            var b = s
              ? { expr: v.pop(), set: p(s) }
              : o.find(
                  v.pop(),
                  1 === v.length && t.parentNode ? t.parentNode : t
                );
            for (
              h = o.filter(b.expr, b.set), 0 < v.length ? (y = p(h)) : (x = !1);
              v.length;

            ) {
              var T = v.pop(),
                N = T;
              r.relative[T] ? (N = v.pop()) : (T = ''),
                null == N && (N = t),
                r.relative[T](y, N, u(t));
            }
          } else if (2 === v.length && r.relative[v[0]]) {
            for (var S, C = ''; (S = r.match.POS.exec(e)); )
              (C += S[0]), (e = e.replace(r.match.POS, ''));
            h = o.filter(C, o(/\s$/.test(e) ? e + '*' : e, t));
          } else
            for (h = r.relative[v[0]] ? [t] : o(v.shift(), t); v.length; ) {
              var E = [];
              (e = v.shift()), r.relative[e] && (e += v.shift());
              for (var w = 0, A = h.length; w < A; w++) o(e, h[w], E);
              h = E;
            }
          if ((y || (y = h), !y))
            throw 'Syntax error, unrecognized expression: ' + (T || e);
          if ('[object Array]' !== d.call(y)) p(y, a);
          else if (!x) a.push.apply(a, y);
          else if (1 === t.nodeType)
            for (var w = 0; null != y[w]; w++)
              y[w] &&
                (!0 === y[w] || (1 === y[w].nodeType && c(t, y[w]))) &&
                a.push(h[w]);
          else
            for (var w = 0; null != y[w]; w++)
              y[w] && 1 === y[w].nodeType && a.push(h[w]);
          return g && o(g, t, a, s), a;
        };
      (o.matches = function (e, t) {
        return o(e, null, null, t);
      }),
        (o.find = function (e, t) {
          var n, a;
          if (!e) return [];
          for (var d = 0, o = r.order.length; d < o; d++) {
            var a,
              l = r.order[d];
            if ((a = r.match[l].exec(e))) {
              var s = RegExp.leftContext;
              if (
                '\\' !== s.substr(s.length - 1) &&
                ((a[1] = (a[1] || '').replace(/\\/g, '')),
                (n = r.find[l](a, t)),
                null != n)
              ) {
                e = e.replace(r.match[l], '');
                break;
              }
            }
          }
          return n || (n = t.getElementsByTagName('*')), { set: n, expr: e };
        }),
        (o.filter = function (e, t, n, a) {
          for (var d, o, l = e, s = [], p = t; e && t.length; ) {
            for (var c in r.filter)
              if (null != (d = r.match[c].exec(e))) {
                var u,
                  m,
                  f = r.filter[c],
                  h = null,
                  y = 0;
                if (((o = !1), p == s && (s = []), r.preFilter[c]))
                  if (((d = r.preFilter[c](d, p, n, s, a)), !d)) o = u = !0;
                  else if (!0 === d) continue;
                  else if (!0 === d[0]) {
                    h = [];
                    for (var g, v = null, x = 0; void 0 !== (g = p[x]); x++)
                      g && v !== g && (h.push(g), (v = g));
                  }
                if (d)
                  for (var x = 0; void 0 !== (m = p[x]); x++)
                    if (m) {
                      h && m != h[y] && y++, (u = f(m, d, y, h));
                      var b = a ^ !!u;
                      n && null != u
                        ? b
                          ? (o = !0)
                          : (p[x] = !1)
                        : b && (s.push(m), (o = !0));
                    }
                if (void 0 !== u) {
                  if ((n || (p = s), (e = e.replace(r.match[c], '')), !o))
                    return [];
                  break;
                }
              }
            if (((e = e.replace(/\s*,\s*/, '')), e == l))
              if (null == o)
                throw 'Syntax error, unrecognized expression: ' + e;
              else break;
            l = e;
          }
          return p;
        });
      var r = (o.selectors = {
        order: ['ID', 'NAME', 'TAG'],
        match: {
          ID: /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
          CLASS: /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
          NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
          ATTR: /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
          TAG: /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
          CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
          POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
          PSEUDO:
            /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/,
        },
        attrMap: { class: 'className', for: 'htmlFor' },
        attrHandle: {
          href: function (e) {
            return e.getAttribute('href');
          },
        },
        relative: {
          '+': function (e, t) {
            for (var n, a = 0, d = e.length; a < d; a++)
              if (((n = e[a]), n)) {
                for (var l = n.previousSibling; l && 1 !== l.nodeType; )
                  l = l.previousSibling;
                e[a] = 'string' == typeof t ? l || !1 : l === t;
              }
            'string' == typeof t && o.filter(t, e, !0);
          },
          '>': function (e, t, n) {
            if ('string' == typeof t && !/\W/.test(t)) {
              t = n ? t : t.toUpperCase();
              for (var a, d = 0, r = e.length; d < r; d++)
                if (((a = e[d]), a)) {
                  var s = a.parentNode;
                  e[d] = s.nodeName === t && s;
                }
            } else {
              for (var a, d = 0, r = e.length; d < r; d++)
                (a = e[d]),
                  a &&
                    (e[d] =
                      'string' == typeof t ? a.parentNode : a.parentNode === t);
              'string' == typeof t && o.filter(t, e, !0);
            }
          },
          '': function (n, i, d) {
            var o = 'done' + a++,
              l = t;
            if (!i.match(/\W/)) {
              var r = (i = d ? i : i.toUpperCase());
              l = e;
            }
            l('parentNode', i, o, n, r, d);
          },
          '~': function (n, i, d) {
            var o = 'done' + a++,
              l = t;
            if ('string' == typeof i && !i.match(/\W/)) {
              var r = (i = d ? i : i.toUpperCase());
              l = e;
            }
            l('previousSibling', i, o, n, r, d);
          },
        },
        find: {
          ID: function (e, t) {
            if (t.getElementById) {
              var n = t.getElementById(e[1]);
              return n ? [n] : [];
            }
          },
          NAME: function (e, t) {
            return t.getElementsByName ? t.getElementsByName(e[1]) : null;
          },
          TAG: function (e, t) {
            return t.getElementsByTagName(e[1]);
          },
        },
        preFilter: {
          CLASS: function (e, t, n, a, d) {
            e = ' ' + e[1].replace(/\\/g, '') + ' ';
            for (var o = 0; t[o]; o++)
              d ^ (0 <= (' ' + t[o].className + ' ').indexOf(e))
                ? n || a.push(t[o])
                : n && (t[o] = !1);
            return !1;
          },
          ID: function (e) {
            return e[1].replace(/\\/g, '');
          },
          TAG: function (e, t) {
            for (var n = 0; !t[n]; n++);
            return u(t[n]) ? e[1] : e[1].toUpperCase();
          },
          CHILD: function (e) {
            if ('nth' == e[1]) {
              var t = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
                ('even' == e[2] && '2n') ||
                  ('odd' == e[2] && '2n+1') ||
                  (!/\D/.test(e[2]) && '0n+' + e[2]) ||
                  e[2]
              );
              (e[2] = t[1] + (t[2] || 1) - 0), (e[3] = t[3] - 0);
            }
            return (e[0] = 'done' + a++), e;
          },
          ATTR: function (e) {
            var t = e[1];
            return (
              r.attrMap[t] && (e[1] = r.attrMap[t]),
              '~=' === e[2] && (e[4] = ' ' + e[4] + ' '),
              e
            );
          },
          PSEUDO: function (e, t, a, i, d) {
            if ('not' === e[1]) {
              if (1 < e[3].match(n).length) e[3] = o(e[3], null, null, t);
              else {
                var l = o.filter(e[3], t, a, !0 ^ d);
                return a || i.push.apply(i, l), !1;
              }
            } else if (r.match.POS.test(e[0])) return !0;
            return e;
          },
          POS: function (e) {
            return e.unshift(!0), e;
          },
        },
        filters: {
          enabled: function (e) {
            return !1 === e.disabled && 'hidden' !== e.type;
          },
          disabled: function (e) {
            return !0 === e.disabled;
          },
          checked: function (e) {
            return !0 === e.checked;
          },
          selected: function (e) {
            return e.parentNode.selectedIndex, !0 === e.selected;
          },
          parent: function (e) {
            return !!e.firstChild;
          },
          empty: function (e) {
            return !e.firstChild;
          },
          has: function (e, t, n) {
            return !!o(n[3], e).length;
          },
          header: function (e) {
            return /h\d/i.test(e.nodeName);
          },
          text: function (e) {
            return 'text' === e.type;
          },
          radio: function (e) {
            return 'radio' === e.type;
          },
          checkbox: function (e) {
            return 'checkbox' === e.type;
          },
          file: function (e) {
            return 'file' === e.type;
          },
          password: function (e) {
            return 'password' === e.type;
          },
          submit: function (e) {
            return 'submit' === e.type;
          },
          image: function (e) {
            return 'image' === e.type;
          },
          reset: function (e) {
            return 'reset' === e.type;
          },
          button: function (e) {
            return 'button' === e.type || 'BUTTON' === e.nodeName.toUpperCase();
          },
          input: function (e) {
            return /input|select|textarea|button/i.test(e.nodeName);
          },
        },
        setFilters: {
          first: function (e, t) {
            return 0 === t;
          },
          last: function (e, t, n, a) {
            return t === a.length - 1;
          },
          even: function (e, t) {
            return 0 == t % 2;
          },
          odd: function (e, t) {
            return 1 == t % 2;
          },
          lt: function (e, t, n) {
            return t < n[3] - 0;
          },
          gt: function (e, t, n) {
            return t > n[3] - 0;
          },
          nth: function (e, t, n) {
            return n[3] - 0 == t;
          },
          eq: function (e, t, n) {
            return n[3] - 0 == t;
          },
        },
        filter: {
          CHILD: function (e, t) {
            var n = t[1],
              a = e.parentNode,
              i = 'child' + a.childNodes.length;
            if (a && (!a[i] || !e.nodeIndex)) {
              for (var d = 1, o = a.firstChild; o; o = o.nextSibling)
                1 == o.nodeType && (o.nodeIndex = d++);
              a[i] = d - 1;
            }
            if ('first' == n) return 1 == e.nodeIndex;
            if ('last' == n) return e.nodeIndex == a[i];
            if ('only' == n) return 1 == a[i];
            if ('nth' == n) {
              var l = !1,
                r = t[2],
                s = t[3];
              return (
                (1 == r && 0 == s) ||
                (0 == r
                  ? e.nodeIndex == s && (l = !0)
                  : 0 == (e.nodeIndex - s) % r &&
                    0 <= (e.nodeIndex - s) / r &&
                    (l = !0),
                l)
              );
            }
          },
          PSEUDO: function (e, t, n, a) {
            var d = t[1],
              o = r.filters[d];
            if (o) return o(e, n, t, a);
            if ('contains' === d)
              return 0 <= (e.textContent || e.innerText || '').indexOf(t[3]);
            if ('not' === d) {
              for (var s = t[3], n = 0, p = s.length; n < p; n++)
                if (s[n] === e) return !1;
              return !0;
            }
          },
          ID: function (e, t) {
            return 1 === e.nodeType && e.getAttribute('id') === t;
          },
          TAG: function (e, t) {
            return ('*' === t && 1 === e.nodeType) || e.nodeName === t;
          },
          CLASS: function (e, t) {
            return t.test(e.className);
          },
          ATTR: function (e, t) {
            var n = r.attrHandle[t[1]]
                ? r.attrHandle[t[1]](e)
                : e[t[1]] || e.getAttribute(t[1]),
              a = n + '',
              i = t[2],
              d = t[4];
            return (
              null != n &&
              ('=' === i
                ? a === d
                : '*=' === i
                ? 0 <= a.indexOf(d)
                : '~=' === i
                ? 0 <= (' ' + a + ' ').indexOf(d)
                : t[4]
                ? '!=' === i
                  ? a != d
                  : '^=' === i
                  ? 0 === a.indexOf(d)
                  : '$=' === i
                  ? a.substr(a.length - d.length) === d
                  : '|=' === i &&
                    (a === d || a.substr(0, d.length + 1) === d + '-')
                : n)
            );
          },
          POS: function (e, t, n, a) {
            var i = t[2],
              d = r.setFilters[i];
            if (d) return d(e, n, t, a);
          },
        },
      });
      for (var s in r.match)
        r.match[s] = RegExp(
          r.match[s].source + /(?![^\[]*\])(?![^\(]*\))/.source
        );
      var p = function (e, t) {
        return (
          (e = Array.prototype.slice.call(e)), t ? (t.push.apply(t, e), t) : e
        );
      };
      try {
        Array.prototype.slice.call(document.documentElement.childNodes);
      } catch (t) {
        p = function (e, t) {
          var n = t || [];
          if ('[object Array]' === d.call(e)) Array.prototype.push.apply(n, e);
          else if ('number' == typeof e.length)
            for (var a = 0, o = e.length; a < o; a++) n.push(e[a]);
          else for (var a = 0; e[a]; a++) n.push(e[a]);
          return n;
        };
      }
      (function () {
        var e = document.createElement('form'),
          t = 'script' + new Date().getTime();
        e.innerHTML = "<input name='" + t + "'/>";
        var n = document.documentElement;
        n.insertBefore(e, n.firstChild),
          !document.getElementById(t) ||
            ((r.find.ID = function (e, t) {
              if (t.getElementById) {
                var n = t.getElementById(e[1]);
                return n
                  ? n.id === e[1] ||
                    (n.getAttributeNode &&
                      n.getAttributeNode('id').nodeValue === e[1])
                    ? [n]
                    : void 0
                  : [];
              }
            }),
            (r.filter.ID = function (e, t) {
              var n = e.getAttributeNode && e.getAttributeNode('id');
              return 1 === e.nodeType && n && n.nodeValue === t;
            })),
          n.removeChild(e);
      })(),
        (function () {
          var e = document.createElement('div');
          e.appendChild(document.createComment('')),
            0 < e.getElementsByTagName('*').length &&
              (r.find.TAG = function (e, t) {
                var n = t.getElementsByTagName(e[1]);
                if ('*' === e[1]) {
                  for (var a = [], d = 0; n[d]; d++)
                    1 === n[d].nodeType && a.push(n[d]);
                  n = a;
                }
                return n;
              }),
            (e.innerHTML = "<a href='#'></a>"),
            '#' !== e.firstChild.getAttribute('href') &&
              (r.attrHandle.href = function (e) {
                return e.getAttribute('href', 2);
              });
        })(),
        document.querySelectorAll &&
          (function () {
            var e = o;
            (o = function (t, n, a, i) {
              if (((n = n || document), !i && 9 === n.nodeType))
                try {
                  return p(n.querySelectorAll(t), a);
                } catch (t) {}
              return e(t, n, a, i);
            }),
              (o.find = e.find),
              (o.filter = e.filter),
              (o.selectors = e.selectors),
              (o.matches = e.matches);
          })(),
        document.documentElement.getElementsByClassName &&
          (r.order.splice(1, 0, 'CLASS'),
          (r.find.CLASS = function (e, t) {
            return t.getElementsByClassName(e[1]);
          }));
      var c = document.compareDocumentPosition
          ? function (e, t) {
              return 16 & e.compareDocumentPosition(t);
            }
          : function (e, t) {
              return e !== t && (!e.contains || e.contains(t));
            },
        u = function (e) {
          return (
            (e.documentElement && !e.body) ||
            (e.tagName && e.ownerDocument && !e.ownerDocument.body)
          );
        };
      return (
        (f.find = o),
        (f.filter = o.filter),
        (f.expr = o.selectors),
        (f.expr[':'] = f.expr.filters),
        (o.selectors.filters.hidden = function (e) {
          return (
            'hidden' === e.type ||
            'none' === f.css(e, 'display') ||
            'hidden' === f.css(e, 'visibility')
          );
        }),
        (o.selectors.filters.visible = function (e) {
          return (
            'hidden' !== e.type &&
            'none' !== f.css(e, 'display') &&
            'hidden' !== f.css(e, 'visibility')
          );
        }),
        (o.selectors.filters.animated = function (e) {
          return f.grep(f.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (f.multiFilter = function (e, t, n) {
          return n && (e = ':not(' + e + ')'), o.matches(e, t);
        }),
        (f.dir = function (e, t) {
          for (var n = [], a = e[t]; a && a != document; )
            1 == a.nodeType && n.push(a), (a = a[t]);
          return n;
        }),
        (f.nth = function (e, t, n) {
          t = t || 1;
          for (var a = 0; e && (1 != e.nodeType || ++a != t); e = e[n]);
          return e;
        }),
        void (f.sibling = function (e, t) {
          for (var a = []; e; e = e.nextSibling)
            1 == e.nodeType && e != t && a.push(e);
          return a;
        })
      );
    })(),
    (f.event = {
      add: function (e, t, n, a) {
        if (3 != e.nodeType && 8 != e.nodeType) {
          if (
            (e.setInterval && e != c && (e = c),
            n.guid || (n.guid = this.guid++),
            void 0 !== a)
          ) {
            var i = n;
            (n = this.proxy(i)), (n.data = a);
          }
          var d = f.data(e, 'events') || f.data(e, 'events', {}),
            o =
              f.data(e, 'handle') ||
              f.data(e, 'handle', function () {
                return 'undefined' == typeof f || f.event.triggered
                  ? void 0
                  : f.event.handle.apply(arguments.callee.elem, arguments);
              });
          (o.elem = e),
            f.each(t.split(/\s+/), function (t, i) {
              var l = i.split('.');
              (i = l.shift()), (n.type = l.slice().sort().join('.'));
              var r = d[i];
              f.event.specialAll[i] &&
                f.event.specialAll[i].setup.call(e, a, l),
                r ||
                  ((r = d[i] = {}),
                  (!f.event.special[i] ||
                    !1 === f.event.special[i].setup.call(e, a, l)) &&
                    (e.addEventListener
                      ? e.addEventListener(i, o, !1)
                      : e.attachEvent && e.attachEvent('on' + i, o))),
                (r[n.guid] = n),
                (f.event.global[i] = !0);
            }),
            (e = null);
        }
      },
      guid: 1,
      global: {},
      remove: function (e, t, n) {
        if (3 != e.nodeType && 8 != e.nodeType) {
          var a,
            i = f.data(e, 'events');
          if (i) {
            if (void 0 === t || ('string' == typeof t && '.' == t.charAt(0)))
              for (var d in i) this.remove(e, d + (t || ''));
            else
              t.type && ((n = t.handler), (t = t.type)),
                f.each(t.split(/\s+/), function (t, d) {
                  var o = d.split('.');
                  d = o.shift();
                  var l = RegExp(
                    '(^|\\.)' + o.slice().sort().join('.*\\.') + '(\\.|$)'
                  );
                  if (i[d]) {
                    if (n) delete i[d][n.guid];
                    else
                      for (var r in i[d])
                        l.test(i[d][r].type) && delete i[d][r];
                    for (a in (f.event.specialAll[d] &&
                      f.event.specialAll[d].teardown.call(e, o),
                    i[d]))
                      break;
                    a ||
                      ((!f.event.special[d] ||
                        !1 === f.event.special[d].teardown.call(e, o)) &&
                        (e.removeEventListener
                          ? e.removeEventListener(d, f.data(e, 'handle'), !1)
                          : e.detachEvent &&
                            e.detachEvent('on' + d, f.data(e, 'handle'))),
                      (a = null),
                      delete i[d]);
                  }
                });
            for (a in i) break;
            if (!a) {
              var o = f.data(e, 'handle');
              o && (o.elem = null),
                f.removeData(e, 'events'),
                f.removeData(e, 'handle');
            }
          }
        }
      },
      trigger: function (e, t, n, a) {
        var i = e.type || e;
        if (!a) {
          if (
            ((e =
              'object' == typeof e
                ? e[T]
                  ? e
                  : f.extend(f.Event(i), e)
                : f.Event(i)),
            0 <= i.indexOf('!') &&
              ((e.type = i = i.slice(0, -1)), (e.exclusive = !0)),
            n ||
              (e.stopPropagation(),
              this.global[i] &&
                f.each(f.cache, function () {
                  this.events &&
                    this.events[i] &&
                    f.event.trigger(e, t, this.handle.elem);
                })),
            !n || 3 == n.nodeType || 8 == n.nodeType)
          )
            return;
          (e.result = void 0),
            (e.target = n),
            (t = f.makeArray(t)),
            t.unshift(e);
        }
        e.currentTarget = n;
        var d = f.data(n, 'handle');
        if (
          (d && d.apply(n, t),
          (!n[i] || (f.nodeName(n, 'a') && 'click' == i)) &&
            n['on' + i] &&
            !1 === n['on' + i].apply(n, t) &&
            (e.result = !1),
          !a &&
            n[i] &&
            !e.isDefaultPrevented() &&
            !(f.nodeName(n, 'a') && 'click' == i))
        ) {
          this.triggered = !0;
          try {
            n[i]();
          } catch (t) {}
        }
        if (((this.triggered = !1), !e.isPropagationStopped())) {
          var o = n.parentNode || n.ownerDocument;
          o && f.event.trigger(e, t, o, !0);
        }
      },
      handle: function (e) {
        var t, n;
        e = arguments[0] = f.event.fix(e || c.event);
        var a = e.type.split('.');
        (e.type = a.shift()), (t = !a.length && !e.exclusive);
        var i = RegExp('(^|\\.)' + a.slice().sort().join('.*\\.') + '(\\.|$)');
        for (var d in ((n = (f.data(this, 'events') || {})[e.type]), n)) {
          var o = n[d];
          if (t || i.test(o.type)) {
            (e.handler = o), (e.data = o.data);
            var l = o.apply(this, arguments);
            if (
              (void 0 !== l &&
                ((e.result = l),
                !1 === l && (e.preventDefault(), e.stopPropagation())),
              e.isImmediatePropagationStopped())
            )
              break;
          }
        }
      },
      props: [
        'altKey',
        'attrChange',
        'attrName',
        'bubbles',
        'button',
        'cancelable',
        'charCode',
        'clientX',
        'clientY',
        'ctrlKey',
        'currentTarget',
        'data',
        'detail',
        'eventPhase',
        'fromElement',
        'handler',
        'keyCode',
        'metaKey',
        'newValue',
        'originalTarget',
        'pageX',
        'pageY',
        'prevValue',
        'relatedNode',
        'relatedTarget',
        'screenX',
        'screenY',
        'shiftKey',
        'srcElement',
        'target',
        'toElement',
        'view',
        'wheelDelta',
        'which',
      ],
      fix: function (e) {
        if (e[T]) return e;
        var t = e;
        e = f.Event(t);
        for (var n, a = this.props.length; a; )
          (n = this.props[--a]), (e[n] = t[n]);
        if (
          (e.target || (e.target = e.srcElement || document),
          3 == e.target.nodeType && (e.target = e.target.parentNode),
          !e.relatedTarget &&
            e.fromElement &&
            (e.relatedTarget =
              e.fromElement == e.target ? e.toElement : e.fromElement),
          null == e.pageX && null != e.clientX)
        ) {
          var d = document.documentElement,
            o = document.body;
          (e.pageX =
            e.clientX +
            ((d && d.scrollLeft) || (o && o.scrollLeft) || 0) -
            (d.clientLeft || 0)),
            (e.pageY =
              e.clientY +
              ((d && d.scrollTop) || (o && o.scrollTop) || 0) -
              (d.clientTop || 0));
        }
        return (
          !e.which &&
            (e.charCode || 0 === e.charCode ? e.charCode : e.keyCode) &&
            (e.which = e.charCode || e.keyCode),
          !e.metaKey && e.ctrlKey && (e.metaKey = e.ctrlKey),
          !e.which &&
            e.button &&
            (e.which =
              1 & e.button ? 1 : 2 & e.button ? 3 : 4 & e.button ? 2 : 0),
          e
        );
      },
      proxy: function (e, t) {
        return (
          (t =
            t ||
            function () {
              return e.apply(this, arguments);
            }),
          (t.guid = e.guid = e.guid || t.guid || this.guid++),
          t
        );
      },
      special: { ready: { setup: s, teardown: function () {} } },
      specialAll: {
        live: {
          setup: function (e, t) {
            f.event.add(this, t[0], l);
          },
          teardown: function (e) {
            if (e.length) {
              var t = 0,
                n = RegExp('(^|\\.)' + e[0] + '(\\.|$)');
              f.each(f.data(this, 'events').live || {}, function () {
                n.test(this.type) && t++;
              }),
                1 > t && f.event.remove(this, e[0], l);
            }
          },
        },
      },
    }),
    (f.Event = function (e) {
      return this.preventDefault
        ? void (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.timeStamp = e.timeStamp))
            : (this.type = e),
          !this.timeStamp && (this.timeStamp = a()),
          (this[T] = !0))
        : new f.Event(e);
    }),
    (f.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = o;
        var t = this.originalEvent;
        t && (t.preventDefault && t.preventDefault(), (t.returnValue = !1));
      },
      stopPropagation: function () {
        this.isPropagationStopped = o;
        var t = this.originalEvent;
        t && (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = o), this.stopPropagation();
      },
      isDefaultPrevented: d,
      isPropagationStopped: d,
      isImmediatePropagationStopped: d,
    });
  var C = function (e) {
    for (var t = e.relatedTarget; t && t != this; )
      try {
        t = t.parentNode;
      } catch (n) {
        t = this;
      }
    t != this && ((e.type = e.data), f.event.handle.apply(this, arguments));
  };
  f.each({ mouseover: 'mouseenter', mouseout: 'mouseleave' }, function (e, t) {
    f.event.special[t] = {
      setup: function () {
        f.event.add(this, e, C, t);
      },
      teardown: function () {
        f.event.remove(this, e, C);
      },
    };
  }),
    f.fn.extend({
      bind: function (e, t, n) {
        return 'unload' == e
          ? this.one(e, t, n)
          : this.each(function () {
              f.event.add(this, e, n || t, n && t);
            });
      },
      one: function (e, t, n) {
        var a = f.event.proxy(n || t, function (e) {
          return f(this).unbind(e, a), (n || t).apply(this, arguments);
        });
        return this.each(function () {
          f.event.add(this, e, a, n && t);
        });
      },
      unbind: function (e, t) {
        return this.each(function () {
          f.event.remove(this, e, t);
        });
      },
      trigger: function (e, t) {
        return this.each(function () {
          f.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        if (this[0]) {
          var n = f.Event(e);
          return (
            n.preventDefault(),
            n.stopPropagation(),
            f.event.trigger(n, t, this[0]),
            n.result
          );
        }
      },
      toggle: function (e) {
        for (var t = arguments, n = 1; n < t.length; ) f.event.proxy(e, t[n++]);
        return this.click(
          f.event.proxy(e, function (e) {
            return (
              (this.lastToggle = (this.lastToggle || 0) % n),
              e.preventDefault(),
              t[this.lastToggle++].apply(this, arguments) || !1
            );
          })
        );
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t);
      },
      ready: function (e) {
        return s(), f.isReady ? e.call(document, f) : f.readyList.push(e), this;
      },
      live: function (e, t) {
        var n = f.event.proxy(t);
        return (
          (n.guid += this.selector + e),
          f(document).bind(r(e, this.selector), this.selector, n),
          this
        );
      },
      die: function (e, t) {
        return (
          f(document).unbind(
            r(e, this.selector),
            t ? { guid: t.guid + this.selector + e } : null
          ),
          this
        );
      },
    }),
    f.extend({
      isReady: !1,
      readyList: [],
      ready: function () {
        f.isReady ||
          ((f.isReady = !0),
          f.readyList &&
            (f.each(f.readyList, function () {
              this.call(document, f);
            }),
            (f.readyList = null)),
          f(document).triggerHandler('ready'));
      },
    });
  var E = !1;
  f.each(
    'blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error'.split(
      ','
    ),
    function (e, t) {
      f.fn[t] = function (e) {
        return e ? this.bind(t, e) : this.trigger(t);
      };
    }
  ),
    f(c).bind('unload', function () {
      for (var e in f.cache)
        1 != e && f.cache[e].handle && f.event.remove(f.cache[e].handle.elem);
    }),
    (function () {
      f.support = {};
      var e = document.documentElement,
        t = document.createElement('script'),
        n = document.createElement('div'),
        i = 'script' + new Date().getTime();
      (n.style.display = 'none'),
        (n.innerHTML =
          '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>');
      var d = n.getElementsByTagName('*'),
        o = n.getElementsByTagName('a')[0];
      if (d && d.length && o) {
        (f.support = {
          leadingWhitespace: 3 == n.firstChild.nodeType,
          tbody: !n.getElementsByTagName('tbody').length,
          objectAll: !!n
            .getElementsByTagName('object')[0]
            .getElementsByTagName('*').length,
          htmlSerialize: !!n.getElementsByTagName('link').length,
          style: /red/.test(o.getAttribute('style')),
          hrefNormalized: '/a' === o.getAttribute('href'),
          opacity: '0.5' === o.style.opacity,
          cssFloat: !!o.style.cssFloat,
          scriptEval: !1,
          noCloneEvent: !0,
          boxModel: null,
        }),
          (t.type = 'text/javascript');
        try {
          t.appendChild(document.createTextNode('window.' + i + '=1;'));
        } catch (t) {}
        e.insertBefore(t, e.firstChild),
          c[i] && ((f.support.scriptEval = !0), delete c[i]),
          e.removeChild(t),
          n.attachEvent &&
            n.fireEvent &&
            (n.attachEvent('onclick', function () {
              (f.support.noCloneEvent = !1),
                n.detachEvent('onclick', arguments.callee);
            }),
            n.cloneNode(!0).fireEvent('onclick')),
          f(function () {
            var e = document.createElement('div');
            (e.style.width = '1px'),
              (e.style.paddingLeft = '1px'),
              document.body.appendChild(e),
              (f.boxModel = f.support.boxModel = 2 === e.offsetWidth),
              document.body.removeChild(e);
          });
      }
    })();
  var w = f.support.cssFloat ? 'cssFloat' : 'styleFloat';
  (f.props = {
    for: 'htmlFor',
    class: 'className',
    float: w,
    cssFloat: w,
    styleFloat: w,
    readonly: 'readOnly',
    maxlength: 'maxLength',
    cellspacing: 'cellSpacing',
    rowspan: 'rowSpan',
    tabindex: 'tabIndex',
  }),
    f.fn.extend({
      _load: f.fn.load,
      load: function (e, t, n) {
        if ('string' != typeof e) return this._load(e);
        var a = e.indexOf(' ');
        if (0 <= a) {
          var i = e.slice(a, e.length);
          e = e.slice(0, a);
        }
        var d = 'GET';
        t &&
          (f.isFunction(t)
            ? ((n = t), (t = null))
            : 'object' == typeof t && ((t = f.param(t)), (d = 'POST')));
        var o = this;
        return (
          f.ajax({
            url: e,
            type: d,
            dataType: 'html',
            data: t,
            complete: function (e, t) {
              ('success' == t || 'notmodified' == t) &&
                o.html(
                  i
                    ? f('<div/>')
                        .append(
                          e.responseText.replace(
                            /<script(.|\s)*?\/script>/g,
                            ''
                          )
                        )
                        .find(i)
                    : e.responseText
                ),
                n && o.each(n, [e.responseText, t, e]);
            },
          }),
          this
        );
      },
      serialize: function () {
        return f.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          return this.elements ? f.makeArray(this.elements) : this;
        })
          .filter(function () {
            return (
              this.name &&
              !this.disabled &&
              (this.checked ||
                /select|textarea/i.test(this.nodeName) ||
                /text|hidden|password/i.test(this.type))
            );
          })
          .map(function (e, t) {
            var n = f(this).val();
            return null == n
              ? null
              : f.isArray(n)
              ? f.map(n, function (e) {
                  return { name: t.name, value: e };
                })
              : { name: t.name, value: n };
          })
          .get();
      },
    }),
    f.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        f.fn[t] = function (e) {
          return this.bind(t, e);
        };
      }
    );
  var A = a();
  f.extend({
    get: function (e, t, n, a) {
      return (
        f.isFunction(t) && ((n = t), (t = null)),
        f.ajax({ type: 'GET', url: e, data: t, success: n, dataType: a })
      );
    },
    getScript: function (e, t) {
      return f.get(e, null, t, 'script');
    },
    getJSON: function (e, t, n) {
      return f.get(e, t, n, 'json');
    },
    post: function (e, t, n, a) {
      return (
        f.isFunction(t) && ((n = t), (t = {})),
        f.ajax({ type: 'POST', url: e, data: t, success: n, dataType: a })
      );
    },
    ajaxSetup: function (e) {
      f.extend(f.ajaxSettings, e);
    },
    ajaxSettings: {
      url: location.href,
      global: !0,
      type: 'GET',
      contentType: 'application/x-www-form-urlencoded',
      processData: !0,
      async: !0,
      xhr: function () {
        return c.ActiveXObject
          ? new ActiveXObject('Microsoft.XMLHTTP')
          : new XMLHttpRequest();
      },
      accepts: {
        xml: 'application/xml, text/xml',
        html: 'text/html',
        script: 'text/javascript, application/javascript',
        json: 'application/json, text/javascript',
        text: 'text/plain',
        _default: '*/*',
      },
    },
    lastModified: {},
    ajax: function (t) {
      function e() {
        t.success && t.success(o, d),
          t.global && f.event.trigger('ajaxSuccess', [x, t]);
      }
      function n() {
        t.complete && t.complete(x, d),
          t.global && f.event.trigger('ajaxComplete', [x, t]),
          t.global && !--f.active && f.event.trigger('ajaxStop');
      }
      t = f.extend(!0, t, f.extend(!0, {}, f.ajaxSettings, t));
      var i,
        d,
        o,
        l = /=\?(&|$)/g,
        r = t.type.toUpperCase();
      if (
        (t.data &&
          t.processData &&
          'string' != typeof t.data &&
          (t.data = f.param(t.data)),
        'jsonp' == t.dataType &&
          ('GET' == r
            ? !t.url.match(l) &&
              (t.url +=
                (t.url.match(/\?/) ? '&' : '?') +
                (t.jsonp || 'callback') +
                '=?')
            : (!t.data || !t.data.match(l)) &&
              (t.data =
                (t.data ? t.data + '&' : '') + (t.jsonp || 'callback') + '=?'),
          (t.dataType = 'json')),
        'json' == t.dataType &&
          ((t.data && t.data.match(l)) || t.url.match(l)) &&
          ((i = 'jsonp' + A++),
          t.data && (t.data = (t.data + '').replace(l, '=' + i + '$1')),
          (t.url = t.url.replace(l, '=' + i + '$1')),
          (t.dataType = 'script'),
          (c[i] = function (t) {
            (o = t), e(), n(), (c[i] = void 0);
            try {
              delete c[i];
            } catch (t) {}
            h && h.removeChild(y);
          })),
        'script' == t.dataType && null == t.cache && (t.cache = !1),
        !1 === t.cache && 'GET' == r)
      ) {
        var p = a(),
          u = t.url.replace(/(\?|&)_=.*?(&|$)/, '$1_=' + p + '$2');
        t.url =
          u + (u == t.url ? (t.url.match(/\?/) ? '&' : '?') + '_=' + p : '');
      }
      t.data &&
        'GET' == r &&
        ((t.url += (t.url.match(/\?/) ? '&' : '?') + t.data), (t.data = null)),
        t.global && !f.active++ && f.event.trigger('ajaxStart');
      var m = /^(\w+:)?\/\/([^\/?#]+)/.exec(t.url);
      if (
        'script' == t.dataType &&
        'GET' == r &&
        m &&
        ((m[1] && m[1] != location.protocol) || m[2] != location.host)
      ) {
        var h = document.getElementsByTagName('head')[0],
          y = document.createElement('script');
        if (
          ((y.src = t.url),
          t.scriptCharset && (y.charset = t.scriptCharset),
          !i)
        ) {
          var g = !1;
          y.onload = y.onreadystatechange = function () {
            g ||
              (this.readyState &&
                'loaded' != this.readyState &&
                'complete' != this.readyState) ||
              ((g = !0), e(), n(), h.removeChild(y));
          };
        }
        return h.appendChild(y), void 0;
      }
      var v = !1,
        x = t.xhr();
      t.username
        ? x.open(r, t.url, t.async, t.username, t.password)
        : x.open(r, t.url, t.async);
      try {
        t.data && x.setRequestHeader('Content-Type', t.contentType),
          t.ifModified &&
            x.setRequestHeader(
              'If-Modified-Since',
              f.lastModified[t.url] || 'Thu, 01 Jan 1970 00:00:00 GMT'
            ),
          x.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
          x.setRequestHeader(
            'Accept',
            t.dataType && t.accepts[t.dataType]
              ? t.accepts[t.dataType] + ', */*'
              : t.accepts._default
          );
      } catch (t) {}
      if (t.beforeSend && !1 === t.beforeSend(x, t))
        return (
          t.global && !--f.active && f.event.trigger('ajaxStop'), x.abort(), !1
        );
      t.global && f.event.trigger('ajaxSend', [x, t]);
      var b = function (a) {
        if (0 == x.readyState)
          T &&
            (clearInterval(T),
            (T = null),
            t.global && !--f.active && f.event.trigger('ajaxStop'));
        else if (!v && x && (4 == x.readyState || 'timeout' == a)) {
          if (
            ((v = !0),
            T && (clearInterval(T), (T = null)),
            (d =
              'timeout' == a
                ? 'timeout'
                : f.httpSuccess(x)
                ? t.ifModified && f.httpNotModified(x, t.url)
                  ? 'notmodified'
                  : 'success'
                : 'error'),
            'success' == d)
          )
            try {
              o = f.httpData(x, t.dataType, t);
            } catch (t) {
              d = 'parsererror';
            }
          if ('success' == d) {
            var l;
            try {
              l = x.getResponseHeader('Last-Modified');
            } catch (t) {}
            t.ifModified && l && (f.lastModified[t.url] = l), i || e();
          } else f.handleError(t, x, d);
          n(), t.async && (x = null);
        }
      };
      if (t.async) {
        var T = setInterval(b, 13);
        0 < t.timeout &&
          setTimeout(function () {
            x && (!v && b('timeout'), x && x.abort());
          }, t.timeout);
      }
      try {
        x.send(t.data);
      } catch (n) {
        f.handleError(t, x, null, n);
      }
      return t.async || b(), x;
    },
    handleError: function (t, n, a, i) {
      t.error && t.error(n, a, i),
        t.global && f.event.trigger('ajaxError', [n, t, i]);
    },
    active: 0,
    httpSuccess: function (e) {
      try {
        return (
          (!e.status && 'file:' == location.protocol) ||
          (200 <= e.status && 300 > e.status) ||
          304 == e.status ||
          1223 == e.status
        );
      } catch (t) {}
      return !1;
    },
    httpNotModified: function (e, t) {
      try {
        var n = e.getResponseHeader('Last-Modified');
        return 304 == e.status || n == f.lastModified[t];
      } catch (t) {}
      return !1;
    },
    httpData: function (e, t, n) {
      var a = e.getResponseHeader('content-type'),
        i = 'xml' == t || (!t && a && 0 <= a.indexOf('xml')),
        d = i ? e.responseXML : e.responseText;
      if (i && 'parsererror' == d.documentElement.tagName) throw 'parsererror';
      return (
        n && n.dataFilter && (d = n.dataFilter(d, t)),
        'string' == typeof d &&
          ('script' == t && f.globalEval(d),
          'json' == t && (d = c.eval('(' + d + ')'))),
        d
      );
    },
    param: function (e) {
      function t(e, t) {
        n[n.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t);
      }
      var n = [];
      if (f.isArray(e) || e.jquery)
        f.each(e, function () {
          t(this.name, this.value);
        });
      else
        for (var a in e)
          f.isArray(e[a])
            ? f.each(e[a], function () {
                t(a, this);
              })
            : t(a, f.isFunction(e[a]) ? e[a]() : e[a]);
      return n.join('&').replace(/%20/g, '+');
    },
  });
  var j = {},
    L = [
      ['height', 'marginTop', 'marginBottom', 'paddingTop', 'paddingBottom'],
      ['width', 'marginLeft', 'marginRight', 'paddingLeft', 'paddingRight'],
      ['opacity'],
    ];
  f.fn.extend({
    show: function (e, t) {
      if (e) return this.animate(p('show', 3), e, t);
      for (var n, a = 0, d = this.length; a < d; a++)
        if (
          ((n = f.data(this[a], 'olddisplay')),
          (this[a].style.display = n || ''),
          'none' === f.css(this[a], 'display'))
        ) {
          var o,
            l = this[a].tagName;
          if (j[l]) o = j[l];
          else {
            var r = f('<' + l + ' />').appendTo('body');
            (o = r.css('display')),
              'none' === o && (o = 'block'),
              r.remove(),
              (j[l] = o);
          }
          this[a].style.display = f.data(this[a], 'olddisplay', o);
        }
      return this;
    },
    hide: function (e, t) {
      if (e) return this.animate(p('hide', 3), e, t);
      for (var n, a = 0, d = this.length; a < d; a++)
        (n = f.data(this[a], 'olddisplay')),
          n ||
            'none' === n ||
            f.data(this[a], 'olddisplay', f.css(this[a], 'display')),
          (this[a].style.display = 'none');
      return this;
    },
    _toggle: f.fn.toggle,
    toggle: function (e, t) {
      var n = 'boolean' == typeof e;
      return f.isFunction(e) && f.isFunction(t)
        ? this._toggle.apply(this, arguments)
        : null == e || n
        ? this.each(function () {
            var t = n ? e : f(this).is(':hidden');
            f(this)[t ? 'show' : 'hide']();
          })
        : this.animate(p('toggle', 3), e, t);
    },
    fadeTo: function (e, t, n) {
      return this.animate({ opacity: t }, e, n);
    },
    animate: function (t, n, a, i) {
      var d = f.speed(n, a, i);
      return this[!1 === d.queue ? 'each' : 'queue'](function () {
        var e,
          n = f.extend({}, d),
          a = 1 == this.nodeType && f(this).is(':hidden'),
          i = this;
        for (e in t) {
          if (('hide' == t[e] && a) || ('show' == t[e] && !a))
            return n.complete.call(this);
          ('height' == e || 'width' == e) &&
            this.style &&
            ((n.display = f.css(this, 'display')),
            (n.overflow = this.style.overflow));
        }
        return (
          null != n.overflow && (this.style.overflow = 'hidden'),
          (n.curAnim = f.extend({}, t)),
          f.each(t, function (d, o) {
            var l = new f.fx(i, n, d);
            if (/toggle|show|hide/.test(o))
              l['toggle' == o ? (a ? 'show' : 'hide') : o](t);
            else {
              var e = o.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),
                r = l.cur(!0) || 0;
              if (e) {
                var s = parseFloat(e[2]),
                  p = e[3] || 'px';
                'px' != p &&
                  ((i.style[d] = (s || 1) + p),
                  (r = ((s || 1) / l.cur(!0)) * r),
                  (i.style[d] = r + p)),
                  e[1] && (s = ('-=' == e[1] ? -1 : 1) * s + r),
                  l.custom(r, s, p);
              } else l.custom(r, o, '');
            }
          }),
          !0
        );
      });
    },
    stop: function (e, t) {
      var n = f.timers;
      return (
        e && this.queue([]),
        this.each(function () {
          for (var e = n.length - 1; 0 <= e; e--)
            n[e].elem == this && (t && n[e](!0), n.splice(e, 1));
        }),
        t || this.dequeue(),
        this
      );
    },
  }),
    f.each(
      {
        slideDown: p('show', 1),
        slideUp: p('hide', 1),
        slideToggle: p('toggle', 1),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
      },
      function (e, t) {
        f.fn[e] = function (e, n) {
          return this.animate(t, e, n);
        };
      }
    ),
    f.extend({
      speed: function (e, t, n) {
        var a =
          'object' == typeof e
            ? e
            : {
                complete: n || (!n && t) || (f.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !f.isFunction(t) && t),
              };
        return (
          (a.duration = f.fx.off
            ? 0
            : 'number' == typeof a.duration
            ? a.duration
            : f.fx.speeds[a.duration] || f.fx.speeds._default),
          (a.old = a.complete),
          (a.complete = function () {
            !1 !== a.queue && f(this).dequeue(),
              f.isFunction(a.old) && a.old.call(this);
          }),
          a
        );
      },
      easing: {
        linear: function (e, t, n, a) {
          return n + a * e;
        },
        swing: function (e, t, n, a) {
          return (-Math.cos(e * Math.PI) / 2 + 0.5) * a + n;
        },
      },
      timers: [],
      timerId: null,
      fx: function (e, t, n) {
        (this.options = t),
          (this.elem = e),
          (this.prop = n),
          t.orig || (t.orig = {});
      },
    }),
    (f.fx.prototype = {
      update: function () {
        this.options.step && this.options.step.call(this.elem, this.now, this),
          (f.fx.step[this.prop] || f.fx.step._default)(this),
          ('height' == this.prop || 'width' == this.prop) &&
            this.elem.style &&
            (this.elem.style.display = 'block');
      },
      cur: function (e) {
        if (
          null != this.elem[this.prop] &&
          (!this.elem.style || null == this.elem.style[this.prop])
        )
          return this.elem[this.prop];
        var t = parseFloat(f.css(this.elem, this.prop, e));
        return t && -1e4 < t
          ? t
          : parseFloat(f.curCSS(this.elem, this.prop)) || 0;
      },
      custom: function (e, n, i) {
        function d(e) {
          return t.step(e);
        }
        (this.startTime = a()),
          (this.start = e),
          (this.end = n),
          (this.unit = i || this.unit || 'px'),
          (this.now = this.start),
          (this.pos = this.state = 0);
        var t = this;
        (d.elem = this.elem),
          f.timers.push(d),
          d() &&
            null == f.timerId &&
            (f.timerId = setInterval(function () {
              for (var e = f.timers, t = 0; t < e.length; t++)
                e[t]() || e.splice(t--, 1);
              e.length || (clearInterval(f.timerId), (f.timerId = null));
            }, 13));
      },
      show: function () {
        (this.options.orig[this.prop] = f.attr(this.elem.style, this.prop)),
          (this.options.show = !0),
          this.custom(
            'width' == this.prop || 'height' == this.prop ? 1 : 0,
            this.cur()
          ),
          f(this.elem).show();
      },
      hide: function () {
        (this.options.orig[this.prop] = f.attr(this.elem.style, this.prop)),
          (this.options.hide = !0),
          this.custom(this.cur(), 0);
      },
      step: function (e) {
        var d = a();
        if (e || d >= this.options.duration + this.startTime) {
          (this.now = this.end),
            (this.pos = this.state = 1),
            this.update(),
            (this.options.curAnim[this.prop] = !0);
          var t = !0;
          for (var o in this.options.curAnim)
            !0 !== this.options.curAnim[o] && (t = !1);
          if (
            t &&
            (null != this.options.display &&
              ((this.elem.style.overflow = this.options.overflow),
              (this.elem.style.display = this.options.display),
              'none' == f.css(this.elem, 'display') &&
                (this.elem.style.display = 'block')),
            this.options.hide && f(this.elem).hide(),
            this.options.hide || this.options.show)
          )
            for (var l in this.options.curAnim)
              f.attr(this.elem.style, l, this.options.orig[l]);
          return t && this.options.complete.call(this.elem), !1;
        }
        var r = d - this.startTime;
        return (
          (this.state = r / this.options.duration),
          (this.pos = f.easing[
            this.options.easing || (f.easing.swing ? 'swing' : 'linear')
          ](this.state, r, 0, 1, this.options.duration)),
          (this.now = this.start + (this.end - this.start) * this.pos),
          this.update(),
          !0
        );
      },
    }),
    f.extend(f.fx, {
      speeds: { slow: 600, fast: 200, _default: 400 },
      step: {
        opacity: function (e) {
          f.attr(e.elem.style, 'opacity', e.now);
        },
        _default: function (e) {
          e.elem.style && null != e.elem.style[e.prop]
            ? (e.elem.style[e.prop] = e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (f.fn.offset = document.documentElement.getBoundingClientRect
      ? function () {
          if (!this[0]) return { top: 0, left: 0 };
          if (this[0] === this[0].ownerDocument.body)
            return f.offset.bodyOffset(this[0]);
          var e = this[0].getBoundingClientRect(),
            t = this[0].ownerDocument,
            n = t.body,
            a = t.documentElement,
            i = a.clientTop || n.clientTop || 0,
            d = a.clientLeft || n.clientLeft || 0,
            o =
              e.top +
              (self.pageYOffset || (f.boxModel && a.scrollTop) || n.scrollTop) -
              i,
            l =
              e.left +
              (self.pageXOffset ||
                (f.boxModel && a.scrollLeft) ||
                n.scrollLeft) -
              d;
          return { top: o, left: l };
        }
      : function () {
          if (!this[0]) return { top: 0, left: 0 };
          if (this[0] === this[0].ownerDocument.body)
            return f.offset.bodyOffset(this[0]);
          f.offset.initialized || f.offset.initialize();
          for (
            var t,
              n = this[0],
              a = n.offsetParent,
              i = n,
              d = n.ownerDocument,
              o = d.documentElement,
              l = d.body,
              r = d.defaultView,
              s = r.getComputedStyle(n, null),
              p = n.offsetTop,
              c = n.offsetLeft;
            (n = n.parentNode) && n !== l && n !== o;

          )
            (t = r.getComputedStyle(n, null)),
              (p -= n.scrollTop),
              (c -= n.scrollLeft),
              n === a &&
                ((p += n.offsetTop),
                (c += n.offsetLeft),
                f.offset.doesNotAddBorder &&
                  !(
                    f.offset.doesAddBorderForTableAndCells &&
                    /^t(able|d|h)$/i.test(n.tagName)
                  ) &&
                  ((p += parseInt(t.borderTopWidth, 10) || 0),
                  (c += parseInt(t.borderLeftWidth, 10) || 0)),
                (i = a),
                (a = n.offsetParent)),
              f.offset.subtractsBorderForOverflowNotVisible &&
                'visible' !== t.overflow &&
                ((p += parseInt(t.borderTopWidth, 10) || 0),
                (c += parseInt(t.borderLeftWidth, 10) || 0)),
              (s = t);
          return (
            ('relative' === s.position || 'static' === s.position) &&
              ((p += l.offsetTop), (c += l.offsetLeft)),
            'fixed' === s.position &&
              ((p += e(o.scrollTop, l.scrollTop)),
              (c += e(o.scrollLeft, l.scrollLeft))),
            { top: p, left: c }
          );
        }),
    (f.offset = {
      initialize: function () {
        if (!this.initialized) {
          var e,
            t,
            n,
            a,
            i,
            d = document.body,
            o = document.createElement('div'),
            l = d.style.marginTop;
          for (i in ((a = {
            position: 'absolute',
            top: 0,
            left: 0,
            margin: 0,
            border: 0,
            width: '1px',
            height: '1px',
            visibility: 'hidden',
          }),
          a))
            o.style[i] = a[i];
          (o.innerHTML =
            '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"cellpadding="0"cellspacing="0"><tr><td></td></tr></table>'),
            d.insertBefore(o, d.firstChild),
            (e = o.firstChild),
            (t = e.firstChild),
            (n = e.nextSibling.firstChild.firstChild),
            (this.doesNotAddBorder = 5 !== t.offsetTop),
            (this.doesAddBorderForTableAndCells = 5 === n.offsetTop),
            (e.style.overflow = 'hidden'),
            (e.style.position = 'relative'),
            (this.subtractsBorderForOverflowNotVisible = -5 === t.offsetTop),
            (d.style.marginTop = '1px'),
            (this.doesNotIncludeMarginInBodyOffset = 0 === d.offsetTop),
            (d.style.marginTop = l),
            d.removeChild(o),
            (this.initialized = !0);
        }
      },
      bodyOffset: function (e) {
        f.offset.initialized || f.offset.initialize();
        var t = e.offsetTop,
          n = e.offsetLeft;
        return (
          f.offset.doesNotIncludeMarginInBodyOffset &&
            ((t += parseInt(f.curCSS(e, 'marginTop', !0), 10) || 0),
            (n += parseInt(f.curCSS(e, 'marginLeft', !0), 10) || 0)),
          { top: t, left: n }
        );
      },
    }),
    f.fn.extend({
      position: function () {
        var e;
        if (this[0]) {
          var t = this.offsetParent(),
            n = this.offset(),
            a = /^body|html$/i.test(t[0].tagName)
              ? { top: 0, left: 0 }
              : t.offset();
          (n.top -= i(this, 'marginTop')),
            (n.left -= i(this, 'marginLeft')),
            (a.top += i(t, 'borderTopWidth')),
            (a.left += i(t, 'borderLeftWidth')),
            (e = { top: n.top - a.top, left: n.left - a.left });
        }
        return e;
      },
      offsetParent: function () {
        for (
          var e = this[0].offsetParent || document.body;
          e &&
          !/^body|html$/i.test(e.tagName) &&
          'static' == f.css(e, 'position');

        )
          e = e.offsetParent;
        return f(e);
      },
    }),
    f.each(['Left', 'Top'], function (e, t) {
      var n = 'scroll' + t;
      f.fn[n] = function (t) {
        return this[0]
          ? t === void 0
            ? this[0] == c || this[0] == document
              ? self[e ? 'pageYOffset' : 'pageXOffset'] ||
                (f.boxModel && document.documentElement[n]) ||
                document.body[n]
              : this[0][n]
            : this.each(function () {
                this == c || this == document
                  ? c.scrollTo(
                      e ? f(c).scrollLeft() : t,
                      e ? t : f(c).scrollTop()
                    )
                  : (this[n] = t);
              })
          : null;
      };
    }),
    f.each(['Height', 'Width'], function (t, n) {
      var a = t ? 'Left' : 'Top',
        d = t ? 'Right' : 'Bottom';
      (f.fn['inner' + n] = function () {
        return (
          this[n.toLowerCase()]() +
          i(this, 'padding' + a) +
          i(this, 'padding' + d)
        );
      }),
        (f.fn['outer' + n] = function (e) {
          return (
            this['inner' + n]() +
            i(this, 'border' + a + 'Width') +
            i(this, 'border' + d + 'Width') +
            (e ? i(this, 'margin' + a) + i(this, 'margin' + d) : 0)
          );
        });
      var o = n.toLowerCase();
      f.fn[o] = function (t) {
        return this[0] == c
          ? ('CSS1Compat' == document.compatMode &&
              document.documentElement['client' + n]) ||
              document.body['client' + n]
          : this[0] == document
          ? e(
              document.documentElement['client' + n],
              document.body['scroll' + n],
              document.documentElement['scroll' + n],
              document.body['offset' + n],
              document.documentElement['offset' + n]
            )
          : t === void 0
          ? this.length
            ? f.css(this[0], o)
            : null
          : this.css(o, 'string' == typeof t ? t : t + 'px');
      };
    });
})();
