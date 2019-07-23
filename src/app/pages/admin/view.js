const React = require('react');
const Page = require('../../components/page');
const TextsForm = require('./components/texts-form');
require('./index.scss');

const App = () => (
    <Page>
        <div className="monitor-highlight">
            <div className="monitor-content">
                <h1>Admin</h1>
            </div>
        </div>
        <TextsForm />
    </Page>
);

module.exports = App;
