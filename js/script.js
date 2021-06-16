'use strict';
const header = document.querySelector('.header');
const aboutSection = document.querySelector('#about');
const projectSection = document.querySelector('#projects');
const contactSection = document.querySelector('#contact');

const projectBtn = document.querySelector('.btn-header__project');
const arrowBtn = document.querySelector('.scroll');
const formLabels = document.querySelectorAll('.contact label');
const contactBtnAbout = document.querySelector('.contact-btn');

const homeBtn = document.querySelector('.nav__main-link-home');
const aboutBtn = document.querySelector('.nav__main-link-about');
const projectsBtn = document.querySelector('.nav__main-link-projects');
const contactBtn = document.querySelector('.nav__main-link-contact');

const navCheckbox = document.querySelector('.nav__checkbox');

const cards = document.querySelectorAll('.card');

//nav smooth scrolling
document
  .querySelector('.nav__main-list')
  .addEventListener('click', function (ev) {
    ev.preventDefault();

    const id = ev.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
    navCheckbox.checked = false;
  });

//smooth scroll on section buttons
projectBtn.addEventListener('click', function (ev) {
  ev.preventDefault();
  projectSection.scrollIntoView({
    behavior: 'smooth',
  });
});

contactBtnAbout.addEventListener('click', function (ev) {
  ev.preventDefault();
  contactSection.scrollIntoView({
    behavior: 'smooth',
  });
});

arrowBtn.addEventListener('click', function (ev) {
  ev.preventDefault();
  aboutSection.scrollIntoView({
    behavior: 'smooth',
  });
});

//Project section - fade in cards.

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.intersectionRatio > 0)
        entry.target.classList.add('animate__fadeIn');
    });
  },
  {
    root: null,
    threshold: 0.35,
  }
);

cards.forEach((card) => {
  cardObserver.observe(card);
});

//form label animation

formLabels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split('')
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join('');
});
