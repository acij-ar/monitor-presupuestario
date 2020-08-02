const MYSQLConnection = require('../../data/helpers/query/mysql-connection');
const { saveTerm } = require('./helpers/save-entry');

const getTerms = async () => {
  const db_connection = MYSQLConnection();
  const query = 'SELECT * FROM glosario;';
  const [faqs] = await db_connection.promise().query(query);
  return faqs;
}

const getTermsController = async (req, res) => {
  const terms = await getTerms();
  res.json(terms);
}

const saveTermsController = async (req, res) => {
  await saveTerm(req.body);
  const entries = await getTerms();
  res.json(entries);
}

module.exports = { getTermsController, saveTermsController };
