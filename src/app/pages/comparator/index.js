const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Comparator = require('./view');
const layout = require('../../components/layout');
const Texts = require('../../../services/texts');

const render = (req, res) => {
    res.locals.props = {
        title: Texts.content.comparator.title,
        description: Texts.content.comparator.description,
    };
    const html = layout({
        renderedComponent: ReactDOMServer.renderToString(<Comparator {...res.locals.props} />),
        clientName: 'comparator',
        props: res.locals.props,
    });
    res.send(html)
};

module.exports = {
    render,
};