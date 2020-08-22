const React = require('react');
const PropTypes = require('prop-types');

const MonitorMainSection = ({selectedSection}) => (
  <div className={`monitor-main-section`}>
    <h1>
      Monitor
      <span> / { selectedSection === 'compare' ? 'comparar' : 'explorar'}</span>
    </h1>
    <p/>
  </div>
);

MonitorMainSection.propTypes = {
  selectedSection: PropTypes.string.isRequired,
};

module.exports = MonitorMainSection;
