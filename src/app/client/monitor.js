const React = require('react');
const ReactDOM = require('react-dom');
const Monitor = require('../pages/monitor/view');

ReactDOM.hydrate(
    <Monitor {...window.__INITIAL__DATA__}/>,
    document.getElementById('root')
);
