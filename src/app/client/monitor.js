const React = require('react');
const ReactDOM = require('react-dom');
const Monitor = require('../components/monitor');

ReactDOM.hydrate(
    <Monitor {...window.__INITIAL__DATA__}/>,
    document.getElementById('root')
);
