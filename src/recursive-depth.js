const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth = (arr) => {
    return Array.isArray(arr) ?
        1 + (arr.length ? Math.max(...arr.map(this.calculateDepth)) :
        0) : 0
  }
};