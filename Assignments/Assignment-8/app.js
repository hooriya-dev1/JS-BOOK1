// CHAP: 12-13 (IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS)

// Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

var char = prompt("Enter a character:");
if (char >= 48 && char <= 57) {
    alert("The input is a number.");
} else if (char >= 65 && char <= 90) {
    alert("The input is an uppercase letter.");
} else if (char >= 97 && char <= 122) {
    alert("The input is a lowercase letter.");
} else {
    alert("Invalid input! Please try again.");
}

// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal

var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));
if (num1 === num2) {
    alert("The two integers are equal.");
} else if (num1 > num2) {
    alert("The larger integer is " + num1 + ".");
} else {
    alert("The larger integer is " + num2 + ".");
}

// Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

var num = parseInt(prompt("Enter a number:"));
if (num > 0) {
    alert("The number is positive.");
} else if (num < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var char = prompt("Enter a character:");
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    alert("The character is a vowel.");
} else {
    alert("The character is not a vowel.");
}

// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise

var correctPassword = "password123";
var userPassword = prompt("Enter your password:");
if (userPassword === "") {
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}

// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

// var time = prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):");

// if (time >= 0000 && time< 1200) {
//   alert("Good morning");
// } else if (time >= 1200 && time < 1700) {
//   alert("Good afternoon");
// } else if (time >= 1700 && time< 2100) {
//   alert("Good evening");
// } else if (time >= 2100 && time < 2359) {
//   alert("Good night"); 
// } else {
//   alert("Invalid time format");
// }


