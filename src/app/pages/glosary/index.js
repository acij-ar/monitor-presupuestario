const Glosary = require('./view');

module.exports = (req, res, next) => {
  res.locals.pageName = 'glosary';
  res.locals.View = Glosary;
  next();
};
