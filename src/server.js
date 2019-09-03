require("@babel/polyfill");

const createTables = require('./services/db/management/create-tables');
createTables();

const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const path = require('path');
const appRouter = require('./app');
const apiRouter = require('./api');

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


app.use('/', appRouter);
app.use('/api', apiRouter);

app.listen(8080);
console.log('Listening https://localhost:8080');
