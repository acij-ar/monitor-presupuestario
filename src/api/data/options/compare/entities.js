const dbConnection = require('../../db/mysql-connection');

const getDistinct = async (columns, table, order) => {
  const query = `SELECT ${columns} FROM ${table} GROUP BY ${order} ORDER BY ${order} ASC;`
  const [rows] = await dbConnection.query(query);
  return rows;
}

const getDistinctJurisdictions = () => getDistinct(
  'jurisdiccion_desc',
  'jurisdiccion_mv',
  'jurisdiccion_desc',
)

const getDistinctEntities = () => getDistinct(
  'MAX(jurisdiccion_desc) as jurisdiccion_desc, entidad_desc',
  'entidad_mv',
  'entidad_desc',
)

const getDistinctPrograms = () => getDistinct(
  'MAX(jurisdiccion_desc) as jurisdiccion_desc, MAX(entidad_desc) as entidad_desc, programa_desc',
  'programa_mv',
  'programa_desc',
)

const getDistinctActivities = () => getDistinct(
  'MAX(jurisdiccion_desc) as jurisdiccion_desc, MAX(entidad_desc) as entidad_desc, MAX(programa_desc) as programa_desc, actividad_desc',
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
