const React = require('react');
const Page = require('../../components/page');
const TextsForm = require('./components/texts-form');
const DatasetForm = require('./components/datasets-form');
const PropTypes = require('prop-types');

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

App.propTypes = {
  texts: PropTypes.object.isRequired,
};

module.exports = App;
