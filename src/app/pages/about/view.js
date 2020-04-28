const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');
const AboutMainContent = require('./components/main-content');
const AboutACIJ = require('./components/acij');
const AboutMatchbox = require('./components/matchbox');
const AboutMethodology = require('./components/methodology');

const App = ({pageName}) => (
  <Page pageName={pageName}>
    <div id="about-main-content">
      <AboutMainContent/>
      <AboutACIJ/>
      <AboutMatchbox/>
      <AboutMethodology/>
    </div>
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
};

module.exports = App;
