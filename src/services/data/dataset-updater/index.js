const axios = require('axios');
const fs = require('fs');
const path = require('path');
const files = require('./files');

const outputFolderPath = path.join(__dirname, '..', '..', '..', '..', 'data');

class DatasetUpdater {
    static updateDataset(datasetFilename) {
        const fileId = files.find(({filename}) => filename === datasetFilename).id;
        const outputPath = path.join(outputFolderPath, datasetFilename);
        console.log(`Downloading ${fileId} to ${outputPath}`);
        const writeStream = fs.createWriteStream(outputPath);
        const url = `https://docs.google.com/uc?id=${fileId}`;
        axios({method: 'get', responseType: 'stream', url})
            .then(response =>
                response.data
                    .on('end', () => console.log('Done'))
                    .on('error', err => console.log('Error', err))
                    .pipe(writeStream)
            );
    };
}


module.exports = DatasetUpdater;
