const React = require('react');
const PropTypes = require('prop-types');

const LoadingOverlay = ({ children, loading }) => (
  loading ?
  <div className="loading-wrapper">
    {children}
  </div> : children
);

LoadingOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

LoadingOverlay.defaultProps = {
  loading: false,
};

module.exports = LoadingOverlay;
