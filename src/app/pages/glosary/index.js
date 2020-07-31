const Glosary = require('./view');
const MYSQLConnection = require('../../../api/data/helpers/query/mysql-connection');

module.exports = async (req, res, next) => {
  const db_connection = MYSQLConnection();
  const query = 'SELECT * FROM glosario;';
  const [terms] = await db_connection.promise().query(query);
  res.locals.props = { terms };
  res.locals.pageName = 'glosary';
  res.locals.View = Glosary;
  next();
};
