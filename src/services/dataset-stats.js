const fs = require('fs');
const datasets = require('../config').datasets.files;
const countLinesInFile = require('count-lines-in-file');

const numberOfLines = (filePath) => (
  new Promise((resolve, reject) => {
    countLinesInFile(filePath, (err, numberOfLines) => err ? reject(err) : resolve(numberOfLines));
  })
);

module.exports = () => {
  const statPromises = datasets.map(async ({filename, filePath}) => {
    let lastModified;
    let lines;
    if (fs.existsSync(filePath)) {
      lastModified = fs.statSync(filePath).mtime.toString(); // TODO: convert to locale
      lines = await numberOfLines(filePath);
    }
    return {
      filename,
      lastModified,
      lines,
    };
  });
  return Promise.all(statPromises);
};