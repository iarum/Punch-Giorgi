let q = 0;
$(document).on('click', function () {
    q++;

    audio = new Audio(`assets/sound/punch.mp3`);
    audio.play();

    if (q % 2 === 0) {
        $('.right').css('top', '50%');
        $('.left').css('top', '80%');
    } else {
        $('.left').css('top', '50%');
        $('.right').css('top', '80%');
    }


})