const React = require('react');
const PropTypes = require('prop-types');
const exportFile = require('./export-file');
const { useRef } = React;

const ChartActions = ({ children, visible, generateDataForSheet }) => {
  const chartContainer = useRef(null);

  const onChange = (e) => {
    const { value } = e.target;
    const chartNode = chartContainer.current;
    exportFile(value, chartNode, generateDataForSheet);
  }

  return (
    <div className="chart-with-actions">
      <div className="chart-container" ref={chartContainer}>
        {children}
      </div>
      { visible && (
        <div className="chart-actions">
          <div className="chart-actions-export-wrapper">
            <select value="undefined" onChange={onChange}>
              <option value="undefined">Descargar cómo</option>
              <option value="png">Descargar imagen (PNG)</option>
              <option value="jpg">Descargar imagen (JPG)</option>
              <option value="pdf">Descargar imagen (PDF)</option>
              <option value="svg">Descargar imagen (SVG)</option>
              <option value="csv">Descargar datos (CSV)</option>
              <option value="xlsx">Descargar datos (XLS)</option>
            </select>
          </div>
        </div>
      )}
    </div>
  )
}

ChartActions.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  generateDataForSheet: PropTypes.func.isRequired,
}

module.exports = ChartActions;
