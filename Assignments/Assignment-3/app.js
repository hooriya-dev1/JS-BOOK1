// CHAP:3 (VARIABLES FOR NUMBERS)

// Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = 23;
alert("I am " + age + " years old");

// Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var visits = 0;
visits++;
alert("You have visited this site " + visits + " times");

// Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser

var birthYear = 2003; 
document.write("My birth year is " + birthYear);

// A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”

var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");
