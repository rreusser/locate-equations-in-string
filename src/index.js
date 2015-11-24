'use strict'

const defaults = {
  inlineMath: [
    ['\\(', '\\)']
  ],
  displayMath: [
    ['$$', '$$'],
    ['\\begin{equation*?}', '\\end{equation}']
  ],
  processEscapes: true
}

var Locator = function Locator (config) {
  this.config = Object.assign({}, defaults, config || {})
}

Locator.prototype.process = function (str) {
  return []
}

export default Locator
