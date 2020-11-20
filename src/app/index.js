const express = require('express');

const home = require('./pages/home');
const compare = require('./pages/compare');
const explore = require('./pages/explore');
const about = require('./pages/about');
const admin = require('./pages/admin');
const login = require('./pages/login');
const doubts = require('./pages/doubts');
const budget = require('./pages/budget');
const glosary = require('./pages/glosary');
const render = require('./controllers/render');
const authenticate = require('./controllers/authenticate');
const redirectIfLoggedIn = require('./controllers/redirect-if-logged-in');

const router = express.Router();

router.get('/', home, render);
router.get('/monitor', (req, res) => res.redirect('/monitor/explorar'));
router.get('/monitor/explorar', explore, render);
router.get('/monitor/comparar', compare, render);
router.get('/acerca-de', about, render);
router.get('/admin', authenticate, admin, render);
router.get('/login', redirectIfLoggedIn, login, render);
router.get('/dudas', doubts, render);
router.get('/el-presupuesto', budget, render);
router.get('/glosario', glosary, render);

module.exports = router;
