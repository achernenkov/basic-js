const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if(typeof sampleActivity === "string" && +sampleActivity) {
    sampleActivity = +sampleActivity
    if(sampleActivity <= 0 || sampleActivity >= MODERN_ACTIVITY) {
      return false;
    }
  } else {
    return false;
  }

  return  MODERN_ACTIVITY/sampleActivity/(0.693 /HALF_LIFE_PERIOD)

};
