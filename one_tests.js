var should = require('should');
var one = require('./one');

describe('problem one', function(){
  it("should calculate value for under 10", function(){
    one.calculate(10).should.equal(23);
  })

  it("should calculate value for under 1000", function(){
    console.log(one.calculate(1000))
  })
});
