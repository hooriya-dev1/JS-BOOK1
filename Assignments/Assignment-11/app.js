// CHAP: 21-25 (STRING METHODS)
// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var fullName = firstName + " " + lastName;
console.log("Hello, " + fullName + "!");

// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

var favoriteModel = prompt("What is your favorite mobile phone model?");
var inputLength = favoriteModel.length;
document.write("The length of your favorite mobile phone model is: " + inputLength);

// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser 

var word = "Pakistani";
var index = word.indexOf("n");
document.write("The index of 'n' in the word 'Pakistani' is: " + index);

// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser

var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex);

// Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

var word = "Pakistani";
var character = word.charAt(3);
document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);

// Repeat Q1 using string concat() method
var word1 = "Paki";
var word2 = "stani";
var word = word1.concat(word2);
var index = word.indexOf("n");
document.write("The index of 'n' in the word 'Pakistani' is: " + index);

// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var word = "Hyderabad";
var newWord = word.replace("Hyder", "Islam");
document.write("The new word is: " + newWord);

// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");

document.write("var message = " + newMessage);

// Write a program that converts a string “472” to a number 472. Display the values & types in your browser

var str = "472";
var num = Number(str);

document.write("Value : " + str + "<br>");
document.write("Type : " + typeof str + "<br>");
document.write("Value : " + num + "<br>");
document.write("Type : " + typeof num + "<br>");

// Write a program that takes user input. Convert and show the input in capital letters.

var userInput = prompt("Enter some text:");
var upperCaseInput = userInput.toUpperCase();
document.write("The original input was: " + userInput + "<br>");
document.write("The uppercase input is: " + upperCaseInput);

// Write a program that takes user input. Convert and show the input in title case.

var userInput = prompt("Enter some text:");
var words = userInput.split(" ");
var titleCaseWords = [];

for (var i = 0; i < words.length; i++) {
  var word = words[i];
  var firstLetter = word.charAt(0).toUpperCase();
  var restOfWord = word.slice(1).toLowerCase();
  var titleCaseWord = firstLetter + restOfWord;
  titleCaseWords.push(titleCaseWord);
}
var titleCaseInput = titleCaseWords.join(" ");
document.write("The original input was: " + userInput + "<br>");
document.write("The title case input is: " + titleCaseInput);

// Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser

var num = 35.36;
var str = num.toString();
var result = str.replace(".", "");
document.write("The original number was: " + num + "<br>");
document.write("The converted string is: " + result);


// Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ 

var username = prompt("Enter your username:");
if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
  alert("Please enter a valid username without any special symbols.");
} else {
  alert("Your username is: " + username);
}

// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search for:");

var found = false;
for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput.toLowerCase()) {
    found = true;
    break;
  }
}

if (found) {
  alert(userInput + " is available in the list.");
} else {
  alert(userInput + " is not available in the list.");
}

// Write a program to take password as an input from  user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document

var password = prompt("Enter a password:");
var firstChar = password.charAt(0);
if (password.length < 6) {
  alert("Password must be at least 6 characters long.");
} else if (!isNaN(firstChar)) {
  alert("Password should not start with a number.");
} else if (!/[a-z]/i.test(password) || !/\d/.test(password)) {
  alert("Password should contain alphabets and numbers.");
} else {
  alert("Password is valid.");
}

// Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University of Karachi";
var characters = university.split("");

for (var i = 0; i < characters.length; i++) {
  document.write(characters[i] + "<br>");
}

// Write a program to display the last character of a user input

var input = prompt("Enter a string:");
var lastChar = input.charAt(input.length - 1);
alert("The last character of the input is: " + lastChar);

// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string

var str = "The quick brown fox jumps over the lazy dog";
var count = 0;
var words = str.split(" ");

for (var i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() === "the") {
    count++;
  }
}
alert("The word 'the' appears " + count + " times in the string.");
