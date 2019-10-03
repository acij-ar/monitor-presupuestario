const express = require('express');

const { render: renderHome } = require('./pages/home');
const { render: renderMonitor } = require('./pages/monitor');
const { render: renderAbout } = require('./pages/about');
const { render: renderAdmin, authenticate } = require('./pages/admin');
const { render: renderLogin, redirectIfAlreadyLoggedIn } = require('./pages/login');

const router = express.Router();

router.get('/', renderHome);
router.get('/monitor', renderMonitor);
router.get('/acerca-de', renderAbout);
router.get('/admin', authenticate, renderAdmin);
router.get('/login', redirectIfAlreadyLoggedIn, renderLogin);

module.exports = router;
