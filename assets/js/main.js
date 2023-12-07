let q = 0;
const giorgi = $('#giorgi');
$(document).on('click', function () {
    q++;

    audio = new Audio(`assets/sound/punch.mp3`);
    audio.play();

    giorgi.css('filter', 'hue-rotate(' + (q * 2) + 'deg)');

    if (q % 2 === 0) {
        $('.right').css('top', '50%');
        $('.left').css('top', '78%');
        giorgi.css('transform', 'rotate(4deg)');
        $('.right-eff').css('opacity', '1');

        setTimeout(function () {
            $('.right-eff').css('opacity', '0');
        }, 100);

    } else {
        $('.left').css('top', '50%');
        $('.right').css('top', '78%');
        giorgi.css('transform', 'rotate(-4deg)');
        $('.left-eff').css('opacity', '1');

        setTimeout(function () {
            $('.left-eff').css('opacity', '0');
        }, 100);
    }

})