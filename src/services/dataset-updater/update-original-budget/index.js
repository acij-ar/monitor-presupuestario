const fs = require('fs');
const readCSV = require('../../../utils/read-csv');
const _ = require('lodash');
const {datasets: { files }} = require('../../../config');
const loadInflationDataset = require('../db-updater/load-inflation-dataset');

const markAllChildrenAsPossiblyModified = (jsonObject) => {
    if (jsonObject.dependencias) {
        Object.keys(jsonObject.dependencias).map(name => {
            jsonObject.dependencias[name].credito_original_posiblemente_modificado = true;
            markAllChildrenAsPossiblyModified(jsonObject.dependencias[name])
        })
    }
};

const updateBudgetInObject = ({correction, jsonObject, inflation}) => {
    const budgetCorrection = parseInt(correction.aumento);
    let targetObject = jsonObject;
    if (!isNaN(budgetCorrection)) {
        targetObject.credito_original += budgetCorrection;
        targetObject.credito_original_ajustado += budgetCorrection * inflation;
    }
    ['jurisdiccion', 'entidad', 'programa', 'actividad'].map(category => {
        const targetName = _.deburr(correction[category]);
        if (targetName && targetObject.dependencias[targetName]) {
            targetObject = targetObject.dependencias[targetName];
            if (!isNaN(budgetCorrection)) {
                targetObject.credito_original += budgetCorrection;
                targetObject.credito_original_ajustado += budgetCorrection * inflation;
            }
        } else if (targetName) {
            console.log(`Warning: can't find ${JSON.stringify(correction, null, 2)}`)
            console.log(targetName);
            console.log(JSON.stringify(Object.keys(targetObject.dependencias), null, 2))
        }
    });
    if (isNaN(budgetCorrection)) {
        targetObject.credito_original_posiblemente_modificado = true;
    }
    return targetObject;
};

const updateOriginalBudgetForYear = async ({filePath, year}) => {
    const dataset = [];
    await readCSV({
        path: filePath,
        onData: row => dataset.push(row),
    });
    const inflationDataset = await loadInflationDataset();
    const inflation = inflationDataset[year];
    const {jsonPath} = files.find(file => file.isYearDataset && year === file.year);
    const jsonContent = fs.readFileSync(jsonPath);
    const jsonObject = JSON.parse(jsonContent);
    dataset.map(correction => {
        const targetObject = updateBudgetInObject({correction, jsonObject, inflation});
        if (correction.marcar_hijos_con_posible_reasignacion) {
            markAllChildrenAsPossiblyModified(targetObject)
        }
    });
    const newJsonContent = JSON.stringify(jsonObject, null, 2);
    fs.writeFileSync(jsonPath, newJsonContent);
};

module.exports = async () => {
    console.log('Updating original budgets');
    const updatePromises = files
        .filter(({isOriginalDataset}) => isOriginalDataset)
        .map(updateOriginalBudgetForYear);
    await Promise.all(updatePromises);
};
