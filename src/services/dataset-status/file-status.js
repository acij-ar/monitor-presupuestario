const fs = require('fs');
const md5File = require('md5-file/promise');
const countLines = require('./count-lines');

/**
 * @typedef {object} FileStatus
 * @property {boolean} exists - Indicates if the file exists in the local filesystem
 * @property {boolean} upToDate - Indicates if the file is up to date with its google drive counterpart
 * @property {string} currentMD5 - MD5 checksum of the local file
 * @property {string} expectedMD5 - MD5 checksum of the google drive file
 * @property {string} path - Path to file
 * @property {string} id - Google drive id of file
 * @property {string} lastModified - Date of last modification of local file
 * @property {number} lines - Number of lines in local file
 */

/**
 * Checks if a local file is up to date with its google drive counterpart.
 * It checks if the file exists and compares the local file md5 checksum
 * with the md5 checksum of the google drive file
 *
 * @param {object} file - The file to be checked
 * @param {string} file.path - Path to local file
 * @param {string} file.expectedMD5 - MD5 checksum of the google drive file
 * @returns {FileStatus}
 *
 * @example
 *     fileStatus({ filename: 'dataset.csv', expectedMD5: '123abc' })
 */

module.exports = async ({ path, id, filename, expectedMD5 }) => {
  let exists, upToDate, currentMD5, lastModified, lines;
  try {
    lastModified = fs.statSync(path).mtime.toISOString();
    lines = await countLines(path);
    currentMD5 = await md5File(path); // TODO: this is very slow. Find a workaround to speed up the process
    exists = true;
    upToDate = currentMD5 === expectedMD5;
  } catch {
    lastModified = null;
    lines = null;
    exists = false;
    upToDate = false;
    currentMD5 = null;
  }
  return {
    id,
    filename,
    path,
    exists,
    upToDate,
    lastModified,
    lines,
  };
};
