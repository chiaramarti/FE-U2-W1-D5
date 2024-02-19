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
  const randomIn = [];

  for (i = 0; i < 20; i++) {
    const randomIndex = Math.floor(Math.random() * pathElements.length);

    randomIn.push(randomIndex);

    // pathElements[randomIndex].style.opacity = 0;
    // pathElements[randomIndex].style.transition = "0.5s";
  }
  console.log(randomIn);

  for (i = 0; i < randomIn.length; i++) {
    pathElements[randomIn[i]].style.opacity = 0;
    // console.log(numbers[i]);
  }
}
function animatePaths() {
  hideRandomPathElement();
  setTimeout(animatePaths, 1000);
}

// Inizia l'animazione
animatePaths();
