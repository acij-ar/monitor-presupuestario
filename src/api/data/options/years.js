const MYSQLConnection = require('../helpers/query/mysql-connection');
const convertToOption = require('./convert-to-option');

module.exports = async () => {
  const db_connection = MYSQLConnection();
  const query = 'SELECT DISTINCT(ejercicio_presupuestario) FROM monitor.simplificado;';
  const [rows] = await db_connection.promise().query(query);
  return rows.map(({ ejercicio_presupuestario }) => ejercicio_presupuestario).map(convertToOption);
}
