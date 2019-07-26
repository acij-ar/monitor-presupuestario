const fs = require('fs');
const path = require('path');
const files = require('./files');
const googleDriveClient = require('./google-drive-client');
const datasetCleaner = require('./cleaner');

module.exports = (datasetFilename) => {
    const fileId = files.find(file => file.filename === datasetFilename).id;
    const dataFolder = path.join(__dirname, '..', '..', '..', 'data');
    const rawFilePath = path.join(dataFolder, 'raw', datasetFilename);
    console.log(`Downloading ${fileId} to ${rawFilePath}`);

    return googleDriveClient.downloadFile({ fileId, outputPath: rawFilePath })
        .then(() => {
            const cleanedFilePath = path.join(dataFolder, 'cleaned', datasetFilename);
            if (datasetFilename === 'inflacion.csv') {
                console.log('Skipping cleaning routine');
                fs.copyFileSync(rawFilePath, cleanedFilePath)
            } else {
                datasetCleaner({ rawFilePath, cleanedFilePath });
            }
        });
};
