//Create a function that takes two dates and returns the number of days between the first and second date.
//we have to calculate the difference between the two dates
//difference would mean some type of subtraction
//May have to figure out how to subtract the month value, day value and year value at the same time
//creating the different date values //new date is something I remember from a java script crash course thats built into java script, allowing you to work with dates and times
let date1 = new Date("12/29/2018"); //this represents the past date
let date2 = new Date ("01/1/2019"); //this represents the new or current date depending on use

let timeDiff = date2.getTime() - date1.getTime(); //get Date returns the value for the specified date 

let getDays = timeDiff / (1000 * 3600 * 24); //you multiply the time differnece because getTime is tracked down to the milisecond so you multiply times 1000 miliseconds * (60 seconds * 60 minutes) *24 hours) I had to look up the formula for converting miliseconds to days but I got it
 
console.log(`it has been ${getDays} days, since ${date1}`); //this will display 'it has been 3 days, since Sat Dec 29 2018 00:00:00 GMT-0500 (Eastern Standard Time)' to the console

//I started putting java script crash course videos on in the background while I work on other homework, kinda just as white noise and I remember them going over a problem very similar to this where they explained the built in new date and get time objects
