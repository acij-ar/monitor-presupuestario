const dbConnection = require('../helpers/query/mysql-connection');
const convertToOption = require('./convert-to-option');

module.exports = async () => {
  const query = 'SELECT DISTINCT(ejercicio_presupuestario) FROM monitor.simplificado;';
  const [rows] = await dbConnection.query(query);
  return rows.map(({ ejercicio_presupuestario }) => ejercicio_presupuestario).map(convertToOption);
}
