const textsFile = require('./texts.json');

class Texts {
    constructor() {
        this.rawFile = textsFile;
        this.updateContent();
    }

    updateContent() {
        const monitorSection = this.rawFile.find(section => section.id === 'monitor');
        const comparatorSection = this.rawFile.find(section => section.id === 'comparator');
        const getText = (section, textId) => section.texts.find(text => text.id === textId).content;
        this.content = {
            monitor: {
                title: getText(monitorSection, 'title'),
                description: getText(monitorSection, 'description'),
            },
            comparator: {
                title: getText(comparatorSection, 'title'),
                description: getText(comparatorSection, 'description'),
            }
        }
    }
}

module.exports = new Texts();
