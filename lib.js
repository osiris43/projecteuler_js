var _ = require('underscore');

var factorize = function(num){
  if(num === 1){
    return [];
  }

  factors = [];
  factors.push(1)
  factors.push(num)
  for(var i = 2; i<=Math.sqrt(num); i++){
    if(num %i === 0){
      factors.push(i);
      factors.push(num/i);
    }
  }

  return factors;
};

var isPrime = function(num){
  return factorize(num).length === 2;
}

var primeFactorize = function(num){
  var primes = [];
  var candidates = _.range(2, num+1);
  candidate = 2
  while(primes.length == 0 && candidate < num + 1){

    if(num%candidate == 0 && isPrime(candidate)){
      primes = primes.concat([candidate]).concat(primeFactorize(num/candidate));
    }
    candidate += 1;
  }
  return primes;
}

var calculateSumOfSquares = function(ceiling){
  var numbers = _.range(1, ceiling+1);
  var i = 0;
  var sumOfSquares = 0;
  for(i=0;i<numbers.length;i++){
    sumOfSquares += Math.pow(numbers[i], 2);
  }

  return sumOfSquares;
}

var calculateSquareOfSum = function(ceiling){
  var numbers = _.range(1, ceiling+1);
  var sum = _.reduce(_.range(1, ceiling+1), function(memo, num){ return memo + num;}, 0);
  return Math.pow(sum, 2);
}

module.exports.factorize = factorize;
module.exports.isPrime = isPrime;
module.exports.primeFactorize = primeFactorize;
module.exports.calculateSumOfSquares = calculateSumOfSquares;
module.exports.calculateSquareOfSum = calculateSquareOfSum;
