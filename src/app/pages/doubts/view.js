const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');
const DoubtsMainContent = require('./components/main-content');
const Doubts = require('./components/doubts');

const App = ({pageName}) => (
  <Page pageName={pageName}>
    <div id="doubts-main-content">
      <DoubtsMainContent/>
      <Doubts/>
    </div>
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
};

module.exports = App;
