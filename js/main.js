$(document).ready(function () {
    setTimeout(() => {
        RunAnimation()
    }, 1000);
})

function RunAnimation() {
    $('.text-play-top').delay(500).animate({
        left: '-=26vw',
    }, 300, ''/**swing or linear */, function() {
        $('html').css({'background-color': '#000000'});
        $('.text').css({'color': 'white'});
            $('.masker, .text').animate({
            },700, SplitAnimation())
    })

    $('.text-play-bottom').delay(400).animate({
        left: '-=26vw',
    },400)
}

function SplitAnimation() {
// tách 2 mảng text từ play, cho 2 cái chạy ngược phía nhau
var duration = 250;
$('.text-play-top').animate({
        top: '-=1.28rem',
        left: '-=3vw'
    },duration)

    $('.text-play-bottom').animate({
        top: '+=1.28rem',
    },duration)
// page use as breaker
$('.page').css({
    display: 'block',
})
    $('.page').animate({
        left: '0px',
    }, 300, function() {
        $('.page').animate({
            height: '100vh',
            top: '0'
        }, 500)

        $('.text-play-top').animate({
            top: '-=100vh',
        },700)

        $('.text-play-bottom').animate({
            top: '+=100vh',
        }, 700)
    })
}
