const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const projects = document.querySelector('.section2');
const aboutMe = document.querySelector('.section1');
const heading = document.querySelector('#heading');
const contact = document.querySelector('.contact')
const leftArrow2 = document.querySelector('.left-arrow2');
const rightArrow2 = document.querySelector('.right-arrow2');

console.log(contact)

rightArrow.addEventListener('click', () => arrowRight());
rightArrow2.addEventListener('click', () => arrowRight2());
leftArrow.addEventListener('click', () => arrowLeft());
leftArrow2.addEventListener('click', () => arrowLeft2());
leftArrow.style.visibility = 'hidden';
leftArrow.classList.add('clicked');
rightArrow2.style.visibility = 'hidden';
rightArrow2.classList.add('clicked');

const arrowRight = async () => {
  rightArrow.classList.add('clicked');
  leftArrow2.classList.add('clicked');
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  rightArrow.style.visibility = 'hidden';
  leftArrow2.style.visibility = 'hidden';
  projects.style.right = '27%';
  aboutMe.style.left = '-100%';
  heading.style.left = '-100%';
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  leftArrow.classList.remove('clicked');
  leftArrow.style.visibility = 'visible';
};

const arrowRight2 = async () => {
  rightArrow2.classList.add('clicked');
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  rightArrow2.style.visibility = 'hidden';
  contact.style.left = '-100%'
  aboutMe.style.left = '33%';
  heading.style.left = '40%';
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  rightArrow.classList.remove('clicked');
  rightArrow.style.visibility = 'visible';
  leftArrow2.style.visibility = 'visible';
  leftArrow2.classList.remove('clicked');
};

const arrowLeft = async () => {
  leftArrow.classList.add('clicked');
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  leftArrow.style.visibility = 'hidden';
  projects.style.right = '-101%';
  aboutMe.style.left = '33%';
  heading.style.left = '40%';
  await new Promise((resolve, reject) => setTimeout(resolve, 900));
  leftArrow2.classList.remove('clicked');
  leftArrow2.style.visibility = 'visible';
  rightArrow.style.visibility = 'visible';
  rightArrow.classList.remove('clicked');
};

const arrowLeft2 = async () => {
  rightArrow.classList.add('clicked');
  leftArrow2.classList.add('clicked');
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  rightArrow.style.visibility = 'hidden';
  leftArrow2.style.visibility = 'hidden';
  contact.style.left = '33%'
  aboutMe.style.left = '200%';
  heading.style.left = '200%';
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  rightArrow2.classList.remove('clicked');
  rightArrow2.style.visibility = 'visible';
};
