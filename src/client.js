const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./app/components/App');

ReactDOM.hydrate(
    <App {...window.__INITIAL__DATA__}/>,
    document.getElementById('root')
);
