const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
  return a - b
};

const sum = function(arr) {
  let sums = arr.reduce((item,sum)=> {
    return sum + item
  }, 0)
  return sums
};

const multiply = function(...a) {
  let product = 0
  for (item of a){
    if (product === 0) product = item
    else product *= item
  }
  return product
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(a) {
  let sum = 1
  for (let i = a;i > 0; i--){
    sum *= i
  }
  return sum
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
