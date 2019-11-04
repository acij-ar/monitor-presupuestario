const normalizeName = require('../../../utils/normalize-name');
const baseJSONObject = require('./base-json-object');

/**
 * Adds the different budget types from the parsed row from the dataset
 * to the js object that will be saved in the json file of that years budget
 *
 * @param {object} params - Object with params as properties
 * @param {object} params.scopedObject - Js object representing the budget of the dependency
 * @param {object} params.row - Parsed row of the budget from the dataset
 * @param {number} params.year - Year of the budget
 */
const addNumericColumns = ({scopedObject, row, year}) => {
  scopedObject.credito_presupuestado += row.credito_presupuestado;
  scopedObject.credito_vigente += row.credito_vigente;
  scopedObject.credito_comprometido += row.credito_comprometido;
  scopedObject.credito_devengado += row.credito_devengado;
  scopedObject.credito_pagado += row.credito_pagado;
  if (year < 2016) {
    scopedObject.credito_original += row.credito_presupuestado;
  }
};

/**
 * Iterates through the different sub-dependencies of the row and adds its budgets
 * to the js object that represents the budget of the year
 *
 * @param {object} params - Object with params as properties
 * @param {object} params.dbObject - Js object representing the budget of the whole year
 * @param {object} params.row - Parsed row of the budget from the dataset
 * @param {number} params.year - Year of the budget
 */
module.exports = ({row, dbObject, year}) => {
  let scopedObject = dbObject;
  addNumericColumns({row, scopedObject, year});
  scopedObject = scopedObject.dependencias;
  const dependenciesTypes = ['jurisdiccion_desc', 'entidad_desc', 'programa_desc', 'actividad_desc' ];
  dependenciesTypes.map((dependencyType, index) => {
    const rawName = row[dependencyType];
    const entityName = normalizeName(rawName);
    scopedObject[entityName] = scopedObject[entityName] || baseJSONObject(index !== dependenciesTypes.length - 1);
    addNumericColumns({row, scopedObject: scopedObject[entityName], year});
    scopedObject = scopedObject[entityName].dependencias;
  });
};

