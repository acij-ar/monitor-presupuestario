const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Admin = require('./view');
const layout = require('../../components/layout');
const Texts = require('../../../services/texts');
const userIsLoggedIn = require('../../../services/authentication/user-is-logged');

const authenticate = (req, res, next) => {
  if (userIsLoggedIn(req)) {
    next();
  } else {
    res.redirect('/login');
  }
};

const render = async (req, res) => {
  res.locals.props = {
    texts: Texts.content,
  };
  const html = layout({
    renderedComponent: ReactDOMServer.renderToString(<Admin {...res.locals.props} />),
    scripts: [res.locals.assetPath('admin.js')],
    styles: [res.locals.assetPath('admin.css')],
    props: res.locals.props,
  });
  res.send(html);
};

module.exports = {
  render,
  authenticate,
};