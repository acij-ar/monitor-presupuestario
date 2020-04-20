require('@babel/polyfill');
const React = require('react');
const ReactDOM = require('react-dom');
const Budget = require('./view');

ReactDOM.hydrate(
  <Budget {...window.__INITIAL__DATA__}/>,
  document.getElementById('root')
);
