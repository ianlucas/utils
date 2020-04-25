function readFile(extensions) {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    if (extensions) {
      input.setAttribute('accept', extensions);
    }
    input.addEventListener('change', () => {
      const [file] = this.files;
      if (!file) {
        resolve('');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsText(file, 'UTF-8');
    });
    input.click();
  });
}

module.exports = readFile;
