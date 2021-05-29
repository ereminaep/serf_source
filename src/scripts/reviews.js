(function() {
    let reviews_intro = document.querySelectorAll('.review-items__intro img');
    let reviews_full = document.querySelectorAll('.review__full');


    for (let i = 0; i < reviews_intro.length; i++) {
        reviews_intro[i].addEventListener('click', function(e) {
            for (let j = 0; j < reviews_intro.length; j++) {
                if (j != i) {
                    reviews_intro[j].closest('.review-items__intro').classList.remove('review-items__intro--active');
                    reviews_full[j].classList.remove('review-items__full--active');
                } else {
                    reviews_intro[j].closest('.review-items__intro').classList.add('review-items__intro--active');
                    reviews_full[j].classList.add('review-items__full--active');
                }
            }
        });
    }
})()