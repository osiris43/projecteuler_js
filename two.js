var _ = require('underscore');

var fib = function(num){
  var start = 1;
  var cache = {};

  if(num <= 2){
    return num;
  } else{
    cache[num] = fib(num-2) + fib(num-1)
    return cache[num]
  }
};

var isEven = function(num){
  return num%2===0;
};

var sumOfEvenFibs = function(lessThan){
  var sum = 0;
  var result = 1;
  var counter = 1;
  while(result < lessThan){
    result = fib(counter);
    if(isEven(result)){
      sum += result;
    }
    counter++;
  }

  return sum;
};

module.exports.fib = fib;
module.exports.isEven = isEven;
module.exports.sumOfEvenFibs = sumOfEvenFibs;
