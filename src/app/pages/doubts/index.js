const Doubts = require('./view');
const MYSQLConnection = require('../../../api/data/helpers/query/mysql-connection');

module.exports = async (req, res, next) => {
  const db_connection = MYSQLConnection();
  const query = 'SELECT * FROM faq;';
  const [faqs] = await db_connection.promise().query(query);
  res.locals.props = { faqs };
  res.locals.pageName = 'doubts';
  res.locals.View = Doubts;
  next();
};
