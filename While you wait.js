/* 
While You Wait
Create a birthday countdown.

var daysUntilMyBirthday = 60;
For every day, print how many days left.

If it's more than 30 days, print a sad message.

If it's less than 30 days, print a message that sounds excited!

If it's less than 5 days, SCREAM IT!

ONCE IT'S YOUR BIRTHDAY, HAVE A PARTY!

60 days until my birthday. Such a long time... :(
59 days until my birthday. Such a long time... :(
58 days until my birthday. Such a long time... :( */

var daysUntilMyBirthday = 60;
if (daysUntilMyBirthday > 30){
    console.log(daysUntilMyBirthday + " days until my birthday. Such a long time ...:(")
}
if (daysUntilMyBirthday < 30){
    console.log(daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!!!")
}
if (daysUntilMyBirthday === 0){
    console.log ("Happy Birthday!")
}


