const convertToCelsius = function(tmp) {
  return Math.round(((tmp - 32) * .5556) * 10) / 10;
};

const convertToFahrenheit = function(tmp) {
  return Math.round(((tmp * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
