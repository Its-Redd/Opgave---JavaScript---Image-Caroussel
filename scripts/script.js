let dotContainer = document.querySelector('#dot-container');
let slideShow = document.querySelector('.slideshow-container');

// for each image in the carousel, create a dot and append it to the dot container div
for (let i = 0; i < slideShow.children.length; i++) {
  let dot = document.createElement('span');
  dot.classList.add('dot');
  dotContainer.appendChild(dot);
}
