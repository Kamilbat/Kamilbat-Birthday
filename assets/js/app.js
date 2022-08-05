$(document).ready(function(){

    $('.burger').click(function(event){
       event.preventDefault();

        $('.burger__item, .nav').toggleClass('active');
        $('body').toggleClass('lock');
    });



    $('.slider__block').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
    });


    $('.photos__block').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        asNavFor: ".bigphotos__block",
        centerMode: true,
        arrows: false,

    });
    $('.bigphotos__block').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: ".photos__block",
        arrows: false,
        touchThreshold: 8,
    });


    $('.facts__title').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    });

    $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let blockID = $(this).data('scroll');
    let elementOffset = $(blockID).offset().top;

    $('.nav, .burger, .burger__item').removeClass("active");
        $('body').removeClass("lock");

    $("html, body").animate({
        scrollTop: elementOffset - 100
    }, 700);

    });


});
