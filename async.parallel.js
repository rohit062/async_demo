var async = require('async');
async.parallel([
    function(callback) {
        setTimeout(function() {
            console.log("first is completed");
            callback(null, 'first')
        }, 2000);
    },
    function(callback) {
        setTimeout(function() {
            console.log("second is completed");
            callback(null, 'second')
        }, 100)
    }
], function(err, result) {
    console.log(result);
    console.log("process ended........");
});