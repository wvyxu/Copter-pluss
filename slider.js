const slider = document.querySelector('.slider');
const slides = Array.from(slider.querySelectorAll('.change-img-slide'));
const slideCount = slides.length;
let slideIndex = 0;

setInterval(slideImage, 10000);

function slideImageBack() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function slideImage() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}
updateSlider();