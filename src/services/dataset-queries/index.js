const updateTreeMapQueries = require('./update-treemap-data');
const fs = require('fs');
const path = require('path');

const loadJSON = (filename) => {
    const filePath = path.join(__dirname, filename);
    const fileContent = fs.readFileSync(filePath);
    return JSON.parse(fileContent);
};

class DatasetQueries {
    constructor() {
        this._treeMapData = loadJSON('treemap-data.json');
    }

    async update() {
        console.log('Starting data queries');
        await updateTreeMapQueries();
        this._treeMapData = loadJSON('treemap-data.json');
        console.log('Finished data queries');
    }

    treeMapData() {
        return this._treeMapData;
    }
}
module.exports = new DatasetQueries;

