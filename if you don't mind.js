/* 
If You Don't Mind, Can I Have The Time?
Create a program that will tell you the time.

With the following variables...

var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";
...your program should print "It's almost 9 in the morning"

And when changed to...

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";
...your program should print "It's just after 7 in the evening"

Challenge:
If minutes less than 30, "just after" the hour, more than 30, "almost" the next hour
AM / PM, "in the morning", "in the evening", 
*/
var hour = 8;
var minute = 50;
var period = "AM";
if (period){
    period = "in the morning"
}
else {
    period = "in the evening"
}
if (minute < 30){
    minute = "just after"
    hour = hour;
}
else {
    minute = "almost"
    hour = hour + 1;
}
console.log("it's ", minute, hour, period);


