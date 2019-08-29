const db = require('./index');

module.exports = () => {
    db.prepare('DROP TABLE IF EXISTS relaciones').run();
    db.prepare('DROP TABLE IF EXISTS presupuestos').run();
    db.prepare('DROP TABLE IF EXISTS entidades').run();
    db.prepare(`CREATE TABLE entidades(
        id              INTEGER PRIMARY KEY AUTOINCREMENT,
        name            TEXT NOT NULL,
        entity_type     TEXT NOT NULL,
        parent_id       INTEGER NOT NULL,
        UNIQUE(name, parent_id)
    )`).run();
    db.prepare(`CREATE TABLE presupuestos(
        id                                          INTEGER PRIMARY KEY AUTOINCREMENT,
        entity_id                                   INTEGER NOT NULL,
        year                                        INTEGER NOT NULL,
        credito_presupuestado                       INTEGER NOT NULL,
        credito_vigente                             INTEGER NOT NULL,
        credito_comprometido                        INTEGER NOT NULL,
        credito_devengado                           INTEGER NOT NULL,
        credito_pagado                              INTEGER NOT NULL,
        credito_original                            INTEGER NOT NULL,
        credito_original_posiblemente_modificado    BOOLEAN NOT NULL,
        CONSTRAINT foreign_key_entity FOREIGN KEY (entity_id) REFERENCES entidades (id),
        UNIQUE(year, entity_id)
    )`).run();
    db.prepare(`CREATE TABLE relaciones(
        id              INTEGER PRIMARY KEY AUTOINCREMENT,
        parent_id       INTEGER NOT NULL,
        child_id        INTEGER NOT NULL,
        UNIQUE(parent_id, child_id)
    )`).run();
};
