const getSelectedBudget = (params) => {
  const budgetColumns = {
    'Original': {
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
  return budgetColumns[params.budget][params.inflation];
};

module.exports = (params) => {
  const columns = ['ejercicio_presupuestario']
  if (params.jurisdiction) columns.push('jurisdiccion_desc')
  if (params.entity) columns.push('entidad_desc')
  if (params.program) columns.push('programa_desc')
  if (params.activity) columns.push('actividad_desc')
  const selectedBudget = getSelectedBudget(params);
  if (selectedBudget) columns.push(selectedBudget);
  return columns.join(', ');
}
