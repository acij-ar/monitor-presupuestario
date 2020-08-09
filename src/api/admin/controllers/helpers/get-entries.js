const dbConnection = require('../../../data/helpers/query/mysql-connection');

const getTerms = async () => {
  const query = 'SELECT * FROM glosario;';
  const [faqs] = await dbConnection.query(query);
  return faqs;
}

const getDoubts = async () => {
  const query = 'SELECT * FROM faq;';
  const [terms] = await dbConnection.query(query);
  return terms;
}

module.exports = { getTerms, getDoubts };
