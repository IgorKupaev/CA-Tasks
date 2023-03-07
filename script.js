const images = [...document.getElementsByTagName('img')];
const crosses = [...document.getElementsByClassName('cross')];

let target = null;

const close = (e) => {
  console.log(target.className);
  target.className = 'img';
}

const open = e => {
  target = e.target.parentNode;
  target.className = 'img opened';
}

images.forEach(img => img.addEventListener('click', open));
crosses.forEach(cross => cross.addEventListener('click', close));