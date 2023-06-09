//CHAP: 26-30 (MATH METHODS)

// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num = prompt("Enter a positive integer: ");
document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num) + "<br>");

// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num = prompt("Enter a negative floating-point number: ");
document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num) + "<br>");


// Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var num = prompt("Enter a number: ");
document.write("The absolute value of " + num + " is " + Math.abs(num));

// Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your browser

var dice = Math.floor(Math.random() * 6) + 1;
document.write("The value of the dice is: " + dice);

// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in you browser

var coin = Math.floor(Math.random() * 2) + 1;
if (coin === 1) {
  document.write("The value of the coin is: Heads");
} else {
  document.write("The value of the coin is: Tails");
}

//  Write a program that shows a random number between 1 and 100 in your browser

var num = Math.floor(Math.random() * 100) + 1;
document.write("The random number between 1 and 100 is: " + num);

// Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var weight = prompt("Enter your weight: ");

// Remove any non-numeric characters from the input
weight = weight.replace(/[^\d.-]/g, "");

// Convert the weight to a number
weight = parseFloat(weight);

// Check if the weight is in kilograms or pounds
if (weight > 0 && weight < 1000) {
  document.write("Your weight is: " + weight + " kgs");
} else if (weight >= 1000 && weight < 1000000) {
  weight = weight / 1000;
  document.write("Your weight is: " + weight + " tons");
} else {
  document.write("Invalid weight input");
}

// Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user

var secretNumber = Math.floor(Math.random() * 10) + 1;
var userNumber = prompt("Enter a number between 1 and 10: ");
userNumber = parseInt(userNumber);
if (userNumber === secretNumber) {
  document.write("Congratulations! You guessed the secret number.");
} else {
  document.write("Sorry, the secret number was: " + secretNumber);
}
