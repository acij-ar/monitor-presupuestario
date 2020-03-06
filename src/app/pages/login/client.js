require('@babel/polyfill');
const React = require('react');
const ReactDOM = require('react-dom');
const Login = require('./view');

ReactDOM.hydrate(
  <Login {...window.__INITIAL__DATA__}/>,
  document.getElementById('root')
);
