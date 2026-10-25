let museMountRoot;
function Ky(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var sd = { exports: {} }, io = {};
var px;
function iS() {
  if (px) return io;
  px = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function a(o, s, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      c = {};
      for (var p in s)
        p !== "key" && (c[p] = s[p]);
    } else c = s;
    return s = c.ref, {
      $$typeof: t,
      type: o,
      key: f,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return io.Fragment = i, io.jsx = a, io.jsxs = a, io;
}
var hx;
function rS() {
  return hx || (hx = 1, sd.exports = iS()), sd.exports;
}
var h = rS(), ud = { exports: {} }, Me = {};
var mx;
function aS() {
  if (mx) return Me;
  mx = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), a = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), m = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), b = /* @__PURE__ */ Symbol.for("react.lazy"), x = /* @__PURE__ */ Symbol.for("react.activity"), w = /* @__PURE__ */ Symbol.for("react.view_transition"), v = Symbol.iterator;
  function S(C) {
    return C === null || typeof C != "object" ? null : (C = v && C[v] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var E = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, j = Object.assign, N = {};
  function U(C, J, le) {
    this.props = C, this.context = J, this.refs = N, this.updater = le || E;
  }
  U.prototype.isReactComponent = {}, U.prototype.setState = function(C, J) {
    if (typeof C != "object" && typeof C != "function" && C != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, C, J, "setState");
  }, U.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function R() {
  }
  R.prototype = U.prototype;
  function G(C, J, le) {
    this.props = C, this.context = J, this.refs = N, this.updater = le || E;
  }
  var K = G.prototype = new R();
  K.constructor = G, j(K, U.prototype), K.isPureReactComponent = !0;
  var A = Array.isArray;
  function V() {
  }
  var ie = { H: null, A: null, T: null, S: null }, ze = Object.prototype.hasOwnProperty;
  function I(C, J, le) {
    var Z = le.ref;
    return {
      $$typeof: t,
      type: C,
      key: J,
      ref: Z !== void 0 ? Z : null,
      props: le
    };
  }
  function te(C, J) {
    return I(C.type, J, C.props);
  }
  function re(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }
  function Ae(C) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(le) {
      return J[le];
    });
  }
  var pe = /\/+/g;
  function ee(C, J) {
    return typeof C == "object" && C !== null && C.key != null ? Ae("" + C.key) : J.toString(36);
  }
  function W(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (typeof C.status == "string" ? C.then(V, V) : (C.status = "pending", C.then(
          function(J) {
            C.status === "pending" && (C.status = "fulfilled", C.value = J);
          },
          function(J) {
            C.status === "pending" && (C.status = "rejected", C.reason = J);
          }
        )), C.status) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function ce(C, J, le, Z, se) {
    var Se = typeof C;
    (Se === "undefined" || Se === "boolean") && (C = null);
    var Ee = !1;
    if (C === null) Ee = !0;
    else
      switch (Se) {
        case "bigint":
        case "string":
        case "number":
          Ee = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case t:
            case i:
              Ee = !0;
              break;
            case b:
              return Ee = C._init, ce(
                Ee(C._payload),
                J,
                le,
                Z,
                se
              );
          }
      }
    if (Ee)
      return se = se(C), Ee = Z === "" ? "." + ee(C, 0) : Z, A(se) ? (le = "", Ee != null && (le = Ee.replace(pe, "$&/") + "/"), ce(se, J, le, "", function(It) {
        return It;
      })) : se != null && (re(se) && (se = te(
        se,
        le + (se.key == null || C && C.key === se.key ? "" : ("" + se.key).replace(
          pe,
          "$&/"
        ) + "/") + Ee
      )), J.push(se)), 1;
    Ee = 0;
    var fe = Z === "" ? "." : Z + ":";
    if (A(C))
      for (var _e = 0; _e < C.length; _e++)
        Z = C[_e], Se = fe + ee(Z, _e), Ee += ce(
          Z,
          J,
          le,
          Se,
          se
        );
    else if (_e = S(C), typeof _e == "function")
      for (C = _e.call(C), _e = 0; !(Z = C.next()).done; )
        Z = Z.value, Se = fe + ee(Z, _e++), Ee += ce(
          Z,
          J,
          le,
          Se,
          se
        );
    else if (Se === "object") {
      if (typeof C.then == "function")
        return ce(
          W(C),
          J,
          le,
          Z,
          se
        );
      throw J = String(C), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ee;
  }
  function me(C, J, le) {
    if (C == null) return C;
    var Z = [], se = 0;
    return ce(C, Z, "", "", function(Se) {
      return J.call(le, Se, se++);
    }), Z;
  }
  function Te(C) {
    if (C._status === -1) {
      var J = C._result, le = J();
      le.then(
        function(Z) {
          (C._status === 0 || C._status === -1) && (C._status = 1, C._result = Z, le.status === void 0 && (le.status = "fulfilled", le.value = Z));
        },
        function(Z) {
          (C._status === 0 || C._status === -1) && (C._status = 2, C._result = Z, le.status === void 0 && (le.status = "rejected", le.reason = Z));
        }
      ), C._status === -1 && (C._status = 0, C._result = le);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var z = typeof reportError == "function" ? reportError : function(C) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var J = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
        error: C
      });
      if (!window.dispatchEvent(J)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", C);
      return;
    }
    console.error(C);
  };
  function qe(C) {
    var J = ie.T, le = {};
    le.types = J !== null ? J.types : null, ie.T = le;
    try {
      var Z = C(), se = ie.S;
      se !== null && se(le, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(V, z);
    } catch (Se) {
      z(Se);
    } finally {
      J !== null && le.types !== null && (J.types = le.types), ie.T = J;
    }
  }
  function ut(C) {
    var J = ie.T;
    if (J !== null) {
      var le = J.types;
      le === null ? J.types = [C] : le.indexOf(C) === -1 && le.push(C);
    } else qe(ut.bind(null, C));
  }
  var T = {
    map: me,
    forEach: function(C, J, le) {
      me(
        C,
        function() {
          J.apply(this, arguments);
        },
        le
      );
    },
    count: function(C) {
      var J = 0;
      return me(C, function() {
        J++;
      }), J;
    },
    toArray: function(C) {
      return me(C, function(J) {
        return J;
      }) || [];
    },
    only: function(C) {
      if (!re(C))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return C;
    }
  };
  return Me.Activity = x, Me.Children = T, Me.Component = U, Me.Fragment = a, Me.Profiler = s, Me.PureComponent = G, Me.StrictMode = o, Me.Suspense = m, Me.ViewTransition = w, Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ie, Me.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(C) {
      return ie.H.useMemoCache(C);
    }
  }, Me.addTransitionType = ut, Me.cache = function(C) {
    return function() {
      return C.apply(null, arguments);
    };
  }, Me.cacheSignal = function() {
    return null;
  }, Me.cloneElement = function(C, J, le) {
    if (C == null)
      throw Error(
        "The argument must be a React element, but you passed " + C + "."
      );
    var Z = j({}, C.props), se = C.key;
    if (J != null)
      for (Se in J.key !== void 0 && (se = "" + J.key), J)
        !ze.call(J, Se) || Se === "key" || Se === "__self" || Se === "__source" || Se === "ref" && J.ref === void 0 || (Z[Se] = J[Se]);
    var Se = arguments.length - 2;
    if (Se === 1) Z.children = le;
    else if (1 < Se) {
      for (var Ee = Array(Se), fe = 0; fe < Se; fe++)
        Ee[fe] = arguments[fe + 2];
      Z.children = Ee;
    }
    return I(C.type, se, Z);
  }, Me.createContext = function(C) {
    return C = {
      $$typeof: f,
      _currentValue: C,
      _currentValue2: C,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, C.Provider = C, C.Consumer = {
      $$typeof: c,
      _context: C
    }, C;
  }, Me.createElement = function(C, J, le) {
    var Z, se = {}, Se = null;
    if (J != null)
      for (Z in J.key !== void 0 && (Se = "" + J.key), J)
        ze.call(J, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (se[Z] = J[Z]);
    var Ee = arguments.length - 2;
    if (Ee === 1) se.children = le;
    else if (1 < Ee) {
      for (var fe = Array(Ee), _e = 0; _e < Ee; _e++)
        fe[_e] = arguments[_e + 2];
      se.children = fe;
    }
    if (C && C.defaultProps)
      for (Z in Ee = C.defaultProps, Ee)
        se[Z] === void 0 && (se[Z] = Ee[Z]);
    return I(C, Se, se);
  }, Me.createRef = function() {
    return { current: null };
  }, Me.forwardRef = function(C) {
    return { $$typeof: p, render: C };
  }, Me.isValidElement = re, Me.lazy = function(C) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: C },
      _init: Te
    };
  }, Me.memo = function(C, J) {
    return {
      $$typeof: g,
      type: C,
      compare: J === void 0 ? null : J
    };
  }, Me.startTransition = qe, Me.unstable_useCacheRefresh = function() {
    return ie.H.useCacheRefresh();
  }, Me.use = function(C) {
    return ie.H.use(C);
  }, Me.useActionState = function(C, J, le) {
    return ie.H.useActionState(C, J, le);
  }, Me.useCallback = function(C, J) {
    return ie.H.useCallback(C, J);
  }, Me.useContext = function(C) {
    return ie.H.useContext(C);
  }, Me.useDebugValue = function() {
  }, Me.useDeferredValue = function(C, J) {
    return ie.H.useDeferredValue(C, J);
  }, Me.useEffect = function(C, J) {
    return ie.H.useEffect(C, J);
  }, Me.useEffectEvent = function(C) {
    return ie.H.useEffectEvent(C);
  }, Me.useId = function() {
    return ie.H.useId();
  }, Me.useImperativeHandle = function(C, J, le) {
    return ie.H.useImperativeHandle(C, J, le);
  }, Me.useInsertionEffect = function(C, J) {
    return ie.H.useInsertionEffect(C, J);
  }, Me.useLayoutEffect = function(C, J) {
    return ie.H.useLayoutEffect(C, J);
  }, Me.useMemo = function(C, J) {
    return ie.H.useMemo(C, J);
  }, Me.useOptimistic = function(C, J) {
    return ie.H.useOptimistic(C, J);
  }, Me.useReducer = function(C, J, le) {
    return ie.H.useReducer(C, J, le);
  }, Me.useRef = function(C) {
    return ie.H.useRef(C);
  }, Me.useState = function(C) {
    return ie.H.useState(C);
  }, Me.useSyncExternalStore = function(C, J, le) {
    return ie.H.useSyncExternalStore(
      C,
      J,
      le
    );
  }, Me.useTransition = function() {
    return ie.H.useTransition();
  }, Me.version = "19.3.0", Me;
}
var gx;
function fp() {
  return gx || (gx = 1, ud.exports = aS()), ud.exports;
}
var F = fp(), cd = { exports: {} }, ro = {}, fd = { exports: {} }, dd = {};
var bx;
function lS() {
  return bx || (bx = 1, (function(t) {
    function i(W, ce) {
      var me = W.length;
      W.push(ce);
      e: for (; 0 < me; ) {
        var Te = me - 1 >>> 1, z = W[Te];
        if (0 < s(z, ce))
          W[Te] = ce, W[me] = z, me = Te;
        else break e;
      }
    }
    function a(W) {
      return W.length === 0 ? null : W[0];
    }
    function o(W) {
      if (W.length === 0) return null;
      var ce = W[0], me = W.pop();
      if (me !== ce) {
        W[0] = me;
        e: for (var Te = 0, z = W.length, qe = z >>> 1; Te < qe; ) {
          var ut = 2 * (Te + 1) - 1, T = W[ut], C = ut + 1, J = W[C];
          if (0 > s(T, me))
            C < z && 0 > s(J, T) ? (W[Te] = J, W[C] = me, Te = C) : (W[Te] = T, W[ut] = me, Te = ut);
          else if (C < z && 0 > s(J, me))
            W[Te] = J, W[C] = me, Te = C;
          else break e;
        }
      }
      return ce;
    }
    function s(W, ce) {
      var me = W.sortIndex - ce.sortIndex;
      return me !== 0 ? me : W.id - ce.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      t.unstable_now = function() {
        return c.now();
      };
    } else {
      var f = Date, p = f.now();
      t.unstable_now = function() {
        return f.now() - p;
      };
    }
    var m = [], g = [], b = 1, x = null, w = 3, v = !1, S = !1, E = !1, j = !1, N = typeof setTimeout == "function" ? setTimeout : null, U = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
    function G(W) {
      for (var ce = a(g); ce !== null; ) {
        if (ce.callback === null) o(g);
        else if (ce.startTime <= W)
          o(g), ce.sortIndex = ce.expirationTime, i(m, ce);
        else break;
        ce = a(g);
      }
    }
    function K(W) {
      if (E = !1, G(W), !S)
        if (a(m) !== null)
          S = !0, A || (A = !0, re());
        else {
          var ce = a(g);
          ce !== null && ee(K, ce.startTime - W);
        }
    }
    var A = !1, V = -1, ie = 5, ze = -1;
    function I() {
      return j ? !0 : !(t.unstable_now() - ze < ie);
    }
    function te() {
      if (j = !1, A) {
        var W = t.unstable_now();
        ze = W;
        var ce = !0;
        try {
          e: {
            S = !1, E && (E = !1, U(V), V = -1), v = !0;
            var me = w;
            try {
              t: {
                for (G(W), x = a(m); x !== null && !(x.expirationTime > W && I()); ) {
                  var Te = x.callback;
                  if (typeof Te == "function") {
                    x.callback = null, w = x.priorityLevel;
                    var z = Te(
                      x.expirationTime <= W
                    );
                    if (W = t.unstable_now(), typeof z == "function") {
                      x.callback = z, G(W), ce = !0;
                      break t;
                    }
                    x === a(m) && o(m), G(W);
                  } else o(m);
                  x = a(m);
                }
                if (x !== null) ce = !0;
                else {
                  var qe = a(g);
                  qe !== null && ee(
                    K,
                    qe.startTime - W
                  ), ce = !1;
                }
              }
              break e;
            } finally {
              x = null, w = me, v = !1;
            }
            ce = void 0;
          }
        } finally {
          ce ? re() : A = !1;
        }
      }
    }
    var re;
    if (typeof R == "function")
      re = function() {
        R(te);
      };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), pe = Ae.port2;
      Ae.port1.onmessage = te, re = function() {
        pe.postMessage(null);
      };
    } else
      re = function() {
        N(te, 0);
      };
    function ee(W, ce) {
      V = N(function() {
        W(t.unstable_now());
      }, ce);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, t.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ie = 0 < W ? Math.floor(1e3 / W) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, t.unstable_next = function(W) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var ce = 3;
          break;
        default:
          ce = w;
      }
      var me = w;
      w = ce;
      try {
        return W();
      } finally {
        w = me;
      }
    }, t.unstable_requestPaint = function() {
      j = !0;
    }, t.unstable_runWithPriority = function(W, ce) {
      switch (W) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          W = 3;
      }
      var me = w;
      w = W;
      try {
        return ce();
      } finally {
        w = me;
      }
    }, t.unstable_scheduleCallback = function(W, ce, me) {
      var Te = t.unstable_now();
      switch (typeof me == "object" && me !== null ? (me = me.delay, me = typeof me == "number" && 0 < me ? Te + me : Te) : me = Te, W) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return z = me + z, W = {
        id: b++,
        callback: ce,
        priorityLevel: W,
        startTime: me,
        expirationTime: z,
        sortIndex: -1
      }, me > Te ? (W.sortIndex = me, i(g, W), a(m) === null && W === a(g) && (E ? (U(V), V = -1) : E = !0, ee(K, me - Te))) : (W.sortIndex = z, i(m, W), S || v || (S = !0, A || (A = !0, re()))), W;
    }, t.unstable_shouldYield = I, t.unstable_wrapCallback = function(W) {
      var ce = w;
      return function() {
        var me = w;
        w = ce;
        try {
          return W.apply(this, arguments);
        } finally {
          w = me;
        }
      };
    };
  })(dd)), dd;
}
var xx;
function oS() {
  return xx || (xx = 1, fd.exports = lS()), fd.exports;
}
var pd = { exports: {} }, Xt = {};
var yx;
function sS() {
  if (yx) return Xt;
  yx = 1;
  var t = fp();
  function i(b) {
    var x = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      x += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var w = 2; w < arguments.length; w++)
        x += "&args[]=" + encodeURIComponent(arguments[w]);
    }
    return "Minified React error #" + b + "; visit " + x + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function a() {
  }
  var o = {
    d: {
      f: a,
      r: function() {
        throw Error(i(522));
      },
      D: a,
      C: a,
      L: a,
      m: a,
      X: a,
      S: a,
      M: a
    },
    p: 0,
    findDOMNode: null
  }, s = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.recoverable"), f = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function p(b, x, w) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: v == null ? null : v === f ? f : "" + v,
      children: b,
      containerInfo: x,
      implementation: w
    };
  }
  var m = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(b, x) {
    if (b === "font") return "";
    if (typeof x == "string")
      return x === "use-credentials" ? x : "";
  }
  return Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Xt.browser = function(b) {
    return { $$typeof: c, _reason: b };
  }, Xt.createPortal = function(b, x) {
    var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!x || x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11)
      throw Error(i(299));
    return p(b, x, null, w);
  }, Xt.flushSync = function(b) {
    var x = m.T, w = o.p;
    try {
      if (m.T = null, o.p = 2, b) return b();
    } finally {
      m.T = x, o.p = w, o.d.f();
    }
  }, Xt.preconnect = function(b, x) {
    typeof b == "string" && (x ? (x = x.crossOrigin, x = typeof x == "string" ? x === "use-credentials" ? x : "" : void 0) : x = null, o.d.C(b, x));
  }, Xt.prefetchDNS = function(b) {
    typeof b == "string" && o.d.D(b);
  }, Xt.preinit = function(b, x) {
    if (typeof b == "string" && x && typeof x.as == "string") {
      var w = x.as, v = g(w, x.crossOrigin), S = typeof x.integrity == "string" ? x.integrity : void 0, E = typeof x.fetchPriority == "string" ? x.fetchPriority : void 0;
      w === "style" ? o.d.S(
        b,
        typeof x.precedence == "string" ? x.precedence : void 0,
        {
          crossOrigin: v,
          integrity: S,
          fetchPriority: E
        }
      ) : w === "script" && o.d.X(b, {
        crossOrigin: v,
        integrity: S,
        fetchPriority: E,
        nonce: typeof x.nonce == "string" ? x.nonce : void 0
      });
    }
  }, Xt.preinitModule = function(b, x) {
    if (typeof b == "string")
      if (typeof x == "object" && x !== null) {
        if (x.as == null || x.as === "script") {
          var w = g(
            x.as,
            x.crossOrigin
          );
          o.d.M(b, {
            crossOrigin: w,
            integrity: typeof x.integrity == "string" ? x.integrity : void 0,
            nonce: typeof x.nonce == "string" ? x.nonce : void 0,
            fetchPriority: typeof x.fetchPriority == "string" ? x.fetchPriority : void 0
          });
        }
      } else x == null && o.d.M(b);
  }, Xt.preload = function(b, x) {
    if (typeof b == "string" && typeof x == "object" && x !== null && typeof x.as == "string") {
      var w = x.as, v = g(w, x.crossOrigin);
      o.d.L(b, w, {
        crossOrigin: v,
        integrity: typeof x.integrity == "string" ? x.integrity : void 0,
        nonce: typeof x.nonce == "string" ? x.nonce : void 0,
        type: typeof x.type == "string" ? x.type : void 0,
        fetchPriority: typeof x.fetchPriority == "string" ? x.fetchPriority : void 0,
        referrerPolicy: typeof x.referrerPolicy == "string" ? x.referrerPolicy : void 0,
        imageSrcSet: typeof x.imageSrcSet == "string" ? x.imageSrcSet : void 0,
        imageSizes: typeof x.imageSizes == "string" ? x.imageSizes : void 0,
        media: typeof x.media == "string" ? x.media : void 0
      });
    }
  }, Xt.preloadModule = function(b, x) {
    if (typeof b == "string")
      if (x) {
        var w = g(x.as, x.crossOrigin);
        o.d.m(b, {
          as: typeof x.as == "string" && x.as !== "script" ? x.as : void 0,
          crossOrigin: w,
          integrity: typeof x.integrity == "string" ? x.integrity : void 0,
          nonce: typeof x.nonce == "string" ? x.nonce : void 0,
          fetchPriority: typeof x.fetchPriority == "string" ? x.fetchPriority : void 0
        });
      } else o.d.m(b);
  }, Xt.requestFormReset = function(b) {
    o.d.r(b);
  }, Xt.unstable_batchedUpdates = function(b, x) {
    return b(x);
  }, Xt.useFormState = function(b, x, w) {
    return m.H.useFormState(b, x, w);
  }, Xt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, Xt.version = "19.3.0", Xt;
}
var vx;
function uS() {
  if (vx) return pd.exports;
  vx = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (i) {
        console.error(i);
      }
  }
  return t(), pd.exports = sS(), pd.exports;
}
var wx;
function cS() {
  if (wx) return ro;
  wx = 1;
  var t = oS(), i = fp(), a = uS();
  function o(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        n += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    for (var n = e, r = n; r && !r.alternate; )
      n = r, (n.flags & 4098) !== 0 && (e = n.return), r = n.return;
    for (; n.return; ) n = n.return;
    return n.tag === 3 ? e : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (e.tag === 31) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (c(e) !== e)
      throw Error(o(188));
  }
  function g(e) {
    var n = e.alternate;
    if (!n) {
      if (n = c(e), n === null) throw Error(o(188));
      return n !== e ? null : e;
    }
    for (var r = e, l = n; ; ) {
      var u = r.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (l = u.return, l !== null) {
          r = l;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === r) return m(u), e;
          if (d === l) return m(u), n;
          d = d.sibling;
        }
        throw Error(o(188));
      }
      if (r.return !== l.return) r = u, l = d;
      else {
        for (var y = !1, k = u.child; k; ) {
          if (k === r) {
            y = !0, r = u, l = d;
            break;
          }
          if (k === l) {
            y = !0, l = u, r = d;
            break;
          }
          k = k.sibling;
        }
        if (!y) {
          for (k = d.child; k; ) {
            if (k === r) {
              y = !0, r = d, l = u;
              break;
            }
            if (k === l) {
              y = !0, l = d, r = u;
              break;
            }
            k = k.sibling;
          }
          if (!y) throw Error(o(189));
        }
      }
      if (r.alternate !== l) throw Error(o(190));
    }
    if (r.tag !== 3) throw Error(o(188));
    return r.stateNode.current === r ? e : n;
  }
  function b(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = b(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  function x(e, n, r, l, u, d) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && r(e, l, u, d) || (e.tag !== 22 || e.memoizedState === null) && (n || e.tag !== 5 && e.tag !== 27) && x(
        e.child,
        n,
        r,
        l,
        u,
        d
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function w(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function v(e) {
    var n = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (n = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return n;
  }
  function S(e) {
    var n = [null, null], r = w(e);
    return r === null || E(
      n,
      e,
      r.child,
      { foundSelf: !1 }
    ), n;
  }
  function E(e, n, r, l) {
    for (; r !== null; ) {
      if (r === n) l.foundSelf = !0;
      else if (r.tag === 5 || r.tag === 27 || r.tag === 6) {
        if (l.foundSelf) return e[1] = r, !0;
        e[0] = r;
      } else if ((r.tag !== 22 || r.memoizedState === null) && E(
        e,
        n,
        r.child,
        l
      ))
        return !0;
      r = r.sibling;
    }
    return !1;
  }
  function j(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(o(559));
    }
  }
  var N = null, U = null;
  function R(e, n, r) {
    return e === r ? !0 : e === n ? (N = e, !0) : !1;
  }
  function G(e, n, r) {
    return e === r ? (U = e, !1) : e === n ? (U !== null && (N = e), !0) : !1;
  }
  function K(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function A(e, n, r) {
    for (var l = 0, u = e; u; u = r(u)) l++;
    u = 0;
    for (var d = n; d; d = r(d)) u++;
    for (; 0 < l - u; ) e = r(e), l--;
    for (; 0 < u - l; ) n = r(n), u--;
    for (; l--; ) {
      if (e === n || n !== null && e === n.alternate)
        return e;
      e = r(e), n = r(n);
    }
    return null;
  }
  var V = Object.assign, ie = /* @__PURE__ */ Symbol.for("react.element"), ze = /* @__PURE__ */ Symbol.for("react.transitional.element"), I = /* @__PURE__ */ Symbol.for("react.portal"), te = /* @__PURE__ */ Symbol.for("react.fragment"), re = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ae = /* @__PURE__ */ Symbol.for("react.profiler"), pe = /* @__PURE__ */ Symbol.for("react.consumer"), ee = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), ce = /* @__PURE__ */ Symbol.for("react.suspense"), me = /* @__PURE__ */ Symbol.for("react.suspense_list"), Te = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), qe = /* @__PURE__ */ Symbol.for("react.activity"), ut = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), T = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), C = /* @__PURE__ */ Symbol.for("react.view_transition"), J = /* @__PURE__ */ Symbol.for("react.recoverable"), le = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object" ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var se = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Se(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === se ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case te:
        return "Fragment";
      case Ae:
        return "Profiler";
      case re:
        return "StrictMode";
      case ce:
        return "Suspense";
      case me:
        return "SuspenseList";
      case qe:
        return "Activity";
      case C:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case I:
          return "Portal";
        case ee:
          return e.displayName || "Context";
        case pe:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Te:
          return n = e.displayName || null, n !== null ? n : Se(e.type) || "Memo";
        case z:
          n = e._payload, e = e._init;
          try {
            return Se(e(n));
          } catch {
          }
      }
    return null;
  }
  var Ee = Array.isArray, fe = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _e = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, It = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Si = [], On = -1;
  function ht(e) {
    return { current: e };
  }
  function ot(e) {
    0 > On || (e.current = Si[On], Si[On] = null, On--);
  }
  function Xe(e, n) {
    On++, Si[On] = e.current, e.current = n;
  }
  var fn = ht(null), Kt = ht(null), mt = ht(null), Mn = ht(null);
  function zi(e, n) {
    switch (Xe(mt, n), Xe(Kt, e), Xe(fn, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? kb(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = kb(n), e = Sb(n, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ot(fn), Xe(fn, e);
  }
  function Dn() {
    ot(fn), ot(Kt), ot(mt);
  }
  function _i(e) {
    var n = e.memoizedState;
    n !== null && (Pa._currentValue = n.memoizedState, Xe(Mn, e)), n = fn.current;
    var r = Sb(n, e.type);
    n !== r && (Xe(Kt, e), Xe(fn, r));
  }
  function Rn(e) {
    Kt.current === e && (ot(fn), ot(Kt)), Mn.current === e && (ot(Mn), Pa._currentValue = It);
  }
  var Y, ae;
  function ge(e) {
    if (Y === void 0)
      try {
        throw Error();
      } catch (r) {
        var n = r.stack.trim().match(/\n( *(at )?)/);
        Y = n && n[1] || "", ae = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Y + e + ae;
  }
  var Oe = !1;
  function zt(e, n) {
    if (!e || Oe) return "";
    Oe = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var Q = function() {
                throw Error();
              };
              if (Object.defineProperty(Q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Q, []);
                } catch (oe) {
                  var M = oe;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (oe) {
                  M = oe;
                }
                Q = !1;
                try {
                  var H = Object.getOwnPropertyDescriptor(
                    e.prototype,
                    "props"
                  );
                  Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), Q = !0, new e();
                } finally {
                  Q && (H !== void 0 ? Object.defineProperty(e.prototype, "props", H) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (oe) {
                M = oe;
              }
              (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (oe) {
            if (oe && M && typeof oe.stack == "string")
              return [oe.stack, M.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var d = l.DetermineComponentFrameRoot(), y = d[0], k = d[1];
      if (y && k) {
        var _ = y.split(`
`), L = k.split(`
`);
        for (u = l = 0; l < _.length && !_[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < L.length && !L[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === _.length || u === L.length)
          for (l = _.length - 1, u = L.length - 1; 1 <= l && 0 <= u && _[l] !== L[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (_[l] !== L[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || _[l] !== L[u]) {
                  var $ = `
` + _[l].replace(" at new ", " at ");
                  return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), $;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      Oe = !1, Error.prepareStackTrace = r;
    }
    return (r = e ? e.displayName || e.name : "") ? ge(r) : "";
  }
  function Ne(e, n) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ge(e.type);
      case 16:
        return ge("Lazy");
      case 13:
        return e.child !== n && n !== null ? ge("Suspense Fallback") : ge("Suspense");
      case 19:
        return ge("SuspenseList");
      case 0:
      case 15:
        return zt(e.type, !1);
      case 11:
        return zt(e.type.render, !1);
      case 1:
        return zt(e.type, !0);
      case 31:
        return ge("Activity");
      case 30:
        return ge("ViewTransition");
      default:
        return "";
    }
  }
  function yt(e) {
    try {
      var n = "", r = null;
      do
        n += Ne(e, r), r = e, e = e.return;
      while (e);
      return n;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var _t = Object.prototype.hasOwnProperty, Pt = t.unstable_scheduleCallback, jt = t.unstable_cancelCallback, nn = t.unstable_shouldYield, Yi = t.unstable_requestPaint, Et = t.unstable_now, Ht = t.unstable_getCurrentPriorityLevel, Qn = t.unstable_ImmediatePriority, rn = t.unstable_UserBlockingPriority, ua = t.unstable_NormalPriority, cl = t.unstable_LowPriority, Cr = t.unstable_IdlePriority, q = t.log, he = t.unstable_setDisableYieldValue, ye = null, xe = null;
  function vt(e) {
    if (typeof q == "function" && he(e), xe && typeof xe.setStrictMode == "function")
      try {
        xe.setStrictMode(ye, e);
      } catch {
      }
  }
  var st = Math.clz32 ? Math.clz32 : Mu, Kn = Math.log, ca = Math.LN2;
  function Mu(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Kn(e) / ca | 0) | 0;
  }
  var Ye = 256, gt = 262144, Zt = 4194304;
  function Pn(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Co(e, n, r) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0, d = e.suspendedLanes, y = e.pingedLanes;
    e = e.warmLanes;
    var k = l & 134217727;
    return k !== 0 ? (l = k & ~d, l !== 0 ? u = Pn(l) : (y &= k, y !== 0 ? u = Pn(y) : r || (r = k & ~e, r !== 0 && (u = Pn(r))))) : (k = l & ~d, k !== 0 ? u = Pn(k) : y !== 0 ? u = Pn(y) : r || (r = l & ~e, r !== 0 && (u = Pn(r)))), u === 0 ? 0 : n !== 0 && n !== u && (n & d) === 0 && (d = u & -u, r = n & -n, d >= r || d === 32 && (r & 4194048) !== 0) ? n : u;
  }
  function fl(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Xp(e, n) {
    (n & 8) !== 0 && (n |= n & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= n; 0 < r; ) {
        var l = 31 - st(r), u = 1 << l;
        n |= e[l], r &= ~u;
      }
    return n;
  }
  function bw(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Qp() {
    var e = Zt;
    return Zt <<= 1, (Zt & 62914560) === 0 && (Zt = 4194304), e;
  }
  function Du(e) {
    for (var n = [], r = 0; 31 > r; r++) n.push(e);
    return n;
  }
  function dl(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function xw(e, n, r, l, u, d) {
    var y = e.pendingLanes;
    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
    var k = e.entanglements, _ = e.expirationTimes, L = e.hiddenUpdates;
    for (r = y & ~r; 0 < r; ) {
      var $ = 31 - st(r), Q = 1 << $;
      k[$] = 0, _[$] = -1;
      var M = L[$];
      if (M !== null)
        for (L[$] = null, $ = 0; $ < M.length; $++) {
          var H = M[$];
          H !== null && (H.lane &= -536870913);
        }
      r &= ~Q;
    }
    l !== 0 && Kp(e, l, 0), d !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(y & ~n));
  }
  function Kp(e, n, r) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var l = 31 - st(n);
    e.entangledLanes |= n, e.entanglements[l] = e.entanglements[l] | 1073741824 | r & 261930;
  }
  function Pp(e, n) {
    var r = e.entangledLanes |= n;
    for (e = e.entanglements; r; ) {
      var l = 31 - st(r), u = 1 << l;
      u & n | e[l] & n && (e[l] |= n), r &= ~u;
    }
  }
  function Jp(e, n) {
    var r = n & -n;
    return r = (r & 42) !== 0 ? 1 : Ru(r), (r & (e.suspendedLanes | n)) !== 0 ? 0 : r;
  }
  function Ru(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Lu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Wp() {
    var e = _e.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : lx(e.type));
  }
  function eh(e, n) {
    var r = _e.p;
    try {
      return _e.p = e, n();
    } finally {
      _e.p = r;
    }
  }
  var ji = Math.random().toString(36).slice(2), $t = "__reactFiber$" + ji, dn = "__reactProps$" + ji, fa = "__reactContainer$" + ji, th = "__reactEvents$" + ji, yw = "__reactListeners$" + ji, vw = "__reactHandles$" + ji, nh = "__reactResources$" + ji, pl = "__reactMarker$" + ji, To = "__reactLoad$" + ji;
  function No(e) {
    delete e[$t], delete e[dn], delete e[yw], delete e[vw];
  }
  function Tr(e) {
    var n;
    if (n = e[$t]) return n;
    for (var r = e.parentNode; r; ) {
      if (n = r[fa] || r[$t]) {
        if (r = n.alternate, n.child !== null || r !== null && r.child !== null)
          for (e = Hb(e); e !== null; ) {
            if (r = e[$t]) return r;
            e = Hb(e);
          }
        return n;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function da(e) {
    if (e = e[$t] || e[fa]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function hl(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(o(33));
  }
  function pa(e) {
    var n = e[nh];
    return n || (n = e[nh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Rt(e) {
    e[pl] = !0;
  }
  function ih(e) {
    e[To] = void 0;
  }
  var rh = /* @__PURE__ */ new Set(), ah = {};
  function Nr(e, n) {
    ha(e, n), ha(e + "Capture", n);
  }
  function ha(e, n) {
    for (ah[e] = n, e = 0; e < n.length; e++)
      rh.add(n[e]);
  }
  var ww = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), lh = {}, oh = {};
  function kw(e) {
    return _t.call(oh, e) ? !0 : _t.call(lh, e) ? !1 : ww.test(e) ? oh[e] = !0 : (lh[e] = !0, !1);
  }
  var Ge = !1;
  function sh() {
    var e = Ge;
    return Ge = !1, e;
  }
  function Ao(e, n, r) {
    if (kw(n))
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var l = n.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, r);
      }
  }
  function Oo(e, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, r);
    }
  }
  function Ei(e, n, r, l) {
    if (l === null) e.removeAttribute(r);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(r);
          return;
      }
      e.setAttributeNS(n, r, l);
    }
  }
  function wn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function uh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Sw(e, n, r) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    );
    if (!e.hasOwnProperty(n) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var u = l.get, d = l.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(y) {
          r = "" + y, d.call(this, y);
        }
      }), Object.defineProperty(e, n, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(y) {
          r = "" + y;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function Uu(e) {
    if (!e._valueTracker) {
      var n = uh(e) ? "checked" : "value";
      e._valueTracker = Sw(
        e,
        n,
        "" + e[n]
      );
    }
  }
  function ch(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var r = n.getValue(), l = "";
    return e && (l = uh(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== r ? (n.setValue(e), !0) : !1;
  }
  var zw = /[\n"\\]/g;
  function Ln(e) {
    return e.replace(
      zw,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Bu(e, n, r, l, u, d, y, k) {
    e.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + wn(n)) : e.value !== "" + wn(n) && (e.value = "" + wn(n)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"), n != null ? y === "number" && e.value == n ? Iu(e, wn(e.value)) : Iu(e, wn(n)) : r != null ? Iu(e, wn(r)) : l != null && e.removeAttribute("value"), u == null && d != null && (e.defaultChecked = !!d), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), k != null && typeof k != "function" && typeof k != "symbol" && typeof k != "boolean" ? e.name = "" + wn(k) : e.removeAttribute("name");
  }
  function fh(e, n, r, l, u, d, y, k) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), n != null || r != null) {
      if (!(d !== "submit" && d !== "reset" || n != null)) {
        Uu(e);
        return;
      }
      r = r != null ? "" + wn(r) : "", n = n != null ? "" + wn(n) : r, k || n === e.value || (e.value = n), e.defaultValue = n;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = k ? e.checked : !!l, e.defaultChecked = !!l, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y), Uu(e);
  }
  function Iu(e, n) {
    e.defaultValue !== "" + n && (e.defaultValue = "" + n);
  }
  function ma(e, n, r, l) {
    if (e = e.options, n) {
      n = {};
      for (var u = 0; u < r.length; u++)
        n["$" + r[u]] = !0;
      for (r = 0; r < e.length; r++)
        u = n.hasOwnProperty("$" + e[r].value), e[r].selected !== u && (e[r].selected = u), u && l && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + wn(r), n = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          e[u].selected = !0, l && (e[u].defaultSelected = !0);
          return;
        }
        n !== null || e[u].disabled || (n = e[u]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function dh(e, n, r) {
    if (n != null && (n = "" + wn(n), n !== e.value && (e.value = n), r == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = r != null ? "" + wn(r) : "";
  }
  function ph(e, n, r, l) {
    if (n == null) {
      if (l != null) {
        if (r != null) throw Error(o(92));
        if (Ee(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), n = r;
    }
    r = wn(n), e.defaultValue = r, l = e.textContent, l === r && l !== "" && l !== null && (e.value = l), Uu(e);
  }
  function ga(e, n) {
    if (n) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var _w = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function hh(e, n, r) {
    var l = n.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? l ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : l ? e.setProperty(n, r) : typeof r != "number" || r === 0 || _w.has(n) ? n === "float" ? e.cssFloat = r : e[n] = ("" + r).trim() : e[n] = r + "px";
  }
  function mh(e, n, r) {
    if (n != null && typeof n != "object")
      throw Error(o(62));
    if (e = e.style, r != null) {
      for (var l in r)
        !r.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "", Ge = !0);
      for (var u in n)
        l = n[u], n.hasOwnProperty(u) && r[u] !== l && (hh(e, u, l), Ge = !0);
    } else
      for (var d in n)
        n.hasOwnProperty(d) && hh(e, d, n[d]);
  }
  function Hu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var jw = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Ew = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Mo(e) {
    return Ew.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function oi() {
  }
  var Zu = null;
  function $u(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ba = null, xa = null;
  function gh(e) {
    var n = da(e);
    if (n && (e = n.stateNode)) {
      var r = e[dn] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Bu(
            e,
            r.value,
            r.defaultValue,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name
          ), n = r.name, r.type === "radio" && n != null) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (r = r.querySelectorAll(
              'input[name="' + Ln(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < r.length; n++) {
              var l = r[n];
              if (l !== e && l.form === e.form) {
                var u = l[dn] || null;
                if (!u) throw Error(o(90));
                Bu(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (n = 0; n < r.length; n++)
              l = r[n], l.form === e.form && ch(l);
          }
          break e;
        case "textarea":
          dh(e, r.value, r.defaultValue);
          break e;
        case "select":
          n = r.value, n != null && ma(e, !!r.multiple, n, !1);
      }
    }
  }
  var qu = !1;
  function bh(e, n, r) {
    if (qu) return e(n, r);
    qu = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if (qu = !1, (ba !== null || xa !== null) && (Ms(), ba && (n = ba, e = xa, xa = ba = null, gh(n), e)))
        for (n = 0; n < e.length; n++) gh(e[n]);
    }
  }
  function ml(e, n) {
    var r = e.stateNode;
    if (r === null) return null;
    var l = r[dn] || null;
    if (l === null) return null;
    r = l[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function")
      throw Error(
        o(231, n, typeof r)
      );
    return r;
  }
  var Ci = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vu = !1;
  if (Ci)
    try {
      var gl = {};
      Object.defineProperty(gl, "passive", {
        get: function() {
          Vu = !0;
        }
      }), window.addEventListener("test", gl, gl), window.removeEventListener("test", gl, gl);
    } catch {
      Vu = !1;
    }
  var Gi = null, Yu = null, Do = null;
  function xh() {
    if (Do) return Do;
    var e, n = Yu, r = n.length, l, u = "value" in Gi ? Gi.value : Gi.textContent, d = u.length;
    for (e = 0; e < r && n[e] === u[e]; e++) ;
    var y = r - e;
    for (l = 1; l <= y && n[r - l] === u[d - l]; l++) ;
    return Do = u.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Ro(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Lo() {
    return !0;
  }
  function yh() {
    return !1;
  }
  function an(e) {
    function n(r, l, u, d, y) {
      this._reactName = r, this._targetInst = u, this.type = l, this.nativeEvent = d, this.target = y, this.currentTarget = null;
      for (var k in e)
        e.hasOwnProperty(k) && (r = e[k], this[k] = r ? r(d) : d[k]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Lo : yh, this.isPropagationStopped = yh, this;
    }
    return V(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Lo);
      },
      stopPropagation: function() {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Lo);
      },
      persist: function() {
      },
      isPersistent: Lo
    }), n;
  }
  var Fi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Uo = an(Fi), bl = V({}, Fi, { view: 0, detail: 0 }), Cw = an(bl), Gu, Fu, xl, Bo = V({}, bl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Qu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== xl && (xl && e.type === "mousemove" ? (Gu = e.screenX - xl.screenX, Fu = e.screenY - xl.screenY) : Fu = Gu = 0, xl = e), Gu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Fu;
    }
  }), vh = an(Bo), Tw = V({}, Bo, { dataTransfer: 0 }), Nw = an(Tw), Aw = V({}, bl, { relatedTarget: 0 }), Xu = an(Aw), Ow = V({}, Fi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Mw = an(Ow), Dw = V({}, Fi, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Rw = an(Dw), Lw = V({}, Fi, { data: 0 }), wh = an(Lw), Uw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Bw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Iw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Hw(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = Iw[e]) ? !!n[e] : !1;
  }
  function Qu() {
    return Hw;
  }
  var Zw = V({}, bl, {
    key: function(e) {
      if (e.key) {
        var n = Uw[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = Ro(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bw[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Qu,
    charCode: function(e) {
      return e.type === "keypress" ? Ro(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ro(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), $w = an(Zw), qw = V({}, Bo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), kh = an(qw), Vw = V({}, Fi, { submitter: 0 }), Yw = an(Vw), Gw = V({}, bl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qu
  }), Fw = an(Gw), Xw = V({}, Fi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Qw = an(Xw), Kw = V({}, Bo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Pw = an(Kw), Jw = V({}, Fi, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Ww = an(Jw), e2 = [9, 13, 27, 32], Ku = Ci && "CompositionEvent" in window, yl = null;
  Ci && "documentMode" in document && (yl = document.documentMode);
  var t2 = Ci && "TextEvent" in window && !yl, Sh = Ci && (!Ku || yl && 8 < yl && 11 >= yl), zh = " ", _h = !1;
  function jh(e, n) {
    switch (e) {
      case "keyup":
        return e2.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Eh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ya = !1;
  function n2(e, n) {
    switch (e) {
      case "compositionend":
        return Eh(n);
      case "keypress":
        return n.which !== 32 ? null : (_h = !0, zh);
      case "textInput":
        return e = n.data, e === zh && _h ? null : e;
      default:
        return null;
    }
  }
  function i2(e, n) {
    if (ya)
      return e === "compositionend" || !Ku && jh(e, n) ? (e = xh(), Do = Yu = Gi = null, ya = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Sh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var r2 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Ch(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!r2[e.type] : n === "textarea";
  }
  function Th(e, n, r, l) {
    ba ? xa ? xa.push(l) : xa = [l] : ba = l, n = Is(n, "onChange"), 0 < n.length && (r = new Uo(
      "onChange",
      "change",
      null,
      r,
      l
    ), e.push({ event: r, listeners: n }));
  }
  var vl = null, wl = null;
  function a2(e) {
    gb(e, 0);
  }
  function Io(e) {
    var n = hl(e);
    if (ch(n)) return e;
  }
  function Nh(e, n) {
    if (e === "change") return n;
  }
  var Ah = !1;
  if (Ci) {
    var Pu;
    if (Ci) {
      var Ju = "oninput" in document;
      if (!Ju) {
        var Oh = document.createElement("div");
        Oh.setAttribute("oninput", "return;"), Ju = typeof Oh.oninput == "function";
      }
      Pu = Ju;
    } else Pu = !1;
    Ah = Pu && (!document.documentMode || 9 < document.documentMode);
  }
  function Mh() {
    vl && (vl.detachEvent("onpropertychange", Dh), wl = vl = null);
  }
  function Dh(e) {
    if (e.propertyName === "value" && Io(wl)) {
      var n = [];
      Th(
        n,
        wl,
        e,
        $u(e)
      ), bh(a2, n);
    }
  }
  function l2(e, n, r) {
    e === "focusin" ? (Mh(), vl = n, wl = r, vl.attachEvent("onpropertychange", Dh)) : e === "focusout" && Mh();
  }
  function o2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Io(wl);
  }
  function s2(e, n) {
    if (e === "click") return Io(n);
  }
  function u2(e, n) {
    if (e === "input" || e === "change")
      return Io(n);
  }
  function c2(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var kn = typeof Object.is == "function" ? Object.is : c2;
  function kl(e, n) {
    if (kn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var r = Object.keys(e), l = Object.keys(n);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var u = r[l];
      if (!_t.call(n, u) || !kn(e[u], n[u]))
        return !1;
    }
    return !0;
  }
  function Wu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Lh(e, n) {
    var r = Rh(e);
    e = 0;
    for (var l; r; ) {
      if (r.nodeType === 3) {
        if (l = e + r.textContent.length, e <= n && l >= n)
          return { node: r, offset: n - e };
        e = l;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Rh(r);
    }
  }
  function Uh(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Uh(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Bh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = Wu(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof n.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = n.contentWindow;
      else break;
      n = Wu(e.document);
    }
    return n;
  }
  function ec(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var f2 = Ci && "documentMode" in document && 11 >= document.documentMode, va = null, tc = null, Sl = null, nc = !1;
  function Ih(e, n, r) {
    var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    nc || va == null || va !== Wu(l) || (l = va, "selectionStart" in l && ec(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Sl && kl(Sl, l) || (Sl = l, l = Is(tc, "onSelect"), 0 < l.length && (n = new Uo(
      "onSelect",
      "select",
      null,
      n,
      r
    ), e.push({ event: n, listeners: l }), n.target = va)));
  }
  function Ar(e, n) {
    var r = {};
    return r[e.toLowerCase()] = n.toLowerCase(), r["Webkit" + e] = "webkit" + n, r["Moz" + e] = "moz" + n, r;
  }
  var wa = {
    animationend: Ar("Animation", "AnimationEnd"),
    animationiteration: Ar("Animation", "AnimationIteration"),
    animationstart: Ar("Animation", "AnimationStart"),
    transitionrun: Ar("Transition", "TransitionRun"),
    transitionstart: Ar("Transition", "TransitionStart"),
    transitioncancel: Ar("Transition", "TransitionCancel"),
    transitionend: Ar("Transition", "TransitionEnd")
  }, ic = {}, Hh = {};
  Ci && (Hh = document.createElement("div").style, "AnimationEvent" in window || (delete wa.animationend.animation, delete wa.animationiteration.animation, delete wa.animationstart.animation), "TransitionEvent" in window || delete wa.transitionend.transition);
  function Or(e) {
    if (ic[e]) return ic[e];
    if (!wa[e]) return e;
    var n = wa[e], r;
    for (r in n)
      if (n.hasOwnProperty(r) && r in Hh)
        return ic[e] = n[r];
    return e;
  }
  var Zh = Or("animationend"), $h = Or("animationiteration"), qh = Or("animationstart"), d2 = Or("transitionrun"), p2 = Or("transitionstart"), h2 = Or("transitioncancel"), Vh = Or("transitionend"), Yh = /* @__PURE__ */ new Map(), rc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  rc.push("scrollEnd");
  function Jn(e, n) {
    Yh.set(e, n), Nr(n, [e]);
  }
  var m2 = 0;
  function Ti(e, n) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (n.autoName !== null) return n.autoName;
    e = ni.identifierPrefix;
    var r = m2++;
    return e = "_" + e + "t_" + r.toString(32) + "_", n.autoName = e;
  }
  function Gh(e) {
    if (e == null || typeof e == "string")
      return e;
    var n = null, r = Za;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = e[r[l]];
        if (u != null) {
          if (u === "none") return "none";
          n = n == null ? u : n + (" " + u);
        }
      }
    return n ?? e.default;
  }
  function Ni(e, n) {
    return e = Gh(e), n = Gh(n), n == null ? e === "auto" ? null : e : n === "auto" ? null : n;
  }
  var Ho = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Un = [], ka = 0, ac = 0;
  function Zo() {
    for (var e = ka, n = ac = ka = 0; n < e; ) {
      var r = Un[n];
      Un[n++] = null;
      var l = Un[n];
      Un[n++] = null;
      var u = Un[n];
      Un[n++] = null;
      var d = Un[n];
      if (Un[n++] = null, l !== null && u !== null) {
        var y = l.pending;
        y === null ? u.next = u : (u.next = y.next, y.next = u), l.pending = u;
      }
      d !== 0 && Fh(r, u, d);
    }
  }
  function $o(e, n, r, l) {
    Un[ka++] = e, Un[ka++] = n, Un[ka++] = r, Un[ka++] = l, ac |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function lc(e, n, r, l) {
    return $o(e, n, r, l), qo(e);
  }
  function Mr(e, n) {
    return $o(e, null, null, n), qo(e);
  }
  function Fh(e, n, r) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r);
    for (var u = !1, d = e.return; d !== null; )
      d.childLanes |= r, l = d.alternate, l !== null && (l.childLanes |= r), d.tag === 22 && (e = d.stateNode, e === null || e._visibility & 1 || (u = !0)), e = d, d = d.return;
    return e.tag === 3 ? (d = e.stateNode, u && n !== null && (u = 31 - st(r), e = d.hiddenUpdates, l = e[u], l === null ? e[u] = [n] : l.push(n), n.lane = r | 536870912), d) : null;
  }
  function qo(e) {
    if (50 < Yl)
      throw Yl = 0, Os = null, Error(o(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Sa = {};
  function g2(e, n, r, l) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function pn(e, n, r, l) {
    return new g2(e, n, r, l);
  }
  function oc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ai(e, n) {
    var r = e.alternate;
    return r === null ? (r = pn(
      e.tag,
      n,
      e.key,
      e.mode
    ), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = n, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 1206910976, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, n = e.dependencies, r.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.refCleanup = e.refCleanup, r;
  }
  function Xh(e, n) {
    e.flags &= 1206910978;
    var r = e.alternate;
    return r === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type, n = r.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Vo(e, n, r, l, u, d) {
    var y = 0;
    if (l = e, typeof l == "function") oc(l) && (y = 1);
    else if (typeof l == "string")
      y = Vk(
        e,
        r,
        fn.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (l) {
        case qe:
          return e = pn(31, r, n, u), e.elementType = qe, e.lanes = d, e;
        case te:
          return Dr(r.children, u, d, n);
        case re:
          y = 8, u |= 24;
          break;
        case Ae:
          return e = pn(12, r, n, u | 2), e.elementType = Ae, e.lanes = d, e;
        case ce:
          return e = pn(13, r, n, u), e.elementType = ce, e.lanes = d, e;
        case me:
          return e = pn(19, r, n, u), e.elementType = me, e.lanes = d, e;
        case ut:
        case C:
          return e = u | 32, e = pn(30, r, n, e), e.elementType = C, e.lanes = d, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ee:
                y = 10;
                break e;
              case pe:
                y = 9;
                break e;
              case W:
                y = 11;
                break e;
              case Te:
                y = 14;
                break e;
              case z:
                y = 16, l = null;
                break e;
            }
          y = 29, r = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return n = pn(y, r, n, u), n.elementType = e, n.type = l, n.lanes = d, n;
  }
  function Dr(e, n, r, l) {
    return e = pn(7, e, l, n), e.lanes = r, e;
  }
  function sc(e, n, r) {
    return e = pn(6, e, null, n), e.lanes = r, e;
  }
  function Qh(e) {
    var n = pn(18, null, null, 0);
    return n.stateNode = e, n;
  }
  function uc(e, n, r) {
    return n = pn(
      4,
      e.children !== null ? e.children : [],
      e.key,
      n
    ), n.lanes = r, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n;
  }
  var Kh = /* @__PURE__ */ new WeakMap();
  function Bn(e, n) {
    if (typeof e == "object" && e !== null) {
      var r = Kh.get(e);
      return r !== void 0 ? r : (n = {
        value: e,
        source: n,
        stack: yt(n)
      }, Kh.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: yt(n)
    };
  }
  var za = [], _a = 0, Yo = null, zl = 0, In = [], Hn = 0, Xi = null, si = 1, ui = "";
  function Oi(e, n) {
    za[_a++] = zl, za[_a++] = Yo, Yo = e, zl = n;
  }
  function Ph(e, n, r) {
    In[Hn++] = si, In[Hn++] = ui, In[Hn++] = Xi, Xi = e;
    var l = si;
    e = ui;
    var u = 32 - st(l) - 1;
    l &= ~(1 << u), r += 1;
    var d = 32 - st(n) + u;
    if (30 < d) {
      var y = u - u % 5;
      d = (l & (1 << y) - 1).toString(32), l >>= y, u -= y, si = 1 << 32 - st(n) + u | r << u | l, ui = d + e;
    } else
      si = 1 << d | r << u | l, ui = e;
  }
  function Go(e) {
    e.return !== null && (Oi(e, 1), Ph(e, 1, 0));
  }
  function cc(e) {
    for (; e === Yo; )
      Yo = za[--_a], za[_a] = null, zl = za[--_a], za[_a] = null;
    for (; e === Xi; )
      Xi = In[--Hn], In[Hn] = null, ui = In[--Hn], In[Hn] = null, si = In[--Hn], In[Hn] = null;
  }
  function Jh(e, n) {
    In[Hn++] = si, In[Hn++] = ui, In[Hn++] = Xi, si = n.id, ui = n.overflow, Xi = e;
  }
  var Lt = null, at = null, Ue = !1, Qi = null, Zn = !1, fc = Error(o(519));
  function Ki(e) {
    var n = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw _l(Bn(n, e)), fc;
  }
  function Wh(e) {
    var n = e.stateNode, r = e.type, l = e.memoizedProps;
    switch (n[$t] = e, n[dn] = l, r) {
      case "dialog":
        He("cancel", n), He("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        He("load", n);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Fl.length; r++)
          He(Fl[r], n);
        break;
      case "source":
        He("error", n);
        break;
      case "img":
      case "image":
      case "link":
        He("error", n), He("load", n);
        break;
      case "details":
        He("toggle", n);
        break;
      case "input":
        He("invalid", n), fh(
          n,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        He("invalid", n);
        break;
      case "textarea":
        He("invalid", n), ph(n, l.value, l.defaultValue, l.children);
    }
    r = l.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || n.textContent === "" + r || l.suppressHydrationWarning === !0 || vb(n.textContent, r) ? (l.popover != null && (He("beforetoggle", n), He("toggle", n)), l.onScroll != null && He("scroll", n), l.onScrollEnd != null && He("scrollend", n), l.onClick != null && (n.onclick = oi), n = !0) : n = !1, n || Ki(e, !0);
  }
  function Fo(e) {
    for (Lt = e.return; Lt; )
      switch (Lt.tag) {
        case 5:
        case 31:
        case 13:
          Zn = !1;
          return;
        case 27:
        case 3:
          Zn = !0;
          return;
        default:
          Lt = Lt.return;
      }
  }
  function ja(e) {
    if (e !== Lt) return !1;
    if (!Ue) return Fo(e), Ue = !0, !1;
    var n = e.tag, r;
    if ((r = n !== 3 && n !== 27) && ((r = n === 5) && (r = e.type, r = !(r !== "form" && r !== "button") || $f(e.type, e.memoizedProps)), r = !r), r && at && Ki(e), Fo(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      at = Ib(e);
    } else if (n === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      at = Ib(e);
    } else
      n === 27 ? (n = at, dr(e.type) ? (e = Pf, Pf = null, at = e) : at = n) : at = Lt ? qn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Rr() {
    at = Lt = null, Ue = !1;
  }
  function dc() {
    var e = Qi;
    return e !== null && (gn === null ? gn = e : gn.push.apply(
      gn,
      e
    ), Qi = null), e;
  }
  function _l(e) {
    Qi === null ? Qi = [e] : Qi.push(e);
  }
  var pc = ht(null), Lr = null, Mi = null;
  function Pi(e, n, r) {
    Xe(pc, n._currentValue), n._currentValue = r;
  }
  function Di(e) {
    e._currentValue = pc.current, ot(pc);
  }
  function Xo(e, n, r) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === r) break;
      e = e.return;
    }
  }
  function hc(e, n, r, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var d = u.dependencies;
      if (d !== null) {
        var y = u.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var k = d;
          d = u;
          for (var _ = 0; _ < n.length; _++)
            if (k.context === n[_]) {
              d.lanes |= r, k = d.alternate, k !== null && (k.lanes |= r), Xo(
                d.return,
                r,
                e
              ), l || (y = null);
              break e;
            }
          d = k.next;
        }
      } else if (u.tag === 18) {
        if (y = u.return, y === null) throw Error(o(341));
        y.lanes |= r, d = y.alternate, d !== null && (d.lanes |= r), Xo(y, r, e), y = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= r, y = u.alternate, y !== null && (y.lanes |= r), Xo(
          u.return,
          r,
          e
        ), y = u.child, y = y !== null ? y.sibling : null) : y = u.child;
      if (y !== null) y.return = u;
      else
        for (y = u; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (u = y.sibling, u !== null) {
            u.return = y.return, y = u;
            break;
          }
          y = y.return;
        }
      u = y;
    }
  }
  function Ur(e, n, r, l) {
    e = null;
    for (var u = n, d = !1; u !== null; ) {
      if (!d) {
        if ((u.flags & 524288) !== 0) d = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var y = u.alternate;
        if (y === null) throw Error(o(387));
        if (y = y.memoizedProps, y !== null) {
          var k = u.type;
          kn(u.pendingProps.value, y.value) || (e !== null ? e.push(k) : e = [k]);
        }
      } else if (u === Mn.current) {
        if (y = u.alternate, y === null) throw Error(o(387));
        y.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(Pa) : e = [Pa]);
      }
      u = u.return;
    }
    return e !== null && hc(
      n,
      e,
      r,
      l
    ), n.flags |= 262144, e !== null;
  }
  function Qo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!kn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Br(e) {
    Lr = e, Mi = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function qt(e) {
    return em(Lr, e);
  }
  function Ko(e, n) {
    return Lr === null && Br(e), em(e, n);
  }
  function em(e, n) {
    var r = n._currentValue;
    if (n = { context: n, memoizedValue: r, next: null }, Mi === null) {
      if (e === null) throw Error(o(308));
      Mi = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else Mi = Mi.next = n;
    return r;
  }
  var b2 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(r, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(r) {
        return r();
      });
    };
  }, x2 = t.unstable_scheduleCallback, y2 = t.unstable_NormalPriority, Ct = {
    $$typeof: ee,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function mc() {
    return {
      controller: new b2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function jl(e) {
    e.refCount--, e.refCount === 0 && x2(y2, function() {
      e.controller.abort();
    });
  }
  function tm(e, n) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var r = e.transitionTypes;
      for (r === null && (r = e.transitionTypes = []), e = 0; e < n.length; e++) {
        var l = n[e];
        r.indexOf(l) === -1 && r.push(l);
      }
    }
  }
  var El = null;
  function v2(e) {
    var n = e.transitionTypes;
    return e.transitionTypes = null, n;
  }
  var Cl = null, gc = 0, Ir = 0, Ea = null;
  function w2(e, n) {
    if (Cl === null) {
      var r = Cl = [];
      gc = 0, Ir = Mf(), Ea = {
        status: "pending",
        value: void 0,
        then: function(l) {
          r.push(l);
        }
      };
    }
    return gc++, n.then(nm, nm), n;
  }
  function nm() {
    if (--gc === 0 && (El = null, Cl !== null)) {
      Ea !== null && (Ea.status = "fulfilled");
      var e = Cl;
      Cl = null, Ir = 0, Ea = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function k2(e, n) {
    var r = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        r.push(u);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = n;
        for (var u = 0; u < r.length; u++) (0, r[u])(n);
      },
      function(u) {
        for (l.status = "rejected", l.reason = u, u = 0; u < r.length; u++)
          (0, r[u])(void 0);
      }
    ), l;
  }
  var im = fe.S;
  fe.S = function(e, n) {
    if (Qg = Et(), typeof n == "object" && n !== null && typeof n.then == "function" && w2(e, n), El !== null)
      for (var r = Ya; r !== null; )
        tm(r, El), r = r.next;
    if (r = e.types, r !== null) {
      for (var l = Ya; l !== null; )
        tm(l, r), l = l.next;
      if (Ir !== 0) {
        l = El, l === null && (l = El = []);
        for (var u = 0; u < r.length; u++) {
          var d = r[u];
          l.indexOf(d) === -1 && l.push(d);
        }
      }
    }
    im !== null && im(e, n);
  };
  var Hr = ht(null);
  function bc() {
    var e = Hr.current;
    return e !== null ? e : nt.pooledCache;
  }
  function Po(e, n) {
    n === null ? Xe(Hr, Hr.current) : Xe(Hr, n.pool);
  }
  function rm() {
    var e = bc();
    return e === null ? null : { parent: Ct._currentValue, pool: e };
  }
  var Ca = Error(o(460)), xc = Error(o(474)), Jo = Error(o(542)), Wo = { then: function() {
  } };
  function am(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function lm(e, n, r) {
    switch (r = e[r], r === void 0 ? e.push(n) : r !== n && (n.then(oi, oi), n = r), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, sm(e), e === void 0 && !("reason" in n) ? Error(o(600)) : e;
      default:
        if (typeof n.status == "string") n.then(oi, oi);
        else {
          if (e = nt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = n, e.status = "pending", e.then(
            function(l) {
              if (n.status === "pending") {
                var u = n;
                u.status = "fulfilled", u.value = l;
              }
            },
            function(l) {
              if (n.status === "pending") {
                var u = n;
                u.status = "rejected", u.reason = l;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, sm(e), e;
        }
        throw $r = n, Ca;
    }
  }
  function Zr(e) {
    try {
      var n = e._init;
      return n(e._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? ($r = r, Ca) : r;
    }
  }
  var $r = null;
  function om() {
    if ($r === null) throw Error(o(459));
    var e = $r;
    return $r = null, e;
  }
  function sm(e) {
    if (e === Ca || e === Jo)
      throw Error(o(483));
  }
  var Ta = null, Tl = 0;
  function es(e) {
    var n = Tl;
    return Tl += 1, Ta === null && (Ta = []), lm(Ta, e, n);
  }
  function Ji(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function ts(e, n) {
    throw n.$$typeof === ie ? Error(o(525)) : (e = Object.prototype.toString.call(n), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function um(e) {
    function n(D, O) {
      if (e) {
        var B = D.deletions;
        B === null ? (D.deletions = [O], D.flags |= 16) : B.push(O);
      }
    }
    function r(D, O) {
      if (!e) return null;
      for (; O !== null; )
        n(D, O), O = O.sibling;
      return null;
    }
    function l(D) {
      for (var O = /* @__PURE__ */ new Map(); D !== null; )
        D.key === null ? O.set(D.index, D) : O.set(D.key, D), D = D.sibling;
      return O;
    }
    function u(D, O) {
      return D = Ai(D, O), D.index = 0, D.sibling = null, D;
    }
    function d(D, O, B) {
      return D.index = B, e ? (B = D.alternate, B !== null ? (B = B.index, B < O ? (D.flags |= 2, O) : B) : (D.flags |= 134217730, O)) : (D.flags |= 1048576, O);
    }
    function y(D) {
      return e && D.alternate === null && (D.flags |= 134217730), D;
    }
    function k(D, O, B, X) {
      return O === null || O.tag !== 6 ? (O = sc(B, D.mode, X), O.return = D, O) : (O = u(O, B), O.return = D, O);
    }
    function _(D, O, B, X) {
      var de = B.type;
      return de === te ? (D = $(
        D,
        O,
        B.props.children,
        X,
        B.key
      ), Ji(D, B), D) : O !== null && (O.elementType === de || typeof de == "object" && de !== null && de.$$typeof === z && Zr(de) === O.type) ? (O = u(O, B.props), Ji(O, B), O.return = D, O) : (O = Vo(
        B.type,
        B.key,
        B.props,
        null,
        D.mode,
        X
      ), Ji(O, B), O.return = D, O);
    }
    function L(D, O, B, X) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== B.containerInfo || O.stateNode.implementation !== B.implementation ? (O = uc(B, D.mode, X), O.return = D, O) : (O = u(O, B.children || []), O.return = D, O);
    }
    function $(D, O, B, X, de) {
      return O === null || O.tag !== 7 ? (O = Dr(
        B,
        D.mode,
        X,
        de
      ), O.return = D, O) : (O = u(O, B), O.return = D, O);
    }
    function Q(D, O, B) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return O = sc(
          "" + O,
          D.mode,
          B
        ), O.return = D, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case ze:
            return B = Vo(
              O.type,
              O.key,
              O.props,
              null,
              D.mode,
              B
            ), Ji(B, O), B.return = D, B;
          case I:
            return O = uc(
              O,
              D.mode,
              B
            ), O.return = D, O;
          case z:
            return O = Zr(O), Q(D, O, B);
        }
        if (Ee(O) || Z(O))
          return O = Dr(
            O,
            D.mode,
            B,
            null
          ), O.return = D, O;
        if (typeof O.then == "function")
          return Q(D, es(O), B);
        if (O.$$typeof === ee)
          return Q(
            D,
            Ko(D, O),
            B
          );
        ts(D, O);
      }
      return null;
    }
    function M(D, O, B, X) {
      var de = O !== null ? O.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return de !== null ? null : k(D, O, "" + B, X);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case ze:
            return B.key === de ? _(D, O, B, X) : null;
          case I:
            return B.key === de ? L(D, O, B, X) : null;
          case z:
            return B = Zr(B), M(D, O, B, X);
        }
        if (Ee(B) || Z(B))
          return de !== null ? null : $(D, O, B, X, null);
        if (typeof B.then == "function")
          return M(
            D,
            O,
            es(B),
            X
          );
        if (B.$$typeof === ee)
          return M(
            D,
            O,
            Ko(D, B),
            X
          );
        ts(D, B);
      }
      return null;
    }
    function H(D, O, B, X, de) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return D = D.get(B) || null, k(O, D, "" + X, de);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case ze:
            return D = D.get(
              X.key === null ? B : X.key
            ) || null, _(O, D, X, de);
          case I:
            return D = D.get(
              X.key === null ? B : X.key
            ) || null, L(O, D, X, de);
          case z:
            return X = Zr(X), H(
              D,
              O,
              B,
              X,
              de
            );
        }
        if (Ee(X) || Z(X))
          return D = D.get(B) || null, $(O, D, X, de, null);
        if (typeof X.then == "function")
          return H(
            D,
            O,
            B,
            es(X),
            de
          );
        if (X.$$typeof === ee)
          return H(
            D,
            O,
            B,
            Ko(O, X),
            de
          );
        ts(O, X);
      }
      return null;
    }
    function oe(D, O, B, X) {
      for (var de = null, $e = null, ve = O, Ce = O = 0, At = null; ve !== null && Ce < B.length; Ce++) {
        ve.index > Ce ? (At = ve, ve = null) : At = ve.sibling;
        var Ve = M(
          D,
          ve,
          B[Ce],
          X
        );
        if (Ve === null) {
          ve === null && (ve = At);
          break;
        }
        e && ve && Ve.alternate === null && n(D, ve), O = d(Ve, O, Ce), $e === null ? de = Ve : $e.sibling = Ve, $e = Ve, ve = At;
      }
      if (Ce === B.length)
        return r(D, ve), Ue && Oi(D, Ce), de;
      if (ve === null) {
        for (; Ce < B.length; Ce++)
          ve = Q(D, B[Ce], X), ve !== null && (O = d(
            ve,
            O,
            Ce
          ), $e === null ? de = ve : $e.sibling = ve, $e = ve);
        return Ue && Oi(D, Ce), de;
      }
      for (ve = l(ve); Ce < B.length; Ce++)
        At = H(
          ve,
          D,
          Ce,
          B[Ce],
          X
        ), At !== null && (e && (Ve = At.alternate, Ve !== null && ve.delete(Ve.key === null ? Ce : Ve.key)), O = d(
          At,
          O,
          Ce
        ), $e === null ? de = At : $e.sibling = At, $e = At);
      return e && ve.forEach(function(br) {
        return n(D, br);
      }), Ue && Oi(D, Ce), de;
    }
    function be(D, O, B, X) {
      if (B == null) throw Error(o(151));
      for (var de = null, $e = null, ve = O, Ce = O = 0, At = null, Ve = B.next(); ve !== null && !Ve.done; Ce++, Ve = B.next()) {
        ve.index > Ce ? (At = ve, ve = null) : At = ve.sibling;
        var br = M(D, ve, Ve.value, X);
        if (br === null) {
          ve === null && (ve = At);
          break;
        }
        e && ve && br.alternate === null && n(D, ve), O = d(br, O, Ce), $e === null ? de = br : $e.sibling = br, $e = br, ve = At;
      }
      if (Ve.done)
        return r(D, ve), Ue && Oi(D, Ce), de;
      if (ve === null) {
        for (; !Ve.done; Ce++, Ve = B.next())
          Ve = Q(D, Ve.value, X), Ve !== null && (O = d(Ve, O, Ce), $e === null ? de = Ve : $e.sibling = Ve, $e = Ve);
        return Ue && Oi(D, Ce), de;
      }
      for (ve = l(ve); !Ve.done; Ce++, Ve = B.next())
        Ve = H(ve, D, Ce, Ve.value, X), Ve !== null && (e && (At = Ve.alternate, At !== null && ve.delete(
          At.key === null ? Ce : At.key
        )), O = d(Ve, O, Ce), $e === null ? de = Ve : $e.sibling = Ve, $e = Ve);
      return e && ve.forEach(function(nS) {
        return n(D, nS);
      }), Ue && Oi(D, Ce), de;
    }
    function Le(D, O, B, X) {
      if (typeof B == "object" && B !== null && B.type === te && B.key === null && B.props.ref === void 0 && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case ze:
            e: {
              for (var de = B.key; O !== null; ) {
                if (O.key === de) {
                  if (de = B.type, de === te) {
                    if (O.tag === 7) {
                      r(
                        D,
                        O.sibling
                      ), X = u(
                        O,
                        B.props.children
                      ), Ji(X, B), X.return = D, D = X;
                      break e;
                    }
                  } else if (O.elementType === de || typeof de == "object" && de !== null && de.$$typeof === z && Zr(de) === O.type) {
                    r(
                      D,
                      O.sibling
                    ), X = u(O, B.props), Ji(X, B), X.return = D, D = X;
                    break e;
                  }
                  r(D, O);
                  break;
                } else n(D, O);
                O = O.sibling;
              }
              B.type === te ? (X = Dr(
                B.props.children,
                D.mode,
                X,
                B.key
              ), Ji(X, B), X.return = D, D = X) : (X = Vo(
                B.type,
                B.key,
                B.props,
                null,
                D.mode,
                X
              ), Ji(X, B), X.return = D, D = X);
            }
            return y(D);
          case I:
            e: {
              for (de = B.key; O !== null; ) {
                if (O.key === de)
                  if (O.tag === 4 && O.stateNode.containerInfo === B.containerInfo && O.stateNode.implementation === B.implementation) {
                    r(
                      D,
                      O.sibling
                    ), X = u(O, B.children || []), X.return = D, D = X;
                    break e;
                  } else {
                    r(D, O);
                    break;
                  }
                else n(D, O);
                O = O.sibling;
              }
              X = uc(B, D.mode, X), X.return = D, D = X;
            }
            return y(D);
          case z:
            return B = Zr(B), Le(
              D,
              O,
              B,
              X
            );
        }
        if (Ee(B))
          return oe(
            D,
            O,
            B,
            X
          );
        if (Z(B)) {
          if (de = Z(B), typeof de != "function") throw Error(o(150));
          return B = de.call(B), be(
            D,
            O,
            B,
            X
          );
        }
        if (typeof B.then == "function")
          return Le(
            D,
            O,
            es(B),
            X
          );
        if (B.$$typeof === ee)
          return Le(
            D,
            O,
            Ko(D, B),
            X
          );
        ts(D, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, O !== null && O.tag === 6 ? (r(D, O.sibling), X = u(O, B), X.return = D, D = X) : (r(D, O), X = sc(B, D.mode, X), X.return = D, D = X), y(D)) : r(D, O);
    }
    return function(D, O, B, X) {
      try {
        Tl = 0;
        var de = Le(
          D,
          O,
          B,
          X
        );
        return Ta = null, de;
      } catch (ve) {
        if (ve === Ca || ve === Jo) throw ve;
        var $e = pn(29, ve, null, D.mode);
        return $e.lanes = X, $e.return = D, $e;
      }
    };
  }
  var qr = um(!0), cm = um(!1), Wi = !1;
  function yc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function vc(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function er(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function tr(e, n, r) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Qe & 2) !== 0) {
      var u = l.pending;
      return u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n, n = qo(e), Fh(e, null, r), n;
    }
    return $o(e, l, n, r), qo(e);
  }
  function Nl(e, n, r) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (r & 4194048) !== 0)) {
      var l = n.lanes;
      l &= e.pendingLanes, r |= l, n.lanes = r, Pp(e, r);
    }
  }
  function wc(e, n) {
    var r = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, r === l)) {
      var u = null, d = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var y = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          };
          d === null ? u = d = y : d = d.next = y, r = r.next;
        } while (r !== null);
        d === null ? u = d = n : d = d.next = n;
      } else u = d = n;
      r = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: d,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = n : e.next = n, r.lastBaseUpdate = n;
  }
  var kc = !1;
  function Al() {
    if (kc) {
      var e = Ea;
      if (e !== null) throw e;
    }
  }
  function Ol(e, n, r, l) {
    kc = !1;
    var u = e.updateQueue;
    Wi = !1;
    var d = u.firstBaseUpdate, y = u.lastBaseUpdate, k = u.shared.pending;
    if (k !== null) {
      u.shared.pending = null;
      var _ = k, L = _.next;
      _.next = null, y === null ? d = L : y.next = L, y = _;
      var $ = e.alternate;
      $ !== null && ($ = $.updateQueue, k = $.lastBaseUpdate, k !== y && (k === null ? $.firstBaseUpdate = L : k.next = L, $.lastBaseUpdate = _));
    }
    if (d !== null) {
      var Q = u.baseState;
      y = 0, $ = L = _ = null, k = d;
      do {
        var M = k.lane & -536870913, H = M !== k.lane;
        if (H ? (Ze & M) === M : (l & M) === M) {
          M !== 0 && M === Ir && (kc = !0), $ !== null && ($ = $.next = {
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: null,
            next: null
          });
          e: {
            var oe = e, be = k;
            M = n;
            var Le = r;
            switch (be.tag) {
              case 1:
                if (oe = be.payload, typeof oe == "function") {
                  Q = oe.call(Le, Q, M);
                  break e;
                }
                Q = oe;
                break e;
              case 3:
                oe.flags = oe.flags & -65537 | 128;
              case 0:
                if (oe = be.payload, M = typeof oe == "function" ? oe.call(Le, Q, M) : oe, M == null) break e;
                Q = V({}, Q, M);
                break e;
              case 2:
                Wi = !0;
            }
          }
          M = k.callback, M !== null && (e.flags |= 64, H && (e.flags |= 8192), H = u.callbacks, H === null ? u.callbacks = [M] : H.push(M));
        } else
          H = {
            lane: M,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          }, $ === null ? (L = $ = H, _ = Q) : $ = $.next = H, y |= M;
        if (k = k.next, k === null) {
          if (k = u.shared.pending, k === null)
            break;
          H = k, k = H.next, H.next = null, u.lastBaseUpdate = H, u.shared.pending = null;
        }
      } while (!0);
      $ === null && (_ = Q), u.baseState = _, u.firstBaseUpdate = L, u.lastBaseUpdate = $, d === null && (u.shared.lanes = 0), sr |= y, e.lanes = y, e.memoizedState = Q;
    }
  }
  function fm(e, n) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(n);
  }
  function dm(e, n) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++)
        fm(r[e], n);
  }
  var nr = ht(null), ns = ht(0);
  function pm(e, n) {
    e = Ii, Xe(ns, e), Xe(nr, n), Ii = e | n.baseLanes;
  }
  function Sc() {
    Xe(ns, Ii), Xe(nr, nr.current);
  }
  function zc() {
    Ii = ns.current, ot(nr), ot(ns);
  }
  var Vt = ht(null), Jt = null;
  function ir(e) {
    var n = e.alternate;
    Xe(Yt, Yt.current & 1), Xe(Vt, e), Jt === null && (n === null || nr.current !== null || n.memoizedState !== null) && (Jt = e);
  }
  function _c(e) {
    Xe(Yt, Yt.current), Xe(Vt, e), Jt === null && (Jt = e);
  }
  function hm(e) {
    e.tag === 22 ? (Xe(Yt, Yt.current), Xe(Vt, e), Jt === null && (Jt = e)) : rr();
  }
  function rr() {
    Xe(Yt, Yt.current), Xe(Vt, Vt.current);
  }
  function Sn(e) {
    ot(Vt), Jt === e && (Jt = null), ot(Yt);
  }
  var Yt = ht(0);
  function Ml(e, n) {
    Xe(Vt, Vt.current), Xe(Yt, n);
  }
  function jc(e) {
    ot(Yt), ot(Vt), Jt === e && (Jt = null);
  }
  function is(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var r = n.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || Qf(r) || Kf(r)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== "independent") {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Ri = 0, Re = null, tt = null, Tt = null, rs = !1, Na = !1, Vr = !1, as = 0, Dl = 0, Aa = null, S2 = 0;
  function bt() {
    throw Error(o(321));
  }
  function Ec(e, n) {
    if (n === null) return !1;
    for (var r = 0; r < n.length && r < e.length; r++)
      if (!kn(e[r], n[r])) return !1;
    return !0;
  }
  function Cc(e, n, r, l, u, d) {
    return Ri = d, Re = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, fe.H = e === null || e.memoizedState === null ? Pm : Jm, Vr = !1, d = r(l, u), Vr = !1, Na && (d = gm(
      n,
      r,
      l,
      u
    )), mm(e), d;
  }
  function mm(e) {
    fe.H = ds;
    var n = tt !== null && tt.next !== null;
    if (Ri = 0, Tt = tt = Re = null, rs = !1, Dl = 0, Aa = null, n) throw Error(o(300));
    e === null || Nt || (e = e.dependencies, e !== null && Qo(e) && (Nt = !0));
  }
  function gm(e, n, r, l) {
    Re = e;
    var u = 0;
    do {
      if (Na && (Aa = null), Dl = 0, Na = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Tt = tt = null, e.updateQueue != null) {
        var d = e.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      fe.H = A2, d = n(r, l);
    } while (Na);
    return d;
  }
  function z2() {
    var e = fe.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? Rl(n) : n, e = e.useState()[0], (tt !== null ? tt.memoizedState : null) !== e && (Re.flags |= 1024), n;
  }
  function Tc() {
    var e = as !== 0;
    return as = 0, e;
  }
  function Nc(e, n, r) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~r;
  }
  function Ac(e) {
    if (rs) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      rs = !1;
    }
    Ri = 0, Tt = tt = Re = null, Na = !1, Dl = as = 0, Aa = null;
  }
  function ln() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Tt === null ? Re.memoizedState = Tt = e : Tt = Tt.next = e, Tt;
  }
  function wt() {
    if (tt === null) {
      var e = Re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = tt.next;
    var n = Tt === null ? Re.memoizedState : Tt.next;
    if (n !== null)
      Tt = n, tt = e;
    else {
      if (e === null)
        throw Re.alternate === null ? Error(o(467)) : Error(o(310));
      tt = e, e = {
        memoizedState: tt.memoizedState,
        baseState: tt.baseState,
        baseQueue: tt.baseQueue,
        queue: tt.queue,
        next: null
      }, Tt === null ? Re.memoizedState = Tt = e : Tt = Tt.next = e;
    }
    return Tt;
  }
  function ls() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Rl(e) {
    var n = Dl;
    return Dl += 1, Aa === null && (Aa = []), e = lm(Aa, e, n), n = Re, (Tt === null ? n.memoizedState : Tt.next) === null && (n = n.alternate, fe.H = n === null || n.memoizedState === null ? Pm : Jm), e;
  }
  function os(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Rl(e);
      if (e.$$typeof === J) return;
      if (e.$$typeof === ee) return qt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Oc(e) {
    var n = null, r = Re.updateQueue;
    if (r !== null && (n = r.memoCache), n == null) {
      var l = Re.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), r === null && (r = ls(), Re.updateQueue = r), r.memoCache = n, r = n.data[n.index], r === void 0)
      for (r = n.data[n.index] = Array(e), l = 0; l < e; l++)
        r[l] = T;
    return n.index++, r;
  }
  function Li(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function ss(e) {
    var n = wt();
    return Mc(n, tt, e);
  }
  function Mc(e, n, r) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = r;
    var u = e.baseQueue, d = l.pending;
    if (d !== null) {
      if (u !== null) {
        var y = u.next;
        u.next = d.next, d.next = y;
      }
      n.baseQueue = u = d, l.pending = null;
    }
    if (d = e.baseState, u === null) e.memoizedState = d;
    else {
      n = u.next;
      var k = y = null, _ = null, L = n, $ = !1;
      do {
        var Q = L.lane & -536870913;
        if (Q !== L.lane ? (Ze & Q) === Q : (Ri & Q) === Q) {
          var M = L.revertLane;
          if (M === 0)
            _ !== null && (_ = _.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            }), Q === Ir && ($ = !0);
          else if ((Ri & M) === M) {
            L = L.next, M === Ir && ($ = !0);
            continue;
          } else
            Q = {
              lane: 0,
              revertLane: L.revertLane,
              gesture: null,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            }, _ === null ? (k = _ = Q, y = d) : _ = _.next = Q, Re.lanes |= M, sr |= M;
          Q = L.action, Vr && r(d, Q), d = L.hasEagerState ? L.eagerState : r(d, Q);
        } else
          M = {
            lane: Q,
            revertLane: L.revertLane,
            gesture: L.gesture,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          }, _ === null ? (k = _ = M, y = d) : _ = _.next = M, Re.lanes |= Q, sr |= Q;
        L = L.next;
      } while (L !== null && L !== n);
      if (_ === null ? y = d : _.next = k, !kn(d, e.memoizedState) && (Nt = !0, $ && (r = Ea, r !== null)))
        throw r;
      e.memoizedState = d, e.baseState = y, e.baseQueue = _, l.lastRenderedState = d;
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Dc(e) {
    var n = wt(), r = n.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var l = r.dispatch, u = r.pending, d = n.memoizedState;
    if (u !== null) {
      r.pending = null;
      var y = u = u.next;
      do
        d = e(d, y.action), y = y.next;
      while (y !== u);
      kn(d, n.memoizedState) || (Nt = !0), n.memoizedState = d, n.baseQueue === null && (n.baseState = d), r.lastRenderedState = d;
    }
    return [d, l];
  }
  function bm(e, n, r) {
    var l = Re, u = wt(), d = Ue;
    if (d) {
      if (r === void 0) throw Error(o(407));
      r = r();
    } else r = n();
    var y = !kn(
      (tt || u).memoizedState,
      r
    );
    if (y && (u.memoizedState = r, Nt = !0), u = u.queue, Uc(vm.bind(null, l, u, e), [
      e
    ]), e = u.getSnapshot !== n || y || Tt !== null && (Tt.memoizedState.tag & 1) !== 0, Oa(
      e ? 9 : 8,
      { destroy: void 0 },
      ym.bind(null, l, u, r, n),
      null
    ), e) {
      if (l.flags |= 2048, nt === null) throw Error(o(349));
      d || (Ri & 127) !== 0 || xm(l, n, r);
    }
    return r;
  }
  function xm(e, n, r) {
    e.flags |= 16384, e = { getSnapshot: n, value: r }, n = Re.updateQueue, n === null ? (n = ls(), Re.updateQueue = n, n.stores = [e]) : (r = n.stores, r === null ? n.stores = [e] : r.push(e));
  }
  function ym(e, n, r, l) {
    n.value = r, n.getSnapshot = l, wm(n) && km(e);
  }
  function vm(e, n, r) {
    return r(function() {
      wm(n) && km(e);
    });
  }
  function wm(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var r = n();
      return !kn(e, r);
    } catch {
      return !0;
    }
  }
  function km(e) {
    var n = Mr(e, 2);
    n !== null && bn(n, e, 2);
  }
  function Rc(e) {
    var n = ln();
    if (typeof e == "function") {
      var r = e;
      if (e = r(), Vr) {
        vt(!0);
        try {
          r();
        } finally {
          vt(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Li,
      lastRenderedState: e
    }, n;
  }
  function Sm(e, n, r, l) {
    return e.baseState = r, Mc(
      e,
      tt,
      typeof l == "function" ? l : Li
    );
  }
  function _2(e, n, r, l, u) {
    if (fs(e)) throw Error(o(485));
    if (e = n.action, e !== null) {
      var d = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          d.listeners.push(y);
        }
      };
      fe.T !== null ? r(!0) : d.isTransition = !1, l(d), r = n.pending, r === null ? (d.next = n.pending = d, zm(n, d)) : (d.next = r.next, n.pending = r.next = d);
    }
  }
  function zm(e, n) {
    var r = n.action, l = n.payload, u = e.state;
    if (n.isTransition) {
      var d = fe.T, y = {};
      y.types = d !== null ? d.types : null, fe.T = y;
      try {
        var k = r(u, l), _ = fe.S;
        _ !== null && _(y, k), _m(e, n, k);
      } catch (L) {
        Lc(e, n, L);
      } finally {
        d !== null && y.types !== null && (d.types = y.types), fe.T = d;
      }
    } else
      try {
        d = r(u, l), _m(e, n, d);
      } catch (L) {
        Lc(e, n, L);
      }
  }
  function _m(e, n, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(
      function(l) {
        jm(e, n, l);
      },
      function(l) {
        return Lc(e, n, l);
      }
    ) : jm(e, n, r);
  }
  function jm(e, n, r) {
    n.status = "fulfilled", n.value = r, Em(n), e.state = r, n = e.pending, n !== null && (r = n.next, r === n ? e.pending = null : (r = r.next, n.next = r, zm(e, r)));
  }
  function Lc(e, n, r) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        n.status = "rejected", n.reason = r, Em(n), n = n.next;
      while (n !== l);
    }
    e.action = null;
  }
  function Em(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Cm(e, n) {
    return n;
  }
  function Tm(e, n) {
    if (Ue) {
      var r = nt.formState;
      if (r !== null) {
        e: {
          var l = Re;
          if (Ue) {
            if (at) {
              t: {
                for (var u = at, d = Zn; u.nodeType !== 8; ) {
                  if (!d) {
                    u = null;
                    break t;
                  }
                  if (u = qn(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                d = u.data, u = d === "F!" || d === "F" ? u : null;
              }
              if (u) {
                at = qn(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            Ki(l);
          }
          l = !1;
        }
        l && (n = r[0]);
      }
    }
    return r = ln(), r.memoizedState = r.baseState = n, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cm,
      lastRenderedState: n
    }, r.queue = l, r = Xm.bind(
      null,
      Re,
      l
    ), l.dispatch = r, l = Rc(!1), d = $c.bind(
      null,
      Re,
      !1,
      l.queue
    ), l = ln(), u = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = u, r = _2.bind(
      null,
      Re,
      u,
      d,
      r
    ), u.dispatch = r, l.memoizedState = e, [n, r, !1];
  }
  function Nm(e) {
    var n = wt();
    return Am(n, tt, e);
  }
  function Am(e, n, r) {
    if (n = Mc(
      e,
      n,
      Cm
    )[0], e = ss(Li)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var l = Rl(n);
      } catch (y) {
        throw y === Ca ? Jo : y;
      }
    else l = n;
    n = wt();
    var u = n.queue, d = u.dispatch;
    return r !== n.memoizedState && (Re.flags |= 2048, Oa(
      9,
      { destroy: void 0 },
      j2.bind(null, u, r),
      null
    )), [l, d, e];
  }
  function j2(e, n) {
    e.action = n;
  }
  function Om(e) {
    var n = wt(), r = tt;
    if (r !== null)
      return Am(n, r, e);
    wt(), n = n.memoizedState, r = wt();
    var l = r.queue.dispatch;
    return r.memoizedState = e, [n, l, !1];
  }
  function Oa(e, n, r, l) {
    return e = { tag: e, create: r, deps: l, inst: n, next: null }, n = Re.updateQueue, n === null && (n = ls(), Re.updateQueue = n), r = n.lastEffect, r === null ? n.lastEffect = e.next = e : (l = r.next, r.next = e, e.next = l, n.lastEffect = e), e;
  }
  function Mm() {
    return wt().memoizedState;
  }
  function us(e, n, r, l) {
    var u = ln();
    Re.flags |= e, u.memoizedState = Oa(
      1 | n,
      { destroy: void 0 },
      r,
      l === void 0 ? null : l
    );
  }
  function cs(e, n, r, l) {
    var u = wt();
    l = l === void 0 ? null : l;
    var d = u.memoizedState.inst;
    tt !== null && l !== null && Ec(l, tt.memoizedState.deps) ? u.memoizedState = Oa(n, d, r, l) : (Re.flags |= e, u.memoizedState = Oa(
      1 | n,
      d,
      r,
      l
    ));
  }
  function Dm(e, n) {
    us(8390656, 8, e, n);
  }
  function Uc(e, n) {
    cs(2048, 8, e, n);
  }
  function E2(e) {
    Re.flags |= 4;
    var n = Re.updateQueue;
    if (n === null)
      n = ls(), Re.updateQueue = n, n.events = [e];
    else {
      var r = n.events;
      r === null ? n.events = [e] : r.push(e);
    }
  }
  function Rm(e) {
    var n = wt().memoizedState;
    return E2({ ref: n, nextImpl: e }), function() {
      if ((Qe & 2) !== 0) throw Error(o(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Lm(e, n) {
    return cs(4, 2, e, n);
  }
  function Um(e, n) {
    return cs(4, 4, e, n);
  }
  function Bm(e, n) {
    if (typeof n == "function") {
      e = e();
      var r = n(e);
      return function() {
        typeof r == "function" ? r() : n(null);
      };
    }
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function Im(e, n, r) {
    r = r != null ? r.concat([e]) : null, cs(4, 4, Bm.bind(null, n, e), r);
  }
  function Bc() {
  }
  function Hm(e, n) {
    var r = wt();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    return n !== null && Ec(n, l[1]) ? l[0] : (r.memoizedState = [e, n], e);
  }
  function Zm(e, n) {
    var r = wt();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    if (n !== null && Ec(n, l[1]))
      return l[0];
    if (l = e(), Vr) {
      vt(!0);
      try {
        e();
      } finally {
        vt(!1);
      }
    }
    return r.memoizedState = [l, n], l;
  }
  function Ic(e, n, r) {
    return r === void 0 || (Ri & 1073741824) !== 0 && (Ze & 261930) === 0 ? e.memoizedState = n : (e.memoizedState = r, e = Pg(), Re.lanes |= e, sr |= e, r);
  }
  function $m(e, n, r, l) {
    return kn(r, n) ? r : nr.current !== null ? (e = Ic(e, r, l), kn(e, n) || (Nt = !0), e) : (Ri & 106) === 0 || (Ri & 1073741824) !== 0 && (Ze & 261930) === 0 ? (Nt = !0, e.memoizedState = r) : (e = Pg(), Re.lanes |= e, sr |= e, n);
  }
  function qm(e, n, r, l, u) {
    var d = _e.p;
    _e.p = d !== 0 && 8 > d ? d : 8;
    var y = fe.T, k = {};
    k.types = y !== null ? y.types : null, fe.T = k, $c(e, !1, n, r);
    try {
      var _ = u(), L = fe.S;
      if (L !== null && L(k, _), _ !== null && typeof _ == "object" && typeof _.then == "function") {
        var $ = k2(
          _,
          l
        );
        Ll(
          e,
          n,
          $,
          En(e)
        );
      } else
        Ll(
          e,
          n,
          l,
          En(e)
        );
    } catch (Q) {
      Ll(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: Q },
        En()
      );
    } finally {
      _e.p = d, y !== null && k.types !== null && (y.types = k.types), fe.T = y;
    }
  }
  function C2() {
  }
  function Hc(e, n, r, l) {
    if (e.tag !== 5) throw Error(o(476));
    var u = Vm(e).queue;
    qm(
      e,
      u,
      n,
      It,
      r === null ? C2 : function() {
        return Ym(e), r(l);
      }
    );
  }
  function Vm(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: It,
      baseState: It,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Li,
        lastRenderedState: It
      },
      next: null
    };
    var r = {};
    return n.next = {
      memoizedState: r,
      baseState: r,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Li,
        lastRenderedState: r
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function Ym(e) {
    var n = Vm(e);
    n.next === null && (n = e.alternate.memoizedState), Ll(
      e,
      n.next.queue,
      {},
      En()
    );
  }
  function Zc() {
    return qt(Pa);
  }
  function Gm() {
    return wt().memoizedState;
  }
  function Fm() {
    return wt().memoizedState;
  }
  function T2(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var r = En();
          e = er(r);
          var l = tr(n, e, r);
          l !== null && (bn(l, n, r), Nl(l, n, r)), n = { cache: mc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function N2(e, n, r) {
    var l = En();
    r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, fs(e) ? Qm(n, r) : (r = lc(e, n, r, l), r !== null && (bn(r, e, l), Km(r, n, l)));
  }
  function Xm(e, n, r) {
    var l = En();
    Ll(e, n, r, l);
  }
  function Ll(e, n, r, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (fs(e)) Qm(n, u);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = n.lastRenderedReducer, d !== null))
        try {
          var y = n.lastRenderedState, k = d(y, r);
          if (u.hasEagerState = !0, u.eagerState = k, kn(k, y))
            return $o(e, n, u, 0), nt === null && Zo(), !1;
        } catch {
        }
      if (r = lc(e, n, u, l), r !== null)
        return bn(r, e, l), Km(r, n, l), !0;
    }
    return !1;
  }
  function $c(e, n, r, l) {
    if (l = {
      lane: 2,
      revertLane: Mf(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, fs(e)) {
      if (n) throw Error(o(479));
    } else
      n = lc(
        e,
        r,
        l,
        2
      ), n !== null && bn(n, e, 2);
  }
  function fs(e) {
    var n = e.alternate;
    return e === Re || n !== null && n === Re;
  }
  function Qm(e, n) {
    Na = rs = !0;
    var r = e.pending;
    r === null ? n.next = n : (n.next = r.next, r.next = n), e.pending = n;
  }
  function Km(e, n, r) {
    if ((r & 4194048) !== 0) {
      var l = n.lanes;
      l &= e.pendingLanes, r |= l, n.lanes = r, Pp(e, r);
    }
  }
  var ds = {
    readContext: qt,
    use: os,
    useCallback: bt,
    useContext: bt,
    useEffect: bt,
    useImperativeHandle: bt,
    useLayoutEffect: bt,
    useInsertionEffect: bt,
    useMemo: bt,
    useReducer: bt,
    useRef: bt,
    useState: bt,
    useDebugValue: bt,
    useDeferredValue: bt,
    useTransition: bt,
    useSyncExternalStore: bt,
    useId: bt,
    useHostTransitionStatus: bt,
    useFormState: bt,
    useActionState: bt,
    useOptimistic: bt,
    useMemoCache: bt,
    useCacheRefresh: bt,
    useEffectEvent: bt
  }, Pm = {
    readContext: qt,
    use: os,
    useCallback: function(e, n) {
      return ln().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: qt,
    useEffect: Dm,
    useImperativeHandle: function(e, n, r) {
      r = r != null ? r.concat([e]) : null, us(
        4194308,
        4,
        Bm.bind(null, n, e),
        r
      );
    },
    useLayoutEffect: function(e, n) {
      return us(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      us(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var r = ln();
      n = n === void 0 ? null : n;
      var l = e();
      if (Vr) {
        vt(!0);
        try {
          e();
        } finally {
          vt(!1);
        }
      }
      return r.memoizedState = [l, n], l;
    },
    useReducer: function(e, n, r) {
      var l = ln();
      if (r !== void 0) {
        var u = r(n);
        if (Vr) {
          vt(!0);
          try {
            r(n);
          } finally {
            vt(!1);
          }
        }
      } else u = n;
      return l.memoizedState = l.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, l.queue = e, e = e.dispatch = N2.bind(
        null,
        Re,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var n = ln();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Rc(e);
      var n = e.queue, r = Xm.bind(null, Re, n);
      return n.dispatch = r, [e.memoizedState, r];
    },
    useDebugValue: Bc,
    useDeferredValue: function(e, n) {
      var r = ln();
      return Ic(r, e, n);
    },
    useTransition: function() {
      var e = Rc(!1);
      return e = qm.bind(
        null,
        Re,
        e.queue,
        !0,
        !1
      ), ln().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, r) {
      var l = Re, u = ln();
      if (Ue) {
        if (r === void 0)
          throw Error(o(407));
        r = r();
      } else {
        if (r = n(), nt === null)
          throw Error(o(349));
        (Ze & 127) !== 0 || xm(l, n, r);
      }
      u.memoizedState = r;
      var d = { value: r, getSnapshot: n };
      return u.queue = d, Dm(vm.bind(null, l, d, e), [
        e
      ]), l.flags |= 2048, Oa(
        9,
        { destroy: void 0 },
        ym.bind(
          null,
          l,
          d,
          r,
          n
        ),
        null
      ), r;
    },
    useId: function() {
      var e = ln(), n = nt.identifierPrefix;
      if (Ue) {
        var r = ui, l = si;
        r = (l & ~(1 << 32 - st(l) - 1)).toString(32) + r, n = "_" + n + "R_" + r, r = as++, 0 < r && (n += "H" + r.toString(32)), n += "_";
      } else
        r = S2++, n = "_" + n + "r_" + r.toString(32) + "_";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Zc,
    useFormState: Tm,
    useActionState: Tm,
    useOptimistic: function(e) {
      var n = ln();
      n.memoizedState = n.baseState = e;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = r, n = $c.bind(
        null,
        Re,
        !0,
        r
      ), r.dispatch = n, [e, n];
    },
    useMemoCache: Oc,
    useCacheRefresh: function() {
      return ln().memoizedState = T2.bind(
        null,
        Re
      );
    },
    useEffectEvent: function(e) {
      var n = ln(), r = { impl: e };
      return n.memoizedState = r, function() {
        if ((Qe & 2) !== 0)
          throw Error(o(440));
        return r.impl.apply(void 0, arguments);
      };
    }
  }, Jm = {
    readContext: qt,
    use: os,
    useCallback: Hm,
    useContext: qt,
    useEffect: Uc,
    useImperativeHandle: Im,
    useInsertionEffect: Lm,
    useLayoutEffect: Um,
    useMemo: Zm,
    useReducer: ss,
    useRef: Mm,
    useState: function() {
      return ss(Li);
    },
    useDebugValue: Bc,
    useDeferredValue: function(e, n) {
      var r = wt();
      return $m(
        r,
        tt.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = ss(Li)[0], n = wt().memoizedState;
      return [
        typeof e == "boolean" ? e : Rl(e),
        n
      ];
    },
    useSyncExternalStore: bm,
    useId: Gm,
    useHostTransitionStatus: Zc,
    useFormState: Nm,
    useActionState: Nm,
    useOptimistic: function(e, n) {
      var r = wt();
      return Sm(r, tt, e, n);
    },
    useMemoCache: Oc,
    useCacheRefresh: Fm,
    useEffectEvent: Rm
  }, A2 = {
    readContext: qt,
    use: os,
    useCallback: Hm,
    useContext: qt,
    useEffect: Uc,
    useImperativeHandle: Im,
    useInsertionEffect: Lm,
    useLayoutEffect: Um,
    useMemo: Zm,
    useReducer: Dc,
    useRef: Mm,
    useState: function() {
      return Dc(Li);
    },
    useDebugValue: Bc,
    useDeferredValue: function(e, n) {
      var r = wt();
      return tt === null ? Ic(r, e, n) : $m(
        r,
        tt.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Dc(Li)[0], n = wt().memoizedState;
      return [
        typeof e == "boolean" ? e : Rl(e),
        n
      ];
    },
    useSyncExternalStore: bm,
    useId: Gm,
    useHostTransitionStatus: Zc,
    useFormState: Om,
    useActionState: Om,
    useOptimistic: function(e, n) {
      var r = wt();
      return tt !== null ? Sm(r, tt, e, n) : (r.baseState = e, [e, r.queue.dispatch]);
    },
    useMemoCache: Oc,
    useCacheRefresh: Fm,
    useEffectEvent: Rm
  };
  function qc(e, n, r, l) {
    n = e.memoizedState, r = r(l, n), r = r == null ? n : V({}, n, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Vc = {
    enqueueSetState: function(e, n, r) {
      e = e._reactInternals;
      var l = En(), u = er(l);
      u.payload = n, r != null && (u.callback = r), n = tr(e, u, l), n !== null && (bn(n, e, l), Nl(n, e, l));
    },
    enqueueReplaceState: function(e, n, r) {
      e = e._reactInternals;
      var l = En(), u = er(l);
      u.tag = 1, u.payload = n, r != null && (u.callback = r), n = tr(e, u, l), n !== null && (bn(n, e, l), Nl(n, e, l));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var r = En(), l = er(r);
      l.tag = 2, n != null && (l.callback = n), n = tr(e, l, r), n !== null && (bn(n, e, r), Nl(n, e, r));
    }
  };
  function Wm(e, n, r, l, u, d, y) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, d, y) : n.prototype && n.prototype.isPureReactComponent ? !kl(r, l) || !kl(u, d) : !0;
  }
  function eg(e, n, r, l) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(r, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(r, l), n.state !== e && Vc.enqueueReplaceState(n, n.state, null);
  }
  function Yr(e, n) {
    var r = n;
    if ("ref" in n) {
      r = {};
      for (var l in n)
        l !== "ref" && (r[l] = n[l]);
    }
    if (e = e.defaultProps) {
      r === n && (r = V({}, r));
      for (var u in e)
        r[u] === void 0 && (r[u] = e[u]);
    }
    return r;
  }
  function tg(e) {
    Ho(e);
  }
  function ng(e) {
    console.error(e);
  }
  function ig(e) {
    Ho(e);
  }
  function ps(e, n) {
    try {
      var r = e.onUncaughtError;
      r(n.value, { componentStack: n.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function rg(e, n, r) {
    try {
      var l = e.onCaughtError;
      l(r.value, {
        componentStack: r.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Yc(e, n, r) {
    return r = er(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      ps(e, n);
    }, r;
  }
  function ag(e) {
    return e = er(e), e.tag = 3, e;
  }
  function lg(e, n, r, l) {
    var u = r.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = l.value;
      e.payload = function() {
        return u(d);
      }, e.callback = function() {
        rg(n, r, l);
      };
    }
    var y = r.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
      rg(n, r, l), typeof u != "function" && (ur === null ? ur = /* @__PURE__ */ new Set([this]) : ur.add(this));
      var k = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: k !== null ? k : ""
      });
    });
  }
  function O2(e, n, r, l, u) {
    if (r.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (n = r.alternate, n !== null && Ur(
        n,
        r,
        u,
        !0
      ), r = Vt.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
          case 19:
            return Jt === null ? Ds() : r.alternate === null && xt === 0 && (xt = 3), r.flags &= -257, r.flags |= 65536, r.lanes = u, l === Wo ? r.flags |= 16384 : (n = r.updateQueue, n === null ? r.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), Nf(e, l, u)), !1;
          case 22:
            return r.flags |= 65536, l === Wo ? r.flags |= 16384 : (n = r.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, r.updateQueue = n) : (r = n.retryQueue, r === null ? n.retryQueue = /* @__PURE__ */ new Set([l]) : r.add(l)), Nf(e, l, u)), !1;
        }
        throw Error(o(435, r.tag));
      }
      return Nf(e, l, u), Ds(), !1;
    }
    if (Ue)
      return n = Vt.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = u, l !== fc && (e = Error(o(422), { cause: l }), _l(Bn(e, r)))) : (l !== fc && (n = Error(o(423), {
        cause: l
      }), _l(
        Bn(n, r)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, l = Bn(l, r), u = Yc(
        e.stateNode,
        l,
        u
      ), wc(e, u), xt !== 4 && (xt = 2)), !1;
    var d = Error(o(520), { cause: l });
    if (d = Bn(d, r), Vl === null ? Vl = [d] : Vl.push(d), xt !== 4 && (xt = 2), n === null) return !0;
    l = Bn(l, r), r = n;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, e = u & -u, r.lanes |= e, e = Yc(r.stateNode, l, e), wc(r, e), !1;
        case 1:
          if (n = r.type, d = r.stateNode, (r.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ur === null || !ur.has(d))))
            return r.flags |= 65536, u &= -u, r.lanes |= u, u = ag(u), lg(
              u,
              e,
              r,
              l
            ), wc(r, u), !1;
          break;
        case 22:
          if (r.memoizedState !== null)
            return r.flags |= 65536, !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var Gc = Error(o(461)), Nt = !1;
  function Mt(e, n, r, l) {
    n.child = e === null ? cm(n, null, r, l) : qr(
      n,
      e.child,
      r,
      l
    );
  }
  function og(e, n, r, l, u) {
    r = r.render;
    var d = n.ref;
    if ("ref" in l) {
      var y = {};
      for (var k in l)
        k !== "ref" && (y[k] = l[k]);
    } else y = l;
    return Br(n), l = Cc(
      e,
      n,
      r,
      y,
      d,
      u
    ), k = Tc(), e !== null && !Nt ? (Nc(e, n, u), Ui(e, n, u)) : (Ue && k && Go(n), n.flags |= 1, Mt(e, n, l, u), n.child);
  }
  function sg(e, n, r, l, u) {
    if (e === null) {
      var d = r.type;
      return typeof d == "function" && !oc(d) && d.defaultProps === void 0 && r.compare === null ? (n.tag = 15, n.type = d, ug(
        e,
        n,
        d,
        l,
        u
      )) : (e = Vo(
        r.type,
        null,
        l,
        n,
        n.mode,
        u
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (d = e.child, !ef(e, u)) {
      var y = d.memoizedProps;
      if (r = r.compare, r = r !== null ? r : kl, r(y, l) && e.ref === n.ref)
        return Ui(e, n, u);
    }
    return n.flags |= 1, e = Ai(d, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function ug(e, n, r, l, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (kl(d, l) && e.ref === n.ref)
        if (Nt = !1, n.pendingProps = l = d, ef(e, u))
          (e.flags & 131072) !== 0 && (Nt = !0);
        else
          return n.lanes = e.lanes, Ui(e, n, u);
    }
    return Fc(
      e,
      n,
      r,
      l,
      u
    );
  }
  function cg(e, n, r, l) {
    var u = l.children, d = e !== null ? e.memoizedState : null;
    if (e === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (d = d !== null ? d.baseLanes | r : r, e !== null) {
          for (l = n.child = e.child, u = 0; l !== null; )
            u = u | l.lanes | l.childLanes, l = l.sibling;
          l = u & ~d;
        } else l = 0, n.child = null;
        return fg(
          e,
          n,
          d,
          r,
          l
        );
      }
      if ((r & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Po(
          n,
          d !== null ? d.cachePool : null
        ), d !== null ? pm(n, d) : Sc(), hm(n);
      else
        return l = n.lanes = 536870912, fg(
          e,
          n,
          d !== null ? d.baseLanes | r : r,
          r,
          l
        );
    } else
      d !== null ? (Po(n, d.cachePool), pm(n, d), rr(), n.memoizedState = null) : (e !== null && Po(n, null), Sc(), rr());
    return Mt(e, n, u, r), n.child;
  }
  function Ul(e, n) {
    return e !== null && e.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function fg(e, n, r, l, u) {
    var d = bc();
    return d = d === null ? null : { parent: Ct._currentValue, pool: d }, n.memoizedState = {
      baseLanes: r,
      cachePool: d
    }, e !== null && Po(n, null), Sc(), hm(n), e !== null && Ur(e, n, l, !0), n.childLanes = u, null;
  }
  function hs(e, n) {
    return n = ms(
      { mode: n.mode, children: n.children },
      e.mode
    ), n.ref = e.ref, e.child = n, n.return = e, n;
  }
  function dg(e, n, r) {
    return qr(n, e.child, null, r), e = hs(n, n.pendingProps), e.flags |= 2, Sn(n), n.memoizedState = null, e;
  }
  function M2(e, n, r) {
    var l = n.pendingProps, u = (n.flags & 128) !== 0;
    if (n.flags &= -129, e === null) {
      if (Ue) {
        if (l.mode === "hidden")
          return e = hs(n, l), n.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, Ul(null, e);
        if (_c(n), (e = at) ? (e = Bb(
          e,
          Zn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (n.memoizedState = {
          dehydrated: e,
          treeContext: Xi !== null ? { id: si, overflow: ui } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = Qh(e), r.return = n, n.child = r, Lt = n, at = null)) : e = null, e === null) throw Ki(n);
        return n.lanes = 536870912, null;
      }
      return hs(n, l);
    }
    var d = e.memoizedState;
    if (d !== null) {
      var y = d.dehydrated;
      if (_c(n), u)
        if (n.flags & 256)
          n.flags &= -257, n = dg(
            e,
            n,
            r
          );
        else if (n.memoizedState !== null)
          n.child = e.child, n.flags |= 128, n = null;
        else throw Error(o(558));
      else if (Nt || Ur(e, n, r, !1), u = (r & e.childLanes) !== 0, Nt || u) {
        if (nr.current === null) {
          if (l = nt, l !== null && (y = Jp(l, r), y !== 0 && y !== d.retryLane))
            throw d.retryLane = y, Mr(e, y), bn(l, e, y), Gc;
          Ds();
        }
        n = dg(
          e,
          n,
          r
        );
      } else
        e = d.treeContext, at = qn(y.nextSibling), Lt = n, Ue = !0, Qi = null, Zn = !1, e !== null && Jh(n, e), n = hs(n, l), n.flags |= 134221824;
      return n;
    }
    return e = Ai(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = n.ref, n.child = e, e.return = n, e;
  }
  function Ma(e, n) {
    var r = n.ref;
    if (r === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object")
        throw Error(o(284));
      (e === null || e.ref !== r) && (n.flags |= 4194816);
    }
  }
  function Fc(e, n, r, l, u) {
    return Br(n), r = Cc(
      e,
      n,
      r,
      l,
      void 0,
      u
    ), l = Tc(), e !== null && !Nt ? (Nc(e, n, u), Ui(e, n, u)) : (Ue && l && Go(n), n.flags |= 1, Mt(e, n, r, u), n.child);
  }
  function pg(e, n, r, l, u, d) {
    return Br(n), n.updateQueue = null, r = gm(
      n,
      l,
      r,
      u
    ), mm(e), l = Tc(), e !== null && !Nt ? (Nc(e, n, d), Ui(e, n, d)) : (Ue && l && Go(n), n.flags |= 1, Mt(e, n, r, d), n.child);
  }
  function hg(e, n, r, l, u) {
    if (Br(n), n.stateNode === null) {
      var d = Sa, y = r.contextType;
      typeof y == "object" && y !== null && (d = qt(y)), d = new r(l, d), n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Vc, n.stateNode = d, d._reactInternals = n, d = n.stateNode, d.props = l, d.state = n.memoizedState, d.refs = {}, yc(n), y = r.contextType, d.context = typeof y == "object" && y !== null ? qt(y) : Sa, d.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (qc(
        n,
        r,
        y,
        l
      ), d.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (y = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), y !== d.state && Vc.enqueueReplaceState(d, d.state, null), Ol(n, l, d, u), Al(), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
    } else if (e === null) {
      d = n.stateNode;
      var k = n.memoizedProps, _ = Yr(r, k);
      d.props = _;
      var L = d.context, $ = r.contextType;
      y = Sa, typeof $ == "object" && $ !== null && (y = qt($));
      var Q = r.getDerivedStateFromProps;
      $ = typeof Q == "function" || typeof d.getSnapshotBeforeUpdate == "function", k = n.pendingProps !== k, $ || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (k || L !== y) && eg(
        n,
        d,
        l,
        y
      ), Wi = !1;
      var M = n.memoizedState;
      d.state = M, Ol(n, l, d, u), Al(), L = n.memoizedState, k || M !== L || Wi ? (typeof Q == "function" && (qc(
        n,
        r,
        Q,
        l
      ), L = n.memoizedState), (_ = Wi || Wm(
        n,
        r,
        _,
        l,
        M,
        L,
        y
      )) ? ($ || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = L), d.props = l, d.state = L, d.context = y, l = _) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      d = n.stateNode, vc(e, n), y = n.memoizedProps, $ = Yr(r, y), d.props = $, Q = n.pendingProps, M = d.context, L = r.contextType, _ = Sa, typeof L == "object" && L !== null && (_ = qt(L)), k = r.getDerivedStateFromProps, (L = typeof k == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y !== Q || M !== _) && eg(
        n,
        d,
        l,
        _
      ), Wi = !1, M = n.memoizedState, d.state = M, Ol(n, l, d, u), Al();
      var H = n.memoizedState;
      y !== Q || M !== H || Wi || e !== null && e.dependencies !== null && Qo(e.dependencies) ? (typeof k == "function" && (qc(
        n,
        r,
        k,
        l
      ), H = n.memoizedState), ($ = Wi || Wm(
        n,
        r,
        $,
        l,
        M,
        H,
        _
      ) || e !== null && e.dependencies !== null && Qo(e.dependencies)) ? (L || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, H, _), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
        l,
        H,
        _
      )), typeof d.componentDidUpdate == "function" && (n.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = H), d.props = l, d.state = H, d.context = _, l = $) : (typeof d.componentDidUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return d = l, Ma(e, n), l = (n.flags & 128) !== 0, d || l ? (d = n.stateNode, r = l && typeof r.getDerivedStateFromError != "function" ? null : d.render(), n.flags |= 1, e !== null && l ? (n.child = qr(
      n,
      e.child,
      null,
      u
    ), n.child = qr(
      n,
      null,
      r,
      u
    )) : Mt(e, n, r, u), n.memoizedState = d.state, e = n.child) : e = Ui(
      e,
      n,
      u
    ), e;
  }
  function mg(e, n, r, l) {
    return Rr(), n.flags |= 256, Mt(e, n, r, l), n.child;
  }
  var Xc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Qc(e) {
    return { baseLanes: e, cachePool: rm() };
  }
  function Kc(e, n, r) {
    return e = e !== null ? e.childLanes & ~r : 0, n && (e |= jn), e;
  }
  function gg(e, n, r) {
    var l = n.pendingProps, u = !1, d = (n.flags & 128) !== 0, y;
    if ((y = d) || (y = e !== null && e.memoizedState === null ? !1 : (Yt.current & 2) !== 0), y && (u = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Ue) {
        if (u ? ir(n) : rr(), (e = at) ? (e = Bb(
          e,
          Zn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (n.memoizedState = {
          dehydrated: e,
          treeContext: Xi !== null ? { id: si, overflow: ui } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = Qh(e), r.return = n, n.child = r, Lt = n, at = null)) : e = null, e === null) throw Ki(n);
        return Kf(e) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      return d = l.children, l = l.fallback, u ? (rr(), u = n.mode, d = ms(
        { mode: "hidden", children: d },
        u
      ), l = Dr(
        l,
        u,
        r,
        null
      ), d.return = n, l.return = n, d.sibling = l, n.child = d, l = n.child, l.memoizedState = Qc(r), l.childLanes = Kc(
        e,
        y,
        r
      ), n.memoizedState = Xc, Ul(null, l)) : (ir(n), Pc(n, d));
    }
    var k = e.memoizedState;
    if (k !== null) {
      var _ = k.dehydrated;
      if (_ !== null)
        return D2(
          e,
          n,
          d,
          y,
          l,
          _,
          k,
          r
        );
    }
    return u ? (rr(), u = l.fallback, d = n.mode, k = e.child, _ = k.sibling, l = Ai(k, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = k.subtreeFlags & 1206910976, _ !== null ? u = Ai(_, u) : (u = Dr(
      u,
      d,
      r,
      null
    ), u.flags |= 2), u.return = n, l.return = n, l.sibling = u, n.child = l, Ul(null, l), l = n.child, u = e.child.memoizedState, u === null ? u = Qc(r) : (d = u.cachePool, d !== null ? (k = Ct._currentValue, d = d.parent !== k ? { parent: k, pool: k } : d) : d = rm(), u = {
      baseLanes: u.baseLanes | r,
      cachePool: d
    }), l.memoizedState = u, l.childLanes = Kc(
      e,
      y,
      r
    ), n.memoizedState = Xc, Ul(e.child, l)) : (ir(n), r = e.child, e = r.sibling, r = Ai(r, {
      mode: "visible",
      children: l.children
    }), r.return = n, r.sibling = null, e !== null && (y = n.deletions, y === null ? (n.deletions = [e], n.flags |= 16) : y.push(e)), n.child = r, n.memoizedState = null, r);
  }
  function Pc(e, n) {
    return n = ms(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function ms(e, n) {
    return e = pn(22, e, null, n), e.lanes = 0, e;
  }
  function gs(e, n, r) {
    return qr(n, e.child, null, r), e = Pc(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function D2(e, n, r, l, u, d, y, k) {
    if (r)
      return n.flags & 256 ? (ir(n), n.flags &= -257, gs(
        e,
        n,
        k
      )) : n.memoizedState !== null ? (rr(), n.child = e.child, n.flags |= 128, null) : (rr(), d = u.fallback, y = n.mode, u = ms(
        { mode: "visible", children: u.children },
        y
      ), d = Dr(
        d,
        y,
        k,
        null
      ), d.flags |= 2, u.return = n, d.return = n, u.sibling = d, n.child = u, qr(n, e.child, null, k), u = n.child, u.memoizedState = Qc(k), u.childLanes = Kc(
        e,
        l,
        k
      ), n.memoizedState = Xc, Ul(null, u));
    if (ir(n), Kf(d)) {
      if (l = d.nextSibling && d.nextSibling.dataset, l) var _ = l.dgst;
      return l = _, l !== "" && (u = Error(o(419)), u.stack = "", u.digest = l, _l({ value: u, source: null, stack: null })), gs(
        e,
        n,
        k
      );
    }
    if (Nt || Ur(e, n, k, !1), l = (k & e.childLanes) !== 0, Nt || l) {
      if (nr.current !== null)
        return gs(
          e,
          n,
          k
        );
      if (l = nt, l !== null && (u = Jp(
        l,
        k
      ), u !== 0 && u !== y.retryLane))
        throw y.retryLane = u, Mr(e, u), bn(l, e, u), Gc;
      return Qf(d) || Ds(), gs(
        e,
        n,
        k
      );
    }
    return Qf(d) ? (n.flags |= 192, n.child = e.child, null) : (e = y.treeContext, at = qn(d.nextSibling), Lt = n, Ue = !0, Qi = null, Zn = !1, e !== null && Jh(n, e), n = Pc(
      n,
      u.children
    ), n.flags |= 134221824, n);
  }
  function bg(e, n, r) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), Xo(e.return, n, r);
  }
  function xg(e) {
    for (var n = null; e !== null; ) {
      var r = e.alternate;
      r !== null && is(r) === null && (n = e), e = e.sibling;
    }
    return n;
  }
  function bs(e, n, r, l, u, d) {
    var y = e.memoizedState;
    y === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: r,
      tailMode: u,
      treeForkCount: d
    } : (y.isBackwards = n, y.rendering = null, y.renderingStartTime = 0, y.last = l, y.tail = r, y.tailMode = u, y.treeForkCount = d);
  }
  function Jc(e) {
    var n = e.child;
    for (e.child = null; n !== null; ) {
      var r = n.sibling;
      n.sibling = e.child, e.child = n, n = r;
    }
  }
  function Wc(e, n, r) {
    var l = n.pendingProps, u = l.revealOrder, d = l.tail;
    l = l.children;
    var y = Yt.current;
    if (n.flags & 128)
      return Ml(n, y), null;
    var k = (y & 2) !== 0;
    if (k ? (y = y & 1 | 2, n.flags |= 128) : y &= 1, Ml(n, y), u === "backwards" && e !== null ? (Jc(e), Mt(e, n, l, r), Jc(e)) : Mt(e, n, l, r), l = Ue ? zl : 0, !k && e !== null && (e.flags & 128) !== 0)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && bg(e, r, n);
        else if (e.tag === 19)
          bg(e, r, n);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (u) {
      case "backwards":
        r = xg(n.child), r === null ? (u = n.child, n.child = null) : (u = r.sibling, r.sibling = null, Jc(n)), bs(
          n,
          !0,
          u,
          null,
          d,
          l
        );
        break;
      case "unstable_legacy-backwards":
        for (r = null, u = n.child, n.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && is(e) === null) {
            n.child = u;
            break;
          }
          e = u.sibling, u.sibling = r, r = u, u = e;
        }
        bs(
          n,
          !0,
          r,
          null,
          d,
          l
        );
        break;
      case "together":
        bs(
          n,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      case "independent":
        n.memoizedState = null;
        break;
      default:
        r = xg(n.child), r === null ? (u = n.child, n.child = null) : (u = r.sibling, r.sibling = null), bs(
          n,
          !1,
          u,
          r,
          d,
          l
        );
    }
    return n.child;
  }
  function yg(e, n, r) {
    var l = n.pendingProps;
    return Pi(n, n.type, l.value), Mt(e, n, l.children, r), n.child;
  }
  function Ui(e, n, r) {
    if (e !== null && (n.dependencies = e.dependencies), sr |= n.lanes, (r & n.childLanes) === 0)
      if (e !== null) {
        if (Ur(
          e,
          n,
          r,
          !1
        ), (r & n.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && n.child !== e.child)
      throw Error(o(153));
    if (n.child !== null) {
      for (e = n.child, r = Ai(e, e.pendingProps), n.child = r, r.return = n; e.sibling !== null; )
        e = e.sibling, r = r.sibling = Ai(e, e.pendingProps), r.return = n;
      r.sibling = null;
    }
    return n.child;
  }
  function ef(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Qo(e)));
  }
  function R2(e, n, r) {
    switch (n.tag) {
      case 3:
        zi(n, n.stateNode.containerInfo), Pi(n, Ct, e.memoizedState.cache), Rr();
        break;
      case 27:
      case 5:
        _i(n);
        break;
      case 4:
        zi(n, n.stateNode.containerInfo);
        break;
      case 10:
        Pi(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, _c(n), null;
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null)
            return ir(n), n.flags |= 128, null;
          l = Ur(
            e,
            n,
            r,
            !1
          );
          var u = n.child.childLanes;
          return l || (r & u) !== 0 ? gg(e, n, r) : (ir(n), e = Ui(
            e,
            n,
            r
          ), e !== null ? e.sibling : null);
        }
        ir(n);
        break;
      case 19:
        if (n.flags & 128)
          return Wc(
            e,
            n,
            r
          );
        if (u = (e.flags & 128) !== 0, l = (r & n.childLanes) !== 0, l || (Ur(
          e,
          n,
          r,
          !1
        ), l = (r & n.childLanes) !== 0), u) {
          if (l)
            return Wc(
              e,
              n,
              r
            );
          n.flags |= 128;
        }
        if (u = n.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Ml(n, Yt.current), l) break;
        return null;
      case 22:
        return n.lanes = 0, cg(
          e,
          n,
          r,
          n.pendingProps
        );
      case 24:
        Pi(n, Ct, e.memoizedState.cache);
    }
    return Ui(e, n, r);
  }
  function vg(e, n, r) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Nt = !0;
      else {
        if (!ef(e, r) && (n.flags & 128) === 0)
          return Nt = !1, R2(
            e,
            n,
            r
          );
        Nt = (e.flags & 131072) !== 0;
      }
    else
      Nt = !1, Ue && (n.flags & 1048576) !== 0 && Ph(n, zl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var l = n.pendingProps;
          if (e = Zr(n.elementType), n.type = e, typeof e == "function")
            oc(e) ? (l = Yr(e, l), n.tag = 1, n = hg(
              null,
              n,
              e,
              l,
              r
            )) : (n.tag = 0, n = Fc(
              null,
              n,
              e,
              l,
              r
            ));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === W) {
                n.tag = 11, n = og(
                  null,
                  n,
                  e,
                  l,
                  r
                );
                break e;
              } else if (u === Te) {
                n.tag = 14, n = sg(
                  null,
                  n,
                  e,
                  l,
                  r
                );
                break e;
              } else if (u === ee) {
                n.tag = 10, n.type = e, n = yg(
                  null,
                  n,
                  r
                );
                break e;
              }
            }
            throw n = Se(e) || e, Error(o(306, n, ""));
          }
        }
        return n;
      case 0:
        return Fc(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 1:
        return l = n.type, u = Yr(
          l,
          n.pendingProps
        ), hg(
          e,
          n,
          l,
          u,
          r
        );
      case 3:
        e: {
          if (zi(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = n.pendingProps;
          var d = n.memoizedState;
          u = d.element, vc(e, n), Ol(n, l, null, r);
          var y = n.memoizedState;
          if (l = y.cache, Pi(n, Ct, l), l !== d.cache && hc(
            n,
            [Ct],
            r,
            !0
          ), Al(), l = y.element, d.isDehydrated)
            if (d = {
              element: l,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = d, n.memoizedState = d, n.flags & 256) {
              n = mg(
                e,
                n,
                l,
                r
              );
              break e;
            } else if (l !== u) {
              u = Bn(
                Error(o(424)),
                n
              ), _l(u), n = mg(
                e,
                n,
                l,
                r
              );
              break e;
            } else
              for (e = n.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, at = qn(e.firstChild), Lt = n, Ue = !0, Qi = null, Zn = !0, r = cm(
                n,
                null,
                l,
                r
              ), n.child = r; r; )
                r.flags = r.flags & -3 | 134221824, r = r.sibling;
          else {
            if (Rr(), l === u) {
              n = Ui(
                e,
                n,
                r
              );
              break e;
            }
            Mt(e, n, l, r);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Ma(e, n), e === null ? (r = Yb(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = r : Ue || (n.stateNode = zb(
          n.type,
          n.pendingProps,
          mt.current,
          n
        )) : n.memoizedState = Yb(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return _i(n), e === null && Ue && (l = n.stateNode = Zb(
          n.type,
          n.pendingProps,
          mt.current
        ), Lt = n, Zn = !0, u = at, dr(n.type) ? (Pf = u, at = qn(l.firstChild)) : at = u), Mt(
          e,
          n,
          n.pendingProps.children,
          r
        ), Ma(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Ue && ((u = l = at) && (l = Tk(
          l,
          n.type,
          n.pendingProps,
          Zn
        ), l !== null ? (n.stateNode = l, Lt = n, at = qn(l.firstChild), Zn = !1, u = !0) : u = !1), u || Ki(n)), _i(n), u = n.type, d = n.pendingProps, y = e !== null ? e.memoizedProps : null, l = d.children, $f(u, d) ? l = null : y !== null && $f(u, y) && (n.flags |= 32), n.memoizedState !== null && (u = Cc(
          e,
          n,
          z2,
          null,
          null,
          r
        ), Pa._currentValue = u), Ma(e, n), Mt(e, n, l, r), n.child;
      case 6:
        return e === null && Ue && ((e = r = at) && (r = Nk(
          r,
          n.pendingProps,
          Zn
        ), r !== null ? (n.stateNode = r, Lt = n, at = null, e = !0) : e = !1), e || Ki(n)), null;
      case 13:
        return gg(e, n, r);
      case 4:
        return zi(
          n,
          n.stateNode.containerInfo
        ), l = n.pendingProps, e === null ? n.child = qr(
          n,
          null,
          l,
          r
        ) : Mt(e, n, l, r), n.child;
      case 11:
        return og(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 7:
        return l = n.pendingProps, Ma(e, n), Mt(e, n, l, r), n.child;
      case 8:
        return Mt(
          e,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 12:
        return Mt(
          e,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 10:
        return yg(e, n, r);
      case 9:
        return u = n.type._context, l = n.pendingProps.children, Br(n), u = qt(u), l = l(u), n.flags |= 1, Mt(e, n, l, r), n.child;
      case 14:
        return sg(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 15:
        return ug(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 19:
        return Wc(e, n, r);
      case 31:
        return M2(e, n, r);
      case 22:
        return cg(
          e,
          n,
          r,
          n.pendingProps
        );
      case 24:
        return Br(n), l = qt(Ct), e === null ? (u = bc(), u === null && (u = nt, d = mc(), u.pooledCache = d, d.refCount++, d !== null && (u.pooledCacheLanes |= r), u = d), n.memoizedState = { parent: l, cache: u }, yc(n), Pi(n, Ct, u)) : ((e.lanes & r) !== 0 && (vc(e, n), Ol(n, null, null, r), Al()), u = e.memoizedState, d = n.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, n.memoizedState = u, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = u), Pi(n, Ct, l)) : (l = d.cache, Pi(n, Ct, l), l !== u.cache && hc(
          n,
          [Ct],
          r,
          !0
        ))), Mt(
          e,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 30:
        return n.stateNode === null && (n.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), l = n.pendingProps, l.name != null && l.name !== "auto" ? n.flags |= e === null ? 18882560 : 18874368 : Ue && Go(n), e !== null && e.memoizedProps.name !== l.name ? n.flags |= 4194816 : Ma(e, n), Mt(e, n, l.children, r), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(o(156, n.tag));
  }
  function Bi(e) {
    e.flags |= 4;
  }
  function tf(e, n, r, l, u) {
    var d;
    if ((d = (e.mode & 32) !== 0) && (d = r === null ? Qb(n, l) : Qb(n, l) && (l.src !== r.src || l.srcSet !== r.srcSet)), d) {
      if (e.flags |= 16777216, (u & 335544128) === u)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (tb()) e.flags |= 8192;
        else
          throw $r = Wo, xc;
    } else e.flags &= -16777217;
  }
  function wg(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Kb(n))
      if (tb()) e.flags |= 8192;
      else
        throw $r = Wo, xc;
  }
  function xs(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? Qp() : 536870912, e.lanes |= n, Ba |= n);
  }
  function Bl(e, n) {
    if (!Ue)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var r = e.tail, l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
          break;
        default:
          for (n = e.tail, r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? e.tail = null : r.sibling = null;
      }
  }
  function lt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, r = 0, l = 0;
    if (n)
      for (var u = e.child; u !== null; )
        r |= u.lanes | u.childLanes, l |= u.subtreeFlags & 1206910976, l |= u.flags & 1206910976, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        r |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= l, e.childLanes = r, n;
  }
  function L2(e, n, r) {
    var l = n.pendingProps;
    switch (cc(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return lt(n), null;
      case 1:
        return lt(n), null;
      case 3:
        return r = n.stateNode, l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), Di(Ct), Dn(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ja(n) ? Bi(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, dc())), lt(n), null;
      case 26:
        var u = n.type, d = n.memoizedState;
        return e === null ? (Bi(n), d !== null ? (lt(n), wg(n, d)) : (lt(n), tf(
          n,
          u,
          null,
          l,
          r
        ))) : d ? d !== e.memoizedState ? (Bi(n), lt(n), wg(n, d)) : (lt(n), n.flags &= -16777217) : (e = e.memoizedProps, e !== l && Bi(n), lt(n), tf(
          n,
          u,
          e,
          l,
          r
        )), null;
      case 27:
        if (Rn(n), r = mt.current, u = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && Bi(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(o(166));
            return lt(n), n.subtreeFlags &= -33554433, null;
          }
          e = fn.current, ja(n) ? Wh(n) : (e = Zb(u, l, r), n.stateNode = e, Bi(n));
        }
        return lt(n), n.subtreeFlags &= -33554433, null;
      case 5:
        if (Rn(n), u = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && Bi(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(o(166));
            return lt(n), n.subtreeFlags &= -33554433, null;
          }
          if (d = fn.current, ja(n))
            Wh(n);
          else {
            var y = Ql(
              mt.current
            );
            switch (d) {
              case 1:
                d = y.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                d = y.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    d = y.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    d = y.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    d = y.createElement("div"), d.innerHTML = "<script><\/script>", d = d.removeChild(
                      d.firstChild
                    );
                    break;
                  case "select":
                    d = typeof l.is == "string" ? y.createElement("select", {
                      is: l.is
                    }) : y.createElement("select"), l.multiple ? d.multiple = !0 : l.size && (d.size = l.size);
                    break;
                  default:
                    d = typeof l.is == "string" ? y.createElement(u, { is: l.is }) : y.createElement(u);
                }
            }
            d[$t] = n, d[dn] = l;
            e: for (y = n.child; y !== null; ) {
              if (y.tag === 5 || y.tag === 6)
                d.appendChild(y.stateNode);
              else if (y.tag !== 4 && y.tag !== 27 && y.child !== null) {
                y.child.return = y, y = y.child;
                continue;
              }
              if (y === n) break e;
              for (; y.sibling === null; ) {
                if (y.return === null || y.return === n)
                  break e;
                y = y.return;
              }
              y.sibling.return = y.return, y = y.sibling;
            }
            n.stateNode = d;
            e: switch (Ft(d, u, l), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Bi(n);
          }
        }
        return lt(n), n.subtreeFlags &= -33554433, tf(
          n,
          n.type,
          e === null ? null : e.memoizedProps,
          n.pendingProps,
          r
        ), null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== l && Bi(n);
        else {
          if (typeof l != "string" && n.stateNode === null)
            throw Error(o(166));
          if (e = mt.current, ja(n)) {
            if (e = n.stateNode, r = n.memoizedProps, l = null, u = Lt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            e[$t] = n, e = !!(e.nodeValue === r || l !== null && l.suppressHydrationWarning === !0 || vb(e.nodeValue, r)), e || Ki(n, !0);
          } else
            e = Ql(e).createTextNode(
              l
            ), e[$t] = n, n.stateNode = e;
        }
        return lt(n), null;
      case 31:
        if (r = n.memoizedState, e === null || e.memoizedState !== null) {
          if (l = ja(n), r !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = n.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[$t] = n;
            } else
              Rr(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            lt(n), e = !1;
          } else
            r = dc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), e = !0;
          if (!e)
            return n.flags & 256 ? (Sn(n), n) : (Sn(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(o(558));
        }
        return lt(n), null;
      case 13:
        if (l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = ja(n), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[$t] = n;
            } else
              Rr(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            lt(n), u = !1;
          } else
            u = dc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return n.flags & 256 ? (Sn(n), n) : (Sn(n), null);
        }
        return Sn(n), (n.flags & 128) !== 0 ? (n.lanes = r, n) : (r = l !== null, e = e !== null && e.memoizedState !== null, r && (l = n.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), d = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (d = l.memoizedState.cachePool.pool), d !== u && (l.flags |= 2048)), r !== e && r && (n.child.flags |= 8192), xs(n, n.updateQueue), lt(n), null);
      case 4:
        return Dn(), e === null && Uf(n.stateNode.containerInfo), n.flags |= 67108864, lt(n), null;
      case 10:
        return Di(n.type), lt(n), null;
      case 19:
        if (jc(n), l = n.memoizedState, l === null) return lt(n), null;
        if (u = (n.flags & 128) !== 0, d = l.rendering, d === null)
          if (u) Bl(l, !1);
          else {
            if (xt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (d = is(e), d !== null) {
                  for (n.flags |= 128, Bl(l, !1), e = d.updateQueue, n.updateQueue = e, xs(n, e), n.subtreeFlags = 0, e = r, r = n.child; r !== null; )
                    Xh(r, e), r = r.sibling;
                  return Ml(
                    n,
                    Yt.current & 1 | 2
                  ), Ue && Oi(n, l.treeForkCount), n.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Et() > Ns && (n.flags |= 128, u = !0, Bl(l, !1), n.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = is(d), e !== null) {
              if (n.flags |= 128, u = !0, e = e.updateQueue, n.updateQueue = e, xs(n, e), Bl(l, !0), l.tail === null && l.tailMode !== "collapsed" && l.tailMode !== "visible" && !d.alternate && !Ue)
                return lt(n), null;
            } else
              2 * Et() - l.renderingStartTime > Ns && r !== 536870912 && (n.flags |= 128, u = !0, Bl(l, !1), n.lanes = 4194304);
          l.isBackwards ? (d.sibling = n.child, n.child = d) : (e = l.last, e !== null ? e.sibling = d : n.child = d, l.last = d);
        }
        if (l.tail !== null) {
          e = l.tail;
          e: {
            for (r = e; r !== null; ) {
              if (r.alternate !== null) {
                r = !1;
                break e;
              }
              r = r.sibling;
            }
            r = !0;
          }
          return l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Et(), e.sibling = null, d = Yt.current, d = u ? d & 1 | 2 : d & 1, l.tailMode === "visible" || l.tailMode === "collapsed" || !r || Ue ? Ml(n, d) : (r = d, Xe(Vt, n), Xe(Yt, r), Jt === null && (Jt = n)), Ue && Oi(n, l.treeForkCount), e;
        }
        return lt(n), null;
      case 22:
      case 23:
        return Sn(n), zc(), l = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (r & 536870912) !== 0 && (n.flags & 128) === 0 && (lt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : lt(n), r = n.updateQueue, r !== null && xs(n, r.retryQueue), r = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== r && (n.flags |= 2048), e !== null && ot(Hr), null;
      case 24:
        return r = null, e !== null && (r = e.memoizedState.cache), n.memoizedState.cache !== r && (n.flags |= 2048), Di(Ct), lt(n), null;
      case 25:
        return null;
      case 30:
        return n.flags |= 33554432, lt(n), null;
    }
    throw Error(o(156, n.tag));
  }
  function U2(e, n) {
    switch (cc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Di(Ct), Dn(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Rn(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (Sn(n), n.alternate === null)
            throw Error(o(340));
          Rr();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 13:
        if (Sn(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(o(340));
          Rr();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return jc(n), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, e = n.memoizedState, e !== null && (e.rendering = null, e.tail = null), n.flags |= 4, n) : null;
      case 4:
        return Dn(), null;
      case 10:
        return Di(n.type), null;
      case 22:
      case 23:
        return Sn(n), zc(), e !== null && ot(Hr), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return Di(Ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function kg(e, n) {
    switch (cc(n), n.tag) {
      case 3:
        Di(Ct), Dn();
        break;
      case 26:
      case 27:
      case 5:
        Rn(n);
        break;
      case 4:
        Dn();
        break;
      case 31:
        n.memoizedState !== null && Sn(n);
        break;
      case 13:
        Sn(n);
        break;
      case 19:
        jc(n);
        break;
      case 10:
        Di(n.type);
        break;
      case 22:
      case 23:
        Sn(n), zc(), e !== null && ot(Hr);
        break;
      case 24:
        Di(Ct);
    }
  }
  function Il(e, n) {
    try {
      var r = n.updateQueue, l = r !== null ? r.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        r = u;
        do {
          if ((r.tag & e) === e) {
            l = void 0;
            var d = r.create, y = r.inst;
            l = d(), y.destroy = l;
          }
          r = r.next;
        } while (r !== u);
      }
    } catch (k) {
      Je(n, n.return, k);
    }
  }
  function ar(e, n, r) {
    try {
      var l = n.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var d = u.next;
        l = d;
        do {
          if ((l.tag & e) === e) {
            var y = l.inst, k = y.destroy;
            if (k !== void 0) {
              y.destroy = void 0, u = n;
              var _ = r, L = k;
              try {
                L();
              } catch ($) {
                Je(
                  u,
                  _,
                  $
                );
              }
            }
          }
          l = l.next;
        } while (l !== d);
      }
    } catch ($) {
      Je(n, n.return, $);
    }
  }
  function Sg(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var r = e.stateNode;
      try {
        dm(n, r);
      } catch (l) {
        Je(e, e.return, l);
      }
    }
  }
  function zg(e, n, r) {
    r.props = Yr(
      e.type,
      e.memoizedProps
    ), r.state = e.memoizedState;
    try {
      r.componentWillUnmount();
    } catch (l) {
      Je(e, n, l);
    }
  }
  function ci(e, n) {
    try {
      var r = e.ref;
      if (r !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            var u = e.stateNode, d = Ti(e.memoizedProps, u);
            (u.ref === null || u.ref.name !== d) && (u.ref = Ab(d)), l = u.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var y = new Cn(e);
              x(
                e.child,
                !1,
                Ek,
                y,
                void 0,
                void 0
              ), e.stateNode = y;
            }
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof r == "function" ? e.refCleanup = r(l) : r.current = l;
      }
    } catch (k) {
      Je(e, n, k);
    }
  }
  function Gt(e, n) {
    var r = e.ref, l = e.refCleanup;
    if (r !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          Je(e, n, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (u) {
          Je(e, n, u);
        }
      else r.current = null;
  }
  function ys(e, n) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && n !== null)
      for (var r = 0; r < n.length; r++)
        Ub(
          e.stateNode,
          n[r]
        );
  }
  function _g(e) {
    for (var n = e.return; n !== null && (rf(n) && Ub(e.stateNode, n.stateNode), !nf(n)); )
      n = n.return;
  }
  function Hl(e) {
    for (var n = e.return; n !== null && (rf(n) && Ck(e.stateNode, n.stateNode), !nf(n)); )
      n = n.return;
  }
  function nf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function rf(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function af(e) {
    var n = e.type, r = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && l.focus();
          break e;
        case "img":
          r.src ? l.src = r.src : r.srcSet && (l.srcset = r.srcSet);
      }
    } catch (u) {
      Je(e, e.return, u);
    }
  }
  function lf(e, n, r) {
    try {
      var l = e.stateNode;
      uk(l, e.type, r, n), l[dn] = n;
    } catch (u) {
      Je(e, e.return, u);
    }
  }
  function jg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && dr(e.type) || e.tag === 4;
  }
  function of(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || jg(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && dr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function sf(e, n, r, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      u = e.stateNode, n ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(u, n) : (n = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, n.appendChild(u), r = r._reactRootContainer, r != null || n.onclick !== null || (n.onclick = oi)), ys(e, l), Ge = !0;
    else if (u !== 4 && (u === 27 && (ys(e, l), l = null, dr(e.type) && (r = e.stateNode, n = null)), e = e.child, e !== null))
      for (sf(
        e,
        n,
        r,
        l
      ), e = e.sibling; e !== null; )
        sf(
          e,
          n,
          r,
          l
        ), e = e.sibling;
  }
  function vs(e, n, r, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      u = e.stateNode, n ? r.insertBefore(u, n) : r.appendChild(u), ys(e, l), Ge = !0;
    else if (u !== 4 && (u === 27 && (ys(e, l), l = null, dr(e.type) && (r = e.stateNode)), e = e.child, e !== null))
      for (vs(
        e,
        n,
        r,
        l
      ), e = e.sibling; e !== null; )
        vs(
          e,
          n,
          r,
          l
        ), e = e.sibling;
  }
  function Eg(e) {
    var n = e.stateNode, r = e.memoizedProps;
    try {
      for (var l = e.type, u = n.attributes; u.length; )
        n.removeAttributeNode(u[0]);
      Ft(n, l, r), n[$t] = e, n[dn] = r;
    } catch (d) {
      Je(e, e.return, d);
    }
  }
  var ws = !1, zn = null;
  function Cg(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (ws = !0);
  }
  var fi = null;
  function Tg() {
    var e = fi;
    return fi = null, e;
  }
  var hn = 0;
  function Da(e, n, r, l, u) {
    return hn = 0, Ng(
      e.child,
      n,
      r,
      l,
      u
    );
  }
  function Ng(e, n, r, l, u) {
    for (var d = !1; e !== null; ) {
      if (e.tag === 5) {
        var y = e.stateNode;
        if (l !== null) {
          var k = Yf(y);
          l.push(k), k.view && (d = !0);
        } else
          d || Yf(y).view && (d = !0);
        ws = !0, Tb(
          y,
          hn === 0 ? n : n + "_" + hn,
          r
        ), hn++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && u || Ng(
        e.child,
        n,
        r,
        l,
        u
      ) && (d = !0));
      e = e.sibling;
    }
    return d;
  }
  function di(e, n) {
    for (; e !== null; )
      e.tag === 5 ? Nb(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && n || di(
        e.child,
        n
      )), e = e.sibling;
  }
  function ks(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && (ks(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var n = e.memoizedProps;
          if (n.name == null || n.name === "auto")
            throw Error(o(544));
          var r = n.name;
          n = Ni(n.default, n.share), n !== "none" && (Da(
            e,
            r,
            n,
            null,
            !1
          ) || di(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function uf(e, n) {
    if (e.tag === 30) {
      var r = e.stateNode, l = e.memoizedProps, u = Ti(l, r), d = Ni(
        l.default,
        r.paired ? l.share : l.enter
      );
      d !== "none" ? Da(e, u, d, null, !1) ? (ks(e), r.paired || n || $a(e, l.onEnter)) : di(e.child, !1) : ks(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        uf(e, n), e = e.sibling;
    else ks(e);
  }
  function cf(e) {
    if (zn !== null && zn.size !== 0) {
      var n = zn;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var r = e.memoizedProps, l = r.name;
              if (l != null && l !== "auto") {
                var u = n.get(l);
                if (u !== void 0) {
                  var d = Ni(
                    r.default,
                    r.share
                  );
                  if (d !== "none" && (Da(
                    e,
                    l,
                    d,
                    null,
                    !1
                  ) ? (d = e.stateNode, u.paired = d, d.paired = u, $a(e, r.onShare)) : di(e.child, !1)), n.delete(l), n.size === 0) break;
                }
              }
            }
            cf(e);
          }
          e = e.sibling;
        }
    }
  }
  function ff(e) {
    if (e.tag === 30) {
      var n = e.memoizedProps, r = Ti(n, e.stateNode), l = zn !== null ? zn.get(r) : void 0, u = Ni(
        n.default,
        l !== void 0 ? n.share : n.exit
      );
      u !== "none" && (Da(e, r, u, null, !1) ? l !== void 0 ? (u = e.stateNode, l.paired = u, u.paired = l, zn.delete(r), $a(e, n.onShare)) : $a(e, n.onExit) : di(e.child, !1)), zn !== null && cf(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        ff(e), e = e.sibling;
    else
      zn !== null && cf(e);
  }
  function Ag(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, r = Ti(n, e.stateNode);
        n = Ni(n.default, n.update), e.flags &= -5, n !== "none" && Da(
          e,
          r,
          n,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && Ag(e);
      e = e.sibling;
    }
  }
  function df(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var n = e.stateNode;
            n.paired !== null && (n.paired = null, di(e.child, !1));
          }
          df(e);
        }
        e = e.sibling;
      }
  }
  function Ss(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, di(e.child, !1), df(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Ss(e), e = e.sibling;
    else df(e);
  }
  function Og(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? di(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Og(e), e = e.sibling;
  }
  function pf(e, n, r, l, u, d, y) {
    for (var k = !1; n !== null; ) {
      if (n.tag === 5) {
        var _ = n.stateNode;
        if (d !== null && hn < d.length) {
          var L = d[hn], $ = Yf(_);
          (L.view || $.view) && (k = !0);
          var Q;
          if (Q = (e.flags & 4) === 0)
            if ($.clip) Q = !0;
            else {
              Q = L.rect;
              var M = $.rect;
              Q = Q.y !== M.y || Q.x !== M.x || Q.height !== M.height || Q.width !== M.width;
            }
          Q && (e.flags |= 4), $.abs ? $ = !L.abs : (L = L.rect, $ = $.rect, $ = L.height !== $.height || L.width !== $.width), $ && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && Tb(
          _,
          hn === 0 ? r : r + "_" + hn,
          u
        ), k && (e.flags & 4) !== 0 || (fi === null && (fi = []), fi.push(
          _,
          hn === 0 ? l : l + "_" + hn,
          n.memoizedProps
        )), hn++;
      } else (n.tag !== 22 || n.memoizedState === null) && (n.tag === 30 && y ? e.flags |= n.flags & 32 : pf(
        e,
        n.child,
        r,
        l,
        u,
        d,
        y
      ) && (k = !0));
      n = n.sibling;
    }
    return k;
  }
  function Mg(e, n) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var r = e.memoizedProps, l = e.stateNode, u = Ti(r, l), d = Ni(r.default, r.update), y;
        y = e.memoizedState, e.memoizedState = null, l = e;
        var k = e.child;
        hn = 0, u = pf(
          l,
          k,
          u,
          u,
          d,
          y,
          !1
        ), (e.flags & 4) !== 0 && u && $a(e, r.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && Mg(e);
      e = e.sibling;
    }
  }
  var Ut = !1, Ke = !1, pi = !1, hf = !1, Dg = typeof WeakSet == "function" ? WeakSet : Set, Bt = null, hi = !1, Zl = !1, zs = !1, mf = !1;
  function B2(e, n, r) {
    if (e = e.containerInfo, Hf = Ja, e = Bh(e), ec(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var u = l.getSelection && l.getSelection();
          if (u && u.rangeCount !== 0) {
            l = u.anchorNode;
            var d = u.anchorOffset, y = u.focusNode;
            u = u.focusOffset;
            try {
              l.nodeType, y.nodeType;
            } catch {
              l = null;
              break e;
            }
            var k = 0, _ = -1, L = -1, $ = 0, Q = 0, M = e, H = null;
            t: for (; ; ) {
              for (var oe; M !== l || d !== 0 && M.nodeType !== 3 || (_ = k + d), M !== y || u !== 0 && M.nodeType !== 3 || (L = k + u), M.nodeType === 3 && (k += M.nodeValue.length), (oe = M.firstChild) !== null; )
                H = M, M = oe;
              for (; ; ) {
                if (M === e) break t;
                if (H === l && ++$ === d && (_ = k), H === y && ++Q === u && (L = k), (oe = M.nextSibling) !== null) break;
                M = H, H = M.parentNode;
              }
              M = oe;
            }
            l = _ === -1 || L === -1 ? null : { start: _, end: L };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Zf = { focusedElem: e, selectionRange: l }, Ja = !1, r = (r & 335544064) === r, Bt = n, n = r ? 9270 : 1024; Bt !== null; ) {
      if (e = Bt, r && (l = e.deletions, l !== null))
        for (d = 0; d < l.length; d++)
          r && ff(l[d]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        r && Cg(e), _s(r);
      else {
        if (e.tag === 22) {
          if (l = e.alternate, e.memoizedState !== null) {
            l !== null && l.memoizedState === null && r && ff(l), _s(r);
            continue;
          } else if (l !== null && l.memoizedState !== null) {
            r && Cg(e), _s(r);
            continue;
          }
        }
        l = e.child, (e.subtreeFlags & n) !== 0 && l !== null ? (l.return = e, Bt = l) : (r && Ag(e), _s(r));
      }
    }
    zn = null;
  }
  function _s(e) {
    for (; Bt !== null; ) {
      var n = Bt, r = e, l = n.alternate, u = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((u & 1024) !== 0 && l !== null) {
            r = void 0, u = l.memoizedProps, l = l.memoizedState;
            var d = n.stateNode;
            try {
              var y = Yr(
                n.type,
                u
              );
              r = d.getSnapshotBeforeUpdate(
                y,
                l
              ), d.__reactInternalSnapshotBeforeUpdate = r;
            } catch (k) {
              Je(n, n.return, k);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (l = n.stateNode.containerInfo, r = l.nodeType, r === 9)
              Xf(l);
            else if (r === 1)
              switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Xf(l);
                  break;
                default:
                  l.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          r && l !== null && (r = Ti(
            l.memoizedProps,
            l.stateNode
          ), u = n.memoizedProps, u = Ni(u.default, u.update), u !== "none" && Da(
            l,
            r,
            u,
            l.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((u & 1024) !== 0) throw Error(o(163));
      }
      if (l = n.sibling, l !== null) {
        l.return = n.return, Bt = l;
        break;
      }
      Bt = n.return;
    }
  }
  function Rg(e, n, r) {
    var l = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        mi(e, r), l & 4 && Il(5, r);
        break;
      case 1:
        if (mi(e, r), l & 4)
          if (e = r.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (y) {
              Je(r, r.return, y);
            }
          else {
            var u = Yr(
              r.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              e.componentDidUpdate(
                u,
                n,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              Je(
                r,
                r.return,
                y
              );
            }
          }
        l & 64 && Sg(r), l & 512 && ci(r, r.return);
        break;
      case 3:
        if (mi(e, r), l & 64 && (e = r.updateQueue, e !== null)) {
          if (n = null, r.child !== null)
            switch (r.child.tag) {
              case 27:
              case 5:
                n = r.child.stateNode;
                break;
              case 1:
                n = r.child.stateNode;
            }
          try {
            dm(e, n);
          } catch (y) {
            Je(r, r.return, y);
          }
        }
        break;
      case 27:
        n === null && l & 4 && Eg(r);
      case 26:
      case 5:
        mi(e, r), n === null && l & 4 && af(r), l & 512 && ci(r, r.return);
        break;
      case 12:
        mi(e, r);
        break;
      case 31:
        mi(e, r), l & 4 && Ig(e, r);
        break;
      case 13:
        mi(e, r), l & 4 && Hg(e, r), l & 64 && (e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null && (r = K2.bind(
          null,
          r
        ), Ak(e, r))));
        break;
      case 22:
        if (l = r.memoizedState !== null || Ut, !l) {
          var d = n !== null && n.memoizedState !== null || Ke;
          n = Ut, u = Ke, Ut = l, (Ke = d) && !u ? (l = 2, (r.subtreeFlags & 8772) !== 0 && (l |= 1), ti(
            e,
            r,
            l
          )) : mi(e, r), Ut = n, Ke = u;
        }
        break;
      case 30:
        mi(e, r), l & 512 && ci(r, r.return);
        break;
      case 7:
        l & 512 && ci(r, r.return);
      default:
        mi(e, r);
    }
  }
  function gf(e, n) {
    for (e = e.child; e !== null; )
      Lg(e, n), e = e.sibling;
  }
  function Lg(e, n) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var r = e.stateNode;
          if (n) {
            var l = r.style;
            typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none";
          } else {
            var u = e.stateNode, d = e.memoizedProps.style, y = d != null && d.hasOwnProperty("display") ? d.display : null;
            u.style.display = y == null || typeof y == "boolean" ? "" : ("" + y).trim();
          }
        } catch (_) {
          Je(e, e.return, _);
        }
        bf(e, n);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = n ? "" : e.memoizedProps, Ge = !0;
        } catch (_) {
          Je(e, e.return, _);
        }
        break;
      case 18:
        try {
          var k = e.stateNode;
          n ? Cb(k, !0) : Cb(e.stateNode, !1);
        } catch (_) {
          Je(e, e.return, _);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && gf(e, n);
        break;
      default:
        gf(e, n);
    }
  }
  function bf(e, n) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var r = e, l = n;
          switch (r.tag) {
            case 4:
              Lg(r, l);
              break e;
            case 22:
              r.memoizedState === null && bf(r, l);
              break e;
            default:
              bf(r, l);
          }
        }
        e = e.sibling;
      }
  }
  function Ug(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Ug(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && No(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var ct = null, mn = !1;
  function Wn(e, n, r) {
    for (r = r.child; r !== null; )
      Bg(e, n, r), r = r.sibling;
  }
  function Bg(e, n, r) {
    if (xe && typeof xe.onCommitFiberUnmount == "function")
      try {
        xe.onCommitFiberUnmount(ye, r);
      } catch {
      }
    switch (r.tag) {
      case 26:
        Ke || Gt(r, n), Wn(
          e,
          n,
          r
        ), r.memoizedState ? r.memoizedState.count-- : r.stateNode && !Ke && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        Ke || Gt(r, n), Hl(r);
        var l = ct, u = mn;
        dr(r.type) && (ct = r.stateNode, mn = !1), Wn(
          e,
          n,
          r
        ), $b(
          r.stateNode,
          r.type,
          r.memoizedProps
        ), ct = l, mn = u;
        break;
      case 5:
        Ke || Gt(r, n), Hl(r);
      case 6:
        if (r.tag === 6 && Hl(r), l = ct, u = mn, ct = null, Wn(
          e,
          n,
          r
        ), ct = l, mn = u, ct !== null)
          if (mn)
            try {
              (ct.nodeType === 9 ? ct.body : ct.nodeName === "HTML" ? ct.ownerDocument.body : ct).removeChild(r.stateNode), Ge = !0;
            } catch (d) {
              Je(
                r,
                n,
                d
              );
            }
          else
            try {
              ct.removeChild(r.stateNode), Ge = !0;
            } catch (d) {
              Je(
                r,
                n,
                d
              );
            }
        break;
      case 18:
        ct !== null && (mn ? (e = ct, Eb(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          r.stateNode
        ), Wa(e)) : Eb(ct, r.stateNode));
        break;
      case 4:
        l = ct, u = mn, ct = r.stateNode.containerInfo, mn = !0, Wn(
          e,
          n,
          r
        ), ct = l, mn = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ar(2, r, n), Ke || ar(4, r, n), Wn(
          e,
          n,
          r
        );
        break;
      case 1:
        Ke || (Gt(r, n), l = r.stateNode, typeof l.componentWillUnmount == "function" && zg(
          r,
          n,
          l
        )), Wn(
          e,
          n,
          r
        );
        break;
      case 21:
        Wn(
          e,
          n,
          r
        );
        break;
      case 22:
        Ke = (l = Ke) || r.memoizedState !== null, Wn(
          e,
          n,
          r
        ), Ke = l;
        break;
      case 30:
        Gt(r, n), Wn(
          e,
          n,
          r
        );
        break;
      case 7:
        Ke || Gt(r, n), Wn(
          e,
          n,
          r
        );
        break;
      default:
        Wn(
          e,
          n,
          r
        );
    }
  }
  function Ig(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Wa(e);
      } catch (r) {
        Je(n, n.return, r);
      }
    }
  }
  function Hg(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Wa(e);
      } catch (r) {
        Je(n, n.return, r);
      }
  }
  function I2(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Dg()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Dg()), n;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function js(e, n) {
    var r = I2(e);
    n.forEach(function(l) {
      if (!r.has(l)) {
        r.add(l);
        var u = P2.bind(null, e, l);
        l.then(u, u);
      }
    });
  }
  function on(e, n, r) {
    var l = n.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var d = l[u], y = e, k = n, _ = k;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (dr(_.type)) {
                ct = _.stateNode, mn = !1;
                break e;
              }
              break;
            case 5:
              ct = _.stateNode, mn = !1;
              break e;
            case 3:
            case 4:
              ct = _.stateNode.containerInfo, mn = !0;
              break e;
          }
          _ = _.return;
        }
        if (ct === null) throw Error(o(160));
        Bg(y, k, d), ct = null, mn = !1, y = d.alternate, y !== null && (y.return = null), d.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        Zg(n, e, r), n = n.sibling;
  }
  var ei = null;
  function Zg(e, n, r) {
    var l = e.alternate, u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (u & 4 && (l = e.updateQueue, l = l !== null ? l.events : null, l !== null))
          for (var d = 0; d < l.length; d++) {
            var y = l[d];
            y.ref.impl = y.nextImpl;
          }
        on(n, e, r), sn(e), u & 4 && (ar(3, e, e.return), Il(3, e), ar(5, e, e.return));
        break;
      case 1:
        on(n, e, r), sn(e), u & 512 && (Ke || l === null || Gt(l, l.return)), u & 64 && Ut && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = r === null ? n : r.concat(n))));
        break;
      case 26:
        if (d = ei, on(n, e, r), sn(e), u & 512 && (Ke || l === null || Gt(l, l.return)), u & 4)
          if (u = l !== null ? l.memoizedState : null, r = e.memoizedState, l === null)
            if (r === null)
              if (e.stateNode === null)
                if (Ut)
                  e.stateNode = zb(
                    e.type,
                    e.memoizedProps,
                    n.containerInfo,
                    e
                  );
                else {
                  e: {
                    n = e.type, r = e.memoizedProps, u = d.ownerDocument || d;
                    t: switch (n) {
                      case "title":
                        l = u.getElementsByTagName("title")[0], (!l || l[pl] || l[$t] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = u.createElement(n), u.head.insertBefore(
                          l,
                          u.querySelector("head > title")
                        )), Ft(l, n, r), l[$t] = e, Rt(l), n = l;
                        break e;
                      case "link":
                        if (d = Xb(
                          "link",
                          "href",
                          u
                        ).get(n + (r.href || ""))) {
                          for (y = 0; y < d.length; y++)
                            if (l = d[y], l.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && l.getAttribute("rel") === (r.rel == null ? null : r.rel) && l.getAttribute("title") === (r.title == null ? null : r.title) && l.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                              d.splice(y, 1);
                              break t;
                            }
                        }
                        l = u.createElement(n), Ft(l, n, r), u.head.appendChild(l);
                        break;
                      case "meta":
                        if (d = Xb(
                          "meta",
                          "content",
                          u
                        ).get(n + (r.content || ""))) {
                          for (y = 0; y < d.length; y++)
                            if (l = d[y], l.getAttribute("content") === (r.content == null ? null : "" + r.content) && l.getAttribute("name") === (r.name == null ? null : r.name) && l.getAttribute("property") === (r.property == null ? null : r.property) && l.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && l.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                              d.splice(y, 1);
                              break t;
                            }
                        }
                        l = u.createElement(n), Ft(l, n, r), u.head.appendChild(l);
                        break;
                      default:
                        throw Error(o(468, n));
                    }
                    l[$t] = e, Rt(l), n = l;
                  }
                  e.stateNode = n;
                }
              else
                Ut || td(d, e.type, e.stateNode);
            else
              e.stateNode = Fb(
                d,
                r,
                e.memoizedProps
              );
          else
            u !== r ? (u === null ? (n = l.stateNode, n === null || Ke || n.parentNode.removeChild(n)) : u.count--, r === null ? Ut || td(d, e.type, e.stateNode) : Fb(d, r, e.memoizedProps)) : r === null && e.stateNode !== null && lf(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        break;
      case 27:
        on(n, e, r), sn(e), u & 512 && (Ke || l === null || Gt(l, l.return)), l !== null && u & 4 && lf(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (d = pi, pi = !1, on(n, e, r), pi = d, sn(e), u & 512 && (Ke || l === null || Gt(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            ga(n, ""), Ge = !0;
          } catch ($) {
            Je(e, e.return, $);
          }
        }
        u & 4 && e.stateNode != null && (n = e.memoizedProps, lf(
          e,
          n,
          l !== null ? l.memoizedProps : n
        )), u & 1024 && (hf = !0);
        break;
      case 6:
        if (on(n, e, r), sn(e), u & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          n = e.memoizedProps, r = e.stateNode;
          try {
            r.nodeValue = n, Ge = !0;
          } catch ($) {
            Je(e, e.return, $);
          }
        }
        break;
      case 3:
        if (Ge = !1, Zs = null, d = ei, ei = Kl(n.containerInfo), on(n, e, r), ei = d, sn(e), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Wa(n.containerInfo);
          } catch ($) {
            Je(e, e.return, $);
          }
        hf && (hf = !1, $g(e)), Ge = !1;
        break;
      case 4:
        u = pi, pi = Ut, l = sh(), d = ei, ei = Kl(
          e.stateNode.containerInfo
        ), on(n, e, r), sn(e), ei = d, Ge && Zl && (zs = !0), Ge = l, pi = u;
        break;
      case 12:
        on(n, e, r), sn(e);
        break;
      case 31:
        on(n, e, r), sn(e), u & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, js(e, n)));
        break;
      case 13:
        on(n, e, r), sn(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Ts = Et()), u & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, js(e, n)));
        break;
      case 22:
        d = e.memoizedState !== null, y = l !== null && l.memoizedState !== null;
        var k = Ut, _ = Ke, L = pi;
        Ut = k || d, pi = L || d, Ke = _ || y, on(n, e, r), Ke = _, pi = L, Ut = k, sn(e), u & 8192 && (n = e.stateNode, n._visibility = d ? n._visibility & -2 : n._visibility | 1, !d || l === null || y || Ut || Ke || (n = y || Ke, r = Ut, l = Ke, Ut = d || Ut, Ke = n, lr(e, 2), Ut = r, Ke = l), !d && pi || gf(e, d)), u & 4 && (n = e.updateQueue, n !== null && (r = n.retryQueue, r !== null && (n.retryQueue = null, js(e, r))));
        break;
      case 19:
        on(n, e, r), sn(e), u & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, js(e, n)));
        break;
      case 30:
        u & 512 && (Ke || l === null || Gt(l, l.return)), u = sh(), d = Zl, y = (r & 335544064) === r, k = e.memoizedProps, Zl = y && Ni(
          k.default,
          k.update
        ) !== "none", on(n, e, r), sn(e), y && l !== null && Ge && (e.flags |= 4), Zl = d, Ge = u;
        break;
      case 21:
        break;
      case 7:
        u & 512 && (Ke || l === null || Gt(l, l.return)), l && l.stateNode !== null && (l.stateNode._fragmentFiber = e);
      default:
        on(n, e, r), sn(e);
    }
  }
  function sn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var r, l = e.return; l !== null; ) {
          if (jg(l)) {
            r = l;
            break;
          }
          l = l.return;
        }
        l = null;
        for (var u = e.return; u !== null; ) {
          if (rf(u)) {
            var d = u.stateNode;
            l === null ? l = [d] : l.push(d);
          }
          if (nf(u)) break;
          u = u.return;
        }
        var y = l;
        if (r == null) throw Error(o(160));
        switch (r.tag) {
          case 27:
            var k = r.stateNode, _ = of(e);
            vs(
              e,
              _,
              k,
              y
            );
            break;
          case 5:
            var L = r.stateNode;
            r.flags & 32 && (ga(L, ""), r.flags &= -33);
            var $ = of(e);
            vs(
              e,
              $,
              L,
              y
            );
            break;
          case 3:
          case 4:
            var Q = r.stateNode.containerInfo, M = of(e);
            sf(
              e,
              M,
              Q,
              y
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (H) {
        Je(e, e.return, H);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function $g(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        $g(n), n.tag === 5 && n.flags & 1024 && (n = n.stateNode, Ja = !0, n.reset(), Ja = !1), e = e.sibling;
      }
  }
  function Ra(e, n) {
    if (n.subtreeFlags & 9270)
      for (n = n.child; n !== null; )
        qg(n, e), n = n.sibling;
    else Mg(n);
  }
  function qg(e, n) {
    var r = e.alternate;
    if (r === null) uf(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (mf = hi = !1, Tg(), Ra(n, e), !hi && !zs) {
            if (e = fi, e !== null)
              for (var l = 0; l < e.length; l += 3) {
                r = e[l];
                var u = e[l + 1];
                Nb(r, e[l + 2]), r = r.ownerDocument.documentElement, r !== null && r.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + u + ")"
                  }
                );
              }
            e = n.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), e.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), mf = !0;
          }
          fi = null;
          break;
        case 5:
          Ra(n, e);
          break;
        case 4:
          l = hi, hi = !1, Ra(n, e), hi && (zs = !0), hi = l;
          break;
        case 22:
          e.memoizedState === null && (r.memoizedState !== null ? uf(e, !1) : Ra(n, e));
          break;
        case 30:
          l = hi, u = Tg(), hi = !1, Ra(n, e), hi && (e.flags |= 4);
          var d = e.memoizedProps, y = e.stateNode;
          n = Ti(d, y), y = Ti(r.memoizedProps, y);
          var k = Ni(d.default, d.update);
          k === "none" ? n = !1 : (d = r.memoizedState, r.memoizedState = null, r = e.child, hn = 0, n = pf(
            e,
            r,
            n,
            y,
            k,
            d,
            !0
          ), hn !== (d === null ? 0 : d.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && n ? ($a(
            e,
            e.memoizedProps.onUpdate
          ), fi = u) : u !== null && (u.push.apply(u, fi), fi = u), hi = (e.flags & 32) !== 0 ? !0 : l;
          break;
        default:
          Ra(n, e);
      }
  }
  function mi(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Rg(e, n.alternate, n), n = n.sibling;
  }
  function lr(e, n) {
    for (e = e.child; e !== null; ) {
      var r = e, l = n;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ar(4, r, r.return), lr(
            r,
            l
          );
          break;
        case 1:
          Gt(r, r.return);
          var u = r.stateNode;
          typeof u.componentWillUnmount == "function" && zg(
            r,
            r.return,
            u
          ), lr(
            r,
            l
          );
          break;
        case 27:
          (l & 2) !== 0 && $b(
            r.stateNode,
            r.type,
            r.memoizedProps
          );
        case 5:
          Gt(r, r.return), r.tag !== 5 && r.tag !== 27 || Hl(r), lr(
            r,
            l
          );
          break;
        case 6:
          Hl(r);
          break;
        case 26:
          Gt(r, r.return), u = r.stateNode, r.memoizedState !== null || u === null || Ke || u.parentNode.removeChild(u), lr(
            r,
            l
          );
          break;
        case 22:
          r.memoizedState === null && lr(
            r,
            l
          );
          break;
        case 30:
          Gt(r, r.return), lr(
            r,
            l
          );
          break;
        case 7:
          Gt(r, r.return);
        default:
          lr(
            r,
            l
          );
      }
      e = e.sibling;
    }
  }
  function ti(e, n, r) {
    for (r = (n.subtreeFlags & 8772) !== 0 ? r : r & -2, n = n.child; n !== null; ) {
      var l = n.alternate, u = e, d = n, y = d.flags, k = (r & 1) !== 0;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          ti(
            u,
            d,
            r
          ), Il(4, d);
          break;
        case 1:
          if (ti(
            u,
            d,
            r
          ), l = d, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch ($) {
              Je(l, l.return, $);
            }
          if (l = d, u = l.updateQueue, u !== null) {
            var _ = l.stateNode;
            try {
              var L = u.shared.hiddenCallbacks;
              if (L !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < L.length; u++)
                  fm(L[u], _);
            } catch ($) {
              Je(l, l.return, $);
            }
          }
          k && y & 64 && Sg(d), ci(d, d.return);
          break;
        case 27:
          (r & 2) !== 0 && Eg(d);
        case 5:
          d.tag !== 5 && d.tag !== 27 || _g(d), ti(
            u,
            d,
            r
          ), k && l === null && y & 4 && af(d), ci(d, d.return);
          break;
        case 6:
          _g(d);
          break;
        case 26:
          _ = d.stateNode, d.memoizedState !== null || _ === null || Ut || td(
            Kl(_.ownerDocument),
            d.type,
            _
          ), ti(
            u,
            d,
            r
          ), k && l === null && y & 4 && af(d), ci(d, d.return);
          break;
        case 12:
          ti(
            u,
            d,
            r
          );
          break;
        case 31:
          ti(
            u,
            d,
            r
          ), k && y & 4 && Ig(u, d);
          break;
        case 13:
          ti(
            u,
            d,
            r
          ), k && y & 4 && Hg(u, d);
          break;
        case 22:
          d.memoizedState === null && ti(
            u,
            d,
            r
          ), ci(d, d.return);
          break;
        case 30:
          ti(
            u,
            d,
            r
          ), ci(d, d.return);
          break;
        case 7:
          ci(d, d.return);
        default:
          ti(
            u,
            d,
            r
          );
      }
      n = n.sibling;
    }
  }
  function xf(e, n) {
    var r = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== r && (e != null && e.refCount++, r != null && jl(r));
  }
  function yf(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && jl(e));
  }
  function $n(e, n, r, l) {
    var u = (r & 335544064) === r;
    if (n.subtreeFlags & (u ? 10262 : 10256))
      for (n = n.child; n !== null; )
        Vg(
          e,
          n,
          r,
          l
        ), n = n.sibling;
    else u && Og(n);
  }
  function Vg(e, n, r, l) {
    var u = (r & 335544064) === r;
    u && n.alternate === null && n.return !== null && n.return.alternate !== null && Ss(n);
    var d = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        $n(
          e,
          n,
          r,
          l
        ), d & 2048 && Il(9, n);
        break;
      case 1:
        $n(
          e,
          n,
          r,
          l
        );
        break;
      case 3:
        $n(
          e,
          n,
          r,
          l
        ), u && mf && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), d & 2048 && (d = null, n.alternate !== null && (d = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== d && (n.refCount++, d != null && jl(d)));
        break;
      case 12:
        if (d & 2048) {
          $n(
            e,
            n,
            r,
            l
          ), d = n.stateNode;
          try {
            var y = n.memoizedProps, k = y.id, _ = y.onPostCommit;
            typeof _ == "function" && _(
              k,
              n.alternate === null ? "mount" : "update",
              d.passiveEffectDuration,
              -0
            );
          } catch (L) {
            Je(n, n.return, L);
          }
        } else
          $n(
            e,
            n,
            r,
            l
          );
        break;
      case 31:
        $n(
          e,
          n,
          r,
          l
        );
        break;
      case 13:
        $n(
          e,
          n,
          r,
          l
        );
        break;
      case 23:
        break;
      case 22:
        y = n.stateNode, k = n.alternate, n.memoizedState !== null ? (u && k !== null && k.memoizedState === null && Ss(k), y._visibility & 2 ? $n(
          e,
          n,
          r,
          l
        ) : $l(
          e,
          n
        )) : (u && k !== null && k.memoizedState !== null && Ss(n), y._visibility & 2 ? $n(
          e,
          n,
          r,
          l
        ) : (y._visibility |= 2, La(
          e,
          n,
          r,
          l,
          (n.subtreeFlags & 10256) !== 0 || !1
        ))), d & 2048 && xf(k, n);
        break;
      case 24:
        $n(
          e,
          n,
          r,
          l
        ), d & 2048 && yf(n.alternate, n);
        break;
      case 30:
        u && (d = n.alternate, d !== null && (di(d.child, !0), di(n.child, !0))), $n(
          e,
          n,
          r,
          l
        );
        break;
      default:
        $n(
          e,
          n,
          r,
          l
        );
    }
  }
  function La(e, n, r, l, u) {
    for (u = u && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var d = e, y = n, k = r, _ = l, L = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          La(
            d,
            y,
            k,
            _,
            u
          ), Il(8, y);
          break;
        case 23:
          break;
        case 22:
          var $ = y.stateNode;
          y.memoizedState !== null ? $._visibility & 2 ? La(
            d,
            y,
            k,
            _,
            u
          ) : $l(
            d,
            y
          ) : ($._visibility |= 2, La(
            d,
            y,
            k,
            _,
            u
          )), u && L & 2048 && xf(
            y.alternate,
            y
          );
          break;
        case 24:
          La(
            d,
            y,
            k,
            _,
            u
          ), u && L & 2048 && yf(y.alternate, y);
          break;
        default:
          La(
            d,
            y,
            k,
            _,
            u
          );
      }
      n = n.sibling;
    }
  }
  function $l(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var r = e, l = n, u = l.flags;
        switch (l.tag) {
          case 22:
            $l(r, l), u & 2048 && xf(
              l.alternate,
              l
            );
            break;
          case 24:
            $l(r, l), u & 2048 && yf(l.alternate, l);
            break;
          default:
            $l(r, l);
        }
        n = n.sibling;
      }
  }
  var Gr = 8192;
  function Fr(e, n, r) {
    if (e.subtreeFlags & Gr)
      for (e = e.child; e !== null; )
        Yg(
          e,
          n,
          r
        ), e = e.sibling;
  }
  function Yg(e, n, r) {
    switch (e.tag) {
      case 26:
        Fr(
          e,
          n,
          r
        ), e.flags & Gr && (e.memoizedState !== null ? Yk(
          r,
          ei,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (n & 335544128) === n && Jb(r, e)));
        break;
      case 5:
        Fr(
          e,
          n,
          r
        ), e.flags & Gr && (e = e.stateNode, (n & 335544128) === n && Jb(r, e));
        break;
      case 3:
      case 4:
        var l = ei;
        ei = Kl(e.stateNode.containerInfo), Fr(
          e,
          n,
          r
        ), ei = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Gr, Gr = 16777216, Fr(
          e,
          n,
          r
        ), Gr = l) : Fr(
          e,
          n,
          r
        ));
        break;
      case 30:
        if ((e.flags & Gr) !== 0 && (l = e.memoizedProps.name, l != null && l !== "auto")) {
          var u = e.stateNode;
          u.paired = null, zn === null && (zn = /* @__PURE__ */ new Map()), zn.set(l, u);
        }
        Fr(
          e,
          n,
          r
        );
        break;
      default:
        Fr(
          e,
          n,
          r
        );
    }
  }
  function Gg(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function ql(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          Bt = l, Xg(
            l,
            e
          );
        }
      Gg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Fg(e), e = e.sibling;
  }
  function Fg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ql(e), e.flags & 2048 && ar(9, e, e.return);
        break;
      case 3:
        ql(e);
        break;
      case 12:
        ql(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, Es(e)) : ql(e);
        break;
      default:
        ql(e);
    }
  }
  function Es(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          Bt = l, Xg(
            l,
            e
          );
        }
      Gg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          ar(8, n, n.return), Es(n);
          break;
        case 22:
          r = n.stateNode, r._visibility & 2 && (r._visibility &= -3, Es(n));
          break;
        default:
          Es(n);
      }
      e = e.sibling;
    }
  }
  function Xg(e, n) {
    for (; Bt !== null; ) {
      var r = Bt;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          ar(8, r, n);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var l = r.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          jl(r.memoizedState.cache);
      }
      if (l = r.child, l !== null) l.return = r, Bt = l;
      else
        e: for (r = e; Bt !== null; ) {
          l = Bt;
          var u = l.sibling, d = l.return;
          if (Ug(l), l === r) {
            Bt = null;
            break e;
          }
          if (u !== null) {
            u.return = d, Bt = u;
            break e;
          }
          Bt = d;
        }
    }
  }
  var H2 = {
    getCacheForType: function(e) {
      var n = qt(Ct), r = n.data.get(e);
      return r === void 0 && (r = e(), n.data.set(e, r)), r;
    },
    cacheSignal: function() {
      return qt(Ct).controller.signal;
    }
  }, Z2 = typeof WeakMap == "function" ? WeakMap : Map, Qe = 0, nt = null, Ie = null, Ze = 0, Pe = 0, _n = null, or = !1, Ua = !1, vf = !1, Ii = 0, xt = 0, sr = 0, Xr = 0, Cs = 0, jn = 0, Ba = 0, Vl = null, gn = null, wf = !1, Ts = 0, Qg = 0, Ns = 1 / 0, As = null, ur = null, dt = 0, ni = null, Qr = null, gi = 0, kf = 0, Sf = null, Kg = null, Ia = null, Ha = null, Za = null, Yl = 0, Os = null;
  function En() {
    return (Qe & 2) !== 0 && Ze !== 0 ? Ze & -Ze : fe.T !== null ? Mf() : Wp();
  }
  function Pg() {
    if (jn === 0)
      if ((Ze & 536870912) === 0 || Ue) {
        var e = gt;
        gt <<= 1, (gt & 3932160) === 0 && (gt = 262144), jn = e;
      } else jn = 536870912;
    return e = Vt.current, e !== null && (e.flags |= 32), jn;
  }
  function $a(e, n) {
    if (n != null) {
      var r = e.stateNode, l = r.ref;
      l === null && (l = r.ref = Ab(
        Ti(e.memoizedProps, r)
      )), Ha === null && (Ha = []), Ha.push(n.bind(null, l));
    }
  }
  function bn(e, n, r) {
    (e === nt && (Pe === 2 || Pe === 9) || e.cancelPendingCommit !== null) && (qa(e, 0), cr(
      e,
      Ze,
      jn,
      !1
    )), dl(e, r), ((Qe & 2) === 0 || e !== nt) && (e === nt && ((Qe & 2) === 0 && (Xr |= r), xt === 4 && cr(
      e,
      Ze,
      jn,
      !1
    )), bi(e));
  }
  function Jg(e, n, r) {
    if ((Qe & 6) !== 0) throw Error(o(327));
    var l = !r && (n & 127) === 0 && (n & e.expiredLanes) === 0 || fl(e, n), u = l ? V2(e, n) : _f(e, n, !0), d = l;
    do {
      if (u === 0) {
        Ua && !l && cr(e, n, 0, !1);
        break;
      } else {
        if (r = e.current.alternate, d && !$2(r)) {
          u = _f(e, n, !1), d = !1;
          continue;
        }
        if (u === 2) {
          if (d = n, e.errorRecoveryDisabledLanes & d)
            var y = 0;
          else
            y = e.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            n = y;
            e: {
              var k = e;
              u = Vl;
              var _ = k.current.memoizedState.isDehydrated;
              if (_ && (qa(k, y).flags |= 256), y = _f(
                k,
                y,
                !1
              ), y !== 2 && y !== 6) {
                if (vf && !_) {
                  k.errorRecoveryDisabledLanes |= d, Xr |= d, u = 4;
                  break e;
                }
                d = gn, gn = u, d !== null && (gn === null ? gn = d : gn.push.apply(
                  gn,
                  d
                ));
              }
              u = y;
            }
            if (d = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          qa(e, 0), cr(e, n, 0, !0);
          break;
        }
        e: {
          switch (l = e, d = u, d) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((n & 4194048) !== n && (n & 62914560) !== n)
                break;
            case 6:
              cr(
                l,
                n,
                jn,
                !or
              );
              break e;
            case 2:
              gn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((n & 62914560) === n && (u = Ts + 300 - Et(), 10 < u)) {
            if (cr(
              l,
              n,
              jn,
              !or
            ), Co(l, 0, !0) !== 0) break e;
            gi = n, l.timeoutHandle = Vf(
              Wg.bind(
                null,
                l,
                r,
                gn,
                As,
                wf,
                n,
                jn,
                Xr,
                Ba,
                or,
                d,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          Wg(
            l,
            r,
            gn,
            As,
            wf,
            n,
            jn,
            Xr,
            Ba,
            or,
            d,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    bi(e);
  }
  function Wg(e, n, r, l, u, d, y, k, _, L, $, Q, M, H) {
    e.timeoutHandle = -1;
    var oe = n.subtreeFlags, be = (d & 335544064) === d;
    if (Q = null, (be || oe & 8192 || (oe & 16785408) === 16785408) && (Q = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: oi
    }, zn = null, Yg(
      n,
      d,
      Q
    ), be && (oe = Q, be = e.containerInfo, be = (be.nodeType === 9 ? be : be.ownerDocument).__reactViewTransition, be != null && (oe.count++, oe.waitingForViewTransition = !0, oe = Wl.bind(oe), be.finished.then(oe, oe))), oe = (d & 62914560) === d ? Ts - Et() : (d & 4194048) === d ? Qg - Et() : 0, oe = Gk(
      Q,
      oe
    ), oe !== null)) {
      gi = d, e.cancelPendingCommit = oe(
        ob.bind(
          null,
          e,
          n,
          d,
          r,
          l,
          u,
          y,
          k,
          _,
          L,
          $,
          Q,
          null,
          M,
          H
        )
      ), cr(e, d, y, !L);
      return;
    }
    ob(
      e,
      n,
      d,
      r,
      l,
      u,
      y,
      k,
      _,
      L,
      $,
      Q
    );
  }
  function $2(e) {
    for (var n = e; ; ) {
      var r = n.tag;
      if ((r === 0 || r === 11 || r === 15) && n.flags & 16384 && (r = n.updateQueue, r !== null && (r = r.stores, r !== null)))
        for (var l = 0; l < r.length; l++) {
          var u = r[l], d = u.getSnapshot;
          u = u.value;
          try {
            if (!kn(d(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (r = n.child, n.subtreeFlags & 16384 && r !== null)
        r.return = n, n = r;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function cr(e, n, r, l) {
    n = Xp(e, n), n &= ~Cs, n &= ~Xr, e.suspendedLanes |= n, e.pingedLanes &= ~n, l && (e.warmLanes |= n), l = e.expirationTimes;
    for (var u = n; 0 < u; ) {
      var d = 31 - st(u), y = 1 << d;
      l[d] = -1, u &= ~y;
    }
    r !== 0 && Kp(e, r, n);
  }
  function Ms() {
    return (Qe & 6) === 0 ? (Gl(0), !1) : !0;
  }
  function zf() {
    if (Ie !== null) {
      if (Pe === 0)
        var e = Ie.return;
      else
        e = Ie, Mi = Lr = null, Ac(e), Ta = null, Tl = 0, e = Ie;
      for (; e !== null; )
        kg(e.alternate, e), e = e.return;
      Ie = null;
    }
  }
  function qa(e, n) {
    var r = e.timeoutHandle;
    return r !== -1 && (e.timeoutHandle = -1, dk(r)), r = e.cancelPendingCommit, r !== null && (e.cancelPendingCommit = null, r()), gi = 0, zf(), nt = e, Ie = r = Ai(e.current, null), Ze = n, Pe = 0, _n = null, or = !1, Ua = fl(e, n), vf = !1, Ba = jn = Cs = Xr = sr = xt = 0, gn = Vl = null, wf = !1, Ii = Xp(e, n), Zo(), r;
  }
  function eb(e, n) {
    Re = null, fe.H = ds, n === Ca || n === Jo ? (n = om(), Pe = 3) : n === xc ? (n = om(), Pe = 4) : Pe = n === Gc ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, _n = n, Ie === null && (xt = 1, ps(
      e,
      Bn(n, e.current)
    ));
  }
  function tb() {
    var e = Vt.current;
    return e === null ? !0 : (Ze & 4194048) === Ze ? Jt === null : (Ze & 62914560) === Ze || (Ze & 536870912) !== 0 ? e === Jt : !1;
  }
  function nb() {
    var e = fe.H;
    return fe.H = ds, e === null ? ds : e;
  }
  function ib() {
    var e = fe.A;
    return fe.A = H2, e;
  }
  function Ds() {
    xt = 4, or || (Ze & 4194048) !== Ze && Vt.current !== null || (Ua = !0), (sr & 134217727) === 0 && (Xr & 134217727) === 0 || nt === null || cr(
      nt,
      Ze,
      jn,
      !1
    );
  }
  function _f(e, n, r) {
    var l = Qe;
    Qe |= 2;
    var u = nb(), d = ib();
    (nt !== e || Ze !== n) && (As = null, qa(e, n)), n = !1;
    var y = xt;
    e: do
      try {
        if (Pe !== 0 && Ie !== null) {
          var k = Ie, _ = _n;
          switch (Pe) {
            case 8:
              zf(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Vt.current === null && (n = !0);
              var L = Pe;
              if (Pe = 0, _n = null, Va(e, k, _, L), r && Ua) {
                y = 0;
                break e;
              }
              break;
            default:
              L = Pe, Pe = 0, _n = null, Va(e, k, _, L);
          }
        }
        q2(), y = xt;
        break;
      } catch ($) {
        eb(e, $);
      }
    while (!0);
    return n && e.shellSuspendCounter++, Mi = Lr = null, Qe = l, fe.H = u, fe.A = d, Ie === null && (nt = null, Ze = 0, Zo()), y;
  }
  function q2() {
    for (; Ie !== null; ) rb(Ie);
  }
  function V2(e, n) {
    var r = Qe;
    Qe |= 2;
    var l = nb(), u = ib();
    nt !== e || Ze !== n ? (As = null, Ns = Et() + 500, qa(e, n)) : Ua = fl(
      e,
      n
    );
    e: do
      try {
        if (Pe !== 0 && Ie !== null) {
          n = Ie;
          var d = _n;
          t: switch (Pe) {
            case 1:
              Pe = 0, _n = null, Va(e, n, d, 1);
              break;
            case 2:
            case 9:
              if (am(d)) {
                Pe = 0, _n = null, ab(n);
                break;
              }
              n = function() {
                Pe !== 2 && Pe !== 9 || nt !== e || (Pe = 7), bi(e);
              }, d.then(n, n);
              break e;
            case 3:
              Pe = 7;
              break e;
            case 4:
              Pe = 5;
              break e;
            case 7:
              am(d) ? (Pe = 0, _n = null, ab(n)) : (Pe = 0, _n = null, Va(e, n, d, 7));
              break;
            case 5:
              var y = null;
              switch (Ie.tag) {
                case 26:
                  y = Ie.memoizedState;
                case 5:
                case 27:
                  var k = Ie;
                  if (y ? Kb(y) : k.stateNode.complete) {
                    Pe = 0, _n = null;
                    var _ = k.sibling;
                    if (_ !== null) Ie = _;
                    else {
                      var L = k.return;
                      L !== null ? (Ie = L, Rs(L)) : Ie = null;
                    }
                    break t;
                  }
              }
              Pe = 0, _n = null, Va(e, n, d, 5);
              break;
            case 6:
              Pe = 0, _n = null, Va(e, n, d, 6);
              break;
            case 8:
              zf(), xt = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Y2();
        break;
      } catch ($) {
        eb(e, $);
      }
    while (!0);
    return Mi = Lr = null, fe.H = l, fe.A = u, Qe = r, Ie !== null ? 0 : (nt = null, Ze = 0, Zo(), xt);
  }
  function Y2() {
    for (; Ie !== null && !nn(); )
      rb(Ie);
  }
  function rb(e) {
    var n = vg(e.alternate, e, Ii);
    e.memoizedProps = e.pendingProps, n === null ? Rs(e) : Ie = n;
  }
  function ab(e) {
    var n = e, r = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = pg(
          r,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ze
        );
        break;
      case 11:
        n = pg(
          r,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ze
        );
        break;
      case 5:
        Ac(n);
        var l = n;
        l === Lt && (Ue ? (Fo(l), l.tag === 5 && l.stateNode != null && (at = l.stateNode)) : (Fo(l), Ue = !0));
      default:
        kg(r, n), n = Ie = Xh(n, Ii), n = vg(r, n, Ii);
    }
    e.memoizedProps = e.pendingProps, n === null ? Rs(e) : Ie = n;
  }
  function Va(e, n, r, l) {
    Mi = Lr = null, Ac(n), Ta = null, Tl = 0;
    var u = n.return;
    try {
      if (O2(
        e,
        u,
        n,
        r,
        Ze
      )) {
        xt = 1, ps(
          e,
          Bn(r, e.current)
        ), Ie = null;
        return;
      }
    } catch (d) {
      if (u !== null) throw Ie = u, d;
      xt = 1, ps(
        e,
        Bn(r, e.current)
      ), Ie = null;
      return;
    }
    n.flags & 32768 ? (Ue || l === 1 ? e = !0 : Ua || (Ze & 536870912) !== 0 ? e = !1 : (or = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Vt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), lb(n, e)) : Rs(n);
  }
  function Rs(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        lb(
          n,
          or
        );
        return;
      }
      e = n.return;
      var r = L2(
        n.alternate,
        n,
        Ii
      );
      if (r !== null) {
        Ie = r;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ie = n;
        return;
      }
      Ie = n = e;
    } while (n !== null);
    xt === 0 && (xt = 5);
  }
  function lb(e, n) {
    do {
      var r = U2(e.alternate, e);
      if (r !== null) {
        r.flags &= 32767, Ie = r;
        return;
      }
      if (r = e.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !n && (e = e.sibling, e !== null)) {
        Ie = e;
        return;
      }
      Ie = e = r;
    } while (e !== null);
    xt = 6, Ie = null;
  }
  function ob(e, n, r, l, u, d, y, k, _, L, $, Q) {
    e.cancelPendingCommit = null;
    do
      Ls();
    while (dt !== 0);
    if ((Qe & 6) !== 0) throw Error(o(327));
    if (n !== null) {
      if (n === e.current) throw Error(o(177));
      e === nt && (Ie = nt = null, Ze = 0), Qr = n, ni = e, gi = r, Sf = u, Kg = l, G2(
        e,
        n,
        r,
        y,
        k,
        _,
        Q
      );
    }
  }
  function G2(e, n, r, l, u, d, y) {
    var k = n.lanes | n.childLanes;
    if (kf = k, k |= ac, xw(
      e,
      r,
      k,
      l,
      u,
      d
    ), Ha = null, (r & 335544064) === r ? (Za = v2(e), l = 10262) : (Za = null, l = 10256), (n.subtreeFlags & l) !== 0 || (n.flags & l) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, J2(ua, function() {
      return Tf(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), ws = !1, l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
      l = fe.T, fe.T = null, u = _e.p, _e.p = 2, d = Qe, Qe |= 4;
      try {
        B2(e, n, r);
      } finally {
        Qe = d, _e.p = u, fe.T = l;
      }
    }
    dt = 1, ws ? Ia = xk(
      y,
      e.containerInfo,
      Za,
      jf,
      Ef,
      X2,
      Cf,
      Tf,
      F2
    ) : (jf(), Ef(), Cf());
  }
  function F2(e) {
    if (dt !== 0) {
      var n = ni.onRecoverableError;
      n(e, { componentStack: null });
    }
  }
  function X2() {
    dt === 3 && (dt = 0, qg(Qr, ni), dt = 4);
  }
  function jf() {
    if (dt === 1) {
      dt = 0;
      var e = ni, n = Qr, r = gi, l = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || l) {
        l = fe.T, fe.T = null;
        var u = _e.p;
        _e.p = 2;
        var d = Qe;
        Qe |= 4;
        try {
          Zl = zs = !1, Zg(n, e, r), r = Zf;
          var y = Bh(e.containerInfo), k = r.focusedElem, _ = r.selectionRange;
          if (y !== k && k && k.ownerDocument && Uh(
            k.ownerDocument.documentElement,
            k
          )) {
            if (_ !== null && ec(k)) {
              var L = _.start, $ = _.end;
              if ($ === void 0 && ($ = L), "selectionStart" in k)
                k.selectionStart = L, k.selectionEnd = Math.min(
                  $,
                  k.value.length
                );
              else {
                var Q = k.ownerDocument || document, M = Q && Q.defaultView || window;
                if (M.getSelection) {
                  var H = M.getSelection(), oe = k.textContent.length, be = Math.min(_.start, oe), Le = _.end === void 0 ? be : Math.min(_.end, oe);
                  !H.extend && be > Le && (y = Le, Le = be, be = y);
                  var D = Lh(
                    k,
                    be
                  ), O = Lh(
                    k,
                    Le
                  );
                  if (D && O && (H.rangeCount !== 1 || H.anchorNode !== D.node || H.anchorOffset !== D.offset || H.focusNode !== O.node || H.focusOffset !== O.offset)) {
                    var B = Q.createRange();
                    B.setStart(D.node, D.offset), H.removeAllRanges(), be > Le ? (H.addRange(B), H.extend(O.node, O.offset)) : (B.setEnd(O.node, O.offset), H.addRange(B));
                  }
                }
              }
            }
            for (Q = [], H = k; H = H.parentNode; )
              H.nodeType === 1 && Q.push({
                element: H,
                left: H.scrollLeft,
                top: H.scrollTop
              });
            for (typeof k.focus == "function" && k.focus(), k = 0; k < Q.length; k++) {
              var X = Q[k];
              X.element.scrollLeft = X.left, X.element.scrollTop = X.top;
            }
          }
          Ja = !!Hf, Zf = Hf = null;
        } finally {
          Qe = d, _e.p = u, fe.T = l;
        }
      }
      e.current = n, dt = 2;
    }
  }
  function Ef() {
    if (dt === 2) {
      dt = 0;
      var e = ni, n = Qr, r = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || r) {
        r = fe.T, fe.T = null;
        var l = _e.p;
        _e.p = 2;
        var u = Qe;
        Qe |= 4;
        try {
          Rg(e, n.alternate, n);
        } finally {
          Qe = u, _e.p = l, fe.T = r;
        }
      }
      dt = 3;
    }
  }
  function Cf() {
    if (dt === 4 || dt === 3) {
      dt = 0;
      var e = Ia;
      Ia = null, Yi();
      var n = ni, r = Qr, l = gi, u = Kg, d = (l & 335544064) === l ? 10262 : 10256;
      if ((r.subtreeFlags & d) !== 0 || (r.flags & d) !== 0 ? dt = 5 : (dt = 0, Qr = ni = null, sb(n, n.pendingLanes)), d = n.pendingLanes, d === 0 && (ur = null), Lu(l), r = r.stateNode, xe && typeof xe.onCommitFiberRoot == "function")
        try {
          xe.onCommitFiberRoot(
            ye,
            r,
            void 0,
            (r.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        r = fe.T, d = _e.p, _e.p = 2, fe.T = null;
        try {
          for (var y = n.onRecoverableError, k = 0; k < u.length; k++) {
            var _ = u[k];
            y(_.value, {
              componentStack: _.stack
            });
          }
        } finally {
          fe.T = r, _e.p = d;
        }
      }
      if (u = Ha, y = Za, Za = null, u !== null && (Ha = null, y === null && (y = []), e !== null))
        for (_ = 0; _ < u.length; _++)
          r = (0, u[_])(
            y
          ), r !== void 0 && e.finished.finally(r);
      (gi & 3) !== 0 && Ls(), bi(n), d = n.pendingLanes, (l & 261930) !== 0 && (d & 42) !== 0 ? n === Os ? Yl++ : (Yl = 0, Os = n) : (Yl = 0, Os = null), Gl(0);
    }
  }
  function sb(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, jl(n)));
  }
  function Ls() {
    return Ia !== null && (Ia.skipTransition(), Ia = null), jf(), Ef(), Cf(), Tf();
  }
  function Tf() {
    if (dt !== 5) return !1;
    var e = ni, n = kf;
    kf = 0;
    var r = Lu(gi), l = fe.T, u = _e.p;
    try {
      _e.p = 32 > r ? 32 : r, fe.T = null, r = Sf, Sf = null;
      var d = ni, y = gi;
      if (dt = 0, Qr = ni = null, gi = 0, (Qe & 6) !== 0) throw Error(o(331));
      var k = Qe;
      if (Qe |= 4, Fg(d.current), Vg(
        d,
        d.current,
        y,
        r
      ), Qe = k, Gl(0, !1), xe && typeof xe.onPostCommitFiberRoot == "function")
        try {
          xe.onPostCommitFiberRoot(ye, d);
        } catch {
        }
      return !0;
    } finally {
      _e.p = u, fe.T = l, sb(e, n);
    }
  }
  function ub(e, n, r) {
    n = Bn(r, n), n = Yc(e.stateNode, n, 2), e = tr(e, n, 2), e !== null && (dl(e, 2), bi(e));
  }
  function Je(e, n, r) {
    if (e.tag === 3)
      ub(e, e, r);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          ub(
            n,
            e,
            r
          );
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ur === null || !ur.has(l))) {
            e = Bn(r, e), r = ag(2), l = tr(n, r, 2), l !== null && (lg(
              r,
              l,
              n,
              e
            ), dl(l, 2), bi(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function Nf(e, n, r) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Z2();
      var u = /* @__PURE__ */ new Set();
      l.set(n, u);
    } else
      u = l.get(n), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(n, u));
    u.has(r) || (vf = !0, u.add(r), e = Q2.bind(null, e, n, r), n.then(e, e));
  }
  function Q2(e, n, r) {
    var l = e.pingCache;
    l !== null && l.delete(n), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, nt === e && (Ze & r) === r && ((xt === 4 || xt === 3 && (Ze & 62914560) === Ze && 300 > Et() - Ts) && (Qe & 2) === 0 ? qa(e, 0) : Cs |= r, Ba === Ze && (Ba = 0)), bi(e);
  }
  function cb(e, n) {
    n === 0 && (n = Qp()), e = Mr(e, n), e !== null && (dl(e, n), bi(e));
  }
  function K2(e) {
    var n = e.memoizedState, r = 0;
    n !== null && (r = n.retryLane), cb(e, r);
  }
  function P2(e, n) {
    var r = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, u = e.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(n), cb(e, r);
  }
  function J2(e, n) {
    return Pt(e, n);
  }
  var Ya = null, Ga = null, Af = !1, Us = !1, Of = !1, fr = 0;
  function bi(e) {
    e !== Ga && e.next === null && (Ga === null ? Ya = Ga = e : Ga = Ga.next = e), Us = !0, Af || (Af = !0, ek());
  }
  function Gl(e, n) {
    if (!Of && Us) {
      Of = !0;
      do
        for (var r = !1, l = Ya; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var d = 0;
            else {
              var y = l.suspendedLanes, k = l.pingedLanes;
              d = (1 << 31 - st(42 | e) + 1) - 1, d &= u & ~(y & ~k), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
            }
            d !== 0 && (r = !0, hb(l, d));
          } else
            d = Ze, d = Co(
              l,
              l === nt ? d : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (d & 3) === 0 || fl(l, d) || (r = !0, hb(l, d));
          l = l.next;
        }
      while (r);
      Of = !1;
    }
  }
  function W2() {
    fb();
  }
  function fb() {
    Us = Af = !1;
    var e = 0;
    fr !== 0 && fk() && (e = fr);
    for (var n = Et(), r = null, l = Ya; l !== null; ) {
      var u = l.next, d = db(l, n);
      d === 0 ? (l.next = null, r === null ? Ya = u : r.next = u, u === null && (Ga = r)) : (r = l, (e !== 0 || (d & 3) !== 0) && (Us = !0)), l = u;
    }
    dt !== 0 && dt !== 5 || Gl(e), fr !== 0 && (fr = 0);
  }
  function db(e, n) {
    for (var r = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d; ) {
      var y = 31 - st(d), k = 1 << y, _ = u[y];
      _ === -1 ? ((k & r) === 0 || (k & l) !== 0) && (u[y] = bw(k, n)) : _ <= n && (e.expiredLanes |= k), d &= ~k;
    }
    if (n = nt, r = Ze, r = Co(
      e,
      e === n ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, r === 0 || e === n && (Pe === 2 || Pe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && jt(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((r & 3) === 0 || fl(e, r)) {
      if (n = r & -r, n === e.callbackPriority) return n;
      switch (l !== null && jt(l), Lu(r)) {
        case 2:
        case 8:
          r = rn;
          break;
        case 32:
          r = ua;
          break;
        case 268435456:
          r = Cr;
          break;
        default:
          r = ua;
      }
      return l = pb.bind(null, e), r = Pt(r, l), e.callbackPriority = n, e.callbackNode = r, n;
    }
    return l !== null && l !== null && jt(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function pb(e, n) {
    if (dt !== 0 && dt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var r = e.callbackNode;
    if (Ls() && e.callbackNode !== r)
      return null;
    var l = Ze;
    return l = Co(
      e,
      e === nt ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Jg(e, l, n), db(e, Et()), e.callbackNode != null && e.callbackNode === r ? pb.bind(null, e) : null);
  }
  function hb(e, n) {
    if (Ls()) return null;
    Jg(e, n, !0);
  }
  function ek() {
    pk(function() {
      (Qe & 6) !== 0 ? Pt(
        Qn,
        W2
      ) : fb();
    });
  }
  function Mf() {
    if (fr === 0) {
      var e = Ir;
      e === 0 && (e = Ye, Ye <<= 1, (Ye & 261888) === 0 && (Ye = 256)), fr = e;
    }
    return fr;
  }
  function mb(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Mo(e);
  }
  function tk(e, n, r, l, u) {
    if (n === "submit" && r && r.stateNode === u) {
      var d = mb(
        (u[dn] || null).action
      ), y = l.submitter;
      y && (n = (n = y[dn] || null) ? mb(n.formAction) : y.getAttribute("formAction"), n !== null && (d = n, y = null));
      var k = new Uo(
        "action",
        "action",
        null,
        l,
        u
      );
      e.push({
        event: k,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (fr !== 0) {
                  var _ = new FormData(u, y);
                  Hc(
                    r,
                    {
                      pending: !0,
                      data: _,
                      method: u.method,
                      action: d
                    },
                    null,
                    _
                  );
                }
              } else
                typeof d == "function" && (k.preventDefault(), _ = new FormData(u, y), Hc(
                  r,
                  {
                    pending: !0,
                    data: _,
                    method: u.method,
                    action: d
                  },
                  d,
                  _
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Df = 0; Df < rc.length; Df++) {
    var Rf = rc[Df], nk = Rf.toLowerCase(), ik = Rf[0].toUpperCase() + Rf.slice(1);
    Jn(
      nk,
      "on" + ik
    );
  }
  Jn(Zh, "onAnimationEnd"), Jn($h, "onAnimationIteration"), Jn(qh, "onAnimationStart"), Jn("dblclick", "onDoubleClick"), Jn("focusin", "onFocus"), Jn("focusout", "onBlur"), Jn(d2, "onTransitionRun"), Jn(p2, "onTransitionStart"), Jn(h2, "onTransitionCancel"), Jn(Vh, "onTransitionEnd"), ha("onMouseEnter", ["mouseout", "mouseover"]), ha("onMouseLeave", ["mouseout", "mouseover"]), ha("onPointerEnter", ["pointerout", "pointerover"]), ha("onPointerLeave", ["pointerout", "pointerover"]), Nr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Nr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Nr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Nr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Nr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Nr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Fl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), rk = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl)
  );
  function gb(e, n) {
    n = (n & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var l = e[r], u = l.event;
      l = l.listeners;
      e: {
        var d = void 0;
        if (n)
          for (var y = l.length - 1; 0 <= y; y--) {
            var k = l[y], _ = k.instance, L = k.currentTarget;
            if (k = k.listener, _ !== d && u.isPropagationStopped())
              break e;
            d = k, u.currentTarget = L;
            try {
              d(u);
            } catch ($) {
              Ho($);
            }
            u.currentTarget = null, d = _;
          }
        else
          for (y = 0; y < l.length; y++) {
            if (k = l[y], _ = k.instance, L = k.currentTarget, k = k.listener, _ !== d && u.isPropagationStopped())
              break e;
            d = k, u.currentTarget = L;
            try {
              d(u);
            } catch ($) {
              Ho($);
            }
            u.currentTarget = null, d = _;
          }
      }
    }
  }
  function He(e, n) {
    var r = n[th];
    r === void 0 && (r = n[th] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    r.has(l) || (bb(n, e, 2, !1), r.add(l));
  }
  function Lf(e, n, r) {
    var l = 0;
    n && (l |= 4), bb(
      r,
      e,
      l,
      n
    );
  }
  var Bs = "_reactListening" + Math.random().toString(36).slice(2);
  function Uf(e) {
    if (!e[Bs]) {
      e[Bs] = !0, rh.forEach(function(r) {
        r !== "selectionchange" && (rk.has(r) || Lf(r, !1, e), Lf(r, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Bs] || (n[Bs] = !0, Lf("selectionchange", !1, n));
    }
  }
  function bb(e, n, r, l) {
    switch (lx(n)) {
      case 2:
        var u = Kk;
        break;
      case 8:
        u = Pk;
        break;
      default:
        u = id;
    }
    r = u.bind(
      null,
      n,
      r,
      e
    ), u = void 0, !Vu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(n, r, {
      capture: !0,
      passive: u
    }) : e.addEventListener(n, r, !0) : u !== void 0 ? e.addEventListener(n, r, {
      passive: u
    }) : e.addEventListener(n, r, !1);
  }
  function Bf(e, n, r, l, u) {
    var d = l;
    if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var y = l.tag;
        if (y === 3 || y === 4) {
          var k = l.stateNode.containerInfo;
          if (k === u) break;
          if (y === 4)
            for (y = l.return; y !== null; ) {
              var _ = y.tag;
              if ((_ === 3 || _ === 4) && y.stateNode.containerInfo === u)
                return;
              y = y.return;
            }
          for (; k !== null; ) {
            if (y = Tr(k), y === null) return;
            if (_ = y.tag, _ === 5 || _ === 6 || _ === 26 || _ === 27) {
              l = d = y;
              continue e;
            }
            k = k.parentNode;
          }
        }
        l = l.return;
      }
    bh(function() {
      var L = d, $ = $u(r), Q = [];
      e: {
        var M = Yh.get(e);
        if (M !== void 0) {
          var H = Uo, oe = e;
          switch (e) {
            case "keypress":
              if (Ro(r) === 0) break e;
            case "keydown":
            case "keyup":
              H = $w;
              break;
            case "focusin":
              oe = "focus", H = Xu;
              break;
            case "focusout":
              oe = "blur", H = Xu;
              break;
            case "beforeblur":
            case "afterblur":
              H = Xu;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = vh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = Nw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = Fw;
              break;
            case Zh:
            case $h:
            case qh:
              H = Mw;
              break;
            case Vh:
              H = Qw;
              break;
            case "scroll":
            case "scrollend":
              H = Cw;
              break;
            case "wheel":
              H = Pw;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = Rw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = kh;
              break;
            case "submit":
              H = Yw;
              break;
            case "toggle":
            case "beforetoggle":
              H = Ww;
          }
          var be = (n & 4) !== 0, Le = !be && (e === "scroll" || e === "scrollend"), D = be ? M !== null ? M + "Capture" : null : M;
          be = [];
          for (var O = L, B; O !== null; ) {
            var X = O;
            if (B = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || B === null || D === null || (X = ml(O, D), X != null && be.push(
              Xl(O, X, B)
            )), Le) break;
            O = O.return;
          }
          0 < be.length && (M = new H(
            M,
            oe,
            null,
            r,
            $
          ), Q.push({ event: M, listeners: be }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (H = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", H && r !== Zu && (oe = r.relatedTarget || r.fromElement) && (Tr(oe) || oe[fa]))
            break e;
          (M || H) && (oe = $.window === $ ? $ : (H = $.ownerDocument) ? H.defaultView || H.parentWindow : window, M ? (H = r.relatedTarget || r.toElement, M = L, H = H ? Tr(H) : null, H !== null && (Le = c(H), be = H.tag, H !== Le || be !== 5 && be !== 27 && be !== 6) && (H = null)) : (M = null, H = L), M !== H && (be = vh, X = "onMouseLeave", D = "onMouseEnter", O = "mouse", (e === "pointerout" || e === "pointerover") && (be = kh, X = "onPointerLeave", D = "onPointerEnter", O = "pointer"), Le = M == null ? oe : hl(M), B = H == null ? oe : hl(H), oe = new be(
            X,
            O + "leave",
            M,
            r,
            $
          ), oe.target = Le, oe.relatedTarget = B, X = null, Tr($) === L && (be = new be(
            D,
            O + "enter",
            H,
            r,
            $
          ), be.target = B, be.relatedTarget = Le, X = be), Le = X, be = M && H ? A(
            M,
            H,
            ak
          ) : null, M !== null && xb(
            Q,
            oe,
            M,
            be,
            !1
          ), H !== null && Le !== null && xb(
            Q,
            Le,
            H,
            be,
            !0
          )));
        }
        e: {
          if (M = L ? hl(L) : window, H = M.nodeName && M.nodeName.toLowerCase(), H === "select" || H === "input" && M.type === "file")
            var de = Nh;
          else if (Ch(M))
            if (Ah)
              de = u2;
            else {
              de = o2;
              var $e = l2;
            }
          else
            H = M.nodeName, !H || H.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? L && Hu(L.elementType) && (de = Nh) : de = s2;
          if (de && (de = de(e, L))) {
            Th(
              Q,
              de,
              r,
              $
            );
            break e;
          }
          $e && $e(e, M, L);
        }
        switch ($e = L ? hl(L) : window, e) {
          case "focusin":
            (Ch($e) || $e.contentEditable === "true") && (va = $e, tc = L, Sl = null);
            break;
          case "focusout":
            Sl = tc = va = null;
            break;
          case "mousedown":
            nc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nc = !1, Ih(Q, r, $);
            break;
          case "selectionchange":
            if (f2) break;
          case "keydown":
          case "keyup":
            Ih(Q, r, $);
        }
        var ve;
        if (Ku)
          e: {
            switch (e) {
              case "compositionstart":
                var Ce = "onCompositionStart";
                break e;
              case "compositionend":
                Ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ce = "onCompositionUpdate";
                break e;
            }
            Ce = void 0;
          }
        else
          ya ? jh(e, r) && (Ce = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (Sh && r.locale !== "ko" && (ya || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && ya && (ve = xh()) : (Gi = $, Yu = "value" in Gi ? Gi.value : Gi.textContent, ya = !0)), $e = Is(L, Ce), 0 < $e.length && (Ce = new wh(
          Ce,
          e,
          null,
          r,
          $
        ), Q.push({ event: Ce, listeners: $e }), ve ? Ce.data = ve : (ve = Eh(r), ve !== null && (Ce.data = ve)))), (ve = t2 ? n2(e, r) : i2(e, r)) && (Ce = Is(L, "onBeforeInput"), 0 < Ce.length && ($e = new wh(
          "onBeforeInput",
          "beforeinput",
          null,
          r,
          $
        ), Q.push({
          event: $e,
          listeners: Ce
        }), $e.data = ve)), tk(
          Q,
          e,
          L,
          r,
          $
        );
      }
      gb(Q, n);
    });
  }
  function Xl(e, n, r) {
    return {
      instance: e,
      listener: n,
      currentTarget: r
    };
  }
  function Is(e, n) {
    for (var r = n + "Capture", l = []; e !== null; ) {
      var u = e, d = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || d === null || (u = ml(e, r), u != null && l.unshift(
        Xl(e, u, d)
      ), u = ml(e, n), u != null && l.push(
        Xl(e, u, d)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function ak(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function xb(e, n, r, l, u) {
    for (var d = n._reactName, y = []; r !== null && r !== l; ) {
      var k = r, _ = k.alternate, L = k.stateNode;
      if (k = k.tag, _ !== null && _ === l) break;
      k !== 5 && k !== 26 && k !== 27 || L === null || (_ = L, u ? (L = ml(r, d), L != null && y.unshift(
        Xl(r, L, _)
      )) : u || (L = ml(r, d), L != null && y.push(
        Xl(r, L, _)
      ))), r = r.return;
    }
    y.length !== 0 && e.push({ event: n, listeners: y });
  }
  var lk = /\r\n?/g, ok = /\u0000|\uFFFD/g;
  function yb(e) {
    return (typeof e == "string" ? e : "" + e).replace(lk, `
`).replace(ok, "");
  }
  function vb(e, n) {
    return n = yb(n), yb(e) === n;
  }
  function We(e, n, r, l, u, d) {
    switch (r) {
      case "children":
        if (typeof l == "string")
          n === "body" || n === "textarea" && l === "" || ga(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          n !== "body" && ga(e, "" + l);
        else return;
        break;
      case "className":
        Oo(e, "class", l);
        break;
      case "tabIndex":
        Oo(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Oo(e, r, l);
        break;
      case "style":
        mh(e, l, d);
        return;
      case "data":
        if (n !== "object") {
          Oo(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (n !== "a" || r !== "href")) {
          e.removeAttribute(r);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(r);
          break;
        }
        l = Mo(l), e.setAttribute(r, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" && (r === "formAction" ? (n !== "input" && We(e, n, "name", u.name, u, null), We(
            e,
            n,
            "formEncType",
            u.formEncType,
            u,
            null
          ), We(
            e,
            n,
            "formMethod",
            u.formMethod,
            u,
            null
          ), We(
            e,
            n,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (We(e, n, "encType", u.encType, u, null), We(e, n, "method", u.method, u, null), We(e, n, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(r);
          break;
        }
        l = Mo(l), e.setAttribute(r, l);
        break;
      case "onClick":
        l != null && (e.onclick = oi);
        return;
      case "onScroll":
        l != null && He("scroll", e);
        return;
      case "onScrollEnd":
        l != null && He("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (r = l.__html, r != null) {
            if (u.children != null) throw Error(o(60));
            d?.__html !== r && (e.innerHTML = r);
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        r = Mo(l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          r
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(r, l) : e.removeAttribute(r);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(r, "") : e.removeAttribute(r);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(r, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(r, l) : e.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(r, l) : e.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(r) : e.setAttribute(r, l);
        break;
      case "popover":
        He("beforetoggle", e), He("toggle", e), Ao(e, "popover", l);
        break;
      case "xlinkActuate":
        Ei(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Ei(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Ei(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Ei(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Ei(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Ei(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Ei(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Ei(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Ei(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Ao(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")
          r = jw.get(r) || r, Ao(e, r, l);
        else return;
    }
    Ge = !0;
  }
  function If(e, n, r, l, u, d) {
    switch (r) {
      case "style":
        mh(e, l, d);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (r = l.__html, r != null) {
            if (u.children != null) throw Error(o(60));
            d?.__html !== r && (e.innerHTML = r);
          }
        }
        break;
      case "children":
        if (typeof l == "string") ga(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          ga(e, "" + l);
        else return;
        break;
      case "onScroll":
        l != null && He("scroll", e);
        return;
      case "onScrollEnd":
        l != null && He("scrollend", e);
        return;
      case "onClick":
        l != null && (e.onclick = oi);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!ah.hasOwnProperty(r))
          e: {
            if (r[0] === "o" && r[1] === "n" && (u = r.endsWith("Capture"), d = r.slice(2, u ? r.length - 7 : void 0), n = e[dn] || null, n = n != null ? n[r] : null, typeof n == "function" && e.removeEventListener(d, n, u), typeof l == "function")) {
              typeof n != "function" && n !== null && (r in e ? e[r] = null : e.hasAttribute(r) && e.removeAttribute(r)), e.addEventListener(d, l, u);
              break e;
            }
            Ge = !0, r in e ? e[r] = l : l === !0 ? e.setAttribute(r, "") : Ao(e, r, l);
          }
        return;
    }
    Ge = !0;
  }
  function Ft(e, n, r) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        He("error", e), He("load", e);
        var l = !1, u = !1, d;
        for (d in r)
          if (r.hasOwnProperty(d)) {
            var y = r[d];
            if (y != null)
              switch (d) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, n));
                default:
                  We(e, n, d, y, r, null);
              }
          }
        u && We(e, n, "srcSet", r.srcSet, r, null), l && We(e, n, "src", r.src, r, null);
        return;
      case "input":
        He("invalid", e);
        var k = d = y = u = null, _ = null, L = null;
        for (l in r)
          if (r.hasOwnProperty(l)) {
            var $ = r[l];
            if ($ != null)
              switch (l) {
                case "name":
                  u = $;
                  break;
                case "type":
                  y = $;
                  break;
                case "checked":
                  _ = $;
                  break;
                case "defaultChecked":
                  L = $;
                  break;
                case "value":
                  d = $;
                  break;
                case "defaultValue":
                  k = $;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if ($ != null)
                    throw Error(o(137, n));
                  break;
                default:
                  We(e, n, l, $, r, null);
              }
          }
        fh(
          e,
          d,
          k,
          _,
          L,
          y,
          u,
          !1
        );
        return;
      case "select":
        He("invalid", e), l = y = d = null;
        for (u in r)
          if (r.hasOwnProperty(u) && (k = r[u], k != null))
            switch (u) {
              case "value":
                d = k;
                break;
              case "defaultValue":
                y = k;
                break;
              case "multiple":
                l = k;
              default:
                We(e, n, u, k, r, null);
            }
        n = d, r = y, e.multiple = !!l, n != null ? ma(e, !!l, n, !1) : r != null && ma(e, !!l, r, !0);
        return;
      case "textarea":
        He("invalid", e), d = u = l = null;
        for (y in r)
          if (r.hasOwnProperty(y) && (k = r[y], k != null))
            switch (y) {
              case "value":
                l = k;
                break;
              case "defaultValue":
                u = k;
                break;
              case "children":
                d = k;
                break;
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(o(91));
                break;
              default:
                We(e, n, y, k, r, null);
            }
        ph(e, l, u, d);
        return;
      case "option":
        for (_ in r)
          r.hasOwnProperty(_) && (l = r[_], l != null) && (_ === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : We(e, n, _, l, r, null));
        return;
      case "dialog":
        He("beforetoggle", e), He("toggle", e), He("cancel", e), He("close", e);
        break;
      case "iframe":
      case "object":
        He("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Fl.length; l++)
          He(Fl[l], e);
        break;
      case "image":
        He("error", e), He("load", e);
        break;
      case "details":
        He("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        He("error", e), He("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (L in r)
          if (r.hasOwnProperty(L) && (l = r[L], l != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, n));
              default:
                We(e, n, L, l, r, null);
            }
        return;
      default:
        if (Hu(n)) {
          for ($ in r)
            r.hasOwnProperty($) && (l = r[$], l !== void 0 && If(
              e,
              n,
              $,
              l,
              r,
              void 0
            ));
          return;
        }
    }
    for (k in r)
      r.hasOwnProperty(k) && (l = r[k], l != null && We(e, n, k, l, r, null));
  }
  var sk = {};
  function uk(e, n, r, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, d = null, y = null, k = null, _ = null, L = null, $ = null;
        for (H in r) {
          var Q = r[H];
          if (r.hasOwnProperty(H) && Q != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = Q;
              default:
                l.hasOwnProperty(H) || We(e, n, H, null, l, Q);
            }
        }
        for (var M in l) {
          var H = l[M];
          if (Q = r[M], l.hasOwnProperty(M) && (H != null || Q != null))
            switch (M) {
              case "type":
                H !== Q && (Ge = !0), d = H;
                break;
              case "name":
                H !== Q && (Ge = !0), u = H;
                break;
              case "checked":
                H !== Q && (Ge = !0), L = H;
                break;
              case "defaultChecked":
                H !== Q && (Ge = !0), $ = H;
                break;
              case "value":
                H !== Q && (Ge = !0), y = H;
                break;
              case "defaultValue":
                H !== Q && (Ge = !0), k = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(o(137, n));
                break;
              default:
                H !== Q && We(
                  e,
                  n,
                  M,
                  H,
                  l,
                  Q
                );
            }
        }
        Bu(
          e,
          y,
          k,
          _,
          L,
          $,
          d,
          u
        );
        return;
      case "select":
        H = y = k = M = null;
        for (d in r)
          if (_ = r[d], r.hasOwnProperty(d) && _ != null)
            switch (d) {
              case "value":
                break;
              case "multiple":
                H = _;
              default:
                l.hasOwnProperty(d) || We(
                  e,
                  n,
                  d,
                  null,
                  l,
                  _
                );
            }
        for (u in l)
          if (d = l[u], _ = r[u], l.hasOwnProperty(u) && (d != null || _ != null))
            switch (u) {
              case "value":
                d !== _ && (Ge = !0), M = d;
                break;
              case "defaultValue":
                d !== _ && (Ge = !0), k = d;
                break;
              case "multiple":
                d !== _ && (Ge = !0), y = d;
              default:
                d !== _ && We(
                  e,
                  n,
                  u,
                  d,
                  l,
                  _
                );
            }
        n = k, r = y, l = H, M != null ? ma(e, !!r, M, !1) : !!l != !!r && (n != null ? ma(e, !!r, n, !0) : ma(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        H = M = null;
        for (k in r)
          if (u = r[k], r.hasOwnProperty(k) && u != null && !l.hasOwnProperty(k))
            switch (k) {
              case "value":
                break;
              case "children":
                break;
              default:
                We(e, n, k, null, l, u);
            }
        for (y in l)
          if (u = l[y], d = r[y], l.hasOwnProperty(y) && (u != null || d != null))
            switch (y) {
              case "value":
                u !== d && (Ge = !0), M = u;
                break;
              case "defaultValue":
                u !== d && (Ge = !0), H = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== d && We(e, n, y, u, l, d);
            }
        dh(e, M, H);
        return;
      case "option":
        for (var oe in r)
          M = r[oe], r.hasOwnProperty(oe) && M != null && !l.hasOwnProperty(oe) && (oe === "selected" ? e.selected = !1 : We(
            e,
            n,
            oe,
            null,
            l,
            M
          ));
        for (_ in l)
          M = l[_], H = r[_], l.hasOwnProperty(_) && M !== H && (M != null || H != null) && (_ === "selected" ? (M !== H && (Ge = !0), e.selected = M && typeof M != "function" && typeof M != "symbol") : We(
            e,
            n,
            _,
            M,
            l,
            H
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var be in r)
          M = r[be], r.hasOwnProperty(be) && M != null && !l.hasOwnProperty(be) && We(e, n, be, null, l, M);
        for (L in l)
          if (M = l[L], H = r[L], l.hasOwnProperty(L) && M !== H && (M != null || H != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(o(137, n));
                break;
              default:
                We(
                  e,
                  n,
                  L,
                  M,
                  l,
                  H
                );
            }
        return;
      default:
        if (Hu(n)) {
          for (var Le in r)
            M = r[Le], r.hasOwnProperty(Le) && M !== void 0 && !l.hasOwnProperty(Le) && If(
              e,
              n,
              Le,
              void 0,
              l,
              M
            );
          for ($ in l)
            M = l[$], H = r[$], !l.hasOwnProperty($) || M === H || M === void 0 && H === void 0 || If(
              e,
              n,
              $,
              M,
              l,
              H
            );
          return;
        }
    }
    for (var D in r)
      M = r[D], r.hasOwnProperty(D) && M != null && !l.hasOwnProperty(D) && We(e, n, D, null, l, M);
    for (Q in l)
      M = l[Q], H = r[Q], !l.hasOwnProperty(Q) || M === H || M == null && H == null || We(e, n, Q, M, l, H);
  }
  function wb(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function ck() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, n = 0, r = performance.getEntriesByType("resource"), l = 0; l < r.length; l++) {
        var u = r[l], d = u.transferSize, y = u.initiatorType, k = u.duration;
        if (d && k && wb(y)) {
          for (y = 0, k = u.responseEnd, l += 1; l < r.length; l++) {
            var _ = r[l], L = _.startTime;
            if (L > k) break;
            var $ = _.transferSize, Q = _.initiatorType;
            $ && wb(Q) && (_ = _.responseEnd, y += $ * (_ < k ? 1 : (k - L) / (_ - L)));
          }
          if (--l, n += 8 * (d + y) / (u.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return n / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Hf = null, Zf = null;
  function Ql(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function kb(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Sb(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function zb(e, n, r, l) {
    return r = Ql(
      r
    ).createElement(e), r[$t] = l, r[dn] = n, Ft(r, e, n), Rt(r), r;
  }
  function $f(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var qf = null;
  function fk() {
    var e = window.event;
    return e && e.type === "popstate" ? e === qf ? !1 : (qf = e, !0) : (qf = null, !1);
  }
  var Vf = typeof setTimeout == "function" ? setTimeout : void 0, dk = typeof clearTimeout == "function" ? clearTimeout : void 0, _b = typeof Promise == "function" ? Promise : void 0, jb = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Vf, pk = typeof queueMicrotask == "function" ? queueMicrotask : typeof _b < "u" ? function(e) {
    return _b.resolve(null).then(e).catch(hk);
  } : Vf;
  function hk(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function dr(e) {
    return e === "head";
  }
  function Eb(e, n) {
    var r = n, l = 0;
    do {
      var u = r.nextSibling;
      if (e.removeChild(r), u && u.nodeType === 8)
        if (r = u.data, r === "/$" || r === "/&") {
          if (l === 0) {
            e.removeChild(u), Wa(n);
            return;
          }
          l--;
        } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&")
          l++;
        else if (r === "html")
          Jf(
            e.ownerDocument.documentElement
          );
        else if (r === "head") {
          r = e.ownerDocument.head, Jf(r);
          for (var d = r.firstChild; d; ) {
            var y = d.nextSibling, k = d.nodeName;
            d[pl] || k === "SCRIPT" || k === "STYLE" || k === "LINK" && d.rel.toLowerCase() === "stylesheet" || r.removeChild(d), d = y;
          }
        } else
          r === "body" && Jf(e.ownerDocument.body);
      r = u;
    } while (r);
    Wa(n);
  }
  function Cb(e, n) {
    var r = e;
    e = 0;
    do {
      var l = r.nextSibling;
      if (r.nodeType === 1 ? n ? (r._stashedDisplay = r.style.display, r.style.display = "none") : (r.style.display = r._stashedDisplay || "", r.getAttribute("style") === "" && r.removeAttribute("style")) : r.nodeType === 3 && (n ? (r._stashedText = r.nodeValue, r.nodeValue = "") : r.nodeValue = r._stashedText || ""), l && l.nodeType === 8)
        if (r = l.data, r === "/$") {
          if (e === 0) break;
          e--;
        } else
          r !== "$" && r !== "$?" && r !== "$~" && r !== "$!" || e++;
      r = l;
    } while (r);
  }
  function Tb(e, n, r) {
    if (n = CSS.escape(n) !== n ? "r-" + btoa(n).replace(/=/g, "") : n, e.style.viewTransitionName = n, r != null && (e.style.viewTransitionClass = r), r = getComputedStyle(e), r.display === "inline") {
      if (n = e.getClientRects(), n.length === 1) var l = 1;
      else
        for (var u = l = 0; u < n.length; u++) {
          var d = n[u];
          0 < d.width && 0 < d.height && l++;
        }
      l === 1 && (e = e.style, e.display = n.length === 1 ? "inline-block" : "block", e.marginTop = "-" + r.paddingTop, e.marginBottom = "-" + r.paddingBottom);
    }
  }
  function Nb(e, n) {
    e = e.style, n = n.style;
    var r = n != null ? n.hasOwnProperty("viewTransitionName") ? n.viewTransitionName : n.hasOwnProperty("view-transition-name") ? n["view-transition-name"] : null : null;
    e.viewTransitionName = r == null || typeof r == "boolean" ? "" : ("" + r).trim(), r = n != null ? n.hasOwnProperty("viewTransitionClass") ? n.viewTransitionClass : n.hasOwnProperty("view-transition-class") ? n["view-transition-class"] : null : null, e.viewTransitionClass = r == null || typeof r == "boolean" ? "" : ("" + r).trim(), e.display === "inline-block" && (n == null ? e.display = e.margin = "" : (r = n.display, e.display = r == null || typeof r == "boolean" ? "" : r, r = n.margin, r != null ? e.margin = r : (r = n.hasOwnProperty("marginTop") ? n.marginTop : n["margin-top"], e.marginTop = r == null || typeof r == "boolean" ? "" : r, n = n.hasOwnProperty("marginBottom") ? n.marginBottom : n["margin-bottom"], e.marginBottom = n == null || typeof n == "boolean" ? "" : n)));
  }
  function mk(e, n, r) {
    return r = r.ownerDocument.defaultView, {
      rect: e,
      abs: n.position === "absolute" || n.position === "fixed",
      clip: n.clipPath !== "none" || n.overflow !== "visible" || n.filter !== "none" || n.mask !== "none" || n.mask !== "none" || n.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= r.innerHeight && e.left <= r.innerWidth
    };
  }
  function Yf(e) {
    var n = e.getBoundingClientRect(), r = getComputedStyle(e);
    return mk(n, r, e);
  }
  function gk(e) {
    return e.documentElement.clientHeight;
  }
  function bk(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function xk(e, n, r, l, u, d, y, k, _) {
    var L = n.nodeType === 9 ? n : n.ownerDocument;
    try {
      var $ = L.startViewTransition({
        update: function() {
          var M = L.defaultView, H = M.navigation && M.navigation.transition, oe = L.fonts.status;
          l();
          var be = [];
          if (oe === "loaded" && (gk(L), L.fonts.status === "loading" && be.push(L.fonts.ready)), oe = be.length, e !== null)
            for (var Le = e.suspenseyImages, D = 0, O = 0; O < Le.length; O++) {
              var B = Le[O];
              if (!B.complete) {
                var X = B.getBoundingClientRect();
                if (0 < X.bottom && 0 < X.right && X.top < M.innerHeight && X.left < M.innerWidth) {
                  if (D += Pb(B), D > $s) {
                    be.length = oe;
                    break;
                  }
                  B = new Promise(
                    bk.bind(B)
                  ), be.push(B);
                }
              }
            }
          if (0 < be.length)
            return M = Promise.race([
              Promise.all(be),
              new Promise(function(de) {
                return setTimeout(de, 500);
              })
            ]).then(u, u), (H ? Promise.allSettled([H.finished, M]) : M).then(d, d);
          if (u(), H)
            return H.finished.then(
              d,
              d
            );
          d();
        },
        types: r
      });
      L.__reactViewTransition = $;
      var Q = [];
      return $.ready.then(
        function() {
          for (var M = L.documentElement.getAnimations({
            subtree: !0
          }), H = 0; H < M.length; H++) {
            var oe = M[H], be = oe.effect, Le = be.pseudoElement;
            if (Le != null && Le.startsWith("::view-transition")) {
              Q.push(oe), oe = be.getKeyframes();
              for (var D = Le = void 0, O = !0, B = 0; B < oe.length; B++) {
                var X = oe[B], de = X.width;
                if (Le === void 0) Le = de;
                else if (Le !== de) {
                  O = !1;
                  break;
                }
                if (de = X.height, D === void 0) D = de;
                else if (D !== de) {
                  O = !1;
                  break;
                }
                delete X.width, delete X.height, X.transform === "none" && delete X.transform;
              }
              O && Le !== void 0 && D !== void 0 && (be.setKeyframes(oe), O = getComputedStyle(
                be.target,
                be.pseudoElement
              ), O.width !== Le || O.height !== D) && (O = oe[0], O.width = Le, O.height = D, O = oe[oe.length - 1], O.width = Le, O.height = D, be.setKeyframes(oe));
            }
          }
          y();
        },
        function(M) {
          L.__reactViewTransition === $ && (L.__reactViewTransition = null);
          try {
            typeof M == "object" && M !== null && M.name === "InvalidStateError" && (M.message === "View transition was skipped because document visibility state is hidden." || M.message === "Skipping view transition because document visibility state has become hidden." || M.message === "Skipping view transition because viewport size changed." || M.message === "Transition was aborted because of invalid state") && (M = null), M !== null && _(M);
          } finally {
            l(), u(), y();
          }
        }
      ), $.finished.finally(function() {
        for (var M = 0; M < Q.length; M++)
          Q[M].cancel();
        L.__reactViewTransition === $ && (L.__reactViewTransition = null), k();
      }), $;
    } catch {
      return l(), u(), y(), null;
    }
  }
  function Kr(e, n) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + n + ")";
  }
  Kr.prototype.animate = function(e, n) {
    return n = typeof n == "number" ? { duration: n } : V({}, n), n.pseudoElement = this._selector, this._scope.animate(e, n);
  }, Kr.prototype.getAnimations = function() {
    for (var e = this._scope, n = this._selector, r = e.getAnimations({ subtree: !0 }), l = [], u = 0; u < r.length; u++) {
      var d = r[u].effect;
      d !== null && d.target === e && d.pseudoElement === n && l.push(r[u]);
    }
    return l;
  }, Kr.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Ab(e) {
    return {
      name: e,
      group: new Kr("group", e),
      imagePair: new Kr("image-pair", e),
      old: new Kr("old", e),
      new: new Kr("new", e)
    };
  }
  function Cn(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  Cn.prototype.addEventListener = function(e, n, r) {
    var l = null, u = null;
    if (!(r != null && typeof r != "boolean" && (l = r.signal || null, l !== null && l.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var d = this._eventListeners;
      if (Mb(d, e, n, r) === -1) {
        var y = this, k = n;
        r != null && typeof r != "boolean" && r.once === !0 && (k = function(_) {
          y.removeEventListener(
            e,
            n,
            r
          ), typeof n == "function" ? n.call(this, _) : n.handleEvent(_);
        }), l !== null && (u = y.removeEventListener.bind(
          y,
          e,
          n,
          r
        ), l.addEventListener("abort", u, { once: !0 }), u = l.removeEventListener.bind(l, "abort", u)), l = Fa(r), d.push({
          type: e,
          listener: n,
          optionsOrUseCapture: r,
          attachedListener: k,
          cleanup: u
        }), x(
          this._fragmentFiber.child,
          !1,
          yk,
          e,
          k,
          l
        );
      }
      this._eventListeners = d;
    }
  };
  function yk(e, n, r, l) {
    return j(e).addEventListener(
      n,
      r,
      l
    ), !1;
  }
  Cn.prototype.removeEventListener = function(e, n, r) {
    var l = this._eventListeners;
    if (l !== null && (n = Mb(
      l,
      e,
      n,
      r
    ), n !== -1)) {
      var u = l[n];
      r = u.attachedListener;
      var d = u.cleanup;
      u = Fa(u.optionsOrUseCapture), x(
        this._fragmentFiber.child,
        !1,
        vk,
        e,
        r,
        u
      ), l.splice(n, 1), d !== null && d();
    }
  };
  function vk(e, n, r, l) {
    return j(e).removeEventListener(
      n,
      r,
      l
    ), !1;
  }
  function Fa(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function Ob(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function Mb(e, n, r, l) {
    if (e.length === 0) return -1;
    l = Ob(l);
    for (var u = 0; u < e.length; u++) {
      var d = e[u];
      if (d.type === n && d.listener === r && Ob(d.optionsOrUseCapture) === l)
        return u;
    }
    return -1;
  }
  Cn.prototype.dispatchEvent = function(e) {
    var n = w(
      this._fragmentFiber
    );
    if (n === null) return !0;
    n = j(n);
    var r = this._eventListeners;
    if (r !== null && 0 < r.length || !e.bubbles) {
      var l = n.nodeType === 9 ? n.createComment("") : document.createTextNode("");
      if (r)
        for (var u = 0; u < r.length; u++) {
          var d = r[u];
          l.addEventListener(
            d.type,
            d.attachedListener,
            Fa(d.optionsOrUseCapture)
          );
        }
      if (n.appendChild(l), e = l.dispatchEvent(e), r)
        for (u = 0; u < r.length; u++)
          d = r[u], l.removeEventListener(
            d.type,
            d.attachedListener,
            Fa(d.optionsOrUseCapture)
          );
      return n.removeChild(l), e;
    }
    return n.dispatchEvent(e);
  }, Cn.prototype.focus = function(e) {
    x(
      this._fragmentFiber.child,
      !0,
      Db,
      e,
      void 0,
      void 0
    );
  };
  function Db(e, n) {
    return e.tag === 6 ? !1 : (e = j(e), Ok(e, n));
  }
  Cn.prototype.focusLast = function(e) {
    var n = [];
    x(
      this._fragmentFiber.child,
      !0,
      Gf,
      n,
      void 0,
      void 0
    );
    for (var r = n.length - 1; 0 <= r && !Db(n[r], e); r--) ;
  };
  function Gf(e, n) {
    return n.push(e), !1;
  }
  Cn.prototype.blur = function() {
    var e = w(
      this._fragmentFiber
    );
    e !== null && (e = j(e), e = Ql(e).activeElement, e !== null && x(
      this._fragmentFiber.child,
      !1,
      wk,
      e,
      void 0,
      void 0
    ));
  };
  function wk(e, n) {
    return e.tag === 6 ? !1 : (e = j(e), e === n || e.contains(n) ? (n.blur(), !0) : !1);
  }
  Cn.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), x(
      this._fragmentFiber.child,
      !1,
      kk,
      e,
      void 0,
      void 0
    );
  };
  function kk(e, n) {
    return e.tag === 6 || (e = j(e), n.observe(e)), !1;
  }
  Cn.prototype.unobserveUsing = function(e) {
    var n = this._observers;
    if (n !== null && n.has(e)) {
      n.delete(e), x(
        this._fragmentFiber.child,
        !1,
        Sk,
        e,
        void 0,
        void 0
      );
      for (var r = n = 0; r < ii.length; r++) {
        var l = ii[r];
        l.fragmentInstance === this && l.observer === e ? e.unobserve(l.instance) : ii[n++] = l;
      }
      ii.length = n;
    }
  };
  function Sk(e, n) {
    return e.tag === 6 || (e = j(e), n.unobserve(e)), !1;
  }
  var ii = [], Ff = !1;
  function zk(e, n, r) {
    ii.push({
      fragmentInstance: e,
      observer: n,
      instance: r
    }), Ff || (Ff = !0, Mk(function() {
      Ff = !1;
      var l = ii;
      ii = [];
      for (var u = 0; u < l.length; u++) {
        var d = l[u];
        d.observer.unobserve(d.instance);
      }
    }));
  }
  Cn.prototype.getClientRects = function() {
    var e = [];
    return x(
      this._fragmentFiber.child,
      !1,
      _k,
      e,
      void 0,
      void 0
    ), e;
  };
  function _k(e, n) {
    if (e.tag === 6) {
      e = e.stateNode;
      var r = e.ownerDocument.createRange();
      r.selectNodeContents(e), n.push.apply(n, r.getClientRects());
    } else
      e = j(e), n.push.apply(n, e.getClientRects());
    return !1;
  }
  Cn.prototype.getRootNode = function(e) {
    var n = w(
      this._fragmentFiber
    );
    return n === null ? this : j(n).getRootNode(e);
  }, Cn.prototype.compareDocumentPosition = function(e) {
    var n = w(
      this._fragmentFiber
    );
    if (n === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var r = [];
    x(
      this._fragmentFiber.child,
      !1,
      Gf,
      r,
      void 0,
      void 0
    );
    var l = j(n);
    if (r.length === 0) {
      if (r = l, v(this._fragmentFiber)) {
        e: {
          for (n = this._fragmentFiber.return; n !== null; ) {
            if (n.tag === 4) {
              n = n.stateNode.containerInfo;
              break e;
            }
            if (n.tag === 3 || n.tag === 5 || n.tag === 27)
              break;
            n = n.return;
          }
          n = null;
        }
        n != null && (r = n);
      }
      n = this._fragmentFiber;
      var u = l = r.compareDocumentPosition(e);
      return r === e ? u = Node.DOCUMENT_POSITION_CONTAINS : l & Node.DOCUMENT_POSITION_CONTAINED_BY && (r = S(n)[1], r === null ? u = Node.DOCUMENT_POSITION_PRECEDING : (e = j(r).compareDocumentPosition(
        e
      ), u = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    n = j(r[0]), u = j(r[r.length - 1]);
    var d = v(this._fragmentFiber) ? n.parentElement : l;
    if (d == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    l = d.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY, d = d.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var y = n.compareDocumentPosition(e), k = u.compareDocumentPosition(e), _ = y & Node.DOCUMENT_POSITION_CONTAINED_BY || k & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return k = l && d && y & Node.DOCUMENT_POSITION_FOLLOWING && k & Node.DOCUMENT_POSITION_PRECEDING, n = l && n === e || d && u === e || _ || k ? Node.DOCUMENT_POSITION_CONTAINED_BY : !l && n === e || !d && u === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : y, n & Node.DOCUMENT_POSITION_DISCONNECTED || n & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || jk(
      n,
      this._fragmentFiber,
      r[0],
      r[r.length - 1],
      e
    ) ? n : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function jk(e, n, r, l, u) {
    var d = Tr(u);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (r = !!d)
        e: {
          for (; d !== null; ) {
            if (d.tag === 7 && (d === n || d.alternate === n)) {
              r = !0;
              break e;
            }
            d = d.return;
          }
          r = !1;
        }
      return r;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (d === null)
        return d = u.ownerDocument, u === d || u === d.documentElement || u === d.body;
      e: {
        for (d = n, n = w(n); d !== null; ) {
          if (!(d.tag !== 5 && d.tag !== 3 && d.tag !== 27 || d !== n && d.alternate !== n)) {
            d = !0;
            break e;
          }
          d = d.return;
        }
        d = !1;
      }
      return d;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((n = !!d) && !(n = d === r) && (n = A(
      r,
      d,
      K
    ), n === null ? n = !1 : (x(
      n,
      !0,
      R,
      d,
      r
    ), d = N, N = null, n = d !== null)), n) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((n = !!d) && !(n = d === l) && (n = A(
      l,
      d,
      K
    ), n === null ? n = !1 : (x(
      n,
      !0,
      G,
      d,
      l
    ), d = N, U = N = null, n = d !== null)), n) : !1;
  }
  function Rb(e, n) {
    var r = e.ownerDocument.createRange();
    r.selectNodeContents(e), e = r.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      n ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  Cn.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(o(566));
    var n = [];
    x(
      this._fragmentFiber.child,
      !1,
      Gf,
      n,
      void 0,
      void 0
    );
    var r = e !== !1;
    if (n.length === 0) {
      var l = S(
        this._fragmentFiber
      );
      if (l = r ? l[1] || l[0] || w(this._fragmentFiber) : l[0] || l[1], l === null) return;
      if (l.tag === 6) {
        e = j(l), Rb(e, r);
        return;
      }
      if (l = j(l), l.nodeType !== 9) {
        if (l.nodeType === 11) {
          r = "host" in l ? l.host : null, r !== null && r.scrollIntoView(e);
          return;
        }
        l.scrollIntoView(e);
      }
    }
    for (l = r ? n.length - 1 : 0; l !== (r ? -1 : n.length); ) {
      var u = n[l];
      u.tag === 6 ? (u = j(u), Rb(u, r)) : j(u).scrollIntoView(e), l += r ? -1 : 1;
    }
  };
  function Ek(e, n) {
    return e = j(e), Lb(e, n), !1;
  }
  function Lb(e, n) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(n);
  }
  function Ub(e, n) {
    var r = n._eventListeners;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = r[l];
        e.addEventListener(
          u.type,
          u.attachedListener,
          Fa(u.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (r = n._observers, r !== null && r.forEach(function(d) {
      for (var y = 0, k = 0; k < ii.length; k++) {
        var _ = ii[k];
        (_.fragmentInstance !== n || _.observer !== d || _.instance !== e) && (ii[y++] = _);
      }
      ii.length = y, d.observe(e);
    }), Lb(e, n));
  }
  function Ck(e, n) {
    var r = n._eventListeners;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = r[l];
        e.removeEventListener(
          u.type,
          u.attachedListener,
          Fa(u.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (r = n._observers, r !== null && r.forEach(function(d) {
      typeof d.rootMargin == "string" ? zk(
        n,
        d,
        e
      ) : d.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(n));
  }
  function Xf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var r = n;
      switch (n = n.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xf(r), No(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(r);
    }
  }
  function Tk(e, n, r, l) {
    for (; e.nodeType === 1; ) {
      var u = r;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[pl])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (d = e.getAttribute("rel"), d === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (d !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (d = e.getAttribute("src"), (d !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && d && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var d = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === d)
          return e;
      } else return e;
      if (e = qn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Nk(e, n, r) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !r || (e = qn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Bb(e, n) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = qn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Qf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Kf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Ak(e, n) {
    var r = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = n;
    else if (e.data !== "$?" || r.readyState !== "loading")
      n();
    else {
      var l = function() {
        n(), r.removeEventListener("DOMContentLoaded", l);
      };
      r.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function qn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return e;
  }
  var Pf = null;
  function Ib(e) {
    e = e.nextSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "/$" || r === "/&") {
          if (n === 0)
            return qn(e.nextSibling);
          n--;
        } else
          r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || n++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Hb(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?" || r === "$~" || r === "&") {
          if (n === 0) return e;
          n--;
        } else r !== "/$" && r !== "/&" || n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Ok(e, n) {
    function r() {
      l = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var l = !1;
    try {
      e.ownerDocument.addEventListener("focus", r, !0), (e.focus || HTMLElement.prototype.focus).call(e, n);
    } finally {
      e.ownerDocument.removeEventListener("focus", r, !0);
    }
    return l;
  }
  function Mk(e) {
    jb(function() {
      jb(function(n) {
        return e(n);
      });
    });
  }
  function Zb(e, n, r) {
    switch (n = Ql(r), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function $b(e, n, r) {
    for (var l in r) {
      var u = r[l];
      r.hasOwnProperty(l) && u != null && We(e, n, l, null, sk, u);
    }
    r.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === oi && (e.onclick = null), No(e);
  }
  function Jf(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    No(e);
  }
  var Vn = /* @__PURE__ */ new Map(), qb = /* @__PURE__ */ new Set();
  function Kl(e) {
    if (typeof e.getRootNode == "function") {
      var n = e.getRootNode();
      if (n.nodeType === 9 || n.nodeType === 11) return n;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Hi = _e.d;
  _e.d = {
    f: Dk,
    r: Rk,
    D: Lk,
    C: Uk,
    L: Bk,
    m: Ik,
    X: Zk,
    S: Hk,
    M: $k
  };
  function Dk() {
    var e = Hi.f(), n = Ms();
    return e || n;
  }
  function Rk(e) {
    var n = da(e);
    n !== null && n.tag === 5 && n.type === "form" ? Ym(n) : Hi.r(e);
  }
  var Xa = typeof document > "u" ? null : document;
  function Vb(e, n, r) {
    var l = Xa;
    if (l && typeof n == "string" && n) {
      var u = Ln(n);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof r == "string" && (u += '[crossorigin="' + r + '"]'), qb.has(u) || (qb.add(u), e = { rel: e, crossOrigin: r, href: n }, l.querySelector(u) === null && (n = l.createElement("link"), Ft(n, "link", e), Rt(n), l.head.appendChild(n)));
    }
  }
  function Lk(e) {
    Hi.D(e), Vb("dns-prefetch", e, null);
  }
  function Uk(e, n) {
    Hi.C(e, n), Vb("preconnect", e, n);
  }
  function Bk(e, n, r) {
    Hi.L(e, n, r);
    var l = Xa;
    if (l && e && n) {
      var u = 'link[rel="preload"][as="' + Ln(n) + '"]';
      n === "image" && r && r.imageSrcSet ? (u += '[imagesrcset="' + Ln(
        r.imageSrcSet
      ) + '"]', typeof r.imageSizes == "string" && (u += '[imagesizes="' + Ln(
        r.imageSizes
      ) + '"]')) : u += '[href="' + Ln(e) + '"]';
      var d = u;
      switch (n) {
        case "style":
          d = Qa(e);
          break;
        case "script":
          d = Ka(e);
      }
      if (!(Vn.has(d) || (e = V(
        {
          rel: "preload",
          href: n === "image" && r && r.imageSrcSet ? void 0 : e,
          as: n
        },
        r
      ), Vn.set(d, e), l.querySelector(u) !== null || n === "style" && l.querySelector(Pl(d)) || n === "script" && l.querySelector(Jl(d))))) {
        var y = l.createElement("link");
        Ft(y, "link", e), n === "style" && (y[To] = !0, y.onload = y.onerror = function() {
          ih(y);
        }), Rt(y), l.head.appendChild(y);
      }
    }
  }
  function Ik(e, n) {
    Hi.m(e, n);
    var r = Xa;
    if (r && e) {
      var l = n && typeof n.as == "string" ? n.as : "script", u = 'link[rel="modulepreload"][as="' + Ln(l) + '"][href="' + Ln(e) + '"]', d = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Ka(e);
      }
      if (!Vn.has(d) && (e = V({ rel: "modulepreload", href: e }, n), Vn.set(d, e), r.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(Jl(d)))
              return;
        }
        l = r.createElement("link"), Ft(l, "link", e), Rt(l), r.head.appendChild(l);
      }
    }
  }
  function Hk(e, n, r) {
    Hi.S(e, n, r);
    var l = Xa;
    if (l && e) {
      var u = pa(l).hoistableStyles, d = Qa(e);
      n = n || "default";
      var y = u.get(d);
      if (!y) {
        var k = { loading: 0, preload: null };
        if (y = l.querySelector(
          Pl(d)
        ))
          k.loading = 5;
        else {
          e = V(
            { rel: "stylesheet", href: e, "data-precedence": n },
            r
          ), (r = Vn.get(d)) && Wf(e, r);
          var _ = y = l.createElement("link");
          Rt(_), Ft(_, "link", e), _._p = new Promise(function(L, $) {
            _.onload = L, _.onerror = $;
          }), _.addEventListener("load", function() {
            k.loading |= 1;
          }), _.addEventListener("error", function() {
            k.loading |= 2;
          }), k.loading |= 4, Hs(y, n, l);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: k
        }, u.set(d, y);
      }
    }
  }
  function Zk(e, n) {
    Hi.X(e, n);
    var r = Xa;
    if (r && e) {
      var l = pa(r).hoistableScripts, u = Ka(e), d = l.get(u);
      d || (d = r.querySelector(Jl(u)), d || (e = V({ src: e, async: !0 }, n), (n = Vn.get(u)) && ed(e, n), d = r.createElement("script"), Rt(d), Ft(d, "link", e), r.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, l.set(u, d));
    }
  }
  function $k(e, n) {
    Hi.M(e, n);
    var r = Xa;
    if (r && e) {
      var l = pa(r).hoistableScripts, u = Ka(e), d = l.get(u);
      d || (d = r.querySelector(Jl(u)), d || (e = V({ src: e, async: !0, type: "module" }, n), (n = Vn.get(u)) && ed(e, n), d = r.createElement("script"), Rt(d), Ft(d, "link", e), r.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, l.set(u, d));
    }
  }
  function Yb(e, n, r, l) {
    var u = (u = mt.current) ? Kl(u) : null;
    if (!u) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (r = Qa(r.href), n = pa(
          u
        ).hoistableStyles, l = n.get(r), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(r, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
          e = Qa(r.href);
          var d = pa(
            u
          ).hoistableStyles, y = d.get(e);
          if (y || (u = u.ownerDocument || u, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, d.set(e, y), (d = u.querySelector(
            Pl(e)
          )) ? d._p || (y.instance = d, y.state.loading = 5) : (d = Vn.get(e), d || (d = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, Vn.set(e, d)), qk(
            u,
            e,
            d,
            y.state
          ))), n && l === null)
            throw Error(o(528, ""));
          return y;
        }
        if (n && l !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return n = r.async, r = r.src, typeof r == "string" && n && typeof n != "function" && typeof n != "symbol" ? (r = Ka(r), n = pa(
          u
        ).hoistableScripts, l = n.get(r), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(r, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function Qa(e) {
    return 'href="' + Ln(e) + '"';
  }
  function Pl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Gb(e) {
    return V({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function qk(e, n, r, l) {
    if (n = e.querySelector(
      'link[rel="preload"][as="style"][' + n + "]"
    )) {
      if (n[To] !== !0) {
        l.loading = 1;
        return;
      }
    } else
      n = e.createElement("link"), n[To] = !0, n.onload = n.onerror = ih.bind(null, n), Ft(n, "link", r), Rt(n), e.head.appendChild(n);
    l.preload = n, n.addEventListener("load", function() {
      return l.loading |= 1;
    }), n.addEventListener("error", function() {
      return l.loading |= 2;
    });
  }
  function Ka(e) {
    return '[src="' + Ln(e) + '"]';
  }
  function Jl(e) {
    return "script[async]" + e;
  }
  function Fb(e, n, r) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Ln(r.href) + '"]'
          );
          if (l)
            return n.instance = l, Rt(l), l;
          var u = V({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Rt(l), Ft(l, "style", u), Hs(l, r.precedence, e), n.instance = l;
        case "stylesheet":
          u = Qa(r.href);
          var d = e.querySelector(
            Pl(u)
          );
          if (d)
            return n.state.loading |= 4, n.instance = d, Rt(d), d;
          l = Gb(r), (u = Vn.get(u)) && Wf(l, u), d = (e.ownerDocument || e).createElement("link"), Rt(d);
          var y = d;
          return y._p = new Promise(function(k, _) {
            y.onload = k, y.onerror = _;
          }), Ft(d, "link", l), n.state.loading |= 4, Hs(d, r.precedence, e), n.instance = d;
        case "script":
          return d = Ka(r.src), (u = e.querySelector(
            Jl(d)
          )) ? (n.instance = u, Rt(u), u) : (l = r, (u = Vn.get(d)) && (l = V({}, r), ed(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), Rt(u), Ft(u, "link", l), e.head.appendChild(u), n.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance, n.state.loading |= 4, Hs(l, r.precedence, e));
    return n.instance;
  }
  function Hs(e, n, r) {
    for (var l = r.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, d = u, y = 0; y < l.length; y++) {
      var k = l[y];
      if (k.dataset.precedence === n) d = k;
      else if (d !== u) break;
    }
    d ? d.parentNode.insertBefore(e, d.nextSibling) : (n = r.nodeType === 9 ? r.head : r, n.insertBefore(e, n.firstChild));
  }
  function Wf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function ed(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var Zs = null;
  function Xb(e, n, r) {
    if (Zs === null) {
      var l = /* @__PURE__ */ new Map(), u = Zs = /* @__PURE__ */ new Map();
      u.set(r, l);
    } else
      u = Zs, l = u.get(r), l || (l = /* @__PURE__ */ new Map(), u.set(r, l));
    if (l.has(e)) return l;
    for (l.set(e, null), r = r.getElementsByTagName(e), u = 0; u < r.length; u++) {
      var d = r[u];
      if (!(d[pl] || d[$t] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = d.getAttribute(n) || "";
        y = e + y;
        var k = l.get(y);
        k ? k.push(d) : l.set(y, [d]);
      }
    }
    return l;
  }
  function td(e, n, r) {
    e = e.ownerDocument || e, e.head.insertBefore(
      r,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function Vk(e, n, r) {
    if (r === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        return n.rel === "stylesheet" ? (e = n.disabled, typeof n.precedence == "string" && e == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Qb(e, n) {
    return e === "img" && n.src != null && n.src !== "" && n.onLoad == null && n.loading !== "lazy";
  }
  function Kb(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Pb(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Jb(e, n) {
    typeof n.decode == "function" && (e.imgCount++, n.complete || (e.imgBytes += Pb(n), e.suspenseyImages.push(n)), e = Fk.bind(e), n.decode().then(e, e));
  }
  function Yk(e, n, r, l) {
    if (r.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var u = Qa(l.href), d = n.querySelector(
          Pl(u)
        );
        if (d) {
          n = d._p, n !== null && typeof n == "object" && typeof n.then == "function" && (e.count++, e = Wl.bind(e), n.then(e, e)), r.state.loading |= 4, r.instance = d, Rt(d);
          return;
        }
        d = n.ownerDocument || n, l = Gb(l), (u = Vn.get(u)) && Wf(l, u), d = d.createElement("link"), Rt(d);
        var y = d;
        y._p = new Promise(function(k, _) {
          y.onload = k, y.onerror = _;
        }), Ft(d, "link", l), r.instance = d;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(r, n), (n = r.state.preload) && (r.state.loading & 3) === 0 && (e.count++, r = Wl.bind(e), n.addEventListener("load", r), n.addEventListener("error", r));
    }
  }
  var $s = 0;
  function Gk(e, n) {
    return e.stylesheets && e.count === 0 && Vs(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(r) {
      var l = setTimeout(function() {
        if (e.stylesheets && Vs(e, e.stylesheets), e.unsuspend) {
          var d = e.unsuspend;
          e.unsuspend = null, d();
        }
      }, 6e4 + n);
      0 < e.imgBytes && $s === 0 && ($s = 62500 * ck());
      var u = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Vs(e, e.stylesheets), e.unsuspend)) {
            var d = e.unsuspend;
            e.unsuspend = null, d();
          }
        },
        (e.imgBytes > $s ? 50 : 800) + n
      );
      return e.unsuspend = r, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(u);
      };
    } : null;
  }
  function Wb(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Vs(e, e.stylesheets);
      else if (e.unsuspend) {
        var n = e.unsuspend;
        e.unsuspend = null, n();
      }
    }
  }
  function Wl() {
    this.count--, Wb(this);
  }
  function Fk() {
    this.imgCount--, Wb(this);
  }
  var qs = null;
  function Vs(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, qs = /* @__PURE__ */ new Map(), n.forEach(Xk, e), qs = null, Wl.call(e));
  }
  function Xk(e, n) {
    if (!(n.state.loading & 4)) {
      var r = qs.get(e);
      if (r) var l = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), qs.set(e, r);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), d = 0; d < u.length; d++) {
          var y = u[d];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (r.set(y.dataset.precedence, y), l = y);
        }
        l && r.set(null, l);
      }
      u = n.instance, y = u.getAttribute("data-precedence"), d = r.get(y) || l, d === l && r.set(null, u), r.set(y, u), this.count++, l = Wl.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), d ? d.parentNode.insertBefore(u, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Pa = {
    $$typeof: ee,
    Provider: null,
    Consumer: null,
    _currentValue: It,
    _currentValue2: It,
    _threadCount: 0
  };
  function Qk(e, n, r, l, u, d, y, k, _) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Du(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Du(0), this.hiddenUpdates = Du(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = d, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ex(e, n, r, l, u, d, y, k, _, L, $, Q) {
    return e = new Qk(
      e,
      n,
      r,
      y,
      _,
      L,
      $,
      Q,
      k
    ), n = 1, d === !0 && (n |= 24), d = pn(3, null, null, n), e.current = d, d.stateNode = e, n = mc(), n.refCount++, e.pooledCache = n, n.refCount++, d.memoizedState = {
      element: l,
      isDehydrated: r,
      cache: n
    }, yc(d), e;
  }
  function tx(e) {
    return e ? (e = Sa, e) : Sa;
  }
  function nx(e, n, r, l, u, d) {
    u = tx(u), l.context === null ? l.context = u : l.pendingContext = u, l = er(n), l.payload = { element: r }, d = d === void 0 ? null : d, d !== null && (l.callback = d), r = tr(e, l, n), r !== null && (bn(r, e, n), Nl(r, e, n));
  }
  function ix(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < n ? r : n;
    }
  }
  function nd(e, n) {
    ix(e, n), (e = e.alternate) && ix(e, n);
  }
  function rx(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = Mr(e, 67108864);
      n !== null && bn(n, e, 67108864), nd(e, 67108864);
    }
  }
  function ax(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = En();
      n = Ru(n);
      var r = Mr(e, n);
      r !== null && bn(r, e, n), nd(e, n);
    }
  }
  var Ja = !0;
  function Kk(e, n, r, l) {
    var u = fe.T;
    fe.T = null;
    var d = _e.p;
    try {
      _e.p = 2, id(e, n, r, l);
    } finally {
      _e.p = d, fe.T = u;
    }
  }
  function Pk(e, n, r, l) {
    var u = fe.T;
    fe.T = null;
    var d = _e.p;
    try {
      _e.p = 8, id(e, n, r, l);
    } finally {
      _e.p = d, fe.T = u;
    }
  }
  function id(e, n, r, l) {
    if (Ja) {
      var u = rd(l);
      if (u === null)
        Bf(
          e,
          n,
          l,
          Ys,
          r
        ), ox(e, l);
      else if (Wk(
        u,
        e,
        n,
        r,
        l
      ))
        l.stopPropagation();
      else if (ox(e, l), n & 4 && -1 < Jk.indexOf(e)) {
        for (; u !== null; ) {
          var d = da(u);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                  var y = Pn(d.pendingLanes);
                  if (y !== 0) {
                    var k = d;
                    for (k.pendingLanes |= 2, k.entangledLanes |= 2; y; ) {
                      var _ = 1 << 31 - st(y);
                      k.entanglements[1] |= _, y &= ~_;
                    }
                    bi(d), (Qe & 6) === 0 && (Ns = Et() + 500, Gl(0));
                  }
                }
                break;
              case 31:
              case 13:
                k = Mr(d, 2), k !== null && bn(k, d, 2), Ms(), nd(d, 2);
            }
          if (d = rd(l), d === null && Bf(
            e,
            n,
            l,
            Ys,
            r
          ), d === u) break;
          u = d;
        }
        u !== null && l.stopPropagation();
      } else
        Bf(
          e,
          n,
          l,
          null,
          r
        );
    }
  }
  function rd(e) {
    return e = $u(e), ad(e);
  }
  var Ys = null;
  function ad(e) {
    if (Ys = null, e = Tr(e), e !== null) {
      var n = c(e);
      if (n === null) e = null;
      else {
        var r = n.tag;
        if (r === 13) {
          if (e = f(n), e !== null) return e;
          e = null;
        } else if (r === 31) {
          if (e = p(n), e !== null) return e;
          e = null;
        } else if (r === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return Ys = e, null;
  }
  function lx(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ht()) {
          case Qn:
            return 2;
          case rn:
            return 8;
          case ua:
          case cl:
            return 32;
          case Cr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ld = !1, pr = null, hr = null, mr = null, eo = /* @__PURE__ */ new Map(), to = /* @__PURE__ */ new Map(), gr = [], Jk = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ox(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        pr = null;
        break;
      case "dragenter":
      case "dragleave":
        hr = null;
        break;
      case "mouseover":
      case "mouseout":
        mr = null;
        break;
      case "pointerover":
      case "pointerout":
        eo.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        to.delete(n.pointerId);
    }
  }
  function no(e, n, r, l, u, d) {
    return e === null || e.nativeEvent !== d ? (e = {
      blockedOn: n,
      domEventName: r,
      eventSystemFlags: l,
      nativeEvent: d,
      targetContainers: [u]
    }, n !== null && (n = da(n), n !== null && rx(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, u !== null && n.indexOf(u) === -1 && n.push(u), e);
  }
  function Wk(e, n, r, l, u) {
    switch (n) {
      case "focusin":
        return pr = no(
          pr,
          e,
          n,
          r,
          l,
          u
        ), !0;
      case "dragenter":
        return hr = no(
          hr,
          e,
          n,
          r,
          l,
          u
        ), !0;
      case "mouseover":
        return mr = no(
          mr,
          e,
          n,
          r,
          l,
          u
        ), !0;
      case "pointerover":
        var d = u.pointerId;
        return eo.set(
          d,
          no(
            eo.get(d) || null,
            e,
            n,
            r,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return d = u.pointerId, to.set(
          d,
          no(
            to.get(d) || null,
            e,
            n,
            r,
            l,
            u
          )
        ), !0;
    }
    return !1;
  }
  function sx(e) {
    var n = Tr(e.target);
    if (n !== null) {
      var r = c(n);
      if (r !== null) {
        if (n = r.tag, n === 13) {
          if (n = f(r), n !== null) {
            e.blockedOn = n, eh(e.priority, function() {
              ax(r);
            });
            return;
          }
        } else if (n === 31) {
          if (n = p(r), n !== null) {
            e.blockedOn = n, eh(e.priority, function() {
              ax(r);
            });
            return;
          }
        } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Gs(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var r = rd(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var l = new r.constructor(
          r.type,
          r
        );
        Zu = l, r.target.dispatchEvent(l), Zu = null;
      } else
        return n = da(r), n !== null && rx(n), e.blockedOn = r, !1;
      n.shift();
    }
    return !0;
  }
  function ux(e, n, r) {
    Gs(e) && r.delete(n);
  }
  function eS() {
    ld = !1, pr !== null && Gs(pr) && (pr = null), hr !== null && Gs(hr) && (hr = null), mr !== null && Gs(mr) && (mr = null), eo.forEach(ux), to.forEach(ux);
  }
  function Fs(e, n) {
    e.blockedOn === n && (e.blockedOn = null, ld || (ld = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      eS
    )));
  }
  var Xs = null;
  function cx(e) {
    Xs !== e && (Xs = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        Xs === e && (Xs = null);
        for (var n = 0; n < e.length; n += 3) {
          var r = e[n], l = e[n + 1], u = e[n + 2];
          if (typeof l != "function") {
            if (ad(l || r) === null)
              continue;
            break;
          }
          var d = da(r);
          d !== null && (e.splice(n, 3), n -= 3, Hc(
            d,
            {
              pending: !0,
              data: u,
              method: r.method,
              action: l
            },
            l,
            u
          ));
        }
      }
    ));
  }
  function Wa(e) {
    function n(_) {
      return Fs(_, e);
    }
    pr !== null && Fs(pr, e), hr !== null && Fs(hr, e), mr !== null && Fs(mr, e), eo.forEach(n), to.forEach(n);
    for (var r = 0; r < gr.length; r++) {
      var l = gr[r];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < gr.length && (r = gr[0], r.blockedOn === null); )
      sx(r), r.blockedOn === null && gr.shift();
    if (r = (e.ownerDocument || e).$$reactFormReplay, r != null)
      for (l = 0; l < r.length; l += 3) {
        var u = r[l], d = r[l + 1], y = u[dn] || null;
        if (typeof d == "function")
          y || cx(r);
        else if (y) {
          var k = null;
          if (d && d.hasAttribute("formAction")) {
            if (u = d, y = d[dn] || null)
              k = y.formAction;
            else if (ad(u) !== null) continue;
          } else k = y.action;
          typeof k == "function" ? r[l + 1] = k : (r.splice(l, 3), l -= 3), cx(r);
        }
      }
  }
  function fx() {
    function e(d) {
      d.canIntercept && d.info === "react-transition" && d.intercept({
        handler: function() {
          return new Promise(function(y) {
            return u = y;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      u !== null && (u(), u = null), l || setTimeout(r, 20);
    }
    function r() {
      if (!l && !navigation.transition) {
        var d = navigation.currentEntry;
        d && d.url != null && navigation.navigate(d.url, {
          state: d.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, u = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(r, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), u !== null && (u(), u = null);
      };
    }
  }
  function od(e) {
    this._internalRoot = e;
  }
  Qs.prototype.render = od.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(o(409));
    var r = n.current, l = En();
    nx(r, l, e, n, null, null);
  }, Qs.prototype.unmount = od.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      nx(e.current, 2, null, e, null, null), Ms(), n[fa] = null;
    }
  };
  function Qs(e) {
    this._internalRoot = e;
  }
  Qs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Wp();
      e = { blockedOn: null, target: e, priority: n };
      for (var r = 0; r < gr.length && n !== 0 && n < gr[r].priority; r++) ;
      gr.splice(r, 0, e), r === 0 && sx(e);
    }
  };
  var dx = i.version;
  if (dx !== "19.3.0")
    throw Error(
      o(
        527,
        dx,
        "19.3.0"
      )
    );
  _e.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = g(n), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var tS = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: fe,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ks.isDisabled && Ks.supportsFiber)
      try {
        ye = Ks.inject(
          tS
        ), xe = Ks;
      } catch {
      }
  }
  return ro.createRoot = function(e, n) {
    if (!s(e)) throw Error(o(299));
    var r = !1, l = "", u = tg, d = ng, y = ig;
    return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError)), n = ex(
      e,
      1,
      !1,
      null,
      null,
      r,
      l,
      null,
      u,
      d,
      y,
      fx
    ), e[fa] = n.current, Uf(e), new od(n);
  }, ro.hydrateRoot = function(e, n, r) {
    if (!s(e)) throw Error(o(299));
    var l = !1, u = "", d = tg, y = ng, k = ig, _ = null;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onUncaughtError !== void 0 && (d = r.onUncaughtError), r.onCaughtError !== void 0 && (y = r.onCaughtError), r.onRecoverableError !== void 0 && (k = r.onRecoverableError), r.formState !== void 0 && (_ = r.formState)), n = ex(
      e,
      1,
      !0,
      n,
      r ?? null,
      l,
      u,
      _,
      d,
      y,
      k,
      fx
    ), n.context = tx(null), r = n.current, l = En(), l = Ru(l), u = er(l), u.callback = null, tr(r, u, l), r = l, n.current.lanes = r, dl(n, r), bi(n), e[fa] = n.current, Uf(e), new Qs(n);
  }, ro.version = "19.3.0", ro;
}
var kx;
function fS() {
  if (kx) return cd.exports;
  kx = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (i) {
        console.error(i);
      }
  }
  return t(), cd.exports = cS(), cd.exports;
}
var dS = fS();
const pS = (t) => t?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function hS(t, i, a = []) {
  if (i == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: pS(t),
    size: 24,
    node: i,
    ...a.length > 0 ? { aliases: a } : {}
  };
}
const mS = (t) => {
  let i = "", a = !1;
  for (const o of t) {
    if (o === "-" || o === "_" || o <= " ") {
      a = i.length > 0;
      continue;
    }
    i.length === 0 ? i += o.toLowerCase() : i += a ? o.toUpperCase() : o, a = !1;
  }
  return i;
};
const gS = (t) => {
  const i = mS(t);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
const Id = (...t) => t.filter((i, a, o) => !!i && i.trim() !== "" && o.indexOf(i) === a).join(" ").trim();
const Pr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function hd(t) {
  return t != null;
}
function bS(t, i = {}) {
  const a = i.attributeNames ?? {}, o = (w) => a[w] ?? w, s = t.size ?? t.width ?? Pr.width, c = t.size ?? t.height ?? Pr.height, f = t.aliases?.filter((w) => typeof w == "string" && w.trim() !== "").map((w) => `lucide-${w}`) ?? [], p = [...t.name ? [`lucide-${t.name}`] : [], ...f], m = i.className?.split(" ").filter(Boolean) ?? [], g = i.includeDefaultClasses === !1 ? Id(...m) : Id("lucide", ...p, ...m), b = i.absoluteStrokeWidth ? Number(i.strokeWidth ?? Pr["stroke-width"]) * Number(t.size ?? t.width ?? Pr.width) / Number(i.size ?? i.width ?? Pr.width) : i.strokeWidth ?? Pr["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(Pr).reduce((w, [v, S]) => (w[o(v)] = S, w), {}),
      ..."color" in i && i.color && {
        [o("stroke")]: i.color
      },
      ..."size" in i && hd(i.size) && {
        [o("width")]: i.size,
        [o("height")]: i.size
      },
      ..."width" in i && hd(i.width) && {
        [o("width")]: i.width
      },
      ..."height" in i && hd(i.height) && {
        [o("height")]: i.height
      },
      [o("stroke-width")]: b,
      ...g && {
        [o("class")]: g
      },
      [o("viewBox")]: `0 0 ${s} ${c}`,
      ...i.hasA11yProp === !1 ? {
        [o("aria-hidden")]: "true"
      } : {},
      ..."attributes" in i && i.attributes
    },
    t.node.map((w) => {
      const [v, S, E] = w, j = i.nonScalingStroke ? { [o("vector-effect")]: "non-scaling-stroke", ...S } : S;
      return E ? [v, j, E] : [v, j];
    })
  ];
}
function xS(t, i = {}) {
  return bS(t, {
    ...i,
    attributeNames: {
      ...i.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect"
    }
  });
}
const yS = (t) => {
  for (const i in t)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
}, vS = F.createContext({}), wS = () => F.useContext(vS), kS = F.forwardRef(
  ({
    color: t,
    size: i,
    width: a,
    height: o,
    strokeWidth: s,
    absoluteStrokeWidth: c,
    nonScalingStroke: f,
    className: p = "",
    children: m,
    iconNode: g = [],
    icon: b = {
      node: g,
      aliases: [],
      size: 24
    },
    ...x
  }, w) => {
    const {
      size: v = 24,
      strokeWidth: S = 2,
      absoluteStrokeWidth: E = !1,
      nonScalingStroke: j = !1,
      color: N = "currentColor",
      className: U = ""
    } = wS() ?? {}, R = !!m || yS(x), [G, K, A = []] = xS(b, {
      color: t ?? N,
      width: a ?? i ?? v,
      height: o ?? i ?? v,
      strokeWidth: s ?? S,
      absoluteStrokeWidth: c ?? E,
      nonScalingStroke: f ?? j,
      className: Id(U, p),
      hasA11yProp: R,
      attributes: x
    });
    return F.createElement(
      G,
      {
        ref: w,
        ...K
      },
      [
        ...A.map(([V, ie]) => F.createElement(V, ie)),
        ...Array.isArray(m) ? m : [m]
      ]
    );
  }
);
function we(t, i = [], a = []) {
  const o = typeof t == "string" ? hS(t, i, a) : t, s = F.forwardRef(
    ({ className: c, ...f }, p) => F.createElement(kS, {
      ref: p,
      icon: o,
      className: c,
      ...f
    })
  );
  return o.name && (s.displayName = gS(o.name)), s;
}
const Py = {
  name: "archive",
  size: 24,
  node: [
    ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
    ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
    ["path", { d: "M10 12h4", key: "a56b0p" }]
  ]
};
Py.node;
const Sx = we(Py);
const Jy = {
  name: "arrow-down",
  size: 24,
  node: [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
  ]
};
Jy.node;
const SS = we(Jy);
const Wy = {
  name: "arrow-left",
  size: 24,
  node: [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ]
};
Wy.node;
const zS = we(Wy);
const ev = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
ev.node;
const _S = we(ev);
const tv = {
  name: "arrow-up-right",
  size: 24,
  node: [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }]
  ]
};
tv.node;
const wr = we(tv);
const nv = {
  name: "arrow-up",
  size: 24,
  node: [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }]
  ]
};
nv.node;
const jS = we(nv);
const iv = {
  name: "audio-lines",
  size: 24,
  node: [
    ["path", { d: "M2 10v3", key: "1fnikh" }],
    ["path", { d: "M6 6v11", key: "11sgs0" }],
    ["path", { d: "M10 3v18", key: "yhl04a" }],
    ["path", { d: "M14 8v7", key: "3a1oy3" }],
    ["path", { d: "M18 5v13", key: "123xd1" }],
    ["path", { d: "M22 10v3", key: "154ddg" }]
  ]
};
iv.node;
const ES = we(iv);
const rv = {
  name: "book-open",
  size: 24,
  node: [
    ["path", { d: "M12 5v16", key: "1f6ucr" }],
    [
      "path",
      {
        d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
        key: "1fyvmf"
      }
    ]
  ]
};
rv.node;
const av = we(rv);
const lv = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
lv.node;
const Nn = we(lv);
const ov = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
ov.node;
const co = we(ov);
const sv = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]
};
sv.node;
const vi = we(sv);
const uv = {
  name: "chevron-left",
  size: 24,
  node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]
};
uv.node;
const CS = we(uv);
const cv = {
  name: "circle-check",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" }]
  ],
  aliases: ["check-circle-2"]
};
cv.node;
const TS = we(cv);
const fv = {
  name: "circle-dot",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
  ]
};
fv.node;
const zx = we(fv);
const dv = {
  name: "circle-question-mark",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ],
  aliases: ["help-circle", "circle-help"]
};
dv.node;
const NS = we(dv);
const pv = {
  name: "code-xml",
  size: 24,
  node: [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
  ],
  aliases: ["code-2"]
};
pv.node;
const hv = we(pv);
const mv = {
  name: "copy",
  size: 24,
  node: [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ]
};
mv.node;
const AS = we(mv);
const gv = {
  name: "download",
  size: 24,
  node: [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
  ]
};
gv.node;
const OS = we(gv);
const bv = {
  name: "ellipsis",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
    ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
  ],
  aliases: ["more-horizontal"]
};
bv.node;
const MS = we(bv);
const xv = {
  name: "external-link",
  size: 24,
  node: [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
  ]
};
xv.node;
const Hd = we(xv);
const yv = {
  name: "face-slightly-smiling",
  size: 24,
  node: [
    ["path", { d: "M15 10V9", key: "4dkmfx" }],
    ["path", { d: "M16.472 15a6 6 0 01-8.943 0", key: "7qomzy" }],
    ["path", { d: "M9 10V9", key: "1lazqi" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
  ],
  aliases: ["smile"]
};
yv.node;
const vv = we(yv);
const wv = {
  name: "file-code-corner",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",
        key: "1wthlu"
      }
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "m5 16-3 3 3 3", key: "331omg" }],
    ["path", { d: "m9 22 3-3-3-3", key: "lsp7cz" }]
  ],
  aliases: ["file-code-2"]
};
wv.node;
const nl = we(wv);
const kv = {
  name: "file-text",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6"
      }
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }]
  ]
};
kv.node;
const Sv = we(kv);
const zv = {
  name: "file",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6"
      }
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
  ]
};
zv.node;
const DS = we(zv);
const _v = {
  name: "files",
  size: 24,
  node: [
    ["path", { d: "M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8", key: "14sh0y" }],
    [
      "path",
      {
        d: "M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",
        key: "1970lx"
      }
    ],
    ["path", { d: "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1", key: "l4dndm" }]
  ]
};
_v.node;
const RS = we(_v);
const jv = {
  name: "folder-open",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
        key: "usdka0"
      }
    ]
  ]
};
jv.node;
const kr = we(jv);
const Ev = {
  name: "folder-search",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",
        key: "1bw5m7"
      }
    ],
    ["path", { d: "m21 21-1.9-1.9", key: "1g2n9r" }],
    ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }]
  ]
};
Ev.node;
const LS = we(Ev);
const Cv = {
  name: "folder",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
        key: "1kt360"
      }
    ]
  ]
};
Cv.node;
const Tv = we(Cv);
const Nv = {
  name: "git-branch",
  size: 24,
  node: [
    ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
  ]
};
Nv.node;
const Av = we(Nv);
const Ov = {
  name: "image",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
  ]
};
Ov.node;
const US = we(Ov);
const Mv = {
  name: "layers",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
        key: "zw3jo"
      }
    ],
    [
      "path",
      {
        d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
        key: "1wduqc"
      }
    ],
    [
      "path",
      {
        d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
        key: "kqbvx6"
      }
    ]
  ],
  aliases: ["layers-3"]
};
Mv.node;
const Dv = we(Mv);
const Rv = {
  name: "leaf",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20",
        key: "1wjnjv"
      }
    ],
    ["path", { d: "M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13", key: "c1ejpn" }]
  ]
};
Rv.node;
const Lv = we(Rv);
const Uv = {
  name: "loader-circle",
  size: 24,
  node: [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  aliases: ["loader-2"]
};
Uv.node;
const ra = we(Uv);
const Bv = {
  name: "message-square",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        key: "18887p"
      }
    ]
  ]
};
Bv.node;
const lu = we(Bv);
const Iv = {
  name: "mic",
  size: 24,
  node: [
    ["path", { d: "M12 19v3", key: "npa21l" }],
    ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
    ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
  ]
};
Iv.node;
const BS = we(Iv);
const Hv = {
  name: "monitor",
  size: 24,
  node: [
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
  ]
};
Hv.node;
const IS = we(Hv);
const Zv = {
  name: "moon",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
      }
    ]
  ]
};
Zv.node;
const $v = we(Zv);
const qv = {
  name: "palette",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
        key: "e79jfc"
      }
    ],
    ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
    ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
    ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
    ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
  ]
};
qv.node;
const dp = we(qv);
const Vv = {
  name: "panel-left-close",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
  ],
  aliases: ["sidebar-close"]
};
Vv.node;
const HS = we(Vv);
const Yv = {
  name: "panel-left-open",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
  ],
  aliases: ["sidebar-open"]
};
Yv.node;
const ZS = we(Yv);
const Gv = {
  name: "panel-right",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M15 3v18", key: "14nvp0" }]
  ]
};
Gv.node;
const $S = we(Gv);
const Fv = {
  name: "paperclip",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
        key: "1miecu"
      }
    ]
  ]
};
Fv.node;
const qS = we(Fv);
const Xv = {
  name: "pin",
  size: 24,
  node: [
    ["path", { d: "M12 17v5", key: "bb1du9" }],
    [
      "path",
      {
        d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
        key: "1nkz8b"
      }
    ]
  ]
};
Xv.node;
const _x = we(Xv);
const Qv = {
  name: "plus",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]
};
Qv.node;
const vo = we(Qv);
const Kv = {
  name: "refresh-cw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }]
  ]
};
Kv.node;
const Pv = we(Kv);
const Jv = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
Jv.node;
const fu = we(Jv);
const Wv = {
  name: "settings-2",
  size: 24,
  node: [
    ["path", { d: "M14 17H5", key: "gfn3mx" }],
    ["path", { d: "M19 7h-9", key: "6i9tg" }],
    ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
    ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
  ]
};
Wv.node;
const e1 = we(Wv);
const t1 = {
  name: "shield-check",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
      }
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
  ]
};
t1.node;
const VS = we(t1);
const n1 = {
  name: "sparkles",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr"
      }
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
  ],
  aliases: ["stars"]
};
n1.node;
const YS = we(n1);
const i1 = {
  name: "square-pen",
  size: 24,
  node: [
    ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
    [
      "path",
      {
        d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
        key: "ohrbg2"
      }
    ]
  ],
  aliases: ["pen-box", "edit", "pen-square"]
};
i1.node;
const GS = we(i1);
const r1 = {
  name: "square",
  size: 24,
  node: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]]
};
r1.node;
const a1 = we(r1);
const l1 = {
  name: "sun",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
  ]
};
l1.node;
const o1 = we(l1);
const s1 = {
  name: "terminal",
  size: 24,
  node: [
    ["path", { d: "M12 19h8", key: "baeox8" }],
    ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]
  ]
};
s1.node;
const du = we(s1);
const u1 = {
  name: "users",
  size: 24,
  node: [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
  ]
};
u1.node;
const FS = we(u1);
const c1 = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
c1.node;
const Sr = we(c1);
function ou({
  label: t,
  value: i,
  options: a,
  onChange: o,
  disabled: s,
  icon: c,
  className: f = ""
}) {
  const p = F.useId(), m = F.useRef(null), g = F.useRef(null), [b, x] = F.useState(!1), [w, v] = F.useState(0), S = F.useRef({ text: "", at: 0 }), E = a.findIndex((R) => R.value === i), j = () => {
    if (!m.current || !g.current) return;
    const R = m.current.getBoundingClientRect(), G = g.current;
    G.style.minWidth = `${Math.max(R.width, 200)}px`, G.style.maxHeight = `${Math.min(420, Math.max(R.top, innerHeight - R.bottom) - 16)}px`;
    const K = innerHeight - R.bottom < G.offsetHeight + 12;
    G.style.top = `${Math.max(8, K ? R.top - G.offsetHeight - 8 : R.bottom + 8)}px`, G.style.left = `${Math.max(8, Math.min(R.left, innerWidth - G.offsetWidth - 8))}px`;
  }, N = (R = Math.max(0, E)) => {
    v(R), g.current?.showPopover(), x(!0), j();
  }, U = (R) => {
    a[R] && o(a[R].value), g.current?.hidePopover(), m.current?.focus();
  };
  return F.useEffect(() => {
    if (!b) return;
    j(), window.addEventListener("resize", j);
    const R = (G) => {
      g.current?.contains(G.target) || g.current?.hidePopover();
    };
    return window.addEventListener("scroll", R, !0), () => {
      window.removeEventListener("resize", j), window.removeEventListener("scroll", R, !0);
    };
  }, [b]), F.useEffect(() => {
    b && document.getElementById(`${p}-${w}`)?.scrollIntoView({ block: "nearest" });
  }, [w, b, p]), F.useEffect(() => {
    const R = (G) => {
      G.detail !== t || s || (m.current?.focus(), N());
    };
    return window.addEventListener("muse:select", R), () => window.removeEventListener("muse:select", R);
  }), /* @__PURE__ */ h.jsxs("div", { className: `muse-select ${f}`, children: [
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        ref: m,
        type: "button",
        className: "select-control",
        role: "combobox",
        "aria-label": t,
        "aria-haspopup": "listbox",
        "aria-expanded": b,
        "aria-controls": p,
        "aria-activedescendant": b ? `${p}-${w}` : void 0,
        disabled: s,
        onClick: () => b ? g.current?.hidePopover() : N(),
        onKeyDown: (R) => {
          if (["ArrowDown", "ArrowUp", "Home", "End"].includes(R.key)) {
            R.preventDefault();
            const G = R.key === "Home" ? 0 : R.key === "End" ? a.length - 1 : Math.max(
              0,
              Math.min(a.length - 1, w + (R.key === "ArrowDown" ? 1 : -1))
            );
            b ? v(G) : N(R.key === "Home" || R.key === "End" ? G : Math.max(0, E));
          } else if (R.key === "Enter" || R.key === " ")
            R.preventDefault(), b ? U(w) : N();
          else if (R.key === "Escape" || R.key === "Tab")
            R.key === "Escape" && b && (R.preventDefault(), R.stopPropagation()), g.current?.hidePopover();
          else if (R.key.length === 1 && !R.metaKey && !R.ctrlKey && !R.altKey) {
            S.current = {
              text: (Date.now() - S.current.at < 700 ? S.current.text : "") + R.key.toLowerCase(),
              at: Date.now()
            };
            const G = a.findIndex(
              (K) => K.label.toLowerCase().startsWith(S.current.text)
            );
            G >= 0 && (b ? v(G) : N(G));
          }
        },
        children: [
          c,
          /* @__PURE__ */ h.jsx("span", { className: "select-value", children: a[E]?.label || i }),
          /* @__PURE__ */ h.jsx(co, { size: 13, className: "select-chevron" })
        ]
      }
    ),
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        id: p,
        ref: g,
        className: "select-popover",
        popover: "auto",
        role: "listbox",
        "aria-label": t,
        onToggle: (R) => x(R.newState === "open"),
        children: [
          /* @__PURE__ */ h.jsx("div", { className: "select-heading", children: t }),
          a.map((R, G) => /* @__PURE__ */ h.jsxs(
            "div",
            {
              id: `${p}-${G}`,
              role: "option",
              "aria-selected": R.value === i,
              className: `select-option ${G === w ? "highlighted" : ""}`,
              onPointerMove: () => v(G),
              onMouseDown: (K) => K.preventDefault(),
              onClick: () => U(G),
              children: [
                /* @__PURE__ */ h.jsx(
                  Nn,
                  {
                    size: 15,
                    style: { visibility: R.value === i ? "visible" : "hidden" }
                  }
                ),
                /* @__PURE__ */ h.jsx("span", { children: R.label })
              ]
            },
            R.value
          ))
        ]
      }
    )
  ] });
}
function f1(t) {
  return t.kind === "reminderChild" || t.kind === "hookRun";
}
function XS(t) {
  return t.kind === "reminderChild" ? t.reminderAgentId ? `Reminder · ${t.reminderAgentId}` : "Background reminder" : t.kind === "hookRun" ? t.label || "CLI hook" : t.tool || t.label || t.kind.replace(/([A-Z])/g, " $1").replace(/^./, (i) => i.toUpperCase());
}
function QS(t) {
  const i = t.filter((a) => !a.retracted && a.status === "inProgress");
  return i.length > 0 && i.every(f1);
}
const Zd = [
  { name: "clear", description: "Start a new conversation; keep saved history" },
  { name: "new", description: "Start a new conversation" },
  { name: "voice", description: "Start voice input" },
  { name: "model", description: "Choose a model, or /model <model-id>" },
  { name: "effort", description: "Choose reasoning effort, or /effort <level>" },
  { name: "compact", description: "Compact this conversation with Muse Code" },
  { name: "rename", description: "/rename <conversation name>" },
  { name: "stop", description: "Stop Muse’s active turn" },
  { name: "settings", description: "Open desktop settings" },
  { name: "help", description: "Open the guide and CLI compatibility information" }
];
function d1(t) {
  const i = /^\/([a-z-]+)(?:\s+([\s\S]*))?$/i.exec(t.trim());
  return i ? { name: i[1].toLowerCase(), argument: i[2]?.trim() || "" } : null;
}
function $d(t) {
  const i = Object.values(t).filter((o) => typeof o == "number");
  return Object.entries(t).filter(([o, s]) => i.indexOf(+o) === -1).map(([o, s]) => s);
}
function jx(t, i = "|") {
  return t.map((a) => x1(a)).join(i);
}
function qd(t, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
class KS {
  constructor(i) {
    this._getter = i, this._value = void 0;
  }
  get value() {
    const i = this._getter;
    return i !== void 0 && (this._value = i(), this._getter = void 0), this._value;
  }
}
function pp(t) {
  return new KS(t);
}
function PS(t) {
  return t == null;
}
function hp(t) {
  const i = t.startsWith("^") ? 1 : 0, a = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(i, a);
}
function JS(t, i) {
  const a = t / i, o = Math.round(a), s = 4 * Number.EPSILON * Math.max(Math.abs(a), 1);
  return Math.abs(a - o) < s ? 0 : a - o;
}
function oa(t, i, a) {
  Object.defineProperty(t, i, {
    value: a,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function p1(t) {
  const i = Object.getOwnPropertyDescriptor(t, "shape");
  return i?.get ? i.get.raw : i?.value;
}
function qi(t) {
  return p1(t._zod.def) ?? t._zod.def.shape;
}
function h1(t, i, a) {
  Object.defineProperty(t, i, {
    get() {
      const o = a();
      return oa(this, i, o), o;
    },
    enumerable: !0,
    configurable: !0
  });
}
function m1(t, i, a) {
  i in t ? oa(t, i, a) : t[i] = a;
}
function aa(t, i, a, o) {
  const s = qi(i);
  for (const c of a) {
    const f = Object.getOwnPropertyDescriptor(s, c);
    f.enumerable && (f.get ? h1(t, c, () => {
      const p = i._zod.def.shape[c];
      return o ? o(p, c) : p;
    }) : m1(t, c, o ? o(f.value, c) : f.value));
  }
}
function WS(t, i) {
  for (const a of Reflect.ownKeys(i)) {
    const o = Object.getOwnPropertyDescriptor(i, a);
    o.enumerable && (o.get ? h1(t, a, () => i[a]) : m1(t, a, o.value));
  }
}
function An(...t) {
  const i = {};
  for (const a of t) {
    const o = Object.getOwnPropertyDescriptors(a);
    Object.assign(i, o);
  }
  return Object.defineProperties({}, i);
}
function ez(t) {
  return JSON.stringify(t);
}
function tz(t) {
  return t.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const g1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function pu(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const nz = /* @__PURE__ */ pp(() => {
  if (wi.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function wo(t) {
  if (pu(t) === !1)
    return !1;
  const i = t.constructor;
  if (i === void 0 || typeof i != "function")
    return !0;
  const a = i.prototype;
  return !(pu(a) === !1 || Object.prototype.hasOwnProperty.call(a, "isPrototypeOf") === !1);
}
function b1(t) {
  return wo(t) ? { ...t } : Array.isArray(t) ? [...t] : t instanceof Map ? new Map(t) : t instanceof Set ? new Set(t) : t;
}
const iz = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function zu(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function _r(t, i, a) {
  const o = new t._zod.constr(i ?? t._zod.def);
  return (!i || a?.parent) && (o._zod.parent = t), o;
}
function ke(t) {
  const i = t;
  if (!i)
    return {};
  if (typeof i == "string")
    return { error: () => i };
  if (i?.message !== void 0) {
    if (i?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    i.error = i.message;
  }
  return delete i.message, typeof i.error == "string" ? { ...i, error: () => i.error } : i;
}
function x1(t) {
  return typeof t == "bigint" ? t.toString() + "n" : typeof t == "string" ? `"${t}"` : `${t}`;
}
function rz(t) {
  return Object.keys(t).filter((i) => t[i]._zod.optin !== void 0 && t[i]._zod.optout === "optional");
}
const y1 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, az = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function lz(t, i) {
  const a = t._zod.def, o = a.checks;
  if (o && o.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const c = {};
  return aa(c, t, _u(t, i)), _r(t, An(a, { shape: c, checks: [] }));
}
function _u(t, i) {
  const a = qi(t), o = [];
  for (const s of Reflect.ownKeys(i)) {
    if (!Object.getOwnPropertyDescriptor(a, s)?.enumerable)
      throw new Error(`Unrecognized key: "${String(s)}"`);
    i[s] && o.push(s);
  }
  return o;
}
function oz(t, i) {
  const a = t._zod.def, o = a.checks;
  if (o && o.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const c = new Set(_u(t, i)), f = {};
  return aa(f, t, Reflect.ownKeys(qi(t)).filter((p) => !c.has(p))), _r(t, An(a, { shape: f, checks: [] }));
}
function sz(t, i) {
  if (!wo(i))
    throw new Error("Invalid input to extend: expected a plain object");
  const a = t._zod.def.checks;
  if (a && a.length > 0) {
    const s = qi(t);
    for (const c of Reflect.ownKeys(i))
      if (Object.getOwnPropertyDescriptor(s, c) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  return _r(t, An(t._zod.def, { shape: v1(t, i) }));
}
function v1(t, i) {
  const a = {};
  return aa(a, t, Reflect.ownKeys(qi(t))), WS(a, i), a;
}
function uz(t, i) {
  if (!wo(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  return _r(t, An(t._zod.def, { shape: v1(t, i) }));
}
function cz(t, i) {
  if (!i?._zod?.def)
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  if (t._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const a = {};
  aa(a, t, Reflect.ownKeys(qi(t))), aa(a, i, Reflect.ownKeys(qi(i)));
  const o = An(t._zod.def, {
    shape: a,
    get catchall() {
      return i._zod.def.catchall;
    },
    checks: i._zod.def.checks ?? []
  });
  return _r(t, o);
}
function Ex(t, i, a, o = "partial") {
  const c = i._zod.def.checks;
  if (c && c.length > 0)
    throw new Error(`.${o}() cannot be used on object schemas containing refinements`);
  const p = a ? new Set(_u(i, a)) : void 0, m = {};
  return aa(m, i, Reflect.ownKeys(qi(i)), t && ((g, b) => p && !p.has(b) ? g : new t({ type: "optional", innerType: g }))), _r(i, An(i._zod.def, { shape: m, checks: [] }));
}
function fz(t, i, a) {
  const o = a ? new Set(_u(i, a)) : void 0, s = {};
  return aa(s, i, Reflect.ownKeys(qi(i)), (c, f) => (
    // overwrite with non-optional
    o && !o.has(f) ? c : new t({ type: "nonoptional", innerType: c })
  )), _r(i, An(i._zod.def, { shape: s }));
}
function $i(t, i = 0) {
  if (t.aborted === !0)
    return !0;
  for (let a = i; a < t.issues.length; a++)
    if (t.issues[a]?.continue !== !0)
      return !0;
  return !1;
}
function dz(t, i = 0) {
  if (t.aborted === !0)
    return !0;
  for (let a = i; a < t.issues.length; a++)
    if (t.issues[a]?.continue === !1)
      return !0;
  return !1;
}
function w1(t, i) {
  return i.map((a) => {
    var o;
    return (o = a).path ?? (o.path = []), a.path.unshift(t), a;
  });
}
function ao(t) {
  return typeof t == "string" ? t : t?.message;
}
function Cx(t) {
  const i = [];
  for (const a of t ?? []) {
    const o = a._zod.def;
    if (!/_(length|size)$|_equals$/.test(o.check))
      break;
    const s = o.maximum ?? o.length ?? o.size;
    s >= 0 && i.push([s, a]);
  }
  return i;
}
function Vd(t, i, a) {
  var o;
  for (let s = i; s < t.length; s++)
    (o = t[s]).schema ?? (o.schema = a);
}
function al(t, i, a) {
  var o;
  const s = t.inst?._zod?.traits;
  s?.has("$ZodType") && (s.has("$ZodCheck") ? (o = t).schema ?? (o.schema = t.inst) : t.schema = t.inst);
  const c = t.schema !== t.inst ? t.schema?._zod.def?.error : void 0, f = t.message ? t.message : ao(t.inst?._zod.def?.error?.(t)) ?? ao(c?.(t)) ?? ao(i?.error?.(t)) ?? ao(a.customError?.(t)) ?? ao(a.localeError?.(t)) ?? "Invalid input", p = {};
  for (const m of Object.keys(t))
    m === "inst" || m === "schema" || m === "continue" || m === "input" || m === "__proto__" || (p[m] = t[m]);
  return p.path ?? (p.path = []), p.message = f, i?.reportInput && (p.input = t.input), p;
}
const pz = /[\uD800-\uDBFF]/;
function mp(t) {
  const i = t.length;
  if (!pz.test(t))
    return i;
  let a = i;
  for (let o = 0; o < i - 1; o++)
    (t.charCodeAt(o) & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 && (a--, o++);
  return a;
}
function gp(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function hz(t) {
  const i = typeof t;
  switch (i) {
    case "number":
      return Number.isNaN(t) ? "nan" : "number";
    case "object": {
      if (t === null)
        return "null";
      if (Array.isArray(t))
        return "array";
      const a = t;
      if (a && Object.getPrototypeOf(a) !== Object.prototype && "constructor" in a && a.constructor)
        return a.constructor.name;
    }
  }
  return i;
}
function ko(...t) {
  const [i, a, o] = t;
  return typeof i == "string" ? {
    message: i,
    code: "custom",
    input: a,
    inst: o
  } : { ...i };
}
function mz(t, i) {
  for (const a in i) {
    const o = Object.getOwnPropertyDescriptor(i, a);
    o.get ? Object.defineProperty(t, a, { ...o, enumerable: !1 }) : gz(t, a, o.value);
  }
}
function zr(t, i, a, o = !0) {
  return Object.defineProperty(t, i, { configurable: !0, writable: !0, enumerable: o, value: a }), a;
}
function k1(t, i, a) {
  return zr(t, i, a, !1);
}
function S1(t, i) {
  for (const a in t) {
    const o = t[a];
    Object.defineProperty(i, a, {
      configurable: !0,
      enumerable: !0,
      get() {
        return zr(this, a, o(this));
      },
      set(s) {
        zr(this, a, s);
      }
    });
  }
  return i;
}
function gz(t, i, a) {
  Object.defineProperty(t, i, {
    configurable: !0,
    get() {
      return this == null ? a : zr(this, i, a.bind(this));
    },
    set(o) {
      zr(this, i, o);
    }
  });
}
function bz(t, i) {
  const a = Object.getPrototypeOf(t);
  return i in a ? void 0 : a;
}
let md, yr = !1;
const xz = {
  configurable: !0,
  get() {
    yr = !0;
  }
};
function et(t, i, a) {
  const o = Object.getPrototypeOf(t._zod);
  if (i in o && md !== t._zod) {
    md = void 0;
    return;
  }
  md = t._zod, Object.defineProperty(o, i, {
    configurable: !0,
    get() {
      Object.defineProperty(this, i, xz);
      const s = yr;
      yr = !1;
      try {
        const c = a(this);
        return yr ? delete this[i] : Object.defineProperty(this, i, { configurable: !0, writable: !0, value: c }), yr = yr || s, c;
      } catch (c) {
        throw delete this[i], yr = yr || s, c;
      }
    },
    set(s) {
      Object.defineProperty(this, i, { configurable: !0, writable: !0, value: s });
    }
  });
}
function yz(t, i, a, o) {
  const s = bz(t, i);
  s && Object.defineProperty(s, i, {
    configurable: !0,
    get() {
      const c = { configurable: !0, writable: !0, enumerable: o, value: void 0 };
      return Object.defineProperty(this, i, c), c.value = a(this), Object.defineProperty(this, i, c), c.value;
    },
    set(c) {
      Object.defineProperty(this, i, { configurable: !0, writable: !0, enumerable: o, value: c });
    }
  });
}
const vz = "~constantCatch";
function wz(t) {
  const i = () => t;
  return i[vz] = !0, i;
}
var Tx;
const gd = { value: void 0, enumerable: !1 };
let Nx = "captureStackTrace" in Error ? Error : null;
function kz(t) {
  const i = Nx;
  if (i) {
    const a = i.stackTraceLimit;
    if (typeof a == "number") {
      try {
        i.stackTraceLimit = 0;
      } catch {
        return Nx = null, new t();
      }
      try {
        return new t();
      } finally {
        i.stackTraceLimit = a;
      }
    }
  }
  return new t();
}
function P(t, i, a, o) {
  const s = {};
  function c(w) {
    this.def = w, this.constr = x, this.traits = /* @__PURE__ */ new Set();
  }
  c.prototype = s;
  const f = a, p = f && /* @__PURE__ */ new WeakSet();
  function m(w, v) {
    if (w._zod) {
      if (w._zod.traits.has(t))
        return;
    } else {
      gd.value = new c(v);
      try {
        Object.defineProperty(w, "_zod", gd);
      } finally {
        gd.value = void 0;
      }
    }
    if (w._zod.traits.add(t), i(w, v), p) {
      const E = Object.getPrototypeOf(w), j = w._zod.constr.prototype;
      let N = E;
      for (; N && N !== j; )
        N = Object.getPrototypeOf(N);
      const U = N ?? E;
      p.has(U) || (p.add(U), mz(U, f));
    }
    const S = x.prototype;
    for (const E in S)
      Object.prototype.hasOwnProperty.call(S, E) && (E in w || (w[E] = S[E].bind(w)));
  }
  const g = o?.Parent ?? Object;
  class b extends g {
  }
  Object.defineProperty(b, "name", { value: t });
  function x(w) {
    const v = o?.Parent ? kz(b) : this;
    m(v, w);
    const S = v._zod.deferred;
    if (S) {
      for (const j of S)
        j();
      v._zod.deferred = void 0;
    }
    const E = globalThis.__zod_globalConfig?.postProcessor;
    return E && E(v), v;
  }
  return Object.defineProperty(x, "init", { value: m }), Object.defineProperty(x, Symbol.hasInstance, {
    value: (w) => o?.Parent && w instanceof o.Parent ? !0 : w?._zod?.traits?.has(t)
  }), Object.defineProperty(x, "name", { value: t }), x;
}
class na extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class z1 extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
(Tx = globalThis).__zod_globalConfig ?? (Tx.__zod_globalConfig = {});
const wi = globalThis.__zod_globalConfig;
function jr(t) {
  return t && Object.assign(wi, t), wi;
}
function Sz() {
  const t = this._zod;
  return t.message ?? (t.message = JSON.stringify(t.def, qd, 2)), t.message;
}
function zz(t) {
  this._zod.message = t;
}
const _z = {
  get: Sz,
  set: zz,
  enumerable: !0,
  configurable: !0
}, bd = { value: void 0, enumerable: !1 }, Ax = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), jz = (t, i) => {
  t.name = "$ZodError", bd.value = i, Object.defineProperty(t, "issues", bd), bd.value = void 0, Object.defineProperty(t, "message", _z);
  const a = Object.getPrototypeOf(t);
  Ax.has(a) || (Ax.add(a), Object.defineProperty(a, "toString", {
    configurable: !0,
    enumerable: !1,
    get() {
      const o = () => this.message;
      return Object.defineProperty(this, "toString", { value: o, configurable: !0, writable: !0 }), o;
    },
    set(o) {
      Object.defineProperty(this, "toString", { value: o, configurable: !0, writable: !0 });
    }
  }));
}, Ez = P("$ZodError", jz);
function Cz(t, i, a) {
  return Object.prototype.hasOwnProperty.call(t, i) || (i === "__proto__" ? Object.defineProperty(t, i, { value: a(), writable: !0, enumerable: !0, configurable: !0 }) : t[i] = a()), t[i];
}
function Tz(t, i = (a) => a.message) {
  const a = {}, o = [];
  for (const s of t.issues)
    s.path.length > 0 ? Cz(a, s.path[0], () => []).push(i(s)) : o.push(i(s));
  return { formErrors: o, fieldErrors: a };
}
function Nz(t, i = (a) => a.message) {
  const a = { _errors: [] }, o = (s, c = []) => {
    for (const f of s.issues)
      if (f.code === "invalid_union" && f.errors.length)
        f.errors.map((p) => o({ issues: p }, [...c, ...f.path]));
      else if (f.code === "invalid_key")
        o({ issues: f.issues }, [...c, ...f.path]);
      else if (f.code === "invalid_element")
        o({ issues: f.issues }, [...c, ...f.path]);
      else {
        const p = [...c, ...f.path];
        if (p.length === 0)
          a._errors.push(i(f));
        else {
          let m = a, g = 0;
          for (; g < p.length; ) {
            const b = p[g], x = g === p.length - 1;
            if (b === "_errors") {
              x && m._errors.push(i(f)), g++;
              continue;
            }
            Object.prototype.hasOwnProperty.call(m, b) || Object.defineProperty(m, b, {
              value: { _errors: [] },
              enumerable: !0,
              writable: !0,
              configurable: !0
            });
            const w = m[b];
            x && w._errors.push(i(f)), m = w, g++;
          }
        }
      }
  };
  return o(t), a;
}
function ju(t, i) {
  return { callee: i?.callee ?? t, Err: i?.Err };
}
const bp = (t) => {
  const i = (a, o, s, c) => {
    const f = s ? { ...s, async: !1 } : { async: !1 }, p = a._zod.run({ value: o, issues: [] }, f);
    if (p instanceof Promise)
      throw new na();
    if (p.issues.length) {
      const m = new (c?.Err ?? t)(p.issues.map((g) => al(g, f, jr())));
      throw g1(m, c?.callee ?? i), m;
    }
    return p.value;
  };
  return i;
}, xp = (t) => {
  const i = async (a, o, s, c) => {
    const f = s ? { ...s, async: !0 } : { async: !0 };
    let p = a._zod.run({ value: o, issues: [] }, f);
    if (p instanceof Promise && (p = await p), p.issues.length) {
      const m = new (c?.Err ?? t)(p.issues.map((g) => al(g, f, jr())));
      throw g1(m, c?.callee ?? i), m;
    }
    return p.value;
  };
  return i;
}, yp = (t) => (i, a, o) => {
  const s = o ? { ...o, async: !1 } : { async: !1 }, c = i._zod.run({ value: a, issues: [] }, s);
  if (c instanceof Promise)
    throw new na();
  return c.issues.length ? _1(t, c.issues, s) : { success: !0, data: c.value };
};
function _1(t, i, a) {
  let o;
  return {
    success: !1,
    get error() {
      return o || (o = new t(i.map((s) => al(s, a, jr()))), i = void 0, a = void 0), o;
    },
    set error(s) {
      o = s, i = void 0, a = void 0;
    }
  };
}
const vp = (t) => async (i, a, o) => {
  const s = o ? { ...o, async: !0 } : { async: !0 };
  let c = i._zod.run({ value: a, issues: [] }, s);
  return c instanceof Promise && (c = await c), c.issues.length ? _1(t, c.issues, s) : { success: !0, data: c.value };
}, Az = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), Oz = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), Mz = ((t, i, a) => {
  const o = t._zod.bag.validator;
  if (o !== void 0) {
    if (o(i) !== Az)
      return !0;
    if (o.definite === !0 && a === void 0)
      return !1;
  }
  return Dz(t, i, a);
});
function Dz(t, i, a) {
  const o = a ? { ...a, async: !1, abortEarly: !0 } : { async: !1, abortEarly: !0 }, s = t._zod.bag.fallbackRun;
  let c;
  if (s ? (o[Oz] = !0, c = s({ value: i, issues: [] }, o)) : c = t._zod.run({ value: i, issues: [] }, o), c instanceof Promise)
    throw new na();
  return c.issues.length === 0;
}
const Rz = async (t, i, a) => {
  const o = a ? { ...a, async: !0, abortEarly: !0 } : { async: !0, abortEarly: !0 };
  let s = t._zod.run({ value: i, issues: [] }, o);
  return s instanceof Promise && (s = await s), s.issues.length === 0;
}, Lz = (t) => {
  const i = bp(t), a = (o, s, c, f) => {
    const p = c ? { ...c, direction: "backward" } : { direction: "backward" };
    return i(o, s, p, ju(a, f));
  };
  return a;
}, Uz = (t) => {
  const i = bp(t), a = (o, s, c, f) => i(o, s, c, ju(a, f));
  return a;
}, Bz = (t) => {
  const i = xp(t), a = async (o, s, c, f) => {
    const p = c ? { ...c, direction: "backward" } : { direction: "backward" };
    return await i(o, s, p, ju(a, f));
  };
  return a;
}, Iz = (t) => {
  const i = xp(t), a = async (o, s, c, f) => await i(o, s, c, ju(a, f));
  return a;
}, Hz = (t) => (i, a, o) => {
  const s = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return yp(t)(i, a, s);
}, Zz = (t) => (i, a, o) => yp(t)(i, a, o), $z = (t) => async (i, a, o) => {
  const s = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return vp(t)(i, a, s);
}, qz = (t) => async (i, a, o) => vp(t)(i, a, o), Vz = /^[cC][0-9a-z]{6,}$/, Yz = /^[0-9a-z]+$/, Gz = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Fz = /^[0-9a-vA-V]{20}$/, Xz = /^[A-Za-z0-9]{27}$/, Qz = /^[a-zA-Z0-9_-]{21}$/;
function Kz(t) {
  return new RegExp(`^[a-zA-Z0-9_-]{${t}}$`);
}
const Pz = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Jz = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ox = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Wz = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, e_ = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function t_() {
  return new RegExp(e_, "u");
}
const n_ = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, i_ = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, r_ = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, a_ = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, l_ = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, o_ = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, s_ = /^https?$/, u_ = /^\+[1-9]\d{6,14}$/, j1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function c_(t) {
  return new RegExp(`^${t}$`);
}
const f_ = /* @__PURE__ */ c_(j1);
function Yd(t) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${i}` : t.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${t.precision}}` : t.seconds ? `${i}:[0-5]\\d(?:\\.\\d+)?` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function d_(t) {
  return new RegExp(`^${Yd(t)}$`);
}
function p_(t) {
  const i = ["Z"];
  t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const a = `${Yd({ precision: t.precision, seconds: !0 })}(?:${i.join("|")})`, o = t.local ? `${a}|${Yd({ precision: t.precision })}` : a;
  return new RegExp(`^${j1}T(?:${o})$`);
}
const h_ = /^[\s\S]{0,}$/, m_ = /^-?\d+(?:\.\d+)?$/, g_ = /^(?:true|false)$/i, b_ = /^[^A-Z]*$/, x_ = /^[^a-z]*$/, yn = /* @__PURE__ */ P("$ZodCheck", (t, i) => {
  var a;
  t._zod ?? (t._zod = {}), t._zod.def = i, (a = t._zod).onattach ?? (a.onattach = []);
}), wp = (t) => {
  const i = t.value;
  return !PS(i) && i.length !== void 0;
}, hu = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, E1 = /* @__PURE__ */ P("$ZodCheckLessThan", (t, i) => {
  yn.init(t, i);
  const a = hu[typeof i.value];
  t._zod.check = (o) => {
    (i.inclusive ? o.value <= i.value : o.value < i.value) || o.issues.push({
      origin: hu[typeof o.value] ?? a,
      code: "too_big",
      maximum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: o.value,
      inclusive: i.inclusive,
      inst: t,
      continue: !i.abort
    });
  };
}), C1 = /* @__PURE__ */ P("$ZodCheckGreaterThan", (t, i) => {
  yn.init(t, i);
  const a = hu[typeof i.value];
  t._zod.check = (o) => {
    (i.inclusive ? o.value >= i.value : o.value > i.value) || o.issues.push({
      origin: hu[typeof o.value] ?? a,
      code: "too_small",
      minimum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: o.value,
      inclusive: i.inclusive,
      inst: t,
      continue: !i.abort
    });
  };
}), y_ = /* @__PURE__ */ P("$ZodCheckMultipleOf", (t, i) => {
  yn.init(t, i), t._zod.check = (a) => {
    if (typeof a.value != typeof i.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof a.value == "bigint" ? (
      // `value % 0n` throws, and nothing is a multiple of zero — the number branch already fails this way via NaN
      i.value !== BigInt(0) && a.value % i.value === BigInt(0)
    ) : JS(a.value, i.value) === 0) || a.issues.push({
      origin: typeof a.value,
      code: "not_multiple_of",
      divisor: i.value,
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), v_ = /* @__PURE__ */ P("$ZodCheckNumberFormat", (t, i) => {
  yn.init(t, i), i.format = i.format || "float64";
  const a = i.format?.includes("int"), o = a ? "int" : "number", [s, c] = y1[i.format];
  t._zod.check = (f) => {
    const p = f.value;
    if (a) {
      if (!Number.isInteger(p)) {
        f.issues.push({
          expected: o,
          format: i.format,
          code: "invalid_type",
          continue: !1,
          input: p,
          inst: t
        });
        return;
      }
      if (!Number.isSafeInteger(p)) {
        p > 0 ? f.issues.push({
          input: p,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: o,
          inclusive: !0,
          continue: !i.abort
        }) : f.issues.push({
          input: p,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: o,
          inclusive: !0,
          continue: !i.abort
        });
        return;
      }
    }
    p < s && f.issues.push({
      origin: "number",
      input: p,
      code: "too_small",
      minimum: s,
      inclusive: !0,
      inst: t,
      continue: !i.abort
    }), p > c && f.issues.push({
      origin: "number",
      input: p,
      code: "too_big",
      maximum: c,
      inclusive: !0,
      inst: t,
      continue: !i.abort
    });
  };
}), w_ = /* @__PURE__ */ P("$ZodCheckMaxLength", (t, i) => {
  var a;
  yn.init(t, i), (a = t._zod.def).when ?? (a.when = wp), t._zod.check = (o) => {
    const s = o.value, c = s.length;
    if ((typeof s == "string" && c > i.maximum ? mp(s) : c) <= i.maximum)
      return;
    const p = gp(s);
    o.issues.push({
      origin: p,
      code: "too_big",
      maximum: i.maximum,
      inclusive: !0,
      input: s,
      inst: t,
      continue: !i.abort
    });
  };
}), k_ = /* @__PURE__ */ P("$ZodCheckMinLength", (t, i) => {
  var a;
  yn.init(t, i), (a = t._zod.def).when ?? (a.when = wp), t._zod.check = (o) => {
    const s = o.value, c = s.length;
    if ((typeof s == "string" && c >= i.minimum && c < i.minimum * 2 ? mp(s) : c) >= i.minimum)
      return;
    const p = gp(s);
    o.issues.push({
      origin: p,
      code: "too_small",
      minimum: i.minimum,
      inclusive: !0,
      input: s,
      inst: t,
      continue: !i.abort
    });
  };
}), S_ = /* @__PURE__ */ P("$ZodCheckLengthEquals", (t, i) => {
  var a;
  yn.init(t, i), (a = t._zod.def).when ?? (a.when = wp), t._zod.check = (o) => {
    const s = o.value, c = s.length, f = typeof s == "string" && c >= i.length && c <= i.length * 2 ? mp(s) : c;
    if (f === i.length)
      return;
    const p = gp(s), m = f > i.length;
    o.issues.push({
      origin: p,
      ...m ? { code: "too_big", maximum: i.length } : { code: "too_small", minimum: i.length },
      inclusive: !0,
      exact: !0,
      input: o.value,
      inst: t,
      continue: !i.abort
    });
  };
}), Eu = /* @__PURE__ */ P("$ZodCheckStringFormat", (t, i) => {
  var a, o;
  yn.init(t, i), i.pattern ? (a = t._zod).check ?? (a.check = (s) => {
    i.pattern.lastIndex = 0, !i.pattern.test(s.value) && s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: i.format,
      input: s.value,
      ...i.pattern ? { pattern: i.pattern.toString() } : {},
      inst: t,
      continue: !i.abort
    });
  }) : (o = t._zod).check ?? (o.check = () => {
  });
}), z_ = /* @__PURE__ */ P("$ZodCheckRegex", (t, i) => {
  Eu.init(t, i), t._zod.check = (a) => {
    i.pattern.lastIndex = 0, !i.pattern.test(a.value) && a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: a.value,
      pattern: i.pattern.toString(),
      inst: t,
      continue: !i.abort
    });
  };
}), __ = /* @__PURE__ */ P("$ZodCheckLowerCase", (t, i) => {
  i.pattern ?? (i.pattern = b_), Eu.init(t, i);
}), j_ = /* @__PURE__ */ P("$ZodCheckUpperCase", (t, i) => {
  i.pattern ?? (i.pattern = x_), Eu.init(t, i);
}), E_ = /* @__PURE__ */ P("$ZodCheckIncludes", (t, i) => {
  yn.init(t, i);
  const a = zu(i.includes), o = new RegExp(typeof i.position == "number" ? `^.{${i.position},}${a}` : a);
  i.pattern = o, t._zod.check = (s) => {
    s.value.includes(i.includes, i.position) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: i.includes,
      input: s.value,
      inst: t,
      continue: !i.abort
    });
  };
}), C_ = /* @__PURE__ */ P("$ZodCheckStartsWith", (t, i) => {
  yn.init(t, i);
  const a = new RegExp(`^${zu(i.prefix)}.*`);
  i.pattern ?? (i.pattern = a), t._zod.check = (o) => {
    o.value.startsWith(i.prefix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: i.prefix,
      input: o.value,
      inst: t,
      continue: !i.abort
    });
  };
}), T_ = /* @__PURE__ */ P("$ZodCheckEndsWith", (t, i) => {
  yn.init(t, i);
  const a = new RegExp(`.*${zu(i.suffix)}$`);
  i.pattern ?? (i.pattern = a), t._zod.check = (o) => {
    o.value.endsWith(i.suffix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: i.suffix,
      input: o.value,
      inst: t,
      continue: !i.abort
    });
  };
}), N_ = /* @__PURE__ */ P("$ZodCheckOverwrite", (t, i) => {
  yn.init(t, i), t._zod.check = (a) => {
    a.value = i.tx(a.value);
  };
});
class A_ {
  constructor(i = [], a = {}) {
    this.content = [], this.indent = 0, this.args = i, this.closed = a;
  }
  // the compiler catches a child's throw and keeps writing into this doc, so the indent has to unwind with it
  indented(i) {
    this.indent += 1;
    try {
      i(this);
    } finally {
      this.indent -= 1;
    }
  }
  write(i) {
    if (typeof i == "function") {
      i(this, { execution: "sync" }), i(this, { execution: "async" });
      return;
    }
    const o = i.split(`
`).filter((f) => f), s = Math.min(...o.map((f) => f.length - f.trimStart().length)), c = o.map((f) => f.slice(s)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of c)
      this.content.push(f);
  }
  compile() {
    const i = Function, a = this?.content ?? [""];
    return new i(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${a.join(`
`)}
};`)(...Object.values(this.closed));
  }
}
const O_ = {
  major: 4,
  minor: 6,
  patch: 7
}, kt = /* @__PURE__ */ P("$ZodType", (t, i) => {
  var a;
  t ?? (t = {}), t._zod.def = i, t._zod.bag = t._zod.bag || {}, t._zod.version = O_;
  const o = t._zod.def.checks, s = t._zod.traits.has("$ZodCheck") ? [t, ...o ?? []] : o?.length ? [...o] : [];
  for (const c of s)
    for (const f of c._zod.onattach)
      f(t);
  if (s.length === 0)
    (a = t._zod).deferred ?? (a.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const c = (p, m, g) => {
      if (p.memo)
        return p;
      let b = $i(p), x;
      for (const w of m) {
        if (w._zod.def.when) {
          if (dz(p) || !w._zod.def.when(p))
            continue;
        } else if (b)
          continue;
        const v = p.issues.length, S = w._zod.check(p);
        if (S instanceof Promise && g?.async === !1)
          throw new na();
        if (x || S instanceof Promise)
          x = (x ?? Promise.resolve()).then(async () => {
            await S, p.issues.length !== v && (Vd(p.issues, v, t), b || (b = $i(p, v)));
          });
        else {
          if (p.issues.length === v)
            continue;
          Vd(p.issues, v, t), b || (b = $i(p, v));
        }
      }
      return x ? x.then(() => p) : p;
    }, f = (p, m, g) => {
      if ($i(p))
        return p.aborted = !0, p;
      const b = c(m, s, g);
      if (b instanceof Promise) {
        if (g.async === !1)
          throw new na();
        return b.then((x) => t._zod.parse(x, g));
      }
      return t._zod.parse(b, g);
    };
    t._zod.run = (p, m) => {
      if (m.skipChecks)
        return t._zod.parse(p, m);
      if (m.direction === "backward") {
        const b = t._zod.parse({ value: p.value, issues: [] }, { ...m, skipChecks: !0 });
        return b instanceof Promise ? b.then((x) => f(x, p, m)) : f(b, p, m);
      }
      const g = t._zod.parse(p, m);
      if (g instanceof Promise) {
        if (m.async === !1)
          throw new na();
        return g.then((b) => c(b, s, m));
      }
      return c(g, s, m);
    };
  }
}, {
  // Wrappers extend this by installing a richer factory over it; reading it eagerly would defeat the laziness.
  get "~standard"() {
    return k1(this, "~standard", N1(this));
  },
  set "~standard"(t) {
    zr(this, "~standard", t);
  }
}), T1 = (t, i) => t.issues.length ? { issues: t.issues.map((a) => al(a, i, jr())) } : { value: t.value };
async function M_(t, i) {
  const a = { async: !0 };
  return T1(await t._zod.run({ value: i, issues: [] }, a), a);
}
function N1(t) {
  return {
    validate: (i) => {
      const a = { async: !1 };
      try {
        const o = t._zod.run({ value: i, issues: [] }, a);
        if (!(o instanceof Promise))
          return T1(o, a);
      } catch {
      }
      return M_(t, i);
    },
    vendor: "zod",
    version: 1
  };
}
const kp = /* @__PURE__ */ P("$ZodString", (t, i) => {
  kt.init(t, i), t._zod.pattern = i.pattern ?? h_, t._zod.parse = (a, o) => {
    if (i.coerce)
      try {
        a.value = String(a.value);
      } catch {
      }
    return typeof a.value == "string" || a.issues.push({
      expected: "string",
      code: "invalid_type",
      input: a.value,
      inst: t
    }), a;
  };
}), ft = /* @__PURE__ */ P("$ZodStringFormat", (t, i) => {
  Eu.init(t, i), kp.init(t, i);
}), D_ = /* @__PURE__ */ P("$ZodGUID", (t, i) => {
  i.pattern ?? (i.pattern = Jz), ft.init(t, i);
}), R_ = /* @__PURE__ */ P("$ZodUUID", (t, i) => {
  if (i.version) {
    const o = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[i.version];
    if (o === void 0)
      throw new Error(`Invalid UUID version: "${i.version}"`);
    i.pattern ?? (i.pattern = Ox(o));
  } else
    i.pattern ?? (i.pattern = Ox());
  ft.init(t, i);
}), L_ = /* @__PURE__ */ P("$ZodEmail", (t, i) => {
  i.pattern ?? (i.pattern = Wz), ft.init(t, i);
}), A1 = 1, mu = 2;
function O1(t) {
  try {
    return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(t) : (new URL(t), !0);
  } catch {
    return !1;
  }
}
function U_(t, i) {
  return !("normalize" in i) && !("hostname" in i) && !("protocol" in i) ? O1(t) || mu : B_(t, i);
}
function B_(t, i) {
  if (!i.normalize && i.protocol?.source === s_.source && !/^https?:\/\//i.test(t))
    return A1;
  try {
    if (typeof URL < "u") {
      const a = URL;
      if (typeof a.parse == "function")
        return a.parse(t) ?? mu;
    }
    return new URL(t);
  } catch {
    return mu;
  }
}
const I_ = /[\t\n\r]/g;
function Mx(t) {
  return t.replace(I_, "");
}
function H_(t, i) {
  return i.lastIndex = 0, i.test(t.hostname);
}
function Z_(t, i) {
  return i.lastIndex = 0, i.test(t.protocol.endsWith(":") ? t.protocol.slice(0, -1) : t.protocol);
}
const $_ = /* @__PURE__ */ P("$ZodURL", (t, i) => {
  ft.init(t, i), t._zod.check = (a) => {
    try {
      const o = a.value.trim(), s = U_(o, i);
      if (s === A1) {
        a.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: a.value,
          inst: t,
          continue: !i.abort
        });
        return;
      }
      if (s === mu) {
        a.issues.push({
          code: "invalid_format",
          format: "url",
          input: a.value,
          inst: t,
          continue: !i.abort
        });
        return;
      }
      if (s === !0) {
        a.value = Mx(o);
        return;
      }
      i.hostname && !H_(s, i.hostname) && a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: i.hostname.source,
        input: a.value,
        inst: t,
        continue: !i.abort
      }), i.protocol && !Z_(s, i.protocol) && a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: i.protocol.source,
        input: a.value,
        inst: t,
        continue: !i.abort
      }), a.value = i.normalize ? s.href : Mx(o);
      return;
    } catch {
      a.issues.push({
        code: "invalid_format",
        format: "url",
        input: a.value,
        inst: t,
        continue: !i.abort
      });
    }
  };
}), q_ = /* @__PURE__ */ P("$ZodEmoji", (t, i) => {
  i.pattern ?? (i.pattern = t_()), ft.init(t, i);
}), V_ = /* @__PURE__ */ P("$ZodNanoID", (t, i) => {
  if (i.length !== void 0 && (!Number.isInteger(i.length) || i.length < 1))
    throw new Error(`Invalid nanoid length: ${i.length}`);
  i.pattern ?? (i.pattern = i.length === void 0 ? Qz : Kz(i.length)), ft.init(t, i);
}), Y_ = /* @__PURE__ */ P("$ZodCUID", (t, i) => {
  i.pattern ?? (i.pattern = Vz), ft.init(t, i);
}), G_ = /* @__PURE__ */ P("$ZodCUID2", (t, i) => {
  i.pattern ?? (i.pattern = Yz), ft.init(t, i);
}), F_ = /* @__PURE__ */ P("$ZodULID", (t, i) => {
  i.pattern ?? (i.pattern = Gz), ft.init(t, i);
}), X_ = /* @__PURE__ */ P("$ZodXID", (t, i) => {
  i.pattern ?? (i.pattern = Fz), ft.init(t, i);
}), Q_ = /* @__PURE__ */ P("$ZodKSUID", (t, i) => {
  i.pattern ?? (i.pattern = Xz), ft.init(t, i);
}), K_ = /* @__PURE__ */ P("$ZodISODateTime", (t, i) => {
  i.pattern ?? (i.pattern = p_(i)), ft.init(t, i);
}), P_ = /* @__PURE__ */ P("$ZodISODate", (t, i) => {
  i.pattern ?? (i.pattern = f_), ft.init(t, i);
}), J_ = /* @__PURE__ */ P("$ZodISOTime", (t, i) => {
  i.pattern ?? (i.pattern = d_(i)), ft.init(t, i);
}), W_ = /* @__PURE__ */ P("$ZodISODuration", (t, i) => {
  i.pattern ?? (i.pattern = Pz), ft.init(t, i);
}), e4 = /* @__PURE__ */ P("$ZodIPv4", (t, i) => {
  i.pattern ?? (i.pattern = n_), ft.init(t, i);
}), t4 = /^[0-9a-fA-F:.]+$/;
function M1(t) {
  return t4.test(t) ? O1(`http://[${t}]`) : !1;
}
const n4 = /* @__PURE__ */ P("$ZodIPv6", (t, i) => {
  i.pattern ?? (i.pattern = i_), ft.init(t, i), t._zod.check = (a) => {
    M1(a.value) || a.issues.push({
      code: "invalid_format",
      format: "ipv6",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), i4 = /* @__PURE__ */ P("$ZodCIDRv4", (t, i) => {
  i.pattern ?? (i.pattern = r_), ft.init(t, i);
});
function r4(t) {
  const i = t.split("/");
  if (i.length !== 2)
    return !1;
  const [a, o] = i;
  if (!o)
    return !1;
  const s = Number(o);
  return `${s}` !== o || s < 0 || s > 128 ? !1 : M1(a);
}
const a4 = /* @__PURE__ */ P("$ZodCIDRv6", (t, i) => {
  i.pattern ?? (i.pattern = a_), ft.init(t, i), t._zod.check = (a) => {
    r4(a.value) || a.issues.push({
      code: "invalid_format",
      format: "cidrv6",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
});
function D1(t) {
  if (t === "")
    return !0;
  if (/\s/.test(t) || t.length % 4 !== 0)
    return !1;
  try {
    return atob(t), !0;
  } catch {
    return !1;
  }
}
const R1 = /^[0-9a-zA-Z+/]*={0,2}$/, l4 = /* @__PURE__ */ P("$ZodBase64", (t, i) => {
  i.pattern ?? (i.pattern = R1), ft.init(t, i), t._zod.check = (a) => {
    D1(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), Sp = /^[A-Za-z0-9_-]*$/;
function o4(t) {
  if (!Sp.test(t))
    return !1;
  const i = t.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), a = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return D1(a);
}
const s4 = /* @__PURE__ */ P("$ZodBase64URL", (t, i) => {
  i.pattern ?? (i.pattern = Sp), ft.init(t, i), t._zod.check = (a) => {
    o4(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), u4 = /* @__PURE__ */ P("$ZodE164", (t, i) => {
  i.pattern ?? (i.pattern = u_), ft.init(t, i);
});
function c4(t, i = null) {
  try {
    const a = t.split(".");
    if (a.length !== 3)
      return !1;
    const [o] = a;
    if (!o)
      return !1;
    const s = JSON.parse(atob(o));
    return !("typ" in s && s?.typ !== "JWT" || !s.alg || i && (!("alg" in s) || s.alg !== i));
  } catch {
    return !1;
  }
}
const f4 = /* @__PURE__ */ P("$ZodJWT", (t, i) => {
  ft.init(t, i), t._zod.check = (a) => {
    c4(a.value, i.alg) || a.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), L1 = /* @__PURE__ */ P("$ZodNumber", (t, i) => {
  kt.init(t, i), t._zod.pattern = m_, t._zod.parse = (a, o) => {
    if (i.coerce)
      try {
        a.value = Number(a.value);
      } catch {
      }
    const s = a.value;
    if (typeof s == "number" && !Number.isNaN(s) && Number.isFinite(s))
      return a;
    const c = typeof s == "number" ? Number.isNaN(s) ? "NaN" : Number.isFinite(s) ? void 0 : String(s) : void 0;
    return a.issues.push({
      expected: "number",
      code: "invalid_type",
      input: s,
      inst: t,
      ...c ? { received: c } : {}
    }), a;
  };
}), d4 = /* @__PURE__ */ P("$ZodNumberFormat", (t, i) => {
  v_.init(t, i), L1.init(t, i);
}), p4 = /* @__PURE__ */ P("$ZodBoolean", (t, i) => {
  kt.init(t, i), t._zod.pattern = g_, t._zod.parse = (a, o) => {
    if (i.coerce)
      try {
        a.value = !!a.value;
      } catch {
      }
    const s = a.value;
    return typeof s == "boolean" || a.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: s,
      inst: t
    }), a;
  };
}), h4 = /* @__PURE__ */ P("$ZodUnknown", (t, i) => {
  kt.init(t, i), t._zod.parse = (a) => a;
}), m4 = /* @__PURE__ */ P("$ZodNever", (t, i) => {
  kt.init(t, i), t._zod.parse = (a, o) => (a.issues.push({
    expected: "never",
    code: "invalid_type",
    input: a.value,
    inst: t
  }), a);
});
function g4(t, i) {
  const a = Cx(t._zod.def.checks);
  if (!a.length)
    return;
  const o = Math.min(...a.map((c) => c[0])), s = t._zod.parse;
  t._zod.parse = (c, f) => {
    const p = i(c.value);
    if (p > o && !f?.skipChecks && f?.direction !== "backward") {
      for (const [m, g] of Cx(t._zod.def.checks))
        if (p > m && g._zod.def.when(c)) {
          const b = c.issues.length;
          return g._zod.check(c), c.issues[b].continue = !1, Vd(c.issues, b, t), c;
        }
    }
    return s(c, f);
  };
}
const b4 = (t) => Array.isArray(t) ? t.length : -1;
function Dx(t, i, a) {
  t.issues.length && i.issues.push(...w1(a, t.issues)), i.value[a] = t.value;
}
const x4 = /* @__PURE__ */ P("$ZodArray", (t, i) => {
  kt.init(t, i);
  const a = wi.memoizer;
  a?.attach(t), t._zod.parse = (o, s) => {
    const c = o.value;
    if (!Array.isArray(c))
      return o.issues.push({
        expected: "array",
        code: "invalid_type",
        input: c,
        inst: t
      }), o;
    o.value = a ? a.alloc(t, o, Array(c.length), s) : Array(c.length);
    const f = [], p = s?.abortEarly;
    for (let m = 0; m < c.length; m++) {
      const g = c[m], b = i.element._zod.run({
        value: g,
        issues: []
      }, s);
      if (b instanceof Promise)
        f.push(b.then((x) => Dx(x, o, m)));
      else if (Dx(b, o, m), p && b.issues.length !== 0 && $i(b))
        break;
    }
    return f.length ? Promise.all(f).then(() => o) : o;
  }, g4(t, b4);
});
function gu(t, i, a, o, s, c) {
  const f = a in o, p = c === "optional";
  if (!(!f && p && s === "optional")) {
    if (t.issues.length) {
      if (s !== void 0 && p && !f)
        return;
      i.issues.push(...w1(a, t.issues));
    }
    if (!f && s === void 0) {
      t.issues.length || i.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: void 0,
        path: [a]
      });
      return;
    }
    t.value === void 0 ? (f || s === "defaulted" && !p) && (i.value[a] = void 0) : i.value[a] = t.value;
  }
}
const y4 = [];
function U1(t) {
  const i = Object.keys(t.shape), a = Object.getOwnPropertySymbols(t.shape), o = a.length ? a : y4, s = o.length ? [...i, ...o] : i;
  for (const f of s)
    if (!t.shape?.[f]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${String(f)}": expected a Zod schema`);
  const c = rz(t.shape);
  return {
    ...t,
    allKeys: s,
    symbolKeys: o,
    // string-only: handleCatchall matches it against `for...in`, which never yields a symbol
    keySet: new Set(i),
    numKeys: i.length,
    optionalKeys: new Set(c)
  };
}
function B1(t, i, a, o, s, c, f) {
  const p = [], m = s.keySet, g = s.catchall._zod, b = g.def.type, x = g.optin, w = g.optout;
  let v = 0;
  for (const S in i) {
    if (f && a.issues.length !== v) {
      if ($i(a, v))
        break;
      v = a.issues.length;
    }
    if (m.has(S))
      continue;
    if (S === "__proto__") {
      b === "never" && p.push(S);
      continue;
    }
    if (b === "never") {
      p.push(S);
      continue;
    }
    const E = g.run({ value: i[S], issues: [] }, o);
    E instanceof Promise ? t.push(E.then((j) => gu(j, a, S, i, x, w))) : gu(E, a, S, i, x, w);
  }
  return p.length && a.issues.push({
    code: "unrecognized_keys",
    keys: p,
    input: i,
    inst: c,
    // Describes the shape of the input, not the validity of the parsed value, so it never aborts. The parse still fails; the schema's own checks just get to run first, and an enclosing intersection can reconcile the key against a sibling operand.
    continue: !0
  }), t.length ? Promise.all(t).then(() => a) : a;
}
const v4 = /* @__PURE__ */ P("$ZodObject", (t, i) => {
  kt.init(t, i);
  const a = Object.getOwnPropertyDescriptor(i, "shape"), o = a?.get ? a.get.raw : i.shape ?? {};
  if (o) {
    const g = () => {
      const b = { ...o };
      return Object.defineProperty(i, "shape", { value: b }), g.raw = b, b;
    };
    g.raw = o, Object.defineProperty(i, "shape", { get: g });
  }
  const s = pp(() => U1(i));
  et(t, "propValues", (g) => {
    const b = g.def.shape, x = {};
    for (const w in b) {
      const v = b[w]._zod;
      if (v.values) {
        Object.prototype.hasOwnProperty.call(x, w) || oa(x, w, /* @__PURE__ */ new Set());
        for (const S of v.values)
          x[w].add(S);
        v.optin !== void 0 && x[w].add(void 0);
      }
    }
    return x;
  });
  const c = pu, f = i.catchall;
  let p;
  const m = wi.memoizer;
  m?.attach(t), t._zod.parse = (g, b) => {
    p ?? (p = s.value);
    const x = g.value;
    if (!c(x))
      return g.issues.push({
        expected: "object",
        code: "invalid_type",
        input: x,
        inst: t
      }), g;
    g.value = m ? m.alloc(t, g, {}, b) : {};
    const w = [], v = p.shape, S = b?.abortEarly;
    let E = g.issues.length;
    for (const j of p.allKeys) {
      if (S && g.issues.length !== E) {
        if ($i(g, E))
          break;
        E = g.issues.length;
      }
      if (j === "__proto__")
        continue;
      const N = v[j], U = N._zod.optin, R = N._zod.optout, G = N._zod.run({ value: x[j], issues: [] }, b);
      G instanceof Promise ? w.push(G.then((K) => gu(K, g, j, x, U, R))) : gu(G, g, j, x, U, R);
    }
    return f ? B1(w, x, g, b, s.value, t, S === !0) : w.length ? Promise.all(w).then(() => g) : g;
  };
}), w4 = /* @__PURE__ */ P("$ZodObjectJIT", (t, i) => {
  v4.init(t, i);
  const a = t._zod.parse, o = pp(() => U1(i)), s = wi.memoizer, c = (v) => {
    const S = o.value, E = S.symbolKeys, j = new A_(["payload", "ctx"], { shape: v, inst: t, memo: s, syms: E }), N = (K) => `shape[${K}]._zod.run({ value: input[${K}], issues: [] }, ctx)`, U = (K, A) => `
          let ${K}_ab = false;
          for (let i = 0; i < ${K}.issues.length; i++) {
            const iss = ${K}.issues[i];
            iss.path = iss.path ? [${A}, ...iss.path] : [${A}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${K}_ab = true;
          }
          if (${K}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
    j.write("const input = payload.value;");
    const R = /* @__PURE__ */ Object.create(null);
    let G = 0;
    for (const K of S.allKeys)
      R[K] = `key_${G++}`;
    j.write(s ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
    for (const K of S.allKeys) {
      if (K === "__proto__")
        continue;
      const A = R[K], V = typeof K == "symbol" ? `syms[${E.indexOf(K)}]` : ez(K), ie = `${V} in input`, ze = v[K], I = ze?._zod?.optin, te = I !== void 0, re = ze?._zod?.optout === "optional";
      if (j.write(`const ${A} = ${N(V)};`), te && re) {
        const Ae = I === "optional" ? `${A}_present` : `${A}.value !== undefined || ${A}_present`;
        j.write(`
        const ${A}_present = ${ie};
        if (!${A}.issues.length || ${A}_present) {
          if (${A}.issues.length) {${U(A, V)}
          }

          if (${Ae}) {
            newResult[${V}] = ${A}.value;
          }
        }

      `);
      } else te ? (j.write(`
        if (${A}.issues.length) {${U(A, V)}
        }
      `), I === "defaulted" ? j.write(`newResult[${V}] = ${A}.value;`) : j.write(`
        if (${A}.value !== undefined || ${ie}) {
          newResult[${V}] = ${A}.value;
        }
      `)) : j.write(`
        const ${A}_present = ${ie};
        if (${A}.issues.length) {${U(A, V)}
        }
        if (!${A}_present && !${A}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${V}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${A}_present) {
          newResult[${V}] = ${A}.value;
        }

      `);
    }
    return j.write("payload.value = newResult;"), j.write("return payload;"), j.compile();
  };
  let f;
  const p = pu, m = !wi.jitless, b = m && nz.value, x = i.catchall;
  let w;
  t._zod.parse = (v, S) => {
    w ?? (w = o.value);
    const E = v.value;
    return p(E) ? m && b && S?.async === !1 && S.jitless !== !0 ? (f || (f = c(i.shape)), v = f(v, S), x ? B1([], E, v, S, w, t, S?.abortEarly === !0) : v) : a(v, S) : (v.issues.push({
      expected: "object",
      code: "invalid_type",
      input: E,
      inst: t
    }), v);
  };
});
function Rx(t, i, a, o) {
  for (const c of t)
    if (c.issues.length === 0)
      return i.value = c.value, i;
  const s = t.filter((c) => !$i(c));
  return s.length === 1 ? (i.value = s[0].value, s[0]) : (i.issues.push({
    code: "invalid_union",
    input: i.value,
    inst: a,
    errors: t.map((c) => c.issues.map((f) => al(f, o, jr())))
  }), i);
}
const k4 = /* @__PURE__ */ P("$ZodUnion", (t, i) => {
  kt.init(t, i), et(t, "optin", (o) => o.def.options.some((s) => s._zod.optin === "defaulted") ? "defaulted" : o.def.options.some((s) => s._zod.optin !== void 0) ? "optional" : void 0), et(t, "optout", (o) => o.def.options.some((s) => s._zod.optout === "optional") ? "optional" : void 0), et(t, "values", (o) => {
    if (o.def.options.every((s) => s._zod.values))
      return new Set(o.def.options.flatMap((s) => Array.from(s._zod.values)));
  }), et(t, "pattern", (o) => {
    if (o.def.options.every((s) => s._zod.pattern)) {
      const s = o.def.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${s.map((c) => hp(c.source)).join("|")})$`);
    }
  });
  const a = i.options.length === 1 ? i.options[0]._zod.run : null;
  t._zod.parse = (o, s) => {
    if (a)
      return a(o, s);
    let c = !1;
    const f = [];
    for (const p of i.options) {
      const m = p._zod.run({
        value: o.value,
        issues: []
      }, s);
      if (m instanceof Promise)
        f.push(m), c = !0;
      else {
        if (m.issues.length === 0)
          return m;
        f.push(m);
      }
    }
    return c ? Promise.all(f).then((p) => Rx(p, o, t, s)) : Rx(f, o, t, s);
  };
}), S4 = /* @__PURE__ */ P("$ZodIntersection", (t, i) => {
  kt.init(t, i), t._zod.parse = (a, o) => {
    const s = a.value, c = i.left._zod.run({ value: s, issues: [] }, o), f = i.right._zod.run({ value: s, issues: [] }, o);
    return c instanceof Promise || f instanceof Promise ? Promise.all([c, f]).then(([m, g]) => Lx(a, m, g)) : Lx(a, c, f);
  };
});
function Gd(t, i) {
  if (t === i)
    return { valid: !0, data: t };
  if (t instanceof Date && i instanceof Date && +t == +i)
    return { valid: !0, data: t };
  if (wo(t) && wo(i)) {
    const a = Object.keys(i), o = Object.keys(t).filter((c) => a.indexOf(c) !== -1), s = { ...t, ...i };
    Object.prototype.hasOwnProperty.call(s, "__proto__") && delete s.__proto__;
    for (const c of o) {
      if (c === "__proto__")
        continue;
      const f = Gd(t[c], i[c]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [c, ...f.mergeErrorPath]
        };
      s[c] = f.data;
    }
    return { valid: !0, data: s };
  }
  if (Array.isArray(t) && Array.isArray(i)) {
    if (t.length !== i.length)
      return { valid: !1, mergeErrorPath: [] };
    const a = [];
    for (let o = 0; o < t.length; o++) {
      const s = t[o], c = i[o], f = Gd(s, c);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...f.mergeErrorPath]
        };
      a.push(f.data);
    }
    return { valid: !0, data: a };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Lx(t, i, a) {
  const o = /* @__PURE__ */ new Map();
  let s;
  const c = /* @__PURE__ */ new Map(), f = (g, b) => {
    let x;
    if (g.code === "unrecognized_keys" && !g.path?.length)
      s ?? (s = g), x = g.keys;
    else if (g.code === "invalid_key" && g.origin === "record" && g.path?.length === 1) {
      const w = String(g.path[0]);
      c.has(w) || c.set(w, g), x = [w];
    } else
      return !1;
    for (const w of x)
      o.has(w) || o.set(w, {}), o.get(w)[b] = !0;
    return !0;
  };
  for (const g of i.issues)
    f(g, "l") || t.issues.push(g);
  for (const g of a.issues)
    f(g, "r") || t.issues.push(g);
  const p = [...o].filter(([, g]) => g.l && g.r).map(([g]) => g);
  if (p.length) {
    const g = s ? p.filter((b) => s.keys.includes(b)) : [];
    g.length && t.issues.push({ ...s, keys: g });
    for (const b of p)
      !g.includes(b) && c.has(b) && t.issues.push(c.get(b));
  }
  const m = Gd(i.value, a.value);
  if (!m.valid) {
    if ($i(t))
      return t;
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(m.mergeErrorPath)}`);
  }
  return t.value = m.data, t;
}
const z4 = /* @__PURE__ */ P("$ZodEnum", (t, i) => {
  kt.init(t, i);
  const a = $d(i.entries), o = new Set(a);
  t._zod.values = o, et(t, "pattern", (s) => {
    const c = $d(s.def.entries).filter((f) => iz.has(typeof f));
    return new RegExp(c.length ? `^(${c.map((f) => zu(f.toString())).join("|")})$` : "^[^\\s\\S]$");
  }), t._zod.parse = (s, c) => {
    const f = s.value;
    return o.has(f) || s.issues.push({
      code: "invalid_value",
      values: a,
      input: f,
      inst: t
    }), s;
  };
}), _4 = /* @__PURE__ */ P("$ZodTransform", (t, i) => {
  kt.init(t, i), t._zod.optin = "optional", wi.memoizer?.guard(t), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      throw new z1(t.constructor.name);
    const s = i.transform(a.value, a);
    if (o.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((f) => (a.value = f, a));
    if (s instanceof Promise)
      throw new na();
    return a.value = s, a;
  };
});
function Ux(t, i) {
  return t.value = i.issues.length ? void 0 : i.value, t;
}
const I1 = /* @__PURE__ */ P("$ZodOptional", (t, i) => {
  kt.init(t, i), et(t, "optin", (a) => a.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), t._zod.optout = "optional", et(t, "values", (a) => {
    const o = a.def.innerType._zod.values;
    return o ? /* @__PURE__ */ new Set([...o, void 0]) : void 0;
  }), et(t, "pattern", (a) => {
    const o = a.def.innerType._zod.pattern;
    return o ? new RegExp(`^(${hp(o.source)})?$`) : void 0;
  }), t._zod.parse = (a, o) => {
    if (a.value === void 0) {
      if (i.innerType._zod.optin !== "defaulted")
        return a;
      const s = i.innerType._zod.run({ value: a.value, issues: [] }, o);
      return s instanceof Promise ? s.then((c) => Ux(a, c)) : Ux(a, s);
    }
    return i.innerType._zod.run(a, o);
  };
}), j4 = /* @__PURE__ */ P("$ZodExactOptional", (t, i) => {
  I1.init(t, i), et(t, "values", (a) => a.def.innerType._zod.values), et(t, "pattern", (a) => a.def.innerType._zod.pattern), t._zod.parse = (a, o) => i.innerType._zod.run(a, o);
}), E4 = /* @__PURE__ */ P("$ZodNullable", (t, i) => {
  kt.init(t, i), et(t, "optin", (a) => a.def.innerType._zod.optin), et(t, "optout", (a) => a.def.innerType._zod.optout), et(t, "pattern", (a) => {
    const o = a.def.innerType._zod.pattern;
    return o ? new RegExp(`^(${hp(o.source)}|null)$`) : void 0;
  }), et(t, "values", (a) => a.def.innerType._zod.values ? /* @__PURE__ */ new Set([...a.def.innerType._zod.values, null]) : void 0), t._zod.parse = (a, o) => a.value === null ? a : i.innerType._zod.run(a, o);
}), C4 = /* @__PURE__ */ P("$ZodDefault", (t, i) => {
  kt.init(t, i), t._zod.optin = "defaulted", et(t, "values", (a) => a.def.innerType._zod.values), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(a, o);
    if (a.value === void 0)
      return a.value = i.defaultValue, a;
    const s = i.innerType._zod.run(a, o);
    return s instanceof Promise ? s.then((c) => Bx(c, i)) : Bx(s, i);
  };
});
function Bx(t, i) {
  return t.value === void 0 && (t.value = i.defaultValue), t;
}
const T4 = /* @__PURE__ */ P("$ZodPrefault", (t, i) => {
  kt.init(t, i), t._zod.optin = "defaulted", et(t, "values", (a) => a.def.innerType._zod.values), t._zod.parse = (a, o) => (o.direction === "backward" || a.value === void 0 && (a.value = i.defaultValue), i.innerType._zod.run(a, o));
}), N4 = /* @__PURE__ */ P("$ZodNonOptional", (t, i) => {
  kt.init(t, i), et(t, "values", (a) => {
    const o = a.def.innerType._zod.values;
    return o ? new Set([...o].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (a, o) => {
    const s = i.innerType._zod.run(a, o);
    return s instanceof Promise ? s.then((c) => Ix(c, t)) : Ix(s, t);
  };
});
function Ix(t, i) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: i
  }), t;
}
function Hx(t, i, a, o) {
  return i.issues.length ? (t.value = a.catchValue({
    ...i,
    value: t.value,
    error: {
      issues: i.issues.map((s) => al(s, o, jr()))
    },
    input: t.value
  }), t) : (t.value = i.value, i.memo && (t.memo = !0), t);
}
const A4 = /* @__PURE__ */ P("$ZodCatch", (t, i) => {
  kt.init(t, i), et(t, "optin", (a) => a.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), et(t, "optout", (a) => a.def.innerType._zod.optout), et(t, "values", (a) => a.def.innerType._zod.values), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(a, o);
    const s = i.innerType._zod.run({ value: a.value, issues: [] }, o);
    return s instanceof Promise ? s.then((c) => Hx(a, c, i, o)) : Hx(a, s, i, o);
  };
}), O4 = /* @__PURE__ */ P("$ZodPipe", (t, i) => {
  kt.init(t, i), et(t, "values", (a) => a.def.in._zod.values), et(t, "optin", (a) => a.def.in._zod.optin), et(t, "optout", (a) => a.def.out._zod.optout), et(t, "propValues", (a) => a.def.in._zod.propValues), t._zod.parse = (a, o) => {
    if (o.direction === "backward") {
      const c = i.out._zod.run(a, o);
      return c instanceof Promise ? c.then((f) => Ps(f, i.in, o)) : Ps(c, i.in, o);
    }
    const s = i.in._zod.run(a, o);
    return s instanceof Promise ? s.then((c) => Ps(c, i.out, o)) : Ps(s, i.out, o);
  };
});
function Ps(t, i, a) {
  return t.issues.some((o) => o.code !== "unrecognized_keys") ? (t.aborted = !0, t) : i._zod.run({ value: t.value, issues: t.issues }, a);
}
const M4 = /* @__PURE__ */ P("$ZodReadonly", (t, i) => {
  kt.init(t, i), et(t, "propValues", (a) => a.def.innerType._zod.propValues), et(t, "values", (a) => a.def.innerType._zod.values), et(t, "optin", (a) => a.def.innerType?._zod?.optin), et(t, "optout", (a) => a.def.innerType?._zod?.optout), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(a, o);
    const s = i.innerType._zod.run(a, o);
    return s instanceof Promise ? s.then(Zx) : Zx(s);
  };
});
function Zx(t) {
  return t.memo || (t.value = Object.freeze(t.value)), t;
}
const D4 = /* @__PURE__ */ P("$ZodCustom", (t, i) => {
  yn.init(t, i), kt.init(t, i), t._zod.parse = (a, o) => a, t._zod.check = (a) => {
    const o = a.value, s = i.fn(o);
    if (s instanceof Promise)
      return s.then((c) => $x(c, a, o, t));
    $x(s, a, o, t);
  };
});
function $x(t, i, a, o) {
  if (!t) {
    const s = {
      code: "custom",
      input: a,
      inst: o,
      // incorporates params.error into issue reporting
      path: [...o._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !o._zod.def.abort
      // params: inst._zod.def.params,
    };
    o._zod.def.params && (s.params = o._zod.def.params), i.issues.push(ko(s));
  }
}
class R4 extends Error {
  constructor() {
    super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
  }
}
const Fd = "~memo", qx = [];
function H1(t) {
  return t !== null && typeof t == "object";
}
function xd(t) {
  return t.map((i) => i.path ? { ...i, path: i.path.slice() } : { ...i });
}
const Z1 = /* @__PURE__ */ new WeakMap(), fo = 0, su = 1, ho = 2;
function uu(t, i, a) {
  const o = Z1.get(t);
  if (o !== void 0)
    return o ? ho : fo;
  if (i.has(t))
    return ho;
  i.add(t);
  let s = fo;
  const c = (b) => {
    if (s !== ho && b?._zod) {
      const x = uu(b, i);
      x > s && (s = x);
    }
  }, f = (b, x) => {
    let w = fo;
    for (const v of Reflect.ownKeys(b)) {
      const S = Object.getOwnPropertyDescriptor(b, v);
      if (!S.enumerable)
        continue;
      const E = S.get ? su : S.value?._zod ? uu(S.value, i) : fo;
      E > w && (w = E);
    }
    return w;
  }, p = (b) => {
    b > s && (s = b);
  }, m = t._zod.def;
  switch (m.type) {
    case "object": {
      const b = p1(m);
      p(b ? f(b) : su), c(m.catchall);
      break;
    }
    case "array":
      c(m.element);
      break;
    case "tuple":
      for (const b of m.items)
        c(b);
      c(m.rest);
      break;
    case "record":
    case "map":
      c(m.keyType), c(m.valueType);
      break;
    case "set":
      c(m.valueType);
      break;
    case "union":
      for (const b of m.options)
        c(b);
      break;
    case "intersection":
      c(m.left), c(m.right);
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      c(m.innerType);
      break;
    case "pipe":
      c(m.in), c(m.out);
      break;
    case "function":
      c(m.input), c(m.output);
      break;
    // `$ZodLazy` caches its inner on the def, so a resolved edge is followed exactly
    case "lazy": {
      const b = m._cachedInner ?? void 0;
      p(b ? uu(b, i) : su);
      break;
    }
    // a leaf by choice: `parts` are regex fragments, not data positions
    case "template_literal":
    // leaves
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default:
      for (const b in m) {
        const x = Object.getOwnPropertyDescriptor(m, b);
        if (!x || x.get)
          continue;
        const w = x.value;
        if (!(!w || typeof w != "object")) {
          if (w._zod)
            c(w);
          else if (Array.isArray(w))
            for (const v of w)
              c(v);
        }
      }
  }
  return i.delete(t), L4(t, s);
}
function L4(t, i) {
  return i !== su && Z1.set(t, i === ho), i;
}
function U4(t, i) {
  let a = t.buckets.get(i);
  return a || (a = /* @__PURE__ */ new WeakMap(), t.buckets.set(i, a)), a;
}
let Js;
const Ws = [], B4 = {
  alloc(t, i, a) {
    const o = Js;
    if (!o)
      return a;
    Js = void 0;
    const s = { value: a, issues: null };
    return o.set(i.value, s), Ws.push(s), a;
  },
  guard(t) {
    var i;
    (i = t._zod).deferred ?? (i.deferred = []), t._zod.deferred.push(() => {
      const a = t._zod.parse, o = (s, c) => {
        if (c.direction !== "backward" && H4(c, s.value))
          throw new R4();
        return a(s, c);
      };
      t._zod.parse = o, t._zod.run === a && (t._zod.run = o);
    });
  },
  attach(t) {
    var i;
    let a, o = !1, s, c;
    (i = t._zod).deferred ?? (i.deferred = []), t._zod.deferred.push(() => {
      const f = t._zod.parse, p = (m, g) => {
        if (a === void 0) {
          const N = uu(t, /* @__PURE__ */ new Set());
          if (N === fo)
            return t._zod.parse = f, t._zod.run === p && (t._zod.run = f), f(m, g);
          N === ho || o ? a = !0 : o = !0;
        }
        const b = m.value;
        if (!H1(b))
          return f(m, g);
        let x = g[Fd];
        x || (x = { buckets: /* @__PURE__ */ new WeakMap(), backEdges: void 0 }, g[Fd] = x);
        let w;
        s === g ? w = c : (w = U4(x, t), s = g, c = w);
        const v = w.get(b);
        if (v)
          return m.value = v.value, v.issues ? v.issues.length && m.issues.push(...xd(v.issues)) : (m.memo = !0, x.backEdges ?? (x.backEdges = /* @__PURE__ */ new WeakSet()), x.backEdges.add(v.value)), m;
        Js = w;
        const S = Ws.length, E = f(m, g);
        Js = void 0;
        const j = Ws.length > S ? Ws.pop() : void 0;
        return E instanceof Promise ? E.then((N) => (j && (j.issues = N.issues.length ? xd(N.issues) : qx), N)) : (j && (j.issues = E.issues.length ? xd(E.issues) : qx), E);
      };
      t._zod.parse = p, t._zod.run === f && (t._zod.run = p);
    });
  }
};
function I4() {
  return B4;
}
function H4(t, i) {
  const a = t[Fd]?.backEdges;
  return a !== void 0 && H1(i) && a.has(i);
}
const Z4 = () => {
  const t = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function i(c) {
    return t[c] ?? null;
  }
  const a = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    currency_code: "currency code",
    credit_card: "credit card number",
    iban: "IBAN",
    jwt: "JWT",
    template_literal: "input"
  }, o = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  function s(c, f) {
    return c === "number" && typeof f == "number" && !Number.isFinite(f) ? String(f) : o[c] ?? c;
  }
  return (c) => {
    switch (c.code) {
      case "invalid_type": {
        const f = s(c.expected), p = hz(c.input), m = s(p, c.input);
        return `Invalid input: expected ${f}, received ${m}`;
      }
      case "invalid_value":
        return c.values.length === 1 ? `Invalid input: expected ${x1(c.values[0])}` : `Invalid option: expected one of ${jx(c.values, "|")}`;
      case "too_big": {
        const f = c.exact ? "exactly " : c.inclusive ? "<=" : "<", p = i(c.origin);
        return p ? `Too big: expected ${c.origin ?? "value"} to have ${f}${c.maximum.toString()} ${p.unit ?? "elements"}` : `Too big: expected ${c.origin ?? "value"} to be ${f}${c.maximum.toString()}`;
      }
      case "too_small": {
        const f = c.exact ? "exactly " : c.inclusive ? ">=" : ">", p = i(c.origin);
        return p ? `Too small: expected ${c.origin} to have ${f}${c.minimum.toString()} ${p.unit}` : `Too small: expected ${c.origin} to be ${f}${c.minimum.toString()}`;
      }
      case "invalid_format": {
        const f = c;
        return f.format === "starts_with" ? `Invalid string: must start with "${f.prefix}"` : f.format === "ends_with" ? `Invalid string: must end with "${f.suffix}"` : f.format === "includes" ? `Invalid string: must include "${f.includes}"` : f.format === "regex" ? `Invalid string: must match pattern ${f.pattern}` : `Invalid ${a[f.format] ?? c.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${c.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${c.keys.length > 1 ? "s" : ""}: ${jx(c.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${c.origin}`;
      case "invalid_union":
        return c.options && Array.isArray(c.options) && c.options.length > 0 ? `Invalid discriminator value. Expected ${c.options.map((p) => `'${p}'`).join(" | ")}` : c.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
      case "invalid_element":
        return `Invalid value in ${c.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function $4() {
  return {
    localeError: Z4()
  };
}
var Vx;
class q4 {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(i, ...a) {
    const o = a[0];
    return this._map.set(i, o), o && typeof o == "object" && "id" in o && this._idmap.set(o.id, i), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(i) {
    const a = this._map.get(i);
    return a && typeof a == "object" && "id" in a && this._idmap.delete(a.id), this._map.delete(i), this;
  }
  get(i) {
    const a = i._zod.parent;
    if (a) {
      const o = { ...this.get(a) ?? {} };
      delete o.id;
      const s = { ...o, ...this._map.get(i) };
      return Object.keys(s).length ? s : void 0;
    }
    return this._map.get(i);
  }
  has(i) {
    return this._map.has(i);
  }
}
function V4() {
  return new q4();
}
(Vx = globalThis).__zod_globalRegistry ?? (Vx.__zod_globalRegistry = V4());
const po = globalThis.__zod_globalRegistry;
function $1(t) {
  return t.checks && (t.checks = [...t.checks]), t;
}
// @__NO_SIDE_EFFECTS__
function Y4(t, i) {
  return new t($1({ type: "string", ...ke(i) }));
}
// @__NO_SIDE_EFFECTS__
function G4(t, i) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function F4(t, i) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function X4(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Q4(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function K4(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function P4(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function J4(t, i) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function W4(t, i) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function ej(t, i) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function tj(t, i) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function nj(t, i) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function ij(t, i) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function rj(t, i) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function aj(t, i) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function lj(t, i) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function oj(t, i) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function sj(t, i) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function uj(t, i) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function cj(t, i) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function fj(t, i) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function dj(t, i) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function pj(t, i) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function hj(t, i) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function mj(t, i) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function gj(t, i) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function bj(t, i) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function xj(t, i) {
  return new t($1({ type: "number", checks: [], ...ke(i) }));
}
// @__NO_SIDE_EFFECTS__
function yj(t, i) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function vj(t, i) {
  return new t({
    type: "boolean",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function wj(t) {
  return new t({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function kj(t, i) {
  return new t({
    type: "never",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Yx(t, i) {
  return new E1({
    check: "less_than",
    ...ke(i),
    value: t,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function yd(t, i) {
  return new E1({
    check: "less_than",
    ...ke(i),
    value: t,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Gx(t, i) {
  return new C1({
    check: "greater_than",
    ...ke(i),
    value: t,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function vd(t, i) {
  return new C1({
    check: "greater_than",
    ...ke(i),
    value: t,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Fx(t, i) {
  return new y_({
    check: "multiple_of",
    ...ke(i),
    value: t
  });
}
// @__NO_SIDE_EFFECTS__
function q1(t, i) {
  return new w_({
    check: "max_length",
    ...ke(i),
    maximum: t
  });
}
// @__NO_SIDE_EFFECTS__
function bu(t, i) {
  return new k_({
    check: "min_length",
    ...ke(i),
    minimum: t
  });
}
// @__NO_SIDE_EFFECTS__
function V1(t, i) {
  return new S_({
    check: "length_equals",
    ...ke(i),
    length: t
  });
}
// @__NO_SIDE_EFFECTS__
function Sj(t, i) {
  return new z_({
    check: "string_format",
    format: "regex",
    ...ke(i),
    pattern: t
  });
}
// @__NO_SIDE_EFFECTS__
function zj(t) {
  return new __({
    check: "string_format",
    format: "lowercase",
    ...ke(t)
  });
}
// @__NO_SIDE_EFFECTS__
function _j(t) {
  return new j_({
    check: "string_format",
    format: "uppercase",
    ...ke(t)
  });
}
// @__NO_SIDE_EFFECTS__
function jj(t, i) {
  return new E_({
    check: "string_format",
    format: "includes",
    ...ke(i),
    includes: t
  });
}
// @__NO_SIDE_EFFECTS__
function Ej(t, i) {
  return new C_({
    check: "string_format",
    format: "starts_with",
    ...ke(i),
    prefix: t
  });
}
// @__NO_SIDE_EFFECTS__
function Cj(t, i) {
  return new T_({
    check: "string_format",
    format: "ends_with",
    ...ke(i),
    suffix: t
  });
}
// @__NO_SIDE_EFFECTS__
function ll(t) {
  return new N_({
    check: "overwrite",
    tx: t
  });
}
// @__NO_SIDE_EFFECTS__
function Tj(t) {
  return /* @__PURE__ */ ll((i) => i.normalize(t));
}
// @__NO_SIDE_EFFECTS__
function Nj() {
  return /* @__PURE__ */ ll((t) => t.trim());
}
// @__NO_SIDE_EFFECTS__
function Aj() {
  return /* @__PURE__ */ ll((t) => t.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Oj() {
  return /* @__PURE__ */ ll((t) => t.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Mj() {
  return /* @__PURE__ */ ll((t) => tz(t));
}
// @__NO_SIDE_EFFECTS__
function Dj(t, i, a) {
  return new t({
    type: "array",
    element: i,
    // get element() {
    //   return element;
    // },
    ...ke(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Rj(t, i, a) {
  return new t({
    type: "custom",
    check: "custom",
    fn: i,
    ...ke(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Lj(t, i) {
  const a = /* @__PURE__ */ Uj((o) => (o.addIssue = (s) => {
    if (typeof s == "string")
      o.issues.push(ko(s, o.value, a._zod.def));
    else {
      const c = s;
      c.fatal && (c.continue = !1), c.code ?? (c.code = "custom"), "input" in c || (c.input = o.value), c.inst ?? (c.inst = a), c.continue ?? (c.continue = !a._zod.def.abort), o.issues.push(ko(c));
    }
  }, t(o.value, o)), i);
  return a;
}
// @__NO_SIDE_EFFECTS__
function Uj(t, i) {
  const a = new yn({
    check: "custom",
    ...ke(i)
  });
  return a._zod.check = t, a;
}
function mo(t, ...i) {
  for (const a of i)
    for (const o of Reflect.ownKeys(a))
      Object.prototype.propertyIsEnumerable.call(a, o) && oa(t, o, a[o]);
  return t;
}
function Y1(t) {
  let i = t?.target ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), {
    processors: t.processors ?? {},
    metadataRegistry: t?.metadata ?? po,
    target: i,
    unrepresentable: t?.unrepresentable ?? "throw",
    override: t?.override ?? (() => {
    }),
    io: t?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: t?.cycles ?? "ref",
    reused: t?.reused ?? "inline",
    intersections: [],
    deferred: [],
    external: t?.external ?? void 0
  };
}
function ol(t, i, a, o, s) {
  const c = typeof i.unrepresentable == "function" ? i.unrepresentable({ zodSchema: t, path: o.path, message: s }) : i.unrepresentable;
  if (c === "any")
    return !1;
  if (c === void 0 || c === "throw")
    throw new Error(s);
  return Object.assign(a, c), !0;
}
function Qt(t, i, a = { path: [], schemaPath: [] }) {
  var o;
  const s = t._zod.def, c = i.seen.get(t);
  if (c)
    return c.count++, a.schemaPath.includes(t) && (c.cycle = a.path), c.schema;
  const f = { schema: {}, count: 1, cycle: void 0, path: a.path };
  i.seen.set(t, f), i.sharedDefsExtractedFor = void 0, i.sharedEmitDoneFor = void 0;
  const p = t._zod.toJSONSchema?.();
  if (p)
    f.schema = p;
  else {
    const b = {
      ...a,
      schemaPath: [...a.schemaPath, t],
      path: a.path
    };
    if (t._zod.processJSONSchema)
      t._zod.processJSONSchema(i, f.schema, b);
    else {
      const w = f.schema, v = i.processors[s.type];
      if (!v)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
      v(t, i, w, b);
    }
    const x = t._zod.parent;
    x && (f.ref || (f.ref = x), Qt(x, i, b), i.seen.get(x).isParent = !0);
  }
  const m = i.metadataRegistry.get(t);
  return m && mo(f.schema, m), i.io === "input" && un(t) && (delete f.schema.examples, delete f.schema.default), i.io === "input" && "_prefault" in f.schema && ((o = f.schema).default ?? (o.default = f.schema._prefault)), delete f.schema._prefault, i.seen.get(t).schema;
}
function Xx(t) {
  return t.replace(/~/g, "~0").replace(/\//g, "~1");
}
function G1(t, i) {
  const a = t.seen.get(i);
  if (!a)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (t.external && t.sharedDefsExtractedFor === t.external)
    return;
  const o = /* @__PURE__ */ new Map();
  for (const f of t.seen.entries()) {
    const p = t.metadataRegistry.get(f[0])?.id;
    if (p) {
      const m = o.get(p);
      if (m && m !== f[0])
        throw new Error(`Duplicate schema id "${p}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      o.set(p, f[0]);
    }
  }
  const s = (f) => {
    const p = t.target === "draft-2020-12" ? "$defs" : "definitions";
    if (t.external) {
      const x = t.external.registry.get(f[0])?.id, w = t.external.uri ?? ((S) => S);
      if (x)
        return { ref: w(x) };
      const v = f[1].defId ?? f[1].schema.id ?? `schema${t.counter++}`;
      return f[1].defId = v, { defId: v, ref: `${w("__shared")}#/${p}/${Xx(v)}` };
    }
    const m = "#", g = `${m}/${p}/`;
    if (f[1] === a && !f[1].schema.id)
      return { ref: m };
    const b = f[1].schema.id ?? `__schema${t.counter++}`;
    return { defId: b, ref: g + Xx(b) };
  }, c = (f) => {
    if (f[1].schema.$ref)
      return;
    const p = f[1], { ref: m, defId: g } = s(f);
    p.def = { ...p.schema }, g && (p.defId = g);
    const b = p.schema;
    for (const x in b)
      delete b[x];
    b.$ref = m;
  };
  if (t.cycles === "throw")
    for (const f of t.seen.entries()) {
      const p = f[1];
      if (p.cycle)
        throw new Error(`Cycle detected: #/${p.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const f of t.seen.entries()) {
    const p = f[1];
    if (i === f[0]) {
      c(f);
      continue;
    }
    if (t.external) {
      const g = t.external.registry.get(f[0])?.id;
      if (i !== f[0] && g) {
        c(f);
        continue;
      }
    }
    if (t.metadataRegistry.get(f[0])?.id) {
      c(f);
      continue;
    }
    if (p.cycle) {
      c(f);
      continue;
    }
    p.count > 1 && t.reused === "ref" && c(f);
  }
  t.external && (t.sharedDefsExtractedFor = t.external);
}
function F1(t) {
  const i = t.anyOf;
  if (!Array.isArray(i) || i.length === 0 || t.type !== void 0)
    return;
  const a = [];
  for (const o of i) {
    if (!o || typeof o != "object")
      return;
    F1(o);
    const s = Object.keys(o);
    if (s.length !== 1 || s[0] !== "type")
      return;
    const c = o.type;
    for (const f of Array.isArray(c) ? c : [c]) {
      if (typeof f != "string")
        return;
      a.includes(f) || a.push(f);
    }
  }
  delete t.anyOf, t.type = a.length === 1 ? a[0] : a;
}
const X1 = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]), Qx = ["oneOf", "anyOf"];
function Kx(t) {
  const i = t.additionalProperties;
  return i === void 0 || i === !1 || typeof i != "object" || i === null ? null : Object.keys(i).length ? i : null;
}
function Xd(t) {
  const i = [];
  for (const c of t) {
    if (typeof c != "object" || c.type !== "object")
      return null;
    for (const f in c)
      if (!X1.has(f))
        return null;
    i.push(c);
  }
  const a = {}, o = /* @__PURE__ */ new Set();
  for (const c of i) {
    for (const f in c.properties) {
      if (Object.prototype.hasOwnProperty.call(a, f))
        continue;
      const p = [];
      for (const g of i) {
        const b = g.properties?.[f] ?? Kx(g);
        b != null && (p.some((x) => JSON.stringify(x) === JSON.stringify(b)) || p.push(b));
      }
      const m = p.length === 1 ? p[0] : Xd(p) ?? { allOf: p };
      oa(a, f, m);
    }
    for (const f of c.required ?? [])
      o.add(f);
  }
  const s = { type: "object", properties: a };
  if (o.size && (s.required = [...o]), i.every((c) => c.additionalProperties === !1))
    s.additionalProperties = !1;
  else {
    const c = [];
    for (const f of i) {
      const p = Kx(f);
      p && !c.some((m) => JSON.stringify(m) === JSON.stringify(p)) && c.push(p);
    }
    c.length === 1 ? s.additionalProperties = c[0] : c.length > 1 && (s.additionalProperties = { allOf: c });
  }
  return s;
}
function Bj(t) {
  const i = t.allOf;
  if (!Array.isArray(i) || i.length < 2)
    return;
  for (const s of X1)
    if (s in t)
      return;
  const a = i.filter((s) => Qx.some((c) => Array.isArray(s[c])));
  let o = null;
  if (!a.length)
    o = Xd(i);
  else {
    const s = a[0], c = Qx.find((m) => Array.isArray(s[m]));
    if (Object.keys(s).length !== 1)
      return;
    const f = i.filter((m) => m !== s), p = s[c].map((m) => Xd([...f, m]));
    if (p.some((m) => !m))
      return;
    o = { [c]: p };
  }
  o && (delete t.allOf, mo(t, o));
}
function Q1(t, i) {
  const a = t.seen.get(i);
  if (!a)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = (p) => {
    const m = t.seen.get(p);
    if (m.ref === null)
      return;
    const g = m.def ?? m.schema, b = { ...g }, x = m.ref;
    if (m.ref = null, x) {
      o(x);
      const v = t.seen.get(x), S = v.schema;
      if (S.$ref && (t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0") ? (g.allOf = g.allOf ?? [], g.allOf.push(S)) : mo(g, S), mo(g, b), p._zod.parent === x)
        for (const j in g)
          j === "$ref" || j === "allOf" || j in b || delete g[j];
      if (S.$ref && v.def)
        for (const j in g)
          j === "$ref" || j === "allOf" || j in v.def && JSON.stringify(g[j]) === JSON.stringify(v.def[j]) && delete g[j];
    }
    const w = p._zod.parent;
    if (w && w !== x) {
      o(w);
      const v = t.seen.get(w);
      if (v?.schema.$ref && (g.$ref = v.schema.$ref, v.def))
        for (const S in g)
          S === "$ref" || S === "allOf" || S in v.def && JSON.stringify(g[S]) === JSON.stringify(v.def[S]) && delete g[S];
    }
    t.override({
      zodSchema: p,
      jsonSchema: g,
      path: m.path ?? []
    });
  };
  if (!t.external || t.sharedEmitDoneFor !== t.external) {
    for (const p of [...t.seen.entries()].reverse())
      o(p[0]);
    if (t.target !== "openapi-3.0")
      for (const p of t.seen.entries())
        F1(p[1].def ?? p[1].schema);
    for (const p of t.deferred)
      p();
    if (t.intersections.length) {
      const p = /* @__PURE__ */ new Map();
      for (const m of t.seen.values())
        for (const g of [m.schema, m.def]) {
          const b = g?.allOf;
          if (!Array.isArray(b))
            continue;
          const x = p.get(b);
          x ? x.push(g) : p.set(b, [g]);
        }
      for (const m of t.intersections)
        for (const g of p.get(m) ?? [])
          Bj(g);
    }
  }
  const s = {};
  if (t.target === "draft-2020-12" ? s.$schema = "https://json-schema.org/draft/2020-12/schema" : t.target === "draft-07" ? s.$schema = "http://json-schema.org/draft-07/schema#" : t.target === "draft-04" ? s.$schema = "http://json-schema.org/draft-04/schema#" : t.target, t.external?.uri) {
    const p = t.external.registry.get(i)?.id;
    if (!p)
      throw new Error("Schema is missing an `id` property");
    s.$id = t.external.uri(p);
  }
  mo(s, a.defId ? a.schema : a.def ?? a.schema);
  const c = t.metadataRegistry.get(i)?.id;
  c !== void 0 && s.id === c && delete s.id;
  const f = t.external?.defs ?? {};
  if (!t.external || t.sharedEmitDoneFor !== t.external)
    for (const p of t.seen.entries()) {
      const m = p[1];
      m.def && m.defId && (m.def.id === m.defId && delete m.def.id, oa(f, m.defId, m.def));
    }
  t.external && (t.sharedEmitDoneFor = t.external), t.external || Object.keys(f).length > 0 && (t.target === "draft-2020-12" ? s.$defs = f : s.definitions = f);
  try {
    const p = JSON.parse(JSON.stringify(s));
    return Object.defineProperty(p, "~standard", {
      value: {
        ...i["~standard"],
        jsonSchema: {
          input: xu(i, "input", t.processors),
          output: xu(i, "output", t.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), p;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function un(t, i) {
  const a = i ?? { seen: /* @__PURE__ */ new Set() };
  if (a.seen.has(t))
    return !1;
  a.seen.add(t);
  const o = t._zod.def;
  if (o.type === "transform")
    return !0;
  if (o.type === "array")
    return un(o.element, a);
  if (o.type === "set")
    return un(o.valueType, a);
  if (o.type === "lazy")
    return un(o.getter(), a);
  if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault" || o.type === "catch")
    return un(o.innerType, a);
  if (o.type === "intersection")
    return un(o.left, a) || un(o.right, a);
  if (o.type === "record" || o.type === "map")
    return un(o.keyType, a) || un(o.valueType, a);
  if (o.type === "pipe")
    return t._zod.traits.has("$ZodCodec") ? !0 : un(o.in, a) || un(o.out, a);
  if (o.type === "object") {
    for (const s in o.shape)
      if (un(o.shape[s], a))
        return !0;
    return !1;
  }
  if (o.type === "union") {
    for (const s of o.options)
      if (un(s, a))
        return !0;
    return !1;
  }
  if (o.type === "tuple") {
    for (const s of o.items)
      if (un(s, a))
        return !0;
    return !!(o.rest && un(o.rest, a));
  }
  return !1;
}
const Ij = (t, i = {}) => (a) => {
  const o = Y1({ ...a, processors: i });
  return Qt(t, o), G1(o, t), Q1(o, t);
}, xu = (t, i, a = {}) => (o) => {
  const { libraryOptions: s, target: c } = o ?? {}, f = Y1({ ...s ?? {}, target: c, io: i, processors: a });
  return Qt(t, f), G1(f, t), Q1(f, t);
}, il = (t, i, a) => {
  (t[i] === void 0 || a > t[i]) && (t[i] = a);
}, rl = (t, i, a) => {
  (t[i] === void 0 || a < t[i]) && (t[i] = a);
}, Px = (t, i) => {
  il(t, "minimum", i), rl(t, "maximum", i);
}, K1 = (t, i) => {
  t.multipleOf ?? (t.multipleOf = []), t.multipleOf.includes(i) || t.multipleOf.push(i);
}, P1 = (t, i) => {
  t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(i);
}, J1 = (t, i) => {
  t.mime = t.mime ? t.mime.filter((a) => i.includes(a)) : [...i];
}, W1 = (t, i) => {
  t.format = i, i.includes("int") && (t.isInt = !0);
}, Jx = (t, i) => il(t, "minimum", i.minimum), Wx = (t, i) => rl(t, "maximum", i.maximum), ey = (t) => (i, a) => {
  W1(i, a.format);
  const [o, s] = t[a.format];
  il(i, "minimum", o), rl(i, "maximum", s);
}, Hj = {
  greater_than: (t, i) => il(t, i.inclusive ? "minimum" : "exclusiveMinimum", i.value),
  less_than: (t, i) => rl(t, i.inclusive ? "maximum" : "exclusiveMaximum", i.value),
  multiple_of: (t, i) => K1(t, i.value),
  number_format: ey(y1),
  bigint_format: ey(az),
  min_length: Jx,
  max_length: Wx,
  length_equals: (t, i) => Px(t, i.length),
  min_size: Jx,
  max_size: Wx,
  size_equals: (t, i) => Px(t, i.size),
  string_format: (t, i) => {
    W1(t, i.format), i.pattern && P1(t, i.pattern), (i.format === "base64" || i.format === "base64url") && (t.contentEncoding = i.format), (i.local || i.precision === -1) && (t.laxFormat = !0);
  },
  mime_type: (t, i) => J1(t, i.mime)
};
function yi(t) {
  const i = {}, a = t._zod.def, o = t._zod.traits.has("$ZodCheck") ? [t, ...a.checks ?? []] : a.checks ?? [];
  for (const c of o)
    Hj[c._zod.def.check]?.(i, c._zod.def);
  const s = t._zod.bag;
  s.minimum !== void 0 && il(i, "minimum", s.minimum), s.exclusiveMinimum !== void 0 && il(i, "exclusiveMinimum", s.exclusiveMinimum), s.maximum !== void 0 && rl(i, "maximum", s.maximum), s.exclusiveMaximum !== void 0 && rl(i, "exclusiveMaximum", s.exclusiveMaximum), s.multipleOf !== void 0 && K1(i, s.multipleOf), s.format !== void 0 && (i.format ?? (i.format = s.format), s.format.includes("int") && (i.isInt = !0)), s.mime && J1(i, s.mime);
  for (const c of s.patterns ?? [])
    P1(i, c);
  return i;
}
const Zj = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, $j = /* @__PURE__ */ new Map([
  [R1, l_],
  [Sp, o_]
]), qj = (t) => $j.get(t) ?? t, Vj = (t, i, a, o) => {
  const s = a;
  s.type = "string";
  const { minimum: c, maximum: f, format: p, patterns: m, contentEncoding: g, laxFormat: b } = yi(t);
  if (typeof c == "number" && (s.minLength = c), typeof f == "number" && (s.maxLength = f), p && (s.format = Zj[p] ?? p, s.format === "" && delete s.format, (p === "time" || b) && delete s.format), g && (s.contentEncoding = g), m && m.size > 0) {
    const x = [...m].map(qj);
    x.length === 1 ? s.pattern = x[0].source : x.length > 1 && (s.allOf = [
      ...x.map((w) => ({
        ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: w.source
      }))
    ]);
  }
}, Yj = (t, i, a, o) => {
  const s = a, { minimum: c, maximum: f, multipleOf: p, exclusiveMaximum: m, exclusiveMinimum: g, isInt: b } = yi(t);
  s.type = b ? "integer" : "number";
  const x = typeof g == "number" && g >= (c ?? Number.NEGATIVE_INFINITY), w = typeof m == "number" && m <= (f ?? Number.POSITIVE_INFINITY), v = i.target === "draft-04" || i.target === "openapi-3.0";
  if (x ? v ? (s.minimum = g, s.exclusiveMinimum = !0) : s.exclusiveMinimum = g : typeof c == "number" && (s.minimum = c), w ? v ? (s.maximum = m, s.exclusiveMaximum = !0) : s.exclusiveMaximum = m : typeof f == "number" && (s.maximum = f), p) {
    const S = /* @__PURE__ */ new Set();
    for (const N of p)
      Number.isFinite(N) && N !== 0 ? S.add(Math.abs(N)) : ol(t, i, s, o, `A multipleOf divisor of ${N} cannot be represented in JSON Schema`);
    const [E, ...j] = S;
    E !== void 0 && (s.multipleOf = E), j.length && (s.allOf = [...s.allOf ?? [], ...j.map((N) => ({ multipleOf: N }))]);
  }
}, Gj = (t, i, a, o) => {
  a.type = "boolean";
}, Fj = (t, i, a, o) => {
  a.not = {};
}, Xj = (t, i, a, o) => {
}, Qj = (t, i, a, o) => {
  const s = t._zod.def, c = $d(s.entries);
  if (c.length === 0) {
    a.not = {};
    return;
  }
  c.every((f) => typeof f == "number") && (a.type = "number"), c.every((f) => typeof f == "string") && (a.type = "string"), a.enum = c;
}, Kj = (t, i, a, o) => {
  ol(t, i, a, o, "Custom types cannot be represented in JSON Schema");
}, Pj = (t, i, a, o) => {
  ol(t, i, a, o, "Transforms cannot be represented in JSON Schema");
}, Jj = (t, i, a, o) => {
  const s = a, c = t._zod.def, { minimum: f, maximum: p } = yi(t);
  typeof f == "number" && (s.minItems = f), typeof p == "number" && (s.maxItems = p), s.type = "array", s.items = Qt(c.element, i, {
    ...o,
    path: [...o.path, "items"]
  });
};
function Qd(t) {
  const i = t._zod.def;
  return i.type === "pipe" && i.in._zod.traits.has("$ZodTransform") ? Qd(i.out) : i.type === "catch" ? Qd(i.innerType) : t._zod.optin;
}
const Wj = (t, i, a, o) => {
  const s = a, c = t._zod.def, f = c.shape;
  if (Object.getOwnPropertySymbols(f).length && ol(t, i, s, o, "Symbol keys cannot be represented in JSON Schema"))
    return;
  s.type = "object", s.properties = {};
  for (const g in f)
    oa(s.properties, g, Qt(f[g], i, {
      ...o,
      path: [...o.path, "properties", g]
    }));
  const m = [];
  for (const g of Object.keys(f)) {
    const b = c.shape[g];
    (i.io === "input" ? Qd(b) === void 0 : b._zod.optout === void 0) && m.push(g);
  }
  m.length > 0 && (s.required = m), c.catchall?._zod.def.type === "never" ? s.additionalProperties = !1 : c.catchall ? c.catchall && (s.additionalProperties = Qt(c.catchall, i, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : i.io === "output" && (s.additionalProperties = !1);
}, e3 = (t, i, a, o) => {
  const s = t._zod.def, c = s.inclusive === !1, f = s.options.map((p, m) => Qt(p, i, {
    ...o,
    path: [...o.path, c ? "oneOf" : "anyOf", m]
  }));
  c ? a.oneOf = f : a.anyOf = f;
}, t3 = (t, i, a, o) => {
  const s = t._zod.def, c = Qt(s.left, i, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), f = Qt(s.right, i, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), p = (g) => "allOf" in g && Object.keys(g).length === 1, m = [
    ...p(c) ? c.allOf : [c],
    ...p(f) ? f.allOf : [f]
  ];
  a.allOf = m, i.intersections.push(m);
}, n3 = (t, i, a, o) => {
  const s = t._zod.def, c = Qt(s.innerType, i, o), f = i.seen.get(t);
  i.target === "openapi-3.0" ? (f.ref = s.innerType, a.nullable = !0) : a.anyOf = [c, { type: "null" }];
}, i3 = (t, i, a, o) => {
  const s = t._zod.def;
  Qt(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
}, zp = /* @__PURE__ */ Symbol();
function e0(t, i, a, o, s) {
  let c = !1;
  const f = JSON.stringify(t, (p, m) => typeof m != "bigint" ? m : (c = !0, null));
  return c ? (ol(i, a, o, s, "BigInt defaults cannot be represented in JSON Schema"), zp) : JSON.parse(f);
}
const r3 = (t, i, a, o) => {
  const s = t._zod.def;
  Qt(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
  const f = e0(s.defaultValue, t, i, a, o);
  f !== zp && (a.default = f);
}, a3 = (t, i, a, o) => {
  const s = t._zod.def;
  Qt(s.innerType, i, o);
  const c = i.seen.get(t);
  if (c.ref = s.innerType, i.io !== "input")
    return;
  const f = e0(s.defaultValue, t, i, a, o);
  f !== zp && (a._prefault = f);
}, l3 = (t, i, a, o) => {
  const s = t._zod.def;
  Qt(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
  let f;
  try {
    f = s.catchValue(void 0);
  } catch {
    ol(t, i, a, o, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  a.default = f;
}, o3 = (t, i, a, o) => {
  const s = t._zod.def, c = s.in._zod.traits.has("$ZodTransform"), f = i.io === "input" ? c ? s.out : s.in : s.out;
  Qt(f, i, o);
  const p = i.seen.get(t);
  p.ref = f;
}, s3 = (t, i, a, o) => {
  const s = t._zod.def;
  Qt(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType, a.readOnly = !0;
}, t0 = (t, i, a, o) => {
  const s = t._zod.def;
  Qt(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
}, ty = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function eu(t, i, a) {
  Object.defineProperty(t, i, {
    configurable: !0,
    enumerable: !1,
    get() {
      const o = a(this);
      return Object.defineProperty(this, i, { value: o, configurable: !0, writable: !0 }), o;
    },
    set(o) {
      Object.defineProperty(this, i, { value: o, configurable: !0, writable: !0 });
    }
  });
}
const u3 = (t, i) => {
  Ez.init(t, i), t.name = "ZodError";
  const a = Object.getPrototypeOf(t);
  ty.has(a) || (ty.add(a), eu(a, "format", (o) => (s) => Nz(o, s)), eu(a, "flatten", (o) => (s) => Tz(o, s)), eu(a, "addIssue", (o) => (s) => {
    o.issues.push(s), o.message = JSON.stringify(o.issues, qd, 2);
  }), eu(a, "addIssues", (o) => (s) => {
    o.issues.push(...s), o.message = JSON.stringify(o.issues, qd, 2);
  }), Object.defineProperty(a, "isEmpty", {
    configurable: !0,
    enumerable: !1,
    get() {
      return this.issues.length === 0;
    }
  }));
}, Xn = /* @__PURE__ */ P("ZodError", u3, void 0, {
  Parent: Error
}), c3 = /* @__PURE__ */ bp(Xn), f3 = /* @__PURE__ */ xp(Xn), d3 = /* @__PURE__ */ yp(Xn), p3 = /* @__PURE__ */ vp(Xn), h3 = /* @__PURE__ */ Lz(Xn), m3 = /* @__PURE__ */ Uz(Xn), g3 = /* @__PURE__ */ Bz(Xn), b3 = /* @__PURE__ */ Iz(Xn), x3 = /* @__PURE__ */ Hz(Xn), y3 = /* @__PURE__ */ Zz(Xn), v3 = /* @__PURE__ */ $z(Xn), w3 = /* @__PURE__ */ qz(Xn);
function k3() {
  wi.localeError || jr($4());
}
function _p() {
  wi.memoizer || jr({ memoizer: I4() });
}
const St = /* @__PURE__ */ P("ZodType", (t, i) => (k3(), kt.init(t, i), t.def = i, t.type = i.type, t), {
  check(...t) {
    const i = this.def;
    return this.clone(An(i, {
      checks: [
        ...i.checks ?? [],
        ...t.map((a) => typeof a == "function" ? { _zod: { check: a, def: { check: "custom" }, onattach: [] } } : a)
      ]
    }), { parent: !0 });
  },
  with(...t) {
    return this.check(...t);
  },
  clone(t, i) {
    return _r(this, t, i);
  },
  brand() {
    return this;
  },
  register(t, i) {
    return t.add(this, i), this;
  },
  refine(t, i) {
    return this.check(xE(t, i));
  },
  superRefine(t, i) {
    return this.check(yE(t, i));
  },
  overwrite(t) {
    return this.check(/* @__PURE__ */ ll(t));
  },
  optional() {
    return ry(this);
  },
  exactOptional() {
    return aE(this);
  },
  nullable() {
    return ay(this);
  },
  nullish() {
    return ry(ay(this));
  },
  nonoptional(t) {
    return fE(this, t);
  },
  array() {
    return ri(this);
  },
  or(t) {
    return eE([this, t]);
  },
  and(t) {
    return nE(this, t);
  },
  transform(t) {
    return ly(this, rE(t));
  },
  default(t) {
    return sE(this, t);
  },
  prefault(t) {
    return cE(this, t);
  },
  catch(t) {
    return pE(this, t);
  },
  pipe(t) {
    return ly(this, t);
  },
  readonly() {
    return gE(this);
  },
  describe(t) {
    const i = this.clone();
    return po.add(i, { description: t }), i;
  },
  meta(...t) {
    if (t.length === 0)
      return po.get(this);
    const i = this.clone();
    return po.add(i, t[0]), i;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(t, ...i) {
    return i.length === 0 ? t(this) : t(this, ...i);
  },
  // Overrides core's `~standard` to add `jsonSchema`. Must stay a prototype entry: redefining it per instance demotes instances to dictionary mode.
  get "~standard"() {
    return k1(this, "~standard", {
      ...N1(this),
      jsonSchema: {
        input: xu(this, "input"),
        output: xu(this, "output")
      }
    });
  },
  set "~standard"(t) {
    zr(this, "~standard", t);
  },
  parse: function t(i, a) {
    return c3(this, i, a, { callee: t });
  },
  parseAsync: async function t(i, a) {
    return await f3(this, i, a, { callee: t });
  },
  safeParse(t, i) {
    return d3(this, t, i);
  },
  async safeParseAsync(t, i) {
    return p3(this, t, i);
  },
  // `spa` is an alias: same function object as `safeParseAsync`, as before.
  get spa() {
    return this?.safeParseAsync;
  },
  set spa(t) {
    zr(this, "spa", t);
  },
  validate(t, i) {
    return Mz(this, t, i);
  },
  validateAsync(t, i) {
    return Rz(this, t, i);
  },
  encode: function t(i, a) {
    return h3(this, i, a, { callee: t });
  },
  decode: function t(i, a) {
    return m3(this, i, a, { callee: t });
  },
  encodeAsync: async function t(i, a) {
    return await g3(this, i, a, { callee: t });
  },
  decodeAsync: async function t(i, a) {
    return await b3(this, i, a, { callee: t });
  },
  safeEncode(t, i) {
    return x3(this, t, i);
  },
  safeDecode(t, i) {
    return y3(this, t, i);
  },
  async safeEncodeAsync(t, i) {
    return v3(this, t, i);
  },
  async safeDecodeAsync(t, i) {
    return w3(this, t, i);
  },
  toJSONSchema(t) {
    return Ij(this, {})(t);
  },
  // Reads through to the registry on every access, so it must not cache.
  get description() {
    return po.get(this)?.description;
  },
  // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
  get _def() {
    return this._zod.def;
  }
}), n0 = /* @__PURE__ */ P(
  "_ZodString",
  (t, i) => {
    kp.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => Vj(t, a, o);
  },
  /* @__PURE__ */ S1({
    format: (t) => yi(t).format ?? null,
    minLength: (t) => yi(t).minimum ?? null,
    maxLength: (t) => yi(t).maximum ?? null
  }, {
    regex(...t) {
      return this.check(/* @__PURE__ */ Sj(...t));
    },
    includes(...t) {
      return this.check(/* @__PURE__ */ jj(...t));
    },
    startsWith(...t) {
      return this.check(/* @__PURE__ */ Ej(...t));
    },
    endsWith(...t) {
      return this.check(/* @__PURE__ */ Cj(...t));
    },
    min(...t) {
      return this.check(/* @__PURE__ */ bu(...t));
    },
    max(...t) {
      return this.check(/* @__PURE__ */ q1(...t));
    },
    length(...t) {
      return this.check(/* @__PURE__ */ V1(...t));
    },
    nonempty(...t) {
      return this.check(/* @__PURE__ */ bu(1, ...t));
    },
    lowercase(t) {
      return this.check(/* @__PURE__ */ zj(t));
    },
    uppercase(t) {
      return this.check(/* @__PURE__ */ _j(t));
    },
    trim() {
      return this.check(/* @__PURE__ */ Nj());
    },
    normalize(...t) {
      return this.check(/* @__PURE__ */ Tj(...t));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ Aj());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ Oj());
    },
    slugify() {
      return this.check(/* @__PURE__ */ Mj());
    }
  })
), S3 = /* @__PURE__ */ P("ZodString", (t, i) => {
  kp.init(t, i), n0.init(t, i);
}, {
  email(t) {
    return this.check(/* @__PURE__ */ G4(C3, t));
  },
  url(t) {
    return this.check(/* @__PURE__ */ J4(N3, t));
  },
  jwt(t) {
    return this.check(/* @__PURE__ */ pj(Y3, t));
  },
  emoji(t) {
    return this.check(/* @__PURE__ */ W4(A3, t));
  },
  guid(t) {
    return this.check(/* @__PURE__ */ F4(T3, t));
  },
  uuid(t) {
    return this.check(/* @__PURE__ */ X4(tu, t));
  },
  uuidv4(t) {
    return this.check(/* @__PURE__ */ Q4(tu, t));
  },
  uuidv6(t) {
    return this.check(/* @__PURE__ */ K4(tu, t));
  },
  uuidv7(t) {
    return this.check(/* @__PURE__ */ P4(tu, t));
  },
  nanoid(t) {
    return this.check(/* @__PURE__ */ ej(O3, t));
  },
  cuid(t) {
    return this.check(/* @__PURE__ */ tj(M3, t));
  },
  cuid2(t) {
    return this.check(/* @__PURE__ */ nj(D3, t));
  },
  ulid(t) {
    return this.check(/* @__PURE__ */ ij(R3, t));
  },
  base64(t) {
    return this.check(/* @__PURE__ */ cj($3, t));
  },
  base64url(t) {
    return this.check(/* @__PURE__ */ fj(q3, t));
  },
  xid(t) {
    return this.check(/* @__PURE__ */ rj(L3, t));
  },
  ksuid(t) {
    return this.check(/* @__PURE__ */ aj(U3, t));
  },
  ipv4(t) {
    return this.check(/* @__PURE__ */ lj(B3, t));
  },
  ipv6(t) {
    return this.check(/* @__PURE__ */ oj(I3, t));
  },
  cidrv4(t) {
    return this.check(/* @__PURE__ */ sj(H3, t));
  },
  cidrv6(t) {
    return this.check(/* @__PURE__ */ uj(Z3, t));
  },
  e164(t) {
    return this.check(/* @__PURE__ */ dj(V3, t));
  },
  datetime(t) {
    return this.check(/* @__PURE__ */ hj(z3, t));
  },
  date(t) {
    return this.check(/* @__PURE__ */ mj(_3, t));
  },
  time(t) {
    return this.check(/* @__PURE__ */ gj(j3, t));
  },
  duration(t) {
    return this.check(/* @__PURE__ */ bj(E3, t));
  }
});
function ue(t) {
  return /* @__PURE__ */ Y4(S3, t);
}
const pt = /* @__PURE__ */ P("ZodStringFormat", (t, i) => {
  ft.init(t, i), n0.init(t, i);
}), z3 = /* @__PURE__ */ P("ZodISODateTime", (t, i) => {
  K_.init(t, i), pt.init(t, i);
}), _3 = /* @__PURE__ */ P("ZodISODate", (t, i) => {
  P_.init(t, i), pt.init(t, i);
}), j3 = /* @__PURE__ */ P("ZodISOTime", (t, i) => {
  J_.init(t, i), pt.init(t, i);
}), E3 = /* @__PURE__ */ P("ZodISODuration", (t, i) => {
  W_.init(t, i), pt.init(t, i);
}), C3 = /* @__PURE__ */ P("ZodEmail", (t, i) => {
  L_.init(t, i), pt.init(t, i);
}), T3 = /* @__PURE__ */ P("ZodGUID", (t, i) => {
  D_.init(t, i), pt.init(t, i);
}), tu = /* @__PURE__ */ P("ZodUUID", (t, i) => {
  R_.init(t, i), pt.init(t, i);
}), N3 = /* @__PURE__ */ P("ZodURL", (t, i) => {
  $_.init(t, i), pt.init(t, i);
}), A3 = /* @__PURE__ */ P("ZodEmoji", (t, i) => {
  q_.init(t, i), pt.init(t, i);
}), O3 = /* @__PURE__ */ P("ZodNanoID", (t, i) => {
  V_.init(t, i), pt.init(t, i);
}), M3 = /* @__PURE__ */ P("ZodCUID", (t, i) => {
  Y_.init(t, i), pt.init(t, i);
}), D3 = /* @__PURE__ */ P("ZodCUID2", (t, i) => {
  G_.init(t, i), pt.init(t, i);
}), R3 = /* @__PURE__ */ P("ZodULID", (t, i) => {
  F_.init(t, i), pt.init(t, i);
}), L3 = /* @__PURE__ */ P("ZodXID", (t, i) => {
  X_.init(t, i), pt.init(t, i);
}), U3 = /* @__PURE__ */ P("ZodKSUID", (t, i) => {
  Q_.init(t, i), pt.init(t, i);
}), B3 = /* @__PURE__ */ P("ZodIPv4", (t, i) => {
  e4.init(t, i), pt.init(t, i);
}), I3 = /* @__PURE__ */ P("ZodIPv6", (t, i) => {
  n4.init(t, i), pt.init(t, i);
}), H3 = /* @__PURE__ */ P("ZodCIDRv4", (t, i) => {
  i4.init(t, i), pt.init(t, i);
}), Z3 = /* @__PURE__ */ P("ZodCIDRv6", (t, i) => {
  a4.init(t, i), pt.init(t, i);
}), $3 = /* @__PURE__ */ P("ZodBase64", (t, i) => {
  l4.init(t, i), pt.init(t, i);
}), q3 = /* @__PURE__ */ P("ZodBase64URL", (t, i) => {
  s4.init(t, i), pt.init(t, i);
}), V3 = /* @__PURE__ */ P("ZodE164", (t, i) => {
  u4.init(t, i), pt.init(t, i);
}), Y3 = /* @__PURE__ */ P("ZodJWT", (t, i) => {
  f4.init(t, i), pt.init(t, i);
}), i0 = /* @__PURE__ */ P(
  "ZodNumber",
  (t, i) => {
    L1.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => Yj(t, a, o, s), t.isFinite = !0;
  },
  /* @__PURE__ */ S1({
    minValue: (t) => {
      const { minimum: i, exclusiveMinimum: a } = yi(t);
      return Math.max(i ?? Number.NEGATIVE_INFINITY, a ?? Number.NEGATIVE_INFINITY);
    },
    maxValue: (t) => {
      const { maximum: i, exclusiveMaximum: a } = yi(t);
      return Math.min(i ?? Number.POSITIVE_INFINITY, a ?? Number.POSITIVE_INFINITY);
    },
    isInt: (t) => {
      const { isInt: i, multipleOf: a } = yi(t);
      return !!i || !!a?.some(Number.isSafeInteger);
    },
    format: (t) => yi(t).format ?? null
  }, {
    gt(t, i) {
      return this.check(/* @__PURE__ */ Gx(t, i));
    },
    gte(t, i) {
      return this.check(/* @__PURE__ */ vd(t, i));
    },
    min(t, i) {
      return this.check(/* @__PURE__ */ vd(t, i));
    },
    lt(t, i) {
      return this.check(/* @__PURE__ */ Yx(t, i));
    },
    lte(t, i) {
      return this.check(/* @__PURE__ */ yd(t, i));
    },
    max(t, i) {
      return this.check(/* @__PURE__ */ yd(t, i));
    },
    int(t) {
      return this.check(ny(t));
    },
    safe(t) {
      return this.check(ny(t));
    },
    positive(t) {
      return this.check(/* @__PURE__ */ Gx(0, t));
    },
    nonnegative(t) {
      return this.check(/* @__PURE__ */ vd(0, t));
    },
    negative(t) {
      return this.check(/* @__PURE__ */ Yx(0, t));
    },
    nonpositive(t) {
      return this.check(/* @__PURE__ */ yd(0, t));
    },
    multipleOf(t, i) {
      return this.check(/* @__PURE__ */ Fx(t, i));
    },
    step(t, i) {
      return this.check(/* @__PURE__ */ Fx(t, i));
    },
    finite() {
      return this;
    }
  })
);
function Gn(t) {
  return /* @__PURE__ */ xj(i0, t);
}
const G3 = /* @__PURE__ */ P("ZodNumberFormat", (t, i) => {
  d4.init(t, i), i0.init(t, i);
});
function ny(t) {
  return /* @__PURE__ */ yj(G3, t);
}
const F3 = /* @__PURE__ */ P("ZodBoolean", (t, i) => {
  p4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => Gj(t, a, o);
});
function vr(t) {
  return /* @__PURE__ */ vj(F3, t);
}
const X3 = /* @__PURE__ */ P("ZodUnknown", (t, i) => {
  h4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => Xj();
});
function iy() {
  return /* @__PURE__ */ wj(X3);
}
const Q3 = /* @__PURE__ */ P("ZodNever", (t, i) => {
  m4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => Fj(t, a, o);
});
function K3(t) {
  return /* @__PURE__ */ kj(Q3, t);
}
const P3 = /* @__PURE__ */ P("ZodArray", (t, i) => {
  _p(), x4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => Jj(t, a, o, s), t.element = i.element;
}, {
  min(t, i) {
    return this.check(/* @__PURE__ */ bu(t, i));
  },
  nonempty(t) {
    return this.check(/* @__PURE__ */ bu(1, t));
  },
  max(t, i) {
    return this.check(/* @__PURE__ */ q1(t, i));
  },
  length(t, i) {
    return this.check(/* @__PURE__ */ V1(t, i));
  },
  unwrap() {
    return this.element;
  }
});
function ri(t, i) {
  return /* @__PURE__ */ Dj(P3, t, i);
}
const J3 = /* @__PURE__ */ P("ZodObject", (t, i) => {
  _p(), w4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => Wj(t, a, o, s), yz(t, "shape", (a) => a._zod.def.shape, !1);
}, {
  keyof() {
    return So(Object.keys(this._zod.def.shape));
  },
  catchall(t) {
    return this.clone(An(this._zod.def, { catchall: t }));
  },
  passthrough() {
    return this.clone(An(this._zod.def, { catchall: iy() }));
  },
  loose() {
    return this.clone(An(this._zod.def, { catchall: iy() }));
  },
  strict() {
    return this.clone(An(this._zod.def, { catchall: K3() }));
  },
  strip() {
    return this.clone(An(this._zod.def, { catchall: void 0 }));
  },
  extend(t) {
    return sz(this, t);
  },
  safeExtend(t) {
    return uz(this, t);
  },
  merge(t) {
    return cz(this, t);
  },
  pick(t) {
    return lz(this, t);
  },
  omit(t) {
    return oz(this, t);
  },
  partial(...t) {
    return Ex(r0, this, t[0]);
  },
  exactPartial(...t) {
    return Ex(a0, this, t[0], "exactPartial");
  },
  required(...t) {
    return fz(l0, this, t[0]);
  }
});
function Dt(t, i) {
  const a = {
    type: "object",
    shape: t ?? {},
    ...ke(i)
  };
  return new J3(a);
}
const W3 = /* @__PURE__ */ P("ZodUnion", (t, i) => {
  k4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => e3(t, a, o, s), t.options = i.options;
});
function eE(t, i) {
  return new W3({
    type: "union",
    options: t,
    ...ke(i)
  });
}
const tE = /* @__PURE__ */ P("ZodIntersection", (t, i) => {
  S4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => t3(t, a, o, s);
});
function nE(t, i) {
  return new tE({
    type: "intersection",
    left: t,
    right: i
  });
}
const Kd = /* @__PURE__ */ P("ZodEnum", (t, i) => {
  z4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (o, s, c) => Qj(t, o, s), t.enum = i.entries, t.options = [...t._zod.values];
  const a = new Set(Object.keys(i.entries));
  t.extract = (o, s) => {
    const c = {};
    for (const f of o)
      if (a.has(f))
        c[f] = i.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Kd({
      ...i,
      checks: [],
      ...ke(s),
      entries: c
    });
  }, t.exclude = (o, s) => {
    const c = { ...i.entries };
    for (const f of o)
      if (a.has(f))
        delete c[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Kd({
      ...i,
      checks: [],
      ...ke(s),
      entries: c
    });
  };
});
function So(t, i) {
  const a = Array.isArray(t) ? Object.fromEntries(t.map((o) => [o, o])) : t;
  return new Kd({
    type: "enum",
    entries: a,
    ...ke(i)
  });
}
const iE = /* @__PURE__ */ P("ZodTransform", (t, i) => {
  _p(), _4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => Pj(t, a, o, s), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      throw new z1(t.constructor.name);
    a.addIssue = (c) => {
      if (typeof c == "string")
        a.issues.push(ko(c, a.value, i));
      else {
        const f = c;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), "input" in f || (f.input = a.value), f.inst ?? (f.inst = t), a.issues.push(ko(f));
      }
    };
    const s = i.transform(a.value, a);
    return s instanceof Promise ? s.then((c) => (a.value = c, a)) : (a.value = s, a);
  };
});
function rE(t) {
  return new iE({
    type: "transform",
    transform: t
  });
}
const r0 = /* @__PURE__ */ P("ZodOptional", (t, i) => {
  I1.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => t0(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function ry(t) {
  return new r0({
    type: "optional",
    innerType: t
  });
}
const a0 = /* @__PURE__ */ P("ZodExactOptional", (t, i) => {
  j4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => t0(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function aE(t) {
  return new a0({
    type: "optional",
    innerType: t
  });
}
const lE = /* @__PURE__ */ P("ZodNullable", (t, i) => {
  E4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => n3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function ay(t) {
  return new lE({
    type: "nullable",
    innerType: t
  });
}
const oE = /* @__PURE__ */ P("ZodDefault", (t, i) => {
  C4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => r3(t, a, o, s), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function sE(t, i) {
  return new oE({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof i == "function" ? i() : b1(i);
    }
  });
}
const uE = /* @__PURE__ */ P("ZodPrefault", (t, i) => {
  T4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => a3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function cE(t, i) {
  return new uE({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof i == "function" ? i() : b1(i);
    }
  });
}
const l0 = /* @__PURE__ */ P("ZodNonOptional", (t, i) => {
  N4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => i3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function fE(t, i) {
  return new l0({
    type: "nonoptional",
    innerType: t,
    ...ke(i)
  });
}
const dE = /* @__PURE__ */ P("ZodCatch", (t, i) => {
  A4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => l3(t, a, o, s), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function pE(t, i) {
  return new dE({
    type: "catch",
    innerType: t,
    catchValue: typeof i == "function" ? i : wz(i)
  });
}
const hE = /* @__PURE__ */ P("ZodPipe", (t, i) => {
  O4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => o3(t, a, o, s), t.in = i.in, t.out = i.out;
});
function ly(t, i) {
  return new hE({
    type: "pipe",
    in: t,
    out: i
    // ...util.normalizeParams(params),
  });
}
const mE = /* @__PURE__ */ P("ZodReadonly", (t, i) => {
  M4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => s3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function gE(t) {
  return new mE({
    type: "readonly",
    innerType: t
  });
}
const bE = /* @__PURE__ */ P("ZodCustom", (t, i) => {
  D4.init(t, i), St.init(t, i), t._zod.processJSONSchema = (a, o, s) => Kj(t, a, o, s);
});
function xE(t, i = {}) {
  return /* @__PURE__ */ Rj(bE, t, i);
}
function yE(t, i) {
  return /* @__PURE__ */ Lj(t, i);
}
Dt({
  itemId: ue(),
  kind: ue(),
  revision: Gn(),
  status: ue(),
  turnId: ue().nullish(),
  text: ue().optional(),
  displayText: ue().optional(),
  summary: ri(ue()).optional(),
  tool: ue().optional(),
  args: ue().optional(),
  visibleOutput: ue().optional(),
  commandText: ue().optional(),
  fallbackText: ue().optional(),
  statusLine: ue().optional(),
  failureReason: ue().optional(),
  objective: ue().optional(),
  agentPath: ue().optional(),
  role: ue().optional(),
  childSessionId: ue().optional(),
  subagentId: ue().optional(),
  reminderAgentId: ue().optional(),
  blocking: vr().optional(),
  durationMs: Gn().optional(),
  recordedAt: ue().optional(),
  truncated: vr().optional(),
  retracted: vr().optional(),
  label: ue().optional(),
  finalSummary: ue().optional(),
  outputRef: Dt({ id: ue(), byteLen: Gn().optional() }).passthrough().optional(),
  patchSummary: Dt({ added: Gn(), removed: Gn(), files: Gn() }).optional(),
  result: Dt({ text: ue().optional(), summary: ue().optional() }).passthrough().optional()
});
Dt({
  sessionId: ue(),
  workspaceRoot: ue().nullable(),
  createdAt: ue(),
  updatedAt: ue(),
  lastActivityAt: ue().optional(),
  status: ue(),
  activeTurnId: ue().nullable(),
  modelId: ue().nullable(),
  name: ue().optional(),
  title: ue().optional(),
  firstUserPrompt: ue().optional(),
  branch: ue().optional(),
  turnCount: Gn(),
  kind: ue().optional(),
  approvalMode: Dt({ mode: ue() }).passthrough().optional()
});
Dt({
  approvalId: ue(),
  sessionId: ue(),
  toolName: ue(),
  rawArgs: ue(),
  currentRequirementId: Dt({ approvalId: ue(), sourceIndex: Gn() }),
  subject: Dt({
    kind: ue(),
    command: ue().optional(),
    path: ue().optional(),
    host: ue().optional(),
    target: ue().optional()
  }),
  availableChoices: ri(
    Dt({
      choiceId: ue(),
      label: ue(),
      decision: ue(),
      scope: ue(),
      rulePreview: ue().optional(),
      acceptsFeedback: vr().optional()
    })
  )
});
Dt({
  userInputId: ue(),
  sessionId: ue(),
  questions: ri(
    Dt({
      id: ue(),
      header: ue(),
      question: ue(),
      options: ri(Dt({ label: ue(), description: ue().optional() })),
      selection: Dt({
        mode: So(["single", "multiple"]),
        minSelections: Gn().optional(),
        maxSelections: Gn().optional()
      })
    })
  )
});
Dt({
  modelId: ue(),
  displayLabel: ue(),
  providerId: ue(),
  isDefault: vr(),
  isActive: vr(),
  contextLimit: Gn().nullable(),
  defaultReasoningEffort: ue().optional(),
  reasoningEffortVariants: ri(Dt({ tier: ue(), description: ue().optional() })).optional()
});
const o0 = So([
  "none",
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
  "ultra"
]), Yn = {
  theme: So(["muse", "daylight", "moonlight", "grove", "plush", "system"]),
  backgroundIntensity: Gn().min(0).max(100),
  cliPath: ue().max(4096),
  recentProjects: ri(ue()),
  trustedProjects: ri(ue()),
  archivedSessionIds: ri(ue()),
  pinnedSessionIds: ri(ue()),
  reasoningEffort: o0,
  fontSize: So(["compact", "comfortable", "large"]),
  reduceMotion: vr(),
  notifyOnCompletion: vr()
}, vE = Dt({
  theme: Yn.theme.default("muse"),
  backgroundIntensity: Yn.backgroundIntensity.default(70),
  cliPath: Yn.cliPath.default(""),
  recentProjects: Yn.recentProjects.default([]),
  trustedProjects: Yn.trustedProjects.default([]),
  archivedSessionIds: Yn.archivedSessionIds.default([]),
  pinnedSessionIds: Yn.pinnedSessionIds.default([]),
  reasoningEffort: Yn.reasoningEffort.default("high"),
  fontSize: Yn.fontSize.default("comfortable"),
  reduceMotion: Yn.reduceMotion.default(!1),
  notifyOnCompletion: Yn.notifyOnCompletion.default(!1)
});
Dt(Yn).omit({ trustedProjects: !0, recentProjects: !0 }).partial().strict();
Dt({
  questionId: ue(),
  selectedLabel: ue().optional(),
  selectedLabels: ri(ue()).optional(),
  freeText: ue().max(500).optional()
});
function Wt({
  label: t,
  children: i,
  onClick: a,
  active: o,
  disabled: s,
  className: c = ""
}) {
  return /* @__PURE__ */ h.jsx(
    "button",
    {
      type: "button",
      className: `icon-button ${o ? "active" : ""} ${c}`,
      title: t,
      "aria-label": t,
      "aria-pressed": o,
      disabled: s,
      onClick: a,
      children: i
    }
  );
}
function jp({
  title: t,
  children: i,
  onClose: a,
  className: o = ""
}) {
  const s = F.useRef(null);
  return F.useEffect(() => (s.current?.showModal(), () => s.current?.close()), []), /* @__PURE__ */ h.jsxs(
    "dialog",
    {
      ref: s,
      className: `dialog ${o}`,
      "aria-label": t,
      onCancel: a,
      onClick: (c) => {
        if (c.target === c.currentTarget) {
          const f = c.currentTarget.getBoundingClientRect();
          (c.clientX < f.left || c.clientX > f.right || c.clientY < f.top || c.clientY > f.bottom) && a();
        }
      },
      children: [
        /* @__PURE__ */ h.jsxs("header", { className: "dialog-heading", children: [
          /* @__PURE__ */ h.jsx("h2", { children: t }),
          /* @__PURE__ */ h.jsx(Wt, { label: "Close dialog", onClick: a, children: /* @__PURE__ */ h.jsx(Sr, { size: 18 }) })
        ] }),
        i
      ]
    }
  );
}
function go({ size: t = 26 }) {
  return /* @__PURE__ */ h.jsx(
    "img",
    {
      className: "muse-mark",
      src: "./muse-logo.png",
      width: t,
      height: t,
      alt: "",
      "aria-hidden": "true"
    }
  );
}
function Zi(t) {
  return t.split(/[\\/]/).filter(Boolean).at(-1) || t;
}
function s0(t) {
  if (!t) return "";
  let i = t;
  for (let o = 0; o < 4; o++) {
    const s = i.replace(/<([a-zA-Z_][\w.-]*)\b[^>]*>[\s\S]*?<\/\1>/g, "");
    if (s === i) break;
    i = s;
  }
  const a = i.lastIndexOf("</");
  if (a !== -1) {
    const o = i.indexOf(">", a);
    o !== -1 && /^<\/[a-zA-Z_][\w.-]*>$/.test(i.slice(a, o + 1)) && (i = i.slice(o + 1));
  }
  return i.replace(/^<[a-zA-Z_][\w.-]*\b[^>]*>[\s\S]*/i, "").trim();
}
function wd(t) {
  return s0(t).replace(/\s+/g, " ").trim();
}
function wE(t) {
  return s0(t);
}
function ea(t) {
  const i = wd(t.name) || wd(t.title) || wd(t.firstUserPrompt);
  return i ? i.length > 76 ? `${i.slice(0, 76).trimEnd()}…` : i : "Untitled conversation";
}
function u0(t) {
  const i = new Date(t);
  if (Number.isNaN(i.getTime())) return "";
  const a = (Date.now() - i.getTime()) / 6e4;
  return a < 1 ? "Now" : a < 60 ? `${Math.floor(a)}m` : a < 1440 ? `${Math.floor(a / 60)}h` : i.toLocaleDateString(void 0, { month: "short", day: "numeric" });
}
const Jr = 16e3, c0 = 120;
function kE(t, i) {
  if (!t.length || i < Jr || !Number.isFinite(i))
    throw new Error("The microphone returned an unsupported audio format.");
  const a = Math.floor(t[0].length * Jr / i);
  if (a < Jr / 5)
    throw new Error("Record at least a moment of speech and try again.");
  if (a > Jr * c0)
    throw new Error("Voice recordings can be up to two minutes.");
  const o = new Uint8Array(44 + a * 2), s = new DataView(o.buffer), c = (p, m) => [...m].forEach((g, b) => s.setUint8(p + b, g.charCodeAt(0)));
  c(0, "RIFF"), s.setUint32(4, o.length - 8, !0), c(8, "WAVE"), c(12, "fmt "), s.setUint32(16, 16, !0), s.setUint16(20, 1, !0), s.setUint16(22, 1, !0), s.setUint32(24, Jr, !0), s.setUint32(28, Jr * 2, !0), s.setUint16(32, 2, !0), s.setUint16(34, 16, !0), c(36, "data"), s.setUint32(40, a * 2, !0);
  const f = i / Jr;
  for (let p = 0; p < a; p++) {
    const m = Math.floor(p * f), g = Math.min(t[0].length, Math.floor((p + 1) * f));
    let b = 0;
    for (const x of t) for (let w = m; w < g; w++) b += x[w] || 0;
    b = Math.max(-1, Math.min(1, b / ((g - m) * t.length))), s.setInt16(44 + p * 2, Math.round(b * (b < 0 ? 32768 : 32767)), !0);
  }
  return o;
}
function SE({
  disabled: t,
  onText: i,
  onError: a,
  onBusy: o
}) {
  const [s, c] = F.useState("idle"), [f, p] = F.useState(0), [m, g] = F.useState([0.25, 0.45, 0.35, 0.5, 0.3]), b = F.useRef({ generation: 0 }), x = F.useRef({ onText: i, onError: a, onBusy: o });
  x.current = { onText: i, onError: a, onBusy: o };
  const w = F.useRef(!1), v = () => {
    clearInterval(b.current.timer), b.current.meterContext?.close().catch(() => {
    }), b.current.meterContext = void 0, b.current.stream?.getTracks().forEach((j) => j.stop()), b.current.stream = void 0, b.current.recorder = void 0;
  }, S = () => {
    b.current.generation++;
    const j = b.current.recorder;
    j?.state === "recording" && j.stop(), v(), w.current = !1, x.current.onBusy(!1), c("idle"), window.muse.cancelVoice().catch((N) => x.current.onError(N.message));
  };
  F.useEffect(
    () => () => {
      b.current.generation++;
      const j = b.current.recorder;
      j?.state === "recording" && j.stop(), v(), x.current.onBusy(!1), w.current && window.muse.cancelVoice().catch(() => {
      });
    },
    []
  );
  const E = async () => {
    if (s === "recording") {
      b.current.recorder?.stop();
      return;
    }
    if (w.current || t) return;
    w.current = !0, x.current.onBusy(!0), c("permission");
    const j = ++b.current.generation;
    try {
      if (await window.muse.requestMicrophone(), j !== b.current.generation) return;
      const N = await navigator.mediaDevices.getUserMedia({
        audio: { channelCount: 1, echoCancellation: !0, noiseSuppression: !0 },
        video: !1
      });
      if (j !== b.current.generation) {
        N.getTracks().forEach((V) => V.stop());
        return;
      }
      b.current.stream = N;
      const U = new MediaRecorder(N, { mimeType: "audio/webm;codecs=opus" });
      b.current.recorder = U;
      const R = [];
      U.ondataavailable = (V) => {
        V.data.size && R.push(V.data);
      }, U.onerror = () => {
        S(), x.current.onError(
          "The microphone stopped recording. Check your input device and try again."
        );
      }, U.onstop = () => {
        j === b.current.generation && (v(), c("transcribing"), (async () => {
          const V = new AudioContext();
          try {
            const ie = await V.decodeAudioData(
              await new Blob(R, { type: U.mimeType }).arrayBuffer()
            );
            if (j !== b.current.generation) return;
            const ze = Array.from(
              { length: ie.numberOfChannels },
              (te, re) => ie.getChannelData(re)
            ), I = await window.muse.transcribeVoice(
              kE(ze, ie.sampleRate)
            );
            j === b.current.generation && x.current.onText(I);
          } catch (ie) {
            j === b.current.generation && x.current.onError(
              ie instanceof Error ? ie.message : "Voice transcription failed. Please try again."
            );
          } finally {
            await V.close(), j === b.current.generation && (w.current = !1, x.current.onBusy(!1), c("idle"));
          }
        })());
      }, U.start(250), p(0), c("recording");
      let G, K;
      try {
        const V = new AudioContext();
        b.current.meterContext = V;
        const ie = V.createMediaStreamSource(N);
        G = V.createAnalyser(), G.fftSize = 32, ie.connect(G), K = new Uint8Array(G.frequencyBinCount);
      } catch {
      }
      const A = Date.now();
      b.current.timer = setInterval(() => {
        const V = Math.floor((Date.now() - A) / 1e3);
        p(V), G && K && (G.getByteFrequencyData(K), g(
          [0, 1, 2, 3, 4].map(
            (ie) => Math.max(0.22, Math.min(1, (K[ie + 1] || 0) / 180))
          )
        )), V >= c0 - 1 && U.state === "recording" && U.stop();
      }, 120);
    } catch (N) {
      if (j !== b.current.generation) return;
      v(), w.current = !1, x.current.onBusy(!1), c("idle"), x.current.onError(
        N instanceof Error && N.name === "NotAllowedError" ? "Microphone access is off. Enable Muse Desktop in System Settings → Privacy & Security → Microphone." : N instanceof Error ? N.message : "Could not start your microphone."
      );
    }
  };
  return F.useEffect(() => {
    const j = (R) => {
      R.altKey && !R.metaKey && !R.ctrlKey && R.code === "KeyV" && !R.repeat && !document.querySelector("dialog[open]") && (R.preventDefault(), E()), R.key === "Escape" && w.current && (R.preventDefault(), S());
    }, N = () => {
      document.hidden && w.current && S();
    }, U = () => {
      E();
    };
    return window.addEventListener("keydown", j), window.addEventListener("muse:voice", U), window.addEventListener("muse:voice-cancel", S), document.addEventListener("visibilitychange", N), () => {
      window.removeEventListener("keydown", j), window.removeEventListener("muse:voice", U), window.removeEventListener("muse:voice-cancel", S), document.removeEventListener("visibilitychange", N);
    };
  }), /* @__PURE__ */ h.jsxs("div", { className: `voice-control ${s === "recording" ? "recording" : ""}`, children: [
    /* @__PURE__ */ h.jsx(
      Wt,
      {
        label: s === "recording" ? "Stop recording (⌥V)" : "Voice input (⌥V)",
        disabled: s === "transcribing" || s === "permission" || s === "idle" && t,
        active: s === "recording",
        onClick: () => {
          E();
        },
        children: s === "recording" ? /* @__PURE__ */ h.jsx(a1, { size: 15, fill: "currentColor" }) : s === "idle" ? /* @__PURE__ */ h.jsx(BS, { size: 17 }) : /* @__PURE__ */ h.jsx(ra, { size: 17, className: "spin" })
      }
    ),
    s !== "idle" && /* @__PURE__ */ h.jsxs("div", { className: "voice-status", role: "status", children: [
      s === "recording" && /* @__PURE__ */ h.jsx("span", { className: "voice-waveform", "aria-hidden": "true", children: m.map((j, N) => /* @__PURE__ */ h.jsx(
        "span",
        {
          className: "voice-wave-bar",
          style: { transform: `scaleY(${j.toFixed(2)})` }
        },
        N
      )) }),
      /* @__PURE__ */ h.jsx("span", { children: s === "recording" ? `Listening · ${Math.floor(f / 60)}:${String(f % 60).padStart(2, "0")}` : s === "transcribing" ? "Transcribing with Muse…" : "Opening microphone…" }),
      /* @__PURE__ */ h.jsx(Wt, { label: "Cancel voice input", onClick: S, children: /* @__PURE__ */ h.jsx(Sr, { size: 14 }) })
    ] })
  ] });
}
const zE = [
  "none",
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
  "ultra"
];
function _E({
  draft: t,
  setDraft: i,
  running: a,
  backgroundOnly: o,
  submitting: s,
  connected: c,
  hasProject: f,
  project: p,
  models: m,
  modelId: g,
  preferences: b,
  onModel: x,
  onEffort: w,
  onSubmit: v,
  onCancel: S,
  onError: E
}) {
  const [j, N] = F.useState(!1), [U, R] = F.useState(0), [G, K] = F.useState(0), [A, V] = F.useState([]), [ie, ze] = F.useState(!1), I = /^\/[a-z-]*$/i.test(t) ? Zd.filter((Z) => Z.name.startsWith(t.slice(1).toLowerCase())) : [], te = p ? /(?:^|\s)@([^\s@]*)$/.exec(t) : null, re = te ? te[1] : null, Ae = re && re.includes("/") ? re.slice(0, re.lastIndexOf("/")) : "", pe = re !== null ? (re.includes("/") ? re.slice(re.lastIndexOf("/") + 1) : re).toLowerCase() : "";
  F.useEffect(() => {
    if (!p || re === null) {
      V([]);
      return;
    }
    let Z = !1;
    return window.muse.listFiles(p, Ae).then((se) => {
      Z || V(se);
    }).catch(() => {
      Z || V([]);
    }), () => {
      Z = !0;
    };
  }, [p, Ae, re !== null]);
  const ee = re !== null ? A.filter((Z) => Z.name.toLowerCase().includes(pe)).slice(0, 12) : [], W = !!d1(t), ce = (Z) => {
    i(`/${Z} `), C.current?.focus();
  }, me = (Z) => {
    if (re === null) return;
    const se = t.slice(0, t.length - re.length - 1);
    i(`${se}@${Z.path}${Z.directory ? "/" : " "}`), C.current?.focus();
  };
  F.useEffect(() => {
    R(0), K(0);
  }, [t]);
  const Te = F.useRef(t);
  Te.current = t;
  const [z, qe] = F.useState([]), [ut, T] = F.useState("queue"), C = F.useRef(null);
  F.useEffect(() => {
    C.current && (C.current.style.height = "auto", C.current.style.height = `${Math.min(C.current.scrollHeight, 200)}px`);
  }, [t]);
  const J = async () => {
    j || s || !c && !W || !t.trim() && !z.length || await v(z, ut) && qe([]);
  }, le = async () => {
    try {
      const Z = await window.muse.chooseAttachments();
      if (z.length + Z.length > 5)
        throw await Promise.all(Z.map((se) => window.muse.removeAttachment(se.id))), new Error("You can attach up to five files per message.");
      qe((se) => [...se, ...Z]);
    } catch (Z) {
      E(Z instanceof Error ? Z.message : String(Z));
    }
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "composer-wrap", children: [
    I.length > 0 && /* @__PURE__ */ h.jsx(
      "div",
      {
        className: "slash-menu",
        role: "listbox",
        id: "composer-commands",
        "aria-label": "Composer commands",
        children: I.map((Z, se) => /* @__PURE__ */ h.jsxs(
          "button",
          {
            type: "button",
            role: "option",
            id: `command-${Z.name}`,
            "aria-selected": se === U,
            onMouseDown: (Se) => Se.preventDefault(),
            onClick: () => ce(Z.name),
            children: [
              /* @__PURE__ */ h.jsxs("strong", { children: [
                "/",
                Z.name
              ] }),
              /* @__PURE__ */ h.jsx("span", { children: Z.description })
            ]
          },
          Z.name
        ))
      }
    ),
    ee.length > 0 && /* @__PURE__ */ h.jsx(
      "div",
      {
        className: "slash-menu mention-menu",
        role: "listbox",
        id: "composer-mentions",
        "aria-label": "Project files",
        children: ee.map((Z, se) => /* @__PURE__ */ h.jsxs(
          "button",
          {
            type: "button",
            role: "option",
            id: `mention-${Z.path}`,
            "aria-selected": se === G,
            onMouseDown: (Se) => Se.preventDefault(),
            onClick: () => me(Z),
            children: [
              Z.directory ? /* @__PURE__ */ h.jsx(Tv, { size: 14 }) : /* @__PURE__ */ h.jsx(nl, { size: 14 }),
              /* @__PURE__ */ h.jsx("strong", { children: Z.path }),
              /* @__PURE__ */ h.jsx("span", { children: Z.directory ? "Folder" : "File" })
            ]
          },
          Z.path
        ))
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${a ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsxs("div", { className: "running-line", children: [
      /* @__PURE__ */ h.jsx("span", { className: "working-orb" }),
      /* @__PURE__ */ h.jsxs("span", { children: [
        o ? "Finishing background tasks" : "Muse is working",
        /* @__PURE__ */ h.jsx("span", { className: "animated-dots", children: "…" })
      ] }),
      /* @__PURE__ */ h.jsx("span", { className: "running-hint", children: "Send a follow-up to queue or steer." })
    ] }) }) }),
    /* @__PURE__ */ h.jsxs(
      "form",
      {
        className: `composer ${a ? "is-running" : ""} ${ie ? "is-dragging" : ""}`,
        onDragOver: (Z) => {
          Z.preventDefault(), ie || ze(!0);
        },
        onDragLeave: (Z) => {
          Z.currentTarget.contains(Z.relatedTarget) || ze(!1);
        },
        onDrop: (Z) => {
          Z.preventDefault(), ze(!1);
          const se = Array.from(Z.dataTransfer.files);
          se.length && (async () => {
            const Se = [];
            for (const Ee of se.slice(0, 5)) {
              if (Ee.size <= 120 * 1024 && !/\.(png|jpe?g|webp|gif|pdf|zip)$/i.test(Ee.name))
                try {
                  const fe = await Ee.text();
                  if (!fe.includes("\0")) {
                    Se.push(`\`\`\`${Ee.name}
${fe.trim()}
\`\`\``);
                    continue;
                  }
                } catch {
                }
              Se.push(`@${Ee.name}`);
            }
            if (Se.length) {
              const Ee = Te.current;
              i(
                `${Ee}${Ee && !/\s$/.test(Ee) ? `
` : ""}${Se.join(`
`)}
`
              ), C.current?.focus();
            }
          })();
        },
        onSubmit: (Z) => {
          Z.preventDefault(), J();
        },
        children: [
          z.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "attachment-list", children: z.map((Z) => /* @__PURE__ */ h.jsxs("span", { className: "attachment", children: [
            Z.kind === "image" ? /* @__PURE__ */ h.jsx(US, { size: 14 }) : /* @__PURE__ */ h.jsx(Sv, { size: 14 }),
            /* @__PURE__ */ h.jsx("span", { children: Z.name }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                "aria-label": `Remove ${Z.name}`,
                onClick: () => {
                  window.muse.removeAttachment(Z.id).catch((se) => E(se.message)), qe((se) => se.filter((Se) => Se.id !== Z.id));
                },
                children: /* @__PURE__ */ h.jsx(Sr, { size: 12 })
              }
            )
          ] }, Z.id)) }),
          /* @__PURE__ */ h.jsx(
            "textarea",
            {
              ref: C,
              "aria-label": "Message Muse",
              "aria-controls": I.length ? "composer-commands" : void 0,
              "aria-activedescendant": I[U] ? `command-${I[U].name}` : void 0,
              placeholder: f ? "Ask Muse about your project…" : "Ask Muse anything…",
              value: t,
              onChange: (Z) => i(Z.target.value),
              rows: 2,
              spellCheck: !0,
              onKeyDown: (Z) => {
                if (I.length && !Z.nativeEvent.isComposing) {
                  if (Z.key === "ArrowDown" || Z.key === "ArrowUp") {
                    Z.preventDefault();
                    const se = (U + (Z.key === "ArrowDown" ? 1 : -1) + I.length) % I.length;
                    R(se), document.getElementById(`command-${I[se].name}`)?.scrollIntoView({ block: "nearest" });
                    return;
                  }
                  if (Z.key === "Tab" || Z.key === "Enter" && !Z.shiftKey && !Zd.some((se) => `/${se.name}` === t.toLowerCase())) {
                    Z.preventDefault(), ce(I[U].name);
                    return;
                  }
                  if (Z.key === "Escape") {
                    Z.preventDefault(), i(`${t} `);
                    return;
                  }
                }
                if (ee.length && !Z.nativeEvent.isComposing) {
                  if (Z.key === "ArrowDown" || Z.key === "ArrowUp") {
                    Z.preventDefault();
                    const se = (G + (Z.key === "ArrowDown" ? 1 : -1) + ee.length) % ee.length;
                    K(se), document.getElementById(`mention-${ee[se].path}`)?.scrollIntoView({ block: "nearest" });
                    return;
                  }
                  if (Z.key === "Tab" || Z.key === "Enter" && !Z.shiftKey) {
                    Z.preventDefault(), me(ee[G]);
                    return;
                  }
                  if (Z.key === "Escape") {
                    Z.preventDefault(), V([]);
                    return;
                  }
                }
                Z.key === "Enter" && !Z.shiftKey && !Z.nativeEvent.isComposing && (Z.preventDefault(), J());
              }
            }
          ),
          /* @__PURE__ */ h.jsxs("div", { className: "composer-toolbar", children: [
            /* @__PURE__ */ h.jsxs("div", { className: "composer-tools", children: [
              /* @__PURE__ */ h.jsx(
                Wt,
                {
                  label: "Attach images or text files",
                  disabled: s,
                  onClick: () => {
                    le();
                  },
                  children: /* @__PURE__ */ h.jsx(qS, { size: 17 })
                }
              ),
              /* @__PURE__ */ h.jsx("span", { className: "toolbar-divider" }),
              /* @__PURE__ */ h.jsx(
                SE,
                {
                  disabled: s || !c,
                  onBusy: N,
                  onError: E,
                  onText: (Z) => {
                    const se = Te.current;
                    i(`${se}${se && !/\s$/.test(se) ? " " : ""}${Z}`), C.current?.focus();
                  }
                }
              ),
              /* @__PURE__ */ h.jsx(
                ou,
                {
                  label: "Model",
                  className: "model-select",
                  value: g,
                  disabled: s || m.length === 0,
                  onChange: x,
                  icon: /* @__PURE__ */ h.jsx("span", { className: "model-spark", children: "✳" }),
                  options: [
                    ...m.some((Z) => Z.modelId === g) ? [] : [{ value: g, label: g || "CLI default" }],
                    ...m.map((Z) => ({
                      value: Z.modelId,
                      label: Z.displayLabel || Z.modelId
                    }))
                  ]
                }
              ),
              /* @__PURE__ */ h.jsx(
                ou,
                {
                  label: "Reasoning effort",
                  className: "effort-select",
                  value: b.reasoningEffort,
                  onChange: (Z) => w(Z),
                  icon: /* @__PURE__ */ h.jsx(ES, { size: 15, className: "effort-icon" }),
                  options: zE.map((Z) => ({
                    value: Z,
                    label: Z === "xhigh" ? "Extra high" : Z[0].toUpperCase() + Z.slice(1)
                  }))
                }
              )
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "composer-actions", children: [
              a && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
                /* @__PURE__ */ h.jsx(
                  ou,
                  {
                    label: "Follow-up behavior",
                    value: ut,
                    onChange: (Z) => T(Z),
                    options: [
                      { value: "queue", label: "Queue next" },
                      { value: "steer", label: "Steer now" }
                    ]
                  }
                ),
                /* @__PURE__ */ h.jsx(Wt, { label: "Stop Muse", onClick: S, children: /* @__PURE__ */ h.jsx(a1, { size: 14, fill: "currentColor" }) })
              ] }),
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  className: "send-button",
                  type: "submit",
                  "aria-label": a ? "Send follow-up" : "Send message",
                  disabled: j || s || !c && !W || !t.trim() && !z.length,
                  children: s ? /* @__PURE__ */ h.jsx("span", { className: "spinner" }) : /* @__PURE__ */ h.jsx(jS, { size: 19, strokeWidth: 2.2 })
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ h.jsxs("div", { className: "composer-footnote", children: [
      /* @__PURE__ */ h.jsx("span", { children: f ? "" : "Select a project when you send your first message." }),
      /* @__PURE__ */ h.jsxs("span", { className: "composer-shortcuts", children: [
        /* @__PURE__ */ h.jsxs("span", { className: "composer-shortcut", children: [
          /* @__PURE__ */ h.jsx("kbd", { children: "↵" }),
          /* @__PURE__ */ h.jsx("span", { children: "Send" })
        ] }),
        /* @__PURE__ */ h.jsx("span", { className: "footnote-dot", "aria-hidden": "true", children: "·" }),
        /* @__PURE__ */ h.jsxs("span", { className: "composer-shortcut", children: [
          /* @__PURE__ */ h.jsx("kbd", { children: "⇧" }),
          /* @__PURE__ */ h.jsx("kbd", { children: "↵" }),
          /* @__PURE__ */ h.jsx("span", { children: "New line" })
        ] })
      ] })
    ] })
  ] });
}
function jE({
  platform: t = "darwin",
  sessions: i,
  onSession: a,
  onNew: o,
  onOpen: s,
  onSettings: c,
  onTheme: f,
  onClose: p
}) {
  const [m, g] = F.useState(""), [b, x] = F.useState(0), w = t === "darwin" ? "⌘" : "Ctrl", v = [
    {
      id: "new",
      group: "Actions",
      title: "New conversation",
      subtitle: "Start a conversation",
      icon: vo,
      shortcut: `${w} N`,
      action: o
    },
    {
      id: "open",
      group: "Actions",
      title: "Open project",
      subtitle: t === "darwin" ? "Choose a folder on your Mac" : "Choose a project folder",
      icon: kr,
      shortcut: `${w} O`,
      action: s
    },
    {
      id: "settings",
      group: "Actions",
      title: "Open settings",
      subtitle: "Appearance and Muse Code connection",
      icon: e1,
      shortcut: `${w} ,`,
      action: c
    },
    ...i.map((E) => ({
      id: E.sessionId,
      group: "Recent conversations",
      title: ea(E),
      subtitle: E.workspaceRoot ? Zi(E.workspaceRoot) : "Conversation",
      icon: lu,
      shortcut: "",
      action: () => a(E.sessionId)
    })),
    {
      id: "muse",
      group: "Themes",
      title: "Switch to Muse",
      subtitle: "Electric blue",
      icon: dp,
      shortcut: "",
      action: () => f("muse")
    },
    {
      id: "daylight",
      group: "Themes",
      title: "Switch to Daylight",
      subtitle: "Warm and light",
      icon: o1,
      shortcut: "",
      action: () => f("daylight")
    },
    {
      id: "moonlight",
      group: "Themes",
      title: "Switch to Moonlight",
      subtitle: "Soft and dark",
      icon: $v,
      shortcut: "",
      action: () => f("moonlight")
    },
    {
      id: "grove",
      group: "Themes",
      title: "Switch to Grove",
      subtitle: "Natural green",
      icon: Lv,
      shortcut: "",
      action: () => f("grove")
    },
    {
      id: "plush",
      group: "Themes",
      title: "Switch to Plush",
      subtitle: "Blue mascot close-up",
      icon: vv,
      shortcut: "",
      action: () => f("plush")
    }
  ].filter(
    (E) => `${E.title} ${E.subtitle}`.toLowerCase().includes(m.toLowerCase())
  ).slice(0, 30);
  F.useEffect(() => {
    const E = v[b];
    E && document.getElementById(`cmd-item-${E.id}`)?.scrollIntoView({ block: "nearest" });
  }, [b, v]);
  const S = (E) => {
    const j = v[E];
    j && (p(), j.action());
  };
  return /* @__PURE__ */ h.jsxs(jp, { title: "Search", onClose: p, className: "command-dialog", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "command-search", children: [
      /* @__PURE__ */ h.jsx(fu, { size: 19 }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          autoFocus: !0,
          value: m,
          "aria-label": "Search commands and conversations",
          placeholder: "Search commands and conversations…",
          onChange: (E) => {
            g(E.target.value), x(0);
          },
          onKeyDown: (E) => {
            E.key === "ArrowDown" && (E.preventDefault(), x((j) => Math.min(j + 1, v.length - 1))), E.key === "ArrowUp" && (E.preventDefault(), x((j) => Math.max(0, j - 1))), E.key === "Enter" && (E.preventDefault(), S(b));
          }
        }
      )
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "command-results", children: [
      v.map((E, j) => /* @__PURE__ */ h.jsxs(F.Fragment, { children: [
        (j === 0 || v[j - 1].group !== E.group) && /* @__PURE__ */ h.jsx("div", { className: "command-group-heading", children: E.group }),
        /* @__PURE__ */ h.jsxs(
          "button",
          {
            id: `cmd-item-${E.id}`,
            className: j === b ? "selected" : "",
            onClick: () => S(j),
            onMouseEnter: () => x(j),
            children: [
              /* @__PURE__ */ h.jsx(E.icon, { size: 17 }),
              /* @__PURE__ */ h.jsxs("span", { children: [
                /* @__PURE__ */ h.jsx("strong", { children: E.title }),
                /* @__PURE__ */ h.jsx("small", { children: E.subtitle })
              ] }),
              E.shortcut ? /* @__PURE__ */ h.jsx("kbd", { children: E.shortcut }) : /* @__PURE__ */ h.jsx(wr, { size: 14 })
            ]
          }
        )
      ] }, E.id)),
      !v.length && /* @__PURE__ */ h.jsx("div", { className: "command-empty", children: "No matches. Try a project or conversation name." })
    ] }),
    /* @__PURE__ */ h.jsxs("footer", { children: [
      /* @__PURE__ */ h.jsxs("span", { children: [
        /* @__PURE__ */ h.jsx("kbd", { children: "↑" }),
        /* @__PURE__ */ h.jsx("kbd", { children: "↓" }),
        " Navigate"
      ] }),
      /* @__PURE__ */ h.jsxs("span", { children: [
        /* @__PURE__ */ h.jsx("kbd", { children: "↵" }),
        " Open"
      ] }),
      /* @__PURE__ */ h.jsxs("span", { children: [
        /* @__PURE__ */ h.jsx("kbd", { children: "esc" }),
        " Close"
      ] })
    ] })
  ] });
}
function EE(t) {
  let i = 0, a = 0;
  return t.split(`
`).map((o) => {
    const s = /^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/.exec(o);
    if (s)
      return i = Number(s[1]), a = Number(s[2]), { kind: "hunk", oldNum: "", newNum: "", text: o };
    if (o.startsWith("---") || o.startsWith("+++") || o.startsWith("diff ") || o.startsWith("index "))
      return { kind: "meta", oldNum: "", newNum: "", text: o };
    if (o.startsWith("+"))
      return { kind: "added", oldNum: "", newNum: a ? String(a++) : "", text: o };
    if (o.startsWith("-"))
      return { kind: "removed", oldNum: i ? String(i++) : "", newNum: "", text: o };
    const c = i ? String(i++) : "", f = a ? String(a++) : "";
    return { kind: "context", oldNum: c, newNum: f, text: o };
  });
}
function CE({
  open: t = !0,
  project: i,
  platform: a = "darwin",
  view: o,
  onClose: s,
  onMentionDiff: c,
  onError: f
}) {
  const [p, m] = F.useState("changes"), [g, b] = F.useState(), [x, w] = F.useState(!1), [v, S] = F.useState(""), [E, j] = F.useState(""), [N, U] = F.useState(""), [R, G] = F.useState(0);
  F.useEffect(() => {
    if (!t) return;
    let A = !1;
    if (b(void 0), j(""), U(""), !!i)
      return w(!0), S(""), window.muse.gitStatus(i).then((V) => {
        A || b(V);
      }).catch((V) => {
        A || S(V.message);
      }).finally(() => {
        A || w(!1);
      }), () => {
        A = !0;
      };
  }, [t, i, o?.session.status, R]), F.useEffect(() => {
    if (!t || !E) return;
    let A = !1;
    return U("Loading diff…"), window.muse.gitDiff(i, E).then((V) => {
      A || U(V);
    }).catch((V) => {
      A || (U(V.message), f(V.message));
    }), () => {
      A = !0;
    };
  }, [t, i, E, f]);
  const K = o?.items.filter(
    (A) => !A.retracted && !["userMessage", "agentMessage", "reasoning"].includes(A.kind)
  ) || [];
  return /* @__PURE__ */ h.jsxs(
    "aside",
    {
      className: "inspector",
      "aria-label": "Project inspector",
      "aria-hidden": !t || void 0,
      inert: t ? void 0 : !0,
      children: [
        /* @__PURE__ */ h.jsxs("header", { children: [
          /* @__PURE__ */ h.jsx("span", { children: "Project inspector" }),
          /* @__PURE__ */ h.jsx(Wt, { label: "Close inspector", onClick: s, children: /* @__PURE__ */ h.jsx(Sr, { size: 16 }) })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "inspector-project", children: [
          /* @__PURE__ */ h.jsx("span", { className: "project-icon", children: /* @__PURE__ */ h.jsx(kr, { size: 20 }) }),
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("strong", { children: i ? Zi(i) : "No project selected" }),
            /* @__PURE__ */ h.jsx("span", { children: g?.branch ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
              /* @__PURE__ */ h.jsx(Av, { size: 11 }),
              g.branch
            ] }) : "Local project" })
          ] })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "inspector-tabs", role: "tablist", "aria-label": "Inspector view", children: [
          /* @__PURE__ */ h.jsxs("button", { role: "tab", "aria-selected": p === "changes", onClick: () => m("changes"), children: [
            "Changes",
            !!g?.changes.length && /* @__PURE__ */ h.jsx("span", { children: g?.changes.length })
          ] }),
          /* @__PURE__ */ h.jsxs("button", { role: "tab", "aria-selected": p === "activity", onClick: () => m("activity"), children: [
            "Activity",
            K.length > 0 && /* @__PURE__ */ h.jsx("span", { children: K.length })
          ] }),
          /* @__PURE__ */ h.jsx(
            Wt,
            {
              label: "Refresh changes",
              disabled: x || !i,
              onClick: () => G((A) => A + 1),
              children: /* @__PURE__ */ h.jsx(Pv, { size: 13, className: x ? "spin" : "" })
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "inspector-body", children: [
          p === "changes" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            v && /* @__PURE__ */ h.jsx("p", { className: "inline-error", children: v }),
            E ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
              /* @__PURE__ */ h.jsxs("div", { className: "diff-header", children: [
                /* @__PURE__ */ h.jsxs("button", { className: "diff-back", onClick: () => j(""), children: [
                  /* @__PURE__ */ h.jsx(CS, { size: 13 }),
                  /* @__PURE__ */ h.jsx("span", { children: E })
                ] }),
                c && /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "diff-ask-button",
                    onClick: () => c(E),
                    children: [
                      "Ask Muse ",
                      /* @__PURE__ */ h.jsx(wr, { size: 11 })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ h.jsx("pre", { className: "diff-view", children: EE(N).map((A, V) => /* @__PURE__ */ h.jsxs(
                "span",
                {
                  className: A.kind === "added" ? "added" : A.kind === "removed" ? "removed" : A.kind === "hunk" ? "hunk" : A.kind === "meta" ? "meta" : "",
                  children: [
                    /* @__PURE__ */ h.jsx("span", { className: "diff-gutter", "aria-hidden": "true", children: A.newNum || A.oldNum || " " }),
                    A.text || " ",
                    /* @__PURE__ */ h.jsx("br", {})
                  ]
                },
                V
              )) })
            ] }) : /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
              g?.changes.map((A) => {
                const V = A.path.replaceAll("\\", "/");
                return /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    className: "changed-file",
                    onClick: () => j(A.path),
                    children: [
                      /* @__PURE__ */ h.jsx(nl, { size: 15 }),
                      /* @__PURE__ */ h.jsxs("span", { children: [
                        /* @__PURE__ */ h.jsx("strong", { children: V.split("/").at(-1) }),
                        /* @__PURE__ */ h.jsx("small", { children: V.includes("/") ? V.slice(0, V.lastIndexOf("/")) : "Project root" })
                      ] }),
                      /* @__PURE__ */ h.jsx("b", { className: A.status.includes("D") ? "deleted" : "", children: A.status === "??" ? "U" : A.status }),
                      /* @__PURE__ */ h.jsx(vi, { size: 12 })
                    ]
                  },
                  A.path
                );
              }),
              !x && !g?.changes.length && !v && /* @__PURE__ */ h.jsxs("div", { className: "inspector-empty", children: [
                /* @__PURE__ */ h.jsx("span", { className: "empty-glyph", children: /* @__PURE__ */ h.jsx(Nn, { size: 22, strokeWidth: 1.4 }) }),
                /* @__PURE__ */ h.jsx("h3", { children: i ? g?.isRepository ? "No changes" : "No Git repository" : "Open a project" }),
                /* @__PURE__ */ h.jsx("p", { children: i ? g?.isRepository ? "Your working tree has no changes." : "This folder isn’t a Git repository. Muse can still work with its files." : "Open a project and its changes will appear here." })
              ] }),
              x && !g && /* @__PURE__ */ h.jsxs("div", { className: "inspector-empty", children: [
                /* @__PURE__ */ h.jsx(ra, { className: "spin", size: 20 }),
                /* @__PURE__ */ h.jsx("p", { children: "Reading your workspace…" })
              ] })
            ] })
          ] }),
          p === "activity" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            K.map((A) => /* @__PURE__ */ h.jsxs("div", { className: "activity-entry", children: [
              /* @__PURE__ */ h.jsx("span", { children: A.status === "inProgress" ? /* @__PURE__ */ h.jsx(ra, { size: 14, className: "spin" }) : A.status === "completed" ? /* @__PURE__ */ h.jsx(Nn, { size: 14 }) : /* @__PURE__ */ h.jsx(Sr, { size: 14 }) }),
              /* @__PURE__ */ h.jsxs("div", { children: [
                /* @__PURE__ */ h.jsx("strong", { children: XS(A) }),
                /* @__PURE__ */ h.jsx("p", { children: A.kind === "reminderChild" ? `${A.blocking ? "Keeps the turn open · " : ""}${A.status === "inProgress" ? "Running" : A.status}` : A.statusLine || A.objective || A.fallbackText || A.status })
              ] })
            ] }, A.itemId)),
            !K.length && /* @__PURE__ */ h.jsxs("div", { className: "inspector-empty", children: [
              /* @__PURE__ */ h.jsx("span", { className: "empty-glyph", children: /* @__PURE__ */ h.jsx(du, { size: 22, strokeWidth: 1.4 }) }),
              /* @__PURE__ */ h.jsx("h3", { children: "No activity yet" }),
              /* @__PURE__ */ h.jsx("p", { children: "Tool calls, file edits, and agent activity appear here." })
            ] })
          ] })
        ] }),
        o?.usage && /* @__PURE__ */ h.jsxs("div", { className: "usage-panel", children: [
          /* @__PURE__ */ h.jsx("span", { className: "eyebrow", children: "SESSION USAGE" }),
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { children: "Input" }),
            /* @__PURE__ */ h.jsx("strong", { children: o.usage.input.toLocaleString() })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { children: "Output" }),
            /* @__PURE__ */ h.jsx("strong", { children: o.usage.output.toLocaleString() })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { children: "Total tokens" }),
            /* @__PURE__ */ h.jsx("strong", { children: o.usage.total.toLocaleString() })
          ] })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "inspector-footer", children: [
          /* @__PURE__ */ h.jsxs(
            "button",
            {
              disabled: !i,
              onClick: () => {
                window.muse.revealProject(i).catch((A) => f(A.message));
              },
              children: [
                /* @__PURE__ */ h.jsx(kr, { size: 14 }),
                a === "win32" ? "Explorer" : a === "linux" ? "Files" : "Finder"
              ]
            }
          ),
          /* @__PURE__ */ h.jsxs(
            "button",
            {
              disabled: !i,
              onClick: () => {
                window.muse.openTerminal(i).catch((A) => f(A.message));
              },
              children: [
                /* @__PURE__ */ h.jsx(du, { size: 14 }),
                "Terminal"
              ]
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              disabled: !i,
              onClick: () => {
                window.muse.openCli(i).catch((A) => f(A.message));
              },
              children: "Muse Code"
            }
          )
        ] })
      ]
    }
  );
}
const f0 = [
  { id: "muse", label: "Muse", description: "Electric blue", icon: dp },
  { id: "daylight", label: "Daylight", description: "Warm and light", icon: o1 },
  { id: "moonlight", label: "Moonlight", description: "Soft and dark", icon: $v },
  { id: "grove", label: "Grove", description: "Natural green", icon: Lv },
  { id: "plush", label: "Plush", description: "A playful close-up", icon: vv }
];
function TE({
  preferences: t,
  status: i,
  version: a,
  platform: o = "darwin",
  onSave: s,
  onClose: c,
  onError: f,
  onReconnect: p,
  initialTab: m
}) {
  const [g, b] = F.useState(m), [x, w] = F.useState(t.cliPath);
  return /* @__PURE__ */ h.jsx(jp, { title: "Settings", onClose: c, className: "settings-dialog", children: /* @__PURE__ */ h.jsxs("div", { className: "settings-layout", children: [
    /* @__PURE__ */ h.jsxs("nav", { className: "settings-nav", "aria-label": "Settings sections", children: [
      /* @__PURE__ */ h.jsxs(
        "button",
        {
          className: g === "appearance" ? "selected" : "",
          onClick: () => b("appearance"),
          children: [
            /* @__PURE__ */ h.jsx(dp, { size: 16 }),
            "Appearance"
          ]
        }
      ),
      /* @__PURE__ */ h.jsxs(
        "button",
        {
          className: g === "connection" ? "selected" : "",
          onClick: () => b("connection"),
          children: [
            /* @__PURE__ */ h.jsx(du, { size: 16 }),
            "Muse Code"
          ]
        }
      ),
      /* @__PURE__ */ h.jsxs("button", { className: g === "about" ? "selected" : "", onClick: () => b("about"), children: [
        /* @__PURE__ */ h.jsx(go, { size: 16 }),
        "About"
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "settings-content", children: [
      g === "appearance" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsxs("div", { className: "settings-section-heading", children: [
          /* @__PURE__ */ h.jsx("h3", { children: "Appearance" }),
          /* @__PURE__ */ h.jsx("p", { children: "Choose a theme and adjust your workspace." })
        ] }),
        /* @__PURE__ */ h.jsx("div", { className: "theme-grid", children: f0.map((v) => /* @__PURE__ */ h.jsxs(
          "button",
          {
            className: `theme-card ${t.theme === v.id ? "selected" : ""}`,
            onClick: () => s({ theme: v.id }),
            "aria-pressed": t.theme === v.id,
            children: [
              /* @__PURE__ */ h.jsxs(
                "div",
                {
                  className: `theme-thumbnail ${v.id === "muse" ? "muse-thumbnail" : ""}`,
                  children: [
                    /* @__PURE__ */ h.jsx(
                      "img",
                      {
                        src: v.id === "muse" ? "./muse-logo.png" : `./themes/${v.id}.png`,
                        alt: `${v.label} background`
                      }
                    ),
                    t.theme === v.id && /* @__PURE__ */ h.jsx("span", { className: "theme-check", children: /* @__PURE__ */ h.jsx(Nn, { size: 13 }) })
                  ]
                }
              ),
              /* @__PURE__ */ h.jsxs("span", { className: "theme-name", children: [
                /* @__PURE__ */ h.jsx(v.icon, { size: 14 }),
                v.label
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "theme-description", children: v.description })
            ]
          },
          v.id
        )) }),
        /* @__PURE__ */ h.jsxs("label", { className: "setting-row", children: [
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsxs("span", { className: "setting-label", children: [
              /* @__PURE__ */ h.jsx(IS, { size: 16 }),
              o === "darwin" ? "Follow macOS appearance" : "Follow system appearance"
            ] }),
            /* @__PURE__ */ h.jsx("small", { children: "Use Daylight in light mode and Moonlight in dark mode." })
          ] }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              className: "switch",
              type: "checkbox",
              checked: t.theme === "system",
              onChange: (v) => s({ theme: v.target.checked ? "system" : "daylight" })
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "setting-row", children: [
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { className: "setting-label", children: "Background intensity" }),
            /* @__PURE__ */ h.jsx("small", { children: "Adjust the visibility of the logo and illustrations." })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "range-setting", children: [
            /* @__PURE__ */ h.jsx(
              "input",
              {
                type: "range",
                min: "0",
                max: "100",
                step: "5",
                "aria-label": "Background intensity",
                value: t.backgroundIntensity,
                onChange: (v) => s({ backgroundIntensity: Number(v.target.value) })
              }
            ),
            /* @__PURE__ */ h.jsxs("span", { children: [
              t.backgroundIntensity,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "setting-row", children: [
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { className: "setting-label", children: "Text size" }),
            /* @__PURE__ */ h.jsx("small", { children: "Adjust the size of conversation text." })
          ] }),
          /* @__PURE__ */ h.jsx("div", { className: "segmented", children: ["compact", "comfortable", "large"].map((v, S) => /* @__PURE__ */ h.jsx(
            "button",
            {
              "aria-label": `${v} text`,
              "aria-pressed": t.fontSize === v,
              className: t.fontSize === v ? "selected" : "",
              onClick: () => s({ fontSize: v }),
              style: { fontSize: 14 + S * 2 },
              children: "A"
            },
            v
          )) })
        ] }),
        /* @__PURE__ */ h.jsxs("label", { className: "setting-row", children: [
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { className: "setting-label", children: "Reduce motion" }),
            /* @__PURE__ */ h.jsx("small", { children: "Reduce transitions and animations." })
          ] }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              type: "checkbox",
              className: "switch",
              checked: t.reduceMotion,
              onChange: (v) => s({ reduceMotion: v.target.checked })
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("label", { className: "setting-row", children: [
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { className: "setting-label", children: "Completion notifications" }),
            /* @__PURE__ */ h.jsx("small", { children: "Show a notification when a turn finishes in the background." })
          ] }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              type: "checkbox",
              className: "switch",
              checked: t.notifyOnCompletion,
              onChange: (v) => s({ notifyOnCompletion: v.target.checked })
            }
          )
        ] })
      ] }),
      g === "connection" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsxs("div", { className: "settings-section-heading", children: [
          /* @__PURE__ */ h.jsx("h3", { children: "Muse Code connection" }),
          /* @__PURE__ */ h.jsx("p", { children: "Muse Desktop runs your installed CLI and uses its existing sign-in, models, and saved conversations." })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: `connection-card ${i.state}`, children: [
          /* @__PURE__ */ h.jsx(TS, { size: 20 }),
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("strong", { children: i.state === "ready" ? "Muse Code is connected" : i.state === "connecting" ? "Connecting to Muse Code…" : "Muse Code is disconnected" }),
            /* @__PURE__ */ h.jsx("span", { children: i.version ? `Version ${i.version}` : i.message })
          ] }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "icon-button",
              "aria-label": "Reconnect to Muse Code",
              onClick: p,
              children: /* @__PURE__ */ h.jsx(Pv, { size: 16 })
            }
          )
        ] }),
        i.path && /* @__PURE__ */ h.jsx("p", { className: "path-readout", children: i.path }),
        i.fingerprintWarning && /* @__PURE__ */ h.jsx("p", { className: "inline-notice", children: i.fingerprintWarning }),
        /* @__PURE__ */ h.jsx("label", { className: "field-label", htmlFor: "cli-path", children: "Custom executable path" }),
        /* @__PURE__ */ h.jsxs("div", { className: "input-with-button", children: [
          /* @__PURE__ */ h.jsx(
            "input",
            {
              id: "cli-path",
              className: "text-input",
              placeholder: "Automatic detection (recommended)",
              value: x,
              onChange: (v) => w(v.target.value)
            }
          ),
          /* @__PURE__ */ h.jsxs(
            "button",
            {
              className: "button secondary",
              onClick: () => {
                window.muse.chooseCli().then((v) => {
                  v && w(v);
                }).catch((v) => f(v.message));
              },
              children: [
                /* @__PURE__ */ h.jsx(LS, { size: 15 }),
                "Browse"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ h.jsx("p", { className: "field-hint", children: "Leave empty to find Muse through your login shell and standard installation locations." }),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            className: "button primary",
            onClick: async () => {
              try {
                await window.muse.savePreferences({ cliPath: x.trim() }), p();
              } catch (v) {
                f(v instanceof Error ? v.message : String(v));
              }
            },
            children: "Save & reconnect"
          }
        ),
        /* @__PURE__ */ h.jsxs("div", { className: "setup-instructions", children: [
          /* @__PURE__ */ h.jsx("h4", { children: "New to Muse Code?" }),
          /* @__PURE__ */ h.jsxs("p", { children: [
            "Install Muse Code using the official instructions, then run",
            " ",
            /* @__PURE__ */ h.jsx("code", { children: "muse login" }),
            " in Terminal. Your credentials stay with the CLI."
          ] }),
          /* @__PURE__ */ h.jsxs(
            "button",
            {
              className: "text-button",
              onClick: () => {
                window.muse.openExternal("https://dev.meta.ai/docs/muse-code").catch((v) => f(v.message));
              },
              children: [
                "Open installation guide ",
                /* @__PURE__ */ h.jsx(Hd, { size: 13 })
              ]
            }
          )
        ] })
      ] }),
      g === "about" && /* @__PURE__ */ h.jsxs("div", { className: "about-settings", children: [
        /* @__PURE__ */ h.jsx("img", { src: "./icon.png", alt: "Muse Desktop mascot" }),
        /* @__PURE__ */ h.jsx("h3", { children: "Muse Desktop" }),
        /* @__PURE__ */ h.jsxs("span", { className: "version-pill", children: [
          "Version ",
          a
        ] }),
        /* @__PURE__ */ h.jsx("p", { children: "An unofficial, open-source companion for Muse Code by Robert Courson." }),
        /* @__PURE__ */ h.jsx(NE, { platform: o, onError: f }),
        /* @__PURE__ */ h.jsxs("div", { className: "about-facts", children: [
          /* @__PURE__ */ h.jsxs("span", { children: [
            o === "win32" ? "Built for Windows" : o === "linux" ? "Built for Linux" : "Built for macOS",
            " ",
            /* @__PURE__ */ h.jsx(Nn, { size: 13 })
          ] }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            "Your CLI, your credentials ",
            /* @__PURE__ */ h.jsx(Nn, { size: 13 })
          ] }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            "No desktop telemetry ",
            /* @__PURE__ */ h.jsx(Nn, { size: 13 })
          ] }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            "MIT licensed source ",
            /* @__PURE__ */ h.jsx(Nn, { size: 13 })
          ] })
        ] }),
        /* @__PURE__ */ h.jsx("p", { className: "affiliation-note", children: "Unofficial community software. Not affiliated with, endorsed by, sponsored by, or supported by Meta. Muse Code is a product of Meta. Model requests and tools are handled by your installed CLI under its own settings." }),
        /* @__PURE__ */ h.jsxs(
          "button",
          {
            className: "text-button",
            onClick: () => {
              window.muse.openExternal("https://github.com/robzilla1738/muse-desktop").catch((v) => f(v.message));
            },
            children: [
              "Source & issue tracker ",
              /* @__PURE__ */ h.jsx(Hd, { size: 13 })
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(
          "button",
          {
            className: "text-button",
            onClick: () => {
              window.muse.openExternal("https://meta-models.github.io/muse-code-sdk/").catch((v) => f(v.message));
            },
            children: [
              "Built with the official Muse SDK ",
              /* @__PURE__ */ h.jsx(vi, { size: 13 })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function NE({
  platform: t = "darwin",
  onError: i
}) {
  const [a, o] = F.useState();
  return F.useEffect(() => {
    let s = !0;
    const c = () => {
      window.muse.updateStatus().then((p) => {
        s && o(p);
      }).catch((p) => {
        s && o({
          available: !1,
          canCheck: !1,
          automaticChecks: !1,
          message: p.message
        });
      });
    };
    c();
    const f = window.setInterval(c, 2e3);
    return () => {
      s = !1, window.clearInterval(f);
    };
  }, []), /* @__PURE__ */ h.jsxs("section", { className: "update-settings", "aria-label": "Software updates", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "setting-row", children: [
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { className: "setting-label", children: "Software updates" }),
        /* @__PURE__ */ h.jsx("small", { children: t === "darwin" ? "Signed updates via Sparkle. You choose when to install." : "Updates via GitHub Releases. You choose when to install." })
      ] }),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          className: "button secondary",
          disabled: !a?.canCheck,
          onClick: () => {
            window.muse.checkForUpdates().then(o).catch((s) => i(s.message));
          },
          children: "Check for updates"
        }
      )
    ] }),
    a?.available && /* @__PURE__ */ h.jsxs("label", { className: "setting-row", children: [
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { className: "setting-label", children: "Check automatically" }),
        /* @__PURE__ */ h.jsx("small", { children: "Check GitHub daily for new releases." })
      ] }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          className: "switch",
          type: "checkbox",
          checked: a.automaticChecks,
          onChange: (s) => {
            window.muse.setAutomaticUpdateChecks(s.target.checked).then(o).catch((c) => i(c.message));
          }
        }
      )
    ] }),
    a?.message && /* @__PURE__ */ h.jsx("p", { className: "field-hint", children: a.message })
  ] });
}
function AE(t, i) {
  const a = {};
  return (t[t.length - 1] === "" ? [...t, ""] : t).join(
    (a.padRight ? " " : "") + "," + (a.padLeft === !1 ? "" : " ")
  ).trim();
}
const OE = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ME = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, DE = {};
function oy(t, i) {
  return (DE.jsx ? ME : OE).test(t);
}
const RE = /[ \t\n\f\r]/g;
function LE(t) {
  return typeof t == "object" ? t.type === "text" ? sy(t.value) : !1 : sy(t);
}
function sy(t) {
  return t.replace(RE, "") === "";
}
class _o {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(i, a, o) {
    this.normal = a, this.property = i, o && (this.space = o);
  }
}
_o.prototype.normal = {};
_o.prototype.property = {};
_o.prototype.space = void 0;
function d0(t, i) {
  const a = {}, o = {};
  for (const s of t)
    Object.assign(a, s.property), Object.assign(o, s.normal);
  return new _o(a, o, i);
}
function Pd(t) {
  return t.toLowerCase();
}
class vn {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(i, a) {
    this.attribute = a, this.property = i;
  }
}
vn.prototype.attribute = "";
vn.prototype.booleanish = !1;
vn.prototype.boolean = !1;
vn.prototype.commaOrSpaceSeparated = !1;
vn.prototype.commaSeparated = !1;
vn.prototype.defined = !1;
vn.prototype.mustUseProperty = !1;
vn.prototype.number = !1;
vn.prototype.overloadedBoolean = !1;
vn.prototype.property = "";
vn.prototype.spaceSeparated = !1;
vn.prototype.space = void 0;
let UE = 0;
const De = sa(), Ot = sa(), Jd = sa(), ne = sa(), it = sa(), ia = sa(), Tn = sa();
function sa() {
  return 2 ** ++UE;
}
const Wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: De,
  booleanish: Ot,
  commaOrSpaceSeparated: Tn,
  commaSeparated: ia,
  number: ne,
  overloadedBoolean: Jd,
  spaceSeparated: it
}, Symbol.toStringTag, { value: "Module" })), kd = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Wd)
);
class Ep extends vn {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(i, a, o, s) {
    let c = -1;
    if (super(i, a), uy(this, "space", s), typeof o == "number")
      for (; ++c < kd.length; ) {
        const f = kd[c];
        uy(this, kd[c], (o & Wd[f]) === Wd[f]);
      }
  }
}
Ep.prototype.defined = !0;
function uy(t, i, a) {
  a && (t[i] = a);
}
function sl(t) {
  const i = {}, a = {};
  for (const [o, s] of Object.entries(t.properties)) {
    const c = new Ep(
      o,
      t.transform(t.attributes || {}, o),
      s,
      t.space
    );
    t.mustUseProperty && t.mustUseProperty.includes(o) && (c.mustUseProperty = !0), i[o] = c, a[Pd(o)] = o, a[Pd(c.attribute)] = o;
  }
  return new _o(i, a, t.space);
}
const p0 = sl({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Ot,
    ariaAutoComplete: null,
    ariaBusy: Ot,
    ariaChecked: Ot,
    ariaColCount: ne,
    ariaColIndex: ne,
    ariaColSpan: ne,
    ariaControls: it,
    ariaCurrent: null,
    ariaDescribedBy: it,
    ariaDetails: null,
    ariaDisabled: Ot,
    ariaDropEffect: it,
    ariaErrorMessage: null,
    ariaExpanded: Ot,
    ariaFlowTo: it,
    ariaGrabbed: Ot,
    ariaHasPopup: null,
    ariaHidden: Ot,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: it,
    ariaLevel: ne,
    ariaLive: null,
    ariaModal: Ot,
    ariaMultiLine: Ot,
    ariaMultiSelectable: Ot,
    ariaOrientation: null,
    ariaOwns: it,
    ariaPlaceholder: null,
    ariaPosInSet: ne,
    ariaPressed: Ot,
    ariaReadOnly: Ot,
    ariaRelevant: null,
    ariaRequired: Ot,
    ariaRoleDescription: it,
    ariaRowCount: ne,
    ariaRowIndex: ne,
    ariaRowSpan: ne,
    ariaSelected: Ot,
    ariaSetSize: ne,
    ariaSort: null,
    ariaValueMax: ne,
    ariaValueMin: ne,
    ariaValueNow: ne,
    ariaValueText: null,
    role: null
  },
  transform(t, i) {
    return i === "role" ? i : "aria-" + i.slice(4).toLowerCase();
  }
});
function h0(t, i) {
  return i in t ? t[i] : i;
}
function m0(t, i) {
  return h0(t, i.toLowerCase());
}
const BE = sl({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: ia,
    acceptCharset: it,
    accessKey: it,
    action: null,
    allow: null,
    allowFullScreen: De,
    allowPaymentRequest: De,
    allowUserMedia: De,
    alpha: De,
    alt: null,
    as: null,
    async: De,
    autoCapitalize: null,
    autoComplete: it,
    autoFocus: De,
    autoPlay: De,
    blocking: it,
    capture: null,
    charSet: null,
    checked: De,
    cite: null,
    className: it,
    closedBy: null,
    colorSpace: null,
    cols: ne,
    colSpan: ne,
    command: null,
    commandFor: null,
    content: null,
    contentEditable: Ot,
    controls: De,
    controlsList: it,
    coords: ne | ia,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: De,
    defer: De,
    dir: null,
    dirName: null,
    disabled: De,
    download: Jd,
    draggable: Ot,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: De,
    formTarget: null,
    headers: it,
    height: ne,
    hidden: Jd,
    high: ne,
    href: null,
    hrefLang: null,
    htmlFor: it,
    httpEquiv: it,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: De,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: De,
    itemId: null,
    itemProp: it,
    itemRef: it,
    itemScope: De,
    itemType: it,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: De,
    low: ne,
    manifest: null,
    max: null,
    maxLength: ne,
    media: null,
    method: null,
    min: null,
    minLength: ne,
    multiple: De,
    muted: De,
    name: null,
    nonce: null,
    noModule: De,
    noValidate: De,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: De,
    optimum: ne,
    pattern: null,
    ping: it,
    placeholder: null,
    playsInline: De,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: De,
    referrerPolicy: null,
    rel: it,
    required: De,
    reversed: De,
    rows: ne,
    rowSpan: ne,
    sandbox: it,
    scope: null,
    scoped: De,
    seamless: De,
    selected: De,
    shadowRootClonable: De,
    shadowRootCustomElementRegistry: De,
    shadowRootDelegatesFocus: De,
    shadowRootMode: null,
    shadowRootSerializable: De,
    shape: null,
    size: ne,
    sizes: null,
    slot: null,
    span: ne,
    spellCheck: Ot,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: ne,
    step: null,
    style: null,
    tabIndex: ne,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: De,
    useMap: null,
    value: Ot,
    width: ne,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: it,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: ne,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: ne,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: De,
    // Lists. Use CSS to reduce space between items instead
    declare: De,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: ne,
    // `<img>` and `<object>`
    leftMargin: ne,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: ne,
    // `<body>`
    marginWidth: ne,
    // `<body>`
    noResize: De,
    // `<frame>`
    noHref: De,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: De,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: De,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: ne,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Ot,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: ne,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: ne,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    credentialless: De,
    disablePictureInPicture: De,
    disableRemotePlayback: De,
    exportParts: ia,
    part: it,
    prefix: null,
    property: null,
    results: ne,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: m0
}), IE = sl({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    maskType: "mask-type",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: Tn,
    accentHeight: ne,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: ne,
    amplitude: ne,
    arabicForm: null,
    ascent: ne,
    attributeName: null,
    attributeType: null,
    azimuth: ne,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: ne,
    by: null,
    calcMode: null,
    capHeight: ne,
    className: it,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: ne,
    diffuseConstant: ne,
    direction: null,
    display: null,
    dur: null,
    divisor: ne,
    dominantBaseline: null,
    download: De,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: ne,
    enableBackground: null,
    end: null,
    event: null,
    exponent: ne,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: ne,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: ia,
    g2: ia,
    glyphName: ia,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: ne,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: ne,
    horizOriginX: ne,
    horizOriginY: ne,
    id: null,
    ideographic: ne,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: ne,
    k: ne,
    k1: ne,
    k2: ne,
    k3: ne,
    k4: ne,
    kernelMatrix: Tn,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: ne,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskType: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: ne,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: ne,
    overlineThickness: ne,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: ne,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: it,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: ne,
    pointsAtY: ne,
    pointsAtZ: ne,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Tn,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Tn,
    rev: Tn,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Tn,
    requiredFeatures: Tn,
    requiredFonts: Tn,
    requiredFormats: Tn,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: ne,
    specularExponent: ne,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: ne,
    strikethroughThickness: ne,
    string: null,
    stroke: null,
    strokeDashArray: Tn,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: ne,
    strokeOpacity: ne,
    strokeWidth: null,
    style: null,
    surfaceScale: ne,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Tn,
    tabIndex: ne,
    tableValues: null,
    target: null,
    targetX: ne,
    targetY: ne,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Tn,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: ne,
    underlineThickness: ne,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: ne,
    values: null,
    vAlphabetic: ne,
    vMathematical: ne,
    vectorEffect: null,
    vHanging: ne,
    vIdeographic: ne,
    version: null,
    vertAdvY: ne,
    vertOriginX: ne,
    vertOriginY: ne,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: ne,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: h0
}), g0 = sl({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(t, i) {
    return "xlink:" + i.slice(5).toLowerCase();
  }
}), b0 = sl({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: m0
}), x0 = sl({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(t, i) {
    return "xml:" + i.slice(3).toLowerCase();
  }
}), HE = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, ZE = /[A-Z]/g, cy = /-[a-z]/g, $E = /^data[-\w.:]+$/i;
function qE(t, i) {
  const a = Pd(i);
  let o = i, s = vn;
  if (a in t.normal)
    return t.property[t.normal[a]];
  if (a.length > 4 && a.slice(0, 4) === "data" && $E.test(i)) {
    if (i.charAt(4) === "-") {
      const c = i.slice(5).replace(cy, YE);
      o = "data" + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = i.slice(4);
      if (!cy.test(c)) {
        let f = c.replace(ZE, VE);
        f.charAt(0) !== "-" && (f = "-" + f), i = "data" + f;
      }
    }
    s = Ep;
  }
  return new s(o, i);
}
function VE(t) {
  return "-" + t.toLowerCase();
}
function YE(t) {
  return t.charAt(1).toUpperCase();
}
const GE = d0([p0, BE, g0, b0, x0], "html"), Cp = d0([p0, IE, g0, b0, x0], "svg");
function FE(t) {
  return t.join(" ").trim();
}
var el = {}, Sd, fy;
function XE() {
  if (fy) return Sd;
  fy = 1;
  var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, i = /\n/g, a = /^\s*/, o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, s = /^:\s*/, c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, f = /^[;\s]*/, p = /^\s+|\s+$/g, m = `
`, g = "/", b = "*", x = "", w = "comment", v = "declaration";
  function S(j, N) {
    if (typeof j != "string")
      throw new TypeError("First argument must be a string");
    if (!j) return [];
    N = N || {};
    var U = 1, R = 1;
    function G(pe) {
      var ee = pe.match(i);
      ee && (U += ee.length);
      var W = pe.lastIndexOf(m);
      R = ~W ? pe.length - W : R + pe.length;
    }
    function K() {
      var pe = { line: U, column: R };
      return function(ee) {
        return ee.position = new A(pe), ze(), ee;
      };
    }
    function A(pe) {
      this.start = pe, this.end = { line: U, column: R }, this.source = N.source;
    }
    A.prototype.content = j;
    function V(pe) {
      var ee = new Error(
        N.source + ":" + U + ":" + R + ": " + pe
      );
      if (ee.reason = pe, ee.filename = N.source, ee.line = U, ee.column = R, ee.source = j, !N.silent) throw ee;
    }
    function ie(pe) {
      var ee = pe.exec(j);
      if (ee) {
        var W = ee[0];
        return G(W), j = j.slice(W.length), ee;
      }
    }
    function ze() {
      ie(a);
    }
    function I(pe) {
      var ee;
      for (pe = pe || []; ee = te(); )
        ee !== !1 && pe.push(ee);
      return pe;
    }
    function te() {
      var pe = K();
      if (!(g != j.charAt(0) || b != j.charAt(1))) {
        for (var ee = 2; x != j.charAt(ee) && (b != j.charAt(ee) || g != j.charAt(ee + 1)); )
          ++ee;
        if (ee += 2, x === j.charAt(ee - 1))
          return V("End of comment missing");
        var W = j.slice(2, ee - 2);
        return R += 2, G(W), j = j.slice(ee), R += 2, pe({
          type: w,
          comment: W
        });
      }
    }
    function re() {
      var pe = K(), ee = ie(o);
      if (ee) {
        if (te(), !ie(s)) return V("property missing ':'");
        var W = ie(c), ce = pe({
          type: v,
          property: E(ee[0].replace(t, x)),
          value: W ? E(W[0].replace(t, x)) : x
        });
        return ie(f), ce;
      }
    }
    function Ae() {
      var pe = [];
      I(pe);
      for (var ee; ee = re(); )
        ee !== !1 && (pe.push(ee), I(pe));
      return pe;
    }
    return ze(), Ae();
  }
  function E(j) {
    return j ? j.replace(p, x) : x;
  }
  return Sd = S, Sd;
}
var dy;
function QE() {
  if (dy) return el;
  dy = 1;
  var t = el && el.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(el, "__esModule", { value: !0 }), el.default = a;
  const i = t(XE());
  function a(o, s) {
    let c = null;
    if (!o || typeof o != "string")
      return c;
    const f = (0, i.default)(o), p = typeof s == "function";
    return f.forEach((m) => {
      if (m.type !== "declaration")
        return;
      const { property: g, value: b } = m;
      p ? s(g, b, m) : b && (c = c || {}, c[g] = b);
    }), c;
  }
  return el;
}
var lo = {}, py;
function KE() {
  if (py) return lo;
  py = 1, Object.defineProperty(lo, "__esModule", { value: !0 }), lo.camelCase = void 0;
  var t = /^--[a-zA-Z0-9_-]+$/, i = /-([a-z])/g, a = /^[^-]+$/, o = /^-(webkit|moz|ms|o|khtml)-/, s = /^-(ms)-/, c = function(g) {
    return !g || a.test(g) || t.test(g);
  }, f = function(g, b) {
    return b.toUpperCase();
  }, p = function(g, b) {
    return "".concat(b, "-");
  }, m = function(g, b) {
    return b === void 0 && (b = {}), c(g) ? g : (g = g.toLowerCase(), b.reactCompat ? g = g.replace(s, p) : g = g.replace(o, p), g.replace(i, f));
  };
  return lo.camelCase = m, lo;
}
var oo, hy;
function PE() {
  if (hy) return oo;
  hy = 1;
  var t = oo && oo.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  }, i = t(QE()), a = KE();
  function o(s, c) {
    var f = {};
    return !s || typeof s != "string" || (0, i.default)(s, function(p, m) {
      p && m && (f[(0, a.camelCase)(p, c)] = m);
    }), f;
  }
  return o.default = o, oo = o, oo;
}
var JE = PE();
const WE = /* @__PURE__ */ Ky(JE), y0 = v0("end"), Tp = v0("start");
function v0(t) {
  return i;
  function i(a) {
    const o = a && a.position && a.position[t] || {};
    if (typeof o.line == "number" && o.line > 0 && typeof o.column == "number" && o.column > 0)
      return {
        line: o.line,
        column: o.column,
        offset: typeof o.offset == "number" && o.offset > -1 ? o.offset : void 0
      };
  }
}
function eC(t) {
  const i = Tp(t), a = y0(t);
  if (i && a)
    return { start: i, end: a };
}
function bo(t) {
  return !t || typeof t != "object" ? "" : "position" in t || "type" in t ? my(t.position) : "start" in t || "end" in t ? my(t) : "line" in t || "column" in t ? ep(t) : "";
}
function ep(t) {
  return gy(t && t.line) + ":" + gy(t && t.column);
}
function my(t) {
  return ep(t && t.start) + "-" + ep(t && t.end);
}
function gy(t) {
  return t && typeof t == "number" ? t : 1;
}
class tn extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(i, a, o) {
    super(), typeof a == "string" && (o = a, a = void 0);
    let s = "", c = {}, f = !1;
    if (a && ("line" in a && "column" in a ? c = { place: a } : "start" in a && "end" in a ? c = { place: a } : "type" in a ? c = {
      ancestors: [a],
      place: a.position
    } : c = { ...a }), typeof i == "string" ? s = i : !c.cause && i && (f = !0, s = i.message, c.cause = i), !c.ruleId && !c.source && typeof o == "string") {
      const m = o.indexOf(":");
      m === -1 ? c.ruleId = o : (c.source = o.slice(0, m), c.ruleId = o.slice(m + 1));
    }
    if (!c.place && c.ancestors && c.ancestors) {
      const m = c.ancestors[c.ancestors.length - 1];
      m && (c.place = m.position);
    }
    const p = c.place && "start" in c.place ? c.place.start : c.place;
    this.ancestors = c.ancestors || void 0, this.cause = c.cause || void 0, this.column = p ? p.column : void 0, this.fatal = void 0, this.file = "", this.message = s, this.line = p ? p.line : void 0, this.name = bo(c.place) || "1:1", this.place = c.place || void 0, this.reason = this.message, this.ruleId = c.ruleId || void 0, this.source = c.source || void 0, this.stack = f && c.cause && typeof c.cause.stack == "string" ? c.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
tn.prototype.file = "";
tn.prototype.name = "";
tn.prototype.reason = "";
tn.prototype.message = "";
tn.prototype.stack = "";
tn.prototype.column = void 0;
tn.prototype.line = void 0;
tn.prototype.ancestors = void 0;
tn.prototype.cause = void 0;
tn.prototype.fatal = void 0;
tn.prototype.place = void 0;
tn.prototype.ruleId = void 0;
tn.prototype.source = void 0;
const Np = {}.hasOwnProperty, tC = /* @__PURE__ */ new Map(), nC = /[A-Z]/g, iC = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), rC = /* @__PURE__ */ new Set(["td", "th"]), w0 = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function aC(t, i) {
  if (!i || i.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const a = i.filePath || void 0;
  let o;
  if (i.development) {
    if (typeof i.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    o = pC(a, i.jsxDEV);
  } else {
    if (typeof i.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof i.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    o = dC(a, i.jsx, i.jsxs);
  }
  const s = {
    Fragment: i.Fragment,
    ancestors: [],
    components: i.components || {},
    create: o,
    elementAttributeNameCase: i.elementAttributeNameCase || "react",
    evaluater: i.createEvaluater ? i.createEvaluater() : void 0,
    filePath: a,
    ignoreInvalidStyle: i.ignoreInvalidStyle || !1,
    passKeys: i.passKeys !== !1,
    passNode: i.passNode || !1,
    schema: i.space === "svg" ? Cp : GE,
    stylePropertyNameCase: i.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: i.tableCellAlignToStyle !== !1
  }, c = k0(s, t, void 0);
  return c && typeof c != "string" ? c : s.create(
    t,
    s.Fragment,
    { children: c || void 0 },
    void 0
  );
}
function k0(t, i, a) {
  if (i.type === "element")
    return lC(t, i, a);
  if (i.type === "mdxFlowExpression" || i.type === "mdxTextExpression")
    return oC(t, i);
  if (i.type === "mdxJsxFlowElement" || i.type === "mdxJsxTextElement")
    return uC(t, i, a);
  if (i.type === "mdxjsEsm")
    return sC(t, i);
  if (i.type === "root")
    return cC(t, i, a);
  if (i.type === "text")
    return fC(t, i);
}
function lC(t, i, a) {
  const o = t.schema;
  let s = o;
  i.tagName.toLowerCase() === "svg" && o.space === "html" && (s = Cp, t.schema = s), t.ancestors.push(i);
  const c = z0(t, i.tagName, !1), f = hC(t, i);
  let p = Op(t, i);
  return iC.has(i.tagName) && (p = p.filter(function(m) {
    return typeof m == "string" ? !LE(m) : !0;
  })), S0(t, f, c, i), Ap(f, p), t.ancestors.pop(), t.schema = o, t.create(i, c, f, a);
}
function oC(t, i) {
  if (i.data && i.data.estree && t.evaluater) {
    const o = i.data.estree.body[0];
    return o.type, /** @type {Child | undefined} */
    t.evaluater.evaluateExpression(o.expression);
  }
  zo(t, i.position);
}
function sC(t, i) {
  if (i.data && i.data.estree && t.evaluater)
    return (
      /** @type {Child | undefined} */
      t.evaluater.evaluateProgram(i.data.estree)
    );
  zo(t, i.position);
}
function uC(t, i, a) {
  const o = t.schema;
  let s = o;
  i.name === "svg" && o.space === "html" && (s = Cp, t.schema = s), t.ancestors.push(i);
  const c = i.name === null ? t.Fragment : z0(t, i.name, !0), f = mC(t, i), p = Op(t, i);
  return S0(t, f, c, i), Ap(f, p), t.ancestors.pop(), t.schema = o, t.create(i, c, f, a);
}
function cC(t, i, a) {
  const o = {};
  return Ap(o, Op(t, i)), t.create(i, t.Fragment, o, a);
}
function fC(t, i) {
  return i.value;
}
function S0(t, i, a, o) {
  typeof a != "string" && a !== t.Fragment && t.passNode && (i.node = o);
}
function Ap(t, i) {
  if (i.length > 0) {
    const a = i.length > 1 ? i : i[0];
    a && (t.children = a);
  }
}
function dC(t, i, a) {
  return o;
  function o(s, c, f, p) {
    const g = Array.isArray(f.children) ? a : i;
    return p ? g(c, f, p) : g(c, f);
  }
}
function pC(t, i) {
  return a;
  function a(o, s, c, f) {
    const p = Array.isArray(c.children), m = Tp(o);
    return i(
      s,
      c,
      f,
      p,
      {
        columnNumber: m ? m.column - 1 : void 0,
        fileName: t,
        lineNumber: m ? m.line : void 0
      },
      void 0
    );
  }
}
function hC(t, i) {
  const a = {};
  let o, s;
  for (s in i.properties)
    if (s !== "children" && Np.call(i.properties, s)) {
      const c = gC(t, s, i.properties[s]);
      if (c) {
        const [f, p] = c;
        t.tableCellAlignToStyle && f === "align" && typeof p == "string" && rC.has(i.tagName) ? o = p : a[f] = p;
      }
    }
  if (o) {
    const c = (
      /** @type {Style} */
      a.style || (a.style = {})
    );
    c[t.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = o;
  }
  return a;
}
function mC(t, i) {
  const a = {};
  for (const o of i.attributes)
    if (o.type === "mdxJsxExpressionAttribute")
      if (o.data && o.data.estree && t.evaluater) {
        const c = o.data.estree.body[0];
        c.type;
        const f = c.expression;
        f.type;
        const p = f.properties[0];
        p.type, Object.assign(
          a,
          t.evaluater.evaluateExpression(p.argument)
        );
      } else
        zo(t, i.position);
    else {
      const s = o.name;
      let c;
      if (o.value && typeof o.value == "object")
        if (o.value.data && o.value.data.estree && t.evaluater) {
          const p = o.value.data.estree.body[0];
          p.type, c = t.evaluater.evaluateExpression(p.expression);
        } else
          zo(t, i.position);
      else
        c = o.value === null ? !0 : o.value;
      a[s] = /** @type {Props[keyof Props]} */
      c;
    }
  return a;
}
function Op(t, i) {
  const a = [];
  let o = -1;
  const s = t.passKeys ? /* @__PURE__ */ new Map() : tC;
  for (; ++o < i.children.length; ) {
    const c = i.children[o];
    let f;
    if (t.passKeys) {
      const m = c.type === "element" ? c.tagName : c.type === "mdxJsxFlowElement" || c.type === "mdxJsxTextElement" ? c.name : void 0;
      if (m) {
        const g = s.get(m) || 0;
        f = m + "-" + g, s.set(m, g + 1);
      }
    }
    const p = k0(t, c, f);
    p !== void 0 && a.push(p);
  }
  return a;
}
function gC(t, i, a) {
  const o = qE(t.schema, i);
  if (!(a == null || typeof a == "number" && Number.isNaN(a))) {
    if (Array.isArray(a) && (a = o.commaSeparated ? AE(a) : FE(a)), o.property === "style") {
      let s = typeof a == "object" ? a : bC(t, String(a));
      return t.stylePropertyNameCase === "css" && (s = xC(s)), ["style", s];
    }
    return [
      t.elementAttributeNameCase === "react" && o.space ? HE[o.property] || o.property : o.attribute,
      a
    ];
  }
}
function bC(t, i) {
  try {
    return WE(i, { reactCompat: !0 });
  } catch (a) {
    if (t.ignoreInvalidStyle)
      return {};
    const o = (
      /** @type {Error} */
      a
    ), s = new tn("Cannot parse `style` attribute", {
      ancestors: t.ancestors,
      cause: o,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw s.file = t.filePath || void 0, s.url = w0 + "#cannot-parse-style-attribute", s;
  }
}
function z0(t, i, a) {
  let o;
  if (!a)
    o = { type: "Literal", value: i };
  else if (i.includes(".")) {
    const s = i.split(".");
    let c = -1, f;
    for (; ++c < s.length; ) {
      const p = oy(s[c]) ? { type: "Identifier", name: s[c] } : { type: "Literal", value: s[c] };
      f = f ? {
        type: "MemberExpression",
        object: f,
        property: p,
        computed: !!(c && p.type === "Literal"),
        optional: !1
      } : p;
    }
    o = f;
  } else
    o = oy(i) && !/^[a-z]/.test(i) ? { type: "Identifier", name: i } : { type: "Literal", value: i };
  if (o.type === "Literal") {
    const s = (
      /** @type {string | number} */
      o.value
    );
    return Np.call(t.components, s) ? t.components[s] : s;
  }
  if (t.evaluater)
    return t.evaluater.evaluateExpression(o);
  zo(t);
}
function zo(t, i) {
  const a = new tn(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: t.ancestors,
      place: i,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw a.file = t.filePath || void 0, a.url = w0 + "#cannot-handle-mdx-estrees-without-createevaluater", a;
}
function xC(t) {
  const i = {};
  let a;
  for (a in t)
    Np.call(t, a) && (i[yC(a)] = t[a]);
  return i;
}
function yC(t) {
  let i = t.replace(nC, vC);
  return i.slice(0, 3) === "ms-" && (i = "-" + i), i;
}
function vC(t) {
  return "-" + t.toLowerCase();
}
const zd = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, wC = {};
function Mp(t, i) {
  const a = wC, o = typeof a.includeImageAlt == "boolean" ? a.includeImageAlt : !0, s = typeof a.includeHtml == "boolean" ? a.includeHtml : !0;
  return _0(t, o, s);
}
function _0(t, i, a) {
  if (kC(t)) {
    if ("value" in t)
      return t.type === "html" && !a ? "" : t.value;
    if (i && "alt" in t && t.alt)
      return t.alt;
    if ("children" in t)
      return by(t.children, i, a);
  }
  return Array.isArray(t) ? by(t, i, a) : "";
}
function by(t, i, a) {
  const o = [];
  let s = -1;
  for (; ++s < t.length; )
    o[s] = _0(t[s], i, a);
  return o.join("");
}
function kC(t) {
  return !!(t && typeof t == "object");
}
const xy = document.createElement("i");
function Dp(t) {
  const i = "&" + t + ";";
  xy.innerHTML = i;
  const a = xy.textContent;
  return a.charCodeAt(a.length - 1) === 59 && t !== "semi" || a === i ? !1 : a;
}
function ai(t, i, a, o) {
  const s = t.length;
  let c = 0, f;
  if (i < 0 ? i = -i > s ? 0 : s + i : i = i > s ? s : i, a = a > 0 ? a : 0, o.length < 1e4)
    f = Array.from(o), f.unshift(i, a), t.splice(...f);
  else
    for (a && t.splice(i, a); c < o.length; )
      f = o.slice(c, c + 1e4), f.unshift(i, 0), t.splice(...f), c += 1e4, i += 1e4;
}
function Fn(t, i) {
  return t.length > 0 ? (ai(t, t.length, 0, i), t) : i;
}
const yy = {}.hasOwnProperty;
function j0(t) {
  const i = {};
  let a = -1;
  for (; ++a < t.length; )
    SC(i, t[a]);
  return i;
}
function SC(t, i) {
  let a;
  for (a in i) {
    const s = (yy.call(t, a) ? t[a] : void 0) || (t[a] = {}), c = i[a];
    let f;
    if (c)
      for (f in c) {
        yy.call(s, f) || (s[f] = []);
        const p = c[f];
        zC(
          // @ts-expect-error Looks like a list.
          s[f],
          Array.isArray(p) ? p : p ? [p] : []
        );
      }
  }
}
function zC(t, i) {
  let a = -1;
  const o = [];
  for (; ++a < i.length; )
    (i[a].add === "after" ? t : o).push(i[a]);
  ai(t, 0, 0, o);
}
function E0(t, i) {
  const a = Number.parseInt(t, i);
  return (
    // C0 except for HT, LF, FF, CR, space.
    a < 9 || a === 11 || a > 13 && a < 32 || // Control character (DEL) of C0, and C1 controls.
    a > 126 && a < 160 || // Lone high surrogates and low surrogates.
    a > 55295 && a < 57344 || // Noncharacters.
    a > 64975 && a < 65008 || /* eslint-disable no-bitwise */
    (a & 65535) === 65535 || (a & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    a > 1114111 ? "�" : String.fromCodePoint(a)
  );
}
function li(t) {
  return t.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const cn = Er(/[A-Za-z]/), en = Er(/[\dA-Za-z]/), _C = Er(/[#-'*+\--9=?A-Z^-~]/);
function yu(t) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    t !== null && (t < 32 || t === 127)
  );
}
const tp = Er(/\d/), jC = Er(/[\dA-Fa-f]/), EC = Er(/[!-/:-@[-`{-~]/);
function je(t) {
  return t !== null && t < -2;
}
function rt(t) {
  return t !== null && (t < 0 || t === 32);
}
function Be(t) {
  return t === -2 || t === -1 || t === 32;
}
const Cu = Er(new RegExp("\\p{P}|\\p{S}", "u")), la = Er(/\s/);
function Er(t) {
  return i;
  function i(a) {
    return a !== null && a > -1 && t.test(String.fromCharCode(a));
  }
}
function ul(t) {
  const i = [];
  let a = -1, o = 0, s = 0;
  for (; ++a < t.length; ) {
    const c = t.charCodeAt(a);
    let f = "";
    if (c === 37 && en(t.charCodeAt(a + 1)) && en(t.charCodeAt(a + 2)))
      s = 2;
    else if (c < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c)) || (f = String.fromCharCode(c));
    else if (c > 55295 && c < 57344) {
      const p = t.charCodeAt(a + 1);
      c < 56320 && p > 56319 && p < 57344 ? (f = String.fromCharCode(c, p), s = 1) : f = "�";
    } else
      f = String.fromCharCode(c);
    f && (i.push(t.slice(o, a), encodeURIComponent(f)), o = a + s + 1, f = ""), s && (a += s, s = 0);
  }
  return i.join("") + t.slice(o);
}
function Fe(t, i, a, o) {
  const s = o ? o - 1 : 1 / 0;
  let c = 0;
  return f;
  function f(m) {
    return Be(m) ? (t.enter(a), p(m)) : i(m);
  }
  function p(m) {
    return Be(m) && c++ < s ? (t.consume(m), p) : (t.exit(a), i(m));
  }
}
function C0(t, i, a, o, s, c) {
  let f = 0;
  return p;
  function p(b) {
    return Be(b) ? (t.enter(o), m(b)) : g(b);
  }
  function m(b) {
    return Be(b) && f < c ? (t.consume(b), f++, m) : (t.exit(o), g(b));
  }
  function g(b) {
    return f >= s ? i(b) : a(b);
  }
}
const CC = {
  tokenize: TC
};
function TC(t) {
  const i = t.attempt(this.parser.constructs.contentInitial, o, s);
  let a;
  return i;
  function o(p) {
    if (p === null) {
      t.consume(p);
      return;
    }
    return t.enter("lineEnding"), t.consume(p), t.exit("lineEnding"), Fe(t, i, "linePrefix");
  }
  function s(p) {
    return t.enter("paragraph"), c(p);
  }
  function c(p) {
    const m = t.enter("chunkText", {
      contentType: "text",
      previous: a
    });
    return a && (a.next = m), a = m, f(p);
  }
  function f(p) {
    if (p === null) {
      t.exit("chunkText"), t.exit("paragraph"), t.consume(p);
      return;
    }
    return je(p) ? (t.consume(p), t.exit("chunkText"), c) : (t.consume(p), f);
  }
}
let vu = class {
  /**
   * Create a new edit map.
   *
   * @returns
   *   New instance.
   */
  constructor() {
    this.index = /* @__PURE__ */ new Map(), this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   *   Index at which to apply the edit.
   * @param {number} remove
   *   Count of items to remove at the index.
   * @param {Array<Event>} add
   *   Items to add at the index.
   * @returns {undefined}
   *   Nothing.
   */
  add(i, a, o) {
    vy(this, i, a, o, !1);
  }
  /**
   * Create an edit: but insert `add` before existing additions, instead of
   * after them.
   *
   * @param {number} index
   *   Index at which to apply the edit.
   * @param {number} remove
   *   Count of items to remove at the index.
   * @param {Array<Event>} add
   *   Items to add at the index.
   * @returns {undefined}
   *   Nothing.
   */
  addBefore(i, a, o) {
    vy(this, i, a, o, !0);
  }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   *   List of events to apply the edits to.
   * @returns {undefined}
   *   Nothing.
   */
  consume(i) {
    if (this.map.sort(function(c, f) {
      return c[0] - f[0];
    }), this.map.length === 0)
      return;
    let a = this.map.length;
    const o = [];
    for (; a > 0; )
      a -= 1, o.push(i.slice(this.map[a][0] + this.map[a][1]), this.map[a][2]), i.length = this.map[a][0];
    o.push(i.slice()), i.length = 0;
    let s = o.pop();
    for (; s; ) {
      for (const c of s)
        i.push(c);
      s = o.pop();
    }
    this.map.length = 0, this.index.clear();
  }
};
function vy(t, i, a, o, s) {
  if (a === 0 && o.length === 0)
    return;
  const c = t.index.get(i);
  if (c) {
    c[1] += a, s ? (o.push(...c[2]), c[2] = o) : c[2].push(...o);
    return;
  }
  const f = [i, a, o];
  t.map.push(f), t.index.set(i, f);
}
const NC = {
  tokenize: AC
}, wy = {
  tokenize: OC
};
function AC(t) {
  const i = this, a = [];
  let o = 0, s, c, f;
  return p;
  function p(R) {
    if (o < a.length) {
      const G = a[o];
      return i.containerState = G[1], t.attempt(G[0].continuation, m, g)(R);
    }
    return g(R);
  }
  function m(R) {
    if (o++, i.containerState._closeFlow) {
      i.containerState._closeFlow = void 0, s && U();
      const G = i.events.length;
      let K = G, A;
      for (; K--; )
        if (i.events[K][0] === "exit" && i.events[K][1].type === "chunkFlow") {
          A = i.events[K][1].end;
          break;
        }
      N(o);
      let V = G;
      for (; V < i.events.length; )
        i.events[V][1].end = {
          ...A
        }, V++;
      const ie = new vu();
      return ie.add(K + 1, 0, i.events.slice(G)), ie.add(G, V - G, []), ie.consume(i.events), g(R);
    }
    return p(R);
  }
  function g(R) {
    if (o === a.length) {
      if (!s)
        return w(R);
      if (s.currentConstruct && s.currentConstruct.concrete)
        return S(R);
      i.interrupt = !!(s.currentConstruct && !s._gfmTableDynamicInterruptHack);
    }
    return i.containerState = {}, t.check(wy, b, x)(R);
  }
  function b(R) {
    return s && U(), N(o), w(R);
  }
  function x(R) {
    return i.parser.lazy[i.now().line] = o !== a.length, f = i.now().offset, S(R);
  }
  function w(R) {
    return i.containerState = {}, t.attempt(wy, v, S)(R);
  }
  function v(R) {
    return o++, a.push([i.currentConstruct, i.containerState]), w(R);
  }
  function S(R) {
    if (R === null) {
      s && U(), N(0), t.consume(R);
      return;
    }
    return s = s || i.parser.flow(i.now()), t.enter("chunkFlow", {
      _tokenizer: s,
      contentType: "flow",
      previous: c
    }), E(R);
  }
  function E(R) {
    if (R === null) {
      j(t.exit("chunkFlow"), !0), N(0), t.consume(R);
      return;
    }
    return je(R) ? (t.consume(R), j(t.exit("chunkFlow")), o = 0, i.interrupt = void 0, p) : (t.consume(R), E);
  }
  function j(R, G) {
    const K = i.sliceStream(R);
    if (G && K.push(null), R.previous = c, c && (c.next = R), c = R, s.defineSkip(R.start), s.write(K), i.parser.lazy[R.start.line]) {
      let A = s.events.length;
      for (; A--; )
        if (
          // The token starts before the line ending…
          s.events[A][1].start.offset < f && // …and either is not ended yet…
          (!s.events[A][1].end || // …or ends after it.
          s.events[A][1].end.offset > f)
        )
          return;
      const V = i.events.length;
      let ie = V, ze, I;
      for (; ie--; )
        if (i.events[ie][0] === "exit" && i.events[ie][1].type === "chunkFlow") {
          if (ze) {
            I = i.events[ie][1].end;
            break;
          }
          ze = !0;
        }
      for (N(o), A = V; A < i.events.length; )
        i.events[A][1].end = {
          ...I
        }, A++;
      const te = new vu();
      te.add(ie + 1, 0, i.events.slice(V)), te.add(V, A - V, []), te.consume(i.events);
    }
  }
  function N(R) {
    let G = a.length;
    for (; G-- > R; ) {
      const K = a[G];
      i.containerState = K[1], K[0].exit.call(i, t);
    }
    a.length = R;
  }
  function U() {
    s.write([null]), c = void 0, s = void 0, i.containerState._closeFlow = void 0;
  }
}
function OC(t, i, a) {
  return Fe(t, t.attempt(this.parser.constructs.document, i, a), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function wu(t) {
  if (t === null || rt(t) || la(t))
    return 1;
  if (Cu(t))
    return 2;
}
function Tu(t, i, a) {
  const o = [];
  let s = -1;
  for (; ++s < t.length; ) {
    const c = t[s].resolveAll;
    c && !o.includes(c) && (i = c(i, a), o.push(c));
  }
  return i;
}
const np = {
  name: "attention",
  resolveAll: MC,
  tokenize: DC
};
function MC(t, i) {
  let a = -1, o;
  for (; ++a < t.length; )
    if (t[a][0] === "enter" && t[a][1].type === "attentionSequence" && t[a][1]._close) {
      let s = a;
      for (; s--; )
        if (t[s][0] === "exit" && t[s][1].type === "attentionSequence" && t[s][1]._open && // If the markers are the same:
        i.sliceSerialize(t[s][1]).charCodeAt(0) === i.sliceSerialize(t[a][1]).charCodeAt(0)) {
          if ((t[s][1]._close || t[a][1]._open) && (t[a][1].end.offset - t[a][1].start.offset) % 3 && !((t[s][1].end.offset - t[s][1].start.offset + t[a][1].end.offset - t[a][1].start.offset) % 3))
            continue;
          const c = t[s][1].end.offset - t[s][1].start.offset > 1 && t[a][1].end.offset - t[a][1].start.offset > 1 ? 2 : 1, f = {
            ...t[s][1].end
          }, p = {
            ...t[a][1].start
          };
          ky(f, -c), ky(p, c);
          const m = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: {
              ...t[s][1].end
            }
          }, g = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...t[a][1].start
            },
            end: p
          }, b = {
            type: c > 1 ? "strongText" : "emphasisText",
            start: {
              ...t[s][1].end
            },
            end: {
              ...t[a][1].start
            }
          }, x = {
            type: c > 1 ? "strong" : "emphasis",
            start: {
              ...m.start
            },
            end: {
              ...g.end
            }
          };
          t[s][1].end = {
            ...m.start
          }, t[a][1].start = {
            ...g.end
          }, o = [], t[s][1].end.offset - t[s][1].start.offset && (o = Fn(o, [["enter", t[s][1], i], ["exit", t[s][1], i]])), o = Fn(o, [["enter", x, i], ["enter", m, i], ["exit", m, i], ["enter", b, i]]), o = Fn(o, Tu(i.parser.constructs.insideSpan.null, t.slice(s + 1, a), i)), o = Fn(o, [["exit", b, i], ["enter", g, i], ["exit", g, i], ["exit", x, i]]);
          let w = 0;
          t[a][1].end.offset - t[a][1].start.offset && (w = 2, o = Fn(o, [["enter", t[a][1], i], ["exit", t[a][1], i]])), ai(t, s - 1, a - s + 3, o), a = s + o.length - w - 2;
          break;
        }
    }
  for (a = -1; ++a < t.length; )
    t[a][1].type === "attentionSequence" && (t[a][1].type = "data");
  return t;
}
function DC(t, i) {
  const a = this.parser.constructs.attentionMarkers.null, o = this.previous, s = wu(o);
  let c;
  return f;
  function f(m) {
    return c = m, t.enter("attentionSequence"), p(m);
  }
  function p(m) {
    if (m === c)
      return t.consume(m), p;
    const g = t.exit("attentionSequence"), b = wu(m), x = !b || b === 2 && s || a.includes(m) && m !== 42 && m !== 95, w = !s || s === 2 && b || a.includes(o) && o !== 42 && o !== 95;
    return g._open = !!(c === 42 ? x : x && (s || !w)), g._close = !!(c === 42 ? w : w && (b || !x)), i(m);
  }
}
function ky(t, i) {
  t.column += i, t.offset += i, t._bufferIndex += i;
}
const RC = {
  name: "autolink",
  tokenize: LC
};
function LC(t, i, a) {
  let o = 0;
  return s;
  function s(v) {
    return t.enter("autolink"), t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.enter("autolinkProtocol"), c;
  }
  function c(v) {
    return cn(v) ? (t.consume(v), f) : v === 64 ? a(v) : g(v);
  }
  function f(v) {
    return v === 43 || v === 45 || v === 46 || en(v) ? (o = 1, p(v)) : g(v);
  }
  function p(v) {
    return v === 58 ? (t.consume(v), o = 0, m) : (v === 43 || v === 45 || v === 46 || en(v)) && o++ < 32 ? (t.consume(v), p) : (o = 0, g(v));
  }
  function m(v) {
    return v === 62 ? (t.exit("autolinkProtocol"), t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.exit("autolink"), i) : v === null || v === 32 || v === 60 || yu(v) ? a(v) : (t.consume(v), m);
  }
  function g(v) {
    return v === 64 ? (t.consume(v), b) : _C(v) ? (t.consume(v), g) : a(v);
  }
  function b(v) {
    return en(v) ? x(v) : a(v);
  }
  function x(v) {
    return v === 46 ? (t.consume(v), o = 0, b) : v === 62 ? (t.exit("autolinkProtocol").type = "autolinkEmail", t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.exit("autolink"), i) : w(v);
  }
  function w(v) {
    if ((v === 45 || en(v)) && o++ < 63) {
      const S = v === 45 ? w : x;
      return t.consume(v), S;
    }
    return a(v);
  }
}
const jo = {
  partial: !0,
  tokenize: UC
};
function UC(t, i, a) {
  return o;
  function o(c) {
    return Be(c) ? Fe(t, s, "linePrefix")(c) : s(c);
  }
  function s(c) {
    return c === null || je(c) ? i(c) : a(c);
  }
}
const T0 = {
  continuation: {
    tokenize: IC
  },
  exit: HC,
  name: "blockQuote",
  tokenize: BC
};
function BC(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    if (f === 62) {
      const p = o.containerState;
      return p.open || (t.enter("blockQuote", {
        _container: !0
      }), p.open = !0), t.enter("blockQuotePrefix"), t.enter("blockQuoteMarker"), t.consume(f), t.exit("blockQuoteMarker"), c;
    }
    return a(f);
  }
  function c(f) {
    return Be(f) ? (t.enter("blockQuotePrefixWhitespace"), t.consume(f), t.exit("blockQuotePrefixWhitespace"), t.exit("blockQuotePrefix"), i) : (t.exit("blockQuotePrefix"), i(f));
  }
}
function IC(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return Be(f) ? Fe(t, c, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(f) : c(f);
  }
  function c(f) {
    return t.attempt(T0, i, a)(f);
  }
}
function HC(t) {
  t.exit("blockQuote");
}
const N0 = {
  name: "characterEscape",
  tokenize: ZC
};
function ZC(t, i, a) {
  return o;
  function o(c) {
    return t.enter("characterEscape"), t.enter("escapeMarker"), t.consume(c), t.exit("escapeMarker"), s;
  }
  function s(c) {
    return EC(c) ? (t.enter("characterEscapeValue"), t.consume(c), t.exit("characterEscapeValue"), t.exit("characterEscape"), i) : a(c);
  }
}
const A0 = {
  name: "characterReference",
  tokenize: $C
};
function $C(t, i, a) {
  const o = this;
  let s = 0, c, f;
  return p;
  function p(x) {
    return t.enter("characterReference"), t.enter("characterReferenceMarker"), t.consume(x), t.exit("characterReferenceMarker"), m;
  }
  function m(x) {
    return x === 35 ? (t.enter("characterReferenceMarkerNumeric"), t.consume(x), t.exit("characterReferenceMarkerNumeric"), g) : (t.enter("characterReferenceValue"), c = 31, f = en, b(x));
  }
  function g(x) {
    return x === 88 || x === 120 ? (t.enter("characterReferenceMarkerHexadecimal"), t.consume(x), t.exit("characterReferenceMarkerHexadecimal"), t.enter("characterReferenceValue"), c = 6, f = jC, b) : (t.enter("characterReferenceValue"), c = 7, f = tp, b(x));
  }
  function b(x) {
    if (x === 59 && s) {
      const w = t.exit("characterReferenceValue");
      return f === en && !Dp(o.sliceSerialize(w)) ? a(x) : (t.enter("characterReferenceMarker"), t.consume(x), t.exit("characterReferenceMarker"), t.exit("characterReference"), i);
    }
    return f(x) && s++ < c ? (t.consume(x), b) : a(x);
  }
}
const ip = {
  partial: !0,
  tokenize: qC
};
function qC(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return f === null ? a(f) : (t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), c);
  }
  function c(f) {
    return o.parser.lazy[o.now().line] ? a(f) : i(f);
  }
}
const Sy = {
  concrete: !0,
  name: "codeFenced",
  tokenize: VC
};
function VC(t, i, a) {
  const o = this, s = {
    partial: !0,
    tokenize: K
  };
  let c = 0, f = 0, p;
  return m;
  function m(A) {
    return g(A);
  }
  function g(A) {
    const V = o.events[o.events.length - 1];
    return c = V && V[1].type === "linePrefix" ? V[2].sliceSerialize(V[1], !0).length : 0, p = A, t.enter("codeFenced"), t.enter("codeFencedFence"), t.enter("codeFencedFenceSequence"), b(A);
  }
  function b(A) {
    return A === p ? (f++, t.consume(A), b) : f < 3 ? a(A) : (t.exit("codeFencedFenceSequence"), Be(A) ? Fe(t, x, "whitespace")(A) : x(A));
  }
  function x(A) {
    return A === null || je(A) ? (t.exit("codeFencedFence"), o.interrupt ? i(A) : t.check(ip, E, G)(A)) : (t.enter("codeFencedFenceInfo"), t.enter("chunkString", {
      contentType: "string"
    }), w(A));
  }
  function w(A) {
    return A === null || je(A) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), x(A)) : Be(A) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), Fe(t, v, "whitespace")(A)) : A === 96 && A === p ? a(A) : (t.consume(A), w);
  }
  function v(A) {
    return A === null || je(A) ? x(A) : (t.enter("codeFencedFenceMeta"), t.enter("chunkString", {
      contentType: "string"
    }), S(A));
  }
  function S(A) {
    return A === null || je(A) ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), x(A)) : A === 96 && A === p ? a(A) : (t.consume(A), S);
  }
  function E(A) {
    return t.attempt(s, G, j)(A);
  }
  function j(A) {
    return t.enter("lineEnding"), t.consume(A), t.exit("lineEnding"), N;
  }
  function N(A) {
    return c > 0 && Be(A) ? Fe(t, U, "linePrefix", c + 1)(A) : U(A);
  }
  function U(A) {
    return A === null || je(A) ? t.check(ip, E, G)(A) : (t.enter("codeFlowValue"), R(A));
  }
  function R(A) {
    return A === null || je(A) ? (t.exit("codeFlowValue"), U(A)) : (t.consume(A), R);
  }
  function G(A) {
    return t.exit("codeFenced"), i(A);
  }
  function K(A, V, ie) {
    let ze = 0;
    return I;
    function I(ee) {
      return A.enter("lineEnding"), A.consume(ee), A.exit("lineEnding"), te;
    }
    function te(ee) {
      return A.enter("codeFencedFence"), Be(ee) ? Fe(A, re, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(ee) : re(ee);
    }
    function re(ee) {
      return ee === p ? (A.enter("codeFencedFenceSequence"), Ae(ee)) : ie(ee);
    }
    function Ae(ee) {
      return ee === p ? (ze++, A.consume(ee), Ae) : ze >= f ? (A.exit("codeFencedFenceSequence"), Be(ee) ? Fe(A, pe, "whitespace")(ee) : pe(ee)) : ie(ee);
    }
    function pe(ee) {
      return ee === null || je(ee) ? (A.exit("codeFencedFence"), V(ee)) : ie(ee);
    }
  }
}
const _d = {
  name: "codeIndented",
  tokenize: GC
}, YC = {
  partial: !0,
  tokenize: FC
};
function GC(t, i, a) {
  return o;
  function o(p) {
    return t.enter("codeIndented"), C0(t, s, a, "linePrefix", 4, 4)(p);
  }
  function s(p) {
    return p === null ? f(p) : je(p) ? t.attempt(YC, s, f)(p) : (t.enter("codeFlowValue"), c(p));
  }
  function c(p) {
    return p === null || je(p) ? (t.exit("codeFlowValue"), s(p)) : (t.consume(p), c);
  }
  function f(p) {
    return t.exit("codeIndented"), i(p);
  }
}
function FC(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return o.parser.lazy[o.now().line] ? a(f) : je(f) ? (t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), s) : C0(t, i, c, "linePrefix", 4, 4)(f);
  }
  function c(f) {
    return je(f) ? s(f) : a(f);
  }
}
const XC = {
  name: "codeText",
  previous: KC,
  resolve: QC,
  tokenize: PC
};
function QC(t) {
  let i = t.length - 4, a = 3, o, s;
  if ((t[a][1].type === "lineEnding" || t[a][1].type === "space") && (t[i][1].type === "lineEnding" || t[i][1].type === "space")) {
    for (o = a; ++o < i; )
      if (t[o][1].type === "codeTextData") {
        t[a][1].type = "codeTextPadding", t[i][1].type = "codeTextPadding", a += 2, i -= 2;
        break;
      }
  }
  for (o = a - 1, i++; ++o <= i; )
    s === void 0 ? o !== i && t[o][1].type !== "lineEnding" && (s = o) : (o === i || t[o][1].type === "lineEnding") && (t[s][1].type = "codeTextData", o !== s + 2 && (t[s][1].end = t[o - 1][1].end, t.splice(s + 2, o - s - 2), i -= o - s - 2, o = s + 2), s = void 0);
  return t;
}
function KC(t) {
  return t !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function PC(t, i, a) {
  let o = 0, s, c;
  return f;
  function f(x) {
    return t.enter("codeText"), t.enter("codeTextSequence"), p(x);
  }
  function p(x) {
    return x === 96 ? (t.consume(x), o++, p) : (t.exit("codeTextSequence"), m(x));
  }
  function m(x) {
    return x === null ? a(x) : x === 32 ? (t.enter("space"), t.consume(x), t.exit("space"), m) : x === 96 ? (c = t.enter("codeTextSequence"), s = 0, b(x)) : je(x) ? (t.enter("lineEnding"), t.consume(x), t.exit("lineEnding"), m) : (t.enter("codeTextData"), g(x));
  }
  function g(x) {
    return x === null || x === 32 || x === 96 || je(x) ? (t.exit("codeTextData"), m(x)) : (t.consume(x), g);
  }
  function b(x) {
    return x === 96 ? (t.consume(x), s++, b) : s === o ? (t.exit("codeTextSequence"), t.exit("codeText"), i(x)) : (c.type = "codeTextData", g(x));
  }
}
class JC {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(i) {
    this.left = i ? [...i] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(i) {
    if (i < 0 || i >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + i + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return i < this.left.length ? this.left[i] : this.right[this.right.length - i + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(i, a) {
    const o = a ?? Number.POSITIVE_INFINITY;
    return o < this.left.length ? this.left.slice(i, o) : i > this.left.length ? this.right.slice(this.right.length - o + this.left.length, this.right.length - i + this.left.length).reverse() : this.left.slice(i).concat(this.right.slice(this.right.length - o + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(i, a, o) {
    const s = a || 0;
    this.setCursor(Math.trunc(i));
    const c = this.right.splice(this.right.length - s, Number.POSITIVE_INFINITY);
    return o && so(this.left, o), c.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(i) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(i);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(i) {
    this.setCursor(Number.POSITIVE_INFINITY), so(this.left, i);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(i) {
    this.setCursor(0), this.right.push(i);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(i) {
    this.setCursor(0), so(this.right, i.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(i) {
    if (!(i === this.left.length || i > this.left.length && this.right.length === 0 || i < 0 && this.left.length === 0))
      if (i < this.left.length) {
        const a = this.left.splice(i, Number.POSITIVE_INFINITY);
        so(this.right, a.reverse());
      } else {
        const a = this.right.splice(this.left.length + this.right.length - i, Number.POSITIVE_INFINITY);
        so(this.left, a.reverse());
      }
  }
}
function so(t, i) {
  let a = 0;
  if (i.length < 1e4)
    t.push(...i);
  else
    for (; a < i.length; )
      t.push(...i.slice(a, a + 1e4)), a += 1e4;
}
function O0(t) {
  const i = {};
  let a = -1, o, s, c, f, p, m, g;
  const b = new JC(t);
  for (; ++a < b.length; ) {
    for (; a in i; )
      a = i[a];
    if (o = b.get(a), a && o[1].type === "chunkFlow" && b.get(a - 1)[1].type === "listItemPrefix" && (m = o[1]._tokenizer.events, c = 0, c < m.length && m[c][1].type === "lineEndingBlank" && (c += 2), c < m.length && m[c][1].type === "content"))
      for (; ++c < m.length && m[c][1].type !== "content"; )
        m[c][1].type === "chunkText" && (m[c][1]._isInFirstContentOfListItem = !0, c++);
    if (o[0] === "enter")
      o[1].contentType && (Object.assign(i, WC(b, a)), a = i[a], g = !0);
    else if (o[1]._container) {
      for (c = a, s = void 0; c--; )
        if (f = b.get(c), f[1].type === "lineEnding" || f[1].type === "lineEndingBlank")
          f[0] === "enter" && (s && (b.get(s)[1].type = "lineEndingBlank"), f[1].type = "lineEnding", s = c);
        else if (!(f[1].type === "linePrefix" || f[1].type === "listItemIndent")) break;
      s && (o[1].end = {
        ...b.get(s)[1].start
      }, p = b.slice(s, a), p.unshift(o), b.splice(s, a - s + 1, p));
    }
  }
  return ai(t, 0, Number.POSITIVE_INFINITY, b.slice(0)), !g;
}
function WC(t, i) {
  const a = t.get(i)[1], o = t.get(i)[2];
  let s = i - 1;
  const c = [];
  let f = a._tokenizer;
  f || (f = o.parser[a.contentType](a.start), a._contentTypeTextTrailing && (f._contentTypeTextTrailing = !0));
  const p = f.events, m = [], g = {};
  let b, x, w = -1, v = a, S = 0, E = 0;
  const j = [E];
  for (; v; ) {
    for (; t.get(++s)[1] !== v; )
      ;
    c.push(s), v._tokenizer || (b = o.sliceStream(v), v.next || b.push(null), x && f.defineSkip(v.start), v._isInFirstContentOfListItem && (f._gfmTasklistFirstContentOfListItem = !0), f.write(b), v._isInFirstContentOfListItem && (f._gfmTasklistFirstContentOfListItem = void 0)), x = v, v = v.next;
  }
  for (v = a; ++w < p.length; )
    // Find a void token that includes a break.
    p[w][0] === "exit" && p[w - 1][0] === "enter" && p[w][1].type === p[w - 1][1].type && p[w][1].start.line !== p[w][1].end.line && (E = w + 1, j.push(E), v._tokenizer = void 0, v.previous = void 0, v = v.next);
  for (f.events = [], v ? (v._tokenizer = void 0, v.previous = void 0) : j.pop(), w = j.length; w--; ) {
    const N = p.slice(j[w], j[w + 1]), U = c.pop();
    m.push([U, U + N.length - 1]), t.splice(U, 2, N);
  }
  for (m.reverse(), w = -1; ++w < m.length; )
    g[S + m[w][0]] = S + m[w][1], S += m[w][1] - m[w][0] - 1;
  return g;
}
const e5 = {
  resolve: n5,
  tokenize: i5
}, t5 = {
  partial: !0,
  tokenize: r5
};
function n5(t) {
  return O0(t), t;
}
function i5(t, i) {
  let a;
  return o;
  function o(p) {
    return t.enter("content"), a = t.enter("chunkContent", {
      contentType: "content"
    }), s(p);
  }
  function s(p) {
    return p === null ? c(p) : je(p) ? t.check(t5, f, c)(p) : (t.consume(p), s);
  }
  function c(p) {
    return t.exit("chunkContent"), t.exit("content"), i(p);
  }
  function f(p) {
    return t.consume(p), t.exit("chunkContent"), a.next = t.enter("chunkContent", {
      contentType: "content",
      previous: a
    }), a = a.next, s;
  }
}
function r5(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return t.exit("chunkContent"), t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), Fe(t, c, "linePrefix");
  }
  function c(f) {
    if (f === null || je(f))
      return a(f);
    const p = o.events[o.events.length - 1];
    return !o.parser.constructs.disable.null.includes("codeIndented") && p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? i(f) : t.interrupt(o.parser.constructs.flow, a, i)(f);
  }
}
function M0(t, i, a, o, s, c, f, p, m) {
  const g = m || Number.POSITIVE_INFINITY;
  let b = 0;
  return x;
  function x(N) {
    return N === 60 ? (t.enter(o), t.enter(s), t.enter(c), t.consume(N), t.exit(c), w) : N === null || N === 32 || N === 41 || yu(N) ? a(N) : (t.enter(o), t.enter(f), t.enter(p), t.enter("chunkString", {
      contentType: "string"
    }), E(N));
  }
  function w(N) {
    return N === 62 ? (t.enter(c), t.consume(N), t.exit(c), t.exit(s), t.exit(o), i) : (t.enter(p), t.enter("chunkString", {
      contentType: "string"
    }), v(N));
  }
  function v(N) {
    return N === 62 ? (t.exit("chunkString"), t.exit(p), w(N)) : N === null || N === 60 || je(N) ? a(N) : (t.consume(N), N === 92 ? S : v);
  }
  function S(N) {
    return N === 60 || N === 62 || N === 92 ? (t.consume(N), v) : v(N);
  }
  function E(N) {
    return !b && (N === null || N === 41 || rt(N)) ? (t.exit("chunkString"), t.exit(p), t.exit(f), t.exit(o), i(N)) : b < g && N === 40 ? (t.consume(N), b++, E) : N === 41 ? (t.consume(N), b--, E) : N === null || N === 32 || N === 40 || yu(N) ? a(N) : (t.consume(N), N === 92 ? j : E);
  }
  function j(N) {
    return N === 40 || N === 41 || N === 92 ? (t.consume(N), E) : E(N);
  }
}
function D0(t, i, a, o, s, c) {
  const f = this;
  let p = 0, m;
  return g;
  function g(v) {
    return t.enter(o), t.enter(s), t.consume(v), t.exit(s), t.enter(c), b;
  }
  function b(v) {
    return p > 999 || v === null || v === 91 || v === 93 && !m || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    v === 94 && !p && "_hiddenFootnoteSupport" in f.parser.constructs ? a(v) : v === 93 ? (t.exit(c), t.enter(s), t.consume(v), t.exit(s), t.exit(o), i) : je(v) ? (t.enter("lineEnding"), t.consume(v), t.exit("lineEnding"), b) : (t.enter("chunkString", {
      contentType: "string"
    }), x(v));
  }
  function x(v) {
    return v === null || v === 91 || v === 93 || je(v) || p++ > 999 ? (t.exit("chunkString"), b(v)) : (t.consume(v), m || (m = !Be(v)), v === 92 ? w : x);
  }
  function w(v) {
    return v === 91 || v === 92 || v === 93 ? (t.consume(v), p++, x) : x(v);
  }
}
function R0(t, i, a, o, s, c) {
  let f;
  return p;
  function p(w) {
    return w === 34 || w === 39 || w === 40 ? (t.enter(o), t.enter(s), t.consume(w), t.exit(s), f = w === 40 ? 41 : w, m) : a(w);
  }
  function m(w) {
    return w === f ? (t.enter(s), t.consume(w), t.exit(s), t.exit(o), i) : (t.enter(c), g(w));
  }
  function g(w) {
    return w === f ? (t.exit(c), m(f)) : w === null ? a(w) : je(w) ? (t.enter("lineEnding"), t.consume(w), t.exit("lineEnding"), Fe(t, g, "linePrefix")) : (t.enter("chunkString", {
      contentType: "string"
    }), b(w));
  }
  function b(w) {
    return w === f || w === null || je(w) ? (t.exit("chunkString"), g(w)) : (t.consume(w), w === 92 ? x : b);
  }
  function x(w) {
    return w === f || w === 92 ? (t.consume(w), b) : b(w);
  }
}
function xo(t, i) {
  let a;
  return o;
  function o(s) {
    return je(s) ? (t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), a = !0, o) : Be(s) ? Fe(t, o, a ? "linePrefix" : "lineSuffix")(s) : i(s);
  }
}
const a5 = {
  name: "definition",
  tokenize: o5
}, l5 = {
  partial: !0,
  tokenize: s5
};
function o5(t, i, a) {
  const o = this;
  let s;
  return c;
  function c(v) {
    return t.enter("definition"), f(v);
  }
  function f(v) {
    return D0.call(
      o,
      t,
      p,
      // Note: we don’t need to reset the way `markdown-rs` does.
      a,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(v);
  }
  function p(v) {
    return s = li(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1)), v === 58 ? (t.enter("definitionMarker"), t.consume(v), t.exit("definitionMarker"), m) : a(v);
  }
  function m(v) {
    return rt(v) ? xo(t, g)(v) : g(v);
  }
  function g(v) {
    return M0(
      t,
      b,
      // Note: we don’t need to reset the way `markdown-rs` does.
      a,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(v);
  }
  function b(v) {
    return t.attempt(l5, x, x)(v);
  }
  function x(v) {
    return Be(v) ? Fe(t, w, "whitespace")(v) : w(v);
  }
  function w(v) {
    return v === null || je(v) ? (t.exit("definition"), o.parser.defined.push(s), i(v)) : a(v);
  }
}
function s5(t, i, a) {
  return o;
  function o(p) {
    return rt(p) ? xo(t, s)(p) : a(p);
  }
  function s(p) {
    return R0(t, c, a, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(p);
  }
  function c(p) {
    return Be(p) ? Fe(t, f, "whitespace")(p) : f(p);
  }
  function f(p) {
    return p === null || je(p) ? i(p) : a(p);
  }
}
const u5 = {
  name: "hardBreakEscape",
  tokenize: c5
};
function c5(t, i, a) {
  return o;
  function o(c) {
    return t.enter("hardBreakEscape"), t.consume(c), s;
  }
  function s(c) {
    return je(c) ? (t.exit("hardBreakEscape"), i(c)) : a(c);
  }
}
const f5 = {
  name: "headingAtx",
  resolve: d5,
  tokenize: p5
};
function d5(t, i) {
  let a = t.length - 2, o = 3;
  if (t[o][1].type === "whitespace" && (o += 2), a - 2 > o && t[a][1].type === "whitespace" && (a -= 2), t[a][1].type === "atxHeadingSequence" && (o === a - 1 || a - 4 > o && t[a - 2][1].type === "whitespace") && (a -= o + 1 === a ? 2 : 4), a > o) {
    const s = {
      type: "atxHeadingText",
      start: t[o][1].start,
      end: t[a][1].end
    }, c = {
      type: "chunkText",
      start: t[o][1].start,
      end: t[a][1].end,
      contentType: "text"
    };
    ai(t, o, a - o + 1, [["enter", s, i], ["enter", c, i], ["exit", c, i], ["exit", s, i]]);
  }
  return t;
}
function p5(t, i, a) {
  let o = 0;
  return s;
  function s(b) {
    return t.enter("atxHeading"), c(b);
  }
  function c(b) {
    return t.enter("atxHeadingSequence"), f(b);
  }
  function f(b) {
    return b === 35 && o++ < 6 ? (t.consume(b), f) : b === null || rt(b) ? (t.exit("atxHeadingSequence"), p(b)) : a(b);
  }
  function p(b) {
    return b === 35 ? (t.enter("atxHeadingSequence"), m(b)) : b === null || je(b) ? (t.exit("atxHeading"), i(b)) : Be(b) ? Fe(t, p, "whitespace")(b) : (t.enter("atxHeadingText"), g(b));
  }
  function m(b) {
    return b === 35 ? (t.consume(b), m) : (t.exit("atxHeadingSequence"), p(b));
  }
  function g(b) {
    return b === null || b === 35 || rt(b) ? (t.exit("atxHeadingText"), p(b)) : (t.consume(b), g);
  }
}
const h5 = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], zy = ["pre", "script", "style", "textarea"], m5 = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: b5,
  tokenize: x5
}, g5 = {
  partial: !0,
  tokenize: y5
};
function b5(t) {
  let i = t.length;
  for (; i-- && !(t[i][0] === "enter" && t[i][1].type === "htmlFlow"); )
    ;
  return i > 1 && t[i - 2][1].type === "linePrefix" && (t[i][1].start = t[i - 2][1].start, t[i + 1][1].start = t[i - 2][1].start, t.splice(i - 2, 2)), t;
}
function x5(t, i, a) {
  const o = this;
  let s, c, f, p, m;
  return g;
  function g(T) {
    return b(T);
  }
  function b(T) {
    return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(T), x;
  }
  function x(T) {
    return T === 33 ? (t.consume(T), w) : T === 47 ? (t.consume(T), c = !0, E) : T === 63 ? (t.consume(T), s = 3, o.interrupt ? i : z) : cn(T) ? (t.consume(T), f = String.fromCharCode(T), j) : a(T);
  }
  function w(T) {
    return T === 45 ? (t.consume(T), s = 2, v) : T === 91 ? (t.consume(T), s = 5, p = 0, S) : cn(T) ? (t.consume(T), s = 4, o.interrupt ? i : z) : a(T);
  }
  function v(T) {
    return T === 45 ? (t.consume(T), o.interrupt ? i : z) : a(T);
  }
  function S(T) {
    const C = "CDATA[";
    return T === C.charCodeAt(p++) ? (t.consume(T), p === C.length ? o.interrupt ? i : re : S) : a(T);
  }
  function E(T) {
    return cn(T) ? (t.consume(T), f = String.fromCharCode(T), j) : a(T);
  }
  function j(T) {
    if (T === null || T === 47 || T === 62 || rt(T)) {
      const C = T === 47, J = f.toLowerCase();
      return !C && !c && zy.includes(J) ? (s = 1, o.interrupt ? i(T) : re(T)) : h5.includes(f.toLowerCase()) ? (s = 6, C ? (t.consume(T), N) : o.interrupt ? i(T) : re(T)) : (s = 7, o.interrupt && !o.parser.lazy[o.now().line] ? a(T) : c ? U(T) : R(T));
    }
    return T === 45 || en(T) ? (t.consume(T), f += String.fromCharCode(T), j) : a(T);
  }
  function N(T) {
    return T === 62 ? (t.consume(T), o.interrupt ? i : re) : a(T);
  }
  function U(T) {
    return Be(T) ? (t.consume(T), U) : I(T);
  }
  function R(T) {
    return T === 47 ? (t.consume(T), I) : T === 58 || T === 95 || cn(T) ? (t.consume(T), G) : Be(T) ? (t.consume(T), R) : I(T);
  }
  function G(T) {
    return T === 45 || T === 46 || T === 58 || T === 95 || en(T) ? (t.consume(T), G) : K(T);
  }
  function K(T) {
    return T === 61 ? (t.consume(T), A) : Be(T) ? (t.consume(T), K) : R(T);
  }
  function A(T) {
    return T === null || T === 60 || T === 61 || T === 62 || T === 96 ? a(T) : T === 34 || T === 39 ? (t.consume(T), m = T, V) : Be(T) ? (t.consume(T), A) : ie(T);
  }
  function V(T) {
    return T === m ? (t.consume(T), m = null, ze) : T === null || je(T) ? a(T) : (t.consume(T), V);
  }
  function ie(T) {
    return T === null || T === 34 || T === 39 || T === 47 || T === 60 || T === 61 || T === 62 || T === 96 || rt(T) ? K(T) : (t.consume(T), ie);
  }
  function ze(T) {
    return T === 47 || T === 62 || Be(T) ? R(T) : a(T);
  }
  function I(T) {
    return T === 62 ? (t.consume(T), te) : a(T);
  }
  function te(T) {
    return T === null || je(T) ? re(T) : Be(T) ? (t.consume(T), te) : a(T);
  }
  function re(T) {
    return T === 45 && s === 2 ? (t.consume(T), W) : T === 60 && s === 1 ? (t.consume(T), ce) : T === 62 && s === 4 ? (t.consume(T), qe) : T === 63 && s === 3 ? (t.consume(T), z) : T === 93 && s === 5 ? (t.consume(T), Te) : je(T) && (s === 6 || s === 7) ? (t.exit("htmlFlowData"), t.check(g5, ut, Ae)(T)) : T === null || je(T) ? (t.exit("htmlFlowData"), Ae(T)) : (t.consume(T), re);
  }
  function Ae(T) {
    return t.check(ip, pe, ut)(T);
  }
  function pe(T) {
    return t.enter("lineEnding"), t.consume(T), t.exit("lineEnding"), ee;
  }
  function ee(T) {
    return T === null || je(T) ? Ae(T) : (t.enter("htmlFlowData"), re(T));
  }
  function W(T) {
    return T === 45 ? (t.consume(T), z) : re(T);
  }
  function ce(T) {
    return T === 47 ? (t.consume(T), f = "", me) : re(T);
  }
  function me(T) {
    if (T === 62) {
      const C = f.toLowerCase();
      return zy.includes(C) ? (t.consume(T), qe) : re(T);
    }
    return cn(T) && f.length < 8 ? (t.consume(T), f += String.fromCharCode(T), me) : re(T);
  }
  function Te(T) {
    return T === 93 ? (t.consume(T), z) : re(T);
  }
  function z(T) {
    return T === 62 ? (t.consume(T), qe) : T === 45 && s === 2 ? (t.consume(T), z) : re(T);
  }
  function qe(T) {
    return T === null || je(T) ? (t.exit("htmlFlowData"), ut(T)) : (t.consume(T), qe);
  }
  function ut(T) {
    return t.exit("htmlFlow"), i(T);
  }
}
function y5(t, i, a) {
  return o;
  function o(s) {
    return t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), t.attempt(jo, i, a);
  }
}
const v5 = {
  name: "htmlText",
  tokenize: w5
};
function w5(t, i, a) {
  const o = this;
  let s, c, f;
  return p;
  function p(z) {
    return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(z), m;
  }
  function m(z) {
    return z === 33 ? (t.consume(z), g) : z === 47 ? (t.consume(z), K) : z === 63 ? (t.consume(z), R) : cn(z) ? (t.consume(z), ie) : a(z);
  }
  function g(z) {
    return z === 45 ? (t.consume(z), b) : z === 91 ? (t.consume(z), c = 0, S) : cn(z) ? (t.consume(z), U) : a(z);
  }
  function b(z) {
    return z === 45 ? (t.consume(z), v) : a(z);
  }
  function x(z) {
    return z === null ? a(z) : z === 45 ? (t.consume(z), w) : je(z) ? (f = x, ce(z)) : (t.consume(z), x);
  }
  function w(z) {
    return z === 45 ? (t.consume(z), v) : x(z);
  }
  function v(z) {
    return z === 62 ? W(z) : z === 45 ? w(z) : x(z);
  }
  function S(z) {
    const qe = "CDATA[";
    return z === qe.charCodeAt(c++) ? (t.consume(z), c === qe.length ? E : S) : a(z);
  }
  function E(z) {
    return z === null ? a(z) : z === 93 ? (t.consume(z), j) : je(z) ? (f = E, ce(z)) : (t.consume(z), E);
  }
  function j(z) {
    return z === 93 ? (t.consume(z), N) : E(z);
  }
  function N(z) {
    return z === 62 ? W(z) : z === 93 ? (t.consume(z), N) : E(z);
  }
  function U(z) {
    return z === null || z === 62 ? W(z) : je(z) ? (f = U, ce(z)) : (t.consume(z), U);
  }
  function R(z) {
    return z === null ? a(z) : z === 63 ? (t.consume(z), G) : je(z) ? (f = R, ce(z)) : (t.consume(z), R);
  }
  function G(z) {
    return z === 62 ? W(z) : R(z);
  }
  function K(z) {
    return cn(z) ? (t.consume(z), A) : a(z);
  }
  function A(z) {
    return z === 45 || en(z) ? (t.consume(z), A) : V(z);
  }
  function V(z) {
    return je(z) ? (f = V, ce(z)) : Be(z) ? (t.consume(z), V) : W(z);
  }
  function ie(z) {
    return z === 45 || en(z) ? (t.consume(z), ie) : z === 47 || z === 62 || rt(z) ? ze(z) : a(z);
  }
  function ze(z) {
    return z === 47 ? (t.consume(z), W) : z === 58 || z === 95 || cn(z) ? (t.consume(z), I) : je(z) ? (f = ze, ce(z)) : Be(z) ? (t.consume(z), ze) : W(z);
  }
  function I(z) {
    return z === 45 || z === 46 || z === 58 || z === 95 || en(z) ? (t.consume(z), I) : te(z);
  }
  function te(z) {
    return z === 61 ? (t.consume(z), re) : je(z) ? (f = te, ce(z)) : Be(z) ? (t.consume(z), te) : ze(z);
  }
  function re(z) {
    return z === null || z === 60 || z === 61 || z === 62 || z === 96 ? a(z) : z === 34 || z === 39 ? (t.consume(z), s = z, Ae) : je(z) ? (f = re, ce(z)) : Be(z) ? (t.consume(z), re) : (t.consume(z), pe);
  }
  function Ae(z) {
    return z === s ? (t.consume(z), s = void 0, ee) : z === null ? a(z) : je(z) ? (f = Ae, ce(z)) : (t.consume(z), Ae);
  }
  function pe(z) {
    return z === null || z === 34 || z === 39 || z === 60 || z === 61 || z === 96 ? a(z) : z === 47 || z === 62 || rt(z) ? ze(z) : (t.consume(z), pe);
  }
  function ee(z) {
    return z === 47 || z === 62 || rt(z) ? ze(z) : a(z);
  }
  function W(z) {
    return z === 62 ? (t.consume(z), t.exit("htmlTextData"), t.exit("htmlText"), i) : a(z);
  }
  function ce(z) {
    return t.exit("htmlTextData"), t.enter("lineEnding"), t.consume(z), t.exit("lineEnding"), me;
  }
  function me(z) {
    return Be(z) ? Fe(t, Te, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(z) : Te(z);
  }
  function Te(z) {
    return t.enter("htmlTextData"), f(z);
  }
}
const Rp = {
  name: "labelEnd",
  resolveAll: _5,
  resolveTo: j5,
  tokenize: E5
}, k5 = {
  tokenize: C5
}, S5 = {
  tokenize: T5
}, z5 = {
  tokenize: N5
};
function _5(t) {
  let i = -1;
  const a = [];
  for (; ++i < t.length; ) {
    const o = t[i][1];
    if (a.push(t[i]), o.type === "labelImage" || o.type === "labelLink" || o.type === "labelEnd") {
      const s = o.type === "labelImage" ? 4 : 2;
      o.type = "data", i += s;
    }
  }
  return t.length !== a.length && ai(t, 0, t.length, a), t;
}
function j5(t, i) {
  let a = t.length, o = 0, s, c, f;
  for (; a--; ) {
    const b = t[a][1];
    if (s) {
      if (b.type === "link" || b.type === "labelLink" && b._inactive)
        break;
      t[a][0] === "enter" && b.type === "labelLink" && (b._inactive = !0);
    } else if (c) {
      if (t[a][0] === "enter" && (b.type === "labelImage" || b.type === "labelLink") && !b._balanced && (s = a, b.type !== "labelLink")) {
        o = 2;
        break;
      }
    } else b.type === "labelEnd" && (c = a);
  }
  const p = {
    type: t[s][1].type === "labelLink" ? "link" : "image",
    start: {
      ...t[s][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  }, m = {
    type: "label",
    start: {
      ...t[s][1].start
    },
    end: {
      ...t[c][1].end
    }
  }, g = {
    type: "labelText",
    start: {
      ...t[s + o + 2][1].end
    },
    end: {
      ...t[c - 2][1].start
    }
  };
  return f = [["enter", p, i], ["enter", m, i]], f = Fn(f, t.slice(s + 1, s + o + 3)), f = Fn(f, [["enter", g, i]]), f = Fn(f, Tu(i.parser.constructs.insideSpan.null, t.slice(s + o + 4, c - 3), i)), f = Fn(f, [["exit", g, i], t[c - 2], t[c - 1], ["exit", m, i]]), f = Fn(f, t.slice(c + 1)), f = Fn(f, [["exit", p, i]]), ai(t, s, t.length, f), t;
}
function E5(t, i, a) {
  const o = this, s = o._labelStarts;
  let c, f;
  if (s) {
    for (; s.length > 0 && s[s.length - 1]._balanced; )
      s.pop();
    c = s[s.length - 1];
  }
  return p;
  function p(w) {
    return c ? c._inactive ? x(w) : (f = o.parser.defined.includes(li(o.sliceSerialize({
      start: c.end,
      end: o.now()
    }))), t.enter("labelEnd"), t.enter("labelMarker"), t.consume(w), t.exit("labelMarker"), t.exit("labelEnd"), m) : a(w);
  }
  function m(w) {
    return w === 40 ? t.attempt(k5, b, f ? b : x)(w) : w === 91 ? t.attempt(S5, b, f ? g : x)(w) : f ? b(w) : x(w);
  }
  function g(w) {
    return t.attempt(z5, b, x)(w);
  }
  function b(w) {
    return s.pop(), i(w);
  }
  function x(w) {
    return c._balanced = !0, a(w);
  }
}
function C5(t, i, a) {
  return o;
  function o(x) {
    return t.enter("resource"), t.enter("resourceMarker"), t.consume(x), t.exit("resourceMarker"), s;
  }
  function s(x) {
    return rt(x) ? xo(t, c)(x) : c(x);
  }
  function c(x) {
    return x === 41 ? b(x) : M0(t, f, p, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(x);
  }
  function f(x) {
    return rt(x) ? xo(t, m)(x) : b(x);
  }
  function p(x) {
    return a(x);
  }
  function m(x) {
    return x === 34 || x === 39 || x === 40 ? R0(t, g, a, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(x) : b(x);
  }
  function g(x) {
    return rt(x) ? xo(t, b)(x) : b(x);
  }
  function b(x) {
    return x === 41 ? (t.enter("resourceMarker"), t.consume(x), t.exit("resourceMarker"), t.exit("resource"), i) : a(x);
  }
}
function T5(t, i, a) {
  const o = this;
  return s;
  function s(p) {
    return D0.call(o, t, c, f, "reference", "referenceMarker", "referenceString")(p);
  }
  function c(p) {
    return o.parser.defined.includes(li(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1))) ? i(p) : a(p);
  }
  function f(p) {
    return a(p);
  }
}
function N5(t, i, a) {
  return o;
  function o(c) {
    return t.enter("reference"), t.enter("referenceMarker"), t.consume(c), t.exit("referenceMarker"), s;
  }
  function s(c) {
    return c === 93 ? (t.enter("referenceMarker"), t.consume(c), t.exit("referenceMarker"), t.exit("reference"), i) : a(c);
  }
}
const A5 = {
  name: "labelStartImage",
  resolveAll: Rp.resolveAll,
  tokenize: O5
};
function O5(t, i, a) {
  const o = this;
  let s;
  return c;
  function c(m) {
    return t.enter("labelImage"), t.enter("labelImageMarker"), t.consume(m), t.exit("labelImageMarker"), f;
  }
  function f(m) {
    return m === 91 ? (t.enter("labelMarker"), t.consume(m), t.exit("labelMarker"), s = t.exit("labelImage"), p) : a(m);
  }
  function p(m) {
    return m === 94 && "_hiddenFootnoteSupport" in o.parser.constructs ? a(m) : (o._labelStarts = o._labelStarts || [], o._labelStarts.push(s), i(m));
  }
}
const M5 = {
  name: "labelStartLink",
  resolveAll: Rp.resolveAll,
  tokenize: D5
};
function D5(t, i, a) {
  const o = this;
  let s;
  return c;
  function c(p) {
    return t.enter("labelLink"), t.enter("labelMarker"), t.consume(p), t.exit("labelMarker"), s = t.exit("labelLink"), f;
  }
  function f(p) {
    return p === 94 && "_hiddenFootnoteSupport" in o.parser.constructs ? a(p) : (o._labelStarts = o._labelStarts || [], o._labelStarts.push(s), i(p));
  }
}
const jd = {
  name: "lineEnding",
  tokenize: R5
};
function R5(t, i) {
  return a;
  function a(o) {
    return t.enter("lineEnding"), t.consume(o), t.exit("lineEnding"), Fe(t, i, "linePrefix");
  }
}
const cu = {
  name: "thematicBreak",
  tokenize: L5
};
function L5(t, i, a) {
  let o = 0, s;
  return c;
  function c(g) {
    return t.enter("thematicBreak"), f(g);
  }
  function f(g) {
    return s = g, p(g);
  }
  function p(g) {
    return g === s ? (t.enter("thematicBreakSequence"), m(g)) : o >= 3 && (g === null || je(g)) ? (t.exit("thematicBreak"), i(g)) : a(g);
  }
  function m(g) {
    return g === s ? (t.consume(g), o++, m) : (t.exit("thematicBreakSequence"), Be(g) ? Fe(t, p, "whitespace")(g) : p(g));
  }
}
const xn = {
  continuation: {
    tokenize: H5
  },
  exit: $5,
  name: "list",
  tokenize: I5
}, U5 = {
  partial: !0,
  tokenize: q5
}, B5 = {
  partial: !0,
  tokenize: Z5
};
function I5(t, i, a) {
  const o = this, s = o.events[o.events.length - 1];
  let c = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], !0).length : 0, f = 0;
  return p;
  function p(v) {
    const S = o.containerState.type || (v === 42 || v === 43 || v === 45 ? "listUnordered" : "listOrdered");
    if (S === "listUnordered" ? !o.containerState.marker || v === o.containerState.marker : tp(v)) {
      if (o.containerState.type || (o.containerState.type = S, t.enter(S, {
        _container: !0
      })), S === "listUnordered")
        return t.enter("listItemPrefix"), v === 42 || v === 45 ? t.check(cu, a, g)(v) : g(v);
      if (!o.interrupt || v === 49)
        return t.enter("listItemPrefix"), t.enter("listItemValue"), m(v);
    }
    return a(v);
  }
  function m(v) {
    return tp(v) && ++f < 10 ? (t.consume(v), m) : (!o.interrupt || f < 2) && (o.containerState.marker ? v === o.containerState.marker : v === 41 || v === 46) ? (t.exit("listItemValue"), g(v)) : a(v);
  }
  function g(v) {
    return t.enter("listItemMarker"), t.consume(v), t.exit("listItemMarker"), o.containerState.marker = o.containerState.marker || v, t.check(
      jo,
      // Can’t be empty when interrupting.
      o.interrupt ? a : b,
      t.attempt(U5, w, x)
    );
  }
  function b(v) {
    return o.containerState.initialBlankLine = !0, c++, w(v);
  }
  function x(v) {
    return Be(v) ? (t.enter("listItemPrefixWhitespace"), t.consume(v), t.exit("listItemPrefixWhitespace"), w) : a(v);
  }
  function w(v) {
    return o.containerState.size = c + o.sliceSerialize(t.exit("listItemPrefix"), !0).length, i(v);
  }
}
function H5(t, i, a) {
  const o = this;
  return o.containerState._closeFlow = void 0, t.check(jo, s, c);
  function s(p) {
    return o.containerState.furtherBlankLines = o.containerState.furtherBlankLines || o.containerState.initialBlankLine, Fe(t, i, "listItemIndent", o.containerState.size + 1)(p);
  }
  function c(p) {
    return o.containerState.furtherBlankLines || !Be(p) ? (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, f(p)) : (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, t.attempt(B5, i, f)(p));
  }
  function f(p) {
    return o.containerState._closeFlow = !0, o.interrupt = void 0, Fe(t, t.attempt(xn, i, a), "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p);
  }
}
function Z5(t, i, a) {
  const o = this;
  return Fe(t, s, "listItemIndent", o.containerState.size + 1);
  function s(c) {
    const f = o.events[o.events.length - 1];
    return f && f[1].type === "listItemIndent" && f[2].sliceSerialize(f[1], !0).length === o.containerState.size ? i(c) : a(c);
  }
}
function $5(t) {
  t.exit(this.containerState.type);
}
function q5(t, i, a) {
  const o = this;
  return Fe(t, s, "listItemPrefixWhitespace", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function s(c) {
    const f = o.events[o.events.length - 1];
    return !Be(c) && f && f[1].type === "listItemPrefixWhitespace" ? i(c) : a(c);
  }
}
const _y = {
  name: "setextUnderline",
  resolveTo: V5,
  tokenize: Y5
};
function V5(t, i) {
  const a = new vu();
  let o = t.length, s, c, f;
  for (; o--; )
    if (t[o][0] === "enter") {
      if (t[o][1].type === "content") {
        s = o;
        break;
      }
      t[o][1].type === "paragraph" && (c = o);
    } else
      t[o][1].type === "content" && a.add(o, 1, []), !f && t[o][1].type === "definition" && (f = o);
  const p = {
    type: "setextHeading",
    start: {
      ...t[s][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  };
  return t[c][1].type = "setextHeadingText", f ? (a.add(c, 0, [["enter", p, i]]), a.add(f + 1, 0, [["exit", t[s][1], i]]), t[s][1].end = {
    ...t[f][1].end
  }) : t[s][1] = p, a.add(t.length, 0, [["exit", p, i]]), a.consume(t), t;
}
function Y5(t, i, a) {
  const o = this;
  let s;
  return c;
  function c(g) {
    let b = o.events.length, x;
    for (; b--; )
      if (o.events[b][1].type !== "lineEnding" && o.events[b][1].type !== "linePrefix" && o.events[b][1].type !== "content") {
        x = o.events[b][1].type === "paragraph";
        break;
      }
    return !o.parser.lazy[o.now().line] && (o.interrupt || x) ? (t.enter("setextHeadingLine"), s = g, f(g)) : a(g);
  }
  function f(g) {
    return t.enter("setextHeadingLineSequence"), p(g);
  }
  function p(g) {
    return g === s ? (t.consume(g), p) : (t.exit("setextHeadingLineSequence"), Be(g) ? Fe(t, m, "lineSuffix")(g) : m(g));
  }
  function m(g) {
    return g === null || je(g) ? (t.exit("setextHeadingLine"), i(g)) : a(g);
  }
}
const G5 = {
  tokenize: F5
};
function F5(t) {
  const i = this, a = t.attempt(
    // Try to parse a blank line.
    jo,
    o,
    // Try to parse initial flow (essentially, only code).
    t.attempt(this.parser.constructs.flowInitial, s, Fe(t, t.attempt(this.parser.constructs.flow, s, t.attempt(e5, s)), "linePrefix"))
  );
  return a;
  function o(c) {
    if (c === null) {
      t.consume(c);
      return;
    }
    return t.enter("lineEndingBlank"), t.consume(c), t.exit("lineEndingBlank"), i.currentConstruct = void 0, a;
  }
  function s(c) {
    if (c === null) {
      t.consume(c);
      return;
    }
    return t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), i.currentConstruct = void 0, a;
  }
}
const X5 = {
  resolveAll: U0()
}, Q5 = L0("string"), K5 = L0("text");
function L0(t) {
  return {
    resolveAll: U0(t === "text" ? P5 : void 0),
    tokenize: i
  };
  function i(a) {
    const o = this, s = this.parser.constructs[t], c = a.attempt(s, f, p);
    return f;
    function f(b) {
      return g(b) ? c(b) : p(b);
    }
    function p(b) {
      if (b === null) {
        a.consume(b);
        return;
      }
      return a.enter("data"), a.consume(b), m;
    }
    function m(b) {
      return g(b) ? (a.exit("data"), c(b)) : (a.consume(b), m);
    }
    function g(b) {
      if (b === null)
        return !0;
      const x = s[b];
      let w = -1;
      if (x)
        for (; ++w < x.length; ) {
          const v = x[w];
          if (!v.previous || v.previous.call(o, o.previous))
            return !0;
        }
      return !1;
    }
  }
}
function U0(t) {
  return i;
  function i(a, o) {
    let s = -1, c;
    for (; ++s <= a.length; )
      c === void 0 ? a[s] && a[s][1].type === "data" && (c = s, s++) : (!a[s] || a[s][1].type !== "data") && (s !== c + 2 && (a[c][1].end = a[s - 1][1].end, a.splice(c + 2, s - c - 2), s = c + 2), c = void 0);
    return t ? t(a, o) : a;
  }
}
function P5(t, i) {
  const a = new vu();
  let o = 0;
  for (; ++o <= t.length; )
    if ((o === t.length || t[o][1].type === "lineEnding") && t[o - 1][1].type === "data") {
      const s = t[o - 1][1], c = i.sliceStream(s);
      let f = c.length, p = -1, m = 0, g;
      for (; f--; ) {
        const b = c[f];
        if (typeof b == "string") {
          for (p = b.length; b.charCodeAt(p - 1) === 32; )
            m++, p--;
          if (p)
            break;
          p = -1;
        } else if (b === -2)
          g = !0, m++;
        else if (b !== -1) {
          f++;
          break;
        }
      }
      if (i._contentTypeTextTrailing && o === t.length && (m = 0), m) {
        const b = {
          type: o === t.length || g || m < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: f ? p : s.start._bufferIndex + p,
            _index: s.start._index + f,
            line: s.end.line,
            column: s.end.column - m,
            offset: s.end.offset - m
          },
          end: {
            ...s.end
          }
        };
        s.end = {
          ...b.start
        }, s.start.offset === s.end.offset ? Object.assign(s, b) : a.add(o, 0, [["enter", b, i], ["exit", b, i]]);
      }
      o++;
    }
  return a.consume(t), t;
}
const J5 = {
  42: xn,
  43: xn,
  45: xn,
  48: xn,
  49: xn,
  50: xn,
  51: xn,
  52: xn,
  53: xn,
  54: xn,
  55: xn,
  56: xn,
  57: xn,
  62: T0
}, W5 = {
  91: a5
}, eT = {
  [-2]: _d,
  [-1]: _d,
  32: _d
}, tT = {
  35: f5,
  42: cu,
  45: [_y, cu],
  60: m5,
  61: _y,
  95: cu,
  96: Sy,
  126: Sy
}, nT = {
  38: A0,
  92: N0
}, iT = {
  [-5]: jd,
  [-4]: jd,
  [-3]: jd,
  33: A5,
  38: A0,
  42: np,
  60: [RC, v5],
  91: M5,
  92: [u5, N0],
  93: Rp,
  95: np,
  96: XC
}, rT = {
  null: [np, X5]
}, aT = {
  null: [42, 95]
}, lT = {
  null: []
}, oT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: aT,
  contentInitial: W5,
  disable: lT,
  document: J5,
  flow: tT,
  flowInitial: eT,
  insideSpan: rT,
  string: nT,
  text: iT
}, Symbol.toStringTag, { value: "Module" }));
function sT(t, i, a) {
  let o = {
    _bufferIndex: -1,
    _index: 0,
    line: a && a.line || 1,
    column: a && a.column || 1,
    offset: a && a.offset || 0
  };
  const s = {}, c = [];
  let f = [], p = [];
  const m = {
    attempt: V(K),
    check: V(A),
    consume: U,
    enter: R,
    exit: G,
    interrupt: V(A, {
      interrupt: !0
    })
  }, g = {
    code: null,
    containerState: {},
    defineSkip: E,
    events: [],
    now: S,
    parser: t,
    previous: null,
    sliceSerialize: w,
    sliceStream: v,
    write: x
  };
  let b = i.tokenize.call(g, m);
  return i.resolveAll && c.push(i), g;
  function x(te) {
    return f = Fn(f, te), j(), f[f.length - 1] !== null ? [] : (ie(i, 0), g.events = Tu(c, g.events, g), g.events);
  }
  function w(te, re) {
    return cT(v(te), re);
  }
  function v(te) {
    return uT(f, te);
  }
  function S() {
    const {
      _bufferIndex: te,
      _index: re,
      line: Ae,
      column: pe,
      offset: ee
    } = o;
    return {
      _bufferIndex: te,
      _index: re,
      line: Ae,
      column: pe,
      offset: ee
    };
  }
  function E(te) {
    s[te.line] = te.column, I();
  }
  function j() {
    for (; o._index < f.length; ) {
      const te = f[o._index];
      if (typeof te == "string") {
        const re = o._index;
        for (o._bufferIndex < 0 && (o._bufferIndex = 0); o._index === re && o._bufferIndex < te.length; )
          N(te.charCodeAt(o._bufferIndex));
      } else
        N(te);
    }
  }
  function N(te) {
    b = b(te);
  }
  function U(te) {
    je(te) ? (o.line++, o.column = 1, o.offset += te === -3 ? 2 : 1, I()) : te !== -1 && (o.column++, o.offset++), o._bufferIndex < 0 ? o._index++ : (o._bufferIndex++, o._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    f[o._index].length && (o._bufferIndex = -1, o._index++)), g.previous = te;
  }
  function R(te, re) {
    const Ae = re || {};
    return Ae.type = te, Ae.start = S(), g.events.push(["enter", Ae, g]), p.push(Ae), Ae;
  }
  function G(te) {
    const re = p.pop();
    return re.end = S(), g.events.push(["exit", re, g]), re;
  }
  function K(te, re) {
    ie(te, re.from);
  }
  function A(te, re) {
    re.restore();
  }
  function V(te, re) {
    return Ae;
    function Ae(pe, ee, W) {
      let ce, me, Te, z;
      return Array.isArray(pe) ? (
        /* c8 ignore next 1 */
        ut(pe)
      ) : "tokenize" in pe ? (
        // Looks like a construct.
        ut([
          /** @type {Construct} */
          pe
        ])
      ) : qe(pe);
      function qe(le) {
        return Z;
        function Z(se) {
          const Se = se !== null && le[se], Ee = se !== null && le.null, fe = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Se) ? Se : Se ? [Se] : [],
            ...Array.isArray(Ee) ? Ee : Ee ? [Ee] : []
          ];
          return ut(fe)(se);
        }
      }
      function ut(le) {
        return ce = le, me = 0, le.length === 0 ? W : T(le[me]);
      }
      function T(le) {
        return Z;
        function Z(se) {
          return z = ze(), Te = le, le.partial || (g.currentConstruct = le), le.name && g.parser.constructs.disable.null.includes(le.name) ? J() : le.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            re ? Object.assign(Object.create(g), re) : g,
            m,
            C,
            J
          )(se);
        }
      }
      function C(le) {
        return te(Te, z), ee;
      }
      function J(le) {
        return z.restore(), ++me < ce.length ? T(ce[me]) : W;
      }
    }
  }
  function ie(te, re) {
    te.resolveAll && !c.includes(te) && c.push(te), te.resolve && ai(g.events, re, g.events.length - re, te.resolve(g.events.slice(re), g)), te.resolveTo && (g.events = te.resolveTo(g.events, g));
  }
  function ze() {
    const te = S(), re = g.previous, Ae = g.currentConstruct, pe = g.events.length, ee = Array.from(p);
    return {
      from: pe,
      restore: W
    };
    function W() {
      o = te, g.previous = re, g.currentConstruct = Ae, g.events.length = pe, p = ee, I();
    }
  }
  function I() {
    o.line in s && o.column < 2 && (o.column = s[o.line], o.offset += s[o.line] - 1);
  }
}
function uT(t, i) {
  const a = i.start._index, o = i.start._bufferIndex, s = i.end._index, c = i.end._bufferIndex;
  let f;
  if (a === s)
    f = [t[a].slice(o, c)];
  else {
    if (f = t.slice(a, s), o > -1) {
      const p = f[0];
      typeof p == "string" ? f[0] = p.slice(o) : f.shift();
    }
    c > 0 && f.push(t[s].slice(0, c));
  }
  return f;
}
function cT(t, i) {
  let a = -1;
  const o = [];
  let s;
  for (; ++a < t.length; ) {
    const c = t[a];
    let f;
    if (typeof c == "string")
      f = c;
    else
      switch (c) {
        case -5: {
          f = "\r";
          break;
        }
        case -4: {
          f = `
`;
          break;
        }
        case -3: {
          f = `\r
`;
          break;
        }
        case -2: {
          f = i ? " " : "	";
          break;
        }
        case -1: {
          if (!i && s)
            continue;
          f = " ";
          break;
        }
        default:
          f = String.fromCharCode(c);
      }
    s = c === -2, o.push(f);
  }
  return o.join("");
}
function fT(t) {
  const o = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      j0([oT, ...(t || {}).extensions || []])
    ),
    content: s(CC),
    defined: [],
    document: s(NC),
    flow: s(G5),
    lazy: {},
    string: s(Q5),
    text: s(K5)
  };
  return o;
  function s(c) {
    return f;
    function f(p) {
      return sT(o, c, p);
    }
  }
}
function dT(t) {
  for (; !O0(t); )
    ;
  return t;
}
const jy = /[\0\t\n\r]/g;
function pT() {
  let t = 1, i = "", a = !0, o;
  return s;
  function s(c, f, p) {
    c = i + (typeof c == "string" ? c.toString() : new TextDecoder(f || void 0).decode(c));
    const m = [];
    let g = 0;
    for (i = "", a && (c.charCodeAt(0) === 65279 && g++, a = void 0); g < c.length; ) {
      jy.lastIndex = g;
      const b = jy.exec(c), x = b && b.index !== void 0 ? b.index : c.length, w = c.charCodeAt(x);
      if (!b) {
        i = c.slice(g);
        break;
      }
      if (w === 10 && g === x && o)
        m.push(-3), o = void 0;
      else
        switch (o && (m.push(-5), o = void 0), g < x && (m.push(c.slice(g, x)), t += x - g), w) {
          case 0: {
            m.push(65533), t++;
            break;
          }
          case 9: {
            const v = Math.ceil(t / 4) * 4;
            for (m.push(-2); t++ < v; )
              m.push(-1);
            break;
          }
          case 10: {
            m.push(-4), t = 1;
            break;
          }
          default:
            o = !0, t = 1;
        }
      g = x + 1;
    }
    return p && (o && m.push(-5), i && m.push(i), m.push(null)), m;
  }
}
const hT = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function mT(t) {
  return t.replace(hT, gT);
}
function gT(t, i, a) {
  if (i)
    return i;
  if (a.charCodeAt(0) === 35) {
    const s = a.charCodeAt(1), c = s === 120 || s === 88;
    return E0(a.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return Dp(a) || t;
}
const B0 = {}.hasOwnProperty;
function bT(t, i, a) {
  return i && typeof i == "object" && (a = i, i = void 0), xT(a)(dT(fT(a).document().write(pT()(t, i, !0))));
}
function xT(t) {
  const i = {
    afterExit: [],
    beforeEnter: [],
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: f(Kt),
      autolinkProtocol: I,
      autolinkEmail: I,
      atxHeading: f(ht),
      blockQuote: f(fe),
      characterEscape: I,
      characterReference: I,
      codeFenced: f(_e),
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: p,
      codeIndented: f(_e, p),
      codeText: f(It, p),
      codeTextData: I,
      data: I,
      codeFlowValue: I,
      definition: f(Si),
      definitionDestinationString: p,
      definitionLabelString: p,
      definitionTitleString: p,
      emphasis: f(On),
      hardBreakEscape: f(ot),
      hardBreakTrailing: f(ot),
      htmlFlow: f(Xe, p),
      htmlFlowData: I,
      htmlText: f(Xe, p),
      htmlTextData: I,
      image: f(fn),
      label: p,
      link: f(Kt),
      listItem: f(Mn),
      listItemValue: v,
      listOrdered: f(mt, w),
      listUnordered: f(mt),
      paragraph: f(zi),
      reference: C,
      referenceString: p,
      resourceDestinationString: p,
      resourceTitleString: p,
      setextHeading: f(ht),
      strong: f(Dn),
      thematicBreak: f(Rn)
    },
    exit: {
      atxHeading: g(),
      atxHeadingSequence: A,
      autolink: g(),
      autolinkEmail: Ee,
      autolinkProtocol: Se,
      blockQuote: g(),
      characterEscapeValue: te,
      characterReferenceMarkerHexadecimal: le,
      characterReferenceMarkerNumeric: le,
      characterReferenceValue: Z,
      characterReference: se,
      codeFenced: g(N),
      codeFencedFence: j,
      codeFencedFenceInfo: S,
      codeFencedFenceMeta: E,
      codeFlowValue: te,
      codeIndented: g(U),
      codeText: g(W),
      codeTextData: te,
      data: te,
      definition: g(),
      definitionDestinationString: K,
      definitionLabelString: R,
      definitionTitleString: G,
      emphasis: g(),
      hardBreakEscape: g(Ae),
      hardBreakTrailing: g(Ae),
      htmlFlow: g(pe),
      htmlFlowData: te,
      htmlText: g(ee),
      htmlTextData: te,
      image: g(me),
      label: z,
      labelText: Te,
      lineEnding: re,
      link: g(ce),
      listItem: g(),
      listOrdered: g(),
      listUnordered: g(),
      paragraph: g(),
      referenceString: J,
      resourceDestinationString: qe,
      resourceTitleString: ut,
      resource: T,
      setextHeading: g(ze),
      setextHeadingLineSequence: ie,
      setextHeadingText: V,
      strong: g(),
      thematicBreak: g()
    }
  };
  I0(i, (t || {}).mdastExtensions || []);
  const a = {};
  return o;
  function o(Y) {
    let ae = {
      type: "root",
      children: [],
      position: void 0
    };
    const ge = {
      stack: [ae],
      tokenStack: [],
      config: i,
      enter: m,
      exit: b,
      buffer: p,
      resume: x,
      data: a
    }, Oe = [], zt = [];
    let Ne = -1;
    for (; ++Ne < Y.length; )
      if (zt.push(Y[Ne]), Y[Ne][1].type === "listOrdered" || Y[Ne][1].type === "listUnordered")
        if (Y[Ne][0] === "enter")
          Oe.push(zt.length - 1);
        else {
          const yt = Oe.pop();
          c(zt, yt);
        }
    for (Y = zt, Ne = -1; ++Ne < Y.length; ) {
      const yt = i[Y[Ne][0]];
      Y[Ne][0] === "enter" && i.beforeEnter.length > 0 && s(i.beforeEnter, {
        ...ge,
        sliceSerialize: Y[Ne][2].sliceSerialize
      }, Y[Ne][1]), B0.call(yt, Y[Ne][1].type) && yt[Y[Ne][1].type].call({
        ...ge,
        sliceSerialize: Y[Ne][2].sliceSerialize
      }, Y[Ne][1]), Y[Ne][0] === "exit" && i.afterExit.length > 0 && s(i.afterExit, {
        ...ge,
        sliceSerialize: Y[Ne][2].sliceSerialize
      }, Y[Ne][1]);
    }
    if (ge.tokenStack.length > 0) {
      const yt = ge.tokenStack[ge.tokenStack.length - 1];
      (yt[1] || Ey).call(ge, void 0, yt[0]);
    }
    for (ae.position = {
      start: xr(Y.length > 0 ? Y[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: xr(Y.length > 0 ? Y[Y.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Ne = -1; ++Ne < i.transforms.length; )
      ae = i.transforms[Ne](ae) || ae;
    return ae;
  }
  function s(Y, ae, ge) {
    let Oe = -1;
    for (; ++Oe < Y.length; )
      Y[Oe].call(ae, ge);
  }
  function c(Y, ae) {
    const ge = Y.length - 1;
    let Oe = ae - 1, zt = -1, Ne = !1, yt, _t, Pt, jt;
    const nn = [];
    for (; ++Oe <= ge; ) {
      const Ht = Y[Oe];
      switch (Ht[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ht[0] === "enter" ? zt++ : zt--, jt = void 0;
          break;
        }
        case "lineEndingBlank": {
          Ht[0] === "enter" && (yt && !jt && !zt && !Pt && (Pt = Oe), jt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          jt = void 0;
      }
      if (!zt && Ht[0] === "enter" && Ht[1].type === "listItemPrefix" || zt === -1 && Ht[0] === "exit" && (Ht[1].type === "listUnordered" || Ht[1].type === "listOrdered")) {
        if (yt) {
          let Qn = Oe;
          for (_t = void 0; Qn--; ) {
            const rn = Y[Qn];
            if (rn[1].type === "lineEnding" || rn[1].type === "lineEndingBlank") {
              if (rn[0] === "exit") continue;
              _t && (Y[_t][1].type = "lineEndingBlank", Ne = !0), rn[1].type = "lineEnding", _t = Qn;
            } else if (!(rn[1].type === "linePrefix" || rn[1].type === "blockQuotePrefix" || rn[1].type === "blockQuotePrefixWhitespace" || rn[1].type === "blockQuoteMarker" || rn[1].type === "listItemIndent")) break;
          }
          Pt && (!_t || Pt < _t) && (yt._spread = !0), yt.end = Object.assign({}, _t ? Y[_t][1].start : Ht[1].end), nn.push({
            at: _t || Oe,
            event: ["exit", yt, Ht[2]]
          });
        }
        if (Ht[1].type === "listItemPrefix") {
          const Qn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ht[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          yt = Qn, nn.push({
            at: Oe,
            event: ["enter", Qn, Ht[2]]
          }), Pt = void 0, jt = !0;
        }
      }
    }
    const Yi = Y.splice(ae);
    let Et = 0;
    for (Oe = -1; ++Oe < Yi.length; ) {
      for (; Et < nn.length && nn[Et].at === ae + Oe; )
        Y.push(nn[Et++].event);
      Y.push(Yi[Oe]);
    }
    Y[ae][1]._spread = Ne;
  }
  function f(Y, ae) {
    return ge;
    function ge(Oe) {
      m.call(this, Y(Oe), Oe), ae && ae.call(this, Oe);
    }
  }
  function p() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function m(Y, ae, ge) {
    this.stack[this.stack.length - 1].children.push(Y), this.stack.push(Y), this.tokenStack.push([ae, ge || void 0]), Y.position = {
      start: xr(ae.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function g(Y) {
    return ae;
    function ae(ge) {
      Y && Y.call(this, ge), b.call(this, ge);
    }
  }
  function b(Y, ae) {
    const ge = this.stack.pop(), Oe = this.tokenStack.pop();
    if (!Oe)
      throw new Error("Cannot close `" + Y.type + "` (" + bo({
        start: Y.start,
        end: Y.end
      }) + "): it’s not open");
    Oe[0].type !== Y.type && (ae ? ae.call(this, Y, Oe[0]) : (Oe[1] || Ey).call(this, Y, Oe[0])), ge.position.end = xr(Y.end);
  }
  function x() {
    return Mp(this.stack.pop());
  }
  function w() {
    this.data.expectingFirstListItemValue = !0;
  }
  function v(Y) {
    if (this.data.expectingFirstListItemValue) {
      const ae = this.stack[this.stack.length - 2];
      ae.start = Number.parseInt(this.sliceSerialize(Y), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function S() {
    const Y = this.resume(), ae = this.stack[this.stack.length - 1];
    ae.lang = Y;
  }
  function E() {
    const Y = this.resume(), ae = this.stack[this.stack.length - 1];
    ae.meta = Y;
  }
  function j() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function N() {
    const Y = this.resume(), ae = this.stack[this.stack.length - 1];
    ae.value = Y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function U() {
    const Y = this.resume(), ae = this.stack[this.stack.length - 1];
    ae.value = Y.replace(/(\r?\n|\r)$/g, "");
  }
  function R(Y) {
    const ae = this.resume(), ge = this.stack[this.stack.length - 1];
    ge.label = ae, ge.identifier = li(this.sliceSerialize(Y)).toLowerCase();
  }
  function G() {
    const Y = this.resume(), ae = this.stack[this.stack.length - 1];
    ae.title = Y;
  }
  function K() {
    const Y = this.resume(), ae = this.stack[this.stack.length - 1];
    ae.url = Y;
  }
  function A(Y) {
    const ae = this.stack[this.stack.length - 1];
    if (!ae.depth) {
      const ge = this.sliceSerialize(Y).length;
      ae.depth = ge;
    }
  }
  function V() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function ie(Y) {
    const ae = this.stack[this.stack.length - 1];
    ae.depth = this.sliceSerialize(Y).codePointAt(0) === 61 ? 1 : 2;
  }
  function ze() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function I(Y) {
    const ge = this.stack[this.stack.length - 1].children;
    let Oe = ge[ge.length - 1];
    (!Oe || Oe.type !== "text") && (Oe = _i(), Oe.position = {
      start: xr(Y.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, ge.push(Oe)), this.stack.push(Oe);
  }
  function te(Y) {
    const ae = this.stack.pop();
    ae.value += this.sliceSerialize(Y), ae.position.end = xr(Y.end);
  }
  function re(Y) {
    const ae = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const ge = ae.children[ae.children.length - 1];
      ge.position.end = xr(Y.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && i.canContainEols.includes(ae.type) && (I.call(this, Y), te.call(this, Y));
  }
  function Ae() {
    this.data.atHardBreak = !0;
  }
  function pe() {
    const Y = this.resume(), ae = this.stack[this.stack.length - 1];
    ae.value = Y;
  }
  function ee() {
    const Y = this.resume(), ae = this.stack[this.stack.length - 1];
    ae.value = Y;
  }
  function W() {
    const Y = this.resume(), ae = this.stack[this.stack.length - 1];
    ae.value = Y;
  }
  function ce() {
    const Y = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const ae = this.data.referenceType || "shortcut";
      Y.type += "Reference", Y.referenceType = ae, delete Y.url, delete Y.title;
    } else
      delete Y.identifier, delete Y.label;
    this.data.referenceType = void 0;
  }
  function me() {
    const Y = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const ae = this.data.referenceType || "shortcut";
      Y.type += "Reference", Y.referenceType = ae, delete Y.url, delete Y.title;
    } else
      delete Y.identifier, delete Y.label;
    this.data.referenceType = void 0;
  }
  function Te(Y) {
    const ae = this.sliceSerialize(Y), ge = this.stack[this.stack.length - 2];
    ge.label = mT(ae), ge.identifier = li(ae).toLowerCase();
  }
  function z() {
    const Y = this.stack[this.stack.length - 1], ae = this.resume(), ge = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, ge.type === "link") {
      const Oe = Y.children;
      ge.children = Oe;
    } else
      ge.alt = ae;
  }
  function qe() {
    const Y = this.resume(), ae = this.stack[this.stack.length - 1];
    ae.url = Y;
  }
  function ut() {
    const Y = this.resume(), ae = this.stack[this.stack.length - 1];
    ae.title = Y;
  }
  function T() {
    this.data.inReference = void 0;
  }
  function C() {
    this.data.referenceType = "collapsed";
  }
  function J(Y) {
    const ae = this.resume(), ge = this.stack[this.stack.length - 1];
    ge.label = ae, ge.identifier = li(this.sliceSerialize(Y)).toLowerCase(), this.data.referenceType = "full";
  }
  function le(Y) {
    this.data.characterReferenceType = Y.type;
  }
  function Z(Y) {
    const ae = this.sliceSerialize(Y), ge = this.data.characterReferenceType;
    let Oe;
    ge ? (Oe = E0(ae, ge === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Oe = Dp(ae);
    const zt = this.stack[this.stack.length - 1];
    zt.value += Oe;
  }
  function se(Y) {
    const ae = this.stack.pop();
    ae.position.end = xr(Y.end);
  }
  function Se(Y) {
    te.call(this, Y);
    const ae = this.stack[this.stack.length - 1];
    ae.url = this.sliceSerialize(Y);
  }
  function Ee(Y) {
    te.call(this, Y);
    const ae = this.stack[this.stack.length - 1];
    ae.url = "mailto:" + this.sliceSerialize(Y);
  }
  function fe() {
    return {
      type: "blockquote",
      children: [],
      position: void 0
    };
  }
  function _e() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: "",
      position: void 0
    };
  }
  function It() {
    return {
      type: "inlineCode",
      value: "",
      position: void 0
    };
  }
  function Si() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
      position: void 0
    };
  }
  function On() {
    return {
      type: "emphasis",
      children: [],
      position: void 0
    };
  }
  function ht() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: [],
      position: void 0
    };
  }
  function ot() {
    return {
      type: "break",
      position: void 0
    };
  }
  function Xe() {
    return {
      type: "html",
      value: "",
      position: void 0
    };
  }
  function fn() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null,
      position: void 0
    };
  }
  function Kt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: [],
      position: void 0
    };
  }
  function mt(Y) {
    return {
      type: "list",
      ordered: Y.type === "listOrdered",
      start: null,
      spread: Y._spread,
      children: [],
      position: void 0
    };
  }
  function Mn(Y) {
    return {
      type: "listItem",
      spread: Y._spread,
      checked: null,
      children: [],
      position: void 0
    };
  }
  function zi() {
    return {
      type: "paragraph",
      children: [],
      position: void 0
    };
  }
  function Dn() {
    return {
      type: "strong",
      children: [],
      position: void 0
    };
  }
  function _i() {
    return {
      type: "text",
      value: "",
      position: void 0
    };
  }
  function Rn() {
    return {
      type: "thematicBreak",
      position: void 0
    };
  }
}
function xr(t) {
  return {
    line: t.line,
    column: t.column,
    offset: t.offset
  };
}
function I0(t, i) {
  let a = -1;
  for (; ++a < i.length; ) {
    const o = i[a];
    Array.isArray(o) ? I0(t, o) : yT(t, o);
  }
}
function yT(t, i) {
  let a;
  for (a in i)
    if (B0.call(i, a))
      switch (a) {
        case "canContainEols": {
          const o = i[a];
          o && t[a].push(...o);
          break;
        }
        case "transforms": {
          const o = i[a];
          o && t[a].push(...o);
          break;
        }
        case "afterExit":
        case "beforeEnter": {
          const o = i[a];
          o && t[a].push(o);
          break;
        }
        case "enter":
        case "exit": {
          const o = i[a];
          o && Object.assign(t[a], o);
          break;
        }
      }
}
function Ey(t, i) {
  throw t ? new Error("Cannot close `" + t.type + "` (" + bo({
    start: t.start,
    end: t.end
  }) + "): a different token (`" + i.type + "`, " + bo({
    start: i.start,
    end: i.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + i.type + "`, " + bo({
    start: i.start,
    end: i.end
  }) + ") is still open");
}
function vT(t) {
  const i = this;
  i.parser = a;
  function a(o) {
    return bT(o, {
      ...i.data("settings"),
      ...t,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: i.data("micromarkExtensions") || [],
      mdastExtensions: i.data("fromMarkdownExtensions") || []
    });
  }
}
function wT(t, i) {
  const a = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: t.wrap(t.all(i), !0)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function kT(t, i) {
  const a = { type: "element", tagName: "br", properties: {}, children: [] };
  return t.patch(i, a), [t.applyData(i, a), { type: "text", value: `
` }];
}
function ST(t, i) {
  const a = i.value ? i.value + `
` : "", o = {}, s = i.lang ? i.lang.split(/\s+/) : [];
  s.length > 0 && (o.className = ["language-" + s[0]]);
  let c = {
    type: "element",
    tagName: "code",
    properties: o,
    children: [{ type: "text", value: a }]
  };
  return i.meta && (c.data = { meta: i.meta }), t.patch(i, c), c = t.applyData(i, c), c = { type: "element", tagName: "pre", properties: {}, children: [c] }, t.patch(i, c), c;
}
function zT(t, i) {
  const a = {
    type: "element",
    tagName: "del",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function _T(t, i) {
  const a = {
    type: "element",
    tagName: "em",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function jT(t, i) {
  const a = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", o = String(i.identifier).toUpperCase(), s = ul(o.toLowerCase()), c = t.footnoteOrder.indexOf(o);
  let f, p = t.footnoteCounts.get(o);
  p === void 0 ? (p = 0, t.footnoteOrder.push(o), f = t.footnoteOrder.length) : f = c + 1, p += 1, t.footnoteCounts.set(o, p);
  const m = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + a + "fn-" + s,
      id: a + "fnref-" + s + (p > 1 ? "-" + p : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(f) }]
  };
  t.patch(i, m);
  const g = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [m]
  };
  return t.patch(i, g), t.applyData(i, g);
}
function ET(t, i) {
  const a = {
    type: "element",
    tagName: "h" + i.depth,
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function CT(t, i) {
  if (t.options.allowDangerousHtml) {
    const a = { type: "raw", value: i.value };
    return t.patch(i, a), t.applyData(i, a);
  }
}
function H0(t, i) {
  const a = i.referenceType;
  let o = "]";
  if (a === "collapsed" ? o += "[]" : a === "full" && (o += "[" + (i.label || i.identifier) + "]"), i.type === "imageReference")
    return [{ type: "text", value: "![" + i.alt + o }];
  const s = t.all(i), c = s[0];
  c && c.type === "text" ? c.value = "[" + c.value : s.unshift({ type: "text", value: "[" });
  const f = s[s.length - 1];
  return f && f.type === "text" ? f.value += o : s.push({ type: "text", value: o }), s;
}
function TT(t, i) {
  const a = String(i.identifier).toUpperCase(), o = t.definitionById.get(a);
  if (!o)
    return H0(t, i);
  const s = { src: ul(o.url || ""), alt: i.alt };
  o.title !== null && o.title !== void 0 && (s.title = o.title);
  const c = { type: "element", tagName: "img", properties: s, children: [] };
  return t.patch(i, c), t.applyData(i, c);
}
function NT(t, i) {
  const a = { src: ul(i.url) };
  i.alt !== null && i.alt !== void 0 && (a.alt = i.alt), i.title !== null && i.title !== void 0 && (a.title = i.title);
  const o = { type: "element", tagName: "img", properties: a, children: [] };
  return t.patch(i, o), t.applyData(i, o);
}
function AT(t, i) {
  const a = { type: "text", value: i.value.replace(/\r?\n|\r/g, " ") };
  t.patch(i, a);
  const o = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [a]
  };
  return t.patch(i, o), t.applyData(i, o);
}
function OT(t, i) {
  const a = String(i.identifier).toUpperCase(), o = t.definitionById.get(a);
  if (!o)
    return H0(t, i);
  const s = { href: ul(o.url || "") };
  o.title !== null && o.title !== void 0 && (s.title = o.title);
  const c = {
    type: "element",
    tagName: "a",
    properties: s,
    children: t.all(i)
  };
  return t.patch(i, c), t.applyData(i, c);
}
function MT(t, i) {
  const a = { href: ul(i.url) };
  i.title !== null && i.title !== void 0 && (a.title = i.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: a,
    children: t.all(i)
  };
  return t.patch(i, o), t.applyData(i, o);
}
function DT(t, i, a) {
  const o = t.all(i), s = a ? RT(a) : Z0(i), c = {}, f = [];
  if (typeof i.checked == "boolean") {
    const b = o[0];
    let x;
    b && b.type === "element" && b.tagName === "p" ? x = b : (x = { type: "element", tagName: "p", properties: {}, children: [] }, o.unshift(x)), x.children.length > 0 && x.children.unshift({ type: "text", value: " " }), x.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: i.checked, disabled: !0 },
      children: []
    }), c.className = ["task-list-item"];
  }
  let p = -1;
  for (; ++p < o.length; ) {
    const b = o[p];
    (s || p !== 0 || b.type !== "element" || b.tagName !== "p") && f.push({ type: "text", value: `
` }), b.type === "element" && b.tagName === "p" && !s ? f.push(...b.children) : f.push(b);
  }
  const m = o[o.length - 1];
  m && (s || m.type !== "element" || m.tagName !== "p") && f.push({ type: "text", value: `
` });
  const g = { type: "element", tagName: "li", properties: c, children: f };
  return t.patch(i, g), t.applyData(i, g);
}
function RT(t) {
  let i = !1;
  if (t.type === "list") {
    i = t.spread || !1;
    const a = t.children;
    let o = -1;
    for (; !i && ++o < a.length; )
      i = Z0(a[o]);
  }
  return i;
}
function Z0(t) {
  const i = t.spread;
  return i ?? t.children.length > 1;
}
function LT(t, i) {
  const a = {}, o = t.all(i);
  let s = -1;
  for (typeof i.start == "number" && i.start !== 1 && (a.start = i.start); ++s < o.length; ) {
    const f = o[s];
    if (f.type === "element" && f.tagName === "li" && f.properties && Array.isArray(f.properties.className) && f.properties.className.includes("task-list-item")) {
      a.className = ["contains-task-list"];
      break;
    }
  }
  const c = {
    type: "element",
    tagName: i.ordered ? "ol" : "ul",
    properties: a,
    children: t.wrap(o, !0)
  };
  return t.patch(i, c), t.applyData(i, c);
}
function UT(t, i) {
  const a = {
    type: "element",
    tagName: "p",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function BT(t, i) {
  const a = { type: "root", children: t.wrap(t.all(i)) };
  return t.patch(i, a), t.applyData(i, a);
}
function IT(t, i) {
  const a = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function HT(t, i) {
  const a = t.all(i), o = a.shift(), s = [];
  if (o) {
    const f = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: t.wrap([o], !0)
    };
    t.patch(i.children[0], f), s.push(f);
  }
  if (a.length > 0) {
    const f = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: t.wrap(a, !0)
    }, p = Tp(i.children[1]), m = y0(i.children[i.children.length - 1]);
    p && m && (f.position = { start: p, end: m }), s.push(f);
  }
  const c = {
    type: "element",
    tagName: "table",
    properties: {},
    children: t.wrap(s, !0)
  };
  return t.patch(i, c), t.applyData(i, c);
}
function ZT(t, i, a) {
  const o = a ? a.children : void 0, c = (o ? o.indexOf(i) : 1) === 0 ? "th" : "td", f = a && a.type === "table" ? a.align : void 0, p = f ? f.length : i.children.length;
  let m = -1;
  const g = [];
  for (; ++m < p; ) {
    const x = i.children[m], w = {}, v = f ? f[m] : void 0;
    v && (w.align = v);
    let S = { type: "element", tagName: c, properties: w, children: [] };
    x && (S.children = t.all(x), t.patch(x, S), S = t.applyData(x, S)), g.push(S);
  }
  const b = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: t.wrap(g, !0)
  };
  return t.patch(i, b), t.applyData(i, b);
}
function $T(t, i) {
  const a = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
const Cy = 9, Ty = 32;
function qT(t) {
  const i = String(t), a = /\r?\n|\r/g;
  let o = a.exec(i), s = 0;
  const c = [];
  for (; o; )
    c.push(
      Ny(i.slice(s, o.index), s > 0, !0),
      o[0]
    ), s = o.index + o[0].length, o = a.exec(i);
  return c.push(Ny(i.slice(s), s > 0, !1)), c.join("");
}
function Ny(t, i, a) {
  let o = 0, s = t.length;
  if (i) {
    let c = t.codePointAt(o);
    for (; c === Cy || c === Ty; )
      o++, c = t.codePointAt(o);
  }
  if (a) {
    let c = t.codePointAt(s - 1);
    for (; c === Cy || c === Ty; )
      s--, c = t.codePointAt(s - 1);
  }
  return s > o ? t.slice(o, s) : "";
}
function VT(t, i) {
  const a = { type: "text", value: qT(String(i.value)) };
  return t.patch(i, a), t.applyData(i, a);
}
function YT(t, i) {
  const a = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return t.patch(i, a), t.applyData(i, a);
}
const GT = {
  blockquote: wT,
  break: kT,
  code: ST,
  delete: zT,
  emphasis: _T,
  footnoteReference: jT,
  heading: ET,
  html: CT,
  imageReference: TT,
  image: NT,
  inlineCode: AT,
  linkReference: OT,
  link: MT,
  listItem: DT,
  list: LT,
  paragraph: UT,
  // @ts-expect-error: root is different, but hard to type.
  root: BT,
  strong: IT,
  table: HT,
  tableCell: $T,
  tableRow: ZT,
  text: VT,
  thematicBreak: YT,
  toml: nu,
  yaml: nu,
  definition: nu,
  footnoteDefinition: nu
};
function nu() {
}
const $0 = -1, Nu = 0, yo = 1, ku = 2, Lp = 3, Up = 4, Bp = 5, Ip = 6, q0 = 7, V0 = 8, { defineProperty: FT } = Object, Y0 = typeof self == "object" ? self : globalThis, Ay = (t, i) => {
  switch (t) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + t);
  }
  return new Y0[t](i);
}, XT = (t, i) => {
  const a = (s, c) => (t.set(c, s), s), o = (s) => {
    if (t.has(s))
      return t.get(s);
    const [c, f] = i[s];
    switch (c) {
      case Nu:
      case $0:
        return a(f, s);
      case yo: {
        const p = a([], s);
        for (const m of f)
          p.push(o(m));
        return p;
      }
      case ku: {
        const p = a({}, s);
        for (const [m, g] of f) {
          const b = o(m), x = o(g);
          b === "__proto__" ? FT(p, b, {
            value: x,
            configurable: !0,
            enumerable: !0,
            writable: !0
          }) : p[b] = x;
        }
        return p;
      }
      case Lp:
        return a(new Date(f), s);
      case Up: {
        const { source: p, flags: m } = f;
        return a(new RegExp(p, m), s);
      }
      case Bp: {
        const p = a(/* @__PURE__ */ new Map(), s);
        for (const [m, g] of f)
          p.set(o(m), o(g));
        return p;
      }
      case Ip: {
        const p = a(/* @__PURE__ */ new Set(), s);
        for (const m of f)
          p.add(o(m));
        return p;
      }
      case q0: {
        const { name: p, message: m } = f;
        return a(
          typeof Y0[p] == "function" ? Ay(p, m) : new Error(m),
          s
        );
      }
      case V0:
        return a(BigInt(f), s);
      case "BigInt":
        return a(Object(BigInt(f)), s);
      case "ArrayBuffer":
        return a(new Uint8Array(f).buffer, f);
      case "DataView": {
        const { buffer: p } = new Uint8Array(f);
        return a(new DataView(p), f);
      }
      case "-0":
        return -0;
    }
    return a(Ay(c, f), s);
  };
  return o;
}, Oy = (t) => XT(/* @__PURE__ */ new Map(), t)(0), ta = "", { toString: QT } = {}, { keys: KT, is: PT } = Object, uo = (t) => {
  const i = typeof t;
  if (i !== "object" || !t)
    return [Nu, i];
  const a = QT.call(t).slice(8, -1);
  switch (a) {
    case "Array":
      return [yo, ta];
    case "Object":
      return [ku, ta];
    case "Date":
      return [Lp, ta];
    case "RegExp":
      return [Up, ta];
    case "Map":
      return [Bp, ta];
    case "Set":
      return [Ip, ta];
    case "DataView":
      return [yo, a];
  }
  return a.includes("Array") ? [yo, a] : t instanceof Error ? [q0, t.name || "Error"] : [ku, a];
}, iu = ([t, i]) => t === Nu && (i === "function" || i === "symbol"), JT = (t, i, a, o) => {
  const s = (f, p) => {
    const m = o.push(f) - 1;
    return a.set(p, m), m;
  }, c = (f) => {
    if (a.has(f))
      return a.get(f);
    let [p, m] = uo(f);
    switch (p) {
      case Nu: {
        let b = f;
        switch (m) {
          case "bigint":
            p = V0, b = f.toString();
            break;
          case "number":
            if (!f && PT(f, -0))
              return o.push(["-0"]) - 1;
            break;
          case "function":
          case "symbol":
            if (t)
              throw new TypeError("unable to serialize " + m);
            b = null;
            break;
          case "undefined":
            return s([$0], f);
        }
        return s([p, b], f);
      }
      case yo: {
        if (m) {
          let w = f;
          return m === "DataView" ? w = new Uint8Array(f.buffer) : m === "ArrayBuffer" && (w = new Uint8Array(f)), s([m, [...w]], f);
        }
        const b = [], x = s([p, b], f);
        for (const w of f)
          b.push(c(w));
        return x;
      }
      case ku: {
        if (m)
          switch (m) {
            case "BigInt":
              return s([m, f.toString()], f);
            case "Boolean":
            case "Number":
            case "String":
              return s([m, f.valueOf()], f);
          }
        if (i && "toJSON" in f)
          return c(f.toJSON());
        const b = [], x = s([p, b], f);
        for (const w of KT(f))
          (t || !iu(uo(f[w]))) && b.push([c(w), c(f[w])]);
        return x;
      }
      case Lp:
        return s([p, isNaN(f.getTime()) ? ta : f.toISOString()], f);
      case Up: {
        const { source: b, flags: x } = f;
        return s([p, { source: b, flags: x }], f);
      }
      case Bp: {
        const b = [], x = s([p, b], f);
        for (const [w, v] of f)
          (t || !(iu(uo(w)) || iu(uo(v)))) && b.push([c(w), c(v)]);
        return x;
      }
      case Ip: {
        const b = [], x = s([p, b], f);
        for (const w of f)
          (t || !iu(uo(w))) && b.push(c(w));
        return x;
      }
    }
    const { message: g } = f;
    return s([p, { name: m, message: g }], f);
  };
  return c;
}, My = (t, { json: i, lossy: a } = {}) => {
  const o = [];
  return JT(!(i || a), !!i, /* @__PURE__ */ new Map(), o)(t), o;
}, Su = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (t, i) => i && ("json" in i || "lossy" in i) ? Oy(My(t, i)) : structuredClone(t)
) : (t, i) => Oy(My(t, i));
function WT(t, i) {
  const a = [{ type: "text", value: "↩" }];
  return i > 1 && a.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(i) }]
  }), a;
}
function eN(t, i) {
  return "Back to reference " + (t + 1) + (i > 1 ? "-" + i : "");
}
function tN(t) {
  const i = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", a = t.options.footnoteBackContent || WT, o = t.options.footnoteBackLabel || eN, s = t.options.footnoteLabel || "Footnotes", c = t.options.footnoteLabelTagName || "h2", f = t.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, p = [];
  let m = -1;
  for (; ++m < t.footnoteOrder.length; ) {
    const g = t.footnoteById.get(
      t.footnoteOrder[m]
    );
    if (!g)
      continue;
    const b = t.all(g), x = String(g.identifier).toUpperCase(), w = ul(x.toLowerCase());
    let v = 0;
    const S = [], E = t.footnoteCounts.get(x);
    for (; E !== void 0 && ++v <= E; ) {
      S.length > 0 && S.push({ type: "text", value: " " });
      let U = typeof a == "string" ? a : a(m, v);
      typeof U == "string" && (U = { type: "text", value: U }), S.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + i + "fnref-" + w + (v > 1 ? "-" + v : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof o == "string" ? o : o(m, v),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(U) ? U : [U]
      });
    }
    const j = b[b.length - 1];
    if (j && j.type === "element" && j.tagName === "p") {
      const U = j.children[j.children.length - 1];
      U && U.type === "text" ? U.value += " " : j.children.push({ type: "text", value: " " }), j.children.push(...S);
    } else
      b.push(...S);
    const N = {
      type: "element",
      tagName: "li",
      properties: { id: i + "fn-" + w },
      children: t.wrap(b, !0)
    };
    t.patch(g, N), p.push(N);
  }
  if (p.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: c,
          properties: {
            ...Su(f),
            id: "footnote-label"
          },
          children: [{ type: "text", value: s }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: t.wrap(p, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Au = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(t) {
    if (t == null)
      return aN;
    if (typeof t == "function")
      return Ou(t);
    if (typeof t == "object")
      return Array.isArray(t) ? nN(t) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        iN(
          /** @type {Props} */
          t
        )
      );
    if (typeof t == "string")
      return rN(t);
    throw new Error("Expected function, string, or object as test");
  })
);
function nN(t) {
  const i = [];
  let a = -1;
  for (; ++a < t.length; )
    i[a] = Au(t[a]);
  return Ou(o);
  function o(...s) {
    let c = -1;
    for (; ++c < i.length; )
      if (i[c].apply(this, s)) return !0;
    return !1;
  }
}
function iN(t) {
  const i = (
    /** @type {Record<string, unknown>} */
    t
  );
  return Ou(a);
  function a(o) {
    const s = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      o
    );
    let c;
    for (c in t)
      if (s[c] !== i[c]) return !1;
    return !0;
  }
}
function rN(t) {
  return Ou(i);
  function i(a) {
    return a && a.type === t;
  }
}
function Ou(t) {
  return i;
  function i(a, o, s) {
    return !!(lN(a) && t.call(
      this,
      a,
      typeof o == "number" ? o : void 0,
      s || void 0
    ));
  }
}
function aN() {
  return !0;
}
function lN(t) {
  return t !== null && typeof t == "object" && "type" in t;
}
const G0 = [], oN = !0, rp = !1, sN = "skip";
function F0(t, i, a, o) {
  let s;
  typeof i == "function" && typeof a != "function" ? (o = a, a = i) : s = i;
  const c = Au(s), f = o ? -1 : 1;
  p(t, void 0, [])();
  function p(m, g, b) {
    const x = (
      /** @type {Record<string, unknown>} */
      m && typeof m == "object" ? m : {}
    );
    if (typeof x.type == "string") {
      const v = (
        // `hast`
        typeof x.tagName == "string" ? x.tagName : (
          // `xast`
          typeof x.name == "string" ? x.name : void 0
        )
      );
      Object.defineProperty(w, "name", {
        value: "node (" + (m.type + (v ? "<" + v + ">" : "")) + ")"
      });
    }
    return w;
    function w() {
      let v = G0, S, E, j;
      if ((!i || c(m, g, b[b.length - 1] || void 0)) && (v = uN(a(m, b)), v[0] === rp))
        return v;
      if ("children" in m && m.children) {
        const N = (
          /** @type {UnistParent} */
          m
        );
        if (N.children && v[0] !== sN)
          for (E = (o ? N.children.length : -1) + f, j = b.concat(N); E > -1 && E < N.children.length; ) {
            const U = N.children[E];
            if (S = p(U, E, j)(), S[0] === rp)
              return S;
            E = typeof S[1] == "number" ? S[1] : E + f;
          }
      }
      return v;
    }
  }
}
function uN(t) {
  return Array.isArray(t) ? t : typeof t == "number" ? [oN, t] : t == null ? G0 : [t];
}
function Hp(t, i, a, o) {
  let s, c, f;
  typeof i == "function" && typeof a != "function" ? (c = void 0, f = i, s = a) : (c = i, f = a, s = o), F0(t, c, p, s);
  function p(m, g) {
    const b = g[g.length - 1], x = b ? b.children.indexOf(m) : void 0;
    return f(m, x, b);
  }
}
const ap = {}.hasOwnProperty, cN = {};
function fN(t, i) {
  const a = i || cN, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = { ...GT, ...a.handlers }, p = {
    all: g,
    applyData: pN,
    definitionById: o,
    footnoteById: s,
    footnoteCounts: c,
    footnoteOrder: [],
    handlers: f,
    one: m,
    options: a,
    patch: dN,
    wrap: mN
  };
  return Hp(t, function(b) {
    if (b.type === "definition" || b.type === "footnoteDefinition") {
      const x = b.type === "definition" ? o : s, w = String(b.identifier).toUpperCase();
      x.has(w) || x.set(w, b);
    }
  }), p;
  function m(b, x) {
    const w = b.type, v = p.handlers[w];
    if (ap.call(p.handlers, w) && v)
      return v(p, b, x);
    if (p.options.passThrough && p.options.passThrough.includes(w)) {
      if ("children" in b) {
        const { children: E, ...j } = b, N = Su(j);
        return N.children = p.all(b), N;
      }
      return Su(b);
    }
    return (p.options.unknownHandler || hN)(p, b, x);
  }
  function g(b) {
    const x = [];
    if ("children" in b) {
      const w = b.children;
      let v = -1;
      for (; ++v < w.length; ) {
        const S = p.one(w[v], b);
        if (S) {
          if (v && w[v - 1].type === "break" && (!Array.isArray(S) && S.type === "text" && (S.value = Dy(S.value)), !Array.isArray(S) && S.type === "element")) {
            const E = S.children[0];
            E && E.type === "text" && (E.value = Dy(E.value));
          }
          Array.isArray(S) ? x.push(...S) : x.push(S);
        }
      }
    }
    return x;
  }
}
function dN(t, i) {
  t.position && (i.position = eC(t));
}
function pN(t, i) {
  let a = i;
  if (t && t.data) {
    const o = t.data.hName, s = t.data.hChildren, c = t.data.hProperties;
    if (typeof o == "string")
      if (a.type === "element")
        a.tagName = o;
      else {
        const f = "children" in a ? a.children : [a];
        a = { type: "element", tagName: o, properties: {}, children: f };
      }
    a.type === "element" && c && Object.assign(a.properties, Su(c)), "children" in a && a.children && s !== null && s !== void 0 && (a.children = s);
  }
  return a;
}
function hN(t, i) {
  const a = i.data || {}, o = "value" in i && !(ap.call(a, "hProperties") || ap.call(a, "hChildren")) ? { type: "text", value: i.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, o), t.applyData(i, o);
}
function mN(t, i) {
  const a = [];
  let o = -1;
  for (i && a.push({ type: "text", value: `
` }); ++o < t.length; )
    o && a.push({ type: "text", value: `
` }), a.push(t[o]);
  return i && t.length > 0 && a.push({ type: "text", value: `
` }), a;
}
function Dy(t) {
  let i = 0, a = t.charCodeAt(i);
  for (; a === 9 || a === 32; )
    i++, a = t.charCodeAt(i);
  return t.slice(i);
}
function Ry(t, i) {
  const a = fN(t, i), o = a.one(t, void 0), s = tN(a), c = Array.isArray(o) ? { type: "root", children: o } : o || { type: "root", children: [] };
  return s && c.children.push({ type: "text", value: `
` }, s), c;
}
function gN(t, i) {
  return t && "run" in t ? async function(a, o) {
    const s = (
      /** @type {HastRoot} */
      Ry(a, { file: o, ...i })
    );
    await t.run(s, o);
  } : function(a, o) {
    return (
      /** @type {HastRoot} */
      Ry(a, { file: o, ...t || i })
    );
  };
}
function Ly(t) {
  if (t)
    throw t;
}
var Ed, Uy;
function bN() {
  if (Uy) return Ed;
  Uy = 1;
  var t = Object.prototype.hasOwnProperty, i = Object.prototype.toString, a = Object.defineProperty, o = Object.getOwnPropertyDescriptor, s = function(g) {
    return typeof Array.isArray == "function" ? Array.isArray(g) : i.call(g) === "[object Array]";
  }, c = function(g) {
    if (!g || i.call(g) !== "[object Object]")
      return !1;
    var b = t.call(g, "constructor"), x = g.constructor && g.constructor.prototype && t.call(g.constructor.prototype, "isPrototypeOf");
    if (g.constructor && !b && !x)
      return !1;
    var w;
    for (w in g)
      ;
    return typeof w > "u" || t.call(g, w);
  }, f = function(g, b) {
    a && b.name === "__proto__" ? a(g, b.name, {
      enumerable: !0,
      configurable: !0,
      value: b.newValue,
      writable: !0
    }) : g[b.name] = b.newValue;
  }, p = function(g, b) {
    if (b === "__proto__")
      if (t.call(g, b)) {
        if (o)
          return o(g, b).value;
      } else return;
    return g[b];
  };
  return Ed = function m() {
    var g, b, x, w, v, S, E = arguments[0], j = 1, N = arguments.length, U = !1;
    for (typeof E == "boolean" && (U = E, E = arguments[1] || {}, j = 2), (E == null || typeof E != "object" && typeof E != "function") && (E = {}); j < N; ++j)
      if (g = arguments[j], g != null)
        for (b in g)
          x = p(E, b), w = p(g, b), E !== w && (U && w && (c(w) || (v = s(w))) ? (v ? (v = !1, S = x && s(x) ? x : []) : S = x && c(x) ? x : {}, f(E, { name: b, newValue: m(U, S, w) })) : typeof w < "u" && f(E, { name: b, newValue: w }));
    return E;
  }, Ed;
}
var xN = bN();
const Cd = /* @__PURE__ */ Ky(xN);
function lp(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const i = Object.getPrototypeOf(t);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function yN() {
  const t = [], i = { run: a, use: o };
  return i;
  function a(...s) {
    let c = -1;
    const f = s.pop();
    if (typeof f != "function")
      throw new TypeError("Expected function as last argument, not " + f);
    p(null, ...s);
    function p(m, ...g) {
      const b = t[++c];
      let x = -1;
      if (m) {
        f(m);
        return;
      }
      for (; ++x < s.length; )
        (g[x] === null || g[x] === void 0) && (g[x] = s[x]);
      s = g, b ? vN(b, p)(...g) : f(null, ...g);
    }
  }
  function o(s) {
    if (typeof s != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + s
      );
    return t.push(s), i;
  }
}
function vN(t, i) {
  let a;
  return o;
  function o(...f) {
    const p = t.length > f.length;
    let m;
    p && f.push(s);
    try {
      m = t.apply(this, f);
    } catch (g) {
      const b = (
        /** @type {Error} */
        g
      );
      if (p && a)
        throw b;
      return s(b);
    }
    p || (m && m.then && typeof m.then == "function" ? m.then(c, s) : m instanceof Error ? s(m) : c(m));
  }
  function s(f, ...p) {
    a || (a = !0, i(f, ...p));
  }
  function c(f) {
    s(null, f);
  }
}
const xi = { basename: wN, dirname: kN, extname: SN, join: zN, sep: "/" };
function wN(t, i) {
  if (i !== void 0 && typeof i != "string")
    throw new TypeError('"ext" argument must be a string');
  Eo(t);
  let a = 0, o = -1, s = t.length, c;
  if (i === void 0 || i.length === 0 || i.length > t.length) {
    for (; s--; )
      if (t.codePointAt(s) === 47) {
        if (c) {
          a = s + 1;
          break;
        }
      } else o < 0 && (c = !0, o = s + 1);
    return o < 0 ? "" : t.slice(a, o);
  }
  if (i === t)
    return "";
  let f = -1, p = i.length - 1;
  for (; s--; )
    if (t.codePointAt(s) === 47) {
      if (c) {
        a = s + 1;
        break;
      }
    } else
      f < 0 && (c = !0, f = s + 1), p > -1 && (t.codePointAt(s) === i.codePointAt(p--) ? p < 0 && (o = s) : (p = -1, o = f));
  return a === o ? o = f : o < 0 && (o = t.length), t.slice(a, o);
}
function kN(t) {
  if (Eo(t), t.length === 0)
    return ".";
  let i = -1, a = t.length, o;
  for (; --a; )
    if (t.codePointAt(a) === 47) {
      if (o) {
        i = a;
        break;
      }
    } else o || (o = !0);
  return i < 0 ? t.codePointAt(0) === 47 ? "/" : "." : i === 1 && t.codePointAt(0) === 47 ? "//" : t.slice(0, i);
}
function SN(t) {
  Eo(t);
  let i = t.length, a = -1, o = 0, s = -1, c = 0, f;
  for (; i--; ) {
    const p = t.codePointAt(i);
    if (p === 47) {
      if (f) {
        o = i + 1;
        break;
      }
      continue;
    }
    a < 0 && (f = !0, a = i + 1), p === 46 ? s < 0 ? s = i : c !== 1 && (c = 1) : s > -1 && (c = -1);
  }
  return s < 0 || a < 0 || // We saw a non-dot character immediately before the dot.
  c === 0 || // The (right-most) trimmed path component is exactly `..`.
  c === 1 && s === a - 1 && s === o + 1 ? "" : t.slice(s, a);
}
function zN(...t) {
  let i = -1, a;
  for (; ++i < t.length; )
    Eo(t[i]), t[i] && (a = a === void 0 ? t[i] : a + "/" + t[i]);
  return a === void 0 ? "." : _N(a);
}
function _N(t) {
  Eo(t);
  const i = t.codePointAt(0) === 47;
  let a = jN(t, !i);
  return a.length === 0 && !i && (a = "."), a.length > 0 && t.codePointAt(t.length - 1) === 47 && (a += "/"), i ? "/" + a : a;
}
function jN(t, i) {
  let a = "", o = 0, s = -1, c = 0, f = -1, p, m;
  for (; ++f <= t.length; ) {
    if (f < t.length)
      p = t.codePointAt(f);
    else {
      if (p === 47)
        break;
      p = 47;
    }
    if (p === 47) {
      if (!(s === f - 1 || c === 1)) if (s !== f - 1 && c === 2) {
        if (a.length < 2 || o !== 2 || a.codePointAt(a.length - 1) !== 46 || a.codePointAt(a.length - 2) !== 46) {
          if (a.length > 2) {
            if (m = a.lastIndexOf("/"), m !== a.length - 1) {
              m < 0 ? (a = "", o = 0) : (a = a.slice(0, m), o = a.length - 1 - a.lastIndexOf("/")), s = f, c = 0;
              continue;
            }
          } else if (a.length > 0) {
            a = "", o = 0, s = f, c = 0;
            continue;
          }
        }
        i && (a = a.length > 0 ? a + "/.." : "..", o = 2);
      } else
        a.length > 0 ? a += "/" + t.slice(s + 1, f) : a = t.slice(s + 1, f), o = f - s - 1;
      s = f, c = 0;
    } else p === 46 && c > -1 ? c++ : c = -1;
  }
  return a;
}
function Eo(t) {
  if (typeof t != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(t)
    );
}
const EN = { cwd: CN };
function CN() {
  return "/";
}
function op(t) {
  return !!(t !== null && typeof t == "object" && "href" in t && t.href && "protocol" in t && t.protocol && // @ts-expect-error: indexing is fine.
  t.auth === void 0);
}
function TN(t) {
  if (typeof t == "string")
    t = new URL(t);
  else if (!op(t)) {
    const i = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + t + "`"
    );
    throw i.code = "ERR_INVALID_ARG_TYPE", i;
  }
  if (t.protocol !== "file:") {
    const i = new TypeError("The URL must be of scheme file");
    throw i.code = "ERR_INVALID_URL_SCHEME", i;
  }
  return NN(t);
}
function NN(t) {
  if (t.hostname !== "") {
    const o = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw o.code = "ERR_INVALID_FILE_URL_HOST", o;
  }
  const i = t.pathname;
  let a = -1;
  for (; ++a < i.length; )
    if (i.codePointAt(a) === 37 && i.codePointAt(a + 1) === 50) {
      const o = i.codePointAt(a + 2);
      if (o === 70 || o === 102) {
        const s = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw s.code = "ERR_INVALID_FILE_URL_PATH", s;
      }
    }
  return decodeURIComponent(i);
}
const Td = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class X0 {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(i) {
    let a;
    i ? op(i) ? a = { path: i } : typeof i == "string" || AN(i) ? a = { value: i } : a = i : a = {}, this.cwd = "cwd" in a ? "" : EN.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let o = -1;
    for (; ++o < Td.length; ) {
      const c = Td[o];
      c in a && a[c] !== void 0 && a[c] !== null && (this[c] = c === "history" ? [...a[c]] : a[c]);
    }
    let s;
    for (s in a)
      Td.includes(s) || (this[s] = a[s]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? xi.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(i) {
    Ad(i, "basename"), Nd(i, "basename"), this.path = xi.join(this.dirname || "", i);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? xi.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(i) {
    By(this.basename, "dirname"), this.path = xi.join(i || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? xi.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(i) {
    if (Nd(i, "extname"), By(this.dirname, "extname"), i) {
      if (i.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (i.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = xi.join(this.dirname, this.stem + (i || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(i) {
    op(i) && (i = TN(i)), Ad(i, "path"), this.path !== i && this.history.push(i);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? xi.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(i) {
    Ad(i, "stem"), Nd(i, "stem"), this.path = xi.join(this.dirname || "", i + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(i, a, o) {
    const s = this.message(i, a, o);
    throw s.fatal = !0, s;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(i, a, o) {
    const s = this.message(i, a, o);
    return s.fatal = void 0, s;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(i, a, o) {
    const s = new tn(
      // @ts-expect-error: the overloads are fine.
      i,
      a,
      o
    );
    return this.path && (s.name = this.path + ":" + s.name, s.file = this.path), s.fatal = !1, this.messages.push(s), s;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(i) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(i || void 0).decode(this.value);
  }
}
function Nd(t, i) {
  if (t && t.includes(xi.sep))
    throw new Error(
      "`" + i + "` cannot be a path: did not expect `" + xi.sep + "`"
    );
}
function Ad(t, i) {
  if (!t)
    throw new Error("`" + i + "` cannot be empty");
}
function By(t, i) {
  if (!t)
    throw new Error("Setting `" + i + "` requires `path` to be set too");
}
function AN(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const ON = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  (function(t) {
    const o = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), s = o[t], c = function() {
      return s.apply(c, arguments);
    };
    return Object.setPrototypeOf(c, o), c;
  })
), MN = {}.hasOwnProperty;
class Zp extends ON {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = yN();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const i = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Zp()
    );
    let a = -1;
    for (; ++a < this.attachers.length; ) {
      const o = this.attachers[a];
      i.use(...o);
    }
    return i.data(Cd(!0, {}, this.namespace)), i;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(i, a) {
    return typeof i == "string" ? arguments.length === 2 ? (Dd("data", this.frozen), this.namespace[i] = a, this) : MN.call(this.namespace, i) && this.namespace[i] || void 0 : i ? (Dd("data", this.frozen), this.namespace = i, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const i = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [a, ...o] = this.attachers[this.freezeIndex];
      if (o[0] === !1)
        continue;
      o[0] === !0 && (o[0] = void 0);
      const s = a.call(i, ...o);
      typeof s == "function" && this.transformers.use(s);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(i) {
    this.freeze();
    const a = ru(i), o = this.parser || this.Parser;
    return Od("parse", o), o(String(a), a);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(i, a) {
    const o = this;
    return this.freeze(), Od("process", this.parser || this.Parser), Md("process", this.compiler || this.Compiler), a ? s(void 0, a) : new Promise(s);
    function s(c, f) {
      const p = ru(i), m = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        o.parse(p)
      );
      o.run(m, p, function(b, x, w) {
        if (b || !x || !w)
          return g(b);
        const v = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          x
        ), S = o.stringify(v, w);
        LN(S) ? w.value = S : w.result = S, g(
          b,
          /** @type {VFileWithOutput<CompileResult>} */
          w
        );
      });
      function g(b, x) {
        b || !x ? f(b) : c ? c(x) : a(void 0, x);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(i) {
    let a = !1, o;
    return this.freeze(), Od("processSync", this.parser || this.Parser), Md("processSync", this.compiler || this.Compiler), this.process(i, s), Hy("processSync", "process", a), o;
    function s(c, f) {
      a = !0, Ly(c), o = f;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(i, a, o) {
    Iy(i), this.freeze();
    const s = this.transformers;
    return !o && typeof a == "function" && (o = a, a = void 0), o ? c(void 0, o) : new Promise(c);
    function c(f, p) {
      const m = ru(a);
      s.run(i, m, g);
      function g(b, x, w) {
        const v = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          x || i
        );
        b ? p(b) : f ? f(v) : o(void 0, v, w);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(i, a) {
    let o = !1, s;
    return this.run(i, a, c), Hy("runSync", "run", o), s;
    function c(f, p) {
      Ly(f), s = p, o = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(i, a) {
    this.freeze();
    const o = ru(a), s = this.compiler || this.Compiler;
    return Md("stringify", s), Iy(i), s(i, o);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(i, ...a) {
    const o = this.attachers, s = this.namespace;
    if (Dd("use", this.frozen), i != null) if (typeof i == "function")
      m(i, a);
    else if (typeof i == "object")
      Array.isArray(i) ? p(i) : f(i);
    else
      throw new TypeError("Expected usable value, not `" + i + "`");
    return this;
    function c(g) {
      if (typeof g == "function")
        m(g, []);
      else if (typeof g == "object")
        if (Array.isArray(g)) {
          const [b, ...x] = (
            /** @type {PluginTuple<Array<unknown>>} */
            g
          );
          m(b, x);
        } else
          f(g);
      else
        throw new TypeError("Expected usable value, not `" + g + "`");
    }
    function f(g) {
      if (!("plugins" in g) && !("settings" in g))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      p(g.plugins), g.settings && (s.settings = Cd(!0, s.settings, g.settings));
    }
    function p(g) {
      let b = -1;
      if (g != null) if (Array.isArray(g))
        for (; ++b < g.length; ) {
          const x = g[b];
          c(x);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + g + "`");
    }
    function m(g, b) {
      let x = -1, w = -1;
      for (; ++x < o.length; )
        if (o[x][0] === g) {
          w = x;
          break;
        }
      if (w === -1)
        o.push([g, ...b]);
      else if (b.length > 0) {
        let [v, ...S] = b;
        const E = o[w][1];
        lp(E) && lp(v) && (v = Cd(!0, E, v)), o[w] = [g, v, ...S];
      }
    }
  }
}
const DN = new Zp().freeze();
function Od(t, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + t + "` without `parser`");
}
function Md(t, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + t + "` without `compiler`");
}
function Dd(t, i) {
  if (i)
    throw new Error(
      "Cannot call `" + t + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Iy(t) {
  if (!lp(t) || typeof t.type != "string")
    throw new TypeError("Expected node, got `" + t + "`");
}
function Hy(t, i, a) {
  if (!a)
    throw new Error(
      "`" + t + "` finished async. Use `" + i + "` instead"
    );
}
function ru(t) {
  return RN(t) ? t : new X0(t);
}
function RN(t) {
  return !!(t && typeof t == "object" && "message" in t && "messages" in t);
}
function LN(t) {
  return typeof t == "string" || UN(t);
}
function UN(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const BN = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Zy = [], $y = { allowDangerousHtml: !0 }, IN = /^(https?|ircs?|mailto|xmpp)$/i, HN = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function ZN(t) {
  const i = $N(t), a = qN(t);
  return VN(i.runSync(i.parse(a), a), t);
}
function $N(t) {
  const i = t.rehypePlugins || Zy, a = t.remarkPlugins || Zy, o = t.remarkRehypeOptions ? { ...t.remarkRehypeOptions, ...$y } : $y;
  return DN().use(vT).use(a).use(gN, o).use(i);
}
function qN(t) {
  const i = t.children || "", a = new X0();
  return typeof i == "string" && (a.value = i), a;
}
function VN(t, i) {
  const a = i.allowedElements, o = i.allowElement, s = i.components, c = i.disallowedElements, f = i.skipHtml, p = i.unwrapDisallowed, m = i.urlTransform || YN;
  for (const b of HN)
    Object.hasOwn(i, b.from) && ("" + b.from + (b.to ? "use `" + b.to + "` instead" : "remove it") + BN + b.id, void 0);
  return Hp(t, g), aC(t, {
    Fragment: h.Fragment,
    components: s,
    ignoreInvalidStyle: !0,
    jsx: h.jsx,
    jsxs: h.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function g(b, x, w) {
    if (b.type === "raw" && w && typeof x == "number")
      return f ? w.children.splice(x, 1) : w.children[x] = { type: "text", value: b.value }, x;
    if (b.type === "element") {
      let v;
      for (v in zd)
        if (Object.hasOwn(zd, v) && Object.hasOwn(b.properties, v)) {
          const S = b.properties[v], E = zd[v];
          (E === null || E.includes(b.tagName)) && (b.properties[v] = m(String(S || ""), v, b));
        }
    }
    if (b.type === "element") {
      let v = a ? !a.includes(b.tagName) : c ? c.includes(b.tagName) : !1;
      if (!v && o && typeof x == "number" && (v = !o(b, x, w)), v && w && typeof x == "number")
        return p && b.children ? w.children.splice(x, 1, ...b.children) : w.children.splice(x, 1), x;
    }
  }
}
function YN(t) {
  const i = t.indexOf(":"), a = t.indexOf("?"), o = t.indexOf("#"), s = t.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    i === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    s !== -1 && i > s || a !== -1 && i > a || o !== -1 && i > o || // It is a protocol, it should be allowed.
    IN.test(t.slice(0, i)) ? t : ""
  );
}
function qy(t, i) {
  const a = String(t);
  if (typeof i != "string")
    throw new TypeError("Expected character");
  let o = 0, s = a.indexOf(i);
  for (; s !== -1; )
    o++, s = a.indexOf(i, s + i.length);
  return o;
}
function GN(t) {
  if (typeof t != "string")
    throw new TypeError("Expected a string");
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function FN(t, i, a) {
  const s = Au((a || {}).ignore || []), c = XN(i);
  let f = -1;
  for (; ++f < c.length; )
    F0(t, "text", p);
  function p(g, b) {
    let x = -1, w;
    for (; ++x < b.length; ) {
      const v = b[x], S = w ? w.children : void 0;
      if (s(
        v,
        S ? S.indexOf(v) : void 0,
        w
      ))
        return;
      w = v;
    }
    if (w)
      return m(g, b);
  }
  function m(g, b) {
    const x = b[b.length - 1], w = c[f][0], v = c[f][1];
    let S = 0;
    const j = x.children.indexOf(g);
    let N = !1, U = [];
    w.lastIndex = 0;
    let R = w.exec(g.value);
    for (; R; ) {
      const K = R.index, A = {
        index: R.index,
        input: R.input,
        stack: [...b, g]
      };
      let V = v(...R, A);
      if (typeof V == "string" && (V = V.length > 0 ? { type: "text", value: V } : void 0), V === !1)
        w.lastIndex = K + 1;
      else {
        if (S !== K && G({ type: "text", value: g.value.slice(S, K) }), Array.isArray(V))
          for (const ie of V) G(ie);
        else V && G(V);
        S = K + R[0].length, N = !0;
      }
      if (!w.global)
        break;
      R = w.exec(g.value);
    }
    return N ? (S < g.value.length && G({ type: "text", value: g.value.slice(S) }), x.children.splice(j, 1, ...U)) : U = [g], j + U.length;
    function G(K) {
      const A = U[U.length - 1];
      A && A.type === "text" && K.type === "text" ? A.value += K.value : U.push(K);
    }
  }
}
function XN(t) {
  if (!Array.isArray(t))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const i = [], a = !t[0] || Array.isArray(t[0]) ? t : [t];
  let o = -1;
  for (; ++o < a.length; ) {
    const s = a[o];
    i.push([QN(s[0]), KN(s[1])]);
  }
  return i;
}
function QN(t) {
  return typeof t == "string" ? new RegExp(GN(t), "g") : t;
}
function KN(t) {
  return typeof t == "function" ? t : function() {
    return t;
  };
}
const Rd = "phrasing", Ld = ["autolink", "link", "image", "label"];
function PN() {
  return {
    transforms: [r6],
    enter: {
      literalAutolink: WN,
      literalAutolinkEmail: Ud,
      literalAutolinkHttp: Ud,
      literalAutolinkWww: Ud
    },
    exit: {
      literalAutolink: i6,
      literalAutolinkEmail: n6,
      literalAutolinkHttp: e6,
      literalAutolinkWww: t6
    }
  };
}
function JN() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Rd,
        notInConstruct: Ld
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Rd,
        notInConstruct: Ld
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Rd,
        notInConstruct: Ld
      }
    ]
  };
}
function WN(t) {
  this.enter({ type: "link", title: null, url: "", children: [] }, t);
}
function Ud(t) {
  this.config.enter.autolinkProtocol.call(this, t);
}
function e6(t) {
  this.config.exit.autolinkProtocol.call(this, t);
}
function t6(t) {
  this.config.exit.data.call(this, t);
  const i = this.stack[this.stack.length - 1];
  i.type, i.url = "http://" + this.sliceSerialize(t);
}
function n6(t) {
  this.config.exit.autolinkEmail.call(this, t);
}
function i6(t) {
  this.exit(t);
}
function r6(t) {
  FN(
    t,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, a6],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), l6]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function a6(t, i, a, o, s) {
  let c = "";
  if (!Q0(s) || (/^w/i.test(i) && (a = i + a, i = "", c = "http://"), !o6(a)))
    return !1;
  const f = s6(a + o);
  if (!f[0]) return !1;
  const p = {
    type: "link",
    title: null,
    url: c + i + f[0],
    children: [{ type: "text", value: i + f[0] }]
  };
  return f[1] ? [p, { type: "text", value: f[1] }] : p;
}
function l6(t, i, a, o) {
  return (
    // Not an expected previous character.
    !Q0(o, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(a) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + i + "@" + a,
      children: [{ type: "text", value: i + "@" + a }]
    }
  );
}
function o6(t) {
  const i = t.split(".");
  return !(i.length < 2 || i[i.length - 1] && (/_/.test(i[i.length - 1]) || !/[a-zA-Z\d]/.test(i[i.length - 1])) || i[i.length - 2] && (/_/.test(i[i.length - 2]) || !/[a-zA-Z\d]/.test(i[i.length - 2])));
}
function s6(t) {
  const i = /[!"&'),.:;<>?\]}]+$/.exec(t);
  if (!i)
    return [t, void 0];
  t = t.slice(0, i.index);
  let a = i[0], o = a.indexOf(")");
  const s = qy(t, "(");
  let c = qy(t, ")");
  for (; o !== -1 && s > c; )
    t += a.slice(0, o + 1), a = a.slice(o + 1), o = a.indexOf(")"), c++;
  return [t, a];
}
function Q0(t, i) {
  const a = t.input.charCodeAt(t.index - 1);
  return (t.index === 0 || la(a) || Cu(a)) && // If it’s an email, the previous character should not be a slash.
  (!i || a !== 47);
}
K0.peek = b6;
function u6() {
  this.buffer();
}
function c6(t) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, t);
}
function f6() {
  this.buffer();
}
function d6(t) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    t
  );
}
function p6(t) {
  const i = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = li(
    this.sliceSerialize(t)
  ).toLowerCase(), a.label = i;
}
function h6(t) {
  this.exit(t);
}
function m6(t) {
  const i = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = li(
    this.sliceSerialize(t)
  ).toLowerCase(), a.label = i;
}
function g6(t) {
  this.exit(t);
}
function b6() {
  return "[";
}
function K0(t, i, a, o) {
  const s = a.createTracker(o);
  let c = s.move("[^");
  const f = a.enter("footnoteReference"), p = a.enter("reference");
  return c += s.move(
    a.safe(a.associationId(t), { after: "]", before: c })
  ), p(), f(), c += s.move("]"), c;
}
function x6() {
  return {
    enter: {
      gfmFootnoteCallString: u6,
      gfmFootnoteCall: c6,
      gfmFootnoteDefinitionLabelString: f6,
      gfmFootnoteDefinition: d6
    },
    exit: {
      gfmFootnoteCallString: p6,
      gfmFootnoteCall: h6,
      gfmFootnoteDefinitionLabelString: m6,
      gfmFootnoteDefinition: g6
    }
  };
}
function y6(t) {
  let i = !1;
  return t && t.firstLineBlank && (i = !0), {
    handlers: { footnoteDefinition: a, footnoteReference: K0 },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function a(o, s, c, f) {
    const p = c.createTracker(f);
    let m = p.move("[^");
    const g = c.enter("footnoteDefinition"), b = c.enter("label");
    return m += p.move(
      c.safe(c.associationId(o), { before: m, after: "]" })
    ), b(), m += p.move("]:"), o.children && o.children.length > 0 && (p.shift(4), m += p.move(
      (i ? `
` : " ") + c.indentLines(
        c.containerFlow(o, p.current()),
        i ? P0 : v6
      )
    )), g(), m;
  }
}
function v6(t, i, a) {
  return i === 0 ? t : P0(t, i, a);
}
function P0(t, i, a) {
  return (a ? "" : "    ") + t;
}
const w6 = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
$p.attention = j6;
$p.peek = E6;
function k6() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: z6 },
    exit: { strikethrough: _6 }
  };
}
function S6() {
  return {
    handlers: { delete: $p },
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: w6
      }
    ]
  };
}
function z6(t) {
  this.enter({ type: "delete", children: [], position: void 0 }, t);
}
function _6(t) {
  this.exit(t);
}
function $p(t, i, a, o) {
  const s = a.createTracker(o), c = a.stack.includes("strikethrough") ? "~" : "~~", f = a.enter("strikethrough");
  let p = s.move(c);
  return p += a.containerPhrasing(t, {
    ...s.current(),
    before: p,
    after: "~"
  }), p += s.move(c), f(), p;
}
function j6() {
  return { construct: "strikethrough", markers: ["~"], sizes: [2, 1] };
}
function E6() {
  return "~";
}
function C6(t) {
  return t.length;
}
function T6(t, i) {
  const a = i || {}, o = (a.align || []).concat(), s = a.stringLength || C6, c = [], f = [], p = [], m = [];
  let g = 0, b = -1;
  for (; ++b < t.length; ) {
    const E = [], j = [];
    let N = -1;
    for (t[b].length > g && (g = t[b].length); ++N < t[b].length; ) {
      const U = N6(t[b][N]);
      if (a.alignDelimiters !== !1) {
        const R = s(U);
        j[N] = R, (m[N] === void 0 || R > m[N]) && (m[N] = R);
      }
      E.push(U);
    }
    f[b] = E, p[b] = j;
  }
  let x = -1;
  if (typeof o == "object" && "length" in o)
    for (; ++x < g; )
      c[x] = Vy(o[x]);
  else {
    const E = Vy(o);
    for (; ++x < g; )
      c[x] = E;
  }
  x = -1;
  const w = [], v = [];
  for (; ++x < g; ) {
    const E = c[x];
    let j = "", N = "";
    E === 99 ? (j = ":", N = ":") : E === 108 ? j = ":" : E === 114 && (N = ":");
    let U = a.alignDelimiters === !1 ? 1 : Math.max(
      1,
      m[x] - j.length - N.length
    );
    const R = j + "-".repeat(U) + N;
    a.alignDelimiters !== !1 && (U = j.length + U + N.length, U > m[x] && (m[x] = U), v[x] = U), w[x] = R;
  }
  f.splice(1, 0, w), p.splice(1, 0, v), b = -1;
  const S = [];
  for (; ++b < f.length; ) {
    const E = f[b], j = p[b];
    x = -1;
    const N = [];
    for (; ++x < g; ) {
      const U = E[x] || "";
      let R = "", G = "";
      if (a.alignDelimiters !== !1) {
        const K = m[x] - (j[x] || 0), A = c[x];
        A === 114 ? R = " ".repeat(K) : A === 99 ? K % 2 ? (R = " ".repeat(K / 2 + 0.5), G = " ".repeat(K / 2 - 0.5)) : (R = " ".repeat(K / 2), G = R) : G = " ".repeat(K);
      }
      a.delimiterStart !== !1 && !x && N.push("|"), a.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(a.alignDelimiters === !1 && U === "") && (a.delimiterStart !== !1 || x) && N.push(" "), a.alignDelimiters !== !1 && N.push(R), N.push(U), a.alignDelimiters !== !1 && N.push(G), a.padding !== !1 && N.push(" "), (a.delimiterEnd !== !1 || x !== g - 1) && N.push("|");
    }
    S.push(
      a.delimiterEnd === !1 ? N.join("").replace(/ +$/, "") : N.join("")
    );
  }
  return S.join(`
`);
}
function N6(t) {
  return t == null ? "" : String(t);
}
function Vy(t) {
  const i = typeof t == "string" ? t.codePointAt(0) : 0;
  return i === 67 || i === 99 ? 99 : i === 76 || i === 108 ? 108 : i === 82 || i === 114 ? 114 : 0;
}
const A6 = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Au([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function O6(t, i, a, o) {
  const s = a.enter("blockquote"), c = a.createTracker(o);
  c.move("> "), c.shift(2);
  const f = a.indentLines(
    a.containerFlow(t, c.current()),
    M6
  );
  return s(), f;
}
function M6(t, i, a) {
  return ">" + (a ? "" : " ") + t;
}
function D6(t, i) {
  return Yy(t, i.inConstruct, !0) && !Yy(t, i.notInConstruct, !1);
}
function Yy(t, i, a) {
  if (typeof i == "string" && (i = [i]), !i || i.length === 0)
    return a;
  let o = -1;
  for (; ++o < i.length; )
    if (t.includes(i[o]))
      return !0;
  return !1;
}
function Gy(t, i, a, o) {
  let s = -1;
  for (; ++s < a.unsafe.length; ) {
    const c = a.unsafe[s];
    if (c.character === `
` && !c.before && !c.after && D6(a.stack, c))
      return /[\t ]/.test(o.before) ? "" : " ";
  }
  return `\\
`;
}
function R6(t, i) {
  const a = String(t);
  let o = a.indexOf(i), s = o, c = 0, f = 0;
  if (typeof i != "string")
    throw new TypeError("Expected substring");
  for (; o !== -1; )
    o === s ? ++c > f && (f = c) : c = 1, s = o + i.length, o = a.indexOf(i, s);
  return f;
}
function L6(t, i) {
  return !!(i.options.fences === !1 && t.value && // If there’s no info…
  !t.lang && // And there’s a non-whitespace character…
  /[^\n\r ]/.test(t.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(t.value));
}
function U6(t) {
  const i = t.options.fence || "`";
  if (i !== "`" && i !== "~")
    throw new Error(
      "Cannot serialize code with `" + i + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return i;
}
function B6(t, i, a, o) {
  const s = U6(a), c = t.value || "";
  if (L6(t, a)) {
    const x = a.enter("codeIndented"), w = a.indentLines(c, I6);
    return x(), w;
  }
  const f = a.createTracker(o), p = s.repeat(Math.max(R6(c, s) + 1, 3)), m = a.enter("codeFenced"), g = s === "`" ? "GraveAccent" : "Tilde";
  let b = f.move(p);
  if (t.lang) {
    const x = a.enter(`codeFencedLang${g}`);
    b += f.move(
      a.safe(t.lang, {
        before: b,
        after: " ",
        encode: ["`"],
        ...f.current()
      })
    ), x();
  }
  if (t.lang && t.meta) {
    const x = a.enter(`codeFencedMeta${g}`);
    b += f.move(" "), b += f.move(
      a.safe(t.meta, {
        before: b,
        after: `
`,
        encode: ["`"],
        ...f.current()
      })
    ), x();
  }
  return b += f.move(`
`), c && (b += f.move(c + `
`)), b += f.move(p), m(), b;
}
function I6(t, i, a) {
  return (a ? "" : "    ") + t;
}
function qp(t) {
  const i = t.options.quote || '"';
  if (i !== '"' && i !== "'")
    throw new Error(
      "Cannot serialize title with `" + i + "` for `options.quote`, expected `\"`, or `'`"
    );
  return i;
}
function H6(t, i, a, o) {
  const s = qp(a), c = s === '"' ? "Quote" : "Apostrophe", f = a.enter("definition");
  let p = a.enter("label");
  const m = a.createTracker(o);
  let g = m.move("[");
  return g += m.move(
    a.safe(a.associationId(t), {
      before: g,
      after: "]",
      ...m.current()
    })
  ), g += m.move("]: "), p(), // If there’s no url, or…
  !t.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (p = a.enter("destinationLiteral"), g += m.move("<"), g += m.move(
    a.safe(t.url, { before: g, after: ">", ...m.current() })
  ), g += m.move(">")) : (p = a.enter("destinationRaw"), g += m.move(
    a.safe(t.url, {
      before: g,
      after: t.title ? " " : `
`,
      ...m.current()
    })
  )), p(), t.title && (p = a.enter(`title${c}`), g += m.move(" " + s), g += m.move(
    a.safe(t.title, {
      before: g,
      after: s,
      ...m.current()
    })
  ), g += m.move(s), p()), f(), g;
}
function Z6(t) {
  const i = t.options.emphasis || "*";
  if (i !== "*" && i !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + i + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return i;
}
Vp.attention = $6;
Vp.peek = q6;
function Vp(t, i, a, o) {
  const s = a.enter("phrasing"), c = a.containerPhrasing({ type: "root", children: [t] }, o);
  return s(), c;
}
function $6(t, i) {
  return {
    construct: "emphasis",
    markers: Z6(i) === "*" ? ["*", "_"] : ["_", "*"],
    sizes: [1]
  };
}
function q6(t, i, a) {
  return a.options.emphasis || "*";
}
function V6(t) {
  return "&#x" + t.toString(16).toUpperCase() + ";";
}
function Y6(t, i) {
  let a = !1;
  return Hp(t, function(o) {
    if ("value" in o && /\r?\n|\r/.test(o.value) || o.type === "break")
      return a = !0, rp;
  }), !!((!t.depth || t.depth < 3) && Mp(t) && (i.options.setext || a));
}
function G6(t, i, a, o) {
  const s = Math.max(Math.min(6, t.depth || 1), 1), c = a.createTracker(o);
  if (Y6(t, a)) {
    const x = a.enter("headingSetext"), w = a.enter("phrasing"), v = a.containerPhrasing(t, {
      ...c.current(),
      before: `
`,
      after: `
`
    });
    return w(), x(), v + `
` + (s === 1 ? "=" : "-").repeat(
      // The whole size…
      v.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(v.lastIndexOf("\r"), v.lastIndexOf(`
`)) + 1)
    );
  }
  const f = "#".repeat(s), p = a.enter("headingAtx"), m = a.enter("phrasing");
  c.move(f + " ");
  let g = a.containerPhrasing(t, {
    before: "# ",
    after: `
`,
    ...c.current()
  });
  const b = g.charCodeAt(0);
  return (b === 9 || b === 32) && (g = V6(b) + g.slice(1)), g = g ? f + " " + g : f, a.options.closeAtx && (g += " " + f), m(), p(), g;
}
J0.peek = F6;
function J0(t) {
  return t.value || "";
}
function F6() {
  return "<";
}
W0.peek = X6;
function W0(t, i, a, o) {
  const s = qp(a), c = s === '"' ? "Quote" : "Apostrophe", f = a.enter("image");
  let p = a.enter("label");
  const m = a.createTracker(o);
  let g = m.move("![");
  return g += m.move(
    a.safe(t.alt, { before: g, after: "]", ...m.current() })
  ), g += m.move("]("), p(), // If there’s no url but there is a title…
  !t.url && t.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (p = a.enter("destinationLiteral"), g += m.move("<"), g += m.move(
    a.safe(t.url, { before: g, after: ">", ...m.current() })
  ), g += m.move(">")) : (p = a.enter("destinationRaw"), g += m.move(
    a.safe(t.url, {
      before: g,
      after: t.title ? " " : ")",
      ...m.current()
    })
  )), p(), t.title && (p = a.enter(`title${c}`), g += m.move(" " + s), g += m.move(
    a.safe(t.title, {
      before: g,
      after: s,
      ...m.current()
    })
  ), g += m.move(s), p()), g += m.move(")"), f(), g;
}
function X6() {
  return "!";
}
ew.peek = Q6;
function ew(t, i, a, o) {
  const s = t.referenceType, c = a.enter("imageReference");
  let f = a.enter("label");
  const p = a.createTracker(o);
  let m = p.move("![");
  const g = a.safe(t.alt, {
    before: m,
    after: "]",
    ...p.current()
  });
  m += p.move(g + "]["), f();
  const b = a.stack;
  a.stack = b.filter(function(w) {
    return w !== "phrasing";
  }), f = a.enter("reference");
  const x = a.safe(a.associationId(t), {
    before: m,
    after: "]",
    ...p.current()
  });
  return f(), a.stack = b, c(), s === "full" || !g || g !== x ? m += p.move(x + "]") : s === "shortcut" ? m = m.slice(0, -1) : m += p.move("]"), m;
}
function Q6() {
  return "!";
}
tw.peek = K6;
function tw(t, i, a) {
  let o = t.value || "", s = "`", c = -1;
  for (; new RegExp("(^|[^`])" + s + "([^`]|$)").test(o); )
    s += "`";
  for (/[^\n\r ]/.test(o) && (/^[\n\r ]/.test(o) && /[\n\r ]$/.test(o) || /^`|`$/.test(o)) && (o = " " + o + " "); ++c < a.unsafe.length; ) {
    const f = a.unsafe[c], p = a.compilePattern(f);
    if (!f.atBreak) continue;
    let m;
    for (; m = p.exec(o); ) {
      let g = m.index;
      o.charCodeAt(g) === 10 && o.charCodeAt(g - 1) === 13 && g--, o = o.slice(0, g) + " " + o.slice(m.index + 1);
    }
  }
  return s + o + s;
}
function K6() {
  return "`";
}
function nw(t, i) {
  const a = Mp(t);
  return !!(!i.options.resourceLink && // If there’s a url…
  t.url && // And there’s no title…
  !t.title && // And the content of `node` is a single text node…
  t.children && t.children.length === 1 && t.children[0].type === "text" && // And if the url is the same as the content…
  (a === t.url || "mailto:" + a === t.url) && // And that starts w/ a protocol…
  /^[a-z][+\-.a-z]+:/i.test(t.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(t.url));
}
iw.peek = P6;
function iw(t, i, a, o) {
  const s = qp(a), c = s === '"' ? "Quote" : "Apostrophe", f = a.createTracker(o);
  if (nw(t, a)) {
    const b = a.stack;
    a.stack = b.filter(function(v) {
      return v !== "phrasing";
    });
    const x = a.enter("autolink");
    let w = f.move("<");
    return w += f.move(
      a.containerPhrasing(t, {
        before: w,
        after: ">",
        ...f.current()
      })
    ), w += f.move(">"), x(), a.stack = b, w;
  }
  const p = a.enter("link");
  let m = a.enter("label"), g = f.move("[");
  return g += f.move(
    a.containerPhrasing(t, {
      before: g,
      after: "](",
      ...f.current()
    })
  ), g += f.move("]("), m(), // If there’s no url but there is a title…
  !t.url && t.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (m = a.enter("destinationLiteral"), g += f.move("<"), g += f.move(
    a.safe(t.url, { before: g, after: ">", ...f.current() })
  ), g += f.move(">")) : (m = a.enter("destinationRaw"), g += f.move(
    a.safe(t.url, {
      before: g,
      after: t.title ? " " : ")",
      ...f.current()
    })
  )), m(), t.title && (m = a.enter(`title${c}`), g += f.move(" " + s), g += f.move(
    a.safe(t.title, {
      before: g,
      after: s,
      ...f.current()
    })
  ), g += f.move(s), m()), g += f.move(")"), p(), g;
}
function P6(t, i, a) {
  return nw(t, a) ? "<" : "[";
}
rw.peek = J6;
function rw(t, i, a, o) {
  const s = t.referenceType, c = a.enter("linkReference");
  let f = a.enter("label");
  const p = a.createTracker(o);
  let m = p.move("[");
  const g = a.containerPhrasing(t, {
    before: m,
    after: "]",
    ...p.current()
  });
  m += p.move(g + "]["), f();
  const b = a.stack;
  a.stack = b.filter(function(w) {
    return w !== "phrasing";
  }), f = a.enter("reference");
  const x = a.safe(a.associationId(t), {
    before: m,
    after: "]",
    ...p.current()
  });
  return f(), a.stack = b, c(), s === "full" || !g || g !== x ? m += p.move(x + "]") : s === "shortcut" ? m = m.slice(0, -1) : m += p.move("]"), m;
}
function J6() {
  return "[";
}
function Yp(t) {
  const i = t.options.bullet || "*";
  if (i !== "*" && i !== "+" && i !== "-")
    throw new Error(
      "Cannot serialize items with `" + i + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return i;
}
function W6(t) {
  const i = Yp(t), a = t.options.bulletOther;
  if (!a)
    return i === "*" ? "-" : "*";
  if (a !== "*" && a !== "+" && a !== "-")
    throw new Error(
      "Cannot serialize items with `" + a + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (a === i)
    throw new Error(
      "Expected `bullet` (`" + i + "`) and `bulletOther` (`" + a + "`) to be different"
    );
  return a;
}
function eA(t) {
  const i = t.options.bulletOrdered || ".";
  if (i !== "." && i !== ")")
    throw new Error(
      "Cannot serialize items with `" + i + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return i;
}
function aw(t) {
  const i = t.options.rule || "*";
  if (i !== "*" && i !== "-" && i !== "_")
    throw new Error(
      "Cannot serialize rules with `" + i + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return i;
}
function tA(t, i, a, o) {
  const s = a.enter("list"), c = a.bulletCurrent;
  let f = t.ordered ? eA(a) : Yp(a);
  const p = t.ordered ? f === "." ? ")" : "." : W6(a);
  let m = i && a.bulletLastUsed ? f === a.bulletLastUsed : !1;
  if (!t.ordered) {
    const b = t.children ? t.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (f === "*" || f === "-") && // Empty first list item:
      b && (!b.children || !b.children[0]) && // Directly in two other list items:
      a.stack[a.stack.length - 1] === "list" && a.stack[a.stack.length - 2] === "listItem" && a.stack[a.stack.length - 3] === "list" && a.stack[a.stack.length - 4] === "listItem" && // That are each the first child.
      a.indexStack[a.indexStack.length - 1] === 0 && a.indexStack[a.indexStack.length - 2] === 0 && a.indexStack[a.indexStack.length - 3] === 0 && (m = !0), aw(a) === f && b
    ) {
      let x = -1;
      for (; ++x < t.children.length; ) {
        const w = t.children[x];
        if (w && w.type === "listItem" && w.children && w.children[0] && w.children[0].type === "thematicBreak") {
          m = !0;
          break;
        }
      }
    }
  }
  m && (f = p), a.bulletCurrent = f;
  const g = a.containerFlow(t, o);
  return a.bulletLastUsed = f, a.bulletCurrent = c, s(), g;
}
function nA(t) {
  const i = t.options.listItemIndent || "one";
  if (i !== "tab" && i !== "one" && i !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + i + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return i;
}
function iA(t, i, a, o) {
  const s = nA(a);
  let c = a.bulletCurrent || Yp(a);
  i && i.type === "list" && i.ordered && (c = (typeof i.start == "number" && i.start > -1 ? i.start : 1) + (a.options.incrementListMarker === !1 ? 0 : i.children.indexOf(t)) + c);
  let f = c.length + 1;
  (s === "tab" || s === "mixed" && (i && i.type === "list" && i.spread || t.spread)) && (f = Math.ceil(f / 4) * 4);
  const p = a.createTracker(o);
  p.move(c + " ".repeat(f - c.length)), p.shift(f);
  const m = a.enter("listItem"), g = a.indentLines(
    a.containerFlow(t, p.current()),
    b
  );
  return m(), g;
  function b(x, w, v) {
    return w ? (v ? "" : " ".repeat(f)) + x : (v ? c : c + " ".repeat(f - c.length)) + x;
  }
}
function rA(t, i, a, o) {
  const s = a.enter("paragraph"), c = a.enter("phrasing"), f = a.containerPhrasing(t, o);
  return c(), s(), f;
}
function aA(t, i, a, o) {
  if (!t.children.some(function(p) {
    return A6(p);
  })) return a.containerFlow(t, o);
  const c = a.enter("phrasing"), f = a.containerPhrasing(t, o);
  return c(), f;
}
function lA(t) {
  const i = t.options.strong || "*";
  if (i !== "*" && i !== "_")
    throw new Error(
      "Cannot serialize strong with `" + i + "` for `options.strong`, expected `*`, or `_`"
    );
  return i;
}
Gp.attention = oA;
Gp.peek = sA;
function Gp(t, i, a, o) {
  const s = a.enter("phrasing"), c = a.containerPhrasing({ type: "root", children: [t] }, o);
  return s(), c;
}
function oA(t, i) {
  return {
    construct: "strong",
    markers: lA(i) === "*" ? ["*", "_"] : ["_", "*"],
    sizes: [2]
  };
}
function sA(t, i, a) {
  return a.options.strong || "*";
}
function uA(t, i, a, o) {
  const s = i ? i.children : [], c = s.indexOf(t);
  return a.safe(t.value, {
    ...o,
    afterNode: s[c + 1],
    beforeNode: s[c - 1]
  });
}
function cA(t) {
  const i = t.options.ruleRepetition || 3;
  if (i < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + i + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return i;
}
function fA(t, i, a) {
  const o = (aw(a) + (a.options.ruleSpaces ? " " : "")).repeat(cA(a));
  return a.options.ruleSpaces ? o.slice(0, -1) : o;
}
const lw = {
  blockquote: O6,
  break: Gy,
  code: B6,
  definition: H6,
  emphasis: Vp,
  hardBreak: Gy,
  heading: G6,
  html: J0,
  image: W0,
  imageReference: ew,
  inlineCode: tw,
  link: iw,
  linkReference: rw,
  list: tA,
  listItem: iA,
  paragraph: rA,
  root: aA,
  strong: Gp,
  text: uA,
  thematicBreak: fA
};
function dA() {
  return {
    enter: {
      table: pA,
      tableData: Fy,
      tableHeader: Fy,
      tableRow: mA
    },
    exit: {
      codeText: gA,
      table: hA,
      tableData: Bd,
      tableHeader: Bd,
      tableRow: Bd
    }
  };
}
function pA(t) {
  const i = t._align;
  this.enter(
    {
      type: "table",
      align: i.map(function(a) {
        return a === "none" ? null : a;
      }),
      children: []
    },
    t
  ), this.data.inTable = !0;
}
function hA(t) {
  this.exit(t), this.data.inTable = void 0;
}
function mA(t) {
  this.enter({ type: "tableRow", children: [] }, t);
}
function Bd(t) {
  this.exit(t);
}
function Fy(t) {
  this.enter({ type: "tableCell", children: [] }, t);
}
function gA(t) {
  let i = this.resume();
  this.data.inTable && (i = i.replace(/\\([\\|])/g, bA));
  const a = this.stack[this.stack.length - 1];
  a.type, a.value = i, this.exit(t);
}
function bA(t, i) {
  return i === "|" ? i : t;
}
function xA(t) {
  const i = t || {}, a = i.tableCellPadding, o = i.tablePipeAlign, s = i.stringLength, c = a ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: w,
      table: f,
      tableCell: m,
      tableRow: p
    }
  };
  function f(v, S, E, j) {
    return g(b(v, E, j), v.align);
  }
  function p(v, S, E, j) {
    const N = x(v, E, j), U = g([N]);
    return U.slice(0, U.indexOf(`
`));
  }
  function m(v, S, E, j) {
    const N = E.enter("tableCell"), U = E.enter("phrasing"), R = E.containerPhrasing(v, {
      ...j,
      before: c,
      after: c
    });
    return U(), N(), R;
  }
  function g(v, S) {
    return T6(v, {
      align: S,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: o,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: a,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: s
    });
  }
  function b(v, S, E) {
    const j = v.children;
    let N = -1;
    const U = [], R = S.enter("table");
    for (; ++N < j.length; )
      U[N] = x(j[N], S, E);
    return R(), U;
  }
  function x(v, S, E) {
    const j = v.children;
    let N = -1;
    const U = [], R = S.enter("tableRow");
    for (; ++N < j.length; )
      U[N] = m(j[N], v, S, E);
    return R(), U;
  }
  function w(v, S, E) {
    let j = lw.inlineCode(v, S, E);
    return E.stack.includes("tableCell") && (j = j.replace(/\|/g, "\\$&")), j;
  }
}
function yA() {
  return {
    exit: {
      taskListCheckValueChecked: Xy,
      taskListCheckValueUnchecked: Xy,
      paragraph: wA
    }
  };
}
function vA() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: kA }
  };
}
function Xy(t) {
  const i = this.stack[this.stack.length - 2];
  i.type, i.checked = t.type === "taskListCheckValueChecked";
}
function wA(t) {
  const i = this.stack[this.stack.length - 2];
  if (i && i.type === "listItem" && typeof i.checked == "boolean") {
    const a = this.stack[this.stack.length - 1];
    a.type;
    const o = a.children[0];
    if (o && o.type === "text") {
      const s = i.children;
      let c = -1, f;
      for (; ++c < s.length; ) {
        const p = s[c];
        if (p.type === "paragraph") {
          f = p;
          break;
        }
      }
      f === a && (o.value = o.value.slice(1), o.value.length === 0 ? a.children.shift() : a.position && o.position && typeof o.position.start.offset == "number" && (o.position.start.column++, o.position.start.offset++, a.position.start = Object.assign({}, o.position.start)));
    }
  }
  this.exit(t);
}
function kA(t, i, a, o) {
  const s = t.children[0], c = typeof t.checked == "boolean" && s && s.type === "paragraph", f = "[" + (t.checked ? "x" : " ") + "] ", p = a.createTracker(o);
  c && p.move(f);
  let m = lw.listItem(t, i, a, {
    ...o,
    ...p.current()
  });
  return c && (m = m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, g)), m;
  function g(b) {
    return b + f;
  }
}
function SA() {
  return [
    PN(),
    x6(),
    k6(),
    dA(),
    yA()
  ];
}
function zA(t) {
  return {
    extensions: [
      JN(),
      y6(t),
      S6(),
      xA(t),
      vA()
    ]
  };
}
const _A = {
  tokenize: AA,
  partial: !0
}, ow = {
  tokenize: OA,
  partial: !0
}, sw = {
  tokenize: MA,
  partial: !0
}, uw = {
  tokenize: DA,
  partial: !0
}, jA = {
  tokenize: RA,
  partial: !0
}, cw = {
  name: "wwwAutolink",
  tokenize: TA,
  previous: dw
}, fw = {
  name: "protocolAutolink",
  tokenize: NA,
  previous: pw
}, Vi = {
  name: "emailAutolink",
  tokenize: CA,
  previous: hw
}, ki = {};
function EA() {
  return {
    text: ki
  };
}
let Wr = 48;
for (; Wr < 123; )
  ki[Wr] = Vi, Wr++, Wr === 58 ? Wr = 65 : Wr === 91 && (Wr = 97);
ki[43] = Vi;
ki[45] = Vi;
ki[46] = Vi;
ki[95] = Vi;
ki[72] = [Vi, fw];
ki[104] = [Vi, fw];
ki[87] = [Vi, cw];
ki[119] = [Vi, cw];
function CA(t, i, a) {
  const o = this;
  let s, c;
  return f;
  function f(x) {
    return !sp(x) || !hw.call(o, o.previous) || Fp(o.events) ? a(x) : (t.enter("literalAutolink"), t.enter("literalAutolinkEmail"), p(x));
  }
  function p(x) {
    return sp(x) ? (t.consume(x), p) : x === 64 ? (t.consume(x), m) : a(x);
  }
  function m(x) {
    return x === 46 ? t.check(jA, b, g)(x) : x === 45 || x === 95 || en(x) ? (c = !0, t.consume(x), m) : b(x);
  }
  function g(x) {
    return t.consume(x), s = !0, m;
  }
  function b(x) {
    return c && s && cn(o.previous) ? (t.exit("literalAutolinkEmail"), t.exit("literalAutolink"), i(x)) : a(x);
  }
}
function TA(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return f !== 87 && f !== 119 || !dw.call(o, o.previous) || Fp(o.events) ? a(f) : (t.enter("literalAutolink"), t.enter("literalAutolinkWww"), t.check(_A, t.attempt(ow, t.attempt(sw, c), a), a)(f));
  }
  function c(f) {
    return t.exit("literalAutolinkWww"), t.exit("literalAutolink"), i(f);
  }
}
function NA(t, i, a) {
  const o = this;
  let s = "", c = !1;
  return f;
  function f(x) {
    return (x === 72 || x === 104) && pw.call(o, o.previous) && !Fp(o.events) ? (t.enter("literalAutolink"), t.enter("literalAutolinkHttp"), s += String.fromCodePoint(x), t.consume(x), p) : a(x);
  }
  function p(x) {
    if (cn(x) && s.length < 5)
      return s += String.fromCodePoint(x), t.consume(x), p;
    if (x === 58) {
      const w = s.toLowerCase();
      if (w === "http" || w === "https")
        return t.consume(x), m;
    }
    return a(x);
  }
  function m(x) {
    return x === 47 ? (t.consume(x), c ? g : (c = !0, m)) : a(x);
  }
  function g(x) {
    return x === null || yu(x) || rt(x) || la(x) || Cu(x) ? a(x) : t.attempt(ow, t.attempt(sw, b), a)(x);
  }
  function b(x) {
    return t.exit("literalAutolinkHttp"), t.exit("literalAutolink"), i(x);
  }
}
function AA(t, i, a) {
  let o = 0;
  return s;
  function s(f) {
    return (f === 87 || f === 119) && o < 3 ? (o++, t.consume(f), s) : f === 46 && o === 3 ? (t.consume(f), c) : a(f);
  }
  function c(f) {
    return f === null ? a(f) : i(f);
  }
}
function OA(t, i, a) {
  let o, s, c;
  return f;
  function f(g) {
    return g === 46 || g === 95 ? t.check(uw, m, p)(g) : g === null || rt(g) || la(g) || g !== 45 && Cu(g) ? m(g) : (c = !0, t.consume(g), f);
  }
  function p(g) {
    return g === 95 ? o = !0 : (s = o, o = void 0), t.consume(g), f;
  }
  function m(g) {
    return s || o || !c ? a(g) : i(g);
  }
}
function MA(t, i) {
  let a = 0, o = 0;
  return s;
  function s(f) {
    return f === 40 ? (a++, t.consume(f), s) : f === 41 && o < a ? c(f) : f === 33 || f === 34 || f === 38 || f === 39 || f === 41 || f === 42 || f === 44 || f === 46 || f === 58 || f === 59 || f === 60 || f === 63 || f === 93 || f === 95 || f === 126 ? t.check(uw, i, c)(f) : f === null || rt(f) || la(f) ? i(f) : (t.consume(f), s);
  }
  function c(f) {
    return f === 41 && o++, t.consume(f), s;
  }
}
function DA(t, i, a) {
  return o;
  function o(p) {
    return p === 33 || p === 34 || p === 39 || p === 41 || p === 42 || p === 44 || p === 46 || p === 58 || p === 59 || p === 63 || p === 95 || p === 126 ? (t.consume(p), o) : p === 38 ? (t.consume(p), c) : p === 93 ? (t.consume(p), s) : (
      // `<` is an end.
      p === 60 || // So is whitespace.
      p === null || rt(p) || la(p) ? i(p) : a(p)
    );
  }
  function s(p) {
    return p === null || p === 40 || p === 91 || rt(p) || la(p) ? i(p) : o(p);
  }
  function c(p) {
    return cn(p) ? f(p) : a(p);
  }
  function f(p) {
    return p === 59 ? (t.consume(p), o) : cn(p) ? (t.consume(p), f) : a(p);
  }
}
function RA(t, i, a) {
  return o;
  function o(c) {
    return t.consume(c), s;
  }
  function s(c) {
    return en(c) ? a(c) : i(c);
  }
}
function dw(t) {
  return t === null || t === 40 || t === 42 || t === 95 || t === 91 || t === 93 || t === 126 || rt(t);
}
function pw(t) {
  return !cn(t);
}
function hw(t) {
  return !(t === 47 || sp(t));
}
function sp(t) {
  return t === 43 || t === 45 || t === 46 || t === 95 || en(t);
}
function Fp(t) {
  let i = t.length, a = !1;
  for (; i--; ) {
    const o = t[i][1];
    if ((o.type === "labelLink" || o.type === "labelImage") && !o._balanced) {
      a = !0;
      break;
    }
    if (o._gfmAutolinkLiteralWalkedInto) {
      a = !1;
      break;
    }
  }
  return t.length > 0 && !a && (t[t.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), a;
}
const LA = {
  tokenize: VA,
  partial: !0
};
function UA() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: ZA,
        continuation: {
          tokenize: $A
        },
        exit: qA
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: HA
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: BA,
        resolveTo: IA
      }
    }
  };
}
function BA(t, i, a) {
  const o = this;
  let s = o.events.length;
  const c = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []);
  let f;
  for (; s--; ) {
    const m = o.events[s][1];
    if (m.type === "labelImage") {
      f = m;
      break;
    }
    if (m.type === "gfmFootnoteCall" || m.type === "labelLink" || m.type === "label" || m.type === "image" || m.type === "link")
      break;
  }
  return p;
  function p(m) {
    if (!f || !f._balanced)
      return a(m);
    const g = li(o.sliceSerialize({
      start: f.end,
      end: o.now()
    }));
    return g.codePointAt(0) !== 94 || !c.includes(g.slice(1)) ? a(m) : (t.enter("gfmFootnoteCallLabelMarker"), t.consume(m), t.exit("gfmFootnoteCallLabelMarker"), i(m));
  }
}
function IA(t, i) {
  let a = t.length;
  for (; a--; )
    if (t[a][1].type === "labelImage" && t[a][0] === "enter") {
      t[a][1];
      break;
    }
  t[a + 1][1].type = "data", t[a + 3][1].type = "gfmFootnoteCallLabelMarker";
  const o = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, t[a + 3][1].start),
    end: Object.assign({}, t[t.length - 1][1].end)
  }, s = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, t[a + 3][1].end),
    end: Object.assign({}, t[a + 3][1].end)
  };
  s.end.column++, s.end.offset++, s.end._bufferIndex++;
  const c = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, s.end),
    end: Object.assign({}, t[t.length - 1][1].start)
  }, f = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, c.start),
    end: Object.assign({}, c.end)
  }, p = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    t[a + 1],
    t[a + 2],
    ["enter", o, i],
    // The `[`
    t[a + 3],
    t[a + 4],
    // The `^`.
    ["enter", s, i],
    ["exit", s, i],
    // Everything in between.
    ["enter", c, i],
    ["enter", f, i],
    ["exit", f, i],
    ["exit", c, i],
    // The ending (`]`, properly parsed and labelled).
    t[t.length - 2],
    t[t.length - 1],
    ["exit", o, i]
  ];
  return t.splice(a, t.length - a + 1, ...p), t;
}
function HA(t, i, a) {
  const o = this, s = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []);
  let c = 0, f;
  return p;
  function p(x) {
    return t.enter("gfmFootnoteCall"), t.enter("gfmFootnoteCallLabelMarker"), t.consume(x), t.exit("gfmFootnoteCallLabelMarker"), m;
  }
  function m(x) {
    return x !== 94 ? a(x) : (t.enter("gfmFootnoteCallMarker"), t.consume(x), t.exit("gfmFootnoteCallMarker"), t.enter("gfmFootnoteCallString"), t.enter("chunkString").contentType = "string", g);
  }
  function g(x) {
    if (
      // Too long.
      c > 999 || // Closing brace with nothing.
      x === 93 && !f || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      x === null || x === 91 || rt(x)
    )
      return a(x);
    if (x === 93) {
      t.exit("chunkString");
      const w = t.exit("gfmFootnoteCallString");
      return s.includes(li(o.sliceSerialize(w))) ? (t.enter("gfmFootnoteCallLabelMarker"), t.consume(x), t.exit("gfmFootnoteCallLabelMarker"), t.exit("gfmFootnoteCall"), i) : a(x);
    }
    return rt(x) || (f = !0), c++, t.consume(x), x === 92 ? b : g;
  }
  function b(x) {
    return x === 91 || x === 92 || x === 93 ? (t.consume(x), c++, g) : g(x);
  }
}
function ZA(t, i, a) {
  const o = this, s = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []);
  let c, f = 0, p;
  return m;
  function m(S) {
    return t.enter("gfmFootnoteDefinition")._container = !0, t.enter("gfmFootnoteDefinitionLabel"), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionLabelMarker"), g;
  }
  function g(S) {
    return S === 94 ? (t.enter("gfmFootnoteDefinitionMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionMarker"), t.enter("gfmFootnoteDefinitionLabelString"), t.enter("chunkString").contentType = "string", b) : a(S);
  }
  function b(S) {
    if (
      // Too long.
      f > 999 || // Closing brace with nothing.
      S === 93 && !p || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      S === null || S === 91 || rt(S)
    )
      return a(S);
    if (S === 93) {
      t.exit("chunkString");
      const E = t.exit("gfmFootnoteDefinitionLabelString");
      return c = li(o.sliceSerialize(E)), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionLabelMarker"), t.exit("gfmFootnoteDefinitionLabel"), w;
    }
    return rt(S) || (p = !0), f++, t.consume(S), S === 92 ? x : b;
  }
  function x(S) {
    return S === 91 || S === 92 || S === 93 ? (t.consume(S), f++, b) : b(S);
  }
  function w(S) {
    return S === 58 ? (t.enter("definitionMarker"), t.consume(S), t.exit("definitionMarker"), s.includes(c) || s.push(c), Fe(t, v, "gfmFootnoteDefinitionWhitespace")) : a(S);
  }
  function v(S) {
    return i(S);
  }
}
function $A(t, i, a) {
  return t.check(jo, i, t.attempt(LA, i, a));
}
function qA(t) {
  t.exit("gfmFootnoteDefinition");
}
function VA(t, i, a) {
  const o = this;
  return Fe(t, s, "gfmFootnoteDefinitionIndent", 5);
  function s(c) {
    const f = o.events[o.events.length - 1];
    return f && f[1].type === "gfmFootnoteDefinitionIndent" && f[2].sliceSerialize(f[1], !0).length === 4 ? i(c) : a(c);
  }
}
function YA(t) {
  let a = (t || {}).singleTilde;
  const o = {
    name: "strikethrough",
    tokenize: c,
    resolveAll: s
  };
  return a == null && (a = !0), {
    text: {
      126: o
    },
    insideSpan: {
      null: [o]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function s(f, p) {
    let m = -1;
    for (; ++m < f.length; )
      if (f[m][0] === "enter" && f[m][1].type === "strikethroughSequenceTemporary" && f[m][1]._close) {
        let g = m;
        for (; g--; )
          if (f[g][0] === "exit" && f[g][1].type === "strikethroughSequenceTemporary" && f[g][1]._open && // If the sizes are the same:
          f[m][1].end.offset - f[m][1].start.offset === f[g][1].end.offset - f[g][1].start.offset) {
            f[m][1].type = "strikethroughSequence", f[g][1].type = "strikethroughSequence";
            const b = {
              type: "strikethrough",
              start: Object.assign({}, f[g][1].start),
              end: Object.assign({}, f[m][1].end)
            }, x = {
              type: "strikethroughText",
              start: Object.assign({}, f[g][1].end),
              end: Object.assign({}, f[m][1].start)
            }, w = [["enter", b, p], ["enter", f[g][1], p], ["exit", f[g][1], p], ["enter", x, p]], v = p.parser.constructs.insideSpan.null;
            v && ai(w, w.length, 0, Tu(v, f.slice(g + 1, m), p)), ai(w, w.length, 0, [["exit", x, p], ["enter", f[m][1], p], ["exit", f[m][1], p], ["exit", b, p]]), ai(f, g - 1, m - g + 3, w), m = g + w.length - 2;
            break;
          }
      }
    for (m = -1; ++m < f.length; )
      f[m][1].type === "strikethroughSequenceTemporary" && (f[m][1].type = "data");
    return f;
  }
  function c(f, p, m) {
    const g = this.previous, b = this.events;
    let x = 0;
    return w;
    function w(S) {
      return g === 126 && b[b.length - 1][1].type !== "characterEscape" ? m(S) : (f.enter("strikethroughSequenceTemporary"), v(S));
    }
    function v(S) {
      const E = wu(g);
      if (S === 126)
        return x > 1 ? m(S) : (f.consume(S), x++, v);
      if (x < 2 && !a) return m(S);
      const j = f.exit("strikethroughSequenceTemporary"), N = wu(S);
      return j._open = !N || N === 2 && !!E, j._close = !E || E === 2 && !!N, p(S);
    }
  }
}
class GA {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [], this.index = /* @__PURE__ */ new Map();
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   *   Index at which to apply the edit.
   * @param {number} remove
   *   Count of items to remove at the index.
   * @param {Array<Event>} add
   *   Items to add at the index.
   * @returns {undefined}
   *   Nothing.
   */
  add(i, a, o) {
    FA(this, i, a, o);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   *   List of events to apply the edits to.
   * @returns {undefined}
   *   Nothing.
   */
  consume(i) {
    if (this.map.sort(function(c, f) {
      return c[0] - f[0];
    }), this.map.length === 0)
      return;
    let a = this.map.length;
    const o = [];
    for (; a > 0; )
      a -= 1, o.push(i.slice(this.map[a][0] + this.map[a][1]), this.map[a][2]), i.length = this.map[a][0];
    o.push(i.slice()), i.length = 0;
    let s = o.pop();
    for (; s; ) {
      for (const c of s)
        i.push(c);
      s = o.pop();
    }
    this.map.length = 0, this.index.clear();
  }
}
function FA(t, i, a, o) {
  if (a === 0 && o.length === 0)
    return;
  const s = t.index.get(i);
  if (s) {
    s[1] += a, s[2].push(...o);
    return;
  }
  const c = [i, a, o];
  t.map.push(c), t.index.set(i, c);
}
function XA(t, i) {
  let a = !1;
  const o = [];
  for (; i < t.length; ) {
    const s = t[i];
    if (a) {
      if (s[0] === "enter")
        s[1].type === "tableContent" && o.push(t[i + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (s[1].type === "tableContent") {
        if (t[i - 1][1].type === "tableDelimiterMarker") {
          const c = o.length - 1;
          o[c] = o[c] === "left" ? "center" : "right";
        }
      } else if (s[1].type === "tableDelimiterRow")
        break;
    } else s[0] === "enter" && s[1].type === "tableDelimiterRow" && (a = !0);
    i += 1;
  }
  return o;
}
function QA() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: KA,
        resolveAll: PA
      }
    }
  };
}
function KA(t, i, a) {
  const o = this;
  let s = 0, c = 0, f;
  return p;
  function p(I) {
    let te = o.events.length - 1;
    for (; te > -1; ) {
      const {
        type: pe
      } = o.events[te][1];
      if (pe === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      pe === "linePrefix")
        te--;
      else
        break;
    }
    const re = te > -1 ? o.events[te][1].type : null, Ae = re === "tableHead" || re === "tableRow" ? A : m;
    return Ae === A && o.parser.lazy[o.now().line] ? a(I) : Ae(I);
  }
  function m(I) {
    return t.enter("tableHead"), t.enter("tableRow"), g(I);
  }
  function g(I) {
    return I === 124 || (f = !0, c += 1), b(I);
  }
  function b(I) {
    return I === null ? a(I) : je(I) ? c > 1 ? (c = 0, o.interrupt = !0, t.exit("tableRow"), t.enter("lineEnding"), t.consume(I), t.exit("lineEnding"), v) : a(I) : Be(I) ? Fe(t, b, "whitespace")(I) : (c += 1, f && (f = !1, s += 1), I === 124 ? (t.enter("tableCellDivider"), t.consume(I), t.exit("tableCellDivider"), f = !0, b) : (t.enter("data"), x(I)));
  }
  function x(I) {
    return I === null || I === 124 || rt(I) ? (t.exit("data"), b(I)) : (t.consume(I), I === 92 ? w : x);
  }
  function w(I) {
    return I === 92 || I === 124 ? (t.consume(I), x) : x(I);
  }
  function v(I) {
    return o.interrupt = !1, o.parser.lazy[o.now().line] ? a(I) : (t.enter("tableDelimiterRow"), f = !1, Be(I) ? Fe(t, S, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(I) : S(I));
  }
  function S(I) {
    return I === 45 || I === 58 ? j(I) : I === 124 ? (f = !0, t.enter("tableCellDivider"), t.consume(I), t.exit("tableCellDivider"), E) : K(I);
  }
  function E(I) {
    return Be(I) ? Fe(t, j, "whitespace")(I) : j(I);
  }
  function j(I) {
    return I === 58 ? (c += 1, f = !0, t.enter("tableDelimiterMarker"), t.consume(I), t.exit("tableDelimiterMarker"), N) : I === 45 ? (c += 1, N(I)) : I === null || je(I) ? G(I) : K(I);
  }
  function N(I) {
    return I === 45 ? (t.enter("tableDelimiterFiller"), U(I)) : K(I);
  }
  function U(I) {
    return I === 45 ? (t.consume(I), U) : I === 58 ? (f = !0, t.exit("tableDelimiterFiller"), t.enter("tableDelimiterMarker"), t.consume(I), t.exit("tableDelimiterMarker"), R) : (t.exit("tableDelimiterFiller"), R(I));
  }
  function R(I) {
    return Be(I) ? Fe(t, G, "whitespace")(I) : G(I);
  }
  function G(I) {
    return I === 124 ? S(I) : I === null || je(I) ? !f || s !== c ? K(I) : (t.exit("tableDelimiterRow"), t.exit("tableHead"), i(I)) : K(I);
  }
  function K(I) {
    return a(I);
  }
  function A(I) {
    return t.enter("tableRow"), V(I);
  }
  function V(I) {
    return I === 124 ? (t.enter("tableCellDivider"), t.consume(I), t.exit("tableCellDivider"), V) : I === null || je(I) ? (t.exit("tableRow"), i(I)) : Be(I) ? Fe(t, V, "whitespace")(I) : (t.enter("data"), ie(I));
  }
  function ie(I) {
    return I === null || I === 124 || rt(I) ? (t.exit("data"), V(I)) : (t.consume(I), I === 92 ? ze : ie);
  }
  function ze(I) {
    return I === 92 || I === 124 ? (t.consume(I), ie) : ie(I);
  }
}
function PA(t, i) {
  let a = -1, o = !0, s = 0, c = [0, 0, 0, 0], f = [0, 0, 0, 0], p = !1, m = 0, g, b, x;
  const w = new GA();
  for (; ++a < t.length; ) {
    const v = t[a], S = v[1];
    v[0] === "enter" ? S.type === "tableHead" ? (p = !1, m !== 0 && (Qy(w, i, m, g, b), b = void 0, m = 0), g = {
      type: "table",
      start: Object.assign({}, S.start),
      // Note: correct end is set later.
      end: Object.assign({}, S.end)
    }, w.add(a, 0, [["enter", g, i]])) : S.type === "tableRow" || S.type === "tableDelimiterRow" ? (o = !0, x = void 0, c = [0, 0, 0, 0], f = [0, a + 1, 0, 0], p && (p = !1, b = {
      type: "tableBody",
      start: Object.assign({}, S.start),
      // Note: correct end is set later.
      end: Object.assign({}, S.end)
    }, w.add(a, 0, [["enter", b, i]])), s = S.type === "tableDelimiterRow" ? 2 : b ? 3 : 1) : s && (S.type === "data" || S.type === "tableDelimiterMarker" || S.type === "tableDelimiterFiller") ? (o = !1, f[2] === 0 && (c[1] !== 0 && (f[0] = f[1], x = au(w, i, c, s, void 0, x), c = [0, 0, 0, 0]), f[2] = a)) : S.type === "tableCellDivider" && (o ? o = !1 : (c[1] !== 0 && (f[0] = f[1], x = au(w, i, c, s, void 0, x)), c = f, f = [c[1], a, 0, 0])) : S.type === "tableHead" ? (p = !0, m = a) : S.type === "tableRow" || S.type === "tableDelimiterRow" ? (m = a, c[1] !== 0 ? (f[0] = f[1], x = au(w, i, c, s, a, x)) : f[1] !== 0 && (x = au(w, i, f, s, a, x)), s = 0) : s && (S.type === "data" || S.type === "tableDelimiterMarker" || S.type === "tableDelimiterFiller") && (f[3] = a);
  }
  for (m !== 0 && Qy(w, i, m, g, b), w.consume(i.events), a = -1; ++a < i.events.length; ) {
    const v = i.events[a];
    v[0] === "enter" && v[1].type === "table" && (v[1]._align = XA(i.events, a));
  }
  return t;
}
function au(t, i, a, o, s, c) {
  const f = o === 1 ? "tableHeader" : o === 2 ? "tableDelimiter" : "tableData", p = "tableContent";
  a[0] !== 0 && (c.end = Object.assign({}, tl(i.events, a[0])), t.add(a[0], 0, [["exit", c, i]]));
  const m = tl(i.events, a[1]);
  if (c = {
    type: f,
    start: Object.assign({}, m),
    // Note: correct end is set later.
    end: Object.assign({}, m)
  }, t.add(a[1], 0, [["enter", c, i]]), a[2] !== 0) {
    const g = tl(i.events, a[2]), b = tl(i.events, a[3]), x = {
      type: p,
      start: Object.assign({}, g),
      end: Object.assign({}, b)
    };
    if (t.add(a[2], 0, [["enter", x, i]]), o !== 2) {
      const w = i.events[a[2]], v = i.events[a[3]];
      if (w[1].end = Object.assign({}, v[1].end), w[1].type = "chunkText", w[1].contentType = "text", a[3] > a[2] + 1) {
        const S = a[2] + 1, E = a[3] - a[2] - 1;
        t.add(S, E, []);
      }
    }
    t.add(a[3] + 1, 0, [["exit", x, i]]);
  }
  return s !== void 0 && (c.end = Object.assign({}, tl(i.events, s)), t.add(s, 0, [["exit", c, i]]), c = void 0), c;
}
function Qy(t, i, a, o, s) {
  const c = [], f = tl(i.events, a);
  s && (s.end = Object.assign({}, f), c.push(["exit", s, i])), o.end = Object.assign({}, f), c.push(["exit", o, i]), t.add(a + 1, 0, c);
}
function tl(t, i) {
  const a = t[i], o = a[0] === "enter" ? "start" : "end";
  return a[1][o];
}
const JA = {
  name: "tasklistCheck",
  tokenize: eO
};
function WA() {
  return {
    text: {
      91: JA
    }
  };
}
function eO(t, i, a) {
  const o = this;
  return s;
  function s(m) {
    return (
      // Exit if there’s stuff before.
      o.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !o._gfmTasklistFirstContentOfListItem ? a(m) : (t.enter("taskListCheck"), t.enter("taskListCheckMarker"), t.consume(m), t.exit("taskListCheckMarker"), c)
    );
  }
  function c(m) {
    return rt(m) ? (t.enter("taskListCheckValueUnchecked"), t.consume(m), t.exit("taskListCheckValueUnchecked"), f) : m === 88 || m === 120 ? (t.enter("taskListCheckValueChecked"), t.consume(m), t.exit("taskListCheckValueChecked"), f) : a(m);
  }
  function f(m) {
    return m === 93 ? (t.enter("taskListCheckMarker"), t.consume(m), t.exit("taskListCheckMarker"), t.exit("taskListCheck"), p) : a(m);
  }
  function p(m) {
    return je(m) ? i(m) : Be(m) ? t.check({
      tokenize: tO
    }, i, a)(m) : a(m);
  }
}
function tO(t, i, a) {
  return Fe(t, o, "whitespace");
  function o(s) {
    return s === null ? a(s) : i(s);
  }
}
function nO(t) {
  return j0([
    EA(),
    UA(),
    YA(t),
    QA(),
    WA()
  ]);
}
const iO = {};
function rO(t) {
  const i = (
    /** @type {Processor<Root>} */
    this
  ), a = t || iO, o = i.data(), s = o.micromarkExtensions || (o.micromarkExtensions = []), c = o.fromMarkdownExtensions || (o.fromMarkdownExtensions = []), f = o.toMarkdownExtensions || (o.toMarkdownExtensions = []);
  s.push(nO(a)), c.push(SA()), f.push(zA(a));
}
function up(t) {
  return typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map(up).join("") : F.isValidElement(t) ? up(t.props.children) : "";
}
function cp({ text: t, label: i }) {
  const [a, o] = F.useState(!1), [s, c] = F.useState(!1);
  return /* @__PURE__ */ h.jsxs(
    "button",
    {
      type: "button",
      className: "copy-button",
      title: s ? "Could not copy. Select and copy the text." : "Copy",
      "aria-label": a ? "Copied" : i || "Copy",
      onClick: () => {
        navigator.clipboard.writeText(t).then(
          () => {
            o(!0), setTimeout(() => o(!1), 1800);
          },
          () => c(!0)
        );
      },
      children: [
        a ? /* @__PURE__ */ h.jsx(Nn, { size: 13 }) : /* @__PURE__ */ h.jsx(AS, { size: 13 }),
        i && /* @__PURE__ */ h.jsx("span", { children: a ? "Copied" : i }),
        s && "Select to copy"
      ]
    }
  );
}
function mw({ text: t, onError: i }) {
  return /* @__PURE__ */ h.jsx("div", { className: "markdown", children: /* @__PURE__ */ h.jsx(
    ZN,
    {
      remarkPlugins: [rO],
      components: {
        a: ({ href: a, children: o }) => /* @__PURE__ */ h.jsxs(
          "a",
          {
            href: a,
            onClick: (s) => {
              s.preventDefault(), a && window.muse.openExternal(a).catch((c) => i(c.message));
            },
            children: [
              o,
              /* @__PURE__ */ h.jsx(Hd, { size: 10, className: "inline-link-icon" })
            ]
          }
        ),
        img: ({ alt: a }) => /* @__PURE__ */ h.jsxs("span", { className: "remote-image", children: [
          "[Image: ",
          a || "External image",
          "]"
        ] }),
        pre: ({ children: a }) => {
          const o = Array.isArray(a) ? a[0] : a, c = (F.isValidElement(o) && o.props.className || "").replace(/^language-/, "").trim() || "code", f = up(a).replace(/\n$/, "");
          return /* @__PURE__ */ h.jsxs("div", { className: "code-block", children: [
            /* @__PURE__ */ h.jsxs("div", { className: "code-block-header", children: [
              /* @__PURE__ */ h.jsx("span", { className: "code-block-lang", children: c }),
              /* @__PURE__ */ h.jsx(cp, { text: f, label: "Copy" })
            ] }),
            /* @__PURE__ */ h.jsx("pre", { children: a })
          ] });
        },
        code: ({ className: a, children: o }) => /* @__PURE__ */ h.jsx("code", { className: a, children: o })
      },
      children: t
    }
  ) });
}
function gw({
  item: t,
  sessionId: i,
  onError: a
}) {
  const [o, s] = F.useState(!1), [c, f] = F.useState(), [p, m] = F.useState(!1), g = t.status === "inProgress", b = t.tool || t.label || t.role || t.kind.replace(/([A-Z])/g, " $1").toLowerCase(), x = t.statusLine || t.objective || t.commandText || t.fallbackText;
  return /* @__PURE__ */ h.jsxs("div", { className: `tool-item ${g ? "tool-running" : ""} ${o ? "open" : ""}`, children: [
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "tool-summary-button",
        "aria-expanded": o,
        onClick: () => s((w) => !w),
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "tool-state", children: g ? /* @__PURE__ */ h.jsx(ra, { size: 14, className: "spin" }) : t.status === "completed" ? /* @__PURE__ */ h.jsx(Nn, { size: 14 }) : /* @__PURE__ */ h.jsx(Sr, { size: 14 }) }),
          t.kind === "subagent" ? /* @__PURE__ */ h.jsx(FS, { size: 14 }) : t.kind === "toolCall" ? /* @__PURE__ */ h.jsx(du, { size: 14 }) : /* @__PURE__ */ h.jsx(nl, { size: 14 }),
          /* @__PURE__ */ h.jsx("span", { className: "tool-title", children: b }),
          x && /* @__PURE__ */ h.jsx("span", { className: "tool-summary", children: x }),
          t.patchSummary && /* @__PURE__ */ h.jsxs("span", { className: "diff-count", children: [
            /* @__PURE__ */ h.jsxs("b", { children: [
              "+",
              t.patchSummary.added
            ] }),
            /* @__PURE__ */ h.jsxs("i", { children: [
              "−",
              t.patchSummary.removed
            ] })
          ] }),
          /* @__PURE__ */ h.jsx(vi, { className: `details-chevron ${o ? "open" : ""}`, size: 13 })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${o ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsxs("div", { className: "tool-body", children: [
      t.objective && /* @__PURE__ */ h.jsx("p", { children: t.objective }),
      t.args && /* @__PURE__ */ h.jsxs("div", { className: "tool-arguments", children: [
        /* @__PURE__ */ h.jsx("span", { className: "eyebrow", children: "INPUT" }),
        /* @__PURE__ */ h.jsx("pre", { children: oO(t.args) })
      ] }),
      (c || t.visibleOutput || t.result?.text || t.failureReason || t.finalSummary) && /* @__PURE__ */ h.jsx("pre", { children: c || t.visibleOutput || t.result?.text || t.failureReason || t.finalSummary }),
      t.truncated && /* @__PURE__ */ h.jsx("p", { className: "muted", children: "Muse shortened the displayed output." }),
      t.outputRef && !c && /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          className: "text-button",
          disabled: p,
          onClick: () => {
            m(!0), window.muse.readOutput(i, t.itemId).then(f).catch((w) => a(w.message)).finally(() => m(!1));
          },
          children: p ? "Loading…" : "Read stored output"
        }
      ),
      /* @__PURE__ */ h.jsxs("span", { className: "tool-result-status", children: [
        t.status,
        t.durationMs !== void 0 ? ` · ${(t.durationMs / 1e3).toFixed(1)}s` : ""
      ] })
    ] }) }) })
  ] });
}
function aO({
  items: t,
  sessionId: i,
  onError: a
}) {
  const [o, s] = F.useState(!1), c = t.reduce((m, g) => m + (g.patchSummary?.added || 0), 0), f = t.reduce((m, g) => m + (g.patchSummary?.removed || 0), 0), p = Array.from(
    new Set(
      t.map(
        (m) => m.tool || m.label || m.role || m.kind.replace(/([A-Z])/g, " $1").toLowerCase()
      )
    )
  ).slice(0, 3).join(", ");
  return /* @__PURE__ */ h.jsxs("div", { className: `tool-group ${o ? "open" : ""}`, children: [
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "tool-group-header",
        "aria-expanded": o,
        onClick: () => s((m) => !m),
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "tool-state", children: /* @__PURE__ */ h.jsx(Nn, { size: 14 }) }),
          /* @__PURE__ */ h.jsx(Dv, { size: 14 }),
          /* @__PURE__ */ h.jsxs("span", { className: "tool-title", children: [
            "Ran ",
            t.length,
            " tools"
          ] }),
          /* @__PURE__ */ h.jsx("span", { className: "tool-summary", children: p }),
          (c > 0 || f > 0) && /* @__PURE__ */ h.jsxs("span", { className: "diff-count", children: [
            /* @__PURE__ */ h.jsxs("b", { children: [
              "+",
              c
            ] }),
            /* @__PURE__ */ h.jsxs("i", { children: [
              "−",
              f
            ] })
          ] }),
          /* @__PURE__ */ h.jsx(vi, { className: `details-chevron ${o ? "open" : ""}`, size: 13 })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${o ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsx("div", { className: "tool-group-list", children: t.map((m) => /* @__PURE__ */ h.jsx(gw, { item: m, sessionId: i, onError: a }, m.itemId)) }) }) })
  ] });
}
function lO({
  item: t,
  onError: i
}) {
  const [a, o] = F.useState(!1);
  return /* @__PURE__ */ h.jsxs("div", { className: `reasoning-item ${a ? "open" : ""}`, children: [
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "reasoning-summary-button",
        "aria-expanded": a,
        onClick: () => o((s) => !s),
        children: [
          t.status === "inProgress" ? /* @__PURE__ */ h.jsx(ra, { size: 13, className: "spin" }) : /* @__PURE__ */ h.jsx(Nn, { size: 13 }),
          /* @__PURE__ */ h.jsx("span", { children: t.status === "inProgress" ? "Thinking" : "Reasoning summary" }),
          /* @__PURE__ */ h.jsx(vi, { size: 12, className: `details-chevron ${a ? "open" : ""}` })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${a ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsx(
      mw,
      {
        text: t.summary?.join(`

`) || t.text || "No reasoning text was provided by the model.",
        onError: i
      }
    ) }) })
  ] });
}
function oO(t) {
  try {
    return JSON.stringify(JSON.parse(t), null, 2);
  } catch {
    return t;
  }
}
function sO({
  approval: t,
  onError: i
}) {
  const [a, o] = F.useState(!1);
  return /* @__PURE__ */ h.jsxs("section", { className: "approval-card", "aria-label": "Approval required", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "request-heading", children: [
      /* @__PURE__ */ h.jsx("span", { className: "request-icon", children: /* @__PURE__ */ h.jsx(VS, { size: 18 }) }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("h3", { children: "Approval required" }),
        /* @__PURE__ */ h.jsxs("p", { children: [
          "Muse would like permission to use ",
          t.toolName,
          "."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ h.jsx("pre", { children: t.subject.command || t.subject.path || t.subject.host || t.subject.target || t.rawArgs }),
    /* @__PURE__ */ h.jsx("div", { className: "approval-choices", children: t.availableChoices.map((s) => /* @__PURE__ */ h.jsxs(
      "button",
      {
        title: s.rulePreview || `Applies ${s.scope === "once" ? "once" : s.scope === "session" ? "for this session" : "as a saved policy"}`,
        className: s.decision.startsWith("approved") ? "button primary" : "button secondary",
        disabled: a,
        onClick: () => {
          o(!0), window.muse.approve(t.sessionId, t.approvalId, s.choiceId).catch((c) => i(c.message)).finally(() => o(!1));
        },
        children: [
          s.label,
          s.scope === "localPersistent" && /* @__PURE__ */ h.jsx("span", { className: "choice-scope", children: "Saves a rule" })
        ]
      },
      s.choiceId
    )) })
  ] });
}
function uO({
  request: t,
  onError: i
}) {
  const [a, o] = F.useState({}), [s, c] = F.useState(!1), f = t.questions.every((p) => {
    const m = a[p.id];
    if (!m) return !1;
    if (m.freeText?.trim() || m.selectedLabel) return !0;
    const g = m.selectedLabels?.length ?? 0;
    return p.selection.mode === "multiple" && g >= (p.selection.minSelections ?? 1) && g <= (p.selection.maxSelections ?? 1 / 0);
  });
  return /* @__PURE__ */ h.jsxs(
    "form",
    {
      className: "question-card",
      onSubmit: (p) => {
        p.preventDefault(), c(!0), window.muse.answer(t.sessionId, t.userInputId, Object.values(a)).catch((m) => i(m.message)).finally(() => c(!1));
      },
      children: [
        /* @__PURE__ */ h.jsxs("div", { className: "request-heading", children: [
          /* @__PURE__ */ h.jsx("span", { className: "request-icon", children: /* @__PURE__ */ h.jsx(NS, { size: 18 }) }),
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("h3", { children: "Input required" }),
            /* @__PURE__ */ h.jsx("p", { children: "Muse has a question before continuing." })
          ] })
        ] }),
        t.questions.map((p) => /* @__PURE__ */ h.jsxs("fieldset", { children: [
          /* @__PURE__ */ h.jsx("legend", { children: p.question }),
          /* @__PURE__ */ h.jsx("div", { className: "question-options", children: p.options.map((m) => {
            const g = a[p.id]?.selectedLabel === m.label || a[p.id]?.selectedLabels?.includes(m.label);
            return /* @__PURE__ */ h.jsxs(
              "label",
              {
                className: `question-option ${g ? "selected" : ""}`,
                children: [
                  /* @__PURE__ */ h.jsx(
                    "input",
                    {
                      type: p.selection.mode === "multiple" ? "checkbox" : "radio",
                      name: p.id,
                      checked: !!g,
                      onChange: () => o((b) => {
                        if (p.selection.mode === "single")
                          return {
                            ...b,
                            [p.id]: { questionId: p.id, selectedLabel: m.label }
                          };
                        const x = b[p.id]?.selectedLabels || [];
                        return {
                          ...b,
                          [p.id]: {
                            questionId: p.id,
                            selectedLabels: g ? x.filter((w) => w !== m.label) : [...x, m.label]
                          }
                        };
                      })
                    }
                  ),
                  /* @__PURE__ */ h.jsxs("span", { children: [
                    /* @__PURE__ */ h.jsx("strong", { children: m.label }),
                    m.description && /* @__PURE__ */ h.jsx("small", { children: m.description })
                  ] })
                ]
              },
              m.label
            );
          }) }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              className: "text-input",
              "aria-label": `Your answer: ${p.header}`,
              placeholder: "Or write your own answer…",
              maxLength: 500,
              value: a[p.id]?.freeText || "",
              onChange: (m) => o((g) => ({
                ...g,
                [p.id]: { questionId: p.id, freeText: m.target.value }
              }))
            }
          )
        ] }, p.id)),
        /* @__PURE__ */ h.jsxs("div", { className: "request-actions", children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "button secondary",
              disabled: s,
              onClick: () => {
                c(!0), window.muse.cancelQuestion(t.sessionId, t.userInputId).catch((p) => i(p.message)).finally(() => c(!1));
              },
              children: "Skip question"
            }
          ),
          /* @__PURE__ */ h.jsx("button", { type: "submit", className: "button primary", disabled: !f || s, children: s ? "Sending…" : "Continue" })
        ] })
      ]
    }
  );
}
function cO({
  view: t,
  onError: i
}) {
  const a = F.useRef(null), o = F.useRef(!0), [s, c] = F.useState(!1);
  F.useEffect(() => {
    o.current && a.current && (a.current.scrollTop = a.current.scrollHeight);
  }, [t]);
  const f = t.items.filter((m) => !m.retracted && !f1(m)), p = [];
  for (const m of f) {
    const g = !["userMessage", "agentMessage", "reasoning"].includes(m.kind) && m.status === "completed", b = p[p.length - 1];
    g && b?.type === "toolGroup" ? b.items.push(m) : g && b?.type === "single" && !["userMessage", "agentMessage", "reasoning"].includes(b.item.kind) && b.item.status === "completed" ? p[p.length - 1] = { type: "toolGroup", items: [b.item, m] } : p.push({ type: "single", item: m });
  }
  return /* @__PURE__ */ h.jsxs("div", { className: "transcript-wrap", children: [
    /* @__PURE__ */ h.jsx(
      "div",
      {
        className: "transcript-scroll",
        ref: a,
        onScroll: () => {
          const m = a.current;
          m && (o.current = m.scrollHeight - m.scrollTop - m.clientHeight < 110, c(!o.current));
        },
        children: /* @__PURE__ */ h.jsxs("div", { className: "transcript", role: "log", "aria-label": "Conversation", "aria-live": "off", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "conversation-beginning", children: [
            /* @__PURE__ */ h.jsx(go, { size: 23 }),
            /* @__PURE__ */ h.jsx("span", { children: "Conversation with Muse" })
          ] }),
          t.historyNotice && /* @__PURE__ */ h.jsx("div", { className: "inline-notice", children: t.historyNotice }),
          p.map((m) => m.type === "toolGroup" && m.items.length >= 3 ? /* @__PURE__ */ h.jsx(
            aO,
            {
              items: m.items,
              sessionId: t.session.sessionId,
              onError: i
            },
            m.items[0].itemId
          ) : (m.type === "toolGroup" ? m.items : [m.item]).map((b) => {
            if (b.kind === "userMessage") {
              const x = wE(b.displayText || b.text) || b.displayText || b.text || "";
              return /* @__PURE__ */ h.jsxs("article", { className: "message user-message", children: [
                /* @__PURE__ */ h.jsxs("div", { className: "message-heading", children: [
                  /* @__PURE__ */ h.jsx("span", { className: "avatar user-avatar", children: "Y" }),
                  /* @__PURE__ */ h.jsx("strong", { children: "You" }),
                  b.recordedAt && /* @__PURE__ */ h.jsx("time", { children: new Date(b.recordedAt).toLocaleTimeString(void 0, {
                    hour: "numeric",
                    minute: "2-digit"
                  }) }),
                  /* @__PURE__ */ h.jsx(cp, { text: x })
                ] }),
                /* @__PURE__ */ h.jsx("div", { className: "user-message-text", children: x })
              ] }, b.itemId);
            }
            return b.kind === "agentMessage" ? /* @__PURE__ */ h.jsxs("article", { className: "message agent-message", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "message-heading", children: [
                /* @__PURE__ */ h.jsx("span", { className: "avatar muse-avatar", children: /* @__PURE__ */ h.jsx(go, { size: 26 }) }),
                /* @__PURE__ */ h.jsx("strong", { children: "Muse" }),
                b.status === "inProgress" && /* @__PURE__ */ h.jsx("span", { className: "streaming-label", children: "Composing" }),
                /* @__PURE__ */ h.jsx(cp, { text: b.text || "" })
              ] }),
              /* @__PURE__ */ h.jsx(
                mw,
                {
                  text: b.text || (b.status === "inProgress" ? "…" : ""),
                  onError: i
                }
              )
            ] }, b.itemId) : b.kind === "reasoning" ? /* @__PURE__ */ h.jsx(lO, { item: b, onError: i }, b.itemId) : /* @__PURE__ */ h.jsx(
              gw,
              {
                item: b,
                sessionId: t.session.sessionId,
                onError: i
              },
              b.itemId
            );
          })),
          t.approvals.map((m) => /* @__PURE__ */ h.jsx(
            sO,
            {
              approval: m,
              onError: i
            },
            `${m.approvalId}:${m.currentRequirementId.sourceIndex}`
          )),
          t.questions.map((m) => /* @__PURE__ */ h.jsx(uO, { request: m, onError: i }, m.userInputId)),
          t.error && /* @__PURE__ */ h.jsxs("div", { className: "inline-error", role: "alert", children: [
            /* @__PURE__ */ h.jsx("strong", { children: "Muse couldn’t finish this turn." }),
            /* @__PURE__ */ h.jsx("p", { children: t.error }),
            /* @__PURE__ */ h.jsx("span", { children: "Your conversation is saved. You can send a follow-up or reconnect." })
          ] }),
          f.length === 0 && /* @__PURE__ */ h.jsxs("div", { className: "empty-conversation", children: [
            /* @__PURE__ */ h.jsx(go, { size: 48 }),
            /* @__PURE__ */ h.jsx("h2", { children: "Start a conversation" }),
            /* @__PURE__ */ h.jsx("p", { children: "Ask a question or describe what you want to build." })
          ] })
        ] })
      }
    ),
    s && /* @__PURE__ */ h.jsx(
      Wt,
      {
        className: "jump-button",
        label: "Jump to latest message",
        onClick: () => {
          o.current = !0, a.current?.scrollTo({ top: a.current.scrollHeight, behavior: "smooth" }), c(!1);
        },
        children: /* @__PURE__ */ h.jsx(SS, { size: 17 })
      }
    )
  ] });
}
function fO(t) {
  return t.directory ? /* @__PURE__ */ h.jsx(Tv, { size: 15, className: "file-icon folder" }) : /\.(ts|tsx|js|jsx|mjs|cjs|py|rs|go|rb|java|c|cpp|h|swift|css|scss|html|sh)$/i.test(t.name) ? /* @__PURE__ */ h.jsx(nl, { size: 15, className: "file-icon code" }) : /\.(md|mdx|txt|json|yaml|yml|toml|lock)$/i.test(t.name) ? /* @__PURE__ */ h.jsx(Sv, { size: 15, className: "file-icon doc" }) : /* @__PURE__ */ h.jsx(DS, { size: 15, className: "file-icon" });
}
function dO({
  projects: t,
  sessions: i,
  onOpen: a,
  onChoose: o
}) {
  const [s, c] = F.useState({});
  return F.useEffect(() => {
    let f = !1;
    return Promise.all(
      t.map(async (p) => {
        try {
          const m = await window.muse.gitStatus(p);
          return [p, m];
        } catch {
          return null;
        }
      })
    ).then((p) => {
      if (f) return;
      const m = {};
      for (const g of p)
        g && (m[g[0]] = g[1]);
      c(m);
    }), () => {
      f = !0;
    };
  }, [t]), /* @__PURE__ */ h.jsxs("section", { className: "workspace-page", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "page-heading", children: [
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("h1", { children: "Projects" }),
        /* @__PURE__ */ h.jsx("p", { children: "Open a recent project or choose a folder." })
      ] }),
      /* @__PURE__ */ h.jsxs("button", { className: "button primary", onClick: a, children: [
        /* @__PURE__ */ h.jsx(vo, { size: 15 }),
        "Open project"
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "project-grid", children: [
      t.map((f, p) => {
        const m = i.filter((x) => x.workspaceRoot === f), g = m.map((x) => x.lastActivityAt || x.updatedAt).sort().at(-1), b = s[f];
        return /* @__PURE__ */ h.jsxs("button", { className: "project-card", onClick: () => o(f), children: [
          /* @__PURE__ */ h.jsxs("div", { className: "project-card-top", children: [
            /* @__PURE__ */ h.jsx("span", { className: `project-card-icon hue-${p % 3}`, children: /* @__PURE__ */ h.jsx(kr, { size: 24, strokeWidth: 1.5 }) }),
            b?.isRepository && /* @__PURE__ */ h.jsxs("span", { className: "project-git-pills", children: [
              b.branch && /* @__PURE__ */ h.jsxs("span", { className: "project-git-pill", children: [
                /* @__PURE__ */ h.jsx(Av, { size: 11 }),
                b.branch
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: `project-git-pill ${b.changes.length ? "dirty" : "clean"}`, children: b.changes.length ? `${b.changes.length} changed` : "Clean" })
            ] })
          ] }),
          /* @__PURE__ */ h.jsx("h2", { children: Zi(f) }),
          /* @__PURE__ */ h.jsx("p", { children: f.replace(/^(?:\/Users\/[^/]+|\/home\/[^/]+|[A-Za-z]:\\Users\\[^\\]+)/, "~") }),
          /* @__PURE__ */ h.jsxs("footer", { children: [
            /* @__PURE__ */ h.jsxs("span", { children: [
              m.length,
              " conversation",
              m.length === 1 ? "" : "s",
              g ? ` · ${u0(g)}` : ""
            ] }),
            /* @__PURE__ */ h.jsx(wr, { size: 16 })
          ] })
        ] }, f);
      }),
      /* @__PURE__ */ h.jsxs("button", { className: "project-card add-project", onClick: a, children: [
        /* @__PURE__ */ h.jsx(vo, { size: 26, strokeWidth: 1.2 }),
        /* @__PURE__ */ h.jsx("h2", { children: "Open project" }),
        /* @__PURE__ */ h.jsx("p", { children: "Open a folder on your Mac." })
      ] })
    ] }),
    /* @__PURE__ */ h.jsx("p", { className: "page-footnote", children: "Projects stay right where they are. Muse works in the folders you choose." })
  ] });
}
function pO({
  project: t,
  onOpen: i,
  onMention: a
}) {
  const [o, s] = F.useState(""), [c, f] = F.useState([]), [p, m] = F.useState(""), [g, b] = F.useState(""), [x, w] = F.useState(""), [v, S] = F.useState(""), [E, j] = F.useState(!1);
  if (F.useEffect(() => {
    s(""), m(""), b(""), w("");
  }, [t]), F.useEffect(() => {
    if (!t) return;
    let G = !1;
    return j(!0), S(""), f([]), window.muse.listFiles(t, o).then((K) => {
      G || f(K);
    }).catch((K) => {
      G || S(K.message);
    }).finally(() => {
      G || j(!1);
    }), () => {
      G = !0;
    };
  }, [t, o]), F.useEffect(() => {
    if (!p) return;
    let G = !1;
    return b("Loading preview…"), window.muse.readFile(t, p).then((K) => {
      G || b(K);
    }).catch((K) => {
      G || b(K.message);
    }), () => {
      G = !0;
    };
  }, [t, p]), !t)
    return /* @__PURE__ */ h.jsxs("section", { className: "workspace-page page-empty", children: [
      /* @__PURE__ */ h.jsx(kr, { size: 36, strokeWidth: 1.2 }),
      /* @__PURE__ */ h.jsx("h1", { children: "Files" }),
      /* @__PURE__ */ h.jsx("p", { children: "Choose a project to explore its files and bring context into a conversation." }),
      /* @__PURE__ */ h.jsxs("button", { className: "button primary", onClick: i, children: [
        "Open project ",
        /* @__PURE__ */ h.jsx(wr, { size: 14 })
      ] })
    ] });
  const N = c.filter((G) => G.name.toLowerCase().includes(x.toLowerCase())).sort((G, K) => Number(K.directory) - Number(G.directory) || G.name.localeCompare(K.name)), U = o ? o.split("/").filter(Boolean) : [], R = p && g ? g.split(`
`).length : 0;
  return /* @__PURE__ */ h.jsxs("section", { className: "workspace-page files-page", children: [
    /* @__PURE__ */ h.jsx("div", { className: "page-heading", children: /* @__PURE__ */ h.jsxs("div", { children: [
      /* @__PURE__ */ h.jsx("h1", { children: "Files" }),
      /* @__PURE__ */ h.jsxs("div", { className: "files-breadcrumbs", "aria-label": "Folder path", children: [
        /* @__PURE__ */ h.jsxs(
          "button",
          {
            type: "button",
            className: `breadcrumb-segment ${o ? "" : "current"}`,
            onClick: () => {
              s(""), w("");
            },
            children: [
              /* @__PURE__ */ h.jsx(kr, { size: 13 }),
              /* @__PURE__ */ h.jsx("span", { children: Zi(t) })
            ]
          }
        ),
        /* @__PURE__ */ h.jsx(vi, { size: 12 }),
        U.length === 0 ? /* @__PURE__ */ h.jsx("span", { className: "breadcrumb-segment current", children: "Project root" }) : U.map((G, K) => {
          const A = U.slice(0, K + 1).join("/"), V = K === U.length - 1;
          return /* @__PURE__ */ h.jsxs("span", { className: "breadcrumb-part", children: [
            K > 0 && /* @__PURE__ */ h.jsx(vi, { size: 12 }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                className: `breadcrumb-segment ${V ? "current" : ""}`,
                onClick: () => {
                  s(A), w("");
                },
                children: G
              }
            )
          ] }, A);
        })
      ] })
    ] }) }),
    /* @__PURE__ */ h.jsxs("div", { className: "file-browser", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "file-browser-sidebar", children: [
        /* @__PURE__ */ h.jsx("div", { className: "file-search-bar", children: /* @__PURE__ */ h.jsxs("div", { className: "file-search", children: [
          /* @__PURE__ */ h.jsx(fu, { size: 14 }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              "aria-label": "Filter files",
              placeholder: "Find in this folder…",
              value: x,
              onChange: (G) => w(G.target.value)
            }
          ),
          x && /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "file-search-clear",
              "aria-label": "Clear filter",
              onClick: () => w(""),
              children: /* @__PURE__ */ h.jsx(Sr, { size: 13 })
            }
          )
        ] }) }),
        /* @__PURE__ */ h.jsxs("div", { className: "file-browser-list", children: [
          o && /* @__PURE__ */ h.jsxs(
            "button",
            {
              className: "file-row parent-folder",
              onClick: () => {
                s(o.split("/").slice(0, -1).join("/")), w("");
              },
              children: [
                /* @__PURE__ */ h.jsx(zS, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Parent folder" })
              ]
            }
          ),
          v && /* @__PURE__ */ h.jsx("p", { className: "inline-error", children: v }),
          E && /* @__PURE__ */ h.jsx("p", { className: "file-list-message", children: "Opening folder…" }),
          !E && N.map((G) => /* @__PURE__ */ h.jsxs(
            "button",
            {
              "aria-label": G.name,
              className: `file-row ${p === G.path ? "selected" : ""}`,
              onClick: () => {
                G.directory ? (s(G.path), w("")) : m(G.path);
              },
              children: [
                fO(G),
                /* @__PURE__ */ h.jsx("span", { children: G.name }),
                G.directory && /* @__PURE__ */ h.jsx(vi, { size: 13, className: "file-row-chevron" })
              ]
            },
            G.path
          )),
          !E && !v && !N.length && /* @__PURE__ */ h.jsx("p", { className: "file-list-message", children: x ? "No matching files." : "This folder is empty." })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "file-list-footnote", children: [
          /* @__PURE__ */ h.jsxs("span", { children: [
            c.length,
            " entries"
          ] }),
          /* @__PURE__ */ h.jsx("span", { children: "·" }),
          /* @__PURE__ */ h.jsx("span", { children: "build dependencies hidden" })
        ] })
      ] }),
      /* @__PURE__ */ h.jsx("div", { className: "file-preview", children: p ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsxs("header", { children: [
          /* @__PURE__ */ h.jsxs("div", { className: "file-preview-title", children: [
            /* @__PURE__ */ h.jsx(nl, { size: 15 }),
            /* @__PURE__ */ h.jsx("span", { children: p }),
            R > 0 && /* @__PURE__ */ h.jsxs("small", { children: [
              R,
              " lines"
            ] })
          ] }),
          /* @__PURE__ */ h.jsxs("button", { className: "file-ask-button text-button", onClick: () => a(p), children: [
            "Ask Muse ",
            /* @__PURE__ */ h.jsx(wr, { size: 12 })
          ] })
        ] }),
        /* @__PURE__ */ h.jsx("pre", { children: g })
      ] }) : /* @__PURE__ */ h.jsxs("div", { className: "file-preview-empty", children: [
        /* @__PURE__ */ h.jsx("span", { className: "file-empty-badge", children: /* @__PURE__ */ h.jsx(nl, { size: 24, strokeWidth: 1.4 }) }),
        /* @__PURE__ */ h.jsx("h3", { children: "File preview" }),
        /* @__PURE__ */ h.jsx("p", { children: "Select a file on the left to inspect its contents or reference it in chat." })
      ] }) })
    ] })
  ] });
}
const hO = [
  {
    title: "Voice input",
    detail: "Click the microphone or press Option–V to start and stop recording. Muse Code transcribes your speech into the draft for you to review before sending. Escape cancels. Recordings stop at two minutes, and temporary audio is removed after transcription. Microphone permission is requested the first time you use voice."
  },
  {
    title: "Your full CLI",
    detail: "Tools, skills, hooks, plugins, and permission policies run through your existing Muse Code installation. Background reminders and hooks appear in the Activity inspector. For interactive CLI commands, skill and plugin administration, worktree setup, or account settings, use Muse Code in the project inspector to open the full CLI in Terminal. Type / for desktop commands, including /clear, /voice, /model, /effort, /compact, /rename, and /stop. Unsupported commands stay out of model messages."
  },
  {
    title: "Your first conversation",
    detail: "Open a project folder, tell Muse what you want to accomplish, and press Return. Muse uses the same credentials, settings, and models as your CLI. Shift–Return adds a new line."
  },
  {
    title: "Bring your existing work",
    detail: "Your CLI conversations appear in the sidebar. Choose a project to filter them, or select All projects. Opening a conversation reads its saved history; sending a message resumes it. A session already running in another CLI window may need to finish there before Desktop can resume it."
  },
  {
    title: "Permissions and approvals",
    detail: "Muse keeps its configured sandbox and tool permissions. When it asks for approval, read the exact command or target and choose one of the options offered by your CLI. Some choices apply once; others apply to the session or save a policy rule. Desktop never chooses one for you."
  },
  {
    title: "Send follow-ups",
    detail: "Send a follow-up while Muse works. Queue next saves it for the next turn; Steer now guides the current turn. The stop button cancels the active turn. Choose reasoning effort and model in the message toolbar."
  },
  {
    title: "Add context",
    detail: "Attach images or text files using the paperclip. Select up to five files, 2 MB per file and 4 MB total; text files are limited to 200 KB. The Files tab can add a relative file reference to your message. Muse reads that project file using its own tools and permissions."
  },
  {
    title: "Customize your workspace",
    detail: "Choose Muse, Daylight, Moonlight, Grove, or Plush in Settings. Adjust background intensity and reading size, or follow your Mac’s light and dark appearance. Reduced motion honors both your app preference and your macOS accessibility settings."
  }
];
function mO({
  platform: t = "darwin",
  onError: i
}) {
  const [a, o] = F.useState({ 0: !0 }), s = t === "darwin" ? "⌘" : "Ctrl", c = t === "darwin" ? "⌥" : "Alt";
  return /* @__PURE__ */ h.jsx("section", { className: "workspace-page docs-page", children: /* @__PURE__ */ h.jsxs("div", { className: "docs-container", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "page-heading", children: [
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("h1", { children: "Getting started" }),
        /* @__PURE__ */ h.jsx("p", { children: "Learn the basics and keyboard shortcuts." })
      ] }),
      /* @__PURE__ */ h.jsx(av, { size: 32, strokeWidth: 1.2 })
    ] }),
    /* @__PURE__ */ h.jsx("div", { className: "guides", children: hO.map((f, p) => {
      const m = !!a[p];
      return /* @__PURE__ */ h.jsxs("div", { className: `guide-item ${m ? "open" : ""}`, children: [
        /* @__PURE__ */ h.jsxs(
          "button",
          {
            type: "button",
            className: "guide-summary",
            "aria-expanded": m,
            onClick: () => o((g) => ({
              ...g,
              [p]: !g[p]
            })),
            children: [
              /* @__PURE__ */ h.jsxs("span", { className: "guide-number", children: [
                "0",
                p + 1
              ] }),
              /* @__PURE__ */ h.jsx("span", { children: f.title }),
              /* @__PURE__ */ h.jsx(vi, { size: 15, className: "guide-chevron" })
            ]
          }
        ),
        /* @__PURE__ */ h.jsx("div", { className: `guide-collapse ${m ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "guide-collapse-inner", children: /* @__PURE__ */ h.jsx("p", { children: f.detail }) }) })
      ] }, f.title);
    }) }),
    /* @__PURE__ */ h.jsxs("div", { className: "shortcuts-guide", children: [
      /* @__PURE__ */ h.jsx("h2", { children: "Keyboard shortcuts" }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { children: "Start or stop voice input" }),
        /* @__PURE__ */ h.jsxs("kbd", { children: [
          c,
          " V"
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { children: "Cancel voice input" }),
        /* @__PURE__ */ h.jsx("kbd", { children: "Esc" })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { children: "New conversation" }),
        /* @__PURE__ */ h.jsxs("kbd", { children: [
          s,
          " N"
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { children: "Open project" }),
        /* @__PURE__ */ h.jsxs("kbd", { children: [
          s,
          " O"
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { children: "Search & commands" }),
        /* @__PURE__ */ h.jsxs("kbd", { children: [
          s,
          " K"
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { children: "Settings" }),
        /* @__PURE__ */ h.jsxs("kbd", { children: [
          s,
          " ,"
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { children: "Toggle sidebar" }),
        /* @__PURE__ */ h.jsxs("kbd", { children: [
          s,
          " B"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        className: "button secondary",
        onClick: () => {
          window.muse.openExternal("https://dev.meta.ai/docs/muse-code").catch((f) => i(f.message));
        },
        children: [
          "Muse Code documentation ",
          /* @__PURE__ */ h.jsx(wr, { size: 14 })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("p", { className: "page-footnote", children: "Muse Desktop is an independent community app. Your CLI remains the home of your account and conversations." })
  ] }) });
}
const gO = [
  {
    icon: YS,
    title: "Plan a feature",
    description: "Turn an idea into an approach",
    prompt: "I have an idea I’d like to build. First, help me think through the approach. "
  },
  {
    icon: hv,
    title: "Explore the project",
    description: "Understand the code and architecture",
    prompt: "Explore this project and give me a clear tour of its architecture, key files, and how to run it. Do not make changes yet."
  },
  {
    icon: Dv,
    title: "Review the code",
    description: "Find bugs and improvements",
    prompt: "Review this project for bugs, rough edges, and opportunities to simplify. Explain the most useful improvements before making changes."
  }
];
function bO(t, i) {
  if (i.includes(t.sessionId)) return "Pinned";
  const a = new Date(t.lastActivityAt || t.updatedAt), o = /* @__PURE__ */ new Date();
  if (o.setHours(0, 0, 0, 0), a >= o) return "Today";
  const s = new Date(o);
  if (s.setDate(o.getDate() - 1), a >= s) return "Yesterday";
  const c = new Date(o);
  return c.setDate(o.getDate() - 7), a >= c ? "Previous 7 days" : "Earlier";
}
function xO() {
  const [t, i] = F.useState(() => vE.parse({})), [a, o] = F.useState({ state: "connecting" }), [s, c] = F.useState("0.2.0"), [f, p] = F.useState("darwin"), [m, g] = F.useState([]), [b, x] = F.useState(null), [w, v] = F.useState(!0), [S, E] = F.useState(""), [j, N] = F.useState(""), [U, R] = F.useState(null), [G, K] = F.useState([]), [A, V] = F.useState(""), [ie, ze] = F.useState({}), [I, te] = F.useState(!1), [re, Ae] = F.useState(!1), [pe, ee] = F.useState(!0), [W, ce] = F.useState(!1), [me, Te] = F.useState(!1), [z, qe] = F.useState("chat"), [ut, T] = F.useState(!1), [C, J] = F.useState(!1), [le, Z] = F.useState(!0), [se, Se] = F.useState(!0), [Ee, fe] = F.useState({}), [_e, It] = F.useState(!1), [Si, On] = F.useState(""), [ht, ot] = F.useState(null), [Xe, fn] = F.useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ), Kt = F.useRef(null), mt = F.useRef(0), Mn = F.useRef(0), zi = F.useRef(!1), Dn = F.useRef(() => {
  }), _i = F.useRef(void 0), Rn = t.theme === "system" ? Xe ? "moonlight" : "daylight" : t.theme, Y = f === "darwin" ? "⌘" : "Ctrl", ae = f === "darwin" ? "⌥" : "Alt+", ge = U?.session.sessionId || `new:${j}`, Oe = ie[ge] || "", zt = U?.session.status === "running", Ne = F.useCallback((q) => ot({ message: q, kind: "error" }), []), yt = (q) => ot({ message: q, kind: "success" }), _t = F.useCallback(async () => {
    const q = ++Mn.current;
    zi.current || v(!0), E("");
    try {
      const he = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Set();
      let xe;
      do {
        const vt = await window.muse.listSessions(xe);
        if (q !== Mn.current) return;
        for (const st of vt.sessions) he.set(st.sessionId, st);
        if (g([...he.values()]), x(vt.nextCursor), xe = vt.nextCursor || void 0, xe && ye.has(xe))
          throw new Error("Muse returned a repeated history cursor. Reconnect to refresh history.");
        xe && ye.add(xe);
      } while (xe);
      zi.current = !0;
    } catch (he) {
      q === Mn.current && E(he instanceof Error ? he.message : String(he));
    } finally {
      q === Mn.current && v(!1);
    }
  }, []), Pt = F.useCallback(
    (q) => {
      window.muse.savePreferences(q).then(i).catch((he) => Ne(he.message));
    },
    [Ne]
  );
  F.useEffect(() => {
    const q = window.matchMedia("(prefers-color-scheme: dark)"), he = () => fn(q.matches);
    return q.addEventListener("change", he), () => q.removeEventListener("change", he);
  }, []), F.useEffect(() => {
    museMountRoot.dataset.theme = Rn, museMountRoot.dataset.textSize = t.fontSize, museMountRoot.dataset.reduceMotion = String(t.reduceMotion);
  }, [Rn, t.fontSize, t.reduceMotion]), F.useEffect(() => {
    if (!ht || ht.kind === "error") return;
    const q = setTimeout(() => ot(null), 4e3);
    return () => clearTimeout(q);
  }, [ht]), F.useEffect(() => {
    const q = (ye) => {
      ye.type === "connection" && o(ye.status), ye.type === "preferences" && i(ye.preferences), ye.type === "error" && Ne(ye.message), ye.type === "menu" && Dn.current(ye.action), ye.type === "session" && (ye.view.session.sessionId === Kt.current && R(ye.view), g(
        (xe) => xe.map(
          (vt) => vt.sessionId === ye.view.session.sessionId ? ye.view.session : vt
        )
      )), ye.type === "sessions-changed" && (clearTimeout(_i.current), _i.current = setTimeout(() => {
        _t();
      }, 250));
    }, he = window.muse.onEvent(q);
    return window.muse.bootstrap().then((ye) => {
      i(ye.preferences), o(ye.status), c(ye.version), p(ye.platform || "darwin"), N(ye.preferences.recentProjects[0] || "");
    }).catch((ye) => Ne(ye.message)), () => {
      he(), clearTimeout(_i.current), Mn.current++;
    };
  }, [_t, Ne]), F.useEffect(() => {
    a.state === "ready" && (_t(), window.muse.models().then((q) => {
      K(q), V((he) => he || q.find((ye) => ye.isDefault)?.modelId || "");
    }).catch((q) => Ne(q.message)));
  }, [a.state, _t, Ne]);
  const jt = () => {
    qe("chat"), mt.current++, Kt.current = null, R(null), Ae(!1), J(!1);
  }, nn = async () => {
    try {
      const q = await window.muse.chooseProject();
      q && (N(q), jt());
    } catch (q) {
      Ne(q instanceof Error ? q.message : String(q));
    }
  }, Yi = async (q) => {
    if (qe("chat"), Kt.current === q && U?.session.sessionId === q) return;
    const he = ++mt.current;
    !U && Ae(!0), Kt.current = q;
    try {
      const xe = await window.muse.openSession(q);
      if (mt.current !== he) return;
      R(xe), N(xe.session.workspaceRoot || ""), V(xe.session.modelId || "");
    } catch (xe) {
      mt.current === he && (Ne(xe instanceof Error ? xe.message : String(xe)), Kt.current = U?.session.sessionId || null);
    } finally {
      mt.current === he && Ae(!1);
    }
  }, Et = () => {
    window.muse.connect().then((q) => {
      if (o(q), q.state === "ready") {
        const he = Kt.current;
        he && Yi(he);
      }
    }).catch((q) => Ne(q.message));
  };
  Dn.current = (q) => {
    q === "new" && jt(), q === "open" && nn(), q === "search" && T(!0), q === "settings" && Te("appearance"), q === "sidebar" && ee((he) => !he);
  }, F.useEffect(() => {
    if (f === "darwin") return;
    const q = (he) => {
      if (!(he.ctrlKey || he.metaKey) || he.altKey || he.shiftKey) return;
      const ye = he.key.toLowerCase(), vt = {
        n: "new",
        o: "open",
        k: "search",
        ",": "settings",
        b: "sidebar"
      }[ye];
      vt && (he.preventDefault(), Dn.current(vt));
    };
    return window.addEventListener("keydown", q), () => window.removeEventListener("keydown", q);
  }, [f]);
  const Ht = async (q, he) => {
    te(!0);
    const ye = Oe, xe = ge, vt = mt.current;
    try {
      const st = d1(ye);
      if (st) {
        if (!Zd.some((Zt) => Zt.name === st.name))
          throw new Error(
            `/${st.name} is not handled by Desktop. Use /help, or open Muse Code in the project inspector for CLI commands.`
          );
        if (q.length)
          throw new Error("Send attachments with a message, or remove them before using a command.");
        const { name: Ye, argument: gt } = st;
        if ((Ye === "clear" || Ye === "new") && jt(), Ye === "help" && qe("docs"), Ye === "settings" && Te("appearance"), Ye === "voice")
          if (gt === "status")
            yt(
              `Use ${ae}V to start or stop recording. Muse Code transcribes speech into your draft.`
            );
          else if (gt === "cancel") window.dispatchEvent(new Event("muse:voice-cancel"));
          else if (!gt) window.dispatchEvent(new Event("muse:voice"));
          else
            throw new Error(
              "Use /voice to record, /voice cancel to discard, or /voice status for help."
            );
        if (Ye === "model")
          if (!gt) window.dispatchEvent(new CustomEvent("muse:select", { detail: "Model" }));
          else {
            if (!G.some((Zt) => Zt.modelId === gt))
              throw new Error("Choose one of the models available in the Model menu.");
            U && await window.muse.setModel(U.session.sessionId, gt), V(gt);
          }
        if (Ye === "effort")
          if (!gt)
            window.dispatchEvent(new CustomEvent("muse:select", { detail: "Reasoning effort" }));
          else {
            const Zt = o0.safeParse(gt.toLowerCase());
            if (!Zt.success)
              throw new Error("Choose none, minimal, low, medium, high, xhigh, max, or ultra.");
            i(await window.muse.savePreferences({ reasoningEffort: Zt.data }));
          }
        if (["compact", "rename", "stop"].includes(Ye)) {
          if (!U) throw new Error("Open a conversation before using this command.");
          if (Ye === "compact") {
            const Zt = await window.muse.compact(U.session.sessionId);
            yt(
              Zt.status === "noop" ? "There is no conversation history to compact yet." : "Muse is compacting this conversation."
            );
          }
          Ye === "stop" && await window.muse.cancel(U.session.sessionId), Ye === "rename" && (gt ? await window.muse.renameSession(U.session.sessionId, gt) : (On(ea(U.session)), It(!0)));
        }
        return ze((Zt) => ({ ...Zt, [xe]: "" })), !0;
      }
      let Kn = U;
      if (!Kn) {
        let Ye = j;
        if (!Ye) {
          if (Ye = await window.muse.chooseProject() || "", !Ye) return !1;
          N(Ye);
        }
        Kn = await window.muse.createSession(Ye, A || void 0), mt.current === vt && (Kt.current = Kn.session.sessionId);
      }
      const ca = Kn.session.sessionId, Mu = {
        itemId: `optimistic-${Date.now()}`,
        kind: "userMessage",
        revision: 0,
        status: "completed",
        text: ye,
        displayText: ye,
        recordedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      return mt.current === vt && R((Ye) => {
        const gt = Ye?.session.sessionId === ca ? Ye : Kn, Zt = gt.items.some(
          (Pn) => Pn.kind === "userMessage" && (Pn.text === ye || Pn.displayText === ye)
        );
        return {
          ...gt,
          session: { ...gt.session, status: "running" },
          items: Zt ? gt.items : [...gt.items, Mu]
        };
      }), ze((Ye) => ({
        ...Ye,
        [xe]: Ye[xe] === ye ? "" : Ye[xe] || "",
        [ca]: Ye[ca] === ye ? "" : Ye[ca] || ""
      })), await window.muse.send({
        sessionId: Kn.session.sessionId,
        text: ye,
        attachments: q.map((Ye) => Ye.id),
        effort: t.reasoningEffort,
        mode: he
      }), !0;
    } catch (st) {
      return ze((Kn) => ({ ...Kn, [xe]: Kn[xe] || ye })), Ne(st instanceof Error ? st.message : String(st)), !1;
    } finally {
      te(!1);
    }
  }, Qn = (q) => {
    if (!U) {
      V(q);
      return;
    }
    const he = mt.current;
    window.muse.setModel(U.session.sessionId, q).then(() => {
      mt.current === he && V(q);
    }).catch((ye) => Ne(ye.message));
  }, rn = (q) => Pt({
    pinnedSessionIds: t.pinnedSessionIds.includes(q) ? t.pinnedSessionIds.filter((he) => he !== q) : [...t.pinnedSessionIds, q]
  }), ua = (q) => {
    Pt({
      archivedSessionIds: t.archivedSessionIds.includes(q) ? t.archivedSessionIds.filter((he) => he !== q) : [...t.archivedSessionIds, q]
    }), q === U?.session.sessionId && jt();
  }, cl = m.filter(
    (q) => (!j || q.workspaceRoot === j) && !["subagent", "reminder"].includes(q.kind || "") && t.archivedSessionIds.includes(q.sessionId) === C
  ).sort(
    (q, he) => Number(t.pinnedSessionIds.includes(he.sessionId)) - Number(t.pinnedSessionIds.includes(q.sessionId)) || (he.lastActivityAt || he.updatedAt).localeCompare(q.lastActivityAt || q.updatedAt)
  ), Cr = [];
  for (const q of cl) {
    const he = bO(q, t.pinnedSessionIds), ye = Cr[Cr.length - 1];
    ye && ye.group === he ? ye.entries.push(q) : Cr.push({ group: he, entries: [q] });
  }
  return /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: `app-shell ${pe ? "" : "sidebar-hidden"} ${W ? "with-inspector" : ""}`,
      style: { "--background-presence": t.backgroundIntensity / 100 },
      children: [
        f !== "darwin" && /* @__PURE__ */ h.jsxs("div", { className: "window-traffic-lights", role: "group", "aria-label": "Window controls", children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "traffic-light close",
              "aria-label": "Close window",
              title: "Close",
              onClick: () => {
                window.muse.windowAction("close");
              }
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "traffic-light minimize",
              "aria-label": "Minimize window",
              title: "Minimize",
              onClick: () => {
                window.muse.windowAction("minimize");
              }
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "traffic-light maximize",
              "aria-label": "Maximize window",
              title: "Maximize",
              onClick: () => {
                window.muse.windowAction("maximize");
              }
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs(
          "aside",
          {
            "aria-hidden": !pe || void 0,
            inert: pe ? void 0 : !0,
            className: `sidebar ${cl.length ? "has-conversations" : ""}`,
            children: [
              /* @__PURE__ */ h.jsx("div", { className: "sidebar-titlebar", children: /* @__PURE__ */ h.jsx(Wt, { label: "Hide sidebar", onClick: () => ee(!1), children: /* @__PURE__ */ h.jsx(HS, { size: 17 }) }) }),
              /* @__PURE__ */ h.jsxs("button", { className: "brand", onClick: jt, "aria-label": "Muse home", children: [
                /* @__PURE__ */ h.jsx(go, { size: 37 }),
                /* @__PURE__ */ h.jsx("span", { children: "Muse" }),
                /* @__PURE__ */ h.jsx(
                  "span",
                  {
                    className: "desktop-tag",
                    "data-tooltip": "Community desktop app for Muse Code · Not affiliated with Meta",
                    children: "Unofficial"
                  }
                )
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: "sidebar-search", children: /* @__PURE__ */ h.jsxs("button", { className: "search-button", onClick: () => T(!0), children: [
                /* @__PURE__ */ h.jsx("span", { className: "sidebar-item-icon", children: /* @__PURE__ */ h.jsx(fu, { size: 15 }) }),
                /* @__PURE__ */ h.jsx("span", { children: "Search conversations" }),
                /* @__PURE__ */ h.jsxs("kbd", { children: [
                  Y,
                  " K"
                ] })
              ] }) }),
              /* @__PURE__ */ h.jsxs("nav", { className: "main-nav", "aria-label": "Main navigation", children: [
                [
                  { id: "chat", icon: lu, label: "Chat" },
                  { id: "projects", icon: hv, label: "Projects" },
                  { id: "files", icon: RS, label: "Files" },
                  { id: "docs", icon: av, label: "Docs" }
                ].map((q) => /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    "aria-label": q.label,
                    title: q.label,
                    className: z === q.id ? "selected" : "",
                    onClick: () => qe(q.id),
                    children: [
                      /* @__PURE__ */ h.jsx(q.icon, { size: 19, strokeWidth: 1.7 }),
                      /* @__PURE__ */ h.jsx("span", { children: q.label }),
                      z === q.id && /* @__PURE__ */ h.jsx("span", { className: "nav-active-dot" })
                    ]
                  },
                  q.id
                )),
                /* @__PURE__ */ h.jsxs("button", { "aria-label": "Settings", title: "Settings", onClick: () => Te("appearance"), children: [
                  /* @__PURE__ */ h.jsx(e1, { size: 19, strokeWidth: 1.7 }),
                  /* @__PURE__ */ h.jsx("span", { children: "Settings" })
                ] })
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: "sidebar-primary", children: /* @__PURE__ */ h.jsxs("button", { className: "new-button", onClick: jt, children: [
                /* @__PURE__ */ h.jsx("span", { className: "sidebar-item-icon", children: /* @__PURE__ */ h.jsx(vo, { size: 15 }) }),
                /* @__PURE__ */ h.jsx("span", { children: "New conversation" }),
                /* @__PURE__ */ h.jsxs("kbd", { children: [
                  Y,
                  " N"
                ] })
              ] }) }),
              /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section-label", children: [
                /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "section-toggle",
                    "aria-expanded": le,
                    onClick: () => Z((q) => !q),
                    children: [
                      /* @__PURE__ */ h.jsx("span", { children: "PROJECTS" }),
                      /* @__PURE__ */ h.jsx(
                        co,
                        {
                          size: 12,
                          className: `section-chevron ${le ? "" : "collapsed"}`
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ h.jsx(
                  Wt,
                  {
                    label: "Open a project",
                    onClick: () => {
                      nn();
                    },
                    children: /* @__PURE__ */ h.jsx(vo, { size: 14 })
                  }
                )
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${le ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsx("div", { className: "project-switcher", children: /* @__PURE__ */ h.jsx(
                ou,
                {
                  label: "Current project",
                  value: j,
                  icon: /* @__PURE__ */ h.jsx("span", { className: "sidebar-item-icon", children: /* @__PURE__ */ h.jsx(kr, { size: 15 }) }),
                  onChange: (q) => {
                    if (q === "__open") {
                      nn();
                      return;
                    }
                    N(q), jt();
                  },
                  options: [
                    { value: "", label: "All projects" },
                    ...t.recentProjects.map((q) => ({
                      value: q,
                      label: Zi(q)
                    })),
                    ...j && !t.recentProjects.includes(j) ? [{ value: j, label: Zi(j) }] : [],
                    { value: "__open", label: "Open another project…" }
                  ]
                }
              ) }) }) }),
              /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section-label conversations-label", children: [
                /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "section-toggle",
                    "aria-expanded": se,
                    onClick: () => Se((q) => !q),
                    children: [
                      /* @__PURE__ */ h.jsx("span", { children: C ? "ARCHIVED" : "CONVERSATIONS" }),
                      /* @__PURE__ */ h.jsx(
                        co,
                        {
                          size: 12,
                          className: `section-chevron ${se ? "" : "collapsed"}`
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ h.jsx(
                  Wt,
                  {
                    label: C ? "Show conversations" : "Show archived conversations",
                    active: C,
                    onClick: () => J((q) => !q),
                    children: /* @__PURE__ */ h.jsx(Sx, { size: 13 })
                  }
                )
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: `conversation-list ${se ? "" : "is-collapsed"}`, children: /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${se ? "open" : ""}`, children: /* @__PURE__ */ h.jsxs("div", { className: "sidebar-collapse-inner", children: [
                S && /* @__PURE__ */ h.jsxs("div", { className: "history-error", children: [
                  /* @__PURE__ */ h.jsx("p", { children: "Could not load your conversation history." }),
                  /* @__PURE__ */ h.jsx("p", { children: S }),
                  /* @__PURE__ */ h.jsx(
                    "button",
                    {
                      className: "text-button",
                      onClick: () => {
                        _t();
                      },
                      children: "Try again"
                    }
                  )
                ] }),
                Cr.map(({ group: q, entries: he }) => {
                  const ye = !!Ee[q];
                  return /* @__PURE__ */ h.jsxs("div", { className: "conversation-group", children: [
                    /* @__PURE__ */ h.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "conversation-group-label",
                        "aria-expanded": !ye,
                        onClick: () => fe((xe) => ({
                          ...xe,
                          [q]: !xe[q]
                        })),
                        children: [
                          /* @__PURE__ */ h.jsx("span", { children: q }),
                          /* @__PURE__ */ h.jsx(
                            co,
                            {
                              size: 12,
                              className: `section-chevron ${ye ? "collapsed" : ""}`
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${ye ? "" : "open"}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: he.map((xe) => /* @__PURE__ */ h.jsxs(
                      "div",
                      {
                        className: `conversation-row ${xe.sessionId === U?.session.sessionId ? "selected" : ""}`,
                        children: [
                          /* @__PURE__ */ h.jsxs(
                            "button",
                            {
                              className: "conversation-link",
                              title: ea(xe),
                              onClick: () => {
                                Yi(xe.sessionId);
                              },
                              children: [
                                /* @__PURE__ */ h.jsx(
                                  "span",
                                  {
                                    className: `conversation-indicator sidebar-item-icon ${xe.status === "running" ? "running" : ""}`,
                                    children: t.pinnedSessionIds.includes(xe.sessionId) ? /* @__PURE__ */ h.jsx(_x, { size: 13 }) : xe.status === "running" ? /* @__PURE__ */ h.jsx("span", { className: "working-dot" }) : /* @__PURE__ */ h.jsx(lu, { size: 14 })
                                  }
                                ),
                                /* @__PURE__ */ h.jsxs("span", { className: "conversation-copy", children: [
                                  /* @__PURE__ */ h.jsx("span", { className: "conversation-title", children: ea(xe) }),
                                  !j && xe.workspaceRoot && /* @__PURE__ */ h.jsx("span", { className: "conversation-project", children: Zi(xe.workspaceRoot) })
                                ] }),
                                /* @__PURE__ */ h.jsx("time", { children: u0(xe.lastActivityAt || xe.updatedAt) })
                              ]
                            }
                          ),
                          /* @__PURE__ */ h.jsx(
                            "button",
                            {
                              className: "row-pin",
                              title: t.pinnedSessionIds.includes(xe.sessionId) ? "Unpin conversation" : "Pin conversation",
                              "aria-label": `${t.pinnedSessionIds.includes(xe.sessionId) ? "Unpin" : "Pin"} ${ea(xe)}`,
                              onClick: () => rn(xe.sessionId),
                              children: /* @__PURE__ */ h.jsx(_x, { size: 12 })
                            }
                          )
                        ]
                      },
                      xe.sessionId
                    )) }) })
                  ] }, q);
                }),
                w && a.state === "ready" && /* @__PURE__ */ h.jsxs("div", { className: "history-status", children: [
                  /* @__PURE__ */ h.jsx(ra, { size: 14, className: "spin" }),
                  /* @__PURE__ */ h.jsx("span", { children: "Loading Muse history…" })
                ] }),
                !cl.length && !w && !S && a.state === "ready" && /* @__PURE__ */ h.jsxs("div", { className: "sidebar-empty", children: [
                  /* @__PURE__ */ h.jsx(lu, { size: 19, strokeWidth: 1.3 }),
                  /* @__PURE__ */ h.jsx("p", { children: C ? "No archived conversations" : "No conversations yet" }),
                  /* @__PURE__ */ h.jsx("span", { children: C ? "Archived conversations appear here." : "Start a conversation in this project." })
                ] }),
                b && !w && /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    className: "load-more",
                    onClick: () => {
                      window.muse.listSessions(b).then((q) => {
                        g((he) => [
                          ...he,
                          ...q.sessions.filter(
                            (ye) => !he.some((xe) => xe.sessionId === ye.sessionId)
                          )
                        ]), x(q.nextCursor);
                      }).catch((q) => Ne(q.message));
                    },
                    children: "Load earlier conversations"
                  }
                )
              ] }) }) }),
              /* @__PURE__ */ h.jsxs("div", { className: "sidebar-companion", children: [
                /* @__PURE__ */ h.jsx("img", { src: "./mascot-wave.png", alt: "Muse mascot waving hello" }),
                /* @__PURE__ */ h.jsx("span", { children: "Good to see you!" }),
                /* @__PURE__ */ h.jsx("svg", { viewBox: "0 0 64 8", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M3 4c9-6 18 6 29 0s17 2 28-1" }) })
              ] }),
              /* @__PURE__ */ h.jsxs("div", { className: "sidebar-bottom", children: [
                /* @__PURE__ */ h.jsx("div", { className: "theme-mini-switch", role: "group", "aria-label": "Appearance", children: f0.map((q) => /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    title: q.label,
                    "aria-label": `${q.label} theme`,
                    "aria-pressed": Rn === q.id,
                    className: Rn === q.id ? "selected" : "",
                    onClick: () => Pt({ theme: q.id }),
                    children: [
                      /* @__PURE__ */ h.jsx(q.icon, { size: 14 }),
                      /* @__PURE__ */ h.jsx("span", { className: "theme-mini-label", children: /* @__PURE__ */ h.jsx("span", { children: q.label }) })
                    ]
                  },
                  q.id
                )) }),
                /* @__PURE__ */ h.jsxs("button", { className: "connection-status", onClick: () => Te("connection"), children: [
                  /* @__PURE__ */ h.jsx("span", { className: `status-dot ${a.state}` }),
                  /* @__PURE__ */ h.jsx("span", { children: a.state === "ready" ? "Connected to Muse Code" : a.state === "connecting" ? "Connecting to Muse…" : "Muse Code disconnected" }),
                  /* @__PURE__ */ h.jsx(wr, { size: 11 })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs("main", { className: "main-workspace", children: [
          z === "chat" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            /* @__PURE__ */ h.jsx("div", { className: `welcome-art theme-${Rn}`, "aria-hidden": "true" }),
            /* @__PURE__ */ h.jsx("div", { className: "chat-brand-background", "aria-hidden": "true" })
          ] }),
          /* @__PURE__ */ h.jsxs("header", { className: `workspace-titlebar ${pe ? "" : "with-traffic-lights"}`, children: [
            /* @__PURE__ */ h.jsxs("div", { className: "workspace-breadcrumb", children: [
              !pe && /* @__PURE__ */ h.jsx(Wt, { label: "Show sidebar", onClick: () => ee(!0), children: /* @__PURE__ */ h.jsx(ZS, { size: 17 }) }),
              /* @__PURE__ */ h.jsx("span", { className: "breadcrumb-project", children: j ? Zi(j) : "Muse Desktop" }),
              /* @__PURE__ */ h.jsx(vi, { size: 12 }),
              /* @__PURE__ */ h.jsx("span", { className: "breadcrumb-title", children: z !== "chat" ? z[0].toUpperCase() + z.slice(1) : U ? ea(U.session) : "New conversation" })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "window-tools", children: [
              /* @__PURE__ */ h.jsx(Wt, { label: "New conversation", onClick: jt, children: /* @__PURE__ */ h.jsx(GS, { size: 17 }) }),
              /* @__PURE__ */ h.jsx(Wt, { label: "Search conversations and commands", onClick: () => T(!0), children: /* @__PURE__ */ h.jsx(fu, { size: 17 }) }),
              U && /* @__PURE__ */ h.jsxs("details", { className: "conversation-menu", children: [
                /* @__PURE__ */ h.jsx("summary", { "aria-label": "Conversation actions", children: /* @__PURE__ */ h.jsx(MS, { size: 19 }) }),
                /* @__PURE__ */ h.jsxs("div", { className: "popover", children: [
                  /* @__PURE__ */ h.jsx(
                    "button",
                    {
                      onClick: () => {
                        On(ea(U.session)), It(!0);
                      },
                      children: "Rename conversation"
                    }
                  ),
                  /* @__PURE__ */ h.jsx("button", { onClick: () => rn(U.session.sessionId), children: t.pinnedSessionIds.includes(U.session.sessionId) ? "Unpin conversation" : "Pin conversation" }),
                  /* @__PURE__ */ h.jsxs(
                    "button",
                    {
                      onClick: () => {
                        window.muse.exportSession(U.session.sessionId).then((q) => {
                          q && yt("Conversation exported to Markdown.");
                        }).catch((q) => Ne(q.message));
                      },
                      children: [
                        /* @__PURE__ */ h.jsx(OS, { size: 13 }),
                        "Export as Markdown"
                      ]
                    }
                  ),
                  /* @__PURE__ */ h.jsxs("button", { onClick: () => ua(U.session.sessionId), children: [
                    /* @__PURE__ */ h.jsx(Sx, { size: 13 }),
                    C ? "Restore conversation" : "Archive in Desktop"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ h.jsx(
                Wt,
                {
                  label: "Toggle project inspector",
                  active: W,
                  onClick: () => ce((q) => !q),
                  children: /* @__PURE__ */ h.jsx($S, { size: 17 })
                }
              )
            ] })
          ] }),
          a.state !== "ready" && a.state !== "connecting" && /* @__PURE__ */ h.jsxs("div", { className: "connection-banner", children: [
            /* @__PURE__ */ h.jsx(zx, { size: 16 }),
            /* @__PURE__ */ h.jsx("span", { children: a.message || "Connect Muse Code to get started." }),
            /* @__PURE__ */ h.jsx("button", { onClick: Et, children: "Reconnect" }),
            /* @__PURE__ */ h.jsxs("button", { onClick: () => Te("connection"), children: [
              "Set up ",
              /* @__PURE__ */ h.jsx(_S, { size: 12 })
            ] })
          ] }),
          z === "projects" && /* @__PURE__ */ h.jsx(
            dO,
            {
              projects: t.recentProjects,
              sessions: m,
              onOpen: () => {
                nn();
              },
              onChoose: (q) => {
                N(q), jt();
              }
            }
          ),
          z === "files" && /* @__PURE__ */ h.jsx(
            pO,
            {
              project: j,
              onOpen: () => {
                nn();
              },
              onMention: (q) => {
                qe("chat"), ze((he) => ({
                  ...he,
                  [ge]: `${he[ge] || ""}${he[ge] ? `
` : ""}Please look at the project file: ${JSON.stringify(q)}
`
                }));
              }
            }
          ),
          z === "docs" && /* @__PURE__ */ h.jsx(mO, { platform: f, onError: Ne }),
          z === "chat" && /* @__PURE__ */ h.jsxs("div", { className: "workspace-body", children: [
            re ? /* @__PURE__ */ h.jsxs("div", { className: "loading-conversation", children: [
              /* @__PURE__ */ h.jsx(ra, { className: "spin", size: 23 }),
              /* @__PURE__ */ h.jsx("p", { children: "Loading conversation…" })
            ] }) : U ? /* @__PURE__ */ h.jsx(cO, { view: U, onError: Ne }, U.session.sessionId) : /* @__PURE__ */ h.jsxs("div", { className: "welcome", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "welcome-content", children: [
                /* @__PURE__ */ h.jsxs("div", { className: "welcome-kicker", children: [
                  /* @__PURE__ */ h.jsx("span", { className: "tiny-spark", children: "✳" }),
                  f === "win32" ? "MUSE CODE, ON WINDOWS" : f === "linux" ? "MUSE CODE, ON LINUX" : "MUSE CODE, ON YOUR MAC"
                ] }),
                /* @__PURE__ */ h.jsxs("h1", { children: [
                  "Good things start",
                  /* @__PURE__ */ h.jsx("br", {}),
                  "with a little ",
                  /* @__PURE__ */ h.jsx("em", { children: "Muse." })
                ] }),
                /* @__PURE__ */ h.jsx("p", { className: "welcome-subtitle", children: "Build, explore, and improve your project with Muse." }),
                /* @__PURE__ */ h.jsx("div", { className: "welcome-project", children: /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    className: "project-chip",
                    onClick: () => {
                      nn();
                    },
                    children: [
                      /* @__PURE__ */ h.jsx(kr, { size: 14 }),
                      j ? Zi(j) : "Choose a project",
                      /* @__PURE__ */ h.jsx(co, { size: 12 })
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ h.jsxs("div", { className: "starter-section", children: [
                /* @__PURE__ */ h.jsx("div", { className: "starter-label", children: /* @__PURE__ */ h.jsx("span", { children: "SUGGESTED PROMPTS" }) }),
                /* @__PURE__ */ h.jsx("div", { className: "starter-grid", children: gO.map((q) => /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    className: "starter-card",
                    onClick: () => {
                      ze((he) => ({ ...he, [ge]: q.prompt })), document.querySelector("textarea")?.focus();
                    },
                    children: [
                      /* @__PURE__ */ h.jsx(q.icon, { size: 19, strokeWidth: 1.5 }),
                      /* @__PURE__ */ h.jsxs("span", { children: [
                        /* @__PURE__ */ h.jsx("strong", { children: q.title }),
                        /* @__PURE__ */ h.jsx("small", { children: q.description })
                      ] }),
                      /* @__PURE__ */ h.jsx(wr, { size: 13, className: "starter-arrow" })
                    ]
                  },
                  q.title
                )) })
              ] })
            ] }),
            !re && /* @__PURE__ */ h.jsx("div", { className: `composer-dock ${U ? "conversation-dock" : ""}`, children: /* @__PURE__ */ h.jsx(
              _E,
              {
                draft: Oe,
                setDraft: (q) => ze((he) => ({ ...he, [ge]: q })),
                running: !!zt,
                backgroundOnly: !!(U && QS(U.items)),
                submitting: I,
                connected: a.state === "ready",
                hasProject: !!j,
                project: j,
                models: G,
                modelId: A,
                preferences: t,
                onModel: Qn,
                onEffort: (q) => Pt({ reasoningEffort: q }),
                onSubmit: Ht,
                onCancel: () => {
                  U && window.muse.cancel(U.session.sessionId).catch((q) => Ne(q.message));
                },
                onError: Ne
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ h.jsx(
          CE,
          {
            open: W,
            project: j,
            platform: f,
            view: U,
            onClose: () => ce(!1),
            onMentionDiff: (q) => {
              qe("chat"), ze((he) => ({
                ...he,
                [ge]: `${he[ge] || ""}${he[ge] ? `
` : ""}Please review the changes in @${q}
`
              }));
            },
            onError: Ne
          },
          j
        ),
        me && /* @__PURE__ */ h.jsx(
          TE,
          {
            initialTab: me,
            preferences: t,
            status: a,
            version: s,
            platform: f,
            onSave: Pt,
            onClose: () => Te(!1),
            onError: Ne,
            onReconnect: Et
          }
        ),
        ut && /* @__PURE__ */ h.jsx(
          jE,
          {
            platform: f,
            sessions: m.filter(
              (q) => !t.archivedSessionIds.includes(q.sessionId)
            ),
            onSession: (q) => {
              Yi(q);
            },
            onNew: jt,
            onOpen: () => {
              nn();
            },
            onSettings: () => Te("appearance"),
            onTheme: (q) => Pt({ theme: q }),
            onClose: () => T(!1)
          }
        ),
        _e && U && /* @__PURE__ */ h.jsx(
          jp,
          {
            title: "Rename conversation",
            onClose: () => It(!1),
            className: "rename-dialog",
            children: /* @__PURE__ */ h.jsxs(
              "form",
              {
                onSubmit: (q) => {
                  q.preventDefault(), window.muse.renameSession(U.session.sessionId, Si).then(() => It(!1)).catch((he) => Ne(he.message));
                },
                children: [
                  /* @__PURE__ */ h.jsx("label", { className: "field-label", htmlFor: "conversation-name", children: "Conversation name" }),
                  /* @__PURE__ */ h.jsx(
                    "input",
                    {
                      id: "conversation-name",
                      className: "text-input",
                      autoFocus: !0,
                      value: Si,
                      maxLength: 200,
                      onChange: (q) => On(q.target.value)
                    }
                  ),
                  /* @__PURE__ */ h.jsxs("div", { className: "request-actions", children: [
                    /* @__PURE__ */ h.jsx("button", { type: "button", className: "button secondary", onClick: () => It(!1), children: "Cancel" }),
                    /* @__PURE__ */ h.jsx("button", { className: "button primary", disabled: !Si.trim(), children: "Save" })
                  ] })
                ]
              }
            )
          }
        ),
        ht && /* @__PURE__ */ h.jsxs("div", { className: `toast ${ht.kind}`, role: ht.kind === "error" ? "alert" : "status", children: [
          ht.kind === "success" ? /* @__PURE__ */ h.jsx(Nn, { size: 16 }) : /* @__PURE__ */ h.jsx(zx, { size: 16 }),
          /* @__PURE__ */ h.jsx("span", { children: ht.message }),
          /* @__PURE__ */ h.jsx(Wt, { label: "Dismiss notification", onClick: () => ot(null), children: /* @__PURE__ */ h.jsx(Sr, { size: 14 }) })
        ] })
      ]
    }
  );
}
const yO = ':root{color-scheme:light;--font-family-ui: -apple-system, BlinkMacSystemFont, "Segoe UI Variable Text", "Segoe UI", "Inter", "Ubuntu", "Cantarell", "Helvetica Neue", system-ui, sans-serif;--font-family-code: "SF Mono", "Cascadia Mono", "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace;--font-caption: 12px;--font-support: 13px;--font-ui: 14px;--font-body: 15px;--font-title: 17px;--font-section: 20px;--font-heading: 22px;--font-brand: 24px;--font-page: 28px;--reading-size: 15px;--base: #f8f7f4;--app-background: #f8f7f4;--sidebar: #f0efeb;--sidebar-solid: #eeece7;--text: #30332f;--heading: #373c34;--message-text: #42453f;--secondary-text: #64685f;--muted: #686d63;--placeholder: #73796e;--accent: #567a65;--serif-accent: #60755b;--primary: #4d6956;--on-primary: #fff;--primary-border: #3f5d4933;--button-shadow: 0 2px 5px #253e2315;--border: #45453515;--faint-border: #4545350b;--strong-border: #4545352b;--hover: #5757400a;--selected: #e4e8de;--selection: #c6d2be;--surface: #ffffff85;--soft-surface: #737c6008;--glass: #ffffff70;--dialog: #fbfaf7;--input: #fff9;--inspector: #f4f3ef;--composer: #ffffffc9;--composer-border: #bfc5b18c;--composer-focus: #859d7c;--composer-shadow: 0 4px 21px #34392707, 0 1px 4px #34392704;--focus: #739369;--focus-soft: #7a986214;--scrollbar: #63695333;--green: #5b8c67;--red: #b76a67;--warning: #bd954f;--nav-selected: #ffffff90;--nav-border: #dedfd580;--nav-shadow: 0 1px 5px #3a3a2b04;--disabled-button: #e6e8e0;--disabled-text: #a3ab9a;--user-avatar: #e6e5dd;--user-message: #eeeee87d;--code-inline: #535b480b;--code-background: #f0f1eb;--tool-background: #ffffff60;--request-border: #7e9d7447;--request-background: #eef3eac9;--notice: #f3f0e3;--error-background: #ba656510;--error-text: #99615e;--error-border: #b9746833;--diff-added: #3b8b520d;--diff-removed: #aa534d0e;--backdrop: #35372d38}[data-theme=daylight]{--accent: #927459;--serif-accent: #987b5c;--primary: #73634e;--primary-border: #67594255;--selected: #e9e4dc;--focus: #ab9171;--focus-soft: #b39a7715;--selection: #e0d2c0;--composer-focus: #b4a48c;--composer-border: #d2c9bb9c;--request-border: #b7a07d55;--request-background: #f6f0e7d4}[data-theme=grove]{--base: #f0f3ec;--app-background: #f0f3ec;--sidebar: #e7ece3;--sidebar-solid: #e7ece3;--dialog: #f5f7f1;--inspector: #eaf0e6;--heading: #354434;--primary: #54734f;--accent: #567852;--code-background: #e8eee2;--user-message: #e3eadd99}[data-theme=moonlight]{color-scheme:dark;--base: #141b28;--app-background: #141b28;--sidebar: #111824;--sidebar-solid: #17202d;--text: #e1e5ee;--heading: #e9e9ef;--message-text: #d7dce7;--secondary-text: #a8b1c3;--muted: #a0aec6;--placeholder: #8691a7;--accent: #b4bee4;--serif-accent: #c1c8e5;--primary: #adb9df;--on-primary: #182239;--primary-border: #d2dcf255;--button-shadow: 0 2px 10px #0002;--border: #b0c5ff13;--faint-border: #b0c5ff09;--strong-border: #b0c5ff2c;--hover: #bac8f70a;--selected: #a4b7f218;--selection: #52678b;--surface: #23304990;--soft-surface: #afc5ef05;--glass: #1b273882;--dialog: #1c2536;--input: #152133;--inspector: #151d2b;--composer: #1d293cd9;--composer-border: #7390c138;--composer-focus: #7288b3;--composer-shadow: 0 5px 30px #060a112b, inset 0 1px 0 #b9d1ff08;--focus: #a1b7e5;--focus-soft: #748aca15;--scrollbar: #aec0ed25;--green: #8cbc9e;--red: #d49399;--warning: #d3b16d;--nav-selected: #a3bafb10;--nav-border: #acc1ed13;--nav-shadow: inset 0 1px 0 #c5d7ff06;--disabled-button: #36425a;--disabled-text: #8090ad;--user-avatar: #29334a;--user-message: #24304a70;--code-inline: #b5c2f014;--code-background: #101a2b;--tool-background: #21304a5c;--request-border: #99b4d440;--request-background: #233248e6;--notice: #b7975020;--error-background: #b6747416;--error-text: #e0a5aa;--error-border: #c0888430;--diff-added: #85c7980d;--diff-removed: #e191990d;--backdrop: #070d1b88}[data-theme=muse],[data-theme=plush]{color-scheme:dark;--base: #062565;--app-background: radial-gradient(ellipse at 95% 0%, #0758cd 0%, transparent 62%), linear-gradient(125deg, #082968, #061b52 63%, #072e83);--sidebar: linear-gradient(160deg, #1452b252, #041b53ad 75%);--sidebar-solid: #0a347c;--text: #f0f5ff;--heading: #f5f8ff;--message-text: #e1ebff;--secondary-text: #c0d5fb;--muted: #b4caee;--placeholder: #a9c6f3;--accent: #b5d4ff;--serif-accent: #b9d3ff;--primary: linear-gradient(140deg, #cee5ff, #8db9ff);--on-primary: #0753dd;--primary-border: #deeeff99;--button-shadow: inset 0 1px 3px #ffffff80, 0 0 16px #3a86ff4a;--border: #87baff24;--faint-border: #92bdff10;--strong-border: #98c6ff4f;--hover: #629eff1e;--selected: #5292f12b;--selection: #397dde99;--surface: #124087d4;--soft-surface: #558de112;--glass: #2864b825;--dialog: #0c2c66;--input: #061d4e9c;--inspector: linear-gradient(160deg, #083d8d, #08215a);--composer: linear-gradient(145deg, #3174d348, #1450b334);--composer-border: #70a7ff9c;--composer-focus: #a7ceff;--composer-shadow: inset 0 1px 0 #b4d5ff1a, 0 8px 40px #00104714;--focus: #b2d9ff;--focus-soft: #81b8ff15;--scrollbar: #a7c9ff35;--green: #85e1b5;--red: #ffb3b9;--warning: #ead095;--nav-selected: linear-gradient(125deg, #357df14d, #5396ff3d);--nav-border: #6ca8ff6c;--nav-shadow: inset 0 1px 4px #92bdff23, 0 0 10px #3984ff11;--disabled-button: #8db9ff;--disabled-text: #0a52d2;--user-avatar: #3975bf69;--user-message: #174c9659;--code-inline: #88b6ff1a;--code-background: #071e50de;--tool-background: #0b2e6ad9;--request-border: #95bcff77;--request-background: #123f80f2;--notice: #c7a46e20;--error-background: #ab6b811e;--error-text: #ffbec8;--error-border: #e7a5b740;--diff-added: #79d7ac15;--diff-removed: #efa9b418;--backdrop: #020e379c}[data-text-size=compact]{--reading-size: 14px}[data-text-size=large]{--reading-size: 17px}*{box-sizing:border-box}html,body,#root{width:100%;height:100%;margin:0;overflow:hidden}body{font-family:var(--font-family-ui);color:var(--text);background:var(--base);font-size:var(--font-ui);line-height:1.5;-webkit-font-smoothing:antialiased}button,input,select,textarea{font:inherit}button,a,input,select,textarea{-webkit-app-region:no-drag}button{color:inherit;cursor:pointer;border:0;background:none}button:disabled{opacity:.42;cursor:not-allowed}button,a,input,select,textarea,summary{-webkit-tap-highlight-color:transparent}button:focus-visible,a:focus-visible,summary:focus-visible,select:focus-visible{outline:2px solid var(--focus);outline-offset:3px}input:focus-visible,textarea:focus-visible{outline:none}input:focus-visible{box-shadow:0 0 0 3px var(--focus-soft);border-color:var(--focus)}::selection{background:var(--selection)}::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-thumb{border-radius:999px;border:2px solid transparent;background-clip:padding-box;background-color:var(--scrollbar)}::-webkit-scrollbar-track{background:transparent;margin-block:6px;margin-inline:6px}::-webkit-scrollbar-corner{background:transparent}.select-popover::-webkit-scrollbar-track,.slash-menu::-webkit-scrollbar-track,.dialog::-webkit-scrollbar-track,.command-results::-webkit-scrollbar-track,.file-browser-list::-webkit-scrollbar-track,.code-block pre::-webkit-scrollbar-track,.tool-body pre::-webkit-scrollbar-track,.approval-card>pre::-webkit-scrollbar-track{margin-block:10px;margin-inline:10px}h1,h2,h3,h4,p{margin-top:0}svg{flex-shrink:0}kbd{font-family:inherit;font-size:var(--font-caption);color:var(--muted);font-weight:400;letter-spacing:.02em}.muted{color:var(--muted)}.eyebrow{font-size:var(--font-caption);font-weight:600;letter-spacing:.13em;color:var(--muted)}.app-shell{display:grid;grid-template-columns:264px minmax(0,1fr) 0px;height:100%;background:var(--app-background);transition:grid-template-columns .32s cubic-bezier(.22,1,.36,1)}.app-shell.with-inspector{grid-template-columns:264px minmax(0,1fr) 292px}.app-shell.sidebar-hidden{grid-template-columns:0px minmax(0,1fr) 0px}.app-shell.sidebar-hidden.with-inspector{grid-template-columns:0px minmax(0,1fr) 292px}.icon-button{width:30px;height:30px;padding:0;display:inline-flex;align-items:center;justify-content:center;border-radius:7px;color:var(--muted);transition:background .15s,color .15s;flex-shrink:0}.icon-button:hover,.icon-button.active{background:var(--hover);color:var(--text)}.button{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:9px;padding:10px 14px;font-size:var(--font-ui);font-weight:500;transition:transform .15s,background .15s}.button:active:not(:disabled){transform:translateY(1px)}.button.primary{background:var(--primary);color:var(--on-primary);box-shadow:var(--button-shadow);border:1px solid var(--primary-border)}.button.primary:hover:not(:disabled){filter:brightness(1.07)}.button.secondary{border:1px solid var(--border);background:var(--surface)}.button.secondary:hover{background:var(--hover)}.text-button{display:inline-flex;align-items:center;gap:6px;font-size:var(--font-ui);color:var(--accent);padding:5px 0;text-align:left}.text-button:hover{text-decoration:underline;text-underline-offset:3px}.sidebar{width:264px;min-width:0;display:flex;flex-direction:column;min-height:0;background:var(--sidebar);border-right:1px solid var(--border);-webkit-user-select:none;user-select:none;position:relative;z-index:4;overflow:hidden;transition:transform .32s cubic-bezier(.22,1,.36,1),opacity .24s cubic-bezier(.22,1,.36,1),border-color .24s ease}.app-shell.sidebar-hidden .sidebar{transform:translate(-100%);opacity:0;pointer-events:none;border-right-color:transparent}.sidebar>:not(.conversation-list):not(.sidebar-companion){flex-shrink:0}.sidebar-titlebar{height:46px;flex-shrink:0;display:flex;align-items:center;justify-content:flex-end;padding:8px 14px 0;-webkit-app-region:drag}.window-traffic-lights{position:fixed;top:22px;left:20px;z-index:20;display:flex;align-items:center;gap:8px;-webkit-app-region:no-drag}.traffic-light{width:12px;height:12px;border-radius:50%;padding:0;position:relative;border:.5px solid #00000024;transition:filter .14s ease,transform .14s ease}.traffic-light.close{background:#ff5f57}.traffic-light.minimize{background:#febc2e}.traffic-light.maximize{background:#28c840}.traffic-light:after{content:"";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;line-height:1;color:#0009;opacity:0;transition:opacity .12s ease}.traffic-light.close:after{content:"×"}.traffic-light.minimize:after{content:"−"}.traffic-light.maximize:after{content:"+"}.window-traffic-lights:hover .traffic-light:after,.traffic-light:focus-visible:after{opacity:1}.brand{padding:12px 24px 18px;display:flex;align-items:center;gap:8px;width:100%;text-align:left}.brand>span:first-of-type{font-size:var(--font-brand);font-weight:600;letter-spacing:-.8px}.brand .muse-mark{object-fit:contain;margin-left:-4px}.desktop-tag{position:relative;flex-shrink:0;font-size:var(--font-caption);letter-spacing:.04em;color:var(--muted);border:1px solid var(--border);padding:3px 6px;border-radius:5px;margin:3px 0 0 auto;transition:color .18s ease,border-color .18s ease,background-color .18s ease}.desktop-tag:hover{color:var(--text);border-color:var(--strong-border);background:var(--soft-surface);opacity:1!important}.desktop-tag:after{content:attr(data-tooltip);position:absolute;top:calc(100% + 8px);right:0;width:210px;padding:8px 10px;border-radius:9px;background:var(--dialog);border:1px solid var(--strong-border);color:var(--text);font-size:11.5px;font-weight:450;letter-spacing:0;line-height:1.45;white-space:normal;box-shadow:0 12px 30px #0005;opacity:0;transform:translateY(-4px);pointer-events:none;transition:opacity .18s cubic-bezier(.22,1,.36,1),transform .18s cubic-bezier(.22,1,.36,1);z-index:30}.desktop-tag:hover:after{opacity:1;transform:translateY(0)}.update-settings{text-align:left;margin:22px 0}.update-settings .setting-row{gap:18px}.update-settings .button{flex-shrink:0}.muse-mark{object-fit:contain}.main-nav{display:flex;flex-direction:column;gap:4px;padding:0 13px 12px}.main-nav button{display:flex;align-items:center;gap:13px;padding:11px 13px;font-size:var(--font-ui);border:1px solid transparent;border-radius:10px;text-align:left;color:var(--secondary-text)}.main-nav button:hover{background:var(--hover);color:var(--text)}.main-nav button.selected{background:var(--nav-selected);border-color:var(--nav-border);color:var(--text);box-shadow:var(--nav-shadow)}.nav-active-dot{margin-left:auto;height:4px;width:4px;border-radius:50%;background:currentColor;opacity:.7}.sidebar-search{padding:0 13px 10px}.sidebar-search .search-button{width:100%;background:var(--soft-surface);border:1px solid var(--border)}.sidebar-search .search-button:hover{background:var(--hover);border-color:var(--strong-border)}.sidebar-primary{padding:0 13px 6px;display:flex;flex-direction:column;gap:3px}.sidebar-item-icon{width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--muted);transition:color .18s ease}.new-button,.search-button{display:flex;align-items:center;gap:10px;min-height:32px;border-radius:8px;font-size:var(--font-support);color:var(--secondary-text);text-align:left;padding:6px 10px;transition:background-color .18s ease,border-color .18s ease,color .18s ease}.new-button:hover,.search-button:hover{background:var(--hover);color:var(--text)}.new-button:hover .sidebar-item-icon,.search-button:hover .sidebar-item-icon{color:var(--text)}.new-button kbd,.search-button kbd{margin-left:auto;font-family:var(--font-family-ui);font-size:var(--font-caption);color:var(--muted);opacity:.9}.sidebar-section-label{padding:4px 19px 2px 13px;margin-top:4px;height:30px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;color:var(--muted);font-size:var(--font-caption);font-weight:600;letter-spacing:.09em}.section-toggle{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:6px;color:var(--muted);font-size:var(--font-caption);font-weight:600;letter-spacing:.09em;transition:color .18s ease,background-color .18s ease}.section-toggle:hover{color:var(--text);background:var(--hover)}.section-chevron{flex-shrink:0;opacity:0;transition:transform .26s cubic-bezier(.22,1,.36,1),opacity .18s ease}.section-toggle:hover .section-chevron,.section-chevron.collapsed{opacity:.75}.section-chevron.collapsed{transform:rotate(-90deg)}.sidebar-collapse{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .28s cubic-bezier(.22,1,.36,1),opacity .22s cubic-bezier(.22,1,.36,1)}.sidebar-collapse.open{grid-template-rows:1fr;opacity:1}.sidebar-collapse-inner{min-height:0;overflow:hidden}.sidebar-section-label .icon-button{width:22px;height:22px}.project-switcher{padding:0 13px 4px;display:flex;align-items:center;color:var(--secondary-text)}.conversation-list{padding:2px 13px 7px;min-height:100px;flex:1;overflow-y:auto}.conversation-group{margin-bottom:2px}.conversation-row{display:flex;align-items:center;position:relative;border-radius:8px;margin-bottom:2px;transition:background-color .18s ease}.conversation-row:hover{background:var(--hover)}.conversation-row.selected{background:var(--selected)}.conversation-link{display:flex;align-items:center;width:100%;min-height:32px;padding:6px 10px;gap:10px;text-align:left;min-width:0;font-size:var(--font-support);color:var(--secondary-text);transition:color .18s ease}.conversation-row:hover .conversation-link,.conversation-row.selected .conversation-link{color:var(--text)}.conversation-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.conversation-indicator{color:var(--muted)}.conversation-row:hover .conversation-indicator,.conversation-row.selected .conversation-indicator{color:var(--text)}.conversation-link time{font-size:var(--font-caption);color:var(--muted);font-variant-numeric:tabular-nums;flex-shrink:0}.row-pin{position:absolute;right:5px;width:22px;height:23px;border-radius:5px;background:var(--sidebar-solid);opacity:0;display:flex;align-items:center;justify-content:center}.conversation-row:hover .row-pin,.row-pin:focus-visible{opacity:1}.conversation-row:hover time{visibility:hidden}.sidebar-empty{padding:13px 10px;color:var(--muted);font-size:var(--font-support)}.sidebar-empty>svg{display:none}.sidebar-empty p{margin:0 0 5px;color:var(--secondary-text);font-size:var(--font-support)}.sidebar-empty span{font-size:var(--font-support);line-height:1.6}.load-more{font-size:var(--font-support);padding:8px 10px;color:var(--muted)}.sidebar-companion{flex:0 0 54px;min-height:0;height:54px;display:flex;flex-direction:row;align-items:center;justify-content:center;gap:10px;margin:6px 18px 0;overflow:hidden}.sidebar-companion img{width:43px;height:50px;min-height:0;object-fit:contain;filter:drop-shadow(0 8px 13px #00000020)}.sidebar-companion>span{color:var(--muted);font-size:var(--font-support);font-family:var(--font-family-ui);font-style:normal;margin:0}.sidebar-companion>svg{display:none}.sidebar-bottom{padding:7px 15px 11px;flex-shrink:0}.theme-mini-switch{display:flex;align-items:center;padding:3px;gap:2px;border-radius:10px;border:1px solid var(--border);background:var(--soft-surface);margin:0 2px 7px;height:36px}.theme-mini-switch button{display:flex;flex:1 1 0px;gap:0;align-items:center;justify-content:center;height:28px;border-radius:7px;color:var(--muted);font-size:12.5px;padding:0 2px;min-width:0;overflow:hidden;transition:flex-grow .3s cubic-bezier(.22,1,.36,1),background-color .24s cubic-bezier(.22,1,.36,1),color .18s ease,box-shadow .24s cubic-bezier(.22,1,.36,1),transform .16s cubic-bezier(.22,1,.36,1)}.theme-mini-switch button>svg{flex-shrink:0;transition:transform .24s cubic-bezier(.22,1,.36,1)}.theme-mini-switch button:hover:not(.selected){background:var(--hover);color:var(--secondary-text)}.theme-mini-switch button:active{transform:scale(.96)}.theme-mini-switch button.selected{flex:3.7 1 0px;padding:0 6px;background:var(--selected);color:var(--text);box-shadow:0 1px 4px #00000014}.theme-mini-label{display:inline-grid;grid-template-columns:0fr;opacity:0;margin-left:0;transition:grid-template-columns .3s cubic-bezier(.22,1,.36,1),opacity .2s ease,margin-left .3s cubic-bezier(.22,1,.36,1)}.theme-mini-label>span{overflow:hidden;white-space:nowrap}.theme-mini-switch button.selected .theme-mini-label{grid-template-columns:1fr;opacity:1;margin-left:5px}.connection-status{display:flex;align-items:center;gap:7px;width:100%;padding:6px 9px 0;color:var(--muted);font-size:var(--font-support)}.connection-status>svg{margin-left:auto}.status-dot{width:5px;height:5px;background:var(--warning);border-radius:50%;flex-shrink:0}.status-dot.ready{background:var(--green);box-shadow:0 0 6px color-mix(in srgb,var(--green),transparent 50%)}.status-dot.connecting{background:var(--accent);animation:breathe 2s infinite}.main-workspace{display:flex;flex-direction:column;min-width:0;min-height:0;position:relative;overflow:hidden}.workspace-titlebar{height:62px;flex-shrink:0;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 25px 0;-webkit-app-region:drag;z-index:6;transition:padding-left .32s cubic-bezier(.22,1,.36,1)}.workspace-titlebar.with-traffic-lights{padding-left:96px}.workspace-breadcrumb{display:flex;align-items:center;gap:10px;min-width:0;font-size:var(--font-ui)}.breadcrumb-project{color:var(--muted);flex-shrink:0;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.workspace-breadcrumb>svg{color:var(--muted);opacity:.65}.breadcrumb-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:500}.window-tools{display:flex;align-items:center;gap:6px}.local-pill{display:flex;align-items:center;gap:5px;font-size:var(--font-support);color:var(--muted);margin-right:8px}.local-pill>span{height:4px;width:4px;background:var(--green);border-radius:50%}.conversation-menu{position:relative}.conversation-menu>summary{list-style:none;cursor:pointer;padding:5px;display:flex;color:var(--muted);border-radius:6px}.conversation-menu>summary:hover{background:var(--hover)}.popover{position:absolute;z-index:15;top:32px;right:0;min-width:205px;padding:5px;background:var(--dialog);border:1px solid var(--border);box-shadow:0 12px 40px #0003;border-radius:10px}.popover button{width:100%;text-align:left;padding:9px 10px;display:flex;align-items:center;gap:7px;border-radius:6px;font-size:var(--font-ui)}.popover button:hover{background:var(--hover)}.connection-banner{display:flex;align-items:center;gap:10px;padding:10px 24px;background:var(--notice);color:var(--text);border-bottom:1px solid var(--border);font-size:var(--font-support);position:relative;z-index:5}.connection-banner>span{flex:1;line-height:1.5}.connection-banner button{display:flex;align-items:center;gap:5px;color:var(--accent);white-space:nowrap;font-size:var(--font-support)}.workspace-body{flex:1;min-height:0;display:flex;flex-direction:column;position:relative}.chat-brand-background{position:absolute;inset:0;background:url(/muse-logo.png) no-repeat 52% 26% / min(83%,865px);opacity:calc(var(--background-presence) * .045);pointer-events:none;will-change:opacity;transform:translateZ(0);transition:opacity .32s cubic-bezier(.22,1,.36,1)}.welcome{position:relative;display:flex;flex:1;flex-direction:column;min-height:310px}.welcome-art{position:absolute;inset:0;background-size:cover;background-position:center;opacity:var(--background-presence);pointer-events:none;-webkit-mask-image:linear-gradient(black 65%,transparent 100%);mask-image:linear-gradient(black 65%,transparent 100%);will-change:opacity;transform:translateZ(0);transition:opacity .32s cubic-bezier(.22,1,.36,1)}.main-workspace:has(.transcript,.loading-conversation) .welcome-art{opacity:calc(var(--background-presence) * .14)}:is([data-theme=muse],[data-theme=plush]) .welcome-art{opacity:0!important}.theme-daylight{background-image:url(/themes/daylight.png)}.theme-moonlight{background-image:url(/themes/moonlight.png)}.theme-grove{background-image:url(/themes/grove.png)}.welcome-content{position:relative;width:calc(100% - 112px);max-width:930px;margin:0 auto;padding:clamp(35px,8vh,100px) 0 25px}.welcome-kicker{display:flex;align-items:center;gap:8px;font-size:var(--font-caption);letter-spacing:.15em;font-weight:500;color:var(--muted);margin-bottom:23px}.tiny-spark{font-size:var(--font-title);letter-spacing:0;color:var(--accent)}.welcome h1{font-size:clamp(33px,3.7vw,53px);line-height:1.1;font-weight:420;letter-spacing:-2px;margin:0 0 19px;color:var(--heading)}.welcome h1 em{font-family:Iowan Old Style,Palatino Linotype,Georgia,serif;font-weight:400;letter-spacing:-1.7px;color:var(--serif-accent)}.welcome-subtitle{font-size:var(--font-body);line-height:1.8;color:var(--secondary-text);margin-bottom:24px}.welcome-project{display:flex;align-items:center;gap:14px}.project-chip{padding:8px 11px;border:1px solid var(--border);display:inline-flex;align-items:center;gap:8px;background:var(--glass);border-radius:8px;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);font-size:var(--font-support);max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.project-chip:hover{background:var(--hover)}.starter-section{width:calc(100% - 112px);max-width:930px;margin:auto auto 23px;position:relative;padding-top:25px}.starter-label{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px;font-size:var(--font-caption);letter-spacing:.1em;color:var(--muted)}.starter-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.starter-card{display:flex;align-items:flex-start;text-align:left;gap:10px;padding:17px 13px;min-width:0;border:1px solid var(--border);border-radius:11px;background:var(--glass);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);transition:transform .2s,border .2s,background .2s}.starter-card:hover{transform:translateY(-2px);background:var(--hover);border-color:var(--strong-border)}.starter-card>svg:first-child{color:var(--accent);margin-top:1px}.starter-card>span{min-width:0;display:flex;flex-direction:column;gap:6px}.starter-card strong{font-size:var(--font-ui);font-weight:500;white-space:normal}.starter-card small{font-size:var(--font-support);color:var(--muted);white-space:normal}.starter-arrow{color:var(--muted);margin-left:auto}.composer-dock{width:calc(100% - 112px);max-width:930px;margin:0 auto;position:relative;flex-shrink:0;padding-bottom:18px;z-index:2}.composer{background:var(--composer);border:1px solid var(--composer-border);border-radius:22px;box-shadow:var(--composer-shadow);padding:20px 20px 14px;-webkit-backdrop-filter:blur(28px);backdrop-filter:blur(28px);transition:border-color .2s,box-shadow .2s,background-color .2s}.composer:focus-within{border-color:var(--composer-focus);box-shadow:var(--composer-shadow),0 0 0 2px var(--focus-soft)}.composer textarea{display:block;width:100%;resize:none;min-height:64px;max-height:200px;line-height:1.6;background:transparent;color:var(--text);padding:0 3px;border:0;font-size:var(--font-body)}.composer textarea::placeholder{color:var(--placeholder)}.composer-toolbar{display:flex;align-items:center;justify-content:space-between;gap:10px;padding-top:8px}.composer-tools,.composer-actions{display:flex;align-items:center;gap:6px}.composer-tools{min-width:0}.composer-tools .icon-button{width:34px;height:34px;border-radius:50%;background:var(--soft-surface);border:1px solid var(--border);margin-right:2px}.toolbar-divider{display:none}.select-control{display:inline-flex;align-items:center;gap:6px;border-radius:8px;color:var(--secondary-text);min-width:0;padding:5px 8px;transition:background-color .18s ease,color .18s ease}.select-control:hover{background:var(--hover);color:var(--text)}.composer-tools .muse-select .select-control{min-height:38px;padding:7px 12px;border-radius:15px;background:var(--soft-surface);border:1px solid var(--border);gap:6px}.composer-tools .muse-select .select-control:hover{background:var(--hover)}.model-spark,.effort-icon{color:var(--accent);width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:1}.model-spark{font-size:var(--font-title)}.effort-select{color:var(--secondary-text)}.send-button{width:40px;height:40px;border-radius:50%;display:flex;justify-content:center;align-items:center;flex-shrink:0;background:var(--primary);border:1px solid var(--primary-border);color:var(--on-primary);box-shadow:var(--button-shadow)}.send-button:disabled{background:var(--disabled-button);color:var(--disabled-text);opacity:.8;box-shadow:none;border-color:transparent}.send-button:hover:not(:disabled){transform:translateY(-1px);filter:brightness(1.06)}.composer-footnote{display:flex;justify-content:space-between;gap:12px;font-size:var(--font-caption);color:var(--muted);margin:11px 6px 0;opacity:1;flex-wrap:wrap;align-items:center}.composer-shortcuts{display:inline-flex;align-items:center;gap:8px;margin-left:auto}.composer-shortcut{display:inline-flex;align-items:center;gap:5px;color:var(--secondary-text);font-weight:450}.composer-footnote kbd{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 5px;border-radius:6px;border:1px solid var(--border);background:var(--soft-surface);color:var(--secondary-text);font-family:var(--font-family-ui);font-size:11px;font-weight:500;line-height:1;box-shadow:inset 0 1px #ffffff0d}.footnote-dot{color:var(--muted);opacity:.55;padding:0 1px}.workspace-statusbar{height:29px;display:flex;align-items:center;justify-content:space-between;font-size:var(--font-caption);color:var(--muted);padding:0 24px;flex-shrink:0;border-top:1px solid var(--faint-border)}.workspace-statusbar>span{display:flex;align-items:center;gap:6px}.statusbar-dot{margin:0 3px}.attachment-list{display:flex;flex-wrap:wrap;gap:6px;margin:-3px 0 12px}.attachment{display:inline-flex;align-items:center;gap:5px;border:1px solid var(--border);border-radius:6px;background:var(--soft-surface);font-size:var(--font-support);padding:5px 6px;max-width:200px}.attachment>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.attachment button{padding:2px;display:flex;border-radius:3px}.attachment button:hover{background:var(--hover)}.running-line{display:flex;align-items:center;gap:8px;font-size:var(--font-support);padding:9px 5px 12px;color:var(--secondary-text)}.running-hint{margin-left:auto;color:var(--muted);font-size:var(--font-support);white-space:normal}.working-orb,.working-dot{width:6px;height:6px;display:inline-block;border-radius:50%;background:var(--accent);box-shadow:0 0 9px var(--focus-soft);animation:breathe 2s infinite}.working-dot{width:5px;height:5px}.transcript-wrap{position:relative;flex:1;min-height:0}.transcript-scroll{height:100%;overflow-y:auto;scroll-behavior:auto}.transcript{width:calc(100% - 112px);max-width:890px;margin:0 auto;padding:30px 0 40px;position:relative}.conversation-beginning{display:flex;align-items:center;justify-content:center;gap:9px;font-size:var(--font-support);color:var(--muted);margin:4px 0 42px}.conversation-beginning .muse-mark{opacity:.6}.message{margin:0 0 29px}.message-heading{display:flex;align-items:center;gap:8px;margin-bottom:10px;height:27px}.message-heading strong{font-size:var(--font-support);font-weight:600}.message-heading time{font-size:var(--font-caption);color:var(--muted)}.message-heading .copy-button{margin-left:2px;opacity:0;transition:opacity .16s ease,background-color .16s ease,color .16s ease}.message:hover .copy-button,.copy-button:focus-visible{opacity:1}.avatar{display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:9px}.user-avatar{background:var(--user-avatar);color:var(--secondary-text);font-size:var(--font-support);font-weight:600}.muse-avatar{background:var(--soft-surface);padding:3px}.muse-avatar .muse-mark{width:19px;height:19px}.user-message-text{margin-left:34px;font-size:var(--reading-size);line-height:1.65;white-space:pre-wrap;overflow-wrap:anywhere;padding:10px 15px;border-radius:13px;background:var(--user-message);border:1px solid var(--border);width:fit-content;max-width:calc(100% - 34px)}.agent-message .markdown{margin-left:35px}.markdown{font-size:var(--reading-size);line-height:1.85;overflow-wrap:anywhere;color:var(--message-text)}.markdown p{margin:0 0 16px}.markdown p:last-child{margin-bottom:0}.markdown h1,.markdown h2,.markdown h3{line-height:1.4;margin:22px 0 12px;letter-spacing:-.3px;color:var(--text)}.markdown h1{font-size:var(--font-brand)}.markdown h2{font-size:19px}.markdown h3{font-size:var(--font-title)}.markdown a{color:var(--accent);text-underline-offset:3px}.markdown blockquote{margin:18px 0;padding:2px 15px;border-left:2px solid var(--accent);color:var(--secondary-text)}.markdown ul,.markdown ol{padding-left:22px;margin:10px 0 18px}.markdown li{margin:5px 0}.markdown li>input{accent-color:var(--accent)}.markdown code{font-family:var(--font-family-code);background:var(--code-inline);border-radius:4px;font-size:.9em;padding:2px 5px}.markdown pre{font-size:var(--font-support);line-height:1.8;padding:16px 18px;margin:0;overflow-x:auto}.markdown pre code{padding:0;background:transparent;font-size:inherit}.code-block{border:1px solid var(--border);background:var(--code-background);border-radius:10px;margin:16px 0;overflow:hidden}.code-block-header{display:flex;align-items:center;justify-content:space-between;padding:6px 12px 6px 14px;border-bottom:1px solid var(--border);background:var(--soft-surface);font-size:var(--font-caption);color:var(--muted)}.code-block-lang{font-family:var(--font-family-code);font-size:11px;text-transform:lowercase;color:var(--muted)}.code-block-header .copy-button{font-size:11.5px;padding:3px 7px}.markdown table{border-collapse:collapse;display:block;overflow-x:auto;font-size:var(--font-ui);margin:18px 0}.markdown th,.markdown td{border:1px solid var(--border);padding:8px 13px;text-align:left}.markdown th{background:var(--soft-surface)}.markdown hr{border:0;border-top:1px solid var(--border);margin:24px 0}.inline-link-icon{margin-left:3px;vertical-align:middle}.remote-image{color:var(--muted);font-style:italic}.copy-button{display:inline-flex;align-items:center;gap:4px;padding:5px;color:var(--muted);border-radius:5px;font-size:var(--font-support)}.copy-button:hover{background:var(--hover);color:var(--text)}.streaming-label{font-size:var(--font-support);color:var(--muted);animation:breathe 2s infinite}.tool-item,.tool-group{margin:6px 0 6px 35px;border:1px solid var(--border);background:var(--tool-background);border-radius:9px;font-size:var(--font-support);overflow:hidden}.tool-item>summary,.tool-summary-button,.tool-group-header{width:100%;display:flex;align-items:center;gap:8px;list-style:none;padding:10px 12px;cursor:pointer;color:var(--secondary-text);text-align:left;transition:background-color .16s ease,color .16s ease}.tool-summary-button:hover,.tool-group-header:hover{background:var(--hover);color:var(--text)}.tool-group-list{padding:6px 10px 10px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:5px}.tool-group-list .tool-item{margin:0}summary::-webkit-details-marker{display:none}.tool-state{display:flex;color:var(--green)}.tool-title{font-weight:500}.tool-summary{color:var(--muted);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--font-support)}.details-chevron{margin-left:auto;color:var(--muted);transition:transform .24s cubic-bezier(.22,1,.36,1)}details[open]>summary .details-chevron,.details-chevron.open{transform:rotate(90deg)}.tool-body{padding:12px 14px;border-top:1px solid var(--border)}.tool-body pre{margin:8px 0 12px;font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;max-height:320px;overflow:auto}.tool-body p{font-size:var(--font-support);line-height:1.6}.tool-result-status{display:block;font-size:var(--font-support);color:var(--muted);padding-top:8px}.reasoning-item{margin:0 0 18px 35px;color:var(--muted)}.reasoning-item>summary,.reasoning-summary-button{display:flex;align-items:center;list-style:none;gap:7px;font-size:var(--font-support);color:var(--muted);cursor:pointer;padding:6px 8px;margin-left:-8px;border-radius:6px;width:fit-content;transition:background-color .16s ease,color .16s ease}.reasoning-summary-button:hover{background:var(--hover);color:var(--text)}.reasoning-item .markdown{padding:13px 15px;margin-top:6px;border-left:1px solid var(--border);color:var(--muted);font-size:var(--font-ui)}.diff-count{display:inline-flex;gap:5px;font-size:var(--font-support);margin-left:auto}.diff-count b{color:var(--green);font-weight:500}.diff-count i{color:var(--red);font-style:normal}.jump-button{position:absolute;bottom:12px;left:calc(50% - 17px);width:34px;height:34px;border-radius:50%;background:var(--dialog);border:1px solid var(--border);box-shadow:0 3px 15px #0002}.empty-conversation{text-align:center;padding:70px 20px;color:var(--muted)}.empty-conversation h2{font-family:var(--font-family-ui);font-weight:400;margin-top:20px;font-size:var(--font-page);color:var(--text)}.empty-conversation p{font-size:var(--font-ui)}.approval-card,.question-card{margin:24px 0 24px 35px;border:1px solid var(--request-border);background:var(--request-background);border-radius:13px;padding:19px}.request-heading{display:flex;align-items:center;gap:11px;margin-bottom:14px}.request-heading h3{font-size:var(--font-ui);margin:0 0 5px;font-weight:600}.request-heading p{font-size:var(--font-support);color:var(--secondary-text);margin:0}.request-icon{color:var(--accent);display:flex}.approval-card>pre{background:var(--code-background);border:1px solid var(--border);border-radius:7px;padding:13px;font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;max-height:220px;overflow:auto}.approval-choices{display:flex;flex-wrap:wrap;gap:7px;margin-top:15px}.approval-choices .button{font-size:var(--font-support)}.choice-scope{font-size:var(--font-support);opacity:.7;border-left:1px solid currentColor;padding-left:6px}.question-card fieldset{padding:0;margin:19px 0;border:0}.question-card legend{font-size:var(--font-ui);font-weight:500;line-height:1.6;margin-bottom:12px}.question-options{display:flex;flex-direction:column;gap:6px;margin-bottom:10px}.question-option{display:flex;gap:9px;align-items:flex-start;background:var(--surface);border:1px solid var(--border);padding:10px 12px;border-radius:7px;cursor:pointer}.question-option.selected{border-color:var(--accent);background:var(--selected)}.question-option input{accent-color:var(--accent);margin:2px 0 0}.question-option strong{font-size:var(--font-support);font-weight:500}.question-option small{display:block;margin-top:4px;font-size:var(--font-support);color:var(--secondary-text);line-height:1.5}.request-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:20px}.inline-error{padding:14px;font-size:var(--font-support);line-height:1.7;background:var(--error-background);color:var(--error-text);border:1px solid var(--error-border);border-radius:8px;margin:16px 0;overflow-wrap:anywhere}.inline-error strong{font-weight:500}.inline-error p{margin:7px 0}.inline-error>span{opacity:.8}.inline-notice{padding:12px 14px;background:var(--notice);border:1px solid var(--border);border-radius:8px;font-size:var(--font-support);color:var(--secondary-text);line-height:1.6;margin-bottom:18px}.loading-conversation{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:var(--muted);font-size:var(--font-ui)}.inspector{width:292px;min-width:0;border-left:1px solid var(--border);display:flex;flex-direction:column;min-height:0;background:var(--inspector);z-index:4;overflow:hidden;transition:transform .32s cubic-bezier(.22,1,.36,1),opacity .24s cubic-bezier(.22,1,.36,1),border-color .24s ease}.app-shell:not(.with-inspector) .inspector{transform:translate(100%);opacity:0;pointer-events:none;border-left-color:transparent}.inspector>header{height:62px;display:flex;align-items:center;justify-content:space-between;padding:8px 15px 0 19px;-webkit-app-region:drag;font-size:var(--font-support);color:var(--muted)}.inspector-project{display:flex;align-items:center;gap:10px;padding:21px 19px 25px}.project-icon{width:38px;height:38px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);background:var(--soft-surface);border-radius:10px;color:var(--accent)}.inspector-project>div{min-width:0}.inspector-project strong{display:block;font-size:var(--font-ui);margin-bottom:5px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.inspector-project div>span{display:flex;align-items:center;gap:5px;font-size:var(--font-support);color:var(--muted)}.inspector-tabs{display:flex;align-items:center;gap:18px;padding:0 16px;border-bottom:1px solid var(--border);height:39px}.inspector-tabs>button[role]{display:flex;gap:6px;align-items:center;height:39px;padding:0 0 2px;color:var(--muted);border-bottom:1.5px solid transparent;font-size:var(--font-support)}.inspector-tabs>button[aria-selected=true]{color:var(--text);border-bottom-color:var(--accent)}.inspector-tabs>button>span{font-size:var(--font-support);border-radius:4px;padding:1px 4px;background:var(--hover)}.inspector-tabs>.icon-button{margin-left:auto}.inspector-body{flex:1;overflow:auto;min-height:0;padding:12px 11px}.inspector-empty{text-align:center;padding:50px 19px;color:var(--muted)}.empty-glyph{display:inline-flex;padding:13px;border-radius:15px;background:var(--soft-surface);border:1px solid var(--faint-border)}.inspector-empty h3{color:var(--secondary-text);font-size:var(--font-ui);font-weight:500;margin:19px 0 10px}.inspector-empty p{font-size:var(--font-support);line-height:1.85}.changed-file{width:100%;display:flex;align-items:center;gap:9px;padding:10px 7px;text-align:left;border-radius:7px}.changed-file:hover{background:var(--hover)}.changed-file>svg:first-child{color:var(--muted)}.changed-file>span{flex:1;min-width:0}.changed-file strong{display:block;font-size:var(--font-support);font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.changed-file small{display:block;font-size:var(--font-support);color:var(--muted);margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.changed-file b{font-family:var(--font-family-code);font-size:var(--font-support);font-weight:400;color:var(--green)}.changed-file b.deleted{color:var(--red)}.changed-file>svg:last-child{color:var(--muted)}.diff-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:4px 0 10px}.diff-back{display:flex;align-items:center;gap:5px;font-size:var(--font-support);min-width:0;flex:1;overflow:hidden;text-align:left}.diff-back>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.diff-ask-button{display:inline-flex;align-items:center;gap:4px;padding:4px 8px;border-radius:6px;border:1px solid var(--border);background:var(--soft-surface);color:var(--secondary-text);font-size:11.5px;flex-shrink:0;transition:background-color .16s ease,color .16s ease}.diff-ask-button:hover{background:var(--hover);color:var(--text)}.diff-view{font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.8;white-space:pre;overflow:auto;margin:0;padding:7px;border-radius:8px;border:1px solid var(--faint-border);background:var(--code-background)}.diff-view>span{display:inline-block;min-width:100%;padding:0 6px;border-radius:3px}.diff-gutter{display:inline-block;width:32px;padding-right:8px;margin-right:6px;text-align:right;color:var(--muted);opacity:.55;-webkit-user-select:none;user-select:none;font-variant-numeric:tabular-nums}.diff-view .added{background:var(--diff-added);color:var(--green)}.diff-view .removed{background:var(--diff-removed);color:var(--red)}.diff-view .hunk{color:var(--accent)}.diff-view .meta{color:var(--muted);opacity:.7}.activity-entry{display:flex;gap:9px;padding:12px 7px;border-bottom:1px solid var(--faint-border)}.activity-entry>span{color:var(--green)}.activity-entry strong{font-size:var(--font-support);font-weight:500}.activity-entry p{font-size:var(--font-support);color:var(--muted);line-height:1.6;margin:5px 0 0;overflow-wrap:anywhere}.usage-panel{border-top:1px solid var(--border);padding:16px 20px}.usage-panel>span{display:block;margin-bottom:12px}.usage-panel>div{display:flex;justify-content:space-between;font-size:var(--font-support);margin:7px 0;color:var(--muted)}.usage-panel strong{font-weight:500;color:var(--secondary-text);font-variant-numeric:tabular-nums}.inspector-footer{border-top:1px solid var(--border);display:flex;justify-content:space-between;padding:12px 18px}.inspector-footer button{display:flex;align-items:center;gap:7px;font-size:var(--font-support);color:var(--muted)}.inspector-footer button:hover{color:var(--text)}.dialog{background:var(--dialog);color:var(--text);border:1px solid var(--strong-border);border-radius:17px;box-shadow:0 30px 100px #0005,0 4px 20px #0002;padding:0;max-height:calc(100vh - 70px);overflow:hidden}.dialog[open]{animation:dialog-in .2s cubic-bezier(.22,1,.36,1)}.dialog::backdrop{background:var(--backdrop);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);animation:backdrop-in .2s ease}@keyframes dialog-in{0%{opacity:0;transform:translateY(6px) scale(.985)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes backdrop-in{0%{opacity:0}to{opacity:1}}.dialog-heading{padding:17px 20px 17px 25px;display:flex;align-items:center;justify-content:space-between;gap:20px;border-bottom:1px solid var(--border)}.dialog-heading h2{margin:0;font-size:var(--font-ui);font-weight:600}.settings-dialog{width:880px;max-width:calc(100vw - 64px)}.settings-layout{display:flex;height:min(590px,calc(100vh - 143px))}.settings-nav{width:168px;border-right:1px solid var(--border);padding:19px 12px;display:flex;flex-direction:column;gap:5px;flex-shrink:0;background:var(--soft-surface)}.settings-nav>button{display:flex;align-items:center;gap:9px;padding:11px 12px;font-size:var(--font-support);border-radius:8px;color:var(--muted);text-align:left}.settings-nav>button.selected{color:var(--text);background:var(--selected)}.settings-nav>button:hover{color:var(--text)}.settings-nav>button .muse-mark{flex-shrink:0;opacity:.78;transition:opacity .16s ease}.settings-nav>button.selected .muse-mark,.settings-nav>button:hover .muse-mark{opacity:1}.settings-content{padding:31px 30px;overflow:auto;flex:1;min-width:0}.settings-section-heading h3{font-family:var(--font-family-ui);font-size:29px;font-weight:400;letter-spacing:-.5px;margin:10px 0}.settings-section-heading p{color:var(--muted);font-size:var(--font-body);line-height:1.75;margin-bottom:23px}.theme-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin:0 -3px 24px}.theme-card{padding:4px;border:1px solid transparent;border-radius:10px;text-align:left}.theme-card.selected{border-color:var(--accent);background:var(--selected)}.theme-card:hover{background:var(--hover)}.theme-thumbnail{aspect-ratio:1.35;position:relative;overflow:hidden;border-radius:6px;border:1px solid var(--border)}.theme-thumbnail>img{width:100%;height:100%;object-fit:cover;object-position:78% center}.theme-thumbnail.muse-thumbnail{background:linear-gradient(135deg,#003698,#092063)}.theme-thumbnail.muse-thumbnail>img{object-fit:contain;padding:9px}.theme-check{position:absolute;top:5px;right:5px;height:18px;width:18px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--primary);color:var(--on-primary)}.theme-name{display:flex;align-items:center;gap:5px;font-size:var(--font-support);font-weight:500;margin:10px 3px 6px}.theme-description{display:block;margin:0 3px 5px;color:var(--muted);font-size:var(--font-support);line-height:1.5}.setting-row{display:flex;justify-content:space-between;align-items:center;gap:18px;min-height:73px;padding:15px 0;border-top:1px solid var(--border)}.setting-label{display:flex;align-items:center;gap:7px;font-size:var(--font-ui);font-weight:500}.setting-row small{display:block;color:var(--muted);font-size:var(--font-support);line-height:1.6;margin-top:6px;max-width:290px}.switch{appearance:none;width:31px;height:18px;border-radius:15px;border:1px solid var(--strong-border);background:var(--disabled-button);position:relative;flex-shrink:0;cursor:pointer;transition:background .2s}.switch:after{content:"";display:block;height:12px;width:12px;position:absolute;top:2px;left:2px;background:var(--muted);border-radius:50%;transition:transform .2s}.switch:checked{background:var(--primary);border-color:var(--primary-border)}.switch:checked:after{background:var(--on-primary);transform:translate(12px)}.range-setting{display:flex;gap:9px;align-items:center;font-size:var(--font-support);color:var(--muted);width:150px}.range-setting input{width:110px;accent-color:var(--accent);height:3px;cursor:pointer}.range-setting span{min-width:26px}.segmented{display:flex;gap:2px;padding:3px;border:1px solid var(--border);border-radius:7px;background:var(--soft-surface)}.segmented>button{width:29px;height:24px;border-radius:4px}.segmented>button.selected{background:var(--selected);box-shadow:0 1px 3px #0002}.connection-card{display:flex;gap:11px;align-items:center;padding:16px;border:1px solid var(--border);background:var(--soft-surface);border-radius:10px}.connection-card>svg{color:var(--muted)}.connection-card.ready>svg{color:var(--green)}.connection-card>div{flex:1}.connection-card strong{font-size:var(--font-ui);font-weight:500}.connection-card span{display:block;margin-top:5px;color:var(--muted);font-size:var(--font-support);line-height:1.6}.path-readout{margin:10px 0 26px;color:var(--muted);font-size:var(--font-support);font-family:var(--font-family-code);overflow-wrap:anywhere}.field-label{display:block;font-size:var(--font-support);font-weight:500;margin:20px 0 10px}.text-input{background:var(--input);border:1px solid var(--border);border-radius:7px;padding:10px 11px;color:var(--text);width:100%;font-size:var(--font-ui)}.text-input::placeholder{color:var(--placeholder)}.input-with-button{display:flex;gap:7px}.input-with-button input{min-width:0}.field-hint{font-size:var(--font-support);color:var(--muted);line-height:1.7;margin:9px 0 18px}.setup-instructions{margin-top:28px;padding-top:22px;border-top:1px solid var(--border)}.setup-instructions h4{font-size:var(--font-ui);font-weight:500;margin:0 0 10px}.setup-instructions p{font-size:var(--font-support);line-height:1.8;color:var(--muted)}.setup-instructions code{background:var(--code-inline);padding:2px 4px;border-radius:4px;color:var(--text)}.about-settings{text-align:center}.about-settings>img{width:88px;height:88px;object-fit:contain}.about-settings h3{font-size:var(--font-brand);font-weight:500;margin:9px 0;letter-spacing:-.6px}.version-pill{display:inline-block;color:var(--muted);border:1px solid var(--border);border-radius:5px;padding:3px 7px;font-size:var(--font-support)}.about-settings>p{color:var(--muted);font-size:var(--font-support);line-height:1.85;margin:20px 0}.about-facts{border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:15px 0;text-align:left;max-width:290px;margin:0 auto}.about-facts>span{display:flex;justify-content:space-between;font-size:var(--font-support);padding:7px 0;color:var(--secondary-text)}.about-facts svg{color:var(--green)}.about-settings>p.affiliation-note{font-size:var(--font-support)}.command-dialog{width:580px;max-width:calc(100vw - 60px);margin-top:min(17vh,140px)}.command-dialog .dialog-heading{display:none}.command-search{display:flex;align-items:center;gap:12px;padding:21px;border-bottom:1px solid var(--border);color:var(--muted)}.command-search input{flex:1;border:0;background:transparent;color:var(--text);font-size:var(--font-body);padding:0;box-shadow:none}.command-search input::placeholder{color:var(--placeholder)}.command-results{padding:8px;max-height:360px;overflow:auto}.command-group-heading{padding:8px 12px 4px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}.command-results>button{width:100%;display:flex;align-items:center;gap:13px;padding:12px 13px;border-radius:8px;text-align:left}.command-results>button.selected{background:var(--selected)}.command-results>button>svg{color:var(--muted)}.command-results>button>span{flex:1;min-width:0}.command-results strong{display:block;font-weight:500;font-size:var(--font-ui);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.command-results small{display:block;color:var(--muted);font-size:var(--font-support);margin-top:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.command-dialog footer{display:flex;align-items:center;justify-content:center;gap:20px;font-size:var(--font-caption);color:var(--muted);padding:12px 19px;border-top:1px solid var(--border)}.command-dialog footer>span{display:inline-flex;align-items:center;gap:5px;line-height:1}.command-dialog footer kbd{display:inline-flex;align-items:center;justify-content:center;min-width:22px;height:20px;padding:0 5px;border:1px solid var(--border);border-radius:5px;background:var(--soft-surface);color:var(--secondary-text);font-family:var(--font-family-ui);font-size:11px;font-weight:500;line-height:1}.command-empty{text-align:center;padding:35px 20px;color:var(--muted);font-size:var(--font-ui)}.rename-dialog{width:430px}.rename-dialog form{padding:0 25px 25px}.toast{position:fixed;bottom:45px;left:50%;transform:translate(-50%);max-width:min(650px,calc(100vw - 60px));display:flex;align-items:center;gap:10px;padding:10px 12px 10px 17px;border-radius:11px;border:1px solid var(--strong-border);background:var(--dialog);box-shadow:0 7px 35px #0003;z-index:200;font-size:var(--font-ui);line-height:1.6}.toast.error{border-color:var(--error-border)}.toast.error>svg{color:var(--red)}.toast.success>svg{color:var(--green)}.toast>span{flex:1;overflow-wrap:anywhere}.workspace-page{overflow:auto;flex:1;min-height:0;padding:48px 50px 30px;position:relative}.page-heading{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:36px}.page-heading h1,.page-empty h1{font-family:var(--font-family-ui);font-size:var(--font-page);font-weight:400;letter-spacing:-.8px;margin:12px 0}.page-heading p{display:flex;align-items:center;gap:6px;color:var(--muted);margin:0;font-size:var(--font-ui);line-height:1.7}.page-heading>svg{color:var(--muted)}.project-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(235px,1fr));gap:16px}.project-card{background:var(--glass);border:1px solid var(--border);border-radius:13px;text-align:left;padding:22px;min-height:205px;transition:background .2s,transform .2s}.project-card:hover{background:var(--hover);transform:translateY(-2px)}.project-card-top{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:17px}.project-card-icon{display:inline-flex;padding:12px;border-radius:12px;background:var(--soft-surface);color:var(--accent)}.project-git-pills{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:5px}.project-git-pill{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:999px;border:1px solid var(--border);background:var(--soft-surface);font-size:11px;color:var(--secondary-text);max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.project-git-pill.clean{color:var(--green)}.project-git-pill.dirty{color:var(--warning)}.project-card h2{font-size:var(--font-title);font-weight:500;margin:0 0 8px}.project-card p{font-family:var(--font-family-code);font-size:var(--font-support);color:var(--muted);overflow-wrap:anywhere;line-height:1.7}.project-card footer{display:flex;justify-content:space-between;color:var(--muted);font-size:var(--font-support);margin-top:20px;padding-top:15px;border-top:1px solid var(--border)}.add-project{border-style:dashed;background:transparent;display:flex;align-items:center;justify-content:center;flex-direction:column;color:var(--muted)}.add-project h2{margin-top:17px;font-size:var(--font-ui)}.add-project p{font-family:inherit;font-size:var(--font-support)}.page-footnote{font-size:var(--font-support);color:var(--muted);line-height:1.7;margin:28px 0 0}.page-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.page-empty>svg{color:var(--accent);margin-bottom:15px}.page-empty>p{font-size:var(--font-ui);line-height:1.8;color:var(--muted);max-width:360px}.page-empty .button{margin-top:17px}.files-page{display:flex;flex-direction:column}.files-page .page-heading{margin-bottom:22px}.files-breadcrumbs{display:flex;align-items:center;flex-wrap:wrap;gap:5px;color:var(--muted);font-size:var(--font-support);margin-top:6px}.breadcrumb-part{display:inline-flex;align-items:center;gap:5px}.breadcrumb-segment{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border-radius:6px;color:var(--secondary-text);font-size:var(--font-support);transition:background-color .16s ease,color .16s ease}button.breadcrumb-segment:hover{background:var(--hover);color:var(--text)}.breadcrumb-segment.current{color:var(--text);font-weight:500;background:var(--soft-surface)}.file-browser{flex:1;display:grid;grid-template-columns:minmax(220px,31%) minmax(0,1fr);min-height:240px;border:1px solid var(--border);border-radius:15px;background:var(--glass);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);box-shadow:var(--composer-shadow);overflow:hidden}.file-browser-sidebar{border-right:1px solid var(--border);display:flex;flex-direction:column;min-height:0;min-width:0;background:var(--soft-surface)}.file-search-bar{padding:12px 12px 10px;border-bottom:1px solid var(--faint-border);flex-shrink:0}.file-search{display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;border:1px solid var(--border);background:var(--input);color:var(--muted);transition:border-color .18s ease,box-shadow .18s ease}.file-search:focus-within{border-color:var(--focus);box-shadow:0 0 0 2px var(--focus-soft)}.file-search input{width:100%;background:transparent;border:0;color:var(--text);font-size:var(--font-support);box-shadow:none}.file-search input::placeholder{color:var(--placeholder)}.file-search-clear{display:inline-flex;align-items:center;justify-content:center;padding:2px;border-radius:4px;color:var(--muted)}.file-search-clear:hover{background:var(--hover);color:var(--text)}.file-browser-list{flex:1;min-height:0;overflow-y:auto;padding:8px 10px}.file-row{display:flex;width:100%;align-items:center;gap:9px;text-align:left;padding:8px 10px;margin-bottom:2px;border-radius:8px;font-size:var(--font-support);color:var(--secondary-text);transition:background-color .16s ease,color .16s ease}.file-row>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.file-icon{color:var(--muted);flex-shrink:0;transition:color .16s ease}.file-icon.folder{color:var(--accent)}.file-row-chevron{color:var(--muted);opacity:.65;transition:transform .16s ease}.file-row:hover .file-row-chevron{transform:translate(2px);opacity:1}.file-row:hover{background:var(--hover);color:var(--text)}.file-row.selected{background:var(--selected);color:var(--text);font-weight:500}.file-row.selected .file-icon,.file-row:hover .file-icon{color:var(--accent)}.parent-folder{color:var(--muted);font-size:var(--font-support);margin-bottom:6px;border-bottom:1px solid var(--faint-border);border-radius:8px 8px 0 0}.file-preview{display:flex;flex-direction:column;min-width:0;min-height:0;overflow:hidden;background:var(--code-background)}.file-preview>header{display:flex;gap:12px;padding:11px 18px;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border);background:var(--soft-surface);font-size:var(--font-support);color:var(--muted)}.file-preview-title{display:flex;align-items:center;gap:8px;min-width:0;color:var(--text);font-weight:500}.file-preview-title>svg{color:var(--accent)}.file-preview-title>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.file-preview-title>small{font-size:11px;font-weight:400;color:var(--muted);padding:2px 7px;border-radius:999px;border:1px solid var(--border);background:var(--soft-surface);flex-shrink:0}.file-ask-button.text-button{font-size:var(--font-support);white-space:nowrap;padding:5px 10px;border-radius:7px;border:1px solid var(--border);background:var(--surface);color:var(--text);text-decoration:none;transition:background-color .16s ease,border-color .16s ease}.file-ask-button.text-button:hover{background:var(--hover);border-color:var(--strong-border);text-decoration:none}.file-preview>pre{margin:0;overflow:auto;font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.85;padding:18px 20px;flex:1}.file-preview-empty{margin:auto;text-align:center;padding:32px 24px;max-width:320px;color:var(--muted)}.file-empty-badge{width:52px;height:52px;border-radius:15px;display:inline-flex;align-items:center;justify-content:center;background:var(--soft-surface);border:1px solid var(--border);color:var(--accent)}.file-preview-empty h3{font-size:var(--font-title);font-weight:500;color:var(--text);margin:16px 0 8px}.file-preview-empty p{font-size:var(--font-support);line-height:1.65;color:var(--muted)}.file-list-message{font-size:var(--font-support);color:var(--muted);padding:14px 10px;line-height:1.7}.file-list-footnote{display:flex;align-items:center;gap:6px;font-size:11.5px;color:var(--muted);padding:9px 14px;border-top:1px solid var(--border);background:var(--soft-surface);flex-shrink:0}.docs-page{width:100%}.docs-container{max-width:850px;width:100%;margin:0 auto}.guides{border:1px solid var(--border);border-radius:14px;background:var(--glass);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);overflow:hidden}.guide-item{border-bottom:1px solid var(--border);transition:background-color .2s ease}.guide-item:last-child{border-bottom:0}.guide-item:hover{background:var(--soft-surface)}.guide-summary{width:100%;display:flex;align-items:center;gap:13px;font-size:var(--font-ui);font-weight:450;padding:19px 20px;text-align:left;color:var(--text);cursor:pointer}.guide-number{font-family:var(--font-family-code);font-size:var(--font-caption);color:var(--muted)}.guide-chevron{margin-left:auto;color:var(--muted);transition:transform .28s cubic-bezier(.22,1,.36,1),color .18s ease}.guide-item.open .guide-chevron{transform:rotate(90deg);color:var(--accent)}.guide-collapse{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .3s cubic-bezier(.22,1,.36,1),opacity .24s cubic-bezier(.22,1,.36,1)}.guide-collapse.open{grid-template-rows:1fr;opacity:1}.guide-collapse-inner{min-height:0;overflow:hidden}.guide-collapse-inner p{margin:0 20px 20px 49px;font-size:var(--font-body);line-height:1.85;color:var(--secondary-text)}.shortcuts-guide{padding:30px 0;max-width:390px}.shortcuts-guide h2{font-size:var(--font-ui);font-weight:500;margin-bottom:16px}.shortcuts-guide div{display:flex;justify-content:space-between;margin:12px 0;color:var(--secondary-text);font-size:var(--font-support)}.shortcuts-guide kbd{padding:2px 6px;border-radius:4px;border:1px solid var(--border)}.fatal-error{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;padding:40px;text-align:center}.fatal-error>img{width:100px}.fatal-error h1{font-family:var(--font-family-ui);font-weight:400}.fatal-error p{line-height:1.8;max-width:480px;color:var(--muted)}.fatal-error pre{margin-bottom:25px;color:var(--red);white-space:pre-wrap}.spin{animation:rotate 1.5s linear infinite}.spinner{height:13px;width:13px;border:1.5px solid currentColor;border-right-color:transparent;border-radius:50%;animation:rotate .8s linear infinite}@keyframes rotate{to{transform:rotate(360deg)}}@keyframes breathe{0%,to{opacity:1}50%{opacity:.45}}:is([data-theme=muse],[data-theme=plush]) .muse-mark{filter:brightness(0) invert(1)}:is([data-theme=muse],[data-theme=plush]) .sidebar{box-shadow:inset -1px 0 #7eadff0a}:is([data-theme=muse],[data-theme=plush]) .sidebar-titlebar{color:#b8d2ff}:is([data-theme=muse],[data-theme=plush]) .desktop-tag{opacity:.6}:is([data-theme=muse],[data-theme=plush]) .main-nav button.selected>svg{filter:drop-shadow(0 0 5px #8cd2ff99)}:is([data-theme=muse],[data-theme=plush]) .chat-brand-background{opacity:calc(var(--background-presence) * .95);filter:drop-shadow(0 1px 0 #5db2ff24)}:is([data-theme=muse],[data-theme=plush]) .welcome-content{padding:0;position:absolute;bottom:15px;left:50%;transform:translate(-50%)}:is([data-theme=muse],[data-theme=plush]) .welcome-kicker,:is([data-theme=muse],[data-theme=plush]) .welcome h1,:is([data-theme=muse],[data-theme=plush]) .welcome-subtitle,:is([data-theme=muse],[data-theme=plush]) .project-local{display:none}:is([data-theme=muse],[data-theme=plush]) .welcome-project{justify-content:flex-start}:is([data-theme=muse],[data-theme=plush]) .project-chip{background:#1e60c129;border-color:#80b8ff22;color:#c4d8fc;font-size:var(--font-support);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:is([data-theme=muse],[data-theme=plush]) .starter-section{display:none}:is([data-theme=muse],[data-theme=plush]) .composer-tools .icon-button{background:#407de350;border:1px solid #80b6ff36;color:#d9e8ff}:is([data-theme=muse],[data-theme=plush]) .select-control{background:#2767c738;border-radius:15px;padding:5px 10px;gap:7px}:is([data-theme=muse],[data-theme=plush]) .composer-tools .muse-select .select-control{min-height:38px;background:#2767c738;border-color:transparent;border-radius:15px;padding:7px 12px;gap:6px}:is([data-theme=muse],[data-theme=plush]) .composer-tools .muse-select .select-control:hover{background:#3578de4d}:is([data-theme=muse],[data-theme=plush]) .send-button:disabled{border:1px solid #8db9ff88;opacity:.9;box-shadow:0 0 18px #287bff22}:is([data-theme=muse],[data-theme=plush]) .composer-footnote kbd{background:#2767c745;border-color:#80b6ff33;color:#d9e8ff}:is([data-theme=muse],[data-theme=plush]) .main-workspace:has(.transcript,.loading-conversation) .chat-brand-background{opacity:calc(var(--background-presence) * .092)}@media(max-width:1100px){.app-shell{grid-template-columns:244px minmax(0,1fr) 0px}.app-shell.with-inspector{grid-template-columns:244px minmax(0,1fr) 250px}.app-shell.sidebar-hidden{grid-template-columns:0px minmax(0,1fr) 0px}.app-shell.sidebar-hidden.with-inspector{grid-template-columns:0px minmax(0,1fr) 250px}.sidebar{width:244px}.inspector{width:250px}.starter-arrow,.statusbar-motto,.local-pill{display:none}.welcome-content,.starter-section,.composer-dock,.transcript{width:calc(100% - 64px)}.with-inspector .welcome-content,.with-inspector .starter-section,.with-inspector .composer-dock,.with-inspector .transcript{width:calc(100% - 38px)}.starter-card{padding:14px 10px;gap:7px;flex-direction:column}.starter-card small{font-size:var(--font-support);white-space:normal}.with-inspector .starter-grid{grid-template-columns:1fr;gap:5px}.with-inspector .starter-card{flex-direction:row;padding:10px;align-items:center}.with-inspector .starter-card small{display:none}.with-inspector .welcome-subtitle{max-width:220px}.with-inspector .welcome-subtitle br{display:none}.with-inspector .composer-footnote>span:first-child{display:none}.with-inspector .effort-select{display:none}.with-inspector .welcome-content{padding-top:40px}.workspace-page{padding:36px 28px}.window-tools{gap:2px}}@media(max-height:780px){.sidebar-companion{height:54px}.main-nav{gap:2px;padding-bottom:7px}.main-nav button{padding:8px 13px}.brand{padding-bottom:12px}:is([data-theme=muse],[data-theme=plush]) .brand{padding-bottom:12px}.sidebar-primary{padding-bottom:3px}.welcome-content{padding-top:35px}.welcome h1{font-size:38px}.welcome-kicker{margin-bottom:17px}.welcome-subtitle{margin-bottom:18px}.starter-section{padding-top:12px;margin-bottom:15px}.starter-card{padding-top:12px;padding-bottom:12px}.composer-dock{padding-bottom:11px}}@media(max-height:740px){.sidebar-companion{display:none}.main-nav{display:grid;grid-template-columns:repeat(5,1fr);gap:3px}.main-nav button{justify-content:center;padding:10px 0}.main-nav button>span{display:none}}@media(max-height:660px){.sidebar-companion{display:none}.sidebar-empty{padding-top:5px}.welcome{min-height:260px}.welcome-content{padding-top:20px}.welcome h1{font-size:33px;margin-bottom:12px}.welcome-subtitle{font-size:var(--font-body);margin-bottom:12px}.welcome-kicker{margin-bottom:11px}.starter-label{display:none}.composer textarea{min-height:43px}.composer{padding-top:13px}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}[data-reduce-motion=true] *,[data-reduce-motion=true] *:before,[data-reduce-motion=true] *:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}[data-theme=plush] .chat-brand-background{background-image:linear-gradient(0deg,#06256588,transparent 40%),url(/themes/plush.png);background-size:cover;background-position:center right;opacity:var(--background-presence);filter:none}[data-theme=plush] .main-workspace:has(.transcript,.loading-conversation) .chat-brand-background{opacity:calc(var(--background-presence) * .09)}.conversation-group-label{width:100%;display:inline-flex;align-items:center;gap:6px;padding:5px 10px;margin:4px 0 2px;border-radius:6px;font-size:var(--font-caption);font-weight:600;color:var(--muted);text-align:left;transition:background-color .18s ease,color .18s ease}.conversation-group-label:hover{background:var(--hover);color:var(--text)}.conversation-group-label .section-chevron{opacity:0}.conversation-group-label:hover .section-chevron,.conversation-group-label .section-chevron.collapsed{opacity:.75}.conversation-copy{min-width:0;flex:1;display:flex;flex-direction:column;gap:3px}.conversation-copy .conversation-title{flex:none;font-weight:500}.conversation-project{font-size:var(--font-caption);color:var(--muted);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.history-status{display:flex;align-items:center;gap:8px;padding:12px 10px;color:var(--muted);font-size:var(--font-support)}.history-error{padding:12px 10px;font-size:var(--font-support);color:var(--error-text)}.history-error p{margin-bottom:8px}.muse-select{min-width:0}.muse-select .select-control{width:100%;font:inherit;font-size:var(--font-support);cursor:pointer;border:0;background:transparent}.select-value{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.model-select .select-value{max-width:178px}.select-chevron{flex:0 0 auto;margin-left:auto;opacity:.7;transition:transform .22s cubic-bezier(.22,1,.36,1)}.select-control[aria-expanded=true] .select-chevron{transform:rotate(180deg)}.select-control[aria-expanded=true]{background:var(--selected)}.select-control:disabled{cursor:default;opacity:.55}.project-switcher .muse-select{flex:1}.project-switcher .select-control{min-height:32px;padding:6px 10px;gap:10px;border-radius:8px;border:1px solid var(--border);background:var(--soft-surface);text-align:left}.project-switcher .select-control:hover{background:var(--hover);border-color:var(--strong-border);color:var(--text)}.project-switcher .select-control:hover .sidebar-item-icon{color:var(--text)}.select-popover{position:fixed;inset:auto;margin:0;padding:6px;max-width:calc(100vw - 16px);overflow-y:auto;border-radius:14px;border:1px solid var(--border);color:var(--text);background:var(--dialog);box-shadow:0 16px 48px #0004,inset 0 1px #ffffff10;font-size:var(--font-ui)}.select-heading{padding:7px 10px 9px;font-size:var(--font-support);color:var(--muted)}.select-option{display:flex;align-items:center;gap:9px;padding:9px 10px;border-radius:8px;cursor:pointer;white-space:nowrap;transition:background-color .14s ease}.select-option.highlighted{background:var(--selected)}.select-option[aria-selected=true]{color:var(--accent)}.select-option span{overflow:hidden;text-overflow:ellipsis}:is([data-theme=muse],[data-theme=plush]) .muse-select .select-control{background:#2767c738;padding:6px 12px}:is([data-theme=muse],[data-theme=plush]) .project-switcher .select-control{background:var(--soft-surface);padding:6px 10px}:is([data-theme=muse],[data-theme=plush]) .project-switcher .select-control:hover{background:var(--hover)}:is([data-theme=muse],[data-theme=plush]) .select-option[aria-selected=true]{color:#e3edff}.voice-control{display:flex;align-items:center}.voice-control.recording .icon-button{color:#e85d6f}.voice-status{position:absolute;bottom:calc(100% + 10px);left:0;display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:12px;border:1px solid var(--border);background:var(--dialog);color:var(--text);font-size:var(--font-support);box-shadow:0 8px 28px #0002}.voice-waveform{display:inline-flex;align-items:center;gap:2.5px;height:14px}.voice-wave-bar{width:2.5px;height:14px;border-radius:999px;background:#e85d6f;transform-origin:center;transition:transform .1s ease}.voice-status .icon-button{width:25px;height:25px}.composer.is-dragging{border-color:var(--focus);box-shadow:var(--composer-shadow),0 0 0 3px var(--focus-soft)}.mention-menu button{gap:10px}.mention-menu strong{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.slash-menu{position:absolute;bottom:calc(100% + 10px);left:0;right:0;max-height:290px;overflow-y:auto;padding:7px;z-index:8;background:var(--dialog);border:1px solid var(--strong-border);border-radius:15px;box-shadow:0 12px 32px #0003}.slash-menu button{display:flex;align-items:center;gap:18px;width:100%;padding:10px 12px;border-radius:8px;text-align:left;font-size:var(--font-ui)}.slash-menu button[aria-selected=true],.slash-menu button:hover{background:var(--selected)}.slash-menu strong{min-width:72px;font-weight:500}.slash-menu span{color:var(--muted);font-size:var(--font-support)}';
class vO extends F.Component {
  state = { error: null };
  static getDerivedStateFromError(i) {
    return { error: i.message };
  }
  render() {
    return this.state.error ? /* @__PURE__ */ h.jsxs("div", { className: "fatal-error", children: [
      /* @__PURE__ */ h.jsx("img", { src: "./icon.png", alt: "Muse" }),
      /* @__PURE__ */ h.jsx("h1", { children: "The workspace needs to reload." }),
      /* @__PURE__ */ h.jsx("p", { children: "The interface hit an unexpected problem. Your Muse conversations are still saved by the CLI." }),
      /* @__PURE__ */ h.jsx("pre", { children: this.state.error }),
      /* @__PURE__ */ h.jsx("button", { className: "button primary", onClick: () => location.reload(), children: "Reopen the workspace" })
    ] }) : this.props.children;
  }
}
const kO = yO;
function SO(t) {
  museMountRoot = t;
  const i = dS.createRoot(t);
  return i.render(
    /* @__PURE__ */ h.jsx(vO, { children: /* @__PURE__ */ h.jsx(xO, {}) })
  ), () => i.unmount();
}
export {
  SO as mount,
  kO as styles
};
