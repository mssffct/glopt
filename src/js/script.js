
$(document).ready(function(){
    $('.reviews__slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        // responsive: [
        //     {
        //     breakpoint: 768,
        //     settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 3
        //     }
        //     },
        //     {
        //     breakpoint: 480,
        //     settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 1
        //     }
        //     }
        // ]
    });
    
});

