const React = require('react');
const Page = require('../page');
require('./index.scss');

const App = () => (
    <Page>
        <a href="/monitor">
            <img id="background-768" src="/static/portada-768.jpg" alt="Monitor presupuestario" />
            <div id="background-1920" />
        </a>
    </Page>
);

module.exports = App;
