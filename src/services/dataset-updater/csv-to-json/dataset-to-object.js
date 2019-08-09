const fs = require('fs');
const csv = require('fast-csv');
const {datasets} = require('../../../config');

const categories = datasets.columns
    .filter(({categoryLevel}) => typeof categoryLevel === 'number')
    .sort((datasetA, datasetB) => datasetA.categoryLevel - datasetB.categoryLevel)
    .map(({name}) => name);
const numericColumns = datasets.columns
    .filter(({isNumeric}) => isNumeric)
    .map(({name}) => name);

const addNumericColumns = ({scopedObject, row, inflation}) => (
    numericColumns.map(column => {
        scopedObject[column] += row[column];
        scopedObject[`${column}_ajustado`] += Math.floor(row[column] * inflation);
    })
);

const processRowIntoObject = ({row, dbObject, inflation}) => {
    let scopedObject = dbObject;
    addNumericColumns({row, scopedObject, inflation});
    scopedObject = scopedObject.dependencias;
    categories.map((category, index) => {
        const entityName = row[category];
        if (!scopedObject[entityName]) {
            scopedObject[entityName] = {};
            if (index !== categories.length - 1) {
                scopedObject[entityName].dependencias = {};
            }
            numericColumns.map(column => {
                scopedObject[entityName][column] = 0;
                scopedObject[entityName][`${column}_ajustado`] = 0;
            })
        }
        addNumericColumns({row, scopedObject: scopedObject[entityName], inflation});
        scopedObject = scopedObject[entityName].dependencias;
    })
};

module.exports = async ({filePath, dbObject, inflation, jsonPath}) => {
    const processPromise = new Promise(resolve => (
        fs.createReadStream(filePath)
            .pipe(csv.parse({headers: true}))
            .on('data', row => {
                numericColumns.map(column => {
                    row[column] = parseInt(row[column]);
                });
                processRowIntoObject({row, dbObject, inflation})
            })
            .on('end', () => {
                resolve();
            })
    ));
    await processPromise;
    console.log(`Writing ${jsonPath}`);
    const dbString = JSON.stringify(dbObject, null, 2);
    fs.writeFileSync(jsonPath, dbString);
    console.log(`Finished processing ${jsonPath}`);
};
