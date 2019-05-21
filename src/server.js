const express = require('express');
const path = require('path');
const React = require('react');
const appRouter = require('./app');
const apiRouter = require('./api');

const app = express();

const clientFolderPath = path.join(__dirname);
app.use('/static', express.static(clientFolderPath));
console.log(`Using ${clientFolderPath} as client static folder`);

app.use('/', appRouter);
app.use('/api', apiRouter);

app.listen(8080);
console.log('Listening https://localhost:8080');
