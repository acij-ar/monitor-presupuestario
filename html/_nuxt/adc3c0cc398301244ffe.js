(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        154: function(t, n, e) {
            "use strict";
            var i = function(t, n) {
                    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
                },
                r = function(t) {
                    var n;
                    return 1 === t.length && (n = t, t = function(t, e) {
                        return i(n(t), e)
                    }), {
                        left: function(n, e, i, r) {
                            for (null == i && (i = 0), null == r && (r = n.length); i < r;) {
                                var a = i + r >>> 1;
                                t(n[a], e) < 0 ? i = a + 1 : r = a
                            }
                            return i
                        },
                        right: function(n, e, i, r) {
                            for (null == i && (i = 0), null == r && (r = n.length); i < r;) {
                                var a = i + r >>> 1;
                                t(n[a], e) > 0 ? r = a : i = a + 1
                            }
                            return i
                        }
                    }
                };
            var a = r(i),
                f = a.right,
                o = (a.left, f);
            var c = function(t, n) {
                    var e, i, r, a = t.length,
                        f = -1;
                    if (null == n) {
                        for (; ++f < a;)
                            if (null != (e = t[f]) && e >= e)
                                for (i = r = e; ++f < a;) null != (e = t[f]) && (i > e && (i = e), r < e && (r = e))
                    } else
                        for (; ++f < a;)
                            if (null != (e = n(t[f], f, t)) && e >= e)
                                for (i = r = e; ++f < a;) null != (e = n(t[f], f, t)) && (i > e && (i = e), r < e && (r = e));
                    return [i, r]
                },
                u = Array.prototype,
                s = (u.slice, u.map, Math.sqrt(50)),
                h = Math.sqrt(10),
                l = Math.sqrt(2),
                d = function(t, n, e) {
                    var i, r, a, f, o = -1;
                    if (e = +e, (t = +t) === (n = +n) && e > 0) return [t];
                    if ((i = n < t) && (r = t, t = n, n = r), 0 === (f = _(t, n, e)) || !isFinite(f)) return [];
                    if (f > 0)
                        for (t = Math.ceil(t / f), n = Math.floor(n / f), a = new Array(r = Math.ceil(n - t + 1)); ++o < r;) a[o] = (t + o) * f;
                    else
                        for (t = Math.floor(t * f), n = Math.ceil(n * f), a = new Array(r = Math.ceil(t - n + 1)); ++o < r;) a[o] = (t - o) / f;
                    return i && a.reverse(), a
                };

            function _(t, n, e) {
                var i = (n - t) / Math.max(0, e),
                    r = Math.floor(Math.log(i) / Math.LN10),
                    a = i / Math.pow(10, r);
                return r >= 0 ? (a >= s ? 10 : a >= h ? 5 : a >= l ? 2 : 1) * Math.pow(10, r) : -Math.pow(10, -r) / (a >= s ? 10 : a >= h ? 5 : a >= l ? 2 : 1)
            }

            function b(t, n, e) {
                var i = Math.abs(n - t) / Math.max(0, e),
                    r = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)),
                    a = i / r;
                return a >= s ? r *= 10 : a >= h ? r *= 5 : a >= l && (r *= 2), n < t ? -r : r
            }
            var p = function(t, n) {
                    var e, i, r = t.length,
                        a = -1;
                    if (null == n) {
                        for (; ++a < r;)
                            if (null != (e = t[a]) && e >= e)
                                for (i = e; ++a < r;) null != (e = t[a]) && e > i && (i = e)
                    } else
                        for (; ++a < r;)
                            if (null != (e = n(t[a], a, t)) && e >= e)
                                for (i = e; ++a < r;) null != (e = n(t[a], a, t)) && e > i && (i = e);
                    return i
                },
                y = function(t) {
                    for (var n, e, i, r = t.length, a = -1, f = 0; ++a < r;) f += t[a].length;
                    for (e = new Array(f); --r >= 0;)
                        for (n = (i = t[r]).length; --n >= 0;) e[--f] = i[n];
                    return e
                },
                v = function(t, n) {
                    var e, i, r = t.length,
                        a = -1;
                    if (null == n) {
                        for (; ++a < r;)
                            if (null != (e = t[a]) && e >= e)
                                for (i = e; ++a < r;) null != (e = t[a]) && i > e && (i = e)
                    } else
                        for (; ++a < r;)
                            if (null != (e = n(t[a], a, t)) && e >= e)
                                for (i = e; ++a < r;) null != (e = n(t[a], a, t)) && i > e && (i = e);
                    return i
                };
            var g = Array.prototype.slice,
                x = function(t) {
                    return t
                },
                m = 1,
                w = 2,
                M = 3,
                N = 4,
                T = 1e-6;

            function k(t) {
                return "translate(" + (t + .5) + ",0)"
            }

            function A(t) {
                return "translate(0," + (t + .5) + ")"
            }

            function C() {
                return !this.__axis
            }

            function S(t, n) {
                var e = [],
                    i = null,
                    r = null,
                    a = 6,
                    f = 6,
                    o = 3,
                    c = t === m || t === N ? -1 : 1,
                    u = t === N || t === w ? "x" : "y",
                    s = t === m || t === M ? k : A;

                function h(h) {
                    var l = null == i ? n.ticks ? n.ticks.apply(n, e) : n.domain() : i,
                        d = null == r ? n.tickFormat ? n.tickFormat.apply(n, e) : x : r,
                        _ = Math.max(a, 0) + o,
                        b = n.range(),
                        p = +b[0] + .5,
                        y = +b[b.length - 1] + .5,
                        v = (n.bandwidth ? function(t) {
                            var n = Math.max(0, t.bandwidth() - 1) / 2;
                            return t.round() && (n = Math.round(n)),
                                function(e) {
                                    return +t(e) + n
                                }
                        } : function(t) {
                            return function(n) {
                                return +t(n)
                            }
                        })(n.copy()),
                        g = h.selection ? h.selection() : h,
                        k = g.selectAll(".domain").data([null]),
                        A = g.selectAll(".tick").data(l, n).order(),
                        S = A.exit(),
                        E = A.enter().append("g").attr("class", "tick"),
                        U = A.select("line"),
                        L = A.select("text");
                    k = k.merge(k.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(E), U = U.merge(E.append("line").attr("stroke", "currentColor").attr(u + "2", c * a)), L = L.merge(E.append("text").attr("fill", "currentColor").attr(u, c * _).attr("dy", t === m ? "0em" : t === M ? "0.71em" : "0.32em")), h !== g && (k = k.transition(h), A = A.transition(h), U = U.transition(h), L = L.transition(h), S = S.transition(h).attr("opacity", T).attr("transform", function(t) {
                        return isFinite(t = v(t)) ? s(t) : this.getAttribute("transform")
                    }), E.attr("opacity", T).attr("transform", function(t) {
                        var n = this.parentNode.__axis;
                        return s(n && isFinite(n = n(t)) ? n : v(t))
                    })), S.remove(), k.attr("d", t === N || t == w ? f ? "M" + c * f + "," + p + "H0.5V" + y + "H" + c * f : "M0.5," + p + "V" + y : f ? "M" + p + "," + c * f + "V0.5H" + y + "V" + c * f : "M" + p + ",0.5H" + y), A.attr("opacity", 1).attr("transform", function(t) {
                        return s(v(t))
                    }), U.attr(u + "2", c * a), L.attr(u, c * _).text(d), g.filter(C).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === w ? "start" : t === N ? "end" : "middle"), g.each(function() {
                        this.__axis = v
                    })
                }
                return h.scale = function(t) {
                    return arguments.length ? (n = t, h) : n
                }, h.ticks = function() {
                    return e = g.call(arguments), h
                }, h.tickArguments = function(t) {
                    return arguments.length ? (e = null == t ? [] : g.call(t), h) : e.slice()
                }, h.tickValues = function(t) {
                    return arguments.length ? (i = null == t ? null : g.call(t), h) : i && i.slice()
                }, h.tickFormat = function(t) {
                    return arguments.length ? (r = t, h) : r
                }, h.tickSize = function(t) {
                    return arguments.length ? (a = f = +t, h) : a
                }, h.tickSizeInner = function(t) {
                    return arguments.length ? (a = +t, h) : a
                }, h.tickSizeOuter = function(t) {
                    return arguments.length ? (f = +t, h) : f
                }, h.tickPadding = function(t) {
                    return arguments.length ? (o = +t, h) : o
                }, h
            }

            function E(t) {
                return S(M, t)
            }

            function U(t) {
                return S(N, t)
            }
            var L = {
                value: function() {}
            };

            function P() {
                for (var t, n = 0, e = arguments.length, i = {}; n < e; ++n) {
                    if (!(t = arguments[n] + "") || t in i) throw new Error("illegal type: " + t);
                    i[t] = []
                }
                return new D(i)
            }

            function D(t) {
                this._ = t
            }

            function R(t, n) {
                for (var e, i = 0, r = t.length; i < r; ++i)
                    if ((e = t[i]).name === n) return e.value
            }

            function F(t, n, e) {
                for (var i = 0, r = t.length; i < r; ++i)
                    if (t[i].name === n) {
                        t[i] = L, t = t.slice(0, i).concat(t.slice(i + 1));
                        break
                    } return null != e && t.push({
                    name: n,
                    value: e
                }), t
            }
            D.prototype = P.prototype = {
                constructor: D,
                on: function(t, n) {
                    var e, i, r = this._,
                        a = (i = r, (t + "").trim().split(/^|\s+/).map(function(t) {
                            var n = "",
                                e = t.indexOf(".");
                            if (e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), t && !i.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                            return {
                                type: t,
                                name: n
                            }
                        })),
                        f = -1,
                        o = a.length;
                    if (!(arguments.length < 2)) {
                        if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                        for (; ++f < o;)
                            if (e = (t = a[f]).type) r[e] = F(r[e], t.name, n);
                            else if (null == n)
                            for (e in r) r[e] = F(r[e], t.name, null);
                        return this
                    }
                    for (; ++f < o;)
                        if ((e = (t = a[f]).type) && (e = R(r[e], t.name))) return e
                },
                copy: function() {
                    var t = {},
                        n = this._;
                    for (var e in n) t[e] = n[e].slice();
                    return new D(t)
                },
                call: function(t, n) {
                    if ((e = arguments.length - 2) > 0)
                        for (var e, i, r = new Array(e), a = 0; a < e; ++a) r[a] = arguments[a + 2];
                    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    for (a = 0, e = (i = this._[t]).length; a < e; ++a) i[a].value.apply(n, r)
                },
                apply: function(t, n, e) {
                    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    for (var i = this._[t], r = 0, a = i.length; r < a; ++r) i[r].value.apply(n, e)
                }
            };
            var Y = P,
                q = "http://www.w3.org/1999/xhtml",
                z = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: q,
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                H = function(t) {
                    var n = t += "",
                        e = n.indexOf(":");
                    return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), z.hasOwnProperty(n) ? {
                        space: z[n],
                        local: t
                    } : t
                };
            var j = function(t) {
                var n = H(t);
                return (n.local ? function(t) {
                    return function() {
                        return this.ownerDocument.createElementNS(t.space, t.local)
                    }
                } : function(t) {
                    return function() {
                        var n = this.ownerDocument,
                            e = this.namespaceURI;
                        return e === q && n.documentElement.namespaceURI === q ? n.createElement(t) : n.createElementNS(e, t)
                    }
                })(n)
            };

            function O() {}
            var I = function(t) {
                return null == t ? O : function() {
                    return this.querySelector(t)
                }
            };

            function $() {
                return []
            }
            var X = function(t) {
                    return null == t ? $ : function() {
                        return this.querySelectorAll(t)
                    }
                },
                V = function(t) {
                    return function() {
                        return this.matches(t)
                    }
                };
            if ("undefined" != typeof document) {
                var B = document.documentElement;
                if (!B.matches) {
                    var Z = B.webkitMatchesSelector || B.msMatchesSelector || B.mozMatchesSelector || B.oMatchesSelector;
                    V = function(t) {
                        return function() {
                            return Z.call(this, t)
                        }
                    }
                }
            }
            var W = V,
                J = function(t) {
                    return new Array(t.length)
                };

            function Q(t, n) {
                this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
            }
            Q.prototype = {
                constructor: Q,
                appendChild: function(t) {
                    return this._parent.insertBefore(t, this._next)
                },
                insertBefore: function(t, n) {
                    return this._parent.insertBefore(t, n)
                },
                querySelector: function(t) {
                    return this._parent.querySelector(t)
                },
                querySelectorAll: function(t) {
                    return this._parent.querySelectorAll(t)
                }
            };
            var G = "$";

            function K(t, n, e, i, r, a) {
                for (var f, o = 0, c = n.length, u = a.length; o < u; ++o)(f = n[o]) ? (f.__data__ = a[o], i[o] = f) : e[o] = new Q(t, a[o]);
                for (; o < c; ++o)(f = n[o]) && (r[o] = f)
            }

            function tt(t, n, e, i, r, a, f) {
                var o, c, u, s = {},
                    h = n.length,
                    l = a.length,
                    d = new Array(h);
                for (o = 0; o < h; ++o)(c = n[o]) && (d[o] = u = G + f.call(c, c.__data__, o, n), u in s ? r[o] = c : s[u] = c);
                for (o = 0; o < l; ++o)(c = s[u = G + f.call(t, a[o], o, a)]) ? (i[o] = c, c.__data__ = a[o], s[u] = null) : e[o] = new Q(t, a[o]);
                for (o = 0; o < h; ++o)(c = n[o]) && s[d[o]] === c && (r[o] = c)
            }

            function nt(t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }
            var et = function(t) {
                return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
            };

            function it(t, n) {
                return t.style.getPropertyValue(n) || et(t).getComputedStyle(t, null).getPropertyValue(n)
            }

            function rt(t) {
                return t.trim().split(/^|\s+/)
            }

            function at(t) {
                return t.classList || new ft(t)
            }

            function ft(t) {
                this._node = t, this._names = rt(t.getAttribute("class") || "")
            }

            function ot(t, n) {
                for (var e = at(t), i = -1, r = n.length; ++i < r;) e.add(n[i])
            }

            function ct(t, n) {
                for (var e = at(t), i = -1, r = n.length; ++i < r;) e.remove(n[i])
            }
            ft.prototype = {
                add: function(t) {
                    this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
                },
                remove: function(t) {
                    var n = this._names.indexOf(t);
                    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
                },
                contains: function(t) {
                    return this._names.indexOf(t) >= 0
                }
            };

            function ut() {
                this.textContent = ""
            }

            function st() {
                this.innerHTML = ""
            }

            function ht() {
                this.nextSibling && this.parentNode.appendChild(this)
            }

            function lt() {
                this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
            }

            function dt() {
                return null
            }

            function _t() {
                var t = this.parentNode;
                t && t.removeChild(this)
            }

            function bt() {
                return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
            }

            function pt() {
                return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
            }
            var yt = {},
                vt = null;
            "undefined" != typeof document && ("onmouseenter" in document.documentElement || (yt = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }));

            function gt(t, n, e) {
                return t = xt(t, n, e),
                    function(n) {
                        var e = n.relatedTarget;
                        e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
                    }
            }

            function xt(t, n, e) {
                return function(i) {
                    var r = vt;
                    vt = i;
                    try {
                        t.call(this, this.__data__, n, e)
                    } finally {
                        vt = r
                    }
                }
            }

            function mt(t) {
                return function() {
                    var n = this.__on;
                    if (n) {
                        for (var e, i = 0, r = -1, a = n.length; i < a; ++i) e = n[i], t.type && e.type !== t.type || e.name !== t.name ? n[++r] = e : this.removeEventListener(e.type, e.listener, e.capture);
                        ++r ? n.length = r : delete this.__on
                    }
                }
            }

            function wt(t, n, e) {
                var i = yt.hasOwnProperty(t.type) ? gt : xt;
                return function(r, a, f) {
                    var o, c = this.__on,
                        u = i(n, a, f);
                    if (c)
                        for (var s = 0, h = c.length; s < h; ++s)
                            if ((o = c[s]).type === t.type && o.name === t.name) return this.removeEventListener(o.type, o.listener, o.capture), this.addEventListener(o.type, o.listener = u, o.capture = e), void(o.value = n);
                    this.addEventListener(t.type, u, e), o = {
                        type: t.type,
                        name: t.name,
                        value: n,
                        listener: u,
                        capture: e
                    }, c ? c.push(o) : this.__on = [o]
                }
            }

            function Mt(t, n, e) {
                var i = et(t),
                    r = i.CustomEvent;
                "function" == typeof r ? r = new r(n, e) : (r = i.document.createEvent("Event"), e ? (r.initEvent(n, e.bubbles, e.cancelable), r.detail = e.detail) : r.initEvent(n, !1, !1)), t.dispatchEvent(r)
            }
            var Nt = [null];

            function Tt(t, n) {
                this._groups = t, this._parents = n
            }

            function kt() {
                return new Tt([
                    [document.documentElement]
                ], Nt)
            }
            Tt.prototype = kt.prototype = {
                constructor: Tt,
                select: function(t) {
                    "function" != typeof t && (t = I(t));
                    for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
                        for (var a, f, o = n[r], c = o.length, u = i[r] = new Array(c), s = 0; s < c; ++s)(a = o[s]) && (f = t.call(a, a.__data__, s, o)) && ("__data__" in a && (f.__data__ = a.__data__), u[s] = f);
                    return new Tt(i, this._parents)
                },
                selectAll: function(t) {
                    "function" != typeof t && (t = X(t));
                    for (var n = this._groups, e = n.length, i = [], r = [], a = 0; a < e; ++a)
                        for (var f, o = n[a], c = o.length, u = 0; u < c; ++u)(f = o[u]) && (i.push(t.call(f, f.__data__, u, o)), r.push(f));
                    return new Tt(i, r)
                },
                filter: function(t) {
                    "function" != typeof t && (t = W(t));
                    for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
                        for (var a, f = n[r], o = f.length, c = i[r] = [], u = 0; u < o; ++u)(a = f[u]) && t.call(a, a.__data__, u, f) && c.push(a);
                    return new Tt(i, this._parents)
                },
                data: function(t, n) {
                    if (!t) return _ = new Array(this.size()), s = -1, this.each(function(t) {
                        _[++s] = t
                    }), _;
                    var e, i = n ? tt : K,
                        r = this._parents,
                        a = this._groups;
                    "function" != typeof t && (e = t, t = function() {
                        return e
                    });
                    for (var f = a.length, o = new Array(f), c = new Array(f), u = new Array(f), s = 0; s < f; ++s) {
                        var h = r[s],
                            l = a[s],
                            d = l.length,
                            _ = t.call(h, h && h.__data__, s, r),
                            b = _.length,
                            p = c[s] = new Array(b),
                            y = o[s] = new Array(b);
                        i(h, l, p, y, u[s] = new Array(d), _, n);
                        for (var v, g, x = 0, m = 0; x < b; ++x)
                            if (v = p[x]) {
                                for (x >= m && (m = x + 1); !(g = y[m]) && ++m < b;);
                                v._next = g || null
                            }
                    }
                    return (o = new Tt(o, r))._enter = c, o._exit = u, o
                },
                enter: function() {
                    return new Tt(this._enter || this._groups.map(J), this._parents)
                },
                exit: function() {
                    return new Tt(this._exit || this._groups.map(J), this._parents)
                },
                merge: function(t) {
                    for (var n = this._groups, e = t._groups, i = n.length, r = e.length, a = Math.min(i, r), f = new Array(i), o = 0; o < a; ++o)
                        for (var c, u = n[o], s = e[o], h = u.length, l = f[o] = new Array(h), d = 0; d < h; ++d)(c = u[d] || s[d]) && (l[d] = c);
                    for (; o < i; ++o) f[o] = n[o];
                    return new Tt(f, this._parents)
                },
                order: function() {
                    for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                        for (var i, r = t[n], a = r.length - 1, f = r[a]; --a >= 0;)(i = r[a]) && (f && f !== i.nextSibling && f.parentNode.insertBefore(i, f), f = i);
                    return this
                },
                sort: function(t) {
                    function n(n, e) {
                        return n && e ? t(n.__data__, e.__data__) : !n - !e
                    }
                    t || (t = nt);
                    for (var e = this._groups, i = e.length, r = new Array(i), a = 0; a < i; ++a) {
                        for (var f, o = e[a], c = o.length, u = r[a] = new Array(c), s = 0; s < c; ++s)(f = o[s]) && (u[s] = f);
                        u.sort(n)
                    }
                    return new Tt(r, this._parents).order()
                },
                call: function() {
                    var t = arguments[0];
                    return arguments[0] = this, t.apply(null, arguments), this
                },
                nodes: function() {
                    var t = new Array(this.size()),
                        n = -1;
                    return this.each(function() {
                        t[++n] = this
                    }), t
                },
                node: function() {
                    for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                        for (var i = t[n], r = 0, a = i.length; r < a; ++r) {
                            var f = i[r];
                            if (f) return f
                        }
                    return null
                },
                size: function() {
                    var t = 0;
                    return this.each(function() {
                        ++t
                    }), t
                },
                empty: function() {
                    return !this.node()
                },
                each: function(t) {
                    for (var n = this._groups, e = 0, i = n.length; e < i; ++e)
                        for (var r, a = n[e], f = 0, o = a.length; f < o; ++f)(r = a[f]) && t.call(r, r.__data__, f, a);
                    return this
                },
                attr: function(t, n) {
                    var e = H(t);
                    if (arguments.length < 2) {
                        var i = this.node();
                        return e.local ? i.getAttributeNS(e.space, e.local) : i.getAttribute(e)
                    }
                    return this.each((null == n ? e.local ? function(t) {
                        return function() {
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function(t) {
                        return function() {
                            this.removeAttribute(t)
                        }
                    } : "function" == typeof n ? e.local ? function(t, n) {
                        return function() {
                            var e = n.apply(this, arguments);
                            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                        }
                    } : function(t, n) {
                        return function() {
                            var e = n.apply(this, arguments);
                            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                        }
                    } : e.local ? function(t, n) {
                        return function() {
                            this.setAttributeNS(t.space, t.local, n)
                        }
                    } : function(t, n) {
                        return function() {
                            this.setAttribute(t, n)
                        }
                    })(e, n))
                },
                style: function(t, n, e) {
                    return arguments.length > 1 ? this.each((null == n ? function(t) {
                        return function() {
                            this.style.removeProperty(t)
                        }
                    } : "function" == typeof n ? function(t, n, e) {
                        return function() {
                            var i = n.apply(this, arguments);
                            null == i ? this.style.removeProperty(t) : this.style.setProperty(t, i, e)
                        }
                    } : function(t, n, e) {
                        return function() {
                            this.style.setProperty(t, n, e)
                        }
                    })(t, n, null == e ? "" : e)) : it(this.node(), t)
                },
                property: function(t, n) {
                    return arguments.length > 1 ? this.each((null == n ? function(t) {
                        return function() {
                            delete this[t]
                        }
                    } : "function" == typeof n ? function(t, n) {
                        return function() {
                            var e = n.apply(this, arguments);
                            null == e ? delete this[t] : this[t] = e
                        }
                    } : function(t, n) {
                        return function() {
                            this[t] = n
                        }
                    })(t, n)) : this.node()[t]
                },
                classed: function(t, n) {
                    var e = rt(t + "");
                    if (arguments.length < 2) {
                        for (var i = at(this.node()), r = -1, a = e.length; ++r < a;)
                            if (!i.contains(e[r])) return !1;
                        return !0
                    }
                    return this.each(("function" == typeof n ? function(t, n) {
                        return function() {
                            (n.apply(this, arguments) ? ot : ct)(this, t)
                        }
                    } : n ? function(t) {
                        return function() {
                            ot(this, t)
                        }
                    } : function(t) {
                        return function() {
                            ct(this, t)
                        }
                    })(e, n))
                },
                text: function(t) {
                    return arguments.length ? this.each(null == t ? ut : ("function" == typeof t ? function(t) {
                        return function() {
                            var n = t.apply(this, arguments);
                            this.textContent = null == n ? "" : n
                        }
                    } : function(t) {
                        return function() {
                            this.textContent = t
                        }
                    })(t)) : this.node().textContent
                },
                html: function(t) {
                    return arguments.length ? this.each(null == t ? st : ("function" == typeof t ? function(t) {
                        return function() {
                            var n = t.apply(this, arguments);
                            this.innerHTML = null == n ? "" : n
                        }
                    } : function(t) {
                        return function() {
                            this.innerHTML = t
                        }
                    })(t)) : this.node().innerHTML
                },
                raise: function() {
                    return this.each(ht)
                },
                lower: function() {
                    return this.each(lt)
                },
                append: function(t) {
                    var n = "function" == typeof t ? t : j(t);
                    return this.select(function() {
                        return this.appendChild(n.apply(this, arguments))
                    })
                },
                insert: function(t, n) {
                    var e = "function" == typeof t ? t : j(t),
                        i = null == n ? dt : "function" == typeof n ? n : I(n);
                    return this.select(function() {
                        return this.insertBefore(e.apply(this, arguments), i.apply(this, arguments) || null)
                    })
                },
                remove: function() {
                    return this.each(_t)
                },
                clone: function(t) {
                    return this.select(t ? pt : bt)
                },
                datum: function(t) {
                    return arguments.length ? this.property("__data__", t) : this.node().__data__
                },
                on: function(t, n, e) {
                    var i, r, a = function(t) {
                            return t.trim().split(/^|\s+/).map(function(t) {
                                var n = "",
                                    e = t.indexOf(".");
                                return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                                    type: t,
                                    name: n
                                }
                            })
                        }(t + ""),
                        f = a.length;
                    if (!(arguments.length < 2)) {
                        for (o = n ? wt : mt, null == e && (e = !1), i = 0; i < f; ++i) this.each(o(a[i], n, e));
                        return this
                    }
                    var o = this.node().__on;
                    if (o)
                        for (var c, u = 0, s = o.length; u < s; ++u)
                            for (i = 0, c = o[u]; i < f; ++i)
                                if ((r = a[i]).type === c.type && r.name === c.name) return c.value
                },
                dispatch: function(t, n) {
                    return this.each(("function" == typeof n ? function(t, n) {
                        return function() {
                            return Mt(this, t, n.apply(this, arguments))
                        }
                    } : function(t, n) {
                        return function() {
                            return Mt(this, t, n)
                        }
                    })(t, n))
                }
            };
            var At = kt,
                Ct = function(t) {
                    return "string" == typeof t ? new Tt([
                        [document.querySelector(t)]
                    ], [document.documentElement]) : new Tt([
                        [t]
                    ], Nt)
                },
                St = 0;

            function Et() {
                this._ = "@" + (++St).toString(36)
            }
            Et.prototype = function() {
                return new Et
            }.prototype = {
                constructor: Et,
                get: function(t) {
                    for (var n = this._; !(n in t);)
                        if (!(t = t.parentNode)) return;
                    return t[n]
                },
                set: function(t, n) {
                    return t[this._] = n
                },
                remove: function(t) {
                    return this._ in t && delete t[this._]
                },
                toString: function() {
                    return this._
                }
            };

            function Ut(t, n, e, i, r, a, f, o, c, u) {
                this.target = t, this.type = n, this.subject = e, this.identifier = i, this.active = r, this.x = a, this.y = f, this.dx = o, this.dy = c, this._ = u
            }
            Ut.prototype.on = function() {
                var t = this._.on.apply(this._, arguments);
                return t === this._ ? this : t
            };
            var Lt = function(t, n, e) {
                t.prototype = n.prototype = e, e.constructor = t
            };

            function Pt(t, n) {
                var e = Object.create(t.prototype);
                for (var i in n) e[i] = n[i];
                return e
            }

            function Dt() {}
            var Rt = "\\s*([+-]?\\d+)\\s*",
                Ft = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                Yt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                qt = /^#([0-9a-f]{3})$/,
                zt = /^#([0-9a-f]{6})$/,
                Ht = new RegExp("^rgb\\(" + [Rt, Rt, Rt] + "\\)$"),
                jt = new RegExp("^rgb\\(" + [Yt, Yt, Yt] + "\\)$"),
                Ot = new RegExp("^rgba\\(" + [Rt, Rt, Rt, Ft] + "\\)$"),
                It = new RegExp("^rgba\\(" + [Yt, Yt, Yt, Ft] + "\\)$"),
                $t = new RegExp("^hsl\\(" + [Ft, Yt, Yt] + "\\)$"),
                Xt = new RegExp("^hsla\\(" + [Ft, Yt, Yt, Ft] + "\\)$"),
                Vt = {
                    aliceblue: 15792383,
                    antiquewhite: 16444375,
                    aqua: 65535,
                    aquamarine: 8388564,
                    azure: 15794175,
                    beige: 16119260,
                    bisque: 16770244,
                    black: 0,
                    blanchedalmond: 16772045,
                    blue: 255,
                    blueviolet: 9055202,
                    brown: 10824234,
                    burlywood: 14596231,
                    cadetblue: 6266528,
                    chartreuse: 8388352,
                    chocolate: 13789470,
                    coral: 16744272,
                    cornflowerblue: 6591981,
                    cornsilk: 16775388,
                    crimson: 14423100,
                    cyan: 65535,
                    darkblue: 139,
                    darkcyan: 35723,
                    darkgoldenrod: 12092939,
                    darkgray: 11119017,
                    darkgreen: 25600,
                    darkgrey: 11119017,
                    darkkhaki: 12433259,
                    darkmagenta: 9109643,
                    darkolivegreen: 5597999,
                    darkorange: 16747520,
                    darkorchid: 10040012,
                    darkred: 9109504,
                    darksalmon: 15308410,
                    darkseagreen: 9419919,
                    darkslateblue: 4734347,
                    darkslategray: 3100495,
                    darkslategrey: 3100495,
                    darkturquoise: 52945,
                    darkviolet: 9699539,
                    deeppink: 16716947,
                    deepskyblue: 49151,
                    dimgray: 6908265,
                    dimgrey: 6908265,
                    dodgerblue: 2003199,
                    firebrick: 11674146,
                    floralwhite: 16775920,
                    forestgreen: 2263842,
                    fuchsia: 16711935,
                    gainsboro: 14474460,
                    ghostwhite: 16316671,
                    gold: 16766720,
                    goldenrod: 14329120,
                    gray: 8421504,
                    green: 32768,
                    greenyellow: 11403055,
                    grey: 8421504,
                    honeydew: 15794160,
                    hotpink: 16738740,
                    indianred: 13458524,
                    indigo: 4915330,
                    ivory: 16777200,
                    khaki: 15787660,
                    lavender: 15132410,
                    lavenderblush: 16773365,
                    lawngreen: 8190976,
                    lemonchiffon: 16775885,
                    lightblue: 11393254,
                    lightcoral: 15761536,
                    lightcyan: 14745599,
                    lightgoldenrodyellow: 16448210,
                    lightgray: 13882323,
                    lightgreen: 9498256,
                    lightgrey: 13882323,
                    lightpink: 16758465,
                    lightsalmon: 16752762,
                    lightseagreen: 2142890,
                    lightskyblue: 8900346,
                    lightslategray: 7833753,
                    lightslategrey: 7833753,
                    lightsteelblue: 11584734,
                    lightyellow: 16777184,
                    lime: 65280,
                    limegreen: 3329330,
                    linen: 16445670,
                    magenta: 16711935,
                    maroon: 8388608,
                    mediumaquamarine: 6737322,
                    mediumblue: 205,
                    mediumorchid: 12211667,
                    mediumpurple: 9662683,
                    mediumseagreen: 3978097,
                    mediumslateblue: 8087790,
                    mediumspringgreen: 64154,
                    mediumturquoise: 4772300,
                    mediumvioletred: 13047173,
                    midnightblue: 1644912,
                    mintcream: 16121850,
                    mistyrose: 16770273,
                    moccasin: 16770229,
                    navajowhite: 16768685,
                    navy: 128,
                    oldlace: 16643558,
                    olive: 8421376,
                    olivedrab: 7048739,
                    orange: 16753920,
                    orangered: 16729344,
                    orchid: 14315734,
                    palegoldenrod: 15657130,
                    palegreen: 10025880,
                    paleturquoise: 11529966,
                    palevioletred: 14381203,
                    papayawhip: 16773077,
                    peachpuff: 16767673,
                    peru: 13468991,
                    pink: 16761035,
                    plum: 14524637,
                    powderblue: 11591910,
                    purple: 8388736,
                    rebeccapurple: 6697881,
                    red: 16711680,
                    rosybrown: 12357519,
                    royalblue: 4286945,
                    saddlebrown: 9127187,
                    salmon: 16416882,
                    sandybrown: 16032864,
                    seagreen: 3050327,
                    seashell: 16774638,
                    sienna: 10506797,
                    silver: 12632256,
                    skyblue: 8900331,
                    slateblue: 6970061,
                    slategray: 7372944,
                    slategrey: 7372944,
                    snow: 16775930,
                    springgreen: 65407,
                    steelblue: 4620980,
                    tan: 13808780,
                    teal: 32896,
                    thistle: 14204888,
                    tomato: 16737095,
                    turquoise: 4251856,
                    violet: 15631086,
                    wheat: 16113331,
                    white: 16777215,
                    whitesmoke: 16119285,
                    yellow: 16776960,
                    yellowgreen: 10145074
                };

            function Bt(t) {
                var n;
                return t = (t + "").trim().toLowerCase(), (n = qt.exec(t)) ? new Gt((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = zt.exec(t)) ? Zt(parseInt(n[1], 16)) : (n = Ht.exec(t)) ? new Gt(n[1], n[2], n[3], 1) : (n = jt.exec(t)) ? new Gt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Ot.exec(t)) ? Wt(n[1], n[2], n[3], n[4]) : (n = It.exec(t)) ? Wt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = $t.exec(t)) ? tn(n[1], n[2] / 100, n[3] / 100, 1) : (n = Xt.exec(t)) ? tn(n[1], n[2] / 100, n[3] / 100, n[4]) : Vt.hasOwnProperty(t) ? Zt(Vt[t]) : "transparent" === t ? new Gt(NaN, NaN, NaN, 0) : null
            }

            function Zt(t) {
                return new Gt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
            }

            function Wt(t, n, e, i) {
                return i <= 0 && (t = n = e = NaN), new Gt(t, n, e, i)
            }

            function Jt(t) {
                return t instanceof Dt || (t = Bt(t)), t ? new Gt((t = t.rgb()).r, t.g, t.b, t.opacity) : new Gt
            }

            function Qt(t, n, e, i) {
                return 1 === arguments.length ? Jt(t) : new Gt(t, n, e, null == i ? 1 : i)
            }

            function Gt(t, n, e, i) {
                this.r = +t, this.g = +n, this.b = +e, this.opacity = +i
            }

            function Kt(t) {
                return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
            }

            function tn(t, n, e, i) {
                return i <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new en(t, n, e, i)
            }

            function nn(t, n, e, i) {
                return 1 === arguments.length ? function(t) {
                    if (t instanceof en) return new en(t.h, t.s, t.l, t.opacity);
                    if (t instanceof Dt || (t = Bt(t)), !t) return new en;
                    if (t instanceof en) return t;
                    var n = (t = t.rgb()).r / 255,
                        e = t.g / 255,
                        i = t.b / 255,
                        r = Math.min(n, e, i),
                        a = Math.max(n, e, i),
                        f = NaN,
                        o = a - r,
                        c = (a + r) / 2;
                    return o ? (f = n === a ? (e - i) / o + 6 * (e < i) : e === a ? (i - n) / o + 2 : (n - e) / o + 4, o /= c < .5 ? a + r : 2 - a - r, f *= 60) : o = c > 0 && c < 1 ? 0 : f, new en(f, o, c, t.opacity)
                }(t) : new en(t, n, e, null == i ? 1 : i)
            }

            function en(t, n, e, i) {
                this.h = +t, this.s = +n, this.l = +e, this.opacity = +i
            }

            function rn(t, n, e) {
                return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
            }
            Lt(Dt, Bt, {
                displayable: function() {
                    return this.rgb().displayable()
                },
                hex: function() {
                    return this.rgb().hex()
                },
                toString: function() {
                    return this.rgb() + ""
                }
            }), Lt(Gt, Qt, Pt(Dt, {
                brighter: function(t) {
                    return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Gt(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                darker: function(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new Gt(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                rgb: function() {
                    return this
                },
                displayable: function() {
                    return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
                },
                hex: function() {
                    return "#" + Kt(this.r) + Kt(this.g) + Kt(this.b)
                },
                toString: function() {
                    var t = this.opacity;
                    return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
                }
            })), Lt(en, nn, Pt(Dt, {
                brighter: function(t) {
                    return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new en(this.h, this.s, this.l * t, this.opacity)
                },
                darker: function(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new en(this.h, this.s, this.l * t, this.opacity)
                },
                rgb: function() {
                    var t = this.h % 360 + 360 * (this.h < 0),
                        n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                        e = this.l,
                        i = e + (e < .5 ? e : 1 - e) * n,
                        r = 2 * e - i;
                    return new Gt(rn(t >= 240 ? t - 240 : t + 120, r, i), rn(t, r, i), rn(t < 120 ? t + 240 : t - 120, r, i), this.opacity)
                },
                displayable: function() {
                    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
                }
            }));
            var an = Math.PI / 180,
                fn = 180 / Math.PI,
                on = .96422,
                cn = 1,
                un = .82521,
                sn = 4 / 29,
                hn = 6 / 29,
                ln = 3 * hn * hn,
                dn = hn * hn * hn;

            function _n(t) {
                if (t instanceof pn) return new pn(t.l, t.a, t.b, t.opacity);
                if (t instanceof Mn) {
                    if (isNaN(t.h)) return new pn(t.l, 0, 0, t.opacity);
                    var n = t.h * an;
                    return new pn(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
                }
                t instanceof Gt || (t = Jt(t));
                var e, i, r = xn(t.r),
                    a = xn(t.g),
                    f = xn(t.b),
                    o = yn((.2225045 * r + .7168786 * a + .0606169 * f) / cn);
                return r === a && a === f ? e = i = o : (e = yn((.4360747 * r + .3850649 * a + .1430804 * f) / on), i = yn((.0139322 * r + .0971045 * a + .7141733 * f) / un)), new pn(116 * o - 16, 500 * (e - o), 200 * (o - i), t.opacity)
            }

            function bn(t, n, e, i) {
                return 1 === arguments.length ? _n(t) : new pn(t, n, e, null == i ? 1 : i)
            }

            function pn(t, n, e, i) {
                this.l = +t, this.a = +n, this.b = +e, this.opacity = +i
            }

            function yn(t) {
                return t > dn ? Math.pow(t, 1 / 3) : t / ln + sn
            }

            function vn(t) {
                return t > hn ? t * t * t : ln * (t - sn)
            }

            function gn(t) {
                return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
            }

            function xn(t) {
                return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
            }

            function mn(t) {
                if (t instanceof Mn) return new Mn(t.h, t.c, t.l, t.opacity);
                if (t instanceof pn || (t = _n(t)), 0 === t.a && 0 === t.b) return new Mn(NaN, 0, t.l, t.opacity);
                var n = Math.atan2(t.b, t.a) * fn;
                return new Mn(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
            }

            function wn(t, n, e, i) {
                return 1 === arguments.length ? mn(t) : new Mn(t, n, e, null == i ? 1 : i)
            }

            function Mn(t, n, e, i) {
                this.h = +t, this.c = +n, this.l = +e, this.opacity = +i
            }
            Lt(pn, bn, Pt(Dt, {
                brighter: function(t) {
                    return new pn(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                },
                darker: function(t) {
                    return new pn(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                },
                rgb: function() {
                    var t = (this.l + 16) / 116,
                        n = isNaN(this.a) ? t : t + this.a / 500,
                        e = isNaN(this.b) ? t : t - this.b / 200;
                    return new Gt(gn(3.1338561 * (n = on * vn(n)) - 1.6168667 * (t = cn * vn(t)) - .4906146 * (e = un * vn(e))), gn(-.9787684 * n + 1.9161415 * t + .033454 * e), gn(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
                }
            })), Lt(Mn, wn, Pt(Dt, {
                brighter: function(t) {
                    return new Mn(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
                },
                darker: function(t) {
                    return new Mn(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
                },
                rgb: function() {
                    return _n(this).rgb()
                }
            }));
            var Nn = -.29227,
                Tn = -.90649,
                kn = 1.97294,
                An = kn * Tn,
                Cn = 1.78277 * kn,
                Sn = 1.78277 * Nn - -.14861 * Tn;

            function En(t, n, e, i) {
                return 1 === arguments.length ? function(t) {
                    if (t instanceof Un) return new Un(t.h, t.s, t.l, t.opacity);
                    t instanceof Gt || (t = Jt(t));
                    var n = t.r / 255,
                        e = t.g / 255,
                        i = t.b / 255,
                        r = (Sn * i + An * n - Cn * e) / (Sn + An - Cn),
                        a = i - r,
                        f = (kn * (e - r) - Nn * a) / Tn,
                        o = Math.sqrt(f * f + a * a) / (kn * r * (1 - r)),
                        c = o ? Math.atan2(f, a) * fn - 120 : NaN;
                    return new Un(c < 0 ? c + 360 : c, o, r, t.opacity)
                }(t) : new Un(t, n, e, null == i ? 1 : i)
            }

            function Un(t, n, e, i) {
                this.h = +t, this.s = +n, this.l = +e, this.opacity = +i
            }

            function Ln(t, n, e, i, r) {
                var a = t * t,
                    f = a * t;
                return ((1 - 3 * t + 3 * a - f) * n + (4 - 6 * a + 3 * f) * e + (1 + 3 * t + 3 * a - 3 * f) * i + f * r) / 6
            }
            Lt(Un, En, Pt(Dt, {
                brighter: function(t) {
                    return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Un(this.h, this.s, this.l * t, this.opacity)
                },
                darker: function(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new Un(this.h, this.s, this.l * t, this.opacity)
                },
                rgb: function() {
                    var t = isNaN(this.h) ? 0 : (this.h + 120) * an,
                        n = +this.l,
                        e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                        i = Math.cos(t),
                        r = Math.sin(t);
                    return new Gt(255 * (n + e * (-.14861 * i + 1.78277 * r)), 255 * (n + e * (Nn * i + Tn * r)), 255 * (n + e * (kn * i)), this.opacity)
                }
            }));
            var Pn = function(t) {
                return function() {
                    return t
                }
            };

            function Dn(t, n) {
                return function(e) {
                    return t + e * n
                }
            }

            function Rn(t, n) {
                var e = n - t;
                return e ? Dn(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Pn(isNaN(t) ? n : t)
            }

            function Fn(t) {
                return 1 == (t = +t) ? Yn : function(n, e) {
                    return e - n ? function(t, n, e) {
                        return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                            function(i) {
                                return Math.pow(t + i * n, e)
                            }
                    }(n, e, t) : Pn(isNaN(n) ? e : n)
                }
            }

            function Yn(t, n) {
                var e = n - t;
                return e ? Dn(t, e) : Pn(isNaN(t) ? n : t)
            }
            var qn = function t(n) {
                var e = Fn(n);

                function i(t, n) {
                    var i = e((t = Qt(t)).r, (n = Qt(n)).r),
                        r = e(t.g, n.g),
                        a = e(t.b, n.b),
                        f = Yn(t.opacity, n.opacity);
                    return function(n) {
                        return t.r = i(n), t.g = r(n), t.b = a(n), t.opacity = f(n), t + ""
                    }
                }
                return i.gamma = t, i
            }(1);

            function zn(t) {
                return function(n) {
                    var e, i, r = n.length,
                        a = new Array(r),
                        f = new Array(r),
                        o = new Array(r);
                    for (e = 0; e < r; ++e) i = Qt(n[e]), a[e] = i.r || 0, f[e] = i.g || 0, o[e] = i.b || 0;
                    return a = t(a), f = t(f), o = t(o), i.opacity = 1,
                        function(t) {
                            return i.r = a(t), i.g = f(t), i.b = o(t), i + ""
                        }
                }
            }
            var Hn = zn(function(t) {
                    var n = t.length - 1;
                    return function(e) {
                        var i = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                            r = t[i],
                            a = t[i + 1],
                            f = i > 0 ? t[i - 1] : 2 * r - a,
                            o = i < n - 1 ? t[i + 2] : 2 * a - r;
                        return Ln((e - i / n) * n, f, r, a, o)
                    }
                }),
                jn = (zn(function(t) {
                    var n = t.length;
                    return function(e) {
                        var i = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                            r = t[(i + n - 1) % n],
                            a = t[i % n],
                            f = t[(i + 1) % n],
                            o = t[(i + 2) % n];
                        return Ln((e - i / n) * n, r, a, f, o)
                    }
                }), function(t, n) {
                    return n -= t = +t,
                        function(e) {
                            return t + n * e
                        }
                }),
                On = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                In = new RegExp(On.source, "g");
            var $n, Xn, Vn, Bn, Zn = function(t, n) {
                    var e, i, r, a = On.lastIndex = In.lastIndex = 0,
                        f = -1,
                        o = [],
                        c = [];
                    for (t += "", n += "";
                        (e = On.exec(t)) && (i = In.exec(n));)(r = i.index) > a && (r = n.slice(a, r), o[f] ? o[f] += r : o[++f] = r), (e = e[0]) === (i = i[0]) ? o[f] ? o[f] += i : o[++f] = i : (o[++f] = null, c.push({
                        i: f,
                        x: jn(e, i)
                    })), a = In.lastIndex;
                    return a < n.length && (r = n.slice(a), o[f] ? o[f] += r : o[++f] = r), o.length < 2 ? c[0] ? function(t) {
                        return function(n) {
                            return t(n) + ""
                        }
                    }(c[0].x) : function(t) {
                        return function() {
                            return t
                        }
                    }(n) : (n = c.length, function(t) {
                        for (var e, i = 0; i < n; ++i) o[(e = c[i]).i] = e.x(t);
                        return o.join("")
                    })
                },
                Wn = function(t, n) {
                    var e, i = typeof n;
                    return null == n || "boolean" === i ? Pn(n) : ("number" === i ? jn : "string" === i ? (e = Bt(n)) ? (n = e, qn) : Zn : n instanceof Bt ? qn : n instanceof Date ? function(t, n) {
                        var e = new Date;
                        return n -= t = +t,
                            function(i) {
                                return e.setTime(t + n * i), e
                            }
                    } : Array.isArray(n) ? function(t, n) {
                        var e, i = n ? n.length : 0,
                            r = t ? Math.min(i, t.length) : 0,
                            a = new Array(r),
                            f = new Array(i);
                        for (e = 0; e < r; ++e) a[e] = Wn(t[e], n[e]);
                        for (; e < i; ++e) f[e] = n[e];
                        return function(t) {
                            for (e = 0; e < r; ++e) f[e] = a[e](t);
                            return f
                        }
                    } : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? function(t, n) {
                        var e, i = {},
                            r = {};
                        for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? i[e] = Wn(t[e], n[e]) : r[e] = n[e];
                        return function(t) {
                            for (e in i) r[e] = i[e](t);
                            return r
                        }
                    } : jn)(t, n)
                },
                Jn = function(t, n) {
                    return n -= t = +t,
                        function(e) {
                            return Math.round(t + n * e)
                        }
                },
                Qn = 180 / Math.PI,
                Gn = {
                    translateX: 0,
                    translateY: 0,
                    rotate: 0,
                    skewX: 0,
                    scaleX: 1,
                    scaleY: 1
                },
                Kn = function(t, n, e, i, r, a) {
                    var f, o, c;
                    return (f = Math.sqrt(t * t + n * n)) && (t /= f, n /= f), (c = t * e + n * i) && (e -= t * c, i -= n * c), (o = Math.sqrt(e * e + i * i)) && (e /= o, i /= o, c /= o), t * i < n * e && (t = -t, n = -n, c = -c, f = -f), {
                        translateX: r,
                        translateY: a,
                        rotate: Math.atan2(n, t) * Qn,
                        skewX: Math.atan(c) * Qn,
                        scaleX: f,
                        scaleY: o
                    }
                };

            function te(t, n, e, i) {
                function r(t) {
                    return t.length ? t.pop() + " " : ""
                }
                return function(a, f) {
                    var o = [],
                        c = [];
                    return a = t(a), f = t(f),
                        function(t, i, r, a, f, o) {
                            if (t !== r || i !== a) {
                                var c = f.push("translate(", null, n, null, e);
                                o.push({
                                    i: c - 4,
                                    x: jn(t, r)
                                }, {
                                    i: c - 2,
                                    x: jn(i, a)
                                })
                            } else(r || a) && f.push("translate(" + r + n + a + e)
                        }(a.translateX, a.translateY, f.translateX, f.translateY, o, c),
                        function(t, n, e, a) {
                            t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), a.push({
                                i: e.push(r(e) + "rotate(", null, i) - 2,
                                x: jn(t, n)
                            })) : n && e.push(r(e) + "rotate(" + n + i)
                        }(a.rotate, f.rotate, o, c),
                        function(t, n, e, a) {
                            t !== n ? a.push({
                                i: e.push(r(e) + "skewX(", null, i) - 2,
                                x: jn(t, n)
                            }) : n && e.push(r(e) + "skewX(" + n + i)
                        }(a.skewX, f.skewX, o, c),
                        function(t, n, e, i, a, f) {
                            if (t !== e || n !== i) {
                                var o = a.push(r(a) + "scale(", null, ",", null, ")");
                                f.push({
                                    i: o - 4,
                                    x: jn(t, e)
                                }, {
                                    i: o - 2,
                                    x: jn(n, i)
                                })
                            } else 1 === e && 1 === i || a.push(r(a) + "scale(" + e + "," + i + ")")
                        }(a.scaleX, a.scaleY, f.scaleX, f.scaleY, o, c), a = f = null,
                        function(t) {
                            for (var n, e = -1, i = c.length; ++e < i;) o[(n = c[e]).i] = n.x(t);
                            return o.join("")
                        }
                }
            }
            var ne = te(function(t) {
                    return "none" === t ? Gn : ($n || ($n = document.createElement("DIV"), Xn = document.documentElement, Vn = document.defaultView), $n.style.transform = t, t = Vn.getComputedStyle(Xn.appendChild($n), null).getPropertyValue("transform"), Xn.removeChild($n), t = t.slice(7, -1).split(","), Kn(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
                }, "px, ", "px)", "deg)"),
                ee = te(function(t) {
                    return null == t ? Gn : (Bn || (Bn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Bn.setAttribute("transform", t), (t = Bn.transform.baseVal.consolidate()) ? (t = t.matrix, Kn(t.a, t.b, t.c, t.d, t.e, t.f)) : Gn)
                }, ", ", ")", ")");
            Math.SQRT2;

            function ie(t) {
                return function(n, e) {
                    var i = t((n = nn(n)).h, (e = nn(e)).h),
                        r = Yn(n.s, e.s),
                        a = Yn(n.l, e.l),
                        f = Yn(n.opacity, e.opacity);
                    return function(t) {
                        return n.h = i(t), n.s = r(t), n.l = a(t), n.opacity = f(t), n + ""
                    }
                }
            }
            ie(Rn), ie(Yn);

            function re(t) {
                return function(n, e) {
                    var i = t((n = wn(n)).h, (e = wn(e)).h),
                        r = Yn(n.c, e.c),
                        a = Yn(n.l, e.l),
                        f = Yn(n.opacity, e.opacity);
                    return function(t) {
                        return n.h = i(t), n.c = r(t), n.l = a(t), n.opacity = f(t), n + ""
                    }
                }
            }
            re(Rn), re(Yn);

            function ae(t) {
                return function n(e) {
                    function i(n, i) {
                        var r = t((n = En(n)).h, (i = En(i)).h),
                            a = Yn(n.s, i.s),
                            f = Yn(n.l, i.l),
                            o = Yn(n.opacity, i.opacity);
                        return function(t) {
                            return n.h = r(t), n.s = a(t), n.l = f(Math.pow(t, e)), n.opacity = o(t), n + ""
                        }
                    }
                    return e = +e, i.gamma = n, i
                }(1)
            }
            ae(Rn);
            var fe = ae(Yn);
            var oe, ce, ue = 0,
                se = 0,
                he = 0,
                le = 1e3,
                de = 0,
                _e = 0,
                be = 0,
                pe = "object" == typeof performance && performance.now ? performance : Date,
                ye = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                    setTimeout(t, 17)
                };

            function ve() {
                return _e || (ye(ge), _e = pe.now() + be)
            }

            function ge() {
                _e = 0
            }

            function xe() {
                this._call = this._time = this._next = null
            }

            function me(t, n, e) {
                var i = new xe;
                return i.restart(t, n, e), i
            }

            function we() {
                _e = (de = pe.now()) + be, ue = se = 0;
                try {
                    ! function() {
                        ve(), ++ue;
                        for (var t, n = oe; n;)(t = _e - n._time) >= 0 && n._call.call(null, t), n = n._next;
                        --ue
                    }()
                } finally {
                    ue = 0,
                        function() {
                            var t, n, e = oe,
                                i = 1 / 0;
                            for (; e;) e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : oe = n);
                            ce = t, Ne(i)
                        }(), _e = 0
                }
            }

            function Me() {
                var t = pe.now(),
                    n = t - de;
                n > le && (be -= n, de = t)
            }

            function Ne(t) {
                ue || (se && (se = clearTimeout(se)), t - _e > 24 ? (t < 1 / 0 && (se = setTimeout(we, t - pe.now() - be)), he && (he = clearInterval(he))) : (he || (de = pe.now(), he = setInterval(Me, le)), ue = 1, ye(we)))
            }
            xe.prototype = me.prototype = {
                constructor: xe,
                restart: function(t, n, e) {
                    if ("function" != typeof t) throw new TypeError("callback is not a function");
                    e = (null == e ? ve() : +e) + (null == n ? 0 : +n), this._next || ce === this || (ce ? ce._next = this : oe = this, ce = this), this._call = t, this._time = e, Ne()
                },
                stop: function() {
                    this._call && (this._call = null, this._time = 1 / 0, Ne())
                }
            };
            var Te = function(t, n, e) {
                    var i = new xe;
                    return n = null == n ? 0 : +n, i.restart(function(e) {
                        i.stop(), t(e + n)
                    }, n, e), i
                },
                ke = Y("start", "end", "interrupt"),
                Ae = [],
                Ce = 0,
                Se = 1,
                Ee = 2,
                Ue = 3,
                Le = 4,
                Pe = 5,
                De = 6,
                Re = function(t, n, e, i, r, a) {
                    var f = t.__transition;
                    if (f) {
                        if (e in f) return
                    } else t.__transition = {};
                    ! function(t, n, e) {
                        var i, r = t.__transition;

                        function a(c) {
                            var u, s, h, l;
                            if (e.state !== Se) return o();
                            for (u in r)
                                if ((l = r[u]).name === e.name) {
                                    if (l.state === Ue) return Te(a);
                                    l.state === Le ? (l.state = De, l.timer.stop(), l.on.call("interrupt", t, t.__data__, l.index, l.group), delete r[u]) : +u < n && (l.state = De, l.timer.stop(), delete r[u])
                                } if (Te(function() {
                                    e.state === Ue && (e.state = Le, e.timer.restart(f, e.delay, e.time), f(c))
                                }), e.state = Ee, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Ee) {
                                for (e.state = Ue, i = new Array(h = e.tween.length), u = 0, s = -1; u < h; ++u)(l = e.tween[u].value.call(t, t.__data__, e.index, e.group)) && (i[++s] = l);
                                i.length = s + 1
                            }
                        }

                        function f(n) {
                            for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(o), e.state = Pe, 1), a = -1, f = i.length; ++a < f;) i[a].call(null, r);
                            e.state === Pe && (e.on.call("end", t, t.__data__, e.index, e.group), o())
                        }

                        function o() {
                            for (var i in e.state = De, e.timer.stop(), delete r[n], r) return;
                            delete t.__transition
                        }
                        r[n] = e, e.timer = me(function(t) {
                            e.state = Se, e.timer.restart(a, e.delay, e.time), e.delay <= t && a(t - e.delay)
                        }, 0, e.time)
                    }(t, e, {
                        name: n,
                        index: i,
                        group: r,
                        on: ke,
                        tween: Ae,
                        time: a.time,
                        delay: a.delay,
                        duration: a.duration,
                        ease: a.ease,
                        timer: null,
                        state: Ce
                    })
                };

            function Fe(t, n) {
                var e = qe(t, n);
                if (e.state > Ce) throw new Error("too late; already scheduled");
                return e
            }

            function Ye(t, n) {
                var e = qe(t, n);
                if (e.state > Ee) throw new Error("too late; already started");
                return e
            }

            function qe(t, n) {
                var e = t.__transition;
                if (!e || !(e = e[n])) throw new Error("transition not found");
                return e
            }
            var ze = function(t, n) {
                var e, i, r, a = t.__transition,
                    f = !0;
                if (a) {
                    for (r in n = null == n ? null : n + "", a)(e = a[r]).name === n ? (i = e.state > Ee && e.state < Pe, e.state = De, e.timer.stop(), i && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete a[r]) : f = !1;
                    f && delete t.__transition
                }
            };

            function He(t, n, e) {
                var i = t._id;
                return t.each(function() {
                        var t = Ye(this, i);
                        (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                    }),
                    function(t) {
                        return qe(t, i).value[n]
                    }
            }
            var je = function(t, n) {
                var e;
                return ("number" == typeof n ? jn : n instanceof Bt ? qn : (e = Bt(n)) ? (n = e, qn) : Zn)(t, n)
            };
            var Oe = At.prototype.constructor;
            var Ie = 0;

            function $e(t, n, e, i) {
                this._groups = t, this._parents = n, this._name = e, this._id = i
            }

            function Xe() {
                return ++Ie
            }
            var Ve = At.prototype;

            function Be(t) {
                return +t
            }
            $e.prototype = function(t) {
                return At().transition(t)
            }.prototype = {
                constructor: $e,
                select: function(t) {
                    var n = this._name,
                        e = this._id;
                    "function" != typeof t && (t = I(t));
                    for (var i = this._groups, r = i.length, a = new Array(r), f = 0; f < r; ++f)
                        for (var o, c, u = i[f], s = u.length, h = a[f] = new Array(s), l = 0; l < s; ++l)(o = u[l]) && (c = t.call(o, o.__data__, l, u)) && ("__data__" in o && (c.__data__ = o.__data__), h[l] = c, Re(h[l], n, e, l, h, qe(o, e)));
                    return new $e(a, this._parents, n, e)
                },
                selectAll: function(t) {
                    var n = this._name,
                        e = this._id;
                    "function" != typeof t && (t = X(t));
                    for (var i = this._groups, r = i.length, a = [], f = [], o = 0; o < r; ++o)
                        for (var c, u = i[o], s = u.length, h = 0; h < s; ++h)
                            if (c = u[h]) {
                                for (var l, d = t.call(c, c.__data__, h, u), _ = qe(c, e), b = 0, p = d.length; b < p; ++b)(l = d[b]) && Re(l, n, e, b, d, _);
                                a.push(d), f.push(c)
                            } return new $e(a, f, n, e)
                },
                filter: function(t) {
                    "function" != typeof t && (t = W(t));
                    for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
                        for (var a, f = n[r], o = f.length, c = i[r] = [], u = 0; u < o; ++u)(a = f[u]) && t.call(a, a.__data__, u, f) && c.push(a);
                    return new $e(i, this._parents, this._name, this._id)
                },
                merge: function(t) {
                    if (t._id !== this._id) throw new Error;
                    for (var n = this._groups, e = t._groups, i = n.length, r = e.length, a = Math.min(i, r), f = new Array(i), o = 0; o < a; ++o)
                        for (var c, u = n[o], s = e[o], h = u.length, l = f[o] = new Array(h), d = 0; d < h; ++d)(c = u[d] || s[d]) && (l[d] = c);
                    for (; o < i; ++o) f[o] = n[o];
                    return new $e(f, this._parents, this._name, this._id)
                },
                selection: function() {
                    return new Oe(this._groups, this._parents)
                },
                transition: function() {
                    for (var t = this._name, n = this._id, e = Xe(), i = this._groups, r = i.length, a = 0; a < r; ++a)
                        for (var f, o = i[a], c = o.length, u = 0; u < c; ++u)
                            if (f = o[u]) {
                                var s = qe(f, n);
                                Re(f, t, e, u, o, {
                                    time: s.time + s.delay + s.duration,
                                    delay: 0,
                                    duration: s.duration,
                                    ease: s.ease
                                })
                            } return new $e(i, this._parents, t, e)
                },
                call: Ve.call,
                nodes: Ve.nodes,
                node: Ve.node,
                size: Ve.size,
                empty: Ve.empty,
                each: Ve.each,
                on: function(t, n) {
                    var e = this._id;
                    return arguments.length < 2 ? qe(this.node(), e).on.on(t) : this.each(function(t, n, e) {
                        var i, r, a = function(t) {
                            return (t + "").trim().split(/^|\s+/).every(function(t) {
                                var n = t.indexOf(".");
                                return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                            })
                        }(n) ? Fe : Ye;
                        return function() {
                            var f = a(this, t),
                                o = f.on;
                            o !== i && (r = (i = o).copy()).on(n, e), f.on = r
                        }
                    }(e, t, n))
                },
                attr: function(t, n) {
                    var e = H(t),
                        i = "transform" === e ? ee : je;
                    return this.attrTween(t, "function" == typeof n ? (e.local ? function(t, n, e) {
                        var i, r, a;
                        return function() {
                            var f, o = e(this);
                            if (null != o) return (f = this.getAttributeNS(t.space, t.local)) === o ? null : f === i && o === r ? a : a = n(i = f, r = o);
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function(t, n, e) {
                        var i, r, a;
                        return function() {
                            var f, o = e(this);
                            if (null != o) return (f = this.getAttribute(t)) === o ? null : f === i && o === r ? a : a = n(i = f, r = o);
                            this.removeAttribute(t)
                        }
                    })(e, i, He(this, "attr." + t, n)) : null == n ? (e.local ? function(t) {
                        return function() {
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function(t) {
                        return function() {
                            this.removeAttribute(t)
                        }
                    })(e) : (e.local ? function(t, n, e) {
                        var i, r;
                        return function() {
                            var a = this.getAttributeNS(t.space, t.local);
                            return a === e ? null : a === i ? r : r = n(i = a, e)
                        }
                    } : function(t, n, e) {
                        var i, r;
                        return function() {
                            var a = this.getAttribute(t);
                            return a === e ? null : a === i ? r : r = n(i = a, e)
                        }
                    })(e, i, n + ""))
                },
                attrTween: function(t, n) {
                    var e = "attr." + t;
                    if (arguments.length < 2) return (e = this.tween(e)) && e._value;
                    if (null == n) return this.tween(e, null);
                    if ("function" != typeof n) throw new Error;
                    var i = H(t);
                    return this.tween(e, (i.local ? function(t, n) {
                        function e() {
                            var e = this,
                                i = n.apply(e, arguments);
                            return i && function(n) {
                                e.setAttributeNS(t.space, t.local, i(n))
                            }
                        }
                        return e._value = n, e
                    } : function(t, n) {
                        function e() {
                            var e = this,
                                i = n.apply(e, arguments);
                            return i && function(n) {
                                e.setAttribute(t, i(n))
                            }
                        }
                        return e._value = n, e
                    })(i, n))
                },
                style: function(t, n, e) {
                    var i = "transform" == (t += "") ? ne : je;
                    return null == n ? this.styleTween(t, function(t, n) {
                        var e, i, r;
                        return function() {
                            var a = it(this, t),
                                f = (this.style.removeProperty(t), it(this, t));
                            return a === f ? null : a === e && f === i ? r : r = n(e = a, i = f)
                        }
                    }(t, i)).on("end.style." + t, function(t) {
                        return function() {
                            this.style.removeProperty(t)
                        }
                    }(t)) : this.styleTween(t, "function" == typeof n ? function(t, n, e) {
                        var i, r, a;
                        return function() {
                            var f = it(this, t),
                                o = e(this);
                            return null == o && (this.style.removeProperty(t), o = it(this, t)), f === o ? null : f === i && o === r ? a : a = n(i = f, r = o)
                        }
                    }(t, i, He(this, "style." + t, n)) : function(t, n, e) {
                        var i, r;
                        return function() {
                            var a = it(this, t);
                            return a === e ? null : a === i ? r : r = n(i = a, e)
                        }
                    }(t, i, n + ""), e)
                },
                styleTween: function(t, n, e) {
                    var i = "style." + (t += "");
                    if (arguments.length < 2) return (i = this.tween(i)) && i._value;
                    if (null == n) return this.tween(i, null);
                    if ("function" != typeof n) throw new Error;
                    return this.tween(i, function(t, n, e) {
                        function i() {
                            var i = this,
                                r = n.apply(i, arguments);
                            return r && function(n) {
                                i.style.setProperty(t, r(n), e)
                            }
                        }
                        return i._value = n, i
                    }(t, n, null == e ? "" : e))
                },
                text: function(t) {
                    return this.tween("text", "function" == typeof t ? function(t) {
                        return function() {
                            var n = t(this);
                            this.textContent = null == n ? "" : n
                        }
                    }(He(this, "text", t)) : function(t) {
                        return function() {
                            this.textContent = t
                        }
                    }(null == t ? "" : t + ""))
                },
                remove: function() {
                    return this.on("end.remove", (t = this._id, function() {
                        var n = this.parentNode;
                        for (var e in this.__transition)
                            if (+e !== t) return;
                        n && n.removeChild(this)
                    }));
                    var t
                },
                tween: function(t, n) {
                    var e = this._id;
                    if (t += "", arguments.length < 2) {
                        for (var i, r = qe(this.node(), e).tween, a = 0, f = r.length; a < f; ++a)
                            if ((i = r[a]).name === t) return i.value;
                        return null
                    }
                    return this.each((null == n ? function(t, n) {
                        var e, i;
                        return function() {
                            var r = Ye(this, t),
                                a = r.tween;
                            if (a !== e)
                                for (var f = 0, o = (i = e = a).length; f < o; ++f)
                                    if (i[f].name === n) {
                                        (i = i.slice()).splice(f, 1);
                                        break
                                    } r.tween = i
                        }
                    } : function(t, n, e) {
                        var i, r;
                        if ("function" != typeof e) throw new Error;
                        return function() {
                            var a = Ye(this, t),
                                f = a.tween;
                            if (f !== i) {
                                r = (i = f).slice();
                                for (var o = {
                                        name: n,
                                        value: e
                                    }, c = 0, u = r.length; c < u; ++c)
                                    if (r[c].name === n) {
                                        r[c] = o;
                                        break
                                    } c === u && r.push(o)
                            }
                            a.tween = r
                        }
                    })(e, t, n))
                },
                delay: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(("function" == typeof t ? function(t, n) {
                        return function() {
                            Fe(this, t).delay = +n.apply(this, arguments)
                        }
                    } : function(t, n) {
                        return n = +n,
                            function() {
                                Fe(this, t).delay = n
                            }
                    })(n, t)) : qe(this.node(), n).delay
                },
                duration: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(("function" == typeof t ? function(t, n) {
                        return function() {
                            Ye(this, t).duration = +n.apply(this, arguments)
                        }
                    } : function(t, n) {
                        return n = +n,
                            function() {
                                Ye(this, t).duration = n
                            }
                    })(n, t)) : qe(this.node(), n).duration
                },
                ease: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(function(t, n) {
                        if ("function" != typeof n) throw new Error;
                        return function() {
                            Ye(this, t).ease = n
                        }
                    }(n, t)) : qe(this.node(), n).ease
                }
            };
            (function t(n) {
                function e(t) {
                    return Math.pow(t, n)
                }
                return n = +n, e.exponent = t, e
            })(3),
            function t(n) {
                function e(t) {
                    return 1 - Math.pow(1 - t, n)
                }
                return n = +n, e.exponent = t, e
            }(3),
            function t(n) {
                function e(t) {
                    return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
                }
                return n = +n, e.exponent = t, e
            }(3), Math.PI;
            (function t(n) {
                function e(t) {
                    return t * t * ((n + 1) * t - n)
                }
                return n = +n, e.overshoot = t, e
            })(1.70158),
            function t(n) {
                function e(t) {
                    return --t * t * ((n + 1) * t + n) + 1
                }
                return n = +n, e.overshoot = t, e
            }(1.70158),
            function t(n) {
                function e(t) {
                    return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
                }
                return n = +n, e.overshoot = t, e
            }(1.70158);
            var Ze = 2 * Math.PI,
                We = (function t(n, e) {
                    var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ze);

                    function r(t) {
                        return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e)
                    }
                    return r.amplitude = function(n) {
                        return t(n, e * Ze)
                    }, r.period = function(e) {
                        return t(n, e)
                    }, r
                }(1, .3), function t(n, e) {
                    var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ze);

                    function r(t) {
                        return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e)
                    }
                    return r.amplitude = function(n) {
                        return t(n, e * Ze)
                    }, r.period = function(e) {
                        return t(n, e)
                    }, r
                }(1, .3), function t(n, e) {
                    var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ze);

                    function r(t) {
                        return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2
                    }
                    return r.amplitude = function(n) {
                        return t(n, e * Ze)
                    }, r.period = function(e) {
                        return t(n, e)
                    }, r
                }(1, .3), {
                    time: null,
                    delay: 0,
                    duration: 250,
                    ease: function(t) {
                        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
                    }
                });

            function Je(t, n) {
                for (var e; !(e = t.__transition) || !(e = e[n]);)
                    if (!(t = t.parentNode)) return We.time = ve(), We;
                return e
            }
            At.prototype.interrupt = function(t) {
                return this.each(function() {
                    ze(this, t)
                })
            }, At.prototype.transition = function(t) {
                var n, e;
                t instanceof $e ? (n = t._id, t = t._name) : (n = Xe(), (e = We).time = ve(), t = null == t ? null : t + "");
                for (var i = this._groups, r = i.length, a = 0; a < r; ++a)
                    for (var f, o = i[a], c = o.length, u = 0; u < c; ++u)(f = o[u]) && Re(f, t, n, u, o, e || Je(f, n));
                return new $e(i, this._parents, t, n)
            };
            ["e", "w"].map(Qe), ["n", "s"].map(Qe), ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Qe);

            function Qe(t) {
                return {
                    type: t
                }
            }
            Math.cos, Math.sin, Math.PI, Math.max;
            Array.prototype.slice;
            var Ge = Math.PI,
                Ke = 2 * Ge,
                ti = Ke - 1e-6;

            function ni() {
                this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
            }

            function ei() {
                return new ni
            }
            ni.prototype = ei.prototype = {
                constructor: ni,
                moveTo: function(t, n) {
                    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
                },
                closePath: function() {
                    null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
                },
                lineTo: function(t, n) {
                    this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
                },
                quadraticCurveTo: function(t, n, e, i) {
                    this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +i)
                },
                bezierCurveTo: function(t, n, e, i, r, a) {
                    this._ += "C" + +t + "," + +n + "," + +e + "," + +i + "," + (this._x1 = +r) + "," + (this._y1 = +a)
                },
                arcTo: function(t, n, e, i, r) {
                    t = +t, n = +n, e = +e, i = +i, r = +r;
                    var a = this._x1,
                        f = this._y1,
                        o = e - t,
                        c = i - n,
                        u = a - t,
                        s = f - n,
                        h = u * u + s * s;
                    if (r < 0) throw new Error("negative radius: " + r);
                    if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
                    else if (h > 1e-6)
                        if (Math.abs(s * o - c * u) > 1e-6 && r) {
                            var l = e - a,
                                d = i - f,
                                _ = o * o + c * c,
                                b = l * l + d * d,
                                p = Math.sqrt(_),
                                y = Math.sqrt(h),
                                v = r * Math.tan((Ge - Math.acos((_ + h - b) / (2 * p * y))) / 2),
                                g = v / y,
                                x = v / p;
                            Math.abs(g - 1) > 1e-6 && (this._ += "L" + (t + g * u) + "," + (n + g * s)), this._ += "A" + r + "," + r + ",0,0," + +(s * l > u * d) + "," + (this._x1 = t + x * o) + "," + (this._y1 = n + x * c)
                        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
                    else;
                },
                arc: function(t, n, e, i, r, a) {
                    t = +t, n = +n;
                    var f = (e = +e) * Math.cos(i),
                        o = e * Math.sin(i),
                        c = t + f,
                        u = n + o,
                        s = 1 ^ a,
                        h = a ? i - r : r - i;
                    if (e < 0) throw new Error("negative radius: " + e);
                    null === this._x1 ? this._ += "M" + c + "," + u : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - u) > 1e-6) && (this._ += "L" + c + "," + u), e && (h < 0 && (h = h % Ke + Ke), h > ti ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - f) + "," + (n - o) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = u) : h > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(h >= Ge) + "," + s + "," + (this._x1 = t + e * Math.cos(r)) + "," + (this._y1 = n + e * Math.sin(r))))
                },
                rect: function(t, n, e, i) {
                    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +i + "h" + -e + "Z"
                },
                toString: function() {
                    return this._
                }
            };
            var ii = ei;

            function ri() {}

            function ai(t, n) {
                var e = new ri;
                if (t instanceof ri) t.each(function(t, n) {
                    e.set(n, t)
                });
                else if (Array.isArray(t)) {
                    var i, r = -1,
                        a = t.length;
                    if (null == n)
                        for (; ++r < a;) e.set(r, t[r]);
                    else
                        for (; ++r < a;) e.set(n(i = t[r], r, t), i)
                } else if (t)
                    for (var f in t) e.set(f, t[f]);
                return e
            }
            ri.prototype = ai.prototype = {
                constructor: ri,
                has: function(t) {
                    return "$" + t in this
                },
                get: function(t) {
                    return this["$" + t]
                },
                set: function(t, n) {
                    return this["$" + t] = n, this
                },
                remove: function(t) {
                    var n = "$" + t;
                    return n in this && delete this[n]
                },
                clear: function() {
                    for (var t in this) "$" === t[0] && delete this[t]
                },
                keys: function() {
                    var t = [];
                    for (var n in this) "$" === n[0] && t.push(n.slice(1));
                    return t
                },
                values: function() {
                    var t = [];
                    for (var n in this) "$" === n[0] && t.push(this[n]);
                    return t
                },
                entries: function() {
                    var t = [];
                    for (var n in this) "$" === n[0] && t.push({
                        key: n.slice(1),
                        value: this[n]
                    });
                    return t
                },
                size: function() {
                    var t = 0;
                    for (var n in this) "$" === n[0] && ++t;
                    return t
                },
                empty: function() {
                    for (var t in this)
                        if ("$" === t[0]) return !1;
                    return !0
                },
                each: function(t) {
                    for (var n in this) "$" === n[0] && t(this[n], n.slice(1), this)
                }
            };
            var fi = ai;

            function oi() {}
            var ci = fi.prototype;

            function ui(t, n) {
                var e = new oi;
                if (t instanceof oi) t.each(function(t) {
                    e.add(t)
                });
                else if (t) {
                    var i = -1,
                        r = t.length;
                    if (null == n)
                        for (; ++i < r;) e.add(t[i]);
                    else
                        for (; ++i < r;) e.add(n(t[i], i, t))
                }
                return e
            }
            oi.prototype = ui.prototype = {
                constructor: oi,
                has: ci.has,
                add: function(t) {
                    return this["$" + (t += "")] = t, this
                },
                remove: ci.remove,
                clear: ci.clear,
                values: ci.keys,
                size: ci.size,
                empty: ci.empty,
                each: ci.each
            };
            Array.prototype.slice;
            var si = {},
                hi = {},
                li = 34,
                di = 10,
                _i = 13;

            function bi(t) {
                return new Function("d", "return {" + t.map(function(t, n) {
                    return JSON.stringify(t) + ": d[" + n + "]"
                }).join(",") + "}")
            }
            var pi = function(t) {
                    var n = new RegExp('["' + t + "\n\r]"),
                        e = t.charCodeAt(0);

                    function i(t, n) {
                        var i, r = [],
                            a = t.length,
                            f = 0,
                            o = 0,
                            c = a <= 0,
                            u = !1;

                        function s() {
                            if (c) return hi;
                            if (u) return u = !1, si;
                            var n, i, r = f;
                            if (t.charCodeAt(r) === li) {
                                for (; f++ < a && t.charCodeAt(f) !== li || t.charCodeAt(++f) === li;);
                                return (n = f) >= a ? c = !0 : (i = t.charCodeAt(f++)) === di ? u = !0 : i === _i && (u = !0, t.charCodeAt(f) === di && ++f), t.slice(r + 1, n - 1).replace(/""/g, '"')
                            }
                            for (; f < a;) {
                                if ((i = t.charCodeAt(n = f++)) === di) u = !0;
                                else if (i === _i) u = !0, t.charCodeAt(f) === di && ++f;
                                else if (i !== e) continue;
                                return t.slice(r, n)
                            }
                            return c = !0, t.slice(r, a)
                        }
                        for (t.charCodeAt(a - 1) === di && --a, t.charCodeAt(a - 1) === _i && --a;
                            (i = s()) !== hi;) {
                            for (var h = []; i !== si && i !== hi;) h.push(i), i = s();
                            n && null == (h = n(h, o++)) || r.push(h)
                        }
                        return r
                    }

                    function r(n) {
                        return n.map(a).join(t)
                    }

                    function a(t) {
                        return null == t ? "" : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
                    }
                    return {
                        parse: function(t, n) {
                            var e, r, a = i(t, function(t, i) {
                                if (e) return e(t, i - 1);
                                r = t, e = n ? function(t, n) {
                                    var e = bi(t);
                                    return function(i, r) {
                                        return n(e(i), r, t)
                                    }
                                }(t, n) : bi(t)
                            });
                            return a.columns = r || [], a
                        },
                        parseRows: i,
                        format: function(n, e) {
                            return null == e && (e = function(t) {
                                var n = Object.create(null),
                                    e = [];
                                return t.forEach(function(t) {
                                    for (var i in t) i in n || e.push(n[i] = i)
                                }), e
                            }(n)), [e.map(a).join(t)].concat(n.map(function(n) {
                                return e.map(function(t) {
                                    return a(n[t])
                                }).join(t)
                            })).join("\n")
                        },
                        formatRows: function(t) {
                            return t.map(r).join("\n")
                        }
                    }
                },
                yi = pi(","),
                vi = yi.parse,
                gi = (yi.parseRows, yi.format, yi.formatRows, pi("\t")),
                xi = gi.parse;
            gi.parseRows, gi.format, gi.formatRows;

            function mi(t) {
                if (!t.ok) throw new Error(t.status + " " + t.statusText);
                return t.text()
            }
            var wi = function(t, n) {
                return fetch(t, n).then(mi)
            };

            function Mi(t) {
                return function(n, e, i) {
                    return 2 === arguments.length && "function" == typeof e && (i = e, e = void 0), wi(n, e).then(function(n) {
                        return t(n, i)
                    })
                }
            }
            Mi(vi), Mi(xi);

            function Ni(t) {
                if (!t.ok) throw new Error(t.status + " " + t.statusText);
                return t.json()
            }
            var Ti = function(t, n) {
                return fetch(t, n).then(Ni)
            };

            function ki(t) {
                return function(n, e) {
                    return wi(n, e).then(function(n) {
                        return (new DOMParser).parseFromString(n, t)
                    })
                }
            }
            ki("application/xml"), ki("text/html"), ki("image/svg+xml");

            function Ai(t, n, e, i) {
                if (isNaN(n) || isNaN(e)) return t;
                var r, a, f, o, c, u, s, h, l, d = t._root,
                    _ = {
                        data: i
                    },
                    b = t._x0,
                    p = t._y0,
                    y = t._x1,
                    v = t._y1;
                if (!d) return t._root = _, t;
                for (; d.length;)
                    if ((u = n >= (a = (b + y) / 2)) ? b = a : y = a, (s = e >= (f = (p + v) / 2)) ? p = f : v = f, r = d, !(d = d[h = s << 1 | u])) return r[h] = _, t;
                if (o = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === o && e === c) return _.next = d, r ? r[h] = _ : t._root = _, t;
                do {
                    r = r ? r[h] = new Array(4) : t._root = new Array(4), (u = n >= (a = (b + y) / 2)) ? b = a : y = a, (s = e >= (f = (p + v) / 2)) ? p = f : v = f
                } while ((h = s << 1 | u) == (l = (c >= f) << 1 | o >= a));
                return r[l] = d, r[h] = _, t
            }
            var Ci = function(t, n, e, i, r) {
                this.node = t, this.x0 = n, this.y0 = e, this.x1 = i, this.y1 = r
            };

            function Si(t) {
                return t[0]
            }

            function Ei(t) {
                return t[1]
            }

            function Ui(t, n, e) {
                var i = new Li(null == n ? Si : n, null == e ? Ei : e, NaN, NaN, NaN, NaN);
                return null == t ? i : i.addAll(t)
            }

            function Li(t, n, e, i, r, a) {
                this._x = t, this._y = n, this._x0 = e, this._y0 = i, this._x1 = r, this._y1 = a, this._root = void 0
            }

            function Pi(t) {
                for (var n = {
                        data: t.data
                    }, e = n; t = t.next;) e = e.next = {
                    data: t.data
                };
                return n
            }
            var Di = Ui.prototype = Li.prototype;
            Di.copy = function() {
                var t, n, e = new Li(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
                    i = this._root;
                if (!i) return e;
                if (!i.length) return e._root = Pi(i), e;
                for (t = [{
                        source: i,
                        target: e._root = new Array(4)
                    }]; i = t.pop();)
                    for (var r = 0; r < 4; ++r)(n = i.source[r]) && (n.length ? t.push({
                        source: n,
                        target: i.target[r] = new Array(4)
                    }) : i.target[r] = Pi(n));
                return e
            }, Di.add = function(t) {
                var n = +this._x.call(null, t),
                    e = +this._y.call(null, t);
                return Ai(this.cover(n, e), n, e, t)
            }, Di.addAll = function(t) {
                var n, e, i, r, a = t.length,
                    f = new Array(a),
                    o = new Array(a),
                    c = 1 / 0,
                    u = 1 / 0,
                    s = -1 / 0,
                    h = -1 / 0;
                for (e = 0; e < a; ++e) isNaN(i = +this._x.call(null, n = t[e])) || isNaN(r = +this._y.call(null, n)) || (f[e] = i, o[e] = r, i < c && (c = i), i > s && (s = i), r < u && (u = r), r > h && (h = r));
                for (s < c && (c = this._x0, s = this._x1), h < u && (u = this._y0, h = this._y1), this.cover(c, u).cover(s, h), e = 0; e < a; ++e) Ai(this, f[e], o[e], t[e]);
                return this
            }, Di.cover = function(t, n) {
                if (isNaN(t = +t) || isNaN(n = +n)) return this;
                var e = this._x0,
                    i = this._y0,
                    r = this._x1,
                    a = this._y1;
                if (isNaN(e)) r = (e = Math.floor(t)) + 1, a = (i = Math.floor(n)) + 1;
                else {
                    if (!(e > t || t > r || i > n || n > a)) return this;
                    var f, o, c = r - e,
                        u = this._root;
                    switch (o = (n < (i + a) / 2) << 1 | t < (e + r) / 2) {
                        case 0:
                            do {
                                (f = new Array(4))[o] = u, u = f
                            } while (a = i + (c *= 2), t > (r = e + c) || n > a);
                            break;
                        case 1:
                            do {
                                (f = new Array(4))[o] = u, u = f
                            } while (a = i + (c *= 2), (e = r - c) > t || n > a);
                            break;
                        case 2:
                            do {
                                (f = new Array(4))[o] = u, u = f
                            } while (i = a - (c *= 2), t > (r = e + c) || i > n);
                            break;
                        case 3:
                            do {
                                (f = new Array(4))[o] = u, u = f
                            } while (i = a - (c *= 2), (e = r - c) > t || i > n)
                    }
                    this._root && this._root.length && (this._root = u)
                }
                return this._x0 = e, this._y0 = i, this._x1 = r, this._y1 = a, this
            }, Di.data = function() {
                var t = [];
                return this.visit(function(n) {
                    if (!n.length)
                        do {
                            t.push(n.data)
                        } while (n = n.next)
                }), t
            }, Di.extent = function(t) {
                return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
                    [this._x0, this._y0],
                    [this._x1, this._y1]
                ]
            }, Di.find = function(t, n, e) {
                var i, r, a, f, o, c, u, s = this._x0,
                    h = this._y0,
                    l = this._x1,
                    d = this._y1,
                    _ = [],
                    b = this._root;
                for (b && _.push(new Ci(b, s, h, l, d)), null == e ? e = 1 / 0 : (s = t - e, h = n - e, l = t + e, d = n + e, e *= e); c = _.pop();)
                    if (!(!(b = c.node) || (r = c.x0) > l || (a = c.y0) > d || (f = c.x1) < s || (o = c.y1) < h))
                        if (b.length) {
                            var p = (r + f) / 2,
                                y = (a + o) / 2;
                            _.push(new Ci(b[3], p, y, f, o), new Ci(b[2], r, y, p, o), new Ci(b[1], p, a, f, y), new Ci(b[0], r, a, p, y)), (u = (n >= y) << 1 | t >= p) && (c = _[_.length - 1], _[_.length - 1] = _[_.length - 1 - u], _[_.length - 1 - u] = c)
                        } else {
                            var v = t - +this._x.call(null, b.data),
                                g = n - +this._y.call(null, b.data),
                                x = v * v + g * g;
                            if (x < e) {
                                var m = Math.sqrt(e = x);
                                s = t - m, h = n - m, l = t + m, d = n + m, i = b.data
                            }
                        } return i
            }, Di.remove = function(t) {
                if (isNaN(a = +this._x.call(null, t)) || isNaN(f = +this._y.call(null, t))) return this;
                var n, e, i, r, a, f, o, c, u, s, h, l, d = this._root,
                    _ = this._x0,
                    b = this._y0,
                    p = this._x1,
                    y = this._y1;
                if (!d) return this;
                if (d.length)
                    for (;;) {
                        if ((u = a >= (o = (_ + p) / 2)) ? _ = o : p = o, (s = f >= (c = (b + y) / 2)) ? b = c : y = c, n = d, !(d = d[h = s << 1 | u])) return this;
                        if (!d.length) break;
                        (n[h + 1 & 3] || n[h + 2 & 3] || n[h + 3 & 3]) && (e = n, l = h)
                    }
                for (; d.data !== t;)
                    if (i = d, !(d = d.next)) return this;
                return (r = d.next) && delete d.next, i ? (r ? i.next = r : delete i.next, this) : n ? (r ? n[h] = r : delete n[h], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[l] = d : this._root = d), this) : (this._root = r, this)
            }, Di.removeAll = function(t) {
                for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
                return this
            }, Di.root = function() {
                return this._root
            }, Di.size = function() {
                var t = 0;
                return this.visit(function(n) {
                    if (!n.length)
                        do {
                            ++t
                        } while (n = n.next)
                }), t
            }, Di.visit = function(t) {
                var n, e, i, r, a, f, o = [],
                    c = this._root;
                for (c && o.push(new Ci(c, this._x0, this._y0, this._x1, this._y1)); n = o.pop();)
                    if (!t(c = n.node, i = n.x0, r = n.y0, a = n.x1, f = n.y1) && c.length) {
                        var u = (i + a) / 2,
                            s = (r + f) / 2;
                        (e = c[3]) && o.push(new Ci(e, u, s, a, f)), (e = c[2]) && o.push(new Ci(e, i, s, u, f)), (e = c[1]) && o.push(new Ci(e, u, r, a, s)), (e = c[0]) && o.push(new Ci(e, i, r, u, s))
                    } return this
            }, Di.visitAfter = function(t) {
                var n, e = [],
                    i = [];
                for (this._root && e.push(new Ci(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
                    var r = n.node;
                    if (r.length) {
                        var a, f = n.x0,
                            o = n.y0,
                            c = n.x1,
                            u = n.y1,
                            s = (f + c) / 2,
                            h = (o + u) / 2;
                        (a = r[0]) && e.push(new Ci(a, f, o, s, h)), (a = r[1]) && e.push(new Ci(a, s, o, c, h)), (a = r[2]) && e.push(new Ci(a, f, h, s, u)), (a = r[3]) && e.push(new Ci(a, s, h, c, u))
                    }
                    i.push(n)
                }
                for (; n = i.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
                return this
            }, Di.x = function(t) {
                return arguments.length ? (this._x = t, this) : this._x
            }, Di.y = function(t) {
                return arguments.length ? (this._y = t, this) : this._y
            };
            Math.PI, Math.sqrt(5);
            var Ri = function(t, n) {
                    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
                    var e, i = t.slice(0, e);
                    return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(e + 1)]
                },
                Fi = function(t) {
                    return (t = Ri(Math.abs(t))) ? t[1] : NaN
                },
                Yi = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

            function qi(t) {
                return new zi(t)
            }

            function zi(t) {
                if (!(n = Yi.exec(t))) throw new Error("invalid format: " + t);
                var n;
                this.fill = n[1] || " ", this.align = n[2] || ">", this.sign = n[3] || "-", this.symbol = n[4] || "", this.zero = !!n[5], this.width = n[6] && +n[6], this.comma = !!n[7], this.precision = n[8] && +n[8].slice(1), this.trim = !!n[9], this.type = n[10] || ""
            }
            qi.prototype = zi.prototype, zi.prototype.toString = function() {
                return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
            };
            var Hi, ji, Oi, Ii, $i = function(t) {
                    t: for (var n, e = t.length, i = 1, r = -1; i < e; ++i) switch (t[i]) {
                        case ".":
                            r = n = i;
                            break;
                        case "0":
                            0 === r && (r = i), n = i;
                            break;
                        default:
                            if (r > 0) {
                                if (!+t[i]) break t;
                                r = 0
                            }
                    }
                    return r > 0 ? t.slice(0, r) + t.slice(n + 1) : t
                },
                Xi = function(t, n) {
                    var e = Ri(t, n);
                    if (!e) return t + "";
                    var i = e[0],
                        r = e[1];
                    return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0")
                },
                Vi = {
                    "%": function(t, n) {
                        return (100 * t).toFixed(n)
                    },
                    b: function(t) {
                        return Math.round(t).toString(2)
                    },
                    c: function(t) {
                        return t + ""
                    },
                    d: function(t) {
                        return Math.round(t).toString(10)
                    },
                    e: function(t, n) {
                        return t.toExponential(n)
                    },
                    f: function(t, n) {
                        return t.toFixed(n)
                    },
                    g: function(t, n) {
                        return t.toPrecision(n)
                    },
                    o: function(t) {
                        return Math.round(t).toString(8)
                    },
                    p: function(t, n) {
                        return Xi(100 * t, n)
                    },
                    r: Xi,
                    s: function(t, n) {
                        var e = Ri(t, n);
                        if (!e) return t + "";
                        var i = e[0],
                            r = e[1],
                            a = r - (Hi = 3 * Math.max(-8, Math.min(8, Math.floor(r / 3)))) + 1,
                            f = i.length;
                        return a === f ? i : a > f ? i + new Array(a - f + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + Ri(t, Math.max(0, n + a - 1))[0]
                    },
                    X: function(t) {
                        return Math.round(t).toString(16).toUpperCase()
                    },
                    x: function(t) {
                        return Math.round(t).toString(16)
                    }
                },
                Bi = function(t) {
                    return t
                },
                Zi = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
            ji = function(t) {
                var n, e, i = t.grouping && t.thousands ? (n = t.grouping, e = t.thousands, function(t, i) {
                        for (var r = t.length, a = [], f = 0, o = n[0], c = 0; r > 0 && o > 0 && (c + o + 1 > i && (o = Math.max(1, i - c)), a.push(t.substring(r -= o, r + o)), !((c += o + 1) > i));) o = n[f = (f + 1) % n.length];
                        return a.reverse().join(e)
                    }) : Bi,
                    r = t.currency,
                    a = t.decimal,
                    f = t.numerals ? function(t) {
                        return function(n) {
                            return n.replace(/[0-9]/g, function(n) {
                                return t[+n]
                            })
                        }
                    }(t.numerals) : Bi,
                    o = t.percent || "%";

                function c(t) {
                    var n = (t = qi(t)).fill,
                        e = t.align,
                        c = t.sign,
                        u = t.symbol,
                        s = t.zero,
                        h = t.width,
                        l = t.comma,
                        d = t.precision,
                        _ = t.trim,
                        b = t.type;
                    "n" === b ? (l = !0, b = "g") : Vi[b] || (null == d && (d = 12), _ = !0, b = "g"), (s || "0" === n && "=" === e) && (s = !0, n = "0", e = "=");
                    var p = "$" === u ? r[0] : "#" === u && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "",
                        y = "$" === u ? r[1] : /[%p]/.test(b) ? o : "",
                        v = Vi[b],
                        g = /[defgprs%]/.test(b);

                    function x(t) {
                        var r, o, u, x = p,
                            m = y;
                        if ("c" === b) m = v(t) + m, t = "";
                        else {
                            var w = (t = +t) < 0;
                            if (t = v(Math.abs(t), d), _ && (t = $i(t)), w && 0 == +t && (w = !1), x = (w ? "(" === c ? c : "-" : "-" === c || "(" === c ? "" : c) + x, m = ("s" === b ? Zi[8 + Hi / 3] : "") + m + (w && "(" === c ? ")" : ""), g)
                                for (r = -1, o = t.length; ++r < o;)
                                    if (48 > (u = t.charCodeAt(r)) || u > 57) {
                                        m = (46 === u ? a + t.slice(r + 1) : t.slice(r)) + m, t = t.slice(0, r);
                                        break
                                    }
                        }
                        l && !s && (t = i(t, 1 / 0));
                        var M = x.length + t.length + m.length,
                            N = M < h ? new Array(h - M + 1).join(n) : "";
                        switch (l && s && (t = i(N + t, N.length ? h - m.length : 1 / 0), N = ""), e) {
                            case "<":
                                t = x + t + m + N;
                                break;
                            case "=":
                                t = x + N + t + m;
                                break;
                            case "^":
                                t = N.slice(0, M = N.length >> 1) + x + t + m + N.slice(M);
                                break;
                            default:
                                t = N + x + t + m
                        }
                        return f(t)
                    }
                    return d = null == d ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), x.toString = function() {
                        return t + ""
                    }, x
                }
                return {
                    format: c,
                    formatPrefix: function(t, n) {
                        var e = c(((t = qi(t)).type = "f", t)),
                            i = 3 * Math.max(-8, Math.min(8, Math.floor(Fi(n) / 3))),
                            r = Math.pow(10, -i),
                            a = Zi[8 + i / 3];
                        return function(t) {
                            return e(r * t) + a
                        }
                    }
                }
            }({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""]
            }), Oi = ji.format, Ii = ji.formatPrefix;
            var Wi = function() {
                return new Ji
            };

            function Ji() {
                this.reset()
            }
            Ji.prototype = {
                constructor: Ji,
                reset: function() {
                    this.s = this.t = 0
                },
                add: function(t) {
                    Gi(Qi, t, this.t), Gi(this, Qi.s, this.s), this.s ? this.t += Qi.t : this.s = Qi.t
                },
                valueOf: function() {
                    return this.s
                }
            };
            var Qi = new Ji;

            function Gi(t, n, e) {
                var i = t.s = n + e,
                    r = i - n,
                    a = i - r;
                t.t = n - a + (e - r)
            }
            var Ki = 1e-6,
                tr = Math.PI,
                nr = tr / 2,
                er = tr / 4,
                ir = 2 * tr,
                rr = tr / 180,
                ar = Math.abs,
                fr = Math.atan,
                or = Math.atan2,
                cr = Math.cos,
                ur = (Math.ceil, Math.exp),
                sr = (Math.floor, Math.log),
                hr = (Math.pow, Math.sin),
                lr = (Math.sign, Math.sqrt),
                dr = Math.tan;

            function _r(t) {
                return t > 1 ? 0 : t < -1 ? tr : Math.acos(t)
            }

            function br(t) {
                return t > 1 ? nr : t < -1 ? -nr : Math.asin(t)
            }

            function pr() {}
            Wi(), Wi();

            function yr(t) {
                var n = t[0],
                    e = t[1],
                    i = cr(e);
                return [i * cr(n), i * hr(n), hr(e)]
            }

            function vr(t, n) {
                return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
            }

            function gr(t) {
                var n = lr(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                t[0] /= n, t[1] /= n, t[2] /= n
            }
            Wi();

            function xr(t, n) {
                return [t > tr ? t - ir : t < -tr ? t + ir : t, n]
            }
            xr.invert = xr;
            var mr = function() {
                    var t, n = [];
                    return {
                        point: function(n, e) {
                            t.push([n, e])
                        },
                        lineStart: function() {
                            n.push(t = [])
                        },
                        lineEnd: pr,
                        rejoin: function() {
                            n.length > 1 && n.push(n.pop().concat(n.shift()))
                        },
                        result: function() {
                            var e = n;
                            return n = [], t = null, e
                        }
                    }
                },
                wr = function(t, n) {
                    return ar(t[0] - n[0]) < Ki && ar(t[1] - n[1]) < Ki
                };

            function Mr(t, n, e, i) {
                this.x = t, this.z = n, this.o = e, this.e = i, this.v = !1, this.n = this.p = null
            }
            var Nr = function(t, n, e, i, r) {
                var a, f, o = [],
                    c = [];
                if (t.forEach(function(t) {
                        if (!((n = t.length - 1) <= 0)) {
                            var n, e, i = t[0],
                                f = t[n];
                            if (wr(i, f)) {
                                for (r.lineStart(), a = 0; a < n; ++a) r.point((i = t[a])[0], i[1]);
                                r.lineEnd()
                            } else o.push(e = new Mr(i, t, null, !0)), c.push(e.o = new Mr(i, null, e, !1)), o.push(e = new Mr(f, t, null, !1)), c.push(e.o = new Mr(f, null, e, !0))
                        }
                    }), o.length) {
                    for (c.sort(n), Tr(o), Tr(c), a = 0, f = c.length; a < f; ++a) c[a].e = e = !e;
                    for (var u, s, h = o[0];;) {
                        for (var l = h, d = !0; l.v;)
                            if ((l = l.n) === h) return;
                        u = l.z, r.lineStart();
                        do {
                            if (l.v = l.o.v = !0, l.e) {
                                if (d)
                                    for (a = 0, f = u.length; a < f; ++a) r.point((s = u[a])[0], s[1]);
                                else i(l.x, l.n.x, 1, r);
                                l = l.n
                            } else {
                                if (d)
                                    for (u = l.p.z, a = u.length - 1; a >= 0; --a) r.point((s = u[a])[0], s[1]);
                                else i(l.x, l.p.x, -1, r);
                                l = l.p
                            }
                            u = (l = l.o).z, d = !d
                        } while (!l.v);
                        r.lineEnd()
                    }
                }
            };

            function Tr(t) {
                if (n = t.length) {
                    for (var n, e, i = 0, r = t[0]; ++i < n;) r.n = e = t[i], e.p = r, r = e;
                    r.n = e = t[0], e.p = r
                }
            }
            var kr = Wi(),
                Ar = function(t, n) {
                    var e = n[0],
                        i = n[1],
                        r = hr(i),
                        a = [hr(e), -cr(e), 0],
                        f = 0,
                        o = 0;
                    kr.reset(), 1 === r ? i = nr + Ki : -1 === r && (i = -nr - Ki);
                    for (var c = 0, u = t.length; c < u; ++c)
                        if (h = (s = t[c]).length)
                            for (var s, h, l = s[h - 1], d = l[0], _ = l[1] / 2 + er, b = hr(_), p = cr(_), y = 0; y < h; ++y, d = g, b = m, p = w, l = v) {
                                var v = s[y],
                                    g = v[0],
                                    x = v[1] / 2 + er,
                                    m = hr(x),
                                    w = cr(x),
                                    M = g - d,
                                    N = M >= 0 ? 1 : -1,
                                    T = N * M,
                                    k = T > tr,
                                    A = b * m;
                                if (kr.add(or(A * N * hr(T), p * w + A * cr(T))), f += k ? M + N * ir : M, k ^ d >= e ^ g >= e) {
                                    var C = vr(yr(l), yr(v));
                                    gr(C);
                                    var S = vr(a, C);
                                    gr(S);
                                    var E = (k ^ M >= 0 ? -1 : 1) * br(S[2]);
                                    (i > E || i === E && (C[0] || C[1])) && (o += k ^ M >= 0 ? 1 : -1)
                                }
                            }
                    return (f < -Ki || f < Ki && kr < -Ki) ^ 1 & o
                },
                Cr = function(t, n, e, i) {
                    return function(r) {
                        var a, f, o, c = n(r),
                            u = mr(),
                            s = n(u),
                            h = !1,
                            l = {
                                point: d,
                                lineStart: b,
                                lineEnd: p,
                                polygonStart: function() {
                                    l.point = v, l.lineStart = g, l.lineEnd = x, f = [], a = []
                                },
                                polygonEnd: function() {
                                    l.point = d, l.lineStart = b, l.lineEnd = p, f = y(f);
                                    var t = Ar(a, i);
                                    f.length ? (h || (r.polygonStart(), h = !0), Nr(f, Er, t, e, r)) : t && (h || (r.polygonStart(), h = !0), r.lineStart(), e(null, null, 1, r), r.lineEnd()), h && (r.polygonEnd(), h = !1), f = a = null
                                },
                                sphere: function() {
                                    r.polygonStart(), r.lineStart(), e(null, null, 1, r), r.lineEnd(), r.polygonEnd()
                                }
                            };

                        function d(n, e) {
                            t(n, e) && r.point(n, e)
                        }

                        function _(t, n) {
                            c.point(t, n)
                        }

                        function b() {
                            l.point = _, c.lineStart()
                        }

                        function p() {
                            l.point = d, c.lineEnd()
                        }

                        function v(t, n) {
                            o.push([t, n]), s.point(t, n)
                        }

                        function g() {
                            s.lineStart(), o = []
                        }

                        function x() {
                            v(o[0][0], o[0][1]), s.lineEnd();
                            var t, n, e, i, c = s.clean(),
                                l = u.result(),
                                d = l.length;
                            if (o.pop(), a.push(o), o = null, d)
                                if (1 & c) {
                                    if ((n = (e = l[0]).length - 1) > 0) {
                                        for (h || (r.polygonStart(), h = !0), r.lineStart(), t = 0; t < n; ++t) r.point((i = e[t])[0], i[1]);
                                        r.lineEnd()
                                    }
                                } else d > 1 && 2 & c && l.push(l.pop().concat(l.shift())), f.push(l.filter(Sr))
                        }
                        return l
                    }
                };

            function Sr(t) {
                return t.length > 1
            }

            function Er(t, n) {
                return ((t = t.x)[0] < 0 ? t[1] - nr - Ki : nr - t[1]) - ((n = n.x)[0] < 0 ? n[1] - nr - Ki : nr - n[1])
            }
            Cr(function() {
                return !0
            }, function(t) {
                var n, e = NaN,
                    i = NaN,
                    r = NaN;
                return {
                    lineStart: function() {
                        t.lineStart(), n = 1
                    },
                    point: function(a, f) {
                        var o = a > 0 ? tr : -tr,
                            c = ar(a - e);
                        ar(c - tr) < Ki ? (t.point(e, i = (i + f) / 2 > 0 ? nr : -nr), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(o, i), t.point(a, i), n = 0) : r !== o && c >= tr && (ar(e - r) < Ki && (e -= r * Ki), ar(a - o) < Ki && (a -= o * Ki), i = function(t, n, e, i) {
                            var r, a, f = hr(t - e);
                            return ar(f) > Ki ? fr((hr(n) * (a = cr(i)) * hr(e) - hr(i) * (r = cr(n)) * hr(t)) / (r * a * f)) : (n + i) / 2
                        }(e, i, a, f), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(o, i), n = 0), t.point(e = a, i = f), r = o
                    },
                    lineEnd: function() {
                        t.lineEnd(), e = i = NaN
                    },
                    clean: function() {
                        return 2 - n
                    }
                }
            }, function(t, n, e, i) {
                var r;
                if (null == t) r = e * nr, i.point(-tr, r), i.point(0, r), i.point(tr, r), i.point(tr, 0), i.point(tr, -r), i.point(0, -r), i.point(-tr, -r), i.point(-tr, 0), i.point(-tr, r);
                else if (ar(t[0] - n[0]) > Ki) {
                    var a = t[0] < n[0] ? tr : -tr;
                    r = e * a / 2, i.point(-a, r), i.point(0, r), i.point(a, r)
                } else i.point(n[0], n[1])
            }, [-tr, -nr]);
            Wi();
            Wi(), Wi();

            function Ur(t) {
                this._context = t
            }
            Ur.prototype = {
                _radius: 4.5,
                pointRadius: function(t) {
                    return this._radius = t, this
                },
                polygonStart: function() {
                    this._line = 0
                },
                polygonEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    0 === this._line && this._context.closePath(), this._point = NaN
                },
                point: function(t, n) {
                    switch (this._point) {
                        case 0:
                            this._context.moveTo(t, n), this._point = 1;
                            break;
                        case 1:
                            this._context.lineTo(t, n);
                            break;
                        default:
                            this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, ir)
                    }
                },
                result: pr
            };
            Wi();

            function Lr() {
                this._string = []
            }

            function Pr(t) {
                return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
            }
            Lr.prototype = {
                _radius: 4.5,
                _circle: Pr(4.5),
                pointRadius: function(t) {
                    return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
                },
                polygonStart: function() {
                    this._line = 0
                },
                polygonEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    0 === this._line && this._string.push("Z"), this._point = NaN
                },
                point: function(t, n) {
                    switch (this._point) {
                        case 0:
                            this._string.push("M", t, ",", n), this._point = 1;
                            break;
                        case 1:
                            this._string.push("L", t, ",", n);
                            break;
                        default:
                            null == this._circle && (this._circle = Pr(this._radius)), this._string.push("M", t, ",", n, this._circle)
                    }
                },
                result: function() {
                    if (this._string.length) {
                        var t = this._string.join("");
                        return this._string = [], t
                    }
                    return null
                }
            };

            function Dr(t) {
                return function(n) {
                    var e = new Rr;
                    for (var i in t) e[i] = t[i];
                    return e.stream = n, e
                }
            }

            function Rr() {}
            Rr.prototype = {
                constructor: Rr,
                point: function(t, n) {
                    this.stream.point(t, n)
                },
                sphere: function() {
                    this.stream.sphere()
                },
                lineStart: function() {
                    this.stream.lineStart()
                },
                lineEnd: function() {
                    this.stream.lineEnd()
                },
                polygonStart: function() {
                    this.stream.polygonStart()
                },
                polygonEnd: function() {
                    this.stream.polygonEnd()
                }
            };
            cr(30 * rr);
            Dr({
                point: function(t, n) {
                    this.stream.point(t * rr, n * rr)
                }
            });

            function Fr(t) {
                return function(n, e) {
                    var i = cr(n),
                        r = cr(e),
                        a = t(i * r);
                    return [a * r * hr(n), a * hr(e)]
                }
            }

            function Yr(t) {
                return function(n, e) {
                    var i = lr(n * n + e * e),
                        r = t(i),
                        a = hr(r),
                        f = cr(r);
                    return [or(n * a, i * f), br(i && e * a / i)]
                }
            }
            var qr = Fr(function(t) {
                return lr(2 / (1 + t))
            });
            qr.invert = Yr(function(t) {
                return 2 * br(t / 2)
            });
            var zr = Fr(function(t) {
                return (t = _r(t)) && t / hr(t)
            });
            zr.invert = Yr(function(t) {
                return t
            });

            function Hr(t, n) {
                return [t, sr(dr((nr + n) / 2))]
            }
            Hr.invert = function(t, n) {
                return [t, 2 * fr(ur(n)) - nr]
            };

            function jr(t, n) {
                return [t, n]
            }
            jr.invert = jr;
            var Or = 1.340264,
                Ir = -.081106,
                $r = 893e-6,
                Xr = .003796,
                Vr = lr(3) / 2;

            function Br(t, n) {
                var e = br(Vr * hr(n)),
                    i = e * e,
                    r = i * i * i;
                return [t * cr(e) / (Vr * (Or + 3 * Ir * i + r * (7 * $r + 9 * Xr * i))), e * (Or + Ir * i + r * ($r + Xr * i))]
            }
            Br.invert = function(t, n) {
                for (var e, i = n, r = i * i, a = r * r * r, f = 0; f < 12 && (a = (r = (i -= e = (i * (Or + Ir * r + a * ($r + Xr * r)) - n) / (Or + 3 * Ir * r + a * (7 * $r + 9 * Xr * r))) * i) * r * r, !(ar(e) < 1e-12)); ++f);
                return [Vr * t * (Or + 3 * Ir * r + a * (7 * $r + 9 * Xr * r)) / cr(i), br(hr(i) / Vr)]
            };

            function Zr(t, n) {
                var e = cr(n),
                    i = cr(t) * e;
                return [e * hr(t) / i, hr(n) / i]
            }
            Zr.invert = Yr(fr);

            function Wr(t, n) {
                var e = n * n,
                    i = e * e;
                return [t * (.8707 - .131979 * e + i * (i * (.003971 * e - .001529 * i) - .013791)), n * (1.007226 + e * (.015085 + i * (.028874 * e - .044475 - .005916 * i)))]
            }
            Wr.invert = function(t, n) {
                var e, i = n,
                    r = 25;
                do {
                    var a = i * i,
                        f = a * a;
                    i -= e = (i * (1.007226 + a * (.015085 + f * (.028874 * a - .044475 - .005916 * f))) - n) / (1.007226 + a * (.045255 + f * (.259866 * a - .311325 - .005916 * 11 * f)))
                } while (ar(e) > Ki && --r > 0);
                return [t / (.8707 + (a = i * i) * (a * (a * a * a * (.003971 - .001529 * a) - .013791) - .131979)), i]
            };

            function Jr(t, n) {
                return [cr(n) * hr(t), hr(n)]
            }
            Jr.invert = Yr(br);

            function Qr(t, n) {
                var e = cr(n),
                    i = 1 + cr(t) * e;
                return [e * hr(t) / i, hr(n) / i]
            }
            Qr.invert = Yr(function(t) {
                return 2 * fr(t)
            });

            function Gr(t, n) {
                return [sr(dr((nr + n) / 2)), -t]
            }
            Gr.invert = function(t, n) {
                return [-n, 2 * fr(ur(t)) - nr]
            };

            function Kr(t) {
                var n = 0,
                    e = t.children,
                    i = e && e.length;
                if (i)
                    for (; --i >= 0;) n += e[i].value;
                else n = 1;
                t.value = n
            }

            function ta(t, n) {
                var e, i, r, a, f, o = new ra(t),
                    c = +t.value && (o.value = t.value),
                    u = [o];
                for (null == n && (n = na); e = u.pop();)
                    if (c && (e.value = +e.data.value), (r = n(e.data)) && (f = r.length))
                        for (e.children = new Array(f), a = f - 1; a >= 0; --a) u.push(i = e.children[a] = new ra(r[a])), i.parent = e, i.depth = e.depth + 1;
                return o.eachBefore(ia)
            }

            function na(t) {
                return t.children
            }

            function ea(t) {
                t.data = t.data.data
            }

            function ia(t) {
                var n = 0;
                do {
                    t.height = n
                } while ((t = t.parent) && t.height < ++n)
            }

            function ra(t) {
                this.data = t, this.depth = this.height = 0, this.parent = null
            }
            ra.prototype = ta.prototype = {
                constructor: ra,
                count: function() {
                    return this.eachAfter(Kr)
                },
                each: function(t) {
                    var n, e, i, r, a = this,
                        f = [a];
                    do {
                        for (n = f.reverse(), f = []; a = n.pop();)
                            if (t(a), e = a.children)
                                for (i = 0, r = e.length; i < r; ++i) f.push(e[i])
                    } while (f.length);
                    return this
                },
                eachAfter: function(t) {
                    for (var n, e, i, r = this, a = [r], f = []; r = a.pop();)
                        if (f.push(r), n = r.children)
                            for (e = 0, i = n.length; e < i; ++e) a.push(n[e]);
                    for (; r = f.pop();) t(r);
                    return this
                },
                eachBefore: function(t) {
                    for (var n, e, i = this, r = [i]; i = r.pop();)
                        if (t(i), n = i.children)
                            for (e = n.length - 1; e >= 0; --e) r.push(n[e]);
                    return this
                },
                sum: function(t) {
                    return this.eachAfter(function(n) {
                        for (var e = +t(n.data) || 0, i = n.children, r = i && i.length; --r >= 0;) e += i[r].value;
                        n.value = e
                    })
                },
                sort: function(t) {
                    return this.eachBefore(function(n) {
                        n.children && n.children.sort(t)
                    })
                },
                path: function(t) {
                    for (var n = this, e = function(t, n) {
                            if (t === n) return t;
                            var e = t.ancestors(),
                                i = n.ancestors(),
                                r = null;
                            for (t = e.pop(), n = i.pop(); t === n;) r = t, t = e.pop(), n = i.pop();
                            return r
                        }(n, t), i = [n]; n !== e;) n = n.parent, i.push(n);
                    for (var r = i.length; t !== e;) i.splice(r, 0, t), t = t.parent;
                    return i
                },
                ancestors: function() {
                    for (var t = this, n = [t]; t = t.parent;) n.push(t);
                    return n
                },
                descendants: function() {
                    var t = [];
                    return this.each(function(n) {
                        t.push(n)
                    }), t
                },
                leaves: function() {
                    var t = [];
                    return this.eachBefore(function(n) {
                        n.children || t.push(n)
                    }), t
                },
                links: function() {
                    var t = this,
                        n = [];
                    return t.each(function(e) {
                        e !== t && n.push({
                            source: e.parent,
                            target: e
                        })
                    }), n
                },
                copy: function() {
                    return ta(this).eachBefore(ea)
                }
            };
            Array.prototype.slice;

            function aa(t) {
                if ("function" != typeof t) throw new Error;
                return t
            }

            function fa() {
                return 0
            }
            var oa = function(t) {
                return function() {
                    return t
                }
            };
            var ca = function(t) {
                    t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
                },
                ua = function(t, n, e, i, r) {
                    for (var a, f = t.children, o = -1, c = f.length, u = t.value && (i - n) / t.value; ++o < c;)(a = f[o]).y0 = e, a.y1 = r, a.x0 = n, a.x1 = n += a.value * u
                };

            function sa(t, n) {
                this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
            }
            sa.prototype = Object.create(ra.prototype);
            var ha = function(t, n, e, i, r) {
                    for (var a, f = t.children, o = -1, c = f.length, u = t.value && (r - e) / t.value; ++o < c;)(a = f[o]).x0 = n, a.x1 = i, a.y0 = e, a.y1 = e += a.value * u
                },
                la = (1 + Math.sqrt(5)) / 2;

            function da(t, n, e, i, r, a) {
                for (var f, o, c, u, s, h, l, d, _, b, p, y = [], v = n.children, g = 0, x = 0, m = v.length, w = n.value; g < m;) {
                    c = r - e, u = a - i;
                    do {
                        s = v[x++].value
                    } while (!s && x < m);
                    for (h = l = s, p = s * s * (b = Math.max(u / c, c / u) / (w * t)), _ = Math.max(l / p, p / h); x < m; ++x) {
                        if (s += o = v[x].value, o < h && (h = o), o > l && (l = o), p = s * s * b, (d = Math.max(l / p, p / h)) > _) {
                            s -= o;
                            break
                        }
                        _ = d
                    }
                    y.push(f = {
                        value: s,
                        dice: c < u,
                        children: v.slice(g, x)
                    }), f.dice ? ua(f, e, i, r, w ? i += u * s / w : a) : ha(f, e, i, w ? e += c * s / w : r, a), w -= s, g = x
                }
                return y
            }
            var _a = function t(n) {
                    function e(t, e, i, r, a) {
                        da(n, t, e, i, r, a)
                    }
                    return e.ratio = function(n) {
                        return t((n = +n) > 1 ? n : 1)
                    }, e
                }(la),
                ba = function() {
                    var t = _a,
                        n = !1,
                        e = 1,
                        i = 1,
                        r = [0],
                        a = fa,
                        f = fa,
                        o = fa,
                        c = fa,
                        u = fa;

                    function s(t) {
                        return t.x0 = t.y0 = 0, t.x1 = e, t.y1 = i, t.eachBefore(h), r = [0], n && t.eachBefore(ca), t
                    }

                    function h(n) {
                        var e = r[n.depth],
                            i = n.x0 + e,
                            s = n.y0 + e,
                            h = n.x1 - e,
                            l = n.y1 - e;
                        h < i && (i = h = (i + h) / 2), l < s && (s = l = (s + l) / 2), n.x0 = i, n.y0 = s, n.x1 = h, n.y1 = l, n.children && (e = r[n.depth + 1] = a(n) / 2, i += u(n) - e, s += f(n) - e, (h -= o(n) - e) < i && (i = h = (i + h) / 2), (l -= c(n) - e) < s && (s = l = (s + l) / 2), t(n, i, s, h, l))
                    }
                    return s.round = function(t) {
                        return arguments.length ? (n = !!t, s) : n
                    }, s.size = function(t) {
                        return arguments.length ? (e = +t[0], i = +t[1], s) : [e, i]
                    }, s.tile = function(n) {
                        return arguments.length ? (t = aa(n), s) : t
                    }, s.padding = function(t) {
                        return arguments.length ? s.paddingInner(t).paddingOuter(t) : s.paddingInner()
                    }, s.paddingInner = function(t) {
                        return arguments.length ? (a = "function" == typeof t ? t : oa(+t), s) : a
                    }, s.paddingOuter = function(t) {
                        return arguments.length ? s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : s.paddingTop()
                    }, s.paddingTop = function(t) {
                        return arguments.length ? (f = "function" == typeof t ? t : oa(+t), s) : f
                    }, s.paddingRight = function(t) {
                        return arguments.length ? (o = "function" == typeof t ? t : oa(+t), s) : o
                    }, s.paddingBottom = function(t) {
                        return arguments.length ? (c = "function" == typeof t ? t : oa(+t), s) : c
                    }, s.paddingLeft = function(t) {
                        return arguments.length ? (u = "function" == typeof t ? t : oa(+t), s) : u
                    }, s
                },
                pa = function t(n) {
                    function e(t, e, i, r, a) {
                        if ((f = t._squarify) && f.ratio === n)
                            for (var f, o, c, u, s, h = -1, l = f.length, d = t.value; ++h < l;) {
                                for (c = (o = f[h]).children, u = o.value = 0, s = c.length; u < s; ++u) o.value += c[u].value;
                                o.dice ? ua(o, e, i, r, i += (a - i) * o.value / d) : ha(o, e, i, e += (r - e) * o.value / d, a), d -= o.value
                            } else t._squarify = f = da(n, t, e, i, r, a), f.ratio = n
                    }
                    return e.ratio = function(n) {
                        return t((n = +n) > 1 ? n : 1)
                    }, e
                }(la);
            var ya = function() {
                    return Math.random()
                },
                va = (function t(n) {
                    function e(t, e) {
                        return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t,
                            function() {
                                return n() * e + t
                            }
                    }
                    return e.source = t, e
                }(ya), function t(n) {
                    function e(t, e) {
                        var i, r;
                        return t = null == t ? 0 : +t, e = null == e ? 1 : +e,
                            function() {
                                var a;
                                if (null != i) a = i, i = null;
                                else
                                    do {
                                        i = 2 * n() - 1, a = 2 * n() - 1, r = i * i + a * a
                                    } while (!r || r > 1);
                                return t + e * a * Math.sqrt(-2 * Math.log(r) / r)
                            }
                    }
                    return e.source = t, e
                }(ya)),
                ga = (function t(n) {
                    function e() {
                        var t = va.source(n).apply(this, arguments);
                        return function() {
                            return Math.exp(t())
                        }
                    }
                    return e.source = t, e
                }(ya), function t(n) {
                    function e(t) {
                        return function() {
                            for (var e = 0, i = 0; i < t; ++i) e += n();
                            return e
                        }
                    }
                    return e.source = t, e
                }(ya)),
                xa = (function t(n) {
                    function e(t) {
                        var e = ga.source(n)(t);
                        return function() {
                            return e() / t
                        }
                    }
                    return e.source = t, e
                }(ya), function t(n) {
                    function e(t) {
                        return function() {
                            return -Math.log(1 - n()) / t
                        }
                    }
                    return e.source = t, e
                }(ya), Array.prototype),
                ma = xa.map,
                wa = xa.slice;
            var Ma = function(t) {
                    return function() {
                        return t
                    }
                },
                Na = function(t) {
                    return +t
                },
                Ta = [0, 1];

            function ka(t, n) {
                return (n -= t = +t) ? function(e) {
                    return (e - t) / n
                } : Ma(n)
            }

            function Aa(t, n, e, i) {
                var r = t[0],
                    a = t[1],
                    f = n[0],
                    o = n[1];
                return a < r ? (r = e(a, r), f = i(o, f)) : (r = e(r, a), f = i(f, o)),
                    function(t) {
                        return f(r(t))
                    }
            }

            function Ca(t, n, e, i) {
                var r = Math.min(t.length, n.length) - 1,
                    a = new Array(r),
                    f = new Array(r),
                    c = -1;
                for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++c < r;) a[c] = e(t[c], t[c + 1]), f[c] = i(n[c], n[c + 1]);
                return function(n) {
                    var e = o(t, n, 1, r) - 1;
                    return f[e](a[e](n))
                }
            }

            function Sa(t, n) {
                return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
            }

            function Ea(t, n) {
                var e, i, r, a = Ta,
                    f = Ta,
                    o = Wn,
                    c = !1;

                function u() {
                    return e = Math.min(a.length, f.length) > 2 ? Ca : Aa, i = r = null, s
                }

                function s(n) {
                    return (i || (i = e(a, f, c ? function(t) {
                        return function(n, e) {
                            var i = t(n = +n, e = +e);
                            return function(t) {
                                return t <= n ? 0 : t >= e ? 1 : i(t)
                            }
                        }
                    }(t) : t, o)))(+n)
                }
                return s.invert = function(t) {
                    return (r || (r = e(f, a, ka, c ? function(t) {
                        return function(n, e) {
                            var i = t(n = +n, e = +e);
                            return function(t) {
                                return t <= 0 ? n : t >= 1 ? e : i(t)
                            }
                        }
                    }(n) : n)))(+t)
                }, s.domain = function(t) {
                    return arguments.length ? (a = ma.call(t, Na), u()) : a.slice()
                }, s.range = function(t) {
                    return arguments.length ? (f = wa.call(t), u()) : f.slice()
                }, s.rangeRound = function(t) {
                    return f = wa.call(t), o = Jn, u()
                }, s.clamp = function(t) {
                    return arguments.length ? (c = !!t, u()) : c
                }, s.interpolate = function(t) {
                    return arguments.length ? (o = t, u()) : o
                }, u()
            }
            var Ua = function(t, n, e) {
                var i, r = t[0],
                    a = t[t.length - 1],
                    f = b(r, a, null == n ? 10 : n);
                switch ((e = qi(null == e ? ",f" : e)).type) {
                    case "s":
                        var o = Math.max(Math.abs(r), Math.abs(a));
                        return null != e.precision || isNaN(i = function(t, n) {
                            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Fi(n) / 3))) - Fi(Math.abs(t)))
                        }(f, o)) || (e.precision = i), Ii(e, o);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != e.precision || isNaN(i = function(t, n) {
                            return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Fi(n) - Fi(t)) + 1
                        }(f, Math.max(Math.abs(r), Math.abs(a)))) || (e.precision = i - ("e" === e.type));
                        break;
                    case "f":
                    case "%":
                        null != e.precision || isNaN(i = function(t) {
                            return Math.max(0, -Fi(Math.abs(t)))
                        }(f)) || (e.precision = i - 2 * ("%" === e.type))
                }
                return Oi(e)
            };

            function La(t) {
                var n = t.domain;
                return t.ticks = function(t) {
                    var e = n();
                    return d(e[0], e[e.length - 1], null == t ? 10 : t)
                }, t.tickFormat = function(t, e) {
                    return Ua(n(), t, e)
                }, t.nice = function(e) {
                    null == e && (e = 10);
                    var i, r = n(),
                        a = 0,
                        f = r.length - 1,
                        o = r[a],
                        c = r[f];
                    return c < o && (i = o, o = c, c = i, i = a, a = f, f = i), (i = _(o, c, e)) > 0 ? i = _(o = Math.floor(o / i) * i, c = Math.ceil(c / i) * i, e) : i < 0 && (i = _(o = Math.ceil(o * i) / i, c = Math.floor(c * i) / i, e)), i > 0 ? (r[a] = Math.floor(o / i) * i, r[f] = Math.ceil(c / i) * i, n(r)) : i < 0 && (r[a] = Math.ceil(o * i) / i, r[f] = Math.floor(c * i) / i, n(r)), t
                }, t
            }

            function Pa() {
                var t = Ea(ka, jn);
                return t.copy = function() {
                    return Sa(t, Pa())
                }, La(t)
            }
            var Da = new Date,
                Ra = new Date;

            function Fa(t, n, e, i) {
                function r(n) {
                    return t(n = new Date(+n)), n
                }
                return r.floor = r, r.ceil = function(e) {
                    return t(e = new Date(e - 1)), n(e, 1), t(e), e
                }, r.round = function(t) {
                    var n = r(t),
                        e = r.ceil(t);
                    return t - n < e - t ? n : e
                }, r.offset = function(t, e) {
                    return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
                }, r.range = function(e, i, a) {
                    var f, o = [];
                    if (e = r.ceil(e), a = null == a ? 1 : Math.floor(a), !(e < i && a > 0)) return o;
                    do {
                        o.push(f = new Date(+e)), n(e, a), t(e)
                    } while (f < e && e < i);
                    return o
                }, r.filter = function(e) {
                    return Fa(function(n) {
                        if (n >= n)
                            for (; t(n), !e(n);) n.setTime(n - 1)
                    }, function(t, i) {
                        if (t >= t)
                            if (i < 0)
                                for (; ++i <= 0;)
                                    for (; n(t, -1), !e(t););
                            else
                                for (; --i >= 0;)
                                    for (; n(t, 1), !e(t););
                    })
                }, e && (r.count = function(n, i) {
                    return Da.setTime(+n), Ra.setTime(+i), t(Da), t(Ra), Math.floor(e(Da, Ra))
                }, r.every = function(t) {
                    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? r.filter(i ? function(n) {
                        return i(n) % t == 0
                    } : function(n) {
                        return r.count(0, n) % t == 0
                    }) : r : null
                }), r
            }
            var Ya = Fa(function() {}, function(t, n) {
                t.setTime(+t + n)
            }, function(t, n) {
                return n - t
            });
            Ya.every = function(t) {
                return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Fa(function(n) {
                    n.setTime(Math.floor(n / t) * t)
                }, function(n, e) {
                    n.setTime(+n + e * t)
                }, function(n, e) {
                    return (e - n) / t
                }) : Ya : null
            };
            Ya.range;
            var qa = 6e4,
                za = 6048e5,
                Ha = Fa(function(t) {
                    t.setTime(1e3 * Math.floor(t / 1e3))
                }, function(t, n) {
                    t.setTime(+t + 1e3 * n)
                }, function(t, n) {
                    return (n - t) / 1e3
                }, function(t) {
                    return t.getUTCSeconds()
                }),
                ja = (Ha.range, Fa(function(t) {
                    t.setTime(Math.floor(t / qa) * qa)
                }, function(t, n) {
                    t.setTime(+t + n * qa)
                }, function(t, n) {
                    return (n - t) / qa
                }, function(t) {
                    return t.getMinutes()
                })),
                Oa = (ja.range, Fa(function(t) {
                    var n = t.getTimezoneOffset() * qa % 36e5;
                    n < 0 && (n += 36e5), t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n)
                }, function(t, n) {
                    t.setTime(+t + 36e5 * n)
                }, function(t, n) {
                    return (n - t) / 36e5
                }, function(t) {
                    return t.getHours()
                })),
                Ia = (Oa.range, Fa(function(t) {
                    t.setHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setDate(t.getDate() + n)
                }, function(t, n) {
                    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * qa) / 864e5
                }, function(t) {
                    return t.getDate() - 1
                })),
                $a = Ia;
            Ia.range;

            function Xa(t) {
                return Fa(function(n) {
                    n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setDate(t.getDate() + 7 * n)
                }, function(t, n) {
                    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * qa) / za
                })
            }
            var Va = Xa(0),
                Ba = Xa(1),
                Za = Xa(2),
                Wa = Xa(3),
                Ja = Xa(4),
                Qa = Xa(5),
                Ga = Xa(6),
                Ka = (Va.range, Ba.range, Za.range, Wa.range, Ja.range, Qa.range, Ga.range, Fa(function(t) {
                    t.setDate(1), t.setHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setMonth(t.getMonth() + n)
                }, function(t, n) {
                    return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
                }, function(t) {
                    return t.getMonth()
                })),
                tf = (Ka.range, Fa(function(t) {
                    t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setFullYear(t.getFullYear() + n)
                }, function(t, n) {
                    return n.getFullYear() - t.getFullYear()
                }, function(t) {
                    return t.getFullYear()
                }));
            tf.every = function(t) {
                return isFinite(t = Math.floor(t)) && t > 0 ? Fa(function(n) {
                    n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
                }, function(n, e) {
                    n.setFullYear(n.getFullYear() + e * t)
                }) : null
            };
            var nf = tf,
                ef = (tf.range, Fa(function(t) {
                    t.setUTCSeconds(0, 0)
                }, function(t, n) {
                    t.setTime(+t + n * qa)
                }, function(t, n) {
                    return (n - t) / qa
                }, function(t) {
                    return t.getUTCMinutes()
                })),
                rf = (ef.range, Fa(function(t) {
                    t.setUTCMinutes(0, 0, 0)
                }, function(t, n) {
                    t.setTime(+t + 36e5 * n)
                }, function(t, n) {
                    return (n - t) / 36e5
                }, function(t) {
                    return t.getUTCHours()
                })),
                af = (rf.range, Fa(function(t) {
                    t.setUTCHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setUTCDate(t.getUTCDate() + n)
                }, function(t, n) {
                    return (n - t) / 864e5
                }, function(t) {
                    return t.getUTCDate() - 1
                })),
                ff = af;
            af.range;

            function of (t) {
                return Fa(function(n) {
                    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setUTCDate(t.getUTCDate() + 7 * n)
                }, function(t, n) {
                    return (n - t) / za
                })
            }
            var cf = of (0),
                uf = of (1),
                sf = of (2),
                hf = of (3),
                lf = of (4),
                df = of (5),
                _f = of (6),
                bf = (cf.range, uf.range, sf.range, hf.range, lf.range, df.range, _f.range, Fa(function(t) {
                    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setUTCMonth(t.getUTCMonth() + n)
                }, function(t, n) {
                    return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
                }, function(t) {
                    return t.getUTCMonth()
                })),
                pf = (bf.range, Fa(function(t) {
                    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setUTCFullYear(t.getUTCFullYear() + n)
                }, function(t, n) {
                    return n.getUTCFullYear() - t.getUTCFullYear()
                }, function(t) {
                    return t.getUTCFullYear()
                }));
            pf.every = function(t) {
                return isFinite(t = Math.floor(t)) && t > 0 ? Fa(function(n) {
                    n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
                }, function(n, e) {
                    n.setUTCFullYear(n.getUTCFullYear() + e * t)
                }) : null
            };
            var yf = pf;
            pf.range;

            function vf(t) {
                if (0 <= t.y && t.y < 100) {
                    var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                    return n.setFullYear(t.y), n
                }
                return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
            }

            function gf(t) {
                if (0 <= t.y && t.y < 100) {
                    var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                    return n.setUTCFullYear(t.y), n
                }
                return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
            }

            function xf(t) {
                return {
                    y: t,
                    m: 0,
                    d: 1,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0
                }
            }
            var mf, wf, Mf, Nf = {
                    "-": "",
                    _: " ",
                    0: "0"
                },
                Tf = /^\s*\d+/,
                kf = /^%/,
                Af = /[\\^$*+?|[\]().{}]/g;

            function Cf(t, n, e) {
                var i = t < 0 ? "-" : "",
                    r = (i ? -t : t) + "",
                    a = r.length;
                return i + (a < e ? new Array(e - a + 1).join(n) + r : r)
            }

            function Sf(t) {
                return t.replace(Af, "\\$&")
            }

            function Ef(t) {
                return new RegExp("^(?:" + t.map(Sf).join("|") + ")", "i")
            }

            function Uf(t) {
                for (var n = {}, e = -1, i = t.length; ++e < i;) n[t[e].toLowerCase()] = e;
                return n
            }

            function Lf(t, n, e) {
                var i = Tf.exec(n.slice(e, e + 1));
                return i ? (t.w = +i[0], e + i[0].length) : -1
            }

            function Pf(t, n, e) {
                var i = Tf.exec(n.slice(e, e + 1));
                return i ? (t.u = +i[0], e + i[0].length) : -1
            }

            function Df(t, n, e) {
                var i = Tf.exec(n.slice(e, e + 2));
                return i ? (t.U = +i[0], e + i[0].length) : -1
            }

            function Rf(t, n, e) {
                var i = Tf.exec(n.slice(e, e + 2));
                return i ? (t.V = +i[0], e + i[0].length) : -1
            }

            function Ff(t, n, e) {
                var i = Tf.exec(n.slice(e, e + 2));
                return i ? (t.W = +i[0], e + i[0].length) : -1
            }

            function Yf(t, n, e) {
                var i = Tf.exec(n.slice(e, e + 4));
                return i ? (t.y = +i[0], e + i[0].length) : -1
            }

            function qf(t, n, e) {
                var i = Tf.exec(n.slice(e, e + 2));
                return i ? (t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), e + i[0].length) : -1
            }

            function zf(t, n, e) {
                var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
                return i ? (t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), e + i[0].length) : -1
            }

            function Hf(t, n, e) {
                var i = Tf.exec(n.slice(e, e + 2));
                return i ? (t.m = i[0] - 1, e + i[0].length) : -1
            }

            function jf(t, n, e) {
                var i = Tf.exec(n.slice(e, e + 2));
                return i ? (t.d = +i[0], e + i[0].length) : -1
            }

            function Of(t, n, e) {
                var i = Tf.exec(n.slice(e, e + 3));
                return i ? (t.m = 0, t.d = +i[0], e + i[0].length) : -1
            }

            function If(t, n, e) {
                var i = Tf.exec(n.slice(e, e + 2));
                return i ? (t.H = +i[0], e + i[0].length) : -1
            }

            function $f(t, n, e) {
                var i = Tf.exec(n.slice(e, e + 2));
                return i ? (t.M = +i[0], e + i[0].length) : -1
            }

            function Xf(t, n, e) {
                var i = Tf.exec(n.slice(e, e + 2));
                return i ? (t.S = +i[0], e + i[0].length) : -1
            }

            function Vf(t, n, e) {
                var i = Tf.exec(n.slice(e, e + 3));
                return i ? (t.L = +i[0], e + i[0].length) : -1
            }

            function Bf(t, n, e) {
                var i = Tf.exec(n.slice(e, e + 6));
                return i ? (t.L = Math.floor(i[0] / 1e3), e + i[0].length) : -1
            }

            function Zf(t, n, e) {
                var i = kf.exec(n.slice(e, e + 1));
                return i ? e + i[0].length : -1
            }

            function Wf(t, n, e) {
                var i = Tf.exec(n.slice(e));
                return i ? (t.Q = +i[0], e + i[0].length) : -1
            }

            function Jf(t, n, e) {
                var i = Tf.exec(n.slice(e));
                return i ? (t.Q = 1e3 * +i[0], e + i[0].length) : -1
            }

            function Qf(t, n) {
                return Cf(t.getDate(), n, 2)
            }

            function Gf(t, n) {
                return Cf(t.getHours(), n, 2)
            }

            function Kf(t, n) {
                return Cf(t.getHours() % 12 || 12, n, 2)
            }

            function to(t, n) {
                return Cf(1 + $a.count(nf(t), t), n, 3)
            }

            function no(t, n) {
                return Cf(t.getMilliseconds(), n, 3)
            }

            function eo(t, n) {
                return no(t, n) + "000"
            }

            function io(t, n) {
                return Cf(t.getMonth() + 1, n, 2)
            }

            function ro(t, n) {
                return Cf(t.getMinutes(), n, 2)
            }

            function ao(t, n) {
                return Cf(t.getSeconds(), n, 2)
            }

            function fo(t) {
                var n = t.getDay();
                return 0 === n ? 7 : n
            }

            function oo(t, n) {
                return Cf(Va.count(nf(t), t), n, 2)
            }

            function co(t, n) {
                var e = t.getDay();
                return t = e >= 4 || 0 === e ? Ja(t) : Ja.ceil(t), Cf(Ja.count(nf(t), t) + (4 === nf(t).getDay()), n, 2)
            }

            function uo(t) {
                return t.getDay()
            }

            function so(t, n) {
                return Cf(Ba.count(nf(t), t), n, 2)
            }

            function ho(t, n) {
                return Cf(t.getFullYear() % 100, n, 2)
            }

            function lo(t, n) {
                return Cf(t.getFullYear() % 1e4, n, 4)
            }

            function _o(t) {
                var n = t.getTimezoneOffset();
                return (n > 0 ? "-" : (n *= -1, "+")) + Cf(n / 60 | 0, "0", 2) + Cf(n % 60, "0", 2)
            }

            function bo(t, n) {
                return Cf(t.getUTCDate(), n, 2)
            }

            function po(t, n) {
                return Cf(t.getUTCHours(), n, 2)
            }

            function yo(t, n) {
                return Cf(t.getUTCHours() % 12 || 12, n, 2)
            }

            function vo(t, n) {
                return Cf(1 + ff.count(yf(t), t), n, 3)
            }

            function go(t, n) {
                return Cf(t.getUTCMilliseconds(), n, 3)
            }

            function xo(t, n) {
                return go(t, n) + "000"
            }

            function mo(t, n) {
                return Cf(t.getUTCMonth() + 1, n, 2)
            }

            function wo(t, n) {
                return Cf(t.getUTCMinutes(), n, 2)
            }

            function Mo(t, n) {
                return Cf(t.getUTCSeconds(), n, 2)
            }

            function No(t) {
                var n = t.getUTCDay();
                return 0 === n ? 7 : n
            }

            function To(t, n) {
                return Cf(cf.count(yf(t), t), n, 2)
            }

            function ko(t, n) {
                var e = t.getUTCDay();
                return t = e >= 4 || 0 === e ? lf(t) : lf.ceil(t), Cf(lf.count(yf(t), t) + (4 === yf(t).getUTCDay()), n, 2)
            }

            function Ao(t) {
                return t.getUTCDay()
            }

            function Co(t, n) {
                return Cf(uf.count(yf(t), t), n, 2)
            }

            function So(t, n) {
                return Cf(t.getUTCFullYear() % 100, n, 2)
            }

            function Eo(t, n) {
                return Cf(t.getUTCFullYear() % 1e4, n, 4)
            }

            function Uo() {
                return "+0000"
            }

            function Lo() {
                return "%"
            }

            function Po(t) {
                return +t
            }

            function Do(t) {
                return Math.floor(+t / 1e3)
            }! function(t) {
                mf = function(t) {
                    var n = t.dateTime,
                        e = t.date,
                        i = t.time,
                        r = t.periods,
                        a = t.days,
                        f = t.shortDays,
                        o = t.months,
                        c = t.shortMonths,
                        u = Ef(r),
                        s = Uf(r),
                        h = Ef(a),
                        l = Uf(a),
                        d = Ef(f),
                        _ = Uf(f),
                        b = Ef(o),
                        p = Uf(o),
                        y = Ef(c),
                        v = Uf(c),
                        g = {
                            a: function(t) {
                                return f[t.getDay()]
                            },
                            A: function(t) {
                                return a[t.getDay()]
                            },
                            b: function(t) {
                                return c[t.getMonth()]
                            },
                            B: function(t) {
                                return o[t.getMonth()]
                            },
                            c: null,
                            d: Qf,
                            e: Qf,
                            f: eo,
                            H: Gf,
                            I: Kf,
                            j: to,
                            L: no,
                            m: io,
                            M: ro,
                            p: function(t) {
                                return r[+(t.getHours() >= 12)]
                            },
                            Q: Po,
                            s: Do,
                            S: ao,
                            u: fo,
                            U: oo,
                            V: co,
                            w: uo,
                            W: so,
                            x: null,
                            X: null,
                            y: ho,
                            Y: lo,
                            Z: _o,
                            "%": Lo
                        },
                        x = {
                            a: function(t) {
                                return f[t.getUTCDay()]
                            },
                            A: function(t) {
                                return a[t.getUTCDay()]
                            },
                            b: function(t) {
                                return c[t.getUTCMonth()]
                            },
                            B: function(t) {
                                return o[t.getUTCMonth()]
                            },
                            c: null,
                            d: bo,
                            e: bo,
                            f: xo,
                            H: po,
                            I: yo,
                            j: vo,
                            L: go,
                            m: mo,
                            M: wo,
                            p: function(t) {
                                return r[+(t.getUTCHours() >= 12)]
                            },
                            Q: Po,
                            s: Do,
                            S: Mo,
                            u: No,
                            U: To,
                            V: ko,
                            w: Ao,
                            W: Co,
                            x: null,
                            X: null,
                            y: So,
                            Y: Eo,
                            Z: Uo,
                            "%": Lo
                        },
                        m = {
                            a: function(t, n, e) {
                                var i = d.exec(n.slice(e));
                                return i ? (t.w = _[i[0].toLowerCase()], e + i[0].length) : -1
                            },
                            A: function(t, n, e) {
                                var i = h.exec(n.slice(e));
                                return i ? (t.w = l[i[0].toLowerCase()], e + i[0].length) : -1
                            },
                            b: function(t, n, e) {
                                var i = y.exec(n.slice(e));
                                return i ? (t.m = v[i[0].toLowerCase()], e + i[0].length) : -1
                            },
                            B: function(t, n, e) {
                                var i = b.exec(n.slice(e));
                                return i ? (t.m = p[i[0].toLowerCase()], e + i[0].length) : -1
                            },
                            c: function(t, e, i) {
                                return N(t, n, e, i)
                            },
                            d: jf,
                            e: jf,
                            f: Bf,
                            H: If,
                            I: If,
                            j: Of,
                            L: Vf,
                            m: Hf,
                            M: $f,
                            p: function(t, n, e) {
                                var i = u.exec(n.slice(e));
                                return i ? (t.p = s[i[0].toLowerCase()], e + i[0].length) : -1
                            },
                            Q: Wf,
                            s: Jf,
                            S: Xf,
                            u: Pf,
                            U: Df,
                            V: Rf,
                            w: Lf,
                            W: Ff,
                            x: function(t, n, i) {
                                return N(t, e, n, i)
                            },
                            X: function(t, n, e) {
                                return N(t, i, n, e)
                            },
                            y: qf,
                            Y: Yf,
                            Z: zf,
                            "%": Zf
                        };

                    function w(t, n) {
                        return function(e) {
                            var i, r, a, f = [],
                                o = -1,
                                c = 0,
                                u = t.length;
                            for (e instanceof Date || (e = new Date(+e)); ++o < u;) 37 === t.charCodeAt(o) && (f.push(t.slice(c, o)), null != (r = Nf[i = t.charAt(++o)]) ? i = t.charAt(++o) : r = "e" === i ? " " : "0", (a = n[i]) && (i = a(e, r)), f.push(i), c = o + 1);
                            return f.push(t.slice(c, o)), f.join("")
                        }
                    }

                    function M(t, n) {
                        return function(e) {
                            var i, r, a = xf(1900);
                            if (N(a, t, e += "", 0) != e.length) return null;
                            if ("Q" in a) return new Date(a.Q);
                            if ("p" in a && (a.H = a.H % 12 + 12 * a.p), "V" in a) {
                                if (a.V < 1 || a.V > 53) return null;
                                "w" in a || (a.w = 1), "Z" in a ? (r = (i = gf(xf(a.y))).getUTCDay(), i = r > 4 || 0 === r ? uf.ceil(i) : uf(i), i = ff.offset(i, 7 * (a.V - 1)), a.y = i.getUTCFullYear(), a.m = i.getUTCMonth(), a.d = i.getUTCDate() + (a.w + 6) % 7) : (r = (i = n(xf(a.y))).getDay(), i = r > 4 || 0 === r ? Ba.ceil(i) : Ba(i), i = $a.offset(i, 7 * (a.V - 1)), a.y = i.getFullYear(), a.m = i.getMonth(), a.d = i.getDate() + (a.w + 6) % 7)
                            } else("W" in a || "U" in a) && ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0), r = "Z" in a ? gf(xf(a.y)).getUTCDay() : n(xf(a.y)).getDay(), a.m = 0, a.d = "W" in a ? (a.w + 6) % 7 + 7 * a.W - (r + 5) % 7 : a.w + 7 * a.U - (r + 6) % 7);
                            return "Z" in a ? (a.H += a.Z / 100 | 0, a.M += a.Z % 100, gf(a)) : n(a)
                        }
                    }

                    function N(t, n, e, i) {
                        for (var r, a, f = 0, o = n.length, c = e.length; f < o;) {
                            if (i >= c) return -1;
                            if (37 === (r = n.charCodeAt(f++))) {
                                if (r = n.charAt(f++), !(a = m[r in Nf ? n.charAt(f++) : r]) || (i = a(t, e, i)) < 0) return -1
                            } else if (r != e.charCodeAt(i++)) return -1
                        }
                        return i
                    }
                    return g.x = w(e, g), g.X = w(i, g), g.c = w(n, g), x.x = w(e, x), x.X = w(i, x), x.c = w(n, x), {
                        format: function(t) {
                            var n = w(t += "", g);
                            return n.toString = function() {
                                return t
                            }, n
                        },
                        parse: function(t) {
                            var n = M(t += "", vf);
                            return n.toString = function() {
                                return t
                            }, n
                        },
                        utcFormat: function(t) {
                            var n = w(t += "", x);
                            return n.toString = function() {
                                return t
                            }, n
                        },
                        utcParse: function(t) {
                            var n = M(t, gf);
                            return n.toString = function() {
                                return t
                            }, n
                        }
                    }
                }(t), mf.format, mf.parse, wf = mf.utcFormat, Mf = mf.utcParse
            }({
                dateTime: "%x, %X",
                date: "%-m/%-d/%Y",
                time: "%-I:%M:%S %p",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            });
            Date.prototype.toISOString || wf("%Y-%m-%dT%H:%M:%S.%LZ"); + new Date("2000-01-01T00:00:00.000Z") || Mf("%Y-%m-%dT%H:%M:%S.%LZ");
            var Ro = function(t) {
                    for (var n = t.length / 6 | 0, e = new Array(n), i = 0; i < n;) e[i] = "#" + t.slice(6 * i, 6 * ++i);
                    return e
                },
                Fo = Ro("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
                Yo = (Ro("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Ro("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), Ro("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Ro("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Ro("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Ro("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), Ro("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), Ro("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), function(t) {
                    return Hn(t[t.length - 1])
                }),
                qo = (Yo(new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Ro)), Yo(new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Ro)), Yo(new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Ro)), Yo(new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Ro)), Yo(new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Ro)), Yo(new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Ro)), Yo(new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Ro)), Yo(new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Ro)), Yo(new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Ro)), Yo(new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Ro)), Yo(new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Ro)), Yo(new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Ro)), Yo(new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Ro)), Yo(new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Ro)), Yo(new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Ro)), Yo(new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Ro)), Yo(new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Ro)));
            Yo(new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Ro)), Yo(new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Ro)), Yo(new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Ro)), Yo(new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Ro)), Yo(new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Ro)), Yo(new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Ro)), Yo(new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Ro)), Yo(new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Ro)), Yo(new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Ro)), Yo(new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Ro)), fe(En(300, .5, 0), En(-240, .5, 1)), fe(En(-100, .75, .35), En(80, 1.5, .8)), fe(En(260, .75, .35), En(80, 1.5, .8)), En(), Qt(), Math.PI, Math.PI;

            function zo(t) {
                var n = t.length;
                return function(e) {
                    return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
                }
            }
            zo(Ro("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), zo(Ro("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), zo(Ro("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), zo(Ro("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
            var Ho = function(t) {
                    return function() {
                        return t
                    }
                },
                jo = (Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin, Math.sqrt, 1e-12),
                Oo = Math.PI,
                Io = 2 * Oo;

            function $o(t) {
                this._context = t
            }
            $o.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                        default:
                            this._context.lineTo(t, n)
                    }
                }
            };
            var Xo = function(t) {
                return new $o(t)
            };

            function Vo(t) {
                return t[0]
            }

            function Bo(t) {
                return t[1]
            }
            var Zo = function() {
                var t = Vo,
                    n = Bo,
                    e = Ho(!0),
                    i = null,
                    r = Xo,
                    a = null;

                function f(f) {
                    var o, c, u, s = f.length,
                        h = !1;
                    for (null == i && (a = r(u = ii())), o = 0; o <= s; ++o) !(o < s && e(c = f[o], o, f)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+t(c, o, f), +n(c, o, f));
                    if (u) return a = null, u + "" || null
                }
                return f.x = function(n) {
                    return arguments.length ? (t = "function" == typeof n ? n : Ho(+n), f) : t
                }, f.y = function(t) {
                    return arguments.length ? (n = "function" == typeof t ? t : Ho(+t), f) : n
                }, f.defined = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : Ho(!!t), f) : e
                }, f.curve = function(t) {
                    return arguments.length ? (r = t, null != i && (a = r(i)), f) : r
                }, f.context = function(t) {
                    return arguments.length ? (null == t ? i = a = null : a = r(i = t), f) : i
                }, f
            };
            Jo(Xo);

            function Wo(t) {
                this._curve = t
            }

            function Jo(t) {
                function n(n) {
                    return new Wo(t(n))
                }
                return n._curve = t, n
            }
            Wo.prototype = {
                areaStart: function() {
                    this._curve.areaStart()
                },
                areaEnd: function() {
                    this._curve.areaEnd()
                },
                lineStart: function() {
                    this._curve.lineStart()
                },
                lineEnd: function() {
                    this._curve.lineEnd()
                },
                point: function(t, n) {
                    this._curve.point(n * Math.sin(t), n * -Math.cos(t))
                }
            };
            Array.prototype.slice;
            Math.sqrt(1 / 3);
            var Qo = Math.sin(Oo / 10) / Math.sin(7 * Oo / 10),
                Go = (Math.sin(Io / 10), Math.cos(Io / 10), Math.sqrt(3), Math.sqrt(3), Math.sqrt(12), function() {});

            function Ko(t, n, e) {
                t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
            }

            function tc(t) {
                this._context = t
            }
            tc.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 3:
                            Ko(this, this._x1, this._y1);
                        case 2:
                            this._context.lineTo(this._x1, this._y1)
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                        default:
                            Ko(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };

            function nc(t) {
                this._context = t
            }
            nc.prototype = {
                areaStart: Go,
                areaEnd: Go,
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x2, this._y2), this._context.closePath();
                            break;
                        case 2:
                            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                    }
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._x2 = t, this._y2 = n;
                            break;
                        case 1:
                            this._point = 2, this._x3 = t, this._y3 = n;
                            break;
                        case 2:
                            this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                            break;
                        default:
                            Ko(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };

            function ec(t) {
                this._context = t
            }
            ec.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3;
                            var e = (this._x0 + 4 * this._x1 + t) / 6,
                                i = (this._y0 + 4 * this._y1 + n) / 6;
                            this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            Ko(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };

            function ic(t, n) {
                this._basis = new tc(t), this._beta = n
            }
            ic.prototype = {
                lineStart: function() {
                    this._x = [], this._y = [], this._basis.lineStart()
                },
                lineEnd: function() {
                    var t = this._x,
                        n = this._y,
                        e = t.length - 1;
                    if (e > 0)
                        for (var i, r = t[0], a = n[0], f = t[e] - r, o = n[e] - a, c = -1; ++c <= e;) i = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (r + i * f), this._beta * n[c] + (1 - this._beta) * (a + i * o));
                    this._x = this._y = null, this._basis.lineEnd()
                },
                point: function(t, n) {
                    this._x.push(+t), this._y.push(+n)
                }
            };
            (function t(n) {
                function e(t) {
                    return 1 === n ? new tc(t) : new ic(t, n)
                }
                return e.beta = function(n) {
                    return t(+n)
                }, e
            })(.85);

            function rc(t, n, e) {
                t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
            }

            function ac(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }
            ac.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x2, this._y2);
                            break;
                        case 3:
                            rc(this, this._x1, this._y1)
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2, this._x1 = t, this._y1 = n;
                            break;
                        case 2:
                            this._point = 3;
                        default:
                            rc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return new ac(t, n)
                }
                return e.tension = function(n) {
                    return t(+n)
                }, e
            })(0);

            function fc(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }
            fc.prototype = {
                areaStart: Go,
                areaEnd: Go,
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 2:
                            this._context.lineTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                    }
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._x3 = t, this._y3 = n;
                            break;
                        case 1:
                            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                            break;
                        case 2:
                            this._point = 3, this._x5 = t, this._y5 = n;
                            break;
                        default:
                            rc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return new fc(t, n)
                }
                return e.tension = function(n) {
                    return t(+n)
                }, e
            })(0);

            function oc(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }
            oc.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            rc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return new oc(t, n)
                }
                return e.tension = function(n) {
                    return t(+n)
                }, e
            })(0);

            function cc(t, n, e) {
                var i = t._x1,
                    r = t._y1,
                    a = t._x2,
                    f = t._y2;
                if (t._l01_a > jo) {
                    var o = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                        c = 3 * t._l01_a * (t._l01_a + t._l12_a);
                    i = (i * o - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, r = (r * o - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
                }
                if (t._l23_a > jo) {
                    var u = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                        s = 3 * t._l23_a * (t._l23_a + t._l12_a);
                    a = (a * u + t._x1 * t._l23_2a - n * t._l12_2a) / s, f = (f * u + t._y1 * t._l23_2a - e * t._l12_2a) / s
                }
                t._context.bezierCurveTo(i, r, a, f, t._x2, t._y2)
            }

            function uc(t, n) {
                this._context = t, this._alpha = n
            }
            uc.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x2, this._y2);
                            break;
                        case 3:
                            this.point(this._x2, this._y2)
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    if (t = +t, n = +n, this._point) {
                        var e = this._x2 - t,
                            i = this._y2 - n;
                        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3;
                        default:
                            cc(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return n ? new uc(t, n) : new ac(t, 0)
                }
                return e.alpha = function(n) {
                    return t(+n)
                }, e
            })(.5);

            function sc(t, n) {
                this._context = t, this._alpha = n
            }
            sc.prototype = {
                areaStart: Go,
                areaEnd: Go,
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 2:
                            this._context.lineTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                    }
                },
                point: function(t, n) {
                    if (t = +t, n = +n, this._point) {
                        var e = this._x2 - t,
                            i = this._y2 - n;
                        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._x3 = t, this._y3 = n;
                            break;
                        case 1:
                            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                            break;
                        case 2:
                            this._point = 3, this._x5 = t, this._y5 = n;
                            break;
                        default:
                            cc(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return n ? new sc(t, n) : new fc(t, 0)
                }
                return e.alpha = function(n) {
                    return t(+n)
                }, e
            })(.5);

            function hc(t, n) {
                this._context = t, this._alpha = n
            }
            hc.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    if (t = +t, n = +n, this._point) {
                        var e = this._x2 - t,
                            i = this._y2 - n;
                        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            cc(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return n ? new hc(t, n) : new oc(t, 0)
                }
                return e.alpha = function(n) {
                    return t(+n)
                }, e
            })(.5);

            function lc(t) {
                this._context = t
            }
            lc.prototype = {
                areaStart: Go,
                areaEnd: Go,
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    this._point && this._context.closePath()
                },
                point: function(t, n) {
                    t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
                }
            };

            function dc(t) {
                return t < 0 ? -1 : 1
            }

            function _c(t, n, e) {
                var i = t._x1 - t._x0,
                    r = n - t._x1,
                    a = (t._y1 - t._y0) / (i || r < 0 && -0),
                    f = (e - t._y1) / (r || i < 0 && -0),
                    o = (a * r + f * i) / (i + r);
                return (dc(a) + dc(f)) * Math.min(Math.abs(a), Math.abs(f), .5 * Math.abs(o)) || 0
            }

            function bc(t, n) {
                var e = t._x1 - t._x0;
                return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
            }

            function pc(t, n, e) {
                var i = t._x0,
                    r = t._y0,
                    a = t._x1,
                    f = t._y1,
                    o = (a - i) / 3;
                t._context.bezierCurveTo(i + o, r + o * n, a - o, f - o * e, a, f)
            }

            function yc(t) {
                this._context = t
            }

            function vc(t) {
                this._context = new gc(t)
            }

            function gc(t) {
                this._context = t
            }

            function xc(t) {
                this._context = t
            }

            function mc(t) {
                var n, e, i = t.length - 1,
                    r = new Array(i),
                    a = new Array(i),
                    f = new Array(i);
                for (r[0] = 0, a[0] = 2, f[0] = t[0] + 2 * t[1], n = 1; n < i - 1; ++n) r[n] = 1, a[n] = 4, f[n] = 4 * t[n] + 2 * t[n + 1];
                for (r[i - 1] = 2, a[i - 1] = 7, f[i - 1] = 8 * t[i - 1] + t[i], n = 1; n < i; ++n) e = r[n] / a[n - 1], a[n] -= e, f[n] -= e * f[n - 1];
                for (r[i - 1] = f[i - 1] / a[i - 1], n = i - 2; n >= 0; --n) r[n] = (f[n] - r[n + 1]) / a[n];
                for (a[i - 1] = (t[i] + r[i - 1]) / 2, n = 0; n < i - 1; ++n) a[n] = 2 * t[n + 1] - r[n + 1];
                return [r, a]
            }
            yc.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x1, this._y1);
                            break;
                        case 3:
                            pc(this, this._t0, bc(this, this._t0))
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    var e = NaN;
                    if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
                        switch (this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3, pc(this, bc(this, e = _c(this, t, n)), e);
                                break;
                            default:
                                pc(this, this._t0, e = _c(this, t, n))
                        }
                        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
                    }
                }
            }, (vc.prototype = Object.create(yc.prototype)).point = function(t, n) {
                yc.prototype.point.call(this, n, t)
            }, gc.prototype = {
                moveTo: function(t, n) {
                    this._context.moveTo(n, t)
                },
                closePath: function() {
                    this._context.closePath()
                },
                lineTo: function(t, n) {
                    this._context.lineTo(n, t)
                },
                bezierCurveTo: function(t, n, e, i, r, a) {
                    this._context.bezierCurveTo(n, t, i, e, a, r)
                }
            }, xc.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x = [], this._y = []
                },
                lineEnd: function() {
                    var t = this._x,
                        n = this._y,
                        e = t.length;
                    if (e)
                        if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
                        else
                            for (var i = mc(t), r = mc(n), a = 0, f = 1; f < e; ++a, ++f) this._context.bezierCurveTo(i[0][a], r[0][a], i[1][a], r[1][a], t[f], n[f]);
                    (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
                },
                point: function(t, n) {
                    this._x.push(+t), this._y.push(+n)
                }
            };

            function wc(t, n) {
                this._context = t, this._t = n
            }
            wc.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x = this._y = NaN, this._point = 0
                },
                lineEnd: function() {
                    0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                        default:
                            if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
                            else {
                                var e = this._x * (1 - this._t) + t * this._t;
                                this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                            }
                    }
                    this._x = t, this._y = n
                }
            };

            function Mc() {
                this._ = null
            }

            function Nc(t) {
                t.U = t.C = t.L = t.R = t.P = t.N = null
            }

            function Tc(t, n) {
                var e = n,
                    i = n.R,
                    r = e.U;
                r ? r.L === e ? r.L = i : r.R = i : t._ = i, i.U = r, e.U = i, e.R = i.L, e.R && (e.R.U = e), i.L = e
            }

            function kc(t, n) {
                var e = n,
                    i = n.L,
                    r = e.U;
                r ? r.L === e ? r.L = i : r.R = i : t._ = i, i.U = r, e.U = i, e.L = i.R, e.L && (e.L.U = e), i.R = e
            }

            function Ac(t) {
                for (; t.L;) t = t.L;
                return t
            }
            Mc.prototype = {
                constructor: Mc,
                insert: function(t, n) {
                    var e, i, r;
                    if (t) {
                        if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                            for (t = t.R; t.L;) t = t.L;
                            t.L = n
                        } else t.R = n;
                        e = t
                    } else this._ ? (t = Ac(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
                    for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (i = e.U).L ? (r = i.R) && r.C ? (e.C = r.C = !1, i.C = !0, t = i) : (t === e.R && (Tc(this, e), e = (t = e).U), e.C = !1, i.C = !0, kc(this, i)) : (r = i.L) && r.C ? (e.C = r.C = !1, i.C = !0, t = i) : (t === e.L && (kc(this, e), e = (t = e).U), e.C = !1, i.C = !0, Tc(this, i)), e = t.U;
                    this._.C = !1
                },
                remove: function(t) {
                    t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                    var n, e, i, r = t.U,
                        a = t.L,
                        f = t.R;
                    if (e = a ? f ? Ac(f) : a : f, r ? r.L === t ? r.L = e : r.R = e : this._ = e, a && f ? (i = e.C, e.C = t.C, e.L = a, a.U = e, e !== f ? (r = e.U, e.U = t.U, t = e.R, r.L = t, e.R = f, f.U = e) : (e.U = r, r = e, t = e.R)) : (i = t.C, t = e), t && (t.U = r), !i)
                        if (t && t.C) t.C = !1;
                        else {
                            do {
                                if (t === this._) break;
                                if (t === r.L) {
                                    if ((n = r.R).C && (n.C = !1, r.C = !0, Tc(this, r), n = r.R), n.L && n.L.C || n.R && n.R.C) {
                                        n.R && n.R.C || (n.L.C = !1, n.C = !0, kc(this, n), n = r.R), n.C = r.C, r.C = n.R.C = !1, Tc(this, r), t = this._;
                                        break
                                    }
                                } else if ((n = r.L).C && (n.C = !1, r.C = !0, kc(this, r), n = r.L), n.L && n.L.C || n.R && n.R.C) {
                                    n.L && n.L.C || (n.R.C = !1, n.C = !0, Tc(this, n), n = r.L), n.C = r.C, r.C = n.L.C = !1, kc(this, r), t = this._;
                                    break
                                }
                                n.C = !0, t = r, r = r.U
                            } while (!t.C);
                            t && (t.C = !1)
                        }
                }
            };
            var Cc = Mc;

            function Sc(t, n, e, i) {
                var r = [null, null],
                    a = Kc.push(r) - 1;
                return r.left = t, r.right = n, e && Uc(r, t, n, e), i && Uc(r, n, t, i), Qc[t.index].halfedges.push(a), Qc[n.index].halfedges.push(a), r
            }

            function Ec(t, n, e) {
                var i = [n, e];
                return i.left = t, i
            }

            function Uc(t, n, e, i) {
                t[0] || t[1] ? t.left === e ? t[1] = i : t[0] = i : (t[0] = i, t.left = n, t.right = e)
            }

            function Lc(t, n, e, i, r) {
                var a, f = t[0],
                    o = t[1],
                    c = f[0],
                    u = f[1],
                    s = 0,
                    h = 1,
                    l = o[0] - c,
                    d = o[1] - u;
                if (a = n - c, l || !(a > 0)) {
                    if (a /= l, l < 0) {
                        if (a < s) return;
                        a < h && (h = a)
                    } else if (l > 0) {
                        if (a > h) return;
                        a > s && (s = a)
                    }
                    if (a = i - c, l || !(a < 0)) {
                        if (a /= l, l < 0) {
                            if (a > h) return;
                            a > s && (s = a)
                        } else if (l > 0) {
                            if (a < s) return;
                            a < h && (h = a)
                        }
                        if (a = e - u, d || !(a > 0)) {
                            if (a /= d, d < 0) {
                                if (a < s) return;
                                a < h && (h = a)
                            } else if (d > 0) {
                                if (a > h) return;
                                a > s && (s = a)
                            }
                            if (a = r - u, d || !(a < 0)) {
                                if (a /= d, d < 0) {
                                    if (a > h) return;
                                    a > s && (s = a)
                                } else if (d > 0) {
                                    if (a < s) return;
                                    a < h && (h = a)
                                }
                                return !(s > 0 || h < 1) || (s > 0 && (t[0] = [c + s * l, u + s * d]), h < 1 && (t[1] = [c + h * l, u + h * d]), !0)
                            }
                        }
                    }
                }
            }

            function Pc(t, n, e, i, r) {
                var a = t[1];
                if (a) return !0;
                var f, o, c = t[0],
                    u = t.left,
                    s = t.right,
                    h = u[0],
                    l = u[1],
                    d = s[0],
                    _ = s[1],
                    b = (h + d) / 2,
                    p = (l + _) / 2;
                if (_ === l) {
                    if (b < n || b >= i) return;
                    if (h > d) {
                        if (c) {
                            if (c[1] >= r) return
                        } else c = [b, e];
                        a = [b, r]
                    } else {
                        if (c) {
                            if (c[1] < e) return
                        } else c = [b, r];
                        a = [b, e]
                    }
                } else if (o = p - (f = (h - d) / (_ - l)) * b, f < -1 || f > 1)
                    if (h > d) {
                        if (c) {
                            if (c[1] >= r) return
                        } else c = [(e - o) / f, e];
                        a = [(r - o) / f, r]
                    } else {
                        if (c) {
                            if (c[1] < e) return
                        } else c = [(r - o) / f, r];
                        a = [(e - o) / f, e]
                    }
                else if (l < _) {
                    if (c) {
                        if (c[0] >= i) return
                    } else c = [n, f * n + o];
                    a = [i, f * i + o]
                } else {
                    if (c) {
                        if (c[0] < n) return
                    } else c = [i, f * i + o];
                    a = [n, f * n + o]
                }
                return t[0] = c, t[1] = a, !0
            }

            function Dc(t, n) {
                var e = t.site,
                    i = n.left,
                    r = n.right;
                return e === r && (r = i, i = e), r ? Math.atan2(r[1] - i[1], r[0] - i[0]) : (e === i ? (i = n[1], r = n[0]) : (i = n[0], r = n[1]), Math.atan2(i[0] - r[0], r[1] - i[1]))
            }

            function Rc(t, n) {
                return n[+(n.left !== t.site)]
            }

            function Fc(t, n) {
                return n[+(n.left === t.site)]
            }
            var Yc, qc = [];

            function zc() {
                Nc(this), this.x = this.y = this.arc = this.site = this.cy = null
            }

            function Hc(t) {
                var n = t.P,
                    e = t.N;
                if (n && e) {
                    var i = n.site,
                        r = t.site,
                        a = e.site;
                    if (i !== a) {
                        var f = r[0],
                            o = r[1],
                            c = i[0] - f,
                            u = i[1] - o,
                            s = a[0] - f,
                            h = a[1] - o,
                            l = 2 * (c * h - u * s);
                        if (!(l >= -nu)) {
                            var d = c * c + u * u,
                                _ = s * s + h * h,
                                b = (h * d - u * _) / l,
                                p = (c * _ - s * d) / l,
                                y = qc.pop() || new zc;
                            y.arc = t, y.site = r, y.x = b + f, y.y = (y.cy = p + o) + Math.sqrt(b * b + p * p), t.circle = y;
                            for (var v = null, g = Gc._; g;)
                                if (y.y < g.y || y.y === g.y && y.x <= g.x) {
                                    if (!g.L) {
                                        v = g.P;
                                        break
                                    }
                                    g = g.L
                                } else {
                                    if (!g.R) {
                                        v = g;
                                        break
                                    }
                                    g = g.R
                                } Gc.insert(v, y), v || (Yc = y)
                        }
                    }
                }
            }

            function jc(t) {
                var n = t.circle;
                n && (n.P || (Yc = n.N), Gc.remove(n), qc.push(n), Nc(n), t.circle = null)
            }
            var Oc = [];

            function Ic() {
                Nc(this), this.edge = this.site = this.circle = null
            }

            function $c(t) {
                var n = Oc.pop() || new Ic;
                return n.site = t, n
            }

            function Xc(t) {
                jc(t), Jc.remove(t), Oc.push(t), Nc(t)
            }

            function Vc(t) {
                var n = t.circle,
                    e = n.x,
                    i = n.cy,
                    r = [e, i],
                    a = t.P,
                    f = t.N,
                    o = [t];
                Xc(t);
                for (var c = a; c.circle && Math.abs(e - c.circle.x) < tu && Math.abs(i - c.circle.cy) < tu;) a = c.P, o.unshift(c), Xc(c), c = a;
                o.unshift(c), jc(c);
                for (var u = f; u.circle && Math.abs(e - u.circle.x) < tu && Math.abs(i - u.circle.cy) < tu;) f = u.N, o.push(u), Xc(u), u = f;
                o.push(u), jc(u);
                var s, h = o.length;
                for (s = 1; s < h; ++s) u = o[s], c = o[s - 1], Uc(u.edge, c.site, u.site, r);
                c = o[0], (u = o[h - 1]).edge = Sc(c.site, u.site, null, r), Hc(c), Hc(u)
            }

            function Bc(t) {
                for (var n, e, i, r, a = t[0], f = t[1], o = Jc._; o;)
                    if ((i = Zc(o, f) - a) > tu) o = o.L;
                    else {
                        if (!((r = a - Wc(o, f)) > tu)) {
                            i > -tu ? (n = o.P, e = o) : r > -tu ? (n = o, e = o.N) : n = e = o;
                            break
                        }
                        if (!o.R) {
                            n = o;
                            break
                        }
                        o = o.R
                    }!
                function(t) {
                    Qc[t.index] = {
                        site: t,
                        halfedges: []
                    }
                }(t);
                var c = $c(t);
                if (Jc.insert(n, c), n || e) {
                    if (n === e) return jc(n), e = $c(n.site), Jc.insert(c, e), c.edge = e.edge = Sc(n.site, c.site), Hc(n), void Hc(e);
                    if (e) {
                        jc(n), jc(e);
                        var u = n.site,
                            s = u[0],
                            h = u[1],
                            l = t[0] - s,
                            d = t[1] - h,
                            _ = e.site,
                            b = _[0] - s,
                            p = _[1] - h,
                            y = 2 * (l * p - d * b),
                            v = l * l + d * d,
                            g = b * b + p * p,
                            x = [(p * v - d * g) / y + s, (l * g - b * v) / y + h];
                        Uc(e.edge, u, _, x), c.edge = Sc(u, t, null, x), e.edge = Sc(t, _, null, x), Hc(n), Hc(e)
                    } else c.edge = Sc(n.site, c.site)
                }
            }

            function Zc(t, n) {
                var e = t.site,
                    i = e[0],
                    r = e[1],
                    a = r - n;
                if (!a) return i;
                var f = t.P;
                if (!f) return -1 / 0;
                var o = (e = f.site)[0],
                    c = e[1],
                    u = c - n;
                if (!u) return o;
                var s = o - i,
                    h = 1 / a - 1 / u,
                    l = s / u;
                return h ? (-l + Math.sqrt(l * l - 2 * h * (s * s / (-2 * u) - c + u / 2 + r - a / 2))) / h + i : (i + o) / 2
            }

            function Wc(t, n) {
                var e = t.N;
                if (e) return Zc(e, n);
                var i = t.site;
                return i[1] === n ? i[0] : 1 / 0
            }
            var Jc, Qc, Gc, Kc, tu = 1e-6,
                nu = 1e-12;

            function eu(t, n) {
                return n[1] - t[1] || n[0] - t[0]
            }

            function iu(t, n) {
                var e, i, r, a = t.sort(eu).pop();
                for (Kc = [], Qc = new Array(t.length), Jc = new Cc, Gc = new Cc;;)
                    if (r = Yc, a && (!r || a[1] < r.y || a[1] === r.y && a[0] < r.x)) a[0] === e && a[1] === i || (Bc(a), e = a[0], i = a[1]), a = t.pop();
                    else {
                        if (!r) break;
                        Vc(r.arc)
                    } if (function() {
                        for (var t, n, e, i, r = 0, a = Qc.length; r < a; ++r)
                            if ((t = Qc[r]) && (i = (n = t.halfedges).length)) {
                                var f = new Array(i),
                                    o = new Array(i);
                                for (e = 0; e < i; ++e) f[e] = e, o[e] = Dc(t, Kc[n[e]]);
                                for (f.sort(function(t, n) {
                                        return o[n] - o[t]
                                    }), e = 0; e < i; ++e) o[e] = n[f[e]];
                                for (e = 0; e < i; ++e) n[e] = o[e]
                            }
                    }(), n) {
                    var f = +n[0][0],
                        o = +n[0][1],
                        c = +n[1][0],
                        u = +n[1][1];
                    ! function(t, n, e, i) {
                        for (var r, a = Kc.length; a--;) Pc(r = Kc[a], t, n, e, i) && Lc(r, t, n, e, i) && (Math.abs(r[0][0] - r[1][0]) > tu || Math.abs(r[0][1] - r[1][1]) > tu) || delete Kc[a]
                    }(f, o, c, u),
                    function(t, n, e, i) {
                        var r, a, f, o, c, u, s, h, l, d, _, b, p = Qc.length,
                            y = !0;
                        for (r = 0; r < p; ++r)
                            if (a = Qc[r]) {
                                for (f = a.site, o = (c = a.halfedges).length; o--;) Kc[c[o]] || c.splice(o, 1);
                                for (o = 0, u = c.length; o < u;) _ = (d = Fc(a, Kc[c[o]]))[0], b = d[1], h = (s = Rc(a, Kc[c[++o % u]]))[0], l = s[1], (Math.abs(_ - h) > tu || Math.abs(b - l) > tu) && (c.splice(o, 0, Kc.push(Ec(f, d, Math.abs(_ - t) < tu && i - b > tu ? [t, Math.abs(h - t) < tu ? l : i] : Math.abs(b - i) < tu && e - _ > tu ? [Math.abs(l - i) < tu ? h : e, i] : Math.abs(_ - e) < tu && b - n > tu ? [e, Math.abs(h - e) < tu ? l : n] : Math.abs(b - n) < tu && _ - t > tu ? [Math.abs(l - n) < tu ? h : t, n] : null)) - 1), ++u);
                                u && (y = !1)
                            } if (y) {
                            var v, g, x, m = 1 / 0;
                            for (r = 0, y = null; r < p; ++r)(a = Qc[r]) && (x = (v = (f = a.site)[0] - t) * v + (g = f[1] - n) * g) < m && (m = x, y = a);
                            if (y) {
                                var w = [t, n],
                                    M = [t, i],
                                    N = [e, i],
                                    T = [e, n];
                                y.halfedges.push(Kc.push(Ec(f = y.site, w, M)) - 1, Kc.push(Ec(f, M, N)) - 1, Kc.push(Ec(f, N, T)) - 1, Kc.push(Ec(f, T, w)) - 1)
                            }
                        }
                        for (r = 0; r < p; ++r)(a = Qc[r]) && (a.halfedges.length || delete Qc[r])
                    }(f, o, c, u)
                }
                this.edges = Kc, this.cells = Qc, Jc = Gc = Kc = Qc = null
            }
            iu.prototype = {
                constructor: iu,
                polygons: function() {
                    var t = this.edges;
                    return this.cells.map(function(n) {
                        var e = n.halfedges.map(function(e) {
                            return Rc(n, t[e])
                        });
                        return e.data = n.site.data, e
                    })
                },
                triangles: function() {
                    var t = [],
                        n = this.edges;
                    return this.cells.forEach(function(e, i) {
                        if (a = (r = e.halfedges).length)
                            for (var r, a, f, o, c, u, s = e.site, h = -1, l = n[r[a - 1]], d = l.left === s ? l.right : l.left; ++h < a;) f = d, d = (l = n[r[h]]).left === s ? l.right : l.left, f && d && i < f.index && i < d.index && (c = f, u = d, ((o = s)[0] - u[0]) * (c[1] - o[1]) - (o[0] - c[0]) * (u[1] - o[1]) < 0) && t.push([s.data, f.data, d.data])
                    }), t
                },
                links: function() {
                    return this.edges.filter(function(t) {
                        return t.right
                    }).map(function(t) {
                        return {
                            source: t.left.data,
                            target: t.right.data
                        }
                    })
                },
                find: function(t, n, e) {
                    for (var i, r, a = this, f = a._found || 0, o = a.cells.length; !(r = a.cells[f]);)
                        if (++f >= o) return null;
                    var c = t - r.site[0],
                        u = n - r.site[1],
                        s = c * c + u * u;
                    do {
                        r = a.cells[i = f], f = null, r.halfedges.forEach(function(e) {
                            var i = a.edges[e],
                                o = i.left;
                            if (o !== r.site && o || (o = i.right)) {
                                var c = t - o[0],
                                    u = n - o[1],
                                    h = c * c + u * u;
                                h < s && (s = h, f = o.index)
                            }
                        })
                    } while (null !== f);
                    return a._found = i, null == e || s <= e * e ? r.site : null
                }
            };

            function ru(t, n, e) {
                this.k = t, this.x = n, this.y = e
            }
            ru.prototype = {
                constructor: ru,
                scale: function(t) {
                    return 1 === t ? this : new ru(this.k * t, this.x, this.y)
                },
                translate: function(t, n) {
                    return 0 === t & 0 === n ? this : new ru(this.k, this.x + this.k * t, this.y + this.k * n)
                },
                apply: function(t) {
                    return [t[0] * this.k + this.x, t[1] * this.k + this.y]
                },
                applyX: function(t) {
                    return t * this.k + this.x
                },
                applyY: function(t) {
                    return t * this.k + this.y
                },
                invert: function(t) {
                    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
                },
                invertX: function(t) {
                    return (t - this.x) / this.k
                },
                invertY: function(t) {
                    return (t - this.y) / this.k
                },
                rescaleX: function(t) {
                    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
                },
                rescaleY: function(t) {
                    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
                },
                toString: function() {
                    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
                }
            };
            new ru(1, 0, 0);
            ru.prototype;
            e.d(n, "e", function() {
                return c
            }), e.d(n, "k", function() {
                return p
            }), e.d(n, "l", function() {
                return v
            }), e.d(n, "a", function() {
                return E
            }), e.d(n, "b", function() {
                return U
            }), e.d(n, "c", function() {
                return Be
            }), e.d(n, "i", function() {
                return Ti
            }), e.d(n, "f", function() {
                return Oi
            }), e.d(n, "g", function() {
                return ta
            }), e.d(n, "p", function() {
                return ba
            }), e.d(n, "q", function() {
                return pa
            }), e.d(n, "m", function() {
                return Pa
            }), e.d(n, "n", function() {
                return Fo
            }), e.d(n, "h", function() {
                return qo
            }), e.d(n, "o", function() {
                return Ct
            }), e.d(n, "d", function() {
                return vt
            }), e.d(n, "j", function() {
                return Zo
            })
        }
    }
]);