// CHAP: 17-20 (ARRAYS AND LOOP)

// Declare and initialize an empty multidimensional array. (Array of arrays)
 var myArray = [[]];

//  Declare and initialize a multidimensional array representing the following matrix
 var myArray = [[0 ,1, 2, 3], [1 ,0 , 1, 2 ], [2, 1, 0, 1]];

// Write a program to print numeric counting from 1 to 10
for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
  

// Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user

var tableNumber = prompt("Enter the number for the multiplication table:");
var tableLength = prompt("Enter the length of the multiplication table:");

for (var i = 1; i <= tableLength; i++) {
    var mul=tableNumber*a;
         table+=tableNumber+ " x " + i + " = " + (mul) + "<br>";  
    }
    
    document.write(table);

// Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// Counting
var counting = "";
for (var i = 1; i <= 15; i++) {
  counting += i + ", ";
}
console.log("Counting: " + counting);

// Reverse counting
var reverseCounting = "";
for (var i = 10; i >= 1; i--) {
  reverseCounting += i + ", ";
}
console.log("Reverse counting: " + reverseCounting);

// Even
var even = "";
for (var i = 0; i <= 20; i += 2) {
  even += i + ", ";
}
console.log("Even: " + even);

// Odd
var odd = "";
for (var i = 1; i <= 19; i += 2) {
  odd += i + ", ";
}
console.log("Odd: " + odd);

// Series
var series = "";
for (var i = 2; i <= 20; i += 2) {
  series += i + "k, ";
}
console.log("Series: " + series);

// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. 

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("What item are you searching for?");
var isItemFound = false;
for (var i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    isItemFound = true;
    break;
  }
}

if (isItemFound) {
  alert("Yes, the item is found in the list");
} else {
  alert("Sorry, the item is not found in the list");
}

// Write a program to identify the largest number in the  given array.
// A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12];
var largestNumber = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] > largestNumber) {
    largestNumber = A[i];
  }
}

console.log("The largest number in the array is: " + largestNumber);

// Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12];
var smallestNumber = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] < smallestNumber) {
    smallestNumber = A[i];
  }
}

console.log("The smallest number in the array is: " + smallestNumber);

// Write a program to print multiples of 5 ranging 1 to 100

for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }