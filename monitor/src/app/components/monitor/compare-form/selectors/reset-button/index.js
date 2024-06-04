const React = require('react');
const PropTypes = require('prop-types');

const ResetButton = ({ groups, resetSelection }) => {
  const disabled = groups[0].length === 0 && groups[1].length === 0;
  return (
    <button id="monitor-compare-reset" disabled={disabled} onClick={resetSelection}>
      limpiar grupos
    </button>
  );
};

ResetButton.propTypes = {
  resetSelection: PropTypes.func.isRequired,
  groups: PropTypes.array.isRequired,
};

module.exports = ResetButton;
