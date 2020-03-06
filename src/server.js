require('@babel/register')();
require('@babel/polyfill');

const createTables = require('./services/db/management/create-tables');
createTables();

const logger = require('./utils/logger');
const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const path = require('path');
const appRouter = require('./app');
const apiRouter = require('./api');
const manifestHelpers = require('express-manifest-helpers').default;

const app = express();

app.use(compression());
app.use(cookieParser());

// TODO: configure cache maxAge and inmutable after js and css files have hashed filenames
// Check this to configure hashed filenames https://github.com/manuelbieh/react-ssr-setup

const clientFolderPath = path.join(__dirname, '..', 'dist');
app.use('/static', express.static(clientFolderPath));

const staticFolderPath = path.join(__dirname, '..', 'public');
const staticMiddleware = express.static(staticFolderPath, {maxAge: '1y', immutable: true});
app.use('/static', staticMiddleware);

const manifestPath = `${path.join(__dirname, '..', 'dist', 'manifest.json')}`;
const manifestMiddleware = manifestHelpers({ manifestPath });
app.use(manifestMiddleware);

app.use('/', appRouter);
app.use('/api', apiRouter);

const port = process.env.PORT || 8080;
app.listen(port);
logger.info(`Listening http://localhost:${port}`);
