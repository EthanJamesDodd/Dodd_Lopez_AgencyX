AOS.init();

let mainNav = document.querySelector('#js-menu'),
    navBarToggle = document.querySelector('#js-navbar-toggle'),
    nameBox = document.querySelector('#nameBox'),
    emailBox = document.querySelector('#emailBox'),
    messageBox = document.querySelector('#messageBox');


function hamMenu(){
    console.log('stuff');
    mainNav.classList.toggle('active');
}

// Cascading Scrolls
ScrollReveal().reveal('.mainHeader');
ScrollReveal().reveal('.teamFace', {delay: 100});
ScrollReveal().reveal('.teamName', {delay: 400});
ScrollReveal().reveal('.teamPosition', {delay: 700});
ScrollReveal().reveal('.socialIcons', {delay: 1000});
ScrollReveal().reveal('.teamDesc', {delay: 1300});


navBarToggle.addEventListener('click', hamMenu);
