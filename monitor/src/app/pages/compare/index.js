const Compare = require('./view');

module.exports = (req, res, next) => {
  res.locals.pageName = 'compare';
  res.locals.View = Compare;
  next();
};
