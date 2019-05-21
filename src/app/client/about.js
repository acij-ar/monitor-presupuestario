const React = require('react');
const ReactDOM = require('react-dom');
const About = require('../components/about');

ReactDOM.hydrate(
    <About {...window.__INITIAL__DATA__}/>,
    document.getElementById('root')
);
