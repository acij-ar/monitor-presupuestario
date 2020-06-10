const React = require('react');
const Page = require('../../components/page');
const PropTypes = require('prop-types');
const MonitorMainSection = require('../../components/monitor/main-section');
const Sunburst = require('./components/sunburst');

const App = ({ pageName }) => (
  <Page pageName={pageName}>
    <MonitorMainSection selectedSection="explore" />
    <Sunburst />
  </Page>
);

App.propTypes = {
  pageName: PropTypes.string.isRequired,
}

module.exports = App;
