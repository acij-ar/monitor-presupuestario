const parseNumericValue = require('./parse-numeric-value');

/**
 * Parse rows. Returns an object with both the raw data and the parsed data.
 * All objects returned from this method have the same structure and attrs.
 *
 * @param {object} params - Row with columns to be parsed
 * @param {object} params.row - Row with columns to be parsed
 * @param {boolean} params.numberUnitsAreMillions - Flag that signals if numeric represent millions
 * @param {boolean} params.usePresupuestadoAsOriginal - Flag that signals if credito_presupuestado should be treated as credito_original
 * @param {number} params.inflation - Inflation for the year
 * @param {string} params.filename - Filename that identifies the origin of the row being parsed
 * @param {number} params.rowIndex - Index of the row in the original file
 * @returns {object} - Object with parsed row
 */
module.exports = ({row, numberUnitsAreMillions, usePresupuestadoAsOriginal, inflation, filename, rowIndex}) => {
  const parse = (string) => parseNumericValue(string || '', numberUnitsAreMillions);

  const original = parse(usePresupuestadoAsOriginal ? row.credito_presupuestado : row.credito_original);
  const presupuestado = parse(row.credito_presupuestado);
  const vigente = parse(row.credito_vigente);
  const comprometido = parse(row.credito_comprometido);
  const devengado = parse(row.credito_devengado);
  const pagado = parse(row.credito_pagado);
  const aumento = parse(row.aumento);
  const marcarHijosConPosibleReasignacion = (row.marcar_hijos_con_posible_reasignacion || '').trim().toLowerCase() === 'si';
  const jurisdiccion = row.jurisdiccion || row.jurisdiccion_desc;
  const entidad = row.entidad || row.entidad_desc;
  const programa = row.programa || row.programa_desc;
  const actividad = row.actividad || row.actividad_desc;

  return {
    raw: row,
    parsed: {
      marcarHijosConPosibleReasignacion,
      pen: {
        jurisdiccion,
        entidad,
        programa,
        actividad,
      },
      origin: {
        filename,
        rowIndex,
        inflation,
      },
      unadjusted: {
        original,
        originalConAumento: original + aumento,
        presupuestado,
        vigente,
        comprometido,
        devengado,
        pagado,
        aumento,
      },
      adjusted: {
        original: original * inflation,
        originalConAumento: (original + aumento) * inflation,
        presupuestado: presupuestado * inflation,
        vigente: vigente * inflation,
        comprometido: comprometido * inflation,
        devengado: devengado * inflation,
        pagado: pagado * inflation,
        aumento: aumento * inflation,
      },
    },
  };
};
