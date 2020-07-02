const React = require('react');
const PropTypes = require('prop-types');

const ChartActions = ({ children }) => {
  const onChange = (e) => {
    console.log(e.target.value);
  }
  return (
    <div className="chart-with-actions">
      <div className="chart-container">
        {children}
      </div>
      <div className="chart-actions">
        <div className="chart-actions-export-wrapper">
          <select value="undefined" onChange={onChange}>
            <option value="undefined">Descargar cómo</option>
            <option value="png">Descargar imagen (PNG)</option>
            <option value="jpg">Descargar imagen (JPG)</option>
            <option value="pdf">Descargar imagen (PDF)</option>
            <option value="svg">Descargar imagen (SVG)</option>
            <option value="csv">Descargar datos (csv)</option>
            <option value="xls">Descargar datos (XLS)</option>
          </select>
        </div>
      </div>
    </div>
  )
}

ChartActions.propTypes = {
  children: PropTypes.node.isRequired,
}

module.exports = ChartActions;
