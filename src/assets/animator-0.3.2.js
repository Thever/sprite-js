!function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.Animator = n() : t.Animator = n()
}(this, function() {
    return function(t) {
        function n(r) {
            if (e[r])
                return e[r].exports;
            var o = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
        }
        var e = {};
        return n.m = t,
        n.c = e,
        n.i = function(t) {
            return t
        }
        ,
        n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t["default"]
            }
            : function() {
                return t
            }
            ;
            return n.d(e, "a", e),
            e
        }
        ,
        n.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }
        ,
        n.p = "/static/js/",
        n(n.s = 44)
    }([function(t, n, e) {
        var r = e(33)("wks")
          , o = e(37)
          , i = e(1).Symbol
          , u = "function" == typeof i;
        (t.exports = function(t) {
            return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
        }
        ).store = r
    }
    , function(t, n) {
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    }
    , function(t, n) {
        var e = t.exports = {
            version: "2.5.4"
        };
        "number" == typeof __e && (__e = e)
    }
    , function(t, n, e) {
        var r = e(8);
        t.exports = function(t) {
            if (!r(t))
                throw TypeError(t + " is not an object!");
            return t
        }
    }
    , function(t, n, e) {
        t.exports = !e(25)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }
    , function(t, n, e) {
        var r = e(1)
          , o = e(2)
          , i = e(12)
          , u = e(6)
          , c = e(13)
          , a = function(t, n, e) {
            var f, s, l, p = t & a.F, v = t & a.G, h = t & a.S, d = t & a.P, y = t & a.B, m = t & a.W, x = v ? o : o[n] || (o[n] = {}), _ = x.prototype, w = v ? r : h ? r[n] : (r[n] || {}).prototype;
            v && (e = n);
            for (f in e)
                (s = !p && w && void 0 !== w[f]) && c(x, f) || (l = s ? w[f] : e[f],
                x[f] = v && "function" != typeof w[f] ? e[f] : y && s ? i(l, r) : m && w[f] == l ? function(t) {
                    var n = function(n, e, r) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(n);
                            case 2:
                                return new t(n,e)
                            }
                            return new t(n,e,r)
                        }
                        return t.apply(this, arguments)
                    };
                    return n.prototype = t.prototype,
                    n
                }(l) : d && "function" == typeof l ? i(Function.call, l) : l,
                d && ((x.virtual || (x.virtual = {}))[f] = l,
                t & a.R && _ && !_[f] && u(_, f, l)))
        };
        a.F = 1,
        a.G = 2,
        a.S = 4,
        a.P = 8,
        a.B = 16,
        a.W = 32,
        a.U = 64,
        a.R = 128,
        t.exports = a
    }
    , function(t, n, e) {
        var r = e(9)
          , o = e(32);
        t.exports = e(4) ? function(t, n, e) {
            return r.f(t, n, o(1, e))
        }
        : function(t, n, e) {
            return t[n] = e,
            t
        }
    }
    , function(t, n) {
        t.exports = {}
    }
    , function(t, n) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }
    , function(t, n, e) {
        var r = e(3)
          , o = e(59)
          , i = e(80)
          , u = Object.defineProperty;
        n.f = e(4) ? Object.defineProperty : function(t, n, e) {
            if (r(t),
            n = i(n, !0),
            r(e),
            o)
                try {
                    return u(t, n, e)
                } catch (t) {}
            if ("get"in e || "set"in e)
                throw TypeError("Accessors not supported!");
            return "value"in e && (t[n] = e.value),
            t
        }
    }
    , function(t, n) {
        t.exports = function(t) {
            if ("function" != typeof t)
                throw TypeError(t + " is not a function!");
            return t
        }
    }
    , function(t, n) {
        var e = {}.toString;
        t.exports = function(t) {
            return e.call(t).slice(8, -1)
        }
    }
    , function(t, n, e) {
        var r = e(10);
        t.exports = function(t, n, e) {
            if (r(t),
            void 0 === n)
                return t;
            switch (e) {
            case 1:
                return function(e) {
                    return t.call(n, e)
                }
                ;
            case 2:
                return function(e, r) {
                    return t.call(n, e, r)
                }
                ;
            case 3:
                return function(e, r, o) {
                    return t.call(n, e, r, o)
                }
            }
            return function() {
                return t.apply(n, arguments)
            }
        }
    }
    , function(t, n) {
        var e = {}.hasOwnProperty;
        t.exports = function(t, n) {
            return e.call(t, n)
        }
    }
    , function(t, n, e) {
        var r = e(61)
          , o = e(16);
        t.exports = function(t) {
            return r(o(t))
        }
    }
    , function(t, n, e) {
        var r = e(11)
          , o = e(0)("toStringTag")
          , i = "Arguments" == r(function() {
            return arguments
        }())
          , u = function(t, n) {
            try {
                return t[n]
            } catch (t) {}
        };
        t.exports = function(t) {
            var n, e, c;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = u(n = Object(t), o)) ? e : i ? r(n) : "Object" == (c = r(n)) && "function" == typeof n.callee ? "Arguments" : c
        }
    }
    , function(t, n) {
        t.exports = function(t) {
            if (void 0 == t)
                throw TypeError("Can't call method on  " + t);
            return t
        }
    }
    , function(t, n, e) {
        var r = e(8)
          , o = e(1).document
          , i = r(o) && r(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {}
        }
    }
    , function(t, n, e) {
        "use strict";
        function r(t) {
            var n, e;
            this.promise = new t(function(t, r) {
                if (void 0 !== n || void 0 !== e)
                    throw TypeError("Bad Promise constructor");
                n = t,
                e = r
            }
            ),
            this.resolve = o(n),
            this.reject = o(e)
        }
        var o = e(10);
        t.exports.f = function(t) {
            return new r(t)
        }
    }
    , function(t, n, e) {
        var r = e(9).f
          , o = e(13)
          , i = e(0)("toStringTag");
        t.exports = function(t, n, e) {
            t && !o(t = e ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: n
            })
        }
    }
    , function(t, n, e) {
        var r = e(33)("keys")
          , o = e(37);
        t.exports = function(t) {
            return r[t] || (r[t] = o(t))
        }
    }
    , function(t, n) {
        var e = Math.ceil
          , r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
        }
    }
    , function(t, n, e) {
        "use strict";
        var r = e(77)(!0);
        e(27)(String, "String", function(t) {
            this._t = String(t),
            this._i = 0
        }, function() {
            var t, n = this._t, e = this._i;
            return e >= n.length ? {
                value: void 0,
                done: !0
            } : (t = r(n, e),
            this._i += t.length,
            {
                value: t,
                done: !1
            })
        })
    }
    , function(t, n, e) {
        e(83);
        for (var r = e(1), o = e(6), i = e(7), u = e(0)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), a = 0; a < c.length; a++) {
            var f = c[a]
              , s = r[f]
              , l = s && s.prototype;
            l && !l[u] && o(l, u, f),
            i[f] = i.Array
        }
    }
    , function(t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }
    , function(t, n) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }
    , function(t, n, e) {
        var r = e(1).document;
        t.exports = r && r.documentElement
    }
    , function(t, n, e) {
        "use strict";
        var r = e(28)
          , o = e(5)
          , i = e(75)
          , u = e(6)
          , c = e(7)
          , a = e(64)
          , f = e(19)
          , s = e(70)
          , l = e(0)("iterator")
          , p = !([].keys && "next"in [].keys())
          , v = function() {
            return this
        };
        t.exports = function(t, n, e, h, d, y, m) {
            a(e, n, h);
            var x, _, w, g = function(t) {
                if (!p && t in O)
                    return O[t];
                switch (t) {
                case "keys":
                case "values":
                    return function() {
                        return new e(this,t)
                    }
                }
                return function() {
                    return new e(this,t)
                }
            }, b = n + " Iterator", T = "values" == d, j = !1, O = t.prototype, P = O[l] || O["@@iterator"] || d && O[d], S = P || g(d), M = d ? T ? g("entries") : S : void 0, L = "Array" == n ? O.entries || P : P;
            if (L && (w = s(L.call(new t))) !== Object.prototype && w.next && (f(w, b, !0),
            r || "function" == typeof w[l] || u(w, l, v)),
            T && P && "values" !== P.name && (j = !0,
            S = function() {
                return P.call(this)
            }
            ),
            r && !m || !p && !j && O[l] || u(O, l, S),
            c[n] = S,
            c[b] = v,
            d)
                if (x = {
                    values: T ? S : g("values"),
                    keys: y ? S : g("keys"),
                    entries: M
                },
                m)
                    for (_ in x)
                        _ in O || i(O, _, x[_]);
                else
                    o(o.P + o.F * (p || j), n, x);
            return x
        }
    }
    , function(t, n) {
        t.exports = !0
    }
    , function(t, n, e) {
        var r = e(71)
          , o = e(24);
        t.exports = Object.keys || function(t) {
            return r(t, o)
        }
    }
    , function(t, n) {
        t.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
    }
    , function(t, n, e) {
        var r = e(3)
          , o = e(8)
          , i = e(18);
        t.exports = function(t, n) {
            if (r(t),
            o(n) && n.constructor === t)
                return n;
            var e = i.f(t);
            return (0,
            e.resolve)(n),
            e.promise
        }
    }
    , function(t, n) {
        t.exports = function(t, n) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: n
            }
        }
    }
    , function(t, n, e) {
        var r = e(1)
          , o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        t.exports = function(t) {
            return o[t] || (o[t] = {})
        }
    }
    , function(t, n, e) {
        var r = e(3)
          , o = e(10)
          , i = e(0)("species");
        t.exports = function(t, n) {
            var e, u = r(t).constructor;
            return void 0 === u || void 0 == (e = r(u)[i]) ? n : o(e)
        }
    }
    , function(t, n, e) {
        var r, o, i, u = e(12), c = e(60), a = e(26), f = e(17), s = e(1), l = s.process, p = s.setImmediate, v = s.clearImmediate, h = s.MessageChannel, d = s.Dispatch, y = 0, m = {}, x = function() {
            var t = +this;
            if (m.hasOwnProperty(t)) {
                var n = m[t];
                delete m[t],
                n()
            }
        }, _ = function(t) {
            x.call(t.data)
        };
        p && v || (p = function(t) {
            for (var n = [], e = 1; arguments.length > e; )
                n.push(arguments[e++]);
            return m[++y] = function() {
                c("function" == typeof t ? t : Function(t), n)
            }
            ,
            r(y),
            y
        }
        ,
        v = function(t) {
            delete m[t]
        }
        ,
        "process" == e(11)(l) ? r = function(t) {
            l.nextTick(u(x, t, 1))
        }
        : d && d.now ? r = function(t) {
            d.now(u(x, t, 1))
        }
        : h ? (o = new h,
        i = o.port2,
        o.port1.onmessage = _,
        r = u(i.postMessage, i, 1)) : s.addEventListener && "function" == typeof postMessage && !s.importScripts ? (r = function(t) {
            s.postMessage(t + "", "*")
        }
        ,
        s.addEventListener("message", _, !1)) : r = "onreadystatechange"in f("script") ? function(t) {
            a.appendChild(f("script")).onreadystatechange = function() {
                a.removeChild(this),
                x.call(t)
            }
        }
        : function(t) {
            setTimeout(u(x, t, 1), 0)
        }
        ),
        t.exports = {
            set: p,
            clear: v
        }
    }
    , function(t, n, e) {
        var r = e(21)
          , o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }
    , function(t, n) {
        var e = 0
          , r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
        }
    }
    , function(t, n, e) {
        var r = e(15)
          , o = e(0)("iterator")
          , i = e(7);
        t.exports = e(2).getIteratorMethod = function(t) {
            if (void 0 != t)
                return t[o] || t["@@iterator"] || i[r(t)]
        }
    }
    , function(t, n, e) {
        t.exports = {
            "default": e(54),
            __esModule: !0
        }
    }
    , function(t, n, e) {
        "use strict";
        n.__esModule = !0,
        n["default"] = function(t, n) {
            if (!(t instanceof n))
                throw new TypeError("Cannot call a class as a function")
        }
    }
    , function(t, n, e) {
        "use strict";
        n.__esModule = !0;
        var r = e(47)
          , o = function(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }(r);
        n["default"] = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var r = n[e];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    (0,
                    o["default"])(t, r.key, r)
                }
            }
            return function(n, e, r) {
                return e && t(n.prototype, e),
                r && t(n, r),
                n
            }
        }()
    }
    , function(t, n, e) {
        "use strict";
        (function(n) {
            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function o() {
                if ("undefined" != typeof performance && performance.now)
                    return performance.now();
                if (void 0 !== n && n.hrtime) {
                    var t = n.hrtime()
                      , e = (0,
                    a["default"])(t, 2);
                    return 1e3 * e[0] + 1e-6 * e[1]
                }
                return Date.now ? Date.now() : (new Date).getTime()
            }
            var i = e(48)
              , u = r(i)
              , c = e(49)
              , a = r(c)
              , f = void 0;
            f = "undefined" == typeof requestAnimationFrame ? function(t) {
                return setTimeout(function() {
                    t(o())
                }, 16)
            }
            : requestAnimationFrame;
            var s = []
              , l = void 0
              , p = 0
              , v = {
                requestAnimationFrame: function(t) {
                    return s[++p] = t,
                    null == l && (l = f(function(t) {
                        l = null,
                        (0,
                        u["default"])(s).forEach(function(n) {
                            var e = (0,
                            a["default"])(n, 2)
                              , r = e[0];
                            (0,
                            e[1])(t),
                            delete s[r]
                        })
                    })),
                    p
                },
                cancelAnimationFrame: function(t) {
                    delete s[t]
                }
            };
            t.exports = v
        }
        ).call(n, e(90))
    }
    , function(t, n) {
        var e;
        e = function() {
            return this
        }();
        try {
            e = e || Function("return this")() || (0,
            eval)("this")
        } catch (t) {
            "object" == typeof window && (e = window)
        }
        t.exports = e
    }
    , function(t, n, e) {
        "use strict";
        (function(n) {
            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function o() {
                return "undefined" != typeof performance && performance.now ? performance.now() : Date.now ? Date.now() : (new Date).getTime()
            }
            var i = e(39)
              , u = r(i)
              , c = e(40)
              , a = r(c)
              , f = e(41)
              , s = r(f);
            void 0 === n.requestAnimationFrame && (n.requestAnimationFrame = function(t) {
                return setTimeout(function() {
                    t.call(this, o())
                }, 1e3 / 60)
            }
            ,
            n.cancelAnimationFrame = function(t) {
                return clearTimeout(t)
            }
            );
            var l = e(42)
              , p = l.requestAnimationFrame
              , v = l.cancelAnimationFrame
              , h = function() {
                function t(n, e, r) {
                    (0,
                    a["default"])(this, t),
                    this.duration = n,
                    this.update = e,
                    this.easing = r
                }
                return (0,
                s["default"])(t, [{
                    key: "animate",
                    value: function(t) {
                        t = t || 0;
                        var n = this.duration
                          , e = this.update
                          , r = this.easing
                          , o = this;
                        return new u["default"](function(i, u) {
                            function c(u) {
                                t = t || u;
                                var f = Math.min(1, (u - t) / n);
                                e.call(o, r ? r(f) : f, f),
                                f < 1 ? a = p(c) : i(t + n)
                            }
                            var a = 0;
                            o.cancel = function() {
                                v(a),
                                e.call(o, 0, 0),
                                i(t + n)
                            }
                            ,
                            a = p(c)
                        }
                        )
                    }
                }, {
                    key: "ease",
                    value: function(n) {
                        return new t(this.duration,this.update,n)
                    }
                }]),
                t
            }();
            t.exports = h
        }
        ).call(n, e(43))
    }
    , function(t, n, e) {
        t.exports = {
            "default": e(50),
            __esModule: !0
        }
    }
    , function(t, n, e) {
        t.exports = {
            "default": e(51),
            __esModule: !0
        }
    }
    , function(t, n, e) {
        t.exports = {
            "default": e(52),
            __esModule: !0
        }
    }
    , function(t, n, e) {
        t.exports = {
            "default": e(53),
            __esModule: !0
        }
    }
    , function(t, n, e) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        n.__esModule = !0;
        var o = e(46)
          , i = r(o)
          , u = e(45)
          , c = r(u);
        n["default"] = function() {
            function t(t, n) {
                var e = []
                  , r = !0
                  , o = !1
                  , i = void 0;
                try {
                    for (var u, a = (0,
                    c["default"])(t); !(r = (u = a.next()).done) && (e.push(u.value),
                    !n || e.length !== n); r = !0)
                        ;
                } catch (t) {
                    o = !0,
                    i = t
                } finally {
                    try {
                        !r && a["return"] && a["return"]()
                    } finally {
                        if (o)
                            throw i
                    }
                }
                return e
            }
            return function(n, e) {
                if (Array.isArray(n))
                    return n;
                if ((0,
                i["default"])(Object(n)))
                    return t(n, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
    }
    , function(t, n, e) {
        e(23),
        e(22),
        t.exports = e(81)
    }
    , function(t, n, e) {
        e(23),
        e(22),
        t.exports = e(82)
    }
    , function(t, n, e) {
        e(84);
        var r = e(2).Object;
        t.exports = function(t, n, e) {
            return r.defineProperty(t, n, e)
        }
    }
    , function(t, n, e) {
        e(87),
        t.exports = e(2).Object.entries
    }
    , function(t, n, e) {
        e(85),
        e(22),
        e(23),
        e(86),
        e(88),
        e(89),
        t.exports = e(2).Promise
    }
    , function(t, n) {
        t.exports = function() {}
    }
    , function(t, n) {
        t.exports = function(t, n, e, r) {
            if (!(t instanceof n) || void 0 !== r && r in t)
                throw TypeError(e + ": incorrect invocation!");
            return t
        }
    }
    , function(t, n, e) {
        var r = e(14)
          , o = e(36)
          , i = e(78);
        t.exports = function(t) {
            return function(n, e, u) {
                var c, a = r(n), f = o(a.length), s = i(u, f);
                if (t && e != e) {
                    for (; f > s; )
                        if ((c = a[s++]) != c)
                            return !0
                } else
                    for (; f > s; s++)
                        if ((t || s in a) && a[s] === e)
                            return t || s || 0;
                return !t && -1
            }
        }
    }
    , function(t, n, e) {
        var r = e(12)
          , o = e(63)
          , i = e(62)
          , u = e(3)
          , c = e(36)
          , a = e(38)
          , f = {}
          , s = {}
          , n = t.exports = function(t, n, e, l, p) {
            var v, h, d, y, m = p ? function() {
                return t
            }
            : a(t), x = r(e, l, n ? 2 : 1), _ = 0;
            if ("function" != typeof m)
                throw TypeError(t + " is not iterable!");
            if (i(m)) {
                for (v = c(t.length); v > _; _++)
                    if ((y = n ? x(u(h = t[_])[0], h[1]) : x(t[_])) === f || y === s)
                        return y
            } else
                for (d = m.call(t); !(h = d.next()).done; )
                    if ((y = o(d, x, h.value, n)) === f || y === s)
                        return y
        }
        ;
        n.BREAK = f,
        n.RETURN = s
    }
    , function(t, n, e) {
        t.exports = !e(4) && !e(25)(function() {
            return 7 != Object.defineProperty(e(17)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }
    , function(t, n) {
        t.exports = function(t, n, e) {
            var r = void 0 === e;
            switch (n.length) {
            case 0:
                return r ? t() : t.call(e);
            case 1:
                return r ? t(n[0]) : t.call(e, n[0]);
            case 2:
                return r ? t(n[0], n[1]) : t.call(e, n[0], n[1]);
            case 3:
                return r ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);
            case 4:
                return r ? t(n[0], n[1], n[2], n[3]) : t.call(e, n[0], n[1], n[2], n[3])
            }
            return t.apply(e, n)
        }
    }
    , function(t, n, e) {
        var r = e(11);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }
    , function(t, n, e) {
        var r = e(7)
          , o = e(0)("iterator")
          , i = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || i[o] === t)
        }
    }
    , function(t, n, e) {
        var r = e(3);
        t.exports = function(t, n, e, o) {
            try {
                return o ? n(r(e)[0], e[1]) : n(e)
            } catch (n) {
                var i = t["return"];
                throw void 0 !== i && r(i.call(t)),
                n
            }
        }
    }
    , function(t, n, e) {
        "use strict";
        var r = e(68)
          , o = e(32)
          , i = e(19)
          , u = {};
        e(6)(u, e(0)("iterator"), function() {
            return this
        }),
        t.exports = function(t, n, e) {
            t.prototype = r(u, {
                next: o(1, e)
            }),
            i(t, n + " Iterator")
        }
    }
    , function(t, n, e) {
        var r = e(0)("iterator")
          , o = !1;
        try {
            var i = [7][r]();
            i["return"] = function() {
                o = !0
            }
            ,
            Array.from(i, function() {
                throw 2
            })
        } catch (t) {}
        t.exports = function(t, n) {
            if (!n && !o)
                return !1;
            var e = !1;
            try {
                var i = [7]
                  , u = i[r]();
                u.next = function() {
                    return {
                        done: e = !0
                    }
                }
                ,
                i[r] = function() {
                    return u
                }
                ,
                t(i)
            } catch (t) {}
            return e
        }
    }
    , function(t, n) {
        t.exports = function(t, n) {
            return {
                value: n,
                done: !!t
            }
        }
    }
    , function(t, n, e) {
        var r = e(1)
          , o = e(35).set
          , i = r.MutationObserver || r.WebKitMutationObserver
          , u = r.process
          , c = r.Promise
          , a = "process" == e(11)(u);
        t.exports = function() {
            var t, n, e, f = function() {
                var r, o;
                for (a && (r = u.domain) && r.exit(); t; ) {
                    o = t.fn,
                    t = t.next;
                    try {
                        o()
                    } catch (r) {
                        throw t ? e() : n = void 0,
                        r
                    }
                }
                n = void 0,
                r && r.enter()
            };
            if (a)
                e = function() {
                    u.nextTick(f)
                }
                ;
            else if (!i || r.navigator && r.navigator.standalone)
                if (c && c.resolve) {
                    var s = c.resolve();
                    e = function() {
                        s.then(f)
                    }
                } else
                    e = function() {
                        o.call(r, f)
                    }
                    ;
            else {
                var l = !0
                  , p = document.createTextNode("");
                new i(f).observe(p, {
                    characterData: !0
                }),
                e = function() {
                    p.data = l = !l
                }
            }
            return function(r) {
                var o = {
                    fn: r,
                    next: void 0
                };
                n && (n.next = o),
                t || (t = o,
                e()),
                n = o
            }
        }
    }
    , function(t, n, e) {
        var r = e(3)
          , o = e(69)
          , i = e(24)
          , u = e(20)("IE_PROTO")
          , c = function() {}
          , a = function() {
            var t, n = e(17)("iframe"), r = i.length;
            for (n.style.display = "none",
            e(26).appendChild(n),
            n.src = "javascript:",
            t = n.contentWindow.document,
            t.open(),
            t.write("<script>document.F=Object<\/script>"),
            t.close(),
            a = t.F; r--; )
                delete a.prototype[i[r]];
            return a()
        };
        t.exports = Object.create || function(t, n) {
            var e;
            return null !== t ? (c.prototype = r(t),
            e = new c,
            c.prototype = null,
            e[u] = t) : e = a(),
            void 0 === n ? e : o(e, n)
        }
    }
    , function(t, n, e) {
        var r = e(9)
          , o = e(3)
          , i = e(29);
        t.exports = e(4) ? Object.defineProperties : function(t, n) {
            o(t);
            for (var e, u = i(n), c = u.length, a = 0; c > a; )
                r.f(t, e = u[a++], n[e]);
            return t
        }
    }
    , function(t, n, e) {
        var r = e(13)
          , o = e(79)
          , i = e(20)("IE_PROTO")
          , u = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = o(t),
            r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }
    , function(t, n, e) {
        var r = e(13)
          , o = e(14)
          , i = e(57)(!1)
          , u = e(20)("IE_PROTO");
        t.exports = function(t, n) {
            var e, c = o(t), a = 0, f = [];
            for (e in c)
                e != u && r(c, e) && f.push(e);
            for (; n.length > a; )
                r(c, e = n[a++]) && (~i(f, e) || f.push(e));
            return f
        }
    }
    , function(t, n) {
        n.f = {}.propertyIsEnumerable
    }
    , function(t, n, e) {
        var r = e(29)
          , o = e(14)
          , i = e(72).f;
        t.exports = function(t) {
            return function(n) {
                for (var e, u = o(n), c = r(u), a = c.length, f = 0, s = []; a > f; )
                    i.call(u, e = c[f++]) && s.push(t ? [e, u[e]] : u[e]);
                return s
            }
        }
    }
    , function(t, n, e) {
        var r = e(6);
        t.exports = function(t, n, e) {
            for (var o in n)
                e && t[o] ? t[o] = n[o] : r(t, o, n[o]);
            return t
        }
    }
    , function(t, n, e) {
        t.exports = e(6)
    }
    , function(t, n, e) {
        "use strict";
        var r = e(1)
          , o = e(2)
          , i = e(9)
          , u = e(4)
          , c = e(0)("species");
        t.exports = function(t) {
            var n = "function" == typeof o[t] ? o[t] : r[t];
            u && n && !n[c] && i.f(n, c, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }
    , function(t, n, e) {
        var r = e(21)
          , o = e(16);
        t.exports = function(t) {
            return function(n, e) {
                var i, u, c = String(o(n)), a = r(e), f = c.length;
                return a < 0 || a >= f ? t ? "" : void 0 : (i = c.charCodeAt(a),
                i < 55296 || i > 56319 || a + 1 === f || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? t ? c.charAt(a) : i : t ? c.slice(a, a + 2) : u - 56320 + (i - 55296 << 10) + 65536)
            }
        }
    }
    , function(t, n, e) {
        var r = e(21)
          , o = Math.max
          , i = Math.min;
        t.exports = function(t, n) {
            return t = r(t),
            t < 0 ? o(t + n, 0) : i(t, n)
        }
    }
    , function(t, n, e) {
        var r = e(16);
        t.exports = function(t) {
            return Object(r(t))
        }
    }
    , function(t, n, e) {
        var r = e(8);
        t.exports = function(t, n) {
            if (!r(t))
                return t;
            var e, o;
            if (n && "function" == typeof (e = t.toString) && !r(o = e.call(t)))
                return o;
            if ("function" == typeof (e = t.valueOf) && !r(o = e.call(t)))
                return o;
            if (!n && "function" == typeof (e = t.toString) && !r(o = e.call(t)))
                return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }
    , function(t, n, e) {
        var r = e(3)
          , o = e(38);
        t.exports = e(2).getIterator = function(t) {
            var n = o(t);
            if ("function" != typeof n)
                throw TypeError(t + " is not iterable!");
            return r(n.call(t))
        }
    }
    , function(t, n, e) {
        var r = e(15)
          , o = e(0)("iterator")
          , i = e(7);
        t.exports = e(2).isIterable = function(t) {
            var n = Object(t);
            return void 0 !== n[o] || "@@iterator"in n || i.hasOwnProperty(r(n))
        }
    }
    , function(t, n, e) {
        "use strict";
        var r = e(55)
          , o = e(66)
          , i = e(7)
          , u = e(14);
        t.exports = e(27)(Array, "Array", function(t, n) {
            this._t = u(t),
            this._i = 0,
            this._k = n
        }, function() {
            var t = this._t
              , n = this._k
              , e = this._i++;
            return !t || e >= t.length ? (this._t = void 0,
            o(1)) : "keys" == n ? o(0, e) : "values" == n ? o(0, t[e]) : o(0, [e, t[e]])
        }, "values"),
        i.Arguments = i.Array,
        r("keys"),
        r("values"),
        r("entries")
    }
    , function(t, n, e) {
        var r = e(5);
        r(r.S + r.F * !e(4), "Object", {
            defineProperty: e(9).f
        })
    }
    , function(t, n) {}
    , function(t, n, e) {
        "use strict";
        var r, o, i, u, c = e(28), a = e(1), f = e(12), s = e(15), l = e(5), p = e(8), v = e(10), h = e(56), d = e(58), y = e(34), m = e(35).set, x = e(67)(), _ = e(18), w = e(30), g = e(31), b = a.TypeError, T = a.process, j = a.Promise, O = "process" == s(T), P = function() {}, S = o = _.f, M = !!function() {
            try {
                var t = j.resolve(1)
                  , n = (t.constructor = {})[e(0)("species")] = function(t) {
                    t(P, P)
                }
                ;
                return (O || "function" == typeof PromiseRejectionEvent) && t.then(P)instanceof n
            } catch (t) {}
        }(), L = function(t) {
            var n;
            return !(!p(t) || "function" != typeof (n = t.then)) && n
        }, A = function(t, n) {
            if (!t._n) {
                t._n = !0;
                var e = t._c;
                x(function() {
                    for (var r = t._v, o = 1 == t._s, i = 0; e.length > i; )
                        !function(n) {
                            var e, i, u, c = o ? n.ok : n.fail, a = n.resolve, f = n.reject, s = n.domain;
                            try {
                                c ? (o || (2 == t._h && k(t),
                                t._h = 1),
                                !0 === c ? e = r : (s && s.enter(),
                                e = c(r),
                                s && (s.exit(),
                                u = !0)),
                                e === n.promise ? f(b("Promise-chain cycle")) : (i = L(e)) ? i.call(e, a, f) : a(e)) : f(r)
                            } catch (t) {
                                s && !u && s.exit(),
                                f(t)
                            }
                        }(e[i++]);
                    t._c = [],
                    t._n = !1,
                    n && !t._h && E(t)
                })
            }
        }, E = function(t) {
            m.call(a, function() {
                var n, e, r, o = t._v, i = F(t);
                if (i && (n = w(function() {
                    O ? T.emit("unhandledRejection", o, t) : (e = a.onunhandledrejection) ? e({
                        promise: t,
                        reason: o
                    }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", o)
                }),
                t._h = O || F(t) ? 2 : 1),
                t._a = void 0,
                i && n.e)
                    throw n.v
            })
        }, F = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        }, k = function(t) {
            m.call(a, function() {
                var n;
                O ? T.emit("rejectionHandled", t) : (n = a.onrejectionhandled) && n({
                    promise: t,
                    reason: t._v
                })
            })
        }, C = function(t) {
            var n = this;
            n._d || (n._d = !0,
            n = n._w || n,
            n._v = t,
            n._s = 2,
            n._a || (n._a = n._c.slice()),
            A(n, !0))
        }, I = function(t) {
            var n, e = this;
            if (!e._d) {
                e._d = !0,
                e = e._w || e;
                try {
                    if (e === t)
                        throw b("Promise can't be resolved itself");
                    (n = L(t)) ? x(function() {
                        var r = {
                            _w: e,
                            _d: !1
                        };
                        try {
                            n.call(t, f(I, r, 1), f(C, r, 1))
                        } catch (t) {
                            C.call(r, t)
                        }
                    }) : (e._v = t,
                    e._s = 1,
                    A(e, !1))
                } catch (t) {
                    C.call({
                        _w: e,
                        _d: !1
                    }, t)
                }
            }
        };
        M || (j = function(t) {
            h(this, j, "Promise", "_h"),
            v(t),
            r.call(this);
            try {
                t(f(I, this, 1), f(C, this, 1))
            } catch (t) {
                C.call(this, t)
            }
        }
        ,
        r = function(t) {
            this._c = [],
            this._a = void 0,
            this._s = 0,
            this._d = !1,
            this._v = void 0,
            this._h = 0,
            this._n = !1
        }
        ,
        r.prototype = e(74)(j.prototype, {
            then: function(t, n) {
                var e = S(y(this, j));
                return e.ok = "function" != typeof t || t,
                e.fail = "function" == typeof n && n,
                e.domain = O ? T.domain : void 0,
                this._c.push(e),
                this._a && this._a.push(e),
                this._s && A(this, !1),
                e.promise
            },
            "catch": function(t) {
                return this.then(void 0, t)
            }
        }),
        i = function() {
            var t = new r;
            this.promise = t,
            this.resolve = f(I, t, 1),
            this.reject = f(C, t, 1)
        }
        ,
        _.f = S = function(t) {
            return t === j || t === u ? new i(t) : o(t)
        }
        ),
        l(l.G + l.W + l.F * !M, {
            Promise: j
        }),
        e(19)(j, "Promise"),
        e(76)("Promise"),
        u = e(2).Promise,
        l(l.S + l.F * !M, "Promise", {
            reject: function(t) {
                var n = S(this);
                return (0,
                n.reject)(t),
                n.promise
            }
        }),
        l(l.S + l.F * (c || !M), "Promise", {
            resolve: function(t) {
                return g(c && this === u ? j : this, t)
            }
        }),
        l(l.S + l.F * !(M && e(65)(function(t) {
            j.all(t)["catch"](P)
        })), "Promise", {
            all: function(t) {
                var n = this
                  , e = S(n)
                  , r = e.resolve
                  , o = e.reject
                  , i = w(function() {
                    var e = []
                      , i = 0
                      , u = 1;
                    d(t, !1, function(t) {
                        var c = i++
                          , a = !1;
                        e.push(void 0),
                        u++,
                        n.resolve(t).then(function(t) {
                            a || (a = !0,
                            e[c] = t,
                            --u || r(e))
                        }, o)
                    }),
                    --u || r(e)
                });
                return i.e && o(i.v),
                e.promise
            },
            race: function(t) {
                var n = this
                  , e = S(n)
                  , r = e.reject
                  , o = w(function() {
                    d(t, !1, function(t) {
                        n.resolve(t).then(e.resolve, r)
                    })
                });
                return o.e && r(o.v),
                e.promise
            }
        })
    }
    , function(t, n, e) {
        var r = e(5)
          , o = e(73)(!0);
        r(r.S, "Object", {
            entries: function(t) {
                return o(t)
            }
        })
    }
    , function(t, n, e) {
        "use strict";
        var r = e(5)
          , o = e(2)
          , i = e(1)
          , u = e(34)
          , c = e(31);
        r(r.P + r.R, "Promise", {
            "finally": function(t) {
                var n = u(this, o.Promise || i.Promise)
                  , e = "function" == typeof t;
                return this.then(e ? function(e) {
                    return c(n, t()).then(function() {
                        return e
                    })
                }
                : t, e ? function(e) {
                    return c(n, t()).then(function() {
                        throw e
                    })
                }
                : t)
            }
        })
    }
    , function(t, n, e) {
        "use strict";
        var r = e(5)
          , o = e(18)
          , i = e(30);
        r(r.S, "Promise", {
            "try": function(t) {
                var n = o.f(this)
                  , e = i(t);
                return (e.e ? n.reject : n.resolve)(e.v),
                n.promise
            }
        })
    }
    , function(t, n) {
        function e() {
            throw new Error("setTimeout has not been defined")
        }
        function r() {
            throw new Error("clearTimeout has not been defined")
        }
        function o(t) {
            if (s === setTimeout)
                return setTimeout(t, 0);
            if ((s === e || !s) && setTimeout)
                return s = setTimeout,
                setTimeout(t, 0);
            try {
                return s(t, 0)
            } catch (n) {
                try {
                    return s.call(null, t, 0)
                } catch (n) {
                    return s.call(this, t, 0)
                }
            }
        }
        function i(t) {
            if (l === clearTimeout)
                return clearTimeout(t);
            if ((l === r || !l) && clearTimeout)
                return l = clearTimeout,
                clearTimeout(t);
            try {
                return l(t)
            } catch (n) {
                try {
                    return l.call(null, t)
                } catch (n) {
                    return l.call(this, t)
                }
            }
        }
        function u() {
            d && v && (d = !1,
            v.length ? h = v.concat(h) : y = -1,
            h.length && c())
        }
        function c() {
            if (!d) {
                var t = o(u);
                d = !0;
                for (var n = h.length; n; ) {
                    for (v = h,
                    h = []; ++y < n; )
                        v && v[y].run();
                    y = -1,
                    n = h.length
                }
                v = null,
                d = !1,
                i(t)
            }
        }
        function a(t, n) {
            this.fun = t,
            this.array = n
        }
        function f() {}
        var s, l, p = t.exports = {};
        !function() {
            try {
                s = "function" == typeof setTimeout ? setTimeout : e
            } catch (t) {
                s = e
            }
            try {
                l = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (t) {
                l = r
            }
        }();
        var v, h = [], d = !1, y = -1;
        p.nextTick = function(t) {
            var n = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var e = 1; e < arguments.length; e++)
                    n[e - 1] = arguments[e];
            h.push(new a(t,n)),
            1 !== h.length || d || o(c)
        }
        ,
        a.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        p.title = "browser",
        p.browser = !0,
        p.env = {},
        p.argv = [],
        p.version = "",
        p.versions = {},
        p.on = f,
        p.addListener = f,
        p.once = f,
        p.off = f,
        p.removeListener = f,
        p.removeAllListeners = f,
        p.emit = f,
        p.prependListener = f,
        p.prependOnceListener = f,
        p.listeners = function(t) {
            return []
        }
        ,
        p.binding = function(t) {
            throw new Error("process.binding is not supported")
        }
        ,
        p.cwd = function() {
            return "/"
        }
        ,
        p.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }
        ,
        p.umask = function() {
            return 0
        }
    }
    ])
});
