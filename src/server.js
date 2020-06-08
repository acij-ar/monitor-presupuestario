require('@babel/register')();
require('@babel/polyfill');

const createTables = require('./services/db/management/create-tables');
createTables();

const logger = require('./utils/logger');
const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const appRouter = require('./app');
const apiRouter = require('./api');
const manifestHelpers = require('express-manifest-helpers').default;

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(morgan('dev'));

const clientFolderPath = path.join(__dirname, '..', 'dist');
const staticFolderPath = path.join(__dirname, '..', 'public');
const testFolderPath = __dirname+'/public_tests';
app.use('/static', express.static(clientFolderPath, {maxAge: '1y', immutable: true}));
app.use('/static', express.static(staticFolderPath, {maxAge: '1y', immutable: true}));
app.use('/tests', express.static(testFolderPath, {maxAge: '1y', immutable: true}));

const manifestPath = path.join(__dirname, '..', 'dist', 'manifest.json');
const manifestMiddleware = manifestHelpers({ manifestPath });
app.use(manifestMiddleware);

app.use('/', appRouter);
app.use('/api', apiRouter);

// TODO: register not found and error pages.
// 404 can be set up here but maybe the error pages can be set up at nginx?

const port = process.env.PORT || 8080;
app.listen(port);
logger.info(`Listening http://localhost:${port}`);
