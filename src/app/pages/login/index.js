const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Login = require('./view');
const layout = require('../../components/layout');

module.exports = async (req, res) => {
  const html = layout({
    renderedComponent: ReactDOMServer.renderToString(<Login {...res.locals.props} />),
    scripts: [res.locals.assetPath('login.js')],
    styles: [res.locals.assetPath('login.css')],
    props: res.locals.props,
  });
  res.send(html);
};
