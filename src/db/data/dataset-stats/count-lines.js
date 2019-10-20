const countLinesInFile = require('count-lines-in-file');

/**
 * Counts number of lines in file
 *
 * @param {string} filePath - Path to file
 * @returns {Promise<number>} - Promise that resolves to number of lines in file
 */
module.exports = (filePath) => (
  new Promise((resolve, reject) => {
    countLinesInFile(filePath, (err, numberOfLines) => err ? reject(err) : resolve(numberOfLines));
  })
);