const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');
const DoubtsMainContent = require('./components/main-content');

const App = ({ pageName }) => (
  <Page pageName={pageName}>
    <div id="doubts-main-content">
      <DoubtsMainContent />
    </div>
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
};

module.exports = App;
