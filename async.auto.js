    console.log("---------------------------------");
    console.log("         ASYNC AUTO EXAMPLE      ");
    console.log("---------------------------------");
    var async = require('async');
    async.auto({
        first: function(callback) {
            setTimeout(function() {
                console.log("-----first function executed----\n\n");
                callback(null, '-first-');
            }, 1000)
        },
        second: function(callback) {
            setTimeout(function() {
                console.log("-------second function executed------\n\n");
                callback(null, '-second-');
            }, 100)
        },
        third: ['first', 'second', function(result, callback) {
            console.log("result parameter of third-->", result, "\n\n");
            setTimeout(function() {
                console.log("-------third function executed-------\n\n");
                callback(null, '-third-');
            }, 1000)
        }],
        fourth: ['second', function(result, callback) {
            setTimeout(function() {
                console.log("-----fourth function executed--------\n\n\n");
                callback(null, '-fourth-');
            }, 100)
        }]
    }, function(err, result) {
        if (err) {
            console.log(err);
            return
        }
        console.log("final callback-->result .....", result, "\n\n");

    });