var moment = require('moment');


// Jan 1st 1970 00:00:00

// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonths());
// var date = moment();
// console.log(date.format('MMM Do, YYYY'));

// 5:29 pm prints like this:
// console.log("challenge:");
// var ndate = moment();
// console.log(ndate.format('h:mm a'));

var someTimestamp = moment().valueOf();
// console.log(someTimestamp.format('MMM Do, YYY h:mm a'));

var date = 1234;
var formDate = moment(date).format('MMM Do, YYYY h:mm a');
console.log(formDate);
