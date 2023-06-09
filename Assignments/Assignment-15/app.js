// CHAP: 38-44 (FUNCTIONS, SWITCH STATEMENTS, WHILE… DO-WHILE LOOPS)
// Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.

function power(a, b) {
  var result = 1;
  for (var i = 1; i <= b; i++) {
    result *= a;
  }
  return result;
}


// Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.

function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

// If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function getTriangleArea(a, b, c) {
  var s = (a + b + c) / 2;
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

// Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.

function getAverage(marks) {
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    var average = sum / marks.length;
    return average;
  }
  
  function getPercentage(marks) {
    var totalMarks = marks.length * 100;
    var obtainedMarks = 0;
    for (var i = 0; i < marks.length; i++) {
      obtainedMarks += marks[i];
    }
    var percentage = obtainedMarks / totalMarks * 100;
    return percentage;
  }
  
  function mainFunction(marks) {
    var average = getAverage(marks);
    var percentage = getPercentage(marks);
    console.log(`Average marks: ${average}`);
    console.log(`Percentage marks: ${percentage}%`);
  }
  
// You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.

function myIndexOf(string, character) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === character) {
        return i;
      }
    }
    return -1;
  }
  
// Write a function to devare all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.

function deleteVowels(sentence) {
    var newSentence = "";
    for (var i = 0; i < sentence.length; i++) {
      var letter = sentence[i];
      if (letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u") {
        newSentence += letter;
      }
    }
    return newSentence;
  }  

// Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

function countVowelPairs(text) {
    var count = 0;
    for (var i = 0; i < text.length - 1; i++) {
      var currentLetter = text[i];
      var nextLetter = text[i + 1];
      switch (currentLetter) {
        case "a":
          if (nextLetter === "e" || nextLetter === "i" || nextLetter === "o" || nextLetter === "u") {
            count++;
          }
          break;
        case "e":
          if (nextLetter === "a" || nextLetter === "i" || nextLetter === "o" || nextLetter === "u") {
            count++;
          }
          break;
        case "i":
          if (nextLetter === "a" || nextLetter === "e" || nextLetter === "o" || nextLetter === "u") {
            count++;
          }
          break;
        case "o":
          if (nextLetter === "a" || nextLetter === "e" || nextLetter === "i" || nextLetter === "u") {
            count++;
          }
          break;
          case "u":
            if (nextLetter === "a" || nextLetter === "e" || nextLetter === "i" || nextLetter === "o") {
              count++;
            }
            break;
          default:
            break;
        }
      }
      return count;
    }
      
// The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.

function kmToMeters(km) {
    return km * 1000;
  }
  
  function kmToFeet(km) {
    return km * 3280.84;
  }
  
  function kmToInches(km) {
    return km * 39370.1;
  }
  
  function kmToCentimeters(km) {
    return km * 100000;
  }
  
  var km = prompt("Enter distance between two cities (in km): ");
  var meters = kmToMeters(km);
  var feet = kmToFeet(km);
  var inches = kmToInches(km);
  var centimeters = kmToCentimeters(km);
  
  console.log(`${km} km = ${meters} meters`);
  console.log(`${km} km = ${feet} feet`);
  console.log(`${km} km = ${inches} inches`);
  console.log(`${km} km = ${centimeters} centimeters`);
  
  
// Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour.
// const rate = 12.00;
// const hoursInRegularWeek = 40;

const hoursWorked = prompt("Enter the number of hours worked: ");
if (hoursWorked <= hoursInRegularWeek) {
  console.log("No overtime pay");
} else {
  const overtimeHours = hoursWorked - hoursInRegularWeek;
  const overtimePay = overtimeHours * rate;
  console.log(`Overtime pay: Rs. ${overtimePay.toFixed(2)}`);
}


// A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.

const denominations = [100, 50, 10];

const getNotes = amount => {
  const notes = {};
  for (const denomination of denominations) {
    const count = Math.floor(amount / denomination);
    notes[denomination] = count;
    amount -= count * denomination;
  }
  return notes;
};

const amount = prompt("Enter the amount to be withdrawn (in hundreds): ");
const notes = getNotes(amount * 100);

for (const denomination of denominations) {
  console.log(`Number of ${denomination} notes: ${notes[denomination]}`);
}