(function() {
    let md = new MobileDetect(window.navigator.userAgent);
    let sections = document.querySelectorAll('section');
    let right_dotted = document.querySelectorAll('.onepage-pagination__link');

    document.addEventListener('DOMContentLoaded', function() {
        let app = new onePageScroll({
            el: document.querySelectorAll('section')
        })
        document.querySelector('.onepage-pagination').addEventListener('click', function(e) {
            if (e.target.classList.contains('onepage-pagination__item')) {
                app.goto(e.target.querySelector('a').dataset.index);
            }
        })
        document.querySelector('.top-menu__list').addEventListener('click', function(e) {
            e.preventDefault();
            if (e.target.classList.contains('top-menu__link')) {
                console.log(e.target.dataset.id);
                app.goto(e.target.dataset.id);
            }
        })

        for (let i = 0; i < sections.length; i++) {
            sections[i].dataset.index = i + 1;
            sections[i].addEventListener('inview', function(e) {
                for (let j = 0; j < right_dotted.length; j++) {
                    right_dotted[j].classList.remove('onepage-pagination__link--active');
                }
                right_dotted[e.target.dataset.index - 1].classList.add('onepage-pagination__link--active');
            })
        }
    })

})()