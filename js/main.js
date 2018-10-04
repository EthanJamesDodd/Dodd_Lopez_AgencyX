let mainNav = document.querySelector('#js-menu'),
    navBarToggle = document.querySelector('#js-navbar-toggle'),
    nameBox = document.querySelector('#nameBox'),
    emailBox = document.querySelector('#emailBox'),
    messageBox = document.querySelector('#messageBox');


function hamMenu(){
    console.log('stuff');
    mainNav.classList.toggle('active');
}

// function boxBorder(){
//     console.log('more Stuff');
//     this.classList.add('boxBorder', 5);
// }

navBarToggle.addEventListener('click', hamMenu);
// nameBox.addEventListener('input', boxBorder);
// emailBox.addEventListener('input', boxBorder);
// messageBox.addEventListener('input', boxBorder);