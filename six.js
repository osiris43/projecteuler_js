var _ = require('underscore');
var lib = require('./lib');

var calculate = function(num){
  return lib.calculateSquareOfSum(num) - lib.calculateSumOfSquares(num);
}

module.exports.calculate = calculate;
