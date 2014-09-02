var should = require('should');
var three = require('./three');

describe('problem three', function(){
  it("should produce 5 for 20", function(){
    three.getLargestPrime(20).should.eql(5);
  })
  it("should produce 6857 for the number", function(){
    three.getLargestPrime(600851475143).should.eql(6857);
  })
});
