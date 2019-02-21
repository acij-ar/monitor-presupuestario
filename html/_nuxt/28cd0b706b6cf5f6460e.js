(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        155: function(t, e, a) {
            "use strict";
            a(44), a(59);
            var r = a(154),
                i = a(163),
                n = {
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
                                n = r.p("#" + this.plotName),
                                o = this.getSVGString(n.node());
                            this.svgString2Image(o, 2 * e, 2 * a, "png", function(e, a) {
                                var r = "".concat(t.title, ".png").replace(/ /, "_").replace(/-/, "_");
                                Object(i.saveAs)(e, r)
                            })
                        },
                        getSVGString: function(t) {
                            t.setAttribute("xlink", "http://www.w3.org/1999/xlink"),
                                function(t, e) {
                                    var a = document.createElement("style");
                                    a.setAttribute("type", "text/css"), a.innerHTML = t;
                                    var r = e.hasChildNodes() ? e.children[0] : null;
                                    e.insertBefore(a, r)
                                }(function(t) {
                                    var e = [];
                                    e.push("#" + t.id);
                                    for (var a = 0; a < t.classList.length; a++) h("." + t.classList[a], e) || e.push("." + t.classList[a]);
                                    for (var r = t.getElementsByTagName("*"), i = 0; i < r.length; i++) {
                                        var n = r[i].id;
                                        h("#" + n, e) || e.push("#" + n);
                                        for (var o = r[i].classList, s = 0; s < o.length; s++) h("." + o[s], e) || e.push("." + o[s])
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
                        svgString2Image: function(t, e, a, r, i) {
                            r = r || "png";
                            var n = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(t))),
                                o = document.createElement("canvas"),
                                s = o.getContext("2d");
                            o.width = e, o.height = a;
                            var c = new Image;
                            c.onload = function() {
                                s.clearRect(0, 0, e, a), s.drawImage(c, 0, 0, e, a), o.toBlob(function(t) {
                                    var e = Math.round(t.length / 1024) + " KB";
                                    i && i(t, e)
                                })
                            }, c.src = n
                        }
                    }
                },
                o = a(8),
                s = Object(o.a)(n, function() {
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
            s.options.__file = "TheSharedButton.vue";
            e.a = s.exports
        },
        156: function(t, e, a) {
            "use strict";
            a.d(e, "a", function() {
                return r
            });
            var r = "http://monitorpresupuestario.acij.org.ar/api/v1"
        },
        157: function(t, e, a) {
            var r = a(166);
            "string" == typeof r && (r = [
                [t.i, r, ""]
            ]), r.locals && (t.exports = r.locals);
            (0, a(16).default)("9775cf1e", r, !0, {
                sourceMap: !1
            })
        },
        158: function(t, e, a) {
            var r = a(168);
            "string" == typeof r && (r = [
                [t.i, r, ""]
            ]), r.locals && (t.exports = r.locals);
            (0, a(16).default)("4b938f2d", r, !0, {
                sourceMap: !1
            })
        },
        165: function(t, e, a) {
            "use strict";
            var r = a(157);
            a.n(r).a
        },
        166: function(t, e, a) {
            (t.exports = a(15)(!1)).push([t.i, "\n.p[data-v-778b8570]{padding-top:50px\n}\n#evolution[data-v-778b8570]{margin-top:25px\n}\n.green[data-v-778b8570]{color:green\n}\n.red[data-v-778b8570]{color:red\n}", ""])
        },
        167: function(t, e, a) {
            "use strict";
            var r = a(158);
            a.n(r).a
        },
        168: function(t, e, a) {
            (t.exports = a(15)(!1)).push([t.i, "\n.is-12[data-v-98c8bb7e]{margin-top:30px\n}", ""])
        },
        176: function(t, e, a) {
            "use strict";
            a.r(e);
            a(28), a(60), a(162);
            var r = a(154),
                i = a(156),
                n = a(155),
                o = (a(94), a(59), a(44), {
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
                            this.svg = r.p("#treeMap")
                        },
                        setSvgSize: function() {
                            var t = document.getElementsByClassName("column is-12")[0].clientWidth - 24,
                                e = 1 * t / 3;
                            this.svgSize.width = t, this.svgSize.height = e, this.svg.attr("width", t + this.margin.left + this.margin.right).attr("height", e + this.margin.top + this.margin.bottom), this.treemap = r.r().tile(r.s).size([this.svgSize.width, this.svgSize.height]).round(!0).paddingInner(5)
                        },
                        draw: function() {
                            var t = this,
                                e = r.q(this.root.data.children, function(t) {
                                    return t.credito_presupuestado
                                }),
                                a = r.l(this.root.data.children, function(t) {
                                    return t.credito_presupuestado
                                }),
                                i = r.m(this.root.data.children, function(t) {
                                    return t.credito_presupuestado
                                });
                            this.root.data.children.forEach(function(t) {
                                t.mapValue = (t.credito_presupuestado - i) / (a - i) * .5 + .5
                            });
                            var n = this.svg.selectAll("g").data(this.root.leaves());
                            n.exit().remove();
                            var o = n.enter().append("g");
                            n = n.merge(o).attr("transform", function(t) {
                                return "translate(".concat(t.x0, ", ").concat(t.y0, ")")
                            }).on("mouseover", function(a) {
                                return t.mouseover(a, e)
                            }).on("mouseout", function(e) {
                                return t.mouseout(e)
                            }).on("click", function(e) {
                                return t.$emit("clicked", e.data.name, e.data.jurisdiccion_desc, e.data.programa_id)
                            }), o.append("rect"), n.select("rect").attr("id", function(t) {
                                return t.data.name.replace(/ /g, "_")
                            }).attr("fill", function(t) {
                                return r.i(t.data.mapValue)
                            }).attr("width", 0).attr("height", function(t) {
                                return t.y1 - t.y0
                            }).transition().duration(2e3).attr("width", function(t) {
                                return t.x1 - t.x0
                            }), o.append("clipPath"), n.select("clipPath").attr("id", function(t) {
                                return "clip-" + t.data.name.replace(/ /g, "_")
                            }).append("use").attr("xlink:href", function(t) {
                                return "#" + t.data.name.replace(/ /g, "_")
                            }), n.select("text").remove(), n.append("text").attr("clip-path", function(t) {
                                return "url(#clip-" + t.data.name.replace(/ /g, "_") + ")"
                            }).attr("fill", function(t) {
                                return t.data.mapValue > .9 ? "white" : "black"
                            }).selectAll("tspan").data(function(t) {
                                return t.data.name.split(/ /g)
                            }).enter().append("tspan").attr("x", 4).attr("y", function(t, e) {
                                return 13 + 15 * e
                            }).text(function(t) {
                                return t
                            })
                        },
                        mouseover: function(t, e) {
                            this.$emit("mouseover", t.data.name, t.data.jurisdiccion_desc, t.data.programa_id);
                            var a = r.f(".1f")(100 * t.data.credito_presupuestado / e),
                                i = r.g({
                                    decimal: ",",
                                    thousands: ".",
                                    grouping: [3]
                                }).format(",.0f"),
                                n = "";
                            t.data.programa_id && (n = "<strong>Programa:</strong> ".concat(t.data.programa_desc, "<br />\n        <strong>Programa ID:</strong> ").concat(t.data.programa_id)), r.p("#tooltip").style("left", r.d.pageX - 125 + "px").style("top", r.d.pageY + 20 + "px").html(function() {
                                return "<strong>Jurisdiccion:</strong> ".concat(t.data.jurisdiccion_desc, "<br />\n          <strong>Credito presupuestado:</strong> ").concat(i(t.data.credito_presupuestado), "<br />\n          <strong>Porcentaje credito presupuestado:</strong> ").concat(a, "%<br />\n          ").concat(n)
                            }), r.p("#tooltip").classed("hidden", !1)
                        },
                        mouseout: function(t) {
                            r.p("#tooltip").classed("hidden", !0)
                        }
                    }
                }),
                s = a(8),
                c = Object(s.a)(o, function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("svg", {
                        attrs: {
                            id: "treeMap"
                        }
                    })
                }, [], !1, null, null, null);
            c.options.__file = "MonitorTreeMap.vue";
            var l = c.exports,
                u = {
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
                            this.svg = r.p("#evolution"), this.g = this.svg.append("g").attr("transform", "translate(".concat(this.margin.left, ", ").concat(this.margin.top, ")")), this.g.append("g").attr("class", "x axis").append("text").attr("class", "label"), this.g.append("g").attr("class", "y axis").append("text").attr("class", "label"), this.g.append("g").attr("class", "y grid")
                        },
                        setSvgSize: function() {
                            var t = document.getElementsByClassName("column is-12")[0].clientWidth - 24,
                                e = 1 * t / 3;
                            this.svgSize.width = t - this.margin.left - this.margin.right, this.svgSize.height = e - this.margin.top - this.margin.bottom, this.svg.attr("width", t + this.margin.left + this.margin.right).attr("height", e + this.margin.top + this.margin.bottom), this.plotLegends()
                        },
                        draw: function() {
                            var t = r.n().range([0, this.svgSize.width]).domain(r.e(this.data, function(t) {
                                    return t.ejercicio_presupuestario
                                })).nice(),
                                e = [];
                            this.data.forEach(function(t) {
                                e.push(t.credito_vigente), e.push(t.credito_devengado), e.push(t.credito_presupuestado)
                            });
                            var a = r.n().range([this.svgSize.height, 0]).domain(r.e(e)).nice();
                            this.plotLines(t, a, "credito_vigente", "#0181FF"), this.plotLines(t, a, "credito_devengado", "#7CFCDA"), this.plotLines(t, a, "credito_presupuestado", "#FF83F6"), this.plotDots(t, a, "credito_vigente", "#0181FF"), this.plotDots(t, a, "credito_devengado", "#7CFCDA"), this.plotDots(t, a, "credito_presupuestado", "#FF83F6"), this.plotYGrid(a), this.g.select(".x.axis").attr("transform", "translate(0, ".concat(this.svgSize.height, ")")).call(r.a(t).tickFormat(r.f("d"))).select(".label").attr("x", this.svgSize.width / 2).attr("y", .9 * this.margin.bottom).attr("dx", "0.32em").attr("fill", "#000").attr("font-weight", "bold").attr("text-anchor", "middle").text("Ejercicio presupuestario"), this.g.select(".y.axis").call(r.b(a).tickFormat(function(t) {
                                return t / 1e6
                            })).select(".label").attr("transform", "rotate(-90)").attr("x", -this.svgSize.height / 2).attr("y", .85 * -this.margin.left).attr("dx", "0.32em").attr("fill", "#000").attr("font-weight", "bold").attr("text-anchor", "middle").text("Monto (por millon)")
                        },
                        plotLines: function(t, e, a, i) {
                            var n = 200 * this.data.length,
                                o = r.k().x(function(e) {
                                    return t(e.ejercicio_presupuestario)
                                }).y(function(t) {
                                    return e(t[a])
                                }).defined(function(t) {
                                    return null !== t[a]
                                }),
                                s = this.g.selectAll(".line.".concat(a)).data([this.data]);
                            s.exit().remove();
                            var c = s.enter().append("path").attr("class", "line ".concat(a)).style("stroke", i),
                                l = (s = s.merge(c).attr("d", o)).node().getTotalLength();
                            s.attr("stroke-dasharray", l + " " + l).attr("stroke-dashoffset", l).transition().duration(n).ease(r.c).attr("stroke-dashoffset", 0)
                        },
                        plotDots: function(t, e, a, i) {
                            var n = 100 * this.data.length,
                                o = this.g.selectAll(".dot.".concat(a)).data(this.data);
                            o.exit().remove();
                            var s = o.enter().append("circle").attr("class", "dot ".concat(a)).style("fill", i);
                            o = o.merge(s).attr("r", 0).attr("cx", function(e) {
                                return t(e.ejercicio_presupuestario)
                            }).attr("cy", function(t) {
                                return e(t[a])
                            }).transition().delay(function(t, e) {
                                return 100 * e
                            }).duration(n).ease(r.c).attr("r", function(t) {
                                return null !== t.ejercicio_presupuestario ? 5 : 0
                            })
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
                            this.g.select(".y.grid").call(r.b(t).ticks(5).tickSize(-this.svgSize.width).tickFormat(""))
                        }
                    }
                },
                d = Object(s.a)(u, function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("svg", {
                        attrs: {
                            id: "evolution"
                        }
                    })
                }, [], !1, null, null, null);
            d.options.__file = "TheLinePlot.vue";
            var p = {
                    data: function() {
                        return {
                            diff: 0
                        }
                    },
                    components: {
                        TheLinePlot: d.exports,
                        TheSharedButton: n.a
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
                            var t = r.f(".2f");
                            if (this.data.length >= 2) {
                                var e = this.data.slice(-2, -1)[0].credito_presupuestado,
                                    a = this.data.slice(-1)[0].credito_presupuestado;
                                this.diff = t(100 * (a - e) / e)
                            }
                        }
                    }
                },
                h = (a(165), Object(s.a)(p, function() {
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
            h.options.__file = "MonitorEvolution.vue";
            var g = h.exports,
                v = {
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
                f = Object(s.a)(v, function() {
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
            f.options.__file = "MonitorActivitiesTable.vue";
            var m = f.exports,
                _ = {
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
                    head: function() {
                        return {
                            title: "Monitor | Monitor presupuestario"
                        }
                    },
                    components: {
                        TheSharedButton: n.a,
                        MonitorTreeMap: l,
                        MonitorEvolution: g,
                        MonitorActivitiesTable: m
                    },
                    watch: {
                        selectedYear: function() {
                            this.getDataTree(!0)
                        }
                    },
                    created: function() {
                        this.getDataTree(!0)
                    },
                    methods: {
                        getDataTree: function(t) {
                            var e, a, n, o = this;
                            0 === this.treeDeep ? (n = "root", a = "jurisdiccion_desc", e = "".concat(i.a, "/jurisdiccion?anio=").concat(this.selectedYear)) : (n = t, a = "programa_desc", e = "".concat(i.a, "/programa/").concat(t, "?anio=").concat(this.selectedYear)), r.j(e).then(function(t) {
                                t.forEach(function(t) {
                                    t.name = t[a], t.parent = "", t.credito_vigente = t.credito_vigente * t.tasa_ajuste_inflacion, t.credito_devengado = t.credito_devengado * t.tasa_ajuste_inflacion, t.credito_presupuestado = t.credito_presupuestado * t.tasa_ajuste_inflacion
                                });
                                var e = {
                                    name: n,
                                    children: t
                                };
                                o.root = r.h(e).sum(function(t) {
                                    return t.credito_presupuestado
                                }).sort(function(t, e) {
                                    return e.height - t.height || e.value - t.value
                                })
                            })
                        },
                        getDataEvolution: function(t, e, a) {
                            var n, o = this;
                            n = 0 === this.treeDeep ? "".concat(i.a, "/jurisdiccion?juri_nombre=").concat(t) : "".concat(i.a, "/programa/").concat(e, "?prog_id=").concat(a), r.j(n).then(function(e) {
                                e.forEach(function(t) {
                                    t.credito_presupuestado = t.credito_presupuestado * t.tasa_ajuste_inflacion, t.credito_vigente = t.credito_vigente * t.tasa_ajuste_inflacion, t.credito_devengado = t.credito_devengado * t.tasa_ajuste_inflacion
                                });
                                var a = e.length - 1;
                                2019 === e[a].ejercicio_presupuestario && (e[a].credito_vigente = null, e[a].credito_devengado = null), o.evolution = e, o.name = t
                            })
                        },
                        getDataActivity: function(t, e) {
                            var a = this,
                                n = "".concat(i.a, "/actividad/tabla/").concat(t, "/").concat(e);
                            r.j(n).then(function(t) {
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
                b = (a(167), Object(s.a)(_, function() {
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
                    })], 1)])]), t._v(" "), 0 !== t.programs.length ? a("monitor-activities-table", {
                        attrs: {
                            data: t.programs
                        }
                    }) : t._e()], 1)
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
                    }, [this._v("\n          Monitor\n        ")]), this._v(" "), e("p", [this._v("\n          En esta sección podés comparar la participación de las asignaciones\n          presupuestarias nacionales por jurisdicción, programa o actividad desde\n          el año 2007 en relación con el presupuesto total para el año seleccionado.\n          El treemap mostrará la participación de la jurisdicción seleccionada en\n          relación a todas las jurisdicciones, del programa dentro de su jurisdicción,\n          y de la actividad respecto del programa al que pertenece. La información\n          se encuentra sistematizada tal como el Estado Nacional la publica en\n          su sitio de Presupuesto Abierto.\n        ")])])])])
                }], !1, null, "98c8bb7e", null));
            b.options.__file = "monitor.vue";
            e.default = b.exports
        }
    }
]);