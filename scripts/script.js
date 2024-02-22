let slideIndex = 0;
let timer = null;
showSlides();

function showSlides() {
  let i;

  // ! Breaks when using querySelector instead of getElementsByClassName and getElementById for some reason.
  let slides = document.getElementsByClassName('slide');
  let dotsContainer = document.getElementById('dot-container');

  let dots = [];
  clearTimeout();

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'; // Hide all images
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0; // Set opacity to 0 for fade-in effect
  }

  slides[slideIndex - 1].style.display = 'block'; // Display the current image
  fadeIn(slides[slideIndex - 1]); // Perform fade-in effect on the current image

  // Remove all dots
  dotsContainer.innerHTML = '';

  // Create dots and add them to the dot container
  for (i = 0; i < slides.length; i++) {
    let dot = document.createElement('span');
    dot.className = 'dot';
    dot.id = 'dot' + i;
    dot.onclick = function () {
      slideIndex = parseInt(this.getAttribute('data-index'));
      showSlides();
    };
    dotsContainer.appendChild(dot);
    dots.push(dot);
  }

  // Set the active dot
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[slideIndex - 1].className += ' active';

  setTimeout(showSlides, 3000); // Switch images every 3 seconds
}

function fadeIn(element) {
  let op = 0.1; // initial opacity
  element.style.opacity = op;
  let interval = setInterval(function () {
    if (op >= 1) {
      clearInterval(interval);
    }
    element.style.opacity = op;
    op += op * 0.1;
  }, 25); // Adjust the duration of the fade-in effect
}
