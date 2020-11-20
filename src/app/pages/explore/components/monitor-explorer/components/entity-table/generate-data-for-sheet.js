module.exports = (tableData, params) => {
  const header = ['Año', tableData.header.name, 'C. Original', 'C. Vigente', 'C. Devengado'];
  const rows = tableData.rows.map((row) => ({
    'Año': params.year,
    [tableData.header.name]: row.name,
    'C. Original': row.original,
    'C. Vigente': row.vigente,
    'C. Devengado': row.devengado,
  }));
  return [rows, {header}]
};
