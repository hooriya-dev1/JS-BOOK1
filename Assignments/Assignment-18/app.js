// CHAP: 53-57 (EVENTS)
// Consider you have 4 images in a file as shown below

var images = document.querySelectorAll(".gallery__item img");
var imgSrc;


images.forEach(function (img) {
    img.addEventListener("click", function (e) {
      imgSrc = e.target.src;
      imgModal(imgSrc);
    });
  });


var imgModal = function imgModal(src) {
    var modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector(".main").append(modal);
    var newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    var closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");

    closeBtn.onclick = function () {
        modal.remove();
      };
      modal.append(newImage, closeBtn);

  };

// Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-). On each click on “zoom in”(+) , add 10px in font size of paragraph. And on each click on “zoom out”(-) , minus 10px in font size of paragraph


var zoomIn=document.getElementById("zoomIn");
var zoomOut=document.getElementById("zoomOut");
var para=document.getElementById("para");


zoomIn.onclick=function () {
    var fontSize = parseInt(window.getComputedStyle(para).fontSize);
    para.style.fontSize = fontSize + 10 + 'px';
    
}


zoomOut.onclick=function () {
    var fontSize = parseInt(window.getComputedStyle(para).fontSize);
    if (fontSize > 10) {
        para.style.fontSize = fontSize - 10 + 'px';
    }
    
}