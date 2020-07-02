const React = require('react');
const PropTypes = require('prop-types');
const domtoimage = require('dom-to-image');

const { useRef } = React;

const ChartActions = ({ children }) => {
  const chartContainer = useRef(null);

  const downloadImage = (dataUrl, filename) => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.click();
  };

  const onChange = (e) => {
    const { value } = e.target;
    const chartNode = chartContainer.current;
    const imageOptions = { bgcolor: '#fafafa' };
    if (value === 'jpg') {
      domtoimage.toJpeg(chartNode, imageOptions).then(dataUrl => downloadImage(dataUrl, 'chart.jpg'))
    } else if (value === 'png') {
      domtoimage.toPng(chartNode, imageOptions).then(dataUrl => downloadImage(dataUrl, 'chart.png'))
    } else if (value === 'svg') {
      domtoimage.toSvg(chartNode, imageOptions).then(dataUrl => downloadImage(dataUrl, 'chart.svg'))
    }
  }
  return (
    <div className="chart-with-actions">
      <div className="chart-container" ref={chartContainer}>
        {children}
      </div>
      <div className="chart-actions">
        <div className="chart-actions-export-wrapper">
          <select value="undefined" onChange={onChange}>
            <option value="undefined">Descargar cómo</option>
            <option value="png">Descargar imagen (PNG)</option>
            <option value="jpg">Descargar imagen (JPG)</option>
            {/*
            <option value="pdf">Descargar imagen (PDF)</option>
            */}
            <option value="svg">Descargar imagen (SVG)</option>
            {/*
            <option value="csv">Descargar datos (CSV)</option>
            <option value="xls">Descargar datos (XLS)</option>
            */}
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
