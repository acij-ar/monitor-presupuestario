const Doubts = require('./view');

module.exports = (req, res, next) => {
  res.locals.pageName = 'doubts';
  res.locals.View = Doubts;
  next();
};
