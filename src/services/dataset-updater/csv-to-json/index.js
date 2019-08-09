const {datasets} = require('../../../config');
const dataset2Object = require('./dataset-to-object');
const loadInflationDataset = require('../db-updater/load-inflation-dataset');

const files = datasets.files.filter(({isYearDataset}) => isYearDataset);
const numericColumns = datasets.columns
    .filter(({isNumeric}) => isNumeric)
    .map(({name}) => name);

const initObject = () => {
    const dbObject = {};
    files.map(({year}) => {
        dbObject[year] = {dependencias: {}};
        numericColumns.map(column => {
            dbObject[year][column] = 0;
            dbObject[year][`${column}_ajustado`] = 0;
        })
    });
    return dbObject;
};

module.exports = async () => {
    console.log('Processing csv files into db.json');
    const dbObject = initObject();
    const inflation = await loadInflationDataset();
    const processDataset = ({filePath, jsonPath, year}) => dataset2Object({
        jsonPath,
        filePath,
        dbObject: dbObject[year],
        inflation: inflation[year]
    });
    const processPromises = files.map(processDataset);
    await Promise.all(processPromises);
};
