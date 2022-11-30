const convertToCelsius = function(tmp) {
  return Math.round(((tmp - 32) * .5556) * 10) / 10;
};

const convertToFahrenheit = function(tmp) {
  return Math.round(((tmp * 1.8) + 32) * 10) / 10;
};

//  SOLUTION  //

/*

const convertToCelsius = function(fahrenheit) {
  return Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius * 9/5) + 32) * 10) / 10;
};


module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

*/

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
