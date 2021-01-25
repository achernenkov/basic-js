const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw Error();
  }

  let resultArray = [];
  for(let i = 0; i < arr.length; ++i) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if(i > 0 && arr[i - 2] !== '--discard-next') {
          resultArray.pop();
        }
        break;
      case "--double-next":
        if(i < arr.length - 1) {
          resultArray.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if(i > 0 && arr[i - 2] !== '--discard-next') {
          resultArray.push(arr[i - 1]);
        }
        break;
      default:
        resultArray.push(arr[i]);
    }
  }
  return resultArray;
};