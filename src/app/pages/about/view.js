const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');
const AboutMainContent = require('./components/main-content');

const App = ({ pageName }) => (
  <Page pageName={pageName}>
    <div id="about-main-content">
      <AboutMainContent />
    </div>
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
};

module.exports = App;
