var _ = require('underscore');
var lib = require('./lib');

var isPalindrome = function(num){
  var chars = String(num).split('');
  var first = _.first(chars, chars.length/2);
  var second = _.last(chars, chars.length/2);
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

var solution = function(){
  var found = false;
  for(var i=998001;i>0; i--){
    if(found){
      break;
    }

    if(isPalindrome(i)){
      var factors = lib.factorize(i);
      for(var x=0;x<factors.length;x+=2){
        if((factors[x].toString().length === 3) && (factors[x+1].toString().length ===3)){
          console.log(i);
          found=true;
          break;
        }
      }
    }
  }
};

module.exports.isPalindrome= isPalindrome;
module.exports.solution = solution;
