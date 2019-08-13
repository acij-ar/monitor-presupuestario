const { password } = require('./credentials.json');

module.exports = (req, res) => {
    const { password: postedPassword } = req.body;
    if (postedPassword === password) {
        const oneDay = 60 * 60 * 24 * 1000;
        res.cookie('password', password, { maxAge: oneDay });
        return true
    }
    return false;
};
