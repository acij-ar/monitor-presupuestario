const datasetToJSON = require('./dataset-to-json');
const files = require('../files');
const logger = require('../../../utils/logger');

module.exports = async () => {
  logger.info('Processing csv files into db.json');
  const yearFiles = files.filter(({baseDataset}) => baseDataset);
  const processPromises = yearFiles.map(datasetToJSON);
  await Promise.all(processPromises);
};
