require('@babel/polyfill');
const React = require('react');
const ReactDOM = require('react-dom');
const Admin = require('./view');

ReactDOM.hydrate(
  <Admin {...window.__INITIAL__DATA__}/>,
  document.getElementById('root')
);
