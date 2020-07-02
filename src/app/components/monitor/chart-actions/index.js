const React = require('react');
const PropTypes = require('prop-types');

const ChartActions = ({ children }) => {
  return (
    <div className="chart-with-actions">
      <div className="chart-container">
        {children}
      </div>
      <div className="chart-actions">
        <select>
          <option>Exportar jpeg</option>
          <option>Exportar png</option>
          <option>Exportar svg</option>
        </select>
      </div>
    </div>
  )
}

ChartActions.propTypes = {
  children: PropTypes.node.isRequired,
}

module.exports = ChartActions;
