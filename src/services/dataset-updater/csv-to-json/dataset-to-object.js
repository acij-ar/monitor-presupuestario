const fs = require('fs');
const csv = require('fast-csv');
const {datasets} = require('../../../config');
const _ = require('lodash');

const categories = datasets.columns
    .filter(({categoryLevel}) => typeof categoryLevel === 'number')
    .sort((datasetA, datasetB) => datasetA.categoryLevel - datasetB.categoryLevel)
    .map(({name}) => name);
const numericColumns = datasets.columns
    .filter(({isNumeric}) => isNumeric)
    .map(({name}) => name);

const addNumericColumns = ({scopedObject, row, inflation}) => {
    numericColumns.map(column => {
        scopedObject[column] += row[column];
        scopedObject[`${column}_ajustado`] += row[column] * inflation;
    });
    scopedObject['credito_original'] = scopedObject['credito_presupuestado'];
    scopedObject['credito_original_ajustado'] = scopedObject['credito_presupuestado_ajustado'];
};

const processRowIntoObject = ({row, dbObject, inflation}) => {
    let scopedObject = dbObject;
    addNumericColumns({row, scopedObject, inflation});
    scopedObject = scopedObject.dependencias;
    categories.map((category, index) => {
        const entityName = _.deburr(row[category]);
        if (!scopedObject[entityName]) {
            scopedObject[entityName] = {};
            if (index !== categories.length - 1) {
                scopedObject[entityName].dependencias = {};
            }
            numericColumns.map(column => {
                scopedObject[entityName][column] = 0;
                scopedObject[entityName][`${column}_ajustado`] = 0;
                scopedObject[entityName]['credito_original'] = 0;
                scopedObject[entityName]['credito_original_ajustado'] = 0;
            })
        }
        addNumericColumns({row, scopedObject: scopedObject[entityName], inflation});
        scopedObject = scopedObject[entityName].dependencias;
    })
};

module.exports = async ({filePath, dbObject, inflation, jsonPath}) => {
    await new Promise(resolve => (
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
    const dbString = JSON.stringify(dbObject, null, 2);
    fs.writeFileSync(jsonPath, dbString);
    console.log(`Finished processing ${jsonPath}`);
};
