const Home = require('./view');

module.exports = (req, res, next) => {
  res.locals.View = Home;
  res.locals.scripts = [res.locals.assetPath('home.js')];
  res.locals.styles = [res.locals.assetPath('home.css')];
  next();
};
