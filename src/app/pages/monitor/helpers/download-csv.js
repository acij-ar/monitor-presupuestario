module.exports = (csvData, filename) => {
  const dataString = csvData.map(row => row.map(cell => typeof cell === 'string' ? `"${cell}"` : cell).join(',')).join('\n');
  const csvContent = 'data:text/csv;charset=utf-8,' + dataString;
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.href = encodedUri;
  link.target = '_blank';
  link.download = filename;
  link.click();
};
