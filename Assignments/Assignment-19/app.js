// CHAP: 58-67 (DOM)
// Consider you have following code snippet:
//  (Copy it in your HTML file)

 // i. Get element of id "main-content" and assign them in a variable.
 
 var  mainContent = document.getElementById("main-content");
 console.log(mainContent)

 // ii. Display all child elements of "main-content" element.

const childElements = document.getElementById("main-content");
for (var child of childElements.children) {
  console.log(child);
}

// iii. Get all elements of class "render" and show their innerHTML in the browser.

const renderElements = document.getElementsByClassName("render");
for (var  i = 0; i < renderElements.length; i++) {
    console.log(renderElements[i].innerHTML);
}


//  // iv. Fill input value whose element id is "first-name" using JavaScript.
 var firstNameInput = document.getElementById("first-name").value = "Hooriya"



//  // v. Repeat part iv for id "last-name" and "email".

var lastNameInput = document.getElementById("last-name").value = "Hanif";
var emailInput = document.getElementById("email").value = "hooriya@gmail.com";


// use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”

var lastName = document.getElementById("lastName");
var lastNameType = lastName.nodeType;
var lastNameChildType = lastName.firstChild.nodeType;

console.log(lastNameType);
console.log(lastNameChildType);

// iii. Update child node of element having id “lastName”.

lastName.firstChild.nodeValue = "Rida";
console.log(lastName)


// iv. Get First and last child of id “main-content”.

var mainContent = document.getElementById("main-content");
var firstChild = mainContent.firstElementChild;
var lastChild = mainContent.lastElementChild;

console.log(firstChild)
console.log(lastChild)


// v. Get next and previous siblings of id “lastName”.

var nextSibling = lastName.nextSibling;
var previousSibling = lastName.previousSibling;

console.log(nextSibling)
console.log(previousSibling)


// vi. Get parent node and node type of element having id “email”

 
var email = document.getElementById("email");
var parentNode = email.parentNode.nodeName;
var emailType = email.nodeType;

console.log(parentNode)
console.log(emailType)

