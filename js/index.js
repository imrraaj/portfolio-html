AOS.init();
const navToggle = document.querySelector(".mobile-nav");
const PrimaryNav = document.querySelector(".primary-navigation");
const navIcon = document.getElementById("primary-menu-icon");
const menuFunction = () => {
  const visibility = PrimaryNav.classList.contains("open");
  if (visibility === false) {
    PrimaryNav.classList.add("open");
    navIcon.classList.remove("bx-menu-alt-right");
    navIcon.classList.add("bx-x");
  } else if (visibility === true) {
    PrimaryNav.classList.remove("open");
    navIcon.classList.remove("bx-x");
    navIcon.classList.add("bx-menu-alt-right");
  }
};
navToggle.addEventListener("click", menuFunction);
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((navlink) => navlink.addEventListener("click", menuFunction));
