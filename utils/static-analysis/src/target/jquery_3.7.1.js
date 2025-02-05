(function (global, factory) {
  Symbol('JSCA_1_13');
  ('use strict');
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = global.document
      ? factory(global, true)
      : function (w) {
          Symbol('JSCA_4_9');
          if (!w.document) {
            throw new Error('jQuery requires a window with a document');
          }
          return factory(w);
        };
  } else {
    factory(global);
  }
})(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
  Symbol('JSCA_13_5862');
  ('use strict');
  var arr = [];
  var getProto = Object.getPrototypeOf;
  var slice = arr.slice;
  var flat = arr.flat
    ? function (array) {
        Symbol('JSCA_18_20');
        return arr.flat.call(array);
      }
    : function (array) {
        Symbol('JSCA_20_22');
        return arr.concat.apply([], array);
      };
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};
  var isFunction = function isFunction(obj) {
    Symbol('JSCA_31_33');
    return (
      typeof obj === 'function' &&
      typeof obj.nodeType !== 'number' &&
      typeof obj.item !== 'function'
    );
  };
  var isWindow = function isWindow(obj) {
    Symbol('JSCA_34_36');
    return obj != null && obj === obj.window;
  };
  var document = window.document;
  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true,
  };
  function DOMEval(code, node, doc) {
    Symbol('JSCA_44_57');
    doc = doc || document;
    var i,
      val,
      script = doc.createElement('script');
    script.text = code;
    if (node) {
      for (i in preservedScriptAttributes) {
        val = node[i] || (node.getAttribute && node.getAttribute(i));
        if (val) {
          script.setAttribute(i, val);
        }
      }
    }
    doc.head.appendChild(script).parentNode.removeChild(script);
  }
  function toType(obj) {
    Symbol('JSCA_58_63');
    if (obj == null) {
      return obj + '';
    }
    return typeof obj === 'object' || typeof obj === 'function'
      ? class2type[toString.call(obj)] || 'object'
      : typeof obj;
  }
  var version = '3.7.1',
    rhtmlSuffix = /HTML$/i,
    jQuery = function (selector, context) {
      Symbol('JSCA_64_66');
      return new jQuery.fn.init(selector, context);
    };
  jQuery.fn = jQuery.prototype = {
    jquery: version,
    constructor: jQuery,
    length: 0,
    toArray: function () {
      Symbol('JSCA_71_73');
      return slice.call(this);
    },
    get: function (num) {
      Symbol('JSCA_74_79');
      if (num == null) {
        return slice.call(this);
      }
      return num < 0 ? this[num + this.length] : this[num];
    },
    pushStack: function (elems) {
      Symbol('JSCA_80_84');
      var ret = jQuery.merge(this.constructor(), elems);
      ret.prevObject = this;
      return ret;
    },
    each: function (callback) {
      Symbol('JSCA_85_87');
      return jQuery.each(this, callback);
    },
    map: function (callback) {
      Symbol('JSCA_88_92');
      return this.pushStack(
        jQuery.map(this, function (elem, i) {
          Symbol('JSCA_89_91');
          return callback.call(elem, i, elem);
        })
      );
    },
    slice: function () {
      Symbol('JSCA_93_95');
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function () {
      Symbol('JSCA_96_98');
      return this.eq(0);
    },
    last: function () {
      Symbol('JSCA_99_101');
      return this.eq(-1);
    },
    even: function () {
      Symbol('JSCA_102_106');
      return this.pushStack(
        jQuery.grep(this, function (_elem, i) {
          Symbol('JSCA_103_105');
          return (i + 1) % 2;
        })
      );
    },
    odd: function () {
      Symbol('JSCA_107_111');
      return this.pushStack(
        jQuery.grep(this, function (_elem, i) {
          Symbol('JSCA_108_110');
          return i % 2;
        })
      );
    },
    eq: function (i) {
      Symbol('JSCA_112_115');
      var len = this.length,
        j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function () {
      Symbol('JSCA_116_118');
      return this.prevObject || this.constructor();
    },
    push: push,
    sort: arr.sort,
    splice: arr.splice,
  };
  jQuery.extend = jQuery.fn.extend = function () {
    Symbol('JSCA_123_162');
    var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;
    if (typeof target === 'boolean') {
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    if (typeof target !== 'object' && !isFunction(target)) {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
        for (name in options) {
          copy = options[name];
          if (name === '__proto__' || target === copy) {
            continue;
          }
          if (
            deep &&
            copy &&
            (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))
          ) {
            src = target[name];
            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }
            copyIsArray = false;
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    expando: 'jQuery' + (version + Math.random()).replace(/\D/g, ''),
    isReady: true,
    error: function (msg) {
      Symbol('JSCA_166_168');
      throw new Error(msg);
    },
    noop: function () {
      Symbol('JSCA_169_169');
    },
    isPlainObject: function (obj) {
      Symbol('JSCA_170_181');
      var proto, Ctor;
      if (!obj || toString.call(obj) !== '[object Object]') {
        return false;
      }
      proto = getProto(obj);
      if (!proto) {
        return true;
      }
      Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
      return (
        typeof Ctor === 'function' &&
        fnToString.call(Ctor) === ObjectFunctionString
      );
    },
    isEmptyObject: function (obj) {
      Symbol('JSCA_182_188');
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    globalEval: function (code, options, doc) {
      Symbol('JSCA_189_193');
      DOMEval(
        code,
        {
          nonce: options && options.nonce,
        },
        doc
      );
    },
    each: function (obj, callback) {
      Symbol('JSCA_194_211');
      var length,
        i = 0;
      if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }
      return obj;
    },
    text: function (elem) {
      Symbol('JSCA_212_229');
      var node,
        ret = '',
        i = 0,
        nodeType = elem.nodeType;
      if (!nodeType) {
        while ((node = elem[i++])) {
          ret += jQuery.text(node);
        }
      }
      if (nodeType === 1 || nodeType === 11) {
        return elem.textContent;
      }
      if (nodeType === 9) {
        return elem.documentElement.textContent;
      }
      if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      }
      return ret;
    },
    makeArray: function (arr, results) {
      Symbol('JSCA_230_240');
      var ret = results || [];
      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === 'string' ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }
      return ret;
    },
    inArray: function (elem, arr, i) {
      Symbol('JSCA_241_243');
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    isXMLDoc: function (elem) {
      Symbol('JSCA_244_247');
      var namespace = elem && elem.namespaceURI,
        docElem = elem && (elem.ownerDocument || elem).documentElement;
      return !rhtmlSuffix.test(
        namespace || (docElem && docElem.nodeName) || 'HTML'
      );
    },
    merge: function (first, second) {
      Symbol('JSCA_248_255');
      var len = +second.length,
        j = 0,
        i = first.length;
      for (; j < len; j++) {
        first[i++] = second[j];
      }
      first.length = i;
      return first;
    },
    grep: function (elems, callback, invert) {
      Symbol('JSCA_256_265');
      var callbackInverse,
        matches = [],
        i = 0,
        length = elems.length,
        callbackExpect = !invert;
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }
      return matches;
    },
    map: function (elems, callback, arg) {
      Symbol('JSCA_266_285');
      var length,
        value,
        i = 0,
        ret = [];
      if (isArrayLike(elems)) {
        length = elems.length;
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      }
      return flat(ret);
    },
    guid: 1,
    support: support,
  });
  if (typeof Symbol === 'function') {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  }
  jQuery.each(
    'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
      ' '
    ),
    function (_i, name) {
      Symbol('JSCA_292_294');
      class2type['[object ' + name + ']'] = name.toLowerCase();
    }
  );
  function isArrayLike(obj) {
    Symbol('JSCA_295_301');
    var length = !!obj && 'length' in obj && obj.length,
      type = toType(obj);
    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }
    return (
      type === 'array' ||
      length === 0 ||
      (typeof length === 'number' && length > 0 && length - 1 in obj)
    );
  }
  function nodeName(elem, name) {
    Symbol('JSCA_302_304');
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }
  var pop = arr.pop;
  var sort = arr.sort;
  var splice = arr.splice;
  var whitespace = '[\\x20\\t\\r\\n\\f]';
  var rtrimCSS = new RegExp(
    '^' + whitespace + '+|((?:^|[^\\\\])(?:\\\\.)*)' + whitespace + '+$',
    'g'
  );
  jQuery.contains = function (a, b) {
    Symbol('JSCA_310_313');
    var bup = b && b.parentNode;
    return (
      a === bup ||
      !!(
        bup &&
        bup.nodeType === 1 &&
        (a.contains
          ? a.contains(bup)
          : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16)
      )
    );
  };
  var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function fcssescape(ch, asCodePoint) {
    Symbol('JSCA_315_323');
    if (asCodePoint) {
      if (ch === '\0') {
        return '\uFFFD';
      }
      return (
        ch.slice(0, -1) + '\\' + ch.charCodeAt(ch.length - 1).toString(16) + ' '
      );
    }
    return '\\' + ch;
  }
  jQuery.escapeSelector = function (sel) {
    Symbol('JSCA_324_326');
    return (sel + '').replace(rcssescape, fcssescape);
  };
  var preferredDoc = document,
    pushNative = push;
  (function () {
    Symbol('JSCA_328_1396');
    var i,
      Expr,
      outermostContext,
      sortInput,
      hasDuplicate,
      push = pushNative,
      document,
      documentElement,
      documentIsHTML,
      rbuggyQSA,
      matches,
      expando = jQuery.expando,
      dirruns = 0,
      done = 0,
      classCache = createCache(),
      tokenCache = createCache(),
      compilerCache = createCache(),
      nonnativeSelectorCache = createCache(),
      sortOrder = function (a, b) {
        Symbol('JSCA_329_334');
        if (a === b) {
          hasDuplicate = true;
        }
        return 0;
      },
      booleans =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|' +
        'loop|multiple|open|readonly|required|scoped',
      identifier =
        '(?:\\\\[\\da-fA-F]{1,6}' +
        whitespace +
        '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      attributes =
        '\\[' +
        whitespace +
        '*(' +
        identifier +
        ')(?:' +
        whitespace +
        '*([*^$|!~]?=)' +
        whitespace +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        identifier +
        '))|)' +
        whitespace +
        '*\\]',
      pseudos =
        ':(' +
        identifier +
        ')(?:\\((' +
        '(\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|' +
        '((?:\\\\.|[^\\\\()[\\]]|' +
        attributes +
        ')*)|' +
        '.*' +
        ')\\)|)',
      rwhitespace = new RegExp(whitespace + '+', 'g'),
      rcomma = new RegExp('^' + whitespace + '*,' + whitespace + '*'),
      rleadingCombinator = new RegExp(
        '^' + whitespace + '*([>+~]|' + whitespace + ')' + whitespace + '*'
      ),
      rdescend = new RegExp(whitespace + '|>'),
      rpseudo = new RegExp(pseudos),
      ridentifier = new RegExp('^' + identifier + '$'),
      matchExpr = {
        ID: new RegExp('^#(' + identifier + ')'),
        CLASS: new RegExp('^\\.(' + identifier + ')'),
        TAG: new RegExp('^(' + identifier + '|[*])'),
        ATTR: new RegExp('^' + attributes),
        PSEUDO: new RegExp('^' + pseudos),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            whitespace +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            whitespace +
            '*(?:([+-]|)' +
            whitespace +
            '*(\\d+)|))' +
            whitespace +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + booleans + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            whitespace +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            whitespace +
            '*((?:-\\d)?\\d*)' +
            whitespace +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      rinputs = /^(?:input|select|textarea|button)$/i,
      rheader = /^h\d$/i,
      rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      rsibling = /[+~]/,
      runescape = new RegExp(
        '\\\\[\\da-fA-F]{1,6}' + whitespace + '?|\\\\([^\\r\\n\\f])',
        'g'
      ),
      funescape = function (escape, nonHex) {
        Symbol('JSCA_343_349');
        var high = '0x' + escape.slice(1) - 0x10000;
        if (nonHex) {
          return nonHex;
        }
        return high < 0
          ? String.fromCharCode(high + 0x10000)
          : String.fromCharCode((high >> 10) | 0xd800, (high & 0x3ff) | 0xdc00);
      },
      unloadHandler = function () {
        Symbol('JSCA_349_351');
        setDocument();
      },
      inDisabledFieldset = addCombinator(
        function (elem) {
          Symbol('JSCA_351_353');
          return elem.disabled === true && nodeName(elem, 'fieldset');
        },
        {
          dir: 'parentNode',
          next: 'legend',
        }
      );
    function safeActiveElement() {
      Symbol('JSCA_357_361');
      try {
        return document.activeElement;
      } catch (err) {}
    }
    try {
      push.apply(
        (arr = slice.call(preferredDoc.childNodes)),
        preferredDoc.childNodes
      );
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: function (target, els) {
          Symbol('JSCA_367_369');
          pushNative.apply(target, slice.call(els));
        },
        call: function (target) {
          Symbol('JSCA_370_372');
          pushNative.apply(target, slice.call(arguments, 1));
        },
      };
    }
    function find(selector, context, results, seed) {
      Symbol('JSCA_375_443');
      var m,
        i,
        elem,
        nid,
        match,
        groups,
        newSelector,
        newContext = context && context.ownerDocument,
        nodeType = context ? context.nodeType : 9;
      results = results || [];
      if (
        typeof selector !== 'string' ||
        !selector ||
        (nodeType !== 1 && nodeType !== 9 && nodeType !== 11)
      ) {
        return results;
      }
      if (!seed) {
        setDocument(context);
        context = context || document;
        if (documentIsHTML) {
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            if ((m = match[1])) {
              if (nodeType === 9) {
                if ((elem = context.getElementById(m))) {
                  if (elem.id === m) {
                    push.call(results, elem);
                    return results;
                  }
                } else {
                  return results;
                }
              } else {
                if (
                  newContext &&
                  (elem = newContext.getElementById(m)) &&
                  find.contains(context, elem) &&
                  elem.id === m
                ) {
                  push.call(results, elem);
                  return results;
                }
              }
            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results;
            } else if ((m = match[3]) && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          }
          if (
            !nonnativeSelectorCache[selector + ' '] &&
            (!rbuggyQSA || !rbuggyQSA.test(selector))
          ) {
            newSelector = selector;
            newContext = context;
            if (
              nodeType === 1 &&
              (rdescend.test(selector) || rleadingCombinator.test(selector))
            ) {
              newContext =
                (rsibling.test(selector) && testContext(context.parentNode)) ||
                context;
              if (newContext != context || !support.scope) {
                if ((nid = context.getAttribute('id'))) {
                  nid = jQuery.escapeSelector(nid);
                } else {
                  context.setAttribute('id', (nid = expando));
                }
              }
              groups = tokenize(selector);
              i = groups.length;
              while (i--) {
                groups[i] =
                  (nid ? '#' + nid : ':scope') + ' ' + toSelector(groups[i]);
              }
              newSelector = groups.join(',');
            }
            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute('id');
              }
            }
          }
        }
      }
      return select(selector.replace(rtrimCSS, '$1'), context, results, seed);
    }
    function createCache() {
      Symbol('JSCA_444_453');
      var keys = [];
      function cache(key, value) {
        Symbol('JSCA_446_451');
        if (keys.push(key + ' ') > Expr.cacheLength) {
          delete cache[keys.shift()];
        }
        return (cache[key + ' '] = value);
      }
      return cache;
    }
    function markFunction(fn) {
      Symbol('JSCA_454_457');
      fn[expando] = true;
      return fn;
    }
    function assert(fn) {
      Symbol('JSCA_458_470');
      var el = document.createElement('fieldset');
      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
        el = null;
      }
    }
    function createInputPseudo(type) {
      Symbol('JSCA_471_475');
      return function (elem) {
        Symbol('JSCA_472_474');
        return nodeName(elem, 'input') && elem.type === type;
      };
    }
    function createButtonPseudo(type) {
      Symbol('JSCA_476_480');
      return function (elem) {
        Symbol('JSCA_477_479');
        return (
          (nodeName(elem, 'input') || nodeName(elem, 'button')) &&
          elem.type === type
        );
      };
    }
    function createDisabledPseudo(disabled) {
      Symbol('JSCA_481_500');
      return function (elem) {
        Symbol('JSCA_482_499');
        if ('form' in elem) {
          if (elem.parentNode && elem.disabled === false) {
            if ('label' in elem) {
              if ('label' in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            }
            return (
              elem.isDisabled === disabled ||
              (elem.isDisabled !== !disabled &&
                inDisabledFieldset(elem) === disabled)
            );
          }
          return elem.disabled === disabled;
        } else if ('label' in elem) {
          return elem.disabled === disabled;
        }
        return false;
      };
    }
    function createPositionalPseudo(fn) {
      Symbol('JSCA_501_513');
      return markFunction(function (argument) {
        Symbol('JSCA_502_512');
        argument = +argument;
        return markFunction(function (seed, matches) {
          Symbol('JSCA_504_511');
          var j,
            matchIndexes = fn([], seed.length, argument),
            i = matchIndexes.length;
          while (i--) {
            if (seed[(j = matchIndexes[i])]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    function testContext(context) {
      Symbol('JSCA_514_516');
      return (
        context &&
        typeof context.getElementsByTagName !== 'undefined' &&
        context
      );
    }
    function setDocument(node) {
      Symbol('JSCA_517_657');
      var subWindow,
        doc = node ? node.ownerDocument || node : preferredDoc;
      if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      }
      document = doc;
      documentElement = document.documentElement;
      documentIsHTML = !jQuery.isXMLDoc(document);
      matches =
        documentElement.matches ||
        documentElement.webkitMatchesSelector ||
        documentElement.msMatchesSelector;
      if (
        documentElement.msMatchesSelector &&
        preferredDoc != document &&
        (subWindow = document.defaultView) &&
        subWindow.top !== subWindow
      ) {
        subWindow.addEventListener('unload', unloadHandler);
      }
      support.getById = assert(function (el) {
        Symbol('JSCA_529_532');
        documentElement.appendChild(el).id = jQuery.expando;
        return (
          !document.getElementsByName ||
          !document.getElementsByName(jQuery.expando).length
        );
      });
      support.disconnectedMatch = assert(function (el) {
        Symbol('JSCA_533_535');
        return matches.call(el, '*');
      });
      support.scope = assert(function () {
        Symbol('JSCA_536_538');
        return document.querySelectorAll(':scope');
      });
      support.cssHas = assert(function () {
        Symbol('JSCA_539_546');
        try {
          document.querySelector(':has(*,:jqfake)');
          return false;
        } catch (e) {
          return true;
        }
      });
      if (support.getById) {
        Expr.filter.ID = function (id) {
          Symbol('JSCA_548_553');
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            Symbol('JSCA_550_552');
            return elem.getAttribute('id') === attrId;
          };
        };
        Expr.find.ID = function (id, context) {
          Symbol('JSCA_554_559');
          if (typeof context.getElementById !== 'undefined' && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter.ID = function (id) {
          Symbol('JSCA_561_567');
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            Symbol('JSCA_563_566');
            var node =
              typeof elem.getAttributeNode !== 'undefined' &&
              elem.getAttributeNode('id');
            return node && node.value === attrId;
          };
        };
        Expr.find.ID = function (id, context) {
          Symbol('JSCA_568_587');
          if (typeof context.getElementById !== 'undefined' && documentIsHTML) {
            var node,
              i,
              elems,
              elem = context.getElementById(id);
            if (elem) {
              node = elem.getAttributeNode('id');
              if (node && node.value === id) {
                return [elem];
              }
              elems = context.getElementsByName(id);
              i = 0;
              while ((elem = elems[i++])) {
                node = elem.getAttributeNode('id');
                if (node && node.value === id) {
                  return [elem];
                }
              }
            }
            return [];
          }
        };
      }
      Expr.find.TAG = function (tag, context) {
        Symbol('JSCA_589_595');
        if (typeof context.getElementsByTagName !== 'undefined') {
          return context.getElementsByTagName(tag);
        } else {
          return context.querySelectorAll(tag);
        }
      };
      Expr.find.CLASS = function (className, context) {
        Symbol('JSCA_596_600');
        if (
          typeof context.getElementsByClassName !== 'undefined' &&
          documentIsHTML
        ) {
          return context.getElementsByClassName(className);
        }
      };
      rbuggyQSA = [];
      assert(function (el) {
        Symbol('JSCA_602_630');
        var input;
        documentElement.appendChild(el).innerHTML =
          "<a id='" +
          expando +
          "' href='' disabled='disabled'></a>" +
          "<select id='" +
          expando +
          "-\r\\' disabled='disabled'>" +
          "<option selected=''></option></select>";
        if (!el.querySelectorAll('[selected]').length) {
          rbuggyQSA.push('\\[' + whitespace + '*(?:value|' + booleans + ')');
        }
        if (!el.querySelectorAll('[id~=' + expando + '-]').length) {
          rbuggyQSA.push('~=');
        }
        if (!el.querySelectorAll('a#' + expando + '+*').length) {
          rbuggyQSA.push('.#.+[+~]');
        }
        if (!el.querySelectorAll(':checked').length) {
          rbuggyQSA.push(':checked');
        }
        input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        el.appendChild(input).setAttribute('name', 'D');
        documentElement.appendChild(el).disabled = true;
        if (el.querySelectorAll(':disabled').length !== 2) {
          rbuggyQSA.push(':enabled', ':disabled');
        }
        input = document.createElement('input');
        input.setAttribute('name', '');
        el.appendChild(input);
        if (!el.querySelectorAll("[name='']").length) {
          rbuggyQSA.push(
            '\\[' +
              whitespace +
              '*name' +
              whitespace +
              '*=' +
              whitespace +
              '*(?:\'\'|"")'
          );
        }
      });
      if (!support.cssHas) {
        rbuggyQSA.push(':has');
      }
      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join('|'));
      sortOrder = function (a, b) {
        Symbol('JSCA_635_655');
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        if (compare) {
          return compare;
        }
        compare =
          (a.ownerDocument || a) == (b.ownerDocument || b)
            ? a.compareDocumentPosition(b)
            : 1;
        if (
          compare & 1 ||
          (!support.sortDetached && b.compareDocumentPosition(a) === compare)
        ) {
          if (
            a === document ||
            (a.ownerDocument == preferredDoc && find.contains(preferredDoc, a))
          ) {
            return -1;
          }
          if (
            b === document ||
            (b.ownerDocument == preferredDoc && find.contains(preferredDoc, b))
          ) {
            return 1;
          }
          return sortInput
            ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b)
            : 0;
        }
        return compare & 4 ? -1 : 1;
      };
      return document;
    }
    find.matches = function (expr, elements) {
      Symbol('JSCA_658_660');
      return find(expr, null, null, elements);
    };
    find.matchesSelector = function (elem, expr) {
      Symbol('JSCA_661_674');
      setDocument(elem);
      if (
        documentIsHTML &&
        !nonnativeSelectorCache[expr + ' '] &&
        (!rbuggyQSA || !rbuggyQSA.test(expr))
      ) {
        try {
          var ret = matches.call(elem, expr);
          if (
            ret ||
            support.disconnectedMatch ||
            (elem.document && elem.document.nodeType !== 11)
          ) {
            return ret;
          }
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }
      return find(expr, document, null, [elem]).length > 0;
    };
    find.contains = function (context, elem) {
      Symbol('JSCA_675_680');
      if ((context.ownerDocument || context) != document) {
        setDocument(context);
      }
      return jQuery.contains(context, elem);
    };
    find.attr = function (elem, name) {
      Symbol('JSCA_681_690');
      if ((elem.ownerDocument || elem) != document) {
        setDocument(elem);
      }
      var fn = Expr.attrHandle[name.toLowerCase()],
        val =
          fn && hasOwn.call(Expr.attrHandle, name.toLowerCase())
            ? fn(elem, name, !documentIsHTML)
            : undefined;
      if (val !== undefined) {
        return val;
      }
      return elem.getAttribute(name);
    };
    find.error = function (msg) {
      Symbol('JSCA_691_693');
      throw new Error('Syntax error, unrecognized expression: ' + msg);
    };
    jQuery.uniqueSort = function (results) {
      Symbol('JSCA_694_711');
      var elem,
        duplicates = [],
        j = 0,
        i = 0;
      hasDuplicate = !support.sortStable;
      sortInput = !support.sortStable && slice.call(results, 0);
      sort.call(results, sortOrder);
      if (hasDuplicate) {
        while ((elem = results[i++])) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }
        while (j--) {
          splice.call(results, duplicates[j], 1);
        }
      }
      sortInput = null;
      return results;
    };
    jQuery.fn.uniqueSort = function () {
      Symbol('JSCA_712_714');
      return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
    };
    Expr = jQuery.expr = {
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        '>': {
          dir: 'parentNode',
          first: true,
        },
        ' ': {
          dir: 'parentNode',
        },
        '+': {
          dir: 'previousSibling',
          first: true,
        },
        '~': {
          dir: 'previousSibling',
        },
      },
      preFilter: {
        ATTR: function (match) {
          Symbol('JSCA_738_745');
          match[1] = match[1].replace(runescape, funescape);
          match[3] = (match[3] || match[4] || match[5] || '').replace(
            runescape,
            funescape
          );
          if (match[2] === '~=') {
            match[3] = ' ' + match[3] + ' ';
          }
          return match.slice(0, 4);
        },
        CHILD: function (match) {
          Symbol('JSCA_746_758');
          match[1] = match[1].toLowerCase();
          if (match[1].slice(0, 3) === 'nth') {
            if (!match[3]) {
              find.error(match[0]);
            }
            match[4] = +(match[4]
              ? match[5] + (match[6] || 1)
              : 2 * (match[3] === 'even' || match[3] === 'odd'));
            match[5] = +(match[7] + match[8] || match[3] === 'odd');
          } else if (match[3]) {
            find.error(match[0]);
          }
          return match;
        },
        PSEUDO: function (match) {
          Symbol('JSCA_759_771');
          var excess,
            unquoted = !match[6] && match[2];
          if (matchExpr.CHILD.test(match[0])) {
            return null;
          }
          if (match[3]) {
            match[2] = match[4] || match[5] || '';
          } else if (
            unquoted &&
            rpseudo.test(unquoted) &&
            (excess = tokenize(unquoted, true)) &&
            (excess =
              unquoted.indexOf(')', unquoted.length - excess) - unquoted.length)
          ) {
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          }
          return match.slice(0, 3);
        },
      },
      filter: {
        TAG: function (nodeNameSelector) {
          Symbol('JSCA_774_781');
          var expectedNodeName = nodeNameSelector
            .replace(runescape, funescape)
            .toLowerCase();
          return nodeNameSelector === '*'
            ? function () {
                Symbol('JSCA_776_778');
                return true;
              }
            : function (elem) {
                Symbol('JSCA_778_780');
                return nodeName(elem, expectedNodeName);
              };
        },
        CLASS: function (className) {
          Symbol('JSCA_782_787');
          var pattern = classCache[className + ' '];
          return (
            pattern ||
            ((pattern = new RegExp(
              '(^|' + whitespace + ')' + className + '(' + whitespace + '|$)'
            )) &&
              classCache(className, function (elem) {
                Symbol('JSCA_784_786');
                return pattern.test(
                  (typeof elem.className === 'string' && elem.className) ||
                    (typeof elem.getAttribute !== 'undefined' &&
                      elem.getAttribute('class')) ||
                    ''
                );
              }))
          );
        },
        ATTR: function (name, operator, check) {
          Symbol('JSCA_788_821');
          return function (elem) {
            Symbol('JSCA_789_820');
            var result = find.attr(elem, name);
            if (result == null) {
              return operator === '!=';
            }
            if (!operator) {
              return true;
            }
            result += '';
            if (operator === '=') {
              return result === check;
            }
            if (operator === '!=') {
              return result !== check;
            }
            if (operator === '^=') {
              return check && result.indexOf(check) === 0;
            }
            if (operator === '*=') {
              return check && result.indexOf(check) > -1;
            }
            if (operator === '$=') {
              return check && result.slice(-check.length) === check;
            }
            if (operator === '~=') {
              return (
                (' ' + result.replace(rwhitespace, ' ') + ' ').indexOf(check) >
                -1
              );
            }
            if (operator === '|=') {
              return (
                result === check ||
                result.slice(0, check.length + 1) === check + '-'
              );
            }
            return false;
          };
        },
        CHILD: function (type, what, _argument, first, last) {
          Symbol('JSCA_822_879');
          var simple = type.slice(0, 3) !== 'nth',
            forward = type.slice(-4) !== 'last',
            ofType = what === 'of-type';
          return first === 1 && last === 0
            ? function (elem) {
                Symbol('JSCA_824_826');
                return !!elem.parentNode;
              }
            : function (elem, _context, xml) {
                Symbol('JSCA_826_878');
                var cache,
                  outerCache,
                  node,
                  nodeIndex,
                  start,
                  dir = simple !== forward ? 'nextSibling' : 'previousSibling',
                  parent = elem.parentNode,
                  name = ofType && elem.nodeName.toLowerCase(),
                  useCache = !xml && !ofType,
                  diff = false;
                if (parent) {
                  if (simple) {
                    while (dir) {
                      node = elem;
                      while ((node = node[dir])) {
                        if (
                          ofType ? nodeName(node, name) : node.nodeType === 1
                        ) {
                          return false;
                        }
                      }
                      start = dir = type === 'only' && !start && 'nextSibling';
                    }
                    return true;
                  }
                  start = [forward ? parent.firstChild : parent.lastChild];
                  if (forward && useCache) {
                    outerCache = parent[expando] || (parent[expando] = {});
                    cache = outerCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while (
                      (node =
                        (++nodeIndex && node && node[dir]) ||
                        (diff = nodeIndex = 0) ||
                        start.pop())
                    ) {
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        outerCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    }
                    if (diff === false) {
                      while (
                        (node =
                          (++nodeIndex && node && node[dir]) ||
                          (diff = nodeIndex = 0) ||
                          start.pop())
                      ) {
                        if (
                          (ofType
                            ? nodeName(node, name)
                            : node.nodeType === 1) &&
                          ++diff
                        ) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            outerCache[type] = [dirruns, diff];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff -= last;
                  return (
                    diff === first || (diff % first === 0 && diff / first >= 0)
                  );
                }
              };
        },
        PSEUDO: function (pseudo, argument) {
          Symbol('JSCA_880_898');
          var args,
            fn =
              Expr.pseudos[pseudo] ||
              Expr.setFilters[pseudo.toLowerCase()] ||
              find.error('unsupported pseudo: ' + pseudo);
          if (fn[expando]) {
            return fn(argument);
          }
          if (fn.length > 1) {
            args = [pseudo, pseudo, '', argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())
              ? markFunction(function (seed, matches) {
                  Symbol('JSCA_887_893');
                  var idx,
                    matched = fn(seed, argument),
                    i = matched.length;
                  while (i--) {
                    idx = indexOf.call(seed, matched[i]);
                    seed[idx] = !(matches[idx] = matched[i]);
                  }
                })
              : function (elem) {
                  Symbol('JSCA_893_895');
                  return fn(elem, 0, args);
                };
          }
          return fn;
        },
      },
      pseudos: {
        not: markFunction(function (selector) {
          Symbol('JSCA_901_916');
          var input = [],
            results = [],
            matcher = compile(selector.replace(rtrimCSS, '$1'));
          return matcher[expando]
            ? markFunction(function (seed, matches, _context, xml) {
                Symbol('JSCA_903_910');
                var elem,
                  unmatched = matcher(seed, null, xml, []),
                  i = seed.length;
                while (i--) {
                  if ((elem = unmatched[i])) {
                    seed[i] = !(matches[i] = elem);
                  }
                }
              })
            : function (elem, _context, xml) {
                Symbol('JSCA_910_915');
                input[0] = elem;
                matcher(input, null, xml, results);
                input[0] = null;
                return !results.pop();
              };
        }),
        has: markFunction(function (selector) {
          Symbol('JSCA_917_921');
          return function (elem) {
            Symbol('JSCA_918_920');
            return find(selector, elem).length > 0;
          };
        }),
        contains: markFunction(function (text) {
          Symbol('JSCA_922_927');
          text = text.replace(runescape, funescape);
          return function (elem) {
            Symbol('JSCA_924_926');
            return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
          };
        }),
        lang: markFunction(function (lang) {
          Symbol('JSCA_928_943');
          if (!ridentifier.test(lang || '')) {
            find.error('unsupported lang: ' + lang);
          }
          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            Symbol('JSCA_933_942');
            var elemLang;
            do {
              if (
                (elemLang = documentIsHTML
                  ? elem.lang
                  : elem.getAttribute('xml:lang') || elem.getAttribute('lang'))
              ) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + '-') === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);
            return false;
          };
        }),
        target: function (elem) {
          Symbol('JSCA_944_947');
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        root: function (elem) {
          Symbol('JSCA_948_950');
          return elem === documentElement;
        },
        focus: function (elem) {
          Symbol('JSCA_951_953');
          return (
            elem === safeActiveElement() &&
            document.hasFocus() &&
            !!(elem.type || elem.href || ~elem.tabIndex)
          );
        },
        enabled: createDisabledPseudo(false),
        disabled: createDisabledPseudo(true),
        checked: function (elem) {
          Symbol('JSCA_956_958');
          return (
            (nodeName(elem, 'input') && !!elem.checked) ||
            (nodeName(elem, 'option') && !!elem.selected)
          );
        },
        selected: function (elem) {
          Symbol('JSCA_959_964');
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }
          return elem.selected === true;
        },
        empty: function (elem) {
          Symbol('JSCA_965_972');
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent: function (elem) {
          Symbol('JSCA_973_975');
          return !Expr.pseudos.empty(elem);
        },
        header: function (elem) {
          Symbol('JSCA_976_978');
          return rheader.test(elem.nodeName);
        },
        input: function (elem) {
          Symbol('JSCA_979_981');
          return rinputs.test(elem.nodeName);
        },
        button: function (elem) {
          Symbol('JSCA_982_984');
          return (
            (nodeName(elem, 'input') && elem.type === 'button') ||
            nodeName(elem, 'button')
          );
        },
        text: function (elem) {
          Symbol('JSCA_985_988');
          var attr;
          return (
            nodeName(elem, 'input') &&
            elem.type === 'text' &&
            ((attr = elem.getAttribute('type')) == null ||
              attr.toLowerCase() === 'text')
          );
        },
        first: createPositionalPseudo(function () {
          Symbol('JSCA_989_991');
          return [0];
        }),
        last: createPositionalPseudo(function (_matchIndexes, length) {
          Symbol('JSCA_992_994');
          return [length - 1];
        }),
        eq: createPositionalPseudo(function (_matchIndexes, length, argument) {
          Symbol('JSCA_995_997');
          return [argument < 0 ? argument + length : argument];
        }),
        even: createPositionalPseudo(function (matchIndexes, length) {
          Symbol('JSCA_998_1004');
          var i = 0;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        odd: createPositionalPseudo(function (matchIndexes, length) {
          Symbol('JSCA_1005_1011');
          var i = 1;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        lt: createPositionalPseudo(function (matchIndexes, length, argument) {
          Symbol('JSCA_1012_1025');
          var i;
          if (argument < 0) {
            i = argument + length;
          } else if (argument > length) {
            i = length;
          } else {
            i = argument;
          }
          for (; --i >= 0; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        gt: createPositionalPseudo(function (matchIndexes, length, argument) {
          Symbol('JSCA_1026_1032');
          var i = argument < 0 ? argument + length : argument;
          for (; ++i < length; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
      },
    };
    Expr.pseudos.nth = Expr.pseudos.eq;
    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true,
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in {
      submit: true,
      reset: true,
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }
    function setFilters() {
      Symbol('JSCA_1051_1051');
    }
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();
    function tokenize(selector, parseOnly) {
      Symbol('JSCA_1054_1097');
      var matched,
        match,
        tokens,
        type,
        soFar,
        groups,
        preFilters,
        cached = tokenCache[selector + ' '];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;
      while (soFar) {
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push((tokens = []));
        }
        matched = false;
        if ((match = rleadingCombinator.exec(soFar))) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type: match[0].replace(rtrimCSS, ' '),
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in Expr.filter) {
          if (
            (match = matchExpr[type].exec(soFar)) &&
            (!preFilters[type] || (match = preFilters[type](match)))
          ) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match,
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      if (parseOnly) {
        return soFar.length;
      }
      return soFar
        ? find.error(selector)
        : tokenCache(selector, groups).slice(0);
    }
    function toSelector(tokens) {
      Symbol('JSCA_1098_1104');
      var i = 0,
        len = tokens.length,
        selector = '';
      for (; i < len; i++) {
        selector += tokens[i].value;
      }
      return selector;
    }
    function addCombinator(matcher, combinator, base) {
      Symbol('JSCA_1105_1143');
      var dir = combinator.dir,
        skip = combinator.next,
        key = skip || dir,
        checkNonElements = base && key === 'parentNode',
        doneName = done++;
      return combinator.first
        ? function (elem, context, xml) {
            Symbol('JSCA_1107_1114');
            while ((elem = elem[dir])) {
              if (elem.nodeType === 1 || checkNonElements) {
                return matcher(elem, context, xml);
              }
            }
            return false;
          }
        : function (elem, context, xml) {
            Symbol('JSCA_1114_1142');
            var oldCache,
              outerCache,
              newCache = [dirruns, doneName];
            if (xml) {
              while ((elem = elem[dir])) {
                if (elem.nodeType === 1 || checkNonElements) {
                  if (matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            } else {
              while ((elem = elem[dir])) {
                if (elem.nodeType === 1 || checkNonElements) {
                  outerCache = elem[expando] || (elem[expando] = {});
                  if (skip && nodeName(elem, skip)) {
                    elem = elem[dir] || elem;
                  } else if (
                    (oldCache = outerCache[key]) &&
                    oldCache[0] === dirruns &&
                    oldCache[1] === doneName
                  ) {
                    return (newCache[2] = oldCache[2]);
                  } else {
                    outerCache[key] = newCache;
                    if ((newCache[2] = matcher(elem, context, xml))) {
                      return true;
                    }
                  }
                }
              }
            }
            return false;
          };
    }
    function elementMatcher(matchers) {
      Symbol('JSCA_1144_1154');
      return matchers.length > 1
        ? function (elem, context, xml) {
            Symbol('JSCA_1145_1153');
            var i = matchers.length;
            while (i--) {
              if (!matchers[i](elem, context, xml)) {
                return false;
              }
            }
            return true;
          }
        : matchers[0];
    }
    function multipleContexts(selector, contexts, results) {
      Symbol('JSCA_1155_1161');
      var i = 0,
        len = contexts.length;
      for (; i < len; i++) {
        find(selector, contexts[i], results);
      }
      return results;
    }
    function condense(unmatched, map, filter, context, xml) {
      Symbol('JSCA_1162_1175');
      var elem,
        newUnmatched = [],
        i = 0,
        len = unmatched.length,
        mapped = map != null;
      for (; i < len; i++) {
        if ((elem = unmatched[i])) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map.push(i);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(
      preFilter,
      selector,
      matcher,
      postFilter,
      postFinder,
      postSelector
    ) {
      Symbol('JSCA_1176_1229');
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function (seed, results, context, xml) {
        Symbol('JSCA_1183_1228');
        var temp,
          i,
          elem,
          matcherOut,
          preMap = [],
          postMap = [],
          preexisting = results.length,
          elems =
            seed ||
            multipleContexts(
              selector || '*',
              context.nodeType ? [context] : context,
              []
            ),
          matcherIn =
            preFilter && (seed || !selector)
              ? condense(elems, preMap, preFilter, context, xml)
              : elems;
        if (matcher) {
          matcherOut =
            postFinder || (seed ? preFilter : preexisting || postFilter)
              ? []
              : results;
          matcher(matcherIn, matcherOut, context, xml);
        } else {
          matcherOut = matcherIn;
        }
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i = temp.length;
          while (i--) {
            if ((elem = temp[i])) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              temp = [];
              i = matcherOut.length;
              while (i--) {
                if ((elem = matcherOut[i])) {
                  temp.push((matcherIn[i] = elem));
                }
              }
              postFinder(null, (matcherOut = []), temp, xml);
            }
            i = matcherOut.length;
            while (i--) {
              if (
                (elem = matcherOut[i]) &&
                (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1
              ) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          }
        } else {
          matcherOut = condense(
            matcherOut === results
              ? matcherOut.splice(preexisting, matcherOut.length)
              : matcherOut
          );
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      Symbol('JSCA_1230_1260');
      var checkContext,
        matcher,
        j,
        len = tokens.length,
        leadingRelative = Expr.relative[tokens[0].type],
        implicitRelative = leadingRelative || Expr.relative[' '],
        i = leadingRelative ? 1 : 0,
        matchContext = addCombinator(
          function (elem) {
            Symbol('JSCA_1231_1233');
            return elem === checkContext;
          },
          implicitRelative,
          true
        ),
        matchAnyContext = addCombinator(
          function (elem) {
            Symbol('JSCA_1233_1235');
            return indexOf.call(checkContext, elem) > -1;
          },
          implicitRelative,
          true
        ),
        matchers = [
          function (elem, context, xml) {
            Symbol('JSCA_1235_1239');
            var ret =
              (!leadingRelative && (xml || context != outermostContext)) ||
              ((checkContext = context).nodeType
                ? matchContext(elem, context, xml)
                : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          },
        ];
      for (; i < len; i++) {
        if ((matcher = Expr.relative[tokens[i].type])) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
          if (matcher[expando]) {
            j = ++i;
            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(
              i > 1 && elementMatcher(matchers),
              i > 1 &&
                toSelector(
                  tokens.slice(0, i - 1).concat({
                    value: tokens[i - 2].type === ' ' ? '*' : '',
                  })
                ).replace(rtrimCSS, '$1'),
              matcher,
              i < j && matcherFromTokens(tokens.slice(i, j)),
              j < len && matcherFromTokens((tokens = tokens.slice(j))),
              j < len && toSelector(tokens)
            );
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      Symbol('JSCA_1261_1321');
      var bySet = setMatchers.length > 0,
        byElement = elementMatchers.length > 0,
        superMatcher = function (seed, context, xml, results, outermost) {
          Symbol('JSCA_1262_1319');
          var elem,
            j,
            matcher,
            matchedCount = 0,
            i = '0',
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            elems = seed || (byElement && Expr.find.TAG('*', outermost)),
            dirrunsUnique = (dirruns +=
              contextBackup == null ? 1 : Math.random() || 0.1),
            len = elems.length;
          if (outermost) {
            outermostContext = context == document || context || outermost;
          }
          for (; i !== len && (elem = elems[i]) != null; i++) {
            if (byElement && elem) {
              j = 0;
              if (!context && elem.ownerDocument != document) {
                setDocument(elem);
                xml = !documentIsHTML;
              }
              while ((matcher = elementMatchers[j++])) {
                if (matcher(elem, context || document, xml)) {
                  push.call(results, elem);
                  break;
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
              }
            }
            if (bySet) {
              if ((elem = !matcher && elem)) {
                matchedCount--;
              }
              if (seed) {
                unmatched.push(elem);
              }
            }
          }
          matchedCount += i;
          if (bySet && i !== matchedCount) {
            j = 0;
            while ((matcher = setMatchers[j++])) {
              matcher(unmatched, setMatched, context, xml);
            }
            if (seed) {
              if (matchedCount > 0) {
                while (i--) {
                  if (!(unmatched[i] || setMatched[i])) {
                    setMatched[i] = pop.call(results);
                  }
                }
              }
              setMatched = condense(setMatched);
            }
            push.apply(results, setMatched);
            if (
              outermost &&
              !seed &&
              setMatched.length > 0 &&
              matchedCount + setMatchers.length > 1
            ) {
              jQuery.uniqueSort(results);
            }
          }
          if (outermost) {
            dirruns = dirrunsUnique;
            outermostContext = contextBackup;
          }
          return unmatched;
        };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    function compile(selector, match) {
      Symbol('JSCA_1322_1341');
      var i,
        setMatchers = [],
        elementMatchers = [],
        cached = compilerCache[selector + ' '];
      if (!cached) {
        if (!match) {
          match = tokenize(selector);
        }
        i = match.length;
        while (i--) {
          cached = matcherFromTokens(match[i]);
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(
          selector,
          matcherFromGroupMatchers(elementMatchers, setMatchers)
        );
        cached.selector = selector;
      }
      return cached;
    }
    function select(selector, context, results, seed) {
      Symbol('JSCA_1342_1377');
      var i,
        tokens,
        token,
        type,
        find,
        compiled = typeof selector === 'function' && selector,
        match = !seed && tokenize((selector = compiled.selector || selector));
      results = results || [];
      if (match.length === 1) {
        tokens = match[0] = match[0].slice(0);
        if (
          tokens.length > 2 &&
          (token = tokens[0]).type === 'ID' &&
          context.nodeType === 9 &&
          documentIsHTML &&
          Expr.relative[tokens[1].type]
        ) {
          context = (Expr.find.ID(
            token.matches[0].replace(runescape, funescape),
            context
          ) || [])[0];
          if (!context) {
            return results;
          } else if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
        while (i--) {
          token = tokens[i];
          if (Expr.relative[(type = token.type)]) {
            break;
          }
          if ((find = Expr.find[type])) {
            if (
              (seed = find(
                token.matches[0].replace(runescape, funescape),
                (rsibling.test(tokens[0].type) &&
                  testContext(context.parentNode)) ||
                  context
              ))
            ) {
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push.apply(results, seed);
                return results;
              }
              break;
            }
          }
        }
      }
      (
        compiled || compile(selector, match)
      )(seed, context, !documentIsHTML, results, !context || (rsibling.test(selector) && testContext(context.parentNode)) || context);
      return results;
    }
    support.sortStable = expando.split('').sort(sortOrder).join('') === expando;
    setDocument();
    support.sortDetached = assert(function (el) {
      Symbol('JSCA_1380_1382');
      return el.compareDocumentPosition(document.createElement('fieldset')) & 1;
    });
    jQuery.find = find;
    jQuery.expr[':'] = jQuery.expr.pseudos;
    jQuery.unique = jQuery.uniqueSort;
    find.compile = compile;
    find.select = select;
    find.setDocument = setDocument;
    find.tokenize = tokenize;
    find.escape = jQuery.escapeSelector;
    find.getText = jQuery.text;
    find.isXML = jQuery.isXMLDoc;
    find.selectors = jQuery.expr;
    find.support = jQuery.support;
    find.uniqueSort = jQuery.uniqueSort;
  })();
  var dir = function (elem, dir, until) {
    Symbol('JSCA_1397_1408');
    var matched = [],
      truncate = until !== undefined;
    while ((elem = elem[dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }
        matched.push(elem);
      }
    }
    return matched;
  };
  var siblings = function (n, elem) {
    Symbol('JSCA_1409_1417');
    var matched = [];
    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }
    return matched;
  };
  var rneedsContext = jQuery.expr.match.needsContext;
  var rsingleTag =
    /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function winnow(elements, qualifier, not) {
    Symbol('JSCA_1420_1437');
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        Symbol('JSCA_1422_1424');
        return !!qualifier.call(elem, i, elem) !== not;
      });
    }
    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        Symbol('JSCA_1427_1429');
        return (elem === qualifier) !== not;
      });
    }
    if (typeof qualifier !== 'string') {
      return jQuery.grep(elements, function (elem) {
        Symbol('JSCA_1432_1434');
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    }
    return jQuery.filter(qualifier, elements, not);
  }
  jQuery.filter = function (expr, elems, not) {
    Symbol('JSCA_1438_1449');
    var elem = elems[0];
    if (not) {
      expr = ':not(' + expr + ')';
    }
    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }
    return jQuery.find.matches(
      expr,
      jQuery.grep(elems, function (elem) {
        Symbol('JSCA_1446_1448');
        return elem.nodeType === 1;
      })
    );
  };
  jQuery.fn.extend({
    find: function (selector) {
      Symbol('JSCA_1451_1467');
      var i,
        ret,
        len = this.length,
        self = this;
      if (typeof selector !== 'string') {
        return this.pushStack(
          jQuery(selector).filter(function () {
            Symbol('JSCA_1454_1460');
            for (i = 0; i < len; i++) {
              if (jQuery.contains(self[i], this)) {
                return true;
              }
            }
          })
        );
      }
      ret = this.pushStack([]);
      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }
      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function (selector) {
      Symbol('JSCA_1468_1470');
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function (selector) {
      Symbol('JSCA_1471_1473');
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function (selector) {
      Symbol('JSCA_1474_1476');
      return !!winnow(
        this,
        typeof selector === 'string' && rneedsContext.test(selector)
          ? jQuery(selector)
          : selector || [],
        false
      ).length;
    },
  });
  var rootjQuery,
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    init = (jQuery.fn.init = function (selector, context, root) {
      Symbol('JSCA_1478_1525');
      var match, elem;
      if (!selector) {
        return this;
      }
      root = root || rootjQuery;
      if (typeof selector === 'string') {
        if (
          selector[0] === '<' &&
          selector[selector.length - 1] === '>' &&
          selector.length >= 3
        ) {
          match = [null, selector, null];
        } else {
          match = rquickExpr.exec(selector);
        }
        if (match && (match[1] || !context)) {
          if (match[1]) {
            context = context instanceof jQuery ? context[0] : context;
            jQuery.merge(
              this,
              jQuery.parseHTML(
                match[1],
                context && context.nodeType
                  ? context.ownerDocument || context
                  : document,
                true
              )
            );
            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
              for (match in context) {
                if (isFunction(this[match])) {
                  this[match](context[match]);
                } else {
                  this.attr(match, context[match]);
                }
              }
            }
            return this;
          } else {
            elem = document.getElementById(match[2]);
            if (elem) {
              this[0] = elem;
              this.length = 1;
            }
            return this;
          }
        } else if (!context || context.jquery) {
          return (context || root).find(selector);
        } else {
          return this.constructor(context).find(selector);
        }
      } else if (selector.nodeType) {
        this[0] = selector;
        this.length = 1;
        return this;
      } else if (isFunction(selector)) {
        return root.ready !== undefined
          ? root.ready(selector)
          : selector(jQuery);
      }
      return jQuery.makeArray(selector, this);
    });
  init.prototype = jQuery.fn;
  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
    guaranteedUnique = {
      children: true,
      contents: true,
      next: true,
      prev: true,
    };
  jQuery.fn.extend({
    has: function (target) {
      Symbol('JSCA_1535_1545');
      var targets = jQuery(target, this),
        l = targets.length;
      return this.filter(function () {
        Symbol('JSCA_1537_1544');
        var i = 0;
        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function (selectors, context) {
      Symbol('JSCA_1546_1559');
      var cur,
        i = 0,
        l = this.length,
        matched = [],
        targets = typeof selectors !== 'string' && jQuery(selectors);
      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            if (
              cur.nodeType < 11 &&
              (targets
                ? targets.index(cur) > -1
                : cur.nodeType === 1 &&
                  jQuery.find.matchesSelector(cur, selectors))
            ) {
              matched.push(cur);
              break;
            }
          }
        }
      }
      return this.pushStack(
        matched.length > 1 ? jQuery.uniqueSort(matched) : matched
      );
    },
    index: function (elem) {
      Symbol('JSCA_1560_1568');
      if (!elem) {
        return this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      }
      if (typeof elem === 'string') {
        return indexOf.call(jQuery(elem), this[0]);
      }
      return indexOf.call(this, elem.jquery ? elem[0] : elem);
    },
    add: function (selector, context) {
      Symbol('JSCA_1569_1571');
      return this.pushStack(
        jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context)))
      );
    },
    addBack: function (selector) {
      Symbol('JSCA_1572_1574');
      return this.add(
        selector == null ? this.prevObject : this.prevObject.filter(selector)
      );
    },
  });
  function sibling(cur, dir) {
    Symbol('JSCA_1576_1579');
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}
    return cur;
  }
  jQuery.each(
    {
      parent: function (elem) {
        Symbol('JSCA_1581_1584');
        var parent = elem.parentNode;
        return parent && parent.nodeType !== 11 ? parent : null;
      },
      parents: function (elem) {
        Symbol('JSCA_1585_1587');
        return dir(elem, 'parentNode');
      },
      parentsUntil: function (elem, _i, until) {
        Symbol('JSCA_1588_1590');
        return dir(elem, 'parentNode', until);
      },
      next: function (elem) {
        Symbol('JSCA_1591_1593');
        return sibling(elem, 'nextSibling');
      },
      prev: function (elem) {
        Symbol('JSCA_1594_1596');
        return sibling(elem, 'previousSibling');
      },
      nextAll: function (elem) {
        Symbol('JSCA_1597_1599');
        return dir(elem, 'nextSibling');
      },
      prevAll: function (elem) {
        Symbol('JSCA_1600_1602');
        return dir(elem, 'previousSibling');
      },
      nextUntil: function (elem, _i, until) {
        Symbol('JSCA_1603_1605');
        return dir(elem, 'nextSibling', until);
      },
      prevUntil: function (elem, _i, until) {
        Symbol('JSCA_1606_1608');
        return dir(elem, 'previousSibling', until);
      },
      siblings: function (elem) {
        Symbol('JSCA_1609_1611');
        return siblings((elem.parentNode || {}).firstChild, elem);
      },
      children: function (elem) {
        Symbol('JSCA_1612_1614');
        return siblings(elem.firstChild);
      },
      contents: function (elem) {
        Symbol('JSCA_1615_1623');
        if (elem.contentDocument != null && getProto(elem.contentDocument)) {
          return elem.contentDocument;
        }
        if (nodeName(elem, 'template')) {
          elem = elem.content || elem;
        }
        return jQuery.merge([], elem.childNodes);
      },
    },
    function (name, fn) {
      Symbol('JSCA_1624_1643');
      jQuery.fn[name] = function (until, selector) {
        Symbol('JSCA_1625_1642');
        var matched = jQuery.map(this, fn, until);
        if (name.slice(-5) !== 'Until') {
          selector = until;
        }
        if (selector && typeof selector === 'string') {
          matched = jQuery.filter(selector, matched);
        }
        if (this.length > 1) {
          if (!guaranteedUnique[name]) {
            jQuery.uniqueSort(matched);
          }
          if (rparentsprev.test(name)) {
            matched.reverse();
          }
        }
        return this.pushStack(matched);
      };
    }
  );
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
  function createOptions(options) {
    Symbol('JSCA_1645_1651');
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      Symbol('JSCA_1647_1649');
      object[flag] = true;
    });
    return object;
  }
  jQuery.Callbacks = function (options) {
    Symbol('JSCA_1652_1760');
    options =
      typeof options === 'string'
        ? createOptions(options)
        : jQuery.extend({}, options);
    var firing,
      memory,
      fired,
      locked,
      list = [],
      queue = [],
      firingIndex = -1,
      fire = function () {
        Symbol('JSCA_1654_1677');
        locked = locked || options.once;
        fired = firing = true;
        for (; queue.length; firingIndex = -1) {
          memory = queue.shift();
          while (++firingIndex < list.length) {
            if (
              list[firingIndex].apply(memory[0], memory[1]) === false &&
              options.stopOnFalse
            ) {
              firingIndex = list.length;
              memory = false;
            }
          }
        }
        if (!options.memory) {
          memory = false;
        }
        firing = false;
        if (locked) {
          if (memory) {
            list = [];
          } else {
            list = '';
          }
        }
      },
      self = {
        add: function () {
          Symbol('JSCA_1678_1700');
          if (list) {
            if (memory && !firing) {
              firingIndex = list.length - 1;
              queue.push(memory);
            }
            (function add(args) {
              Symbol('JSCA_1684_1694');
              jQuery.each(args, function (_, arg) {
                Symbol('JSCA_1685_1693');
                if (isFunction(arg)) {
                  if (!options.unique || !self.has(arg)) {
                    list.push(arg);
                  }
                } else if (arg && arg.length && toType(arg) !== 'string') {
                  add(arg);
                }
              });
            })(arguments);
            if (memory && !firing) {
              fire();
            }
          }
          return this;
        },
        remove: function () {
          Symbol('JSCA_1701_1712');
          jQuery.each(arguments, function (_, arg) {
            Symbol('JSCA_1702_1710');
            var index;
            while ((index = jQuery.inArray(arg, list, index)) > -1) {
              list.splice(index, 1);
              if (index <= firingIndex) {
                firingIndex--;
              }
            }
          });
          return this;
        },
        has: function (fn) {
          Symbol('JSCA_1713_1715');
          return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
        },
        empty: function () {
          Symbol('JSCA_1716_1721');
          if (list) {
            list = [];
          }
          return this;
        },
        disable: function () {
          Symbol('JSCA_1722_1726');
          locked = queue = [];
          list = memory = '';
          return this;
        },
        disabled: function () {
          Symbol('JSCA_1727_1729');
          return !list;
        },
        lock: function () {
          Symbol('JSCA_1730_1736');
          locked = queue = [];
          if (!memory && !firing) {
            list = memory = '';
          }
          return this;
        },
        locked: function () {
          Symbol('JSCA_1737_1739');
          return !!locked;
        },
        fireWith: function (context, args) {
          Symbol('JSCA_1740_1750');
          if (!locked) {
            args = args || [];
            args = [context, args.slice ? args.slice() : args];
            queue.push(args);
            if (!firing) {
              fire();
            }
          }
          return this;
        },
        fire: function () {
          Symbol('JSCA_1751_1754');
          self.fireWith(this, arguments);
          return this;
        },
        fired: function () {
          Symbol('JSCA_1755_1757');
          return !!fired;
        },
      };
    return self;
  };
  function Identity(v) {
    Symbol('JSCA_1761_1763');
    return v;
  }
  function Thrower(ex) {
    Symbol('JSCA_1764_1766');
    throw ex;
  }
  function adoptValue(value, resolve, reject, noValue) {
    Symbol('JSCA_1767_1780');
    var method;
    try {
      if (value && isFunction((method = value.promise))) {
        method.call(value).done(resolve).fail(reject);
      } else if (value && isFunction((method = value.then))) {
        method.call(value, resolve, reject);
      } else {
        resolve.apply(undefined, [value].slice(noValue));
      }
    } catch (value) {
      reject.apply(undefined, [value]);
    }
  }
  jQuery.extend({
    Deferred: function (func) {
      Symbol('JSCA_1782_1897');
      var tuples = [
          [
            'notify',
            'progress',
            jQuery.Callbacks('memory'),
            jQuery.Callbacks('memory'),
            2,
          ],
          [
            'resolve',
            'done',
            jQuery.Callbacks('once memory'),
            jQuery.Callbacks('once memory'),
            0,
            'resolved',
          ],
          [
            'reject',
            'fail',
            jQuery.Callbacks('once memory'),
            jQuery.Callbacks('once memory'),
            1,
            'rejected',
          ],
        ],
        state = 'pending',
        promise = {
          state: function () {
            Symbol('JSCA_1784_1786');
            return state;
          },
          always: function () {
            Symbol('JSCA_1787_1790');
            deferred.done(arguments).fail(arguments);
            return this;
          },
          catch: function (fn) {
            Symbol('JSCA_1791_1793');
            return promise.then(null, fn);
          },
          pipe: function () {
            Symbol('JSCA_1794_1810');
            var fns = arguments;
            return jQuery
              .Deferred(function (newDefer) {
                Symbol('JSCA_1796_1809');
                jQuery.each(tuples, function (_i, tuple) {
                  Symbol('JSCA_1797_1807');
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function () {
                    Symbol('JSCA_1799_1806');
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned
                        .promise()
                        .progress(newDefer.notify)
                        .done(newDefer.resolve)
                        .fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + 'With'](
                        this,
                        fn ? [returned] : arguments
                      );
                    }
                  });
                });
                fns = null;
              })
              .promise();
          },
          then: function (onFulfilled, onRejected, onProgress) {
            Symbol('JSCA_1811_1872');
            var maxDepth = 0;
            function resolve(depth, deferred, handler, special) {
              Symbol('JSCA_1813_1866');
              return function () {
                Symbol('JSCA_1814_1865');
                var that = this,
                  args = arguments,
                  mightThrow = function () {
                    Symbol('JSCA_1815_1839');
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred.promise()) {
                      throw new TypeError('Thenable self-resolution');
                    }
                    then =
                      returned &&
                      (typeof returned === 'object' ||
                        typeof returned === 'function') &&
                      returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(
                          returned,
                          resolve(maxDepth, deferred, Identity, special),
                          resolve(maxDepth, deferred, Thrower, special)
                        );
                      } else {
                        maxDepth++;
                        then.call(
                          returned,
                          resolve(maxDepth, deferred, Identity, special),
                          resolve(maxDepth, deferred, Thrower, special),
                          resolve(
                            maxDepth,
                            deferred,
                            Identity,
                            deferred.notifyWith
                          )
                        );
                      }
                    } else {
                      if (handler !== Identity) {
                        that = undefined;
                        args = [returned];
                      }
                      (special || deferred.resolveWith)(that, args);
                    }
                  },
                  process = special
                    ? mightThrow
                    : function () {
                        Symbol('JSCA_1839_1854');
                        try {
                          mightThrow();
                        } catch (e) {
                          if (jQuery.Deferred.exceptionHook) {
                            jQuery.Deferred.exceptionHook(e, process.error);
                          }
                          if (depth + 1 >= maxDepth) {
                            if (handler !== Thrower) {
                              that = undefined;
                              args = [e];
                            }
                            deferred.rejectWith(that, args);
                          }
                        }
                      };
                if (depth) {
                  process();
                } else {
                  if (jQuery.Deferred.getErrorHook) {
                    process.error = jQuery.Deferred.getErrorHook();
                  } else if (jQuery.Deferred.getStackHook) {
                    process.error = jQuery.Deferred.getStackHook();
                  }
                  window.setTimeout(process);
                }
              };
            }
            return jQuery
              .Deferred(function (newDefer) {
                Symbol('JSCA_1867_1871');
                tuples[0][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onProgress) ? onProgress : Identity,
                    newDefer.notifyWith
                  )
                );
                tuples[1][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onFulfilled) ? onFulfilled : Identity
                  )
                );
                tuples[2][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onRejected) ? onRejected : Thrower
                  )
                );
              })
              .promise();
          },
          promise: function (obj) {
            Symbol('JSCA_1873_1875');
            return obj != null ? jQuery.extend(obj, promise) : promise;
          },
        },
        deferred = {};
      jQuery.each(tuples, function (i, tuple) {
        Symbol('JSCA_1877_1891');
        var list = tuple[2],
          stateString = tuple[5];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(
            function () {
              Symbol('JSCA_1881_1883');
              state = stateString;
            },
            tuples[3 - i][2].disable,
            tuples[3 - i][3].disable,
            tuples[0][2].lock,
            tuples[0][3].lock
          );
        }
        list.add(tuple[3].fire);
        deferred[tuple[0]] = function () {
          Symbol('JSCA_1886_1889');
          deferred[tuple[0] + 'With'](
            this === deferred ? undefined : this,
            arguments
          );
          return this;
        };
        deferred[tuple[0] + 'With'] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    when: function (singleValue) {
      Symbol('JSCA_1898_1918');
      var remaining = arguments.length,
        i = remaining,
        resolveContexts = Array(i),
        resolveValues = slice.call(arguments),
        primary = jQuery.Deferred(),
        updateFunc = function (i) {
          Symbol('JSCA_1899_1907');
          return function (value) {
            Symbol('JSCA_1900_1906');
            resolveContexts[i] = this;
            resolveValues[i] =
              arguments.length > 1 ? slice.call(arguments) : value;
            if (!--remaining) {
              primary.resolveWith(resolveContexts, resolveValues);
            }
          };
        };
      if (remaining <= 1) {
        adoptValue(
          singleValue,
          primary.done(updateFunc(i)).resolve,
          primary.reject,
          !remaining
        );
        if (
          primary.state() === 'pending' ||
          isFunction(resolveValues[i] && resolveValues[i].then)
        ) {
          return primary.then();
        }
      }
      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), primary.reject);
      }
      return primary.promise();
    },
  });
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  jQuery.Deferred.exceptionHook = function (error, asyncError) {
    Symbol('JSCA_1921_1925');
    if (
      window.console &&
      window.console.warn &&
      error &&
      rerrorNames.test(error.name)
    ) {
      window.console.warn(
        'jQuery.Deferred exception: ' + error.message,
        error.stack,
        asyncError
      );
    }
  };
  jQuery.readyException = function (error) {
    Symbol('JSCA_1926_1930');
    window.setTimeout(function () {
      Symbol('JSCA_1927_1929');
      throw error;
    });
  };
  var readyList = jQuery.Deferred();
  jQuery.fn.ready = function (fn) {
    Symbol('JSCA_1932_1937');
    readyList.then(fn).catch(function (error) {
      Symbol('JSCA_1933_1935');
      jQuery.readyException(error);
    });
    return this;
  };
  jQuery.extend({
    isReady: false,
    readyWait: 1,
    ready: function (wait) {
      Symbol('JSCA_1941_1950');
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }
      jQuery.isReady = true;
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document, [jQuery]);
    },
  });
  jQuery.ready.then = readyList.then;
  function completed() {
    Symbol('JSCA_1953_1957');
    document.removeEventListener('DOMContentLoaded', completed);
    window.removeEventListener('load', completed);
    jQuery.ready();
  }
  if (
    document.readyState === 'complete' ||
    (document.readyState !== 'loading' && !document.documentElement.doScroll)
  ) {
    window.setTimeout(jQuery.ready);
  } else {
    document.addEventListener('DOMContentLoaded', completed);
    window.addEventListener('load', completed);
  }
  var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
    Symbol('JSCA_1964_2000');
    var i = 0,
      len = elems.length,
      bulk = key == null;
    if (toType(key) === 'object') {
      chainable = true;
      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      }
    } else if (value !== undefined) {
      chainable = true;
      if (!isFunction(value)) {
        raw = true;
      }
      if (bulk) {
        if (raw) {
          fn.call(elems, value);
          fn = null;
        } else {
          bulk = fn;
          fn = function (elem, _key, value) {
            Symbol('JSCA_1982_1984');
            return bulk.call(jQuery(elem), value);
          };
        }
      }
      if (fn) {
        for (; i < len; i++) {
          fn(
            elems[i],
            key,
            raw ? value : value.call(elems[i], i, fn(elems[i], key))
          );
        }
      }
    }
    if (chainable) {
      return elems;
    }
    if (bulk) {
      return fn.call(elems);
    }
    return len ? fn(elems[0], key) : emptyGet;
  };
  var rmsPrefix = /^-ms-/,
    rdashAlpha = /-([a-z])/g;
  function fcamelCase(_all, letter) {
    Symbol('JSCA_2002_2004');
    return letter.toUpperCase();
  }
  function camelCase(string) {
    Symbol('JSCA_2005_2007');
    return string.replace(rmsPrefix, 'ms-').replace(rdashAlpha, fcamelCase);
  }
  var acceptData = function (owner) {
    Symbol('JSCA_2008_2010');
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };
  function Data() {
    Symbol('JSCA_2011_2013');
    this.expando = jQuery.expando + Data.uid++;
  }
  Data.uid = 1;
  Data.prototype = {
    cache: function (owner) {
      Symbol('JSCA_2016_2032');
      var value = owner[this.expando];
      if (!value) {
        value = {};
        if (acceptData(owner)) {
          if (owner.nodeType) {
            owner[this.expando] = value;
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true,
            });
          }
        }
      }
      return value;
    },
    set: function (owner, data, value) {
      Symbol('JSCA_2033_2043');
      var prop,
        cache = this.cache(owner);
      if (typeof data === 'string') {
        cache[camelCase(data)] = value;
      } else {
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }
      return cache;
    },
    get: function (owner, key) {
      Symbol('JSCA_2044_2046');
      return key === undefined
        ? this.cache(owner)
        : owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function (owner, key, value) {
      Symbol('JSCA_2047_2053');
      if (
        key === undefined ||
        (key && typeof key === 'string' && value === undefined)
      ) {
        return this.get(owner, key);
      }
      this.set(owner, key, value);
      return value !== undefined ? value : key;
    },
    remove: function (owner, key) {
      Symbol('JSCA_2054_2078');
      var i,
        cache = owner[this.expando];
      if (cache === undefined) {
        return;
      }
      if (key !== undefined) {
        if (Array.isArray(key)) {
          key = key.map(camelCase);
        } else {
          key = camelCase(key);
          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }
        i = key.length;
        while (i--) {
          delete cache[key[i]];
        }
      }
      if (key === undefined || jQuery.isEmptyObject(cache)) {
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function (owner) {
      Symbol('JSCA_2079_2082');
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    },
  };
  var dataPriv = new Data();
  var dataUser = new Data();
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    rmultiDash = /[A-Z]/g;
  function getData(data) {
    Symbol('JSCA_2087_2104');
    if (data === 'true') {
      return true;
    }
    if (data === 'false') {
      return false;
    }
    if (data === 'null') {
      return null;
    }
    if (data === +data + '') {
      return +data;
    }
    if (rbrace.test(data)) {
      return JSON.parse(data);
    }
    return data;
  }
  function dataAttr(elem, key, data) {
    Symbol('JSCA_2105_2120');
    var name;
    if (data === undefined && elem.nodeType === 1) {
      name = 'data-' + key.replace(rmultiDash, '-$&').toLowerCase();
      data = elem.getAttribute(name);
      if (typeof data === 'string') {
        try {
          data = getData(data);
        } catch (e) {}
        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }
    return data;
  }
  jQuery.extend({
    hasData: function (elem) {
      Symbol('JSCA_2122_2124');
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function (elem, name, data) {
      Symbol('JSCA_2125_2127');
      return dataUser.access(elem, name, data);
    },
    removeData: function (elem, name) {
      Symbol('JSCA_2128_2130');
      dataUser.remove(elem, name);
    },
    _data: function (elem, name, data) {
      Symbol('JSCA_2131_2133');
      return dataPriv.access(elem, name, data);
    },
    _removeData: function (elem, name) {
      Symbol('JSCA_2134_2136');
      dataPriv.remove(elem, name);
    },
  });
  jQuery.fn.extend({
    data: function (key, value) {
      Symbol('JSCA_2139_2182');
      var i,
        name,
        data,
        elem = this[0],
        attrs = elem && elem.attributes;
      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);
          if (elem.nodeType === 1 && !dataPriv.get(elem, 'hasDataAttrs')) {
            i = attrs.length;
            while (i--) {
              if (attrs[i]) {
                name = attrs[i].name;
                if (name.indexOf('data-') === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }
            dataPriv.set(elem, 'hasDataAttrs', true);
          }
        }
        return data;
      }
      if (typeof key === 'object') {
        return this.each(function () {
          Symbol('JSCA_2161_2163');
          dataUser.set(this, key);
        });
      }
      return access(
        this,
        function (value) {
          Symbol('JSCA_2165_2181');
          var data;
          if (elem && value === undefined) {
            data = dataUser.get(elem, key);
            if (data !== undefined) {
              return data;
            }
            data = dataAttr(elem, key);
            if (data !== undefined) {
              return data;
            }
            return;
          }
          this.each(function () {
            Symbol('JSCA_2178_2180');
            dataUser.set(this, key, value);
          });
        },
        null,
        value,
        arguments.length > 1,
        null,
        true
      );
    },
    removeData: function (key) {
      Symbol('JSCA_2183_2187');
      return this.each(function () {
        Symbol('JSCA_2184_2186');
        dataUser.remove(this, key);
      });
    },
  });
  jQuery.extend({
    queue: function (elem, type, data) {
      Symbol('JSCA_2190_2204');
      var queue;
      if (elem) {
        type = (type || 'fx') + 'queue';
        queue = dataPriv.get(elem, type);
        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function (elem, type) {
      Symbol('JSCA_2205_2224');
      type = type || 'fx';
      var queue = jQuery.queue(elem, type),
        startLength = queue.length,
        fn = queue.shift(),
        hooks = jQuery._queueHooks(elem, type),
        next = function () {
          Symbol('JSCA_2207_2209');
          jQuery.dequeue(elem, type);
        };
      if (fn === 'inprogress') {
        fn = queue.shift();
        startLength--;
      }
      if (fn) {
        if (type === 'fx') {
          queue.unshift('inprogress');
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    _queueHooks: function (elem, type) {
      Symbol('JSCA_2225_2232');
      var key = type + 'queueHooks';
      return (
        dataPriv.get(elem, key) ||
        dataPriv.access(elem, key, {
          empty: jQuery.Callbacks('once memory').add(function () {
            Symbol('JSCA_2228_2230');
            dataPriv.remove(elem, [type + 'queue', key]);
          }),
        })
      );
    },
  });
  jQuery.fn.extend({
    queue: function (type, data) {
      Symbol('JSCA_2235_2252');
      var setter = 2;
      if (typeof type !== 'string') {
        data = type;
        type = 'fx';
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }
      return data === undefined
        ? this
        : this.each(function () {
            Symbol('JSCA_2245_2251');
            var queue = jQuery.queue(this, type, data);
            jQuery._queueHooks(this, type);
            if (type === 'fx' && queue[0] !== 'inprogress') {
              jQuery.dequeue(this, type);
            }
          });
    },
    dequeue: function (type) {
      Symbol('JSCA_2253_2257');
      return this.each(function () {
        Symbol('JSCA_2254_2256');
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function (type) {
      Symbol('JSCA_2258_2260');
      return this.queue(type || 'fx', []);
    },
    promise: function (type, obj) {
      Symbol('JSCA_2261_2281');
      var tmp,
        count = 1,
        defer = jQuery.Deferred(),
        elements = this,
        i = this.length,
        resolve = function () {
          Symbol('JSCA_2262_2266');
          if (!--count) {
            defer.resolveWith(elements, [elements]);
          }
        };
      if (typeof type !== 'string') {
        obj = type;
        type = undefined;
      }
      type = type || 'fx';
      while (i--) {
        tmp = dataPriv.get(elements[i], type + 'queueHooks');
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    },
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp('^(?:([+-])=|)(' + pnum + ')([a-z%]*)$', 'i');
  var cssExpand = ['Top', 'Right', 'Bottom', 'Left'];
  var documentElement = document.documentElement;
  var isAttached = function (elem) {
      Symbol('JSCA_2287_2289');
      return jQuery.contains(elem.ownerDocument, elem);
    },
    composed = {
      composed: true,
    };
  if (documentElement.getRootNode) {
    isAttached = function (elem) {
      Symbol('JSCA_2293_2295');
      return (
        jQuery.contains(elem.ownerDocument, elem) ||
        elem.getRootNode(composed) === elem.ownerDocument
      );
    };
  }
  var isHiddenWithinTree = function (elem, el) {
    Symbol('JSCA_2297_2300');
    elem = el || elem;
    return (
      elem.style.display === 'none' ||
      (elem.style.display === '' &&
        isAttached(elem) &&
        jQuery.css(elem, 'display') === 'none')
    );
  };
  function adjustCSS(elem, prop, valueParts, tween) {
    Symbol('JSCA_2301_2332');
    var adjusted,
      scale,
      maxIterations = 20,
      currentValue = tween
        ? function () {
            Symbol('JSCA_2302_2304');
            return tween.cur();
          }
        : function () {
            Symbol('JSCA_2304_2306');
            return jQuery.css(elem, prop, '');
          },
      initial = currentValue(),
      unit =
        (valueParts && valueParts[3]) || (jQuery.cssNumber[prop] ? '' : 'px'),
      initialInUnit =
        elem.nodeType &&
        (jQuery.cssNumber[prop] || (unit !== 'px' && +initial)) &&
        rcssNum.exec(jQuery.css(elem, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      initial = initial / 2;
      unit = unit || initialInUnit[3];
      initialInUnit = +initial || 1;
      while (maxIterations--) {
        jQuery.style(elem, prop, initialInUnit + unit);
        if (
          (1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <=
          0
        ) {
          maxIterations = 0;
        }
        initialInUnit = initialInUnit / scale;
      }
      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit);
      valueParts = valueParts || [];
    }
    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0;
      adjusted = valueParts[1]
        ? initialInUnit + (valueParts[1] + 1) * valueParts[2]
        : +valueParts[2];
      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }
    return adjusted;
  }
  var defaultDisplayMap = {};
  function getDefaultDisplay(elem) {
    Symbol('JSCA_2334_2347');
    var temp,
      doc = elem.ownerDocument,
      nodeName = elem.nodeName,
      display = defaultDisplayMap[nodeName];
    if (display) {
      return display;
    }
    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, 'display');
    temp.parentNode.removeChild(temp);
    if (display === 'none') {
      display = 'block';
    }
    defaultDisplayMap[nodeName] = display;
    return display;
  }
  function showHide(elements, show) {
    Symbol('JSCA_2348_2379');
    var display,
      elem,
      values = [],
      index = 0,
      length = elements.length;
    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      display = elem.style.display;
      if (show) {
        if (display === 'none') {
          values[index] = dataPriv.get(elem, 'display') || null;
          if (!values[index]) {
            elem.style.display = '';
          }
        }
        if (elem.style.display === '' && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== 'none') {
          values[index] = 'none';
          dataPriv.set(elem, 'display', display);
        }
      }
    }
    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }
    return elements;
  }
  jQuery.fn.extend({
    show: function () {
      Symbol('JSCA_2381_2383');
      return showHide(this, true);
    },
    hide: function () {
      Symbol('JSCA_2384_2386');
      return showHide(this);
    },
    toggle: function (state) {
      Symbol('JSCA_2387_2398');
      if (typeof state === 'boolean') {
        return state ? this.show() : this.hide();
      }
      return this.each(function () {
        Symbol('JSCA_2391_2397');
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    },
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
  (function () {
    Symbol('JSCA_2403_2414');
    var fragment = document.createDocumentFragment(),
      div = fragment.appendChild(document.createElement('div')),
      input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('checked', 'checked');
    input.setAttribute('name', 't');
    div.appendChild(input);
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
    div.innerHTML = '<textarea>x</textarea>';
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
    div.innerHTML = '<option></option>';
    support.option = !!div.lastChild;
  })();
  var wrapMap = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', ''],
  };
  wrapMap.tbody =
    wrapMap.tfoot =
    wrapMap.colgroup =
    wrapMap.caption =
      wrapMap.thead;
  wrapMap.th = wrapMap.td;
  if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [
      1,
      "<select multiple='multiple'>",
      '</select>',
    ];
  }
  function getAll(context, tag) {
    Symbol('JSCA_2427_2440');
    var ret;
    if (typeof context.getElementsByTagName !== 'undefined') {
      ret = context.getElementsByTagName(tag || '*');
    } else if (typeof context.querySelectorAll !== 'undefined') {
      ret = context.querySelectorAll(tag || '*');
    } else {
      ret = [];
    }
    if (tag === undefined || (tag && nodeName(context, tag))) {
      return jQuery.merge([context], ret);
    }
    return ret;
  }
  function setGlobalEval(elems, refElements) {
    Symbol('JSCA_2441_2446');
    var i = 0,
      l = elems.length;
    for (; i < l; i++) {
      dataPriv.set(
        elems[i],
        'globalEval',
        !refElements || dataPriv.get(refElements[i], 'globalEval')
      );
    }
  }
  var rhtml = /<|&#?\w+;/;
  function buildFragment(elems, context, scripts, selection, ignored) {
    Symbol('JSCA_2448_2496');
    var elem,
      tmp,
      tag,
      wrap,
      attached,
      j,
      fragment = context.createDocumentFragment(),
      nodes = [],
      i = 0,
      l = elems.length;
    for (; i < l; i++) {
      elem = elems[i];
      if (elem || elem === 0) {
        if (toType(elem) === 'object') {
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem));
        } else {
          tmp = tmp || fragment.appendChild(context.createElement('div'));
          tag = (rtagName.exec(elem) || ['', ''])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
          j = wrap[0];
          while (j--) {
            tmp = tmp.lastChild;
          }
          jQuery.merge(nodes, tmp.childNodes);
          tmp = fragment.firstChild;
          tmp.textContent = '';
        }
      }
    }
    fragment.textContent = '';
    i = 0;
    while ((elem = nodes[i++])) {
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }
        continue;
      }
      attached = isAttached(elem);
      tmp = getAll(fragment.appendChild(elem), 'script');
      if (attached) {
        setGlobalEval(tmp);
      }
      if (scripts) {
        j = 0;
        while ((elem = tmp[j++])) {
          if (rscriptType.test(elem.type || '')) {
            scripts.push(elem);
          }
        }
      }
    }
    return fragment;
  }
  var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
  function returnTrue() {
    Symbol('JSCA_2498_2500');
    return true;
  }
  function returnFalse() {
    Symbol('JSCA_2501_2503');
    return false;
  }
  function on(elem, types, selector, data, fn, one) {
    Symbol('JSCA_2504_2545');
    var origFn, type;
    if (typeof types === 'object') {
      if (typeof selector !== 'string') {
        data = data || selector;
        selector = undefined;
      }
      for (type in types) {
        on(elem, type, selector, data, types[type], one);
      }
      return elem;
    }
    if (data == null && fn == null) {
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === 'string') {
        fn = data;
        data = undefined;
      } else {
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }
    if (one === 1) {
      origFn = fn;
      fn = function (event) {
        Symbol('JSCA_2536_2539');
        jQuery().off(event);
        return origFn.apply(this, arguments);
      };
      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return elem.each(function () {
      Symbol('JSCA_2542_2544');
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  jQuery.event = {
    global: {},
    add: function (elem, types, handler, data, selector) {
      Symbol('JSCA_2548_2616');
      var handleObjIn,
        eventHandle,
        tmp,
        events,
        t,
        handleObj,
        special,
        handlers,
        type,
        namespaces,
        origType,
        elemData = dataPriv.get(elem);
      if (!acceptData(elem)) {
        return;
      }
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      }
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null);
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          Symbol('JSCA_2568_2570');
          return typeof jQuery !== 'undefined' &&
            jQuery.event.triggered !== e.type
            ? jQuery.event.dispatch.apply(elem, arguments)
            : undefined;
        };
      }
      types = (types || '').match(rnothtmlwhite) || [''];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || '').split('.').sort();
        if (!type) {
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        handleObj = jQuery.extend(
          {
            type: type,
            origType: origType,
            data: data,
            handler: handler,
            guid: handler.guid,
            selector: selector,
            needsContext:
              selector && jQuery.expr.match.needsContext.test(selector),
            namespace: namespaces.join('.'),
          },
          handleObjIn
        );
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (
            !special.setup ||
            special.setup.call(elem, data, namespaces, eventHandle) === false
          ) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
        jQuery.event.global[type] = true;
      }
    },
    remove: function (elem, types, handler, selector, mappedTypes) {
      Symbol('JSCA_2617_2661');
      var j,
        origCount,
        tmp,
        events,
        t,
        handleObj,
        special,
        handlers,
        type,
        namespaces,
        origType,
        elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || '').match(rnothtmlwhite) || [''];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || '').split('.').sort();
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp =
          tmp[2] &&
          new RegExp('(^|\\.)' + namespaces.join('\\.(?:.*\\.|)') + '(\\.|$)');
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if (
            (mappedTypes || origType === handleObj.origType) &&
            (!handler || handler.guid === handleObj.guid) &&
            (!tmp || tmp.test(handleObj.namespace)) &&
            (!selector ||
              selector === handleObj.selector ||
              (selector === '**' && handleObj.selector))
          ) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (
            !special.teardown ||
            special.teardown.call(elem, namespaces, elemData.handle) === false
          ) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, 'handle events');
      }
    },
    dispatch: function (nativeEvent) {
      Symbol('JSCA_2662_2695');
      var i,
        j,
        ret,
        matched,
        handleObj,
        handlerQueue,
        args = new Array(arguments.length),
        event = jQuery.event.fix(nativeEvent),
        handlers =
          (dataPriv.get(this, 'events') || Object.create(null))[event.type] ||
          [],
        special = jQuery.event.special[event.type] || {};
      args[0] = event;
      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }
      event.delegateTarget = this;
      if (
        special.preDispatch &&
        special.preDispatch.call(this, event) === false
      ) {
        return;
      }
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);
      i = 0;
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while (
          (handleObj = matched.handlers[j++]) &&
          !event.isImmediatePropagationStopped()
        ) {
          if (
            !event.rnamespace ||
            handleObj.namespace === false ||
            event.rnamespace.test(handleObj.namespace)
          ) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = (
              (jQuery.event.special[handleObj.origType] || {}).handle ||
              handleObj.handler
            ).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function (event, handlers) {
      Symbol('JSCA_2696_2730');
      var i,
        handleObj,
        sel,
        matchedHandlers,
        matchedSelectors,
        handlerQueue = [],
        delegateCount = handlers.delegateCount,
        cur = event.target;
      if (
        delegateCount &&
        cur.nodeType &&
        !(event.type === 'click' && event.button >= 1)
      ) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (
            cur.nodeType === 1 &&
            !(event.type === 'click' && cur.disabled === true)
          ) {
            matchedHandlers = [];
            matchedSelectors = {};
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i];
              sel = handleObj.selector + ' ';
              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext
                  ? jQuery(sel, this).index(cur) > -1
                  : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }
            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers,
              });
            }
          }
        }
      }
      cur = this;
      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: handlers.slice(delegateCount),
        });
      }
      return handlerQueue;
    },
    addProp: function (name, hook) {
      Symbol('JSCA_2731_2753');
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook)
          ? function () {
              Symbol('JSCA_2735_2739');
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            }
          : function () {
              Symbol('JSCA_2739_2743');
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
        set: function (value) {
          Symbol('JSCA_2744_2751');
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value,
          });
        },
      });
    },
    fix: function (originalEvent) {
      Symbol('JSCA_2754_2756');
      return originalEvent[jQuery.expando]
        ? originalEvent
        : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        noBubble: true,
      },
      click: {
        setup: function (data) {
          Symbol('JSCA_2762_2768');
          var el = this || data;
          if (
            rcheckableType.test(el.type) &&
            el.click &&
            nodeName(el, 'input')
          ) {
            leverageNative(el, 'click', true);
          }
          return false;
        },
        trigger: function (data) {
          Symbol('JSCA_2769_2775');
          var el = this || data;
          if (
            rcheckableType.test(el.type) &&
            el.click &&
            nodeName(el, 'input')
          ) {
            leverageNative(el, 'click');
          }
          return true;
        },
        _default: function (event) {
          Symbol('JSCA_2776_2779');
          var target = event.target;
          return (
            (rcheckableType.test(target.type) &&
              target.click &&
              nodeName(target, 'input') &&
              dataPriv.get(target, 'click')) ||
            nodeName(target, 'a')
          );
        },
      },
      beforeunload: {
        postDispatch: function (event) {
          Symbol('JSCA_2782_2786');
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        },
      },
    },
  };
  function leverageNative(el, type, isSetup) {
    Symbol('JSCA_2790_2824');
    if (!isSetup) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }
      return;
    }
    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function (event) {
        Symbol('JSCA_2800_2822');
        var result,
          saved = dataPriv.get(this, type);
        if (event.isTrigger & 1 && this[type]) {
          if (!saved) {
            saved = slice.call(arguments);
            dataPriv.set(this, type, saved);
            this[type]();
            result = dataPriv.get(this, type);
            dataPriv.set(this, type, false);
            if (saved !== result) {
              event.stopImmediatePropagation();
              event.preventDefault();
              return result;
            }
          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          }
        } else if (saved) {
          dataPriv.set(
            this,
            type,
            jQuery.event.trigger(saved[0], saved.slice(1), this)
          );
          event.stopPropagation();
          event.isImmediatePropagationStopped = returnTrue;
        }
      },
    });
  }
  jQuery.removeEvent = function (elem, type, handle) {
    Symbol('JSCA_2825_2829');
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };
  jQuery.Event = function (src, props) {
    Symbol('JSCA_2830_2849');
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented =
        src.defaultPrevented ||
        (src.defaultPrevented === undefined && src.returnValue === false)
          ? returnTrue
          : returnFalse;
      this.target =
        src.target && src.target.nodeType === 3
          ? src.target.parentNode
          : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = (src && src.timeStamp) || Date.now();
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function () {
      Symbol('JSCA_2856_2862');
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function () {
      Symbol('JSCA_2863_2869');
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function () {
      Symbol('JSCA_2870_2877');
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    },
  };
  jQuery.each(
    {
      altKey: true,
      bubbles: true,
      cancelable: true,
      changedTouches: true,
      ctrlKey: true,
      detail: true,
      eventPhase: true,
      metaKey: true,
      pageX: true,
      pageY: true,
      shiftKey: true,
      view: true,
      char: true,
      code: true,
      charCode: true,
      key: true,
      keyCode: true,
      button: true,
      buttons: true,
      clientX: true,
      clientY: true,
      offsetX: true,
      offsetY: true,
      pointerId: true,
      pointerType: true,
      screenX: true,
      screenY: true,
      targetTouches: true,
      toElement: true,
      touches: true,
      which: true,
    },
    jQuery.event.addProp
  );
  jQuery.each(
    {
      focus: 'focusin',
      blur: 'focusout',
    },
    function (type, delegateType) {
      Symbol('JSCA_2915_2992');
      function focusMappedHandler(nativeEvent) {
        Symbol('JSCA_2916_2928');
        if (document.documentMode) {
          var handle = dataPriv.get(this, 'handle'),
            event = jQuery.event.fix(nativeEvent);
          event.type = nativeEvent.type === 'focusin' ? 'focus' : 'blur';
          event.isSimulated = true;
          handle(nativeEvent);
          if (event.target === event.currentTarget) {
            handle(event);
          }
        } else {
          jQuery.event.simulate(
            delegateType,
            nativeEvent.target,
            jQuery.event.fix(nativeEvent)
          );
        }
      }
      jQuery.event.special[type] = {
        setup: function () {
          Symbol('JSCA_2930_2942');
          var attaches;
          leverageNative(this, type, true);
          if (document.documentMode) {
            attaches = dataPriv.get(this, delegateType);
            if (!attaches) {
              this.addEventListener(delegateType, focusMappedHandler);
            }
            dataPriv.set(this, delegateType, (attaches || 0) + 1);
          } else {
            return false;
          }
        },
        trigger: function () {
          Symbol('JSCA_2943_2946');
          leverageNative(this, type);
          return true;
        },
        teardown: function () {
          Symbol('JSCA_2947_2960');
          var attaches;
          if (document.documentMode) {
            attaches = dataPriv.get(this, delegateType) - 1;
            if (!attaches) {
              this.removeEventListener(delegateType, focusMappedHandler);
              dataPriv.remove(this, delegateType);
            } else {
              dataPriv.set(this, delegateType, attaches);
            }
          } else {
            return false;
          }
        },
        _default: function (event) {
          Symbol('JSCA_2961_2963');
          return dataPriv.get(event.target, type);
        },
        delegateType: delegateType,
      };
      jQuery.event.special[delegateType] = {
        setup: function () {
          Symbol('JSCA_2967_2977');
          var doc = this.ownerDocument || this.document || this,
            dataHolder = document.documentMode ? this : doc,
            attaches = dataPriv.get(dataHolder, delegateType);
          if (!attaches) {
            if (document.documentMode) {
              this.addEventListener(delegateType, focusMappedHandler);
            } else {
              doc.addEventListener(type, focusMappedHandler, true);
            }
          }
          dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
        },
        teardown: function () {
          Symbol('JSCA_2978_2990');
          var doc = this.ownerDocument || this.document || this,
            dataHolder = document.documentMode ? this : doc,
            attaches = dataPriv.get(dataHolder, delegateType) - 1;
          if (!attaches) {
            if (document.documentMode) {
              this.removeEventListener(delegateType, focusMappedHandler);
            } else {
              doc.removeEventListener(type, focusMappedHandler, true);
            }
            dataPriv.remove(dataHolder, delegateType);
          } else {
            dataPriv.set(dataHolder, delegateType, attaches);
          }
        },
      };
    }
  );
  jQuery.each(
    {
      mouseenter: 'mouseover',
      mouseleave: 'mouseout',
      pointerenter: 'pointerover',
      pointerleave: 'pointerout',
    },
    function (orig, fix) {
      Symbol('JSCA_2998_3012');
      jQuery.event.special[orig] = {
        delegateType: fix,
        bindType: fix,
        handle: function (event) {
          Symbol('JSCA_3002_3010');
          var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj;
          if (
            !related ||
            (related !== target && !jQuery.contains(target, related))
          ) {
            event.type = handleObj.origType;
            ret = handleObj.handler.apply(this, arguments);
            event.type = fix;
          }
          return ret;
        },
      };
    }
  );
  jQuery.fn.extend({
    on: function (types, selector, data, fn) {
      Symbol('JSCA_3014_3016');
      return on(this, types, selector, data, fn);
    },
    one: function (types, selector, data, fn) {
      Symbol('JSCA_3017_3019');
      return on(this, types, selector, data, fn, 1);
    },
    off: function (types, selector, fn) {
      Symbol('JSCA_3020_3043');
      var handleObj, type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(
          handleObj.namespace
            ? handleObj.origType + '.' + handleObj.namespace
            : handleObj.origType,
          handleObj.selector,
          handleObj.handler
        );
        return this;
      }
      if (typeof types === 'object') {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === 'function') {
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function () {
        Symbol('JSCA_3040_3042');
        jQuery.event.remove(this, types, fn, selector);
      });
    },
  });
  var rnoInnerhtml = /<script|<style|<link/i,
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function manipulationTarget(elem, content) {
    Symbol('JSCA_3046_3051');
    if (
      nodeName(elem, 'table') &&
      nodeName(content.nodeType !== 11 ? content : content.firstChild, 'tr')
    ) {
      return jQuery(elem).children('tbody')[0] || elem;
    }
    return elem;
  }
  function disableScript(elem) {
    Symbol('JSCA_3052_3055');
    elem.type = (elem.getAttribute('type') !== null) + '/' + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    Symbol('JSCA_3056_3063');
    if ((elem.type || '').slice(0, 5) === 'true/') {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute('type');
    }
    return elem;
  }
  function cloneCopyEvent(src, dest) {
    Symbol('JSCA_3064_3086');
    var i, l, type, pdataOld, udataOld, udataCur, events;
    if (dest.nodeType !== 1) {
      return;
    }
    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.get(src);
      events = pdataOld.events;
      if (events) {
        dataPriv.remove(dest, 'handle events');
        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    }
    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  }
  function fixInput(src, dest) {
    Symbol('JSCA_3087_3094');
    var nodeName = dest.nodeName.toLowerCase();
    if (nodeName === 'input' && rcheckableType.test(src.type)) {
      dest.checked = src.checked;
    } else if (nodeName === 'input' || nodeName === 'textarea') {
      dest.defaultValue = src.defaultValue;
    }
  }
  function domManip(collection, args, callback, ignored) {
    Symbol('JSCA_3095_3147');
    args = flat(args);
    var fragment,
      first,
      scripts,
      hasScripts,
      node,
      doc,
      i = 0,
      l = collection.length,
      iNoClone = l - 1,
      value = args[0],
      valueIsFunction = isFunction(value);
    if (
      valueIsFunction ||
      (l > 1 &&
        typeof value === 'string' &&
        !support.checkClone &&
        rchecked.test(value))
    ) {
      return collection.each(function (index) {
        Symbol('JSCA_3099_3105');
        var self = collection.eq(index);
        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }
        domManip(self, args, callback, ignored);
      });
    }
    if (l) {
      fragment = buildFragment(
        args,
        collection[0].ownerDocument,
        false,
        collection,
        ignored
      );
      first = fragment.firstChild;
      if (fragment.childNodes.length === 1) {
        fragment = first;
      }
      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, 'script'), disableScript);
        hasScripts = scripts.length;
        for (; i < l; i++) {
          node = fragment;
          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true);
            if (hasScripts) {
              jQuery.merge(scripts, getAll(node, 'script'));
            }
          }
          callback.call(collection[i], node, i);
        }
        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument;
          jQuery.map(scripts, restoreScript);
          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];
            if (
              rscriptType.test(node.type || '') &&
              !dataPriv.access(node, 'globalEval') &&
              jQuery.contains(doc, node)
            ) {
              if (node.src && (node.type || '').toLowerCase() !== 'module') {
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(
                    node.src,
                    {
                      nonce: node.nonce || node.getAttribute('nonce'),
                    },
                    doc
                  );
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ''), node, doc);
              }
            }
          }
        }
      }
    }
    return collection;
  }
  function remove(elem, selector, keepData) {
    Symbol('JSCA_3148_3162');
    var node,
      nodes = selector ? jQuery.filter(selector, elem) : elem,
      i = 0;
    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }
      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, 'script'));
        }
        node.parentNode.removeChild(node);
      }
    }
    return elem;
  }
  jQuery.extend({
    htmlPrefilter: function (html) {
      Symbol('JSCA_3164_3166');
      return html;
    },
    clone: function (elem, dataAndEvents, deepDataAndEvents) {
      Symbol('JSCA_3167_3192');
      var i,
        l,
        srcElements,
        destElements,
        clone = elem.cloneNode(true),
        inPage = isAttached(elem);
      if (
        !support.noCloneChecked &&
        (elem.nodeType === 1 || elem.nodeType === 11) &&
        !jQuery.isXMLDoc(elem)
      ) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      destElements = getAll(clone, 'script');
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, 'script'));
      }
      return clone;
    },
    cleanData: function (elems) {
      Symbol('JSCA_3193_3214');
      var data,
        elem,
        type,
        special = jQuery.event.special,
        i = 0;
      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if ((data = elem[dataPriv.expando])) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            elem[dataPriv.expando] = undefined;
          }
          if (elem[dataUser.expando]) {
            elem[dataUser.expando] = undefined;
          }
        }
      }
    },
  });
  jQuery.fn.extend({
    detach: function (selector) {
      Symbol('JSCA_3217_3219');
      return remove(this, selector, true);
    },
    remove: function (selector) {
      Symbol('JSCA_3220_3222');
      return remove(this, selector);
    },
    text: function (value) {
      Symbol('JSCA_3223_3231');
      return access(
        this,
        function (value) {
          Symbol('JSCA_3224_3230');
          return value === undefined
            ? jQuery.text(this)
            : this.empty().each(function () {
                Symbol('JSCA_3225_3229');
                if (
                  this.nodeType === 1 ||
                  this.nodeType === 11 ||
                  this.nodeType === 9
                ) {
                  this.textContent = value;
                }
              });
        },
        null,
        value,
        arguments.length
      );
    },
    append: function () {
      Symbol('JSCA_3232_3239');
      return domManip(this, arguments, function (elem) {
        Symbol('JSCA_3233_3238');
        if (
          this.nodeType === 1 ||
          this.nodeType === 11 ||
          this.nodeType === 9
        ) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function () {
      Symbol('JSCA_3240_3247');
      return domManip(this, arguments, function (elem) {
        Symbol('JSCA_3241_3246');
        if (
          this.nodeType === 1 ||
          this.nodeType === 11 ||
          this.nodeType === 9
        ) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function () {
      Symbol('JSCA_3248_3254');
      return domManip(this, arguments, function (elem) {
        Symbol('JSCA_3249_3253');
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function () {
      Symbol('JSCA_3255_3261');
      return domManip(this, arguments, function (elem) {
        Symbol('JSCA_3256_3260');
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function () {
      Symbol('JSCA_3262_3271');
      var elem,
        i = 0;
      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
          elem.textContent = '';
        }
      }
      return this;
    },
    clone: function (dataAndEvents, deepDataAndEvents) {
      Symbol('JSCA_3272_3278');
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents =
        deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        Symbol('JSCA_3275_3277');
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function (value) {
      Symbol('JSCA_3279_3302');
      return access(
        this,
        function (value) {
          Symbol('JSCA_3280_3301');
          var elem = this[0] || {},
            i = 0,
            l = this.length;
          if (value === undefined && elem.nodeType === 1) {
            return elem.innerHTML;
          }
          if (
            typeof value === 'string' &&
            !rnoInnerhtml.test(value) &&
            !wrapMap[(rtagName.exec(value) || ['', ''])[1].toLowerCase()]
          ) {
            value = jQuery.htmlPrefilter(value);
            try {
              for (; i < l; i++) {
                elem = this[i] || {};
                if (elem.nodeType === 1) {
                  jQuery.cleanData(getAll(elem, false));
                  elem.innerHTML = value;
                }
              }
              elem = 0;
            } catch (e) {}
          }
          if (elem) {
            this.empty().append(value);
          }
        },
        null,
        value,
        arguments.length
      );
    },
    replaceWith: function () {
      Symbol('JSCA_3303_3314');
      var ignored = [];
      return domManip(
        this,
        arguments,
        function (elem) {
          Symbol('JSCA_3305_3313');
          var parent = this.parentNode;
          if (jQuery.inArray(this, ignored) < 0) {
            jQuery.cleanData(getAll(this));
            if (parent) {
              parent.replaceChild(elem, this);
            }
          }
        },
        ignored
      );
    },
  });
  jQuery.each(
    {
      appendTo: 'append',
      prependTo: 'prepend',
      insertBefore: 'before',
      insertAfter: 'after',
      replaceAll: 'replaceWith',
    },
    function (name, original) {
      Symbol('JSCA_3322_3332');
      jQuery.fn[name] = function (selector) {
        Symbol('JSCA_3323_3331');
        var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;
        for (; i <= last; i++) {
          elems = i === last ? this : this.clone(true);
          jQuery(insert[i])[original](elems);
          push.apply(ret, elems.get());
        }
        return this.pushStack(ret);
      };
    }
  );
  var rnumnonpx = new RegExp('^(' + pnum + ')(?!px)[a-z%]+$', 'i');
  var rcustomProp = /^--/;
  var getStyles = function (elem) {
    Symbol('JSCA_3335_3341');
    var view = elem.ownerDocument.defaultView;
    if (!view || !view.opener) {
      view = window;
    }
    return view.getComputedStyle(elem);
  };
  var swap = function (elem, options, callback) {
    Symbol('JSCA_3342_3353');
    var ret,
      name,
      old = {};
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    ret = callback.call(elem);
    for (name in options) {
      elem.style[name] = old[name];
    }
    return ret;
  };
  var rboxStyle = new RegExp(cssExpand.join('|'), 'i');
  (function () {
    Symbol('JSCA_3355_3424');
    function computeStyleTests() {
      Symbol('JSCA_3356_3373');
      if (!div) {
        return;
      }
      container.style.cssText =
        'position:absolute;left:-11111px;width:60px;' +
        'margin-top:1px;padding:0;border:0';
      div.style.cssText =
        'position:relative;display:block;box-sizing:border-box;overflow:scroll;' +
        'margin:auto;border:1px;padding:1px;' +
        'width:60%;top:1%';
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== '1%';
      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
      div.style.right = '60%';
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
      div.style.position = 'absolute';
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container);
      div = null;
    }
    function roundPixelMeasures(measure) {
      Symbol('JSCA_3374_3376');
      return Math.round(parseFloat(measure));
    }
    var pixelPositionVal,
      boxSizingReliableVal,
      scrollboxSizeVal,
      pixelBoxStylesVal,
      reliableTrDimensionsVal,
      reliableMarginLeftVal,
      container = document.createElement('div'),
      div = document.createElement('div');
    if (!div.style) {
      return;
    }
    div.style.backgroundClip = 'content-box';
    div.cloneNode(true).style.backgroundClip = '';
    support.clearCloneStyle = div.style.backgroundClip === 'content-box';
    jQuery.extend(support, {
      boxSizingReliable: function () {
        Symbol('JSCA_3385_3388');
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function () {
        Symbol('JSCA_3389_3392');
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function () {
        Symbol('JSCA_3393_3396');
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function () {
        Symbol('JSCA_3397_3400');
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function () {
        Symbol('JSCA_3401_3404');
        computeStyleTests();
        return scrollboxSizeVal;
      },
      reliableTrDimensions: function () {
        Symbol('JSCA_3405_3422');
        var table, tr, trChild, trStyle;
        if (reliableTrDimensionsVal == null) {
          table = document.createElement('table');
          tr = document.createElement('tr');
          trChild = document.createElement('div');
          table.style.cssText =
            'position:absolute;left:-11111px;border-collapse:separate';
          tr.style.cssText = 'box-sizing:content-box;border:1px solid';
          tr.style.height = '1px';
          trChild.style.height = '9px';
          trChild.style.display = 'block';
          documentElement
            .appendChild(table)
            .appendChild(tr)
            .appendChild(trChild);
          trStyle = window.getComputedStyle(tr);
          reliableTrDimensionsVal =
            parseInt(trStyle.height, 10) +
              parseInt(trStyle.borderTopWidth, 10) +
              parseInt(trStyle.borderBottomWidth, 10) ===
            tr.offsetHeight;
          documentElement.removeChild(table);
        }
        return reliableTrDimensionsVal;
      },
    });
  })();
  function curCSS(elem, name, computed) {
    Symbol('JSCA_3425_3448');
    var width,
      minWidth,
      maxWidth,
      ret,
      isCustomProp = rcustomProp.test(name),
      style = elem.style;
    computed = computed || getStyles(elem);
    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];
      if (isCustomProp && ret) {
        ret = ret.replace(rtrimCSS, '$1') || undefined;
      }
      if (ret === '' && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      }
      if (
        !support.pixelBoxStyles() &&
        rnumnonpx.test(ret) &&
        rboxStyle.test(name)
      ) {
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;
        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;
        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }
    return ret !== undefined ? ret + '' : ret;
  }
  function addGetHookIf(conditionFn, hookFn) {
    Symbol('JSCA_3449_3459');
    return {
      get: function () {
        Symbol('JSCA_3451_3457');
        if (conditionFn()) {
          delete this.get;
          return;
        }
        return (this.get = hookFn).apply(this, arguments);
      },
    };
  }
  var cssPrefixes = ['Webkit', 'Moz', 'ms'],
    emptyStyle = document.createElement('div').style,
    vendorProps = {};
  function vendorPropName(name) {
    Symbol('JSCA_3461_3469');
    var capName = name[0].toUpperCase() + name.slice(1),
      i = cssPrefixes.length;
    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  }
  function finalPropName(name) {
    Symbol('JSCA_3470_3479');
    var final = jQuery.cssProps[name] || vendorProps[name];
    if (final) {
      return final;
    }
    if (name in emptyStyle) {
      return name;
    }
    return (vendorProps[name] = vendorPropName(name) || name);
  }
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
    cssShow = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block',
    },
    cssNormalTransform = {
      letterSpacing: '0',
      fontWeight: '400',
    };
  function setPositiveNumber(_elem, value, subtract) {
    Symbol('JSCA_3488_3491');
    var matches = rcssNum.exec(value);
    return matches
      ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || 'px')
      : value;
  }
  function boxModelAdjustment(
    elem,
    dimension,
    box,
    isBorderBox,
    styles,
    computedVal
  ) {
    Symbol('JSCA_3492_3521');
    var i = dimension === 'width' ? 1 : 0,
      extra = 0,
      delta = 0,
      marginDelta = 0;
    if (box === (isBorderBox ? 'border' : 'content')) {
      return 0;
    }
    for (; i < 4; i += 2) {
      if (box === 'margin') {
        marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
      }
      if (!isBorderBox) {
        delta += jQuery.css(elem, 'padding' + cssExpand[i], true, styles);
        if (box !== 'padding') {
          delta += jQuery.css(
            elem,
            'border' + cssExpand[i] + 'Width',
            true,
            styles
          );
        } else {
          extra += jQuery.css(
            elem,
            'border' + cssExpand[i] + 'Width',
            true,
            styles
          );
        }
      } else {
        if (box === 'content') {
          delta -= jQuery.css(elem, 'padding' + cssExpand[i], true, styles);
        }
        if (box !== 'margin') {
          delta -= jQuery.css(
            elem,
            'border' + cssExpand[i] + 'Width',
            true,
            styles
          );
        }
      }
    }
    if (!isBorderBox && computedVal >= 0) {
      delta +=
        Math.max(
          0,
          Math.ceil(
            elem['offset' + dimension[0].toUpperCase() + dimension.slice(1)] -
              computedVal -
              delta -
              extra -
              0.5
          )
        ) || 0;
    }
    return delta + marginDelta;
  }
  function getWidthOrHeight(elem, dimension, extra) {
    Symbol('JSCA_3522_3539');
    var styles = getStyles(elem),
      boxSizingNeeded = !support.boxSizingReliable() || extra,
      isBorderBox =
        boxSizingNeeded &&
        jQuery.css(elem, 'boxSizing', false, styles) === 'border-box',
      valueIsBorderBox = isBorderBox,
      val = curCSS(elem, dimension, styles),
      offsetProp = 'offset' + dimension[0].toUpperCase() + dimension.slice(1);
    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }
      val = 'auto';
    }
    if (
      ((!support.boxSizingReliable() && isBorderBox) ||
        (!support.reliableTrDimensions() && nodeName(elem, 'tr')) ||
        val === 'auto' ||
        (!parseFloat(val) &&
          jQuery.css(elem, 'display', false, styles) === 'inline')) &&
      elem.getClientRects().length
    ) {
      isBorderBox =
        jQuery.css(elem, 'boxSizing', false, styles) === 'border-box';
      valueIsBorderBox = offsetProp in elem;
      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    }
    val = parseFloat(val) || 0;
    return (
      val +
      boxModelAdjustment(
        elem,
        dimension,
        extra || (isBorderBox ? 'border' : 'content'),
        valueIsBorderBox,
        styles,
        val
      ) +
      'px'
    );
  }
  jQuery.extend({
    cssHooks: {
      opacity: {
        get: function (elem, computed) {
          Symbol('JSCA_3543_3548');
          if (computed) {
            var ret = curCSS(elem, 'opacity');
            return ret === '' ? '1' : ret;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageSlice: true,
      columnCount: true,
      flexGrow: true,
      flexShrink: true,
      fontWeight: true,
      gridArea: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnStart: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowStart: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      scale: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
    },
    cssProps: {},
    style: function (elem, name, value, extra) {
      Symbol('JSCA_3581_3618');
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret,
        type,
        hooks,
        origName = camelCase(name),
        isCustomProp = rcustomProp.test(name),
        style = elem.style;
      if (!isCustomProp) {
        name = finalPropName(origName);
      }
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (value !== undefined) {
        type = typeof value;
        if (type === 'string' && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret);
          type = 'number';
        }
        if (value == null || value !== value) {
          return;
        }
        if (type === 'number' && !isCustomProp) {
          value += (ret && ret[3]) || (jQuery.cssNumber[origName] ? '' : 'px');
        }
        if (
          !support.clearCloneStyle &&
          value === '' &&
          name.indexOf('background') === 0
        ) {
          style[name] = 'inherit';
        }
        if (
          !hooks ||
          !('set' in hooks) ||
          (value = hooks.set(elem, value, extra)) !== undefined
        ) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        if (
          hooks &&
          'get' in hooks &&
          (ret = hooks.get(elem, false, extra)) !== undefined
        ) {
          return ret;
        }
        return style[name];
      }
    },
    css: function (elem, name, extra, styles) {
      Symbol('JSCA_3619_3639');
      var val,
        num,
        hooks,
        origName = camelCase(name),
        isCustomProp = rcustomProp.test(name);
      if (!isCustomProp) {
        name = finalPropName(origName);
      }
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (hooks && 'get' in hooks) {
        val = hooks.get(elem, true, extra);
      }
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }
      if (val === 'normal' && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }
      if (extra === '' || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }
      return val;
    },
  });
  jQuery.each(['height', 'width'], function (_i, dimension) {
    Symbol('JSCA_3641_3662');
    jQuery.cssHooks[dimension] = {
      get: function (elem, computed, extra) {
        Symbol('JSCA_3643_3649');
        if (computed) {
          return rdisplayswap.test(jQuery.css(elem, 'display')) &&
            (!elem.getClientRects().length ||
              !elem.getBoundingClientRect().width)
            ? swap(elem, cssShow, function () {
                Symbol('JSCA_3645_3647');
                return getWidthOrHeight(elem, dimension, extra);
              })
            : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function (elem, value, extra) {
        Symbol('JSCA_3650_3660');
        var matches,
          styles = getStyles(elem),
          scrollboxSizeBuggy =
            !support.scrollboxSize() && styles.position === 'absolute',
          boxSizingNeeded = scrollboxSizeBuggy || extra,
          isBorderBox =
            boxSizingNeeded &&
            jQuery.css(elem, 'boxSizing', false, styles) === 'border-box',
          subtract = extra
            ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles)
            : 0;
        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(
            elem['offset' + dimension[0].toUpperCase() + dimension.slice(1)] -
              parseFloat(styles[dimension]) -
              boxModelAdjustment(elem, dimension, 'border', false, styles) -
              0.5
          );
        }
        if (
          subtract &&
          (matches = rcssNum.exec(value)) &&
          (matches[3] || 'px') !== 'px'
        ) {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }
        return setPositiveNumber(elem, value, subtract);
      },
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(
    support.reliableMarginLeft,
    function (elem, computed) {
      Symbol('JSCA_3663_3671');
      if (computed) {
        return (
          (parseFloat(curCSS(elem, 'marginLeft')) ||
            elem.getBoundingClientRect().left -
              swap(
                elem,
                {
                  marginLeft: 0,
                },
                function () {
                  Symbol('JSCA_3667_3669');
                  return elem.getBoundingClientRect().left;
                }
              )) + 'px'
        );
      }
    }
  );
  jQuery.each(
    {
      margin: '',
      padding: '',
      border: 'Width',
    },
    function (prefix, suffix) {
      Symbol('JSCA_3676_3689');
      jQuery.cssHooks[prefix + suffix] = {
        expand: function (value) {
          Symbol('JSCA_3678_3684');
          var i = 0,
            expanded = {},
            parts = typeof value === 'string' ? value.split(' ') : [value];
          for (; i < 4; i++) {
            expanded[prefix + cssExpand[i] + suffix] =
              parts[i] || parts[i - 2] || parts[0];
          }
          return expanded;
        },
      };
      if (prefix !== 'margin') {
        jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
      }
    }
  );
  jQuery.fn.extend({
    css: function (name, value) {
      Symbol('JSCA_3691_3704');
      return access(
        this,
        function (elem, name, value) {
          Symbol('JSCA_3692_3703');
          var styles,
            len,
            map = {},
            i = 0;
          if (Array.isArray(name)) {
            styles = getStyles(elem);
            len = name.length;
            for (; i < len; i++) {
              map[name[i]] = jQuery.css(elem, name[i], false, styles);
            }
            return map;
          }
          return value !== undefined
            ? jQuery.style(elem, name, value)
            : jQuery.css(elem, name);
        },
        name,
        value,
        arguments.length > 1
      );
    },
  });
  function Tween(elem, options, prop, end, easing) {
    Symbol('JSCA_3706_3708');
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function (elem, options, prop, end, easing, unit) {
      Symbol('JSCA_3712_3720');
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? '' : 'px');
    },
    cur: function () {
      Symbol('JSCA_3721_3724');
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get
        ? hooks.get(this)
        : Tween.propHooks._default.get(this);
    },
    run: function (percent) {
      Symbol('JSCA_3725_3742');
      var eased,
        hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](
          percent,
          this.options.duration * percent,
          0,
          1,
          this.options.duration
        );
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    },
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function (tween) {
        Symbol('JSCA_3747_3754');
        var result;
        if (
          tween.elem.nodeType !== 1 ||
          (tween.elem[tween.prop] != null &&
            tween.elem.style[tween.prop] == null)
        ) {
          return tween.elem[tween.prop];
        }
        result = jQuery.css(tween.elem, tween.prop, '');
        return !result || result === 'auto' ? 0 : result;
      },
      set: function (tween) {
        Symbol('JSCA_3755_3763');
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (
          tween.elem.nodeType === 1 &&
          (jQuery.cssHooks[tween.prop] ||
            tween.elem.style[finalPropName(tween.prop)] != null)
        ) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      },
    },
  };
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function (tween) {
      Symbol('JSCA_3767_3771');
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    },
  };
  jQuery.easing = {
    linear: function (p) {
      Symbol('JSCA_3774_3776');
      return p;
    },
    swing: function (p) {
      Symbol('JSCA_3777_3779');
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: 'swing',
  };
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow,
    inProgress,
    rfxtypes = /^(?:toggle|show|hide)$/,
    rrun = /queueHooks$/;
  function schedule() {
    Symbol('JSCA_3785_3794');
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }
      jQuery.fx.tick();
    }
  }
  function createFxNow() {
    Symbol('JSCA_3795_3800');
    window.setTimeout(function () {
      Symbol('JSCA_3796_3798');
      fxNow = undefined;
    });
    return (fxNow = Date.now());
  }
  function genFx(type, includeWidth) {
    Symbol('JSCA_3801_3814');
    var which,
      i = 0,
      attrs = {
        height: type,
      };
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs['margin' + which] = attrs['padding' + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  function createTween(value, prop, animation) {
    Symbol('JSCA_3815_3822');
    var tween,
      collection = (Animation.tweeners[prop] || []).concat(
        Animation.tweeners['*']
      ),
      index = 0,
      length = collection.length;
    for (; index < length; index++) {
      if ((tween = collection[index].call(animation, prop, value))) {
        return tween;
      }
    }
  }
  function defaultPrefilter(elem, props, opts) {
    Symbol('JSCA_3823_3942');
    var prop,
      value,
      toggle,
      hooks,
      oldfire,
      propTween,
      restoreDisplay,
      display,
      isBox = 'width' in props || 'height' in props,
      anim = this,
      orig = {},
      style = elem.style,
      hidden = elem.nodeType && isHiddenWithinTree(elem),
      dataShow = dataPriv.get(elem, 'fxshow');
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, 'fx');
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function () {
          Symbol('JSCA_3830_3834');
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function () {
        Symbol('JSCA_3837_3844');
        anim.always(function () {
          Symbol('JSCA_3838_3843');
          hooks.unqueued--;
          if (!jQuery.queue(elem, 'fx').length) {
            hooks.empty.fire();
          }
        });
      });
    }
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === 'toggle';
        if (value === (hidden ? 'hide' : 'show')) {
          if (value === 'show' && dataShow && dataShow[prop] !== undefined) {
            hidden = true;
          } else {
            continue;
          }
        }
        orig[prop] = (dataShow && dataShow[prop]) || jQuery.style(elem, prop);
      }
    }
    propTween = !jQuery.isEmptyObject(props);
    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    }
    if (isBox && elem.nodeType === 1) {
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];
      restoreDisplay = dataShow && dataShow.display;
      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, 'display');
      }
      display = jQuery.css(elem, 'display');
      if (display === 'none') {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, 'display');
          showHide([elem]);
        }
      }
      if (
        display === 'inline' ||
        (display === 'inline-block' && restoreDisplay != null)
      ) {
        if (jQuery.css(elem, 'float') === 'none') {
          if (!propTween) {
            anim.done(function () {
              Symbol('JSCA_3885_3887');
              style.display = restoreDisplay;
            });
            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === 'none' ? '' : display;
            }
          }
          style.display = 'inline-block';
        }
      }
    }
    if (opts.overflow) {
      style.overflow = 'hidden';
      anim.always(function () {
        Symbol('JSCA_3899_3903');
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    }
    propTween = false;
    for (prop in orig) {
      if (!propTween) {
        if (dataShow) {
          if ('hidden' in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, 'fxshow', {
            display: restoreDisplay,
          });
        }
        if (toggle) {
          dataShow.hidden = !hidden;
        }
        if (hidden) {
          showHide([elem], true);
        }
        anim.done(function () {
          Symbol('JSCA_3923_3931');
          if (!hidden) {
            showHide([elem]);
          }
          dataPriv.remove(elem, 'fxshow');
          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      }
      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;
        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }
  function propFilter(props, specialEasing) {
    Symbol('JSCA_3943_3971');
    var index, name, easing, value, hooks;
    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }
      if (index !== name) {
        props[name] = value;
        delete props[index];
      }
      hooks = jQuery.cssHooks[name];
      if (hooks && 'expand' in hooks) {
        value = hooks.expand(value);
        delete props[name];
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }
  function Animation(elem, properties, options) {
    Symbol('JSCA_3972_4048');
    var result,
      stopped,
      index = 0,
      length = Animation.prefilters.length,
      deferred = jQuery.Deferred().always(function () {
        Symbol('JSCA_3973_3975');
        delete tick.elem;
      }),
      tick = function () {
        Symbol('JSCA_3975_3992');
        if (stopped) {
          return false;
        }
        var currentTime = fxNow || createFxNow(),
          remaining = Math.max(
            0,
            animation.startTime + animation.duration - currentTime
          ),
          temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;
        for (; index < length; index++) {
          animation.tweens[index].run(percent);
        }
        deferred.notifyWith(elem, [animation, percent, remaining]);
        if (percent < 1 && length) {
          return remaining;
        }
        if (!length) {
          deferred.notifyWith(elem, [animation, 1, 0]);
        }
        deferred.resolveWith(elem, [animation]);
        return false;
      },
      animation = deferred.promise({
        elem: elem,
        props: jQuery.extend({}, properties),
        opts: jQuery.extend(
          true,
          {
            specialEasing: {},
            easing: jQuery.easing._default,
          },
          options
        ),
        originalProperties: properties,
        originalOptions: options,
        startTime: fxNow || createFxNow(),
        duration: options.duration,
        tweens: [],
        createTween: function (prop, end) {
          Symbol('JSCA_4004_4008');
          var tween = jQuery.Tween(
            elem,
            animation.opts,
            prop,
            end,
            animation.opts.specialEasing[prop] || animation.opts.easing
          );
          animation.tweens.push(tween);
          return tween;
        },
        stop: function (gotoEnd) {
          Symbol('JSCA_4009_4025');
          var index = 0,
            length = gotoEnd ? animation.tweens.length : 0;
          if (stopped) {
            return this;
          }
          stopped = true;
          for (; index < length; index++) {
            animation.tweens[index].run(1);
          }
          if (gotoEnd) {
            deferred.notifyWith(elem, [animation, 1, 0]);
            deferred.resolveWith(elem, [animation, gotoEnd]);
          } else {
            deferred.rejectWith(elem, [animation, gotoEnd]);
          }
          return this;
        },
      }),
      props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; index < length; index++) {
      result = Animation.prefilters[index].call(
        animation,
        elem,
        props,
        animation.opts
      );
      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop =
            result.stop.bind(result);
        }
        return result;
      }
    }
    jQuery.map(props, createTween, animation);
    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }
    animation
      .progress(animation.opts.progress)
      .done(animation.opts.done, animation.opts.complete)
      .fail(animation.opts.fail)
      .always(animation.opts.always);
    jQuery.fx.timer(
      jQuery.extend(tick, {
        elem: elem,
        anim: animation,
        queue: animation.opts.queue,
      })
    );
    return animation;
  }
  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      '*': [
        function (prop, value) {
          Symbol('JSCA_4051_4055');
          var tween = this.createTween(prop, value);
          adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
          return tween;
        },
      ],
    },
    tweener: function (props, callback) {
      Symbol('JSCA_4057_4070');
      if (isFunction(props)) {
        callback = props;
        props = ['*'];
      } else {
        props = props.match(rnothtmlwhite);
      }
      var prop,
        index = 0,
        length = props.length;
      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function (callback, prepend) {
      Symbol('JSCA_4072_4078');
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    },
  });
  jQuery.speed = function (speed, easing, fn) {
    Symbol('JSCA_4080_4110');
    var opt =
      speed && typeof speed === 'object'
        ? jQuery.extend({}, speed)
        : {
            complete: fn || (!fn && easing) || (isFunction(speed) && speed),
            duration: speed,
            easing: (fn && easing) || (easing && !isFunction(easing) && easing),
          };
    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== 'number') {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    }
    if (opt.queue == null || opt.queue === true) {
      opt.queue = 'fx';
    }
    opt.old = opt.complete;
    opt.complete = function () {
      Symbol('JSCA_4101_4108');
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  jQuery.fn.extend({
    fadeTo: function (speed, to, easing, callback) {
      Symbol('JSCA_4112_4116');
      return this.filter(isHiddenWithinTree)
        .css('opacity', 0)
        .show()
        .end()
        .animate(
          {
            opacity: to,
          },
          speed,
          easing,
          callback
        );
    },
    animate: function (prop, speed, easing, callback) {
      Symbol('JSCA_4117_4126');
      var empty = jQuery.isEmptyObject(prop),
        optall = jQuery.speed(speed, easing, callback),
        doAnimation = function () {
          Symbol('JSCA_4118_4123');
          var anim = Animation(this, jQuery.extend({}, prop), optall);
          if (empty || dataPriv.get(this, 'finish')) {
            anim.stop(true);
          }
        };
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false
        ? this.each(doAnimation)
        : this.queue(optall.queue, doAnimation);
    },
    stop: function (type, clearQueue, gotoEnd) {
      Symbol('JSCA_4127_4165');
      var stopQueue = function (hooks) {
        Symbol('JSCA_4128_4132');
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };
      if (typeof type !== 'string') {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue) {
        this.queue(type || 'fx', []);
      }
      return this.each(function () {
        Symbol('JSCA_4141_4164');
        var dequeue = true,
          index = type != null && type + 'queueHooks',
          timers = jQuery.timers,
          data = dataPriv.get(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        for (index = timers.length; index--; ) {
          if (
            timers[index].elem === this &&
            (type == null || timers[index].queue === type)
          ) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function (type) {
      Symbol('JSCA_4166_4190');
      if (type !== false) {
        type = type || 'fx';
      }
      return this.each(function () {
        Symbol('JSCA_4170_4189');
        var index,
          data = dataPriv.get(this),
          queue = data[type + 'queue'],
          hooks = data[type + 'queueHooks'],
          timers = jQuery.timers,
          length = queue ? queue.length : 0;
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    },
  });
  jQuery.each(['toggle', 'show', 'hide'], function (_i, name) {
    Symbol('JSCA_4192_4197');
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function (speed, easing, callback) {
      Symbol('JSCA_4194_4196');
      return speed == null || typeof speed === 'boolean'
        ? cssFn.apply(this, arguments)
        : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery.each(
    {
      slideDown: genFx('show'),
      slideUp: genFx('hide'),
      slideToggle: genFx('toggle'),
      fadeIn: {
        opacity: 'show',
      },
      fadeOut: {
        opacity: 'hide',
      },
      fadeToggle: {
        opacity: 'toggle',
      },
    },
    function (name, props) {
      Symbol('JSCA_4211_4215');
      jQuery.fn[name] = function (speed, easing, callback) {
        Symbol('JSCA_4212_4214');
        return this.animate(props, speed, easing, callback);
      };
    }
  );
  jQuery.timers = [];
  jQuery.fx.tick = function () {
    Symbol('JSCA_4217_4230');
    var timer,
      i = 0,
      timers = jQuery.timers;
    fxNow = Date.now();
    for (; i < timers.length; i++) {
      timer = timers[i];
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = undefined;
  };
  jQuery.fx.timer = function (timer) {
    Symbol('JSCA_4231_4234');
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };
  jQuery.fx.interval = 13;
  jQuery.fx.start = function () {
    Symbol('JSCA_4236_4242');
    if (inProgress) {
      return;
    }
    inProgress = true;
    schedule();
  };
  jQuery.fx.stop = function () {
    Symbol('JSCA_4243_4245');
    inProgress = null;
  };
  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400,
  };
  jQuery.fn.delay = function (time, type) {
    Symbol('JSCA_4251_4260');
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || 'fx';
    return this.queue(type, function (next, hooks) {
      Symbol('JSCA_4254_4259');
      var timeout = window.setTimeout(next, time);
      hooks.stop = function () {
        Symbol('JSCA_4256_4258');
        window.clearTimeout(timeout);
      };
    });
  };
  (function () {
    Symbol('JSCA_4261_4270');
    var input = document.createElement('input'),
      select = document.createElement('select'),
      opt = select.appendChild(document.createElement('option'));
    input.type = 'checkbox';
    support.checkOn = input.value !== '';
    support.optSelected = opt.selected;
    input = document.createElement('input');
    input.value = 't';
    input.type = 'radio';
    support.radioValue = input.value === 't';
  })();
  var boolHook,
    attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function (name, value) {
      Symbol('JSCA_4273_4275');
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function (name) {
      Symbol('JSCA_4276_4280');
      return this.each(function () {
        Symbol('JSCA_4277_4279');
        jQuery.removeAttr(this, name);
      });
    },
  });
  jQuery.extend({
    attr: function (elem, name, value) {
      Symbol('JSCA_4283_4310');
      var ret,
        hooks,
        nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === 'undefined') {
        return jQuery.prop(elem, name, value);
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks =
          jQuery.attrHooks[name.toLowerCase()] ||
          (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }
      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }
        if (
          hooks &&
          'set' in hooks &&
          (ret = hooks.set(elem, value, name)) !== undefined
        ) {
          return ret;
        }
        elem.setAttribute(name, value + '');
        return value;
      }
      if (hooks && 'get' in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      ret = jQuery.find.attr(elem, name);
      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function (elem, value) {
          Symbol('JSCA_4313_4322');
          if (
            !support.radioValue &&
            value === 'radio' &&
            nodeName(elem, 'input')
          ) {
            var val = elem.value;
            elem.setAttribute('type', value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        },
      },
    },
    removeAttr: function (elem, value) {
      Symbol('JSCA_4325_4332');
      var name,
        i = 0,
        attrNames = value && value.match(rnothtmlwhite);
      if (attrNames && elem.nodeType === 1) {
        while ((name = attrNames[i++])) {
          elem.removeAttribute(name);
        }
      }
    },
  });
  boolHook = {
    set: function (elem, value, name) {
      Symbol('JSCA_4335_4342');
      if (value === false) {
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }
      return name;
    },
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
    Symbol('JSCA_4344_4356');
    var getter = attrHandle[name] || jQuery.find.attr;
    attrHandle[name] = function (elem, name, isXML) {
      Symbol('JSCA_4346_4355');
      var ret,
        handle,
        lowercaseName = name.toLowerCase();
      if (!isXML) {
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }
      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
    rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function (name, value) {
      Symbol('JSCA_4359_4361');
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function (name) {
      Symbol('JSCA_4362_4366');
      return this.each(function () {
        Symbol('JSCA_4363_4365');
        delete this[jQuery.propFix[name] || name];
      });
    },
  });
  jQuery.extend({
    prop: function (elem, name, value) {
      Symbol('JSCA_4369_4388');
      var ret,
        hooks,
        nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }
      if (value !== undefined) {
        if (
          hooks &&
          'set' in hooks &&
          (ret = hooks.set(elem, value, name)) !== undefined
        ) {
          return ret;
        }
        return (elem[name] = value);
      }
      if (hooks && 'get' in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function (elem) {
          Symbol('JSCA_4391_4400');
          var tabindex = jQuery.find.attr(elem, 'tabindex');
          if (tabindex) {
            return parseInt(tabindex, 10);
          }
          if (
            rfocusable.test(elem.nodeName) ||
            (rclickable.test(elem.nodeName) && elem.href)
          ) {
            return 0;
          }
          return -1;
        },
      },
    },
    propFix: {
      for: 'htmlFor',
      class: 'className',
    },
  });
  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function (elem) {
        Symbol('JSCA_4410_4416');
        var parent = elem.parentNode;
        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }
        return null;
      },
      set: function (elem) {
        Symbol('JSCA_4417_4425');
        var parent = elem.parentNode;
        if (parent) {
          parent.selectedIndex;
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      },
    };
  }
  jQuery.each(
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
      Symbol('JSCA_4428_4430');
      jQuery.propFix[this.toLowerCase()] = this;
    }
  );
  function stripAndCollapse(value) {
    Symbol('JSCA_4431_4434');
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(' ');
  }
  function getClass(elem) {
    Symbol('JSCA_4435_4437');
    return (elem.getAttribute && elem.getAttribute('class')) || '';
  }
  function classesToArray(value) {
    Symbol('JSCA_4438_4446');
    if (Array.isArray(value)) {
      return value;
    }
    if (typeof value === 'string') {
      return value.match(rnothtmlwhite) || [];
    }
    return [];
  }
  jQuery.fn.extend({
    addClass: function (value) {
      Symbol('JSCA_4448_4475');
      var classNames, cur, curValue, className, i, finalValue;
      if (isFunction(value)) {
        return this.each(function (j) {
          Symbol('JSCA_4451_4453');
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }
      classNames = classesToArray(value);
      if (classNames.length) {
        return this.each(function () {
          Symbol('JSCA_4457_4472');
          curValue = getClass(this);
          cur = this.nodeType === 1 && ' ' + stripAndCollapse(curValue) + ' ';
          if (cur) {
            for (i = 0; i < classNames.length; i++) {
              className = classNames[i];
              if (cur.indexOf(' ' + className + ' ') < 0) {
                cur += className + ' ';
              }
            }
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              this.setAttribute('class', finalValue);
            }
          }
        });
      }
      return this;
    },
    removeClass: function (value) {
      Symbol('JSCA_4476_4506');
      var classNames, cur, curValue, className, i, finalValue;
      if (isFunction(value)) {
        return this.each(function (j) {
          Symbol('JSCA_4479_4481');
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }
      if (!arguments.length) {
        return this.attr('class', '');
      }
      classNames = classesToArray(value);
      if (classNames.length) {
        return this.each(function () {
          Symbol('JSCA_4488_4503');
          curValue = getClass(this);
          cur = this.nodeType === 1 && ' ' + stripAndCollapse(curValue) + ' ';
          if (cur) {
            for (i = 0; i < classNames.length; i++) {
              className = classNames[i];
              while (cur.indexOf(' ' + className + ' ') > -1) {
                cur = cur.replace(' ' + className + ' ', ' ');
              }
            }
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              this.setAttribute('class', finalValue);
            }
          }
        });
      }
      return this;
    },
    toggleClass: function (value, stateVal) {
      Symbol('JSCA_4507_4539');
      var classNames,
        className,
        i,
        self,
        type = typeof value,
        isValidValue = type === 'string' || Array.isArray(value);
      if (isFunction(value)) {
        return this.each(function (i) {
          Symbol('JSCA_4510_4512');
          jQuery(this).toggleClass(
            value.call(this, i, getClass(this), stateVal),
            stateVal
          );
        });
      }
      if (typeof stateVal === 'boolean' && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      classNames = classesToArray(value);
      return this.each(function () {
        Symbol('JSCA_4518_4538');
        if (isValidValue) {
          self = jQuery(this);
          for (i = 0; i < classNames.length; i++) {
            className = classNames[i];
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        } else if (value === undefined || type === 'boolean') {
          className = getClass(this);
          if (className) {
            dataPriv.set(this, '__className__', className);
          }
          if (this.setAttribute) {
            this.setAttribute(
              'class',
              className || value === false
                ? ''
                : dataPriv.get(this, '__className__') || ''
            );
          }
        }
      });
    },
    hasClass: function (selector) {
      Symbol('JSCA_4540_4549');
      var className,
        elem,
        i = 0;
      className = ' ' + selector + ' ';
      while ((elem = this[i++])) {
        if (
          elem.nodeType === 1 &&
          (' ' + stripAndCollapse(getClass(elem)) + ' ').indexOf(className) > -1
        ) {
          return true;
        }
      }
      return false;
    },
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function (value) {
      Symbol('JSCA_4553_4594');
      var hooks,
        ret,
        valueIsFunction,
        elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks =
            jQuery.valHooks[elem.type] ||
            jQuery.valHooks[elem.nodeName.toLowerCase()];
          if (
            hooks &&
            'get' in hooks &&
            (ret = hooks.get(elem, 'value')) !== undefined
          ) {
            return ret;
          }
          ret = elem.value;
          if (typeof ret === 'string') {
            return ret.replace(rreturn, '');
          }
          return ret == null ? '' : ret;
        }
        return;
      }
      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        Symbol('JSCA_4570_4593');
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        }
        if (val == null) {
          val = '';
        } else if (typeof val === 'number') {
          val += '';
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            Symbol('JSCA_4585_4587');
            return value == null ? '' : value + '';
          });
        }
        hooks =
          jQuery.valHooks[this.type] ||
          jQuery.valHooks[this.nodeName.toLowerCase()];
        if (
          !hooks ||
          !('set' in hooks) ||
          hooks.set(this, val, 'value') === undefined
        ) {
          this.value = val;
        }
      });
    },
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function (elem) {
          Symbol('JSCA_4599_4602');
          var val = jQuery.find.attr(elem, 'value');
          return val != null ? val : stripAndCollapse(jQuery.text(elem));
        },
      },
      select: {
        get: function (elem) {
          Symbol('JSCA_4605_4623');
          var value,
            option,
            i,
            options = elem.options,
            index = elem.selectedIndex,
            one = elem.type === 'select-one',
            values = one ? null : [],
            max = one ? index + 1 : options.length;
          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          }
          for (; i < max; i++) {
            option = options[i];
            if (
              (option.selected || i === index) &&
              !option.disabled &&
              (!option.parentNode.disabled ||
                !nodeName(option.parentNode, 'optgroup'))
            ) {
              value = jQuery(option).val();
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function (elem, value) {
          Symbol('JSCA_4624_4636');
          var optionSet,
            option,
            options = elem.options,
            values = jQuery.makeArray(value),
            i = options.length;
          while (i--) {
            option = options[i];
            if (
              (option.selected =
                jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1)
            ) {
              optionSet = true;
            }
          }
          if (!optionSet) {
            elem.selectedIndex = -1;
          }
          return values;
        },
      },
    },
  });
  jQuery.each(['radio', 'checkbox'], function () {
    Symbol('JSCA_4640_4653');
    jQuery.valHooks[this] = {
      set: function (elem, value) {
        Symbol('JSCA_4642_4646');
        if (Array.isArray(value)) {
          return (elem.checked =
            jQuery.inArray(jQuery(elem).val(), value) > -1);
        }
      },
    };
    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        Symbol('JSCA_4649_4651');
        return elem.getAttribute('value') === null ? 'on' : elem.value;
      };
    }
  });
  var location = window.location;
  var nonce = {
    guid: Date.now(),
  };
  var rquery = /\?/;
  jQuery.parseXML = function (data) {
    Symbol('JSCA_4659_4674');
    var xml, parserErrorElem;
    if (!data || typeof data !== 'string') {
      return null;
    }
    try {
      xml = new window.DOMParser().parseFromString(data, 'text/xml');
    } catch (e) {}
    parserErrorElem = xml && xml.getElementsByTagName('parsererror')[0];
    if (!xml || parserErrorElem) {
      jQuery.error(
        'Invalid XML: ' +
          (parserErrorElem
            ? jQuery
                .map(parserErrorElem.childNodes, function (el) {
                  Symbol('JSCA_4669_4671');
                  return el.textContent;
                })
                .join('\n')
            : data)
      );
    }
    return xml;
  };
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
    stopPropagationCallback = function (e) {
      Symbol('JSCA_4675_4677');
      e.stopPropagation();
    };
  jQuery.extend(jQuery.event, {
    trigger: function (event, data, elem, onlyHandlers) {
      Symbol('JSCA_4679_4760');
      var i,
        cur,
        tmp,
        bubbleType,
        ontype,
        handle,
        special,
        lastElement,
        eventPath = [elem || document],
        type = hasOwn.call(event, 'type') ? event.type : event,
        namespaces = hasOwn.call(event, 'namespace')
          ? event.namespace.split('.')
          : [];
      cur = lastElement = tmp = elem = elem || document;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf('.') > -1) {
        namespaces = type.split('.');
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(':') < 0 && 'on' + type;
      event = event[jQuery.expando]
        ? event
        : new jQuery.Event(type, typeof event === 'object' && event);
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join('.');
      event.rnamespace = event.namespace
        ? new RegExp('(^|\\.)' + namespaces.join('\\.(?:.*\\.|)') + '(\\.|$)')
        : null;
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }
      data = data == null ? [event] : jQuery.makeArray(data, [event]);
      special = jQuery.event.special[type] || {};
      if (
        !onlyHandlers &&
        special.trigger &&
        special.trigger.apply(elem, data) === false
      ) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }
      i = 0;
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type;
        handle =
          (dataPriv.get(cur, 'events') || Object.create(null))[event.type] &&
          dataPriv.get(cur, 'handle');
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if (
          (!special._default ||
            special._default.apply(eventPath.pop(), data) === false) &&
          acceptData(elem)
        ) {
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery.event.triggered = type;
            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }
            elem[type]();
            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }
            jQuery.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    simulate: function (type, elem, event) {
      Symbol('JSCA_4761_4767');
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true,
      });
      jQuery.event.trigger(e, null, elem);
    },
  });
  jQuery.fn.extend({
    trigger: function (type, data) {
      Symbol('JSCA_4770_4774');
      return this.each(function () {
        Symbol('JSCA_4771_4773');
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function (type, data) {
      Symbol('JSCA_4775_4780');
      var elem = this[0];
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    },
  });
  var rbracket = /\[\]$/,
    rCRLF = /\r?\n/g,
    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
    rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix, obj, traditional, add) {
    Symbol('JSCA_4783_4800');
    var name;
    if (Array.isArray(obj)) {
      jQuery.each(obj, function (i, v) {
        Symbol('JSCA_4786_4792');
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(
            prefix + '[' + (typeof v === 'object' && v != null ? i : '') + ']',
            v,
            traditional,
            add
          );
        }
      });
    } else if (!traditional && toType(obj) === 'object') {
      for (name in obj) {
        buildParams(prefix + '[' + name + ']', obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery.param = function (a, traditional) {
    Symbol('JSCA_4801_4819');
    var prefix,
      s = [],
      add = function (key, valueOrFunction) {
        Symbol('JSCA_4802_4805');
        var value = isFunction(valueOrFunction)
          ? valueOrFunction()
          : valueOrFunction;
        s[s.length] =
          encodeURIComponent(key) +
          '=' +
          encodeURIComponent(value == null ? '' : value);
      };
    if (a == null) {
      return '';
    }
    if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
      jQuery.each(a, function () {
        Symbol('JSCA_4810_4812');
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join('&');
  };
  jQuery.fn.extend({
    serialize: function () {
      Symbol('JSCA_4821_4823');
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function () {
      Symbol('JSCA_4824_4849');
      return this.map(function () {
        Symbol('JSCA_4825_4828');
        var elements = jQuery.prop(this, 'elements');
        return elements ? jQuery.makeArray(elements) : this;
      })
        .filter(function () {
          Symbol('JSCA_4828_4831');
          var type = this.type;
          return (
            this.name &&
            !jQuery(this).is(':disabled') &&
            rsubmittable.test(this.nodeName) &&
            !rsubmitterTypes.test(type) &&
            (this.checked || !rcheckableType.test(type))
          );
        })
        .map(function (_i, elem) {
          Symbol('JSCA_4831_4848');
          var val = jQuery(this).val();
          if (val == null) {
            return null;
          }
          if (Array.isArray(val)) {
            return jQuery.map(val, function (val) {
              Symbol('JSCA_4837_4842');
              return {
                name: elem.name,
                value: val.replace(rCRLF, '\r\n'),
              };
            });
          }
          return {
            name: elem.name,
            value: val.replace(rCRLF, '\r\n'),
          };
        })
        .get();
    },
  });
  var r20 = /%20/g,
    rhash = /#.*$/,
    rantiCache = /([?&])_=[^&]*/,
    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    rlocalProtocol =
      /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    rnoContent = /^(?:GET|HEAD)$/,
    rprotocol = /^\/\//,
    prefilters = {},
    transports = {},
    allTypes = '*/'.concat('*'),
    originAnchor = document.createElement('a');
  originAnchor.href = location.href;
  function addToPrefiltersOrTransports(structure) {
    Symbol('JSCA_4853_4871');
    return function (dataTypeExpression, func) {
      Symbol('JSCA_4854_4870');
      if (typeof dataTypeExpression !== 'string') {
        func = dataTypeExpression;
        dataTypeExpression = '*';
      }
      var dataType,
        i = 0,
        dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
      if (isFunction(func)) {
        while ((dataType = dataTypes[i++])) {
          if (dataType[0] === '+') {
            dataType = dataType.slice(1) || '*';
            (structure[dataType] = structure[dataType] || []).unshift(func);
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }
  function inspectPrefiltersOrTransports(
    structure,
    options,
    originalOptions,
    jqXHR
  ) {
    Symbol('JSCA_4872_4890');
    var inspected = {},
      seekingTransport = structure === transports;
    function inspect(dataType) {
      Symbol('JSCA_4874_4888');
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        Symbol('JSCA_4877_4886');
        var dataTypeOrTransport = prefilterOrFactory(
          options,
          originalOptions,
          jqXHR
        );
        if (
          typeof dataTypeOrTransport === 'string' &&
          !seekingTransport &&
          !inspected[dataTypeOrTransport]
        ) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || (!inspected['*'] && inspect('*'));
  }
  function ajaxExtend(target, src) {
    Symbol('JSCA_4891_4902');
    var key,
      deep,
      flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }
    return target;
  }
  function ajaxHandleResponses(s, jqXHR, responses) {
    Symbol('JSCA_4903_4939');
    var ct,
      type,
      finalDataType,
      firstDataType,
      contents = s.contents,
      dataTypes = s.dataTypes;
    while (dataTypes[0] === '*') {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader('Content-Type');
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + ' ' + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }
      finalDataType = finalDataType || firstDataType;
    }
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    Symbol('JSCA_4940_5000');
    var conv2,
      current,
      conv,
      tmp,
      prev,
      converters = {},
      dataTypes = s.dataTypes.slice();
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = dataTypes.shift();
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }
      prev = current;
      current = dataTypes.shift();
      if (current) {
        if (current === '*') {
          current = prev;
        } else if (prev !== '*' && prev !== current) {
          conv = converters[prev + ' ' + current] || converters['* ' + current];
          if (!conv) {
            for (conv2 in converters) {
              tmp = conv2.split(' ');
              if (tmp[1] === current) {
                conv =
                  converters[prev + ' ' + tmp[0]] || converters['* ' + tmp[0]];
                if (conv) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }
          if (conv !== true) {
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: 'parsererror',
                  error: conv
                    ? e
                    : 'No conversion from ' + prev + ' to ' + current,
                };
              }
            }
          }
        }
      }
    }
    return {
      state: 'success',
      data: response,
    };
  }
  jQuery.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: 'GET',
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': allTypes,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/,
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON',
      },
      converters: {
        '* text': String,
        'text html': true,
        'text json': JSON.parse,
        'text xml': jQuery.parseXML,
      },
      flatOptions: {
        url: true,
        context: true,
      },
    },
    ajaxSetup: function (target, settings) {
      Symbol('JSCA_5041_5043');
      return settings
        ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
        : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    ajax: function (url, options) {
      Symbol('JSCA_5046_5266');
      if (typeof url === 'object') {
        options = url;
        url = undefined;
      }
      options = options || {};
      var transport,
        cacheURL,
        responseHeadersString,
        responseHeaders,
        timeoutTimer,
        urlAnchor,
        completed,
        fireGlobals,
        i,
        uncached,
        s = jQuery.ajaxSetup({}, options),
        callbackContext = s.context || s,
        globalEventContext =
          s.context && (callbackContext.nodeType || callbackContext.jquery)
            ? jQuery(callbackContext)
            : jQuery.event,
        deferred = jQuery.Deferred(),
        completeDeferred = jQuery.Callbacks('once memory'),
        statusCode = s.statusCode || {},
        requestHeaders = {},
        requestHeadersNames = {},
        strAbort = 'canceled',
        jqXHR = {
          readyState: 0,
          getResponseHeader: function (key) {
            Symbol('JSCA_5054_5066');
            var match;
            if (completed) {
              if (!responseHeaders) {
                responseHeaders = {};
                while ((match = rheaders.exec(responseHeadersString))) {
                  responseHeaders[match[1].toLowerCase() + ' '] = (
                    responseHeaders[match[1].toLowerCase() + ' '] || []
                  ).concat(match[2]);
                }
              }
              match = responseHeaders[key.toLowerCase() + ' '];
            }
            return match == null ? null : match.join(', ');
          },
          getAllResponseHeaders: function () {
            Symbol('JSCA_5067_5069');
            return completed ? responseHeadersString : null;
          },
          setRequestHeader: function (name, value) {
            Symbol('JSCA_5070_5076');
            if (completed == null) {
              name = requestHeadersNames[name.toLowerCase()] =
                requestHeadersNames[name.toLowerCase()] || name;
              requestHeaders[name] = value;
            }
            return this;
          },
          overrideMimeType: function (type) {
            Symbol('JSCA_5077_5082');
            if (completed == null) {
              s.mimeType = type;
            }
            return this;
          },
          statusCode: function (map) {
            Symbol('JSCA_5083_5095');
            var code;
            if (map) {
              if (completed) {
                jqXHR.always(map[jqXHR.status]);
              } else {
                for (code in map) {
                  statusCode[code] = [statusCode[code], map[code]];
                }
              }
            }
            return this;
          },
          abort: function (statusText) {
            Symbol('JSCA_5096_5103');
            var finalText = statusText || strAbort;
            if (transport) {
              transport.abort(finalText);
            }
            done(0, finalText);
            return this;
          },
        };
      deferred.promise(jqXHR);
      s.url = ((url || s.url || location.href) + '').replace(
        rprotocol,
        location.protocol + '//'
      );
      s.type = options.method || options.type || s.method || s.type;
      s.dataTypes = (s.dataType || '*').toLowerCase().match(rnothtmlwhite) || [
        '',
      ];
      if (s.crossDomain == null) {
        urlAnchor = document.createElement('a');
        try {
          urlAnchor.href = s.url;
          urlAnchor.href = urlAnchor.href;
          s.crossDomain =
            originAnchor.protocol + '//' + originAnchor.host !==
            urlAnchor.protocol + '//' + urlAnchor.host;
        } catch (e) {
          s.crossDomain = true;
        }
      }
      if (s.data && s.processData && typeof s.data !== 'string') {
        s.data = jQuery.param(s.data, s.traditional);
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (completed) {
        return jqXHR;
      }
      fireGlobals = jQuery.event && s.global;
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger('ajaxStart');
      }
      s.type = s.type.toUpperCase();
      s.hasContent = !rnoContent.test(s.type);
      cacheURL = s.url.replace(rhash, '');
      if (!s.hasContent) {
        uncached = s.url.slice(cacheURL.length);
        if (s.data && (s.processData || typeof s.data === 'string')) {
          cacheURL += (rquery.test(cacheURL) ? '&' : '?') + s.data;
          delete s.data;
        }
        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, '$1');
          uncached =
            (rquery.test(cacheURL) ? '&' : '?') +
            '_=' +
            nonce.guid++ +
            uncached;
        }
        s.url = cacheURL + uncached;
      } else if (
        s.data &&
        s.processData &&
        (s.contentType || '').indexOf('application/x-www-form-urlencoded') === 0
      ) {
        s.data = s.data.replace(r20, '+');
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader(
            'If-Modified-Since',
            jQuery.lastModified[cacheURL]
          );
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader('If-None-Match', jQuery.etag[cacheURL]);
        }
      }
      if (
        (s.data && s.hasContent && s.contentType !== false) ||
        options.contentType
      ) {
        jqXHR.setRequestHeader('Content-Type', s.contentType);
      }
      jqXHR.setRequestHeader(
        'Accept',
        s.dataTypes[0] && s.accepts[s.dataTypes[0]]
          ? s.accepts[s.dataTypes[0]] +
              (s.dataTypes[0] !== '*' ? ', ' + allTypes + '; q=0.01' : '')
          : s.accepts['*']
      );
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (
        s.beforeSend &&
        (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)
      ) {
        return jqXHR.abort();
      }
      strAbort = 'abort';
      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error);
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
      if (!transport) {
        done(-1, 'No Transport');
      } else {
        jqXHR.readyState = 1;
        if (fireGlobals) {
          globalEventContext.trigger('ajaxSend', [jqXHR, s]);
        }
        if (completed) {
          return jqXHR;
        }
        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            Symbol('JSCA_5181_5183');
            jqXHR.abort('timeout');
          }, s.timeout);
        }
        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          if (completed) {
            throw e;
          }
          done(-1, e);
        }
      }
      function done(status, nativeStatusText, responses, headers) {
        Symbol('JSCA_5195_5264');
        var isSuccess,
          success,
          error,
          response,
          modified,
          statusText = nativeStatusText;
        if (completed) {
          return;
        }
        completed = true;
        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        }
        transport = undefined;
        responseHeadersString = headers || '';
        jqXHR.readyState = status > 0 ? 4 : 0;
        isSuccess = (status >= 200 && status < 300) || status === 304;
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }
        if (
          !isSuccess &&
          jQuery.inArray('script', s.dataTypes) > -1 &&
          jQuery.inArray('json', s.dataTypes) < 0
        ) {
          s.converters['text script'] = function () {
            Symbol('JSCA_5212_5212');
          };
        }
        response = ajaxConvert(s, response, jqXHR, isSuccess);
        if (isSuccess) {
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader('Last-Modified');
            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader('etag');
            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          }
          if (status === 204 || s.type === 'HEAD') {
            statusText = 'nocontent';
          } else if (status === 304) {
            statusText = 'notmodified';
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          error = statusText;
          if (status || !statusText) {
            statusText = 'error';
            if (status < 0) {
              status = 0;
            }
          }
        }
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + '';
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = undefined;
        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? 'ajaxSuccess' : 'ajaxError', [
            jqXHR,
            s,
            isSuccess ? success : error,
          ]);
        }
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
        if (fireGlobals) {
          globalEventContext.trigger('ajaxComplete', [jqXHR, s]);
          if (!--jQuery.active) {
            jQuery.event.trigger('ajaxStop');
          }
        }
      }
      return jqXHR;
    },
    getJSON: function (url, data, callback) {
      Symbol('JSCA_5267_5269');
      return jQuery.get(url, data, callback, 'json');
    },
    getScript: function (url, callback) {
      Symbol('JSCA_5270_5272');
      return jQuery.get(url, undefined, callback, 'script');
    },
  });
  jQuery.each(['get', 'post'], function (_i, method) {
    Symbol('JSCA_5274_5289');
    jQuery[method] = function (url, data, callback, type) {
      Symbol('JSCA_5275_5288');
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
      return jQuery.ajax(
        jQuery.extend(
          {
            url: url,
            type: method,
            dataType: type,
            data: data,
            success: callback,
          },
          jQuery.isPlainObject(url) && url
        )
      );
    };
  });
  jQuery.ajaxPrefilter(function (s) {
    Symbol('JSCA_5290_5297');
    var i;
    for (i in s.headers) {
      if (i.toLowerCase() === 'content-type') {
        s.contentType = s.headers[i] || '';
      }
    }
  });
  jQuery._evalUrl = function (url, options, doc) {
    Symbol('JSCA_5298_5313');
    return jQuery.ajax({
      url: url,
      type: 'GET',
      dataType: 'script',
      cache: true,
      async: false,
      global: false,
      converters: {
        'text script': function () {
          Symbol('JSCA_5307_5307');
        },
      },
      dataFilter: function (response) {
        Symbol('JSCA_5309_5311');
        jQuery.globalEval(response, options, doc);
      },
    });
  };
  jQuery.fn.extend({
    wrapAll: function (html) {
      Symbol('JSCA_5315_5334');
      var wrap;
      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        }
        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap
          .map(function () {
            Symbol('JSCA_5325_5331');
            var elem = this;
            while (elem.firstElementChild) {
              elem = elem.firstElementChild;
            }
            return elem;
          })
          .append(this);
      }
      return this;
    },
    wrapInner: function (html) {
      Symbol('JSCA_5335_5349');
      if (isFunction(html)) {
        return this.each(function (i) {
          Symbol('JSCA_5337_5339');
          jQuery(this).wrapInner(html.call(this, i));
        });
      }
      return this.each(function () {
        Symbol('JSCA_5341_5348');
        var self = jQuery(this),
          contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function (html) {
      Symbol('JSCA_5350_5355');
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        Symbol('JSCA_5352_5354');
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function (selector) {
      Symbol('JSCA_5356_5361');
      this.parent(selector)
        .not('body')
        .each(function () {
          Symbol('JSCA_5357_5359');
          jQuery(this).replaceWith(this.childNodes);
        });
      return this;
    },
  });
  jQuery.expr.pseudos.hidden = function (elem) {
    Symbol('JSCA_5363_5365');
    return !jQuery.expr.pseudos.visible(elem);
  };
  jQuery.expr.pseudos.visible = function (elem) {
    Symbol('JSCA_5366_5368');
    return !!(
      elem.offsetWidth ||
      elem.offsetHeight ||
      elem.getClientRects().length
    );
  };
  jQuery.ajaxSettings.xhr = function () {
    Symbol('JSCA_5369_5373');
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };
  var xhrSuccessStatus = {
      0: 200,
      1223: 204,
    },
    xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && 'withCredentials' in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    Symbol('JSCA_5380_5454');
    var callback, errorCallback;
    if (support.cors || (xhrSupported && !options.crossDomain)) {
      return {
        send: function (headers, complete) {
          Symbol('JSCA_5384_5446');
          var i,
            xhr = options.xhr();
          xhr.open(
            options.type,
            options.url,
            options.async,
            options.username,
            options.password
          );
          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          }
          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          }
          if (!options.crossDomain && !headers['X-Requested-With']) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
          }
          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          }
          callback = function (type) {
            Symbol('JSCA_5401_5422');
            return function () {
              Symbol('JSCA_5402_5421');
              if (callback) {
                callback =
                  errorCallback =
                  xhr.onload =
                  xhr.onerror =
                  xhr.onabort =
                  xhr.ontimeout =
                  xhr.onreadystatechange =
                    null;
                if (type === 'abort') {
                  xhr.abort();
                } else if (type === 'error') {
                  if (typeof xhr.status !== 'number') {
                    complete(0, 'error');
                  } else {
                    complete(xhr.status, xhr.statusText);
                  }
                } else {
                  complete(
                    xhrSuccessStatus[xhr.status] || xhr.status,
                    xhr.statusText,
                    (xhr.responseType || 'text') !== 'text' ||
                      typeof xhr.responseText !== 'string'
                      ? {
                          binary: xhr.response,
                        }
                      : {
                          text: xhr.responseText,
                        },
                    xhr.getAllResponseHeaders()
                  );
                }
              }
            };
          };
          xhr.onload = callback();
          errorCallback = xhr.onerror = xhr.ontimeout = callback('error');
          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              Symbol('JSCA_5428_5436');
              if (xhr.readyState === 4) {
                window.setTimeout(function () {
                  Symbol('JSCA_5430_5434');
                  if (callback) {
                    errorCallback();
                  }
                });
              }
            };
          }
          callback = callback('abort');
          try {
            xhr.send((options.hasContent && options.data) || null);
          } catch (e) {
            if (callback) {
              throw e;
            }
          }
        },
        abort: function () {
          Symbol('JSCA_5447_5451');
          if (callback) {
            callback();
          }
        },
      };
    }
  });
  jQuery.ajaxPrefilter(function (s) {
    Symbol('JSCA_5455_5459');
    if (s.crossDomain) {
      s.contents.script = false;
    }
  });
  jQuery.ajaxSetup({
    accepts: {
      script:
        'text/javascript, application/javascript, ' +
        'application/ecmascript, application/x-ecmascript',
    },
    contents: {
      script: /\b(?:java|ecma)script\b/,
    },
    converters: {
      'text script': function (text) {
        Symbol('JSCA_5468_5471');
        jQuery.globalEval(text);
        return text;
      },
    },
  });
  jQuery.ajaxPrefilter('script', function (s) {
    Symbol('JSCA_5474_5481');
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (s.crossDomain) {
      s.type = 'GET';
    }
  });
  jQuery.ajaxTransport('script', function (s) {
    Symbol('JSCA_5482_5506');
    if (s.crossDomain || s.scriptAttrs) {
      var script, callback;
      return {
        send: function (_, complete) {
          Symbol('JSCA_5486_5498');
          script = jQuery('<script>')
            .attr(s.scriptAttrs || {})
            .prop({
              charset: s.scriptCharset,
              src: s.url,
            })
            .on(
              'load error',
              (callback = function (evt) {
                Symbol('JSCA_5490_5496');
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === 'error' ? 404 : 200, evt.type);
                }
              })
            );
          document.head.appendChild(script[0]);
        },
        abort: function () {
          Symbol('JSCA_5499_5503');
          if (callback) {
            callback();
          }
        },
      };
    }
  });
  var oldCallbacks = [],
    rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      Symbol('JSCA_5510_5514');
      var callback = oldCallbacks.pop() || jQuery.expando + '_' + nonce.guid++;
      this[callback] = true;
      return callback;
    },
  });
  jQuery.ajaxPrefilter('json jsonp', function (s, originalSettings, jqXHR) {
    Symbol('JSCA_5516_5553');
    var callbackName,
      overwritten,
      responseContainer,
      jsonProp =
        s.jsonp !== false &&
        (rjsonp.test(s.url)
          ? 'url'
          : typeof s.data === 'string' &&
            (s.contentType || '').indexOf(
              'application/x-www-form-urlencoded'
            ) === 0 &&
            rjsonp.test(s.data) &&
            'data');
    if (jsonProp || s.dataTypes[0] === 'jsonp') {
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback)
        ? s.jsonpCallback()
        : s.jsonpCallback;
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, '$1' + callbackName);
      } else if (s.jsonp !== false) {
        s.url +=
          (rquery.test(s.url) ? '&' : '?') + s.jsonp + '=' + callbackName;
      }
      s.converters['script json'] = function () {
        Symbol('JSCA_5525_5530');
        if (!responseContainer) {
          jQuery.error(callbackName + ' was not called');
        }
        return responseContainer[0];
      };
      s.dataTypes[0] = 'json';
      overwritten = window[callbackName];
      window[callbackName] = function () {
        Symbol('JSCA_5533_5535');
        responseContainer = arguments;
      };
      jqXHR.always(function () {
        Symbol('JSCA_5536_5550');
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName);
        } else {
          window[callbackName] = overwritten;
        }
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = undefined;
      });
      return 'script';
    }
  });
  support.createHTMLDocument = (function () {
    Symbol('JSCA_5554_5558');
    var body = document.implementation.createHTMLDocument('').body;
    body.innerHTML = '<form></form><form></form>';
    return body.childNodes.length === 2;
  })();
  jQuery.parseHTML = function (data, context, keepScripts) {
    Symbol('JSCA_5559_5588');
    if (typeof data !== 'string') {
      return [];
    }
    if (typeof context === 'boolean') {
      keepScripts = context;
      context = false;
    }
    var base, parsed, scripts;
    if (!context) {
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument('');
        base = context.createElement('base');
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }
    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && [];
    if (parsed) {
      return [context.createElement(parsed[1])];
    }
    parsed = buildFragment([data], context, scripts);
    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }
    return jQuery.merge([], parsed.childNodes);
  };
  jQuery.fn.load = function (url, params, callback) {
    Symbol('JSCA_5589_5617');
    var selector,
      type,
      response,
      self = this,
      off = url.indexOf(' ');
    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    }
    if (isFunction(params)) {
      callback = params;
      params = undefined;
    } else if (params && typeof params === 'object') {
      type = 'POST';
    }
    if (self.length > 0) {
      jQuery
        .ajax({
          url: url,
          type: type || 'GET',
          dataType: 'html',
          data: params,
        })
        .done(function (responseText) {
          Symbol('JSCA_5607_5610');
          response = arguments;
          self.html(
            selector
              ? jQuery('<div>')
                  .append(jQuery.parseHTML(responseText))
                  .find(selector)
              : responseText
          );
        })
        .always(
          callback &&
            function (jqXHR, status) {
              Symbol('JSCA_5610_5614');
              self.each(function () {
                Symbol('JSCA_5611_5613');
                callback.apply(
                  this,
                  response || [jqXHR.responseText, status, jqXHR]
                );
              });
            }
        );
    }
    return this;
  };
  jQuery.expr.pseudos.animated = function (elem) {
    Symbol('JSCA_5618_5622');
    return jQuery.grep(jQuery.timers, function (fn) {
      Symbol('JSCA_5619_5621');
      return elem === fn.elem;
    }).length;
  };
  jQuery.offset = {
    setOffset: function (elem, options, i) {
      Symbol('JSCA_5624_5655');
      var curPosition,
        curLeft,
        curCSSTop,
        curTop,
        curOffset,
        curCSSLeft,
        calculatePosition,
        position = jQuery.css(elem, 'position'),
        curElem = jQuery(elem),
        props = {};
      if (position === 'static') {
        elem.style.position = 'relative';
      }
      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, 'top');
      curCSSLeft = jQuery.css(elem, 'left');
      calculatePosition =
        (position === 'absolute' || position === 'fixed') &&
        (curCSSTop + curCSSLeft).indexOf('auto') > -1;
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (isFunction(options)) {
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }
      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }
      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }
      if ('using' in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    },
  };
  jQuery.fn.extend({
    offset: function (options) {
      Symbol('JSCA_5658_5680');
      if (arguments.length) {
        return options === undefined
          ? this
          : this.each(function (i) {
              Symbol('JSCA_5660_5662');
              jQuery.offset.setOffset(this, options, i);
            });
      }
      var rect,
        win,
        elem = this[0];
      if (!elem) {
        return;
      }
      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0,
        };
      }
      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset,
      };
    },
    position: function () {
      Symbol('JSCA_5681_5708');
      if (!this[0]) {
        return;
      }
      var offsetParent,
        offset,
        doc,
        elem = this[0],
        parentOffset = {
          top: 0,
          left: 0,
        };
      if (jQuery.css(elem, 'position') === 'fixed') {
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset();
        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;
        while (
          offsetParent &&
          (offsetParent === doc.body || offsetParent === doc.documentElement) &&
          jQuery.css(offsetParent, 'position') === 'static'
        ) {
          offsetParent = offsetParent.parentNode;
        }
        if (
          offsetParent &&
          offsetParent !== elem &&
          offsetParent.nodeType === 1
        ) {
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, 'borderTopWidth', true);
          parentOffset.left += jQuery.css(
            offsetParent,
            'borderLeftWidth',
            true
          );
        }
      }
      return {
        top:
          offset.top - parentOffset.top - jQuery.css(elem, 'marginTop', true),
        left:
          offset.left -
          parentOffset.left -
          jQuery.css(elem, 'marginLeft', true),
      };
    },
    offsetParent: function () {
      Symbol('JSCA_5709_5717');
      return this.map(function () {
        Symbol('JSCA_5710_5716');
        var offsetParent = this.offsetParent;
        while (
          offsetParent &&
          jQuery.css(offsetParent, 'position') === 'static'
        ) {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || documentElement;
      });
    },
  });
  jQuery.each(
    {
      scrollLeft: 'pageXOffset',
      scrollTop: 'pageYOffset',
    },
    function (method, prop) {
      Symbol('JSCA_5722_5742');
      var top = 'pageYOffset' === prop;
      jQuery.fn[method] = function (val) {
        Symbol('JSCA_5724_5741');
        return access(
          this,
          function (elem, method, val) {
            Symbol('JSCA_5725_5740');
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val === undefined) {
              return win ? win[prop] : elem[method];
            }
            if (win) {
              win.scrollTo(
                !top ? val : win.pageXOffset,
                top ? val : win.pageYOffset
              );
            } else {
              elem[method] = val;
            }
          },
          method,
          val,
          arguments.length
        );
      };
    }
  );
  jQuery.each(['top', 'left'], function (_i, prop) {
    Symbol('JSCA_5743_5750');
    jQuery.cssHooks[prop] = addGetHookIf(
      support.pixelPosition,
      function (elem, computed) {
        Symbol('JSCA_5744_5749');
        if (computed) {
          computed = curCSS(elem, prop);
          return rnumnonpx.test(computed)
            ? jQuery(elem).position()[prop] + 'px'
            : computed;
        }
      }
    );
  });
  jQuery.each(
    {
      Height: 'height',
      Width: 'width',
    },
    function (name, type) {
      Symbol('JSCA_5754_5775');
      jQuery.each(
        {
          padding: 'inner' + name,
          content: type,
          '': 'outer' + name,
        },
        function (defaultExtra, funcName) {
          Symbol('JSCA_5759_5774');
          jQuery.fn[funcName] = function (margin, value) {
            Symbol('JSCA_5760_5773');
            var chainable =
                arguments.length &&
                (defaultExtra || typeof margin !== 'boolean'),
              extra =
                defaultExtra ||
                (margin === true || value === true ? 'margin' : 'border');
            return access(
              this,
              function (elem, type, value) {
                Symbol('JSCA_5762_5772');
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf('outer') === 0
                    ? elem['inner' + name]
                    : elem.document.documentElement['client' + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(
                    elem.body['scroll' + name],
                    doc['scroll' + name],
                    elem.body['offset' + name],
                    doc['offset' + name],
                    doc['client' + name]
                  );
                }
                return value === undefined
                  ? jQuery.css(elem, type, extra)
                  : jQuery.style(elem, type, value, extra);
              },
              type,
              chainable ? margin : undefined,
              chainable
            );
          };
        }
      );
    }
  );
  jQuery.each(
    [
      'ajaxStart',
      'ajaxStop',
      'ajaxComplete',
      'ajaxError',
      'ajaxSuccess',
      'ajaxSend',
    ],
    function (_i, type) {
      Symbol('JSCA_5776_5780');
      jQuery.fn[type] = function (fn) {
        Symbol('JSCA_5777_5779');
        return this.on(type, fn);
      };
    }
  );
  jQuery.fn.extend({
    bind: function (types, data, fn) {
      Symbol('JSCA_5782_5784');
      return this.on(types, null, data, fn);
    },
    unbind: function (types, fn) {
      Symbol('JSCA_5785_5787');
      return this.off(types, null, fn);
    },
    delegate: function (selector, types, data, fn) {
      Symbol('JSCA_5788_5790');
      return this.on(types, selector, data, fn);
    },
    undelegate: function (selector, types, fn) {
      Symbol('JSCA_5791_5793');
      return arguments.length === 1
        ? this.off(selector, '**')
        : this.off(types, selector || '**', fn);
    },
    hover: function (fnOver, fnOut) {
      Symbol('JSCA_5794_5796');
      return this.on('mouseenter', fnOver).on('mouseleave', fnOut || fnOver);
    },
  });
  jQuery.each(
    (
      'blur focus focusin focusout resize scroll click dblclick ' +
      'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' +
      'change select submit keydown keypress keyup contextmenu'
    ).split(' '),
    function (_i, name) {
      Symbol('JSCA_5798_5802');
      jQuery.fn[name] = function (data, fn) {
        Symbol('JSCA_5799_5801');
        return arguments.length > 0
          ? this.on(name, null, data, fn)
          : this.trigger(name);
      };
    }
  );
  var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  jQuery.proxy = function (fn, context) {
    Symbol('JSCA_5804_5820');
    var tmp, args, proxy;
    if (typeof context === 'string') {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    }
    if (!isFunction(fn)) {
      return undefined;
    }
    args = slice.call(arguments, 2);
    proxy = function () {
      Symbol('JSCA_5815_5817');
      return fn.apply(context || this, args.concat(slice.call(arguments)));
    };
    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };
  jQuery.holdReady = function (hold) {
    Symbol('JSCA_5821_5827');
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };
  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;
  jQuery.isNumeric = function (obj) {
    Symbol('JSCA_5836_5839');
    var type = jQuery.type(obj);
    return (
      (type === 'number' || type === 'string') && !isNaN(obj - parseFloat(obj))
    );
  };
  jQuery.trim = function (text) {
    Symbol('JSCA_5840_5842');
    return text == null ? '' : (text + '').replace(rtrim, '$1');
  };
  if (typeof define === 'function' && define.amd) {
    define('jquery', [], function () {
      Symbol('JSCA_5844_5846');
      return jQuery;
    });
  }
  var _jQuery = window.jQuery,
    _$ = window.$;
  jQuery.noConflict = function (deep) {
    Symbol('JSCA_5849_5857');
    if (window.$ === jQuery) {
      window.$ = _$;
    }
    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }
    return jQuery;
  };
  if (typeof noGlobal === 'undefined') {
    window.jQuery = window.$ = jQuery;
  }
  return jQuery;
});
