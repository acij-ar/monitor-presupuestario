const express = require('express');

const home = require('./pages/home');
const compare = require('./pages/compare');
const explore = require('./pages/explore');
const about = require('./pages/about');
const admin = require('./pages/admin');
const login = require('./pages/login');
const doubts = require('./pages/doubts');
const budget = require('./pages/budget');
const render = require('./controllers/render');
const authenticate = require('./controllers/authenticate');
const redirectIfLoggedIn = require('./controllers/redirect-if-logged-in');

const router = express.Router();

router.get('/', home);
router.get('/monitor', (req, res) => res.redirect('/monitor/explorar'));
router.get('/monitor/explorar', explore);
router.get('/monitor/comparar', compare);
router.get('/acerca-de', about);
router.get('/admin', authenticate, admin);
router.get('/login', redirectIfLoggedIn, login);
router.get('/dudas', doubts);
router.get('/el-presupuesto', budget);

router.use(render);

module.exports = router;
