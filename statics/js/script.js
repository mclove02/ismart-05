( function($) {
    $('.cover-slider').bxSlider({
        auto: true
    });     

    $('.product-nav a').on('click', function(event) {
        event.preventDefault();
        var size = $(this).width();
        var index = $(this).parents().index();
        var pos = size * index;
        var current = $('.product-contents li').eq(index);
        var sibling = current.siblings();
        current.fadeIn();
        sibling.hide();

        $('.indicator').stop().animate({ left: pos });
    }); 

    $('.product-nav a').eq(0).trigger('click');
})(jQuery);
