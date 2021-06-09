'use strict';
const header = document.querySelector('.header');
const aboutSection = document.querySelector('#about');
const projectSection = document.querySelector('#projects');
// const contactSection = document.querySelector('#contact');

const projectBtn = document.querySelector('.btn-header__project');
const arrowBtn = document.querySelector('.scroll');

//smooth scroll on section buttons
projectBtn.addEventListener('click', function (e) {
    e.preventDefault()
    projectSection.scrollIntoView({
        behavior: 'smooth'
    })
})

arrowBtn.addEventListener('click', function (e) {
    e.preventDefault()
    aboutSection.scrollIntoView({
        behavior: 'smooth'
    })
})