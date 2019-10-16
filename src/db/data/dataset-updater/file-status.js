const md5File = require('md5-file/promise');
const path = require('path');

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