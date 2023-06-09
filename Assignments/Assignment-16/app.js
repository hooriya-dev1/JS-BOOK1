// CHAP: 43-48 (EVENTS)
// Show an alert box on click on a link.


// Display some Mobile images in browser. On click on an image Show the message in alert to user


// Display 10 student records in table and each row should contain a delete 
// button. If you click on a button to delete a record, entire row should be deleted. 

function deleteButton(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

}

// Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

function setNewImage() {
    document.getElementById("img1").src="imges/img2.jpg";
}

function setOldImage(params) {
    document.getElementById("img1").src="imges/img1.jpg";

}

//  Show a counter in browser. Counter should increase on click on increase 
// button and decrease on click on decrease button. And show updated counter value in browser

// Select increment and decrement buttons

var counterElement = document.getElementById('counter');
var incrementCount = document.getElementById("increment-count");
var decrementCount = document.getElementById("decrement-count");

// Select total count
var totalCount = document.getElementById("counter");

var count = 0;

totalCount.innerHTML = count;

function increment () {
  count++;
  totalCount.innerHTML = count;
};

function decrement () {
    if (count > 0) {
      count--;
  totalCount.innerHTML = count;
}
};

incrementCount.addEventListener("click", increment);
decrementCount.addEventListener("click", decrement);

