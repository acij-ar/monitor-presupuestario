const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');
const DoubtsMainContent = require('./components/main-content');
const Doubts = require('./components/doubts');

const App = ({pageName, faqs}) => (
  <Page pageName={pageName}>
    <div id="doubts-main-content">
      <DoubtsMainContent />
      <Doubts faqs={faqs} />
    </div>
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
  faqs: PropTypes.array.isRequired,
};

module.exports = App;
