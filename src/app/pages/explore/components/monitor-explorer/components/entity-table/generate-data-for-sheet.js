module.exports = (tableData) => {
  const header = ['Categoria', 'C. Original', 'C. Vigente', 'C. Devengado'];
  const rows = tableData.map((row) => ({
    'Categoria': row.name,
    'C. Original': row.original,
    'C. Vigente': row.vigente,
    'C. Devengado': row.devengado,
  }));
  return [rows, {header}]
};
