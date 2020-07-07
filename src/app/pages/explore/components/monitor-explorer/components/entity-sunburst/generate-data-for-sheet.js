module.exports = (chartData) => {
  const header = ['Nombre', 'Presupuesto'];
  const rows = [];
  if (chartData) {
    const { series: [{ data }] } = chartData;
    data.map(dataPoint => {
      const { name, value } = dataPoint;
      rows.push({
        'Nombre': name,
        'Presupuesto': value,
      });
    })
  }
  return [rows, {header}]
};
