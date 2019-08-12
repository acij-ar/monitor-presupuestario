const elasticlunr = require('elasticlunr');
const db = require('../db');
const _ = require('lodash');
const resultsToListForSelect = require('../helpers/results-to-list-for-select');

// TODO configure language https://github.com/MihaiValentin/lunr-languages

class SearchService {
    constructor() {
        this.init();
    }

    async init() {
        this.index = elasticlunr();
        this.index.addField('label');
        this.index.setRef('value');
        await db.initPromise;
        const tables = ['jurisdicciones', 'programas', 'actividades'];
        const documentsPromises = tables.map(table => this.addDocuments(table));
        return Promise.all(documentsPromises)
    }

    async addDocuments(table) {
        const results = await db.sqlite.all(`SELECT year, name, id FROM ${table}`);
        const processedResults = resultsToListForSelect({results, table});
        processedResults.map(searchableDocument => this.index.addDoc(searchableDocument));
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

