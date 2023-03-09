const images = [...document.getElementsByTagName('img')];
const crosses = [...document.getElementsByClassName('cross')];

let target = null;
let closer = null;

const close = () => {
  target.className = 'img';
  closer.style = '';
}

const open = e => {
  target = e.target.parentNode;
  closer = target.childNodes[1];
  closer.style = 'position: absolute; top: 0; left: 0; right: 0; bottom: 0';
  target.className = 'img opened';
}

images.forEach(img => img.addEventListener('click', open));
crosses.forEach(cross => cross.addEventListener('click', close));
