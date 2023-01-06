// animation content start

new WOW().init();

// animation content end


// applic slider start

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    slideBy:2,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true,
            slideBy:2,
        }
    }
})

// applic slider end


// our  customer slick slider start
$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    Infinity:true,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    dots:true,
    focusOnSelect:true,
    draggable:true,
    touchThreshold : 100,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

// our customer slick slider end