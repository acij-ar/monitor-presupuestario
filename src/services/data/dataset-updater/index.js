const fs = require('fs');
const path = require('path');
const files = require('./files');
const googleDriveClient = require('./google-drive-client');

class DatasetUpdater {
    downloadFile({outputPath, fileId}) {
        console.log(`Downloading ${fileId} to ${outputPath}`);
        const dest = fs.createWriteStream(outputPath);
        googleDriveClient.client.files.get(
            {fileId: fileId, alt: 'media'},
            {responseType: 'stream'},
            function (err, res) {
                res.data
                    .on('end', () => console.log('Done'))
                    .on('error', err => console.log('Error', err))
                    .pipe(dest);
            }
        )
    }

    updateDataset(datasetFilename) {
        const fileId = files.find(file => file.filename === datasetFilename).id;
        const outputPath = path.join(__dirname, '..', '..', '..', '..', 'data', datasetFilename);
        this.downloadFile({ outputPath, fileId });
    }
}

module.exports = DatasetUpdater;
