const React = require('react');
const ReactDOM = require('react-dom');
const About = require('./view');

ReactDOM.hydrate(
  <About {...window.__INITIAL__DATA__}/>,
  document.getElementById('root')
);
