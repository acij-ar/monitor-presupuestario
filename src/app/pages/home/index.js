const Home = require('./view');

module.exports = (req, res, next) => {
  res.locals.pageName = 'home';
  res.locals.View = Home;
  next();
};
