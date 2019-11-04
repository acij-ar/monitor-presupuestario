/**
 * Returns the base object used for the json file of each year
 *
 * @param {boolean} canHaveChildDependencies - Wheter or not the dependency can have sub dependencies
 * @returns {object} - Base object for json file of each year
 */
module.exports = (canHaveChildDependencies = true) => ({
  dependencias: canHaveChildDependencies ? {} : undefined,
  credito_presupuestado: 0,
  credito_vigente: 0,
  credito_comprometido: 0,
  credito_devengado: 0,
  credito_pagado: 0,
  credito_original: 0,
  rows: [],
});