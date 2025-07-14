const nav = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
