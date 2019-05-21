const express = require('express');
const router = express.Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Hello = require('../components/Hello');

router.get('/', (req, res) => {
    const name = 'Server title';

    const component = ReactDOMServer.renderToString(<Hello name={name} />);

    const html = `
  <!doctype html>
    <html>
    <head>
      <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name: 'Client title2' })}</script>
    </head>
    <body>
    <div id="root">${component}</div>
    <script src="/static/client.js"></script> <!-- -->
  </body>
  </html>`;

    res.send(html)
});

module.exports = router;
