const React = require('react');
const Page = require('../../components/page');
const Texts = require('../../../services/texts');
require('./index.scss');

const App = () => (
    <Page>
        <div className="monitor-highlight">
            <div className="monitor-content">
                <h1>{ Texts.content.comparator.title }</h1>
                <p>{ Texts.content.comparator.description }</p>
            </div>
        </div>

        <div className="monitor-content monitor-comparator">
        </div>
    </Page>
);

module.exports = App;
