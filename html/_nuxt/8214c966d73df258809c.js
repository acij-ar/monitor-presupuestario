(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], {
        161: function(e, a, t) {
            var n = t(175);
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]), n.locals && (e.exports = n.locals);
            (0, t(16).default)("82299910", n, !0, {
                sourceMap: !1
            })
        },
        173: function(e) {
            e.exports = {
                name: "monitor_presupuestario",
                version: "1.0.0",
                description: "Monitor presupuestario es una plataforma en la que encontrarás información de los diferentes organismos, ministerios, secretarías, programas y actividades presupuestarias desde el año 2007 hasta la actualidad y podrás monitorear la asignación y ejecución del presupuesto naciona",
                author: "Fnbellomo",
                private: !0,
                scripts: {
                    dev: "nuxt",
                    build: "nuxt build",
                    start: "nuxt start",
                    generate: "nuxt generate"
                },
                dependencies: {
                    "@fortawesome/fontawesome-svg-core": "^1.2.6",
                    "@fortawesome/free-brands-svg-icons": "^5.4.1",
                    "@fortawesome/free-solid-svg-icons": "^5.4.1",
                    "@fortawesome/vue-fontawesome": "^0.1.1",
                    "cross-env": "^5.2.0",
                    d3: "^5.7.0",
                    "file-saver": "^2.0.0-rc.4",
                    nuxt: "^2.0.0",
                    "nuxt-buefy": "^0.2.1"
                },
                devDependencies: {
                    nodemon: "^1.11.0"
                }
            }
        },
        174: function(e, a, t) {
            "use strict";
            var n = t(161);
            t.n(n).a
        },
        175: function(e, a, t) {
            (e.exports = t(15)(!1)).push([e.i, "\n.is-fullheight[data-v-b7bfe9aa]{background-image:url(/portada_cel.jpg);background-repeat:no-repeat;background-size:contain;background-position:50%;background-color:#1c126b\n}\n@media (max-width:768px){\n.is-fullheight[data-v-b7bfe9aa]{background-image:url(/portada_cel.jpg)\n}\n}\n@media (min-width:769px) and (max-width:1023px){\n.is-fullheight[data-v-b7bfe9aa]{background-image:url(/portada_tablet.jpg)\n}\n}\n@media (min-width:1023px){\n.is-fullheight[data-v-b7bfe9aa]{background-image:url(/portada.png)\n}\n}", ""])
        },
        179: function(e, a, t) {
            "use strict";
            t.r(a);
            var n = t(173),
                i = {
                    data: function() {
                        return {
                            description: n.description
                        }
                    },
                    head: function() {
                        return {
                            title: "Monitor presupuestario"
                        }
                    }
                },
                s = (t(174), t(8)),
                o = Object(s.a)(i, function() {
                    var e = this.$createElement,
                        a = this._self._c || e;
                    return a("div", [a("section", {
                        staticClass: "hero is-success is-fullheight"
                    }, [a("div", {
                        staticClass: "hero-body"
                    }, [a("div", {
                        staticClass: "container is-fluid"
                    }, [a("p", {
                        staticClass: "hide-text"
                    }, [this._v("\n          " + this._s(this.description) + "\n        ")])])])])])
                }, [], !1, null, "b7bfe9aa", null);
            o.options.__file = "index.vue";
            a.default = o.exports
        }
    }
]);