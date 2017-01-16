var async = require("async");
async.waterfall([
    function(callback) { //first function is completed and pass the result to second function
        setTimeout(function() {
            callback(null, 1, 2);
        }, 200);
    },
    function(first, second, callback) { //second function passs the result to third function
        setTimeout(function() {
            console.log("funcion" + first + " " + second + "is executed");
            callback(null, 3);
        }, 200);
    },
    function(first, callback) { //third function is executed and pass the result to final function
        setTimeout(function() {
            console.log("funcion" + first + "is executed");
            callback(null, 4);
        }, 200);
    }
], function(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("final task" + result + " is executed");
})