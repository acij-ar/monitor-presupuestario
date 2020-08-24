module.exports = (params) => {
  const conditions = [];
  const queryParams = [];

  if (params.year) {
    conditions.push('ejercicio_presupuestario = ?');
    queryParams.push(params.year);
  } else if (params.years) {
    const yearConditions = params.years.map(year => {
      queryParams.push(year);
      return 'ejercicio_presupuestario = ?'
    })
    conditions.push(`(${yearConditions.join(' OR ')})`)
  }
  if (params.jurisdiction || params.jurisdiccion_desc) {
    conditions.push('jurisdiccion_desc = ?');
    queryParams.push(params.jurisdiction || params.jurisdiccion_desc);
  }
  if (params.entity || params.entidad_desc) {
    conditions.push('entidad_desc = ?');
    queryParams.push(params.entity || params.entidad_desc);
  }
  if (params.program || params.programa_desc) {
    conditions.push('programa_desc = ?');
    queryParams.push(params.program || params.programa_desc);
  }
  if (params.activity || params.actividad_desc) {
    conditions.push('actividad_desc = ?');
    queryParams.push(params.activity || params.actividad_desc);
  }

  return {
    whereConditions: conditions.join(' AND '),
    whereParams: queryParams,
  };
};
