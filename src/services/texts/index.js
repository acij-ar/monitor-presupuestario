const textsFile = require('./texts.json');

class Texts {
    constructor() {
        this.content = textsFile;
    }
}

module.exports = new Texts();
