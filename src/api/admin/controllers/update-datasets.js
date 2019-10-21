const datasetUpdater = require('../../../services/dataset-updater');
const datasetsStats = require('../../../db/data/dataset-status');

const updateDatasets = (req, res) => {
  datasetUpdater.updateDatasets();
  res.json({job_status: 'started'});
};

const jobStatus = async (req, res) => {
  if (datasetUpdater.processing) {
    res.json({processing: true, step: datasetUpdater.step});
  } else {
    res.json({result: await datasetsStats()});
  }
};

module.exports = {
  updateDatasets,
  jobStatus,
};
