require('@babel/polyfill');

const React = require('react');
const ReactDOM = require('react-dom');
const View = require('./view');

ReactDOM.hydrate(
  <View {...window.__INITIAL__DATA__}/>,
  document.getElementById('root')
);
