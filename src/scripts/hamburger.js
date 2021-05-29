(function() {
    document.querySelector('.hamburger').addEventListener('click', function() {
        let body = document.querySelector('body');
        let topMenu = document.querySelector('.top-menu');
        this.classList.toggle('hamburger__active');
        body.classList.toggle('not-scroll');
        topMenu.classList.toggle('top-menu__popup');
    });
})()