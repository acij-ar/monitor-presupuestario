const React = require('react');
const Page = require('../../components/page');
const TextsForm = require('./components/texts-form');
const DatasetForm = require('./components/datasets-form');
require('./index.scss');

const App = ({ texts, datasets }) => (
    <Page>
        <div className="monitor-highlight">
            <div className="monitor-content">
                <h1>Admin</h1>
            </div>
        </div>
        <DatasetForm datasets={datasets}/>
        <TextsForm texts={texts}/>
    </Page>
);

module.exports = App;
