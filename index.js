import navbar from "./components/navbar.js"
// console.log(navbar())
document.getElementById("nav100").innerHTML=navbar()


  import { footer } from "./footer.js";
  document.getElementById("footer").innerHTML = footer();

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";


}
document.getElementById("bt1").addEventListener("click",Mystart)
function Mystart(){
  // window.location.href="login.html"
  // window.location.href=""
  window.location.href="https://www.myfitnesspal.com/account/create/welcome?callbackUrl=https://www.myfitnesspal.com/apps"
  
  
  
  console.log("my ftn")

}

