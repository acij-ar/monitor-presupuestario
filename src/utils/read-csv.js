const csv = require('fast-csv');
const fs = require('fs');

module.exports = ({path, onData}) => (
  new Promise((resolve, reject) => {
    fs.createReadStream(path)
      .pipe(csv.parse({headers: true}))
      .on('data', onData)
      .on('error', reject)
      .on('end', resolve);
  })
);
