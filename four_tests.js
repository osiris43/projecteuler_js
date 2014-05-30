var should = require('should');
var four = require('./four');

describe('problem four', function(){
  it("should say 11 is a palindrome", function(){
    four.isPalindrome(11).should.equal(true);
  })

  it("should say 121 is a palindrome", function(){
    four.isPalindrome(121).should.equal(true);
  })

  it("should say 1221 is a palindrome", function(){
    four.isPalindrome(1221).should.equal(true);
  })

  it("logs factors of palindromes", function(){
    four.solution();
  })
});
