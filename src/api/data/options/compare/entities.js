const dbConnection = require('../../helpers/query/mysql-connection');

const getDistinct = async (column) => {
  const query = `SELECT DISTINCT(${column}) as name FROM monitor.simplificado ORDER BY ${column} ASC;`
  const [rows] = await dbConnection.query(query);
  return rows;
}

module.exports = async () => {
  const [
    jurisdictions,
    entities,
    programs,
    activities,
  ] = await Promise.all([
    getDistinct('jurisdiccion_desc'),
    getDistinct('entidad_desc'),
    getDistinct('programa_desc'),
    getDistinct('actividad_desc'),
  ]);
  return { jurisdictions, entities, programs, activities };
};
