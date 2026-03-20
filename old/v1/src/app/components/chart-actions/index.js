const React = require('react');
const PropTypes = require('prop-types');
const exportFile = require('./export-file');
const { useRef } = React;

const ChartActions = ({ children, visible, generateDataForSheet, imageTypesEnabled, dataTypesEnabled, customSelector }) => {
  const chartContainer = useRef(null);
  const imageRendererRef = useRef(null);

  const onChange = (e) => {
    const { value } = e.target;
    const chartNode = customSelector ?
      chartContainer.current.querySelector(customSelector) :
      chartContainer.current;
    const imageRendererNode = imageRendererRef.current;
    exportFile(value, chartNode, imageRendererNode, generateDataForSheet);
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
              {
                imageTypesEnabled && <React.Fragment>
                  <option value="png">Descargar imagen (PNG)</option>
                  <option value="jpg">Descargar imagen (JPG)</option>
                  <option value="pdf">Descargar imagen (PDF)</option>
                </React.Fragment>
              }
              {
                dataTypesEnabled && <React.Fragment>
                  <option value="csv">Descargar datos (CSV)</option>
                  <option value="xlsx">Descargar datos (XLS)</option>
                </React.Fragment>
              }
            </select>
          </div>
        </div>
      )}
      <div className="chart-image-download-renderer-container">
        <div className="chart-image-download-renderer" ref={imageRendererRef}>
          <img src="/static/image-download-header.jpg"/>
          <img className="chart-image-download-placeholder" />
        </div>
      </div>
    </div>
  )
}

ChartActions.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  generateDataForSheet: PropTypes.func.isRequired,
  imageTypesEnabled: PropTypes.bool,
  dataTypesEnabled: PropTypes.bool,
  customSelector: PropTypes.string,
}

ChartActions.defaultProps = {
  imageTypesEnabled: true,
  dataTypesEnabled: true,
  customSelector: null,
}

module.exports = ChartActions;
