(function() {
    const video = document.querySelector('.video__content');
    const play = document.querySelectorAll('.play');
    const duration = document.querySelector('.player__duration');
    const volume = document.querySelector('.player__volume');

    video.volume = 0.5;
    $(volume).css('background', 'linear-gradient(to right, #FEDB3F 0%, #FEDB3F ' + 50 + '%, #626262 ' + 50 + '%, #626262 100%)');

    function togglePlayer(video) {
        if (!video.paused) {
            video.pause();
            for (let i = 0; i < play.length; i++) {
                play[i].classList.remove('play--pause');
            }
        } else {
            video.play();
            for (let i = 0; i < play.length; i++) {
                play[i].classList.add('play--pause');
            }
        }
    }

    function ontimeupdate() {
        duration.value = video.currentTime * 100 / video.duration;
        $(duration).css('background', 'linear-gradient(to right, #FEDB3F 0%, #FEDB3F ' + duration.value + '%, #626262 ' + duration.value + '%, #626262 100%)');
        if (video.ended) {
            video.pause;
            for (let i = 0; i < play.length; i++) {
                play[i].classList.remove('play--pause');
            }
        }
    }
    for (let i = 0; i < play.length; i++) {
        play[i].addEventListener('click', function(e) {
            togglePlayer(video);
        });
    }

    duration.addEventListener('change', function(e) {
        video.currentTime = video.duration / 100 * duration.value;
        console.log(duration.value);

    });



    volume.addEventListener('change', function(e) {
        video.volume = volume.value / 100;
        $(volume).css('background', 'linear-gradient(to right, #FEDB3F 0%, #FEDB3F ' + volume.value + '%, #626262 ' + volume.value + '%, #626262 100%)');
    });


    video.ontimeupdate = function() { ontimeupdate() };

    video.addEventListener('click', function(e) {
        togglePlayer(video);
    });
})()