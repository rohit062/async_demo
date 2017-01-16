var async = require("async");
async.series([
    function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 2);
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 3);
        }, 200);
    }
], function(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("task" + result + "executed");
})