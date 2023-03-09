const images = [...document.getElementsByTagName('img')];

const fadeIn = e => {
  e.target.style = 'opacity: 1';
}

const fadeOut = e => {
  e.target.style = 'opacity: 0';
}

images.forEach(image => image.addEventListener('mouseover', fadeIn));
images.forEach(image => image.addEventListener('mouseout', fadeOut));
