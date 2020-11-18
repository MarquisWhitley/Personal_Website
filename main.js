const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const projects = document.querySelector('.section2');
const more = document.querySelector('.section4');
const aboutMe = document.querySelector('.section1');
const heading = document.querySelector('#heading');
const contact = document.querySelector('.contact');
const leftArrow2 = document.querySelector('.left-arrow2');
const rightArrow2 = document.querySelector('.right-arrow2');
const rightArrow3 = document.querySelector('.right-arrow3');
const submit = document.querySelector('.form-submitted');
const message = document.querySelector('.contact_message');

const form = document.querySelector('.contact_form');
form.addEventListener('submit', (e) => submitForm(e));

rightArrow.addEventListener('click', () => arrowRight());
rightArrow2.addEventListener('click', () => arrowRight2());
rightArrow3.addEventListener('click', () => arrowRight3());
leftArrow.addEventListener('click', () => arrowLeft());
leftArrow2.addEventListener('click', () => arrowLeft2());

let currentHeading = 40;
let currentAboutMeL = 28;

if (document.body.clientWidth < 500) {
  currentHeading = 28;
  currentAboutMeL = 19;
}

const arrowRight = async () => {
  rightArrow.classList.add('clicked');
  leftArrow2.classList.add('clicked');
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  rightArrow.style.visibility = 'hidden';
  leftArrow2.style.visibility = 'hidden';
  projects.style.right = '19%';
  aboutMe.style.left = '-100%';
  heading.style.left = '-100%';
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  leftArrow.classList.remove('clicked');
  leftArrow.style.visibility = 'visible';
  rightArrow3.style.visibility = 'visible';
  rightArrow3.classList.remove('clicked');
};

const arrowRight2 = async () => {
  rightArrow2.classList.add('clicked');
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  rightArrow2.style.visibility = 'hidden';
  contact.style.left = '-100%';
  aboutMe.style.left = `${currentAboutMeL}%`;
  heading.style.left = `${currentHeading}%`;
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  rightArrow.classList.remove('clicked');
  rightArrow.style.visibility = 'visible';
  leftArrow2.style.visibility = 'visible';
  leftArrow2.classList.remove('clicked');
};

const arrowRight3 = async () => {
  rightArrow3.classList.add('clicked');
  leftArrow.classList.add('clicked');
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  leftArrow.style.visibility = 'hidden';
  rightArrow3.style.visibility = 'hidden';
  projects.style.right = '200%';
  more.style.right = '20%';
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  leftArrow.classList.remove('clicked');
  leftArrow.style.visibility = 'visible';
};

const arrowLeft = async () => {
  leftArrow.classList.add('clicked');
  rightArrow3.classList.add('clicked');
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  leftArrow.style.visibility = 'hidden';
  rightArrow3.style.visibility = 'hidden';
  projects.style.right = '-100%';
  more.style.right = '-100%';
  aboutMe.style.left = `${currentAboutMeL}%`;
  heading.style.left = `${currentHeading}%`;
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
  if (document.body.clientWidth < 600) {
    contact.style.left = '10%';
  } else {
    contact.style.left = '27%';
  }
  aboutMe.style.left = '200%';
  heading.style.left = '200%';
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  rightArrow2.classList.remove('clicked');
  rightArrow2.style.visibility = 'visible';
};

const submitForm = async (e) => {
  const name = document.querySelector('.contact_name');
  const email = document.querySelector('.contact_email');
  if (name.value.length === 0) {
    e.preventDefault();
    alert('Please enter your name.');
    return;
  }
  if (email.value.length === 0) {
    e.preventDefault();
    alert('Please enter your email.');
    return;
  }
  if (message.value.length === 0) {
    e.preventDefault();
    alert('Please enter a message.');
    return;
  }
};
