let mainNav = document.querySelector('#js-menu'),
    navBarToggle = document.querySelector('#js-navbar-toggle');


function hamMenu(){
    console.log('stuff');
    mainNav.classList.toggle('active');
}

navBarToggle.addEventListener('click', hamMenu)