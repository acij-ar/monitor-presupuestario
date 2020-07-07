const domtoimage = require('dom-to-image');
const downloadFile = require('./download-file');
const XLSX = require('xlsx');

const exportSheet = (data, type) => {
  const ws = XLSX.utils.json_to_sheet(...data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Datos");
  XLSX.writeFile(wb, `chart.${type}`)
}

module.exports = (value, chartNode, generateDataForSheet) => {
  const imageOptions = { bgcolor: '#fafafa' };
  if (value === 'jpg') {
    domtoimage.toJpeg(chartNode, imageOptions).then(dataUrl => downloadFile(dataUrl, 'chart.jpg'))
  } else if (value === 'png') {
    domtoimage.toPng(chartNode, imageOptions).then(dataUrl => downloadFile(dataUrl, 'chart.png'))
  } else if (value === 'svg') {
    domtoimage.toSvg(chartNode, imageOptions).then(dataUrl => downloadFile(dataUrl, 'chart.svg'))
  } else if (value === 'pdf') {
    const options = { filename: 'chart.pdf' };
    require('dom-to-pdf')(chartNode, options);
  } else if (value === 'csv') {
    exportSheet(generateDataForSheet(), 'csv');
  } else if (value === 'xlsx') {
    exportSheet(generateDataForSheet(), 'xlsx');
  }
}
