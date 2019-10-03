const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Monitor = require('./view');
const layout = require('../../components/layout');
const Texts = require('../../../services/texts');

const render = (req, res) => {
  const {title, description} = Texts.content.monitor;
  res.locals.props = {title, description};
  const html = layout({
    renderedComponent: ReactDOMServer.renderToString(<Monitor {...res.locals.props} />),
    clientName: 'monitor',
    props: res.locals.props,
  });
  res.send(html);
};

module.exports = {
  render,
};