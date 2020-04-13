const Login = require('./view');

module.exports = (req, res, next) => {
  res.locals.assetsName = 'login';
  res.locals.View = Login;
  next();
};
