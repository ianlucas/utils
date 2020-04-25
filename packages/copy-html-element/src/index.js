/**
 * Copy the rendered HTML of an element or from a string to the clipboard.
 *
 * @param {HTMLElement|String} htmlElement - The HTML element to be copied or a HTML string.
 */
function copyHtmlElement(htmlElement) {
  let element = htmlElement;
  let dummy = null;

  if (typeof htmlElement === 'string') {
    dummy = document.createElement('div');
    dummy.innerHTML = htmlElement;
    document.body.appendChild(dummy);
    element = dummy;
  }

  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
    document.execCommand('Copy');
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('Copy');
  }

  if (dummy) {
    document.body.removeChild(dummy);
  }
}

module.exports = copyHtmlElement;
