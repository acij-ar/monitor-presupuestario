const fs = require('fs');
const path = require('path');

class Texts {
    constructor() {
        this.filePath = path.join(__dirname, 'texts.json');
        this.rawFile = JSON.parse(fs.readFileSync(this.filePath));
        this.parseContent();
    }

    parseContent() {
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

    saveNewContent(newContent) {
        this.rawFile = newContent;
        fs.writeFileSync(this.filePath, JSON.stringify(newContent, null, 2));
        this.parseContent();
    }
}

module.exports = new Texts();
