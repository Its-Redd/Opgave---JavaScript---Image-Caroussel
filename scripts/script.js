let dotContainer = document.querySelector('#dot-container');
let slideShow = document.querySelector('.slideshow-container');
let slideIndex = 0;
let interval;

createDots();
showSlide();

// button to move to the next slide in the carousel and increment the slideIndex variable by 1
document.querySelector('.left').addEventListener('click', function () {
  slideIndex++;
  if (slideIndex > slideShow.children.length - 1) {
    slideIndex = 0;
  }
  showSlide();
  clearInterval(interval);
});

// button to move to the previous slide in the carousel and decrement the slideIndex variable by 1
document.querySelector('.right').addEventListener('click', function () {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slideShow.children.length - 1;
  }
  showSlide();
  clearInterval(interval);
});

// createDots function will create a dot for each image in the carousel and append it to the dot container div
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

interval = setInterval(showSlide, 3000);
