const path = require('path');
const fs = require('fs');

class Logger {
  constructor(filename) {
    this.filename = filename;
  }

  read() {
    return fs.readFileSync(this.filename, 'utf-8');
  }

  write(content) {
    fs.appendFileSync(this.filename, content);
  }
}

module.exports = new Logger();