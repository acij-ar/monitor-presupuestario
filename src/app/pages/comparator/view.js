const React = require('react');
const Page = require('../../components/page');
require('./index.scss');

const App = ({ title, description }) => (
    <Page>
        <div className="monitor-highlight">
            <div className="monitor-content">
                <h1>{ title }</h1>
                <p>{ description }</p>
            </div>
        </div>

        <div className="monitor-content monitor-comparator">
        </div>
    </Page>
);

module.exports = App;
