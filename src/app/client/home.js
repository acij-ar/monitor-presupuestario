const React = require('react');
const ReactDOM = require('react-dom');
const Home = require('../components/home');

ReactDOM.hydrate(
    <Home {...window.__INITIAL__DATA__}/>,
    document.getElementById('root')
);
