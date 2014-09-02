var should = require('should');
var six = require('./six');
var _ = require('underscore');

describe('problem six', function(){
  it("should say 2640 is the difference between square of sum and sum of squares", function(){
    six.calculate(10).should.equal(2640);
  })
  it("should say 25164150 is the difference between square of sum and sum of squares", function(){
    six.calculate(100).should.equal(25164150);
  })
});
