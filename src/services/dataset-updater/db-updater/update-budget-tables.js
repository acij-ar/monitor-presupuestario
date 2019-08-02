const fs = require('fs');
const db = require('../../db');
const { jsonPath } = require('../../../config').db;

const updateJurisdiction = async (jurisdiccion) => {
    const {
        name, year, credito_presupuestado, credito_vigente,
        credito_comprometido, credito_devengado, credito_pagado
    } = jurisdiccion;
    const { lastID } = await db.sqlite.run(
        `INSERT INTO jurisdicciones(
            year, name, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado
        ) VALUES(?, ?, ?, ?, ?, ?, ?)`,
        [year, name, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado]
    );
    Object.keys(jurisdiccion.dependencies).map(entidad => {
        updateEntity({
            year,
            name: entidad,
            jurisdiccion_id: lastID,
            ...jurisdiccion.dependencies[entidad]
        })
    });
};

const updateEntity = async (entity) => {
    const {
        name, year, credito_presupuestado, credito_vigente,
        credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id
    } = entity;
    const { lastID } = await db.sqlite.run(
        `INSERT INTO entidades(
            year, name, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id
        ) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`,
        [year, name, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id]
    );
    Object.keys(entity.dependencies).map(program => {
        updateProgram({
            year,
            name: program,
            jurisdiccion_id,
            entidad_id: lastID,
            ...entity.dependencies[program]
        })
    })
};

const updateProgram = async (program) => {
    const {
        name, year, credito_presupuestado, credito_vigente,
        credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id, entidad_id
    } = program;
    const { lastID } = await db.sqlite.run(
        `INSERT INTO programas(
            year, name, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id, entidad_id
        ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [year, name, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id, entidad_id]
    );
    Object.keys(program.dependencies).map(activity => {
        updateActivity({
            year,
            name: activity,
            jurisdiccion_id,
            entidad_id,
            programa_id: lastID,
            ...program.dependencies[activity]
        })
    })
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
        [year, name, credito_presupuestado, credito_vigente, credito_comprometido, credito_devengado, credito_pagado, jurisdiccion_id, entidad_id, programa_id]
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
