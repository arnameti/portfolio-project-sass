const navbar = document.querySelector("#navbar");
const navBtn = document.querySelector("#navbar__btn");
const closeBtn = document.querySelector("#sidebar__close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar__fixed");
  } else {
    navbar.classList.remove("navbar__fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("sidebar__show");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("sidebar__show");
});
// set year
date.innerHTML = new Date().getFullYear();
