const fs = require('fs');
const availableDatasets = require('../available-datasets');
const googleDriveClient = require('./google-drive-client');
const datasetCleaner = require('./cleaner');
const datasetQueries = require('../dataset-queries');

class DatasetUpdater {
    constructor() {
        this.processing = false;
    }

    async updateDataset(datasetFilename) {
        if (this.processing) {
            return;
        }
        this.processing = true;
        const dataset = availableDatasets.find(file => file.filename === datasetFilename);
        const {id: fileId, rawPath, filePath} = dataset;
        console.log(`Downloading ${fileId} to ${rawPath}`);
        await googleDriveClient.downloadFile({fileId, outputPath: rawPath});
        if (datasetFilename === 'inflacion.csv') {
            console.log('Skipping cleaning routine');
            fs.copyFileSync(rawPath, filePath)
        } else {
            await datasetCleaner(dataset);
        }
        await datasetQueries.update();
        this.processing = false;
    }
}

module.exports = new DatasetUpdater;
