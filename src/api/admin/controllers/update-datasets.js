const datasetUpdater = require('../../../services/dataset-updater');
const datasetsStats = require('../../../services/dataset-stats');

const updateDataset = (req, res) => {
    const {filename} = req.params;
    console.log(`Received request to update ${filename}`);
    datasetUpdater.updateDataset(filename);
    res.json({job_status: 'started'});
};

const jobStatus = async (req, res) => {
    if (datasetUpdater.processing) {
        res.json({processing: true});
    } else {
        res.json({result: await datasetsStats()})
    }
};

module.exports = {
    updateDataset,
    jobStatus,
};