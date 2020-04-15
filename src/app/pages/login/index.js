const Login = require('./view');

module.exports = (req, res, next) => {
  res.locals.pageName = 'login';
  res.locals.View = Login;
  next();
};
