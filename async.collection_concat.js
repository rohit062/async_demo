var async = require('async');
//collection example
var input = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //declare a collection
//1 concat
//Applies iteratee to each item in input, concatenating the results. Returns the concatenated list.
//The iteratee are called in parallel, and the results are concatenated as they return. 
//There is no guarantee that the results array will be returned in the original order of coll passed to the iteratee function.

//-----------how to use------------
async.concat(input, function(element, callback) {
    element *= element;
    setTimeout(function() {
        callback(null, element);
    }, 1000 - element);


}, function(err, result) {
    console.log("first", result);
});
////------------one more example of concat---------
async.concat(input, function(element, callback) {
    element *= element;
    setTimeout(function() {
        callback(null, element);
    }, 10);


}, function(err, result) {
    console.log("second", result);
});