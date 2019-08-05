const elasticlunr = require('elasticlunr');
const db = require('../db');
const uid = require('uid');

class SearchService {
    constructor() {
        this.init();
    }

    async init() {
        this.index = elasticlunr();
        this.index.addField('name');
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
                processedResults[name] = {variants: [], table, uid: uid(), name};
            }
            processedResults[name].variants.push({year, id})
        });
        Object.values(processedResults).map(searchableDocument => this.index.addDoc(searchableDocument));
    }

    search(searchString) {
        return this.index.search(searchString).map(({ref}) => this.index.documentStore.getDoc(ref));
    }
}

module.exports = new SearchService();

