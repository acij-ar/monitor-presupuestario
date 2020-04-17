const datasetsStats = require('../../../services/dataset-status');
const datasetUpdater = require('../../../services/dataset-updater');

module.exports = async (req, res) => {
  if (datasetUpdater.processing) {
    res.json({
      processing: true,
      step: datasetUpdater.step
    });
  } else {
    res.json({
      result: await datasetsStats(),
      lastExecution: datasetUpdater.lastExecution,
    });
  }
};
