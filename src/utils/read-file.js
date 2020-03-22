const {promisify} = require('util');
const fs = require('fs');

const readFileAsync = promisify(fs.readFile);
const existsAsync = promisify(fs.exists);

module.exports = async (filePath) => {
  if (await existsAsync(filePath)) {
    return (await readFileAsync(filePath)).toString()
  }
  return null;
};
