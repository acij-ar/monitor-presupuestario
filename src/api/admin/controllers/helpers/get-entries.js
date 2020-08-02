const MYSQLConnection = require('../../../data/helpers/query/mysql-connection');

const getTerms = async () => {
  const db_connection = MYSQLConnection();
  const query = 'SELECT * FROM glosario;';
  const [faqs] = await db_connection.promise().query(query);
  return faqs;
}

const getDoubts = async () => {
  const db_connection = MYSQLConnection();
  const query = 'SELECT * FROM faq;';
  const [terms] = await db_connection.promise().query(query);
  return terms;
}

module.exports = { getTerms, getDoubts };
