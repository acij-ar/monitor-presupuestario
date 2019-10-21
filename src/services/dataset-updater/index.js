const datasetUpdater = require('../../db/data/dataset-updater');
const datasetParser = require('../../db/data/dataset-parser');
const dbUpdater = require('./db-updater');
const updateOriginalBudget = require('./update-original-budget');

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
    this.step = 'Descargando (paso 1 de 5)';
    await datasetUpdater();

    this.step = 'Convirtiendo CSVs a JSON (paso 3 de 5)';
    await datasetParser();

    //this.step = 'Actualizando presupuesto original (paso 4 de 5)';
    //await updateOriginalBudget();

    //this.step = 'Actualizando base de datos (paso 5 de 5)';
    //await dbUpdater();

    this.processing = false;
    this.step = null;
  }
}

module.exports = new DatasetUpdater;
