module.exports = (data) => ({
  inflation: 'Ajustado',
  budget: 'Inicial',
  years: data.years.length === 1 ? [data.years[data.years.length - 1]] : [data.years[data.years.length - 2], data.years[data.years.length - 1]],
});
