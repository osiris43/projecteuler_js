
var should = require('should');
var lib = require('./lib');

describe('lib', function(){
  it("should produce [2,10,4,5] for 20", function(){
      [1,20,2,10,4,5].should.eql(lib.factorize(20));
  })
  it("should produce [1,9,3,3] for 9", function(){
      [1,9,3,3].should.eql(lib.factorize(9));
  })
  it("should say 23 is prime", function(){
    lib.isPrime(23).should.eql(true);
  })
  it("should produce [1,7] for 7", function(){
    [1,7].should.eql(lib.factorize(7));
  })
  it("should produce [2,3] as prime factors for 6", function(){
    [2,3].should.eql(lib.primeFactorize(6));
  })
  it("should produce [2,3,3,3] as prime factors for 54", function(){
    [2,3,3,3].should.eql(lib.primeFactorize(54));
  })
  it("should say sum of squares for first 10 natural numbers is 385", function(){
    lib.calculateSumOfSquares(10).should.eql(385);
  })
  it("should say square of sums for first 10 natural numbers is 3025", function(){
    lib.calculateSquareOfSum(10).should.eql(3025);
  })
});
