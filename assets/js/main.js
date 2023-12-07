let q = 0;
const giorgi = $('#giorgi');
$(document).on('click', function () {
    q++;

    audio = new Audio(`assets/sound/punch.mp3`);
    audio.play();

    giorgi.css('filter', 'hue-rotate(' + (q * 2) + 'deg)');

    if (q % 2 === 0) {
        $('.right').css('top', '50%');
        $('.left').css('top', '80%');

        giorgi.css('transform', 'rotate(4deg)');

    } else {
        $('.left').css('top', '50%');
        $('.right').css('top', '80%');
        giorgi.css('transform', 'rotate(-4deg)');
    }


})