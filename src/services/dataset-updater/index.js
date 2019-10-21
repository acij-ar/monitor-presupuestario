const datasetUpdater = require('../../db/data/dataset-updater');
const datasetParser = require('../../db/data/dataset-parser');
const dbUpdater = require('./db-updater');

class DatasetUpdater {
  constructor() {
    this.processing = false;
    this.step = null;
  }

  async updateDatasets() {
    if (this.processing) {
      return;
    }
    this.processing = true;
    this.step = 'Descargando (paso 1 de 3)';
    await datasetUpdater();

    this.step = 'Convirtiendo CSVs a JSON (paso 2 de 3)';
    await datasetParser();

    this.step = 'Actualizando base de datos (paso 3 de 3)';
    await dbUpdater();

    this.processing = false;
    this.step = null;
  }
}

module.exports = new DatasetUpdater;
