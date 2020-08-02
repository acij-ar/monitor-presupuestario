const MYSQLConnection = require('../../../data/helpers/query/mysql-connection');

const deleteTerm = (entry) => {
  const { id } = entry;
  const db_connection = MYSQLConnection();
  const query = 'DELETE FROM glosario WHERE id = ?;';
  return db_connection.promise().query(query, [id]);
}

const deleteDoubt = async (entry) => {
  const { id } = entry;
  const db_connection = MYSQLConnection();
  const query = 'DELETE FROM faq WHERE id = ?;';
  return db_connection.promise().query(query, [id]);
}

module.exports = { deleteTerm, deleteDoubt };
