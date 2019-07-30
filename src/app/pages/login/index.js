const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Login = require('./view');
const layout = require('../../components/layout');
const userIsLoggedIn = require('../../../services/authentication/user-is-logged');

const redirectIfAlreadyLoggedIn = (req, res, next) => {
    if (userIsLoggedIn(req)) {
        res.redirect('/admin')
    } else {
        next();
    }
};

const render = async (req, res) => {
    const html = layout({
        renderedComponent: ReactDOMServer.renderToString(<Login {...res.locals.props} />),
        clientName: 'login',
        props: res.locals.props,
    });
    res.send(html)
};

module.exports = {
    render,
    redirectIfAlreadyLoggedIn,
};