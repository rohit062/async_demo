var async = require('async');
//collection example
var input = [431, 23, 387, 134, 555, 655, 735, 678, 229]; //declare a collection
//1 reduce
//-----------how to use------------
async.reduce(input, 0, function(x, element, callback) {
    if (x < element)
        x = element;
    callback(null, x);

}, function(err, result) {
    console.log("first", result);
});