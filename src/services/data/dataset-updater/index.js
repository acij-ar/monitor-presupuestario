const fs = require('fs');
const path = require('path');
const files = require('./files');
const googleDriveClient = require('./google-drive-client');
const datasetCleaner = require('./cleaner');

class DatasetUpdater {
    static downloadFile({outputPath, fileId}) {
        console.log(`Downloading ${fileId} to ${outputPath}`);
        const dest = fs.createWriteStream(outputPath);
        return new Promise((resolve, reject) => {
            googleDriveClient.client.files.get(
                {fileId, alt: 'media'},
                {responseType: 'stream'},
                (err, res) => (
                    res.data
                        .on('end', () => {
                            console.log(`File ${fileId} downloaded successfully`);
                            resolve();
                        })
                        .on('error', reject)
                        .pipe(dest)
                )
            )
        })
    }

    static updateDataset(datasetFilename) {
        const fileId = files.find(file => file.filename === datasetFilename).id;
        const rawFilePath = path.join(__dirname, '..', '..', '..', '..', 'data', 'raw', datasetFilename);
        const cleanedFilePath = path.join(__dirname, '..', '..', '..', '..', 'data', 'cleaned', datasetFilename);
        DatasetUpdater.downloadFile({ outputPath: rawFilePath, fileId })
            .then(() => {
                if (datasetFilename === 'inflacion.csv') {
                    console.log('Skipping cleaning routine');
                    fs.copyFileSync(rawFilePath, cleanedFilePath)
                } else {
                    datasetCleaner({ rawFilePath, cleanedFilePath });
                }
            })
    }
}

module.exports = DatasetUpdater;
