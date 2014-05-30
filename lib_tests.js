
var should = require('should');
var lib = require('./lib');

describe('lib', function(){
  it("should produce [2,10,4,5] for 20", function(){
      [2,10,4,5].should.eql(lib.factorize(20));
  })
});
