const md5File = require('md5-file/promise');
const path = require('path');

module.exports = async ({ filename, expectedMD5 }) => {
  let exists, upToDate;
  const pathToFile = path.join('..', 'datasets', filename);
  try {
    const fileMD5 = md5File(pathToFile);
    exists = true;
    upToDate = fileMD5 === expectedMD5;
  } catch {
    exists = false;
    upToDate = false;
  }
  return { exists, upToDate };
};