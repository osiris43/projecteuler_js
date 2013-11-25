var should = require('should');
var two = require('./two');

describe('problem two', function(){
  it("should be 5 for the fourth fib", function(){
    two.fib(4).should.equal(5);
  })

  it("should be 8 for the fifth fib", function(){
    two.fib(5).should.equal(8);
  })

  it("should say 4 is even", function(){
    two.isEven(4).should.equal(true);
  })

  it("should say even sums below 50 is 44", function(){
    two.sumOfEvenFibs(50).should.equal(44);
  })

  it("should correctly answer the problem", function(){
    two.sumOfEvenFibs(4000000).should.equal(4613732);
  })
});
