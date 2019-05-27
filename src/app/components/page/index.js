const React = require('react');
const Header = require('./components/header');
require('./index.scss');

const Page = ({ children }) => ([
    <Header />,
    <div id="main">
        { children }
    </div>
]);

module.exports = Page;

