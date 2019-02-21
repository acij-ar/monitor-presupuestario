(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        155: function(t, e, a) {
            "use strict";
            a.d(e, "a", function() {
                return i
            });
            var i = "http://monitorpresupuestario.acij.org.ar/api/v1"
        },
        158: function(t, e, a) {
            var i = a(169);
            "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, a(16).default)("7d8b27a4", i, !0, {
                sourceMap: !1
            })
        },
        168: function(t, e, a) {
            "use strict";
            var i = a(158);
            a.n(i).a
        },
        169: function(t, e, a) {
            (t.exports = a(15)(!1)).push([t.i, "\n.s[data-v-d1417cc8]{padding-top:50px;padding-bottom:80px\n}\n.ss[data-v-d1417cc8]{height:36px\n}", ""])
        },
        176: function(t, e, a) {
            "use strict";
            a.r(e);
            a(59), a(28);
            var i = a(154),
                o = a(155),
                r = (a(44), {
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
                            this.svg = i.o("#evolutionSearch"), this.g = this.svg.append("g").attr("transform", "translate(".concat(this.margin.left, ", ").concat(this.margin.top, ")")), this.g.append("g").attr("class", "x axis").append("text").attr("class", "label"), this.g.append("g").attr("class", "y axis").append("text").attr("class", "label"), this.g.append("g").attr("class", "y grid")
                        },
                        setSvgSize: function() {
                            var t = document.getElementsByClassName("column is-12")[0].clientWidth - 24,
                                e = 1 * t / 3;
                            this.svgSize.width = t - this.margin.left - this.margin.right, this.svgSize.height = e - this.margin.top - this.margin.bottom, this.svg.attr("width", t + this.margin.left + this.margin.right).attr("height", e + this.margin.top + this.margin.bottom), this.plotLegends()
                        },
                        draw: function() {
                            var t = this,
                                e = i.m().range([0, this.svgSize.width]).domain(i.e(this.data, function(t) {
                                    return t.ejercicio_presupuestario
                                })).nice(),
                                a = [];
                            this.data.forEach(function(t) {
                                a.push(t.credito_vigente), a.push(t.credito_devengado), a.push(t.credito_presupuestado)
                            });
                            for (var o = i.m().range([this.svgSize.height, 0]).domain(i.e(a)).nice(), r = function(a) {
                                    var r = t.data.filter(function(t) {
                                        return t.group === a
                                    });
                                    r.sort(function(t, e) {
                                        return t.ejercicio_presupuestario - e.ejercicio_presupuestario
                                    }), t.plotLines(r, e, o, "grupo-" + String(a), "credito_vigente", i.n[a - 1]), t.plotDots(r, e, o, "grupo-" + String(a), "credito_vigente", i.n[a - 1])
                                }, n = 1; n <= 10; n++) r(n);
                            this.plotYGrid(o), this.g.select(".x.axis").attr("transform", "translate(0, ".concat(this.svgSize.height, ")")).call(i.a(e).tickFormat(i.f("d"))).select(".label").attr("x", this.svgSize.width / 2).attr("y", .9 * this.margin.bottom).attr("dx", "0.32em").attr("fill", "#000").attr("font-weight", "bold").attr("text-anchor", "middle").text("Ejercicio presupuestario"), this.g.select(".y.axis").call(i.b(o).tickFormat(function(t) {
                                return t / 1e6
                            })).select(".label").attr("transform", "rotate(-90)").attr("x", -this.svgSize.height / 2).attr("y", .85 * -this.margin.left).attr("dx", "0.32em").attr("fill", "#000").attr("font-weight", "bold").attr("text-anchor", "middle").text("Monto (por millon)")
                        },
                        plotLines: function(t, e, a, o, r, n) {
                            var s = 200 * t.length,
                                c = i.j().x(function(t) {
                                    return e(t.ejercicio_presupuestario)
                                }).y(function(t) {
                                    return a(t[r])
                                }),
                                l = this.g.selectAll(".line.".concat(o)).data([t]);
                            l.exit().remove();
                            var d = l.enter().append("path").attr("class", "line ".concat(o)).style("stroke", n),
                                u = (l = l.merge(d).attr("d", c)).node().getTotalLength();
                            l.attr("stroke-dasharray", u + " " + u).attr("stroke-dashoffset", u).transition().duration(s).ease(i.c).attr("stroke-dashoffset", 0)
                        },
                        plotDots: function(t, e, a, o, r, n) {
                            var s = 100 * t.length,
                                c = this.g.selectAll(".dot.".concat(o)).data(t);
                            c.exit().remove();
                            var l = c.enter().append("circle").attr("class", "dot ".concat(o)).style("fill", n);
                            c = c.merge(l).attr("r", 0).attr("cx", function(t) {
                                return e(t.ejercicio_presupuestario)
                            }).attr("cy", function(t) {
                                return a(t[r])
                            }).transition().delay(function(t, e) {
                                return 100 * e
                            }).duration(s).ease(i.c).attr("r", 5)
                        },
                        plotLegends: function() {
                            var t = this,
                                e = [{
                                    name: "grupo 1",
                                    key: "grupo-1",
                                    color: i.n[0]
                                }, {
                                    name: "grupo 2",
                                    key: "grupo-2",
                                    color: i.n[1]
                                }, {
                                    name: "grupo 3",
                                    key: "grupo-3",
                                    color: i.n[2]
                                }, {
                                    name: "grupo 4",
                                    key: "grupo-4",
                                    color: i.n[3]
                                }, {
                                    name: "grupo 5",
                                    key: "grupo-5",
                                    color: i.n[4]
                                }, {
                                    name: "grupo 6",
                                    key: "grupo-6",
                                    color: i.n[5]
                                }, {
                                    name: "grupo 7",
                                    key: "grupo-7",
                                    color: i.n[6]
                                }, {
                                    name: "grupo 8",
                                    key: "grupo-8",
                                    color: i.n[7]
                                }, {
                                    name: "grupo 9",
                                    key: "grupo-9",
                                    color: i.n[8]
                                }, {
                                    name: "grupo 10",
                                    key: "grupo-10",
                                    color: i.n[9]
                                }],
                                a = this.g.selectAll(".legends").data(e).enter().append("g").attr("class", "legends").attr("transform", function(e, a) {
                                    return "translate(".concat(t.svgSize.width + 30, ", ").concat(20 * a, ")")
                                }).on("mouseover", function(e) {
                                    t.g.select(".line.".concat(e.key)).classed("hover", !0)
                                }).on("mouseout", function(e) {
                                    t.g.select(".line.".concat(e.key)).classed("hover", !1)
                                });
                            a.append("rect").attr("x", 0).attr("y", 0).attr("width", 10).attr("height", 10).style("fill", function(t) {
                                return t.color
                            }), a.append("text").attr("x", 20).attr("y", 10).text(function(t) {
                                return t.name
                            }).attr("class", "textselected").style("text-anchor", "start").style("font-size", 15)
                        },
                        plotYGrid: function(t) {
                            this.g.select(".y.grid").call(i.b(t).ticks(5).tickSize(-this.svgSize.width).tickFormat(""))
                        }
                    }
                }),
                n = a(8),
                s = Object(n.a)(r, function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("svg", {
                        attrs: {
                            id: "evolutionSearch"
                        }
                    })
                }, [], !1, null, null, null);
            s.options.__file = "TheLinePlotGroup.vue";
            var c = {
                    data: function() {
                        return {
                            filterBy: "todos",
                            options: ["presupuestado", "vigente", "devengado"],
                            data: [],
                            loading: !1,
                            checkedRows: [],
                            columns: [{
                                field: "tipo",
                                label: "Tipo"
                            }, {
                                field: "ejercicio_presupuestario",
                                label: "Año",
                                numeric: !0,
                                sortable: !0
                            }, {
                                field: "jurisdiccion_desc",
                                label: "Jurisdicción"
                            }, {
                                field: "programa_desc",
                                label: "Programa"
                            }, {
                                field: "programa_id",
                                label: "Prog ID",
                                numeric: !0,
                                sortable: !0
                            }, {
                                field: "actividad_desc",
                                label: "Actividad"
                            }, {
                                field: "actividad_id",
                                label: "Acti ID",
                                numeric: !0,
                                sortable: !0
                            }],
                            words: ""
                        }
                    },
                    head: function() {
                        return {
                            title: "Comparador | Monitor presupuestario"
                        }
                    },
                    components: {
                        TheLinePlotGroup: s.exports
                    },
                    methods: {
                        search: function() {
                            var t = this;
                            "" !== this.words && (this.loading = !0, i.i("".concat(o.a, "/buscar?q=").concat(this.words, "&filtro=").concat(this.filterBy)).then(function(e) {
                                e.forEach(function(t) {
                                    t.credito_vigente = t.credito_vigente * t.tasa_ajuste_inflacion, t.credito_devengado = t.credito_devengado * t.tasa_ajuste_inflacion, t.credito_presupuestado = t.credito_presupuestado * t.tasa_ajuste_inflacion
                                }), t.data = e, t.loading = !1
                            }))
                        },
                        downloadCSV: function() {
                            var t = [],
                                e = ["tipo", "jurisdiccion_desc", "programa_desc", "programa_id", "actividad_desc", "actividad_id", "ejercicio_presupuestario", "credito_presupuestado", "credito_vigente", "credito_comprometido", "credito_devengado", "credito_pagado"],
                                a = [];
                            e.forEach(function(t) {
                                return a.push(t)
                            }), t.push(a), this.checkedRows.forEach(function(i) {
                                a = [], e.forEach(function(t) {
                                    var e = i[t] ? String(i[t]).replace(/,/g, " ") : "";
                                    a.push(e)
                                }), t.push(a)
                            });
                            var i = "data:text/csv;charset=utf-8,";
                            t.forEach(function(t) {
                                var e = t.join(",");
                                i += e + "\r\n"
                            });
                            var o = encodeURI(i),
                                r = document.createElement("a");
                            r.setAttribute("href", o), r.setAttribute("download", "presupuesto_filtrado.csv"), document.body.appendChild(r), r.click()
                        }
                    }
                },
                l = (a(168), Object(n.a)(c, function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [t._m(0), t._v(" "), a("section", {
                        staticClass: "container"
                    }, [a("div", {
                        staticClass: "columns"
                    }, [a("div", {
                        staticClass: "column is-12"
                    }, [a("div", {
                        staticClass: "s"
                    }, [a("b-field", [a("b-input", {
                        attrs: {
                            placeholder: "Nombre de la jurisdiccion, programa o actividad a comparar",
                            expanded: ""
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return "button" in e || !t._k(e.keyCode, "enter", 13, e.key, "Enter") ? t.search(e) : null
                            }
                        },
                        model: {
                            value: t.words,
                            callback: function(e) {
                                t.words = e
                            },
                            expression: "words"
                        }
                    }), t._v(" "), a("p", {
                        staticClass: "control"
                    }, [a("button", {
                        staticClass: "button is-primary",
                        on: {
                            click: t.search
                        }
                    }, [t._v("Buscar")])])], 1), t._v(" "), a("div", {
                        staticClass: "block"
                    }, [a("b-radio", {
                        attrs: {
                            "native-value": "todos"
                        },
                        model: {
                            value: t.filterBy,
                            callback: function(e) {
                                t.filterBy = e
                            },
                            expression: "filterBy"
                        }
                    }, [t._v("\n                  Todos\n              ")]), t._v(" "), a("b-radio", {
                        attrs: {
                            "native-value": "jurisdiccion"
                        },
                        model: {
                            value: t.filterBy,
                            callback: function(e) {
                                t.filterBy = e
                            },
                            expression: "filterBy"
                        }
                    }, [t._v("\n                  Jurisdiccion\n              ")]), t._v(" "), a("b-radio", {
                        attrs: {
                            "native-value": "programa"
                        },
                        model: {
                            value: t.filterBy,
                            callback: function(e) {
                                t.filterBy = e
                            },
                            expression: "filterBy"
                        }
                    }, [t._v("\n                  Programa\n              ")]), t._v(" "), a("b-radio", {
                        attrs: {
                            "native-value": "actividad"
                        },
                        model: {
                            value: t.filterBy,
                            callback: function(e) {
                                t.filterBy = e
                            },
                            expression: "filterBy"
                        }
                    }, [t._v("\n                  Actividad\n              ")])], 1)], 1), t._v(" "), a("div", {
                        staticClass: "ss"
                    }, [a("span", {
                        staticClass: "is-pulled-left"
                    }, [t._v("Seleccionados: " + t._s(t.checkedRows.length))]), t._v(" "), a("button", {
                        staticClass: "button field is-primary is-pulled-right",
                        attrs: {
                            disabled: !t.checkedRows.length
                        },
                        on: {
                            click: t.downloadCSV
                        }
                    }, [a("b-icon", {
                        attrs: {
                            icon: "download"
                        }
                    }), t._v(" "), a("span", [t._v("Descargar datos")])], 1), t._v(" "), a("button", {
                        staticClass: "button field is-danger is-pulled-right",
                        attrs: {
                            disabled: !t.checkedRows.length
                        },
                        on: {
                            click: function(e) {
                                t.checkedRows = []
                            }
                        }
                    }, [a("b-icon", {
                        attrs: {
                            icon: "close"
                        }
                    }), t._v(" "), a("span", [t._v("Eliminar selecionados")])], 1)]), t._v(" "), a("b-tabs", [a("b-tab-item", {
                        attrs: {
                            label: "Busqueda"
                        }
                    }, [a("b-table", {
                        attrs: {
                            data: t.data,
                            columns: t.columns,
                            "checked-rows": t.checkedRows,
                            loading: t.loading,
                            checkable: ""
                        },
                        on: {
                            "update:checkedRows": function(e) {
                                t.checkedRows = e
                            }
                        }
                    })], 1), t._v(" "), a("b-tab-item", {
                        attrs: {
                            label: "Seleccionados"
                        }
                    }, [a("b-table", {
                        attrs: {
                            data: t.checkedRows
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("b-table-column", {
                                    attrs: {
                                        label: "Categoria"
                                    }
                                }, [a("b-select", {
                                    model: {
                                        value: e.row.group,
                                        callback: function(a) {
                                            t.$set(e.row, "group", a)
                                        },
                                        expression: "props.row.group"
                                    }
                                }, t._l(10, function(e) {
                                    return a("option", {
                                        key: e,
                                        domProps: {
                                            value: e
                                        }
                                    }, [t._v("\n                          " + t._s(e) + "\n                      ")])
                                }))], 1), t._v(" "), t._l(t.columns, function(i, o) {
                                    return a("b-table-column", {
                                        key: o,
                                        attrs: {
                                            label: i.label
                                        }
                                    }, [t._v("\n                    " + t._s(e.row[i.field]) + "\n                  ")])
                                })]
                            }
                        }])
                    })], 1)], 1), t._v(" "), 0 !== t.checkedRows.length ? a("the-line-plot-group", {
                        attrs: {
                            data: t.checkedRows
                        }
                    }) : t._e()], 1)])])])
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
                    }, [this._v("\n          Comparador\n        ")]), this._v(" "), e("p", [this._v("\n          En esta sección podés comparar las asignaciones presupuestarias nacionales por\n          jurisdicción, programa o actividad desde el año 2007 en relación con otras jurisdicciones,\n          programas o actividades. Podés seleccionar el presupuesto distribuido por el PEN, el\n          presupuesto vigente y el presupuesto devengado, ajustados por inflación.\n        ")])])])])
                }], !1, null, "d1417cc8", null));
            l.options.__file = "comparador.vue";
            e.default = l.exports
        }
    }
]);