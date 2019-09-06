const {datasets} = require('../../../config');
const normalizeName = require('../../../utils/normalize-name');
const numericColumns = datasets.columns
  .filter(({isNumeric}) => isNumeric)
  .map(({name}) => name);

const getBudgetCorrention = (correction) => {
  const increase = parseInt(correction.aumento);
  const increaseOrZero = isNaN(increase) ? 0 : increase;
  const original = parseInt(correction.credito_original);
  const originalOrZero = isNaN(original) ? 0 : original;
  return originalOrZero + increaseOrZero;
};

const findBestMatch = (targetName, dependencies) => {
  if (dependencies) {
    const normalizedTargetName = normalizeName(targetName.toLowerCase());
    const dependenciesNames = Object.keys(dependencies);
    return dependenciesNames.find(name => normalizeName(name.toLocaleLowerCase()) === normalizedTargetName);
  }
  return null;
};

module.exports = ({correction, jsonObject}) => {
  const budgetCorrection = getBudgetCorrention(correction);
  let targetObject = jsonObject;
  targetObject.credito_original += budgetCorrection;
  let found = true;
  ['jurisdiccion', 'entidad', 'programa', 'actividad'].map(category => {
    const targetName = normalizeName(correction[category]);
    const bestMatch = findBestMatch(targetName, targetObject.dependencias);
    if (targetName && bestMatch && targetObject.dependencias[bestMatch]) {
      targetObject = targetObject.dependencias[bestMatch];
      if (!isNaN(budgetCorrection)) {
        targetObject.credito_original += budgetCorrection;
      }
    } else if(targetName.toLowerCase().includes('erogaciones')) {
      targetObject.dependencias[targetName] = {
        dependencias: {}
      };
      targetObject = targetObject.dependencias[targetName];
      numericColumns.map(col => {
        targetObject[col] = 0;
      });
      targetObject.credito_original = budgetCorrection;
    } else if (targetName) {
      found = false;
    }
  });
  return {
    targetObject,
    found,
  };
};
