const {datasets} = require('../../config');
const normalizeName = require('../../utils/normalize-name');
const findBestMatch = require('./find-best-match');
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

module.exports = ({correction, jsonObject, year}) => {
  const budgetCorrection = getBudgetCorrention(correction);
  let targetObject = jsonObject;
  targetObject.credito_original += budgetCorrection;
  ['jurisdiccion', 'entidad', 'programa', 'actividad'].map(category => {
    if ([2016, 2017].includes(year) && ['programa', 'actividad'].includes(category) && correction[category]) {
      correction[category] = correction[category].replace(/^\d+ - /, '');
    }
    const targetName = normalizeName(correction[category] || '');
    const bestMatch = findBestMatch(targetName, targetObject.dependencias);
    if (targetName && bestMatch && targetObject.dependencias[bestMatch]) {
      targetObject = targetObject.dependencias[bestMatch];
      if (!isNaN(budgetCorrection)) {
        targetObject.credito_original += budgetCorrection;
      }
    } else if(targetName.toLowerCase().includes('erogaciones')) {
      targetObject.dependencias[targetName] = {
        dependencias: {}
      } ;
      targetObject = targetObject.dependencias[targetName];
      numericColumns.map(col => {
        targetObject[col] = 0;
      });
      targetObject.credito_original = budgetCorrection;
    } else if (targetName) {
      targetObject.dependencias[targetName] = {};
      if (category !== 'actividad') {
        targetObject.dependencias[targetName].dependencias = {};
      }
      numericColumns.map(column => {
        targetObject.dependencias[targetName][column] = 0;
      });
      targetObject = targetObject.dependencias[targetName];
      if (!isNaN(budgetCorrection)) {
        targetObject.credito_original = (targetObject.credito_original || 0) + budgetCorrection;
      }
    }
  });
  return {
    targetObject,
  };
};
