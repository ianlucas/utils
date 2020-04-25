/**
 * Copy a text to the clipboard.
 *
 * @param {String} text - the text to be copied to the clipboard.
 */
function copyText(text) {
  const textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.value = text;
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

module.exports = copyText;
