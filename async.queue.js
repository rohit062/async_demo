var async = require('async');
var task = async.queue(function(task, callback) {

    console.log("Task started no :-" + task.name);
    console.log("Wating to complete........");
    setTimeout(function() {
        callback();
    }, 1000);

}, 1);

var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
input.forEach(function(element) {
    task.push({ name: element }, function(err) {
        if (err) {
            console.log(err);
            return;
        }
        // console.log("running");
    });
})
task.unshift({ name: 0 }, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("moved to the front");
})