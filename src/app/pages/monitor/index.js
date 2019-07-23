const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Monitor = require('../../components/monitor');
const layout = require('../../components/layout');
const data = require('./treemap-data.json');

const render = (req, res) => {
    const html = layout({
        renderedComponent: ReactDOMServer.renderToString(<Monitor {...res.locals.props} />),
        clientName: 'monitor',
        props: res.locals.props,
    });
    res.send(html)
};

const fetchTreemapData = (req, res, next) => {
    res.locals.props = {
        treemapData: data
    };
    next();
};

module.exports = {
    render,
    fetchTreemapData,
};