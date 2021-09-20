module.exports = (chartData, params) => {
  const { xAxis: { categories }, series } = chartData;

  const header = ['Año', 'Nombre', 'Presupuesto', 'Tipo de presupuesto', 'Ajuste por inflación'];
  const rows = [];

  categories.map((year, index) => {
    series.map((entity) => {
      rows.push({
        'Año': year,
        'Nombre': entity.name,
        'Presupuesto': entity.data[index].y,
        'Tipo de presupuesto': params.budget,
        'Ajuste por inflación': params.inflation,
      });
    })
  });

  return [rows, {header}]
}
