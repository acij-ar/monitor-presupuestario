const React = require('react');
const ReactDOMServer = require('react-dom/server');
const About = require('./view');
const layout = require('../../components/layout');

const render = (req, res) => {
    const html = layout({
        renderedComponent: ReactDOMServer.renderToString(<About {...res.locals.props} />),
        clientName: 'about',
        props: res.locals.props,
    });
    res.send(html)
};

module.exports = {
    render,
};