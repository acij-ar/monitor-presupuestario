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
                c = (a.left, f);
            var o = function(t, n) {
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
                    var i, r, a, f, c = -1;
                    if (e = +e, (t = +t) === (n = +n) && e > 0) return [t];
                    if ((i = n < t) && (r = t, t = n, n = r), 0 === (f = _(t, n, e)) || !isFinite(f)) return [];
                    if (f > 0)
                        for (t = Math.ceil(t / f), n = Math.floor(n / f), a = new Array(r = Math.ceil(n - t + 1)); ++c < r;) a[c] = (t + c) * f;
                    else
                        for (t = Math.floor(t * f), n = Math.ceil(n * f), a = new Array(r = Math.ceil(t - n + 1)); ++c < r;) a[c] = (t - c) / f;
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
            var p = function(t) {
                for (var n, e, i, r = t.length, a = -1, f = 0; ++a < r;) f += t[a].length;
                for (e = new Array(f); --r >= 0;)
                    for (n = (i = t[r]).length; --n >= 0;) e[--f] = i[n];
                return e
            };
            var y = Array.prototype.slice,
                v = function(t) {
                    return t
                },
                g = 1,
                x = 2,
                m = 3,
                w = 4,
                M = 1e-6;

            function N(t) {
                return "translate(" + (t + .5) + ",0)"
            }

            function T(t) {
                return "translate(0," + (t + .5) + ")"
            }

            function k() {
                return !this.__axis
            }

            function A(t, n) {
                var e = [],
                    i = null,
                    r = null,
                    a = 6,
                    f = 6,
                    c = 3,
                    o = t === g || t === w ? -1 : 1,
                    u = t === w || t === x ? "x" : "y",
                    s = t === g || t === m ? N : T;

                function h(h) {
                    var l = null == i ? n.ticks ? n.ticks.apply(n, e) : n.domain() : i,
                        d = null == r ? n.tickFormat ? n.tickFormat.apply(n, e) : v : r,
                        _ = Math.max(a, 0) + c,
                        b = n.range(),
                        p = +b[0] + .5,
                        y = +b[b.length - 1] + .5,
                        N = (n.bandwidth ? function(t) {
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
                        T = h.selection ? h.selection() : h,
                        A = T.selectAll(".domain").data([null]),
                        C = T.selectAll(".tick").data(l, n).order(),
                        S = C.exit(),
                        E = C.enter().append("g").attr("class", "tick"),
                        U = C.select("line"),
                        L = C.select("text");
                    A = A.merge(A.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), C = C.merge(E), U = U.merge(E.append("line").attr("stroke", "currentColor").attr(u + "2", o * a)), L = L.merge(E.append("text").attr("fill", "currentColor").attr(u, o * _).attr("dy", t === g ? "0em" : t === m ? "0.71em" : "0.32em")), h !== T && (A = A.transition(h), C = C.transition(h), U = U.transition(h), L = L.transition(h), S = S.transition(h).attr("opacity", M).attr("transform", function(t) {
                        return isFinite(t = N(t)) ? s(t) : this.getAttribute("transform")
                    }), E.attr("opacity", M).attr("transform", function(t) {
                        var n = this.parentNode.__axis;
                        return s(n && isFinite(n = n(t)) ? n : N(t))
                    })), S.remove(), A.attr("d", t === w || t == x ? f ? "M" + o * f + "," + p + "H0.5V" + y + "H" + o * f : "M0.5," + p + "V" + y : f ? "M" + p + "," + o * f + "V0.5H" + y + "V" + o * f : "M" + p + ",0.5H" + y), C.attr("opacity", 1).attr("transform", function(t) {
                        return s(N(t))
                    }), U.attr(u + "2", o * a), L.attr(u, o * _).text(d), T.filter(k).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === x ? "start" : t === w ? "end" : "middle"), T.each(function() {
                        this.__axis = N
                    })
                }
                return h.scale = function(t) {
                    return arguments.length ? (n = t, h) : n
                }, h.ticks = function() {
                    return e = y.call(arguments), h
                }, h.tickArguments = function(t) {
                    return arguments.length ? (e = null == t ? [] : y.call(t), h) : e.slice()
                }, h.tickValues = function(t) {
                    return arguments.length ? (i = null == t ? null : y.call(t), h) : i && i.slice()
                }, h.tickFormat = function(t) {
                    return arguments.length ? (r = t, h) : r
                }, h.tickSize = function(t) {
                    return arguments.length ? (a = f = +t, h) : a
                }, h.tickSizeInner = function(t) {
                    return arguments.length ? (a = +t, h) : a
                }, h.tickSizeOuter = function(t) {
                    return arguments.length ? (f = +t, h) : f
                }, h.tickPadding = function(t) {
                    return arguments.length ? (c = +t, h) : c
                }, h
            }

            function C(t) {
                return A(m, t)
            }

            function S(t) {
                return A(w, t)
            }
            var E = {
                value: function() {}
            };

            function U() {
                for (var t, n = 0, e = arguments.length, i = {}; n < e; ++n) {
                    if (!(t = arguments[n] + "") || t in i) throw new Error("illegal type: " + t);
                    i[t] = []
                }
                return new L(i)
            }

            function L(t) {
                this._ = t
            }

            function P(t, n) {
                for (var e, i = 0, r = t.length; i < r; ++i)
                    if ((e = t[i]).name === n) return e.value
            }

            function D(t, n, e) {
                for (var i = 0, r = t.length; i < r; ++i)
                    if (t[i].name === n) {
                        t[i] = E, t = t.slice(0, i).concat(t.slice(i + 1));
                        break
                    } return null != e && t.push({
                    name: n,
                    value: e
                }), t
            }
            L.prototype = U.prototype = {
                constructor: L,
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
                        c = a.length;
                    if (!(arguments.length < 2)) {
                        if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                        for (; ++f < c;)
                            if (e = (t = a[f]).type) r[e] = D(r[e], t.name, n);
                            else if (null == n)
                            for (e in r) r[e] = D(r[e], t.name, null);
                        return this
                    }
                    for (; ++f < c;)
                        if ((e = (t = a[f]).type) && (e = P(r[e], t.name))) return e
                },
                copy: function() {
                    var t = {},
                        n = this._;
                    for (var e in n) t[e] = n[e].slice();
                    return new L(t)
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
            var R = U,
                F = "http://www.w3.org/1999/xhtml",
                Y = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: F,
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                q = function(t) {
                    var n = t += "",
                        e = n.indexOf(":");
                    return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), Y.hasOwnProperty(n) ? {
                        space: Y[n],
                        local: t
                    } : t
                };
            var z = function(t) {
                var n = q(t);
                return (n.local ? function(t) {
                    return function() {
                        return this.ownerDocument.createElementNS(t.space, t.local)
                    }
                } : function(t) {
                    return function() {
                        var n = this.ownerDocument,
                            e = this.namespaceURI;
                        return e === F && n.documentElement.namespaceURI === F ? n.createElement(t) : n.createElementNS(e, t)
                    }
                })(n)
            };

            function H() {}
            var j = function(t) {
                return null == t ? H : function() {
                    return this.querySelector(t)
                }
            };

            function O() {
                return []
            }
            var I = function(t) {
                    return null == t ? O : function() {
                        return this.querySelectorAll(t)
                    }
                },
                $ = function(t) {
                    return function() {
                        return this.matches(t)
                    }
                };
            if ("undefined" != typeof document) {
                var X = document.documentElement;
                if (!X.matches) {
                    var V = X.webkitMatchesSelector || X.msMatchesSelector || X.mozMatchesSelector || X.oMatchesSelector;
                    $ = function(t) {
                        return function() {
                            return V.call(this, t)
                        }
                    }
                }
            }
            var B = $,
                Z = function(t) {
                    return new Array(t.length)
                };

            function W(t, n) {
                this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
            }
            W.prototype = {
                constructor: W,
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
            var J = "$";

            function Q(t, n, e, i, r, a) {
                for (var f, c = 0, o = n.length, u = a.length; c < u; ++c)(f = n[c]) ? (f.__data__ = a[c], i[c] = f) : e[c] = new W(t, a[c]);
                for (; c < o; ++c)(f = n[c]) && (r[c] = f)
            }

            function G(t, n, e, i, r, a, f) {
                var c, o, u, s = {},
                    h = n.length,
                    l = a.length,
                    d = new Array(h);
                for (c = 0; c < h; ++c)(o = n[c]) && (d[c] = u = J + f.call(o, o.__data__, c, n), u in s ? r[c] = o : s[u] = o);
                for (c = 0; c < l; ++c)(o = s[u = J + f.call(t, a[c], c, a)]) ? (i[c] = o, o.__data__ = a[c], s[u] = null) : e[c] = new W(t, a[c]);
                for (c = 0; c < h; ++c)(o = n[c]) && s[d[c]] === o && (r[c] = o)
            }

            function K(t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }
            var tt = function(t) {
                return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
            };

            function nt(t, n) {
                return t.style.getPropertyValue(n) || tt(t).getComputedStyle(t, null).getPropertyValue(n)
            }

            function et(t) {
                return t.trim().split(/^|\s+/)
            }

            function it(t) {
                return t.classList || new rt(t)
            }

            function rt(t) {
                this._node = t, this._names = et(t.getAttribute("class") || "")
            }

            function at(t, n) {
                for (var e = it(t), i = -1, r = n.length; ++i < r;) e.add(n[i])
            }

            function ft(t, n) {
                for (var e = it(t), i = -1, r = n.length; ++i < r;) e.remove(n[i])
            }
            rt.prototype = {
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

            function ct() {
                this.textContent = ""
            }

            function ot() {
                this.innerHTML = ""
            }

            function ut() {
                this.nextSibling && this.parentNode.appendChild(this)
            }

            function st() {
                this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
            }

            function ht() {
                return null
            }

            function lt() {
                var t = this.parentNode;
                t && t.removeChild(this)
            }

            function dt() {
                return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
            }

            function _t() {
                return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
            }
            var bt = {},
                pt = null;
            "undefined" != typeof document && ("onmouseenter" in document.documentElement || (bt = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }));

            function yt(t, n, e) {
                return t = vt(t, n, e),
                    function(n) {
                        var e = n.relatedTarget;
                        e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
                    }
            }

            function vt(t, n, e) {
                return function(i) {
                    var r = pt;
                    pt = i;
                    try {
                        t.call(this, this.__data__, n, e)
                    } finally {
                        pt = r
                    }
                }
            }

            function gt(t) {
                return function() {
                    var n = this.__on;
                    if (n) {
                        for (var e, i = 0, r = -1, a = n.length; i < a; ++i) e = n[i], t.type && e.type !== t.type || e.name !== t.name ? n[++r] = e : this.removeEventListener(e.type, e.listener, e.capture);
                        ++r ? n.length = r : delete this.__on
                    }
                }
            }

            function xt(t, n, e) {
                var i = bt.hasOwnProperty(t.type) ? yt : vt;
                return function(r, a, f) {
                    var c, o = this.__on,
                        u = i(n, a, f);
                    if (o)
                        for (var s = 0, h = o.length; s < h; ++s)
                            if ((c = o[s]).type === t.type && c.name === t.name) return this.removeEventListener(c.type, c.listener, c.capture), this.addEventListener(c.type, c.listener = u, c.capture = e), void(c.value = n);
                    this.addEventListener(t.type, u, e), c = {
                        type: t.type,
                        name: t.name,
                        value: n,
                        listener: u,
                        capture: e
                    }, o ? o.push(c) : this.__on = [c]
                }
            }

            function mt(t, n, e) {
                var i = tt(t),
                    r = i.CustomEvent;
                "function" == typeof r ? r = new r(n, e) : (r = i.document.createEvent("Event"), e ? (r.initEvent(n, e.bubbles, e.cancelable), r.detail = e.detail) : r.initEvent(n, !1, !1)), t.dispatchEvent(r)
            }
            var wt = [null];

            function Mt(t, n) {
                this._groups = t, this._parents = n
            }

            function Nt() {
                return new Mt([
                    [document.documentElement]
                ], wt)
            }
            Mt.prototype = Nt.prototype = {
                constructor: Mt,
                select: function(t) {
                    "function" != typeof t && (t = j(t));
                    for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
                        for (var a, f, c = n[r], o = c.length, u = i[r] = new Array(o), s = 0; s < o; ++s)(a = c[s]) && (f = t.call(a, a.__data__, s, c)) && ("__data__" in a && (f.__data__ = a.__data__), u[s] = f);
                    return new Mt(i, this._parents)
                },
                selectAll: function(t) {
                    "function" != typeof t && (t = I(t));
                    for (var n = this._groups, e = n.length, i = [], r = [], a = 0; a < e; ++a)
                        for (var f, c = n[a], o = c.length, u = 0; u < o; ++u)(f = c[u]) && (i.push(t.call(f, f.__data__, u, c)), r.push(f));
                    return new Mt(i, r)
                },
                filter: function(t) {
                    "function" != typeof t && (t = B(t));
                    for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
                        for (var a, f = n[r], c = f.length, o = i[r] = [], u = 0; u < c; ++u)(a = f[u]) && t.call(a, a.__data__, u, f) && o.push(a);
                    return new Mt(i, this._parents)
                },
                data: function(t, n) {
                    if (!t) return _ = new Array(this.size()), s = -1, this.each(function(t) {
                        _[++s] = t
                    }), _;
                    var e, i = n ? G : Q,
                        r = this._parents,
                        a = this._groups;
                    "function" != typeof t && (e = t, t = function() {
                        return e
                    });
                    for (var f = a.length, c = new Array(f), o = new Array(f), u = new Array(f), s = 0; s < f; ++s) {
                        var h = r[s],
                            l = a[s],
                            d = l.length,
                            _ = t.call(h, h && h.__data__, s, r),
                            b = _.length,
                            p = o[s] = new Array(b),
                            y = c[s] = new Array(b);
                        i(h, l, p, y, u[s] = new Array(d), _, n);
                        for (var v, g, x = 0, m = 0; x < b; ++x)
                            if (v = p[x]) {
                                for (x >= m && (m = x + 1); !(g = y[m]) && ++m < b;);
                                v._next = g || null
                            }
                    }
                    return (c = new Mt(c, r))._enter = o, c._exit = u, c
                },
                enter: function() {
                    return new Mt(this._enter || this._groups.map(Z), this._parents)
                },
                exit: function() {
                    return new Mt(this._exit || this._groups.map(Z), this._parents)
                },
                merge: function(t) {
                    for (var n = this._groups, e = t._groups, i = n.length, r = e.length, a = Math.min(i, r), f = new Array(i), c = 0; c < a; ++c)
                        for (var o, u = n[c], s = e[c], h = u.length, l = f[c] = new Array(h), d = 0; d < h; ++d)(o = u[d] || s[d]) && (l[d] = o);
                    for (; c < i; ++c) f[c] = n[c];
                    return new Mt(f, this._parents)
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
                    t || (t = K);
                    for (var e = this._groups, i = e.length, r = new Array(i), a = 0; a < i; ++a) {
                        for (var f, c = e[a], o = c.length, u = r[a] = new Array(o), s = 0; s < o; ++s)(f = c[s]) && (u[s] = f);
                        u.sort(n)
                    }
                    return new Mt(r, this._parents).order()
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
                        for (var r, a = n[e], f = 0, c = a.length; f < c; ++f)(r = a[f]) && t.call(r, r.__data__, f, a);
                    return this
                },
                attr: function(t, n) {
                    var e = q(t);
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
                    })(t, n, null == e ? "" : e)) : nt(this.node(), t)
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
                    var e = et(t + "");
                    if (arguments.length < 2) {
                        for (var i = it(this.node()), r = -1, a = e.length; ++r < a;)
                            if (!i.contains(e[r])) return !1;
                        return !0
                    }
                    return this.each(("function" == typeof n ? function(t, n) {
                        return function() {
                            (n.apply(this, arguments) ? at : ft)(this, t)
                        }
                    } : n ? function(t) {
                        return function() {
                            at(this, t)
                        }
                    } : function(t) {
                        return function() {
                            ft(this, t)
                        }
                    })(e, n))
                },
                text: function(t) {
                    return arguments.length ? this.each(null == t ? ct : ("function" == typeof t ? function(t) {
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
                    return arguments.length ? this.each(null == t ? ot : ("function" == typeof t ? function(t) {
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
                    return this.each(ut)
                },
                lower: function() {
                    return this.each(st)
                },
                append: function(t) {
                    var n = "function" == typeof t ? t : z(t);
                    return this.select(function() {
                        return this.appendChild(n.apply(this, arguments))
                    })
                },
                insert: function(t, n) {
                    var e = "function" == typeof t ? t : z(t),
                        i = null == n ? ht : "function" == typeof n ? n : j(n);
                    return this.select(function() {
                        return this.insertBefore(e.apply(this, arguments), i.apply(this, arguments) || null)
                    })
                },
                remove: function() {
                    return this.each(lt)
                },
                clone: function(t) {
                    return this.select(t ? _t : dt)
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
                        for (c = n ? xt : gt, null == e && (e = !1), i = 0; i < f; ++i) this.each(c(a[i], n, e));
                        return this
                    }
                    var c = this.node().__on;
                    if (c)
                        for (var o, u = 0, s = c.length; u < s; ++u)
                            for (i = 0, o = c[u]; i < f; ++i)
                                if ((r = a[i]).type === o.type && r.name === o.name) return o.value
                },
                dispatch: function(t, n) {
                    return this.each(("function" == typeof n ? function(t, n) {
                        return function() {
                            return mt(this, t, n.apply(this, arguments))
                        }
                    } : function(t, n) {
                        return function() {
                            return mt(this, t, n)
                        }
                    })(t, n))
                }
            };
            var Tt = Nt,
                kt = function(t) {
                    return "string" == typeof t ? new Mt([
                        [document.querySelector(t)]
                    ], [document.documentElement]) : new Mt([
                        [t]
                    ], wt)
                },
                At = 0;

            function Ct() {
                this._ = "@" + (++At).toString(36)
            }
            Ct.prototype = function() {
                return new Ct
            }.prototype = {
                constructor: Ct,
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

            function St(t, n, e, i, r, a, f, c, o, u) {
                this.target = t, this.type = n, this.subject = e, this.identifier = i, this.active = r, this.x = a, this.y = f, this.dx = c, this.dy = o, this._ = u
            }
            St.prototype.on = function() {
                var t = this._.on.apply(this._, arguments);
                return t === this._ ? this : t
            };
            var Et = function(t, n, e) {
                t.prototype = n.prototype = e, e.constructor = t
            };

            function Ut(t, n) {
                var e = Object.create(t.prototype);
                for (var i in n) e[i] = n[i];
                return e
            }

            function Lt() {}
            var Pt = "\\s*([+-]?\\d+)\\s*",
                Dt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                Rt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                Ft = /^#([0-9a-f]{3})$/,
                Yt = /^#([0-9a-f]{6})$/,
                qt = new RegExp("^rgb\\(" + [Pt, Pt, Pt] + "\\)$"),
                zt = new RegExp("^rgb\\(" + [Rt, Rt, Rt] + "\\)$"),
                Ht = new RegExp("^rgba\\(" + [Pt, Pt, Pt, Dt] + "\\)$"),
                jt = new RegExp("^rgba\\(" + [Rt, Rt, Rt, Dt] + "\\)$"),
                Ot = new RegExp("^hsl\\(" + [Dt, Rt, Rt] + "\\)$"),
                It = new RegExp("^hsla\\(" + [Dt, Rt, Rt, Dt] + "\\)$"),
                $t = {
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

            function Xt(t) {
                var n;
                return t = (t + "").trim().toLowerCase(), (n = Ft.exec(t)) ? new Jt((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = Yt.exec(t)) ? Vt(parseInt(n[1], 16)) : (n = qt.exec(t)) ? new Jt(n[1], n[2], n[3], 1) : (n = zt.exec(t)) ? new Jt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Ht.exec(t)) ? Bt(n[1], n[2], n[3], n[4]) : (n = jt.exec(t)) ? Bt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Ot.exec(t)) ? Gt(n[1], n[2] / 100, n[3] / 100, 1) : (n = It.exec(t)) ? Gt(n[1], n[2] / 100, n[3] / 100, n[4]) : $t.hasOwnProperty(t) ? Vt($t[t]) : "transparent" === t ? new Jt(NaN, NaN, NaN, 0) : null
            }

            function Vt(t) {
                return new Jt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
            }

            function Bt(t, n, e, i) {
                return i <= 0 && (t = n = e = NaN), new Jt(t, n, e, i)
            }

            function Zt(t) {
                return t instanceof Lt || (t = Xt(t)), t ? new Jt((t = t.rgb()).r, t.g, t.b, t.opacity) : new Jt
            }

            function Wt(t, n, e, i) {
                return 1 === arguments.length ? Zt(t) : new Jt(t, n, e, null == i ? 1 : i)
            }

            function Jt(t, n, e, i) {
                this.r = +t, this.g = +n, this.b = +e, this.opacity = +i
            }

            function Qt(t) {
                return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
            }

            function Gt(t, n, e, i) {
                return i <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new tn(t, n, e, i)
            }

            function Kt(t, n, e, i) {
                return 1 === arguments.length ? function(t) {
                    if (t instanceof tn) return new tn(t.h, t.s, t.l, t.opacity);
                    if (t instanceof Lt || (t = Xt(t)), !t) return new tn;
                    if (t instanceof tn) return t;
                    var n = (t = t.rgb()).r / 255,
                        e = t.g / 255,
                        i = t.b / 255,
                        r = Math.min(n, e, i),
                        a = Math.max(n, e, i),
                        f = NaN,
                        c = a - r,
                        o = (a + r) / 2;
                    return c ? (f = n === a ? (e - i) / c + 6 * (e < i) : e === a ? (i - n) / c + 2 : (n - e) / c + 4, c /= o < .5 ? a + r : 2 - a - r, f *= 60) : c = o > 0 && o < 1 ? 0 : f, new tn(f, c, o, t.opacity)
                }(t) : new tn(t, n, e, null == i ? 1 : i)
            }

            function tn(t, n, e, i) {
                this.h = +t, this.s = +n, this.l = +e, this.opacity = +i
            }

            function nn(t, n, e) {
                return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
            }
            Et(Lt, Xt, {
                displayable: function() {
                    return this.rgb().displayable()
                },
                hex: function() {
                    return this.rgb().hex()
                },
                toString: function() {
                    return this.rgb() + ""
                }
            }), Et(Jt, Wt, Ut(Lt, {
                brighter: function(t) {
                    return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Jt(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                darker: function(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new Jt(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                rgb: function() {
                    return this
                },
                displayable: function() {
                    return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
                },
                hex: function() {
                    return "#" + Qt(this.r) + Qt(this.g) + Qt(this.b)
                },
                toString: function() {
                    var t = this.opacity;
                    return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
                }
            })), Et(tn, Kt, Ut(Lt, {
                brighter: function(t) {
                    return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new tn(this.h, this.s, this.l * t, this.opacity)
                },
                darker: function(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new tn(this.h, this.s, this.l * t, this.opacity)
                },
                rgb: function() {
                    var t = this.h % 360 + 360 * (this.h < 0),
                        n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                        e = this.l,
                        i = e + (e < .5 ? e : 1 - e) * n,
                        r = 2 * e - i;
                    return new Jt(nn(t >= 240 ? t - 240 : t + 120, r, i), nn(t, r, i), nn(t < 120 ? t + 240 : t - 120, r, i), this.opacity)
                },
                displayable: function() {
                    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
                }
            }));
            var en = Math.PI / 180,
                rn = 180 / Math.PI,
                an = .96422,
                fn = 1,
                cn = .82521,
                on = 4 / 29,
                un = 6 / 29,
                sn = 3 * un * un,
                hn = un * un * un;

            function ln(t) {
                if (t instanceof _n) return new _n(t.l, t.a, t.b, t.opacity);
                if (t instanceof mn) {
                    if (isNaN(t.h)) return new _n(t.l, 0, 0, t.opacity);
                    var n = t.h * en;
                    return new _n(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
                }
                t instanceof Jt || (t = Zt(t));
                var e, i, r = vn(t.r),
                    a = vn(t.g),
                    f = vn(t.b),
                    c = bn((.2225045 * r + .7168786 * a + .0606169 * f) / fn);
                return r === a && a === f ? e = i = c : (e = bn((.4360747 * r + .3850649 * a + .1430804 * f) / an), i = bn((.0139322 * r + .0971045 * a + .7141733 * f) / cn)), new _n(116 * c - 16, 500 * (e - c), 200 * (c - i), t.opacity)
            }

            function dn(t, n, e, i) {
                return 1 === arguments.length ? ln(t) : new _n(t, n, e, null == i ? 1 : i)
            }

            function _n(t, n, e, i) {
                this.l = +t, this.a = +n, this.b = +e, this.opacity = +i
            }

            function bn(t) {
                return t > hn ? Math.pow(t, 1 / 3) : t / sn + on
            }

            function pn(t) {
                return t > un ? t * t * t : sn * (t - on)
            }

            function yn(t) {
                return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
            }

            function vn(t) {
                return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
            }

            function gn(t) {
                if (t instanceof mn) return new mn(t.h, t.c, t.l, t.opacity);
                if (t instanceof _n || (t = ln(t)), 0 === t.a && 0 === t.b) return new mn(NaN, 0, t.l, t.opacity);
                var n = Math.atan2(t.b, t.a) * rn;
                return new mn(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
            }

            function xn(t, n, e, i) {
                return 1 === arguments.length ? gn(t) : new mn(t, n, e, null == i ? 1 : i)
            }

            function mn(t, n, e, i) {
                this.h = +t, this.c = +n, this.l = +e, this.opacity = +i
            }
            Et(_n, dn, Ut(Lt, {
                brighter: function(t) {
                    return new _n(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                },
                darker: function(t) {
                    return new _n(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                },
                rgb: function() {
                    var t = (this.l + 16) / 116,
                        n = isNaN(this.a) ? t : t + this.a / 500,
                        e = isNaN(this.b) ? t : t - this.b / 200;
                    return new Jt(yn(3.1338561 * (n = an * pn(n)) - 1.6168667 * (t = fn * pn(t)) - .4906146 * (e = cn * pn(e))), yn(-.9787684 * n + 1.9161415 * t + .033454 * e), yn(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
                }
            })), Et(mn, xn, Ut(Lt, {
                brighter: function(t) {
                    return new mn(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
                },
                darker: function(t) {
                    return new mn(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
                },
                rgb: function() {
                    return ln(this).rgb()
                }
            }));
            var wn = -.29227,
                Mn = -.90649,
                Nn = 1.97294,
                Tn = Nn * Mn,
                kn = 1.78277 * Nn,
                An = 1.78277 * wn - -.14861 * Mn;

            function Cn(t, n, e, i) {
                return 1 === arguments.length ? function(t) {
                    if (t instanceof Sn) return new Sn(t.h, t.s, t.l, t.opacity);
                    t instanceof Jt || (t = Zt(t));
                    var n = t.r / 255,
                        e = t.g / 255,
                        i = t.b / 255,
                        r = (An * i + Tn * n - kn * e) / (An + Tn - kn),
                        a = i - r,
                        f = (Nn * (e - r) - wn * a) / Mn,
                        c = Math.sqrt(f * f + a * a) / (Nn * r * (1 - r)),
                        o = c ? Math.atan2(f, a) * rn - 120 : NaN;
                    return new Sn(o < 0 ? o + 360 : o, c, r, t.opacity)
                }(t) : new Sn(t, n, e, null == i ? 1 : i)
            }

            function Sn(t, n, e, i) {
                this.h = +t, this.s = +n, this.l = +e, this.opacity = +i
            }

            function En(t, n, e, i, r) {
                var a = t * t,
                    f = a * t;
                return ((1 - 3 * t + 3 * a - f) * n + (4 - 6 * a + 3 * f) * e + (1 + 3 * t + 3 * a - 3 * f) * i + f * r) / 6
            }
            Et(Sn, Cn, Ut(Lt, {
                brighter: function(t) {
                    return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Sn(this.h, this.s, this.l * t, this.opacity)
                },
                darker: function(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new Sn(this.h, this.s, this.l * t, this.opacity)
                },
                rgb: function() {
                    var t = isNaN(this.h) ? 0 : (this.h + 120) * en,
                        n = +this.l,
                        e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                        i = Math.cos(t),
                        r = Math.sin(t);
                    return new Jt(255 * (n + e * (-.14861 * i + 1.78277 * r)), 255 * (n + e * (wn * i + Mn * r)), 255 * (n + e * (Nn * i)), this.opacity)
                }
            }));
            var Un = function(t) {
                return function() {
                    return t
                }
            };

            function Ln(t, n) {
                return function(e) {
                    return t + e * n
                }
            }

            function Pn(t, n) {
                var e = n - t;
                return e ? Ln(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Un(isNaN(t) ? n : t)
            }

            function Dn(t) {
                return 1 == (t = +t) ? Rn : function(n, e) {
                    return e - n ? function(t, n, e) {
                        return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                            function(i) {
                                return Math.pow(t + i * n, e)
                            }
                    }(n, e, t) : Un(isNaN(n) ? e : n)
                }
            }

            function Rn(t, n) {
                var e = n - t;
                return e ? Ln(t, e) : Un(isNaN(t) ? n : t)
            }
            var Fn = function t(n) {
                var e = Dn(n);

                function i(t, n) {
                    var i = e((t = Wt(t)).r, (n = Wt(n)).r),
                        r = e(t.g, n.g),
                        a = e(t.b, n.b),
                        f = Rn(t.opacity, n.opacity);
                    return function(n) {
                        return t.r = i(n), t.g = r(n), t.b = a(n), t.opacity = f(n), t + ""
                    }
                }
                return i.gamma = t, i
            }(1);

            function Yn(t) {
                return function(n) {
                    var e, i, r = n.length,
                        a = new Array(r),
                        f = new Array(r),
                        c = new Array(r);
                    for (e = 0; e < r; ++e) i = Wt(n[e]), a[e] = i.r || 0, f[e] = i.g || 0, c[e] = i.b || 0;
                    return a = t(a), f = t(f), c = t(c), i.opacity = 1,
                        function(t) {
                            return i.r = a(t), i.g = f(t), i.b = c(t), i + ""
                        }
                }
            }
            var qn = Yn(function(t) {
                    var n = t.length - 1;
                    return function(e) {
                        var i = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                            r = t[i],
                            a = t[i + 1],
                            f = i > 0 ? t[i - 1] : 2 * r - a,
                            c = i < n - 1 ? t[i + 2] : 2 * a - r;
                        return En((e - i / n) * n, f, r, a, c)
                    }
                }),
                zn = (Yn(function(t) {
                    var n = t.length;
                    return function(e) {
                        var i = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                            r = t[(i + n - 1) % n],
                            a = t[i % n],
                            f = t[(i + 1) % n],
                            c = t[(i + 2) % n];
                        return En((e - i / n) * n, r, a, f, c)
                    }
                }), function(t, n) {
                    return n -= t = +t,
                        function(e) {
                            return t + n * e
                        }
                }),
                Hn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                jn = new RegExp(Hn.source, "g");
            var On, In, $n, Xn, Vn = function(t, n) {
                    var e, i, r, a = Hn.lastIndex = jn.lastIndex = 0,
                        f = -1,
                        c = [],
                        o = [];
                    for (t += "", n += "";
                        (e = Hn.exec(t)) && (i = jn.exec(n));)(r = i.index) > a && (r = n.slice(a, r), c[f] ? c[f] += r : c[++f] = r), (e = e[0]) === (i = i[0]) ? c[f] ? c[f] += i : c[++f] = i : (c[++f] = null, o.push({
                        i: f,
                        x: zn(e, i)
                    })), a = jn.lastIndex;
                    return a < n.length && (r = n.slice(a), c[f] ? c[f] += r : c[++f] = r), c.length < 2 ? o[0] ? function(t) {
                        return function(n) {
                            return t(n) + ""
                        }
                    }(o[0].x) : function(t) {
                        return function() {
                            return t
                        }
                    }(n) : (n = o.length, function(t) {
                        for (var e, i = 0; i < n; ++i) c[(e = o[i]).i] = e.x(t);
                        return c.join("")
                    })
                },
                Bn = function(t, n) {
                    var e, i = typeof n;
                    return null == n || "boolean" === i ? Un(n) : ("number" === i ? zn : "string" === i ? (e = Xt(n)) ? (n = e, Fn) : Vn : n instanceof Xt ? Fn : n instanceof Date ? function(t, n) {
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
                        for (e = 0; e < r; ++e) a[e] = Bn(t[e], n[e]);
                        for (; e < i; ++e) f[e] = n[e];
                        return function(t) {
                            for (e = 0; e < r; ++e) f[e] = a[e](t);
                            return f
                        }
                    } : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? function(t, n) {
                        var e, i = {},
                            r = {};
                        for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? i[e] = Bn(t[e], n[e]) : r[e] = n[e];
                        return function(t) {
                            for (e in i) r[e] = i[e](t);
                            return r
                        }
                    } : zn)(t, n)
                },
                Zn = function(t, n) {
                    return n -= t = +t,
                        function(e) {
                            return Math.round(t + n * e)
                        }
                },
                Wn = 180 / Math.PI,
                Jn = {
                    translateX: 0,
                    translateY: 0,
                    rotate: 0,
                    skewX: 0,
                    scaleX: 1,
                    scaleY: 1
                },
                Qn = function(t, n, e, i, r, a) {
                    var f, c, o;
                    return (f = Math.sqrt(t * t + n * n)) && (t /= f, n /= f), (o = t * e + n * i) && (e -= t * o, i -= n * o), (c = Math.sqrt(e * e + i * i)) && (e /= c, i /= c, o /= c), t * i < n * e && (t = -t, n = -n, o = -o, f = -f), {
                        translateX: r,
                        translateY: a,
                        rotate: Math.atan2(n, t) * Wn,
                        skewX: Math.atan(o) * Wn,
                        scaleX: f,
                        scaleY: c
                    }
                };

            function Gn(t, n, e, i) {
                function r(t) {
                    return t.length ? t.pop() + " " : ""
                }
                return function(a, f) {
                    var c = [],
                        o = [];
                    return a = t(a), f = t(f),
                        function(t, i, r, a, f, c) {
                            if (t !== r || i !== a) {
                                var o = f.push("translate(", null, n, null, e);
                                c.push({
                                    i: o - 4,
                                    x: zn(t, r)
                                }, {
                                    i: o - 2,
                                    x: zn(i, a)
                                })
                            } else(r || a) && f.push("translate(" + r + n + a + e)
                        }(a.translateX, a.translateY, f.translateX, f.translateY, c, o),
                        function(t, n, e, a) {
                            t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), a.push({
                                i: e.push(r(e) + "rotate(", null, i) - 2,
                                x: zn(t, n)
                            })) : n && e.push(r(e) + "rotate(" + n + i)
                        }(a.rotate, f.rotate, c, o),
                        function(t, n, e, a) {
                            t !== n ? a.push({
                                i: e.push(r(e) + "skewX(", null, i) - 2,
                                x: zn(t, n)
                            }) : n && e.push(r(e) + "skewX(" + n + i)
                        }(a.skewX, f.skewX, c, o),
                        function(t, n, e, i, a, f) {
                            if (t !== e || n !== i) {
                                var c = a.push(r(a) + "scale(", null, ",", null, ")");
                                f.push({
                                    i: c - 4,
                                    x: zn(t, e)
                                }, {
                                    i: c - 2,
                                    x: zn(n, i)
                                })
                            } else 1 === e && 1 === i || a.push(r(a) + "scale(" + e + "," + i + ")")
                        }(a.scaleX, a.scaleY, f.scaleX, f.scaleY, c, o), a = f = null,
                        function(t) {
                            for (var n, e = -1, i = o.length; ++e < i;) c[(n = o[e]).i] = n.x(t);
                            return c.join("")
                        }
                }
            }
            var Kn = Gn(function(t) {
                    return "none" === t ? Jn : (On || (On = document.createElement("DIV"), In = document.documentElement, $n = document.defaultView), On.style.transform = t, t = $n.getComputedStyle(In.appendChild(On), null).getPropertyValue("transform"), In.removeChild(On), t = t.slice(7, -1).split(","), Qn(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
                }, "px, ", "px)", "deg)"),
                te = Gn(function(t) {
                    return null == t ? Jn : (Xn || (Xn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Xn.setAttribute("transform", t), (t = Xn.transform.baseVal.consolidate()) ? (t = t.matrix, Qn(t.a, t.b, t.c, t.d, t.e, t.f)) : Jn)
                }, ", ", ")", ")");
            Math.SQRT2;

            function ne(t) {
                return function(n, e) {
                    var i = t((n = Kt(n)).h, (e = Kt(e)).h),
                        r = Rn(n.s, e.s),
                        a = Rn(n.l, e.l),
                        f = Rn(n.opacity, e.opacity);
                    return function(t) {
                        return n.h = i(t), n.s = r(t), n.l = a(t), n.opacity = f(t), n + ""
                    }
                }
            }
            ne(Pn), ne(Rn);

            function ee(t) {
                return function(n, e) {
                    var i = t((n = xn(n)).h, (e = xn(e)).h),
                        r = Rn(n.c, e.c),
                        a = Rn(n.l, e.l),
                        f = Rn(n.opacity, e.opacity);
                    return function(t) {
                        return n.h = i(t), n.c = r(t), n.l = a(t), n.opacity = f(t), n + ""
                    }
                }
            }
            ee(Pn), ee(Rn);

            function ie(t) {
                return function n(e) {
                    function i(n, i) {
                        var r = t((n = Cn(n)).h, (i = Cn(i)).h),
                            a = Rn(n.s, i.s),
                            f = Rn(n.l, i.l),
                            c = Rn(n.opacity, i.opacity);
                        return function(t) {
                            return n.h = r(t), n.s = a(t), n.l = f(Math.pow(t, e)), n.opacity = c(t), n + ""
                        }
                    }
                    return e = +e, i.gamma = n, i
                }(1)
            }
            ie(Pn);
            var re = ie(Rn);
            var ae, fe, ce = 0,
                oe = 0,
                ue = 0,
                se = 1e3,
                he = 0,
                le = 0,
                de = 0,
                _e = "object" == typeof performance && performance.now ? performance : Date,
                be = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                    setTimeout(t, 17)
                };

            function pe() {
                return le || (be(ye), le = _e.now() + de)
            }

            function ye() {
                le = 0
            }

            function ve() {
                this._call = this._time = this._next = null
            }

            function ge(t, n, e) {
                var i = new ve;
                return i.restart(t, n, e), i
            }

            function xe() {
                le = (he = _e.now()) + de, ce = oe = 0;
                try {
                    ! function() {
                        pe(), ++ce;
                        for (var t, n = ae; n;)(t = le - n._time) >= 0 && n._call.call(null, t), n = n._next;
                        --ce
                    }()
                } finally {
                    ce = 0,
                        function() {
                            var t, n, e = ae,
                                i = 1 / 0;
                            for (; e;) e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ae = n);
                            fe = t, we(i)
                        }(), le = 0
                }
            }

            function me() {
                var t = _e.now(),
                    n = t - he;
                n > se && (de -= n, he = t)
            }

            function we(t) {
                ce || (oe && (oe = clearTimeout(oe)), t - le > 24 ? (t < 1 / 0 && (oe = setTimeout(xe, t - _e.now() - de)), ue && (ue = clearInterval(ue))) : (ue || (he = _e.now(), ue = setInterval(me, se)), ce = 1, be(xe)))
            }
            ve.prototype = ge.prototype = {
                constructor: ve,
                restart: function(t, n, e) {
                    if ("function" != typeof t) throw new TypeError("callback is not a function");
                    e = (null == e ? pe() : +e) + (null == n ? 0 : +n), this._next || fe === this || (fe ? fe._next = this : ae = this, fe = this), this._call = t, this._time = e, we()
                },
                stop: function() {
                    this._call && (this._call = null, this._time = 1 / 0, we())
                }
            };
            var Me = function(t, n, e) {
                    var i = new ve;
                    return n = null == n ? 0 : +n, i.restart(function(e) {
                        i.stop(), t(e + n)
                    }, n, e), i
                },
                Ne = R("start", "end", "interrupt"),
                Te = [],
                ke = 0,
                Ae = 1,
                Ce = 2,
                Se = 3,
                Ee = 4,
                Ue = 5,
                Le = 6,
                Pe = function(t, n, e, i, r, a) {
                    var f = t.__transition;
                    if (f) {
                        if (e in f) return
                    } else t.__transition = {};
                    ! function(t, n, e) {
                        var i, r = t.__transition;

                        function a(o) {
                            var u, s, h, l;
                            if (e.state !== Ae) return c();
                            for (u in r)
                                if ((l = r[u]).name === e.name) {
                                    if (l.state === Se) return Me(a);
                                    l.state === Ee ? (l.state = Le, l.timer.stop(), l.on.call("interrupt", t, t.__data__, l.index, l.group), delete r[u]) : +u < n && (l.state = Le, l.timer.stop(), delete r[u])
                                } if (Me(function() {
                                    e.state === Se && (e.state = Ee, e.timer.restart(f, e.delay, e.time), f(o))
                                }), e.state = Ce, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Ce) {
                                for (e.state = Se, i = new Array(h = e.tween.length), u = 0, s = -1; u < h; ++u)(l = e.tween[u].value.call(t, t.__data__, e.index, e.group)) && (i[++s] = l);
                                i.length = s + 1
                            }
                        }

                        function f(n) {
                            for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(c), e.state = Ue, 1), a = -1, f = i.length; ++a < f;) i[a].call(null, r);
                            e.state === Ue && (e.on.call("end", t, t.__data__, e.index, e.group), c())
                        }

                        function c() {
                            for (var i in e.state = Le, e.timer.stop(), delete r[n], r) return;
                            delete t.__transition
                        }
                        r[n] = e, e.timer = ge(function(t) {
                            e.state = Ae, e.timer.restart(a, e.delay, e.time), e.delay <= t && a(t - e.delay)
                        }, 0, e.time)
                    }(t, e, {
                        name: n,
                        index: i,
                        group: r,
                        on: Ne,
                        tween: Te,
                        time: a.time,
                        delay: a.delay,
                        duration: a.duration,
                        ease: a.ease,
                        timer: null,
                        state: ke
                    })
                };

            function De(t, n) {
                var e = Fe(t, n);
                if (e.state > ke) throw new Error("too late; already scheduled");
                return e
            }

            function Re(t, n) {
                var e = Fe(t, n);
                if (e.state > Ce) throw new Error("too late; already started");
                return e
            }

            function Fe(t, n) {
                var e = t.__transition;
                if (!e || !(e = e[n])) throw new Error("transition not found");
                return e
            }
            var Ye = function(t, n) {
                var e, i, r, a = t.__transition,
                    f = !0;
                if (a) {
                    for (r in n = null == n ? null : n + "", a)(e = a[r]).name === n ? (i = e.state > Ce && e.state < Ue, e.state = Le, e.timer.stop(), i && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete a[r]) : f = !1;
                    f && delete t.__transition
                }
            };

            function qe(t, n, e) {
                var i = t._id;
                return t.each(function() {
                        var t = Re(this, i);
                        (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                    }),
                    function(t) {
                        return Fe(t, i).value[n]
                    }
            }
            var ze = function(t, n) {
                var e;
                return ("number" == typeof n ? zn : n instanceof Xt ? Fn : (e = Xt(n)) ? (n = e, Fn) : Vn)(t, n)
            };
            var He = Tt.prototype.constructor;
            var je = 0;

            function Oe(t, n, e, i) {
                this._groups = t, this._parents = n, this._name = e, this._id = i
            }

            function Ie() {
                return ++je
            }
            var $e = Tt.prototype;

            function Xe(t) {
                return +t
            }
            Oe.prototype = function(t) {
                return Tt().transition(t)
            }.prototype = {
                constructor: Oe,
                select: function(t) {
                    var n = this._name,
                        e = this._id;
                    "function" != typeof t && (t = j(t));
                    for (var i = this._groups, r = i.length, a = new Array(r), f = 0; f < r; ++f)
                        for (var c, o, u = i[f], s = u.length, h = a[f] = new Array(s), l = 0; l < s; ++l)(c = u[l]) && (o = t.call(c, c.__data__, l, u)) && ("__data__" in c && (o.__data__ = c.__data__), h[l] = o, Pe(h[l], n, e, l, h, Fe(c, e)));
                    return new Oe(a, this._parents, n, e)
                },
                selectAll: function(t) {
                    var n = this._name,
                        e = this._id;
                    "function" != typeof t && (t = I(t));
                    for (var i = this._groups, r = i.length, a = [], f = [], c = 0; c < r; ++c)
                        for (var o, u = i[c], s = u.length, h = 0; h < s; ++h)
                            if (o = u[h]) {
                                for (var l, d = t.call(o, o.__data__, h, u), _ = Fe(o, e), b = 0, p = d.length; b < p; ++b)(l = d[b]) && Pe(l, n, e, b, d, _);
                                a.push(d), f.push(o)
                            } return new Oe(a, f, n, e)
                },
                filter: function(t) {
                    "function" != typeof t && (t = B(t));
                    for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
                        for (var a, f = n[r], c = f.length, o = i[r] = [], u = 0; u < c; ++u)(a = f[u]) && t.call(a, a.__data__, u, f) && o.push(a);
                    return new Oe(i, this._parents, this._name, this._id)
                },
                merge: function(t) {
                    if (t._id !== this._id) throw new Error;
                    for (var n = this._groups, e = t._groups, i = n.length, r = e.length, a = Math.min(i, r), f = new Array(i), c = 0; c < a; ++c)
                        for (var o, u = n[c], s = e[c], h = u.length, l = f[c] = new Array(h), d = 0; d < h; ++d)(o = u[d] || s[d]) && (l[d] = o);
                    for (; c < i; ++c) f[c] = n[c];
                    return new Oe(f, this._parents, this._name, this._id)
                },
                selection: function() {
                    return new He(this._groups, this._parents)
                },
                transition: function() {
                    for (var t = this._name, n = this._id, e = Ie(), i = this._groups, r = i.length, a = 0; a < r; ++a)
                        for (var f, c = i[a], o = c.length, u = 0; u < o; ++u)
                            if (f = c[u]) {
                                var s = Fe(f, n);
                                Pe(f, t, e, u, c, {
                                    time: s.time + s.delay + s.duration,
                                    delay: 0,
                                    duration: s.duration,
                                    ease: s.ease
                                })
                            } return new Oe(i, this._parents, t, e)
                },
                call: $e.call,
                nodes: $e.nodes,
                node: $e.node,
                size: $e.size,
                empty: $e.empty,
                each: $e.each,
                on: function(t, n) {
                    var e = this._id;
                    return arguments.length < 2 ? Fe(this.node(), e).on.on(t) : this.each(function(t, n, e) {
                        var i, r, a = function(t) {
                            return (t + "").trim().split(/^|\s+/).every(function(t) {
                                var n = t.indexOf(".");
                                return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                            })
                        }(n) ? De : Re;
                        return function() {
                            var f = a(this, t),
                                c = f.on;
                            c !== i && (r = (i = c).copy()).on(n, e), f.on = r
                        }
                    }(e, t, n))
                },
                attr: function(t, n) {
                    var e = q(t),
                        i = "transform" === e ? te : ze;
                    return this.attrTween(t, "function" == typeof n ? (e.local ? function(t, n, e) {
                        var i, r, a;
                        return function() {
                            var f, c = e(this);
                            if (null != c) return (f = this.getAttributeNS(t.space, t.local)) === c ? null : f === i && c === r ? a : a = n(i = f, r = c);
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function(t, n, e) {
                        var i, r, a;
                        return function() {
                            var f, c = e(this);
                            if (null != c) return (f = this.getAttribute(t)) === c ? null : f === i && c === r ? a : a = n(i = f, r = c);
                            this.removeAttribute(t)
                        }
                    })(e, i, qe(this, "attr." + t, n)) : null == n ? (e.local ? function(t) {
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
                    var i = q(t);
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
                    var i = "transform" == (t += "") ? Kn : ze;
                    return null == n ? this.styleTween(t, function(t, n) {
                        var e, i, r;
                        return function() {
                            var a = nt(this, t),
                                f = (this.style.removeProperty(t), nt(this, t));
                            return a === f ? null : a === e && f === i ? r : r = n(e = a, i = f)
                        }
                    }(t, i)).on("end.style." + t, function(t) {
                        return function() {
                            this.style.removeProperty(t)
                        }
                    }(t)) : this.styleTween(t, "function" == typeof n ? function(t, n, e) {
                        var i, r, a;
                        return function() {
                            var f = nt(this, t),
                                c = e(this);
                            return null == c && (this.style.removeProperty(t), c = nt(this, t)), f === c ? null : f === i && c === r ? a : a = n(i = f, r = c)
                        }
                    }(t, i, qe(this, "style." + t, n)) : function(t, n, e) {
                        var i, r;
                        return function() {
                            var a = nt(this, t);
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
                    }(qe(this, "text", t)) : function(t) {
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
                        for (var i, r = Fe(this.node(), e).tween, a = 0, f = r.length; a < f; ++a)
                            if ((i = r[a]).name === t) return i.value;
                        return null
                    }
                    return this.each((null == n ? function(t, n) {
                        var e, i;
                        return function() {
                            var r = Re(this, t),
                                a = r.tween;
                            if (a !== e)
                                for (var f = 0, c = (i = e = a).length; f < c; ++f)
                                    if (i[f].name === n) {
                                        (i = i.slice()).splice(f, 1);
                                        break
                                    } r.tween = i
                        }
                    } : function(t, n, e) {
                        var i, r;
                        if ("function" != typeof e) throw new Error;
                        return function() {
                            var a = Re(this, t),
                                f = a.tween;
                            if (f !== i) {
                                r = (i = f).slice();
                                for (var c = {
                                        name: n,
                                        value: e
                                    }, o = 0, u = r.length; o < u; ++o)
                                    if (r[o].name === n) {
                                        r[o] = c;
                                        break
                                    } o === u && r.push(c)
                            }
                            a.tween = r
                        }
                    })(e, t, n))
                },
                delay: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(("function" == typeof t ? function(t, n) {
                        return function() {
                            De(this, t).delay = +n.apply(this, arguments)
                        }
                    } : function(t, n) {
                        return n = +n,
                            function() {
                                De(this, t).delay = n
                            }
                    })(n, t)) : Fe(this.node(), n).delay
                },
                duration: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(("function" == typeof t ? function(t, n) {
                        return function() {
                            Re(this, t).duration = +n.apply(this, arguments)
                        }
                    } : function(t, n) {
                        return n = +n,
                            function() {
                                Re(this, t).duration = n
                            }
                    })(n, t)) : Fe(this.node(), n).duration
                },
                ease: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(function(t, n) {
                        if ("function" != typeof n) throw new Error;
                        return function() {
                            Re(this, t).ease = n
                        }
                    }(n, t)) : Fe(this.node(), n).ease
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
            var Ve = 2 * Math.PI,
                Be = (function t(n, e) {
                    var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ve);

                    function r(t) {
                        return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e)
                    }
                    return r.amplitude = function(n) {
                        return t(n, e * Ve)
                    }, r.period = function(e) {
                        return t(n, e)
                    }, r
                }(1, .3), function t(n, e) {
                    var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ve);

                    function r(t) {
                        return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e)
                    }
                    return r.amplitude = function(n) {
                        return t(n, e * Ve)
                    }, r.period = function(e) {
                        return t(n, e)
                    }, r
                }(1, .3), function t(n, e) {
                    var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ve);

                    function r(t) {
                        return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2
                    }
                    return r.amplitude = function(n) {
                        return t(n, e * Ve)
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

            function Ze(t, n) {
                for (var e; !(e = t.__transition) || !(e = e[n]);)
                    if (!(t = t.parentNode)) return Be.time = pe(), Be;
                return e
            }
            Tt.prototype.interrupt = function(t) {
                return this.each(function() {
                    Ye(this, t)
                })
            }, Tt.prototype.transition = function(t) {
                var n, e;
                t instanceof Oe ? (n = t._id, t = t._name) : (n = Ie(), (e = Be).time = pe(), t = null == t ? null : t + "");
                for (var i = this._groups, r = i.length, a = 0; a < r; ++a)
                    for (var f, c = i[a], o = c.length, u = 0; u < o; ++u)(f = c[u]) && Pe(f, t, n, u, c, e || Ze(f, n));
                return new Oe(i, this._parents, t, n)
            };
            ["e", "w"].map(We), ["n", "s"].map(We), ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(We);

            function We(t) {
                return {
                    type: t
                }
            }
            Math.cos, Math.sin, Math.PI, Math.max;
            Array.prototype.slice;
            var Je = Math.PI,
                Qe = 2 * Je,
                Ge = Qe - 1e-6;

            function Ke() {
                this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
            }

            function ti() {
                return new Ke
            }
            Ke.prototype = ti.prototype = {
                constructor: Ke,
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
                        c = e - t,
                        o = i - n,
                        u = a - t,
                        s = f - n,
                        h = u * u + s * s;
                    if (r < 0) throw new Error("negative radius: " + r);
                    if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
                    else if (h > 1e-6)
                        if (Math.abs(s * c - o * u) > 1e-6 && r) {
                            var l = e - a,
                                d = i - f,
                                _ = c * c + o * o,
                                b = l * l + d * d,
                                p = Math.sqrt(_),
                                y = Math.sqrt(h),
                                v = r * Math.tan((Je - Math.acos((_ + h - b) / (2 * p * y))) / 2),
                                g = v / y,
                                x = v / p;
                            Math.abs(g - 1) > 1e-6 && (this._ += "L" + (t + g * u) + "," + (n + g * s)), this._ += "A" + r + "," + r + ",0,0," + +(s * l > u * d) + "," + (this._x1 = t + x * c) + "," + (this._y1 = n + x * o)
                        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
                    else;
                },
                arc: function(t, n, e, i, r, a) {
                    t = +t, n = +n;
                    var f = (e = +e) * Math.cos(i),
                        c = e * Math.sin(i),
                        o = t + f,
                        u = n + c,
                        s = 1 ^ a,
                        h = a ? i - r : r - i;
                    if (e < 0) throw new Error("negative radius: " + e);
                    null === this._x1 ? this._ += "M" + o + "," + u : (Math.abs(this._x1 - o) > 1e-6 || Math.abs(this._y1 - u) > 1e-6) && (this._ += "L" + o + "," + u), e && (h < 0 && (h = h % Qe + Qe), h > Ge ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - f) + "," + (n - c) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = o) + "," + (this._y1 = u) : h > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(h >= Je) + "," + s + "," + (this._x1 = t + e * Math.cos(r)) + "," + (this._y1 = n + e * Math.sin(r))))
                },
                rect: function(t, n, e, i) {
                    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +i + "h" + -e + "Z"
                },
                toString: function() {
                    return this._
                }
            };
            var ni = ti;

            function ei() {}

            function ii(t, n) {
                var e = new ei;
                if (t instanceof ei) t.each(function(t, n) {
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
            ei.prototype = ii.prototype = {
                constructor: ei,
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
            var ri = ii;

            function ai() {}
            var fi = ri.prototype;

            function ci(t, n) {
                var e = new ai;
                if (t instanceof ai) t.each(function(t) {
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
            ai.prototype = ci.prototype = {
                constructor: ai,
                has: fi.has,
                add: function(t) {
                    return this["$" + (t += "")] = t, this
                },
                remove: fi.remove,
                clear: fi.clear,
                values: fi.keys,
                size: fi.size,
                empty: fi.empty,
                each: fi.each
            };
            Array.prototype.slice;
            var oi = {},
                ui = {},
                si = 34,
                hi = 10,
                li = 13;

            function di(t) {
                return new Function("d", "return {" + t.map(function(t, n) {
                    return JSON.stringify(t) + ": d[" + n + "]"
                }).join(",") + "}")
            }
            var _i = function(t) {
                    var n = new RegExp('["' + t + "\n\r]"),
                        e = t.charCodeAt(0);

                    function i(t, n) {
                        var i, r = [],
                            a = t.length,
                            f = 0,
                            c = 0,
                            o = a <= 0,
                            u = !1;

                        function s() {
                            if (o) return ui;
                            if (u) return u = !1, oi;
                            var n, i, r = f;
                            if (t.charCodeAt(r) === si) {
                                for (; f++ < a && t.charCodeAt(f) !== si || t.charCodeAt(++f) === si;);
                                return (n = f) >= a ? o = !0 : (i = t.charCodeAt(f++)) === hi ? u = !0 : i === li && (u = !0, t.charCodeAt(f) === hi && ++f), t.slice(r + 1, n - 1).replace(/""/g, '"')
                            }
                            for (; f < a;) {
                                if ((i = t.charCodeAt(n = f++)) === hi) u = !0;
                                else if (i === li) u = !0, t.charCodeAt(f) === hi && ++f;
                                else if (i !== e) continue;
                                return t.slice(r, n)
                            }
                            return o = !0, t.slice(r, a)
                        }
                        for (t.charCodeAt(a - 1) === hi && --a, t.charCodeAt(a - 1) === li && --a;
                            (i = s()) !== ui;) {
                            for (var h = []; i !== oi && i !== ui;) h.push(i), i = s();
                            n && null == (h = n(h, c++)) || r.push(h)
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
                                    var e = di(t);
                                    return function(i, r) {
                                        return n(e(i), r, t)
                                    }
                                }(t, n) : di(t)
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
                bi = _i(","),
                pi = bi.parse,
                yi = (bi.parseRows, bi.format, bi.formatRows, _i("\t")),
                vi = yi.parse;
            yi.parseRows, yi.format, yi.formatRows;

            function gi(t) {
                if (!t.ok) throw new Error(t.status + " " + t.statusText);
                return t.text()
            }
            var xi = function(t, n) {
                return fetch(t, n).then(gi)
            };

            function mi(t) {
                return function(n, e, i) {
                    return 2 === arguments.length && "function" == typeof e && (i = e, e = void 0), xi(n, e).then(function(n) {
                        return t(n, i)
                    })
                }
            }
            mi(pi), mi(vi);

            function wi(t) {
                if (!t.ok) throw new Error(t.status + " " + t.statusText);
                return t.json()
            }
            var Mi = function(t, n) {
                return fetch(t, n).then(wi)
            };

            function Ni(t) {
                return function(n, e) {
                    return xi(n, e).then(function(n) {
                        return (new DOMParser).parseFromString(n, t)
                    })
                }
            }
            Ni("application/xml"), Ni("text/html"), Ni("image/svg+xml");

            function Ti(t, n, e, i) {
                if (isNaN(n) || isNaN(e)) return t;
                var r, a, f, c, o, u, s, h, l, d = t._root,
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
                if (c = +t._x.call(null, d.data), o = +t._y.call(null, d.data), n === c && e === o) return _.next = d, r ? r[h] = _ : t._root = _, t;
                do {
                    r = r ? r[h] = new Array(4) : t._root = new Array(4), (u = n >= (a = (b + y) / 2)) ? b = a : y = a, (s = e >= (f = (p + v) / 2)) ? p = f : v = f
                } while ((h = s << 1 | u) == (l = (o >= f) << 1 | c >= a));
                return r[l] = d, r[h] = _, t
            }
            var ki = function(t, n, e, i, r) {
                this.node = t, this.x0 = n, this.y0 = e, this.x1 = i, this.y1 = r
            };

            function Ai(t) {
                return t[0]
            }

            function Ci(t) {
                return t[1]
            }

            function Si(t, n, e) {
                var i = new Ei(null == n ? Ai : n, null == e ? Ci : e, NaN, NaN, NaN, NaN);
                return null == t ? i : i.addAll(t)
            }

            function Ei(t, n, e, i, r, a) {
                this._x = t, this._y = n, this._x0 = e, this._y0 = i, this._x1 = r, this._y1 = a, this._root = void 0
            }

            function Ui(t) {
                for (var n = {
                        data: t.data
                    }, e = n; t = t.next;) e = e.next = {
                    data: t.data
                };
                return n
            }
            var Li = Si.prototype = Ei.prototype;
            Li.copy = function() {
                var t, n, e = new Ei(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
                    i = this._root;
                if (!i) return e;
                if (!i.length) return e._root = Ui(i), e;
                for (t = [{
                        source: i,
                        target: e._root = new Array(4)
                    }]; i = t.pop();)
                    for (var r = 0; r < 4; ++r)(n = i.source[r]) && (n.length ? t.push({
                        source: n,
                        target: i.target[r] = new Array(4)
                    }) : i.target[r] = Ui(n));
                return e
            }, Li.add = function(t) {
                var n = +this._x.call(null, t),
                    e = +this._y.call(null, t);
                return Ti(this.cover(n, e), n, e, t)
            }, Li.addAll = function(t) {
                var n, e, i, r, a = t.length,
                    f = new Array(a),
                    c = new Array(a),
                    o = 1 / 0,
                    u = 1 / 0,
                    s = -1 / 0,
                    h = -1 / 0;
                for (e = 0; e < a; ++e) isNaN(i = +this._x.call(null, n = t[e])) || isNaN(r = +this._y.call(null, n)) || (f[e] = i, c[e] = r, i < o && (o = i), i > s && (s = i), r < u && (u = r), r > h && (h = r));
                for (s < o && (o = this._x0, s = this._x1), h < u && (u = this._y0, h = this._y1), this.cover(o, u).cover(s, h), e = 0; e < a; ++e) Ti(this, f[e], c[e], t[e]);
                return this
            }, Li.cover = function(t, n) {
                if (isNaN(t = +t) || isNaN(n = +n)) return this;
                var e = this._x0,
                    i = this._y0,
                    r = this._x1,
                    a = this._y1;
                if (isNaN(e)) r = (e = Math.floor(t)) + 1, a = (i = Math.floor(n)) + 1;
                else {
                    if (!(e > t || t > r || i > n || n > a)) return this;
                    var f, c, o = r - e,
                        u = this._root;
                    switch (c = (n < (i + a) / 2) << 1 | t < (e + r) / 2) {
                        case 0:
                            do {
                                (f = new Array(4))[c] = u, u = f
                            } while (a = i + (o *= 2), t > (r = e + o) || n > a);
                            break;
                        case 1:
                            do {
                                (f = new Array(4))[c] = u, u = f
                            } while (a = i + (o *= 2), (e = r - o) > t || n > a);
                            break;
                        case 2:
                            do {
                                (f = new Array(4))[c] = u, u = f
                            } while (i = a - (o *= 2), t > (r = e + o) || i > n);
                            break;
                        case 3:
                            do {
                                (f = new Array(4))[c] = u, u = f
                            } while (i = a - (o *= 2), (e = r - o) > t || i > n)
                    }
                    this._root && this._root.length && (this._root = u)
                }
                return this._x0 = e, this._y0 = i, this._x1 = r, this._y1 = a, this
            }, Li.data = function() {
                var t = [];
                return this.visit(function(n) {
                    if (!n.length)
                        do {
                            t.push(n.data)
                        } while (n = n.next)
                }), t
            }, Li.extent = function(t) {
                return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
                    [this._x0, this._y0],
                    [this._x1, this._y1]
                ]
            }, Li.find = function(t, n, e) {
                var i, r, a, f, c, o, u, s = this._x0,
                    h = this._y0,
                    l = this._x1,
                    d = this._y1,
                    _ = [],
                    b = this._root;
                for (b && _.push(new ki(b, s, h, l, d)), null == e ? e = 1 / 0 : (s = t - e, h = n - e, l = t + e, d = n + e, e *= e); o = _.pop();)
                    if (!(!(b = o.node) || (r = o.x0) > l || (a = o.y0) > d || (f = o.x1) < s || (c = o.y1) < h))
                        if (b.length) {
                            var p = (r + f) / 2,
                                y = (a + c) / 2;
                            _.push(new ki(b[3], p, y, f, c), new ki(b[2], r, y, p, c), new ki(b[1], p, a, f, y), new ki(b[0], r, a, p, y)), (u = (n >= y) << 1 | t >= p) && (o = _[_.length - 1], _[_.length - 1] = _[_.length - 1 - u], _[_.length - 1 - u] = o)
                        } else {
                            var v = t - +this._x.call(null, b.data),
                                g = n - +this._y.call(null, b.data),
                                x = v * v + g * g;
                            if (x < e) {
                                var m = Math.sqrt(e = x);
                                s = t - m, h = n - m, l = t + m, d = n + m, i = b.data
                            }
                        } return i
            }, Li.remove = function(t) {
                if (isNaN(a = +this._x.call(null, t)) || isNaN(f = +this._y.call(null, t))) return this;
                var n, e, i, r, a, f, c, o, u, s, h, l, d = this._root,
                    _ = this._x0,
                    b = this._y0,
                    p = this._x1,
                    y = this._y1;
                if (!d) return this;
                if (d.length)
                    for (;;) {
                        if ((u = a >= (c = (_ + p) / 2)) ? _ = c : p = c, (s = f >= (o = (b + y) / 2)) ? b = o : y = o, n = d, !(d = d[h = s << 1 | u])) return this;
                        if (!d.length) break;
                        (n[h + 1 & 3] || n[h + 2 & 3] || n[h + 3 & 3]) && (e = n, l = h)
                    }
                for (; d.data !== t;)
                    if (i = d, !(d = d.next)) return this;
                return (r = d.next) && delete d.next, i ? (r ? i.next = r : delete i.next, this) : n ? (r ? n[h] = r : delete n[h], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[l] = d : this._root = d), this) : (this._root = r, this)
            }, Li.removeAll = function(t) {
                for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
                return this
            }, Li.root = function() {
                return this._root
            }, Li.size = function() {
                var t = 0;
                return this.visit(function(n) {
                    if (!n.length)
                        do {
                            ++t
                        } while (n = n.next)
                }), t
            }, Li.visit = function(t) {
                var n, e, i, r, a, f, c = [],
                    o = this._root;
                for (o && c.push(new ki(o, this._x0, this._y0, this._x1, this._y1)); n = c.pop();)
                    if (!t(o = n.node, i = n.x0, r = n.y0, a = n.x1, f = n.y1) && o.length) {
                        var u = (i + a) / 2,
                            s = (r + f) / 2;
                        (e = o[3]) && c.push(new ki(e, u, s, a, f)), (e = o[2]) && c.push(new ki(e, i, s, u, f)), (e = o[1]) && c.push(new ki(e, u, r, a, s)), (e = o[0]) && c.push(new ki(e, i, r, u, s))
                    } return this
            }, Li.visitAfter = function(t) {
                var n, e = [],
                    i = [];
                for (this._root && e.push(new ki(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
                    var r = n.node;
                    if (r.length) {
                        var a, f = n.x0,
                            c = n.y0,
                            o = n.x1,
                            u = n.y1,
                            s = (f + o) / 2,
                            h = (c + u) / 2;
                        (a = r[0]) && e.push(new ki(a, f, c, s, h)), (a = r[1]) && e.push(new ki(a, s, c, o, h)), (a = r[2]) && e.push(new ki(a, f, h, s, u)), (a = r[3]) && e.push(new ki(a, s, h, o, u))
                    }
                    i.push(n)
                }
                for (; n = i.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
                return this
            }, Li.x = function(t) {
                return arguments.length ? (this._x = t, this) : this._x
            }, Li.y = function(t) {
                return arguments.length ? (this._y = t, this) : this._y
            };
            Math.PI, Math.sqrt(5);
            var Pi = function(t, n) {
                    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
                    var e, i = t.slice(0, e);
                    return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(e + 1)]
                },
                Di = function(t) {
                    return (t = Pi(Math.abs(t))) ? t[1] : NaN
                },
                Ri = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

            function Fi(t) {
                return new Yi(t)
            }

            function Yi(t) {
                if (!(n = Ri.exec(t))) throw new Error("invalid format: " + t);
                var n;
                this.fill = n[1] || " ", this.align = n[2] || ">", this.sign = n[3] || "-", this.symbol = n[4] || "", this.zero = !!n[5], this.width = n[6] && +n[6], this.comma = !!n[7], this.precision = n[8] && +n[8].slice(1), this.trim = !!n[9], this.type = n[10] || ""
            }
            Fi.prototype = Yi.prototype, Yi.prototype.toString = function() {
                return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
            };
            var qi, zi, Hi, ji, Oi = function(t) {
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
                Ii = function(t, n) {
                    var e = Pi(t, n);
                    if (!e) return t + "";
                    var i = e[0],
                        r = e[1];
                    return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0")
                },
                $i = {
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
                        return Ii(100 * t, n)
                    },
                    r: Ii,
                    s: function(t, n) {
                        var e = Pi(t, n);
                        if (!e) return t + "";
                        var i = e[0],
                            r = e[1],
                            a = r - (qi = 3 * Math.max(-8, Math.min(8, Math.floor(r / 3)))) + 1,
                            f = i.length;
                        return a === f ? i : a > f ? i + new Array(a - f + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + Pi(t, Math.max(0, n + a - 1))[0]
                    },
                    X: function(t) {
                        return Math.round(t).toString(16).toUpperCase()
                    },
                    x: function(t) {
                        return Math.round(t).toString(16)
                    }
                },
                Xi = function(t) {
                    return t
                },
                Vi = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
            zi = function(t) {
                var n, e, i = t.grouping && t.thousands ? (n = t.grouping, e = t.thousands, function(t, i) {
                        for (var r = t.length, a = [], f = 0, c = n[0], o = 0; r > 0 && c > 0 && (o + c + 1 > i && (c = Math.max(1, i - o)), a.push(t.substring(r -= c, r + c)), !((o += c + 1) > i));) c = n[f = (f + 1) % n.length];
                        return a.reverse().join(e)
                    }) : Xi,
                    r = t.currency,
                    a = t.decimal,
                    f = t.numerals ? function(t) {
                        return function(n) {
                            return n.replace(/[0-9]/g, function(n) {
                                return t[+n]
                            })
                        }
                    }(t.numerals) : Xi,
                    c = t.percent || "%";

                function o(t) {
                    var n = (t = Fi(t)).fill,
                        e = t.align,
                        o = t.sign,
                        u = t.symbol,
                        s = t.zero,
                        h = t.width,
                        l = t.comma,
                        d = t.precision,
                        _ = t.trim,
                        b = t.type;
                    "n" === b ? (l = !0, b = "g") : $i[b] || (null == d && (d = 12), _ = !0, b = "g"), (s || "0" === n && "=" === e) && (s = !0, n = "0", e = "=");
                    var p = "$" === u ? r[0] : "#" === u && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "",
                        y = "$" === u ? r[1] : /[%p]/.test(b) ? c : "",
                        v = $i[b],
                        g = /[defgprs%]/.test(b);

                    function x(t) {
                        var r, c, u, x = p,
                            m = y;
                        if ("c" === b) m = v(t) + m, t = "";
                        else {
                            var w = (t = +t) < 0;
                            if (t = v(Math.abs(t), d), _ && (t = Oi(t)), w && 0 == +t && (w = !1), x = (w ? "(" === o ? o : "-" : "-" === o || "(" === o ? "" : o) + x, m = ("s" === b ? Vi[8 + qi / 3] : "") + m + (w && "(" === o ? ")" : ""), g)
                                for (r = -1, c = t.length; ++r < c;)
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
                    format: o,
                    formatPrefix: function(t, n) {
                        var e = o(((t = Fi(t)).type = "f", t)),
                            i = 3 * Math.max(-8, Math.min(8, Math.floor(Di(n) / 3))),
                            r = Math.pow(10, -i),
                            a = Vi[8 + i / 3];
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
            }), Hi = zi.format, ji = zi.formatPrefix;
            var Bi = function() {
                return new Zi
            };

            function Zi() {
                this.reset()
            }
            Zi.prototype = {
                constructor: Zi,
                reset: function() {
                    this.s = this.t = 0
                },
                add: function(t) {
                    Ji(Wi, t, this.t), Ji(this, Wi.s, this.s), this.s ? this.t += Wi.t : this.s = Wi.t
                },
                valueOf: function() {
                    return this.s
                }
            };
            var Wi = new Zi;

            function Ji(t, n, e) {
                var i = t.s = n + e,
                    r = i - n,
                    a = i - r;
                t.t = n - a + (e - r)
            }
            var Qi = 1e-6,
                Gi = Math.PI,
                Ki = Gi / 2,
                tr = Gi / 4,
                nr = 2 * Gi,
                er = Gi / 180,
                ir = Math.abs,
                rr = Math.atan,
                ar = Math.atan2,
                fr = Math.cos,
                cr = (Math.ceil, Math.exp),
                or = (Math.floor, Math.log),
                ur = (Math.pow, Math.sin),
                sr = (Math.sign, Math.sqrt),
                hr = Math.tan;

            function lr(t) {
                return t > 1 ? 0 : t < -1 ? Gi : Math.acos(t)
            }

            function dr(t) {
                return t > 1 ? Ki : t < -1 ? -Ki : Math.asin(t)
            }

            function _r() {}
            Bi(), Bi();

            function br(t) {
                var n = t[0],
                    e = t[1],
                    i = fr(e);
                return [i * fr(n), i * ur(n), ur(e)]
            }

            function pr(t, n) {
                return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
            }

            function yr(t) {
                var n = sr(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                t[0] /= n, t[1] /= n, t[2] /= n
            }
            Bi();

            function vr(t, n) {
                return [t > Gi ? t - nr : t < -Gi ? t + nr : t, n]
            }
            vr.invert = vr;
            var gr = function() {
                    var t, n = [];
                    return {
                        point: function(n, e) {
                            t.push([n, e])
                        },
                        lineStart: function() {
                            n.push(t = [])
                        },
                        lineEnd: _r,
                        rejoin: function() {
                            n.length > 1 && n.push(n.pop().concat(n.shift()))
                        },
                        result: function() {
                            var e = n;
                            return n = [], t = null, e
                        }
                    }
                },
                xr = function(t, n) {
                    return ir(t[0] - n[0]) < Qi && ir(t[1] - n[1]) < Qi
                };

            function mr(t, n, e, i) {
                this.x = t, this.z = n, this.o = e, this.e = i, this.v = !1, this.n = this.p = null
            }
            var wr = function(t, n, e, i, r) {
                var a, f, c = [],
                    o = [];
                if (t.forEach(function(t) {
                        if (!((n = t.length - 1) <= 0)) {
                            var n, e, i = t[0],
                                f = t[n];
                            if (xr(i, f)) {
                                for (r.lineStart(), a = 0; a < n; ++a) r.point((i = t[a])[0], i[1]);
                                r.lineEnd()
                            } else c.push(e = new mr(i, t, null, !0)), o.push(e.o = new mr(i, null, e, !1)), c.push(e = new mr(f, t, null, !1)), o.push(e.o = new mr(f, null, e, !0))
                        }
                    }), c.length) {
                    for (o.sort(n), Mr(c), Mr(o), a = 0, f = o.length; a < f; ++a) o[a].e = e = !e;
                    for (var u, s, h = c[0];;) {
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

            function Mr(t) {
                if (n = t.length) {
                    for (var n, e, i = 0, r = t[0]; ++i < n;) r.n = e = t[i], e.p = r, r = e;
                    r.n = e = t[0], e.p = r
                }
            }
            var Nr = Bi(),
                Tr = function(t, n) {
                    var e = n[0],
                        i = n[1],
                        r = ur(i),
                        a = [ur(e), -fr(e), 0],
                        f = 0,
                        c = 0;
                    Nr.reset(), 1 === r ? i = Ki + Qi : -1 === r && (i = -Ki - Qi);
                    for (var o = 0, u = t.length; o < u; ++o)
                        if (h = (s = t[o]).length)
                            for (var s, h, l = s[h - 1], d = l[0], _ = l[1] / 2 + tr, b = ur(_), p = fr(_), y = 0; y < h; ++y, d = g, b = m, p = w, l = v) {
                                var v = s[y],
                                    g = v[0],
                                    x = v[1] / 2 + tr,
                                    m = ur(x),
                                    w = fr(x),
                                    M = g - d,
                                    N = M >= 0 ? 1 : -1,
                                    T = N * M,
                                    k = T > Gi,
                                    A = b * m;
                                if (Nr.add(ar(A * N * ur(T), p * w + A * fr(T))), f += k ? M + N * nr : M, k ^ d >= e ^ g >= e) {
                                    var C = pr(br(l), br(v));
                                    yr(C);
                                    var S = pr(a, C);
                                    yr(S);
                                    var E = (k ^ M >= 0 ? -1 : 1) * dr(S[2]);
                                    (i > E || i === E && (C[0] || C[1])) && (c += k ^ M >= 0 ? 1 : -1)
                                }
                            }
                    return (f < -Qi || f < Qi && Nr < -Qi) ^ 1 & c
                },
                kr = function(t, n, e, i) {
                    return function(r) {
                        var a, f, c, o = n(r),
                            u = gr(),
                            s = n(u),
                            h = !1,
                            l = {
                                point: d,
                                lineStart: b,
                                lineEnd: y,
                                polygonStart: function() {
                                    l.point = v, l.lineStart = g, l.lineEnd = x, f = [], a = []
                                },
                                polygonEnd: function() {
                                    l.point = d, l.lineStart = b, l.lineEnd = y, f = p(f);
                                    var t = Tr(a, i);
                                    f.length ? (h || (r.polygonStart(), h = !0), wr(f, Cr, t, e, r)) : t && (h || (r.polygonStart(), h = !0), r.lineStart(), e(null, null, 1, r), r.lineEnd()), h && (r.polygonEnd(), h = !1), f = a = null
                                },
                                sphere: function() {
                                    r.polygonStart(), r.lineStart(), e(null, null, 1, r), r.lineEnd(), r.polygonEnd()
                                }
                            };

                        function d(n, e) {
                            t(n, e) && r.point(n, e)
                        }

                        function _(t, n) {
                            o.point(t, n)
                        }

                        function b() {
                            l.point = _, o.lineStart()
                        }

                        function y() {
                            l.point = d, o.lineEnd()
                        }

                        function v(t, n) {
                            c.push([t, n]), s.point(t, n)
                        }

                        function g() {
                            s.lineStart(), c = []
                        }

                        function x() {
                            v(c[0][0], c[0][1]), s.lineEnd();
                            var t, n, e, i, o = s.clean(),
                                l = u.result(),
                                d = l.length;
                            if (c.pop(), a.push(c), c = null, d)
                                if (1 & o) {
                                    if ((n = (e = l[0]).length - 1) > 0) {
                                        for (h || (r.polygonStart(), h = !0), r.lineStart(), t = 0; t < n; ++t) r.point((i = e[t])[0], i[1]);
                                        r.lineEnd()
                                    }
                                } else d > 1 && 2 & o && l.push(l.pop().concat(l.shift())), f.push(l.filter(Ar))
                        }
                        return l
                    }
                };

            function Ar(t) {
                return t.length > 1
            }

            function Cr(t, n) {
                return ((t = t.x)[0] < 0 ? t[1] - Ki - Qi : Ki - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Ki - Qi : Ki - n[1])
            }
            kr(function() {
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
                        var c = a > 0 ? Gi : -Gi,
                            o = ir(a - e);
                        ir(o - Gi) < Qi ? (t.point(e, i = (i + f) / 2 > 0 ? Ki : -Ki), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(c, i), t.point(a, i), n = 0) : r !== c && o >= Gi && (ir(e - r) < Qi && (e -= r * Qi), ir(a - c) < Qi && (a -= c * Qi), i = function(t, n, e, i) {
                            var r, a, f = ur(t - e);
                            return ir(f) > Qi ? rr((ur(n) * (a = fr(i)) * ur(e) - ur(i) * (r = fr(n)) * ur(t)) / (r * a * f)) : (n + i) / 2
                        }(e, i, a, f), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(c, i), n = 0), t.point(e = a, i = f), r = c
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
                if (null == t) r = e * Ki, i.point(-Gi, r), i.point(0, r), i.point(Gi, r), i.point(Gi, 0), i.point(Gi, -r), i.point(0, -r), i.point(-Gi, -r), i.point(-Gi, 0), i.point(-Gi, r);
                else if (ir(t[0] - n[0]) > Qi) {
                    var a = t[0] < n[0] ? Gi : -Gi;
                    r = e * a / 2, i.point(-a, r), i.point(0, r), i.point(a, r)
                } else i.point(n[0], n[1])
            }, [-Gi, -Ki]);
            Bi();
            Bi(), Bi();

            function Sr(t) {
                this._context = t
            }
            Sr.prototype = {
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
                            this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, nr)
                    }
                },
                result: _r
            };
            Bi();

            function Er() {
                this._string = []
            }

            function Ur(t) {
                return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
            }
            Er.prototype = {
                _radius: 4.5,
                _circle: Ur(4.5),
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
                            null == this._circle && (this._circle = Ur(this._radius)), this._string.push("M", t, ",", n, this._circle)
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

            function Lr(t) {
                return function(n) {
                    var e = new Pr;
                    for (var i in t) e[i] = t[i];
                    return e.stream = n, e
                }
            }

            function Pr() {}
            Pr.prototype = {
                constructor: Pr,
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
            fr(30 * er);
            Lr({
                point: function(t, n) {
                    this.stream.point(t * er, n * er)
                }
            });

            function Dr(t) {
                return function(n, e) {
                    var i = fr(n),
                        r = fr(e),
                        a = t(i * r);
                    return [a * r * ur(n), a * ur(e)]
                }
            }

            function Rr(t) {
                return function(n, e) {
                    var i = sr(n * n + e * e),
                        r = t(i),
                        a = ur(r),
                        f = fr(r);
                    return [ar(n * a, i * f), dr(i && e * a / i)]
                }
            }
            var Fr = Dr(function(t) {
                return sr(2 / (1 + t))
            });
            Fr.invert = Rr(function(t) {
                return 2 * dr(t / 2)
            });
            var Yr = Dr(function(t) {
                return (t = lr(t)) && t / ur(t)
            });
            Yr.invert = Rr(function(t) {
                return t
            });

            function qr(t, n) {
                return [t, or(hr((Ki + n) / 2))]
            }
            qr.invert = function(t, n) {
                return [t, 2 * rr(cr(n)) - Ki]
            };

            function zr(t, n) {
                return [t, n]
            }
            zr.invert = zr;
            var Hr = 1.340264,
                jr = -.081106,
                Or = 893e-6,
                Ir = .003796,
                $r = sr(3) / 2;

            function Xr(t, n) {
                var e = dr($r * ur(n)),
                    i = e * e,
                    r = i * i * i;
                return [t * fr(e) / ($r * (Hr + 3 * jr * i + r * (7 * Or + 9 * Ir * i))), e * (Hr + jr * i + r * (Or + Ir * i))]
            }
            Xr.invert = function(t, n) {
                for (var e, i = n, r = i * i, a = r * r * r, f = 0; f < 12 && (a = (r = (i -= e = (i * (Hr + jr * r + a * (Or + Ir * r)) - n) / (Hr + 3 * jr * r + a * (7 * Or + 9 * Ir * r))) * i) * r * r, !(ir(e) < 1e-12)); ++f);
                return [$r * t * (Hr + 3 * jr * r + a * (7 * Or + 9 * Ir * r)) / fr(i), dr(ur(i) / $r)]
            };

            function Vr(t, n) {
                var e = fr(n),
                    i = fr(t) * e;
                return [e * ur(t) / i, ur(n) / i]
            }
            Vr.invert = Rr(rr);

            function Br(t, n) {
                var e = n * n,
                    i = e * e;
                return [t * (.8707 - .131979 * e + i * (i * (.003971 * e - .001529 * i) - .013791)), n * (1.007226 + e * (.015085 + i * (.028874 * e - .044475 - .005916 * i)))]
            }
            Br.invert = function(t, n) {
                var e, i = n,
                    r = 25;
                do {
                    var a = i * i,
                        f = a * a;
                    i -= e = (i * (1.007226 + a * (.015085 + f * (.028874 * a - .044475 - .005916 * f))) - n) / (1.007226 + a * (.045255 + f * (.259866 * a - .311325 - .005916 * 11 * f)))
                } while (ir(e) > Qi && --r > 0);
                return [t / (.8707 + (a = i * i) * (a * (a * a * a * (.003971 - .001529 * a) - .013791) - .131979)), i]
            };

            function Zr(t, n) {
                return [fr(n) * ur(t), ur(n)]
            }
            Zr.invert = Rr(dr);

            function Wr(t, n) {
                var e = fr(n),
                    i = 1 + fr(t) * e;
                return [e * ur(t) / i, ur(n) / i]
            }
            Wr.invert = Rr(function(t) {
                return 2 * rr(t)
            });

            function Jr(t, n) {
                return [or(hr((Ki + n) / 2)), -t]
            }
            Jr.invert = function(t, n) {
                return [-n, 2 * rr(cr(t)) - Ki]
            };

            function Qr(t) {
                var n = 0,
                    e = t.children,
                    i = e && e.length;
                if (i)
                    for (; --i >= 0;) n += e[i].value;
                else n = 1;
                t.value = n
            }

            function Gr(t, n) {
                var e, i, r, a, f, c = new ea(t),
                    o = +t.value && (c.value = t.value),
                    u = [c];
                for (null == n && (n = Kr); e = u.pop();)
                    if (o && (e.value = +e.data.value), (r = n(e.data)) && (f = r.length))
                        for (e.children = new Array(f), a = f - 1; a >= 0; --a) u.push(i = e.children[a] = new ea(r[a])), i.parent = e, i.depth = e.depth + 1;
                return c.eachBefore(na)
            }

            function Kr(t) {
                return t.children
            }

            function ta(t) {
                t.data = t.data.data
            }

            function na(t) {
                var n = 0;
                do {
                    t.height = n
                } while ((t = t.parent) && t.height < ++n)
            }

            function ea(t) {
                this.data = t, this.depth = this.height = 0, this.parent = null
            }
            ea.prototype = Gr.prototype = {
                constructor: ea,
                count: function() {
                    return this.eachAfter(Qr)
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
                    return Gr(this).eachBefore(ta)
                }
            };
            Array.prototype.slice;

            function ia(t) {
                if ("function" != typeof t) throw new Error;
                return t
            }

            function ra() {
                return 0
            }
            var aa = function(t) {
                return function() {
                    return t
                }
            };
            var fa = function(t) {
                    t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
                },
                ca = function(t, n, e, i, r) {
                    for (var a, f = t.children, c = -1, o = f.length, u = t.value && (i - n) / t.value; ++c < o;)(a = f[c]).y0 = e, a.y1 = r, a.x0 = n, a.x1 = n += a.value * u
                };

            function oa(t, n) {
                this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
            }
            oa.prototype = Object.create(ea.prototype);
            var ua = function(t, n, e, i, r) {
                    for (var a, f = t.children, c = -1, o = f.length, u = t.value && (r - e) / t.value; ++c < o;)(a = f[c]).x0 = n, a.x1 = i, a.y0 = e, a.y1 = e += a.value * u
                },
                sa = (1 + Math.sqrt(5)) / 2;

            function ha(t, n, e, i, r, a) {
                for (var f, c, o, u, s, h, l, d, _, b, p, y = [], v = n.children, g = 0, x = 0, m = v.length, w = n.value; g < m;) {
                    o = r - e, u = a - i;
                    do {
                        s = v[x++].value
                    } while (!s && x < m);
                    for (h = l = s, p = s * s * (b = Math.max(u / o, o / u) / (w * t)), _ = Math.max(l / p, p / h); x < m; ++x) {
                        if (s += c = v[x].value, c < h && (h = c), c > l && (l = c), p = s * s * b, (d = Math.max(l / p, p / h)) > _) {
                            s -= c;
                            break
                        }
                        _ = d
                    }
                    y.push(f = {
                        value: s,
                        dice: o < u,
                        children: v.slice(g, x)
                    }), f.dice ? ca(f, e, i, r, w ? i += u * s / w : a) : ua(f, e, i, w ? e += o * s / w : r, a), w -= s, g = x
                }
                return y
            }
            var la = function t(n) {
                    function e(t, e, i, r, a) {
                        ha(n, t, e, i, r, a)
                    }
                    return e.ratio = function(n) {
                        return t((n = +n) > 1 ? n : 1)
                    }, e
                }(sa),
                da = function() {
                    var t = la,
                        n = !1,
                        e = 1,
                        i = 1,
                        r = [0],
                        a = ra,
                        f = ra,
                        c = ra,
                        o = ra,
                        u = ra;

                    function s(t) {
                        return t.x0 = t.y0 = 0, t.x1 = e, t.y1 = i, t.eachBefore(h), r = [0], n && t.eachBefore(fa), t
                    }

                    function h(n) {
                        var e = r[n.depth],
                            i = n.x0 + e,
                            s = n.y0 + e,
                            h = n.x1 - e,
                            l = n.y1 - e;
                        h < i && (i = h = (i + h) / 2), l < s && (s = l = (s + l) / 2), n.x0 = i, n.y0 = s, n.x1 = h, n.y1 = l, n.children && (e = r[n.depth + 1] = a(n) / 2, i += u(n) - e, s += f(n) - e, (h -= c(n) - e) < i && (i = h = (i + h) / 2), (l -= o(n) - e) < s && (s = l = (s + l) / 2), t(n, i, s, h, l))
                    }
                    return s.round = function(t) {
                        return arguments.length ? (n = !!t, s) : n
                    }, s.size = function(t) {
                        return arguments.length ? (e = +t[0], i = +t[1], s) : [e, i]
                    }, s.tile = function(n) {
                        return arguments.length ? (t = ia(n), s) : t
                    }, s.padding = function(t) {
                        return arguments.length ? s.paddingInner(t).paddingOuter(t) : s.paddingInner()
                    }, s.paddingInner = function(t) {
                        return arguments.length ? (a = "function" == typeof t ? t : aa(+t), s) : a
                    }, s.paddingOuter = function(t) {
                        return arguments.length ? s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : s.paddingTop()
                    }, s.paddingTop = function(t) {
                        return arguments.length ? (f = "function" == typeof t ? t : aa(+t), s) : f
                    }, s.paddingRight = function(t) {
                        return arguments.length ? (c = "function" == typeof t ? t : aa(+t), s) : c
                    }, s.paddingBottom = function(t) {
                        return arguments.length ? (o = "function" == typeof t ? t : aa(+t), s) : o
                    }, s.paddingLeft = function(t) {
                        return arguments.length ? (u = "function" == typeof t ? t : aa(+t), s) : u
                    }, s
                },
                _a = function t(n) {
                    function e(t, e, i, r, a) {
                        if ((f = t._squarify) && f.ratio === n)
                            for (var f, c, o, u, s, h = -1, l = f.length, d = t.value; ++h < l;) {
                                for (o = (c = f[h]).children, u = c.value = 0, s = o.length; u < s; ++u) c.value += o[u].value;
                                c.dice ? ca(c, e, i, r, i += (a - i) * c.value / d) : ua(c, e, i, e += (r - e) * c.value / d, a), d -= c.value
                            } else t._squarify = f = ha(n, t, e, i, r, a), f.ratio = n
                    }
                    return e.ratio = function(n) {
                        return t((n = +n) > 1 ? n : 1)
                    }, e
                }(sa);
            var ba = function() {
                    return Math.random()
                },
                pa = (function t(n) {
                    function e(t, e) {
                        return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t,
                            function() {
                                return n() * e + t
                            }
                    }
                    return e.source = t, e
                }(ba), function t(n) {
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
                }(ba)),
                ya = (function t(n) {
                    function e() {
                        var t = pa.source(n).apply(this, arguments);
                        return function() {
                            return Math.exp(t())
                        }
                    }
                    return e.source = t, e
                }(ba), function t(n) {
                    function e(t) {
                        return function() {
                            for (var e = 0, i = 0; i < t; ++i) e += n();
                            return e
                        }
                    }
                    return e.source = t, e
                }(ba)),
                va = (function t(n) {
                    function e(t) {
                        var e = ya.source(n)(t);
                        return function() {
                            return e() / t
                        }
                    }
                    return e.source = t, e
                }(ba), function t(n) {
                    function e(t) {
                        return function() {
                            return -Math.log(1 - n()) / t
                        }
                    }
                    return e.source = t, e
                }(ba), Array.prototype),
                ga = va.map,
                xa = va.slice;
            var ma = function(t) {
                    return function() {
                        return t
                    }
                },
                wa = function(t) {
                    return +t
                },
                Ma = [0, 1];

            function Na(t, n) {
                return (n -= t = +t) ? function(e) {
                    return (e - t) / n
                } : ma(n)
            }

            function Ta(t, n, e, i) {
                var r = t[0],
                    a = t[1],
                    f = n[0],
                    c = n[1];
                return a < r ? (r = e(a, r), f = i(c, f)) : (r = e(r, a), f = i(f, c)),
                    function(t) {
                        return f(r(t))
                    }
            }

            function ka(t, n, e, i) {
                var r = Math.min(t.length, n.length) - 1,
                    a = new Array(r),
                    f = new Array(r),
                    o = -1;
                for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r;) a[o] = e(t[o], t[o + 1]), f[o] = i(n[o], n[o + 1]);
                return function(n) {
                    var e = c(t, n, 1, r) - 1;
                    return f[e](a[e](n))
                }
            }

            function Aa(t, n) {
                return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
            }

            function Ca(t, n) {
                var e, i, r, a = Ma,
                    f = Ma,
                    c = Bn,
                    o = !1;

                function u() {
                    return e = Math.min(a.length, f.length) > 2 ? ka : Ta, i = r = null, s
                }

                function s(n) {
                    return (i || (i = e(a, f, o ? function(t) {
                        return function(n, e) {
                            var i = t(n = +n, e = +e);
                            return function(t) {
                                return t <= n ? 0 : t >= e ? 1 : i(t)
                            }
                        }
                    }(t) : t, c)))(+n)
                }
                return s.invert = function(t) {
                    return (r || (r = e(f, a, Na, o ? function(t) {
                        return function(n, e) {
                            var i = t(n = +n, e = +e);
                            return function(t) {
                                return t <= 0 ? n : t >= 1 ? e : i(t)
                            }
                        }
                    }(n) : n)))(+t)
                }, s.domain = function(t) {
                    return arguments.length ? (a = ga.call(t, wa), u()) : a.slice()
                }, s.range = function(t) {
                    return arguments.length ? (f = xa.call(t), u()) : f.slice()
                }, s.rangeRound = function(t) {
                    return f = xa.call(t), c = Zn, u()
                }, s.clamp = function(t) {
                    return arguments.length ? (o = !!t, u()) : o
                }, s.interpolate = function(t) {
                    return arguments.length ? (c = t, u()) : c
                }, u()
            }
            var Sa = function(t, n, e) {
                var i, r = t[0],
                    a = t[t.length - 1],
                    f = b(r, a, null == n ? 10 : n);
                switch ((e = Fi(null == e ? ",f" : e)).type) {
                    case "s":
                        var c = Math.max(Math.abs(r), Math.abs(a));
                        return null != e.precision || isNaN(i = function(t, n) {
                            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Di(n) / 3))) - Di(Math.abs(t)))
                        }(f, c)) || (e.precision = i), ji(e, c);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != e.precision || isNaN(i = function(t, n) {
                            return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Di(n) - Di(t)) + 1
                        }(f, Math.max(Math.abs(r), Math.abs(a)))) || (e.precision = i - ("e" === e.type));
                        break;
                    case "f":
                    case "%":
                        null != e.precision || isNaN(i = function(t) {
                            return Math.max(0, -Di(Math.abs(t)))
                        }(f)) || (e.precision = i - 2 * ("%" === e.type))
                }
                return Hi(e)
            };

            function Ea(t) {
                var n = t.domain;
                return t.ticks = function(t) {
                    var e = n();
                    return d(e[0], e[e.length - 1], null == t ? 10 : t)
                }, t.tickFormat = function(t, e) {
                    return Sa(n(), t, e)
                }, t.nice = function(e) {
                    null == e && (e = 10);
                    var i, r = n(),
                        a = 0,
                        f = r.length - 1,
                        c = r[a],
                        o = r[f];
                    return o < c && (i = c, c = o, o = i, i = a, a = f, f = i), (i = _(c, o, e)) > 0 ? i = _(c = Math.floor(c / i) * i, o = Math.ceil(o / i) * i, e) : i < 0 && (i = _(c = Math.ceil(c * i) / i, o = Math.floor(o * i) / i, e)), i > 0 ? (r[a] = Math.floor(c / i) * i, r[f] = Math.ceil(o / i) * i, n(r)) : i < 0 && (r[a] = Math.ceil(c * i) / i, r[f] = Math.floor(o * i) / i, n(r)), t
                }, t
            }

            function Ua() {
                var t = Ca(Na, zn);
                return t.copy = function() {
                    return Aa(t, Ua())
                }, Ea(t)
            }
            var La = new Date,
                Pa = new Date;

            function Da(t, n, e, i) {
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
                    var f, c = [];
                    if (e = r.ceil(e), a = null == a ? 1 : Math.floor(a), !(e < i && a > 0)) return c;
                    do {
                        c.push(f = new Date(+e)), n(e, a), t(e)
                    } while (f < e && e < i);
                    return c
                }, r.filter = function(e) {
                    return Da(function(n) {
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
                    return La.setTime(+n), Pa.setTime(+i), t(La), t(Pa), Math.floor(e(La, Pa))
                }, r.every = function(t) {
                    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? r.filter(i ? function(n) {
                        return i(n) % t == 0
                    } : function(n) {
                        return r.count(0, n) % t == 0
                    }) : r : null
                }), r
            }
            var Ra = Da(function() {}, function(t, n) {
                t.setTime(+t + n)
            }, function(t, n) {
                return n - t
            });
            Ra.every = function(t) {
                return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Da(function(n) {
                    n.setTime(Math.floor(n / t) * t)
                }, function(n, e) {
                    n.setTime(+n + e * t)
                }, function(n, e) {
                    return (e - n) / t
                }) : Ra : null
            };
            Ra.range;
            var Fa = 6e4,
                Ya = 6048e5,
                qa = Da(function(t) {
                    t.setTime(1e3 * Math.floor(t / 1e3))
                }, function(t, n) {
                    t.setTime(+t + 1e3 * n)
                }, function(t, n) {
                    return (n - t) / 1e3
                }, function(t) {
                    return t.getUTCSeconds()
                }),
                za = (qa.range, Da(function(t) {
                    t.setTime(Math.floor(t / Fa) * Fa)
                }, function(t, n) {
                    t.setTime(+t + n * Fa)
                }, function(t, n) {
                    return (n - t) / Fa
                }, function(t) {
                    return t.getMinutes()
                })),
                Ha = (za.range, Da(function(t) {
                    var n = t.getTimezoneOffset() * Fa % 36e5;
                    n < 0 && (n += 36e5), t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n)
                }, function(t, n) {
                    t.setTime(+t + 36e5 * n)
                }, function(t, n) {
                    return (n - t) / 36e5
                }, function(t) {
                    return t.getHours()
                })),
                ja = (Ha.range, Da(function(t) {
                    t.setHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setDate(t.getDate() + n)
                }, function(t, n) {
                    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Fa) / 864e5
                }, function(t) {
                    return t.getDate() - 1
                })),
                Oa = ja;
            ja.range;

            function Ia(t) {
                return Da(function(n) {
                    n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setDate(t.getDate() + 7 * n)
                }, function(t, n) {
                    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Fa) / Ya
                })
            }
            var $a = Ia(0),
                Xa = Ia(1),
                Va = Ia(2),
                Ba = Ia(3),
                Za = Ia(4),
                Wa = Ia(5),
                Ja = Ia(6),
                Qa = ($a.range, Xa.range, Va.range, Ba.range, Za.range, Wa.range, Ja.range, Da(function(t) {
                    t.setDate(1), t.setHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setMonth(t.getMonth() + n)
                }, function(t, n) {
                    return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
                }, function(t) {
                    return t.getMonth()
                })),
                Ga = (Qa.range, Da(function(t) {
                    t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setFullYear(t.getFullYear() + n)
                }, function(t, n) {
                    return n.getFullYear() - t.getFullYear()
                }, function(t) {
                    return t.getFullYear()
                }));
            Ga.every = function(t) {
                return isFinite(t = Math.floor(t)) && t > 0 ? Da(function(n) {
                    n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
                }, function(n, e) {
                    n.setFullYear(n.getFullYear() + e * t)
                }) : null
            };
            var Ka = Ga,
                tf = (Ga.range, Da(function(t) {
                    t.setUTCSeconds(0, 0)
                }, function(t, n) {
                    t.setTime(+t + n * Fa)
                }, function(t, n) {
                    return (n - t) / Fa
                }, function(t) {
                    return t.getUTCMinutes()
                })),
                nf = (tf.range, Da(function(t) {
                    t.setUTCMinutes(0, 0, 0)
                }, function(t, n) {
                    t.setTime(+t + 36e5 * n)
                }, function(t, n) {
                    return (n - t) / 36e5
                }, function(t) {
                    return t.getUTCHours()
                })),
                ef = (nf.range, Da(function(t) {
                    t.setUTCHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setUTCDate(t.getUTCDate() + n)
                }, function(t, n) {
                    return (n - t) / 864e5
                }, function(t) {
                    return t.getUTCDate() - 1
                })),
                rf = ef;
            ef.range;

            function af(t) {
                return Da(function(n) {
                    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setUTCDate(t.getUTCDate() + 7 * n)
                }, function(t, n) {
                    return (n - t) / Ya
                })
            }
            var ff = af(0),
                cf = af(1),
                of = af(2),
                uf = af(3),
                sf = af(4),
                hf = af(5),
                lf = af(6),
                df = (ff.range, cf.range, of .range, uf.range, sf.range, hf.range, lf.range, Da(function(t) {
                    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setUTCMonth(t.getUTCMonth() + n)
                }, function(t, n) {
                    return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
                }, function(t) {
                    return t.getUTCMonth()
                })),
                _f = (df.range, Da(function(t) {
                    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
                }, function(t, n) {
                    t.setUTCFullYear(t.getUTCFullYear() + n)
                }, function(t, n) {
                    return n.getUTCFullYear() - t.getUTCFullYear()
                }, function(t) {
                    return t.getUTCFullYear()
                }));
            _f.every = function(t) {
                return isFinite(t = Math.floor(t)) && t > 0 ? Da(function(n) {
                    n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
                }, function(n, e) {
                    n.setUTCFullYear(n.getUTCFullYear() + e * t)
                }) : null
            };
            var bf = _f;
            _f.range;

            function pf(t) {
                if (0 <= t.y && t.y < 100) {
                    var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                    return n.setFullYear(t.y), n
                }
                return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
            }

            function yf(t) {
                if (0 <= t.y && t.y < 100) {
                    var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                    return n.setUTCFullYear(t.y), n
                }
                return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
            }

            function vf(t) {
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
            var gf, xf, mf, wf = {
                    "-": "",
                    _: " ",
                    0: "0"
                },
                Mf = /^\s*\d+/,
                Nf = /^%/,
                Tf = /[\\^$*+?|[\]().{}]/g;

            function kf(t, n, e) {
                var i = t < 0 ? "-" : "",
                    r = (i ? -t : t) + "",
                    a = r.length;
                return i + (a < e ? new Array(e - a + 1).join(n) + r : r)
            }

            function Af(t) {
                return t.replace(Tf, "\\$&")
            }

            function Cf(t) {
                return new RegExp("^(?:" + t.map(Af).join("|") + ")", "i")
            }

            function Sf(t) {
                for (var n = {}, e = -1, i = t.length; ++e < i;) n[t[e].toLowerCase()] = e;
                return n
            }

            function Ef(t, n, e) {
                var i = Mf.exec(n.slice(e, e + 1));
                return i ? (t.w = +i[0], e + i[0].length) : -1
            }

            function Uf(t, n, e) {
                var i = Mf.exec(n.slice(e, e + 1));
                return i ? (t.u = +i[0], e + i[0].length) : -1
            }

            function Lf(t, n, e) {
                var i = Mf.exec(n.slice(e, e + 2));
                return i ? (t.U = +i[0], e + i[0].length) : -1
            }

            function Pf(t, n, e) {
                var i = Mf.exec(n.slice(e, e + 2));
                return i ? (t.V = +i[0], e + i[0].length) : -1
            }

            function Df(t, n, e) {
                var i = Mf.exec(n.slice(e, e + 2));
                return i ? (t.W = +i[0], e + i[0].length) : -1
            }

            function Rf(t, n, e) {
                var i = Mf.exec(n.slice(e, e + 4));
                return i ? (t.y = +i[0], e + i[0].length) : -1
            }

            function Ff(t, n, e) {
                var i = Mf.exec(n.slice(e, e + 2));
                return i ? (t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), e + i[0].length) : -1
            }

            function Yf(t, n, e) {
                var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
                return i ? (t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), e + i[0].length) : -1
            }

            function qf(t, n, e) {
                var i = Mf.exec(n.slice(e, e + 2));
                return i ? (t.m = i[0] - 1, e + i[0].length) : -1
            }

            function zf(t, n, e) {
                var i = Mf.exec(n.slice(e, e + 2));
                return i ? (t.d = +i[0], e + i[0].length) : -1
            }

            function Hf(t, n, e) {
                var i = Mf.exec(n.slice(e, e + 3));
                return i ? (t.m = 0, t.d = +i[0], e + i[0].length) : -1
            }

            function jf(t, n, e) {
                var i = Mf.exec(n.slice(e, e + 2));
                return i ? (t.H = +i[0], e + i[0].length) : -1
            }

            function Of(t, n, e) {
                var i = Mf.exec(n.slice(e, e + 2));
                return i ? (t.M = +i[0], e + i[0].length) : -1
            }

            function If(t, n, e) {
                var i = Mf.exec(n.slice(e, e + 2));
                return i ? (t.S = +i[0], e + i[0].length) : -1
            }

            function $f(t, n, e) {
                var i = Mf.exec(n.slice(e, e + 3));
                return i ? (t.L = +i[0], e + i[0].length) : -1
            }

            function Xf(t, n, e) {
                var i = Mf.exec(n.slice(e, e + 6));
                return i ? (t.L = Math.floor(i[0] / 1e3), e + i[0].length) : -1
            }

            function Vf(t, n, e) {
                var i = Nf.exec(n.slice(e, e + 1));
                return i ? e + i[0].length : -1
            }

            function Bf(t, n, e) {
                var i = Mf.exec(n.slice(e));
                return i ? (t.Q = +i[0], e + i[0].length) : -1
            }

            function Zf(t, n, e) {
                var i = Mf.exec(n.slice(e));
                return i ? (t.Q = 1e3 * +i[0], e + i[0].length) : -1
            }

            function Wf(t, n) {
                return kf(t.getDate(), n, 2)
            }

            function Jf(t, n) {
                return kf(t.getHours(), n, 2)
            }

            function Qf(t, n) {
                return kf(t.getHours() % 12 || 12, n, 2)
            }

            function Gf(t, n) {
                return kf(1 + Oa.count(Ka(t), t), n, 3)
            }

            function Kf(t, n) {
                return kf(t.getMilliseconds(), n, 3)
            }

            function tc(t, n) {
                return Kf(t, n) + "000"
            }

            function nc(t, n) {
                return kf(t.getMonth() + 1, n, 2)
            }

            function ec(t, n) {
                return kf(t.getMinutes(), n, 2)
            }

            function ic(t, n) {
                return kf(t.getSeconds(), n, 2)
            }

            function rc(t) {
                var n = t.getDay();
                return 0 === n ? 7 : n
            }

            function ac(t, n) {
                return kf($a.count(Ka(t), t), n, 2)
            }

            function fc(t, n) {
                var e = t.getDay();
                return t = e >= 4 || 0 === e ? Za(t) : Za.ceil(t), kf(Za.count(Ka(t), t) + (4 === Ka(t).getDay()), n, 2)
            }

            function cc(t) {
                return t.getDay()
            }

            function oc(t, n) {
                return kf(Xa.count(Ka(t), t), n, 2)
            }

            function uc(t, n) {
                return kf(t.getFullYear() % 100, n, 2)
            }

            function sc(t, n) {
                return kf(t.getFullYear() % 1e4, n, 4)
            }

            function hc(t) {
                var n = t.getTimezoneOffset();
                return (n > 0 ? "-" : (n *= -1, "+")) + kf(n / 60 | 0, "0", 2) + kf(n % 60, "0", 2)
            }

            function lc(t, n) {
                return kf(t.getUTCDate(), n, 2)
            }

            function dc(t, n) {
                return kf(t.getUTCHours(), n, 2)
            }

            function _c(t, n) {
                return kf(t.getUTCHours() % 12 || 12, n, 2)
            }

            function bc(t, n) {
                return kf(1 + rf.count(bf(t), t), n, 3)
            }

            function pc(t, n) {
                return kf(t.getUTCMilliseconds(), n, 3)
            }

            function yc(t, n) {
                return pc(t, n) + "000"
            }

            function vc(t, n) {
                return kf(t.getUTCMonth() + 1, n, 2)
            }

            function gc(t, n) {
                return kf(t.getUTCMinutes(), n, 2)
            }

            function xc(t, n) {
                return kf(t.getUTCSeconds(), n, 2)
            }

            function mc(t) {
                var n = t.getUTCDay();
                return 0 === n ? 7 : n
            }

            function wc(t, n) {
                return kf(ff.count(bf(t), t), n, 2)
            }

            function Mc(t, n) {
                var e = t.getUTCDay();
                return t = e >= 4 || 0 === e ? sf(t) : sf.ceil(t), kf(sf.count(bf(t), t) + (4 === bf(t).getUTCDay()), n, 2)
            }

            function Nc(t) {
                return t.getUTCDay()
            }

            function Tc(t, n) {
                return kf(cf.count(bf(t), t), n, 2)
            }

            function kc(t, n) {
                return kf(t.getUTCFullYear() % 100, n, 2)
            }

            function Ac(t, n) {
                return kf(t.getUTCFullYear() % 1e4, n, 4)
            }

            function Cc() {
                return "+0000"
            }

            function Sc() {
                return "%"
            }

            function Ec(t) {
                return +t
            }

            function Uc(t) {
                return Math.floor(+t / 1e3)
            }! function(t) {
                gf = function(t) {
                    var n = t.dateTime,
                        e = t.date,
                        i = t.time,
                        r = t.periods,
                        a = t.days,
                        f = t.shortDays,
                        c = t.months,
                        o = t.shortMonths,
                        u = Cf(r),
                        s = Sf(r),
                        h = Cf(a),
                        l = Sf(a),
                        d = Cf(f),
                        _ = Sf(f),
                        b = Cf(c),
                        p = Sf(c),
                        y = Cf(o),
                        v = Sf(o),
                        g = {
                            a: function(t) {
                                return f[t.getDay()]
                            },
                            A: function(t) {
                                return a[t.getDay()]
                            },
                            b: function(t) {
                                return o[t.getMonth()]
                            },
                            B: function(t) {
                                return c[t.getMonth()]
                            },
                            c: null,
                            d: Wf,
                            e: Wf,
                            f: tc,
                            H: Jf,
                            I: Qf,
                            j: Gf,
                            L: Kf,
                            m: nc,
                            M: ec,
                            p: function(t) {
                                return r[+(t.getHours() >= 12)]
                            },
                            Q: Ec,
                            s: Uc,
                            S: ic,
                            u: rc,
                            U: ac,
                            V: fc,
                            w: cc,
                            W: oc,
                            x: null,
                            X: null,
                            y: uc,
                            Y: sc,
                            Z: hc,
                            "%": Sc
                        },
                        x = {
                            a: function(t) {
                                return f[t.getUTCDay()]
                            },
                            A: function(t) {
                                return a[t.getUTCDay()]
                            },
                            b: function(t) {
                                return o[t.getUTCMonth()]
                            },
                            B: function(t) {
                                return c[t.getUTCMonth()]
                            },
                            c: null,
                            d: lc,
                            e: lc,
                            f: yc,
                            H: dc,
                            I: _c,
                            j: bc,
                            L: pc,
                            m: vc,
                            M: gc,
                            p: function(t) {
                                return r[+(t.getUTCHours() >= 12)]
                            },
                            Q: Ec,
                            s: Uc,
                            S: xc,
                            u: mc,
                            U: wc,
                            V: Mc,
                            w: Nc,
                            W: Tc,
                            x: null,
                            X: null,
                            y: kc,
                            Y: Ac,
                            Z: Cc,
                            "%": Sc
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
                            d: zf,
                            e: zf,
                            f: Xf,
                            H: jf,
                            I: jf,
                            j: Hf,
                            L: $f,
                            m: qf,
                            M: Of,
                            p: function(t, n, e) {
                                var i = u.exec(n.slice(e));
                                return i ? (t.p = s[i[0].toLowerCase()], e + i[0].length) : -1
                            },
                            Q: Bf,
                            s: Zf,
                            S: If,
                            u: Uf,
                            U: Lf,
                            V: Pf,
                            w: Ef,
                            W: Df,
                            x: function(t, n, i) {
                                return N(t, e, n, i)
                            },
                            X: function(t, n, e) {
                                return N(t, i, n, e)
                            },
                            y: Ff,
                            Y: Rf,
                            Z: Yf,
                            "%": Vf
                        };

                    function w(t, n) {
                        return function(e) {
                            var i, r, a, f = [],
                                c = -1,
                                o = 0,
                                u = t.length;
                            for (e instanceof Date || (e = new Date(+e)); ++c < u;) 37 === t.charCodeAt(c) && (f.push(t.slice(o, c)), null != (r = wf[i = t.charAt(++c)]) ? i = t.charAt(++c) : r = "e" === i ? " " : "0", (a = n[i]) && (i = a(e, r)), f.push(i), o = c + 1);
                            return f.push(t.slice(o, c)), f.join("")
                        }
                    }

                    function M(t, n) {
                        return function(e) {
                            var i, r, a = vf(1900);
                            if (N(a, t, e += "", 0) != e.length) return null;
                            if ("Q" in a) return new Date(a.Q);
                            if ("p" in a && (a.H = a.H % 12 + 12 * a.p), "V" in a) {
                                if (a.V < 1 || a.V > 53) return null;
                                "w" in a || (a.w = 1), "Z" in a ? (r = (i = yf(vf(a.y))).getUTCDay(), i = r > 4 || 0 === r ? cf.ceil(i) : cf(i), i = rf.offset(i, 7 * (a.V - 1)), a.y = i.getUTCFullYear(), a.m = i.getUTCMonth(), a.d = i.getUTCDate() + (a.w + 6) % 7) : (r = (i = n(vf(a.y))).getDay(), i = r > 4 || 0 === r ? Xa.ceil(i) : Xa(i), i = Oa.offset(i, 7 * (a.V - 1)), a.y = i.getFullYear(), a.m = i.getMonth(), a.d = i.getDate() + (a.w + 6) % 7)
                            } else("W" in a || "U" in a) && ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0), r = "Z" in a ? yf(vf(a.y)).getUTCDay() : n(vf(a.y)).getDay(), a.m = 0, a.d = "W" in a ? (a.w + 6) % 7 + 7 * a.W - (r + 5) % 7 : a.w + 7 * a.U - (r + 6) % 7);
                            return "Z" in a ? (a.H += a.Z / 100 | 0, a.M += a.Z % 100, yf(a)) : n(a)
                        }
                    }

                    function N(t, n, e, i) {
                        for (var r, a, f = 0, c = n.length, o = e.length; f < c;) {
                            if (i >= o) return -1;
                            if (37 === (r = n.charCodeAt(f++))) {
                                if (r = n.charAt(f++), !(a = m[r in wf ? n.charAt(f++) : r]) || (i = a(t, e, i)) < 0) return -1
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
                            var n = M(t += "", pf);
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
                            var n = M(t, yf);
                            return n.toString = function() {
                                return t
                            }, n
                        }
                    }
                }(t), gf.format, gf.parse, xf = gf.utcFormat, mf = gf.utcParse
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
            Date.prototype.toISOString || xf("%Y-%m-%dT%H:%M:%S.%LZ"); + new Date("2000-01-01T00:00:00.000Z") || mf("%Y-%m-%dT%H:%M:%S.%LZ");
            var Lc = function(t) {
                    for (var n = t.length / 6 | 0, e = new Array(n), i = 0; i < n;) e[i] = "#" + t.slice(6 * i, 6 * ++i);
                    return e
                },
                Pc = Lc("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
                Dc = (Lc("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Lc("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), Lc("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Lc("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Lc("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Lc("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), Lc("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), Lc("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), function(t) {
                    return qn(t[t.length - 1])
                });
            Dc(new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Lc)), Dc(new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Lc)), Dc(new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Lc)), Dc(new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Lc)), Dc(new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Lc)), Dc(new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Lc)), Dc(new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Lc)), Dc(new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Lc)), Dc(new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Lc)), Dc(new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Lc)), Dc(new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Lc)), Dc(new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Lc)), Dc(new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Lc)), Dc(new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Lc)), Dc(new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Lc)), Dc(new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Lc)), Dc(new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Lc)), Dc(new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Lc)), Dc(new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Lc)), Dc(new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Lc)), Dc(new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Lc)), Dc(new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Lc)), Dc(new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Lc)), Dc(new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Lc)), Dc(new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Lc)), Dc(new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Lc)), Dc(new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Lc)), re(Cn(300, .5, 0), Cn(-240, .5, 1)), re(Cn(-100, .75, .35), Cn(80, 1.5, .8)), re(Cn(260, .75, .35), Cn(80, 1.5, .8)), Cn(), Wt(), Math.PI, Math.PI;

            function Rc(t) {
                var n = t.length;
                return function(e) {
                    return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
                }
            }
            Rc(Lc("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), Rc(Lc("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), Rc(Lc("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), Rc(Lc("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
            var Fc = function(t) {
                    return function() {
                        return t
                    }
                },
                Yc = (Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin, Math.sqrt, 1e-12),
                qc = Math.PI,
                zc = 2 * qc;

            function Hc(t) {
                this._context = t
            }
            Hc.prototype = {
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
            var jc = function(t) {
                return new Hc(t)
            };

            function Oc(t) {
                return t[0]
            }

            function Ic(t) {
                return t[1]
            }
            var $c = function() {
                var t = Oc,
                    n = Ic,
                    e = Fc(!0),
                    i = null,
                    r = jc,
                    a = null;

                function f(f) {
                    var c, o, u, s = f.length,
                        h = !1;
                    for (null == i && (a = r(u = ni())), c = 0; c <= s; ++c) !(c < s && e(o = f[c], c, f)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+t(o, c, f), +n(o, c, f));
                    if (u) return a = null, u + "" || null
                }
                return f.x = function(n) {
                    return arguments.length ? (t = "function" == typeof n ? n : Fc(+n), f) : t
                }, f.y = function(t) {
                    return arguments.length ? (n = "function" == typeof t ? t : Fc(+t), f) : n
                }, f.defined = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : Fc(!!t), f) : e
                }, f.curve = function(t) {
                    return arguments.length ? (r = t, null != i && (a = r(i)), f) : r
                }, f.context = function(t) {
                    return arguments.length ? (null == t ? i = a = null : a = r(i = t), f) : i
                }, f
            };
            Vc(jc);

            function Xc(t) {
                this._curve = t
            }

            function Vc(t) {
                function n(n) {
                    return new Xc(t(n))
                }
                return n._curve = t, n
            }
            Xc.prototype = {
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
            var Bc = Math.sin(qc / 10) / Math.sin(7 * qc / 10),
                Zc = (Math.sin(zc / 10), Math.cos(zc / 10), Math.sqrt(3), Math.sqrt(3), Math.sqrt(12), function() {});

            function Wc(t, n, e) {
                t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
            }

            function Jc(t) {
                this._context = t
            }
            Jc.prototype = {
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
                            Wc(this, this._x1, this._y1);
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
                            Wc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };

            function Qc(t) {
                this._context = t
            }
            Qc.prototype = {
                areaStart: Zc,
                areaEnd: Zc,
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
                            Wc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };

            function Gc(t) {
                this._context = t
            }
            Gc.prototype = {
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
                            Wc(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };

            function Kc(t, n) {
                this._basis = new Jc(t), this._beta = n
            }
            Kc.prototype = {
                lineStart: function() {
                    this._x = [], this._y = [], this._basis.lineStart()
                },
                lineEnd: function() {
                    var t = this._x,
                        n = this._y,
                        e = t.length - 1;
                    if (e > 0)
                        for (var i, r = t[0], a = n[0], f = t[e] - r, c = n[e] - a, o = -1; ++o <= e;) i = o / e, this._basis.point(this._beta * t[o] + (1 - this._beta) * (r + i * f), this._beta * n[o] + (1 - this._beta) * (a + i * c));
                    this._x = this._y = null, this._basis.lineEnd()
                },
                point: function(t, n) {
                    this._x.push(+t), this._y.push(+n)
                }
            };
            (function t(n) {
                function e(t) {
                    return 1 === n ? new Jc(t) : new Kc(t, n)
                }
                return e.beta = function(n) {
                    return t(+n)
                }, e
            })(.85);

            function to(t, n, e) {
                t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
            }

            function no(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }
            no.prototype = {
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
                            to(this, this._x1, this._y1)
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
                            to(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return new no(t, n)
                }
                return e.tension = function(n) {
                    return t(+n)
                }, e
            })(0);

            function eo(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }
            eo.prototype = {
                areaStart: Zc,
                areaEnd: Zc,
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
                            to(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return new eo(t, n)
                }
                return e.tension = function(n) {
                    return t(+n)
                }, e
            })(0);

            function io(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }
            io.prototype = {
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
                            to(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return new io(t, n)
                }
                return e.tension = function(n) {
                    return t(+n)
                }, e
            })(0);

            function ro(t, n, e) {
                var i = t._x1,
                    r = t._y1,
                    a = t._x2,
                    f = t._y2;
                if (t._l01_a > Yc) {
                    var c = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                        o = 3 * t._l01_a * (t._l01_a + t._l12_a);
                    i = (i * c - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / o, r = (r * c - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / o
                }
                if (t._l23_a > Yc) {
                    var u = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                        s = 3 * t._l23_a * (t._l23_a + t._l12_a);
                    a = (a * u + t._x1 * t._l23_2a - n * t._l12_2a) / s, f = (f * u + t._y1 * t._l23_2a - e * t._l12_2a) / s
                }
                t._context.bezierCurveTo(i, r, a, f, t._x2, t._y2)
            }

            function ao(t, n) {
                this._context = t, this._alpha = n
            }
            ao.prototype = {
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
                            ro(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return n ? new ao(t, n) : new no(t, 0)
                }
                return e.alpha = function(n) {
                    return t(+n)
                }, e
            })(.5);

            function fo(t, n) {
                this._context = t, this._alpha = n
            }
            fo.prototype = {
                areaStart: Zc,
                areaEnd: Zc,
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
                            ro(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return n ? new fo(t, n) : new eo(t, 0)
                }
                return e.alpha = function(n) {
                    return t(+n)
                }, e
            })(.5);

            function co(t, n) {
                this._context = t, this._alpha = n
            }
            co.prototype = {
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
                            ro(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            (function t(n) {
                function e(t) {
                    return n ? new co(t, n) : new io(t, 0)
                }
                return e.alpha = function(n) {
                    return t(+n)
                }, e
            })(.5);

            function oo(t) {
                this._context = t
            }
            oo.prototype = {
                areaStart: Zc,
                areaEnd: Zc,
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

            function uo(t) {
                return t < 0 ? -1 : 1
            }

            function so(t, n, e) {
                var i = t._x1 - t._x0,
                    r = n - t._x1,
                    a = (t._y1 - t._y0) / (i || r < 0 && -0),
                    f = (e - t._y1) / (r || i < 0 && -0),
                    c = (a * r + f * i) / (i + r);
                return (uo(a) + uo(f)) * Math.min(Math.abs(a), Math.abs(f), .5 * Math.abs(c)) || 0
            }

            function ho(t, n) {
                var e = t._x1 - t._x0;
                return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
            }

            function lo(t, n, e) {
                var i = t._x0,
                    r = t._y0,
                    a = t._x1,
                    f = t._y1,
                    c = (a - i) / 3;
                t._context.bezierCurveTo(i + c, r + c * n, a - c, f - c * e, a, f)
            }

            function _o(t) {
                this._context = t
            }

            function bo(t) {
                this._context = new po(t)
            }

            function po(t) {
                this._context = t
            }

            function yo(t) {
                this._context = t
            }

            function vo(t) {
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
            _o.prototype = {
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
                            lo(this, this._t0, ho(this, this._t0))
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
                                this._point = 3, lo(this, ho(this, e = so(this, t, n)), e);
                                break;
                            default:
                                lo(this, this._t0, e = so(this, t, n))
                        }
                        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
                    }
                }
            }, (bo.prototype = Object.create(_o.prototype)).point = function(t, n) {
                _o.prototype.point.call(this, n, t)
            }, po.prototype = {
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
            }, yo.prototype = {
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
                            for (var i = vo(t), r = vo(n), a = 0, f = 1; f < e; ++a, ++f) this._context.bezierCurveTo(i[0][a], r[0][a], i[1][a], r[1][a], t[f], n[f]);
                    (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
                },
                point: function(t, n) {
                    this._x.push(+t), this._y.push(+n)
                }
            };

            function go(t, n) {
                this._context = t, this._t = n
            }
            go.prototype = {
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

            function xo() {
                this._ = null
            }

            function mo(t) {
                t.U = t.C = t.L = t.R = t.P = t.N = null
            }

            function wo(t, n) {
                var e = n,
                    i = n.R,
                    r = e.U;
                r ? r.L === e ? r.L = i : r.R = i : t._ = i, i.U = r, e.U = i, e.R = i.L, e.R && (e.R.U = e), i.L = e
            }

            function Mo(t, n) {
                var e = n,
                    i = n.L,
                    r = e.U;
                r ? r.L === e ? r.L = i : r.R = i : t._ = i, i.U = r, e.U = i, e.L = i.R, e.L && (e.L.U = e), i.R = e
            }

            function No(t) {
                for (; t.L;) t = t.L;
                return t
            }
            xo.prototype = {
                constructor: xo,
                insert: function(t, n) {
                    var e, i, r;
                    if (t) {
                        if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                            for (t = t.R; t.L;) t = t.L;
                            t.L = n
                        } else t.R = n;
                        e = t
                    } else this._ ? (t = No(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
                    for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (i = e.U).L ? (r = i.R) && r.C ? (e.C = r.C = !1, i.C = !0, t = i) : (t === e.R && (wo(this, e), e = (t = e).U), e.C = !1, i.C = !0, Mo(this, i)) : (r = i.L) && r.C ? (e.C = r.C = !1, i.C = !0, t = i) : (t === e.L && (Mo(this, e), e = (t = e).U), e.C = !1, i.C = !0, wo(this, i)), e = t.U;
                    this._.C = !1
                },
                remove: function(t) {
                    t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                    var n, e, i, r = t.U,
                        a = t.L,
                        f = t.R;
                    if (e = a ? f ? No(f) : a : f, r ? r.L === t ? r.L = e : r.R = e : this._ = e, a && f ? (i = e.C, e.C = t.C, e.L = a, a.U = e, e !== f ? (r = e.U, e.U = t.U, t = e.R, r.L = t, e.R = f, f.U = e) : (e.U = r, r = e, t = e.R)) : (i = t.C, t = e), t && (t.U = r), !i)
                        if (t && t.C) t.C = !1;
                        else {
                            do {
                                if (t === this._) break;
                                if (t === r.L) {
                                    if ((n = r.R).C && (n.C = !1, r.C = !0, wo(this, r), n = r.R), n.L && n.L.C || n.R && n.R.C) {
                                        n.R && n.R.C || (n.L.C = !1, n.C = !0, Mo(this, n), n = r.R), n.C = r.C, r.C = n.R.C = !1, wo(this, r), t = this._;
                                        break
                                    }
                                } else if ((n = r.L).C && (n.C = !1, r.C = !0, Mo(this, r), n = r.L), n.L && n.L.C || n.R && n.R.C) {
                                    n.L && n.L.C || (n.R.C = !1, n.C = !0, wo(this, n), n = r.L), n.C = r.C, r.C = n.L.C = !1, Mo(this, r), t = this._;
                                    break
                                }
                                n.C = !0, t = r, r = r.U
                            } while (!t.C);
                            t && (t.C = !1)
                        }
                }
            };
            var To = xo;

            function ko(t, n, e, i) {
                var r = [null, null],
                    a = Jo.push(r) - 1;
                return r.left = t, r.right = n, e && Co(r, t, n, e), i && Co(r, n, t, i), Zo[t.index].halfedges.push(a), Zo[n.index].halfedges.push(a), r
            }

            function Ao(t, n, e) {
                var i = [n, e];
                return i.left = t, i
            }

            function Co(t, n, e, i) {
                t[0] || t[1] ? t.left === e ? t[1] = i : t[0] = i : (t[0] = i, t.left = n, t.right = e)
            }

            function So(t, n, e, i, r) {
                var a, f = t[0],
                    c = t[1],
                    o = f[0],
                    u = f[1],
                    s = 0,
                    h = 1,
                    l = c[0] - o,
                    d = c[1] - u;
                if (a = n - o, l || !(a > 0)) {
                    if (a /= l, l < 0) {
                        if (a < s) return;
                        a < h && (h = a)
                    } else if (l > 0) {
                        if (a > h) return;
                        a > s && (s = a)
                    }
                    if (a = i - o, l || !(a < 0)) {
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
                                return !(s > 0 || h < 1) || (s > 0 && (t[0] = [o + s * l, u + s * d]), h < 1 && (t[1] = [o + h * l, u + h * d]), !0)
                            }
                        }
                    }
                }
            }

            function Eo(t, n, e, i, r) {
                var a = t[1];
                if (a) return !0;
                var f, c, o = t[0],
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
                        if (o) {
                            if (o[1] >= r) return
                        } else o = [b, e];
                        a = [b, r]
                    } else {
                        if (o) {
                            if (o[1] < e) return
                        } else o = [b, r];
                        a = [b, e]
                    }
                } else if (c = p - (f = (h - d) / (_ - l)) * b, f < -1 || f > 1)
                    if (h > d) {
                        if (o) {
                            if (o[1] >= r) return
                        } else o = [(e - c) / f, e];
                        a = [(r - c) / f, r]
                    } else {
                        if (o) {
                            if (o[1] < e) return
                        } else o = [(r - c) / f, r];
                        a = [(e - c) / f, e]
                    }
                else if (l < _) {
                    if (o) {
                        if (o[0] >= i) return
                    } else o = [n, f * n + c];
                    a = [i, f * i + c]
                } else {
                    if (o) {
                        if (o[0] < n) return
                    } else o = [i, f * i + c];
                    a = [n, f * n + c]
                }
                return t[0] = o, t[1] = a, !0
            }

            function Uo(t, n) {
                var e = t.site,
                    i = n.left,
                    r = n.right;
                return e === r && (r = i, i = e), r ? Math.atan2(r[1] - i[1], r[0] - i[0]) : (e === i ? (i = n[1], r = n[0]) : (i = n[0], r = n[1]), Math.atan2(i[0] - r[0], r[1] - i[1]))
            }

            function Lo(t, n) {
                return n[+(n.left !== t.site)]
            }

            function Po(t, n) {
                return n[+(n.left === t.site)]
            }
            var Do, Ro = [];

            function Fo() {
                mo(this), this.x = this.y = this.arc = this.site = this.cy = null
            }

            function Yo(t) {
                var n = t.P,
                    e = t.N;
                if (n && e) {
                    var i = n.site,
                        r = t.site,
                        a = e.site;
                    if (i !== a) {
                        var f = r[0],
                            c = r[1],
                            o = i[0] - f,
                            u = i[1] - c,
                            s = a[0] - f,
                            h = a[1] - c,
                            l = 2 * (o * h - u * s);
                        if (!(l >= -Go)) {
                            var d = o * o + u * u,
                                _ = s * s + h * h,
                                b = (h * d - u * _) / l,
                                p = (o * _ - s * d) / l,
                                y = Ro.pop() || new Fo;
                            y.arc = t, y.site = r, y.x = b + f, y.y = (y.cy = p + c) + Math.sqrt(b * b + p * p), t.circle = y;
                            for (var v = null, g = Wo._; g;)
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
                                } Wo.insert(v, y), v || (Do = y)
                        }
                    }
                }
            }

            function qo(t) {
                var n = t.circle;
                n && (n.P || (Do = n.N), Wo.remove(n), Ro.push(n), mo(n), t.circle = null)
            }
            var zo = [];

            function Ho() {
                mo(this), this.edge = this.site = this.circle = null
            }

            function jo(t) {
                var n = zo.pop() || new Ho;
                return n.site = t, n
            }

            function Oo(t) {
                qo(t), Bo.remove(t), zo.push(t), mo(t)
            }

            function Io(t) {
                var n = t.circle,
                    e = n.x,
                    i = n.cy,
                    r = [e, i],
                    a = t.P,
                    f = t.N,
                    c = [t];
                Oo(t);
                for (var o = a; o.circle && Math.abs(e - o.circle.x) < Qo && Math.abs(i - o.circle.cy) < Qo;) a = o.P, c.unshift(o), Oo(o), o = a;
                c.unshift(o), qo(o);
                for (var u = f; u.circle && Math.abs(e - u.circle.x) < Qo && Math.abs(i - u.circle.cy) < Qo;) f = u.N, c.push(u), Oo(u), u = f;
                c.push(u), qo(u);
                var s, h = c.length;
                for (s = 1; s < h; ++s) u = c[s], o = c[s - 1], Co(u.edge, o.site, u.site, r);
                o = c[0], (u = c[h - 1]).edge = ko(o.site, u.site, null, r), Yo(o), Yo(u)
            }

            function $o(t) {
                for (var n, e, i, r, a = t[0], f = t[1], c = Bo._; c;)
                    if ((i = Xo(c, f) - a) > Qo) c = c.L;
                    else {
                        if (!((r = a - Vo(c, f)) > Qo)) {
                            i > -Qo ? (n = c.P, e = c) : r > -Qo ? (n = c, e = c.N) : n = e = c;
                            break
                        }
                        if (!c.R) {
                            n = c;
                            break
                        }
                        c = c.R
                    }!
                function(t) {
                    Zo[t.index] = {
                        site: t,
                        halfedges: []
                    }
                }(t);
                var o = jo(t);
                if (Bo.insert(n, o), n || e) {
                    if (n === e) return qo(n), e = jo(n.site), Bo.insert(o, e), o.edge = e.edge = ko(n.site, o.site), Yo(n), void Yo(e);
                    if (e) {
                        qo(n), qo(e);
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
                        Co(e.edge, u, _, x), o.edge = ko(u, t, null, x), e.edge = ko(t, _, null, x), Yo(n), Yo(e)
                    } else o.edge = ko(n.site, o.site)
                }
            }

            function Xo(t, n) {
                var e = t.site,
                    i = e[0],
                    r = e[1],
                    a = r - n;
                if (!a) return i;
                var f = t.P;
                if (!f) return -1 / 0;
                var c = (e = f.site)[0],
                    o = e[1],
                    u = o - n;
                if (!u) return c;
                var s = c - i,
                    h = 1 / a - 1 / u,
                    l = s / u;
                return h ? (-l + Math.sqrt(l * l - 2 * h * (s * s / (-2 * u) - o + u / 2 + r - a / 2))) / h + i : (i + c) / 2
            }

            function Vo(t, n) {
                var e = t.N;
                if (e) return Xo(e, n);
                var i = t.site;
                return i[1] === n ? i[0] : 1 / 0
            }
            var Bo, Zo, Wo, Jo, Qo = 1e-6,
                Go = 1e-12;

            function Ko(t, n) {
                return n[1] - t[1] || n[0] - t[0]
            }

            function tu(t, n) {
                var e, i, r, a = t.sort(Ko).pop();
                for (Jo = [], Zo = new Array(t.length), Bo = new To, Wo = new To;;)
                    if (r = Do, a && (!r || a[1] < r.y || a[1] === r.y && a[0] < r.x)) a[0] === e && a[1] === i || ($o(a), e = a[0], i = a[1]), a = t.pop();
                    else {
                        if (!r) break;
                        Io(r.arc)
                    } if (function() {
                        for (var t, n, e, i, r = 0, a = Zo.length; r < a; ++r)
                            if ((t = Zo[r]) && (i = (n = t.halfedges).length)) {
                                var f = new Array(i),
                                    c = new Array(i);
                                for (e = 0; e < i; ++e) f[e] = e, c[e] = Uo(t, Jo[n[e]]);
                                for (f.sort(function(t, n) {
                                        return c[n] - c[t]
                                    }), e = 0; e < i; ++e) c[e] = n[f[e]];
                                for (e = 0; e < i; ++e) n[e] = c[e]
                            }
                    }(), n) {
                    var f = +n[0][0],
                        c = +n[0][1],
                        o = +n[1][0],
                        u = +n[1][1];
                    ! function(t, n, e, i) {
                        for (var r, a = Jo.length; a--;) Eo(r = Jo[a], t, n, e, i) && So(r, t, n, e, i) && (Math.abs(r[0][0] - r[1][0]) > Qo || Math.abs(r[0][1] - r[1][1]) > Qo) || delete Jo[a]
                    }(f, c, o, u),
                    function(t, n, e, i) {
                        var r, a, f, c, o, u, s, h, l, d, _, b, p = Zo.length,
                            y = !0;
                        for (r = 0; r < p; ++r)
                            if (a = Zo[r]) {
                                for (f = a.site, c = (o = a.halfedges).length; c--;) Jo[o[c]] || o.splice(c, 1);
                                for (c = 0, u = o.length; c < u;) _ = (d = Po(a, Jo[o[c]]))[0], b = d[1], h = (s = Lo(a, Jo[o[++c % u]]))[0], l = s[1], (Math.abs(_ - h) > Qo || Math.abs(b - l) > Qo) && (o.splice(c, 0, Jo.push(Ao(f, d, Math.abs(_ - t) < Qo && i - b > Qo ? [t, Math.abs(h - t) < Qo ? l : i] : Math.abs(b - i) < Qo && e - _ > Qo ? [Math.abs(l - i) < Qo ? h : e, i] : Math.abs(_ - e) < Qo && b - n > Qo ? [e, Math.abs(h - e) < Qo ? l : n] : Math.abs(b - n) < Qo && _ - t > Qo ? [Math.abs(l - n) < Qo ? h : t, n] : null)) - 1), ++u);
                                u && (y = !1)
                            } if (y) {
                            var v, g, x, m = 1 / 0;
                            for (r = 0, y = null; r < p; ++r)(a = Zo[r]) && (x = (v = (f = a.site)[0] - t) * v + (g = f[1] - n) * g) < m && (m = x, y = a);
                            if (y) {
                                var w = [t, n],
                                    M = [t, i],
                                    N = [e, i],
                                    T = [e, n];
                                y.halfedges.push(Jo.push(Ao(f = y.site, w, M)) - 1, Jo.push(Ao(f, M, N)) - 1, Jo.push(Ao(f, N, T)) - 1, Jo.push(Ao(f, T, w)) - 1)
                            }
                        }
                        for (r = 0; r < p; ++r)(a = Zo[r]) && (a.halfedges.length || delete Zo[r])
                    }(f, c, o, u)
                }
                this.edges = Jo, this.cells = Zo, Bo = Wo = Jo = Zo = null
            }
            tu.prototype = {
                constructor: tu,
                polygons: function() {
                    var t = this.edges;
                    return this.cells.map(function(n) {
                        var e = n.halfedges.map(function(e) {
                            return Lo(n, t[e])
                        });
                        return e.data = n.site.data, e
                    })
                },
                triangles: function() {
                    var t = [],
                        n = this.edges;
                    return this.cells.forEach(function(e, i) {
                        if (a = (r = e.halfedges).length)
                            for (var r, a, f, c, o, u, s = e.site, h = -1, l = n[r[a - 1]], d = l.left === s ? l.right : l.left; ++h < a;) f = d, d = (l = n[r[h]]).left === s ? l.right : l.left, f && d && i < f.index && i < d.index && (o = f, u = d, ((c = s)[0] - u[0]) * (o[1] - c[1]) - (c[0] - o[0]) * (u[1] - c[1]) < 0) && t.push([s.data, f.data, d.data])
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
                    for (var i, r, a = this, f = a._found || 0, c = a.cells.length; !(r = a.cells[f]);)
                        if (++f >= c) return null;
                    var o = t - r.site[0],
                        u = n - r.site[1],
                        s = o * o + u * u;
                    do {
                        r = a.cells[i = f], f = null, r.halfedges.forEach(function(e) {
                            var i = a.edges[e],
                                c = i.left;
                            if (c !== r.site && c || (c = i.right)) {
                                var o = t - c[0],
                                    u = n - c[1],
                                    h = o * o + u * u;
                                h < s && (s = h, f = c.index)
                            }
                        })
                    } while (null !== f);
                    return a._found = i, null == e || s <= e * e ? r.site : null
                }
            };

            function nu(t, n, e) {
                this.k = t, this.x = n, this.y = e
            }
            nu.prototype = {
                constructor: nu,
                scale: function(t) {
                    return 1 === t ? this : new nu(this.k * t, this.x, this.y)
                },
                translate: function(t, n) {
                    return 0 === t & 0 === n ? this : new nu(this.k, this.x + this.k * t, this.y + this.k * n)
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
            new nu(1, 0, 0);
            nu.prototype;
            e.d(n, "e", function() {
                return o
            }), e.d(n, "a", function() {
                return C
            }), e.d(n, "b", function() {
                return S
            }), e.d(n, "c", function() {
                return Xe
            }), e.d(n, "h", function() {
                return Mi
            }), e.d(n, "f", function() {
                return Hi
            }), e.d(n, "g", function() {
                return Gr
            }), e.d(n, "m", function() {
                return da
            }), e.d(n, "n", function() {
                return _a
            }), e.d(n, "j", function() {
                return Ua
            }), e.d(n, "k", function() {
                return Pc
            }), e.d(n, "l", function() {
                return kt
            }), e.d(n, "d", function() {
                return pt
            }), e.d(n, "i", function() {
                return $c
            })
        }
    }
]);