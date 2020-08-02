const MYSQLConnection = require('../../data/helpers/query/mysql-connection');
const { saveDoubt } = require('./helpers/save-entry');

const getDoubts = async () => {
  const db_connection = MYSQLConnection();
  const query = 'SELECT * FROM faq;';
  const [terms] = await db_connection.promise().query(query);
  return terms;
}

const getDoubtsController = async (req, res) => {
  const terms = await getDoubts();
  res.json(terms);
}

const saveDoubtsController = async (req, res) => {
  await saveDoubt(req.body);
  const entries = await getDoubts();
  res.json(entries);
}

module.exports = { getDoubtsController, saveDoubtsController };
