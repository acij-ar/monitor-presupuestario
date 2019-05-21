const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {
    Home,
    Monitor,
    Comparator,
    About,
    layout
} = require('./components');

const router = express.Router();

const render = (req, res) => {
    const Component = res.locals.component;
    const renderedComponente = ReactDOMServer.renderToString(<Component />);
    const clientScript = res.locals.client;
    const html = layout(renderedComponente, clientScript);
    res.send(html)
};

const setHomeComponent = (req, res, next) => {
    res.locals = {
        component: Home,
        client: 'home.js',
    };
    next();
};

const setMonitorComponent = (req, res, next) => {
    res.locals = {
        component: Monitor,
        client: 'monitor.js',
    };
    next();
};

const setComparatorComponent = (req, res, next) => {
    res.locals = {
        component: Comparator,
        client: 'comparator.js',
    };
    next();
};

const setAboutComponent = (req, res, next) => {
    res.locals = {
        component: About,
        client: 'about.js',
    };
    next();
};

router.get('/', setHomeComponent, render);
router.get('/monitor', setMonitorComponent, render);
router.get('/comparador', setComparatorComponent, render);
router.get('/acerca-de', setAboutComponent, render);

module.exports = router;
