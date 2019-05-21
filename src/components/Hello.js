const React = require('react');

const Hello = (props) => (
    <React.Fragment>
        <h1>Hello, {props.name}!</h1>
    </React.Fragment>
);

module.exports = Hello;
