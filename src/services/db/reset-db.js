const db = require('./index');

module.exports = () => {
    db.sqlite.prepare('DROP TABLE IF EXISTS entidades').run();
    db.sqlite.prepare('DROP TABLE IF EXISTS presupuestos').run();
    db.sqlite.prepare(`CREATE TABLE entidades(
        id              INTEGER PRIMARY KEY AUTOINCREMENT,
        name            TEXT NOT NULL,
        entity_type     TEXT NOT NULL
        parent_id       INTEGER,
        UNIQUE(name, parent_id)
    )`).run();
    db.sqlite.prepare(`CREATE TABLE presupuestos(
        entity_id                                   INTEGER NOT NULL,
        year                                        INTEGER NOT NULL,
        credito_presupuestado                       INTEGER NOT NULL,
        credito_vigente                             INTEGER NOT NULL,
        credito_comprometido                        INTEGER NOT NULL,
        credito_devengado                           INTEGER NOT NULL,
        credito_pagado                              INTEGER NOT NULL,
        credito_original                            INTEGER NOT NULL,
        credito_presupuestado_ajustado              INTEGER NOT NULL,
        credito_vigente_ajustado                    INTEGER NOT NULL,
        credito_comprometido_ajustado               INTEGER NOT NULL,
        credito_devengado_ajustado                  INTEGER NOT NULL,
        credito_pagado_ajustado                     INTEGER NOT NULL,
        credito_original_ajustado                   INTEGER NOT NULL,
        credito_original_posiblemente_modificado    BOOLEAN NOT NULL,
        CONSTRAINT foreign_key_entity FOREIGN KEY (entity_id) REFERENCES entidades (id),
        UNIQUE(year, entity_id)
    )`);
};
