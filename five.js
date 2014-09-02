var _ = require('underscore');
var lib = require('./lib');

var LCM = function(range){
  var primeFactorsCount = {};

  for(var i=0;i<range.length;i++){
    var temp = {};
    var factors = lib.primeFactorize(range[i]);
    for(var x=0;x<factors.length;x++){
      temp[factors[x]] = temp[factors[x]] === undefined ? 1 : temp[factors[x]] + 1;
    }

    for(var k in temp){
      if(primeFactorsCount[k]===undefined || temp[k] > primeFactorsCount[k]){
        primeFactorsCount[k] = temp[k];
      }
    }
  }

  result = 1;
  for(var key in primeFactorsCount){
    result = result * Math.pow(parseInt(key), primeFactorsCount[key]);
  }

  return result;
};

module.exports.LCM = LCM
