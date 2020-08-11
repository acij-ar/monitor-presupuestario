const dbConnection = require('../../helpers/query/mysql-connection');

const getDistinct = async (columns, order) => {
  const query = `SELECT ${columns} FROM monitor.simplificado GROUP BY ${order} ORDER BY ${order} ASC;`
  const [rows] = await dbConnection.query(query);
  return rows;
}

const getDistinctJurisdictions = () => getDistinct(
  'jurisdiccion_desc',
  'jurisdiccion_desc',
)

const getDistinctEntities = () => getDistinct(
  'ANY_VALUE(jurisdiccion_desc) as jurisdiccion_desc, entidad_desc',
  'entidad_desc',
)

const getDistinctPrograms = () => getDistinct(
  'ANY_VALUE(jurisdiccion_desc) as jurisdiccion_desc, ANY_VALUE(entidad_desc) as entidad_desc, programa_desc',
  'programa_desc',
)

const getDistinctActivities = () => getDistinct(
  'ANY_VALUE(jurisdiccion_desc) as jurisdiccion_desc, ANY_VALUE(entidad_desc) as entidad_desc, ANY_VALUE(programa_desc) as programa_desc, actividad_desc',
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
