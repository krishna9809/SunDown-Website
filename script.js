const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

var elemC = document.querySelector(".elem-container");
var fixed = document.querySelector(".fixed-img");
elemC.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});

elemC.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
  });
});

var a = document.querySelectorAll(".head-text");
var b = document.querySelector(".page-4-right")
a.forEach(function(image){
image.addEventListener("click", function(){
  var page4Image = image.getAttribute("data-image");
  b.style.backgroundImage = `url(${page4Image})`;
})
})



