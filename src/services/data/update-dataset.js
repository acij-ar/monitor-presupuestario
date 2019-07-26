const fs = require('fs');
const path = require('path');
const availableDatasets = require('../available-datasets');
const googleDriveClient = require('./google-drive-client');
const datasetCleaner = require('./cleaner');
const datasetQueries = require('../dataset-queries');

module.exports = (datasetFilename) => {
    const fileId = availableDatasets.find(file => file.filename === datasetFilename).id;
    const dataFolder = path.join(__dirname, '..', '..', '..', 'data');
    const rawFilePath = path.join(dataFolder, 'raw', datasetFilename);
    console.log(`Downloading ${fileId} to ${rawFilePath}`);

    return googleDriveClient.downloadFile({ fileId, outputPath: rawFilePath })
        .then(async () => {
            const cleanedFilePath = path.join(dataFolder, 'cleaned', datasetFilename);
            if (datasetFilename === 'inflacion.csv') {
                console.log('Skipping cleaning routine');
                fs.copyFileSync(rawFilePath, cleanedFilePath)
            } else {
                await datasetCleaner({ rawFilePath, cleanedFilePath });
            }
            datasetQueries.update();
        });
};
