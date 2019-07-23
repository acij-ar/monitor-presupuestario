const React = require('react');
const ReactDOM = require('react-dom');
const Home = require('../pages/home/view');

ReactDOM.hydrate(
    <Home {...window.__INITIAL__DATA__}/>,
    document.getElementById('root')
);
