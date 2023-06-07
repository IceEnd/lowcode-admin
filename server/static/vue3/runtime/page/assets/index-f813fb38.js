var Q = Object.defineProperty;
var ee = (e, t, r) => t in e ? Q(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[t] = r;
var _ = (e, t, r) => (ee(e, typeof t != "symbol" ? t + "" : t, r), r);

function __vite_legacy_guard() {
  import.meta.url, import("_").catch(() => 1);
  async function* e() {}
}(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver(s => {
    for (const a of s)
      if (a.type === "childList")
        for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && i(o)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function r(s) {
    const a = {};
    return s.integrity && (a.integrity = s.integrity), s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? a.credentials = "include" : s.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
  }

  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const a = r(s);
    fetch(s.href, a)
  }
})();
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function getDefaultExportFromCjs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var eventsExports = {},
  events = {
    get exports() {
      return eventsExports
    },
    set exports(e) {
      eventsExports = e
    }
  },
  R = typeof Reflect == "object" ? Reflect : null,
  ReflectApply = R && typeof R.apply == "function" ? R.apply : function (t, r, i) {
    return Function.prototype.apply.call(t, r, i)
  },
  ReflectOwnKeys;
R && typeof R.ownKeys == "function" ? ReflectOwnKeys = R.ownKeys : Object.getOwnPropertySymbols ? ReflectOwnKeys = function (t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
} : ReflectOwnKeys = function (t) {
  return Object.getOwnPropertyNames(t)
};

function ProcessEmitWarning(e) {
  console && console.warn && console.warn(e)
}
var NumberIsNaN = Number.isNaN || function (t) {
  return t !== t
};

function EventEmitter() {
  EventEmitter.init.call(this)
}
events.exports = EventEmitter;
eventsExports.once = once;
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = void 0;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = void 0;
var defaultMaxListeners = 10;

function checkListener(e) {
  if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
}
Object.defineProperty(EventEmitter, "defaultMaxListeners", {
  enumerable: !0,
  get: function () {
    return defaultMaxListeners
  },
  set: function (e) {
    if (typeof e != "number" || e < 0 || NumberIsNaN(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    defaultMaxListeners = e
  }
});
EventEmitter.init = function () {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
EventEmitter.prototype.setMaxListeners = function (t) {
  if (typeof t != "number" || t < 0 || NumberIsNaN(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this
};

function _getMaxListeners(e) {
  return e._maxListeners === void 0 ? EventEmitter.defaultMaxListeners : e._maxListeners
}
EventEmitter.prototype.getMaxListeners = function () {
  return _getMaxListeners(this)
};
EventEmitter.prototype.emit = function (t) {
  for (var r = [], i = 1; i < arguments.length; i++) r.push(arguments[i]);
  var s = t === "error",
    a = this._events;
  if (a !== void 0) s = s && a.error === void 0;
  else if (!s) return !1;
  if (s) {
    var o;
    if (r.length > 0 && (o = r[0]), o instanceof Error) throw o;
    var u = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw u.context = o, u
  }
  var c = a[t];
  if (c === void 0) return !1;
  if (typeof c == "function") ReflectApply(c, this, r);
  else
    for (var l = c.length, g = arrayClone(c, l), i = 0; i < l; ++i) ReflectApply(g[i], this, r);
  return !0
};

function _addListener(e, t, r, i) {
  var s, a, o;
  if (checkListener(r), a = e._events, a === void 0 ? (a = e._events = Object.create(null), e._eventsCount = 0) : (a.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), a = e._events), o = a[t]), o === void 0) o = a[t] = r, ++e._eventsCount;
  else if (typeof o == "function" ? o = a[t] = i ? [r, o] : [o, r] : i ? o.unshift(r) : o.push(r), s = _getMaxListeners(e), s > 0 && o.length > s && !o.warned) {
    o.warned = !0;
    var u = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = o.length, ProcessEmitWarning(u)
  }
  return e
}
EventEmitter.prototype.addListener = function (t, r) {
  return _addListener(this, t, r, !1)
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function (t, r) {
  return _addListener(this, t, r, !0)
};

function onceWrapper() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function _onceWrap(e, t, r) {
  var i = {
      fired: !1,
      wrapFn: void 0,
      target: e,
      type: t,
      listener: r
    },
    s = onceWrapper.bind(i);
  return s.listener = r, i.wrapFn = s, s
}
EventEmitter.prototype.once = function (t, r) {
  return checkListener(r), this.on(t, _onceWrap(this, t, r)), this
};
EventEmitter.prototype.prependOnceListener = function (t, r) {
  return checkListener(r), this.prependListener(t, _onceWrap(this, t, r)), this
};
EventEmitter.prototype.removeListener = function (t, r) {
  var i, s, a, o, u;
  if (checkListener(r), s = this._events, s === void 0) return this;
  if (i = s[t], i === void 0) return this;
  if (i === r || i.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, i.listener || r));
  else if (typeof i != "function") {
    for (a = -1, o = i.length - 1; o >= 0; o--)
      if (i[o] === r || i[o].listener === r) {
        u = i[o].listener, a = o;
        break
      } if (a < 0) return this;
    a === 0 ? i.shift() : spliceOne(i, a), i.length === 1 && (s[t] = i[0]), s.removeListener !== void 0 && this.emit("removeListener", t, u || r)
  }
  return this
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function (t) {
  var r, i, s;
  if (i = this._events, i === void 0) return this;
  if (i.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : i[t] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete i[t]), this;
  if (arguments.length === 0) {
    var a = Object.keys(i),
      o;
    for (s = 0; s < a.length; ++s) o = a[s], o !== "removeListener" && this.removeAllListeners(o);
    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
  }
  if (r = i[t], typeof r == "function") this.removeListener(t, r);
  else if (r !== void 0)
    for (s = r.length - 1; s >= 0; s--) this.removeListener(t, r[s]);
  return this
};

function _listeners(e, t, r) {
  var i = e._events;
  if (i === void 0) return [];
  var s = i[t];
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? unwrapListeners(s) : arrayClone(s, s.length)
}
EventEmitter.prototype.listeners = function (t) {
  return _listeners(this, t, !0)
};
EventEmitter.prototype.rawListeners = function (t) {
  return _listeners(this, t, !1)
};
EventEmitter.listenerCount = function (e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : listenerCount.call(e, t)
};
EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(e) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[e];
    if (typeof r == "function") return 1;
    if (r !== void 0) return r.length
  }
  return 0
}
EventEmitter.prototype.eventNames = function () {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : []
};

function arrayClone(e, t) {
  for (var r = new Array(t), i = 0; i < t; ++i) r[i] = e[i];
  return r
}

function spliceOne(e, t) {
  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
  e.pop()
}

function unwrapListeners(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
  return t
}

function once(e, t) {
  return new Promise(function (r, i) {
    function s(o) {
      e.removeListener(t, a), i(o)
    }

    function a() {
      typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments))
    }
    eventTargetAgnosticAddListener(e, t, a, {
      once: !0
    }), t !== "error" && addErrorHandlerIfEventEmitter(e, s, {
      once: !0
    })
  })
}

function addErrorHandlerIfEventEmitter(e, t, r) {
  typeof e.on == "function" && eventTargetAgnosticAddListener(e, "error", t, r)
}

function eventTargetAgnosticAddListener(e, t, r, i) {
  if (typeof e.on == "function") i.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(a) {
    i.once && e.removeEventListener(t, s), r(a)
  });
  else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
const freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self,
  root = freeGlobal$1 || freeSelf || Function("return this")();
const root$1 = root;
var Symbol$1 = root$1.Symbol;
const Symbol$2 = Symbol$1;
var objectProto$9 = Object.prototype,
  hasOwnProperty$7 = objectProto$9.hasOwnProperty,
  nativeObjectToString$1 = objectProto$9.toString,
  symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;

function getRawTag(e) {
  var t = hasOwnProperty$7.call(e, symToStringTag$1),
    r = e[symToStringTag$1];
  try {
    e[symToStringTag$1] = void 0;
    var i = !0
  } catch (a) {}
  var s = nativeObjectToString$1.call(e);
  return i && (t ? e[symToStringTag$1] = r : delete e[symToStringTag$1]), s
}
var objectProto$8 = Object.prototype,
  nativeObjectToString = objectProto$8.toString;

function objectToString(e) {
  return nativeObjectToString.call(e)
}
var nullTag = "[object Null]",
  undefinedTag = "[object Undefined]",
  symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;

function baseGetTag(e) {
  return e == null ? e === void 0 ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(e) ? getRawTag(e) : objectToString(e)
}

function isObjectLike(e) {
  return e != null && typeof e == "object"
}
var symbolTag = "[object Symbol]";

function isSymbol(e) {
  return typeof e == "symbol" || isObjectLike(e) && baseGetTag(e) == symbolTag
}

function arrayMap(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length, s = Array(i); ++r < i;) s[r] = t(e[r], r, e);
  return s
}
var isArray$1 = Array.isArray;
const isArray$2 = isArray$1;
var INFINITY$1 = 1 / 0,
  symbolProto = Symbol$2 ? Symbol$2.prototype : void 0,
  symbolToString = symbolProto ? symbolProto.toString : void 0;

function baseToString(e) {
  if (typeof e == "string") return e;
  if (isArray$2(e)) return arrayMap(e, baseToString) + "";
  if (isSymbol(e)) return symbolToString ? symbolToString.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -INFINITY$1 ? "-0" : t
}

function isObject$1(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function")
}
var asyncTag = "[object AsyncFunction]",
  funcTag$1 = "[object Function]",
  genTag = "[object GeneratorFunction]",
  proxyTag = "[object Proxy]";

function isFunction$1(e) {
  if (!isObject$1(e)) return !1;
  var t = baseGetTag(e);
  return t == funcTag$1 || t == genTag || t == asyncTag || t == proxyTag
}
var coreJsData = root$1["__core-js_shared__"];
const coreJsData$1 = coreJsData;
var maskSrcKey = function () {
  var e = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : ""
}();

