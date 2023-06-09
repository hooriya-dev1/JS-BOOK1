// CHAP:4 (VARIABLES NAME: LEGAL & ILLEGAL)
// Declare 3 variables in one statement

var firstName = "John", lastName = "Doe", age = 30;

// Declare 5 legal & 5 illegal variable names

// Legal Variables
var myVariable;
var _first
var firstName
var num2
var $price

// Illegal variable names:
// 4thNumber (starts with a number)
// my-var (contains a hyphen)
// var (reserved keyword)
// first name (contains a space)
// true (reserved keyword)

// Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// a) Display the heading
document.write("<h1>Rules for naming JS variables</h1>");

// b) Display the allowed characters in variable names
document.write("Variable names can only contain letters, digits, underscores, and dollar signs. For example: $my_1stVariable<br>");

// c) Display the requirement for the starting character in variable names
document.write("Variables must begin with a letter, underscore, or dollar sign. For example: $name, _name, or name<br>");

// d) Display the case sensitivity of variable names
document.write("Variable names are case sensitive<br>");

// e) Display the recommendation against using reserved keywords as variable names
document.write("Variable names should not be JS keywords<br>");
