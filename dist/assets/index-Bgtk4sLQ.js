(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) c(s);
  new MutationObserver((s) => {
    for (const d of s)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(s) {
    const d = {};
    return (
      s.integrity && (d.integrity = s.integrity),
      s.referrerPolicy && (d.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function c(s) {
    if (s.ep) return;
    s.ep = !0;
    const d = f(s);
    fetch(s.href, d);
  }
})();
function Cm(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var mf = { exports: {} },
  ie = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qh;
function Wp() {
  if (Qh) return ie;
  Qh = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    f = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    O = Symbol.iterator;
  function w(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (O && S[O]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    B = {};
  function x(S, G, I) {
    (this.props = S),
      (this.context = G),
      (this.refs = B),
      (this.updater = I || C);
  }
  (x.prototype.isReactComponent = {}),
    (x.prototype.setState = function (S, G) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, S, G, "setState");
    }),
    (x.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function H() {}
  H.prototype = x.prototype;
  function X(S, G, I) {
    (this.props = S),
      (this.context = G),
      (this.refs = B),
      (this.updater = I || C);
  }
  var L = (X.prototype = new H());
  (L.constructor = X), R(L, x.prototype), (L.isPureReactComponent = !0);
  var K = Array.isArray,
    Q = { H: null, A: null, T: null, S: null },
    te = Object.prototype.hasOwnProperty;
  function fe(S, G, I, W, k, me) {
    return (
      (I = me.ref),
      { $$typeof: a, type: S, key: G, ref: I !== void 0 ? I : null, props: me }
    );
  }
  function de(S, G) {
    return fe(S.type, G, void 0, void 0, void 0, S.props);
  }
  function Z(S) {
    return typeof S == "object" && S !== null && S.$$typeof === a;
  }
  function le(S) {
    var G = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (I) {
        return G[I];
      })
    );
  }
  var Ve = /\/+/g;
  function Kt(S, G) {
    return typeof S == "object" && S !== null && S.key != null
      ? le("" + S.key)
      : G.toString(36);
  }
  function Ht() {}
  function kt(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(Ht, Ht)
            : ((S.status = "pending"),
              S.then(
                function (G) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = G));
                },
                function (G) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = G));
                }
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function nt(S, G, I, W, k) {
    var me = typeof S;
    (me === "undefined" || me === "boolean") && (S = null);
    var re = !1;
    if (S === null) re = !0;
    else
      switch (me) {
        case "bigint":
        case "string":
        case "number":
          re = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case a:
            case i:
              re = !0;
              break;
            case b:
              return (re = S._init), nt(re(S._payload), G, I, W, k);
          }
      }
    if (re)
      return (
        (k = k(S)),
        (re = W === "" ? "." + Kt(S, 0) : W),
        K(k)
          ? ((I = ""),
            re != null && (I = re.replace(Ve, "$&/") + "/"),
            nt(k, G, I, "", function (Ue) {
              return Ue;
            }))
          : k != null &&
            (Z(k) &&
              (k = de(
                k,
                I +
                  (k.key == null || (S && S.key === k.key)
                    ? ""
                    : ("" + k.key).replace(Ve, "$&/") + "/") +
                  re
              )),
            G.push(k)),
        1
      );
    re = 0;
    var Ie = W === "" ? "." : W + ":";
    if (K(S))
      for (var ve = 0; ve < S.length; ve++)
        (W = S[ve]), (me = Ie + Kt(W, ve)), (re += nt(W, G, I, me, k));
    else if (((ve = w(S)), typeof ve == "function"))
      for (S = ve.call(S), ve = 0; !(W = S.next()).done; )
        (W = W.value), (me = Ie + Kt(W, ve++)), (re += nt(W, G, I, me, k));
    else if (me === "object") {
      if (typeof S.then == "function") return nt(kt(S), G, I, W, k);
      throw (
        ((G = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (G === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : G) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return re;
  }
  function V(S, G, I) {
    if (S == null) return S;
    var W = [],
      k = 0;
    return (
      nt(S, W, "", "", function (me) {
        return G.call(I, me, k++);
      }),
      W
    );
  }
  function ae(S) {
    if (S._status === -1) {
      var G = S._result;
      (G = G()),
        G.then(
          function (I) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = I));
          },
          function (I) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = I));
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = G));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var ee =
    typeof reportError == "function"
      ? reportError
      : function (S) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var G = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof S == "object" &&
                S !== null &&
                typeof S.message == "string"
                  ? String(S.message)
                  : String(S),
              error: S,
            });
            if (!window.dispatchEvent(G)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", S);
            return;
          }
          console.error(S);
        };
  function Te() {}
  return (
    (ie.Children = {
      map: V,
      forEach: function (S, G, I) {
        V(
          S,
          function () {
            G.apply(this, arguments);
          },
          I
        );
      },
      count: function (S) {
        var G = 0;
        return (
          V(S, function () {
            G++;
          }),
          G
        );
      },
      toArray: function (S) {
        return (
          V(S, function (G) {
            return G;
          }) || []
        );
      },
      only: function (S) {
        if (!Z(S))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return S;
      },
    }),
    (ie.Component = x),
    (ie.Fragment = f),
    (ie.Profiler = s),
    (ie.PureComponent = X),
    (ie.StrictMode = c),
    (ie.Suspense = g),
    (ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q),
    (ie.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (ie.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (ie.cloneElement = function (S, G, I) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + "."
        );
      var W = R({}, S.props),
        k = S.key,
        me = void 0;
      if (G != null)
        for (re in (G.ref !== void 0 && (me = void 0),
        G.key !== void 0 && (k = "" + G.key),
        G))
          !te.call(G, re) ||
            re === "key" ||
            re === "__self" ||
            re === "__source" ||
            (re === "ref" && G.ref === void 0) ||
            (W[re] = G[re]);
      var re = arguments.length - 2;
      if (re === 1) W.children = I;
      else if (1 < re) {
        for (var Ie = Array(re), ve = 0; ve < re; ve++)
          Ie[ve] = arguments[ve + 2];
        W.children = Ie;
      }
      return fe(S.type, k, void 0, void 0, me, W);
    }),
    (ie.createContext = function (S) {
      return (
        (S = {
          $$typeof: h,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: d, _context: S }),
        S
      );
    }),
    (ie.createElement = function (S, G, I) {
      var W,
        k = {},
        me = null;
      if (G != null)
        for (W in (G.key !== void 0 && (me = "" + G.key), G))
          te.call(G, W) &&
            W !== "key" &&
            W !== "__self" &&
            W !== "__source" &&
            (k[W] = G[W]);
      var re = arguments.length - 2;
      if (re === 1) k.children = I;
      else if (1 < re) {
        for (var Ie = Array(re), ve = 0; ve < re; ve++)
          Ie[ve] = arguments[ve + 2];
        k.children = Ie;
      }
      if (S && S.defaultProps)
        for (W in ((re = S.defaultProps), re))
          k[W] === void 0 && (k[W] = re[W]);
      return fe(S, me, void 0, void 0, null, k);
    }),
    (ie.createRef = function () {
      return { current: null };
    }),
    (ie.forwardRef = function (S) {
      return { $$typeof: y, render: S };
    }),
    (ie.isValidElement = Z),
    (ie.lazy = function (S) {
      return { $$typeof: b, _payload: { _status: -1, _result: S }, _init: ae };
    }),
    (ie.memo = function (S, G) {
      return { $$typeof: m, type: S, compare: G === void 0 ? null : G };
    }),
    (ie.startTransition = function (S) {
      var G = Q.T,
        I = {};
      Q.T = I;
      try {
        var W = S(),
          k = Q.S;
        k !== null && k(I, W),
          typeof W == "object" &&
            W !== null &&
            typeof W.then == "function" &&
            W.then(Te, ee);
      } catch (me) {
        ee(me);
      } finally {
        Q.T = G;
      }
    }),
    (ie.unstable_useCacheRefresh = function () {
      return Q.H.useCacheRefresh();
    }),
    (ie.use = function (S) {
      return Q.H.use(S);
    }),
    (ie.useActionState = function (S, G, I) {
      return Q.H.useActionState(S, G, I);
    }),
    (ie.useCallback = function (S, G) {
      return Q.H.useCallback(S, G);
    }),
    (ie.useContext = function (S) {
      return Q.H.useContext(S);
    }),
    (ie.useDebugValue = function () {}),
    (ie.useDeferredValue = function (S, G) {
      return Q.H.useDeferredValue(S, G);
    }),
    (ie.useEffect = function (S, G) {
      return Q.H.useEffect(S, G);
    }),
    (ie.useId = function () {
      return Q.H.useId();
    }),
    (ie.useImperativeHandle = function (S, G, I) {
      return Q.H.useImperativeHandle(S, G, I);
    }),
    (ie.useInsertionEffect = function (S, G) {
      return Q.H.useInsertionEffect(S, G);
    }),
    (ie.useLayoutEffect = function (S, G) {
      return Q.H.useLayoutEffect(S, G);
    }),
    (ie.useMemo = function (S, G) {
      return Q.H.useMemo(S, G);
    }),
    (ie.useOptimistic = function (S, G) {
      return Q.H.useOptimistic(S, G);
    }),
    (ie.useReducer = function (S, G, I) {
      return Q.H.useReducer(S, G, I);
    }),
    (ie.useRef = function (S) {
      return Q.H.useRef(S);
    }),
    (ie.useState = function (S) {
      return Q.H.useState(S);
    }),
    (ie.useSyncExternalStore = function (S, G, I) {
      return Q.H.useSyncExternalStore(S, G, I);
    }),
    (ie.useTransition = function () {
      return Q.H.useTransition();
    }),
    (ie.version = "19.0.0"),
    ie
  );
}
var Vh;
function Zi() {
  return Vh || ((Vh = 1), (mf.exports = Wp())), mf.exports;
}
var N = Zi();
const Y = Cm(N);
var yf = { exports: {} },
  eu = {},
  pf = { exports: {} },
  gf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zh;
function Pp() {
  return (
    Zh ||
      ((Zh = 1),
      (function (a) {
        function i(V, ae) {
          var ee = V.length;
          V.push(ae);
          e: for (; 0 < ee; ) {
            var Te = (ee - 1) >>> 1,
              S = V[Te];
            if (0 < s(S, ae)) (V[Te] = ae), (V[ee] = S), (ee = Te);
            else break e;
          }
        }
        function f(V) {
          return V.length === 0 ? null : V[0];
        }
        function c(V) {
          if (V.length === 0) return null;
          var ae = V[0],
            ee = V.pop();
          if (ee !== ae) {
            V[0] = ee;
            e: for (var Te = 0, S = V.length, G = S >>> 1; Te < G; ) {
              var I = 2 * (Te + 1) - 1,
                W = V[I],
                k = I + 1,
                me = V[k];
              if (0 > s(W, ee))
                k < S && 0 > s(me, W)
                  ? ((V[Te] = me), (V[k] = ee), (Te = k))
                  : ((V[Te] = W), (V[I] = ee), (Te = I));
              else if (k < S && 0 > s(me, ee))
                (V[Te] = me), (V[k] = ee), (Te = k);
              else break e;
            }
          }
          return ae;
        }
        function s(V, ae) {
          var ee = V.sortIndex - ae.sortIndex;
          return ee !== 0 ? ee : V.id - ae.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            y = h.now();
          a.unstable_now = function () {
            return h.now() - y;
          };
        }
        var g = [],
          m = [],
          b = 1,
          O = null,
          w = 3,
          C = !1,
          R = !1,
          B = !1,
          x = typeof setTimeout == "function" ? setTimeout : null,
          H = typeof clearTimeout == "function" ? clearTimeout : null,
          X = typeof setImmediate < "u" ? setImmediate : null;
        function L(V) {
          for (var ae = f(m); ae !== null; ) {
            if (ae.callback === null) c(m);
            else if (ae.startTime <= V)
              c(m), (ae.sortIndex = ae.expirationTime), i(g, ae);
            else break;
            ae = f(m);
          }
        }
        function K(V) {
          if (((B = !1), L(V), !R))
            if (f(g) !== null) (R = !0), kt();
            else {
              var ae = f(m);
              ae !== null && nt(K, ae.startTime - V);
            }
        }
        var Q = !1,
          te = -1,
          fe = 5,
          de = -1;
        function Z() {
          return !(a.unstable_now() - de < fe);
        }
        function le() {
          if (Q) {
            var V = a.unstable_now();
            de = V;
            var ae = !0;
            try {
              e: {
                (R = !1), B && ((B = !1), H(te), (te = -1)), (C = !0);
                var ee = w;
                try {
                  t: {
                    for (
                      L(V), O = f(g);
                      O !== null && !(O.expirationTime > V && Z());

                    ) {
                      var Te = O.callback;
                      if (typeof Te == "function") {
                        (O.callback = null), (w = O.priorityLevel);
                        var S = Te(O.expirationTime <= V);
                        if (((V = a.unstable_now()), typeof S == "function")) {
                          (O.callback = S), L(V), (ae = !0);
                          break t;
                        }
                        O === f(g) && c(g), L(V);
                      } else c(g);
                      O = f(g);
                    }
                    if (O !== null) ae = !0;
                    else {
                      var G = f(m);
                      G !== null && nt(K, G.startTime - V), (ae = !1);
                    }
                  }
                  break e;
                } finally {
                  (O = null), (w = ee), (C = !1);
                }
                ae = void 0;
              }
            } finally {
              ae ? Ve() : (Q = !1);
            }
          }
        }
        var Ve;
        if (typeof X == "function")
          Ve = function () {
            X(le);
          };
        else if (typeof MessageChannel < "u") {
          var Kt = new MessageChannel(),
            Ht = Kt.port2;
          (Kt.port1.onmessage = le),
            (Ve = function () {
              Ht.postMessage(null);
            });
        } else
          Ve = function () {
            x(le, 0);
          };
        function kt() {
          Q || ((Q = !0), Ve());
        }
        function nt(V, ae) {
          te = x(function () {
            V(a.unstable_now());
          }, ae);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (V) {
            V.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            R || C || ((R = !0), kt());
          }),
          (a.unstable_forceFrameRate = function (V) {
            0 > V || 125 < V
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (fe = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return f(g);
          }),
          (a.unstable_next = function (V) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var ae = 3;
                break;
              default:
                ae = w;
            }
            var ee = w;
            w = ae;
            try {
              return V();
            } finally {
              w = ee;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (V, ae) {
            switch (V) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                V = 3;
            }
            var ee = w;
            w = V;
            try {
              return ae();
            } finally {
              w = ee;
            }
          }),
          (a.unstable_scheduleCallback = function (V, ae, ee) {
            var Te = a.unstable_now();
            switch (
              (typeof ee == "object" && ee !== null
                ? ((ee = ee.delay),
                  (ee = typeof ee == "number" && 0 < ee ? Te + ee : Te))
                : (ee = Te),
              V)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = ee + S),
              (V = {
                id: b++,
                callback: ae,
                priorityLevel: V,
                startTime: ee,
                expirationTime: S,
                sortIndex: -1,
              }),
              ee > Te
                ? ((V.sortIndex = ee),
                  i(m, V),
                  f(g) === null &&
                    V === f(m) &&
                    (B ? (H(te), (te = -1)) : (B = !0), nt(K, ee - Te)))
                : ((V.sortIndex = S), i(g, V), R || C || ((R = !0), kt())),
              V
            );
          }),
          (a.unstable_shouldYield = Z),
          (a.unstable_wrapCallback = function (V) {
            var ae = w;
            return function () {
              var ee = w;
              w = ae;
              try {
                return V.apply(this, arguments);
              } finally {
                w = ee;
              }
            };
          });
      })(gf)),
    gf
  );
}
var Kh;
function Ip() {
  return Kh || ((Kh = 1), (pf.exports = Pp())), pf.exports;
}
var vf = { exports: {} },
  We = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kh;
function eg() {
  if (kh) return We;
  kh = 1;
  var a = Zi();
  function i(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        m += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f() {}
  var c = {
      d: {
        f,
        r: function () {
          throw Error(i(522));
        },
        D: f,
        C: f,
        L: f,
        m: f,
        X: f,
        S: f,
        M: f,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function d(g, m, b) {
    var O =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: O == null ? null : "" + O,
      children: g,
      containerInfo: m,
      implementation: b,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(g, m) {
    if (g === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (We.createPortal = function (g, m) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(i(299));
      return d(g, m, null, b);
    }),
    (We.flushSync = function (g) {
      var m = h.T,
        b = c.p;
      try {
        if (((h.T = null), (c.p = 2), g)) return g();
      } finally {
        (h.T = m), (c.p = b), c.d.f();
      }
    }),
    (We.preconnect = function (g, m) {
      typeof g == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        c.d.C(g, m));
    }),
    (We.prefetchDNS = function (g) {
      typeof g == "string" && c.d.D(g);
    }),
    (We.preinit = function (g, m) {
      if (typeof g == "string" && m && typeof m.as == "string") {
        var b = m.as,
          O = y(b, m.crossOrigin),
          w = typeof m.integrity == "string" ? m.integrity : void 0,
          C = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        b === "style"
          ? c.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: O,
              integrity: w,
              fetchPriority: C,
            })
          : b === "script" &&
            c.d.X(g, {
              crossOrigin: O,
              integrity: w,
              fetchPriority: C,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (We.preinitModule = function (g, m) {
      if (typeof g == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var b = y(m.as, m.crossOrigin);
            c.d.M(g, {
              crossOrigin: b,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && c.d.M(g);
    }),
    (We.preload = function (g, m) {
      if (
        typeof g == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var b = m.as,
          O = y(b, m.crossOrigin);
        c.d.L(g, b, {
          crossOrigin: O,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (We.preloadModule = function (g, m) {
      if (typeof g == "string")
        if (m) {
          var b = y(m.as, m.crossOrigin);
          c.d.m(g, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: b,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else c.d.m(g);
    }),
    (We.requestFormReset = function (g) {
      c.d.r(g);
    }),
    (We.unstable_batchedUpdates = function (g, m) {
      return g(m);
    }),
    (We.useFormState = function (g, m, b) {
      return h.H.useFormState(g, m, b);
    }),
    (We.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (We.version = "19.0.0"),
    We
  );
}
var Jh;
function tg() {
  if (Jh) return vf.exports;
  Jh = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), (vf.exports = eg()), vf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $h;
function ng() {
  if ($h) return eu;
  $h = 1;
  var a = Ip(),
    i = Zi(),
    f = tg();
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var d = Symbol.for("react.element"),
    h = Symbol.for("react.transitional.element"),
    y = Symbol.for("react.portal"),
    g = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    b = Symbol.for("react.profiler"),
    O = Symbol.for("react.provider"),
    w = Symbol.for("react.consumer"),
    C = Symbol.for("react.context"),
    R = Symbol.for("react.forward_ref"),
    B = Symbol.for("react.suspense"),
    x = Symbol.for("react.suspense_list"),
    H = Symbol.for("react.memo"),
    X = Symbol.for("react.lazy"),
    L = Symbol.for("react.offscreen"),
    K = Symbol.for("react.memo_cache_sentinel"),
    Q = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Q && e[Q]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var fe = Symbol.for("react.client.reference");
  function de(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === fe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case g:
        return "Fragment";
      case y:
        return "Portal";
      case b:
        return "Profiler";
      case m:
        return "StrictMode";
      case B:
        return "Suspense";
      case x:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case C:
          return (e.displayName || "Context") + ".Provider";
        case w:
          return (e._context.displayName || "Context") + ".Consumer";
        case R:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case H:
          return (
            (t = e.displayName || null), t !== null ? t : de(e.type) || "Memo"
          );
        case X:
          (t = e._payload), (e = e._init);
          try {
            return de(e(t));
          } catch {}
      }
    return null;
  }
  var Z = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    le = Object.assign,
    Ve,
    Kt;
  function Ht(e) {
    if (Ve === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (Ve = (t && t[1]) || ""),
          (Kt =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Ve +
      e +
      Kt
    );
  }
  var kt = !1;
  function nt(e, t) {
    if (!e || kt) return "";
    kt = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var j = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(j.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(j, []);
                } catch (M) {
                  var D = M;
                }
                Reflect.construct(e, [], j);
              } else {
                try {
                  j.call();
                } catch (M) {
                  D = M;
                }
                e.call(j.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                D = M;
              }
              (j = e()) &&
                typeof j.catch == "function" &&
                j.catch(function () {});
            }
          } catch (M) {
            if (M && D && typeof M.stack == "string") return [M.stack, D.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = l.DetermineComponentFrameRoot(),
        o = r[0],
        p = r[1];
      if (o && p) {
        var v = o.split(`
`),
          T = p.split(`
`);
        for (
          u = l = 0;
          l < v.length && !v[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; u < T.length && !T[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (l === v.length || u === T.length)
          for (
            l = v.length - 1, u = T.length - 1;
            1 <= l && 0 <= u && v[l] !== T[u];

          )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (v[l] !== T[u]) {
            if (l !== 1 || u !== 1)
              do
                if ((l--, u--, 0 > u || v[l] !== T[u])) {
                  var U =
                    `
` + v[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      U.includes("<anonymous>") &&
                      (U = U.replace("<anonymous>", e.displayName)),
                    U
                  );
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      (kt = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? Ht(n) : "";
  }
  function V(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ht(e.type);
      case 16:
        return Ht("Lazy");
      case 13:
        return Ht("Suspense");
      case 19:
        return Ht("SuspenseList");
      case 0:
      case 15:
        return (e = nt(e.type, !1)), e;
      case 11:
        return (e = nt(e.type.render, !1)), e;
      case 1:
        return (e = nt(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ae(e) {
    try {
      var t = "";
      do (t += V(e)), (e = e.return);
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function ee(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Te(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function S(e) {
    if (ee(e) !== e) throw Error(c(188));
  }
  function G(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ee(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var u = n.return;
      if (u === null) break;
      var r = u.alternate;
      if (r === null) {
        if (((l = u.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (u.child === r.child) {
        for (r = u.child; r; ) {
          if (r === n) return S(u), e;
          if (r === l) return S(u), t;
          r = r.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== l.return) (n = u), (l = r);
      else {
        for (var o = !1, p = u.child; p; ) {
          if (p === n) {
            (o = !0), (n = u), (l = r);
            break;
          }
          if (p === l) {
            (o = !0), (l = u), (n = r);
            break;
          }
          p = p.sibling;
        }
        if (!o) {
          for (p = r.child; p; ) {
            if (p === n) {
              (o = !0), (n = r), (l = u);
              break;
            }
            if (p === l) {
              (o = !0), (l = r), (n = u);
              break;
            }
            p = p.sibling;
          }
          if (!o) throw Error(c(189));
        }
      }
      if (n.alternate !== l) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function I(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = I(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var W = Array.isArray,
    k = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    me = { pending: !1, data: null, method: null, action: null },
    re = [],
    Ie = -1;
  function ve(e) {
    return { current: e };
  }
  function Ue(e) {
    0 > Ie || ((e.current = re[Ie]), (re[Ie] = null), Ie--);
  }
  function Ae(e, t) {
    Ie++, (re[Ie] = e.current), (e.current = t);
  }
  var Bt = ve(null),
    la = ve(null),
    pn = ve(null),
    pu = ve(null);
  function gu(e, t) {
    switch ((Ae(pn, t), Ae(la, e), Ae(Bt, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? vh(t) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? t.parentNode : t),
          (t = e.tagName),
          (e = e.namespaceURI))
        )
          (e = vh(e)), (t = bh(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Ue(Bt), Ae(Bt, t);
  }
  function pl() {
    Ue(Bt), Ue(la), Ue(pn);
  }
  function ar(e) {
    e.memoizedState !== null && Ae(pu, e);
    var t = Bt.current,
      n = bh(t, e.type);
    t !== n && (Ae(la, e), Ae(Bt, n));
  }
  function vu(e) {
    la.current === e && (Ue(Bt), Ue(la)),
      pu.current === e && (Ue(pu), ($a._currentValue = me));
  }
  var ur = Object.prototype.hasOwnProperty,
    ir = a.unstable_scheduleCallback,
    rr = a.unstable_cancelCallback,
    Dy = a.unstable_shouldYield,
    Cy = a.unstable_requestPaint,
    Lt = a.unstable_now,
    Ny = a.unstable_getCurrentPriorityLevel,
    is = a.unstable_ImmediatePriority,
    rs = a.unstable_UserBlockingPriority,
    bu = a.unstable_NormalPriority,
    zy = a.unstable_LowPriority,
    cs = a.unstable_IdlePriority,
    My = a.log,
    Uy = a.unstable_setDisableYieldValue,
    aa = null,
    rt = null;
  function Hy(e) {
    if (rt && typeof rt.onCommitFiberRoot == "function")
      try {
        rt.onCommitFiberRoot(aa, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function gn(e) {
    if (
      (typeof My == "function" && Uy(e),
      rt && typeof rt.setStrictMode == "function")
    )
      try {
        rt.setStrictMode(aa, e);
      } catch {}
  }
  var ct = Math.clz32 ? Math.clz32 : qy,
    By = Math.log,
    Ly = Math.LN2;
  function qy(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((By(e) / Ly) | 0)) | 0;
  }
  var Su = 128,
    Eu = 4194304;
  function Gn(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return e & 4194176;
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
  function Tu(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var l = 0,
      u = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.warmLanes;
    e = e.finishedLanes !== 0;
    var p = n & 134217727;
    return (
      p !== 0
        ? ((n = p & ~u),
          n !== 0
            ? (l = Gn(n))
            : ((r &= p),
              r !== 0
                ? (l = Gn(r))
                : e || ((o = p & ~o), o !== 0 && (l = Gn(o)))))
        : ((p = n & ~u),
          p !== 0
            ? (l = Gn(p))
            : r !== 0
            ? (l = Gn(r))
            : e || ((o = n & ~o), o !== 0 && (l = Gn(o)))),
      l === 0
        ? 0
        : t !== 0 &&
          t !== l &&
          !(t & u) &&
          ((u = l & -l),
          (o = t & -t),
          u >= o || (u === 32 && (o & 4194176) !== 0))
        ? t
        : l
    );
  }
  function ua(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function jy(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
      case 16:
      case 32:
      case 64:
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
        return t + 5e3;
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
  function fs() {
    var e = Su;
    return (Su <<= 1), !(Su & 4194176) && (Su = 128), e;
  }
  function ss() {
    var e = Eu;
    return (Eu <<= 1), !(Eu & 62914560) && (Eu = 4194304), e;
  }
  function cr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ia(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Yy(e, t, n, l, u, r) {
    var o = e.pendingLanes;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0);
    var p = e.entanglements,
      v = e.expirationTimes,
      T = e.hiddenUpdates;
    for (n = o & ~n; 0 < n; ) {
      var U = 31 - ct(n),
        j = 1 << U;
      (p[U] = 0), (v[U] = -1);
      var D = T[U];
      if (D !== null)
        for (T[U] = null, U = 0; U < D.length; U++) {
          var M = D[U];
          M !== null && (M.lane &= -536870913);
        }
      n &= ~j;
    }
    l !== 0 && os(e, l, 0),
      r !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(o & ~t));
  }
  function os(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - ct(t);
    (e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 4194218));
  }
  function ds(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - ct(n),
        u = 1 << l;
      (u & t) | (e[l] & t) && (e[l] |= t), (n &= ~u);
    }
  }
  function hs(e) {
    return (
      (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function ms() {
    var e = k.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Lh(e.type));
  }
  function Gy(e, t) {
    var n = k.p;
    try {
      return (k.p = e), t();
    } finally {
      k.p = n;
    }
  }
  var vn = Math.random().toString(36).slice(2),
    $e = "__reactFiber$" + vn,
    lt = "__reactProps$" + vn,
    gl = "__reactContainer$" + vn,
    fr = "__reactEvents$" + vn,
    Xy = "__reactListeners$" + vn,
    Qy = "__reactHandles$" + vn,
    ys = "__reactResources$" + vn,
    ra = "__reactMarker$" + vn;
  function sr(e) {
    delete e[$e], delete e[lt], delete e[fr], delete e[Xy], delete e[Qy];
  }
  function Xn(e) {
    var t = e[$e];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[gl] || n[$e])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Th(e); e !== null; ) {
            if ((n = e[$e])) return n;
            e = Th(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function vl(e) {
    if ((e = e[$e] || e[gl])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ca(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function bl(e) {
    var t = e[ys];
    return (
      t ||
        (t = e[ys] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ye(e) {
    e[ra] = !0;
  }
  var ps = new Set(),
    gs = {};
  function Qn(e, t) {
    Sl(e, t), Sl(e + "Capture", t);
  }
  function Sl(e, t) {
    for (gs[e] = t, e = 0; e < t.length; e++) ps.add(t[e]);
  }
  var Jt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Vy = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    vs = {},
    bs = {};
  function Zy(e) {
    return ur.call(bs, e)
      ? !0
      : ur.call(vs, e)
      ? !1
      : Vy.test(e)
      ? (bs[e] = !0)
      : ((vs[e] = !0), !1);
  }
  function Ru(e, t, n) {
    if (Zy(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Ou(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function $t(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  function gt(e) {
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
  function Ss(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ky(e) {
    var t = Ss(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var u = n.get,
        r = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (o) {
            (l = "" + o), r.call(this, o);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (o) {
            l = "" + o;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Au(e) {
    e._valueTracker || (e._valueTracker = Ky(e));
  }
  function Es(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = "";
    return (
      e && (l = Ss(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function _u(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var ky = /[\n"\\]/g;
  function vt(e) {
    return e.replace(ky, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function or(e, t, n, l, u, r, o, p) {
    (e.name = ""),
      o != null &&
      typeof o != "function" &&
      typeof o != "symbol" &&
      typeof o != "boolean"
        ? (e.type = o)
        : e.removeAttribute("type"),
      t != null
        ? o === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + gt(t))
          : e.value !== "" + gt(t) && (e.value = "" + gt(t))
        : (o !== "submit" && o !== "reset") || e.removeAttribute("value"),
      t != null
        ? dr(e, o, gt(t))
        : n != null
        ? dr(e, o, gt(n))
        : l != null && e.removeAttribute("value"),
      u == null && r != null && (e.defaultChecked = !!r),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (e.name = "" + gt(p))
        : e.removeAttribute("name");
  }
  function Ts(e, t, n, l, u, r, o, p) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (e.type = r),
      t != null || n != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || t != null)) return;
      (n = n != null ? "" + gt(n) : ""),
        (t = t != null ? "" + gt(t) : n),
        p || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (l = l ?? u),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = p ? e.checked : !!l),
      (e.defaultChecked = !!l),
      o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (e.name = o);
  }
  function dr(e, t, n) {
    (t === "number" && _u(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function El(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < n.length; u++) t["$" + n[u]] = !0;
      for (n = 0; n < e.length; n++)
        (u = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== u && (e[n].selected = u),
          u && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + gt(n), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === n) {
          (e[u].selected = !0), l && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Rs(e, t, n) {
    if (
      t != null &&
      ((t = "" + gt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + gt(n) : "";
  }
  function Os(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(c(92));
        if (W(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), (t = n);
    }
    (n = gt(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== "" && l !== null && (e.value = l);
  }
  function Tl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Jy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function As(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : l
      ? e.setProperty(t, n)
      : typeof n != "number" || n === 0 || Jy.has(t)
      ? t === "float"
        ? (e.cssFloat = n)
        : (e[t] = ("" + n).trim())
      : (e[t] = n + "px");
  }
  function _s(e, t, n) {
    if (t != null && typeof t != "object") throw Error(c(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
            ? (e.cssFloat = "")
            : (e[l] = ""));
      for (var u in t)
        (l = t[u]), t.hasOwnProperty(u) && n[u] !== l && As(e, u, l);
    } else for (var r in t) t.hasOwnProperty(r) && As(e, r, t[r]);
  }
  function hr(e) {
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
  var $y = new Map([
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
      ["xHeight", "x-height"],
    ]),
    Fy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wu(e) {
    return Fy.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var mr = null;
  function yr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Rl = null,
    Ol = null;
  function ws(e) {
    var t = vl(e);
    if (t && (e = t.stateNode)) {
      var n = e[lt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (or(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + vt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var u = l[lt] || null;
                if (!u) throw Error(c(90));
                or(
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
            for (t = 0; t < n.length; t++)
              (l = n[t]), l.form === e.form && Es(l);
          }
          break e;
        case "textarea":
          Rs(e, n.value, n.defaultValue);
          break e;
        case "select":
          (t = n.value), t != null && El(e, !!n.multiple, t, !1);
      }
    }
  }
  var pr = !1;
  function xs(e, t, n) {
    if (pr) return e(t, n);
    pr = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((pr = !1),
        (Rl !== null || Ol !== null) &&
          (si(), Rl && ((t = Rl), (e = Ol), (Ol = Rl = null), ws(t), e)))
      )
        for (t = 0; t < e.length; t++) ws(e[t]);
    }
  }
  function fa(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[lt] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
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
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(c(231, t, typeof n));
    return n;
  }
  var gr = !1;
  if (Jt)
    try {
      var sa = {};
      Object.defineProperty(sa, "passive", {
        get: function () {
          gr = !0;
        },
      }),
        window.addEventListener("test", sa, sa),
        window.removeEventListener("test", sa, sa);
    } catch {
      gr = !1;
    }
  var bn = null,
    vr = null,
    xu = null;
  function Ds() {
    if (xu) return xu;
    var e,
      t = vr,
      n = t.length,
      l,
      u = "value" in bn ? bn.value : bn.textContent,
      r = u.length;
    for (e = 0; e < n && t[e] === u[e]; e++);
    var o = n - e;
    for (l = 1; l <= o && t[n - l] === u[r - l]; l++);
    return (xu = u.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Du(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Cu() {
    return !0;
  }
  function Cs() {
    return !1;
  }
  function at(e) {
    function t(n, l, u, r, o) {
      (this._reactName = n),
        (this._targetInst = u),
        (this.type = l),
        (this.nativeEvent = r),
        (this.target = o),
        (this.currentTarget = null);
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(r) : r[p]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? Cu
          : Cs),
        (this.isPropagationStopped = Cs),
        this
      );
    }
    return (
      le(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Cu));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Cu));
        },
        persist: function () {},
        isPersistent: Cu,
      }),
      t
    );
  }
  var Vn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Nu = at(Vn),
    oa = le({}, Vn, { view: 0, detail: 0 }),
    Wy = at(oa),
    br,
    Sr,
    da,
    zu = le({}, oa, {
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
      getModifierState: Tr,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== da &&
              (da && e.type === "mousemove"
                ? ((br = e.screenX - da.screenX), (Sr = e.screenY - da.screenY))
                : (Sr = br = 0),
              (da = e)),
            br);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Sr;
      },
    }),
    Ns = at(zu),
    Py = le({}, zu, { dataTransfer: 0 }),
    Iy = at(Py),
    e0 = le({}, oa, { relatedTarget: 0 }),
    Er = at(e0),
    t0 = le({}, Vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    n0 = at(t0),
    l0 = le({}, Vn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    a0 = at(l0),
    u0 = le({}, Vn, { data: 0 }),
    zs = at(u0),
    i0 = {
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
      MozPrintableKey: "Unidentified",
    },
    r0 = {
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
      224: "Meta",
    },
    c0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function f0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = c0[e])
      ? !!t[e]
      : !1;
  }
  function Tr() {
    return f0;
  }
  var s0 = le({}, oa, {
      key: function (e) {
        if (e.key) {
          var t = i0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Du(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? r0[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Tr,
      charCode: function (e) {
        return e.type === "keypress" ? Du(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Du(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    o0 = at(s0),
    d0 = le({}, zu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ms = at(d0),
    h0 = le({}, oa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Tr,
    }),
    m0 = at(h0),
    y0 = le({}, Vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    p0 = at(y0),
    g0 = le({}, zu, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    v0 = at(g0),
    b0 = le({}, Vn, { newState: 0, oldState: 0 }),
    S0 = at(b0),
    E0 = [9, 13, 27, 32],
    Rr = Jt && "CompositionEvent" in window,
    ha = null;
  Jt && "documentMode" in document && (ha = document.documentMode);
  var T0 = Jt && "TextEvent" in window && !ha,
    Us = Jt && (!Rr || (ha && 8 < ha && 11 >= ha)),
    Hs = " ",
    Bs = !1;
  function Ls(e, t) {
    switch (e) {
      case "keyup":
        return E0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function qs(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Al = !1;
  function R0(e, t) {
    switch (e) {
      case "compositionend":
        return qs(t);
      case "keypress":
        return t.which !== 32 ? null : ((Bs = !0), Hs);
      case "textInput":
        return (e = t.data), e === Hs && Bs ? null : e;
      default:
        return null;
    }
  }
  function O0(e, t) {
    if (Al)
      return e === "compositionend" || (!Rr && Ls(e, t))
        ? ((e = Ds()), (xu = vr = bn = null), (Al = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Us && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var A0 = {
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
    week: !0,
  };
  function js(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!A0[e.type] : t === "textarea";
  }
  function Ys(e, t, n, l) {
    Rl ? (Ol ? Ol.push(l) : (Ol = [l])) : (Rl = l),
      (t = yi(t, "onChange")),
      0 < t.length &&
        ((n = new Nu("onChange", "change", null, n, l)),
        e.push({ event: n, listeners: t }));
  }
  var ma = null,
    ya = null;
  function _0(e) {
    hh(e, 0);
  }
  function Mu(e) {
    var t = ca(e);
    if (Es(t)) return e;
  }
  function Gs(e, t) {
    if (e === "change") return t;
  }
  var Xs = !1;
  if (Jt) {
    var Or;
    if (Jt) {
      var Ar = "oninput" in document;
      if (!Ar) {
        var Qs = document.createElement("div");
        Qs.setAttribute("oninput", "return;"),
          (Ar = typeof Qs.oninput == "function");
      }
      Or = Ar;
    } else Or = !1;
    Xs = Or && (!document.documentMode || 9 < document.documentMode);
  }
  function Vs() {
    ma && (ma.detachEvent("onpropertychange", Zs), (ya = ma = null));
  }
  function Zs(e) {
    if (e.propertyName === "value" && Mu(ya)) {
      var t = [];
      Ys(t, ya, e, yr(e)), xs(_0, t);
    }
  }
  function w0(e, t, n) {
    e === "focusin"
      ? (Vs(), (ma = t), (ya = n), ma.attachEvent("onpropertychange", Zs))
      : e === "focusout" && Vs();
  }
  function x0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Mu(ya);
  }
  function D0(e, t) {
    if (e === "click") return Mu(t);
  }
  function C0(e, t) {
    if (e === "input" || e === "change") return Mu(t);
  }
  function N0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ft = typeof Object.is == "function" ? Object.is : N0;
  function pa(e, t) {
    if (ft(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var u = n[l];
      if (!ur.call(t, u) || !ft(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Ks(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ks(e, t) {
    var n = Ks(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t))
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ks(n);
    }
  }
  function Js(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Js(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function $s(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = _u(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = _u(e.document);
    }
    return t;
  }
  function _r(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function z0(e, t) {
    var n = $s(t);
    t = e.focusedElem;
    var l = e.selectionRange;
    if (
      n !== t &&
      t &&
      t.ownerDocument &&
      Js(t.ownerDocument.documentElement, t)
    ) {
      if (l !== null && _r(t)) {
        if (
          ((e = l.start),
          (n = l.end),
          n === void 0 && (n = e),
          "selectionStart" in t)
        )
          (t.selectionStart = e),
            (t.selectionEnd = Math.min(n, t.value.length));
        else if (
          ((n = ((e = t.ownerDocument || document) && e.defaultView) || window),
          n.getSelection)
        ) {
          n = n.getSelection();
          var u = t.textContent.length,
            r = Math.min(l.start, u);
          (l = l.end === void 0 ? r : Math.min(l.end, u)),
            !n.extend && r > l && ((u = l), (l = r), (r = u)),
            (u = ks(t, r));
          var o = ks(t, l);
          u &&
            o &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== u.node ||
              n.anchorOffset !== u.offset ||
              n.focusNode !== o.node ||
              n.focusOffset !== o.offset) &&
            ((e = e.createRange()),
            e.setStart(u.node, u.offset),
            n.removeAllRanges(),
            r > l
              ? (n.addRange(e), n.extend(o.node, o.offset))
              : (e.setEnd(o.node, o.offset), n.addRange(e)));
        }
      }
      for (e = [], n = t; (n = n.parentNode); )
        n.nodeType === 1 &&
          e.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
        (n = e[t]),
          (n.element.scrollLeft = n.left),
          (n.element.scrollTop = n.top);
    }
  }
  var M0 = Jt && "documentMode" in document && 11 >= document.documentMode,
    _l = null,
    wr = null,
    ga = null,
    xr = !1;
  function Fs(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    xr ||
      _l == null ||
      _l !== _u(l) ||
      ((l = _l),
      "selectionStart" in l && _r(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (ga && pa(ga, l)) ||
        ((ga = l),
        (l = yi(wr, "onSelect")),
        0 < l.length &&
          ((t = new Nu("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = _l))));
  }
  function Zn(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var wl = {
      animationend: Zn("Animation", "AnimationEnd"),
      animationiteration: Zn("Animation", "AnimationIteration"),
      animationstart: Zn("Animation", "AnimationStart"),
      transitionrun: Zn("Transition", "TransitionRun"),
      transitionstart: Zn("Transition", "TransitionStart"),
      transitioncancel: Zn("Transition", "TransitionCancel"),
      transitionend: Zn("Transition", "TransitionEnd"),
    },
    Dr = {},
    Ws = {};
  Jt &&
    ((Ws = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete wl.animationend.animation,
      delete wl.animationiteration.animation,
      delete wl.animationstart.animation),
    "TransitionEvent" in window || delete wl.transitionend.transition);
  function Kn(e) {
    if (Dr[e]) return Dr[e];
    if (!wl[e]) return e;
    var t = wl[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ws) return (Dr[e] = t[n]);
    return e;
  }
  var Ps = Kn("animationend"),
    Is = Kn("animationiteration"),
    eo = Kn("animationstart"),
    U0 = Kn("transitionrun"),
    H0 = Kn("transitionstart"),
    B0 = Kn("transitioncancel"),
    to = Kn("transitionend"),
    no = new Map(),
    lo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function Dt(e, t) {
    no.set(e, t), Qn(t, [e]);
  }
  var bt = [],
    xl = 0,
    Cr = 0;
  function Uu() {
    for (var e = xl, t = (Cr = xl = 0); t < e; ) {
      var n = bt[t];
      bt[t++] = null;
      var l = bt[t];
      bt[t++] = null;
      var u = bt[t];
      bt[t++] = null;
      var r = bt[t];
      if (((bt[t++] = null), l !== null && u !== null)) {
        var o = l.pending;
        o === null ? (u.next = u) : ((u.next = o.next), (o.next = u)),
          (l.pending = u);
      }
      r !== 0 && ao(n, u, r);
    }
  }
  function Hu(e, t, n, l) {
    (bt[xl++] = e),
      (bt[xl++] = t),
      (bt[xl++] = n),
      (bt[xl++] = l),
      (Cr |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function Nr(e, t, n, l) {
    return Hu(e, t, n, l), Bu(e);
  }
  function Sn(e, t) {
    return Hu(e, null, null, t), Bu(e);
  }
  function ao(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var u = !1, r = e.return; r !== null; )
      (r.childLanes |= n),
        (l = r.alternate),
        l !== null && (l.childLanes |= n),
        r.tag === 22 &&
          ((e = r.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = r),
        (r = r.return);
    u &&
      t !== null &&
      e.tag === 3 &&
      ((r = e.stateNode),
      (u = 31 - ct(n)),
      (r = r.hiddenUpdates),
      (e = r[u]),
      e === null ? (r[u] = [t]) : e.push(t),
      (t.lane = n | 536870912));
  }
  function Bu(e) {
    if (50 < Xa) throw ((Xa = 0), (Lc = null), Error(c(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Dl = {},
    uo = new WeakMap();
  function St(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = uo.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: ae(t) }), uo.set(e, t), t);
    }
    return { value: e, source: t, stack: ae(t) };
  }
  var Cl = [],
    Nl = 0,
    Lu = null,
    qu = 0,
    Et = [],
    Tt = 0,
    kn = null,
    Ft = 1,
    Wt = "";
  function Jn(e, t) {
    (Cl[Nl++] = qu), (Cl[Nl++] = Lu), (Lu = e), (qu = t);
  }
  function io(e, t, n) {
    (Et[Tt++] = Ft), (Et[Tt++] = Wt), (Et[Tt++] = kn), (kn = e);
    var l = Ft;
    e = Wt;
    var u = 32 - ct(l) - 1;
    (l &= ~(1 << u)), (n += 1);
    var r = 32 - ct(t) + u;
    if (30 < r) {
      var o = u - (u % 5);
      (r = (l & ((1 << o) - 1)).toString(32)),
        (l >>= o),
        (u -= o),
        (Ft = (1 << (32 - ct(t) + u)) | (n << u) | l),
        (Wt = r + e);
    } else (Ft = (1 << r) | (n << u) | l), (Wt = e);
  }
  function zr(e) {
    e.return !== null && (Jn(e, 1), io(e, 1, 0));
  }
  function Mr(e) {
    for (; e === Lu; )
      (Lu = Cl[--Nl]), (Cl[Nl] = null), (qu = Cl[--Nl]), (Cl[Nl] = null);
    for (; e === kn; )
      (kn = Et[--Tt]),
        (Et[Tt] = null),
        (Wt = Et[--Tt]),
        (Et[Tt] = null),
        (Ft = Et[--Tt]),
        (Et[Tt] = null);
  }
  var et = null,
    Ze = null,
    pe = !1,
    Ct = null,
    qt = !1,
    Ur = Error(c(519));
  function $n(e) {
    var t = Error(c(418, ""));
    throw (Sa(St(t, e)), Ur);
  }
  function ro(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[$e] = e), (t[lt] = l), n)) {
      case "dialog":
        he("cancel", t), he("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        he("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Va.length; n++) he(Va[n], t);
        break;
      case "source":
        he("error", t);
        break;
      case "img":
      case "image":
      case "link":
        he("error", t), he("load", t);
        break;
      case "details":
        he("toggle", t);
        break;
      case "input":
        he("invalid", t),
          Ts(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          Au(t);
        break;
      case "select":
        he("invalid", t);
        break;
      case "textarea":
        he("invalid", t), Os(t, l.value, l.defaultValue, l.children), Au(t);
    }
    (n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      gh(t.textContent, n)
        ? (l.popover != null && (he("beforetoggle", t), he("toggle", t)),
          l.onScroll != null && he("scroll", t),
          l.onScrollEnd != null && he("scrollend", t),
          l.onClick != null && (t.onclick = pi),
          (t = !0))
        : (t = !1),
      t || $n(e);
  }
  function co(e) {
    for (et = e.return; et; )
      switch (et.tag) {
        case 3:
        case 27:
          qt = !0;
          return;
        case 5:
        case 13:
          qt = !1;
          return;
        default:
          et = et.return;
      }
  }
  function va(e) {
    if (e !== et) return !1;
    if (!pe) return co(e), (pe = !0), !1;
    var t = !1,
      n;
    if (
      ((n = e.tag !== 3 && e.tag !== 27) &&
        ((n = e.tag === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || ef(e.type, e.memoizedProps))),
        (n = !n)),
      n && (t = !0),
      t && Ze && $n(e),
      co(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === "/$")) {
              if (t === 0) {
                Ze = zt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          e = e.nextSibling;
        }
        Ze = null;
      }
    } else Ze = et ? zt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ba() {
    (Ze = et = null), (pe = !1);
  }
  function Sa(e) {
    Ct === null ? (Ct = [e]) : Ct.push(e);
  }
  var Ea = Error(c(460)),
    fo = Error(c(474)),
    Hr = { then: function () {} };
  function so(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function ju() {}
  function oo(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(ju, ju), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), e === Ea ? Error(c(483)) : e);
      default:
        if (typeof t.status == "string") t.then(ju, ju);
        else {
          if (((e = Re), e !== null && 100 < e.shellSuspendCounter))
            throw Error(c(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "fulfilled"), (u.value = l);
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "rejected"), (u.reason = l);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), e === Ea ? Error(c(483)) : e);
        }
        throw ((Ta = t), Ea);
    }
  }
  var Ta = null;
  function ho() {
    if (Ta === null) throw Error(c(459));
    var e = Ta;
    return (Ta = null), e;
  }
  var zl = null,
    Ra = 0;
  function Yu(e) {
    var t = Ra;
    return (Ra += 1), zl === null && (zl = []), oo(zl, e, t);
  }
  function Oa(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Gu(e, t) {
    throw t.$$typeof === d
      ? Error(c(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          c(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function mo(e) {
    var t = e._init;
    return t(e._payload);
  }
  function yo(e) {
    function t(A, E) {
      if (e) {
        var _ = A.deletions;
        _ === null ? ((A.deletions = [E]), (A.flags |= 16)) : _.push(E);
      }
    }
    function n(A, E) {
      if (!e) return null;
      for (; E !== null; ) t(A, E), (E = E.sibling);
      return null;
    }
    function l(A) {
      for (var E = new Map(); A !== null; )
        A.key !== null ? E.set(A.key, A) : E.set(A.index, A), (A = A.sibling);
      return E;
    }
    function u(A, E) {
      return (A = zn(A, E)), (A.index = 0), (A.sibling = null), A;
    }
    function r(A, E, _) {
      return (
        (A.index = _),
        e
          ? ((_ = A.alternate),
            _ !== null
              ? ((_ = _.index), _ < E ? ((A.flags |= 33554434), E) : _)
              : ((A.flags |= 33554434), E))
          : ((A.flags |= 1048576), E)
      );
    }
    function o(A) {
      return e && A.alternate === null && (A.flags |= 33554434), A;
    }
    function p(A, E, _, q) {
      return E === null || E.tag !== 6
        ? ((E = Dc(_, A.mode, q)), (E.return = A), E)
        : ((E = u(E, _)), (E.return = A), E);
    }
    function v(A, E, _, q) {
      var J = _.type;
      return J === g
        ? U(A, E, _.props.children, q, _.key)
        : E !== null &&
          (E.elementType === J ||
            (typeof J == "object" &&
              J !== null &&
              J.$$typeof === X &&
              mo(J) === E.type))
        ? ((E = u(E, _.props)), Oa(E, _), (E.return = A), E)
        : ((E = ui(_.type, _.key, _.props, null, A.mode, q)),
          Oa(E, _),
          (E.return = A),
          E);
    }
    function T(A, E, _, q) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== _.containerInfo ||
        E.stateNode.implementation !== _.implementation
        ? ((E = Cc(_, A.mode, q)), (E.return = A), E)
        : ((E = u(E, _.children || [])), (E.return = A), E);
    }
    function U(A, E, _, q, J) {
      return E === null || E.tag !== 7
        ? ((E = ul(_, A.mode, q, J)), (E.return = A), E)
        : ((E = u(E, _)), (E.return = A), E);
    }
    function j(A, E, _) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return (E = Dc("" + E, A.mode, _)), (E.return = A), E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case h:
            return (
              (_ = ui(E.type, E.key, E.props, null, A.mode, _)),
              Oa(_, E),
              (_.return = A),
              _
            );
          case y:
            return (E = Cc(E, A.mode, _)), (E.return = A), E;
          case X:
            var q = E._init;
            return (E = q(E._payload)), j(A, E, _);
        }
        if (W(E) || te(E))
          return (E = ul(E, A.mode, _, null)), (E.return = A), E;
        if (typeof E.then == "function") return j(A, Yu(E), _);
        if (E.$$typeof === C) return j(A, ni(A, E), _);
        Gu(A, E);
      }
      return null;
    }
    function D(A, E, _, q) {
      var J = E !== null ? E.key : null;
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return J !== null ? null : p(A, E, "" + _, q);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case h:
            return _.key === J ? v(A, E, _, q) : null;
          case y:
            return _.key === J ? T(A, E, _, q) : null;
          case X:
            return (J = _._init), (_ = J(_._payload)), D(A, E, _, q);
        }
        if (W(_) || te(_)) return J !== null ? null : U(A, E, _, q, null);
        if (typeof _.then == "function") return D(A, E, Yu(_), q);
        if (_.$$typeof === C) return D(A, E, ni(A, _), q);
        Gu(A, _);
      }
      return null;
    }
    function M(A, E, _, q, J) {
      if (
        (typeof q == "string" && q !== "") ||
        typeof q == "number" ||
        typeof q == "bigint"
      )
        return (A = A.get(_) || null), p(E, A, "" + q, J);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case h:
            return (
              (A = A.get(q.key === null ? _ : q.key) || null), v(E, A, q, J)
            );
          case y:
            return (
              (A = A.get(q.key === null ? _ : q.key) || null), T(E, A, q, J)
            );
          case X:
            var se = q._init;
            return (q = se(q._payload)), M(A, E, _, q, J);
        }
        if (W(q) || te(q)) return (A = A.get(_) || null), U(E, A, q, J, null);
        if (typeof q.then == "function") return M(A, E, _, Yu(q), J);
        if (q.$$typeof === C) return M(A, E, _, ni(E, q), J);
        Gu(E, q);
      }
      return null;
    }
    function $(A, E, _, q) {
      for (
        var J = null, se = null, F = E, P = (E = 0), Qe = null;
        F !== null && P < _.length;
        P++
      ) {
        F.index > P ? ((Qe = F), (F = null)) : (Qe = F.sibling);
        var ge = D(A, F, _[P], q);
        if (ge === null) {
          F === null && (F = Qe);
          break;
        }
        e && F && ge.alternate === null && t(A, F),
          (E = r(ge, E, P)),
          se === null ? (J = ge) : (se.sibling = ge),
          (se = ge),
          (F = Qe);
      }
      if (P === _.length) return n(A, F), pe && Jn(A, P), J;
      if (F === null) {
        for (; P < _.length; P++)
          (F = j(A, _[P], q)),
            F !== null &&
              ((E = r(F, E, P)),
              se === null ? (J = F) : (se.sibling = F),
              (se = F));
        return pe && Jn(A, P), J;
      }
      for (F = l(F); P < _.length; P++)
        (Qe = M(F, A, P, _[P], q)),
          Qe !== null &&
            (e &&
              Qe.alternate !== null &&
              F.delete(Qe.key === null ? P : Qe.key),
            (E = r(Qe, E, P)),
            se === null ? (J = Qe) : (se.sibling = Qe),
            (se = Qe));
      return (
        e &&
          F.forEach(function (jn) {
            return t(A, jn);
          }),
        pe && Jn(A, P),
        J
      );
    }
    function ne(A, E, _, q) {
      if (_ == null) throw Error(c(151));
      for (
        var J = null, se = null, F = E, P = (E = 0), Qe = null, ge = _.next();
        F !== null && !ge.done;
        P++, ge = _.next()
      ) {
        F.index > P ? ((Qe = F), (F = null)) : (Qe = F.sibling);
        var jn = D(A, F, ge.value, q);
        if (jn === null) {
          F === null && (F = Qe);
          break;
        }
        e && F && jn.alternate === null && t(A, F),
          (E = r(jn, E, P)),
          se === null ? (J = jn) : (se.sibling = jn),
          (se = jn),
          (F = Qe);
      }
      if (ge.done) return n(A, F), pe && Jn(A, P), J;
      if (F === null) {
        for (; !ge.done; P++, ge = _.next())
          (ge = j(A, ge.value, q)),
            ge !== null &&
              ((E = r(ge, E, P)),
              se === null ? (J = ge) : (se.sibling = ge),
              (se = ge));
        return pe && Jn(A, P), J;
      }
      for (F = l(F); !ge.done; P++, ge = _.next())
        (ge = M(F, A, P, ge.value, q)),
          ge !== null &&
            (e &&
              ge.alternate !== null &&
              F.delete(ge.key === null ? P : ge.key),
            (E = r(ge, E, P)),
            se === null ? (J = ge) : (se.sibling = ge),
            (se = ge));
      return (
        e &&
          F.forEach(function (Fp) {
            return t(A, Fp);
          }),
        pe && Jn(A, P),
        J
      );
    }
    function ze(A, E, _, q) {
      if (
        (typeof _ == "object" &&
          _ !== null &&
          _.type === g &&
          _.key === null &&
          (_ = _.props.children),
        typeof _ == "object" && _ !== null)
      ) {
        switch (_.$$typeof) {
          case h:
            e: {
              for (var J = _.key; E !== null; ) {
                if (E.key === J) {
                  if (((J = _.type), J === g)) {
                    if (E.tag === 7) {
                      n(A, E.sibling),
                        (q = u(E, _.props.children)),
                        (q.return = A),
                        (A = q);
                      break e;
                    }
                  } else if (
                    E.elementType === J ||
                    (typeof J == "object" &&
                      J !== null &&
                      J.$$typeof === X &&
                      mo(J) === E.type)
                  ) {
                    n(A, E.sibling),
                      (q = u(E, _.props)),
                      Oa(q, _),
                      (q.return = A),
                      (A = q);
                    break e;
                  }
                  n(A, E);
                  break;
                } else t(A, E);
                E = E.sibling;
              }
              _.type === g
                ? ((q = ul(_.props.children, A.mode, q, _.key)),
                  (q.return = A),
                  (A = q))
                : ((q = ui(_.type, _.key, _.props, null, A.mode, q)),
                  Oa(q, _),
                  (q.return = A),
                  (A = q));
            }
            return o(A);
          case y:
            e: {
              for (J = _.key; E !== null; ) {
                if (E.key === J)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === _.containerInfo &&
                    E.stateNode.implementation === _.implementation
                  ) {
                    n(A, E.sibling),
                      (q = u(E, _.children || [])),
                      (q.return = A),
                      (A = q);
                    break e;
                  } else {
                    n(A, E);
                    break;
                  }
                else t(A, E);
                E = E.sibling;
              }
              (q = Cc(_, A.mode, q)), (q.return = A), (A = q);
            }
            return o(A);
          case X:
            return (J = _._init), (_ = J(_._payload)), ze(A, E, _, q);
        }
        if (W(_)) return $(A, E, _, q);
        if (te(_)) {
          if (((J = te(_)), typeof J != "function")) throw Error(c(150));
          return (_ = J.call(_)), ne(A, E, _, q);
        }
        if (typeof _.then == "function") return ze(A, E, Yu(_), q);
        if (_.$$typeof === C) return ze(A, E, ni(A, _), q);
        Gu(A, _);
      }
      return (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
        ? ((_ = "" + _),
          E !== null && E.tag === 6
            ? (n(A, E.sibling), (q = u(E, _)), (q.return = A), (A = q))
            : (n(A, E), (q = Dc(_, A.mode, q)), (q.return = A), (A = q)),
          o(A))
        : n(A, E);
    }
    return function (A, E, _, q) {
      try {
        Ra = 0;
        var J = ze(A, E, _, q);
        return (zl = null), J;
      } catch (F) {
        if (F === Ea) throw F;
        var se = _t(29, F, null, A.mode);
        return (se.lanes = q), (se.return = A), se;
      } finally {
      }
    };
  }
  var Fn = yo(!0),
    po = yo(!1),
    Ml = ve(null),
    Xu = ve(0);
  function go(e, t) {
    (e = fn), Ae(Xu, e), Ae(Ml, t), (fn = e | t.baseLanes);
  }
  function Br() {
    Ae(Xu, fn), Ae(Ml, Ml.current);
  }
  function Lr() {
    (fn = Xu.current), Ue(Ml), Ue(Xu);
  }
  var Rt = ve(null),
    jt = null;
  function En(e) {
    var t = e.alternate;
    Ae(qe, qe.current & 1),
      Ae(Rt, e),
      jt === null &&
        (t === null || Ml.current !== null || t.memoizedState !== null) &&
        (jt = e);
  }
  function vo(e) {
    if (e.tag === 22) {
      if ((Ae(qe, qe.current), Ae(Rt, e), jt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (jt = e);
      }
    } else Tn();
  }
  function Tn() {
    Ae(qe, qe.current), Ae(Rt, Rt.current);
  }
  function Pt(e) {
    Ue(Rt), jt === e && (jt = null), Ue(qe);
  }
  var qe = ve(0);
  function Qu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var L0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                });
            };
          },
    q0 = a.unstable_scheduleCallback,
    j0 = a.unstable_NormalPriority,
    je = {
      $$typeof: C,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function qr() {
    return { controller: new L0(), data: new Map(), refCount: 0 };
  }
  function Aa(e) {
    e.refCount--,
      e.refCount === 0 &&
        q0(j0, function () {
          e.controller.abort();
        });
  }
  var _a = null,
    jr = 0,
    Ul = 0,
    Hl = null;
  function Y0(e, t) {
    if (_a === null) {
      var n = (_a = []);
      (jr = 0),
        (Ul = Zc()),
        (Hl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        });
    }
    return jr++, t.then(bo, bo), t;
  }
  function bo() {
    if (--jr === 0 && _a !== null) {
      Hl !== null && (Hl.status = "fulfilled");
      var e = _a;
      (_a = null), (Ul = 0), (Hl = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function G0(e, t) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          n.push(u);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = t);
          for (var u = 0; u < n.length; u++) (0, n[u])(t);
        },
        function (u) {
          for (l.status = "rejected", l.reason = u, u = 0; u < n.length; u++)
            (0, n[u])(void 0);
        }
      ),
      l
    );
  }
  var So = Z.S;
  Z.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Y0(e, t),
      So !== null && So(e, t);
  };
  var Wn = ve(null);
  function Yr() {
    var e = Wn.current;
    return e !== null ? e : Re.pooledCache;
  }
  function Vu(e, t) {
    t === null ? Ae(Wn, Wn.current) : Ae(Wn, t.pool);
  }
  function Eo() {
    var e = Yr();
    return e === null ? null : { parent: je._currentValue, pool: e };
  }
  var Rn = 0,
    ce = null,
    be = null,
    He = null,
    Zu = !1,
    Bl = !1,
    Pn = !1,
    Ku = 0,
    wa = 0,
    Ll = null,
    X0 = 0;
  function Me() {
    throw Error(c(321));
  }
  function Gr(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ft(e[n], t[n])) return !1;
    return !0;
  }
  function Xr(e, t, n, l, u, r) {
    return (
      (Rn = r),
      (ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Z.H = e === null || e.memoizedState === null ? In : On),
      (Pn = !1),
      (r = n(l, u)),
      (Pn = !1),
      Bl && (r = Ro(t, n, l, u)),
      To(e),
      r
    );
  }
  function To(e) {
    Z.H = Yt;
    var t = be !== null && be.next !== null;
    if (((Rn = 0), (He = be = ce = null), (Zu = !1), (wa = 0), (Ll = null), t))
      throw Error(c(300));
    e === null ||
      Ge ||
      ((e = e.dependencies), e !== null && ti(e) && (Ge = !0));
  }
  function Ro(e, t, n, l) {
    ce = e;
    var u = 0;
    do {
      if ((Bl && (Ll = null), (wa = 0), (Bl = !1), 25 <= u))
        throw Error(c(301));
      if (((u += 1), (He = be = null), e.updateQueue != null)) {
        var r = e.updateQueue;
        (r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0);
      }
      (Z.H = el), (r = t(n, l));
    } while (Bl);
    return r;
  }
  function Q0() {
    var e = Z.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? xa(t) : t),
      (e = e.useState()[0]),
      (be !== null ? be.memoizedState : null) !== e && (ce.flags |= 1024),
      t
    );
  }
  function Qr() {
    var e = Ku !== 0;
    return (Ku = 0), e;
  }
  function Vr(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function Zr(e) {
    if (Zu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Zu = !1;
    }
    (Rn = 0), (He = be = ce = null), (Bl = !1), (wa = Ku = 0), (Ll = null);
  }
  function ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return He === null ? (ce.memoizedState = He = e) : (He = He.next = e), He;
  }
  function Be() {
    if (be === null) {
      var e = ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = be.next;
    var t = He === null ? ce.memoizedState : He.next;
    if (t !== null) (He = t), (be = e);
    else {
      if (e === null)
        throw ce.alternate === null ? Error(c(467)) : Error(c(310));
      (be = e),
        (e = {
          memoizedState: be.memoizedState,
          baseState: be.baseState,
          baseQueue: be.baseQueue,
          queue: be.queue,
          next: null,
        }),
        He === null ? (ce.memoizedState = He = e) : (He = He.next = e);
    }
    return He;
  }
  var ku;
  ku = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function xa(e) {
    var t = wa;
    return (
      (wa += 1),
      Ll === null && (Ll = []),
      (e = oo(Ll, e, t)),
      (t = ce),
      (He === null ? t.memoizedState : He.next) === null &&
        ((t = t.alternate),
        (Z.H = t === null || t.memoizedState === null ? In : On)),
      e
    );
  }
  function Ju(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return xa(e);
      if (e.$$typeof === C) return Fe(e);
    }
    throw Error(c(438, String(e)));
  }
  function Kr(e) {
    var t = null,
      n = ce.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = ce.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = ku()), (ce.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = K;
    return t.index++, n;
  }
  function It(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function $u(e) {
    var t = Be();
    return kr(t, be, e);
  }
  function kr(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var u = e.baseQueue,
      r = l.pending;
    if (r !== null) {
      if (u !== null) {
        var o = u.next;
        (u.next = r.next), (r.next = o);
      }
      (t.baseQueue = u = r), (l.pending = null);
    }
    if (((r = e.baseState), u === null)) e.memoizedState = r;
    else {
      t = u.next;
      var p = (o = null),
        v = null,
        T = t,
        U = !1;
      do {
        var j = T.lane & -536870913;
        if (j !== T.lane ? (ye & j) === j : (Rn & j) === j) {
          var D = T.revertLane;
          if (D === 0)
            v !== null &&
              (v = v.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: T.action,
                  hasEagerState: T.hasEagerState,
                  eagerState: T.eagerState,
                  next: null,
                }),
              j === Ul && (U = !0);
          else if ((Rn & D) === D) {
            (T = T.next), D === Ul && (U = !0);
            continue;
          } else
            (j = {
              lane: 0,
              revertLane: T.revertLane,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null,
            }),
              v === null ? ((p = v = j), (o = r)) : (v = v.next = j),
              (ce.lanes |= D),
              (Mn |= D);
          (j = T.action),
            Pn && n(r, j),
            (r = T.hasEagerState ? T.eagerState : n(r, j));
        } else
          (D = {
            lane: j,
            revertLane: T.revertLane,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null,
          }),
            v === null ? ((p = v = D), (o = r)) : (v = v.next = D),
            (ce.lanes |= j),
            (Mn |= j);
        T = T.next;
      } while (T !== null && T !== t);
      if (
        (v === null ? (o = r) : (v.next = p),
        !ft(r, e.memoizedState) && ((Ge = !0), U && ((n = Hl), n !== null)))
      )
        throw n;
      (e.memoizedState = r),
        (e.baseState = o),
        (e.baseQueue = v),
        (l.lastRenderedState = r);
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Jr(e) {
    var t = Be(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      u = n.pending,
      r = t.memoizedState;
    if (u !== null) {
      n.pending = null;
      var o = (u = u.next);
      do (r = e(r, o.action)), (o = o.next);
      while (o !== u);
      ft(r, t.memoizedState) || (Ge = !0),
        (t.memoizedState = r),
        t.baseQueue === null && (t.baseState = r),
        (n.lastRenderedState = r);
    }
    return [r, l];
  }
  function Oo(e, t, n) {
    var l = ce,
      u = Be(),
      r = pe;
    if (r) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var o = !ft((be || u).memoizedState, n);
    if (
      (o && ((u.memoizedState = n), (Ge = !0)),
      (u = u.queue),
      Wr(wo.bind(null, l, u, e), [e]),
      u.getSnapshot !== t || o || (He !== null && He.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        ql(9, _o.bind(null, l, u, n, t), { destroy: void 0 }, null),
        Re === null)
      )
        throw Error(c(349));
      r || Rn & 60 || Ao(l, t, n);
    }
    return n;
  }
  function Ao(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ce.updateQueue),
      t === null
        ? ((t = ku()), (ce.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function _o(e, t, n, l) {
    (t.value = n), (t.getSnapshot = l), xo(t) && Do(e);
  }
  function wo(e, t, n) {
    return n(function () {
      xo(t) && Do(e);
    });
  }
  function xo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ft(e, n);
    } catch {
      return !0;
    }
  }
  function Do(e) {
    var t = Sn(e, 2);
    t !== null && tt(t, e, 2);
  }
  function $r(e) {
    var t = ut();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), Pn)) {
        gn(!0);
        try {
          n();
        } finally {
          gn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: It,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Co(e, t, n, l) {
    return (e.baseState = n), kr(e, be, typeof l == "function" ? l : It);
  }
  function V0(e, t, n, l, u) {
    if (Pu(e)) throw Error(c(485));
    if (((e = t.action), e !== null)) {
      var r = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (o) {
          r.listeners.push(o);
        },
      };
      Z.T !== null ? n(!0) : (r.isTransition = !1),
        l(r),
        (n = t.pending),
        n === null
          ? ((r.next = t.pending = r), No(t, r))
          : ((r.next = n.next), (t.pending = n.next = r));
    }
  }
  function No(e, t) {
    var n = t.action,
      l = t.payload,
      u = e.state;
    if (t.isTransition) {
      var r = Z.T,
        o = {};
      Z.T = o;
      try {
        var p = n(u, l),
          v = Z.S;
        v !== null && v(o, p), zo(e, t, p);
      } catch (T) {
        Fr(e, t, T);
      } finally {
        Z.T = r;
      }
    } else
      try {
        (r = n(u, l)), zo(e, t, r);
      } catch (T) {
        Fr(e, t, T);
      }
  }
  function zo(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            Mo(e, t, l);
          },
          function (l) {
            return Fr(e, t, l);
          }
        )
      : Mo(e, t, n);
  }
  function Mo(e, t, n) {
    (t.status = "fulfilled"),
      (t.value = n),
      Uo(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), No(e, n)));
  }
  function Fr(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = "rejected"), (t.reason = n), Uo(t), (t = t.next);
      while (t !== l);
    }
    e.action = null;
  }
  function Uo(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Ho(e, t) {
    return t;
  }
  function Bo(e, t) {
    if (pe) {
      var n = Re.formState;
      if (n !== null) {
        e: {
          var l = ce;
          if (pe) {
            if (Ze) {
              t: {
                for (var u = Ze, r = qt; u.nodeType !== 8; ) {
                  if (!r) {
                    u = null;
                    break t;
                  }
                  if (((u = zt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (r = u.data), (u = r === "F!" || r === "F" ? u : null);
              }
              if (u) {
                (Ze = zt(u.nextSibling)), (l = u.data === "F!");
                break e;
              }
            }
            $n(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = ut()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ho,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = ed.bind(null, ce, l)),
      (l.dispatch = n),
      (l = $r(!1)),
      (r = nc.bind(null, ce, !1, l.queue)),
      (l = ut()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = u),
      (n = V0.bind(null, ce, u, r, n)),
      (u.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function Lo(e) {
    var t = Be();
    return qo(t, be, e);
  }
  function qo(e, t, n) {
    (t = kr(e, t, Ho)[0]),
      (e = $u(It)[0]),
      (t =
        typeof t == "object" && t !== null && typeof t.then == "function"
          ? xa(t)
          : t);
    var l = Be(),
      u = l.queue,
      r = u.dispatch;
    return (
      n !== l.memoizedState &&
        ((ce.flags |= 2048),
        ql(9, Z0.bind(null, u, n), { destroy: void 0 }, null)),
      [t, r, e]
    );
  }
  function Z0(e, t) {
    e.action = t;
  }
  function jo(e) {
    var t = Be(),
      n = be;
    if (n !== null) return qo(t, n, e);
    Be(), (t = t.memoizedState), (n = Be());
    var l = n.queue.dispatch;
    return (n.memoizedState = e), [t, l, !1];
  }
  function ql(e, t, n, l) {
    return (
      (e = { tag: e, create: t, inst: n, deps: l, next: null }),
      (t = ce.updateQueue),
      t === null && ((t = ku()), (ce.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Yo() {
    return Be().memoizedState;
  }
  function Fu(e, t, n, l) {
    var u = ut();
    (ce.flags |= e),
      (u.memoizedState = ql(
        1 | t,
        n,
        { destroy: void 0 },
        l === void 0 ? null : l
      ));
  }
  function Wu(e, t, n, l) {
    var u = Be();
    l = l === void 0 ? null : l;
    var r = u.memoizedState.inst;
    be !== null && l !== null && Gr(l, be.memoizedState.deps)
      ? (u.memoizedState = ql(t, n, r, l))
      : ((ce.flags |= e), (u.memoizedState = ql(1 | t, n, r, l)));
  }
  function Go(e, t) {
    Fu(8390656, 8, e, t);
  }
  function Wr(e, t) {
    Wu(2048, 8, e, t);
  }
  function Xo(e, t) {
    return Wu(4, 2, e, t);
  }
  function Qo(e, t) {
    return Wu(4, 4, e, t);
  }
  function Vo(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Zo(e, t, n) {
    (n = n != null ? n.concat([e]) : null), Wu(4, 4, Vo.bind(null, t, e), n);
  }
  function Pr() {}
  function Ko(e, t) {
    var n = Be();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Gr(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function ko(e, t) {
    var n = Be();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Gr(t, l[1])) return l[0];
    if (((l = e()), Pn)) {
      gn(!0);
      try {
        e();
      } finally {
        gn(!1);
      }
    }
    return (n.memoizedState = [l, t]), l;
  }
  function Ir(e, t, n) {
    return n === void 0 || Rn & 1073741824
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = $d()), (ce.lanes |= e), (Mn |= e), n);
  }
  function Jo(e, t, n, l) {
    return ft(n, t)
      ? n
      : Ml.current !== null
      ? ((e = Ir(e, n, l)), ft(e, t) || (Ge = !0), e)
      : Rn & 42
      ? ((e = $d()), (ce.lanes |= e), (Mn |= e), t)
      : ((Ge = !0), (e.memoizedState = n));
  }
  function $o(e, t, n, l, u) {
    var r = k.p;
    k.p = r !== 0 && 8 > r ? r : 8;
    var o = Z.T,
      p = {};
    (Z.T = p), nc(e, !1, t, n);
    try {
      var v = u(),
        T = Z.S;
      if (
        (T !== null && T(p, v),
        v !== null && typeof v == "object" && typeof v.then == "function")
      ) {
        var U = G0(v, l);
        Da(e, t, U, ht(e));
      } else Da(e, t, l, ht(e));
    } catch (j) {
      Da(e, t, { then: function () {}, status: "rejected", reason: j }, ht());
    } finally {
      (k.p = r), (Z.T = o);
    }
  }
  function K0() {}
  function ec(e, t, n, l) {
    if (e.tag !== 5) throw Error(c(476));
    var u = Fo(e).queue;
    $o(
      e,
      u,
      t,
      me,
      n === null
        ? K0
        : function () {
            return Wo(e), n(l);
          }
    );
  }
  function Fo(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: me,
      baseState: me,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: It,
        lastRenderedState: me,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: It,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Wo(e) {
    var t = Fo(e).next.queue;
    Da(e, t, {}, ht());
  }
  function tc() {
    return Fe($a);
  }
  function Po() {
    return Be().memoizedState;
  }
  function Io() {
    return Be().memoizedState;
  }
  function k0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = ht();
          e = wn(n);
          var l = xn(t, e, n);
          l !== null && (tt(l, t, n), za(l, t, n)),
            (t = { cache: qr() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function J0(e, t, n) {
    var l = ht();
    (n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Pu(e)
        ? td(t, n)
        : ((n = Nr(e, t, n, l)), n !== null && (tt(n, e, l), nd(n, t, l)));
  }
  function ed(e, t, n) {
    var l = ht();
    Da(e, t, n, l);
  }
  function Da(e, t, n, l) {
    var u = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Pu(e)) td(t, u);
    else {
      var r = e.alternate;
      if (
        e.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = t.lastRenderedReducer), r !== null)
      )
        try {
          var o = t.lastRenderedState,
            p = r(o, n);
          if (((u.hasEagerState = !0), (u.eagerState = p), ft(p, o)))
            return Hu(e, t, u, 0), Re === null && Uu(), !1;
        } catch {
        } finally {
        }
      if (((n = Nr(e, t, u, l)), n !== null))
        return tt(n, e, l), nd(n, t, l), !0;
    }
    return !1;
  }
  function nc(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Zc(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Pu(e))
    ) {
      if (t) throw Error(c(479));
    } else (t = Nr(e, n, l, 2)), t !== null && tt(t, e, 2);
  }
  function Pu(e) {
    var t = e.alternate;
    return e === ce || (t !== null && t === ce);
  }
  function td(e, t) {
    Bl = Zu = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function nd(e, t, n) {
    if (n & 4194176) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), ds(e, n);
    }
  }
  var Yt = {
    readContext: Fe,
    use: Ju,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useLayoutEffect: Me,
    useInsertionEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useSyncExternalStore: Me,
    useId: Me,
  };
  (Yt.useCacheRefresh = Me),
    (Yt.useMemoCache = Me),
    (Yt.useHostTransitionStatus = Me),
    (Yt.useFormState = Me),
    (Yt.useActionState = Me),
    (Yt.useOptimistic = Me);
  var In = {
    readContext: Fe,
    use: Ju,
    useCallback: function (e, t) {
      return (ut().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Fe,
    useEffect: Go,
    useImperativeHandle: function (e, t, n) {
      (n = n != null ? n.concat([e]) : null),
        Fu(4194308, 4, Vo.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Fu(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      Fu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ut();
      t = t === void 0 ? null : t;
      var l = e();
      if (Pn) {
        gn(!0);
        try {
          e();
        } finally {
          gn(!1);
        }
      }
      return (n.memoizedState = [l, t]), l;
    },
    useReducer: function (e, t, n) {
      var l = ut();
      if (n !== void 0) {
        var u = n(t);
        if (Pn) {
          gn(!0);
          try {
            n(t);
          } finally {
            gn(!1);
          }
        }
      } else u = t;
      return (
        (l.memoizedState = l.baseState = u),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: u,
        }),
        (l.queue = e),
        (e = e.dispatch = J0.bind(null, ce, e)),
        [l.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ut();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = $r(e);
      var t = e.queue,
        n = ed.bind(null, ce, t);
      return (t.dispatch = n), [e.memoizedState, n];
    },
    useDebugValue: Pr,
    useDeferredValue: function (e, t) {
      var n = ut();
      return Ir(n, e, t);
    },
    useTransition: function () {
      var e = $r(!1);
      return (
        (e = $o.bind(null, ce, e.queue, !0, !1)),
        (ut().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, t, n) {
      var l = ce,
        u = ut();
      if (pe) {
        if (n === void 0) throw Error(c(407));
        n = n();
      } else {
        if (((n = t()), Re === null)) throw Error(c(349));
        ye & 60 || Ao(l, t, n);
      }
      u.memoizedState = n;
      var r = { value: n, getSnapshot: t };
      return (
        (u.queue = r),
        Go(wo.bind(null, l, r, e), [e]),
        (l.flags |= 2048),
        ql(9, _o.bind(null, l, r, n, t), { destroy: void 0 }, null),
        n
      );
    },
    useId: function () {
      var e = ut(),
        t = Re.identifierPrefix;
      if (pe) {
        var n = Wt,
          l = Ft;
        (n = (l & ~(1 << (32 - ct(l) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ku++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = X0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (ut().memoizedState = k0.bind(null, ce));
    },
  };
  (In.useMemoCache = Kr),
    (In.useHostTransitionStatus = tc),
    (In.useFormState = Bo),
    (In.useActionState = Bo),
    (In.useOptimistic = function (e) {
      var t = ut();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = n), (t = nc.bind(null, ce, !0, n)), (n.dispatch = t), [e, t]
      );
    });
  var On = {
    readContext: Fe,
    use: Ju,
    useCallback: Ko,
    useContext: Fe,
    useEffect: Wr,
    useImperativeHandle: Zo,
    useInsertionEffect: Xo,
    useLayoutEffect: Qo,
    useMemo: ko,
    useReducer: $u,
    useRef: Yo,
    useState: function () {
      return $u(It);
    },
    useDebugValue: Pr,
    useDeferredValue: function (e, t) {
      var n = Be();
      return Jo(n, be.memoizedState, e, t);
    },
    useTransition: function () {
      var e = $u(It)[0],
        t = Be().memoizedState;
      return [typeof e == "boolean" ? e : xa(e), t];
    },
    useSyncExternalStore: Oo,
    useId: Po,
  };
  (On.useCacheRefresh = Io),
    (On.useMemoCache = Kr),
    (On.useHostTransitionStatus = tc),
    (On.useFormState = Lo),
    (On.useActionState = Lo),
    (On.useOptimistic = function (e, t) {
      var n = Be();
      return Co(n, be, e, t);
    });
  var el = {
    readContext: Fe,
    use: Ju,
    useCallback: Ko,
    useContext: Fe,
    useEffect: Wr,
    useImperativeHandle: Zo,
    useInsertionEffect: Xo,
    useLayoutEffect: Qo,
    useMemo: ko,
    useReducer: Jr,
    useRef: Yo,
    useState: function () {
      return Jr(It);
    },
    useDebugValue: Pr,
    useDeferredValue: function (e, t) {
      var n = Be();
      return be === null ? Ir(n, e, t) : Jo(n, be.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Jr(It)[0],
        t = Be().memoizedState;
      return [typeof e == "boolean" ? e : xa(e), t];
    },
    useSyncExternalStore: Oo,
    useId: Po,
  };
  (el.useCacheRefresh = Io),
    (el.useMemoCache = Kr),
    (el.useHostTransitionStatus = tc),
    (el.useFormState = jo),
    (el.useActionState = jo),
    (el.useOptimistic = function (e, t) {
      var n = Be();
      return be !== null
        ? Co(n, be, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    });
  function lc(e, t, n, l) {
    (t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : le({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ac = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ee(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = ht(),
        u = wn(l);
      (u.payload = t),
        n != null && (u.callback = n),
        (t = xn(e, u, l)),
        t !== null && (tt(t, e, l), za(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = ht(),
        u = wn(l);
      (u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = xn(e, u, l)),
        t !== null && (tt(t, e, l), za(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ht(),
        l = wn(n);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = xn(e, l, n)),
        t !== null && (tt(t, e, n), za(t, e, n));
    },
  };
  function ld(e, t, n, l, u, r, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, r, o)
        : t.prototype && t.prototype.isPureReactComponent
        ? !pa(n, l) || !pa(u, r)
        : !0
    );
  }
  function ad(e, t, n, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && ac.enqueueReplaceState(t, t.state, null);
  }
  function tl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t) l !== "ref" && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = le({}, n));
      for (var u in e) n[u] === void 0 && (n[u] = e[u]);
    }
    return n;
  }
  var Iu =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function ud(e) {
    Iu(e);
  }
  function id(e) {
    console.error(e);
  }
  function rd(e) {
    Iu(e);
  }
  function ei(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function cd(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function uc(e, t, n) {
    return (
      (n = wn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        ei(e, t);
      }),
      n
    );
  }
  function fd(e) {
    return (e = wn(e)), (e.tag = 3), e;
  }
  function sd(e, t, n, l) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var r = l.value;
      (e.payload = function () {
        return u(r);
      }),
        (e.callback = function () {
          cd(t, n, l);
        });
    }
    var o = n.stateNode;
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (e.callback = function () {
        cd(t, n, l),
          typeof u != "function" &&
            (Un === null ? (Un = new Set([this])) : Un.add(this));
        var p = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: p !== null ? p : "",
        });
      });
  }
  function $0(e, t, n, l, u) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && Na(t, n, u, !0),
        (n = Rt.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              jt === null ? Yc() : n.alternate === null && Ne === 0 && (Ne = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = u),
              l === Hr
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  Xc(e, l, u)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === Hr
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  Xc(e, l, u)),
              !1
            );
        }
        throw Error(c(435, n.tag));
      }
      return Xc(e, l, u), Yc(), !1;
    }
    if (pe)
      return (
        (t = Rt.current),
        t !== null
          ? (!(t.flags & 65536) && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            l !== Ur && ((e = Error(c(422), { cause: l })), Sa(St(e, n))))
          : (l !== Ur && ((t = Error(c(423), { cause: l })), Sa(St(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (l = St(l, n)),
            (u = uc(e.stateNode, l, u)),
            Sc(e, u),
            Ne !== 4 && (Ne = 2)),
        !1
      );
    var r = Error(c(520), { cause: l });
    if (
      ((r = St(r, n)),
      Ya === null ? (Ya = [r]) : Ya.push(r),
      Ne !== 4 && (Ne = 2),
      t === null)
    )
      return !0;
    (l = St(l, n)), (n = t);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = u & -u),
            (n.lanes |= e),
            (e = uc(n.stateNode, l, e)),
            Sc(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (r = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (Un === null || !Un.has(r)))))
          )
            return (
              (n.flags |= 65536),
              (u &= -u),
              (n.lanes |= u),
              (u = fd(u)),
              sd(u, e, n, l),
              Sc(n, u),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var od = Error(c(461)),
    Ge = !1;
  function Ke(e, t, n, l) {
    t.child = e === null ? po(t, null, n, l) : Fn(t, e.child, n, l);
  }
  function dd(e, t, n, l, u) {
    n = n.render;
    var r = t.ref;
    if ("ref" in l) {
      var o = {};
      for (var p in l) p !== "ref" && (o[p] = l[p]);
    } else o = l;
    return (
      ll(t),
      (l = Xr(e, t, n, o, r, u)),
      (p = Qr()),
      e !== null && !Ge
        ? (Vr(e, t, u), en(e, t, u))
        : (pe && p && zr(t), (t.flags |= 1), Ke(e, t, l, u), t.child)
    );
  }
  function hd(e, t, n, l, u) {
    if (e === null) {
      var r = n.type;
      return typeof r == "function" &&
        !xc(r) &&
        r.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = r), md(e, t, r, l, u))
        : ((e = ui(n.type, null, l, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((r = e.child), !mc(e, u))) {
      var o = r.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : pa), n(o, l) && e.ref === t.ref)
      )
        return en(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = zn(r, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function md(e, t, n, l, u) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (pa(r, l) && e.ref === t.ref)
        if (((Ge = !1), (t.pendingProps = l = r), mc(e, u)))
          e.flags & 131072 && (Ge = !0);
        else return (t.lanes = e.lanes), en(e, t, u);
    }
    return ic(e, t, n, l, u);
  }
  function yd(e, t, n) {
    var l = t.pendingProps,
      u = l.children,
      r = (t.stateNode._pendingVisibility & 2) !== 0,
      o = e !== null ? e.memoizedState : null;
    if ((Ca(e, t), l.mode === "hidden" || r)) {
      if (t.flags & 128) {
        if (((l = o !== null ? o.baseLanes | n : n), e !== null)) {
          for (u = t.child = e.child, r = 0; u !== null; )
            (r = r | u.lanes | u.childLanes), (u = u.sibling);
          t.childLanes = r & ~l;
        } else (t.childLanes = 0), (t.child = null);
        return pd(e, t, l, n);
      }
      if (n & 536870912)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Vu(t, o !== null ? o.cachePool : null),
          o !== null ? go(t, o) : Br(),
          vo(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          pd(e, t, o !== null ? o.baseLanes | n : n, n)
        );
    } else
      o !== null
        ? (Vu(t, o.cachePool), go(t, o), Tn(), (t.memoizedState = null))
        : (e !== null && Vu(t, null), Br(), Tn());
    return Ke(e, t, u, n), t.child;
  }
  function pd(e, t, n, l) {
    var u = Yr();
    return (
      (u = u === null ? null : { parent: je._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: n, cachePool: u }),
      e !== null && Vu(t, null),
      Br(),
      vo(t),
      e !== null && Na(e, t, l, !0),
      null
    );
  }
  function Ca(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 2097664);
    }
  }
  function ic(e, t, n, l, u) {
    return (
      ll(t),
      (n = Xr(e, t, n, l, void 0, u)),
      (l = Qr()),
      e !== null && !Ge
        ? (Vr(e, t, u), en(e, t, u))
        : (pe && l && zr(t), (t.flags |= 1), Ke(e, t, n, u), t.child)
    );
  }
  function gd(e, t, n, l, u, r) {
    return (
      ll(t),
      (t.updateQueue = null),
      (n = Ro(t, l, n, u)),
      To(e),
      (l = Qr()),
      e !== null && !Ge
        ? (Vr(e, t, r), en(e, t, r))
        : (pe && l && zr(t), (t.flags |= 1), Ke(e, t, n, r), t.child)
    );
  }
  function vd(e, t, n, l, u) {
    if ((ll(t), t.stateNode === null)) {
      var r = Dl,
        o = n.contextType;
      typeof o == "object" && o !== null && (r = Fe(o)),
        (r = new n(l, r)),
        (t.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = ac),
        (t.stateNode = r),
        (r._reactInternals = t),
        (r = t.stateNode),
        (r.props = l),
        (r.state = t.memoizedState),
        (r.refs = {}),
        vc(t),
        (o = n.contextType),
        (r.context = typeof o == "object" && o !== null ? Fe(o) : Dl),
        (r.state = t.memoizedState),
        (o = n.getDerivedStateFromProps),
        typeof o == "function" && (lc(t, n, o, l), (r.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((o = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          o !== r.state && ac.enqueueReplaceState(r, r.state, null),
          Ua(t, l, r, u),
          Ma(),
          (r.state = t.memoizedState)),
        typeof r.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      r = t.stateNode;
      var p = t.memoizedProps,
        v = tl(n, p);
      r.props = v;
      var T = r.context,
        U = n.contextType;
      (o = Dl), typeof U == "object" && U !== null && (o = Fe(U));
      var j = n.getDerivedStateFromProps;
      (U =
        typeof j == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (p = t.pendingProps !== p),
        U ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((p || T !== o) && ad(t, r, l, o)),
        (_n = !1);
      var D = t.memoizedState;
      (r.state = D),
        Ua(t, l, r, u),
        Ma(),
        (T = t.memoizedState),
        p || D !== T || _n
          ? (typeof j == "function" && (lc(t, n, j, l), (T = t.memoizedState)),
            (v = _n || ld(t, n, v, l, D, T, o))
              ? (U ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" &&
                    r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof r.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = T)),
            (r.props = l),
            (r.state = T),
            (r.context = o),
            (l = v))
          : (typeof r.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (r = t.stateNode),
        bc(e, t),
        (o = t.memoizedProps),
        (U = tl(n, o)),
        (r.props = U),
        (j = t.pendingProps),
        (D = r.context),
        (T = n.contextType),
        (v = Dl),
        typeof T == "object" && T !== null && (v = Fe(T)),
        (p = n.getDerivedStateFromProps),
        (T =
          typeof p == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((o !== j || D !== v) && ad(t, r, l, v)),
        (_n = !1),
        (D = t.memoizedState),
        (r.state = D),
        Ua(t, l, r, u),
        Ma();
      var M = t.memoizedState;
      o !== j ||
      D !== M ||
      _n ||
      (e !== null && e.dependencies !== null && ti(e.dependencies))
        ? (typeof p == "function" && (lc(t, n, p, l), (M = t.memoizedState)),
          (U =
            _n ||
            ld(t, n, U, l, D, M, v) ||
            (e !== null && e.dependencies !== null && ti(e.dependencies)))
            ? (T ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(l, M, v),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(l, M, v)),
              typeof r.componentDidUpdate == "function" && (t.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (o === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = M)),
          (r.props = l),
          (r.state = M),
          (r.context = v),
          (l = U))
        : (typeof r.componentDidUpdate != "function" ||
            (o === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (r = l),
      Ca(e, t),
      (l = (t.flags & 128) !== 0),
      r || l
        ? ((r = t.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = Fn(t, e.child, null, u)),
              (t.child = Fn(t, null, n, u)))
            : Ke(e, t, n, u),
          (t.memoizedState = r.state),
          (e = t.child))
        : (e = en(e, t, u)),
      e
    );
  }
  function bd(e, t, n, l) {
    return ba(), (t.flags |= 256), Ke(e, t, n, l), t.child;
  }
  var rc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cc(e) {
    return { baseLanes: e, cachePool: Eo() };
  }
  function fc(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= wt), e;
  }
  function Sd(e, t, n) {
    var l = t.pendingProps,
      u = !1,
      r = (t.flags & 128) !== 0,
      o;
    if (
      ((o = r) ||
        (o =
          e !== null && e.memoizedState === null ? !1 : (qe.current & 2) !== 0),
      o && ((u = !0), (t.flags &= -129)),
      (o = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (pe) {
        if ((u ? En(t) : Tn(), pe)) {
          var p = Ze,
            v;
          if ((v = p)) {
            e: {
              for (v = p, p = qt; v.nodeType !== 8; ) {
                if (!p) {
                  p = null;
                  break e;
                }
                if (((v = zt(v.nextSibling)), v === null)) {
                  p = null;
                  break e;
                }
              }
              p = v;
            }
            p !== null
              ? ((t.memoizedState = {
                  dehydrated: p,
                  treeContext: kn !== null ? { id: Ft, overflow: Wt } : null,
                  retryLane: 536870912,
                }),
                (v = _t(18, null, null, 0)),
                (v.stateNode = p),
                (v.return = t),
                (t.child = v),
                (et = t),
                (Ze = null),
                (v = !0))
              : (v = !1);
          }
          v || $n(t);
        }
        if (
          ((p = t.memoizedState),
          p !== null && ((p = p.dehydrated), p !== null))
        )
          return p.data === "$!" ? (t.lanes = 16) : (t.lanes = 536870912), null;
        Pt(t);
      }
      return (
        (p = l.children),
        (l = l.fallback),
        u
          ? (Tn(),
            (u = t.mode),
            (p = oc({ mode: "hidden", children: p }, u)),
            (l = ul(l, u, n, null)),
            (p.return = t),
            (l.return = t),
            (p.sibling = l),
            (t.child = p),
            (u = t.child),
            (u.memoizedState = cc(n)),
            (u.childLanes = fc(e, o, n)),
            (t.memoizedState = rc),
            l)
          : (En(t), sc(t, p))
      );
    }
    if (
      ((v = e.memoizedState), v !== null && ((p = v.dehydrated), p !== null))
    ) {
      if (r)
        t.flags & 256
          ? (En(t), (t.flags &= -257), (t = dc(e, t, n)))
          : t.memoizedState !== null
          ? (Tn(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (Tn(),
            (u = l.fallback),
            (p = t.mode),
            (l = oc({ mode: "visible", children: l.children }, p)),
            (u = ul(u, p, n, null)),
            (u.flags |= 2),
            (l.return = t),
            (u.return = t),
            (l.sibling = u),
            (t.child = l),
            Fn(t, e.child, null, n),
            (l = t.child),
            (l.memoizedState = cc(n)),
            (l.childLanes = fc(e, o, n)),
            (t.memoizedState = rc),
            (t = u));
      else if ((En(t), p.data === "$!")) {
        if (((o = p.nextSibling && p.nextSibling.dataset), o)) var T = o.dgst;
        (o = T),
          (l = Error(c(419))),
          (l.stack = ""),
          (l.digest = o),
          Sa({ value: l, source: null, stack: null }),
          (t = dc(e, t, n));
      } else if (
        (Ge || Na(e, t, n, !1), (o = (n & e.childLanes) !== 0), Ge || o)
      ) {
        if (((o = Re), o !== null)) {
          if (((l = n & -n), l & 42)) l = 1;
          else
            switch (l) {
              case 2:
                l = 1;
                break;
              case 8:
                l = 4;
                break;
              case 32:
                l = 16;
                break;
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
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                l = 64;
                break;
              case 268435456:
                l = 134217728;
                break;
              default:
                l = 0;
            }
          if (
            ((l = l & (o.suspendedLanes | n) ? 0 : l),
            l !== 0 && l !== v.retryLane)
          )
            throw ((v.retryLane = l), Sn(e, l), tt(o, e, l), od);
        }
        p.data === "$?" || Yc(), (t = dc(e, t, n));
      } else
        p.data === "$?"
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = sp.bind(null, e)),
            (p._reactRetry = t),
            (t = null))
          : ((e = v.treeContext),
            (Ze = zt(p.nextSibling)),
            (et = t),
            (pe = !0),
            (Ct = null),
            (qt = !1),
            e !== null &&
              ((Et[Tt++] = Ft),
              (Et[Tt++] = Wt),
              (Et[Tt++] = kn),
              (Ft = e.id),
              (Wt = e.overflow),
              (kn = t)),
            (t = sc(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (Tn(),
        (u = l.fallback),
        (p = t.mode),
        (v = e.child),
        (T = v.sibling),
        (l = zn(v, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = v.subtreeFlags & 31457280),
        T !== null ? (u = zn(T, u)) : ((u = ul(u, p, n, null)), (u.flags |= 2)),
        (u.return = t),
        (l.return = t),
        (l.sibling = u),
        (t.child = l),
        (l = u),
        (u = t.child),
        (p = e.child.memoizedState),
        p === null
          ? (p = cc(n))
          : ((v = p.cachePool),
            v !== null
              ? ((T = je._currentValue),
                (v = v.parent !== T ? { parent: T, pool: T } : v))
              : (v = Eo()),
            (p = { baseLanes: p.baseLanes | n, cachePool: v })),
        (u.memoizedState = p),
        (u.childLanes = fc(e, o, n)),
        (t.memoizedState = rc),
        l)
      : (En(t),
        (n = e.child),
        (e = n.sibling),
        (n = zn(n, { mode: "visible", children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((o = t.deletions),
          o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function sc(e, t) {
    return (
      (t = oc({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function oc(e, t) {
    return Kd(e, t, 0, null);
  }
  function dc(e, t, n) {
    return (
      Fn(t, e.child, null, n),
      (e = sc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ed(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), pc(e.return, t, n);
  }
  function hc(e, t, n, l, u) {
    var r = e.memoizedState;
    r === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: u,
        })
      : ((r.isBackwards = t),
        (r.rendering = null),
        (r.renderingStartTime = 0),
        (r.last = l),
        (r.tail = n),
        (r.tailMode = u));
  }
  function Td(e, t, n) {
    var l = t.pendingProps,
      u = l.revealOrder,
      r = l.tail;
    if ((Ke(e, t, l.children, n), (l = qe.current), l & 2))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ed(e, n, t);
          else if (e.tag === 19) Ed(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    switch ((Ae(qe, l), u)) {
      case "forwards":
        for (n = t.child, u = null; n !== null; )
          (e = n.alternate),
            e !== null && Qu(e) === null && (u = n),
            (n = n.sibling);
        (n = u),
          n === null
            ? ((u = t.child), (t.child = null))
            : ((u = n.sibling), (n.sibling = null)),
          hc(t, !1, u, n, r);
        break;
      case "backwards":
        for (n = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Qu(e) === null)) {
            t.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = n), (n = u), (u = e);
        }
        hc(t, !0, n, null, r);
        break;
      case "together":
        hc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function en(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Mn |= t.lanes),
      !(n & t.childLanes))
    )
      if (e !== null) {
        if ((Na(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (
        e = t.child, n = zn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = zn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function mc(e, t) {
    return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && ti(e)));
  }
  function F0(e, t, n) {
    switch (t.tag) {
      case 3:
        gu(t, t.stateNode.containerInfo),
          An(t, je, e.memoizedState.cache),
          ba();
        break;
      case 27:
      case 5:
        ar(t);
        break;
      case 4:
        gu(t, t.stateNode.containerInfo);
        break;
      case 10:
        An(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (En(t), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Sd(e, t, n)
            : (En(t), (e = en(e, t, n)), e !== null ? e.sibling : null);
        En(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (Na(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          u)
        ) {
          if (l) return Td(e, t, n);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Ae(qe, qe.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), yd(e, t, n);
      case 24:
        An(t, je, e.memoizedState.cache);
    }
    return en(e, t, n);
  }
  function Rd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ge = !0;
      else {
        if (!mc(e, n) && !(t.flags & 128)) return (Ge = !1), F0(e, t, n);
        Ge = !!(e.flags & 131072);
      }
    else (Ge = !1), pe && t.flags & 1048576 && io(t, qu, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            u = l._init;
          if (((l = u(l._payload)), (t.type = l), typeof l == "function"))
            xc(l)
              ? ((e = tl(l, e)), (t.tag = 1), (t = vd(null, t, l, e, n)))
              : ((t.tag = 0), (t = ic(null, t, l, e, n)));
          else {
            if (l != null) {
              if (((u = l.$$typeof), u === R)) {
                (t.tag = 11), (t = dd(null, t, l, e, n));
                break e;
              } else if (u === H) {
                (t.tag = 14), (t = hd(null, t, l, e, n));
                break e;
              }
            }
            throw ((t = de(l) || l), Error(c(306, t, "")));
          }
        }
        return t;
      case 0:
        return ic(e, t, t.type, t.pendingProps, n);
      case 1:
        return (l = t.type), (u = tl(l, t.pendingProps)), vd(e, t, l, u, n);
      case 3:
        e: {
          if ((gu(t, t.stateNode.containerInfo), e === null))
            throw Error(c(387));
          var r = t.pendingProps;
          (u = t.memoizedState), (l = u.element), bc(e, t), Ua(t, r, null, n);
          var o = t.memoizedState;
          if (
            ((r = o.cache),
            An(t, je, r),
            r !== u.cache && gc(t, [je], n, !0),
            Ma(),
            (r = o.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: r, isDehydrated: !1, cache: o.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = bd(e, t, r, n);
              break e;
            } else if (r !== l) {
              (l = St(Error(c(424)), t)), Sa(l), (t = bd(e, t, r, n));
              break e;
            } else
              for (
                Ze = zt(t.stateNode.containerInfo.firstChild),
                  et = t,
                  pe = !0,
                  Ct = null,
                  qt = !0,
                  n = po(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((ba(), r === l)) {
              t = en(e, t, n);
              break e;
            }
            Ke(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Ca(e, t),
          e === null
            ? (n = _h(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : pe ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = gi(pn.current).createElement(n)),
                (l[$e] = t),
                (l[lt] = e),
                ke(l, n, e),
                Ye(l),
                (t.stateNode = l))
            : (t.memoizedState = _h(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          ar(t),
          e === null &&
            pe &&
            ((l = t.stateNode = Rh(t.type, t.pendingProps, pn.current)),
            (et = t),
            (qt = !0),
            (Ze = zt(l.firstChild))),
          (l = t.pendingProps.children),
          e !== null || pe ? Ke(e, t, l, n) : (t.child = Fn(t, null, l, n)),
          Ca(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            pe &&
            ((u = l = Ze) &&
              ((l = _p(l, t.type, t.pendingProps, qt)),
              l !== null
                ? ((t.stateNode = l),
                  (et = t),
                  (Ze = zt(l.firstChild)),
                  (qt = !1),
                  (u = !0))
                : (u = !1)),
            u || $n(t)),
          ar(t),
          (u = t.type),
          (r = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (l = r.children),
          ef(u, r) ? (l = null) : o !== null && ef(u, o) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Xr(e, t, Q0, null, null, n)), ($a._currentValue = u)),
          Ca(e, t),
          Ke(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            pe &&
            ((e = n = Ze) &&
              ((n = wp(n, t.pendingProps, qt)),
              n !== null
                ? ((t.stateNode = n), (et = t), (Ze = null), (e = !0))
                : (e = !1)),
            e || $n(t)),
          null
        );
      case 13:
        return Sd(e, t, n);
      case 4:
        return (
          gu(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Fn(t, null, l, n)) : Ke(e, t, l, n),
          t.child
        );
      case 11:
        return dd(e, t, t.type, t.pendingProps, n);
      case 7:
        return Ke(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return (
          (l = t.pendingProps),
          An(t, t.type, l.value),
          Ke(e, t, l.children, n),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (l = t.pendingProps.children),
          ll(t),
          (u = Fe(u)),
          (l = l(u)),
          (t.flags |= 1),
          Ke(e, t, l, n),
          t.child
        );
      case 14:
        return hd(e, t, t.type, t.pendingProps, n);
      case 15:
        return md(e, t, t.type, t.pendingProps, n);
      case 19:
        return Td(e, t, n);
      case 22:
        return yd(e, t, n);
      case 24:
        return (
          ll(t),
          (l = Fe(je)),
          e === null
            ? ((u = Yr()),
              u === null &&
                ((u = Re),
                (r = qr()),
                (u.pooledCache = r),
                r.refCount++,
                r !== null && (u.pooledCacheLanes |= n),
                (u = r)),
              (t.memoizedState = { parent: l, cache: u }),
              vc(t),
              An(t, je, u))
            : (e.lanes & n && (bc(e, t), Ua(t, null, null, n), Ma()),
              (u = e.memoizedState),
              (r = t.memoizedState),
              u.parent !== l
                ? ((u = { parent: l, cache: l }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  An(t, je, l))
                : ((l = r.cache),
                  An(t, je, l),
                  l !== u.cache && gc(t, [je], n, !0))),
          Ke(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  var yc = ve(null),
    nl = null,
    tn = null;
  function An(e, t, n) {
    Ae(yc, t._currentValue), (t._currentValue = n);
  }
  function nn(e) {
    (e._currentValue = yc.current), Ue(yc);
  }
  function pc(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function gc(e, t, n, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var r = u.dependencies;
      if (r !== null) {
        var o = u.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var p = r;
          r = u;
          for (var v = 0; v < t.length; v++)
            if (p.context === t[v]) {
              (r.lanes |= n),
                (p = r.alternate),
                p !== null && (p.lanes |= n),
                pc(r.return, n, e),
                l || (o = null);
              break e;
            }
          r = p.next;
        }
      } else if (u.tag === 18) {
        if (((o = u.return), o === null)) throw Error(c(341));
        (o.lanes |= n),
          (r = o.alternate),
          r !== null && (r.lanes |= n),
          pc(o, n, e),
          (o = null);
      } else o = u.child;
      if (o !== null) o.return = u;
      else
        for (o = u; o !== null; ) {
          if (o === e) {
            o = null;
            break;
          }
          if (((u = o.sibling), u !== null)) {
            (u.return = o.return), (o = u);
            break;
          }
          o = o.return;
        }
      u = o;
    }
  }
  function Na(e, t, n, l) {
    e = null;
    for (var u = t, r = !1; u !== null; ) {
      if (!r) {
        if (u.flags & 524288) r = !0;
        else if (u.flags & 262144) break;
      }
      if (u.tag === 10) {
        var o = u.alternate;
        if (o === null) throw Error(c(387));
        if (((o = o.memoizedProps), o !== null)) {
          var p = u.type;
          ft(u.pendingProps.value, o.value) ||
            (e !== null ? e.push(p) : (e = [p]));
        }
      } else if (u === pu.current) {
        if (((o = u.alternate), o === null)) throw Error(c(387));
        o.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push($a) : (e = [$a]));
      }
      u = u.return;
    }
    e !== null && gc(t, e, n, l), (t.flags |= 262144);
  }
  function ti(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ft(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ll(e) {
    (nl = e),
      (tn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Fe(e) {
    return Od(nl, e);
  }
  function ni(e, t) {
    return nl === null && ll(e), Od(e, t);
  }
  function Od(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), tn === null)) {
      if (e === null) throw Error(c(308));
      (tn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else tn = tn.next = t;
    return n;
  }
  var _n = !1;
  function vc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function bc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function wn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function xn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), we & 2)) {
      var u = l.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (l.pending = t),
        (t = Bu(e)),
        ao(e, null, n),
        t
      );
    }
    return Hu(e, l, t, n), Bu(e);
  }
  function za(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194176) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), ds(e, n);
    }
  }
  function Sc(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var u = null,
        r = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          r === null ? (u = r = o) : (r = r.next = o), (n = n.next);
        } while (n !== null);
        r === null ? (u = r = t) : (r = r.next = t);
      } else u = r = t;
      (n = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: r,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  var Ec = !1;
  function Ma() {
    if (Ec) {
      var e = Hl;
      if (e !== null) throw e;
    }
  }
  function Ua(e, t, n, l) {
    Ec = !1;
    var u = e.updateQueue;
    _n = !1;
    var r = u.firstBaseUpdate,
      o = u.lastBaseUpdate,
      p = u.shared.pending;
    if (p !== null) {
      u.shared.pending = null;
      var v = p,
        T = v.next;
      (v.next = null), o === null ? (r = T) : (o.next = T), (o = v);
      var U = e.alternate;
      U !== null &&
        ((U = U.updateQueue),
        (p = U.lastBaseUpdate),
        p !== o &&
          (p === null ? (U.firstBaseUpdate = T) : (p.next = T),
          (U.lastBaseUpdate = v)));
    }
    if (r !== null) {
      var j = u.baseState;
      (o = 0), (U = T = v = null), (p = r);
      do {
        var D = p.lane & -536870913,
          M = D !== p.lane;
        if (M ? (ye & D) === D : (l & D) === D) {
          D !== 0 && D === Ul && (Ec = !0),
            U !== null &&
              (U = U.next =
                {
                  lane: 0,
                  tag: p.tag,
                  payload: p.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var $ = e,
              ne = p;
            D = t;
            var ze = n;
            switch (ne.tag) {
              case 1:
                if ((($ = ne.payload), typeof $ == "function")) {
                  j = $.call(ze, j, D);
                  break e;
                }
                j = $;
                break e;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = ne.payload),
                  (D = typeof $ == "function" ? $.call(ze, j, D) : $),
                  D == null)
                )
                  break e;
                j = le({}, j, D);
                break e;
              case 2:
                _n = !0;
            }
          }
          (D = p.callback),
            D !== null &&
              ((e.flags |= 64),
              M && (e.flags |= 8192),
              (M = u.callbacks),
              M === null ? (u.callbacks = [D]) : M.push(D));
        } else
          (M = {
            lane: D,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            U === null ? ((T = U = M), (v = j)) : (U = U.next = M),
            (o |= D);
        if (((p = p.next), p === null)) {
          if (((p = u.shared.pending), p === null)) break;
          (M = p),
            (p = M.next),
            (M.next = null),
            (u.lastBaseUpdate = M),
            (u.shared.pending = null);
        }
      } while (!0);
      U === null && (v = j),
        (u.baseState = v),
        (u.firstBaseUpdate = T),
        (u.lastBaseUpdate = U),
        r === null && (u.shared.lanes = 0),
        (Mn |= o),
        (e.lanes = o),
        (e.memoizedState = j);
    }
  }
  function Ad(e, t) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(t);
  }
  function _d(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) Ad(n[e], t);
  }
  function Ha(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var r = n.create,
              o = n.inst;
            (l = r()), (o.destroy = l);
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (p) {
      Ee(t, t.return, p);
    }
  }
  function Dn(e, t, n) {
    try {
      var l = t.updateQueue,
        u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var r = u.next;
        l = r;
        do {
          if ((l.tag & e) === e) {
            var o = l.inst,
              p = o.destroy;
            if (p !== void 0) {
              (o.destroy = void 0), (u = t);
              var v = n;
              try {
                p();
              } catch (T) {
                Ee(u, v, T);
              }
            }
          }
          l = l.next;
        } while (l !== r);
      }
    } catch (T) {
      Ee(t, t.return, T);
    }
  }
  function wd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        _d(t, n);
      } catch (l) {
        Ee(e, e.return, l);
      }
    }
  }
  function xd(e, t, n) {
    (n.props = tl(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      Ee(e, t, l);
    }
  }
  function al(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        var l = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var u = l;
            break;
          default:
            u = l;
        }
        typeof n == "function" ? (e.refCleanup = n(u)) : (n.current = u);
      }
    } catch (r) {
      Ee(e, t, r);
    }
  }
  function st(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          Ee(e, t, u);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          Ee(e, t, u);
        }
      else n.current = null;
  }
  function Dd(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (u) {
      Ee(e, e.return, u);
    }
  }
  function Cd(e, t, n) {
    try {
      var l = e.stateNode;
      Ep(l, e.type, n, t), (l[lt] = t);
    } catch (u) {
      Ee(e, e.return, u);
    }
  }
  function Nd(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function Tc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Nd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Rc(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = pi));
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (Rc(e, t, n), e = e.sibling; e !== null; )
        Rc(e, t, n), (e = e.sibling);
  }
  function li(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (li(e, t, n), e = e.sibling; e !== null; )
        li(e, t, n), (e = e.sibling);
  }
  var ln = !1,
    Ce = !1,
    Oc = !1,
    zd = typeof WeakSet == "function" ? WeakSet : Set,
    Xe = null,
    Md = !1;
  function W0(e, t) {
    if (((e = e.containerInfo), (Pc = Ri), (e = $s(e)), _r(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var u = l.anchorOffset,
              r = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, r.nodeType;
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              p = -1,
              v = -1,
              T = 0,
              U = 0,
              j = e,
              D = null;
            t: for (;;) {
              for (
                var M;
                j !== n || (u !== 0 && j.nodeType !== 3) || (p = o + u),
                  j !== r || (l !== 0 && j.nodeType !== 3) || (v = o + l),
                  j.nodeType === 3 && (o += j.nodeValue.length),
                  (M = j.firstChild) !== null;

              )
                (D = j), (j = M);
              for (;;) {
                if (j === e) break t;
                if (
                  (D === n && ++T === u && (p = o),
                  D === r && ++U === l && (v = o),
                  (M = j.nextSibling) !== null)
                )
                  break;
                (j = D), (D = j.parentNode);
              }
              j = M;
            }
            n = p === -1 || v === -1 ? null : { start: p, end: v };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Ic = { focusedElem: e, selectionRange: n }, Ri = !1, Xe = t;
      Xe !== null;

    )
      if (
        ((t = Xe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (Xe = e);
      else
        for (; Xe !== null; ) {
          switch (((t = Xe), (r = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (e & 1024 && r !== null) {
                (e = void 0),
                  (n = t),
                  (u = r.memoizedProps),
                  (r = r.memoizedState),
                  (l = n.stateNode);
                try {
                  var $ = tl(n.type, u, n.elementType === n.type);
                  (e = l.getSnapshotBeforeUpdate($, r)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (ne) {
                  Ee(n, n.return, ne);
                }
              }
              break;
            case 3:
              if (e & 1024) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  lf(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      lf(e);
                      break;
                    default:
                      e.textContent = "";
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
            default:
              if (e & 1024) throw Error(c(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Xe = e);
            break;
          }
          Xe = t.return;
        }
    return ($ = Md), (Md = !1), $;
  }
  function Ud(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        un(e, n), l & 4 && Ha(5, n);
        break;
      case 1:
        if ((un(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (p) {
              Ee(n, n.return, p);
            }
          else {
            var u = tl(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (p) {
              Ee(n, n.return, p);
            }
          }
        l & 64 && wd(n), l & 512 && al(n, n.return);
        break;
      case 3:
        if ((un(e, n), l & 64 && ((l = n.updateQueue), l !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            _d(l, e);
          } catch (p) {
            Ee(n, n.return, p);
          }
        }
        break;
      case 26:
        un(e, n), l & 512 && al(n, n.return);
        break;
      case 27:
      case 5:
        un(e, n), t === null && l & 4 && Dd(n), l & 512 && al(n, n.return);
        break;
      case 12:
        un(e, n);
        break;
      case 13:
        un(e, n), l & 4 && Ld(e, n);
        break;
      case 22:
        if (((u = n.memoizedState !== null || ln), !u)) {
          t = (t !== null && t.memoizedState !== null) || Ce;
          var r = ln,
            o = Ce;
          (ln = u),
            (Ce = t) && !o ? Cn(e, n, (n.subtreeFlags & 8772) !== 0) : un(e, n),
            (ln = r),
            (Ce = o);
        }
        l & 512 &&
          (n.memoizedProps.mode === "manual"
            ? al(n, n.return)
            : st(n, n.return));
        break;
      default:
        un(e, n);
    }
  }
  function Hd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Hd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && sr(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Le = null,
    ot = !1;
  function an(e, t, n) {
    for (n = n.child; n !== null; ) Bd(e, t, n), (n = n.sibling);
  }
  function Bd(e, t, n) {
    if (rt && typeof rt.onCommitFiberUnmount == "function")
      try {
        rt.onCommitFiberUnmount(aa, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Ce || st(n, t),
          an(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Ce || st(n, t);
        var l = Le,
          u = ot;
        for (
          Le = n.stateNode, an(e, t, n), n = n.stateNode, t = n.attributes;
          t.length;

        )
          n.removeAttributeNode(t[0]);
        sr(n), (Le = l), (ot = u);
        break;
      case 5:
        Ce || st(n, t);
      case 6:
        u = Le;
        var r = ot;
        if (((Le = null), an(e, t, n), (Le = u), (ot = r), Le !== null))
          if (ot)
            try {
              (e = Le),
                (l = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(l)
                  : e.removeChild(l);
            } catch (o) {
              Ee(n, t, o);
            }
          else
            try {
              Le.removeChild(n.stateNode);
            } catch (o) {
              Ee(n, t, o);
            }
        break;
      case 18:
        Le !== null &&
          (ot
            ? ((t = Le),
              (n = n.stateNode),
              t.nodeType === 8
                ? nf(t.parentNode, n)
                : t.nodeType === 1 && nf(t, n),
              Ia(t))
            : nf(Le, n.stateNode));
        break;
      case 4:
        (l = Le),
          (u = ot),
          (Le = n.stateNode.containerInfo),
          (ot = !0),
          an(e, t, n),
          (Le = l),
          (ot = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ce || Dn(2, n, t), Ce || Dn(4, n, t), an(e, t, n);
        break;
      case 1:
        Ce ||
          (st(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && xd(n, t, l)),
          an(e, t, n);
        break;
      case 21:
        an(e, t, n);
        break;
      case 22:
        Ce || st(n, t),
          (Ce = (l = Ce) || n.memoizedState !== null),
          an(e, t, n),
          (Ce = l);
        break;
      default:
        an(e, t, n);
    }
  }
  function Ld(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ia(e);
      } catch (n) {
        Ee(t, t.return, n);
      }
  }
  function P0(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new zd()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new zd()),
          t
        );
      default:
        throw Error(c(435, e.tag));
    }
  }
  function Ac(e, t) {
    var n = P0(e);
    t.forEach(function (l) {
      var u = op.bind(null, e, l);
      n.has(l) || (n.add(l), l.then(u, u));
    });
  }
  function Ot(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l],
          r = e,
          o = t,
          p = o;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
            case 5:
              (Le = p.stateNode), (ot = !1);
              break e;
            case 3:
              (Le = p.stateNode.containerInfo), (ot = !0);
              break e;
            case 4:
              (Le = p.stateNode.containerInfo), (ot = !0);
              break e;
          }
          p = p.return;
        }
        if (Le === null) throw Error(c(160));
        Bd(r, o, u),
          (Le = null),
          (ot = !1),
          (r = u.alternate),
          r !== null && (r.return = null),
          (u.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) qd(t, e), (t = t.sibling);
  }
  var Nt = null;
  function qd(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ot(t, e),
          At(e),
          l & 4 && (Dn(3, e, e.return), Ha(3, e), Dn(5, e, e.return));
        break;
      case 1:
        Ot(t, e),
          At(e),
          l & 512 && (Ce || n === null || st(n, n.return)),
          l & 64 &&
            ln &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
        break;
      case 26:
        var u = Nt;
        if (
          (Ot(t, e),
          At(e),
          l & 512 && (Ce || n === null || st(n, n.return)),
          l & 4)
        ) {
          var r = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (n = e.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (l) {
                    case "title":
                      (r = u.getElementsByTagName("title")[0]),
                        (!r ||
                          r[ra] ||
                          r[$e] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = u.createElement(l)),
                          u.head.insertBefore(
                            r,
                            u.querySelector("head > title")
                          )),
                        ke(r, l, n),
                        (r[$e] = e),
                        Ye(r),
                        (l = r);
                      break e;
                    case "link":
                      var o = Dh("link", "href", u).get(l + (n.href || ""));
                      if (o) {
                        for (var p = 0; p < o.length; p++)
                          if (
                            ((r = o[p]),
                            r.getAttribute("href") ===
                              (n.href == null ? null : n.href) &&
                              r.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              r.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              r.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            o.splice(p, 1);
                            break t;
                          }
                      }
                      (r = u.createElement(l)),
                        ke(r, l, n),
                        u.head.appendChild(r);
                      break;
                    case "meta":
                      if (
                        (o = Dh("meta", "content", u).get(
                          l + (n.content || "")
                        ))
                      ) {
                        for (p = 0; p < o.length; p++)
                          if (
                            ((r = o[p]),
                            r.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              r.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              r.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              r.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              r.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            o.splice(p, 1);
                            break t;
                          }
                      }
                      (r = u.createElement(l)),
                        ke(r, l, n),
                        u.head.appendChild(r);
                      break;
                    default:
                      throw Error(c(468, l));
                  }
                  (r[$e] = e), Ye(r), (l = r);
                }
                e.stateNode = l;
              } else Ch(u, e.type, e.stateNode);
            else e.stateNode = xh(u, l, e.memoizedProps);
          else
            r !== l
              ? (r === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : r.count--,
                l === null
                  ? Ch(u, e.type, e.stateNode)
                  : xh(u, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                Cd(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        if (l & 4 && e.alternate === null) {
          (u = e.stateNode), (r = e.memoizedProps);
          try {
            for (var v = u.firstChild; v; ) {
              var T = v.nextSibling,
                U = v.nodeName;
              v[ra] ||
                U === "HEAD" ||
                U === "BODY" ||
                U === "SCRIPT" ||
                U === "STYLE" ||
                (U === "LINK" && v.rel.toLowerCase() === "stylesheet") ||
                u.removeChild(v),
                (v = T);
            }
            for (var j = e.type, D = u.attributes; D.length; )
              u.removeAttributeNode(D[0]);
            ke(u, j, r), (u[$e] = e), (u[lt] = r);
          } catch ($) {
            Ee(e, e.return, $);
          }
        }
      case 5:
        if (
          (Ot(t, e),
          At(e),
          l & 512 && (Ce || n === null || st(n, n.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            Tl(u, "");
          } catch ($) {
            Ee(e, e.return, $);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), Cd(e, u, n !== null ? n.memoizedProps : u)),
          l & 1024 && (Oc = !0);
        break;
      case 6:
        if ((Ot(t, e), At(e), l & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          (l = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = l;
          } catch ($) {
            Ee(e, e.return, $);
          }
        }
        break;
      case 3:
        if (
          ((Si = null),
          (u = Nt),
          (Nt = vi(t.containerInfo)),
          Ot(t, e),
          (Nt = u),
          At(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ia(t.containerInfo);
          } catch ($) {
            Ee(e, e.return, $);
          }
        Oc && ((Oc = !1), jd(e));
        break;
      case 4:
        (l = Nt),
          (Nt = vi(e.stateNode.containerInfo)),
          Ot(t, e),
          At(e),
          (Nt = l);
        break;
      case 12:
        Ot(t, e), At(e);
        break;
      case 13:
        Ot(t, e),
          At(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Uc = Lt()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Ac(e, l)));
        break;
      case 22:
        if (
          (l & 512 && (Ce || n === null || st(n, n.return)),
          (v = e.memoizedState !== null),
          (T = n !== null && n.memoizedState !== null),
          (U = ln),
          (j = Ce),
          (ln = U || v),
          (Ce = j || T),
          Ot(t, e),
          (Ce = j),
          (ln = U),
          At(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          l & 8192 &&
            ((t._visibility = v ? t._visibility & -2 : t._visibility | 1),
            v && ((t = ln || Ce), n === null || T || t || jl(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          e: for (n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (n === null) {
                T = n = t;
                try {
                  if (((u = T.stateNode), v))
                    (r = u.style),
                      typeof r.setProperty == "function"
                        ? r.setProperty("display", "none", "important")
                        : (r.display = "none");
                  else {
                    (o = T.stateNode), (p = T.memoizedProps.style);
                    var M =
                      p != null && p.hasOwnProperty("display")
                        ? p.display
                        : null;
                    o.style.display =
                      M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                  }
                } catch ($) {
                  Ee(T, T.return, $);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                T = t;
                try {
                  T.stateNode.nodeValue = v ? "" : T.memoizedProps;
                } catch ($) {
                  Ee(T, T.return, $);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), (t = t.return);
            }
            n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), Ac(e, n))));
        break;
      case 19:
        Ot(t, e),
          At(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Ac(e, l)));
        break;
      case 21:
        break;
      default:
        Ot(t, e), At(e);
    }
  }
  function At(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var n = e.return; n !== null; ) {
              if (Nd(n)) {
                var l = n;
                break e;
              }
              n = n.return;
            }
            throw Error(c(160));
          }
          switch (l.tag) {
            case 27:
              var u = l.stateNode,
                r = Tc(e);
              li(e, r, u);
              break;
            case 5:
              var o = l.stateNode;
              l.flags & 32 && (Tl(o, ""), (l.flags &= -33));
              var p = Tc(e);
              li(e, p, o);
              break;
            case 3:
            case 4:
              var v = l.stateNode.containerInfo,
                T = Tc(e);
              Rc(e, T, v);
              break;
            default:
              throw Error(c(161));
          }
        }
      } catch (U) {
        Ee(e, e.return, U);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function jd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        jd(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function un(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Ud(e, t.alternate, t), (t = t.sibling);
  }
  function jl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Dn(4, t, t.return), jl(t);
          break;
        case 1:
          st(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && xd(t, t.return, n),
            jl(t);
          break;
        case 26:
        case 27:
        case 5:
          st(t, t.return), jl(t);
          break;
        case 22:
          st(t, t.return), t.memoizedState === null && jl(t);
          break;
        default:
          jl(t);
      }
      e = e.sibling;
    }
  }
  function Cn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        u = e,
        r = t,
        o = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Cn(u, r, n), Ha(4, r);
          break;
        case 1:
          if (
            (Cn(u, r, n),
            (l = r),
            (u = l.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (T) {
              Ee(l, l.return, T);
            }
          if (((l = r), (u = l.updateQueue), u !== null)) {
            var p = l.stateNode;
            try {
              var v = u.shared.hiddenCallbacks;
              if (v !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < v.length; u++)
                  Ad(v[u], p);
            } catch (T) {
              Ee(l, l.return, T);
            }
          }
          n && o & 64 && wd(r), al(r, r.return);
          break;
        case 26:
        case 27:
        case 5:
          Cn(u, r, n), n && l === null && o & 4 && Dd(r), al(r, r.return);
          break;
        case 12:
          Cn(u, r, n);
          break;
        case 13:
          Cn(u, r, n), n && o & 4 && Ld(u, r);
          break;
        case 22:
          r.memoizedState === null && Cn(u, r, n), al(r, r.return);
          break;
        default:
          Cn(u, r, n);
      }
      t = t.sibling;
    }
  }
  function _c(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Aa(n));
  }
  function wc(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Aa(e));
  }
  function Nn(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Yd(e, t, n, l), (t = t.sibling);
  }
  function Yd(e, t, n, l) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Nn(e, t, n, l), u & 2048 && Ha(9, t);
        break;
      case 3:
        Nn(e, t, n, l),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Aa(e)));
        break;
      case 12:
        if (u & 2048) {
          Nn(e, t, n, l), (e = t.stateNode);
          try {
            var r = t.memoizedProps,
              o = r.id,
              p = r.onPostCommit;
            typeof p == "function" &&
              p(
                o,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (v) {
            Ee(t, t.return, v);
          }
        } else Nn(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        (r = t.stateNode),
          t.memoizedState !== null
            ? r._visibility & 4
              ? Nn(e, t, n, l)
              : Ba(e, t)
            : r._visibility & 4
            ? Nn(e, t, n, l)
            : ((r._visibility |= 4),
              Yl(e, t, n, l, (t.subtreeFlags & 10256) !== 0)),
          u & 2048 && _c(t.alternate, t);
        break;
      case 24:
        Nn(e, t, n, l), u & 2048 && wc(t.alternate, t);
        break;
      default:
        Nn(e, t, n, l);
    }
  }
  function Yl(e, t, n, l, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var r = e,
        o = t,
        p = n,
        v = l,
        T = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Yl(r, o, p, v, u), Ha(8, o);
          break;
        case 23:
          break;
        case 22:
          var U = o.stateNode;
          o.memoizedState !== null
            ? U._visibility & 4
              ? Yl(r, o, p, v, u)
              : Ba(r, o)
            : ((U._visibility |= 4), Yl(r, o, p, v, u)),
            u && T & 2048 && _c(o.alternate, o);
          break;
        case 24:
          Yl(r, o, p, v, u), u && T & 2048 && wc(o.alternate, o);
          break;
        default:
          Yl(r, o, p, v, u);
      }
      t = t.sibling;
    }
  }
  function Ba(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          u = l.flags;
        switch (l.tag) {
          case 22:
            Ba(n, l), u & 2048 && _c(l.alternate, l);
            break;
          case 24:
            Ba(n, l), u & 2048 && wc(l.alternate, l);
            break;
          default:
            Ba(n, l);
        }
        t = t.sibling;
      }
  }
  var La = 8192;
  function Gl(e) {
    if (e.subtreeFlags & La)
      for (e = e.child; e !== null; ) Gd(e), (e = e.sibling);
  }
  function Gd(e) {
    switch (e.tag) {
      case 26:
        Gl(e),
          e.flags & La &&
            e.memoizedState !== null &&
            Yp(Nt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Gl(e);
        break;
      case 3:
      case 4:
        var t = Nt;
        (Nt = vi(e.stateNode.containerInfo)), Gl(e), (Nt = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = La), (La = 16777216), Gl(e), (La = t))
            : Gl(e));
        break;
      default:
        Gl(e);
    }
  }
  function Xd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function qa(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (Xe = l), Vd(l, e);
        }
      Xd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Qd(e), (e = e.sibling);
  }
  function Qd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        qa(e), e.flags & 2048 && Dn(9, e, e.return);
        break;
      case 3:
        qa(e);
        break;
      case 12:
        qa(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), ai(e))
          : qa(e);
        break;
      default:
        qa(e);
    }
  }
  function ai(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (Xe = l), Vd(l, e);
        }
      Xd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Dn(8, t, t.return), ai(t);
          break;
        case 22:
          (n = t.stateNode),
            n._visibility & 4 && ((n._visibility &= -5), ai(t));
          break;
        default:
          ai(t);
      }
      e = e.sibling;
    }
  }
  function Vd(e, t) {
    for (; Xe !== null; ) {
      var n = Xe;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Dn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Aa(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), (Xe = l);
      else
        e: for (n = e; Xe !== null; ) {
          l = Xe;
          var u = l.sibling,
            r = l.return;
          if ((Hd(l), l === n)) {
            Xe = null;
            break e;
          }
          if (u !== null) {
            (u.return = r), (Xe = u);
            break e;
          }
          Xe = r;
        }
    }
  }
  function I0(e, t, n, l) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function _t(e, t, n, l) {
    return new I0(e, t, n, l);
  }
  function xc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function zn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = _t(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 31457280),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Zd(e, t) {
    e.flags &= 31457282;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function ui(e, t, n, l, u, r) {
    var o = 0;
    if (((l = e), typeof e == "function")) xc(e) && (o = 1);
    else if (typeof e == "string")
      o = qp(e, n, Bt.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case g:
          return ul(n.children, u, r, t);
        case m:
          (o = 8), (u |= 24);
          break;
        case b:
          return (
            (e = _t(12, n, t, u | 2)), (e.elementType = b), (e.lanes = r), e
          );
        case B:
          return (e = _t(13, n, t, u)), (e.elementType = B), (e.lanes = r), e;
        case x:
          return (e = _t(19, n, t, u)), (e.elementType = x), (e.lanes = r), e;
        case L:
          return Kd(n, u, r, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case O:
              case C:
                o = 10;
                break e;
              case w:
                o = 9;
                break e;
              case R:
                o = 11;
                break e;
              case H:
                o = 14;
                break e;
              case X:
                (o = 16), (l = null);
                break e;
            }
          (o = 29),
            (n = Error(c(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (t = _t(o, n, t, u)), (t.elementType = e), (t.type = l), (t.lanes = r), t
    );
  }
  function ul(e, t, n, l) {
    return (e = _t(7, e, l, t)), (e.lanes = n), e;
  }
  function Kd(e, t, n, l) {
    (e = _t(22, e, l, t)), (e.elementType = L), (e.lanes = n);
    var u = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var r = u._current;
        if (r === null) throw Error(c(456));
        if (!(u._pendingVisibility & 2)) {
          var o = Sn(r, 2);
          o !== null && ((u._pendingVisibility |= 2), tt(o, r, 2));
        }
      },
      attach: function () {
        var r = u._current;
        if (r === null) throw Error(c(456));
        if (u._pendingVisibility & 2) {
          var o = Sn(r, 2);
          o !== null && ((u._pendingVisibility &= -3), tt(o, r, 2));
        }
      },
    };
    return (e.stateNode = u), e;
  }
  function Dc(e, t, n) {
    return (e = _t(6, e, null, t)), (e.lanes = n), e;
  }
  function Cc(e, t, n) {
    return (
      (t = _t(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function rn(e) {
    e.flags |= 4;
  }
  function kd(e, t) {
    if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Nh(t))) {
      if (
        ((t = Rt.current),
        t !== null &&
          ((ye & 4194176) === ye
            ? jt !== null
            : ((ye & 62914560) !== ye && !(ye & 536870912)) || t !== jt))
      )
        throw ((Ta = Hr), fo);
      e.flags |= 8192;
    }
  }
  function ii(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? ss() : 536870912), (e.lanes |= t), (Ql |= t));
  }
  function ja(e, t) {
    if (!pe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), (n = n.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (n |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags & 31457280),
          (l |= u.flags & 31457280),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (n |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags),
          (l |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = n), t;
  }
  function ep(e, t, n) {
    var l = t.pendingProps;
    switch ((Mr(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _e(t), null;
      case 1:
        return _e(t), null;
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          nn(je),
          pl(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (va(t)
              ? rn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Ct !== null && (qc(Ct), (Ct = null)))),
          _e(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (rn(t),
              n !== null ? (_e(t), kd(t, n)) : (_e(t), (t.flags &= -16777217)))
            : n
            ? n !== e.memoizedState
              ? (rn(t), _e(t), kd(t, n))
              : (_e(t), (t.flags &= -16777217))
            : (e.memoizedProps !== l && rn(t), _e(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        vu(t), (n = pn.current);
        var u = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && rn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(c(166));
            return _e(t), null;
          }
          (e = Bt.current),
            va(t) ? ro(t) : ((e = Rh(u, l, n)), (t.stateNode = e), rn(t));
        }
        return _e(t), null;
      case 5:
        if ((vu(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && rn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(c(166));
            return _e(t), null;
          }
          if (((e = Bt.current), va(t))) ro(t);
          else {
            switch (((u = gi(pn.current)), e)) {
              case 1:
                e = u.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = u.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = u.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (e = u.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof l.is == "string"
                        ? u.createElement("select", { is: l.is })
                        : u.createElement("select")),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size);
                    break;
                  default:
                    e =
                      typeof l.is == "string"
                        ? u.createElement(n, { is: l.is })
                        : u.createElement(n);
                }
            }
            (e[$e] = t), (e[lt] = l);
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === t) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) break e;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            t.stateNode = e;
            e: switch ((ke(e, n, l), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && rn(t);
          }
        }
        return _e(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && rn(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(c(166));
          if (((e = pn.current), va(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (l = null),
              (u = et),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            (e[$e] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                gh(e.nodeValue, n)
              )),
              e || $n(t);
          } else (e = gi(e).createTextNode(l)), (e[$e] = t), (t.stateNode = e);
        }
        return _e(t), null;
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = va(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(c(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(c(317));
              u[$e] = t;
            } else
              ba(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            _e(t), (u = !1);
          } else Ct !== null && (qc(Ct), (Ct = null)), (u = !0);
          if (!u) return t.flags & 256 ? (Pt(t), t) : (Pt(t), null);
        }
        if ((Pt(t), t.flags & 128)) return (t.lanes = n), t;
        if (
          ((n = l !== null), (e = e !== null && e.memoizedState !== null), n)
        ) {
          (l = t.child),
            (u = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (u = l.alternate.memoizedState.cachePool.pool);
          var r = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (r = l.memoizedState.cachePool.pool),
            r !== u && (l.flags |= 2048);
        }
        return (
          n !== e && n && (t.child.flags |= 8192),
          ii(t, t.updateQueue),
          _e(t),
          null
        );
      case 4:
        return pl(), e === null && $c(t.stateNode.containerInfo), _e(t), null;
      case 10:
        return nn(t.type), _e(t), null;
      case 19:
        if ((Ue(qe), (u = t.memoizedState), u === null)) return _e(t), null;
        if (((l = (t.flags & 128) !== 0), (r = u.rendering), r === null))
          if (l) ja(u, !1);
          else {
            if (Ne !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((r = Qu(e)), r !== null)) {
                  for (
                    t.flags |= 128,
                      ja(u, !1),
                      e = r.updateQueue,
                      t.updateQueue = e,
                      ii(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    Zd(n, e), (n = n.sibling);
                  return Ae(qe, (qe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              Lt() > ri &&
              ((t.flags |= 128), (l = !0), ja(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Qu(r)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                ii(t, e),
                ja(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !r.alternate &&
                  !pe)
              )
                return _e(t), null;
            } else
              2 * Lt() - u.renderingStartTime > ri &&
                n !== 536870912 &&
                ((t.flags |= 128), (l = !0), ja(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((r.sibling = t.child), (t.child = r))
            : ((e = u.last),
              e !== null ? (e.sibling = r) : (t.child = r),
              (u.last = r));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = Lt()),
            (t.sibling = null),
            (e = qe.current),
            Ae(qe, l ? (e & 1) | 2 : e & 1),
            t)
          : (_e(t), null);
      case 22:
      case 23:
        return (
          Pt(t),
          Lr(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? n & 536870912 &&
              !(t.flags & 128) &&
              (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _e(t),
          (n = t.updateQueue),
          n !== null && ii(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && Ue(Wn),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          nn(je),
          _e(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function tp(e, t) {
    switch ((Mr(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          nn(je),
          pl(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return vu(t), null;
      case 13:
        if (
          (Pt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(c(340));
          ba();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Ue(qe), null;
      case 4:
        return pl(), null;
      case 10:
        return nn(t.type), null;
      case 22:
      case 23:
        return (
          Pt(t),
          Lr(),
          e !== null && Ue(Wn),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return nn(je), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Jd(e, t) {
    switch ((Mr(t), t.tag)) {
      case 3:
        nn(je), pl();
        break;
      case 26:
      case 27:
      case 5:
        vu(t);
        break;
      case 4:
        pl();
        break;
      case 13:
        Pt(t);
        break;
      case 19:
        Ue(qe);
        break;
      case 10:
        nn(t.type);
        break;
      case 22:
      case 23:
        Pt(t), Lr(), e !== null && Ue(Wn);
        break;
      case 24:
        nn(je);
    }
  }
  var np = {
      getCacheForType: function (e) {
        var t = Fe(je),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      },
    },
    lp = typeof WeakMap == "function" ? WeakMap : Map,
    we = 0,
    Re = null,
    oe = null,
    ye = 0,
    Oe = 0,
    dt = null,
    cn = !1,
    Xl = !1,
    Nc = !1,
    fn = 0,
    Ne = 0,
    Mn = 0,
    il = 0,
    zc = 0,
    wt = 0,
    Ql = 0,
    Ya = null,
    Gt = null,
    Mc = !1,
    Uc = 0,
    ri = 1 / 0,
    ci = null,
    Un = null,
    fi = !1,
    rl = null,
    Ga = 0,
    Hc = 0,
    Bc = null,
    Xa = 0,
    Lc = null;
  function ht() {
    if (we & 2 && ye !== 0) return ye & -ye;
    if (Z.T !== null) {
      var e = Ul;
      return e !== 0 ? e : Zc();
    }
    return ms();
  }
  function $d() {
    wt === 0 && (wt = !(ye & 536870912) || pe ? fs() : 536870912);
    var e = Rt.current;
    return e !== null && (e.flags |= 32), wt;
  }
  function tt(e, t, n) {
    ((e === Re && Oe === 2) || e.cancelPendingCommit !== null) &&
      (Vl(e, 0), sn(e, ye, wt, !1)),
      ia(e, n),
      (!(we & 2) || e !== Re) &&
        (e === Re && (!(we & 2) && (il |= n), Ne === 4 && sn(e, ye, wt, !1)),
        Xt(e));
  }
  function Fd(e, t, n) {
    if (we & 6) throw Error(c(327));
    var l = (!n && (t & 60) === 0 && (t & e.expiredLanes) === 0) || ua(e, t),
      u = l ? ip(e, t) : Gc(e, t, !0),
      r = l;
    do {
      if (u === 0) {
        Xl && !l && sn(e, t, 0, !1);
        break;
      } else if (u === 6) sn(e, t, 0, !cn);
      else {
        if (((n = e.current.alternate), r && !ap(n))) {
          (u = Gc(e, t, !1)), (r = !1);
          continue;
        }
        if (u === 2) {
          if (((r = t), e.errorRecoveryDisabledLanes & r)) var o = 0;
          else
            (o = e.pendingLanes & -536870913),
              (o = o !== 0 ? o : o & 536870912 ? 536870912 : 0);
          if (o !== 0) {
            t = o;
            e: {
              var p = e;
              u = Ya;
              var v = p.current.memoizedState.isDehydrated;
              if ((v && (Vl(p, o).flags |= 256), (o = Gc(p, o, !1)), o !== 2)) {
                if (Nc && !v) {
                  (p.errorRecoveryDisabledLanes |= r), (il |= r), (u = 4);
                  break e;
                }
                (r = Gt), (Gt = u), r !== null && qc(r);
              }
              u = o;
            }
            if (((r = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Vl(e, 0), sn(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), u)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194176) === t) {
                sn(l, t, wt, !cn);
                break e;
              }
              break;
            case 2:
              Gt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if (
            ((l.finishedWork = n),
            (l.finishedLanes = t),
            (t & 62914560) === t && ((r = Uc + 300 - Lt()), 10 < r))
          ) {
            if ((sn(l, t, wt, !cn), Tu(l, 0) !== 0)) break e;
            l.timeoutHandle = Sh(
              Wd.bind(null, l, n, Gt, ci, Mc, t, wt, il, Ql, cn, 2, -0, 0),
              r
            );
            break e;
          }
          Wd(l, n, Gt, ci, Mc, t, wt, il, Ql, cn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Xt(e);
  }
  function qc(e) {
    Gt === null ? (Gt = e) : Gt.push.apply(Gt, e);
  }
  function Wd(e, t, n, l, u, r, o, p, v, T, U, j, D) {
    var M = t.subtreeFlags;
    if (
      (M & 8192 || (M & 16785408) === 16785408) &&
      ((Ja = { stylesheets: null, count: 0, unsuspend: jp }),
      Gd(t),
      (t = Gp()),
      t !== null)
    ) {
      (e.cancelPendingCommit = t(ah.bind(null, e, n, l, u, o, p, v, 1, j, D))),
        sn(e, r, o, !T);
      return;
    }
    ah(e, n, l, u, o, p, v, U, j, D);
  }
  function ap(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var u = n[l],
            r = u.getSnapshot;
          u = u.value;
          try {
            if (!ft(r(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function sn(e, t, n, l) {
    (t &= ~zc),
      (t &= ~il),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes);
    for (var u = t; 0 < u; ) {
      var r = 31 - ct(u),
        o = 1 << r;
      (l[r] = -1), (u &= ~o);
    }
    n !== 0 && os(e, n, t);
  }
  function si() {
    return we & 6 ? !0 : (Qa(0), !1);
  }
  function jc() {
    if (oe !== null) {
      if (Oe === 0) var e = oe.return;
      else (e = oe), (tn = nl = null), Zr(e), (zl = null), (Ra = 0), (e = oe);
      for (; e !== null; ) Jd(e.alternate, e), (e = e.return);
      oe = null;
    }
  }
  function Vl(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), Rp(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      jc(),
      (Re = e),
      (oe = n = zn(e.current, null)),
      (ye = t),
      (Oe = 0),
      (dt = null),
      (cn = !1),
      (Xl = ua(e, t)),
      (Nc = !1),
      (Ql = wt = zc = il = Mn = Ne = 0),
      (Gt = Ya = null),
      (Mc = !1),
      t & 8 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var u = 31 - ct(l),
          r = 1 << u;
        (t |= e[u]), (l &= ~r);
      }
    return (fn = t), Uu(), n;
  }
  function Pd(e, t) {
    (ce = null),
      (Z.H = Yt),
      t === Ea
        ? ((t = ho()), (Oe = 3))
        : t === fo
        ? ((t = ho()), (Oe = 4))
        : (Oe =
            t === od
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (dt = t),
      oe === null && ((Ne = 1), ei(e, St(t, e.current)));
  }
  function Id() {
    var e = Z.H;
    return (Z.H = Yt), e === null ? Yt : e;
  }
  function eh() {
    var e = Z.A;
    return (Z.A = np), e;
  }
  function Yc() {
    (Ne = 4),
      cn || ((ye & 4194176) !== ye && Rt.current !== null) || (Xl = !0),
      (!(Mn & 134217727) && !(il & 134217727)) ||
        Re === null ||
        sn(Re, ye, wt, !1);
  }
  function Gc(e, t, n) {
    var l = we;
    we |= 2;
    var u = Id(),
      r = eh();
    (Re !== e || ye !== t) && ((ci = null), Vl(e, t)), (t = !1);
    var o = Ne;
    e: do
      try {
        if (Oe !== 0 && oe !== null) {
          var p = oe,
            v = dt;
          switch (Oe) {
            case 8:
              jc(), (o = 6);
              break e;
            case 3:
            case 2:
            case 6:
              Rt.current === null && (t = !0);
              var T = Oe;
              if (((Oe = 0), (dt = null), Zl(e, p, v, T), n && Xl)) {
                o = 0;
                break e;
              }
              break;
            default:
              (T = Oe), (Oe = 0), (dt = null), Zl(e, p, v, T);
          }
        }
        up(), (o = Ne);
        break;
      } catch (U) {
        Pd(e, U);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (tn = nl = null),
      (we = l),
      (Z.H = u),
      (Z.A = r),
      oe === null && ((Re = null), (ye = 0), Uu()),
      o
    );
  }
  function up() {
    for (; oe !== null; ) th(oe);
  }
  function ip(e, t) {
    var n = we;
    we |= 2;
    var l = Id(),
      u = eh();
    Re !== e || ye !== t
      ? ((ci = null), (ri = Lt() + 500), Vl(e, t))
      : (Xl = ua(e, t));
    e: do
      try {
        if (Oe !== 0 && oe !== null) {
          t = oe;
          var r = dt;
          t: switch (Oe) {
            case 1:
              (Oe = 0), (dt = null), Zl(e, t, r, 1);
              break;
            case 2:
              if (so(r)) {
                (Oe = 0), (dt = null), nh(t);
                break;
              }
              (t = function () {
                Oe === 2 && Re === e && (Oe = 7), Xt(e);
              }),
                r.then(t, t);
              break e;
            case 3:
              Oe = 7;
              break e;
            case 4:
              Oe = 5;
              break e;
            case 7:
              so(r)
                ? ((Oe = 0), (dt = null), nh(t))
                : ((Oe = 0), (dt = null), Zl(e, t, r, 7));
              break;
            case 5:
              var o = null;
              switch (oe.tag) {
                case 26:
                  o = oe.memoizedState;
                case 5:
                case 27:
                  var p = oe;
                  if (!o || Nh(o)) {
                    (Oe = 0), (dt = null);
                    var v = p.sibling;
                    if (v !== null) oe = v;
                    else {
                      var T = p.return;
                      T !== null ? ((oe = T), oi(T)) : (oe = null);
                    }
                    break t;
                  }
              }
              (Oe = 0), (dt = null), Zl(e, t, r, 5);
              break;
            case 6:
              (Oe = 0), (dt = null), Zl(e, t, r, 6);
              break;
            case 8:
              jc(), (Ne = 6);
              break e;
            default:
              throw Error(c(462));
          }
        }
        rp();
        break;
      } catch (U) {
        Pd(e, U);
      }
    while (!0);
    return (
      (tn = nl = null),
      (Z.H = l),
      (Z.A = u),
      (we = n),
      oe !== null ? 0 : ((Re = null), (ye = 0), Uu(), Ne)
    );
  }
  function rp() {
    for (; oe !== null && !Dy(); ) th(oe);
  }
  function th(e) {
    var t = Rd(e.alternate, e, fn);
    (e.memoizedProps = e.pendingProps), t === null ? oi(e) : (oe = t);
  }
  function nh(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = gd(n, t, t.pendingProps, t.type, void 0, ye);
        break;
      case 11:
        t = gd(n, t, t.pendingProps, t.type.render, t.ref, ye);
        break;
      case 5:
        Zr(t);
      default:
        Jd(n, t), (t = oe = Zd(t, fn)), (t = Rd(n, t, fn));
    }
    (e.memoizedProps = e.pendingProps), t === null ? oi(e) : (oe = t);
  }
  function Zl(e, t, n, l) {
    (tn = nl = null), Zr(t), (zl = null), (Ra = 0);
    var u = t.return;
    try {
      if ($0(e, u, t, n, ye)) {
        (Ne = 1), ei(e, St(n, e.current)), (oe = null);
        return;
      }
    } catch (r) {
      if (u !== null) throw ((oe = u), r);
      (Ne = 1), ei(e, St(n, e.current)), (oe = null);
      return;
    }
    t.flags & 32768
      ? (pe || l === 1
          ? (e = !0)
          : Xl || ye & 536870912
          ? (e = !1)
          : ((cn = e = !0),
            (l === 2 || l === 3 || l === 6) &&
              ((l = Rt.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        lh(t, e))
      : oi(t);
  }
  function oi(e) {
    var t = e;
    do {
      if (t.flags & 32768) {
        lh(t, cn);
        return;
      }
      e = t.return;
      var n = ep(t.alternate, t, fn);
      if (n !== null) {
        oe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        oe = t;
        return;
      }
      oe = t = e;
    } while (t !== null);
    Ne === 0 && (Ne = 5);
  }
  function lh(e, t) {
    do {
      var n = tp(e.alternate, e);
      if (n !== null) {
        (n.flags &= 32767), (oe = n);
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        oe = e;
        return;
      }
      oe = e = n;
    } while (e !== null);
    (Ne = 6), (oe = null);
  }
  function ah(e, t, n, l, u, r, o, p, v, T) {
    var U = Z.T,
      j = k.p;
    try {
      (k.p = 2), (Z.T = null), cp(e, t, n, l, j, u, r, o, p, v, T);
    } finally {
      (Z.T = U), (k.p = j);
    }
  }
  function cp(e, t, n, l, u, r, o, p) {
    do Kl();
    while (rl !== null);
    if (we & 6) throw Error(c(327));
    var v = e.finishedWork;
    if (((l = e.finishedLanes), v === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), v === e.current))
      throw Error(c(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var T = v.lanes | v.childLanes;
    if (
      ((T |= Cr),
      Yy(e, l, T, r, o, p),
      e === Re && ((oe = Re = null), (ye = 0)),
      (!(v.subtreeFlags & 10256) && !(v.flags & 10256)) ||
        fi ||
        ((fi = !0),
        (Hc = T),
        (Bc = n),
        dp(bu, function () {
          return Kl(), null;
        })),
      (n = (v.flags & 15990) !== 0),
      v.subtreeFlags & 15990 || n
        ? ((n = Z.T),
          (Z.T = null),
          (r = k.p),
          (k.p = 2),
          (o = we),
          (we |= 4),
          W0(e, v),
          qd(v, e),
          z0(Ic, e.containerInfo),
          (Ri = !!Pc),
          (Ic = Pc = null),
          (e.current = v),
          Ud(e, v.alternate, v),
          Cy(),
          (we = o),
          (k.p = r),
          (Z.T = n))
        : (e.current = v),
      fi ? ((fi = !1), (rl = e), (Ga = l)) : uh(e, T),
      (T = e.pendingLanes),
      T === 0 && (Un = null),
      Hy(v.stateNode),
      Xt(e),
      t !== null)
    )
      for (u = e.onRecoverableError, v = 0; v < t.length; v++)
        (T = t[v]), u(T.value, { componentStack: T.stack });
    return (
      Ga & 3 && Kl(),
      (T = e.pendingLanes),
      l & 4194218 && T & 42
        ? e === Lc
          ? Xa++
          : ((Xa = 0), (Lc = e))
        : (Xa = 0),
      Qa(0),
      null
    );
  }
  function uh(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Aa(t)));
  }
  function Kl() {
    if (rl !== null) {
      var e = rl,
        t = Hc;
      Hc = 0;
      var n = hs(Ga),
        l = Z.T,
        u = k.p;
      try {
        if (((k.p = 32 > n ? 32 : n), (Z.T = null), rl === null)) var r = !1;
        else {
          (n = Bc), (Bc = null);
          var o = rl,
            p = Ga;
          if (((rl = null), (Ga = 0), we & 6)) throw Error(c(331));
          var v = we;
          if (
            ((we |= 4),
            Qd(o.current),
            Yd(o, o.current, p, n),
            (we = v),
            Qa(0, !1),
            rt && typeof rt.onPostCommitFiberRoot == "function")
          )
            try {
              rt.onPostCommitFiberRoot(aa, o);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (k.p = u), (Z.T = l), uh(e, t);
      }
    }
    return !1;
  }
  function ih(e, t, n) {
    (t = St(n, t)),
      (t = uc(e.stateNode, t, 2)),
      (e = xn(e, t, 2)),
      e !== null && (ia(e, 2), Xt(e));
  }
  function Ee(e, t, n) {
    if (e.tag === 3) ih(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ih(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Un === null || !Un.has(l)))
          ) {
            (e = St(n, e)),
              (n = fd(2)),
              (l = xn(t, n, 2)),
              l !== null && (sd(n, l, t, e), ia(l, 2), Xt(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Xc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new lp();
      var u = new Set();
      l.set(t, u);
    } else (u = l.get(t)), u === void 0 && ((u = new Set()), l.set(t, u));
    u.has(n) ||
      ((Nc = !0), u.add(n), (e = fp.bind(null, e, t, n)), t.then(e, e));
  }
  function fp(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Re === e &&
        (ye & n) === n &&
        (Ne === 4 || (Ne === 3 && (ye & 62914560) === ye && 300 > Lt() - Uc)
          ? !(we & 2) && Vl(e, 0)
          : (zc |= n),
        Ql === ye && (Ql = 0)),
      Xt(e);
  }
  function rh(e, t) {
    t === 0 && (t = ss()), (e = Sn(e, t)), e !== null && (ia(e, t), Xt(e));
  }
  function sp(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), rh(e, n);
  }
  function op(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          u = e.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    l !== null && l.delete(t), rh(e, n);
  }
  function dp(e, t) {
    return ir(e, t);
  }
  var di = null,
    kl = null,
    Qc = !1,
    hi = !1,
    Vc = !1,
    cl = 0;
  function Xt(e) {
    e !== kl &&
      e.next === null &&
      (kl === null ? (di = kl = e) : (kl = kl.next = e)),
      (hi = !0),
      Qc || ((Qc = !0), mp(hp));
  }
  function Qa(e, t) {
    if (!Vc && hi) {
      Vc = !0;
      do
        for (var n = !1, l = di; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var r = 0;
            else {
              var o = l.suspendedLanes,
                p = l.pingedLanes;
              (r = (1 << (31 - ct(42 | e) + 1)) - 1),
                (r &= u & ~(o & ~p)),
                (r = r & 201326677 ? (r & 201326677) | 1 : r ? r | 2 : 0);
            }
            r !== 0 && ((n = !0), sh(l, r));
          } else
            (r = ye),
              (r = Tu(l, l === Re ? r : 0)),
              !(r & 3) || ua(l, r) || ((n = !0), sh(l, r));
          l = l.next;
        }
      while (n);
      Vc = !1;
    }
  }
  function hp() {
    hi = Qc = !1;
    var e = 0;
    cl !== 0 && (Tp() && (e = cl), (cl = 0));
    for (var t = Lt(), n = null, l = di; l !== null; ) {
      var u = l.next,
        r = ch(l, t);
      r === 0
        ? ((l.next = null),
          n === null ? (di = u) : (n.next = u),
          u === null && (kl = n))
        : ((n = l), (e !== 0 || r & 3) && (hi = !0)),
        (l = u);
    }
    Qa(e);
  }
  function ch(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        u = e.expirationTimes,
        r = e.pendingLanes & -62914561;
      0 < r;

    ) {
      var o = 31 - ct(r),
        p = 1 << o,
        v = u[o];
      v === -1
        ? (!(p & n) || p & l) && (u[o] = jy(p, t))
        : v <= t && (e.expiredLanes |= p),
        (r &= ~p);
    }
    if (
      ((t = Re),
      (n = ye),
      (n = Tu(e, e === t ? n : 0)),
      (l = e.callbackNode),
      n === 0 || (e === t && Oe === 2) || e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && rr(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if (!(n & 3) || ua(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && rr(l), hs(n))) {
        case 2:
        case 8:
          n = rs;
          break;
        case 32:
          n = bu;
          break;
        case 268435456:
          n = cs;
          break;
        default:
          n = bu;
      }
      return (
        (l = fh.bind(null, e)),
        (n = ir(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && rr(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function fh(e, t) {
    var n = e.callbackNode;
    if (Kl() && e.callbackNode !== n) return null;
    var l = ye;
    return (
      (l = Tu(e, e === Re ? l : 0)),
      l === 0
        ? null
        : (Fd(e, l, t),
          ch(e, Lt()),
          e.callbackNode != null && e.callbackNode === n
            ? fh.bind(null, e)
            : null)
    );
  }
  function sh(e, t) {
    if (Kl()) return null;
    Fd(e, t, !0);
  }
  function mp(e) {
    Op(function () {
      we & 6 ? ir(is, e) : e();
    });
  }
  function Zc() {
    return cl === 0 && (cl = fs()), cl;
  }
  function oh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : wu("" + e);
  }
  function dh(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function yp(e, t, n, l, u) {
    if (t === "submit" && n && n.stateNode === u) {
      var r = oh((u[lt] || null).action),
        o = l.submitter;
      o &&
        ((t = (t = o[lt] || null)
          ? oh(t.formAction)
          : o.getAttribute("formAction")),
        t !== null && ((r = t), (o = null)));
      var p = new Nu("action", "action", null, l, u);
      e.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (cl !== 0) {
                  var v = o ? dh(u, o) : new FormData(u);
                  ec(
                    n,
                    { pending: !0, data: v, method: u.method, action: r },
                    null,
                    v
                  );
                }
              } else
                typeof r == "function" &&
                  (p.preventDefault(),
                  (v = o ? dh(u, o) : new FormData(u)),
                  ec(
                    n,
                    { pending: !0, data: v, method: u.method, action: r },
                    r,
                    v
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Kc = 0; Kc < lo.length; Kc++) {
    var kc = lo[Kc],
      pp = kc.toLowerCase(),
      gp = kc[0].toUpperCase() + kc.slice(1);
    Dt(pp, "on" + gp);
  }
  Dt(Ps, "onAnimationEnd"),
    Dt(Is, "onAnimationIteration"),
    Dt(eo, "onAnimationStart"),
    Dt("dblclick", "onDoubleClick"),
    Dt("focusin", "onFocus"),
    Dt("focusout", "onBlur"),
    Dt(U0, "onTransitionRun"),
    Dt(H0, "onTransitionStart"),
    Dt(B0, "onTransitionCancel"),
    Dt(to, "onTransitionEnd"),
    Sl("onMouseEnter", ["mouseout", "mouseover"]),
    Sl("onMouseLeave", ["mouseout", "mouseover"]),
    Sl("onPointerEnter", ["pointerout", "pointerover"]),
    Sl("onPointerLeave", ["pointerout", "pointerover"]),
    Qn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Qn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Qn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Qn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Qn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Va =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    vp = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Va)
    );
  function hh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        u = l.event;
      l = l.listeners;
      e: {
        var r = void 0;
        if (t)
          for (var o = l.length - 1; 0 <= o; o--) {
            var p = l[o],
              v = p.instance,
              T = p.currentTarget;
            if (((p = p.listener), v !== r && u.isPropagationStopped()))
              break e;
            (r = p), (u.currentTarget = T);
            try {
              r(u);
            } catch (U) {
              Iu(U);
            }
            (u.currentTarget = null), (r = v);
          }
        else
          for (o = 0; o < l.length; o++) {
            if (
              ((p = l[o]),
              (v = p.instance),
              (T = p.currentTarget),
              (p = p.listener),
              v !== r && u.isPropagationStopped())
            )
              break e;
            (r = p), (u.currentTarget = T);
            try {
              r(u);
            } catch (U) {
              Iu(U);
            }
            (u.currentTarget = null), (r = v);
          }
      }
    }
  }
  function he(e, t) {
    var n = t[fr];
    n === void 0 && (n = t[fr] = new Set());
    var l = e + "__bubble";
    n.has(l) || (mh(t, e, 2, !1), n.add(l));
  }
  function Jc(e, t, n) {
    var l = 0;
    t && (l |= 4), mh(n, e, l, t);
  }
  var mi = "_reactListening" + Math.random().toString(36).slice(2);
  function $c(e) {
    if (!e[mi]) {
      (e[mi] = !0),
        ps.forEach(function (n) {
          n !== "selectionchange" && (vp.has(n) || Jc(n, !1, e), Jc(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[mi] || ((t[mi] = !0), Jc("selectionchange", !1, t));
    }
  }
  function mh(e, t, n, l) {
    switch (Lh(t)) {
      case 2:
        var u = Vp;
        break;
      case 8:
        u = Zp;
        break;
      default:
        u = ff;
    }
    (n = u.bind(null, t, n, e)),
      (u = void 0),
      !gr ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      l
        ? u !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: u })
          : e.addEventListener(t, n, !0)
        : u !== void 0
        ? e.addEventListener(t, n, { passive: u })
        : e.addEventListener(t, n, !1);
  }
  function Fc(e, t, n, l, u) {
    var r = l;
    if (!(t & 1) && !(t & 2) && l !== null)
      e: for (;;) {
        if (l === null) return;
        var o = l.tag;
        if (o === 3 || o === 4) {
          var p = l.stateNode.containerInfo;
          if (p === u || (p.nodeType === 8 && p.parentNode === u)) break;
          if (o === 4)
            for (o = l.return; o !== null; ) {
              var v = o.tag;
              if (
                (v === 3 || v === 4) &&
                ((v = o.stateNode.containerInfo),
                v === u || (v.nodeType === 8 && v.parentNode === u))
              )
                return;
              o = o.return;
            }
          for (; p !== null; ) {
            if (((o = Xn(p)), o === null)) return;
            if (((v = o.tag), v === 5 || v === 6 || v === 26 || v === 27)) {
              l = r = o;
              continue e;
            }
            p = p.parentNode;
          }
        }
        l = l.return;
      }
    xs(function () {
      var T = r,
        U = yr(n),
        j = [];
      e: {
        var D = no.get(e);
        if (D !== void 0) {
          var M = Nu,
            $ = e;
          switch (e) {
            case "keypress":
              if (Du(n) === 0) break e;
            case "keydown":
            case "keyup":
              M = o0;
              break;
            case "focusin":
              ($ = "focus"), (M = Er);
              break;
            case "focusout":
              ($ = "blur"), (M = Er);
              break;
            case "beforeblur":
            case "afterblur":
              M = Er;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              M = Ns;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = Iy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = m0;
              break;
            case Ps:
            case Is:
            case eo:
              M = n0;
              break;
            case to:
              M = p0;
              break;
            case "scroll":
            case "scrollend":
              M = Wy;
              break;
            case "wheel":
              M = v0;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = a0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = Ms;
              break;
            case "toggle":
            case "beforetoggle":
              M = S0;
          }
          var ne = (t & 4) !== 0,
            ze = !ne && (e === "scroll" || e === "scrollend"),
            A = ne ? (D !== null ? D + "Capture" : null) : D;
          ne = [];
          for (var E = T, _; E !== null; ) {
            var q = E;
            if (
              ((_ = q.stateNode),
              (q = q.tag),
              (q !== 5 && q !== 26 && q !== 27) ||
                _ === null ||
                A === null ||
                ((q = fa(E, A)), q != null && ne.push(Za(E, q, _))),
              ze)
            )
              break;
            E = E.return;
          }
          0 < ne.length &&
            ((D = new M(D, $, null, n, U)),
            j.push({ event: D, listeners: ne }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((D = e === "mouseover" || e === "pointerover"),
            (M = e === "mouseout" || e === "pointerout"),
            D &&
              n !== mr &&
              ($ = n.relatedTarget || n.fromElement) &&
              (Xn($) || $[gl]))
          )
            break e;
          if (
            (M || D) &&
            ((D =
              U.window === U
                ? U
                : (D = U.ownerDocument)
                ? D.defaultView || D.parentWindow
                : window),
            M
              ? (($ = n.relatedTarget || n.toElement),
                (M = T),
                ($ = $ ? Xn($) : null),
                $ !== null &&
                  ((ze = ee($)),
                  (ne = $.tag),
                  $ !== ze || (ne !== 5 && ne !== 27 && ne !== 6)) &&
                  ($ = null))
              : ((M = null), ($ = T)),
            M !== $)
          ) {
            if (
              ((ne = Ns),
              (q = "onMouseLeave"),
              (A = "onMouseEnter"),
              (E = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ne = Ms),
                (q = "onPointerLeave"),
                (A = "onPointerEnter"),
                (E = "pointer")),
              (ze = M == null ? D : ca(M)),
              (_ = $ == null ? D : ca($)),
              (D = new ne(q, E + "leave", M, n, U)),
              (D.target = ze),
              (D.relatedTarget = _),
              (q = null),
              Xn(U) === T &&
                ((ne = new ne(A, E + "enter", $, n, U)),
                (ne.target = _),
                (ne.relatedTarget = ze),
                (q = ne)),
              (ze = q),
              M && $)
            )
              t: {
                for (ne = M, A = $, E = 0, _ = ne; _; _ = Jl(_)) E++;
                for (_ = 0, q = A; q; q = Jl(q)) _++;
                for (; 0 < E - _; ) (ne = Jl(ne)), E--;
                for (; 0 < _ - E; ) (A = Jl(A)), _--;
                for (; E--; ) {
                  if (ne === A || (A !== null && ne === A.alternate)) break t;
                  (ne = Jl(ne)), (A = Jl(A));
                }
                ne = null;
              }
            else ne = null;
            M !== null && yh(j, D, M, ne, !1),
              $ !== null && ze !== null && yh(j, ze, $, ne, !0);
          }
        }
        e: {
          if (
            ((D = T ? ca(T) : window),
            (M = D.nodeName && D.nodeName.toLowerCase()),
            M === "select" || (M === "input" && D.type === "file"))
          )
            var J = Gs;
          else if (js(D))
            if (Xs) J = C0;
            else {
              J = x0;
              var se = w0;
            }
          else
            (M = D.nodeName),
              !M ||
              M.toLowerCase() !== "input" ||
              (D.type !== "checkbox" && D.type !== "radio")
                ? T && hr(T.elementType) && (J = Gs)
                : (J = D0);
          if (J && (J = J(e, T))) {
            Ys(j, J, n, U);
            break e;
          }
          se && se(e, D, T),
            e === "focusout" &&
              T &&
              D.type === "number" &&
              T.memoizedProps.value != null &&
              dr(D, "number", D.value);
        }
        switch (((se = T ? ca(T) : window), e)) {
          case "focusin":
            (js(se) || se.contentEditable === "true") &&
              ((_l = se), (wr = T), (ga = null));
            break;
          case "focusout":
            ga = wr = _l = null;
            break;
          case "mousedown":
            xr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (xr = !1), Fs(j, n, U);
            break;
          case "selectionchange":
            if (M0) break;
          case "keydown":
          case "keyup":
            Fs(j, n, U);
        }
        var F;
        if (Rr)
          e: {
            switch (e) {
              case "compositionstart":
                var P = "onCompositionStart";
                break e;
              case "compositionend":
                P = "onCompositionEnd";
                break e;
              case "compositionupdate":
                P = "onCompositionUpdate";
                break e;
            }
            P = void 0;
          }
        else
          Al
            ? Ls(e, n) && (P = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (P = "onCompositionStart");
        P &&
          (Us &&
            n.locale !== "ko" &&
            (Al || P !== "onCompositionStart"
              ? P === "onCompositionEnd" && Al && (F = Ds())
              : ((bn = U),
                (vr = "value" in bn ? bn.value : bn.textContent),
                (Al = !0))),
          (se = yi(T, P)),
          0 < se.length &&
            ((P = new zs(P, e, null, n, U)),
            j.push({ event: P, listeners: se }),
            F ? (P.data = F) : ((F = qs(n)), F !== null && (P.data = F)))),
          (F = T0 ? R0(e, n) : O0(e, n)) &&
            ((P = yi(T, "onBeforeInput")),
            0 < P.length &&
              ((se = new zs("onBeforeInput", "beforeinput", null, n, U)),
              j.push({ event: se, listeners: P }),
              (se.data = F))),
          yp(j, e, T, n, U);
      }
      hh(j, t);
    });
  }
  function Za(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function yi(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var u = e,
        r = u.stateNode;
      (u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          r === null ||
          ((u = fa(e, n)),
          u != null && l.unshift(Za(e, u, r)),
          (u = fa(e, t)),
          u != null && l.push(Za(e, u, r))),
        (e = e.return);
    }
    return l;
  }
  function Jl(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function yh(e, t, n, l, u) {
    for (var r = t._reactName, o = []; n !== null && n !== l; ) {
      var p = n,
        v = p.alternate,
        T = p.stateNode;
      if (((p = p.tag), v !== null && v === l)) break;
      (p !== 5 && p !== 26 && p !== 27) ||
        T === null ||
        ((v = T),
        u
          ? ((T = fa(n, r)), T != null && o.unshift(Za(n, T, v)))
          : u || ((T = fa(n, r)), T != null && o.push(Za(n, T, v)))),
        (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var bp = /\r\n?/g,
    Sp = /\u0000|\uFFFD/g;
  function ph(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        bp,
        `
`
      )
      .replace(Sp, "");
  }
  function gh(e, t) {
    return (t = ph(t)), ph(e) === t;
  }
  function pi() {}
  function Se(e, t, n, l, u, r) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || Tl(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            Tl(e, "" + l);
        break;
      case "className":
        Ou(e, "class", l);
        break;
      case "tabIndex":
        Ou(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ou(e, n, l);
        break;
      case "style":
        _s(e, l, r);
        break;
      case "data":
        if (t !== "object") {
          Ou(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        (l = wu("" + l)), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" &&
            (n === "formAction"
              ? (t !== "input" && Se(e, t, "name", u.name, u, null),
                Se(e, t, "formEncType", u.formEncType, u, null),
                Se(e, t, "formMethod", u.formMethod, u, null),
                Se(e, t, "formTarget", u.formTarget, u, null))
              : (Se(e, t, "encType", u.encType, u, null),
                Se(e, t, "method", u.method, u, null),
                Se(e, t, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        (l = wu("" + l)), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = pi);
        break;
      case "onScroll":
        l != null && he("scroll", e);
        break;
      case "onScrollEnd":
        l != null && he("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
          if (((n = l.__html), n != null)) {
            if (u.children != null) throw Error(c(60));
            e.innerHTML = n;
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
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (n = wu("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "" + l)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
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
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(n, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case "popover":
        he("beforetoggle", e), he("toggle", e), Ru(e, "popover", l);
        break;
      case "xlinkActuate":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        $t(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        $t(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        $t(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Ru(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = $y.get(n) || n), Ru(e, n, l));
    }
  }
  function Wc(e, t, n, l, u, r) {
    switch (n) {
      case "style":
        _s(e, l, r);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
          if (((n = l.__html), n != null)) {
            if (u.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Tl(e, l)
          : (typeof l == "number" || typeof l == "bigint") && Tl(e, "" + l);
        break;
      case "onScroll":
        l != null && he("scroll", e);
        break;
      case "onScrollEnd":
        l != null && he("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = pi);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!gs.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((u = n.endsWith("Capture")),
              (t = n.slice(2, u ? n.length - 7 : void 0)),
              (r = e[lt] || null),
              (r = r != null ? r[n] : null),
              typeof r == "function" && e.removeEventListener(t, r, u),
              typeof l == "function")
            ) {
              typeof r != "function" &&
                r !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, u);
              break e;
            }
            n in e
              ? (e[n] = l)
              : l === !0
              ? e.setAttribute(n, "")
              : Ru(e, n, l);
          }
    }
  }
  function ke(e, t, n) {
    switch (t) {
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
        he("error", e), he("load", e);
        var l = !1,
          u = !1,
          r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var o = n[r];
            if (o != null)
              switch (r) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  Se(e, t, r, o, n, null);
              }
          }
        u && Se(e, t, "srcSet", n.srcSet, n, null),
          l && Se(e, t, "src", n.src, n, null);
        return;
      case "input":
        he("invalid", e);
        var p = (r = o = u = null),
          v = null,
          T = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var U = n[l];
            if (U != null)
              switch (l) {
                case "name":
                  u = U;
                  break;
                case "type":
                  o = U;
                  break;
                case "checked":
                  v = U;
                  break;
                case "defaultChecked":
                  T = U;
                  break;
                case "value":
                  r = U;
                  break;
                case "defaultValue":
                  p = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null) throw Error(c(137, t));
                  break;
                default:
                  Se(e, t, l, U, n, null);
              }
          }
        Ts(e, r, p, v, T, o, u, !1), Au(e);
        return;
      case "select":
        he("invalid", e), (l = o = r = null);
        for (u in n)
          if (n.hasOwnProperty(u) && ((p = n[u]), p != null))
            switch (u) {
              case "value":
                r = p;
                break;
              case "defaultValue":
                o = p;
                break;
              case "multiple":
                l = p;
              default:
                Se(e, t, u, p, n, null);
            }
        (t = r),
          (n = o),
          (e.multiple = !!l),
          t != null ? El(e, !!l, t, !1) : n != null && El(e, !!l, n, !0);
        return;
      case "textarea":
        he("invalid", e), (r = u = l = null);
        for (o in n)
          if (n.hasOwnProperty(o) && ((p = n[o]), p != null))
            switch (o) {
              case "value":
                l = p;
                break;
              case "defaultValue":
                u = p;
                break;
              case "children":
                r = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(c(91));
                break;
              default:
                Se(e, t, o, p, n, null);
            }
        Os(e, l, u, r), Au(e);
        return;
      case "option":
        for (v in n)
          if (n.hasOwnProperty(v) && ((l = n[v]), l != null))
            switch (v) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Se(e, t, v, l, n, null);
            }
        return;
      case "dialog":
        he("cancel", e), he("close", e);
        break;
      case "iframe":
      case "object":
        he("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Va.length; l++) he(Va[l], e);
        break;
      case "image":
        he("error", e), he("load", e);
        break;
      case "details":
        he("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        he("error", e), he("load", e);
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
        for (T in n)
          if (n.hasOwnProperty(T) && ((l = n[T]), l != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Se(e, t, T, l, n, null);
            }
        return;
      default:
        if (hr(t)) {
          for (U in n)
            n.hasOwnProperty(U) &&
              ((l = n[U]), l !== void 0 && Wc(e, t, U, l, n, void 0));
          return;
        }
    }
    for (p in n)
      n.hasOwnProperty(p) && ((l = n[p]), l != null && Se(e, t, p, l, n, null));
  }
  function Ep(e, t, n, l) {
    switch (t) {
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
        var u = null,
          r = null,
          o = null,
          p = null,
          v = null,
          T = null,
          U = null;
        for (M in n) {
          var j = n[M];
          if (n.hasOwnProperty(M) && j != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = j;
              default:
                l.hasOwnProperty(M) || Se(e, t, M, null, l, j);
            }
        }
        for (var D in l) {
          var M = l[D];
          if (((j = n[D]), l.hasOwnProperty(D) && (M != null || j != null)))
            switch (D) {
              case "type":
                r = M;
                break;
              case "name":
                u = M;
                break;
              case "checked":
                T = M;
                break;
              case "defaultChecked":
                U = M;
                break;
              case "value":
                o = M;
                break;
              case "defaultValue":
                p = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null) throw Error(c(137, t));
                break;
              default:
                M !== j && Se(e, t, D, M, l, j);
            }
        }
        or(e, o, p, v, T, U, r, u);
        return;
      case "select":
        M = o = p = D = null;
        for (r in n)
          if (((v = n[r]), n.hasOwnProperty(r) && v != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                M = v;
              default:
                l.hasOwnProperty(r) || Se(e, t, r, null, l, v);
            }
        for (u in l)
          if (
            ((r = l[u]),
            (v = n[u]),
            l.hasOwnProperty(u) && (r != null || v != null))
          )
            switch (u) {
              case "value":
                D = r;
                break;
              case "defaultValue":
                p = r;
                break;
              case "multiple":
                o = r;
              default:
                r !== v && Se(e, t, u, r, l, v);
            }
        (t = p),
          (n = o),
          (l = M),
          D != null
            ? El(e, !!n, D, !1)
            : !!l != !!n &&
              (t != null ? El(e, !!n, t, !0) : El(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        M = D = null;
        for (p in n)
          if (
            ((u = n[p]),
            n.hasOwnProperty(p) && u != null && !l.hasOwnProperty(p))
          )
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                Se(e, t, p, null, l, u);
            }
        for (o in l)
          if (
            ((u = l[o]),
            (r = n[o]),
            l.hasOwnProperty(o) && (u != null || r != null))
          )
            switch (o) {
              case "value":
                D = u;
                break;
              case "defaultValue":
                M = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(c(91));
                break;
              default:
                u !== r && Se(e, t, o, u, l, r);
            }
        Rs(e, D, M);
        return;
      case "option":
        for (var $ in n)
          if (
            ((D = n[$]),
            n.hasOwnProperty($) && D != null && !l.hasOwnProperty($))
          )
            switch ($) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Se(e, t, $, null, l, D);
            }
        for (v in l)
          if (
            ((D = l[v]),
            (M = n[v]),
            l.hasOwnProperty(v) && D !== M && (D != null || M != null))
          )
            switch (v) {
              case "selected":
                e.selected =
                  D && typeof D != "function" && typeof D != "symbol";
                break;
              default:
                Se(e, t, v, D, l, M);
            }
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
        for (var ne in n)
          (D = n[ne]),
            n.hasOwnProperty(ne) &&
              D != null &&
              !l.hasOwnProperty(ne) &&
              Se(e, t, ne, null, l, D);
        for (T in l)
          if (
            ((D = l[T]),
            (M = n[T]),
            l.hasOwnProperty(T) && D !== M && (D != null || M != null))
          )
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(c(137, t));
                break;
              default:
                Se(e, t, T, D, l, M);
            }
        return;
      default:
        if (hr(t)) {
          for (var ze in n)
            (D = n[ze]),
              n.hasOwnProperty(ze) &&
                D !== void 0 &&
                !l.hasOwnProperty(ze) &&
                Wc(e, t, ze, void 0, l, D);
          for (U in l)
            (D = l[U]),
              (M = n[U]),
              !l.hasOwnProperty(U) ||
                D === M ||
                (D === void 0 && M === void 0) ||
                Wc(e, t, U, D, l, M);
          return;
        }
    }
    for (var A in n)
      (D = n[A]),
        n.hasOwnProperty(A) &&
          D != null &&
          !l.hasOwnProperty(A) &&
          Se(e, t, A, null, l, D);
    for (j in l)
      (D = l[j]),
        (M = n[j]),
        !l.hasOwnProperty(j) ||
          D === M ||
          (D == null && M == null) ||
          Se(e, t, j, D, l, M);
  }
  var Pc = null,
    Ic = null;
  function gi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function vh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function bh(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function ef(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var tf = null;
  function Tp() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === tf
        ? !1
        : ((tf = e), !0)
      : ((tf = null), !1);
  }
  var Sh = typeof setTimeout == "function" ? setTimeout : void 0,
    Rp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Eh = typeof Promise == "function" ? Promise : void 0,
    Op =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Eh < "u"
        ? function (e) {
            return Eh.resolve(null).then(e).catch(Ap);
          }
        : Sh;
  function Ap(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function nf(e, t) {
    var n = t,
      l = 0;
    do {
      var u = n.nextSibling;
      if ((e.removeChild(n), u && u.nodeType === 8))
        if (((n = u.data), n === "/$")) {
          if (l === 0) {
            e.removeChild(u), Ia(t);
            return;
          }
          l--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || l++;
      n = u;
    } while (n);
    Ia(t);
  }
  function lf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          lf(n), sr(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function _p(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var u = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[ra])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((r = e.getAttribute("rel")),
                r === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== u.rel ||
                e.getAttribute("href") !== (u.href == null ? null : u.href) ||
                e.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((r = e.getAttribute("src")),
                (r !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  r &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var r = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === r) return e;
      } else return e;
      if (((e = zt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function wp(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = zt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function zt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Th(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Rh(e, t, n) {
    switch (((t = gi(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(c(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(c(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  var xt = new Map(),
    Oh = new Set();
  function vi(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var on = k.d;
  k.d = { f: xp, r: Dp, D: Cp, C: Np, L: zp, m: Mp, X: Hp, S: Up, M: Bp };
  function xp() {
    var e = on.f(),
      t = si();
    return e || t;
  }
  function Dp(e) {
    var t = vl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Wo(t) : on.r(e);
  }
  var $l = typeof document > "u" ? null : document;
  function Ah(e, t, n) {
    var l = $l;
    if (l && typeof t == "string" && t) {
      var u = vt(t);
      (u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof n == "string" && (u += '[crossorigin="' + n + '"]'),
        Oh.has(u) ||
          (Oh.add(u),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(u) === null &&
            ((t = l.createElement("link")),
            ke(t, "link", e),
            Ye(t),
            l.head.appendChild(t)));
    }
  }
  function Cp(e) {
    on.D(e), Ah("dns-prefetch", e, null);
  }
  function Np(e, t) {
    on.C(e, t), Ah("preconnect", e, t);
  }
  function zp(e, t, n) {
    on.L(e, t, n);
    var l = $l;
    if (l && e && t) {
      var u = 'link[rel="preload"][as="' + vt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((u += '[imagesrcset="' + vt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (u += '[imagesizes="' + vt(n.imageSizes) + '"]'))
        : (u += '[href="' + vt(e) + '"]');
      var r = u;
      switch (t) {
        case "style":
          r = Fl(e);
          break;
        case "script":
          r = Wl(e);
      }
      xt.has(r) ||
        ((e = le(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        xt.set(r, e),
        l.querySelector(u) !== null ||
          (t === "style" && l.querySelector(Ka(r))) ||
          (t === "script" && l.querySelector(ka(r))) ||
          ((t = l.createElement("link")),
          ke(t, "link", e),
          Ye(t),
          l.head.appendChild(t)));
    }
  }
  function Mp(e, t) {
    on.m(e, t);
    var n = $l;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + vt(l) + '"][href="' + vt(e) + '"]',
        r = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Wl(e);
      }
      if (
        !xt.has(r) &&
        ((e = le({ rel: "modulepreload", href: e }, t)),
        xt.set(r, e),
        n.querySelector(u) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ka(r))) return;
        }
        (l = n.createElement("link")),
          ke(l, "link", e),
          Ye(l),
          n.head.appendChild(l);
      }
    }
  }
  function Up(e, t, n) {
    on.S(e, t, n);
    var l = $l;
    if (l && e) {
      var u = bl(l).hoistableStyles,
        r = Fl(e);
      t = t || "default";
      var o = u.get(r);
      if (!o) {
        var p = { loading: 0, preload: null };
        if ((o = l.querySelector(Ka(r)))) p.loading = 5;
        else {
          (e = le({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = xt.get(r)) && af(e, n);
          var v = (o = l.createElement("link"));
          Ye(v),
            ke(v, "link", e),
            (v._p = new Promise(function (T, U) {
              (v.onload = T), (v.onerror = U);
            })),
            v.addEventListener("load", function () {
              p.loading |= 1;
            }),
            v.addEventListener("error", function () {
              p.loading |= 2;
            }),
            (p.loading |= 4),
            bi(o, t, l);
        }
        (o = { type: "stylesheet", instance: o, count: 1, state: p }),
          u.set(r, o);
      }
    }
  }
  function Hp(e, t) {
    on.X(e, t);
    var n = $l;
    if (n && e) {
      var l = bl(n).hoistableScripts,
        u = Wl(e),
        r = l.get(u);
      r ||
        ((r = n.querySelector(ka(u))),
        r ||
          ((e = le({ src: e, async: !0 }, t)),
          (t = xt.get(u)) && uf(e, t),
          (r = n.createElement("script")),
          Ye(r),
          ke(r, "link", e),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        l.set(u, r));
    }
  }
  function Bp(e, t) {
    on.M(e, t);
    var n = $l;
    if (n && e) {
      var l = bl(n).hoistableScripts,
        u = Wl(e),
        r = l.get(u);
      r ||
        ((r = n.querySelector(ka(u))),
        r ||
          ((e = le({ src: e, async: !0, type: "module" }, t)),
          (t = xt.get(u)) && uf(e, t),
          (r = n.createElement("script")),
          Ye(r),
          ke(r, "link", e),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        l.set(u, r));
    }
  }
  function _h(e, t, n, l) {
    var u = (u = pn.current) ? vi(u) : null;
    if (!u) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = Fl(n.href)),
            (n = bl(u).hoistableStyles),
            (l = n.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = Fl(n.href);
          var r = bl(u).hoistableStyles,
            o = r.get(e);
          if (
            (o ||
              ((u = u.ownerDocument || u),
              (o = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(e, o),
              (r = u.querySelector(Ka(e))) &&
                !r._p &&
                ((o.instance = r), (o.state.loading = 5)),
              xt.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                xt.set(e, n),
                r || Lp(u, e, n, o.state))),
            t && l === null)
          )
            throw Error(c(528, ""));
          return o;
        }
        if (t && l !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Wl(n)),
              (n = bl(u).hoistableScripts),
              (l = n.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(c(444, e));
    }
  }
  function Fl(e) {
    return 'href="' + vt(e) + '"';
  }
  function Ka(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function wh(e) {
    return le({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Lp(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        ke(t, "link", n),
        Ye(t),
        e.head.appendChild(t));
  }
  function Wl(e) {
    return '[src="' + vt(e) + '"]';
  }
  function ka(e) {
    return "script[async]" + e;
  }
  function xh(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + vt(n.href) + '"]');
          if (l) return (t.instance = l), Ye(l), l;
          var u = le({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            Ye(l),
            ke(l, "style", u),
            bi(l, n.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          u = Fl(n.href);
          var r = e.querySelector(Ka(u));
          if (r) return (t.state.loading |= 4), (t.instance = r), Ye(r), r;
          (l = wh(n)),
            (u = xt.get(u)) && af(l, u),
            (r = (e.ownerDocument || e).createElement("link")),
            Ye(r);
          var o = r;
          return (
            (o._p = new Promise(function (p, v) {
              (o.onload = p), (o.onerror = v);
            })),
            ke(r, "link", l),
            (t.state.loading |= 4),
            bi(r, n.precedence, e),
            (t.instance = r)
          );
        case "script":
          return (
            (r = Wl(n.src)),
            (u = e.querySelector(ka(r)))
              ? ((t.instance = u), Ye(u), u)
              : ((l = n),
                (u = xt.get(r)) && ((l = le({}, n)), uf(l, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                Ye(u),
                ke(u, "link", l),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        !(t.state.loading & 4) &&
        ((l = t.instance), (t.state.loading |= 4), bi(l, n.precedence, e));
    return t.instance;
  }
  function bi(e, t, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = l.length ? l[l.length - 1] : null,
        r = u,
        o = 0;
      o < l.length;
      o++
    ) {
      var p = l[o];
      if (p.dataset.precedence === t) r = p;
      else if (r !== u) break;
    }
    r
      ? r.parentNode.insertBefore(e, r.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function af(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function uf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Si = null;
  function Dh(e, t, n) {
    if (Si === null) {
      var l = new Map(),
        u = (Si = new Map());
      u.set(n, l);
    } else (u = Si), (l = u.get(n)), l || ((l = new Map()), u.set(n, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), n = n.getElementsByTagName(e), u = 0;
      u < n.length;
      u++
    ) {
      var r = n[u];
      if (
        !(
          r[ra] ||
          r[$e] ||
          (e === "link" && r.getAttribute("rel") === "stylesheet")
        ) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var o = r.getAttribute(t) || "";
        o = e + o;
        var p = l.get(o);
        p ? p.push(r) : l.set(o, [r]);
      }
    }
    return l;
  }
  function Ch(e, t, n) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function qp(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Nh(e) {
    return !(e.type === "stylesheet" && !(e.state.loading & 3));
  }
  var Ja = null;
  function jp() {}
  function Yp(e, t, n) {
    if (Ja === null) throw Error(c(475));
    var l = Ja;
    if (
      t.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      !(t.state.loading & 4)
    ) {
      if (t.instance === null) {
        var u = Fl(n.href),
          r = e.querySelector(Ka(u));
        if (r) {
          (e = r._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (l.count++, (l = Ei.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = r),
            Ye(r);
          return;
        }
        (r = e.ownerDocument || e),
          (n = wh(n)),
          (u = xt.get(u)) && af(n, u),
          (r = r.createElement("link")),
          Ye(r);
        var o = r;
        (o._p = new Promise(function (p, v) {
          (o.onload = p), (o.onerror = v);
        })),
          ke(r, "link", n),
          (t.instance = r);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          !(t.state.loading & 3) &&
          (l.count++,
          (t = Ei.bind(l)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function Gp() {
    if (Ja === null) throw Error(c(475));
    var e = Ja;
    return (
      e.stylesheets && e.count === 0 && rf(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && rf(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Ei() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) rf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Ti = null;
  function rf(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Ti = new Map()),
        t.forEach(Xp, e),
        (Ti = null),
        Ei.call(e));
  }
  function Xp(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Ti.get(e);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), Ti.set(e, n);
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            r = 0;
          r < u.length;
          r++
        ) {
          var o = u[r];
          (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") &&
            (n.set(o.dataset.precedence, o), (l = o));
        }
        l && n.set(null, l);
      }
      (u = t.instance),
        (o = u.getAttribute("data-precedence")),
        (r = n.get(o) || l),
        r === l && n.set(null, u),
        n.set(o, u),
        this.count++,
        (l = Ei.bind(this)),
        u.addEventListener("load", l),
        u.addEventListener("error", l),
        r
          ? r.parentNode.insertBefore(u, r.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var $a = {
    $$typeof: C,
    Provider: null,
    Consumer: null,
    _currentValue: me,
    _currentValue2: me,
    _threadCount: 0,
  };
  function Qp(e, t, n, l, u, r, o, p) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = cr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = cr(0)),
      (this.hiddenUpdates = cr(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = u),
      (this.onCaughtError = r),
      (this.onRecoverableError = o),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = p),
      (this.incompleteTransitions = new Map());
  }
  function zh(e, t, n, l, u, r, o, p, v, T, U, j) {
    return (
      (e = new Qp(e, t, n, o, p, v, T, j)),
      (t = 1),
      r === !0 && (t |= 24),
      (r = _t(3, null, null, t)),
      (e.current = r),
      (r.stateNode = e),
      (t = qr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (r.memoizedState = { element: l, isDehydrated: n, cache: t }),
      vc(r),
      e
    );
  }
  function Mh(e) {
    return e ? ((e = Dl), e) : Dl;
  }
  function Uh(e, t, n, l, u, r) {
    (u = Mh(u)),
      l.context === null ? (l.context = u) : (l.pendingContext = u),
      (l = wn(t)),
      (l.payload = { element: n }),
      (r = r === void 0 ? null : r),
      r !== null && (l.callback = r),
      (n = xn(e, l, t)),
      n !== null && (tt(n, e, t), za(n, e, t));
  }
  function Hh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function cf(e, t) {
    Hh(e, t), (e = e.alternate) && Hh(e, t);
  }
  function Bh(e) {
    if (e.tag === 13) {
      var t = Sn(e, 67108864);
      t !== null && tt(t, e, 67108864), cf(e, 67108864);
    }
  }
  var Ri = !0;
  function Vp(e, t, n, l) {
    var u = Z.T;
    Z.T = null;
    var r = k.p;
    try {
      (k.p = 2), ff(e, t, n, l);
    } finally {
      (k.p = r), (Z.T = u);
    }
  }
  function Zp(e, t, n, l) {
    var u = Z.T;
    Z.T = null;
    var r = k.p;
    try {
      (k.p = 8), ff(e, t, n, l);
    } finally {
      (k.p = r), (Z.T = u);
    }
  }
  function ff(e, t, n, l) {
    if (Ri) {
      var u = sf(l);
      if (u === null) Fc(e, t, l, Oi, n), qh(e, l);
      else if (kp(u, e, t, n, l)) l.stopPropagation();
      else if ((qh(e, l), t & 4 && -1 < Kp.indexOf(e))) {
        for (; u !== null; ) {
          var r = vl(u);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var o = Gn(r.pendingLanes);
                  if (o !== 0) {
                    var p = r;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; o; ) {
                      var v = 1 << (31 - ct(o));
                      (p.entanglements[1] |= v), (o &= ~v);
                    }
                    Xt(r), !(we & 6) && ((ri = Lt() + 500), Qa(0));
                  }
                }
                break;
              case 13:
                (p = Sn(r, 2)), p !== null && tt(p, r, 2), si(), cf(r, 2);
            }
          if (((r = sf(l)), r === null && Fc(e, t, l, Oi, n), r === u)) break;
          u = r;
        }
        u !== null && l.stopPropagation();
      } else Fc(e, t, l, null, n);
    }
  }
  function sf(e) {
    return (e = yr(e)), of(e);
  }
  var Oi = null;
  function of(e) {
    if (((Oi = null), (e = Xn(e)), e !== null)) {
      var t = ee(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = Te(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Oi = e), null;
  }
  function Lh(e) {
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
      case "resize":
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
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ny()) {
          case is:
            return 2;
          case rs:
            return 8;
          case bu:
          case zy:
            return 32;
          case cs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var df = !1,
    Hn = null,
    Bn = null,
    Ln = null,
    Fa = new Map(),
    Wa = new Map(),
    qn = [],
    Kp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function qh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Hn = null;
        break;
      case "dragenter":
      case "dragleave":
        Bn = null;
        break;
      case "mouseover":
      case "mouseout":
        Ln = null;
        break;
      case "pointerover":
      case "pointerout":
        Fa.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wa.delete(t.pointerId);
    }
  }
  function Pa(e, t, n, l, u, r) {
    return e === null || e.nativeEvent !== r
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: r,
          targetContainers: [u],
        }),
        t !== null && ((t = vl(t)), t !== null && Bh(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function kp(e, t, n, l, u) {
    switch (t) {
      case "focusin":
        return (Hn = Pa(Hn, e, t, n, l, u)), !0;
      case "dragenter":
        return (Bn = Pa(Bn, e, t, n, l, u)), !0;
      case "mouseover":
        return (Ln = Pa(Ln, e, t, n, l, u)), !0;
      case "pointerover":
        var r = u.pointerId;
        return Fa.set(r, Pa(Fa.get(r) || null, e, t, n, l, u)), !0;
      case "gotpointercapture":
        return (
          (r = u.pointerId), Wa.set(r, Pa(Wa.get(r) || null, e, t, n, l, u)), !0
        );
    }
    return !1;
  }
  function jh(e) {
    var t = Xn(e.target);
    if (t !== null) {
      var n = ee(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Te(n)), t !== null)) {
            (e.blockedOn = t),
              Gy(e.priority, function () {
                if (n.tag === 13) {
                  var l = ht(),
                    u = Sn(n, l);
                  u !== null && tt(u, n, l), cf(n, l);
                }
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ai(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = sf(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        (mr = l), n.target.dispatchEvent(l), (mr = null);
      } else return (t = vl(n)), t !== null && Bh(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Yh(e, t, n) {
    Ai(e) && n.delete(t);
  }
  function Jp() {
    (df = !1),
      Hn !== null && Ai(Hn) && (Hn = null),
      Bn !== null && Ai(Bn) && (Bn = null),
      Ln !== null && Ai(Ln) && (Ln = null),
      Fa.forEach(Yh),
      Wa.forEach(Yh);
  }
  function _i(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      df ||
        ((df = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Jp)));
  }
  var wi = null;
  function Gh(e) {
    wi !== e &&
      ((wi = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        wi === e && (wi = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            u = e[t + 2];
          if (typeof l != "function") {
            if (of(l || n) === null) continue;
            break;
          }
          var r = vl(n);
          r !== null &&
            (e.splice(t, 3),
            (t -= 3),
            ec(r, { pending: !0, data: u, method: n.method, action: l }, l, u));
        }
      }));
  }
  function Ia(e) {
    function t(v) {
      return _i(v, e);
    }
    Hn !== null && _i(Hn, e),
      Bn !== null && _i(Bn, e),
      Ln !== null && _i(Ln, e),
      Fa.forEach(t),
      Wa.forEach(t);
    for (var n = 0; n < qn.length; n++) {
      var l = qn[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < qn.length && ((n = qn[0]), n.blockedOn === null); )
      jh(n), n.blockedOn === null && qn.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var u = n[l],
          r = n[l + 1],
          o = u[lt] || null;
        if (typeof r == "function") o || Gh(n);
        else if (o) {
          var p = null;
          if (r && r.hasAttribute("formAction")) {
            if (((u = r), (o = r[lt] || null))) p = o.formAction;
            else if (of(u) !== null) continue;
          } else p = o.action;
          typeof p == "function" ? (n[l + 1] = p) : (n.splice(l, 3), (l -= 3)),
            Gh(n);
        }
      }
  }
  function hf(e) {
    this._internalRoot = e;
  }
  (xi.prototype.render = hf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      var n = t.current,
        l = ht();
      Uh(n, l, e, t, null, null);
    }),
    (xi.prototype.unmount = hf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && Kl(),
            Uh(e.current, 2, null, e, null, null),
            si(),
            (t[gl] = null);
        }
      });
  function xi(e) {
    this._internalRoot = e;
  }
  xi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ms();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < qn.length && t !== 0 && t < qn[n].priority; n++);
      qn.splice(n, 0, e), n === 0 && jh(e);
    }
  };
  var Xh = i.version;
  if (Xh !== "19.0.0") throw Error(c(527, Xh, "19.0.0"));
  k.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(c(188))
        : ((e = Object.keys(e).join(",")), Error(c(268, e)));
    return (
      (e = G(t)),
      (e = e !== null ? I(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var $p = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Z,
    findFiberByHostInstance: Xn,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Di.isDisabled && Di.supportsFiber)
      try {
        (aa = Di.inject($p)), (rt = Di);
      } catch {}
  }
  return (
    (eu.createRoot = function (e, t) {
      if (!s(e)) throw Error(c(299));
      var n = !1,
        l = "",
        u = ud,
        r = id,
        o = rd,
        p = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (r = t.onCaughtError),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (p = t.unstable_transitionCallbacks)),
        (t = zh(e, 1, !1, null, null, n, l, u, r, o, p, null)),
        (e[gl] = t.current),
        $c(e.nodeType === 8 ? e.parentNode : e),
        new hf(t)
      );
    }),
    (eu.hydrateRoot = function (e, t, n) {
      if (!s(e)) throw Error(c(299));
      var l = !1,
        u = "",
        r = ud,
        o = id,
        p = rd,
        v = null,
        T = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
          n.onCaughtError !== void 0 && (o = n.onCaughtError),
          n.onRecoverableError !== void 0 && (p = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (v = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (T = n.formState)),
        (t = zh(e, 1, !0, t, n ?? null, l, u, r, o, p, v, T)),
        (t.context = Mh(null)),
        (n = t.current),
        (l = ht()),
        (u = wn(l)),
        (u.callback = null),
        xn(n, u, l),
        (t.current.lanes = l),
        ia(t, l),
        Xt(t),
        (e[gl] = t.current),
        $c(e),
        new xi(t)
      );
    }),
    (eu.version = "19.0.0"),
    eu
  );
}
var Fh;
function lg() {
  if (Fh) return yf.exports;
  Fh = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), (yf.exports = ng()), yf.exports;
}
var ag = lg();
const ug = Cm(ag);
var tu = {},
  Wh;
function ig() {
  if (Wh) return tu;
  (Wh = 1),
    Object.defineProperty(tu, "__esModule", { value: !0 }),
    (tu.parse = h),
    (tu.serialize = m);
  const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    i = /^[\u0021-\u003A\u003C-\u007E]*$/,
    f =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    c = /^[\u0020-\u003A\u003D-\u007E]*$/,
    s = Object.prototype.toString,
    d = (() => {
      const w = function () {};
      return (w.prototype = Object.create(null)), w;
    })();
  function h(w, C) {
    const R = new d(),
      B = w.length;
    if (B < 2) return R;
    const x = (C == null ? void 0 : C.decode) || b;
    let H = 0;
    do {
      const X = w.indexOf("=", H);
      if (X === -1) break;
      const L = w.indexOf(";", H),
        K = L === -1 ? B : L;
      if (X > K) {
        H = w.lastIndexOf(";", X - 1) + 1;
        continue;
      }
      const Q = y(w, H, X),
        te = g(w, X, Q),
        fe = w.slice(Q, te);
      if (R[fe] === void 0) {
        let de = y(w, X + 1, K),
          Z = g(w, K, de);
        const le = x(w.slice(de, Z));
        R[fe] = le;
      }
      H = K + 1;
    } while (H < B);
    return R;
  }
  function y(w, C, R) {
    do {
      const B = w.charCodeAt(C);
      if (B !== 32 && B !== 9) return C;
    } while (++C < R);
    return R;
  }
  function g(w, C, R) {
    for (; C > R; ) {
      const B = w.charCodeAt(--C);
      if (B !== 32 && B !== 9) return C + 1;
    }
    return R;
  }
  function m(w, C, R) {
    const B = (R == null ? void 0 : R.encode) || encodeURIComponent;
    if (!a.test(w)) throw new TypeError(`argument name is invalid: ${w}`);
    const x = B(C);
    if (!i.test(x)) throw new TypeError(`argument val is invalid: ${C}`);
    let H = w + "=" + x;
    if (!R) return H;
    if (R.maxAge !== void 0) {
      if (!Number.isInteger(R.maxAge))
        throw new TypeError(`option maxAge is invalid: ${R.maxAge}`);
      H += "; Max-Age=" + R.maxAge;
    }
    if (R.domain) {
      if (!f.test(R.domain))
        throw new TypeError(`option domain is invalid: ${R.domain}`);
      H += "; Domain=" + R.domain;
    }
    if (R.path) {
      if (!c.test(R.path))
        throw new TypeError(`option path is invalid: ${R.path}`);
      H += "; Path=" + R.path;
    }
    if (R.expires) {
      if (!O(R.expires) || !Number.isFinite(R.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${R.expires}`);
      H += "; Expires=" + R.expires.toUTCString();
    }
    if (
      (R.httpOnly && (H += "; HttpOnly"),
      R.secure && (H += "; Secure"),
      R.partitioned && (H += "; Partitioned"),
      R.priority)
    )
      switch (
        typeof R.priority == "string" ? R.priority.toLowerCase() : void 0
      ) {
        case "low":
          H += "; Priority=Low";
          break;
        case "medium":
          H += "; Priority=Medium";
          break;
        case "high":
          H += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${R.priority}`);
      }
    if (R.sameSite)
      switch (
        typeof R.sameSite == "string" ? R.sameSite.toLowerCase() : R.sameSite
      ) {
        case !0:
        case "strict":
          H += "; SameSite=Strict";
          break;
        case "lax":
          H += "; SameSite=Lax";
          break;
        case "none":
          H += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${R.sameSite}`);
      }
    return H;
  }
  function b(w) {
    if (w.indexOf("%") === -1) return w;
    try {
      return decodeURIComponent(w);
    } catch {
      return w;
    }
  }
  function O(w) {
    return s.call(w) === "[object Date]";
  }
  return tu;
}
ig();
/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Ph = "popstate";
function rg(a = {}) {
  function i(c, s) {
    let { pathname: d, search: h, hash: y } = c.location;
    return zf(
      "",
      { pathname: d, search: h, hash: y },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function f(c, s) {
    return typeof s == "string" ? s : iu(s);
  }
  return fg(i, f, null, a);
}
function xe(a, i) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(i);
}
function Vt(a, i) {
  if (!a) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function cg() {
  return Math.random().toString(36).substring(2, 10);
}
function Ih(a, i) {
  return { usr: a.state, key: a.key, idx: i };
}
function zf(a, i, f = null, c) {
  return {
    pathname: typeof a == "string" ? a : a.pathname,
    search: "",
    hash: "",
    ...(typeof i == "string" ? Il(i) : i),
    state: f,
    key: (i && i.key) || c || cg(),
  };
}
function iu({ pathname: a = "/", search: i = "", hash: f = "" }) {
  return (
    i && i !== "?" && (a += i.charAt(0) === "?" ? i : "?" + i),
    f && f !== "#" && (a += f.charAt(0) === "#" ? f : "#" + f),
    a
  );
}
function Il(a) {
  let i = {};
  if (a) {
    let f = a.indexOf("#");
    f >= 0 && ((i.hash = a.substring(f)), (a = a.substring(0, f)));
    let c = a.indexOf("?");
    c >= 0 && ((i.search = a.substring(c)), (a = a.substring(0, c))),
      a && (i.pathname = a);
  }
  return i;
}
function fg(a, i, f, c = {}) {
  let { window: s = document.defaultView, v5Compat: d = !1 } = c,
    h = s.history,
    y = "POP",
    g = null,
    m = b();
  m == null && ((m = 0), h.replaceState({ ...h.state, idx: m }, ""));
  function b() {
    return (h.state || { idx: null }).idx;
  }
  function O() {
    y = "POP";
    let x = b(),
      H = x == null ? null : x - m;
    (m = x), g && g({ action: y, location: B.location, delta: H });
  }
  function w(x, H) {
    y = "PUSH";
    let X = zf(B.location, x, H);
    m = b() + 1;
    let L = Ih(X, m),
      K = B.createHref(X);
    try {
      h.pushState(L, "", K);
    } catch (Q) {
      if (Q instanceof DOMException && Q.name === "DataCloneError") throw Q;
      s.location.assign(K);
    }
    d && g && g({ action: y, location: B.location, delta: 1 });
  }
  function C(x, H) {
    y = "REPLACE";
    let X = zf(B.location, x, H);
    m = b();
    let L = Ih(X, m),
      K = B.createHref(X);
    h.replaceState(L, "", K),
      d && g && g({ action: y, location: B.location, delta: 0 });
  }
  function R(x) {
    let H = s.location.origin !== "null" ? s.location.origin : s.location.href,
      X = typeof x == "string" ? x : iu(x);
    return (
      (X = X.replace(/ $/, "%20")),
      xe(
        H,
        `No window.location.(origin|href) available to create URL for href: ${X}`
      ),
      new URL(X, H)
    );
  }
  let B = {
    get action() {
      return y;
    },
    get location() {
      return a(s, h);
    },
    listen(x) {
      if (g) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Ph, O),
        (g = x),
        () => {
          s.removeEventListener(Ph, O), (g = null);
        }
      );
    },
    createHref(x) {
      return i(s, x);
    },
    createURL: R,
    encodeLocation(x) {
      let H = R(x);
      return { pathname: H.pathname, search: H.search, hash: H.hash };
    },
    push: w,
    replace: C,
    go(x) {
      return h.go(x);
    },
  };
  return B;
}
function Nm(a, i, f = "/") {
  return sg(a, i, f, !1);
}
function sg(a, i, f, c) {
  let s = typeof i == "string" ? Il(i) : i,
    d = Yn(s.pathname || "/", f);
  if (d == null) return null;
  let h = zm(a);
  og(h);
  let y = null;
  for (let g = 0; y == null && g < h.length; ++g) {
    let m = Tg(d);
    y = Sg(h[g], m, c);
  }
  return y;
}
function zm(a, i = [], f = [], c = "") {
  let s = (d, h, y) => {
    let g = {
      relativePath: y === void 0 ? d.path || "" : y,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: h,
      route: d,
    };
    g.relativePath.startsWith("/") &&
      (xe(
        g.relativePath.startsWith(c),
        `Absolute route path "${g.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (g.relativePath = g.relativePath.slice(c.length)));
    let m = dn([c, g.relativePath]),
      b = f.concat(g);
    d.children &&
      d.children.length > 0 &&
      (xe(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      zm(d.children, i, b, m)),
      !(d.path == null && !d.index) &&
        i.push({ path: m, score: vg(m, d.index), routesMeta: b });
  };
  return (
    a.forEach((d, h) => {
      var y;
      if (d.path === "" || !((y = d.path) != null && y.includes("?"))) s(d, h);
      else for (let g of Mm(d.path)) s(d, h, g);
    }),
    i
  );
}
function Mm(a) {
  let i = a.split("/");
  if (i.length === 0) return [];
  let [f, ...c] = i,
    s = f.endsWith("?"),
    d = f.replace(/\?$/, "");
  if (c.length === 0) return s ? [d, ""] : [d];
  let h = Mm(c.join("/")),
    y = [];
  return (
    y.push(...h.map((g) => (g === "" ? d : [d, g].join("/")))),
    s && y.push(...h),
    y.map((g) => (a.startsWith("/") && g === "" ? "/" : g))
  );
}
function og(a) {
  a.sort((i, f) =>
    i.score !== f.score
      ? f.score - i.score
      : bg(
          i.routesMeta.map((c) => c.childrenIndex),
          f.routesMeta.map((c) => c.childrenIndex)
        )
  );
}
var dg = /^:[\w-]+$/,
  hg = 3,
  mg = 2,
  yg = 1,
  pg = 10,
  gg = -2,
  em = (a) => a === "*";
function vg(a, i) {
  let f = a.split("/"),
    c = f.length;
  return (
    f.some(em) && (c += gg),
    i && (c += mg),
    f
      .filter((s) => !em(s))
      .reduce((s, d) => s + (dg.test(d) ? hg : d === "" ? yg : pg), c)
  );
}
function bg(a, i) {
  return a.length === i.length && a.slice(0, -1).every((c, s) => c === i[s])
    ? a[a.length - 1] - i[i.length - 1]
    : 0;
}
function Sg(a, i, f = !1) {
  let { routesMeta: c } = a,
    s = {},
    d = "/",
    h = [];
  for (let y = 0; y < c.length; ++y) {
    let g = c[y],
      m = y === c.length - 1,
      b = d === "/" ? i : i.slice(d.length) || "/",
      O = Li(
        { path: g.relativePath, caseSensitive: g.caseSensitive, end: m },
        b
      ),
      w = g.route;
    if (
      (!O &&
        m &&
        f &&
        !c[c.length - 1].route.index &&
        (O = Li(
          { path: g.relativePath, caseSensitive: g.caseSensitive, end: !1 },
          b
        )),
      !O)
    )
      return null;
    Object.assign(s, O.params),
      h.push({
        params: s,
        pathname: dn([d, O.pathname]),
        pathnameBase: _g(dn([d, O.pathnameBase])),
        route: w,
      }),
      O.pathnameBase !== "/" && (d = dn([d, O.pathnameBase]));
  }
  return h;
}
function Li(a, i) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [f, c] = Eg(a.path, a.caseSensitive, a.end),
    s = i.match(f);
  if (!s) return null;
  let d = s[0],
    h = d.replace(/(.)\/+$/, "$1"),
    y = s.slice(1);
  return {
    params: c.reduce((m, { paramName: b, isOptional: O }, w) => {
      if (b === "*") {
        let R = y[w] || "";
        h = d.slice(0, d.length - R.length).replace(/(.)\/+$/, "$1");
      }
      const C = y[w];
      return (
        O && !C ? (m[b] = void 0) : (m[b] = (C || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: d,
    pathnameBase: h,
    pattern: a,
  };
}
function Eg(a, i = !1, f = !0) {
  Vt(
    a === "*" || !a.endsWith("*") || a.endsWith("/*"),
    `Route path "${a}" will be treated as if it were "${a.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let c = [],
    s =
      "^" +
      a
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, y, g) => (
            c.push({ paramName: y, isOptional: g != null }),
            g ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    a.endsWith("*")
      ? (c.push({ paramName: "*" }),
        (s += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : f
      ? (s += "\\/*$")
      : a !== "" && a !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, i ? void 0 : "i"), c]
  );
}
function Tg(a) {
  try {
    return a
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      Vt(
        !1,
        `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`
      ),
      a
    );
  }
}
function Yn(a, i) {
  if (i === "/") return a;
  if (!a.toLowerCase().startsWith(i.toLowerCase())) return null;
  let f = i.endsWith("/") ? i.length - 1 : i.length,
    c = a.charAt(f);
  return c && c !== "/" ? null : a.slice(f) || "/";
}
function Rg(a, i = "/") {
  let {
    pathname: f,
    search: c = "",
    hash: s = "",
  } = typeof a == "string" ? Il(a) : a;
  return {
    pathname: f ? (f.startsWith("/") ? f : Og(f, i)) : i,
    search: wg(c),
    hash: xg(s),
  };
}
function Og(a, i) {
  let f = i.replace(/\/+$/, "").split("/");
  return (
    a.split("/").forEach((s) => {
      s === ".." ? f.length > 1 && f.pop() : s !== "." && f.push(s);
    }),
    f.length > 1 ? f.join("/") : "/"
  );
}
function bf(a, i, f, c) {
  return `Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Ag(a) {
  return a.filter(
    (i, f) => f === 0 || (i.route.path && i.route.path.length > 0)
  );
}
function Um(a) {
  let i = Ag(a);
  return i.map((f, c) => (c === i.length - 1 ? f.pathname : f.pathnameBase));
}
function Hm(a, i, f, c = !1) {
  let s;
  typeof a == "string"
    ? (s = Il(a))
    : ((s = { ...a }),
      xe(
        !s.pathname || !s.pathname.includes("?"),
        bf("?", "pathname", "search", s)
      ),
      xe(
        !s.pathname || !s.pathname.includes("#"),
        bf("#", "pathname", "hash", s)
      ),
      xe(!s.search || !s.search.includes("#"), bf("#", "search", "hash", s)));
  let d = a === "" || s.pathname === "",
    h = d ? "/" : s.pathname,
    y;
  if (h == null) y = f;
  else {
    let O = i.length - 1;
    if (!c && h.startsWith("..")) {
      let w = h.split("/");
      for (; w[0] === ".."; ) w.shift(), (O -= 1);
      s.pathname = w.join("/");
    }
    y = O >= 0 ? i[O] : "/";
  }
  let g = Rg(s, y),
    m = h && h !== "/" && h.endsWith("/"),
    b = (d || h === ".") && f.endsWith("/");
  return !g.pathname.endsWith("/") && (m || b) && (g.pathname += "/"), g;
}
var dn = (a) => a.join("/").replace(/\/\/+/g, "/"),
  _g = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
  wg = (a) => (!a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a),
  xg = (a) => (!a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a);
function Dg(a) {
  return (
    a != null &&
    typeof a.status == "number" &&
    typeof a.statusText == "string" &&
    typeof a.internal == "boolean" &&
    "data" in a
  );
}
var Bm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Bm);
var Cg = ["GET", ...Bm];
new Set(Cg);
var ea = N.createContext(null);
ea.displayName = "DataRouter";
var Ki = N.createContext(null);
Ki.displayName = "DataRouterState";
var Lm = N.createContext({ isTransitioning: !1 });
Lm.displayName = "ViewTransition";
var Ng = N.createContext(new Map());
Ng.displayName = "Fetchers";
var zg = N.createContext(null);
zg.displayName = "Await";
var Zt = N.createContext(null);
Zt.displayName = "Navigation";
var su = N.createContext(null);
su.displayName = "Location";
var yn = N.createContext({ outlet: null, matches: [], isDataRoute: !1 });
yn.displayName = "Route";
var Kf = N.createContext(null);
Kf.displayName = "RouteError";
function Mg(a, { relative: i } = {}) {
  xe(
    ou(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: f, navigator: c } = N.useContext(Zt),
    { hash: s, pathname: d, search: h } = hu(a, { relative: i }),
    y = d;
  return (
    f !== "/" && (y = d === "/" ? f : dn([f, d])),
    c.createHref({ pathname: y, search: h, hash: s })
  );
}
function ou() {
  return N.useContext(su) != null;
}
function yl() {
  return (
    xe(
      ou(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    N.useContext(su).location
  );
}
var qm =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function jm(a) {
  N.useContext(Zt).static || N.useLayoutEffect(a);
}
function du() {
  let { isDataRoute: a } = N.useContext(yn);
  return a ? Kg() : Ug();
}
function Ug() {
  xe(
    ou(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let a = N.useContext(ea),
    { basename: i, navigator: f } = N.useContext(Zt),
    { matches: c } = N.useContext(yn),
    { pathname: s } = yl(),
    d = JSON.stringify(Um(c)),
    h = N.useRef(!1);
  return (
    jm(() => {
      h.current = !0;
    }),
    N.useCallback(
      (g, m = {}) => {
        if ((Vt(h.current, qm), !h.current)) return;
        if (typeof g == "number") {
          f.go(g);
          return;
        }
        let b = Hm(g, JSON.parse(d), s, m.relative === "path");
        a == null &&
          i !== "/" &&
          (b.pathname = b.pathname === "/" ? i : dn([i, b.pathname])),
          (m.replace ? f.replace : f.push)(b, m.state, m);
      },
      [i, f, d, s, a]
    )
  );
}
N.createContext(null);
function hu(a, { relative: i } = {}) {
  let { matches: f } = N.useContext(yn),
    { pathname: c } = yl(),
    s = JSON.stringify(Um(f));
  return N.useMemo(() => Hm(a, JSON.parse(s), c, i === "path"), [a, s, c, i]);
}
function Hg(a, i) {
  return Ym(a, i);
}
function Ym(a, i, f, c) {
  var X;
  xe(
    ou(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: s, static: d } = N.useContext(Zt),
    { matches: h } = N.useContext(yn),
    y = h[h.length - 1],
    g = y ? y.params : {},
    m = y ? y.pathname : "/",
    b = y ? y.pathnameBase : "/",
    O = y && y.route;
  {
    let L = (O && O.path) || "";
    Gm(
      m,
      !O || L.endsWith("*") || L.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${
        L === "/" ? "*" : `${L}/*`
      }">.`
    );
  }
  let w = yl(),
    C;
  if (i) {
    let L = typeof i == "string" ? Il(i) : i;
    xe(
      b === "/" || ((X = L.pathname) == null ? void 0 : X.startsWith(b)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${L.pathname}" was given in the \`location\` prop.`
    ),
      (C = L);
  } else C = w;
  let R = C.pathname || "/",
    B = R;
  if (b !== "/") {
    let L = b.replace(/^\//, "").split("/");
    B = "/" + R.replace(/^\//, "").split("/").slice(L.length).join("/");
  }
  let x =
    !d && f && f.matches && f.matches.length > 0
      ? f.matches
      : Nm(a, { pathname: B });
  Vt(
    O || x != null,
    `No routes matched location "${C.pathname}${C.search}${C.hash}" `
  ),
    Vt(
      x == null ||
        x[x.length - 1].route.element !== void 0 ||
        x[x.length - 1].route.Component !== void 0 ||
        x[x.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let H = Yg(
    x &&
      x.map((L) =>
        Object.assign({}, L, {
          params: Object.assign({}, g, L.params),
          pathname: dn([
            b,
            s.encodeLocation
              ? s.encodeLocation(L.pathname).pathname
              : L.pathname,
          ]),
          pathnameBase:
            L.pathnameBase === "/"
              ? b
              : dn([
                  b,
                  s.encodeLocation
                    ? s.encodeLocation(L.pathnameBase).pathname
                    : L.pathnameBase,
                ]),
        })
      ),
    h,
    f,
    c
  );
  return i && H
    ? N.createElement(
        su.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...C,
            },
            navigationType: "POP",
          },
        },
        H
      )
    : H;
}
function Bg() {
  let a = Zg(),
    i = Dg(a)
      ? `${a.status} ${a.statusText}`
      : a instanceof Error
      ? a.message
      : JSON.stringify(a),
    f = a instanceof Error ? a.stack : null,
    c = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: c },
    d = { padding: "2px 4px", backgroundColor: c },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", a),
    (h = N.createElement(
      N.Fragment,
      null,
      N.createElement("p", null, "💿 Hey developer 👋"),
      N.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        N.createElement("code", { style: d }, "ErrorBoundary"),
        " or",
        " ",
        N.createElement("code", { style: d }, "errorElement"),
        " prop on your route."
      )
    )),
    N.createElement(
      N.Fragment,
      null,
      N.createElement("h2", null, "Unexpected Application Error!"),
      N.createElement("h3", { style: { fontStyle: "italic" } }, i),
      f ? N.createElement("pre", { style: s }, f) : null,
      h
    )
  );
}
var Lg = N.createElement(Bg, null),
  qg = class extends N.Component {
    constructor(a) {
      super(a),
        (this.state = {
          location: a.location,
          revalidation: a.revalidation,
          error: a.error,
        });
    }
    static getDerivedStateFromError(a) {
      return { error: a };
    }
    static getDerivedStateFromProps(a, i) {
      return i.location !== a.location ||
        (i.revalidation !== "idle" && a.revalidation === "idle")
        ? { error: a.error, location: a.location, revalidation: a.revalidation }
        : {
            error: a.error !== void 0 ? a.error : i.error,
            location: i.location,
            revalidation: a.revalidation || i.revalidation,
          };
    }
    componentDidCatch(a, i) {
      console.error(
        "React Router caught the following error during render",
        a,
        i
      );
    }
    render() {
      return this.state.error !== void 0
        ? N.createElement(
            yn.Provider,
            { value: this.props.routeContext },
            N.createElement(Kf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function jg({ routeContext: a, match: i, children: f }) {
  let c = N.useContext(ea);
  return (
    c &&
      c.static &&
      c.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (c.staticContext._deepestRenderedBoundaryId = i.route.id),
    N.createElement(yn.Provider, { value: a }, f)
  );
}
function Yg(a, i = [], f = null, c = null) {
  if (a == null) {
    if (!f) return null;
    if (f.errors) a = f.matches;
    else if (i.length === 0 && !f.initialized && f.matches.length > 0)
      a = f.matches;
    else return null;
  }
  let s = a,
    d = f == null ? void 0 : f.errors;
  if (d != null) {
    let g = s.findIndex(
      (m) => m.route.id && (d == null ? void 0 : d[m.route.id]) !== void 0
    );
    xe(
      g >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        d
      ).join(",")}`
    ),
      (s = s.slice(0, Math.min(s.length, g + 1)));
  }
  let h = !1,
    y = -1;
  if (f)
    for (let g = 0; g < s.length; g++) {
      let m = s[g];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (y = g),
        m.route.id)
      ) {
        let { loaderData: b, errors: O } = f,
          w =
            m.route.loader &&
            !b.hasOwnProperty(m.route.id) &&
            (!O || O[m.route.id] === void 0);
        if (m.route.lazy || w) {
          (h = !0), y >= 0 ? (s = s.slice(0, y + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((g, m, b) => {
    let O,
      w = !1,
      C = null,
      R = null;
    f &&
      ((O = d && m.route.id ? d[m.route.id] : void 0),
      (C = m.route.errorElement || Lg),
      h &&
        (y < 0 && b === 0
          ? (Gm(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (w = !0),
            (R = null))
          : y === b &&
            ((w = !0), (R = m.route.hydrateFallbackElement || null))));
    let B = i.concat(s.slice(0, b + 1)),
      x = () => {
        let H;
        return (
          O
            ? (H = C)
            : w
            ? (H = R)
            : m.route.Component
            ? (H = N.createElement(m.route.Component, null))
            : m.route.element
            ? (H = m.route.element)
            : (H = g),
          N.createElement(jg, {
            match: m,
            routeContext: { outlet: g, matches: B, isDataRoute: f != null },
            children: H,
          })
        );
      };
    return f && (m.route.ErrorBoundary || m.route.errorElement || b === 0)
      ? N.createElement(qg, {
          location: f.location,
          revalidation: f.revalidation,
          component: C,
          error: O,
          children: x(),
          routeContext: { outlet: null, matches: B, isDataRoute: !0 },
        })
      : x();
  }, null);
}
function kf(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Gg(a) {
  let i = N.useContext(ea);
  return xe(i, kf(a)), i;
}
function Xg(a) {
  let i = N.useContext(Ki);
  return xe(i, kf(a)), i;
}
function Qg(a) {
  let i = N.useContext(yn);
  return xe(i, kf(a)), i;
}
function Jf(a) {
  let i = Qg(a),
    f = i.matches[i.matches.length - 1];
  return (
    xe(
      f.route.id,
      `${a} can only be used on routes that contain a unique "id"`
    ),
    f.route.id
  );
}
function Vg() {
  return Jf("useRouteId");
}
function Zg() {
  var c;
  let a = N.useContext(Kf),
    i = Xg("useRouteError"),
    f = Jf("useRouteError");
  return a !== void 0 ? a : (c = i.errors) == null ? void 0 : c[f];
}
function Kg() {
  let { router: a } = Gg("useNavigate"),
    i = Jf("useNavigate"),
    f = N.useRef(!1);
  return (
    jm(() => {
      f.current = !0;
    }),
    N.useCallback(
      async (s, d = {}) => {
        Vt(f.current, qm),
          f.current &&
            (typeof s == "number"
              ? a.navigate(s)
              : await a.navigate(s, { fromRouteId: i, ...d }));
      },
      [a, i]
    )
  );
}
var tm = {};
function Gm(a, i, f) {
  !i && !tm[a] && ((tm[a] = !0), Vt(!1, f));
}
N.memo(kg);
function kg({ routes: a, future: i, state: f }) {
  return Ym(a, void 0, f, i);
}
function au(a) {
  xe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Jg({
  basename: a = "/",
  children: i = null,
  location: f,
  navigationType: c = "POP",
  navigator: s,
  static: d = !1,
}) {
  xe(
    !ou(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = a.replace(/^\/*/, "/"),
    y = N.useMemo(
      () => ({ basename: h, navigator: s, static: d, future: {} }),
      [h, s, d]
    );
  typeof f == "string" && (f = Il(f));
  let {
      pathname: g = "/",
      search: m = "",
      hash: b = "",
      state: O = null,
      key: w = "default",
    } = f,
    C = N.useMemo(() => {
      let R = Yn(g, h);
      return R == null
        ? null
        : {
            location: { pathname: R, search: m, hash: b, state: O, key: w },
            navigationType: c,
          };
    }, [h, g, m, b, O, w, c]);
  return (
    Vt(
      C != null,
      `<Router basename="${h}"> is not able to match the URL "${g}${m}${b}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    C == null
      ? null
      : N.createElement(
          Zt.Provider,
          { value: y },
          N.createElement(su.Provider, { children: i, value: C })
        )
  );
}
function $g({ children: a, location: i }) {
  return Hg(Mf(a), i);
}
function Mf(a, i = []) {
  let f = [];
  return (
    N.Children.forEach(a, (c, s) => {
      if (!N.isValidElement(c)) return;
      let d = [...i, s];
      if (c.type === N.Fragment) {
        f.push.apply(f, Mf(c.props.children, d));
        return;
      }
      xe(
        c.type === au,
        `[${
          typeof c.type == "string" ? c.type : c.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        xe(
          !c.props.index || !c.props.children,
          "An index route cannot have child routes."
        );
      let h = {
        id: c.props.id || d.join("-"),
        caseSensitive: c.props.caseSensitive,
        element: c.props.element,
        Component: c.props.Component,
        index: c.props.index,
        path: c.props.path,
        loader: c.props.loader,
        action: c.props.action,
        hydrateFallbackElement: c.props.hydrateFallbackElement,
        HydrateFallback: c.props.HydrateFallback,
        errorElement: c.props.errorElement,
        ErrorBoundary: c.props.ErrorBoundary,
        hasErrorBoundary:
          c.props.hasErrorBoundary === !0 ||
          c.props.ErrorBoundary != null ||
          c.props.errorElement != null,
        shouldRevalidate: c.props.shouldRevalidate,
        handle: c.props.handle,
        lazy: c.props.lazy,
      };
      c.props.children && (h.children = Mf(c.props.children, d)), f.push(h);
    }),
    f
  );
}
var zi = "get",
  Mi = "application/x-www-form-urlencoded";
function ki(a) {
  return a != null && typeof a.tagName == "string";
}
function Fg(a) {
  return ki(a) && a.tagName.toLowerCase() === "button";
}
function Wg(a) {
  return ki(a) && a.tagName.toLowerCase() === "form";
}
function Pg(a) {
  return ki(a) && a.tagName.toLowerCase() === "input";
}
function Ig(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function ev(a, i) {
  return a.button === 0 && (!i || i === "_self") && !Ig(a);
}
var Ci = null;
function tv() {
  if (Ci === null)
    try {
      new FormData(document.createElement("form"), 0), (Ci = !1);
    } catch {
      Ci = !0;
    }
  return Ci;
}
var nv = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Sf(a) {
  return a != null && !nv.has(a)
    ? (Vt(
        !1,
        `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mi}"`
      ),
      null)
    : a;
}
function lv(a, i) {
  let f, c, s, d, h;
  if (Wg(a)) {
    let y = a.getAttribute("action");
    (c = y ? Yn(y, i) : null),
      (f = a.getAttribute("method") || zi),
      (s = Sf(a.getAttribute("enctype")) || Mi),
      (d = new FormData(a));
  } else if (Fg(a) || (Pg(a) && (a.type === "submit" || a.type === "image"))) {
    let y = a.form;
    if (y == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = a.getAttribute("formaction") || y.getAttribute("action");
    if (
      ((c = g ? Yn(g, i) : null),
      (f = a.getAttribute("formmethod") || y.getAttribute("method") || zi),
      (s =
        Sf(a.getAttribute("formenctype")) ||
        Sf(y.getAttribute("enctype")) ||
        Mi),
      (d = new FormData(y, a)),
      !tv())
    ) {
      let { name: m, type: b, value: O } = a;
      if (b === "image") {
        let w = m ? `${m}.` : "";
        d.append(`${w}x`, "0"), d.append(`${w}y`, "0");
      } else m && d.append(m, O);
    }
  } else {
    if (ki(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (f = zi), (c = null), (s = Mi), (h = a);
  }
  return (
    d && s === "text/plain" && ((h = d), (d = void 0)),
    { action: c, method: f.toLowerCase(), encType: s, formData: d, body: h }
  );
}
function $f(a, i) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(i);
}
async function av(a, i) {
  if (a.id in i) return i[a.id];
  try {
    let f = await import(a.module);
    return (i[a.id] = f), f;
  } catch (f) {
    return (
      console.error(
        `Error loading route module \`${a.module}\`, reloading page...`
      ),
      console.error(f),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function uv(a) {
  return a == null
    ? !1
    : a.href == null
    ? a.rel === "preload" &&
      typeof a.imageSrcSet == "string" &&
      typeof a.imageSizes == "string"
    : typeof a.rel == "string" && typeof a.href == "string";
}
async function iv(a, i, f) {
  let c = await Promise.all(
    a.map(async (s) => {
      let d = i.routes[s.route.id];
      if (d) {
        let h = await av(d, f);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return sv(
    c
      .flat(1)
      .filter(uv)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" }
      )
  );
}
function nm(a, i, f, c, s, d) {
  let h = (g, m) => (f[m] ? g.route.id !== f[m].route.id : !0),
    y = (g, m) => {
      var b;
      return (
        f[m].pathname !== g.pathname ||
        (((b = f[m].route.path) == null ? void 0 : b.endsWith("*")) &&
          f[m].params["*"] !== g.params["*"])
      );
    };
  return d === "assets"
    ? i.filter((g, m) => h(g, m) || y(g, m))
    : d === "data"
    ? i.filter((g, m) => {
        var O;
        let b = c.routes[g.route.id];
        if (!b || !b.hasLoader) return !1;
        if (h(g, m) || y(g, m)) return !0;
        if (g.route.shouldRevalidate) {
          let w = g.route.shouldRevalidate({
            currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
            currentParams: ((O = f[0]) == null ? void 0 : O.params) || {},
            nextUrl: new URL(a, window.origin),
            nextParams: g.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof w == "boolean") return w;
        }
        return !0;
      })
    : [];
}
function rv(a, i) {
  return cv(
    a
      .map((f) => {
        let c = i.routes[f.route.id];
        if (!c) return [];
        let s = [c.module];
        return c.imports && (s = s.concat(c.imports)), s;
      })
      .flat(1)
  );
}
function cv(a) {
  return [...new Set(a)];
}
function fv(a) {
  let i = {},
    f = Object.keys(a).sort();
  for (let c of f) i[c] = a[c];
  return i;
}
function sv(a, i) {
  let f = new Set();
  return (
    new Set(i),
    a.reduce((c, s) => {
      let d = JSON.stringify(fv(s));
      return f.has(d) || (f.add(d), c.push({ key: d, link: s })), c;
    }, [])
  );
}
function ov(a) {
  let i =
    typeof a == "string"
      ? new URL(
          a,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : a;
  return (
    i.pathname === "/"
      ? (i.pathname = "_root.data")
      : (i.pathname = `${i.pathname.replace(/\/$/, "")}.data`),
    i
  );
}
function dv() {
  let a = N.useContext(ea);
  return (
    $f(
      a,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    a
  );
}
function hv() {
  let a = N.useContext(Ki);
  return (
    $f(
      a,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    a
  );
}
var Ff = N.createContext(void 0);
Ff.displayName = "FrameworkContext";
function Xm() {
  let a = N.useContext(Ff);
  return (
    $f(a, "You must render this element inside a <HydratedRouter> element"), a
  );
}
function mv(a, i) {
  let f = N.useContext(Ff),
    [c, s] = N.useState(!1),
    [d, h] = N.useState(!1),
    {
      onFocus: y,
      onBlur: g,
      onMouseEnter: m,
      onMouseLeave: b,
      onTouchStart: O,
    } = i,
    w = N.useRef(null);
  N.useEffect(() => {
    if ((a === "render" && h(!0), a === "viewport")) {
      let B = (H) => {
          H.forEach((X) => {
            h(X.isIntersecting);
          });
        },
        x = new IntersectionObserver(B, { threshold: 0.5 });
      return (
        w.current && x.observe(w.current),
        () => {
          x.disconnect();
        }
      );
    }
  }, [a]),
    N.useEffect(() => {
      if (c) {
        let B = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(B);
        };
      }
    }, [c]);
  let C = () => {
      s(!0);
    },
    R = () => {
      s(!1), h(!1);
    };
  return f
    ? a !== "intent"
      ? [d, w, {}]
      : [
          d,
          w,
          {
            onFocus: nu(y, C),
            onBlur: nu(g, R),
            onMouseEnter: nu(m, C),
            onMouseLeave: nu(b, R),
            onTouchStart: nu(O, C),
          },
        ]
    : [!1, w, {}];
}
function nu(a, i) {
  return (f) => {
    a && a(f), f.defaultPrevented || i(f);
  };
}
function yv({ page: a, ...i }) {
  let { router: f } = dv(),
    c = N.useMemo(() => Nm(f.routes, a, f.basename), [f.routes, a, f.basename]);
  return c ? N.createElement(gv, { page: a, matches: c, ...i }) : null;
}
function pv(a) {
  let { manifest: i, routeModules: f } = Xm(),
    [c, s] = N.useState([]);
  return (
    N.useEffect(() => {
      let d = !1;
      return (
        iv(a, i, f).then((h) => {
          d || s(h);
        }),
        () => {
          d = !0;
        }
      );
    }, [a, i, f]),
    c
  );
}
function gv({ page: a, matches: i, ...f }) {
  let c = yl(),
    { manifest: s, routeModules: d } = Xm(),
    { loaderData: h, matches: y } = hv(),
    g = N.useMemo(() => nm(a, i, y, s, c, "data"), [a, i, y, s, c]),
    m = N.useMemo(() => nm(a, i, y, s, c, "assets"), [a, i, y, s, c]),
    b = N.useMemo(() => {
      if (a === c.pathname + c.search + c.hash) return [];
      let C = new Set(),
        R = !1;
      if (
        (i.forEach((x) => {
          var X;
          let H = s.routes[x.route.id];
          !H ||
            !H.hasLoader ||
            ((!g.some((L) => L.route.id === x.route.id) &&
              x.route.id in h &&
              (X = d[x.route.id]) != null &&
              X.shouldRevalidate) ||
            H.hasClientLoader
              ? (R = !0)
              : C.add(x.route.id));
        }),
        C.size === 0)
      )
        return [];
      let B = ov(a);
      return (
        R &&
          C.size > 0 &&
          B.searchParams.set(
            "_routes",
            i
              .filter((x) => C.has(x.route.id))
              .map((x) => x.route.id)
              .join(",")
          ),
        [B.pathname + B.search]
      );
    }, [h, c, s, g, i, a, d]),
    O = N.useMemo(() => rv(m, s), [m, s]),
    w = pv(m);
  return N.createElement(
    N.Fragment,
    null,
    b.map((C) =>
      N.createElement("link", {
        key: C,
        rel: "prefetch",
        as: "fetch",
        href: C,
        ...f,
      })
    ),
    O.map((C) =>
      N.createElement("link", { key: C, rel: "modulepreload", href: C, ...f })
    ),
    w.map(({ key: C, link: R }) => N.createElement("link", { key: C, ...R }))
  );
}
function vv(...a) {
  return (i) => {
    a.forEach((f) => {
      typeof f == "function" ? f(i) : f != null && (f.current = i);
    });
  };
}
var Qm =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Qm && (window.__reactRouterVersion = "7.1.5");
} catch {}
function bv({ basename: a, children: i, window: f }) {
  let c = N.useRef();
  c.current == null && (c.current = rg({ window: f, v5Compat: !0 }));
  let s = c.current,
    [d, h] = N.useState({ action: s.action, location: s.location }),
    y = N.useCallback(
      (g) => {
        N.startTransition(() => h(g));
      },
      [h]
    );
  return (
    N.useLayoutEffect(() => s.listen(y), [s, y]),
    N.createElement(Jg, {
      basename: a,
      children: i,
      location: d.location,
      navigationType: d.action,
      navigator: s,
    })
  );
}
var Vm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Zm = N.forwardRef(function (
    {
      onClick: i,
      discover: f = "render",
      prefetch: c = "none",
      relative: s,
      reloadDocument: d,
      replace: h,
      state: y,
      target: g,
      to: m,
      preventScrollReset: b,
      viewTransition: O,
      ...w
    },
    C
  ) {
    let { basename: R } = N.useContext(Zt),
      B = typeof m == "string" && Vm.test(m),
      x,
      H = !1;
    if (typeof m == "string" && B && ((x = m), Qm))
      try {
        let Z = new URL(window.location.href),
          le = m.startsWith("//") ? new URL(Z.protocol + m) : new URL(m),
          Ve = Yn(le.pathname, R);
        le.origin === Z.origin && Ve != null
          ? (m = Ve + le.search + le.hash)
          : (H = !0);
      } catch {
        Vt(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let X = Mg(m, { relative: s }),
      [L, K, Q] = mv(c, w),
      te = Rv(m, {
        replace: h,
        state: y,
        target: g,
        preventScrollReset: b,
        relative: s,
        viewTransition: O,
      });
    function fe(Z) {
      i && i(Z), Z.defaultPrevented || te(Z);
    }
    let de = N.createElement("a", {
      ...w,
      ...Q,
      href: x || X,
      onClick: H || d ? i : fe,
      ref: vv(C, K),
      target: g,
      "data-discover": !B && f === "render" ? "true" : void 0,
    });
    return L && !B
      ? N.createElement(N.Fragment, null, de, N.createElement(yv, { page: X }))
      : de;
  });
Zm.displayName = "Link";
var Sv = N.forwardRef(function (
  {
    "aria-current": i = "page",
    caseSensitive: f = !1,
    className: c = "",
    end: s = !1,
    style: d,
    to: h,
    viewTransition: y,
    children: g,
    ...m
  },
  b
) {
  let O = hu(h, { relative: m.relative }),
    w = yl(),
    C = N.useContext(Ki),
    { navigator: R, basename: B } = N.useContext(Zt),
    x = C != null && xv(O) && y === !0,
    H = R.encodeLocation ? R.encodeLocation(O).pathname : O.pathname,
    X = w.pathname,
    L =
      C && C.navigation && C.navigation.location
        ? C.navigation.location.pathname
        : null;
  f ||
    ((X = X.toLowerCase()),
    (L = L ? L.toLowerCase() : null),
    (H = H.toLowerCase())),
    L && B && (L = Yn(L, B) || L);
  const K = H !== "/" && H.endsWith("/") ? H.length - 1 : H.length;
  let Q = X === H || (!s && X.startsWith(H) && X.charAt(K) === "/"),
    te =
      L != null &&
      (L === H || (!s && L.startsWith(H) && L.charAt(H.length) === "/")),
    fe = { isActive: Q, isPending: te, isTransitioning: x },
    de = Q ? i : void 0,
    Z;
  typeof c == "function"
    ? (Z = c(fe))
    : (Z = [
        c,
        Q ? "active" : null,
        te ? "pending" : null,
        x ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let le = typeof d == "function" ? d(fe) : d;
  return N.createElement(
    Zm,
    {
      ...m,
      "aria-current": de,
      className: Z,
      ref: b,
      style: le,
      to: h,
      viewTransition: y,
    },
    typeof g == "function" ? g(fe) : g
  );
});
Sv.displayName = "NavLink";
var Ev = N.forwardRef(
  (
    {
      discover: a = "render",
      fetcherKey: i,
      navigate: f,
      reloadDocument: c,
      replace: s,
      state: d,
      method: h = zi,
      action: y,
      onSubmit: g,
      relative: m,
      preventScrollReset: b,
      viewTransition: O,
      ...w
    },
    C
  ) => {
    let R = _v(),
      B = wv(y, { relative: m }),
      x = h.toLowerCase() === "get" ? "get" : "post",
      H = typeof y == "string" && Vm.test(y),
      X = (L) => {
        if ((g && g(L), L.defaultPrevented)) return;
        L.preventDefault();
        let K = L.nativeEvent.submitter,
          Q = (K == null ? void 0 : K.getAttribute("formmethod")) || h;
        R(K || L.currentTarget, {
          fetcherKey: i,
          method: Q,
          navigate: f,
          replace: s,
          state: d,
          relative: m,
          preventScrollReset: b,
          viewTransition: O,
        });
      };
    return N.createElement("form", {
      ref: C,
      method: x,
      action: B,
      onSubmit: c ? g : X,
      ...w,
      "data-discover": !H && a === "render" ? "true" : void 0,
    });
  }
);
Ev.displayName = "Form";
function Tv(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Km(a) {
  let i = N.useContext(ea);
  return xe(i, Tv(a)), i;
}
function Rv(
  a,
  {
    target: i,
    replace: f,
    state: c,
    preventScrollReset: s,
    relative: d,
    viewTransition: h,
  } = {}
) {
  let y = du(),
    g = yl(),
    m = hu(a, { relative: d });
  return N.useCallback(
    (b) => {
      if (ev(b, i)) {
        b.preventDefault();
        let O = f !== void 0 ? f : iu(g) === iu(m);
        y(a, {
          replace: O,
          state: c,
          preventScrollReset: s,
          relative: d,
          viewTransition: h,
        });
      }
    },
    [g, y, m, f, c, i, a, s, d, h]
  );
}
var Ov = 0,
  Av = () => `__${String(++Ov)}__`;
function _v() {
  let { router: a } = Km("useSubmit"),
    { basename: i } = N.useContext(Zt),
    f = Vg();
  return N.useCallback(
    async (c, s = {}) => {
      let { action: d, method: h, encType: y, formData: g, body: m } = lv(c, i);
      if (s.navigate === !1) {
        let b = s.fetcherKey || Av();
        await a.fetch(b, f, s.action || d, {
          preventScrollReset: s.preventScrollReset,
          formData: g,
          body: m,
          formMethod: s.method || h,
          formEncType: s.encType || y,
          flushSync: s.flushSync,
        });
      } else
        await a.navigate(s.action || d, {
          preventScrollReset: s.preventScrollReset,
          formData: g,
          body: m,
          formMethod: s.method || h,
          formEncType: s.encType || y,
          replace: s.replace,
          state: s.state,
          fromRouteId: f,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [a, i, f]
  );
}
function wv(a, { relative: i } = {}) {
  let { basename: f } = N.useContext(Zt),
    c = N.useContext(yn);
  xe(c, "useFormAction must be used inside a RouteContext");
  let [s] = c.matches.slice(-1),
    d = { ...hu(a || ".", { relative: i }) },
    h = yl();
  if (a == null) {
    d.search = h.search;
    let y = new URLSearchParams(d.search),
      g = y.getAll("index");
    if (g.some((b) => b === "")) {
      y.delete("index"),
        g.filter((O) => O).forEach((O) => y.append("index", O));
      let b = y.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (
    (!a || a === ".") &&
      s.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    f !== "/" && (d.pathname = d.pathname === "/" ? f : dn([f, d.pathname])),
    iu(d)
  );
}
function xv(a, i = {}) {
  let f = N.useContext(Lm);
  xe(
    f != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Km("useViewTransitionState"),
    s = hu(a, { relative: i.relative });
  if (!f.isTransitioning) return !1;
  let d = Yn(f.currentLocation.pathname, c) || f.currentLocation.pathname,
    h = Yn(f.nextLocation.pathname, c) || f.nextLocation.pathname;
  return Li(s.pathname, h) != null || Li(s.pathname, d) != null;
}
new TextEncoder();
var Ef = { exports: {} },
  Tf = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lm;
function Dv() {
  if (lm) return Tf;
  lm = 1;
  var a = Zi();
  function i(g, m) {
    return (g === m && (g !== 0 || 1 / g === 1 / m)) || (g !== g && m !== m);
  }
  var f = typeof Object.is == "function" ? Object.is : i,
    c = a.useSyncExternalStore,
    s = a.useRef,
    d = a.useEffect,
    h = a.useMemo,
    y = a.useDebugValue;
  return (
    (Tf.useSyncExternalStoreWithSelector = function (g, m, b, O, w) {
      var C = s(null);
      if (C.current === null) {
        var R = { hasValue: !1, value: null };
        C.current = R;
      } else R = C.current;
      C = h(
        function () {
          function x(Q) {
            if (!H) {
              if (((H = !0), (X = Q), (Q = O(Q)), w !== void 0 && R.hasValue)) {
                var te = R.value;
                if (w(te, Q)) return (L = te);
              }
              return (L = Q);
            }
            if (((te = L), f(X, Q))) return te;
            var fe = O(Q);
            return w !== void 0 && w(te, fe)
              ? ((X = Q), te)
              : ((X = Q), (L = fe));
          }
          var H = !1,
            X,
            L,
            K = b === void 0 ? null : b;
          return [
            function () {
              return x(m());
            },
            K === null
              ? void 0
              : function () {
                  return x(K());
                },
          ];
        },
        [m, b, O, w]
      );
      var B = c(g, C[0], C[1]);
      return (
        d(
          function () {
            (R.hasValue = !0), (R.value = B);
          },
          [B]
        ),
        y(B),
        B
      );
    }),
    Tf
  );
}
var am;
function Cv() {
  return am || ((am = 1), (Ef.exports = Dv())), Ef.exports;
}
Cv();
function Nv(a) {
  a();
}
function zv() {
  let a = null,
    i = null;
  return {
    clear() {
      (a = null), (i = null);
    },
    notify() {
      Nv(() => {
        let f = a;
        for (; f; ) f.callback(), (f = f.next);
      });
    },
    get() {
      const f = [];
      let c = a;
      for (; c; ) f.push(c), (c = c.next);
      return f;
    },
    subscribe(f) {
      let c = !0;
      const s = (i = { callback: f, next: null, prev: i });
      return (
        s.prev ? (s.prev.next = s) : (a = s),
        function () {
          !c ||
            a === null ||
            ((c = !1),
            s.next ? (s.next.prev = s.prev) : (i = s.prev),
            s.prev ? (s.prev.next = s.next) : (a = s.next));
        }
      );
    },
  };
}
var um = { notify() {}, get: () => [] };
function Mv(a, i) {
  let f,
    c = um,
    s = 0,
    d = !1;
  function h(B) {
    b();
    const x = c.subscribe(B);
    let H = !1;
    return () => {
      H || ((H = !0), x(), O());
    };
  }
  function y() {
    c.notify();
  }
  function g() {
    R.onStateChange && R.onStateChange();
  }
  function m() {
    return d;
  }
  function b() {
    s++, f || ((f = a.subscribe(g)), (c = zv()));
  }
  function O() {
    s--, f && s === 0 && (f(), (f = void 0), c.clear(), (c = um));
  }
  function w() {
    d || ((d = !0), b());
  }
  function C() {
    d && ((d = !1), O());
  }
  const R = {
    addNestedSub: h,
    notifyNestedSubs: y,
    handleChangeWrapper: g,
    isSubscribed: m,
    trySubscribe: w,
    tryUnsubscribe: C,
    getListeners: () => c,
  };
  return R;
}
var Uv = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Hv = Uv(),
  Bv = () => typeof navigator < "u" && navigator.product === "ReactNative",
  Lv = Bv(),
  qv = () => (Hv || Lv ? N.useLayoutEffect : N.useEffect),
  jv = qv(),
  Rf = Symbol.for("react-redux-context"),
  Of = typeof globalThis < "u" ? globalThis : {};
function Yv() {
  if (!N.createContext) return {};
  const a = Of[Rf] ?? (Of[Rf] = new Map());
  let i = a.get(N.createContext);
  return i || ((i = N.createContext(null)), a.set(N.createContext, i)), i;
}
var Gv = Yv();
function Xv(a) {
  const { children: i, context: f, serverState: c, store: s } = a,
    d = N.useMemo(() => {
      const g = Mv(s);
      return {
        store: s,
        subscription: g,
        getServerState: c ? () => c : void 0,
      };
    }, [s, c]),
    h = N.useMemo(() => s.getState(), [s]);
  jv(() => {
    const { subscription: g } = d;
    return (
      (g.onStateChange = g.notifyNestedSubs),
      g.trySubscribe(),
      h !== s.getState() && g.notifyNestedSubs(),
      () => {
        g.tryUnsubscribe(), (g.onStateChange = void 0);
      }
    );
  }, [d, h]);
  const y = f || Gv;
  return N.createElement(y.Provider, { value: d }, i);
}
var Qv = Xv;
function Je(a) {
  return `Minified Redux error #${a}; visit https://redux.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `;
}
var Vv = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  im = Vv,
  Af = () => Math.random().toString(36).substring(7).split("").join("."),
  Zv = {
    INIT: `@@redux/INIT${Af()}`,
    REPLACE: `@@redux/REPLACE${Af()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Af()}`,
  },
  qi = Zv;
function Wf(a) {
  if (typeof a != "object" || a === null) return !1;
  let i = a;
  for (; Object.getPrototypeOf(i) !== null; ) i = Object.getPrototypeOf(i);
  return Object.getPrototypeOf(a) === i || Object.getPrototypeOf(a) === null;
}
function km(a, i, f) {
  if (typeof a != "function") throw new Error(Je(2));
  if (
    (typeof i == "function" && typeof f == "function") ||
    (typeof f == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Je(0));
  if (
    (typeof i == "function" && typeof f > "u" && ((f = i), (i = void 0)),
    typeof f < "u")
  ) {
    if (typeof f != "function") throw new Error(Je(1));
    return f(km)(a, i);
  }
  let c = a,
    s = i,
    d = new Map(),
    h = d,
    y = 0,
    g = !1;
  function m() {
    h === d &&
      ((h = new Map()),
      d.forEach((x, H) => {
        h.set(H, x);
      }));
  }
  function b() {
    if (g) throw new Error(Je(3));
    return s;
  }
  function O(x) {
    if (typeof x != "function") throw new Error(Je(4));
    if (g) throw new Error(Je(5));
    let H = !0;
    m();
    const X = y++;
    return (
      h.set(X, x),
      function () {
        if (H) {
          if (g) throw new Error(Je(6));
          (H = !1), m(), h.delete(X), (d = null);
        }
      }
    );
  }
  function w(x) {
    if (!Wf(x)) throw new Error(Je(7));
    if (typeof x.type > "u") throw new Error(Je(8));
    if (typeof x.type != "string") throw new Error(Je(17));
    if (g) throw new Error(Je(9));
    try {
      (g = !0), (s = c(s, x));
    } finally {
      g = !1;
    }
    return (
      (d = h).forEach((X) => {
        X();
      }),
      x
    );
  }
  function C(x) {
    if (typeof x != "function") throw new Error(Je(10));
    (c = x), w({ type: qi.REPLACE });
  }
  function R() {
    const x = O;
    return {
      subscribe(H) {
        if (typeof H != "object" || H === null) throw new Error(Je(11));
        function X() {
          const K = H;
          K.next && K.next(b());
        }
        return X(), { unsubscribe: x(X) };
      },
      [im]() {
        return this;
      },
    };
  }
  return (
    w({ type: qi.INIT }),
    { dispatch: w, subscribe: O, getState: b, replaceReducer: C, [im]: R }
  );
}
function Kv(a) {
  Object.keys(a).forEach((i) => {
    const f = a[i];
    if (typeof f(void 0, { type: qi.INIT }) > "u") throw new Error(Je(12));
    if (typeof f(void 0, { type: qi.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Je(13));
  });
}
function kv(a) {
  const i = Object.keys(a),
    f = {};
  for (let d = 0; d < i.length; d++) {
    const h = i[d];
    typeof a[h] == "function" && (f[h] = a[h]);
  }
  const c = Object.keys(f);
  let s;
  try {
    Kv(f);
  } catch (d) {
    s = d;
  }
  return function (h = {}, y) {
    if (s) throw s;
    let g = !1;
    const m = {};
    for (let b = 0; b < c.length; b++) {
      const O = c[b],
        w = f[O],
        C = h[O],
        R = w(C, y);
      if (typeof R > "u") throw (y && y.type, new Error(Je(14)));
      (m[O] = R), (g = g || R !== C);
    }
    return (g = g || c.length !== Object.keys(h).length), g ? m : h;
  };
}
function ji(...a) {
  return a.length === 0
    ? (i) => i
    : a.length === 1
    ? a[0]
    : a.reduce(
        (i, f) =>
          (...c) =>
            i(f(...c))
      );
}
function Jv(...a) {
  return (i) => (f, c) => {
    const s = i(f, c);
    let d = () => {
      throw new Error(Je(15));
    };
    const h = { getState: s.getState, dispatch: (g, ...m) => d(g, ...m) },
      y = a.map((g) => g(h));
    return (d = ji(...y)(s.dispatch)), { ...s, dispatch: d };
  };
}
function $v(a) {
  return Wf(a) && "type" in a && typeof a.type == "string";
}
var Jm = Symbol.for("immer-nothing"),
  rm = Symbol.for("immer-draftable"),
  yt = Symbol.for("immer-state");
function Mt(a, ...i) {
  throw new Error(
    `[Immer] minified error nr: ${a}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Pl = Object.getPrototypeOf;
function dl(a) {
  return !!a && !!a[yt];
}
function mn(a) {
  var i;
  return a
    ? $m(a) ||
        Array.isArray(a) ||
        !!a[rm] ||
        !!((i = a.constructor) != null && i[rm]) ||
        $i(a) ||
        Fi(a)
    : !1;
}
var Fv = Object.prototype.constructor.toString();
function $m(a) {
  if (!a || typeof a != "object") return !1;
  const i = Pl(a);
  if (i === null) return !0;
  const f = Object.hasOwnProperty.call(i, "constructor") && i.constructor;
  return f === Object
    ? !0
    : typeof f == "function" && Function.toString.call(f) === Fv;
}
function Yi(a, i) {
  Ji(a) === 0
    ? Reflect.ownKeys(a).forEach((f) => {
        i(f, a[f], a);
      })
    : a.forEach((f, c) => i(c, f, a));
}
function Ji(a) {
  const i = a[yt];
  return i ? i.type_ : Array.isArray(a) ? 1 : $i(a) ? 2 : Fi(a) ? 3 : 0;
}
function Uf(a, i) {
  return Ji(a) === 2 ? a.has(i) : Object.prototype.hasOwnProperty.call(a, i);
}
function Fm(a, i, f) {
  const c = Ji(a);
  c === 2 ? a.set(i, f) : c === 3 ? a.add(f) : (a[i] = f);
}
function Wv(a, i) {
  return a === i ? a !== 0 || 1 / a === 1 / i : a !== a && i !== i;
}
function $i(a) {
  return a instanceof Map;
}
function Fi(a) {
  return a instanceof Set;
}
function fl(a) {
  return a.copy_ || a.base_;
}
function Hf(a, i) {
  if ($i(a)) return new Map(a);
  if (Fi(a)) return new Set(a);
  if (Array.isArray(a)) return Array.prototype.slice.call(a);
  const f = $m(a);
  if (i === !0 || (i === "class_only" && !f)) {
    const c = Object.getOwnPropertyDescriptors(a);
    delete c[yt];
    let s = Reflect.ownKeys(c);
    for (let d = 0; d < s.length; d++) {
      const h = s[d],
        y = c[h];
      y.writable === !1 && ((y.writable = !0), (y.configurable = !0)),
        (y.get || y.set) &&
          (c[h] = {
            configurable: !0,
            writable: !0,
            enumerable: y.enumerable,
            value: a[h],
          });
    }
    return Object.create(Pl(a), c);
  } else {
    const c = Pl(a);
    if (c !== null && f) return { ...a };
    const s = Object.create(c);
    return Object.assign(s, a);
  }
}
function Pf(a, i = !1) {
  return (
    Wi(a) ||
      dl(a) ||
      !mn(a) ||
      (Ji(a) > 1 && (a.set = a.add = a.clear = a.delete = Pv),
      Object.freeze(a),
      i && Object.entries(a).forEach(([f, c]) => Pf(c, !0))),
    a
  );
}
function Pv() {
  Mt(2);
}
function Wi(a) {
  return Object.isFrozen(a);
}
var Iv = {};
function hl(a) {
  const i = Iv[a];
  return i || Mt(0, a), i;
}
var ru;
function Wm() {
  return ru;
}
function eb(a, i) {
  return {
    drafts_: [],
    parent_: a,
    immer_: i,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function cm(a, i) {
  i &&
    (hl("Patches"),
    (a.patches_ = []),
    (a.inversePatches_ = []),
    (a.patchListener_ = i));
}
function Bf(a) {
  Lf(a), a.drafts_.forEach(tb), (a.drafts_ = null);
}
function Lf(a) {
  a === ru && (ru = a.parent_);
}
function fm(a) {
  return (ru = eb(ru, a));
}
function tb(a) {
  const i = a[yt];
  i.type_ === 0 || i.type_ === 1 ? i.revoke_() : (i.revoked_ = !0);
}
function sm(a, i) {
  i.unfinalizedDrafts_ = i.drafts_.length;
  const f = i.drafts_[0];
  return (
    a !== void 0 && a !== f
      ? (f[yt].modified_ && (Bf(i), Mt(4)),
        mn(a) && ((a = Gi(i, a)), i.parent_ || Xi(i, a)),
        i.patches_ &&
          hl("Patches").generateReplacementPatches_(
            f[yt].base_,
            a,
            i.patches_,
            i.inversePatches_
          ))
      : (a = Gi(i, f, [])),
    Bf(i),
    i.patches_ && i.patchListener_(i.patches_, i.inversePatches_),
    a !== Jm ? a : void 0
  );
}
function Gi(a, i, f) {
  if (Wi(i)) return i;
  const c = i[yt];
  if (!c) return Yi(i, (s, d) => om(a, c, i, s, d, f)), i;
  if (c.scope_ !== a) return i;
  if (!c.modified_) return Xi(a, c.base_, !0), c.base_;
  if (!c.finalized_) {
    (c.finalized_ = !0), c.scope_.unfinalizedDrafts_--;
    const s = c.copy_;
    let d = s,
      h = !1;
    c.type_ === 3 && ((d = new Set(s)), s.clear(), (h = !0)),
      Yi(d, (y, g) => om(a, c, s, y, g, f, h)),
      Xi(a, s, !1),
      f &&
        a.patches_ &&
        hl("Patches").generatePatches_(c, f, a.patches_, a.inversePatches_);
  }
  return c.copy_;
}
function om(a, i, f, c, s, d, h) {
  if (dl(s)) {
    const y =
        d && i && i.type_ !== 3 && !Uf(i.assigned_, c) ? d.concat(c) : void 0,
      g = Gi(a, s, y);
    if ((Fm(f, c, g), dl(g))) a.canAutoFreeze_ = !1;
    else return;
  } else h && f.add(s);
  if (mn(s) && !Wi(s)) {
    if (!a.immer_.autoFreeze_ && a.unfinalizedDrafts_ < 1) return;
    Gi(a, s),
      (!i || !i.scope_.parent_) &&
        typeof c != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(f, c) &&
        Xi(a, s);
  }
}
function Xi(a, i, f = !1) {
  !a.parent_ && a.immer_.autoFreeze_ && a.canAutoFreeze_ && Pf(i, f);
}
function nb(a, i) {
  const f = Array.isArray(a),
    c = {
      type_: f ? 1 : 0,
      scope_: i ? i.scope_ : Wm(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: i,
      base_: a,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let s = c,
    d = If;
  f && ((s = [c]), (d = cu));
  const { revoke: h, proxy: y } = Proxy.revocable(s, d);
  return (c.draft_ = y), (c.revoke_ = h), y;
}
var If = {
    get(a, i) {
      if (i === yt) return a;
      const f = fl(a);
      if (!Uf(f, i)) return lb(a, f, i);
      const c = f[i];
      return a.finalized_ || !mn(c)
        ? c
        : c === _f(a.base_, i)
        ? (wf(a), (a.copy_[i] = jf(c, a)))
        : c;
    },
    has(a, i) {
      return i in fl(a);
    },
    ownKeys(a) {
      return Reflect.ownKeys(fl(a));
    },
    set(a, i, f) {
      const c = Pm(fl(a), i);
      if (c != null && c.set) return c.set.call(a.draft_, f), !0;
      if (!a.modified_) {
        const s = _f(fl(a), i),
          d = s == null ? void 0 : s[yt];
        if (d && d.base_ === f)
          return (a.copy_[i] = f), (a.assigned_[i] = !1), !0;
        if (Wv(f, s) && (f !== void 0 || Uf(a.base_, i))) return !0;
        wf(a), qf(a);
      }
      return (
        (a.copy_[i] === f && (f !== void 0 || i in a.copy_)) ||
          (Number.isNaN(f) && Number.isNaN(a.copy_[i])) ||
          ((a.copy_[i] = f), (a.assigned_[i] = !0)),
        !0
      );
    },
    deleteProperty(a, i) {
      return (
        _f(a.base_, i) !== void 0 || i in a.base_
          ? ((a.assigned_[i] = !1), wf(a), qf(a))
          : delete a.assigned_[i],
        a.copy_ && delete a.copy_[i],
        !0
      );
    },
    getOwnPropertyDescriptor(a, i) {
      const f = fl(a),
        c = Reflect.getOwnPropertyDescriptor(f, i);
      return (
        c && {
          writable: !0,
          configurable: a.type_ !== 1 || i !== "length",
          enumerable: c.enumerable,
          value: f[i],
        }
      );
    },
    defineProperty() {
      Mt(11);
    },
    getPrototypeOf(a) {
      return Pl(a.base_);
    },
    setPrototypeOf() {
      Mt(12);
    },
  },
  cu = {};
Yi(If, (a, i) => {
  cu[a] = function () {
    return (arguments[0] = arguments[0][0]), i.apply(this, arguments);
  };
});
cu.deleteProperty = function (a, i) {
  return cu.set.call(this, a, i, void 0);
};
cu.set = function (a, i, f) {
  return If.set.call(this, a[0], i, f, a[0]);
};
function _f(a, i) {
  const f = a[yt];
  return (f ? fl(f) : a)[i];
}
function lb(a, i, f) {
  var s;
  const c = Pm(i, f);
  return c
    ? "value" in c
      ? c.value
      : (s = c.get) == null
      ? void 0
      : s.call(a.draft_)
    : void 0;
}
function Pm(a, i) {
  if (!(i in a)) return;
  let f = Pl(a);
  for (; f; ) {
    const c = Object.getOwnPropertyDescriptor(f, i);
    if (c) return c;
    f = Pl(f);
  }
}
function qf(a) {
  a.modified_ || ((a.modified_ = !0), a.parent_ && qf(a.parent_));
}
function wf(a) {
  a.copy_ || (a.copy_ = Hf(a.base_, a.scope_.immer_.useStrictShallowCopy_));
}
var ab = class {
  constructor(a) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (i, f, c) => {
        if (typeof i == "function" && typeof f != "function") {
          const d = f;
          f = i;
          const h = this;
          return function (g = d, ...m) {
            return h.produce(g, (b) => f.call(this, b, ...m));
          };
        }
        typeof f != "function" && Mt(6),
          c !== void 0 && typeof c != "function" && Mt(7);
        let s;
        if (mn(i)) {
          const d = fm(this),
            h = jf(i, void 0);
          let y = !0;
          try {
            (s = f(h)), (y = !1);
          } finally {
            y ? Bf(d) : Lf(d);
          }
          return cm(d, c), sm(s, d);
        } else if (!i || typeof i != "object") {
          if (
            ((s = f(i)),
            s === void 0 && (s = i),
            s === Jm && (s = void 0),
            this.autoFreeze_ && Pf(s, !0),
            c)
          ) {
            const d = [],
              h = [];
            hl("Patches").generateReplacementPatches_(i, s, d, h), c(d, h);
          }
          return s;
        } else Mt(1, i);
      }),
      (this.produceWithPatches = (i, f) => {
        if (typeof i == "function")
          return (h, ...y) => this.produceWithPatches(h, (g) => i(g, ...y));
        let c, s;
        return [
          this.produce(i, f, (h, y) => {
            (c = h), (s = y);
          }),
          c,
          s,
        ];
      }),
      typeof (a == null ? void 0 : a.autoFreeze) == "boolean" &&
        this.setAutoFreeze(a.autoFreeze),
      typeof (a == null ? void 0 : a.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(a.useStrictShallowCopy);
  }
  createDraft(a) {
    mn(a) || Mt(8), dl(a) && (a = ub(a));
    const i = fm(this),
      f = jf(a, void 0);
    return (f[yt].isManual_ = !0), Lf(i), f;
  }
  finishDraft(a, i) {
    const f = a && a[yt];
    (!f || !f.isManual_) && Mt(9);
    const { scope_: c } = f;
    return cm(c, i), sm(void 0, c);
  }
  setAutoFreeze(a) {
    this.autoFreeze_ = a;
  }
  setUseStrictShallowCopy(a) {
    this.useStrictShallowCopy_ = a;
  }
  applyPatches(a, i) {
    let f;
    for (f = i.length - 1; f >= 0; f--) {
      const s = i[f];
      if (s.path.length === 0 && s.op === "replace") {
        a = s.value;
        break;
      }
    }
    f > -1 && (i = i.slice(f + 1));
    const c = hl("Patches").applyPatches_;
    return dl(a) ? c(a, i) : this.produce(a, (s) => c(s, i));
  }
};
function jf(a, i) {
  const f = $i(a)
    ? hl("MapSet").proxyMap_(a, i)
    : Fi(a)
    ? hl("MapSet").proxySet_(a, i)
    : nb(a, i);
  return (i ? i.scope_ : Wm()).drafts_.push(f), f;
}
function ub(a) {
  return dl(a) || Mt(10, a), Im(a);
}
function Im(a) {
  if (!mn(a) || Wi(a)) return a;
  const i = a[yt];
  let f;
  if (i) {
    if (!i.modified_) return i.base_;
    (i.finalized_ = !0), (f = Hf(a, i.scope_.immer_.useStrictShallowCopy_));
  } else f = Hf(a, !0);
  return (
    Yi(f, (c, s) => {
      Fm(f, c, Im(s));
    }),
    i && (i.finalized_ = !1),
    f
  );
}
var pt = new ab(),
  ey = pt.produce;
pt.produceWithPatches.bind(pt);
pt.setAutoFreeze.bind(pt);
pt.setUseStrictShallowCopy.bind(pt);
pt.applyPatches.bind(pt);
pt.createDraft.bind(pt);
pt.finishDraft.bind(pt);
function ty(a) {
  return ({ dispatch: f, getState: c }) =>
    (s) =>
    (d) =>
      typeof d == "function" ? d(f, c, a) : s(d);
}
var ib = ty(),
  rb = ty,
  cb =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? ji
              : ji.apply(null, arguments);
        };
function dm(a, i) {
  function f(...c) {
    if (i) {
      let s = i(...c);
      if (!s) throw new Error(hn(0));
      return {
        type: a,
        payload: s.payload,
        ...("meta" in s && { meta: s.meta }),
        ...("error" in s && { error: s.error }),
      };
    }
    return { type: a, payload: c[0] };
  }
  return (
    (f.toString = () => `${a}`),
    (f.type = a),
    (f.match = (c) => $v(c) && c.type === a),
    f
  );
}
var ny = class uu extends Array {
  constructor(...i) {
    super(...i), Object.setPrototypeOf(this, uu.prototype);
  }
  static get [Symbol.species]() {
    return uu;
  }
  concat(...i) {
    return super.concat.apply(this, i);
  }
  prepend(...i) {
    return i.length === 1 && Array.isArray(i[0])
      ? new uu(...i[0].concat(this))
      : new uu(...i.concat(this));
  }
};
function hm(a) {
  return mn(a) ? ey(a, () => {}) : a;
}
function mm(a, i, f) {
  return a.has(i) ? a.get(i) : a.set(i, f(i)).get(i);
}
function fb(a) {
  return typeof a == "boolean";
}
var sb = () =>
    function (i) {
      const {
        thunk: f = !0,
        immutableCheck: c = !0,
        serializableCheck: s = !0,
        actionCreatorCheck: d = !0,
      } = i ?? {};
      let h = new ny();
      return f && (fb(f) ? h.push(ib) : h.push(rb(f.extraArgument))), h;
    },
  ob = "RTK_autoBatch",
  ym = (a) => (i) => {
    setTimeout(i, a);
  },
  db =
    (a = { type: "raf" }) =>
    (i) =>
    (...f) => {
      const c = i(...f);
      let s = !0,
        d = !1,
        h = !1;
      const y = new Set(),
        g =
          a.type === "tick"
            ? queueMicrotask
            : a.type === "raf"
            ? typeof window < "u" && window.requestAnimationFrame
              ? window.requestAnimationFrame
              : ym(10)
            : a.type === "callback"
            ? a.queueNotification
            : ym(a.timeout),
        m = () => {
          (h = !1), d && ((d = !1), y.forEach((b) => b()));
        };
      return Object.assign({}, c, {
        subscribe(b) {
          const O = () => s && b(),
            w = c.subscribe(O);
          return (
            y.add(b),
            () => {
              w(), y.delete(b);
            }
          );
        },
        dispatch(b) {
          var O;
          try {
            return (
              (s = !((O = b == null ? void 0 : b.meta) != null && O[ob])),
              (d = !s),
              d && (h || ((h = !0), g(m))),
              c.dispatch(b)
            );
          } finally {
            s = !0;
          }
        },
      });
    },
  hb = (a) =>
    function (f) {
      const { autoBatch: c = !0 } = f ?? {};
      let s = new ny(a);
      return c && s.push(db(typeof c == "object" ? c : void 0)), s;
    };
function mb(a) {
  const i = sb(),
    {
      reducer: f = void 0,
      middleware: c,
      devTools: s = !0,
      preloadedState: d = void 0,
      enhancers: h = void 0,
    } = a || {};
  let y;
  if (typeof f == "function") y = f;
  else if (Wf(f)) y = kv(f);
  else throw new Error(hn(1));
  let g;
  typeof c == "function" ? (g = c(i)) : (g = i());
  let m = ji;
  s && (m = cb({ trace: !1, ...(typeof s == "object" && s) }));
  const b = Jv(...g),
    O = hb(b);
  let w = typeof h == "function" ? h(O) : O();
  const C = m(...w);
  return km(y, d, C);
}
function ly(a) {
  const i = {},
    f = [];
  let c;
  const s = {
    addCase(d, h) {
      const y = typeof d == "string" ? d : d.type;
      if (!y) throw new Error(hn(28));
      if (y in i) throw new Error(hn(29));
      return (i[y] = h), s;
    },
    addMatcher(d, h) {
      return f.push({ matcher: d, reducer: h }), s;
    },
    addDefaultCase(d) {
      return (c = d), s;
    },
  };
  return a(s), [i, f, c];
}
function yb(a) {
  return typeof a == "function";
}
function pb(a, i) {
  let [f, c, s] = ly(i),
    d;
  if (yb(a)) d = () => hm(a());
  else {
    const y = hm(a);
    d = () => y;
  }
  function h(y = d(), g) {
    let m = [
      f[g.type],
      ...c.filter(({ matcher: b }) => b(g)).map(({ reducer: b }) => b),
    ];
    return (
      m.filter((b) => !!b).length === 0 && (m = [s]),
      m.reduce((b, O) => {
        if (O)
          if (dl(b)) {
            const C = O(b, g);
            return C === void 0 ? b : C;
          } else {
            if (mn(b)) return ey(b, (w) => O(w, g));
            {
              const w = O(b, g);
              if (w === void 0) {
                if (b === null) return b;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined"
                );
              }
              return w;
            }
          }
        return b;
      }, y)
    );
  }
  return (h.getInitialState = d), h;
}
var gb = Symbol.for("rtk-slice-createasyncthunk");
function vb(a, i) {
  return `${a}/${i}`;
}
function bb({ creators: a } = {}) {
  var f;
  const i = (f = a == null ? void 0 : a.asyncThunk) == null ? void 0 : f[gb];
  return function (s) {
    const { name: d, reducerPath: h = d } = s;
    if (!d) throw new Error(hn(11));
    const y =
        (typeof s.reducers == "function" ? s.reducers(Tb()) : s.reducers) || {},
      g = Object.keys(y),
      m = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      b = {
        addCase(L, K) {
          const Q = typeof L == "string" ? L : L.type;
          if (!Q) throw new Error(hn(12));
          if (Q in m.sliceCaseReducersByType) throw new Error(hn(13));
          return (m.sliceCaseReducersByType[Q] = K), b;
        },
        addMatcher(L, K) {
          return m.sliceMatchers.push({ matcher: L, reducer: K }), b;
        },
        exposeAction(L, K) {
          return (m.actionCreators[L] = K), b;
        },
        exposeCaseReducer(L, K) {
          return (m.sliceCaseReducersByName[L] = K), b;
        },
      };
    g.forEach((L) => {
      const K = y[L],
        Q = {
          reducerName: L,
          type: vb(d, L),
          createNotation: typeof s.reducers == "function",
        };
      Ob(K) ? _b(Q, K, b, i) : Rb(Q, K, b);
    });
    function O() {
      const [L = {}, K = [], Q = void 0] =
          typeof s.extraReducers == "function"
            ? ly(s.extraReducers)
            : [s.extraReducers],
        te = { ...L, ...m.sliceCaseReducersByType };
      return pb(s.initialState, (fe) => {
        for (let de in te) fe.addCase(de, te[de]);
        for (let de of m.sliceMatchers) fe.addMatcher(de.matcher, de.reducer);
        for (let de of K) fe.addMatcher(de.matcher, de.reducer);
        Q && fe.addDefaultCase(Q);
      });
    }
    const w = (L) => L,
      C = new Map();
    let R;
    function B(L, K) {
      return R || (R = O()), R(L, K);
    }
    function x() {
      return R || (R = O()), R.getInitialState();
    }
    function H(L, K = !1) {
      function Q(fe) {
        let de = fe[L];
        return typeof de > "u" && K && (de = x()), de;
      }
      function te(fe = w) {
        const de = mm(C, K, () => new WeakMap());
        return mm(de, fe, () => {
          const Z = {};
          for (const [le, Ve] of Object.entries(s.selectors ?? {}))
            Z[le] = Sb(Ve, fe, x, K);
          return Z;
        });
      }
      return {
        reducerPath: L,
        getSelectors: te,
        get selectors() {
          return te(Q);
        },
        selectSlice: Q,
      };
    }
    const X = {
      name: d,
      reducer: B,
      actions: m.actionCreators,
      caseReducers: m.sliceCaseReducersByName,
      getInitialState: x,
      ...H(h),
      injectInto(L, { reducerPath: K, ...Q } = {}) {
        const te = K ?? h;
        return (
          L.inject({ reducerPath: te, reducer: B }, Q), { ...X, ...H(te, !0) }
        );
      },
    };
    return X;
  };
}
function Sb(a, i, f, c) {
  function s(d, ...h) {
    let y = i(d);
    return typeof y > "u" && c && (y = f()), a(y, ...h);
  }
  return (s.unwrapped = a), s;
}
var Eb = bb();
function Tb() {
  function a(i, f) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: i, ...f };
  }
  return (
    (a.withTypes = () => a),
    {
      reducer(i) {
        return Object.assign(
          {
            [i.name](...f) {
              return i(...f);
            },
          }[i.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(i, f) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: i,
          reducer: f,
        };
      },
      asyncThunk: a,
    }
  );
}
function Rb({ type: a, reducerName: i, createNotation: f }, c, s) {
  let d, h;
  if ("reducer" in c) {
    if (f && !Ab(c)) throw new Error(hn(17));
    (d = c.reducer), (h = c.prepare);
  } else d = c;
  s.addCase(a, d)
    .exposeCaseReducer(i, d)
    .exposeAction(i, h ? dm(a, h) : dm(a));
}
function Ob(a) {
  return a._reducerDefinitionType === "asyncThunk";
}
function Ab(a) {
  return a._reducerDefinitionType === "reducerWithPrepare";
}
function _b({ type: a, reducerName: i }, f, c, s) {
  if (!s) throw new Error(hn(18));
  const {
      payloadCreator: d,
      fulfilled: h,
      pending: y,
      rejected: g,
      settled: m,
      options: b,
    } = f,
    O = s(a, d, b);
  c.exposeAction(i, O),
    h && c.addCase(O.fulfilled, h),
    y && c.addCase(O.pending, y),
    g && c.addCase(O.rejected, g),
    m && c.addMatcher(O.settled, m),
    c.exposeCaseReducer(i, {
      fulfilled: h || Ni,
      pending: y || Ni,
      rejected: g || Ni,
      settled: m || Ni,
    });
}
function Ni() {}
function hn(a) {
  return `Minified Redux Toolkit error #${a}; visit https://redux-toolkit.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `;
}
const wb = { value: 0 },
  xb = Eb({ name: "order", initialState: wb, reducers: {} }),
  Db = xb.reducer,
  Cb = mb({ reducer: { order: Db } });
function Nb({ drink: a, quantity: i, onIncrease: f, onDecrease: c }) {
  return Y.createElement(
    "div",
    { className: "flex items-center justify-between p-4 border-b" },
    Y.createElement(
      "div",
      { className: "flex items-center gap-4 w-3/5" },
      Y.createElement("img", {
        src: a.image,
        alt: a.name,
        className: "w-16 h-16 rounded-lg object-cover",
      }),
      Y.createElement(
        "div",
        null,
        Y.createElement("h3", { className: "text-lg font-semibold" }, a.name)
      )
    ),
    Y.createElement(
      "div",
      { className: "flex items-center gap-3" },
      Y.createElement(
        "button",
        {
          className: "px-3 py-1 bg-gray-300 text-gray-700 rounded-lg",
          onClick: () => c(a.id),
        },
        "-"
      ),
      Y.createElement("span", { className: "text-lg font-semibold" }, i),
      Y.createElement(
        "button",
        {
          className: "px-3 py-1 bg-gray-500 text-white rounded-lg",
          onClick: () => f(a.id),
        },
        "+"
      )
    )
  );
}
function ay(a, i) {
  return function () {
    return a.apply(i, arguments);
  };
}
const { toString: zb } = Object.prototype,
  { getPrototypeOf: es } = Object,
  Pi = ((a) => (i) => {
    const f = zb.call(i);
    return a[f] || (a[f] = f.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ut = (a) => ((a = a.toLowerCase()), (i) => Pi(i) === a),
  Ii = (a) => (i) => typeof i === a,
  { isArray: ta } = Array,
  fu = Ii("undefined");
function Mb(a) {
  return (
    a !== null &&
    !fu(a) &&
    a.constructor !== null &&
    !fu(a.constructor) &&
    mt(a.constructor.isBuffer) &&
    a.constructor.isBuffer(a)
  );
}
const uy = Ut("ArrayBuffer");
function Ub(a) {
  let i;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (i = ArrayBuffer.isView(a))
      : (i = a && a.buffer && uy(a.buffer)),
    i
  );
}
const Hb = Ii("string"),
  mt = Ii("function"),
  iy = Ii("number"),
  er = (a) => a !== null && typeof a == "object",
  Bb = (a) => a === !0 || a === !1,
  Ui = (a) => {
    if (Pi(a) !== "object") return !1;
    const i = es(a);
    return (
      (i === null ||
        i === Object.prototype ||
        Object.getPrototypeOf(i) === null) &&
      !(Symbol.toStringTag in a) &&
      !(Symbol.iterator in a)
    );
  },
  Lb = Ut("Date"),
  qb = Ut("File"),
  jb = Ut("Blob"),
  Yb = Ut("FileList"),
  Gb = (a) => er(a) && mt(a.pipe),
  Xb = (a) => {
    let i;
    return (
      a &&
      ((typeof FormData == "function" && a instanceof FormData) ||
        (mt(a.append) &&
          ((i = Pi(a)) === "formdata" ||
            (i === "object" &&
              mt(a.toString) &&
              a.toString() === "[object FormData]"))))
    );
  },
  Qb = Ut("URLSearchParams"),
  [Vb, Zb, Kb, kb] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ut
  ),
  Jb = (a) =>
    a.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function mu(a, i, { allOwnKeys: f = !1 } = {}) {
  if (a === null || typeof a > "u") return;
  let c, s;
  if ((typeof a != "object" && (a = [a]), ta(a)))
    for (c = 0, s = a.length; c < s; c++) i.call(null, a[c], c, a);
  else {
    const d = f ? Object.getOwnPropertyNames(a) : Object.keys(a),
      h = d.length;
    let y;
    for (c = 0; c < h; c++) (y = d[c]), i.call(null, a[y], y, a);
  }
}
function ry(a, i) {
  i = i.toLowerCase();
  const f = Object.keys(a);
  let c = f.length,
    s;
  for (; c-- > 0; ) if (((s = f[c]), i === s.toLowerCase())) return s;
  return null;
}
const sl =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  cy = (a) => !fu(a) && a !== sl;
function Yf() {
  const { caseless: a } = (cy(this) && this) || {},
    i = {},
    f = (c, s) => {
      const d = (a && ry(i, s)) || s;
      Ui(i[d]) && Ui(c)
        ? (i[d] = Yf(i[d], c))
        : Ui(c)
        ? (i[d] = Yf({}, c))
        : ta(c)
        ? (i[d] = c.slice())
        : (i[d] = c);
    };
  for (let c = 0, s = arguments.length; c < s; c++)
    arguments[c] && mu(arguments[c], f);
  return i;
}
const $b = (a, i, f, { allOwnKeys: c } = {}) => (
    mu(
      i,
      (s, d) => {
        f && mt(s) ? (a[d] = ay(s, f)) : (a[d] = s);
      },
      { allOwnKeys: c }
    ),
    a
  ),
  Fb = (a) => (a.charCodeAt(0) === 65279 && (a = a.slice(1)), a),
  Wb = (a, i, f, c) => {
    (a.prototype = Object.create(i.prototype, c)),
      (a.prototype.constructor = a),
      Object.defineProperty(a, "super", { value: i.prototype }),
      f && Object.assign(a.prototype, f);
  },
  Pb = (a, i, f, c) => {
    let s, d, h;
    const y = {};
    if (((i = i || {}), a == null)) return i;
    do {
      for (s = Object.getOwnPropertyNames(a), d = s.length; d-- > 0; )
        (h = s[d]), (!c || c(h, a, i)) && !y[h] && ((i[h] = a[h]), (y[h] = !0));
      a = f !== !1 && es(a);
    } while (a && (!f || f(a, i)) && a !== Object.prototype);
    return i;
  },
  Ib = (a, i, f) => {
    (a = String(a)),
      (f === void 0 || f > a.length) && (f = a.length),
      (f -= i.length);
    const c = a.indexOf(i, f);
    return c !== -1 && c === f;
  },
  e1 = (a) => {
    if (!a) return null;
    if (ta(a)) return a;
    let i = a.length;
    if (!iy(i)) return null;
    const f = new Array(i);
    for (; i-- > 0; ) f[i] = a[i];
    return f;
  },
  t1 = (
    (a) => (i) =>
      a && i instanceof a
  )(typeof Uint8Array < "u" && es(Uint8Array)),
  n1 = (a, i) => {
    const c = (a && a[Symbol.iterator]).call(a);
    let s;
    for (; (s = c.next()) && !s.done; ) {
      const d = s.value;
      i.call(a, d[0], d[1]);
    }
  },
  l1 = (a, i) => {
    let f;
    const c = [];
    for (; (f = a.exec(i)) !== null; ) c.push(f);
    return c;
  },
  a1 = Ut("HTMLFormElement"),
  u1 = (a) =>
    a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (f, c, s) {
      return c.toUpperCase() + s;
    }),
  pm = (
    ({ hasOwnProperty: a }) =>
    (i, f) =>
      a.call(i, f)
  )(Object.prototype),
  i1 = Ut("RegExp"),
  fy = (a, i) => {
    const f = Object.getOwnPropertyDescriptors(a),
      c = {};
    mu(f, (s, d) => {
      let h;
      (h = i(s, d, a)) !== !1 && (c[d] = h || s);
    }),
      Object.defineProperties(a, c);
  },
  r1 = (a) => {
    fy(a, (i, f) => {
      if (mt(a) && ["arguments", "caller", "callee"].indexOf(f) !== -1)
        return !1;
      const c = a[f];
      if (mt(c)) {
        if (((i.enumerable = !1), "writable" in i)) {
          i.writable = !1;
          return;
        }
        i.set ||
          (i.set = () => {
            throw Error("Can not rewrite read-only method '" + f + "'");
          });
      }
    });
  },
  c1 = (a, i) => {
    const f = {},
      c = (s) => {
        s.forEach((d) => {
          f[d] = !0;
        });
      };
    return ta(a) ? c(a) : c(String(a).split(i)), f;
  },
  f1 = () => {},
  s1 = (a, i) => (a != null && Number.isFinite((a = +a)) ? a : i),
  xf = "abcdefghijklmnopqrstuvwxyz",
  gm = "0123456789",
  sy = { DIGIT: gm, ALPHA: xf, ALPHA_DIGIT: xf + xf.toUpperCase() + gm },
  o1 = (a = 16, i = sy.ALPHA_DIGIT) => {
    let f = "";
    const { length: c } = i;
    for (; a--; ) f += i[(Math.random() * c) | 0];
    return f;
  };
function d1(a) {
  return !!(
    a &&
    mt(a.append) &&
    a[Symbol.toStringTag] === "FormData" &&
    a[Symbol.iterator]
  );
}
const h1 = (a) => {
    const i = new Array(10),
      f = (c, s) => {
        if (er(c)) {
          if (i.indexOf(c) >= 0) return;
          if (!("toJSON" in c)) {
            i[s] = c;
            const d = ta(c) ? [] : {};
            return (
              mu(c, (h, y) => {
                const g = f(h, s + 1);
                !fu(g) && (d[y] = g);
              }),
              (i[s] = void 0),
              d
            );
          }
        }
        return c;
      };
    return f(a, 0);
  },
  m1 = Ut("AsyncFunction"),
  y1 = (a) => a && (er(a) || mt(a)) && mt(a.then) && mt(a.catch),
  oy = ((a, i) =>
    a
      ? setImmediate
      : i
      ? ((f, c) => (
          sl.addEventListener(
            "message",
            ({ source: s, data: d }) => {
              s === sl && d === f && c.length && c.shift()();
            },
            !1
          ),
          (s) => {
            c.push(s), sl.postMessage(f, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (f) => setTimeout(f))(
    typeof setImmediate == "function",
    mt(sl.postMessage)
  ),
  p1 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(sl)
      : (typeof process < "u" && process.nextTick) || oy,
  z = {
    isArray: ta,
    isArrayBuffer: uy,
    isBuffer: Mb,
    isFormData: Xb,
    isArrayBufferView: Ub,
    isString: Hb,
    isNumber: iy,
    isBoolean: Bb,
    isObject: er,
    isPlainObject: Ui,
    isReadableStream: Vb,
    isRequest: Zb,
    isResponse: Kb,
    isHeaders: kb,
    isUndefined: fu,
    isDate: Lb,
    isFile: qb,
    isBlob: jb,
    isRegExp: i1,
    isFunction: mt,
    isStream: Gb,
    isURLSearchParams: Qb,
    isTypedArray: t1,
    isFileList: Yb,
    forEach: mu,
    merge: Yf,
    extend: $b,
    trim: Jb,
    stripBOM: Fb,
    inherits: Wb,
    toFlatObject: Pb,
    kindOf: Pi,
    kindOfTest: Ut,
    endsWith: Ib,
    toArray: e1,
    forEachEntry: n1,
    matchAll: l1,
    isHTMLForm: a1,
    hasOwnProperty: pm,
    hasOwnProp: pm,
    reduceDescriptors: fy,
    freezeMethods: r1,
    toObjectSet: c1,
    toCamelCase: u1,
    noop: f1,
    toFiniteNumber: s1,
    findKey: ry,
    global: sl,
    isContextDefined: cy,
    ALPHABET: sy,
    generateString: o1,
    isSpecCompliantForm: d1,
    toJSONObject: h1,
    isAsyncFn: m1,
    isThenable: y1,
    setImmediate: oy,
    asap: p1,
  };
function ue(a, i, f, c, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = a),
    (this.name = "AxiosError"),
    i && (this.code = i),
    f && (this.config = f),
    c && (this.request = c),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
z.inherits(ue, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: z.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const dy = ue.prototype,
  hy = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((a) => {
  hy[a] = { value: a };
});
Object.defineProperties(ue, hy);
Object.defineProperty(dy, "isAxiosError", { value: !0 });
ue.from = (a, i, f, c, s, d) => {
  const h = Object.create(dy);
  return (
    z.toFlatObject(
      a,
      h,
      function (g) {
        return g !== Error.prototype;
      },
      (y) => y !== "isAxiosError"
    ),
    ue.call(h, a.message, i, f, c, s),
    (h.cause = a),
    (h.name = a.name),
    d && Object.assign(h, d),
    h
  );
};
const g1 = null;
function Gf(a) {
  return z.isPlainObject(a) || z.isArray(a);
}
function my(a) {
  return z.endsWith(a, "[]") ? a.slice(0, -2) : a;
}
function vm(a, i, f) {
  return a
    ? a
        .concat(i)
        .map(function (s, d) {
          return (s = my(s)), !f && d ? "[" + s + "]" : s;
        })
        .join(f ? "." : "")
    : i;
}
function v1(a) {
  return z.isArray(a) && !a.some(Gf);
}
const b1 = z.toFlatObject(z, {}, null, function (i) {
  return /^is[A-Z]/.test(i);
});
function tr(a, i, f) {
  if (!z.isObject(a)) throw new TypeError("target must be an object");
  (i = i || new FormData()),
    (f = z.toFlatObject(
      f,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (B, x) {
        return !z.isUndefined(x[B]);
      }
    ));
  const c = f.metaTokens,
    s = f.visitor || b,
    d = f.dots,
    h = f.indexes,
    g = (f.Blob || (typeof Blob < "u" && Blob)) && z.isSpecCompliantForm(i);
  if (!z.isFunction(s)) throw new TypeError("visitor must be a function");
  function m(R) {
    if (R === null) return "";
    if (z.isDate(R)) return R.toISOString();
    if (!g && z.isBlob(R))
      throw new ue("Blob is not supported. Use a Buffer instead.");
    return z.isArrayBuffer(R) || z.isTypedArray(R)
      ? g && typeof Blob == "function"
        ? new Blob([R])
        : Buffer.from(R)
      : R;
  }
  function b(R, B, x) {
    let H = R;
    if (R && !x && typeof R == "object") {
      if (z.endsWith(B, "{}"))
        (B = c ? B : B.slice(0, -2)), (R = JSON.stringify(R));
      else if (
        (z.isArray(R) && v1(R)) ||
        ((z.isFileList(R) || z.endsWith(B, "[]")) && (H = z.toArray(R)))
      )
        return (
          (B = my(B)),
          H.forEach(function (L, K) {
            !(z.isUndefined(L) || L === null) &&
              i.append(
                h === !0 ? vm([B], K, d) : h === null ? B : B + "[]",
                m(L)
              );
          }),
          !1
        );
    }
    return Gf(R) ? !0 : (i.append(vm(x, B, d), m(R)), !1);
  }
  const O = [],
    w = Object.assign(b1, {
      defaultVisitor: b,
      convertValue: m,
      isVisitable: Gf,
    });
  function C(R, B) {
    if (!z.isUndefined(R)) {
      if (O.indexOf(R) !== -1)
        throw Error("Circular reference detected in " + B.join("."));
      O.push(R),
        z.forEach(R, function (H, X) {
          (!(z.isUndefined(H) || H === null) &&
            s.call(i, H, z.isString(X) ? X.trim() : X, B, w)) === !0 &&
            C(H, B ? B.concat(X) : [X]);
        }),
        O.pop();
    }
  }
  if (!z.isObject(a)) throw new TypeError("data must be an object");
  return C(a), i;
}
function bm(a) {
  const i = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g, function (c) {
    return i[c];
  });
}
function ts(a, i) {
  (this._pairs = []), a && tr(a, this, i);
}
const yy = ts.prototype;
yy.append = function (i, f) {
  this._pairs.push([i, f]);
};
yy.toString = function (i) {
  const f = i
    ? function (c) {
        return i.call(this, c, bm);
      }
    : bm;
  return this._pairs
    .map(function (s) {
      return f(s[0]) + "=" + f(s[1]);
    }, "")
    .join("&");
};
function S1(a) {
  return encodeURIComponent(a)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function py(a, i, f) {
  if (!i) return a;
  const c = (f && f.encode) || S1;
  z.isFunction(f) && (f = { serialize: f });
  const s = f && f.serialize;
  let d;
  if (
    (s
      ? (d = s(i, f))
      : (d = z.isURLSearchParams(i) ? i.toString() : new ts(i, f).toString(c)),
    d)
  ) {
    const h = a.indexOf("#");
    h !== -1 && (a = a.slice(0, h)),
      (a += (a.indexOf("?") === -1 ? "?" : "&") + d);
  }
  return a;
}
class Sm {
  constructor() {
    this.handlers = [];
  }
  use(i, f, c) {
    return (
      this.handlers.push({
        fulfilled: i,
        rejected: f,
        synchronous: c ? c.synchronous : !1,
        runWhen: c ? c.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(i) {
    this.handlers[i] && (this.handlers[i] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(i) {
    z.forEach(this.handlers, function (c) {
      c !== null && i(c);
    });
  }
}
const gy = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  E1 = typeof URLSearchParams < "u" ? URLSearchParams : ts,
  T1 = typeof FormData < "u" ? FormData : null,
  R1 = typeof Blob < "u" ? Blob : null,
  O1 = {
    isBrowser: !0,
    classes: { URLSearchParams: E1, FormData: T1, Blob: R1 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  ns = typeof window < "u" && typeof document < "u",
  Xf = (typeof navigator == "object" && navigator) || void 0,
  A1 =
    ns &&
    (!Xf || ["ReactNative", "NativeScript", "NS"].indexOf(Xf.product) < 0),
  _1 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  w1 = (ns && window.location.href) || "http://localhost",
  x1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: ns,
        hasStandardBrowserEnv: A1,
        hasStandardBrowserWebWorkerEnv: _1,
        navigator: Xf,
        origin: w1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Pe = { ...x1, ...O1 };
function D1(a, i) {
  return tr(
    a,
    new Pe.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (f, c, s, d) {
          return Pe.isNode && z.isBuffer(f)
            ? (this.append(c, f.toString("base64")), !1)
            : d.defaultVisitor.apply(this, arguments);
        },
      },
      i
    )
  );
}
function C1(a) {
  return z
    .matchAll(/\w+|\[(\w*)]/g, a)
    .map((i) => (i[0] === "[]" ? "" : i[1] || i[0]));
}
function N1(a) {
  const i = {},
    f = Object.keys(a);
  let c;
  const s = f.length;
  let d;
  for (c = 0; c < s; c++) (d = f[c]), (i[d] = a[d]);
  return i;
}
function vy(a) {
  function i(f, c, s, d) {
    let h = f[d++];
    if (h === "__proto__") return !0;
    const y = Number.isFinite(+h),
      g = d >= f.length;
    return (
      (h = !h && z.isArray(s) ? s.length : h),
      g
        ? (z.hasOwnProp(s, h) ? (s[h] = [s[h], c]) : (s[h] = c), !y)
        : ((!s[h] || !z.isObject(s[h])) && (s[h] = []),
          i(f, c, s[h], d) && z.isArray(s[h]) && (s[h] = N1(s[h])),
          !y)
    );
  }
  if (z.isFormData(a) && z.isFunction(a.entries)) {
    const f = {};
    return (
      z.forEachEntry(a, (c, s) => {
        i(C1(c), s, f, 0);
      }),
      f
    );
  }
  return null;
}
function z1(a, i, f) {
  if (z.isString(a))
    try {
      return (i || JSON.parse)(a), z.trim(a);
    } catch (c) {
      if (c.name !== "SyntaxError") throw c;
    }
  return (f || JSON.stringify)(a);
}
const yu = {
  transitional: gy,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (i, f) {
      const c = f.getContentType() || "",
        s = c.indexOf("application/json") > -1,
        d = z.isObject(i);
      if ((d && z.isHTMLForm(i) && (i = new FormData(i)), z.isFormData(i)))
        return s ? JSON.stringify(vy(i)) : i;
      if (
        z.isArrayBuffer(i) ||
        z.isBuffer(i) ||
        z.isStream(i) ||
        z.isFile(i) ||
        z.isBlob(i) ||
        z.isReadableStream(i)
      )
        return i;
      if (z.isArrayBufferView(i)) return i.buffer;
      if (z.isURLSearchParams(i))
        return (
          f.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          i.toString()
        );
      let y;
      if (d) {
        if (c.indexOf("application/x-www-form-urlencoded") > -1)
          return D1(i, this.formSerializer).toString();
        if ((y = z.isFileList(i)) || c.indexOf("multipart/form-data") > -1) {
          const g = this.env && this.env.FormData;
          return tr(
            y ? { "files[]": i } : i,
            g && new g(),
            this.formSerializer
          );
        }
      }
      return d || s ? (f.setContentType("application/json", !1), z1(i)) : i;
    },
  ],
  transformResponse: [
    function (i) {
      const f = this.transitional || yu.transitional,
        c = f && f.forcedJSONParsing,
        s = this.responseType === "json";
      if (z.isResponse(i) || z.isReadableStream(i)) return i;
      if (i && z.isString(i) && ((c && !this.responseType) || s)) {
        const h = !(f && f.silentJSONParsing) && s;
        try {
          return JSON.parse(i);
        } catch (y) {
          if (h)
            throw y.name === "SyntaxError"
              ? ue.from(y, ue.ERR_BAD_RESPONSE, this, null, this.response)
              : y;
        }
      }
      return i;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Pe.classes.FormData, Blob: Pe.classes.Blob },
  validateStatus: function (i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
z.forEach(["delete", "get", "head", "post", "put", "patch"], (a) => {
  yu.headers[a] = {};
});
const M1 = z.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  U1 = (a) => {
    const i = {};
    let f, c, s;
    return (
      a &&
        a
          .split(
            `
`
          )
          .forEach(function (h) {
            (s = h.indexOf(":")),
              (f = h.substring(0, s).trim().toLowerCase()),
              (c = h.substring(s + 1).trim()),
              !(!f || (i[f] && M1[f])) &&
                (f === "set-cookie"
                  ? i[f]
                    ? i[f].push(c)
                    : (i[f] = [c])
                  : (i[f] = i[f] ? i[f] + ", " + c : c));
          }),
      i
    );
  },
  Em = Symbol("internals");
function lu(a) {
  return a && String(a).trim().toLowerCase();
}
function Hi(a) {
  return a === !1 || a == null ? a : z.isArray(a) ? a.map(Hi) : String(a);
}
function H1(a) {
  const i = Object.create(null),
    f = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let c;
  for (; (c = f.exec(a)); ) i[c[1]] = c[2];
  return i;
}
const B1 = (a) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());
function Df(a, i, f, c, s) {
  if (z.isFunction(c)) return c.call(this, i, f);
  if ((s && (i = f), !!z.isString(i))) {
    if (z.isString(c)) return i.indexOf(c) !== -1;
    if (z.isRegExp(c)) return c.test(i);
  }
}
function L1(a) {
  return a
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (i, f, c) => f.toUpperCase() + c);
}
function q1(a, i) {
  const f = z.toCamelCase(" " + i);
  ["get", "set", "has"].forEach((c) => {
    Object.defineProperty(a, c + f, {
      value: function (s, d, h) {
        return this[c].call(this, i, s, d, h);
      },
      configurable: !0,
    });
  });
}
let it = class {
  constructor(i) {
    i && this.set(i);
  }
  set(i, f, c) {
    const s = this;
    function d(y, g, m) {
      const b = lu(g);
      if (!b) throw new Error("header name must be a non-empty string");
      const O = z.findKey(s, b);
      (!O || s[O] === void 0 || m === !0 || (m === void 0 && s[O] !== !1)) &&
        (s[O || g] = Hi(y));
    }
    const h = (y, g) => z.forEach(y, (m, b) => d(m, b, g));
    if (z.isPlainObject(i) || i instanceof this.constructor) h(i, f);
    else if (z.isString(i) && (i = i.trim()) && !B1(i)) h(U1(i), f);
    else if (z.isHeaders(i)) for (const [y, g] of i.entries()) d(g, y, c);
    else i != null && d(f, i, c);
    return this;
  }
  get(i, f) {
    if (((i = lu(i)), i)) {
      const c = z.findKey(this, i);
      if (c) {
        const s = this[c];
        if (!f) return s;
        if (f === !0) return H1(s);
        if (z.isFunction(f)) return f.call(this, s, c);
        if (z.isRegExp(f)) return f.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(i, f) {
    if (((i = lu(i)), i)) {
      const c = z.findKey(this, i);
      return !!(c && this[c] !== void 0 && (!f || Df(this, this[c], c, f)));
    }
    return !1;
  }
  delete(i, f) {
    const c = this;
    let s = !1;
    function d(h) {
      if (((h = lu(h)), h)) {
        const y = z.findKey(c, h);
        y && (!f || Df(c, c[y], y, f)) && (delete c[y], (s = !0));
      }
    }
    return z.isArray(i) ? i.forEach(d) : d(i), s;
  }
  clear(i) {
    const f = Object.keys(this);
    let c = f.length,
      s = !1;
    for (; c--; ) {
      const d = f[c];
      (!i || Df(this, this[d], d, i, !0)) && (delete this[d], (s = !0));
    }
    return s;
  }
  normalize(i) {
    const f = this,
      c = {};
    return (
      z.forEach(this, (s, d) => {
        const h = z.findKey(c, d);
        if (h) {
          (f[h] = Hi(s)), delete f[d];
          return;
        }
        const y = i ? L1(d) : String(d).trim();
        y !== d && delete f[d], (f[y] = Hi(s)), (c[y] = !0);
      }),
      this
    );
  }
  concat(...i) {
    return this.constructor.concat(this, ...i);
  }
  toJSON(i) {
    const f = Object.create(null);
    return (
      z.forEach(this, (c, s) => {
        c != null && c !== !1 && (f[s] = i && z.isArray(c) ? c.join(", ") : c);
      }),
      f
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([i, f]) => i + ": " + f).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(i) {
    return i instanceof this ? i : new this(i);
  }
  static concat(i, ...f) {
    const c = new this(i);
    return f.forEach((s) => c.set(s)), c;
  }
  static accessor(i) {
    const c = (this[Em] = this[Em] = { accessors: {} }).accessors,
      s = this.prototype;
    function d(h) {
      const y = lu(h);
      c[y] || (q1(s, h), (c[y] = !0));
    }
    return z.isArray(i) ? i.forEach(d) : d(i), this;
  }
};
it.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
z.reduceDescriptors(it.prototype, ({ value: a }, i) => {
  let f = i[0].toUpperCase() + i.slice(1);
  return {
    get: () => a,
    set(c) {
      this[f] = c;
    },
  };
});
z.freezeMethods(it);
function Cf(a, i) {
  const f = this || yu,
    c = i || f,
    s = it.from(c.headers);
  let d = c.data;
  return (
    z.forEach(a, function (y) {
      d = y.call(f, d, s.normalize(), i ? i.status : void 0);
    }),
    s.normalize(),
    d
  );
}
function by(a) {
  return !!(a && a.__CANCEL__);
}
function na(a, i, f) {
  ue.call(this, a ?? "canceled", ue.ERR_CANCELED, i, f),
    (this.name = "CanceledError");
}
z.inherits(na, ue, { __CANCEL__: !0 });
function Sy(a, i, f) {
  const c = f.config.validateStatus;
  !f.status || !c || c(f.status)
    ? a(f)
    : i(
        new ue(
          "Request failed with status code " + f.status,
          [ue.ERR_BAD_REQUEST, ue.ERR_BAD_RESPONSE][
            Math.floor(f.status / 100) - 4
          ],
          f.config,
          f.request,
          f
        )
      );
}
function j1(a) {
  const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
  return (i && i[1]) || "";
}
function Y1(a, i) {
  a = a || 10;
  const f = new Array(a),
    c = new Array(a);
  let s = 0,
    d = 0,
    h;
  return (
    (i = i !== void 0 ? i : 1e3),
    function (g) {
      const m = Date.now(),
        b = c[d];
      h || (h = m), (f[s] = g), (c[s] = m);
      let O = d,
        w = 0;
      for (; O !== s; ) (w += f[O++]), (O = O % a);
      if (((s = (s + 1) % a), s === d && (d = (d + 1) % a), m - h < i)) return;
      const C = b && m - b;
      return C ? Math.round((w * 1e3) / C) : void 0;
    }
  );
}
function G1(a, i) {
  let f = 0,
    c = 1e3 / i,
    s,
    d;
  const h = (m, b = Date.now()) => {
    (f = b), (s = null), d && (clearTimeout(d), (d = null)), a.apply(null, m);
  };
  return [
    (...m) => {
      const b = Date.now(),
        O = b - f;
      O >= c
        ? h(m, b)
        : ((s = m),
          d ||
            (d = setTimeout(() => {
              (d = null), h(s);
            }, c - O)));
    },
    () => s && h(s),
  ];
}
const Qi = (a, i, f = 3) => {
    let c = 0;
    const s = Y1(50, 250);
    return G1((d) => {
      const h = d.loaded,
        y = d.lengthComputable ? d.total : void 0,
        g = h - c,
        m = s(g),
        b = h <= y;
      c = h;
      const O = {
        loaded: h,
        total: y,
        progress: y ? h / y : void 0,
        bytes: g,
        rate: m || void 0,
        estimated: m && y && b ? (y - h) / m : void 0,
        event: d,
        lengthComputable: y != null,
        [i ? "download" : "upload"]: !0,
      };
      a(O);
    }, f);
  },
  Tm = (a, i) => {
    const f = a != null;
    return [(c) => i[0]({ lengthComputable: f, total: a, loaded: c }), i[1]];
  },
  Rm =
    (a) =>
    (...i) =>
      z.asap(() => a(...i)),
  X1 = Pe.hasStandardBrowserEnv
    ? ((a, i) => (f) => (
        (f = new URL(f, Pe.origin)),
        a.protocol === f.protocol &&
          a.host === f.host &&
          (i || a.port === f.port)
      ))(
        new URL(Pe.origin),
        Pe.navigator && /(msie|trident)/i.test(Pe.navigator.userAgent)
      )
    : () => !0,
  Q1 = Pe.hasStandardBrowserEnv
    ? {
        write(a, i, f, c, s, d) {
          const h = [a + "=" + encodeURIComponent(i)];
          z.isNumber(f) && h.push("expires=" + new Date(f).toGMTString()),
            z.isString(c) && h.push("path=" + c),
            z.isString(s) && h.push("domain=" + s),
            d === !0 && h.push("secure"),
            (document.cookie = h.join("; "));
        },
        read(a) {
          const i = document.cookie.match(
            new RegExp("(^|;\\s*)(" + a + ")=([^;]*)")
          );
          return i ? decodeURIComponent(i[3]) : null;
        },
        remove(a) {
          this.write(a, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function V1(a) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a);
}
function Z1(a, i) {
  return i ? a.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : a;
}
function Ey(a, i) {
  return a && !V1(i) ? Z1(a, i) : i;
}
const Om = (a) => (a instanceof it ? { ...a } : a);
function ml(a, i) {
  i = i || {};
  const f = {};
  function c(m, b, O, w) {
    return z.isPlainObject(m) && z.isPlainObject(b)
      ? z.merge.call({ caseless: w }, m, b)
      : z.isPlainObject(b)
      ? z.merge({}, b)
      : z.isArray(b)
      ? b.slice()
      : b;
  }
  function s(m, b, O, w) {
    if (z.isUndefined(b)) {
      if (!z.isUndefined(m)) return c(void 0, m, O, w);
    } else return c(m, b, O, w);
  }
  function d(m, b) {
    if (!z.isUndefined(b)) return c(void 0, b);
  }
  function h(m, b) {
    if (z.isUndefined(b)) {
      if (!z.isUndefined(m)) return c(void 0, m);
    } else return c(void 0, b);
  }
  function y(m, b, O) {
    if (O in i) return c(m, b);
    if (O in a) return c(void 0, m);
  }
  const g = {
    url: d,
    method: d,
    data: d,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    withXSRFToken: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: y,
    headers: (m, b, O) => s(Om(m), Om(b), O, !0),
  };
  return (
    z.forEach(Object.keys(Object.assign({}, a, i)), function (b) {
      const O = g[b] || s,
        w = O(a[b], i[b], b);
      (z.isUndefined(w) && O !== y) || (f[b] = w);
    }),
    f
  );
}
const Ty = (a) => {
    const i = ml({}, a);
    let {
      data: f,
      withXSRFToken: c,
      xsrfHeaderName: s,
      xsrfCookieName: d,
      headers: h,
      auth: y,
    } = i;
    (i.headers = h = it.from(h)),
      (i.url = py(Ey(i.baseURL, i.url), a.params, a.paramsSerializer)),
      y &&
        h.set(
          "Authorization",
          "Basic " +
            btoa(
              (y.username || "") +
                ":" +
                (y.password ? unescape(encodeURIComponent(y.password)) : "")
            )
        );
    let g;
    if (z.isFormData(f)) {
      if (Pe.hasStandardBrowserEnv || Pe.hasStandardBrowserWebWorkerEnv)
        h.setContentType(void 0);
      else if ((g = h.getContentType()) !== !1) {
        const [m, ...b] = g
          ? g
              .split(";")
              .map((O) => O.trim())
              .filter(Boolean)
          : [];
        h.setContentType([m || "multipart/form-data", ...b].join("; "));
      }
    }
    if (
      Pe.hasStandardBrowserEnv &&
      (c && z.isFunction(c) && (c = c(i)), c || (c !== !1 && X1(i.url)))
    ) {
      const m = s && d && Q1.read(d);
      m && h.set(s, m);
    }
    return i;
  },
  K1 = typeof XMLHttpRequest < "u",
  k1 =
    K1 &&
    function (a) {
      return new Promise(function (f, c) {
        const s = Ty(a);
        let d = s.data;
        const h = it.from(s.headers).normalize();
        let { responseType: y, onUploadProgress: g, onDownloadProgress: m } = s,
          b,
          O,
          w,
          C,
          R;
        function B() {
          C && C(),
            R && R(),
            s.cancelToken && s.cancelToken.unsubscribe(b),
            s.signal && s.signal.removeEventListener("abort", b);
        }
        let x = new XMLHttpRequest();
        x.open(s.method.toUpperCase(), s.url, !0), (x.timeout = s.timeout);
        function H() {
          if (!x) return;
          const L = it.from(
              "getAllResponseHeaders" in x && x.getAllResponseHeaders()
            ),
            Q = {
              data:
                !y || y === "text" || y === "json"
                  ? x.responseText
                  : x.response,
              status: x.status,
              statusText: x.statusText,
              headers: L,
              config: a,
              request: x,
            };
          Sy(
            function (fe) {
              f(fe), B();
            },
            function (fe) {
              c(fe), B();
            },
            Q
          ),
            (x = null);
        }
        "onloadend" in x
          ? (x.onloadend = H)
          : (x.onreadystatechange = function () {
              !x ||
                x.readyState !== 4 ||
                (x.status === 0 &&
                  !(x.responseURL && x.responseURL.indexOf("file:") === 0)) ||
                setTimeout(H);
            }),
          (x.onabort = function () {
            x &&
              (c(new ue("Request aborted", ue.ECONNABORTED, a, x)), (x = null));
          }),
          (x.onerror = function () {
            c(new ue("Network Error", ue.ERR_NETWORK, a, x)), (x = null);
          }),
          (x.ontimeout = function () {
            let K = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const Q = s.transitional || gy;
            s.timeoutErrorMessage && (K = s.timeoutErrorMessage),
              c(
                new ue(
                  K,
                  Q.clarifyTimeoutError ? ue.ETIMEDOUT : ue.ECONNABORTED,
                  a,
                  x
                )
              ),
              (x = null);
          }),
          d === void 0 && h.setContentType(null),
          "setRequestHeader" in x &&
            z.forEach(h.toJSON(), function (K, Q) {
              x.setRequestHeader(Q, K);
            }),
          z.isUndefined(s.withCredentials) ||
            (x.withCredentials = !!s.withCredentials),
          y && y !== "json" && (x.responseType = s.responseType),
          m && (([w, R] = Qi(m, !0)), x.addEventListener("progress", w)),
          g &&
            x.upload &&
            (([O, C] = Qi(g)),
            x.upload.addEventListener("progress", O),
            x.upload.addEventListener("loadend", C)),
          (s.cancelToken || s.signal) &&
            ((b = (L) => {
              x &&
                (c(!L || L.type ? new na(null, a, x) : L),
                x.abort(),
                (x = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(b),
            s.signal &&
              (s.signal.aborted ? b() : s.signal.addEventListener("abort", b)));
        const X = j1(s.url);
        if (X && Pe.protocols.indexOf(X) === -1) {
          c(new ue("Unsupported protocol " + X + ":", ue.ERR_BAD_REQUEST, a));
          return;
        }
        x.send(d || null);
      });
    },
  J1 = (a, i) => {
    const { length: f } = (a = a ? a.filter(Boolean) : []);
    if (i || f) {
      let c = new AbortController(),
        s;
      const d = function (m) {
        if (!s) {
          (s = !0), y();
          const b = m instanceof Error ? m : this.reason;
          c.abort(
            b instanceof ue ? b : new na(b instanceof Error ? b.message : b)
          );
        }
      };
      let h =
        i &&
        setTimeout(() => {
          (h = null), d(new ue(`timeout ${i} of ms exceeded`, ue.ETIMEDOUT));
        }, i);
      const y = () => {
        a &&
          (h && clearTimeout(h),
          (h = null),
          a.forEach((m) => {
            m.unsubscribe
              ? m.unsubscribe(d)
              : m.removeEventListener("abort", d);
          }),
          (a = null));
      };
      a.forEach((m) => m.addEventListener("abort", d));
      const { signal: g } = c;
      return (g.unsubscribe = () => z.asap(y)), g;
    }
  },
  $1 = function* (a, i) {
    let f = a.byteLength;
    if (f < i) {
      yield a;
      return;
    }
    let c = 0,
      s;
    for (; c < f; ) (s = c + i), yield a.slice(c, s), (c = s);
  },
  F1 = async function* (a, i) {
    for await (const f of W1(a)) yield* $1(f, i);
  },
  W1 = async function* (a) {
    if (a[Symbol.asyncIterator]) {
      yield* a;
      return;
    }
    const i = a.getReader();
    try {
      for (;;) {
        const { done: f, value: c } = await i.read();
        if (f) break;
        yield c;
      }
    } finally {
      await i.cancel();
    }
  },
  Am = (a, i, f, c) => {
    const s = F1(a, i);
    let d = 0,
      h,
      y = (g) => {
        h || ((h = !0), c && c(g));
      };
    return new ReadableStream(
      {
        async pull(g) {
          try {
            const { done: m, value: b } = await s.next();
            if (m) {
              y(), g.close();
              return;
            }
            let O = b.byteLength;
            if (f) {
              let w = (d += O);
              f(w);
            }
            g.enqueue(new Uint8Array(b));
          } catch (m) {
            throw (y(m), m);
          }
        },
        cancel(g) {
          return y(g), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  nr =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Ry = nr && typeof ReadableStream == "function",
  P1 =
    nr &&
    (typeof TextEncoder == "function"
      ? (
          (a) => (i) =>
            a.encode(i)
        )(new TextEncoder())
      : async (a) => new Uint8Array(await new Response(a).arrayBuffer())),
  Oy = (a, ...i) => {
    try {
      return !!a(...i);
    } catch {
      return !1;
    }
  },
  I1 =
    Ry &&
    Oy(() => {
      let a = !1;
      const i = new Request(Pe.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (a = !0), "half";
        },
      }).headers.has("Content-Type");
      return a && !i;
    }),
  _m = 64 * 1024,
  Qf = Ry && Oy(() => z.isReadableStream(new Response("").body)),
  Vi = { stream: Qf && ((a) => a.body) };
nr &&
  ((a) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
      !Vi[i] &&
        (Vi[i] = z.isFunction(a[i])
          ? (f) => f[i]()
          : (f, c) => {
              throw new ue(
                `Response type '${i}' is not supported`,
                ue.ERR_NOT_SUPPORT,
                c
              );
            });
    });
  })(new Response());
const eS = async (a) => {
    if (a == null) return 0;
    if (z.isBlob(a)) return a.size;
    if (z.isSpecCompliantForm(a))
      return (
        await new Request(Pe.origin, { method: "POST", body: a }).arrayBuffer()
      ).byteLength;
    if (z.isArrayBufferView(a) || z.isArrayBuffer(a)) return a.byteLength;
    if ((z.isURLSearchParams(a) && (a = a + ""), z.isString(a)))
      return (await P1(a)).byteLength;
  },
  tS = async (a, i) => {
    const f = z.toFiniteNumber(a.getContentLength());
    return f ?? eS(i);
  },
  nS =
    nr &&
    (async (a) => {
      let {
        url: i,
        method: f,
        data: c,
        signal: s,
        cancelToken: d,
        timeout: h,
        onDownloadProgress: y,
        onUploadProgress: g,
        responseType: m,
        headers: b,
        withCredentials: O = "same-origin",
        fetchOptions: w,
      } = Ty(a);
      m = m ? (m + "").toLowerCase() : "text";
      let C = J1([s, d && d.toAbortSignal()], h),
        R;
      const B =
        C &&
        C.unsubscribe &&
        (() => {
          C.unsubscribe();
        });
      let x;
      try {
        if (
          g &&
          I1 &&
          f !== "get" &&
          f !== "head" &&
          (x = await tS(b, c)) !== 0
        ) {
          let Q = new Request(i, { method: "POST", body: c, duplex: "half" }),
            te;
          if (
            (z.isFormData(c) &&
              (te = Q.headers.get("content-type")) &&
              b.setContentType(te),
            Q.body)
          ) {
            const [fe, de] = Tm(x, Qi(Rm(g)));
            c = Am(Q.body, _m, fe, de);
          }
        }
        z.isString(O) || (O = O ? "include" : "omit");
        const H = "credentials" in Request.prototype;
        R = new Request(i, {
          ...w,
          signal: C,
          method: f.toUpperCase(),
          headers: b.normalize().toJSON(),
          body: c,
          duplex: "half",
          credentials: H ? O : void 0,
        });
        let X = await fetch(R);
        const L = Qf && (m === "stream" || m === "response");
        if (Qf && (y || (L && B))) {
          const Q = {};
          ["status", "statusText", "headers"].forEach((Z) => {
            Q[Z] = X[Z];
          });
          const te = z.toFiniteNumber(X.headers.get("content-length")),
            [fe, de] = (y && Tm(te, Qi(Rm(y), !0))) || [];
          X = new Response(
            Am(X.body, _m, fe, () => {
              de && de(), B && B();
            }),
            Q
          );
        }
        m = m || "text";
        let K = await Vi[z.findKey(Vi, m) || "text"](X, a);
        return (
          !L && B && B(),
          await new Promise((Q, te) => {
            Sy(Q, te, {
              data: K,
              headers: it.from(X.headers),
              status: X.status,
              statusText: X.statusText,
              config: a,
              request: R,
            });
          })
        );
      } catch (H) {
        throw (
          (B && B(),
          H && H.name === "TypeError" && /fetch/i.test(H.message)
            ? Object.assign(new ue("Network Error", ue.ERR_NETWORK, a, R), {
                cause: H.cause || H,
              })
            : ue.from(H, H && H.code, a, R))
        );
      }
    }),
  Vf = { http: g1, xhr: k1, fetch: nS };
z.forEach(Vf, (a, i) => {
  if (a) {
    try {
      Object.defineProperty(a, "name", { value: i });
    } catch {}
    Object.defineProperty(a, "adapterName", { value: i });
  }
});
const wm = (a) => `- ${a}`,
  lS = (a) => z.isFunction(a) || a === null || a === !1,
  Ay = {
    getAdapter: (a) => {
      a = z.isArray(a) ? a : [a];
      const { length: i } = a;
      let f, c;
      const s = {};
      for (let d = 0; d < i; d++) {
        f = a[d];
        let h;
        if (
          ((c = f),
          !lS(f) && ((c = Vf[(h = String(f)).toLowerCase()]), c === void 0))
        )
          throw new ue(`Unknown adapter '${h}'`);
        if (c) break;
        s[h || "#" + d] = c;
      }
      if (!c) {
        const d = Object.entries(s).map(
          ([y, g]) =>
            `adapter ${y} ` +
            (g === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let h = i
          ? d.length > 1
            ? `since :
` +
              d.map(wm).join(`
`)
            : " " + wm(d[0])
          : "as no adapter specified";
        throw new ue(
          "There is no suitable adapter to dispatch the request " + h,
          "ERR_NOT_SUPPORT"
        );
      }
      return c;
    },
    adapters: Vf,
  };
function Nf(a) {
  if (
    (a.cancelToken && a.cancelToken.throwIfRequested(),
    a.signal && a.signal.aborted)
  )
    throw new na(null, a);
}
function xm(a) {
  return (
    Nf(a),
    (a.headers = it.from(a.headers)),
    (a.data = Cf.call(a, a.transformRequest)),
    ["post", "put", "patch"].indexOf(a.method) !== -1 &&
      a.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ay.getAdapter(a.adapter || yu.adapter)(a).then(
      function (c) {
        return (
          Nf(a),
          (c.data = Cf.call(a, a.transformResponse, c)),
          (c.headers = it.from(c.headers)),
          c
        );
      },
      function (c) {
        return (
          by(c) ||
            (Nf(a),
            c &&
              c.response &&
              ((c.response.data = Cf.call(a, a.transformResponse, c.response)),
              (c.response.headers = it.from(c.response.headers)))),
          Promise.reject(c)
        );
      }
    )
  );
}
const _y = "1.7.9",
  lr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (a, i) => {
    lr[a] = function (c) {
      return typeof c === a || "a" + (i < 1 ? "n " : " ") + a;
    };
  }
);
const Dm = {};
lr.transitional = function (i, f, c) {
  function s(d, h) {
    return (
      "[Axios v" +
      _y +
      "] Transitional option '" +
      d +
      "'" +
      h +
      (c ? ". " + c : "")
    );
  }
  return (d, h, y) => {
    if (i === !1)
      throw new ue(
        s(h, " has been removed" + (f ? " in " + f : "")),
        ue.ERR_DEPRECATED
      );
    return (
      f &&
        !Dm[h] &&
        ((Dm[h] = !0),
        console.warn(
          s(
            h,
            " has been deprecated since v" +
              f +
              " and will be removed in the near future"
          )
        )),
      i ? i(d, h, y) : !0
    );
  };
};
lr.spelling = function (i) {
  return (f, c) => (console.warn(`${c} is likely a misspelling of ${i}`), !0);
};
function aS(a, i, f) {
  if (typeof a != "object")
    throw new ue("options must be an object", ue.ERR_BAD_OPTION_VALUE);
  const c = Object.keys(a);
  let s = c.length;
  for (; s-- > 0; ) {
    const d = c[s],
      h = i[d];
    if (h) {
      const y = a[d],
        g = y === void 0 || h(y, d, a);
      if (g !== !0)
        throw new ue("option " + d + " must be " + g, ue.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (f !== !0) throw new ue("Unknown option " + d, ue.ERR_BAD_OPTION);
  }
}
const Bi = { assertOptions: aS, validators: lr },
  Qt = Bi.validators;
let ol = class {
  constructor(i) {
    (this.defaults = i),
      (this.interceptors = { request: new Sm(), response: new Sm() });
  }
  async request(i, f) {
    try {
      return await this._request(i, f);
    } catch (c) {
      if (c instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const d = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          c.stack
            ? d &&
              !String(c.stack).endsWith(d.replace(/^.+\n.+\n/, "")) &&
              (c.stack +=
                `
` + d)
            : (c.stack = d);
        } catch {}
      }
      throw c;
    }
  }
  _request(i, f) {
    typeof i == "string" ? ((f = f || {}), (f.url = i)) : (f = i || {}),
      (f = ml(this.defaults, f));
    const { transitional: c, paramsSerializer: s, headers: d } = f;
    c !== void 0 &&
      Bi.assertOptions(
        c,
        {
          silentJSONParsing: Qt.transitional(Qt.boolean),
          forcedJSONParsing: Qt.transitional(Qt.boolean),
          clarifyTimeoutError: Qt.transitional(Qt.boolean),
        },
        !1
      ),
      s != null &&
        (z.isFunction(s)
          ? (f.paramsSerializer = { serialize: s })
          : Bi.assertOptions(
              s,
              { encode: Qt.function, serialize: Qt.function },
              !0
            )),
      Bi.assertOptions(
        f,
        {
          baseUrl: Qt.spelling("baseURL"),
          withXsrfToken: Qt.spelling("withXSRFToken"),
        },
        !0
      ),
      (f.method = (f.method || this.defaults.method || "get").toLowerCase());
    let h = d && z.merge(d.common, d[f.method]);
    d &&
      z.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (R) => {
          delete d[R];
        }
      ),
      (f.headers = it.concat(h, d));
    const y = [];
    let g = !0;
    this.interceptors.request.forEach(function (B) {
      (typeof B.runWhen == "function" && B.runWhen(f) === !1) ||
        ((g = g && B.synchronous), y.unshift(B.fulfilled, B.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function (B) {
      m.push(B.fulfilled, B.rejected);
    });
    let b,
      O = 0,
      w;
    if (!g) {
      const R = [xm.bind(this), void 0];
      for (
        R.unshift.apply(R, y),
          R.push.apply(R, m),
          w = R.length,
          b = Promise.resolve(f);
        O < w;

      )
        b = b.then(R[O++], R[O++]);
      return b;
    }
    w = y.length;
    let C = f;
    for (O = 0; O < w; ) {
      const R = y[O++],
        B = y[O++];
      try {
        C = R(C);
      } catch (x) {
        B.call(this, x);
        break;
      }
    }
    try {
      b = xm.call(this, C);
    } catch (R) {
      return Promise.reject(R);
    }
    for (O = 0, w = m.length; O < w; ) b = b.then(m[O++], m[O++]);
    return b;
  }
  getUri(i) {
    i = ml(this.defaults, i);
    const f = Ey(i.baseURL, i.url);
    return py(f, i.params, i.paramsSerializer);
  }
};
z.forEach(["delete", "get", "head", "options"], function (i) {
  ol.prototype[i] = function (f, c) {
    return this.request(
      ml(c || {}, { method: i, url: f, data: (c || {}).data })
    );
  };
});
z.forEach(["post", "put", "patch"], function (i) {
  function f(c) {
    return function (d, h, y) {
      return this.request(
        ml(y || {}, {
          method: i,
          headers: c ? { "Content-Type": "multipart/form-data" } : {},
          url: d,
          data: h,
        })
      );
    };
  }
  (ol.prototype[i] = f()), (ol.prototype[i + "Form"] = f(!0));
});
let uS = class wy {
  constructor(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    let f;
    this.promise = new Promise(function (d) {
      f = d;
    });
    const c = this;
    this.promise.then((s) => {
      if (!c._listeners) return;
      let d = c._listeners.length;
      for (; d-- > 0; ) c._listeners[d](s);
      c._listeners = null;
    }),
      (this.promise.then = (s) => {
        let d;
        const h = new Promise((y) => {
          c.subscribe(y), (d = y);
        }).then(s);
        return (
          (h.cancel = function () {
            c.unsubscribe(d);
          }),
          h
        );
      }),
      i(function (d, h, y) {
        c.reason || ((c.reason = new na(d, h, y)), f(c.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : (this._listeners = [i]);
  }
  unsubscribe(i) {
    if (!this._listeners) return;
    const f = this._listeners.indexOf(i);
    f !== -1 && this._listeners.splice(f, 1);
  }
  toAbortSignal() {
    const i = new AbortController(),
      f = (c) => {
        i.abort(c);
      };
    return (
      this.subscribe(f),
      (i.signal.unsubscribe = () => this.unsubscribe(f)),
      i.signal
    );
  }
  static source() {
    let i;
    return {
      token: new wy(function (s) {
        i = s;
      }),
      cancel: i,
    };
  }
};
function iS(a) {
  return function (f) {
    return a.apply(null, f);
  };
}
function rS(a) {
  return z.isObject(a) && a.isAxiosError === !0;
}
const Zf = {
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
Object.entries(Zf).forEach(([a, i]) => {
  Zf[i] = a;
});
function xy(a) {
  const i = new ol(a),
    f = ay(ol.prototype.request, i);
  return (
    z.extend(f, ol.prototype, i, { allOwnKeys: !0 }),
    z.extend(f, i, null, { allOwnKeys: !0 }),
    (f.create = function (s) {
      return xy(ml(a, s));
    }),
    f
  );
}
const De = xy(yu);
De.Axios = ol;
De.CanceledError = na;
De.CancelToken = uS;
De.isCancel = by;
De.VERSION = _y;
De.toFormData = tr;
De.AxiosError = ue;
De.Cancel = De.CanceledError;
De.all = function (i) {
  return Promise.all(i);
};
De.spread = iS;
De.isAxiosError = rS;
De.mergeConfig = ml;
De.AxiosHeaders = it;
De.formToJSON = (a) => vy(z.isHTMLForm(a) ? new FormData(a) : a);
De.getAdapter = Ay.getAdapter;
De.HttpStatusCode = Zf;
De.default = De;
const {
    Axios: vS,
    AxiosError: bS,
    CanceledError: SS,
    isCancel: ES,
    CancelToken: TS,
    VERSION: RS,
    all: OS,
    Cancel: AS,
    isAxiosError: _S,
    spread: wS,
    toFormData: xS,
    AxiosHeaders: DS,
    HttpStatusCode: CS,
    formToJSON: NS,
    getAdapter: zS,
    mergeConfig: MS,
  } = De,
  ls = "/orders",
  cS = async (a) => {
    try {
      return (
        await De.post(ls, a, {
          headers: { "Content-Type": "application/json" },
        })
      ).data;
    } catch (i) {
      throw (console.error("Lỗi khi gửi đơn hàng:", i), i);
    }
  },
  as = async () => {
    try {
      return (await De.get(ls)).data;
    } catch (a) {
      throw (console.error("Lỗi khi lấy danh sách đơn hàng:", a), a);
    }
  },
  us = async (a, i) => {
    console.log("orderId", a);
    try {
      return (await De.patch(`${ls}/${a}`, { status: i })).data;
    } catch (f) {
      throw (console.error(`Lỗi khi cập nhật trạng thái đơn hàng ${a}:`, f), f);
    }
  };
function fS({ resetHome: a, cusname: i, cusphone: f }) {
  const [c, s] = N.useState({}),
    [d, h] = N.useState(""),
    [y, g] = N.useState(!1),
    m = [ {
    id: 1,
    name: "Cà phê đen",
    description: "Cà phê đen đậm đà",
    image: "https://www.sugartown.vn/upload/sanpham/1201-16530156771.png",
  },
  {
    id: 2,
    name: "Cà phê sữa",
    description: "Cà phê sữa thơm ngon",
    image: "https://maisonmarou.com/wp-content/uploads/2023/09/caphe-sua.jpg",
  },
  {
    id: 3,
    name: "Bạc xỉu",
    description: "Cà phê sữa đá nhẹ",
    image: "https://image.winci.com.vn/wp-content/uploads/2023/12/Cach-pha-ca-phe-bac-xiu-cho-nguoi-moi-bat-dau.jpg",
  },
  {
    id: 4,
    name: "Caramel Latte Coffee",
    description: "Cà phê latte caramel béo ngậy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXH0dTGk7aQoPXrtbN8XhXVwn2Uxz0a2J-A&s",
  },
  {
    id: 5,
    name: "Matcha Latte",
    description: "Matcha latte thơm ngon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTvygTlgRCcKFSKBD4cUr7uRGbsZd345z-7g&s",
  },
  {
    id: 6,
    name: "Trà sữa Thái",
    description: "Trà sữa Thái ngọt béo",
    image: "https://barona.vn/storage/meo-vat/182/cach-lam-tra-sua-thai-xanh.jpg",
  },
  {
    id: 7,
    name: "Trà gừng nóng",
    description: "Trà gừng ấm áp",
    image: "/tra-gung.jpg",
  },
  {
    id: 8,
    name: "Trà xanh Nhật",
    description: "Trà xanh Nhật thanh mát",
    image: "/tra-xanh-nhat.jpg",
  },
  {
    id: 9,
    name: "Cacao Latte",
    description: "Cacao latte thơm béo",
    image: "/cacao-latte.jpg",
  },
  {
    id: 10,
    name: "Cacao sữa",
    description: "Cacao sữa đậm đà",
    image: "/cacao-sua.jpg",
  },
  {
    id: 11,
    name: "Cacao nóng",
    description: "Cacao nóng thơm ngon",
    image: "/cacao-nong.jpg",
  }
]
,
    b = (C) => {
      s((R) => ({ ...R, [C]: (R[C] || 0) + 1 }));
    },
    O = (C) => {
      s((R) => {
        if (!R[C]) return R;
        const B = { ...R };
        return B[C]--, B[C] === 0 && delete B[C], B;
      });
    },
    w = async () => {
      if (d !== "ghjk") {
        alert("Mã nhân viên không đúng!");
        return;
      }
      const C = {
        customer: i,
        phone: f,
        items: Object.keys(c).map((R) => ({
          id: Number(R),
          name: m.find((B) => B.id === Number(R)).name,
          quantity: c[R],
        })),
        time: new Date().toISOString(),
        status: "pending",
      };
      try {
        g(!0);
        const R = await cS(C);
        alert("Đơn hàng đã được gửi thành công!"),
          console.log("Server response:", R),
          s({}),
          h(""),
          a();
      } catch {
        alert("Gửi đơn hàng thất bại, vui lòng thử lại!");
      } finally {
        g(!1);
      }
    };
  return Y.createElement(
    "div",
    { className: "h-screen flex flex-col p-6 bg-[#f3ebe1]" },
    Y.createElement(
      "h2",
      { className: "text-2xl font-bold text-[#6b4f4f] mb-4" },
      "Chọn nước"
    ),
    Y.createElement(
      "div",
      { className: "flex-1 overflow-y-auto" },
      m.map((C) =>
        Y.createElement(Nb, {
          key: C.id,
          drink: C,
          quantity: c[C.id] || 0,
          onIncrease: b,
          onDecrease: O,
        })
      )
    ),
    Object.keys(c).length > 0 &&
      Y.createElement(
        "div",
        { className: "mt-4" },
        Y.createElement(
          "label",
          { className: "block text-[#6b4f4f] font-semibold" },
          "Mã nhân viên *"
        ),
        Y.createElement("input", {
          type: "text",
          className: "w-full p-2 border rounded-lg",
          value: d,
          onChange: (C) => h(C.target.value),
          required: !0,
        })
      ),
    Y.createElement(
      "button",
      {
        className:
          "mt-6 w-full bg-[#6b4f4f] text-white text-lg py-3 rounded-lg disabled:bg-gray-400",
        onClick: w,
        disabled: y || Object.keys(c).length === 0,
      },
      y ? "Đang gửi..." : "Xác nhận đơn"
    ),
    Y.createElement(
      "button",
      {
        className: "mt-3 w-full bg-gray-500 text-white text-lg py-3 rounded-lg",
        onClick: a,
      },
      "Quay lại trang chủ"
    )
  );
}
function sS() {
  const [a, i] = N.useState(null),
    [f, c] = N.useState(""),
    [s, d] = N.useState(""),
    [h, y] = N.useState(!1),
    g = () => {
      i(null), c(""), d(""), y(!1);
    },
    m = du(),
    b = () => {
      m("/order");
    },
    O = () => {
      m("/order/fn");
    },
    w = () => {
      m("/order/cancel");
    };
  return Y.createElement(
    Y.Fragment,
    null,
    !a &&
      Y.createElement(
        "div",
        {
          className:
            "h-screen flex flex-col justify-center items-center bg-[#f3ebe1] space-y-8",
        },
        Y.createElement(
          "h1",
          { className: "text-3xl font-bold text-[#6b4f4f] mb-8 tracking-wide" },
          "Aroma Café"
        ),
        Y.createElement(
          "div",
          { className: "flex gap-6" },
          Y.createElement(
            "button",
            {
              className:
                "px-8 py-4 bg-[#bfa38f] text-[#3d2b2b] text-lg rounded-lg shadow-md active:scale-95 transition",
              onClick: () => i("quen"),
            },
            "Quen"
          ),
          Y.createElement(
            "button",
            {
              className:
                "px-8 py-4 bg-[#d9c5b2] text-[#3d2b2b] text-lg rounded-lg shadow-md active:scale-95 transition",
              onClick: () => {
                i("la"), y(!0);
              },
            },
            "Lạ"
          )
        ),
        Y.createElement(
          "button",
          {
            className:
              "px-8 py-4 bg-[#d9c5b2] text-[#3d2b2b] text-lg rounded-lg shadow-md active:scale-95 transition",
            onClick: b,
          },
          "Đơn đang chờ"
        ),
        Y.createElement(
          "button",
          {
            className:
              "px-8 py-4 bg-[#d9c5b2] text-[#3d2b2b] text-lg rounded-lg shadow-md active:scale-95 transition",
            onClick: O,
          },
          "Đơn đã hoàn thành"
        ),
        Y.createElement(
          "button",
          {
            className:
              "px-8 py-4 bg-[#d9c5b2] text-[#3d2b2b] text-lg rounded-lg shadow-md active:scale-95 transition",
            onClick: w,
          },
          "Đơn hủy"
        )
      ),
    a === "quen" &&
      !h &&
      Y.createElement(
        "div",
        {
          className:
            "h-screen flex flex-col justify-center items-center bg-[#f3ebe1]",
        },
        Y.createElement(
          "h1",
          { className: "text-2xl font-bold text-[#6b4f4f] mb-6" },
          "Nhập thông tin của bạn"
        ),
        Y.createElement(
          "div",
          { className: "w-80" },
          Y.createElement(
            "label",
            { className: "block text-[#6b4f4f] font-semibold" },
            "Tên *"
          ),
          Y.createElement("input", {
            type: "text",
            className: "w-full p-2 border rounded-lg",
            value: f,
            onChange: (C) => c(C.target.value),
            required: !0,
          }),
          Y.createElement(
            "label",
            { className: "block mt-3 text-[#6b4f4f] font-semibold" },
            "Số điện thoại"
          ),
          Y.createElement("input", {
            type: "tel",
            className: "w-full p-2 border rounded-lg",
            value: s,
            onChange: (C) => d(C.target.value),
          }),
          Y.createElement(
            "button",
            {
              className:
                "mt-6 w-full bg-[#6b4f4f] text-white text-lg py-3 rounded-lg",
              onClick: () => {
                if (!f.trim()) {
                  alert("Vui lòng nhập tên!");
                  return;
                }
                y(!0);
              },
            },
            "Xác nhận"
          ),
          Y.createElement(
            "button",
            {
              className:
                "mt-3 w-full bg-gray-500 text-white text-lg py-3 rounded-lg",
              onClick: g,
            },
            "Quay lại trang chủ"
          )
        )
      ),
    h && Y.createElement(fS, { resetHome: g, cusname: f, cusphone: s })
  );
}
function oS() {
  const [a, i] = N.useState([]),
    [f, c] = N.useState(!0),
    s = du();
  N.useEffect(() => {
    d();
  }, []);
  const d = async () => {
      try {
        c(!0);
        const g = (await as()).filter((m) => m.status === "pending");
        i(g);
      } catch (y) {
        console.error("Lỗi khi lấy danh sách đơn hàng:", y);
      } finally {
        c(!1);
      }
    },
    h = async (y, g) => {
      const m =
        g === "finished"
          ? "Bạn có chắc chắn muốn hoàn thành đơn này?"
          : "Bạn có chắc chắn muốn hủy đơn này?";
      if (window.confirm(m))
        try {
          await us(y, g),
            alert(`Đã cập nhật trạng thái đơn hàng thành "${g}"`),
            d();
        } catch {
          alert("Có lỗi xảy ra, vui lòng thử lại!");
        }
    };
  return Y.createElement(
    "div",
    { className: "h-screen p-6 bg-[#f3ebe1] flex flex-col" },
    Y.createElement(
      "h2",
      { className: "text-2xl font-bold text-[#6b4f4f] mb-4" },
      "Danh sách đơn hàng"
    ),
    f
      ? Y.createElement("p", null, "Đang tải...")
      : Y.createElement(
          "div",
          { className: "flex-1 overflow-y-auto" },
          a.length === 0
            ? Y.createElement("p", null, "Không có đơn hàng nào.")
            : a.map((y, g) =>
                Y.createElement(
                  "div",
                  {
                    key: g,
                    className: "p-4 bg-white rounded-lg shadow-md mb-4",
                  },
                  Y.createElement(
                    "h3",
                    { className: "text-lg font-semibold" },
                    y.customer ? y.customer : "Khách lạ"
                  ),
                  y.phone &&
                    Y.createElement(
                      "p",
                      { className: "text-gray-500" },
                      "📞 ",
                      y.phone
                    ),
                  Y.createElement(
                    "p",
                    { className: "text-sm text-gray-500" },
                    "🕒 ",
                    new Date(y.time).toLocaleString()
                  ),
                  Y.createElement(
                    "p",
                    {
                      className: `mt-2 font-bold ${
                        y.status === "pending"
                          ? "text-yellow-500"
                          : y.status === "finished"
                          ? "text-green-600"
                          : "text-red-500"
                      }`,
                    },
                    "Trạng thái: ",
                    y.status
                  ),
                  Y.createElement(
                    "ul",
                    { className: "mt-3" },
                    y.items.map((m) =>
                      Y.createElement(
                        "li",
                        { key: m.id, className: "text-gray-700" },
                        "🥤 ",
                        m.name,
                        " - x",
                        m.quantity
                      )
                    )
                  ),
                  y.status === "pending" &&
                    Y.createElement(
                      "div",
                      { className: "flex gap-2 mt-4" },
                      Y.createElement(
                        "button",
                        {
                          className:
                            "px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600",
                          onClick: () => h(y.id, "finished"),
                        },
                        "Hoàn thành"
                      ),
                      Y.createElement(
                        "button",
                        {
                          className:
                            "px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600",
                          onClick: () => h(y.id, "canceled"),
                        },
                        "Hủy"
                      )
                    )
                )
              )
        ),
    Y.createElement(
      "button",
      {
        className: "mt-6 w-full bg-gray-500 text-white text-lg py-3 rounded-lg",
        onClick: () => s("/"),
      },
      "Quay lại trang chủ"
    )
  );
}
function dS() {
  const [a, i] = N.useState([]),
    [f, c] = N.useState(!0),
    s = du();
  N.useEffect(() => {
    d();
  }, []);
  const d = async () => {
      try {
        c(!0);
        const g = (await as()).filter((m) => m.status === "finished");
        i(g);
      } catch (y) {
        console.error("Lỗi khi lấy danh sách đơn hàng:", y);
      } finally {
        c(!1);
      }
    },
    h = async (y, g) => {
      const m =
        g === "finished"
          ? "Bạn có chắc chắn muốn hoàn thành đơn này?"
          : "Bạn có chắc chắn muốn hủy đơn này?";
      if (window.confirm(m))
        try {
          await us(y, g),
            alert(`Đã cập nhật trạng thái đơn hàng thành "${g}"`),
            d();
        } catch {
          alert("Có lỗi xảy ra, vui lòng thử lại!");
        }
    };
  return Y.createElement(
    "div",
    { className: "h-screen p-6 bg-[#f3ebe1] flex flex-col" },
    Y.createElement(
      "h2",
      { className: "text-2xl font-bold text-[#6b4f4f] mb-4" },
      "Danh sách đơn hàng"
    ),
    f
      ? Y.createElement("p", null, "Đang tải...")
      : Y.createElement(
          "div",
          { className: "flex-1 overflow-y-auto" },
          a.length === 0
            ? Y.createElement("p", null, "Không có đơn hàng nào.")
            : a.map((y, g) =>
                Y.createElement(
                  "div",
                  {
                    key: g,
                    className: "p-4 bg-white rounded-lg shadow-md mb-4",
                  },
                  Y.createElement(
                    "h3",
                    { className: "text-lg font-semibold" },
                    y.customer ? y.customer : "Khách lạ"
                  ),
                  y.phone &&
                    Y.createElement(
                      "p",
                      { className: "text-gray-500" },
                      "📞 ",
                      y.phone
                    ),
                  Y.createElement(
                    "p",
                    { className: "text-sm text-gray-500" },
                    "🕒 ",
                    new Date(y.time).toLocaleString()
                  ),
                  Y.createElement(
                    "p",
                    {
                      className: `mt-2 font-bold ${
                        y.status === "pending"
                          ? "text-yellow-500"
                          : y.status === "finished"
                          ? "text-green-600"
                          : "text-red-500"
                      }`,
                    },
                    "Trạng thái: ",
                    y.status
                  ),
                  Y.createElement(
                    "ul",
                    { className: "mt-3" },
                    y.items.map((m) =>
                      Y.createElement(
                        "li",
                        { key: m.id, className: "text-gray-700" },
                        "🥤 ",
                        m.name,
                        " - x",
                        m.quantity
                      )
                    )
                  ),
                  y.status === "pending" &&
                    Y.createElement(
                      "div",
                      { className: "flex gap-2 mt-4" },
                      Y.createElement(
                        "button",
                        {
                          className:
                            "px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600",
                          onClick: () => h(y.id, "finished"),
                        },
                        "Hoàn thành"
                      ),
                      Y.createElement(
                        "button",
                        {
                          className:
                            "px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600",
                          onClick: () => h(y.id, "canceled"),
                        },
                        "Hủy"
                      )
                    )
                )
              )
        ),
    Y.createElement(
      "button",
      {
        className: "mt-6 w-full bg-gray-500 text-white text-lg py-3 rounded-lg",
        onClick: () => s("/"),
      },
      "Quay lại trang chủ"
    )
  );
}
function hS() {
  const [a, i] = N.useState([]),
    [f, c] = N.useState(!0),
    s = du();
  N.useEffect(() => {
    d();
  }, []);
  const d = async () => {
      try {
        c(!0);
        const g = (await as()).filter((m) => m.status === "canceled");
        i(g);
      } catch (y) {
        console.error("Lỗi khi lấy danh sách đơn hàng:", y);
      } finally {
        c(!1);
      }
    },
    h = async (y, g) => {
      const m =
        g === "finished"
          ? "Bạn có chắc chắn muốn hoàn thành đơn này?"
          : "Bạn có chắc chắn muốn hủy đơn này?";
      if (window.confirm(m))
        try {
          await us(y, g),
            alert(`Đã cập nhật trạng thái đơn hàng thành "${g}"`),
            d();
        } catch {
          alert("Có lỗi xảy ra, vui lòng thử lại!");
        }
    };
  return Y.createElement(
    "div",
    { className: "h-screen p-6 bg-[#f3ebe1] flex flex-col" },
    Y.createElement(
      "h2",
      { className: "text-2xl font-bold text-[#6b4f4f] mb-4" },
      "Danh sách đơn hàng"
    ),
    f
      ? Y.createElement("p", null, "Đang tải...")
      : Y.createElement(
          "div",
          { className: "flex-1 overflow-y-auto" },
          a.length === 0
            ? Y.createElement("p", null, "Không có đơn hàng nào.")
            : a.map((y, g) =>
                Y.createElement(
                  "div",
                  {
                    key: g,
                    className: "p-4 bg-white rounded-lg shadow-md mb-4",
                  },
                  Y.createElement(
                    "h3",
                    { className: "text-lg font-semibold" },
                    y.customer ? y.customer : "Khách lạ"
                  ),
                  y.phone &&
                    Y.createElement(
                      "p",
                      { className: "text-gray-500" },
                      "📞 ",
                      y.phone
                    ),
                  Y.createElement(
                    "p",
                    { className: "text-sm text-gray-500" },
                    "🕒 ",
                    new Date(y.time).toLocaleString()
                  ),
                  Y.createElement(
                    "p",
                    {
                      className: `mt-2 font-bold ${
                        y.status === "pending"
                          ? "text-yellow-500"
                          : y.status === "finished"
                          ? "text-green-600"
                          : "text-red-500"
                      }`,
                    },
                    "Trạng thái: ",
                    y.status
                  ),
                  Y.createElement(
                    "ul",
                    { className: "mt-3" },
                    y.items.map((m) =>
                      Y.createElement(
                        "li",
                        { key: m.id, className: "text-gray-700" },
                        "🥤 ",
                        m.name,
                        " - x",
                        m.quantity
                      )
                    )
                  ),
                  y.status === "pending" &&
                    Y.createElement(
                      "div",
                      { className: "flex gap-2 mt-4" },
                      Y.createElement(
                        "button",
                        {
                          className:
                            "px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600",
                          onClick: () => h(y.id, "finished"),
                        },
                        "Hoàn thành"
                      ),
                      Y.createElement(
                        "button",
                        {
                          className:
                            "px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600",
                          onClick: () => h(y.id, "canceled"),
                        },
                        "Hủy"
                      )
                    )
                )
              )
        ),
    Y.createElement(
      "button",
      {
        className: "mt-6 w-full bg-gray-500 text-white text-lg py-3 rounded-lg",
        onClick: () => s("/"),
      },
      "Quay lại trang chủ"
    )
  );
}
const mS = () =>
    Y.createElement(
      "div",
      null,
      Y.createElement(
        $g,
        null,
        Y.createElement(au, { path: "/", element: Y.createElement(sS, null) }),
        Y.createElement(au, {
          path: "/order",
          element: Y.createElement(oS, null),
        }),
        Y.createElement(au, {
          path: "/order/fn",
          element: Y.createElement(dS, null),
        }),
        Y.createElement(au, {
          path: "/order/cancel",
          element: Y.createElement(hS, null),
        })
      )
    ),
  yS = ug.createRoot(document.getElementById("root"));
yS.render(
  Y.createElement(
    Qv,
    { store: Cb },
    Y.createElement(bv, null, Y.createElement(mS, null))
  )
);
