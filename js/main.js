$(document).ready(function () {
    setTimeout(() => {
        RunAnimation()
    }, 1000);
})

function RunAnimation() {
    $('.text-play-top').delay(500).animate({
        left: '-=30vw',
    }, 300, ''/**swing or linear */, function() {
        $('html').css({'background-color': '#000000'});
        $('.text').css({'color': 'white'});
            $('.masker, .text').animate({
            },700, SplitAnimation())
    })

    $('.text-play-bottom').delay(400).animate({
        left: '-=30vw',
    },400)
}

function SplitAnimation() {
// tách 2 mảng text từ play, cho 2 cái chạy ngược phía nhau
    $('.text-play-top').animate({
        top: '-=1.28vh',
        left: '-=3vw'
    },400)

    $('.text-play-bottom').animate({
        top: '+=1.28vh',
    },400)
// page use as breaker
    // $('.page').animate({
    //     left: '0',
    // }, fast)


}