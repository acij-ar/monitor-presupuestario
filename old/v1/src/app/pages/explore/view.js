const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');
const MonitorExplorer = require('./components/monitor-explorer');
const MonitorJoyride = require('../../components/joyride');
const steps = require('./joyride-steps');

const App = ({ pageName }) => (
  <Page pageName={pageName} selectedSubSection="explore-menu-link">
    <h1 id="monitor-main-title">
      Monitor <span> / explorar</span>
      <MonitorJoyride steps={steps} cookieName="explore-joyride" />
    </h1>
    <MonitorExplorer />
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
}

module.exports = App;
