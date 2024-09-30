let menu = document.querySelector(".menu");
let toggler = document.querySelector(".toggler");

toggler.addEventListener("click", () => {
    menu.classList.toggle("active");
})

//   carousel
const slidesContainer = document.getElementById("slides-container");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;

// Function to go to the next slide
const nextSlide = () => {
  const slideWidth = slides[0].clientWidth;
  if (currentIndex === slides.length - 1) {
    currentIndex = 0; // Reset to the first slide
    slidesContainer.scrollLeft = 0;
  } else {
    currentIndex++;
    slidesContainer.scrollLeft += slideWidth;
  }
};

setInterval(nextSlide, 3000);