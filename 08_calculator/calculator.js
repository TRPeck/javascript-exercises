const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function() {
	const arr = Array.from(arguments[0]);
  return arr.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function() {
  const arr = Array.from(arguments[0]);
  return arr.reduce((total, currentItem) => total * currentItem);
};

const power = function() {
  return arguments[0] ** arguments[1];
};

const factorial = function() {
	if(arguments[0] == 0) {
    return 1;
  }
  else {
    return arguments[0] * factorial(arguments[0] - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
