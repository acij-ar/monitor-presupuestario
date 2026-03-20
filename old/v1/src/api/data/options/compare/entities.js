const groupBy = require('lodash/groupBy');
const sortBy = require('lodash/sortBy');
const dbConnection = require('../../db/mysql-connection');

const getYearsForGroup = (years) => {
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);
  return minYear === maxYear ? minYear.toString() : `${minYear} - ${maxYear}`;
}

const getDistinct = async (columns, table, order) => {
  const query = `SELECT ejercicio_presupuestario, ${columns.join(', ')} FROM ${table};`
  const [rows] = await dbConnection.query(query);
  const groupedRows = groupBy(rows, row => columns.map(column => row[column]).join('||'));
  const rowsWithYearLabels = Object.values(groupedRows)
    .map((rowGroup) => {
      const finalRow = {};
      columns.forEach(column => {
        finalRow[column] = rowGroup[0][column];
      })
      finalRow.years = rowGroup.map(row => row.ejercicio_presupuestario)
      finalRow.label = `${rowGroup[0][order]} (${getYearsForGroup(finalRow.years)})`
      return finalRow;
    });
  return sortBy(rowsWithYearLabels, 'label');
}

const getDistinctJurisdictions = () => getDistinct(
  ['jurisdiccion_desc'],
  'jurisdiccion_mv',
  'jurisdiccion_desc',
)

const getDistinctEntities = () => getDistinct(
  ['jurisdiccion_desc', 'entidad_desc'],
  'entidad_mv',
  'entidad_desc',
)

const getDistinctPrograms = () => getDistinct(
  ['jurisdiccion_desc', 'entidad_desc', 'programa_desc'],
  'programa_mv',
  'programa_desc',
)

const getDistinctActivities = () => getDistinct(
  ['jurisdiccion_desc', 'entidad_desc', 'programa_desc', 'actividad_desc'],
  'actividad_mv',
  'actividad_desc',
)

module.exports = async () => {
  const [
    jurisdictions,
    entities,
    programs,
    activities,
  ] = await Promise.all([
    getDistinctJurisdictions(),
    getDistinctEntities(),
    getDistinctPrograms(),
    getDistinctActivities(),
  ]);
  return { jurisdictions, entities, programs, activities };
};
