const elasticlunr = require('elasticlunr');
const db = require('../db');
const _ = require('lodash');

class SearchService {
    constructor() {
        this.init();
    }

    async init() {
        this.index = elasticlunr();
        this.index.addField('asciiName');
        this.index.setRef('uid');
        await db.initPromise;
        const tables = ['jurisdicciones', 'entidades', 'programas', 'actividades'];
        const documentsPromises = tables.map(table => this.addDocuments(table));
        return Promise.all(documentsPromises)
    }

    async addDocuments(table) {
        const results = await db.sqlite.all(`SELECT year, name, id FROM ${table}`);
        const processedResults = {};
        results.map(({name, year, id}) => {
            if (!processedResults[name]) {
                processedResults[name] = {
                    table,
                    name,
                    asciiName: _.deburr(name),
                    variants: [],
                    uid: `${table}-${name}`,
                };
            }
            processedResults[name].variants.push({year, id})
        });
        Object.values(processedResults).map(searchableDocument => this.index.addDoc(searchableDocument));
    }

    search(searchString) {
        const deburredSearchString = _.deburr(searchString);
        const refResults = this.index.search(deburredSearchString);
        return refResults.map(({ref}) => this.index.documentStore.getDoc(ref));
    }
}

module.exports = new SearchService();

