(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], {
        155: function(t, e, a) {
            "use strict";
            a.d(e, "a", function() {
                return n
            });
            var n = "http://127.0.0.1:5000/api"
        },
        156: function(t, e, a) {
            var n = a(164);
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            (0, a(16).default)("48f344a8", n, !0, {
                sourceMap: !1
            })
        },
        157: function(t, e, a) {
            var n = a(166);
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            (0, a(16).default)("9775cf1e", n, !0, {
                sourceMap: !1
            })
        },
        160: function(t, e, a) {
            "use strict";
            var n = a(18),
                i = a(4),
                o = a(31),
                r = a(90),
                s = a(91),
                c = a(30),
                l = a(161),
                u = a(92);
            i(i.S + i.F * !a(93)(function(t) {
                Array.from(t)
            }), "Array", {
                from: function(t) {
                    var e, a, i, d, p = o(t),
                        h = "function" == typeof this ? this : Array,
                        f = arguments.length,
                        v = f > 1 ? arguments[1] : void 0,
                        g = void 0 !== v,
                        m = 0,
                        _ = u(p);
                    if (g && (v = n(v, f > 2 ? arguments[2] : void 0, 2)), null == _ || h == Array && s(_))
                        for (a = new h(e = c(p.length)); e > m; m++) l(a, m, g ? v(p[m], m) : p[m]);
                    else
                        for (d = _.call(p), a = new h; !(i = d.next()).done; m++) l(a, m, g ? r(d, v, [i.value, m], !0) : i.value);
                    return a.length = m, a
                }
            })
        },
        161: function(t, e, a) {
            "use strict";
            var n = a(9),
                i = a(29);
            t.exports = function(t, e, a) {
                e in t ? n.f(t, e, i(0, a)) : t[e] = a
            }
        },
        162: function(t, e, a) {
            (function(a) {
                var n, i, o;
                i = [], void 0 === (o = "function" == typeof(n = function() {
                    "use strict";

                    function e(t, e, a) {
                        var n = new XMLHttpRequest;
                        n.open("GET", t), n.responseType = "blob", n.onload = function() {
                            r(n.response, e, a)
                        }, n.onerror = function() {
                            console.error("could not download file")
                        }, n.send()
                    }

                    function n(t) {
                        var e = new XMLHttpRequest;
                        return e.open("HEAD", t, !1), e.send(), 200 <= e.status && 299 >= e.status
                    }

                    function i(t) {
                        try {
                            t.dispatchEvent(new MouseEvent("click"))
                        } catch (a) {
                            var e = document.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(e)
                        }
                    }
                    var o = function() {
                            try {
                                return Function("return this")() || (0, eval)("this")
                            } catch (t) {
                                return "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof a && a.global === a ? a : this
                            }
                        }(),
                        r = o.saveAs || "object" != typeof window || window !== o ? function() {} : "download" in HTMLAnchorElement.prototype ? function(t, a, r) {
                            var s = o.URL || o.webkitURL,
                                c = document.createElement("a");
                            a = a || t.name || "download", c.download = a, c.rel = "noopener", "string" == typeof t ? (c.href = t, c.origin === location.origin ? i(c) : n(c.href) ? e(t, a, r) : i(c, c.target = "_blank")) : (c.href = s.createObjectURL(t), setTimeout(function() {
                                s.revokeObjectURL(c.href)
                            }, 4e4), setTimeout(function() {
                                i(c)
                            }, 0))
                        } : "msSaveOrOpenBlob" in navigator ? function(t, a, o) {
                            if (a = a || t.name || "download", "string" != typeof t) navigator.msSaveOrOpenBlob(function(t, e) {
                                return void 0 === e ? e = {
                                    autoBom: !1
                                } : "object" != typeof e && (console.warn("Depricated: Expected third argument to be a object"), e = {
                                    autoBom: !e
                                }), e.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\ufeff", t], {
                                    type: t.type
                                }) : t
                            }(t, o), a);
                            else if (n(t)) e(t, a, o);
                            else {
                                var r = document.createElement("a");
                                r.href = t, r.target = "_blank", setTimeout(function() {
                                    i(r)
                                })
                            }
                        } : function(t, a, n, i) {
                            if ((i = i || open("", "_blank")) && (i.document.title = i.document.body.innerText = "downloading..."), "string" == typeof t) return e(t, a, n);
                            var r = "application/octet-stream" === t.type,
                                s = /constructor/i.test(o.HTMLElement) || o.safari,
                                c = /CriOS\/[\d]+/.test(navigator.userAgent);
                            if ((c || r && s) && "object" == typeof FileReader) {
                                var l = new FileReader;
                                l.onloadend = function() {
                                    var t = l.result;
                                    t = c ? t : t.replace(/^data:[^;]*;/, "data:attachment/file;"), i ? i.location.href = t : location = t, i = null
                                }, l.readAsDataURL(t)
                            } else {
                                var u = o.URL || o.webkitURL,
                                    d = u.createObjectURL(t);
                                i ? i.location = d : location.href = d, i = null, setTimeout(function() {
                                    u.revokeObjectURL(d)
                                }, 4e4)
                            }
                        };
                    o.saveAs = r.saveAs = r, t.exports = r
                }) ? n.apply(e, i) : n) || (t.exports = o)
            }).call(this, a(32))
        },
        163: function(t, e, a) {
            "use strict";
            var n = a(156);
            a.n(n).a
        },
        164: function(t, e, a) {
            (t.exports = a(15)(!1)).push([t.i, "\n#treeMap[data-v-280fe97b]{margin-top:25px\n}", ""])
        },
        165: function(t, e, a) {
            "use strict";
            var n = a(157);
            a.n(n).a
        },
        166: function(t, e, a) {
            (t.exports = a(15)(!1)).push([t.i, "\n.p[data-v-778b8570]{padding-top:50px\n}\n#evolution[data-v-778b8570]{margin-top:25px\n}\n.green[data-v-778b8570]{color:green\n}\n.red[data-v-778b8570]{color:red\n}", ""])
        },
        171: function(t, e, a) {
            "use strict";
            a.r(e);
            a(28), a(60), a(160);
            var n = a(154),
                i = a(155),
                o = (a(44), a(59), a(162)),
                r = {
                    data: function() {
                        return {}
                    },
                    props: {
                        title: {
                            type: String,
                            required: !0
                        },
                        plotName: {
                            type: String,
                            required: !0
                        }
                    },
                    methods: {
                        downloadAsPNG: function() {
                            var t = this,
                                e = +document.getElementById(this.plotName).getAttribute("width"),
                                a = +document.getElementById(this.plotName).getAttribute("height"),
                                i = n.l("#" + this.plotName),
                                r = this.getSVGString(i.node());
                            this.svgString2Image(r, 2 * e, 2 * a, "png", function(e, a) {
                                var n = "".concat(t.title, ".png").replace(/ /, "_").replace(/-/, "_");
                                Object(o.saveAs)(e, n)
                            })
                        },
                        getSVGString: function(t) {
                            t.setAttribute("xlink", "http://www.w3.org/1999/xlink"),
                                function(t, e) {
                                    var a = document.createElement("style");
                                    a.setAttribute("type", "text/css"), a.innerHTML = t;
                                    var n = e.hasChildNodes() ? e.children[0] : null;
                                    e.insertBefore(a, n)
                                }(function(t) {
                                    var e = [];
                                    e.push("#" + t.id);
                                    for (var a = 0; a < t.classList.length; a++) h("." + t.classList[a], e) || e.push("." + t.classList[a]);
                                    for (var n = t.getElementsByTagName("*"), i = 0; i < n.length; i++) {
                                        var o = n[i].id;
                                        h("#" + o, e) || e.push("#" + o);
                                        for (var r = n[i].classList, s = 0; s < r.length; s++) h("." + r[s], e) || e.push("." + r[s])
                                    }
                                    for (var c = "", l = 0; l < document.styleSheets.length; l++) {
                                        var u = document.styleSheets[l];
                                        try {
                                            if (!u.cssRules) continue
                                        } catch (t) {
                                            if ("SecurityError" !== t.name) throw t;
                                            continue
                                        }
                                        for (var d = u.cssRules, p = 0; p < d.length; p++) h(d[p].selectorText, e) && (c += d[p].cssText)
                                    }
                                    return c;

                                    function h(t, e) {
                                        return -1 !== e.indexOf(t)
                                    }
                                }(t), t);
                            var e = (new XMLSerializer).serializeToString(t);
                            return e = (e = e.replace(/(\w+)?:?xlink=/g, "xmlns:xlink=")).replace(/NS\d+:href/g, "xlink:href")
                        },
                        svgString2Image: function(t, e, a, n, i) {
                            n = n || "png";
                            var o = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(t))),
                                r = document.createElement("canvas"),
                                s = r.getContext("2d");
                            r.width = e, r.height = a;
                            var c = new Image;
                            c.onload = function() {
                                s.clearRect(0, 0, e, a), s.drawImage(c, 0, 0, e, a), r.toBlob(function(t) {
                                    var e = Math.round(t.length / 1024) + " KB";
                                    i && i(t, e)
                                })
                            }, c.src = o
                        }
                    }
                },
                s = a(8),
                c = Object(s.a)(r, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("b-dropdown", {
                        attrs: {
                            hoverable: ""
                        }
                    }, [e("button", {
                        staticClass: "button",
                        attrs: {
                            slot: "trigger"
                        },
                        slot: "trigger"
                    }, [e("font-awesome-icon", {
                        attrs: {
                            icon: "bars"
                        }
                    })], 1), this._v(" "), e("b-dropdown-item", {
                        on: {
                            click: this.downloadAsPNG
                        }
                    }, [this._v("Descargar grafico")]), this._v(" "), e("b-dropdown-item", [this._v("Descargar datos")]), this._v(" "), e("b-dropdown-item", [this._v("API")])], 1)
                }, [], !1, null, null, null);
            c.options.__file = "TheSharedButton.vue";
            var l = c.exports,
                u = (a(94), {
                    name: "treeMap",
                    data: function() {
                        return {
                            svg: null,
                            svgSize: {
                                width: 0,
                                height: 0
                            },
                            margin: {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            },
                            treemap: null
                        }
                    },
                    props: {
                        root: {
                            type: Object,
                            required: !0
                        }
                    },
                    watch: {
                        root: function() {
                            this.treemap(this.root), this.draw()
                        }
                    },
                    mounted: function() {
                        this.createSvgElements(), this.setSvgSize()
                    },
                    methods: {
                        createSvgElements: function() {
                            this.svg = n.l("#treeMap")
                        },
                        setSvgSize: function() {
                            var t = document.getElementsByClassName("column is-12")[0].clientWidth - 24,
                                e = 1 * t / 3;
                            this.svgSize.width = t, this.svgSize.height = e, this.svg.attr("width", t + this.margin.left + this.margin.right).attr("height", e + this.margin.top + this.margin.bottom), this.treemap = n.m().tile(n.n).size([this.svgSize.width, this.svgSize.height]).round(!0).paddingInner(5)
                        },
                        draw: function() {
                            var t = this,
                                e = this.svg.selectAll("g").data(this.root.leaves());
                            e.exit().remove();
                            var a = e.enter().append("g");
                            e = e.merge(a).attr("transform", function(t) {
                                return "translate(".concat(t.x0, ", ").concat(t.y0, ")")
                            }).on("mouseover", function(e) {
                                t.mouseover(e)
                            }).on("mouseout", function(e) {
                                t.mouseout(e)
                            }).on("click", function(e) {
                                t.$emit("clicked", e.data.name, e.data.jurisdiccion_desc, e.data.programa_id)
                            }), a.append("rect"), e.select("rect").attr("id", function(t) {
                                return t.data.name.replace(/ /g, "_")
                            }).attr("fill", function(t) {
                                return "red"
                            }).attr("width", 0).attr("height", function(t) {
                                return t.y1 - t.y0
                            }).transition().duration(2e3).attr("width", function(t) {
                                return t.x1 - t.x0
                            }), a.append("clipPath"), e.select("clipPath").attr("id", function(t) {
                                return "clip-" + t.data.name.replace(/ /g, "_")
                            }).append("use").attr("xlink:href", function(t) {
                                return "#" + t.data.name.replace(/ /g, "_")
                            }), e.select("text").remove(), e.append("text").attr("clip-path", function(t) {
                                return "url(#clip-" + t.data.name.replace(/ /g, "_") + ")"
                            }).selectAll("tspan").data(function(t) {
                                return t.data.name.split(/ /g)
                            }).enter().append("tspan").attr("x", 4).attr("y", function(t, e) {
                                return 13 + 15 * e
                            }).text(function(t) {
                                return t
                            })
                        },
                        mouseover: function(t) {
                            this.$emit("mouseover", t.data.name, t.data.jurisdiccion_desc, t.data.programa_id);
                            var e = "";
                            t.data.programa_id && (e = "<strong>Programa:</strong> ".concat(t.data.programa_desc, "<br />\n        <strong>Programa ID:</strong> ").concat(t.data.programa_id)), n.l("#tooltip").style("left", n.d.pageX - 125 + "px").style("top", n.d.pageY + 20 + "px").html(function() {
                                return "<strong>Jurisdiccion:</strong> ".concat(t.data.jurisdiccion_desc, "<br />\n          <strong>Credito presupuestado:</strong> ").concat(t.data.credito_presupuestado, "<br />\n          ").concat(e)
                            }), n.l("#tooltip").classed("hidden", !1)
                        },
                        mouseout: function(t) {
                            n.l("#tooltip").classed("hidden", !0)
                        }
                    }
                }),
                d = (a(163), Object(s.a)(u, function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("svg", {
                        attrs: {
                            id: "treeMap"
                        }
                    })
                }, [], !1, null, "280fe97b", null));
            d.options.__file = "MonitorTreeMap.vue";
            var p = d.exports,
                h = {
                    data: function() {
                        return {
                            svg: null,
                            g: null,
                            svgSize: {
                                width: 0,
                                height: 0
                            },
                            margin: {
                                top: 10,
                                right: 100,
                                bottom: 40,
                                left: 80
                            }
                        }
                    },
                    props: {
                        data: {
                            type: Array,
                            required: !0
                        }
                    },
                    watch: {
                        data: function() {
                            this.draw()
                        }
                    },
                    mounted: function() {
                        this.createSvgElements(), this.setSvgSize()
                    },
                    methods: {
                        createSvgElements: function() {
                            this.svg = n.l("#evolution"), this.g = this.svg.append("g").attr("transform", "translate(".concat(this.margin.left, ", ").concat(this.margin.top, ")")), this.g.append("g").attr("class", "x axis").append("text").attr("class", "label"), this.g.append("g").attr("class", "y axis").append("text").attr("class", "label"), this.g.append("g").attr("class", "y grid")
                        },
                        setSvgSize: function() {
                            var t = document.getElementsByClassName("column is-12")[0].clientWidth - 24,
                                e = 1 * t / 3;
                            this.svgSize.width = t - this.margin.left - this.margin.right, this.svgSize.height = e - this.margin.top - this.margin.bottom, this.svg.attr("width", t + this.margin.left + this.margin.right).attr("height", e + this.margin.top + this.margin.bottom), this.plotLegends()
                        },
                        draw: function() {
                            var t = n.j().range([0, this.svgSize.width]).domain(n.e(this.data, function(t) {
                                    return t.ejercicio_presupuestario
                                })).nice(),
                                e = [];
                            this.data.forEach(function(t) {
                                e.push(t.credito_vigente), e.push(t.credito_devengado), e.push(t.credito_presupuestado)
                            });
                            var a = n.j().range([this.svgSize.height, 0]).domain(n.e(e)).nice();
                            this.plotLines(t, a, "credito_vigente", "#0181FF"), this.plotLines(t, a, "credito_devengado", "#7CFCDA"), this.plotLines(t, a, "credito_presupuestado", "#FF83F6"), this.plotDots(t, a, "credito_vigente", "#0181FF"), this.plotDots(t, a, "credito_devengado", "#7CFCDA"), this.plotDots(t, a, "credito_presupuestado", "#FF83F6"), this.plotYGrid(a), this.g.select(".x.axis").attr("transform", "translate(0, ".concat(this.svgSize.height, ")")).call(n.a(t).tickFormat(n.f("d"))).select(".label").attr("x", this.svgSize.width / 2).attr("y", .9 * this.margin.bottom).attr("dx", "0.32em").attr("fill", "#000").attr("font-weight", "bold").attr("text-anchor", "middle").text("Ejercicio presupuestario"), this.g.select(".y.axis").call(n.b(a).tickFormat(function(t) {
                                return t / 1e6
                            })).select(".label").attr("transform", "rotate(-90)").attr("x", -this.svgSize.height / 2).attr("y", .85 * -this.margin.left).attr("dx", "0.32em").attr("fill", "#000").attr("font-weight", "bold").attr("text-anchor", "middle").text("Monto (por millon)")
                        },
                        plotLines: function(t, e, a, i) {
                            var o = 200 * this.data.length,
                                r = n.i().x(function(e) {
                                    return t(e.ejercicio_presupuestario)
                                }).y(function(t) {
                                    return e(t[a])
                                }),
                                s = this.g.selectAll(".line.".concat(a)).data([this.data]);
                            s.exit().remove();
                            var c = s.enter().append("path").attr("class", "line ".concat(a)).style("stroke", i),
                                l = (s = s.merge(c).attr("d", r)).node().getTotalLength();
                            s.attr("stroke-dasharray", l + " " + l).attr("stroke-dashoffset", l).transition().duration(o).ease(n.c).attr("stroke-dashoffset", 0)
                        },
                        plotDots: function(t, e, a, i) {
                            var o = 100 * this.data.length,
                                r = this.g.selectAll(".dot.".concat(a)).data(this.data);
                            r.exit().remove();
                            var s = r.enter().append("circle").attr("class", "dot ".concat(a)).style("fill", i);
                            r = r.merge(s).attr("r", 0).attr("cx", function(e) {
                                return t(e.ejercicio_presupuestario)
                            }).attr("cy", function(t) {
                                return e(t[a])
                            }).transition().delay(function(t, e) {
                                return 100 * e
                            }).duration(o).ease(n.c).attr("r", 5)
                        },
                        plotLegends: function() {
                            var t = this,
                                e = this.g.selectAll(".legends").data([{
                                    name: "vigente",
                                    key: "credito_vigente",
                                    color: "#0181FF"
                                }, {
                                    name: "devengado",
                                    key: "credito_devengado",
                                    color: "#7CFCDA"
                                }, {
                                    name: "presupuestado",
                                    key: "credito_presupuestado",
                                    color: "#FF83F6"
                                }]).enter().append("g").attr("class", "legends").attr("transform", function(e, a) {
                                    return "translate(".concat(t.svgSize.width + 30, ", ").concat(20 * a, ")")
                                }).on("mouseover", function(e) {
                                    t.g.select(".line.".concat(e.key)).classed("hover", !0)
                                }).on("mouseout", function(e) {
                                    t.g.select(".line.".concat(e.key)).classed("hover", !1)
                                });
                            e.append("rect").attr("x", 0).attr("y", 0).attr("width", 10).attr("height", 10).style("fill", function(t) {
                                return t.color
                            }), e.append("text").attr("x", 20).attr("y", 10).text(function(t) {
                                return t.name
                            }).attr("class", "textselected").style("text-anchor", "start").style("font-size", 15)
                        },
                        plotYGrid: function(t) {
                            this.g.select(".y.grid").call(n.b(t).ticks(5).tickSize(-this.svgSize.width).tickFormat(""))
                        }
                    }
                },
                f = Object(s.a)(h, function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("svg", {
                        attrs: {
                            id: "evolution"
                        }
                    })
                }, [], !1, null, null, null);
            f.options.__file = "TheLinePlot.vue";
            var v = {
                    data: function() {
                        return {
                            diff: 0
                        }
                    },
                    components: {
                        TheLinePlot: f.exports,
                        TheSharedButton: l
                    },
                    props: {
                        data: {
                            type: Array,
                            required: !0
                        },
                        name: {
                            type: String,
                            required: !0
                        }
                    },
                    watch: {
                        data: function() {
                            var t = n.f(".2f");
                            if (this.data.length >= 2) {
                                var e = this.data.slice(-2, -1)[0].credito_presupuestado,
                                    a = this.data.slice(-1)[0].credito_presupuestado;
                                this.diff = t(100 * (a - e) / e)
                            }
                        }
                    }
                },
                g = (a(165), Object(s.a)(v, function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "p"
                    }, [a("div", [1 == t.data.length ? a("h2", {
                        staticClass: "is-pulled-left"
                    }, [t._v("Spam")]) : t.diff > 0 ? a("h2", {
                        staticClass: "is-pulled-left"
                    }, [t._v("El presupuesto de "), a("strong", [t._v(t._s(t.name))]), t._v(" "), a("font-awesome-icon", {
                        staticClass: "green",
                        attrs: {
                            icon: "arrow-up"
                        }
                    }), t._v(" aumento " + t._s(t.diff) + "% en terminos reales con respecto al original del año anterior.")], 1) : t.diff < 0 ? a("h2", {
                        staticClass: "is-pulled-left"
                    }, [t._v("El presupuesto de "), a("strong", [t._v(t._s(t.name))]), t._v(" "), a("font-awesome-icon", {
                        staticClass: "red",
                        attrs: {
                            icon: "arrow-down"
                        }
                    }), t._v(" disminuyo " + t._s(t.diff) + "% en terminos reales con respecto al original del año anterior.")], 1) : a("h2", {
                        staticClass: "is-pulled-left"
                    }, [t._v("El presupuesto de " + t._s(t.name) + " no se modifico.")]), t._v(" "), a("the-shared-button", {
                        staticClass: "is-pulled-right",
                        attrs: {
                            title: "evolucion_presupuesto",
                            plotName: "evolution"
                        }
                    })], 1), t._v(" "), a("the-line-plot", {
                        attrs: {
                            data: t.data
                        }
                    })], 1)
                }, [], !1, null, "778b8570", null));
            g.options.__file = "MonitorEvolution.vue";
            var m = g.exports,
                _ = {
                    data: function() {
                        return {
                            isPaginated: !0,
                            perPage: 10,
                            checkedRows: []
                        }
                    },
                    props: {
                        data: {
                            type: Array,
                            required: !0
                        }
                    },
                    watch: {
                        data: function() {
                            this.checkedRows = []
                        }
                    }
                },
                b = Object(s.a)(_, function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("section", [a("b-field", {
                        attrs: {
                            grouped: "",
                            "group-multiline": ""
                        }
                    }, [a("b-select", {
                        attrs: {
                            disabled: !t.isPaginated
                        },
                        model: {
                            value: t.perPage,
                            callback: function(e) {
                                t.perPage = e
                            },
                            expression: "perPage"
                        }
                    }, [a("option", {
                        attrs: {
                            value: "10"
                        }
                    }, [t._v("10 por pagina")]), t._v(" "), a("option", {
                        attrs: {
                            value: "20"
                        }
                    }, [t._v("20 por pagina")]), t._v(" "), a("option", {
                        attrs: {
                            value: "30"
                        }
                    }, [t._v("30 por pagina")]), t._v(" "), a("option", {
                        attrs: {
                            value: "40"
                        }
                    }, [t._v("40 por pagina")])]), t._v(" "), a("div", {
                        staticClass: "control is-flex"
                    }, [a("b-switch", {
                        model: {
                            value: t.isPaginated,
                            callback: function(e) {
                                t.isPaginated = e
                            },
                            expression: "isPaginated"
                        }
                    }, [t._v("Paginable")])], 1)], 1), t._v(" "), a("b-table", {
                        attrs: {
                            data: t.data,
                            paginated: t.isPaginated,
                            "per-page": t.perPage,
                            "checked-rows": t.checkedRows,
                            "default-sort-direction": "asc",
                            "default-sort": "actividad_id",
                            checkable: ""
                        },
                        on: {
                            "update:checkedRows": function(e) {
                                t.checkedRows = e
                            }
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("b-table-column", {
                                    attrs: {
                                        field: "actividad_id",
                                        label: "ID",
                                        width: "40",
                                        numeric: "",
                                        sortable: ""
                                    }
                                }, [t._v("\n        " + t._s(e.row.actividad_id) + "\n      ")]), t._v(" "), a("b-table-column", {
                                    attrs: {
                                        field: "actividad_desc",
                                        label: "Actividad",
                                        width: "200"
                                    }
                                }, [t._v("\n        " + t._s(e.row.actividad_desc) + "\n      ")]), t._v(" "), a("b-table-column", {
                                    attrs: {
                                        field: "2007_presupuestado",
                                        label: "2007",
                                        width: "10",
                                        numeric: "",
                                        sortable: ""
                                    }
                                }, [t._v("\n        " + t._s((e.row["2007_presupuestado"] / 1e6).toFixed(2)) + "\n      ")]), t._v(" "), a("b-table-column", {
                                    attrs: {
                                        field: "2008_presupuestado",
                                        label: "2008",
                                        numeric: "",
                                        sortable: ""
                                    }
                                }, [t._v("\n        " + t._s((e.row["2008_presupuestado"] / 1e6).toFixed(2)) + "\n      ")]), t._v(" "), a("b-table-column", {
                                    attrs: {
                                        field: "2009_presupuestado",
                                        label: "2009",
                                        numeric: "",
                                        sortable: ""
                                    }
                                }, [t._v("\n        " + t._s((e.row["2009_presupuestado"] / 1e6).toFixed(2)) + "\n      ")]), t._v(" "), a("b-table-column", {
                                    attrs: {
                                        field: "2010_presupuestado",
                                        label: "2010",
                                        numeric: "",
                                        sortable: ""
                                    }
                                }, [t._v("\n        " + t._s((e.row["2010_presupuestado"] / 1e6).toFixed(2)) + "\n      ")]), t._v(" "), a("b-table-column", {
                                    attrs: {
                                        field: "2011_presupuestado",
                                        label: "2011",
                                        numeric: "",
                                        sortable: ""
                                    }
                                }, [t._v("\n        " + t._s((e.row["2011_presupuestado"] / 1e6).toFixed(2)) + "\n      ")]), t._v(" "), a("b-table-column", {
                                    attrs: {
                                        field: "2012_presupuestado",
                                        label: "2012",
                                        numeric: "",
                                        sortable: ""
                                    }
                                }, [t._v("\n        " + t._s((e.row["2012_presupuestado"] / 1e6).toFixed(2)) + "\n      ")]), t._v(" "), a("b-table-column", {
                                    attrs: {
                                        field: "2013_presupuestado",
                                        label: "2013",
                                        numeric: "",
                                        sortable: ""
                                    }
                                }, [t._v("\n        " + t._s((e.row["2013_presupuestado"] / 1e6).toFixed(2)) + "\n      ")]), t._v(" "), a("b-table-column", {
                                    attrs: {
                                        field: "2014_presupuestado",
                                        label: "2014",
                                        numeric: "",
                                        sortable: ""
                                    }
                                }, [t._v("\n        " + t._s((e.row["2014_presupuestado"] / 1e6).toFixed(2)) + "\n      ")]), t._v(" "), a("b-table-column", {
                                    attrs: {
                                        field: "2015_presupuestado",
                                        label: "2015",
                                        numeric: "",
                                        sortable: ""
                                    }
                                }, [t._v("\n        " + t._s((e.row["2015_presupuestado"] / 1e6).toFixed(2)) + "\n      ")]), t._v(" "), a("b-table-column", {
                                    attrs: {
                                        field: "2016_presupuestado",
                                        label: "2016",
                                        numeric: "",
                                        sortable: ""
                                    }
                                }, [t._v("\n        " + t._s((e.row["2016_presupuestado"] / 1e6).toFixed(2)) + "\n      ")]), t._v(" "), a("b-table-column", {
                                    attrs: {
                                        field: "2017_presupuestado",
                                        label: "2017",
                                        numeric: "",
                                        sortable: ""
                                    }
                                }, [t._v("\n        " + t._s((e.row["2017_presupuestado"] / 1e6).toFixed(2)) + "\n      ")]), t._v(" "), a("b-table-column", {
                                    attrs: {
                                        field: "2018_presupuestado",
                                        label: "2018",
                                        numeric: "",
                                        sortable: ""
                                    }
                                }, [t._v("\n        " + t._s((e.row["2018_presupuestado"] / 1e6).toFixed(2)) + "\n      ")]), t._v(" "), a("b-table-column", {
                                    attrs: {
                                        field: "2019_presupuestado",
                                        label: "2019",
                                        numeric: "",
                                        sortable: ""
                                    }
                                }, [t._v("\n        " + t._s((e.row["2019_presupuestado"] / 1e6).toFixed(2)) + "\n      ")])]
                            }
                        }])
                    })], 1)
                }, [], !1, null, null, null);
            b.options.__file = "MonitorActivitiesTable.vue";
            var w = {
                    data: function() {
                        return {
                            years: Array.from(new Array(13), function(t, e) {
                                return e + 2007
                            }),
                            selectedYear: 2019,
                            root: {},
                            evolution: [],
                            name: "",
                            programs: [],
                            treeDeep: 0
                        }
                    },
                    components: {
                        TheSharedButton: l,
                        MonitorTreeMap: p,
                        MonitorEvolution: m,
                        MonitorActivitiesTable: b.exports
                    },
                    watch: {
                        selectedYear: function() {
                            this.getDataTree(!0)
                        }
                    },
                    mounted: function() {
                        this.getDataTree(!0)
                    },
                    methods: {
                        getDataTree: function(t) {
                            var e, a, o, r = this;
                            0 === this.treeDeep ? (o = "root", a = "jurisdiccion_desc", e = "".concat(i.a, "/jurisdiccion?anio=").concat(this.selectedYear)) : (o = t, a = "programa_desc", e = "".concat(i.a, "/programa/").concat(t, "?anio=").concat(this.selectedYear)), n.h(e).then(function(t) {
                                t.forEach(function(t) {
                                    t.name = t[a], t.parent = "", t.credito_vigente = t.credito_vigente * t.tasa_ajuste_inflacion, t.credito_devengado = t.credito_devengado * t.tasa_ajuste_inflacion, t.credito_presupuestado = t.credito_presupuestado * t.tasa_ajuste_inflacion
                                });
                                var e = {
                                    name: o,
                                    children: t
                                };
                                r.root = n.g(e).sum(function(t) {
                                    return t.credito_presupuestado
                                }).sort(function(t, e) {
                                    return e.height - t.height || e.value - t.value
                                })
                            })
                        },
                        getDataEvolution: function(t, e, a) {
                            var o, r = this;
                            o = 0 === this.treeDeep ? "".concat(i.a, "/jurisdiccion?juri_nombre=").concat(t) : "".concat(i.a, "/programa/").concat(e, "?prog_id=").concat(a), n.h(o).then(function(e) {
                                e.forEach(function(t) {
                                    t.credito_presupuestado = t.credito_presupuestado * t.tasa_ajuste_inflacion, t.credito_vigente = t.credito_vigente * t.tasa_ajuste_inflacion, t.credito_devengado = t.credito_devengado * t.tasa_ajuste_inflacion
                                });
                                var a = e.length - 1;
                                2019 === e[a].ejercicio_presupuestario && (e[a].credito_vigente = null, e[a].credito_devengado = null), r.evolution = e, r.name = t
                            })
                        },
                        getDataActivity: function(t, e) {
                            var a = this,
                                o = "".concat(i.a, "/actividad/tabla/").concat(t, "/").concat(e);
                            n.h(o).then(function(t) {
                                a.programs = t
                            })
                        },
                        reset: function() {
                            this.treeDeep = 0, this.getDataTree()
                        },
                        onClickChild: function(t, e, a) {
                            0 === this.treeDeep ? (this.treeDeep = 1, this.getDataTree(t)) : this.getDataActivity(e, a)
                        },
                        onMouseoverChild: function(t, e, a) {
                            this.getDataEvolution(t, e, a)
                        }
                    }
                },
                y = Object(s.a)(w, function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [t._m(0), t._v(" "), a("section", {
                        staticClass: "container"
                    }, [a("div", {
                        staticClass: "columns"
                    }, [a("div", {
                        staticClass: "column is-12"
                    }, [a("div", [a("b-field", {
                        staticClass: "is-pulled-left"
                    }, [a("b-select", {
                        attrs: {
                            placeholder: "Selecciona un año"
                        },
                        model: {
                            value: t.selectedYear,
                            callback: function(e) {
                                t.selectedYear = e
                            },
                            expression: "selectedYear"
                        }
                    }, t._l(t.years, function(e) {
                        return a("option", {
                            key: e,
                            domProps: {
                                value: e
                            }
                        }, [t._v("\n                " + t._s(e) + "\n              ")])
                    }))], 1), t._v(" "), a("the-shared-button", {
                        staticClass: "is-pulled-right",
                        attrs: {
                            title: "treemap_presupuesto",
                            plotName: "treeMap"
                        }
                    }), t._v(" "), a("button", {
                        staticClass: "button is-pulled-right",
                        attrs: {
                            disabled: 0 === t.treeDeep
                        },
                        on: {
                            click: t.reset
                        }
                    }, [t._v("Volver")])], 1), t._v(" "), a("monitor-tree-map", {
                        attrs: {
                            root: t.root
                        },
                        on: {
                            clicked: t.onClickChild,
                            mouseover: t.onMouseoverChild
                        }
                    }), t._v(" "), a("monitor-evolution", {
                        attrs: {
                            data: t.evolution,
                            name: t.name
                        }
                    })], 1)])]), t._v(" "), a("monitor-activities-table", {
                        attrs: {
                            data: t.programs
                        }
                    })], 1)
                }, [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("section", {
                        staticClass: "hero is-primary is-medium"
                    }, [e("div", {
                        staticClass: "hero-body"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("h1", {
                        staticClass: "title"
                    }, [this._v("\n          Primary title\n        ")]), this._v(" "), e("h2", {
                        staticClass: "subtitle"
                    }, [this._v("\n          Primary subtitle\n        ")])])])])
                }], !1, null, null, null);
            y.options.__file = "monitor.vue";
            e.default = y.exports
        }
    }
]);