(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        155: function(t, e, a) {
            "use strict";
            a(44), a(59);
            var o = a(154),
                i = a(163),
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
                                r = o.p("#" + this.plotName),
                                n = this.getSVGString(r.node());
                            this.svgString2Image(n, 2 * e, 2 * a, "png", function(e, a) {
                                var o = "".concat(t.title, ".png").replace(/ /, "_").replace(/-/, "_");
                                Object(i.saveAs)(e, o)
                            })
                        },
                        getSVGString: function(t) {
                            t.setAttribute("xlink", "http://www.w3.org/1999/xlink"),
                                function(t, e) {
                                    var a = document.createElement("style");
                                    a.setAttribute("type", "text/css"), a.innerHTML = t;
                                    var o = e.hasChildNodes() ? e.children[0] : null;
                                    e.insertBefore(a, o)
                                }(function(t) {
                                    var e = [];
                                    e.push("#" + t.id);
                                    for (var a = 0; a < t.classList.length; a++) h("." + t.classList[a], e) || e.push("." + t.classList[a]);
                                    for (var o = t.getElementsByTagName("*"), i = 0; i < o.length; i++) {
                                        var r = o[i].id;
                                        h("#" + r, e) || e.push("#" + r);
                                        for (var n = o[i].classList, s = 0; s < n.length; s++) h("." + n[s], e) || e.push("." + n[s])
                                    }
                                    for (var c = "", l = 0; l < document.styleSheets.length; l++) {
                                        var d = document.styleSheets[l];
                                        try {
                                            if (!d.cssRules) continue
                                        } catch (t) {
                                            if ("SecurityError" !== t.name) throw t;
                                            continue
                                        }
                                        for (var u = d.cssRules, p = 0; p < u.length; p++) h(u[p].selectorText, e) && (c += u[p].cssText)
                                    }
                                    return c;

                                    function h(t, e) {
                                        return -1 !== e.indexOf(t)
                                    }
                                }(t), t);
                            var e = (new XMLSerializer).serializeToString(t);
                            return e = (e = e.replace(/(\w+)?:?xlink=/g, "xmlns:xlink=")).replace(/NS\d+:href/g, "xlink:href")
                        },
                        svgString2Image: function(t, e, a, o, i) {
                            o = o || "png";
                            var r = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(t))),
                                n = document.createElement("canvas"),
                                s = n.getContext("2d");
                            n.width = e, n.height = a;
                            var c = new Image;
                            c.onload = function() {
                                s.clearRect(0, 0, e, a), s.drawImage(c, 0, 0, e, a), n.toBlob(function(t) {
                                    var e = Math.round(t.length / 1024) + " KB";
                                    i && i(t, e)
                                })
                            }, c.src = r
                        }
                    }
                },
                n = a(8),
                s = Object(n.a)(r, function() {
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
                return o
            });
            var o = "http://monitorpresupuestario.acij.org.ar/api/v1"
        },
        159: function(t, e, a) {
            var o = a(170);
            "string" == typeof o && (o = [
                [t.i, o, ""]
            ]), o.locals && (t.exports = o.locals);
            (0, a(16).default)("84fe2bfa", o, !0, {
                sourceMap: !1
            })
        },
        169: function(t, e, a) {
            "use strict";
            var o = a(159);
            a.n(o).a
        },
        170: function(t, e, a) {
            (t.exports = a(15)(!1)).push([t.i, "\n.s[data-v-9337e630]{padding-top:50px;padding-bottom:80px\n}\n.ss[data-v-9337e630]{height:36px\n}\n.ff[data-v-9337e630]{display:inline-flex\n}", ""])
        },
        177: function(t, e, a) {
            "use strict";
            a.r(e);
            a(59), a(28);
            var o = a(154),
                i = a(156),
                r = a(155),
                n = (a(44), a(60), a(162), {
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
                        },
                        plotBy: {
                            type: String,
                            required: !0
                        }
                    },
                    watch: {
                        data: function() {
                            this.draw()
                        },
                        plotBy: function() {
                            this.draw()
                        }
                    },
                    mounted: function() {
                        this.createSvgElements(), this.setSvgSize()
                    },
                    methods: {
                        createSvgElements: function() {
                            this.svg = o.p("#evolutionSearch"), this.g = this.svg.append("g").attr("transform", "translate(".concat(this.margin.left, ", ").concat(this.margin.top, ")")), this.g.append("g").attr("class", "x axis").append("text").attr("class", "label"), this.g.append("g").attr("class", "y axis").append("text").attr("class", "label"), this.g.append("g").attr("class", "y grid")
                        },
                        setSvgSize: function() {
                            var t = document.getElementsByClassName("column is-12")[0].clientWidth - 24,
                                e = 1 * t / 3;
                            this.svgSize.width = t - this.margin.left - this.margin.right, this.svgSize.height = e - this.margin.top - this.margin.bottom, this.svg.attr("width", t + this.margin.left + this.margin.right).attr("height", e + this.margin.top + this.margin.bottom), this.plotLegends()
                        },
                        draw: function() {
                            var t = this,
                                e = o.n().range([0, this.svgSize.width]).domain(o.e(this.data, function(t) {
                                    return t.ejercicio_presupuestario
                                })).nice(),
                                a = [];
                            this.data.forEach(function(t) {
                                a.push(t.credito_vigente), a.push(t.credito_devengado), a.push(t.credito_presupuestado)
                            });
                            for (var i = o.n().range([this.svgSize.height, 0]).domain(o.e(a)).nice(), r = function(a) {
                                    var r = t.data.filter(function(t) {
                                        return t.group === a
                                    });
                                    r.sort(function(t, e) {
                                        return t.ejercicio_presupuestario - e.ejercicio_presupuestario
                                    }), t.plotLines(r, e, i, "grupo-" + String(a), t.plotBy, o.o[a - 1]), t.plotDots(r, e, i, "grupo-" + String(a), t.plotBy, o.o[a - 1])
                                }, n = 1; n <= 10; n++) r(n);
                            this.plotYGrid(i);
                            var s = o.m(this.data, function(t) {
                                    return t.ejercicio_presupuestario
                                }) - 1,
                                c = o.l(this.data, function(t) {
                                    return t.ejercicio_presupuestario
                                }) + 1,
                                l = Array.from({
                                    length: c - s
                                }, function(t, e) {
                                    return e + s
                                });
                            this.g.select(".x.axis").attr("transform", "translate(0, ".concat(this.svgSize.height, ")")).call(o.a(e).tickValues(l).tickFormat(o.f("d"))).select(".label").attr("x", this.svgSize.width / 2).attr("y", .9 * this.margin.bottom).attr("dx", "0.32em").attr("fill", "#000").attr("font-weight", "bold").attr("text-anchor", "middle").text("Ejercicio presupuestario"), this.g.select(".y.axis").call(o.b(i).tickFormat(function(t) {
                                return t / 1e6
                            })).select(".label").attr("transform", "rotate(-90)").attr("x", -this.svgSize.height / 2).attr("y", .85 * -this.margin.left).attr("dx", "0.32em").attr("fill", "#000").attr("font-weight", "bold").attr("text-anchor", "middle").text("Monto (por millon)")
                        },
                        plotLines: function(t, e, a, i, r, n) {
                            var s = 200 * t.length,
                                c = o.k().x(function(t) {
                                    return e(t.ejercicio_presupuestario)
                                }).y(function(t) {
                                    return a(t[r])
                                }),
                                l = this.g.selectAll(".line.".concat(i)).data([t]);
                            l.exit().remove();
                            var d = l.enter().append("path").attr("class", "line ".concat(i)).style("stroke", n),
                                u = (l = l.merge(d).attr("d", c)).node().getTotalLength();
                            l.attr("stroke-dasharray", u + " " + u).attr("stroke-dashoffset", u).transition().duration(s).ease(o.c).attr("stroke-dashoffset", 0)
                        },
                        plotDots: function(t, e, a, i, r, n) {
                            var s = 100 * t.length,
                                c = this.g.selectAll(".dot.".concat(i)).data(t);
                            c.exit().remove();
                            var l = c.enter().append("circle").attr("class", "dot ".concat(i)).style("fill", n);
                            c = c.merge(l).attr("r", 0).attr("cx", function(t) {
                                return e(t.ejercicio_presupuestario)
                            }).attr("cy", function(t) {
                                return a(t[r])
                            }).transition().delay(function(t, e) {
                                return 100 * e
                            }).duration(s).ease(o.c).attr("r", 5)
                        },
                        plotLegends: function() {
                            var t = this,
                                e = [{
                                    name: "grupo 1",
                                    key: "grupo-1",
                                    color: o.o[0]
                                }, {
                                    name: "grupo 2",
                                    key: "grupo-2",
                                    color: o.o[1]
                                }, {
                                    name: "grupo 3",
                                    key: "grupo-3",
                                    color: o.o[2]
                                }, {
                                    name: "grupo 4",
                                    key: "grupo-4",
                                    color: o.o[3]
                                }, {
                                    name: "grupo 5",
                                    key: "grupo-5",
                                    color: o.o[4]
                                }, {
                                    name: "grupo 6",
                                    key: "grupo-6",
                                    color: o.o[5]
                                }, {
                                    name: "grupo 7",
                                    key: "grupo-7",
                                    color: o.o[6]
                                }, {
                                    name: "grupo 8",
                                    key: "grupo-8",
                                    color: o.o[7]
                                }, {
                                    name: "grupo 9",
                                    key: "grupo-9",
                                    color: o.o[8]
                                }, {
                                    name: "grupo 10",
                                    key: "grupo-10",
                                    color: o.o[9]
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
                            this.g.select(".y.grid").call(o.b(t).ticks(5).tickSize(-this.svgSize.width).tickFormat(""))
                        }
                    }
                }),
                s = a(8),
                c = Object(s.a)(n, function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("svg", {
                        attrs: {
                            id: "evolutionSearch"
                        }
                    })
                }, [], !1, null, null, null);
            c.options.__file = "TheLinePlotGroup.vue";
            var l = c.exports,
                d = {
                    data: function() {
                        return {
                            plotBy: "credito_presupuestado",
                            filterBy: "todos",
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
                                label: "Jurisdicción",
                                sortable: !0
                            }, {
                                field: "entidad_desc",
                                label: "Entidad",
                                sortable: !0
                            }, {
                                field: "entidad_id",
                                label: "Entidad ID",
                                numeric: !0,
                                sortable: !0
                            }, {
                                field: "programa_desc",
                                label: "Programa",
                                sortable: !0
                            }, {
                                field: "programa_id",
                                label: "Prog ID",
                                numeric: !0,
                                sortable: !0
                            }, {
                                field: "actividad_desc",
                                label: "Actividad",
                                sortable: !0
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
                        TheSharedButton: r.a,
                        TheLinePlotGroup: l
                    },
                    methods: {
                        search: function() {
                            var t = this;
                            "" !== this.words && (this.loading = !0, o.j("".concat(i.a, "/buscar?q=").concat(this.words, "&filtro=").concat(this.filterBy)).then(function(e) {
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
                            }), t.push(a), this.checkedRows.forEach(function(o) {
                                a = [], e.forEach(function(t) {
                                    var e = o[t] ? String(o[t]).replace(/,/g, " ") : "";
                                    a.push(e)
                                }), t.push(a)
                            });
                            var o = "data:text/csv;charset=utf-8,";
                            t.forEach(function(t) {
                                var e = t.join(",");
                                o += e + "\r\n"
                            });
                            var i = encodeURI(o),
                                r = document.createElement("a");
                            r.setAttribute("href", i), r.setAttribute("download", "presupuesto_filtrado.csv"), document.body.appendChild(r), r.click()
                        }
                    }
                },
                u = (a(169), Object(s.a)(d, function() {
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
                            "native-value": "entidad"
                        },
                        model: {
                            value: t.filterBy,
                            callback: function(e) {
                                t.filterBy = e
                            },
                            expression: "filterBy"
                        }
                    }, [t._v("\n                  Entidad\n              ")]), t._v(" "), a("b-radio", {
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
                                }))], 1), t._v(" "), t._l(t.columns, function(o, i) {
                                    return a("b-table-column", {
                                        key: i,
                                        attrs: {
                                            label: o.label
                                        }
                                    }, [t._v("\n                    " + t._s(e.row[o.field]) + "\n                  ")])
                                })]
                            }
                        }])
                    })], 1)], 1), t._v(" "), 0 !== t.checkedRows.length ? a("div", {
                        staticClass: "is-pulled-right ff"
                    }, [a("b-field", [a("b-select", {
                        attrs: {
                            placeholder: "Select a character"
                        },
                        model: {
                            value: t.plotBy,
                            callback: function(e) {
                                t.plotBy = e
                            },
                            expression: "plotBy"
                        }
                    }, [a("option", {
                        attrs: {
                            value: "credito_presupuestado"
                        }
                    }, [t._v("Presupuestado")]), t._v(" "), a("option", {
                        attrs: {
                            value: "credito_vigente"
                        }
                    }, [t._v("Vigente")]), t._v(" "), a("option", {
                        attrs: {
                            value: "credito_comprometido"
                        }
                    }, [t._v("Comprometido")]), t._v(" "), a("option", {
                        attrs: {
                            value: "credito_devengado"
                        }
                    }, [t._v("Devengado")]), t._v(" "), a("option", {
                        attrs: {
                            value: "credito_pagado"
                        }
                    }, [t._v("Pagado")])])], 1), t._v(" "), a("the-shared-button", {
                        attrs: {
                            title: "evolucion_presupuesto",
                            plotName: "evolutionSearch"
                        }
                    })], 1) : t._e(), t._v(" "), 0 !== t.checkedRows.length ? a("the-line-plot-group", {
                        attrs: {
                            data: t.checkedRows,
                            plotBy: t.plotBy
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
                }], !1, null, "9337e630", null));
            u.options.__file = "comparador.vue";
            e.default = u.exports
        }
    }
]);