const elasticlunr = require('elasticlunr');
const db = require('../db');
const normalizeName = require('../../utils/normalize-name');
const resultsToListForSelect = require('../helpers/results-to-list-for-select');

// TODO configure language https://github.com/MihaiValentin/lunr-languages

class SearchService {
  constructor() {
    this.buildIndex();
  }

  buildIndex() {
    this.index = elasticlunr();
    this.index.addField('label');
    this.index.setRef('id');

    const results = db.prepare('SELECT year, name, entity_type, entidades.id AS id FROM entidades JOIN presupuestos ON entidades.id = entity_id').all();
    const processedResults = resultsToListForSelect({results});
    processedResults.map(searchableDocument => this.index.addDoc(searchableDocument));
  }

  search(searchString) {
    const deburredSearchString = normalizeName(searchString);
    const refResults = this.index.search(deburredSearchString, {expand: true});
    return refResults
      .filter(result => result.score > 0.1) // TODO validate
      .map(({ref}) => this.index.documentStore.getDoc(ref));
  }
}

module.exports = new SearchService();

