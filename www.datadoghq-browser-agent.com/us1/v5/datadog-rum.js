!(function () {
  "use strict";
  var t = {
      log: "log",
      debug: "debug",
      info: "info",
      warn: "warn",
      error: "error",
    },
    e = console,
    n = {};
  Object.keys(t).forEach(function (t) {
    n[t] = e[t];
  });
  var r = "Datadog Browser SDK:",
    i = {
      debug: n.debug.bind(e, r),
      log: n.log.bind(e, r),
      info: n.info.bind(e, r),
      warn: n.warn.bind(e, r),
      error: n.error.bind(e, r),
    },
    o = "https://docs.datadoghq.com",
    a = "".concat(o, "/real_user_monitoring/browser/troubleshooting"),
    s = "More details:";
  function u(t, e) {
    return function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      try {
        return t.apply(void 0, n);
      } catch (t) {
        i.error(e, t);
      }
    };
  }
  var c,
    l = function (t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = e.length; i < o; i++)
          (!r && i in e) ||
            (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
      return t.concat(r || Array.prototype.slice.call(e));
    },
    d = !1;
  function f(t) {
    d = t;
  }
  function p(t) {
    return function () {
      return v(t, this, arguments);
    };
  }
  function v(t, e, n) {
    try {
      return t.apply(e, n);
    } catch (t) {
      if ((h(t), c))
        try {
          c(t);
        } catch (t) {
          h(t);
        }
    }
  }
  function h() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    d && i.error.apply(i, l(["[MONITOR]"], t, !1));
  }
  function m(t, e) {
    return -1 !== t.indexOf(e);
  }
  function g(t) {
    if (Array.from) return Array.from(t);
    var e = [];
    if (t instanceof Set)
      t.forEach(function (t) {
        return e.push(t);
      });
    else for (var n = 0; n < t.length; n++) e.push(t[n]);
    return e;
  }
  function y(t, e) {
    for (var n = 0; n < t.length; n += 1) {
      var r = t[n];
      if (e(r, n)) return r;
    }
  }
  function _(t) {
    return Object.keys(t).map(function (e) {
      return t[e];
    });
  }
  function b(t) {
    return Object.keys(t).map(function (e) {
      return [e, t[e]];
    });
  }
  function w(t, e) {
    return t.slice(0, e.length) === e;
  }
  function S(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    return (
      e.forEach(function (e) {
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }),
      t
    );
  }
  function k() {
    if ("object" == typeof globalThis) return globalThis;
    Object.defineProperty(Object.prototype, "_dd_temp_", {
      get: function () {
        return this;
      },
      configurable: !0,
    });
    var t = _dd_temp_;
    return (
      delete Object.prototype._dd_temp_,
      "object" != typeof t &&
        (t =
          "object" == typeof self
            ? self
            : "object" == typeof window
            ? window
            : {}),
      t
    );
  }
  var C = 1024,
    x = /[^\u0000-\u007F]/;
  function T(t) {
    return x.test(t)
      ? void 0 !== window.TextEncoder
        ? new TextEncoder().encode(t).length
        : new Blob([t]).size
      : t.length;
  }
  function E(t, e) {
    var n,
      r = k();
    return (
      r.Zone &&
        "function" == typeof r.Zone.__symbol__ &&
        (n = t[r.Zone.__symbol__(e)]),
      n || (n = t[e]),
      n
    );
  }
  function A(t, e) {
    return E(k(), "setTimeout")(p(t), e);
  }
  function R(t) {
    E(k(), "clearTimeout")(t);
  }
  function I(t, e) {
    return E(k(), "setInterval")(p(t), e);
  }
  function N(t) {
    E(k(), "clearInterval")(t);
  }
  function O(t, e, n) {
    var r,
      i,
      o = !n || void 0 === n.leading || n.leading,
      a = !n || void 0 === n.trailing || n.trailing,
      s = !1;
    return {
      throttled: function () {
        for (var n = [], u = 0; u < arguments.length; u++) n[u] = arguments[u];
        s
          ? (r = n)
          : (o ? t.apply(void 0, n) : (r = n),
            (s = !0),
            (i = A(function () {
              a && r && t.apply(void 0, r), (s = !1), (r = void 0);
            }, e)));
      },
      cancel: function () {
        R(i), (s = !1), (r = void 0);
      },
    };
  }
  function M() {}
  function L(t, e, n) {
    if ("object" != typeof t || null === t) return JSON.stringify(t);
    var r = D(Object.prototype),
      i = D(Array.prototype),
      o = D(Object.getPrototypeOf(t)),
      a = D(t);
    try {
      return JSON.stringify(t, e, n);
    } catch (t) {
      return "<error: unable to serialize object>";
    } finally {
      r(), i(), o(), a();
    }
  }
  function D(t) {
    var e = t,
      n = e.toJSON;
    return n
      ? (delete e.toJSON,
        function () {
          e.toJSON = n;
        })
      : M;
  }
  function P(t) {
    return S({}, t);
  }
  function U(t, e) {
    return Object.keys(t).some(function (n) {
      return t[n] === e;
    });
  }
  function z(t) {
    return 0 === Object.keys(t).length;
  }
  function B(t) {
    void 0 === t && (t = 2);
    var e = new Map(),
      n = !1;
    function r(r) {
      if ((void 0 === r && (r = 0), !n && 0 !== t)) {
        var o = 2 === t ? 3072 : 16384,
          u = r;
        e.forEach(function (t) {
          u += t.getBytesCount();
        }),
          u > o &&
            (!(function (t) {
              i.warn(
                "Customer data exceeds the recommended "
                  .concat(t / C, "KiB threshold. ")
                  .concat(s, " ")
                  .concat(
                    a,
                    "/#customer-data-exceeds-the-recommended-threshold-warning"
                  )
              );
            })(o),
            (n = !0));
      }
    }
    return {
      createDetachedTracker: function () {
        var t = V(function () {
          return r(t.getBytesCount());
        });
        return t;
      },
      getOrCreateTracker: function (t) {
        return e.has(t) || e.set(t, V(r)), e.get(t);
      },
      setCompressionStatus: function (e) {
        0 === t && ((t = e), r());
      },
      getCompressionStatus: function () {
        return t;
      },
      stop: function () {
        e.forEach(function (t) {
          return t.stop();
        }),
          e.clear();
      },
    };
  }
  function V(t) {
    var e = 0,
      n = O(function (n) {
        (e = T(L(n))), t();
      }, 200),
      r = n.throttled,
      i = n.cancel,
      o = function () {
        i(), (e = 0);
      };
    return {
      updateCustomerData: function (t) {
        z(t) ? o() : r(t);
      },
      resetCustomerData: o,
      getBytesCount: function () {
        return e;
      },
      stop: function () {
        i();
      },
    };
  }
  function F(t) {
    return null === t ? "null" : Array.isArray(t) ? "array" : typeof t;
  }
  function q(t, e, n) {
    if (
      (void 0 === n &&
        (n = (function () {
          if ("undefined" != typeof WeakSet) {
            var t = new WeakSet();
            return {
              hasAlreadyBeenSeen: function (e) {
                var n = t.has(e);
                return n || t.add(e), n;
              },
            };
          }
          var e = [];
          return {
            hasAlreadyBeenSeen: function (t) {
              var n = e.indexOf(t) >= 0;
              return n || e.push(t), n;
            },
          };
        })()),
      void 0 === e)
    )
      return t;
    if ("object" != typeof e || null === e) return e;
    if (e instanceof Date) return new Date(e.getTime());
    if (e instanceof RegExp) {
      var r =
        e.flags ||
        [
          e.global ? "g" : "",
          e.ignoreCase ? "i" : "",
          e.multiline ? "m" : "",
          e.sticky ? "y" : "",
          e.unicode ? "u" : "",
        ].join("");
      return new RegExp(e.source, r);
    }
    if (!n.hasAlreadyBeenSeen(e)) {
      if (Array.isArray(e)) {
        for (var i = Array.isArray(t) ? t : [], o = 0; o < e.length; ++o)
          i[o] = q(i[o], e[o], n);
        return i;
      }
      var a = "object" === F(t) ? t : {};
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (a[s] = q(a[s], e[s], n));
      return a;
    }
  }
  function j(t) {
    return q(void 0, t);
  }
  function H() {
    for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    for (var r = 0, i = e; r < i.length; r++) {
      var o = i[r];
      null != o && (t = q(t, o));
    }
    return t;
  }
  function G(t, e) {
    void 0 === e && (e = 225280);
    var n = D(Object.prototype),
      r = D(Array.prototype),
      i = [],
      o = new WeakMap(),
      a = W(t, "$", void 0, i, o),
      s = JSON.stringify(a),
      u = s ? s.length : 0;
    if (!(u > e)) {
      for (; i.length > 0 && u < e; ) {
        var c = i.shift(),
          l = 0;
        if (Array.isArray(c.source))
          for (var d = 0; d < c.source.length; d++) {
            if (
              ((u +=
                void 0 !== (f = W(c.source[d], c.path, d, i, o))
                  ? JSON.stringify(f).length
                  : 4),
              (u += l),
              (l = 1),
              u > e)
            ) {
              K(e, "truncated", t);
              break;
            }
            c.target[d] = f;
          }
        else
          for (var d in c.source)
            if (Object.prototype.hasOwnProperty.call(c.source, d)) {
              var f;
              if (
                (void 0 !== (f = W(c.source[d], c.path, d, i, o)) &&
                  ((u += JSON.stringify(f).length + l + d.length + 3), (l = 1)),
                u > e)
              ) {
                K(e, "truncated", t);
                break;
              }
              c.target[d] = f;
            }
      }
      return n(), r(), a;
    }
    K(e, "discarded", t);
  }
  function W(t, e, n, r, i) {
    var o = (function (t) {
      var e = t;
      if (e && "function" == typeof e.toJSON)
        try {
          return e.toJSON();
        } catch (t) {}
      return t;
    })(t);
    if (!o || "object" != typeof o)
      return (function (t) {
        if ("bigint" == typeof t) return "[BigInt] ".concat(t.toString());
        if ("function" == typeof t)
          return "[Function] ".concat(t.name || "unknown");
        if ("symbol" == typeof t)
          return "[Symbol] ".concat(t.description || t.toString());
        return t;
      })(o);
    var a = (function (t) {
      try {
        if (t instanceof Event) return { isTrusted: t.isTrusted };
        var e = Object.prototype.toString.call(t).match(/\[object (.*)\]/);
        if (e && e[1]) return "[".concat(e[1], "]");
      } catch (t) {}
      return "[Unserializable]";
    })(o);
    if ("[Object]" !== a && "[Array]" !== a && "[Error]" !== a) return a;
    var s = t;
    if (i.has(s)) return "[Reference seen at ".concat(i.get(s), "]");
    var u = void 0 !== n ? "".concat(e, ".").concat(n) : e,
      c = Array.isArray(o) ? [] : {};
    return i.set(s, u), r.push({ source: o, target: c, path: u }), c;
  }
  function K(t, e, n) {
    i.warn(
      "The data provided has been "
        .concat(e, " as it is over the limit of ")
        .concat(t, " characters:"),
      n
    );
  }
  var J = (function () {
    function t(t) {
      (this.onFirstSubscribe = t), (this.observers = []);
    }
    return (
      (t.prototype.subscribe = function (t) {
        var e = this;
        return (
          this.observers.push(t),
          1 === this.observers.length &&
            this.onFirstSubscribe &&
            (this.onLastUnsubscribe = this.onFirstSubscribe(this) || void 0),
          {
            unsubscribe: function () {
              (e.observers = e.observers.filter(function (e) {
                return t !== e;
              })),
                !e.observers.length &&
                  e.onLastUnsubscribe &&
                  e.onLastUnsubscribe();
            },
          }
        );
      }),
      (t.prototype.notify = function (t) {
        this.observers.forEach(function (e) {
          return e(t);
        });
      }),
      t
    );
  })();
  function Y() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return new J(function (e) {
      var n = t.map(function (t) {
        return t.subscribe(function (t) {
          return e.notify(t);
        });
      });
      return function () {
        return n.forEach(function (t) {
          return t.unsubscribe();
        });
      };
    });
  }
  function X(t) {
    var e = {},
      n = new J(),
      r = {
        getContext: function () {
          return j(e);
        },
        setContext: function (i) {
          "object" === F(i)
            ? ((e = G(i)), null == t || t.updateCustomerData(e))
            : r.clearContext(),
            n.notify();
        },
        setContextProperty: function (r, i) {
          (e[r] = G(i)), null == t || t.updateCustomerData(e), n.notify();
        },
        removeContextProperty: function (r) {
          delete e[r], null == t || t.updateCustomerData(e), n.notify();
        },
        clearContext: function () {
          (e = {}), null == t || t.resetCustomerData(), n.notify();
        },
        changeObservable: n,
      };
    return r;
  }
  var $ = { GRANTED: "granted", NOT_GRANTED: "not-granted" };
  function Z(t, e, n, r, i) {
    return Q(t, e, [n], r, i);
  }
  function Q(t, e, n, r, i) {
    var o = void 0 === i ? {} : i,
      a = o.once,
      s = o.capture,
      u = o.passive,
      c = p(function (e) {
        (e.isTrusted || e.__ddIsTrusted || t.allowUntrustedEvents) &&
          (a && v(), r(e));
      }),
      l = u ? { capture: s, passive: u } : s,
      d =
        window.EventTarget && e instanceof EventTarget
          ? window.EventTarget.prototype
          : e,
      f = E(d, "addEventListener");
    function v() {
      var t = E(d, "removeEventListener");
      n.forEach(function (n) {
        return t.call(e, n, c, l);
      });
    }
    return (
      n.forEach(function (t) {
        return f.call(e, t, c, l);
      }),
      { stop: v }
    );
  }
  var tt = "_dd_c",
    et = [];
  function nt(t, e, n, r) {
    var i = (function (t, e) {
      return "".concat(tt, "_").concat(t, "_").concat(e);
    })(n, r);
    function o() {
      var t = localStorage.getItem(i);
      return null !== t ? JSON.parse(t) : {};
    }
    et.push(
      Z(t, window, "storage", function (t) {
        var n = t.key;
        i === n && e.setContext(o());
      })
    ),
      e.changeObservable.subscribe(function () {
        localStorage.setItem(i, JSON.stringify(e.getContext()));
      }),
      e.setContext(H(o(), e.getContext()));
  }
  function rt() {
    var t = "",
      e = 0;
    return {
      isAsync: !1,
      get isEmpty() {
        return !t;
      },
      write: function (n, r) {
        var i = T(n);
        (e += i), (t += n), r && r(i);
      },
      finish: function (t) {
        t(this.finishSync());
      },
      finishSync: function () {
        var n = {
          output: t,
          outputBytesCount: e,
          rawBytesCount: e,
          pendingData: "",
        };
        return (t = ""), (e = 0), n;
      },
      estimateEncodedBytesCount: function (t) {
        return t.length;
      },
    };
  }
  var it = "?";
  function ot(t) {
    var e = [],
      n = vt(t, "stack"),
      r = String(t);
    return (
      n && w(n, r) && (n = n.slice(r.length)),
      n &&
        n.split("\n").forEach(function (t) {
          var n =
            (function (t) {
              var e = ut.exec(t);
              if (!e) return;
              var n = e[2] && 0 === e[2].indexOf("native"),
                r = e[2] && 0 === e[2].indexOf("eval"),
                i = ct.exec(e[2]);
              r && i && ((e[2] = i[1]), (e[3] = i[2]), (e[4] = i[3]));
              return {
                args: n ? [e[2]] : [],
                column: e[4] ? +e[4] : void 0,
                func: e[1] || it,
                line: e[3] ? +e[3] : void 0,
                url: n ? void 0 : e[2],
              };
            })(t) ||
            (function (t) {
              var e = lt.exec(t);
              if (!e) return;
              return {
                args: [],
                column: e[3] ? +e[3] : void 0,
                func: it,
                line: e[2] ? +e[2] : void 0,
                url: e[1],
              };
            })(t) ||
            (function (t) {
              var e = dt.exec(t);
              if (!e) return;
              return {
                args: [],
                column: e[4] ? +e[4] : void 0,
                func: e[1] || it,
                line: +e[3],
                url: e[2],
              };
            })(t) ||
            (function (t) {
              var e = ft.exec(t);
              if (!e) return;
              var n = e[3] && e[3].indexOf(" > eval") > -1,
                r = pt.exec(e[3]);
              n && r && ((e[3] = r[1]), (e[4] = r[2]), (e[5] = void 0));
              return {
                args: e[2] ? e[2].split(",") : [],
                column: e[5] ? +e[5] : void 0,
                func: e[1] || it,
                line: e[4] ? +e[4] : void 0,
                url: e[3],
              };
            })(t);
          n && (!n.func && n.line && (n.func = it), e.push(n));
        }),
      { message: vt(t, "message"), name: vt(t, "name"), stack: e }
    );
  }
  var at =
      "((?:file|https?|blob|chrome-extension|electron|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)",
    st = "(?::(\\d+))",
    ut = new RegExp(
      "^\\s*at (.*?) ?\\(".concat(at).concat(st, "?").concat(st, "?\\)?\\s*$"),
      "i"
    ),
    ct = new RegExp("\\((\\S*)".concat(st).concat(st, "\\)"));
  var lt = new RegExp(
    "^\\s*at ?".concat(at).concat(st, "?").concat(st, "??\\s*$"),
    "i"
  );
  var dt =
    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var ft =
      /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
    pt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  function vt(t, e) {
    if ("object" == typeof t && t && e in t) {
      var n = t[e];
      return "string" == typeof n ? n : void 0;
    }
  }
  function ht(t, e, n, r) {
    var i = [{ url: e, column: r, line: n }],
      o = (function (t) {
        var e, n, r;
        "[object String]" === {}.toString.call(t) &&
          ((n = (e = mt.exec(t))[1]), (r = e[2]));
        return { name: n, message: r };
      })(t);
    return { name: o.name, message: o.message, stack: i };
  }
  var mt =
    /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;
  function gt() {
    var t,
      e = new Error();
    if (!e.stack)
      try {
        throw e;
      } catch (t) {}
    return (
      v(function () {
        var n = ot(e);
        (n.stack = n.stack.slice(2)), (t = yt(n));
      }),
      t
    );
  }
  function yt(t) {
    var e = _t(t);
    return (
      t.stack.forEach(function (t) {
        var n = "?" === t.func ? "<anonymous>" : t.func,
          r =
            t.args && t.args.length > 0
              ? "(".concat(t.args.join(", "), ")")
              : "",
          i = t.line ? ":".concat(t.line) : "",
          o = t.line && t.column ? ":".concat(t.column) : "";
        e += "\n  at "
          .concat(n)
          .concat(r, " @ ")
          .concat(t.url)
          .concat(i)
          .concat(o);
      }),
      e
    );
  }
  function _t(t) {
    return "".concat(t.name || "Error", ": ").concat(t.message);
  }
  var bt,
    wt = "No stack, consider using an instance of Error";
  function St(t) {
    var e = t.stackTrace,
      n = t.originalError,
      r = t.handlingStack,
      i = t.startClocks,
      o = t.nonErrorPrefix,
      a = t.source,
      s = t.handling,
      u = Ct(n),
      c = (function (t, e, n, r) {
        return (null == t ? void 0 : t.message) && (null == t ? void 0 : t.name)
          ? t.message
          : e
          ? "Empty message"
          : "".concat(n, " ").concat(L(G(r)));
      })(e, u, o, n),
      l = (function (t, e) {
        if (void 0 === e) return !1;
        if (t) return !0;
        return (
          e.stack.length > 0 &&
          (e.stack.length > 1 || void 0 !== e.stack[0].url)
        );
      })(u, e)
        ? yt(e)
        : wt,
      d = u ? xt(n, a) : void 0;
    return {
      startClocks: i,
      source: a,
      handling: s,
      handlingStack: r,
      originalError: n,
      type: e ? e.name : void 0,
      message: c,
      stack: l,
      causes: d,
      fingerprint: kt(n),
    };
  }
  function kt(t) {
    return Ct(t) && "dd_fingerprint" in t ? String(t.dd_fingerprint) : void 0;
  }
  function Ct(t) {
    return (
      t instanceof Error ||
      "[object Error]" === Object.prototype.toString.call(t)
    );
  }
  function xt(t, e) {
    for (
      var n = t, r = [];
      Ct(null == n ? void 0 : n.cause) && r.length < 10;

    ) {
      var i = ot(n.cause);
      r.push({
        message: n.cause.message,
        source: e,
        type: null == i ? void 0 : i.name,
        stack: i && yt(i),
      }),
        (n = n.cause);
    }
    return r.length ? r : void 0;
  }
  !(function (t) {
    (t.WRITABLE_RESOURCE_GRAPHQL = "writable_resource_graphql"),
      (t.REMOTE_CONFIGURATION = "remote_configuration"),
      (t.LONG_ANIMATION_FRAME = "long_animation_frame"),
      (t.ANONYMOUS_USER_TRACKING = "anonymous_user_tracking"),
      (t.ACTION_NAME_MASKING = "action_name_masking"),
      (t.CONSISTENT_TRACE_SAMPLING = "consistent_trace_sampling"),
      (t.DELAY_VIEWPORT_COLLECTION = "delay_viewport_collection");
  })(bt || (bt = {}));
  var Tt = new Set();
  function Et(t) {
    Array.isArray(t) &&
      t
        .filter(function (t) {
          return U(bt, t);
        })
        .forEach(function (t) {
          Tt.add(t);
        });
  }
  function At(t) {
    return Tt.has(t);
  }
  function Rt() {
    return Tt;
  }
  var It = "datad0g.com",
    Nt = "dd0g-gov.com",
    Ot = "datadoghq.com",
    Mt = "datadoghq.eu",
    Lt = "pci.browser-intake-datadoghq.com",
    Dt = ["ddsource", "ddtags"];
  function Pt(t) {
    return 0 !== t && 100 * Math.random() <= t;
  }
  function Ut(t, e) {
    return +t.toFixed(e);
  }
  function zt(t) {
    return "number" == typeof t;
  }
  var Bt,
    Vt = 1e3,
    Ft = 6e4,
    qt = 31536e6;
  function jt(t) {
    return { relative: t, timeStamp: Ht(t) };
  }
  function Ht(t) {
    var e = Wt() - performance.now();
    return e > te()
      ? Math.round(Zt(e, t))
      : (function (t) {
          return Math.round(Zt(te(), t));
        })(t);
  }
  function Gt(t) {
    return zt(t) ? Ut(1e6 * t, 0) : t;
  }
  function Wt() {
    return new Date().getTime();
  }
  function Kt() {
    return Wt();
  }
  function Jt() {
    return performance.now();
  }
  function Yt() {
    return { relative: Jt(), timeStamp: Kt() };
  }
  function Xt() {
    return { relative: 0, timeStamp: te() };
  }
  function $t(t, e) {
    return e - t;
  }
  function Zt(t, e) {
    return t + e;
  }
  function Qt(t) {
    return t - te();
  }
  function te() {
    return void 0 === Bt && (Bt = performance.timing.navigationStart), Bt;
  }
  function ee(t, e) {
    var n = window.__ddBrowserSdkExtensionCallback;
    n && n({ type: t, payload: e });
  }
  function ne() {
    var t,
      e = window.navigator;
    return {
      status: e.onLine ? "connected" : "not_connected",
      interfaces:
        e.connection && e.connection.type ? [e.connection.type] : void 0,
      effective_type:
        null === (t = e.connection) || void 0 === t ? void 0 : t.effectiveType,
    };
  }
  function re(t, e) {
    var n = t.indexOf(e);
    n >= 0 && t.splice(n, 1);
  }
  function ie() {
    var t = [];
    return {
      add: function (e) {
        t.push(e) > 500 && t.splice(0, 1);
      },
      remove: function (e) {
        re(t, e);
      },
      drain: function (e) {
        t.forEach(function (t) {
          return t(e);
        }),
          (t.length = 0);
      },
    };
  }
  var oe = "log",
    ae = "configuration",
    se = "usage",
    ue = [
      "https://www.datadoghq-browser-agent.com",
      "https://www.datad0g-browser-agent.com",
      "https://d3uc069fcn7uxw.cloudfront.net",
      "https://d20xtzwzcl0ceb.cloudfront.net",
      "http://localhost",
      "<anonymous>",
    ],
    ce = ["ddog-gov.com"],
    le = ie(),
    de = function (t) {
      le.add(function () {
        return de(t);
      });
    };
  function fe(t, e) {
    var n,
      r,
      i = new J(),
      o = new Set(),
      a = !m(ce, e.site) && Pt(e.telemetrySampleRate),
      s =
        (((n = {})[oe] = a),
        (n[ae] = a && Pt(e.telemetryConfigurationSampleRate)),
        (n[se] = a && Pt(e.telemetryUsageSampleRate)),
        n),
      u = {
        is_local_file: "file:" === window.location.protocol,
        is_worker: "WorkerGlobalScope" in self,
      };
    return (
      (de = function (n) {
        var a = L(n);
        if (s[n.type] && o.size < e.maxTelemetryEventsPerPage && !o.has(a)) {
          var c = (function (t, e, n) {
            return H(
              {
                type: "telemetry",
                date: Kt(),
                service: t,
                version: "5.35.1",
                source: "browser",
                _dd: { format_version: 2 },
                telemetry: H(e, {
                  runtime_env: n,
                  connectivity: ne(),
                  sdk_setup: "cdn",
                }),
                experimental_features: g(Rt()),
              },
              void 0 !== r ? r() : {}
            );
          })(t, n, u);
          i.notify(c), ee("telemetry", c), o.add(a);
        }
      }),
      (c = ve),
      {
        setContextProvider: function (t) {
          r = t;
        },
        observable: i,
        enabled: a,
      }
    );
  }
  function pe(e, n) {
    h(t.debug, e, n), de(S({ type: oe, message: e, status: "debug" }, n));
  }
  function ve(t, e) {
    de(
      S(
        { type: oe, status: "error" },
        (function (t) {
          if (Ct(t)) {
            var e = ot(t);
            return {
              error: { kind: e.name, stack: yt(me(e)) },
              message: e.message,
            };
          }
          return {
            error: { stack: wt },
            message: "".concat("Uncaught", " ").concat(L(t)),
          };
        })(t),
        e
      )
    );
  }
  function he(t) {
    de({ type: se, usage: t });
  }
  function me(t) {
    return (
      (t.stack = t.stack.filter(function (t) {
        return (
          !t.url ||
          ue.some(function (e) {
            return w(t.url, e);
          })
        );
      })),
      t
    );
  }
  function ge(t) {
    var e = S({}, t);
    return (
      ["id", "name", "email"].forEach(function (t) {
        t in e && (e[t] = String(e[t]));
      }),
      e
    );
  }
  function ye(t, e) {
    e.silentMultipleInit || i.error("".concat(t, " is already initialized."));
  }
  function _e(t) {
    return t
      ? (
          parseInt(t, 10) ^
          ((16 * Math.random()) >> (parseInt(t, 10) / 4))
        ).toString(16)
      : ""
          .concat(1e7, "-")
          .concat(1e3, "-")
          .concat(4e3, "-")
          .concat(8e3, "-")
          .concat(1e11)
          .replace(/[018]/g, _e);
  }
  var be = /([\w-]+)\s*=\s*([^;]+)/g;
  function we(t, e) {
    for (be.lastIndex = 0; ; ) {
      var n = be.exec(t);
      if (!n) break;
      if (n[1] === e) return n[2];
    }
  }
  function Se(t, e, n) {
    void 0 === n && (n = "");
    var r = t.charCodeAt(e - 1),
      i = r >= 55296 && r <= 56319 ? e + 1 : e;
    return t.length <= i ? t : "".concat(t.slice(0, i)).concat(n);
  }
  function ke(t, e, n) {
    function r(n) {
      (function (t) {
        return !e.wasInPageStateDuringPeriod(
          "frozen",
          t.startClocks.relative,
          t.duration
        );
      })(n) &&
        t.notify(
          12,
          (function (t, e) {
            var n = {
              date: t.startClocks.timeStamp,
              vital: {
                id: _e(),
                type: t.type,
                name: t.name,
                duration: Gt(t.duration),
                description: t.description,
              },
              type: "vital",
            };
            e && (n._dd = { vital: { computed_value: !0 } });
            return {
              rawRumEvent: n,
              startTime: t.startClocks.relative,
              customerContext: t.context,
              domainContext: {},
            };
          })(n, !0)
        );
    }
    return {
      addDurationVital: r,
      startDurationVital: function (t, e) {
        return void 0 === e && (e = {}), Ce(n, t, e);
      },
      stopDurationVital: function (t, e) {
        void 0 === e && (e = {}), xe(r, n, t, e);
      },
    };
  }
  function Ce(t, e, n) {
    var r = t.vitalsByName,
      i = t.vitalsByReference;
    void 0 === n && (n = {});
    var o = {
        name: e,
        startClocks: Yt(),
        context: n.context,
        description: n.description,
      },
      a = { __dd_vital_reference: !0 };
    return r.set(e, o), i.set(a, o), a;
  }
  function xe(t, e, n, r) {
    var i = e.vitalsByName,
      o = e.vitalsByReference;
    void 0 === r && (r = {});
    var a = "string" == typeof n ? i.get(n) : o.get(n);
    a &&
      (t(
        (function (t, e, n, r) {
          var i;
          return {
            name: t.name,
            type: "duration",
            startClocks: e,
            duration: $t(e.timeStamp, r.timeStamp),
            context: H(t.context, n.context),
            description:
              null !== (i = n.description) && void 0 !== i ? i : t.description,
          };
        })(a, a.startClocks, r, Yt())
      ),
      "string" == typeof n ? i.delete(n) : o.delete(n));
  }
  function Te() {
    var t = k().DatadogEventBridge;
    if (t)
      return {
        getCapabilities: function () {
          var e;
          return JSON.parse(
            (null === (e = t.getCapabilities) || void 0 === e
              ? void 0
              : e.call(t)) || "[]"
          );
        },
        getPrivacyLevel: function () {
          var e;
          return null === (e = t.getPrivacyLevel) || void 0 === e
            ? void 0
            : e.call(t);
        },
        getAllowedWebViewHosts: function () {
          return JSON.parse(t.getAllowedWebViewHosts());
        },
        send: function (e, n, r) {
          var i = r ? { id: r } : void 0;
          t.send(JSON.stringify({ eventType: e, event: n, view: i }));
        },
      };
  }
  function Ee(t) {
    var e = Te();
    return !!e && m(e.getCapabilities(), t);
  }
  function Ae(t) {
    var e;
    void 0 === t &&
      (t = null === (e = k().location) || void 0 === e ? void 0 : e.hostname);
    var n = Te();
    return (
      !!n &&
      n.getAllowedWebViewHosts().some(function (e) {
        return (
          t === e || ((n = t), (r = ".".concat(e)), n.slice(-r.length) === r)
        );
        var n, r;
      })
    );
  }
  function Re(t, e, n, r) {
    var i = (void 0 === r ? {} : r).computeHandlingStack,
      o = t[e];
    if ("function" != typeof o) {
      if (!(e in t) || !w(e, "on")) return { stop: M };
      o = M;
    }
    var a = !1,
      s = function () {
        if (a) return o.apply(this, arguments);
        var t,
          e = g(arguments);
        v(n, null, [
          {
            target: this,
            parameters: e,
            onPostCall: function (e) {
              t = e;
            },
            handlingStack: i ? gt() : void 0,
          },
        ]);
        var r = o.apply(this, e);
        return t && v(t, null, [r]), r;
      };
    return (
      (t[e] = s),
      {
        stop: function () {
          (a = !0), t[e] === s && (t[e] = o);
        },
      }
    );
  }
  function Ie(t, e, n) {
    var r = Object.getOwnPropertyDescriptor(t, e);
    if (!r || !r.set || !r.configurable) return { stop: M };
    var i = M,
      o = function (t, e) {
        A(function () {
          o !== i && n(t, e);
        }, 0);
      },
      a = function (t) {
        r.set.call(this, t), o(this, t);
      };
    return (
      Object.defineProperty(t, e, { set: a }),
      {
        stop: function () {
          var n;
          (null === (n = Object.getOwnPropertyDescriptor(t, e)) || void 0 === n
            ? void 0
            : n.set) === a && Object.defineProperty(t, e, r),
            (o = i);
        },
      }
    );
  }
  function Ne(t) {
    return Oe(t, location.href).href;
  }
  function Oe(t, e) {
    var n = (function () {
      if (void 0 === Me)
        try {
          var t = new Ue("http://test/path");
          Me = "http://test/path" === t.href;
        } catch (t) {
          Me = !1;
        }
      return Me ? Ue : void 0;
    })();
    if (n)
      try {
        return void 0 !== e ? new n(t, e) : new n(t);
      } catch (n) {
        throw new Error(
          "Failed to construct URL: "
            .concat(String(n), " ")
            .concat(L({ url: t, base: e }))
        );
      }
    if (void 0 === e && !/:/.test(t))
      throw new Error("Invalid URL: '".concat(t, "'"));
    var r = document,
      i = r.createElement("a");
    if (void 0 !== e) {
      var o = (r =
        document.implementation.createHTMLDocument("")).createElement("base");
      (o.href = e), r.head.appendChild(o), r.body.appendChild(i);
    }
    return (i.href = t), i;
  }
  var Me,
    Le,
    De,
    Pe,
    Ue = URL;
  function ze() {
    return (
      Le ||
        (Le = new J(function (t) {
          if (window.fetch) {
            var e = Re(
              window,
              "fetch",
              function (e) {
                return (function (t, e) {
                  var n = t.parameters,
                    r = t.onPostCall,
                    i = t.handlingStack,
                    o = n[0],
                    a = n[1],
                    s = a && a.method;
                  void 0 === s && o instanceof Request && (s = o.method);
                  var u = void 0 !== s ? String(s).toUpperCase() : "GET",
                    c = o instanceof Request ? o.url : Ne(String(o)),
                    l = Yt(),
                    d = {
                      state: "start",
                      init: a,
                      input: o,
                      method: u,
                      startClocks: l,
                      url: c,
                      handlingStack: i,
                    };
                  e.notify(d),
                    (n[0] = d.input),
                    (n[1] = d.init),
                    r(function (t) {
                      return (function (t, e, n) {
                        var r = n;
                        function i(e) {
                          (r.state = "resolve"), S(r, e), t.notify(r);
                        }
                        e.then(
                          p(function (t) {
                            i({
                              response: t,
                              responseType: t.type,
                              status: t.status,
                              isAborted: !1,
                            });
                          }),
                          p(function (t) {
                            var e, n;
                            i({
                              status: 0,
                              isAborted:
                                (null ===
                                  (n =
                                    null === (e = r.init) || void 0 === e
                                      ? void 0
                                      : e.signal) || void 0 === n
                                  ? void 0
                                  : n.aborted) ||
                                (t instanceof DOMException &&
                                  t.code === DOMException.ABORT_ERR),
                              error: t,
                            });
                          })
                        );
                      })(e, t, d);
                    });
                })(e, t);
              },
              { computeHandlingStack: !0 }
            ).stop;
            return e;
          }
        })),
      Le
    );
  }
  function Be(t, e, n, r) {
    void 0 === n && (n = 0);
    var i = new Date();
    i.setTime(i.getTime() + n);
    var o = "expires=".concat(i.toUTCString()),
      a = r && r.crossSite ? "none" : "strict",
      s = r && r.domain ? ";domain=".concat(r.domain) : "",
      u = r && r.secure ? ";secure" : "",
      c = r && r.partitioned ? ";partitioned" : "";
    document.cookie = ""
      .concat(t, "=")
      .concat(e, ";")
      .concat(o, ";path=/;samesite=")
      .concat(a)
      .concat(s)
      .concat(u)
      .concat(c);
  }
  function Ve(t) {
    return we(document.cookie, t);
  }
  function Fe(t) {
    return (
      De ||
        (De = (function (t) {
          var e = new Map();
          for (be.lastIndex = 0; ; ) {
            var n = be.exec(t);
            if (!n) break;
            e.set(n[1], n[2]);
          }
          return e;
        })(document.cookie)),
      De.get(t)
    );
  }
  function qe(t, e) {
    Be(t, "", 0, e);
  }
  var je;
  function He() {
    return Boolean(
      window._DATADOG_SYNTHETICS_INJECTS_RUM ||
        Fe("datadog-synthetics-injects-rum")
    );
  }
  function Ge() {
    return null != je
      ? je
      : (je = (function (t) {
          var e;
          void 0 === t && (t = window);
          var n = t.navigator.userAgent;
          if (t.chrome || /HeadlessChrome/.test(n)) return 1;
          if (
            0 ===
              (null === (e = t.navigator.vendor) || void 0 === e
                ? void 0
                : e.indexOf("Apple")) ||
            (/safari/i.test(n) && !/chrome|android/i.test(n))
          )
            return 2;
          if (t.document.documentMode) return 0;
          return 3;
        })());
  }
  var We = "_dd_s",
    Ke = 144e5,
    Je = 9e5,
    Ye = qt,
    Xe = "cookie",
    $e = "local-storage",
    Ze = /^([a-zA-Z]+)=([a-z0-9-]+)$/;
  function Qe(t) {
    var e = { isExpired: "1" };
    return (
      At(bt.ANONYMOUS_USER_TRACKING) &&
        ((null == t ? void 0 : t.anonymousId)
          ? (e.anonymousId = null == t ? void 0 : t.anonymousId)
          : (e.anonymousId = Math.floor(
              Math.random() * Math.pow(2, 53)
            ).toString(36))),
      e
    );
  }
  function tn(t) {
    return z(t);
  }
  function en(t) {
    return !tn(t);
  }
  function nn(t) {
    return (
      void 0 !== t.isExpired ||
      !(
        (void 0 === (e = t).created || Wt() - Number(e.created) < Ke) &&
        (void 0 === e.expire || Wt() < Number(e.expire))
      )
    );
    var e;
  }
  function rn(t) {
    t.expire = String(Wt() + Je);
  }
  function on(t) {
    return b(t)
      .map(function (t) {
        var e = t[0],
          n = t[1];
        return "anonymousId" === e
          ? "aid=".concat(n)
          : "".concat(e, "=").concat(n);
      })
      .join("&");
  }
  function an(t) {
    var e = {};
    return (
      (function (t) {
        return !!t && (-1 !== t.indexOf("&") || Ze.test(t));
      })(t) &&
        t.split("&").forEach(function (t) {
          var n = Ze.exec(t);
          if (null !== n) {
            var r = n[1],
              i = n[2];
            "aid" === r ? (e.anonymousId = i) : (e[r] = i);
          }
        }),
      e
    );
  }
  function sn(t) {
    var e = (function (t) {
      var e = {};
      (e.secure =
        !!t.useSecureSessionCookie ||
        !!t.usePartitionedCrossSiteSessionCookie ||
        !!t.useCrossSiteSessionCookie),
        (e.crossSite =
          !!t.usePartitionedCrossSiteSessionCookie ||
          !!t.useCrossSiteSessionCookie),
        (e.partitioned = !!t.usePartitionedCrossSiteSessionCookie),
        t.trackSessionAcrossSubdomains &&
          (e.domain = (function () {
            if (void 0 === Pe) {
              for (
                var t = "dd_site_test_".concat(_e()),
                  e = window.location.hostname.split("."),
                  n = e.pop();
                e.length && !Ve(t);

              )
                (n = "".concat(e.pop(), ".").concat(n)),
                  Be(t, "test", Vt, { domain: n });
              qe(t, { domain: n }), (Pe = n);
            }
            return Pe;
          })());
      return e;
    })(t);
    return (function (t) {
      if (void 0 === document.cookie || null === document.cookie) return !1;
      try {
        var e = "dd_cookie_test_".concat(_e()),
          n = "test";
        Be(e, n, Ft, t);
        var r = Ve(e) === n;
        return qe(e, t), r;
      } catch (t) {
        return i.error(t), !1;
      }
    })(e)
      ? { type: Xe, cookieOptions: e }
      : void 0;
  }
  function un(t) {
    var e,
      n = {
        isLockEnabled: 1 === Ge(),
        persistSession:
          ((e = t),
          function (t) {
            Be(We, on(t), Je, e);
          }),
        retrieveSession: cn,
        expireSession: function (e) {
          return (function (t, e) {
            var n = Qe(e);
            Be(We, on(n), At(bt.ANONYMOUS_USER_TRACKING) ? Ye : Ke, t);
          })(t, e);
        },
      };
    return (
      (function (t) {
        if (!Fe(We)) {
          var e = Fe("_dd"),
            n = Fe("_dd_r"),
            r = Fe("_dd_l"),
            i = {};
          e && (i.id = e),
            r && /^[01]$/.test(r) && (i.logs = r),
            n && /^[012]$/.test(n) && (i.rum = n),
            en(i) && (rn(i), t.persistSession(i));
        }
      })(n),
      n
    );
  }
  function cn() {
    return an(Ve(We));
  }
  function ln() {
    try {
      var t = _e(),
        e = "".concat("_dd_test_").concat(t);
      localStorage.setItem(e, t);
      var n = localStorage.getItem(e);
      return localStorage.removeItem(e), t === n ? { type: $e } : void 0;
    } catch (t) {
      return;
    }
  }
  function dn(t) {
    localStorage.setItem(We, on(t));
  }
  function fn() {
    return an(localStorage.getItem(We));
  }
  function pn(t) {
    dn(Qe(t));
  }
  var vn,
    hn = [];
  function mn(t, e, n) {
    var r;
    void 0 === n && (n = 0);
    var i = e.isLockEnabled,
      o = e.persistSession,
      a = e.expireSession,
      s = function (t) {
        return o(S({}, t, { lock: c }));
      },
      u = function () {
        var t = e.retrieveSession(),
          n = t.lock;
        return t.lock && delete t.lock, { session: t, lock: n };
      };
    if ((vn || (vn = t), t === vn))
      if (i && n >= 100) yn(e);
      else {
        var c,
          l = u();
        if (i) {
          if (l.lock) return void gn(t, e, n);
          if (((c = _e()), s(l.session), (l = u()).lock !== c))
            return void gn(t, e, n);
        }
        var d = t.process(l.session);
        if (i && (l = u()).lock !== c) gn(t, e, n);
        else {
          if (
            (d && (nn(d) ? a(d) : (rn(d), i ? s(d) : o(d))),
            i && (!d || !nn(d)))
          ) {
            if ((l = u()).lock !== c) return void gn(t, e, n);
            o(l.session), (d = l.session);
          }
          null === (r = t.after) || void 0 === r || r.call(t, d || l.session),
            yn(e);
        }
      }
    else hn.push(t);
  }
  function gn(t, e, n) {
    A(function () {
      mn(t, e, n + 1);
    }, 10);
  }
  function yn(t) {
    vn = void 0;
    var e = hn.shift();
    e && mn(e, t);
  }
  var _n = Vt;
  function bn(t) {
    switch (t.sessionPersistence) {
      case Xe:
        return sn(t);
      case $e:
        return ln();
      case void 0:
        var e = sn(t);
        return !e && t.allowFallbackToLocalStorage && (e = ln()), e;
      default:
        i.error(
          "Invalid session persistence '".concat(
            String(t.sessionPersistence),
            "'"
          )
        );
    }
  }
  function wn(t, e, n) {
    var r,
      i = new J(),
      o = new J(),
      a = new J(),
      s =
        t.type === Xe
          ? un(t.cookieOptions)
          : {
              isLockEnabled: !1,
              persistSession: dn,
              retrieveSession: fn,
              expireSession: pn,
            },
      u = s.expireSession,
      c = I(function () {
        mn(
          {
            process: function (t) {
              return nn(t) ? Qe(t) : void 0;
            },
            after: p,
          },
          s
        );
      }, _n);
    v();
    var l = O(function () {
        mn(
          {
            process: function (t) {
              if (!tn(t)) {
                var r = p(t);
                return (
                  (function (t) {
                    if (tn(t)) return !1;
                    var r = n(t[e]),
                      i = r.trackingType,
                      o = r.isTracked;
                    (t[e] = i),
                      delete t.isExpired,
                      o && !t.id && ((t.id = _e()), (t.created = String(Wt())));
                  })(r),
                  r
                );
              }
            },
            after: function (t) {
              en(t) &&
                !h() &&
                (function (t) {
                  (r = t), i.notify();
                })(t),
                (r = t);
            },
          },
          s
        );
      }, _n),
      d = l.throttled,
      f = l.cancel;
    function p(t) {
      return (
        nn(t) && (t = Qe(t)),
        h() &&
          (!(function (t) {
            return r.id !== t.id || r[e] !== t[e];
          })(t)
            ? (a.notify({ previousState: r, newState: t }), (r = t))
            : ((r = Qe(r)), o.notify())),
        t
      );
    }
    function v() {
      mn(
        {
          process: function (t) {
            if (tn(t)) return Qe(t);
          },
          after: function (t) {
            r = t;
          },
        },
        s
      );
    }
    function h() {
      return void 0 !== r[e];
    }
    return {
      expandOrRenewSession: d,
      expandSession: function () {
        mn(
          {
            process: function (t) {
              return h() ? p(t) : void 0;
            },
          },
          s
        );
      },
      getSession: function () {
        return r;
      },
      renewObservable: i,
      expireObservable: o,
      sessionStateUpdateObservable: a,
      restartSession: v,
      expire: function () {
        f(), u(r), p(Qe(r));
      },
      stop: function () {
        N(c);
      },
      updateSessionState: function (t) {
        mn(
          {
            process: function (e) {
              return S({}, e, t);
            },
            after: p,
          },
          s
        );
      },
    };
  }
  function Sn(t, e, n) {
    var r = (function (t, e) {
      var n = "/api/v2/".concat(e),
        r = t.proxy;
      if ("string" == typeof r) {
        var i = Ne(r);
        return function (t) {
          return ""
            .concat(i, "?ddforward=")
            .concat(encodeURIComponent("".concat(n, "?").concat(t)));
        };
      }
      if ("function" == typeof r)
        return function (t) {
          return r({ path: n, parameters: t });
        };
      var o = (function (t, e) {
        var n = e.site,
          r = void 0 === n ? Ot : n,
          i = e.internalAnalyticsSubdomain;
        if ("logs" === t && e.usePciIntake && r === Ot) return Lt;
        if (i && r === Ot) return "".concat(i, ".").concat(Ot);
        if (r === Nt) return "http-intake.logs.".concat(r);
        var o = r.split("."),
          a = o.pop();
        return "browser-intake-".concat(o.join("-"), ".").concat(a);
      })(e, t);
      return function (t) {
        return "https://".concat(o).concat(n, "?").concat(t);
      };
    })(t, e);
    return {
      build: function (i, o) {
        var a = (function (t, e, n, r, i) {
          var o = t.clientToken,
            a = t.internalAnalyticsSubdomain,
            s = i.retry,
            u = i.encoding,
            c = ["sdk_version:".concat("5.35.1"), "api:".concat(r)].concat(n);
          s &&
            c.push(
              "retry_count:".concat(s.count),
              "retry_after:".concat(s.lastFailureStatus)
            );
          var l = [
            "ddsource=browser",
            "ddtags=".concat(encodeURIComponent(c.join(","))),
            "dd-api-key=".concat(o),
            "dd-evp-origin-version=".concat(encodeURIComponent("5.35.1")),
            "dd-evp-origin=browser",
            "dd-request-id=".concat(_e()),
          ];
          u && l.push("dd-evp-encoding=".concat(u));
          "rum" === e && l.push("batch_time=".concat(Kt()));
          a && l.reverse();
          return l.join("&");
        })(t, e, n, i, o);
        return r(a);
      },
      urlPrefix: r(""),
      trackType: e,
    };
  }
  function kn(t, e) {
    var n = 200 - t.length - 1;
    (e.length > n ||
      (function (t) {
        if (
          !(function () {
            try {
              return new RegExp("[\\p{Ll}]", "u"), !0;
            } catch (t) {
              return !1;
            }
          })()
        )
          return !1;
        return new RegExp("[^\\p{Ll}\\p{Lo}0-9_:./-]", "u").test(t);
      })(e)) &&
      i.warn(
        ""
          .concat(
            t,
            " value doesn't meet tag requirements and will be sanitized. "
          )
          .concat(s, " ")
          .concat(o, "/getting_started/tagging/#defining-tags")
      );
    var r = e.replace(/,/g, "_");
    return "".concat(t, ":").concat(r);
  }
  function Cn(t) {
    var e = t.site || Ot,
      n = (function (t) {
        var e = t.env,
          n = t.service,
          r = t.version,
          i = t.datacenter,
          o = [];
        return (
          e && o.push(kn("env", e)),
          n && o.push(kn("service", n)),
          r && o.push(kn("version", r)),
          i && o.push(kn("datacenter", i)),
          o
        );
      })(t),
      r = (function (t, e) {
        return {
          logsEndpointBuilder: Sn(t, "logs", e),
          rumEndpointBuilder: Sn(t, "rum", e),
          sessionReplayEndpointBuilder: Sn(t, "replay", e),
        };
      })(t, n),
      i = (function (t, e) {
        if (!t.replica) return;
        var n = S({}, t, { site: Ot, clientToken: t.replica.clientToken }),
          r = {
            logsEndpointBuilder: Sn(n, "logs", e),
            rumEndpointBuilder: Sn(n, "rum", e),
          };
        return S({ applicationId: t.replica.applicationId }, r);
      })(t, n);
    return S({ replica: i, site: e }, r);
  }
  var xn,
    Tn = { ALLOW: "allow", MASK: "mask", MASK_USER_INPUT: "mask-user-input" },
    En = { ALL: "all", SAMPLED: "sampled" };
  function An(t, e) {
    return (
      null == t ||
      "string" == typeof t ||
      (i.error("".concat(e, " must be defined as a string")), !1)
    );
  }
  function Rn(t, e) {
    return (
      !!(void 0 === t || ((n = t), zt(n) && n >= 0 && n <= 100)) ||
      (i.error(
        "".concat(e, " Sample Rate should be a number between 0 and 100")
      ),
      !1)
    );
    var n;
  }
  function In(t) {
    var e, n, r, a, c;
    if (t && t.clientToken) {
      if (
        (!(l = t.site) ||
          "string" != typeof l ||
          /(datadog|ddog|datad0g|dd0g)/.test(l) ||
          (i.error(
            "Site should be a valid Datadog site. "
              .concat(s, " ")
              .concat(o, "/getting_started/site/.")
          ),
          0)) &&
        Rn(t.sessionSampleRate, "Session") &&
        Rn(t.telemetrySampleRate, "Telemetry") &&
        Rn(t.telemetryConfigurationSampleRate, "Telemetry Configuration") &&
        Rn(t.telemetryUsageSampleRate, "Telemetry Usage") &&
        An(t.version, "Version") &&
        An(t.env, "Env") &&
        An(t.service, "Service")
      ) {
        var l;
        if (void 0 === t.trackingConsent || U($, t.trackingConsent))
          return S(
            {
              beforeSend:
                t.beforeSend && u(t.beforeSend, "beforeSend threw an error:"),
              sessionStoreStrategyType: bn(t),
              sessionSampleRate:
                null !== (e = t.sessionSampleRate) && void 0 !== e ? e : 100,
              telemetrySampleRate:
                null !== (n = t.telemetrySampleRate) && void 0 !== n ? n : 20,
              telemetryConfigurationSampleRate:
                null !== (r = t.telemetryConfigurationSampleRate) &&
                void 0 !== r
                  ? r
                  : 5,
              telemetryUsageSampleRate:
                null !== (a = t.telemetryUsageSampleRate) && void 0 !== a
                  ? a
                  : 5,
              service: t.service || void 0,
              silentMultipleInit: !!t.silentMultipleInit,
              allowUntrustedEvents: !!t.allowUntrustedEvents,
              trackingConsent:
                null !== (c = t.trackingConsent) && void 0 !== c
                  ? c
                  : $.GRANTED,
              storeContextsAcrossPages: !!t.storeContextsAcrossPages,
              batchBytesLimit: 16384,
              eventRateLimiterThreshold: 3e3,
              maxTelemetryEventsPerPage: 15,
              flushTimeout: 3e4,
              batchMessagesLimit: 50,
              messageBytesLimit: 262144,
            },
            Cn(t)
          );
        i.error('Tracking Consent should be either "granted" or "not-granted"');
      }
    } else
      i.error("Client Token is not configured, we will not send any data.");
  }
  function Nn(t) {
    var e = F(t);
    return "string" === e || "function" === e || t instanceof RegExp;
  }
  function On(t, e, n) {
    return (
      void 0 === n && (n = !1),
      t.some(function (t) {
        try {
          if ("function" == typeof t) return t(e);
          if (t instanceof RegExp) return t.test(e);
          if ("string" == typeof t) return n ? w(e, t) : t === e;
        } catch (t) {
          i.error(t);
        }
        return !1;
      })
    );
  }
  function Mn() {
    return window.crypto || window.msCrypto;
  }
  function Ln() {
    return Dn(63);
  }
  function Dn(t) {
    return (
      xn ||
        (xn =
          At(bt.CONSISTENT_TRACE_SAMPLING) &&
          (function () {
            try {
              return crypto.getRandomValues(new BigUint64Array(1)), !0;
            } catch (t) {
              return !1;
            }
          })()
            ? Pn
            : Un),
      xn(t)
    );
  }
  function Pn(t) {
    var e = crypto.getRandomValues(new BigUint64Array(1))[0];
    return 63 === t && (e >>= BigInt("1")), e;
  }
  function Un(t) {
    var e = Mn().getRandomValues(new Uint32Array(2));
    return (
      63 === t && (e[e.length - 1] >>>= 1),
      {
        toString: function (t) {
          void 0 === t && (t = 10);
          var n = e[1],
            r = e[0],
            i = "";
          do {
            var o = (n % t) * 4294967296 + r;
            (n = Math.floor(n / t)),
              (r = Math.floor(o / t)),
              (i = (o % t).toString(t) + i);
          } while (n || r);
          return i;
        },
      }
    );
  }
  function zn(t) {
    var e = t.toString(16);
    return Array(17 - e.length).join("0") + e;
  }
  function Bn(t) {
    0 !== t.status ||
      t.isAborted ||
      ((t.traceId = void 0), (t.spanId = void 0), (t.traceSampled = void 0));
  }
  function Vn(t, e, n, r) {
    if (void 0 !== Mn() && n.findTrackedSession()) {
      var i = y(t.allowedTracingUrls, function (t) {
        return On([t.match], e.url, !0);
      });
      if (i) {
        var o = Dn(64);
        (e.traceSampled = (function (t, e) {
          if (100 === e) return !0;
          if (0 === e) return !1;
          if ("bigint" != typeof t) return Pt(e);
          var n = BigInt("1111111111111111111"),
            r = BigInt("0x10000000000000000");
          return Number((t * n) % r) <= (e / 100) * Number(r);
        })(o, t.traceSampleRate)),
          (e.traceSampled || t.traceContextInjection === En.ALL) &&
            ((e.traceId = o),
            (e.spanId = Ln()),
            r(
              (function (t, e, n, r) {
                var i = {};
                return (
                  r.forEach(function (r) {
                    switch (r) {
                      case "datadog":
                        S(i, {
                          "x-datadog-origin": "rum",
                          "x-datadog-parent-id": e.toString(),
                          "x-datadog-sampling-priority": n ? "1" : "0",
                          "x-datadog-trace-id": t.toString(),
                        });
                        break;
                      case "tracecontext":
                        S(i, {
                          traceparent: "00-0000000000000000"
                            .concat(zn(t), "-")
                            .concat(zn(e), "-0")
                            .concat(n ? "1" : "0"),
                        });
                        break;
                      case "b3":
                        S(i, {
                          b3: ""
                            .concat(zn(t), "-")
                            .concat(zn(e), "-")
                            .concat(n ? "1" : "0"),
                        });
                        break;
                      case "b3multi":
                        S(i, {
                          "X-B3-TraceId": zn(t),
                          "X-B3-SpanId": zn(e),
                          "X-B3-Sampled": n ? "1" : "0",
                        });
                    }
                  }),
                  i
                );
              })(e.traceId, e.spanId, e.traceSampled, i.propagatorTypes)
            ));
      }
    }
  }
  var Fn = ["tracecontext", "datadog"];
  function qn(t) {
    var e, n, r;
    if (t.applicationId) {
      if (
        Rn(t.sessionReplaySampleRate, "Session Replay") &&
        Rn(t.traceSampleRate, "Trace")
      )
        if (
          void 0 === t.excludedActivityUrls ||
          Array.isArray(t.excludedActivityUrls)
        ) {
          var o = (function (t) {
            if (void 0 === t.allowedTracingUrls) return [];
            if (!Array.isArray(t.allowedTracingUrls))
              return void i.error("Allowed Tracing URLs should be an array");
            if (0 !== t.allowedTracingUrls.length && void 0 === t.service)
              return void i.error(
                "Service needs to be configured when tracing is enabled"
              );
            var e = [];
            return (
              t.allowedTracingUrls.forEach(function (t) {
                var n;
                Nn(t)
                  ? e.push({ match: t, propagatorTypes: Fn })
                  : "object" === F((n = t)) &&
                    Nn(n.match) &&
                    Array.isArray(n.propagatorTypes)
                  ? e.push(t)
                  : i.warn(
                      "Allowed Tracing Urls parameters should be a string, RegExp, function, or an object. Ignoring parameter",
                      t
                    );
              }),
              e
            );
          })(t);
          if (o) {
            var a = In(t);
            if (a) {
              var s =
                null !== (e = t.sessionReplaySampleRate) && void 0 !== e
                  ? e
                  : 0;
              return S(
                {
                  applicationId: t.applicationId,
                  version: t.version || void 0,
                  actionNameAttribute: t.actionNameAttribute,
                  sessionReplaySampleRate: s,
                  startSessionReplayRecordingManually:
                    void 0 !== t.startSessionReplayRecordingManually
                      ? !!t.startSessionReplayRecordingManually
                      : 0 === s,
                  traceSampleRate:
                    null !== (n = t.traceSampleRate) && void 0 !== n ? n : 100,
                  rulePsr: zt(t.traceSampleRate)
                    ? t.traceSampleRate / 100
                    : void 0,
                  allowedTracingUrls: o,
                  excludedActivityUrls:
                    null !== (r = t.excludedActivityUrls) && void 0 !== r
                      ? r
                      : [],
                  workerUrl: t.workerUrl,
                  compressIntakeRequests: !!t.compressIntakeRequests,
                  trackUserInteractions: !!t.trackUserInteractions,
                  trackViewsManually: !!t.trackViewsManually,
                  trackResources: !!t.trackResources,
                  trackLongTasks: !!t.trackLongTasks,
                  subdomain: t.subdomain,
                  defaultPrivacyLevel: U(Tn, t.defaultPrivacyLevel)
                    ? t.defaultPrivacyLevel
                    : Tn.MASK,
                  enablePrivacyForActionName: !!t.enablePrivacyForActionName,
                  customerDataTelemetrySampleRate: 1,
                  traceContextInjection: U(En, t.traceContextInjection)
                    ? t.traceContextInjection
                    : En.ALL,
                  plugins: t.plugins || [],
                },
                a
              );
            }
          }
        } else i.error("Excluded Activity Urls should be an array");
    } else
      i.error(
        "Application ID is not configured, no RUM data will be collected."
      );
  }
  function jn(t) {
    var e = new Set();
    return (
      Array.isArray(t.allowedTracingUrls) &&
        t.allowedTracingUrls.length > 0 &&
        t.allowedTracingUrls.forEach(function (t) {
          Nn(t)
            ? Fn.forEach(function (t) {
                return e.add(t);
              })
            : "object" === F(t) &&
              Array.isArray(t.propagatorTypes) &&
              t.propagatorTypes.forEach(function (t) {
                return e.add(t);
              });
        }),
      g(e)
    );
  }
  var Hn = "https://d3uc069fcn7uxw.cloudfront.net/configuration";
  function Gn(t, e) {
    !(function (t, e) {
      var n = new XMLHttpRequest();
      Z(t, n, "load", function () {
        200 === n.status ? e(JSON.parse(n.responseText)) : Wn();
      }),
        Z(t, n, "error", function () {
          Wn();
        }),
        n.open(
          "GET",
          ""
            .concat(Hn, "/")
            .concat(encodeURIComponent(t.remoteConfigurationId), ".json")
        ),
        n.send();
    })(t, function (n) {
      e(
        (function (t, e) {
          return S({}, t, e);
        })(t, n)
      );
    });
  }
  function Wn() {
    i.error("Error fetching the remote configuration.");
  }
  function Kn(t, e, n, r, o) {
    var a,
      s,
      u,
      c,
      l = t.ignoreInitIfSyntheticsWillInjectRum,
      d = t.startDeflateWorker,
      f = ie(),
      p = n.observable.subscribe(v);
    function v() {
      if (u && c && n.isGranted()) {
        var t;
        if ((p.unsubscribe(), c.trackViewsManually)) {
          if (!a) return;
          f.remove(a.callback), (t = a.options);
        }
        var e = o(c, s, t);
        f.drain(e);
      }
    }
    function h(t) {
      var e = Ae();
      if (
        (e &&
          (t = (function (t) {
            var e, n;
            return S({}, t, {
              applicationId: "00000000-aaaa-0000-aaaa-000000000000",
              clientToken: "empty",
              sessionSampleRate: 100,
              defaultPrivacyLevel:
                null !== (e = t.defaultPrivacyLevel) && void 0 !== e
                  ? e
                  : null === (n = Te()) || void 0 === n
                  ? void 0
                  : n.getPrivacyLevel(),
            });
          })(t)),
        (u = t),
        (function (t) {
          de({ type: ae, configuration: t });
        })(
          (function (t) {
            var e,
              n,
              r = {
                session_sample_rate: (n = t).sessionSampleRate,
                telemetry_sample_rate: n.telemetrySampleRate,
                telemetry_configuration_sample_rate:
                  n.telemetryConfigurationSampleRate,
                telemetry_usage_sample_rate: n.telemetryUsageSampleRate,
                use_before_send: !!n.beforeSend,
                use_cross_site_session_cookie: n.useCrossSiteSessionCookie,
                use_partitioned_cross_site_session_cookie:
                  n.usePartitionedCrossSiteSessionCookie,
                use_secure_session_cookie: n.useSecureSessionCookie,
                use_proxy: !!n.proxy,
                silent_multiple_init: n.silentMultipleInit,
                track_session_across_subdomains: n.trackSessionAcrossSubdomains,
                session_persistence: n.sessionPersistence,
                allow_fallback_to_local_storage:
                  !!n.allowFallbackToLocalStorage,
                store_contexts_across_pages: !!n.storeContextsAcrossPages,
                allow_untrusted_events: !!n.allowUntrustedEvents,
                tracking_consent: n.trackingConsent,
              };
            return S(
              {
                session_replay_sample_rate: t.sessionReplaySampleRate,
                start_session_replay_recording_manually:
                  t.startSessionReplayRecordingManually,
                trace_sample_rate: t.traceSampleRate,
                trace_context_injection: t.traceContextInjection,
                action_name_attribute: t.actionNameAttribute,
                use_allowed_tracing_urls:
                  Array.isArray(t.allowedTracingUrls) &&
                  t.allowedTracingUrls.length > 0,
                selected_tracing_propagators: jn(t),
                default_privacy_level: t.defaultPrivacyLevel,
                enable_privacy_for_action_name: t.enablePrivacyForActionName,
                use_excluded_activity_urls:
                  Array.isArray(t.excludedActivityUrls) &&
                  t.excludedActivityUrls.length > 0,
                use_worker_url: !!t.workerUrl,
                compress_intake_requests: t.compressIntakeRequests,
                track_views_manually: t.trackViewsManually,
                track_user_interactions: t.trackUserInteractions,
                track_resources: t.trackResources,
                track_long_task: t.trackLongTasks,
                plugins:
                  null === (e = t.plugins) || void 0 === e
                    ? void 0
                    : e.map(function (t) {
                        var e;
                        return S(
                          { name: t.name },
                          null === (e = t.getConfigurationTelemetry) ||
                            void 0 === e
                            ? void 0
                            : e.call(t)
                        );
                      }),
              },
              r
            );
          })(t)
        ),
        c)
      )
        ye("DD_RUM", t);
      else {
        var r = qn(t);
        r &&
          (e || r.sessionStoreStrategyType
            ? (r.compressIntakeRequests &&
                !e &&
                d &&
                !(s = d(r, "Datadog RUM", M))) ||
              ((c = r), ze().subscribe(M), n.tryToInit(r.trackingConsent), v())
            : i.warn(
                "No storage available for session. We will not send any data."
              ));
      }
    }
    var m = function (t) {
      f.add(function (e) {
        return e.addDurationVital(t);
      });
    };
    return {
      init: function (t, e) {
        t
          ? (Et(t.enableExperimentalFeatures),
            (u = t),
            (l && He()) ||
              (!(function (t, e, n) {
                if (t)
                  for (var r = 0, i = t; r < i.length; r++) {
                    var o = i[r][e];
                    o && o(n);
                  }
              })(t.plugins, "onInit", { initConfiguration: t, publicApi: e }),
              t.remoteConfigurationId && At(bt.REMOTE_CONFIGURATION)
                ? Gn(t, h)
                : h(t)))
          : i.error("Missing configuration");
      },
      get initConfiguration() {
        return u;
      },
      getInternalContext: M,
      stopSession: M,
      addTiming: function (t, e) {
        void 0 === e && (e = Kt()),
          f.add(function (n) {
            return n.addTiming(t, e);
          });
      },
      startView: function (t, e) {
        void 0 === e && (e = Yt());
        var n = function (n) {
          n.startView(t, e);
        };
        f.add(n), a || ((a = { options: t, callback: n }), v());
      },
      setViewName: function (t) {
        f.add(function (e) {
          return e.setViewName(t);
        });
      },
      setViewContext: function (t) {
        f.add(function (e) {
          return e.setViewContext(t);
        });
      },
      setViewContextProperty: function (t, e) {
        f.add(function (n) {
          return n.setViewContextProperty(t, e);
        });
      },
      addAction: function (t, n) {
        void 0 === n && (n = e()),
          f.add(function (e) {
            return e.addAction(t, n);
          });
      },
      addError: function (t, n) {
        void 0 === n && (n = e()),
          f.add(function (e) {
            return e.addError(t, n);
          });
      },
      addFeatureFlagEvaluation: function (t, e) {
        f.add(function (n) {
          return n.addFeatureFlagEvaluation(t, e);
        });
      },
      startDurationVital: function (t, e) {
        return Ce(r, t, e);
      },
      stopDurationVital: function (t, e) {
        xe(m, r, t, e);
      },
      addDurationVital: m,
    };
  }
  var Jn = {
    HIDDEN: "visibility_hidden",
    UNLOADING: "before_unload",
    PAGEHIDE: "page_hide",
    FROZEN: "page_frozen",
  };
  function Yn(t) {
    return m(_(Jn), t);
  }
  function Xn() {
    var t,
      e = window;
    if (
      e.Zone &&
      ((t = E(e, "MutationObserver")),
      e.MutationObserver && t === e.MutationObserver)
    ) {
      var n = E(new e.MutationObserver(M), "originalInstance");
      t = n && n.constructor;
    }
    return t || (t = e.MutationObserver), t;
  }
  var $n = "agent",
    Zn = "console",
    Qn = "custom",
    tr = "source",
    er = "report";
  function nr(t, e, n) {
    var r = 0,
      i = !1;
    return {
      isLimitReached: function () {
        if (
          (0 === r &&
            A(function () {
              r = 0;
            }, Ft),
          (r += 1) <= e || i)
        )
          return (i = !1), !1;
        if (r === e + 1) {
          i = !0;
          try {
            n({
              message: "Reached max number of "
                .concat(t, "s by minute: ")
                .concat(e),
              source: $n,
              startClocks: Yt(),
            });
          } finally {
            i = !1;
          }
        }
        return !0;
      },
    };
  }
  function rr() {
    var t,
      e =
        "string" ==
        typeof (t =
          window._DATADOG_SYNTHETICS_PUBLIC_ID ||
          Fe("datadog-synthetics-public-id"))
          ? t
          : void 0,
      n = (function () {
        var t =
          window._DATADOG_SYNTHETICS_RESULT_ID ||
          Fe("datadog-synthetics-result-id");
        return "string" == typeof t ? t : void 0;
      })();
    if (e && n) return { test_id: e, result_id: n, injected: He() };
  }
  function ir(t, e, n) {
    var r = j(t),
      i = n(r);
    return (
      b(e).forEach(function (e) {
        var n = e[0],
          i = e[1],
          o = (function (t, e) {
            for (var n = t, r = 0, i = e.split("."); r < i.length; r++) {
              var o = i[r];
              if (!sr(n, o)) return;
              n = n[o];
            }
            return n;
          })(r, n),
          a = F(o);
        a === i
          ? or(t, n, G(o))
          : "object" !== i ||
            ("undefined" !== a && "null" !== a) ||
            or(t, n, {});
      }),
      i
    );
  }
  function or(t, e, n) {
    for (var r = t, i = e.split("."), o = 0; o < i.length; o += 1) {
      var a = i[o];
      if (!ar(r)) return;
      o !== i.length - 1 ? (r = r[a]) : (r[a] = n);
    }
  }
  function ar(t) {
    return "object" === F(t);
  }
  function sr(t, e) {
    return ar(t) && Object.prototype.hasOwnProperty.call(t, e);
  }
  var ur,
    cr = {
      "view.name": "string",
      "view.url": "string",
      "view.referrer": "string",
    },
    lr = { context: "object" },
    dr = { service: "string", version: "string" };
  function fr(t, e, n, r, o, a, s, u, c, l) {
    var d, f;
    ((d = {}).view = S({}, lr, cr)),
      (d.error = S(
        {
          "error.message": "string",
          "error.stack": "string",
          "error.resource.url": "string",
          "error.fingerprint": "string",
        },
        lr,
        cr,
        dr
      )),
      (d.resource = S(
        { "resource.url": "string" },
        At(bt.WRITABLE_RESOURCE_GRAPHQL)
          ? { "resource.graphql": "object" }
          : {},
        lr,
        cr,
        dr
      )),
      (d.action = S({ "action.target.name": "string" }, lr, cr, dr)),
      (d.long_task = S({}, lr, cr)),
      (d.vital = S({}, lr, cr)),
      (ur = d);
    var p =
        (((f = {}).error = nr("error", t.eventRateLimiterThreshold, l)),
        (f.action = nr("action", t.eventRateLimiterThreshold, l)),
        (f.vital = nr("vital", t.eventRateLimiterThreshold, l)),
        f),
      v = rr();
    e.subscribe(12, function (l) {
      var d,
        f = l.startTime,
        h = l.rawRumEvent,
        m = l.domainContext,
        g = l.savedCommonContext,
        y = l.customerContext,
        _ = r.findView(f),
        b = o.findUrl(f),
        w = n.findTrackedSession(f);
      if (w && _ && b) {
        var S = g || c(),
          k = a.findActionId(f),
          C = H(
            {
              _dd: {
                format_version: 2,
                drift: Math.round(Wt() - Zt(te(), performance.now())),
                configuration: {
                  session_sample_rate: Ut(t.sessionSampleRate, 3),
                  session_replay_sample_rate: Ut(t.sessionReplaySampleRate, 3),
                },
                browser_sdk_version: Ae() ? "5.35.1" : void 0,
              },
              application: { id: t.applicationId },
              date: Kt(),
              service: _.service || t.service,
              version: _.version || t.version,
              source: "browser",
              session: {
                id: w.id,
                type: v ? "synthetics" : u.get() ? "ci_test" : "user",
              },
              view: {
                id: _.id,
                name: _.name,
                url: b.url,
                referrer: b.referrer,
              },
              action:
                ((d = h),
                -1 !== ["error", "resource", "long_task"].indexOf(d.type) && k
                  ? { id: k }
                  : void 0),
              synthetics: v,
              ci_test: u.get(),
              display: s.get(),
              connectivity: ne(),
            },
            h
          );
        (C.context = H(S.context, _.context, y)),
          "has_replay" in C.session || (C.session.has_replay = S.hasReplay),
          "view" === C.type &&
            (C.session.sampled_for_replay = 1 === w.sessionReplay),
          At(bt.ANONYMOUS_USER_TRACKING) &&
            !S.user.anonymous_id &&
            (S.user.anonymous_id = w.anonymousId),
          z(S.user) || (C.usr = S.user),
          (function (t, e, n, r) {
            var o;
            if (e) {
              var a = ir(t, ur[t.type], function (t) {
                return e(t, n);
              });
              if (!1 === a && "view" !== t.type) return !1;
              !1 === a && i.warn("Can't dismiss view events using beforeSend!");
            }
            var s =
              null === (o = r[t.type]) || void 0 === o
                ? void 0
                : o.isLimitReached();
            return !s;
          })(C, t.beforeSend, m, p) &&
            (z(C.context) && delete C.context, e.notify(13, C));
      }
    });
  }
  var pr = (function () {
      function t() {
        this.callbacks = {};
      }
      return (
        (t.prototype.notify = function (t, e) {
          var n = this.callbacks[t];
          n &&
            n.forEach(function (t) {
              return t(e);
            });
        }),
        (t.prototype.subscribe = function (t, e) {
          var n = this;
          return (
            this.callbacks[t] || (this.callbacks[t] = []),
            this.callbacks[t].push(e),
            {
              unsubscribe: function () {
                n.callbacks[t] = n.callbacks[t].filter(function (t) {
                  return e !== t;
                });
              },
            }
          );
        }),
        t
      );
    })(),
    vr = 1 / 0;
  function hr(t) {
    var e = t.expireDelay,
      n = t.maxEntries,
      r = [],
      i = I(function () {
        return (function () {
          var t = Jt() - e;
          for (; r.length > 0 && r[r.length - 1].endTime < t; ) r.pop();
        })();
      }, 6e4);
    return {
      add: function (t, e) {
        var i = {
          value: t,
          startTime: e,
          endTime: vr,
          remove: function () {
            re(r, i);
          },
          close: function (t) {
            i.endTime = t;
          },
        };
        return n && r.length >= n && r.pop(), r.unshift(i), i;
      },
      find: function (t, e) {
        void 0 === t && (t = vr), void 0 === e && (e = { returnInactive: !1 });
        for (var n = 0, i = r; n < i.length; n++) {
          var o = i[n];
          if (o.startTime <= t) {
            if (e.returnInactive || t <= o.endTime) return o.value;
            break;
          }
        }
      },
      closeActive: function (t) {
        var e = r[0];
        e && e.endTime === vr && e.close(t);
      },
      findAll: function (t, e) {
        void 0 === t && (t = vr), void 0 === e && (e = 0);
        var n = Zt(t, e);
        return r
          .filter(function (e) {
            return e.startTime <= n && t <= e.endTime;
          })
          .map(function (t) {
            return t.value;
          });
      },
      reset: function () {
        r = [];
      },
      stop: function () {
        N(i);
      },
    };
  }
  var mr,
    gr = Ke;
  var yr = new WeakMap();
  function _r(t) {
    return (
      mr ||
        (mr = (function (t) {
          return new J(function (e) {
            var n = Re(XMLHttpRequest.prototype, "open", br).stop,
              r = Re(
                XMLHttpRequest.prototype,
                "send",
                function (n) {
                  !(function (t, e, n) {
                    var r = t.target,
                      i = t.handlingStack,
                      o = yr.get(r);
                    if (!o) return;
                    var a = o;
                    (a.state = "start"),
                      (a.startClocks = Yt()),
                      (a.isAborted = !1),
                      (a.xhr = r),
                      (a.handlingStack = i);
                    var s = !1,
                      u = Re(r, "onreadystatechange", function () {
                        r.readyState === XMLHttpRequest.DONE && c();
                      }).stop,
                      c = function () {
                        if ((l(), u(), !s)) {
                          s = !0;
                          var t = o;
                          (t.state = "complete"),
                            (t.duration = $t(a.startClocks.timeStamp, Kt())),
                            (t.status = r.status),
                            n.notify(P(t));
                        }
                      },
                      l = Z(e, r, "loadend", c).stop;
                    n.notify(a);
                  })(n, t, e);
                },
                { computeHandlingStack: !0 }
              ).stop,
              i = Re(XMLHttpRequest.prototype, "abort", wr).stop;
            return function () {
              n(), r(), i();
            };
          });
        })(t)),
      mr
    );
  }
  function br(t) {
    var e = t.target,
      n = t.parameters,
      r = n[0],
      i = n[1];
    yr.set(e, {
      state: "open",
      method: String(r).toUpperCase(),
      url: Ne(String(i)),
    });
  }
  function wr(t) {
    var e = t.target,
      n = yr.get(e);
    n && (n.isAborted = !0);
  }
  var Sr = "initial_document",
    kr = [
      [
        "document",
        function (t) {
          return Sr === t;
        },
      ],
      [
        "xhr",
        function (t) {
          return "xmlhttprequest" === t;
        },
      ],
      [
        "fetch",
        function (t) {
          return "fetch" === t;
        },
      ],
      [
        "beacon",
        function (t) {
          return "beacon" === t;
        },
      ],
      [
        "css",
        function (t, e) {
          return /\.css$/i.test(e);
        },
      ],
      [
        "js",
        function (t, e) {
          return /\.js$/i.test(e);
        },
      ],
      [
        "image",
        function (t, e) {
          return (
            m(["image", "img", "icon"], t) ||
            null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(e)
          );
        },
      ],
      [
        "font",
        function (t, e) {
          return null !== /\.(woff|eot|woff2|ttf)$/i.exec(e);
        },
      ],
      [
        "media",
        function (t, e) {
          return m(["audio", "video"], t) || null !== /\.(mp3|mp4)$/i.exec(e);
        },
      ],
    ];
  function Cr(t) {
    var e = t.name;
    if (
      !(function (t) {
        try {
          return !!Oe(t);
        } catch (t) {
          return !1;
        }
      })(e)
    )
      return pe('Failed to construct URL for "'.concat(t.name, '"')), "other";
    for (
      var n = (function (t) {
          var e = Oe(t).pathname;
          return "/" === e[0] ? e : "/".concat(e);
        })(e),
        r = 0,
        i = kr;
      r < i.length;
      r++
    ) {
      var o = i[r],
        a = o[0];
      if ((0, o[1])(t.initiatorType, n)) return a;
    }
    return "other";
  }
  function xr() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = 1; n < t.length; n += 1) if (t[n - 1] > t[n]) return !1;
    return !0;
  }
  function Tr(t) {
    var e = t.duration,
      n = t.startTime,
      r = t.responseEnd;
    return Gt(0 === e && n < r ? $t(n, r) : e);
  }
  function Er(t) {
    if (Rr(t)) {
      var e = t.startTime,
        n = t.fetchStart,
        r = t.workerStart,
        i = t.redirectStart,
        o = t.redirectEnd,
        a = t.domainLookupStart,
        s = t.domainLookupEnd,
        u = t.connectStart,
        c = t.secureConnectionStart,
        l = t.connectEnd,
        d = t.requestStart,
        f = t.responseStart,
        p = { download: Ir(e, f, t.responseEnd), first_byte: Ir(e, d, f) };
      return (
        0 < r && r < n && (p.worker = Ir(e, r, n)),
        n < l &&
          ((p.connect = Ir(e, u, l)),
          u <= c && c <= l && (p.ssl = Ir(e, c, l))),
        n < s && (p.dns = Ir(e, a, s)),
        e < o && (p.redirect = Ir(e, i, o)),
        p
      );
    }
  }
  function Ar(t) {
    return t.duration >= 0;
  }
  function Rr(t) {
    var e = xr(
        t.startTime,
        t.fetchStart,
        t.domainLookupStart,
        t.domainLookupEnd,
        t.connectStart,
        t.connectEnd,
        t.requestStart,
        t.responseStart,
        t.responseEnd
      ),
      n =
        !(function (t) {
          return t.redirectEnd > t.startTime;
        })(t) || xr(t.startTime, t.redirectStart, t.redirectEnd, t.fetchStart);
    return e && n;
  }
  function Ir(t, e, n) {
    if (t <= e && e <= n)
      return { duration: Gt($t(e, n)), start: Gt($t(t, e)) };
  }
  function Nr(t) {
    return "" === t.nextHopProtocol ? void 0 : t.nextHopProtocol;
  }
  function Or(t) {
    return "" === t.deliveryType ? "other" : t.deliveryType;
  }
  function Mr(t) {
    if (t.startTime < t.responseStart) {
      var e = t.encodedBodySize,
        n = t.decodedBodySize;
      return {
        size: n,
        encoded_body_size: e,
        decoded_body_size: n,
        transfer_size: t.transferSize,
      };
    }
    return {
      size: void 0,
      encoded_body_size: void 0,
      decoded_body_size: void 0,
      transfer_size: void 0,
    };
  }
  function Lr(t) {
    return (
      t &&
      !(function (t) {
        return Dt.every(function (e) {
          return m(t, e);
        });
      })(t)
    );
  }
  var Dr = /data:(.+)?(;base64)?,/g;
  function Pr(t) {
    return (
      !(t.length <= 24e3) &&
      "data:" === t.substring(0, 5) &&
      ((t = t.substring(0, 24e3)), !0)
    );
  }
  function Ur(t) {
    return "".concat(t.match(Dr)[0], "[...]");
  }
  var zr,
    Br,
    Vr = 1;
  function Fr(t, e, n) {
    var r = (function (t, e) {
      return {
        clearTracingIfNeeded: Bn,
        traceFetch: function (n) {
          return Vn(t, n, e, function (t) {
            var e;
            if (
              n.input instanceof Request &&
              !(null === (e = n.init) || void 0 === e ? void 0 : e.headers)
            )
              (n.input = new Request(n.input)),
                Object.keys(t).forEach(function (e) {
                  n.input.headers.append(e, t[e]);
                });
            else {
              n.init = P(n.init);
              var r = [];
              n.init.headers instanceof Headers
                ? n.init.headers.forEach(function (t, e) {
                    r.push([e, t]);
                  })
                : Array.isArray(n.init.headers)
                ? n.init.headers.forEach(function (t) {
                    r.push(t);
                  })
                : n.init.headers &&
                  Object.keys(n.init.headers).forEach(function (t) {
                    r.push([t, n.init.headers[t]]);
                  }),
                (n.init.headers = r.concat(b(t)));
            }
          });
        },
        traceXhr: function (n, r) {
          return Vn(t, n, e, function (t) {
            Object.keys(t).forEach(function (e) {
              r.setRequestHeader(e, t[e]);
            });
          });
        },
      };
    })(e, n);
    !(function (t, e, n) {
      var r = _r(e).subscribe(function (e) {
        var r = e;
        if (Lr(r.url))
          switch (r.state) {
            case "start":
              n.traceXhr(r, r.xhr),
                (r.requestIndex = qr()),
                t.notify(7, { requestIndex: r.requestIndex, url: r.url });
              break;
            case "complete":
              n.clearTracingIfNeeded(r),
                t.notify(8, {
                  duration: r.duration,
                  method: r.method,
                  requestIndex: r.requestIndex,
                  spanId: r.spanId,
                  startClocks: r.startClocks,
                  status: r.status,
                  traceId: r.traceId,
                  traceSampled: r.traceSampled,
                  type: "xhr",
                  url: r.url,
                  xhr: r.xhr,
                  isAborted: r.isAborted,
                  handlingStack: r.handlingStack,
                });
          }
      });
    })(t, e, r),
      (function (t, e) {
        var n = ze().subscribe(function (n) {
          var r = n;
          if (Lr(r.url))
            switch (r.state) {
              case "start":
                e.traceFetch(r),
                  (r.requestIndex = qr()),
                  t.notify(7, { requestIndex: r.requestIndex, url: r.url });
                break;
              case "resolve":
                !(function (t, e) {
                  var n =
                    t.response &&
                    (function (t) {
                      try {
                        return t.clone();
                      } catch (t) {
                        return;
                      }
                    })(t.response);
                  n && n.body
                    ? (function (t, e, n) {
                        var r = t.getReader(),
                          i = [],
                          o = 0;
                        function a() {
                          var t, a;
                          if ((r.cancel().catch(M), n.collectStreamBody)) {
                            var s;
                            if (1 === i.length) s = i[0];
                            else {
                              s = new Uint8Array(o);
                              var u = 0;
                              i.forEach(function (t) {
                                s.set(t, u), (u += t.length);
                              });
                            }
                            (t = s.slice(0, n.bytesLimit)),
                              (a = s.length > n.bytesLimit);
                          }
                          e(void 0, t, a);
                        }
                        !(function t() {
                          r.read().then(
                            p(function (e) {
                              e.done
                                ? a()
                                : (n.collectStreamBody && i.push(e.value),
                                  (o += e.value.length) > n.bytesLimit
                                    ? a()
                                    : t());
                            }),
                            p(function (t) {
                              return e(t);
                            })
                          );
                        })();
                      })(
                        n.body,
                        function () {
                          e($t(t.startClocks.timeStamp, Kt()));
                        },
                        {
                          bytesLimit: Number.POSITIVE_INFINITY,
                          collectStreamBody: !1,
                        }
                      )
                    : e($t(t.startClocks.timeStamp, Kt()));
                })(r, function (n) {
                  e.clearTracingIfNeeded(r),
                    t.notify(8, {
                      duration: n,
                      method: r.method,
                      requestIndex: r.requestIndex,
                      responseType: r.responseType,
                      spanId: r.spanId,
                      startClocks: r.startClocks,
                      status: r.status,
                      traceId: r.traceId,
                      traceSampled: r.traceSampled,
                      type: "fetch",
                      url: r.url,
                      response: r.response,
                      init: r.init,
                      input: r.input,
                      isAborted: r.isAborted,
                      handlingStack: r.handlingStack,
                    });
                });
            }
        });
      })(t, r);
  }
  function qr() {
    var t = Vr;
    return (Vr += 1), t;
  }
  function jr(t) {
    return zt(t) && t < 0 ? void 0 : t;
  }
  function Hr(t) {
    var e = t.lifeCycle,
      n = t.isChildEvent,
      r = t.onChange,
      i = void 0 === r ? M : r,
      o = {
        errorCount: 0,
        longTaskCount: 0,
        resourceCount: 0,
        actionCount: 0,
        frustrationCount: 0,
      },
      a = e.subscribe(13, function (t) {
        var e;
        if ("view" !== t.type && "vital" !== t.type && n(t))
          switch (t.type) {
            case "error":
              (o.errorCount += 1), i();
              break;
            case "action":
              (o.actionCount += 1),
                t.action.frustration &&
                  (o.frustrationCount += t.action.frustration.type.length),
                i();
              break;
            case "long_task":
              (o.longTaskCount += 1), i();
              break;
            case "resource":
              (null === (e = t._dd) || void 0 === e ? void 0 : e.discarded) ||
                ((o.resourceCount += 1), i());
          }
      });
    return {
      stop: function () {
        a.unsubscribe();
      },
      eventCounts: o,
    };
  }
  function Gr(t, e) {
    var n = Wt(),
      r = !1,
      i = Q(
        t,
        window,
        ["click", "mousedown", "keydown", "touchstart", "pointerdown"],
        function (e) {
          if (e.cancelable) {
            var n = {
              entryType: "first-input",
              processingStart: Jt(),
              processingEnd: Jt(),
              startTime: e.timeStamp,
              duration: 0,
              name: "",
              cancelable: !1,
              target: null,
              toJSON: function () {
                return {};
              },
            };
            "pointerdown" === e.type
              ? (function (t, e) {
                  Q(
                    t,
                    window,
                    ["pointerup", "pointercancel"],
                    function (t) {
                      "pointerup" === t.type && o(e);
                    },
                    { once: !0 }
                  );
                })(t, n)
              : o(n);
          }
        },
        { passive: !0, capture: !0 }
      ).stop;
    return { stop: i };
    function o(t) {
      if (!r) {
        (r = !0), i();
        var o = t.processingStart - t.startTime;
        o >= 0 && o < Wt() - n && e(t);
      }
    }
  }
  function Wr(t, e) {
    return new J(function (n) {
      if (window.PerformanceObserver) {
        var r,
          i,
          o = function (t) {
            var e = (function (t) {
              return t.filter(function (t) {
                return !(function (t) {
                  return !(
                    t.entryType !== zr.RESOURCE ||
                    (Lr(t.name) && Ar(t))
                  );
                })(t);
              });
            })(t);
            e.length > 0 && n.notify(e);
          },
          a = !0,
          s = new PerformanceObserver(
            p(function (t) {
              a
                ? (r = A(function () {
                    return o(t.getEntries());
                  }))
                : o(t.getEntries());
            })
          );
        try {
          s.observe(e);
        } catch (t) {
          if (m([zr.RESOURCE, zr.NAVIGATION, zr.LONG_TASK, zr.PAINT], e.type)) {
            e.buffered &&
              (r = A(function () {
                return o(performance.getEntriesByType(e.type));
              }));
            try {
              s.observe({ entryTypes: [e.type] });
            } catch (t) {
              return;
            }
          }
        }
        return (
          (a = !1),
          (function (t) {
            !Br &&
              void 0 !== window.performance &&
              "getEntries" in performance &&
              "addEventListener" in performance &&
              (Br = Z(t, performance, "resourcetimingbufferfull", function () {
                performance.clearResourceTimings();
              }));
          })(t),
          Kr(zr.FIRST_INPUT) ||
            e.type !== zr.FIRST_INPUT ||
            (i = Gr(t, function (t) {
              o([t]);
            }).stop),
          function () {
            s.disconnect(), i && i(), R(r);
          }
        );
      }
    });
  }
  function Kr(t) {
    return (
      window.PerformanceObserver &&
      void 0 !== PerformanceObserver.supportedEntryTypes &&
      PerformanceObserver.supportedEntryTypes.includes(t)
    );
  }
  !(function (t) {
    (t.EVENT = "event"),
      (t.FIRST_INPUT = "first-input"),
      (t.LARGEST_CONTENTFUL_PAINT = "largest-contentful-paint"),
      (t.LAYOUT_SHIFT = "layout-shift"),
      (t.LONG_TASK = "longtask"),
      (t.LONG_ANIMATION_FRAME = "long-animation-frame"),
      (t.NAVIGATION = "navigation"),
      (t.PAINT = "paint"),
      (t.RESOURCE = "resource");
  })(zr || (zr = {}));
  var Jr = 100;
  function Yr(t, e, n, r, i, o) {
    var a = (function (t, e, n, r) {
      return new J(function (i) {
        var o,
          a = [],
          s = 0;
        return (
          a.push(
            e.subscribe(u),
            n.subscribe(u),
            Wr(r, { type: zr.RESOURCE }).subscribe(function (t) {
              t.some(function (t) {
                return !Xr(r, t.name);
              }) && u();
            }),
            t.subscribe(7, function (t) {
              Xr(r, t.url) ||
                (void 0 === o && (o = t.requestIndex), (s += 1), u());
            }),
            t.subscribe(8, function (t) {
              Xr(r, t.url) ||
                void 0 === o ||
                t.requestIndex < o ||
                ((s -= 1), u());
            })
          ),
          function () {
            a.forEach(function (t) {
              return t.unsubscribe();
            });
          }
        );
        function u() {
          i.notify({ isBusy: s > 0 });
        }
      });
    })(t, e, n, r);
    return (function (t, e, n) {
      var r,
        i = !1,
        o = A(
          p(function () {
            return c({ hadActivity: !1 });
          }),
          100
        ),
        a =
          void 0 !== n
            ? A(
                p(function () {
                  return c({ hadActivity: !0, end: Kt() });
                }),
                n
              )
            : void 0,
        s = t.subscribe(function (t) {
          var e = t.isBusy;
          R(o), R(r);
          var n = Kt();
          e ||
            (r = A(
              p(function () {
                return c({ hadActivity: !0, end: n });
              }),
              100
            ));
        }),
        u = function () {
          (i = !0), R(o), R(r), R(a), s.unsubscribe();
        };
      function c(t) {
        i || (u(), e(t));
      }
      return { stop: u };
    })(a, i, o);
  }
  function Xr(t, e) {
    return On(t.excludedActivityUrls, e);
  }
  function $r(t) {
    return window.CSS && window.CSS.escape
      ? window.CSS.escape(t)
      : t.replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          function (t, e) {
            return e
              ? "\0" === t
                ? "�"
                : ""
                    .concat(t.slice(0, -1), "\\")
                    .concat(t.charCodeAt(t.length - 1).toString(16), " ")
              : "\\".concat(t);
          }
        );
  }
  function Zr(t, e) {
    return t.matches
      ? t.matches(e)
      : !!t.msMatchesSelector && t.msMatchesSelector(e);
  }
  function Qr(t) {
    if (t.parentElement) return t.parentElement;
    for (; t.parentNode; ) {
      if (t.parentNode.nodeType === Node.ELEMENT_NODE) return t.parentNode;
      t = t.parentNode;
    }
    return null;
  }
  var ti = (function () {
    function t(t) {
      var e = this;
      (this.map = new WeakMap()),
        t &&
          t.forEach(function (t) {
            return e.map.set(t, 1);
          });
    }
    return (
      (t.prototype.add = function (t) {
        return this.map.set(t, 1), this;
      }),
      (t.prototype.delete = function (t) {
        return this.map.delete(t);
      }),
      (t.prototype.has = function (t) {
        return this.map.has(t);
      }),
      t
    );
  })();
  function ei(t) {
    return t.nodeType === Node.TEXT_NODE;
  }
  function ni(t) {
    return t.nodeType === Node.ELEMENT_NODE;
  }
  function ri(t) {
    return ni(t) && Boolean(t.shadowRoot);
  }
  function ii(t) {
    var e = t;
    return !!e.host && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && ni(e.host);
  }
  function oi(t, e) {
    for (var n = t.firstChild; n; ) e(n), (n = n.nextSibling);
    ri(t) && e(t.shadowRoot);
  }
  function ai(t) {
    return ii(t) ? t.host : t.parentNode;
  }
  var si = {
      IGNORE: "ignore",
      HIDDEN: "hidden",
      ALLOW: Tn.ALLOW,
      MASK: Tn.MASK,
      MASK_USER_INPUT: Tn.MASK_USER_INPUT,
    },
    ui = "data-dd-privacy",
    ci = "hidden",
    li = "***",
    di =
      "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
    fi = {
      INPUT: !0,
      OUTPUT: !0,
      TEXTAREA: !0,
      SELECT: !0,
      OPTION: !0,
      DATALIST: !0,
      OPTGROUP: !0,
    };
  function pi(t, e, n) {
    if (n && n.has(t)) return n.get(t);
    var r = ai(t),
      i = r ? pi(r, e, n) : e,
      o = vi(hi(t), i);
    return n && n.set(t, o), o;
  }
  function vi(t, e) {
    switch (e) {
      case si.HIDDEN:
      case si.IGNORE:
        return e;
    }
    switch (t) {
      case si.ALLOW:
      case si.MASK:
      case si.MASK_USER_INPUT:
      case si.HIDDEN:
      case si.IGNORE:
        return t;
      default:
        return e;
    }
  }
  function hi(t) {
    if (ni(t)) {
      if ("BASE" === t.tagName) return si.ALLOW;
      if ("INPUT" === t.tagName) {
        var e = t;
        if ("password" === e.type || "email" === e.type || "tel" === e.type)
          return si.MASK;
        if ("hidden" === e.type) return si.MASK;
        var n = e.getAttribute("autocomplete");
        if (n && (n.startsWith("cc-") || n.endsWith("-password")))
          return si.MASK;
      }
      return Zr(t, _i(si.HIDDEN))
        ? si.HIDDEN
        : Zr(t, _i(si.MASK))
        ? si.MASK
        : Zr(t, _i(si.MASK_USER_INPUT))
        ? si.MASK_USER_INPUT
        : Zr(t, _i(si.ALLOW))
        ? si.ALLOW
        : (function (t) {
            if ("SCRIPT" === t.nodeName) return !0;
            if ("LINK" === t.nodeName) {
              var e = i("rel");
              return (
                (/preload|prefetch/i.test(e) && "script" === i("as")) ||
                "shortcut icon" === e ||
                "icon" === e
              );
            }
            if ("META" === t.nodeName) {
              var n = i("name"),
                r = ((e = i("rel")), i("property"));
              return (
                /^msapplication-tile(image|color)$/.test(n) ||
                "application-name" === n ||
                "icon" === e ||
                "apple-touch-icon" === e ||
                "shortcut icon" === e ||
                "keywords" === n ||
                "description" === n ||
                /^(og|twitter|fb):/.test(r) ||
                /^(og|twitter):/.test(n) ||
                "pinterest" === n ||
                "robots" === n ||
                "googlebot" === n ||
                "bingbot" === n ||
                t.hasAttribute("http-equiv") ||
                "author" === n ||
                "generator" === n ||
                "framework" === n ||
                "publisher" === n ||
                "progid" === n ||
                /^article:/.test(r) ||
                /^product:/.test(r) ||
                "google-site-verification" === n ||
                "yandex-verification" === n ||
                "csrf-token" === n ||
                "p:domain_verify" === n ||
                "verify-v1" === n ||
                "verification" === n ||
                "shopify-checkout-api-token" === n
              );
            }
            function i(e) {
              return (t.getAttribute(e) || "").toLowerCase();
            }
            return !1;
          })(t)
        ? si.IGNORE
        : void 0;
    }
  }
  function mi(t, e) {
    switch (e) {
      case si.MASK:
      case si.HIDDEN:
      case si.IGNORE:
        return !0;
      case si.MASK_USER_INPUT:
        return ei(t) ? gi(t.parentNode) : gi(t);
      default:
        return !1;
    }
  }
  function gi(t) {
    if (!t || t.nodeType !== t.ELEMENT_NODE) return !1;
    var e = t;
    if ("INPUT" === e.tagName)
      switch (e.type) {
        case "button":
        case "color":
        case "reset":
        case "submit":
          return !1;
      }
    return !!fi[e.tagName];
  }
  function yi(t, e, n) {
    var r,
      i = null === (r = t.parentElement) || void 0 === r ? void 0 : r.tagName,
      o = t.textContent || "";
    if (!e || o.trim()) {
      if ("SCRIPT" === i) o = li;
      else if (n === si.HIDDEN) o = li;
      else if (mi(t, n))
        if ("DATALIST" === i || "SELECT" === i || "OPTGROUP" === i) {
          if (!o.trim()) return;
        } else o = "OPTION" === i ? li : o.replace(/\S/g, "x");
      return o;
    }
  }
  function _i(t) {
    return "["
      .concat(ui, '="')
      .concat(t, '"], .')
      .concat("dd-privacy-")
      .concat(t);
  }
  var bi = "data-dd-action-name";
  function wi(t, e) {
    var n;
    if (
      (function () {
        void 0 === ki && (ki = "closest" in HTMLElement.prototype);
        return ki;
      })()
    )
      n = t.closest("[".concat(e, "]"));
    else
      for (var r = t; r; ) {
        if (r.hasAttribute(e)) {
          n = r;
          break;
        }
        r = Qr(r);
      }
    if (n) return Ri(Ai(n.getAttribute(e).trim()));
  }
  var Si,
    ki,
    Ci = [
      function (t, e, n) {
        if (
          (function () {
            void 0 === Si && (Si = "labels" in HTMLInputElement.prototype);
            return Si;
          })()
        ) {
          if ("labels" in t && t.labels && t.labels.length > 0)
            return Ni(t.labels[0], e);
        } else if (t.id) {
          var r =
            t.ownerDocument &&
            y(t.ownerDocument.querySelectorAll("label"), function (e) {
              return e.htmlFor === t.id;
            });
          return r && Ni(r, e, n);
        }
      },
      function (t) {
        if ("INPUT" === t.nodeName) {
          var e = t,
            n = e.getAttribute("type");
          if ("button" === n || "submit" === n || "reset" === n)
            return { name: e.value, nameSource: "text_content" };
        }
      },
      function (t, e, n) {
        if (
          "BUTTON" === t.nodeName ||
          "LABEL" === t.nodeName ||
          "button" === t.getAttribute("role")
        )
          return Ni(t, e, n);
      },
      function (t) {
        return Ii(t, "aria-label");
      },
      function (t, e, n) {
        var r = t.getAttribute("aria-labelledby");
        if (r)
          return {
            name: r
              .split(/\s+/)
              .map(function (e) {
                return (function (t, e) {
                  return t.ownerDocument
                    ? t.ownerDocument.getElementById(e)
                    : null;
                })(t, e);
              })
              .filter(function (t) {
                return Boolean(t);
              })
              .map(function (t) {
                return Oi(t, e, n);
              })
              .join(" "),
            nameSource: "text_content",
          };
      },
      function (t) {
        return Ii(t, "alt");
      },
      function (t) {
        return Ii(t, "name");
      },
      function (t) {
        return Ii(t, "title");
      },
      function (t) {
        return Ii(t, "placeholder");
      },
      function (t, e) {
        if ("options" in t && t.options.length > 0) return Ni(t.options[0], e);
      },
    ],
    xi = [
      function (t, e, n) {
        return Ni(t, e, n);
      },
    ],
    Ti = 10;
  function Ei(t, e, n, r) {
    for (
      var i = t, o = 0;
      o <= Ti &&
      i &&
      "BODY" !== i.nodeName &&
      "HTML" !== i.nodeName &&
      "HEAD" !== i.nodeName;

    ) {
      for (var a = 0, s = n; a < s.length; a++) {
        var u = (0, s[a])(i, e, r);
        if (u) {
          var c = u.name,
            l = u.nameSource,
            d = c && c.trim();
          if (d) return { name: Ri(Ai(d)), nameSource: l };
        }
      }
      if ("FORM" === i.nodeName) break;
      (i = Qr(i)), (o += 1);
    }
  }
  function Ai(t) {
    return t.replace(/\s+/g, " ");
  }
  function Ri(t) {
    return t.length > 100 ? "".concat(Se(t, 100), " [...]") : t;
  }
  function Ii(t, e) {
    return { name: t.getAttribute(e) || "", nameSource: "standard_attribute" };
  }
  function Ni(t, e, n) {
    return { name: Oi(t, e, n) || "", nameSource: "text_content" };
  }
  function Oi(t, e, n) {
    if (!t.isContentEditable) {
      if ("innerText" in t) {
        var r = t.innerText,
          i = function (e) {
            for (var n = t.querySelectorAll(e), i = 0; i < n.length; i += 1) {
              var o = n[i];
              if ("innerText" in o) {
                var a = o.innerText;
                a && a.trim().length > 0 && (r = r.replace(a, ""));
              }
            }
          };
        return (
          0 === Ge() && i("script, style"),
          i("[".concat(bi, "]")),
          e && i("[".concat(e, "]")),
          n && i("".concat(_i(si.HIDDEN), ", ").concat(_i(si.MASK))),
          r
        );
      }
      return t.textContent;
    }
  }
  var Mi,
    Li = [
      bi,
      "data-testid",
      "data-test",
      "data-qa",
      "data-cy",
      "data-test-id",
      "data-qa-id",
      "data-testing",
      "data-component",
      "data-element",
      "data-source-file",
    ],
    Di = [
      Bi,
      function (t) {
        if (t.id && !zi(t.id)) return "#".concat($r(t.id));
      },
    ],
    Pi = [
      Bi,
      function (t) {
        if ("BODY" === t.tagName) return;
        for (
          var e = (function (t) {
              if (t.classList) return t.classList;
              var e = (t.getAttribute("class") || "").trim();
              return e ? e.split(/\s+/) : [];
            })(t),
            n = 0;
          n < e.length;
          n += 1
        ) {
          var r = e[n];
          if (!zi(r)) return "".concat($r(t.tagName), ".").concat($r(r));
        }
      },
      function (t) {
        return $r(t.tagName);
      },
    ];
  function Ui(t, e) {
    if (
      (function (t) {
        if ("isConnected" in t) return t.isConnected;
        return t.ownerDocument.documentElement.contains(t);
      })(t)
    ) {
      for (var n, r = t; r && "HTML" !== r.nodeName; ) {
        var i = Fi(r, Di, qi, e, n);
        if (i) return i;
        (n = Fi(r, Pi, ji, e, n) || Hi(Vi(r), n)), (r = Qr(r));
      }
      return n;
    }
  }
  function zi(t) {
    return /[0-9]/.test(t);
  }
  function Bi(t, e) {
    if (e && (i = o(e))) return i;
    for (var n = 0, r = Li; n < r.length; n++) {
      var i;
      if ((i = o(r[n]))) return i;
    }
    function o(e) {
      if (t.hasAttribute(e))
        return ""
          .concat($r(t.tagName), "[")
          .concat(e, '="')
          .concat($r(t.getAttribute(e)), '"]');
    }
  }
  function Vi(t) {
    for (var e = Qr(t).firstElementChild, n = 1; e && e !== t; )
      e.tagName === t.tagName && (n += 1), (e = e.nextElementSibling);
    return "".concat($r(t.tagName), ":nth-of-type(").concat(n, ")");
  }
  function Fi(t, e, n, r, i) {
    for (var o = 0, a = e; o < a.length; o++) {
      var s = (0, a[o])(t, r);
      if (s && n(t, s, i)) return Hi(s, i);
    }
  }
  function qi(t, e, n) {
    return 1 === t.ownerDocument.querySelectorAll(Hi(e, n)).length;
  }
  function ji(t, e, n) {
    var r;
    if (void 0 === n)
      r = function (t) {
        return Zr(t, e);
      };
    else {
      var i = (function () {
        if (void 0 === Mi)
          try {
            document.querySelector(":scope"), (Mi = !0);
          } catch (t) {
            Mi = !1;
          }
        return Mi;
      })()
        ? Hi("".concat(e, ":scope"), n)
        : Hi(e, n);
      r = function (t) {
        return null !== t.querySelector(i);
      };
    }
    for (var o = Qr(t).firstElementChild; o; ) {
      if (o !== t && r(o)) return !1;
      o = o.nextElementSibling;
    }
    return !0;
  }
  function Hi(t, e) {
    return e ? "".concat(t, ">").concat(e) : t;
  }
  var Gi = Vt;
  function Wi(t, e) {
    var n,
      r = [],
      i = 0;
    function o(t) {
      t.stopObservable.subscribe(a), r.push(t), R(n), (n = A(s, Gi));
    }
    function a() {
      1 === i &&
        r.every(function (t) {
          return t.isStopped();
        }) &&
        ((i = 2), e(r));
    }
    function s() {
      R(n), 0 === i && ((i = 1), a());
    }
    return (
      o(t),
      {
        tryAppend: function (t) {
          return (
            0 === i &&
            (r.length > 0 &&
            ((e = r[r.length - 1].event),
            (n = t.event),
            !(
              e.target === n.target &&
              ((a = e),
              (u = n),
              Math.sqrt(
                Math.pow(a.clientX - u.clientX, 2) +
                  Math.pow(a.clientY - u.clientY, 2)
              ) <= 100) &&
              e.timeStamp - n.timeStamp <= Gi
            ))
              ? (s(), !1)
              : (o(t), !0))
          );
          var e, n, a, u;
        },
        stop: function () {
          s();
        },
      }
    );
  }
  function Ki() {
    var t = window.getSelection();
    return !t || t.isCollapsed;
  }
  function Ji(t) {
    return t.target instanceof Element && !1 !== t.isPrimary;
  }
  function Yi(t, e) {
    if (
      (function (t) {
        if (
          t.some(function (t) {
            return t.getUserActivity().selection || t.getUserActivity().scroll;
          })
        )
          return !1;
        for (var e = 0; e < t.length - 2; e += 1)
          if (t[e + 3 - 1].event.timeStamp - t[e].event.timeStamp <= Vt)
            return !0;
        return !1;
      })(t)
    )
      return (
        e.addFrustration("rage_click"),
        t.some($i) && e.addFrustration("dead_click"),
        e.hasError && e.addFrustration("error_click"),
        { isRage: !0 }
      );
    var n = t.some(function (t) {
      return t.getUserActivity().selection;
    });
    return (
      t.forEach(function (t) {
        t.hasError && t.addFrustration("error_click"),
          $i(t) && !n && t.addFrustration("dead_click");
      }),
      { isRage: !1 }
    );
  }
  var Xi =
    'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,[contenteditable],[contenteditable] *,canvas,a[href],a[href] *';
  function $i(t) {
    return (
      !(
        t.hasPageActivity ||
        t.getUserActivity().input ||
        t.getUserActivity().scroll
      ) && !Zr(t.event.target, Xi)
    );
  }
  var Zi = 1e4,
    Qi = new Map();
  function to(t, e) {
    Qi.set(t, e),
      Qi.forEach(function (t, e) {
        $t(e, Jt()) > 1e4 && Qi.delete(e);
      });
  }
  function eo(t, e, n, r) {
    var i,
      o = hr({ expireDelay: 3e5 }),
      a = new J();
    t.subscribe(10, function () {
      o.reset();
    }),
      t.subscribe(5, c);
    var s = (function (t, e) {
      var n,
        r,
        i = e.onPointerDown,
        o = e.onPointerUp,
        a = { selection: !1, input: !1, scroll: !1 },
        s = [
          Z(
            t,
            window,
            "pointerdown",
            function (t) {
              Ji(t) &&
                ((n = Ki()),
                (a = { selection: !1, input: !1, scroll: !1 }),
                (r = i(t)));
            },
            { capture: !0 }
          ),
          Z(
            t,
            window,
            "selectionchange",
            function () {
              (n && Ki()) || (a.selection = !0);
            },
            { capture: !0 }
          ),
          Z(
            t,
            window,
            "scroll",
            function () {
              a.scroll = !0;
            },
            { capture: !0, passive: !0 }
          ),
          Z(
            t,
            window,
            "pointerup",
            function (t) {
              if (Ji(t) && r) {
                var e = a;
                o(r, t, function () {
                  return e;
                }),
                  (r = void 0);
              }
            },
            { capture: !0 }
          ),
          Z(
            t,
            window,
            "input",
            function () {
              a.input = !0;
            },
            { capture: !0 }
          ),
        ];
      return {
        stop: function () {
          s.forEach(function (t) {
            return t.stop();
          });
        },
      };
    })(r, {
      onPointerDown: function (i) {
        return (function (t, e, n, r, i) {
          var o = t.enablePrivacyForActionName
            ? pi(r.target, t.defaultPrivacyLevel)
            : si.ALLOW;
          if (o === si.HIDDEN) return;
          var a = (function (t, e, n) {
              var r = t.target.getBoundingClientRect(),
                i = Ui(t.target, n.actionNameAttribute);
              i && to(t.timeStamp, i);
              var o = (function (t, e, n) {
                var r = e.enablePrivacyForActionName,
                  i = e.actionNameAttribute,
                  o = wi(t, bi) || (i && wi(t, i));
                return o
                  ? { name: o, nameSource: "custom_attribute" }
                  : n === si.MASK
                  ? { name: "Masked Element", nameSource: "mask_placeholder" }
                  : Ei(t, i, Ci, r) ||
                    Ei(t, i, xi, r) || { name: "", nameSource: "blank" };
              })(t.target, n, e);
              return {
                type: "click",
                target: {
                  width: Math.round(r.width),
                  height: Math.round(r.height),
                  selector: i,
                },
                position: {
                  x: Math.round(t.clientX - r.left),
                  y: Math.round(t.clientY - r.top),
                },
                name: o.name,
                nameSource: o.nameSource,
              };
            })(r, o, t),
            s = !1;
          return (
            Yr(
              e,
              n,
              i,
              t,
              function (t) {
                s = t.hadActivity;
              },
              Jr
            ),
            {
              clickActionBase: a,
              hadActivityOnPointerDown: function () {
                return s;
              },
            }
          );
        })(r, t, e, i, n);
      },
      onPointerUp: function (i, s, c) {
        var l = i.clickActionBase,
          d = i.hadActivityOnPointerDown;
        !(function (t, e, n, r, i, o, a, s, u, c, l) {
          var d,
            f = no(e, i, c, s, u);
          a(f);
          var p =
            null === (d = null == s ? void 0 : s.target) || void 0 === d
              ? void 0
              : d.selector;
          p && to(u.timeStamp, p);
          var v = Yr(
              e,
              n,
              r,
              t,
              function (t) {
                t.hadActivity && t.end < f.startClocks.timeStamp
                  ? f.discard()
                  : t.hadActivity
                  ? f.stop(t.end)
                  : l()
                  ? f.stop(f.startClocks.timeStamp)
                  : f.stop();
              },
              Zi
            ).stop,
            h = e.subscribe(5, function (t) {
              var e = t.endClocks;
              f.stop(e.timeStamp);
            }),
            m = o.subscribe(function () {
              f.stop();
            });
          f.stopObservable.subscribe(function () {
            h.unsubscribe(), v(), m.unsubscribe();
          });
        })(r, t, e, n, o, a, u, l, s, c, d);
      },
    }).stop;
    return {
      stop: function () {
        c(), a.notify(), s();
      },
      actionContexts: {
        findActionId: function (t) {
          return o.findAll(t);
        },
      },
    };
    function u(t) {
      if (!i || !i.tryAppend(t)) {
        var e = t.clone();
        i = Wi(t, function (t) {
          !(function (t, e) {
            var n = Yi(t, e).isRage;
            n
              ? (t.forEach(function (t) {
                  return t.discard();
                }),
                e.stop(Kt()),
                e.validate(
                  t.map(function (t) {
                    return t.event;
                  })
                ))
              : (e.discard(),
                t.forEach(function (t) {
                  return t.validate();
                }));
          })(t, e);
        });
      }
    }
    function c() {
      i && i.stop();
    }
  }
  function no(t, e, n, r, i) {
    var o,
      a = _e(),
      s = Yt(),
      u = e.add(a, s.relative),
      c = Hr({
        lifeCycle: t,
        isChildEvent: function (t) {
          return (
            void 0 !== t.action &&
            (Array.isArray(t.action.id) ? m(t.action.id, a) : t.action.id === a)
          );
        },
      }),
      l = 0,
      d = [],
      f = new J();
    function p(t) {
      0 === l &&
        ((l = 1), (o = t) ? u.close(Qt(o)) : u.remove(), c.stop(), f.notify());
    }
    return {
      event: i,
      stop: p,
      stopObservable: f,
      get hasError() {
        return c.eventCounts.errorCount > 0;
      },
      get hasPageActivity() {
        return void 0 !== o;
      },
      getUserActivity: n,
      addFrustration: function (t) {
        d.push(t);
      },
      startClocks: s,
      isStopped: function () {
        return 1 === l || 2 === l;
      },
      clone: function () {
        return no(t, e, n, r, i);
      },
      validate: function (e) {
        if ((p(), 1 === l)) {
          var n = c.eventCounts,
            u = n.resourceCount,
            f = n.errorCount,
            v = n.longTaskCount,
            h = S(
              {
                type: "click",
                duration: o && $t(s.timeStamp, o),
                startClocks: s,
                id: a,
                frustrationTypes: d,
                counts: { resourceCount: u, errorCount: f, longTaskCount: v },
                events: null != e ? e : [i],
                event: i,
              },
              r
            );
          t.notify(0, h), (l = 2);
        }
      },
      discard: function () {
        p(), (l = 2);
      },
    };
  }
  function ro(t, e) {
    var n = io(t)
        ? {
            action: {
              id: t.id,
              loading_time: jr(Gt(t.duration)),
              frustration: { type: t.frustrationTypes },
              error: { count: t.counts.errorCount },
              long_task: { count: t.counts.longTaskCount },
              resource: { count: t.counts.resourceCount },
            },
            _dd: {
              action: {
                target: t.target,
                position: t.position,
                name_source: At(bt.ACTION_NAME_MASKING) ? t.nameSource : void 0,
              },
            },
          }
        : void 0,
      r = io(t) ? void 0 : t.context,
      i = H(
        {
          action: { id: _e(), target: { name: t.name }, type: t.type },
          date: t.startClocks.timeStamp,
          type: "action",
          view: {
            in_foreground: e.wasInPageStateAt("active", t.startClocks.relative),
          },
        },
        n
      ),
      o = io(t) ? { events: t.events } : {};
    return (
      !io(t) && t.handlingStack && (o.handlingStack = t.handlingStack),
      {
        customerContext: r,
        rawRumEvent: i,
        startTime: t.startClocks.relative,
        domainContext: o,
      }
    );
  }
  function io(t) {
    return "custom" !== t.type;
  }
  function oo(t) {
    var e,
      n = function (e, n) {
        var r = St({
          stackTrace: e,
          originalError: n,
          startClocks: Yt(),
          nonErrorPrefix: "Uncaught",
          source: tr,
          handling: "unhandled",
        });
        t.notify(r);
      },
      r = ((e = n),
      Re(window, "onerror", function (t) {
        var n,
          r = t.parameters,
          i = r[0],
          o = r[1],
          a = r[2],
          s = r[3],
          u = r[4];
        (n = Ct(u) ? ot(u) : ht(i, o, a, s)), e(n, null != u ? u : i);
      })).stop,
      i = (function (t) {
        return Re(window, "onunhandledrejection", function (e) {
          var n = e.parameters[0].reason || "Empty reason",
            r = ot(n);
          t(r, n);
        });
      })(n).stop;
    return {
      stop: function () {
        r(), i();
      },
    };
  }
  var ao = {};
  function so(n) {
    var r = n.map(function (n) {
      return (
        ao[n] ||
          (ao[n] = (function (n) {
            return new J(function (r) {
              var i = e[n];
              return (
                (e[n] = function () {
                  for (var e = [], o = 0; o < arguments.length; o++)
                    e[o] = arguments[o];
                  i.apply(console, e);
                  var a = gt();
                  v(function () {
                    r.notify(
                      (function (e, n, r) {
                        var i,
                          o = e
                            .map(function (t) {
                              return (function (t) {
                                if ("string" == typeof t) return G(t);
                                if (Ct(t)) return _t(ot(t));
                                return L(G(t), void 0, 2);
                              })(t);
                            })
                            .join(" ");
                        if (n === t.error) {
                          var a = y(e, Ct);
                          i = {
                            stack: a ? yt(ot(a)) : void 0,
                            fingerprint: kt(a),
                            causes: a ? xt(a, "console") : void 0,
                            startClocks: Yt(),
                            message: o,
                            source: Zn,
                            handling: "handled",
                            handlingStack: r,
                          };
                        }
                        return {
                          api: n,
                          message: o,
                          error: i,
                          handlingStack: r,
                        };
                      })(e, n, a)
                    );
                  });
                }),
                function () {
                  e[n] = i;
                }
              );
            });
          })(n)),
        ao[n]
      );
    });
    return Y.apply(void 0, r);
  }
  var uo = "intervention",
    co = "csp_violation";
  function lo(t, e) {
    var n = [];
    m(e, co) &&
      n.push(
        (function (t) {
          return new J(function (e) {
            return Z(t, document, "securitypolicyviolation", function (t) {
              e.notify(
                (function (t) {
                  var e = "'"
                    .concat(t.blockedURI, "' blocked by '")
                    .concat(t.effectiveDirective, "' directive");
                  return fo({
                    type: t.effectiveDirective,
                    message: "".concat(co, ": ").concat(e),
                    originalError: t,
                    csp: { disposition: t.disposition },
                    stack: po(
                      t.effectiveDirective,
                      t.originalPolicy
                        ? ""
                            .concat(e, ' of the policy "')
                            .concat(Se(t.originalPolicy, 100, "..."), '"')
                        : "no policy",
                      t.sourceFile,
                      t.lineNumber,
                      t.columnNumber
                    ),
                  });
                })(t)
              );
            }).stop;
          });
        })(t)
      );
    var r = e.filter(function (t) {
      return t !== co;
    });
    return (
      r.length &&
        n.push(
          (function (t) {
            return new J(function (e) {
              if (window.ReportingObserver) {
                var n = p(function (t, n) {
                    return t.forEach(function (t) {
                      return e.notify(
                        (function (t) {
                          var e = t.type,
                            n = t.body;
                          return fo({
                            type: n.id,
                            message: "".concat(e, ": ").concat(n.message),
                            originalError: t,
                            stack: po(
                              n.id,
                              n.message,
                              n.sourceFile,
                              n.lineNumber,
                              n.columnNumber
                            ),
                          });
                        })(t)
                      );
                    });
                  }),
                  r = new window.ReportingObserver(n, {
                    types: t,
                    buffered: !0,
                  });
                return (
                  r.observe(),
                  function () {
                    r.disconnect();
                  }
                );
              }
            });
          })(r)
        ),
      Y.apply(void 0, n)
    );
  }
  function fo(t) {
    return S({ startClocks: Yt(), source: er, handling: "unhandled" }, t);
  }
  function po(t, e, n, r, i) {
    return n
      ? yt({
          name: t,
          message: e,
          stack: [
            {
              func: "?",
              url: n,
              line: null != r ? r : void 0,
              column: null != i ? i : void 0,
            },
          ],
        })
      : void 0;
  }
  function vo(e, n, r, i) {
    var o = new J();
    return (
      (function (e) {
        var n = so([t.error]).subscribe(function (t) {
          return e.notify(t.error);
        });
      })(o),
      oo(o),
      (function (t, e) {
        var n = lo(t, [co, uo]).subscribe(function (t) {
          return e.notify(t);
        });
      })(n, o),
      o.subscribe(function (t) {
        return e.notify(14, { error: t });
      }),
      (function (t, e, n) {
        return (
          t.subscribe(14, function (r) {
            var i = r.error,
              o = r.customerContext,
              a = r.savedCommonContext;
            t.notify(
              12,
              S(
                { customerContext: o, savedCommonContext: a },
                (function (t, e, n) {
                  var r = {
                      date: t.startClocks.timeStamp,
                      error: {
                        id: _e(),
                        message: t.message,
                        source: t.source,
                        stack: t.stack,
                        handling_stack: t.handlingStack,
                        type: t.type,
                        handling: t.handling,
                        causes: t.causes,
                        source_type: "browser",
                        fingerprint: t.fingerprint,
                        csp: t.csp,
                      },
                      type: "error",
                      view: {
                        in_foreground: e.wasInPageStateAt(
                          "active",
                          t.startClocks.relative
                        ),
                      },
                    },
                    i = n.findFeatureFlagEvaluations(t.startClocks.relative);
                  i && !z(i) && (r.feature_flags = i);
                  var o = {
                    error: t.originalError,
                    handlingStack: t.handlingStack,
                  };
                  return {
                    rawRumEvent: r,
                    startTime: t.startClocks.relative,
                    domainContext: o,
                  };
                })(i, e, n)
              )
            );
          }),
          {
            addError: function (e, n) {
              var r = e.error,
                i = e.handlingStack,
                o = e.startClocks,
                a = e.context,
                s = St({
                  stackTrace: Ct(r) ? ot(r) : void 0,
                  originalError: r,
                  handlingStack: i,
                  startClocks: o,
                  nonErrorPrefix: "Provided",
                  source: Qn,
                  handling: "handled",
                });
              t.notify(14, {
                customerContext: a,
                savedCommonContext: n,
                error: s,
              });
            },
          }
        );
      })(e, r, i)
    );
  }
  function ho(t, e) {
    if (window.requestIdleCallback && window.cancelIdleCallback) {
      var n = window.requestIdleCallback(p(t), e);
      return function () {
        return window.cancelIdleCallback(n);
      };
    }
    return (function (t) {
      var e = Wt(),
        n = A(function () {
          t({
            didTimeout: !1,
            timeRemaining: function () {
              return Math.max(0, mo - (Wt() - e));
            },
          });
        }, 0);
      return function () {
        return R(n);
      };
    })(t);
  }
  var mo = 50;
  var go = new ti();
  function yo(t) {
    if (performance && "getEntriesByName" in performance) {
      var e = performance.getEntriesByName(t.url, "resource");
      if (e.length && "toJSON" in e[0]) {
        var n = e
          .filter(function (t) {
            return !go.has(t);
          })
          .filter(function (t) {
            return Ar(t) && Rr(t);
          })
          .filter(function (e) {
            return (
              (n = e),
              (r = t.startClocks.relative),
              (i = _o({
                startTime: t.startClocks.relative,
                duration: t.duration,
              })),
              (o = 1),
              n.startTime >= r - o && _o(n) <= Zt(i, o)
            );
            var n, r, i, o;
          });
        return 1 === n.length ? (go.add(n[0]), n[0].toJSON()) : void 0;
      }
    }
  }
  function _o(t) {
    return Zt(t.startTime, t.duration);
  }
  function bo(t, e, n) {
    return document.readyState === e || "complete" === document.readyState
      ? (n(), { stop: M })
      : Z(t, window, "complete" === e ? "load" : "DOMContentLoaded", n, {
          once: !0,
        });
  }
  function wo(t) {
    var e =
      (function (t) {
        var e = t.querySelector("meta[name=dd-trace-id]"),
          n = t.querySelector("meta[name=dd-trace-time]");
        return So(e && e.content, n && n.content);
      })(t) ||
      (function (t) {
        var e = (function (t) {
          for (var e = 0; e < t.childNodes.length; e += 1) {
            if ((n = ko(t.childNodes[e]))) return n;
          }
          if (t.body)
            for (e = t.body.childNodes.length - 1; e >= 0; e -= 1) {
              var n,
                r = t.body.childNodes[e];
              if ((n = ko(r))) return n;
              if (!ei(r)) break;
            }
        })(t);
        if (!e) return;
        return So(we(e, "trace-id"), we(e, "trace-time"));
      })(t);
    if (e && !(e.traceTime <= Wt() - 12e4)) return e.traceId;
  }
  function So(t, e) {
    var n = e && Number(e);
    if (t && n) return { traceId: t, traceTime: n };
  }
  function ko(t) {
    if (
      t &&
      (function (t) {
        return t.nodeType === Node.COMMENT_NODE;
      })(t)
    ) {
      var e = /^\s*DATADOG;(.*?)\s*$/.exec(t.data);
      if (e) return e[1];
    }
  }
  function Co() {
    if (Kr(zr.NAVIGATION)) {
      var t = performance.getEntriesByType(zr.NAVIGATION)[0];
      if (t) return t;
    }
    var e = (function () {
        var t = {},
          e = performance.timing;
        for (var n in e)
          if (zt(e[n])) {
            var r = n,
              i = e[r];
            t[r] = 0 === i ? 0 : Qt(i);
          }
        return t;
      })(),
      n = S(
        {
          entryType: zr.NAVIGATION,
          initiatorType: "navigation",
          name: window.location.href,
          startTime: 0,
          duration: e.responseEnd,
          decodedBodySize: 0,
          encodedBodySize: 0,
          transferSize: 0,
          workerStart: 0,
          toJSON: function () {
            return S({}, n, { toJSON: void 0 });
          },
        },
        e
      );
    return n;
  }
  function xo(t, e) {
    bo(t, "interactive", function () {
      var t = S(Co().toJSON(), {
        entryType: zr.RESOURCE,
        initiatorType: Sr,
        traceId: wo(document),
        toJSON: function () {
          return S({}, t, { toJSON: void 0 });
        },
      });
      e(t);
    });
  }
  function To(t, e, n, r, i) {
    void 0 === r &&
      (r = (function () {
        var t = [];
        function e(e) {
          var r;
          if (e.didTimeout) {
            var i = performance.now();
            r = function () {
              return 30 - (performance.now() - i);
            };
          } else r = e.timeRemaining.bind(e);
          for (; r() > 0 && t.length; ) t.shift()();
          t.length && n();
        }
        function n() {
          ho(e, { timeout: 1e3 });
        }
        return {
          push: function (e) {
            1 === t.push(e) && n();
          },
        };
      })()),
      void 0 === i && (i = xo),
      t.subscribe(8, function (t) {
        a(function () {
          return (function (t, e, n) {
            var r = yo(t),
              i = r ? jt(r.startTime) : t.startClocks,
              o = (function (t, e) {
                var n = t.traceSampled && t.traceId && t.spanId;
                if (!n) return;
                return {
                  _dd: {
                    span_id: t.spanId.toString(),
                    trace_id: t.traceId.toString(),
                    rule_psr: e.rulePsr,
                  },
                };
              })(t, e);
            if (!e.trackResources && !o) return;
            var a = "xhr" === t.type ? "xhr" : "fetch",
              s = r ? Ao(r) : void 0,
              u = (function (t, e, n) {
                return t.wasInPageStateDuringPeriod("frozen", e.relative, n)
                  ? void 0
                  : Gt(n);
              })(n, i, t.duration),
              c = H(
                {
                  date: i.timeStamp,
                  resource: {
                    id: _e(),
                    type: a,
                    duration: u,
                    method: t.method,
                    status_code: t.status,
                    protocol: r && Nr(r),
                    url: Pr(t.url) ? Ur(t.url) : t.url,
                    delivery_type: r && Or(r),
                  },
                  type: "resource",
                  _dd: { discarded: !e.trackResources },
                },
                o,
                s
              );
            return {
              startTime: i.relative,
              rawRumEvent: c,
              domainContext: {
                performanceEntry: r,
                xhr: t.xhr,
                response: t.response,
                requestInput: t.input,
                requestInit: t.init,
                error: t.error,
                isAborted: t.isAborted,
                handlingStack: t.handlingStack,
              },
            };
          })(t, e, n);
        });
      });
    var o = Wr(e, { type: zr.RESOURCE, buffered: !0 }).subscribe(function (t) {
      for (
        var n = function (t) {
            (function (t) {
              return (
                "xmlhttprequest" === t.initiatorType ||
                "fetch" === t.initiatorType
              );
            })(t) ||
              a(function () {
                return Eo(t, e);
              });
          },
          r = 0,
          i = t;
        r < i.length;
        r++
      ) {
        n(i[r]);
      }
    });
    function a(e) {
      r.push(function () {
        var n = e();
        n && t.notify(12, n);
      });
    }
    return (
      i(e, function (t) {
        a(function () {
          return Eo(t, e);
        });
      }),
      {
        stop: function () {
          o.unsubscribe();
        },
      }
    );
  }
  function Eo(t, e) {
    var n = jt(t.startTime),
      r = (function (t, e) {
        var n = t.traceId;
        if (!n) return;
        return {
          _dd: {
            trace_id: t.traceId,
            span_id: Ln().toString(),
            rule_psr: e.rulePsr,
          },
        };
      })(t, e);
    if (e.trackResources || r) {
      var i,
        o = Cr(t),
        a = Ao(t),
        s = H(
          {
            date: n.timeStamp,
            resource: {
              id: _e(),
              type: o,
              url: t.name,
              status_code: ((i = t.responseStatus), 0 === i ? void 0 : i),
              protocol: Nr(t),
              delivery_type: Or(t),
            },
            type: "resource",
            _dd: { discarded: !e.trackResources },
          },
          r,
          a
        );
      return {
        startTime: n.relative,
        rawRumEvent: s,
        domainContext: { performanceEntry: t },
      };
    }
  }
  function Ao(t) {
    var e = t.renderBlockingStatus;
    return {
      resource: S({ duration: Tr(t), render_blocking_status: e }, Mr(t), Er(t)),
    };
  }
  function Ro(t, e, n) {
    return (
      void 0 === n && (n = Co),
      (function (t, e) {
        var n,
          r = bo(t, "complete", function () {
            n = A(function () {
              return e();
            });
          }).stop;
        return {
          stop: function () {
            r(), R(n);
          },
        };
      })(t, function () {
        var t = n();
        (function (t) {
          return t.loadEventEnd <= 0;
        })(t) ||
          e(
            (function (t) {
              return {
                domComplete: t.domComplete,
                domContentLoaded: t.domContentLoadedEventEnd,
                domInteractive: t.domInteractive,
                loadEvent: t.loadEventEnd,
                firstByte:
                  t.responseStart >= 0 && t.responseStart <= Jt()
                    ? t.responseStart
                    : void 0,
              };
            })(t)
          );
      })
    );
  }
  function Io(t, e) {
    var n, r;
    return (
      void 0 === e && (e = window),
      "hidden" === document.visibilityState
        ? (n = 0)
        : ((n = 1 / 0),
          (r = Q(
            t,
            e,
            ["pagehide", "visibilitychange"],
            function (t) {
              ("pagehide" !== t.type &&
                "hidden" !== document.visibilityState) ||
                ((n = t.timeStamp), r());
            },
            { capture: !0 }
          ).stop)),
      {
        get timeStamp() {
          return n;
        },
        stop: function () {
          null == r || r();
        },
      }
    );
  }
  function No(t, e, n) {
    var r = {},
      i = Ro(t, function (t) {
        e(t.loadEvent), (r.navigationTimings = t), n();
      }).stop,
      o = Io(t),
      a = (function (t, e, n) {
        return {
          stop: Wr(t, { type: zr.PAINT, buffered: !0 }).subscribe(function (t) {
            var r = y(t, function (t) {
              return (
                "first-contentful-paint" === t.name &&
                t.startTime < e.timeStamp &&
                t.startTime < 6e5
              );
            });
            r && n(r.startTime);
          }).unsubscribe,
        };
      })(t, o, function (t) {
        (r.firstContentfulPaint = t), n();
      }).stop,
      s = (function (t, e, n, r) {
        var i = 1 / 0,
          o = Q(
            t,
            n,
            ["pointerdown", "keydown"],
            function (t) {
              i = t.timeStamp;
            },
            { capture: !0, once: !0 }
          ).stop,
          a = 0,
          s = Wr(t, {
            type: zr.LARGEST_CONTENTFUL_PAINT,
            buffered: !0,
          }).subscribe(function (n) {
            var o = (function (t, e) {
              for (var n = t.length - 1; n >= 0; n -= 1) {
                var r = t[n];
                if (e(r, n, t)) return r;
              }
            })(n, function (t) {
              return (
                t.entryType === zr.LARGEST_CONTENTFUL_PAINT &&
                t.startTime < i &&
                t.startTime < e.timeStamp &&
                t.startTime < 6e5 &&
                t.size > a
              );
            });
            if (o) {
              var s = void 0;
              o.element && (s = Ui(o.element, t.actionNameAttribute)),
                r({ value: o.startTime, targetSelector: s }),
                (a = o.size);
            }
          });
        return {
          stop: function () {
            o(), s.unsubscribe();
          },
        };
      })(t, o, window, function (t) {
        (r.largestContentfulPaint = t), n();
      }).stop,
      u = (function (t, e, n) {
        var r = Wr(t, { type: zr.FIRST_INPUT, buffered: !0 }).subscribe(
          function (r) {
            var i = y(r, function (t) {
              return t.startTime < e.timeStamp;
            });
            if (i) {
              var o = $t(i.startTime, i.processingStart),
                a = void 0;
              i.target &&
                ni(i.target) &&
                (a = Ui(i.target, t.actionNameAttribute)),
                n({
                  delay: o >= 0 ? o : 0,
                  time: i.startTime,
                  targetSelector: a,
                });
            }
          }
        );
        return {
          stop: function () {
            r.unsubscribe();
          },
        };
      })(t, o, function (t) {
        (r.firstInput = t), n();
      }).stop;
    return {
      stop: function () {
        i(), a(), s(), u(), o.stop();
      },
      initialViewMetrics: r,
    };
  }
  function Oo(t, e, n) {
    if (!Uo()) return { stop: M };
    var r,
      i,
      o = 0;
    n({ value: 0 });
    var a = (function () {
        var t,
          e,
          n = 0,
          r = 0;
        return {
          update: function (i) {
            var o;
            return (
              void 0 === t || i.startTime - e >= Po || i.startTime - t >= Do
                ? ((t = e = i.startTime), (r = n = i.value), (o = !0))
                : ((n += i.value),
                  (e = i.startTime),
                  (o = i.value > r) && (r = i.value)),
              { cumulatedValue: n, isMaxValue: o }
            );
          },
        };
      })(),
      s = Wr(t, { type: zr.LAYOUT_SHIFT, buffered: !0 }).subscribe(function (
        s
      ) {
        for (var u = 0, c = s; u < c.length; u++) {
          var l = c[u];
          if (!(l.hadRecentInput || l.startTime < e)) {
            var d = a.update(l),
              f = d.cumulatedValue;
            if (d.isMaxValue) {
              var p = Mo(l.sources);
              (r = p ? new WeakRef(p) : void 0), (i = $t(e, l.startTime));
            }
            if (f > o) {
              o = f;
              p = null == r ? void 0 : r.deref();
              n({
                value: Ut(o, 4),
                targetSelector: p && Ui(p, t.actionNameAttribute),
                time: i,
              });
            }
          }
        }
      });
    return {
      stop: function () {
        s.unsubscribe();
      },
    };
  }
  function Mo(t) {
    var e;
    if (t)
      return null ===
        (e = y(t, function (t) {
          return !!t.node && ni(t.node);
        })) || void 0 === e
        ? void 0
        : e.node;
  }
  var Lo,
    Do = 5e3,
    Po = Vt;
  function Uo() {
    return Kr(zr.LAYOUT_SHIFT) && "WeakRef" in window;
  }
  var zo = 0,
    Bo = 1 / 0,
    Vo = 0;
  var Fo,
    qo = function () {
      return Lo ? zo : window.performance.interactionCount || 0;
    };
  function jo(t, e, n) {
    if (
      !(
        Kr(zr.EVENT) &&
        window.PerformanceEventTiming &&
        "interactionId" in PerformanceEventTiming.prototype
      )
    )
      return {
        getInteractionToNextPaint: function () {},
        setViewEnd: M,
        stop: M,
      };
    var r,
      i,
      o = (function (t) {
        "interactionCount" in performance ||
          Lo ||
          (Lo = new window.PerformanceObserver(
            p(function (t) {
              t.getEntries().forEach(function (t) {
                var e = t;
                e.interactionId &&
                  ((Bo = Math.min(Bo, e.interactionId)),
                  (Vo = Math.max(Vo, e.interactionId)),
                  (zo = (Vo - Bo) / 7 + 1));
              });
            })
          )).observe({ type: "event", buffered: !0, durationThreshold: 0 });
        var e = "initial_load" === t ? 0 : qo(),
          n = { stopped: !1 };
        function r() {
          return qo() - e;
        }
        return {
          getViewInteractionCount: function () {
            return n.stopped ? n.interactionCount : r();
          },
          stopViewInteractionCount: function () {
            n = { stopped: !0, interactionCount: r() };
          },
        };
      })(n),
      a = o.getViewInteractionCount,
      s = o.stopViewInteractionCount,
      u = 1 / 0,
      c = (function (t) {
        var e = [];
        function n() {
          e.sort(function (t, e) {
            return e.duration - t.duration;
          }).splice(10);
        }
        return {
          process: function (t) {
            var r = e.findIndex(function (e) {
                return t.interactionId === e.interactionId;
              }),
              i = e[e.length - 1];
            -1 !== r
              ? t.duration > e[r].duration && ((e[r] = t), n())
              : (e.length < 10 || t.duration > i.duration) && (e.push(t), n());
          },
          estimateP98Interaction: function () {
            var n = Math.min(e.length - 1, Math.floor(t() / 50));
            return e[n];
          },
        };
      })(a),
      l = -1;
    function d(n) {
      for (var o = 0, a = n; o < a.length; o++) {
        var s = a[o];
        s.interactionId && s.startTime >= e && s.startTime <= u && c.process(s);
      }
      var d,
        f,
        p = c.estimateP98Interaction();
      p &&
        p.duration !== l &&
        ((l = p.duration),
        (i = $t(e, p.startTime)),
        (d = p.startTime),
        (f = Qi.get(d)),
        Qi.delete(d),
        !(r = f) &&
          p.target &&
          ni(p.target) &&
          (r = Ui(p.target, t.actionNameAttribute)));
    }
    var f = Wr(t, { type: zr.FIRST_INPUT, buffered: !0 }).subscribe(d),
      v = Wr(t, {
        type: zr.EVENT,
        durationThreshold: 40,
        buffered: !0,
      }).subscribe(d);
    return {
      getInteractionToNextPaint: function () {
        return l >= 0
          ? { value: Math.min(l, 6e4), targetSelector: r, time: i }
          : a()
          ? { value: 0 }
          : void 0;
      },
      setViewEnd: function (t) {
        (u = t), s();
      },
      stop: function () {
        v.unsubscribe(), f.unsubscribe();
      },
    };
  }
  function Ho() {
    var t,
      e = window.visualViewport;
    return (
      (t = e
        ? e.pageLeft - e.offsetLeft
        : void 0 !== window.scrollX
        ? window.scrollX
        : window.pageXOffset || 0),
      Math.round(t)
    );
  }
  function Go() {
    var t,
      e = window.visualViewport;
    return (
      (t = e
        ? e.pageTop - e.offsetTop
        : void 0 !== window.scrollY
        ? window.scrollY
        : window.pageYOffset || 0),
      Math.round(t)
    );
  }
  function Wo(t) {
    return (
      Fo ||
        (Fo = (function (t) {
          return new J(function (e) {
            var n = O(function () {
              e.notify(Ko());
            }, 200).throttled;
            return Z(t, window, "resize", n, { capture: !0, passive: !0 }).stop;
          });
        })(t)),
      Fo
    );
  }
  function Ko() {
    var t = window.visualViewport;
    return t
      ? { width: Number(t.width * t.scale), height: Number(t.height * t.scale) }
      : {
          width: Number(window.innerWidth || 0),
          height: Number(window.innerHeight || 0),
        };
  }
  var Jo = Vt;
  function Yo(t, e, n, r) {
    void 0 === r &&
      (r = (function (t, e) {
        void 0 === e && (e = Jo);
        return new J(function (n) {
          function r() {
            var t, e, r, i;
            n.notify(
              ((t = Go()),
              (e = Ko().height),
              (r = Math.round(
                (document.scrollingElement || document.documentElement)
                  .scrollHeight
              )),
              (i = Math.round(e + t)),
              { scrollHeight: r, scrollDepth: i, scrollTop: t })
            );
          }
          if (window.ResizeObserver) {
            var i = O(r, e, { leading: !1, trailing: !0 }),
              o = document.scrollingElement || document.documentElement,
              a = new ResizeObserver(p(i.throttled));
            o && a.observe(o);
            var s = Z(t, window, "scroll", i.throttled, { passive: !0 });
            return function () {
              i.cancel(), a.disconnect(), s.stop();
            };
          }
        });
      })(t));
    var i = 0,
      o = 0,
      a = 0,
      s = r.subscribe(function (t) {
        var r = t.scrollDepth,
          s = t.scrollTop,
          u = t.scrollHeight,
          c = !1;
        if ((r > i && ((i = r), (c = !0)), u > o)) {
          o = u;
          var l = Jt();
          (a = $t(e.relative, l)), (c = !0);
        }
        c &&
          n({
            maxDepth: Math.min(i, o),
            maxDepthScrollTop: s,
            maxScrollHeight: o,
            maxScrollHeightTime: a,
          });
      });
    return {
      stop: function () {
        return s.unsubscribe();
      },
    };
  }
  function Xo(t, e, n, r, i, o, a) {
    var s = {},
      u = (function (t, e, n, r, i, o, a) {
        var s = "initial_load" === i,
          u = !0,
          c = [],
          l = Io(r);
        function d() {
          if (!u && !s && c.length > 0) {
            var t = Math.max.apply(Math, c);
            t < l.timeStamp && a(t);
          }
        }
        var f = Yr(t, e, n, r, function (t) {
          u && ((u = !1), t.hadActivity && c.push($t(o.timeStamp, t.end)), d());
        }).stop;
        return {
          stop: function () {
            f(), l.stop();
          },
          setLoadEvent: function (t) {
            s && ((s = !1), c.push(t), d());
          },
        };
      })(t, e, n, r, o, a, function (t) {
        (s.loadingTime = t), i();
      }),
      c = u.stop,
      l = u.setLoadEvent,
      d = Yo(r, a, function (t) {
        s.scroll = t;
      }).stop,
      f = Oo(r, a.relative, function (t) {
        (s.cumulativeLayoutShift = t), i();
      }).stop,
      p = jo(r, a.relative, o),
      v = p.stop,
      h = p.getInteractionToNextPaint;
    return {
      stop: function () {
        c(), f(), d();
      },
      stopINPTracking: v,
      setLoadEvent: l,
      setViewEnd: p.setViewEnd,
      getCommonViewMetrics: function () {
        return (s.interactionToNextPaint = h()), s;
      },
    };
  }
  var $o = 3e5,
    Zo = 3e5;
  function Qo(t, e, n, r, o, a, s, u) {
    var c,
      l = new Set(),
      d = f("initial_load", Xt(), u);
    function f(a, s, u) {
      var c = (function (t, e, n, r, o, a, s, u) {
        void 0 === s && (s = Yt());
        var c,
          l,
          d,
          f,
          p,
          v = _e(),
          h = new J(),
          m = {},
          g = 0,
          y = P(o),
          _ = X(),
          b = !0;
        u &&
          ((l = u.name),
          (d = u.service || void 0),
          (f = u.version || void 0),
          u.context && ((p = u.context), _.setContext(p)));
        var w = {
          id: v,
          name: l,
          startClocks: s,
          service: d,
          version: f,
          context: p,
        };
        t.notify(1, w), t.notify(2, w);
        var S = O(H, 3e3, { leading: !1 }),
          k = S.throttled,
          C = S.cancel,
          x = Xo(t, e, n, r, k, a, s),
          T = x.setLoadEvent,
          E = x.setViewEnd,
          R = x.stop,
          L = x.stopINPTracking,
          D = x.getCommonViewMetrics,
          U =
            "initial_load" === a
              ? No(r, T, k)
              : { stop: M, initialViewMetrics: {} },
          z = U.stop,
          B = U.initialViewMetrics,
          V = (function (t, e, n) {
            var r = Hr({
              lifeCycle: t,
              isChildEvent: function (t) {
                return t.view.id === e;
              },
              onChange: n,
            });
            return { stop: r.stop, eventCounts: r.eventCounts };
          })(t, v, k),
          F = V.stop,
          q = V.eventCounts,
          j = I(H, $o);
        function H() {
          C(), (g += 1);
          var e = void 0 === c ? Kt() : c.timeStamp;
          t.notify(4, {
            customTimings: m,
            documentVersion: g,
            id: v,
            name: l,
            service: d,
            version: f,
            context: _.getContext(),
            loadingType: a,
            location: y,
            startClocks: s,
            commonViewMetrics: D(),
            initialViewMetrics: B,
            duration: $t(s.timeStamp, e),
            isActive: void 0 === c,
            sessionIsActive: b,
            eventCounts: q,
          });
        }
        return (
          H(),
          _.changeObservable.subscribe(function () {
            t.notify(3, {
              id: v,
              name: l,
              context: _.getContext(),
              startClocks: s,
            }),
              k();
          }),
          {
            get name() {
              return l;
            },
            service: d,
            version: f,
            contextManager: _,
            stopObservable: h,
            end: function (e) {
              var n,
                r,
                i = this;
              void 0 === e && (e = {}),
                c ||
                  ((c = null !== (n = e.endClocks) && void 0 !== n ? n : Yt()),
                  (b = null === (r = e.sessionIsActive) || void 0 === r || r),
                  t.notify(5, { endClocks: c }),
                  t.notify(6, { endClocks: c }),
                  N(j),
                  E(c.relative),
                  R(),
                  H(),
                  A(function () {
                    i.stop();
                  }, Zo));
            },
            stop: function () {
              z(), F(), L(), h.notify();
            },
            addTiming: function (t, e) {
              if (!c) {
                var n = (function (t) {
                  return t < qt;
                })(e)
                  ? e
                  : $t(s.timeStamp, e);
                (m[
                  (function (t) {
                    var e = t.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
                    e !== t &&
                      i.warn(
                        "Invalid timing name: "
                          .concat(t, ", sanitized to: ")
                          .concat(e)
                      );
                    return e;
                  })(t)
                ] = n),
                  k();
              }
            },
            setViewName: function (t) {
              (l = t), H();
            },
          }
        );
      })(e, n, r, o, t, a, s, u);
      return (
        l.add(c),
        c.stopObservable.subscribe(function () {
          l.delete(c);
        }),
        c
      );
    }
    return (
      e.subscribe(10, function () {
        d = f("route_change", void 0, {
          name: d.name,
          service: d.service,
          version: d.version,
          context: d.contextManager.getContext(),
        });
      }),
      e.subscribe(9, function () {
        d.end({ sessionIsActive: !1 });
      }),
      e.subscribe(11, function (t) {
        t.reason === Jn.UNLOADING && d.end();
      }),
      s &&
        (c = (function (t) {
          return t.subscribe(function (t) {
            var e,
              n,
              r,
              i,
              o = t.oldLocation,
              a = t.newLocation;
            (n = a),
              ((e = o).pathname === n.pathname &&
                ((r = n.hash),
                ("" !== (i = r.substring(1)) && document.getElementById(i)) ||
                  ta(n.hash) === ta(e.hash))) ||
                (d.end(), (d = f("route_change")));
          });
        })(a)),
      {
        addTiming: function (t, e) {
          void 0 === e && (e = Kt()), d.addTiming(t, e);
        },
        startView: function (t, e) {
          d.end({ endClocks: e }), (d = f("route_change", e, t));
        },
        setViewContext: function (t) {
          d.contextManager.setContext(t);
        },
        setViewContextProperty: function (t, e) {
          d.contextManager.setContextProperty(t, e);
        },
        setViewName: function (t) {
          d.setViewName(t);
        },
        stop: function () {
          c && c.unsubscribe(),
            d.end(),
            l.forEach(function (t) {
              return t.stop();
            });
        },
      }
    );
  }
  function ta(t) {
    var e = t.indexOf("?");
    return e < 0 ? t : t.slice(0, e);
  }
  function ea(t, e, n, r, i, o, a, s, u, c) {
    return (
      t.subscribe(4, function (n) {
        return t.notify(
          12,
          (function (t, e, n, r, i) {
            var o,
              a,
              s,
              u,
              c,
              l,
              d,
              f,
              p,
              v,
              h,
              m,
              g,
              y,
              _,
              b,
              w = r.getReplayStats(t.id),
              S = n.findFeatureFlagEvaluations(t.startClocks.relative),
              k = i.findAll(t.startClocks.relative, t.duration),
              C = {
                _dd: {
                  document_version: t.documentVersion,
                  replay_stats: w,
                  page_states: k,
                  configuration: {
                    start_session_replay_recording_manually:
                      e.startSessionReplayRecordingManually,
                  },
                },
                date: t.startClocks.timeStamp,
                type: "view",
                view: {
                  action: { count: t.eventCounts.actionCount },
                  frustration: { count: t.eventCounts.frustrationCount },
                  cumulative_layout_shift:
                    null === (o = t.commonViewMetrics.cumulativeLayoutShift) ||
                    void 0 === o
                      ? void 0
                      : o.value,
                  cumulative_layout_shift_time: Gt(
                    null === (a = t.commonViewMetrics.cumulativeLayoutShift) ||
                      void 0 === a
                      ? void 0
                      : a.time
                  ),
                  cumulative_layout_shift_target_selector:
                    null === (s = t.commonViewMetrics.cumulativeLayoutShift) ||
                    void 0 === s
                      ? void 0
                      : s.targetSelector,
                  first_byte: Gt(
                    null === (u = t.initialViewMetrics.navigationTimings) ||
                      void 0 === u
                      ? void 0
                      : u.firstByte
                  ),
                  dom_complete: Gt(
                    null === (c = t.initialViewMetrics.navigationTimings) ||
                      void 0 === c
                      ? void 0
                      : c.domComplete
                  ),
                  dom_content_loaded: Gt(
                    null === (l = t.initialViewMetrics.navigationTimings) ||
                      void 0 === l
                      ? void 0
                      : l.domContentLoaded
                  ),
                  dom_interactive: Gt(
                    null === (d = t.initialViewMetrics.navigationTimings) ||
                      void 0 === d
                      ? void 0
                      : d.domInteractive
                  ),
                  error: { count: t.eventCounts.errorCount },
                  first_contentful_paint: Gt(
                    t.initialViewMetrics.firstContentfulPaint
                  ),
                  first_input_delay: Gt(
                    null === (f = t.initialViewMetrics.firstInput) ||
                      void 0 === f
                      ? void 0
                      : f.delay
                  ),
                  first_input_time: Gt(
                    null === (p = t.initialViewMetrics.firstInput) ||
                      void 0 === p
                      ? void 0
                      : p.time
                  ),
                  first_input_target_selector:
                    null === (v = t.initialViewMetrics.firstInput) ||
                    void 0 === v
                      ? void 0
                      : v.targetSelector,
                  interaction_to_next_paint: Gt(
                    null === (h = t.commonViewMetrics.interactionToNextPaint) ||
                      void 0 === h
                      ? void 0
                      : h.value
                  ),
                  interaction_to_next_paint_time: Gt(
                    null === (m = t.commonViewMetrics.interactionToNextPaint) ||
                      void 0 === m
                      ? void 0
                      : m.time
                  ),
                  interaction_to_next_paint_target_selector:
                    null === (g = t.commonViewMetrics.interactionToNextPaint) ||
                    void 0 === g
                      ? void 0
                      : g.targetSelector,
                  is_active: t.isActive,
                  name: t.name,
                  largest_contentful_paint: Gt(
                    null ===
                      (y = t.initialViewMetrics.largestContentfulPaint) ||
                      void 0 === y
                      ? void 0
                      : y.value
                  ),
                  largest_contentful_paint_target_selector:
                    null ===
                      (_ = t.initialViewMetrics.largestContentfulPaint) ||
                    void 0 === _
                      ? void 0
                      : _.targetSelector,
                  load_event: Gt(
                    null === (b = t.initialViewMetrics.navigationTimings) ||
                      void 0 === b
                      ? void 0
                      : b.loadEvent
                  ),
                  loading_time: jr(Gt(t.commonViewMetrics.loadingTime)),
                  loading_type: t.loadingType,
                  long_task: { count: t.eventCounts.longTaskCount },
                  resource: { count: t.eventCounts.resourceCount },
                  time_spent: Gt(t.duration),
                },
                feature_flags: S && !z(S) ? S : void 0,
                display: t.commonViewMetrics.scroll
                  ? {
                      scroll: {
                        max_depth: t.commonViewMetrics.scroll.maxDepth,
                        max_depth_scroll_top:
                          t.commonViewMetrics.scroll.maxDepthScrollTop,
                        max_scroll_height:
                          t.commonViewMetrics.scroll.maxScrollHeight,
                        max_scroll_height_time: Gt(
                          t.commonViewMetrics.scroll.maxScrollHeightTime
                        ),
                      },
                    }
                  : void 0,
                session: {
                  has_replay: !!w || void 0,
                  is_active: !!t.sessionIsActive && void 0,
                },
                privacy: { replay_level: e.defaultPrivacyLevel },
              };
            z(t.customTimings) ||
              (C.view.custom_timings = (function (t, e) {
                for (var n = {}, r = 0, i = Object.keys(t); r < i.length; r++) {
                  var o = i[r];
                  n[o] = e(t[o]);
                }
                return n;
              })(t.customTimings, Gt));
            return {
              rawRumEvent: C,
              startTime: t.startClocks.relative,
              domainContext: { location: t.location },
            };
          })(n, e, a, u, s)
        );
      }),
      Qo(n, t, r, i, e, o, !e.trackViewsManually, c)
    );
  }
  var na = Ft,
    ra = Ke,
    ia = [];
  function oa(t, e, n, r) {
    var i = new J(),
      o = new J(),
      a = wn(t.sessionStoreStrategyType, e, n);
    ia.push(function () {
      return a.stop();
    });
    var s = hr({ expireDelay: ra });
    function u() {
      return {
        id: a.getSession().id,
        trackingType: a.getSession()[e],
        isReplayForced: !!a.getSession().forcedReplay,
        anonymousId: a.getSession().anonymousId,
      };
    }
    return (
      ia.push(function () {
        return s.stop();
      }),
      a.renewObservable.subscribe(function () {
        s.add(u(), Jt()), i.notify();
      }),
      a.expireObservable.subscribe(function () {
        o.notify(), s.closeActive(Jt());
      }),
      a.expandOrRenewSession(),
      s.add(u(), Xt().relative),
      r.observable.subscribe(function () {
        r.isGranted() ? a.expandOrRenewSession() : a.expire();
      }),
      (function (t, e) {
        var n = Q(t, window, ["click", "touchstart", "keydown", "scroll"], e, {
          capture: !0,
          passive: !0,
        }).stop;
        ia.push(n);
      })(t, function () {
        r.isGranted() && a.expandOrRenewSession();
      }),
      (function (t, e) {
        var n = function () {
            "visible" === document.visibilityState && e();
          },
          r = Z(t, document, "visibilitychange", n).stop;
        ia.push(r);
        var i = I(n, na);
        ia.push(function () {
          N(i);
        });
      })(t, function () {
        return a.expandSession();
      }),
      (function (t, e) {
        var n = Z(t, window, "resume", e, { capture: !0 }).stop;
        ia.push(n);
      })(t, function () {
        return a.restartSession();
      }),
      {
        findSession: function (t, e) {
          return s.find(t, e);
        },
        renewObservable: i,
        expireObservable: o,
        sessionStateUpdateObservable: a.sessionStateUpdateObservable,
        expire: a.expire,
        updateSessionState: a.updateSessionState,
      }
    );
  }
  function aa(t, e, n) {
    var r = oa(
      t,
      "rum",
      function (e) {
        return (function (t, e) {
          var n;
          n = (function (t) {
            return "0" === t || "1" === t || "2" === t;
          })(e)
            ? e
            : Pt(t.sessionSampleRate)
            ? Pt(t.sessionReplaySampleRate)
              ? "1"
              : "2"
            : "0";
          return { trackingType: n, isTracked: sa(n) };
        })(t, e);
      },
      n
    );
    return (
      r.expireObservable.subscribe(function () {
        e.notify(9);
      }),
      r.renewObservable.subscribe(function () {
        e.notify(10);
      }),
      r.sessionStateUpdateObservable.subscribe(function (t) {
        var e = t.previousState,
          n = t.newState;
        if (!e.forcedReplay && n.forcedReplay) {
          var i = r.findSession();
          i && (i.isReplayForced = !0);
        }
      }),
      {
        findTrackedSession: function (t) {
          var e = r.findSession(t);
          if (e && sa(e.trackingType))
            return {
              id: e.id,
              sessionReplay:
                "1" === e.trackingType ? 1 : e.isReplayForced ? 2 : 0,
              anonymousId: e.anonymousId,
            };
        },
        expire: r.expire,
        expireObservable: r.expireObservable,
        setForcedReplay: function () {
          return r.updateSessionState({ forcedReplay: "1" });
        },
      }
    );
  }
  function sa(t) {
    return "2" === t || "1" === t;
  }
  function ua(t) {
    var e = t.encoder,
      n = t.request,
      r = t.flushController,
      o = t.messageBytesLimit,
      u = {},
      c = r.flushObservable.subscribe(function (t) {
        return (function (t) {
          var r = _(u).join("\n");
          u = {};
          var i = Yn(t.reason),
            o = i ? n.sendOnExit : n.send;
          if (i && e.isAsync) {
            var a = e.finishSync();
            a.outputBytesCount && o(ca(a));
            var s = [a.pendingData, r].filter(Boolean).join("\n");
            s && o({ data: s, bytesCount: T(s) });
          } else
            r && e.write(e.isEmpty ? r : "\n".concat(r)),
              e.finish(function (t) {
                o(ca(t));
              });
        })(t);
      });
    function l(t, n) {
      var c = L(t),
        l = e.estimateEncodedBytesCount(c);
      l >= o
        ? i.warn(
            "Discarded a message whose size was bigger than the maximum allowed size "
              .concat(o, "KB. ")
              .concat(s, " ")
              .concat(a, "/#technical-limitations")
          )
        : ((function (t) {
            return void 0 !== t && void 0 !== u[t];
          })(n) &&
            (function (t) {
              var n = u[t];
              delete u[t];
              var i = e.estimateEncodedBytesCount(n);
              r.notifyAfterRemoveMessage(i);
            })(n),
          (function (t, n, i) {
            r.notifyBeforeAddMessage(n),
              void 0 !== i
                ? ((u[i] = t), r.notifyAfterAddMessage())
                : e.write(e.isEmpty ? t : "\n".concat(t), function (t) {
                    r.notifyAfterAddMessage(t - n);
                  });
          })(c, l, n));
    }
    return { flushController: r, add: l, upsert: l, stop: c.unsubscribe };
  }
  function ca(t) {
    return {
      data:
        "string" == typeof t.output
          ? t.output
          : new Blob([t.output], { type: "text/plain" }),
      bytesCount: t.outputBytesCount,
      encoding: t.encoding,
    };
  }
  var la = 3145728,
    da = Vt;
  function fa(t, e, n, r, i) {
    0 === e.transportStatus &&
    0 === e.queuedPayloads.size() &&
    e.bandwidthMonitor.canHandle(t)
      ? va(t, e, n, {
          onSuccess: function () {
            return ha(0, e, n, r, i);
          },
          onFailure: function () {
            e.queuedPayloads.enqueue(t), pa(e, n, r, i);
          },
        })
      : e.queuedPayloads.enqueue(t);
  }
  function pa(t, e, n, r) {
    2 === t.transportStatus &&
      A(function () {
        va(t.queuedPayloads.first(), t, e, {
          onSuccess: function () {
            t.queuedPayloads.dequeue(),
              (t.currentBackoffTime = da),
              ha(1, t, e, n, r);
          },
          onFailure: function () {
            (t.currentBackoffTime = Math.min(6e4, 2 * t.currentBackoffTime)),
              pa(t, e, n, r);
          },
        });
      }, t.currentBackoffTime);
  }
  function va(t, e, n, r) {
    var i = r.onSuccess,
      o = r.onFailure;
    e.bandwidthMonitor.add(t),
      n(t, function (n) {
        e.bandwidthMonitor.remove(t),
          !(function (t) {
            return (
              "opaque" !== t.type &&
              ((0 === t.status && !navigator.onLine) ||
                408 === t.status ||
                429 === t.status ||
                ((e = t.status), e >= 500))
            );
            var e;
          })(n)
            ? ((e.transportStatus = 0), i())
            : ((e.transportStatus =
                e.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2),
              (t.retry = {
                count: t.retry ? t.retry.count + 1 : 1,
                lastFailureStatus: n.status,
              }),
              o());
      });
  }
  function ha(t, e, n, r, i) {
    0 === t &&
      e.queuedPayloads.isFull() &&
      !e.queueFullReported &&
      (i({
        message: "Reached max "
          .concat(r, " events size queued for upload: ")
          .concat(3, "MiB"),
        source: $n,
        startClocks: Yt(),
      }),
      (e.queueFullReported = !0));
    var o = e.queuedPayloads;
    for (e.queuedPayloads = ma(); o.size() > 0; ) fa(o.dequeue(), e, n, r, i);
  }
  function ma() {
    var t = [];
    return {
      bytesCount: 0,
      enqueue: function (e) {
        this.isFull() || (t.push(e), (this.bytesCount += e.bytesCount));
      },
      first: function () {
        return t[0];
      },
      dequeue: function () {
        var e = t.shift();
        return e && (this.bytesCount -= e.bytesCount), e;
      },
      size: function () {
        return t.length;
      },
      isFull: function () {
        return this.bytesCount >= la;
      },
    };
  }
  function ga(t, e, n) {
    var r = {
        transportStatus: 0,
        currentBackoffTime: da,
        bandwidthMonitor: {
          ongoingRequestCount: 0,
          ongoingByteCount: 0,
          canHandle: function (t) {
            return (
              0 === this.ongoingRequestCount ||
              (this.ongoingByteCount + t.bytesCount <= 81920 &&
                this.ongoingRequestCount < 32)
            );
          },
          add: function (t) {
            (this.ongoingRequestCount += 1),
              (this.ongoingByteCount += t.bytesCount);
          },
          remove: function (t) {
            (this.ongoingRequestCount -= 1),
              (this.ongoingByteCount -= t.bytesCount);
          },
        },
        queuedPayloads: ma(),
        queueFullReported: !1,
      },
      i = function (n, r) {
        return (function (t, e, n, r) {
          var i =
            (function () {
              try {
                return window.Request && "keepalive" in new Request("http://a");
              } catch (t) {
                return !1;
              }
            })() && n.bytesCount < e;
          if (i) {
            var o = t.build("fetch", n);
            fetch(o, {
              method: "POST",
              body: n.data,
              keepalive: !0,
              mode: "cors",
            }).then(
              p(function (t) {
                return null == r
                  ? void 0
                  : r({ status: t.status, type: t.type });
              }),
              p(function () {
                _a(t.build("xhr", n), n.data, r);
              })
            );
          } else {
            _a(t.build("xhr", n), n.data, r);
          }
        })(t, e, n, r);
      };
    return {
      send: function (e) {
        fa(e, r, i, t.trackType, n);
      },
      sendOnExit: function (n) {
        !(function (t, e, n) {
          var r = !!navigator.sendBeacon && n.bytesCount < e;
          if (r)
            try {
              var i = t.build("beacon", n);
              if (navigator.sendBeacon(i, n.data)) return;
            } catch (t) {
              !(function (t) {
                ya || ((ya = !0), ve(t));
              })(t);
            }
          var o = t.build("xhr", n);
          _a(o, n.data);
        })(t, e, n);
      },
    };
  }
  var ya = !1;
  function _a(t, e, n) {
    var r = new XMLHttpRequest();
    r.open("POST", t, !0),
      e instanceof Blob && r.setRequestHeader("Content-Type", e.type),
      Z(
        { allowUntrustedEvents: !0 },
        r,
        "loadend",
        function () {
          null == n || n({ status: r.status });
        },
        { once: !0 }
      ),
      r.send(e);
  }
  function ba(t) {
    var e,
      n = t.messagesLimit,
      r = t.bytesLimit,
      i = t.durationLimit,
      o = t.pageExitObservable,
      a = t.sessionExpireObservable,
      s = o.subscribe(function (t) {
        return f(t.reason);
      }),
      u = a.subscribe(function () {
        return f("session_expire");
      }),
      c = new J(function () {
        return function () {
          s.unsubscribe(), u.unsubscribe();
        };
      }),
      l = 0,
      d = 0;
    function f(t) {
      if (0 !== d) {
        var e = d,
          n = l;
        (d = 0),
          (l = 0),
          p(),
          c.notify({ reason: t, messagesCount: e, bytesCount: n });
      }
    }
    function p() {
      R(e), (e = void 0);
    }
    return {
      flushObservable: c,
      get messagesCount() {
        return d;
      },
      notifyBeforeAddMessage: function (t) {
        l + t >= r && f("bytes_limit"),
          (d += 1),
          (l += t),
          void 0 === e &&
            (e = A(function () {
              f("duration_limit");
            }, i));
      },
      notifyAfterAddMessage: function (t) {
        void 0 === t && (t = 0),
          (l += t),
          d >= n ? f("messages_limit") : l >= r && f("bytes_limit");
      },
      notifyAfterRemoveMessage: function (t) {
        (l -= t), 0 === (d -= 1) && p();
      },
    };
  }
  function wa(t, e, n, r, i, o, a) {
    var s = t.replica,
      u = (function (t, e, n, r, i, o, a) {
        void 0 === a && (a = ua);
        var s = c(t, e),
          u = n && c(t, n);
        function c(t, e) {
          var n = e.endpoint,
            s = e.encoder;
          return a({
            encoder: s,
            request: ga(n, t.batchBytesLimit, r),
            flushController: ba({
              messagesLimit: t.batchMessagesLimit,
              bytesLimit: t.batchBytesLimit,
              durationLimit: t.flushTimeout,
              pageExitObservable: i,
              sessionExpireObservable: o,
            }),
            messageBytesLimit: t.messageBytesLimit,
          });
        }
        return {
          flushObservable: s.flushController.flushObservable,
          add: function (t, e) {
            void 0 === e && (e = !0),
              s.add(t),
              u && e && u.add(n.transformMessage ? n.transformMessage(t) : t);
          },
          upsert: function (t, e) {
            s.upsert(t, e),
              u && u.upsert(n.transformMessage ? n.transformMessage(t) : t, e);
          },
          stop: function () {
            s.stop(), u && u.stop();
          },
        };
      })(
        t,
        { endpoint: t.rumEndpointBuilder, encoder: a(2) },
        s && {
          endpoint: s.rumEndpointBuilder,
          transformMessage: function (t) {
            return H(t, { application: { id: s.applicationId } });
          },
          encoder: a(3),
        },
        r,
        i,
        o
      );
    return (
      e.subscribe(13, function (t) {
        "view" === t.type ? u.upsert(t, t.view.id) : u.add(t);
      }),
      n.subscribe(function (e) {
        return u.add(
          e,
          (function (t) {
            return t.site === It;
          })(t)
        );
      }),
      u
    );
  }
  var Sa = Ke;
  function ka(t, e) {
    var n = P(e);
    return new J(function (r) {
      var i = (function (t, e) {
          var n = Re(Ca("pushState"), "pushState", function (t) {
              (0, t.onPostCall)(e);
            }).stop,
            r = Re(Ca("replaceState"), "replaceState", function (t) {
              (0, t.onPostCall)(e);
            }).stop,
            i = Z(t, window, "popstate", e).stop;
          return {
            stop: function () {
              n(), r(), i();
            },
          };
        })(t, a).stop,
        o = (function (t, e) {
          return Z(t, window, "hashchange", e);
        })(t, a).stop;
      function a() {
        if (n.href !== e.href) {
          var t = P(e);
          r.notify({ newLocation: t, oldLocation: n }), (n = t);
        }
      }
      return function () {
        i(), o();
      };
    });
  }
  function Ca(t) {
    return Object.prototype.hasOwnProperty.call(history, t)
      ? history
      : History.prototype;
  }
  var xa = Ke;
  var Ta, Ea, Aa;
  function Ra() {
    0 !== Ta.batchCount && (pe("Customer data measures", Ta), Oa());
  }
  function Ia(t, e) {
    (t.sum += e), (t.min = Math.min(t.min, e)), (t.max = Math.max(t.max, e));
  }
  function Na(t, e) {
    (t.sum += e.sum),
      (t.min = Math.min(t.min, e.min)),
      (t.max = Math.max(t.max, e.max));
  }
  function Oa() {
    Ta = {
      batchCount: 0,
      batchBytesCount: { min: 1 / 0, max: 0, sum: 0 },
      batchMessagesCount: { min: 1 / 0, max: 0, sum: 0 },
      globalContextBytes: { min: 1 / 0, max: 0, sum: 0 },
      userContextBytes: { min: 1 / 0, max: 0, sum: 0 },
      featureFlagBytes: { min: 1 / 0, max: 0, sum: 0 },
    };
  }
  function Ma() {
    (Aa = !1),
      (Ea = {
        globalContextBytes: { min: 1 / 0, max: 0, sum: 0 },
        userContextBytes: { min: 1 / 0, max: 0, sum: 0 },
        featureFlagBytes: { min: 1 / 0, max: 0, sum: 0 },
      });
  }
  var La = Ke;
  function Da(t, e) {
    void 0 === e && (e = 500);
    var n,
      r = hr({ expireDelay: La, maxEntries: 4e3 });
    o(Pa(), Jt());
    var i = Q(
      t,
      window,
      [
        "pageshow",
        "focus",
        "blur",
        "visibilitychange",
        "resume",
        "freeze",
        "pagehide",
      ],
      function (t) {
        o(
          (function (t) {
            if ("freeze" === t.type) return "frozen";
            if ("pagehide" === t.type)
              return t.persisted ? "frozen" : "terminated";
            return Pa();
          })(t),
          t.timeStamp
        );
      },
      { capture: !0 }
    ).stop;
    function o(t, e) {
      void 0 === e && (e = Jt()),
        t !== n &&
          ((n = t), r.closeActive(e), r.add({ state: n, startTime: e }, e));
    }
    var a = {
      findAll: function (t, n) {
        var i = r.findAll(t, n);
        if (0 !== i.length) {
          for (
            var o = [], a = Math.max(0, i.length - e), s = i.length - 1;
            s >= a;
            s--
          ) {
            var u = i[s],
              c = $t(t, u.startTime);
            o.push({ state: u.state, start: Gt(c) });
          }
          return o;
        }
      },
      wasInPageStateAt: function (t, e) {
        return a.wasInPageStateDuringPeriod(t, e, 0);
      },
      wasInPageStateDuringPeriod: function (t, e, n) {
        return r.findAll(e, n).some(function (e) {
          return e.state === t;
        });
      },
      addPageState: o,
      stop: function () {
        i(), r.stop();
      },
    };
    return a;
  }
  function Pa() {
    return "hidden" === document.visibilityState
      ? "hidden"
      : document.hasFocus()
      ? "active"
      : "passive";
  }
  function Ua(t, e) {
    var n = window.cookieStore
      ? (function (t) {
          return function (e, n) {
            return Z(t, window.cookieStore, "change", function (t) {
              var r =
                y(t.changed, function (t) {
                  return t.name === e;
                }) ||
                y(t.deleted, function (t) {
                  return t.name === e;
                });
              r && n(r.value);
            }).stop;
          };
        })(t)
      : Ba;
    return new J(function (t) {
      return n(e, function (e) {
        return t.notify(e);
      });
    });
  }
  var za = Vt;
  function Ba(t, e) {
    var n = we(document.cookie, t),
      r = I(function () {
        var r = we(document.cookie, t);
        r !== n && e(r);
      }, za);
    return function () {
      N(r);
    };
  }
  var Va = "datadog-ci-visibility-test-execution-id";
  function Fa(t, e) {
    var n = e.session,
      r = e.viewContext,
      i = e.errorType,
      o = n ? n.id : "no-session-id",
      a = [];
    void 0 !== i && a.push("error-type=".concat(i)),
      r &&
        (a.push("seed=".concat(r.id)),
        a.push("from=".concat(r.startClocks.timeStamp)));
    var s,
      u,
      c,
      l =
        ((u = (s = t).site),
        (c =
          s.subdomain ||
          (function (t) {
            switch (t.site) {
              case Ot:
              case Mt:
                return "app";
              case It:
                return "dd";
              default:
                return;
            }
          })(s)),
        "https://".concat(c ? "".concat(c, ".") : "").concat(u)),
      d = "/rum/replay/sessions/".concat(o);
    return "".concat(l).concat(d, "?").concat(a.join("&"));
  }
  var qa;
  function ja(t) {
    return Ha(t).segments_count;
  }
  function Ha(t) {
    var e;
    return (
      qa || (qa = new Map()),
      qa.has(t)
        ? (e = qa.get(t))
        : ((e = {
            records_count: 0,
            segments_count: 0,
            segments_total_raw_size: 0,
          }),
          qa.set(t, e),
          qa.size > 10 &&
            (function () {
              if (!qa) return;
              if (qa.keys) {
                var t = qa.keys().next().value;
                t && qa.delete(t);
              } else {
                var e = !0;
                qa.forEach(function (t, n) {
                  e && (qa.delete(n), (e = !1));
                });
              }
            })()),
      e
    );
  }
  var Ga = new WeakMap();
  function Wa(t) {
    return Ga.has(t);
  }
  function Ka(t) {
    return Ga.get(t);
  }
  function Ja(t, e) {
    var n = t.tagName,
      r = t.value;
    if (mi(t, e)) {
      var i = t.type;
      if ("INPUT" === n && ("button" === i || "submit" === i || "reset" === i))
        return r;
      if (!r || "OPTION" === n) return;
      return li;
    }
    return "OPTION" === n || "SELECT" === n
      ? t.value
      : "INPUT" === n || "TEXTAREA" === n
      ? r
      : void 0;
  }
  var Ya = /url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm,
    Xa = /^[A-Za-z]+:|^\/\//,
    $a = /^data:.*,/i;
  function Za(t, e) {
    return t.replace(Ya, function (t, n, r, i, o, a) {
      var s = r || o || a;
      if (!e || !s || Xa.test(s) || $a.test(s)) return t;
      var u = n || i || "";
      return "url("
        .concat(u)
        .concat(
          (function (t, e) {
            try {
              return Oe(t, e).href;
            } catch (e) {
              return t;
            }
          })(s, e)
        )
        .concat(u, ")");
    });
  }
  var Qa = /[^a-z1-6-_]/;
  function ts(t) {
    var e = t.toLowerCase().trim();
    return Qa.test(e) ? "div" : e;
  }
  function es(t, e) {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"
      .concat(t, "' height='")
      .concat(e, "' style='background-color:silver'%3E%3C/svg%3E");
  }
  var ns = 2,
    rs = 3,
    is = 4,
    os = 6,
    as = 7,
    ss = 8,
    us = 9,
    cs = 0,
    ls = 1,
    ds = 2,
    fs = 3,
    ps = 4,
    vs = 11,
    hs = 0,
    ms = 1,
    gs = 2,
    ys = 3,
    _s = 4,
    bs = 5,
    ws = 6,
    Ss = 7,
    ks = 8,
    Cs = 1,
    xs = 2,
    Ts = 3,
    Es = 4,
    As = 5,
    Rs = 6,
    Is = 7,
    Ns = 9,
    Os = 0,
    Ms = 1;
  function Ls(t) {
    if (void 0 !== t && 0 !== t.length)
      return t.map(function (t) {
        var e = t.cssRules || t.rules;
        return {
          cssRules: Array.from(e, function (t) {
            return t.cssText;
          }),
          disabled: t.disabled || void 0,
          media: t.media.length > 0 ? Array.from(t.media) : void 0,
        };
      });
  }
  function Ds(t, e, n, r) {
    if (e === si.HIDDEN) return null;
    var i = t.getAttribute(n);
    if (
      e === si.MASK &&
      n !== ui &&
      !Li.includes(n) &&
      n !== r.actionNameAttribute
    ) {
      var o = t.tagName;
      switch (n) {
        case "title":
        case "alt":
        case "placeholder":
          return li;
      }
      if ("IMG" === o && ("src" === n || "srcset" === n)) {
        var a = t;
        if (a.naturalWidth > 0) return es(a.naturalWidth, a.naturalHeight);
        var s = t.getBoundingClientRect(),
          u = s.width,
          c = s.height;
        return u > 0 || c > 0 ? es(u, c) : di;
      }
      if ("SOURCE" === o && ("src" === n || "srcset" === n)) return di;
      if ("A" === o && "href" === n) return li;
      if (i && w(n, "data-")) return li;
      if ("IFRAME" === o && "srcdoc" === n) return li;
    }
    return i && "string" == typeof i && Pr(i) ? Ur(i) : i;
  }
  function Ps(t) {
    if (!t) return null;
    var e;
    try {
      e = t.rules || t.cssRules;
    } catch (t) {}
    return e ? Za(Array.from(e, 2 === Ge() ? Us : zs).join(""), t.href) : null;
  }
  function Us(t) {
    if (
      (function (t) {
        return "selectorText" in t;
      })(t) &&
      t.selectorText.includes(":")
    ) {
      return t.cssText.replace(/(\[[\w-]+[^\\])(:[^\]]+\])/g, "$1\\$2");
    }
    return zs(t);
  }
  function zs(t) {
    return (
      ((function (t) {
        return "styleSheet" in t;
      })(t) &&
        Ps(t.styleSheet)) ||
      t.cssText
    );
  }
  function Bs(t, e) {
    var n = (function (t, e) {
      switch (t.nodeType) {
        case t.DOCUMENT_NODE:
          return (function (t, e) {
            return {
              type: cs,
              childNodes: Fs(t, e),
              adoptedStyleSheets: Ls(t.adoptedStyleSheets),
            };
          })(t, e);
        case t.DOCUMENT_FRAGMENT_NODE:
          return (function (t, e) {
            var n = ii(t);
            n && e.serializationContext.shadowRootsController.addShadowRoot(t);
            return {
              type: vs,
              childNodes: Fs(t, e),
              isShadowRoot: n,
              adoptedStyleSheets: n ? Ls(t.adoptedStyleSheets) : void 0,
            };
          })(t, e);
        case t.DOCUMENT_TYPE_NODE:
          return {
            type: ls,
            name: (n = t).name,
            publicId: n.publicId,
            systemId: n.systemId,
          };
        case t.ELEMENT_NODE:
          return (function (t, e) {
            var n,
              r = ts(t.tagName),
              i =
                ((a = t),
                "svg" === a.tagName || a instanceof SVGElement || void 0),
              o = vi(hi(t), e.parentNodePrivacyLevel);
            var a;
            if (o === si.HIDDEN) {
              var s = t.getBoundingClientRect(),
                u = s.width,
                c = s.height;
              return {
                type: ds,
                tagName: r,
                attributes:
                  ((n = {
                    rr_width: "".concat(u, "px"),
                    rr_height: "".concat(c, "px"),
                  }),
                  (n[ui] = ci),
                  n),
                childNodes: [],
                isSVG: i,
              };
            }
            if (o === si.IGNORE) return;
            var l = (function (t, e, n) {
                var r;
                if (e === si.HIDDEN) return {};
                for (
                  var i = {}, o = ts(t.tagName), a = t.ownerDocument, s = 0;
                  s < t.attributes.length;
                  s += 1
                ) {
                  var u = t.attributes.item(s).name,
                    c = Ds(t, e, u, n.configuration);
                  null !== c && (i[u] = c);
                }
                if (
                  t.value &&
                  ("textarea" === o ||
                    "select" === o ||
                    "option" === o ||
                    "input" === o)
                ) {
                  var l = Ja(t, e);
                  void 0 !== l && (i.value = l);
                }
                if ("option" === o && e === si.ALLOW) {
                  var d = t;
                  d.selected && (i.selected = d.selected);
                }
                if ("link" === o) {
                  var f,
                    p = Array.from(a.styleSheets).find(function (e) {
                      return e.href === t.href;
                    });
                  (f = Ps(p)) && p && (i._cssText = f);
                }
                "style" === o &&
                  t.sheet &&
                  (f = Ps(t.sheet)) &&
                  (i._cssText = f);
                var v,
                  h,
                  m = t;
                if (
                  ("input" !== o ||
                    ("radio" !== m.type && "checkbox" !== m.type) ||
                    (e === si.ALLOW
                      ? (i.checked = !!m.checked)
                      : mi(m, e) && delete i.checked),
                  "audio" === o || "video" === o)
                ) {
                  var g = t;
                  i.rr_mediaState = g.paused ? "paused" : "played";
                }
                var y = n.serializationContext;
                switch (y.status) {
                  case 0:
                    (v = Math.round(t.scrollTop)),
                      (h = Math.round(t.scrollLeft)),
                      (v || h) &&
                        y.elementsScrollPositions.set(t, {
                          scrollTop: v,
                          scrollLeft: h,
                        });
                    break;
                  case 1:
                    y.elementsScrollPositions.has(t) &&
                      ((v = (r = y.elementsScrollPositions.get(t)).scrollTop),
                      (h = r.scrollLeft));
                }
                return h && (i.rr_scrollLeft = h), v && (i.rr_scrollTop = v), i;
              })(t, o, e),
              d = [];
            if (
              (function (t) {
                return t.childNodes.length > 0 || ri(t);
              })(t) &&
              "style" !== r
            ) {
              d = Fs(
                t,
                e.parentNodePrivacyLevel === o &&
                  e.ignoreWhiteSpace === ("head" === r)
                  ? e
                  : S({}, e, {
                      parentNodePrivacyLevel: o,
                      ignoreWhiteSpace: "head" === r,
                    })
              );
            }
            return {
              type: ds,
              tagName: r,
              attributes: l,
              childNodes: d,
              isSVG: i,
            };
          })(t, e);
        case t.TEXT_NODE:
          return (function (t, e) {
            var n = yi(t, e.ignoreWhiteSpace || !1, e.parentNodePrivacyLevel);
            if (void 0 === n) return;
            return { type: fs, textContent: n };
          })(t, e);
        case t.CDATA_SECTION_NODE:
          return { type: ps, textContent: "" };
      }
      var n;
    })(t, e);
    if (!n) return null;
    var r = Ka(t) || Vs++,
      i = n;
    return (
      (i.id = r),
      (function (t, e) {
        Ga.set(t, e);
      })(t, r),
      e.serializedNodeIds && e.serializedNodeIds.add(r),
      i
    );
  }
  var Vs = 1;
  function Fs(t, e) {
    var n = [];
    return (
      oi(t, function (t) {
        var r = Bs(t, e);
        r && n.push(r);
      }),
      n
    );
  }
  function qs(t, e, n) {
    return Bs(t, {
      serializationContext: n,
      parentNodePrivacyLevel: e.defaultPrivacyLevel,
      configuration: e,
    });
  }
  function js(t) {
    return Boolean(t.changedTouches);
  }
  function Hs(t) {
    return !0 === t.composed && ri(t.target) ? t.composedPath()[0] : t.target;
  }
  var Gs = function (t, e) {
      var n = window.visualViewport,
        r = {
          layoutViewportX: t,
          layoutViewportY: e,
          visualViewportX: t,
          visualViewportY: e,
        };
      return n
        ? (!(function (t) {
            return (
              Math.abs(t.pageTop - t.offsetTop - window.scrollY) > 25 ||
              Math.abs(t.pageLeft - t.offsetLeft - window.scrollX) > 25
            );
          })(n)
            ? ((r.visualViewportX = Math.round(t - n.offsetLeft)),
              (r.visualViewportY = Math.round(e - n.offsetTop)))
            : ((r.layoutViewportX = Math.round(t + n.offsetLeft)),
              (r.layoutViewportY = Math.round(e + n.offsetTop))),
          r)
        : r;
    },
    Ws = function (t) {
      return {
        scale: t.scale,
        offsetLeft: t.offsetLeft,
        offsetTop: t.offsetTop,
        pageLeft: t.pageLeft,
        pageTop: t.pageTop,
        height: t.height,
        width: t.width,
      };
    };
  function Ks(t, e) {
    return { data: S({ source: t }, e), type: rs, timestamp: Kt() };
  }
  var Js;
  function Ys(t, e) {
    var n = O(
        function (t) {
          var n = Hs(t);
          if (Wa(n)) {
            var r = Xs(t);
            if (!r) return;
            var i = { id: Ka(n), timeOffset: 0, x: r.x, y: r.y };
            e(Ks(js(t) ? ws : ms, { positions: [i] }));
          }
        },
        50,
        { trailing: !1 }
      ),
      r = n.throttled,
      i = n.cancel,
      o = Q(t, document, ["mousemove", "touchmove"], r, {
        capture: !0,
        passive: !0,
      }).stop;
    return {
      stop: function () {
        o(), i();
      },
    };
  }
  function Xs(t) {
    var e = js(t) ? t.changedTouches[0] : t,
      n = e.clientX,
      r = e.clientY;
    if (window.visualViewport) {
      var i = Gs(n, r);
      (n = i.visualViewportX), (r = i.visualViewportY);
    }
    if (Number.isFinite(n) && Number.isFinite(r)) return { x: n, y: r };
    t.isTrusted && pe("mouse/touch event without x/y");
  }
  var $s =
    (((Js = {}).pointerup = 0),
    (Js.mousedown = Cs),
    (Js.click = xs),
    (Js.contextmenu = Ts),
    (Js.dblclick = Es),
    (Js.focus = As),
    (Js.blur = Rs),
    (Js.touchstart = Is),
    (Js.touchend = Ns),
    Js);
  function Zs(t, e, n) {
    return Q(
      t,
      document,
      Object.keys($s),
      function (r) {
        var i = Hs(r);
        if (pi(i, t.defaultPrivacyLevel) !== si.HIDDEN && Wa(i)) {
          var o,
            a = Ka(i),
            s = $s[r.type];
          if (s !== Rs && s !== As) {
            var u = Xs(r);
            if (!u) return;
            o = { id: a, type: s, x: u.x, y: u.y };
          } else o = { id: a, type: s };
          var c = S({ id: n.getIdForEvent(r) }, Ks(gs, o));
          e(c);
        }
      },
      { capture: !0, passive: !0 }
    );
  }
  function Qs(t, e, n, r) {
    void 0 === r && (r = document);
    var i = O(function (r) {
        var i = Hs(r);
        if (i && pi(i, t.defaultPrivacyLevel) !== si.HIDDEN && Wa(i)) {
          var o = Ka(i),
            a =
              i === document
                ? { scrollTop: Go(), scrollLeft: Ho() }
                : {
                    scrollTop: Math.round(i.scrollTop),
                    scrollLeft: Math.round(i.scrollLeft),
                  };
          n.set(i, a), e(Ks(ys, { id: o, x: a.scrollLeft, y: a.scrollTop }));
        }
      }, 100),
      o = i.throttled,
      a = i.cancel,
      s = Z(t, r, "scroll", o, { capture: !0, passive: !0 }).stop;
    return {
      stop: function () {
        s(), a();
      },
    };
  }
  function tu(t, e) {
    var n = Wo(t).subscribe(function (t) {
      e(Ks(_s, t));
    });
    return {
      stop: function () {
        n.unsubscribe();
      },
    };
  }
  function eu(t, e) {
    var n = window.visualViewport;
    if (!n) return { stop: M };
    var r = O(
        function () {
          e({ data: Ws(n), type: ss, timestamp: Kt() });
        },
        200,
        { trailing: !1 }
      ),
      i = r.throttled,
      o = r.cancel,
      a = Q(t, n, ["resize", "scroll"], i, { capture: !0, passive: !0 }).stop;
    return {
      stop: function () {
        a(), o();
      },
    };
  }
  function nu(t, e) {
    return Q(
      t,
      document,
      ["play", "pause"],
      function (n) {
        var r = Hs(n);
        r &&
          pi(r, t.defaultPrivacyLevel) !== si.HIDDEN &&
          Wa(r) &&
          e(Ks(Ss, { id: Ka(r), type: "play" === n.type ? Os : Ms }));
      },
      { capture: !0, passive: !0 }
    );
  }
  function ru(t) {
    function e(t, e) {
      t && Wa(t.ownerNode) && e(Ka(t.ownerNode));
    }
    var n = [
      Re(CSSStyleSheet.prototype, "insertRule", function (n) {
        var r = n.target,
          i = n.parameters,
          o = i[0],
          a = i[1];
        e(r, function (e) {
          return t(Ks(ks, { id: e, adds: [{ rule: o, index: a }] }));
        });
      }),
      Re(CSSStyleSheet.prototype, "deleteRule", function (n) {
        var r = n.target,
          i = n.parameters[0];
        e(r, function (e) {
          return t(Ks(ks, { id: e, removes: [{ index: i }] }));
        });
      }),
    ];
    function r(r) {
      n.push(
        Re(r.prototype, "insertRule", function (n) {
          var r = n.target,
            i = n.parameters,
            o = i[0],
            a = i[1];
          e(r.parentStyleSheet, function (e) {
            var n = iu(r);
            n &&
              (n.push(a || 0),
              t(Ks(ks, { id: e, adds: [{ rule: o, index: n }] })));
          });
        }),
        Re(r.prototype, "deleteRule", function (n) {
          var r = n.target,
            i = n.parameters[0];
          e(r.parentStyleSheet, function (e) {
            var n = iu(r);
            n && (n.push(i), t(Ks(ks, { id: e, removes: [{ index: n }] })));
          });
        })
      );
    }
    return (
      "undefined" != typeof CSSGroupingRule
        ? r(CSSGroupingRule)
        : (r(CSSMediaRule), r(CSSSupportsRule)),
      {
        stop: function () {
          n.forEach(function (t) {
            return t.stop();
          });
        },
      }
    );
  }
  function iu(t) {
    for (var e = [], n = t; n.parentRule; ) {
      var r = Array.from(n.parentRule.cssRules).indexOf(n);
      e.unshift(r), (n = n.parentRule);
    }
    if (n.parentStyleSheet) {
      var i = Array.from(n.parentStyleSheet.cssRules).indexOf(n);
      return e.unshift(i), e;
    }
  }
  function ou(t, e) {
    return Q(t, window, ["focus", "blur"], function () {
      e({
        data: { has_focus: document.hasFocus() },
        type: os,
        timestamp: Kt(),
      });
    });
  }
  function au(t, e, n) {
    var r = t.subscribe(12, function (t) {
      var r, i;
      "action" === t.rawRumEvent.type &&
        "click" === t.rawRumEvent.action.type &&
        (null ===
          (i =
            null === (r = t.rawRumEvent.action.frustration) || void 0 === r
              ? void 0
              : r.type) || void 0 === i
          ? void 0
          : i.length) &&
        "events" in t.domainContext &&
        t.domainContext.events &&
        t.domainContext.events.length &&
        e({
          timestamp: t.rawRumEvent.date,
          type: us,
          data: {
            frustrationTypes: t.rawRumEvent.action.frustration.type,
            recordIds: t.domainContext.events.map(function (t) {
              return n.getIdForEvent(t);
            }),
          },
        });
    });
    return {
      stop: function () {
        r.unsubscribe();
      },
    };
  }
  function su(t, e) {
    var n = t.subscribe(5, function () {
      e({ timestamp: Kt(), type: as });
    });
    return {
      stop: function () {
        n.unsubscribe();
      },
    };
  }
  function uu(t, e, n) {
    void 0 === n && (n = document);
    var r,
      i = t.defaultPrivacyLevel,
      o = new WeakMap(),
      a = n !== document,
      s = Q(
        t,
        n,
        a ? ["change"] : ["input", "change"],
        function (t) {
          var e = Hs(t);
          (e instanceof HTMLInputElement ||
            e instanceof HTMLTextAreaElement ||
            e instanceof HTMLSelectElement) &&
            c(e);
        },
        { capture: !0, passive: !0 }
      ).stop;
    if (a) r = M;
    else {
      var u = [
        Ie(HTMLInputElement.prototype, "value", c),
        Ie(HTMLInputElement.prototype, "checked", c),
        Ie(HTMLSelectElement.prototype, "value", c),
        Ie(HTMLTextAreaElement.prototype, "value", c),
        Ie(HTMLSelectElement.prototype, "selectedIndex", c),
      ];
      r = function () {
        u.forEach(function (t) {
          return t.stop();
        });
      };
    }
    return {
      stop: function () {
        r(), s();
      },
    };
    function c(t) {
      var e = pi(t, i);
      if (e !== si.HIDDEN) {
        var n,
          r = t.type;
        if ("radio" === r || "checkbox" === r) {
          if (mi(t, e)) return;
          n = { isChecked: t.checked };
        } else {
          var o = Ja(t, e);
          if (void 0 === o) return;
          n = { text: o };
        }
        l(t, n);
        var a,
          s,
          u = t.name;
        "radio" === r &&
          u &&
          t.checked &&
          ((a = document.querySelectorAll(
            'input[type="radio"][name="'.concat($r(u), '"]')
          )),
          (s = function (e) {
            e !== t && l(e, { isChecked: !1 });
          }),
          Array.prototype.forEach.call(a, s));
      }
    }
    function l(t, n) {
      if (Wa(t)) {
        var r = o.get(t);
        (r && r.text === n.text && r.isChecked === n.isChecked) ||
          (o.set(t, n), e(Ks(bs, S({ id: Ka(t) }, n))));
      }
    }
  }
  function cu(t, e, n, r) {
    var i = Xn();
    if (!i) return { stop: M, flush: M };
    var o = (function (t) {
        var e = M,
          n = [];
        function r() {
          e(), t(n), (n = []);
        }
        var i = O(r, 16, { leading: !1 }),
          o = i.throttled,
          a = i.cancel;
        return {
          addMutations: function (t) {
            0 === n.length && (e = ho(o, { timeout: 100 })), n.push.apply(n, t);
          },
          flush: r,
          stop: function () {
            e(), a();
          },
        };
      })(function (r) {
        !(function (t, e, n, r) {
          var i = new Map();
          t.filter(function (t) {
            return "childList" === t.type;
          }).forEach(function (t) {
            t.removedNodes.forEach(function (t) {
              lu(t, r.removeShadowRoot);
            });
          });
          var o = t.filter(function (t) {
              return (
                t.target.isConnected &&
                (function (t) {
                  for (var e = t; e; ) {
                    if (!Wa(e) && !ii(e)) return !1;
                    e = ai(e);
                  }
                  return !0;
                })(t.target) &&
                pi(t.target, n.defaultPrivacyLevel, i) !== si.HIDDEN
              );
            }),
            a = (function (t, e, n, r) {
              for (
                var i = new Set(),
                  o = new Map(),
                  a = function (t) {
                    t.addedNodes.forEach(function (t) {
                      i.add(t);
                    }),
                      t.removedNodes.forEach(function (e) {
                        i.has(e) || o.set(e, t.target), i.delete(e);
                      });
                  },
                  s = 0,
                  u = t;
                s < u.length;
                s++
              ) {
                a(u[s]);
              }
              var c = Array.from(i);
              (l = c),
                l.sort(function (t, e) {
                  var n = t.compareDocumentPosition(e);
                  return n & Node.DOCUMENT_POSITION_CONTAINED_BY
                    ? -1
                    : n & Node.DOCUMENT_POSITION_CONTAINS ||
                      n & Node.DOCUMENT_POSITION_FOLLOWING
                    ? 1
                    : n & Node.DOCUMENT_POSITION_PRECEDING
                    ? -1
                    : 0;
                });
              var l;
              for (var d = new Set(), f = [], p = 0, v = c; p < v.length; p++) {
                var h = v[p];
                if (!b(h)) {
                  var m = pi(h.parentNode, e.defaultPrivacyLevel, r);
                  if (m !== si.HIDDEN && m !== si.IGNORE) {
                    var g = Bs(h, {
                      serializedNodeIds: d,
                      parentNodePrivacyLevel: m,
                      serializationContext: {
                        status: 2,
                        shadowRootsController: n,
                      },
                      configuration: e,
                    });
                    if (g) {
                      var y = ai(h);
                      f.push({ nextId: w(h), parentId: Ka(y), node: g });
                    }
                  }
                }
              }
              var _ = [];
              return (
                o.forEach(function (t, e) {
                  Wa(e) && _.push({ parentId: Ka(t), id: Ka(e) });
                }),
                { adds: f, removes: _, hasBeenSerialized: b }
              );
              function b(t) {
                return Wa(t) && d.has(Ka(t));
              }
              function w(t) {
                for (var e = t.nextSibling; e; ) {
                  if (Wa(e)) return Ka(e);
                  e = e.nextSibling;
                }
                return null;
              }
            })(
              o.filter(function (t) {
                return "childList" === t.type;
              }),
              n,
              r,
              i
            ),
            s = a.adds,
            u = a.removes,
            c = a.hasBeenSerialized,
            l = (function (t, e, n) {
              for (
                var r,
                  i = [],
                  o = new Set(),
                  a = t.filter(function (t) {
                    return !o.has(t.target) && (o.add(t.target), !0);
                  }),
                  s = 0,
                  u = a;
                s < u.length;
                s++
              ) {
                var c = u[s];
                if (c.target.textContent !== c.oldValue) {
                  var l = pi(ai(c.target), e.defaultPrivacyLevel, n);
                  l !== si.HIDDEN &&
                    l !== si.IGNORE &&
                    i.push({
                      id: Ka(c.target),
                      value:
                        null !== (r = yi(c.target, !1, l)) && void 0 !== r
                          ? r
                          : null,
                    });
                }
              }
              return i;
            })(
              o.filter(function (t) {
                return "characterData" === t.type && !c(t.target);
              }),
              n,
              i
            ),
            d = (function (t, e, n) {
              for (
                var r = [],
                  i = new Map(),
                  o = t.filter(function (t) {
                    var e = i.get(t.target);
                    return (
                      (!e || !e.has(t.attributeName)) &&
                      (e
                        ? e.add(t.attributeName)
                        : i.set(t.target, new Set([t.attributeName])),
                      !0)
                    );
                  }),
                  a = new Map(),
                  s = 0,
                  u = o;
                s < u.length;
                s++
              ) {
                var c = u[s];
                if (c.target.getAttribute(c.attributeName) !== c.oldValue) {
                  var l = pi(c.target, e.defaultPrivacyLevel, n),
                    d = Ds(c.target, l, c.attributeName, e),
                    f = void 0;
                  if ("value" === c.attributeName) {
                    var p = Ja(c.target, l);
                    if (void 0 === p) continue;
                    f = p;
                  } else f = "string" == typeof d ? d : null;
                  var v = a.get(c.target);
                  v ||
                    ((v = { id: Ka(c.target), attributes: {} }),
                    r.push(v),
                    a.set(c.target, v)),
                    (v.attributes[c.attributeName] = f);
                }
              }
              return r;
            })(
              o.filter(function (t) {
                return "attributes" === t.type && !c(t.target);
              }),
              n,
              i
            );
          if (!(l.length || d.length || u.length || s.length)) return;
          e(Ks(hs, { adds: s, removes: u, texts: l, attributes: d }));
        })(r.concat(a.takeRecords()), t, e, n);
      }),
      a = new i(p(o.addMutations));
    return (
      a.observe(r, {
        attributeOldValue: !0,
        attributes: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0,
      }),
      {
        stop: function () {
          a.disconnect(), o.stop();
        },
        flush: function () {
          o.flush();
        },
      }
    );
  }
  function lu(t, e) {
    ri(t) && e(t.shadowRoot),
      oi(t, function (t) {
        return lu(t, e);
      });
  }
  function du(t) {
    var e = t.emit,
      n = t.configuration,
      r = t.lifeCycle;
    if (!e) throw new Error("emit function is required");
    var i,
      o = function (n) {
        e(n), ee("record", { record: n });
        var r = t.viewHistory.findView();
        Ha(r.id).records_count += 1;
      },
      a =
        ((i = new WeakMap()),
        {
          set: function (t, e) {
            (t !== document || document.scrollingElement) &&
              i.set(t === document ? document.scrollingElement : t, e);
          },
          get: function (t) {
            return i.get(t);
          },
          has: function (t) {
            return i.has(t);
          },
        }),
      s = (function (t, e, n) {
        var r = new Map(),
          i = {
            addShadowRoot: function (o) {
              if (!r.has(o)) {
                var a = cu(e, t, i, o),
                  s = uu(t, e, o),
                  u = Qs(t, e, n, o);
                r.set(o, {
                  flush: function () {
                    return a.flush();
                  },
                  stop: function () {
                    a.stop(), s.stop(), u.stop();
                  },
                });
              }
            },
            removeShadowRoot: function (t) {
              var e = r.get(t);
              e && (e.stop(), r.delete(t));
            },
            stop: function () {
              r.forEach(function (t) {
                return (0, t.stop)();
              });
            },
            flush: function () {
              r.forEach(function (t) {
                return (0, t.flush)();
              });
            },
          };
        return i;
      })(n, o, a),
      u = (function (t, e, n, r, i, o) {
        var a = function (n, i) {
          void 0 === n && (n = Kt()),
            void 0 === i &&
              (i = {
                status: 0,
                elementsScrollPositions: t,
                shadowRootsController: e,
              });
          var o = Ko(),
            a = o.width,
            s = [
              {
                data: {
                  height: o.height,
                  href: window.location.href,
                  width: a,
                },
                type: is,
                timestamp: n,
              },
              {
                data: { has_focus: document.hasFocus() },
                type: os,
                timestamp: n,
              },
              {
                data: {
                  node: qs(document, r, i),
                  initialOffset: { left: Ho(), top: Go() },
                },
                type: ns,
                timestamp: n,
              },
            ];
          return (
            window.visualViewport &&
              s.push({
                data: Ws(window.visualViewport),
                type: ss,
                timestamp: n,
              }),
            s
          );
        };
        return (
          o(a()),
          {
            stop: n.subscribe(2, function (n) {
              i(),
                o(
                  a(n.startClocks.timeStamp, {
                    shadowRootsController: e,
                    status: 1,
                    elementsScrollPositions: t,
                  })
                );
            }).unsubscribe,
          }
        );
      })(a, s, r, n, c, function (t) {
        return t.forEach(function (t) {
          return o(t);
        });
      }).stop;
    function c() {
      s.flush(), d.flush();
    }
    var l = (function () {
        var t = new WeakMap(),
          e = 1;
        return {
          getIdForEvent: function (n) {
            return t.has(n) || t.set(n, e++), t.get(n);
          },
        };
      })(),
      d = cu(o, n, s, document),
      f = [
        d,
        Ys(n, o),
        Zs(n, o, l),
        Qs(n, o, a, document),
        tu(n, o),
        uu(n, o),
        nu(n, o),
        ru(o),
        ou(n, o),
        eu(n, o),
        au(r, o, l),
        su(r, function (t) {
          c(), o(t);
        }),
      ];
    return {
      stop: function () {
        s.stop(),
          f.forEach(function (t) {
            return t.stop();
          }),
          u();
      },
      flushMutations: c,
      shadowRootsController: s,
    };
  }
  function fu(t) {
    var e = t.context,
      n = t.creationReason,
      r = t.encoder,
      i = 0,
      o = e.view.id,
      a = S(
        {
          start: 1 / 0,
          end: -1 / 0,
          creation_reason: n,
          records_count: 0,
          has_full_snapshot: !1,
          index_in_view: ja(o),
          source: "browser",
        },
        e
      );
    return (
      (function (t) {
        Ha(t).segments_count += 1;
      })(o),
      {
        addRecord: function (t, e) {
          (a.start = Math.min(a.start, t.timestamp)),
            (a.end = Math.max(a.end, t.timestamp)),
            (a.records_count += 1),
            a.has_full_snapshot || (a.has_full_snapshot = t.type === ns);
          var n = r.isEmpty ? '{"records":[' : ",";
          r.write(n + JSON.stringify(t), function (t) {
            e((i += t));
          });
        },
        flush: function (t) {
          if (r.isEmpty) throw new Error("Empty segment flushed");
          r.write("],".concat(JSON.stringify(a).slice(1), "\n")),
            r.finish(function (e) {
              !(function (t, e) {
                Ha(t).segments_total_raw_size += e;
              })(a.view.id, e.rawBytesCount),
                t(a, e);
            });
        },
      }
    );
  }
  var pu = 6e4;
  function vu(t, e, n, r, i, o) {
    return (function (t, e, n, r) {
      var i = { status: 0, nextSegmentCreationReason: "init" },
        o = t.subscribe(2, function () {
          s("view_change");
        }).unsubscribe,
        a = t.subscribe(11, function (t) {
          s(t.reason);
        }).unsubscribe;
      function s(t) {
        1 === i.status &&
          (i.segment.flush(function (e, r) {
            var i = (function (t, e, n) {
              var r = new FormData();
              r.append(
                "segment",
                new Blob([t], { type: "application/octet-stream" }),
                "".concat(e.session.id, "-").concat(e.start)
              );
              var i = S(
                  {
                    raw_segment_size: n,
                    compressed_segment_size: t.byteLength,
                  },
                  e
                ),
                o = JSON.stringify(i);
              return (
                r.append("event", new Blob([o], { type: "application/json" })),
                { data: r, bytesCount: t.byteLength }
              );
            })(r.output, e, r.rawBytesCount);
            Yn(t) ? n.sendOnExit(i) : n.send(i);
          }),
          R(i.expirationTimeoutId)),
          (i =
            "stop" !== t
              ? { status: 0, nextSegmentCreationReason: t }
              : { status: 2 });
      }
      return {
        addRecord: function (t) {
          if (2 !== i.status) {
            if (0 === i.status) {
              var n = e();
              if (!n) return;
              i = {
                status: 1,
                segment: fu({
                  encoder: r,
                  context: n,
                  creationReason: i.nextSegmentCreationReason,
                }),
                expirationTimeoutId: A(function () {
                  s("segment_duration_limit");
                }, 5e3),
              };
            }
            i.segment.addRecord(t, function (t) {
              t > pu && s("segment_bytes_limit");
            });
          }
        },
        stop: function () {
          s("stop"), o(), a();
        },
      };
    })(
      t,
      function () {
        return (function (t, e, n) {
          var r = e.findTrackedSession(),
            i = n.findView();
          if (!r || !i) return;
          return {
            application: { id: t },
            session: { id: r.id },
            view: { id: i.id },
          };
        })(e.applicationId, n, r);
      },
      i,
      o
    );
  }
  function hu(t, e, n) {
    var r,
      i = 0,
      o = [],
      a = 0,
      s = [],
      u = Z(t, e, "message", function (t) {
        var e = t.data;
        if ("wrote" === e.type && e.streamId === n) {
          (i += e.additionalBytesCount), o.push(e.result), (r = e.trailer);
          var a = s.shift();
          a && a.id === e.id
            ? a.writeCallback
              ? a.writeCallback(e.result.byteLength)
              : a.finishCallback && a.finishCallback()
            : (u(), pe("Worker responses received out of order."));
        }
      }).stop;
    function c() {
      var t =
          0 === o.length
            ? new Uint8Array(0)
            : (function (t) {
                for (
                  var e = t.reduce(function (t, e) {
                      return t + e.length;
                    }, 0),
                    n = new Uint8Array(e),
                    r = 0,
                    i = 0,
                    o = t;
                  i < o.length;
                  i++
                ) {
                  var a = o[i];
                  n.set(a, r), (r += a.length);
                }
                return n;
              })(o.concat(r)),
        e = {
          rawBytesCount: i,
          output: t,
          outputBytesCount: t.byteLength,
          encoding: "deflate",
        };
      return (i = 0), (o = []), e;
    }
    function l() {
      a > 0 && (e.postMessage({ action: "reset", streamId: n }), (a = 0));
    }
    return {
      isAsync: !0,
      get isEmpty() {
        return 0 === a;
      },
      write: function (t, r) {
        e.postMessage({ action: "write", id: a, data: t, streamId: n }),
          s.push({ id: a, writeCallback: r, data: t }),
          (a += 1);
      },
      finish: function (t) {
        l(),
          s.length
            ? (s.forEach(function (t) {
                delete t.writeCallback;
              }),
              (s[s.length - 1].finishCallback = function () {
                return t(c());
              }))
            : t(c());
      },
      finishSync: function () {
        l();
        var t = s
          .map(function (t) {
            return delete t.writeCallback, delete t.finishCallback, t.data;
          })
          .join("");
        return S(c(), { pendingData: t });
      },
      estimateEncodedBytesCount: function (t) {
        return t.length / 8;
      },
      stop: function () {
        u();
      },
    };
  }
  function mu(t) {
    return new Worker(
      t.workerUrl ||
        URL.createObjectURL(
          new Blob([
            '!function(){"use strict";function t(t){for(var e=t.reduce((function(t,e){return t+e.length}),0),a=new Uint8Array(e),n=0,r=0,i=t;r<i.length;r++){var s=i[r];a.set(s,n),n+=s.length}return a}function e(t){for(var e=t.length;--e>=0;)t[e]=0}var a=256,n=286,r=30,i=15,s=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),h=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),l=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),_=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=new Array(576);e(o);var d=new Array(60);e(d);var u=new Array(512);e(u);var f=new Array(256);e(f);var c=new Array(29);e(c);var p,g,w,v=new Array(r);function b(t,e,a,n,r){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=n,this.max_length=r,this.has_stree=t&&t.length}function m(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}e(v);var y=function(t){return t<256?u[t]:u[256+(t>>>7)]},k=function(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},z=function(t,e,a){t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,k(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},x=function(t,e,a){z(t,a[2*e],a[2*e+1])},A=function(t,e){var a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},U=function(t,e,a){var n,r,s=new Array(16),h=0;for(n=1;n<=i;n++)s[n]=h=h+a[n-1]<<1;for(r=0;r<=e;r++){var l=t[2*r+1];0!==l&&(t[2*r]=A(s[l]++,l))}},I=function(t){var e;for(e=0;e<n;e++)t.dyn_ltree[2*e]=0;for(e=0;e<r;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0},B=function(t){t.bi_valid>8?k(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},E=function(t,e,a,n){var r=2*e,i=2*a;return t[r]<t[i]||t[r]===t[i]&&n[e]<=n[a]},S=function(t,e,a){for(var n=t.heap[a],r=a<<1;r<=t.heap_len&&(r<t.heap_len&&E(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!E(e,n,t.heap[r],t.depth));)t.heap[a]=t.heap[r],a=r,r<<=1;t.heap[a]=n},C=function(t,e,n){var r,i,l,_,o=0;if(0!==t.last_lit)do{r=t.pending_buf[t.d_buf+2*o]<<8|t.pending_buf[t.d_buf+2*o+1],i=t.pending_buf[t.l_buf+o],o++,0===r?x(t,i,e):(l=f[i],x(t,l+a+1,e),0!==(_=s[l])&&(i-=c[l],z(t,i,_)),r--,l=y(r),x(t,l,n),0!==(_=h[l])&&(r-=v[l],z(t,r,_)))}while(o<t.last_lit);x(t,256,e)},D=function(t,e){var a,n,r,s=e.dyn_tree,h=e.stat_desc.static_tree,l=e.stat_desc.has_stree,_=e.stat_desc.elems,o=-1;for(t.heap_len=0,t.heap_max=573,a=0;a<_;a++)0!==s[2*a]?(t.heap[++t.heap_len]=o=a,t.depth[a]=0):s[2*a+1]=0;for(;t.heap_len<2;)s[2*(r=t.heap[++t.heap_len]=o<2?++o:0)]=1,t.depth[r]=0,t.opt_len--,l&&(t.static_len-=h[2*r+1]);for(e.max_code=o,a=t.heap_len>>1;a>=1;a--)S(t,s,a);r=_;do{a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],S(t,s,1),n=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=n,s[2*r]=s[2*a]+s[2*n],t.depth[r]=(t.depth[a]>=t.depth[n]?t.depth[a]:t.depth[n])+1,s[2*a+1]=s[2*n+1]=r,t.heap[1]=r++,S(t,s,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],function(t,e){var a,n,r,s,h,l,_=e.dyn_tree,o=e.max_code,d=e.stat_desc.static_tree,u=e.stat_desc.has_stree,f=e.stat_desc.extra_bits,c=e.stat_desc.extra_base,p=e.stat_desc.max_length,g=0;for(s=0;s<=i;s++)t.bl_count[s]=0;for(_[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<573;a++)(s=_[2*_[2*(n=t.heap[a])+1]+1]+1)>p&&(s=p,g++),_[2*n+1]=s,n>o||(t.bl_count[s]++,h=0,n>=c&&(h=f[n-c]),l=_[2*n],t.opt_len+=l*(s+h),u&&(t.static_len+=l*(d[2*n+1]+h)));if(0!==g){do{for(s=p-1;0===t.bl_count[s];)s--;t.bl_count[s]--,t.bl_count[s+1]+=2,t.bl_count[p]--,g-=2}while(g>0);for(s=p;0!==s;s--)for(n=t.bl_count[s];0!==n;)(r=t.heap[--a])>o||(_[2*r+1]!==s&&(t.opt_len+=(s-_[2*r+1])*_[2*r],_[2*r+1]=s),n--)}}(t,e),U(s,o,t.bl_count)},j=function(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,_=4;for(0===s&&(l=138,_=3),e[2*(a+1)+1]=65535,n=0;n<=a;n++)r=s,s=e[2*(n+1)+1],++h<l&&r===s||(h<_?t.bl_tree[2*r]+=h:0!==r?(r!==i&&t.bl_tree[2*r]++,t.bl_tree[32]++):h<=10?t.bl_tree[34]++:t.bl_tree[36]++,h=0,i=r,0===s?(l=138,_=3):r===s?(l=6,_=3):(l=7,_=4))},M=function(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,_=4;for(0===s&&(l=138,_=3),n=0;n<=a;n++)if(r=s,s=e[2*(n+1)+1],!(++h<l&&r===s)){if(h<_)do{x(t,r,t.bl_tree)}while(0!=--h);else 0!==r?(r!==i&&(x(t,r,t.bl_tree),h--),x(t,16,t.bl_tree),z(t,h-3,2)):h<=10?(x(t,17,t.bl_tree),z(t,h-3,3)):(x(t,18,t.bl_tree),z(t,h-11,7));h=0,i=r,0===s?(l=138,_=3):r===s?(l=6,_=3):(l=7,_=4)}},L=!1,T=function(t,e,a,n){z(t,0+(n?1:0),3),function(t,e,a,n){B(t),n&&(k(t,a),k(t,~a)),t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a}(t,e,a,!0)},H=function(t,e,n,r){var i,s,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,n=4093624447;for(e=0;e<=31;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<a;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),D(t,t.l_desc),D(t,t.d_desc),h=function(t){var e;for(j(t,t.dyn_ltree,t.l_desc.max_code),j(t,t.dyn_dtree,t.d_desc.max_code),D(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*_[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),i=t.opt_len+3+7>>>3,(s=t.static_len+3+7>>>3)<=i&&(i=s)):i=s=n+5,n+4<=i&&-1!==e?T(t,e,n,r):4===t.strategy||s===i?(z(t,2+(r?1:0),3),C(t,o,d)):(z(t,4+(r?1:0),3),function(t,e,a,n){var r;for(z(t,e-257,5),z(t,a-1,5),z(t,n-4,4),r=0;r<n;r++)z(t,t.bl_tree[2*_[r]+1],3);M(t,t.dyn_ltree,e-1),M(t,t.dyn_dtree,a-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),C(t,t.dyn_ltree,t.dyn_dtree)),I(t),r&&B(t)},R={_tr_init:function(t){L||(!function(){var t,e,a,_,m,y=new Array(16);for(a=0,_=0;_<28;_++)for(c[_]=a,t=0;t<1<<s[_];t++)f[a++]=_;for(f[a-1]=_,m=0,_=0;_<16;_++)for(v[_]=m,t=0;t<1<<h[_];t++)u[m++]=_;for(m>>=7;_<r;_++)for(v[_]=m<<7,t=0;t<1<<h[_]-7;t++)u[256+m++]=_;for(e=0;e<=i;e++)y[e]=0;for(t=0;t<=143;)o[2*t+1]=8,t++,y[8]++;for(;t<=255;)o[2*t+1]=9,t++,y[9]++;for(;t<=279;)o[2*t+1]=7,t++,y[7]++;for(;t<=287;)o[2*t+1]=8,t++,y[8]++;for(U(o,287,y),t=0;t<r;t++)d[2*t+1]=5,d[2*t]=A(t,5);p=new b(o,s,257,n,i),g=new b(d,h,0,r,i),w=new b(new Array(0),l,0,19,7)}(),L=!0),t.l_desc=new m(t.dyn_ltree,p),t.d_desc=new m(t.dyn_dtree,g),t.bl_desc=new m(t.bl_tree,w),t.bi_buf=0,t.bi_valid=0,I(t)},_tr_stored_block:T,_tr_flush_block:H,_tr_tally:function(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*(f[n]+a+1)]++,t.dyn_dtree[2*y(e)]++),t.last_lit===t.lit_bufsize-1},_tr_align:function(t){z(t,2,3),x(t,256,o),function(t){16===t.bi_valid?(k(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},K=function(t,e,a,n){for(var r=65535&t,i=t>>>16&65535,s=0;0!==a;){a-=s=a>2e3?2e3:a;do{i=i+(r=r+e[n++]|0)|0}while(--s);r%=65521,i%=65521}return r|i<<16},N=new Uint32Array(function(){for(var t,e=[],a=0;a<256;a++){t=a;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}()),O=function(t,e,a,n){var r=N,i=n+a;t^=-1;for(var s=n;s<i;s++)t=t>>>8^r[255&(t^e[s])];return~t},q={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},F=0,G=2,J=3,P=4,Q=0,V=1,W=-1,X=0,Y=8,Z=R._tr_init,$=R._tr_stored_block,tt=R._tr_flush_block,et=R._tr_tally,at=R._tr_align,nt=F,rt=1,it=J,st=P,ht=5,lt=Q,_t=V,ot=-2,dt=-3,ut=-5,ft=W,ct=1,pt=2,gt=3,wt=4,vt=X,bt=2,mt=Y,yt=258,kt=262,zt=103,xt=113,At=666,Ut=function(t,e){return t.msg=q[e],e},It=function(t){return(t<<1)-(t>4?9:0)},Bt=function(t){for(var e=t.length;--e>=0;)t[e]=0},Et=function(t,e,a){return(e<<t.hash_shift^a)&t.hash_mask},St=function(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},Ct=function(t,e){tt(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,St(t.strm)},Dt=function(t,e){t.pending_buf[t.pending++]=e},jt=function(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},Mt=function(t,e){var a,n,r=t.max_chain_length,i=t.strstart,s=t.prev_length,h=t.nice_match,l=t.strstart>t.w_size-kt?t.strstart-(t.w_size-kt):0,_=t.window,o=t.w_mask,d=t.prev,u=t.strstart+yt,f=_[i+s-1],c=_[i+s];t.prev_length>=t.good_match&&(r>>=2),h>t.lookahead&&(h=t.lookahead);do{if(_[(a=e)+s]===c&&_[a+s-1]===f&&_[a]===_[i]&&_[++a]===_[i+1]){i+=2,a++;do{}while(_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&i<u);if(n=yt-(u-i),i=u-yt,n>s){if(t.match_start=e,s=n,n>=h)break;f=_[i+s-1],c=_[i+s]}}}while((e=d[e&o])>l&&0!=--r);return s<=t.lookahead?s:t.lookahead},Lt=function(t){var e,a,n,r,i,s,h,l,_,o,d=t.w_size;do{if(r=t.window_size-t.lookahead-t.strstart,t.strstart>=d+(d-kt)){t.window.set(t.window.subarray(d,d+d),0),t.match_start-=d,t.strstart-=d,t.block_start-=d,e=a=t.hash_size;do{n=t.head[--e],t.head[e]=n>=d?n-d:0}while(--a);e=a=d;do{n=t.prev[--e],t.prev[e]=n>=d?n-d:0}while(--a);r+=d}if(0===t.strm.avail_in)break;if(s=t.strm,h=t.window,l=t.strstart+t.lookahead,_=r,o=void 0,(o=s.avail_in)>_&&(o=_),a=0===o?0:(s.avail_in-=o,h.set(s.input.subarray(s.next_in,s.next_in+o),l),1===s.state.wrap?s.adler=K(s.adler,h,o,l):2===s.state.wrap&&(s.adler=O(s.adler,h,o,l)),s.next_in+=o,s.total_in+=o,o),t.lookahead+=a,t.lookahead+t.insert>=3)for(i=t.strstart-t.insert,t.ins_h=t.window[i],t.ins_h=Et(t,t.ins_h,t.window[i+1]);t.insert&&(t.ins_h=Et(t,t.ins_h,t.window[i+3-1]),t.prev[i&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=i,i++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<kt&&0!==t.strm.avail_in)},Tt=function(t,e){for(var a,n;;){if(t.lookahead<kt){if(Lt(t),t.lookahead<kt&&e===nt)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-kt&&(t.match_length=Mt(t,a)),t.match_length>=3)if(n=et(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=Et(t,t.ins_h,t.window[t.strstart+1]);else n=et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2},Ht=function(t,e){for(var a,n,r;;){if(t.lookahead<kt){if(Lt(t),t.lookahead<kt&&e===nt)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-kt&&(t.match_length=Mt(t,a),t.match_length<=5&&(t.strategy===ct||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-3,n=et(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=r&&(t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,n&&(Ct(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((n=et(t,0,t.window[t.strstart-1]))&&Ct(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(n=et(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2};function Rt(t,e,a,n,r){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=n,this.func=r}var Kt=[new Rt(0,0,0,0,(function(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(Lt(t),0===t.lookahead&&e===nt)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var n=t.block_start+a;if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,Ct(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-kt&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(Ct(t,!1),t.strm.avail_out),1)})),new Rt(4,4,8,4,Tt),new Rt(4,5,16,8,Tt),new Rt(4,6,32,32,Tt),new Rt(4,4,16,16,Ht),new Rt(8,16,32,32,Ht),new Rt(8,16,128,128,Ht),new Rt(8,32,128,256,Ht),new Rt(32,128,258,1024,Ht),new Rt(32,258,258,4096,Ht)];function Nt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=mt,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),Bt(this.dyn_ltree),Bt(this.dyn_dtree),Bt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),Bt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),Bt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}var Ot=function(t){if(!t||!t.state)return Ut(t,ot);t.total_in=t.total_out=0,t.data_type=bt;var e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:xt,t.adler=2===e.wrap?0:1,e.last_flush=nt,Z(e),lt},qt=function(t){var e,a=Ot(t);return a===lt&&((e=t.state).window_size=2*e.w_size,Bt(e.head),e.max_lazy_match=Kt[e.level].max_lazy,e.good_match=Kt[e.level].good_length,e.nice_match=Kt[e.level].nice_length,e.max_chain_length=Kt[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0),a},Ft=function(t,e,a,n,r,i){if(!t)return ot;var s=1;if(e===ft&&(e=6),n<0?(s=0,n=-n):n>15&&(s=2,n-=16),r<1||r>9||a!==mt||n<8||n>15||e<0||e>9||i<0||i>wt)return Ut(t,ot);8===n&&(n=9);var h=new Nt;return t.state=h,h.strm=t,h.wrap=s,h.gzhead=null,h.w_bits=n,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=r+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+3-1)/3),h.window=new Uint8Array(2*h.w_size),h.head=new Uint16Array(h.hash_size),h.prev=new Uint16Array(h.w_size),h.lit_bufsize=1<<r+6,h.pending_buf_size=4*h.lit_bufsize,h.pending_buf=new Uint8Array(h.pending_buf_size),h.d_buf=1*h.lit_bufsize,h.l_buf=3*h.lit_bufsize,h.level=e,h.strategy=i,h.method=a,qt(t)},Gt={deflateInit:function(t,e){return Ft(t,e,mt,15,8,vt)},deflateInit2:Ft,deflateReset:qt,deflateResetKeep:Ot,deflateSetHeader:function(t,e){return t&&t.state?2!==t.state.wrap?ot:(t.state.gzhead=e,lt):ot},deflate:function(t,e){var a,n;if(!t||!t.state||e>ht||e<0)return t?Ut(t,ot):ot;var r=t.state;if(!t.output||!t.input&&0!==t.avail_in||r.status===At&&e!==st)return Ut(t,0===t.avail_out?ut:ot);r.strm=t;var i=r.last_flush;if(r.last_flush=e,42===r.status)if(2===r.wrap)t.adler=0,Dt(r,31),Dt(r,139),Dt(r,8),r.gzhead?(Dt(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),Dt(r,255&r.gzhead.time),Dt(r,r.gzhead.time>>8&255),Dt(r,r.gzhead.time>>16&255),Dt(r,r.gzhead.time>>24&255),Dt(r,9===r.level?2:r.strategy>=pt||r.level<2?4:0),Dt(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(Dt(r,255&r.gzhead.extra.length),Dt(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(t.adler=O(t.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(Dt(r,0),Dt(r,0),Dt(r,0),Dt(r,0),Dt(r,0),Dt(r,9===r.level?2:r.strategy>=pt||r.level<2?4:0),Dt(r,3),r.status=xt);else{var s=mt+(r.w_bits-8<<4)<<8;s|=(r.strategy>=pt||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(s|=32),s+=31-s%31,r.status=xt,jt(r,s),0!==r.strstart&&(jt(r,t.adler>>>16),jt(r,65535&t.adler)),t.adler=1}if(69===r.status)if(r.gzhead.extra){for(a=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),St(t),a=r.pending,r.pending!==r.pending_buf_size));)Dt(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),St(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,Dt(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),St(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,Dt(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.status=zt)}else r.status=zt;if(r.status===zt&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&St(t),r.pending+2<=r.pending_buf_size&&(Dt(r,255&t.adler),Dt(r,t.adler>>8&255),t.adler=0,r.status=xt)):r.status=xt),0!==r.pending){if(St(t),0===t.avail_out)return r.last_flush=-1,lt}else if(0===t.avail_in&&It(e)<=It(i)&&e!==st)return Ut(t,ut);if(r.status===At&&0!==t.avail_in)return Ut(t,ut);if(0!==t.avail_in||0!==r.lookahead||e!==nt&&r.status!==At){var h=r.strategy===pt?function(t,e){for(var a;;){if(0===t.lookahead&&(Lt(t),0===t.lookahead)){if(e===nt)return 1;break}if(t.match_length=0,a=et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2}(r,e):r.strategy===gt?function(t,e){for(var a,n,r,i,s=t.window;;){if(t.lookahead<=yt){if(Lt(t),t.lookahead<=yt&&e===nt)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=s[r=t.strstart-1])===s[++r]&&n===s[++r]&&n===s[++r]){i=t.strstart+yt;do{}while(n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&r<i);t.match_length=yt-(i-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=et(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2}(r,e):Kt[r.level].func(r,e);if(3!==h&&4!==h||(r.status=At),1===h||3===h)return 0===t.avail_out&&(r.last_flush=-1),lt;if(2===h&&(e===rt?at(r):e!==ht&&($(r,0,0,!1),e===it&&(Bt(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),St(t),0===t.avail_out))return r.last_flush=-1,lt}return e!==st?lt:r.wrap<=0?_t:(2===r.wrap?(Dt(r,255&t.adler),Dt(r,t.adler>>8&255),Dt(r,t.adler>>16&255),Dt(r,t.adler>>24&255),Dt(r,255&t.total_in),Dt(r,t.total_in>>8&255),Dt(r,t.total_in>>16&255),Dt(r,t.total_in>>24&255)):(jt(r,t.adler>>>16),jt(r,65535&t.adler)),St(t),r.wrap>0&&(r.wrap=-r.wrap),0!==r.pending?lt:_t)},deflateEnd:function(t){if(!t||!t.state)return ot;var e=t.state.status;return 42!==e&&69!==e&&73!==e&&91!==e&&e!==zt&&e!==xt&&e!==At?Ut(t,ot):(t.state=null,e===xt?Ut(t,dt):lt)},deflateSetDictionary:function(t,e){var a=e.length;if(!t||!t.state)return ot;var n=t.state,r=n.wrap;if(2===r||1===r&&42!==n.status||n.lookahead)return ot;if(1===r&&(t.adler=K(t.adler,e,a,0)),n.wrap=0,a>=n.w_size){0===r&&(Bt(n.head),n.strstart=0,n.block_start=0,n.insert=0);var i=new Uint8Array(n.w_size);i.set(e.subarray(a-n.w_size,a),0),e=i,a=n.w_size}var s=t.avail_in,h=t.next_in,l=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,Lt(n);n.lookahead>=3;){var _=n.strstart,o=n.lookahead-2;do{n.ins_h=Et(n,n.ins_h,n.window[_+3-1]),n.prev[_&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=_,_++}while(--o);n.strstart=_,n.lookahead=2,Lt(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=2,n.match_available=0,t.next_in=h,t.input=l,t.avail_in=s,n.wrap=r,lt},deflateInfo:"pako deflate (from Nodeca project)"};for(var Jt=new Uint8Array(256),Pt=0;Pt<256;Pt++)Jt[Pt]=Pt>=252?6:Pt>=248?5:Pt>=240?4:Pt>=224?3:Pt>=192?2:1;Jt[254]=Jt[254]=1;var Qt=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},Vt=Object.prototype.toString,Wt=F,Xt=G,Yt=J,Zt=P,$t=Q,te=V,ee=W,ae=X,ne=Y;function re(){this.options={level:ee,method:ne,chunkSize:16384,windowBits:15,memLevel:8,strategy:ae};var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Qt,this.strm.avail_out=0;var e=Gt.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(e!==$t)throw new Error(q[e]);if(t.header&&Gt.deflateSetHeader(this.strm,t.header),t.dictionary){var a;if(a="[object ArrayBuffer]"===Vt.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(e=Gt.deflateSetDictionary(this.strm,a))!==$t)throw new Error(q[e]);this._dict_set=!0}}function ie(t,e,a){try{t.postMessage({type:"errored",error:e,streamId:a})}catch(n){t.postMessage({type:"errored",error:String(e),streamId:a})}}function se(t){var e=t.strm.adler;return new Uint8Array([3,0,e>>>24&255,e>>>16&255,e>>>8&255,255&e])}re.prototype.push=function(t,e){var a,n,r=this.strm,i=this.options.chunkSize;if(this.ended)return!1;for(n=e===~~e?e:!0===e?Zt:Wt,"[object ArrayBuffer]"===Vt.call(t)?r.input=new Uint8Array(t):r.input=t,r.next_in=0,r.avail_in=r.input.length;;)if(0===r.avail_out&&(r.output=new Uint8Array(i),r.next_out=0,r.avail_out=i),(n===Xt||n===Yt)&&r.avail_out<=6)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else{if((a=Gt.deflate(r,n))===te)return r.next_out>0&&this.onData(r.output.subarray(0,r.next_out)),a=Gt.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===$t;if(0!==r.avail_out){if(n>0&&r.next_out>0)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else if(0===r.avail_in)break}else this.onData(r.output)}return!0},re.prototype.onData=function(t){this.chunks.push(t)},re.prototype.onEnd=function(t){t===$t&&(this.result=function(t){for(var e=0,a=0,n=t.length;a<n;a++)e+=t[a].length;for(var r=new Uint8Array(e),i=0,s=0,h=t.length;i<h;i++){var l=t[i];r.set(l,s),s+=l.length}return r}(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},function(e){void 0===e&&(e=self);try{var a=new Map;e.addEventListener("message",(function(n){try{var r=function(e,a){switch(a.action){case"init":return{type:"initialized",version:"5.35.1"};case"write":var n=e.get(a.streamId);n||(n=new re,e.set(a.streamId,n));var r=n.chunks.length,i=function(t){if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);var e,a,n,r,i,s=t.length,h=0;for(r=0;r<s;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<s&&56320==(64512&(n=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(n-56320),r++),h+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(h),i=0,r=0;i<h;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<s&&56320==(64512&(n=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(n-56320),r++),a<128?e[i++]=a:a<2048?(e[i++]=192|a>>>6,e[i++]=128|63&a):a<65536?(e[i++]=224|a>>>12,e[i++]=128|a>>>6&63,e[i++]=128|63&a):(e[i++]=240|a>>>18,e[i++]=128|a>>>12&63,e[i++]=128|a>>>6&63,e[i++]=128|63&a);return e}(a.data);return n.push(i,G),{type:"wrote",id:a.id,streamId:a.streamId,result:t(n.chunks.slice(r)),trailer:se(n),additionalBytesCount:i.length};case"reset":e.delete(a.streamId)}}(a,n.data);r&&e.postMessage(r)}catch(t){ie(e,t,n.data&&"streamId"in n.data?n.data.streamId:void 0)}}))}catch(t){ie(e,t)}}()}();',
          ])
        )
    );
  }
  var gu = { status: 0 };
  function yu(t, e, n, r) {
    switch (
      (void 0 === r && (r = mu),
      0 === gu.status &&
        (function (t, e, n) {
          void 0 === n && (n = mu);
          try {
            var r = n(t),
              o = Z(t, r, "error", function (n) {
                bu(t, e, n);
              }).stop,
              a = Z(t, r, "message", function (n) {
                var r,
                  i = n.data;
                "errored" === i.type
                  ? bu(t, e, i.error, i.streamId)
                  : "initialized" === i.type &&
                    ((r = i.version),
                    1 === gu.status &&
                      (gu = {
                        status: 3,
                        worker: gu.worker,
                        stop: gu.stop,
                        version: r,
                      }));
              }).stop;
            r.postMessage({ action: "init" }),
              A(function () {
                return (function (t) {
                  1 === gu.status &&
                    (i.error(
                      "".concat(
                        t,
                        " failed to start: a timeout occurred while initializing the Worker"
                      )
                    ),
                    gu.initializationFailureCallbacks.forEach(function (t) {
                      return t();
                    }),
                    (gu = { status: 2 }));
                })(e);
              }, 3e4),
              (gu = {
                status: 1,
                worker: r,
                stop: function () {
                  o(), a();
                },
                initializationFailureCallbacks: [],
              });
          } catch (n) {
            bu(t, e, n);
          }
        })(t, e, r),
      gu.status)
    ) {
      case 1:
        return gu.initializationFailureCallbacks.push(n), gu.worker;
      case 3:
        return gu.worker;
    }
  }
  function _u() {
    return gu.status;
  }
  function bu(t, e, n, r) {
    if (1 === gu.status || 0 === gu.status) {
      if (
        (i.error(
          "".concat(
            e,
            " failed to start: an error occurred while creating the Worker:"
          ),
          n
        ),
        n instanceof Event ||
          (n instanceof Error &&
            (m((s = n.message), "Content Security Policy") ||
              m(s, "requires 'TrustedScriptURL'"))))
      ) {
        var a = void 0;
        (a = t.workerUrl
          ? "Please make sure the Worker URL ".concat(
              t.workerUrl,
              " is correct and CSP is correctly configured."
            )
          : "Please make sure CSP is correctly configured."),
          i.error(
            ""
              .concat(a, " See documentation at ")
              .concat(
                o,
                "/integrations/content_security_policy_logs/#use-csp-with-real-user-monitoring-and-session-replay"
              )
          );
      } else ve(n);
      1 === gu.status &&
        gu.initializationFailureCallbacks.forEach(function (t) {
          return t();
        }),
        (gu = { status: 2 });
    } else
      ve(n, { worker_version: 3 === gu.status && gu.version, stream_id: r });
    var s;
  }
  function wu() {
    return (
      "function" == typeof Array.from &&
      "function" == typeof CSSSupportsRule &&
      "function" == typeof URL.createObjectURL &&
      "forEach" in NodeList.prototype
    );
  }
  function Su(t, e, n, r) {
    var i = e.findTrackedSession(),
      o = (function (t, e) {
        if (!wu()) return "browser-not-supported";
        if (!t) return "rum-not-tracked";
        if (0 === t.sessionReplay) return "incorrect-session-plan";
        if (!e) return "replay-not-started";
      })(i, r);
    return Fa(t, { viewContext: n.findView(), errorType: o, session: i });
  }
  function ku(t, e, n, r, i, o) {
    var a,
      s = 0;
    function u(u) {
      var c = n.findTrackedSession();
      !(function (t, e) {
        return !t || (0 === t.sessionReplay && (!e || !e.force));
      })(c, u)
        ? (function (t) {
            return 2 === t || 3 === t;
          })(s) ||
          ((s = 2),
          bo(t, "interactive", function () {
            if (2 === s) {
              var u = o();
              u ? ((a = i(e, t, n, r, u).stop), (s = 3)) : (s = 0);
            }
          }),
          (function (t, e) {
            return e && e.force && 0 === t.sessionReplay;
          })(c, u) && n.setForcedReplay())
        : (s = 1);
    }
    function c() {
      0 !== s && 3 === s && (null == a || a()), (s = 0);
    }
    return (
      e.subscribe(9, function () {
        (2 !== s && 3 !== s) || (c(), (s = 1));
      }),
      e.subscribe(11, function (t) {
        t.reason === Jn.UNLOADING && c();
      }),
      e.subscribe(10, function () {
        1 === s && u();
      }),
      {
        start: u,
        stop: c,
        getSessionReplayLink: function () {
          return Su(t, n, r, 0 !== s);
        },
        isRecording: function () {
          return 3 === s;
        },
      }
    );
  }
  var Cu,
    xu,
    Tu,
    Eu,
    Au = (function (t, e) {
      if ((Ae() && !Ee("records")) || !wu())
        return {
          start: M,
          stop: M,
          getReplayStats: function () {},
          onRumStart: M,
          isRecording: function () {
            return !1;
          },
          getSessionReplayLink: function () {},
        };
      var n,
        r =
          ((n = 0),
          {
            strategy: {
              start: function () {
                n = 1;
              },
              stop: function () {
                n = 2;
              },
              isRecording: function () {
                return !1;
              },
              getSessionReplayLink: M,
            },
            shouldStartImmediately: function (t) {
              return (
                1 === n || (0 === n && !t.startSessionReplayRecordingManually)
              );
            },
          }),
        i = r.strategy,
        o = r.shouldStartImmediately;
      return {
        start: function (t) {
          return i.start(t);
        },
        stop: function () {
          return i.stop();
        },
        getSessionReplayLink: function () {
          return i.getSessionReplayLink();
        },
        onRumStart: function (n, r, a, s, u) {
          var c;
          (i = ku(r, n, a, s, t, function () {
            c ||
              (null != u ||
                (u = yu(
                  r,
                  "Datadog Session Replay",
                  function () {
                    i.stop();
                  },
                  e
                )),
              u && (c = hu(r, u, 1)));
            return c;
          })),
            o(r) && i.start();
        },
        isRecording: function () {
          return 3 === _u() && i.isRecording();
        },
        getReplayStats: function (t) {
          return 3 === _u()
            ? (function (t) {
                return null == qa ? void 0 : qa.get(t);
              })(t)
            : void 0;
        },
      };
    })(function (t, e, n, r, i, o) {
      var a,
        s = [],
        u =
          o ||
          ga(e.sessionReplayEndpointBuilder, pu, function (e) {
            t.notify(14, { error: e }),
              pe("Error reported to customer", { "error.message": e.message });
          });
      if (Ae())
        a = (function (t) {
          var e = Te();
          return {
            addRecord: function (n) {
              var r = t.findView();
              e.send("record", n, r.id);
            },
          };
        })(r).addRecord;
      else {
        var c = vu(t, e, n, r, u, i);
        (a = c.addRecord), s.push(c.stop);
      }
      var l = du({
        emit: a,
        configuration: e,
        lifeCycle: t,
        viewHistory: r,
      }).stop;
      return (
        s.push(l),
        {
          stop: function () {
            s.forEach(function (t) {
              return t();
            });
          },
        }
      );
    }),
    Ru = (function (t, e, n) {
      void 0 === n && (n = {});
      var r,
        o,
        a = B(0),
        s = X(a.getOrCreateTracker(2)),
        u = X(a.getOrCreateTracker(1)),
        c = {
          tryToInit: function (t) {
            r || (r = t);
          },
          update: function (t) {
            (r = t), o.notify();
          },
          isGranted: function () {
            return r === $.GRANTED;
          },
          observable: (o = new J()),
        },
        l = { vitalsByName: new Map(), vitalsByReference: new WeakMap() };
      function d() {
        return (function (t, e, n) {
          return {
            context: t.getContext(),
            user: e.getContext(),
            hasReplay: !!n.isRecording() || void 0,
          };
        })(s, u, e);
      }
      var h,
        m,
        g = Kn(n, d, c, l, function (r, i, o) {
          r.storeContextsAcrossPages &&
            (nt(r, s, "rum", 2), nt(r, u, "rum", 1)),
            a.setCompressionStatus(i ? 1 : 2);
          var f = t(
            r,
            e,
            a,
            d,
            o,
            i && n.createDeflateEncoder
              ? function (t) {
                  return n.createDeflateEncoder(r, i, t);
                }
              : rt,
            c,
            l
          );
          return (
            e.onRumStart(f.lifeCycle, r, f.session, f.viewHistory, i),
            (g = (function (t, e) {
              return S(
                {
                  init: function (t) {
                    ye("DD_RUM", t);
                  },
                  initConfiguration: t.initConfiguration,
                },
                e
              );
            })(g, f)),
            f
          );
        }),
        y = p(function (t) {
          var e = "object" == typeof t ? t : { name: t };
          e.context && a.getOrCreateTracker(3).updateCustomerData(e.context),
            g.startView(e),
            he({ feature: "start-view" });
        }),
        _ =
          ((h = {
            init: p(function (t) {
              g.init(t, _);
            }),
            setTrackingConsent: p(function (t) {
              c.update(t),
                he({ feature: "set-tracking-consent", tracking_consent: t });
            }),
            setViewName: p(function (t) {
              g.setViewName(t);
            }),
            setViewContext: p(function (t) {
              g.setViewContext(t);
            }),
            setViewContextProperty: p(function (t, e) {
              g.setViewContextProperty(t, e);
            }),
            setGlobalContext: p(function (t) {
              s.setContext(t), he({ feature: "set-global-context" });
            }),
            getGlobalContext: p(function () {
              return s.getContext();
            }),
            setGlobalContextProperty: p(function (t, e) {
              s.setContextProperty(t, e), he({ feature: "set-global-context" });
            }),
            removeGlobalContextProperty: p(function (t) {
              return s.removeContextProperty(t);
            }),
            clearGlobalContext: p(function () {
              return s.clearContext();
            }),
            getInternalContext: p(function (t) {
              return g.getInternalContext(t);
            }),
            getInitConfiguration: p(function () {
              return j(g.initConfiguration);
            }),
            addAction: function (t, e) {
              var n = gt();
              v(function () {
                g.addAction({
                  name: G(t),
                  context: G(e),
                  startClocks: Yt(),
                  type: "custom",
                  handlingStack: n,
                }),
                  he({ feature: "add-action" });
              });
            },
            addError: function (t, e) {
              var n = gt();
              v(function () {
                g.addError({
                  error: t,
                  handlingStack: n,
                  context: G(e),
                  startClocks: Yt(),
                }),
                  he({ feature: "add-error" });
              });
            },
            addTiming: p(function (t, e) {
              g.addTiming(G(t), e);
            }),
            setUser: p(function (t) {
              (function (t) {
                var e = "object" === F(t);
                return e || i.error("Unsupported user:", t), e;
              })(t) && u.setContext(ge(t)),
                he({ feature: "set-user" });
            }),
            getUser: p(function () {
              return u.getContext();
            }),
            setUserProperty: p(function (t, e) {
              var n,
                r = ge(((n = {}), (n[t] = e), n))[t];
              u.setContextProperty(t, r), he({ feature: "set-user" });
            }),
            removeUserProperty: p(function (t) {
              return u.removeContextProperty(t);
            }),
            clearUser: p(function () {
              return u.clearContext();
            }),
            startView: y,
            stopSession: p(function () {
              g.stopSession(), he({ feature: "stop-session" });
            }),
            addFeatureFlagEvaluation: p(function (t, e) {
              g.addFeatureFlagEvaluation(G(t), G(e)),
                he({ feature: "add-feature-flag-evaluation" });
            }),
            getSessionReplayLink: p(function () {
              return e.getSessionReplayLink();
            }),
            startSessionReplayRecording: p(function (t) {
              e.start(t),
                he({
                  feature: "start-session-replay-recording",
                  force: t && t.force,
                });
            }),
            stopSessionReplayRecording: p(function () {
              return e.stop();
            }),
            addDurationVital: p(function (t, e) {
              var n;
              he({ feature: "add-duration-vital" }),
                g.addDurationVital({
                  name: G(t),
                  type: "duration",
                  startClocks:
                    ((n = e.startTime), { relative: Qt(n), timeStamp: n }),
                  duration: e.duration,
                  context: G(e && e.context),
                  description: G(e && e.description),
                });
            }),
            startDurationVital: p(function (t, e) {
              return (
                he({ feature: "start-duration-vital" }),
                g.startDurationVital(G(t), {
                  context: G(e && e.context),
                  description: G(e && e.description),
                })
              );
            }),
            stopDurationVital: p(function (t, e) {
              he({ feature: "stop-duration-vital" }),
                g.stopDurationVital("string" == typeof t ? G(t) : t, {
                  context: G(e && e.context),
                  description: G(e && e.description),
                });
            }),
          }),
          (m = S(
            {
              version: "5.35.1",
              onReady: function (t) {
                t();
              },
            },
            h
          )),
          Object.defineProperty(m, "_setDebug", {
            get: function () {
              return f;
            },
            enumerable: !1,
          }),
          m);
      return _;
    })(
      function (t, e, n, r, i, o, a, s) {
        var u = [],
          c = new pr();
        c.subscribe(13, function (t) {
          return ee("rum", t);
        });
        var l = (function (t) {
          var e = fe("browser-rum-sdk", t);
          if (Ae()) {
            var n = Te();
            e.observable.subscribe(function (t) {
              return n.send("internal_telemetry", t);
            });
          }
          return e;
        })(t);
        l.setContextProvider(function () {
          var e, n;
          return {
            application: { id: t.applicationId },
            session: {
              id:
                null === (e = g.findTrackedSession()) || void 0 === e
                  ? void 0
                  : e.id,
            },
            view: {
              id: null === (n = N.findView()) || void 0 === n ? void 0 : n.id,
            },
            action: { id: L.findActionId() },
          };
        });
        var d = function (t) {
            c.notify(14, { error: t }),
              pe("Error reported to customer", { "error.message": t.message });
          },
          f = (function (t, e) {
            var n = hr({ expireDelay: xa });
            return (
              t.subscribe(1, function (t) {
                var r = t.startClocks;
                n.add({}, r.relative), e.resetCustomerData();
              }),
              t.subscribe(6, function (t) {
                var e = t.endClocks;
                n.closeActive(e.relative);
              }),
              {
                findFeatureFlagEvaluations: function (t) {
                  return n.find(t);
                },
                addFeatureFlagEvaluation: function (t, r) {
                  var i = n.find();
                  i && ((i[t] = r), e.updateCustomerData(i));
                },
                stop: function () {
                  return e.stop();
                },
              }
            );
          })(c, n.getOrCreateTracker(0)),
          v = (function (t) {
            return new J(function (e) {
              var n = Q(
                  t,
                  window,
                  ["visibilitychange", "freeze"],
                  function (t) {
                    "visibilitychange" === t.type &&
                    "hidden" === document.visibilityState
                      ? e.notify({ reason: Jn.HIDDEN })
                      : "freeze" === t.type && e.notify({ reason: Jn.FROZEN });
                  },
                  { capture: !0 }
                ).stop,
                r = Z(t, window, "beforeunload", function () {
                  e.notify({ reason: Jn.UNLOADING });
                }).stop;
              return function () {
                n(), r();
              };
            });
          })(t),
          h = v.subscribe(function (t) {
            c.notify(11, t);
          });
        u.push(function () {
          return h.unsubscribe();
        });
        var g = Ae()
          ? (function () {
              var t = {
                id: "00000000-aaaa-0000-aaaa-000000000000",
                sessionReplay: Ee("records") ? 1 : 0,
              };
              return {
                findTrackedSession: function () {
                  return t;
                },
                expire: M,
                expireObservable: new J(),
                setForcedReplay: M,
              };
            })()
          : aa(t, c, a);
        if (Ae())
          !(function (t) {
            var e = Te();
            t.subscribe(13, function (t) {
              e.send("rum", t);
            });
          })(c);
        else {
          var y = wa(t, c, l.observable, d, v, g.expireObservable, o);
          u.push(function () {
            return y.stop();
          }),
            (function (t, e, n, r, i) {
              e.enabled &&
                Pt(t.customerDataTelemetrySampleRate) &&
                (Oa(),
                Ma(),
                n.subscribe(13, function (t) {
                  (Aa = !0),
                    Ia(
                      Ea.globalContextBytes,
                      r.getOrCreateTracker(2).getBytesCount()
                    ),
                    Ia(
                      Ea.userContextBytes,
                      r.getOrCreateTracker(1).getBytesCount()
                    ),
                    Ia(
                      Ea.featureFlagBytes,
                      m(["view", "error"], t.type)
                        ? r.getOrCreateTracker(0).getBytesCount()
                        : 0
                    );
                }),
                i.subscribe(function (t) {
                  var e = t.bytesCount,
                    n = t.messagesCount;
                  Aa &&
                    ((Ta.batchCount += 1),
                    Ia(Ta.batchBytesCount, e),
                    Ia(Ta.batchMessagesCount, n),
                    Na(Ta.globalContextBytes, Ea.globalContextBytes),
                    Na(Ta.userContextBytes, Ea.userContextBytes),
                    Na(Ta.featureFlagBytes, Ea.featureFlagBytes),
                    Ma());
                }),
                I(Ra, 1e4));
            })(t, l, c, n, y.flushObservable);
        }
        var _,
          b,
          w,
          k =
            ((_ = Xn()),
            new J(function (t) {
              if (_) {
                var e = new _(
                  p(function () {
                    return t.notify();
                  })
                );
                return (
                  e.observe(document, {
                    attributes: !0,
                    characterData: !0,
                    childList: !0,
                    subtree: !0,
                  }),
                  function () {
                    return e.disconnect();
                  }
                );
              }
            })),
          C = ka(t, location),
          x = Da(t),
          T =
            ((b = new J()),
            (w = Re(window, "open", function () {
              return b.notify();
            }).stop),
            { observable: b, stop: w }),
          E = T.observable,
          A = T.stop;
        u.push(A);
        var R = (function (t, e, n, r, i, o, a, s, u, c) {
            var l = (function (t) {
                var e = hr({ expireDelay: gr });
                return (
                  t.subscribe(1, function (t) {
                    e.add(
                      (function (t) {
                        return {
                          service: t.service,
                          version: t.version,
                          context: t.context,
                          id: t.id,
                          name: t.name,
                          startClocks: t.startClocks,
                        };
                      })(t),
                      t.startClocks.relative
                    );
                  }),
                  t.subscribe(6, function (t) {
                    var n = t.endClocks;
                    e.closeActive(n.relative);
                  }),
                  t.subscribe(3, function (t) {
                    var n = e.find(t.startClocks.relative);
                    n && t.name && (n.name = t.name),
                      n && t.context && (n.context = t.context);
                  }),
                  t.subscribe(10, function () {
                    e.reset();
                  }),
                  {
                    findView: function (t) {
                      return e.find(t);
                    },
                    stop: function () {
                      e.stop();
                    },
                  }
                );
              })(t),
              d = (function (t, e, n) {
                var r,
                  i = hr({ expireDelay: Sa });
                t.subscribe(1, function (t) {
                  var e = t.startClocks,
                    o = n.href;
                  i.add(
                    a({ url: o, referrer: r || document.referrer }),
                    e.relative
                  ),
                    (r = o);
                }),
                  t.subscribe(6, function (t) {
                    var e = t.endClocks;
                    i.closeActive(e.relative);
                  });
                var o = e.subscribe(function (t) {
                  var e = t.newLocation,
                    n = i.find();
                  if (n) {
                    var r = Jt();
                    i.closeActive(r),
                      i.add(a({ url: e.href, referrer: n.referrer }), r);
                  }
                });
                function a(t) {
                  return { url: t.url, referrer: t.referrer };
                }
                return {
                  findUrl: function (t) {
                    return i.find(t);
                  },
                  stop: function () {
                    o.unsubscribe(), i.stop();
                  },
                };
              })(t, o, n),
              f = (function (t, e, n, r, i) {
                var o;
                t.subscribe(0, function (e) {
                  return t.notify(12, ro(e, i));
                });
                var a = { findActionId: M },
                  s = M;
                return (
                  r.trackUserInteractions &&
                    ((a = (o = eo(t, e, n, r)).actionContexts), (s = o.stop)),
                  {
                    addAction: function (e, n) {
                      t.notify(12, S({ savedCommonContext: n }, ro(e, i)));
                    },
                    actionContexts: a,
                    stop: s,
                  }
                );
              })(t, a, s, e, i),
              p = (function (t) {
                var e, n;
                At(bt.DELAY_VIEWPORT_COLLECTION)
                  ? (n = requestAnimationFrame(function () {
                      e = Ko();
                    }))
                  : (e = Ko());
                var r = Wo(t).subscribe(function (t) {
                  e = t;
                }).unsubscribe;
                return {
                  get: function () {
                    return e ? { viewport: e } : void 0;
                  },
                  stop: function () {
                    r(), n && cancelAnimationFrame(n);
                  },
                };
              })(e),
              v = (function (t, e) {
                var n;
                void 0 === e && (e = Ua(t, Va));
                var r =
                    Fe(Va) ||
                    (null === (n = window.Cypress) || void 0 === n
                      ? void 0
                      : n.env("traceId")),
                  i = e.subscribe(function (t) {
                    r = t;
                  });
                return {
                  get: function () {
                    if ("string" == typeof r) return { test_execution_id: r };
                  },
                  stop: function () {
                    return i.unsubscribe();
                  },
                };
              })(e);
            return (
              fr(e, t, r, l, d, f.actionContexts, p, v, u, c),
              {
                viewHistory: l,
                pageStateHistory: i,
                urlContexts: d,
                addAction: f.addAction,
                actionContexts: f.actionContexts,
                stop: function () {
                  f.stop(), v.stop(), p.stop(), d.stop(), l.stop(), i.stop();
                },
              }
            );
          })(c, t, location, g, x, C, k, E, r, d),
          N = R.viewHistory,
          O = R.urlContexts,
          L = R.actionContexts,
          D = R.addAction,
          P = R.stop;
        u.push(P), le.drain();
        var U = ea(c, t, location, k, E, C, f, x, e, i),
          z = U.addTiming,
          B = U.startView,
          V = U.setViewName,
          F = U.setViewContext,
          q = U.setViewContextProperty,
          j = U.stop;
        u.push(j);
        var H = To(c, t, x).stop;
        if ((u.push(H), At(bt.LONG_ANIMATION_FRAME))) {
          if (t.trackLongTasks) {
            var G = (function (t, e) {
              var n = Wr(e, {
                type: zr.LONG_ANIMATION_FRAME,
                buffered: !0,
              }).subscribe(function (e) {
                for (var n = 0, r = e; n < r.length; n++) {
                  var i = r[n],
                    o = jt(i.startTime),
                    a = {
                      date: o.timeStamp,
                      long_task: {
                        id: _e(),
                        entry_type: "long-animation-frame",
                        duration: Gt(i.duration),
                        blocking_duration: Gt(i.blockingDuration),
                        first_ui_event_timestamp: Gt(i.firstUIEventTimestamp),
                        render_start: Gt(i.renderStart),
                        style_and_layout_start: Gt(i.styleAndLayoutStart),
                        start_time: Gt(i.startTime),
                        scripts: i.scripts.map(function (t) {
                          return {
                            duration: Gt(t.duration),
                            pause_duration: Gt(t.pauseDuration),
                            forced_style_and_layout_duration: Gt(
                              t.forcedStyleAndLayoutDuration
                            ),
                            start_time: Gt(t.startTime),
                            execution_start: Gt(t.executionStart),
                            source_url: t.sourceURL,
                            source_function_name: t.sourceFunctionName,
                            source_char_position: t.sourceCharPosition,
                            invoker: t.invoker,
                            invoker_type: t.invokerType,
                            window_attribution: t.windowAttribution,
                          };
                        }),
                      },
                      type: "long_task",
                      _dd: { discarded: !1 },
                    };
                  t.notify(12, {
                    rawRumEvent: a,
                    startTime: o.relative,
                    domainContext: { performanceEntry: i },
                  });
                }
              });
              return {
                stop: function () {
                  return n.unsubscribe();
                },
              };
            })(c, t).stop;
            u.push(G);
          }
        } else
          !(function (t, e) {
            var n = Wr(e, { type: zr.LONG_TASK, buffered: !0 }).subscribe(
              function (n) {
                for (var r = 0, i = n; r < i.length; r++) {
                  var o = i[r];
                  if (o.entryType !== zr.LONG_TASK) break;
                  if (!e.trackLongTasks) break;
                  var a = jt(o.startTime),
                    s = {
                      date: a.timeStamp,
                      long_task: {
                        id: _e(),
                        entry_type: "long-task",
                        duration: Gt(o.duration),
                      },
                      type: "long_task",
                      _dd: { discarded: !1 },
                    };
                  t.notify(12, {
                    rawRumEvent: s,
                    startTime: a.relative,
                    domainContext: { performanceEntry: o },
                  });
                }
              }
            );
          })(c, t);
        var W = vo(c, t, x, f).addError;
        Fr(c, t, g);
        var K = ke(c, x, s),
          Y = (function (t, e, n, r, i) {
            return {
              get: function (o) {
                var a = n.findView(o),
                  s = i.findUrl(o),
                  u = e.findTrackedSession(o);
                if (u && a && s) {
                  var c = r.findActionId(o);
                  return {
                    application_id: t,
                    session_id: u.id,
                    user_action: c ? { id: c } : void 0,
                    view: {
                      id: a.id,
                      name: a.name,
                      referrer: s.referrer,
                      url: s.url,
                    },
                  };
                }
              },
            };
          })(t.applicationId, g, N, L, O);
        return {
          addAction: D,
          addError: W,
          addTiming: z,
          addFeatureFlagEvaluation: f.addFeatureFlagEvaluation,
          startView: B,
          setViewContext: F,
          setViewContextProperty: q,
          setViewName: V,
          lifeCycle: c,
          viewHistory: N,
          session: g,
          stopSession: function () {
            return g.expire();
          },
          getInternalContext: Y.get,
          startDurationVital: K.startDurationVital,
          stopDurationVital: K.stopDurationVital,
          addDurationVital: K.addDurationVital,
          stop: function () {
            u.forEach(function (t) {
              return t();
            });
          },
        };
      },
      Au,
      { startDeflateWorker: yu, createDeflateEncoder: hu }
    );
  (Cu = k()),
    (Tu = Ru),
    (Eu = Cu[(xu = "DD_RUM")]) &&
      !Eu.q &&
      Eu.version &&
      i.warn(
        "SDK is loaded more than once. This is unsupported and might have unexpected behavior."
      ),
    (Cu[xu] = Tu),
    Eu &&
      Eu.q &&
      Eu.q.forEach(function (t) {
        return u(t, "onReady callback threw an error:")();
      });
})();
