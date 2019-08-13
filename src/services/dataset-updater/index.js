const availableDatasets = require('../../config').datasets.files;
const googleDriveClient = require('./google-drive-client');
const datasetCleaner = require('./cleaner');
const csv2json = require('./csv-to-json');
const dbUpdater = require('./db-updater');
const updateOriginalBudget = require('./update-original-budget');

class DatasetUpdater {
    constructor() {
        this.processing = false;
        this.step = null;
    }

    async updateDataset(datasetFilename) {
        if (this.processing) {
            return;
        }
        this.processing = true;
        this.step = 'Iniciando descarga';

        const dataset = availableDatasets.find(file => file.filename === datasetFilename);
        const {id: fileId, rawPath} = dataset;

        this.step = 'Descargando';
        await googleDriveClient.downloadFile({fileId, outputPath: rawPath});

        this.step = 'Limpiando dataset';
        await datasetCleaner(dataset);

        this.step = 'Convirtiendo csv a json';
        await csv2json();

        this.step = 'Actualizando presupuesto original';
        await updateOriginalBudget();

        this.step = 'Actualizando presupuesto original';
        await dbUpdater();

        this.processing = false;
        this.step = null;
    }
}

module.exports = new DatasetUpdater;
