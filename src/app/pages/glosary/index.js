const Glosary = require('./view');
const dbConnection = require('../../../api/data/db/mysql-connection');

module.exports = async (req, res, next) => {
  const query = 'SELECT palabra as name, significado as definition FROM glosario;';
  const [terms] = await dbConnection.query(query);
  res.locals.props = { terms };
  res.locals.pageName = 'glosary';
  res.locals.View = Glosary;
  next();
};
