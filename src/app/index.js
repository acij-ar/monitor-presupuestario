const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Home = require('./components/home');
const Monitor = require('./components/monitor');
const Comparator = require('./components/comparator');
const About = require('./components/about');
const layout = require('./components/layout');

const treemap = require('./controllers/treemap');

const router = express.Router();

const render = (req, res) => {
    const Component = res.locals.component;
    const html = layout({
        renderedComponent: ReactDOMServer.renderToString(<Component />),
        clientName: res.locals.client,
        props: res.locals.props,
    });
    res.send(html)
};

const setHomeComponent = (req, res, next) => {
    res.locals = {
        component: Home,
        client: 'home',
    };
    next();
};

const setMonitorComponent = (req, res, next) => {
    res.locals = {
        component: Monitor,
        client: 'monitor',
    };
    next();
};

const setComparatorComponent = (req, res, next) => {
    res.locals = {
        component: Comparator,
        client: 'comparator',
    };
    next();
};

const setAboutComponent = (req, res, next) => {
    res.locals = {
        component: About,
        client: 'about',
    };
    next();
};

router.get('/', setHomeComponent, render);
router.get('/monitor', setMonitorComponent, treemap, render);
router.get('/comparador', setComparatorComponent, render);
router.get('/acerca-de', setAboutComponent, render);

module.exports = router;
