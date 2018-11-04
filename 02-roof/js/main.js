$( document ).ready(function() {
    
    // СЛАЙДЕР НА ГЛАВНОЙ
    // $('.slider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     arrows: true,
    //     fade: false,
    //     dots: true,
    //     prevArrow: '<div class="arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="0.153in" height="0.25in" ><path fill-rule="evenodd" fill="rgb(249, 244, 236)" d="M11.005,17.997 L2.403,9.000 L11.005,0.002 L8.597,0.002 L-0.005,9.000 L8.597,17.997 L11.005,17.997 Z" /></svg></div>',
    //     nextArrow: '<div class="arrow arr-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="0.167in" height="0.25in" ><path fill-rule="evenodd" fill="rgb(249, 244, 236)" d="M-0.006,17.997 L9.378,9.000 L-0.006,0.002 L2.621,0.002 L12.006,9.000 L2.621,17.997 L-0.006,17.997 Z" /></svg></div>'
    // });

    $('.js--burger').click(function() {
        // $('.js--item').slideToggle(500);
        $('.js--item').slideToggle(500);
    });

    $(window).resize(function () {
        if ($(window).width() > 780) {
            $('.js--item').removeAttr('style');
        }
    });


    // cards();
    // $(window).resize(function() {
    //     cards();
    // });
    // function cards() {
    //     $('.cards--js .wrapper .item--js').height($('.cards--js .wrapper img').height());
    // }
    //
    // $('.cards--js .wrapper').height($('.cards--js .wrapper img').height() * 2);
    // $('.touch').click(function() {
    //     if($(this).hasClass('active')) {
    //         $(this).removeClass('active');
    //         $('#' + $(this).data('touch') + ' .item--js').css('transform', 'none');
    //         $('#' + $(this).data('touch') + ' .item--js:nth-child(8)').css('width', '25%');
    //         $('#' + $(this).data('touch') + ' .wrapper').height($('.cards--js .wrapper img').height() * 2);
    //     } else {
    //         $(this).addClass('active');
    //         $('#' + $(this).data('touch') + ' .item--js:nth-child(3)').css('transform', 'translateX(-100%)');
    //         $('#' + $(this).data('touch') + ' .item--js:nth-child(4)').css('transform', 'translateX(-200%)');
    //         $('#' + $(this).data('touch') + ' .item--js:nth-child(5)').css('transform', 'translateX(100%) translateY(-100%)');
    //         $('#' + $(this).data('touch') + ' .item--js:nth-child(6)').css('transform', 'translateY(-100%)');
    //         $('#' + $(this).data('touch') + ' .item--js:nth-child(7)').css('transform', 'translateX(-100%) translateY(-100%)');
    //         $('#' + $(this).data('touch') + ' .item:nth-child(8)').css('width', '50%');
    //         $('#' + $(this).data('touch') + ' .wrapper').height($('.cards--js .wrapper img').height());
    //         $('#' + $(this).data('touch') + ' .wrapper').height($('.cards--js .wrapper img').height());
    //     }
    // });



});