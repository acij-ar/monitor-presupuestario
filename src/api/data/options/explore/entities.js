const fullDetailQuery = require('../../db/full-detail-query');
const rows2obj = require('../../helpers/rows-to-obj');
const groupBy = require('lodash/groupBy');

const columns = ['jurisdiccion_desc', 'entidad_desc', 'programa_desc', 'actividad_desc']
module.exports = async () => {
  const rows = await fullDetailQuery({ table: 'actividad_mv' })
  const rowGroups = groupBy(rows, row => columns.map(column => row[column]).join('||'));
  Object.values(rowGroups).forEach(rowGroup => {
    const years = rowGroup.map(row => row.ejercicio_presupuestario);
    rowGroup.forEach(row => {
      row.years = years;
    })
  });
  return rows2obj(rows, { withIds: true });
};
