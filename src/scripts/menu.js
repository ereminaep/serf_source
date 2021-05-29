(function() {
    let menu_items = document.querySelectorAll('.menu__item');
    let menu_container = document.querySelector('.menu__container');

    for (let i = 0; i < menu_items.length; i++) {
        menu_items[i].addEventListener('click', function(e) {
            menu_container.classList.add('menu__container--open');
            for (let j = 0; j < menu_items.length; j++) {
                if (j != i) {
                    menu_items[j].classList.remove('menu__item--open');
                } else {
                    menu_items[j].classList.toggle('menu__item--open');
                }
            }
        });
    }
})()