// CHAP: 35-38 (FUNCTIONS)
// Write a function that displays current date & time in your browser.

document.write("<br>")
function displayCurrentDate() {
    var date = new Date();
    document.write(date)
}

displayCurrentDate();
document.write("<br>")



// Write a function that takes first & last name and then it 
// greets the user using his full name.

var firstName = 'John';
var lastName = 'Doe';
var greeting = greetUser(firstName, lastName);
console.log(greeting);


//  Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

function addNumbers(num1, num2) {
    const sum = num1 + num2;
    return sum;
  }
  

//  Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and show the desired result in your browser.

function calculate(num1, num2, operator) {
    var result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return 'Invalid operator';
    }
  
    return result;
  }  

//  Write a function that squares its argument.

function squareNumber(number) {
    const result = number * number;
    return result;
  }
  
// Write a function that computes factorial of a number.

function factorial(num) {
    var result = 1;
  
    for (var i = 2; i <= num; i++) {
      result *= i;
    }
  
    return result;
  }
    
// Write a function that take start and end number as inputs & display counting in your browser

function counting() {

    var startNumber=parseInt(prompt("Enter Starting Number :"));
    var endNumber=parseInt(prompt("Enter Ending Number :"));

    for(var i=startNumber;i<=endNumber;i++){
        document.write(i+"<br>");
    }  
}

//  Write a nested function that computes hypotenuse of a right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(number) {
      return number * number;
    }
  
    const baseSquare = calculateSquare(base);
    const perpendicularSquare = calculateSquare(perpendicular);
    const hypotenuseSquare = baseSquare + perpendicularSquare;
    const hypotenuse = Math.sqrt(hypotenuseSquare);
  
    return hypotenuse;
  }
  
// Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function calculateArea(width, height) {
    var area = width * height;
    return area;
  }
  

// Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.

function isPalindrome(string) {
    const reversedString = string.split('').reverse().join('');
    return string === reversedString;
  }
  

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capitalizeWords(str) {
    // Split the string into an array of words
    var words = str.split(' ');
    
    // Loop through each word and capitalize the first letter
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    // Join the words back into a string
    var capitalizedStr = words.join(' ');
    
    return capitalizedStr;
  }
  
  var sentence = 'the quick brown fox';
  console.log(capitalizeWords(sentence)); 
  document.write("<br>")
  

  
// Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development

function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number ofoccurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'

function countOccurrences(string, letter) {
  let count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
  }
  return count;
}

//  The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

document.write("<br>")
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference.toFixed(2));
  }
    function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    console.log("The area is " + area.toFixed(2));
  }
  var radius = 5;
  calcCircumference(radius);
  calcArea(radius); 
  