function isMasked(e) {
  return !!maskSrcKey && maskSrcKey in e
}
var funcProto$1 = Function.prototype,
  funcToString$1 = funcProto$1.toString;

function toSource(e) {
  if (e != null) {
    try {
      return funcToString$1.call(e)
    } catch (t) {}
    try {
      return e + ""
    } catch (t) {}
  }
  return ""
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
  reIsHostCtor = /^\[object .+?Constructor\]$/,
  funcProto = Function.prototype,
  objectProto$7 = Object.prototype,
  funcToString = funcProto.toString,
  hasOwnProperty$6 = objectProto$7.hasOwnProperty,
  reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$6).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function baseIsNative(e) {
  if (!isObject$1(e) || isMasked(e)) return !1;
  var t = isFunction$1(e) ? reIsNative : reIsHostCtor;
  return t.test(toSource(e))
}

function getValue(e, t) {
  return e == null ? void 0 : e[t]
}

function getNative(e, t) {
  var r = getValue(e, t);
  return baseIsNative(r) ? r : void 0
}
var WeakMap = getNative(root$1, "WeakMap");
const WeakMap$1 = WeakMap;
var MAX_SAFE_INTEGER$1 = 9007199254740991,
  reIsUint = /^(?:0|[1-9]\d*)$/;

function isIndex(e, t) {
  var r = typeof e;
  return t = t == null ? MAX_SAFE_INTEGER$1 : t, !!t && (r == "number" || r != "symbol" && reIsUint.test(e)) && e > -1 && e % 1 == 0 && e < t
}

function eq(e, t) {
  return e === t || e !== e && t !== t
}
var MAX_SAFE_INTEGER = 9007199254740991;

function isLength(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER
}

function isArrayLike(e) {
  return e != null && isLength(e.length) && !isFunction$1(e)
}
var objectProto$6 = Object.prototype;

function isPrototype(e) {
  var t = e && e.constructor,
    r = typeof t == "function" && t.prototype || objectProto$6;
  return e === r
}
var argsTag$1 = "[object Arguments]";

function baseIsArguments(e) {
  return isObjectLike(e) && baseGetTag(e) == argsTag$1
}
var objectProto$5 = Object.prototype,
  hasOwnProperty$5 = objectProto$5.hasOwnProperty,
  propertyIsEnumerable = objectProto$5.propertyIsEnumerable,
  isArguments = baseIsArguments(function () {
    return arguments
  }()) ? baseIsArguments : function (e) {
    return isObjectLike(e) && hasOwnProperty$5.call(e, "callee") && !propertyIsEnumerable.call(e, "callee")
  };
const isArguments$1 = isArguments;

function stubFalse() {
  return !1
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports,
  freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module,
  moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1,
  Buffer = moduleExports$1 ? root$1.Buffer : void 0,
  nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0,
  isBuffer$1 = nativeIsBuffer || stubFalse;
const isBuffer$2 = isBuffer$1;
var argsTag = "[object Arguments]",
  arrayTag = "[object Array]",
  boolTag = "[object Boolean]",
  dateTag = "[object Date]",
  errorTag = "[object Error]",
  funcTag = "[object Function]",
  mapTag$2 = "[object Map]",
  numberTag = "[object Number]",
  objectTag$1 = "[object Object]",
  regexpTag = "[object RegExp]",
  setTag$2 = "[object Set]",
  stringTag = "[object String]",
  weakMapTag$1 = "[object WeakMap]",
  arrayBufferTag = "[object ArrayBuffer]",
  dataViewTag$1 = "[object DataView]",
  float32Tag = "[object Float32Array]",
  float64Tag = "[object Float64Array]",
  int8Tag = "[object Int8Array]",
  int16Tag = "[object Int16Array]",
  int32Tag = "[object Int32Array]",
  uint8Tag = "[object Uint8Array]",
  uint8ClampedTag = "[object Uint8ClampedArray]",
  uint16Tag = "[object Uint16Array]",
  uint32Tag = "[object Uint32Array]",
  typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag$2] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = !1;

function baseIsTypedArray(e) {
  return isObjectLike(e) && isLength(e.length) && !!typedArrayTags[baseGetTag(e)]
}

