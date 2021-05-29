(function() {
    document.querySelector('.team__list').addEventListener('click', function(e) {
        if (e.target.classList.contains('team__name')) {
            e.target.closest('.team__item').classList.toggle('team__item--open');
        }
    });
})()