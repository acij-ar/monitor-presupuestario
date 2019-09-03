const _ = require('lodash');

module.exports = ({correction, jsonObject}) => {
  const budgetCorrection = parseInt(correction.aumento) + parseInt(correction.credito_original);
  let targetObject = jsonObject;
  if (!isNaN(budgetCorrection)) {
    targetObject.credito_original += budgetCorrection;
  }
  ['jurisdiccion', 'entidad', 'programa', 'actividad'].map(category => {
    const targetName = _.deburr(correction[category]);
    if (targetName && targetObject.dependencias[targetName]) {
      targetObject = targetObject.dependencias[targetName];
      if (!isNaN(budgetCorrection)) {
        targetObject.credito_original += budgetCorrection;
      }
    } else if (targetName) {
      console.log(`Warning: can't find ${JSON.stringify(correction, null, 2)}`);
      console.log(targetName);
      console.log(JSON.stringify(Object.keys(targetObject.dependencias), null, 2))
    }
  });
  if (isNaN(budgetCorrection)) {
    targetObject.credito_original_posiblemente_modificado = true;
  }
  return targetObject;
};
