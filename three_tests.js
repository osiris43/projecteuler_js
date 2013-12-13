var should = require('should');
var three = require('./three');

describe('problem three', function(){
  it("should produce [5,7,13,29] for 13195", function(){
    [5,7,13,29].should.eql(three.factorize(13195));
  })

  it("should produce [2,3,5,7,11,13,17,19] for primes less than 20", function(){
      [2,3,5,7,11,13,17,19].should.eql(three.primesLessThan(20));
  })

  it("should produce [2,5] for factors of 20", function(){
      [2,5].should.eql(three.factorize(20));
  })

  it("should produce x for 600851475143", function(){
      var factors = three.factorize(1475143);
      console.log(factors[factors.length-1]);
  })
});
