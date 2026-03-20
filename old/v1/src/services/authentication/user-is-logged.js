const { password } = require('./credentials.json');

module.exports = (req) => {
  const cookiePassword = req.cookies && req.cookies.password;
  return cookiePassword && cookiePassword === password;
};
