const doLogin = require('../../../services/authentication/do-login');

module.exports = (req, res) => {
    if (doLogin(req, res)) {
        res.sendStatus(200)
    } else {
        res.sendStatus(401)
    }
};
