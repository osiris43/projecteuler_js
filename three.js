var _ = require('underscore');

var factorize = function(num){

    return _.filter(primesLessThan(num), function(b){return num % b === 0})
};

var primesLessThan = function(num){
    return sieve(num);
};

var sieve = function(num){
    var primes = [];
    var a = [];
    for(var i = 2; i<Math.sqrt(num); i++)
    {
        a.push(i);
    }

    var done = false;
    var p = 2;
    var x = 2;
    while(!done){
        primes.push(p);
        a = _.filter(a, function(b){ return b % x != 0;})
        p = a[0];
        if(a.length === 0){
            done = true;
        }
        x = p;
    }

    return primes;
}


module.exports.factorize = factorize;
module.exports.primesLessThan = primesLessThan;
