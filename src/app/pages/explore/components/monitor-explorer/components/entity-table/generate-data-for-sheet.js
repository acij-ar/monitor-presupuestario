module.exports = (tableData, params) => {
  const header = ['Año', tableData.header.name, 'C. Inicial', 'C. Vigente', 'C. Devengado'];
  const rows = tableData.rows.map((row) => ({
    'Año': params.year,
    [tableData.header.name]: row.name,
    'C. Inicial': row.original,
    'C. Vigente': row.vigente,
    'C. Devengado': row.devengado,
  }));
  return [rows, {header}]
};
