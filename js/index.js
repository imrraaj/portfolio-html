const navToggle = document.querySelector(".mobile-nav");
const PrimaryNav = document.querySelector(".primary-navigation");
const navIcon = document.getElementById("primary-menu-icon");

const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeToggleIcon = document.querySelector("#darkModeToggle i");

const toggleTheme = () => {
  const body = document.querySelector("body");
  const currentTheme = body.getAttribute("data-isDark");
  if (currentTheme === "true") {
    darkModeToggleIcon.classList.remove("bx-sun");
    darkModeToggleIcon.classList.add("bx-moon");
    body.setAttribute("data-isDark", "false");
  } else {
    darkModeToggleIcon.classList.remove("bx-moon");
    darkModeToggleIcon.classList.add("bx-sun");
    body.setAttribute("data-isDark", "true");
  }
};

darkModeToggle.addEventListener("click", toggleTheme);

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
