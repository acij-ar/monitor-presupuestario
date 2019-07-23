const express = require('express');
const React = require('react');

const homeController = require('./pages/home');
const monitorController = require('./pages/monitor');
const comparatorController = require('./pages/comparator');
const aboutController = require('./pages/about');
const treemap = require('./controllers/treemap');

const router = express.Router();

router.get('/', homeController);
router.get('/monitor', treemap, monitorController);
router.get('/comparador', comparatorController);
router.get('/acerca-de', aboutController);

module.exports = router;
