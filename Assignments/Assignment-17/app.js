
// CHAP: 49-52 (EVENTS)
// Create a signup form and display form data in your web page on submission.

 // Get the form element and the form data paragraph
 const form1 = document.getElementById('signupForm');

   
 // Get the form field values

 function takeValue() {
 var name = document.getElementById("name").value;
 var email = document.getElementById("email").value;
 var mobile = document.getElementById("mobile").value;
 var password = document.getElementById("password").value;

document.write("Your name is :" +name +"<br>")
document.write("Your email is :" +email +"<br>")
document.write("Your phone number is :" +mobile +"<br>")
document.write("Your password is :" +password +"<br>")

 }

// Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed. 

// Get the necessary elements
var item = document.querySelector('.item');
var firstlook = item.querySelector('.item-firstlook');
var details = item.querySelector('.item-details');
var readMoreBtn = item.querySelector('.read-more-btn');

// Event listener for the "Read more" button
readMoreBtn.addEventListener('click', function() {
if (details.style.display === 'none') {
details.style.display = 'block';
readMoreBtn.textContent = 'Read less';
} else {
details.style.display = 'none';
readMoreBtn.textContent = 'Read more';
}
});


// In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row

var form = document.getElementById('studentForm');
var table = document.getElementById('studentTable');

function handleSubmit(event) {
event.preventDefault();

var name = document.getElementById('name').value;
var age = document.getElementById('age').value;
var mobile = document.getElementById('mobile').value;
var email = document.getElementById('email').value;

var newRow = table.insertRow();

var nameCell = newRow.insertCell();
var ageCell = newRow.insertCell();
var mobileCell = newRow.insertCell();
var emailCell = newRow.insertCell();
var optionCell = newRow.insertCell();

nameCell.textContent = name;
ageCell.textContent = age;
mobileCell.textContent = mobile;
emailCell.textContent = email;

var editButton = document.createElement('button');
editButton.textContent = 'Edit';
editButton.addEventListener('click', function () {
   return editRow(newRow);
});

var deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.addEventListener('click', function () {
   return deleteRow(newRow);
});

optionCell.appendChild(editButton);
optionCell.appendChild(deleteBtn);

form.reset();
}

function editRow(row) {
var nameCell = row.cells[0];
var ageCell = row.cells[1];
var mobileCell = row.cells[2];
var emailCell = row.cells[3];

var name = nameCell.textContent;
var age = ageCell.textContent;
var mobile = mobileCell.textContent;
var email = emailCell.textContent;

document.getElementById('name').value = name;
document.getElementById('age').value = age;
document.getElementById('mobile').value = mobile;
document.getElementById('email').value = email;

row.remove();
}

function deleteRow(row) {
row.remove();
}

form.addEventListener('submit', handleSubmit);