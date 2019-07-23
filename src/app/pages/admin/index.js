const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Admin = require('./view');
const layout = require('../../components/layout');

const render = (req, res) => {
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