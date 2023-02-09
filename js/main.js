// $(document).ready(function () {
//     setTimeout(() => {
//         RunAnimation()
//     }, 1000);
// })
// var viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var isAnimated = 0; //checkif animate executed
var viewportWidth = window.innerWidth;
// const browser = navigator.userAgent; //cái này để test trình duyệt
// alert(viewportWidth + browser);
function LaunchPage() {

    if (isAnimated === 0) {
        isAnimated = 1;
        setTimeout(() => {
            // document.getElementsByTagName("masker")[0].removeAttribute("onclick");
            LaunchSound();
        }, 3);
        
        setTimeout(() => {
            RunAnimation()
        }, 3);
    }
}


function RunAnimation() {
    var toLeft = '-=32vw';
    var duration = 700;
    $('.text-play-top').delay(500).animate({
        left: toLeft,
    }, duration, ''/**swing or linear */, function () {
        $('html').css({ 'background-color': '#000000' });
        $('.text').css({ 'color': 'white' });
        $('.masker, .text').animate({
        }, 700, SplitAnimation())
    })

    $('.text-play-bottom').delay(400).animate({
        left: toLeft,
    }, duration + 100)
}

function SplitAnimation() {
    // tách 2 mảng text từ play, cho 2 cái chạy ngược phía nhau
    var duration = 250;

    if (viewportWidth < 1000) {
        $('.text-play-top').animate({
            top: '-=4rem',
            left: '-=6vw'
        }, duration)
    
        $('.text-play-bottom').animate({
            top: '+=4rem',
            left: '+=4vw'
        }, duration)
    } else {
        $('.text-play-top').animate({
            top: '-=1.6rem',
            left: '-=6vw'
        }, duration)
    
        $('.text-play-bottom').animate({
            top: '+=1.6rem',
            left: '+=4vw'
        }, duration)
    }
    // page use as breaker
    $('.page').css({
        display: 'block',
    })

    // if (!navigator.userAgent.indexOf('Firefox')) { cái này xóa đi cũng được
    //     $('.page').css({
    //         top: 'calc(50% - 100px)'
    //     })
    // }

    $('.page').animate({
        left: '0px',
    }, 170, function () {
        var duration = 500;
        var duration2 = 700;
        var delay = 300;
        $('.page').delay(delay).animate({
            height: '100vh',
            top: '0'
        }, duration, function() {
            $('.remove').remove();
        })

        setTimeout(() => {
            $('.text-play-top').animate({
                top: '-=100vh',
            }, duration2)

            $('.text-play-bottom').animate({
                top: '+=100vh',
            }, duration2)
        }, delay);


    })
}


$('.page').css({
    height: 'fit-content'
})

function LaunchSound() {

    $('.launchSound').trigger('play');
}