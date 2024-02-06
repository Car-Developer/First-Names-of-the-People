const NamesList = require("../country/state/city/index.js");
const FirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (NamesList) => {
  return FirstNames(NamesList);
};
module.exports = getPeopleInCity;

console.log(getPeopleInCity(NamesList));
