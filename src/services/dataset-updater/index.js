const availableDatasets = require('../../config').datasets.files;
const googleDriveClient = require('../../db/data/google-drive-client');
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
    this.step = 'Descargando (paso 1 de 5)';

    const dataset = availableDatasets.find(file => file.filename === datasetFilename);
    const {id: fileId, rawPath} = dataset;

    await googleDriveClient.downloadFile({fileId, outputPath: rawPath});

    this.step = 'Limpiando datasets (paso 2 de 5)';
    await datasetCleaner(dataset);

    this.step = 'Convirtiendo CSVs a JSON (paso 3 de 5)';
    await csv2json();

    this.step = 'Actualizando presupuesto original (paso 4 de 5)';
    await updateOriginalBudget();

    this.step = 'Actualizando base de datos (paso 5 de 5)';
    await dbUpdater();

    this.processing = false;
    this.step = null;
  }
}

module.exports = new DatasetUpdater;
