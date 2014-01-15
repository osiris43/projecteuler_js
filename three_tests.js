var should = require('should');
var three = require('./three');

describe('problem three', function(){
  it("should produce [2,10,4,5] for 20", function(){
      [2,10,4,5].should.eql(three.factorize(20));
  })

  it("should say 23 is prime", function(){
    three.isPrime(23).should.eql(true);
  })
  it("should produce 5 for 20", function(){
    three.getLargestPrime(20).should.eql(5);
  })

  it("should produce 6857 for the number", function(){
    three.getLargestPrime(600851475143).should.eql(6857);
  })
});
