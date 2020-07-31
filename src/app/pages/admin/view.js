const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');

const App = ({ pageName }) => (
  <Page pageName={pageName}>
    <div className="monitor-highlight">
      <div className="monitor-content">
        <h1>Admin</h1>
      </div>
    </div>
    <DatasetForm />
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
};

module.exports = App;
