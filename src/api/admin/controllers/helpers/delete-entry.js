const dbConnection = require('../../../data/helpers/query/mysql-connection');

const deleteTerm = (entry) => {
  const { id } = entry;
  const query = 'DELETE FROM glosario WHERE id = ?;';
  return dbConnection.query(query, [id]);
}

const deleteDoubt = async (entry) => {
  const { id } = entry;
  const query = 'DELETE FROM faq WHERE id = ?;';
  return dbConnection.query(query, [id]);
}

module.exports = { deleteTerm, deleteDoubt };
