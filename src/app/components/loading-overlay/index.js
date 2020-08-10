const React = require('react');
const PropTypes = require('prop-types');

const LoadingOverlay = ({ children, loading }) => (
  loading ?
  <div className="loading-wrapper">
    {children}
  </div> : children
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
