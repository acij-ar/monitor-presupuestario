const express = require('express');

const home = require('./pages/home');
const monitor = require('./pages/monitor');
const about = require('./pages/about');
const admin = require('./pages/admin');
const login = require('./pages/login');
const render = require('./controllers/render');
const authenticate = require('./controllers/authenticate');
const redirectIfLoggedIn = require('./controllers/redirect-if-logged-in');

const router = express.Router();

router.get('/', home, render);
router.get('/monitor', monitor, render);
router.get('/acerca-de', about, render);
router.get('/admin', authenticate, admin, render);
router.get('/login', redirectIfLoggedIn, login, render);

module.exports = router;
