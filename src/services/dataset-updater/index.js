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
        const {id: fileId, rawPath} = dataset;
        await googleDriveClient.downloadFile({fileId, outputPath: rawPath});
        await datasetCleaner(dataset);
        await csv2json();
        await dbUpdater();

        this.processing = false;
    }
}

module.exports = new DatasetUpdater;
