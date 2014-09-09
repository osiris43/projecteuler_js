var _ = require('underscore');
var lib = require('./lib');

var calculate = function(num){
  var currentPrime = 2;
  var primeCount = 1;
  var temp = 0;
  var counter = currentPrime;

  while(primeCount < num){
    temp = counter + 1;
    if(lib.isPrime(temp)){
      currentPrime = temp;
      primeCount += 1;
      console.log(currentPrime);
    }

    counter += 1;
  }

  return currentPrime;
}

module.exports.calculate = calculate;
