const fs = require('fs');
const db = require('../../db');
const { jsonPath } = require('../../../config').db;

const updateJurisdiction = (jurisdiccion) => {
    const {
        name, year, credito_presupuestado, credito_vigente,
        credito_comprometido, credito_devengado, credito_pagado
    } = jurisdiccion;
    db.sqlite.run(
        `INSERT INTO jurisdicciones(
            year, name, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado
        ) VALUES(?, ?, ?, ?, ?, ?, ?)`,
        [year, name, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado],
        function (err) {
            if (err) {
                throw err;
            }
            Object.keys(jurisdiccion.dependencies).map(entidad => {
                updateEntity({
                    year,
                    name: entidad,
                    jurisdiccion_id: this.lastID,
                    ...jurisdiccion.dependencies[entidad]
                })
            })
        }
    );
};

const updateEntity = (entity) => {
    const {
        name, year, credito_presupuestado, credito_vigente,
        credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id
    } = entity;
    db.sqlite.run(
        `INSERT INTO entidades(
            year, name, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id
        ) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`,
        [year, name, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id],
        function (err) {
            if (err) {
                throw err;
            }
            Object.keys(entity.dependencies).map(program => {
                updateProgram({
                    year,
                    name: program,
                    jurisdiccion_id,
                    entidad_id: this.lastID,
                    ...entity.dependencies[program]
                })
            })
        }
    );
};

const updateProgram = (program) => {
    const {
        name, year, credito_presupuestado, credito_vigente,
        credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id, entidad_id
    } = program;
    db.sqlite.run(
        `INSERT INTO programas(
            year, name, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id, entidad_id
        ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [year, name, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id, entidad_id],
        function (err) {
            if (err) {
                throw err;
            }
            Object.keys(program.dependencies).map(activity => {
                updateActivity({
                    year,
                    name: activity,
                    jurisdiccion_id,
                    entidad_id,
                    programa_id: this.lastID,
                    ...program.dependencies[activity]
                })
            })
        }
    );
};

const updateActivity = (activity) => {
    const {
        name, year, credito_presupuestado, credito_vigente,
        credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id, entidad_id, programa_id
    } = activity;
    db.sqlite.run(
        `INSERT INTO actividades(
            year, name, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id, entidad_id, programa_id
        ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [year, name, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id, entidad_id, programa_id],
        function (err) {
            if (err) {
                console.log(activity);
                throw err;
            }
        }
    );
};

module.exports = () => {
    const jsonContent = fs.readFileSync(jsonPath);
    const jsonDB = JSON.parse(jsonContent);
    Object.keys(jsonDB).map(year => {
        Object.keys(jsonDB[year]).map(jurisdiccion => {
            if (typeof jsonDB[year][jurisdiccion] !== 'number') {
                updateJurisdiction({
                    name: jurisdiccion,
                    year: year,
                    ...jsonDB[year][jurisdiccion]
                })
            }
        })
    });
};
