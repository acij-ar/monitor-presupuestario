const parseNumericValue = require('./parse-numeric-value');

/**
 * Converts columns with string representations of numbers into
 * their numeric equivalent values
 *
 * @param {object} row - Row with columns to be parsed
 * @param {string} row.credito_presupuestado - String representation of number
 * @param {string} row.credito_vigente - String representation of number
 * @param {string} row.credito_comprometido - String representation of number
 * @param {string} row.credito_devengado - String representation of number
 * @param {string} row.credito_pagado - String representation of number
 * @returns {object} - Row with parsed columns
 */
module.exports = (row) => {
  row.credito_presupuestado = parseNumericValue(row.credito_presupuestado);
  row.credito_vigente = parseNumericValue(row.credito_vigente);
  row.credito_comprometido = parseNumericValue(row.credito_comprometido);
  row.credito_devengado = parseNumericValue(row.credito_devengado);
  row.credito_pagado = parseNumericValue(row.credito_pagado);
  return row;
};
