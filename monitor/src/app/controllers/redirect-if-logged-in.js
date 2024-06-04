const userIsLoggedIn = require('../../services/authentication/user-is-logged');

module.exports = (req, res, next) => {
  if (userIsLoggedIn(req)) {
    res.redirect('/admin');
  } else {
    next();
  }
};
