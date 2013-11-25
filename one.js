
module.exports.calculate = function(num){
  var result = 0;
  for(var i = 0;i<num;i++){
    if(i%15 === 0 || i%5===0 || i%3===0){
      result += i;
    }
  }

  return result;
}
