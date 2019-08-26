const elasticlunr = require('elasticlunr');
const db = require('../db');
const _ = require('lodash');
const { db: dbConfig } = require('../../config');
const resultsToListForSelect = require('../helpers/results-to-list-for-select');

// TODO configure language https://github.com/MihaiValentin/lunr-languages

class SearchService {
    constructor() {
        this.index = elasticlunr();
        this.index.addField('label');
        this.index.setRef('value');

        dbConfig.tables.filter(table => table.isSearchable).map(table => {
            const results = db.prepare(`SELECT year, name, id FROM ${table.name}`).all();
            const processedResults = resultsToListForSelect({results, table});
            processedResults.map(searchableDocument => this.index.addDoc(searchableDocument));
        });
    }

    search(searchString) {
        const deburredSearchString = _.deburr(searchString);
        const refResults = this.index.search(deburredSearchString, {expand: true});
        return refResults
            .filter(result => result.score > 0.1) // TODO validate
            .map(({ref}) => this.index.documentStore.getDoc(ref));
    }
}

module.exports = new SearchService();

