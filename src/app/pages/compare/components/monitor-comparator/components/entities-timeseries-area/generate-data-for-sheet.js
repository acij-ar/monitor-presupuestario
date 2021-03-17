module.exports = (chartData, params) => {
  const { xAxis: { categories }, series } = chartData;

  const header = ['Año', 'Grupo', 'Presupuesto', 'Tipo de presupuesto', 'Ajuste por inflación'];
  const rows = [];

  categories.map((year, index) => {
    series.map((entity) => {
      rows.push({
        'Año': year,
        'Grupo': entity.name,
        'Presupuesto': entity.data[index],
        'Tipo de presupuesto': params.budget,
        'Ajuste por inflación': params.inflation,
      });
    })
  });

  return [rows, {header}]
}
