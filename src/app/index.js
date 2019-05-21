const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./components/App');
const layout = require('./components/layout');

const router = express.Router();

router.get('/', (req, res) => {
    const renderedComponente = ReactDOMServer.renderToString(<App />);
    const html = layout(renderedComponente);
    res.send(html)
});

module.exports = router;
