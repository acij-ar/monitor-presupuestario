const Admin = require('./view');
const Texts = require('../../../services/texts');

module.exports = async (req, res, next) => {
  res.locals.props = { texts: Texts.content };
  res.locals.View = Admin;
  res.locals.scripts = [res.locals.assetPath('admin.js')];
  res.locals.styles = [res.locals.assetPath('admin.css')];
  next();
};
