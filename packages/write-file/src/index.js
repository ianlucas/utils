const FileSaver = require('file-saver');

function writeFile(name, content, type = 'application/json;charset=utf-8') {
  const blob = new Blob([content], { type });
  FileSaver.saveAs(blob, name);
}

module.exports = writeFile;
