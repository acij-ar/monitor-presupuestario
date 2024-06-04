const Admin = require('./view');

// TODO: repurpose this page for text management

module.exports = async (req, res, next) => {
  res.locals.pageName = 'admin';
  res.locals.View = Admin;
  next();
};
