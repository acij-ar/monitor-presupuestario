module.exports = (chartData) => {
  const header = ['Año'];
  const rows = [];
  if (chartData) {
    const { series, xAxis: { categories } } = chartData;
    series.map(serie => {
      const { name } = serie;
      header.push(name);
    })
    categories.map((year, index) => {
      const row = { 'Año': year };
      series.map(serie => {
        row[serie.name] = serie.data[index];
      })
      rows.push(row)
    });
  }
  return [rows, {header}]
}
