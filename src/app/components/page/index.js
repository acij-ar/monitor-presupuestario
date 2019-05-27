const React = require('react');
const Header = require('./components/header');
const Footer = require('./components/footer');
require('./index.scss');

const Page = ({ children }) => ([
    <Header />,
    <div id="main">
        { children }
    </div>,
    <Footer />
]);

module.exports = Page;

