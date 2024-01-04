import require$$0, { forwardRef, useCallback, Fragment, useEffect, useRef, useState, Children } from "react";
import { createPortal, render as render$1 } from "react-dom";
var jsxRuntime = { exports: {} }, reactJsxRuntime_development = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  return hasRequiredReactJsxRuntime_development || (hasRequiredReactJsxRuntime_development = 1, process.env.NODE_ENV !== "production" && function() {
    var e = require$$0, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), f = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), I = Symbol.iterator, g = "@@iterator";
    function y(o) {
      if (o === null || typeof o != "object")
        return null;
      var x = I && o[I] || o[g];
      return typeof x == "function" ? x : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(o) {
      {
        for (var x = arguments.length, b = new Array(x > 1 ? x - 1 : 0), M = 1; M < x; M++)
          b[M - 1] = arguments[M];
        $("error", o, b);
      }
    }
    function $(o, x, b) {
      {
        var M = E.ReactDebugCurrentFrame, B = M.getStackAddendum();
        B !== "" && (x += "%s", b = b.concat([B]));
        var U = b.map(function(L) {
          return String(L);
        });
        U.unshift("Warning: " + x), Function.prototype.apply.call(console[o], console, U);
      }
    }
    var D = !1, V = !1, Y = !1, w = !1, O = !1, H;
    H = Symbol.for("react.module.reference");
    function R(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === s || O || o === c || o === h || o === l || w || o === d || D || V || Y || typeof o == "object" && o !== null && (o.$$typeof === m || o.$$typeof === a || o.$$typeof === i || o.$$typeof === f || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === H || o.getModuleId !== void 0));
    }
    function k(o, x, b) {
      var M = o.displayName;
      if (M)
        return M;
      var B = x.displayName || x.name || "";
      return B !== "" ? b + "(" + B + ")" : b;
    }
    function z(o) {
      return o.displayName || "Context";
    }
    function F(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case c:
          return "StrictMode";
        case h:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case f:
            var x = o;
            return z(x) + ".Consumer";
          case i:
            var b = o;
            return z(b._context) + ".Provider";
          case u:
            return k(o, o.render, "ForwardRef");
          case a:
            var M = o.displayName || null;
            return M !== null ? M : F(o.type) || "Memo";
          case m: {
            var B = o, U = B._payload, L = B._init;
            try {
              return F(L(U));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, W = 0, Z, C, P, _, S, N, J;
    function T() {
    }
    T.__reactDisabledLog = !0;
    function G() {
      {
        if (W === 0) {
          Z = console.log, C = console.info, P = console.warn, _ = console.error, S = console.group, N = console.groupCollapsed, J = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: T,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        W++;
      }
    }
    function te() {
      {
        if (W--, W === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, o, {
              value: Z
            }),
            info: q({}, o, {
              value: C
            }),
            warn: q({}, o, {
              value: P
            }),
            error: q({}, o, {
              value: _
            }),
            group: q({}, o, {
              value: S
            }),
            groupCollapsed: q({}, o, {
              value: N
            }),
            groupEnd: q({}, o, {
              value: J
            })
          });
        }
        W < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = E.ReactCurrentDispatcher, ie;
    function ce(o, x, b) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (B) {
            var M = B.stack.trim().match(/\n( *(at )?)/);
            ie = M && M[1] || "";
          }
        return `
` + ie + o;
      }
    }
    var he = !1, ae;
    {
      var v = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new v();
    }
    function j(o, x) {
      if (!o || he)
        return "";
      {
        var b = ae.get(o);
        if (b !== void 0)
          return b;
      }
      var M;
      he = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var U;
      U = ne.current, ne.current = null, G();
      try {
        if (x) {
          var L = function() {
            throw Error();
          };
          if (Object.defineProperty(L.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(L, []);
            } catch (le) {
              M = le;
            }
            Reflect.construct(o, [], L);
          } else {
            try {
              L.call();
            } catch (le) {
              M = le;
            }
            o.call(L.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (le) {
            M = le;
          }
          o();
        }
      } catch (le) {
        if (le && M && typeof le.stack == "string") {
          for (var A = le.stack.split(`
`), ee = M.stack.split(`
`), X = A.length - 1, K = ee.length - 1; X >= 1 && K >= 0 && A[X] !== ee[K]; )
            K--;
          for (; X >= 1 && K >= 0; X--, K--)
            if (A[X] !== ee[K]) {
              if (X !== 1 || K !== 1)
                do
                  if (X--, K--, K < 0 || A[X] !== ee[K]) {
                    var re = `
` + A[X].replace(" at new ", " at ");
                    return o.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", o.displayName)), typeof o == "function" && ae.set(o, re), re;
                  }
                while (X >= 1 && K >= 0);
              break;
            }
        }
      } finally {
        he = !1, ne.current = U, te(), Error.prepareStackTrace = B;
      }
      var de = o ? o.displayName || o.name : "", ke = de ? ce(de) : "";
      return typeof o == "function" && ae.set(o, ke), ke;
    }
    function Q(o, x, b) {
      return j(o, !1);
    }
    function oe(o) {
      var x = o.prototype;
      return !!(x && x.isReactComponent);
    }
    function se(o, x, b) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return j(o, oe(o));
      if (typeof o == "string")
        return ce(o);
      switch (o) {
        case h:
          return ce("Suspense");
        case l:
          return ce("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            return Q(o.render);
          case a:
            return se(o.type, x, b);
          case m: {
            var M = o, B = M._payload, U = M._init;
            try {
              return se(U(B), x, b);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, ve = {}, ye = E.ReactDebugCurrentFrame;
    function pe(o) {
      if (o) {
        var x = o._owner, b = se(o.type, o._source, x ? x.type : null);
        ye.setExtraStackFrame(b);
      } else
        ye.setExtraStackFrame(null);
    }
    function Ae(o, x, b, M, B) {
      {
        var U = Function.call.bind(me);
        for (var L in o)
          if (U(o, L)) {
            var A = void 0;
            try {
              if (typeof o[L] != "function") {
                var ee = Error((M || "React class") + ": " + b + " type `" + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[L] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ee.name = "Invariant Violation", ee;
              }
              A = o[L](x, L, M, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              A = X;
            }
            A && !(A instanceof Error) && (pe(B), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", M || "React class", b, L, typeof A), pe(null)), A instanceof Error && !(A.message in ve) && (ve[A.message] = !0, pe(B), p("Failed %s type: %s", b, A.message), pe(null));
          }
      }
    }
    var Ve = Array.isArray;
    function xe(o) {
      return Ve(o);
    }
    function Le(o) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, b = x && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return b;
      }
    }
    function De(o) {
      try {
        return we(o), !1;
      } catch {
        return !0;
      }
    }
    function we(o) {
      return "" + o;
    }
    function Ee(o) {
      if (De(o))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Le(o)), we(o);
    }
    var fe = E.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Re, ge;
    ge = {};
    function Fe(o) {
      if (me.call(o, "ref")) {
        var x = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Ne(o) {
      if (me.call(o, "key")) {
        var x = Object.getOwnPropertyDescriptor(o, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Be(o, x) {
      if (typeof o.ref == "string" && fe.current && x && fe.current.stateNode !== x) {
        var b = F(fe.current.type);
        ge[b] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(fe.current.type), o.ref), ge[b] = !0);
      }
    }
    function Pe(o, x) {
      {
        var b = function() {
          Ce || (Ce = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        b.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function Oe(o, x) {
      {
        var b = function() {
          Re || (Re = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        b.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var Ge = function(o, x, b, M, B, U, L) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: x,
        ref: b,
        props: L,
        // Record the component responsible for creating this element.
        _owner: U
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function Ue(o, x, b, M, B) {
      {
        var U, L = {}, A = null, ee = null;
        b !== void 0 && (Ee(b), A = "" + b), Ne(x) && (Ee(x.key), A = "" + x.key), Fe(x) && (ee = x.ref, Be(x, B));
        for (U in x)
          me.call(x, U) && !He.hasOwnProperty(U) && (L[U] = x[U]);
        if (o && o.defaultProps) {
          var X = o.defaultProps;
          for (U in X)
            L[U] === void 0 && (L[U] = X[U]);
        }
        if (A || ee) {
          var K = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          A && Pe(L, K), ee && Oe(L, K);
        }
        return Ge(o, A, ee, B, M, fe.current, L);
      }
    }
    var Ie = E.ReactCurrentOwner, $e = E.ReactDebugCurrentFrame;
    function ue(o) {
      if (o) {
        var x = o._owner, b = se(o.type, o._source, x ? x.type : null);
        $e.setExtraStackFrame(b);
      } else
        $e.setExtraStackFrame(null);
    }
    var be;
    be = !1;
    function _e(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Te() {
      {
        if (Ie.current) {
          var o = F(Ie.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function We(o) {
      {
        if (o !== void 0) {
          var x = o.fileName.replace(/^.*[\\\/]/, ""), b = o.lineNumber;
          return `

Check your code at ` + x + ":" + b + ".";
        }
        return "";
      }
    }
    var Me = {};
    function Ye(o) {
      {
        var x = Te();
        if (!x) {
          var b = typeof o == "string" ? o : o.displayName || o.name;
          b && (x = `

Check the top-level render call using <` + b + ">.");
        }
        return x;
      }
    }
    function ze(o, x) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var b = Ye(x);
        if (Me[b])
          return;
        Me[b] = !0;
        var M = "";
        o && o._owner && o._owner !== Ie.current && (M = " It was passed a child from " + F(o._owner.type) + "."), ue(o), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, M), ue(null);
      }
    }
    function Se(o, x) {
      {
        if (typeof o != "object")
          return;
        if (xe(o))
          for (var b = 0; b < o.length; b++) {
            var M = o[b];
            _e(M) && ze(M, x);
          }
        else if (_e(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var B = y(o);
          if (typeof B == "function" && B !== o.entries)
            for (var U = B.call(o), L; !(L = U.next()).done; )
              _e(L.value) && ze(L.value, x);
        }
      }
    }
    function qe(o) {
      {
        var x = o.type;
        if (x == null || typeof x == "string")
          return;
        var b;
        if (typeof x == "function")
          b = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === a))
          b = x.propTypes;
        else
          return;
        if (b) {
          var M = F(x);
          Ae(b, o.props, "prop", M, o);
        } else if (x.PropTypes !== void 0 && !be) {
          be = !0;
          var B = F(x);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xe(o) {
      {
        for (var x = Object.keys(o.props), b = 0; b < x.length; b++) {
          var M = x[b];
          if (M !== "children" && M !== "key") {
            ue(o), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", M), ue(null);
            break;
          }
        }
        o.ref !== null && (ue(o), p("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
      }
    }
    function je(o, x, b, M, B, U) {
      {
        var L = R(o);
        if (!L) {
          var A = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ee = We(B);
          ee ? A += ee : A += Te();
          var X;
          o === null ? X = "null" : xe(o) ? X = "array" : o !== void 0 && o.$$typeof === t ? (X = "<" + (F(o.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : X = typeof o, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, A);
        }
        var K = Ue(o, x, b, B, U);
        if (K == null)
          return K;
        if (L) {
          var re = x.children;
          if (re !== void 0)
            if (M)
              if (xe(re)) {
                for (var de = 0; de < re.length; de++)
                  Se(re[de], o);
                Object.freeze && Object.freeze(re);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(re, o);
        }
        return o === r ? Xe(K) : qe(K), K;
      }
    }
    function Je(o, x, b) {
      return je(o, x, b, !0);
    }
    function Ke(o, x, b) {
      return je(o, x, b, !1);
    }
    var Ze = Ke, Qe = Je;
    reactJsxRuntime_development.Fragment = r, reactJsxRuntime_development.jsx = Ze, reactJsxRuntime_development.jsxs = Qe;
  }()), reactJsxRuntime_development;
}
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min)
    return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var e = require$$0, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(f, u, h) {
    var l, a = {}, m = null, d = null;
    h !== void 0 && (m = "" + h), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (d = u.ref);
    for (l in u)
      r.call(u, l) && !s.hasOwnProperty(l) && (a[l] = u[l]);
    if (f && f.defaultProps)
      for (l in u = f.defaultProps, u)
        a[l] === void 0 && (a[l] = u[l]);
    return { $$typeof: t, type: f, key: m, ref: d, props: a, _owner: c.current };
  }
  return reactJsxRuntime_production_min.Fragment = n, reactJsxRuntime_production_min.jsx = i, reactJsxRuntime_production_min.jsxs = i, reactJsxRuntime_production_min;
}
process.env.NODE_ENV === "production" ? jsxRuntime.exports = requireReactJsxRuntime_production_min() : jsxRuntime.exports = requireReactJsxRuntime_development();
var jsxRuntimeExports = jsxRuntime.exports;
function createClassName(e) {
  return e.filter(function(t) {
    return t !== null;
  }).join(" ");
}
function createComponent(e) {
  return forwardRef(e);
}
const banner = "_banner_1qlmg_1", success = "_success_1qlmg_9", warning = "_warning_1qlmg_12", icon$8 = "_icon_1qlmg_16", children$b = "_children_1qlmg_30", styles$u = {
  banner,
  success,
  warning,
  icon: icon$8,
  children: children$b
}, Banner = createComponent(function({ children: e, icon: t, variant: n, ...r }, c) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ...r,
      ref: c,
      className: createClassName([
        styles$u.banner,
        typeof n > "u" ? null : styles$u[n]
      ]),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$u.icon, children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$u.children, children: e })
      ]
    }
  );
}), loadingIndicator$1 = "_loadingIndicator_pl5c3_1", svg = "_svg_pl5c3_8", rotating = "_rotating_pl5c3_1", styles$t = {
  loadingIndicator: loadingIndicator$1,
  svg,
  rotating
}, LoadingIndicator = createComponent(function({ color: e, ...t }, n) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...t, ref: n, class: styles$t.loadingIndicator, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      class: styles$t.svg,
      style: typeof e > "u" ? void 0 : {
        fill: `var(--figma-color-icon-${e})`
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })
    }
  ) });
});
function noop() {
}
const button = "_button_5fxgc_1", fullWidth$1 = "_fullWidth_5fxgc_7", disabled$e = "_disabled_5fxgc_17", danger = "_danger_5fxgc_44", secondary$1 = "_secondary_5fxgc_56", loadingIndicator = "_loadingIndicator_5fxgc_86", children$a = "_children_5fxgc_122", loading = "_loading_5fxgc_86", buttonStyles = {
  button,
  fullWidth: fullWidth$1,
  disabled: disabled$e,
  default: "_default_5fxgc_29",
  danger,
  secondary: secondary$1,
  loadingIndicator,
  children: children$a,
  loading
}, Button = createComponent(function({
  children: e,
  danger: t = !1,
  disabled: n = !1,
  fullWidth: r = !1,
  loading: c = !1,
  onClick: s = noop,
  onKeyDown: i = noop,
  propagateEscapeKeyDown: f = !0,
  secondary: u = !1,
  ...h
}, l) {
  const a = useCallback(
    function(m) {
      i(m), m.key === "Escape" && (f === !1 && m.stopPropagation(), m.currentTarget.blur());
    },
    [i, f]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      class: createClassName([
        buttonStyles.button,
        u === !0 ? buttonStyles.secondary : buttonStyles.default,
        t === !0 ? buttonStyles.danger : null,
        r === !0 ? buttonStyles.fullWidth : null,
        n === !0 ? buttonStyles.disabled : null,
        c === !0 ? buttonStyles.loading : null
      ]),
      children: [
        c === !0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: buttonStyles.loadingIndicator, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}) }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            ...h,
            ref: l,
            disabled: n === !0,
            onClick: c === !0 ? void 0 : s,
            onKeyDown: a,
            tabIndex: 0,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: buttonStyles.children, children: e })
          }
        )
      ]
    }
  );
}), icon$7 = "_icon_13804_1", styles$s = {
  icon: icon$7
};
function createIcon(e, t) {
  const { width: n, height: r } = t;
  return createComponent(function({
    color: c,
    ...s
  }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        ...s,
        class: styles$s.icon,
        height: r,
        style: {
          fill: typeof c > "u" ? "currentColor" : `var(--figma-color-icon-${c})`
        },
        width: n,
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { "clip-rule": "evenodd", d: e, "fill-rule": "evenodd" })
      }
    );
  });
}
const IconControlCheckboxChecked12 = createIcon(
  "m3.17647 4.82377 1.88235 1.88236 3.76471-3.76472L10 4.11788l-4.94118 4.9412L2 6.00024z",
  { height: 12, width: 12 }
), checkbox = "_checkbox_hvyza_1", input$g = "_input_hvyza_6", disabled$d = "_disabled_hvyza_18", fill$1 = "_fill_hvyza_22", border$8 = "_border_hvyza_23", checkIcon$1 = "_checkIcon_hvyza_61", children$9 = "_children_hvyza_68", styles$r = {
  checkbox,
  input: input$g,
  disabled: disabled$d,
  fill: fill$1,
  border: border$8,
  checkIcon: checkIcon$1,
  children: children$9
}, Checkbox = createComponent(
  function({
    children: e,
    disabled: t = !1,
    onChange: n = noop,
    onKeyDown: r = noop,
    onValueChange: c = noop,
    propagateEscapeKeyDown: s = !0,
    value: i,
    ...f
  }, u) {
    const h = useCallback(
      function(a) {
        n(a);
        const m = a.currentTarget.checked === !0;
        c(m);
      },
      [n, c]
    ), l = useCallback(
      function(a) {
        r(a), a.key === "Escape" && (s === !1 && a.stopPropagation(), a.currentTarget.blur());
      },
      [r, s]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "label",
      {
        class: createClassName([
          styles$r.checkbox,
          t === !0 ? styles$r.disabled : null
        ]),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ...f,
              ref: u,
              checked: i === !0,
              class: styles$r.input,
              disabled: t === !0,
              onChange: h,
              onKeyDown: l,
              tabIndex: 0,
              type: "checkbox"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$r.fill, children: i === !0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$r.checkIcon, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconControlCheckboxChecked12, {}) }) : null }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$r.border }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$r.children, children: e })
        ]
      }
    );
  }
), IconCaretRight16 = createIcon(
  "M12 8 8 5v6z",
  { height: 16, width: 16 }
), label$3 = "_label_ekvh7_1", input$f = "_input_ekvh7_5", title$1 = "_title_ekvh7_13", children$8 = "_children_ekvh7_14", icon$6 = "_icon_ekvh7_29", styles$q = {
  label: label$3,
  input: input$f,
  title: title$1,
  children: children$8,
  icon: icon$6
}, Disclosure = createComponent(
  function({
    children: e,
    onClick: t = noop,
    onKeyDown: n = noop,
    open: r,
    propagateEscapeKeyDown: c = !0,
    title: s,
    ...i
  }, f) {
    const u = useCallback(
      function(h) {
        n(h), h.key === "Escape" && (c === !1 && h.stopPropagation(), h.currentTarget.blur());
      },
      [n, c]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { class: styles$q.label, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...i,
            ref: f,
            checked: r === !0,
            class: styles$q.input,
            onClick: t,
            onKeyDown: u,
            tabIndex: 0,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { class: styles$q.title, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$q.icon, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconCaretRight16, {}) }),
          s
        ] })
      ] }),
      r === !0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$q.children, children: e }) : null
    ] });
  }
), divider$1 = "_divider_m18ta_1", styles$p = {
  divider: divider$1
}, Divider = createComponent(
  function(e, t) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { ...e, ref: t, class: styles$p.divider });
  }
), INVALID_ID = null, VIEWPORT_MARGIN = 12, ITEM_ID_DATA_ATTRIBUTE_NAME = "data-item-id", IconControlChevronDown8 = createIcon(
  "m3.64641 6.35352-3-3 .70711-.70711 2.64644 2.64645 2.64645-2.64645.70711.70711-3 3-.35356.35355z",
  { height: 8, width: 8 }
), IconMenuCheckmarkChecked16 = createIcon(
  "M13.2069 5.20724 7.70688 10.7072l-.70711.7072-.70711-.7072-3-2.99996 1.41422-1.41421 2.29289 2.29289 4.79293-4.79289z",
  { height: 16, width: 16 }
), dropdown = "_dropdown_l9ibg_1", disabled$c = "_disabled_l9ibg_12", menu$1 = "_menu_l9ibg_17", icon$5 = "_icon_l9ibg_25", empty = "_empty_l9ibg_37", value$1 = "_value_l9ibg_41", hasIcon$1 = "_hasIcon_l9ibg_55", placeholder = "_placeholder_l9ibg_59", chevronIcon = "_chevronIcon_l9ibg_63", border$7 = "_border_l9ibg_74", hasBorder$3 = "_hasBorder_l9ibg_83", underline$3 = "_underline_l9ibg_94", dropdownStyles = {
  dropdown,
  disabled: disabled$c,
  menu: menu$1,
  icon: icon$5,
  empty,
  value: value$1,
  hasIcon: hasIcon$1,
  placeholder,
  chevronIcon,
  border: border$7,
  hasBorder: hasBorder$3,
  underline: underline$3
};
function getCurrentFromRef(e) {
  if (e.current === null)
    throw new Error("`ref.current` is `undefined`");
  return e.current;
}
const menu = "_menu_c5se2_1", hidden = "_hidden_c5se2_21", optionHeader = "_optionHeader_c5se2_34", optionValue = "_optionValue_c5se2_35", optionValueSelected = "_optionValueSelected_c5se2_50", optionValueDisabled = "_optionValueDisabled_c5se2_53", optionSeparator = "_optionSeparator_c5se2_57", input$e = "_input_c5se2_64", checkIcon = "_checkIcon_c5se2_75", menuStyles = {
  menu,
  hidden,
  optionHeader,
  optionValue,
  optionValueSelected,
  optionValueDisabled,
  optionSeparator,
  input: input$e,
  checkIcon
};
function updateMenuElementLayout(e, t, n) {
  const r = e.getBoundingClientRect(), c = e.offsetWidth, s = e.offsetHeight, i = r.left, f = r.top;
  t.style.minWidth = `${c}px`;
  const u = window.innerWidth - 2 * VIEWPORT_MARGIN;
  t.style.maxWidth = `${u}px`;
  const h = window.innerHeight - 2 * VIEWPORT_MARGIN;
  t.style.maxHeight = `${h}px`;
  const l = t.offsetWidth, a = t.offsetHeight, m = t.scrollHeight, d = parseInt(
    window.getComputedStyle(t).paddingTop,
    10
  ), I = getSelectedLabelElement(t, n), g = computeLeft({
    menuWidth: l,
    rootLeft: i
  });
  t.style.left = `${g}px`;
  const y = computeTop({
    menuHeight: a,
    rootTop: f,
    selectedTop: I.offsetTop
  });
  t.style.top = `${y}px`, m > a !== !1 && (t.scrollTop = computeScrollTop({
    menuHeight: a,
    menuPaddingTop: d,
    menuScrollHeight: m,
    rootHeight: s,
    rootTop: f,
    selectedTop: I.offsetTop
  }));
}
function getSelectedLabelElement(e, t) {
  const n = e.querySelector(
    t === INVALID_ID ? `[${ITEM_ID_DATA_ATTRIBUTE_NAME}]` : `[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${t}']`
  );
  if (n === null)
    throw new Error("`inputElement` is `null`");
  const r = n.parentElement;
  if (r === null)
    throw new Error("`labelElement` is `null`");
  return r;
}
function computeLeft(e) {
  const { menuWidth: t, rootLeft: n } = e;
  if (n <= VIEWPORT_MARGIN)
    return VIEWPORT_MARGIN;
  const r = window.innerWidth;
  return n + t > r - VIEWPORT_MARGIN ? r - VIEWPORT_MARGIN - t : n;
}
function computeTop(e) {
  const { menuHeight: t, rootTop: n, selectedTop: r } = e, c = window.innerHeight;
  if (n <= VIEWPORT_MARGIN || t === c - 2 * VIEWPORT_MARGIN)
    return VIEWPORT_MARGIN;
  const s = n - r, i = VIEWPORT_MARGIN, f = c - VIEWPORT_MARGIN - t;
  return restrictToRange(s, i, f);
}
function computeScrollTop(e) {
  const {
    menuHeight: t,
    menuPaddingTop: n,
    menuScrollHeight: r,
    rootHeight: c,
    rootTop: s,
    selectedTop: i
  } = e, f = restrictToRange(
    s,
    VIEWPORT_MARGIN,
    window.innerHeight - VIEWPORT_MARGIN - c + n / 2
  ), u = i - (f - VIEWPORT_MARGIN), h = 0, l = r - t;
  return restrictToRange(u, h, l);
}
function restrictToRange(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function useMouseDownOutside(e) {
  const { ref: t, onMouseDownOutside: n } = e;
  useEffect(
    function() {
      function r() {
        n();
      }
      function c(s) {
        const i = getCurrentFromRef(t);
        i === s.target || i.contains(s.target) || n();
      }
      return window.addEventListener("blur", r), window.addEventListener("mousedown", c), function() {
        window.removeEventListener("blur", r), window.removeEventListener("mousedown", c);
      };
    },
    [t, n]
  );
}
function useScrollableMenu(e) {
  const { itemIdDataAttributeName: t, menuElementRef: n, selectedId: r, setSelectedId: c } = e, s = useCallback(
    function() {
      return Array.from(
        getCurrentFromRef(n).querySelectorAll(
          `[${t}]`
        )
      ).filter(function(l) {
        return l.hasAttribute("disabled") === !1;
      });
    },
    [t, n]
  ), i = useCallback(
    function(l) {
      if (l === null)
        return -1;
      const a = s().findIndex(function(m) {
        return m.getAttribute(t) === l;
      });
      if (a === -1)
        throw new Error("`index` is `-1`");
      return a;
    },
    [s, t]
  ), f = useCallback(
    function(l) {
      const a = s(), m = i(l), d = a[m], I = d.getBoundingClientRect().top, g = getCurrentFromRef(n), y = g.getBoundingClientRect().top;
      if (I < y) {
        d.scrollIntoView();
        return;
      }
      I + d.offsetHeight > y + g.offsetHeight && d.scrollIntoView();
    },
    [i, s, n]
  ), u = useCallback(
    function(l) {
      const a = l.key;
      if (a === "ArrowDown" || a === "ArrowUp") {
        const m = s(), d = i(r);
        let I;
        a === "ArrowDown" ? I = d === -1 || d === m.length - 1 ? 0 : d + 1 : I = d === -1 || d === 0 ? m.length - 1 : d - 1;
        const y = m[I].getAttribute(
          t
        );
        c(y), f(y);
      }
    },
    [
      s,
      i,
      t,
      c,
      r,
      f
    ]
  );
  return {
    handleScrollableMenuItemMouseMove: useCallback(
      function(l) {
        const a = l.currentTarget.getAttribute(
          t
        );
        a !== r && c(a);
      },
      [t, r, c]
    ),
    handleScrollableMenuKeyDown: u
  };
}
const Dropdown = createComponent(
  function({
    disabled: e = !1,
    icon: t,
    onChange: n = noop,
    onKeyDown: r = noop,
    onMouseDown: c = noop,
    onValueChange: s = noop,
    options: i,
    placeholder: f,
    propagateEscapeKeyDown: u = !0,
    value: h,
    variant: l,
    ...a
  }, m) {
    if (typeof t == "string" && t.length !== 1)
      throw new Error(`String \`icon\` must be a single character: "${t}"`);
    const d = useRef(null), I = useRef(null), [g, y] = useState(!1), E = findOptionIndexByValue(i, h);
    if (h !== null && E === -1)
      throw new Error(`Invalid \`value\`: ${h}`);
    const [p, $] = useState(
      E === -1 ? INVALID_ID : `${E}`
    ), D = typeof i[E] > "u" ? "" : getDropdownOptionValue(i[E]), { handleScrollableMenuKeyDown: V, handleScrollableMenuItemMouseMove: Y } = useScrollableMenu({
      itemIdDataAttributeName: ITEM_ID_DATA_ATTRIBUTE_NAME,
      menuElementRef: I,
      selectedId: p,
      setSelectedId: $
    }), w = useCallback(function() {
      getCurrentFromRef(d).blur();
    }, []), O = useCallback(function() {
      getCurrentFromRef(d).focus();
    }, []), H = useCallback(function(_) {
      const S = getCurrentFromRef(d), N = getCurrentFromRef(I);
      updateMenuElementLayout(S, N, _);
    }, []), R = useCallback(function() {
      y(!1), $(INVALID_ID);
    }, []), k = useCallback(
      function() {
        if (g === !0)
          return;
        if (y(!0), h === null) {
          H(p);
          return;
        }
        const _ = findOptionIndexByValue(i, h);
        if (_ === -1)
          throw new Error(`Invalid \`value\`: ${h}`);
        const S = `${_}`;
        $(S), H(S);
      },
      [g, i, p, H, h]
    ), z = useCallback(
      function(_) {
        r(_);
        const S = _.key;
        if (S === "ArrowUp" || S === "ArrowDown") {
          if (_.preventDefault(), g === !1) {
            k();
            return;
          }
          V(_);
          return;
        }
        if (S === "Escape") {
          if (_.preventDefault(), u === !1 && _.stopPropagation(), g === !0) {
            R();
            return;
          }
          w();
          return;
        }
        if (S === "Enter") {
          if (_.preventDefault(), g === !1) {
            k();
            return;
          }
          if (p !== INVALID_ID) {
            const N = getCurrentFromRef(
              I
            ).querySelector(
              `[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${p}']`
            );
            if (N === null)
              throw new Error("`selectedElement` is `null`");
            N.checked = !0;
            const J = new window.Event("change", {
              bubbles: !0,
              cancelable: !0
            });
            N.dispatchEvent(J);
          }
          R();
          return;
        }
        if (S === "Tab") {
          R();
          return;
        }
      },
      [
        V,
        g,
        r,
        u,
        p,
        R,
        k,
        w
      ]
    ), F = useCallback(
      function(_) {
        c(_), g === !1 && k();
      },
      [g, c, k]
    ), q = useCallback(function(_) {
      _.stopPropagation();
    }, []), W = useCallback(
      function(_) {
        n(_);
        const S = _.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME);
        if (S === null)
          throw new Error("`id` is `null`");
        const J = i[parseInt(S, 10)].value;
        s(J), O(), R();
      },
      [n, s, i, R, O]
    ), Z = useCallback(
      function() {
        O(), R();
      },
      [R, O]
    ), C = useCallback(
      function() {
        g !== !1 && (R(), w());
      },
      [g, w, R]
    );
    useMouseDownOutside({
      onMouseDownOutside: C,
      ref: d
    }), useEffect(
      function() {
        function _() {
          g !== !1 && (O(), R());
        }
        return window.addEventListener("scroll", _), function() {
          window.removeEventListener("scroll", _);
        };
      },
      [g, R, O]
    );
    const P = useCallback(
      function(_) {
        if (d.current = _, m !== null) {
          if (typeof m == "function") {
            m(_);
            return;
          }
          m.current = _;
        }
      },
      [m, d]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ...a,
        ref: P,
        class: createClassName([
          dropdownStyles.dropdown,
          l === "border" ? dropdownStyles.hasBorder : null,
          typeof t < "u" ? dropdownStyles.hasIcon : null,
          e === !0 ? dropdownStyles.disabled : null
        ]),
        onKeyDown: e === !0 ? void 0 : z,
        onMouseDown: F,
        tabIndex: 0,
        children: [
          typeof t > "u" ? null : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: dropdownStyles.icon, children: t }),
          h === null ? typeof f > "u" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: dropdownStyles.empty }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              class: createClassName([
                dropdownStyles.value,
                dropdownStyles.placeholder
              ]),
              children: f
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: dropdownStyles.value, children: D }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: dropdownStyles.chevronIcon, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconControlChevronDown8, {}) }),
          l === "underline" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: dropdownStyles.underline }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: dropdownStyles.border }),
          createPortal(
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                ref: I,
                class: createClassName([
                  menuStyles.menu,
                  dropdownStyles.menu,
                  e === !0 || g === !1 ? menuStyles.hidden : null
                ]),
                onMouseDown: q,
                children: i.map(function(_, S) {
                  return typeof _ == "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { class: menuStyles.optionSeparator }, S) : "header" in _ ? /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { class: menuStyles.optionHeader, children: _.header }, S) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "label",
                    {
                      class: createClassName([
                        menuStyles.optionValue,
                        _.disabled === !0 ? menuStyles.optionValueDisabled : null,
                        _.disabled !== !0 && `${S}` === p ? menuStyles.optionValueSelected : null
                      ]),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            checked: h === _.value,
                            class: menuStyles.input,
                            disabled: _.disabled === !0,
                            onChange: h === _.value ? void 0 : W,
                            onClick: h === _.value ? Z : void 0,
                            onMouseMove: Y,
                            tabIndex: -1,
                            type: "radio",
                            value: `${_.value}`,
                            [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${S}`
                          }
                        ),
                        _.value === h ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: menuStyles.checkIcon, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconMenuCheckmarkChecked16, {}) }) : null,
                        typeof _.text > "u" ? _.value : _.text
                      ]
                    },
                    S
                  );
                })
              }
            ),
            document.body
          )
        ]
      }
    );
  }
);
function getDropdownOptionValue(e) {
  if (typeof e != "string") {
    if ("text" in e)
      return e.text;
    if ("value" in e)
      return e.value;
  }
  throw new Error("Invariant violation");
}
function findOptionIndexByValue(e, t) {
  if (t === null)
    return -1;
  let n = 0;
  for (const r of e) {
    if (typeof r != "string" && "value" in r && r.value === t)
      return n;
    n += 1;
  }
  return -1;
}
function fileComparator(e, t) {
  const n = e.name.toLowerCase(), r = t.name.toLowerCase();
  return n !== r ? n.localeCompare(r) : e.lastModified - t.lastModified;
}
const input$d = "_input_1hjkt_1", disabled$b = "_disabled_1hjkt_11", secondary = "_secondary_1hjkt_15", fileUploadButtonStyles = {
  input: input$d,
  default: "_default_1hjkt_11",
  disabled: disabled$b,
  secondary
}, FileUploadButton = createComponent(function({
  acceptedFileTypes: e = [],
  children: t,
  disabled: n = !1,
  fullWidth: r = !1,
  loading: c = !1,
  multiple: s = !1,
  onChange: i = noop,
  onClick: f = noop,
  onKeyDown: u = noop,
  onMouseDown: h = noop,
  onSelectedFiles: l = noop,
  propagateEscapeKeyDown: a = !0,
  secondary: m = !1,
  ...d
}, I) {
  const g = useCallback(
    function($) {
      i($);
      const D = $.currentTarget.files;
      if (D === null)
        throw new Error("`event.currentTarget.files` is `null`");
      const V = parseFileList$1(D);
      V.length > 0 && l(V);
    },
    [i, l]
  ), y = useCallback(
    function($) {
      f($), c === !0 && $.preventDefault();
    },
    [f, c]
  ), E = useCallback(
    function($) {
      h($), $.currentTarget.focus();
    },
    [h]
  ), p = useCallback(
    function($) {
      u($), $.key === "Escape" && (a === !1 && $.stopPropagation(), $.currentTarget.blur());
    },
    [u, a]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      class: createClassName([
        buttonStyles.button,
        m === !0 ? buttonStyles.secondary : buttonStyles.default,
        m === !0 ? fileUploadButtonStyles.secondary : fileUploadButtonStyles.default,
        r === !0 ? buttonStyles.fullWidth : null,
        n === !0 ? buttonStyles.disabled : null,
        n === !0 ? fileUploadButtonStyles.disabled : null,
        c === !0 ? buttonStyles.loading : null
      ]),
      children: [
        c === !0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: buttonStyles.loadingIndicator, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}) }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...d,
            ref: I,
            accept: e.length === 0 ? void 0 : e.join(","),
            class: fileUploadButtonStyles.input,
            disabled: n === !0,
            multiple: s,
            onChange: g,
            onClick: y,
            onKeyDown: p,
            onMouseDown: E,
            tabIndex: 0,
            title: "",
            type: "file"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: n === !0, tabIndex: -1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: buttonStyles.children, children: t }) })
      ]
    }
  );
});
function parseFileList$1(e) {
  return Array.prototype.slice.call(e).sort(fileComparator);
}
const fileUploadDropzone = "_fileUploadDropzone_111vt_1", isDropActive = "_isDropActive_111vt_8", input$c = "_input_111vt_12", border$6 = "_border_111vt_13", children$7 = "_children_111vt_38", styles$o = {
  fileUploadDropzone,
  isDropActive,
  input: input$c,
  border: border$6,
  children: children$7
}, FileUploadDropzone = createComponent(function({
  acceptedFileTypes: e = [],
  children: t,
  multiple: n = !1,
  onBlur: r = noop,
  onChange: c = noop,
  onDragEnd: s = noop,
  onDragEnter: i = noop,
  onDragOver: f = noop,
  onDrop: u = noop,
  onKeyDown: h = noop,
  onSelectedFiles: l = noop,
  propagateEscapeKeyDown: a = !0,
  ...m
}, d) {
  const [I, g] = useState(!1), y = useCallback(
    function(w) {
      r(w), g(!1);
    },
    [r]
  ), E = useCallback(
    function(w) {
      c(w);
      const O = w.currentTarget.files;
      if (O === null)
        throw new Error("`event.currentTarget.files` is `null`");
      const H = parseFileList({ acceptedFileTypes: e, fileList: O });
      H.length > 0 && l(H);
    },
    [e, c, l]
  ), p = useCallback(
    function(w) {
      i(w), w.preventDefault();
    },
    [i]
  ), $ = useCallback(
    function(w) {
      f(w), w.preventDefault(), g(!0);
    },
    [f]
  ), D = useCallback(
    function(w) {
      s(w), w.preventDefault(), g(!1);
    },
    [s]
  ), V = useCallback(
    function(w) {
      if (u(w), w.dataTransfer === null)
        throw new Error("`event.dataTransfer` is `null`");
      w.preventDefault();
      const O = w.dataTransfer.files, H = parseFileList({ acceptedFileTypes: e, fileList: O });
      H.length > 0 && l(H), g(!1);
    },
    [e, u, l]
  ), Y = useCallback(
    function(w) {
      h(w), w.key === "Escape" && (a === !1 && w.stopPropagation(), w.currentTarget.blur());
    },
    [h, a]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      class: createClassName([
        styles$o.fileUploadDropzone,
        I === !0 ? styles$o.isDropActive : null
      ]),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...m,
            ref: d,
            accept: e.length === 0 ? void 0 : e.join(","),
            class: styles$o.input,
            multiple: n,
            onBlur: y,
            onChange: E,
            onDragEnd: D,
            onDragEnter: p,
            onDragOver: $,
            onDrop: V,
            onKeyDown: Y,
            tabIndex: 0,
            title: "",
            type: "file"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$o.fill }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$o.border }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$o.children, children: t })
      ]
    }
  );
});
function parseFileList(e) {
  const { fileList: t, acceptedFileTypes: n } = e, r = Array.prototype.slice.call(t).sort(fileComparator);
  return n.length === 0 ? r : r.filter(function(c) {
    return n.indexOf(c.type) !== -1;
  });
}
const iconButton = "_iconButton_1bkfg_1", icon$4 = "_icon_1bkfg_1", styles$n = {
  iconButton,
  icon: icon$4
}, IconButton = createComponent(
  function({
    children: e,
    disabled: t = !1,
    onClick: n,
    onKeyDown: r = noop,
    propagateEscapeKeyDown: c = !0,
    ...s
  }, i) {
    const f = useCallback(
      function(u) {
        r(u), u.key === "Escape" && (c === !1 && u.stopPropagation(), u.currentTarget.blur());
      },
      [r, c]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        ...s,
        ref: i,
        class: styles$n.iconButton,
        disabled: t === !0,
        onClick: n,
        onKeyDown: f,
        tabIndex: 0,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$n.icon, children: e })
      }
    );
  }
), iconToggleButton = "_iconToggleButton_lawt0_1", input$b = "_input_lawt0_7", disabled$a = "_disabled_lawt0_17", box$3 = "_box_lawt0_21", icon$3 = "_icon_lawt0_1", styles$m = {
  iconToggleButton,
  input: input$b,
  disabled: disabled$a,
  box: box$3,
  icon: icon$3
}, IconToggleButton = createComponent(function({
  children: e,
  disabled: t = !1,
  onChange: n = noop,
  onKeyDown: r = noop,
  onValueChange: c = noop,
  propagateEscapeKeyDown: s = !0,
  value: i,
  ...f
}, u) {
  const h = useCallback(
    function(a) {
      n(a);
      const m = a.currentTarget.checked === !0;
      c(m);
    },
    [n, c]
  ), l = useCallback(
    function(a) {
      r(a), a.key === "Escape" && (s === !1 && a.stopPropagation(), a.currentTarget.blur());
    },
    [r, s]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "label",
    {
      class: createClassName([
        styles$m.iconToggleButton,
        t === !0 ? styles$m.disabled : null
      ]),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...f,
            ref: u,
            checked: i === !0,
            class: styles$m.input,
            disabled: t === !0,
            onChange: h,
            onKeyDown: l,
            tabIndex: 0,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$m.box, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$m.icon, children: e }) })
      ]
    }
  );
}), layer = "_layer_1ixkw_1", input$a = "_input_1ixkw_10", box$2 = "_box_1ixkw_11", disabled$9 = "_disabled_1ixkw_23", component = "_component_1ixkw_35", icon$2 = "_icon_1ixkw_43", children$6 = "_children_1ixkw_44", description = "_description_1ixkw_45", bold$2 = "_bold_1ixkw_63", styles$l = {
  layer,
  input: input$a,
  box: box$2,
  disabled: disabled$9,
  component,
  icon: icon$2,
  children: children$6,
  description,
  bold: bold$2
}, Layer = createComponent(function({
  bold: e = !1,
  children: t,
  component: n = !1,
  description: r,
  icon: c,
  onChange: s = noop,
  onKeyDown: i = noop,
  onValueChange: f = noop,
  propagateEscapeKeyDown: u = !0,
  value: h,
  ...l
}, a) {
  const m = useCallback(
    function(I) {
      s(I);
      const g = I.currentTarget.checked === !0;
      f(g);
    },
    [s, f]
  ), d = useCallback(
    function(I) {
      i(I), I.key === "Escape" && (u === !1 && I.stopPropagation(), I.currentTarget.blur());
    },
    [i, u]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "label",
    {
      class: createClassName([
        styles$l.layer,
        e === !0 ? styles$l.bold : null,
        n === !0 ? styles$l.component : null
      ]),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...l,
            ref: a,
            checked: h === !0,
            class: styles$l.input,
            onChange: m,
            onKeyDown: d,
            tabIndex: 0,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$l.box }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$l.icon, children: c }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$l.children, children: t }),
        typeof r > "u" ? null : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$l.description, children: r })
      ]
    }
  );
}), IconCross32 = createIcon(
  "m16 15.293 4.6465-4.6464.7071.7071-4.6465 4.6464 4.6465 4.6465-.7071.7071L16 16.7073l-4.6464 4.6464-.7071-.7071 4.6464-4.6465-4.6464-4.6463.7071-.7071z",
  { height: 32, width: 32 }
), text$1 = "_text_mh6mm_1", numeric = "_numeric_mh6mm_15", left$1 = "_left_mh6mm_19", center$1 = "_center_mh6mm_22", right$1 = "_right_mh6mm_25", styles$k = {
  text: text$1,
  numeric,
  left: left$1,
  center: center$1,
  right: right$1
}, Text = createComponent(function({
  align: e = "left",
  children: t,
  numeric: n = !1,
  ...r
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ...r,
      class: createClassName([
        styles$k.text,
        styles$k[e],
        n === !0 ? styles$k.numeric : null
      ]),
      children: t
    }
  );
});
function getFocusableElements(e) {
  const t = (typeof e > "u" ? document : e).querySelectorAll(
    ':not([disabled])[tabindex]:not([tabindex="-1"])'
  );
  return Array.prototype.slice.call(t);
}
function createFocusTrapKeyDownHandler(e) {
  return function(t) {
    if (t.key !== "Tab")
      return;
    t.preventDefault();
    const n = getFocusableElements(e);
    if (n.length === 0)
      return;
    const r = findElementIndex(
      t.target,
      n
    );
    if (r === n.length - 1 && t.shiftKey === !1) {
      n[0].focus();
      return;
    }
    if (r === 0 && t.shiftKey === !0) {
      n[n.length - 1].focus();
      return;
    }
    n[t.shiftKey === !0 ? r - 1 : r + 1].focus();
  };
}
function findElementIndex(e, t) {
  return t.reduce(function(n, r, c) {
    return n === -1 && r.isSameNode(e) === !0 ? c : n;
  }, -1);
}
const modal = "_modal_1pejl_1", noTransition = "_noTransition_1pejl_10", center = "_center_1pejl_14", open = "_open_1pejl_24", bottom$1 = "_bottom_1pejl_29", left = "_left_1pejl_39", right = "_right_1pejl_49", topBar = "_topBar_1pejl_59", closeButtonLeft = "_closeButtonLeft_1pejl_69", title = "_title_1pejl_73", overlay = "_overlay_1pejl_78", styles$j = {
  modal,
  noTransition,
  center,
  open,
  bottom: bottom$1,
  left,
  right,
  topBar,
  closeButtonLeft,
  title,
  overlay
}, Modal = createComponent(function({
  children: e,
  closeButtonIcon: t = /* @__PURE__ */ jsxRuntimeExports.jsx(IconCross32, {}),
  closeButtonPosition: n = "right",
  open: r,
  transition: c = !0,
  onCloseButtonClick: s,
  onEscapeKeyDown: i,
  onOverlayClick: f,
  position: u = "center",
  title: h,
  ...l
}, a) {
  const m = useRef(null), d = useRef([]), I = useRef(null);
  return useEffect(function() {
    const g = document.createElement("div");
    return document.body.appendChild(g), m.current = g, function() {
      document.body.removeChild(g);
    };
  }, []), useEffect(
    function() {
      const g = getCurrentFromRef(m), y = createFocusTrapKeyDownHandler(g);
      function E(p) {
        r === !0 && y(p);
      }
      return window.addEventListener("keydown", E), function() {
        window.removeEventListener("keydown", E);
      };
    },
    [r]
  ), useEffect(
    function() {
      function g(y) {
        const E = getCurrentFromRef(d), p = getCurrentFromRef(m);
        r === !1 || y.key !== "Escape" || typeof i > "u" || E[E.length - 1] !== p || i(y);
      }
      return window.addEventListener("keydown", g), function() {
        window.removeEventListener("keydown", g);
      };
    },
    [r, i]
  ), useEffect(
    function() {
      const g = getCurrentFromRef(d), y = getCurrentFromRef(m), E = document.body;
      if (r === !0) {
        if (g.length === 0) {
          const $ = E.scrollHeight > window.innerHeight;
          E.style.cssText += `position:fixed;overflow-y:${$ === !0 ? "scroll" : "hidden"};width:100%;`;
        }
        g.push(y), y.style.cssText = "position:absolute;top:0;left:0;bottom:0;right:0;z-index:1", I.current = document.activeElement;
        const p = getFocusableElements(y);
        p.length > 0 ? p[0].focus() : I.current.blur();
      } else
        g.length === 1 && (E.style.removeProperty("position"), E.style.removeProperty("overflow-y"), E.style.removeProperty("width")), g.pop(), y.style.cssText = "position:static";
      return function() {
        I.current !== null && I.current.focus();
      };
    },
    [r]
  ), useEffect(
    function() {
      const g = getCurrentFromRef(m);
      createPortal(
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: a, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ...l,
              class: createClassName([
                styles$j.modal,
                r === !0 ? styles$j.open : null,
                c === !1 ? styles$j.noTransition : null,
                styles$j[u]
              ]),
              children: [
                e,
                typeof s > "u" && typeof h > "u" ? null : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { class: styles$j.topBar, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$j.title, children: typeof h > "u" ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: h }) }) }),
                  typeof s > "u" ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      class: n === "left" ? styles$j.closeButtonLeft : void 0,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { onClick: s, children: t })
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              class: styles$j.overlay,
              onClick: typeof f > "u" ? void 0 : f
            }
          )
        ] }),
        g
      );
    },
    [
      e,
      t,
      n,
      s,
      f,
      r,
      u,
      a,
      l,
      h,
      c
    ]
  ), null;
}), preview = "_preview_1rd4j_1", style = {
  preview
}, Preview = createComponent(function({ children: e, ...t }, n) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...t, ref: n, class: style.preview, children: e });
}), extraSmall$4 = "_extraSmall_dpsd3_1", child$2 = "_child_dpsd3_1", small$4 = "_small_dpsd3_4", medium$4 = "_medium_dpsd3_7", large$4 = "_large_dpsd3_10", extraLarge$4 = "_extraLarge_dpsd3_13", styles$i = {
  extraSmall: extraSmall$4,
  child: child$2,
  small: small$4,
  medium: medium$4,
  large: large$4,
  extraLarge: extraLarge$4
}, Stack = createComponent(function({ children: e, space: t, ...n }, r) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...n, ref: r, class: styles$i[t], children: Children.toArray(e).map(function(c, s) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$i.child, children: c }, s);
  }) });
}), radioButtons = "_radioButtons_1s9z6_1", label$2 = "_label_1s9z6_6", input$9 = "_input_1s9z6_10", disabled$8 = "_disabled_1s9z6_20", fill = "_fill_1s9z6_24", border$5 = "_border_1s9z6_39", children$5 = "_children_1s9z6_60", styles$h = {
  radioButtons,
  label: label$2,
  input: input$9,
  disabled: disabled$8,
  fill,
  border: border$5,
  children: children$5
}, RadioButtons = createComponent(
  function({
    disabled: e = !1,
    onChange: t = noop,
    onKeyDown: n = noop,
    onValueChange: r = noop,
    options: c,
    propagateEscapeKeyDown: s = !0,
    space: i = "small",
    value: f,
    ...u
  }, h) {
    const l = useCallback(
      function(m) {
        t(m);
        const d = m.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME);
        if (d === null)
          throw new Error("`id` is `null`");
        const I = c[parseInt(d, 10)].value;
        r(I);
      },
      [t, r, c]
    ), a = useCallback(
      function(m) {
        n(m), m.key === "Escape" && (s === !1 && m.stopPropagation(), m.currentTarget.blur());
      },
      [n, s]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: h, class: styles$h.radioButtons, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, { space: i, children: c.map(function(m, d) {
      const I = typeof m.children > "u" ? `${m.value}` : m.children, g = e === !0 || m.disabled === !0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          class: createClassName([
            styles$h.label,
            g === !0 ? styles$h.disabled : null
          ]),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ...u,
                checked: f === m.value,
                class: styles$h.input,
                disabled: g === !0,
                onChange: l,
                onKeyDown: a,
                tabIndex: 0,
                type: "radio",
                value: `${m.value}`,
                [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${d}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$h.fill }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$h.border }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$h.children, children: I })
          ]
        },
        d
      );
    }) }) });
  }
), rangeSlider = "_rangeSlider_1dywl_1", border$4 = "_border_1dywl_7", disabled$7 = "_disabled_1dywl_15", input$8 = "_input_1dywl_19", styles$g = {
  rangeSlider,
  border: border$4,
  disabled: disabled$7,
  input: input$8
}, RangeSlider = createComponent(
  function({
    disabled: e = !1,
    increment: t = 1,
    maximum: n,
    minimum: r,
    onInput: c = noop,
    onKeyDown: s = noop,
    onNumericValueInput: i = noop,
    onValueInput: f = noop,
    propagateEscapeKeyDown: u = !0,
    value: h,
    ...l
  }, a) {
    if (r >= n)
      throw new Error("`minimum` must be less than `maximum`");
    const m = useCallback(
      function(I) {
        c(I);
        const g = I.currentTarget.value;
        f(g), i(parseFloat(g));
      },
      [c, i, f]
    ), d = useCallback(
      function(I) {
        s(I), I.key === "Escape" && (u === !1 && I.stopPropagation(), I.currentTarget.blur());
      },
      [s, u]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "label",
      {
        class: createClassName([
          styles$g.rangeSlider,
          e === !0 ? styles$g.disabled : null
        ]),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ...l,
              ref: a,
              class: styles$g.input,
              disabled: e,
              max: n,
              min: r,
              onInput: m,
              onKeyDown: d,
              step: t,
              type: "range",
              value: h
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$g.border })
        ]
      }
    );
  }
), IconSearch32 = createIcon(
  "M19.1034 15.0517c0 1.9616-1.5901 3.5517-3.5517 3.5517-1.9615 0-3.5517-1.5901-3.5517-3.5517 0-1.9615 1.5902-3.5517 3.5517-3.5517 1.9616 0 3.5517 1.5902 3.5517 3.5517m-.7062 3.5529c-.7793.625-1.7687.9988-2.8455.9988-2.5138 0-4.5517-2.0378-4.5517-4.5517 0-2.5138 2.0379-4.5517 4.5517-4.5517 2.5139 0 4.5517 2.0379 4.5517 4.5517 0 1.0769-.3739 2.0664-.999 2.8458l3.2491 3.2492-.7071.7071z",
  { height: 32, width: 32 }
), searchTextbox = "_searchTextbox_1ynmc_1", input$7 = "_input_1ynmc_11", disabled$6 = "_disabled_1ynmc_7", searchIcon = "_searchIcon_1ynmc_27", clearButton = "_clearButton_1ynmc_41", styles$f = {
  searchTextbox,
  input: input$7,
  disabled: disabled$6,
  searchIcon,
  clearButton
}, EMPTY_STRING$6 = "", SearchTextbox = createComponent(function({
  clearOnEscapeKeyDown: e = !1,
  disabled: t = !1,
  onFocus: n = noop,
  onInput: r = noop,
  onKeyDown: c = noop,
  onValueInput: s = noop,
  placeholder: i,
  propagateEscapeKeyDown: f = !0,
  spellCheck: u = !1,
  value: h,
  ...l
}, a) {
  const m = useRef(null), d = useCallback(function() {
    const p = getCurrentFromRef(m);
    p.value = EMPTY_STRING$6;
    const $ = new window.Event("input", {
      bubbles: !0,
      cancelable: !0
    });
    p.dispatchEvent($), p.focus();
  }, []), I = useCallback(
    function(p) {
      n(p), p.currentTarget.select();
    },
    [n]
  ), g = useCallback(
    function(p) {
      r(p);
      const $ = p.currentTarget.value;
      s($);
    },
    [r, s]
  ), y = useCallback(
    function(p) {
      if (c(p), p.key === "Escape") {
        if (e === !0 && h !== EMPTY_STRING$6) {
          p.stopPropagation(), d();
          return;
        }
        f === !1 && p.stopPropagation(), p.currentTarget.blur();
      }
    },
    [
      e,
      d,
      c,
      f,
      h
    ]
  ), E = useCallback(
    function(p) {
      if (m.current = p, a !== null) {
        if (typeof a == "function") {
          a(p);
          return;
        }
        a.current = p;
      }
    },
    [a]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      class: createClassName([
        styles$f.searchTextbox,
        t === !0 ? styles$f.disabled : null
      ]),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...l,
            ref: E,
            class: styles$f.input,
            disabled: t === !0,
            onFocus: I,
            onInput: g,
            onKeyDown: y,
            placeholder: i,
            spellcheck: u,
            tabIndex: 0,
            type: "text",
            value: h
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$f.searchIcon, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconSearch32, {}) }),
        h === EMPTY_STRING$6 || t === !0 ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            class: styles$f.clearButton,
            onClick: d,
            tabIndex: 0,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconCross32, {})
          }
        )
      ]
    }
  );
}), segmentedControl = "_segmentedControl_1tlto_1", labels = "_labels_1tlto_8", label$1 = "_label_1tlto_8", input$6 = "_input_1tlto_17", children$4 = "_children_1tlto_32", disabled$5 = "_disabled_1tlto_52", text = "_text_1tlto_71", border$3 = "_border_1tlto_75", styles$e = {
  segmentedControl,
  labels,
  label: label$1,
  input: input$6,
  children: children$4,
  disabled: disabled$5,
  text,
  border: border$3
}, SegmentedControl = createComponent(function({
  disabled: e = !1,
  onChange: t = noop,
  onKeyDown: n = noop,
  onValueChange: r = noop,
  options: c,
  propagateEscapeKeyDown: s = !0,
  value: i,
  ...f
}) {
  const u = useCallback(
    function(l) {
      t(l);
      const a = l.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME);
      if (a === null)
        throw new Error("`id` is `null`");
      const m = c[parseInt(a, 10)].value;
      r(m);
    },
    [t, r, c]
  ), h = useCallback(
    function(l) {
      n(l), l.key === "Escape" && (s === !1 && l.stopPropagation(), l.currentTarget.blur());
    },
    [n, s]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      class: createClassName([
        styles$e.segmentedControl,
        e === !0 ? styles$e.disabled : null
      ]),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$e.labels, children: c.map(function(l, a) {
          const m = typeof l.children > "u" ? `${l.value}` : l.children, d = e === !0 || l.disabled === !0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { class: styles$e.label, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ...f,
                checked: i === l.value,
                class: styles$e.input,
                disabled: d === !0,
                onChange: u,
                onKeyDown: h,
                tabIndex: 0,
                type: "radio",
                value: `${l.value}`,
                [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${a}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$e.children, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                class: typeof m == "string" ? styles$e.text : void 0,
                children: m
              }
            ) })
          ] }, a);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$e.border })
      ]
    }
  );
}), selectableItem = "_selectableItem_rrb4p_1", indent = "_indent_rrb4p_10", input$5 = "_input_rrb4p_14", box$1 = "_box_rrb4p_15", disabled$4 = "_disabled_rrb4p_27", icon$1 = "_icon_rrb4p_44", children$3 = "_children_rrb4p_45", bold$1 = "_bold_rrb4p_55", styles$d = {
  selectableItem,
  indent,
  input: input$5,
  box: box$1,
  disabled: disabled$4,
  icon: icon$1,
  children: children$3,
  bold: bold$1
}, SelectableItem = createComponent(function({
  bold: e = !1,
  children: t,
  disabled: n = !1,
  indent: r = !1,
  onChange: c = noop,
  onKeyDown: s = noop,
  onValueChange: i = noop,
  propagateEscapeKeyDown: f = !0,
  value: u,
  ...h
}, l) {
  const a = useCallback(
    function(d) {
      c(d);
      const I = d.currentTarget.checked === !0;
      i(I);
    },
    [c, i]
  ), m = useCallback(
    function(d) {
      s(d), d.key === "Escape" && (f === !1 && d.stopPropagation(), d.currentTarget.blur());
    },
    [s, f]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "label",
    {
      class: createClassName([
        styles$d.selectableItem,
        n === !0 ? styles$d.disabled : null,
        e === !0 ? styles$d.bold : null,
        r === !0 ? styles$d.indent : null
      ]),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...h,
            ref: l,
            checked: u === !0,
            class: styles$d.input,
            disabled: n === !0,
            onChange: a,
            onKeyDown: n === !0 ? void 0 : m,
            tabIndex: 0,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$d.box }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$d.children, children: t }),
        u === !0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$d.icon, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconMenuCheckmarkChecked16, {}) }) : null
      ]
    }
  );
}), tabs = "_tabs_61qsz_1", label = "_label_61qsz_9", input$4 = "_input_61qsz_17", value = "_value_61qsz_23", children$2 = "_children_61qsz_28", styles$c = {
  tabs,
  label,
  input: input$4,
  value,
  children: children$2
}, Tabs = createComponent(function({
  onChange: e = noop,
  onKeyDown: t = noop,
  onValueChange: n = noop,
  options: r,
  propagateEscapeKeyDown: c = !0,
  value: s,
  ...i
}, f) {
  const u = useCallback(
    function(a) {
      e(a);
      const m = a.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME);
      if (m === null)
        throw new Error("`id` is `null`");
      const d = r[parseInt(m, 10)].value;
      n(d);
    },
    [e, n, r]
  ), h = useCallback(
    function(a) {
      t(a), a.key === "Escape" && (c === !1 && a.stopPropagation(), a.currentTarget.blur());
    },
    [t, c]
  ), l = r.find(function(a) {
    return a.value === s;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: f, class: styles$c.tabs, children: r.map(function(a, m) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { class: styles$c.label, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...i,
            checked: s === a.value,
            class: styles$c.input,
            onChange: u,
            onKeyDown: h,
            tabIndex: 0,
            type: "radio",
            value: a.value,
            [ITEM_ID_DATA_ATTRIBUTE_NAME]: `${m}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$c.value, children: a.value })
      ] }, m);
    }) }),
    typeof l > "u" ? null : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$c.children, children: l.children })
  ] });
}), hexCharacters = "a-f\\d", match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`, match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`, nonHexChars = new RegExp(`[^#${hexCharacters}]`, "gi"), validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, "i");
function hexRgb(e, t = {}) {
  if (typeof e != "string" || nonHexChars.test(e) || !validHexSize.test(e))
    throw new TypeError("Expected a valid hex string");
  e = e.replace(/^#/, "");
  let n = 1;
  e.length === 8 && (n = Number.parseInt(e.slice(6, 8), 16) / 255, e = e.slice(0, 6)), e.length === 4 && (n = Number.parseInt(e.slice(3, 4).repeat(2), 16) / 255, e = e.slice(0, 3)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
  const r = Number.parseInt(e, 16), c = r >> 16, s = r >> 8 & 255, i = r & 255, f = typeof t.alpha == "number" ? t.alpha : n;
  if (t.format === "array")
    return [c, s, i, f];
  if (t.format === "css") {
    const u = f === 1 ? "" : ` / ${Number((f * 100).toFixed(2))}%`;
    return `rgb(${c} ${s} ${i}${u})`;
  }
  return { red: c, green: s, blue: i, alpha: f };
}
function convertHexColorToRgbColor(e) {
  if (e.length !== 3 && e.length !== 6)
    return null;
  try {
    const { red: t, green: n, blue: r } = hexRgb(e);
    return {
      b: r / 255,
      g: n / 255,
      r: t / 255
    };
  } catch {
    return null;
  }
}
const NAMED_COLORS = {
  aliceblue: "F0F8FF",
  antiquewhite: "FAEBD7",
  aqua: "00FFFF",
  aquamarine: "7FFFD4",
  azure: "F0FFFF",
  beige: "F5F5DC",
  bisque: "FFE4C4",
  black: "000000",
  blanchedalmond: "FFEBCD",
  blue: "0000FF",
  blueviolet: "8A2BE2",
  brown: "A52A2A",
  burlywood: "DEB887",
  cadetblue: "5F9EA0",
  chartreuse: "7FFF00",
  chocolate: "D2691E",
  coral: "FF7F50",
  cornflowerblue: "6495ED",
  cornsilk: "FFF8DC",
  crimson: "DC143C",
  cyan: "00FFFF",
  darkblue: "00008B",
  darkcyan: "008B8B",
  darkgoldenrod: "B8860B",
  darkgray: "A9A9A9",
  darkgreen: "006400",
  darkgrey: "A9A9A9",
  darkkhaki: "BDB76B",
  darkmagenta: "8B008B",
  darkolivegreen: "556B2F",
  darkorange: "FF8C00",
  darkorchid: "9932CC",
  darkred: "8B0000",
  darksalmon: "E9967A",
  darkseagreen: "8FBC8F",
  darkslateblue: "483D8B",
  darkslategray: "2F4F4F",
  darkslategrey: "2F4F4F",
  darkturquoise: "00CED1",
  darkviolet: "9400D3",
  deeppink: "FF1493",
  deepskyblue: "00BFFF",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1E90FF",
  firebrick: "B22222",
  floralwhite: "FFFAF0",
  forestgreen: "228B22",
  fuchsia: "FF00FF",
  gainsboro: "DCDCDC",
  ghostwhite: "F8F8FF",
  gold: "FFD700",
  goldenrod: "DAA520",
  gray: "808080",
  green: "008000",
  greenyellow: "ADFF2F",
  grey: "808080",
  honeydew: "F0FFF0",
  hotpink: "FF69B4",
  indianred: "CD5C5C",
  indigo: "4B0082",
  ivory: "FFFFF0",
  khaki: "F0E68C",
  lavender: "E6E6FA",
  lavenderblush: "FFF0F5",
  lawngreen: "7CFC00",
  lemonchiffon: "FFFACD",
  lightblue: "ADD8E6",
  lightcoral: "F08080",
  lightcyan: "E0FFFF",
  lightgoldenrodyellow: "FAFAD2",
  lightgray: "D3D3D3",
  lightgreen: "90EE90",
  lightgrey: "D3D3D3",
  lightpink: "FFB6C1",
  lightsalmon: "FFA07A",
  lightseagreen: "20B2AA",
  lightskyblue: "87CEFA",
  lightslategray: "778899",
  lightslategrey: "778899",
  lightsteelblue: "B0C4DE",
  lightyellow: "FFFFE0",
  lime: "00FF00",
  limegreen: "32CD32",
  linen: "FAF0E6",
  magenta: "FF00FF",
  maroon: "800000",
  mediumaquamarine: "66CDAA",
  mediumblue: "0000CD",
  mediumorchid: "BA55D3",
  mediumpurple: "9370DB",
  mediumseagreen: "3CB371",
  mediumslateblue: "7B68EE",
  mediumspringgreen: "00FA9A",
  mediumturquoise: "48D1CC",
  mediumvioletred: "C71585",
  midnightblue: "191970",
  mintcream: "F5FFFA",
  mistyrose: "FFE4E1",
  moccasin: "FFE4B5",
  navajowhite: "FFDEAD",
  navy: "000080",
  oldlace: "FDF5E6",
  olive: "808000",
  olivedrab: "6B8E23",
  orange: "FFA500",
  orangered: "FF4500",
  orchid: "DA70D6",
  palegoldenrod: "EEE8AA",
  palegreen: "98FB98",
  paleturquoise: "AFEEEE",
  palevioletred: "DB7093",
  papayawhip: "FFEFD5",
  peachpuff: "FFDAB9",
  peru: "CD853F",
  pink: "FFC0CB",
  plum: "DDA0DD",
  powderblue: "B0E0E6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "FF0000",
  rosybrown: "BC8F8F",
  royalblue: "4169E1",
  saddlebrown: "8B4513",
  salmon: "FA8072",
  sandybrown: "F4A460",
  seagreen: "2E8B57",
  seashell: "FFF5EE",
  sienna: "A0522D",
  silver: "C0C0C0",
  skyblue: "87CEEB",
  slateblue: "6A5ACD",
  slategray: "708090",
  slategrey: "708090",
  snow: "FFFAFA",
  springgreen: "00FF7F",
  steelblue: "4682B4",
  tan: "D2B48C",
  teal: "008080",
  thistle: "D8BFD8",
  tomato: "FF6347",
  turquoise: "40E0D0",
  violet: "EE82EE",
  wheat: "F5DEB3",
  white: "FFFFFF",
  whitesmoke: "F5F5F5",
  yellow: "FFFF00",
  yellowgreen: "9ACD32"
};
function convertNamedColorToHexColor(e) {
  const t = NAMED_COLORS[e.toLowerCase()];
  return typeof t > "u" ? null : t;
}
const toHex = (e, t, n, r) => (n | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + r;
function rgbHex(e, t, n, r) {
  let c = (e + (r || "")).toString().includes("%");
  if (typeof e == "string" && !t) {
    const s = parseCssRgbString(e);
    if (!s)
      throw new TypeError("Invalid or unsupported color format.");
    c = !1, [e, t, n, r] = s;
  } else
    r !== void 0 && (r = Number.parseFloat(r));
  if (typeof e != "number" || typeof t != "number" || typeof n != "number" || e > 255 || t > 255 || n > 255)
    throw new TypeError("Expected three numbers below 256");
  if (typeof r == "number") {
    if (!c && r >= 0 && r <= 1)
      r = Math.round(255 * r);
    else if (c && r >= 0 && r <= 100)
      r = Math.round(255 * r / 100);
    else
      throw new TypeError(`Expected alpha value (${r}) as a fraction or percentage`);
    r = (r | 256).toString(16).slice(1);
  } else
    r = "";
  return toHex(e, t, n, r);
}
const parseCssRgbString = (e) => {
  const t = e.replace(/rgba?\(([^)]+)\)/, "$1").split(/[,\s/]+/).filter(Boolean);
  if (t.length < 3)
    return;
  const n = (f, u) => (f = f.trim(), f.endsWith("%") ? Math.min(Number.parseFloat(f) * u / 100, u) : Math.min(Number.parseFloat(f), u)), r = n(t[0], 255), c = n(t[1], 255), s = n(t[2], 255);
  let i;
  return t.length === 4 && (i = n(t[3], 1)), [r, c, s, i];
};
function convertRgbColorToHexColor(e) {
  const { r: t, g: n, b: r } = e;
  if (t < 0 || t > 1 || n < 0 || n > 1 || r < 0 || r > 1)
    return null;
  try {
    return rgbHex(Math.round(t * 255), Math.round(n * 255), Math.round(r * 255)).toUpperCase();
  } catch {
    return null;
  }
}
function isValidHexColor(e) {
  return convertHexColorToRgbColor(e) !== null;
}
const MIXED_NUMBER = 999999999999999, MIXED_STRING = "999999999999999", floatOperandRegex = /^-?\d*(?:\.\d*)?$/, integerOperandRegex = /^-?\d*$/, operatorRegex = /[+\-*/]/, operatorSuffixRegex = /[+\-*/]$/, numbersRegex = /\d/, invalidCharactersRegex = /[^\d.+\-*/]/;
function evaluateNumericExpression(value) {
  return value === "" || numbersRegex.test(value) === !1 || invalidCharactersRegex.test(value) === !0 ? null : operatorRegex.test(value) === !0 ? operatorSuffixRegex.test(value) === !0 ? eval(value.substring(0, value.length - 1)) : eval(value) : parseFloat(value);
}
function isValidNumericInput(e, t = { integersOnly: !1 }) {
  const n = (e[0] === "-" ? e.substring(1) : e).split(operatorRegex);
  let r = -1;
  for (; ++r < n.length; ) {
    const c = n[r];
    if (c === "" && r !== n.length - 1 || (t.integersOnly === !0 ? integerOperandRegex : floatOperandRegex).test(c) === !1)
      return !1;
  }
  return !0;
}
function isKeyCodeCharacterGenerating(e) {
  return e === 32 || // space
  e >= 48 && e <= 57 || // 0 to 9
  e >= 65 && e <= 90 || // A to Z
  e >= 96 && e <= 105 || // Number pad
  e >= 186 && e <= 192 || // ;=,-./`
  e >= 219 && e <= 222;
}
const EMPTY_STRING$5 = "", RawTextbox = createComponent(
  function({
    disabled: e = !1,
    onBlur: t = noop,
    onFocus: n = noop,
    onInput: r = noop,
    onKeyDown: c = noop,
    onMouseDown: s = noop,
    onValueInput: i = noop,
    password: f = !1,
    placeholder: u,
    propagateEscapeKeyDown: h = !0,
    revertOnEscapeKeyDown: l = !1,
    spellCheck: a = !1,
    validateOnBlur: m,
    value: d,
    ...I
  }, g) {
    const y = useRef(null), [E, p] = useState(EMPTY_STRING$5), $ = useCallback(function(R) {
      const k = getCurrentFromRef(y);
      k.value = R;
      const z = new window.Event("input", {
        bubbles: !0,
        cancelable: !0
      });
      k.dispatchEvent(z);
    }, []), D = useCallback(
      function(R) {
        if (t(R), typeof m < "u") {
          const k = m(d);
          if (typeof k == "string") {
            $(k), p(EMPTY_STRING$5);
            return;
          }
          if (k === !1) {
            d !== E && $(E), p(EMPTY_STRING$5);
            return;
          }
        }
        p(EMPTY_STRING$5);
      },
      [t, E, $, m, d]
    ), V = useCallback(
      function(R) {
        n(R), p(d), R.currentTarget.select();
      },
      [n, d]
    ), Y = useCallback(
      function(R) {
        r(R);
        const k = R.currentTarget.value;
        i(k);
      },
      [r, i]
    ), w = useCallback(
      function(R) {
        if (c(R), R.key === "Escape") {
          l === !0 && ($(E), p(EMPTY_STRING$5)), h === !1 && R.stopPropagation(), R.currentTarget.blur();
          return;
        }
        d === MIXED_STRING && isKeyCodeCharacterGenerating(R.keyCode) === !1 && (R.preventDefault(), R.currentTarget.select());
      },
      [
        c,
        E,
        h,
        l,
        $,
        d
      ]
    ), O = useCallback(
      function(R) {
        s(R), d === MIXED_STRING && (R.preventDefault(), R.currentTarget.select());
      },
      [s, d]
    ), H = useCallback(
      function(R) {
        if (y.current = R, g !== null) {
          if (typeof g == "function") {
            g(R);
            return;
          }
          g.current = R;
        }
      },
      [g]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ...I,
        ref: H,
        disabled: e === !0,
        onBlur: D,
        onFocus: V,
        onInput: Y,
        onKeyDown: w,
        onMouseDown: O,
        placeholder: u,
        spellcheck: a,
        tabIndex: 0,
        type: f === !0 ? "password" : "text",
        value: d === MIXED_STRING ? "Mixed" : d
      }
    );
  }
), textbox = "_textbox_sir3b_1", input$3 = "_input_sir3b_9", disabled$3 = "_disabled_sir3b_17", hasIcon = "_hasIcon_sir3b_21", icon = "_icon_sir3b_29", border$2 = "_border_sir3b_49", hasBorder$2 = "_hasBorder_sir3b_59", underline$2 = "_underline_sir3b_70", textboxStyles = {
  textbox,
  input: input$3,
  disabled: disabled$3,
  hasIcon,
  icon,
  border: border$2,
  hasBorder: hasBorder$2,
  underline: underline$2
}, Textbox = createComponent(
  function({ icon: e, variant: t, ...n }, r) {
    if (typeof e == "string" && e.length !== 1)
      throw new Error(`String \`icon\` must be a single character: ${e}`);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        class: createClassName([
          textboxStyles.textbox,
          t === "border" ? textboxStyles.hasBorder : null,
          typeof e > "u" ? null : textboxStyles.hasIcon,
          n.disabled === !0 ? textboxStyles.disabled : null
        ]),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RawTextbox, { ...n, ref: r, class: textboxStyles.input }),
          typeof e > "u" ? null : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: textboxStyles.icon, children: e }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: textboxStyles.border }),
          t === "underline" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: textboxStyles.underline }) : null
        ]
      }
    );
  }
);
function computeNextValue(e, t) {
  const n = e.value, r = e.selectionStart, c = e.selectionEnd;
  return `${n.substring(
    0,
    r === null ? 0 : r
  )}${t}${n.substring(
    c === null ? 0 : c
  )}`;
}
const top = "_top_3lpap_1", bottom = "_bottom_3lpap_5", textboxAutocompleteStyles = {
  top,
  bottom
}, EMPTY_STRING$4 = "", TextboxAutocomplete = createComponent(function({
  disabled: e = !1,
  filter: t = !1,
  icon: n,
  onChange: r = noop,
  onInput: c = noop,
  onKeyDown: s = noop,
  onMouseDown: i = noop,
  onPaste: f = noop,
  onValueInput: u = noop,
  placeholder: h,
  propagateEscapeKeyDown: l = !0,
  revertOnEscapeKeyDown: a = !1,
  spellCheck: m = !1,
  strict: d = !1,
  top: I = !1,
  value: g,
  variant: y,
  ...E
}, p) {
  if (typeof n == "string" && n.length !== 1)
    throw new Error(`String \`icon\` must be a single character: ${n}`);
  const $ = useRef(null), D = useRef(null), V = useRef(null), Y = useRef(!1), [w, O] = useState(g), [H, R] = useState(EMPTY_STRING$4), [k, z] = useState(!1), [F, q] = useState(INVALID_ID), W = t === !0 ? filterOptions(createOptions(E.options), g, H) : createOptions(E.options), Z = useCallback(function() {
    getCurrentFromRef(D).select();
  }, []), C = useCallback(function() {
    getCurrentFromRef(D).blur();
  }, []), P = useCallback(function(v) {
    const j = getCurrentFromRef(V);
    if (v === INVALID_ID) {
      j.scrollTop = 0;
      return;
    }
    const Q = j.querySelector(
      `[${ITEM_ID_DATA_ATTRIBUTE_NAME}='${v}']`
    );
    if (Q === null)
      throw new Error("`selectedElement` is `null`");
    const oe = Q.getBoundingClientRect().y - j.getBoundingClientRect().y;
    if (oe < j.scrollTop) {
      j.scrollTop = oe;
      return;
    }
    const se = oe + Q.offsetHeight;
    se > j.scrollTop + j.offsetHeight && (j.scrollTop = se - j.offsetHeight);
  }, []), _ = useCallback(
    function(v) {
      const j = getIdByValue(W, v);
      j === INVALID_ID && R(v), q(j), P(j);
    },
    [W, P]
  ), S = useCallback(function(v) {
    const j = getCurrentFromRef(D);
    j.value = v;
    const Q = new window.Event("input", {
      bubbles: !0,
      cancelable: !0
    });
    j.dispatchEvent(Q);
  }, []), N = useCallback(function() {
    z(!1);
  }, []), J = useCallback(
    function() {
      updateMenuElementMaxHeight(
        getCurrentFromRef($),
        getCurrentFromRef(V),
        I
      ), O(g), _(g), z(!0);
    },
    [I, _, g]
  ), T = useCallback(
    function(v) {
      c(v);
      const j = v.currentTarget.value;
      if (_(j), u(j), k !== !0) {
        if (Y.current === !0) {
          Y.current = !1;
          return;
        }
        J();
      }
    },
    [k, c, u, J, _]
  ), G = useCallback(
    function(v) {
      s(v);
      const j = v.currentTarget, Q = v.key;
      if (Q === "ArrowUp" || Q === "ArrowDown") {
        if (v.preventDefault(), k === !1) {
          J();
          return;
        }
        if (W.length === 0)
          return;
        const oe = Q === "ArrowUp" ? computePreviousId(W, F) : computeNextId(W, F);
        if (oe === INVALID_ID) {
          q(INVALID_ID), S(H), Z(), P(INVALID_ID);
          return;
        }
        q(oe);
        const se = findOptionValueById(W, oe);
        if (se === null)
          throw new Error("`optionValue` is `null`");
        S(se.value), Z(), P(oe);
        return;
      }
      if (Q === "Escape") {
        if (v.preventDefault(), l === !1 && v.stopPropagation(), a === !0 && (Y.current = !0, S(w)), k === !0) {
          N();
          return;
        }
        C();
        return;
      }
      if (Q === "Enter") {
        if (v.preventDefault(), Z(), k === !0) {
          N();
          return;
        }
        J();
        return;
      }
      if (Q === "Tab") {
        N();
        return;
      }
      if (d !== !1 && !(v.ctrlKey === !0 || v.metaKey === !0) && isKeyCodeCharacterGenerating(v.keyCode) === !0) {
        const oe = computeNextValue(j, v.key);
        if (isValidValue(W, oe) === !0)
          return;
        v.preventDefault();
      }
    },
    [
      H,
      k,
      s,
      W,
      w,
      l,
      a,
      F,
      d,
      N,
      J,
      P,
      C,
      Z,
      S
    ]
  ), te = useCallback(
    function(v) {
      i(v), k !== !0 && (v.preventDefault(), Z(), J());
    },
    [k, i, Z, J]
  ), ne = useCallback(
    function(v) {
      if (f(v), d === !1)
        return;
      if (v.clipboardData === null)
        throw new Error("`event.clipboardData` is `null`");
      const j = computeNextValue(
        v.currentTarget,
        v.clipboardData.getData("Text")
      );
      isValidValue(W, j) !== !0 && v.preventDefault();
    },
    [f, W, d]
  ), ie = useCallback(
    function(v) {
      r(v);
      const j = v.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME);
      if (j === null)
        throw new Error("`id` is `null`");
      q(j);
      const Q = findOptionValueById(W, j);
      if (Q === null)
        throw new Error("`optionValue` is `null`");
      S(Q.value), Z(), N();
    },
    [
      r,
      W,
      N,
      Z,
      S
    ]
  ), ce = useCallback(
    function(v) {
      const j = v.currentTarget.getAttribute(ITEM_ID_DATA_ATTRIBUTE_NAME);
      if (j === null)
        throw new Error("`id` is `null`");
      j !== F && q(j);
    },
    [F]
  ), he = useCallback(
    function() {
      k !== !1 && (N(), C());
    },
    [k, C, N]
  );
  useMouseDownOutside({
    onMouseDownOutside: he,
    ref: $
  }), useEffect(
    function() {
      function v() {
        k !== !1 && (N(), Z());
      }
      return window.addEventListener("scroll", v), function() {
        window.removeEventListener("scroll", v);
      };
    },
    [k, N, Z]
  );
  const ae = useCallback(
    function(v) {
      if (D.current = v, p !== null) {
        if (typeof p == "function") {
          p(v);
          return;
        }
        p.current = v;
      }
    },
    [p]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: $,
      class: createClassName([
        textboxStyles.textbox,
        typeof y > "u" ? null : y === "border" ? textboxStyles.hasBorder : null,
        typeof n > "u" ? null : textboxStyles.hasIcon,
        e === !0 ? textboxStyles.disabled : null
      ]),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { class: textboxStyles.inner, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...E,
            ref: ae,
            class: textboxStyles.input,
            disabled: e === !0,
            onInput: T,
            onKeyDown: G,
            onMouseDown: te,
            onPaste: ne,
            placeholder: h,
            spellcheck: m,
            tabIndex: 0,
            type: "text",
            value: g
          }
        ),
        typeof n > "u" ? null : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: textboxStyles.icon, children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: textboxStyles.border }),
        y === "underline" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: textboxStyles.underline }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: V,
            class: createClassName([
              menuStyles.menu,
              e === !0 || k === !1 ? menuStyles.hidden : null,
              I === !0 ? textboxAutocompleteStyles.top : textboxAutocompleteStyles.bottom
            ]),
            children: W.map(function(v, j) {
              return typeof v == "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { class: menuStyles.optionSeparator }, j) : "header" in v ? /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { class: menuStyles.optionHeader, children: v.header }, j) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  class: createClassName([
                    menuStyles.optionValue,
                    v.disabled === !0 ? menuStyles.optionValueDisabled : null,
                    v.disabled !== !0 && v.id === F ? menuStyles.optionValueSelected : null
                  ]),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        checked: g === v.value,
                        class: menuStyles.input,
                        disabled: v.disabled === !0,
                        onChange: g === v.value ? void 0 : ie,
                        onClick: g === v.value ? N : void 0,
                        onMouseMove: ce,
                        tabIndex: -1,
                        type: "radio",
                        value: `${v.value}`,
                        [ITEM_ID_DATA_ATTRIBUTE_NAME]: v.id
                      }
                    ),
                    v.value === w ? (
                      // Show check icon if option matches `originalValue`
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: menuStyles.checkIcon, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconMenuCheckmarkChecked16, {}) })
                    ) : null,
                    v.value
                  ]
                },
                j
              );
            })
          }
        )
      ] })
    }
  );
});
function createOptions(e) {
  return e.map(function(t, n) {
    return typeof t != "string" && "value" in t ? {
      ...t,
      id: `${n}`
    } : t;
  });
}
function filterOptions(e, t, n) {
  return t === EMPTY_STRING$4 ? e : getIdByValue(e, t) === INVALID_ID ? e.filter(function(c) {
    return typeof c != "string" && "value" in c ? doesStringContainSubstring(c.value, t) === !0 : !1;
  }) : n === EMPTY_STRING$4 ? e : e.filter(function(c) {
    return typeof c != "string" && "value" in c ? doesStringContainSubstring(c.value, n) === !0 : !1;
  });
}
function doesStringContainSubstring(e, t) {
  return e.toLowerCase().indexOf(t.toLowerCase()) !== -1;
}
function getIdByValue(e, t) {
  for (const n of e)
    if (typeof n != "string" && "value" in n && n.value === t)
      return n.id;
  return INVALID_ID;
}
function isValidValue(e, t) {
  if (t === EMPTY_STRING$4)
    return !0;
  for (const n of e)
    if (typeof n != "string" && "value" in n && n.value.toLowerCase().indexOf(t.toLowerCase()) === 0)
      return !0;
  return !1;
}
function findOptionValueById(e, t) {
  for (const n of e)
    if (typeof n != "string" && "id" in n && n.id === t)
      return n;
  return null;
}
function getIndexById(e, t) {
  let n = 0;
  for (const r of e) {
    if (typeof r != "string" && "id" in r && r.id === t)
      return n;
    n += 1;
  }
  return -1;
}
function computePreviousId(e, t) {
  if (t === INVALID_ID) {
    const c = findOptionValueAtOrBeforeIndex(e, e.length - 1);
    return c === null ? null : c.id;
  }
  const n = getIndexById(e, t);
  if (n === -1)
    throw new Error(`No option with \`id\` ${t}`);
  if (n === 0)
    return null;
  const r = findOptionValueAtOrBeforeIndex(e, n - 1);
  return r === null ? null : r.id;
}
function computeNextId(e, t) {
  if (t === INVALID_ID) {
    const c = findOptionValueAtOrAfterIndex(e, 0);
    return c === null ? null : c.id;
  }
  const n = getIndexById(e, t);
  if (n === -1)
    throw new Error(`No option with \`id\` ${t}`);
  if (n === e.length - 1)
    return null;
  const r = findOptionValueAtOrAfterIndex(e, n + 1);
  return r === null ? null : r.id;
}
function findOptionValueAtOrBeforeIndex(e, t) {
  if (t < 0)
    throw new Error("`index` < 0");
  if (t > e.length - 1)
    throw new Error("`index` > `options.length` - 1");
  return findLastOptionValue(e.slice(0, t + 1));
}
function findOptionValueAtOrAfterIndex(e, t) {
  if (t < 0)
    throw new Error("`index` < 0");
  if (t > e.length - 1)
    throw new Error("`index` > `options.length` - 1");
  return findFirstOptionValue(e.slice(t));
}
function findFirstOptionValue(e) {
  for (const t of e)
    if (typeof t != "string" && "id" in t && t.disabled !== !0)
      return t;
  return null;
}
function findLastOptionValue(e) {
  return findFirstOptionValue(e.slice().reverse());
}
function updateMenuElementMaxHeight(e, t, n) {
  const r = e.getBoundingClientRect().top, c = n === !0 ? r - VIEWPORT_MARGIN : window.innerHeight - r - e.offsetHeight - VIEWPORT_MARGIN;
  t.style.maxHeight = `${c}px`;
}
const EMPTY_STRING$3 = "", fractionalPartRegex = /\.([^.]+)/, nonDigitRegex = /[^\d.]/;
function formatEvaluatedValue(e, t, n) {
  if (e === null)
    return EMPTY_STRING$3;
  const r = countSignificantFigures(
    nonDigitRegex.test(t) === !0 ? `${e}` : t
  );
  return appendSuffix(
    formatSignificantFigures(e, r),
    n
  );
}
function countSignificantFigures(e) {
  const t = fractionalPartRegex.exec(e);
  return t === null ? 0 : t[1].length;
}
function formatSignificantFigures(e, t) {
  if (t === 0)
    return `${e}`;
  const n = fractionalPartRegex.exec(`${e}`);
  if (n === null)
    return `${e}.${"0".repeat(t)}`;
  const r = n[1], c = t - r.length;
  return `${e}${"0".repeat(c)}`;
}
function appendSuffix(e, t) {
  return typeof t > "u" ? e : e === EMPTY_STRING$3 ? EMPTY_STRING$3 : `${e}${t}`;
}
const FRACTION_DIGITS = 3, EMPTY_STRING$2 = "", RawTextboxNumeric = createComponent(function({
  disabled: e = !1,
  incrementBig: t = 10,
  incrementSmall: n = 1,
  integer: r = !1,
  maximum: c,
  minimum: s,
  onBlur: i = noop,
  onFocus: f = noop,
  onInput: u = noop,
  onMouseDown: h = noop,
  onKeyDown: l = noop,
  onNumericValueInput: a = noop,
  onValueInput: m = noop,
  placeholder: d,
  propagateEscapeKeyDown: I = !0,
  revertOnEscapeKeyDown: g = !1,
  suffix: y,
  validateOnBlur: E,
  value: p,
  ...$
}, D) {
  if (typeof s < "u" && typeof c < "u" && s >= c)
    throw new Error("`minimum` must be less than `maximum`");
  const V = useRef(null), Y = useRef(!1), [w, O] = useState(EMPTY_STRING$2), H = useCallback(function(C) {
    const P = getCurrentFromRef(V);
    P.value = C;
    const _ = new window.Event("input", {
      bubbles: !0,
      cancelable: !0
    });
    P.dispatchEvent(_);
  }, []), R = useCallback(
    function(C) {
      if (i(C), Y.current === !0) {
        Y.current = !1;
        return;
      }
      if (typeof E < "u") {
        const P = evaluateValue(p, y), _ = E(P);
        if (typeof _ == "number") {
          H(formatEvaluatedValue(_, p, y)), O(EMPTY_STRING$2);
          return;
        }
        if (_ === null) {
          H(EMPTY_STRING$2), O(EMPTY_STRING$2);
          return;
        }
        if (_ === !1) {
          p !== w && H(w), O(EMPTY_STRING$2);
          return;
        }
      }
      if (typeof y < "u" && p === y) {
        H(EMPTY_STRING$2), O(EMPTY_STRING$2);
        return;
      }
      if (p !== EMPTY_STRING$2 && p !== MIXED_STRING) {
        const P = evaluateValue(p, y), _ = formatEvaluatedValue(
          P,
          p,
          y
        );
        p !== _ && H(_);
      }
      O(EMPTY_STRING$2);
    },
    [i, w, H, y, E, p]
  ), k = useCallback(
    function(C) {
      f(C), O(p), C.currentTarget.select();
    },
    [f, p]
  ), z = useCallback(
    function(C) {
      u(C);
      const P = C.currentTarget.value;
      m(P);
      const _ = evaluateValue(P, y);
      a(_);
    },
    [u, a, m, y]
  ), F = useCallback(
    function(C) {
      l(C);
      const P = C.key;
      if (P === "Escape") {
        g === !0 && (Y.current = !0, H(w), O(EMPTY_STRING$2)), I === !1 && C.stopPropagation(), C.currentTarget.blur();
        return;
      }
      const _ = C.currentTarget;
      if (P === "ArrowDown" || P === "ArrowUp") {
        const S = C.shiftKey === !0 ? t : n;
        if (C.preventDefault(), p === EMPTY_STRING$2 || p === MIXED_STRING) {
          const te = function() {
            return typeof s < "u" && s > 0 ? s : typeof c < "u" && c < 0 ? c : 0;
          }(), ne = evaluateValueWithDelta(
            te,
            P === "ArrowDown" ? -1 * S : S
          ), ie = restrictValue(ne, s, c), ce = formatEvaluatedValue(ie, p, y);
          _.value = ce, _.select(), z(C);
          return;
        }
        const N = evaluateValue(p, y);
        if (N === null)
          throw new Error("`number` is `null`");
        const J = evaluateValueWithDelta(
          N,
          P === "ArrowDown" ? -1 * S : S
        ), T = restrictValue(J, s, c), G = formatEvaluatedValue(T, p, y);
        if (G === p)
          return;
        _.value = G, _.select(), z(C);
        return;
      }
      if (!(C.ctrlKey === !0 || C.metaKey === !0) && isKeyCodeCharacterGenerating(C.keyCode) === !0) {
        const S = trimSuffix(
          p === MIXED_STRING ? C.key : computeNextValue(_, C.key),
          y
        );
        if (isValidNumericInput(S, { integersOnly: r }) === !1) {
          C.preventDefault();
          return;
        }
        if (typeof s > "u" && typeof c > "u")
          return;
        const N = evaluateNumericExpression(S);
        if (N === null)
          return;
        (typeof s < "u" && N < s || typeof c < "u" && N > c) && C.preventDefault();
      }
    },
    [
      z,
      t,
      n,
      r,
      c,
      s,
      l,
      w,
      I,
      g,
      H,
      y,
      p
    ]
  ), q = useCallback(
    function(C) {
      h(C), p === MIXED_STRING && (C.preventDefault(), C.currentTarget.select());
    },
    [h, p]
  ), W = useCallback(
    function(C) {
      if (C.clipboardData === null)
        throw new Error("`event.clipboardData` is `null`");
      const P = trimSuffix(
        computeNextValue(
          C.currentTarget,
          C.clipboardData.getData("Text")
        ),
        y
      );
      isValidNumericInput(P, {
        integersOnly: r
      }) === !1 && C.preventDefault();
    },
    [r, y]
  ), Z = useCallback(
    function(C) {
      if (V.current = C, D !== null) {
        if (typeof D == "function") {
          D(C);
          return;
        }
        D.current = C;
      }
    },
    [D]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      ...$,
      ref: Z,
      disabled: e === !0,
      onBlur: R,
      onFocus: k,
      onInput: z,
      onKeyDown: F,
      onMouseDown: q,
      onPaste: W,
      placeholder: d,
      spellcheck: !1,
      tabIndex: 0,
      type: "text",
      value: p === MIXED_STRING ? "Mixed" : p
    }
  );
});
function restrictValue(e, t, n) {
  return typeof t < "u" ? typeof n < "u" ? Math.min(Math.max(e, t), n) : Math.max(e, t) : typeof n < "u" ? Math.min(e, n) : e;
}
function evaluateValue(e, t) {
  return e === MIXED_STRING ? MIXED_NUMBER : e === EMPTY_STRING$2 ? null : evaluateNumericExpression(trimSuffix(e, t));
}
function evaluateValueWithDelta(e, t) {
  return parseFloat((e + t).toFixed(FRACTION_DIGITS));
}
function trimSuffix(e, t) {
  return typeof t > "u" ? e : e.replace(new RegExp(`${t}$`), EMPTY_STRING$2);
}
function createRgbaColor(e, t) {
  if (e === "" || e === MIXED_STRING || t === "" || t === MIXED_STRING)
    return null;
  const n = convertHexColorToRgbColor(e);
  return n === null ? null : {
    ...n,
    a: parseInt(t, 10) / 100
  };
}
function normalizeUserInputColor(e) {
  const t = convertNamedColorToHexColor(e);
  if (t !== null)
    return t;
  const n = createHexColor(e).toUpperCase();
  return isValidHexColor(n) === !1 ? null : n;
}
function createHexColor(e) {
  switch (e.length) {
    case 0:
      return "";
    case 1:
      return Array(6).fill(e).join("");
    case 2:
      return Array(3).fill(e).join("");
    case 3:
    case 4:
    case 5:
      return `${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`;
    case 6:
      return e;
    default:
      return e.slice(0, 6);
  }
}
const textboxColor = "_textboxColor_69uub_1", color = "_color_69uub_13", disabled$2 = "_disabled_69uub_24", colorFill = "_colorFill_69uub_28", colorBorder = "_colorBorder_69uub_33", hexColorSelector = "_hexColorSelector_69uub_48", input$2 = "_input_69uub_57", hexColorInput = "_hexColorInput_69uub_80", opacityInput = "_opacityInput_69uub_84", border$1 = "_border_69uub_88", hasBorder$1 = "_hasBorder_69uub_98", divider = "_divider_69uub_109", underline$1 = "_underline_69uub_125", styles$b = {
  textboxColor,
  color,
  disabled: disabled$2,
  colorFill,
  colorBorder,
  hexColorSelector,
  input: input$2,
  hexColorInput,
  opacityInput,
  border: border$1,
  hasBorder: hasBorder$1,
  divider,
  underline: underline$1
};
function updateHexColor(e, t) {
  const n = convertHexColorToRgbColor(e);
  if (n === null)
    throw new Error("Invalid `hexColor`");
  const { r, g: c, b: s } = n, i = convertRgbColorToHexColor({
    b: updateValue(s, t),
    g: updateValue(c, t),
    r: updateValue(r, t)
  });
  if (i === null)
    throw new Error("Invalid `rgbColor`");
  return i;
}
function updateValue(e, t) {
  const n = e * 255 + t;
  return Math.min(Math.max(n, 0), 255) / 255;
}
const EMPTY_STRING$1 = "", TextboxColor = createComponent(
  function({
    disabled: e = !1,
    hexColor: t,
    hexColorPlaceholder: n,
    onHexColorInput: r = noop,
    onHexColorKeyDown: c = noop,
    onHexColorValueInput: s = noop,
    onOpacityInput: i = noop,
    onOpacityKeyDown: f = noop,
    onOpacityNumericValueInput: u = noop,
    onOpacityValueInput: h = noop,
    onRgbaColorValueInput: l = noop,
    opacity: a,
    opacityPlaceholder: m,
    propagateEscapeKeyDown: d = !0,
    revertOnEscapeKeyDown: I = !1,
    variant: g,
    ...y
  }, E) {
    const p = useRef(null), $ = useRef(null), D = useRef(!1), [V, Y] = useState(EMPTY_STRING$1), w = useCallback(function(T) {
      const G = getCurrentFromRef(p);
      G.value = T;
      const te = new window.Event("input", {
        bubbles: !0,
        cancelable: !0
      });
      G.dispatchEvent(te);
    }, []), O = useCallback(function(T) {
      const G = T.currentTarget.value.slice(1).toUpperCase();
      Y(G);
    }, []), H = useCallback(
      function(T) {
        const G = T.currentTarget.value.slice(1).toUpperCase();
        w(G);
      },
      [w]
    ), R = useCallback(
      function(T) {
        T.key === "Escape" && (I === !0 && (D.current = !0, w(V), Y(EMPTY_STRING$1)), d === !1 && T.stopPropagation(), T.currentTarget.blur());
      },
      [
        V,
        d,
        I,
        w
      ]
    ), k = useCallback(
      function() {
        if (D.current === !0) {
          D.current = !1;
          return;
        }
        if (t === EMPTY_STRING$1) {
          V !== EMPTY_STRING$1 && w(V), Y(EMPTY_STRING$1);
          return;
        }
        if (t !== MIXED_STRING) {
          const T = normalizeUserInputColor(t), G = T === null ? V : T;
          G !== t && w(G);
        }
        Y(EMPTY_STRING$1);
      },
      [t, V, w]
    ), z = useCallback(
      function(T) {
        Y(t), T.currentTarget.select();
      },
      [t]
    ), F = useCallback(
      function(T) {
        r(T);
        const G = T.currentTarget.value;
        if (s(G), G === EMPTY_STRING$1) {
          l(null);
          return;
        }
        const te = normalizeUserInputColor(G);
        if (te === null) {
          l(null);
          return;
        }
        const ne = createRgbaColor(te, a);
        l(ne);
      },
      [r, s, l, a]
    ), q = useCallback(
      function(T) {
        c(T);
        const G = T.key;
        if (G === "Escape") {
          I === !0 && (D.current = !0, w(V), Y(EMPTY_STRING$1)), d === !1 && T.stopPropagation(), T.currentTarget.blur();
          return;
        }
        const te = T.currentTarget;
        if (G === "ArrowDown" || G === "ArrowUp") {
          T.preventDefault();
          const ne = T.shiftKey === !0 ? 10 : 1, ce = updateHexColor(
            t === EMPTY_STRING$1 || t === MIXED_STRING ? G === "ArrowDown" ? "FFFFFF" : "000000" : t,
            G === "ArrowDown" ? -1 * ne : ne
          );
          w(ce), te.select();
          return;
        }
        T.ctrlKey === !0 || T.metaKey;
      },
      [
        t,
        c,
        V,
        d,
        I,
        w
      ]
    ), W = useCallback(
      function(T) {
        t === MIXED_STRING && T.preventDefault();
      },
      [t]
    ), Z = useCallback(
      function(T) {
        i(T);
        const G = T.currentTarget.value, te = createRgbaColor(t, G);
        l(te);
      },
      [t, i, l]
    ), C = useCallback(
      function(T) {
        u(
          T === null || T === MIXED_NUMBER ? T : T / 100
        );
      },
      [u]
    ), P = useCallback(function(T) {
      return T !== null;
    }, []), _ = parseOpacity(a), S = t !== EMPTY_STRING$1 && t !== MIXED_STRING, N = S === !0 ? normalizeUserInputColor(t) : "FFFFFF", J = N === null ? V : N;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: E,
        class: createClassName([
          styles$b.textboxColor,
          typeof g > "u" ? null : g === "border" ? styles$b.hasBorder : null,
          e === !0 ? styles$b.disabled : null
        ]),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { class: styles$b.color, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                class: styles$b.colorFill,
                style: S === !0 ? { backgroundColor: `#${J}` } : {}
              }
            ),
            _ === 1 ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                class: styles$b.colorFill,
                style: S === !0 ? {
                  backgroundColor: `#${J}`,
                  opacity: _
                } : {}
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$b.colorBorder })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              class: styles$b.hexColorSelector,
              disabled: e === !0,
              onFocus: O,
              onInput: H,
              onKeyDown: R,
              tabIndex: -1,
              type: "color",
              value: `#${J}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ...y,
              ref: p,
              class: createClassName([styles$b.input, styles$b.hexColorInput]),
              disabled: e === !0,
              onBlur: k,
              onFocus: z,
              onInput: F,
              onKeyDown: q,
              onMouseUp: W,
              placeholder: n,
              spellcheck: !1,
              tabIndex: 0,
              type: "text",
              value: t === MIXED_STRING ? "Mixed" : t
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            RawTextboxNumeric,
            {
              ref: $,
              class: createClassName([styles$b.input, styles$b.opacityInput]),
              disabled: e === !0,
              maximum: 100,
              minimum: 0,
              onInput: Z,
              onKeyDown: f,
              onNumericValueInput: C,
              onValueInput: h,
              placeholder: m,
              propagateEscapeKeyDown: d,
              revertOnEscapeKeyDown: I,
              suffix: "%",
              validateOnBlur: P,
              value: a
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$b.divider }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$b.border }),
          g === "underline" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$b.underline }) : null
        ]
      }
    );
  }
);
function parseOpacity(e) {
  return e === MIXED_STRING || e === EMPTY_STRING$1 ? 1 : parseInt(e, 10) / 100;
}
const textboxMultiline = "_textboxMultiline_1b7l0_1", grow = "_grow_1b7l0_6", ghost = "_ghost_1b7l0_10", textarea = "_textarea_1b7l0_11", disabled$1 = "_disabled_1b7l0_32", border = "_border_1b7l0_40", hasBorder = "_hasBorder_1b7l0_50", underline = "_underline_1b7l0_60", styles$a = {
  textboxMultiline,
  grow,
  ghost,
  textarea,
  disabled: disabled$1,
  border,
  hasBorder,
  underline
}, EMPTY_STRING = "", TextboxMultiline = createComponent(function({
  grow: e = !1,
  disabled: t = !1,
  onBlur: n = noop,
  onFocus: r = noop,
  onInput: c = noop,
  onKeyDown: s = noop,
  onValueInput: i = noop,
  onMouseDown: f = noop,
  placeholder: u,
  propagateEscapeKeyDown: h = !0,
  revertOnEscapeKeyDown: l = !1,
  rows: a = 3,
  spellCheck: m = !1,
  validateOnBlur: d,
  variant: I,
  value: g,
  ...y
}, E) {
  const p = useRef(null), [$, D] = useState(EMPTY_STRING), V = useCallback(function(z) {
    const F = getCurrentFromRef(p);
    F.value = z;
    const q = new window.Event("input", {
      bubbles: !0,
      cancelable: !0
    });
    F.dispatchEvent(q);
  }, []), Y = useCallback(
    function(z) {
      if (n(z), typeof d < "u") {
        const F = d(g);
        if (typeof F == "string") {
          V(F), D(EMPTY_STRING);
          return;
        }
        if (F === !1) {
          g !== $ && V($), D(EMPTY_STRING);
          return;
        }
      }
      D(EMPTY_STRING);
    },
    [n, $, V, d, g]
  ), w = useCallback(
    function(z) {
      r(z), D(g), z.currentTarget.select();
    },
    [r, g]
  ), O = useCallback(
    function(z) {
      c(z);
      const F = z.currentTarget.value;
      i(F);
    },
    [c, i]
  ), H = useCallback(
    function(z) {
      if (s(z), z.key === "Escape") {
        l === !0 && (V($), D(EMPTY_STRING)), h === !1 && z.stopPropagation(), z.currentTarget.blur();
        return;
      }
      g === MIXED_STRING && isKeyCodeCharacterGenerating(z.keyCode) === !1 && (z.preventDefault(), z.currentTarget.select());
    },
    [
      s,
      $,
      h,
      l,
      V,
      g
    ]
  ), R = useCallback(
    function(z) {
      f(z), g === MIXED_STRING && (z.preventDefault(), z.currentTarget.select());
    },
    [f, g]
  ), k = useCallback(
    function(z) {
      if (p.current = z, E !== null) {
        if (typeof E == "function") {
          E(z);
          return;
        }
        E.current = z;
      }
    },
    [E]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      class: createClassName([
        styles$a.textboxMultiline,
        typeof I > "u" ? null : I === "border" ? styles$a.hasBorder : null,
        e === !0 ? styles$a.grow : null,
        t === !0 ? styles$a.disabled : null
      ]),
      children: [
        e === !0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$a.ghost, children: g === MIXED_STRING ? "Mixed" : `${g} ` }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            ...y,
            ref: k,
            class: styles$a.textarea,
            disabled: t === !0,
            onBlur: Y,
            onFocus: w,
            onInput: O,
            onKeyDown: H,
            onMouseDown: R,
            placeholder: u,
            rows: a,
            spellcheck: m,
            tabIndex: 0,
            value: g === MIXED_STRING ? "Mixed" : g
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$a.border }),
        I === "underline" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$a.underline }) : null
      ]
    }
  );
}), input$1 = "_input_1byj7_1", textboxNumericStyles = {
  input: input$1
}, TextboxNumeric = createComponent(function({ icon: e, variant: t, ...n }, r) {
  if (typeof e == "string" && e.length !== 1)
    throw new Error(`String \`icon\` must be a single character: ${e}`);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      class: createClassName([
        textboxStyles.textbox,
        typeof t > "u" ? null : t === "border" ? textboxStyles.hasBorder : null,
        typeof e > "u" ? null : textboxStyles.hasIcon,
        n.disabled === !0 ? textboxStyles.disabled : null
      ]),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          RawTextboxNumeric,
          {
            ...n,
            ref: r,
            class: createClassName([
              textboxStyles.input,
              textboxNumericStyles.input
            ])
          }
        ),
        typeof e > "u" ? null : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: textboxStyles.icon, children: e }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: textboxStyles.border }),
        t === "underline" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: textboxStyles.underline }) : null
      ]
    }
  );
}), toggle = "_toggle_c2i94_1", input = "_input_c2i94_6", disabled = "_disabled_c2i94_18", box = "_box_c2i94_22", children$1 = "_children_c2i94_70", styles$9 = {
  toggle,
  input,
  disabled,
  box,
  switch: "_switch_c2i94_47",
  children: children$1
}, Toggle = createComponent(function({
  children: e,
  disabled: t = !1,
  onChange: n = noop,
  onKeyDown: r = noop,
  onValueChange: c = noop,
  propagateEscapeKeyDown: s = !0,
  value: i = !1,
  ...f
}) {
  const u = useCallback(
    function(l) {
      n(l);
      const a = l.currentTarget.checked === !0;
      c(a);
    },
    [n, c]
  ), h = useCallback(
    function(l) {
      r(l), l.key === "Escape" && (s === !1 && l.stopPropagation(), l.currentTarget.blur());
    },
    [s, r]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "label",
    {
      class: createClassName([
        styles$9.toggle,
        t === !0 ? styles$9.disabled : null
      ]),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ...f,
            checked: i === !0,
            class: styles$9.input,
            disabled: t === !0,
            onChange: u,
            onKeyDown: h,
            tabIndex: 0,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$9.box }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$9.switch }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$9.children, children: e })
      ]
    }
  );
});
function useFocusTrap(e) {
  useEffect(
    function() {
      const t = createFocusTrapKeyDownHandler(e);
      return window.addEventListener("keydown", t), function() {
        window.removeEventListener("keydown", t);
      };
    },
    [e]
  );
}
const INITIAL_FOCUS_DATA_ATTRIBUTE_NAME = "data-initial-focus";
function useInitialFocus() {
  return useEffect(function() {
    const e = document.querySelectorAll(
      `[${INITIAL_FOCUS_DATA_ATTRIBUTE_NAME}]:not([tabindex="-1"]`
    );
    if (e.length === 0)
      throw new Error(
        `No element with attribute \`${INITIAL_FOCUS_DATA_ATTRIBUTE_NAME}\``
      );
    const t = Array.prototype.slice.call(e).find(function(n) {
      const r = n;
      return r.type === "radio" && r.checked === !0;
    });
    if (typeof t < "u") {
      t.focus();
      return;
    }
    e[0].focus();
  }, []), {
    [INITIAL_FOCUS_DATA_ATTRIBUTE_NAME]: !0
  };
}
function useWindowKeyDown(e, t) {
  const n = useCallback(
    function(r) {
      r.key === e && t(r);
    },
    [e, t]
  );
  useEffect(
    function() {
      return window.addEventListener("keydown", n), function() {
        window.removeEventListener("keydown", n);
      };
    },
    [n]
  );
}
function useForm(e, t) {
  const { close: n, submit: r, transform: c, validate: s } = t, [i, f] = useState(e), u = useCallback(
    function(d, I) {
      if (typeof I > "u")
        throw new Error("`name` is `undefined`");
      f(function(g) {
        const y = {
          ...g,
          [I]: d
        };
        return typeof c > "u" ? y : c(y);
      });
    },
    [c]
  ), h = useCallback(
    function() {
      typeof s < "u" && s(i) === !1 || r(i);
    },
    [i, r, s]
  );
  useWindowKeyDown("Enter", h);
  const l = useCallback(
    function() {
      n(i);
    },
    [n, i]
  );
  useWindowKeyDown("Escape", l), useFocusTrap();
  const a = typeof s < "u" ? s(i) === !1 : !1, m = useInitialFocus();
  return {
    disabled: a,
    formState: i,
    handleSubmit: h,
    initialFocus: m,
    setFormState: u
  };
}
const mapResizeDirectionToStyles = {
  both: {
    cursor: "nwse-resize",
    height: "12px",
    width: "12px"
  },
  horizontal: {
    cursor: "ew-resize",
    height: "100%",
    width: "8px"
  },
  vertical: {
    cursor: "ns-resize",
    height: "8px",
    width: "100%"
  }
};
function useWindowResize(e, t = {}) {
  const n = window.innerHeight, r = window.innerWidth, c = typeof t.resizeBehaviorOnDoubleClick > "u" ? null : t.resizeBehaviorOnDoubleClick, s = typeof t.maxHeight > "u" ? Number.MAX_VALUE : t.maxHeight, i = typeof t.maxWidth > "u" ? Number.MAX_VALUE : t.maxWidth, f = typeof t.minHeight > "u" ? n : t.minHeight, u = typeof t.minWidth > "u" ? r : t.minWidth, h = typeof t.resizeDirection > "u" ? "both" : t.resizeDirection, l = useRef({
    height: n,
    width: r
  }), a = useCallback(
    function({ width: d, height: I }) {
      if (typeof d > "u" && typeof I > "u")
        throw new Error("Need at least one of `width` or `height`");
      typeof d < "u" && (l.current.width = Math.min(i, Math.max(u, d))), typeof I < "u" && (l.current.height = Math.min(
        s,
        Math.max(f, I)
      )), e(l.current);
    },
    [s, i, f, u, e]
  ), m = useCallback(
    function(d) {
      if (d === "horizontal") {
        l.current.width === r ? l.current.width = c === "minimize" ? u : i : l.current.width = r, e(l.current);
        return;
      }
      if (d === "vertical") {
        l.current.height === n ? l.current.height = c === "minimize" ? f : s : l.current.height = n, e(l.current);
        return;
      }
      l.current.width === r && l.current.height === n ? (l.current.width = c === "minimize" ? u : i, l.current.height = c === "minimize" ? f : s) : (l.current.width = r, l.current.height = n), e(l.current);
    },
    [
      n,
      r,
      s,
      i,
      f,
      u,
      e,
      c
    ]
  );
  return useEffect(
    function() {
      const d = [], I = {
        resizeDirection: h,
        setWindowSize: a,
        toggleWindowSize: c === null ? null : m
      };
      return h === "both" && (d.push(
        createResizeHandleElement({
          ...I,
          resizeDirection: "horizontal"
        })
      ), d.push(
        createResizeHandleElement({ ...I, resizeDirection: "vertical" })
      )), d.push(createResizeHandleElement(I)), function() {
        for (const g of d)
          g();
      };
    },
    [
      s,
      i,
      f,
      u,
      c,
      h,
      a,
      m
    ]
  ), a;
}
function createResizeHandleElement(e) {
  const { resizeDirection: t, setWindowSize: n, toggleWindowSize: r } = e, c = document.createElement("div");
  document.body.append(c);
  const { cursor: s, height: i, width: f } = mapResizeDirectionToStyles[t];
  c.style.cssText = `cursor: ${s}; position: fixed; z-index: var(--z-index-2); bottom: 0; right: 0; width: ${f}; height: ${i};`;
  let u = null;
  return c.addEventListener(
    "pointerdown",
    function(h) {
      u = {
        x: h.offsetX,
        y: h.offsetY
      }, c.setPointerCapture(h.pointerId);
    }
  ), c.addEventListener(
    "pointerup",
    function(h) {
      u = null, c.releasePointerCapture(h.pointerId);
    }
  ), c.addEventListener(
    "pointermove",
    function(h) {
      if (u === null)
        return;
      const l = t === "both" || t === "horizontal" ? Math.round(
        h.clientX + (c.offsetWidth - u.x)
      ) : void 0, a = t === "both" || t === "vertical" ? Math.round(
        h.clientY + (c.offsetHeight - u.y)
      ) : void 0;
      n({ height: a, width: l });
    }
  ), r !== null && c.addEventListener("dblclick", function() {
    r(t);
  }), function() {
    c.remove();
  };
}
const IconControlChevronUp8 = createIcon(
  "m3.64641 1.64648-3 3 .7071.70711 2.64645-2.64645 2.64645 2.64645.7071-.70711-3-3-.35355-.35355z",
  { height: 8, width: 8 }
), IconControlCheckboxMixed12 = createIcon(
  "M9 7H3V5h6z",
  { height: 12, width: 12 }
), IconAlignBottom16 = createIcon(
  "M8.35355 12.3536 8 12.7071l-.35355-.3535-3-3.00005.7071-.7071L7.5 10.7929V3h1v7.7929l2.1464-2.14645.7072.7071zM15 14v1H1v-1z",
  { height: 16, width: 16 }
), IconAlignMiddle16 = createIcon(
  "m8 6.20711.35355-.35356 2.00005-2-.70715-.7071L8.5 4.29289V0h-1v4.29289L6.35355 3.14645l-.7071.7071 2 2zm0 3.58578.35355.35351 2.00005 2-.70715.7072L8.5 11.7071V16h-1v-4.2929l-1.14645 1.1465-.7071-.7072 2-2zM1 8.5h14v-1H1z",
  { height: 16, width: 16 }
), IconAlignTop16 = createIcon(
  "M15 1H1v1h14zM8.35355 3.64645 8 3.29289l-.35355.35356-3 3 .7071.7071L7.5 5.20711V13h1V5.20711l2.1464 2.14644.7072-.7071z",
  { height: 16, width: 16 }
), IconAnchorHorizontal16 = createIcon(
  "M3.50021 7.49987v-2h-1V10.4999h1V8.49987h8.99999v2.00003h1V5.49987h-1v2z",
  { height: 16, width: 16 }
), IconAnchorVertical16 = createIcon(
  "M5.50006 2.50018h5.00004v1H8.50006v9.00002h2.00004v1H5.50006v-1h2V3.50018h-2z",
  { height: 16, width: 16 }
), IconArrowDown16 = createIcon(
  "m7.99998 12.7071-.35356-.3535-3-3.00005.70711-.7071 2.14645 2.14645V2.5h1v8.2929l2.14642-2.14645.7071.7071-2.99997 3.00005z",
  { height: 16, width: 16 }
), IconArrowLeft16 = createIcon(
  "m2.29291 8.00001.35355-.35356 3-3 .70711.70711-2.14645 2.14645H12.5v1H4.20712l2.14645 2.14649-.70711.7071-3-3.00004z",
  { height: 16, width: 16 }
), IconArrowLeftRight16 = createIcon(
  "m10.8534 4.64651 3 3.00001.3536.35355-.3536.35355-3 2.99998-.7071-.7071 2.1464-2.1464-8.58576.00019 2.14648 2.14651-.70711.7071-3-3.00003-.35355-.35356.35355-.35355 3-3 .70711.70711L3.707 7.50029l8.5858-.00019-2.1465-2.14648z",
  { height: 16, width: 16 }
), IconArrowRight16 = createIcon(
  "m12.7071 8.00001-.3535-.35356-3.00005-3-.7071.70711 2.14645 2.14645H2.5v1h8.2929L8.64645 10.6465l.7071.7071 3.00005-3.00004z",
  { height: 16, width: 16 }
), IconArrowUp16 = createIcon(
  "m7.99998 2.29289-.35356.35356-3 3 .70711.7071 2.14645-2.14644V12.5h1V4.20711l2.14642 2.14644.7071-.7071-2.99997-3z",
  { height: 16, width: 16 }
), IconArrowUpDown16 = createIcon(
  "m7.99979 1.79308.35356.35355 2.99995 3-.7071.70711-2.14638-2.14642.00019 8.58578 2.14649-2.1465.7071.7071-3.00001 3-.35355.3536-.35356-.3536-3-3 .70711-.7071 2.14642 2.1464-.00019-8.58574-2.14647 2.14648-.70711-.70711 3-3z",
  { height: 16, width: 16 }
), IconAutoLayoutHorizontalBottom16 = createIcon(
  "M7 13h2V3H7zm-4 0h2V5H3zm10 0h-2V7h2z",
  { height: 16, width: 16 }
), IconAutoLayoutHorizontalCenter16 = createIcon(
  "M7 13h2V3H7zm-4-1h2V4H3zm10-1h-2V5h2z",
  { height: 16, width: 16 }
), IconAutoLayoutHorizontalTop16 = createIcon(
  "M3 11h2V3H3zm4 2h2V3H7zm6-4h-2V3h2z",
  { height: 16, width: 16 }
), IconAutoLayoutVerticalCenter16 = createIcon(
  "M4 3v2h8V3zM3 7v2h10V7zm2 6v-2h6v2z",
  { height: 16, width: 16 }
), IconAutoLayoutVerticalLeft16 = createIcon(
  "M3 3v2h8V3zm0 4v2h10V7zm0 6v-2h6v2z",
  { height: 16, width: 16 }
), IconAutoLayoutVerticalRight16 = createIcon(
  "M5 3v2h8V3zM3 7v2h10V7zm4 6v-2h6v2z",
  { height: 16, width: 16 }
), IconCaretDown16 = createIcon(
  "m8 10 3-4H5z",
  { height: 16, width: 16 }
), IconCaretLeft16 = createIcon(
  "m4 8 4 3V5z",
  { height: 16, width: 16 }
), IconCaretUp16 = createIcon(
  "m8 6 3 4H5z",
  { height: 16, width: 16 }
), IconChevronDown16 = createIcon(
  "m7.646 9.708-3-3L5.354 6 8 8.647 10.646 6l.708.708-3 3-.354.353z",
  { height: 16, width: 16 }
), IconChevronUp16 = createIcon(
  "m8.354 6.292 3 3-.708.708L8 7.35299 5.354 10l-.708-.708 3-3L8 5.939z",
  { height: 16, width: 16 }
), IconCircleHelp16 = createIcon(
  "M13 8c0 2.761-2.239 5-5 5s-5-2.239-5-5 2.239-5 5-5 5 2.239 5 5m1 0c0 3.313-2.686 6-6 6s-6-2.687-6-6 2.686-6 6-6 6 2.687 6 6m-6.512.383c-.088.216-.133.506-.133.87h1l.016-.237c.029-.256.142-.478.34-.668l.316-.301c.248-.24.421-.457.52-.652.099-.198.148-.408.148-.63 0-.486-.152-.863-.457-1.128-.304-.268-.733-.403-1.285-.403-.547 0-.98.141-1.297.422-.315.281-.475.67-.48 1.168h1.133c.003-.147.035-.272.093-.374.024-.042.053-.08.086-.114.062-.063.134-.11.217-.14.075-.027.157-.04.248-.04.406 0 .61.22.61.66 0 .075-.01.148-.031.22-.02.067-.048.133-.087.198-.078.13-.235.301-.472.512-.235.209-.396.42-.485.637m-.07 1.64c-.117.112-.176.256-.176.43 0 .172.058.314.172.426.117.112.27.168.461.168.12 0 .227-.023.317-.068.052-.026.098-.06.14-.1.117-.112.176-.254.176-.426 0-.174-.06-.318-.18-.43-.117-.114-.268-.171-.453-.171-.094 0-.18.015-.258.044-.074.029-.14.071-.199.127",
  { height: 16, width: 16 }
), IconCircleInfo16 = createIcon(
  "M8 14c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6m0-1c-2.946 0-5-2.054-5-5s2.054-5 5-5 5 2.054 5 5-2.054 5-5 5m-.5-5.667h1v4h-1V9.5zm-.166-2c0-.368.298-.666.667-.666.368 0 .666.298.666.666 0 .369-.298.667-.666.667-.369 0-.667-.298-.667-.667",
  { height: 16, width: 16 }
), IconCode16 = createIcon(
  "m2.46405 8.242 3.89-3.889-.708-.707-4.242 4.243-.354.353.354.354 4.242 4.242.707-.707zM10.354 3.646l4.242 4.243.354.353-.354.354-4.243 4.242-.70695-.707L13.536 8.242 9.64605 4.353l.70695-.707z",
  { height: 16, width: 16 }
), IconConnector16 = createIcon(
  "m11.1464 2.85365 1.4981 1.49808c-1.7359-.10233-2.92093.18287-3.73546.77525C7.88 5.87537 7.573 7.02265 7.38356 8.03295c-.03829.20421-.07091.39751-.10247.58449l-.00001.00005v.00002c-.05134.30415-.09986.59158-.16533.88202-.10226.45369-.23085.83277-.42639 1.13557-.18831.2915-.44708.5257-.84261.6808-.2387.0936-.5358.1616-.90831.1899C4.7184 10.6403 3.93396 10.0001 3 10.0001c-1.10457 0-2 .8954-2 2s.89543 2 2 2c.92894 0 1.70996-.6333 1.93484-1.4917.48828-.0302.91098-.118 1.277-.2616.60057-.2355 1.02148-.6108 1.31755-1.0692.28884-.4472.44931-.9587.56189-1.45818.07023-.31158.12803-.65231.18348-.97918l.00001-.00001v-.00001c.0307-.18101.06069-.35777.09167-.52298.18556-.9897.44106-1.77992 1.13077-2.28152.59539-.43302 1.60889-.7169 3.42159-.56157l-1.7724 1.7724.7072.7071 2.5-2.5.3535-.35355-.3535-.35355-2.5-2.5zM4 12.0001c0-.5523-.44772-1-1-1s-1 .4477-1 1 .44772 1 1 1c.50341 0 .91994-.372.98972-.8561z",
  { height: 16, width: 16 }
), IconHyperlink16 = createIcon(
  "m5.52512 13.6568 2.65165-2.6516.70711.7071-2.65165 2.6517c-1.26921 1.2692-3.32699 1.2692-4.5962 0-1.2692-1.2692-1.2692-3.327 0-4.59624l2.65165-2.65165.70711.70711-2.65165 2.65168c-.87868.8786-.87868 2.3033 0 3.1819.87868.8787 2.3033.8787 3.18198 0m6.18718-4.77292-.7071-.70711 2.6516-2.65165c.8787-.87868.8787-2.3033 0-3.18198-.8786-.87868-2.3033-.87868-3.1819 0L7.82322 4.99479l-.70711-.70711 2.65165-2.65165c1.26924-1.2692 3.32704-1.2692 4.59624 0 1.2692 1.26921 1.2692 3.32699 0 4.5962zM6.26169 10.5043l4.24261-4.24261-.766-.76603L5.49566 9.7383z",
  { height: 16, width: 16 }
), IconLayerAnimated16 = createIcon(
  "M3 3h10v10H3zM2 3c0-.55228.44772-1 1-1h10c.5523 0 1 .44772 1 1v10c0 .5523-.4477 1-1 1H3c-.55228 0-1-.4477-1-1zm8.5 5L6.00003 5.5v5z",
  { height: 16, width: 16 }
), IconLayerComponent16 = createIcon(
  "M5.74273 4.74815 8 2.5002l2.2573 2.24795L8 6.9961zm-.9946 5.50915L2.50018 8l2.24795-2.25727L6.99608 8zm5.50917.9946-2.25732 2.2479-2.25727-2.2479 2.25727-2.24799zm3.2425-3.25189-2.248-2.25727-2.24791 2.25727 2.24791 2.25729z",
  { height: 16, width: 16 }
), IconLayerEllipse16 = createIcon(
  "M8 12c2.2091 0 4-1.7909 4-4 0-2.20914-1.7909-4-4-4-2.20914 0-4 1.79086-4 4 0 2.2091 1.79086 4 4 4m0 1c2.7614 0 5-2.2386 5-5 0-2.76142-2.2386-5-5-5-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5",
  { height: 16, width: 16 }
), IconLayerFrame16 = createIcon(
  "M6 2.5V5h4V2.5h1V5h2.5v1H11v4h2.5v1H11v2.5h-1V11H6v2.5H5V11H2.5v-1H5V6H2.5V5H5V2.5zm4 7.5V6H6v4z",
  { height: 16, width: 16 }
), IconLayerFrameCoverArt16 = createIcon(
  "M5 4h6c.5523 0 1 .44772 1 1v4H4V5c0-.55228.44772-1 1-1m-1 6v1c0 .5523.44772 1 1 1h6c.5523 0 1-.4477 1-1v-1zM3 5c0-1.10457.89543-2 2-2h6c1.1046 0 2 .89543 2 2v6c0 1.1046-.8954 2-2 2H5c-1.10457 0-2-.8954-2-2z",
  { height: 16, width: 16 }
), IconLayerFrameScrolling16 = createIcon(
  "m8.35357 2.6464-.35356-.35355-.35355.35355-2 2 .70711.70711 1.14644-1.14645v3.29289H4.20712l1.14645-1.14644-.70711-.70711-2 2-.35355.35355.35355.35356 2 1.99999.70711-.7071-1.14645-1.14645h3.29289v3.29285l-1.14644-1.1464-.70711.7071 2 2 .35355.3536.35356-.3536 2.00003-2-.70714-.7071-1.14645 1.1464V8.49995h3.29289L10.6465 9.6464l.7071.7071 2-1.99999.3535-.35356-.3535-.35355-2-2-.7071.70711 1.1464 1.14644H8.50001V4.20706l1.14645 1.14645.70714-.70711z",
  { height: 16, width: 16 }
), IconLayerFrameScrollingHorizontal16 = createIcon(
  "M12 4H3V3h10v1zm0 8h1v1H3v-1h1zm.3536-4.35355-2-2-.70715.7071L10.7929 7.5H5.20711l1.14644-1.14645-.7071-.7071-2 2L3.29289 8l.35356.35355 2 2.00005.7071-.70715L5.20711 8.5h5.58579L9.64645 9.64645l.70715.70715 2-2.00005L12.7071 8z",
  { height: 16, width: 16 }
), IconLayerFrameScrollingVertical16 = createIcon(
  "M4 4v9H3V3h1zm8 9h1V3h-1v9zM8.35355 3.64645 8 3.29289l-.35355.35356-2 2 .7071.7071L7.5 5.20711v5.58579L6.35355 9.64645l-.7071.70715 2 2L8 12.7071l.35355-.3535 2.00005-2-.70715-.70715L8.5 10.7929V5.20711l1.14645 1.14644.70715-.7071z",
  { height: 16, width: 16 }
), IconLayerGroup16 = createIcon(
  "M9 3H7v1h2zm2.5 9h.5v-.5h1V13h-1.5zM4 7v2H3V7zm8-2.5V4h-.5V3H13v1.5zM12 7v2h1V7zM4 4.5V4h.5V3H3v1.5zM3 12v-.5h1v.5h.5v1H3zm6 0H7v1h2z",
  { height: 16, width: 16 }
), IconLayerImage16 = createIcon(
  "M13 3H3v6.29289l2.14645-2.14644L5.5 6.79289l.35355.35356L11.7071 13H13zM3 13v-2.2929l2.5-2.49999L10.2929 13zM3 2c-.55228 0-1 .44772-1 1v10c0 .5523.44772 1 1 1h10c.5523 0 1-.4477 1-1V3c0-.55228-.4477-1-1-1zm8 4c0 .55228-.4477 1-1 1-.55228 0-1-.44772-1-1s.44772-1 1-1c.5523 0 1 .44772 1 1m1 0c0 1.10457-.8954 2-2 2-1.10457 0-2-.89543-2-2s.89543-2 2-2c1.1046 0 2 .89543 2 2",
  { height: 16, width: 16 }
), IconLayerInstance16 = createIcon(
  "m1.82825 8 .33587-.33588 5.5-5.5L8 1.82825l.33587.33587 5.50003 5.5L14.1717 8l-.3358.33587-5.50003 5.50003L8 14.1717l-.33588-.3358-5.5-5.50003zM8 12.8282 12.8282 8 8 3.17175 3.17175 8z",
  { height: 16, width: 16 }
), IconLayerLine16 = createIcon(
  "M3.5 7.5h9v1h-9z",
  { height: 16, width: 16 }
), IconLayerMask16 = createIcon(
  "M6.86036 3.64556C7.22433 3.55057 7.60626 3.5 8 3.5c2.4853 0 4.5 2.01472 4.5 4.5 0 2.4853-2.0147 4.5-4.5 4.5-.39375 0-.7757-.0506-1.13969-.1456C8.16184 11.3486 9 9.77215 9 7.99998c0-1.77215-.83814-3.34855-2.13964-4.35442M8 2.5C4.96243 2.5 2.5 4.96243 2.5 8c0 3.0376 2.46243 5.5 5.5 5.5 3.0376 0 5.5-2.4624 5.5-5.5 0-3.03757-2.4624-5.5-5.5-5.5",
  { height: 16, width: 16 }
), IconLayerRectangle16 = createIcon(
  "M12 4H4v8h8zM4 3H3v10h10V3h-1z",
  { height: 16, width: 16 }
), IconLayerSlice16 = createIcon(
  "M10 3H6v1h4zM4 4V3H3v1zM3 6h1v4H3zm9 0h1v4h-1zm1-2h-1V3h1zm-7 8h4v1H6zm-2 0H3v1h1zm8 1v-1h1v1z",
  { height: 16, width: 16 }
), IconLayerText16 = createIcon(
  "M3 3h10v3h-1V4H8.5v8H10v1H6v-1h1.5V4H4v2H3V3.5z",
  { height: 16, width: 16 }
), IconLayerVector16 = createIcon(
  "m4.315 6.336-.479-.143-.15.503.479.143zm.3-1.006-.479-.143-.15.503.479.143zm-.328-.646.479.143.15-.503-.479-.143zm.93-1.365-.479-.143-.15.503.479.143zm5.566 9.393.479.143.15-.503-.479-.143zm.93-1.365-.479-.143-.15.503.479.143zm-.328-.646.479.143.15-.503-.479-.143zm.3-1.006.479.143.15-.503-.479-.143zM5.5 3.25c.69 0 1.25-.56 1.25-1.25S6.19.75 5.5.75 4.25 1.31 4.25 2s.56 1.25 1.25 1.25m0-2c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75m5 11.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m0 2c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75M13.5 3c-.828 0-1.5.672-1.5 1.5 0 .455.206.857.526 1.132-.011-.009-.025-.013-.036-.023-.248.556-.568 1.231-.93 1.904C10.068 10.285 9.223 10.5 9 10.5c-.093 0-.266 0-.387-.546C8.5 9.445 8.5 8.711 8.5 8c0-.764 0-1.555-.137-2.171C8.119 4.731 7.487 4.5 7 4.5c-.934 0-1.935.93-3.049 2.823l-.416-.125-.15.503.301.09c-.042.076-.083.143-.126.222-.046.085-.083.165-.127.25l-.198-.059-.15.503.106.032c-.081.163-.162.321-.236.477l-.02-.006-.041.139c-.106.225-.216.456-.305.655.016.001.03.009.045.011C2.588 10.009 2.546 10 2.5 10c-.828 0-1.5.672-1.5 1.5S1.672 13 2.5 13 4 12.328 4 11.5c0-.455-.207-.857-.526-1.132.011.009.026.014.036.023.248-.556.568-1.231.93-1.904C5.932 5.715 6.777 5.5 7 5.5c.093 0 .266 0 .387.546C7.5 6.555 7.5 7.29 7.5 8c0 .764 0 1.555.137 2.171C7.881 11.269 8.513 11.5 9 11.5c.93 0 1.926-.921 3.034-2.796l.432.129.15-.503-.316-.095c.047-.085.093-.16.141-.249.041-.076.074-.147.114-.223l.212.063.15-.503-.12-.036c.081-.162.163-.321.237-.477l.033.01.068-.226c.096-.205.197-.417.279-.599-.016-.001-.029-.009-.045-.011.043.007.086.016.131.016.828 0 1.5-.672 1.5-1.5S14.328 3 13.5 3m-10 8.5c0 .551-.449 1-1 1-.551 0-1-.449-1-1 0-.551.449-1 1-1 .551 0 1 .449 1 1m10-6c-.551 0-1-.449-1-1 0-.551.449-1 1-1 .551 0 1 .449 1 1 0 .551-.449 1-1 1",
  { height: 16, width: 16 }
), IconLockLocked16 = createIcon(
  "M9.5 5.5V7h-3V5.5C6.5 4.67157 7.17157 4 8 4s1.5.67157 1.5 1.5M5.5 7V5.5C5.5 4.11929 6.61929 3 8 3s2.5 1.11929 2.5 2.5V7h.5c.2761 0 .5.22386.5.5v5c0 .2761-.2239.5-.5.5H5c-.27614 0-.5-.2239-.5-.5v-5c0-.27614.22386-.5.5-.5z",
  { height: 16, width: 16 }
), IconLockUnlocked16 = createIcon(
  "M10 6v1h.5c.2761 0 .5.22386.5.5v5c0 .2761-.2239.5-.5.5h-6c-.27614 0-.5-.2239-.5-.5v-5c0-.27614.22386-.5.5-.5H9V4.5C9 3.11929 10.1193 2 11.5 2S14 3.11929 14 4.5V6h-1V4.5c0-.82843-.6716-1.5-1.5-1.5S10 3.67157 10 4.5z",
  { height: 16, width: 16 }
), IconMenuCheckmarkBreadcrumb16 = createIcon(
  "M10 8c0 1.10457-.89543 2-2 2s-2-.89543-2-2 .89543-2 2-2 2 .89543 2 2",
  { height: 16, width: 16 }
), IconMenuCheckmarkMixed16 = createIcon(
  "M12 9H4.00003V7H12z",
  { height: 16, width: 16 }
), IconMoveDown16 = createIcon(
  "M7.49998 3.5H4v1h3.49998v7.2929L5.35353 9.64645l-.70711.70715 3 3 .35356.3535.35355-.3535 2.99997-3-.7071-.70715-2.14642 2.14645V4.5H12v-1H8.49998z",
  { height: 16, width: 16 }
), IconMoveRight16 = createIcon(
  "M4.5 4h-1v8h1V8.50004h7.2929L9.64645 10.6465l.70715.7071 3-3.00001.3535-.35355-.3535-.35356-3-3-.70715.70711 2.14645 2.14645H4.5z",
  { height: 16, width: 16 }
), IconOptionCheck16 = createIcon(
  "M12.654 5.40701 7 11.061 3.646 7.70701l.708-.707L7 9.64601l4.947-4.946z",
  { height: 16, width: 16 }
), IconOptionDisabled16 = createIcon(
  "M10 9H6V8h4z",
  { height: 16, width: 16 }
), IconOrientationLandscape16 = createIcon(
  "M2 5v6h12V5zm-1 6v1h14V4H1v1z",
  { height: 16, width: 16 }
), IconOrientationPortrait16 = createIcon(
  "M11 2H5v12h6zM5 1H4v14h8V1h-1z",
  { height: 16, width: 16 }
), IconPaddingHorizontal16 = createIcon(
  "M3 3v10h1V3zm2 10V3h1v10zm5-10v10h1V3zm2 0v10h1V3z",
  { height: 16, width: 16 }
), IconPaddingVertical16 = createIcon(
  "M13 3H3v1h10zM3 5h10v1H3zm10 5H3v1h10zm0 2H3v1h10z",
  { height: 16, width: 16 }
), IconSpaceHorizontal16 = createIcon(
  "M2 3h2v10H2v1h3V2H2zm10-1h3v1h-2v10h2v1h-3V2.5zm-4 9V5h1v6z",
  { height: 16, width: 16 }
), IconSpaceVertical16 = createIcon(
  "M2 2v3h12V2h-1v2H3V2zm9 7H5V8h6zm-9 3h12v3h-1v-2H3v2H2v-2.5z",
  { height: 16, width: 16 }
), IconStar16 = createIcon(
  "M10 5.5 8.53851 1.84629 7.99999.5l-.53851 1.34629L6 5.5H1l1.18159 1L5 8.88525 3.93641 12.5599 3.5 14.0676l1.29695-.8841L8 11l3.195 2.13L12.5 14l-.4507-1.5023L11 9l2.8571-2.5L15 5.5h-1.5186zm2.3386 1H9.32297l-.25145-.62861-1.07153-2.67881-1.07151 2.67881L6.67703 6.5H3.72955l1.91646 1.62193.49478.41873-.18022.62263-.72721 2.51251 2.20337-1.5021.55704-.3797.56093.3739 2.1896 1.4598-.7021-2.34035-.1849-.61625.4842-.42368z",
  { height: 16, width: 16 }
), IconStarFilled16 = createIcon(
  "M7.99999.5 10 5.5h5L11 9l1.5 5L8 11l-4.5 3.0676L5 8.88525 1 5.5h5z",
  { height: 16, width: 16 }
), IconSwap16 = createIcon(
  "m14.6096 5.68765-1.1747 1.46838A5.45572 5.45572 0 0 0 13.4083 7a5.50008 5.50008 0 0 0-3.80761-4.26192 5.49996 5.49996 0 0 0-6.16897 2.1991l.00014.0001.83045.55678.00014.0001a4.49984 4.49984 0 0 1 5.04715-1.7992 4.49969 4.49969 0 0 1 2.3057 1.62592 4.49893 4.49893 0 0 1 .862 2.22975l-2.2-1.46665-.55466.83205 2.99996 2 .3815.25427.2863-.35795 2-2.5zm-12.00004 1.5-2 2.5.78087.62465 1.1747-1.46833a5.50004 5.50004 0 0 0 7.28165 4.33673 5.50141 5.50141 0 0 0 2.08852-1.3383c.2326-.2383.4443-.4984.6318-.7778l.0012-.0018-.0002-.0001-.8304-.5568-.0002-.0001-.001.0016a4.5 4.5 0 0 1-2.22555 1.7312 4.50006 4.50006 0 0 1-2.82057.0664 4.49895 4.49895 0 0 1-2.30574-1.6259 4.49964 4.49964 0 0 1-.86199-2.22973l2.19999 1.46666.5547-.83205-3-2-.38142-.25428z",
  { height: 16, width: 16 }
), IconTarget16 = createIcon(
  "M8.5 3.02469V1.5h-1v1.52469C5.13779 3.25922 3.25922 5.13779 3.02469 7.5H1.5v1h1.52469c.23453 2.3622 2.1131 4.2408 4.47531 4.4753V14.5h1v-1.5247c2.3622-.2345 4.2408-2.1131 4.4753-4.4753H14.5v-1h-1.5247C12.7408 5.13779 10.8622 3.25922 8.5 3.02469m-1 1.00626V6.5h1V4.03095c1.8094.22562 3.2434 1.65969 3.4691 3.46905H9.5v1h2.4691c-.2257 1.8094-1.6597 3.2434-3.4691 3.4691V9.5h-1v2.4691C5.69064 11.7434 4.25657 10.3094 4.03095 8.5H6.5v-1H4.03095C4.25657 5.69064 5.69064 4.25657 7.5 4.03095",
  { height: 16, width: 16 }
), IconTextAlignCenter16 = createIcon(
  "M1 3h14v1H1zm3 4h8v1H4zm9 4H3v1h10z",
  { height: 16, width: 16 }
), IconTextAlignJustified16 = createIcon(
  "M1 3h14v1H1zm0 4h14v1H1zm14 4H1v1h14z",
  { height: 16, width: 16 }
), IconTextAlignLeft16 = createIcon(
  "M1 3h14v1H1zm0 4h8v1H1zm10 4H1v1h10z",
  { height: 16, width: 16 }
), IconTextAlignRight16 = createIcon(
  "M1 3h14v1H1zm6 4h8v1H7zm8 4H5v1h10z",
  { height: 16, width: 16 }
), IconTextDecorationStrikethrough16 = createIcon(
  "M5.90385 3.29714C6.55586 2.76942 7.42764 2.5 8.34865 2.5c.90705 0 1.75585.22833 2.40705.74249.6614.52221 1.0693 1.30081 1.1492 2.2943l-.9968.08021c-.0603-.74929-.3535-1.25915-.7721-1.58968C9.70715 3.68872 9.09715 3.5 8.34865 3.5c-.73456 0-1.37218.21549-1.81567.57444-.43411.35136-.70313.85443-.70313 1.50245 0 .61536.28495 1.0132.63919 1.29239.06.04729.12155.09075.18355.13072H5.2422c-.24551-.37335-.41235-.84224-.41235-1.42311 0-.95906.4126-1.74443 1.074-2.27975M10.8235 10h1.0695c.0686.2406.107.507.107.8014 0 .9711-.3731 1.7923-1.0647 2.3611-.6804.5595-1.62217.8375-2.70735.8375-1.10045 0-1.98643-.3107-2.62807-.8789-.6402-.5669-.98918-1.3476-1.09599-2.1992l.99222-.1245c.08281.6603.34282 1.1997.7667 1.575.42244.3741 1.05562.6276 1.96514.6276.92479 0 1.61902-.2372 2.07215-.6099.442-.3635.6999-.8916.6999-1.5887 0-.3243-.0663-.586-.1765-.8014M2 9h12V8H2z",
  { height: 16, width: 16 }
), IconTextDecorationUnderline16 = createIcon(
  "M5.5 8.5V3h-1v5.5C4.5 10.433 6.067 12 8 12s3.5-1.567 3.5-3.5V3h-1v5.5C10.5 9.88071 9.38071 11 8 11S5.5 9.88071 5.5 8.5M2 14v1h12v-1z",
  { height: 16, width: 16 }
), IconUpload16 = createIcon(
  "M8.35355 1.64631 8 1.29276l-.35355.35355-3 3 .7071.70711L7.5 3.20697v7.79293h1V3.20697l2.1464 2.14645.7072-.70711zM2 11.9998H1v3.0001h14v-3.0001h-1v2.0001H2z",
  { height: 16, width: 16 }
), IconVisibilityHidden16 = createIcon(
  "M13.5085 7.80119c.5554-.52755 1.0351-1.13396 1.421-1.80119h-1.1842c-1.2655 1.81421-3.3673 3-5.74544 3s-4.47994-1.18579-5.7454-3H1.07022c.38597.66728.86567 1.27373 1.42112 1.80131L.89648 9.39623l.70712.70707 1.65734-1.65738c.71072.52339 1.51119.93212 2.37412 1.19877L5.01804 11.866l.96352.2676.62619-2.25431C7.05984 9.95862 7.52501 10 7.99986 10c.47481 0 .93994-.04137 1.39199-.12069l.62615 2.25429.9636-.2676-.617-2.22127c.863-.26667 1.6635-.67545 2.3743-1.19891l1.6576 1.65748.7071-.70709z",
  { height: 16, width: 16 }
), IconVisibilityVisible16 = createIcon(
  "M8.00007 11C5.70021 11 3.67791 9.80581 2.5217 8c1.15621-1.80581 3.17851-3 5.47837-3 2.29983 0 4.32213 1.19419 5.47833 3-1.1562 1.80581-3.1785 3-5.47833 3m0-7C10.8781 4 13.3775 5.6211 14.635 8c-1.2575 2.3789-3.7569 4-6.63493 4-2.87805 0-5.37746-1.6211-6.63496-4 1.2575-2.3789 3.75691-4 6.63496-4m.0003 6c1.10457 0 2.00003-.89543 2.00003-2s-.89546-2-2.00003-2c-1.10457 0-2 .89543-2 2s.89543 2 2 2",
  { height: 16, width: 16 }
), IconWarning16 = createIcon(
  "m8 0 8 14.5H0zm0 4.38174c.49706 0 .9.40294.9.9v3.0878c0 .49706-.40294.9-.9.9s-.9-.40294-.9-.9v-3.0878c0-.49706.40294-.9.9-.9m1.10007 7.37506c0-.6075-.49248-1.1-1.1-1.1-.60751 0-1.1.4925-1.1 1.1v.0686c0 .6075.49249 1.1 1.1 1.1.60752 0 1.1-.4925 1.1-1.1z",
  { height: 16, width: 16 }
), IconWorld16 = createIcon(
  "M12.252 10.632C11.3703 12.0534 9.79568 13 8 13c-2.76142 0-5-2.2386-5-5 0-.43275.05498-.85266.15833-1.25313l1.04308.39116c.17215.06455.27211.24439.23605.42467l-.25129 1.25643c-.03545.17726.06061.35458.22845.42172l1.39677.55871a.375.375 0 0 1 .22845.27464l.31289 1.5645a.37514.37514 0 0 0 .10256.1916l.28708.2871c.18514.1851.4982.1283.60655-.11l1.46481-3.2226c.09692-.21324-.0232-.46217-.25044-.51898l-.96252-.24063a.37497.37497 0 0 1-.17422-.09864l-.94172-.94172a.375.375 0 0 0-.26516-.10983h-.73791a.375.375 0 0 1-.33541-.20729l-.46007-.92014c-.09956-.19913-.00472-.44066.20374-.51883l2.28603-.85726c.18298-.06862.28259-.26624.2289-.45414l-.24215-.84756C7.43502 3.02389 7.71472 3 8 3c.14661 0 .29176.00631.43517.01867l-.02726.21806a.37499.37499 0 0 0 .2044.38192l.35061.17531a.37498.37498 0 0 0 .32629.00441l.675-.315a.39535.39535 0 0 0 .07869-.04835c.7322.32818 1.3711.82736 1.8659 1.44673l-1.1416-.22832a.37505.37505 0 0 0-.2665.04616l-1.45293.87175c-.16802.10081-.2301.314-.14247.48926l.86605 1.73211A.37501.37501 0 0 0 10.1068 8h1.1103c.1675 0 .3146.11099.3606.27198zM14 8c0 3.3137-2.6863 6-6 6-3.31371 0-6-2.6863-6-6 0-3.31371 2.68629-6 6-6 3.3137 0 6 2.68629 6 6",
  { height: 16, width: 16 }
), IconAdjust32 = createIcon(
  "M12 15.95V23h1v-7.05c1.1411-.2316 2-1.2405 2-2.45 0-1.2095-.8589-2.2184-2-2.45V9h-1v2.05c-1.1411.2316-2 1.2405-2 2.45 0 1.2095.8589 2.2184 2 2.45m2-2.45c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5M19 9h1v7.05c1.1411.2316 2 1.2405 2 2.45 0 1.2095-.8589 2.2184-2 2.45V23h-1v-2.05c-1.1411-.2316-2-1.2405-2-2.45 0-1.2095.8589-2.2184 2-2.45zm2 9.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5",
  { height: 32, width: 32 }
), IconAngle32 = createIcon(
  "M12 12v8h8v-1h-3c0-2.2091-1.7909-4-4-4v-3zm1 4v3h3c0-1.6569-1.3431-3-3-3",
  { height: 32, width: 32 }
), IconAnimation32 = createIcon(
  "M10 10h12v12H10zm-1 0c0-.55228.44772-1 1-1h12c.5523 0 1 .44772 1 1v12c0 .5523-.4477 1-1 1H10c-.55228 0-1-.4477-1-1zm10 6-5-3v6z",
  { height: 32, width: 32 }
), IconArrowDownCircle32 = createIcon(
  "M9 16c0-3.866 3.134-7 7-7s7 3.134 7 7-3.134 7-7 7-7-3.134-7-7m-1 0c0-4.4183 3.5817-8 8-8s8 3.5817 8 8-3.5817 8-8 8-8-3.5817-8-8m8.3535 3.7464-.3536.3536-.3535-.3536-3-3 .7071-.7071 2.1464 2.1465v-6.2929h1v6.2929l2.1465-2.1465.7071.7071z",
  { height: 32, width: 32 }
), IconArrowLeftCircle32 = createIcon(
  "M16 9c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7m0-1c4.4183 0 8 3.5817 8 8s-3.5817 8-8 8-8-3.5817-8-8 3.5817-8 8-8m-3.7464 8.3535-.3536-.3536.3536-.3535 3-3 .7071.7071-2.1465 2.1464h6.2929v1h-6.2929l2.1465 2.1465-.7071.7071z",
  { height: 32, width: 32 }
), IconArrowLeftRight32 = createIcon(
  "m12.2071 16.5 1.6465 1.6464-.7071.7072-2.5-2.5L10.2929 16l.3536-.3536 2.5-2.5.7071.7072L12.2071 15.5h7.5858l-1.6464-1.6464.7071-.7072 2.5 2.5.3535.3536-.3535.3536-2.5 2.5-.7071-.7072L19.7929 16.5z",
  { height: 32, width: 32 }
), IconArrowRightCircle32 = createIcon(
  "M16 23c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7m0 1c-4.4183 0-8-3.5817-8-8s3.5817-8 8-8 8 3.5817 8 8-3.5817 8-8 8m3.7464-8.3535.3536.3536-.3536.3535-3 3-.7071-.7071 2.1465-2.1464h-6.2929v-1h6.2929l-2.1465-2.1465.7071-.7071z",
  { height: 32, width: 32 }
), IconArrowUpCircle32 = createIcon(
  "M23 16c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7m1 0c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8m-8.3535-3.7464L16 11.9l.3536.3536 3 3-.7071.7071L16.5 13.8142v6.2929h-1v-6.2929l-2.1464 2.1465-.7071-.7071z",
  { height: 32, width: 32 }
), IconArrowUpDown32 = createIcon(
  "m16.0005 10.2923.3535.3536 2.5 2.5-.7071.7071-1.6464-1.6464v7.5857l1.6464-1.6464.7071.7071-2.5 2.5-.3535.3536-.3536-.3536-2.5-2.5.7071-.7071 1.6465 1.6464v-7.5857L13.854 13.853l-.7071-.7071 2.5-2.5z",
  { height: 32, width: 32 }
), IconBell32 = createIcon(
  "M20 14v3c0 .7684.2889 1.4692.7639 2h-9.5278c.475-.5308.7639-1.2316.7639-2v-3c0-2.2091 1.7909-4 4-4 2.2091 0 4 1.7909 4 4m1 0v3c0 1.1046.8954 2 2 2v1H9v-1c1.1046 0 2-.8954 2-2v-3c0-2.7614 2.2386-5 5-5s5 2.2386 5 5m-5 9c-1.1046 0-2-.8954-2-2h-1c0 1.6569 1.3431 3 3 3s3-1.3431 3-3h-1c0 1.1046-.8954 2-2 2",
  { height: 32, width: 32 }
), IconBlend32 = createIcon(
  "M16.0016 11.0016c.2421.2504.4732.4895.6932.7185C18.8983 14.0124 20 15.2939 20 16.8519c.0025 1.0624-.388 2.1256-1.1716 2.9361-1.562 1.616-4.0947 1.616-5.6567 0-.7836-.8105-1.1742-1.8737-1.1717-2.9361 0-1.558 1.1018-2.8395 3.3053-5.1319.2201-.2289.4512-.468.6933-.7185l.001-.001.0005-.0005zm-2.1968 3.9096c.5019-.6803 1.2187-1.4542 2.1953-2.4708.9764 1.0166 1.6933 1.7905 2.1951 2.4708.5998.8133.8048 1.38.8048 1.9407v.0024c.0001.0486-.0008.0972-.0029.1457h-5.9942A3.37024 3.37024 0 0 1 13 16.8542v-.0023c0-.5607.205-1.1274.8048-1.9407",
  { height: 32, width: 32 }
), IconBlendEmpty32 = createIcon(
  "M16.6948 11.7201c-.22-.229-.4511-.4681-.6932-.7185-.0005-.0005-.001-.0011-.0015-.0016l-.0005.0005-.001.001c-.2421.2505-.4732.4896-.6933.7185C13.1018 14.0124 12 15.2939 12 16.8519c-.0025 1.0624.3881 2.1256 1.1717 2.9361 1.562 1.616 4.0947 1.616 5.6567 0 .7836-.8105 1.1741-1.8737 1.1716-2.9361 0-1.558-1.1017-2.8395-3.3052-5.1318m-.6947.7203c-.9766 1.0166-1.6934 1.7905-2.1953 2.4708-.5998.8133-.8048 1.38-.8048 1.9407v.0023c-.0019.8178.2984 1.6262.8907 2.2388 1.1689 1.2093 3.0498 1.2093 4.2188 0 .5921-.6126.8924-1.4209.8905-2.2387v-.0024c0-.5607-.205-1.1274-.8048-1.9407-.5018-.6803-1.2187-1.4542-2.1951-2.4708",
  { height: 32, width: 32 }
), IconCheckCircle32 = createIcon(
  "M23 15.9999c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7.00002 7-7.00002 7 3.13402 7 7.00002m1 0c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8.00002 8-8.00002 8 3.58172 8 8.00002m-8.0889 2.8654 4-4.4999-.8222-.7308-3.6125 4.0639-2.5875-2.5874-.7778.7778 3 2.9999.4125.4124z",
  { height: 32, width: 32 }
), IconCheckCircleFilled32 = createIcon(
  "M16 23.9999c4.4183 0 8-3.5817 8-8s-3.5817-8.00002-8-8.00002-8 3.58172-8 8.00002c0 4.4183 3.5817 8 8 8m-.0889-5.1346 4-4.4999-.8222-.7308-3.6125 4.0639-2.5875-2.5874-.7778.7778 3 2.9999.4125.4124z",
  { height: 32, width: 32 }
), IconChevronDown32 = createIcon(
  "m11.708 13.09-.708.708 4.999 5.206 4.9996-5.206-.708-.708-4.2916 4.5z",
  { height: 32, width: 32 }
), IconChevronLeft32 = createIcon(
  "M18.914 11.708 18.206 11 13 15.999l5.206 4.9996.708-.708-4.5-4.2916z",
  { height: 32, width: 32 }
), IconChevronRight32 = createIcon(
  "m13.09 11.708.708-.708 5.206 4.999-5.206 4.9996-.708-.708 4.5-4.2916z",
  { height: 32, width: 32 }
), IconChevronUp32 = createIcon(
  "m20.292 18.914.708-.708L16.001 13l-4.9996 5.206.708.708 4.2916-4.5z",
  { height: 32, width: 32 }
), IconCode32 = createIcon(
  "m10.414 16.0962 3.89-3.889-.708-.707-4.242 4.243-.354.353.354.354 4.242 4.242.707-.707zm7.89-4.596 4.242 4.243.354.353-.354.354-4.243 4.242-.707-.707 3.89-3.889-3.89-3.889.707-.707z",
  { height: 32, width: 32 }
), IconComponent32 = createIcon(
  "m12.0625 10.9375.7071.7071 2.5233 2.5233.7071.7071.7071-.7071 2.5233-2.5233.7071-.7071-.7071-.7071-2.5233-2.52329L16 7l-.7071.70711-2.5233 2.52329zm6.4608 0L16 13.4608l-2.5233-2.5233L16 8.41421zm-6.4608 10.125.7071.7071 2.5233 2.5233L16 25l.7071-.7071 2.5233-2.5233.7071-.7071-.7071-.7071-2.5233-2.5233L16 17.125l-.7071.7071-2.5233 2.5233zm6.4608 0L16 23.5858l-2.5233-2.5233L16 18.5392zM7.70711 16.7071 7 16l.70711-.7071 2.52329-2.5233.7071-.7071.7071.7071 2.5233 2.5233.7071.7071-.7071.7071-2.5233 2.5233-.7071.7071-.7071-.7071zm3.23039 1.8162L13.4608 16l-2.5233-2.5233L8.41421 16zM17.125 16l.7071.7071 2.5233 2.5233.7071.7071.7071-.7071 2.5233-2.5233L25 16l-.7071-.7071-2.5233-2.5233-.7071-.7071-.7071.7071-2.5233 2.5233zm6.4608 0-2.5233 2.5233L18.5392 16l2.5233-2.5233z",
  { height: 32, width: 32 }
), IconConnectionConnect32 = createIcon(
  "M15.5 9H9V8h7.5v5.708c.7355.3214 1.2865.9863 1.45 1.792h5.3429l-2.1465-2.1464.7072-.7072 3 3 .3535.3536-.3535.3536-3 3-.7072-.7072L23.2929 16.5H17.95c-.1635.8057-.7145 1.4706-1.45 1.792V24H9v-1h6.5v-4.5c-1.3807 0-2.5-1.1193-2.5-2.5s1.1193-2.5 2.5-2.5zm0 8.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5",
  { height: 32, width: 32 }
), IconConnectionDelete32 = createIcon(
  "M15.5 9H9V8h7.5v5.708c.883.3858 1.5 1.2668 1.5 2.292s-.617 1.9062-1.5 2.292V24H9v-1h6.5v-4.5c-1.3807 0-2.5-1.1193-2.5-2.5s1.1193-2.5 2.5-2.5zm7 7.7071 2.6464 2.6465.7072-.7072L23.2071 16l2.6465-2.6464-.7072-.7072L22.5 15.2929l-2.6464-2.6465-.7072.7072L21.7929 16l-2.6465 2.6464.7072.7072zm-7 .7929c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5",
  { height: 32, width: 32 }
), IconCornerRadius32 = createIcon(
  "M21 13h-4c-2.2091 0-4 1.7909-4 4v4h-1v-4c0-2.7614 2.2386-5 5-5h4z",
  { height: 32, width: 32 }
), IconCorners32 = createIcon(
  "M11 11h3v1h-2v2h-1v-2.5zm7 0h3v3h-1v-2h-2zm-6 9v-2h-1v3h3v-1zm9-2v3h-3v-1h2v-2z",
  { height: 32, width: 32 }
), IconDistributeHorizontalSpacing32 = createIcon(
  "M11 22.5v-13h-1v13zm11-13v13h-1v-13zm-5 3v7h-2v-7z",
  { height: 32, width: 32 }
), IconDistributeVerticalSpacing32 = createIcon(
  "M9.5 10h13v1h-13zm3 5h7v2h-7zm10 6h-13v1h13z",
  { height: 32, width: 32 }
), IconDraft32 = createIcon(
  "M10 8.5h7.7071l.1465.14645 4 3.99995.1464.1465V23.5H10V9zm1 1v13h10v-9h-4v-4zm7 .7071L20.2929 12.5H18z",
  { height: 32, width: 32 }
), IconEffects32 = createIcon(
  "M16.5 9v-.5h-1v3h1V11zm-5.0961 1.6967-.3536-.3536-.7071.7072.3536.3535 1.4142 1.4142.3535.3536.7071-.7071-.3535-.3536zm9.8995.7071.3536-.3535-.7071-.7071-.3536.3535-1.4142 1.4142-.3536.3536.7071.7071.3536-.3536zM9 15.5h-.5v1h3v-1H11zm12 0h-.5v1h3v-1H23zm-8.1819 4.3891.3535-.3536-.7071-.7071-.3535.3536-1.4143 1.4142-.3535.3536.7071.7071.3535-.3536zm7.0709-.7071-.3536-.3536-.7071.7071.3536.3536 1.4142 1.4142.3535.3536.7071-.7071-.3535-.3536zM16.5 21v-.5h-1v3h1V23zm.9978-5.0021c0 .8285-.6716 1.5-1.5 1.5s-1.5-.6715-1.5-1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5m1 0c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5",
  { height: 32, width: 32 }
), IconEllipsis32 = createIcon(
  "M11.5 16c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5m6 0c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5m4.5 1.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5",
  { height: 32, width: 32 }
), IconEyedropper32 = createIcon(
  "M22.4473 22.4c-.8.8-2 .8-2.8 0l-2.8001-2.8-.8.7c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l.7-.7-5.79995-5.8c-.4-.4-1-1.9 0-2.9.99995-1 2.49995-.4 2.89995 0l5.8 5.8.7001-.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-.7.7 2.8 2.8c.8.9.8 2.1 0 2.9M11.5472 10.5h-1v1l5.8 5.8 1-1c-.1 0-5.8-5.8-5.8-5.8",
  { height: 32, width: 32 }
), IconFolder32 = createIcon(
  "M9 10h7v2H9zm-1 2V9h9v3h7v11H8V13zm9 1H9v9h14v-9z",
  { height: 32, width: 32 }
), IconFrame32 = createIcon(
  "M11 24v-3H8v-1h3v-8H8v-1h3V8h1v3h8V8h1v3h3v1h-3v8h3v1h-3v3h-1v-3h-8v3zm9-4v-8h-8v8z",
  { height: 32, width: 32 }
), IconGrid32 = createIcon(
  "M11 11h3v3h-3zm-1-1h5v5h-5v-4zm1 8h3v3h-3zm-1-1h5v5h-5v-4zm11-6h-3v3h3zm-3-1h-1v5h5v-5h-1zm0 8h3v3h-3zm-1-1h5v5h-5v-4z",
  { height: 32, width: 32 }
), IconHyperlinkBreak32 = createIcon(
  "M13.0002 9v3h1V9zm9.1031.89644c-1.1618-1.16176-3.0454-1.16176-4.2072.00002l-2.7499 2.74994.7071.7071 2.7499-2.7499c.7713-.77128 2.0217-.77129 2.793 0 .7712.7712.7712 2.0216 0 2.7928l-2.75 2.75.7071.7071 2.75-2.75c1.1617-1.1617 1.1617-3.0453 0-4.20706M9.89632 22.1035c-1.16176-1.1617-1.16176-3.0453 0-4.2071l2.74998-2.75.7071.7071-2.75 2.75c-.77121.7713-.77121 2.0217 0 2.7929.7713.7713 2.0217.7713 2.7929 0l2.75-2.75.7071.7071-2.75 2.75c-1.1617 1.1618-3.0453 1.1618-4.20708 0M22.9997 19h-3v-1h3zm-3.9994 1v3h-1v-3zm-7.0006-7H8.99969v1h3.00001z",
  { height: 32, width: 32 }
), IconHyperlinkLinked32 = createIcon(
  "m13.5251 21.6569 2.6517-2.6517.7071.7071-2.6517 2.6517c-1.2692 1.2692-3.327 1.2692-4.59617 0-1.2692-1.2692-1.2692-3.327 0-4.5962l2.65167-2.6517.7071.7071-2.6517 2.6517c-.87864.8787-.87864 2.3033 0 3.182.8787.8786 2.3033.8786 3.182 0m6.1872-4.773-.7071-.7071 2.6516-2.6517c.8787-.8786.8787-2.3033 0-3.1819-.8786-.87872-2.3033-.87872-3.1819 0l-2.6517 2.6516-.7071-.7071 2.6517-2.65165c1.2692-1.2692 3.327-1.26921 4.5962 0 1.2692 1.26925 1.2692 3.32695 0 4.59615zm-5.4506 1.6204 4.2426-4.2426-.766-.766-4.2426 4.2426z",
  { height: 32, width: 32 }
), IconInfo32 = createIcon(
  "M9 16c0-3.866 3.134-7 7-7s7 3.134 7 7-3.134 7-7 7-7-3.134-7-7m7 8c-4.4183 0-8-3.5817-8-8s3.5817-8 8-8 8 3.5817 8 8-3.5817 8-8 8m-.5-4.5v-4h1v4zm1.25-6.4999c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-.0686c0-.4142.3358-.75.75-.75s.75.3358.75.75z",
  { height: 32, width: 32 }
), IconLayoutAlignBottom32 = createIcon(
  "M14.5 10v10h-2V10zm8 12v1h-13v-1zm-3-2v-6h-2v6z",
  { height: 32, width: 32 }
), IconLayoutAlignHorizontalCenters32 = createIcon(
  "M16.5 9.5h-1v3h-5v2h5v3h-3v2h3v3h1v-3h3v-2h-3v-3h5v-2h-5z",
  { height: 32, width: 32 }
), IconLayoutAlignLeft32 = createIcon(
  "M10 22.5H9v-13h1zm12-8H12v-2h10zm-10 5h6v-2h-6z",
  { height: 32, width: 32 }
), IconLayoutAlignRight32 = createIcon(
  "M22 22.5h1v-13h-1zm-12-8h10v-2H10zm10 5h-6v-2h6z",
  { height: 32, width: 32 }
), IconLayoutAlignTop32 = createIcon(
  "M14.5 22V12h-2v10zm8-12V9h-13v1zm-3 2v6h-2v-6z",
  { height: 32, width: 32 }
), IconLayoutAlignVerticalCenters32 = createIcon(
  "M12.5 15.5v-5h2v5h3v-3h2v3h3v1h-3v3h-2v-3h-3v5h-2v-5h-3v-1z",
  { height: 32, width: 32 }
), IconLayoutGridColumns32 = createIcon(
  "M9 9h3v14H9zm5.5 0h3v14h-3zM23 9h-3v14h3z",
  { height: 32, width: 32 }
), IconLayoutGridRows32 = createIcon(
  "M9 9h14v3H9zm0 5.5h14v3H9zM23 20H9v3h14z",
  { height: 32, width: 32 }
), IconLayoutGridUniform32 = createIcon(
  "M9 9h3v3H9zm11 0h3v3h-3zm-2.5 0h-3v3h3zM9 14.5h3v3H9zm14 0h-3v3h3zm-8.5 0h3v3h-3zM12 20H9v3h3zm8 0h3v3h-3zm-2.5 0h-3v3h3z",
  { height: 32, width: 32 }
), IconLayoutHorizontal32 = createIcon(
  "M11 11h3v10h-3zm-1-1h5v12h-5V11zm8 1h3v10h-3zm-1-1h5v12h-5V11z",
  { height: 32, width: 32 }
), IconLayoutVertical32 = createIcon(
  "M11 11h10v3H11zm-1-1h12v5H10v-4zm1 8h10v3H11zm-1-1h12v5H10v-4z",
  { height: 32, width: 32 }
), IconLetterSpacing32 = createIcon(
  "M8 22V10h1v12zm15 0V10h1v12zm-10.4517-2 2.8-8h1.3036l2.8 8h-.9536l-.7-2h-3.5964l-.7 2zm3.4518-7.1378L17.4483 17h-2.8964z",
  { height: 32, width: 32 }
), IconLibrary32 = createIcon(
  "M15.3732 23h1.2579c.2802-.3202.6157-.5974.995-.8187 1.4784-.8623 4.0049-.909 5.3864.1085H24.5v-9.2s-.7969-2.25-4.42-2.25c-1.8746 0-2.9016.6024-3.4563 1.1838-.3883.4071-.5451.8039-.5991.9764h-.0491c-.0541-.1725-.2108-.5693-.5992-.9764-.5546-.5814-1.5816-1.1838-3.4563-1.1838-3.62312 0-4.42 2.25-4.42 2.25v9.19h1.4875c1.3827-1.0184 3.9114-.9698 5.3887-.1044.3806.2229.7167.5021.997.8246M16.5 13.2888v8.4568c.1952-.1571.4032-.3002.6222-.428.9272-.5409 2.1146-.7958 3.2412-.787 1.0057.0079 2.0807.2274 2.9518.7592H23.5v-7.973a2.12867 2.12867 0 0 0-.03-.05c-.0861-.1382-.2356-.3387-.4745-.5447-.4605-.3973-1.3302-.8823-2.9155-.8823-1.5862 0-2.3403.4837-2.6945.835-.1881.1867-.2951.3671-.353.4899-.029.0615-.0453.1078-.0528.1316-.0038.0118-.0053.0178-.0051.0169l.0016-.0066.0016-.0074.0011-.0048.0005-.0027.0003-.0014c0-.0001.0001-.0003-.0052-.0015zm-1 0h-.4745c-.0053.0012-.0052.0014-.0052.0015l.0003.0014.0005.0027.0011.0048.0016.0074.0016.0066c.0002.0009-.0013-.0051-.0051-.0169-.0075-.0238-.0238-.0701-.0528-.1316-.0579-.1228-.1649-.3032-.353-.4899-.3542-.3513-1.1083-.835-2.6945-.835-1.5853 0-2.45494.485-2.91551.8823-.2389.206-.38841.4065-.47443.5447a1.84294 1.84294 0 0 0-.03006.05v7.963h.18483c.8719-.5323 1.94797-.7515 2.95447-.7586 1.1274-.0079 2.3154.2484 3.2424.7914.2176.1275.4243.2702.6183.4266z",
  { height: 32, width: 32 }
), IconLineHeight32 = createIcon(
  "M23 10H9V9h14zm0 13H9v-1h14zm-10.4517-3 2.8-8h1.3036l2.8 8h-.9536l-.7-2h-3.5964l-.7 2zm3.4518-7.1378L17.4483 17h-2.8964z",
  { height: 32, width: 32 }
), IconLinkBreak32 = createIcon(
  "M18 14v-2c0-1.1046-.8954-2-2-2s-2 .8954-2 2v2h-1v-2c0-1.6569 1.3431-3 3-3s3 1.3431 3 3v2zm1 4h-1v2c0 1.1046-.8954 2-2 2s-2-.8954-2-2v-2h-1v2c0 1.6569 1.3431 3 3 3s3-1.3431 3-3z",
  { height: 32, width: 32 }
), IconLinkLinked32 = createIcon(
  "M16 10c1.1046 0 2 .8954 2 2v2h1v-2c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v2h1v-2c0-1.1046.8954-2 2-2m2 8h1v2c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3v-2h1v2c0 1.1046.8954 2 2 2s2-.8954 2-2zm-2.5-5v6h1v-6z",
  { height: 32, width: 32 }
), IconList32 = createIcon(
  "M23 10H9v1h14zM9 15.5h14v1H9zM9 21h14v1H9z",
  { height: 32, width: 32 }
), IconListDetailed32 = createIcon(
  "M12 10h-2v1h2zm0 10h-2v1h2zm-2-5h2v1h-2zm12-5h-8v1h8zm-8 10h8v1h-8zm8-5h-8v1h8z",
  { height: 32, width: 32 }
), IconLockLocked32 = createIcon(
  "M17.5 13.5V15h-3v-1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5m-4 1.5v-1.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5V15h.5c.2761 0 .5.2239.5.5v5c0 .2761-.2239.5-.5.5h-6c-.2761 0-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5z",
  { height: 32, width: 32 }
), IconLockUnlocked32 = createIcon(
  "M18 14v1h.5c.2761 0 .5.2239.5.5v5c0 .2761-.2239.5-.5.5h-6c-.2761 0-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5H17v-2.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5V14h-1v-1.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5z",
  { height: 32, width: 32 }
), IconMegaphone32 = createIcon(
  "M9.5 12H12v5H9.5C8.11929 17 7 15.8807 7 14.5 7 13.1192 8.11929 12 9.5 12m3.5 5v-5.0037a13.00039 13.00039 0 0 0 6.3548-1.835L20 9.77606v8.75714l-1.4686-.5916A12.99982 12.99982 0 0 0 13.6738 17zm-.3103-6H9.5C7.567 11 6 12.567 6 14.5c0 1.875 1.47447 3.4057 3.32719 3.4958l.00614.0184 1.21087 3.6325c.2722.8166 1.0365 1.3675 1.8973 1.3675h1.1711c.6825 0 1.1645-.6687.9487-1.3162L13.3286 18h.3452c1.5365 0 3.0587.295 4.4839.8692l2.1555.8683c.3286.1324.6868-.1095.6868-.4638V8.89512c0-.38818-.4231-.62831-.7563-.42929l-1.4016.83694A11.99989 11.99989 0 0 1 12.6897 11m-1.1969 10.3304-1.1054-3.3162h1.8918l1.3334 4h-1.1711c-.4304 0-.8126-.2754-.9487-.6838M23 12.5c.8284 0 1.5.6716 1.5 1.5s-.6716 1.5-1.5 1.5v1c1.3807 0 2.5-1.1193 2.5-2.5s-1.1193-2.5-2.5-2.5z",
  { height: 32, width: 32 }
), IconMinus32 = createIcon(
  "M21.5 16.5h-11v-1h11z",
  { height: 32, width: 32 }
), IconMissingFonts32 = createIcon(
  "M20.1797 17.6992h-1.1172c-.0234-1.4609.4063-1.9492 1.1641-2.414.4765-.293.8281-.6993.8281-1.2774 0-.6914-.5391-1.1328-1.2031-1.1328-.5977 0-1.1875.3633-1.2344 1.1914h-1.1875c.0508-1.4062 1.1055-2.1758 2.4219-2.1758 1.4336 0 2.3945.8594 2.3945 2.1289 0 .8555-.4063 1.4532-1.1055 1.8789-.7109.4375-.9609.8282-.9609 1.8008m.2539 1.5938c0 .4336-.3555.7812-.7813.7812-.4296 0-.7812-.3476-.7812-.7812 0-.4258.3516-.7774.7812-.7774.4258 0 .7813.3516.7813.7774M9 20l3.1111-8h1.0851l3.1111 8h-1.0729l-.7778-2h-3.6059l-.7777 2zm3.6537-6.6361L14.0677 17h-2.8281z",
  { height: 32, width: 32 }
), IconNavigateBack32 = createIcon(
  "M23 15H11.7101l3.4002-3.3885-.7059-.7083L9.79167 15.5l4.61273 4.5968.7059-.7083L11.7101 16H23z",
  { height: 32, width: 32 }
), IconNavigateTo32 = createIcon(
  "M9 15h11.2899l-3.4002-3.3885.7059-.7083L22.2083 15.5l-4.6127 4.5968-.7059-.7083L20.2899 16H9z",
  { height: 32, width: 32 }
), IconNotice32 = createIcon(
  "M9 16c0 3.866 3.134 7 7 7s7-3.134 7-7-3.134-7-7-7-7 3.134-7 7m7-8c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8-3.5817-8-8-8m0 3.7499c.4142 0 .75.3358.75.75v3.126c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-3.126c0-.4142.3358-.75.75-.75m1 7.25c0-.5523-.4477-1-1-1s-1 .4477-1 1v.0686c0 .5523.4477 1 1 1s1-.4477 1-1z",
  { height: 32, width: 32 }
), IconPaddingHorizontal32 = createIcon(
  "M9 23V9h1v14zm13 0V9h1v14zm-9-10h6v6h-6zm-1-1h8v8h-8v-7z",
  { height: 32, width: 32 }
), IconPaddingVertical32 = createIcon(
  "M23 10H9V9h14zm-4 3h-6v6h6zm-6-1h-1v8h8v-8h-1zM9 23h14v-1H9z",
  { height: 32, width: 32 }
), IconParagraphIndent32 = createIcon(
  "M11.8536 10.1464 9.35355 7.64642l-.7071.70711 1.64645 1.64645H5V11h5.2929l-1.64645 1.6464.7071.7071 2.50005-2.5.3535-.3535zM23 9.99998h-9V11h9zM23 14H9v1h14zm0 4H9v1h14zm0 4H9v1h14z",
  { height: 32, width: 32 }
), IconParagraphSpacing32 = createIcon(
  "M23 9H9V8h14zm-7 .79289.3536.35351 2 2-.7072.7072L16.5 11.7071v4.5858l1.1464-1.1465.7072.7072-2 2-.3536.3535-.3536-.3535-2-2 .7072-.7072L15.5 16.2929v-4.5858l-1.1464 1.1465-.7072-.7072 2-2zM23 19v1H9v-1zm0 4v1H9v-1z",
  { height: 32, width: 32 }
), IconPencil32 = createIcon(
  "M20.7729 9.14867c.3905-.39053 1.0237-.39053 1.4142 0l1.4142 1.41423c.3905.3905.3905 1.0237 0 1.4142l-1.4142 1.4142-2.8284-2.8283-.7071.7071 2.8283 2.8283-8.2711 8.2712-3.53555.7071.70715-3.5355zM9.46079 24.139l4.24101-.8482 10.6066-10.6066c.781-.781.781-2.0474 0-2.82843l-1.4142-1.41421c-.7811-.78105-2.0474-.78105-2.8284 0L9.45916 19.0482l-.8482 4.241-.21246 1.0623z",
  { height: 32, width: 32 }
), IconPlay32 = createIcon(
  "m13 10.0979.765.4781 8 5 .6784.424-.6784.424-8 5-.765.4781V11zm1 1.8042v8.1958L20.5566 16z",
  { height: 32, width: 32 }
), IconPlugin32 = createIcon(
  "M16 8c-1.2267 0-2 .71059-2 1.5 0 .4208.1997.8505.5583 1.1856.2576.2407.2531.5786.1919.7826-.0599.1998-.2622.5318-.6741.5318H11v10h10v-2.5067c-.4325.3151-.9507.5067-1.5.5067-1.5578 0-2.5-1.4653-2.5-3s.9422-3 2.5-3c.5493 0 1.0675.1916 1.5.5067V12h-3.0761c-.4119 0-.6142-.332-.6741-.5318-.0612-.204-.0657-.5419.1919-.7826C17.8003 10.3505 18 9.9208 18 9.5c0-.78941-.7733-1.5-2-1.5m-3 1.5C13 7.9422 14.4653 7 16 7s3 .9422 3 2.5c0 .5493-.1916 1.0675-.5067 1.5H21c.5523 0 1 .4477 1 1v3.0761c0 .4119-.332.6142-.5318.6741-.204.0612-.5419.0657-.7826-.1919C20.3505 15.1997 19.9208 15 19.5 15c-.7894 0-1.5.7733-1.5 2 0 1.2267.7106 2 1.5 2 .4208 0 .8505-.1997 1.1856-.5583.2407-.2576.5786-.2531.7826-.1919.1998.0599.5318.2622.5318.6741V22c0 .5523-.4477 1-1 1H11c-.5523 0-1-.4477-1-1V12c0-.5523.4477-1 1-1h2.5067C13.1916 10.5675 13 10.0493 13 9.5",
  { height: 32, width: 32 }
), IconPlus32 = createIcon(
  "M15.5 15.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1z",
  { height: 32, width: 32 }
), IconRecent32 = createIcon(
  "M23 16c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7m1 0c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8m-9-4v5h5v-1h-4v-4z",
  { height: 32, width: 32 }
), IconResetInstance32 = createIcon(
  "m6.79291 15.5.35355-.3535 8.00004-8.00004.3535-.35355.3536.35355 8 8.00004.3535.3535-.7071.7071-.3535-.3535L15.5 8.20712 8.20712 15.5 15.5 22.7929l3.6465-3.6464.3535-.3536.7071.7071-.3535.3536-4 4-.3536.3535-.3535-.3535-8.00004-8zm7.91419-.5H17c3.3137 0 6 2.6863 6 6 0 1.6569-.6716 3.1569-1.7574 4.2427l-.7071-.7072C21.4404 23.6307 22 22.3807 22 21c0-2.7614-2.2386-5-5-5h-2.2929l1.6465 1.6465-.7072.7071-2.5-2.5-.3535-.3536.3535-.3535 2.5-2.5.7072.7071z",
  { height: 32, width: 32 }
), IconResizeToFit32 = createIcon(
  "M8.64642 9.35353 12.2929 13H9.99998v1H14V9.99998h-1v2.29292L9.35353 8.64642zM19.7071 13l3.6464-3.64647-.7071-.70711L19 12.2929V9.99998h-1V14h4v-1zm0 6 3.6464 3.6464-.7071.7071L19 19.7071V22h-1v-4h4v1zm-7.4142 0-3.64648 3.6464.70711.7071L13 19.7071V22h1v-4H9.99998v1z",
  { height: 32, width: 32 }
), IconReturn32 = createIcon(
  "m11.7071 14 2.6465 2.6464-.7071.7071-3.5-3.5-.35359-.3535.35359-.3536 3.5-3.49998.7071.70708L11.7071 13H15.5c3.5762 0 6.5 2.9238 6.5 6.5V21h-1v-1.5c0-3.0239-2.4761-5.5-5.5-5.5z",
  { height: 32, width: 32 }
), IconRotate32 = createIcon(
  "M16 8c3.866 0 7 3.134 7 7v2.7929l-2.1464-2.1465-.7072.7072 3 3 .3536.3535.3536-.3535 3-3-.7072-.7072L24 17.7929V15c0-4.4183-3.5817-8-8-8zm0 7H8v8h8zm-8-1H7v10h10V14h-1z",
  { height: 32, width: 32 }
), IconScale32 = createIcon(
  "M24 23.5v.5H8V8h5v1H9v14h14v-4h1zM13.5 19H13v-6h1v4.2929L22.2929 9H18V8h6v6h-1V9.70711L14.7071 18H19v1z",
  { height: 32, width: 32 }
), IconSearchLarge32 = createIcon(
  "M20 15c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5 2.2386-5 5-5 5 2.2386 5 5m-1.1256 4.5815C17.8291 20.4664 16.4769 21 15 21c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6c0 1.4769-.5336 2.8291-1.4185 3.8744l4.2721 4.272-.7072.7072z",
  { height: 32, width: 32 }
), IconShare32 = createIcon(
  "M17.5 13c0-1.3807 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.1193 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.1193-2.5-2.5M20 9.5c-1.933 0-3.5 1.567-3.5 3.5 0 1.442.872 2.6803 2.1175 3.2164-1.1371.3667-2.0766 1.1736-2.6175 2.22-.5409-1.0464-1.4803-1.8533-2.6175-2.22C14.628 15.6803 15.5 14.442 15.5 13c0-1.933-1.567-3.5-3.5-3.5S8.5 11.067 8.5 13c0 1.442.87203 2.6803 2.1175 3.2164C8.80861 16.7997 7.5 18.497 7.5 20.5V22h17v-1.5c0-2.003-1.3086-3.7003-3.1175-4.2836C22.628 15.6803 23.5 14.442 23.5 13c0-1.933-1.567-3.5-3.5-3.5M16.5 21v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5v.5zm-1-.5v.5h-7v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5m-6-7.5c0-1.3807 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.1193 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.1193-2.5-2.5",
  { height: 32, width: 32 }
), IconSmiley32 = createIcon(
  "M23 16c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7m1 0c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8m-8.0001 4c-1.8638 0-3.4299-1.2748-3.8739-3h1.0446c.4119 1.1652 1.5231 2 2.8293 2 1.3063 0 2.4175-.8348 2.8293-2h1.0447c-.444 1.7252-2.0101 3-3.874 3M19.5 14.125c0 .4832-.3918.875-.875.875s-.875-.3918-.875-.875.3918-.875.875-.875.875.3918.875.875M13.125 15c.4832 0 .875-.3918.875-.875s-.3918-.875-.875-.875-.875.3918-.875.875.3918.875.875.875",
  { height: 32, width: 32 }
), IconSpacingHorizontal32 = createIcon(
  "M9.5 22h3V10h-3v1h2v10h-2zm13-11h-2v10h2v1h-3V10h3zm-7 2v6h1v-6z",
  { height: 32, width: 32 }
), IconSpacingVertical32 = createIcon(
  "M10 9.5v3h12v-3h-1v2H11v-2zm11 13v-2H11v2h-1v-3h12v3zm-2-7h-6v1h6z",
  { height: 32, width: 32 }
), IconStar32 = createIcon(
  "m18.5001 13.5-1.973-5.10783-.5377-1.39205-.5337 1.39358L13.5001 13.5H6.50006l1.40751 1 4.46783 3.1742-1.7314 5.2893-.5325 1.6267 1.3826-1.0091L15.9894 20.3l4.4953 3.2811 1.3825 1.0091-.5324-1.6267-1.7314-5.2893 4.484-3.1742 1.4127-1h-1.7308zm3.8566 1h-4.5424l-.2471-.6397-1.5738-4.07455-1.5595 4.07185-.246.6424H9.63415l3.32045 2.359.6002.4265-.2291.6998-1.2992 3.9691 3.3733-2.4621.5896-.4304.5895.4304 3.3733 2.4621-1.2992-3.9691-.2295-.701.6021-.4262z",
  { height: 32, width: 32 }
), IconStarFilled32 = createIcon(
  "M15.9894 7.00012 18.5001 13.5h7l-5.8967 4.1742 2.2638 6.916L15.9894 20.3l-5.8779 4.2902 2.2639-6.916L6.50006 13.5h7.00004z",
  { height: 32, width: 32 }
), IconStrokeWeight32 = createIcon(
  "M10 10h12v1H10zm0 4h12v2H10zm12 5H10v3h12z",
  { height: 32, width: 32 }
), IconStyles32 = createIcon(
  "M11.5 13c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5m6 0c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5m1.5 7.5c-.8284 0-1.5-.6716-1.5-1.5s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5-.6716 1.5-1.5 1.5M11.5 19c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5",
  { height: 32, width: 32 }
), IconSwap32 = createIcon(
  "m23 13.1877-1.1747 1.4683a5.51905 5.51905 0 0 0-.0265-.156 5.49981 5.49981 0 0 0-.9894-2.2746 5.50027 5.50027 0 0 0-6.2658-1.9061 5.50036 5.50036 0 0 0-2.0884 1.3383 5.49027 5.49027 0 0 0-.633.7796l.0001.0001.8305.5568.0001.0001a4.4999 4.4999 0 0 1 2.2266-1.7328A4.49983 4.49983 0 0 1 17.7 11.195a4.4987 4.4987 0 0 1 2.3058 1.6259c.4847.6541.7812 1.4251.862 2.2297l-2.2-1.4666-.5547.832 3 2 .3814.2543.2864-.358 2-2.5zm-12 1.5-2 2.5.78087.6246 1.17473-1.4683c.0081.0521.0169.1041.0265.156.1515.8194.4881 1.5981.9894 2.2746a5.50042 5.50042 0 0 0 2.8182 1.9873 5.50033 5.50033 0 0 0 3.4475-.0812 5.50073 5.50073 0 0 0 2.0885-1.3383c.2326-.2383.4444-.4984.6318-.7778l.0012-.0018-.0001-.0001-.8305-.5568-.0001-.0001-.0011.0016a4.5001 4.5001 0 0 1-2.2255 1.7312 4.50016 4.50016 0 0 1-2.8206.0664 4.49885 4.49885 0 0 1-2.3057-1.6259 4.49861 4.49861 0 0 1-.862-2.2297l2.2 1.4666.5547-.832-3-2-.3814-.2543z",
  { height: 32, width: 32 }
), IconTarget32 = createIcon(
  "M15.5 14v-2.9753c-2.3622.2345-4.2408 2.1131-4.4753 4.4753H14v1h-2.9753c.2345 2.3622 2.1131 4.2408 4.4753 4.4753V18h1v2.9753c2.3622-.2345 4.2408-2.1131 4.4753-4.4753H18v-1h2.9753c-.2345-2.3622-2.1131-4.2408-4.4753-4.4753V14zm6.4794 1.5c-.2404-2.9149-2.5645-5.239-5.4794-5.4795V8h-1v2.0205c-2.9149.2405-5.239 2.5646-5.4795 5.4795H8v1h2.0205c.2405 2.9149 2.5646 5.239 5.4795 5.4795V24h1v-2.0205c2.9149-.2405 5.239-2.5646 5.4794-5.4795H24v-1z",
  { height: 32, width: 32 }
), IconTidyGrid32 = createIcon(
  "M10 10h2v2h-2zm10 0h2v2h-2zm-8 5h-2v2h2zm8 0h2v2h-2zm-8 5h-2v2h2zm8 0h2v2h-2zm-3-10h-2v2h2zm-2 5h2v2h-2zm2 5h-2v2h2z",
  { height: 32, width: 32 }
), IconTidyListHorizontal32 = createIcon(
  "M10 22.5v-13h2v13zm5 0v-13h2v13zm5-13v13h2v-13z",
  { height: 32, width: 32 }
), IconTidyListVertical32 = createIcon(
  "M9.5 10h13v2h-13zm0 5h13v2h-13zm13 5h-13v2h13z",
  { height: 32, width: 32 }
), IconTimer32 = createIcon(
  "M19 8h-6V7h6zm4 9c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7c1.7683 0 3.3835.6557 4.6157 1.7372l.0912.0912.5559.5559C22.3443 13.6165 23 15.2317 23 17m-.2854-4.3508.1136-.1137.7071-.7071.7071-.7071-.7071-.7071-.7071-.70709L22.1211 9l-.7071.70711-.7071.70709-.0676.0676C19.3308 9.54882 17.7295 9 16 9c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8c0-1.6044-.4723-3.0985-1.2854-4.3508m-.7223-.9496.1288.1288.7071-.7071-.7071-.7071-.7013.7013c.2005.1849.3916.3798.5725.5841M16.5 17v-5h-1v5c0 .2761.2239.5.5.5s.5-.2239.5-.5",
  { height: 32, width: 32 }
), IconTrash32 = createIcon(
  "M15 9.5c-.5523 0-1 .44772-1 1h4c0-.55228-.4477-1-1-1zm4 1c0-1.10457-.8954-2-2-2h-2c-1.1046 0-2 .89543-2 2h-3v1h1v10c0 1.1046.8954 2 2 2h6c1.1046 0 2-.8954 2-2v-10h1v-1h-1.5zm1 1h-8v10c0 .5523.4477 1 1 1h6c.5523 0 1-.4477 1-1zm-6 7v-4h1v4zm3 0v-4h1v4z",
  { height: 32, width: 32 }
), IconVectorHandles32 = createIcon(
  "M11.5858 16 10.5 14.9142 9.41421 16 10.5 17.0858zm-.3787-1.7929L10.5 13.5l-.70711.7071-1.08578 1.0858L8 16l.70711.7071 1.08578 1.0858L10.5 18.5l.7071-.7071 1.0858-1.0858L12.5 16.5h2.0854c.2059.5826.7615 1 1.4146 1 .6531 0 1.2087-.4174 1.4146-1H19.5l.2071.2071 1.0858 1.0858.7071.7071.7071-.7071 1.0858-1.0858L24 16l-.7071-.7071-1.0858-1.0858L21.5 13.5l-.7071.7071-1.0858 1.0858L19.5 15.5h-2.0854c-.2059-.5826-.7615-1-1.4146-1-.6531 0-1.2087.4174-1.4146 1H12.5l-.2071-.2071zM22.5858 16 21.5 14.9142 20.4142 16 21.5 17.0858z",
  { height: 32, width: 32 }
), IconVisibilityHidden32 = createIcon(
  "M21.5085 15.8012c.5554-.5276 1.0351-1.134 1.421-1.8012h-1.1842c-1.2655 1.8142-3.3673 3-5.7454 3-2.3782 0-4.48-1.1858-5.7454-3H9.07022c.38597.6673.86567 1.2737 1.42108 1.8013l-1.59482 1.5949.70712.7071 1.6573-1.6574c.7108.5234 1.5112.9321 2.3742 1.1988l-.6171 2.2213.9636.2676.6262-2.2543c.452.0793.9172.1207 1.3921.1207.4748 0 .9399-.0414 1.392-.1207l.6261 2.2543.9636-.2676-.617-2.2213c.863-.2666 1.6635-.6754 2.3743-1.1989l1.6576 1.6575.7071-.7071z",
  { height: 32, width: 32 }
), IconVisibilityVisible32 = createIcon(
  "M16.0001 19c-2.2999 0-4.3222-1.1942-5.4784-3 1.1562-1.8058 3.1785-3 5.4784-3 2.2998 0 4.3221 1.1942 5.4783 3-1.1562 1.8058-3.1785 3-5.4783 3m0-7c2.878 0 5.3774 1.6211 6.6349 4-1.2575 2.3789-3.7569 4-6.6349 4-2.8781 0-5.3775-1.6211-6.63499-4 1.25749-2.3789 3.75689-4 6.63499-4m.0003 6c1.1045 0 2-.8954 2-2s-.8955-2-2-2c-1.1046 0-2 .8954-2 2s.8954 2 2 2",
  { height: 32, width: 32 }
), IconWarning32 = createIcon(
  "M23.2901 22 16 9.03973 8.70983 22zM16.8716 8.54947c-.3823-.67965-1.3609-.67965-1.7432 0L7.83825 21.5097C7.46329 22.1763 7.945 23 8.70983 23H23.2901c.7649 0 1.2466-.8237.8716-1.4903zm-.8717 4.42383c.4142 0 .75.3358.75.75v2.5294c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-2.5294c0-.4142.3358-.75.75-.75m1 6.5269c0-.5523-.4477-1-1-1s-1 .4477-1 1v.0685c0 .5523.4477 1 1 1s1-.4477 1-1z",
  { height: 32, width: 32 }
), IconWarningFilled32 = createIcon(
  "M15.3463 8.16209c.2868-.50974 1.0207-.50974 1.3074 0l7.7176 13.72021c.2812.4999-.08 1.1177-.6537 1.1177H8.2824c-.57362 0-.9349-.6178-.65368-1.1177zM16 12.3817c.4971 0 .9.403.9.9v3.0878c0 .4971-.4029.9-.9.9-.497 0-.9-.4029-.9-.9v-3.0878c0-.497.403-.9.9-.9M17.1 20c0-.6075-.4925-1.1-1.1-1.1-.6075 0-1.1.4925-1.1 1.1v.0685c0 .6076.4925 1.1 1.1 1.1.6075 0 1.1-.4924 1.1-1.1z",
  { height: 32, width: 32 }
), IconWorld32 = createIcon(
  "M21.7907 19.9341C20.531 21.7847 18.4074 23 16 23c-3.866 0-7-3.134-7-7 0-.6182.08013-1.2176.23057-1.7885l1.80413.6765c.1722.0646.2721.2444.2361.4247l-.3763 1.8814c-.0354.1773.0606.3546.2285.4217l2.0217.8088c.1177.047.2036.1503.2285.2746l.4379 2.1895a.37526.37526 0 0 0 .1025.1916l.5371.5371c.1851.1851.4982.1283.6066-.11l2.0898-4.5976c.0969-.2132-.0232-.4622-.2505-.519l-1.4625-.3656a.37543.37543 0 0 1-.1742-.0986l-1.3167-1.3168a.37521.37521 0 0 0-.2652-.1098h-1.1129a.37509.37509 0 0 1-.3354-.2073l-.7101-1.4201c-.0995-.1992-.0047-.4407.2038-.5189l3.286-1.2322c.183-.0686.2826-.2663.2289-.4542l-.4436-1.55253a.2015.2015 0 0 0-.0033-.01082C15.184 9.03562 15.5879 9 16 9c.2102 0 .4182.00926.6237.02741a.39126.39126 0 0 0-.0071.03958l-.0837.66974c-.0197.15777.0622.31077.2044.38197l.6006.3003a.37504.37504 0 0 0 .3263.0044l1.3-.6067c.0533-.02487.0964-.05846.1297-.09758 1.0432.51488 1.9396 1.28188 2.6096 2.22158l-2.0613-.4123a.37501.37501 0 0 0-.2665.0462l-2.0779 1.2467c-.1681.1009-.2301.314-.1425.4893l1.2411 2.4821c.0635.127.1933.2073.3354.2073h1.652c.1674 0 .3146.111.3606.272zM24 16c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8",
  { height: 32, width: 32 }
), bold = "_bold_72210_1", styles$8 = {
  bold
}, Bold = createComponent(function({ children: e, ...t }, n) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { ...t, ref: n, class: styles$8.bold, children: e });
}), code = "_code_5nbkq_1", styles$7 = {
  code
}, Code = createComponent(function({ children: e, ...t }, n) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("code", { ...t, ref: n, class: styles$7.code, children: e });
}), link = "_link_xe0wi_1", fullWidth = "_fullWidth_xe0wi_15", styles$6 = {
  link,
  fullWidth
}, Link = createComponent(function({
  children: e,
  fullWidth: t = !1,
  href: n,
  onKeyDown: r = noop,
  propagateEscapeKeyDown: c = !0,
  target: s,
  ...i
}, f) {
  const u = useCallback(
    function(h) {
      r(h), h.key === "Escape" && (c === !1 && h.stopPropagation(), h.currentTarget.blur());
    },
    [c, r]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      ...i,
      ref: f,
      class: createClassName([
        styles$6.link,
        t === !0 ? styles$6.fullWidth : null
      ]),
      href: n,
      onKeyDown: u,
      tabIndex: 0,
      target: s,
      children: e
    }
  );
}), muted = "_muted_139yx_1", styles$5 = {
  muted
}, Muted = createComponent(function({ children: e, ...t }, n) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...t, ref: n, class: styles$5.muted, children: e });
}), columns = "_columns_ybv3x_1", extraSmall$3 = "_extraSmall_ybv3x_4", small$3 = "_small_ybv3x_7", medium$3 = "_medium_ybv3x_10", large$3 = "_large_ybv3x_13", extraLarge$3 = "_extraLarge_ybv3x_16", child$1 = "_child_ybv3x_20", styles$4 = {
  columns,
  extraSmall: extraSmall$3,
  small: small$3,
  medium: medium$3,
  large: large$3,
  extraLarge: extraLarge$3,
  child: child$1
}, Columns = createComponent(function({ children: e, space: t, ...n }, r) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ...n,
      ref: r,
      class: createClassName([
        styles$4.columns,
        typeof t > "u" ? null : styles$4[t]
      ]),
      children: Children.toArray(e).map(function(c, s) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$4.child, children: c }, s);
      })
    }
  );
}), extraSmall$2 = "_extraSmall_1oe77_1", small$2 = "_small_1oe77_4", medium$2 = "_medium_1oe77_7", large$2 = "_large_1oe77_10", extraLarge$2 = "_extraLarge_1oe77_13", styles$3 = {
  extraSmall: extraSmall$2,
  small: small$2,
  medium: medium$2,
  large: large$2,
  extraLarge: extraLarge$2
}, Container = createComponent(
  function({ space: e, ...t }, n) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...t, ref: n, class: styles$3[e] });
  }
), extraSmall$1 = "_extraSmall_1u924_1", medium$1 = "_medium_1u924_4", large$1 = "_large_1u924_7", small$1 = "_small_1u924_10", extraLarge$1 = "_extraLarge_1u924_13", child = "_child_1u924_17", styles$2 = {
  extraSmall: extraSmall$1,
  medium: medium$1,
  large: large$1,
  small: small$1,
  extraLarge: extraLarge$1,
  child
}, Inline = createComponent(function({ children: e, space: t, ...n }, r) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ...n,
      ref: r,
      class: typeof t > "u" ? void 0 : styles$2[t],
      children: Children.toArray(e).map(function(c, s) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$2.child, children: c }, s);
      })
    }
  );
}), middleAlign = "_middleAlign_294f9_1", children = "_children_294f9_8", styles$1 = {
  middleAlign,
  children
}, MiddleAlign = createComponent(
  function({ children: e, ...t }, n) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...t, ref: n, class: styles$1.middleAlign, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { class: styles$1.children, children: e }) });
  }
), extraSmall = "_extraSmall_zc4n0_1", small = "_small_zc4n0_4", medium = "_medium_zc4n0_7", large = "_large_zc4n0_10", extraLarge = "_extraLarge_zc4n0_13", styles = {
  extraSmall,
  small,
  medium,
  large,
  extraLarge
}, VerticalSpace = createComponent(function({ space: e, ...t }, n) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...t, ref: n, class: styles[e] });
});
function mapTextboxNumericValueToString(e) {
  return e === null ? "" : e === MIXED_NUMBER ? MIXED_STRING : `${e}`;
}
function render(e) {
  return function(t, n) {
    render$1(/* @__PURE__ */ jsxRuntimeExports.jsx(e, { ...n }), t);
  };
}
export {
  Banner,
  Bold,
  Button,
  Checkbox,
  Code,
  Columns,
  Container,
  Disclosure,
  Divider,
  Dropdown,
  FileUploadButton,
  FileUploadDropzone,
  IconAdjust32,
  IconAlignBottom16,
  IconAlignMiddle16,
  IconAlignTop16,
  IconAnchorHorizontal16,
  IconAnchorVertical16,
  IconAngle32,
  IconAnimation32,
  IconArrowDown16,
  IconArrowDownCircle32,
  IconArrowLeft16,
  IconArrowLeftCircle32,
  IconArrowLeftRight16,
  IconArrowLeftRight32,
  IconArrowRight16,
  IconArrowRightCircle32,
  IconArrowUp16,
  IconArrowUpCircle32,
  IconArrowUpDown16,
  IconArrowUpDown32,
  IconAutoLayoutHorizontalBottom16,
  IconAutoLayoutHorizontalCenter16,
  IconAutoLayoutHorizontalTop16,
  IconAutoLayoutVerticalCenter16,
  IconAutoLayoutVerticalLeft16,
  IconAutoLayoutVerticalRight16,
  IconBell32,
  IconBlend32,
  IconBlendEmpty32,
  IconButton,
  IconCaretDown16,
  IconCaretLeft16,
  IconCaretRight16,
  IconCaretUp16,
  IconCheckCircle32,
  IconCheckCircleFilled32,
  IconChevronDown16,
  IconChevronDown32,
  IconChevronLeft32,
  IconChevronRight32,
  IconChevronUp16,
  IconChevronUp32,
  IconCircleHelp16,
  IconCircleInfo16,
  IconCode16,
  IconCode32,
  IconComponent32,
  IconConnectionConnect32,
  IconConnectionDelete32,
  IconConnector16,
  IconControlCheckboxChecked12,
  IconControlCheckboxMixed12,
  IconControlChevronDown8,
  IconControlChevronUp8,
  IconCornerRadius32,
  IconCorners32,
  IconCross32,
  IconDistributeHorizontalSpacing32,
  IconDistributeVerticalSpacing32,
  IconDraft32,
  IconEffects32,
  IconEllipsis32,
  IconEyedropper32,
  IconFolder32,
  IconFrame32,
  IconGrid32,
  IconHyperlink16,
  IconHyperlinkBreak32,
  IconHyperlinkLinked32,
  IconInfo32,
  IconLayerAnimated16,
  IconLayerComponent16,
  IconLayerEllipse16,
  IconLayerFrame16,
  IconLayerFrameCoverArt16,
  IconLayerFrameScrolling16,
  IconLayerFrameScrollingHorizontal16,
  IconLayerFrameScrollingVertical16,
  IconLayerGroup16,
  IconLayerImage16,
  IconLayerInstance16,
  IconLayerLine16,
  IconLayerMask16,
  IconLayerRectangle16,
  IconLayerSlice16,
  IconLayerText16,
  IconLayerVector16,
  IconLayoutAlignBottom32,
  IconLayoutAlignHorizontalCenters32,
  IconLayoutAlignLeft32,
  IconLayoutAlignRight32,
  IconLayoutAlignTop32,
  IconLayoutAlignVerticalCenters32,
  IconLayoutGridColumns32,
  IconLayoutGridRows32,
  IconLayoutGridUniform32,
  IconLayoutHorizontal32,
  IconLayoutVertical32,
  IconLetterSpacing32,
  IconLibrary32,
  IconLineHeight32,
  IconLinkBreak32,
  IconLinkLinked32,
  IconList32,
  IconListDetailed32,
  IconLockLocked16,
  IconLockLocked32,
  IconLockUnlocked16,
  IconLockUnlocked32,
  IconMegaphone32,
  IconMenuCheckmarkBreadcrumb16,
  IconMenuCheckmarkChecked16,
  IconMenuCheckmarkMixed16,
  IconMinus32,
  IconMissingFonts32,
  IconMoveDown16,
  IconMoveRight16,
  IconNavigateBack32,
  IconNavigateTo32,
  IconNotice32,
  IconOptionCheck16,
  IconOptionDisabled16,
  IconOrientationLandscape16,
  IconOrientationPortrait16,
  IconPaddingHorizontal16,
  IconPaddingHorizontal32,
  IconPaddingVertical16,
  IconPaddingVertical32,
  IconParagraphIndent32,
  IconParagraphSpacing32,
  IconPencil32,
  IconPlay32,
  IconPlugin32,
  IconPlus32,
  IconRecent32,
  IconResetInstance32,
  IconResizeToFit32,
  IconReturn32,
  IconRotate32,
  IconScale32,
  IconSearch32,
  IconSearchLarge32,
  IconShare32,
  IconSmiley32,
  IconSpaceHorizontal16,
  IconSpaceVertical16,
  IconSpacingHorizontal32,
  IconSpacingVertical32,
  IconStar16,
  IconStar32,
  IconStarFilled16,
  IconStarFilled32,
  IconStrokeWeight32,
  IconStyles32,
  IconSwap16,
  IconSwap32,
  IconTarget16,
  IconTarget32,
  IconTextAlignCenter16,
  IconTextAlignJustified16,
  IconTextAlignLeft16,
  IconTextAlignRight16,
  IconTextDecorationStrikethrough16,
  IconTextDecorationUnderline16,
  IconTidyGrid32,
  IconTidyListHorizontal32,
  IconTidyListVertical32,
  IconTimer32,
  IconToggleButton,
  IconTrash32,
  IconUpload16,
  IconVectorHandles32,
  IconVisibilityHidden16,
  IconVisibilityHidden32,
  IconVisibilityVisible16,
  IconVisibilityVisible32,
  IconWarning16,
  IconWarning32,
  IconWarningFilled32,
  IconWorld16,
  IconWorld32,
  Inline,
  Layer,
  Link,
  LoadingIndicator,
  MiddleAlign,
  Modal,
  Muted,
  Preview,
  RadioButtons,
  RangeSlider,
  SearchTextbox,
  SegmentedControl,
  SelectableItem,
  Stack,
  Tabs,
  Text,
  Textbox,
  TextboxAutocomplete,
  TextboxColor,
  TextboxMultiline,
  TextboxNumeric,
  Toggle,
  VerticalSpace,
  createClassName,
  createComponent,
  createIcon,
  getCurrentFromRef,
  mapTextboxNumericValueToString,
  noop,
  render,
  useFocusTrap,
  useForm,
  useInitialFocus,
  useMouseDownOutside,
  useScrollableMenu,
  useWindowKeyDown,
  useWindowResize
};
