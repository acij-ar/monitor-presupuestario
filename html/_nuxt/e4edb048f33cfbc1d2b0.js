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
                },
                g = function(t, n) {
                    var e, i = t.length,
                        r = -1,
                        a = 0;
                    if (null == n)
                        for (; ++r < i;)(e = +t[r]) && (a += e);
                    else
                        for (; ++r < i;)(e = +n(t[r], r, t)) && (a += e);
                    return a
                };
            var x = Array.prototype.slice,
                m = function(t) {
                    return t
                },
                w = 1,
                M = 2,
                N = 3,
                T = 4,
                k = 1e-6;

            function A(t) {
                return "translate(" + (t + .5) + ",0)"
            }

            function C(t) {
                return "translate(0," + (t + .5) + ")"
            }

            function S() {
                return !this.__axis
            }

            function E(t, n) {
                var e = [],
                    i = null,
                    r = null,
                    a = 6,
                    f = 6,
                    o = 3,
                    c = t === w || t === T ? -1 : 1,
                    u = t === T || t === M ? "x" : "y",
                    s = t === w || t === N ? A : C;

                function h(h) {
                    var l = null == i ? n.ticks ? n.ticks.apply(n, e) : n.domain() : i,
                        d = null == r ? n.tickFormat ? n.tickFormat.apply(n, e) : m : r,
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
                        x = g.selectAll(".domain").data([null]),
                        A = g.selectAll(".tick").data(l, n).order(),
                        C = A.exit(),
                        E = A.enter().append("g").attr("class", "tick"),
                        U = A.select("line"),
                        L = A.select("text");
                    x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(E), U = U.merge(E.append("line").attr("stroke", "currentColor").attr(u + "2", c * a)), L = L.merge(E.append("text").attr("fill", "currentColor").attr(u, c * _).attr("dy", t === w ? "0em" : t === N ? "0.71em" : "0.32em")), h !== g && (x = x.transition(h), A = A.transition(h), U = U.transition(h), L = L.transition(h), C = C.transition(h).attr("opacity", k).attr("transform", function(t) {
                        return isFinite(t = v(t)) ? s(t) : this.getAttribute("transform")
                    }), E.attr("opacity", k).attr("transform", function(t) {
                        var n = this.parentNode.__axis;
                        return s(n && isFinite(n = n(t)) ? n : v(t))
                    })), C.remove(), x.attr("d", t === T || t == M ? f ? "M" + c * f + "," + p + "H0.5V" + y + "H" + c * f : "M0.5," + p + "V" + y : f ? "M" + p + "," + c * f + "V0.5H" + y + "V" + c * f : "M" + p + ",0.5H" + y), A.attr("opacity", 1).attr("transform", function(t) {
                        return s(v(t))
                    }), U.attr(u + "2", c * a), L.attr(u, c * _).text(d), g.filter(S).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === M ? "start" : t === T ? "end" : "middle"), g.each(function() {
                        this.__axis = v
                    })
                }
                return h.scale = function(t) {
                    return arguments.length ? (n = t, h) : n
                }, h.ticks = function() {
                    return e = x.call(arguments), h
                }, h.tickArguments = function(t) {
                    return arguments.length ? (e = null == t ? [] : x.call(t), h) : e.slice()
                }, h.tickValues = function(t) {
                    return arguments.length ? (i = null == t ? null : x.call(t), h) : i && i.slice()
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

            function U(t) {
                return E(N, t)
            }

            function L(t) {
                return E(T, t)
            }
            var P = {
                value: function() {}
            };

            function D() {
                for (var t, n = 0, e = arguments.length, i = {}; n < e; ++n) {
                    if (!(t = arguments[n] + "") || t in i) throw new Error("illegal type: " + t);
                    i[t] = []
                }
                return new R(i)
            }

            function R(t) {
                this._ = t
            }

            function F(t, n) {
                for (var e, i = 0, r = t.length; i < r; ++i)
                    if ((e = t[i]).name === n) return e.value
            }

            function Y(t, n, e) {
                for (var i = 0, r = t.length; i < r; ++i)
                    if (t[i].name === n) {
                        t[i] = P, t = t.slice(0, i).concat(t.slice(i + 1));
                        break
                    } return null != e && t.push({
                    name: n,
                    value: e
                }), t
            }
            R.prototype = D.prototype = {
                constructor: R,
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
                            if (e = (t = a[f]).type) r[e] = Y(r[e], t.name, n);
                            else if (null == n)
                            for (e in r) r[e] = Y(r[e], t.name, null);
                        return this
                    }
                    for (; ++f < o;)
                        if ((e = (t = a[f]).type) && (e = F(r[e], t.name))) return e
                },
                copy: function() {
                    var t = {},
                        n = this._;
                    for (var e in n) t[e] = n[e].slice();
                    return new R(t)
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
            var q = D,
                z = "http://www.w3.org/1999/xhtml",
                H = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: z,
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                j = function(t) {
                    var n = t += "",
                        e = n.indexOf(":");
                    return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), H.hasOwnProperty(n) ? {
                        space: H[n],
                        local: t
                    } : t
                };
            var O = function(t) {
                var n = j(t);
                return (n.local ? function(t) {
                    return function() {
                        return this.ownerDocument.createElementNS(t.space, t.local)
                    }
                } : function(t) {
                    return function() {
                        var n = this.ownerDocument,
                            e = this.namespaceURI;
                        return e === z && n.documentElement.namespaceURI === z ? n.createElement(t) : n.createElementNS(e, t)
                    }
                })(n)
            };

            function I() {}
            var $ = function(t) {
                return null == t ? I : function() {
                    return this.querySelector(t)
                }
            };

            function X() {
                return []
            }
            var V = function(t) {
                    return null == t ? X : function() {
                        return this.querySelectorAll(t)
                    }
                },
                B = function(t) {
                    return function() {
                        return this.matches(t)
                    }
                };
            if ("undefined" != typeof document) {
                var Z = document.documentElement;
                if (!Z.matches) {
                    var W = Z.webkitMatchesSelector || Z.msMatchesSelector || Z.mozMatchesSelector || Z.oMatchesSelector;
                    B = function(t) {
                        return function() {
                            return W.call(this, t)
                        }
                    }
                }
            }
            var J = B,
                Q = function(t) {
                    return new Array(t.length)
                };

            function G(t, n) {
                this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
            }
            G.prototype = {
                constructor: G,
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
            var K = "$";

            function tt(t, n, e, i, r, a) {
                for (var f, o = 0, c = n.length, u = a.length; o < u; ++o)(f = n[o]) ? (f.__data__ = a[o], i[o] = f) : e[o] = new G(t, a[o]);
                for (; o < c; ++o)(f = n[o]) && (r[o] = f)
            }

            function nt(t, n, e, i, r, a, f) {
                var o, c, u, s = {},
                    h = n.length,
                    l = a.length,
                    d = new Array(h);
                for (o = 0; o < h; ++o)(c = n[o]) && (d[o] = u = K + f.call(c, c.__data__, o, n), u in s ? r[o] = c : s[u] = c);
                for (o = 0; o < l; ++o)(c = s[u = K + f.call(t, a[o], o, a)]) ? (i[o] = c, c.__data__ = a[o], s[u] = null) : e[o] = new G(t, a[o]);
                for (o = 0; o < h; ++o)(c = n[o]) && s[d[o]] === c && (r[o] = c)
            }

            function et(t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }
            var it = function(t) {
                return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
            };

            function rt(t, n) {
                return t.style.getPropertyValue(n) || it(t).getComputedStyle(t, null).getPropertyValue(n)
            }

            function at(t) {
                return t.trim().split(/^|\s+/)
            }

            function ft(t) {
                return t.classList || new ot(t)
            }

            function ot(t) {
                this._node = t, this._names = at(t.getAttribute("class") || "")
            }

            function ct(t, n) {
                for (var e = ft(t), i = -1, r = n.length; ++i < r;) e.add(n[i])
            }

            function ut(t, n) {
                for (var e = ft(t), i = -1, r = n.length; ++i < r;) e.remove(n[i])
            }
            ot.prototype = {
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

            function st() {
                this.textContent = ""
            }

            function ht() {
                this.innerHTML = ""
            }

            function lt() {
                this.nextSibling && this.parentNode.appendChild(this)
            }

            function dt() {
                this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
            }

            function _t() {
                return null
            }

            function bt() {
                var t = this.parentNode;
                t && t.removeChild(this)
            }

            function pt() {
                return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
            }

            function yt() {
                return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
            }
            var vt = {},
                gt = null;
            "undefined" != typeof document && ("onmouseenter" in document.documentElement || (vt = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }));

            function xt(t, n, e) {
                return t = mt(t, n, e),
                    function(n) {
                        var e = n.relatedTarget;
                        e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
                    }
            }

            function mt(t, n, e) {
                return function(i) {
                    var r = gt;
                    gt = i;
                    try {
                        t.call(this, this.__data__, n, e)
                    } finally {
                        gt = r
                    }
                }
            }

            function wt(t) {
                return function() {
                    var n = this.__on;
                    if (n) {
                        for (var e, i = 0, r = -1, a = n.length; i < a; ++i) e = n[i], t.type && e.type !== t.type || e.name !== t.name ? n[++r] = e : this.removeEventListener(e.type, e.listener, e.capture);
                        ++r ? n.length = r : delete this.__on
                    }
                }
            }

            function Mt(t, n, e) {
                var i = vt.hasOwnProperty(t.type) ? xt : mt;
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

            function Nt(t, n, e) {
                var i = it(t),
                    r = i.CustomEvent;
                "function" == typeof r ? r = new r(n, e) : (r = i.document.createEvent("Event"), e ? (r.initEvent(n, e.bubbles, e.cancelable), r.detail = e.detail) : r.initEvent(n, !1, !1)), t.dispatchEvent(r)
            }
            var Tt = [null];

            function kt(t, n) {
                this._groups = t, this._parents = n
            }

            function At() {
                return new kt([
                    [document.documentElement]
                ], Tt)
            }
            kt.prototype = At.prototype = {
                constructor: kt,
                select: function(t) {
                    "function" != typeof t && (t = $(t));
                    for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
                        for (var a, f, o = n[r], c = o.length, u = i[r] = new Array(c), s = 0; s < c; ++s)(a = o[s]) && (f = t.call(a, a.__data__, s, o)) && ("__data__" in a && (f.__data__ = a.__data__), u[s] = f);
                    return new kt(i, this._parents)
                },
                selectAll: function(t) {
                    "function" != typeof t && (t = V(t));
                    for (var n = this._groups, e = n.length, i = [], r = [], a = 0; a < e; ++a)
                        for (var f, o = n[a], c = o.length, u = 0; u < c; ++u)(f = o[u]) && (i.push(t.call(f, f.__data__, u, o)), r.push(f));
                    return new kt(i, r)
                },
                filter: function(t) {
                    "function" != typeof t && (t = J(t));
                    for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
                        for (var a, f = n[r], o = f.length, c = i[r] = [], u = 0; u < o; ++u)(a = f[u]) && t.call(a, a.__data__, u, f) && c.push(a);
                    return new kt(i, this._parents)
                },
                data: function(t, n) {
                    if (!t) return _ = new Array(this.size()), s = -1, this.each(function(t) {
                        _[++s] = t
                    }), _;
                    var e, i = n ? nt : tt,
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
                    return (o = new kt(o, r))._enter = c, o._exit = u, o
                },
                enter: function() {
                    return new kt(this._enter || this._groups.map(Q), this._parents)
                },
                exit: function() {
                    return new kt(this._exit || this._groups.map(Q), this._parents)
                },
                merge: function(t) {
                    for (var n = this._groups, e = t._groups, i = n.length, r = e.length, a = Math.min(i, r), f = new Array(i), o = 0; o < a; ++o)
                        for (var c, u = n[o], s = e[o], h = u.length, l = f[o] = new Array(h), d = 0; d < h; ++d)(c = u[d] || s[d]) && (l[d] = c);
                    for (; o < i; ++o) f[o] = n[o];
                    return new kt(f, this._parents)
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
                    t || (t = et);
                    for (var e = this._groups, i = e.length, r = new Array(i), a = 0; a < i; ++a) {
                        for (var f, o = e[a], c = o.length, u = r[a] = new Array(c), s = 0; s < c; ++s)(f = o[s]) && (u[s] = f);
                        u.sort(n)
                    }
                    return new kt(r, this._parents).order()
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
                    var e = j(t);
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
                    })(t, n, null == e ? "" : e)) : rt(this.node(), t)
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
                    var e = at(t + "");
                    if (arguments.length < 2) {
                        for (var i = ft(this.node()), r = -1, a = e.length; ++r < a;)
                            if (!i.contains(e[r])) return !1;
                        return !0
                    }
                    return this.each(("function" == typeof n ? function(t, n) {
                        return function() {
                            (n.apply(this, arguments) ? ct : ut)(this, t)
                        }
                    } : n ? function(t) {
                        return function() {
                            ct(this, t)
                        }
                    } : function(t) {
                        return function() {
                            ut(this, t)
                        }
                    })(e, n))
                },
                text: function(t) {
                    return arguments.length ? this.each(null == t ? st : ("function" == typeof t ? function(t) {
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
                    return arguments.length ? this.each(null == t ? ht : ("function" == typeof t ? function(t) {
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
                    return this.each(lt)
                },
                lower: function() {
                    return this.each(dt)
                },
                append: function(t) {
                    var n = "function" == typeof t ? t : O(t);
                    return this.select(function() {
                        return this.appendChild(n.apply(this, arguments))
                    })
                },
                insert: function(t, n) {
                    var e = "function" == typeof t ? t : O(t),
                        i = null == n ? _t : "function" == typeof n ? n : $(n);
                    return this.select(function() {
                        return this.insertBefore(e.apply(this, arguments), i.apply(this, arguments) || null)
                    })
                },
                remove: function() {
                    return this.each(bt)
                },
                clone: function(t) {
                    return this.select(t ? yt : pt)
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
                        for (o = n ? Mt : wt, null == e && (e = !1), i = 0; i < f; ++i) this.each(o(a[i], n, e));
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
                            return Nt(this, t, n.apply(this, arguments))
                        }
                    } : function(t, n) {
                        return function() {
                            return Nt(this, t, n)
                        }
                    })(t, n))
                }
            };
            var Ct = At,
                St = function(t) {
                    return "string" == typeof t ? new kt([
                        [document.querySelector(t)]
                    ], [document.documentElement]) : new kt([
                        [t]
                    ], Tt)
                },
                Et = 0;

            function Ut() {
                this._ = "@" + (++Et).toString(36)
            }
            Ut.prototype = function() {
                return new Ut
            }.prototype = {
                constructor: Ut,
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

            function Lt(t, n, e, i, r, a, f, o, c, u) {
                this.target = t, this.type = n, this.subject = e, this.identifier = i, this.active = r, this.x = a, this.y = f, this.dx = o, this.dy = c, this._ = u
            }
            Lt.prototype.on = function() {
                var t = this._.on.apply(this._, arguments);
                return t === this._ ? this : t
            };
            var Pt = function(t, n, e) {
                t.prototype = n.prototype = e, e.constructor = t
            };

            function Dt(t, n) {
                var e = Object.create(t.prototype);
                for (var i in n) e[i] = n[i];
                return e
            }

            function Rt() {}
            var Ft = "\\s*([+-]?\\d+)\\s*",
                Yt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                qt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                zt = /^#([0-9a-f]{3})$/,
                Ht = /^#([0-9a-f]{6})$/,
                jt = new RegExp("^rgb\\(" + [Ft, Ft, Ft] + "\\)$"),
                Ot = new RegExp("^rgb\\(" + [qt, qt, qt] + "\\)$"),
                It = new RegExp("^rgba\\(" + [Ft, Ft, Ft, Yt] + "\\)$"),
                $t = new RegExp("^rgba\\(" + [qt, qt, qt, Yt] + "\\)$"),
                Xt = new RegExp("^hsl\\(" + [Yt, qt, qt] + "\\)$"),
                Vt = new RegExp("^hsla\\(" + [Yt, qt, qt, Yt] + "\\)$"),
                Bt = {
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

            function Zt(t) {
                var n;
                return t = (t + "").trim().toLowerCase(), (n = zt.exec(t)) ? new Kt((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = Ht.exec(t)) ? Wt(parseInt(n[1], 16)) : (n = jt.exec(t)) ? new Kt(n[1], n[2], n[3], 1) : (n = Ot.exec(t)) ? new Kt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = It.exec(t)) ? Jt(n[1], n[2], n[3], n[4]) : (n = $t.exec(t)) ? Jt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Xt.exec(t)) ? nn(n[1], n[2] / 100, n[3] / 100, 1) : (n = Vt.exec(t)) ? nn(n[1], n[2] / 100, n[3] / 100, n[4]) : Bt.hasOwnProperty(t) ? Wt(Bt[t]) : "transparent" === t ? new Kt(NaN, NaN, NaN, 0) : null
            }

            function Wt(t) {
                return new Kt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
            }

            function Jt(t, n, e, i) {
                return i <= 0 && (t = n = e = NaN), new Kt(t, n, e, i)
            }

            function Qt(t) {
                return t instanceof Rt || (t = Zt(t)), t ? new Kt((t = t.rgb()).r, t.g, t.b, t.opacity) : new Kt
            }

            function Gt(t, n, e, i) {
                return 1 === arguments.length ? Qt(t) : new Kt(t, n, e, null == i ? 1 : i)
            }

            function Kt(t, n, e, i) {
                this.r = +t, this.g = +n, this.b = +e, this.opacity = +i
            }

            function tn(t) {
                return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
            }

            function nn(t, n, e, i) {
                return i <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new rn(t, n, e, i)
            }

            function en(t, n, e, i) {
                return 1 === arguments.length ? function(t) {
                    if (t instanceof rn) return new rn(t.h, t.s, t.l, t.opacity);
                    if (t instanceof Rt || (t = Zt(t)), !t) return new rn;
                    if (t instanceof rn) return t;
                    var n = (t = t.rgb()).r / 255,
                        e = t.g / 255,
                        i = t.b / 255,
                        r = Math.min(n, e, i),
                        a = Math.max(n, e, i),
                        f = NaN,
                        o = a - r,
                        c = (a + r) / 2;
                    return o ? (f = n === a ? (e - i) / o + 6 * (e < i) : e === a ? (i - n) / o + 2 : (n - e) / o + 4, o /= c < .5 ? a + r : 2 - a - r, f *= 60) : o = c > 0 && c < 1 ? 0 : f, new rn(f, o, c, t.opacity)
                }(t) : new rn(t, n, e, null == i ? 1 : i)
            }

            function rn(t, n, e, i) {
                this.h = +t, this.s = +n, this.l = +e, this.opacity = +i
            }

            function an(t, n, e) {
                return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
            }
            Pt(Rt, Zt, {
                displayable: function() {
                    return this.rgb().displayable()
                },
                hex: function() {
                    return this.rgb().hex()
                },
                toString: function() {
                    return this.rgb() + ""
                }
            }), Pt(Kt, Gt, Dt(Rt, {
                brighter: function(t) {
                    return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Kt(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                darker: function(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new Kt(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                rgb: function() {
                    return this
                },
                displayable: function() {
                    return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
                },
                hex: function() {
                    return "#" + tn(this.r) + tn(this.g) + tn(this.b)
                },
                toString: function() {
                    var t = this.opacity;
                    return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
                }
            })), Pt(rn, en, Dt(Rt, {
                brighter: function(t) {
                    return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new rn(this.h, this.s, this.l * t, this.opacity)
                },
                darker: function(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new rn(this.h, this.s, this.l * t, this.opacity)
                },
                rgb: function() {
                    var t = this.h % 360 + 360 * (this.h < 0),
                        n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                        e = this.l,
                        i = e + (e < .5 ? e : 1 - e) * n,
                        r = 2 * e - i;
                    return new Kt(an(t >= 240 ? t - 240 : t + 120, r, i), an(t, r, i), an(t < 120 ? t + 240 : t - 120, r, i), this.opacity)
                },
                displayable: function() {
                    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
                }
            }));
            var fn = Math.PI / 180,
                on = 180 / Math.PI,
                cn = .96422,
                un = 1,
                sn = .82521,
                hn = 4 / 29,
                ln = 6 / 29,
                dn = 3 * ln * ln,
                _n = ln * ln * ln;

            function bn(t) {
                if (t instanceof yn) return new yn(t.l, t.a, t.b, t.opacity);
                if (t instanceof Nn) {
                    if (isNaN(t.h)) return new yn(t.l, 0, 0, t.opacity);
                    var n = t.h * fn;
                    return new yn(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
                }
                t instanceof Kt || (t = Qt(t));
                var e, i, r = mn(t.r),
                    a = mn(t.g),
                    f = mn(t.b),
                    o = vn((.2225045 * r + .7168786 * a + .0606169 * f) / un);
                return r === a && a === f ? e = i = o : (e = vn((.4360747 * r + .3850649 * a + .1430804 * f) / cn), i = vn((.0139322 * r + .0971045 * a + .7141733 * f) / sn)), new yn(116 * o - 16, 500 * (e - o), 200 * (o - i), t.opacity)
            }

            function pn(t, n, e, i) {
                return 1 === arguments.length ? bn(t) : new yn(t, n, e, null == i ? 1 : i)
            }

            function yn(t, n, e, i) {
                this.l = +t, this.a = +n, this.b = +e, this.opacity = +i
            }

            function vn(t) {
                return t > _n ? Math.pow(t, 1 / 3) : t / dn + hn
            }

            function gn(t) {
                return t > ln ? t * t * t : dn * (t - hn)
            }

            function xn(t) {
                return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
            }

            function mn(t) {
                return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
            }

            function wn(t) {
                if (t instanceof Nn) return new Nn(t.h, t.c, t.l, t.opacity);
                if (t instanceof yn || (t = bn(t)), 0 === t.a && 0 === t.b) return new Nn(NaN, 0, t.l, t.opacity);
                var n = Math.atan2(t.b, t.a) * on;
                return new Nn(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
            }

            function Mn(t, n, e, i) {
                return 1 === arguments.length ? wn(t) : new Nn(t, n, e, null == i ? 1 : i)
            }

            function Nn(t, n, e, i) {
                this.h = +t, this.c = +n, this.l = +e, this.opacity = +i
            }
            Pt(yn, pn, Dt(Rt, {
                brighter: function(t) {
                    return new yn(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                },
                darker: function(t) {
                    return new yn(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                },
                rgb: function() {
                    var t = (this.l + 16) / 116,
                        n = isNaN(this.a) ? t : t + this.a / 500,
                        e = isNaN(this.b) ? t : t - this.b / 200;
                    return new Kt(xn(3.1338561 * (n = cn * gn(n)) - 1.6168667 * (t = un * gn(t)) - .4906146 * (e = sn * gn(e))), xn(-.9787684 * n + 1.9161415 * t + .033454 * e), xn(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
                }
            })), Pt(Nn, Mn, Dt(Rt, {
                brighter: function(t) {
                    return new Nn(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
                },
                darker: function(t) {
                    return new Nn(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
                },
                rgb: function() {
                    return bn(this).rgb()
                }
            }));
            var Tn = -.29227,
                kn = -.90649,
                An = 1.97294,
                Cn = An * kn,
                Sn = 1.78277 * An,
                En = 1.78277 * Tn - -.14861 * kn;

            function Un(t, n, e, i) {
                return 1 === arguments.length ? function(t) {
                    if (t instanceof Ln) return new Ln(t.h, t.s, t.l, t.opacity);
                    t instanceof Kt || (t = Qt(t));
                    var n = t.r / 255,
                        e = t.g / 255,
                        i = t.b / 255,
                        r = (En * i + Cn * n - Sn * e) / (En + Cn - Sn),
                        a = i - r,
                        f = (An * (e - r) - Tn * a) / kn,
                        o = Math.sqrt(f * f + a * a) / (An * r * (1 - r)),
                        c = o ? Math.atan2(f, a) * on - 120 : NaN;
                    return new Ln(c < 0 ? c + 360 : c, o, r, t.opacity)
                }(t) : new Ln(t, n, e, null == i ? 1 : i)
            }

            function Ln(t, n, e, i) {
                this.h = +t, this.s = +n, this.l = +e, this.opacity = +i
            }

            function Pn(t, n, e, i, r) {
                var a = t * t,
                    f = a * t;
                return ((1 - 3 * t + 3 * a - f) * n + (4 - 6 * a + 3 * f) * e + (1 + 3 * t + 3 * a - 3 * f) * i + f * r) / 6
            }
            Pt(Ln, Un, Dt(Rt, {
                brighter: function(t) {
                    return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Ln(this.h, this.s, this.l * t, this.opacity)
                },
                darker: function(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new Ln(this.h, this.s, this.l * t, this.opacity)
                },
                rgb: function() {
                    var t = isNaN(this.h) ? 0 : (this.h + 120) * fn,
                        n = +this.l,
                        e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                        i = Math.cos(t),
                        r = Math.sin(t);
                    return new Kt(255 * (n + e * (-.14861 * i + 1.78277 * r)), 255 * (n + e * (Tn * i + kn * r)), 255 * (n + e * (An * i)), this.opacity)
                }
            }));
            var Dn = function(t) {
                return function() {
                    return t
                }
            };

            function Rn(t, n) {
                return function(e) {
                    return t + e * n
                }
            }

            function Fn(t, n) {
                var e = n - t;
                return e ? Rn(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Dn(isNaN(t) ? n : t)
            }

            function Yn(t) {
                return 1 == (t = +t) ? qn : function(n, e) {
                    return e - n ? function(t, n, e) {
                        return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                            function(i) {
                                return Math.pow(t + i * n, e)
                            }
                    }(n, e, t) : Dn(isNaN(n) ? e : n)
                }
            }

            function qn(t, n) {
                var e = n - t;
                return e ? Rn(t, e) : Dn(isNaN(t) ? n : t)
            }
            var zn = function t(n) {
                var e = Yn(n);

                function i(t, n) {
                    var i = e((t = Gt(t)).r, (n = Gt(n)).r),
                        r = e(t.g, n.g),
                        a = e(t.b, n.b),
                        f = qn(t.opacity, n.opacity);
                    return function(n) {
                        return t.r = i(n), t.g = r(n), t.b = a(n), t.opacity = f(n), t + ""
                    }
                }
                return i.gamma = t, i
            }(1);

            function Hn(t) {
                return function(n) {
                    var e, i, r = n.length,
                        a = new Array(r),
                        f = new Array(r),
                        o = new Array(r);
                    for (e = 0; e < r; ++e) i = Gt(n[e]), a[e] = i.r || 0, f[e] = i.g || 0, o[e] = i.b || 0;
                    return a = t(a), f = t(f), o = t(o), i.opacity = 1,
                        function(t) {
                            return i.r = a(t), i.g = f(t), i.b = o(t), i + ""
                        }
                }
            }
            var jn = Hn(function(t) {
                    var n = t.length - 1;
                    return function(e) {
                        var i = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                            r = t[i],
                            a = t[i + 1],
                            f = i > 0 ? t[i - 1] : 2 * r - a,
                            o = i < n - 1 ? t[i + 2] : 2 * a - r;
                        return Pn((e - i / n) * n, f, r, a, o)
                    }
                }),
                On = (Hn(function(t) {
                    var n = t.length;
                    return function(e) {
                        var i = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                            r = t[(i + n - 1) % n],
                            a = t[i % n],
                            f = t[(i + 1) % n],
                            o = t[(i + 2) % n];
                        return Pn((e - i / n) * n, r, a, f, o)
                    }
                }), function(t, n) {
                    return n -= t = +t,
                        function(e) {
                            return t + n * e
                        }
                }),
                In = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                $n = new RegExp(In.source, "g");
            var Xn, Vn, Bn, Zn, Wn = function(t, n) {
                    var e, i, r, a = In.lastIndex = $n.lastIndex = 0,
                        f = -1,
                        o = [],
                        c = [];
                    for (t += "", n += "";
                        (e = In.exec(t)) && (i = $n.exec(n));)(r = i.index) > a && (r = n.slice(a, r), o[f] ? o[f] += r : o[++f] = r), (e = e[0]) === (i = i[0]) ? o[f] ? o[f] += i : o[++f] = i : (o[++f] = null, c.push({
                        i: f,
                        x: On(e, i)
                    })), a = $n.lastIndex;
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
                Jn = function(t, n) {
                    var e, i = typeof n;
                    return null == n || "boolean" === i ? Dn(n) : ("number" === i ? On : "string" === i ? (e = Zt(n)) ? (n = e, zn) : Wn : n instanceof Zt ? zn : n instanceof Date ? function(t, n) {
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
                        for (e = 0; e < r; ++e) a[e] = Jn(t[e], n[e]);
                        for (; e < i; ++e) f[e] = n[e];
                        return function(t) {
                            for (e = 0; e < r; ++e) f[e] = a[e](t);
                            return f
                        }
                    } : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? function(t, n) {
                        var e, i = {},
                            r = {};
                        for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? i[e] = Jn(t[e], n[e]) : r[e] = n[e];
                        return function(t) {
                            for (e in i) r[e] = i[e](t);
                            return r
                        }
                    } : On)(t, n)
                },
                Qn = function(t, n) {
                    return n -= t = +t,
                        function(e) {
                            return Math.round(t + n * e)
                        }
                },
                Gn = 180 / Math.PI,
                Kn = {
                    translateX: 0,
                    translateY: 0,
                    rotate: 0,
                    skewX: 0,
                    scaleX: 1,
                    scaleY: 1
                },
                te = function(t, n, e, i, r, a) {
                    var f, o, c;
                    return (f = Math.sqrt(t * t + n * n)) && (t /= f, n /= f), (c = t * e + n * i) && (e -= t * c, i -= n * c), (o = Math.sqrt(e * e + i * i)) && (e /= o, i /= o, c /= o), t * i < n * e && (t = -t, n = -n, c = -c, f = -f), {
                        translateX: r,
                        translateY: a,
                        rotate: Math.atan2(n, t) * Gn,
                        skewX: Math.atan(c) * Gn,
                        scaleX: f,
                        scaleY: o
                    }
                };

            function ne(t, n, e, i) {
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
                                    x: On(t, r)
                                }, {
                                    i: c - 2,
                                    x: On(i, a)
                                })
                            } else(r || a) && f.push("translate(" + r + n + a + e)
                        }(a.translateX, a.translateY, f.translateX, f.translateY, o, c),
                        function(t, n, e, a) {
                            t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), a.push({
                                i: e.push(r(e) + "rotate(", null, i) - 2,
                                x: On(t, n)
                            })) : n && e.push(r(e) + "rotate(" + n + i)
                        }(a.rotate, f.rotate, o, c),
                        function(t, n, e, a) {
                            t !== n ? a.push({
                                i: e.push(r(e) + "skewX(", null, i) - 2,
                                x: On(t, n)
                            }) : n && e.push(r(e) + "skewX(" + n + i)
                        }(a.skewX, f.skewX, o, c),
                        function(t, n, e, i, a, f) {
                            if (t !== e || n !== i) {
                                var o = a.push(r(a) + "scale(", null, ",", null, ")");
                                f.push({
                                    i: o - 4,
                                    x: On(t, e)
                                }, {
                                    i: o - 2,
                                    x: On(n, i)
                                })
                            } else 1 === e && 1 === i || a.push(r(a) + "scale(" + e + "," + i + ")")
                        }(a.scaleX, a.scaleY, f.scaleX, f.scaleY, o, c), a = f = null,
                        function(t) {
                            for (var n, e = -1, i = c.length; ++e < i;) o[(n = c[e]).i] = n.x(t);
                            return o.join("")
                        }
                }
            }
            var ee = ne(function(t) {
                    return "none" === t ? Kn : (Xn || (Xn = document.createElement("DIV"), Vn = document.documentElement, Bn = document.defaultView), Xn.style.transform = t, t = Bn.getComputedStyle(Vn.appendChild(Xn), null).getPropertyValue("transform"), Vn.removeChild(Xn), t = t.slice(7, -1).split(","), te(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
                }, "px, ", "px)", "deg)"),
                ie = ne(function(t) {
                    return null == t ? Kn : (Zn || (Zn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Zn.setAttribute("transform", t), (t = Zn.transform.baseVal.consolidate()) ? (t = t.matrix, te(t.a, t.b, t.c, t.d, t.e, t.f)) : Kn)
                }, ", ", ")", ")");
            Math.SQRT2;

            function re(t) {
                return function(n, e) {
                    var i = t((n = en(n)).h, (e = en(e)).h),
                        r = qn(n.s, e.s),
                        a = qn(n.l, e.l),
                        f = qn(n.opacity, e.opacity);
                    return function(t) {
                        return n.h = i(t), n.s = r(t), n.l = a(t), n.opacity = f(t), n + ""
                    }
                }
            }
            re(Fn), re(qn);

            function ae(t) {
                return function(n, e) {
                    var i = t((n = Mn(n)).h, (e = Mn(e)).h),
                        r = qn(n.c, e.c),
                        a = qn(n.l, e.l),
                        f = qn(n.opacity, e.opacity);
                    return function(t) {
                        return n.h = i(t), n.c = r(t), n.l = a(t), n.opacity = f(t), n + ""
                    }
                }
            }
            ae(Fn), ae(qn);

            function fe(t) {
                return function n(e) {
                    function i(n, i) {
                        var r = t((n = Un(n)).h, (i = Un(i)).h),
                            a = qn(n.s, i.s),
                            f = qn(n.l, i.l),
                            o = qn(n.opacity, i.opacity);
                        return function(t) {
                            return n.h = r(t), n.s = a(t), n.l = f(Math.pow(t, e)), n.opacity = o(t), n + ""
                        }
                    }
                    return e = +e, i.gamma = n, i
                }(1)
            }
            fe(Fn);
            var oe = fe(qn);
            var ce, ue, se = 0,
                he = 0,
                le = 0,
                de = 1e3,
                _e = 0,
                be = 0,
                pe = 0,
                ye = "object" == typeof performance && performance.now ? performance : Date,
                ve = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                    setTimeout(t, 17)
                };

            function ge() {
                return be || (ve(xe), be = ye.now() + pe)
            }

            function xe() {
                be = 0
            }

            function me() {
                this._call = this._time = this._next = null
            }

            function we(t, n, e) {
                var i = new me;
                return i.restart(t, n, e), i
            }

            function Me() {
                be = (_e = ye.now()) + pe, se = he = 0;
                try {
                    ! function() {
                        ge(), ++se;
                        for (var t, n = ce; n;)(t = be - n._time) >= 0 && n._call.call(null, t), n = n._next;
                        --se
                    }()
                } finally {
                    se = 0,
                        function() {
                            var t, n, e = ce,
                                i = 1 / 0;
                            for (; e;) e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ce = n);
                            ue = t, Te(i)
                        }(), be = 0
                }
            }

            function Ne() {
                var t = ye.now(),
                    n = t - _e;
                n > de && (pe -= n, _e = t)
            }

            function Te(t) {
                se || (he && (he = clearTimeout(he)), t - be > 24 ? (t < 1 / 0 && (he = setTimeout(Me, t - ye.now() - pe)), le && (le = clearInterval(le))) : (le || (_e = ye.now(), le = setInterval(Ne, de)), se = 1, ve(Me)))
            }
            me.prototype = we.prototype = {
                constructor: me,
                restart: function(t, n, e) {
                    if ("function" != typeof t) throw new TypeError("callback is not a function");
                    e = (null == e ? ge() : +e) + (null == n ? 0 : +n), this._next || ue === this || (ue ? ue._next = this : ce = this, ue = this), this._call = t, this._time = e, Te()
                },
                stop: function() {
                    this._call && (this._call = null, this._time = 1 / 0, Te())
                }
            };
            var ke = function(t, n, e) {
                    var i = new me;
                    return n = null == n ? 0 : +n, i.restart(function(e) {
                        i.stop(), t(e + n)
                    }, n, e), i
                },
                Ae = q("start", "end", "interrupt"),
                Ce = [],
                Se = 0,
                Ee = 1,
                Ue = 2,
                Le = 3,
                Pe = 4,
                De = 5,
                Re = 6,
                Fe = function(t, n, e, i, r, a) {
                    var f = t.__transition;
                    if (f) {
                        if (e in f) return
                    } else t.__transition = {};
                    ! function(t, n, e) {
                        var i, r = t.__transition;

                        function a(c) {
                            var u, s, h, l;
                            if (e.state !== Ee) return o();
                            for (u in r)
                                if ((l = r[u]).name === e.name) {
                                    if (l.state === Le) return ke(a);
                                    l.state === Pe ? (l.state = Re, l.timer.stop(), l.on.call("interrupt", t, t.__data__, l.index, l.group), delete r[u]) : +u < n && (l.state = Re, l.timer.stop(), delete r[u])
                                } if (ke(function() {
                                    e.state === Le && (e.state = Pe, e.timer.restart(f, e.delay, e.time), f(c))
                                }), e.state = Ue, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Ue) {
                                for (e.state = Le, i = new Array(h = e.tween.length), u = 0, s = -1; u < h; ++u)(l = e.tween[u].value.call(t, t.__data__, e.index, e.group)) && (i[++s] = l);
                                i.length = s + 1
                            }
                        }

                        function f(n) {
                            for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(o), e.state = De, 1), a = -1, f = i.length; ++a < f;) i[a].call(null, r);
                            e.state === De && (e.on.call("end", t, t.__data__, e.index, e.group), o())
                        }

                        function o() {
                            for (var i in e.state = Re, e.timer.stop(), delete r[n], r) return;
                            delete t.__transition
                        }
                        r[n] = e, e.timer = we(function(t) {
                            e.state = Ee, e.timer.restart(a, e.delay, e.time), e.delay <= t && a(t - e.delay)
                        }, 0, e.time)
                    }(t, e, {
                        name: n,
                        index: i,
                        group: r,
                        on: Ae,
                        tween: Ce,
                        time: a.time,
                        delay: a.delay,
                        duration: a.duration,
                        ease: a.ease,
                        timer: null,
                        state: Se
                    })
                };

            function Ye(t, n) {
                var e = ze(t, n);
                if (e.state > Se) throw new Error("too late; already scheduled");
                return e
            }

            function qe(t, n) {
                var e = ze(t, n);
                if (e.state > Ue) throw new Error("too late; already started");
                return e
            }

            function ze(t, n) {
                var e = t.__transition;
                if (!e || !(e = e[n])) throw new Error("transition not found");
                return e
            }
            var He = function(t, n) {
                var e, i, r, a = t.__transition,
                    f = !0;
                if (a) {
                    for (r in n = null == n ? null : n + "", a)(e = a[r]).name === n ? (i = e.state > Ue && e.state < De, e.state = Re, e.timer.stop(), i && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete a[r]) : f = !1;
                    f && delete t.__transition
                }
            };

            function je(t, n, e) {
                var i = t._id;
                return t.each(function() {
                        var t = qe(this, i);
                        (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                    }),
                    function(t) {
                        return ze(t, i).value[n]
                    }
            }
            var Oe = function(t, n) {
                var e;
                return ("number" == typeof n ? On : n instanceof Zt ? zn : (e = Zt(n)) ? (n = e, zn) : Wn)(t, n)
            };
            var Ie = Ct.prototype.constructor;
            var $e = 0;

            function Xe(t, n, e, i) {
                this._groups = t, this._parents = n, this._name = e, this._id = i
            }

            function Ve() {
                return ++$e
            }
            var Be = Ct.prototype;

            function Ze(t) {
                return +t
            }
            Xe.prototype = function(t) {
                return Ct().transition(t)
            }.prototype = {
                constructor: Xe,
                select: function(t) {
                    var n = this._name,
                        e = this._id;
                    "function" != typeof t && (t = $(t));
                    for (var i = this._groups, r = i.length, a = new Array(r), f = 0; f < r; ++f)
                        for (var o, c, u = i[f], s = u.length, h = a[f] = new Array(s), l = 0; l < s; ++l)(o = u[l]) && (c = t.call(o, o.__data__, l, u)) && ("__data__" in o && (c.__data__ = o.__data__), h[l] = c, Fe(h[l], n, e, l, h, ze(o, e)));
                    return new Xe(a, this._parents, n, e)
                },
                selectAll: function(t) {
                    var n = this._name,
                        e = this._id;
                    "function" != typeof t && (t = V(t));
                    for (var i = this._groups, r = i.length, a = [], f = [], o = 0; o < r; ++o)
                        for (var c, u = i[o], s = u.length, h = 0; h < s; ++h)
                            if (c = u[h]) {
                                for (var l, d = t.call(c, c.__data__, h, u), _ = ze(c, e), b = 0, p = d.length; b < p; ++b)(l = d[b]) && Fe(l, n, e, b, d, _);
                                a.push(d), f.push(c)
                            } return new Xe(a, f, n, e)
                },
                filter: function(t) {
                    "function" != typeof t && (t = J(t));
                    for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
                        for (var a, f = n[r], o = f.length, c = i[r] = [], u = 0; u < o; ++u)(a = f[u]) && t.call(a, a.__data__, u, f) && c.push(a);
                    return new Xe(i, this._parents, this._name, this._id)
                },
                merge: function(t) {
                    if (t._id !== this._id) throw new Error;
                    for (var n = this._groups, e = t._groups, i = n.length, r = e.length, a = Math.min(i, r), f = new Array(i), o = 0; o < a; ++o)
                        for (var c, u = n[o], s = e[o], h = u.length, l = f[o] = new Array(h), d = 0; d < h; ++d)(c = u[d] || s[d]) && (l[d] = c);
                    for (; o < i; ++o) f[o] = n[o];
                    return new Xe(f, this._parents, this._name, this._id)
                },
                selection: function() {
                    return new Ie(this._groups, this._parents)
                },
                transition: function() {
                    for (var t = this._name, n = this._id, e = Ve(), i = this._groups, r = i.length, a = 0; a < r; ++a)
                        for (var f, o = i[a], c = o.length, u = 0; u < c; ++u)
                            if (f = o[u]) {
                                var s = ze(f, n);
                                Fe(f, t, e, u, o, {
                                    time: s.time + s.delay + s.duration,
                                    delay: 0,
                                    duration: s.duration,
                                    ease: s.ease
                                })
                            } return new Xe(i, this._parents, t, e)
                },
                call: Be.call,
                nodes: Be.nodes,
                node: Be.node,
                size: Be.size,
                empty: Be.empty,
                each: Be.each,
                on: function(t, n) {
                    var e = this._id;
                    return arguments.length < 2 ? ze(this.node(), e).on.on(t) : this.each(function(t, n, e) {
                        var i, r, a = function(t) {
                            return (t + "").trim().split(/^|\s+/).every(function(t) {
                                var n = t.indexOf(".");
                                return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                            })
                        }(n) ? Ye : qe;
                        return function() {
                            var f = a(this, t),
                                o = f.on;
                            o !== i && (r = (i = o).copy()).on(n, e), f.on = r
                        }
                    }(e, t, n))
                },
                attr: function(t, n) {
                    var e = j(t),
                        i = "transform" === e ? ie : Oe;
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
                    })(e, i, je(this, "attr." + t, n)) : null == n ? (e.local ? function(t) {
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
                    var i = j(t);
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
                    var i = "transform" == (t += "") ? ee : Oe;
                    return null == n ? this.styleTween(t, function(t, n) {
                        var e, i, r;
                        return function() {
                            var a = rt(this, t),
                                f = (this.style.removeProperty(t), rt(this, t));
                            return a === f ? null : a === e && f === i ? r : r = n(e = a, i = f)
                        }
                    }(t, i)).on("end.style." + t, function(t) {
                        return function() {
                            this.style.removeProperty(t)
                        }
                    }(t)) : this.styleTween(t, "function" == typeof n ? function(t, n, e) {
                        var i, r, a;
                        return function() {
                            var f = rt(this, t),
                                o = e(this);
                            return null == o && (this.style.removeProperty(t), o = rt(this, t)), f === o ? null : f === i && o === r ? a : a = n(i = f, r = o)
                        }
                    }(t, i, je(this, "style." + t, n)) : function(t, n, e) {
                        var i, r;
                        return function() {
                            var a = rt(this, t);
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
                    }(je(this, "text", t)) : function(t) {
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
                        for (var i, r = ze(this.node(), e).tween, a = 0, f = r.length; a < f; ++a)
                            if ((i = r[a]).name === t) return i.value;
                        return null
                    }
                    return this.each((null == n ? function(t, n) {
                        var e, i;
                        return function() {
                            var r = qe(this, t),
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
                            var a = qe(this, t),
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
                            Ye(this, t).delay = +n.apply(this, arguments)
                        }
                    } : function(t, n) {
                        return n = +n,
                            function() {
                                Ye(this, t).delay = n
                            }
                    })(n, t)) : ze(this.node(), n).delay
                },
                duration: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(("function" == typeof t ? function(t, n) {
                        return function() {
                            qe(this, t).duration = +n.apply(this, arguments)
                        }
                    } : function(t, n) {
                        return n = +n,
                            function() {
                                qe(this, t).duration = n
                            }
                    })(n, t)) : ze(this.node(), n).duration
                },
                ease: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(function(t, n) {
                        if ("function" != typeof n) throw new Error;
                        return function() {
                            qe(this, t).ease = n
                        }
                    }(n, t)) : ze(this.node(), n).ease
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
            var We = 2 * Math.PI,
                Je = (function t(n, e) {
                    var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= We);

                    function r(t) {
                        return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e)
                    }
                    return r.amplitude = function(n) {
                        return t(n, e * We)
                    }, r.period = function(e) {
                        return t(n, e)
                    }, r
                }(1, .3), function t(n, e) {
                    var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= We);

                    function r(t) {
                        return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e)
                    }
                    return r.amplitude = function(n) {
                        return t(n, e * We)
                    }, r.period = function(e) {
                        return t(n, e)
                    }, r
                }(1, .3), function t(n, e) {
                    var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= We);

                    function r(t) {
                        return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2
                    }
                    return r.amplitude = function(n) {
                        return t(n, e * We)
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

            function Qe(t, n) {
                for (var e; !(e = t.__transition) || !(e = e[n]);)
                    if (!(t = t.parentNode)) return Je.time = ge(), Je;
                return e
            }
            Ct.prototype.interrupt = function(t) {
                return this.each(function() {
                    He(this, t)
                })
            }, Ct.prototype.transition = function(t) {
                var n, e;
                t instanceof Xe ? (n = t._id, t = t._name) : (n = Ve(), (e = Je).time = ge(), t = null == t ? null : t + "");
                for (var i = this._groups, r = i.length, a = 0; a < r; ++a)
                    for (var f, o = i[a], c = o.length, u = 0; u < c; ++u)(f = o[u]) && Fe(f, t, n, u, o, e || Qe(f, n));
                return new Xe(i, this._parents, t, n)
            };
            ["e", "w"].map(Ge), ["n", "s"].map(Ge), ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Ge);

            function Ge(t) {
                return {
                    type: t
                }
            }
            Math.cos, Math.sin, Math.PI, Math.max;
            Array.prototype.slice;
            var Ke = Math.PI,
                ti = 2 * Ke,
                ni = ti - 1e-6;

            function ei() {
                this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
            }

            function ii() {
                return new ei
            }
            ei.prototype = ii.prototype = {
                constructor: ei,
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
                                v = r * Math.tan((Ke - Math.acos((_ + h - b) / (2 * p * y))) / 2),
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
                    null === this._x1 ? this._ += "M" + c + "," + u : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - u) > 1e-6) && (this._ += "L" + c + "," + u), e && (h < 0 && (h = h % ti + ti), h > ni ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - f) + "," + (n - o) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = u) : h > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(h >= Ke) + "," + s + "," + (this._x1 = t + e * Math.cos(r)) + "," + (this._y1 = n + e * Math.sin(r))))
                },
                rect: function(t, n, e, i) {
                    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +i + "h" + -e + "Z"
                },
                toString: function() {
                    return this._
                }
            };
            var ri = ii;

            function ai() {}

            function fi(t, n) {
                var e = new ai;
                if (t instanceof ai) t.each(function(t, n) {
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
            ai.prototype = fi.prototype = {
                constructor: ai,
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
            var oi = fi;

            function ci() {}
            var ui = oi.prototype;

            function si(t, n) {
                var e = new ci;
                if (t instanceof ci) t.each(function(t) {
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
            ci.prototype = si.prototype = {
                constructor: ci,
                has: ui.has,
                add: function(t) {
                    return this["$" + (t += "")] = t, this
                },
                remove: ui.remove,
                clear: ui.clear,
                values: ui.keys,
                size: ui.size,
                empty: ui.empty,
                each: ui.each
            };
            Array.prototype.slice;
            var hi = {},
                li = {},
                di = 34,
                _i = 10,
                bi = 13;

            function pi(t) {
                return new Function("d", "return {" + t.map(function(t, n) {
                    return JSON.stringify(t) + ": d[" + n + "]"
                }).join(",") + "}")
            }
            var yi = function(t) {
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
                            if (c) return li;
                            if (u) return u = !1, hi;
                            var n, i, r = f;
                            if (t.charCodeAt(r) === di) {
                                for (; f++ < a && t.charCodeAt(f) !== di || t.charCodeAt(++f) === di;);
                                return (n = f) >= a ? c = !0 : (i = t.charCodeAt(f++)) === _i ? u = !0 : i === bi && (u = !0, t.charCodeAt(f) === _i && ++f), t.slice(r + 1, n - 1).replace(/""/g, '"')
                            }
                            for (; f < a;) {
                                if ((i = t.charCodeAt(n = f++)) === _i) u = !0;
                                else if (i === bi) u = !0, t.charCodeAt(f) === _i && ++f;
                                else if (i !== e) continue;
                                return t.slice(r, n)
                            }
                            return c = !0, t.slice(r, a)
                        }
                        for (t.charCodeAt(a - 1) === _i && --a, t.charCodeAt(a - 1) === bi && --a;
                            (i = s()) !== li;) {
                            for (var h = []; i !== hi && i !== li;) h.push(i), i = s();
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
                                    var e = pi(t);
                                    return function(i, r) {
                                        return n(e(i), r, t)
                                    }
                                }(t, n) : pi(t)
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
                vi = yi(","),
                gi = vi.parse,
                xi = (vi.parseRows, vi.format, vi.formatRows, yi("\t")),
                mi = xi.parse;
            xi.parseRows, xi.format, xi.formatRows;

            function wi(t) {
                if (!t.ok) throw new Error(t.status + " " + t.statusText);
                return t.text()
            }
            var Mi = function(t, n) {
                return fetch(t, n).then(wi)
            };

            function Ni(t) {
                return function(n, e, i) {
                    return 2 === arguments.length && "function" == typeof e && (i = e, e = void 0), Mi(n, e).then(function(n) {
                        return t(n, i)
                    })
                }
            }
            Ni(gi), Ni(mi);

            function Ti(t) {
                if (!t.ok) throw new Error(t.status + " " + t.statusText);
                return t.json()
            }
            var ki = function(t, n) {
                return fetch(t, n).then(Ti)
            };

            function Ai(t) {
                return function(n, e) {
                    return Mi(n, e).then(function(n) {
                        return (new DOMParser).parseFromString(n, t)
                    })
                }
            }
            Ai("application/xml"), Ai("text/html"), Ai("image/svg+xml");

            function Ci(t, n, e, i) {
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
            var Si = function(t, n, e, i, r) {
                this.node = t, this.x0 = n, this.y0 = e, this.x1 = i, this.y1 = r
            };

            function Ei(t) {
                return t[0]
            }

            function Ui(t) {
                return t[1]
            }

            function Li(t, n, e) {
                var i = new Pi(null == n ? Ei : n, null == e ? Ui : e, NaN, NaN, NaN, NaN);
                return null == t ? i : i.addAll(t)
            }

            function Pi(t, n, e, i, r, a) {
                this._x = t, this._y = n, this._x0 = e, this._y0 = i, this._x1 = r, this._y1 = a, this._root = void 0
            }

            function Di(t) {
                for (var n = {
                        data: t.data
                    }, e = n; t = t.next;) e = e.next = {
                    data: t.data
                };
                return n
            }
            var Ri = Li.prototype = Pi.prototype;
            Ri.copy = function() {
                var t, n, e = new Pi(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
                    i = this._root;
                if (!i) return e;
                if (!i.length) return e._root = Di(i), e;
                for (t = [{
                        source: i,
                        target: e._root = new Array(4)
                    }]; i = t.pop();)
                    for (var r = 0; r < 4; ++r)(n = i.source[r]) && (n.length ? t.push({
                        source: n,
                        target: i.target[r] = new Array(4)
                    }) : i.target[r] = Di(n));
                return e
            }, Ri.add = function(t) {
                var n = +this._x.call(null, t),
                    e = +this._y.call(null, t);
                return Ci(this.cover(n, e), n, e, t)
            }, Ri.addAll = function(t) {
                var n, e, i, r, a = t.length,
                    f = new Array(a),
                    o = new Array(a),
                    c = 1 / 0,
                    u = 1 / 0,
                    s = -1 / 0,
                    h = -1 / 0;
                for (e = 0; e < a; ++e) isNaN(i = +this._x.call(null, n = t[e])) || isNaN(r = +this._y.call(null, n)) || (f[e] = i, o[e] = r, i < c && (c = i), i > s && (s = i), r < u && (u = r), r > h && (h = r));
                for (s < c && (c = this._x0, s = this._x1), h < u && (u = this._y0, h = this._y1), this.cover(c, u).cover(s, h), e = 0; e < a; ++e) Ci(this, f[e], o[e], t[e]);
                return this
            }, Ri.cover = function(t, n) {
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
            }, Ri.data = function() {
                var t = [];
                return this.visit(function(n) {
                    if (!n.length)
                        do {
                            t.push(n.data)
                        } while (n = n.next)
                }), t
            }, Ri.extent = function(t) {
                return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
                    [this._x0, this._y0],
                    [this._x1, this._y1]
                ]
            }, Ri.find = function(t, n, e) {
                var i, r, a, f, o, c, u, s = this._x0,
                    h = this._y0,
                    l = this._x1,
                    d = this._y1,
                    _ = [],
                    b = this._root;
                for (b && _.push(new Si(b, s, h, l, d)), null == e ? e = 1 / 0 : (s = t - e, h = n - e, l = t + e, d = n + e, e *= e); c = _.pop();)
                    if (!(!(b = c.node) || (r = c.x0) > l || (a = c.y0) > d || (f = c.x1) < s || (o = c.y1) < h))
                        if (b.length) {
                            var p = (r + f) / 2,
                                y = (a + o) / 2;
                            _.push(new Si(b[3], p, y, f, o), new Si(b[2], r, y, p, o), new Si(b[1], p, a, f, y), new Si(b[0], r, a, p, y)), (u = (n >= y) << 1 | t >= p) && (c = _[_.length - 1], _[_.length - 1] = _[_.length - 1 - u], _[_.length - 1 - u] = c)
                        } else {
                            var v = t - +this._x.call(null, b.data),
                                g = n - +this._y.call(null, b.data),
                                x = v * v + g * g;
                            if (x < e) {
                                var m = Math.sqrt(e = x);
                                s = t - m, h = n - m, l = t + m, d = n + m, i = b.data
                            }
                        } return i
            }, Ri.remove = function(t) {
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
            }, Ri.removeAll = function(t) {
                for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
                return this
            }, Ri.root = function() {
                return this._root
            }, Ri.size = function() {
                var t = 0;
                return this.visit(function(n) {
                    if (!n.length)
                        do {
                            ++t
                        } while (n = n.next)
                }), t
            }, Ri.visit = function(t) {
                var n, e, i, r, a, f, o = [],
                    c = this._root;
                for (c && o.push(new Si(c, this._x0, this._y0, this._x1, this._y1)); n = o.pop();)
                    if (!t(c = n.node, i = n.x0, r = n.y0, a = n.x1, f = n.y1) && c.length) {
                        var u = (i + a) / 2,
                            s = (r + f) / 2;
                        (e = c[3]) && o.push(new Si(e, u, s, a, f)), (e = c[2]) && o.push(new Si(e, i, s, u, f)), (e = c[1]) && o.push(new Si(e, u, r, a, s)), (e = c[0]) && o.push(new Si(e, i, r, u, s))
                    } return this
            }, Ri.visitAfter = function(t) {
                var n, e = [],
                    i = [];
                for (this._root && e.push(new Si(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
                    var r = n.node;
                    if (r.length) {
                        var a, f = n.x0,
                            o = n.y0,
                            c = n.x1,
                            u = n.y1,
                            s = (f + c) / 2,
                            h = (o + u) / 2;
                        (a = r[0]) && e.push(new Si(a, f, o, s, h)), (a = r[1]) && e.push(new Si(a, s, o, c, h)), (a = r[2]) && e.push(new Si(a, f, h, s, u)), (a = r[3]) && e.push(new Si(a, s, h, c, u))
                    }
                    i.push(n)
                }
                for (; n = i.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
                return this
            }, Ri.x = function(t) {
                return arguments.length ? (this._x = t, this) : this._x
            }, Ri.y = function(t) {
                return arguments.length ? (this._y = t, this) : this._y
            };
            Math.PI, Math.sqrt(5);
            var Fi = function(t, n) {
                    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
                    var e, i = t.slice(0, e);
                    return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(e + 1)]
                },
                Yi = function(t) {
                    return (t = Fi(Math.abs(t))) ? t[1] : NaN
                },
                qi = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

            function zi(t) {
                return new Hi(t)
            }

            function Hi(t) {
                if (!(n = qi.exec(t))) throw new Error("invalid format: " + t);
                var n;
                this.fill = n[1] || " ", this.align = n[2] || ">", this.sign = n[3] || "-", this.symbol = n[4] || "", this.zero = !!n[5], this.width = n[6] && +n[6], this.comma = !!n[7], this.precision = n[8] && +n[8].slice(1), this.trim = !!n[9], this.type = n[10] || ""
            }
            zi.prototype = Hi.prototype, Hi.prototype.toString = function() {
                return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
            };
            var ji, Oi, Ii, $i, Xi = function(t) {
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
                Vi = function(t, n) {
                    var e = Fi(t, n);
                    if (!e) return t + "";
                    var i = e[0],
                        r = e[1];
                    return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0")
                },
                Bi = {
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
                        return Vi(100 * t, n)
                    },
                    r: Vi,
                    s: function(t, n) {
                        var e = Fi(t, n);
                        if (!e) return t + "";
                        var i = e[0],
                            r = e[1],
                            a = r - (ji = 3 * Math.max(-8, Math.min(8, Math.floor(r / 3)))) + 1,
                            f = i.length;
                        return a === f ? i : a > f ? i + new Array(a - f + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + Fi(t, Math.max(0, n + a - 1))[0]
                    },
                    X: function(t) {
                        return Math.round(t).toString(16).toUpperCase()
                    },
                    x: function(t) {
                        return Math.round(t).toString(16)
                    }
                },
                Zi = function(t) {
                    return t
                },
                Wi = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
                Ji = function(t) {
                    var n, e, i = t.grouping && t.thousands ? (n = t.grouping, e = t.thousands, function(t, i) {
                            for (var r = t.length, a = [], f = 0, o = n[0], c = 0; r > 0 && o > 0 && (c + o + 1 > i && (o = Math.max(1, i - c)), a.push(t.substring(r -= o, r + o)), !((c += o + 1) > i));) o = n[f = (f + 1) % n.length];
                            return a.reverse().join(e)
                        }) : Zi,
                        r = t.currency,
                        a = t.decimal,
                        f = t.numerals ? function(t) {
                            return function(n) {
                                return n.replace(/[0-9]/g, function(n) {
                                    return t[+n]
                                })
                            }
                        }(t.numerals) : Zi,
                        o = t.percent || "%";

                    function c(t) {
                        var n = (t = zi(t)).fill,
                            e = t.align,
                            c = t.sign,
                            u = t.symbol,
                            s = t.zero,
                            h = t.width,
                            l = t.comma,
                            d = t.precision,
                            _ = t.trim,
                            b = t.type;
                        "n" === b ? (l = !0, b = "g") : Bi[b] || (null == d && (d = 12), _ = !0, b = "g"), (s || "0" === n && "=" === e) && (s = !0, n = "0", e = "=");
                        var p = "$" === u ? r[0] : "#" === u && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "",
                            y = "$" === u ? r[1] : /[%p]/.test(b) ? o : "",
                            v = Bi[b],
                            g = /[defgprs%]/.test(b);

                        function x(t) {
                            var r, o, u, x = p,
                                m = y;
                            if ("c" === b) m = v(t) + m, t = "";
                            else {
                                var w = (t = +t) < 0;
                                if (t = v(Math.abs(t), d), _ && (t = Xi(t)), w && 0 == +t && (w = !1), x = (w ? "(" === c ? c : "-" : "-" === c || "(" === c ? "" : c) + x, m = ("s" === b ? Wi[8 + ji / 3] : "") + m + (w && "(" === c ? ")" : ""), g)
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
                            var e = c(((t = zi(t)).type = "f", t)),
                                i = 3 * Math.max(-8, Math.min(8, Math.floor(Yi(n) / 3))),
                                r = Math.pow(10, -i),
                                a = Wi[8 + i / 3];
                            return function(t) {
                                return e(r * t) + a
                            }
                        }
                    }
                };
            Oi = Ji({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""]
            }), Ii = Oi.format, $i = Oi.formatPrefix;
            var Qi = function() {
                return new Gi
            };

            function Gi() {
                this.reset()
            }
            Gi.prototype = {
                constructor: Gi,
                reset: function() {
                    this.s = this.t = 0
                },
                add: function(t) {
                    tr(Ki, t, this.t), tr(this, Ki.s, this.s), this.s ? this.t += Ki.t : this.s = Ki.t
                },
                valueOf: function() {
                    return this.s
                }
            };
            var Ki = new Gi;

            function tr(t, n, e) {
                var i = t.s = n + e,
                    r = i - n,
                    a = i - r;
                t.t = n - a + (e - r)
            }
            var nr = 1e-6,
                er = Math.PI,
                ir = er / 2,
                rr = er / 4,
                ar = 2 * er,
                fr = er / 180,
                or = Math.abs,
                cr = Math.atan,
                ur = Math.atan2,
                sr = Math.cos,
                hr = (Math.ceil, Math.exp),
                lr = (Math.floor, Math.log),
                dr = (Math.pow, Math.sin),
                _r = (Math.sign, Math.sqrt),
                br = Math.tan;

            function pr(t) {
                return t > 1 ? 0 : t < -1 ? er : Math.acos(t)
            }

            function yr(t) {
                return t > 1 ? ir : t < -1 ? -ir : Math.asin(t)
            }

            function vr() {}
            Qi(), Qi();

            function gr(t) {
                var n = t[0],
                    e = t[1],
                    i = sr(e);
                return [i * sr(n), i * dr(n), dr(e)]
            }

            function xr(t, n) {
                return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
            }

            function mr(t) {
                var n = _r(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                t[0] /= n, t[1] /= n, t[2] /= n
            }
            Qi();

            function wr(t, n) {
                return [t > er ? t - ar : t < -er ? t + ar : t, n]
            }
            wr.invert = wr;
            var Mr = function() {
                    var t, n = [];
                    return {
                        point: function(n, e) {
                            t.push([n, e])
                        },
                        lineStart: function() {
                            n.push(t = [])
                        },
                        lineEnd: vr,
                        rejoin: function() {
                            n.length > 1 && n.push(n.pop().concat(n.shift()))
                        },
                        result: function() {
                            var e = n;
                            return n = [], t = null, e
                        }
                    }
                },
                Nr = function(t, n) {
                    return or(t[0] - n[0]) < nr && or(t[1] - n[1]) < nr
                };

            function Tr(t, n, e, i) {
                this.x = t, this.z = n, this.o = e, this.e = i, this.v = !1, this.n = this.p = null
            }
            var kr = function(t, n, e, i, r) {
                var a, f, o = [],
                    c = [];
                if (t.forEach(function(t) {
                        if (!((n = t.length - 1) <= 0)) {
                            var n, e, i = t[0],
                                f = t[n];
                            if (Nr(i, f)) {
                                for (r.lineStart(), a = 0; a < n; ++a) r.point((i = t[a])[0], i[1]);
                                r.lineEnd()
                            } else o.push(e = new Tr(i, t, null, !0)), c.push(e.o = new Tr(i, null, e, !1)), o.push(e = new Tr(f, t, null, !1)), c.push(e.o = new Tr(f, null, e, !0))
                        }
                    }), o.length) {
                    for (c.sort(n), Ar(o), Ar(c), a = 0, f = c.length; a < f; ++a) c[a].e = e = !e;
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

            function Ar(t) {
                if (n = t.length) {
                    for (var n, e, i = 0, r = t[0]; ++i < n;) r.n = e = t[i], e.p = r, r = e;
                    r.n = e = t[0], e.p = r
                }
            }
            var Cr = Qi(),
                Sr = function(t, n) {
                    var e = n[0],
                        i = n[1],
                        r = dr(i),
                        a = [dr(e), -sr(e), 0],
                        f = 0,
                        o = 0;
                    Cr.reset(), 1 === r ? i = ir + nr : -1 === r && (i = -ir - nr);
                    for (var c = 0, u = t.length; c < u; ++c)
                        if (h = (s = t[c]).length)
                            for (var s, h, l = s[h - 1], d = l[0], _ = l[1] / 2 + rr, b = dr(_), p = sr(_), y = 0; y < h; ++y, d = g, b = m, p = w, l = v) {
                                var v = s[y],
                                    g = v[0],
                                    x = v[1] / 2 + rr,
                                    m = dr(x),
                                    w = sr(x),
                                    M = g - d,
                                    N = M >= 0 ? 1 : -1,
                                    T = N * M,
                                    k = T > er,
                                    A = b * m;
                                if (Cr.add(ur(A * N * dr(T), p * w + A * sr(T))), f += k ? M + N * ar : M, k ^ d >= e ^ g >= e) {
                                    var C = xr(gr(l), gr(v));
                                    mr(C);
                                    var S = xr(a, C);
                                    mr(S);
                                    var E = (k ^ M >= 0 ? -1 : 1) * yr(S[2]);
                                    (i > E || i === E && (C[0] || C[1])) && (o += k ^ M >= 0 ? 1 : -1)
                                }
                            }
                    return (f < -nr || f < nr && Cr < -nr) ^ 1 & o
                },
                Er = function(t, n, e, i) {
                    return function(r) {
                        var a, f, o, c = n(r),
                            u = Mr(),
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
                                    var t = Sr(a, i);
                                    f.length ? (h || (r.polygonStart(), h = !0), kr(f, Lr, t, e, r)) : t && (h || (r.polygonStart(), h = !0), r.lineStart(), e(null, null, 1, r), r.lineEnd()), h && (r.polygonEnd(), h = !1), f = a = null
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
                                } else d > 1 && 2 & c && l.push(l.pop().concat(l.shift())), f.push(l.filter(Ur))
                        }
                        return l
                    }
                };

            function Ur(t) {
                return t.length > 1
            }

            function Lr(t, n) {
                return ((t = t.x)[0] < 0 ? t[1] - ir - nr : ir - t[1]) - ((n = n.x)[0] < 0 ? n[1] - ir - nr : ir - n[1])
            }
            Er(function() {
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
                        var o = a > 0 ? er : -er,
                            c = or(a - e);
                        or(c - er) < nr ? (t.point(e, i = (i + f) / 2 > 0 ? ir : -ir), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(o, i), t.point(a, i), n = 0) : r !== o && c >= er && (or(e - r) < nr && (e -= r * nr), or(a - o) < nr && (a -= o * nr), i = function(t, n, e, i) {
                            var r, a, f = dr(t - e);
                            return or(f) > nr ? cr((dr(n) * (a = sr(i)) * dr(e) - dr(i) * (r = sr(n)) * dr(t)) / (r * a * f)) : (n + i) / 2
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
                if (null == t) r = e * ir, i.point(-er, r), i.point(0, r), i.point(er, r), i.point(er, 0), i.point(er, -r), i.point(0, -r), i.point(-er, -r), i.point(-er, 0), i.point(-er, r);
                else if (or(t[0] - n[0]) > nr) {
                    var a = t[0] < n[0] ? er : -er;
                    r = e * a / 2, i.point(-a, r), i.point(0, r), i.point(a, r)
                } else i.point(n[0], n[1])
            }, [-er, -ir]);
            Qi();
            Qi(), Qi();

            function Pr(t) {
                this._context = t
            }
            Pr.prototype = {
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
                            this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, ar)
                    }
                },
                result: vr
            };
            Qi();

            function Dr() {
                this._string = []
            }

            function Rr(t) {
                return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
            }
            Dr.prototype = {
                _radius: 4.5,
                _circle: Rr(4.5),
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
                            null == this._circle && (this._circle = Rr(this._radius)), this._string.push("M", t, ",", n, this._circle)
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

            function Fr(t) {
                return function(n) {
                    var e = new Yr;
                    for (var i in t) e[i] = t[i];
                    return e.stream = n, e
                }
            }

            function Yr() {}
            Yr.prototype = {
                constructor: Yr,
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
            sr(30 * fr);
            Fr({
                point: function(t, n) {
                    this.stream.point(t * fr, n * fr)
                }
            });

            function qr(t) {
                return function(n, e) {
                    var i = sr(n),
                        r = sr(e),
                        a = t(i * r);
                    return [a * r * dr(n), a * dr(e)]
                }
            }

            function zr(t) {
                return function(n, e) {
                    var i = _r(n * n + e * e),
                        r = t(i),
                        a = dr(r),
                        f = sr(r);
                    return [ur(n * a, i * f), yr(i && e * a / i)]
                }
            }
            var Hr = qr(function(t) {
                return _r(2 / (1 + t))
            });
            Hr.invert = zr(function(t) {
                return 2 * yr(t / 2)
            });
            var jr = qr(function(t) {
                return (t = pr(t)) && t / dr(t)
            });
            jr.invert = zr(function(t) {
                return t
            });

            function Or(t, n) {
                return [t, lr(br((ir + n) / 2))]
            }
            Or.invert = function(t, n) {
                return [t, 2 * cr(hr(n)) - ir]
            };

            function Ir(t, n) {
                return [t, n]
            }
            Ir.invert = Ir;
            var $r = 1.340264,
                Xr = -.081106,
                Vr = 893e-6,
                Br = .003796,
                Zr = _r(3) / 2;

            function Wr(t, n) {
                var e = yr(Zr * dr(n)),
                    i = e * e,
                    r = i * i * i;
                return [t * sr(e) / (Zr * ($r + 3 * Xr * i + r * (7 * Vr + 9 * Br * i))), e * ($r + Xr * i + r * (Vr + Br * i))]
            }
            Wr.invert = function(t, n) {
                for (var e, i = n, r = i * i, a = r * r * r, f = 0; f < 12 && (a = (r = (i -= e = (i * ($r + Xr * r + a * (Vr + Br * r)) - n) / ($r + 3 * Xr * r + a * (7 * Vr + 9 * Br * r))) * i) * r * r, !(or(e) < 1e-12)); ++f);
                return [Zr * t * ($r + 3 * Xr * r + a * (7 * Vr + 9 * Br * r)) / sr(i), yr(dr(i) / Zr)]
            };

            function Jr(t, n) {
                var e = sr(n),
                    i = sr(t) * e;
                return [e * dr(t) / i, dr(n) / i]
            }
            Jr.invert = zr(cr);

            function Qr(t, n) {
                var e = n * n,
                    i = e * e;
                return [t * (.8707 - .131979 * e + i * (i * (.003971 * e - .001529 * i) - .013791)), n * (1.007226 + e * (.015085 + i * (.028874 * e - .044475 - .005916 * i)))]
            }
            Qr.invert = function(t, n) {
                var e, i = n,
                    r = 25;
                do {
                    var a = i * i,
                        f = a * a;
                    i -= e = (i * (1.007226 + a * (.015085 + f * (.028874 * a - .044475 - .005916 * f))) - n) / (1.007226 + a * (.045255 + f * (.259866 * a - .311325 - .005916 * 11 * f)))
                } while (or(e) > nr && --r > 0);
                return [t / (.8707 + (a = i * i) * (a * (a * a * a * (.003971 - .001529 * a) - .013791) - .131979)), i]
            };

            function Gr(t, n) {
                return [sr(n) * dr(t), dr(n)]
            }
            Gr.invert = zr(yr);

            function Kr(t, n) {
                var e = sr(n),
                    i = 1 + sr(t) * e;
                return [e * dr(t) / i, dr(n) / i]
            }
            Kr.invert = zr(function(t) {
                return 2 * cr(t)
            });

            function ta(t, n) {
                return [lr(br((ir + n) / 2)), -t]
            }
            ta.invert = function(t, n) {
                return [-n, 2 * cr(hr(t)) - ir]
            };

            function na(t) {
                var n = 0,
                    e = t.children,
                    i = e && e.length;
                if (i)
                    for (; --i >= 0;) n += e[i].value;
                else n = 1;
                t.value = n
            }

            function ea(t, n) {
                var e, i, r, a, f, o = new fa(t),
                    c = +t.value && (o.value = t.value),
                    u = [o];
                for (null == n && (n = ia); e = u.pop();)
                    if (c && (e.value = +e.data.value), (r = n(e.data)) && (f = r.length))
                        for (e.children = new Array(f), a = f - 1; a >= 0; --a) u.push(i = e.children[a] = new fa(r[a])), i.parent = e, i.depth = e.depth + 1;
                return o.eachBefore(aa)
            }

            function ia(t) {
                return t.children
            }

            function ra(t) {
                t.data = t.data.data
            }

            function aa(t) {
                var n = 0;
                do {
                    t.height = n
                } while ((t = t.parent) && t.height < ++n)
            }

            function fa(t) {
                this.data = t, this.depth = this.height = 0, this.parent = null
            }
            fa.prototype = ea.prototype = {
                constructor: fa,
                count: function() {
                    return this.eachAfter(na)
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
                    return ea(this).eachBefore(ra)
                }
            };
            Array.prototype.slice;

            function oa(t) {
                if ("function" != typeof t) throw new Error;
                return t
            }

            function ca() {
                return 0
            }
            var ua = function(t) {
                return function() {
                    return t
                }
            };
            var sa = function(t) {
                    t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
                },
                ha = function(t, n, e, i, r) {
                    for (var a, f = t.children, o = -1, c = f.length, u = t.value && (i - n) / t.value; ++o < c;)(a = f[o]).y0 = e, a.y1 = r, a.x0 = n, a.x1 = n += a.value * u
                };

            function la(t, n) {
                this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
            }
            la.prototype = Object.create(fa.prototype);
            var da = function(t, n, e, i, r) {
                    for (var a, f = t.children, o = -1, c = f.length, u = t.value && (r - e) / t.value; ++o < c;)(a = f[o]).x0 = n, a.x1 = i, a.y0 = e, a.y1 = e += a.value * u
                },
                _a = (1 + Math.sqrt(5)) / 2;

            function ba(t, n, e, i, r, a) {
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
                    }), f.dice ? ha(f, e, i, r, w ? i += u * s / w : a) : da(f, e, i, w ? e += c * s / w : r, a), w -= s, g = x
                }
                return y
            }
            var pa = function t(n) {
                    function e(t, e, i, r, a) {
                        ba(n, t, e, i, r, a)
                    }
                    return e.ratio = function(n) {
                        return t((n = +n) > 1 ? n : 1)
                    }, e
                }(_a),
                ya = function() {
                    var t = pa,
                        n = !1,
                        e = 1,
                        i = 1,
                        r = [0],
                        a = ca,
                        f = ca,
                        o = ca,
                        c = ca,
                        u = ca;

                    function s(t) {
                        return t.x0 = t.y0 = 0, t.x1 = e, t.y1 = i, t.eachBefore(h), r = [0], n && t.eachBefore(sa), t
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
                        return arguments.length ? (t = oa(n), s) : t
                    }, s.padding = function(t) {
                        return arguments.length ? s.paddingInner(t).paddingOuter(t) : s.paddingInner()
                    }, s.paddingInner = function(t) {
                        return arguments.length ? (a = "function" == typeof t ? t : ua(+t), s) : a
                    }, s.paddingOuter = function(t) {
                        return arguments.length ? s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : s.paddingTop()
                    }, s.paddingTop = function(t) {
                        return arguments.length ? (f = "function" == typeof t ? t : ua(+t), s) : f
                    }, s.paddingRight = function(t) {
                        return arguments.length ? (o = "function" == typeof t ? t : ua(+t), s) : o
                    }, s.paddingBottom = function(t) {
                        return arguments.length ? (c = "function" == typeof t ? t : ua(+t), s) : c
                    }, s.paddingLeft = function(t) {
                        return arguments.length ? (u = "function" == typeof t ? t : ua(+t), s) : u
                    }, s
                },
                va = function t(n) {
                    function e(t, e, i, r, a) {
                        if ((f = t._squarify) && f.ratio === n)
                            for (var f, o, c, u, s, h = -1, l = f.length, d = t.value; ++h < l;) {
                                for (c = (o = f[h]).children, u = o.value = 0, s = c.length; u < s; ++u) o.value += c[u].value;
                                o.dice ? ha(o, e, i, r, i += (a - i) * o.value / d) : da(o, e, i, e += (r - e) * o.value / d, a), d -= o.value
                            } else t._squarify = f = ba(n, t, e, i, r, a), f.ratio = n
                    }
                    return e.ratio = function(n) {
                        return t((n = +n) > 1 ? n : 1)
                    }, e
                }(_a);
            var ga = function() {
                    return Math.random()
                },
                xa = (function t(n) {
                    function e(t, e) {
                        return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t,
                            function() {
                                return n() * e + t
                            }
                    }
                    return e.source = t, e
                }(ga), function t(n) {
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
                }(ga)),
                ma = (function t(n) {
                    function e() {
                        var t = xa.source(n).apply(this, arguments);
                        return function() {
                            return Math.exp(t())
                        }
                    }
                    return e.source = t, e
                }(ga), function t(n) {
                    function e(t) {
                        return function() {
                            for (var e = 0, i = 0; i < t; ++i) e += n();
                            return e
                        }
                    }
                    return e.source = t, e
                }(ga)),
                wa = (function t(n) {
                    function e(t) {
                        var e = ma.source(n)(t);
                        return function() {
                            return e() / t
                        }
                    }
                    return e.source = t, e
                }(ga), function t(n) {
                    function e(t) {
                        return function() {
                            return -Math.log(1 - n()) / t
                        }
                    }
                    return e.source = t, e
                }(ga), Array.prototype),
                Ma = wa.map,
                Na = wa.slice;
            var Ta = function(t) {
                    return function() {
                        return t
                    }
                },
                ka = function(t) {
                    return +t
                },
                Aa = [0, 1];

            function Ca(t, n) {
                return (n -= t = +t) ? function(e) {
                    return (e - t) / n
                } : Ta(n)
            }

            function Sa(t, n, e, i) {
                var r = t[0],
                    a = t[1],
                    f = n[0],
                    o = n[1];
                return a < r ? (r = e(a, r), f = i(o, f)) : (r = e(r, a), f = i(f, o)),
                    function(t) {
                        return f(r(t))
                    }
            }

            function Ea(t, n, e, i) {
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

            function Ua(t, n) {
                return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
            }

            function La(t, n) {
                var e, i, r, a = Aa,
                    f = Aa,
                    o = Jn,
                    c = !1;

                function u() {
                    return e = Math.min(a.length, f.length) > 2 ? Ea : Sa, i = r = null, s
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
                    return (r || (r = e(f, a, Ca, c ? function(t) {
                        return function(n, e) {
                            var i = t(n = +n, e = +e);
                            return function(t) {
                                return t <= 0 ? n : t >= 1 ? e : i(t)
                            }
                        }
                    }(n) : n)))(+t)
                }, s.domain = function(t) {
                    return arguments.length ? (a = Ma.call(t, ka), u()) : a.slice()
                }, s.range = function(t) {
                    return arguments.length ? (f = Na.call(t), u()) : f.slice()
                }, s.rangeRound = function(t) {
                    return f = Na.call(t), o = Qn, u()
                }, s.clamp = function(t) {
                    return arguments.length ? (c = !!t, u()) : c
                }, s.interpolate = function(t) {
                    return arguments.length ? (o = t, u()) : o
                }, u()
            }
            var Pa = function(t, n, e) {
                var i, r = t[0],
                    a = t[t.length - 1],
                    f = b(r, a, null == n ? 10 : n);
                switch ((e = zi(null == e ? ",f" : e)).type) {
                    case "s":
                        var o = Math.max(Math.abs(r), Math.abs(a));
                        return null != e.precision || isNaN(i = function(t, n) {
                            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Yi(n) / 3))) - Yi(Math.abs(t)))
                        }(f, o)) || (e.precision = i), $i(e, o);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != e.precision || isNaN(i = function(t, n) {
                            return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Yi(n) - Yi(t)) + 1
                        }(f, Math.max(Math.abs(r), Math.abs(a)))) || (e.precision = i - ("e" === e.type));
                        break;
                    case "f":
                    case "%":
                        null != e.precision || isNaN(i = function(t) {
                            return Math.max(0, -Yi(Math.abs(t)))
                        }(f)) || (e.precision = i - 2 * ("%" === e.type))
                }
                return Ii(e)
            };

            function Da(t) {
                var n = t.domain;
                return t.ticks = function(t) {
                    var e = n();
                    return d(e[0], e[e.length - 1], null == t ? 10 : t)
                }, t.tickFormat = function(t, e) {
                    return Pa(n(), t, e)
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

            function Ra() {
                var t = La(Ca, On);
                return t.copy = function() {
                    return Ua(t, Ra())
                }, Da(t)
            }
            var Fa = new Date,
                Ya = new Date;

            function qa(t, n, e, i) {
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
                    return qa(function(n) {
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
                    return Fa.setTime(+n), Ya.setTime(+i), t(Fa), t(Ya), Math.floor(e(Fa, Ya))
                }, r.every = function(t) {
                    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? r.filter(i ? function(n) {
                        return i(n) % t == 0
                    } : function(n) {
                        return r.count(0, n) % t == 0
                    }) : r : null
                }), r
            }
            var za = qa(function() {}, function(t, n) {
                t.setTime(+t + n)
            }, function(t, n) {
                return n - t
            });
            za.every = function(t) {
                return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? qa(function(n) {
                    n.setTime(Math.floor(n / t) * t)
                }, function(n, e) {
                    n.setTime(+n + e * t)
                }, function(n, e) {
                    return (e - n) / t
                }) : za : null
            };
            za.range;
            var Ha = 6e4,
                ja = 6048e5,
                Oa = qa(function(t) {
                    t.setTime(1e3 * Math.floor(t / 1e3))
                }, function(t, n) {
                    t.setTime(+t + 1e3 * n)
                }, function(t, n) {
                    return (n - t) / 1e3
                }, function(t) {
                    return t.getUTCSeconds()
                }),
                Ia = (Oa.range, qa(function(t) {
                    t.setTime(Math.floor(t / Ha) * Ha)
                }, function(t, n) {
                    t.setTime(+t + n * Ha)
                }, function(t, n) {
                    return (n - t) / Ha
                }, function(t) {
                    return t.getMinutes()
                })),
                $a = (Ia.range, qa(function(t) {
                    var n = t.getTimezoneOffset() * Ha % 36e5;
                    n < 0 && (n += 36e5), t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n)
                }, function(t, n) {
                    t.setTime(+t + 36e5 * n)
                }, function(t, n) {
                    return (n - t) / 36e5
                }, function(t) {
                    return t.getHours()
                })),
                Xa = ($a.range, qa(function(t) {
                    t.setHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setDate(t.getDate() + n)
                }, function(t, n) {
                    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ha) / 864e5
                }, function(t) {
                    return t.getDate() - 1
                })),
                Va = Xa;
            Xa.range;

            function Ba(t) {
                return qa(function(n) {
                    n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setDate(t.getDate() + 7 * n)
                }, function(t, n) {
                    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ha) / ja
                })
            }
            var Za = Ba(0),
                Wa = Ba(1),
                Ja = Ba(2),
                Qa = Ba(3),
                Ga = Ba(4),
                Ka = Ba(5),
                tf = Ba(6),
                nf = (Za.range, Wa.range, Ja.range, Qa.range, Ga.range, Ka.range, tf.range, qa(function(t) {
                    t.setDate(1), t.setHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setMonth(t.getMonth() + n)
                }, function(t, n) {
                    return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
                }, function(t) {
                    return t.getMonth()
                })),
                ef = (nf.range, qa(function(t) {
                    t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setFullYear(t.getFullYear() + n)
                }, function(t, n) {
                    return n.getFullYear() - t.getFullYear()
                }, function(t) {
                    return t.getFullYear()
                }));
            ef.every = function(t) {
                return isFinite(t = Math.floor(t)) && t > 0 ? qa(function(n) {
                    n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
                }, function(n, e) {
                    n.setFullYear(n.getFullYear() + e * t)
                }) : null
            };
            var rf = ef,
                af = (ef.range, qa(function(t) {
                    t.setUTCSeconds(0, 0)
                }, function(t, n) {
                    t.setTime(+t + n * Ha)
                }, function(t, n) {
                    return (n - t) / Ha
                }, function(t) {
                    return t.getUTCMinutes()
                })),
                ff = (af.range, qa(function(t) {
                    t.setUTCMinutes(0, 0, 0)
                }, function(t, n) {
                    t.setTime(+t + 36e5 * n)
                }, function(t, n) {
                    return (n - t) / 36e5
                }, function(t) {
                    return t.getUTCHours()
                })),
                of = (ff.range, qa(function(t) {
                    t.setUTCHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setUTCDate(t.getUTCDate() + n)
                }, function(t, n) {
                    return (n - t) / 864e5
                }, function(t) {
                    return t.getUTCDate() - 1
                })),
                cf = of ; of .range;

            function uf(t) {
                return qa(function(n) {
                    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setUTCDate(t.getUTCDate() + 7 * n)
                }, function(t, n) {
                    return (n - t) / ja
                })
            }
            var sf = uf(0),
                hf = uf(1),
                lf = uf(2),
                df = uf(3),
                _f = uf(4),
                bf = uf(5),
                pf = uf(6),
                yf = (sf.range, hf.range, lf.range, df.range, _f.range, bf.range, pf.range, qa(function(t) {
                    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setUTCMonth(t.getUTCMonth() + n)
                }, function(t, n) {
                    return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
                }, function(t) {
                    return t.getUTCMonth()
                })),
                vf = (yf.range, qa(function(t) {
                    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setUTCFullYear(t.getUTCFullYear() + n)
                }, function(t, n) {
                    return n.getUTCFullYear() - t.getUTCFullYear()
                }, function(t) {
                    return t.getUTCFullYear()
                }));
            vf.every = function(t) {
                return isFinite(t = Math.floor(t)) && t > 0 ? qa(function(n) {
                    n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
                }, function(n, e) {
                    n.setUTCFullYear(n.getUTCFullYear() + e * t)
                }) : null
            };
            var gf = vf;
            vf.range;

            function xf(t) {
                if (0 <= t.y && t.y < 100) {
                    var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                    return n.setFullYear(t.y), n
                }
                return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
            }

            function mf(t) {
                if (0 <= t.y && t.y < 100) {
                    var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                    return n.setUTCFullYear(t.y), n
                }
                return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
            }

            function wf(t) {
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
            var Mf, Nf, Tf, kf = {
                    "-": "",
                    _: " ",
                    0: "0"
                },
                Af = /^\s*\d+/,
                Cf = /^%/,
                Sf = /[\\^$*+?|[\]().{}]/g;

            function Ef(t, n, e) {
                var i = t < 0 ? "-" : "",
                    r = (i ? -t : t) + "",
                    a = r.length;
                return i + (a < e ? new Array(e - a + 1).join(n) + r : r)
            }

            function Uf(t) {
                return t.replace(Sf, "\\$&")
            }

            function Lf(t) {
                return new RegExp("^(?:" + t.map(Uf).join("|") + ")", "i")
            }

            function Pf(t) {
                for (var n = {}, e = -1, i = t.length; ++e < i;) n[t[e].toLowerCase()] = e;
                return n
            }

            function Df(t, n, e) {
                var i = Af.exec(n.slice(e, e + 1));
                return i ? (t.w = +i[0], e + i[0].length) : -1
            }

            function Rf(t, n, e) {
                var i = Af.exec(n.slice(e, e + 1));
                return i ? (t.u = +i[0], e + i[0].length) : -1
            }

            function Ff(t, n, e) {
                var i = Af.exec(n.slice(e, e + 2));
                return i ? (t.U = +i[0], e + i[0].length) : -1
            }

            function Yf(t, n, e) {
                var i = Af.exec(n.slice(e, e + 2));
                return i ? (t.V = +i[0], e + i[0].length) : -1
            }

            function qf(t, n, e) {
                var i = Af.exec(n.slice(e, e + 2));
                return i ? (t.W = +i[0], e + i[0].length) : -1
            }

            function zf(t, n, e) {
                var i = Af.exec(n.slice(e, e + 4));
                return i ? (t.y = +i[0], e + i[0].length) : -1
            }

            function Hf(t, n, e) {
                var i = Af.exec(n.slice(e, e + 2));
                return i ? (t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), e + i[0].length) : -1
            }

            function jf(t, n, e) {
                var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
                return i ? (t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), e + i[0].length) : -1
            }

            function Of(t, n, e) {
                var i = Af.exec(n.slice(e, e + 2));
                return i ? (t.m = i[0] - 1, e + i[0].length) : -1
            }

            function If(t, n, e) {
                var i = Af.exec(n.slice(e, e + 2));
                return i ? (t.d = +i[0], e + i[0].length) : -1
            }

            function $f(t, n, e) {
                var i = Af.exec(n.slice(e, e + 3));
                return i ? (t.m = 0, t.d = +i[0], e + i[0].length) : -1
            }

            function Xf(t, n, e) {
                var i = Af.exec(n.slice(e, e + 2));
                return i ? (t.H = +i[0], e + i[0].length) : -1
            }

            function Vf(t, n, e) {
                var i = Af.exec(n.slice(e, e + 2));
                return i ? (t.M = +i[0], e + i[0].length) : -1
            }

            function Bf(t, n, e) {
                var i = Af.exec(n.slice(e, e + 2));
                return i ? (t.S = +i[0], e + i[0].length) : -1
            }

            function Zf(t, n, e) {
                var i = Af.exec(n.slice(e, e + 3));
                return i ? (t.L = +i[0], e + i[0].length) : -1
            }

            function Wf(t, n, e) {
                var i = Af.exec(n.slice(e, e + 6));
                return i ? (t.L = Math.floor(i[0] / 1e3), e + i[0].length) : -1
            }

            function Jf(t, n, e) {
                var i = Cf.exec(n.slice(e, e + 1));
                return i ? e + i[0].length : -1
            }

            function Qf(t, n, e) {
                var i = Af.exec(n.slice(e));
                return i ? (t.Q = +i[0], e + i[0].length) : -1
            }

            function Gf(t, n, e) {
                var i = Af.exec(n.slice(e));
                return i ? (t.Q = 1e3 * +i[0], e + i[0].length) : -1
            }

            function Kf(t, n) {
                return Ef(t.getDate(), n, 2)
            }

            function to(t, n) {
                return Ef(t.getHours(), n, 2)
            }

            function no(t, n) {
                return Ef(t.getHours() % 12 || 12, n, 2)
            }

            function eo(t, n) {
                return Ef(1 + Va.count(rf(t), t), n, 3)
            }

            function io(t, n) {
                return Ef(t.getMilliseconds(), n, 3)
            }

            function ro(t, n) {
                return io(t, n) + "000"
            }

            function ao(t, n) {
                return Ef(t.getMonth() + 1, n, 2)
            }

            function fo(t, n) {
                return Ef(t.getMinutes(), n, 2)
            }

            function oo(t, n) {
                return Ef(t.getSeconds(), n, 2)
            }

            function co(t) {
                var n = t.getDay();
                return 0 === n ? 7 : n
            }

            function uo(t, n) {
                return Ef(Za.count(rf(t), t), n, 2)
            }

            function so(t, n) {
                var e = t.getDay();
                return t = e >= 4 || 0 === e ? Ga(t) : Ga.ceil(t), Ef(Ga.count(rf(t), t) + (4 === rf(t).getDay()), n, 2)
            }

            function ho(t) {
                return t.getDay()
            }

            function lo(t, n) {
                return Ef(Wa.count(rf(t), t), n, 2)
            }

            function _o(t, n) {
                return Ef(t.getFullYear() % 100, n, 2)
            }

            function bo(t, n) {
                return Ef(t.getFullYear() % 1e4, n, 4)
            }

            function po(t) {
                var n = t.getTimezoneOffset();
                return (n > 0 ? "-" : (n *= -1, "+")) + Ef(n / 60 | 0, "0", 2) + Ef(n % 60, "0", 2)
            }

            function yo(t, n) {
                return Ef(t.getUTCDate(), n, 2)
            }

            function vo(t, n) {
                return Ef(t.getUTCHours(), n, 2)
            }

            function go(t, n) {
                return Ef(t.getUTCHours() % 12 || 12, n, 2)
            }

            function xo(t, n) {
                return Ef(1 + cf.count(gf(t), t), n, 3)
            }

            function mo(t, n) {
                return Ef(t.getUTCMilliseconds(), n, 3)
            }

            function wo(t, n) {
                return mo(t, n) + "000"
            }

            function Mo(t, n) {
                return Ef(t.getUTCMonth() + 1, n, 2)
            }

            function No(t, n) {
                return Ef(t.getUTCMinutes(), n, 2)
            }

            function To(t, n) {
                return Ef(t.getUTCSeconds(), n, 2)
            }

            function ko(t) {
                var n = t.getUTCDay();
                return 0 === n ? 7 : n
            }

            function Ao(t, n) {
                return Ef(sf.count(gf(t), t), n, 2)
            }

            function Co(t, n) {
                var e = t.getUTCDay();
                return t = e >= 4 || 0 === e ? _f(t) : _f.ceil(t), Ef(_f.count(gf(t), t) + (4 === gf(t).getUTCDay()), n, 2)
            }

            function So(t) {
                return t.getUTCDay()
            }

            function Eo(t, n) {
                return Ef(hf.count(gf(t), t), n, 2)
            }

            function Uo(t, n) {
                return Ef(t.getUTCFullYear() % 100, n, 2)
            }

            function Lo(t, n) {
                return Ef(t.getUTCFullYear() % 1e4, n, 4)
            }

            function Po() {
                return "+0000"
            }

            function Do() {
                return "%"
            }

            function Ro(t) {
                return +t
            }

            function Fo(t) {
                return Math.floor(+t / 1e3)
            }! function(t) {
                Mf = function(t) {
                    var n = t.dateTime,
                        e = t.date,
                        i = t.time,
                        r = t.periods,
                        a = t.days,
                        f = t.shortDays,
                        o = t.months,
                        c = t.shortMonths,
                        u = Lf(r),
                        s = Pf(r),
                        h = Lf(a),
                        l = Pf(a),
                        d = Lf(f),
                        _ = Pf(f),
                        b = Lf(o),
                        p = Pf(o),
                        y = Lf(c),
                        v = Pf(c),
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
                            d: Kf,
                            e: Kf,
                            f: ro,
                            H: to,
                            I: no,
                            j: eo,
                            L: io,
                            m: ao,
                            M: fo,
                            p: function(t) {
                                return r[+(t.getHours() >= 12)]
                            },
                            Q: Ro,
                            s: Fo,
                            S: oo,
                            u: co,
                            U: uo,
                            V: so,
                            w: ho,
                            W: lo,
                            x: null,
                            X: null,
                            y: _o,
                            Y: bo,
                            Z: po,
                            "%": Do
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
                            d: yo,
                            e: yo,
                            f: wo,
                            H: vo,
                            I: go,
                            j: xo,
                            L: mo,
                            m: Mo,
                            M: No,
                            p: function(t) {
                                return r[+(t.getUTCHours() >= 12)]
                            },
                            Q: Ro,
                            s: Fo,
                            S: To,
                            u: ko,
                            U: Ao,
                            V: Co,
                            w: So,
                            W: Eo,
                            x: null,
                            X: null,
                            y: Uo,
                            Y: Lo,
                            Z: Po,
                            "%": Do
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
                            d: If,
                            e: If,
                            f: Wf,
                            H: Xf,
                            I: Xf,
                            j: $f,
                            L: Zf,
                            m: Of,
                            M: Vf,
                            p: function(t, n, e) {
                                var i = u.exec(n.slice(e));
                                return i ? (t.p = s[i[0].toLowerCase()], e + i[0].length) : -1
                            },
                            Q: Qf,
                            s: Gf,
                            S: Bf,
                            u: Rf,
                            U: Ff,
                            V: Yf,
                            w: Df,
                            W: qf,
                            x: function(t, n, i) {
                                return N(t, e, n, i)
                            },
                            X: function(t, n, e) {
                                return N(t, i, n, e)
                            },
                            y: Hf,
                            Y: zf,
                            Z: jf,
                            "%": Jf
                        };

                    function w(t, n) {
                        return function(e) {
                            var i, r, a, f = [],
                                o = -1,
                                c = 0,
                                u = t.length;
                            for (e instanceof Date || (e = new Date(+e)); ++o < u;) 37 === t.charCodeAt(o) && (f.push(t.slice(c, o)), null != (r = kf[i = t.charAt(++o)]) ? i = t.charAt(++o) : r = "e" === i ? " " : "0", (a = n[i]) && (i = a(e, r)), f.push(i), c = o + 1);
                            return f.push(t.slice(c, o)), f.join("")
                        }
                    }

                    function M(t, n) {
                        return function(e) {
                            var i, r, a = wf(1900);
                            if (N(a, t, e += "", 0) != e.length) return null;
                            if ("Q" in a) return new Date(a.Q);
                            if ("p" in a && (a.H = a.H % 12 + 12 * a.p), "V" in a) {
                                if (a.V < 1 || a.V > 53) return null;
                                "w" in a || (a.w = 1), "Z" in a ? (r = (i = mf(wf(a.y))).getUTCDay(), i = r > 4 || 0 === r ? hf.ceil(i) : hf(i), i = cf.offset(i, 7 * (a.V - 1)), a.y = i.getUTCFullYear(), a.m = i.getUTCMonth(), a.d = i.getUTCDate() + (a.w + 6) % 7) : (r = (i = n(wf(a.y))).getDay(), i = r > 4 || 0 === r ? Wa.ceil(i) : Wa(i), i = Va.offset(i, 7 * (a.V - 1)), a.y = i.getFullYear(), a.m = i.getMonth(), a.d = i.getDate() + (a.w + 6) % 7)
                            } else("W" in a || "U" in a) && ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0), r = "Z" in a ? mf(wf(a.y)).getUTCDay() : n(wf(a.y)).getDay(), a.m = 0, a.d = "W" in a ? (a.w + 6) % 7 + 7 * a.W - (r + 5) % 7 : a.w + 7 * a.U - (r + 6) % 7);
                            return "Z" in a ? (a.H += a.Z / 100 | 0, a.M += a.Z % 100, mf(a)) : n(a)
                        }
                    }

                    function N(t, n, e, i) {
                        for (var r, a, f = 0, o = n.length, c = e.length; f < o;) {
                            if (i >= c) return -1;
                            if (37 === (r = n.charCodeAt(f++))) {
                                if (r = n.charAt(f++), !(a = m[r in kf ? n.charAt(f++) : r]) || (i = a(t, e, i)) < 0) return -1
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
                            var n = M(t += "", xf);
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
                            var n = M(t, mf);
                            return n.toString = function() {
                                return t
                            }, n
                        }
                    }
                }(t), Mf.format, Mf.parse, Nf = Mf.utcFormat, Tf = Mf.utcParse
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
            Date.prototype.toISOString || Nf("%Y-%m-%dT%H:%M:%S.%LZ"); + new Date("2000-01-01T00:00:00.000Z") || Tf("%Y-%m-%dT%H:%M:%S.%LZ");
            var Yo = function(t) {
                    for (var n = t.length / 6 | 0, e = new Array(n), i = 0; i < n;) e[i] = "#" + t.slice(6 * i, 6 * ++i);
                    return e
                },
                qo = Yo("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
                zo = (Yo("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Yo("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), Yo("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Yo("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Yo("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Yo("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), Yo("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), Yo("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), function(t) {
                    return jn(t[t.length - 1])
                }),
                Ho = (zo(new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Yo)), zo(new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Yo)), zo(new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Yo)), zo(new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Yo)), zo(new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Yo)), zo(new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Yo)), zo(new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Yo)), zo(new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Yo)), zo(new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Yo)), zo(new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Yo)), zo(new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Yo)), zo(new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Yo)), zo(new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Yo)), zo(new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Yo)), zo(new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Yo)), zo(new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Yo)), zo(new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Yo)));
            zo(new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Yo)), zo(new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Yo)), zo(new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Yo)), zo(new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Yo)), zo(new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Yo)), zo(new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Yo)), zo(new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Yo)), zo(new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Yo)), zo(new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Yo)), zo(new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Yo)), oe(Un(300, .5, 0), Un(-240, .5, 1)), oe(Un(-100, .75, .35), Un(80, 1.5, .8)), oe(Un(260, .75, .35), Un(80, 1.5, .8)), Un(), Gt(), Math.PI, Math.PI;

            function jo(t) {
                var n = t.length;
                return function(e) {
                    return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
                }
            }
            jo(Yo("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), jo(Yo("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), jo(Yo("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), jo(Yo("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
            var Oo = function(t) {
                    return function() {
                        return t
                    }
                },
                Io = (Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin, Math.sqrt, 1e-12),
                $o = Math.PI,
                Xo = 2 * $o;

            function Vo(t) {
                this._context = t
            }
            Vo.prototype = {
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
            var Bo = function(t) {
                return new Vo(t)
            };

            function Zo(t) {
                return t[0]
            }

            function Wo(t) {
                return t[1]
            }
            var Jo = function() {
                var t = Zo,
                    n = Wo,
                    e = Oo(!0),
                    i = null,
                    r = Bo,
                    a = null;

                function f(f) {
                    var o, c, u, s = f.length,
                        h = !1;
                    for (null == i && (a = r(u = ri())), o = 0; o <= s; ++o) !(o < s && e(c = f[o], o, f)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+t(c, o, f), +n(c, o, f));
                    if (u) return a = null, u + "" || null
                }
                return f.x = function(n) {
                    return arguments.length ? (t = "function" == typeof n ? n : Oo(+n), f) : t
                }, f.y = function(t) {
                    return arguments.length ? (n = "function" == typeof t ? t : Oo(+t), f) : n
                }, f.defined = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : Oo(!!t), f) : e
                }, f.curve = function(t) {
                    return arguments.length ? (r = t, null != i && (a = r(i)), f) : r
                }, f.context = function(t) {
                    return arguments.length ? (null == t ? i = a = null : a = r(i = t), f) : i
                }, f
            };
            Go(Bo);

            function Qo(t) {
                this._curve = t
            }

            function Go(t) {
                function n(n) {
                    return new Qo(t(n))
                }
                return n._curve = t, n
            }
            Qo.prototype = {
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
            var Ko = Math.sin($o / 10) / Math.sin(7 * $o / 10),
                tc = (Math.sin(Xo / 10), Math.cos(Xo / 10), Math.sqrt(3), Math.sqrt(3), Math.sqrt(12), function() {});

            function nc(t, n, e) {
                t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
            }

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
                    switch (this._point) {
                        case 3:
                            nc(this, this._x1, this._y1);
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
                            nc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };

            function ic(t) {
                this._context = t
            }
            ic.prototype = {
                areaStart: tc,
                areaEnd: tc,
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
                            nc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };

            function rc(t) {
                this._context = t
            }
            rc.prototype = {
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
                            nc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };

            function ac(t, n) {
                this._basis = new ec(t), this._beta = n
            }
            ac.prototype = {
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
                    return 1 === n ? new ec(t) : new ac(t, n)
                }
                return e.beta = function(n) {
                    return t(+n)
                }, e
            })(.85);

            function fc(t, n, e) {
                t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
            }

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
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x2, this._y2);
                            break;
                        case 3:
                            fc(this, this._x1, this._y1)
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
                            fc(this, t, n)
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

            function cc(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }
            cc.prototype = {
                areaStart: tc,
                areaEnd: tc,
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
                            fc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return new cc(t, n)
                }
                return e.tension = function(n) {
                    return t(+n)
                }, e
            })(0);

            function uc(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }
            uc.prototype = {
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
                            fc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return new uc(t, n)
                }
                return e.tension = function(n) {
                    return t(+n)
                }, e
            })(0);

            function sc(t, n, e) {
                var i = t._x1,
                    r = t._y1,
                    a = t._x2,
                    f = t._y2;
                if (t._l01_a > Io) {
                    var o = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                        c = 3 * t._l01_a * (t._l01_a + t._l12_a);
                    i = (i * o - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, r = (r * o - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
                }
                if (t._l23_a > Io) {
                    var u = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                        s = 3 * t._l23_a * (t._l23_a + t._l12_a);
                    a = (a * u + t._x1 * t._l23_2a - n * t._l12_2a) / s, f = (f * u + t._y1 * t._l23_2a - e * t._l12_2a) / s
                }
                t._context.bezierCurveTo(i, r, a, f, t._x2, t._y2)
            }

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
                            sc(this, t, n)
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

            function lc(t, n) {
                this._context = t, this._alpha = n
            }
            lc.prototype = {
                areaStart: tc,
                areaEnd: tc,
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
                            sc(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return n ? new lc(t, n) : new cc(t, 0)
                }
                return e.alpha = function(n) {
                    return t(+n)
                }, e
            })(.5);

            function dc(t, n) {
                this._context = t, this._alpha = n
            }
            dc.prototype = {
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
                            sc(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return n ? new dc(t, n) : new uc(t, 0)
                }
                return e.alpha = function(n) {
                    return t(+n)
                }, e
            })(.5);

            function _c(t) {
                this._context = t
            }
            _c.prototype = {
                areaStart: tc,
                areaEnd: tc,
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

            function bc(t) {
                return t < 0 ? -1 : 1
            }

            function pc(t, n, e) {
                var i = t._x1 - t._x0,
                    r = n - t._x1,
                    a = (t._y1 - t._y0) / (i || r < 0 && -0),
                    f = (e - t._y1) / (r || i < 0 && -0),
                    o = (a * r + f * i) / (i + r);
                return (bc(a) + bc(f)) * Math.min(Math.abs(a), Math.abs(f), .5 * Math.abs(o)) || 0
            }

            function yc(t, n) {
                var e = t._x1 - t._x0;
                return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
            }

            function vc(t, n, e) {
                var i = t._x0,
                    r = t._y0,
                    a = t._x1,
                    f = t._y1,
                    o = (a - i) / 3;
                t._context.bezierCurveTo(i + o, r + o * n, a - o, f - o * e, a, f)
            }

            function gc(t) {
                this._context = t
            }

            function xc(t) {
                this._context = new mc(t)
            }

            function mc(t) {
                this._context = t
            }

            function wc(t) {
                this._context = t
            }

            function Mc(t) {
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
            gc.prototype = {
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
                            vc(this, this._t0, yc(this, this._t0))
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
                                this._point = 3, vc(this, yc(this, e = pc(this, t, n)), e);
                                break;
                            default:
                                vc(this, this._t0, e = pc(this, t, n))
                        }
                        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
                    }
                }
            }, (xc.prototype = Object.create(gc.prototype)).point = function(t, n) {
                gc.prototype.point.call(this, n, t)
            }, mc.prototype = {
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
            }, wc.prototype = {
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
                            for (var i = Mc(t), r = Mc(n), a = 0, f = 1; f < e; ++a, ++f) this._context.bezierCurveTo(i[0][a], r[0][a], i[1][a], r[1][a], t[f], n[f]);
                    (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
                },
                point: function(t, n) {
                    this._x.push(+t), this._y.push(+n)
                }
            };

            function Nc(t, n) {
                this._context = t, this._t = n
            }
            Nc.prototype = {
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

            function Tc() {
                this._ = null
            }

            function kc(t) {
                t.U = t.C = t.L = t.R = t.P = t.N = null
            }

            function Ac(t, n) {
                var e = n,
                    i = n.R,
                    r = e.U;
                r ? r.L === e ? r.L = i : r.R = i : t._ = i, i.U = r, e.U = i, e.R = i.L, e.R && (e.R.U = e), i.L = e
            }

            function Cc(t, n) {
                var e = n,
                    i = n.L,
                    r = e.U;
                r ? r.L === e ? r.L = i : r.R = i : t._ = i, i.U = r, e.U = i, e.L = i.R, e.L && (e.L.U = e), i.R = e
            }

            function Sc(t) {
                for (; t.L;) t = t.L;
                return t
            }
            Tc.prototype = {
                constructor: Tc,
                insert: function(t, n) {
                    var e, i, r;
                    if (t) {
                        if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                            for (t = t.R; t.L;) t = t.L;
                            t.L = n
                        } else t.R = n;
                        e = t
                    } else this._ ? (t = Sc(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
                    for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (i = e.U).L ? (r = i.R) && r.C ? (e.C = r.C = !1, i.C = !0, t = i) : (t === e.R && (Ac(this, e), e = (t = e).U), e.C = !1, i.C = !0, Cc(this, i)) : (r = i.L) && r.C ? (e.C = r.C = !1, i.C = !0, t = i) : (t === e.L && (Cc(this, e), e = (t = e).U), e.C = !1, i.C = !0, Ac(this, i)), e = t.U;
                    this._.C = !1
                },
                remove: function(t) {
                    t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                    var n, e, i, r = t.U,
                        a = t.L,
                        f = t.R;
                    if (e = a ? f ? Sc(f) : a : f, r ? r.L === t ? r.L = e : r.R = e : this._ = e, a && f ? (i = e.C, e.C = t.C, e.L = a, a.U = e, e !== f ? (r = e.U, e.U = t.U, t = e.R, r.L = t, e.R = f, f.U = e) : (e.U = r, r = e, t = e.R)) : (i = t.C, t = e), t && (t.U = r), !i)
                        if (t && t.C) t.C = !1;
                        else {
                            do {
                                if (t === this._) break;
                                if (t === r.L) {
                                    if ((n = r.R).C && (n.C = !1, r.C = !0, Ac(this, r), n = r.R), n.L && n.L.C || n.R && n.R.C) {
                                        n.R && n.R.C || (n.L.C = !1, n.C = !0, Cc(this, n), n = r.R), n.C = r.C, r.C = n.R.C = !1, Ac(this, r), t = this._;
                                        break
                                    }
                                } else if ((n = r.L).C && (n.C = !1, r.C = !0, Cc(this, r), n = r.L), n.L && n.L.C || n.R && n.R.C) {
                                    n.L && n.L.C || (n.R.C = !1, n.C = !0, Ac(this, n), n = r.L), n.C = r.C, r.C = n.L.C = !1, Cc(this, r), t = this._;
                                    break
                                }
                                n.C = !0, t = r, r = r.U
                            } while (!t.C);
                            t && (t.C = !1)
                        }
                }
            };
            var Ec = Tc;

            function Uc(t, n, e, i) {
                var r = [null, null],
                    a = nu.push(r) - 1;
                return r.left = t, r.right = n, e && Pc(r, t, n, e), i && Pc(r, n, t, i), Kc[t.index].halfedges.push(a), Kc[n.index].halfedges.push(a), r
            }

            function Lc(t, n, e) {
                var i = [n, e];
                return i.left = t, i
            }

            function Pc(t, n, e, i) {
                t[0] || t[1] ? t.left === e ? t[1] = i : t[0] = i : (t[0] = i, t.left = n, t.right = e)
            }

            function Dc(t, n, e, i, r) {
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

            function Rc(t, n, e, i, r) {
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

            function Fc(t, n) {
                var e = t.site,
                    i = n.left,
                    r = n.right;
                return e === r && (r = i, i = e), r ? Math.atan2(r[1] - i[1], r[0] - i[0]) : (e === i ? (i = n[1], r = n[0]) : (i = n[0], r = n[1]), Math.atan2(i[0] - r[0], r[1] - i[1]))
            }

            function Yc(t, n) {
                return n[+(n.left !== t.site)]
            }

            function qc(t, n) {
                return n[+(n.left === t.site)]
            }
            var zc, Hc = [];

            function jc() {
                kc(this), this.x = this.y = this.arc = this.site = this.cy = null
            }

            function Oc(t) {
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
                        if (!(l >= -iu)) {
                            var d = c * c + u * u,
                                _ = s * s + h * h,
                                b = (h * d - u * _) / l,
                                p = (c * _ - s * d) / l,
                                y = Hc.pop() || new jc;
                            y.arc = t, y.site = r, y.x = b + f, y.y = (y.cy = p + o) + Math.sqrt(b * b + p * p), t.circle = y;
                            for (var v = null, g = tu._; g;)
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
                                } tu.insert(v, y), v || (zc = y)
                        }
                    }
                }
            }

            function Ic(t) {
                var n = t.circle;
                n && (n.P || (zc = n.N), tu.remove(n), Hc.push(n), kc(n), t.circle = null)
            }
            var $c = [];

            function Xc() {
                kc(this), this.edge = this.site = this.circle = null
            }

            function Vc(t) {
                var n = $c.pop() || new Xc;
                return n.site = t, n
            }

            function Bc(t) {
                Ic(t), Gc.remove(t), $c.push(t), kc(t)
            }

            function Zc(t) {
                var n = t.circle,
                    e = n.x,
                    i = n.cy,
                    r = [e, i],
                    a = t.P,
                    f = t.N,
                    o = [t];
                Bc(t);
                for (var c = a; c.circle && Math.abs(e - c.circle.x) < eu && Math.abs(i - c.circle.cy) < eu;) a = c.P, o.unshift(c), Bc(c), c = a;
                o.unshift(c), Ic(c);
                for (var u = f; u.circle && Math.abs(e - u.circle.x) < eu && Math.abs(i - u.circle.cy) < eu;) f = u.N, o.push(u), Bc(u), u = f;
                o.push(u), Ic(u);
                var s, h = o.length;
                for (s = 1; s < h; ++s) u = o[s], c = o[s - 1], Pc(u.edge, c.site, u.site, r);
                c = o[0], (u = o[h - 1]).edge = Uc(c.site, u.site, null, r), Oc(c), Oc(u)
            }

            function Wc(t) {
                for (var n, e, i, r, a = t[0], f = t[1], o = Gc._; o;)
                    if ((i = Jc(o, f) - a) > eu) o = o.L;
                    else {
                        if (!((r = a - Qc(o, f)) > eu)) {
                            i > -eu ? (n = o.P, e = o) : r > -eu ? (n = o, e = o.N) : n = e = o;
                            break
                        }
                        if (!o.R) {
                            n = o;
                            break
                        }
                        o = o.R
                    }!
                function(t) {
                    Kc[t.index] = {
                        site: t,
                        halfedges: []
                    }
                }(t);
                var c = Vc(t);
                if (Gc.insert(n, c), n || e) {
                    if (n === e) return Ic(n), e = Vc(n.site), Gc.insert(c, e), c.edge = e.edge = Uc(n.site, c.site), Oc(n), void Oc(e);
                    if (e) {
                        Ic(n), Ic(e);
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
                        Pc(e.edge, u, _, x), c.edge = Uc(u, t, null, x), e.edge = Uc(t, _, null, x), Oc(n), Oc(e)
                    } else c.edge = Uc(n.site, c.site)
                }
            }

            function Jc(t, n) {
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

            function Qc(t, n) {
                var e = t.N;
                if (e) return Jc(e, n);
                var i = t.site;
                return i[1] === n ? i[0] : 1 / 0
            }
            var Gc, Kc, tu, nu, eu = 1e-6,
                iu = 1e-12;

            function ru(t, n) {
                return n[1] - t[1] || n[0] - t[0]
            }

            function au(t, n) {
                var e, i, r, a = t.sort(ru).pop();
                for (nu = [], Kc = new Array(t.length), Gc = new Ec, tu = new Ec;;)
                    if (r = zc, a && (!r || a[1] < r.y || a[1] === r.y && a[0] < r.x)) a[0] === e && a[1] === i || (Wc(a), e = a[0], i = a[1]), a = t.pop();
                    else {
                        if (!r) break;
                        Zc(r.arc)
                    } if (function() {
                        for (var t, n, e, i, r = 0, a = Kc.length; r < a; ++r)
                            if ((t = Kc[r]) && (i = (n = t.halfedges).length)) {
                                var f = new Array(i),
                                    o = new Array(i);
                                for (e = 0; e < i; ++e) f[e] = e, o[e] = Fc(t, nu[n[e]]);
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
                        for (var r, a = nu.length; a--;) Rc(r = nu[a], t, n, e, i) && Dc(r, t, n, e, i) && (Math.abs(r[0][0] - r[1][0]) > eu || Math.abs(r[0][1] - r[1][1]) > eu) || delete nu[a]
                    }(f, o, c, u),
                    function(t, n, e, i) {
                        var r, a, f, o, c, u, s, h, l, d, _, b, p = Kc.length,
                            y = !0;
                        for (r = 0; r < p; ++r)
                            if (a = Kc[r]) {
                                for (f = a.site, o = (c = a.halfedges).length; o--;) nu[c[o]] || c.splice(o, 1);
                                for (o = 0, u = c.length; o < u;) _ = (d = qc(a, nu[c[o]]))[0], b = d[1], h = (s = Yc(a, nu[c[++o % u]]))[0], l = s[1], (Math.abs(_ - h) > eu || Math.abs(b - l) > eu) && (c.splice(o, 0, nu.push(Lc(f, d, Math.abs(_ - t) < eu && i - b > eu ? [t, Math.abs(h - t) < eu ? l : i] : Math.abs(b - i) < eu && e - _ > eu ? [Math.abs(l - i) < eu ? h : e, i] : Math.abs(_ - e) < eu && b - n > eu ? [e, Math.abs(h - e) < eu ? l : n] : Math.abs(b - n) < eu && _ - t > eu ? [Math.abs(l - n) < eu ? h : t, n] : null)) - 1), ++u);
                                u && (y = !1)
                            } if (y) {
                            var v, g, x, m = 1 / 0;
                            for (r = 0, y = null; r < p; ++r)(a = Kc[r]) && (x = (v = (f = a.site)[0] - t) * v + (g = f[1] - n) * g) < m && (m = x, y = a);
                            if (y) {
                                var w = [t, n],
                                    M = [t, i],
                                    N = [e, i],
                                    T = [e, n];
                                y.halfedges.push(nu.push(Lc(f = y.site, w, M)) - 1, nu.push(Lc(f, M, N)) - 1, nu.push(Lc(f, N, T)) - 1, nu.push(Lc(f, T, w)) - 1)
                            }
                        }
                        for (r = 0; r < p; ++r)(a = Kc[r]) && (a.halfedges.length || delete Kc[r])
                    }(f, o, c, u)
                }
                this.edges = nu, this.cells = Kc, Gc = tu = nu = Kc = null
            }
            au.prototype = {
                constructor: au,
                polygons: function() {
                    var t = this.edges;
                    return this.cells.map(function(n) {
                        var e = n.halfedges.map(function(e) {
                            return Yc(n, t[e])
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

            function fu(t, n, e) {
                this.k = t, this.x = n, this.y = e
            }
            fu.prototype = {
                constructor: fu,
                scale: function(t) {
                    return 1 === t ? this : new fu(this.k * t, this.x, this.y)
                },
                translate: function(t, n) {
                    return 0 === t & 0 === n ? this : new fu(this.k, this.x + this.k * t, this.y + this.k * n)
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
            new fu(1, 0, 0);
            fu.prototype;
            e.d(n, "e", function() {
                return c
            }), e.d(n, "l", function() {
                return p
            }), e.d(n, "m", function() {
                return v
            }), e.d(n, "q", function() {
                return g
            }), e.d(n, "a", function() {
                return U
            }), e.d(n, "b", function() {
                return L
            }), e.d(n, "c", function() {
                return Ze
            }), e.d(n, "j", function() {
                return ki
            }), e.d(n, "f", function() {
                return Ii
            }), e.d(n, "g", function() {
                return Ji
            }), e.d(n, "h", function() {
                return ea
            }), e.d(n, "r", function() {
                return ya
            }), e.d(n, "s", function() {
                return va
            }), e.d(n, "n", function() {
                return Ra
            }), e.d(n, "o", function() {
                return qo
            }), e.d(n, "i", function() {
                return Ho
            }), e.d(n, "p", function() {
                return St
            }), e.d(n, "d", function() {
                return gt
            }), e.d(n, "k", function() {
                return Jo
            })
        }
    }
]);