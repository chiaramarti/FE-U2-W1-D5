document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("header");
  const heroSection = document.querySelector(".hero-section");

  const offset = 100;

  window.addEventListener("scroll", function () {
    if (window.scrollY > heroSection.offsetHeight - offset) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
