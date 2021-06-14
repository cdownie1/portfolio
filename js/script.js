'use strict';
const header = document.querySelector('.header');
const aboutSection = document.querySelector('#about');
const projectSection = document.querySelector('#projects');
const contactSection = document.querySelector('#contact');

const projectBtn = document.querySelector('.btn-header__project');
// const contactBtn = document.querySelector('.btn-header__contact');
const arrowBtn = document.querySelector('.scroll');
const formLabels = document.querySelectorAll('.contact label');

//smooth scroll on section buttons
projectBtn.addEventListener('click', function (e) {
    e.preventDefault()
    projectSection.scrollIntoView({
        behavior: 'smooth'
    })
})

// projectBtn.addEventListener('click', function (e) {
//     e.preventDefault()
//     contactSection.scrollIntoView({
//         behavior: 'smooth'
//     })
// })

arrowBtn.addEventListener('click', function (e) {
    e.preventDefault()
    aboutSection.scrollIntoView({
        behavior: 'smooth'
    })
})


//form label animation

formLabels.forEach(label => {
    label.innerHTML = label.innerHTML
        .split('')
        .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
        .join('');
})