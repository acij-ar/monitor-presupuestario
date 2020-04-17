const csv2json = require('../csv-to-json');
const dbUpdater = require('../db-updater');
const updateOriginalBudget = require('../update-original-budget');
const updateFiles = require('./update-files');
const logger = require('../../utils/logger');
const searchService = require('../search');

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
    this.lastExecution = {
      start: (new Date()).toLocaleString('es-AR'),
      error: 'no',
    };

    try {
      this.step = 'Descargando (paso 1 de 4)';
      await updateFiles();

      this.step = 'Convirtiendo CSVs a JSON (paso 2 de 4)';
      await csv2json();

      this.step = 'Actualizando presupuesto original (paso 3 de 4)';
      await updateOriginalBudget();

      this.step = 'Actualizando base de datos (paso 4 de 4)';
      await dbUpdater();

      searchService.buildIndex();
    } catch(e) {
      logger.error('Error while trying to update the datasets');
      logger.error(e);
      this.lastExecution.error = e.toString()
    }

    this.lastExecution.end = (new Date()).toLocaleString('es-AR');
    this.processing = false;
    this.step = null;
  }
}

module.exports = new DatasetUpdater;
