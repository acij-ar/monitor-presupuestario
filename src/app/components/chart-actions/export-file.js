const domtoimage = require('dom-to-image');
const downloadFile = require('./download-file');
const XLSX = require('xlsx');

const filenameSuffix = 'monitorpresupuestario.acij.org.ar'
const imageOptions = { bgcolor: '#fafafa' };

const exportSheet = (data, type) => {
  const ws = XLSX.utils.json_to_sheet(...data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Datos");
  XLSX.writeFile(wb, `${filenameSuffix}.${type}`)
}

const generateImageFromNode = (fileType, chartNode) => (
  fileType === 'png' ? domtoimage.toPng(chartNode, imageOptions) : domtoimage.toJpeg(chartNode, imageOptions)
)

const renderImageForExport = (dataUrl, fileType, imageRendererNode) => {
  const filename = `${filenameSuffix}.${fileType}`
  imageRendererNode.querySelector('.chart-image-download-placeholder').src = dataUrl;
  setTimeout(() => {
    if (fileType === 'jpg') {
      domtoimage.toJpeg(imageRendererNode, imageOptions).then(dataUrl => downloadFile(dataUrl, filename))
    } else if (fileType === 'png') {
      domtoimage.toPng(imageRendererNode, imageOptions).then(dataUrl => downloadFile(dataUrl, filename))
    } else if (fileType === 'pdf') {
      const options = { filename };
      require('dom-to-pdf')(imageRendererNode, options);
    }
  }, 500)
}

module.exports = (fileType, chartNode, imageRendererNode, generateDataForSheet) => {
  if (['csv', 'xlsx'].includes(fileType)) {
    exportSheet(generateDataForSheet(), fileType);
  } else if (['jpg', 'png', 'pdf'].includes(fileType)) {
    generateImageFromNode(fileType, chartNode).then(dataUrl => renderImageForExport(dataUrl, fileType, imageRendererNode))
  }
}
