const datasetUpdater = require('../../../services/dataset-updater');
const datasetsStats = require('../../../db/data/dataset-status');

const updateDataset = (req, res) => {
  const {filename} = req.params;
  console.log(`Received request to update ${filename}`);
  datasetUpdater.updateDataset(filename);
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
  updateDataset,
  jobStatus,
};
