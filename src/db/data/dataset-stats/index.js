const fs = require('fs');
const files = require('../files');
const countLines = require('./count-lines');

/**
 * @typedef {object} FileStat
 * @property {string} path - Path to file
 * @property {string} id - Google drive id of file
 * @property {string} lastModified - Date of last modification of local file
 * @property {number} lines - Number of lines in local file
 */

/**
 * Counts number of lines in all files declared in the files config
 *
 * @returns {Promise<FileStat[]>} - Promise that resolves to array of FileStats
 */
module.exports = () => {
  const statPromises = files.map(async ({path, id}) => {
    let lastModified;
    let lines;
    try {
      lastModified = fs.statSync(path).mtime.toString(); // TODO: convert to locale
      lines = await countLines(path);
    } catch {
      lastModified = null;
      lines = null;
    }
    return {
      path,
      id,
      lastModified,
      lines,
    };
  });
  return Promise.all(statPromises);
};
