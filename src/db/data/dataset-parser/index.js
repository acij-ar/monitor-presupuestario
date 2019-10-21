const datasetToJSON = require('./dataset-to-json');
const files = require('../files');
const logger = require('../../../utils/logger');

/**
 * Process each baseDataset file into their json file equivalent
 *
 * @returns {Promise<void>} - Promise that resolves when all files are done processing
 */
module.exports = async () => {
  logger.info('Processing csv files into db.json');
  const baseFiles = files.filter(({baseDataset}) => baseDataset);
  const originalBudgetFiles = files.filter(({hasOriginalBudget}) => hasOriginalBudget);
  const baseDatasetsProcessPromises = baseFiles.map((baseFile) => {
    const originalBudgetFile = originalBudgetFiles.find(({year}) => baseFile.year === year);
    return datasetToJSON({ baseFile, originalBudgetFile });
  });
  await Promise.all(baseDatasetsProcessPromises);
};
