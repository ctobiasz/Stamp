var hamburger   = document.querySelector(".hamburger");
var navOverlay  = document.querySelector(".nav-overlay");
var header      = document.querySelector("#brand");
var closeBtn    = document.querySelector(".close-button");

closeBtn.addEventListener("click", function(){
  navOverlay.style.height = "0%";
});

hamburger.addEventListener("click", function(){
  navOverlay.style.height = "100%";
});
