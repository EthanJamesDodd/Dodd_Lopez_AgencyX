let mainNav = document.querySelector('#js-menu'),
    navBarToggle = document.querySelector('#js-navbar-toggle'),
    nameBox = document.querySelector('#nameBox'),
    emailBox = document.querySelector('#emailBox'),
    messageBox = document.querySelector('#messageBox');


function hamMenu(){
    console.log('stuff');
    mainNav.classList.toggle('active');
}

navBarToggle.addEventListener('click', hamMenu);
