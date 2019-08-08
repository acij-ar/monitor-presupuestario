const fs = require('fs');
const cleanYearDataset = require('./clean-year-dataset');

module.exports = async (dataset) => {
    const { isYearDataset, rawPath, filePath } = dataset;
    if (isYearDataset) {
        await cleanYearDataset(dataset);
    } else {
        console.log('Skipping cleaning routine');
        fs.copyFileSync(rawPath, filePath)
    }
};
