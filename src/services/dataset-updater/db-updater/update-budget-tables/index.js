const fs = require('fs');
const {datasets: { files }} = require('../../../../config');
const insertWithInflation = require('./insert-with-inflation');

const updateYear = ({jsonPath, year}) => {
    console.log(`Updating db for year ${year}`);
    const jsonContent = fs.readFileSync(jsonPath);
    const jsonDB = JSON.parse(jsonContent);
    jsonDB.year = year;
    jsonDB.name = 'Presupuesto total';
    insertWithInflation.insert({tableName: 'años', object: jsonDB});
    Object.keys(jsonDB.dependencias).map(jurisdiccion => (
        updateJurisdiction({
            name: jurisdiccion,
            year: year,
            ...jsonDB.dependencias[jurisdiccion]
        })
    ));
};

const updateJurisdiction = (jurisdiccion) => {
    const {lastInsertRowid} = insertWithInflation.insert({tableName: 'jurisdicciones', object: jurisdiccion});
    Object.keys(jurisdiccion.dependencias).map(entidad => (
        updateEntity({
            year: jurisdiccion.year,
            name: entidad,
            jurisdiccion_id: lastInsertRowid,
            ...jurisdiccion.dependencias[entidad]
        })
    ));
};

const updateEntity = (entity) => {
    const extraColumns = ['jurisdiccion_id'];
    const {lastInsertRowid} = insertWithInflation.insert({tableName: 'entidades', extraColumns, object: entity});
    Object.keys(entity.dependencias).map(program => (
        updateProgram({
            year: entity.year,
            name: program,
            jurisdiccion_id: entity.jurisdiccion_id,
            entidad_id: lastInsertRowid,
            ...entity.dependencias[program]
        })
    ));
};

const updateProgram = (program) => {
    const extraColumns = ['jurisdiccion_id', 'entidad_id'];
    const {lastInsertRowid} = insertWithInflation.insert({tableName: 'programas', extraColumns, object: program});
    Object.keys(program.dependencias).map(activity => (
        updateActivity({
            year: program.year,
            name: activity,
            jurisdiccion_id: program.jurisdiccion_id,
            entidad_id: program.entidad_id,
            programa_id: lastInsertRowid,
            ...program.dependencias[activity]
        })
    ));
};

const updateActivity = (activity) => {
    const extraColumns = ['jurisdiccion_id', 'entidad_id', 'programa_id'];
    return insertWithInflation.insert({tableName: 'actividades', extraColumns, object: activity});
};

module.exports = async() => {
    await insertWithInflation.init();
    files.filter(file => file.isYearDataset).map(updateYear);
};
