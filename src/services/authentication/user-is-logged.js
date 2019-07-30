const { password } = require('./credentials.json');

module.exports = (req) => {
    const cookiePassword = req.cookies && req.cookies.password;
    console.log(req.cookies);
    console.log('cookie password ', cookiePassword);
    return cookiePassword && cookiePassword === password;
};
