const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Home = require('./view');
const layout = require('../../components/layout');

const render = (req, res) => {
    const html = layout({
        renderedComponent: ReactDOMServer.renderToString(<Home {...res.locals.props} />),
        clientName: 'home',
        props: res.locals.props,
    });
    res.send(html)
};

module.exports = {
    render,
};