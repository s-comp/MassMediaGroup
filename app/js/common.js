$(function() {
   $('.my-slider').owlCarousel({
    items: 1,
    nav: true,
    center: true,
    loop: true,
    smartSpeed:1000,
    responsive:{
        320:{
          items:1,
          autoplay: true
        },
        480:{
          autoplay: false
        }
    }

   });

   $('.owl_content').owlCarousel({
    loop: true,
    nav: true,
    items: 3,
    center: true,
    responsive:{
        320:{
          items:1,
          center: false,
        },
        480:{
          autoplay: false,
          center: false,
          items:2,
        },
        640:{
          autoplay: false,
          items:2,
        },
        768:{
          items: 2,
          center: false,
        },
        992: {
          items: 3,
          center: false,
        },
        1200: {
          center: true,
          items: 3,
        }
    }
  });
  $('.toggle').click(function() {
    $(this).toggleClass("on");
    $('.nav_wrap').slideToggle();
  });
});
//   var burger = $('.burger_menu'),
//   burgerPosition = burger.offset().top + 30,
//   scrollTop = 0,
//   windowWidth = 0;
//
//   $(window).resize(function() {
//     windowWidth = $(this).width();
//     risizeMenu();
//   });
//
//   $(window).scroll(function() {
//     scrollTop = $(this).scrollTop();
//     fixedMenu();
//   });
//
//   function fixedMenu() {
//     if (scrollTop >= burgerPosition ) {
//       burger.addClass('fixed');
//     }
//     else {
//       burger.removeClass('fixed');
//     };
//   }
//   function risizeMenu() {
//     var menu = $('.navbar ul'),
//         wrap = $('.wrap1');
//     if(windowWidth >= 768) {
//       menu.removeClass('show');
//       wrap.removeClass('site-left');
//       bur.removeClass('active');
//     }
//   }
//
//
//     console.log(scrollTop);
//
//
