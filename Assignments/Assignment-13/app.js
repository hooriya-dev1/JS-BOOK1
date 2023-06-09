// CHAP: 31-34 (DATE METHODS)
// Write a program that displays current date and time in your browser.

var currentDate = new Date();
document.write("Current date and time: " + currentDate);

//  Write a program that alerts the current month in words. For example December.

var currentDate = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = months[currentDate.getMonth()];
alert("The current month is : " + currentMonth);

// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

var currentDate = new Date();
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = days[currentDate.getDay()];
alert("The current day is: " + currentDay);

//  Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

var currentDate = new Date();
var currentDay = currentDate.getDay();
if (currentDay === 0 || currentDay === 6) {
  alert("It's Fun day!");
} else {
  alert("Sorry, it's not Fun day.");
}

// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

var currentDate = new Date();
var currentDay = currentDate.getDate();

if (currentDay < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}

//  Write a program that determines the minutes since  midnight, Jan. 1, 1970 and assigns it to a variable that  hasn't been declared beforehand. Use any variable you like to represent the Date object.

var currentDate = new Date();
var minutesSinceEpoch = currentDate.getTime() / 1000 / 60;

console.log(minutesSinceEpoch);

// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”

var currentDate = new Date();
var currentHour = currentDate.getHours();

if (currentHour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

// Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named laterDate

var laterDate = new Date(2020, 11, 31);

// Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan Note: 1st Ramadan was on June 18, 2015

var ramadanStartDate = new Date("June 18, 2015");
var today = new Date();
var timeDiff = today.getTime() - ramadanStartDate.getTime();
var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

alert("Number of days since 1st Ramadan: " + daysDiff);

// Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the beginning of 2015

var beginningDate=new Date("June 18,2015");
var referenceDate=new Date("June 18,1990");
var diff=beginningDate.getTime() - referenceDate.getTime();
var secondElapsed = Math.ceil(diff /1000 );
document.write("Seconds that elapsed between the reference date and the beginning date :"+secondElapsed)
document.write("<br>");
document.write("<br>");

// Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write("Current date: " + currentDate);

//  Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert("Date 100 years ago: " + currentDate);

//  Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

var age = prompt("What's your age?");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your birth year is " + birthYear);

// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var currentMonth = new Date().toLocaleString('default', { month: 'long' });
var numberOfUnits = prompt("Enter number of units:");
var customerName = prompt("Enter your name:");
var chargesPerUnit = 16;
var netAmountPayable = numberOfUnits * chargesPerUnit;
var latePaymentSurcharge = netAmountPayable > 0 ? netAmountPayable * 0.1 : 0;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

document.write("<h1>K-Electric Bill</h1>");
document.write("<p>Customer Name: " + customerName + "</p>");
document.write("<p>Month: " + currentMonth + "</p>");
document.write("<p>Number of units: " + numberOfUnits + "</p>");
document.write("<p>Charges per unit: " + chargesPerUnit.toFixed(2) + "</p>");
document.write("<br>");
document.write("<p>Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "</p>");
document.write("<p>Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p>Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "</p>");

