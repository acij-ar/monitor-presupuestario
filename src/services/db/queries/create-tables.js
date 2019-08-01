module.exports = [
    `
        CREATE TABLE IF NOT EXISTS jurisdicciones(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            year INTEGER NOT NULL, 
            name TEXT NOT NULL,
            credito_presupuestado INTEGER DEFAULT 0 NOT NULL,
            credito_vigente INTEGER DEFAULT 0 NOT NULL,
            credito_comprometido INTEGER DEFAULT 0 NOT NULL,
            credito_devengado INTEGER DEFAULT 0 NOT NULL,
            credito_pagado INTEGER DEFAULT 0 NOT NULL,
            UNIQUE(year, name)
        )
    `,
    `
        CREATE TABLE IF NOT EXISTS entidades(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            year INTEGER NOT NULL,
            jurisdiccion_id INTEGER NOT NULL, 
            name TEXT NOT NULL,
            credito_presupuestado INTEGER DEFAULT 0 NOT NULL,
            credito_vigente INTEGER DEFAULT 0 NOT NULL,
            credito_comprometido INTEGER DEFAULT 0 NOT NULL,
            credito_devengado INTEGER DEFAULT 0 NOT NULL,
            credito_pagado INTEGER DEFAULT 0 NOT NULL,
            CONSTRAINT foreign_key_jurisdiccion FOREIGN KEY (jurisdiccion_id) REFERENCES jurisdicciones (id),
            UNIQUE(year, jurisdiccion_id, name)
        )
    `,
    `
        CREATE TABLE IF NOT EXISTS programas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            year INTEGER NOT NULL,
            jurisdiccion_id INTEGER NOT NULL,
            entidad_id INTEGER NOT NULL, 
            name TEXT NOT NULL,
            credito_presupuestado INTEGER DEFAULT 0 NOT NULL,
            credito_vigente INTEGER DEFAULT 0 NOT NULL,
            credito_comprometido INTEGER DEFAULT 0 NOT NULL,
            credito_devengado INTEGER DEFAULT 0 NOT NULL,
            credito_pagado INTEGER DEFAULT 0 NOT NULL,
            CONSTRAINT foreign_key_jurisdiccion FOREIGN KEY (jurisdiccion_id) REFERENCES jurisdicciones (id),
            CONSTRAINT foreign_key_entidad FOREIGN KEY (entidad_id) REFERENCES entidades (id),
            UNIQUE(year, jurisdiccion_id, entidad_id, name)
        )
    `,
    `
        CREATE TABLE IF NOT EXISTS actividades(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            year INTEGER NOT NULL,
            jurisdiccion_id INTEGER NOT NULL,
            entidad_id INTEGER NOT NULL, 
            programa_id INTEGER NOT NULL, 
            name TEXT NOT NULL,
            credito_presupuestado INTEGER DEFAULT 0 NOT NULL,
            credito_vigente INTEGER DEFAULT 0 NOT NULL,
            credito_comprometido INTEGER DEFAULT 0 NOT NULL,
            credito_devengado INTEGER DEFAULT 0 NOT NULL,
            credito_pagado INTEGER DEFAULT 0 NOT NULL,
            CONSTRAINT foreign_key_jurisdiccion FOREIGN KEY (jurisdiccion_id) REFERENCES jurisdicciones (id),
            CONSTRAINT foreign_key_entidad FOREIGN KEY (entidad_id) REFERENCES entidades (id),
            CONSTRAINT foreign_key_programa FOREIGN KEY (programa_id) REFERENCES programas (id),
            UNIQUE(year, jurisdiccion_id, entidad_id, programa_id, name)
        )
    `,
    `
        CREATE TABLE IF NOT EXISTS inflacion(
            year INTEGER NOT NULL,
            inflacion REAL NOT NULL,
            UNIQUE(year)
        )
    `
];