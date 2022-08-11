const navToggler = document.querySelector(".icon--toggler");
const navLinks = document.querySelector(".nav__links");
const navigationBar = document.querySelector(".navigation-bar");
const addPaddingToNav = document.querySelector(".padding--nav");

navToggler.addEventListener("click", function () {
  navLinks.classList.toggle("show__links");
  navigationBar.classList.toggle("padding--nav");
});
