"use strict";
// Hamburger menu
const menuIcon = document.querySelector(".menu-icon");
const xBtn = document.querySelector(".x-btn");
const navigation = document.querySelector(".navigation");

menuIcon.addEventListener("click", () => {
  navigation.classList.add("navigate");
});

xBtn.addEventListener("click", () => {
  navigation.classList.remove("navigate");
});
// End of Hamburger menu

// About
window.addEventListener("scroll", () => {
  const about = document.querySelector(".about");
  const services = document.querySelector(".services");

  if (window.pageYOffset >= 200) {
    about.classList.add("change");
  } else {
    about.classList.remove("change");
  }

  if (window.pageYOffset >= about.offsetTop + 200) {
    services.classList.add("change");
  } else {
    services.classList.remove("change");
  }
});
// End of About
