const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Monitor = require('./view');
const layout = require('../../components/layout');
const datasetQueries = require('../../../services/dataset-queries');
const Texts = require('../../../services/texts');

const render = (req, res) => {
    res.locals.props.title = Texts.content.monitor.title;
    res.locals.props.description = Texts.content.monitor.description;
    const html = layout({
        renderedComponent: ReactDOMServer.renderToString(<Monitor {...res.locals.props} />),
        clientName: 'monitor',
        props: res.locals.props,
    });
    res.send(html)
};

const fetchTreemapData = (req, res, next) => {
    res.locals.props = {
        treemapData: datasetQueries.treeMapData(),
    };
    next();
};

module.exports = {
    render,
    fetchTreemapData,
};