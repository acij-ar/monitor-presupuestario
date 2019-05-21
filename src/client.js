const React = require('react');
const ReactDOM = require('react-dom');
const Hello = require('./components/Hello');

ReactDOM.hydrate(
    <Hello name={window.__INITIAL__DATA__.name} />,
    document.getElementById('root')
);
