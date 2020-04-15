const Admin = require('./view');
const Texts = require('../../../services/texts');

module.exports = async (req, res, next) => {
  res.locals.pageName = 'admin';
  res.locals.props = { texts: Texts.content };
  res.locals.View = Admin;
  next();
};
