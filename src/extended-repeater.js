const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(typeof str != 'string'){
    String(str)
  }
  if (typeof options.addition != "string"){
    options.addition = String(options.addition)
  }

  // init value
    let addition = options.addition ? options.addition : ''
    let separator = options.separator ? options.separator : '+'
    let additionSeparator = options.additionSeparator ? options.additionSeparator : '|'
    let repeatTimes = options.repeatTimes ? options.repeatTimes : 1
    let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1
  // end init value

  let  valueResult = ''


  if(addition === 'undefined'){
    valueResult = (str + separator).repeat(repeatTimes -1) + str
  }else {
    let valueAddition = addition + additionSeparator
    let valueAdditionRepeat = valueAddition.repeat(additionRepeatTimes - 1) + addition
    valueResult = (str + valueAdditionRepeat + separator).repeat(repeatTimes -1) + (str + valueAdditionRepeat)
  }

return valueResult

};
  