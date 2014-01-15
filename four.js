var _ = require('underscore');

var isPalindrome = function(num){
  var chars = String(num).split('');
  var first = chars.slice(0,chars.length/2);
  var second = chars.slice(chars.length/2, chars.length );
  if(first.length === second.length){
    if(first.join("") === second.reverse().join("")){
      return true;
    }
  } else{
    if(first.join("") === _.rest(second, 1).reverse().join("")){
      return true;
    }
  }

  return false;

};

module.exports.isPalindrome= isPalindrome;
