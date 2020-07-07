module.exports = (params) => {
  const conditions = [];
  const queryParams = [];

  if (params.year) {
    conditions.push('ejercicio = ?');
    queryParams.push(params.year);
  }
  if (params.jurisdiction) {
    conditions.push('jurisdiccion_desc = ?');
    queryParams.push(params.jurisdiction);
  }
  if (params.entity) {
    conditions.push('entidad_desc = ?');
    queryParams.push(params.entity);
  }
  if (params.program) {
    conditions.push('programa_desc = ?');
    queryParams.push(params.program);
  }
  if (params.activity) {
    conditions.push('actividad_desc = ?');
    queryParams.push(params.activity);
  }

  return {
    whereConditions: conditions.join(' AND '),
    whereParams: queryParams,
  };
};
