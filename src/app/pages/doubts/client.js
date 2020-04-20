require('@babel/polyfill');
const React = require('react');
const ReactDOM = require('react-dom');
const Doubts = require('./view');

ReactDOM.hydrate(
  <Doubts {...window.__INITIAL__DATA__}/>,
  document.getElementById('root')
);
