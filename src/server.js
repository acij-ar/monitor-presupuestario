const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Hello = require('./components/Hello');

const app = express();

const clientFolderPath = path.join(__dirname);
app.use('/static', express.static(clientFolderPath));
console.log(`Using ${clientFolderPath} as client static folder`);

app.get('/', (req, res) => {
    const name = 'Server title'

    const component = ReactDOMServer.renderToString(<Hello name={name} />)

    const html = `
  <!doctype html>
    <html>
    <head>
      <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name: 'Client title' })}</script>
    </head>
    <body>
    <div id="root">${component}</div>
    <script src="/static/client.js"></script> <!-- -->
  </body>
  </html>`

    res.send(html)
})

app.listen(3000);
