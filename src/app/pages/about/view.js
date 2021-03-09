const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');
const AboutMainContent = require('./components/main-content');
const AboutBudgetAnalysis = require('./components/budget-analysis');
const AboutACIJ = require('./components/acij');
const AboutMatchbox = require('./components/matchbox');
const AboutMethodology = require('./components/methodology');
const AboutOriginal = require('./components/original');
const activeSectionScroll = require('../../components/page/components/menu/active-section-scroll');

const { useEffect } = React;

const elementSelectors = [
  '#about-main',
  '#about-budget-analysis',
  '#about-acij',
  '#about-matchbox',
  '#about-methodology',
  '#about-original'
];

const App = ({pageName}) => {
  useEffect(() => {
    window.addEventListener('scroll', activeSectionScroll(elementSelectors));
  }, []);

  return (
    <Page pageName={pageName}>
      <div id="about-main-content">
        <AboutMainContent/>
        <AboutBudgetAnalysis/>
        <AboutACIJ/>
        <AboutMatchbox/>
        <AboutMethodology/>
        <AboutOriginal/>
      </div>
    </Page>
  );
};

App.propTypes = {
  pageName: PropTypes.string.isRequired,
};

module.exports = App;
