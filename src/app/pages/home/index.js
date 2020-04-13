const Home = require('./view');

module.exports = (req, res, next) => {
  res.locals.assetsName = 'home';
  res.locals.View = Home;
  next();
};
