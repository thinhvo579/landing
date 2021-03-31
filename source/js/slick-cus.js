// -----------------slick----------
jQuery(document).ready(function() {
    // ---------page home desktop
    // jQuery('.services-home-right').slick({
    //     autoplay: true,
    //     arrows: false,
    //     dots: true,
    //     slidesToShow: 1,
    //     draggable: false,
    //     infinite: true,
    //     pauseOnHover: false,
    //     swipe: false,
    //     touchMove: false,
    //     speed: 1500,
    //     autoplaySpeed: 5000,
    //     useTransform: true,
    //     cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    //     adaptiveHeight: true,
    //     focusOnSelect: true
    // });
    // --------page home mobile
    jQuery('.slick-mobile').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        draggable: false,
        infinite: true,
        pauseOnHover: false,
        swipe: false,
        touchMove: false,
        speed: 1500,
        autoplaySpeed: 5000,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        adaptiveHeight: true,
        focusOnSelect: true
    });

    jQuery(".btn-prev").click(function(event) {
        event.preventDefault();
        jQuery(".slick-mobile").slick("slickPrev");
    })
    jQuery(".btn-next").click(function(event) {
        event.preventDefault();
        jQuery(".slick-mobile").slick("slickNext");
    })
    // -------------page gallery
    // jQuery('.img-gallery').slick({
    //     autoplay: true,
    //     arrows: false,
    //     dots: false,
    //     slidesToShow: 1,
    //     draggable: false,
    //     infinite: true,
    //     pauseOnHover: false,
    //     swipe: false,
    //     touchMove: false,
    //     speed: 1500,
    //     autoplaySpeed: 3000,
    //     useTransform: true,
    //     cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    //     adaptiveHeight: true,
    //     focusOnSelect: true
    // });

    // jQuery(".button-prev").click(function(event) {
    //     event.preventDefault();
    //     jQuery(".img-gallery").slick("slickPrev");
    // })
    // jQuery(".button-next").click(function(event) {
    //     event.preventDefault();
    //     jQuery(".img-gallery").slick("slickNext");
    // })

    // jQuery('.link-slick')
    //     .on('init', function(event, slick) {
    //         jQuery('.link-slick .slick-slide.slick-current').addClass('is-active');
    //     })
    //     .slick({
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         dots: false,
    //         focusOnSelect: false,
    //         infinite: false,
    //     });

    // jQuery('.slick-services').on('afterChange', function(event, slick, currentSlide) {
    //     jQuery('.link-slick').slick('slickGoTo', currentSlide);
    //     var currrentNavSlideElem = '.link-slick .slick-slide[data-slick-index="' + currentSlide + '"]';
    //     jQuery('.link-slick .slick-slide.is-active').removeClass('is-active');
    //     jQuery(currrentNavSlideElem).addClass('is-active');
    // });

    // jQuery('.link-slick').on('click', '.slick-slide', function(event) {
    //     event.preventDefault();
    //     var goToSingleSlide = jQuery(this).data('slick-index');

    //     jQuery('.slick-services').slick('slickGoTo', goToSingleSlide);
    // });
});