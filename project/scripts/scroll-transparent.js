window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    var nav = this.document.querySelector('.nav');

    // Add class 'scrolled' when user scrolls down 50px
    if (window.scrollY > 50) {
        console.log('true');
        header.classList.add('scrolled');
        nav.classList.add('scrolled');
    } else {
        console.log('false');
        header.classList.remove('scrolled');
        nav.classList.remove('scrolled');
    }
});