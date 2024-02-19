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

// tentativi di animazione
const pathElements = document.querySelectorAll("svg path");

function showPathElements() {
  pathElements.forEach((pathElement) => {
    pathElement.style.opacity = 1;
  });
}

function hideRandomPathElement() {
  showPathElements();

  for (i = 1; i < 20; i++) {
    const randomIndex = Math.floor(Math.random() * pathElements.length);

    pathElements[randomIndex].style.opacity = 0;
    pathElements[randomIndex].style.transition = "500ms";
  }
}
function animatePaths() {
  hideRandomPathElement();
  setTimeout(animatePaths, 500);
}

// Inizia l'animazione
animatePaths();
