const parseNumericValue = require('./parse-numeric-value');

module.exports = (row) => {
  row.credito_presupuestado = parseNumericValue(row.credito_presupuestado);
  row.credito_vigente = parseNumericValue(row.credito_vigente);
  row.credito_comprometido = parseNumericValue(row.credito_comprometido);
  row.credito_devengado = parseNumericValue(row.credito_devengado);
  row.credito_pagado = parseNumericValue(row.credito_pagado);
  return row;
};
