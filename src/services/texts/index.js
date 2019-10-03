const fs = require('fs');
const path = require('path');

class Texts {
  constructor() {
    this.filePath = path.join(__dirname, 'texts.json');
    this.content = JSON.parse(fs.readFileSync(this.filePath));
  }

  saveNewContent(newContent) {
    this.content = newContent;
    fs.writeFileSync(this.filePath, JSON.stringify(newContent, null, 2));
  }
}

module.exports = new Texts();
