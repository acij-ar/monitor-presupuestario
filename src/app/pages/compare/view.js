const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');
const MonitorMainSection = require('../../components/monitor/main-section');
const MonitorComparator = require('./components/monitor-comparator');

const App = ({pageName}) => (
  <Page pageName={pageName} selectedSubSection="compare-menu-link">
    <MonitorMainSection selectedSection="compare" />
    <MonitorComparator />
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
};

module.exports = App;
