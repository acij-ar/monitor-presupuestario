const About = require('./view');

module.exports = (req, res, next) => {
  res.locals.pageName = 'about';
  res.locals.View = About;
  next();
};
