let dotContainer = document.querySelector('#dot-container');
let slideShow = document.querySelector('.slideshow-container');
let slideIndex = 0;
let slides = slideShow.children;
let dots = dotContainer.children;
let interval;

// createDots function will create a dot for each image in the carousel and append it to the dot container div
function createDots() {
  for (let i = 0; i < slideShow.children.length; i++) {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', function () {
      slideIndex = i - 1;
      showSlide();
    });
    dotContainer.appendChild(dot);
  }
}

// showSlide function will hide all images and remove the active class from all dots and then show the next image and add the active class to the next dot in the sequence
function showSlide() {
  slideIndex++;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    slides[i].classList.add('hidden');
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  slides[slideIndex].classList.remove('hidden');
  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
}

document.querySelector('.left').addEventListener('click', function () {
  console.log('slideIndex:', slideIndex);
  slideIndex = slideIndex - 2;
  showSlide();
  clearInterval(interval);
});

document.querySelector('.right').addEventListener('click', function () {
  console.log('slideIndex:', slideIndex);
  showSlide();
  clearInterval(interval);
});

interval = setInterval(showSlide, 3000);

createDots();
showSlide();
