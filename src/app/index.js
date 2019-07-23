const express = require('express');
const React = require('react');

const { render: homeController } = require('./pages/home');
const { render: monitorController, fetchTreemapData } = require('./pages/monitor');
const { render: comparatorController } = require('./pages/comparator');
const { render: aboutController } = require('./pages/about');

const router = express.Router();

router.get('/', homeController);
router.get('/monitor', fetchTreemapData, monitorController);
router.get('/comparador', comparatorController);
router.get('/acerca-de', aboutController);

module.exports = router;
