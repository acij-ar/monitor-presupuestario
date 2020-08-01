const React = require('react');
const PropTypes = require('prop-types');
const Page = require('../../components/page');
const AdminList = require('./components/admin-list');

const App = ({ pageName }) => (
  <Page pageName={pageName}>
    <div className="monitor-highlight">
      <div className="monitor-content">
        <h1>Admin</h1>
        <AdminList type="doubts" title="Glosario" />
        <AdminList type="glosary" title="Dudas" />
      </div>
    </div>
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
};

module.exports = App;
