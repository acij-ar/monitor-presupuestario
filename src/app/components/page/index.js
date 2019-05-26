const React = require('react');
const Header = require('./components/header');
require('./index.scss');

const Page = ({ children }) => ([
    <Header />,
    children
]);

module.exports = Page;

