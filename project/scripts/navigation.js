// transparent scroll effect
window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    var nav = this.document.querySelector('.nav');

    // Add class 'scrolled' when user scrolls down 50px
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        nav.classList.add('scrolled');
    } else {
        console.log('false');
        header.classList.remove('scrolled');
        nav.classList.remove('scrolled');
    }
});

// navigation highlight
const navLinks = document.querySelectorAll('nav a');
const currentLink = window.location.pathname;

navLinks.forEach(link => {

    if (currentLink.includes(link.getAttribute('href'))) {
        console.log(link);
        link.classList.add('active');
    }

});