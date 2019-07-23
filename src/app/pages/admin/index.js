const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Admin = require('./view');
const layout = require('../../components/layout');
const Texts = require('../../../services/texts');

const render = (req, res) => {
    res.locals.props = {
        texts: Texts.content,
    };
    const html = layout({
        renderedComponent: ReactDOMServer.renderToString(<Admin {...res.locals.props} />),
        clientName: 'admin',
        props: res.locals.props,
    });
    res.send(html)
};

module.exports = {
    render,
};