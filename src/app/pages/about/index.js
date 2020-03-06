const React = require('react');
const ReactDOMServer = require('react-dom/server');
const About = require('./view');
const layout = require('../../components/layout');
const Texts = require('../../../services/texts');

const render = (req, res) => {
  res.locals.props = {
    ...Texts.content.about
  };
  const html = layout({
    renderedComponent: ReactDOMServer.renderToString(<About {...res.locals.props} />),
    scripts: [res.locals.assetPath('about.js')],
    styles: [res.locals.assetPath('about.css')],
    props: res.locals.props,
  });
  res.send(html);
};

module.exports = {
  render,
};