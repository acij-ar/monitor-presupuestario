const Monitor = require('./view');

module.exports = (req, res, next) => {
  res.locals.pageName = 'monitor';
  res.locals.View = Monitor;
  next();
};
