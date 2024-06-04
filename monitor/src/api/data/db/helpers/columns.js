const getSelectedBudget = (params) => {
  const budgetColumns = {
    'Inicial': {
      'Ajustado': 'credito_presupuestado_infl as budget',
      'Sin ajustar': 'credito_presupuestado as budget',
    },
    'Vigente': {
      'Ajustado': 'credito_vigente_infl as budget',
      'Sin ajustar': 'credito_vigente as budget',
    },
    'Devengado': {
      'Ajustado': 'credito_devengado_infl as budget',
      'Sin ajustar': 'credito_devengado as budget',
    },
    'all': {
      'Ajustado': 'credito_presupuestado_infl as original, credito_vigente_infl as vigente, credito_devengado_infl as devengado',
      'Sin ajustar': 'credito_presupuestado as original, credito_vigente as vigente, credito_devengado as devengado',
    }
  };
  return budgetColumns[params.budget || 'all'][params.inflation];
};

module.exports = (params, targetTable) => {
  if (params.reassignationQuery) {
    return 'modificado'
  }
  const columns = ['ejercicio_presupuestario']
  if (['jurisdiccion_mv', 'entidad_mv', 'programa_mv', 'actividad_mv'].includes(targetTable)) columns.push('jurisdiccion_desc')
  if (['entidad_mv', 'programa_mv', 'actividad_mv'].includes(targetTable)) columns.push('entidad_desc')
  if (['programa_mv', 'actividad_mv'].includes(targetTable)) columns.push('programa_desc')
  if (['actividad_mv'].includes(targetTable)) columns.push('actividad_desc')
  const selectedBudget = getSelectedBudget(params);
  if (selectedBudget) columns.push(selectedBudget);
  return columns.join(', ');
}
