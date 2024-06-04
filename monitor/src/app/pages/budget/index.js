const Budget = require('./view');

module.exports = (req, res, next) => {
  res.locals.pageName = 'budget';
  res.locals.View = Budget;
  next();
};
