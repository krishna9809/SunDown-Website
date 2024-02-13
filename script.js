const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
function fixedImage(){
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
}
function menuAnimation() {
  var menu = document.querySelector(".nav h3");
  var fullScr = document.querySelector(".full-scr");
  var navImg = document.querySelector(".nav img");
  var flag = 0
  menu.addEventListener("click", function(){
    if(flag == 0){
   fullScr.style.top = 0;
   navImg.style.opacity = 0
   flag = 1;
    }
    else{
      fullScr.style.top = "-100%";
      navImg.style.opacity = 1;
      flag = 0;
    }
  })
}
function swiper(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
}
function page4_Head(){
  var h1 = document.querySelector("#head1 h2");
var h2 = document.querySelector("#head2 h2");
var h3 = document.querySelector("#head3 h2");


h1.addEventListener("click", function(){
  h1.style.color = "#fff";
  h2.style.color = "#504A45";
  h3.style.color = "#504A45";
})

h2.addEventListener("click", function(){
  h1.style.color = "#504A45";
  h2.style.color = "#fff";
  h3.style.color = "#504A45";
})

h3.addEventListener("click", function(){
  h1.style.color = "#504A45";
  h2.style.color = "#504A45";
  h3.style.color = "#fff";
})
}

function loader(){
  var loader = document.querySelector(".loader");

setTimeout(function(){
  loader.style.top = "-100%";
},4000)
}

loader();
fixedImage();
page4_Head();
swiper();
menuAnimation();


