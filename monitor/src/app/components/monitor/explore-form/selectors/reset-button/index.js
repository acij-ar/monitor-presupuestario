const React = require('react');
const PropTypes = require('prop-types');

const ResetButton = ({ updateSelectedEntity, selected }) => {
  const disabled = !selected.jurisdiction;
  return (
    <button id="monitor-explore-reset" disabled={disabled} onClick={() => updateSelectedEntity(null)}>
      limpiar búsqueda
    </button>
  );
};

ResetButton.propTypes = {
  updateSelectedEntity: PropTypes.func.isRequired,
  selected: PropTypes.shape({
    jurisdiction: PropTypes.string,
  }),
};

module.exports = ResetButton;
