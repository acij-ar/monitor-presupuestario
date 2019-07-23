const React = require('react');
const Page = require('../../components/page');
const Treemap = require('./components/treemap');
require('./index.scss');

const App = ({ treemapData, title, description }) => (
    <Page>
        <div className="monitor-highlight">
            <div className="monitor-content">
                <h1>{ title }</h1>
                <p>{ description }</p>
            </div>
        </div>

        <div className="monitor-content monitor-treemap">
            <Treemap data={treemapData} />
        </div>
    </Page>
);

module.exports = App;
