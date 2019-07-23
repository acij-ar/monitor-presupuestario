const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Comparator = require('../../components/comparator');
const layout = require('../../components/layout');

const render = (req, res) => {
    const html = layout({
        renderedComponent: ReactDOMServer.renderToString(<Comparator {...res.locals.props} />),
        clientName: 'comparator',
        props: res.locals.props,
    });
    res.send(html)
};

module.exports = render;