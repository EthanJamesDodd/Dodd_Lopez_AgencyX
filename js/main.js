AOS.init();
var pswpElement = document.querySelectorAll('.pswp')[0];
let mainNav = document.querySelector('#js-menu'),
    navBarToggle = document.querySelector('#js-navbar-toggle'),
    nameBox = document.querySelector('#nameBox'),
    emailBox = document.querySelector('#emailBox'),
    messageBox = document.querySelector('#messageBox'),
    pureVolume = document.querySelector('#workDisplay2'),
    videoButton = document.querySelector('#vidBut'),
    videoBox = document.querySelector('.lightBox'),
    closeBox = document.querySelector('.closeButton'),
    videoPlayer = document.querySelector('video');

    var openPhotoSwipe = function() {
        var pswpElement = document.querySelectorAll('.pswp')[0];
    
        // build items array
        var items = [
            {
                src: 'images/pureVolumeDesktop.png',
                w: 1600,
                h: 3625
            },
            {
                src: 'images/pureVolumeMobile.png',
                w: 360,
                h: 4259
            },
            {
                src: 'images/articleDesktop.png',
                w: 1600,
                h: 5599
            },
            {
                src: 'images/articleMobile.png',
                w: 383,
                h: 5309
            },
            
        ];
        
        
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    

function hamMenu(){
    console.log('stuff');
    mainNav.classList.toggle('active');
}

function videoClose(){
    videoBox.classList.remove('showLightBox');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}

function videoPopUp(){
    videoBox.classList.add('showLightBox');
}




// Cascading Scrolls
ScrollReveal().reveal('.mainHeader');
ScrollReveal().reveal('.teamFace', {delay: 100});
ScrollReveal().reveal('.teamName', {delay: 400});
ScrollReveal().reveal('.teamPosition', {delay: 700});
ScrollReveal().reveal('.socialIcons', {delay: 1000});
ScrollReveal().reveal('.teamDesc', {delay: 1300});






navBarToggle.addEventListener('click', hamMenu);
pureVolume.addEventListener('click', openPhotoSwipe);
videoButton.addEventListener('click', videoPopUp);
closeBox.addEventListener('click', videoClose);
