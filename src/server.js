const express = require('express');
const path = require('path');
const appRouter = require('./app');
const apiRouter = require('./api');

const app = express();

const clientFolderPath = path.join(__dirname);
app.use('/static', express.static(clientFolderPath));

const staticFolderPath = path.join(__dirname, '..', 'public');
app.use('/static', express.static(staticFolderPath));


app.use('/', appRouter);
app.use('/api', apiRouter);

app.listen(8080);
console.log('Listening https://localhost:8080');
