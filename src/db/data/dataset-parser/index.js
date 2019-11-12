const datasetToJSON = require('./dataset-to-json');
const files = require('../files');
const logger = require('../../../utils/logger');
const readCSV = require('../../../utils/read-csv');

const inflationFile = files.find(file => file.inflation);
const years = [];
files.map(file => file.year && years.indexOf(file.year) === -1 ? years.push(file.year) : null);

/**
 * Process each baseDataset file into their json file equivalent
 *
 * @returns {Promise<void>} - Promise that resolves when all files are done processing
 */
module.exports = async () => {
  logger.info('Processing csv files into json files');
  const inflationByYear = {};
  await readCSV({
    path: inflationFile.path,
    onData: (row) => {
      const year = parseInt(row.ejercicio_presupuestario);
      inflationByYear[year] = parseFloat(row.tasa_ajuste_inflacion);
    }
  });
  for (let i=0; i<years.length; i++) {
    const year = years[i];
    const yearFiles = files.filter(file => file.year === year);
    const inflation = inflationByYear[year];
    await datasetToJSON({ files: yearFiles, inflation });
  }
  logger.info('Finished processing csv files into json files');
};
