/////MENU
let ham = document.getElementById("ham");
let x = document.getElementById("x");
let nav = document.getElementById("nav-bar");
let menu = document.getElementsByClassName("mobile-menu");

function toggleHam() {
  menu[0].classList.add("visibility");
  nav.classList.add("ht");
  x.style.display = "block";
  ham.style.display = "none";
}

function toggleX() {
  menu[0].classList.remove("visibility");
  nav.classList.remove("ht");
  x.style.display = "none";
  ham.style.display = "block";
}

/////GOOGLE MAPS
// function initMap() {
//   const pelzels = { lat: 46.72829875949094, lng: -120.69864370315264};
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: pelzels,
//   });
//   const marker = new google.maps.Marker({
//     position: pelzels,
//     map: map,
//   });
// }
// window.initMap = initMap;
