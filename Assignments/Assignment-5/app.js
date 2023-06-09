
// CHAP:5 (MATH EXPRESSIONS)
// Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

// Repeat task1 for subtraction, multiplication, division &
// modulus

var num1 = 3;
var num2 = 5;

var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtraction + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiplication + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + division + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus +"<br>");

// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.

// a. Declare a variable
var num;

// b. Show the value of the variable in the browser
document.write("Value after variable declaration is " + num + "<br>");

// c. Initialize the variable with some number
num = 5;

// d. Show the initial value of the variable in the browser
document.write("Initial value: " + num + "<br>");

// e. Increment the variable
num++;

// f. Show the value of the variable after increment in the browser
document.write("Value after increment is: " + num + "<br>");

// g. Add 7 to the variable
num += 7;

// h. Show the value of the variable after addition in the browser
document.write("Value after addition is: " + num + "<br>");

// i. Decrement the variable
num--;

// j. Show the value of the variable after decrement in the browser
document.write("Value after decrement is: " + num + "<br>");

// k. Show the remainder after dividing the variable's value by 3
var remainder = num % 3;

// l. Show the remainder in the browser
document.write("The remainder is: 0");

// Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output

var ticketPrice = 600;
var numOfTickets = 5;
var totalCost = ticketPrice * numOfTickets;
document.write("Total cost to buy " + numOfTickets + " tickets to a movie is " + totalCost + "PKR");

// Write a script to display multiplication table of any 
// number in your browser

var num = parseInt(prompt("Enter a number to display its multiplication table:"));
for(var i = 1; i <= 10; i++){
    document.write(num + " x " + i + " = " + num * i + "<br>");
}

// The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”

var celsiusTemp = 25;
var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F" + "<br>");
var fahrenheitTemp2 = 70;
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5 / 9;
document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");

// Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var item1Price = 500;
var item2Price = 800;
var item1Quantity = 2;
var item2Quantity = 1;
var shippingCharges = 150;
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
document.write("<h1>Shopping Cart Receipt</h1>");
document.write("Price of item 1 is " + item1Price + "</p>");
document.write("<p>Quantity of item 1 is " + item1Quantity + "</p>");
document.write("<p>Price of item 2 is " + item2Price + "</p>");
document.write("<p>Quantity of item 2 is " + item2Quantity + "</p>");
document.write("<p>Shipping charges are " + shippingCharges + "</p>");
document.write("Total cost of your order is " + totalCost + " ");

// Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h2>Marks Sheet</h2>");
document.write("<p>Total marks: " + totalMarks + "</p>");
document.write("<p>Marks obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage + "%</p>");

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var totalCurrencyInRupees = (10 * 104.80) + (25 * 28);
document.write("<h2>Currency in PKR</h2>");
document.write("<p>Total currency in PKR: " + totalCurrencyInRupees + "</p>")

// Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var number = 7;
var result = ((number + 5) * 10) / 2;
console.log("The final result is: " + result);

// The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

var currentYear = 2016;
var birthYear = 1992;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("<h2>Age Calculator</h2>");
document.write("<p>Current year: " + currentYear + "</p>");
document.write("<p>Birth year: " + birthYear + "</p>");
document.write("<p>Your Age is: " + age1 + "</p>");

// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable. b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius ** 2);
document.write("<h2>The Geometrizer</h2>");
document.write("<p>Radius of a circle: " + radius + "</p>");
document.write("<p>The circumference is " + circumference + "</p>");
document.write("<p>The area is " + area + "</p>");

// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”

var favoriteSnack = "chocolate";
var currentAge = 15;
var maximumAge = 65;
var amountPerDay = 3;
var totalSnacks = (maximumAge - currentAge) * 365 * amountPerDay;
document.write("<h2>The Lifetime Supply Calculator</h2>");
document.write("<p>Favorite snack: " + favoriteSnack + "</p>");
document.write("<p>Current age: " + currentAge + "</p>");
document.write("<p>Estimated amount per day: " + amountPerDay + "</p>");
document.write("<p>You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + "</p>");