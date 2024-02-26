let dotContainer = document.querySelector('#dot-container');
let slideShow = document.querySelector('.slideshow-container');
let slideIndex = 0;

createDots();
showSlide();

// for each image in the carousel, create a dot and append it to the dot container div
function createDots() {
  for (let i = 0; i < slideShow.children.length; i++) {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', function () {
      slideIndex = i;
      showSlide();
    });
    dotContainer.appendChild(dot);
  }
}

// showSlide function will hide all images and remove the active class from all dots and then show the next image and add the active class to the next dot in the sequence
function showSlide() {
  let slides = slideShow.children;
  let dots = dotContainer.children;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('hidden');
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  slides[slideIndex].classList.remove('hidden');
  dots[slideIndex].classList.add('active');
  slideIndex++;

  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
    console.log('Reset slideIndex:', slideIndex);
  }
}

setInterval(showSlide, 3000);
