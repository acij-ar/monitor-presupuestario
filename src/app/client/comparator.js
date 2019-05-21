const React = require('react');
const ReactDOM = require('react-dom');
const Comparator = require('../components/comparator');

ReactDOM.hydrate(
    <Comparator {...window.__INITIAL__DATA__}/>,
    document.getElementById('root')
);
