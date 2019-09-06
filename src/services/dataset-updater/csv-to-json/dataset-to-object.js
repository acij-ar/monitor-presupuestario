const fs = require('fs');
const readCSV = require('../../../utils/read-csv');
const {datasets} = require('../../../config');
const normalizeName = require('../../../utils/normalize-name');

const categories = datasets.columns
    .filter(({categoryLevel}) => typeof categoryLevel === 'number')
    .sort((datasetA, datasetB) => datasetA.categoryLevel - datasetB.categoryLevel)
    .map(({name}) => name);
const numericColumns = datasets.columns
    .filter(({isNumeric}) => isNumeric)
    .map(({name}) => name);

const addNumericColumns = ({scopedObject, row, year}) => {
    numericColumns.map(column => {
        scopedObject[column] += row[column];
    });
    if (year < 2016) {
        scopedObject.credito_original += row.credito_presupuestado
    }
};

const processRowIntoObject = ({row, dbObject, year}) => {
    let scopedObject = dbObject;
    addNumericColumns({row, scopedObject, year});
    scopedObject = scopedObject.dependencias;
    categories.map((category, index) => {
        const rawName = row[category];
        const entityName = normalizeName(rawName);
        if (!scopedObject[entityName]) {
            scopedObject[entityName] = {};
            if (index !== categories.length - 1) {
                scopedObject[entityName].dependencias = {};
            }
            numericColumns.map(column => {
                scopedObject[entityName][column] = 0;
                scopedObject[entityName]['credito_original'] = 0;
            })
        }
        addNumericColumns({row, scopedObject: scopedObject[entityName]});
        scopedObject = scopedObject[entityName].dependencias;
    })
};

module.exports = async ({filePath, dbObject, jsonPath, year}) => {
    await readCSV({
        path: filePath,
        onData: (row) => {
            numericColumns.map(column => {
                row[column] = parseInt(row[column]);
            });
            processRowIntoObject({row, dbObject, year})
        }
    });
    const dbString = JSON.stringify(dbObject, null, 2);
    fs.writeFileSync(jsonPath, dbString);
    console.log(`Finished processing ${jsonPath}`);
};
