// CHAP: 13-15 (ARRAYS)

// Declare an empty array using JS object notation to store
// student names in future

var studentNames = {
    names: []
  };
  studentNames.names.push("Zayn");
  studentNames.names.push("Ali");
  studentNames.names.push("Ahmed");
    
// Declare and initialize a strings array

var stringArrays = ["apple", "banana", "orange"];

// Declare and initialize a numbers array

var numbersArray = [1, 2, 3, 4, 5];

// Declare and initialize a boolean array

var booleanArray = [true, false, true];

// Declare and initialize a mixed array.

var mixedArray = ["apple", 3, true];

// Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like.

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
for (var i = 0; i < qualifications.length; i++) {
  document.write((i+1) + ") " + qualifications[i] + "<br>");
}

// Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like

var studentNames = ["Alyna", "Zaynab", "Rabail"];
var studentScores = [430, 380, 420];

for (var i = 0; i < studentNames.length; i++) {
  var percentage = (studentScores[i] / 500) * 100;
  document.write("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage.toFixed(2) + "%<br>");
}

// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var colors = ["red", "green", "blue"];

// // Display the array elements
document.write("Initial array: " + colors.join(", ") + "<br>");

// Add color to the beginning
var colorToAdd = prompt("Enter color to add to the beginning:");
colors.unshift(colorToAdd);
document.write("Array after adding color to the beginning: " + colors.join(", ") + "<br>");

// Add color to the end
colorToAdd = prompt("Enter color to add to the end:");
colors.push(colorToAdd);
document.write("Array after adding color to the end: " + colors.join(", ") + "<br>");

// Add two more colors to the beginning
colors.unshift("purple", "orange");
document.write("Array after adding two more colors to the beginning: " + colors.join(", ") + "<br>");

// Delete the first color
colors.shift();
document.write("Array after deleting the first color: " + colors.join(", ") + "<br>");

// Delete the last color
colors.pop();
document.write("Array after deleting the last color: " + colors.join(", ") + "<br>");

// Add color at a specific index
var indexToAdd = prompt("Enter index to add color:");
colorToAdd = prompt("Enter color to add at index " + indexToAdd + ":");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("Array after adding color at index " + indexToAdd + ": " + colors.join(", ") + "<br>");

// Delete colors from a specific index
var indexToDelete = prompt("Enter index to delete colors from:");
var numToDelete = prompt("Enter number of colors to delete:");
colors.splice(indexToDelete, numToDelete);
document.write("Array after deleting " + numToDelete + " colors from index " + indexToDelete + ": " + colors.join(", ") + "<br>");


// Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort  method.

var scores = [68, 75, 82, 90, 55, 74, 88, 92, 77, 81];

// unsorted array
document.write("Unsorted array: " + scores.join(", ") + "<br>");

// Sort the array in ascending order
scores.sort(function(a, b) {
  return a - b;
});

// sorted array
document.write("Sorted array: " + scores.join(", ") + "<br>");

// Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array

var cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
var selectedCities = [];
selectedCities = cities.slice(0, 3);
document.write("Selected cities: " + selectedCities.join(", "));

// Write a program to create a single string from the  below mentioned array var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method 

var arr = ["This", "is", "my", "cat"];
var str = arr.join(" ");
document.write(str);

// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

var queue = [];
queue.push("apple");
queue.push("banana");
queue.push("cherry");
document.write(queue.shift() + "<br>");
document.write(queue.shift() + "<br>");
document.write(queue.shift() + "<br>");

//  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");
