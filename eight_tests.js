var should = require('should');
var eight = require('./eight');
var _ = require('underscore');

describe('problem eight', function(){
  it("should say the largest product of 4 numbers is 5832", function(){
    eight.calculate(4).should.equal(5832);
  })
  it("should say the largest product of 13 numbers is 23514624000", function(){
    eight.calculate(13).should.equal(23514624000);
  })
});
