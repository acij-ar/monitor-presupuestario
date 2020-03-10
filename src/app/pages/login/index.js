const Login = require('./view');

module.exports = (req, res, next) => {
  res.locals.View = Login;
  res.locals.scripts = [res.locals.assetPath('login.js')];
  res.locals.styles = [res.locals.assetPath('login.css')];
  next();
};
