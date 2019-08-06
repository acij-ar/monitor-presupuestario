const fs = require('fs');
const db = require('../../../db');
const {jsonPath} = require('../../../../config').db;
const insertWithInflation = require('./insert-with-inflation');

const updateJurisdiction = async (jurisdiccion) => {
    const {lastID} = await insertWithInflation.insert({tableName: 'jurisdicciones', object: jurisdiccion});
    const entityInsertPromises = Object.keys(jurisdiccion.dependencies).map(entidad => (
        updateEntity({
            year: jurisdiccion.year,
            name: entidad,
            jurisdiccion_id: lastID,
            ...jurisdiccion.dependencies[entidad]
        })
    ));
    return Promise.all(entityInsertPromises);
};

const updateEntity = async (entity) => {
    const extraColumns = ['jurisdiccion_id'];
    const {lastID} = await insertWithInflation.insert({tableName: 'entidades', extraColumns, object: entity});
    const programInsertPromises = Object.keys(entity.dependencies).map(program => (
        updateProgram({
            year: entity.year,
            name: program,
            jurisdiccion_id: entity.jurisdiccion_id,
            entidad_id: lastID,
            ...entity.dependencies[program]
        })
    ));
    return Promise.all(programInsertPromises);
};

const updateProgram = async (program) => {
    const extraColumns = ['jurisdiccion_id', 'entidad_id'];
    const {lastID} = await insertWithInflation.insert({tableName: 'programas', extraColumns, object: program});
    const activityInstertPromises = Object.keys(program.dependencies).map(activity => (
        updateActivity({
            year: program.year,
            name: activity,
            jurisdiccion_id: program.jurisdiccion_id,
            entidad_id: program.entidad_id,
            programa_id: lastID,
            ...program.dependencies[activity]
        })
    ));
    return Promise.all(activityInstertPromises);
};

const updateActivity = (activity) => {
    const extraColumns = ['jurisdiccion_id', 'entidad_id', 'programa_id'];
    return insertWithInflation.insert({tableName: 'actividades', extraColumns, object: activity});
};

module.exports = async() => {
    await db.initPromise;
    await insertWithInflation.init();
    const jsonContent = fs.readFileSync(jsonPath);
    const jsonDB = JSON.parse(jsonContent);
    await Object.keys(jsonDB).map(year => {
        const jurisdictionInsertPromises = Object.keys(jsonDB[year]).map(jurisdiccion => {
            if (typeof jsonDB[year][jurisdiccion] !== 'number') {
                return updateJurisdiction({
                    name: jurisdiccion,
                    year: year,
                    ...jsonDB[year][jurisdiccion]
                })
            }
            return Promise.resolve();
        });
        return Promise.all(jurisdictionInsertPromises);
    });
};
