var _ = require('underscore');

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

module.exports.factorize = factorize;
