const getMostRecentYear = (options) => {
  if (!options || options.length === 0) return null;
  return options.sort((a, b) => b.value - a.value)[0].value;
}

module.exports = (data) => ({
  inflation: 'Ajustado',
  budget: 'Original',
  year: getMostRecentYear(data.years),
});
