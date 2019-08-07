const fs = require('fs');
const availableDatasets = require('../../config').datasets.files;
const googleDriveClient = require('./google-drive-client');
const datasetCleaner = require('./cleaner');
const csv2json = require('./csv2json');
const dbUpdater = require('./db-updater');

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
        const {id: fileId, rawPath, filePath, isYearDataset} = dataset;

        console.log(`Downloading ${fileId} to ${rawPath}`);
        await googleDriveClient.downloadFile({fileId, outputPath: rawPath});

        if (isYearDataset) {
            await datasetCleaner(dataset);
        } else {
            console.log('Skipping cleaning routine');
            fs.copyFileSync(rawPath, filePath)
        }

        await csv2json();
        await dbUpdater();

        this.processing = false;
    }
}

module.exports = new DatasetUpdater;
