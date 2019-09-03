const _ = require('lodash');

module.exports = ({correction, jsonObject}) => {
  const budgetCorrection = parseInt(correction.aumento) + parseInt(correction.credito_original);
  let targetObject = jsonObject;
  if (!isNaN(budgetCorrection)) {
    targetObject.credito_original += budgetCorrection;
  }
  let found = true;
  ['jurisdiccion', 'entidad', 'programa', 'actividad'].map(category => {
    const targetName = _.deburr(correction[category]);
    if (targetName && targetObject.dependencias[targetName]) {
      targetObject = targetObject.dependencias[targetName];
      if (!isNaN(budgetCorrection)) {
        targetObject.credito_original += budgetCorrection;
      }
    } else if (targetName) {
      found = false;
    }
  });
  if (isNaN(budgetCorrection)) {
    targetObject.credito_original_posiblemente_modificado = true;
  }
  return {
    targetObject,
    found,
  };
};
