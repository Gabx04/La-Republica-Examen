(function(window, document, $){
  $(document).ready(function(){
    $('slider').slick({
      slidesToShow: 6,
      preArrow: '.slider-container .prev',
      nextArrow: '.slider-container .next';
    })
  });
})(document, window, jQuery);



