var should = require('should');
var seven = require('./seven');
var _ = require('underscore');

describe('problem seven', function(){
  it("should say the sixth prime is 13", function(){
    seven.calculate(6).should.equal(13);
  })
  it("should say the 10001st prime is 13", function(){
    seven.calculate(10001).should.equal(104743);
  })
});