function baseUnary(e) {
  return function (t) {
    return e(t)
  }
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports,
  freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module,
  moduleExports = freeModule && freeModule.exports === freeExports,
  freeProcess = moduleExports && freeGlobal$1.process,
  nodeUtil = function () {
    try {
      var e = freeModule && freeModule.require && freeModule.require("util").types;
      return e || freeProcess && freeProcess.binding && freeProcess.binding("util")
    } catch (t) {}
  }();
const nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray,
  isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
const isTypedArray$1 = isTypedArray;

function overArg(e, t) {
  return function (r) {
    return e(t(r))
  }
}
var nativeKeys = overArg(Object.keys, Object);
const nativeKeys$1 = nativeKeys;
var objectProto$4 = Object.prototype,
  hasOwnProperty$4 = objectProto$4.hasOwnProperty;

function baseKeys(e) {
  if (!isPrototype(e)) return nativeKeys$1(e);
  var t = [];
  for (var r in Object(e)) hasOwnProperty$4.call(e, r) && r != "constructor" && t.push(r);
  return t
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;

function isKey(e, t) {
  if (isArray$2(e)) return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || isSymbol(e) ? !0 : reIsPlainProp.test(e) || !reIsDeepProp.test(e) || t != null && e in Object(t)
}
var nativeCreate = getNative(Object, "create");
const nativeCreate$1 = nativeCreate;

function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {}, this.size = 0
}

function hashDelete(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__",
  objectProto$3 = Object.prototype,
  hasOwnProperty$3 = objectProto$3.hasOwnProperty;

function hashGet(e) {
  var t = this.__data__;
  if (nativeCreate$1) {
    var r = t[e];
    return r === HASH_UNDEFINED$1 ? void 0 : r
  }
  return hasOwnProperty$3.call(t, e) ? t[e] : void 0
}
var objectProto$2 = Object.prototype,
  hasOwnProperty$2 = objectProto$2.hasOwnProperty;

function hashHas(e) {
  var t = this.__data__;
  return nativeCreate$1 ? t[e] !== void 0 : hasOwnProperty$2.call(t, e)
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";

function hashSet(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = nativeCreate$1 && t === void 0 ? HASH_UNDEFINED : t, this
}

function Hash(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r;) {
    var i = e[t];
    this.set(i[0], i[1])
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype.delete = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

function listCacheClear() {
  this.__data__ = [], this.size = 0
}

function assocIndexOf(e, t) {
  for (var r = e.length; r--;)
    if (eq(e[r][0], t)) return r;
  return -1
}
var arrayProto = Array.prototype,
  splice = arrayProto.splice;

function listCacheDelete(e) {
  var t = this.__data__,
    r = assocIndexOf(t, e);
  if (r < 0) return !1;
  var i = t.length - 1;
  return r == i ? t.pop() : splice.call(t, r, 1), --this.size, !0
}

function listCacheGet(e) {
  var t = this.__data__,
    r = assocIndexOf(t, e);
  return r < 0 ? void 0 : t[r][1]
}

function listCacheHas(e) {
  return assocIndexOf(this.__data__, e) > -1
}

function listCacheSet(e, t) {
  var r = this.__data__,
    i = assocIndexOf(r, e);
  return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
}

function ListCache(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r;) {
    var i = e[t];
    this.set(i[0], i[1])
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype.delete = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root$1, "Map");
const Map$2 = Map$1;

function mapCacheClear() {
  this.size = 0, this.__data__ = {
    hash: new Hash,
    map: new(Map$2 || ListCache),
    string: new Hash
  }
}

function isKeyable(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
}

function getMapData(e, t) {
  var r = e.__data__;
  return isKeyable(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
}

function mapCacheDelete(e) {
  var t = getMapData(this, e).delete(e);
  return this.size -= t ? 1 : 0, t
}

function mapCacheGet(e) {
  return getMapData(this, e).get(e)
}

function mapCacheHas(e) {
  return getMapData(this, e).has(e)
}

function mapCacheSet(e, t) {
  var r = getMapData(this, e),
    i = r.size;
  return r.set(e, t), this.size += r.size == i ? 0 : 1, this
}

function MapCache(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r;) {
    var i = e[t];
    this.set(i[0], i[1])
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype.delete = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT = "Expected a function";

function memoize(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(FUNC_ERROR_TEXT);
  var r = function () {
    var i = arguments,
      s = t ? t.apply(this, i) : i[0],
      a = r.cache;
    if (a.has(s)) return a.get(s);
    var o = e.apply(this, i);
    return r.cache = a.set(s, o) || a, o
  };
  return r.cache = new(memoize.Cache || MapCache), r
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;

function memoizeCapped(e) {
  var t = memoize(e, function (i) {
      return r.size === MAX_MEMOIZE_SIZE && r.clear(), i
    }),
    r = t.cache;
  return t
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  reEscapeChar = /\\(\\)?/g,
  stringToPath = memoizeCapped(function (e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""), e.replace(rePropName, function (r, i, s, a) {
      t.push(s ? a.replace(reEscapeChar, "$1") : i || r)
    }), t
  });
const stringToPath$1 = stringToPath;

function toString$1(e) {
  return e == null ? "" : baseToString(e)
}

function castPath(e, t) {
  return isArray$2(e) ? e : isKey(e, t) ? [e] : stringToPath$1(toString$1(e))
}
var INFINITY = 1 / 0;

function toKey(e) {
  if (typeof e == "string" || isSymbol(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -INFINITY ? "-0" : t
}
var DataView = getNative(root$1, "DataView");
const DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
const Promise$2 = Promise$1;
var Set = getNative(root$1, "Set");
const Set$1 = Set;
var mapTag$1 = "[object Map]",
  objectTag = "[object Object]",
  promiseTag = "[object Promise]",
  setTag$1 = "[object Set]",
  weakMapTag = "[object WeakMap]",
  dataViewTag = "[object DataView]",
  dataViewCtorString = toSource(DataView$1),
  mapCtorString = toSource(Map$2),
  promiseCtorString = toSource(Promise$2),
  setCtorString = toSource(Set$1),
  weakMapCtorString = toSource(WeakMap$1),
  getTag = baseGetTag;
(DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag || Map$2 && getTag(new Map$2) != mapTag$1 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$1 && getTag(new Set$1) != setTag$1 || WeakMap$1 && getTag(new WeakMap$1) != weakMapTag) && (getTag = function (e) {
  var t = baseGetTag(e),
    r = t == objectTag ? e.constructor : void 0,
    i = r ? toSource(r) : "";
  if (i) switch (i) {
    case dataViewCtorString:
      return dataViewTag;
    case mapCtorString:
      return mapTag$1;
    case promiseCtorString:
      return promiseTag;
    case setCtorString:
      return setTag$1;
    case weakMapCtorString:
      return weakMapTag
  }
  return t
});
const getTag$1 = getTag;

function hasPath(e, t, r) {
  t = castPath(t, e);
  for (var i = -1, s = t.length, a = !1; ++i < s;) {
    var o = toKey(t[i]);
    if (!(a = e != null && r(e, o))) break;
    e = e[o]
  }
  return a || ++i != s ? a : (s = e == null ? 0 : e.length, !!s && isLength(s) && isIndex(o, s) && (isArray$2(e) || isArguments$1(e)))
}
var objectProto$1 = Object.prototype,
  hasOwnProperty$1 = objectProto$1.hasOwnProperty;

function baseHas(e, t) {
  return e != null && hasOwnProperty$1.call(e, t)
}

function has(e, t) {
  return e != null && hasPath(e, t, baseHas)
}
var mapTag = "[object Map]",
  setTag = "[object Set]",
  objectProto = Object.prototype,
  hasOwnProperty = objectProto.hasOwnProperty;

function isEmpty(e) {
  if (e == null) return !0;
  if (isArrayLike(e) && (isArray$2(e) || typeof e == "string" || typeof e.splice == "function" || isBuffer$2(e) || isTypedArray$1(e) || isArguments$1(e))) return !e.length;
  var t = getTag$1(e);
  if (t == mapTag || t == setTag) return !e.size;
  if (isPrototype(e)) return !baseKeys(e).length;
  for (var r in e)
    if (hasOwnProperty.call(e, r)) return !1;
  return !0
}
var O = (e => (e.COMP = "comp", e.CODE = "code", e))(O || {}),
  n = (e => (e.CODE = "code", e))(n || {});
class Env {
  constructor(t = globalThis.navigator.userAgent, r = {}) {
    _(this, "isIos", !1);
    _(this, "isIphone", !1);
    _(this, "isIpad", !1);
    _(this, "isAndroid", !1);
    _(this, "isAndroidPad", !1);
    _(this, "isMac", !1);
    _(this, "isWin", !1);
    _(this, "isMqq", !1);
    _(this, "isWechat", !1);
    _(this, "isWeb", !1);
    this.isIphone = t.indexOf("iPhone") >= 0, this.isIpad = /(iPad).*OS\s([\d_]+)/.test(t), this.isIos = this.isIphone || this.isIpad, this.isAndroid = t.indexOf("Android") >= 0, this.isAndroidPad = this.isAndroid && t.indexOf("Mobile") < 0, this.isMac = t.indexOf("Macintosh") >= 0, this.isWin = t.indexOf("Windows") >= 0, this.isMqq = /QQ\/([\d.]+)/.test(t), this.isWechat = t.indexOf("MicroMessenger") >= 0 && t.indexOf("wxwork") < 0, this.isWeb = !this.isIos && !this.isAndroid && !/(WebOS|BlackBerry)/.test(t), Object.entries(r).forEach(([i, s]) => {
      this[i] = s
    })
  }
}
const Env$1 = Env,
  COMMON_EVENT_PREFIX = "magic:common:events:",
  COMMON_METHOD_PREFIX = "magic:common:actions:",
  CommonMethod = {
    SHOW: "show",
    HIDE: "hide",
    SCROLL_TO_VIEW: "scrollIntoView",
    SCROLL_TO_TOP: "scrollToTop"
  },
  getCommonEventName = e => e.startsWith(COMMON_EVENT_PREFIX) ? e : `${COMMON_EVENT_PREFIX}${e}`,
  isCommonMethod = e => e.startsWith(COMMON_METHOD_PREFIX),
  getDirectComponent = (e, t) => {
    var i;
    if (!e) return !1;
    if (!e.id) return getDirectComponent(e.parentElement, t);
    const r = (i = t.page) == null ? void 0 : i.getNode(e.id);
    return r || !1
  },
  commonClickEventHandler = (e, t, r) => {
    const i = getDirectComponent(r.target, e);
    i && e.emit(getCommonEventName(t), i)
  },
  bindCommonEventListener = e => {
    e.jsEngine === "browser" && (window.document.body.addEventListener("click", t => {
      commonClickEventHandler(e, "click", t)
    }), window.document.body.addEventListener("click", t => {
      commonClickEventHandler(e, "click:capture", t)
    }, !0))
  },
  triggerCommonMethod = (e, t) => {
    var i;
    const {
      instance: r
    } = t;
    if (r) switch (e.replace(COMMON_METHOD_PREFIX, "")) {
      case CommonMethod.SHOW:
        r.show();
        break;
      case CommonMethod.HIDE:
        r.hide();
        break;
      case CommonMethod.SCROLL_TO_VIEW:
        (i = r.$el) == null || i.scrollIntoView({
          behavior: "smooth"
        });
        break;
      case CommonMethod.SCROLL_TO_TOP:
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        break
    }
  };
class Store {
  constructor() {
    _(this, "data", {})
  }
  set(t, r) {
    this.data[t] = r
  }
  get(t) {
    return this.data[t]
  }
}
class Node extends eventsExports.EventEmitter {
  constructor(r) {
    super();
    _(this, "data");
    _(this, "style");
    _(this, "events");
    _(this, "instance");
    _(this, "page");
    _(this, "parent");
    _(this, "app");
    _(this, "store", new Store);
    this.page = r.page, this.parent = r.parent, this.app = r.app;
    const {
      events: i
    } = r.config;
    this.data = r.config, this.events = i || [], this.listenLifeSafe(), this.once("destroy", () => {
      this.instance = null, typeof this.data.destroy == "function" && this.data.destroy(this), this.listenLifeSafe()
    })
  }
  setData(r) {
    this.data = r, this.emit("updata-data")
  }
  destroy() {
    this.removeAllListeners()
  }
  listenLifeSafe() {
    this.once("created", async r => {
      this.instance = r, await this.runCodeBlock("created")
    }), this.once("mounted", async r => {
      this.instance = r;
      const i = this.app.eventQueueMap[r.config.id] || [];
      for (let s = i.shift(); s; s = i.shift()) this.app.compActionHandler(s.eventConfig, s.fromCpt, s.args);
      await this.runCodeBlock("mounted")
    })
  }
  async runCodeBlock(r) {
    var i, s;
    if (typeof this.data[r] == "function") {
      await this.data[r](this);
      return
    }
    if (!(((i = this.data[r]) == null ? void 0 : i.hookType) !== n.CODE || isEmpty(this.app.codeDsl)))
      for (const a of this.data[r].hookData) {
        const {
          codeId: o,
          params: u = {}
        } = a;
        this.app.codeDsl[o] && typeof ((s = this.app.codeDsl[o]) == null ? void 0 : s.content) == "function" && await this.app.codeDsl[o].content({
          app: this.app,
          params: u
        })
      }
  }
}
const Node$1 = Node;
class Page extends Node$1 {
  constructor(r) {
    super(r);
    _(this, "nodes", new Map);
    this.setNode(r.config.id, this), this.initNode(r.config, this)
  }
  initNode(r, i) {
    var a;
    const s = new Node$1({
      config: r,
      parent: i,
      page: this,
      app: this.app
    });
    this.setNode(r.id, s), (a = r.items) == null || a.forEach(o => {
      this.initNode(o, s)
    })
  }
  getNode(r) {
    return this.nodes.get(r)
  }
  setNode(r, i) {
    this.nodes.set(r, i)
  }
  deleteNode(r) {
    this.nodes.delete(r)
  }
  destroy() {
    super.destroy(), this.nodes.clear()
  }
}
const Page$1 = Page,
  style2Obj = e => {
    if (typeof e != "string") return e;
    const t = {};
    return e.split(";").forEach(r => {
      if (!r) return;
      const i = r.split(":");
      let s = i.shift(),
        a = i.join(":");
      s && (s = s.replace(/^\s*/, "").replace(/\s*$/, ""), a = a.replace(/^\s*/, "").replace(/\s*$/, ""), s = s.split("-").map((o, u) => u > 0 ? `${o[0].toUpperCase()}${o.substr(1)}` : o).join(""), t[s] = a)
    }), t
  },
  fillBackgroundImage = e => e && !/^url/.test(e) && !/^linear-gradient/.test(e) ? `url(${e})` : e,
  isNumber$1 = e => /^(-?\d+)(\.\d+)?$/.test(e);
class App extends eventsExports.EventEmitter {
  constructor(r) {
    var i;
    super();
    _(this, "env", new Env$1);
    _(this, "dsl");
    _(this, "codeDsl");
    _(this, "page");
    _(this, "platform", "mobile");
    _(this, "jsEngine", "browser");
    _(this, "designWidth", 375);
    _(this, "components", new Map);
    _(this, "eventQueueMap", {});
    _(this, "eventList", {});
    if (this.setEnv(r.ua), this.codeDsl = (i = r.config) == null ? void 0 : i.codeBlocks, r.platform && (this.platform = r.platform), r.jsEngine && (this.jsEngine = r.jsEngine), typeof r.designWidth < "u" && this.setDesignWidth(r.designWidth), r.transformStyle && (this.transformStyle = r.transformStyle), r.config) {
      let s = r.curPage;
      !s && r.config.items.length && (s = r.config.items[0].id), this.setConfig(r.config, s)
    }
    bindCommonEventListener(this)
  }
  setEnv(r) {
    this.env = new Env$1(r)
  }
  setDesignWidth(r) {
    this.designWidth = r, this.jsEngine === "browser" && (this.calcFontsize(), globalThis.removeEventListener("resize", this.calcFontsize), globalThis.addEventListener("resize", this.calcFontsize))
  }
  transformStyle(r) {
    if (!r) return {};
    let i = {};
    const s = {};
    typeof r == "string" ? i = style2Obj(r) : i = {
      ...r
    };
    const a = this.jsEngine === "hippy",
      o = ["zIndex", "opacity", "fontWeight"];
    return Object.entries(i).forEach(([u, c]) => {
      u === "scale" && !s.transform && a ? s.transform = [{
        scale: c
      }] : u === "backgroundImage" && !a ? c && (s[u] = fillBackgroundImage(c)) : u === "transform" && typeof c != "string" ? s[u] = this.getTransform(c) : !o.includes(u) && c && /^[-]?[0-9]*[.]?[0-9]*$/.test(c) ? s[u] = a ? c : `${c/100}rem` : s[u] = c
    }), s
  }
  setConfig(r, i) {
    var s, a;
    this.dsl = r, this.codeDsl = r.codeBlocks, this.setPage(i || ((a = (s = this.page) == null ? void 0 : s.data) == null ? void 0 : a.id))
  }
  addPage() {
    console.info("addPage 已经弃用")
  }
  setPage(r) {
    var s, a;
    const i = (s = this.dsl) == null ? void 0 : s.items.find(o => o.id === r);
    if (!i) {
      this.page && (this.page.destroy(), this.page = void 0), super.emit("page-change");
      return
    }
    i !== ((a = this.page) == null ? void 0 : a.data) && (this.page && this.page.destroy(), this.page = new Page$1({
      config: i,
      app: this
    }), super.emit("page-change", this.page), this.platform !== "magic" && this.bindEvents())
  }
  deletePage() {
    this.page = void 0
  }
  getPage(r) {
    var i;
    if (!r) return this.page;
    if (((i = this.page) == null ? void 0 : i.data.id) === r) return this.page
  }
  registerComponent(r, i) {
    this.components.set(r, i)
  }
  unregisterComponent(r) {
    this.components.delete(r)
  }
  resolveComponent(r) {
    return this.components.get(r)
  }
  bindEvents() {
    var r;
    if (Object.entries(this.eventList).forEach(([i, s]) => {
        this.off(i, s)
      }), this.eventList = {}, !!this.page)
      for (const [, i] of this.page.nodes)(r = i.events) == null || r.forEach(s => {
        const a = `${s.name}_${i.data.id}`,
          o = (u, ...c) => {
            this.eventHandler(s, u, c)
          };
        this.eventList[a] = o, this.on(a, o)
      })
  }
  emit(r, i, ...s) {
    var a;
    return (a = i == null ? void 0 : i.data) != null && a.id ? super.emit(`${String(r)}_${i.data.id}`, i, ...s) : super.emit(r, i, ...s)
  }
  async eventHandler(r, i, s) {
    if (has(r, "actions")) {
      const {
        actions: a
      } = r;
      for (const o of a) o.actionType === O.COMP ? await this.compActionHandler(o, i, s) : o.actionType === O.CODE && await this.codeActionHandler(o)
    } else await this.compActionHandler(r, i, s)
  }
  async codeActionHandler(r) {
    var a;
    const {
      codeId: i = "",
      params: s = {}
    } = r;
    !i || isEmpty(this.codeDsl) || this.codeDsl[i] && typeof ((a = this.codeDsl[i]) == null ? void 0 : a.content) == "function" && await this.codeDsl[i].content({
      app: this,
      params: s
    })
  }
  async compActionHandler(r, i, s) {
    if (!this.page) throw new Error("当前没有页面");
    const {
      method: a,
      to: o
    } = r, u = this.page.getNode(o);
    if (!u) throw `ID为${o}的组件不存在`;
    if (isCommonMethod(a)) return triggerCommonMethod(a, u);
    u.instance ? typeof u.instance[a] == "function" && await u.instance[a](i, ...s) : this.addEventToMap({
      eventConfig: r,
      fromCpt: i,
      args: s
    })
  }
  destroy() {
    this.removeAllListeners(), this.page = void 0, this.jsEngine === "browser" && globalThis.removeEventListener("resize", this.calcFontsize)
  }
  addEventToMap(r) {
    this.eventQueueMap[r.eventConfig.to] ? this.eventQueueMap[r.eventConfig.to].push(r) : this.eventQueueMap[r.eventConfig.to] = [r]
  }
  getTransform(r) {
    if (!r) return [];
    const i = Object.entries(r).map(([a, o]) => o.trim() ? (a === "rotate" && isNumber$1(o) && (o = `${o}deg`), this.jsEngine !== "hippy" ? `${a}(${o})` : {
      [a]: o
    }) : "");
    if (this.jsEngine === "hippy") return i;
    const s = i.join(" ");
    return s.trim() ? s : "none"
  }
  calcFontsize() {
    const {
      width: r
    } = document.documentElement.getBoundingClientRect(), i = r / (this.designWidth / 100);
    document.documentElement.style.fontSize = `${i}px`
  }
}
const App$1 = App;
var dayjs_minExports = {},
  dayjs_min = {
    get exports() {
      return dayjs_minExports
    },
    set exports(e) {
      dayjs_minExports = e
    }
  };
(function (e, t) {
  (function (r, i) {
    e.exports = i()
  })(commonjsGlobal, function () {
    var r = 1e3,
      i = 6e4,
      s = 36e5,
      a = "millisecond",
      o = "second",
      u = "minute",
      c = "hour",
      l = "day",
      g = "week",
      f = "month",
      M = "quarter",
      w = "year",
      P = "date",
      m = "Invalid Date",
      L = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      q = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      I = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      },
      j = function ($, p, d) {
        var y = String($);
        return !y || y.length >= p ? $ : "" + Array(p + 1 - y.length).join(d) + $
      },
      v = {
        s: j,
        z: function ($) {
          var p = -$.utcOffset(),
            d = Math.abs(p),
            y = Math.floor(d / 60),
            h = d % 60;
          return (p <= 0 ? "+" : "-") + j(y, 2, "0") + ":" + j(h, 2, "0")
        },
        m: function $(p, d) {
          if (p.date() < d.date()) return -$(d, p);
          var y = 12 * (d.year() - p.year()) + (d.month() - p.month()),
            h = p.clone().add(y, f),
            E = d - h < 0,
            b = p.clone().add(y + (E ? -1 : 1), f);
          return +(-(y + (d - h) / (E ? h - b : b - h)) || 0)
        },
        a: function ($) {
          return $ < 0 ? Math.ceil($) || 0 : Math.floor($)
        },
        p: function ($) {
          return {
            M: f,
            y: w,
            w: g,
            d: l,
            D: P,
            h: c,
            m: u,
            s: o,
            ms: a,
            Q: M
          } [$] || String($ || "").toLowerCase().replace(/s$/, "")
        },
        u: function ($) {
          return $ === void 0
        }
      },
      H = "en",
      U = {};
    U[H] = I;
    var k = function ($) {
        return $ instanceof F
      },
      W = function $(p, d, y) {
        var h;
        if (!p) return H;
        if (typeof p == "string") {
          var E = p.toLowerCase();
          U[E] && (h = E), d && (U[E] = d, h = E);
          var b = p.split("-");
          if (!h && b.length > 1) return $(b[0])
        } else {
          var C = p.name;
          U[C] = p, h = C
        }
        return !y && h && (H = h), h || !y && H
      },
      S = function ($, p) {
        if (k($)) return $.clone();
        var d = typeof p == "object" ? p : {};
        return d.date = $, d.args = arguments, new F(d)
      },
      T = v;
    T.l = W, T.i = k, T.w = function ($, p) {
      return S($, {
        locale: p.$L,
        utc: p.$u,
        x: p.$x,
        $offset: p.$offset
      })
    };
    var F = function () {
        function $(d) {
          this.$L = W(d.locale, null, !0), this.parse(d)
        }
        var p = $.prototype;
        return p.parse = function (d) {
          this.$d = function (y) {
            var h = y.date,
              E = y.utc;
            if (h === null) return new Date(NaN);
            if (T.u(h)) return new Date;
            if (h instanceof Date) return new Date(h);
            if (typeof h == "string" && !/Z$/i.test(h)) {
              var b = h.match(L);
              if (b) {
                var C = b[2] - 1 || 0,
                  x = (b[7] || "0").substring(0, 3);
                return E ? new Date(Date.UTC(b[1], C, b[3] || 1, b[4] || 0, b[5] || 0, b[6] || 0, x)) : new Date(b[1], C, b[3] || 1, b[4] || 0, b[5] || 0, b[6] || 0, x)
              }
            }
            return new Date(h)
          }(d), this.$x = d.x || {}, this.init()
        }, p.init = function () {
          var d = this.$d;
          this.$y = d.getFullYear(), this.$M = d.getMonth(), this.$D = d.getDate(), this.$W = d.getDay(), this.$H = d.getHours(), this.$m = d.getMinutes(), this.$s = d.getSeconds(), this.$ms = d.getMilliseconds()
        }, p.$utils = function () {
          return T
        }, p.isValid = function () {
          return this.$d.toString() !== m
        }, p.isSame = function (d, y) {
          var h = S(d);
          return this.startOf(y) <= h && h <= this.endOf(y)
        }, p.isAfter = function (d, y) {
          return S(d) < this.startOf(y)
        }, p.isBefore = function (d, y) {
          return this.endOf(y) < S(d)
        }, p.$g = function (d, y, h) {
          return T.u(d) ? this[y] : this.set(h, d)
        }, p.unix = function () {
          return Math.floor(this.valueOf() / 1e3)
        }, p.valueOf = function () {
          return this.$d.getTime()
        }, p.startOf = function (d, y) {
          var h = this,
            E = !!T.u(y) || y,
            b = T.p(d),
            C = function (G, N) {
              var X = T.w(h.$u ? Date.UTC(h.$y, N, G) : new Date(h.$y, N, G), h);
              return E ? X : X.endOf(l)
            },
            x = function (G, N) {
              return T.w(h.toDate()[G].apply(h.toDate("s"), (E ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(N)), h)
            },
            A = this.$W,
            D = this.$M,
            z = this.$D,
            V = "set" + (this.$u ? "UTC" : "");
          switch (b) {
            case w:
              return E ? C(1, 0) : C(31, 11);
            case f:
              return E ? C(1, D) : C(0, D + 1);
            case g:
              var Y = this.$locale().weekStart || 0,
                J = (A < Y ? A + 7 : A) - Y;
              return C(E ? z - J : z + (6 - J), D);
            case l:
            case P:
              return x(V + "Hours", 0);
            case c:
              return x(V + "Minutes", 1);
            case u:
              return x(V + "Seconds", 2);
            case o:
              return x(V + "Milliseconds", 3);
            default:
              return this.clone()
          }
        }, p.endOf = function (d) {
          return this.startOf(d, !1)
        }, p.$set = function (d, y) {
          var h, E = T.p(d),
            b = "set" + (this.$u ? "UTC" : ""),
            C = (h = {}, h[l] = b + "Date", h[P] = b + "Date", h[f] = b + "Month", h[w] = b + "FullYear", h[c] = b + "Hours", h[u] = b + "Minutes", h[o] = b + "Seconds", h[a] = b + "Milliseconds", h)[E],
            x = E === l ? this.$D + (y - this.$W) : y;
          if (E === f || E === w) {
            var A = this.clone().set(P, 1);
            A.$d[C](x), A.init(), this.$d = A.set(P, Math.min(this.$D, A.daysInMonth())).$d
          } else C && this.$d[C](x);
          return this.init(), this
        }, p.set = function (d, y) {
          return this.clone().$set(d, y)
        }, p.get = function (d) {
          return this[T.p(d)]()
        }, p.add = function (d, y) {
          var h, E = this;
          d = Number(d);
          var b = T.p(y),
            C = function (D) {
              var z = S(E);
              return T.w(z.date(z.date() + Math.round(D * d)), E)
            };
          if (b === f) return this.set(f, this.$M + d);
          if (b === w) return this.set(w, this.$y + d);
          if (b === l) return C(1);
          if (b === g) return C(7);
          var x = (h = {}, h[u] = i, h[c] = s, h[o] = r, h)[b] || 1,
            A = this.$d.getTime() + d * x;
          return T.w(A, this)
        }, p.subtract = function (d, y) {
          return this.add(-1 * d, y)
        }, p.format = function (d) {
          var y = this,
            h = this.$locale();
          if (!this.isValid()) return h.invalidDate || m;
          var E = d || "YYYY-MM-DDTHH:mm:ssZ",
            b = T.z(this),
            C = this.$H,
            x = this.$m,
            A = this.$M,
            D = h.weekdays,
            z = h.months,
            V = function (N, X, Z, K) {
              return N && (N[X] || N(y, E)) || Z[X].slice(0, K)
            },
            Y = function (N) {
              return T.s(C % 12 || 12, N, "0")
            },
            J = h.meridiem || function (N, X, Z) {
              var K = N < 12 ? "AM" : "PM";
              return Z ? K.toLowerCase() : K
            },
            G = {
              YY: String(this.$y).slice(-2),
              YYYY: this.$y,
              M: A + 1,
              MM: T.s(A + 1, 2, "0"),
              MMM: V(h.monthsShort, A, z, 3),
              MMMM: V(z, A),
              D: this.$D,
              DD: T.s(this.$D, 2, "0"),
              d: String(this.$W),
              dd: V(h.weekdaysMin, this.$W, D, 2),
              ddd: V(h.weekdaysShort, this.$W, D, 3),
              dddd: D[this.$W],
              H: String(C),
              HH: T.s(C, 2, "0"),
              h: Y(1),
              hh: Y(2),
              a: J(C, x, !0),
              A: J(C, x, !1),
              m: String(x),
              mm: T.s(x, 2, "0"),
              s: String(this.$s),
              ss: T.s(this.$s, 2, "0"),
              SSS: T.s(this.$ms, 3, "0"),
              Z: b
            };
          return E.replace(q, function (N, X) {
            return X || G[N] || b.replace(":", "")
          })
        }, p.utcOffset = function () {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
        }, p.diff = function (d, y, h) {
          var E, b = T.p(y),
            C = S(d),
            x = (C.utcOffset() - this.utcOffset()) * i,
            A = this - C,
            D = T.m(this, C);
          return D = (E = {}, E[w] = D / 12, E[f] = D, E[M] = D / 3, E[g] = (A - x) / 6048e5, E[l] = (A - x) / 864e5, E[c] = A / s, E[u] = A / i, E[o] = A / r, E)[b] || A, h ? D : T.a(D)
        }, p.daysInMonth = function () {
          return this.endOf(f).$D
        }, p.$locale = function () {
          return U[this.$L]
        }, p.locale = function (d, y) {
          if (!d) return this.$L;
          var h = this.clone(),
            E = W(d, y, !0);
          return E && (h.$L = E), h
        }, p.clone = function () {
          return T.w(this.$d, this)
        }, p.toDate = function () {
          return new Date(this.valueOf())
        }, p.toJSON = function () {
          return this.isValid() ? this.toISOString() : null
        }, p.toISOString = function () {
          return this.$d.toISOString()
        }, p.toString = function () {
          return this.$d.toUTCString()
        }, $
      }(),
      B = F.prototype;
    return S.prototype = B, [
      ["$ms", a],
      ["$s", o],
      ["$m", u],
      ["$H", c],
      ["$W", l],
      ["$M", f],
      ["$y", w],
      ["$D", P]
    ].forEach(function ($) {
      B[$[1]] = function (p) {
        return this.$g(p, $[0], $[1])
      }
    }), S.extend = function ($, p) {
      return $.$i || ($(p, F, S), $.$i = !0), S
    }, S.locale = W, S.isDayjs = k, S.unix = function ($) {
      return S(1e3 * $)
    }, S.en = U[H], S.Ls = U, S.p = {}, S
  })
})(dayjs_min);
const dayjs = dayjs_minExports;
var utcExports = {},
  utc$1 = {
    get exports() {
      return utcExports
    },
    set exports(e) {
      utcExports = e
    }
  };
(function (e, t) {
  (function (r, i) {
    e.exports = i()
  })(commonjsGlobal, function () {
    var r = "minute",
      i = /[+-]\d\d(?::?\d\d)?/g,
      s = /([+-]|\d\d)/g;
    return function (a, o, u) {
      var c = o.prototype;
      u.utc = function (m) {
        var L = {
          date: m,
          utc: !0,
          args: arguments
        };
        return new o(L)
      }, c.utc = function (m) {
        var L = u(this.toDate(), {
          locale: this.$L,
          utc: !0
        });
        return m ? L.add(this.utcOffset(), r) : L
      }, c.local = function () {
        return u(this.toDate(), {
          locale: this.$L,
          utc: !1
        })
      };
      var l = c.parse;
      c.parse = function (m) {
        m.utc && (this.$u = !0), this.$utils().u(m.$offset) || (this.$offset = m.$offset), l.call(this, m)
      };
      var g = c.init;
      c.init = function () {
        if (this.$u) {
          var m = this.$d;
          this.$y = m.getUTCFullYear(), this.$M = m.getUTCMonth(), this.$D = m.getUTCDate(), this.$W = m.getUTCDay(), this.$H = m.getUTCHours(), this.$m = m.getUTCMinutes(), this.$s = m.getUTCSeconds(), this.$ms = m.getUTCMilliseconds()
        } else g.call(this)
      };
      var f = c.utcOffset;
      c.utcOffset = function (m, L) {
        var q = this.$utils().u;
        if (q(m)) return this.$u ? 0 : q(this.$offset) ? f.call(this) : this.$offset;
        if (typeof m == "string" && (m = function (H) {
            H === void 0 && (H = "");
            var U = H.match(i);
            if (!U) return null;
            var k = ("" + U[0]).match(s) || ["-", 0, 0],
              W = k[0],
              S = 60 * +k[1] + +k[2];
            return S === 0 ? 0 : W === "+" ? S : -S
          }(m), m === null)) return this;
        var I = Math.abs(m) <= 16 ? 60 * m : m,
          j = this;
        if (L) return j.$offset = I, j.$u = m === 0, j;
        if (m !== 0) {
          var v = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (j = this.local().add(I + v, r)).$offset = I, j.$x.$localOffset = v
        } else j = this.utc();
        return j
      };
      var M = c.format;
      c.format = function (m) {
        var L = m || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return M.call(this, L)
      }, c.valueOf = function () {
        var m = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * m
      }, c.isUTC = function () {
        return !!this.$u
      }, c.toISOString = function () {
        return this.toDate().toISOString()
      }, c.toString = function () {
        return this.toDate().toUTCString()
      };
      var w = c.toDate;
      c.toDate = function (m) {
        return m === "s" && this.$offset ? u(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : w.call(this)
      };
      var P = c.diff;
      c.diff = function (m, L, q) {
        if (m && this.$u === m.$u) return P.call(this, m, L, q);
        var I = this.local(),
          j = u(m).local();
        return P.call(I, j, L, q)
      }
    }
  })
})(utc$1);
const utc = utcExports;
dayjs.extend(utc);
const toLine = (e = "") => e.replace(/\B([A-Z])/g, "-$1").toLowerCase(),
  filterXSS = e => e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;"),
  getUrlParam = (e, t) => {
    const r = t || location.href,
      i = new RegExp(`[?&#]${e}=([^&#]+)`, "gi"),
      s = r.match(i);
    let a;
    return s && s.length > 0 ? (a = s[s.length - 1].split("="), a && a.length > 1 ? filterXSS(a[1]) : "") : ""
  },
  scriptRel = "modulepreload",
  assetsURL = function (e) {
    return "/static/vue3/runtime/page/" + e
  },
  seen = {},
  __vitePreload = function (t, r, i) {
    if (!r || r.length === 0) return t();
    const s = document.getElementsByTagName("link");
    return Promise.all(r.map(a => {
      if (a = assetsURL(a), a in seen) return;
      seen[a] = !0;
      const o = a.endsWith(".css"),
        u = o ? '[rel="stylesheet"]' : "";
      if (!!i)
        for (let g = s.length - 1; g >= 0; g--) {
          const f = s[g];
          if (f.href === a && (!o || f.rel === "stylesheet")) return
        } else if (document.querySelector(`link[href="${a}"]${u}`)) return;
      const l = document.createElement("link");
      if (l.rel = o ? "stylesheet" : scriptRel, o || (l.as = "script", l.crossOrigin = ""), l.href = a, document.head.appendChild(l), o) return new Promise((g, f) => {
        l.addEventListener("load", g), l.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${a}`)))
      })
    })).then(() => t())
  },
  components = {
    page: () => __vitePreload(() => import("./index-0c5436c4.js"), ["assets/index-0c5436c4.js", "assets/Component.vue_vue_type_script_setup_true_lang-0e76b8a1.js", "assets/useApp-d5521bba.js"]),
    container: () => __vitePreload(() => import("./Container-21fbad51.js"), ["assets/Container-21fbad51.js", "assets/Component.vue_vue_type_script_setup_true_lang-0e76b8a1.js", "assets/useApp-d5521bba.js"]),
    button: () => __vitePreload(() => import("./index-4ba9da9c.js"), ["assets/index-4ba9da9c.js", "assets/useApp-d5521bba.js"]),
    text: () => __vitePreload(() => import("./index-8ea278dd.js"), ["assets/index-8ea278dd.js", "assets/useApp-d5521bba.js"]),
    img: () => __vitePreload(() => import("./index-3c55a1bc.js"), ["assets/index-3c55a1bc.js", "assets/useApp-d5521bba.js"]),
    qrcode: () => __vitePreload(() => import("./index-6562d576.js"), ["assets/index-6562d576.js", "assets/useApp-d5521bba.js"]),
    overlay: () => __vitePreload(() => import("./index-c5744ab4.js"), ["assets/index-c5744ab4.js", "assets/useApp-d5521bba.js"])
  },
  plugins = {};
var axiosExports$1 = {},
  axios$3 = {
    get exports() {
      return axiosExports$1
    },
    set exports(e) {
      axiosExports$1 = e
    }
  },
  axiosExports = {},
  axios$2 = {
    get exports() {
      return axiosExports
    },
    set exports(e) {
      axiosExports = e
    }
  },
  bind$2 = function (t, r) {
    return function () {
      for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
      return t.apply(r, s)
    }
  },
  bind$1 = bind$2,
  toString = Object.prototype.toString;

function isArray(e) {
  return Array.isArray(e)
}

function isUndefined(e) {
  return typeof e > "u"
}

function isBuffer(e) {
  return e !== null && !isUndefined(e) && e.constructor !== null && !isUndefined(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
}

function isArrayBuffer(e) {
  return toString.call(e) === "[object ArrayBuffer]"
}

function isFormData(e) {
  return toString.call(e) === "[object FormData]"
}

function isArrayBufferView(e) {
  var t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && isArrayBuffer(e.buffer), t
}

function isString(e) {
  return typeof e == "string"
}

function isNumber(e) {
  return typeof e == "number"
}

function isObject(e) {
  return e !== null && typeof e == "object"
}

function isPlainObject(e) {
  if (toString.call(e) !== "[object Object]") return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype
}

function isDate(e) {
  return toString.call(e) === "[object Date]"
}

function isFile(e) {
  return toString.call(e) === "[object File]"
}

function isBlob(e) {
  return toString.call(e) === "[object Blob]"
}

function isFunction(e) {
  return toString.call(e) === "[object Function]"
}

function isStream(e) {
  return isObject(e) && isFunction(e.pipe)
}

function isURLSearchParams(e) {
  return toString.call(e) === "[object URLSearchParams]"
}

function trim(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
}

function isStandardBrowserEnv() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}

function forEach(e, t) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), isArray(e))
      for (var r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
    else
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e)
}

function merge() {
  var e = {};

  function t(s, a) {
    isPlainObject(e[a]) && isPlainObject(s) ? e[a] = merge(e[a], s) : isPlainObject(s) ? e[a] = merge({}, s) : isArray(s) ? e[a] = s.slice() : e[a] = s
  }
  for (var r = 0, i = arguments.length; r < i; r++) forEach(arguments[r], t);
  return e
}

function extend(e, t, r) {
  return forEach(t, function (s, a) {
    r && typeof s == "function" ? e[a] = bind$1(s, r) : e[a] = s
  }), e
}

function stripBOM(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e
}
var utils$8 = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isFunction,
    isStream,
    isURLSearchParams,
    isStandardBrowserEnv,
    forEach,
    merge,
    extend,
    trim,
    stripBOM
  },
  utils$7 = utils$8;

function encode(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
var buildURL$1 = function (t, r, i) {
    if (!r) return t;
    var s;
    if (i) s = i(r);
    else if (utils$7.isURLSearchParams(r)) s = r.toString();
    else {
      var a = [];
      utils$7.forEach(r, function (c, l) {
        c === null || typeof c > "u" || (utils$7.isArray(c) ? l = l + "[]" : c = [c], utils$7.forEach(c, function (f) {
          utils$7.isDate(f) ? f = f.toISOString() : utils$7.isObject(f) && (f = JSON.stringify(f)), a.push(encode(l) + "=" + encode(f))
        }))
      }), s = a.join("&")
    }
    if (s) {
      var o = t.indexOf("#");
      o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + s
    }
    return t
  },
  utils$6 = utils$8;

function InterceptorManager$1() {
  this.handlers = []
}
InterceptorManager$1.prototype.use = function (t, r, i) {
  return this.handlers.push({
    fulfilled: t,
    rejected: r,
    synchronous: i ? i.synchronous : !1,
    runWhen: i ? i.runWhen : null
  }), this.handlers.length - 1
};
InterceptorManager$1.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null)
};
InterceptorManager$1.prototype.forEach = function (t) {
  utils$6.forEach(this.handlers, function (i) {
    i !== null && t(i)
  })
};
var InterceptorManager_1 = InterceptorManager$1,
  utils$5 = utils$8,
  normalizeHeaderName = function (t, r) {
    utils$5.forEach(t, function (s, a) {
      a !== r && a.toUpperCase() === r.toUpperCase() && (t[r] = s, delete t[a])
    })
  },
  enhanceError = function (t, r, i, s, a) {
    return t.config = r, i && (t.code = i), t.request = s, t.response = a, t.isAxiosError = !0, t.toJSON = function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      }
    }, t
  },
  createError, hasRequiredCreateError;

function requireCreateError() {
  if (hasRequiredCreateError) return createError;
  hasRequiredCreateError = 1;
  var e = enhanceError;
  return createError = function (r, i, s, a, o) {
    var u = new Error(r);
    return e(u, i, s, a, o)
  }, createError
}
var settle, hasRequiredSettle;

function requireSettle() {
  if (hasRequiredSettle) return settle;
  hasRequiredSettle = 1;
  var e = requireCreateError();
  return settle = function (r, i, s) {
    var a = s.config.validateStatus;
    !s.status || !a || a(s.status) ? r(s) : i(e("Request failed with status code " + s.status, s.config, null, s.request, s))
  }, settle
}
var cookies, hasRequiredCookies;

function requireCookies() {
  if (hasRequiredCookies) return cookies;
  hasRequiredCookies = 1;
  var e = utils$8;
  return cookies = e.isStandardBrowserEnv() ? function () {
    return {
      write: function (i, s, a, o, u, c) {
        var l = [];
        l.push(i + "=" + encodeURIComponent(s)), e.isNumber(a) && l.push("expires=" + new Date(a).toGMTString()), e.isString(o) && l.push("path=" + o), e.isString(u) && l.push("domain=" + u), c === !0 && l.push("secure"), document.cookie = l.join("; ")
      },
      read: function (i) {
        var s = document.cookie.match(new RegExp("(^|;\\s*)(" + i + ")=([^;]*)"));
        return s ? decodeURIComponent(s[3]) : null
      },
      remove: function (i) {
        this.write(i, "", Date.now() - 864e5)
      }
    }
  }() : function () {
    return {
      write: function () {},
      read: function () {
        return null
      },
      remove: function () {}
    }
  }(), cookies
}
var isAbsoluteURL, hasRequiredIsAbsoluteURL;

function requireIsAbsoluteURL() {
  return hasRequiredIsAbsoluteURL || (hasRequiredIsAbsoluteURL = 1, isAbsoluteURL = function (t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
  }), isAbsoluteURL
}
var combineURLs, hasRequiredCombineURLs;

function requireCombineURLs() {
  return hasRequiredCombineURLs || (hasRequiredCombineURLs = 1, combineURLs = function (t, r) {
    return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t
  }), combineURLs
}
var buildFullPath, hasRequiredBuildFullPath;

function requireBuildFullPath() {
  if (hasRequiredBuildFullPath) return buildFullPath;
  hasRequiredBuildFullPath = 1;
  var e = requireIsAbsoluteURL(),
    t = requireCombineURLs();
  return buildFullPath = function (i, s) {
    return i && !e(s) ? t(i, s) : s
  }, buildFullPath
}
var parseHeaders, hasRequiredParseHeaders;

function requireParseHeaders() {
  if (hasRequiredParseHeaders) return parseHeaders;
  hasRequiredParseHeaders = 1;
  var e = utils$8,
    t = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
  return parseHeaders = function (i) {
    var s = {},
      a, o, u;
    return i && e.forEach(i.split(`
`), function (l) {
      if (u = l.indexOf(":"), a = e.trim(l.substr(0, u)).toLowerCase(), o = e.trim(l.substr(u + 1)), a) {
        if (s[a] && t.indexOf(a) >= 0) return;
        a === "set-cookie" ? s[a] = (s[a] ? s[a] : []).concat([o]) : s[a] = s[a] ? s[a] + ", " + o : o
      }
    }), s
  }, parseHeaders
}
var isURLSameOrigin, hasRequiredIsURLSameOrigin;

function requireIsURLSameOrigin() {
  if (hasRequiredIsURLSameOrigin) return isURLSameOrigin;
  hasRequiredIsURLSameOrigin = 1;
  var e = utils$8;
  return isURLSameOrigin = e.isStandardBrowserEnv() ? function () {
    var r = /(msie|trident)/i.test(navigator.userAgent),
      i = document.createElement("a"),
      s;

    function a(o) {
      var u = o;
      return r && (i.setAttribute("href", u), u = i.href), i.setAttribute("href", u), {
        href: i.href,
        protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
        host: i.host,
        search: i.search ? i.search.replace(/^\?/, "") : "",
        hash: i.hash ? i.hash.replace(/^#/, "") : "",
        hostname: i.hostname,
        port: i.port,
        pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
      }
    }
    return s = a(window.location.href),
      function (u) {
        var c = e.isString(u) ? a(u) : u;
        return c.protocol === s.protocol && c.host === s.host
      }
  }() : function () {
    return function () {
      return !0
    }
  }(), isURLSameOrigin
}
var Cancel_1, hasRequiredCancel;

function requireCancel() {
  if (hasRequiredCancel) return Cancel_1;
  hasRequiredCancel = 1;

  function e(t) {
    this.message = t
  }
  return e.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "")
  }, e.prototype.__CANCEL__ = !0, Cancel_1 = e, Cancel_1
}
var xhr, hasRequiredXhr;

function requireXhr() {
  if (hasRequiredXhr) return xhr;
  hasRequiredXhr = 1;
  var e = utils$8,
    t = requireSettle(),
    r = requireCookies(),
    i = buildURL$1,
    s = requireBuildFullPath(),
    a = requireParseHeaders(),
    o = requireIsURLSameOrigin(),
    u = requireCreateError(),
    c = requireDefaults(),
    l = requireCancel();
  return xhr = function (f) {
    return new Promise(function (w, P) {
      var m = f.data,
        L = f.headers,
        q = f.responseType,
        I;

      function j() {
        f.cancelToken && f.cancelToken.unsubscribe(I), f.signal && f.signal.removeEventListener("abort", I)
      }
      e.isFormData(m) && delete L["Content-Type"];
      var v = new XMLHttpRequest;
      if (f.auth) {
        var H = f.auth.username || "",
          U = f.auth.password ? unescape(encodeURIComponent(f.auth.password)) : "";
        L.Authorization = "Basic " + btoa(H + ":" + U)
      }
      var k = s(f.baseURL, f.url);
      v.open(f.method.toUpperCase(), i(k, f.params, f.paramsSerializer), !0), v.timeout = f.timeout;

      function W() {
        if (v) {
          var T = "getAllResponseHeaders" in v ? a(v.getAllResponseHeaders()) : null,
            F = !q || q === "text" || q === "json" ? v.responseText : v.response,
            B = {
              data: F,
              status: v.status,
              statusText: v.statusText,
              headers: T,
              config: f,
              request: v
            };
          t(function (p) {
            w(p), j()
          }, function (p) {
            P(p), j()
          }, B), v = null
        }
      }
      if ("onloadend" in v ? v.onloadend = W : v.onreadystatechange = function () {
          !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(W)
        }, v.onabort = function () {
          v && (P(u("Request aborted", f, "ECONNABORTED", v)), v = null)
        }, v.onerror = function () {
          P(u("Network Error", f, null, v)), v = null
        }, v.ontimeout = function () {
          var F = f.timeout ? "timeout of " + f.timeout + "ms exceeded" : "timeout exceeded",
            B = f.transitional || c.transitional;
          f.timeoutErrorMessage && (F = f.timeoutErrorMessage), P(u(F, f, B.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", v)), v = null
        }, e.isStandardBrowserEnv()) {
        var S = (f.withCredentials || o(k)) && f.xsrfCookieName ? r.read(f.xsrfCookieName) : void 0;
        S && (L[f.xsrfHeaderName] = S)
      }
      "setRequestHeader" in v && e.forEach(L, function (F, B) {
        typeof m > "u" && B.toLowerCase() === "content-type" ? delete L[B] : v.setRequestHeader(B, F)
      }), e.isUndefined(f.withCredentials) || (v.withCredentials = !!f.withCredentials), q && q !== "json" && (v.responseType = f.responseType), typeof f.onDownloadProgress == "function" && v.addEventListener("progress", f.onDownloadProgress), typeof f.onUploadProgress == "function" && v.upload && v.upload.addEventListener("progress", f.onUploadProgress), (f.cancelToken || f.signal) && (I = function (T) {
        v && (P(!T || T && T.type ? new l("canceled") : T), v.abort(), v = null)
      }, f.cancelToken && f.cancelToken.subscribe(I), f.signal && (f.signal.aborted ? I() : f.signal.addEventListener("abort", I))), m || (m = null), v.send(m)
    })
  }, xhr
}
var defaults_1, hasRequiredDefaults;

function requireDefaults() {
  if (hasRequiredDefaults) return defaults_1;
  hasRequiredDefaults = 1;
  var e = utils$8,
    t = normalizeHeaderName,
    r = enhanceError,
    i = {
      "Content-Type": "application/x-www-form-urlencoded"
    };

  function s(c, l) {
    !e.isUndefined(c) && e.isUndefined(c["Content-Type"]) && (c["Content-Type"] = l)
  }

  function a() {
    var c;
    return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (c = requireXhr()), c
  }

  function o(c, l, g) {
    if (e.isString(c)) try {
      return (l || JSON.parse)(c), e.trim(c)
    } catch (f) {
      if (f.name !== "SyntaxError") throw f
    }
    return (g || JSON.stringify)(c)
  }
  var u = {
    transitional: {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1
    },
    adapter: a(),
    transformRequest: [function (l, g) {
      return t(g, "Accept"), t(g, "Content-Type"), e.isFormData(l) || e.isArrayBuffer(l) || e.isBuffer(l) || e.isStream(l) || e.isFile(l) || e.isBlob(l) ? l : e.isArrayBufferView(l) ? l.buffer : e.isURLSearchParams(l) ? (s(g, "application/x-www-form-urlencoded;charset=utf-8"), l.toString()) : e.isObject(l) || g && g["Content-Type"] === "application/json" ? (s(g, "application/json"), o(l)) : l
    }],
    transformResponse: [function (l) {
      var g = this.transitional || u.transitional,
        f = g && g.silentJSONParsing,
        M = g && g.forcedJSONParsing,
        w = !f && this.responseType === "json";
      if (w || M && e.isString(l) && l.length) try {
        return JSON.parse(l)
      } catch (P) {
        if (w) throw P.name === "SyntaxError" ? r(P, this, "E_JSON_PARSE") : P
      }
      return l
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (l) {
      return l >= 200 && l < 300
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*"
      }
    }
  };
  return e.forEach(["delete", "get", "head"], function (l) {
    u.headers[l] = {}
  }), e.forEach(["post", "put", "patch"], function (l) {
    u.headers[l] = e.merge(i)
  }), defaults_1 = u, defaults_1
}
var utils$4 = utils$8,
  defaults$2 = requireDefaults(),
  transformData$1 = function (t, r, i) {
    var s = this || defaults$2;
    return utils$4.forEach(i, function (o) {
      t = o.call(s, t, r)
    }), t
  },
  isCancel$1, hasRequiredIsCancel;

function requireIsCancel() {
  return hasRequiredIsCancel || (hasRequiredIsCancel = 1, isCancel$1 = function (t) {
    return !!(t && t.__CANCEL__)
  }), isCancel$1
}
var utils$3 = utils$8,
  transformData = transformData$1,
  isCancel = requireIsCancel(),
  defaults$1 = requireDefaults(),
  Cancel = requireCancel();

function throwIfCancellationRequested(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Cancel("canceled")
}
var dispatchRequest$1 = function (t) {
    throwIfCancellationRequested(t), t.headers = t.headers || {}, t.data = transformData.call(t, t.data, t.headers, t.transformRequest), t.headers = utils$3.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), utils$3.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (s) {
      delete t.headers[s]
    });
    var r = t.adapter || defaults$1.adapter;
    return r(t).then(function (s) {
      return throwIfCancellationRequested(t), s.data = transformData.call(t, s.data, s.headers, t.transformResponse), s
    }, function (s) {
      return isCancel(s) || (throwIfCancellationRequested(t), s && s.response && (s.response.data = transformData.call(t, s.response.data, s.response.headers, t.transformResponse))), Promise.reject(s)
    })
  },
  utils$2 = utils$8,
  mergeConfig$2 = function (t, r) {
    r = r || {};
    var i = {};

    function s(g, f) {
      return utils$2.isPlainObject(g) && utils$2.isPlainObject(f) ? utils$2.merge(g, f) : utils$2.isPlainObject(f) ? utils$2.merge({}, f) : utils$2.isArray(f) ? f.slice() : f
    }

    function a(g) {
      if (utils$2.isUndefined(r[g])) {
        if (!utils$2.isUndefined(t[g])) return s(void 0, t[g])
      } else return s(t[g], r[g])
    }

    function o(g) {
      if (!utils$2.isUndefined(r[g])) return s(void 0, r[g])
    }

    function u(g) {
      if (utils$2.isUndefined(r[g])) {
        if (!utils$2.isUndefined(t[g])) return s(void 0, t[g])
      } else return s(void 0, r[g])
    }

    function c(g) {
      if (g in r) return s(t[g], r[g]);
      if (g in t) return s(void 0, t[g])
    }
    var l = {
      url: o,
      method: o,
      data: o,
      baseURL: u,
      transformRequest: u,
      transformResponse: u,
      paramsSerializer: u,
      timeout: u,
      timeoutMessage: u,
      withCredentials: u,
      adapter: u,
      responseType: u,
      xsrfCookieName: u,
      xsrfHeaderName: u,
      onUploadProgress: u,
      onDownloadProgress: u,
      decompress: u,
      maxContentLength: u,
      maxBodyLength: u,
      transport: u,
      httpAgent: u,
      httpsAgent: u,
      cancelToken: u,
      socketPath: u,
      responseEncoding: u,
      validateStatus: c
    };
    return utils$2.forEach(Object.keys(t).concat(Object.keys(r)), function (f) {
      var M = l[f] || a,
        w = M(f);
      utils$2.isUndefined(w) && M !== c || (i[f] = w)
    }), i
  },
  data, hasRequiredData;

function requireData() {
  return hasRequiredData || (hasRequiredData = 1, data = {
    version: "0.25.0"
  }), data
}
var VERSION = requireData().version,
  validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function (e, t) {
  validators$1[e] = function (i) {
    return typeof i === e || "a" + (t < 1 ? "n " : " ") + e
  }
});
var deprecatedWarnings = {};
validators$1.transitional = function (t, r, i) {
  function s(a, o) {
    return "[Axios v" + VERSION + "] Transitional option '" + a + "'" + o + (i ? ". " + i : "")
  }
  return function (a, o, u) {
    if (t === !1) throw new Error(s(o, " has been removed" + (r ? " in " + r : "")));
    return r && !deprecatedWarnings[o] && (deprecatedWarnings[o] = !0, console.warn(s(o, " has been deprecated since v" + r + " and will be removed in the near future"))), t ? t(a, o, u) : !0
  }
};

function assertOptions(e, t, r) {
  if (typeof e != "object") throw new TypeError("options must be an object");
  for (var i = Object.keys(e), s = i.length; s-- > 0;) {
    var a = i[s],
      o = t[a];
    if (o) {
      var u = e[a],
        c = u === void 0 || o(u, a, e);
      if (c !== !0) throw new TypeError("option " + a + " must be " + c);
      continue
    }
    if (r !== !0) throw Error("Unknown option " + a)
  }
}
var validator$1 = {
    assertOptions,
    validators: validators$1
  },
  utils$1 = utils$8,
  buildURL = buildURL$1,
  InterceptorManager = InterceptorManager_1,
  dispatchRequest = dispatchRequest$1,
  mergeConfig$1 = mergeConfig$2,
  validator = validator$1,
  validators = validator.validators;

function Axios$1(e) {
  this.defaults = e, this.interceptors = {
    request: new InterceptorManager,
    response: new InterceptorManager
  }
}
Axios$1.prototype.request = function (t, r) {
  if (typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, !r.url) throw new Error("Provided config url is not valid");
  r = mergeConfig$1(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var i = r.transitional;
  i !== void 0 && validator.assertOptions(i, {
    silentJSONParsing: validators.transitional(validators.boolean),
    forcedJSONParsing: validators.transitional(validators.boolean),
    clarifyTimeoutError: validators.transitional(validators.boolean)
  }, !1);
  var s = [],
    a = !0;
  this.interceptors.request.forEach(function (w) {
    typeof w.runWhen == "function" && w.runWhen(r) === !1 || (a = a && w.synchronous, s.unshift(w.fulfilled, w.rejected))
  });
  var o = [];
  this.interceptors.response.forEach(function (w) {
    o.push(w.fulfilled, w.rejected)
  });
  var u;
  if (!a) {
    var c = [dispatchRequest, void 0];
    for (Array.prototype.unshift.apply(c, s), c = c.concat(o), u = Promise.resolve(r); c.length;) u = u.then(c.shift(), c.shift());
    return u
  }
  for (var l = r; s.length;) {
    var g = s.shift(),
      f = s.shift();
    try {
      l = g(l)
    } catch (M) {
      f(M);
      break
    }
  }
  try {
    u = dispatchRequest(l)
  } catch (M) {
    return Promise.reject(M)
  }
  for (; o.length;) u = u.then(o.shift(), o.shift());
  return u
};
Axios$1.prototype.getUri = function (t) {
  if (!t.url) throw new Error("Provided config url is not valid");
  return t = mergeConfig$1(this.defaults, t), buildURL(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
};
utils$1.forEach(["delete", "get", "head", "options"], function (t) {
  Axios$1.prototype[t] = function (r, i) {
    return this.request(mergeConfig$1(i || {}, {
      method: t,
      url: r,
      data: (i || {}).data
    }))
  }
});
utils$1.forEach(["post", "put", "patch"], function (t) {
  Axios$1.prototype[t] = function (r, i, s) {
    return this.request(mergeConfig$1(s || {}, {
      method: t,
      url: r,
      data: i
    }))
  }
});
var Axios_1 = Axios$1,
  CancelToken_1, hasRequiredCancelToken;

function requireCancelToken() {
  if (hasRequiredCancelToken) return CancelToken_1;
  hasRequiredCancelToken = 1;
  var e = requireCancel();

  function t(r) {
    if (typeof r != "function") throw new TypeError("executor must be a function.");
    var i;
    this.promise = new Promise(function (o) {
      i = o
    });
    var s = this;
    this.promise.then(function (a) {
      if (s._listeners) {
        var o, u = s._listeners.length;
        for (o = 0; o < u; o++) s._listeners[o](a);
        s._listeners = null
      }
    }), this.promise.then = function (a) {
      var o, u = new Promise(function (c) {
        s.subscribe(c), o = c
      }).then(a);
      return u.cancel = function () {
        s.unsubscribe(o)
      }, u
    }, r(function (o) {
      s.reason || (s.reason = new e(o), i(s.reason))
    })
  }
  return t.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason
  }, t.prototype.subscribe = function (i) {
    if (this.reason) {
      i(this.reason);
      return
    }
    this._listeners ? this._listeners.push(i) : this._listeners = [i]
  }, t.prototype.unsubscribe = function (i) {
    if (this._listeners) {
      var s = this._listeners.indexOf(i);
      s !== -1 && this._listeners.splice(s, 1)
    }
  }, t.source = function () {
    var i, s = new t(function (o) {
      i = o
    });
    return {
      token: s,
      cancel: i
    }
  }, CancelToken_1 = t, CancelToken_1
}
var spread, hasRequiredSpread;

function requireSpread() {
  return hasRequiredSpread || (hasRequiredSpread = 1, spread = function (t) {
    return function (i) {
      return t.apply(null, i)
    }
  }), spread
}
var isAxiosError, hasRequiredIsAxiosError;

function requireIsAxiosError() {
  if (hasRequiredIsAxiosError) return isAxiosError;
  hasRequiredIsAxiosError = 1;
  var e = utils$8;
  return isAxiosError = function (r) {
    return e.isObject(r) && r.isAxiosError === !0
  }, isAxiosError
}
var utils = utils$8,
  bind = bind$2,
  Axios = Axios_1,
  mergeConfig = mergeConfig$2,
  defaults = requireDefaults();

function createInstance(e) {
  var t = new Axios(e),
    r = bind(Axios.prototype.request, t);
  return utils.extend(r, Axios.prototype, t), utils.extend(r, t), r.create = function (s) {
    return createInstance(mergeConfig(e, s))
  }, r
}
var axios$1 = createInstance(defaults);
axios$1.Axios = Axios;
axios$1.Cancel = requireCancel();
axios$1.CancelToken = requireCancelToken();
axios$1.isCancel = requireIsCancel();
axios$1.VERSION = requireData().version;
axios$1.all = function (t) {
  return Promise.all(t)
};
axios$1.spread = requireSpread();
axios$1.isAxiosError = requireIsAxiosError();
axios$2.exports = axios$1;
axiosExports.default = axios$1;
(function (e) {
  e.exports = axiosExports
})(axios$3);
const axios = getDefaultExportFromCjs(axiosExports$1),
  service = axios.create({
    withCredentials: !0,
    timeout: 7e3
  }),
  requestHandler = function (e) {
    return e
  },
  responseHandler = function (e) {
    return e
  };
service.interceptors.request.use(requestHandler);
service.interceptors.response.use(responseHandler);
const request = {
    install(e) {
      e.provide("request", service)
    }
  },
  _sfc_main = Vue.defineComponent({
    name: "App",
    setup() {
      var r;
      const e = Vue.inject("app");
      return {
        pageConfig: Vue.reactive(((r = e == null ? void 0 : e.page) == null ? void 0 : r.data) || {})
      }
    }
  }),
  _export_sfc = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [i, s] of t) r[i] = s;
    return r
  };

function _sfc_render(e, t, r, i, s, a) {
  const o = Vue.resolveComponent("magic-ui-page");
  return Vue.openBlock(), Vue.createBlock(o, {
    config: e.pageConfig
  }, null, 8, ["config"])
}
const AppComponent = _export_sfc(_sfc_main, [
    ["render", _sfc_render]
  ]),
  getLocalConfig = () => {
    const configStr = localStorage.getItem("magicDSL");
    if (!configStr) return [];
    try {
      return [eval(`(${configStr})`)]
    } catch (e) {
      return []
    }
  },
  magicApp = Vue.createApp(AppComponent);
magicApp.use(request);
Object.entries(components).forEach(([e, t]) => {
  magicApp.component(`magic-ui-${e}`, Vue.defineAsyncComponent(t))
});
Object.values(plugins).forEach(e => {
  magicApp.use(e)
});
const app = new App$1({
  ua: window.navigator.userAgent,
  config: window.magicDSL || {},
  curPage: getUrlParam("page")
});
app.setDesignWidth(app.env.isWeb ? window.document.documentElement.getBoundingClientRect().width : 375);
magicApp.config.globalProperties.app = app;
magicApp.provide("app", app);
magicApp.mount("#app");
export {
  __vite_legacy_guard,
  toLine as t
};
//# sourceMappingURL=index-f813fb38.js.map