var _ = require('underscore');
var lib = require('./lib');

var isPrime = function(num){
  return lib.factorize(num).length === 0;
}

var getLargestPrime = function(num) {
  var factors = lib.factorize(num);
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

module.exports.isPrime = isPrime;
module.exports.getLargestPrime = getLargestPrime;
