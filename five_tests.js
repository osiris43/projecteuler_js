var should = require('should');
var five = require('./five');
var _ = require('underscore');

describe('problem five', function(){
  it("should say 2520 is LCM of 1..10", function(){
    five.LCM(_.range(1,11)).should.equal(2520);
  })
  it("should say 2520 is LCM of 1..20", function(){
    five.LCM(_.range(1,21)).should.equal(232792560);
  })
});
