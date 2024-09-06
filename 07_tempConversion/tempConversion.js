const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9);
  if(celsius % 1 != 0) { celsius = Number.parseFloat(celsius.toFixed(1)); }
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  if(fahrenheit % 1 != 0) { fahrenheit = Number.parseFloat(fahrenheit.toFixed(1)); }
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
