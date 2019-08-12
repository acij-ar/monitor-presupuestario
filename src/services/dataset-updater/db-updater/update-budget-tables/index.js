const fs = require('fs');
const db = require('../../../db');
const {datasets: { files }} = require('../../../../config');
const insertWithInflation = require('./insert-with-inflation');

const updateYear = async ({jsonPath, year}) => {
    const jsonContent = fs.readFileSync(jsonPath);
    const jsonDB = JSON.parse(jsonContent);
    jsonDB.year = year;
    jsonDB.name = 'Presupuesto total';
    await insertWithInflation.insert({tableName: 'años', object: jsonDB});
    const jurisdictionPromsies = Object.keys(jsonDB.dependencias).map(jurisdiccion => (
        updateJurisdiction({
            name: jurisdiccion,
            year: year,
            ...jsonDB.dependencias[jurisdiccion]
        })
    ));
    return Promise.all(jurisdictionPromsies)
};

const updateJurisdiction = async (jurisdiccion) => {
    const {lastID} = await insertWithInflation.insert({tableName: 'jurisdicciones', object: jurisdiccion});
    const entityInsertPromises = Object.keys(jurisdiccion.dependencias).map(entidad => (
        updateEntity({
            year: jurisdiccion.year,
            name: entidad,
            jurisdiccion_id: lastID,
            ...jurisdiccion.dependencias[entidad]
        })
    ));
    return Promise.all(entityInsertPromises);
};

const updateEntity = async (entity) => {
    const extraColumns = ['jurisdiccion_id'];
    const {lastID} = await insertWithInflation.insert({tableName: 'entidades', extraColumns, object: entity});
    const programInsertPromises = Object.keys(entity.dependencias).map(program => (
        updateProgram({
            year: entity.year,
            name: program,
            jurisdiccion_id: entity.jurisdiccion_id,
            entidad_id: lastID,
            ...entity.dependencias[program]
        })
    ));
    return Promise.all(programInsertPromises);
};

const updateProgram = async (program) => {
    const extraColumns = ['jurisdiccion_id', 'entidad_id'];
    const {lastID} = await insertWithInflation.insert({tableName: 'programas', extraColumns, object: program});
    const activityInstertPromises = Object.keys(program.dependencias).map(activity => (
        updateActivity({
            year: program.year,
            name: activity,
            jurisdiccion_id: program.jurisdiccion_id,
            entidad_id: program.entidad_id,
            programa_id: lastID,
            ...program.dependencias[activity]
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
    const updatePromises = files.filter(({isYearDataset}) => isYearDataset).map(updateYear);
    await Promise.all(updatePromises);
};
