const Doubts = require('./view');
const dbConnection = require('../../../api/data/helpers/query/mysql-connection');

module.exports = async (req, res, next) => {
  const query = 'SELECT * FROM faq;';
  const [faqs] = await dbConnection.query(query);
  res.locals.props = { faqs };
  res.locals.pageName = 'doubts';
  res.locals.View = Doubts;
  next();
};
