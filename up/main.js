const projects = document.querySelector('.section2');
const more = document.querySelector('.section4');
const aboutMe = document.querySelector('.section1');
const aboutMeSection = document.querySelector('#aboutme_popup');
const heading = document.querySelector('#heading');
const contact = document.querySelector('.contact');

const nav = document.querySelector('.navbars');
const icons = document.querySelector('.icons');
const showHome = document.querySelector('.show-home');
const showAbout = document.querySelector('.show-about');

const projectsRightButton = document.querySelector('.right-arrow');
const aboutMeLeftButton = document.querySelector('.left-arrow');
const contactLeftButton = document.querySelector('.left-arrow2');
const aboutMeRightButton = document.querySelector('.right-arrow2');
const moreProjectsRightButton = document.querySelector('.right-arrow3');

const submit = document.querySelector('.form-submitted');

const form = document.querySelector('.contact_form');
form.addEventListener('submit', (e) => submitForm(e));

projectsRightButton.addEventListener('click', () => projectsRight());
aboutMeRightButton.addEventListener('click', () => aboutMeRight());
moreProjectsRightButton.addEventListener('click', () => moreProjectsRight());
aboutMeLeftButton.addEventListener('click', () => aboutMeLeft());
contactLeftButton.addEventListener('click', () => contactLeft());

const delay = async (delay) =>
  await new Promise((resolve, reject) => setTimeout(resolve, delay));

let currentAboutMeL = 38;

if (document.body.clientWidth < 500) {
  currentAboutMeL = 19;
}
const hideButtons = (...args) => {
  args.forEach((vals) => {
    vals.style.pointerEvents = 'none';
    vals.style.visibility = 'hidden';
  });
};
const showButtons = (classes, ...args) => {
  args.forEach((vals) => {
    vals.style.visibility = 'visible';
    vals.style.pointerEvents = 'auto';
    vals.classList.remove(classes);
  });
};
const addClass = (classes, ...args) => {
  args.forEach((vals) => vals.classList.add(classes));
};
showAbout.addEventListener('click', async (e) => {
  e.preventDefault();
  addClass('clicked', aboutMe);
  await delay(500);
  hideButtons(aboutMe);
  await delay(500);
  showButtons('clicked', showHome, aboutMeSection);
});
showHome.addEventListener('click', async (e) => {
  e.preventDefault();
  addClass('clicked', showHome, aboutMeSection);
  await delay(500);
  hideButtons(showHome, aboutMeSection);
  await delay(500);
  showButtons('clicked', aboutMe);
});

const projectsRight = async () => {
  addClass('clicked', projectsRightButton, contactLeftButton, icons, nav);
  await delay(500);
  hideButtons(projectsRightButton, contactLeftButton, icons, nav);
  projects.style.right = '19%';
  aboutMe.style.left = '-100%';
  aboutMeSection.style.left = '-100%';
  await delay(500);
  showButtons('clicked', aboutMeLeftButton, moreProjectsRightButton);
};
const moreProjectsRight = async () => {
  addClass('clicked', moreProjectsRightButton, aboutMeLeftButton);
  await delay(500);
  hideButtons(aboutMeLeftButton, moreProjectsRightButton);
  projects.style.right = '200%';
  more.style.right = '20%';
  await delay(500);
  showButtons('clicked', aboutMeLeftButton);
};
const aboutMeRight = async () => {
  addClass('clicked', aboutMeRightButton);
  await delay(500);
  hideButtons(aboutMeRightButton);
  contact.style.left = '-100%';
  aboutMe.style.left = `${currentAboutMeL}%`;
  aboutMeSection.style.left = '28%';
  await delay(500);
  showButtons('clicked', projectsRightButton, contactLeftButton, icons, nav);
};

const aboutMeLeft = async () => {
  addClass('clicked', aboutMeLeftButton, moreProjectsRightButton);
  await delay(500);
  hideButtons(aboutMeLeftButton, moreProjectsRightButton);
  projects.style.right = '-100%';
  more.style.right = '-200%';
  aboutMe.style.left = `${currentAboutMeL}%`;
  aboutMeSection.style.left = '28%';
  await delay(900);
  showButtons('clicked', contactLeftButton, projectsRightButton, icons, nav);
};

const contactLeft = async () => {
  addClass('clicked', projectsRightButton, contactLeftButton, icons, nav);
  await delay(500);
  hideButtons(projectsRightButton, contactLeftButton, icons, nav);
  if (document.body.clientWidth < 600) {
    contact.style.left = '10%';
  } else {
    contact.style.left = '27%';
  }
  aboutMe.style.left = '200%';
  aboutMeSection.style.left = '200%';
  await delay(500);
  showButtons('clicked', aboutMeRightButton);
};

const submitForm = (e) => {
  const el = document.querySelectorAll('.user');
  el.forEach((val) => {
    if (val.value === '') {
      e.preventDefault();
      alert(`Please enter your ${val.name}`);
    }
  });
};

// const scrollableElement = document.body;
// let position = 0;

// const checkScrollDirection = (event) => {
//   if (checkScrollDirectionIsUp(event)) {
//     console.log('UP');
//     position--;
//   }
//   if (!checkScrollDirectionIsUp(event)) {
//     console.log('Down');
//     position++;
//   }
//   if (position >= 3) {
//     return;
//   }
//   if (position <= -1) {
//     return;
//   }
//   console.log(position);
// };

// const checkPos = () => {
//   // if(position = 1) console.log(position)
//   if ((position = 2)) console.log(`this is position ${position}`);
// };

// const checkScrollDirectionIsUp = (event) => {
//   if (event.wheelDelta) {
//     return event.wheelDelta > 0;
//   }
//   return event.deltaY < 0;
// };
// scrollableElement.addEventListener('wheel', checkScrollDirection);

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach((div) => {
  div.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.querySelector(div.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((div) => {
  div.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = div.closest('.modal');
    closeModal(modal);
  });
});

const openModal = (modal) => {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
};
const closeModal = (modal) => {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
};
