const fs = require('fs');
const db = require('../../db');
const {jsonPath} = require('../../../config').db;

const insertInto = ({tableName, keys, object}) => {
    const columns = keys.join(', ');
    const values = keys.map(key => object[key]);
    const placeholders = values.map(() => '?').join(', ');
    return db.sqlite.run(`INSERT INTO ${tableName}(${columns}) VALUES(${placeholders})`, values)
};

const baseKeys = [
    'name', 'year', 'credito_presupuestado', 'credito_vigente',
    'credito_comprometido', 'credito_devengado', 'credito_pagado'
];

const updateJurisdiction = async (jurisdiccion) => {
    const {lastID} = await insertInto({tableName: 'jurisdicciones', keys: baseKeys, object: jurisdiccion});
    Object.keys(jurisdiccion.dependencies).map(entidad => {
        updateEntity({
            year: jurisdiccion.year,
            name: entidad,
            jurisdiccion_id: lastID,
            ...jurisdiccion.dependencies[entidad]
        })
    });
};

const updateEntity = async (entity) => {
    const keys = ['jurisdiccion_id', ...baseKeys];
    const {lastID} = await insertInto({tableName: 'entidades', keys, object: entity});
    Object.keys(entity.dependencies).map(program => {
        updateProgram({
            year: entity.year,
            name: program,
            jurisdiccion_id: entity.jurisdiccion_id,
            entidad_id: lastID,
            ...entity.dependencies[program]
        })
    })
};

const updateProgram = async (program) => {
    const keys = ['jurisdiccion_id', 'entidad_id', ...baseKeys];
    const {lastID} = await insertInto({tableName: 'programas', keys, object: program});
    Object.keys(program.dependencies).map(activity => {
        updateActivity({
            year: program.year,
            name: activity,
            jurisdiccion_id: program.jurisdiccion_id,
            entidad_id: program.entidad_id,
            programa_id: lastID,
            ...program.dependencies[activity]
        })
    })
};

const updateActivity = (activity) => {
    const keys = ['jurisdiccion_id', 'entidad_id', 'programa_id', ...baseKeys];
    insertInto({tableName: 'actividades', keys, object: activity});
};

module.exports = async() => {
    await db.initPromise;
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
