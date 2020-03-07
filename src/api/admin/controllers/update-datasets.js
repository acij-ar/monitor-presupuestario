const datasetUpdater = require('../../../services/dataset-updater');

module.exports = (req, res) => {
  datasetUpdater.updateDatasets();
  res.json({job_status: 'started'});
};
