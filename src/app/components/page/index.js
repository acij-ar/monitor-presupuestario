const React = require('react');
const Header = require('./components/header');
const Footer = require('./components/footer');
require('./index.scss');

const Page = ({ children }) => ([
    <Header key="header" />,
    <div id="main" key="main" >
        { children }
    </div>,
    <Footer key="footer" />
]);

module.exports = Page;

