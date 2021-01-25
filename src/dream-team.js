const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return members != null && members.length > 0 ? members.filter(el => typeof el === "string")
      .map(el => el.trim().charAt(0)
      .toUpperCase())
      .sort()
      .join('')
      :
      false
};
