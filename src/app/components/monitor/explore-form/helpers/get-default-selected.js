const getMostRecentYear = (options) => {
  const currentYear = new Date().getFullYear();
  if (!options || options.length === 0) return null;
  return options.sort((a, b) => b.value - a.value).filter(year => year.value <= currentYear)[0].value;
}

module.exports = (data) => ({
  inflation: 'Ajustado',
  budget: 'Original',
  year: getMostRecentYear(data.years),
});
