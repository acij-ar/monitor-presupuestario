const md5File = require('md5-file/promise');
const path = require('path');

/**
 * @typedef {object} FileStatus
 * @property {boolean} exists - Indicates if the file exists in the local filesystem
 * @property {boolean} upToDate - Indicates if the file is up to date with its google drive counterpart
 * @property {string} currentMD5 - MD5 checksum of the local file
 * @property {string} expectedMD5 - MD5 checksum of the google drive file
 */

/**
 * Checks if a local file is up to date with its google drive counterpart.
 * It checks if the file exists and compares the local file md5 checksum
 * with the md5 checksum of the google drive file
 *
 * @param {object} file - The file to be checked
 * @param {string} file.filename - Filename of the local file
 * @param {string} file.expectedMD5 - MD5 checksum of the google drive file
 * @returns {FileStatus}
 *
 * @example
 *     fileStatus({ filename: 'dataset.csv', expectedMD5: '123abc' })
 */

module.exports = async ({ filename, expectedMD5 }) => {
  let exists, upToDate, currentMD5;
  const pathToFile = path.join(__dirname, '..', 'datasets', filename);
  try {
    currentMD5 = await md5File(pathToFile);
    exists = true;
    upToDate = currentMD5 === expectedMD5;
  } catch {
    exists = false;
    upToDate = false;
    currentMD5 = null;
  }
  return { exists, upToDate, expectedMD5, currentMD5 };
};