const Admin = require('./view');

module.exports = async (req, res, next) => {
  res.locals.pageName = 'admin';
  res.locals.View = Admin;
  next();
};
