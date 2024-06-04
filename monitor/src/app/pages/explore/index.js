const Explore = require('./view');

module.exports = (req, res, next) => {
  res.locals.pageName = 'explore';
  res.locals.View = Explore;
  next();
};
