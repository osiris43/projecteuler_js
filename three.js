var _ = require('underscore');

var isPrime = function(num){
  return factorize(num).length === 0;
}
var factorize = function(num){
  factors = [];
  for(var i = 2; i<Math.sqrt(num); i++){
    if(num %i === 0){
      factors.push(i);
      factors.push(num/i);
    }
  }

  return factors;
};

var getLargestPrime = function(num) {
  var factors = factorize(num);
  var currentPrime = 0;
  for(var i = 0; i < factors.length; i++){
    if(isPrime(factors[i])){
      if(factors[i] > currentPrime){
        currentPrime = factors[i];
      }
    }
  }

  return currentPrime;
}

module.exports.factorize = factorize;
module.exports.isPrime = isPrime;
module.exports.getLargestPrime = getLargestPrime;
