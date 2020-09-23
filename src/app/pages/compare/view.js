const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');
const MonitorComparator = require('./components/monitor-comparator');
const MonitorJoyride = require('../../components/joyride');
const steps = require('./joyride-steps');

const App = ({pageName}) => (
  <Page pageName={pageName} selectedSubSection="compare-menu-link">
    <h1 id="monitor-main-title">
      Monitor <span> / comparar</span>
      <MonitorJoyride steps={steps} cookieName="compare-joyride" />
    </h1>
    <MonitorComparator />
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
};

module.exports = App;
