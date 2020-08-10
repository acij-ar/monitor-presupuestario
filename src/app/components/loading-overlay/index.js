const React = require('react');
const PropTypes = require('prop-types');

const LoadingOverlay = ({ children, loading }) => (
  <div className={loading ? 'loading-wrapper' : ''}>
    {children}
  </div>
);

LoadingOverlay.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
};

LoadingOverlay.defaultProps = {
  loading: false,
  children: null,
};

module.exports = LoadingOverlay;
