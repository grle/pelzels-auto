let ham = document.getElementById("ham");
let x = document.getElementById("x");
let menu = document.getElementsByClassName("mobile-menu");

function toggleHam() {
  menu[0].classList.add("visibility");
  x.style.display = "block";
  ham.style.display = "none";
}

function toggleX() {
  menu[0].classList.remove("visibility");
  x.style.display = "none";
  ham.style.display = "block";
}
