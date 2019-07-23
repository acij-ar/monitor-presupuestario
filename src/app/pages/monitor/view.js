const React = require('react');
const Page = require('../../components/page');
const Treemap = require('./components/treemap');
const Texts = require('../../../services/texts');
require('./index.scss');

const App = ({ treemapData }) => (
    <Page>
        <div className="monitor-highlight">
            <div className="monitor-content">
                <h1>{ Texts.content.monitor.title }</h1>
                <p>{ Texts.content.monitor.description }</p>
            </div>
        </div>

        <div className="monitor-content monitor-treemap">
            <Treemap data={treemapData} />
        </div>
    </Page>
);

module.exports = App;
