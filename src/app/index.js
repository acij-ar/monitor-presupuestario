const express = require('express');
const React = require('react');

const { render: renderHome } = require('./pages/home');
const { render: renderMonitor, fetchTreemapData } = require('./pages/monitor');
const { render: renderComparator } = require('./pages/comparator');
const { render: renderAbout } = require('./pages/about');
const { render: renderAdmin } = require('./pages/admin');

const router = express.Router();

router.get('/', renderHome);
router.get('/monitor', fetchTreemapData, renderMonitor);
router.get('/comparador', renderComparator);
router.get('/acerca-de', renderAbout);
router.get('/admin', renderAdmin);

module.exports = router;
