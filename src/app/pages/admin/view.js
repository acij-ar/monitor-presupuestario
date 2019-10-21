const React = require('react');
const Page = require('../../components/page');
const TextsForm = require('./components/texts-form');
const DatasetForm = require('./components/datasets-form');
require('./index.scss');

const App = ({ texts }) => (
  <Page>
    <div className="monitor-highlight">
      <div className="monitor-content">
        <h1>Admin</h1>
      </div>
    </div>
    <DatasetForm />
    <TextsForm texts={texts}/>
  </Page>
);

module.exports = App;
