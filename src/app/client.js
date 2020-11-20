require('@babel/polyfill');
const React = require('react');
const ReactDOM = require('react-dom');

module.exports = (View) => (
  ReactDOM.hydrate(
    <View {...window.__INITIAL__DATA__}/>,
    document.getElementById('root')
  )
)
