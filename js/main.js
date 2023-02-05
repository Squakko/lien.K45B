$(document).ready(function () {
   RunAnimation();
})

function RunAnimation() {
    $('.text-play-top').delay(500).animate({
        left: '-=30vw',
    }, 300, '', function() {
        $('html').css({'background-color': '#000000'});
        $('.text').css({'color': 'white'});
            $('.masker, .text').animate({
            },700, /*SplitAnimation()*/)
    })

    $('.text-play-bottom').delay(400).animate({
        left: '-=30vw',
    },400)
}

function SplitAnimation() {



    $('.text-play-top').animate({
        top: '-=100vh',
    },800)
    $('.text-play-bottom').animate({
        top: '+=100vh',
    },800)
}