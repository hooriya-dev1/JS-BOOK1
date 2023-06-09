// CHAP:6 (MATH EXPRESSIONS)

// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser

var num = 10;

console.log(num++); // Output: 11
console.log(num);   // Output: 12

console.log(++num); // Output: 13
console.log(num);   // Output: 13

console.log(num--); // Output: 13
console.log(num);   // Output: 12

console.log(--num); // Output: 11
console.log(num);   // Output: 11

// What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log("a: " + a);
console.log("b: " + b);
console.log("result: " + result);

// Write a program that takes input a name from user & 
// greet the user.

var user=prompt("Enter Your Name : ")
alert("Hey , " +user+" Welcome! to our website ");

// Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.

var num = prompt("Enter a number:");
if (num === null || num === "") {
  num = 5;
}
document.write("<h2>Multiplication Table of " + num + "</h2>");
for (var i = 1; i <= 10; i++) {
  document.write(num + " x " + i + " = " + num * i + "<br>");
}

// Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)

var English = prompt("Enter the name of first subject:");
var Math = prompt("Enter the name of second subject:");
var Urdu = prompt("Enter the name of third subject:");
var totalMarks = 100;
var obtainedMarks1 = prompt("Enter obtained marks for " + English + ":");
var obtainedMarks2 = prompt("Enter obtained marks for " + Math + ":");
var obtainedMarks3 = prompt("Enter obtained marks for " + Urdu + ":");
var totalObtainedMarks = parseInt(obtainedMarks1) + parseInt(obtainedMarks2) + parseInt(obtainedMarks3);
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

document.write("<table>");
document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + subject1 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + obtainedMarks1 + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + subject2 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + obtainedMarks2 + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + subject3 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + obtainedMarks3 + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td colspan='2'>Total Marks Obtained:</td>");
document.write("<td>" + totalObtainedMarks + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td colspan='2'>Percentage:</td>");
document.write("<td>" + percentage.toFixed(2) + "%</td>");
document.write("</tr>");
document.write("</table>");