/*'use strict';
//var math = require('mathjs');

console.log('Loading function');

exports.handler = (event, context, callback) => {
   
    console.log("plinggggg..............wtf");
    //console.log("matha result-------------------",math.log(10000, 10))
};*/



var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: 'The time in Los Angeles is: ' + currentTime.toString(),
    });
};

